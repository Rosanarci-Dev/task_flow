# Histórias de Usuário — TaskFlow

## US01 — Cadastrar tarefa
**Como** usuário, **quero** cadastrar tarefa com título e descrição opcional, **para que** eu registre algo que preciso fazer.
- Dado que informo título válido, quando envio o formulário, então a tarefa aparece na lista.
- Dado que a descrição está vazia, quando envio título válido, então a tarefa é cadastrada sem descrição.
- Dado que o título está vazio, quando tento cadastrar, então o sistema impede o cadastro e informa o problema.
**Rastreabilidade:** RF01, RF02.

## US02 — Definir prioridade
**Como** usuário, **quero** definir a prioridade, **para que** eu identifique o que merece atenção primeiro.
- Dado que estou cadastrando uma tarefa, quando seleciono baixa, média ou alta, então essa prioridade fica associada.
- Dado que não altero a opção inicial, quando cadastro, então média é utilizada.
**Rastreabilidade:** RF03.

## US03 — Visualizar tarefas
**Como** usuário, **quero** visualizar tarefas cadastradas, **para que** eu acompanhe minhas atividades.
- Dado que existem tarefas salvas, quando abro a aplicação, então elas são exibidas.
- Dado que não existem tarefas, quando acesso a lista, então vejo mensagem orientando o primeiro cadastro.
**Rastreabilidade:** RF04.

## US04 — Concluir ou reabrir
**Como** usuário, **quero** alterar o status de uma tarefa, **para que** eu acompanhe meu progresso.
- Dado que está pendente, quando marco a caixa, então passa a concluída.
- Dado que está concluída, quando desmarco, então volta a pendente.
- Dado que altero status, quando a lista atualiza, então os contadores refletem a mudança.
**Rastreabilidade:** RF05, RF06.

## US05 — Excluir
**Como** usuário, **quero** excluir uma tarefa, **para que** eu remova atividades desnecessárias.
- Dado que uma tarefa existe, quando aciono Excluir, então ela deixa de aparecer.
- Dado que excluí a tarefa, quando atualizo a página, então ela não retorna.
**Rastreabilidade:** RF07.

## US06 — Filtrar
**Como** usuário, **quero** filtrar por status, **para que** eu veja apenas o grupo relevante.
- Dado que existem status diferentes, quando seleciono Pendentes, então vejo apenas pendentes.
- Quando seleciono Concluídas, então vejo somente concluídas.
- Quando seleciono Todas, então vejo todos os registros.
**Rastreabilidade:** RF08.

## US07 — Persistir dados
**Como** usuário, **quero** que tarefas permaneçam salvas no navegador, **para que** eu não precise cadastrá-las novamente.
- Dado que cadastrei uma tarefa, quando atualizo no mesmo navegador, então ela continua disponível.
- Dado que alterei ou excluí uma tarefa, quando atualizo, então a versão atual é apresentada.
**Rastreabilidade:** RF09.

## US08 — Acompanhar resumo
**Como** usuário, **quero** ver total, pendentes e concluídas, **para que** eu entenda rapidamente meu progresso.
- Dado que existem tarefas, quando a lista é exibida, então os três contadores apresentam os totais corretos.
- Dado que cadastro, concluo ou excluo, quando a interface atualiza, então os contadores são recalculados.
**Rastreabilidade:** RF10.
