
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
    }
    render(target) {
        let main = document.createElement("main");
        main.classList.add("main-content");
        target.appendChild(main);
    }
}
export { MainContainer }