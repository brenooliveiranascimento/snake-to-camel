export const formateKeyToSnake = (camelStr: string): string => {
  return camelStr.replace(/[A-Z]/g, (match) => "_" + match.toLowerCase());
};
