export const formatToCamel = (snakeStr: string) => {
  if (!snakeStr.includes("_")) {
    return snakeStr;
  }
  return snakeStr.toLowerCase().replace(/(_\w)/g, (match) => {
    return match[1].toUpperCase();
  });
};
