# Decisions

>Observação: Este documento não pretende representar uma arquitetura definitiva ou um conjunto de decisões universais. As escolhas descritas refletem o contexto, o escopo e os objetivos de aprendizado deste projeto.

Este documento registra as principais decisões arquiteturais tomadas durante o desenvolvimento do projeto.

O objetivo é documentar o contexto de cada decisão, a solução adotada e suas consequências para facilitar futuras manutenções e servir como registro da evolução do projeto.

---

# ADR-001 — Organização por domínio

## Contexto

Inicialmente, todas as classes estavam concentradas em um mesmo módulo, dificultando a organização à medida que novas funcionalidades eram adicionadas.

## Decisão

Agrupar as classes conforme seu domínio de negócio.

```text
users
accounts
operations
```

## Consequências

- Melhor organização do projeto.
- Menor acoplamento entre módulos.
- Facilidade para localizar responsabilidades.
- Estrutura preparada para futuras expansões.

---

# ADR-002 — Classe App como coordenadora

## Contexto

Diversas operações precisavam localizar usuários, contas e validar entidades antes de executar regras de negócio.

Essas responsabilidades estavam distribuídas entre diferentes classes.

## Decisão

Centralizar buscas, validações e coordenação geral da aplicação na classe `App`.

As entidades permanecem responsáveis apenas por suas próprias regras de negócio.

## Consequências

- Redução da duplicação de código.
- Responsabilidades mais bem definidas.
- Facilidade para reutilizar validações globais.

---

# ADR-003 — Loan como entidade

## Contexto

Durante o desenvolvimento surgiu a dúvida se `Loan` deveria fazer parte do módulo de operações financeiras.

## Decisão

Modelar `Loan` como uma entidade independente.

Embora represente um produto financeiro, um empréstimo possui:

- identidade;
- estado;
- ciclo de vida;
- regras próprias;
- relacionamento com parcelas.

Por esse motivo, foi tratado como uma entidade de domínio.

## Consequências

- Maior coesão.
- Melhor representação do domínio bancário.
- Facilidade para adicionar novas regras relacionadas a empréstimos.

---

# ADR-004 — Installment como responsabilidade do Loan

## Contexto

As parcelas poderiam ser tratadas apenas como registros simples.

Entretanto, cada parcela possui informações próprias, como valor, número e status.

## Decisão

Criar uma entidade específica (`Installment`) e delegar ao `Loan` a responsabilidade de gerenciá-la.

## Consequências

- Melhor encapsulamento.
- Responsabilidades distribuídas entre objetos.
- Facilidade para evolução da lógica de pagamentos.

---

# ADR-005 — Uso predominante de composição

## Contexto

Durante a modelagem das entidades foi avaliado o uso de herança em diferentes partes do sistema.

## Decisão

Utilizar composição sempre que possível.

Exemplo:

```text
User
 └── Account
       ├── Operations
       └── Loans
```

A herança foi utilizada apenas quando existia uma relação clara de especialização, como `Admin` herdando de `User`.

## Consequências

- Menor acoplamento.
- Classes mais independentes.
- Maior flexibilidade para futuras alterações.

---

# ADR-006 — Encapsulamento do estado interno

## Contexto

Diversas propriedades representam informações críticas para a consistência da aplicação, como saldo, juros e status das parcelas.

## Decisão

Utilizar campos privados (`#`) sempre que possível e expor apenas os comportamentos necessários através de métodos e getters.

## Consequências

- Maior proteção do estado interno.
- Redução de alterações indevidas.
- Melhor aplicação dos princípios da Programação Orientada a Objetos.

---

# ADR-007 — Separação entre entidades e operações

## Contexto

Nem todos os objetos do domínio representam operações financeiras.

Enquanto depósitos e transferências representam eventos, empréstimos possuem ciclo de vida próprio.

## Decisão

Separar claramente:

- entidades de domínio;
- operações financeiras.

## Consequências

- Arquitetura mais coerente.
- Melhor separação de responsabilidades.
- Código mais fácil de compreender e evoluir.

---

# Considerações finais

Este projeto teve como objetivo principal praticar conceitos de Programação Orientada a Objetos utilizando JavaScript.

As decisões registradas neste documento refletem o processo de aprendizado durante o desenvolvimento e representam a solução considerada mais adequada para o escopo atual do projeto.