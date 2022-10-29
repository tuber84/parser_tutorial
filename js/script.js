let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5;
console.log(target);

console.log(proxy);

for (let key in proxy) {
  console.log(key);
}
//------------------------------------------
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0;
    }
  },
});

let dictionary = {
  Hellow: "Hola",
  Bye: "Adios",
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    if (phrase in target) {
      return target[phrase];
    } else {
      return phrase;
    }
  },
});
