# Workflow de Git — TaskFlow

## Branches
- main: versões estáveis.
- develop: integração do trabalho em andamento.
- feature/issue-N-descricao: novas funcionalidades.
- fix/issue-N-descricao: correções.

## Ciclo por Issue
1. Selecionar Issue aberta.
2. Atualizar develop: git switch develop; git pull origin develop.
3. Criar branch: git switch -c feature/issue-1-estrutura.
4. Implementar apenas o escopo da Issue.
5. Revisar git status e git diff.
6. Criar commit atômico no padrão Conventional Commits.
7. Enviar branch e abrir Pull Request para develop.
8. Incluir Closes #N na descrição do PR.
9. Após revisão e validação, integrar e excluir branch temática.

## Conventional Commits
Formato: tipo(escopo): descrição objetiva.
- feat: funcionalidade.
- fix: correção.
- docs: documentação.
- style: formatação sem mudança de comportamento.
- refactor: melhoria interna sem alterar comportamento.
- test: testes.
- chore: manutenção e configuração.

## SemVer
Formato MAJOR.MINOR.PATCH:
- MAJOR: mudança incompatível.
- MINOR: funcionalidade nova compatível.
- PATCH: correção compatível.

Criar tags anotadas apenas em marcos estáveis:
```bash
git tag -a v0.1.0 -m "Initial functional baseline"
git push origin v0.1.0
```
