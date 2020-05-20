import { ToDo } from './ToDo';
import { Project } from './Project';

let firstProject = new Project("Default", (new Date()));
let first = new ToDo("loundry", "dirty socks", (new Date()), 1, false);
console.log(first, firstProject);
//app logic module
class App {
    render() {
        document.body.innerHTML = "render goes brrrr";
    }
}
let toDoApp = new App();
toDoApp.render();
//DOM chaining