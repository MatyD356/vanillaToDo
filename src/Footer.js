class Footer {

    render(target) {
        const navBar = document.createElement("div");
        navBar.classList.add("footer");
        navBar.textContent = "created with xd";
        target.appendChild(navBar);
    }
}

export { Footer }