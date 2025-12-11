const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Resolved')
    }, 2000)
});

myPromise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });