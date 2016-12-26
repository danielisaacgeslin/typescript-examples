var _this = this;
/* basic types */
var text = 'text';
var count = 0;
var valid = true;
var data = { id: 1, name: 'daniel' };
var list = [{ id: 1, name: 'daniel' }, { id: 2, name: 'isaac' }];
var whatever = { a: 1, b: '2' };
var whateverList = [{ a: 1, b: '2' }, { c: '3', d: 4 }];
var x = ['a', true]; //tuple
/* arrow functions */
var arrow_1 = function (a) { a; };
var arrow_2 = function (a) { a; };
var arrow_3 = function (a) { return a; };
var arrow_4 = function (a, b) { return a + b; };
var arrow_5 = function () { _this.test; }; //this at the top of the js file
/* parameters & returns */
function sum(a, b) {
    return a + b;
}
var arrowSum = function (a, b) { return a + b; };
var doNothing = function () { };
var getHalfs = function (a) { return [a / 2, a / 2]; };
var getType = function (a) { return typeof a; };
//# sourceMappingURL=index.js.map