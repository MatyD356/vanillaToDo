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
    removeToDo(toDoToRemove) {
        //need to find and delete from arr
    }
}

export { Project }