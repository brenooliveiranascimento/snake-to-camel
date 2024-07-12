export declare const formatKeyToCamel: (snakeStr: string) => string;
export declare const formateKeyToSnake: (camelStr: string) => string;
export declare const convert: (items: object, converter: (param: string) => string) => object;
export declare const snakeToCamel: (items: object) => object | object[];
export declare const camelToSnake: (items: object) => object | object[];
