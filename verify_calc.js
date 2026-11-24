const assert = require("assert");
const { calcBaby } = require("./app.js");
const r = calcBaby(5, 6, 1000, 200);
assert.strictEqual(r.minTotal, 600);
assert.strictEqual(r.unitPrice, 5);
console.log("BABY_CALC_TESTS_PASSED");