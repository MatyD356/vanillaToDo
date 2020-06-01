class Project {
    constructor(name, date, proiority) {
        this.name = name;
        this.date = date;
        this.proiority = proiority;
        this.projectToDo = [];
    }
    changeName(newName) {
        this.name = newName;
    }
    changeDate(newDate) {
        this.date = newDate;
    }
    addToDo(newToDo) {
        this.projectToDo.push(newToDo);
    }
    renderProjectToContainer(container) {
        container.innerHTML = "";
        //controls
        const controlsDiv = document.createElement("div");
        controlsDiv.classList.add("project-controls");
        container.appendChild(controlsDiv);
        //title
        const projectTitle = document.createElement("h2");
        projectTitle.textContent = this.name;
        controlsDiv.appendChild(projectTitle);
        // add button
        const newToDoButton = document.createElement("button");
        newToDoButton.textContent = "ADD NEW TASK";
        newToDoButton.addEventListener("click", () => {
        });
        controlsDiv.appendChild(newToDoButton);
    }
    renderToDoes() {
        for (let i = 0; this.projectToDo.length; i++) {
            console.log(`toDo${i}`);
        }
    }
}

export { Project }