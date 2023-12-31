const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

const countOccurrencesProperty = jsc.forall(jsc.array(jsc.number), jsc.number, async function (array, key) {
  const result = await countOccurrencesAsync(array, key);
  const expectedCount = array.reduce((acc, element) => (element === key ? acc + 1 : acc), 0);
  return result === expectedCount;
});

jsc.assert(countOccurrencesProperty, { tests: 1000 });
