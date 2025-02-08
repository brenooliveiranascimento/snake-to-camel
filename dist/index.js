"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToSnake = exports.snakeToCamel = exports.convert = void 0;
const objConversor_1 = require("./conversors/objConversor");
const isDate_1 = require("./validators/isDate");
const workers_1 = require("./workers");
const convert = (items, converter) => {
    if (Array.isArray(items)) {
        return items.map((item) => (0, objConversor_1.objConversor)(item, converter));
    }
    else if (typeof items === "object" && !(0, isDate_1.isDate)(items)) {
        return (0, objConversor_1.objConversor)(items, converter);
    }
    else {
        throw new Error("Parameter must be an object or an array of objects!");
    }
};
exports.convert = convert;
const snakeToCamel = (items) => {
    return (0, exports.convert)(items, workers_1.formatToCamel);
};
exports.snakeToCamel = snakeToCamel;
const camelToSnake = (items) => {
    return (0, exports.convert)(items, workers_1.formatToSnake);
};
exports.camelToSnake = camelToSnake;
