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

function displayTasks() {
    const gameArea = document.getElementById('game-area');
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.textContent = task.getTaskDetails();
        gameArea.appendChild(taskElement);
    });
}

displayTasks();
