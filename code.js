function countOccurrencesAsync(array, key) {
  if (array.length < 1) {
    return Promise.resolve(0);
  } else {
    return new Promise((resolve) => {
      const count = array.reduce((acc, element) => (element === key ? acc + 1 : acc), 0);
      resolve(count);
    });
  }
}
