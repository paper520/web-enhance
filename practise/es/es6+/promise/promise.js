var promise = new Promise(function (resolve, reject) {

  // throw new Error('Unexcepted error!');

  if (Math.random() > 0.5) {

    // 标记成功
    resolve({
      "type": "success",
      "info": "成功了！"
    });
  } else {

    // 标记失败
    reject({
      "type": "fail",
      "info": "失败了！"
    });
  }

});

promise

  // 注册处理方法(正确方法+错误方法)
  .then(function (data) {
    console.log(data);
  }
  // , function (error) {
  //   console.log(error);
  // }
)

  // 注册错误处理方法
  .catch(function (e) {
    console.warn(e);
  });

  // promise.then(onFulfilled, onRejected)
  // 在onFulfilled中发生异常的话，在onRejected中是捕获不到这个异常的。
  // promise.then(onFulfilled).catch(onRejected)
  // .then中产生的异常能在.catch中捕获