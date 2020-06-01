
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
        });
        controlsDiv.appendChild(newToDoButton);
    }
    addNewToDo() {

    }
    render(target) {
        let main = document.createElement("main");
        main.classList.add("main-content");
        target.appendChild(main);
    }
}
export { MainContainer }