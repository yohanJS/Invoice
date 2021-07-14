"use strict"

let $ = (id) => {
    return document.getElementById(id);
}

window.onload = function() {
    $("print").onclick = function() {
        window.print();
    } 
}