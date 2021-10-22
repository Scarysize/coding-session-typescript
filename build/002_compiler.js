// primitives
var s = 'foo';
var n = 2.4;
var b = !true;
// arrays
var array = [1, 2, 3];
var array2 = [4, 5, 6];
// functions
function fn(bar) {
    return bar.length;
}
function printName(obj) {
    console.log(obj.name);
}
function optPrintName(obj) {
    var _a;
    obj.name.toUpperCase();
    if (obj.name)
        console.log(obj.name.toUpperCase());
    // optional chaining
    (_a = obj.name) === null || _a === void 0 ? void 0 : _a.toUpperCase();
}
var greeting = MyUntypedLibrary.makeGreeting('hello');
