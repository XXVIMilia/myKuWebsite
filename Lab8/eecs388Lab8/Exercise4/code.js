var keys = ["r1","g1","b1","r2","g2","b2","w"]

function load(){
    document.getElementById("r1").value = ""
    document.getElementById("g1").value = "" 
    document.getElementById("b1").value = ""
    document.getElementById("r2").value = ""
    document.getElementById("g2").value = "" 
    document.getElementById("b2").value = ""
    document.getElementById("w").value = ""

}

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
  }

function BoxShift(vals){
    var box = document.getElementById("boxToChange")
    box.style.borderWidth = vals[6] + "px";
    box.style.backgroundColor = rgb(vals[3],vals[4],vals[5]);
    box.style.borderColor = rgb(vals[0],vals[1],vals[2]);
}

function validator(){
    var vals = []
    for(var x = 0; x <7; x++){
        var temp = parseInt(document.getElementById(keys[x]).value);
        var pusher = document.getElementById(keys[x]).value;
        if(Number.isInteger(temp)){
            vals.push(pusher);
        }
        else{
            vals.push(1);
        }
        
    }
    BoxShift(vals);
}