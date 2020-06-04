import { Project } from './Project';
import { MainContent } from './index';
import { MainContainer } from './MainContainer';

class SideMenu {
    constructor() {
        this.projects = [
        ];
        this.aside = document.createElement("aside");
    }
    projectsList() {
        return this.projects;
    }
    addProjectButton() {
        const projectButton = document.createElement("button");
        projectButton.classList.add("btn", "add-project");
        projectButton.textContent = "ADD PROJECT";
        projectButton.addEventListener("click", () => {
            this.addNewProjectForm();
        })
        this.aside.appendChild(projectButton);
    }
    addNewProject() {
        //get values from form and crate new project obj
        const form = document.querySelector(".project-form");
        if (form) {
            let name = null;
            let date = null;
            if (/([A-Z]){3,}/gi.test(document.querySelector(".name-input").value)) {
                name = document.querySelector(".name-input").value;
            } else {
                alert("bad name");
            } if (/(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/.test(document.querySelector(".date-input").value)) {
                date = document.querySelector(".date-input").value;
            } else {
                alert("no date");
            }
            if (date && name) {
                this.projects.push((new Project(name, date)));
                this.removeNewProjectForm();
                this.addProjectButton();
            }
        }
    }
    removeProject(index) {
        if (this.projects.length >= index) {
            this.projects.splice(index, 1);
        }
    }
    removeProjectButton() {
        //removeButton exmaple when form is opened
        if (document.querySelector(".add-project")) {
            document.querySelector(".add-project").remove();
        }
    }
    renderProjects() {
        if (document.querySelector(".project-container")) {
            document.querySelector(".project-container").remove();
        }
        const projectsContainer = document.createElement("div");
        projectsContainer.classList.add("project-container");
        for (let i = 0; i < this.projects.length; i++) {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project-div");
            const projectTitle = document.createElement("h2");
            projectTitle.classList.add("project-title");
            projectTitle.textContent = this.projects[i].name;
            projectDiv.appendChild(projectTitle);
            const dueDate = document.createElement("div");
            dueDate.classList.add("project-due-date");
            dueDate.textContent = this.projects[i].date;
            projectDiv.appendChild(dueDate);
            const deleteProject = document.createElement("button");
            deleteProject.id = i;
            deleteProject.textContent = "delete";
            deleteProject.addEventListener("click", (e) => {
                e.target.parentElement.remove();
                this.removeProject(e.target.id);
                document.querySelector(".main-content").innerHTML = "";
            });
            projectDiv.appendChild(deleteProject);
            projectDiv.addEventListener("click", () => {
                MainContent.renderProjectToContainer(document.querySelector(".main-content")
                    , this.projects[i]);
            });
            projectsContainer.appendChild(projectDiv);
        }
        this.aside.appendChild(projectsContainer);
    }
    addNewProjectForm() {
        this.removeProjectButton();
        const form = document.createElement("div");
        form.classList.add("project-form", "hidden");
        this.aside.appendChild(form);
        const nameInputTitle = document.createElement("p");
        nameInputTitle.classList.add("add-project-form-title");
        nameInputTitle.textContent = "Project name";
        form.appendChild(nameInputTitle);
        const nameInput = document.createElement("input");
        nameInput.classList.add("name-input", "inpt");
        nameInput.type = "text";
        form.appendChild(nameInput);
        const dateInputTitle = document.createElement("p");
        dateInputTitle.classList.add("add-project-form-title");
        dateInputTitle.textContent = "Project date";
        form.appendChild(dateInputTitle);
        const dateInput = document.createElement("input");
        dateInput.classList.add("date-input", "inpt");
        dateInput.type = "date";
        form.appendChild(dateInput);
        const buttonsContainer = document.createElement("div");
        form.appendChild(buttonsContainer);
        const addButton = document.createElement("button");
        addButton.classList.add("btn", "new-project-form-add");
        addButton.textContent = "ADD";
        addButton.addEventListener("click", () => {
            this.addNewProject();
            this.renderProjects();
        })
        buttonsContainer.appendChild(addButton);
        const cancelButton = document.createElement("button");
        cancelButton.classList.add("btn", "new-project-form-cancel");
        cancelButton.textContent = "CANCEL";
        cancelButton.addEventListener("click", () => {
            this.removeNewProjectForm();
            this.addProjectButton();
        })
        buttonsContainer.appendChild(cancelButton);
    }
    removeNewProjectForm() {
        //hide form
        if (document.querySelector(".project-form")) {
            document.querySelector(".project-form").remove();
        }
    }
    render(target) {
        this.aside.classList.add("aside-menu");
        target.appendChild(this.aside);
        this.renderProjects();
        this.addProjectButton();
    }
}

export { SideMenu }