# 👾 Projeto Backend Pokémon API: Poke API dados de Pokémon

## Desafio: Desenvolver uma api com Nodejs e com frontend para buscar Pokemons

Este projeto foi desenvolvido como parte de um desafio técnico para uma vaga de desenvolvedor, demonstrando habilidades em construção de APIs robustas com Node.js, TypeScript, Express e princípios de Arquitetura Limpa (Clean Architecture).

## ✨ Visão Geral

O projeto consiste em um serviço de backend que interage com a PokeAPI para fornecer dados de Pokémon. Ele oferece funcionalidades de listagem paginada e busca por nome, tudo através de uma API RESTful. O frontend, uma aplicação simples em HTML, CSS e JavaScript, foi construído com Bootstrap 5 para uma interface responsiva e moderna, facilitando a interação e o teste da API.

## 🚀 Tecnologias & Arquitetura

Este backend foi cuidadosamente projetado com foco em escalabilidade, manutenibilidade e baixo acoplamento, utilizando um conjunto moderno de tecnologias e aderindo a padrões de arquitetura e design consagrados.

#### Backend Stack

- Node.js & Express: Ambiente de execução e framework web para construção da API REST.
- TypeScript: Garante tipagem estática, elevando a segurança, refatoração e legibilidade do código.
- tsyringe: Poderoso container de Injeção de Dependência (DI). Crucial para o princípio D (Dependency Inversion Principle) do SOLID, promovendo a Inversão de Controle (IoC) e facilitando a testabilidade.
- Princípios SOLID: Aplicação rigorosa para um código modular, flexível e fácil de manter:
- Single Responsibility Principle (SRP)
- Open/Closed Principle (OCP)
- Liskov Substitution Principle (LSP)
- Interface Segregation Principle (ISP)
- Dependency Inversion Principle (DIP)
- Axios: Cliente HTTP leve e eficiente para realizar requisições à PokeAPI.

#### Frontend Stack

- HTML, CSS & JavaScript: Base da aplicação cliente.
- Bootstrap 5: Framework CSS para um design responsivo, moderno e componentes de interface prontos para uso.

## 📂 Estrutura de Pastas (Clean Architecture)

A organização do projeto segue a Arquitetura Limpa (Clean Architecture), dividindo as responsabilidades em camadas bem definidas para isolar as regras de negócio de detalhes de implementação e infraestrutura.

```
├── public/ # 🌐 Frontend (HTML, CSS, JS com Bootstrap)
│ ├──css/ # Estilização CSS
│ ├──js/ # Código Javascript
│ └──index.html # Página principal do frontend
│
├── src/ # 🚀 Código Fonte do Backend (TypeScript)
│ ├── application/ # ⚙️ Camada de Aplicação: Casos de Uso (Use Cases)
│ │ └── useCases/ # Orquestra a lógica de domínio para necessidades específicas
│ │ └── pokemon/
│ │ └── GetPokemonUseCase.ts
│ ├── core/ # 🧩 Core: Configurações e tipos globais (sem dependência de Domínio)
│ │ ├── config/ # Variáveis de ambiente, constantes
│ │ ├── enums/ # Definições de enums
│ │ └── config.ts
│ ├── domain/ # 🏛️ Camada de Domínio: Regras de Negócio, Entidades, Contratos
│ │ ├── contracts/ # Interfaces que definem o comportamento de repositórios/serviços
│ │ ├── controllers/ # Interfaces para os controladores
│ │ ├── dto/ # Data Transfer Objects (modelagem de dados)
│ │ ├── http/ # Tipos HTTP genéricos ou contratos
│ │ ├── services/ # Interfaces para serviços de domínio
│ │ └── useCases/ # Interfaces para os Casos de Uso
│ ├── infra/ # 📡 Camada de Infraestrutura: Adapters e implementações
│ │ ├── axios/ # Implementação do cliente HTTP (ex: PokeAPIAdapter)
│ │ ├── http/ # Implementação do servidor HTTP (Express)
│ │ └── services/ # Implementações de serviços (ex: EncryptionService)
│ ├── main/ # 🏁 Camada Principal: Composição e inicialização da aplicação
│ │ ├── routes/ # Rotas principais da API
│ │ ├── app.ts # Configuração da aplicação Express
│ │ └── server.ts # Ponto de entrada para iniciar o servidor
│ ├── presentation/ # 🖥️ Camada de Apresentação: Controladores e Roteamento Express
│ │ ├── controllers/ # Classes que implementam as interfaces de Domain/Controllers
│ │ │ └── pokemon/
│ │ │   └── GetPokemonController.ts
│ │ └── routes/ # Definição das rotas e vinculação com os controladores
│ │   └── pokemon.routes.ts
│ └── shared/ # 🤝 Recursos Compartilhados: Container DI, Erros, Middlewares
│ ├── container/ # Configuração do tsyringe (injeção de dependência)
│ ├── errors/ # Classes de erro personalizadas
│ └── middlewares/ # Middlewares globais do Express
├── .env # Variáveis de ambiente
├── package.json # Dependências do projeto e scripts npm
└── tsconfig.json # Configuração do compilador TypeScript
```

## ⚙️ Configuração & Execução

Para colocar o projeto em funcionamento, siga os passos abaixo:

### Observação

- No código está sendo utilizando o ESLint e Prettier para padronização do código, para que funcione você precisará de instalar essas extensões no seu VSCode ou seu editor de preferência.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente:

- Node.js: Versão 18 ou superior.
- npm ou Yarn: Gerenciador de pacotes.

### 1. Criar uma variável de ambiente .env na raiz do seu projeto com o conteúdo abaixo

```
# NODE_ENV
NODE_ENV=local
PORT=3000
POKE_API_BASE_URL=https://pokeapi.co/api/v2/pokemon
```

### 2. Instalação de Dependências

No diretório raiz do projeto, execute o comando para instalar todas as dependências:

- npm install ou yarn install

### 3. Execução da Aplicação

Para iniciar o servidor backend, execute o seguinte script. Ele primeiro compilará o código TypeScript e, em seguida, iniciará o servidor Node.js.

- npm run start ou yarn start - (Ao rodar um desses comandos ele irá gerar o build automaticamente).

O servidor Express será iniciado na porta configurada (padrão 3000).

### 4. Acesso à Aplicação

Com o servidor rodando, abra seu navegador e acesse o frontend para interagir com a API:

http://localhost:3000

### 📋 Endpoints da API

O backend oferece um endpoint versátil para buscar dados de Pokémon, utilizando parâmetros de query para diferentes funcionalidades.

Listagem de Pokémons.

- Endpoint: http://localhost:3000/api/data
  - GET
    - /api/data/

Busca por nome de um Pokémon específico.

- Endpoint: http://localhost:3000/api/data/?name=bulbasaur
  - GET
    - /api/data//?name=bulbasaur
  - name: (string) Nome completo do Pokémon.

## 👨‍💻 Dados de Contato

- Desenvolvedor: Orcioly Andrade Alves
- E-mail: orcioly@gmail.com
- Linkedin: https://www.linkedin.com/in/orcioly
