function checkPermutation (stringA, stringB) {
  const charsStrA = {};
  const charsStrB = {};

  for (let i = 0; i < stringA.length; i++) {
    charsStrA[stringA[i]] = stringA[i];
  }

  for (let i = 0; i < stringB.length; i++) {
    const thisChar = stringB[i];

    if (charsStrA[thisChar]) {
      charsStrB[stringB[i]] = stringB[i];
    }

    if (charsStrA[stringB[i]] && Object.keys(charsStrA).length <= Object.keys(charsStrB).length) {
      return true;
    }
  }
  return false;

}

console.log(checkPermutation('abc', 'baxc'));