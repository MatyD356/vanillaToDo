
class MainContainer {
    renderProjectToContainer(container, item) {
        container.innerHTML = "";
        //controls
        const controlsDiv = document.createElement("div");
        controlsDiv.classList.add("project-controls");
        container.appendChild(controlsDiv);
        //title
        const projectTitle = document.createElement("h2");
        projectTitle.textContent = item.name;
        controlsDiv.appendChild(projectTitle);
        // add button
        const newToDoButton = document.createElement("button");
        newToDoButton.textContent = "ADD NEW TASK";
        newToDoButton.addEventListener("click", () => {
            this.addNewToDoForm();
        });
        controlsDiv.appendChild(newToDoButton);
    }
    addNewToDoForm() {
        const formContainer = document.createElement("div");
        formContainer.classList.add("new-ToDo-form-container");
        document.body.appendChild(formContainer);
        const form = document.createElement("div");
        form.classList.add("new-ToDo-form");
        formContainer.appendChild(form);
        const pTitle = document.createElement("p");
        pTitle.classList.add("toDo-title");
        pTitle.textContent = "Name";
        form.appendChild(pTitle);
        const titleInput = document.createElement("input");
        titleInput.classList.add("toDo-title-input");
        form.appendChild(titleInput);
        const pDate = document.createElement("p");
        pDate.classList.add("toDo-date");
        pDate.textContent = "Due Date";
        form.appendChild(pDate);
        const dateInput = document.createElement("input");
        dateInput.classList.add("toDo-date-input");
        dateInput.type = "date";
        form.appendChild(dateInput);
        const descTitle = document.createElement("p");
        descTitle.classList.add("toDo-desc-title");
        descTitle.textContent = "Task description";
        form.appendChild(descTitle);
        const descArea = document.createElement("textarea");
        descArea.classList.add("toDo-desc-input");
        form.appendChild(descArea);
        const priorityTitle = document.createElement("p");
        priorityTitle.classList.add("toDo-priority-title");
        priorityTitle.textContent = "Priority";
        form.appendChild(priorityTitle);
        const priorityInputContainer = document.createElement("div");
        priorityInputContainer.classList.add("priority-container");
        form.appendChild(priorityInputContainer);
        for (let i = 0; i < 3; i++) {
            let radio = document.createElement("input");
            radio.dataset.number = i;
            radio.type = "radio";
            radio.name = "priority";
            radio.classList.add("priority-radio");
            priorityInputContainer.appendChild(radio);
        }
        const addNewToDoButton = document.createElement("button");
        addNewToDoButton.classList.add("add-NewToDo-button");
        addNewToDoButton.textContent = "ADD TASK";
        form.appendChild(addNewToDoButton);
        const cancelNewToDo = document.createElement("button");
        cancelNewToDo.classList.add("cancel-NewToDo-button");
        cancelNewToDo.textContent = "CANCEL";
        cancelNewToDo.addEventListener("click", () => {
            this.removeNewToDoForm();
        });
        form.appendChild(cancelNewToDo);
    }
    validateFormInput() {
        if (true) {

        }
        else {
            alert("bad")
        }
    }
    removeNewToDoForm() {
        document.querySelector(".new-ToDo-form-container").remove();
    }
    render(target) {
        let main = document.createElement("main");
        main.classList.add("main-content");
        target.appendChild(main);
    }
}
export { MainContainer }