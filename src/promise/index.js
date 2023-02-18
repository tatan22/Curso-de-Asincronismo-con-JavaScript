const promise  = new Promise (function (resolve, reject){
    resolve('hey¡')
});

const cows = 5;

const countCouws = new Promise (function (resolve, reject) {
    if (cows > 10) {
        resolve (`We have ${cows} cows on the farm`);
    }else {
        reject('There is no cows on the farm')
    }
});
    
countCouws.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(()=>console.log('Finally'));