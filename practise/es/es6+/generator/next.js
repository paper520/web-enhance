function* doNext() {
  var inputVal = yield '输入数字为：';
  return inputVal;
}

var next = doNext();

var info = next.next().value;

// 传递值
var val = next.next(7).value;

console.log(info + val);