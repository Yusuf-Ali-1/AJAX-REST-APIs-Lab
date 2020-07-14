const testNum = (num) => new Promise ((resolve, reject) => {
    if (num > 50) {
      resolve('greater than fifty')
    } else if (num < 50) {
        resolve('less than fifty')
    } else {
      reject('the number is equal to 50')
    }
  })