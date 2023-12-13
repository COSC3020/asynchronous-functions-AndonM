const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const countOccurrencesProperty = jsc.forall(jsc.array(jsc.number), jsc.number, function (array, key) {
  return jsc.assertPromise(countOccurrencesAsync(array, key));
});

jsc.assert(countOccurrencesProperty, { tests: 1000 });
