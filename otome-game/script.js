import { scenario } from './scenario.js';

// ==========================================================================
// GAME STATE MANAGEMENT
// ==========================================================================
let state = {
  currentScene: 'ep1',
  stepIndex: 0,
  affinity: {
    jiho: 0,
    sunwoo: 0,
    doyun: 0
  },
  historyLog: [],
  unlockedEpisode: 'ep1', // Tracks the furthest unlocked episode
  lobbyCharacter: 'jiho', // Active lobby character
  playerName: '은하',
  
  // New 5-Tab System State
  activeLobbyTab: 'main', // 'main', 'closet', 'job', 'room', 'album'
  points: 0, // Gold points earned from jobs
  unlockedCostumes: {
    jiho: ['uniform'],
    sunwoo: ['uniform'],
    doyun: ['uniform']
  },
  equippedCostumes: {
    jiho: 'uniform',
    sunwoo: 'uniform',
    doyun: 'uniform'
  },
  // Legacy mappings for backward compatibility
  unlockedAccessories: [],
  equippedAccessories: { jiho: [], sunwoo: [], doyun: [] },
  roomCharacter: 'jiho', // Active character invited to personal room
  closetCharacter: 'jiho', // Active character being dressed in closet (separate from lobby)
  
  isTyping: false,
  typingTimer: null,
  currentText: ''
};

// Backup of state at the start of the current episode (used for restarting or mid-ep exit)
let episodeStartState = null;

// Storage keys
const AUTOSAVE_KEY = 'otome_autosave_ep';
const UNLOCKED_ENDINGS_KEY = 'otome_unlocked_endings';

// Costume Metadata
const COSTUMES = {
  uniform: { name: '기본 교복 의상', price: 0, icon: 'graduation-cap' },
  casual: { name: '캐주얼 사복 의상', price: 300, icon: 'shirt' },
  date: { name: '데이트 복장', price: 500, icon: 'heart' }
};
// Legacy mapping for compatibility
const ACCESSORIES = COSTUMES;

// Ensure costume state is properly initialized (safety guard for old saves)
function ensureCostumeState() {
  if (!state.equippedCostumes) {
    state.equippedCostumes = { jiho: 'uniform', sunwoo: 'uniform', doyun: 'uniform' };
  }
  if (!state.unlockedCostumes) {
    state.unlockedCostumes = { jiho: ['uniform'], sunwoo: ['uniform'], doyun: ['uniform'] };
  }
  ['jiho', 'sunwoo', 'doyun'].forEach(c => {
    if (!state.equippedCostumes[c]) state.equippedCostumes[c] = 'uniform';
    if (!state.unlockedCostumes[c]) state.unlockedCostumes[c] = ['uniform'];
  });
}

// Part-time Jobs Metadata
const JOBS = {
  cafe: { name: '베이커리 카페 알바', durationMs: 5000, reward: 30 },
  library: { name: '도서실 서적 정리', durationMs: 10000, reward: 80 },
  flower: { name: '꽃집 카운터 보조', durationMs: 15000, reward: 150 }
};

// Male Leads Lobby Dialogue Quotes
const LOBBY_QUOTES = {
  jiho: [
    "너랑 있으면 내 심장이 멋대로 빠르게 뛴다. ...방금 말은 못 들은 걸로 해라.",
    "순찰은 다 돌았다. 늦게까지 학교에 남아있지 말고 얼른 들어가.",
    "흥, 내가 걱정돼서 챙겨준 게 고마우면... 커피 한 캔 더 사오던가.",
    "학생회장 자리가 무겁냐고? 네가 옆에 있어 준다면 그리 어렵지도 않아.",
    "왜 자꾸 쳐다보는 거지? 얼굴에 뭐라도 묻었나? ...그렇게 보면 부끄럽잖아."
  ],
  sunwoo: [
    "OO아! 오늘도 나랑 같이 집에 갈 거지? 떡볶이는 내가 쏠게!",
    "언제까지 소꿉친구로만 볼 거야? 나 이제 너한테 남자로 보이고 싶어.",
    "네 옆자리는 태어났을 때부터 나였잖아. 그러니까 어디 가면 절대 안 돼!",
    "네가 다른 선배들이랑 얘기할 때마다 솔직히 속상하고 질투 나.",
    "에헤헤, 너랑 같이 있으니까 그냥 바보처럼 웃음이 나네. 너도 그렇지?"
  ],
  doyun: [
    "건반 위에 손을 올리고 있으면, 이상하게 네 얼굴만 건반 위에 어른거려.",
    "벚꽃잎이 날리네. 꼭 네가 내 마음에 사뿐히 내려앉은 것 같아.",
    "안녕 후배님? 음악실 문은 언제든 널 향해 열려 있어. 언제든 놀러 와.",
    "이 곡은 오롯이 널 생각하며 쓴 멜로디야. 너에게 가장 먼저 들려주고 싶어.",
    "후배님의 눈동자는... 피아노 선율보다 더 신비롭고 깊네."
  ]
};

// Male Leads Personal Room Quotes
const ROOM_QUOTES = {
  jiho: [
    "갑자기 단둘이 있는 개인실로 불러내다니... 무슨 생각이지? ...기, 기분 나쁘다는 소리는 아니다.",
    "이 방에 들어서니 이상하게 긴장되는군. 후배 너의 체온이 가까이 느껴져서...",
    "공부는 밀리지 않고 성실하게 하고 있는 거겠지? 내 잔소리는 오직 너만을 위한 거다.",
    "네 곁에 서면 평소의 차분함을 유지하기가 힘들어. 너 때문이야, 책임져라.",
    "(머리를 만지자) 어딜 만지는 거야...! 정말 겁도 없군, 너란 애는..."
  ],
  sunwoo: [
    "앗! 나랑 단둘이 있고 싶어서 부른 거야? 나 너무 감격해서 눈물 날 것 같아!",
    "네 개인실 침대도 엄청 푹신해 보인다! 옆에 잠깐 누워봐도 돼? 장난이야, 헤헤.",
    "소꿉친구 딱지는 떼버리고, 매일 네 방 문을 열고 마중 나오는 남자가 되고 싶어.",
    "네 손바닥은 항상 부드럽고 따뜻하네. 이렇게 깍지 끼고 평생 있고 싶다.",
    "(어깨를 토닥이자) 헤헤, 간지러워! 근데 네 손길이면 뭐든지 다 좋아!"
  ],
  doyun: [
    "초대해 줘서 고마워, 후배님. 방안의 아늑한 향기가 꼭 너처럼 달콤하네.",
    "창문 밖으로 들어오는 햇살 아래, 네 모습이 눈부시게 예뻐서 연주를 멈출 수가 없어.",
    "네 손가락을 가만히 쥐어볼까? 차갑네... 이리 와, 피아노 치기 전에 내가 녹여줄게.",
    "이 방 안에서 울리는 연주는 오직 너 하나만을 위한 비밀이야. 비밀 보장해 줘.",
    "(볼을 만지자) 후배님은 가끔 이렇게 나를 당황하게 만드네. 귀엽게시리..."
  ]
};

// Cyclic Indices
const lobbyQuoteIndices = { jiho: 0, sunwoo: 0, doyun: 0 };
const roomQuoteIndices = { jiho: 0, sunwoo: 0, doyun: 0 };

let activeJobTimer = null;

// Gift Shop Items Metadata
const GIFTS = {
  chocolate: { name: '수제 초콜릿', price: 50, benefits: { jiho: 15, sunwoo: 15, doyun: 15 } },
  planner: { name: '스터디 플래너', price: 80, benefits: { jiho: 30, sunwoo: 10, doyun: 10 } },
  drink: { name: '이온 음료', price: 60, benefits: { jiho: 10, sunwoo: 25, doyun: 10 } },
  cd: { name: '클래식 CD', price: 100, benefits: { jiho: 10, sunwoo: 10, doyun: 35 } }
};

// Character reaction lines when receiving gifts
const GIFT_REACTIONS = {
  jiho: {
    chocolate: "초콜릿...? 뭐, 단것을 싫어하진 않으니 먹겠다. 너, 너도 하나 먹을래?",
    planner: "스터디 플래너라니, 아주 나다운 선물이군. 마음에 든다. 같이 계획을 세워볼까?",
    drink: "이온 음료? 목이 마르던 차였는데 고맙군. 맛이 꽤 깔끔해.",
    cd: "클래식 CD인가? 학생실에서 조용히 들어봐야겠군. 나쁘지 않아."
  },
  sunwoo: {
    chocolate: "헉! 이거 직접 만든 초콜릿이야? 진짜? 아까워서 어떻게 먹어! 평생 보관하고 싶다!",
    planner: "플래너...? 으윽, 공부하라는 압박인가? 그래도 네가 준 거니까 매일 일기장처럼 쓸래!",
    drink: "이온 음료! 역시 나를 가장 잘 아는 건 너야! 원샷하고 운동장 세 바퀴 뛸 수 있어!",
    cd: "클래식 음악? 들으면 잠이 솔솔 올 것 같지만... 네 생각 하면서 열심히 들을게!"
  },
  doyun: {
    chocolate: "달콤한 초콜릿이네. 피아노 연습으로 당이 필요할 때 딱 맞는 좋은 선물이야. 고마워요.",
    planner: "플래너에 우리의 연주 일정이라도 적어둘까? 네 스케줄도 같이 적어줘, 후배님.",
    drink: "이온 음료구나. 갈증이 해소되는 느낌이네. 고마워, 소중하게 마실게요.",
    cd: "내 선배의 앙상블 음반이잖아...! 구하기 정말 어려웠는데, 감격했어. 음악실에서 같이 들을래?"
  }
};

// ==========================================================================
// DOM ELEMENTS
// ==========================================================================
const DOM = {
  // Screens
  titleScreen: document.getElementById('title-screen'),
  lobbyScreen: document.getElementById('lobby-screen'),
  gameScreen: document.getElementById('game-screen'),
  episodeClearScreen: document.getElementById('episode-clear-screen'),
  clearEpisodeTitle: document.getElementById('clear-episode-title'),
  nameInputScreen: document.getElementById('name-input-screen'),
  inputPlayerName: document.getElementById('input-player-name'),
  btnSubmitName: document.getElementById('btn-submit-name'),
  
  // Episode Transition Overlay
  episodeOverlay: document.getElementById('episode-overlay'),
  epTitleDisplay: document.getElementById('ep-title-display'),
  
  // Lobby HUD Elements
  lobbyUnlockedEp: document.getElementById('lobby-unlocked-ep'),
  lobbyPointsVal: document.getElementById('lobby-points-val'),
  lobbyValJiho: document.getElementById('lobby-val-jiho'),
  lobbyValSunwoo: document.getElementById('lobby-val-sunwoo'),
  lobbyValDoyun: document.getElementById('lobby-val-doyun'),
  btnLobbyToTitle: document.getElementById('btn-lobby-to-title'),
  
  // Bottom Tab Buttons
  navTabs: document.querySelectorAll('.nav-tab'),
  tabContents: document.querySelectorAll('.lobby-tab-content'),
  
  // TAB 1: Lobby Main Elements
  lobbyCharSprite: document.getElementById('lobby-char-sprite'),
  lobbyTalkName: document.getElementById('lobby-talk-name'),
  lobbyTalkText: document.getElementById('lobby-talk-text'),
  lobbyTalkBubble: document.getElementById('lobby-talk-bubble'),
  btnLobbyPrev: document.getElementById('btn-lobby-prev'),
  btnLobbyNext: document.getElementById('btn-lobby-next'),
  btnPlayEpisode: document.getElementById('btn-play-episode'),
  
  // TAB 2: Closet Elements
  closetCharSprite: document.getElementById('closet-char-sprite'),
  closetCharName: document.getElementById('closet-char-name'),
  closetItems: document.querySelectorAll('.closet-item'),
  
  // TAB 3: Job Elements
  jobCards: document.querySelectorAll('.job-card'),
  
  // TAB 4: Personal Room Elements
  btnInviteChars: document.querySelectorAll('.btn-invite-char'),
  roomCharSprite: document.getElementById('room-char-sprite'),
  roomTouchZone: document.getElementById('room-touch-zone'),
  roomTalkName: document.getElementById('room-talk-name'),
  roomTalkText: document.getElementById('room-talk-text'),
  btnRoomGiftOpen: document.getElementById('btn-room-gift-open'),
  btnRoomGiftClose: document.getElementById('btn-room-gift-close'),
  roomGiftPanel: document.getElementById('room-gift-panel'),
  roomGiftPointsVal: document.getElementById('room-gift-points-val'),
  
  // HUD (Gameplay)
  hudAffinityJiho: document.getElementById('hud-affinity-jiho'),
  hudAffinitySunwoo: document.getElementById('hud-affinity-sunwoo'),
  hudAffinityDoyun: document.getElementById('hud-affinity-doyun'),
  hudValJiho: document.getElementById('hud-val-jiho'),
  hudValSunwoo: document.getElementById('hud-val-sunwoo'),
  hudValDoyun: document.getElementById('hud-val-doyun'),
  
  // Game Render Sprites & Wrappers
  gameBg: document.getElementById('game-bg'),
  charJiho: document.getElementById('char-sprite-jiho'),
  charSunwoo: document.getElementById('char-sprite-sunwoo'),
  charDoyun: document.getElementById('char-sprite-doyun'),
  wrapperJiho: document.getElementById('wrapper-sprite-jiho'),
  wrapperSunwoo: document.getElementById('wrapper-sprite-sunwoo'),
  wrapperDoyun: document.getElementById('wrapper-sprite-doyun'),
  
  dialogueBox: document.getElementById('dialogue-box'),
  speakerName: document.getElementById('speaker-name'),
  dialogueText: document.getElementById('dialogue-text'),
  dialogueAdvancer: document.getElementById('dialogue-advancer'),
  choiceOverlay: document.getElementById('choice-overlay'),
  choiceContainer: document.querySelector('.choice-container'),
  
  particles: document.getElementById('cherry-blossoms'),
  screenFlash: document.getElementById('screen-flash'),
  screenFade: document.getElementById('screen-fade'),
  
  // Modals & Panels
  backdrop: document.getElementById('menu-overlay-backdrop'),
  modalPauseMenu: document.getElementById('modal-pause-menu'),
  modalLog: document.getElementById('modal-log'),
  modalGallery: document.getElementById('modal-gallery'),
  logContent: document.getElementById('log-content-area'),
  
  // Title Menu Buttons
  btnNewGame: document.getElementById('btn-new-game'),
  btnContinue: document.getElementById('btn-continue'),
  btnOpenGallery: document.getElementById('btn-open-gallery'),
  
  // HUD Buttons
  btnShowLog: document.getElementById('btn-show-log'),
  btnOpenMenu: document.getElementById('btn-open-menu'),
  
  // Pause Menu Actions
  btnMenuLog: document.getElementById('btn-menu-log'),
  btnMenuRestart: document.getElementById('btn-menu-restart'),
  btnMenuLobby: document.getElementById('btn-menu-lobby'),
  
  // Font Selector
  fontButtons: document.querySelectorAll('.font-opt-btn'),

  // Closet Navigation
  btnClosetPrev: document.getElementById('btn-closet-prev'),
  btnClosetNext: document.getElementById('btn-closet-next'),

  // Costume Overlays
  lobbyCostumeOverlay: document.getElementById('lobby-costume-overlay'),
  closetCostumeOverlay: document.getElementById('closet-costume-overlay'),
  roomCostumeOverlay: document.getElementById('room-costume-overlay'),
  gameCostumeJiho: document.getElementById('game-costume-jiho'),
  gameCostumeSunwoo: document.getElementById('game-costume-sunwoo'),
  gameCostumeDoyun: document.getElementById('game-costume-doyun'),
  clearAffinitySummary: document.getElementById('clear-affinity-summary')
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  setupEventListeners();
  checkAutosaveExists();
  updateGalleryUI();
  initFontSettings();
});

// Create Falling Cherry Blossoms
function initParticles() {
  const petalCount = 15;
  for (let i = 0; i < petalCount; i++) {
    createPetal();
  }
}

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  
  const size = Math.random() * 12 + 6; 
  const left = Math.random() * 100; 
  const duration = Math.random() * 6 + 7; 
  const delay = Math.random() * 8; 
  const spinSway = Math.random() * 3 + 2; 
  
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;
  petal.style.left = `${left}%`;
  petal.style.animationDuration = `${duration}s, ${spinSway}s`;
  petal.style.animationDelay = `${delay}s, 0s`;
  
  DOM.particles.appendChild(petal);
  
  petal.addEventListener('animationend', (e) => {
    if (e.animationName === 'fall') {
      petal.remove();
      createPetal();
    }
  });
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================
function setupEventListeners() {
  // Global Keyboard Shortcuts for Dialogue Progress
  document.addEventListener('keydown', (e) => {
    // Only process if gameplay screen is active and no modals are open
    if (DOM.gameScreen && DOM.gameScreen.classList.contains('active')) {
      const isModalOpen = DOM.backdrop && DOM.backdrop.classList.contains('active');
      if (!isModalOpen) {
        if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
          e.preventDefault();
          handleDialogueClick();
        }
      }
    }
  });
  // Title Screen Buttons
  DOM.btnNewGame.addEventListener('click', () => {
    playTransition('fade', () => {
      showScreen(DOM.nameInputScreen);
    });
  });
  
  // Name Input Screen Actions
  if (DOM.btnSubmitName) {
    DOM.btnSubmitName.addEventListener('click', () => {
      const name = DOM.inputPlayerName.value.trim() || '은하';
      startNewGame(name);
    });
  }
  
  if (DOM.inputPlayerName) {
    DOM.inputPlayerName.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const name = DOM.inputPlayerName.value.trim() || '은하';
        startNewGame(name);
      }
    });
  }

  DOM.btnContinue.addEventListener('click', () => loadLastSave());
  DOM.btnOpenGallery.addEventListener('click', () => {
    // Open Album Tab inside Lobby instead of legacy modal
    startNewGame('은하');
    setTimeout(() => switchTab('album'), 500);
  });
  
  // Lobby Hud Home Button
  DOM.btnLobbyToTitle.addEventListener('click', () => {
    playTransition('fade', () => showScreen(DOM.titleScreen));
  });
  
  // Lobby Tab Navigation clicks
  DOM.navTabs.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      const tabName = tabBtn.getAttribute('data-tab');
      switchTab(tabName);
    });
  });
  
  // TAB 1: Lobby main interactions
  DOM.btnLobbyPrev.addEventListener('click', () => switchLobbyCharacter(-1));
  DOM.btnLobbyNext.addEventListener('click', () => switchLobbyCharacter(1));
  DOM.lobbyTalkBubble.addEventListener('click', () => cycleLobbyCharacterQuote());
  DOM.btnPlayEpisode.addEventListener('click', () => playCurrentEpisode());
  
  // TAB 2: Closet purchases and equips
  document.querySelectorAll('.btn-item-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent triggering card preview click
      const itemId = btn.getAttribute('data-item');
      handleAccessoryAction(itemId);
    });
  });
  
  // TAB 2: Closet item card clicks for preview toggle
  document.querySelectorAll('.closet-item').forEach(card => {
    card.addEventListener('click', () => {
      const itemId = card.getAttribute('data-item');
      toggleClosetPreview(itemId);
    });
  });
  
  // TAB 3: Job actions
  document.querySelectorAll('.btn-start-job').forEach(btn => {
    btn.addEventListener('click', () => {
      const jobId = btn.getAttribute('data-job');
      startPartTimeJob(jobId);
    });
  });
  
  // TAB 4: Personal room interactions
  DOM.btnInviteChars.forEach(btn => {
    btn.addEventListener('click', () => {
      const charId = btn.getAttribute('data-char');
      inviteToPersonalRoom(charId);
    });
  });
  DOM.roomTouchZone.addEventListener('click', () => touchLobbyBoyInRoom());
  
  // New Room Gift Listeners
  if (DOM.btnRoomGiftOpen) DOM.btnRoomGiftOpen.addEventListener('click', () => toggleRoomGiftPanel(true));
  if (DOM.btnRoomGiftClose) DOM.btnRoomGiftClose.addEventListener('click', () => toggleRoomGiftPanel(false));
  
  document.querySelectorAll('.btn-buy-gift').forEach(btn => {
    btn.addEventListener('click', () => {
      const giftId = btn.getAttribute('data-gift');
      giveGiftToCharacter(giftId);
    });
  });
  
  // Dialogue Advancer (Gameplay)
  DOM.dialogueAdvancer.addEventListener('click', () => handleDialogueClick());
  DOM.dialogueBox.addEventListener('click', () => handleDialogueClick());
  
  // HUD Actions (Gameplay)
  DOM.btnShowLog.addEventListener('click', () => openModal(DOM.modalLog));
  DOM.btnOpenMenu.addEventListener('click', () => openModal(DOM.modalPauseMenu));
  
  // Pause Menu Actions
  DOM.btnMenuLog.addEventListener('click', () => {
    closeAllModals();
    openModal(DOM.modalLog);
  });
  DOM.btnMenuRestart.addEventListener('click', () => {
    if (confirm('현재 에피소드를 처음부터 다시 시작하시겠습니까?')) {
      closeAllModals();
      restartCurrentEpisode();
    }
  });
  DOM.btnMenuLobby.addEventListener('click', () => {
    if (confirm('대기화면(Lobby)으로 돌아가시겠습니까?\n현재 에피소드의 진행 중인 위치는 저장되지 않으며, 다시 들어올 때 처음부터 진행됩니다.')) {
      closeAllModals();
      exitToLobby();
    }
  });
  
  // Episode Card Overlay Click
  DOM.episodeOverlay.addEventListener('click', () => {
    DOM.episodeOverlay.classList.remove('active');
    renderStep();
  });

  // Episode Clear Screen Click
  if (DOM.episodeClearScreen) {
    DOM.episodeClearScreen.addEventListener('click', () => {
      playTransition('fade', () => {
        enterLobby();
      });
    });
  }
  
  // Backdrop closer
  DOM.backdrop.addEventListener('click', () => closeAllModals());
  document.querySelectorAll('.btn-close-modal').forEach(btn => {
    btn.addEventListener('click', () => closeAllModals());
  });
  
  // Font selector options click
  DOM.fontButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const fontName = btn.getAttribute('data-font');
      applyFont(fontName);
    });
  });
  
  // Closet Navigation (uses separate closetCharacter, NOT lobbyCharacter)
  if (DOM.btnClosetPrev) {
    DOM.btnClosetPrev.addEventListener('click', () => {
      switchClosetCharacter(-1);
    });
  }
  if (DOM.btnClosetNext) {
    DOM.btnClosetNext.addEventListener('click', () => {
      switchClosetCharacter(1);
    });
  }

  // Register transparent background removal listeners for newly generated outfits
  [
    DOM.lobbyCharSprite, DOM.closetCharSprite, DOM.roomCharSprite, DOM.charJiho, DOM.charSunwoo, DOM.charDoyun,
    DOM.lobbyCostumeOverlay, DOM.closetCostumeOverlay, DOM.roomCostumeOverlay,
    DOM.gameCostumeJiho, DOM.gameCostumeSunwoo, DOM.gameCostumeDoyun
  ].forEach(img => {
    if (img) {
      img.addEventListener('load', () => {
        makeSpriteTransparent(img);
      });
    }
  });
}

function checkAutosaveExists() {
  const hasAutosave = localStorage.getItem(AUTOSAVE_KEY) !== null;
  DOM.btnContinue.disabled = !hasAutosave;
}

// ==========================================================================
// SCREEN NAVIGATION FLOW
// ==========================================================================
function startNewGame(customName) {
  state = {
    currentScene: 'ep1',
    stepIndex: 0,
    affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
    historyLog: [],
    unlockedEpisode: 'ep1',
    lobbyCharacter: 'jiho',
    playerName: customName || '은하',
    
    // Tab System States
    activeLobbyTab: 'main',
    points: 0,
    unlockedCostumes: {
      jiho: ['uniform'],
      sunwoo: ['uniform'],
      doyun: ['uniform']
    },
    equippedCostumes: {
      jiho: 'uniform',
      sunwoo: 'uniform',
      doyun: 'uniform'
    },
    unlockedAccessories: [],
    equippedAccessories: {
      jiho: [],
      sunwoo: [],
      doyun: []
    },
    roomCharacter: 'jiho',
    closetCharacter: 'jiho',
    
    isTyping: false,
    typingTimer: null,
    currentText: ''
  };
  
  // Save initial default state to localStorage
  autosaveEpisodeCleared();
  backupEpisodeStartState();
  
  playTransition('fade', () => {
    enterLobby();
  });
}

function showScreen(screenEl) {
  DOM.titleScreen.classList.remove('active');
  DOM.lobbyScreen.classList.remove('active');
  DOM.gameScreen.classList.remove('active');
  if (DOM.episodeClearScreen) DOM.episodeClearScreen.classList.remove('active');
  if (DOM.nameInputScreen) DOM.nameInputScreen.classList.remove('active');
  screenEl.classList.add('active');
  
  if (screenEl === DOM.titleScreen) {
    checkAutosaveExists();
  }
}

function playTransition(type, callback) {
  if (type === 'flash') {
    DOM.screenFlash.classList.add('active');
    setTimeout(() => {
      if (callback) callback();
      setTimeout(() => {
        DOM.screenFlash.classList.remove('active');
      }, 150);
    }, 150);
  } else {
    DOM.screenFade.classList.add('active');
    setTimeout(() => {
      if (callback) callback();
      setTimeout(() => {
        DOM.screenFade.classList.remove('active');
      }, 300);
    }, 400);
  }
}

// ==========================================================================
// 5-TAB NAVIGATION BAR ENGINE
// ==========================================================================
function enterLobby() {
  ensureCostumeState();
  showScreen(DOM.lobbyScreen);
  switchTab(state.activeLobbyTab || 'main');
  renderLobbyHUD();
}

function switchTab(tabName) {
  ensureCostumeState();
  state.activeLobbyTab = tabName;
  
  // Toggle subtab-active class on lobby screen to hide top HUD and move header titles up
  if (DOM.lobbyScreen) {
    if (tabName === 'main') {
      DOM.lobbyScreen.classList.remove('subtab-active');
    } else {
      DOM.lobbyScreen.classList.add('subtab-active');
    }
  }
  
  // 1. Update navigation tab active class
  DOM.navTabs.forEach(tabBtn => {
    if (tabBtn.getAttribute('data-tab') === tabName) {
      tabBtn.classList.add('active');
    } else {
      tabBtn.classList.remove('active');
    }
  });
  
  // 2. Toggle Tab Content views
  DOM.tabContents.forEach(contentView => {
    if (contentView.id === `lobby-tab-${tabName}`) {
      contentView.classList.add('active');
    } else {
      contentView.classList.remove('active');
    }
  });
  
  // 3. Trigger Sub-tab rendering
  if (tabName === 'main') {
    renderLobbyMainTab();
  } else if (tabName === 'closet') {
    renderClosetTab();
  } else if (tabName === 'job') {
    renderJobTab();
  } else if (tabName === 'room') {
    renderRoomTab();
  } else if (tabName === 'album') {
    renderAlbumTab();
  }
  
  // Save current lobby tab position
  autosaveEpisodeCleared();
}

function renderLobbyHUD() {
  const epScene = scenario[state.unlockedEpisode];
  if (DOM.lobbyUnlockedEp) {
    if (epScene && epScene.title) {
      DOM.lobbyUnlockedEp.innerText = epScene.title.split(': ')[0];
    } else {
      DOM.lobbyUnlockedEp.innerText = getSceneKoreanName(state.unlockedEpisode).split(': ')[0];
    }
  }
  
  if (DOM.lobbyPointsVal) DOM.lobbyPointsVal.innerText = state.points;
  if (DOM.lobbyValJiho) DOM.lobbyValJiho.innerText = state.affinity.jiho;
  if (DOM.lobbyValSunwoo) DOM.lobbyValSunwoo.innerText = state.affinity.sunwoo;
  if (DOM.lobbyValDoyun) DOM.lobbyValDoyun.innerText = state.affinity.doyun;
}

// ==========================================================================
// TAB 1: MAIN LOBBY CONTROLS
// ==========================================================================
function renderLobbyMainTab() {
  const epScene = scenario[state.unlockedEpisode];
  if (epScene && epScene.title) {
    DOM.btnPlayEpisode.innerHTML = `<i class="fa-solid fa-heart-pulse"></i> ${epScene.title.split(': ')[1]} 시작하기`;
  } else {
    DOM.btnPlayEpisode.innerHTML = `<i class="fa-solid fa-heart-pulse"></i> 엔딩 보기`;
  }
  
  renderLobbyCharacter();
}

function renderLobbyCharacter() {
  // Update Sprite wrapper character class
  const spriteWrapper = document.querySelector('#lobby-tab-main .sprite-wrapper');
  spriteWrapper.className = `sprite-wrapper active-${state.lobbyCharacter}`;
  
  DOM.lobbyCharSprite.classList.remove('active');
  
  setTimeout(() => {
    DOM.lobbyCharSprite.src = getCharacterSpriteSrc(state.lobbyCharacter);
    DOM.lobbyCharSprite.classList.add('active');
    
    // Apply name styling
    const nameMap = { jiho: '지호', sunwoo: '선우', doyun: '도윤' };
    DOM.lobbyTalkName.innerText = nameMap[state.lobbyCharacter];
    
    if (state.lobbyCharacter === 'jiho') DOM.lobbyTalkName.style.color = '#8cb4ff';
    if (state.lobbyCharacter === 'sunwoo') DOM.lobbyTalkName.style.color = '#ffa68c';
    if (state.lobbyCharacter === 'doyun') DOM.lobbyTalkName.style.color = '#cfcfd6';
    
    // Set custom dialogue quote
    const quoteIdx = lobbyQuoteIndices[state.lobbyCharacter];
    DOM.lobbyTalkText.innerText = LOBBY_QUOTES[state.lobbyCharacter][quoteIdx].replace(/OO/g, state.playerName);
  }, 100);
}

function switchLobbyCharacter(direction) {
  const characters = ['jiho', 'sunwoo', 'doyun'];
  let currentIdx = characters.indexOf(state.lobbyCharacter);
  currentIdx = (currentIdx + direction + characters.length) % characters.length;
  state.lobbyCharacter = characters[currentIdx];
  
  renderLobbyCharacter();
}

// Closet-only character switcher (does NOT affect lobby)
function switchClosetCharacter(direction) {
  const characters = ['jiho', 'sunwoo', 'doyun'];
  let currentIdx = characters.indexOf(state.closetCharacter);
  currentIdx = (currentIdx + direction + characters.length) % characters.length;
  state.closetCharacter = characters[currentIdx];
  clearClosetPreviews();
  renderClosetTab();
}

function cycleLobbyCharacterQuote() {
  const quotes = LOBBY_QUOTES[state.lobbyCharacter];
  let currentQuoteIdx = lobbyQuoteIndices[state.lobbyCharacter];
  currentQuoteIdx = (currentQuoteIdx + 1) % quotes.length;
  lobbyQuoteIndices[state.lobbyCharacter] = currentQuoteIdx;
  
  DOM.lobbyTalkText.innerText = quotes[currentQuoteIdx].replace(/OO/g, state.playerName);
}

// Start current unlocked episode
function playCurrentEpisode() {
  state.currentScene = state.unlockedEpisode;
  state.stepIndex = 0;
  
  backupEpisodeStartState();
  
  playTransition('fade', () => {
    showScreen(DOM.gameScreen);
    
    const epScene = scenario[state.currentScene];
    if (epScene && epScene.title) {
      DOM.epTitleDisplay.innerText = epScene.title;
      DOM.episodeOverlay.classList.add('active');
    } else {
      renderStep();
    }
  });
}

// ==========================================================================
// TAB 2: CLOSET (옷장) SYSTEM
// ==========================================================================
function renderClosetTab() {
  ensureCostumeState();
  // Sync closetCharacter on first open
  if (!state.closetCharacter) state.closetCharacter = state.lobbyCharacter;
  
  const charId = state.closetCharacter;
  const nameMap = { jiho: '한지호', sunwoo: '서선우', doyun: '강도윤' };
  DOM.closetCharName.innerText = nameMap[charId];
  
  // Set character class on preview wrapper
  const previewWrapper = document.querySelector('.closet-sprite-wrapper');
  previewWrapper.className = `closet-sprite-wrapper active-${charId}`;
  
  // Show either preview costume or equipped costume
  const activeCostume = closetPreviewItem || state.equippedCostumes[charId] || 'uniform';
  DOM.closetCharSprite.src = getCharacterSpriteSrc(charId, activeCostume);
  
  // Sync items buttons
  document.querySelectorAll('.closet-item').forEach(itemCard => {
    const itemId = itemCard.getAttribute('data-item');
    const btn = itemCard.querySelector('.btn-item-action');
    
    // Highlight preview item card
    if (itemId === closetPreviewItem) {
      itemCard.classList.add('previewing');
    } else {
      itemCard.classList.remove('previewing');
    }
    
    // Check unlock state
    const isUnlocked = itemId === 'uniform' || (state.unlockedCostumes[charId] && state.unlockedCostumes[charId].includes(itemId));
    const isEquipped = state.equippedCostumes[charId] === itemId;
    
    if (itemId === 'uniform') {
      if (isEquipped) {
        btn.innerText = '착용중';
        btn.className = 'btn-item-action equip active';
        btn.disabled = true;
      } else {
        btn.innerText = '착용하기';
        btn.className = 'btn-item-action equip';
        btn.disabled = false;
      }
    } else {
      if (!isUnlocked) {
        btn.innerText = '구매하기';
        btn.className = 'btn-item-action buy';
        btn.disabled = false;
      } else if (isEquipped) {
        btn.innerText = '착용중';
        btn.className = 'btn-item-action equip active';
        btn.disabled = true;
      } else {
        btn.innerText = '착용하기';
        btn.className = 'btn-item-action equip';
        btn.disabled = false;
      }
    }
  });
}

// Track which item is currently being previewed in closet
let closetPreviewItem = null;

function toggleClosetPreview(itemId) {
  if (closetPreviewItem === itemId) {
    closetPreviewItem = null;
  } else {
    closetPreviewItem = itemId;
  }
  
  // Re-render preview using closetCharacter
  const charId = state.closetCharacter || state.lobbyCharacter;
  const activeCostume = closetPreviewItem || state.equippedCostumes[charId] || 'uniform';
  DOM.closetCharSprite.src = getCharacterSpriteSrc(charId, activeCostume);
  
  document.querySelectorAll('.closet-item').forEach(itemCard => {
    const cardItemId = itemCard.getAttribute('data-item');
    if (cardItemId === closetPreviewItem) {
      itemCard.classList.add('previewing');
    } else {
      itemCard.classList.remove('previewing');
    }
  });
}

function clearClosetPreviews() {
  closetPreviewItem = null;
}

function handleAccessoryAction(itemId) {
  ensureCostumeState();
  const charId = state.closetCharacter || state.lobbyCharacter;
  const isUnlocked = itemId === 'uniform' || (state.unlockedCostumes[charId] && state.unlockedCostumes[charId].includes(itemId));
  
  if (!isUnlocked) {
    // BUY logic
    const price = COSTUMES[itemId].price;
    if (state.points >= price) {
      state.points -= price;
      if (!state.unlockedCostumes[charId]) {
        state.unlockedCostumes[charId] = ['uniform'];
      }
      state.unlockedCostumes[charId].push(itemId);
      
      // Equip immediately upon buy
      state.equippedCostumes[charId] = itemId;
      
      clearClosetPreviews();
      renderClosetTab();
      renderLobbyHUD();
      renderLobbyCharacter(); // Sync lobby clothing
      autosaveEpisodeCleared();
      alert(`[${COSTUMES[itemId].name}] 의상을 구매하여 착용했습니다!`);
    } else {
      alert('포인트(P)가 부족합니다. 아르바이트를 먼저 해오세요!');
    }
  } else {
    // EQUIP logic
    state.equippedCostumes[charId] = itemId;
    clearClosetPreviews();
    renderClosetTab();
    renderLobbyCharacter(); // Sync lobby clothing
    autosaveEpisodeCleared();
  }
}

// Render accessory DOM layers based on state
function renderAccessoriesOverlays(charId, context) {
  const equippedList = state.equippedAccessories[charId];
  
  const prefix = context === 'lobby' ? 'lobby-decor-' : (context === 'closet' ? 'closet-decor-' : `game-decor-${charId}-`);
  
  const glassesEl = document.getElementById(prefix + 'glasses');
  const earsEl = document.getElementById(prefix + 'ears');
  const scarfEl = document.getElementById(prefix + 'scarf');
  
  if (glassesEl) {
    if (equippedList.includes('glasses')) glassesEl.classList.add('active');
    else glassesEl.classList.remove('active');
  }
  
  if (earsEl) {
    if (equippedList.includes('ears')) earsEl.classList.add('active');
    else earsEl.classList.remove('active');
  }
  
  if (scarfEl) {
    if (equippedList.includes('scarf')) scarfEl.classList.add('active');
    else scarfEl.classList.remove('active');
  }
}

// ==========================================================================
// TAB 3: PART-TIME JOB (알바) SYSTEM
// ==========================================================================
function renderJobTab() {
  // Check if job is currently running
  if (activeJobTimer !== null) {
    disableJobButtons(true);
  } else {
    disableJobButtons(false);
  }
}

const JOB_META = {
  cafe: {
    charId: 'sunwoo',
    sdSrc: 'assets/sd_sunwoo.png',
    title: '베이커리 카페 알바',
    icon: 'fa-mug-hot',
    theme: 'theme-cafe',
    status: '"달콤한 초코 라떼와 갓 구운 빵 만드는 중... ☕"',
    reward: 30
  },
  library: {
    charId: 'jiho',
    sdSrc: 'assets/sd_jiho.png',
    title: '도서실 서적 정리',
    icon: 'fa-book-open',
    theme: 'theme-library',
    status: '"도서실 서적을 분류하고 깔끔하게 정돈하는 중... 📚"',
    reward: 80
  },
  flower: {
    charId: 'doyun',
    sdSrc: 'assets/sd_doyun.png',
    title: '꽃집 카운터 보조',
    icon: 'fa-seedling',
    theme: 'theme-flower',
    status: '"향기로운 벚꽃 꽃다발을 포장하는 중... 🌸"',
    reward: 150
  }
};

function startPartTimeJob(jobId) {
  if (activeJobTimer !== null) return;
  
  const job = JOBS[jobId];
  const meta = JOB_META[jobId] || JOB_META.cafe;
  const inlineFillBar = document.getElementById(`progress-job-${jobId}`);
  
  disableJobButtons(true);
  
  // 1. Get Modal Elements
  const modal = document.getElementById('modal-job-animation');
  const titleEl = document.getElementById('job-anim-title');
  const iconEl = document.getElementById('job-anim-icon');
  const timerEl = document.getElementById('job-anim-timer');
  const stageEl = document.getElementById('job-anim-stage');
  const chibiContainerEl = document.getElementById('job-chibi-container');
  const chibiImgEl = document.getElementById('job-chibi-img');
  const statusTextEl = document.getElementById('job-anim-status-text');
  const progressFillEl = document.getElementById('job-anim-progress-fill');
  const completeOverlay = document.getElementById('job-anim-complete-overlay');
  const rewardValEl = document.getElementById('job-anim-reward-val');

  // 2. Setup Modal Props
  if (titleEl) titleEl.innerText = meta.title;
  if (iconEl) iconEl.className = `fa-solid ${meta.icon}`;
  if (stageEl) stageEl.className = `job-anim-stage ${meta.theme}`;
  if (chibiContainerEl) chibiContainerEl.className = `job-chibi-anim-box char-${meta.charId}`;
  if (chibiImgEl) chibiImgEl.src = meta.sdSrc;
  if (statusTextEl) statusTextEl.innerText = meta.status;
  if (progressFillEl) progressFillEl.style.width = '0%';
  if (completeOverlay) completeOverlay.classList.remove('active');
  if (rewardValEl) rewardValEl.innerText = `+${job.reward} P`;
  
  // 3. Open Modal
  if (modal) modal.classList.add('active');

  let elapsed = 0;
  const intervalTime = 100;

  activeJobTimer = setInterval(() => {
    elapsed += intervalTime;
    const remainingSec = Math.max(0, Math.ceil((job.durationMs - elapsed) / 1000));
    const pct = Math.min(100, (elapsed / job.durationMs) * 100);
    
    // Update timer string (00:05)
    if (timerEl) timerEl.innerText = `00:${remainingSec < 10 ? '0' : ''}${remainingSec}`;
    if (progressFillEl) progressFillEl.style.width = `${pct}%`;
    if (inlineFillBar) inlineFillBar.style.width = `${pct}%`;

    if (elapsed >= job.durationMs) {
      clearInterval(activeJobTimer);
      activeJobTimer = null;

      // 4. Job Complete!
      state.points += job.reward;
      renderLobbyHUD();
      autosaveEpisodeCleared();

      // Show Complete Overlay inside modal
      if (completeOverlay) completeOverlay.classList.add('active');

      // Auto close modal after 1.8 seconds
      setTimeout(() => {
        if (modal) modal.classList.remove('active');
        if (completeOverlay) completeOverlay.classList.remove('active');
        if (inlineFillBar) inlineFillBar.style.width = '0%';
        disableJobButtons(false);
      }, 1800);
    }
  }, intervalTime);
}

function disableJobButtons(disable) {
  document.querySelectorAll('.btn-start-job').forEach(btn => {
    btn.disabled = disable;
  });
}

// ==========================================================================
// TAB 4: PERSONAL ROOM (개인실) SYSTEM
// ==========================================================================
function renderRoomTab() {
  // 1. Sync active select buttons
  DOM.btnInviteChars.forEach(btn => {
    if (btn.getAttribute('data-char') === state.roomCharacter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // 2. Set sprite wrapper character offset class
  const viewport = document.querySelector('.room-sprite-viewport');
  viewport.className = `room-sprite-viewport active-${state.roomCharacter}`;
  
  // 3. Render Invited Sprite
  DOM.roomCharSprite.className = 'room-char-sprite'; // reset animations
  DOM.roomCharSprite.src = getCharacterSpriteSrc(state.roomCharacter);
  
  // 4. Render dialogue box
  const nameMap = { jiho: '지호', sunwoo: '선우', doyun: '도윤' };
  DOM.roomTalkName.innerText = nameMap[state.roomCharacter];
  
  if (state.roomCharacter === 'jiho') DOM.roomTalkName.style.color = '#8cb4ff';
  if (state.roomCharacter === 'sunwoo') DOM.roomTalkName.style.color = '#ffa68c';
  if (state.roomCharacter === 'doyun') DOM.roomTalkName.style.color = '#cfcfd6';
  
  DOM.roomTalkText.innerText = "이곳은 조용해서 좋네. (선물을 주거나 소년을 터치해 보세요!)";

  // 5. Gift shop panel status reset
  if (DOM.roomGiftPanel) DOM.roomGiftPanel.classList.remove('active');
  if (DOM.roomGiftPointsVal) DOM.roomGiftPointsVal.innerText = state.points;
}

let roomSwitchingLock = false;

function inviteToPersonalRoom(charId) {
  if (state.roomCharacter === charId) return;
  if (roomSwitchingLock) return;
  roomSwitchingLock = true;
  
  state.roomCharacter = charId;
  const newSrc = getCharacterSpriteSrc(charId);
  
  // Sync active select buttons immediately
  DOM.btnInviteChars.forEach(btn => {
    if (btn.getAttribute('data-char') === charId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  if (DOM.roomCharSprite) {
    // 1. Smoothly fade out current sprite over 200ms
    DOM.roomCharSprite.style.opacity = '0';
    
    // 2. Preload the new sprite image in background
    const tempImg = new Image();
    tempImg.src = newSrc;
    
    let executed = false;
    const onPreloadComplete = () => {
      if (executed) return;
      executed = true;
      
      setTimeout(() => {
        // Update viewport class and sprite src while invisible
        const viewport = document.querySelector('.room-sprite-viewport');
        if (viewport) viewport.className = `room-sprite-viewport active-${charId}`;
        
        DOM.roomCharSprite.className = 'room-char-sprite';
        DOM.roomCharSprite.src = newSrc;
        
        // Update dialogue speaker name
        const nameMap = { jiho: '지호', sunwoo: '선우', doyun: '도윤' };
        DOM.roomTalkName.innerText = nameMap[charId];
        if (charId === 'jiho') DOM.roomTalkName.style.color = '#8cb4ff';
        if (charId === 'sunwoo') DOM.roomTalkName.style.color = '#ffa68c';
        if (charId === 'doyun') DOM.roomTalkName.style.color = '#cfcfd6';
        DOM.roomTalkText.innerText = "이곳은 조용해서 좋네. (선물을 주거나 소년을 터치해 보세요!)";
        
        // 3. Smoothly fade in after DOM paint
        setTimeout(() => {
          DOM.roomCharSprite.style.opacity = '1';
          setTimeout(() => {
            roomSwitchingLock = false;
          }, 350);
        }, 40);
      }, 200); // 200ms matches fade-out duration
    };
    
    if (tempImg.complete) {
      onPreloadComplete();
    } else {
      tempImg.onload = onPreloadComplete;
      tempImg.onerror = onPreloadComplete;
    }
  } else {
    renderRoomTab();
    roomSwitchingLock = false;
  }
  
  autosaveEpisodeCleared();
}

function touchLobbyBoyInRoom() {
  // Play bounce scale animation
  DOM.roomCharSprite.classList.remove('pulse-talk');
  void DOM.roomCharSprite.offsetWidth; // trigger reflow to restart animation
  DOM.roomCharSprite.classList.add('pulse-talk');
  
  // Cycle room quote
  const quotes = ROOM_QUOTES[state.roomCharacter];
  let quoteIdx = roomQuoteIndices[state.roomCharacter];
  quoteIdx = (quoteIdx + 1) % quotes.length;
  roomQuoteIndices[state.roomCharacter] = quoteIdx;
  
  DOM.roomTalkText.innerText = quotes[quoteIdx].replace(/OO/g, state.playerName);
}

function toggleRoomGiftPanel(isOpen) {
  if (!DOM.roomGiftPanel) return;
  if (isOpen) {
    DOM.roomGiftPanel.classList.add('active');
    if (DOM.roomGiftPointsVal) DOM.roomGiftPointsVal.innerText = state.points;
  } else {
    DOM.roomGiftPanel.classList.remove('active');
  }
}

function giveGiftToCharacter(giftId) {
  const gift = GIFTS[giftId];
  if (!gift) return;
  
  if (state.points >= gift.price) {
    state.points -= gift.price;
    const addedAffinity = gift.benefits[state.roomCharacter] || 10;
    state.affinity[state.roomCharacter] += addedAffinity;
    
    // Play bounce animation on sprite
    if (DOM.roomCharSprite) {
      DOM.roomCharSprite.classList.remove('pulse-talk');
      void DOM.roomCharSprite.offsetWidth;
      DOM.roomCharSprite.classList.add('pulse-talk');
    }
    
    // Display custom reaction text
    const reaction = GIFT_REACTIONS[state.roomCharacter][giftId];
    DOM.roomTalkText.innerText = reaction.replace(/OO/g, state.playerName);
    
    // Update displays
    if (DOM.roomGiftPointsVal) DOM.roomGiftPointsVal.innerText = state.points;
    renderLobbyHUD();
    autosaveEpisodeCleared();
    
    // Close panel after giving gift
    setTimeout(() => {
      toggleRoomGiftPanel(false);
    }, 2000);
    
    alert(`[${gift.name}] 선물을 건넸습니다!\n${state.roomCharacter === 'jiho' ? '지호' : (state.roomCharacter === 'sunwoo' ? '선우' : '도윤')} 호감도 +${addedAffinity}`);
  } else {
    alert('포인트(P)가 부족합니다. 아르바이트를 먼저 해오세요!');
  }
}

// ==========================================================================
// TAB 5: ALBUM (앨범) SYSTEM
// ==========================================================================
function renderAlbumTab() {
  // Updates album grids locks
  updateGalleryUI();
}

// ==========================================================================
// SAVE & RESTORE CORE LOGIC
// ==========================================================================
function backupEpisodeStartState() {
  episodeStartState = {
    currentScene: state.unlockedEpisode,
    stepIndex: 0,
    affinity: { ...state.affinity },
    historyLog: [ ...state.historyLog ],
    points: state.points,
    unlockedAccessories: [ ...state.unlockedAccessories ],
    equippedAccessories: JSON.parse(JSON.stringify(state.equippedAccessories))
  };
}

function restartCurrentEpisode() {
  if (episodeStartState) {
    state.currentScene = episodeStartState.currentScene;
    state.stepIndex = 0;
    state.affinity = { ...episodeStartState.affinity };
    state.historyLog = [ ...episodeStartState.historyLog ];
    state.points = episodeStartState.points;
    state.unlockedAccessories = [ ...episodeStartState.unlockedAccessories ];
    state.equippedAccessories = JSON.parse(JSON.stringify(episodeStartState.equippedAccessories));
    
    renderStep();
  } else {
    state.stepIndex = 0;
    renderStep();
  }
}

function exitToLobby() {
  if (episodeStartState) {
    state.currentScene = episodeStartState.currentScene;
    state.stepIndex = 0;
    state.affinity = { ...episodeStartState.affinity };
    state.historyLog = [ ...episodeStartState.historyLog ];
    state.points = episodeStartState.points;
    state.unlockedAccessories = [ ...episodeStartState.unlockedAccessories ];
    state.equippedAccessories = JSON.parse(JSON.stringify(episodeStartState.equippedAccessories));
  }
  
  playTransition('fade', () => {
    enterLobby();
  });
}

function autosaveEpisodeCleared() {
  const saveData = {
    unlockedEpisode: state.unlockedEpisode,
    affinity: { ...state.affinity },
    historyLog: [ ...state.historyLog ],
    lobbyCharacter: state.lobbyCharacter,
    
    // Save New Tab System variables
    activeLobbyTab: state.activeLobbyTab,
    points: state.points,
    unlockedCostumes: state.unlockedCostumes,
    equippedCostumes: state.equippedCostumes,
    unlockedAccessories: state.unlockedAccessories,
    equippedAccessories: state.equippedAccessories,
    roomCharacter: state.roomCharacter,
    playerName: state.playerName,
    
    timestamp: Date.now()
  };
  localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(saveData));
}

function loadLastSave() {
  const saveDataStr = localStorage.getItem(AUTOSAVE_KEY);
  if (!saveDataStr) return;
  
  const saveData = JSON.parse(saveDataStr);
  state.unlockedEpisode = saveData.unlockedEpisode;
  state.affinity = saveData.affinity;
  state.historyLog = saveData.historyLog;
  state.lobbyCharacter = saveData.lobbyCharacter || 'jiho';
  
  // Load Tab System states
  state.activeLobbyTab = saveData.activeLobbyTab || 'main';
  state.points = saveData.points || 0;
  state.unlockedCostumes = saveData.unlockedCostumes || {
    jiho: ['uniform'],
    sunwoo: ['uniform'],
    doyun: ['uniform']
  };
  state.equippedCostumes = saveData.equippedCostumes || {
    jiho: 'uniform',
    sunwoo: 'uniform',
    doyun: 'uniform'
  };
  state.unlockedAccessories = saveData.unlockedAccessories || [];
  state.equippedAccessories = saveData.equippedAccessories || { jiho: [], sunwoo: [], doyun: [] };
  state.roomCharacter = saveData.roomCharacter || 'jiho';
  state.playerName = saveData.playerName || '은하';
  
  state.currentScene = saveData.unlockedEpisode;
  state.stepIndex = 0;
  
  backupEpisodeStartState();
  
  playTransition('fade', () => {
    enterLobby();
  });
}

// ==========================================================================
// GAMEPLAY SCRIPTS RENDER ENGINE
// ==========================================================================
function renderStep() {
  const scene = scenario[state.currentScene];
  if (!scene) {
    console.error(`Scene ${state.currentScene} not found!`);
    return;
  }
  
  const step = scene.steps[state.stepIndex];
  if (!step) {
    console.error(`Step ${state.stepIndex} in scene ${state.currentScene} not found!`);
    return;
  }
  
  // Update Background
  if (step.background) {
    const bgClass = `bg-${step.background}`;
    if (!DOM.gameBg.classList.contains(bgClass)) {
      DOM.gameBg.style.opacity = '0.3';
      setTimeout(() => {
        DOM.gameBg.className = `game-background ${bgClass}`;
        DOM.gameBg.style.opacity = '1';
      }, 150);
    }
  }
  
  // Update Characters
  updateCharacterSprites(step);
  
  // Update Speaker Style
  if (step.speaker) {
    DOM.speakerName.style.display = 'inline-block';
    DOM.speakerName.innerText = step.speaker;
    
    if (step.speaker === '지호') {
      DOM.speakerName.style.color = '#8cb4ff';
      DOM.speakerName.style.borderColor = 'rgba(140, 180, 255, 0.4)';
      DOM.speakerName.style.background = 'rgba(140, 180, 255, 0.15)';
    } else if (step.speaker === '선우') {
      DOM.speakerName.style.color = '#ffa68c';
      DOM.speakerName.style.borderColor = 'rgba(255, 166, 140, 0.4)';
      DOM.speakerName.style.background = 'rgba(255, 166, 140, 0.15)';
    } else if (step.speaker === '도윤') {
      DOM.speakerName.style.color = '#cfcfd6';
      DOM.speakerName.style.borderColor = 'rgba(207, 207, 214, 0.4)';
      DOM.speakerName.style.background = 'rgba(207, 207, 214, 0.15)';
    } else {
      DOM.speakerName.style.color = 'var(--primary-pink)';
      DOM.speakerName.style.borderColor = 'rgba(255, 140, 163, 0.4)';
      DOM.speakerName.style.background = 'rgba(255, 140, 163, 0.15)';
    }
  } else {
    DOM.speakerName.style.display = 'none';
  }
  
  if (step.effect) {
    triggerEffect(step.effect);
  }
  
  startTypewriter(step.text);
  updateHUD();
  DOM.choiceOverlay.classList.remove('active');
}

// Update Character sprites standing state
function updateCharacterSprites(step) {
  // 1. Reset all animation and expression classes
  DOM.charJiho.classList.remove('active', 'speaking', 'silent', 'anim-shake', 'anim-bounce', 'expr-normal', 'expr-smile', 'expr-blush', 'expr-annoyed', 'expr-sad');
  DOM.charSunwoo.classList.remove('active', 'speaking', 'silent', 'anim-shake', 'anim-bounce', 'expr-normal', 'expr-smile', 'expr-blush', 'expr-annoyed', 'expr-sad');
  DOM.charDoyun.classList.remove('active', 'speaking', 'silent', 'anim-shake', 'anim-bounce', 'expr-normal', 'expr-smile', 'expr-blush', 'expr-annoyed', 'expr-sad');
  
  DOM.charJiho.style.filter = '';
  DOM.charSunwoo.style.filter = '';
  DOM.charDoyun.style.filter = '';
  
  DOM.wrapperJiho.style.display = 'none';
  DOM.wrapperSunwoo.style.display = 'none';
  DOM.wrapperDoyun.style.display = 'none';
  
  const activeChar = step.character;
  const expr = step.expression || 'normal';
  
  if (activeChar === 'jiho') {
    DOM.wrapperJiho.style.display = 'flex';
    DOM.wrapperJiho.className = 'char-sprite-wrapper active-jiho';
    DOM.charJiho.classList.add('active', 'speaking', `expr-${expr}`);
    
    let srcPath = getCharacterSpriteSrcWithExpr('jiho', expr);
    if (DOM.charJiho.getAttribute('src') !== srcPath) {
      DOM.charJiho.src = srcPath;
    }
    renderAccessoriesOverlays('jiho', 'game');
  } else if (activeChar === 'sunwoo') {
    DOM.wrapperSunwoo.style.display = 'flex';
    DOM.wrapperSunwoo.className = 'char-sprite-wrapper active-sunwoo';
    DOM.charSunwoo.classList.add('active', 'speaking', `expr-${expr}`);
    
    let srcPath = getCharacterSpriteSrcWithExpr('sunwoo', expr);
    if (DOM.charSunwoo.getAttribute('src') !== srcPath) {
      DOM.charSunwoo.src = srcPath;
    }
    renderAccessoriesOverlays('sunwoo', 'game');
  } else if (activeChar === 'doyun') {
    DOM.wrapperDoyun.style.display = 'flex';
    DOM.wrapperDoyun.className = 'char-sprite-wrapper active-doyun';
    DOM.charDoyun.classList.add('active', 'speaking', `expr-${expr}`);
    
    let srcPath = getCharacterSpriteSrcWithExpr('doyun', expr);
    if (DOM.charDoyun.getAttribute('src') !== srcPath) {
      DOM.charDoyun.src = srcPath;
    }
    renderAccessoriesOverlays('doyun', 'game');
  }
  
  // Handle Animations
  if (step.effect === 'shake') {
    if (activeChar === 'jiho') DOM.charJiho.classList.add('anim-shake');
    if (activeChar === 'sunwoo') DOM.charSunwoo.classList.add('anim-shake');
    if (activeChar === 'doyun') DOM.charDoyun.classList.add('anim-shake');
  }
  if (step.effect === 'bounce') {
    if (activeChar === 'jiho') DOM.charJiho.classList.add('anim-bounce');
    if (activeChar === 'sunwoo') DOM.charSunwoo.classList.add('anim-bounce');
    if (activeChar === 'doyun') DOM.charDoyun.classList.add('anim-bounce');
  }
}

function triggerEffect(effect) {
  if (effect === 'flash') {
    DOM.screenFlash.classList.add('active');
    setTimeout(() => {
      DOM.screenFlash.classList.remove('active');
    }, 300);
  }
}

// Typewriter Text Effect
function startTypewriter(text) {
  if (state.typingTimer) clearInterval(state.typingTimer);
  
  const formattedText = text.replace(/OO/g, state.playerName);
  
  state.isTyping = true;
  state.currentText = formattedText;
  DOM.dialogueText.innerHTML = '';
  
  let index = 0;
  state.typingTimer = setInterval(() => {
    DOM.dialogueText.innerHTML += formattedText.charAt(index);
    index++;
    
    if (index >= formattedText.length) {
      finishTypewriter();
    }
  }, 20); 
}

function finishTypewriter() {
  if (state.typingTimer) clearInterval(state.typingTimer);
  state.isTyping = false;
  DOM.dialogueText.innerHTML = state.currentText;
  
  const step = scenario[state.currentScene].steps[state.stepIndex];
  if (step.choices) {
    showChoices(step.choices);
  }
  
  addLogEntry(step.speaker, step.text);
}

let lastClickTime = 0;
function handleDialogueClick() {
  const now = Date.now();
  if (now - lastClickTime < 100) return; // 100ms cooldown to prevent double clicks/taps
  lastClickTime = now;

  if (state.isTyping) {
    finishTypewriter();
  } else {
    const step = scenario[state.currentScene].steps[state.stepIndex];
    if (step.choices) return;
    
    advanceStep();
  }
}

function advanceStep() {
  state.stepIndex++;
  const scene = scenario[state.currentScene];
  
  if (state.stepIndex < scene.steps.length) {
    renderStep();
  } else {
    console.log('Scene ended. Awaiting branch or choice selection.');
  }
}

// Update HUD stats
function updateHUD() {
  const jihoPct = Math.min(100, Math.max(0, state.affinity.jiho));
  const sunwooPct = Math.min(100, Math.max(0, state.affinity.sunwoo));
  const doyunPct = Math.min(100, Math.max(0, state.affinity.doyun));
  
  if (DOM.hudAffinityJiho) DOM.hudAffinityJiho.style.width = `${jihoPct}%`;
  if (DOM.hudAffinitySunwoo) DOM.hudAffinitySunwoo.style.width = `${sunwooPct}%`;
  if (DOM.hudAffinityDoyun) DOM.hudAffinityDoyun.style.width = `${doyunPct}%`;
  
  if (DOM.hudValJiho) DOM.hudValJiho.innerText = state.affinity.jiho;
  if (DOM.hudValSunwoo) DOM.hudValSunwoo.innerText = state.affinity.sunwoo;
  if (DOM.hudValDoyun) DOM.hudValDoyun.innerText = state.affinity.doyun;
}

// ==========================================================================
// BRANCHING & CHOICES SYSTEM
// ==========================================================================
function showChoices(choices) {
  DOM.choiceContainer.innerHTML = '';
  
  const charNames = { jiho: '지호', sunwoo: '선우', doyun: '도윤' };
  
  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.classList.add('choice-btn');
    
    // Check if affinity increases with this choice
    let affinityBadgeHtml = '';
    if (choice.affinity) {
      const parts = [];
      Object.keys(choice.affinity).forEach(char => {
        const val = choice.affinity[char];
        if (val > 0) {
          const name = charNames[char] || char;
          parts.push(`+${val} (${name})`);
        }
      });
      if (parts.length > 0) {
        affinityBadgeHtml = `<span class="choice-affinity-badge"><i class="fa-solid fa-heart"></i> ${parts.join(', ')}</span>`;
      }
    }
    
    const formattedText = choice.text.replace(/OO/g, state.playerName);
    btn.innerHTML = `<span class="choice-text">${formattedText}</span>${affinityBadgeHtml}`;
    
    btn.addEventListener('click', () => {
      handleChoiceSelection(choice);
    });
    
    DOM.choiceContainer.appendChild(btn);
  });
  
  DOM.choiceOverlay.classList.add('active');
}

function handleChoiceSelection(choice) {
  if (choice.affinity) {
    state.affinity.jiho += choice.affinity.jiho || 0;
    state.affinity.sunwoo += choice.affinity.sunwoo || 0;
    state.affinity.doyun += choice.affinity.doyun || 0;
    updateHUD();
    showAffinityPopEffect(choice.affinity);
  }
  
  DOM.choiceOverlay.classList.remove('active');
  
  if (choice.endingUnlocked) {
    unlockEnding(choice.endingUnlocked);
  }
  
  let targetScene = null;
  if (choice.branch) {
    const branch = choice.branch;
    const score = state.affinity[branch.condition];
    targetScene = score >= branch.threshold ? branch.success : branch.fail;
  } else if (choice.nextScene) {
    targetScene = choice.nextScene;
  }
  
  if (targetScene) {
    handleSceneTransition(targetScene);
  }
}

// Visual Floating Pop Effect when Affinity increases
function showAffinityPopEffect(affinity) {
  const charNames = { jiho: '지호', sunwoo: '선우', doyun: '도윤' };
  const pops = [];
  
  Object.keys(affinity).forEach(char => {
    const val = affinity[char];
    if (val > 0) {
      pops.push({ name: charNames[char], val });
    }
  });

  if (pops.length === 0) return;

  const container = document.createElement('div');
  container.className = 'affinity-pop-container';
  
  pops.forEach(p => {
    const item = document.createElement('div');
    item.className = 'affinity-pop-item';
    item.innerHTML = `<i class="fa-solid fa-heart"></i> ${p.name} 호감도 +${p.val}`;
    container.appendChild(item);
  });
  
  DOM.gameScreen.appendChild(container);
  
  setTimeout(() => {
    container.remove();
  }, 1800);
}

function handleSceneTransition(targetScene) {
  if (targetScene === 'title') {
    playTransition('fade', () => {
      showScreen(DOM.titleScreen);
    });
    return;
  }

  const isNewEpisode = scenario[targetScene] && scenario[targetScene].title !== undefined && !targetScene.startsWith('ending_') && !targetScene.startsWith('ep15_');
  
  if (isNewEpisode) {
    state.unlockedEpisode = targetScene;
    
    // Calculate affinity gained during this episode
    let affinityGainedHtml = '';
    if (episodeStartState && episodeStartState.affinity) {
      const diffJiho = state.affinity.jiho - episodeStartState.affinity.jiho;
      const diffSunwoo = state.affinity.sunwoo - episodeStartState.affinity.sunwoo;
      const diffDoyun = state.affinity.doyun - episodeStartState.affinity.doyun;
      
      const items = [];
      if (diffJiho > 0) items.push(`지호 <span style="color:#8cb4ff;">+${diffJiho}</span>`);
      if (diffSunwoo > 0) items.push(`선우 <span style="color:#ffa68c;">+${diffSunwoo}</span>`);
      if (diffDoyun > 0) items.push(`도윤 <span style="color:#cfcfd6;">+${diffDoyun}</span>`);
      
      if (items.length > 0) {
        affinityGainedHtml = `<p style="font-size:13px; color:#ff80ab; margin: 8px 0 12px 0;"><i class="fa-solid fa-heart"></i> 획득 호감도: ${items.join(' &nbsp;|&nbsp; ')}</p>`;
      }
    }
    
    // Save unlocked progress
    autosaveEpisodeCleared();
    
    // Determine completed episode title
    const completedEpKey = episodeStartState ? episodeStartState.currentScene : state.currentScene;
    const completedEpTitle = (scenario[completedEpKey] && scenario[completedEpKey].title) || '에피소드';
    
    playTransition('fade', () => {
      if (DOM.clearEpisodeTitle) {
        DOM.clearEpisodeTitle.innerText = completedEpTitle;
      }
      if (DOM.clearAffinitySummary) {
        DOM.clearAffinitySummary.innerHTML = affinityGainedHtml;
      }
      showScreen(DOM.episodeClearScreen);
    });
  } else {
    const backgroundShift = scenario[targetScene].background !== scenario[state.currentScene].background;
    playTransition(backgroundShift ? 'fade' : 'flash', () => {
      state.currentScene = targetScene;
      state.stepIndex = 0;
      renderStep();
    });
  }
}

// ==========================================================================
// SYSTEM MODALS LOGIC
// ==========================================================================
function openModal(modalEl) {
  DOM.backdrop.classList.add('active');
  modalEl.classList.add('active');
  
  if (modalEl === DOM.modalLog) {
    renderHistoryLog();
  }
}

function closeAllModals() {
  DOM.backdrop.classList.remove('active');
  DOM.modalPauseMenu.classList.remove('active');
  DOM.modalLog.classList.remove('active');
  DOM.modalGallery.classList.remove('active');
}

// History Log
function addLogEntry(speaker, text) {
  const formattedSpeaker = speaker ? speaker.replace(/OO/g, state.playerName) : speaker;
  const formattedText = text ? text.replace(/OO/g, state.playerName) : text;
  
  const lastEntry = state.historyLog[state.historyLog.length - 1];
  if (lastEntry && lastEntry.text === formattedText && lastEntry.speaker === formattedSpeaker) {
    return;
  }
  state.historyLog.push({ speaker: formattedSpeaker, text: formattedText });
}

function renderHistoryLog() {
  DOM.logContent.innerHTML = '';
  
  if (state.historyLog.length === 0) {
    DOM.logContent.innerHTML = '<p style="text-align: center; color: rgba(255, 255, 255, 0.3); font-style: italic;">기록된 대화가 없습니다.</p>';
    return;
  }
  
  state.historyLog.forEach(entry => {
    const row = document.createElement('div');
    row.classList.add('log-row');
    
    if (!entry.speaker) {
      row.classList.add('narrative');
    }
    
    const speakerEl = document.createElement('div');
    speakerEl.classList.add('log-speaker');
    speakerEl.innerText = entry.speaker || '';
    
    const textEl = document.createElement('div');
    textEl.classList.add('log-text');
    textEl.innerText = entry.text;
    
    row.appendChild(speakerEl);
    row.appendChild(textEl);
    DOM.logContent.appendChild(row);
  });
  
  setTimeout(() => {
    DOM.logContent.scrollTop = DOM.logContent.scrollHeight;
  }, 50);
}

function getSceneKoreanName(sceneId) {
  if (sceneId.startsWith('ep1')) return '제 1화: 시간을 넘어서 - 만남';
  if (sceneId.startsWith('ep2')) return '제 2화: 세 개의 시선';
  if (sceneId.startsWith('ep3')) return '제 3화: 음악실의 선율';
  if (sceneId.startsWith('ep4')) return '제 4화: 도서관의 오후';
  if (sceneId.startsWith('ep5')) return '제 5화: 소꿉친구의 걱정';
  if (sceneId.startsWith('ep6')) return '제 6화: 빗속의 약속';
  if (sceneId.startsWith('ep7')) return '제 7화: 의문의 편지';
  if (sceneId.startsWith('ep8')) return '제 8화: 보이지 않는 보디가드';
  if (sceneId.startsWith('ep9')) return '제 9화: 축제 준비일';
  if (sceneId.startsWith('ep10')) return '제 10화: 불꽃놀이 축제';
  if (sceneId.startsWith('ep11')) return '제 11화: 숨길 수 없는 진심';
  if (sceneId.startsWith('ep12')) return '제 12화: 차가움 뒤의 온기';
  if (sceneId.startsWith('ep13')) return '제 13화: 항상 너를 지키는';
  if (sceneId.startsWith('ep14')) return '제 14화: 약속의 벚꽃 정원';
  if (sceneId.startsWith('ep15') || sceneId.startsWith('ending')) return '제 15화: 우리가 그린 내일';
  return '새로운 에피소드';
}

// ==========================================================================
// GALLERY & ENDINGS UNLOCK SYSTEM
// ==========================================================================
function getUnlockedEndings() {
  const endings = localStorage.getItem(UNLOCKED_ENDINGS_KEY);
  return endings ? JSON.parse(endings) : [];
}

function unlockEnding(endingId) {
  const endings = getUnlockedEndings();
  if (!endings.includes(endingId)) {
    endings.push(endingId);
    localStorage.setItem(UNLOCKED_ENDINGS_KEY, JSON.stringify(endings));
    updateGalleryUI();
  }
}

const ENDING_HINTS = {
  jiho_happy: '지호 호감도 80 이상 필요',
  jiho_normal: '지호 호감도 40 이상 필요',
  sunwoo_happy: '선우 호감도 80 이상 필요',
  sunwoo_normal: '선우 호감도 40 이상 필요',
  doyun_happy: '도윤 호감도 80 이상 필요',
  doyun_normal: '도윤 호감도 40 이상 필요',
  solo: '스토리 진행 필요'
};

function updateGalleryUI() {
  const unlocked = getUnlockedEndings();
  
  document.querySelectorAll('.gallery-item').forEach(item => {
    const endingId = item.getAttribute('data-ending');
    const wrapper = item.querySelector('.img-wrapper');
    
    if (unlocked.includes(endingId)) {
      wrapper.classList.remove('locked');
      const lockOverlay = wrapper.querySelector('.lock-overlay');
      if (lockOverlay) lockOverlay.remove();
      
      const existingBadge = item.querySelector('.album-hint-badge');
      if (existingBadge) existingBadge.remove();
    } else {
      if (!item.querySelector('.album-hint-badge') && ENDING_HINTS[endingId]) {
        const badge = document.createElement('span');
        badge.className = 'album-hint-badge';
        badge.innerHTML = `<i class="fa-solid fa-key" style="font-size:10px; margin-right:3px;"></i> ${ENDING_HINTS[endingId]}`;
        item.appendChild(badge);
      }
    }
  });
}

// ==========================================================================
// FONT SETTINGS LOGIC
// ==========================================================================
const FONT_STORAGE_KEY = 'otome_game_font';

function initFontSettings() {
  const savedFont = localStorage.getItem(FONT_STORAGE_KEY) || 'noto-sans';
  applyFont(savedFont);
}

function applyFont(fontName) {
  // Remove all potential font classes from body
  document.body.classList.remove('font-gowun-batang', 'font-nanum-pen', 'font-noto-sans');
  
  // Add new font class
  document.body.classList.add(`font-${fontName}`);
  
  // Save to localStorage
  localStorage.setItem(FONT_STORAGE_KEY, fontName);
  
  // Update active state on buttons
  DOM.fontButtons.forEach(btn => {
    const btnFont = btn.getAttribute('data-font');
    if (btnFont === fontName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ==========================================================================
// COSTUME RENDER HELPERS
// ==========================================================================
function getCharacterSpriteSrc(charId, costume = '') {
  ensureCostumeState();
  const activeCostume = costume || state.equippedCostumes[charId] || 'uniform';
  if (activeCostume === 'casual') {
    return `assets/${charId}_casual.png`;
  }
  if (activeCostume === 'date') {
    return `assets/${charId}_date.png`;
  }
  return `assets/${charId}.png`;
}

function getCharacterSpriteSrcWithExpr(charId, expr = '') {
  ensureCostumeState();
  const costume = state.equippedCostumes[charId] || 'uniform';
  if (costume === 'casual') {
    if (expr && expr !== 'normal') {
      return `assets/${charId}_casual_${expr}.png`;
    }
    return `assets/${charId}_casual.png`;
  }
  if (costume === 'date') {
    if (expr && expr !== 'normal') {
      return `assets/${charId}_date_${expr}.png`;
    }
    return `assets/${charId}_date.png`;
  }
  if (expr && expr !== 'normal') {
    return `assets/${charId}_${expr}.png`;
  }
  return `assets/${charId}.png`;
}

// Automatically remove white background from casual/date sprites dynamically
function makeSpriteTransparent(imgEl) {
  if (!imgEl || !imgEl.src) return;
  if (imgEl.src.startsWith('data:') || imgEl.src === '') return;
  // Apply only to newly generated casual and date outfits
  if (!imgEl.src.includes('_casual') && !imgEl.src.includes('_date')) return;

  const tempImg = new Image();
  tempImg.crossOrigin = "anonymous";
  tempImg.src = imgEl.src;
  tempImg.onload = function() {
    const canvas = document.createElement('canvas');
    canvas.width = tempImg.width;
    canvas.height = tempImg.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(tempImg, 0, 0);

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      // Filter bright white pixels (RGB > 240) and set alpha to 0
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];
        if (r > 240 && g > 240 && b > 240) {
          data[i+3] = 0;
        }
      }
      ctx.putImageData(imgData, 0, 0);
      imgEl.src = canvas.toDataURL('image/png');
    } catch (e) {
      console.warn("Chroma-key failed: ", e);
    }
  };
}

// Update layered costume overlay based on character state
function updateCostumeOverlay(charId, overlayImgEl, costume = '') {
  ensureCostumeState();
  if (!overlayImgEl) return;

  const activeCostume = costume || state.equippedCostumes[charId] || 'uniform';

  if (activeCostume === 'uniform') {
    overlayImgEl.style.display = 'none';
    overlayImgEl.src = '';
  } else {
    // casual or date
    overlayImgEl.src = `assets/${charId}_${activeCostume}.png`;
    overlayImgEl.style.display = 'block';
  }
}
