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

/**
 * 容器
 * ---------------
 * 记录指令，过滤器，组件等
 */
TestVue.__directive__ = {};
TestVue.__synchronizer__ = {};

// 数据拦截
// 对象options的data中定义的key的编辑会在这里拦截
// 通知专门处理变化情况的（同步视图和数据）
TestVue.prototype.observe = function () {
  var key, _this = this;
  for (key in this.$data) {
    var value = this.$data[key];
    Object.defineProperty(this.$data, key, {
      get() {
        return value;
      },
      set(newValue) {
        if (newValue != value) {
          value = newValue;
          var item = TestVue.__synchronizer__[key];
          if (item && item.constructor === Array) {
            var i;
            for (i = 0; i < item.length; i++) {
              item[i].update(item[i].$el, {
                "value": newValue,
                "key": key,
                "scope": _this
              });
            }
          }
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
  var nodes = el.childNodes, i, node;
  for (i = 0; i < nodes.length; i++) {
    node = nodes[i];

    // 如果不是文本结点，继续编译
    if (node.nodeType !== 3) {
      this.compile(node);
    }

    // 开始正式解析一个结点（分为文本结点和非文本结点）
    if (node.nodeType === 3) {
      // 如果是文本

    } else {
      // 如果不是文本

      // 解析指令
      var j, attributes = node.attributes, directive;
      for (j = 0; j < attributes.length; j++) {
        directive = TestVue.__directive__[attributes[j].name];
        if (directive) {

          var binding = {
            "value": this.$data[node.getAttribute(attributes[j].name)],
            "key": node.getAttribute(attributes[j].name),
            "scope": this
          };

          if (typeof directive.bind === 'function')
            directive.bind(node, binding);

          if (typeof directive.update === 'function') {
            TestVue.__synchronizer__[node.getAttribute(attributes[j].name)] = TestVue.__synchronizer__[node.getAttribute(attributes[j].name)] || [];
            TestVue.__synchronizer__[node.getAttribute(attributes[j].name)].push({
              "$el": node,
              "update": directive.update
            });
          }
        }
      }

    }

  }
};

// 注册指令
TestVue.directive = function (directieName, options) {
  TestVue.__directive__["v-" + directieName] = options;
};
