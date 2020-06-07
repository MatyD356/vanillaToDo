import { SideMenu } from './SideMenu';
import { MainContainer } from './MainContainer';
import { Navbar } from './Navbar';
import { Footer } from './Footer';


//test
let Nav = new Navbar();
let AsideMenu = new SideMenu();
let MainContent = new MainContainer();
let Foot = new Footer();
AsideMenu.getProjects();
Nav.render(document.querySelector("#content"));
AsideMenu.render(document.querySelector("#content"));
MainContent.render(document.querySelector("#content"));
Foot.render(document.querySelector("#content"));

export { AsideMenu, MainContent };