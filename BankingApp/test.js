function func2(name) {
  console.log('Hello ' + name + ' Zurcher');
}
function callback(func2) {
  func2('Craig');
}
callback(func2);
