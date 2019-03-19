var proxy = new Proxy({}, {
  get: function (target, key, receiver) {

    return target[key];

  }, set: function (target, key, value, receiver) {

    target[key] = "proxy-" + value;

  }
});

proxy.val = '心叶';

console.log(proxy.val);