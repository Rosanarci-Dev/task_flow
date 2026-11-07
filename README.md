# TaskFlow — Gerenciador de Tarefas

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Versão](https://img.shields.io/badge/version-0.1.0-blue)
![Licença](https://img.shields.io/badge/license-MIT-green)
![Tecnologia](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)

**TaskFlow** é uma aplicação web leve para organizar tarefas pessoais. O usuário pode cadastrar atividades, definir prioridade, acompanhar seu status e remover tarefas concluídas ou desnecessárias. Os dados são persistidos no navegador por meio de `localStorage`.

> Projeto acadêmico desenvolvido para praticar especificação de requisitos, documentação, Git Flow, Conventional Commits, Issues e versionamento semântico.

## Estado do projeto

| Recurso | Situação |
|---|---|
| Estrutura inicial e documentação | Concluído |
| Cadastro e listagem de tarefas | Concluído |
| Conclusão e exclusão de tarefas | Concluído |
| Filtros por status | Concluído |
| Persistência com LocalStorage | Concluído |
| Edição de tarefas | Planejado |
| Testes automatizados e CI | Planejado |

## Funcionalidades

- [x] Criar tarefa com título, descrição e prioridade.
- [x] Listar tarefas cadastradas.
- [x] Marcar tarefa como concluída ou reabri-la.
- [x] Excluir tarefa.
- [x] Filtrar tarefas por todas, pendentes e concluídas.
- [x] Salvar dados localmente no navegador.
- [ ] Editar tarefa existente.
- [ ] Adicionar data de vencimento e ordenação.
- [ ] Implementar testes automatizados e pipeline CI.

## Tecnologias

- HTML5 e CSS3 para estrutura e apresentação.
- JavaScript ES6+ para regras e interações.
- Web Storage API (`localStorage`) para persistência local.
- Git e GitHub para versionamento e gestão do trabalho.

Não há backend ou banco de dados remoto nesta primeira versão. Os dados ficam no navegador e não são sincronizados entre dispositivos.

## Como executar

1. Instale um navegador moderno (Chrome, Firefox, Edge ou equivalente).
2. Clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/taskflow.git
   cd taskflow
   ```
3. Abra `src/index.html` no navegador.

Opcionalmente, use a extensão **Live Server** do Visual Studio Code para servir a aplicação localmente.

## Documentação

- [Termo de Abertura (Project Charter)](docs/project-charter.md)
- [Requisitos Funcionais e Não Funcionais](docs/requisitos.md)
- [Casos de Uso](docs/casos-de-uso.md)
- [Histórias de Usuário](docs/user-stories.md)
- [Arquitetura e modelo de dados](docs/arquitetura.md)
- [Backlog inicial — 15 Issues](docs/backlog-issues.md)
- [Workflow de Git](docs/git-workflow.md)

## Git Flow adotado

```text
main       ─────────●────────────────●──────── versão estável
                    \              /
develop    ──────────●──────●───────●────────── integração
                      \   / \     /
feature/*               ●     ●───
```

| Branch | Finalidade |
|---|---|
| `main` | Versões estáveis e entregáveis |
| `develop` | Integração das funcionalidades |
| `feature/issue-N-*` | Desenvolvimento de uma Issue |
| `fix/issue-N-*` | Correções relacionadas a uma Issue |

### Padrão de commits

Adota-se Conventional Commits: `tipo(escopo): descrição`.

Exemplos:
```text
docs(charter): add project vision and scope
feat(tasks): add task creation form
fix(storage): handle invalid local data
```

### Versionamento

O projeto segue SemVer (`MAJOR.MINOR.PATCH`). A versão inicial documentada é `0.1.0`. Tags anotadas devem marcar entregas estáveis:
```bash
git tag -a v0.1.0 -m "First functional baseline"
git push origin v0.1.0
```

## Gestão de Issues

O backlog inicial contém 15 Issues com critérios de aceite em [`docs/backlog-issues.md`](docs/backlog-issues.md). Os textos prontos para criação estão em [`.github/issue-bodies/`](.github/issue-bodies/).

Depois de criar o repositório remoto, execute `scripts/create-issues.ps1` no PowerShell, com o GitHub CLI (`gh`) instalado e autenticado, para cadastrar as 15 Issues e labels automaticamente.

## Licença

Distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE).