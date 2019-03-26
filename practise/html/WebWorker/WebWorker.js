// 生成worker
var worker = new Worker('script-worker.js');

// 发送数据给worker
worker.postMessage(">>> 来自主页面的数据！");

worker.onmessage = function (e) {

  console.log("主界面打印数据:" + e.data);

};