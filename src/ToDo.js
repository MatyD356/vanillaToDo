class ToDo {
    constructor(title, desc, date, priority, checked) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.priority = priority;
        this.checked = checked;
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
    checkDone() {
        this.checked = true;
    }
}
export { ToDo };