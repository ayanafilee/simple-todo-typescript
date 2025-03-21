"use strict";
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const listContainer = document.getElementById("listContainer");
const emptyState = document.getElementById("emptyState");
function updateUI() {
    const hasTasks = taskList.children.length > 0;
    listContainer.style.display = hasTasks ? "block" : "none";
    emptyState.style.display = hasTasks ? "none" : "block";
}
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = "";
        taskInput.focus();
        updateUI();
    }
});
function addTask(text) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.taskText = text;
    const taskContent = document.createElement("span");
    taskContent.className = "task-content";
    taskContent.textContent = text;
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
        updateUI();
    });
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}
// Initial UI update
updateUI();
