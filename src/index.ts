import { objConversor } from "./conversors/objConversor";
import { isDate } from "./validators/isDate";
import { formatKeyToCamel, formateKeyToSnake } from "./workers";

export const convert = (
  items: any,
  converter: (param: string) => string
): object | object[] => {
  if (Array.isArray(items)) {
    return items.map((item) => objConversor(item, converter));
  } else if (typeof items === "object" && !isDate(items)) {
    return objConversor(items, converter);
  } else {
    throw new Error("Parameter must be an object or an array of objects!");
  }
};

export const snakeToCamel = (items: object | object[]): any | any[] => {
  return convert(items, formatKeyToCamel);
};

export const camelToSnake = (items: object | object[]): any | any[] => {
  return convert(items, formateKeyToSnake);
};
