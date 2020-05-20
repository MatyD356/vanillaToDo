class SideMenu {
    render(target) {
        let aside = document.createElement("aside");
        aside.classList.add("aside-menu");
        target.appendChild(aside);
    }
}

export { SideMenu }