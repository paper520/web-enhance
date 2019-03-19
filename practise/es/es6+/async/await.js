async function doAwait() {

  // var val=await '非promise';

  var val = await new Promise(function (resolve, reject) {

    setTimeout(function () {
      resolve('成功=====');
    }, 2000);

  });

  return val;

}

doAwait().then(function (data) {
  console.log(data);
}).catch(function (error) {
  console.warn(error);
});

console.error("---end---");