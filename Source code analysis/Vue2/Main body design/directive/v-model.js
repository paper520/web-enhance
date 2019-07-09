TestVue.directive('model', {

  // 只调用一次，指令第一次绑定到元素时调用
  "bind": function (el, binding) {
    el.value = binding.value;
    bindEvent(el, "input", function () {
      binding.scope.$data[binding.key] = el.value;
    });
  },

  // 所在组件的 VNode 更新时调用
  "update": function (el, binding) {
    if (el.value != binding.value)
      el.value = binding.value;
  }

});