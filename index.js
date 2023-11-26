// Get references to the buttons and paragraphs

var westButton = document.getElementById("west");
var northButton = document.getElementById("north");
var centralButton = document.getElementById("central");
var northEastButton = document.getElementById("northeast");
var eastButton = document.getElementById("east");

var westRecs = document.getElementById ("west-container");
var northRecs = document.getElementById("north-container");
var centralRecs = document.getElementById("central-container");
var northEastRecs = document.getElementById("northeast-container");
var eastRecs = document.getElementById("east-container");

// Highlight button on and off

function highlightOnClick(button) {
    var buttons=document.getElementsByTagName("button");
    for (var i=0; i<buttons.length; i++) {
        buttons[i].classList.remove("highlighted");
    }
    button.classList.add("highlighted")
}

// Add click event listeners to the buttons 
westButton.addEventListener("click", function() {
    westRecs.style.display = "block";
    northRecs.style.display = "none";
    centralRecs.style.display = "none";
    northEastRecs.style.display = "none";
    eastRecs.style.display = "none";
}); 

northButton.addEventListener("click", function() {
    westRecs.style.display = "none";
    northRecs.style.display = "block";
    centralRecs.style.display = "none";
    northEastRecs.style.display = "none";
    eastRecs.style.display = "none";
}); 

centralButton.addEventListener("click", function() {
    westRecs.style.display = "none";
    northRecs.style.display = "none";
    centralRecs.style.display = "block";
    northEastRecs.style.display = "none";
    eastRecs.style.display = "none";
}); 

northEastButton.addEventListener("click", function() {
    westRecs.style.display = "none";
    northRecs.style.display = "none";
    centralRecs.style.display = "none";
    northEastRecs.style.display = "block";
    eastRecs.style.display = "none";
}); 

eastButton.addEventListener("click", function() {
    westRecs.style.display = "none";
    northRecs.style.display = "none";
    centralRecs.style.display = "none";
    northEastRecs.style.display = "none";
    eastRecs.style.display = "block";
}); 

// East List

