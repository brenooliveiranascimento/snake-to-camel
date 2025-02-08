# Feita Para Amantes de Praticidade 🐍 -> 🐫 || 🐍 <- 🐫

Você já teve que lidar com uma API legado ou sem um padrão definido para nomes de chaves? Esta biblioteca veio para resolver seus problemas!
Também é possibilitando o caminho inverso!

Os métodos existentes na biblioteca abrangem os niveis internos de um objetos!
Em suma, todoas os objetos e arrays de objetos em niveis internos serão afetados.

```javascript
npm i snake-to-camel-case
yarn add snake-to-camel-case
```

## Exemplo de Uso

```javascript
import { snakeToCamel, formatKeyToCamel } from "snake-to-camel-case";

// Exemplo com objeto
const resultadoObjeto = snakeToCamel({ name_test: "Breno Nascimento" });
console.log(resultadoObjeto);
// Saída: { nameTest: "Breno Nascimento" }

// Exemplo com array de objetos
const resultadoArray = snakeToCamel([{ name_test: "Breno Nascimento" }]);
console.log(resultadoArray);
// Saída: [{ nameTest: "Breno Nascimento" }]

// Exemplo de conversão de string
const stringSnakeCase = "exemplo_de_string_snake_case";
const stringCamelCase = formatKeyToCamel(stringSnakeCase);
console.log(stringCamelCase);
// Saída: "exemploDeStringSnakeCase"
```

## Caminho inverso!

```javascript
import { camelToSnake, formateKeyToSnake } from "snake-to-camel-case";

// Exemplo com objeto
const resultadoObjeto = camelToSnake({ nameTest: "Breno Nascimento" });
console.log(resultadoObjeto);
// Saída: { name_test: "Breno Nascimento" }

// Exemplo com array de objetos
const resultadoArray = camelToSnake([{ nameTest: "Breno Nascimento" }]);
console.log(resultadoArray);
// Saída: [{ name_test: "Breno Nascimento" }]

// Exemplo de conversão de string
const stringCamelCase = "exemploDeStringCamelCase";
const stringSnakeCase = formateKeyToSnake(stringCamelCase);
console.log(stringSnakeCase);
// Saída: "exemplo_de_string_snake_case"
```

## Recomendações!

Caso use Typescript, recomendo fortemente que crie um type ou interface ao invocar os métodos `snakeToCamel` e `camelToSnake` EX:

```typescript
import { snakeToCamel, formatKeyToCamel } from "snake-to-camel-case";

interface originalRequestData {
  data_request: string[];
  per_page: number;
  page: number;
}

const requestData: originalRequestData = {
  data_request: ["teste"],
  per_page: 1,
  page: 1,
};

interface requestData {
  dataRequest: string[];
  perPage: number;
  page: number;
}

const resultadoObjeto = snakeToCamel(test) as formatedData;
console.log(resultadoObjeto);
// Saída: {
//   dataRequest: ["teste 123"];
//   perPage: 1
//   page: 1
//  }
```
