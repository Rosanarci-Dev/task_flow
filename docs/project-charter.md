# Project Charter — TaskFlow

## Identificação
| Campo | Descrição |
|---|---|
| Projeto | TaskFlow — Gerenciador de Tarefas |
| Tipo | Aplicação web front-end |
| Versão inicial | 0.1.0 |
| Responsável | Estudante desenvolvedora |
| Horizonte | Uma semana de desenvolvimento incremental |

## Justificativa e visão
A organização de atividades pode ser prejudicada quando tarefas ficam dispersas em anotações ou dependem apenas da memória. O TaskFlow oferece uma interface simples para registrar atividades, indicar prioridade e acompanhar o que está pendente ou concluído. A visão é entregar uma aplicação pequena que demonstre um ciclo de engenharia rastreável: planejamento, requisitos, histórias, implementação, Issues e versionamento.

## Objetivos SMART
1. **Específico:** disponibilizar cadastro, listagem, conclusão, exclusão e filtros de tarefas.
2. **Mensurável:** validar manualmente os fluxos centrais e manter requisitos ligados a histórias e Issues.
3. **Atingível:** implementar a primeira versão com HTML, CSS, JavaScript e LocalStorage, sem servidor.
4. **Relevante:** praticar especificação, rastreabilidade, Git Flow, commits atômicos e SemVer.
5. **Temporal:** concluir a versão funcional inicial e documentar próximos incrementos em até uma semana.

## Escopo desta semana
**Dentro:** criar tarefa com título, descrição opcional e prioridade; listar; concluir e reabrir; excluir; filtrar por status; persistir no navegador; documentar o processo.

**Fora:** usuários, autenticação, backend, API REST, banco remoto, sincronização, colaboração, notificações, calendário, anexos e apps nativos.

## Stakeholders e público-alvo
- **Stakeholder principal:** estudante responsável pelo projeto.
- **Stakeholder acadêmico:** docente avaliador da qualidade documental e do processo.
- **Público-alvo:** pessoas que desejam organizar tarefas pessoais sem criar conta.

## Premissas e restrições
- Navegador moderno com JavaScript e LocalStorage.
- Os dados são locais e podem ser apagados pelo usuário.
- Não há backup nem sincronização remota.
- O projeto deve permanecer pequeno o suficiente para evolução incremental.

## Critérios de sucesso
- Fluxos centrais funcionam em navegador moderno.
- Dados permanecem após atualizar a página no mesmo navegador.
- Documentação está versionada.
- Backlog possui pelo menos 15 Issues com critérios de aceite.
- Alterações futuras utilizam branches temáticas e commits convencionais.
