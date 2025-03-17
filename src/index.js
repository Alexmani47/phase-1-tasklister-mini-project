document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const taskItem = document.createElement("li");

      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = " X ";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.style.background = "red";
      deleteBtn.style.color = "white";
      deleteBtn.style.border = "none";
      deleteBtn.style.cursor = "pointer";

      deleteBtn.addEventListener("click", () => {
        taskItem.remove();
      });

      taskItem.appendChild(taskSpan);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);

      taskInput.value = "";
    }
  });
});

