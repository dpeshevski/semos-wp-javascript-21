// define of promise fun
const promiseToCleanRoom = new Promise(function(resolve, reject) {
  // cleaning the room 
  let isClean = true;

  if (isClean) { // isClean === true
    resolve({ isClean: true, room: 'Room is clean' });
  } else { 
    reject({ isClean: false, room: 'Room is not clean.' });
  }
});

// const onResolver = ()

promiseToCleanRoom.then((dataFromResolver) => {
  console.log(dataFromResolver);
}).catch((fromRejection) => {
  console.log(fromRejection);
})

const onFulfilled = (dataFromResolver) => {
  console.log('On first then method', dataFromResolver);
  return `Send to second then ${dataFromResolver.room}`;
}

const onRejected = (dataFromRejection) => {
  console.log(dataFromRejection);
}

const secondOnFulfilled = (data) => {
  console.log('On second then method', data);
}

promiseToCleanRoom
  .then(onFulfilled)
  .then(secondOnFulfilled)
  .catch(onRejected);
