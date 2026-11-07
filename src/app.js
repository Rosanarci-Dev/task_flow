const STORAGE_KEY = "taskflow.tasks.v1";
const form = document.querySelector("#task-form");
const titleInput = document.querySelector("#task-title");
const descriptionInput = document.querySelector("#task-description");
const priorityInput = document.querySelector("#task-priority");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const feedback = document.querySelector("#form-feedback");
const filterButtons = document.querySelectorAll("[data-filter]");
let tasks = loadTasks();
let activeFilter = "todas";

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch { return []; }
}
function saveTasks() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); }
  catch { feedback.textContent = "Não foi possível salvar no armazenamento deste navegador."; }
}
function createTask(title, description, priority) {
  return { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random(),
    title, description, priority, completed:false, createdAt:new Date().toISOString() };
}
function formatDate(value) {
  return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"short"}).format(new Date(value));
}
function getVisibleTasks() {
  if (activeFilter === "pendentes") return tasks.filter(task => !task.completed);
  if (activeFilter === "concluidas") return tasks.filter(task => task.completed);
  return tasks;
}
function updateSummary() {
  document.querySelector("#total-count").textContent = tasks.length;
  document.querySelector("#pending-count").textContent = tasks.filter(task => !task.completed).length;
  document.querySelector("#completed-count").textContent = tasks.filter(task => task.completed).length;
}
function renderTasks() {
  taskList.replaceChildren();
  const visible = getVisibleTasks();
  emptyState.style.display = visible.length ? "none" : "block";
  visible.forEach(task => {
    const card = document.createElement("article");
    card.className = "task-card" + (task.completed ? " done" : "");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; checkbox.className = "task-check"; checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label","Alterar status de " + task.title);
    checkbox.addEventListener("change",() => toggleTask(task.id));
    const content = document.createElement("div");
    const title = document.createElement("h3");
    title.className = "task-title"; title.textContent = task.title; content.append(title);
    if (task.description) {
      const description = document.createElement("p");
      description.className = "task-description"; description.textContent = task.description; content.append(description);
    }
    const meta = document.createElement("div"); meta.className = "task-meta";
    const priority = document.createElement("span"); priority.className = "priority " + task.priority;
    priority.textContent = {baixa:"Baixa prioridade",media:"Média prioridade",alta:"Alta prioridade"}[task.priority];
    const date = document.createElement("span"); date.className = "task-date";
    date.textContent = "Criada em " + formatDate(task.createdAt); meta.append(priority,date); content.append(meta);
    const remove = document.createElement("button"); remove.className = "delete-button";
    remove.type = "button"; remove.textContent = "Excluir";
    remove.setAttribute("aria-label","Excluir tarefa " + task.title);
    remove.addEventListener("click",() => deleteTask(task.id));
    card.append(checkbox,content,remove); taskList.append(card);
  });
  updateSummary();
}
function toggleTask(id) {
  tasks = tasks.map(task => task.id === id ? {...task,completed:!task.completed} : task);
  saveTasks(); renderTasks();
}
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks(); renderTasks();
}
form.addEventListener("submit",event => {
  event.preventDefault();
  const title = titleInput.value.trim();
  if (!title) { feedback.textContent = "Informe um título para a tarefa."; titleInput.focus(); return; }
  tasks.unshift(createTask(title,descriptionInput.value.trim(),priorityInput.value));
  saveTasks(); form.reset(); priorityInput.value = "media";
  feedback.textContent = "Tarefa adicionada com sucesso."; renderTasks(); titleInput.focus();
});
filterButtons.forEach(button => button.addEventListener("click",() => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle("active",item === button));
  renderTasks();
}));
renderTasks();
