function calcBaby(kg, meals = 6, boxPrice = 1299, boxCount = 180) {
  const w = Math.max(1, Number(kg) || 5);
  const m = Math.max(1, Number(meals) || 6);
  const minTotal = Math.round(w * 120);
  const maxTotal = Math.min(1000, Math.round(w * 150));
  const perMealMin = Math.round(minTotal / m);
  const perMealMax = Math.round(maxTotal / m);
  let size = "NB (≤5kg)";
  if (w >= 12) size = "XL / XXL (12kg+)";
  else if (w >= 9) size = "L (9～14kg)";
  else if (w >= 6) size = "M (6～11kg)";
  else if (w > 4.5) size = "S (4～8kg)";
  const unitPrice = boxCount > 0 ? Math.round((boxPrice / boxCount) * 10) / 10 : 0;
  return { minTotal, maxTotal, perMealMin, perMealMax, size, unitPrice };
}
if (typeof document !== "undefined") {
  const ids = ["babyKg", "mealsInput", "diaperPrice", "diaperCount"];
  function render() {
    const [w, m, p, c] = ids.map(id => document.getElementById(id).value);
    const res = calcBaby(w, m, p, c);
    document.getElementById("totalMilkEl").textContent = `${res.minTotal} ～ ${res.maxTotal} ml`;
    document.getElementById("mealMilkEl").textContent = `${res.perMealMin} ～ ${res.perMealMax} ml`;
    document.getElementById("sizeEl").textContent = res.size;
    document.getElementById("unitDiaperEl").textContent = `${res.unitPrice} 元 / 片`;
  }
  ids.forEach(id => document.getElementById(id).addEventListener("input", render));
  render();
}
if (typeof module !== "undefined" && module.exports) module.exports = { calcBaby };