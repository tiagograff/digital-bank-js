# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/) e o versionamento seguirá, futuramente, o padrão Semantic Versioning (SemVer).

---

## [Unreleased]

### Added

- Planejamento inicial do projeto.
- Definição da arquitetura.
- Modelagem das entidades.
- Documentação inicial.

---

## [0.1.0] - 2026-07-14

### Added

- Estrutura inicial do projeto
- Configuração do Node
- Configuração do Git
- README
- Arquitetura
- Roadmap
- Convenção de commits

---

## [Unreleased]

## [0.1.0] - 2026-07-24

### Added

- Implementadas as entidades `User`, `Admin`, `Account`, `Loan` e `Installment`.
- Adicionada a classe base `Operations` para abstração das operações bancárias.
- Implementadas as operações de `Deposit` e `Transfer`.
- Implementados métodos de criação, validação e gerenciamento de empréstimos.
- Implementada a geração automática de identificadores únicos para as entidades.
- Adicionadas validações de regras de negócio para empréstimos e parcelas.
- Implementada a lógica de cálculo de juros e valor das parcelas.
- Implementados métodos para gerenciamento do estado de empréstimos e parcelas.
- Adicionados métodos auxiliares (`getters`, `setters`, validações e utilitários) para encapsulamento das regras de negócio.

### Changed

- Refatorada a arquitetura do projeto para organização por domínio.
- Criado o módulo `accounts`.
- `Loan` e `Installment` foram movidos para o módulo `accounts`.
- Separadas as entidades (`User`, `Account`, `Loan`, `Installment`) das operações (`Deposit` e `Transfer`).
- Reorganizada a estrutura de diretórios visando maior coesão e escalabilidade.
- Atualizados os imports para refletir a nova arquitetura.