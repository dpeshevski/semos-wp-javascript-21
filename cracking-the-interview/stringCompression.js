function stringCompression (string) {
  const hash = {};
  let compressed = '';
  
  for (let i = 0; i < string.length; i++) {
    let counts = 1;
    const prevChar = string[i];
    const nextChar = string[i+1];
    
    if (prevChar !== nextChar) {
      counts += 1;
      // hash[prevChar] = prevChar + counts;
      hash[prevChar] = nextChar + counts;
    } else {
    }
    
  }
  
  console.log(hash);
}

  
        
stringCompression('aabcccccaaa');