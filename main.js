/*function backImage() {
    var jumbo = document.getElementById("jumbo");
    var mainNav = document.getElementById("mainNav");
    var subHeight = mainNav.offsetHeight;
    jumbo.style.height = "calc(100vh - " + subHeight + "px)";
}*/

setTimeout(function(){document.getElementById("jumbo").style.backgroundImage = "url(blurred1.jpg)";},900);
setTimeout(function(){document.getElementById("delayed").style.visibility = "visible";},1500);

function changeMode() {
    var main = document.getElementById("MAINCONTAINER");
    var sub = document.getElementById("SUBCONTAINER");
    var mode = document.getElementById("MODE");
    var sep1 = document.getElementById("SEP1");
    var sep2 = document.getElementById("SEP2");
    var sep3 = document.getElementById("SEP3");
    var sep4 = document.getElementById("SEP4");

    if (main.className == "container-fluid bg-white") {
        main.className = "container-fluid bg-dark";
        sub.className = "my-0 bg-dark text-white";
        mode.style.color = "white";
        sep1.className = "bg-white";
        sep2.className = "bg-white";
        sep3.className = "bg-white";
        sep4.className = "bg-white";
    }
    else {
        main.className = "container-fluid bg-white";
        sub.className = "my-0 bg-white text-black";
        mode.style.color = "black";
        sep1.className = "bg-dark";
        sep2.className = "bg-dark";
        sep3.className = "bg-dark";
        sep4.className = "bg-dark";
    }
}

