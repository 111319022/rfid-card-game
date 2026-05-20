/**
 * intro.js — 前導故事（視覺小說 VN 版型）
 */

export const INTRO_STORAGE_KEY = 'dtd_intro_seen_v3';

const BG_DEFAULT = 'IMG/場景圖/首頁背景圖.gif';
const PORTRAIT_RAY = 'IMG/角色卡/Ray/Ray第一幀.png';
const PORTRAIT_DAXI = 'IMG/角色卡/大西/大西第一幀.png';
const PORTRAIT_MODICK = 'IMG/角色卡/魔迪克/魔迪克 去背.PNG';
const PORTRAIT_LAI = 'IMG/角色卡/Lai芷翊/Lai芷翊 去背.png';
const PORTRAIT_170 = 'IMG/角色卡/170/170 (扎眼圖).png';
const PORTRAIT_XIAOBA = 'IMG/角色卡/小巴/小巴 去背.png';
const RPS_SCISSORS = 'IMG/出拳/result-scissors.png';
const RPS_ROCK = 'IMG/出拳/result-rock.png';
const RPS_PAPER = 'IMG/出拳/result-paper.png';

/**
 * @typedef {'normal' | 'system' | 'chapter' | 'rps' | 'system-center' | 'system-center-alert'} IntroVariant
 * @typedef {'left' | 'center' | 'right' | 'hide'} PortraitPos
 *
 * @typedef {object} IntroSlide
 * @property {IntroVariant} [variant]
 * @property {string} [chapter]
 * @property {string} [title]
 * @property {string} [speaker]
 * @property {string} [text]
 * @property {string} [portrait]
 * @property {PortraitPos} [portraitPos]
 * @property {{ src: string, pos?: PortraitPos, alt?: string, className?: string }[]} [portraits]
 * @property {string} [bg]
 */

/** @type {IntroSlide[]} */
export const INTRO_SLIDES = [
  { variant: 'chapter', chapter: 'DTD 大亂鬥', title: '前導故事', bg: BG_DEFAULT },
  { variant: 'chapter', chapter: '序章', title: '墜入代碼之海', bg: BG_DEFAULT },
  { speaker: 'Ray', portrait: PORTRAIT_RAY, portraitPos: 'left', text: '「大西那個死仔。」', bg: BG_DEFAULT },
  { speaker: 'Ray', portrait: PORTRAIT_RAY, portraitPos: 'left', text: '這是Ray 大帥哥睜開眼的那一刻，所講的話。', bg: BG_DEFAULT },
  { variant: 'system-center', speaker: 'SYSTEM', text: '這裡是「絕對數位世界」', bg: BG_DEFAULT },
  { variant: 'system-center', speaker: 'SYSTEM', text: '一個以邏輯構成的異空間，沒有規則，只有一條亙古不變的協定。', bg: BG_DEFAULT },
  { variant: 'rps', speaker: 'SYSTEM', text: '「猜拳」。', bg: BG_DEFAULT },
  {
    speaker: '旁白',
    text: '他不是第一次來這裡了——三個月前，大西那個世紀大盜，把那份足以撼動現實世界的「原始代碼」整份偷走，然後消失在數位洪流之中。',
    bg: BG_DEFAULT,
  },
  {
    speaker: 'Ray',
    portrait: PORTRAIT_RAY,
    portraitPos: 'left',
    text: '而現在，Ray 又被強制送回原點。',
    bg: BG_DEFAULT,
  },
  { variant: 'system-center', speaker: 'SYSTEM', text: '「歡迎來到絕對數位世界。」', bg: BG_DEFAULT },
  { variant: 'chapter', chapter: '第一章', title: '世紀大盜的遊樂場', bg: BG_DEFAULT },
  { speaker: '旁白', text: '這個世界，是大西建的。', bg: BG_DEFAULT },
  { speaker: '旁白', portrait: PORTRAIT_DAXI, portraitPos: 'left', text: '大西用盜來的原始代碼重構了整個數位異世界，把它變成了自己的私人賭場。', bg: BG_DEFAULT },
  { speaker: '旁白', portrait: PORTRAIT_DAXI, portraitPos: 'left', text: '大西坐在這個世界的頂端，用「猜拳擂台大賽」吸引無數人前來挑戰，讓輸家成為自己的奴隸。', bg: BG_DEFAULT },
  { speaker: '旁白', text: '猜拳，在這個世界不是遊戲。', bg: BG_DEFAULT },
  { speaker: '旁白', text: '它是戰鬥指令、是法庭判決、是生死裁決。', bg: BG_DEFAULT },
  { speaker: '旁白', text: '當有人對你發出「剪刀、石頭、布」的宣告，系統便會強制進入對戰。', bg: BG_DEFAULT },
  { speaker: '旁白', text: '每個人手持出拳卡，在擂台上用最原始的對決協定廝殺。', bg: BG_DEFAULT },
  { speaker: '旁白', text: '勝者繼續前進，敗者，會被系統以物理引擎直接轟飛出局。', bg: BG_DEFAULT },
  { variant: 'system-center-alert', speaker: 'SYSTEM', text: '「剪刀、石頭——」', bg: BG_DEFAULT },
  { speaker: '旁白', text: '紅色提示框突然在他面前爆開，Ray 還沒來得及摸出卡片，系統判定超時，強制判罰。', bg: BG_DEFAULT },
  { speaker: '旁白', text: '一道具象化的衝擊波把他從擂台上轟了出去，重重摔進城市底層的暗網巷道。', bg: BG_DEFAULT },
  { speaker: 'Ray', portrait: PORTRAIT_RAY, portraitPos: 'left', text: '他爬起來，拍掉身上的數據碎片，神情平靜。', bg: BG_DEFAULT },
  { speaker: 'Ray', portrait: PORTRAIT_RAY, portraitPos: 'left', text: '「沒事，就當熱身。」', bg: BG_DEFAULT },
  { variant: 'chapter', chapter: '終章', title: '大亂鬥，開始', bg: BG_DEFAULT },
  { speaker: '旁白', text: '大西的總部懸浮在這個世界的最高點，像一座扭曲的數位巴別塔。', bg: BG_DEFAULT },
  { speaker: '旁白', text: '只有連續50場勝利的人才有資格挑戰大西。', bg: BG_DEFAULT },
  {
    speaker: '旁白',
    text: '魔迪克、170等人都對這個資格虎視眈眈。',
    portraits: [
      { src: PORTRAIT_MODICK, pos: 'left', alt: '魔迪克' },
      { src: PORTRAIT_LAI, alt: 'Lai芷翊', className: 'intro-char-portrait--lai' },
      { src: PORTRAIT_170, alt: '170' },
      { src: PORTRAIT_XIAOBA, pos: 'right', alt: '小巴' },
    ],
    bg: BG_DEFAULT,
  },
  { speaker: 'Ray', portrait: PORTRAIT_RAY, portraitPos: 'left', text: 'Ray 從口袋裡抽出猜拳卡，在 手心裡轉了一圈。', bg: BG_DEFAULT },
  { speaker: 'Ray', portrait: PORTRAIT_RAY, portraitPos: 'left', text: '「大西，」', bg: BG_DEFAULT },
  { speaker: 'Ray', portrait: PORTRAIT_RAY, portraitPos: 'left', text: '整個數位世界的節點都靜了下來', bg: BG_DEFAULT },
  { speaker: 'Ray', portrait: PORTRAIT_RAY, portraitPos: 'left', text: '「三個月前你欠我的——」', bg: BG_DEFAULT },
  { speaker: 'Ray', portrait: PORTRAIT_RAY, portraitPos: 'left', text: '「今天，連本帶利，我來收了。」', bg: BG_DEFAULT },
  { variant: 'chapter', chapter: '>>>', title: 'DTD 大亂鬥——正式開始。', bg: BG_DEFAULT },
];

/**
 * @param {HTMLElement} el
 * @param {string} text
 * @param {number} speedMs
 * @returns {Promise<void>}
 */
const RPS_INTRO_ITEMS = [
  { src: RPS_SCISSORS, label: '剪刀' },
  { src: RPS_ROCK, label: '石頭' },
  { src: RPS_PAPER, label: '布' },
];

/**
 * @param {HTMLElement} container
 */
function appendRpsStrip(container) {
  const strip = document.createElement('div');
  strip.className = 'intro-rps-strip';
  strip.setAttribute('aria-hidden', 'false');
  for (const { src, label } of RPS_INTRO_ITEMS) {
    const item = document.createElement('div');
    item.className = 'intro-rps-item';
    const img = document.createElement('img');
    img.className = 'intro-rps-img';
    img.src = src;
    img.alt = label;
    img.decoding = 'async';
    const cap = document.createElement('span');
    cap.className = 'intro-rps-label';
    cap.textContent = label;
    item.append(img, cap);
    strip.appendChild(item);
  }
  container.appendChild(strip);
}

/**
 * @param {HTMLElement} el
 * @param {string} text
 * @param {number} speedMs
 * @param {{ aborted?: boolean } | null} token
 */
function typeText(el, text, speedMs = 24, token = null) {
  return new Promise((resolve) => {
    el.textContent = '';
    let i = 0;
    let timer = null;
    const tick = () => {
      if (token?.aborted) {
        if (timer) clearTimeout(timer);
        resolve();
        return;
      }
      if (i >= text.length) {
        resolve();
        return;
      }
      el.textContent += text[i];
      i += 1;
      timer = setTimeout(tick, speedMs);
    };
    tick();
  });
}

/**
 * @param {object} options
 * @param {HTMLElement} [options.rootEl]
 * @param {() => void} [options.onComplete]
 * @param {() => void} [options.onSkip]
 * @param {() => void} [options.onShow]
 * @param {() => void} [options.onHide]
 * @param {IntroSlide[]} [options.slides]
 */
export function createIntroController(options = {}) {
  const {
    rootEl = document.body,
    onComplete,
    onSkip,
    onShow,
    onHide,
    slides = INTRO_SLIDES,
  } = options;

  let overlay = null;
  let skipBtn = null;
  let backBtn = null;
  let bgEl = null;
  let vignetteEl = null;
  let charLayer = null;
  let portraitAnchor = null;
  let chapterCard = null;
  let dialogWrap = null;
  let dialogBox = null;
  let nameplate = null;
  let speakerEl = null;
  let textEl = null;
  let progressEl = null;
  let hintEl = null;
  let backAnchor = null;
  let systemCenterEl = null;
  let systemCenterBoxEl = null;
  let systemCenterLabelEl = null;
  let systemCenterTextEl = null;
  let rpsStageEl = null;

  let index = 0;
  let visible = false;
  let slideLocked = false;
  let typingDone = true;
  let isTypingActive = false;
  let typeAbort = null;
  let keyHandler = null;
  let markSeenOnFinish = true;
  /** @type {string | null} */
  let lastPortraitKey = null;

  /**
   * @param {IntroSlide} slide
   * @returns {string | null}
   */
  function portraitKey(slide) {
    if (slide.portraits?.length) {
      return slide.portraits.map((p) => `${p.pos || 'left'}|${p.src}`).join('||');
    }
    if (!slide.portrait || slide.portraitPos === 'hide') return null;
    return `${slide.speaker || ''}|${slide.portrait}`;
  }

  /** @param {HTMLImageElement} img */
  function revealPortrait(img) {
    requestAnimationFrame(() => {
      img.classList.add('is-visible');
      const markHeld = () => img.classList.add('is-held');
      img.addEventListener('transitionend', markHeld, { once: true });
      setTimeout(markHeld, 500);
    });
  }

  function ensureDom() {
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.id = 'intro-overlay';
    overlay.className = 'intro-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', '前導故事');

    bgEl = document.createElement('div');
    bgEl.className = 'intro-bg';
    overlay.appendChild(bgEl);

    vignetteEl = document.createElement('div');
    vignetteEl.className = 'intro-bg-vignette';
    overlay.appendChild(vignetteEl);

    charLayer = document.createElement('div');
    charLayer.className = 'intro-char-layer';
    portraitAnchor = document.createElement('div');
    portraitAnchor.className = 'intro-char-anchor';
    charLayer.appendChild(portraitAnchor);
    overlay.appendChild(charLayer);

    chapterCard = document.createElement('div');
    chapterCard.className = 'intro-chapter-card';
    chapterCard.hidden = true;
    chapterCard.innerHTML = '<p class="intro-chapter-label"></p><h2 class="intro-chapter-title"></h2>';
    overlay.appendChild(chapterCard);

    systemCenterEl = document.createElement('div');
    systemCenterEl.className = 'intro-system-center';
    systemCenterEl.hidden = true;
    const centerStack = document.createElement('div');
    centerStack.className = 'intro-system-center-stack';
    systemCenterBoxEl = document.createElement('div');
    systemCenterBoxEl.className = 'intro-system-center-box';
    systemCenterLabelEl = document.createElement('p');
    systemCenterLabelEl.className = 'intro-system-center-label';
    systemCenterLabelEl.textContent = 'SYSTEM';
    systemCenterTextEl = document.createElement('p');
    systemCenterTextEl.className = 'intro-system-center-text';
    systemCenterBoxEl.append(systemCenterLabelEl, systemCenterTextEl);
    rpsStageEl = document.createElement('div');
    rpsStageEl.className = 'intro-rps-stage';
    rpsStageEl.hidden = true;
    centerStack.append(systemCenterBoxEl, rpsStageEl);
    systemCenterEl.appendChild(centerStack);
    overlay.appendChild(systemCenterEl);

    dialogWrap = document.createElement('div');
    dialogWrap.className = 'intro-dialog-wrap';
    dialogBox = document.createElement('div');
    dialogBox.className = 'intro-dialog-box';
    nameplate = document.createElement('div');
    nameplate.className = 'intro-nameplate';
    speakerEl = document.createElement('p');
    speakerEl.className = 'intro-speaker-name';
    nameplate.appendChild(speakerEl);
    textEl = document.createElement('p');
    textEl.className = 'intro-dialog-text';
    dialogBox.append(nameplate, textEl);
    dialogWrap.appendChild(dialogBox);
    overlay.appendChild(dialogWrap);

    skipBtn = document.createElement('button');
    skipBtn.type = 'button';
    skipBtn.className = 'intro-skip-btn';
    skipBtn.textContent = 'SKIP';
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      skip({ markSeen: markSeenOnFinish });
    });
    overlay.appendChild(skipBtn);

    backAnchor = document.createElement('div');
    backAnchor.className = 'intro-back-anchor';
    backBtn = document.createElement('button');
    backBtn.type = 'button';
    backBtn.className = 'intro-back-btn';
    backBtn.textContent = '◀ 上一頁';
    backBtn.disabled = true;
    backBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      goBack();
    });
    backAnchor.appendChild(backBtn);
    overlay.appendChild(backAnchor);

    const onStageClick = (e) => {
      e.stopPropagation();
      advance();
    };
    dialogWrap.addEventListener('click', onStageClick);
    systemCenterEl.addEventListener('click', onStageClick);

    hintEl = document.createElement('div');
    hintEl.className = 'intro-hint';
    hintEl.textContent = '點擊顯示全文 · 再點下一步';
    overlay.appendChild(hintEl);

    progressEl = document.createElement('div');
    progressEl.className = 'intro-progress';
    overlay.appendChild(progressEl);

    overlay.addEventListener('click', () => advance());

    keyHandler = (e) => {
      if (!visible) return;
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
        e.preventDefault();
        advance();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goBack();
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        skip({ markSeen: markSeenOnFinish });
      }
    };
    document.addEventListener('keydown', keyHandler);

    rootEl.appendChild(overlay);
  }

  function setBg(url) {
    if (!bgEl) return;
    bgEl.style.backgroundImage = url ? `url("${url}")` : 'none';
  }

  function updateProgress() {
    if (progressEl) progressEl.textContent = `${index + 1} / ${slides.length}`;
  }

  /**
   * @param {IntroSlide} slide
   * @returns {IntroVariant}
   */
  function slideVariant(slide) {
    return slide.variant || (slide.speaker === 'SYSTEM' || slide.speaker === '系統' ? 'system' : 'normal');
  }

  /** Bottom dialogue box (not chapter title / centered SYSTEM / RPS) */
  function isDialogBoxSlide(slide) {
    const v = slideVariant(slide);
    return v !== 'chapter' && v !== 'system-center' && v !== 'system-center-alert' && v !== 'rps';
  }

  /** @param {number} fromIndex */
  function findPrevDialogIndex(fromIndex) {
    for (let i = fromIndex - 1; i >= 0; i--) {
      if (isDialogBoxSlide(slides[i])) return i;
    }
    return -1;
  }

  function updateNavButtons() {
    const slide = slides[index];
    const showBack = Boolean(slide && isDialogBoxSlide(slide));
    const prevIdx = showBack ? findPrevDialogIndex(index) : -1;
    if (backAnchor) backAnchor.hidden = !showBack;
    if (backBtn) backBtn.disabled = !showBack || prevIdx < 0;
  }

  function clearPortraits() {
    if (portraitAnchor) {
      portraitAnchor.innerHTML = '';
      portraitAnchor.classList.remove('intro-char-anchor--dual', 'intro-char-anchor--multi', 'intro-char-anchor--quad');
    }
    charLayer?.classList.remove('has-portrait');
    lastPortraitKey = null;
  }

  /**
   * @param {IntroSlide} slide
   */
  function renderPortraits(slide) {
    const key = portraitKey(slide);
    if (!key) {
      clearPortraits();
      return;
    }

    if (slide.portraits?.length) {
      const existing = portraitAnchor?.querySelectorAll('.intro-char-portrait');
      if (key === lastPortraitKey && existing?.length === slide.portraits.length) {
        existing.forEach((img) => img.classList.add('is-visible', 'is-held'));
        portraitAnchor?.classList.toggle('intro-char-anchor--dual', slide.portraits.length === 2);
        portraitAnchor?.classList.toggle('intro-char-anchor--multi', slide.portraits.length >= 3);
        portraitAnchor?.classList.toggle('intro-char-anchor--quad', slide.portraits.length >= 4);
        charLayer?.classList.add('has-portrait');
        return;
      }

      clearPortraits();
      lastPortraitKey = key;
      portraitAnchor?.classList.toggle('intro-char-anchor--dual', slide.portraits.length === 2);
      portraitAnchor?.classList.toggle('intro-char-anchor--multi', slide.portraits.length >= 3);
      portraitAnchor?.classList.toggle('intro-char-anchor--quad', slide.portraits.length >= 4);

      for (const entry of slide.portraits) {
        const img = document.createElement('img');
        img.className = 'intro-char-portrait';
        if (entry.pos === 'right') img.classList.add('intro-char-portrait--right');
        if (entry.pos === 'center') img.classList.add('intro-char-portrait--center');
        if (entry.className) img.classList.add(entry.className);
        img.src = entry.src;
        img.alt = entry.alt || '';
        img.decoding = 'async';
        portraitAnchor.appendChild(img);
        revealPortrait(img);
      }
      charLayer?.classList.add('has-portrait');
      return;
    }

    portraitAnchor?.classList.remove('intro-char-anchor--dual', 'intro-char-anchor--multi', 'intro-char-anchor--quad');
    const existing = portraitAnchor?.querySelector('.intro-char-portrait');
    if (key === lastPortraitKey && existing) {
      existing.classList.add('is-visible', 'is-held');
      charLayer?.classList.add('has-portrait');
      return;
    }

    clearPortraits();
    lastPortraitKey = key;

    const img = document.createElement('img');
    img.className = 'intro-char-portrait';
    if (slide.portraitPos === 'right') img.classList.add('intro-char-portrait--right');
    img.src = slide.portrait;
    img.alt = slide.speaker || '';
    img.decoding = 'async';
    portraitAnchor.appendChild(img);
    charLayer.classList.add('has-portrait');
    revealPortrait(img);
  }

  function abortTyping() {
    if (typeAbort) {
      typeAbort.aborted = true;
      typeAbort = null;
    }
    isTypingActive = false;
    textEl?.querySelector('.intro-dialog-cursor')?.remove();
    systemCenterTextEl?.querySelector('.intro-dialog-cursor')?.remove();
  }

  /**
   * @param {HTMLElement} textSpan
   * @param {HTMLElement | null} cursor
   * @param {string} body
   * @param {number} speed
   * @param {{ aborted: boolean }} token
   */
  function startTyping(textSpan, cursor, body, speed, token) {
    isTypingActive = true;
    typingDone = false;
    typeAbort = token;
    void typeText(textSpan, body, speed, token).then(() => {
      if (token.aborted) return;
      cursor?.remove();
      typingDone = true;
      isTypingActive = false;
      typeAbort = null;
    });
  }

  /** Hide chapter / system overlays; optional full reset including portrait */
  function hideAllStages({ clearPortrait = true } = {}) {
    chapterCard.hidden = true;
    dialogWrap.hidden = true;
    systemCenterEl.hidden = true;
    rpsStageEl.hidden = true;
    rpsStageEl.innerHTML = '';
    charLayer.style.visibility = 'hidden';
    if (clearPortrait) clearPortraits();
    overlay?.classList.remove('intro-mode-chapter', 'intro-mode-dialog', 'intro-mode-system-center');
  }

  /** Dialog → dialog: keep portrait on screen */
  function showDialogStage() {
    chapterCard.hidden = true;
    systemCenterEl.hidden = true;
    rpsStageEl.hidden = true;
    rpsStageEl.innerHTML = '';
    dialogWrap.hidden = false;
    charLayer.style.visibility = 'visible';
    overlay?.classList.remove('intro-mode-chapter', 'intro-mode-system-center');
    overlay?.classList.add('intro-mode-dialog');
  }

  /**
   * @param {IntroSlide} slide
   * @param {boolean} showRps
   */
  function applySystemCenterStyle(slide) {
    const isAlert = slide.variant === 'system-center-alert';
    systemCenterBoxEl?.classList.toggle('intro-system-center-box--alert', isAlert);
    if (systemCenterLabelEl) systemCenterLabelEl.textContent = 'SYSTEM';
  }

  function renderSystemCenterSlide(slide, showRps) {
    hideAllStages();
    overlay.classList.add('intro-mode-system-center');
    systemCenterEl.hidden = false;
    applySystemCenterStyle(slide);
    rpsStageEl.hidden = !showRps;
    rpsStageEl.innerHTML = '';
    if (showRps) appendRpsStrip(rpsStageEl);

    const body = slide.text || '';
    if (!systemCenterTextEl) {
      typingDone = true;
      isTypingActive = false;
      return;
    }

    systemCenterTextEl.textContent = '';
    if (!body) {
      typingDone = true;
      isTypingActive = false;
      return;
    }

    const textSpan = document.createElement('span');
    textSpan.className = 'intro-system-center-text-inner';
    const cursor = document.createElement('span');
    cursor.className = 'intro-dialog-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    systemCenterTextEl.append(textSpan, cursor);

    const token = { aborted: false };
    startTyping(textSpan, cursor, body, 30, token);
  }

  /**
   * @param {IntroSlide} slide
   */
  function completeSystemCenterSlide(slide) {
    if (!systemCenterTextEl) return;
    applySystemCenterStyle(slide);
    systemCenterTextEl.textContent = '';
    if (slide.text) {
      const span = document.createElement('span');
      span.className = 'intro-system-center-text-inner';
      span.textContent = slide.text;
      systemCenterTextEl.appendChild(span);
    }
    rpsStageEl.innerHTML = '';
    if (slide.variant === 'rps') {
      rpsStageEl.hidden = false;
      appendRpsStrip(rpsStageEl);
    }
  }

  /** @returns {boolean} true if typing was in progress and is now complete */
  function finishTypingNow() {
    const slide = slides[index];
    if (!slide || !isTypingActive) return false;
    abortTyping();
    completeSlideText(slide);
    typingDone = true;
    return true;
  }

  async function renderSlide(slide) {
    if (!overlay) {
      slideLocked = false;
      return;
    }
    slideLocked = true;
    abortTyping();
    setBg(slide.bg || BG_DEFAULT);
    updateProgress();
    updateNavButtons();

    const variant = slideVariant(slide);
    const isChapter = variant === 'chapter';
    const isSystemCenter = variant === 'system-center' || variant === 'system-center-alert';
    const isRps = variant === 'rps';
    const isSystem = variant === 'system' || slide.speaker === '系統';

    if (isChapter) {
      hideAllStages();
      overlay.classList.add('intro-mode-chapter');
      chapterCard.hidden = false;
      const label = chapterCard.querySelector('.intro-chapter-label');
      const title = chapterCard.querySelector('.intro-chapter-title');
      if (label) label.textContent = slide.chapter || '';
      if (title) title.textContent = slide.title || slide.text || '';
      typingDone = true;
      slideLocked = false;
      return;
    }

    if (isSystemCenter) {
      renderSystemCenterSlide(slide, false);
      slideLocked = false;
      return;
    }

    if (isRps) {
      renderSystemCenterSlide(slide, true);
      slideLocked = false;
      return;
    }

    const wasDialog = overlay.classList.contains('intro-mode-dialog');
    if (wasDialog) {
      showDialogStage();
    } else {
      hideAllStages();
      showDialogStage();
    }

    renderPortraits(slide);

    dialogBox.className = 'intro-dialog-box' + (isSystem ? ' intro-dialog-box--system' : '');
    nameplate.className = 'intro-nameplate' + (isSystem ? ' intro-nameplate--system' : '');

    const displayName = isSystem ? 'SYSTEM' : (slide.speaker || '旁白');
    speakerEl.textContent = displayName;
    nameplate.hidden = !displayName;

    const body = slide.text || '';
    textEl.textContent = '';

    if (!body) {
      typingDone = true;
      slideLocked = false;
      return;
    }

    const textSpan = document.createElement('span');
    textSpan.className = 'intro-dialog-text-inner';
    const cursor = document.createElement('span');
    cursor.className = 'intro-dialog-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    textEl.append(textSpan, cursor);

    const token = { aborted: false };
    const speed = isSystem ? 28 : 22;
    slideLocked = false;
    startTyping(textSpan, cursor, body, speed, token);
  }

  /**
   * @param {IntroSlide} slide
   */
  function completeSlideText(slide) {
    const variant = slide.variant;
    if (variant === 'system-center' || variant === 'system-center-alert' || variant === 'rps') {
      completeSystemCenterSlide(slide);
      return;
    }
    if (!textEl) return;
    textEl.textContent = '';
    if (slide.text) {
      const span = document.createElement('span');
      span.className = 'intro-dialog-text-inner';
      span.textContent = slide.text;
      textEl.appendChild(span);
    }
  }

  function markSeenStorage() {
    try {
      localStorage.setItem(INTRO_STORAGE_KEY, '1');
    } catch { /* ignore */ }
  }

  function hasSeenStorage() {
    try {
      return localStorage.getItem(INTRO_STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  }

  function finish({ markSeen = true, skipped = false } = {}) {
    if (!visible) return;
    abortTyping();
    visible = false;
    slideLocked = false;
    document.body.classList.remove('intro-active');
    if (overlay) {
      overlay.classList.add('is-fading-out');
      overlay.classList.remove('is-visible');
      setTimeout(() => {
        if (overlay) {
          overlay.classList.remove('is-fading-out');
          overlay.style.display = 'none';
        }
      }, 450);
    }
    onHide?.();
    if (markSeen) markSeenStorage();
    if (skipped) onSkip?.();
    else onComplete?.();
  }

  function show({ force = false, markSeenOnFinish: markSeenOpt = true } = {}) {
    if (visible) return;
    if (!force && hasSeenStorage()) return;

    markSeenOnFinish = markSeenOpt;
    ensureDom();
    index = 0;
    lastPortraitKey = null;
    visible = true;
    slideLocked = false;
    document.body.classList.add('intro-active');
    if (overlay) {
      overlay.style.display = 'block';
      overlay.classList.remove('is-fading-out');
      requestAnimationFrame(() => overlay.classList.add('is-visible'));
    }
    onShow?.();
    renderSlide(slides[index]);
    updateNavButtons();
  }

  function hide() {
    finish({ markSeen: false, skipped: false });
  }

  function skip({ markSeen = true } = {}) {
    finish({ markSeen, skipped: true });
  }

  async function advance() {
    if (!visible || slideLocked) return;

    if (finishTypingNow()) return;

    if (index >= slides.length - 1) {
      finish({ markSeen: markSeenOnFinish, skipped: false });
      return;
    }

    index += 1;
    await renderSlide(slides[index]);
  }

  async function goBack() {
    if (!visible || slideLocked) return;
    const slide = slides[index];
    if (!slide || !isDialogBoxSlide(slide)) return;
    const prevIdx = findPrevDialogIndex(index);
    if (prevIdx < 0) return;
    finishTypingNow();
    index = prevIdx;
    await renderSlide(slides[index]);
  }

  function isVisible() {
    return visible;
  }

  function destroy() {
    abortTyping();
    if (keyHandler) document.removeEventListener('keydown', keyHandler);
    keyHandler = null;
    overlay?.remove();
    overlay = null;
    document.body.classList.remove('intro-active');
    visible = false;
  }

  return {
    show,
    hide,
    skip,
    advance,
    back: goBack,
    isVisible,
    hasSeenStorage,
    markSeenStorage,
    destroy,
  };
}
