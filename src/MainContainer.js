
class MainContainer {
    render(target) {
        let main = document.createElement("main");
        main.classList.add("main-content");
        target.appendChild(main);
    }
}
export { MainContainer }