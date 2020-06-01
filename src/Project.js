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
    renderToDoes() {
        for (let i = 0; this.projectToDo.length; i++) {
            console.log(`toDo${i}`);
        }
    }
}

export { Project }