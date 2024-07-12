const formatKey = (snakeStr) => {
  return snakeStr.toLowerCase().replace(/(_\w)/g, (match) => {
    return match[1].toUpperCase();
  });
};

const convert = (items) =>
  Object.entries(items).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [formatKey(key)]:
        typeof value === "object" && value?.length
          ? value.map(convert)
          : typeof value === "object"
          ? convert(value)
          : value,
    };
  }, {});

const snakeToCamel = (items) => {
  if (typeof items !== "object") {
    throw new Error("The parameter must be an object or an array!");
  }
  if (items?.length) {
    return items.map(convert);
  } else {
    return convert(items);
  }
};

module.export = { snakeToCamel };
