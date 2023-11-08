
function displayTasks() {
  let tasks;
  const see_tasks = localStorage.getItem("tasks");

  // Check if any task exist in local storage; if not then there is a need to initialize an empty array
  if (see_tasks) {
    tasks = JSON.parse(see_tasks);
  } else {
    tasks = [];
  }

  // Get the task-list element 
  const task_of_user = document.getElementById("task-list");

  // Clear the existing content 
  task_of_user.innerHTML = "";

  // Create an array of task card elements using map()
  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
  // Also used chatgpt for the taskCards
  const taskCards = tasks.map((task) => {
    const taskOP = document.createElement("div");
    taskOP.classList.add("task-card");

    const h3 = document.createElement("h3");
    h3.textContent = task.name;
    taskOP.appendChild(h3);

    return taskOP;
  });

  // Append the task card elements to the task list
  Reference: //developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
  https: taskCards.forEach((taskOP) => {
    task_of_user.appendChild(taskOP);
  });

  // Creates a new paragraph element in the DOM for display
  // Set the inner HTML of the each description element to include the text

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.innerHTML = `<strong>Description:</strong> ${task.description}`;
  taskOP.appendChild(descriptionParagraph);

  const assignedPersonParagraph = document.createElement("p");
  assignedPersonParagraph.innerHTML = `<strong>Assigned Person:</strong> ${task.person}`;
  taskOP.appendChild(assignedPersonParagraph);

  const dueDateParagraph = document.createElement("p");
  dueDateParagraph.innerHTML = `<strong>Due Date:</strong> ${task.date}`;
  taskOP.appendChild(dueDateParagraph);

  const priorityParagraph = document.createElement("p");
  priorityParagraph.innerHTML = `<strong>Priority:</strong> ${task.priority}`;
  taskOP.appendChild(priorityParagraph);

  // When the button is clicked the editTask function will be triggered
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = () => editTask(index);
  taskOP.appendChild(editButton);

  // When the button is clicked the deleteTask function will be triggered
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => deleteTask(index);
  taskOP.appendChild(deleteButton);

  task_of_user.appendChild(taskOP);
}
