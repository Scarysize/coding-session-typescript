function compare(arr) {
    if (arr.length > 10)
        return arr.slice(0, 10);
    return arr;
}
function greet(user) {
    // 🔥
    console.log(user.name);
    // ✅
    console.log(user.firstName);
}
var foo = [1, 2, 3];
