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
exports.camelToSnake = exports.snakeToCamel = exports.convert = exports.formateKeyToSnake = exports.formatKeyToCamel = void 0;
exports.formatKeyToCamel = function (snakeStr) {
    return snakeStr.toLowerCase().replace(/(_\w)/g, function (match) {
        return match[1].toUpperCase();
    });
};
exports.formateKeyToSnake = function (camelStr) {
    return camelStr.replace(/[A-Z]/g, function (match) { return "_" + match.toLowerCase(); });
};
exports.convert = function (items, converter) {
    return Object.entries(items).reduce(function (acc, _a) {
        var _b;
        var key = _a[0], value = _a[1];
        return __assign(__assign({}, acc), (_b = {}, _b[converter(key)] = Array.isArray(value)
            ? value.map(function (currValue) {
                return typeof currValue === "object"
                    ? exports.convert(currValue, converter)
                    : currValue;
            })
            : typeof value === "object"
                ? exports.convert(value, converter)
                : value, _b));
    }, {});
};
exports.snakeToCamel = function (items) {
    if (typeof items !== "object") {
        throw new Error("The parameter must be an object or an array of objects!");
    }
    if (Array.isArray(items)) {
        return items.map(function (item) { return exports.convert(item, exports.formatKeyToCamel); });
    }
    else {
        return exports.convert(items, exports.formatKeyToCamel);
    }
};
exports.camelToSnake = function (items) {
    if (typeof items !== "object") {
        throw new Error("The parameter must be an object or an array of objects!");
    }
    if (Array.isArray(items)) {
        return items.map(function (item) { return exports.convert(item, exports.formateKeyToSnake); });
    }
    else {
        return exports.convert(items, exports.formateKeyToSnake);
    }
};
