const LANG = {
  zh: {
    heroBadge:  "AI 驱动 · 实时检测",
    heroTitle:  "护眼检测系统",
    heroSub:    "基于机器学习的用眼距离智能守护",
    startBtn:   "开始使用",
    heroHint:   "无需注册 · 数据留在本地 · 免费使用",
    featTitle:  "核心功能",
    feat1Name:  "实时距离检测",
    feat1Desc:  "AI 模型每秒分析摄像头画面，识别你与屏幕的距离是否在安全范围内，过近立即发出警报。",
    feat2Name:  "用眼计时提醒",
    feat2Desc:  "持续追踪连续用眼时长，每 30 分钟自动提醒休息，帮助你养成良好的用眼习惯。",
    feat3Name:  "多种提示音",
    feat3Desc:  "内置 4 种警报音效，可自由切换，支持音量调节与开关，适配不同使用场景。",
    feat4Name:  "小窗悬浮模式",
    feat4Desc:  "支持画中画（PiP）模式，检测窗口可悬浮在其他应用上方，不影响正常工作。",
    feat5Name:  "三语言支持",
    feat5Desc:  "界面支持中文、英语、한국어切换，所有提示语言同步更新，语言偏好自动保存。",
    feat6Name:  "隐私优先",
    feat6Desc:  "所有 AI 推理完全在本地浏览器运行，摄像头画面不上传到任何服务器，数据完全私密。",
    eyeTitle:   "为什么需要护眼？",
    eyeStat1:   "建议观看距离",
    eyeStat2:   "护眼法则",
    eyeStat3:   "最长持续用眼",
    eyeTip1:    "长时间近距离用眼是近视加深的首要原因，保持 60cm 以上的观看距离可显著降低眼部疲劳。",
    eyeTip2:    "20-20-20 法则：每用眼 20 分钟，望向 20 英尺（6米）外的地方，持续 20 秒。",
    eyeTip3:    "长时间盯着屏幕会减少眨眼次数，导致干眼症。可以有意识地多眨眼或使用人工泪液。",
    howTitle:   "如何使用",
    step1Title: "允许摄像头权限",
    step1Desc:  "点击\"开始使用\"后，浏览器会请求摄像头访问权限。允许后系统即可开始工作。",
    step2Title: "坐在摄像头前",
    step2Desc:  "确保脸部出现在摄像头画面中，AI 会自动识别你与屏幕的距离。",
    step3Title: "开启提示音",
    step3Desc:  "点击右上角控制面板中的\"开启提示音\"按钮，这样距离过近时你会立刻收到声音警报。",
    step4Title: "专注工作",
    step4Desc:  "系统在后台持续守护，距离过近或使用 30 分钟后自动提醒，让你专注而不伤眼。",
    techTitle:  "技术原理",
    techDesc1:  "基于 TensorFlow.js 的机器学习框架，在浏览器内直接运行图像分类模型，无需 GPU 或网络连接。",
    techDesc2:  "用于摄像头捕捉与实时画面绘制，结合镜像翻转处理，提供自然的面部预览体验。",
    techDesc3:  "模型经过 Too Close / Normal_Distance / Too Far / Background 四类数据训练，专为人脸距离场景优化。",
    ctaTitle:   "现在开始保护你的眼睛",
    ctaSub:     "免费 · 本地运行 · 无需安装",
    ctaBtn:     "立即开始",
    footerText: "护眼检测系统 · 基于 AI 守护用眼健康",
    appTitle:   "护眼检测系统",
    tooClose:   "⚠ 距离过近，请后退！",
    tooFar:     "请靠近一些",
    background: "未检测到人脸",
    breakMsg:   "⏰ 已使用 30 分钟，请休息一下",
    startTip:   "⚠ 请先点击右侧按钮开启提示音",
    soundOn:    "🔊 关闭提示音",
    soundOff:   "🔇 开启提示音",
    volume:     "音量",
    soundLabel: "提示音",
    bgLabel:    "背景图片",
    statusLabel:"AI 检测中",
    pipLabel:   "小窗模式",
  },
  en: {
    heroBadge:  "AI Powered · Real-time Detection",
    heroTitle:  "Eye Protection System",
    heroSub:    "Smart distance monitoring powered by machine learning",
    startBtn:   "Get Started",
    heroHint:   "No sign-up · Local only · Free to use",
    featTitle:  "Key Features",
    feat1Name:  "Real-time Distance Detection",
    feat1Desc:  "The AI model analyzes your webcam every second to check if you're too close to the screen, and alerts you immediately.",
    feat2Name:  "Eye-use Timer",
    feat2Desc:  "Continuously tracks screen time and reminds you to rest every 30 minutes, helping you build healthy eye habits.",
    feat3Name:  "Multiple Alert Sounds",
    feat3Desc:  "4 built-in alert tones to choose from, with adjustable volume and on/off toggle for different environments.",
    feat4Name:  "Picture-in-Picture Mode",
    feat4Desc:  "Float the detection window over any application so monitoring continues without interrupting your workflow.",
    feat5Name:  "3 Languages",
    feat5Desc:  "Switch between Chinese, English, and Korean. All prompts update instantly and your preference is saved.",
    feat6Name:  "Privacy First",
    feat6Desc:  "All AI inference runs entirely in your browser. No video is ever uploaded to any server — fully private.",
    eyeTitle:   "Why Eye Protection Matters",
    eyeStat1:   "Recommended distance",
    eyeStat2:   "Eye protection rule",
    eyeStat3:   "Max continuous screen time",
    eyeTip1:    "Prolonged close-range screen use is the leading cause of myopia progression. Maintaining 60cm+ distance significantly reduces eye strain.",
    eyeTip2:    "The 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.",
    eyeTip3:    "Staring at screens reduces your blink rate, which can cause dry eyes. Try to blink more consciously or use eye drops.",
    howTitle:   "How to Use",
    step1Title: "Grant camera access",
    step1Desc:  "When you click Get Started, your browser will ask for webcam permission. Allow it and the system is ready.",
    step2Title: "Sit in front of your camera",
    step2Desc:  "Make sure your face is visible in the camera view so the AI can measure your distance from the screen.",
    step3Title: "Enable alert sound",
    step3Desc:  "Click the sound button in the top-right control panel so you'll receive an audio alert when too close.",
    step4Title: "Work with focus",
    step4Desc:  "The system monitors you silently in the background and alerts you when you're too close or after 30 minutes.",
    techTitle:  "How It Works",
    techDesc1:  "A TensorFlow.js-based ML framework that runs image classification directly in the browser — no GPU or internet required.",
    techDesc2:  "Handles webcam capture and real-time canvas rendering, including mirrored display for a natural selfie-view experience.",
    techDesc3:  "The model is trained on Too Close / Normal_Distance / Too Far / Background data, optimized specifically for face-distance detection.",
    ctaTitle:   "Start protecting your eyes today",
    ctaSub:     "Free · Runs locally · No install needed",
    ctaBtn:     "Get Started",
    footerText: "Eye Protection System · AI-powered eye health",
    appTitle:   "Eye Protection System",
    tooClose:   "⚠ Too Close! Move Back",
    tooFar:     "Too Far — Move Closer",
    background: "No Face Detected",
    breakMsg:   "⏰ 30 min passed — Take a break!",
    startTip:   "⚠ Click the button on the right to enable sound",
    soundOn:    "🔊 Sound Off",
    soundOff:   "🔇 Sound On",
    volume:     "Volume",
    soundLabel: "Alert Sound",
    bgLabel:    "Background",
    statusLabel:"AI Detecting",
    pipLabel:   "Mini Window",
  },
  ko: {
    heroBadge:  "AI 기반 · 실시간 감지",
    heroTitle:  "눈 보호 시스템",
    heroSub:    "머신러닝으로 구동되는 시청 거리 스마트 모니터링",
    startBtn:   "시작하기",
    heroHint:   "회원가입 불필요 · 로컬 실행 · 무료",
    featTitle:  "주요 기능",
    feat1Name:  "실시간 거리 감지",
    feat1Desc:  "AI 모델이 매초 카메라 화면을 분석하여 화면과의 거리가 안전 범위 내에 있는지 확인하고, 너무 가까우면 즉시 경보를 보냅니다.",
    feat2Name:  "눈 사용 타이머",
    feat2Desc:  "연속 화면 사용 시간을 지속적으로 추적하여 30분마다 자동으로 휴식을 알려줍니다.",
    feat3Name:  "다양한 알림음",
    feat3Desc:  "4가지 내장 경보음 중 선택 가능하며, 볼륨 조절 및 켜기/끄기 토글을 지원합니다.",
    feat4Name:  "소형 창 모드",
    feat4Desc:  "PiP 모드를 지원하여 다른 앱 위에 감지 창을 띄워 작업을 방해하지 않고 모니터링할 수 있습니다.",
    feat5Name:  "3개 언어 지원",
    feat5Desc:  "중국어, 영어, 한국어 전환을 지원하며 모든 알림이 즉시 업데이트됩니다.",
    feat6Name:  "개인정보 우선",
    feat6Desc:  "모든 AI 추론은 브라우저에서 완전히 로컬로 실행됩니다. 카메라 영상은 어디에도 업로드되지 않습니다.",
    eyeTitle:   "눈 보호가 필요한 이유",
    eyeStat1:   "권장 시청 거리",
    eyeStat2:   "눈 보호 법칙",
    eyeStat3:   "최대 연속 사용",
    eyeTip1:    "장시간 근거리 화면 사용은 근시 진행의 주요 원인입니다. 60cm 이상 거리를 유지하세요.",
    eyeTip2:    "20-20-20 법칙: 20분마다 6m 이상 떨어진 곳을 20초 동안 바라보세요.",
    eyeTip3:    "화면을 오래 보면 눈 깜빡임이 줄어 안구 건조증이 생길 수 있습니다.",
    howTitle:   "사용 방법",
    step1Title: "카메라 권한 허용",
    step1Desc:  "시작하기를 클릭하면 브라우저가 카메라 접근 권한을 요청합니다.",
    step2Title: "카메라 앞에 앉기",
    step2Desc:  "카메라 화면에 얼굴이 보이도록 하면 AI가 자동으로 거리를 측정합니다.",
    step3Title: "알림음 활성화",
    step3Desc:  "우측 상단 제어판에서 알림음 버튼을 클릭하여 소리 알림을 받으세요.",
    step4Title: "집중해서 작업하기",
    step4Desc:  "시스템이 백그라운드에서 조용히 모니터링하며 필요 시 자동으로 알려줍니다.",
    techTitle:  "작동 원리",
    techDesc1:  "TensorFlow.js 기반 ML 프레임워크로 브라우저에서 직접 이미지 분류 모델을 실행합니다.",
    techDesc2:  "카메라 캡처 및 실시간 렌더링을 처리하며 미러 반전 처리를 포함합니다.",
    techDesc3:  "Too Close / Normal_Distance / Too Far / Background 네 가지 데이터로 훈련된 전용 모델입니다.",
    ctaTitle:   "지금 바로 눈을 보호하세요",
    ctaSub:     "무료 · 로컬 실행 · 설치 불필요",
    ctaBtn:     "시작하기",
    footerText: "눈 보호 시스템 · AI로 구동되는 눈 건강 관리",
    appTitle:   "눈 보호 시스템",
    tooClose:   "⚠ 너무 가까워요! 뒤로 가세요",
    tooFar:     "너무 멀어요 — 가까이 오세요",
    background: "얼굴 감지 안됨",
    breakMsg:   "⏰ 30분 경과 — 휴식하세요!",
    startTip:   "⚠ 오른쪽 버튼을 눌러 소리를 활성화하세요",
    soundOn:    "🔊 소리 끄기",
    soundOff:   "🔇 소리 켜기",
    volume:     "볼륨",
    soundLabel: "알림음",
    bgLabel:    "배경 이미지",
    statusLabel:"AI 감지 중",
    pipLabel:   "미니 창",
  }
};

let currentLang = localStorage.getItem("lang") || "zh";
let video, classifier, label = "...";
let tooCloseTimer = 0;
let isAlertPlaying = false;
const DELAY_TIME = 2000;
let startTime = Date.now();
let lastBreakTime = 0;
const BREAK_INTERVAL = 30 * 60 * 1000;
let p5Started = false;

const soundList = [
  new Audio("./audio/alert1.mp3"),
  new Audio("./audio/alert2.mp3"),
  new Audio("./audio/alert3.mp3"),
  new Audio("./audio/alert4.mp3"),
];
soundList.forEach(s => { s.loop = true; });
let currentSoundIndex = parseInt(localStorage.getItem("soundIndex") || "0");
let activeSound = soundList[currentSoundIndex];
let soundEnabled = localStorage.getItem("soundEnabled") !== "false";
let audioUnlocked = false;

function startApp() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("appPage").style.display  = "block";

  setTimeout(() => {
    setupUI();
    loadSavedBackground();
    setupBackgroundUploader();
    showStartTip();
  }, 0);

  if (!p5Started) {
    p5Started = true;

    new p5(function(p) {
      p.preload = function() {
        classifier = ml5.imageClassifier("model/model.json");
      };

      p.setup = function() {
        const canvas = p.createCanvas(800, 600);
        canvas.parent("canvas-container");
        video = p.createCapture(p.VIDEO);
        video.hide();
        classifyVideo(p);
        
        document.body.addEventListener("click", unlockAudio, { once: true });
      };

      p.draw = function() {
        p.push();
        p.translate(p.width, 0);
        p.scale(-1, 1);
        p.image(video, 0, 0, p.width, p.height);
        p.pop();
        updateTimer();
        handleDetection();
      };
    });
  }
}

function classifyVideo(p) {
  classifier.classify(video, (err, results) => {
    if (!err && results && results.length > 0) {
      label = results[0].label;
    }
    classifyVideo(p);
  });
}

function updateTimer() {
  const elapsed = Date.now() - startTime;
  const total = Math.floor(elapsed / 1000);
  const h = String(Math.floor(total / 3600)).padStart(2, "0");
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  setText("timeDisplay", `${h}:${m}:${s}`);
  if (elapsed - lastBreakTime > BREAK_INTERVAL) {
    lastBreakTime = elapsed;
    setTimeout(() => alert(LANG[currentLang].breakMsg), 0);
  }
}

function handleDetection() {
  switch (label) {
    case "Too_Close":  handleTooClose();   break;
    case "Too_Far":    handleTooFar();     break;
    case "background": handleBackground(); break;
    default:           resetAll();         break;
  }
}
function handleTooClose() {
  tooCloseTimer += 16; 
  if (tooCloseTimer > DELAY_TIME) {
    showPopup(LANG[currentLang].tooClose, "danger");
    triggerSound();
  }
}
function handleTooFar()    { tooCloseTimer=0; showPopup(LANG[currentLang].tooFar,     "warning"); stopSound(); }
function handleBackground(){ tooCloseTimer=0; showPopup(LANG[currentLang].background, "info");    triggerSound(); }
function resetAll()        { tooCloseTimer=0; stopSound(); const el=document.getElementById("alertText"); if(el) el.style.display="none"; }

function showPopup(text, type) {
  const el = document.getElementById("alertText");
  if (!el) return;
  el.className = "alert-popup alert-" + type;
  el.innerText = text;
  el.style.display = "block";
}

function triggerSound() {
  if (soundEnabled && audioUnlocked && !isAlertPlaying) {
    isAlertPlaying = true;
    activeSound.play().catch(() => {});
  }
}
function stopSound() {
  if (isAlertPlaying) {
    activeSound.pause();
    activeSound.currentTime = 0;
    isAlertPlaying = false;
  }
}
function unlockAudio() {
  activeSound.play().then(() => {
    activeSound.pause();
    activeSound.currentTime = 0;
    audioUnlocked = true;
  }).catch(() => {});
}

function setupUI() {
  const btn = document.getElementById("soundToggle");
  if (btn) {
    btn.innerText = soundEnabled ? LANG[currentLang].soundOn : LANG[currentLang].soundOff;
    btn.onclick = () => {
      if (!audioUnlocked) unlockAudio();
      soundEnabled = !soundEnabled;
      btn.innerText = soundEnabled ? LANG[currentLang].soundOn : LANG[currentLang].soundOff;
      localStorage.setItem("soundEnabled", soundEnabled);
      if (!soundEnabled) stopSound();
    };
  }

  const slider = document.getElementById("volumeSlider");
  if (slider) {
    slider.value = parseFloat(localStorage.getItem("volume") || "1");
    soundList.forEach(s => { s.volume = parseFloat(slider.value); });
    slider.oninput = (e) => {
      const vol = parseFloat(e.target.value);
      soundList.forEach(s => { s.volume = vol; });
      localStorage.setItem("volume", vol);
    };
  }

  const selector = document.getElementById("soundSelector");
  if (selector) {
    selector.value = currentSoundIndex;
    selector.onchange = (e) => {
      stopSound();
      currentSoundIndex = parseInt(e.target.value);
      activeSound = soundList[currentSoundIndex];
      localStorage.setItem("soundIndex", currentSoundIndex);
    };
  }
}

function showStartTip() {
  const el = document.getElementById("startTip");
  if (!el) return;
  el.innerText = LANG[currentLang].startTip;
  el.style.display = "block";
  setTimeout(() => { el.style.display = "none"; }, 3500);
}


async function enablePiP() {
  if (!document.pictureInPictureEnabled) return;
  const vid = document.querySelector("video");
  if (!vid) return;
  try {
    document.pictureInPictureElement
      ? await document.exitPictureInPicture()
      : await vid.requestPictureInPicture();
  } catch(e) { console.warn("PiP failed:", e); }
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) el.innerText = text;
}

function applyLang() {
  const t = LANG[currentLang];
  [
    "heroBadge","heroTitle","heroSub","startBtn","heroHint",
    "featTitle",
    "feat1Name","feat1Desc","feat2Name","feat2Desc",
    "feat3Name","feat3Desc","feat4Name","feat4Desc",
    "feat5Name","feat5Desc","feat6Name","feat6Desc",
    "eyeTitle","eyeStat1","eyeStat2","eyeStat3",
    "eyeTip1","eyeTip2","eyeTip3",
    "howTitle",
    "step1Title","step1Desc","step2Title","step2Desc",
    "step3Title","step3Desc","step4Title","step4Desc",
    "techTitle","techDesc1","techDesc2","techDesc3",
    "ctaTitle","ctaSub","ctaBtn","footerText",


    "appTitle","statusLabel","pipLabel","volume","soundLabel","bgLabel"
  ].forEach(id => setText(id, t[id]));

  const st = document.getElementById("soundToggle");
  if (st) st.innerText = soundEnabled ? t.soundOn : t.soundOff;

  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === currentLang);
  });

  document.documentElement.lang = currentLang;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem("lang", currentLang);
      applyLang();
    });
  });

  const targets = document.querySelectorAll(
    ".feat-card, .eye-stat, .eye-tip-item, .step, .tech-item, .section-title, .cta-title, .cta-sub"
  );
  targets.forEach(el => el.classList.add("reveal"));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  targets.forEach(el => obs.observe(el));

  applyLang();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && e.target === document.body) {
    e.preventDefault();
    document.getElementById("soundToggle")?.click();
  }
});