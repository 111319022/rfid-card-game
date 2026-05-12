"""
ESP32 + MFRC-522 主程式
讀取卡片 Block 8（名稱）+ Block 9（屬性）→ 輸出 JSON 給瀏覽器 Web Serial API

接線（ESP32 VSPI）：
  SDA(CS)→GPIO5  SCK→GPIO18  MOSI→GPIO23  MISO→GPIO19  RST→GPIO22
  電源：3.3V（不要接 5V）

LED 接線：
  外接 LED 正極 → GPIO 2 → 220Ω 電阻 → GND
  （GPIO 2 同時也是大多數 ESP32 開發板的內建 LED）
  LED 行為：
    已知卡片  → 長亮 400ms
    未知卡片  → 快閃 3 下
    讀卡失敗  → 慢閃 2 下
"""

import time
import json
from machine import Pin
from mfrc522 import MFRC522
from card_utils import BLOCK_NAME, BLOCK_STATS, KEY, decode_card

PIN_SCK  = 18
PIN_MOSI = 23
PIN_MISO = 19
PIN_RST  = 22
PIN_CS   = 5
PIN_LED  = 2

DEBUG        = True
DEBOUNCE_SEC = 1.5
SCAN_INTERVAL = 0.1


def log(msg):
    if DEBUG:
        print("[DEBUG]", msg)


def uid_to_string(uid):
    return "-".join("{:02X}".format(b) for b in uid[:4])


def send(data):
    print(json.dumps(data))


# ─── LED 控制 ────────────────────────────────────────────────

def led_known():
    """已知卡片：長亮 400ms"""
    led.value(1)
    time.sleep_ms(400)
    led.value(0)


def led_unknown():
    """未知卡片：快閃 3 下"""
    for _ in range(3):
        led.value(1)
        time.sleep_ms(80)
        led.value(0)
        time.sleep_ms(80)


def led_error():
    """讀卡失敗（auth/read error）：慢閃 2 下"""
    for _ in range(2):
        led.value(1)
        time.sleep_ms(250)
        led.value(0)
        time.sleep_ms(250)


def read_card_data(rdr, uid):
    """驗證並讀取 Block 8、9，失敗回傳 None, None"""
    if rdr.select_tag(uid) != rdr.OK:
        log("select_tag 失敗")
        return None, None

    if rdr.auth(rdr.AUTHENT1A, BLOCK_STATS, KEY, uid) != rdr.OK:
        log("auth 失敗")
        rdr.stop_crypto1()
        return None, None

    name_block  = rdr.read(BLOCK_NAME)
    stats_block = rdr.read(BLOCK_STATS)
    rdr.stop_crypto1()

    return name_block, stats_block


def init_reader():
    log("初始化 MFRC522 ...")
    rdr = MFRC522(PIN_SCK, PIN_MOSI, PIN_MISO, PIN_RST, PIN_CS)
    ver = rdr._rreg(0x37)
    log("Version Register = 0x{:02X}".format(ver))
    if ver in (0x00, 0xFF):
        print("[ERROR] SPI 無回應，請檢查接線")
    return rdr


def main():
    global led
    led = Pin(PIN_LED, Pin.OUT)
    led.value(0)

    # 開機閃一下，確認 LED 有接好
    led.value(1)
    time.sleep_ms(200)
    led.value(0)

    rdr = init_reader()
    print("[READY]")

    last_uid    = None
    last_time   = 0
    loop_count  = 0

    while True:
        loop_count += 1
        (stat, _) = rdr.request(rdr.REQIDL)

        if stat == rdr.OK:
            (stat, raw_uid) = rdr.anticoll()
            if stat == rdr.OK:
                uid_str = uid_to_string(raw_uid)
                now = time.time()

                if uid_str == last_uid and (now - last_time) < DEBOUNCE_SEC:
                    log("debounce: {}".format(uid_str))
                else:
                    name_blk, stats_blk = read_card_data(rdr, raw_uid)

                    if name_blk and stats_blk:
                        card = decode_card(name_blk, stats_blk, uid_str)
                        if card["type"] == "UNKNOWN":
                            led_unknown()
                        else:
                            led_known()
                    else:
                        card = {"type": "UNKNOWN", "uid": uid_str}
                        led_error()

                    send(card)
                    log("sent: {} ({})".format(uid_str, card.get("type")))
                    last_uid  = uid_str
                    last_time = now
        else:
            if last_uid is not None:
                log("卡片離開: {}".format(last_uid))
                last_uid = None

            if DEBUG and loop_count % 100 == 0:
                log("掃描中... loop={}".format(loop_count))

        time.sleep(SCAN_INTERVAL)


try:
    main()
except KeyboardInterrupt:
    print("[STOP]")
except Exception as e:
    import sys
    print("[ERROR]", e)
    sys.print_exception(e)
