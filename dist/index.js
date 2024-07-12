"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeToCamel = exports.convert = exports.formatKey = void 0;
exports.formatKey = function (snakeStr) {
    return snakeStr.toLowerCase().replace(/(_\w)/g, function (match) {
        return match[1].toUpperCase();
    });
};
exports.convert = function (items) {
    return Object.entries(items).reduce(function (acc, _a) {
        var _b;
        var key = _a[0], value = _a[1];
        return __assign(__assign({}, acc), (_b = {}, _b[exports.formatKey(key)] = Array.isArray(value)
            ? value.map(exports.convert)
            : typeof value === "object"
                ? exports.convert(value)
                : value, _b));
    }, {});
};
exports.snakeToCamel = function (items) {
    if (typeof items !== "object") {
        throw new Error("The parameter must be an object or an array!");
    }
    if (Array.isArray(items)) {
        return items.map(exports.convert);
    }
    else {
        return exports.convert(items);
    }
};
console.log();
