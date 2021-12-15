"use strict";
exports.__esModule = true;
var add = function (n1, n2, showResults, phrase) {
    return showResults ? console.log("".concat(phrase, " ").concat(n1 + n2)) : n1 + n2;
};
var _a = [5, 2.8], n1 = _a[0], n2 = _a[1];
var showResults = true;
var phrase = 'Result is: ';
add(n1, n2, showResults, phrase);
