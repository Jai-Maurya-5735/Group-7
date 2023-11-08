
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



function addTask() {
  // Retrieve the task details from the input fields for the task manager
  const name_of_task = document.getElementById("task-name").value;
  const description_of_task = document.getElementById("task-description").value;
  const assigned_person = document.getElementById("assigned-person-of-task").value;
  const due_date = document.getElementById("due-date-of-the-task").value;
  const priority_of_task = document.getElementById("priority").value;

  // Create object with the retrieved details as per the field
  const task = {
    name: name_of_task,
    description: description_of_task,
    person: assigned_person,
    date: due_date,
    priority: priority_of_task,
  };

  // Retrieve the tasks data from the local storage
  let tasks = JSON.parse(localStorage.getItem("tasks"));

  // Check if any of the tasks exist in the storage
  // If such a case is not there then initialize an empty array
  if (!tasks) {
    tasks = [];
  }

  tasks.push(task);

  // Convert array into JSON string
  // Reference: https://www.w3schools.com/js/js_json_stringify.asp	
  const updatedTasksJSON = JSON.stringify(tasks);

  // Update the local storage
  localStorage.setItem("tasks", updatedTasksJSON);

  displayTasks();
}


function editTask(index) {
  // Retrieve the data of the tasks from local storage
  const tasksJSON = localStorage.getItem("tasks");

  // Parse tasks from JSON 
  // OR initialize an empty array if in case it doesn't exist
  const tasks = JSON.parse(tasksJSON) || [];

  // Retrieve the task on the given index
  const editedTask = tasks[index];

  // Retrieve the HTML input elements with the id  and set its value
  document.getElementById("task-name").value = editedTask.name;
  document.getElementById("task-description").value = editedTask.description;
  document.getElementById("assigned-person-of-task").value = editedTask.person;
  document.getElementById("due-date-of-the-task").value = editedTask.date;
  document.getElementById("priority").value = editedTask.priority;

  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  tasks.splice(index, 1);

  // Convert the updated tasks into the JSON string
  // Reference: https://www.w3schools.com/js/js_json_stringify.asp
  const updatedTasksJSON = JSON.stringify(tasks);

  // Update tasks in local storage
  localStorage.setItem("tasks", updatedTasksJSON);

  displayTasks();
}
