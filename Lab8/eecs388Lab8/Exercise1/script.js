function load(){
    document.getElementById("p1").value = ""
    document.getElementById("p2").value = "" 
}

function validator(){
    var password = document.getElementById("p1").value;
    if(password.length <8){
        alert("Please make password at least 8 charaters!");
        load();
    }
    else{
        var password2 = document.getElementById("p2").value
        if(password == password2){
            alert("Validated!!!!!!!");
        }
        else{
            alert("passwords don't match!");
            load();
        }
    }
}