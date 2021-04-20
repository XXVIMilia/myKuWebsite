var i = 0
var folder = "images/"

function load(){
    i = 0
    document.getElementById("myIMGId").src = folder + "0.jpg";
}


function forward(){
    i = (i + 1)%5
    var text = i.toString() + ".jpg";
    document.getElementById("myIMGId").src = folder + text;
}

function back(){
    i = Math.abs(i - 1)%5
    var text = i.toString() + ".jpg";
    document.getElementById("myIMGId").src = folder + text;
}