// Union types
function shout(s) {
    if (typeof s === 'string')
        console.log(s.toUpperCase());
    else
        console.log(s * 100);
}
var point4d = {
    x: 1,
    y: 2,
    z: 3,
    t: 4
};
function move(animal) {
    if ('swim' in animal) {
        return animal.swim();
    }
    return animal.fly();
}
function getArea(s) {
    if (s.kind === 'circle')
        return Math.PI * Math.pow(s.radius, 2);
    else
        return Math.pow(s.sideLength, 2);
}
function getArea2(s) {
    switch (s.kind) {
        case 'circle':
            return Math.PI * Math.pow(s.radius, 2);
        case 'square':
            return Math.pow(s.sideLength, 2);
        default:
            var exhausted = s;
            return exhausted;
    }
}
var p = [1, 'zwei'];
var myN = p[0], myS = p[1];
// Classes
var AdminUser = /** @class */ (function () {
    function AdminUser() {
        this.password = 'very-safe';
        this.userName = 'admin';
    }
    AdminUser.prototype.authenticate = function (inputPassword) {
        return inputPassword === this.password;
    };
    return AdminUser;
}());
var someKey = 'key1';
var lara = {
    name: 'Lara Lavendel',
    age: 25
};
var person = createObjectWithChangeEvents(lara);
// person.subscribe('age', () => {});
person.subscribe('ageChanged', function (newAge) { return console.log(newAge); });
person.subscribe('nameChanged', function (newName) { return console.log(newName); });
