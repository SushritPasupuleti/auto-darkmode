const html = document.getElementsByTagName('html')[0];

mainTheme = "light";

const toggleTheme = () => {
    if (mainTheme === "light"){
        mainTheme = "dark"
        html.dataset.theme = mainTheme;
        console.log("Setting Theme to ", mainTheme);
        var btn = document.getElementById("theme-switcher");
        btn.innerHTML = "🌞 Light Mode";
    }

    else {
        mainTheme = "light"
        html.dataset.theme = mainTheme;
        console.log("Setting Theme to ", mainTheme);
        var btn = document.getElementById("theme-switcher");
        btn.innerHTML = "🌑 Dark Mode";
    }
}