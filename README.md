# Feita Para Amantes de Praticidade 🐍 -> 🐫 || 🐫 -> 🐍

Você já teve que lidar com uma API legada ou sem um padrão definido para nomes de chaves? Esta biblioteca veio para resolver seus problemas!
Também é possível fazer o caminho inverso
Os métodos existentes na biblioteca abrangem os niveis internos de um objetos!
Em suma, todoas as chaves que possuirem os padrões que desejarem converter, serão convertidos.

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

## ATENÇÂO!!

Está em fase de desenvolvimento! Sua tipagem não está dinâmica, então aconselhamos que criem interfaces para o retorno com as novas chaves.
