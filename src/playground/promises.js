const { setTextFilter } = require("../actions/filters");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('This is my resolved data');
  });
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});


console.log('after');