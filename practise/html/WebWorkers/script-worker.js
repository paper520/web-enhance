console.log('worker执行...');

onmessage = function (e) {

  console.log("worker打印数据:" + e.data);

};

// 发送数据给主界面
postMessage(">>> 来自worker的数据！");