const $ = (id) => document.getElementById(id);

const els = {
  scoreArea: $("scoreArea"), mainScoreLabel: $("mainScoreLabel"), secondaryScoreArea: $("secondaryScoreArea"), secondaryScoreLabel: $("secondaryScoreLabel"), secondaryScoreText: $("secondaryScoreText"), pointText: $("pointText"), multiplierFormulaText: $("multiplierFormulaText"),
  menuButton: $("menuButton"), statsButton: $("statsButton"), achievementButton: $("achievementButton"), skinButton: $("skinButton"), closePanelButton: $("closePanelButton"), closeStatsButton: $("closeStatsButton"), closeAchievementButton: $("closeAchievementButton"), closeSkinButton: $("closeSkinButton"), upgradePanel: $("upgradePanel"), statsPanel: $("statsPanel"), achievementPanel: $("achievementPanel"), skinPanel: $("skinPanel"), panelOverlay: $("panelOverlay"), statsContent: $("statsContent"), achievementList: $("achievementList"), achievementSummaryText: $("achievementSummaryText"), achievementToastContainer: $("achievementToastContainer"), skinList: $("skinList"), currentSkinNameText: $("currentSkinNameText"), currentSkinMultiplierText: $("currentSkinMultiplierText"),
  potatoButton: $("potatoButton"), potatoImage: $("potatoImage"),
  debugModal: $("debugModal"), debugFields: $("debugFields"), closeDebugButton: $("closeDebugButton"), cancelDebugButton: $("cancelDebugButton"), applyDebugButton: $("applyDebugButton"),
  offlineRewardModal: $("offlineRewardModal"), offlineDurationText: $("offlineDurationText"), offlineCappedDurationText: $("offlineCappedDurationText"), offlineRewardText: $("offlineRewardText"), claimOfflineRewardButton: $("claimOfflineRewardButton"),
  saveStatusText: $("saveStatusText"), autoBasicRows: $("autoBasicRows"), autoSkinSettings: $("autoSkinSettings"), autoSkinTargetSelect: $("autoSkinTargetSelect"), toggleAutoSkinButton: $("toggleAutoSkinButton"), autoPrestigeTargetInput: $("autoPrestigeTargetInput"), autoPrestigeSettings: $("autoPrestigeSettings"),
};

const BASIC_KEYS = ["clickPower","clickCount","autoClick","autoInterval","autoMultiplier","bonusChance","bonusMultiplier","enhancedBonusChance","enhancedBonusMultiplier"];
const BASIC_LABELS = {
  clickPower:"クリック強化", clickCount:"クリック回数強化", autoClick:"オートクリック", autoInterval:"オート間隔短縮", autoMultiplier:"オートクリック倍加", bonusChance:"ボーナス確率", bonusMultiplier:"ボーナス倍率", enhancedBonusChance:"強化ボーナス確率", enhancedBonusMultiplier:"強化ボーナス倍率"
};
const BASIC_CONFIG = {
  clickPower:{baseCost:10,growth:1.62}, clickCount:{baseCost:72,growth:1.76}, autoClick:{baseCost:24,growth:1.7}, autoInterval:{baseCost:145,growth:1.66}, autoMultiplier:{baseCost:290,growth:2.0}, bonusChance:{baseCost:48,growth:1.58}, bonusMultiplier:{baseCost:96,growth:1.9}, enhancedBonusChance:{baseCost:480,growth:1.64}, enhancedBonusMultiplier:{baseCost:760,growth:1.95}
};
const PRESTIGE_TYPES = ["enhancedAuto","enhancedBonus","initialLevel","costReduction","premiumAutoMultiplier","manualFinalMultiplier","autoPrestige","autoBasicUpgrade","prestigePointGain"];
const PRESTIGE_BASE_COST = { enhancedAuto:1, enhancedBonus:1, initialLevel:1, costReduction:1, premiumAutoMultiplier:1, manualFinalMultiplier:1, autoPrestige:5, autoBasicUpgrade:10, prestigePointGain:1 };
const PRESTIGE_LABELS = { enhancedAuto:"強化オートクリック解放", enhancedBonus:"強化ボーナス解放", initialLevel:"基本初期値 +2", costReduction:"基本コスト 0.9倍", premiumAutoMultiplier:"オートクリック高級倍率", manualFinalMultiplier:"通常クリック最終倍率", autoPrestige:"自動リセット解放", autoBasicUpgrade:"基本アップグレード自動強化解放", prestigePointGain:"高級ポイント獲得量 +1" };

const SKIN_CONFIG = [
  { id:"default", name:"通常ジャガイモ", file:"potato.png", cost:0, multiplier:1 },
  { id:"haruka10", name:"はるか", file:"haruka 10.avif", cost:10_000, multiplier:1.2 },
  { id:"guraundopetika9", name:"グラウンドペチカ（デストロイヤー）", file:"guraundopetika (desutoroiya-) 9.avif", cost:40_000, multiplier:1.4 },
  { id:"tawarayo8", name:"タワラヨーデル", file:"tawarayo-deru 8.avif", cost:150_000, multiplier:1.7 },
  { id:"sinsia7", name:"シンシア", file:"sinsia 7.avif", cost:500_000, multiplier:2.1 },
  { id:"nozanrubi6", name:"ノーザンルビー", file:"no-zanrubi- 6.avif", cost:1_500_000, multiplier:2.6 },
  { id:"redmoon5", name:"レッドムーン", file:"redmoon 5.avif", cost:5_000_000, multiplier:3.2 },
  { id:"dansyaku4", name:"男爵", file:"dansyaku 4.avif", cost:15_000_000, multiplier:4 },
  { id:"kitaakari3", name:"キタアカリ", file:"kitaakari 3.avif", cost:50_000_000, multiplier:5 },
  { id:"mekuin2", name:"メークイン", file:"me-kuin 2.avif", cost:150_000_000, multiplier:6.5 },
  { id:"inkanomezame1", name:"インカのめざめ", file:"inkanomezame 1.avif", cost:500_000_000, multiplier:8.5 }
];


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
const BASIC_INITIAL_INCREMENT = 2;
const BASIC_INITIAL_MAX = 100;
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
const popupQueues = { standard: [], enhanced: [] };
const autoBasicControls = {};

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
  state.autoPrestigeTarget = Math.max(1, Math.floor(num(state.autoPrestigeTarget, 1)));
  BASIC_KEYS.forEach((k) => {
    state.basicLevels[k] = Math.max(0, Math.floor(num(state.basicLevels?.[k], 0)));
    state.basicCosts[k] = Math.max(1, num(state.basicCosts?.[k], getInitialBasicCost(k)));
    const s = state.autoBasicSettings?.[k] || {};
    state.autoBasicSettings[k] = { enabled:s.enabled === true, targetLevel:Math.max(0, Math.floor(num(s.targetLevel, 0))) };
  });
  PRESTIGE_TYPES.forEach((k) => { state.prestigePurchaseCounts[k] = Math.max(0, Math.floor(num(state.prestigePurchaseCounts?.[k], 0))); });
  const validSkinIds = SKIN_CONFIG.map((skin) => skin.id);
  const loadedSkins = Array.isArray(state.unlockedSkins) ? state.unlockedSkins : ["default"];
  state.unlockedSkins = Array.from(new Set(["default", ...loadedSkins.filter((id) => validSkinIds.includes(id))]));
  if (!validSkinIds.includes(state.equippedSkin) || !state.unlockedSkins.includes(state.equippedSkin)) state.equippedSkin = "default";
  if (!validSkinIds.includes(state.autoSkinTargetId)) state.autoSkinTargetId = "default";
  state.autoSkinEnabled = state.autoSkinEnabled === true;
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
}

function safeCloneForSave(obj) {
  return JSON.parse(JSON.stringify(obj, (key, value) => {
    if (typeof value === "number") return clampNumber(value, 0, MAX_GAME_NUMBER);
    return value;
  }));
}

function getInitialBasicCost(key) { return Math.max(1, Math.floor(safeMultiply(BASIC_CONFIG[key].baseCost, state.basicCostMultiplier))); }
function getNextBasicCost(key, cost) { return Math.max(1, Math.min(MAX_GAME_NUMBER, Math.floor(safeMultiply(cost, BASIC_CONFIG[key].growth)), Math.ceil(safeMultiply(cost, 1.1)))); }
function resetBasicUpgrades() { BASIC_KEYS.forEach((k) => { state.basicLevels[k] = state.basicInitialLevelBonus; state.basicCosts[k] = getInitialBasicCost(k); }); }
function resetSkins() { state.unlockedSkins = ["default"]; state.equippedSkin = "default"; }
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
}
function resetAll() { assignState(createInitialState()); resetBasicUpgrades(); clearPopups(); pendingOfflineReward = null; if (els.offlineRewardModal) els.offlineRewardModal.classList.add("hidden"); hidePrestigeTopDisplay(); restartLoops(); updateScreen(); }

function getClickPower() { return 1 + state.basicLevels.clickPower; }
function getClickCount() { return 1 + state.basicLevels.clickCount; }
function getAutoClickBase() { return state.basicLevels.autoClick; }
function getAutoMultiplier() { return 1 + state.basicLevels.autoMultiplier; }
function getAutoInterval() { return Math.max(MIN_AUTO_INTERVAL, Math.round(1000 * AUTO_INTERVAL_REDUCTION ** state.basicLevels.autoInterval)); }
function getBonusChance() { return Math.min(MAX_BONUS_CHANCE, BONUS_CHANCE_BASE + state.basicLevels.bonusChance * BONUS_CHANCE_PER_LEVEL); }
function getBonusMultiplier() { return BONUS_MULT_BASE + state.basicLevels.bonusMultiplier * BONUS_MULT_PER_LEVEL; }
function getEnhancedBonusChance() { return Math.min(MAX_BONUS_CHANCE, ENHANCED_BONUS_CHANCE_BASE + state.basicLevels.enhancedBonusChance * ENHANCED_BONUS_CHANCE_PER_LEVEL); }
function getEnhancedBonusMultiplier() { return ENHANCED_BONUS_MULT_BASE + state.basicLevels.enhancedBonusMultiplier * ENHANCED_BONUS_MULT_PER_LEVEL; }
function getBbNormalMultiplier() { return 1 + state.bbNormalMultiplierLevel * 100; }
function getBbPrestigeMultiplier() { return 1 + state.bbPrestigeMultiplierLevel * 10; }
function getSkinConfig(id = state.equippedSkin) { return SKIN_CONFIG.find((skin) => skin.id === id) || SKIN_CONFIG[0]; }
function getSkinMultiplier() { return getSkinConfig().multiplier; }
function getAchievementMultiplier() { return 1 + ACHIEVEMENTS.reduce((sum, a) => sum + (state.achievements?.[a.id] ? a.reward : 0), 0); }
function getAchievementBonusMultiplierPart() { return Math.max(0, getAchievementMultiplier() - 1); }
function getCombinedPrestigeAchievementBasicMultiplier() { return safeAdd(state.prestigeBasicMultiplier, getAchievementBonusMultiplierPart()); }
function getNormalPointMultiplier() { return safeMultiply(getCombinedPrestigeAchievementBasicMultiplier(), state.bbAllMultiplier, getBbNormalMultiplier(), getSkinMultiplier()); }
function getPrestigePointMultiplier() { return safeMultiply(state.bbAllMultiplier, getBbPrestigeMultiplier()); }
function getPrestigeGainPerReset() { return Math.max(1, Math.floor(safeMultiply(1 + state.prestigePointGainLevel, getPrestigePointMultiplier()))); }
function getBigBangGainPerReset() { return 1 + state.bbPointGainLevel; }
function getEffectiveAutoClickPower() { return safeMultiply(getAutoClickBase(), getAutoMultiplier(), state.premiumAutoMultiplier, getNormalPointMultiplier()); }
function getNextPremiumAutoMultiplier() { return state.premiumAutoLevel === 0 ? 10 : state.premiumAutoMultiplier + 10; }
function getNextManualFinalMultiplier() { return state.manualFinalLevel === 0 ? 1.5 : state.manualFinalMultiplier + 0.5; }
function getPrestigeCost(type) {
  if (type === "prestigePointGain") return Math.max(1, Math.floor(getPrestigeGainPerReset() * (state.prestigePointGainLevel / 2)));
  return (PRESTIGE_BASE_COST[type] || 1) + Math.floor((state.prestigePurchaseCounts[type] || 0) / 2);
}
function getBbPointGainCost() { return Math.max(1, Math.floor(getBigBangGainPerReset() / 1.25 + state.bbPointGainLevel)); }

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
  if (location.protocol === "file:") {
    // file:// では同じオリジン扱いの古いテストデータが残りやすいため、
    // 二重確認後の初期化では localStorage 全体をクリアする。
    try { localStorage.clear(); } catch (e) { console.error(e); }
  }
  OLD_SAVE_KEYS.forEach((key) => {
    localStorage.removeItem(key);
    localStorage.removeItem(`${key}_status`);
  });
  localStorage.removeItem(SAVE_KEY);
  localStorage.removeItem(`${SAVE_KEY}_status`);
}

function createSaveData(options = {}) {
  sanitizeState();
  const savedAt = options.savedAt || new Date().toISOString();
  state.lastSavedAt = savedAt;
  return safeCloneForSave({ version:8, savedAt, ...state });
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
  updateTopScore(); updateBasicDisplay(); updatePrestigeDisplay(); updateAutoBasicDisplay(); updateBigBangDisplay(); updateSkinDisplay(); updateAchievementDisplay(); updateStats();
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
  els.multiplierFormulaText.textContent = `*${fmtMult(getCombinedPrestigeAchievementBasicMultiplier())} *${fmtMult(state.bbAllMultiplier)} *${fmtMult(getSkinMultiplier())}`;
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
    if (basicEls[k].level) basicEls[k].level.textContent = fmt(state.basicLevels[k]);
    if (basicEls[k].cost) basicEls[k].cost.textContent = fmt(state.basicCosts[k]);
    if (basicEls[k].button) basicEls[k].button.disabled = !canBuyBasic(k);
  });
}
function prestigeLevel(type) {
  if (type === "enhancedAuto") return state.enhancedAutoUnlocked ? 1 : 0;
  if (type === "enhancedBonus") return state.enhancedBonusUnlocked ? 1 : 0;
  if (type === "initialLevel") return Math.floor(state.basicInitialLevelBonus / BASIC_INITIAL_INCREMENT);
  if (type === "costReduction") return state.prestigePurchaseCounts.costReduction || 0;
  if (type === "premiumAutoMultiplier") return state.premiumAutoLevel;
  if (type === "manualFinalMultiplier") return state.manualFinalLevel;
  if (type === "autoPrestige") return state.autoPrestigeUnlocked ? 1 : 0;
  if (type === "autoBasicUpgrade") return state.autoBasicUnlocked ? 1 : 0;
  if (type === "prestigePointGain") return state.prestigePointGainLevel;
  return 0;
}
function updatePrestigeDisplay() {
  $("prestigeCostText").textContent = fmt(PRESTIGE_COST);
  const resetPossible = Math.floor(state.points / PRESTIGE_COST);
  $("prestigeResetButton").disabled = resetPossible < 1;
  $("prestigeResetButton").textContent = resetPossible >= 1 ? `高級リセット ${fmt(resetPossible)}回 / 高級ポイント +${fmt(resetPossible * getPrestigeGainPerReset())}` : `高級リセットまで ${fmt(PRESTIGE_COST - state.points)} ポイント`;
  const buttonMap = { enhancedAuto:"prestigeEnhancedAutoButton", enhancedBonus:"prestigeEnhancedBonusButton", initialLevel:"prestigeInitialLevelButton", costReduction:"prestigeCostReductionButton", premiumAutoMultiplier:"prestigePremiumAutoMultiplierButton", manualFinalMultiplier:"prestigeManualFinalMultiplierButton", autoPrestige:"prestigeAutoResetButton", autoBasicUpgrade:"prestigeAutoBasicUpgradeButton", prestigePointGain:"prestigePointGainButton" };
  PRESTIGE_TYPES.forEach((type) => {
    const b = $(buttonMap[type]); const cost = getPrestigeCost(type); const level = prestigeLevel(type);
    let extra = "";
    if (type === "initialLevel") extra = ` 現在+${fmt(state.basicInitialLevelBonus)}/${BASIC_INITIAL_MAX}`;
    if (type === "premiumAutoMultiplier") extra = ` 次:${fmtMult(getNextPremiumAutoMultiplier())}倍`;
    if (type === "manualFinalMultiplier") extra = ` 次:${fmtMult(getNextManualFinalMultiplier())}倍`;
    if (type === "prestigePointGain") extra = ` 現在:${fmt(getPrestigeGainPerReset())}/回`;
    b.textContent = `Lv.${fmt(level)} ${PRESTIGE_LABELS[type]}${extra} / 高級ポイント ${fmt(cost)}`;
    b.disabled = state.prestigePoints < cost || (type === "enhancedAuto" && state.enhancedAutoUnlocked) || (type === "enhancedBonus" && state.enhancedBonusUnlocked) || (type === "autoPrestige" && state.autoPrestigeUnlocked) || (type === "autoBasicUpgrade" && state.autoBasicUnlocked) || (type === "initialLevel" && state.basicInitialLevelBonus >= BASIC_INITIAL_MAX);
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
  const possible = Math.floor(state.prestigePoints / BIG_BANG_COST);
  $("bigBangResetButton").disabled = possible < 1;
  $("bigBangResetButton").textContent = possible >= 1 ? `ジャガイモビックバン ${fmt(possible)}回 / BBポイント +${fmt(possible * getBigBangGainPerReset())}` : `ビックバンまで高級ポイント ${fmt(Math.max(0, BIG_BANG_COST - state.prestigePoints))}`;
  $("bigBangNormalMultiplierButton").textContent = `Lv.${fmt(state.bbNormalMultiplierLevel)} 通常ポイント倍率 +100倍 / BBポイント 1`;
  $("bigBangPrestigeMultiplierButton").textContent = `Lv.${fmt(state.bbPrestigeMultiplierLevel)} 高級ポイント倍率 +10倍 / BBポイント 1`;
  const bbCost = getBbPointGainCost();
  $("bigBangPointGainButton").textContent = `Lv.${fmt(state.bbPointGainLevel)} BBポイント獲得量 +1 現在:${fmt(getBigBangGainPerReset())} / BBポイント ${fmt(bbCost)}`;
  $("bigBangNormalMultiplierButton").disabled = state.bigBangPoints < 1;
  $("bigBangPrestigeMultiplierButton").disabled = state.bigBangPoints < 1;
  $("bigBangPointGainButton").disabled = state.bigBangPoints < bbCost;
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
      ${statRow("高級全基本ポイント倍率", `${fmtMult(getCombinedPrestigeAchievementBasicMultiplier())}倍`)}${statRow("内訳: 高級リセット分", `${fmtMult(state.prestigeBasicMultiplier)}倍`)}${statRow("内訳: アチーブメント加算分", `+${fmtMult(getAchievementBonusMultiplierPart())}`)}${statRow("BB全基本・高級ポイント倍率", `${fmtMult(state.bbAllMultiplier)}倍`)}${statRow("スキン基本ポイント倍率", `${fmtMult(getSkinMultiplier())}倍`)}${statRow("装備中スキン", getSkinConfig().name)}${statRow("スキン自動購入", state.autoSkinEnabled ? `ON / 目標:${getSkinConfig(state.autoSkinTargetId).name}` : "OFF")}${statRow("通常ポイントBB倍率", `${fmtMult(getBbNormalMultiplier())}倍`)}${statRow("高級ポイントBB倍率", `${fmtMult(getBbPrestigeMultiplier())}倍`)}${statRow("高級オート倍率", `${fmtMult(state.premiumAutoMultiplier)}倍`)}${statRow("通常クリック最終倍率", `${fmtMult(state.manualFinalMultiplier)}倍`)}
    </div></div>
    <div class="stat-group"><h3>解放状態</h3><div class="stat-grid">
      ${statRow("強化オートクリック", state.enhancedAutoUnlocked ? "解放済み" : "未解放")}${statRow("強化ボーナス", state.enhancedBonusUnlocked ? "解放済み" : "未解放")}${statRow("自動リセット", state.autoPrestigeUnlocked ? (state.autoPrestigeEnabled ? `ON / ${fmt(state.autoPrestigeTarget)}回単位` : "OFF") : "未解放")}${statRow("基本自動強化", state.autoBasicUnlocked ? (state.autoBasicEnabled ? "ON" : "OFF") : "未解放")}${statRow("基本初期値", `+${fmt(state.basicInitialLevelBonus)}`)}${statRow("基本コスト倍率", `${fmtPct(state.basicCostMultiplier)}%`)}
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
  return safeMultiply(getClickPower(), getClickCount(), getNormalPointMultiplier(), state.manualFinalMultiplier);
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
  if (!savedAt) return;
  const savedTime = new Date(savedAt).getTime();
  const claimedUntil = Number(localStorage.getItem(OFFLINE_CLAIMED_UNTIL_KEY) || 0);
  if (!Number.isFinite(savedTime)) return;
  const baseTime = Math.max(savedTime, Number.isFinite(claimedUntil) ? claimedUntil : 0);
  const elapsedMs = Date.now() - baseTime;
  if (elapsedMs < OFFLINE_MINIMUM_MS) return;
  const result = calculateOfflineReward(elapsedMs);
  if (result.rewardMinutes < 1 || result.reward <= 0) return;
  pendingOfflineReward = { ...result, savedAt, claimed:false };
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
  try { localStorage.setItem(OFFLINE_CLAIMED_UNTIL_KEY, String(now)); } catch (e) { console.error(e); }
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
  checkAchievements(); updateScreen(); checkAutoPrestige();
}
function showPrestigeTopDisplay() { if (state.prestigePoints <= PRESTIGE_TOP_DISPLAY_THRESHOLD) return; prestigeTopActive = true; clearTimeout(prestigeTopTimer); prestigeTopTimer = setTimeout(() => { prestigeTopActive = false; updateScreen(); }, PRESTIGE_TOP_DISPLAY_DURATION); }
function hidePrestigeTopDisplay() { prestigeTopActive = false; clearTimeout(prestigeTopTimer); prestigeTopTimer = null; }
function canBuyBasic(key) {
  if (state.points < state.basicCosts[key]) return false;
  if ((key === "enhancedBonusChance" || key === "enhancedBonusMultiplier") && !state.enhancedBonusUnlocked) return false;
  if (key === "bonusChance" && getBonusChance() >= MAX_BONUS_CHANCE) return false;
  if (key === "enhancedBonusChance" && getEnhancedBonusChance() >= MAX_BONUS_CHANCE) return false;
  if (key === "autoInterval" && getAutoInterval() <= MIN_AUTO_INTERVAL) return false;
  return true;
}
function buyBasic(key, options={}) {
  if (!canBuyBasic(key)) return false;
  state.points = clampPositive(state.points - state.basicCosts[key], 0); state.basicLevels[key] = clampInteger(state.basicLevels[key] + 1, 0, MAX_LEVEL); state.basicPurchaseCounts[key] = clampInteger((state.basicPurchaseCounts[key] || 0) + 1, 0, MAX_GAME_NUMBER); state.totalBasicUpgradePurchases = clampInteger(state.totalBasicUpgradePurchases + 1, 0, MAX_GAME_NUMBER); state.basicCosts[key] = getNextBasicCost(key, state.basicCosts[key]);
  if (key === "autoInterval") startAutoClickLoop();
  updateScreen(); if (options.save !== false) saveGame(); return true;
}
function calculateClickGain() {
  const manualMultiplier = getNormalPointMultiplier() * state.manualFinalMultiplier;
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
  const count = Math.min(MAX_RESET_BULK_COUNT, Math.floor(clampPositive(state.points, 0) / PRESTIGE_COST)); if (count < 1) return;
  const now = Date.now();

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
  state.prestigeBasicMultiplier = Math.max(1, safeAdd(state.prestigeBasicMultiplier, safeMultiply(0.01, count)));
  resetBasicUpgrades(); resetSkins(); restartLoops(); showPrestigeTopDisplay(); checkAchievements(); updateScreen(); saveGame(true);
}
function checkAutoPrestige() {
  if (!state.autoPrestigeUnlocked || !state.autoPrestigeEnabled) return;
  if (Math.floor(state.points / PRESTIGE_COST) >= state.autoPrestigeTarget) executePrestigeReset();
}
function buyPrestige(type) {
  const cost = getPrestigeCost(type); if (state.prestigePoints < cost) return;
  if ((type === "enhancedAuto" && state.enhancedAutoUnlocked) || (type === "enhancedBonus" && state.enhancedBonusUnlocked) || (type === "autoPrestige" && state.autoPrestigeUnlocked) || (type === "autoBasicUpgrade" && state.autoBasicUnlocked)) return;
  if (type === "initialLevel" && state.basicInitialLevelBonus >= BASIC_INITIAL_MAX) return;
  state.prestigePoints -= cost; state.prestigePurchaseCounts[type] += 1;
  if (type === "enhancedAuto") state.enhancedAutoUnlocked = true;
  if (type === "enhancedBonus") state.enhancedBonusUnlocked = true;
  if (type === "initialLevel") { state.basicInitialLevelBonus = Math.min(BASIC_INITIAL_MAX, state.basicInitialLevelBonus + BASIC_INITIAL_INCREMENT); BASIC_KEYS.forEach((k) => { state.basicLevels[k] = Math.max(state.basicLevels[k], state.basicInitialLevelBonus); }); }
  if (type === "costReduction") { state.basicCostMultiplier *= 0.9; BASIC_KEYS.forEach((k) => state.basicCosts[k] = Math.max(1, Math.floor(state.basicCosts[k] * 0.9))); }
  if (type === "premiumAutoMultiplier") { state.premiumAutoMultiplier = getNextPremiumAutoMultiplier(); state.premiumAutoLevel += 1; }
  if (type === "manualFinalMultiplier") { state.manualFinalMultiplier = getNextManualFinalMultiplier(); state.manualFinalLevel += 1; }
  if (type === "autoPrestige") { state.autoPrestigeUnlocked = true; state.autoPrestigeEnabled = true; }
  if (type === "autoBasicUpgrade") { state.autoBasicUnlocked = true; state.autoBasicEnabled = true; }
  if (type === "prestigePointGain") state.prestigePointGainLevel += 1;
  restartLoops(); checkAchievements(); updateScreen(); saveGame(true); checkAutoPrestige();
}
function executeBigBangReset() {
  const count = Math.min(MAX_RESET_BULK_COUNT, Math.floor(clampPositive(state.prestigePoints, 0) / BIG_BANG_COST)); if (count < 1) return;
  const gain = safeMultiply(count, getBigBangGainPerReset());
  state.bigBangPoints = safeAdd(state.bigBangPoints, gain); state.bigBangCount = safeAdd(state.bigBangCount, count); state.bbAllMultiplier = Math.max(1, safeAdd(state.bbAllMultiplier, safeMultiply(0.1, count)));
  resetPrestigeLayer(); // 高級ポイントも0にし、高級全基本ポイント倍率も1に戻す
  unlockAchievement("firstBigBang");
  hidePrestigeTopDisplay(); restartLoops(); checkAchievements(); updateScreen(); saveGame(true);
}
function buyBigBang(type) {
  if (type === "normal") { if (state.bigBangPoints < 1) return; state.bigBangPoints -= 1; state.bbNormalMultiplierLevel += 1; }
  if (type === "prestige") { if (state.bigBangPoints < 1) return; state.bigBangPoints -= 1; state.bbPrestigeMultiplierLevel += 1; }
  if (type === "gain") { const c = getBbPointGainCost(); if (state.bigBangPoints < c) return; state.bigBangPoints -= c; state.bbPointGainLevel += 1; }
  updateScreen(); saveGame(true);
}

function buildSkinList() {
  if (!els.skinList) return;
  els.skinList.innerHTML = "";
  SKIN_CONFIG.forEach((skin) => {
    const card = document.createElement("section");
    card.className = "skin-card";
    card.dataset.skinId = skin.id;
    card.innerHTML = `
      <img class="skin-preview" src="${skin.file}" alt="${skin.name}" />
      <div class="skin-info">
        <h3>${skin.name}</h3>
        <p>コスト: <strong>${skin.cost === 0 ? "初期所持" : `${fmt(skin.cost)} ポイント`}</strong></p>
        <p>基本ポイント倍率: <strong>${fmtMult(skin.multiplier)}倍</strong></p>
        <button class="skin-action-button" type="button"></button>
      </div>`;
    const button = card.querySelector("button");
    button.addEventListener("click", () => buyOrEquipSkin(skin.id));
    els.skinList.append(card);
  });
}
function updateSkinDisplay() {
  const equipped = getSkinConfig();
  if (els.currentSkinNameText) els.currentSkinNameText.textContent = equipped.name;
  if (els.currentSkinMultiplierText) els.currentSkinMultiplierText.textContent = `${fmtMult(equipped.multiplier)}倍`;
  if (els.potatoImage && els.potatoImage.getAttribute("src") !== equipped.file) els.potatoImage.src = equipped.file;
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
    while (state.basicLevels[key] < s.targetLevel && canBuyBasic(key) && purchases < AUTO_BASIC_PURCHASES_PER_TICK) { if (!buyBasic(key, {save:false})) break; purchases++; did = true; }
    if (purchases >= AUTO_BASIC_PURCHASES_PER_TICK) break;
  }
  if (processAutoSkin()) did = true;
  if (did) { restartLoops(); updateScreen(); saveGame(false); }
}
function startAutoBasicLoop() { clearInterval(autoBasicTimer); autoBasicTimer = setInterval(processAutoBasic, AUTO_BASIC_INTERVAL); }
function restartLoops() { startAutoClickLoop(); startEnhancedAutoLoop(); }

function openPanel(panel) { els.upgradePanel.classList.remove("open"); els.statsPanel.classList.remove("open"); els.achievementPanel.classList.remove("open"); els.skinPanel.classList.remove("open"); panel.classList.add("open"); els.panelOverlay.classList.add("show"); panel.setAttribute("aria-hidden", "false"); }
function closePanels() { els.upgradePanel.classList.remove("open"); els.statsPanel.classList.remove("open"); els.achievementPanel.classList.remove("open"); els.skinPanel.classList.remove("open"); els.panelOverlay.classList.remove("show"); els.upgradePanel.setAttribute("aria-hidden", "true"); els.statsPanel.setAttribute("aria-hidden", "true"); els.achievementPanel.setAttribute("aria-hidden", "true"); els.skinPanel.setAttribute("aria-hidden", "true"); }
function toggleUpgradePanel() { els.upgradePanel.classList.contains("open") ? closePanels() : openPanel(els.upgradePanel); }

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
    ["bb:normal","BB 通常ポイント倍率"],["bb:prestige","BB 高級ポイント倍率"],["bb:gain","BBポイント獲得量"]
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
  });
}
function applyDebugFields() {
  els.debugFields.querySelectorAll("input").forEach((input) => {
    const key = input.dataset.debugKey; const v = Math.max(0, Math.floor(num(input.value, 0)));
    if (key === "points") state.points = v;
    else if (key === "prestigePoints") state.prestigePoints = v;
    else if (key === "bigBangPoints") state.bigBangPoints = v;
    else if (key === "prestigeResetCount") { state.prestigeResetCount = v; state.prestigeBasicMultiplier = 1 + v * 0.01; }
    else if (key === "bigBangCount") { state.bigBangCount = v; state.bbAllMultiplier = 1 + v * 0.1; }
    else if (key.startsWith("basic:")) { const k = key.split(":")[1]; state.basicLevels[k] = v; }
    else if (key.startsWith("prestige:")) setPrestigeDebugLevel(key.split(":")[1], v);
    else if (key === "bb:normal") state.bbNormalMultiplierLevel = v;
    else if (key === "bb:prestige") state.bbPrestigeMultiplierLevel = v;
    else if (key === "bb:gain") state.bbPointGainLevel = v;
  });
  restartLoops(); updateScreen(); saveGame(true); closeDebugModal();
}
function setPrestigeDebugLevel(type, v) {
  state.prestigePurchaseCounts[type] = v;
  if (type === "enhancedAuto") state.enhancedAutoUnlocked = v > 0;
  if (type === "enhancedBonus") state.enhancedBonusUnlocked = v > 0;
  if (type === "initialLevel") state.basicInitialLevelBonus = Math.min(BASIC_INITIAL_MAX, v * BASIC_INITIAL_INCREMENT);
  if (type === "costReduction") state.basicCostMultiplier = 0.9 ** v;
  if (type === "premiumAutoMultiplier") { state.premiumAutoLevel = v; state.premiumAutoMultiplier = v === 0 ? 1 : v * 10; }
  if (type === "manualFinalMultiplier") { state.manualFinalLevel = v; state.manualFinalMultiplier = v === 0 ? 1 : 1 + v * 0.5; }
  if (type === "autoPrestige") { state.autoPrestigeUnlocked = v > 0; state.autoPrestigeEnabled = state.autoPrestigeEnabled && state.autoPrestigeUnlocked; }
  if (type === "autoBasicUpgrade") { state.autoBasicUnlocked = v > 0; state.autoBasicEnabled = state.autoBasicEnabled && state.autoBasicUnlocked; }
  if (type === "prestigePointGain") state.prestigePointGainLevel = v;
}
function handleKeydown(e) {
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

function bindEvents() {
  els.potatoButton.addEventListener("click", () => gainManual(true));
  if (els.claimOfflineRewardButton) els.claimOfflineRewardButton.addEventListener("click", claimOfflineReward);
  BASIC_KEYS.forEach((k) => basicEls[k].button.addEventListener("click", () => buyBasic(k)));
  $("prestigeResetButton").addEventListener("click", executePrestigeReset);
  $("prestigeEnhancedAutoButton").addEventListener("click", () => buyPrestige("enhancedAuto"));
  $("prestigeEnhancedBonusButton").addEventListener("click", () => buyPrestige("enhancedBonus"));
  $("prestigeInitialLevelButton").addEventListener("click", () => buyPrestige("initialLevel"));
  $("prestigeCostReductionButton").addEventListener("click", () => buyPrestige("costReduction"));
  $("prestigePremiumAutoMultiplierButton").addEventListener("click", () => buyPrestige("premiumAutoMultiplier"));
  $("prestigeManualFinalMultiplierButton").addEventListener("click", () => buyPrestige("manualFinalMultiplier"));
  $("prestigeAutoResetButton").addEventListener("click", () => buyPrestige("autoPrestige"));
  $("prestigeAutoBasicUpgradeButton").addEventListener("click", () => buyPrestige("autoBasicUpgrade"));
  $("prestigePointGainButton").addEventListener("click", () => buyPrestige("prestigePointGain"));
  $("toggleAutoPrestigeButton").addEventListener("click", () => { if (!state.autoPrestigeUnlocked) return; state.autoPrestigeEnabled = !state.autoPrestigeEnabled; updateScreen(); saveGame(true); checkAutoPrestige(); });
  els.autoPrestigeTargetInput.addEventListener("input", () => { state.autoPrestigeTarget = Math.max(1, Math.floor(num(els.autoPrestigeTargetInput.value, 1))); });
  els.autoPrestigeTargetInput.addEventListener("change", () => { state.autoPrestigeTarget = Math.max(1, Math.floor(num(els.autoPrestigeTargetInput.value, 1))); updateScreen(); saveGame(true); checkAutoPrestige(); });
  $("toggleAutoBasicUpgradeButton").addEventListener("click", () => { if (!state.autoBasicUnlocked) return; state.autoBasicEnabled = !state.autoBasicEnabled; updateScreen(); saveGame(true); });
  if (els.toggleAutoSkinButton) els.toggleAutoSkinButton.addEventListener("click", () => { if (!state.autoBasicUnlocked) return; state.autoSkinEnabled = !state.autoSkinEnabled; updateScreen(); saveGame(true); });
  $("bigBangResetButton").addEventListener("click", executeBigBangReset);
  $("bigBangNormalMultiplierButton").addEventListener("click", () => buyBigBang("normal"));
  $("bigBangPrestigeMultiplierButton").addEventListener("click", () => buyBigBang("prestige"));
  $("bigBangPointGainButton").addEventListener("click", () => buyBigBang("gain"));
  $("manualSaveButton").addEventListener("click", () => saveGame(true));
  $("deleteSaveButton").addEventListener("click", deleteSaveData);
  els.menuButton.addEventListener("click", () => openPanel(els.upgradePanel));
  els.statsButton.addEventListener("click", () => openPanel(els.statsPanel));
  els.achievementButton.addEventListener("click", () => openPanel(els.achievementPanel));
  els.skinButton.addEventListener("click", () => openPanel(els.skinPanel));
  els.closePanelButton.addEventListener("click", closePanels);
  els.closeStatsButton.addEventListener("click", closePanels);
  els.closeAchievementButton.addEventListener("click", closePanels);
  els.closeSkinButton.addEventListener("click", closePanels);
  els.panelOverlay.addEventListener("click", closePanels);
  els.closeDebugButton.addEventListener("click", closeDebugModal);
  els.cancelDebugButton.addEventListener("click", closeDebugModal);
  els.applyDebugButton.addEventListener("click", applyDebugFields);
  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("beforeunload", () => saveGame(false));
}

buildAutoBasicRows(); buildDebugFields(); buildSkinList(); resetBasicUpgrades(); loadGame(); checkAchievements({silent:true}); bindEvents(); restartLoops(); startAutoBasicLoop(); updateScreen(); setInterval(() => saveGame(false), AUTO_SAVE_INTERVAL);
