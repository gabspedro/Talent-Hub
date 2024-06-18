// Não tenho muito o que falar sobre, como era apenas o Light/Dark Mode eu só vi um vídeo e refiz o que o cara tinha feito

// Light - Dark Mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll("#icon");
const themeIcons2 = document.querySelectorAll(".icons");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    setDarkMode();
}

btn.addEventListener("click", function() {
    setTheme();
});

btn2.addEventListener("click", function() {
    setTheme();
});

function setTheme() {
    let currentTheme = document.body.getAttribute("theme")

    if (currentTheme === "dark") {
        setLightMode();
    } else {
        setDarkMode();
    }
}

function setDarkMode() {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");

    themeIcons.forEach((icon) => {  
        icon.src = icon.getAttribute("src-dark")
    })
    themeIcons2.forEach((icons) => {
        icons.src = icons.getAttribute("src-dark")
    }) // Como eu criei o themeIcons2 lá em cima eu tive que adiocionar aqui em baixo para funcionar
}
function setLightMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");

    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-light")
    })
    themeIcons2.forEach((icon) => {
        icon.src = icon.getAttribute("src-light")
    })
}

function onload() {
    document.body.getAttribute("theme", "dark", localStorage.getItem("dark") === true)
} // No vídeo que vi para fazer o sistema de tema não mostrava como ligar a página principal com o restante, então entrei em outro vídeo para fazer essa parte 
  // do sistema e tive que modificar para se adequar com o código (antes era algo assim: document.body.ClassList.toggle) e funcionou 🤠👍
