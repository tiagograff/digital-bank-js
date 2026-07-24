# Arquitetura

O projeto segue uma arquitetura orientada a objetos organizada por domínio, separando entidades do sistema, operações bancárias e componentes de orquestração.

O objetivo é manter alta coesão entre as classes e baixo acoplamento entre os módulos, facilitando a manutenção e a evolução da aplicação.

---

# Fluxo geral

Interface

↓

App

↓

User / Admin

↓

Account

↓

Operações ou Empréstimos

- Deposit
- Transfer
- Loan
  - Installment

A interface apenas solicita operações.

A `App` coordena a aplicação, localizando os objetos necessários e delegando as regras de negócio para as entidades responsáveis.

---

# Organização dos módulos

```
modules
├── accounts
│   ├── Account.js
│   ├── Installment.js
│   └── Loan.js
│
├── operations
│   ├── Operations.js
│   └── implementations
│       ├── Deposit.js
│       └── Transfer.js
│
└── users
    ├── Admin.js
    └── User.js
```

---

# Classes

## App

Responsável pela orquestração da aplicação.

Responsabilidades:

- cadastrar usuários;
- localizar entidades por identificador;
- coordenar operações do sistema;
- armazenar as coleções principais da aplicação.

A `App` não implementa regras de negócio das entidades.

---

## User

Representa um cliente do banco.

Responsabilidades:

- armazenar informações do usuário;
- possuir uma conta bancária.

---

## Admin

Especialização de `User`.

Responsabilidades:

- executar operações administrativas;
- alterar configurações globais do sistema;
- gerenciar recursos administrativos.

---

## Account

Representa uma conta bancária.

Responsabilidades:

- controlar saldo;
- armazenar empréstimos;
- registrar operações financeiras.

Toda movimentação financeira ocorre através da conta.

---

## Loan

Representa um contrato de empréstimo.

Responsabilidades:

- controlar o valor emprestado;
- calcular juros;
- controlar parcelas;
- atualizar o estado do empréstimo.

Cada empréstimo pertence a uma conta.

---

## Installment

Representa uma parcela de um empréstimo.

Responsabilidades:

- armazenar número da parcela;
- armazenar valor;
- controlar o estado da parcela.

Cada parcela pertence a um único empréstimo.

---

## Operations

Classe base para abstração das operações bancárias.

Centraliza comportamentos compartilhados entre as operações.

---

## Deposit

Representa um depósito.

Responsabilidades:

- armazenar informações da operação;
- representar um depósito realizado.

---

## Transfer

Representa uma transferência.

Responsabilidades:

- armazenar origem;
- armazenar destino;
- armazenar valor;
- representar uma transferência realizada.

---

# Relações

```
App
│
├── users[]
│
├── User
│     │
│     ▼
│   Account
│     │
│     ├── Loan
│     │      │
│     │      ▼
│     │  Installment
│     │
│     └── Operations
│            ├── Deposit
│            └── Transfer
│
└── Admin
```

---

# Princípios utilizados

- Orientação a Objetos
- Encapsulamento
- Responsabilidade Única (SRP)
- Composição entre objetos
- Baixo acoplamento
- Alta coesão
- Modularização por domínio