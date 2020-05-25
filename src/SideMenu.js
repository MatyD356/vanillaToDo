import { Project } from './Project';

class SideMenu {
    constructor() {
        this.projects = [
            (new Project("default", (new Date()))),
            (new Project("work", (new Date())))
        ];
        this.aside = document.createElement("aside");
    }
    addProjectsList(newProject) {
        this.projects.push(newProject);
    }
    projectsList() {
        return this.projects;
    }
    addProjectButton() {
        const projectButton = document.createElement("button");
        projectButton.classList.add("btn", "add-project");
        projectButton.textContent = "ADD PROJECT";
        projectButton.addEventListener("click", () => {
            //open form method from SideMenu obj
            this.addProjectsList(new Project("special", (new Date())));
            console.log(this.projects);
            this.renderProjects();
        })
        this.aside.appendChild(projectButton);
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
            projectsContainer.appendChild(projectDiv);
        }
        this.aside.appendChild(projectsContainer);
    }
    addNewProjectForm() {
        const form = document.createElement("div");
        form.classList.add("projesct-form", "hidden");

        this.aside.appendChild(form);
    }
    render(target) {
        this.aside.classList.add("aside-menu");
        target.appendChild(this.aside);
        this.renderProjects();
        this.addProjectButton();
    }
}

export { SideMenu }