import { ToDo } from './ToDo';
import { Project } from './Project';
import { SideMenu } from './SideMenu';
import { MainContainer } from './MainContainer';

let firstProject = new Project("Everyday", (new Date()));
let first = new ToDo("loundry", "dirty socks", (new Date()), 1, false);
console.log(first, firstProject);
//app logic module
class App {
    //variable with all projects?
}

//test
let ToDoApp = new App();
let AsideMenu = new SideMenu();
let MainContent = new MainContainer();
AsideMenu.render(document.querySelector("#content"));
MainContent.render(document.querySelector("#content"));
ToDoApp.render();
