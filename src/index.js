import { SideMenu } from './SideMenu';
import { MainContainer } from './MainContainer';



//test
let AsideMenu = new SideMenu();
let MainContent = new MainContainer();
AsideMenu.render(document.querySelector("#content"));
MainContent.render(document.querySelector("#content"), null);

export { AsideMenu, MainContent };