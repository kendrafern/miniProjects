"use strict";

var backgroundColors = ["#fa9f05","#fce513", "#87f907", "#08effe","#0644fb", "#9e05fb", "#e404f7", "#fb062b"];

document.getElementById("clickMe").addEventListener("click", changeBackground);

function changeBackground () {
    document.body.style.backgroundColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];
}
