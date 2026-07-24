# Decisões do Projeto

## Arquitetura

## Módulos

**Decisão:**  
O sistema será dividido em módulos independentes baseados nas responsabilidades de negócio.

Módulos iniciais:

- Usuários
- Contas
- Transações
- Cartões
- Autenticação

**Motivo:**  
Cada módulo será responsável pelas suas próprias regras de negócio, reduzindo o acoplamento e facilitando a manutenção.

---

## Padrões de Código

**Decisão:**  
O projeto seguirá princípios de código limpo e organização por responsabilidade.

**Motivo:**
- Melhorar legibilidade.
- Facilitar manutenção.
- Aproximar o projeto de práticas utilizadas no mercado.

---

## Controle de Versão

**Decisão:**  
O Git será utilizado seguindo boas práticas de commits e histórico de alterações.

**Motivo:**
- Facilita acompanhamento da evolução do projeto.
- Mantém rastreabilidade das alterações.
- Simula um fluxo profissional de desenvolvimento.

# ADR-002 - Organização por domínio

## Contexto

O projeto inicialmente agrupava as classes de acordo com o tipo de implementação, o que dificultava identificar a relação entre as entidades do domínio bancário.

## Decisão

As classes passaram a ser organizadas por domínio:

- users
- accounts
- operations

## Consequências

- Maior coesão.
- Melhor escalabilidade.
- Estrutura mais próxima de aplicações reais.
- Facilita futuras implementações de novos tipos de conta e empréstimos.