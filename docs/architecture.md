# Arquitetura

O projeto foi dividido em camadas para reduzir acoplamento entre as partes da aplicação.

## Fluxo geral

Interface

↓

App

↓

User

↓

Account

↓

Operações

- Deposit
- Transfer
- Loan
- Installment

A interface apenas solicita operações.

Toda regra de negócio permanece nas classes.

---

# Classes

## App

Responsável por coordenar toda a aplicação.

Funções:

- cadastrar usuários
- localizar usuários
- iniciar operações bancárias
- alterar configurações globais

Não representa uma entidade do banco.

Funciona como controlador da aplicação.

---

## User

Representa um cliente.

Responsabilidades:

- armazenar informações pessoais
- possuir uma conta

Não executa operações bancárias.

---

## Account

Representa uma conta bancária.

Responsabilidades:

- controlar saldo
- armazenar depósitos
- armazenar empréstimos
- armazenar transferências
- manter histórico das operações

Toda movimentação financeira ocorre através da conta.

---

## Deposit

Representa um depósito realizado.

Responsabilidades:

- valor
- data

Não altera saldo diretamente.

---

## Transfer

Representa uma transferência.

Responsabilidades:

- remetente
- destinatário
- valor
- data

Não conhece regras da conta.

---

## Loan

Representa um empréstimo.

Responsabilidades:

- valor solicitado
- taxa de juros
- data
- parcelas

Responsável pelo cálculo do parcelamento.

---

## Installment

Representa uma parcela de um empréstimo.

Responsabilidades:

- número
- valor
- status

Cada empréstimo possui diversas parcelas.

---

# Relações

App

↓

gerencia

↓

Users

↓

possuem

↓

Account

↓

contém

↓

Deposits

Transfers

Loans

↓

Loan

↓

gera

↓

Installments

---

# Princípios utilizados

- Encapsulamento
- Responsabilidade única
- Baixo acoplamento
- Alta coesão
- Composição entre objetos
- Modularização