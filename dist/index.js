"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToSnake = exports.snakeToCamel = exports.formateKeyToSnake = exports.formatKeyToCamel = void 0;
const formatKeyToCamel = (snakeStr) => {
    if (!snakeStr.includes("_")) {
        return snakeStr;
    }
    return snakeStr.toLowerCase().replace(/(_\w)/g, (match) => {
        return match[1].toUpperCase();
    });
};
exports.formatKeyToCamel = formatKeyToCamel;
const formateKeyToSnake = (camelStr) => {
    return camelStr.replace(/[A-Z]/g, (match) => "_" + match.toLowerCase());
};
exports.formateKeyToSnake = formateKeyToSnake;
const isDate = (value) => {
    return value instanceof Date && !isNaN(value.getTime());
};
const convertObject = (originalObject, converter) => {
    return Object.entries(originalObject).reduce((acc, [key, value]) => {
        let convertedValue = value;
        if (value) {
            if (isDate(value)) {
                convertedValue = value;
            }
            else if (Array.isArray(value)) {
                convertedValue = value.map((currValue) => typeof currValue === "object" && !isDate(currValue)
                    ? convert(currValue, converter)
                    : currValue);
            }
            else if (typeof value === "object" && !isDate(value)) {
                convertedValue = convert(value, converter);
            }
        }
        return {
            ...acc,
            [converter(key)]: convertedValue,
        };
    }, {});
};
const convert = (items, converter) => {
    if (Array.isArray(items)) {
        return items.map((item) => convertObject(item, converter));
    }
    else if (typeof items === "object" && !isDate(items)) {
        return convertObject(items, converter);
    }
    else {
        throw new Error("Parameter must be an object or an array of objects!");
    }
};
const snakeToCamel = (items) => {
    return convert(items, exports.formatKeyToCamel);
};
exports.snakeToCamel = snakeToCamel;
const camelToSnake = (items) => {
    return convert(items, exports.formateKeyToSnake);
};
exports.camelToSnake = camelToSnake;
