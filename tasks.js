class Task {
    constructor(title, description, reward) {
        this.title = title;
        this.description = description;
        this.reward = reward;
    }

    getTaskDetails() {
        return `${this.title}: ${this.description} (Reward: ${this.reward})`;
    }
}

const tasks = [
    new Task("Gather Resources", "Collect 10 units of copper.", "50 Gold"),
    new Task("Help the Blacksmith", "Deliver iron to Darren.", "100 Gold"),
    new Task("Trade with the Merchant", "Exchange goods with Ruby.", "75 Gold")
];

function startTask(task) {
    alert(`Starting task: ${task.getTaskDetails()}`);
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.textContent = task.getTaskDetails();
    taskList.appendChild(taskItem);
}

function checkForTask(character) {
    if (character.role === "Town Elder") {
        startTask(tasks[0]);
    } else if (character.role === "Blacksmith") {
        startTask(tasks[1]);
    } else if (character.role === "Merchant") {
        startTask(tasks[2]);
    }
}
