class ToDo {
    constructor(title, desc, date, priority) {
        this.title = title;
        this.date = date;
        this.desc = desc;
        this.priority = priority;
    }
    changeTitle(newTitle) {
        this.priority = newTitle;
    }
    changeDesc(newDesc) {
        this.desc = newDesc;
    }
    changeDate(newDate) {
        this.date = newDate;
    }
    changePriority(newPriority) {
        this.priority = newPriority;
    }
}
export { ToDo };