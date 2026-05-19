const scoreArea = document.getElementById("scoreArea");
const mainScoreLabel = document.getElementById("mainScoreLabel");
const secondaryScoreArea = document.getElementById("secondaryScoreArea");
const secondaryScoreLabel = document.getElementById("secondaryScoreLabel");
const secondaryScoreText = document.getElementById("secondaryScoreText");
const pointText = document.getElementById("pointText");
const clickPowerText = document.getElementById("clickPowerText");
const clickCountText = document.getElementById("clickCountText");
const autoClickText = document.getElementById("autoClickText");
const effectiveAutoClickText = document.getElementById("effectiveAutoClickText");
const autoClickIntervalText = document.getElementById("autoClickIntervalText");
const autoIntervalText = document.getElementById("autoIntervalText");
const autoMultiplierText = document.getElementById("autoMultiplierText");
const clickUpgradeCostText = document.getElementById("clickUpgradeCostText");
const clickCountUpgradeCostText = document.getElementById("clickCountUpgradeCostText");
const autoClickCostText = document.getElementById("autoClickCostText");
const autoIntervalUpgradeCostText = document.getElementById("autoIntervalUpgradeCostText");
const autoMultiplierUpgradeCostText = document.getElementById("autoMultiplierUpgradeCostText");
const bonusChanceText = document.getElementById("bonusChanceText");
const bonusMultiplierText = document.getElementById("bonusMultiplierText");
const bonusChanceCostText = document.getElementById("bonusChanceCostText");
const bonusMultiplierCostText = document.getElementById("bonusMultiplierCostText");
const enhancedBonusChanceText = document.getElementById("enhancedBonusChanceText");
const enhancedBonusMultiplierText = document.getElementById("enhancedBonusMultiplierText");
const enhancedBonusChanceCostText = document.getElementById("enhancedBonusChanceCostText");
const enhancedBonusMultiplierCostText = document.getElementById("enhancedBonusMultiplierCostText");
const enhancedBonusChanceUnit = document.getElementById("enhancedBonusChanceUnit");
const enhancedBonusChanceCard = document.getElementById("enhancedBonusChanceCard");
const enhancedBonusMultiplierCard = document.getElementById("enhancedBonusMultiplierCard");

const prestigeCostText = document.getElementById("prestigeCostText");
const prestigePointText = document.getElementById("prestigePointText");
const prestigeCountText = document.getElementById("prestigeCountText");
const globalPointMultiplierText = document.getElementById("globalPointMultiplierText");
const enhancedAutoClickStatusText = document.getElementById("enhancedAutoClickStatusText");
const enhancedBonusStatusText = document.getElementById("enhancedBonusStatusText");
const basicInitialLevelBonusText = document.getElementById("basicInitialLevelBonusText");
const basicCostMultiplierText = document.getElementById("basicCostMultiplierText");
const premiumAutoMultiplierText = document.getElementById("premiumAutoMultiplierText");
const manualFinalMultiplierText = document.getElementById("manualFinalMultiplierText");
const autoPrestigeStatusText = document.getElementById("autoPrestigeStatusText");
const autoBasicUpgradeStatusText = document.getElementById("autoBasicUpgradeStatusText");
const prestigePointGainText = document.getElementById("prestigePointGainText");
const bigBangPointText = document.getElementById("bigBangPointText");
const bigBangCountText = document.getElementById("bigBangCountText");
const bigBangGainText = document.getElementById("bigBangGainText");
const bigBangNormalMultiplierText = document.getElementById("bigBangNormalMultiplierText");
const bigBangPrestigeMultiplierText = document.getElementById("bigBangPrestigeMultiplierText");
const saveStatusText = document.getElementById("saveStatusText");

const potatoButton = document.getElementById("potatoButton");
const potatoImage = document.getElementById("potatoImage");

const menuButton = document.getElementById("menuButton");
const closePanelButton = document.getElementById("closePanelButton");
const upgradePanel = document.getElementById("upgradePanel");
const panelOverlay = document.getElementById("panelOverlay");

const clickUpgradeButton = document.getElementById("clickUpgradeButton");
const clickCountUpgradeButton = document.getElementById("clickCountUpgradeButton");
const autoClickUpgradeButton = document.getElementById("autoClickUpgradeButton");
const autoIntervalUpgradeButton = document.getElementById("autoIntervalUpgradeButton");
const autoMultiplierUpgradeButton = document.getElementById("autoMultiplierUpgradeButton");
const bonusChanceUpgradeButton = document.getElementById("bonusChanceUpgradeButton");
const bonusMultiplierUpgradeButton = document.getElementById("bonusMultiplierUpgradeButton");
const enhancedBonusChanceUpgradeButton = document.getElementById("enhancedBonusChanceUpgradeButton");
const enhancedBonusMultiplierUpgradeButton = document.getElementById("enhancedBonusMultiplierUpgradeButton");

const prestigeResetButton = document.getElementById("prestigeResetButton");
const prestigeEnhancedAutoButton = document.getElementById("prestigeEnhancedAutoButton");
const prestigeEnhancedBonusButton = document.getElementById("prestigeEnhancedBonusButton");
const prestigeInitialLevelButton = document.getElementById("prestigeInitialLevelButton");
const prestigeCostReductionButton = document.getElementById("prestigeCostReductionButton");
const prestigePremiumAutoMultiplierButton = document.getElementById("prestigePremiumAutoMultiplierButton");
const prestigeManualFinalMultiplierButton = document.getElementById("prestigeManualFinalMultiplierButton");
const prestigeAutoResetButton = document.getElementById("prestigeAutoResetButton");
const toggleAutoPrestigeButton = document.getElementById("toggleAutoPrestigeButton");
const prestigeAutoBasicUpgradeButton = document.getElementById("prestigeAutoBasicUpgradeButton");
const prestigePointGainButton = document.getElementById("prestigePointGainButton");
const toggleAutoBasicUpgradeButton = document.getElementById("toggleAutoBasicUpgradeButton");
const autoBasicUpgradeCard = document.getElementById("autoBasicUpgradeCard");
const manualSaveButton = document.getElementById("manualSaveButton");
const deleteSaveButton = document.getElementById("deleteSaveButton");

const bigBangTitle = document.getElementById("bigBangTitle");
const bigBangCard = document.getElementById("bigBangCard");
const bigBangCostText = document.getElementById("bigBangCostText");
const bigBangResetGainText = document.getElementById("bigBangResetGainText");
const bigBangNormalMultiplierText2 = document.getElementById("bigBangNormalMultiplierText2");
const bigBangPrestigeMultiplierText2 = document.getElementById("bigBangPrestigeMultiplierText2");
const bigBangPointGainText = document.getElementById("bigBangPointGainText");
const bigBangResetButton = document.getElementById("bigBangResetButton");
const bigBangNormalMultiplierButton = document.getElementById("bigBangNormalMultiplierButton");
const bigBangPrestigeMultiplierButton = document.getElementById("bigBangPrestigeMultiplierButton");
const bigBangPointGainButton = document.getElementById("bigBangPointGainButton");

const BASIC_UPGRADE_KEYS = [
  "clickPower",
  "clickCount",
  "autoClick",
  "autoInterval",
  "autoMultiplier",
  "bonusChance",
  "bonusMultiplier",
  "enhancedBonusChance",
  "enhancedBonusMultiplier",
];

const BASIC_UPGRADE_LABELS = {
  clickPower: "クリック強化",
  clickCount: "クリック回数強化",
  autoClick: "オートクリック",
  autoInterval: "オート間隔短縮",
  autoMultiplier: "オートクリック倍加",
  bonusChance: "ボーナス確率",
  bonusMultiplier: "ボーナス倍率",
  enhancedBonusChance: "強化ボーナス確率",
  enhancedBonusMultiplier: "強化ボーナス倍率",
};

const AUTO_BASIC_CONTROLS = {
  clickPower: { input: document.getElementById("autoTargetClickPowerInput"), button: document.getElementById("autoToggleClickPowerButton") },
  clickCount: { input: document.getElementById("autoTargetClickCountInput"), button: document.getElementById("autoToggleClickCountButton") },
  autoClick: { input: document.getElementById("autoTargetAutoClickInput"), button: document.getElementById("autoToggleAutoClickButton") },
  autoInterval: { input: document.getElementById("autoTargetAutoIntervalInput"), button: document.getElementById("autoToggleAutoIntervalButton") },
  autoMultiplier: { input: document.getElementById("autoTargetAutoMultiplierInput"), button: document.getElementById("autoToggleAutoMultiplierButton") },
  bonusChance: { input: document.getElementById("autoTargetBonusChanceInput"), button: document.getElementById("autoToggleBonusChanceButton") },
  bonusMultiplier: { input: document.getElementById("autoTargetBonusMultiplierInput"), button: document.getElementById("autoToggleBonusMultiplierButton") },
  enhancedBonusChance: { input: document.getElementById("autoTargetEnhancedBonusChanceInput"), button: document.getElementById("autoToggleEnhancedBonusChanceButton") },
  enhancedBonusMultiplier: { input: document.getElementById("autoTargetEnhancedBonusMultiplierInput"), button: document.getElementById("autoToggleEnhancedBonusMultiplierButton") },
};

const UPGRADE_CONFIG = {
  clickPower: {
    baseCost: 10,
    growth: 1.6,
  },
  clickCount: {
    baseCost: 75,
    growth: 1.75,
  },
  autoClick: {
    baseCost: 25,
    growth: 1.7,
  },
  autoInterval: {
    baseCost: 150,
    growth: 1.65,
  },
  autoMultiplier: {
    baseCost: 300,
    growth: 2.0,
  },
  bonusChance: {
    baseCost: 50,
    growth: 1.55,
  },
  bonusMultiplier: {
    baseCost: 100,
    growth: 1.9,
  },
  enhancedBonusChance: {
    baseCost: 500,
    growth: 1.6,
  },
  enhancedBonusMultiplier: {
    baseCost: 800,
    growth: 1.95,
  },
};

const PRESTIGE_COST = 1_000_000;
const PRESTIGE_POINT_GAIN_BASE = 1;
const PRESTIGE_UPGRADE_COST = 1;
const AUTO_PRESTIGE_UNLOCK_COST = 5;
const AUTO_BASIC_UPGRADE_UNLOCK_COST = 10;

const PRESTIGE_UPGRADE_BASE_COSTS = {
  enhancedAuto: PRESTIGE_UPGRADE_COST,
  enhancedBonus: PRESTIGE_UPGRADE_COST,
  initialLevel: PRESTIGE_UPGRADE_COST,
  costReduction: PRESTIGE_UPGRADE_COST,
  premiumAutoMultiplier: PRESTIGE_UPGRADE_COST,
  manualFinalMultiplier: PRESTIGE_UPGRADE_COST,
  autoPrestige: AUTO_PRESTIGE_UNLOCK_COST,
  autoBasicUpgrade: AUTO_BASIC_UPGRADE_UNLOCK_COST,
  prestigePointGain: PRESTIGE_UPGRADE_COST,
};

const PRESTIGE_UPGRADE_KEYS = Object.keys(PRESTIGE_UPGRADE_BASE_COSTS);
const GLOBAL_POINT_MULTIPLIER_INCREMENT = 0.01;
const BIG_BANG_GLOBAL_POINT_BONUS_INCREMENT = 0.1;
const BASIC_INITIAL_LEVEL_BONUS_INCREMENT = 2;
const MAX_BASIC_INITIAL_LEVEL_BONUS = 100;

const AUTO_INTERVAL_REDUCTION_RATE = 0.95; // レベルごとに間隔 -5%
const MIN_AUTO_CLICK_INTERVAL = 100; // 負荷対策として最短 0.10秒
const ENHANCED_AUTO_CLICK_INTERVAL = 200; // 毎秒5回
const GAIN_POPUP_LIFETIME = 700;
const MAX_BONUS_CHANCE = 100;
const MIN_COST_GROWTH_RATE = 1.1;

const BONUS_CHANCE_BASE = 0.5;
const BONUS_CHANCE_PER_LEVEL = 0.5;
const BONUS_EXTRA_MULTIPLIER_BASE = 0.25;
const BONUS_EXTRA_MULTIPLIER_PER_LEVEL = 0.25;
const ENHANCED_BONUS_CHANCE_BASE = 0.5;
const ENHANCED_BONUS_CHANCE_PER_LEVEL = 0.5;
const ENHANCED_BONUS_MULTIPLIER_BASE = 0.25;
const ENHANCED_BONUS_MULTIPLIER_PER_LEVEL = 0.25;

const MAX_STANDARD_POPUPS_PER_CLICK = 10;
const MAX_ENHANCED_POPUPS_PER_CLICK = 10;
const MAX_STANDARD_POPUPS_ON_SCREEN = 40;
const MAX_ENHANCED_POPUPS_ON_SCREEN = 40;
const DEBUG_COMMAND = "POTATO";
const DEBUG_POINT_GAIN = 1_000_000;
const SAVE_KEY = "potatoClickerSaveData_v1";
const SAVE_VERSION = 1;
const AUTO_SAVE_INTERVAL = 5000;
const AUTO_BASIC_UPGRADE_INTERVAL = 500;
const AUTO_BASIC_PURCHASES_PER_TICK = 20;
const PRESTIGE_TOP_DISPLAY_THRESHOLD = 100;
const PRESTIGE_TOP_DISPLAY_DURATION = 10_000;
const BIG_BANG_VISIBLE_THRESHOLD = 100_000;
const BIG_BANG_COST = 1_000_000;
const BIG_BANG_NORMAL_MULTIPLIER_INCREMENT = 100;
const BIG_BANG_PRESTIGE_MULTIPLIER_INCREMENT = 10;

let points = 0;
let upgradeLevels = {};
let upgradeCosts = {};

let prestigeCount = 0;
let prestigePoints = 0;
let globalPointMultiplier = 1;
let enhancedAutoClickUnlocked = false;
let enhancedBonusUnlocked = false;
let basicInitialLevelBonus = 0;
let basicCostMultiplier = 1;
let premiumAutoMultiplier = 1;
let premiumAutoMultiplierUpgradeCount = 0;
let manualFinalMultiplier = 1;
let manualFinalMultiplierUpgradeCount = 0;
let autoPrestigeUnlocked = false;
let autoPrestigeEnabled = false;
let autoBasicUpgradeUnlocked = false;
let autoBasicUpgradeEnabled = false;
let autoBasicUpgradeSettings = createAutoBasicUpgradeSettings();
let prestigePointGainUpgradeCount = 0;
let bigBangPoints = 0;
let bigBangCount = 0;
let bigBangGlobalPointBonus = 0;
let bigBangNormalMultiplierUpgradeCount = 0;
let bigBangPrestigeMultiplierUpgradeCount = 0;
let bigBangPointGainUpgradeCount = 0;
let prestigeUpgradePurchaseCounts = createPrestigeUpgradePurchaseCounts();
let debugCommandProgress = "";
let saveStatusTimerId = null;

let autoClickTimerId = null;
let enhancedAutoClickTimerId = null;
let autoBasicUpgradeTimerId = null;
let prestigeTopDisplayTimerId = null;
let isPrestigeTopDisplayActive = false;

const popupQueues = {
  standard: [],
  enhanced: [],
};

function formatNumber(value) {
  const normalizedValue = Math.abs(value) < 0.000001 ? 0 : value;
  const sign = normalizedValue < 0 ? "-" : "";
  const absoluteValue = Math.abs(normalizedValue);
  const units = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No"];

  if (absoluteValue < 1000) {
    const isInteger = Math.abs(absoluteValue - Math.round(absoluteValue)) < 0.000001;
    return `${sign}${absoluteValue.toLocaleString("ja-JP", {
      minimumFractionDigits: isInteger ? 0 : 1,
      maximumFractionDigits: isInteger ? 0 : 2,
    })}`;
  }

  let unitIndex = Math.floor(Math.log10(absoluteValue) / 3);
  unitIndex = Math.min(unitIndex, units.length - 1);

  const shortenedValue = absoluteValue / 1000 ** unitIndex;
  const fractionDigits = shortenedValue >= 100 ? 0 : shortenedValue >= 10 ? 1 : 2;

  return `${sign}${shortenedValue.toLocaleString("ja-JP", {
    minimumFractionDigits: 0,
    maximumFractionDigits: fractionDigits,
  })}${units[unitIndex]}`;
}

function formatFullNumber(value) {
  const normalizedValue = Math.abs(value) < 0.000001 ? 0 : value;
  const isInteger = Math.abs(normalizedValue - Math.round(normalizedValue)) < 0.000001;
  return normalizedValue.toLocaleString("ja-JP", {
    minimumFractionDigits: isInteger ? 0 : 1,
    maximumFractionDigits: isInteger ? 0 : 2,
  });
}

function formatMultiplier(value) {
  return value
    .toFixed(2)
    .replace(/0+$/, "")
    .replace(/\.$/, "");
}

function formatSeconds(milliseconds) {
  return (milliseconds / 1000).toLocaleString("ja-JP", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatPercent(value) {
  return (value * 100).toLocaleString("ja-JP", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
}

function getInitialUpgradeCost(upgradeKey) {
  return Math.max(1, Math.floor(UPGRADE_CONFIG[upgradeKey].baseCost * basicCostMultiplier));
}

function getNextUpgradeCost(upgradeKey, currentCost) {
  const config = UPGRADE_CONFIG[upgradeKey];
  const normalNextCost = Math.floor(currentCost * config.growth);
  const minimumNextCost = Math.ceil(currentCost * MIN_COST_GROWTH_RATE);

  return Math.max(1, normalNextCost, minimumNextCost);
}

function resetBasicUpgrades() {
  BASIC_UPGRADE_KEYS.forEach((upgradeKey) => {
    upgradeLevels[upgradeKey] = basicInitialLevelBonus;
    upgradeCosts[upgradeKey] = getInitialUpgradeCost(upgradeKey);
  });
}

function getClickPower() {
  return 1 + upgradeLevels.clickPower;
}

function getClickCount() {
  return 1 + upgradeLevels.clickCount;
}

function getAutoClickPower() {
  return upgradeLevels.autoClick;
}

function getBasicAutoMultiplier() {
  return 1 + upgradeLevels.autoMultiplier;
}

function getBigBangNormalPointMultiplier() {
  return 1 + bigBangNormalMultiplierUpgradeCount * BIG_BANG_NORMAL_MULTIPLIER_INCREMENT;
}

function getBigBangPrestigePointMultiplier() {
  return 1 + bigBangPrestigeMultiplierUpgradeCount * BIG_BANG_PRESTIGE_MULTIPLIER_INCREMENT;
}

function getNormalPointMultiplier() {
  return globalPointMultiplier * getBigBangNormalPointMultiplier();
}

function getPrestigePointGain() {
  return Math.floor((PRESTIGE_POINT_GAIN_BASE + prestigePointGainUpgradeCount) * getBigBangPrestigePointMultiplier());
}

function getBigBangPointGain() {
  return 1 + bigBangPointGainUpgradeCount;
}

function getEffectiveAutoClickPower() {
  return getAutoClickPower() * getBasicAutoMultiplier() * premiumAutoMultiplier * getNormalPointMultiplier();
}

function getAutoClickInterval() {
  const interval = Math.round(
    1000 * AUTO_INTERVAL_REDUCTION_RATE ** upgradeLevels.autoInterval
  );

  return Math.max(MIN_AUTO_CLICK_INTERVAL, interval);
}

function getBonusChance() {
  return Math.min(
    MAX_BONUS_CHANCE,
    BONUS_CHANCE_BASE + upgradeLevels.bonusChance * BONUS_CHANCE_PER_LEVEL
  );
}

function getBonusMultiplier() {
  // 0.25は「追加倍率」として扱い、実際のボーナス発生時は 1.25倍 から始まります。
  return 1 + BONUS_EXTRA_MULTIPLIER_BASE + upgradeLevels.bonusMultiplier * BONUS_EXTRA_MULTIPLIER_PER_LEVEL;
}

function getEnhancedBonusChance() {
  return Math.min(
    MAX_BONUS_CHANCE,
    ENHANCED_BONUS_CHANCE_BASE + upgradeLevels.enhancedBonusChance * ENHANCED_BONUS_CHANCE_PER_LEVEL
  );
}

function getEnhancedBonusMultiplier() {
  return ENHANCED_BONUS_MULTIPLIER_BASE + upgradeLevels.enhancedBonusMultiplier * ENHANCED_BONUS_MULTIPLIER_PER_LEVEL;
}

function getNextPremiumAutoMultiplier() {
  return premiumAutoMultiplierUpgradeCount === 0
    ? 10
    : premiumAutoMultiplier + 10;
}

function getNextManualFinalMultiplier() {
  return manualFinalMultiplierUpgradeCount === 0
    ? 1.5
    : manualFinalMultiplier + 0.5;
}

function createAutoBasicUpgradeSettings() {
  return BASIC_UPGRADE_KEYS.reduce((settings, upgradeKey) => {
    settings[upgradeKey] = {
      enabled: false,
      targetLevel: 0,
    };
    return settings;
  }, {});
}

function normalizeAutoBasicUpgradeSettings(saveData = {}) {
  const settings = createAutoBasicUpgradeSettings();
  const savedSettings = saveData.autoBasicUpgradeSettings;

  if (!savedSettings || typeof savedSettings !== "object") return settings;

  BASIC_UPGRADE_KEYS.forEach((upgradeKey) => {
    const saved = savedSettings[upgradeKey];
    if (!saved || typeof saved !== "object") return;

    settings[upgradeKey].enabled = saved.enabled === true;
    settings[upgradeKey].targetLevel = Number.isFinite(saved.targetLevel)
      ? Math.max(0, Math.floor(saved.targetLevel))
      : 0;
  });

  return settings;
}

function createPrestigeUpgradePurchaseCounts() {
  return PRESTIGE_UPGRADE_KEYS.reduce((counts, prestigeType) => {
    counts[prestigeType] = 0;
    return counts;
  }, {});
}

function getPrestigeUpgradePurchaseCount(prestigeType) {
  const count = prestigeUpgradePurchaseCounts[prestigeType];
  return Number.isFinite(count) ? count : 0;
}

function getPrestigeUpgradeCost(prestigeType) {
  if (prestigeType === "prestigePointGain") {
    return Math.max(1, Math.ceil(getPrestigePointGain() / 1.25 + prestigePointGainUpgradeCount));
  }

  const baseCost = PRESTIGE_UPGRADE_BASE_COSTS[prestigeType] ?? PRESTIGE_UPGRADE_COST;
  return baseCost + Math.floor(getPrestigeUpgradePurchaseCount(prestigeType) / 2);
}

function getBigBangPointGainUpgradeCost() {
  return Math.max(1, Math.ceil(getBigBangPointGain() / 1.25 + bigBangPointGainUpgradeCount));
}

function canPayPrestigeUpgrade(prestigeType) {
  return prestigePoints >= getPrestigeUpgradeCost(prestigeType);
}

function estimateCostReductionPurchaseCount(multiplier) {
  if (!Number.isFinite(multiplier) || multiplier <= 0 || multiplier >= 1) return 0;
  return Math.max(0, Math.round(Math.log(multiplier) / Math.log(0.9)));
}

function normalizePrestigeUpgradePurchaseCounts(saveData = {}) {
  const counts = createPrestigeUpgradePurchaseCounts();

  if (saveData.prestigeUpgradePurchaseCounts && typeof saveData.prestigeUpgradePurchaseCounts === "object") {
    PRESTIGE_UPGRADE_KEYS.forEach((prestigeType) => {
      const savedCount = saveData.prestigeUpgradePurchaseCounts[prestigeType];
      counts[prestigeType] = Number.isFinite(savedCount) ? Math.max(0, Math.floor(savedCount)) : 0;
    });
    return counts;
  }

  // 旧セーブ向けの推定。以前の「全体共通購入回数」は使わず、各効果の実績から個別回数を補完します。
  counts.enhancedAuto = saveData.enhancedAutoClickUnlocked === true ? 1 : 0;
  counts.enhancedBonus = saveData.enhancedBonusUnlocked === true ? 1 : 0;
  counts.initialLevel = Number.isFinite(saveData.basicInitialLevelBonus)
    ? Math.floor(Math.max(0, saveData.basicInitialLevelBonus) / BASIC_INITIAL_LEVEL_BONUS_INCREMENT)
    : 0;
  counts.costReduction = estimateCostReductionPurchaseCount(saveData.basicCostMultiplier);
  counts.premiumAutoMultiplier = Number.isFinite(saveData.premiumAutoMultiplierUpgradeCount)
    ? Math.max(0, Math.floor(saveData.premiumAutoMultiplierUpgradeCount))
    : 0;
  counts.manualFinalMultiplier = Number.isFinite(saveData.manualFinalMultiplierUpgradeCount)
    ? Math.max(0, Math.floor(saveData.manualFinalMultiplierUpgradeCount))
    : 0;
  counts.autoPrestige = saveData.autoPrestigeUnlocked === true ? 1 : 0;
  counts.autoBasicUpgrade = saveData.autoBasicUpgradeUnlocked === true ? 1 : 0;
  counts.prestigePointGain = Number.isFinite(saveData.prestigePointGainUpgradeCount)
    ? Math.max(0, Math.floor(saveData.prestigePointGainUpgradeCount))
    : 0;

  return counts;
}


function setSaveStatus(message) {
  if (!saveStatusText) return;
  saveStatusText.textContent = message;

  if (saveStatusTimerId !== null) {
    clearTimeout(saveStatusTimerId);
  }

  saveStatusTimerId = setTimeout(() => {
    const savedAtText = localStorage.getItem(`${SAVE_KEY}_savedAtText`);
    saveStatusText.textContent = savedAtText || "自動保存ON";
  }, 1800);
}

function createSaveData() {
  return {
    version: SAVE_VERSION,
    savedAt: new Date().toISOString(),
    points,
    upgradeLevels,
    upgradeCosts,
    prestigeCount,
    prestigePoints,
    globalPointMultiplier,
    enhancedAutoClickUnlocked,
    enhancedBonusUnlocked,
    basicInitialLevelBonus,
    basicCostMultiplier,
    premiumAutoMultiplier,
    premiumAutoMultiplierUpgradeCount,
    manualFinalMultiplier,
    manualFinalMultiplierUpgradeCount,
    autoPrestigeUnlocked,
    autoPrestigeEnabled,
    autoBasicUpgradeUnlocked,
    autoBasicUpgradeEnabled,
    autoBasicUpgradeSettings,
    prestigePointGainUpgradeCount,
    bigBangPoints,
    bigBangCount,
    bigBangGlobalPointBonus,
    bigBangNormalMultiplierUpgradeCount,
    bigBangPrestigeMultiplierUpgradeCount,
    bigBangPointGainUpgradeCount,
    prestigeUpgradePurchaseCounts,
  };
}

function saveGame(showMessage = false) {
  try {
    const saveData = createSaveData();
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
    const savedTimeText = `保存済み ${new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" })}`;
    localStorage.setItem(`${SAVE_KEY}_savedAtText`, savedTimeText);
    if (showMessage) setSaveStatus("保存しました");
    else if (saveStatusText) saveStatusText.textContent = savedTimeText;
  } catch (error) {
    setSaveStatus("保存失敗");
    console.error("セーブに失敗しました", error);
  }
}

function copyKnownKeys(target, source, keys) {
  keys.forEach((key) => {
    if (typeof source[key] === "number" && Number.isFinite(source[key])) {
      target[key] = source[key];
    }
  });
}

function loadGame() {
  const rawSaveData = localStorage.getItem(SAVE_KEY);
  if (!rawSaveData) {
    setSaveStatus("新規データ");
    return false;
  }

  try {
    const saveData = JSON.parse(rawSaveData);
    if (!saveData || saveData.version !== SAVE_VERSION) {
      setSaveStatus("旧セーブ無視");
      return false;
    }

    points = Number.isFinite(saveData.points) ? saveData.points : 0;
    prestigeCount = Number.isFinite(saveData.prestigeCount) ? saveData.prestigeCount : 0;
    prestigePoints = Number.isFinite(saveData.prestigePoints) ? saveData.prestigePoints : 0;
    globalPointMultiplier = Number.isFinite(saveData.globalPointMultiplier) ? saveData.globalPointMultiplier : 1;
    enhancedAutoClickUnlocked = saveData.enhancedAutoClickUnlocked === true;
    enhancedBonusUnlocked = saveData.enhancedBonusUnlocked === true;
    basicInitialLevelBonus = Number.isFinite(saveData.basicInitialLevelBonus) ? saveData.basicInitialLevelBonus : 0;
    basicCostMultiplier = Number.isFinite(saveData.basicCostMultiplier) ? saveData.basicCostMultiplier : 1;
    premiumAutoMultiplier = Number.isFinite(saveData.premiumAutoMultiplier) ? saveData.premiumAutoMultiplier : 1;
    premiumAutoMultiplierUpgradeCount = Number.isFinite(saveData.premiumAutoMultiplierUpgradeCount) ? saveData.premiumAutoMultiplierUpgradeCount : 0;
    manualFinalMultiplier = Number.isFinite(saveData.manualFinalMultiplier) ? saveData.manualFinalMultiplier : 1;
    manualFinalMultiplierUpgradeCount = Number.isFinite(saveData.manualFinalMultiplierUpgradeCount) ? saveData.manualFinalMultiplierUpgradeCount : 0;
    autoPrestigeUnlocked = saveData.autoPrestigeUnlocked === true;
    autoPrestigeEnabled = autoPrestigeUnlocked && saveData.autoPrestigeEnabled === true;
    autoBasicUpgradeUnlocked = saveData.autoBasicUpgradeUnlocked === true;
    autoBasicUpgradeEnabled = autoBasicUpgradeUnlocked && saveData.autoBasicUpgradeEnabled === true;
    autoBasicUpgradeSettings = normalizeAutoBasicUpgradeSettings(saveData);
    prestigePointGainUpgradeCount = Number.isFinite(saveData.prestigePointGainUpgradeCount) ? Math.max(0, Math.floor(saveData.prestigePointGainUpgradeCount)) : 0;
    bigBangPoints = Number.isFinite(saveData.bigBangPoints) ? Math.max(0, saveData.bigBangPoints) : 0;
    bigBangCount = Number.isFinite(saveData.bigBangCount) ? Math.max(0, Math.floor(saveData.bigBangCount)) : 0;
    bigBangGlobalPointBonus = Number.isFinite(saveData.bigBangGlobalPointBonus) ? Math.max(0, saveData.bigBangGlobalPointBonus) : 0;
    bigBangNormalMultiplierUpgradeCount = Number.isFinite(saveData.bigBangNormalMultiplierUpgradeCount) ? Math.max(0, Math.floor(saveData.bigBangNormalMultiplierUpgradeCount)) : 0;
    bigBangPrestigeMultiplierUpgradeCount = Number.isFinite(saveData.bigBangPrestigeMultiplierUpgradeCount) ? Math.max(0, Math.floor(saveData.bigBangPrestigeMultiplierUpgradeCount)) : 0;
    bigBangPointGainUpgradeCount = Number.isFinite(saveData.bigBangPointGainUpgradeCount) ? Math.max(0, Math.floor(saveData.bigBangPointGainUpgradeCount)) : 0;
    prestigeUpgradePurchaseCounts = normalizePrestigeUpgradePurchaseCounts(saveData);

    // 旧バージョンのセーブで上限を超えていた場合の補正。
    basicInitialLevelBonus = Math.min(MAX_BASIC_INITIAL_LEVEL_BONUS, Math.max(0, basicInitialLevelBonus));

    resetBasicUpgrades();
    if (saveData.upgradeLevels && typeof saveData.upgradeLevels === "object") {
      copyKnownKeys(upgradeLevels, saveData.upgradeLevels, BASIC_UPGRADE_KEYS);
    }
    if (saveData.upgradeCosts && typeof saveData.upgradeCosts === "object") {
      copyKnownKeys(upgradeCosts, saveData.upgradeCosts, BASIC_UPGRADE_KEYS);
    }

    const savedTimeText = localStorage.getItem(`${SAVE_KEY}_savedAtText`);
    if (saveStatusText) saveStatusText.textContent = savedTimeText || "ロード済み";
    return true;
  } catch (error) {
    setSaveStatus("ロード失敗");
    console.error("ロードに失敗しました", error);
    return false;
  }
}

function resetAllGameData() {
  points = 0;
  prestigeCount = 0;
  prestigePoints = 0;
  globalPointMultiplier = 1;
  enhancedAutoClickUnlocked = false;
  enhancedBonusUnlocked = false;
  basicInitialLevelBonus = 0;
  basicCostMultiplier = 1;
  premiumAutoMultiplier = 1;
  premiumAutoMultiplierUpgradeCount = 0;
  manualFinalMultiplier = 1;
  manualFinalMultiplierUpgradeCount = 0;
  autoPrestigeUnlocked = false;
  autoPrestigeEnabled = false;
  autoBasicUpgradeUnlocked = false;
  autoBasicUpgradeEnabled = false;
  autoBasicUpgradeSettings = createAutoBasicUpgradeSettings();
  prestigePointGainUpgradeCount = 0;
  bigBangPoints = 0;
  bigBangCount = 0;
  bigBangGlobalPointBonus = 0;
  bigBangNormalMultiplierUpgradeCount = 0;
  bigBangPrestigeMultiplierUpgradeCount = 0;
  bigBangPointGainUpgradeCount = 0;
  prestigeUpgradePurchaseCounts = createPrestigeUpgradePurchaseCounts();
  hidePrestigeTopDisplay();
  debugCommandProgress = "";

  popupQueues.standard.forEach((popup) => popup.remove());
  popupQueues.enhanced.forEach((popup) => popup.remove());
  popupQueues.standard = [];
  popupQueues.enhanced = [];

  resetBasicUpgrades();
  startAutoClickLoop();
  startEnhancedAutoClickLoop();
  startAutoBasicUpgradeLoop();
  updateScreen();
}

function initializeSaveData() {
  localStorage.removeItem(SAVE_KEY);
  localStorage.removeItem(`${SAVE_KEY}_savedAtText`);
  resetAllGameData();
  saveGame(false);
  setSaveStatus("初期化しました");
}

function deleteSaveData() {
  const firstConfirmed = window.confirm(
    "本当にセーブデータを初期化しますか？\n現在のポイント・基本アップグレード・高級アップグレードもすべて初期化されます。"
  );

  if (!firstConfirmed) {
    setSaveStatus("初期化キャンセル");
    return;
  }

  const secondConfirmed = window.confirm(
    "最終確認です。初期化すると元に戻せません。\n本当にすべてのゲームデータを初期化しますか？"
  );

  if (!secondConfirmed) {
    setSaveStatus("初期化キャンセル");
    return;
  }

  initializeSaveData();
}

function updateScreen() {
  const autoClickInterval = getAutoClickInterval();
  const canPrestigeReset = points >= PRESTIGE_COST;
  const enhancedAutoPrestigeCost = getPrestigeUpgradeCost("enhancedAuto");
  const enhancedBonusPrestigeCost = getPrestigeUpgradeCost("enhancedBonus");
  const initialLevelPrestigeCost = getPrestigeUpgradeCost("initialLevel");
  const costReductionPrestigeCost = getPrestigeUpgradeCost("costReduction");
  const premiumAutoPrestigeCost = getPrestigeUpgradeCost("premiumAutoMultiplier");
  const manualFinalPrestigeCost = getPrestigeUpgradeCost("manualFinalMultiplier");
  const autoPrestigeUnlockCost = getPrestigeUpgradeCost("autoPrestige");
  const autoBasicUpgradeUnlockCost = getPrestigeUpgradeCost("autoBasicUpgrade");
  const prestigePointGainCost = getPrestigeUpgradeCost("prestigePointGain");
  const bigBangCanBeShown = prestigePoints >= BIG_BANG_VISIBLE_THRESHOLD || bigBangCount > 0 || bigBangPoints > 0;
  const bigBangCanReset = prestigePoints >= BIG_BANG_COST;
  const bigBangPointGainCost = getBigBangPointGainUpgradeCost();
  const isBonusChanceMaxed = getBonusChance() >= MAX_BONUS_CHANCE;
  const isEnhancedBonusChanceMaxed = getEnhancedBonusChance() >= MAX_BONUS_CHANCE;
  const isAutoIntervalMaxed = autoClickInterval <= MIN_AUTO_CLICK_INTERVAL;

  updateTopScoreDisplay();
  clickPowerText.textContent = formatNumber(getClickPower());
  clickCountText.textContent = formatNumber(getClickCount());
  autoClickText.textContent = formatNumber(getAutoClickPower());
  effectiveAutoClickText.textContent = formatNumber(getEffectiveAutoClickPower());
  autoClickIntervalText.textContent = formatSeconds(autoClickInterval);
  autoIntervalText.textContent = formatSeconds(autoClickInterval);
  autoMultiplierText.textContent = formatMultiplier(getBasicAutoMultiplier());
  bonusChanceText.textContent = formatNumber(getBonusChance());
  bonusMultiplierText.textContent = formatMultiplier(getBonusMultiplier());

  clickUpgradeCostText.textContent = formatNumber(upgradeCosts.clickPower);
  clickCountUpgradeCostText.textContent = formatNumber(upgradeCosts.clickCount);
  autoClickCostText.textContent = formatNumber(upgradeCosts.autoClick);
  autoIntervalUpgradeCostText.textContent = formatNumber(upgradeCosts.autoInterval);
  autoMultiplierUpgradeCostText.textContent = formatNumber(upgradeCosts.autoMultiplier);
  bonusChanceCostText.textContent = formatNumber(upgradeCosts.bonusChance);
  bonusMultiplierCostText.textContent = formatNumber(upgradeCosts.bonusMultiplier);
  enhancedBonusChanceCostText.textContent = formatNumber(upgradeCosts.enhancedBonusChance);
  enhancedBonusMultiplierCostText.textContent = formatNumber(upgradeCosts.enhancedBonusMultiplier);

  if (enhancedBonusUnlocked) {
    enhancedBonusChanceText.textContent = formatNumber(getEnhancedBonusChance());
    enhancedBonusMultiplierText.textContent = formatMultiplier(getEnhancedBonusMultiplier());
    enhancedBonusChanceUnit.textContent = "%";
  } else {
    enhancedBonusChanceText.textContent = "未解放";
    enhancedBonusMultiplierText.textContent = "未解放";
    enhancedBonusChanceUnit.textContent = "";
  }

  enhancedBonusChanceCard.classList.toggle("unlocked", enhancedBonusUnlocked);
  enhancedBonusMultiplierCard.classList.toggle("unlocked", enhancedBonusUnlocked);

  prestigeCostText.textContent = formatNumber(PRESTIGE_COST);
  prestigePointText.textContent = formatNumber(prestigePoints);
  prestigeCountText.textContent = formatNumber(prestigeCount);
  globalPointMultiplierText.textContent = formatMultiplier(globalPointMultiplier);
  enhancedAutoClickStatusText.textContent = enhancedAutoClickUnlocked
    ? "解放済み / 毎秒5回"
    : "未解放";
  enhancedBonusStatusText.textContent = enhancedBonusUnlocked
    ? "解放済み"
    : "未解放";
  basicInitialLevelBonusText.textContent = formatNumber(basicInitialLevelBonus);
  basicCostMultiplierText.textContent = formatPercent(basicCostMultiplier);
  premiumAutoMultiplierText.textContent = formatMultiplier(premiumAutoMultiplier);
  manualFinalMultiplierText.textContent = formatMultiplier(manualFinalMultiplier);
  autoPrestigeStatusText.textContent = autoPrestigeUnlocked
    ? autoPrestigeEnabled ? "解放済み / ON" : "解放済み / OFF"
    : "未解放";
  autoBasicUpgradeStatusText.textContent = autoBasicUpgradeUnlocked
    ? autoBasicUpgradeEnabled ? "解放済み / ON" : "解放済み / OFF"
    : "未解放";
  prestigePointGainText.textContent = formatNumber(getPrestigePointGain());
  bigBangPointText.textContent = formatNumber(bigBangPoints);
  bigBangCountText.textContent = formatNumber(bigBangCount);
  bigBangGainText.textContent = formatNumber(getBigBangPointGain());
  bigBangNormalMultiplierText.textContent = formatMultiplier(getBigBangNormalPointMultiplier());
  bigBangPrestigeMultiplierText.textContent = formatMultiplier(getBigBangPrestigePointMultiplier());
  bigBangTitle.classList.toggle("hidden-card", !bigBangCanBeShown);
  bigBangCard.classList.toggle("hidden-card", !bigBangCanBeShown);
  bigBangCostText.textContent = formatNumber(BIG_BANG_COST);
  bigBangResetGainText.textContent = formatNumber(getBigBangPointGain());
  bigBangNormalMultiplierText2.textContent = formatMultiplier(getBigBangNormalPointMultiplier());
  bigBangPrestigeMultiplierText2.textContent = formatMultiplier(getBigBangPrestigePointMultiplier());
  bigBangPointGainText.textContent = formatNumber(getBigBangPointGain());
  updateAutoBasicControls();

  clickUpgradeButton.disabled = points < upgradeCosts.clickPower;
  clickCountUpgradeButton.disabled = points < upgradeCosts.clickCount;
  autoClickUpgradeButton.disabled = points < upgradeCosts.autoClick;
  autoIntervalUpgradeButton.disabled = points < upgradeCosts.autoInterval || isAutoIntervalMaxed;
  autoMultiplierUpgradeButton.disabled = points < upgradeCosts.autoMultiplier;
  bonusChanceUpgradeButton.disabled = points < upgradeCosts.bonusChance || isBonusChanceMaxed;
  bonusMultiplierUpgradeButton.disabled = points < upgradeCosts.bonusMultiplier;
  enhancedBonusChanceUpgradeButton.disabled =
    !enhancedBonusUnlocked || points < upgradeCosts.enhancedBonusChance || isEnhancedBonusChanceMaxed;
  enhancedBonusMultiplierUpgradeButton.disabled =
    !enhancedBonusUnlocked || points < upgradeCosts.enhancedBonusMultiplier;

  prestigeResetButton.disabled = !canPrestigeReset;
  prestigeEnhancedAutoButton.disabled = prestigePoints < enhancedAutoPrestigeCost || enhancedAutoClickUnlocked;
  prestigeEnhancedBonusButton.disabled = prestigePoints < enhancedBonusPrestigeCost || enhancedBonusUnlocked;
  prestigeInitialLevelButton.disabled =
    prestigePoints < initialLevelPrestigeCost || basicInitialLevelBonus >= MAX_BASIC_INITIAL_LEVEL_BONUS;
  prestigeCostReductionButton.disabled = prestigePoints < costReductionPrestigeCost;
  prestigePremiumAutoMultiplierButton.disabled = prestigePoints < premiumAutoPrestigeCost;
  prestigeManualFinalMultiplierButton.disabled = prestigePoints < manualFinalPrestigeCost;
  prestigeAutoResetButton.disabled = prestigePoints < autoPrestigeUnlockCost || autoPrestigeUnlocked;
  prestigeAutoBasicUpgradeButton.disabled = prestigePoints < autoBasicUpgradeUnlockCost || autoBasicUpgradeUnlocked;
  prestigePointGainButton.disabled = prestigePoints < prestigePointGainCost;
  toggleAutoPrestigeButton.disabled = !autoPrestigeUnlocked;
  toggleAutoBasicUpgradeButton.disabled = !autoBasicUpgradeUnlocked;
  bigBangResetButton.disabled = !bigBangCanReset;
  bigBangNormalMultiplierButton.disabled = bigBangPoints < 1;
  bigBangPrestigeMultiplierButton.disabled = bigBangPoints < 1;
  bigBangPointGainButton.disabled = bigBangPoints < bigBangPointGainCost;

  prestigeResetButton.textContent = canPrestigeReset
    ? `高級リセットを実行して高級ポイント +${formatNumber(getPrestigePointGain())}`
    : `高級リセットまで ${formatNumber(Math.max(0, PRESTIGE_COST - points))} ポイント`;

  prestigeEnhancedAutoButton.textContent = enhancedAutoClickUnlocked
    ? "強化オートクリックは解放済み"
    : `購入: 強化オートクリック解放 / 高級ポイント ${enhancedAutoPrestigeCost}`;
  prestigeEnhancedBonusButton.textContent = enhancedBonusUnlocked
    ? "強化ボーナスは解放済み"
    : `購入: 強化ボーナス解放 / 高級ポイント ${enhancedBonusPrestigeCost}`;
  prestigeInitialLevelButton.textContent =
    basicInitialLevelBonus >= MAX_BASIC_INITIAL_LEVEL_BONUS
      ? `基本初期値は上限 +${MAX_BASIC_INITIAL_LEVEL_BONUS}`
      : `購入: 基本初期値 +${BASIC_INITIAL_LEVEL_BONUS_INCREMENT} / 高級ポイント ${initialLevelPrestigeCost}`;
  prestigeCostReductionButton.textContent =
    `購入: 基本コスト 0.9倍 / 高級ポイント ${costReductionPrestigeCost}`;
  prestigePremiumAutoMultiplierButton.textContent =
    `購入: オートクリック高級倍率 ${formatMultiplier(getNextPremiumAutoMultiplier())}倍 / 高級ポイント ${premiumAutoPrestigeCost}`;
  prestigeManualFinalMultiplierButton.textContent =
    `購入: 通常クリック最終倍率 ${formatMultiplier(getNextManualFinalMultiplier())}倍 / 高級ポイント ${manualFinalPrestigeCost}`;
  prestigeAutoResetButton.textContent = autoPrestigeUnlocked
    ? "自動リセットは解放済み"
    : `購入: 自動リセット解放 / 高級ポイント ${autoPrestigeUnlockCost}`;
  prestigeAutoBasicUpgradeButton.textContent = autoBasicUpgradeUnlocked
    ? "基本アップグレード自動強化は解放済み"
    : `購入: 基本アップグレードの自動強化解放 / 高級ポイント ${autoBasicUpgradeUnlockCost}`;
  prestigePointGainButton.textContent = `購入: 高級ポイント獲得量 +1 / 高級ポイント ${prestigePointGainCost}`;
  toggleAutoPrestigeButton.textContent = autoPrestigeUnlocked
    ? autoPrestigeEnabled ? "自動リセット: ON" : "自動リセット: OFF"
    : "自動リセット: 未解放";
  toggleAutoBasicUpgradeButton.textContent = autoBasicUpgradeUnlocked
    ? autoBasicUpgradeEnabled ? "基本自動強化: ON" : "基本自動強化: OFF"
    : "基本自動強化: 未解放";
  bigBangResetButton.textContent = bigBangCanReset
    ? `ジャガイモビックバン実行してBBポイント +${formatNumber(getBigBangPointGain())}`
    : `ビックバンまで高級ポイント ${formatNumber(Math.max(0, BIG_BANG_COST - prestigePoints))}`;
  bigBangNormalMultiplierButton.textContent = "購入: 通常ポイント倍率 +100倍 / ビックバンポイント 1";
  bigBangPrestigeMultiplierButton.textContent = "購入: 高級ポイント倍率 +10倍 / ビックバンポイント 1";
  bigBangPointGainButton.textContent = `購入: ビックバンポイント獲得量 +1 / ビックバンポイント ${bigBangPointGainCost}`;
}

function updateTopScoreDisplay() {
  const showPrestigeAsMain = isPrestigeTopDisplayActive && prestigePoints > PRESTIGE_TOP_DISPLAY_THRESHOLD;

  scoreArea.classList.toggle("prestige-main", showPrestigeAsMain);

  if (showPrestigeAsMain) {
    mainScoreLabel.textContent = "高級ポイント";
    pointText.textContent = formatNumber(prestigePoints);
    secondaryScoreLabel.textContent = "ポイント";
    secondaryScoreText.textContent = formatNumber(points);
    secondaryScoreArea.classList.remove("hidden");
    return;
  }

  mainScoreLabel.textContent = "ポイント";
  pointText.textContent = formatNumber(points);
  secondaryScoreArea.classList.add("hidden");
}

function showPrestigeTopDisplay() {
  if (prestigePoints <= PRESTIGE_TOP_DISPLAY_THRESHOLD) return;

  isPrestigeTopDisplayActive = true;

  if (prestigeTopDisplayTimerId !== null) {
    clearTimeout(prestigeTopDisplayTimerId);
  }

  prestigeTopDisplayTimerId = setTimeout(() => {
    isPrestigeTopDisplayActive = false;
    updateScreen();
  }, PRESTIGE_TOP_DISPLAY_DURATION);
}

function hidePrestigeTopDisplay() {
  isPrestigeTopDisplayActive = false;

  if (prestigeTopDisplayTimerId !== null) {
    clearTimeout(prestigeTopDisplayTimerId);
    prestigeTopDisplayTimerId = null;
  }
}

function addPoints(amount) {
  points += amount;
  updateScreen();
  checkAutoPrestigeReset();
}

function checkAutoPrestigeReset() {
  if (!autoPrestigeUnlocked || !autoPrestigeEnabled || points < PRESTIGE_COST) return;
  executePrestigeReset({ ignoreCostCheck: true });
}

function addDebugPoints() {
  points += DEBUG_POINT_GAIN;
  showPopupGroupWithLimit(
    [
      {
        amount: DEBUG_POINT_GAIN,
        type: "normal",
      },
    ],
    1,
    1
  );
  updateScreen();
  checkAutoPrestigeReset();
}

function handleDebugCommand(event) {
  if (event.repeat) return;

  if (!event.shiftKey) {
    debugCommandProgress = "";
    return;
  }

  const typedKey = event.key.toUpperCase();

  if (!/^[A-Z]$/.test(typedKey)) return;

  const expectedKey = DEBUG_COMMAND[debugCommandProgress.length];

  if (typedKey === expectedKey) {
    debugCommandProgress += typedKey;

    if (debugCommandProgress === DEBUG_COMMAND) {
      debugCommandProgress = "";
      addDebugPoints();
    }
    return;
  }

  debugCommandProgress = typedKey === DEBUG_COMMAND[0] ? typedKey : "";
}

function playPotatoAnimation() {
  potatoImage.classList.remove("pop");

  // 同じアニメーションを連続クリックでも再生できるようにする
  void potatoImage.offsetWidth;

  potatoImage.classList.add("pop");
}

function getPopupCategory(type) {
  return type === "enhanced" ? "enhanced" : "standard";
}

function getMaxPopupsOnScreen(category) {
  return category === "enhanced"
    ? MAX_ENHANCED_POPUPS_ON_SCREEN
    : MAX_STANDARD_POPUPS_ON_SCREEN;
}

function cleanupPopupQueue(category) {
  popupQueues[category] = popupQueues[category].filter((popup) => popup.isConnected);
}

function enforcePopupLimit(category) {
  cleanupPopupQueue(category);

  const maxPopups = getMaxPopupsOnScreen(category);
  while (popupQueues[category].length > maxPopups) {
    const oldestPopup = popupQueues[category].shift();
    if (oldestPopup) {
      oldestPopup.remove();
    }
  }
}

function showGainPopup(amount, type) {
  const category = getPopupCategory(type);
  const popup = document.createElement("span");
  popup.className = `gain-popup ${type}`.trim();
  popup.textContent = `+${formatNumber(amount)}`;
  popup.setAttribute("aria-hidden", "true");

  // ジャガイモの近くにランダム表示する。
  popup.style.left = `${50 + Math.random() * 38 - 19}%`;
  popup.style.top = `${32 + Math.random() * 30 - 15}%`;

  potatoButton.append(popup);
  popupQueues[category].push(popup);
  enforcePopupLimit(category);

  const removePopup = () => {
    popup.remove();
    cleanupPopupQueue(category);
  };

  popup.addEventListener("animationend", removePopup, { once: true });

  // animationend が発火しなかった場合の保険
  setTimeout(removePopup, GAIN_POPUP_LIFETIME);
}

function showPopupGroupWithLimit(entries, repeatCount, maxDisplayCount) {
  if (entries.length === 0 || repeatCount <= 0) return;

  const displayCount = Math.min(repeatCount * entries.length, maxDisplayCount);

  for (let i = 0; i < displayCount; i += 1) {
    const entry = entries[i % entries.length];
    showGainPopup(entry.amount, entry.type);
  }
}

function showGainPopups(popupEntries, count) {
  const standardEntries = popupEntries.filter((entry) => getPopupCategory(entry.type) === "standard");
  const enhancedEntries = popupEntries.filter((entry) => getPopupCategory(entry.type) === "enhanced");

  showPopupGroupWithLimit(standardEntries, count, MAX_STANDARD_POPUPS_PER_CLICK);
  showPopupGroupWithLimit(enhancedEntries, count, MAX_ENHANCED_POPUPS_PER_CLICK);
}

function playBonusGlow(isEnhanced) {
  const glowEffect = document.createElement("span");
  glowEffect.className = isEnhanced ? "bonus-glow-effect enhanced" : "bonus-glow-effect";
  glowEffect.setAttribute("aria-hidden", "true");

  const glowImage = document.createElement("img");
  glowImage.className = "bonus-glow-image";
  glowImage.src = potatoImage.src;
  glowImage.alt = "";
  glowImage.setAttribute("aria-hidden", "true");

  // 発光はクリックの伸縮とは別要素で再生する。
  // そのため、次のクリックが来ても発光アニメーションはキャンセルされません。
  potatoButton.append(glowEffect, glowImage);

  const removeGlowElement = (element) => {
    element.addEventListener("animationend", () => element.remove(), { once: true });
  };

  removeGlowElement(glowEffect);
  removeGlowElement(glowImage);

  // animationend が発火しなかった場合の保険
  setTimeout(() => {
    glowEffect.remove();
    glowImage.remove();
  }, 2000);
}

function calculateManualClickGain() {
  const finalManualMultiplier = getNormalPointMultiplier() * manualFinalMultiplier;
  const baseAmount = getClickPower() * finalManualMultiplier;
  const isBonus = Math.random() * 100 < getBonusChance();

  if (!isBonus) {
    return {
      totalPerClickCount: baseAmount,
      popupEntries: [
        {
          amount: baseAmount,
          type: "normal",
        },
      ],
      isBonus: false,
      isEnhancedBonus: false,
    };
  }

  const bonusAmount = getClickPower() * getBonusMultiplier() * finalManualMultiplier;
  const isEnhancedBonus =
    enhancedBonusUnlocked && Math.random() * 100 < getEnhancedBonusChance();
  const popupEntries = [
    {
      amount: bonusAmount,
      type: "bonus",
    },
  ];
  let totalPerClickCount = bonusAmount;

  if (isEnhancedBonus) {
    const enhancedBonusAmount =
      getClickPower() *
      getBonusMultiplier() *
      getEnhancedBonusMultiplier() *
      finalManualMultiplier;

    totalPerClickCount += enhancedBonusAmount;
    popupEntries.push({
      amount: enhancedBonusAmount,
      type: "enhanced",
    });
  }

  return {
    totalPerClickCount,
    popupEntries,
    isBonus: true,
    isEnhancedBonus,
  };
}

function gainManualClickPoints({ showEffects }) {
  const result = calculateManualClickGain();
  const clickCount = getClickCount();
  const totalGainedPoints = result.totalPerClickCount * clickCount;

  addPoints(totalGainedPoints);

  if (showEffects) {
    showGainPopups(result.popupEntries, clickCount);
    playPotatoAnimation();

    if (result.isBonus) {
      playBonusGlow(result.isEnhancedBonus);
    }
  }
}

function startAutoClickLoop() {
  if (autoClickTimerId !== null) {
    clearTimeout(autoClickTimerId);
  }

  autoClickTimerId = setTimeout(function autoClickTick() {
    const gainedPoints = getEffectiveAutoClickPower();

    if (gainedPoints > 0) {
      addPoints(gainedPoints);
    }

    autoClickTimerId = setTimeout(autoClickTick, getAutoClickInterval());
  }, getAutoClickInterval());
}

function startEnhancedAutoClickLoop() {
  if (enhancedAutoClickTimerId !== null) {
    clearInterval(enhancedAutoClickTimerId);
    enhancedAutoClickTimerId = null;
  }

  if (!enhancedAutoClickUnlocked) {
    return;
  }

  if (enhancedAutoClickTimerId !== null) {
    clearInterval(enhancedAutoClickTimerId);
  }

  enhancedAutoClickTimerId = setInterval(() => {
    gainManualClickPoints({ showEffects: false });
  }, ENHANCED_AUTO_CLICK_INTERVAL);
}

function openUpgradePanel() {
  upgradePanel.classList.add("open");
  panelOverlay.classList.add("show");
  upgradePanel.setAttribute("aria-hidden", "false");
}

function closeUpgradePanel() {
  upgradePanel.classList.remove("open");
  panelOverlay.classList.remove("show");
  upgradePanel.setAttribute("aria-hidden", "true");
}

function canBuyBasicUpgrade(upgradeKey) {
  if (points < upgradeCosts[upgradeKey]) return false;
  if (upgradeKey === "bonusChance" && getBonusChance() >= MAX_BONUS_CHANCE) return false;
  if (upgradeKey === "enhancedBonusChance" && getEnhancedBonusChance() >= MAX_BONUS_CHANCE) return false;
  if (upgradeKey === "autoInterval" && getAutoClickInterval() <= MIN_AUTO_CLICK_INTERVAL) return false;
  if (
    (upgradeKey === "enhancedBonusChance" || upgradeKey === "enhancedBonusMultiplier") &&
    !enhancedBonusUnlocked
  ) {
    return false;
  }

  return true;
}

function buyBasicUpgrade(upgradeKey, options = {}) {
  if (!canBuyBasicUpgrade(upgradeKey)) return false;
  points -= upgradeCosts[upgradeKey];
  upgradeLevels[upgradeKey] += 1;
  upgradeCosts[upgradeKey] = getNextUpgradeCost(upgradeKey, upgradeCosts[upgradeKey]);

  if (upgradeKey === "autoInterval") {
    startAutoClickLoop();
  }

  updateScreen();
  if (options.save !== false) saveGame();
  return true;
}

function syncAutoBasicInputsFromState() {
  BASIC_UPGRADE_KEYS.forEach((upgradeKey) => {
    const controls = AUTO_BASIC_CONTROLS[upgradeKey];
    const setting = autoBasicUpgradeSettings[upgradeKey];
    if (!controls || !setting) return;

    controls.input.value = String(setting.targetLevel);
    controls.button.textContent = setting.enabled ? "ON" : "OFF";
    controls.button.classList.toggle("on", setting.enabled);
    controls.input.disabled = !autoBasicUpgradeUnlocked;
    controls.button.disabled = !autoBasicUpgradeUnlocked;
  });
}

function updateAutoBasicControls() {
  autoBasicUpgradeCard.classList.toggle("unlocked", autoBasicUpgradeUnlocked);
  autoBasicUpgradeCard.classList.toggle("locked-card", !autoBasicUpgradeUnlocked);
  syncAutoBasicInputsFromState();
}

function setAutoBasicTarget(upgradeKey, value) {
  if (!autoBasicUpgradeSettings[upgradeKey]) return;
  autoBasicUpgradeSettings[upgradeKey].targetLevel = Math.max(0, Math.floor(Number(value) || 0));
  saveGame();
}

function toggleAutoBasicTarget(upgradeKey) {
  if (!autoBasicUpgradeUnlocked || !autoBasicUpgradeSettings[upgradeKey]) return;
  autoBasicUpgradeSettings[upgradeKey].enabled = !autoBasicUpgradeSettings[upgradeKey].enabled;
  updateScreen();
  saveGame(true);
}

function processAutoBasicUpgrades() {
  if (!autoBasicUpgradeUnlocked || !autoBasicUpgradeEnabled) return;

  let purchaseCount = 0;
  let didPurchase = false;

  for (const upgradeKey of BASIC_UPGRADE_KEYS) {
    const setting = autoBasicUpgradeSettings[upgradeKey];
    if (!setting || !setting.enabled) continue;

    while (
      upgradeLevels[upgradeKey] < setting.targetLevel &&
      canBuyBasicUpgrade(upgradeKey) &&
      purchaseCount < AUTO_BASIC_PURCHASES_PER_TICK
    ) {
      const purchased = buyBasicUpgrade(upgradeKey, { save: false });
      if (!purchased) break;
      didPurchase = true;
      purchaseCount += 1;
    }

    if (purchaseCount >= AUTO_BASIC_PURCHASES_PER_TICK) break;
  }

  if (didPurchase) {
    startAutoClickLoop();
    updateScreen();
    saveGame(false);
  }
}

function startAutoBasicUpgradeLoop() {
  if (autoBasicUpgradeTimerId !== null) {
    clearInterval(autoBasicUpgradeTimerId);
  }

  autoBasicUpgradeTimerId = setInterval(processAutoBasicUpgrades, AUTO_BASIC_UPGRADE_INTERVAL);
}

function raiseBasicLevelsToInitialBonus() {
  BASIC_UPGRADE_KEYS.forEach((upgradeKey) => {
    upgradeLevels[upgradeKey] = Math.max(upgradeLevels[upgradeKey], basicInitialLevelBonus);
  });
}

function reduceCurrentBasicUpgradeCosts() {
  BASIC_UPGRADE_KEYS.forEach((upgradeKey) => {
    upgradeCosts[upgradeKey] = Math.max(1, Math.floor(upgradeCosts[upgradeKey] * 0.9));
  });
}

function executePrestigeReset(options = {}) {
  const ignoreCostCheck = options.ignoreCostCheck === true;

  if (!ignoreCostCheck && points < PRESTIGE_COST) return;
  if (ignoreCostCheck && points < PRESTIGE_COST) return;

  points = 0;
  prestigeCount += 1;
  prestigePoints += getPrestigePointGain();

  // 高級リセット時は、選んだ高級アップグレードとは別に必ず +0.01 される。
  globalPointMultiplier += GLOBAL_POINT_MULTIPLIER_INCREMENT;

  resetBasicUpgrades();
  startAutoClickLoop();
  startEnhancedAutoClickLoop();
  showPrestigeTopDisplay();
  updateScreen();
  saveGame(true);
}

function buyPrestigeUpgrade(prestigeType) {
  const requiredPrestigePoints = getPrestigeUpgradeCost(prestigeType);

  if (prestigePoints < requiredPrestigePoints) return;
  if (prestigeType === "enhancedAuto" && enhancedAutoClickUnlocked) return;
  if (prestigeType === "enhancedBonus" && enhancedBonusUnlocked) return;
  if (prestigeType === "autoPrestige" && autoPrestigeUnlocked) return;
  if (prestigeType === "autoBasicUpgrade" && autoBasicUpgradeUnlocked) return;
  if (
    prestigeType === "initialLevel" &&
    basicInitialLevelBonus >= MAX_BASIC_INITIAL_LEVEL_BONUS
  ) {
    return;
  }

  prestigePoints -= requiredPrestigePoints;
  prestigeUpgradePurchaseCounts[prestigeType] = getPrestigeUpgradePurchaseCount(prestigeType) + 1;

  if (prestigeType === "enhancedAuto") {
    enhancedAutoClickUnlocked = true;
    startEnhancedAutoClickLoop();
  }

  if (prestigeType === "enhancedBonus") {
    enhancedBonusUnlocked = true;
  }

  if (prestigeType === "initialLevel") {
    basicInitialLevelBonus = Math.min(
      MAX_BASIC_INITIAL_LEVEL_BONUS,
      basicInitialLevelBonus + BASIC_INITIAL_LEVEL_BONUS_INCREMENT
    );
    raiseBasicLevelsToInitialBonus();
  }

  if (prestigeType === "costReduction") {
    basicCostMultiplier *= 0.9;
    reduceCurrentBasicUpgradeCosts();
  }

  if (prestigeType === "premiumAutoMultiplier") {
    premiumAutoMultiplier = getNextPremiumAutoMultiplier();
    premiumAutoMultiplierUpgradeCount += 1;
  }

  if (prestigeType === "manualFinalMultiplier") {
    manualFinalMultiplier = getNextManualFinalMultiplier();
    manualFinalMultiplierUpgradeCount += 1;
  }

  if (prestigeType === "autoPrestige") {
    autoPrestigeUnlocked = true;
    autoPrestigeEnabled = true;
    checkAutoPrestigeReset();
  }

  if (prestigeType === "autoBasicUpgrade") {
    autoBasicUpgradeUnlocked = true;
    autoBasicUpgradeEnabled = true;
  }

  if (prestigeType === "prestigePointGain") {
    prestigePointGainUpgradeCount += 1;
  }

  startAutoClickLoop();
  updateScreen();
  saveGame(true);
}

function toggleAutoPrestige() {
  if (!autoPrestigeUnlocked) return;
  autoPrestigeEnabled = !autoPrestigeEnabled;
  updateScreen();
  saveGame(true);
  checkAutoPrestigeReset();
}

function toggleAutoBasicUpgrade() {
  if (!autoBasicUpgradeUnlocked) return;
  autoBasicUpgradeEnabled = !autoBasicUpgradeEnabled;
  updateScreen();
  saveGame(true);
}

function resetPrestigeLayerForBigBang() {
  points = 0;
  prestigeCount = 0;
  globalPointMultiplier = 1 + bigBangGlobalPointBonus;
  enhancedAutoClickUnlocked = false;
  enhancedBonusUnlocked = false;
  basicInitialLevelBonus = 0;
  basicCostMultiplier = 1;
  premiumAutoMultiplier = 1;
  premiumAutoMultiplierUpgradeCount = 0;
  manualFinalMultiplier = 1;
  manualFinalMultiplierUpgradeCount = 0;
  autoPrestigeUnlocked = false;
  autoPrestigeEnabled = false;
  autoBasicUpgradeUnlocked = false;
  autoBasicUpgradeEnabled = false;
  autoBasicUpgradeSettings = createAutoBasicUpgradeSettings();
  prestigePointGainUpgradeCount = 0;
  prestigeUpgradePurchaseCounts = createPrestigeUpgradePurchaseCounts();
  resetBasicUpgrades();
  startAutoClickLoop();
  startEnhancedAutoClickLoop();
}

function executeBigBangReset() {
  if (prestigePoints < BIG_BANG_COST) return;

  const gainedBigBangPoints = getBigBangPointGain();
  prestigePoints -= BIG_BANG_COST;
  bigBangPoints += gainedBigBangPoints;
  bigBangCount += 1;
  bigBangGlobalPointBonus += BIG_BANG_GLOBAL_POINT_BONUS_INCREMENT;

  resetPrestigeLayerForBigBang();
  hidePrestigeTopDisplay();
  updateScreen();
  saveGame(true);
}

function buyBigBangUpgrade(type) {
  if (type === "normalMultiplier") {
    if (bigBangPoints < 1) return;
    bigBangPoints -= 1;
    bigBangNormalMultiplierUpgradeCount += 1;
  }

  if (type === "prestigeMultiplier") {
    if (bigBangPoints < 1) return;
    bigBangPoints -= 1;
    bigBangPrestigeMultiplierUpgradeCount += 1;
  }

  if (type === "pointGain") {
    const cost = getBigBangPointGainUpgradeCost();
    if (bigBangPoints < cost) return;
    bigBangPoints -= cost;
    bigBangPointGainUpgradeCount += 1;
  }

  updateScreen();
  saveGame(true);
}

potatoButton.addEventListener("click", () => {
  gainManualClickPoints({ showEffects: true });
});

clickUpgradeButton.addEventListener("click", () => buyBasicUpgrade("clickPower"));
clickCountUpgradeButton.addEventListener("click", () => buyBasicUpgrade("clickCount"));
autoClickUpgradeButton.addEventListener("click", () => buyBasicUpgrade("autoClick"));
autoIntervalUpgradeButton.addEventListener("click", () => buyBasicUpgrade("autoInterval"));
autoMultiplierUpgradeButton.addEventListener("click", () => buyBasicUpgrade("autoMultiplier"));
bonusChanceUpgradeButton.addEventListener("click", () => buyBasicUpgrade("bonusChance"));
bonusMultiplierUpgradeButton.addEventListener("click", () => buyBasicUpgrade("bonusMultiplier"));
enhancedBonusChanceUpgradeButton.addEventListener("click", () => buyBasicUpgrade("enhancedBonusChance"));
enhancedBonusMultiplierUpgradeButton.addEventListener("click", () => buyBasicUpgrade("enhancedBonusMultiplier"));

prestigeResetButton.addEventListener("click", executePrestigeReset);
prestigeEnhancedAutoButton.addEventListener("click", () => buyPrestigeUpgrade("enhancedAuto"));
prestigeEnhancedBonusButton.addEventListener("click", () => buyPrestigeUpgrade("enhancedBonus"));
prestigeInitialLevelButton.addEventListener("click", () => buyPrestigeUpgrade("initialLevel"));
prestigeCostReductionButton.addEventListener("click", () => buyPrestigeUpgrade("costReduction"));
prestigePremiumAutoMultiplierButton.addEventListener("click", () => buyPrestigeUpgrade("premiumAutoMultiplier"));
prestigeManualFinalMultiplierButton.addEventListener("click", () => buyPrestigeUpgrade("manualFinalMultiplier"));
prestigeAutoResetButton.addEventListener("click", () => buyPrestigeUpgrade("autoPrestige"));
prestigeAutoBasicUpgradeButton.addEventListener("click", () => buyPrestigeUpgrade("autoBasicUpgrade"));
prestigePointGainButton.addEventListener("click", () => buyPrestigeUpgrade("prestigePointGain"));
toggleAutoPrestigeButton.addEventListener("click", toggleAutoPrestige);
toggleAutoBasicUpgradeButton.addEventListener("click", toggleAutoBasicUpgrade);
bigBangResetButton.addEventListener("click", executeBigBangReset);
bigBangNormalMultiplierButton.addEventListener("click", () => buyBigBangUpgrade("normalMultiplier"));
bigBangPrestigeMultiplierButton.addEventListener("click", () => buyBigBangUpgrade("prestigeMultiplier"));
bigBangPointGainButton.addEventListener("click", () => buyBigBangUpgrade("pointGain"));
manualSaveButton.addEventListener("click", () => saveGame(true));
deleteSaveButton.addEventListener("click", deleteSaveData);

BASIC_UPGRADE_KEYS.forEach((upgradeKey) => {
  const controls = AUTO_BASIC_CONTROLS[upgradeKey];
  if (!controls) return;

  controls.input.addEventListener("change", () => setAutoBasicTarget(upgradeKey, controls.input.value));
  controls.input.addEventListener("blur", () => setAutoBasicTarget(upgradeKey, controls.input.value));
  controls.button.addEventListener("click", () => toggleAutoBasicTarget(upgradeKey));
});

menuButton.addEventListener("click", openUpgradePanel);
closePanelButton.addEventListener("click", closeUpgradePanel);
panelOverlay.addEventListener("click", closeUpgradePanel);
document.addEventListener("keydown", handleDebugCommand);

resetBasicUpgrades();
loadGame();
startAutoClickLoop();
startEnhancedAutoClickLoop();
startAutoBasicUpgradeLoop();
updateScreen();
setInterval(() => saveGame(false), AUTO_SAVE_INTERVAL);
window.addEventListener("beforeunload", () => saveGame(false));
