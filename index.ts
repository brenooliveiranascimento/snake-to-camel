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

const convertObject = (
  originalObject: object,
  converter: (param: string) => string
): object => {
  return Object.entries(originalObject).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [converter(key)]: Array.isArray(value)
        ? value.map((currValue) =>
            typeof currValue === "object"
              ? convert(currValue, converter)
              : currValue
          )
        : typeof value === "object"
        ? convert(value, converter)
        : value,
    };
  }, {});
};

const convert = (
  items: any,
  converter: (param: string) => string
): object | object[] => {
  if (Array.isArray(items)) {
    return items.map((item) => convertObject(item, converter));
  } else if (typeof items === "object") {
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
