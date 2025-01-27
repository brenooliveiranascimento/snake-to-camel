export const isDate = (value: any): boolean => {
  return value instanceof Date && !isNaN(value.getTime());
};
