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
exports.camelToSnake = exports.snakeToCamel = exports.formateKeyToSnake = exports.formatKeyToCamel = void 0;
exports.formatKeyToCamel = function (snakeStr) {
    if (!snakeStr.includes("_")) {
        return snakeStr;
    }
    return snakeStr.toLowerCase().replace(/(_\w)/g, function (match) {
        return match[1].toUpperCase();
    });
};
exports.formateKeyToSnake = function (camelStr) {
    return camelStr.replace(/[A-Z]/g, function (match) { return "_" + match.toLowerCase(); });
};
var convertObject = function (originalObject, converter) {
    return Object.entries(originalObject).reduce(function (acc, _a) {
        var _b;
        var key = _a[0], value = _a[1];
        return __assign(__assign({}, acc), (_b = {}, _b[converter(key)] = Array.isArray(value)
            ? value.map(function (currValue) {
                return typeof currValue === "object"
                    ? convert(currValue, converter)
                    : currValue;
            })
            : typeof value === "object"
                ? convert(value, converter)
                : value, _b));
    }, {});
};
var convert = function (items, converter) {
    if (Array.isArray(items)) {
        return items.map(function (item) { return convertObject(item, converter); });
    }
    else if (typeof items === "object") {
        return convertObject(items, converter);
    }
    else {
        throw new Error("Parameter must be an object or an array of objects!");
    }
};
exports.snakeToCamel = function (items) {
    return convert(items, exports.formatKeyToCamel);
};
exports.camelToSnake = function (items) {
    return convert(items, exports.formateKeyToSnake);
};
