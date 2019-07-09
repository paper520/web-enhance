TestVue.directive('bind', {

  // 只调用一次，指令第一次绑定到元素时调用
  "bind": function (el, binding) {
    el.innerText = binding.value;
  },

  // 所在组件的 VNode 更新时调用
  "update": function (el, binding) {
    el.innerText = binding.value;
  }

});