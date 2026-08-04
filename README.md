# Digital Bank JS

Projeto desenvolvido com foco em **Programação Orientada a Objetos (POO)** utilizando **JavaScript**.

> Projeto de estudo focado em Programação Orientada a Objetos (POO) utilizando JavaScript puro, sem frameworks.

O Digital Bank JS é um projeto desenvolvido com JavaScript moderno utilizando Programação Orientada a Objetos.

Inicialmente o objetivo era modelar um sistema bancário utilizando classes, encapsulamento, herança, composição e módulos ES.

A partir desta versão, o projeto passa a evoluir para uma aplicação mais próxima de um ambiente real, adicionando persistência de dados através do **json-server**, comunicação com uma API REST utilizando **Fetch API** e uma interface web responsável por consumir e exibir as operações da aplicação.

Essa evolução permite aplicar conceitos modernos do ecossistema JavaScript mantendo a arquitetura orientada a objetos construída desde as primeiras versões.

> Este projeto faz parte da minha jornada de estudos em Desenvolvimento Full Stack JavaScript.

---

## Objetivos

- Praticar Programação Orientada a Objetos em JavaScript
- Modelar entidades de um domínio bancário
- Aplicar princípios de baixo acoplamento e alta coesão
- Organizar a aplicação utilizando módulos ES Modules
- Exercitar modelagem de classes e responsabilidades
- Consolidar boas práticas de arquitetura antes do estudo de frameworks

---

## Funcionalidades

## Sistema Bancário

- Cadastro de usuários
- Criação automática de contas bancárias
- Depósitos
- Transferências
- Empréstimos
- Parcelamento automático de empréstimos
- Controle de juros
- Pagamento de parcelas
- Histórico de operações
- Validação de entidades e operações

### Persistência

- Simulação de API REST utilizando json-server
- Operações assíncronas utilizando Fetch API
- Persistência em arquivo JSON

### Interface

- Listagem de transações
- Cadastro de novas transações
- Atualização automática da interface
- Atualização dinâmica do saldo
---

## Conceitos praticados

- Programação Orientada a Objetos
- Encapsulamento
- Herança
- Composição entre objetos
- Métodos estáticos
- Métodos privados
- Getters e Setters
- Modularização com ES Modules
- Organização por domínio
- Tratamento de exceções
- Versionamento com Git

---

## Tecnologias

- JavaScript (ES Modules)
- HTML5
- CSS3
- Fetch API
- Async / Await
- Promises
- json-server
- Day.js

---

## Estrutura do projeto

```text
src
├── modules
│   ├── accounts
│   ├── operations
│   ├── users
│   └── App.js
│
├── utils
│
└── index.js
```

A documentação completa da arquitetura está disponível em **ARCHITECTURE.md**.

---

## Executando o projeto

Clone o repositório:

```bash
git clone https://github.com/tiagograff/digital-bank-js.git
```

Acesse a pasta:

```bash
cd digital-bank-js
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm start
```

---

## Possíveis evoluções

Embora o objetivo principal tenha sido a prática de POO, algumas evoluções podem ser implementadas futuramente:

- Interface Web [Em andamento]
- API REST [Em andamento]
- Persistência de dados [Em andamento]
- Testes automatizados
- Autenticação de usuários

---

## Licença

Este projeto está licenciado sob a licença MIT.