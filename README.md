Biblioteca para amantes de praticidade.
Já teve de mapera uma API legado ou sem um padrão de escrita de chaves definida?
Esta biblioteca veio para resolver seus problemas!
EX:

import { snakeToCamel } from "snake-to-camel-case"

snakeToCamel([
{
"name_test": "Breno Nascimento"
}
])

Retorno: [{"nameTest": "Breno Nascimento"}]

Está em fase de desenvolvimento, sua tipagem não está dinamica, então aconselhamos que criem interfaces para o retorno com as novas chaves.
