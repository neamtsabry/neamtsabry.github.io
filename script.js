/*
References:
Neogi, Ananya. “Create A Dark/Light Mode Switch with CSS Variables.” DEV Community, DEV Community, 10 Apr. 2019, dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8.
*/ 

const lightSwitch = document.getElementById("darkLight")
const currentTheme = localStorage.getItem('theme');

const darkClassName = "far fa-moon fa-2x";
const lightClassName = "fas fa-sun fa-2x";

if (currentTheme) {
    console.log(currentTheme)
    document.documentElement.setAttribute('data-theme', currentTheme);
    // lightSwitch.className = lightClassName;

    if (currentTheme === 'dark') {
        lightSwitch.className = lightClassName;
    }
}

function switchTheme(e) {
    if (e.target.className == lightClassName) {
        e.target.className = darkClassName;
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else {        
        e.target.className = lightClassName;
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }    
}

lightSwitch.addEventListener("click", switchTheme);