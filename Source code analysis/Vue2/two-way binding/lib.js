/**
 * Vue数据双向绑定模拟实验
 * -----------------------------
 * 
 */

// Vue类
var TestVue = function (options) {

  // 维护的根结点
  this.$el = options.el;

  // 管理的数据（双向绑定）
  this.$data = options.data;

  // 对维护的数据进行监听
  this.observe();

  // 从根结点开始解析页面
  this.compile(this.$el);

};

// 数据拦截
// 对象options的data中定义的key的编辑会在这里拦截
// 通知专门处理变化情况的（同步视图和数据）
TestVue.prototype.observe = function () {
  var key;
  for (key in this.$data) {
    var value = this.$data[key];
    Object.defineProperty(this.$data, key, {
      get() {
        return value;
      },
      set(newValue) {
        if (newValue != value) {
          value = newValue;
        } else {
          // 如果数据一样，可以无视
          // todo
        }
      }
    });
  }
};

// 编译结点
// 简单点说，就是分析结点中的内容，有没有定义的指令等
// 根据结点内容追加需要管理的东西
TestVue.prototype.compile = function (el) {

};

// 同步者
// 用以同步视图和数据
var Synchronizer = function (options) {

};

Synchronizer.prototype.update = function () {

};