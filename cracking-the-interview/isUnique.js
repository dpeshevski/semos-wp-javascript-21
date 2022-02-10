function isUnique (string) {
  const chars = {}; // hash table

  for (var i = 0; i < string.length; i++) {
    const thisChar = string.charCodeAt(i); // string[i]

    if (chars[thisChar]) {
      return false;
    }

    chars[thisChar] = true;
  }

  return true;
}

const text = 'daniels';
console.log(isUnique(text));