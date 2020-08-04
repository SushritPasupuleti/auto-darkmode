const html = document.getElementsByTagName('html')[0];

mainTheme = "light";

const toggleTheme = () => {
    if (mainTheme === "light"){
        mainTheme = "dark"
        html.dataset.theme = mainTheme;
        console.log("Setting Theme to ", mainTheme);
    }

    else {
        mainTheme = "light"
        html.dataset.theme = mainTheme;
        console.log("Setting Theme to ", mainTheme);
    }
}