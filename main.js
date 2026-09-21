const card = document.querySelector(".as");


var glowElem = document.createElement("span");
glowElem.classList.add("glowElem");

window.addEventListener("mousemove", (e) => {
    card.append(glowElem);

    var x = e.pageX;
    var y = e.pageY;

    glowElem.style.left = x + "px";
    glowElem.style.top = y + "px";
});

const header_button = document.querySelector(".button-header");
const ul_header = document.querySelector(".ul-header");

if (header_button && ul_header) {
    header_button.addEventListener("click", function () {
        header_button.style.display = "none";
        ul_header.style.visibility = "visible";
    });
}
