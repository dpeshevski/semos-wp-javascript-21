function oneAway (stringA, stringB) {
  let edits = 0;
  const hash = {};

  for (let i = 0; i < stringA.length; i++) {
    hash[stringA[i]] = stringA[i];
    const thisChar = stringB[i];
    
    if (!hash[thisChar]) {
      edits += 1;
    }
  }

  if (edits <= 1) {
    return true;
  }

  return false;
}

console.log(oneAway('pale', 'bake'));