# Casos de Uso — TaskFlow

## Atores
- **Usuário:** pessoa que acessa a aplicação e gerencia tarefas.
- **Navegador:** ambiente que executa a aplicação e fornece LocalStorage.

## UC01 — Cadastrar tarefa
**Ator:** Usuário. **Pré-condição:** aplicação aberta. **Pós-condição:** tarefa aparece na lista e é persistida.

**Fluxo principal:** (1) Usuário informa título. (2) Opcionalmente informa descrição. (3) Seleciona prioridade. (4) Aciona Adicionar tarefa. (5) Sistema valida título. (6) Cria tarefa pendente. (7) Salva e atualiza lista e contadores.

**Alternativos:** descrição vazia é aceita; prioridade pode ser alterada.

**Exceções:** título vazio ou só com espaços impede cadastro; falha de armazenamento não deve ser apresentada como persistência bem-sucedida.

## UC02 — Consultar e filtrar tarefas
**Ator:** Usuário. **Pré-condição:** aplicação aberta. **Pós-condição:** tarefas correspondentes ao filtro são exibidas.

**Fluxo principal:** acessar a lista, visualizar tarefas, selecionar Todas/Pendentes/Concluídas e observar atualização sem alteração dos registros.

**Alternativos:** sem tarefas, mostrar orientação para cadastrar; sem resultados no filtro, mostrar lista vazia.

## UC03 — Alterar status
**Ator:** Usuário. **Pré-condição:** existe tarefa. **Pós-condição:** status atualizado e persistido.

**Fluxo principal:** localizar tarefa, marcar checkbox, sistema alterna status, salva e atualiza contadores.

**Alternativo:** desmarcar tarefa concluída a reabre como pendente.

## UC04 — Excluir tarefa
**Ator:** Usuário. **Pré-condição:** existe tarefa. **Pós-condição:** tarefa removida da lista e armazenamento.

**Fluxo principal:** localizar tarefa, acionar Excluir, remover registro, salvar lista e recalcular contadores.

**Exceção:** identificador não encontrado não pode remover outro registro.

## UC05 — Recuperar tarefas salvas
**Ator:** Navegador em benefício do usuário. **Pré-condição:** dados válidos no LocalStorage. **Pós-condição:** tarefas anteriores são exibidas.

**Fluxo principal:** carregar aplicação, consultar chave, interpretar dados e apresentar tarefas e contadores.

**Alternativos/exceções:** sem dados, iniciar lista vazia; dados inválidos não devem interromper a interface.
