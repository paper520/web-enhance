async function doAsync() {

  if (Math.random() > 0.5) {
    return '成功返回！';
  } else {
    throw new Error('失败返回！');
  }

}

// 其实返回的就是一个承诺
var promise = doAsync();

promise.then(function (data) {
  console.log(data);
}).catch(function (error) {
  console.warn(error);
});