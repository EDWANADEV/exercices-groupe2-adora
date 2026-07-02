const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const div = document.createElement("div");

    div.classList.add("task");
    const all_list = document.querySelectorAll(".task");
    let lentgh = all_list.length;

    div.innerHTML += `<span class="done"></span> 
        <span class="task-text">${taskText}</span> 
        <span class="delete_btn"></span>`;

    const deleteBtn = div.querySelector(".delete_btn");
    deleteBtn.addEventListener("click", () => {
      div.remove();
    });
    const done = div.querySelector(".done");
    done.addEventListener("click", () => {
      done.classList.toggle("done_active");
      div.classList.toggle("task-text-done");
    });
    if (lentgh >= 8) {
      alert("Vous ne pouvez pas ajouter plus de 8 tâches.");
      return;
    }
    document.querySelector(".container").appendChild(div);
    taskInput.value = "";
  }
});
