const pointText = document.getElementById("pointText");
const clickPowerText = document.getElementById("clickPowerText");
const autoClickText = document.getElementById("autoClickText");
const clickUpgradeCostText = document.getElementById("clickUpgradeCostText");
const autoClickCostText = document.getElementById("autoClickCostText");
const bonusChanceText = document.getElementById("bonusChanceText");
const bonusMultiplierText = document.getElementById("bonusMultiplierText");
const bonusChanceCostText = document.getElementById("bonusChanceCostText");
const bonusMultiplierCostText = document.getElementById("bonusMultiplierCostText");

const potatoButton = document.getElementById("potatoButton");
const potatoImage = document.getElementById("potatoImage");

const menuButton = document.getElementById("menuButton");
const closePanelButton = document.getElementById("closePanelButton");
const upgradePanel = document.getElementById("upgradePanel");
const panelOverlay = document.getElementById("panelOverlay");

const clickUpgradeButton = document.getElementById("clickUpgradeButton");
const autoClickUpgradeButton = document.getElementById("autoClickUpgradeButton");
const bonusChanceUpgradeButton = document.getElementById("bonusChanceUpgradeButton");
const bonusMultiplierUpgradeButton = document.getElementById("bonusMultiplierUpgradeButton");

let points = 0;
let clickPower = 1;
let autoClickPower = 0;

// ボーナスは手動クリック時だけ判定されます。
let bonusChance = 1; // 初期確率 1%
let bonusMultiplier = 2; // 初期倍率 2倍

let clickUpgradeCost = 10;
let autoClickCost = 25;
let bonusChanceCost = 50;
let bonusMultiplierCost = 100;

function formatNumber(value) {
  const options = Number.isInteger(value)
    ? { maximumFractionDigits: 0 }
    : { minimumFractionDigits: 1, maximumFractionDigits: 1 };

  return value.toLocaleString("ja-JP", options);
}

function formatMultiplier(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function updateScreen() {
  pointText.textContent = formatNumber(points);
  clickPowerText.textContent = formatNumber(clickPower);
  autoClickText.textContent = formatNumber(autoClickPower);
  bonusChanceText.textContent = formatNumber(bonusChance);
  bonusMultiplierText.textContent = formatMultiplier(bonusMultiplier);

  clickUpgradeCostText.textContent = formatNumber(clickUpgradeCost);
  autoClickCostText.textContent = formatNumber(autoClickCost);
  bonusChanceCostText.textContent = formatNumber(bonusChanceCost);
  bonusMultiplierCostText.textContent = formatNumber(bonusMultiplierCost);

  clickUpgradeButton.disabled = points < clickUpgradeCost;
  autoClickUpgradeButton.disabled = points < autoClickCost;
  bonusChanceUpgradeButton.disabled = points < bonusChanceCost;
  bonusMultiplierUpgradeButton.disabled = points < bonusMultiplierCost;
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

function playBonusGlow() {
  const glowEffect = document.createElement("span");
  glowEffect.className = "bonus-glow-effect";
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

potatoButton.addEventListener("click", () => {
  const isBonus = Math.random() * 100 < bonusChance;
  const gainedPoints = isBonus ? clickPower * bonusMultiplier : clickPower;

  addPoints(gainedPoints);
  playPotatoAnimation();

  if (isBonus) {
    playBonusGlow();
  }
});

clickUpgradeButton.addEventListener("click", () => {
  if (points < clickUpgradeCost) return;

  points -= clickUpgradeCost;
  clickPower += 1;
  clickUpgradeCost = Math.floor(clickUpgradeCost * 1.6);

  updateScreen();
});

autoClickUpgradeButton.addEventListener("click", () => {
  if (points < autoClickCost) return;

  points -= autoClickCost;
  autoClickPower += 1;
  autoClickCost = Math.floor(autoClickCost * 1.7);

  updateScreen();
});

bonusChanceUpgradeButton.addEventListener("click", () => {
  if (points < bonusChanceCost) return;

  points -= bonusChanceCost;
  bonusChance += 1;
  bonusChanceCost = Math.floor(bonusChanceCost * 1.55);

  updateScreen();
});

bonusMultiplierUpgradeButton.addEventListener("click", () => {
  if (points < bonusMultiplierCost) return;

  points -= bonusMultiplierCost;
  bonusMultiplier += 0.5;
  bonusMultiplierCost = Math.floor(bonusMultiplierCost * 1.9);

  updateScreen();
});

menuButton.addEventListener("click", openUpgradePanel);
closePanelButton.addEventListener("click", closeUpgradePanel);
panelOverlay.addEventListener("click", closeUpgradePanel);

setInterval(() => {
  if (autoClickPower > 0) {
    addPoints(autoClickPower);
  }
}, 1000);

updateScreen();
