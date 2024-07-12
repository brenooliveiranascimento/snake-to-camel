export const formatKey = (snakeStr: string) => {
  return snakeStr.toLowerCase().replace(/(_\w)/g, (match) => {
    return match[1].toUpperCase();
  });
};

export const convert: any = (items: any) =>
  Object.entries(items).reduce((acc: any, [key, value]) => {
    return {
      ...acc,
      [formatKey(key)]: Array.isArray(value)
        ? value.map(convert)
        : typeof value === "object"
        ? convert(value as any)
        : value,
    };
  }, {});

export const snakeToCamel = (items: object) => {
  if (typeof items !== "object") {
    throw new Error("The parameter must be an object or an array!");
  }
  if (Array.isArray(items)) {
    return items.map(convert);
  } else {
    return convert(items);
  }
};
