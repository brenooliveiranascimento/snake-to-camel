export const formatKeyToCamel = (snakeStr: string) => {
  return snakeStr.toLowerCase().replace(/(_\w)/g, (match) => {
    return match[1].toUpperCase();
  });
};

export const formateKeyToSnake = (camelStr: string): string => {
  return camelStr.replace(/[A-Z]/g, (match) => "_" + match.toLowerCase());
};

export const convert = (
  items: object,
  converter: (param: string) => string
): object => {
  return Object.entries(items).reduce((acc, [key, value]) => {
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

export const snakeToCamel = (items: object): object | object[] => {
  if (typeof items !== "object") {
    throw new Error("The parameter must be an object or an array of objects!");
  }
  if (Array.isArray(items)) {
    return items.map((item) => convert(item, formatKeyToCamel));
  } else {
    return convert(items, formatKeyToCamel);
  }
};

export const camelToSnake = (items: object): object | object[] => {
  if (typeof items !== "object") {
    throw new Error("The parameter must be an object or an array of objects!");
  }
  if (Array.isArray(items)) {
    return items.map((item) => convert(item, formateKeyToSnake));
  } else {
    return convert(items, formateKeyToSnake);
  }
};
