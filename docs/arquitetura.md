# Arquitetura e Modelo de Dados — TaskFlow

## Visão arquitetural
```
Usuário
  |
Navegador
  |-- index.html (estrutura e formulário)
  |-- styles.css (apresentação responsiva)
  |-- app.js (regras, eventos e renderização)
  |
Web Storage API — localStorage
```

## Entidade lógica: Task
| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| id | string | Sim | Identificador único |
| title | string | Sim | Título da tarefa |
| description | string | Não | Detalhes opcionais |
| priority | enum | Sim | baixa, media ou alta |
| completed | boolean | Sim | Estado de conclusão |
| createdAt | string ISO-8601 | Sim | Data de criação |

## Persistência
- Chave: taskflow.tasks.v1.
- Formato: array JSON de objetos Task.
- Escopo: armazenamento local do navegador e da origem.
- Limitação: limpar dados do navegador pode apagar tarefas; não há sincronização ou backup remoto.

## Decisões técnicas
1. Separar HTML, CSS e JavaScript.
2. Utilizar textContent para inserir conteúdo do usuário como texto.
3. Centralizar leitura e gravação do LocalStorage.
4. Usar identificador único para alterar ou excluir registro correto.

## Evoluções possíveis
Extrair persistência em módulo, adicionar testes, editar tarefas e futuramente migrar para API e banco de dados caso o escopo exija contas ou sincronização.
