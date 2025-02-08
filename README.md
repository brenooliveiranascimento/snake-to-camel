# 🚀 **snake-to-camel-case** 🐍 ➡️ 🐫 | 🐫 ➡️ 🐍

## **Feita Para Amantes de Praticidade!**

Lidando com APIs legadas ou inconsistentes? Esta biblioteca foi criada para **normalizar automaticamente** as chaves de objetos e arrays de objetos, convertendo entre **snake_case** e **camelCase** de forma **simples e eficiente**.

💡 **Recursos:**  
✅ Conversão profunda de objetos e arrays de objetos. <br>  
✅ Implementação leve e rápida. <br>  
✅ Perfeito para uma camada de normalização de dados! <br>

---

## 📦 **Instalação**

Com **npm**:

```sh
npm i snake-to-camel-case
```

Com **yarn**:

```sh
yarn add snake-to-camel-case
```

---

## **Como Usar?**

### **🔄 Convertendo de snake_case para camelCase**

```javascript
import { snakeToCamel, formatKeyToCamel } from "snake-to-camel-case";

// 🔹 Convertendo um objeto
const obj = { name_test: "Breno Nascimento" };
console.log(snakeToCamel(obj));
// Saída: { nameTest: "Breno Nascimento" }

// 🔹 Convertendo um array de objetos
const array = [{ name_test: "Breno Nascimento" }];
console.log(snakeToCamel(array));
// Saída: [{ nameTest: "Breno Nascimento" }]
```

---

### **🔄 Convertendo de camelCase para snake_case**

```javascript
import { camelToSnake, formatKeyToSnake } from "snake-to-camel-case";

// 🔹 Convertendo um objeto
const obj = { nameTest: "Breno Nascimento" };
console.log(camelToSnake(obj));
// Saída: { name_test: "Breno Nascimento" }

// 🔹 Convertendo um array de objetos
const array = [{ nameTest: "Breno Nascimento" }];
console.log(camelToSnake(array));
// Saída: [{ name_test: "Breno Nascimento" }]
```

---

## 📌 **Recomendações para TypeScript**

Caso esteja usando **TypeScript**, **recomenda-se criar uma interface** para garantir a tipagem correta ao chamar os métodos `snakeToCamel` e `camelToSnake`.

```typescript
import { snakeToCamel } from "snake-to-camel-case";

interface OriginalRequestData {
  data_request: string[];
  per_page: number;
  page: number;
}

const requestData: OriginalRequestData = {
  data_request: ["teste"],
  per_page: 1,
  page: 1,
};

interface FormattedRequestData {
  dataRequest: string[];
  perPage: number;
  page: number;
}

// 🔹 Garantindo a tipagem correta
const formattedData = snakeToCamel(requestData) as FormattedRequestData;
console.log(formattedData);
// Saída: { dataRequest: ["teste"], perPage: 1, page: 1 }
```

---
