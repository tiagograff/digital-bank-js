# Arquitetura

## Visão Geral

O projeto foi desenvolvido seguindo os princípios da **Programação Orientada a Objetos (POO)**, buscando representar um domínio bancário através de entidades independentes e bem definidas.

A arquitetura prioriza:

- Baixo acoplamento
- Alta coesão
- Encapsulamento
- Composição entre objetos
- Responsabilidade única (Single Responsibility Principle)

Cada módulo possui responsabilidades específicas, facilitando a manutenção e futuras expansões do sistema.

---

# Fluxo Geral

```text
Interface (index.js)
        │
        ▼
      App
        │
        ▼
   User / Admin
        │
        ▼
     Account
      ├──────────────┐
      ▼              ▼
 Operations        Loans
      │              │
      ▼              ▼
Deposit         Installment
Transfer
```

A interface apenas solicita operações.

A classe **App** atua como ponto central da aplicação, coordenando as entidades e delegando as regras de negócio para os objetos responsáveis.

---

# Estrutura dos módulos

```text
src
├── modules
│   ├── accounts
│   │   ├── Account.js
│   │   ├── Loan.js
│   │   └── Installment.js
│   │
│   ├── operations
│   │   ├── Operations.js
│   │   └── implementations
│   │       ├── Deposit.js
│   │       └── Transfer.js
│   │
│   ├── users
│   │   ├── User.js
│   │   └── Admin.js
│   │
│   └── App.js
│
├── utils
│
└── index.js
```

---

# Responsabilidades

## App

Classe responsável pela coordenação da aplicação.

Responsabilidades:

- cadastrar usuários;
- localizar entidades por identificador;
- validar entidades;
- coordenar operações entre objetos;
- armazenar as coleções principais da aplicação.

A classe **App** não implementa regras de negócio específicas das entidades.

---

## User

Representa um cliente do banco.

Responsabilidades:

- armazenar dados do usuário;
- possuir uma conta bancária.

---

## Admin

Especialização de **User**.

Responsabilidades:

- executar operações administrativas;
- alterar configurações globais do sistema.

---

## Account

Representa uma conta bancária.

Responsabilidades:

- controlar o saldo;
- armazenar operações financeiras;
- armazenar empréstimos;
- controlar movimentações da conta.

Toda movimentação financeira ocorre através da conta.

---

## Loan

Representa um contrato de empréstimo.

Responsabilidades:

- controlar o valor emprestado;
- calcular juros;
- gerar parcelas;
- controlar o pagamento das parcelas;
- atualizar o estado do empréstimo.

Cada empréstimo pertence a uma única conta.

---

## Installment

Representa uma parcela de um empréstimo.

Responsabilidades:

- armazenar número da parcela;
- armazenar valor;
- controlar o status da parcela.

Cada parcela pertence a um único empréstimo.

---

## Operations

Classe base das operações financeiras.

Centraliza características compartilhadas pelas operações concretas.

---

## Deposit

Representa um depósito realizado.

Responsabilidades:

- armazenar os dados da operação;
- representar um depósito financeiro.

---

## Transfer

Representa uma transferência entre contas.

Responsabilidades:

- armazenar origem;
- armazenar destino;
- armazenar valor;
- representar uma transferência financeira.

---

# Relação entre objetos

```text
App
│
├── users[]
│
├── User
│      │
│      ▼
│   Account
│      │
│      ├── operations[]
│      │       ├── Deposit
│      │       └── Transfer
│      │
│      └── loans[]
│              │
│              ▼
│        Installments[]
│
└── Admin
```

A arquitetura utiliza principalmente **composição**, onde objetos são responsáveis por gerenciar seus próprios agregados.

---

# Decisões arquiteturais

Durante o desenvolvimento, algumas decisões foram tomadas para manter o projeto organizado.

### Loan como entidade

Embora represente um produto financeiro, **Loan** não foi modelado como uma operação.

O empréstimo possui:

- identidade;
- estado;
- ciclo de vida;
- regras próprias;
- relacionamento com parcelas.

Por esse motivo, foi tratado como uma entidade independente da hierarquia de operações.

---

### App como coordenador

A classe **App** centraliza operações globais da aplicação, como:

- busca de entidades;
- validações;
- cadastro;
- coordenação entre objetos.

As regras específicas permanecem encapsuladas nas respectivas entidades.

---

### Organização por domínio

As classes foram agrupadas conforme sua responsabilidade de negócio:

- users
- accounts
- operations

Essa organização reduz o acoplamento entre módulos e facilita futuras expansões do sistema.

---

# Princípios aplicados

- Programação Orientada a Objetos (POO)
- Encapsulamento
- Composição entre objetos
- Herança
- Modularização
- Responsabilidade Única (SRP)
- Alta coesão
- Baixo acoplamento
- Separação de responsabilidades