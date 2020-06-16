import { ToDo } from './ToDo';

class MainContainer {
    updateStorage(i, newItem, action) {
        let projects = JSON.parse(window.localStorage.getItem("projects"));
        if (action == "addTo") {
            projects[i].projectToDo.push(newItem)
        }
        else if (action == "remove") {
            projects[i].projectToDo = projects[i].projectToDo.slice(0, i).concat(
                projects[i].projectToDo.slice(i + 1, projects[i].projectToDo.length - 1)
            );
        }
        window.localStorage.clear();
        window.localStorage.setItem("projects", JSON.stringify(projects));
    }
    renderProjectToContainer(container, item, projectIndex) {
        container.innerHTML = "";
        //controls
        const controlsDiv = document.createElement("div");
        controlsDiv.classList.add("project-controls");
        container.appendChild(controlsDiv);
        //title
        const projectTitle = document.createElement("h2");
        projectTitle.classList.add("project-controls-title");
        projectTitle.textContent = item.name;
        controlsDiv.appendChild(projectTitle);
        // add button
        const newToDoButton = document.createElement("button");
        newToDoButton.classList.add("project-controls-btn", "btn");
        newToDoButton.textContent = "ADD NEW TASK";
        newToDoButton.addEventListener("click", () => {
            this.addNewToDoForm(item, projectIndex);
        });
        controlsDiv.appendChild(newToDoButton);
        this.renderToDoes(container, item, projectIndex);
    }
    addNewToDoForm(target, index) {
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
            radio.id = `priority${i}`;
            radio.type = "radio";
            radio.name = "priority";
            radio.classList.add("priority-radio");
            priorityInputContainer.appendChild(radio);
            let label = document.createElement("label");
            label.htmlFor = `priority${i}`;
            priorityInputContainer.appendChild(label);
        }
        const addNewToDoButton = document.createElement("button");
        addNewToDoButton.classList.add("add-NewToDo-button");
        addNewToDoButton.textContent = "ADD TASK";
        addNewToDoButton.addEventListener("click", () => {
            let title = null;
            let date = null;
            let priority = null;
            let desc = null;
            if (document.querySelector(".toDo-title-input").value.length === 0) {
                alert("pass a name");
            } else {
                title = document.querySelector(".toDo-title-input").value;
            }
            if (document.querySelector(".toDo-date-input").value == 0) {
                alert("pass a due-date");
            } else {
                date = document.querySelector(".toDo-date-input").value;
            }
            desc = document.querySelector(".toDo-desc-input").value;
            let priorityContainer = document.querySelector(".priority-container");
            for (let i = 0; i < priorityContainer.children.length; i++) {
                if (priorityContainer.children[i].checked) {
                    priority = priorityContainer.children[i].dataset.number;
                }
            }
            if (!priority) {
                alert("chose a priority");
                return;
            }
            let newToDo = new ToDo(title, desc, date, priority)
            target.projectToDo.push(newToDo);
            this.updateStorage(index, newToDo, "addTo");
            this.renderToDoes(document.querySelector(".main-content"), target, index);
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
    renderToDoes(target, item, index) {
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
            const removeToDoButton = document.createElement("button");
            removeToDoButton.classList.add("btn", "remove-ToDo");
            removeToDoButton.textContent = "REMOVE TO DO";
            removeToDoButton.addEventListener("click", (e) => {
                item.projectToDo = item.projectToDo
                    .slice(0, i)
                    .concat(item.projectToDo.slice(i + 1, item.projectToDo.length - 1))
                //update here
                this.updateStorage(index, null, "remove");
                e.target.parentElement.remove();
            });
            toDoContainer.appendChild(removeToDoButton);
        }
    }
    render(target) {
        let main = document.createElement("main");
        main.classList.add("main-content");
        target.appendChild(main);
    }
}
export { MainContainer }