# TaskFlow — Gerenciador de Tarefas

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Versão](https://img.shields.io/badge/version-0.1.0-blue)
![Licença](https://img.shields.io/badge/license-MIT-green)
![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)

O **TaskFlow** é uma aplicação web para organizar tarefas pessoais. Permite registrar atividades, definir prioridade, acompanhar o status e visualizar o progresso. Os dados são persistidos no navegador por meio do LocalStorage.

Projeto acadêmico para praticar especificação, rastreabilidade, Git Flow, Conventional Commits, Issues e versionamento semântico.

## Funcionalidades

| Funcionalidade | Situação |
|---|---|
| Cadastro com título e descrição opcional | Implementada |
| Prioridade baixa, média e alta | Implementada |
| Listagem de tarefas | Implementada |
| Concluir e reabrir tarefa | Implementada |
| Excluir tarefa | Implementada |
| Filtros Todas, Pendentes e Concluídas | Implementada |
| Persistência no LocalStorage | Implementada |
| Indicadores de total, pendentes e concluídas | Implementada |
| Edição de tarefas e vencimento | Planejada |
| Testes automatizados e CI | Planejados |

## Tecnologias

- **HTML5:** estrutura semântica.
- **CSS3:** apresentação responsiva.
- **JavaScript ES6+:** regras e interações.
- **LocalStorage:** persistência local no navegador.
- **Git e GitHub:** versionamento e gestão do trabalho.

Não existe backend nem banco de dados remoto nesta versão. Os dados permanecem no navegador utilizado e não são sincronizados entre dispositivos.

## Como executar localmente

1. Instale um navegador moderno (Chrome, Firefox ou Edge).
2. Clone o repositório:
   ```bash
   git clone https://github.com/Rosanarci-Dev/task_flow.git
   cd task_flow
   ```
3. Abra o arquivo `src/index.html` no navegador.

Opcionalmente, utilize a extensão Live Server no Visual Studio Code.

## Documentação

- [Termo de Abertura — Project Charter](docs/project-charter.md)
- [Requisitos Funcionais e Não Funcionais](docs/requisitos.md)
- [Casos de Uso](docs/casos-de-uso.md)
- [Histórias de Usuário](docs/user-stories.md)
- [Arquitetura e Modelo de Dados](docs/arquitetura.md)
- [Backlog de 15 Issues](docs/backlog-issues.md)
- [Workflow de Git](docs/git-workflow.md)

## Git Flow

```text
main       ───────●────────────────●────── versões estáveis
                   \              /
develop    ─────────●──────●──────●────── integração
                     \    /
feature/*               ●────────────── trabalho por Issue
fix/*                   ●────────────── correções
```

| Branch | Finalidade |
|---|---|
| `main` | Versões estáveis |
| `develop` | Integração do trabalho em andamento |
| `feature/issue-N-descricao` | Nova funcionalidade ligada a Issue |
| `fix/issue-N-descricao` | Correção ligada a Issue |

### Conventional Commits

Formato: `tipo(escopo): descrição`.

Exemplos:
```text
docs(requirements): add functional requirements
feat(tasks): implement task creation
fix(storage): handle malformed saved data
```

### Versionamento Semântico

O projeto segue SemVer: `MAJOR.MINOR.PATCH`.
- **MAJOR:** alteração incompatível.
- **MINOR:** funcionalidade compatível.
- **PATCH:** correção compatível.

Tags anotadas devem marcar marcos estáveis. A versão inicial planejada é `v0.1.0`.

## Gestão de Issues

O backlog inicial possui 15 Issues com objetivos e critérios de aceite. Consulte a aba [GitHub Issues](https://github.com/Rosanarci-Dev/task_flow/issues) e o [backlog documentado](docs/backlog-issues.md).

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE).
