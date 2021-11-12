const thawChicken = minutes => {
  console.log('Chicken is being thawed...');

  return new Promise((resolve, reject) => {
    let isThawed = true;

    setTimeout(() => {
      if (isThawed) {
        resolve('Thawed Chicken!');
      } else {
        reject(new Error('Thawing is not finished yet. Please wait until it...'));
      }
    }, minutes * 1000); // x = 1000 * x => x0000
  });
}

thawChicken(10)
  .then((message) => {
    console.log(`What we have after waiting? - ${message}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  })

thawChicken(3)
  .then(
    onFulfilled => console.log(`Fulfilled ${onFulfilled}`),
    onRejected => console.log(`Rejected ${onRejected}`) 
  );
