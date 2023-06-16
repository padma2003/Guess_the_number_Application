var s="";
var c=1;
const random=Math.floor(Math.random() *100);
document.getElementById("ch").onclick = function(){
    var a=parseInt(document.getElementById("chk").value);
    if(a>random){
            c=c+1;
            s="Try using a lesser number";
            document.getElementById("check").textContent = s;
    }
    else if(a<random){
            c=c+1;
            s="Try using a greater number";
            document.getElementById("check").textContent = s;
    }
    else if(a==random){
        s= "Congratulations!!! You Guessed it correctly in "+c+" tries";
        document.getElementById("check").textContent = s;
        }
    }