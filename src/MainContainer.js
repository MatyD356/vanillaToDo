import { ToDo } from './ToDo';
import { AsideMenu } from './index';
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
            this.addNewToDoForm(item);
        });
        controlsDiv.appendChild(newToDoButton);
        this.renderToDoes(container, item);
    }
    addNewToDoForm(target) {
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
        addNewToDoButton.addEventListener("click", () => {
            let title = document.querySelector(".toDo-title-input").value;
            let date = document.querySelector(".toDo-date-input").value;
            let desc = document.querySelector(".toDo-desc-input").value;
            let priority = null;
            let priorityContainer = document.querySelector(".priority-container");
            for (let i = 0; i < priorityContainer.children.length; i++) {
                if (priorityContainer.children[i].checked) {
                    priority = priorityContainer.children[i].dataset.number;
                }
            }
            target.projectToDo.push(new ToDo(title, desc, date, priority));
            this.renderToDoes(document.querySelector(".main-content"), target);
            this.removeNewToDoForm();
        });
        form.appendChild(addNewToDoButton);
        const cancelNewToDo = document.createElement("button");
        cancelNewToDo.classList.add("cancel-NewToDo-button");
        cancelNewToDo.textContent = "CANCEL";
        cancelNewToDo.addEventListener("click", () => {
            this.removeNewToDoForm();
        });
        form.appendChild(cancelNewToDo);
    }
    removeNewToDoForm() {
        document.querySelector(".new-ToDo-form-container").remove();
    }
    renderToDoes(target, item) {
        if (document.querySelector(".project-toDoes")) {
            document.querySelector(".project-toDoes").remove();
        }
        let projectToDoes = document.createElement("div");
        projectToDoes.classList.add("project-toDoes");
        target.appendChild(projectToDoes);
        for (let i = 0; i < item.projectToDo.length; i++) {
            const toDoContainer = document.createElement("div");
            toDoContainer.classList.add("toDo-container");
            projectToDoes.appendChild(toDoContainer);
            const toDoTitle = document.createElement("h2");
            toDoTitle.classList.add("toDo-title");
            toDoTitle.textContent = item.projectToDo[i].title;
            toDoContainer.appendChild(toDoTitle);
            const toDoDate = document.createElement("h3");
            toDoDate.classList.add("toDo-date");
            toDoDate.textContent = item.projectToDo[i].date;
            toDoContainer.appendChild(toDoDate);
            const toDoDesc = document.createElement("h4");
            toDoDesc.classList.add("toDo-desc");
            toDoDesc.textContent = item.projectToDo[i].desc;
            toDoContainer.appendChild(toDoDesc);
            const toDoPriority = document.createElement("h4");
            toDoPriority.classList.add("toDo-priority");
            toDoPriority.textContent = item.projectToDo[i].priority;
            toDoContainer.appendChild(toDoPriority);
        }
    }
    render(target) {
        let main = document.createElement("main");
        main.classList.add("main-content");
        target.appendChild(main);
    }
}
export { MainContainer }