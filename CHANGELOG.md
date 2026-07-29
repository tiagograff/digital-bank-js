# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

O formato segue as recomendações do **Keep a Changelog** e utiliza versionamento semântico (Semantic Versioning).

---

## [1.0.0] - 2026-07

### Added

#### Estrutura da aplicação

- Organização modular utilizando ES Modules.
- Implementação da classe `App` como coordenadora da aplicação.
- Separação dos módulos por domínio (`users`, `accounts` e `operations`).

#### Usuários

- Implementação da classe `User`.
- Implementação da classe `Admin`.
- Associação entre usuários e contas bancárias.
- Geração automática de identificadores únicos.

#### Contas

- Implementação da entidade `Account`.
- Controle de saldo.
- Registro das operações financeiras.
- Associação entre contas e empréstimos.

#### Operações

- Implementação da classe base `Operations`.
- Implementação de depósitos.
- Implementação de transferências.
- Tratamento de validações das operações.

#### Empréstimos

- Implementação da entidade `Loan`.
- Cálculo automático de juros.
- Geração automática das parcelas.
- Controle do pagamento das parcelas.
- Controle do status do empréstimo.

#### Parcelas

- Implementação da entidade `Installment`.
- Controle do número da parcela.
- Controle do status.
- Validação do pagamento.

#### Validações

- Busca de usuários por identificador.
- Busca de contas por identificador.
- Validação de entidades cadastradas.
- Tratamento de exceções utilizando `Error`.

#### Documentação

- Criação do `README.md`.
- Documentação da arquitetura.
- Registro das decisões arquiteturais.
- Inclusão do `LICENSE`.
- Inclusão deste `CHANGELOG`.

---

### Changed

- Reorganização da arquitetura por domínio.
- Separação entre entidades e operações financeiras.
- Centralização das buscas e validações globais na classe `App`.
- Refatoração das responsabilidades entre `Account`, `Loan` e `Installment`.
- Melhoria da organização das classes e dos módulos.

---

### Refactored

- Reestruturação das pastas do projeto.
- Padronização dos nomes de métodos.
- Simplificação da comunicação entre as entidades.
- Redução do acoplamento entre os módulos.
- Melhor organização das responsabilidades das classes.

---

### Fixed

- Correção da geração de parcelas.
- Correção das validações de empréstimos.
- Correção do fluxo de pagamento das parcelas.
- Correção da atualização do saldo após pagamentos.
- Ajustes na resolução dos imports após reorganização dos módulos.

---

## Próximas evoluções

As seguintes melhorias podem ser implementadas futuramente:

- Persistência de dados.
- Interface Web.
- API REST.
- Testes automatizados.
- Sistema de autenticação.