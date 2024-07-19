const themes = [{
        backgroundColor: "hsl(225, 21%, 49%)",
        // buttonColor: "hsl(224, 28%, 35%)",
        textColor: "white",
        conBox: "",
    },
    {
        backgroundColor: "hsl(0, 0%, 90%)",
        buttonColor: "hsl(0, 0%, 80%)",
        textColor: "black",
        conBox: "hsl(0, 5%, 81%)",
    },
    {
        backgroundColor: " hsl(268, 75%, 9%)",
        buttonColor: "hsl(268, 71%, 12%)",
        textColor: " hsl(52, 100%, 62%)",
        conBox: "hsl(268, 71%, 12%)",
    },
];

function applyTheme(theme) {
    document.body.style.backgroundColor = theme.backgroundColor;
    document.getElementById("screen").style.backgroundColor = theme.buttonColor;
    document.getElementById("screen").style.color = theme.textColor;
    document.querySelector(".second-con").style.backgroundColor = theme.conBox;
    document.getElementsByTagName("header").style.color = theme.textColor;

    const buttons = document.querySelectorAll(".btnn");
    buttons.forEach((button) => {
        button.style.backgroundColor = theme.buttonColor;
        button.style.color = theme.textColor;
    });
}

document
    .getElementById("toggle1")
    .addEventListener("click", () => applyTheme(themes[0]));
document
    .getElementById("toggle2")
    .addEventListener("click", () => applyTheme(themes[1]));
document
    .getElementById("toggle3")
    .addEventListener("click", () => applyTheme(themes[2]));

let screen = document.getElementById("screen");

function addToScreen(event, value) {
    event.preventDefault();
    if (value === "C") {
        screen.value = "";
    } else if (value === "=") {
        let result = eval(screen.value);
        screen.value = result;
    } else {
        screen.value += value;
    }
}

function clearScreen(event) {
    event.preventDefault();
    screen.value = "";
}