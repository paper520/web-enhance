function* doGenerator() {
  yield '心';
  yield '叶';
  return -1;
}

var generator = doGenerator();

var val = generator.next();
while (!val.done) {
  console.log(val.value);
  val = generator.next();
}

console.warn(val.value);