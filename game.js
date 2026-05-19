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
const prestigeCountText = document.getElementById("prestigeCountText");
const globalPointMultiplierText = document.getElementById("globalPointMultiplierText");
const enhancedAutoClickStatusText = document.getElementById("enhancedAutoClickStatusText");
const enhancedBonusStatusText = document.getElementById("enhancedBonusStatusText");
const basicInitialLevelBonusText = document.getElementById("basicInitialLevelBonusText");
const basicCostMultiplierText = document.getElementById("basicCostMultiplierText");
const premiumAutoMultiplierText = document.getElementById("premiumAutoMultiplierText");
const manualFinalMultiplierText = document.getElementById("manualFinalMultiplierText");

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

const prestigeEnhancedAutoButton = document.getElementById("prestigeEnhancedAutoButton");
const prestigeEnhancedBonusButton = document.getElementById("prestigeEnhancedBonusButton");
const prestigeInitialLevelButton = document.getElementById("prestigeInitialLevelButton");
const prestigeCostReductionButton = document.getElementById("prestigeCostReductionButton");
const prestigePremiumAutoMultiplierButton = document.getElementById("prestigePremiumAutoMultiplierButton");
const prestigeManualFinalMultiplierButton = document.getElementById("prestigeManualFinalMultiplierButton");

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
const AUTO_INTERVAL_REDUCTION_RATE = 0.95; // レベルごとに間隔 -5%
const MIN_AUTO_CLICK_INTERVAL = 100; // 負荷対策として最短 0.10秒
const ENHANCED_AUTO_CLICK_INTERVAL = 200; // 毎秒5回
const GAIN_POPUP_LIFETIME = 700;
const MAX_BONUS_CHANCE = 100;
const MIN_COST_GROWTH_RATE = 1.1;

let points = 0;
let upgradeLevels = {};
let upgradeCosts = {};

let prestigeCount = 0;
let globalPointMultiplier = 1;
let enhancedAutoClickUnlocked = false;
let enhancedBonusUnlocked = false;
let basicInitialLevelBonus = 0;
let basicCostMultiplier = 1;
let premiumAutoMultiplier = 1;
let premiumAutoMultiplierUpgradeCount = 0;
let manualFinalMultiplier = 1;
let manualFinalMultiplierUpgradeCount = 0;

let autoClickTimerId = null;
let enhancedAutoClickTimerId = null;

function formatNumber(value) {
  const normalizedValue = Math.abs(value) < 0.000001 ? 0 : value;
  const isInteger = Math.abs(normalizedValue - Math.round(normalizedValue)) < 0.000001;
  const options = isInteger
    ? { maximumFractionDigits: 0 }
    : { minimumFractionDigits: 1, maximumFractionDigits: 1 };

  return normalizedValue.toLocaleString("ja-JP", options);
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

function getEffectiveAutoClickPower() {
  return getAutoClickPower() * getBasicAutoMultiplier() * premiumAutoMultiplier * globalPointMultiplier;
}

function getAutoClickInterval() {
  const interval = Math.round(
    1000 * AUTO_INTERVAL_REDUCTION_RATE ** upgradeLevels.autoInterval
  );

  return Math.max(MIN_AUTO_CLICK_INTERVAL, interval);
}

function getBonusChance() {
  return Math.min(MAX_BONUS_CHANCE, 1 + upgradeLevels.bonusChance);
}

function getBonusMultiplier() {
  return 2 + upgradeLevels.bonusMultiplier * 0.5;
}

function getEnhancedBonusChance() {
  return Math.min(MAX_BONUS_CHANCE, 1 + upgradeLevels.enhancedBonusChance);
}

function getEnhancedBonusMultiplier() {
  return 2 + upgradeLevels.enhancedBonusMultiplier * 0.5;
}

function getNextPremiumAutoMultiplier() {
  return premiumAutoMultiplierUpgradeCount === 0
    ? 4
    : premiumAutoMultiplier + 2;
}

function getNextManualFinalMultiplier() {
  return manualFinalMultiplierUpgradeCount === 0
    ? 1.5
    : manualFinalMultiplier + 0.5;
}

function updateScreen() {
  const autoClickInterval = getAutoClickInterval();
  const canPrestige = points >= PRESTIGE_COST;
  const isBonusChanceMaxed = getBonusChance() >= MAX_BONUS_CHANCE;
  const isEnhancedBonusChanceMaxed = getEnhancedBonusChance() >= MAX_BONUS_CHANCE;
  const isAutoIntervalMaxed = autoClickInterval <= MIN_AUTO_CLICK_INTERVAL;

  pointText.textContent = formatNumber(points);
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

  prestigeEnhancedAutoButton.disabled = !canPrestige || enhancedAutoClickUnlocked;
  prestigeEnhancedBonusButton.disabled = !canPrestige || enhancedBonusUnlocked;
  prestigeInitialLevelButton.disabled = !canPrestige;
  prestigeCostReductionButton.disabled = !canPrestige;
  prestigePremiumAutoMultiplierButton.disabled = !canPrestige;
  prestigeManualFinalMultiplierButton.disabled = !canPrestige;

  prestigeEnhancedAutoButton.textContent = enhancedAutoClickUnlocked
    ? "強化オートクリックは解放済み"
    : "リセットして「強化オートクリック解放」";
  prestigeEnhancedBonusButton.textContent = enhancedBonusUnlocked
    ? "強化ボーナスは解放済み"
    : "リセットして「強化ボーナス解放」";
  prestigePremiumAutoMultiplierButton.textContent =
    `リセットして「オートクリック高級倍率 ${formatMultiplier(getNextPremiumAutoMultiplier())}倍」`;
  prestigeManualFinalMultiplierButton.textContent =
    `リセットして「通常クリック最終倍率 ${formatMultiplier(getNextManualFinalMultiplier())}倍」`;
}

function addPoints(amount) {
  points += amount;
  updateScreen();
}

function playPotatoAnimation() {
  potatoImage.classList.remove("pop");

  // 同じアニメーションを連続クリックでも再生できるようにする
  void potatoImage.offsetWidth;

  potatoImage.classList.add("pop");
}

function showGainPopup(amount, type) {
  const popup = document.createElement("span");
  popup.className = `gain-popup ${type}`.trim();
  popup.textContent = `+${formatNumber(amount)}`;
  popup.setAttribute("aria-hidden", "true");

  // ジャガイモの近くにランダム表示する。
  popup.style.left = `${50 + Math.random() * 38 - 19}%`;
  popup.style.top = `${32 + Math.random() * 30 - 15}%`;

  potatoButton.append(popup);

  popup.addEventListener("animationend", () => popup.remove(), { once: true });

  // animationend が発火しなかった場合の保険
  setTimeout(() => popup.remove(), GAIN_POPUP_LIFETIME);
}

function showGainPopups(popupEntries, count) {
  for (let i = 0; i < count; i += 1) {
    popupEntries.forEach((entry) => {
      showGainPopup(entry.amount, entry.type);
    });
  }
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
  const finalManualMultiplier = globalPointMultiplier * manualFinalMultiplier;
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

function buyBasicUpgrade(upgradeKey) {
  if (points < upgradeCosts[upgradeKey]) return;
  if (upgradeKey === "bonusChance" && getBonusChance() >= MAX_BONUS_CHANCE) return;
  if (upgradeKey === "enhancedBonusChance" && getEnhancedBonusChance() >= MAX_BONUS_CHANCE) return;
  if (upgradeKey === "autoInterval" && getAutoClickInterval() <= MIN_AUTO_CLICK_INTERVAL) return;
  if (
    (upgradeKey === "enhancedBonusChance" || upgradeKey === "enhancedBonusMultiplier") &&
    !enhancedBonusUnlocked
  ) {
    return;
  }

  points -= upgradeCosts[upgradeKey];
  upgradeLevels[upgradeKey] += 1;
  upgradeCosts[upgradeKey] = getNextUpgradeCost(upgradeKey, upgradeCosts[upgradeKey]);

  if (upgradeKey === "autoInterval") {
    startAutoClickLoop();
  }

  updateScreen();
}

function applyPrestigeChoice(prestigeType) {
  if (points < PRESTIGE_COST) return;
  if (prestigeType === "enhancedAuto" && enhancedAutoClickUnlocked) return;
  if (prestigeType === "enhancedBonus" && enhancedBonusUnlocked) return;

  points = 0;
  prestigeCount += 1;

  // 高級リセット時は、選んだ効果に関係なく必ず全ポイント倍率が1.1倍になる。
  globalPointMultiplier *= 1.1;

  if (prestigeType === "enhancedAuto") {
    enhancedAutoClickUnlocked = true;
  }

  if (prestigeType === "enhancedBonus") {
    enhancedBonusUnlocked = true;
  }

  if (prestigeType === "initialLevel") {
    basicInitialLevelBonus += 10;
  }

  if (prestigeType === "costReduction") {
    basicCostMultiplier *= 0.9;
  }

  if (prestigeType === "premiumAutoMultiplier") {
    premiumAutoMultiplier = getNextPremiumAutoMultiplier();
    premiumAutoMultiplierUpgradeCount += 1;
  }

  if (prestigeType === "manualFinalMultiplier") {
    manualFinalMultiplier = getNextManualFinalMultiplier();
    manualFinalMultiplierUpgradeCount += 1;
  }

  resetBasicUpgrades();
  startAutoClickLoop();
  startEnhancedAutoClickLoop();
  updateScreen();
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

prestigeEnhancedAutoButton.addEventListener("click", () => applyPrestigeChoice("enhancedAuto"));
prestigeEnhancedBonusButton.addEventListener("click", () => applyPrestigeChoice("enhancedBonus"));
prestigeInitialLevelButton.addEventListener("click", () => applyPrestigeChoice("initialLevel"));
prestigeCostReductionButton.addEventListener("click", () => applyPrestigeChoice("costReduction"));
prestigePremiumAutoMultiplierButton.addEventListener("click", () => applyPrestigeChoice("premiumAutoMultiplier"));
prestigeManualFinalMultiplierButton.addEventListener("click", () => applyPrestigeChoice("manualFinalMultiplier"));

menuButton.addEventListener("click", openUpgradePanel);
closePanelButton.addEventListener("click", closeUpgradePanel);
panelOverlay.addEventListener("click", closeUpgradePanel);

resetBasicUpgrades();
startAutoClickLoop();
updateScreen();
