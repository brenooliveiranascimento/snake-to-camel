export const formatKeyToCamel = (snakeStr: string) => {
  if (!snakeStr.includes("_")) {
    return snakeStr;
  }
  return snakeStr.toLowerCase().replace(/(_\w)/g, (match) => {
    return match[1].toUpperCase();
  });
};

export const formateKeyToSnake = (camelStr: string): string => {
  return camelStr.replace(/[A-Z]/g, (match) => "_" + match.toLowerCase());
};

const isDate = (value: any): boolean => {
  return value instanceof Date && !isNaN(value.getTime());
};

const convertObject = (
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

const convert = (
  items: any,
  converter: (param: string) => string
): object | object[] => {
  if (Array.isArray(items)) {
    return items.map((item) => convertObject(item, converter));
  } else if (typeof items === "object" && !isDate(items)) {
    return convertObject(items, converter);
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
