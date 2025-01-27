import { convert } from "..";
import { isDate } from "../validators/isDate";

export const objConversor = (
  originalObject: object,
  converter: (param: string) => string
): object => {
  return Object.entries(originalObject).reduce((acc, [key, value]) => {
    let convertedValue = value;

    if (value) {
      if (isDate(value)) {
        convertedValue = value;
      } else if (Array.isArray(value)) {
        convertedValue = value.map((currValue) =>
          typeof currValue === "object" && !isDate(currValue)
            ? convert(currValue, converter)
            : currValue
        );
      } else if (typeof value === "object" && !isDate(value)) {
        convertedValue = convert(value, converter);
      }
    }

    return {
      ...acc,
      [converter(key)]: convertedValue,
    };
  }, {});
};
