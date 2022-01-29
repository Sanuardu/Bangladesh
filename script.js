let query = document.getElementById("query");

function myFunc() {
    let search = "https://www.google.com/search?q=" + query.value;
    window.open(search, '_self');
}

let body = document.getElementsByTagName("body")[0];

function myFunction() {
    body.style.backgroundColor = '#' + Math.floor(Math.random()*16777216).toString(16);
}

let sound = document.getElementById("myAudio");
let pic = document.querySelector("#google-pic");
function playAudio() {
    sound.play();
    pic.classList.add("active");
}


