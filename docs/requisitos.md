# Requisitos — TaskFlow

## Requisitos Funcionais
| ID | Requisito | Prioridade | História |
|---|---|---|---|
| RF01 | Permitir cadastrar tarefa com título obrigatório. | Alta | US01 |
| RF02 | Permitir descrição opcional. | Média | US01 |
| RF03 | Permitir selecionar prioridade baixa, média ou alta. | Média | US02 |
| RF04 | Listar tarefas cadastradas. | Alta | US03 |
| RF05 | Marcar tarefa como concluída. | Alta | US04 |
| RF06 | Reabrir tarefa concluída. | Média | US04 |
| RF07 | Excluir uma tarefa. | Alta | US05 |
| RF08 | Filtrar por todas, pendentes e concluídas. | Média | US06 |
| RF09 | Persistir tarefas no navegador. | Alta | US07 |
| RF10 | Exibir contadores de total, pendentes e concluídas. | Baixa | US08 |

## Requisitos Não Funcionais
| ID | Categoria | Requisito verificável |
|---|---|---|
| RNF01 | Usabilidade | Interface com rótulos claros e cadastro sem treinamento. |
| RNF02 | Responsividade | Layout adaptável a larguras a partir de 320 px. |
| RNF03 | Compatibilidade | Funcionar nas versões atuais de Chrome, Firefox e Edge. |
| RNF04 | Persistência | Recuperar dados após recarregar a página no mesmo navegador. |
| RNF05 | Desempenho | Manter interação adequada com até 500 tarefas em uso individual. |
| RNF06 | Segurança | Inserir dados do usuário como texto, sem interpretar HTML executável. |
| RNF07 | Privacidade | Não enviar dados para servidor; armazenamento local. |
| RNF08 | Acessibilidade | Campos rotulados, teclado operável e mensagens em região de status. |
| RNF09 | Manutenibilidade | Manter HTML, CSS e JavaScript em arquivos separados. |
| RNF10 | Portabilidade | Executar sem dependências ou backend. |

## Regras de negócio
- RN01: título não pode estar vazio após remover espaços.
- RN02: prioridade deve ser baixa, média ou alta.
- RN03: nova tarefa começa pendente.
- RN04: exclusão remove tarefa da lista e do armazenamento.
- RN05: filtros alteram a visualização, não os dados.
- RN06: contadores consideram todas as tarefas, independentemente do filtro.

## Rastreabilidade
Os RFs são associados às histórias em user-stories.md e às Issues em backlog-issues.md. A implementação inicial cobre RF01–RF10.
