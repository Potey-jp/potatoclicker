const $ = (id) => document.getElementById(id);

const els = {
  scoreArea: $("scoreArea"), mainScoreLabel: $("mainScoreLabel"), secondaryScoreArea: $("secondaryScoreArea"), secondaryScoreLabel: $("secondaryScoreLabel"), secondaryScoreText: $("secondaryScoreText"), pointText: $("pointText"), multiplierFormulaText: $("multiplierFormulaText"), cookingTabButton: $("cookingTabButton"),
  menuButton: $("menuButton"), statsButton: $("statsButton"), achievementButton: $("achievementButton"), skinButton: $("skinButton"), closePanelButton: $("closePanelButton"), closeStatsButton: $("closeStatsButton"), closeAchievementButton: $("closeAchievementButton"), closeSkinButton: $("closeSkinButton"), closeCookingUpgradeButton: $("closeCookingUpgradeButton"), closeRecipeButton: $("closeRecipeButton"), upgradePanel: $("upgradePanel"), cookingUpgradePanel: $("cookingUpgradePanel"), statsPanel: $("statsPanel"), achievementPanel: $("achievementPanel"), skinPanel: $("skinPanel"), recipePanel: $("recipePanel"), panelOverlay: $("panelOverlay"), statsContent: $("statsContent"), achievementList: $("achievementList"), achievementSummaryText: $("achievementSummaryText"), achievementToastContainer: $("achievementToastContainer"), skinList: $("skinList"), recipeList: $("recipeList"), cookingUpgradeList: $("cookingUpgradeList"), currentSkinNameText: $("currentSkinNameText"), currentSkinMultiplierText: $("currentSkinMultiplierText"), selectedRecipeNameText: $("selectedRecipeNameText"), recipePanelLevelText: $("recipePanelLevelText"),
  potatoButton: $("potatoButton"), potatoImage: $("potatoImage"),
  debugModal: $("debugModal"), debugFields: $("debugFields"), closeDebugButton: $("closeDebugButton"), cancelDebugButton: $("cancelDebugButton"), applyDebugButton: $("applyDebugButton"),
  offlineRewardModal: $("offlineRewardModal"), offlineDurationText: $("offlineDurationText"), offlineCappedDurationText: $("offlineCappedDurationText"), offlineRewardText: $("offlineRewardText"), claimOfflineRewardButton: $("claimOfflineRewardButton"),
  cookingArea: $("cookingArea"), cookingRecipeTitle: $("cookingRecipeTitle"), cookingDishImage: $("cookingDishImage"), cookingQualityText: $("cookingQualityText"), cookingQualityFill: $("cookingQualityFill"), cookingScoreText: $("cookingScoreText"), cookingComboText: $("cookingComboText"), cookingCountdownText: $("cookingCountdownText"), startCookingButton: $("startCookingButton"), returnGameButton: $("returnGameButton"), cookingResultCard: $("cookingResultCard"), cookingResultTitle: $("cookingResultTitle"), cookingResultText: $("cookingResultText"), cookingLevelText: $("cookingLevelText"), cookingMasteryText: $("cookingMasteryText"), cookingLevelProgressText: $("cookingLevelProgressText"),
  trialScreen: $("trialScreen"), trialCard: $("trialCard"), trialPrevButton: $("trialPrevButton"), trialNextButton: $("trialNextButton"), trialIndexText: $("trialIndexText"), trialTitleText: $("trialTitleText"), trialStatusText: $("trialStatusText"), trialRestrictionText: $("trialRestrictionText"), trialGoalText: $("trialGoalText"), trialRewardText: $("trialRewardText"), trialProgressText: $("trialProgressText"), trialProgressFill: $("trialProgressFill"), startTrialButton: $("startTrialButton"), abortTrialButton: $("abortTrialButton"),
  buyModeOneButton: $("buyModeOneButton"), buyModeTenButton: $("buyModeTenButton"), buyModeHundredButton: $("buyModeHundredButton"), buyModeMaxButton: $("buyModeMaxButton"),
  saveStatusText: $("saveStatusText"), autoBasicRows: $("autoBasicRows"), autoSkinSettings: $("autoSkinSettings"), autoSkinTargetSelect: $("autoSkinTargetSelect"), toggleAutoSkinButton: $("toggleAutoSkinButton"), autoPrestigeTargetInput: $("autoPrestigeTargetInput"), autoPrestigeSettings: $("autoPrestigeSettings"),
};

const BASIC_KEYS = ["clickPower","clickCount","autoClick","autoInterval","autoMultiplier","bonusChance","bonusMultiplier","enhancedBonusChance","enhancedBonusMultiplier"];
const BASIC_LABELS = {
  clickPower:"クリック強化", clickCount:"クリック回数強化", autoClick:"オートクリック", autoInterval:"オート間隔短縮", autoMultiplier:"オートクリック倍加", bonusChance:"ボーナス確率", bonusMultiplier:"ボーナス倍率", enhancedBonusChance:"強化ボーナス確率", enhancedBonusMultiplier:"強化ボーナス倍率"
};
const BASIC_CONFIG = {
  clickPower:{baseCost:7,growth:1.55},
  clickCount:{baseCost:55,growth:1.72},
  autoClick:{baseCost:18,growth:1.60},
  autoInterval:{baseCost:100,growth:1.55},
  autoMultiplier:{baseCost:215,growth:1.92},
  bonusChance:{baseCost:34,growth:1.52},
  bonusMultiplier:{baseCost:68,growth:1.78},
  enhancedBonusChance:{baseCost:330,growth:1.62},
  enhancedBonusMultiplier:{baseCost:540,growth:1.85}
};
const PRESTIGE_TYPES = ["enhancedAuto","enhancedBonus","initialLevel","prestigeBasicMultiplier","costReduction","premiumAutoMultiplier","manualFinalMultiplier","autoPrestige","cookingUnlock","autoBasicUpgrade","prestigePointGain"];
const PRESTIGE_BASE_COST = { enhancedAuto:2, enhancedBonus:2, initialLevel:1, prestigeBasicMultiplier:1, costReduction:1, premiumAutoMultiplier:1, manualFinalMultiplier:1, autoPrestige:7, cookingUnlock:16, autoBasicUpgrade:13, prestigePointGain:20 };
const PRESTIGE_LABELS = { enhancedAuto:"強化オートクリック解放", enhancedBonus:"強化ボーナス解放", initialLevel:"基本初期値 +1", prestigeBasicMultiplier:"基本全ポイント倍率 +0.01", costReduction:"基本コスト 0.9倍", premiumAutoMultiplier:"オートクリック高級倍率", manualFinalMultiplier:"通常クリック最終倍率", autoPrestige:"自動リセット解放", cookingUnlock:"調理機能解放", autoBasicUpgrade:"基本アップグレード自動強化解放", prestigePointGain:"高級ポイント獲得量 +1" };
const BIG_BANG_UPGRADE_TYPES = ["normal","prestige","gain","cookingRobotMk2","initialLevel"];
const BIG_BANG_UPGRADE_CONFIG = {
  normal:{label:"通常ポイント倍率 +100倍", baseCost:1, growth:1.32},
  prestige:{label:"高級ポイント倍率 +10倍", baseCost:1, growth:1.38},
  gain:{label:"BBポイント獲得量 +1", baseCost:1, growth:1.58},
  cookingRobotMk2:{label:"お料理ロボMk2", baseCost:3, growth:1, maxLevel:1},
  initialLevel:{label:"基本初期値増加 +1", baseCost:1, growth:1.5, maxLevel:10}
};
const UPGRADE_BUY_MODES = ["1","10","100","max"];
const UPGRADE_BUY_MODE_BUTTONS = { "1":"buyModeOneButton", "10":"buyModeTenButton", "100":"buyModeHundredButton", max:"buyModeMaxButton" };
const COOKING_UNLOCK_TOOLTIP = "高級アップグレードで料理機能をアンロックしてください";
const COOKING_UPGRADE_KEYS = ["typeScore","keySpread","finalScore","mistakeGuard","freshDirect","qualityImprove","toolImprove","comboCare","zone","manual","finishing","warmth","cookingRobot"];
const COOKING_UPGRADE_CONFIG = {
  typeScore:{name:"タイプスコア増加", description:"キーを正しく押せた時のスコアが増加します。", baseCost:18, growth:1.48},
  keySpread:{name:"キー表示の散らばり改善", description:"押さなければならないキーを表示する範囲が縮小します。", baseCost:24, growth:1.52},
  finalScore:{name:"最終スコア増加", description:"終了時の最終スコアを増加させます。", baseCost:36, growth:1.58},
  mistakeGuard:{name:"タイプミス軽減", description:"押すキーを間違えた時のスコア減少幅を減らします。", baseCost:28, growth:1.5},
  freshDirect:{name:"産地直送", description:"ミニゲーム開始時の質ゲージが20%増加します。", baseCost:42, growth:1.64},
  qualityImprove:{name:"品質改善", description:"質ゲージの最大値が増加します。", baseCost:48, growth:1.66},
  toolImprove:{name:"調理器具改善", description:"判定成功時の質ゲージ回復量が増加します。", baseCost:44, growth:1.6},
  comboCare:{name:"じゃがいものケア", description:"判定を失敗しても一回だけコンボが途切れなくなります。", baseCost:120, growth:1, maxLevel:1},
  zone:{name:"ゾーン", description:"コンボ継続時のスコアと質ゲージ回復量の伸び幅が増加します。", baseCost:64, growth:1.72},
  manual:{name:"マニュアル", description:"料理熟練度のもらえる量を増加させます。", baseCost:52, growth:1.62},
  finishing:{name:"仕上げ", description:"料理によるバフの効果を増やします。", baseCost:72, growth:1.7},
  warmth:{name:"ほかほか", description:"料理によるバフの持続時間を増やします。", baseCost:58, growth:1.64},
  cookingRobot:{name:"お料理ロボ\"PTT\"", description:"料理バフが切れたあと、自動で最高スコアの半分相当の料理を作ります。", baseCost:220, growth:1, maxLevel:1}
};
const COOKING_RECIPES = [
  { id:"baked", name:"バター焼きじゃが", image:"cooking-baked-potato.jpg", unlockLevel:1, duration:20, buffType:"normal", buffLabel:"基本ポイント倍率", baseBuff:0.05, buffDuration:4 * 60_000 },
  { id:"fries", name:"ポテトチップス", image:"cooking-potato-chips.jpg", unlockLevel:2, duration:18, buffType:"manual", buffLabel:"通常クリック最終倍率", baseBuff:0.07, buffDuration:4 * 60_000 },
  { id:"stew", name:"じゃがいもシチュー", image:"cooking-potato-stew.jpg", unlockLevel:4, duration:24, buffType:"auto", buffLabel:"オートクリック倍率", baseBuff:0.08, buffDuration:5 * 60_000 },
  { id:"croquette", name:"ポテトコロッケ", image:"cooking-croquette.jpeg", unlockLevel:6, duration:22, buffType:"prestige", buffLabel:"高級ポイント倍率", baseBuff:0.06, buffDuration:5 * 60_000 }
];
const COOKING_KEY_POOL = ["A","S","D","F","J","K","L","Q","W","E","R","U","I","O"];
const COOKING_QUALITY_CONFIG = [
  { rank:"S", min:760, factor:1.9, masteryBonus:90 },
  { rank:"A", min:520, factor:1.45, masteryBonus:55 },
  { rank:"B", min:330, factor:1.12, masteryBonus:30 },
  { rank:"C", min:160, factor:0.82, masteryBonus:14 },
  { rank:"D", min:0, factor:0.55, masteryBonus:4 }
];
const COOKING_BASE_SCORE = 10;
const COOKING_MISTAKE_PENALTY = 9;
const COOKING_TARGET_ATTEMPTS = 90;
const COOKING_BUFF_GAIN_BOOST = 1.12;
const COOKING_SCORE_BUFF_DIVISOR = 1600;
const COOKING_SCORE_BUFF_CAP = 2.2;
const COOKING_TAP_MODE_MAX_WIDTH = 760;
const COOKING_BASE_QUALITY_MAX = 100;
const COOKING_BASE_QUALITY_START_RATE = 0.5;
const COOKING_FRESH_DIRECT_START_RATE = 0.2;
const COOKING_QUALITY_MAX_PER_LEVEL = 18;
const COOKING_BASE_QUALITY_DECAY_PER_SEC = 5.1;
const COOKING_SCORE_DECAY_STEP = 240;
const COOKING_SCORE_DECAY_PER_STEP = 0.42;
const COOKING_BASE_QUALITY_RECOVERY = 7.4;
const COOKING_TOOL_RECOVERY_BONUS = 1.2;
const COOKING_COMBO_RECOVERY_BONUS = 0.18;
const COOKING_COMBO_SCORE_BONUS = 0.035;
const COOKING_ZONE_COMBO_BONUS = 0.012;
const COOKING_MASTERY_GAIN_BONUS = 0.15;
const COOKING_FINISHING_BUFF_BONUS = 0.12;
const COOKING_WARMTH_DURATION_BONUS = 0.15;
const COOKING_ROBOT_SCORE_RATE = 0.5;
const COOKING_ROBOT_DURATION_MULTIPLIER = 2;
const TRIAL_CONFIG = {
  equipment: {
    id:"equipment",
    name:"設備充実",
    restriction:"基本アップグレードの通常強化が禁止されます。",
    goal:"高級ポイントを 100M まで到達させます。",
    reward:"ジャガイモビックバンを実行した時に、強化オートクリック解放・強化ボーナス解放・自動リセット解放・基本アップグレード自動強化解放がリセットされなくなります。",
    targetPrestigePoints:100_000_000,
  },
  overload: {
    id:"overload",
    name:"重畳負荷",
    restriction:"全ポイントの最終倍率が -0.9 されます。",
    goal:"基本ポイントを 100M まで到達させます。",
    reward:"高級リセットとジャガイモビックバンを複数回同時に実行できるようになります。",
    targetPoints:100_000_000,
  }
};
const TRIAL_IDS = Object.keys(TRIAL_CONFIG);
const TRIAL_PRESERVED_UNLOCK_TYPES = ["enhancedAuto","enhancedBonus","autoPrestige","autoBasicUpgrade"];

const SKIN_CONFIG = [
  { id:"default", name:"通常ジャガイモ", file:"potato.png", cost:0, multiplier:1 },
  { id:"haruka10", name:"はるか", file:"haruka 10.avif", cost:10_000, multiplier:1.2 },
  {
    id:"guraundopetika9",
    name:"グラウンドペチカ（デストロイヤー）",
    file:"9.jpg",
    // 添付された 9.jpg を最優先にしつつ、配置を変えた場合の候補も試します。
    fileCandidates:[
      "9.jpg", "./9.jpg", "assets/9.jpg", "./assets/9.jpg", "images/9.jpg", "./images/9.jpg", "skins/9.jpg", "./skins/9.jpg", "../9.jpg",
      "9.JPG", "./9.JPG", "assets/9.JPG", "./assets/9.JPG", "images/9.JPG", "./images/9.JPG", "skins/9.JPG", "./skins/9.JPG", "../9.JPG"
    ],
    cost:40_000,
    multiplier:1.4
  },
  { id:"tawarayo8", name:"タワラヨーデル", file:"tawarayo-deru 8.avif", cost:150_000, multiplier:1.7 },
  { id:"sinsia7", name:"シンシア", file:"sinsia 7.avif", cost:500_000, multiplier:2.1 },
  { id:"nozanrubi6", name:"ノーザンルビー", file:"no-zanrubi- 6.avif", cost:1_500_000, multiplier:2.6 },
  { id:"redmoon5", name:"レッドムーン", file:"redmoon 5.avif", cost:5_000_000, multiplier:3.2 },
  { id:"dansyaku4", name:"男爵", file:"dansyaku 4.avif", cost:15_000_000, multiplier:4 },
  { id:"kitaakari3", name:"キタアカリ", file:"kitaakari 3.avif", cost:50_000_000, multiplier:5 },
  { id:"mekuin2", name:"メークイン", file:"me-kuin 2.avif", cost:150_000_000, multiplier:6.5 },
  { id:"inkanomezame1", name:"インカのめざめ", file:"inkanomezame 1.avif", cost:500_000_000, multiplier:8.5 }
];



function getSkinImageSrc(skin) {
  if (!skin || !skin.file) return "potato.png";
  return skin.file;
}

const SKIN_IMAGE_SEARCH_DIRS = ["", "./", "assets/", "./assets/", "images/", "./images/", "skins/", "./skins/", "../", "../assets/", "../images/", "../skins/"];
const SKIN_IMAGE_EXTENSIONS = ["avif", "AVIF", "png", "PNG", "jpg", "JPG", "jpeg", "JPEG", "webp", "WEBP"];

function uniqueImageCandidates(candidates) {
  const result = [];
  const add = (value) => {
    if (!value) return;
    const rawValue = String(value).trim();
    if (!rawValue || result.includes(rawValue)) return;
    result.push(rawValue);
  };
  candidates.forEach((candidate) => {
    if (!candidate) return;
    const raw = String(candidate).trim();
    if (!raw) return;
    add(raw);
    add(raw.replace(/\\/g, "/"));
    add(encodeURI(raw));
    try {
      add(new URL(raw, window.location.href).href);
    } catch (e) {
      // URL化できない候補はそのまま無視します。
    }
  });
  return result;
}

function hasImageExtension(path) {
  return /\.(avif|png|jpe?g|webp)$/i.test(String(path || ""));
}

function buildPathCandidatesFromBase(base) {
  const rawBase = String(base || "").trim();
  if (!rawBase) return [];
  const names = [];
  const addName = (name) => { if (name && !names.includes(name)) names.push(name); };

  addName(rawBase);
  if (hasImageExtension(rawBase)) {
    const stem = rawBase.replace(/\.(avif|png|jpe?g|webp)$/i, "");
    addName(stem);
    SKIN_IMAGE_EXTENSIONS.forEach((ext) => {
      addName(`${stem}.${ext}`);
      // Windowsで拡張子を非表示にしている状態で「9.avif」と入力すると、9.avif.avif になることがあります。
      addName(`${rawBase}.${ext}`);
    });
  } else {
    SKIN_IMAGE_EXTENSIONS.forEach((ext) => addName(`${rawBase}.${ext}`));
  }

  const candidates = [];
  SKIN_IMAGE_SEARCH_DIRS.forEach((dir) => {
    names.forEach((name) => candidates.push(`${dir}${name}`));
  });
  return candidates;
}

function getSkinImageCandidates(skin) {
  if (!skin) return ["potato.png"];
  const candidates = [];

  // グラウンドペチカは添付の9.jpg候補を優先します。
  if (Array.isArray(skin.fileCandidates) && skin.fileCandidates.length > 0) candidates.push(...skin.fileCandidates);
  if (Array.isArray(skin.fileBases) && skin.fileBases.length > 0) {
    skin.fileBases.forEach((base) => candidates.push(...buildPathCandidatesFromBase(base)));
  }
  candidates.push(...buildPathCandidatesFromBase(getSkinImageSrc(skin)));

  return uniqueImageCandidates(candidates);
}

function setImageWithCandidates(img, candidates, fallback = "potato.png") {
  if (!img || !Array.isArray(candidates) || candidates.length === 0) return;
  const list = uniqueImageCandidates(candidates);
  let index = 0;

  const apply = () => {
    const current = list[index];
    img.dataset.imageCandidateIndex = String(index);
    img.dataset.imageCandidate = current;
    img.onerror = () => {
      index += 1;
      if (index < list.length) {
        apply();
      } else {
        img.onerror = null;
        img.dataset.imageLoadFailed = "true";
        img.dataset.failedCandidates = list.join(" | ");
        // スキン画面には候補ファイル名を表示しません。確認が必要な場合だけ開発者ツールのConsoleに出します。
        console.warn("スキン画像を読み込めませんでした。game.html と同じフォルダ、または assets/images/skins フォルダを確認してください。", list);
        if (fallback && img.src !== fallback) {
          img.src = fallback;
        }
      }
    };
    img.onload = () => {
      img.onerror = null;
      img.dataset.imageLoadFailed = "false";
      img.dataset.loadedImage = current;
    };
    img.src = current;
  };

  apply();
}

const ACHIEVEMENTS = [
  { id:"firstClick", name:"初めてのじゃがいも", condition:"初めてじゃがいもをクリックする", reward:0.01 },
  { id:"click100", name:"じゃがいも餅", condition:"じゃがいもを100回クリックする", reward:0.01 },
  { id:"click10000", name:"ポテト団子", condition:"じゃがいもを1万回クリックする", reward:0.01 },
  { id:"points100", name:"家庭栽培", condition:"累計100ポイント獲得する", reward:0.01 },
  { id:"points10000", name:"家庭菜園", condition:"累計1万ポイント獲得する", reward:0.01 },
  { id:"points1000000", name:"じゃがいも農園", condition:"累計100万ポイント獲得する", reward:0.01 },
  { id:"points100000000", name:"じゃがいも帝国", condition:"累計1億ポイント獲得する", reward:0.01 },
  { id:"firstUpgrade", name:"初めてのアップグレード", condition:"初めて基本アップグレードを購入する", reward:0.01 },
  { id:"hybrid", name:"ハイブリッド", condition:"全ての基本アップグレードを最低一つずつ購入する", reward:0.01 },
  { id:"upgrade50", name:"じゃがいもツール", condition:"基本アップグレードを合計50レベル購入する", reward:0.01 },
  { id:"upgrade100", name:"ポテトハーベスター", condition:"基本アップグレードを合計100レベル購入する", reward:0.01 },
  { id:"upgrade500", name:"じゃがいも収穫用人工知能", condition:"基本アップグレードを合計500レベル購入する", reward:0.05 },
  { id:"skinBuy", name:"イメチェン", condition:"スキンを購入する", reward:0.01 },
  { id:"bonusStreak5", name:"運も実力のうち", condition:"5回連続でボーナスを引き当てる", reward:0.05 },
  { id:"clickGain10000", name:"大豊作", condition:"一度のクリックで1万ポイントを獲得する", reward:0.05 },
  { id:"firstPrestige", name:"はじめてのリセット", condition:"初めて高級リセットを行う", reward:0.01 },
  { id:"automation", name:"全自動化", condition:"強化オートクリック・自動リセット・基本アップグレード自動強化を購入する", reward:0.05 },
  { id:"enhancedStreak5", name:"奇跡のじゃがいも", condition:"5回連続で追加ボーナスを引き当てる", reward:0.1 },
  { id:"prestigePoint10", name:"ブランドじゃがいも", condition:"累計10高級ポイントを獲得する", reward:0.1 },
  { id:"prestigeWithin60", name:"早くなってきた", condition:"リセットしてから1分以内にもう一度リセットする", reward:0.5 },
  { id:"prestige10AtOnce", name:"何回でも", condition:"一度に10回リセットする", reward:0.15 },
  { id:"prestigeWithin10", name:"光速じゃがいも", condition:"リセットしてから10秒以内にもう一度リセットする", reward:1 },
  { id:"prestigePoint100", name:"新しい時代", condition:"100高級ポイント保有する", reward:0.5 },
  { id:"firstBigBang", name:"じゃがいもの新たな誕生", condition:"ジャガイモビックバンする", reward:5 }
];

const PRESTIGE_COST = 100_000_000;
const BIG_BANG_COST = 100_000_000;
const BIG_BANG_VISIBLE_THRESHOLD = 100_000;
const SAVE_KEY_PREFIX = "potatoClicker";
const SAVE_KEY_BASE = "potatoClickerSaveData_v3";
function getStorageScopeKey() {
  const scope = location.protocol === "file:" ? location.pathname : `${location.origin}${location.pathname}`;
  return encodeURIComponent(scope).replace(/%/g, "_").slice(-160) || "default";
}
const SAVE_KEY = `${SAVE_KEY_BASE}_${getStorageScopeKey()}`;
const OLD_SAVE_KEYS = ["potatoClickerSaveData_v2", "potatoClickerSaveData_v1", "potatoClickerSaveData"];
const RESET_MARKER_KEY = `${SAVE_KEY_BASE}_hardResetMarker_${getStorageScopeKey()}`;
const FORCE_CLEAN_START_KEY = `${SAVE_KEY_BASE}_forceCleanStart_${getStorageScopeKey()}`;
const OFFLINE_CLAIMED_UNTIL_KEY = `${SAVE_KEY_BASE}_offlineClaimedUntil_${getStorageScopeKey()}`;
const OFFLINE_LEFT_AT_KEY = `${SAVE_KEY_BASE}_offlineLeftAt_${getStorageScopeKey()}`;
const GROUNDPETIKA_CUSTOM_IMAGE_CLEAR_KEY = `${SAVE_KEY_BASE}_groundpetikaJpgCustomClear_v1_${getStorageScopeKey()}`;

function clearStaleGroundpetikaCustomImagesOnce() {
  // 以前の試行時にlocalStorageへ保存された古いカスタム画像があると、
  // 新しい9.jpgより先に読まれる場合があるため、一度だけ掃除します。
  try {
    if (localStorage.getItem(GROUNDPETIKA_CUSTOM_IMAGE_CLEAR_KEY)) return;
    const removeKeys = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key) continue;
      const isGroundpetikaCustom = key.includes("_customSkinImage_") && (key.endsWith("_guraundopetika9") || key.endsWith("_guraundopotika9"));
      if (isGroundpetikaCustom) removeKeys.push(key);
    }
    removeKeys.forEach((key) => localStorage.removeItem(key));
    localStorage.setItem(GROUNDPETIKA_CUSTOM_IMAGE_CLEAR_KEY, "1");
  } catch (e) {
    console.error(e);
  }
}
let saveDisabled = false;
let offlineRewardClaimedThisSession = false;
const AUTO_SAVE_INTERVAL = 5000;
const AUTO_BASIC_INTERVAL = 500;
const AUTO_BASIC_PURCHASES_PER_TICK = 20;
const AUTO_INTERVAL_REDUCTION = 0.95;
const MIN_AUTO_INTERVAL = 100;
const ENHANCED_AUTO_INTERVAL = 200;
const MAX_BONUS_CHANCE = 100;
const BONUS_CHANCE_BASE = 0.5;
const BONUS_CHANCE_PER_LEVEL = 0.5;
const BONUS_MULT_BASE = 1.25;
const BONUS_MULT_PER_LEVEL = 0.25;
const ENHANCED_BONUS_CHANCE_BASE = 0.5;
const ENHANCED_BONUS_CHANCE_PER_LEVEL = 0.5;
const ENHANCED_BONUS_MULT_BASE = 1.25;
const ENHANCED_BONUS_MULT_PER_LEVEL = 0.25;
const BASIC_INITIAL_INCREMENT = 1;
const BASIC_INITIAL_MAX = 10;
const BB_BASIC_INITIAL_MAX = 10;
const PRESTIGE_BASIC_MULTIPLIER_INCREMENT = 0.01;
const POPUP_LIFETIME = 700;
const MAX_STANDARD_PER_CLICK = 10;
const MAX_ENHANCED_PER_CLICK = 10;
const MAX_STANDARD_ON_SCREEN = 40;
const MAX_ENHANCED_ON_SCREEN = 40;
const PRESTIGE_TOP_DISPLAY_THRESHOLD = 100;
const PRESTIGE_TOP_DISPLAY_DURATION = 10_000;
const DEBUG_COMMAND = "POTATO";
const OFFLINE_MINIMUM_MS = 60_000;
const OFFLINE_MAX_MS = 24 * 60 * 60 * 1000;
const VIEW_SCROLL_THRESHOLD = 160;
const VIEW_TOUCH_THRESHOLD = 72;
const VIEW_TRANSITION_SWITCH_DELAY = 250;
const VIEW_TRANSITION_DURATION = 680;
const MAX_BULK_PURCHASES = 1000;
const LUCKY_POTATO_INTERVAL = 60_000;
const LUCKY_POTATO_CHANCE = 0.05;
const LUCKY_POTATO_REWARD_RATE = 0.1;
const LUCKY_POTATO_SIZE = 54;
const LUCKY_POTATO_PADDING = 14;
const LUCKY_POTATO_POSITION_ATTEMPTS = 90;
// 極端な強化やデバッグ入力で Infinity / NaN が混ざると、
// セーブ・ロード・初期化が壊れるため、ゲーム内で扱う最大値を制限する。
const MAX_GAME_NUMBER = 1e150;
const MAX_LEVEL = 1_000_000;
const MAX_RESET_BULK_COUNT = 1_000_000_000;

const basicEls = {};
BASIC_KEYS.forEach((key) => {
  basicEls[key] = {
    level: $(`${key}LevelText`),
    cost: $(key === "clickPower" ? "clickUpgradeCostText" : key === "clickCount" ? "clickCountUpgradeCostText" : key === "autoClick" ? "autoClickCostText" : key === "autoInterval" ? "autoIntervalUpgradeCostText" : key === "autoMultiplier" ? "autoMultiplierUpgradeCostText" : key === "bonusChance" ? "bonusChanceCostText" : key === "bonusMultiplier" ? "bonusMultiplierCostText" : key === "enhancedBonusChance" ? "enhancedBonusChanceCostText" : "enhancedBonusMultiplierCostText"),
    button: $(key === "clickPower" ? "clickUpgradeButton" : key === "clickCount" ? "clickCountUpgradeButton" : key === "autoClick" ? "autoClickUpgradeButton" : key === "autoInterval" ? "autoIntervalUpgradeButton" : key === "autoMultiplier" ? "autoMultiplierUpgradeButton" : key === "bonusChance" ? "bonusChanceUpgradeButton" : key === "bonusMultiplier" ? "bonusMultiplierUpgradeButton" : key === "enhancedBonusChance" ? "enhancedBonusChanceUpgradeButton" : "enhancedBonusMultiplierUpgradeButton")
  };
});

const state = createInitialState();
let autoClickTimer = null;
let enhancedAutoTimer = null;
let autoBasicTimer = null;
let prestigeTopTimer = null;
let prestigeTopActive = false;
let debugProgress = "";
let saveStatusTimer = null;
let pendingOfflineReward = null;
let currentView = "game";
let selectedTrialId = "equipment";
let viewScrollAccum = 0;
let viewTouchStartY = null;
let trialDragStartX = null;
let trialDragStartY = null;
let viewTransitionTimer = null;
let viewTransitionCleanupTimer = null;
let luckyPotatoTimer = null;
let luckyPotatoEl = null;
let cookingSession = null;
let cookingCountdownTimer = null;
let cookingTimer = null;
let cookingKeyEl = null;
let lastCookingResult = null;
const popupQueues = { standard: [], enhanced: [] };
const autoBasicControls = {};
const cookingUpgradeControls = {};

function createInitialCookingUpgradeLevels() {
  const levels = {};
  COOKING_UPGRADE_KEYS.forEach((key) => { levels[key] = 0; });
  return levels;
}

function createInitialCookingState() {
  return {
    cookingUnlocked:false,
    cookingLevel:1,
    cookingMastery:0,
    cookingLevelProgress:0,
    cookingTotalMastery:0,
    selectedRecipeId:"baked",
    unlockedRecipes:["baked"],
    cookingUpgradeLevels:createInitialCookingUpgradeLevels(),
    cookingBuffs:[],
    cookingBestScores:{},
    cookingAutoCookJobs:[],
  };
}

function createInitialState() {
  const levels = {}; const costs = {}; const autoSettings = {}; const pCounts = {};
  BASIC_KEYS.forEach((k) => { levels[k] = 0; costs[k] = BASIC_CONFIG[k].baseCost; autoSettings[k] = {enabled:false,targetLevel:0}; });
  PRESTIGE_TYPES.forEach((k) => { pCounts[k] = 0; });
  return {
    points:0, prestigePoints:0, bigBangPoints:0,
    basicLevels:levels, basicCosts:costs,
    prestigeResetCount:0, bigBangCount:0,
    prestigeBasicMultiplier:1, bbAllMultiplier:1,
    enhancedAutoUnlocked:false, enhancedBonusUnlocked:false,
    basicInitialLevelBonus:0, basicCostMultiplier:1,
    premiumAutoMultiplier:1, premiumAutoLevel:0,
    manualFinalMultiplier:1, manualFinalLevel:0,
    autoPrestigeUnlocked:false, autoPrestigeEnabled:false, autoPrestigeTarget:1,
    autoBasicUnlocked:false, autoBasicEnabled:false, autoBasicSettings:autoSettings,
    autoSkinEnabled:false, autoSkinTargetId:"default",
    prestigePointGainLevel:0,
    prestigePurchaseCounts:pCounts,
    bbNormalMultiplierLevel:0, bbPrestigeMultiplierLevel:0, bbPointGainLevel:0,
    bbCookingRobotMk2Unlocked:false, bbInitialLevelBonus:0,
    activeTrialId:null, trialSnapshot:null, trialRewards:{equipment:false, overload:false},
    upgradeBuyMode:"1",
    ...createInitialCookingState(),
    unlockedSkins:["default"], equippedSkin:"default",
    achievements:{}, totalClicks:0, totalPointsEarned:0, totalPrestigePointsEarned:0, totalBasicUpgradePurchases:0, basicPurchaseCounts:{}, bonusStreak:0, enhancedBonusStreak:0, lastPrestigeResetAt:null,
    lastSavedAt:null,
  };
}

function assignState(data) {
  const fresh = createInitialState();
  Object.assign(state, fresh, data || {});
  state.points = num(state.points, 0);
  state.prestigePoints = num(state.prestigePoints, 0);
  state.bigBangPoints = num(state.bigBangPoints, 0);
  state.prestigeResetCount = Math.floor(num(state.prestigeResetCount, 0));
  state.bigBangCount = Math.floor(num(state.bigBangCount, 0));
  state.prestigeBasicMultiplier = num(state.prestigeBasicMultiplier, 1);
  state.bbAllMultiplier = num(state.bbAllMultiplier, 1);
  state.basicInitialLevelBonus = Math.min(BASIC_INITIAL_MAX, Math.max(0, Math.floor(num(state.basicInitialLevelBonus, 0))));
  state.bbCookingRobotMk2Unlocked = state.bbCookingRobotMk2Unlocked === true;
  state.bbInitialLevelBonus = Math.min(BB_BASIC_INITIAL_MAX, Math.max(0, Math.floor(num(state.bbInitialLevelBonus, 0))));
  state.autoPrestigeTarget = Math.max(1, Math.floor(num(state.autoPrestigeTarget, 1)));
  BASIC_KEYS.forEach((k) => {
    state.basicLevels[k] = Math.max(0, Math.floor(num(state.basicLevels?.[k], 0)));
    state.basicCosts[k] = Math.max(1, num(state.basicCosts?.[k], getInitialBasicCost(k)));
    const s = state.autoBasicSettings?.[k] || {};
    state.autoBasicSettings[k] = { enabled:s.enabled === true, targetLevel:Math.max(0, Math.floor(num(s.targetLevel, 0))) };
  });
  PRESTIGE_TYPES.forEach((k) => { state.prestigePurchaseCounts[k] = Math.max(0, Math.floor(num(state.prestigePurchaseCounts?.[k], 0))); });
  const validSkinIds = SKIN_CONFIG.map((skin) => skin.id);
  const normalizeSkinId = (id) => id === "guraundopotika9" ? "guraundopetika9" : id;
  const loadedSkins = Array.isArray(state.unlockedSkins) ? state.unlockedSkins.map(normalizeSkinId) : ["default"];
  state.equippedSkin = normalizeSkinId(state.equippedSkin);
  state.autoSkinTargetId = normalizeSkinId(state.autoSkinTargetId);
  state.unlockedSkins = Array.from(new Set(["default", ...loadedSkins.filter((id) => validSkinIds.includes(id))]));
  if (!validSkinIds.includes(state.equippedSkin) || !state.unlockedSkins.includes(state.equippedSkin)) state.equippedSkin = "default";
  if (!validSkinIds.includes(state.autoSkinTargetId)) state.autoSkinTargetId = "default";
  state.autoSkinEnabled = state.autoSkinEnabled === true;
  state.cookingUnlocked = state.cookingUnlocked === true;
  state.cookingLevel = Math.max(1, Math.floor(num(state.cookingLevel, 1)));
  state.cookingMastery = Math.max(0, num(state.cookingMastery, 0));
  state.cookingLevelProgress = Math.max(0, num(state.cookingLevelProgress, 0));
  state.cookingTotalMastery = Math.max(0, num(state.cookingTotalMastery, 0));
  state.cookingUpgradeLevels = state.cookingUpgradeLevels && typeof state.cookingUpgradeLevels === "object" ? state.cookingUpgradeLevels : createInitialCookingUpgradeLevels();
  COOKING_UPGRADE_KEYS.forEach((k) => { state.cookingUpgradeLevels[k] = Math.max(0, Math.floor(num(state.cookingUpgradeLevels?.[k], 0))); });
  state.unlockedRecipes = Array.isArray(state.unlockedRecipes) ? state.unlockedRecipes : ["baked"];
  state.selectedRecipeId = COOKING_RECIPES.some((recipe) => recipe.id === state.selectedRecipeId) ? state.selectedRecipeId : "baked";
  state.cookingBuffs = Array.isArray(state.cookingBuffs) ? state.cookingBuffs : [];
  state.cookingBestScores = state.cookingBestScores && typeof state.cookingBestScores === "object" ? state.cookingBestScores : {};
  COOKING_RECIPES.forEach((recipe) => { state.cookingBestScores[recipe.id] = Math.max(0, Math.floor(num(state.cookingBestScores?.[recipe.id], 0))); });
  state.cookingAutoCookJobs = Array.isArray(state.cookingAutoCookJobs) ? state.cookingAutoCookJobs : [];
  state.cookingAutoCookJobs = state.cookingAutoCookJobs
    .filter((job) => job && COOKING_RECIPES.some((recipe) => recipe.id === job.recipeId))
    .map((job) => ({ recipeId:job.recipeId, readyAt:Math.max(0, num(job.readyAt, 0)), score:Math.max(1, Math.floor(num(job.score, 1))) }));
  syncCookingRecipeUnlocks();
  state.trialRewards = state.trialRewards && typeof state.trialRewards === "object" ? state.trialRewards : {};
  state.trialRewards.equipment = state.trialRewards.equipment === true;
  state.trialRewards.overload = state.trialRewards.overload === true;
  state.activeTrialId = TRIAL_CONFIG[state.activeTrialId] ? state.activeTrialId : null;
  state.trialSnapshot = state.activeTrialId && state.trialSnapshot && typeof state.trialSnapshot === "object" ? state.trialSnapshot : null;
  if (state.activeTrialId && !state.trialSnapshot) state.activeTrialId = null;
  state.upgradeBuyMode = UPGRADE_BUY_MODES.includes(String(state.upgradeBuyMode)) ? String(state.upgradeBuyMode) : "1";
  state.achievements = state.achievements && typeof state.achievements === "object" ? state.achievements : {};
  state.totalClicks = Math.max(0, Math.floor(num(state.totalClicks, 0)));
  state.totalPointsEarned = Math.max(0, num(state.totalPointsEarned, 0));
  state.totalPrestigePointsEarned = Math.max(0, num(state.totalPrestigePointsEarned, state.prestigePoints || 0));
  state.totalBasicUpgradePurchases = Math.max(0, Math.floor(num(state.totalBasicUpgradePurchases, 0)));
  state.basicPurchaseCounts = state.basicPurchaseCounts && typeof state.basicPurchaseCounts === "object" ? state.basicPurchaseCounts : {};
  BASIC_KEYS.forEach((k) => { state.basicPurchaseCounts[k] = Math.max(0, Math.floor(num(state.basicPurchaseCounts[k], 0))); });
  state.bonusStreak = Math.max(0, Math.floor(num(state.bonusStreak, 0)));
  state.enhancedBonusStreak = Math.max(0, Math.floor(num(state.enhancedBonusStreak, 0)));
  sanitizeState();
}



function clampNumber(value, fallback = 0, max = MAX_GAME_NUMBER) {
  const n = Number(value);
  if (Number.isNaN(n)) return fallback;
  if (n === Infinity) return max;
  if (n === -Infinity) return -max;
  if (!Number.isFinite(n)) return fallback;
  if (n > max) return max;
  if (n < -max) return -max;
  return n;
}
function clampPositive(value, fallback = 0, max = MAX_GAME_NUMBER) {
  return Math.max(0, clampNumber(value, fallback, max));
}
function clampInteger(value, fallback = 0, max = MAX_LEVEL) {
  return Math.max(0, Math.floor(clampNumber(value, fallback, max)));
}
function safeAdd(a, b, max = MAX_GAME_NUMBER) {
  return clampNumber(clampNumber(a, 0, max) + clampNumber(b, 0, max), 0, max);
}
function safeMultiply(...values) {
  let result = 1;
  for (const value of values) {
    result *= clampNumber(value, 0, MAX_GAME_NUMBER);
    if (!Number.isFinite(result) || result > MAX_GAME_NUMBER) return MAX_GAME_NUMBER;
    if (result < -MAX_GAME_NUMBER) return -MAX_GAME_NUMBER;
  }
  return clampNumber(result, 0, MAX_GAME_NUMBER);
}
function num(value, fallback) { return clampNumber(value, fallback, MAX_GAME_NUMBER); }
function fmt(value) {
  const units = ["","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc","Ud","Dd","Td","Qad","Qid","Sxd","Spd","Ocd","Nod","Vg","Uvg","Dvg","Tvg","Qavg","Qivg","Sxvg","Spvg","Ocvg","Novg","Tg","Utg","Dtg","Ttg","Qatg","Qitg","Sxtg","Sptg","Octg","Notg","Qag","Uqag","Dqag","Tqag","Qaqag","Qiqag","Sxqag","Spqag","Ocqag","Noqag"];
  const safe = clampNumber(value, 0, MAX_GAME_NUMBER);
  const v = Math.abs(safe) < 1e-9 ? 0 : safe;
  const sign = v < 0 ? "-" : "";
  let a = Math.abs(v);
  if (a < 1000) return sign + a.toLocaleString("ja-JP", { maximumFractionDigits: Math.abs(a - Math.round(a)) < 1e-9 ? 0 : 2 });
  let i = Math.min(units.length - 1, Math.floor(Math.log10(a) / 3));
  let n = a / 1000 ** i;
  if (!Number.isFinite(n)) n = 999;
  return sign + n.toLocaleString("ja-JP", { maximumFractionDigits: n >= 100 ? 0 : n >= 10 ? 1 : 2 }) + units[i];
}
function fmtFull(value) { return clampNumber(value,0,MAX_GAME_NUMBER).toLocaleString("ja-JP", { maximumFractionDigits: 2 }); }
function fmtMult(value) { return clampNumber(value,0,MAX_GAME_NUMBER).toFixed(2).replace(/0+$/, "").replace(/\.$/, ""); }
function fmtSec(ms) { return (clampNumber(ms, 1000, MAX_GAME_NUMBER) / 1000).toLocaleString("ja-JP", { minimumFractionDigits:2, maximumFractionDigits:2 }); }
function fmtPct(value) { return (clampNumber(value, 0, MAX_GAME_NUMBER) * 100).toLocaleString("ja-JP", { maximumFractionDigits:1 }); }

function getRecipeConfig(id = state.selectedRecipeId) {
  return COOKING_RECIPES.find((recipe) => recipe.id === id) || COOKING_RECIPES[0];
}
function isRecipeUnlocked(id) {
  return state.unlockedRecipes?.includes(id);
}
function syncCookingRecipeUnlocks() {
  const validIds = COOKING_RECIPES.map((recipe) => recipe.id);
  const existing = Array.isArray(state.unlockedRecipes) ? state.unlockedRecipes.filter((id) => validIds.includes(id)) : [];
  const levelUnlocked = COOKING_RECIPES.filter((recipe) => recipe.unlockLevel <= Math.max(1, Math.floor(num(state.cookingLevel, 1)))).map((recipe) => recipe.id);
  state.unlockedRecipes = Array.from(new Set(["baked", ...existing, ...levelUnlocked]));
  if (!validIds.includes(state.selectedRecipeId) || !state.unlockedRecipes.includes(state.selectedRecipeId)) state.selectedRecipeId = "baked";
}
function getCookingLevelRequirement(level = state.cookingLevel) {
  return Math.floor(90 + Math.pow(Math.max(1, level), 1.45) * 70);
}
function getCookingUpgradeLevel(key) {
  return clampInteger(state.cookingUpgradeLevels?.[key], 0, MAX_LEVEL);
}
function getCookingUpgradeMaxLevel(key) {
  return clampInteger(COOKING_UPGRADE_CONFIG[key]?.maxLevel ?? MAX_LEVEL, MAX_LEVEL, MAX_LEVEL);
}
function getCookingUpgradeCost(key) {
  const config = COOKING_UPGRADE_CONFIG[key];
  if (!config) return MAX_GAME_NUMBER;
  if (getCookingUpgradeLevel(key) >= getCookingUpgradeMaxLevel(key)) return MAX_GAME_NUMBER;
  return Math.max(1, Math.floor(config.baseCost * Math.pow(config.growth, getCookingUpgradeLevel(key))));
}
function getCookingMasteryGainMultiplier() {
  return 1 + getCookingUpgradeLevel("manual") * COOKING_MASTERY_GAIN_BONUS;
}
function getCookingBuffEffectMultiplier() {
  return 1 + getCookingUpgradeLevel("finishing") * COOKING_FINISHING_BUFF_BONUS;
}
function getCookingBuffDuration(recipe) {
  return Math.max(1000, Math.floor(safeMultiply(recipe.buffDuration, 1 + getCookingUpgradeLevel("warmth") * COOKING_WARMTH_DURATION_BONUS)));
}
function isCookingRobotUnlocked() {
  return getCookingUpgradeLevel("cookingRobot") > 0;
}
function isCookingRobotMk2Unlocked() {
  return state.bbCookingRobotMk2Unlocked === true;
}
function getCookingRobotScoreRate() {
  return isCookingRobotMk2Unlocked() ? 1 : COOKING_ROBOT_SCORE_RATE;
}
function getCookingRobotDurationMultiplier() {
  return isCookingRobotMk2Unlocked() ? 1 : COOKING_ROBOT_DURATION_MULTIPLIER;
}
function getCookingBestScore(recipeId) {
  return Math.max(0, Math.floor(num(state.cookingBestScores?.[recipeId], 0)));
}
function rememberCookingBestScore(recipeId, score) {
  if (!state.cookingBestScores || typeof state.cookingBestScores !== "object") state.cookingBestScores = {};
  state.cookingBestScores[recipeId] = Math.max(getCookingBestScore(recipeId), Math.max(0, Math.floor(num(score, 0))));
}
function hasActiveCookingBuff(recipeId) {
  const now = Date.now();
  return Array.isArray(state.cookingBuffs) && state.cookingBuffs.some((buff) => buff?.recipeId === recipeId && clampNumber(buff.expiresAt, 0) > now);
}
function hasCookingRobotJob(recipeId) {
  return Array.isArray(state.cookingAutoCookJobs) && state.cookingAutoCookJobs.some((job) => job?.recipeId === recipeId);
}
function queueCookingRobotJob(recipeId, now = Date.now()) {
  if (!isCookingRobotUnlocked() || hasCookingRobotJob(recipeId) || hasActiveCookingBuff(recipeId)) return false;
  const recipe = getRecipeConfig(recipeId);
  const bestScore = getCookingBestScore(recipe.id);
  if (bestScore <= 0) return false;
  const score = Math.max(1, Math.floor(safeMultiply(bestScore, getCookingRobotScoreRate())));
  const readyAt = now + safeMultiply(recipe.duration, getCookingRobotDurationMultiplier(), 1000);
  state.cookingAutoCookJobs.push({ recipeId:recipe.id, readyAt, score });
  return true;
}
function processCookingAutoCookJobs(now = Date.now()) {
  if (!Array.isArray(state.cookingAutoCookJobs) || state.cookingAutoCookJobs.length === 0) return false;
  let applied = false;
  const remaining = [];
  state.cookingAutoCookJobs.forEach((job) => {
    if (!job || !COOKING_RECIPES.some((recipe) => recipe.id === job.recipeId)) return;
    if (clampNumber(job.readyAt, 0) > now) {
      remaining.push(job);
      return;
    }
    const recipe = getRecipeConfig(job.recipeId);
    if (hasActiveCookingBuff(recipe.id)) return;
    const score = Math.max(1, Math.floor(num(job.score, 1)));
    const quality = getCookingQuality(score);
    applyCookingBuff(recipe, quality, score, { source:"robot" });
    applied = true;
  });
  state.cookingAutoCookJobs = remaining;
  return applied;
}
function getCookingBuffMultiplier(type) {
  cleanupCookingBuffs();
  const bonus = state.cookingBuffs
    .filter((buff) => buff.type === type)
    .reduce((sum, buff) => sum + clampPositive(buff.bonus, 0), 0);
  return safeAdd(1, bonus);
}
function cleanupCookingBuffs() {
  if (!Array.isArray(state.cookingBuffs)) {
    state.cookingBuffs = [];
    return true;
  }
  const now = Date.now();
  const expiredBuffs = state.cookingBuffs.filter((buff) => (
    buff && COOKING_RECIPES.some((recipe) => recipe.id === buff.recipeId) &&
    ["normal","manual","auto","prestige"].includes(buff.type) &&
    clampNumber(buff.expiresAt, 0) <= now
  ));
  state.cookingBuffs = state.cookingBuffs.filter((buff) => (
    buff && COOKING_RECIPES.some((recipe) => recipe.id === buff.recipeId) &&
    ["normal","manual","auto","prestige"].includes(buff.type) &&
    clampNumber(buff.expiresAt, 0) > now
  ));
  expiredBuffs.forEach((buff) => queueCookingRobotJob(buff.recipeId, now));
  const robotApplied = processCookingAutoCookJobs(now);
  return expiredBuffs.length > 0 || robotApplied;
}

function sanitizeState() {
  state.points = clampPositive(state.points, 0);
  state.prestigePoints = clampPositive(state.prestigePoints, 0);
  state.bigBangPoints = clampPositive(state.bigBangPoints, 0);
  state.prestigeResetCount = clampInteger(state.prestigeResetCount, 0, MAX_GAME_NUMBER);
  state.bigBangCount = clampInteger(state.bigBangCount, 0, MAX_GAME_NUMBER);
  state.prestigeBasicMultiplier = Math.max(1, clampNumber(state.prestigeBasicMultiplier, 1));
  state.bbAllMultiplier = Math.max(1, clampNumber(state.bbAllMultiplier, 1));
  state.basicCostMultiplier = Math.max(0.000001, clampNumber(state.basicCostMultiplier, 1));
  state.premiumAutoMultiplier = Math.max(1, clampNumber(state.premiumAutoMultiplier, 1));
  state.premiumAutoLevel = clampInteger(state.premiumAutoLevel, 0, MAX_LEVEL);
  state.manualFinalMultiplier = Math.max(1, clampNumber(state.manualFinalMultiplier, 1));
  state.manualFinalLevel = clampInteger(state.manualFinalLevel, 0, MAX_LEVEL);
  state.prestigePointGainLevel = clampInteger(state.prestigePointGainLevel, 0, MAX_LEVEL);
  state.bbNormalMultiplierLevel = clampInteger(state.bbNormalMultiplierLevel, 0, MAX_LEVEL);
  state.bbPrestigeMultiplierLevel = clampInteger(state.bbPrestigeMultiplierLevel, 0, MAX_LEVEL);
  state.bbPointGainLevel = clampInteger(state.bbPointGainLevel, 0, MAX_LEVEL);
  state.bbCookingRobotMk2Unlocked = state.bbCookingRobotMk2Unlocked === true;
  state.bbInitialLevelBonus = Math.min(BB_BASIC_INITIAL_MAX, clampInteger(state.bbInitialLevelBonus, 0, MAX_LEVEL));
  state.cookingUnlocked = state.cookingUnlocked === true;
  state.cookingLevel = Math.max(1, clampInteger(state.cookingLevel, 1, MAX_LEVEL));
  state.cookingMastery = clampPositive(state.cookingMastery, 0);
  state.cookingLevelProgress = clampPositive(state.cookingLevelProgress, 0);
  state.cookingTotalMastery = clampPositive(state.cookingTotalMastery, 0);
  state.cookingUpgradeLevels = state.cookingUpgradeLevels && typeof state.cookingUpgradeLevels === "object" ? state.cookingUpgradeLevels : createInitialCookingUpgradeLevels();
  COOKING_UPGRADE_KEYS.forEach((k) => { state.cookingUpgradeLevels[k] = clampInteger(state.cookingUpgradeLevels?.[k], 0, MAX_LEVEL); });
  state.unlockedRecipes = Array.isArray(state.unlockedRecipes) ? state.unlockedRecipes : ["baked"];
  state.selectedRecipeId = COOKING_RECIPES.some((recipe) => recipe.id === state.selectedRecipeId) ? state.selectedRecipeId : "baked";
  state.cookingBestScores = state.cookingBestScores && typeof state.cookingBestScores === "object" ? state.cookingBestScores : {};
  COOKING_RECIPES.forEach((recipe) => { state.cookingBestScores[recipe.id] = clampInteger(state.cookingBestScores?.[recipe.id], 0, MAX_GAME_NUMBER); });
  state.cookingAutoCookJobs = Array.isArray(state.cookingAutoCookJobs) ? state.cookingAutoCookJobs : [];
  state.cookingAutoCookJobs = state.cookingAutoCookJobs
    .filter((job) => job && COOKING_RECIPES.some((recipe) => recipe.id === job.recipeId))
    .map((job) => ({ recipeId:job.recipeId, readyAt:clampPositive(job.readyAt, 0), score:Math.max(1, clampInteger(job.score, 1, MAX_GAME_NUMBER)) }));
  syncCookingRecipeUnlocks();
  cleanupCookingBuffs();
  state.trialRewards = state.trialRewards && typeof state.trialRewards === "object" ? state.trialRewards : {};
  state.trialRewards.equipment = state.trialRewards.equipment === true;
  state.trialRewards.overload = state.trialRewards.overload === true;
  state.activeTrialId = TRIAL_CONFIG[state.activeTrialId] ? state.activeTrialId : null;
  state.trialSnapshot = state.activeTrialId && state.trialSnapshot && typeof state.trialSnapshot === "object" ? state.trialSnapshot : null;
  if (state.activeTrialId && !state.trialSnapshot) state.activeTrialId = null;
  state.upgradeBuyMode = UPGRADE_BUY_MODES.includes(String(state.upgradeBuyMode)) ? String(state.upgradeBuyMode) : "1";
  state.totalClicks = clampInteger(state.totalClicks, 0, MAX_GAME_NUMBER);
  state.totalPointsEarned = clampPositive(state.totalPointsEarned, 0);
  state.totalPrestigePointsEarned = clampPositive(state.totalPrestigePointsEarned, 0);
  state.totalBasicUpgradePurchases = clampInteger(state.totalBasicUpgradePurchases, 0, MAX_GAME_NUMBER);
  state.bonusStreak = clampInteger(state.bonusStreak, 0, MAX_LEVEL);
  state.enhancedBonusStreak = clampInteger(state.enhancedBonusStreak, 0, MAX_LEVEL);
  BASIC_KEYS.forEach((k) => {
    state.basicLevels[k] = clampInteger(state.basicLevels?.[k], 0, MAX_LEVEL);
    state.basicCosts[k] = Math.max(1, clampNumber(state.basicCosts?.[k], getInitialBasicCost(k)));
    state.basicPurchaseCounts[k] = clampInteger(state.basicPurchaseCounts?.[k], 0, MAX_GAME_NUMBER);
    const s = state.autoBasicSettings?.[k] || {};
    state.autoBasicSettings[k] = { enabled:s.enabled === true, targetLevel:clampInteger(s.targetLevel, 0, MAX_LEVEL) };
  });
  PRESTIGE_TYPES.forEach((k) => {
    state.prestigePurchaseCounts[k] = clampInteger(state.prestigePurchaseCounts?.[k], 0, MAX_GAME_NUMBER);
  });
  syncDerivedPrestigeUpgradeState();
  migrateBasicCostsToCurrentGrowth();
}

function safeCloneForSave(obj) {
  return JSON.parse(JSON.stringify(obj, (key, value) => {
    if (typeof value === "number") return clampNumber(value, 0, MAX_GAME_NUMBER);
    return value;
  }));
}

function getInitialBasicCost(key) { return Math.max(1, Math.floor(safeMultiply(BASIC_CONFIG[key].baseCost, state.basicCostMultiplier))); }
function getBasicCostForLevel(key, level) {
  const normalizedLevel = clampInteger(level, 0, MAX_LEVEL);
  const initial = getInitialBasicCost(key);
  if (normalizedLevel <= 0) return initial;
  const growth = Math.max(BASIC_CONFIG[key].growth, 1.01);
  if (normalizedLevel > 500) return MAX_GAME_NUMBER;
  const expected = Math.floor(initial * Math.pow(growth, normalizedLevel));
  return Math.max(1, Math.min(MAX_GAME_NUMBER, Number.isFinite(expected) ? expected : MAX_GAME_NUMBER));
}
function getCurrentBasicCost(key) {
  return getBasicCostForLevel(key, state.basicLevels?.[key] || 0);
}
function getNextBasicCost(key) {
  return getBasicCostForLevel(key, (state.basicLevels?.[key] || 0) + 1);
}
function getRequestedUpgradeBuyAmount(mode = state.upgradeBuyMode) {
  if (mode === "max") return MAX_BULK_PURCHASES;
  return Math.max(1, Math.min(MAX_BULK_PURCHASES, Math.floor(num(mode, 1))));
}
function formatBulkCount(plan, mode = state.upgradeBuyMode) {
  const requested = getRequestedUpgradeBuyAmount(mode);
  if (mode === "max") return plan.count > 0 ? `最大${fmt(plan.count)}回` : "最大";
  if (plan.count > 0 && plan.count < requested) return `${fmt(requested)}回中${fmt(plan.count)}回`;
  return `${fmt(requested)}回`;
}
function formatBulkPurchaseText(plan, currency, fallbackCost, mode = state.upgradeBuyMode) {
  const cost = plan.count > 0 ? plan.totalCost : fallbackCost;
  return `${formatBulkCount(plan, mode)} / ${currency} ${fmt(cost)}`;
}
function getBonusChanceForLevel(level) { return Math.min(MAX_BONUS_CHANCE, BONUS_CHANCE_BASE + level * BONUS_CHANCE_PER_LEVEL); }
function getEnhancedBonusChanceForLevel(level) { return Math.min(MAX_BONUS_CHANCE, ENHANCED_BONUS_CHANCE_BASE + level * ENHANCED_BONUS_CHANCE_PER_LEVEL); }
function getAutoIntervalForLevel(level) { return Math.max(MIN_AUTO_INTERVAL, Math.round(1000 * AUTO_INTERVAL_REDUCTION ** level)); }
function canBuyBasicAtLevel(key, level, options={}) {
  if (isBasicManualUpgradeBlocked() && options.source !== "auto") return false;
  if ((key === "enhancedBonusChance" || key === "enhancedBonusMultiplier") && !state.enhancedBonusUnlocked) return false;
  if (key === "bonusChance" && getBonusChanceForLevel(level) >= MAX_BONUS_CHANCE) return false;
  if (key === "enhancedBonusChance" && getEnhancedBonusChanceForLevel(level) >= MAX_BONUS_CHANCE) return false;
  if (key === "autoInterval" && getAutoIntervalForLevel(level) <= MIN_AUTO_INTERVAL) return false;
  return level < MAX_LEVEL;
}
function getBasicBulkPlan(key, options={}) {
  const mode = options.mode || (options.source === "auto" ? "1" : state.upgradeBuyMode);
  const requested = getRequestedUpgradeBuyAmount(mode);
  let available = clampPositive(state.points, 0);
  let level = clampInteger(state.basicLevels?.[key], 0, MAX_LEVEL);
  let totalCost = 0;
  let count = 0;
  while (count < requested && canBuyBasicAtLevel(key, level, options)) {
    const cost = getBasicCostForLevel(key, level);
    if (available < cost) break;
    available = clampPositive(available - cost, 0);
    totalCost = safeAdd(totalCost, cost);
    level += 1;
    count += 1;
  }
  return { count, totalCost };
}
function getPrestigeBasicMultiplierForLevel(level) {
  return Math.max(1, safeAdd(1, safeMultiply(clampInteger(level, 0, MAX_GAME_NUMBER), PRESTIGE_BASIC_MULTIPLIER_INCREMENT)));
}
function inferPrestigeBasicMultiplierLevel() {
  return clampInteger(Math.round((Math.max(1, state.prestigeBasicMultiplier || 1) - 1) / PRESTIGE_BASIC_MULTIPLIER_INCREMENT), 0, MAX_GAME_NUMBER);
}
function syncDerivedPrestigeUpgradeState() {
  const initialLevelFromBonus = clampInteger(Math.ceil(clampPositive(state.basicInitialLevelBonus, 0) / BASIC_INITIAL_INCREMENT), 0, MAX_GAME_NUMBER);
  const syncedInitialLevel = Math.min(BASIC_INITIAL_MAX / BASIC_INITIAL_INCREMENT, Math.max(state.prestigePurchaseCounts.initialLevel || 0, initialLevelFromBonus));
  state.prestigePurchaseCounts.initialLevel = syncedInitialLevel;
  state.basicInitialLevelBonus = Math.min(BASIC_INITIAL_MAX, syncedInitialLevel * BASIC_INITIAL_INCREMENT);

  const multiplierLevel = Math.max(state.prestigePurchaseCounts.prestigeBasicMultiplier || 0, inferPrestigeBasicMultiplierLevel());
  state.prestigePurchaseCounts.prestigeBasicMultiplier = multiplierLevel;
  state.prestigeBasicMultiplier = getPrestigeBasicMultiplierForLevel(multiplierLevel);
}
function getTotalBasicInitialLevelBonus() {
  return Math.min(BASIC_INITIAL_MAX + BB_BASIC_INITIAL_MAX, safeAdd(state.basicInitialLevelBonus, state.bbInitialLevelBonus));
}
function migrateBasicCostsToCurrentGrowth() {
  // コストは保存済みの currentCost ではなく、現在レベルから毎回再計算する。
  // これにより、伸び幅変更・古いセーブ・リセット後の初期レベル補正が必ず反映される。
  BASIC_KEYS.forEach((k) => {
    state.basicLevels[k] = clampInteger(state.basicLevels?.[k], 0, MAX_LEVEL);
    state.basicPurchaseCounts[k] = clampInteger(state.basicPurchaseCounts?.[k], 0, MAX_GAME_NUMBER);
    state.basicCosts[k] = getCurrentBasicCost(k);
  });
}
function resetBasicUpgrades() {
  const initialLevel = getTotalBasicInitialLevelBonus();
  BASIC_KEYS.forEach((k) => {
    state.basicLevels[k] = initialLevel;
    state.basicPurchaseCounts[k] = initialLevel;
    state.basicCosts[k] = getCurrentBasicCost(k);
  });
}
function resetSkins() { state.unlockedSkins = ["default"]; state.equippedSkin = "default"; }
function resetCookingState() {
  Object.assign(state, createInitialCookingState());
  removeCookingKey();
  stopCookingTimers();
}
function resetPrestigeLayer() {
  state.points = 0; state.prestigePoints = 0; state.prestigeResetCount = 0; state.prestigeBasicMultiplier = 1;
  state.enhancedAutoUnlocked = false; state.enhancedBonusUnlocked = false;
  state.basicInitialLevelBonus = 0; state.basicCostMultiplier = 1;
  state.premiumAutoMultiplier = 1; state.premiumAutoLevel = 0;
  state.manualFinalMultiplier = 1; state.manualFinalLevel = 0;
  state.autoPrestigeUnlocked = false; state.autoPrestigeEnabled = false; state.autoPrestigeTarget = 1;
  state.autoBasicUnlocked = false; state.autoBasicEnabled = false; state.autoSkinEnabled = false; state.autoSkinTargetId = "default";
  state.prestigePointGainLevel = 0;
  state.autoBasicSettings = createInitialState().autoBasicSettings;
  state.prestigePurchaseCounts = createInitialState().prestigePurchaseCounts;
  resetBasicUpgrades();
  resetSkins();
  resetCookingState();
}
function resetAll() { stopCookingTimers(); removeCookingKey(); assignState(createInitialState()); resetBasicUpgrades(); clearPopups(); pendingOfflineReward = null; if (els.offlineRewardModal) els.offlineRewardModal.classList.add("hidden"); hidePrestigeTopDisplay(); restartLoops(); updateScreen(); }

function isTrialActive(id = null) { return id ? state.activeTrialId === id : Boolean(state.activeTrialId); }
function isTrialRewardUnlocked(id) { return state.trialRewards?.[id] === true; }
function isEquipmentTrialRewardUnlocked() { return isTrialRewardUnlocked("equipment"); }
function isBulkResetRewardUnlocked() { return isTrialRewardUnlocked("overload"); }
function isBasicManualUpgradeBlocked() { return isTrialActive("equipment"); }
function isOverloadTrialActive() { return isTrialActive("overload"); }
function createTrialSnapshot() {
  return safeCloneForSave({
    points:state.points,
    basicLevels:state.basicLevels,
    basicCosts:state.basicCosts,
    basicPurchaseCounts:state.basicPurchaseCounts,
    unlockedSkins:state.unlockedSkins,
    equippedSkin:state.equippedSkin,
  });
}
function restoreTrialSnapshot() {
  const snapshot = state.trialSnapshot;
  if (!snapshot) return;
  state.points = clampPositive(snapshot.points, 0);
  BASIC_KEYS.forEach((k) => {
    state.basicLevels[k] = clampInteger(snapshot.basicLevels?.[k], 0, MAX_LEVEL);
    state.basicCosts[k] = Math.max(1, clampNumber(snapshot.basicCosts?.[k], getCurrentBasicCost(k)));
    state.basicPurchaseCounts[k] = clampInteger(snapshot.basicPurchaseCounts?.[k], 0, MAX_GAME_NUMBER);
  });
  const validSkinIds = SKIN_CONFIG.map((skin) => skin.id);
  const skins = Array.isArray(snapshot.unlockedSkins) ? snapshot.unlockedSkins.filter((id) => validSkinIds.includes(id)) : ["default"];
  state.unlockedSkins = Array.from(new Set(["default", ...skins]));
  state.equippedSkin = state.unlockedSkins.includes(snapshot.equippedSkin) ? snapshot.equippedSkin : "default";
  migrateBasicCostsToCurrentGrowth();
}
function startTrial(id) {
  const trial = TRIAL_CONFIG[id];
  if (!trial || isTrialActive() || isTrialRewardUnlocked(id)) return;
  selectedTrialId = id;
  state.activeTrialId = id;
  state.trialSnapshot = createTrialSnapshot();
  state.points = 0;
  resetBasicUpgrades();
  clearPopups();
  restartLoops();
  updateScreen();
  saveGame(true);
  checkTrialCompletion();
}
function finishTrial(completed) {
  const id = state.activeTrialId;
  if (!id) return false;
  restoreTrialSnapshot();
  if (completed && TRIAL_CONFIG[id]) state.trialRewards[id] = true;
  state.activeTrialId = null;
  state.trialSnapshot = null;
  clearPopups();
  hidePrestigeTopDisplay();
  restartLoops();
  updateScreen();
  saveGame(true);
  return true;
}
function abortTrial() { finishTrial(false); }
function checkTrialCompletion() {
  if (!state.activeTrialId) return false;
  const trial = TRIAL_CONFIG[state.activeTrialId];
  if (!trial) return false;
  if (trial.targetPrestigePoints && state.prestigePoints < trial.targetPrestigePoints) return false;
  if (trial.targetPoints && state.points < trial.targetPoints) return false;
  return finishTrial(true);
}
function captureBigBangPreservedPrestigeState() {
  if (!isEquipmentTrialRewardUnlocked()) return null;
  const counts = {};
  TRIAL_PRESERVED_UNLOCK_TYPES.forEach((type) => { counts[type] = state.prestigePurchaseCounts?.[type] || 0; });
  return {
    enhancedAutoUnlocked:state.enhancedAutoUnlocked,
    enhancedBonusUnlocked:state.enhancedBonusUnlocked,
    autoPrestigeUnlocked:state.autoPrestigeUnlocked,
    autoPrestigeEnabled:state.autoPrestigeEnabled,
    autoPrestigeTarget:state.autoPrestigeTarget,
    autoBasicUnlocked:state.autoBasicUnlocked,
    autoBasicEnabled:state.autoBasicEnabled,
    autoBasicSettings:safeCloneForSave(state.autoBasicSettings),
    autoSkinEnabled:state.autoSkinEnabled,
    autoSkinTargetId:state.autoSkinTargetId,
    prestigePurchaseCounts:counts,
  };
}
function restoreBigBangPreservedPrestigeState(saved) {
  if (!saved) return;
  state.enhancedAutoUnlocked = saved.enhancedAutoUnlocked === true;
  state.enhancedBonusUnlocked = saved.enhancedBonusUnlocked === true;
  state.autoPrestigeUnlocked = saved.autoPrestigeUnlocked === true;
  state.autoPrestigeEnabled = saved.autoPrestigeEnabled === true && state.autoPrestigeUnlocked;
  state.autoPrestigeTarget = Math.max(1, Math.floor(num(saved.autoPrestigeTarget, 1)));
  state.autoBasicUnlocked = saved.autoBasicUnlocked === true;
  state.autoBasicEnabled = saved.autoBasicEnabled === true && state.autoBasicUnlocked;
  if (saved.autoBasicSettings && typeof saved.autoBasicSettings === "object") {
    BASIC_KEYS.forEach((k) => {
      const s = saved.autoBasicSettings[k] || {};
      state.autoBasicSettings[k] = { enabled:s.enabled === true, targetLevel:clampInteger(s.targetLevel, 0, MAX_LEVEL) };
    });
  }
  state.autoSkinEnabled = saved.autoSkinEnabled === true && state.autoBasicUnlocked;
  state.autoSkinTargetId = SKIN_CONFIG.some((skin) => skin.id === saved.autoSkinTargetId) ? saved.autoSkinTargetId : "default";
  TRIAL_PRESERVED_UNLOCK_TYPES.forEach((type) => {
    if (prestigeLevel(type) > 0) state.prestigePurchaseCounts[type] = Math.max(1, clampInteger(saved.prestigePurchaseCounts?.[type], 1, MAX_LEVEL));
  });
}

function getClickPower() { return 1 + state.basicLevels.clickPower; }
function getClickCount() { return 1 + state.basicLevels.clickCount; }
function getAutoClickBase() { return state.basicLevels.autoClick; }
function getAutoMultiplier() { return 1 + state.basicLevels.autoMultiplier; }
function getAutoInterval() { return getAutoIntervalForLevel(state.basicLevels.autoInterval); }
function getBonusChance() { return getBonusChanceForLevel(state.basicLevels.bonusChance); }
function getBonusMultiplier() { return BONUS_MULT_BASE + state.basicLevels.bonusMultiplier * BONUS_MULT_PER_LEVEL; }
function getEnhancedBonusChance() { return getEnhancedBonusChanceForLevel(state.basicLevels.enhancedBonusChance); }
function getEnhancedBonusMultiplier() { return ENHANCED_BONUS_MULT_BASE + state.basicLevels.enhancedBonusMultiplier * ENHANCED_BONUS_MULT_PER_LEVEL; }
function getBbNormalMultiplier() { return 1 + state.bbNormalMultiplierLevel * 100; }
function getBbPrestigeMultiplier() { return 1 + state.bbPrestigeMultiplierLevel * 10; }
function getSkinConfig(id = state.equippedSkin) { return SKIN_CONFIG.find((skin) => skin.id === id) || SKIN_CONFIG[0]; }
function getSkinMultiplier() { return getSkinConfig().multiplier; }
function getAchievementMultiplier() { return 1 + ACHIEVEMENTS.reduce((sum, a) => sum + (state.achievements?.[a.id] ? a.reward : 0), 0); }
function getAchievementBonusMultiplierPart() { return Math.max(0, getAchievementMultiplier() - 1); }
function getCombinedPrestigeAchievementBasicMultiplier() { return safeAdd(state.prestigeBasicMultiplier, getAchievementBonusMultiplierPart()); }
function applyTrialFinalMultiplierPenalty(multiplier) {
  const safe = Math.max(0, clampNumber(multiplier, 1));
  return isOverloadTrialActive() ? Math.max(0.1, safe - 0.9) : safe;
}
function getNormalPointMultiplier() { return applyTrialFinalMultiplierPenalty(safeMultiply(getCombinedPrestigeAchievementBasicMultiplier(), state.bbAllMultiplier, getBbNormalMultiplier(), getSkinMultiplier(), getCookingBuffMultiplier("normal"))); }
function getPrestigePointMultiplier() { return applyTrialFinalMultiplierPenalty(safeMultiply(state.bbAllMultiplier, getBbPrestigeMultiplier(), getCookingBuffMultiplier("prestige"))); }
function getPrestigeGainPerReset() { return Math.max(1, Math.floor(safeMultiply(1 + state.prestigePointGainLevel, getPrestigePointMultiplier()))); }
function getBigBangGainPerReset() { return 1 + state.bbPointGainLevel; }
function getBigBangUpgradeLevel(type) {
  if (type === "normal") return state.bbNormalMultiplierLevel;
  if (type === "prestige") return state.bbPrestigeMultiplierLevel;
  if (type === "gain") return state.bbPointGainLevel;
  if (type === "cookingRobotMk2") return state.bbCookingRobotMk2Unlocked ? 1 : 0;
  if (type === "initialLevel") return state.bbInitialLevelBonus;
  return 0;
}
function getBigBangUpgradeMaxLevel(type) {
  return clampInteger(BIG_BANG_UPGRADE_CONFIG[type]?.maxLevel ?? MAX_LEVEL, MAX_LEVEL, MAX_LEVEL);
}
function getBigBangUpgradeCostFor(type, level = getBigBangUpgradeLevel(type)) {
  const config = BIG_BANG_UPGRADE_CONFIG[type];
  if (!config) return MAX_GAME_NUMBER;
  const normalizedLevel = clampInteger(level, 0, MAX_LEVEL);
  if (normalizedLevel >= getBigBangUpgradeMaxLevel(type)) return MAX_GAME_NUMBER;
  const growth = Math.max(1, clampNumber(config.growth, 1));
  const expected = Math.ceil(safeMultiply(config.baseCost || 1, Math.pow(growth, normalizedLevel)));
  const stepCost = Math.floor(normalizedLevel / 4);
  return Math.max(1, Math.min(MAX_GAME_NUMBER, safeAdd(expected, stepCost)));
}
function getBigBangUpgradeCost(type) {
  return getBigBangUpgradeCostFor(type, getBigBangUpgradeLevel(type));
}
function getExecutablePrestigeResetCount() {
  const possible = Math.min(MAX_RESET_BULK_COUNT, Math.floor(clampPositive(state.points, 0) / PRESTIGE_COST));
  return isBulkResetRewardUnlocked() ? possible : Math.min(1, possible);
}
function getExecutableBigBangResetCount() {
  const possible = Math.min(MAX_RESET_BULK_COUNT, Math.floor(clampPositive(state.prestigePoints, 0) / BIG_BANG_COST));
  return isBulkResetRewardUnlocked() ? possible : Math.min(1, possible);
}
function getEffectiveAutoClickPower() { return safeMultiply(getAutoClickBase(), getAutoMultiplier(), state.premiumAutoMultiplier, getNormalPointMultiplier(), getCookingBuffMultiplier("auto")); }
function getNextPremiumAutoMultiplier() { return state.premiumAutoLevel === 0 ? 10 : state.premiumAutoMultiplier + 10; }
function getNextManualFinalMultiplier() { return state.manualFinalLevel === 0 ? 1.5 : state.manualFinalMultiplier + 0.5; }
function getPrestigeCostMultiplier(purchases) {
  // Lv.15程度まではこれまで通りの加算式。
  // Lv.15以降は乗数も追加し、後半ほど高級アップグレードのコストが重くなる。
  if (purchases < 15) return 1;
  return Math.min(1e12, Math.pow(1.18, purchases - 14));
}

function applyPrestigeCostMultiplier(baseCost, purchases) {
  return Math.max(1, Math.floor(safeMultiply(baseCost, getPrestigeCostMultiplier(purchases))));
}

function getPrestigeCostFor(type, purchases, prestigePointGainLevel = state.prestigePointGainLevel) {
  const normalizedPurchases = Math.max(0, Math.floor(purchases || 0));

  // 高級アップグレードは種類ごとに個別でコスト上昇。
  // Lv.15以降からは加算に加えて乗数補正もかかる。
  const individualGrowth =
    Math.floor(normalizedPurchases / 2) +
    Math.floor(normalizedPurchases / 4) +
    Math.floor(normalizedPurchases / 6) +
    Math.floor(normalizedPurchases / 10);

  if (type === "prestigePointGain") {
    // 高級ポイント獲得量はリセット効率を大きく伸ばすため、序盤から重く、レベルに応じて強く伸びる。
    const level = Math.max(0, Math.floor(prestigePointGainLevel || 0));
    const gainPerReset = Math.max(1, Math.floor(safeMultiply(1 + level, getPrestigePointMultiplier())));
    const levelFactor = safeAdd(20, safeAdd(safeMultiply(level, 12), safeMultiply(level, level, 4)));
    const base = Math.max(PRESTIGE_BASE_COST.prestigePointGain, Math.floor(safeMultiply(gainPerReset, levelFactor)));
    const extra = safeMultiply(
      Math.floor(normalizedPurchases / 2) + Math.floor(normalizedPurchases / 5) + Math.floor(normalizedPurchases / 10),
      5
    );
    return applyPrestigeCostMultiplier(safeAdd(base, extra), normalizedPurchases);
  }

  return applyPrestigeCostMultiplier(safeAdd(PRESTIGE_BASE_COST[type] || 1, individualGrowth), normalizedPurchases);
}
function getPrestigeCost(type) {
  const purchases = Math.max(0, Math.floor(state.prestigePurchaseCounts?.[type] || 0));
  return getPrestigeCostFor(type, purchases);
}
function isPrestigeOneTimeType(type) {
  return type === "enhancedAuto" || type === "enhancedBonus" || type === "autoPrestige" || type === "cookingUnlock" || type === "autoBasicUpgrade";
}
function isPrestigeOneTimeOwned(type) {
  return (type === "enhancedAuto" && state.enhancedAutoUnlocked) ||
    (type === "enhancedBonus" && state.enhancedBonusUnlocked) ||
    (type === "autoPrestige" && state.autoPrestigeUnlocked) ||
    (type === "cookingUnlock" && state.cookingUnlocked) ||
    (type === "autoBasicUpgrade" && state.autoBasicUnlocked);
}
function getPrestigePurchaseLimit(type, mode = state.upgradeBuyMode) {
  if (isPrestigeOneTimeType(type)) return isPrestigeOneTimeOwned(type) ? 0 : 1;
  const requested = getRequestedUpgradeBuyAmount(mode);
  if (type === "initialLevel") {
    const remaining = Math.max(0, Math.floor((BASIC_INITIAL_MAX - state.basicInitialLevelBonus) / BASIC_INITIAL_INCREMENT));
    return Math.min(requested, remaining);
  }
  return requested;
}
function getPrestigeBulkPlan(type, mode = state.upgradeBuyMode) {
  const limit = getPrestigePurchaseLimit(type, mode);
  let available = clampPositive(state.prestigePoints, 0);
  let purchases = clampInteger(state.prestigePurchaseCounts?.[type], 0, MAX_GAME_NUMBER);
  let prestigePointGainLevel = clampInteger(state.prestigePointGainLevel, 0, MAX_LEVEL);
  let totalCost = 0;
  let count = 0;
  while (count < limit) {
    const cost = getPrestigeCostFor(type, purchases, prestigePointGainLevel);
    if (available < cost) break;
    available = clampPositive(available - cost, 0);
    totalCost = safeAdd(totalCost, cost);
    purchases += 1;
    if (type === "prestigePointGain") prestigePointGainLevel += 1;
    count += 1;
  }
  return { count, totalCost };
}
function getBbPointGainCost() { return getBigBangUpgradeCost("gain"); }

function getPotatoStorageKeys() {
  const keys = [];
  try {
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key && key.startsWith(SAVE_KEY_PREFIX)) keys.push(key);
    }
  } catch (e) {
    console.error(e);
  }
  return keys;
}

function purgePotatoStorage() {
  try {
    const keys = [];
    for (let i = localStorage.length - 1; i >= 0; i -= 1) {
      const key = localStorage.key(i);
      if (!key) continue;
      if (key.startsWith(SAVE_KEY_PREFIX) || key.includes("potatoClicker") || key.includes("PotatoClicker")) {
        keys.push(key);
      }
    }
    keys.forEach((key) => localStorage.removeItem(key));
  } catch (e) {
    console.error(e);
  }
  OLD_SAVE_KEYS.forEach((key) => {
    localStorage.removeItem(key);
    localStorage.removeItem(`${key}_status`);
  });
  localStorage.removeItem(SAVE_KEY);
  localStorage.removeItem(`${SAVE_KEY}_status`);
  localStorage.removeItem(OFFLINE_CLAIMED_UNTIL_KEY);
  localStorage.removeItem(OFFLINE_LEFT_AT_KEY);
}

function createSaveData(options = {}) {
  sanitizeState();
  const savedAt = options.savedAt || new Date().toISOString();
  state.lastSavedAt = savedAt;
  return safeCloneForSave({ version:9, savedAt, ...state });
}
function saveGame(show=false, options = {}) {
  if (saveDisabled) return;
  try {
    sanitizeState();
    localStorage.setItem(SAVE_KEY, JSON.stringify(createSaveData(options)));
    localStorage.removeItem(RESET_MARKER_KEY);
    const text = `保存済み ${new Date().toLocaleTimeString("ja-JP", {hour:"2-digit", minute:"2-digit"})}`;
    localStorage.setItem(`${SAVE_KEY}_status`, text);
    if (show) setSaveStatus("保存しました"); else if (els.saveStatusText) els.saveStatusText.textContent = text;
  } catch (e) { setSaveStatus("保存失敗"); console.error(e); }
}
function setSaveStatus(text) {
  if (!els.saveStatusText) return;
  els.saveStatusText.textContent = text;
  clearTimeout(saveStatusTimer);
  saveStatusTimer = setTimeout(() => { els.saveStatusText.textContent = localStorage.getItem(`${SAVE_KEY}_status`) || "自動保存ON"; }, 1800);
}
function loadGame() {
  const hardResetMarker = localStorage.getItem(RESET_MARKER_KEY) || localStorage.getItem(FORCE_CLEAN_START_KEY) || sessionStorage.getItem(FORCE_CLEAN_START_KEY);
  if (hardResetMarker) {
    // 完全初期化後の再起動時。古い/壊れたセーブは絶対に読まず、
    // まっさらな state を作ってから現在時刻で保存し直す。
    saveDisabled = true;
    purgePotatoStorage();
    try { sessionStorage.removeItem(FORCE_CLEAN_START_KEY); } catch (e) { console.error(e); }
    assignState(createInitialState());
    resetBasicUpgrades();
    resetSkins();
    clearPopups();
    pendingOfflineReward = null;
    offlineRewardClaimedThisSession = true;
    if (els.offlineRewardModal) els.offlineRewardModal.classList.add("hidden");
    hidePrestigeTopDisplay();
    saveDisabled = false;
    saveGame(false, { savedAt:new Date().toISOString() });
    setSaveStatus("初期化済み");
    return;
  }
  const raw = localStorage.getItem(SAVE_KEY) || OLD_SAVE_KEYS.map((k) => localStorage.getItem(k)).find(Boolean);
  if (!raw) { resetBasicUpgrades(); setSaveStatus("新規データ"); return; }
  try {
    const data = JSON.parse(raw);
    if (data.version === 1) {
      data.prestigeBasicMultiplier = num(data.globalPointMultiplier, 1);
      data.bbAllMultiplier = 1 + num(data.bigBangGlobalPointBonus, 0);
      data.prestigeResetCount = num(data.prestigeCount, 0);
      data.enhancedAutoUnlocked = data.enhancedAutoClickUnlocked;
      data.enhancedBonusUnlocked = data.enhancedBonusUnlocked;
      data.premiumAutoLevel = num(data.premiumAutoMultiplierUpgradeCount, 0);
      data.manualFinalLevel = num(data.manualFinalMultiplierUpgradeCount, 0);
      data.autoBasicUnlocked = data.autoBasicUpgradeUnlocked;
      data.autoBasicEnabled = data.autoBasicUpgradeEnabled;
      data.bbNormalMultiplierLevel = num(data.bigBangNormalMultiplierUpgradeCount, 0);
      data.bbPrestigeMultiplierLevel = num(data.bigBangPrestigeMultiplierUpgradeCount, 0);
      data.bbPointGainLevel = num(data.bigBangPointGainUpgradeCount, 0);
      data.basicLevels = data.upgradeLevels;
      data.basicCosts = data.upgradeCosts;
      data.prestigePurchaseCounts = data.prestigeUpgradePurchaseCounts;
    }
    const previousSavedAt = data.savedAt || data.lastSavedAt || null;
    assignState(data);
    migrateBasicCostsToCurrentGrowth();
    prepareOfflineReward(previousSavedAt);
    setSaveStatus("ロード済み");
  } catch (e) { resetBasicUpgrades(); setSaveStatus("ロード失敗"); console.error(e); }
}
function deleteSaveData() {
  if (!confirm("本当にセーブデータを初期化しますか？\n現在のゲームデータもすべて初期化されます。")) { setSaveStatus("初期化キャンセル"); return; }
  if (!confirm("最終確認です。初期化すると元に戻せません。\n本当にすべて初期化しますか？")) { setSaveStatus("初期化キャンセル"); return; }

  // 重要: 壊れた state がメモリ上に残ったまま自動セーブされるのを防ぐため、
  // この場で初期セーブを作らず、全削除マーカーを残して強制リロードする。
  saveDisabled = true;

  clearTimeout(autoClickTimer); autoClickTimer = null;
  clearInterval(enhancedAutoTimer); enhancedAutoTimer = null;
  clearInterval(autoBasicTimer); autoBasicTimer = null;
  clearTimeout(cookingCountdownTimer); cookingCountdownTimer = null;
  clearInterval(cookingTimer); cookingTimer = null;
  clearTimeout(prestigeTopTimer); prestigeTopTimer = null;
  clearTimeout(saveStatusTimer); saveStatusTimer = null;

  purgePotatoStorage();
  try { sessionStorage.clear(); } catch (e) { console.error(e); }

  const marker = String(Date.now());
  try {
    localStorage.setItem(RESET_MARKER_KEY, marker);
    localStorage.setItem(FORCE_CLEAN_START_KEY, marker);
    sessionStorage.setItem(FORCE_CLEAN_START_KEY, marker);
  } catch (e) {
    console.error(e);
  }

  setSaveStatus("初期化して再読み込みします");
  window.setTimeout(() => window.location.reload(), 80);
}


function updateScreen() {
  // 表示前に必ずコストを現在レベルから再計算する。
  // 初回表示時だけ HTML 側の固定値や古い保存済み cost が見える問題を防ぐ。
  migrateBasicCostsToCurrentGrowth();
  updateTopScore(); updateBuyModeDisplay(); updateBasicDisplay(); updatePrestigeDisplay(); updateAutoBasicDisplay(); updateBigBangDisplay(); updateSkinDisplay(); updateCookingDisplay(); updateAchievementDisplay(); updateStats(); updateTrialDisplay();
}
function updateBuyModeDisplay() {
  Object.entries(UPGRADE_BUY_MODE_BUTTONS).forEach(([mode, id]) => {
    const button = els[id];
    if (!button) return;
    button.classList.toggle("on", state.upgradeBuyMode === mode);
  });
}
function setUpgradeBuyMode(mode) {
  if (!UPGRADE_BUY_MODES.includes(mode)) return;
  state.upgradeBuyMode = mode;
  updateScreen();
  saveGame(true);
}
function updateTopScore() {
  const showPrestige = prestigeTopActive && state.prestigePoints > PRESTIGE_TOP_DISPLAY_THRESHOLD;
  els.scoreArea.classList.toggle("prestige-main", showPrestige);
  if (showPrestige) {
    els.mainScoreLabel.textContent = "高級ポイント"; els.pointText.textContent = fmt(state.prestigePoints);
    els.secondaryScoreLabel.textContent = "ポイント"; els.secondaryScoreText.textContent = fmt(state.points); els.secondaryScoreArea.classList.remove("hidden");
  } else {
    els.mainScoreLabel.textContent = "ポイント"; els.pointText.textContent = fmt(state.points); els.secondaryScoreArea.classList.add("hidden");
  }

  const formulaParts = [];
  const combinedBasic = getCombinedPrestigeAchievementBasicMultiplier();
  const bbAll = state.bbAllMultiplier;
  const bbNormal = getBbNormalMultiplier();
  const prestigeGain = 1 + state.prestigePointGainLevel;
  const bbPrestige = getBbPrestigeMultiplier();
  const skin = getSkinMultiplier();
  const cookingNormal = getCookingBuffMultiplier("normal");
  const cookingPrestige = getCookingBuffMultiplier("prestige");
  const changed = (value) => Number.isFinite(value) && Math.abs(value - 1) > 0.000001;

  if (showPrestige) {
    if (changed(prestigeGain)) formulaParts.push(`高級獲得${fmtMult(prestigeGain)}倍`);
    if (changed(bbAll)) formulaParts.push(`BB全体${fmtMult(bbAll)}倍`);
    if (changed(bbPrestige)) formulaParts.push(`BB高級${fmtMult(bbPrestige)}倍`);
    if (changed(cookingPrestige)) formulaParts.push(`料理高級${fmtMult(cookingPrestige)}倍`);
    if (isOverloadTrialActive()) formulaParts.push("試練負荷-0.9");
  } else {
    if (changed(combinedBasic)) formulaParts.push(`高級基本${fmtMult(combinedBasic)}倍`);
    if (changed(bbAll)) formulaParts.push(`BB全体${fmtMult(bbAll)}倍`);
    if (changed(bbNormal)) formulaParts.push(`BB通常${fmtMult(bbNormal)}倍`);
    if (changed(skin)) formulaParts.push(`スキン${fmtMult(skin)}倍`);
    if (changed(cookingNormal)) formulaParts.push(`料理基本${fmtMult(cookingNormal)}倍`);
    if (isOverloadTrialActive()) formulaParts.push("試練負荷-0.9");
  }

  if (formulaParts.length > 0) {
    els.multiplierFormulaText.textContent = `× ${formulaParts.join(" × ")}`;
    els.multiplierFormulaText.classList.remove("hidden");
  } else {
    els.multiplierFormulaText.textContent = "";
    els.multiplierFormulaText.classList.add("hidden");
  }
}
function updateBasicDisplay() {
  const ids = {
    clickPowerText:getClickPower(), clickCountText:getClickCount(), autoClickText:getAutoClickBase(), effectiveAutoClickText:getEffectiveAutoClickPower(), autoClickIntervalText:fmtSec(getAutoInterval()), autoIntervalText:fmtSec(getAutoInterval()), autoMultiplierText:fmtMult(getAutoMultiplier()), bonusChanceText:getBonusChance(), bonusMultiplierText:fmtMult(getBonusMultiplier()), enhancedBonusChanceText:state.enhancedBonusUnlocked ? getEnhancedBonusChance() : "未解放", enhancedBonusMultiplierText:state.enhancedBonusUnlocked ? fmtMult(getEnhancedBonusMultiplier()) : "未解放"
  };
  Object.entries(ids).forEach(([id, value]) => { const e = $(id); if (e) e.textContent = typeof value === "number" ? fmt(value) : value; });
  $("enhancedBonusChanceUnit").classList.toggle("hidden", !state.enhancedBonusUnlocked);
  $("enhancedBonusChanceCard").classList.toggle("locked-card", !state.enhancedBonusUnlocked);
  $("enhancedBonusChanceCard").classList.toggle("unlocked", state.enhancedBonusUnlocked);
  $("enhancedBonusMultiplierCard").classList.toggle("locked-card", !state.enhancedBonusUnlocked);
  $("enhancedBonusMultiplierCard").classList.toggle("unlocked", state.enhancedBonusUnlocked);
  BASIC_KEYS.forEach((k) => {
    // 表示・購入判定・保存で必ず同じコストを使う。
    // 保存済み currentCost を直接表示すると、ポイント変動時の sanitize で表示が変わる原因になる。
    const currentCost = getCurrentBasicCost(k);
    const plan = getBasicBulkPlan(k);
    state.basicCosts[k] = currentCost;
    if (basicEls[k].level) basicEls[k].level.textContent = fmt(state.basicLevels[k]);
    if (basicEls[k].cost) basicEls[k].cost.textContent = fmt(currentCost);
    if (basicEls[k].button) {
      basicEls[k].button.textContent = `購入 ${formatBulkPurchaseText(plan, "ポイント", currentCost)}`;
      basicEls[k].button.disabled = plan.count < 1;
    }
  });
}
function prestigeLevel(type) {
  if (type === "enhancedAuto") return state.enhancedAutoUnlocked ? 1 : 0;
  if (type === "enhancedBonus") return state.enhancedBonusUnlocked ? 1 : 0;
  if (type === "initialLevel") return Math.floor(state.basicInitialLevelBonus / BASIC_INITIAL_INCREMENT);
  if (type === "prestigeBasicMultiplier") return state.prestigePurchaseCounts.prestigeBasicMultiplier || 0;
  if (type === "costReduction") return state.prestigePurchaseCounts.costReduction || 0;
  if (type === "premiumAutoMultiplier") return state.premiumAutoLevel;
  if (type === "manualFinalMultiplier") return state.manualFinalLevel;
  if (type === "autoPrestige") return state.autoPrestigeUnlocked ? 1 : 0;
  if (type === "cookingUnlock") return state.cookingUnlocked ? 1 : 0;
  if (type === "autoBasicUpgrade") return state.autoBasicUnlocked ? 1 : 0;
  if (type === "prestigePointGain") return state.prestigePointGainLevel;
  return 0;
}
function updatePrestigeDisplay() {
  $("prestigeCostText").textContent = fmt(PRESTIGE_COST);
  const resetPossible = getExecutablePrestigeResetCount();
  $("prestigeResetButton").disabled = resetPossible < 1;
  $("prestigeResetButton").textContent = resetPossible >= 1 ? `高級リセット ${fmt(resetPossible)}回 / 高級ポイント +${fmt(resetPossible * getPrestigeGainPerReset())}` : `高級リセットまで ${fmt(PRESTIGE_COST - state.points)} ポイント`;
  const buttonMap = { enhancedAuto:"prestigeEnhancedAutoButton", enhancedBonus:"prestigeEnhancedBonusButton", initialLevel:"prestigeInitialLevelButton", prestigeBasicMultiplier:"prestigeBasicMultiplierButton", costReduction:"prestigeCostReductionButton", premiumAutoMultiplier:"prestigePremiumAutoMultiplierButton", manualFinalMultiplier:"prestigeManualFinalMultiplierButton", autoPrestige:"prestigeAutoResetButton", cookingUnlock:"prestigeCookingUnlockButton", autoBasicUpgrade:"prestigeAutoBasicUpgradeButton", prestigePointGain:"prestigePointGainButton" };
  PRESTIGE_TYPES.forEach((type) => {
    const b = $(buttonMap[type]); const cost = getPrestigeCost(type); const level = prestigeLevel(type); const plan = getPrestigeBulkPlan(type);
    if (isPrestigeOneTimeType(type)) {
      const owned = isPrestigeOneTimeOwned(type);
      b.textContent = owned ? `Lv.1 ${PRESTIGE_LABELS[type]} / 購入済み` : `Lv.0 ${PRESTIGE_LABELS[type]} / 高級ポイント ${fmt(cost)}`;
      b.disabled = owned || state.prestigePoints < cost;
      return;
    }
    if (type === "initialLevel" && state.basicInitialLevelBonus >= BASIC_INITIAL_MAX) {
      b.textContent = `Lv.${fmt(level)} ${PRESTIGE_LABELS[type]} 高級+${fmt(state.basicInitialLevelBonus)}/${BASIC_INITIAL_MAX} BB+${fmt(state.bbInitialLevelBonus)} / 最大`;
      b.disabled = true;
      return;
    }
    let extra = "";
    if (type === "initialLevel") extra = ` 高級+${fmt(state.basicInitialLevelBonus)}/${BASIC_INITIAL_MAX} BB+${fmt(state.bbInitialLevelBonus)}`;
    if (type === "prestigeBasicMultiplier") extra = ` 現在:${fmtMult(state.prestigeBasicMultiplier)}倍`;
    if (type === "premiumAutoMultiplier") extra = ` 次:${fmtMult(getNextPremiumAutoMultiplier())}倍`;
    if (type === "manualFinalMultiplier") extra = ` 次:${fmtMult(getNextManualFinalMultiplier())}倍`;
    if (type === "prestigePointGain") extra = ` 現在:${fmt(getPrestigeGainPerReset())}/回`;
    b.textContent = `Lv.${fmt(level)} ${PRESTIGE_LABELS[type]}${extra} / ${formatBulkPurchaseText(plan, "高級ポイント", cost)}`;
    b.disabled = plan.count < 1;
  });
  $("toggleAutoPrestigeButton").textContent = state.autoPrestigeEnabled ? "ON" : "OFF";
  $("toggleAutoPrestigeButton").classList.toggle("on", state.autoPrestigeEnabled);
  $("toggleAutoPrestigeButton").disabled = !state.autoPrestigeUnlocked;
  els.autoPrestigeTargetInput.disabled = !state.autoPrestigeUnlocked;
  if (document.activeElement !== els.autoPrestigeTargetInput) els.autoPrestigeTargetInput.value = String(state.autoPrestigeTarget);
  els.autoPrestigeSettings.classList.toggle("locked-card", !state.autoPrestigeUnlocked);
  els.autoPrestigeSettings.classList.toggle("unlocked", state.autoPrestigeUnlocked);
}
function updateAutoBasicDisplay() {
  $("autoBasicUpgradeCard").classList.toggle("locked-card", !state.autoBasicUnlocked);
  $("autoBasicUpgradeCard").classList.toggle("unlocked", state.autoBasicUnlocked);
  $("toggleAutoBasicUpgradeButton").disabled = !state.autoBasicUnlocked;
  $("toggleAutoBasicUpgradeButton").textContent = state.autoBasicUnlocked ? (state.autoBasicEnabled ? "基本自動強化: ON" : "基本自動強化: OFF") : "基本自動強化: 未解放";
  $("toggleAutoBasicUpgradeButton").classList.toggle("on", state.autoBasicEnabled);
  BASIC_KEYS.forEach((k) => {
    const c = autoBasicControls[k]; if (!c) return;
    c.input.disabled = !state.autoBasicUnlocked;
    c.button.disabled = !state.autoBasicUnlocked;
    if (document.activeElement !== c.input) c.input.value = String(state.autoBasicSettings[k].targetLevel);
    c.button.textContent = state.autoBasicSettings[k].enabled ? "ON" : "OFF";
    c.button.classList.toggle("on", state.autoBasicSettings[k].enabled);
  });
  if (els.autoSkinSettings) {
    els.autoSkinSettings.classList.toggle("locked-card", !state.autoBasicUnlocked);
    els.autoSkinSettings.classList.toggle("unlocked", state.autoBasicUnlocked);
  }
  if (els.toggleAutoSkinButton) {
    els.toggleAutoSkinButton.disabled = !state.autoBasicUnlocked;
    els.toggleAutoSkinButton.textContent = state.autoSkinEnabled ? "スキン自動購入: ON" : "スキン自動購入: OFF";
    els.toggleAutoSkinButton.classList.toggle("on", state.autoSkinEnabled);
  }
  if (els.autoSkinTargetSelect) {
    els.autoSkinTargetSelect.disabled = !state.autoBasicUnlocked;
    if (document.activeElement !== els.autoSkinTargetSelect) els.autoSkinTargetSelect.value = state.autoSkinTargetId;
  }
}
function updateBigBangDisplay() {
  const visible = state.prestigePoints >= BIG_BANG_VISIBLE_THRESHOLD || state.bigBangCount > 0 || state.bigBangPoints > 0;
  $("bigBangTitle").classList.toggle("hidden-card", !visible); $("bigBangCard").classList.toggle("hidden-card", !visible);
  const possible = getExecutableBigBangResetCount();
  $("bigBangResetButton").disabled = possible < 1;
  $("bigBangResetButton").textContent = possible >= 1 ? `ジャガイモビックバン ${fmt(possible)}回 / BBポイント +${fmt(possible * getBigBangGainPerReset())}` : `ビックバンまで高級ポイント ${fmt(Math.max(0, BIG_BANG_COST - state.prestigePoints))}`;
  const setBbButton = (id, type, extra = "") => {
    const button = $(id);
    if (!button) return;
    const level = getBigBangUpgradeLevel(type);
    const maxLevel = getBigBangUpgradeMaxLevel(type);
    const maxed = level >= maxLevel;
    const cost = getBigBangUpgradeCost(type);
    button.textContent = maxed
      ? `Lv.${fmt(level)} ${BIG_BANG_UPGRADE_CONFIG[type].label}${extra} / 最大`
      : `Lv.${fmt(level)} ${BIG_BANG_UPGRADE_CONFIG[type].label}${extra} / BBポイント ${fmt(cost)}`;
    button.disabled = maxed || state.bigBangPoints < cost;
  };
  setBbButton("bigBangNormalMultiplierButton", "normal", ` 現在:${fmtMult(getBbNormalMultiplier())}倍`);
  setBbButton("bigBangPrestigeMultiplierButton", "prestige", ` 現在:${fmtMult(getBbPrestigeMultiplier())}倍`);
  setBbButton("bigBangPointGainButton", "gain", ` 現在:${fmt(getBigBangGainPerReset())}`);
  setBbButton("bigBangCookingRobotMk2Button", "cookingRobotMk2", isCookingRobotMk2Unlocked() ? " / 品質100%・通常速度" : " / PTT強化");
  setBbButton("bigBangInitialLevelButton", "initialLevel", ` 現在+${fmt(state.bbInitialLevelBonus)}/${BB_BASIC_INITIAL_MAX}`);
}
function getSelectedTrial() {
  if (!TRIAL_CONFIG[selectedTrialId]) selectedTrialId = TRIAL_IDS[0];
  if (state.activeTrialId && TRIAL_CONFIG[state.activeTrialId]) selectedTrialId = state.activeTrialId;
  return TRIAL_CONFIG[selectedTrialId] || TRIAL_CONFIG[TRIAL_IDS[0]];
}
function getTrialProgressValue(trial) {
  if (trial.targetPrestigePoints) return state.prestigePoints;
  if (trial.targetPoints) return state.points;
  return 0;
}
function getTrialProgressTarget(trial) {
  return trial.targetPrestigePoints || trial.targetPoints || 0;
}
function getTrialProgressUnit(trial) {
  return trial.targetPrestigePoints ? "高級ポイント" : "ポイント";
}
function updateTrialDisplay() {
  if (!els.trialScreen) return;
  const trial = getSelectedTrial();
  const active = isTrialActive(trial.id);
  const otherActive = isTrialActive() && !active;
  const completed = isTrialRewardUnlocked(trial.id);
  const currentIndex = TRIAL_IDS.indexOf(trial.id);
  const progressValue = getTrialProgressValue(trial);
  const progressTarget = getTrialProgressTarget(trial);
  const progress = Math.min(1, progressTarget > 0 ? progressValue / progressTarget : 0);
  if (els.trialIndexText) els.trialIndexText.textContent = `${currentIndex + 1} / ${TRIAL_IDS.length}`;
  if (els.trialTitleText) els.trialTitleText.textContent = trial.name;
  if (els.trialRestrictionText) els.trialRestrictionText.textContent = trial.restriction;
  if (els.trialGoalText) els.trialGoalText.textContent = trial.goal;
  if (els.trialRewardText) els.trialRewardText.textContent = trial.reward;
  if (els.trialStatusText) els.trialStatusText.textContent = active ? "挑戦中" : completed ? "報酬有効" : otherActive ? "別の試練中" : "未挑戦";
  if (els.trialProgressText) els.trialProgressText.textContent = `${fmt(progressValue)} / ${fmt(progressTarget)} ${getTrialProgressUnit(trial)}`;
  if (els.trialProgressFill) els.trialProgressFill.style.width = `${Math.max(0, Math.min(100, progress * 100))}%`;
  if (els.startTrialButton) {
    els.startTrialButton.disabled = active || completed || otherActive;
    els.startTrialButton.textContent = completed ? "達成済み" : active ? "挑戦中" : otherActive ? "他の試練中" : "挑戦開始";
  }
  if (els.abortTrialButton) els.abortTrialButton.classList.toggle("hidden", !active);
  if (els.trialPrevButton) els.trialPrevButton.disabled = TRIAL_IDS.length <= 1 || Boolean(state.activeTrialId);
  if (els.trialNextButton) els.trialNextButton.disabled = TRIAL_IDS.length <= 1 || Boolean(state.activeTrialId);
  document.body.classList.toggle("trial-running", active);
  document.body.classList.toggle("trial-completed", completed);
}
function updateStats() {
  els.statsContent.innerHTML = `
    <div class="stat-group"><h3>通貨</h3><div class="stat-grid">
      ${statRow("所持ポイント", fmtFull(state.points))}${statRow("高級ポイント", fmtFull(state.prestigePoints))}${statRow("BBポイント", fmtFull(state.bigBangPoints))}
    </div></div>
    <div class="stat-group"><h3>リセット</h3><div class="stat-grid">
      ${statRow("高級リセット回数", fmt(state.prestigeResetCount))}${statRow("ジャガイモビックバン回数", fmt(state.bigBangCount))}${statRow("リセット時高級ポイント獲得量", fmt(getPrestigeGainPerReset()))}${statRow("BBポイント獲得量", fmt(getBigBangGainPerReset()))}
    </div></div>
    <div class="stat-group"><h3>倍率</h3><div class="stat-grid">
      ${statRow("高級全基本ポイント倍率", `${fmtMult(getCombinedPrestigeAchievementBasicMultiplier())}倍`)}${statRow("内訳: 高級アップグレード分", `${fmtMult(state.prestigeBasicMultiplier)}倍`)}${statRow("内訳: アチーブメント加算分", `+${fmtMult(getAchievementBonusMultiplierPart())}`)}${statRow("BB全基本・高級ポイント倍率", `${fmtMult(state.bbAllMultiplier)}倍`)}${statRow("スキン基本ポイント倍率", `${fmtMult(getSkinMultiplier())}倍`)}${statRow("装備中スキン", getSkinConfig().name)}${statRow("スキン自動購入", state.autoSkinEnabled ? `ON / 目標:${getSkinConfig(state.autoSkinTargetId).name}` : "OFF")}${statRow("通常ポイントBB倍率", `${fmtMult(getBbNormalMultiplier())}倍`)}${statRow("高級ポイントBB倍率", `${fmtMult(getBbPrestigeMultiplier())}倍`)}${statRow("BB基本初期値", `+${fmt(state.bbInitialLevelBonus)}`)}${statRow("BBお料理ロボMk2", state.bbCookingRobotMk2Unlocked ? "解放済み" : "未解放")}${statRow("料理 基本ポイント倍率", `${fmtMult(getCookingBuffMultiplier("normal"))}倍`)}${statRow("料理 通常クリック倍率", `${fmtMult(getCookingBuffMultiplier("manual"))}倍`)}${statRow("料理 オート倍率", `${fmtMult(getCookingBuffMultiplier("auto"))}倍`)}${statRow("料理 高級ポイント倍率", `${fmtMult(getCookingBuffMultiplier("prestige"))}倍`)}${statRow("高級オート倍率", `${fmtMult(state.premiumAutoMultiplier)}倍`)}${statRow("通常クリック最終倍率", `${fmtMult(state.manualFinalMultiplier)}倍`)}
    </div></div>
    <div class="stat-group"><h3>解放状態</h3><div class="stat-grid">
      ${statRow("強化オートクリック", state.enhancedAutoUnlocked ? "解放済み" : "未解放")}${statRow("強化ボーナス", state.enhancedBonusUnlocked ? "解放済み" : "未解放")}${statRow("自動リセット", state.autoPrestigeUnlocked ? (state.autoPrestigeEnabled ? `ON / ${fmt(state.autoPrestigeTarget)}回単位` : "OFF") : "未解放")}${statRow("調理", state.cookingUnlocked ? `Lv.${fmt(state.cookingLevel)} / ${getRecipeConfig().name}` : "未解放")}${statRow("基本自動強化", state.autoBasicUnlocked ? (state.autoBasicEnabled ? "ON" : "OFF") : "未解放")}${statRow("基本初期値", `+${fmt(getTotalBasicInitialLevelBonus())} (高級 +${fmt(state.basicInitialLevelBonus)} / BB +${fmt(state.bbInitialLevelBonus)})`)}${statRow("基本コスト倍率", `${fmtPct(state.basicCostMultiplier)}%`)}
    </div></div>`;
}
function statRow(label, value) { return `<div class="stat-row"><span>${label}</span><span>${value}</span></div>`; }


function isAchievementUnlocked(id) { return state.achievements?.[id] === true; }
function unlockAchievement(id, silent=false) {
  if (isAchievementUnlocked(id)) return false;
  const achievement = ACHIEVEMENTS.find((a) => a.id === id);
  if (!achievement) return false;
  state.achievements[id] = true;
  if (!silent) showAchievementToast(achievement);
  updateAchievementDisplay();
  return true;
}
function showAchievementToast(achievement) {
  if (!els.achievementToastContainer) return;
  const toast = document.createElement("div");
  toast.className = "achievement-toast";
  toast.innerHTML = `<strong>🏆 アチーブメント達成</strong><span>${achievement.name} / 基本ポイント倍率 +${fmtMult(achievement.reward)}</span>`;
  els.achievementToastContainer.append(toast);
  const remove = () => toast.remove();
  toast.addEventListener("animationend", remove, {once:true});
  setTimeout(remove, 4600);
}
function checkAchievements(options={}) {
  const silent = options.silent === true;
  const unlock = (id, condition) => { if (condition) unlockAchievement(id, silent); };
  unlock("firstClick", state.totalClicks >= 1);
  unlock("click100", state.totalClicks >= 100);
  unlock("click10000", state.totalClicks >= 10000);
  unlock("points100", state.totalPointsEarned >= 100);
  unlock("points10000", state.totalPointsEarned >= 10000);
  unlock("points1000000", state.totalPointsEarned >= 1_000_000);
  unlock("points100000000", state.totalPointsEarned >= 100_000_000);
  unlock("firstUpgrade", state.totalBasicUpgradePurchases >= 1);
  unlock("hybrid", BASIC_KEYS.every((k) => (state.basicPurchaseCounts?.[k] || 0) >= 1));
  unlock("upgrade50", state.totalBasicUpgradePurchases >= 50);
  unlock("upgrade100", state.totalBasicUpgradePurchases >= 100);
  unlock("upgrade500", state.totalBasicUpgradePurchases >= 500);
  unlock("skinBuy", state.unlockedSkins.length > 1);
  unlock("bonusStreak5", state.bonusStreak >= 5);
  unlock("enhancedStreak5", state.enhancedBonusStreak >= 5);
  unlock("firstPrestige", state.prestigeResetCount >= 1);
  unlock("automation", state.enhancedAutoUnlocked && state.autoPrestigeUnlocked && state.autoBasicUnlocked);
  unlock("prestigePoint10", state.totalPrestigePointsEarned >= 10 || state.prestigePoints >= 10);
  unlock("prestigePoint100", state.prestigePoints >= 100);
  unlock("firstBigBang", state.bigBangCount >= 1);
}
function updateAchievementDisplay() {
  if (!els.achievementList) return;
  const achieved = ACHIEVEMENTS.filter((a) => isAchievementUnlocked(a.id)).length;
  if (els.achievementSummaryText) els.achievementSummaryText.textContent = `達成数: ${achieved} / ${ACHIEVEMENTS.length}  高級全基本ポイント倍率への加算: +${fmtMult(getAchievementBonusMultiplierPart())}`;
  els.achievementList.innerHTML = ACHIEVEMENTS.map((a) => {
    const done = isAchievementUnlocked(a.id);
    return `<section class="achievement-card ${done ? "" : "locked-achievement"}"><h3>${a.name}</h3><p>${a.condition}</p><p class="achievement-reward">報酬: 基本ポイント倍率 +${fmtMult(a.reward)}</p><span class="achievement-status">${done ? "達成済み" : "未達成"}</span></section>`;
  }).join("");
}

function formatDurationFromMs(ms) {
  const totalMinutes = Math.floor(ms / 60_000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours <= 0) return `${minutes}分`;
  if (minutes <= 0) return `${hours}時間`;
  return `${hours}時間${minutes}分`;
}
function getOfflineManualPerSecond() {
  return safeMultiply(0.5, getClickPower(), getClickCount(), getNormalPointMultiplier(), state.manualFinalMultiplier);
}
function getOfflineAutoPerSecond() {
  const regularAuto = safeMultiply(getEffectiveAutoClickPower(), (1000 / getAutoInterval()));
  return regularAuto;
}
function calculateOfflineReward(elapsedMs) {
  const cappedMs = Math.min(elapsedMs, OFFLINE_MAX_MS);
  const rewardMinutes = Math.floor(cappedMs / 60_000);
  const rewardSeconds = rewardMinutes * 60;
  const reward = safeMultiply(rewardSeconds, safeAdd(getOfflineManualPerSecond(), getOfflineAutoPerSecond()));
  return { elapsedMs, cappedMs: rewardMinutes * 60_000, rewardMinutes, reward };
}
function prepareOfflineReward(savedAt) {
  if (offlineRewardClaimedThisSession) return;

  // オフライン報酬は「最後にページを離れた時刻」だけを基準にする。
  // savedAt は自動セーブでオンライン中にも更新されるため、報酬計算には使わない。
  const leftAtRaw = Number(localStorage.getItem(OFFLINE_LEFT_AT_KEY) || 0);
  if (!Number.isFinite(leftAtRaw) || leftAtRaw <= 0) return;

  const claimedUntil = Number(localStorage.getItem(OFFLINE_CLAIMED_UNTIL_KEY) || 0);
  const baseTime = Math.max(leftAtRaw, Number.isFinite(claimedUntil) ? claimedUntil : 0);
  const elapsedMs = Date.now() - baseTime;
  if (elapsedMs < OFFLINE_MINIMUM_MS) return;

  const result = calculateOfflineReward(elapsedMs);
  if (result.rewardMinutes < 1 || result.reward <= 0) return;
  pendingOfflineReward = { ...result, leftAt:leftAtRaw, claimed:false };
  showOfflineRewardModal();
}
function showOfflineRewardModal() {
  if (!pendingOfflineReward || !els.offlineRewardModal) return;
  els.offlineDurationText.textContent = formatDurationFromMs(pendingOfflineReward.elapsedMs);
  els.offlineCappedDurationText.textContent = formatDurationFromMs(pendingOfflineReward.cappedMs);
  els.offlineRewardText.textContent = fmt(pendingOfflineReward.reward);
  els.offlineRewardModal.classList.remove("hidden");
}
function claimOfflineReward() {
  if (!pendingOfflineReward || pendingOfflineReward.claimed) return;
  const reward = pendingOfflineReward.reward;
  pendingOfflineReward.claimed = true;
  pendingOfflineReward = null;
  offlineRewardClaimedThisSession = true;
  if (els.offlineRewardModal) els.offlineRewardModal.classList.add("hidden");

  const now = Date.now();
  const nowIso = new Date(now).toISOString();
  state.lastSavedAt = nowIso;
  // 先に専用キーへ受け取り済み時刻を書き込む。ポイント加算や通常セーブが失敗しても、
  // 次回起動時はこの時刻を基準にするため、同じオフライン時間を再利用できない。
  try {
    localStorage.setItem(OFFLINE_CLAIMED_UNTIL_KEY, String(now));
    localStorage.setItem(OFFLINE_LEFT_AT_KEY, String(now));
  } catch (e) { console.error(e); }
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(createSaveData({ savedAt:nowIso }))); } catch (e) { console.error(e); }
  addPoints(reward);

  // 受け取り直後に必ず現在時刻で保存する。
  // これにより、リロードしても同じオフライン時間を再利用できない。
  saveGame(true, { savedAt:nowIso });
}

function addPoints(amount) {
  const safeAmount = clampPositive(amount, 0);
  state.points = safeAdd(state.points, safeAmount);
  if (safeAmount > 0) state.totalPointsEarned = safeAdd(state.totalPointsEarned, safeAmount);
  sanitizeState();
  if (checkTrialCompletion()) return;
  checkAchievements(); updateScreen(); checkAutoPrestige();
}
function showPrestigeTopDisplay() { if (state.prestigePoints <= PRESTIGE_TOP_DISPLAY_THRESHOLD) return; prestigeTopActive = true; clearTimeout(prestigeTopTimer); prestigeTopTimer = setTimeout(() => { prestigeTopActive = false; updateScreen(); }, PRESTIGE_TOP_DISPLAY_DURATION); }
function hidePrestigeTopDisplay() { prestigeTopActive = false; clearTimeout(prestigeTopTimer); prestigeTopTimer = null; }
function canBuyBasic(key, options={}) {
  const currentCost = getCurrentBasicCost(key);
  state.basicCosts[key] = currentCost;
  if (!canBuyBasicAtLevel(key, state.basicLevels?.[key] || 0, options)) return false;
  if (state.points < currentCost) return false;
  return true;
}
function buyBasic(key, options={}) {
  const plan = getBasicBulkPlan(key, options);
  if (plan.count < 1) return false;
  // 購入に使うコストと表示コストを同一関数に統一。
  // レベル加算後の次回表示は「新しい現在レベルのコスト」。
  state.points = clampPositive(state.points - plan.totalCost, 0);
  state.basicLevels[key] = clampInteger(state.basicLevels[key] + plan.count, 0, MAX_LEVEL);
  state.basicPurchaseCounts[key] = clampInteger((state.basicPurchaseCounts[key] || 0) + plan.count, 0, MAX_GAME_NUMBER);
  state.totalBasicUpgradePurchases = clampInteger(state.totalBasicUpgradePurchases + plan.count, 0, MAX_GAME_NUMBER);
  state.basicCosts[key] = getCurrentBasicCost(key);
  if (key === "autoInterval") startAutoClickLoop();
  if (options.render !== false) updateScreen();
  if (options.save !== false) saveGame();
  return true;
}
function calculateClickGain() {
  const manualMultiplier = safeMultiply(getNormalPointMultiplier(), state.manualFinalMultiplier, getCookingBuffMultiplier("manual"));
  const base = safeMultiply(getClickPower(), manualMultiplier);
  const isBonus = Math.random() * 100 < getBonusChance();
  if (!isBonus) return {perCount:base, entries:[{amount:base,type:"normal"}], bonus:false, enhanced:false};
  const bonus = safeMultiply(getClickPower(), getBonusMultiplier(), manualMultiplier);
  const entries = [{amount:bonus,type:"bonus"}]; let total = bonus;
  const enhanced = state.enhancedBonusUnlocked && Math.random() * 100 < getEnhancedBonusChance();
  if (enhanced) { const extra = safeMultiply(getClickPower(), getBonusMultiplier(), getEnhancedBonusMultiplier(), manualMultiplier); total = safeAdd(total, extra); entries.push({amount:extra,type:"enhanced"}); }
  return {perCount:total, entries, bonus:true, enhanced};
}
function gainManual(showEffects) {
  const result = calculateClickGain(); const count = getClickCount(); const totalGain = safeMultiply(result.perCount, count);
  if (showEffects) {
    state.totalClicks += 1;
    state.bonusStreak = result.bonus ? state.bonusStreak + 1 : 0;
    state.enhancedBonusStreak = result.enhanced ? state.enhancedBonusStreak + 1 : 0;
    if (totalGain >= 10_000) unlockAchievement("clickGain10000");
  }
  addPoints(totalGain);
  if (showEffects) { showGainPopups(result.entries, count); playPotatoAnimation(); if (result.bonus) playBonusGlow(result.enhanced); checkAchievements(); }
}
function executePrestigeReset() {
  const count = getExecutablePrestigeResetCount(); if (count < 1) return;
  const now = Date.now();
  const isFirstPrestigeReset = state.prestigeResetCount <= 0;

  // 「リセットしてから○○以内にもう一度リセットする」系のアチーブメントは、
  // 1回だけの高級リセットを連続で行った場合のみ判定する。
  // 一度に複数回まとめてリセットした場合は、時間系アチーブメントの対象外。
  if (count === 1 && state.lastPrestigeResetAt) {
    const previousResetTime = new Date(state.lastPrestigeResetAt).getTime();
    const delta = now - previousResetTime;
    if (Number.isFinite(delta) && delta >= 0) {
      if (delta <= 60_000) unlockAchievement("prestigeWithin60");
      if (delta <= 10_000) unlockAchievement("prestigeWithin10");
    }
  }

  if (count >= 10) unlockAchievement("prestige10AtOnce");
  state.lastPrestigeResetAt = new Date(now).toISOString();
  state.points = 0;
  state.prestigeResetCount = safeAdd(state.prestigeResetCount, count);
  const prestigeGain = safeMultiply(count, getPrestigeGainPerReset());
  state.prestigePoints = safeAdd(state.prestigePoints, prestigeGain);
  state.totalPrestigePointsEarned = safeAdd(state.totalPrestigePointsEarned, prestigeGain);
  resetBasicUpgrades(); resetSkins();
  if (isFirstPrestigeReset) playFirstPrestigeResetEffect();
  if (checkTrialCompletion()) return;
  restartLoops(); showPrestigeTopDisplay(); checkAchievements(); updateScreen(); saveGame(true);
}
function checkAutoPrestige() {
  if (!state.autoPrestigeUnlocked || !state.autoPrestigeEnabled) return;
  if (Math.floor(state.points / PRESTIGE_COST) >= state.autoPrestigeTarget) executePrestigeReset();
}
function applyPrestigeUpgradeEffect(type) {
  if (type === "enhancedAuto") state.enhancedAutoUnlocked = true;
  if (type === "enhancedBonus") state.enhancedBonusUnlocked = true;
  if (type === "initialLevel") {
    state.basicInitialLevelBonus = Math.min(BASIC_INITIAL_MAX, state.basicInitialLevelBonus + BASIC_INITIAL_INCREMENT);
    const initialLevel = getTotalBasicInitialLevelBonus();
    BASIC_KEYS.forEach((k) => {
      state.basicLevels[k] = Math.max(state.basicLevels[k], initialLevel);
      state.basicPurchaseCounts[k] = Math.max(state.basicPurchaseCounts[k] || 0, state.basicLevels[k]);
      state.basicCosts[k] = getCurrentBasicCost(k);
    });
  }
  if (type === "prestigeBasicMultiplier") {
    state.prestigeBasicMultiplier = getPrestigeBasicMultiplierForLevel(state.prestigePurchaseCounts.prestigeBasicMultiplier);
  }
  if (type === "costReduction") {
    state.basicCostMultiplier *= 0.9;
    BASIC_KEYS.forEach((k) => state.basicCosts[k] = getCurrentBasicCost(k));
  }
  if (type === "premiumAutoMultiplier") { state.premiumAutoMultiplier = getNextPremiumAutoMultiplier(); state.premiumAutoLevel += 1; }
  if (type === "manualFinalMultiplier") { state.manualFinalMultiplier = getNextManualFinalMultiplier(); state.manualFinalLevel += 1; }
  if (type === "autoPrestige") { state.autoPrestigeUnlocked = true; state.autoPrestigeEnabled = true; }
  if (type === "cookingUnlock") { state.cookingUnlocked = true; syncCookingRecipeUnlocks(); }
  if (type === "autoBasicUpgrade") { state.autoBasicUnlocked = true; state.autoBasicEnabled = true; }
  if (type === "prestigePointGain") state.prestigePointGainLevel += 1;
}
function buyPrestige(type) {
  const plan = getPrestigeBulkPlan(type);
  if (plan.count < 1) return false;
  state.prestigePoints = clampPositive(state.prestigePoints - plan.totalCost, 0);
  for (let i = 0; i < plan.count; i += 1) {
    state.prestigePurchaseCounts[type] += 1;
    applyPrestigeUpgradeEffect(type);
  }
  restartLoops(); checkAchievements(); updateScreen(); saveGame(true); checkAutoPrestige();
  return true;
}
function executeBigBangReset() {
  if (isTrialActive("equipment") && state.prestigePoints >= TRIAL_CONFIG.equipment.targetPrestigePoints) checkTrialCompletion();
  if (isTrialActive()) return;
  const count = getExecutableBigBangResetCount(); if (count < 1) return;
  const isFirstBigBangReset = state.bigBangCount <= 0;
  const preservedPrestigeUnlocks = captureBigBangPreservedPrestigeState();
  const gain = safeMultiply(count, getBigBangGainPerReset());
  state.bigBangPoints = safeAdd(state.bigBangPoints, gain); state.bigBangCount = safeAdd(state.bigBangCount, count); state.bbAllMultiplier = Math.max(1, safeAdd(state.bbAllMultiplier, safeMultiply(0.1, count)));
  resetPrestigeLayer(); // 高級ポイントも0にし、高級全基本ポイント倍率も1に戻す
  restoreBigBangPreservedPrestigeState(preservedPrestigeUnlocks);
  unlockAchievement("firstBigBang");
  if (isFirstBigBangReset) playFirstBigBangResetEffect();
  hidePrestigeTopDisplay(); restartLoops(); checkAchievements(); updateScreen(); saveGame(true);
}
function buyBigBang(type) {
  if (!BIG_BANG_UPGRADE_CONFIG[type]) return false;
  const level = getBigBangUpgradeLevel(type);
  if (level >= getBigBangUpgradeMaxLevel(type)) return false;
  const cost = getBigBangUpgradeCost(type);
  if (state.bigBangPoints < cost) return false;
  state.bigBangPoints = clampPositive(state.bigBangPoints - cost, 0);
  if (type === "normal") state.bbNormalMultiplierLevel += 1;
  if (type === "prestige") state.bbPrestigeMultiplierLevel += 1;
  if (type === "gain") state.bbPointGainLevel += 1;
  if (type === "cookingRobotMk2") state.bbCookingRobotMk2Unlocked = true;
  if (type === "initialLevel") {
    state.bbInitialLevelBonus = Math.min(BB_BASIC_INITIAL_MAX, state.bbInitialLevelBonus + 1);
    const initialLevel = getTotalBasicInitialLevelBonus();
    BASIC_KEYS.forEach((k) => {
      state.basicLevels[k] = Math.max(state.basicLevels[k], initialLevel);
      state.basicPurchaseCounts[k] = Math.max(state.basicPurchaseCounts[k] || 0, state.basicLevels[k]);
      state.basicCosts[k] = getCurrentBasicCost(k);
    });
  }
  updateScreen(); saveGame(true);
  return true;
}

function isCookingRunning() {
  return Boolean(cookingSession && (cookingSession.phase === "countdown" || cookingSession.phase === "playing"));
}
function stopCookingTimers() {
  clearTimeout(cookingCountdownTimer); cookingCountdownTimer = null;
  clearInterval(cookingTimer); cookingTimer = null;
  cookingSession = null;
}
function removeCookingKey() {
  if (!cookingKeyEl) return;
  cookingKeyEl.remove();
  cookingKeyEl = null;
}
function setCookingView(active) {
  if (active && !state.cookingUnlocked) return false;
  if (!active && isCookingRunning()) return false;
  closePanels();
  currentView = active ? "cooking" : "game";
  viewScrollAccum = 0;
  document.body.classList.toggle("cooking-view-active", active);
  document.body.classList.toggle("trial-view-active", false);
  if (els.cookingArea) els.cookingArea.setAttribute("aria-hidden", active ? "false" : "true");
  if (els.trialScreen) els.trialScreen.setAttribute("aria-hidden", "true");
  if (active) removeLuckyPotato();
  else removeCookingKey();
  updateScreen();
  return true;
}
function getCookingQuality(score) {
  return COOKING_QUALITY_CONFIG.find((quality) => score >= quality.min) || COOKING_QUALITY_CONFIG[COOKING_QUALITY_CONFIG.length - 1];
}
function getCookingTargetSize() {
  return Math.min(86, 58 + getCookingUpgradeLevel("keySpread") * 2 + Math.max(0, state.cookingLevel - 1) * 1.5);
}
function getCookingAvailableKeys() {
  const relaxed = Math.max(0, Math.floor((state.cookingLevel - 1) / 3));
  return COOKING_KEY_POOL.slice(0, Math.max(7, COOKING_KEY_POOL.length - relaxed));
}
function isCookingTapMode() {
  const coarsePointer = typeof window.matchMedia === "function" && window.matchMedia("(pointer: coarse)").matches;
  return coarsePointer || window.innerWidth <= COOKING_TAP_MODE_MAX_WIDTH;
}
function canUseCookingTapInput() {
  return Boolean(cookingSession && cookingSession.phase === "playing" && isCookingTapMode());
}
function getCookingQualityMax() {
  return safeAdd(
    safeAdd(COOKING_BASE_QUALITY_MAX, safeMultiply(getCookingUpgradeLevel("qualityImprove"), COOKING_QUALITY_MAX_PER_LEVEL)),
    safeMultiply(Math.max(0, state.cookingLevel - 1), 2.5)
  );
}
function getCookingStartQuality(maxQuality = getCookingQualityMax()) {
  const startRate = Math.min(1, COOKING_BASE_QUALITY_START_RATE + getCookingUpgradeLevel("freshDirect") * COOKING_FRESH_DIRECT_START_RATE);
  return safeMultiply(maxQuality, startRate);
}
function getCookingComboGrowthRate() {
  return COOKING_COMBO_SCORE_BONUS + getCookingUpgradeLevel("zone") * COOKING_ZONE_COMBO_BONUS;
}
function getCookingRecoveryComboGrowthRate() {
  return COOKING_COMBO_RECOVERY_BONUS + getCookingUpgradeLevel("zone") * COOKING_ZONE_COMBO_BONUS * 1.8;
}
function getCookingQualityDecayPerSecond(score = cookingSession?.score || 0) {
  const scoreAcceleration = Math.floor(clampPositive(score, 0) / COOKING_SCORE_DECAY_STEP) * COOKING_SCORE_DECAY_PER_STEP;
  return safeAdd(COOKING_BASE_QUALITY_DECAY_PER_SEC, scoreAcceleration);
}
function getCookingQualityRecovery(combo = cookingSession?.combo || 0) {
  const baseRecovery = safeAdd(COOKING_BASE_QUALITY_RECOVERY, safeMultiply(getCookingUpgradeLevel("toolImprove"), COOKING_TOOL_RECOVERY_BONUS));
  const comboFactor = 1 + Math.min(60, Math.max(0, combo)) * getCookingRecoveryComboGrowthRate();
  return safeMultiply(baseRecovery, comboFactor);
}
function getCookingQualityRate(session = cookingSession) {
  if (!session) return getCookingStartQuality() / Math.max(1, getCookingQualityMax());
  return clampNumber(session.quality / Math.max(1, session.qualityMax), 0, 1);
}
function addCookingMastery(amount) {
  const gain = Math.max(0, Math.floor(num(amount, 0)));
  if (gain <= 0) return false;
  state.cookingMastery = safeAdd(state.cookingMastery, gain);
  state.cookingTotalMastery = safeAdd(state.cookingTotalMastery, gain);
  state.cookingLevelProgress = safeAdd(state.cookingLevelProgress, gain);
  let leveled = false;
  while (state.cookingLevelProgress >= getCookingLevelRequirement(state.cookingLevel)) {
    state.cookingLevelProgress = clampPositive(state.cookingLevelProgress - getCookingLevelRequirement(state.cookingLevel), 0);
    state.cookingLevel = clampInteger(state.cookingLevel + 1, 1, MAX_LEVEL);
    leveled = true;
  }
  if (leveled) syncCookingRecipeUnlocks();
  return leveled;
}
function getCookingScoreBuffFactor(score) {
  return 1 + Math.min(COOKING_SCORE_BUFF_CAP, clampPositive(score, 0) / COOKING_SCORE_BUFF_DIVISOR);
}
function applyCookingBuff(recipe, quality, score = 0, options = {}) {
  const levelBonus = 1 + Math.max(0, state.cookingLevel - 1) * 0.04;
  const scoreBonus = getCookingScoreBuffFactor(score);
  const bonus = safeMultiply(recipe.baseBuff, quality.factor, levelBonus, scoreBonus, COOKING_BUFF_GAIN_BOOST, getCookingBuffEffectMultiplier());
  const duration = getCookingBuffDuration(recipe);
  const expiresAt = Date.now() + duration;
  state.cookingBuffs = state.cookingBuffs.filter((buff) => buff.recipeId !== recipe.id);
  state.cookingBuffs.push({
    recipeId:recipe.id,
    type:recipe.buffType,
    rank:quality.rank,
    bonus,
    score,
    scoreBonus,
    source:options.source || "manual",
    duration,
    expiresAt,
  });
  return { bonus, expiresAt, scoreBonus, duration, source:options.source || "manual" };
}
function startCooking() {
  if (!state.cookingUnlocked || isCookingRunning()) return;
  const recipe = getRecipeConfig();
  if (!isRecipeUnlocked(recipe.id)) return;
  const qualityMax = getCookingQualityMax();
  setCookingView(true);
  removeCookingKey();
  clearTimeout(cookingCountdownTimer);
  clearInterval(cookingTimer);
  lastCookingResult = null;
  cookingSession = {
    phase:"countdown",
    recipeId:recipe.id,
    countdown:3,
    qualityMax,
    quality:getCookingStartQuality(qualityMax),
    lastTickAt:null,
    score:0,
    correct:0,
    misses:0,
    combo:0,
    bestCombo:0,
    comboCareAvailable:getCookingUpgradeLevel("comboCare") > 0,
    comboCareUsed:false,
    targetKey:null,
  };
  updateCookingDisplay();
  runCookingCountdown();
}
function runCookingCountdown() {
  if (!cookingSession || cookingSession.phase !== "countdown") return;
  if (cookingSession.countdown <= 0) {
    beginCookingPlay();
    return;
  }
  updateCookingDisplay();
  cookingCountdownTimer = setTimeout(() => {
    if (!cookingSession || cookingSession.phase !== "countdown") return;
    cookingSession.countdown -= 1;
    runCookingCountdown();
  }, 1000);
}
function beginCookingPlay() {
  if (!cookingSession) return;
  cookingSession.phase = "playing";
  cookingSession.lastTickAt = Date.now();
  placeCookingKey();
  cookingTimer = setInterval(tickCookingTimer, 80);
  tickCookingTimer();
}
function tickCookingTimer() {
  if (!cookingSession || cookingSession.phase !== "playing") return;
  const now = Date.now();
  const elapsedSeconds = Math.max(0, (now - (cookingSession.lastTickAt || now)) / 1000);
  cookingSession.lastTickAt = now;
  cookingSession.quality = clampPositive(cookingSession.quality - getCookingQualityDecayPerSecond(cookingSession.score) * elapsedSeconds, 0);
  if (cookingSession.quality <= 0) {
    finishCooking();
    return;
  }
  updateCookingDisplay();
}
function getCookingBlockers() {
  return [...document.querySelectorAll([
    ".top-bar",
    ".side-panel.open",
    ".modal-overlay:not(.hidden)",
    ".panel-overlay.show",
    ".skin-floating-button",
    ".cooking-actions",
    ".cooking-result-card:not(.hidden)",
    ".achievement-toast-container",
    "button:not(.cooking-key-target)",
    "input",
    "select",
    "textarea"
  ].join(","))].filter(isVisibleRectElement).map((el) => el.getBoundingClientRect());
}
function findCookingKeyPosition(size) {
  const blockers = getCookingBlockers();
  const minX = 12;
  const minY = 86;
  const maxX = Math.max(minX, window.innerWidth - size - 12);
  const maxY = Math.max(minY, window.innerHeight - size - 12);
  const spreadLevel = getCookingUpgradeLevel("keySpread");
  const levelEase = Math.min(0.18, Math.max(0, state.cookingLevel - 1) * 0.015);
  const rangeFactor = Math.max(0.36, 1 - spreadLevel * 0.06 - levelEase);
  const rangeW = Math.max(size * 2, window.innerWidth * 0.78 * rangeFactor);
  const rangeH = Math.max(size * 2, window.innerHeight * 0.62 * rangeFactor);
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2 + 16;
  const leftMin = Math.max(minX, centerX - rangeW / 2);
  const leftMax = Math.min(maxX, centerX + rangeW / 2);
  const topMin = Math.max(minY, centerY - rangeH / 2);
  const topMax = Math.min(maxY, centerY + rangeH / 2);
  for (let i = 0; i < COOKING_TARGET_ATTEMPTS; i += 1) {
    const left = leftMin + Math.random() * Math.max(1, leftMax - leftMin);
    const top = topMin + Math.random() * Math.max(1, topMax - topMin);
    const rect = { left, top, right:left + size, bottom:top + size };
    if (!blockers.some((blocker) => rectsOverlap(rect, blocker, 8))) return { left, top };
  }
  return { left:Math.max(minX, Math.min(maxX, centerX - size / 2)), top:Math.max(minY, Math.min(maxY, centerY - size / 2)) };
}
function placeCookingKey() {
  if (!cookingSession || cookingSession.phase !== "playing") return;
  const keys = getCookingAvailableKeys();
  cookingSession.targetKey = keys[Math.floor(Math.random() * keys.length)];
  const size = getCookingTargetSize();
  const position = findCookingKeyPosition(size);
  if (!cookingKeyEl) {
    cookingKeyEl = document.createElement("button");
    cookingKeyEl.className = "cooking-key-target";
    cookingKeyEl.type = "button";
    cookingKeyEl.setAttribute("aria-label", "押すキー");
    cookingKeyEl.addEventListener("pointerdown", handleCookingTargetPointerDown);
    document.body.append(cookingKeyEl);
  }
  syncCookingKeyInputMode();
  cookingKeyEl.style.width = `${size}px`;
  cookingKeyEl.style.height = `${size}px`;
  cookingKeyEl.style.left = `${position.left}px`;
  cookingKeyEl.style.top = `${position.top}px`;
  cookingKeyEl.style.fontSize = `${Math.max(24, size * 0.46)}px`;
}
function syncCookingKeyInputMode() {
  if (!cookingKeyEl || !cookingSession || cookingSession.phase !== "playing") return;
  const tapMode = isCookingTapMode();
  cookingKeyEl.classList.toggle("tap-mode", tapMode);
  cookingKeyEl.textContent = tapMode ? "押" : cookingSession.targetKey;
  cookingKeyEl.setAttribute("aria-label", tapMode ? "料理ボタンを押す" : `押すキー ${cookingSession.targetKey}`);
}
function applyCookingCorrectInput() {
  if (!cookingSession || cookingSession.phase !== "playing") return false;
  cookingSession.correct += 1;
  cookingSession.combo += 1;
  cookingSession.bestCombo = Math.max(cookingSession.bestCombo, cookingSession.combo);
  const typeScore = COOKING_BASE_SCORE + getCookingUpgradeLevel("typeScore") * 3;
  const comboBonus = 1 + Math.min(60, cookingSession.combo) * getCookingComboGrowthRate();
  cookingSession.score = safeAdd(cookingSession.score, safeMultiply(typeScore, comboBonus));
  cookingSession.quality = Math.min(cookingSession.qualityMax, safeAdd(cookingSession.quality, getCookingQualityRecovery(cookingSession.combo)));
  placeCookingKey();
  updateCookingDisplay();
  return true;
}
function applyCookingMistakeInput() {
  if (!cookingSession || cookingSession.phase !== "playing") return false;
  cookingSession.misses += 1;
  if (cookingSession.comboCareAvailable && !cookingSession.comboCareUsed && cookingSession.combo > 0) {
    cookingSession.comboCareUsed = true;
  } else {
    cookingSession.combo = 0;
  }
  const guard = getCookingUpgradeLevel("mistakeGuard") + Math.max(0, state.cookingLevel - 1) * 0.15;
  const penalty = Math.max(1, COOKING_MISTAKE_PENALTY - guard * 1.25);
  cookingSession.score = clampPositive(cookingSession.score - penalty, 0);
  updateCookingDisplay();
  return true;
}
function handleCookingTargetPointerDown(e) {
  if (!canUseCookingTapInput()) return;
  e.preventDefault();
  e.stopPropagation();
  applyCookingCorrectInput();
}
function handleCookingPointerDown(e) {
  if (!canUseCookingTapInput()) return;
  if (e.target === cookingKeyEl || e.target?.closest?.(".cooking-key-target")) return;
  e.preventDefault();
  applyCookingMistakeInput();
}
function handleCookingKeydown(e) {
  if (!cookingSession || cookingSession.phase !== "playing") return false;
  if (isCookingTapMode()) return false;
  const tag = document.activeElement?.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || document.activeElement?.isContentEditable) return false;
  if (e.key.length !== 1) return false;
  const pressed = e.key.toUpperCase();
  if (!/^[A-Z]$/.test(pressed)) return false;
  e.preventDefault();
  if (pressed === cookingSession.targetKey) {
    applyCookingCorrectInput();
  } else {
    applyCookingMistakeInput();
  }
  return true;
}
function finishCooking() {
  if (!cookingSession) return;
  const session = cookingSession;
  const recipe = getRecipeConfig(session.recipeId);
  clearTimeout(cookingCountdownTimer); cookingCountdownTimer = null;
  clearInterval(cookingTimer); cookingTimer = null;
  removeCookingKey();
  const accuracy = session.correct + session.misses > 0 ? session.correct / (session.correct + session.misses) : 0;
  const finalBoost = 1 + getCookingUpgradeLevel("finalScore") * 0.08 + Math.max(0, state.cookingLevel - 1) * 0.015;
  const baseScore = clampPositive(session.score + session.correct * 4 + session.bestCombo * 8 - session.misses * 6, 0);
  const finalScore = Math.floor(safeMultiply(baseScore, finalBoost, 0.72 + accuracy * 0.38));
  const quality = getCookingQuality(finalScore);
  const masteryGain = Math.max(4, Math.floor(safeMultiply(finalScore / 7 + session.correct * 1.6 + quality.masteryBonus, getCookingMasteryGainMultiplier())));
  const leveled = addCookingMastery(masteryGain);
  rememberCookingBestScore(recipe.id, finalScore);
  const buff = applyCookingBuff(recipe, quality, finalScore);
  lastCookingResult = {
    recipe,
    quality,
    finalScore,
    correct:session.correct,
    misses:session.misses,
    bestCombo:session.bestCombo,
    masteryGain,
    buff,
    leveled,
  };
  cookingSession = null;
  updateCookingResult();
  updateScreen();
  restartLoops();
  saveGame(true);
}
function updateCookingResult() {
  if (!els.cookingResultCard) return;
  if (!lastCookingResult) {
    els.cookingResultCard.classList.add("hidden");
    return;
  }
  const result = lastCookingResult;
  const minutes = Math.max(1, Math.round((result.buff.duration || result.recipe.buffDuration) / 60_000));
  els.cookingResultTitle.textContent = `${result.recipe.name} ${result.quality.rank}ランク完成`;
  els.cookingResultText.textContent = `スコア ${fmt(result.finalScore)} / 正解 ${fmt(result.correct)} / ミス ${fmt(result.misses)} / 最大コンボ ${fmt(result.bestCombo)} / 熟練度 +${fmt(result.masteryGain)} / ${result.recipe.buffLabel} +${fmtPct(result.buff.bonus)}% (${minutes}分)${result.leveled ? " / 料理レベルアップ" : ""}`;
  els.cookingResultCard.classList.remove("hidden");
}
function buyCookingUpgrade(key) {
  if (!state.cookingUnlocked || isCookingRunning()) return false;
  if (getCookingUpgradeLevel(key) >= getCookingUpgradeMaxLevel(key)) return false;
  const cost = getCookingUpgradeCost(key);
  if (state.cookingMastery < cost) return false;
  state.cookingMastery = clampPositive(state.cookingMastery - cost, 0);
  state.cookingUpgradeLevels[key] = clampInteger(getCookingUpgradeLevel(key) + 1, 0, MAX_LEVEL);
  updateScreen();
  saveGame(true);
  return true;
}
function selectRecipe(id) {
  if (!state.cookingUnlocked || isCookingRunning()) return false;
  const recipe = getRecipeConfig(id);
  if (!isRecipeUnlocked(recipe.id)) return false;
  state.selectedRecipeId = recipe.id;
  lastCookingResult = null;
  updateScreen();
  saveGame(true);
  return true;
}
function buildCookingUpgradeList() {
  if (!els.cookingUpgradeList) return;
  els.cookingUpgradeList.innerHTML = "";
  COOKING_UPGRADE_KEYS.forEach((key) => {
    const config = COOKING_UPGRADE_CONFIG[key];
    const card = document.createElement("section");
    card.className = "upgrade-card";
    card.innerHTML = `<h3>${config.name} <span class="level-badge">Lv.<span></span></span></h3><p>${config.description}</p><button class="upgrade-button cooking-upgrade-button" type="button"></button>`;
    const level = card.querySelector(".level-badge span");
    const button = card.querySelector("button");
    button.addEventListener("click", () => buyCookingUpgrade(key));
    els.cookingUpgradeList.append(card);
    cookingUpgradeControls[key] = { card, level, button };
  });
}
function updateCookingUpgradeDisplay() {
  COOKING_UPGRADE_KEYS.forEach((key) => {
    const controls = cookingUpgradeControls[key];
    if (!controls) return;
    const cost = getCookingUpgradeCost(key);
    const level = getCookingUpgradeLevel(key);
    const maxLevel = getCookingUpgradeMaxLevel(key);
    controls.level.textContent = fmt(level);
    const maxed = level >= maxLevel;
    controls.button.textContent = maxed ? "習得済み" : `強化 / 熟練度 ${fmt(cost)}`;
    controls.button.disabled = maxed || !state.cookingUnlocked || state.cookingMastery < cost || isCookingRunning();
    controls.card.classList.toggle("locked-card", !state.cookingUnlocked);
    controls.card.classList.toggle("unlocked", state.cookingUnlocked);
  });
}
function buildRecipeList() {
  if (!els.recipeList) return;
  els.recipeList.innerHTML = "";
  COOKING_RECIPES.forEach((recipe) => {
    const card = document.createElement("section");
    card.className = "recipe-card";
    card.dataset.recipeId = recipe.id;
    card.innerHTML = `
      <img class="recipe-preview" src="${recipe.image}" alt="${recipe.name}" />
      <div class="recipe-info">
        <h3>${recipe.name}</h3>
        <p>解放: 料理Lv.${recipe.unlockLevel}</p>
        <p>${recipe.buffLabel}バフ / 質ゲージ制</p>
        <button class="recipe-action-button" type="button"></button>
      </div>`;
    card.querySelector("button").addEventListener("click", () => selectRecipe(recipe.id));
    els.recipeList.append(card);
  });
}
function updateRecipeDisplay() {
  if (!els.recipeList) return;
  syncCookingRecipeUnlocks();
  if (els.selectedRecipeNameText) els.selectedRecipeNameText.textContent = getRecipeConfig().name;
  if (els.recipePanelLevelText) els.recipePanelLevelText.textContent = fmt(state.cookingLevel);
  els.recipeList.querySelectorAll(".recipe-card").forEach((card) => {
    const recipe = getRecipeConfig(card.dataset.recipeId);
    const unlocked = state.cookingUnlocked && isRecipeUnlocked(recipe.id);
    const selected = state.selectedRecipeId === recipe.id;
    const button = card.querySelector("button");
    card.classList.toggle("selected", selected);
    card.classList.toggle("locked-recipe", !unlocked);
    if (!state.cookingUnlocked) {
      button.textContent = "調理機能が未解放";
      button.disabled = true;
    } else if (!unlocked) {
      button.textContent = `料理Lv.${recipe.unlockLevel}で解放`;
      button.disabled = true;
    } else if (selected) {
      button.textContent = "選択中";
      button.disabled = true;
    } else {
      button.textContent = "選択する";
      button.disabled = isCookingRunning();
    }
  });
}
function updateCookingDisplay() {
  const unlocked = state.cookingUnlocked;
  syncCookingRecipeUnlocks();
  const recipe = getRecipeConfig();
  const running = isCookingRunning();
  if (els.cookingTabButton) {
    els.cookingTabButton.classList.toggle("locked", !unlocked);
    els.cookingTabButton.textContent = unlocked ? (currentView === "cooking" ? "通常へ" : "🍳 調理") : "🔒 調理";
    els.cookingTabButton.title = unlocked ? (running ? "調理中は画面を切り替えられません" : "") : COOKING_UNLOCK_TOOLTIP;
    els.cookingTabButton.setAttribute("aria-disabled", unlocked ? "false" : "true");
    els.cookingTabButton.disabled = unlocked && running;
  }
  if (els.skinButton) {
    const recipeMode = currentView === "cooking";
    els.skinButton.textContent = recipeMode ? "🍳 レシピ" : "🥔 スキン";
    els.skinButton.setAttribute("aria-label", recipeMode ? "レシピメニューを開く" : "スキンメニューを開く");
    els.skinButton.title = recipeMode && running ? "調理中はレシピを変更できません" : "";
    els.skinButton.disabled = recipeMode && running;
  }
  if (!unlocked && currentView === "cooking") setCookingView(false);
  const req = getCookingLevelRequirement();
  if (els.cookingLevelText) els.cookingLevelText.textContent = fmt(state.cookingLevel);
  if (els.cookingMasteryText) els.cookingMasteryText.textContent = fmt(state.cookingMastery);
  if (els.cookingLevelProgressText) els.cookingLevelProgressText.textContent = `${fmt(state.cookingLevelProgress)} / ${fmt(req)}`;
  if (els.cookingRecipeTitle) els.cookingRecipeTitle.textContent = recipe.name;
  if (els.cookingDishImage) {
    if (els.cookingDishImage.dataset.recipeId !== recipe.id) {
      els.cookingDishImage.dataset.recipeId = recipe.id;
      els.cookingDishImage.src = recipe.image;
      els.cookingDishImage.alt = recipe.name;
    }
    els.cookingDishImage.classList.toggle("cooking-active", running);
  }
  const qualityRate = getCookingQualityRate();
  if (els.cookingQualityText) els.cookingQualityText.textContent = `${Math.round(qualityRate * 100)}%`;
  if (els.cookingQualityFill) els.cookingQualityFill.style.width = `${Math.max(0, Math.min(100, qualityRate * 100))}%`;
  if (els.cookingScoreText) els.cookingScoreText.textContent = fmt(cookingSession?.score || lastCookingResult?.finalScore || 0);
  if (els.cookingComboText) els.cookingComboText.textContent = fmt(cookingSession?.combo || 0);
  syncCookingKeyInputMode();
  if (els.cookingCountdownText) {
    const showCountdown = cookingSession?.phase === "countdown";
    els.cookingCountdownText.textContent = String(Math.max(1, cookingSession?.countdown || 1));
    els.cookingCountdownText.classList.toggle("hidden", !showCountdown);
  }
  if (els.startCookingButton) {
    els.startCookingButton.disabled = !unlocked || running || !isRecipeUnlocked(recipe.id);
    els.startCookingButton.textContent = running ? "調理中" : "調理開始";
  }
  if (els.returnGameButton) els.returnGameButton.disabled = running;
  updateCookingResult();
  updateCookingUpgradeDisplay();
  updateRecipeDisplay();
}

function removeLuckyPotato() {
  if (!luckyPotatoEl) return;
  luckyPotatoEl.remove();
  luckyPotatoEl = null;
}
function isVisibleRectElement(el) {
  if (!el || el === luckyPotatoEl) return false;
  const style = getComputedStyle(el);
  if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) return false;
  const rect = el.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0 && rect.right > 0 && rect.bottom > 0 && rect.left < window.innerWidth && rect.top < window.innerHeight;
}
function rectsOverlap(a, b, gap = 10) {
  return a.left < b.right + gap && a.right > b.left - gap && a.top < b.bottom + gap && a.bottom > b.top - gap;
}
function getLuckyPotatoBlockers() {
  return [...document.querySelectorAll([
    ".top-bar",
    ".potato-button",
    ".trial-peek",
    ".skin-floating-button",
    ".side-panel.open",
    ".modal-overlay:not(.hidden)",
    ".panel-overlay.show",
    ".achievement-toast-container",
    "button:not(.lucky-potato)",
    "input",
    "select",
    "textarea"
  ].join(","))].filter(isVisibleRectElement).map((el) => el.getBoundingClientRect());
}
function canSpawnLuckyPotato() {
  if (luckyPotatoEl || currentView !== "game") return false;
  if (document.visibilityState && document.visibilityState !== "visible") return false;
  if (document.querySelector(".side-panel.open, .modal-overlay:not(.hidden)")) return false;
  return window.innerWidth >= LUCKY_POTATO_SIZE + LUCKY_POTATO_PADDING * 2 && window.innerHeight >= LUCKY_POTATO_SIZE + LUCKY_POTATO_PADDING * 2;
}
function findLuckyPotatoPosition() {
  const size = Math.min(LUCKY_POTATO_SIZE, Math.max(42, Math.floor(window.innerWidth * 0.12)));
  const minX = LUCKY_POTATO_PADDING;
  const minY = LUCKY_POTATO_PADDING;
  const maxX = Math.max(minX, window.innerWidth - size - LUCKY_POTATO_PADDING);
  const maxY = Math.max(minY, window.innerHeight - size - LUCKY_POTATO_PADDING);
  const blockers = getLuckyPotatoBlockers();
  for (let i = 0; i < LUCKY_POTATO_POSITION_ATTEMPTS; i += 1) {
    const left = minX + Math.random() * (maxX - minX);
    const top = minY + Math.random() * (maxY - minY);
    const rect = { left, top, right:left + size, bottom:top + size };
    if (!blockers.some((blocker) => rectsOverlap(rect, blocker))) return { left, top, size };
  }
  return null;
}
function showLuckyPotatoRewardPopup(rect, reward) {
  const popup = document.createElement("span");
  popup.className = "lucky-potato-reward";
  popup.textContent = `+${fmt(reward)}`;
  popup.style.left = `${rect.left + rect.width / 2}px`;
  popup.style.top = `${rect.top}px`;
  document.body.append(popup);
  const remove = () => popup.remove();
  popup.addEventListener("animationend", remove, { once:true });
  setTimeout(remove, 900);
}
function collectLuckyPotato() {
  if (!luckyPotatoEl) return;
  const el = luckyPotatoEl;
  const rect = el.getBoundingClientRect();
  const reward = safeMultiply(state.points, LUCKY_POTATO_REWARD_RATE);
  luckyPotatoEl = null;
  el.classList.add("collecting");
  el.disabled = true;
  setTimeout(() => el.remove(), 200);
  if (reward > 0) {
    addPoints(reward);
    showLuckyPotatoRewardPopup(rect, reward);
    saveGame(true);
  }
}
function spawnLuckyPotato() {
  if (!canSpawnLuckyPotato()) return false;
  const position = findLuckyPotatoPosition();
  if (!position) return false;
  const button = document.createElement("button");
  button.className = "lucky-potato";
  button.type = "button";
  button.setAttribute("aria-label", "小さなじゃがいもを回収する");
  button.style.left = `${position.left}px`;
  button.style.top = `${position.top}px`;
  button.style.width = `${position.size}px`;
  button.style.height = `${position.size}px`;
  button.innerHTML = '<img src="potato.png" alt="" aria-hidden="true" />';
  button.addEventListener("click", collectLuckyPotato);
  document.body.append(button);
  luckyPotatoEl = button;
  return true;
}
function rollLuckyPotatoSpawn() {
  if (Math.random() >= LUCKY_POTATO_CHANCE) return false;
  return spawnLuckyPotato();
}
function startLuckyPotatoLoop() {
  clearInterval(luckyPotatoTimer);
  luckyPotatoTimer = setInterval(rollLuckyPotatoSpawn, LUCKY_POTATO_INTERVAL);
}

function buildSkinList() {
  if (!els.skinList) return;
  els.skinList.innerHTML = "";
  SKIN_CONFIG.forEach((skin) => {
    const card = document.createElement("section");
    card.className = "skin-card";
    card.dataset.skinId = skin.id;
    const preview = document.createElement("img");
    preview.className = "skin-preview";
    preview.alt = skin.name;
    setImageWithCandidates(preview, getSkinImageCandidates(skin));
    card.innerHTML = `
      <div class="skin-info">
        <h3>${skin.name}</h3>
        <p>コスト: <strong>${skin.cost === 0 ? "初期所持" : `${fmt(skin.cost)} ポイント`}</strong></p>
        <p>基本ポイント倍率: <strong>${fmtMult(skin.multiplier)}倍</strong></p>
        <button class="skin-action-button" type="button"></button>
      </div>`;
    card.prepend(preview);
    const button = card.querySelector(".skin-action-button");
    button.addEventListener("click", () => buyOrEquipSkin(skin.id));
    els.skinList.append(card);
  });
}

function updateSkinDisplay() {
  const equipped = getSkinConfig();
  if (els.currentSkinNameText) els.currentSkinNameText.textContent = equipped.name;
  if (els.currentSkinMultiplierText) els.currentSkinMultiplierText.textContent = `${fmtMult(equipped.multiplier)}倍`;
  if (els.potatoImage) {
    const equippedCandidates = getSkinImageCandidates(equipped);
    const signature = equippedCandidates.join("|");
    if (els.potatoImage.dataset.skinId !== equipped.id || els.potatoImage.dataset.skinSrc !== signature || els.potatoImage.dataset.imageLoadFailed === "true") {
      els.potatoImage.dataset.skinId = equipped.id;
      els.potatoImage.dataset.skinSrc = signature;
      setImageWithCandidates(els.potatoImage, equippedCandidates);
    }
  }
  if (!els.skinList) return;
  els.skinList.querySelectorAll(".skin-card").forEach((card) => {
    const skin = getSkinConfig(card.dataset.skinId);
    const owned = state.unlockedSkins.includes(skin.id);
    const equippedNow = state.equippedSkin === skin.id;
    const button = card.querySelector("button");
    card.classList.toggle("equipped", equippedNow);
    if (equippedNow) {
      button.textContent = "装備中";
      button.disabled = true;
    } else if (owned) {
      button.textContent = "装備する";
      button.disabled = false;
    } else {
      button.textContent = `購入: ${fmt(skin.cost)} ポイント`;
      button.disabled = state.points < skin.cost;
    }
  });
}
function buyOrEquipSkin(id) {
  const skin = getSkinConfig(id);
  const owned = state.unlockedSkins.includes(id);
  if (!owned) {
    if (state.points < skin.cost) return;
    state.points -= skin.cost;
    state.unlockedSkins.push(id);
    unlockAchievement("skinBuy");
  }
  state.equippedSkin = id;
  updateScreen();
  saveGame(true);
}

function playPotatoAnimation() { els.potatoImage.classList.remove("pop"); void els.potatoImage.offsetWidth; els.potatoImage.classList.add("pop"); }
function playBonusGlow(enhanced) {
  const glow = document.createElement("span"); glow.className = enhanced ? "bonus-glow-effect enhanced" : "bonus-glow-effect";
  const img = document.createElement("img"); img.className = "bonus-glow-image"; img.src = els.potatoImage.src; img.alt = "";
  els.potatoButton.append(glow, img); const remove = () => { glow.remove(); img.remove(); };
  glow.addEventListener("animationend", remove, {once:true}); setTimeout(remove, 2000);
}
function playScreenEffect(effectClass, durationMs, bodyClass = "") {
  const effect = document.createElement("div");
  effect.className = effectClass;
  document.body.append(effect);
  if (bodyClass) document.body.classList.add(bodyClass);
  const cleanup = () => {
    effect.remove();
    if (bodyClass) document.body.classList.remove(bodyClass);
  };
  effect.addEventListener("animationend", cleanup, { once:true });
  setTimeout(cleanup, durationMs);
}
function playFirstPrestigeResetEffect() {
  playScreenEffect("prestige-first-reset-effect", 2600);
}
function playFirstBigBangResetEffect() {
  playScreenEffect("big-bang-first-effect", 3400, "big-bang-shake-active");
}
function popupCategory(type) { return type === "enhanced" ? "enhanced" : "standard"; }
function clearPopups() { popupQueues.standard.forEach((p) => p.remove()); popupQueues.enhanced.forEach((p) => p.remove()); popupQueues.standard=[]; popupQueues.enhanced=[]; }
function enforcePopupLimit(cat) { popupQueues[cat] = popupQueues[cat].filter((p) => p.isConnected); const max = cat === "enhanced" ? MAX_ENHANCED_ON_SCREEN : MAX_STANDARD_ON_SCREEN; while (popupQueues[cat].length > max) { const p = popupQueues[cat].shift(); if (p) p.remove(); } }
function showPopup(amount, type) { const cat = popupCategory(type); const p = document.createElement("span"); p.className = `gain-popup ${type}`; p.textContent = `+${fmt(amount)}`; p.style.left = `${50 + Math.random()*38 - 19}%`; p.style.top = `${32 + Math.random()*30 - 15}%`; els.potatoButton.append(p); popupQueues[cat].push(p); enforcePopupLimit(cat); const rm = () => { p.remove(); popupQueues[cat] = popupQueues[cat].filter((x) => x.isConnected); }; p.addEventListener("animationend", rm, {once:true}); setTimeout(rm, POPUP_LIFETIME); }
function showGainPopups(entries, count) { const std = entries.filter((e) => popupCategory(e.type) === "standard"); const enh = entries.filter((e) => popupCategory(e.type) === "enhanced"); for (let i=0; i<Math.min(count*std.length, MAX_STANDARD_PER_CLICK); i++) showPopup(std[i % std.length].amount, std[i % std.length].type); for (let i=0; i<Math.min(count*enh.length, MAX_ENHANCED_PER_CLICK); i++) showPopup(enh[i % enh.length].amount, enh[i % enh.length].type); }

function startAutoClickLoop() { clearTimeout(autoClickTimer); autoClickTimer = setTimeout(function tick(){ const gain = getEffectiveAutoClickPower(); if (gain > 0) addPoints(gain); autoClickTimer = setTimeout(tick, getAutoInterval()); }, getAutoInterval()); }
function startEnhancedAutoLoop() { clearInterval(enhancedAutoTimer); enhancedAutoTimer = null; if (state.enhancedAutoUnlocked) enhancedAutoTimer = setInterval(() => gainManual(false), ENHANCED_AUTO_INTERVAL); }
function getSkinIndex(id) { return SKIN_CONFIG.findIndex((skin) => skin.id === id); }
function processAutoSkin() {
  if (!state.autoBasicUnlocked || !state.autoBasicEnabled || !state.autoSkinEnabled) return false;
  const targetIndex = getSkinIndex(state.autoSkinTargetId);
  if (targetIndex <= 0) return false;
  let did = false;
  for (let i = 1; i <= targetIndex; i += 1) {
    const skin = SKIN_CONFIG[i];
    if (!skin || state.unlockedSkins.includes(skin.id)) continue;
    if (state.points < skin.cost) break;
    state.points -= skin.cost;
    state.unlockedSkins.push(skin.id);
    unlockAchievement("skinBuy");
    state.equippedSkin = skin.id;
    did = true;
  }
  const bestOwnedIndex = Math.max(...state.unlockedSkins.map(getSkinIndex).filter((i) => i >= 0 && i <= targetIndex));
  if (bestOwnedIndex >= 0 && state.equippedSkin !== SKIN_CONFIG[bestOwnedIndex].id) {
    state.equippedSkin = SKIN_CONFIG[bestOwnedIndex].id;
    did = true;
  }
  return did;
}
function processAutoBasic() {
  if (!state.autoBasicUnlocked || !state.autoBasicEnabled) return;
  let purchases = 0, did = false;
  for (const key of BASIC_KEYS) {
    const s = state.autoBasicSettings[key]; if (!s.enabled) continue;
    while (state.basicLevels[key] < s.targetLevel && canBuyBasic(key, {source:"auto"}) && purchases < AUTO_BASIC_PURCHASES_PER_TICK) { if (!buyBasic(key, {save:false, render:false, source:"auto"})) break; purchases++; did = true; }
    if (purchases >= AUTO_BASIC_PURCHASES_PER_TICK) break;
  }
  if (processAutoSkin()) did = true;
  if (did) { restartLoops(); updateScreen(); saveGame(false); }
}
function startAutoBasicLoop() { clearInterval(autoBasicTimer); autoBasicTimer = setInterval(processAutoBasic, AUTO_BASIC_INTERVAL); }
function restartLoops() { startAutoClickLoop(); startEnhancedAutoLoop(); }

function openPanel(panel) {
  removeLuckyPotato();
  initialRender();
  [els.upgradePanel, els.cookingUpgradePanel, els.statsPanel, els.achievementPanel, els.skinPanel, els.recipePanel].forEach((p) => {
    if (!p) return;
    p.classList.remove("open");
    p.setAttribute("aria-hidden", "true");
  });
  panel.classList.add("open");
  els.panelOverlay.classList.add("show");
  panel.setAttribute("aria-hidden", "false");
}
function closePanels() {
  [els.upgradePanel, els.cookingUpgradePanel, els.statsPanel, els.achievementPanel, els.skinPanel, els.recipePanel].forEach((p) => {
    if (!p) return;
    p.classList.remove("open");
    p.setAttribute("aria-hidden", "true");
  });
  els.panelOverlay.classList.remove("show");
}
function toggleUpgradePanel() {
  if (currentView === "cooking" && isCookingRunning()) return;
  const panel = currentView === "cooking" ? els.cookingUpgradePanel : els.upgradePanel;
  panel.classList.contains("open") ? closePanels() : openPanel(panel);
}

function setActiveView(view) {
  currentView = view === "trial" ? "trial" : view === "cooking" ? "cooking" : "game";
  viewScrollAccum = 0;
  if (currentView !== "game") removeLuckyPotato();
  document.body.classList.toggle("trial-view-active", currentView === "trial");
  document.body.classList.toggle("cooking-view-active", currentView === "cooking");
  if (els.trialScreen) els.trialScreen.setAttribute("aria-hidden", currentView === "trial" ? "false" : "true");
  if (els.cookingArea) els.cookingArea.setAttribute("aria-hidden", currentView === "cooking" ? "false" : "true");
}
function transitionToView(view) {
  if (currentView === "cooking") return;
  const targetView = view === "trial" ? "trial" : "game";
  if (targetView === currentView || document.body.classList.contains("view-fade-active")) return;
  const transitionClass = targetView === "trial" ? "view-fade-to-trial" : "view-fade-to-game";
  viewScrollAccum = 0;
  clearTimeout(viewTransitionTimer);
  clearTimeout(viewTransitionCleanupTimer);
  document.body.classList.remove("view-fade-to-trial", "view-fade-to-game");
  document.body.classList.add("view-fade-active", transitionClass);
  viewTransitionTimer = setTimeout(() => setActiveView(targetView), VIEW_TRANSITION_SWITCH_DELAY);
  viewTransitionCleanupTimer = setTimeout(() => {
    document.body.classList.remove("view-fade-active", "view-fade-to-trial", "view-fade-to-game");
  }, VIEW_TRANSITION_DURATION);
}
function switchTrial(direction) {
  if (TRIAL_IDS.length <= 1 || state.activeTrialId) return;
  const currentIndex = Math.max(0, TRIAL_IDS.indexOf(selectedTrialId));
  const nextIndex = (currentIndex + direction + TRIAL_IDS.length) % TRIAL_IDS.length;
  selectedTrialId = TRIAL_IDS[nextIndex];
  if (els.trialCard) {
    els.trialCard.classList.remove("trial-slide-left", "trial-slide-right");
    void els.trialCard.offsetWidth;
    els.trialCard.classList.add(direction > 0 ? "trial-slide-left" : "trial-slide-right");
  }
  updateTrialDisplay();
}
function handleTrialDragStart(e) {
  if (state.activeTrialId || e.target?.closest?.("button,input,select,textarea")) return;
  const point = e.touches?.[0] || e;
  trialDragStartX = point.clientX;
  trialDragStartY = point.clientY;
}
function handleTrialDragEnd(e) {
  if (trialDragStartX === null || trialDragStartY === null) return;
  const changed = e.changedTouches?.[0] || e;
  const dx = changed.clientX - trialDragStartX;
  const dy = changed.clientY - trialDragStartY;
  trialDragStartX = null;
  trialDragStartY = null;
  if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 1.35) return;
  switchTrial(dx < 0 ? 1 : -1);
}
function canSwitchViewFromEvent(e) {
  const target = e.target;
  if (target?.closest?.(".side-panel.open, .modal-overlay, input, textarea, select")) return false;
  return true;
}
function handleViewWheel(e) {
  if (currentView === "cooking") return;
  if (!canSwitchViewFromEvent(e)) return;
  const delta = clampNumber(e.deltaY, 0, 1000);
  if (Math.abs(delta) < 8) return;
  if ((currentView === "game" && delta < 0) || (currentView === "trial" && delta > 0)) {
    viewScrollAccum = 0;
    return;
  }
  e.preventDefault();
  viewScrollAccum += delta;
  if (viewScrollAccum >= VIEW_SCROLL_THRESHOLD) transitionToView("trial");
  if (viewScrollAccum <= -VIEW_SCROLL_THRESHOLD) transitionToView("game");
}
function handleViewTouchStart(e) {
  if (currentView === "cooking") return;
  if (!canSwitchViewFromEvent(e)) return;
  viewTouchStartY = e.touches?.[0]?.clientY ?? null;
}
function handleViewTouchEnd(e) {
  if (currentView === "cooking") return;
  if (viewTouchStartY == null) return;
  const endY = e.changedTouches?.[0]?.clientY ?? viewTouchStartY;
  const delta = viewTouchStartY - endY;
  viewTouchStartY = null;
  if (Math.abs(delta) < VIEW_TOUCH_THRESHOLD) return;
  if (currentView === "game" && delta > 0) transitionToView("trial");
  else if (currentView === "trial" && delta < 0) transitionToView("game");
}

function buildAutoBasicRows() {
  els.autoBasicRows.innerHTML = "";
  BASIC_KEYS.forEach((key) => {
    const row = document.createElement("div"); row.className = "auto-basic-row";
    row.innerHTML = `<span>${BASIC_LABELS[key]}</span><label>目標 <input type="number" min="0" step="1" value="0" /></label><button class="mini-button" type="button">OFF</button>`;
    const input = row.querySelector("input"); const button = row.querySelector("button");
    input.addEventListener("input", () => { state.autoBasicSettings[key].targetLevel = Math.max(0, Math.floor(num(input.value, 0))); });
    input.addEventListener("change", () => { state.autoBasicSettings[key].targetLevel = Math.max(0, Math.floor(num(input.value, 0))); saveGame(); updateScreen(); });
    input.addEventListener("blur", () => { state.autoBasicSettings[key].targetLevel = Math.max(0, Math.floor(num(input.value, 0))); saveGame(); updateScreen(); });
    button.addEventListener("click", () => { if (!state.autoBasicUnlocked) return; state.autoBasicSettings[key].enabled = !state.autoBasicSettings[key].enabled; updateScreen(); saveGame(true); });
    els.autoBasicRows.append(row); autoBasicControls[key] = {input, button};
  });
  if (els.autoSkinTargetSelect) {
    els.autoSkinTargetSelect.innerHTML = SKIN_CONFIG.map((skin) => `<option value="${skin.id}">${skin.name}まで</option>`).join("");
    els.autoSkinTargetSelect.addEventListener("change", () => { state.autoSkinTargetId = els.autoSkinTargetSelect.value; updateScreen(); saveGame(true); });
  }
}
function buildDebugFields() {
  const fields = [
    ["points","所持ポイント"],["prestigePoints","高級ポイント"],["bigBangPoints","BBポイント"],["prestigeResetCount","リセット回数"],["bigBangCount","ジャガイモビックバン回数"],
    ...BASIC_KEYS.map((k) => [`basic:${k}`, `基本 ${BASIC_LABELS[k]}`]),
    ...PRESTIGE_TYPES.map((k) => [`prestige:${k}`, `高級 ${PRESTIGE_LABELS[k]}`]),
    ["bb:normal","BB 通常ポイント倍率"],["bb:prestige","BB 高級ポイント倍率"],["bb:gain","BBポイント獲得量"],["bb:robotMk2","BB お料理ロボMk2"],["bb:initial","BB 基本初期値"]
  ];
  els.debugFields.innerHTML = "";
  fields.forEach(([key,label]) => {
    const d = document.createElement("label"); d.className = "debug-field"; d.innerHTML = `<span>${label}</span><input data-debug-key="${key}" type="number" step="1" />`; els.debugFields.append(d);
  });
}
function openDebugModal() { fillDebugFields(); els.debugModal.classList.remove("hidden"); }
function closeDebugModal() { els.debugModal.classList.add("hidden"); }
function fillDebugFields() {
  els.debugFields.querySelectorAll("input").forEach((input) => {
    const key = input.dataset.debugKey;
    if (key === "points") input.value = Math.floor(state.points);
    else if (key === "prestigePoints") input.value = Math.floor(state.prestigePoints);
    else if (key === "bigBangPoints") input.value = Math.floor(state.bigBangPoints);
    else if (key === "prestigeResetCount") input.value = Math.floor(state.prestigeResetCount);
    else if (key === "bigBangCount") input.value = Math.floor(state.bigBangCount);
    else if (key.startsWith("basic:")) input.value = state.basicLevels[key.split(":")[1]];
    else if (key.startsWith("prestige:")) input.value = prestigeLevel(key.split(":")[1]);
    else if (key === "bb:normal") input.value = state.bbNormalMultiplierLevel;
    else if (key === "bb:prestige") input.value = state.bbPrestigeMultiplierLevel;
    else if (key === "bb:gain") input.value = state.bbPointGainLevel;
    else if (key === "bb:robotMk2") input.value = state.bbCookingRobotMk2Unlocked ? 1 : 0;
    else if (key === "bb:initial") input.value = state.bbInitialLevelBonus;
  });
}
function applyDebugFields() {
  els.debugFields.querySelectorAll("input").forEach((input) => {
    const key = input.dataset.debugKey; const v = Math.max(0, Math.floor(num(input.value, 0)));
    if (key === "points") state.points = v;
    else if (key === "prestigePoints") state.prestigePoints = v;
    else if (key === "bigBangPoints") state.bigBangPoints = v;
    else if (key === "prestigeResetCount") state.prestigeResetCount = v;
    else if (key === "bigBangCount") { state.bigBangCount = v; state.bbAllMultiplier = 1 + v * 0.1; }
    else if (key.startsWith("basic:")) { const k = key.split(":")[1]; state.basicLevels[k] = v; }
    else if (key.startsWith("prestige:")) setPrestigeDebugLevel(key.split(":")[1], v);
    else if (key === "bb:normal") state.bbNormalMultiplierLevel = v;
    else if (key === "bb:prestige") state.bbPrestigeMultiplierLevel = v;
    else if (key === "bb:gain") state.bbPointGainLevel = v;
    else if (key === "bb:robotMk2") state.bbCookingRobotMk2Unlocked = v > 0;
    else if (key === "bb:initial") {
      state.bbInitialLevelBonus = Math.min(BB_BASIC_INITIAL_MAX, v);
      const initialLevel = getTotalBasicInitialLevelBonus();
      BASIC_KEYS.forEach((k) => {
        state.basicLevels[k] = Math.max(state.basicLevels[k], initialLevel);
        state.basicPurchaseCounts[k] = Math.max(state.basicPurchaseCounts[k] || 0, state.basicLevels[k]);
      });
    }
  });
  restartLoops(); updateScreen(); saveGame(true); closeDebugModal();
}
function setPrestigeDebugLevel(type, v) {
  state.prestigePurchaseCounts[type] = v;
  if (type === "enhancedAuto") state.enhancedAutoUnlocked = v > 0;
  if (type === "enhancedBonus") state.enhancedBonusUnlocked = v > 0;
  if (type === "initialLevel") {
    state.basicInitialLevelBonus = Math.min(BASIC_INITIAL_MAX, v * BASIC_INITIAL_INCREMENT);
    const initialLevel = getTotalBasicInitialLevelBonus();
    BASIC_KEYS.forEach((k) => {
      state.basicLevels[k] = Math.max(state.basicLevels[k], initialLevel);
      state.basicPurchaseCounts[k] = Math.max(state.basicPurchaseCounts[k] || 0, state.basicLevels[k]);
    });
  }
  if (type === "prestigeBasicMultiplier") state.prestigeBasicMultiplier = getPrestigeBasicMultiplierForLevel(v);
  if (type === "costReduction") state.basicCostMultiplier = 0.9 ** v;
  if (type === "premiumAutoMultiplier") { state.premiumAutoLevel = v; state.premiumAutoMultiplier = v === 0 ? 1 : v * 10; }
  if (type === "manualFinalMultiplier") { state.manualFinalLevel = v; state.manualFinalMultiplier = v === 0 ? 1 : 1 + v * 0.5; }
  if (type === "autoPrestige") { state.autoPrestigeUnlocked = v > 0; state.autoPrestigeEnabled = state.autoPrestigeEnabled && state.autoPrestigeUnlocked; }
  if (type === "cookingUnlock") { state.cookingUnlocked = v > 0; if (state.cookingUnlocked) syncCookingRecipeUnlocks(); }
  if (type === "autoBasicUpgrade") { state.autoBasicUnlocked = v > 0; state.autoBasicEnabled = state.autoBasicEnabled && state.autoBasicUnlocked; }
  if (type === "prestigePointGain") state.prestigePointGainLevel = v;
}
function handleKeydown(e) {
  if (handleCookingKeydown(e)) return;
  if (currentView === "cooking" && isCookingRunning()) {
    if (e.key === "Tab") e.preventDefault();
    return;
  }
  const tag = document.activeElement?.tagName;
  const typing = tag === "INPUT" || tag === "TEXTAREA" || document.activeElement?.isContentEditable;
  if (e.key === "Tab" && !typing && !els.debugModal.classList.contains("hidden")) return;
  if (e.key === "Tab" && !typing) { e.preventDefault(); toggleUpgradePanel(); return; }
  if (e.repeat) return;
  if (!e.shiftKey) { debugProgress = ""; return; }
  const key = e.key.toUpperCase(); if (!/^[A-Z]$/.test(key)) return;
  const expected = DEBUG_COMMAND[debugProgress.length];
  if (key === expected) { debugProgress += key; if (debugProgress === DEBUG_COMMAND) { debugProgress = ""; openDebugModal(); } return; }
  debugProgress = key === DEBUG_COMMAND[0] ? key : "";
}


function markOfflineLeftAt() {
  if (saveDisabled) return;
  const now = Date.now();
  try {
    localStorage.setItem(OFFLINE_LEFT_AT_KEY, String(now));
  } catch (e) { console.error(e); }
  saveGame(false, { savedAt:new Date(now).toISOString() });
}

function clearFalseOfflineStart() {
  // ページが表示中に自動保存された時間はオフライン報酬に使わない。
  // ただし、未受け取り報酬が出ている場合は古い離脱時刻を残す。
  if (pendingOfflineReward) return;
  const now = Date.now();
  const leftAt = Number(localStorage.getItem(OFFLINE_LEFT_AT_KEY) || 0);
  if (Number.isFinite(leftAt) && now - leftAt < OFFLINE_MINIMUM_MS) {
    try { localStorage.removeItem(OFFLINE_LEFT_AT_KEY); } catch (e) { console.error(e); }
  }
}

function bindEvents() {
  els.potatoButton.addEventListener("click", () => gainManual(true));
  if (els.claimOfflineRewardButton) els.claimOfflineRewardButton.addEventListener("click", claimOfflineReward);
  Object.entries(UPGRADE_BUY_MODE_BUTTONS).forEach(([mode, id]) => {
    if (els[id]) els[id].addEventListener("click", () => setUpgradeBuyMode(mode));
  });
  BASIC_KEYS.forEach((k) => basicEls[k].button.addEventListener("click", () => buyBasic(k)));
  $("prestigeResetButton").addEventListener("click", executePrestigeReset);
  $("prestigeEnhancedAutoButton").addEventListener("click", () => buyPrestige("enhancedAuto"));
  $("prestigeEnhancedBonusButton").addEventListener("click", () => buyPrestige("enhancedBonus"));
  $("prestigeInitialLevelButton").addEventListener("click", () => buyPrestige("initialLevel"));
  $("prestigeBasicMultiplierButton").addEventListener("click", () => buyPrestige("prestigeBasicMultiplier"));
  $("prestigeCostReductionButton").addEventListener("click", () => buyPrestige("costReduction"));
  $("prestigePremiumAutoMultiplierButton").addEventListener("click", () => buyPrestige("premiumAutoMultiplier"));
  $("prestigeManualFinalMultiplierButton").addEventListener("click", () => buyPrestige("manualFinalMultiplier"));
  $("prestigeAutoResetButton").addEventListener("click", () => buyPrestige("autoPrestige"));
  $("prestigeCookingUnlockButton").addEventListener("click", () => buyPrestige("cookingUnlock"));
  $("prestigeAutoBasicUpgradeButton").addEventListener("click", () => buyPrestige("autoBasicUpgrade"));
  $("prestigePointGainButton").addEventListener("click", () => buyPrestige("prestigePointGain"));
  $("toggleAutoPrestigeButton").addEventListener("click", () => { if (!state.autoPrestigeUnlocked) return; state.autoPrestigeEnabled = !state.autoPrestigeEnabled; updateScreen(); saveGame(true); checkAutoPrestige(); });
  els.autoPrestigeTargetInput.addEventListener("input", () => { state.autoPrestigeTarget = Math.max(1, Math.floor(num(els.autoPrestigeTargetInput.value, 1))); });
  els.autoPrestigeTargetInput.addEventListener("change", () => { state.autoPrestigeTarget = Math.max(1, Math.floor(num(els.autoPrestigeTargetInput.value, 1))); updateScreen(); saveGame(true); checkAutoPrestige(); });
  $("toggleAutoBasicUpgradeButton").addEventListener("click", () => { if (!state.autoBasicUnlocked) return; state.autoBasicEnabled = !state.autoBasicEnabled; updateScreen(); saveGame(true); });
  if (els.toggleAutoSkinButton) els.toggleAutoSkinButton.addEventListener("click", () => { if (!state.autoBasicUnlocked) return; state.autoSkinEnabled = !state.autoSkinEnabled; updateScreen(); saveGame(true); });
  if (els.startTrialButton) els.startTrialButton.addEventListener("click", () => startTrial(getSelectedTrial().id));
  if (els.trialPrevButton) els.trialPrevButton.addEventListener("click", () => switchTrial(-1));
  if (els.trialNextButton) els.trialNextButton.addEventListener("click", () => switchTrial(1));
  if (els.trialScreen) {
    els.trialScreen.addEventListener("pointerdown", handleTrialDragStart);
    els.trialScreen.addEventListener("pointerup", handleTrialDragEnd);
    els.trialScreen.addEventListener("touchstart", handleTrialDragStart, {passive:true});
    els.trialScreen.addEventListener("touchend", handleTrialDragEnd, {passive:true});
  }
  if (els.abortTrialButton) els.abortTrialButton.addEventListener("click", abortTrial);
  $("bigBangResetButton").addEventListener("click", executeBigBangReset);
  $("bigBangNormalMultiplierButton").addEventListener("click", () => buyBigBang("normal"));
  $("bigBangPrestigeMultiplierButton").addEventListener("click", () => buyBigBang("prestige"));
  $("bigBangPointGainButton").addEventListener("click", () => buyBigBang("gain"));
  $("bigBangCookingRobotMk2Button").addEventListener("click", () => buyBigBang("cookingRobotMk2"));
  $("bigBangInitialLevelButton").addEventListener("click", () => buyBigBang("initialLevel"));
  $("manualSaveButton").addEventListener("click", () => saveGame(true));
  $("deleteSaveButton").addEventListener("click", deleteSaveData);
  els.menuButton.addEventListener("click", toggleUpgradePanel);
  els.statsButton.addEventListener("click", () => openPanel(els.statsPanel));
  els.achievementButton.addEventListener("click", () => openPanel(els.achievementPanel));
  if (els.cookingTabButton) els.cookingTabButton.addEventListener("click", () => { if (state.cookingUnlocked) setCookingView(currentView !== "cooking"); });
  if (els.startCookingButton) els.startCookingButton.addEventListener("click", startCooking);
  if (els.returnGameButton) els.returnGameButton.addEventListener("click", () => setCookingView(false));
  els.skinButton.addEventListener("click", () => {
    if (currentView === "cooking") {
      if (state.cookingUnlocked && !isCookingRunning()) openPanel(els.recipePanel);
      return;
    }
    openPanel(els.skinPanel);
  });
  els.closePanelButton.addEventListener("click", closePanels);
  els.closeStatsButton.addEventListener("click", closePanels);
  els.closeAchievementButton.addEventListener("click", closePanels);
  els.closeSkinButton.addEventListener("click", closePanels);
  if (els.closeCookingUpgradeButton) els.closeCookingUpgradeButton.addEventListener("click", closePanels);
  if (els.closeRecipeButton) els.closeRecipeButton.addEventListener("click", closePanels);
  els.panelOverlay.addEventListener("click", closePanels);
  els.closeDebugButton.addEventListener("click", closeDebugModal);
  els.cancelDebugButton.addEventListener("click", closeDebugModal);
  els.applyDebugButton.addEventListener("click", applyDebugFields);
  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("pointerdown", handleCookingPointerDown);
  window.addEventListener("wheel", handleViewWheel, {passive:false});
  window.addEventListener("touchstart", handleViewTouchStart, {passive:true});
  window.addEventListener("touchend", handleViewTouchEnd, {passive:true});
  window.addEventListener("resize", removeLuckyPotato);
  window.addEventListener("pagehide", markOfflineLeftAt);
  window.addEventListener("beforeunload", markOfflineLeftAt);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") markOfflineLeftAt();
    else if (document.visibilityState === "visible") clearFalseOfflineStart();
    if (document.visibilityState === "hidden") { removeLuckyPotato(); removeCookingKey(); }
  });
}

function initialRender() {
  sanitizeState();
  migrateBasicCostsToCurrentGrowth();
  updateScreen();
  document.documentElement.classList.add("game-ready");
}

clearStaleGroundpetikaCustomImagesOnce(); buildAutoBasicRows(); buildDebugFields(); buildSkinList(); buildCookingUpgradeList(); buildRecipeList(); resetBasicUpgrades(); loadGame(); clearFalseOfflineStart(); checkAchievements({silent:true}); bindEvents(); restartLoops(); startAutoBasicLoop(); startLuckyPotatoLoop(); initialRender(); checkTrialCompletion();
requestAnimationFrame(initialRender);
setTimeout(initialRender, 0);
setTimeout(initialRender, 50);
window.addEventListener("pageshow", initialRender);
window.addEventListener("focus", initialRender);
setInterval(() => saveGame(false), AUTO_SAVE_INTERVAL);
setInterval(() => { if (cleanupCookingBuffs()) { updateScreen(); saveGame(false); } }, 1000);
