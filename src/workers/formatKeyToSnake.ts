export const formatToSnake = (camelStr: string): string => {
  return camelStr.replace(/[A-Z]/g, (match) => "_" + match.toLowerCase());
};
