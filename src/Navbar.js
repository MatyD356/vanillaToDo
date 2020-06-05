class Navbar {

    render(target) {
        const navBar = document.createElement("nav");
        navBar.classList.add("navbar");
        target.appendChild(navBar);
        let logo = document.createElement("h1");
        logo.classList.add("logo");
        logo.textContent = "To-Do APP";
        navBar.appendChild(logo);
    }
}

export { Navbar }