var bindEvent = function (el, eventType, callback) {
  if (window.attachEvent) {
    el.attachEvent("on" + eventType, callback); // 后绑定的先执行
  } else {
    el.addEventListener(eventType, callback, false);// 捕获
  }
};