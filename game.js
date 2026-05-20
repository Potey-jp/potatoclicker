const $ = (id) => document.getElementById(id);

const els = {
  scoreArea: $("scoreArea"), mainScoreLabel: $("mainScoreLabel"), secondaryScoreArea: $("secondaryScoreArea"), secondaryScoreLabel: $("secondaryScoreLabel"), secondaryScoreText: $("secondaryScoreText"), pointText: $("pointText"), multiplierFormulaText: $("multiplierFormulaText"),
  menuButton: $("menuButton"), statsButton: $("statsButton"), closePanelButton: $("closePanelButton"), closeStatsButton: $("closeStatsButton"), upgradePanel: $("upgradePanel"), statsPanel: $("statsPanel"), panelOverlay: $("panelOverlay"), statsContent: $("statsContent"),
  potatoButton: $("potatoButton"), potatoImage: $("potatoImage"),
  debugModal: $("debugModal"), debugFields: $("debugFields"), closeDebugButton: $("closeDebugButton"), cancelDebugButton: $("cancelDebugButton"), applyDebugButton: $("applyDebugButton"),
  saveStatusText: $("saveStatusText"), autoBasicRows: $("autoBasicRows"), autoPrestigeTargetInput: $("autoPrestigeTargetInput"), autoPrestigeSettings: $("autoPrestigeSettings"),
};

const BASIC_KEYS = ["clickPower","clickCount","autoClick","autoInterval","autoMultiplier","bonusChance","bonusMultiplier","enhancedBonusChance","enhancedBonusMultiplier"];
const BASIC_LABELS = {
  clickPower:"クリック強化", clickCount:"クリック回数強化", autoClick:"オートクリック", autoInterval:"オート間隔短縮", autoMultiplier:"オートクリック倍加", bonusChance:"ボーナス確率", bonusMultiplier:"ボーナス倍率", enhancedBonusChance:"強化ボーナス確率", enhancedBonusMultiplier:"強化ボーナス倍率"
};
const BASIC_CONFIG = {
  clickPower:{baseCost:10,growth:1.6}, clickCount:{baseCost:75,growth:1.75}, autoClick:{baseCost:25,growth:1.7}, autoInterval:{baseCost:150,growth:1.65}, autoMultiplier:{baseCost:300,growth:2}, bonusChance:{baseCost:50,growth:1.55}, bonusMultiplier:{baseCost:100,growth:1.9}, enhancedBonusChance:{baseCost:500,growth:1.6}, enhancedBonusMultiplier:{baseCost:800,growth:1.95}
};
const PRESTIGE_TYPES = ["enhancedAuto","enhancedBonus","initialLevel","costReduction","premiumAutoMultiplier","manualFinalMultiplier","autoPrestige","autoBasicUpgrade","prestigePointGain"];
const PRESTIGE_BASE_COST = { enhancedAuto:1, enhancedBonus:1, initialLevel:1, costReduction:1, premiumAutoMultiplier:1, manualFinalMultiplier:1, autoPrestige:5, autoBasicUpgrade:10, prestigePointGain:1 };
const PRESTIGE_LABELS = { enhancedAuto:"強化オートクリック解放", enhancedBonus:"強化ボーナス解放", initialLevel:"基本初期値 +2", costReduction:"基本コスト 0.9倍", premiumAutoMultiplier:"オートクリック高級倍率", manualFinalMultiplier:"通常クリック最終倍率", autoPrestige:"自動リセット解放", autoBasicUpgrade:"基本アップグレード自動強化解放", prestigePointGain:"高級ポイント獲得量 +1" };

const PRESTIGE_COST = 1_000_000;
const BIG_BANG_COST = 1_000_000;
const BIG_BANG_VISIBLE_THRESHOLD = 100_000;
const SAVE_KEY = "potatoClickerSaveData_v2";
const OLD_SAVE_KEYS = ["potatoClickerSaveData_v1"];
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
    prestigePointGainLevel:0,
    prestigePurchaseCounts:pCounts,
    bbNormalMultiplierLevel:0, bbPrestigeMultiplierLevel:0, bbPointGainLevel:0,
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
}

function num(value, fallback) { return Number.isFinite(Number(value)) ? Number(value) : fallback; }
function fmt(value) {
  const units = ["","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No"];
  const v = Math.abs(value) < 1e-9 ? 0 : value;
  const sign = v < 0 ? "-" : "";
  let a = Math.abs(v);
  if (a < 1000) return sign + a.toLocaleString("ja-JP", { maximumFractionDigits: Math.abs(a - Math.round(a)) < 1e-9 ? 0 : 2 });
  let i = Math.min(units.length - 1, Math.floor(Math.log10(a) / 3));
  let n = a / 1000 ** i;
  return sign + n.toLocaleString("ja-JP", { maximumFractionDigits: n >= 100 ? 0 : n >= 10 ? 1 : 2 }) + units[i];
}
function fmtFull(value) { return num(value,0).toLocaleString("ja-JP", { maximumFractionDigits: 2 }); }
function fmtMult(value) { return num(value,0).toFixed(2).replace(/0+$/, "").replace(/\.$/, ""); }
function fmtSec(ms) { return (ms / 1000).toLocaleString("ja-JP", { minimumFractionDigits:2, maximumFractionDigits:2 }); }
function fmtPct(value) { return (value * 100).toLocaleString("ja-JP", { maximumFractionDigits:1 }); }

function getInitialBasicCost(key) { return Math.max(1, Math.floor(BASIC_CONFIG[key].baseCost * state.basicCostMultiplier)); }
function getNextBasicCost(key, cost) { return Math.max(1, Math.floor(cost * BASIC_CONFIG[key].growth), Math.ceil(cost * 1.1)); }
function resetBasicUpgrades() { BASIC_KEYS.forEach((k) => { state.basicLevels[k] = state.basicInitialLevelBonus; state.basicCosts[k] = getInitialBasicCost(k); }); }
function resetPrestigeLayer() {
  state.points = 0; state.prestigePoints = 0; state.prestigeResetCount = 0; state.prestigeBasicMultiplier = 1;
  state.enhancedAutoUnlocked = false; state.enhancedBonusUnlocked = false;
  state.basicInitialLevelBonus = 0; state.basicCostMultiplier = 1;
  state.premiumAutoMultiplier = 1; state.premiumAutoLevel = 0;
  state.manualFinalMultiplier = 1; state.manualFinalLevel = 0;
  state.autoPrestigeUnlocked = false; state.autoPrestigeEnabled = false; state.autoPrestigeTarget = 1;
  state.autoBasicUnlocked = false; state.autoBasicEnabled = false;
  state.prestigePointGainLevel = 0;
  state.autoBasicSettings = createInitialState().autoBasicSettings;
  state.prestigePurchaseCounts = createInitialState().prestigePurchaseCounts;
  resetBasicUpgrades();
}
function resetAll() { assignState(createInitialState()); resetBasicUpgrades(); clearPopups(); hidePrestigeTopDisplay(); restartLoops(); updateScreen(); }

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
function getNormalPointMultiplier() { return state.prestigeBasicMultiplier * state.bbAllMultiplier * getBbNormalMultiplier(); }
function getPrestigePointMultiplier() { return state.bbAllMultiplier * getBbPrestigeMultiplier(); }
function getPrestigeGainPerReset() { return Math.max(1, Math.floor((1 + state.prestigePointGainLevel) * getPrestigePointMultiplier())); }
function getBigBangGainPerReset() { return 1 + state.bbPointGainLevel; }
function getEffectiveAutoClickPower() { return getAutoClickBase() * getAutoMultiplier() * state.premiumAutoMultiplier * getNormalPointMultiplier(); }
function getNextPremiumAutoMultiplier() { return state.premiumAutoLevel === 0 ? 10 : state.premiumAutoMultiplier + 10; }
function getNextManualFinalMultiplier() { return state.manualFinalLevel === 0 ? 1.5 : state.manualFinalMultiplier + 0.5; }
function getPrestigeCost(type) {
  if (type === "prestigePointGain") return Math.max(1, Math.floor(getPrestigeGainPerReset() * (state.prestigePointGainLevel / 2)));
  return (PRESTIGE_BASE_COST[type] || 1) + Math.floor((state.prestigePurchaseCounts[type] || 0) / 2);
}
function getBbPointGainCost() { return Math.max(1, Math.floor(getBigBangGainPerReset() / 1.25 + state.bbPointGainLevel)); }

function createSaveData() { return JSON.parse(JSON.stringify({ version:2, savedAt:new Date().toISOString(), ...state })); }
function saveGame(show=false) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(createSaveData()));
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
    assignState(data);
    setSaveStatus("ロード済み");
  } catch (e) { resetBasicUpgrades(); setSaveStatus("ロード失敗"); console.error(e); }
}
function deleteSaveData() {
  if (!confirm("本当にセーブデータを初期化しますか？\n現在のゲームデータもすべて初期化されます。")) { setSaveStatus("初期化キャンセル"); return; }
  if (!confirm("最終確認です。初期化すると元に戻せません。\n本当にすべて初期化しますか？")) { setSaveStatus("初期化キャンセル"); return; }
  localStorage.removeItem(SAVE_KEY); localStorage.removeItem(`${SAVE_KEY}_status`); OLD_SAVE_KEYS.forEach((k) => localStorage.removeItem(k));
  resetAll(); saveGame(false); setSaveStatus("初期化しました");
}

function updateScreen() {
  updateTopScore(); updateBasicDisplay(); updatePrestigeDisplay(); updateAutoBasicDisplay(); updateBigBangDisplay(); updateStats();
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
  els.multiplierFormulaText.textContent = `*${fmtMult(state.prestigeBasicMultiplier)} *${fmtMult(state.bbAllMultiplier)}`;
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
      ${statRow("高級全基本ポイント倍率", `${fmtMult(state.prestigeBasicMultiplier)}倍`)}${statRow("BB全基本・高級ポイント倍率", `${fmtMult(state.bbAllMultiplier)}倍`)}${statRow("通常ポイントBB倍率", `${fmtMult(getBbNormalMultiplier())}倍`)}${statRow("高級ポイントBB倍率", `${fmtMult(getBbPrestigeMultiplier())}倍`)}${statRow("高級オート倍率", `${fmtMult(state.premiumAutoMultiplier)}倍`)}${statRow("通常クリック最終倍率", `${fmtMult(state.manualFinalMultiplier)}倍`)}
    </div></div>
    <div class="stat-group"><h3>解放状態</h3><div class="stat-grid">
      ${statRow("強化オートクリック", state.enhancedAutoUnlocked ? "解放済み" : "未解放")}${statRow("強化ボーナス", state.enhancedBonusUnlocked ? "解放済み" : "未解放")}${statRow("自動リセット", state.autoPrestigeUnlocked ? (state.autoPrestigeEnabled ? `ON / ${fmt(state.autoPrestigeTarget)}回単位` : "OFF") : "未解放")}${statRow("基本自動強化", state.autoBasicUnlocked ? (state.autoBasicEnabled ? "ON" : "OFF") : "未解放")}${statRow("基本初期値", `+${fmt(state.basicInitialLevelBonus)}`)}${statRow("基本コスト倍率", `${fmtPct(state.basicCostMultiplier)}%`)}
    </div></div>`;
}
function statRow(label, value) { return `<div class="stat-row"><span>${label}</span><span>${value}</span></div>`; }

function addPoints(amount) { state.points += amount; updateScreen(); checkAutoPrestige(); }
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
  state.points -= state.basicCosts[key]; state.basicLevels[key] += 1; state.basicCosts[key] = getNextBasicCost(key, state.basicCosts[key]);
  if (key === "autoInterval") startAutoClickLoop();
  updateScreen(); if (options.save !== false) saveGame(); return true;
}
function calculateClickGain() {
  const manualMultiplier = getNormalPointMultiplier() * state.manualFinalMultiplier;
  const base = getClickPower() * manualMultiplier;
  const isBonus = Math.random() * 100 < getBonusChance();
  if (!isBonus) return {perCount:base, entries:[{amount:base,type:"normal"}], bonus:false, enhanced:false};
  const bonus = getClickPower() * getBonusMultiplier() * manualMultiplier;
  const entries = [{amount:bonus,type:"bonus"}]; let total = bonus;
  const enhanced = state.enhancedBonusUnlocked && Math.random() * 100 < getEnhancedBonusChance();
  if (enhanced) { const extra = getClickPower() * getBonusMultiplier() * getEnhancedBonusMultiplier() * manualMultiplier; total += extra; entries.push({amount:extra,type:"enhanced"}); }
  return {perCount:total, entries, bonus:true, enhanced};
}
function gainManual(showEffects) {
  const result = calculateClickGain(); const count = getClickCount(); addPoints(result.perCount * count);
  if (showEffects) { showGainPopups(result.entries, count); playPotatoAnimation(); if (result.bonus) playBonusGlow(result.enhanced); }
}
function executePrestigeReset() {
  const count = Math.floor(state.points / PRESTIGE_COST); if (count < 1) return;
  state.points = 0;
  state.prestigeResetCount += count;
  state.prestigePoints += count * getPrestigeGainPerReset();
  state.prestigeBasicMultiplier += 0.01 * count;
  resetBasicUpgrades(); restartLoops(); showPrestigeTopDisplay(); updateScreen(); saveGame(true);
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
  restartLoops(); updateScreen(); saveGame(true); checkAutoPrestige();
}
function executeBigBangReset() {
  const count = Math.floor(state.prestigePoints / BIG_BANG_COST); if (count < 1) return;
  const gain = count * getBigBangGainPerReset();
  state.bigBangPoints += gain; state.bigBangCount += count; state.bbAllMultiplier += 0.1 * count;
  resetPrestigeLayer(); // 高級ポイントも0にし、高級全基本ポイント倍率も1に戻す
  hidePrestigeTopDisplay(); restartLoops(); updateScreen(); saveGame(true);
}
function buyBigBang(type) {
  if (type === "normal") { if (state.bigBangPoints < 1) return; state.bigBangPoints -= 1; state.bbNormalMultiplierLevel += 1; }
  if (type === "prestige") { if (state.bigBangPoints < 1) return; state.bigBangPoints -= 1; state.bbPrestigeMultiplierLevel += 1; }
  if (type === "gain") { const c = getBbPointGainCost(); if (state.bigBangPoints < c) return; state.bigBangPoints -= c; state.bbPointGainLevel += 1; }
  updateScreen(); saveGame(true);
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
function processAutoBasic() {
  if (!state.autoBasicUnlocked || !state.autoBasicEnabled) return;
  let purchases = 0, did = false;
  for (const key of BASIC_KEYS) {
    const s = state.autoBasicSettings[key]; if (!s.enabled) continue;
    while (state.basicLevels[key] < s.targetLevel && canBuyBasic(key) && purchases < AUTO_BASIC_PURCHASES_PER_TICK) { if (!buyBasic(key, {save:false})) break; purchases++; did = true; }
    if (purchases >= AUTO_BASIC_PURCHASES_PER_TICK) break;
  }
  if (did) { restartLoops(); saveGame(false); }
}
function startAutoBasicLoop() { clearInterval(autoBasicTimer); autoBasicTimer = setInterval(processAutoBasic, AUTO_BASIC_INTERVAL); }
function restartLoops() { startAutoClickLoop(); startEnhancedAutoLoop(); }

function openPanel(panel) { els.upgradePanel.classList.remove("open"); els.statsPanel.classList.remove("open"); panel.classList.add("open"); els.panelOverlay.classList.add("show"); panel.setAttribute("aria-hidden", "false"); }
function closePanels() { els.upgradePanel.classList.remove("open"); els.statsPanel.classList.remove("open"); els.panelOverlay.classList.remove("show"); els.upgradePanel.setAttribute("aria-hidden", "true"); els.statsPanel.setAttribute("aria-hidden", "true"); }
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
  $("bigBangResetButton").addEventListener("click", executeBigBangReset);
  $("bigBangNormalMultiplierButton").addEventListener("click", () => buyBigBang("normal"));
  $("bigBangPrestigeMultiplierButton").addEventListener("click", () => buyBigBang("prestige"));
  $("bigBangPointGainButton").addEventListener("click", () => buyBigBang("gain"));
  $("manualSaveButton").addEventListener("click", () => saveGame(true));
  $("deleteSaveButton").addEventListener("click", deleteSaveData);
  els.menuButton.addEventListener("click", () => openPanel(els.upgradePanel));
  els.statsButton.addEventListener("click", () => openPanel(els.statsPanel));
  els.closePanelButton.addEventListener("click", closePanels);
  els.closeStatsButton.addEventListener("click", closePanels);
  els.panelOverlay.addEventListener("click", closePanels);
  els.closeDebugButton.addEventListener("click", closeDebugModal);
  els.cancelDebugButton.addEventListener("click", closeDebugModal);
  els.applyDebugButton.addEventListener("click", applyDebugFields);
  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("beforeunload", () => saveGame(false));
}

buildAutoBasicRows(); buildDebugFields(); resetBasicUpgrades(); loadGame(); bindEvents(); restartLoops(); startAutoBasicLoop(); updateScreen(); setInterval(() => saveGame(false), AUTO_SAVE_INTERVAL);
