const button = document.getElementById("boton");
const button2 = document.getElementById("boton2");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");

button.addEventListener("click", function(){  
    var h1Var = this.textContent;
    debugger;
    if (h1.style.color === "") {
        h1.style.color = "blue";
        h1.innerHTML = "1º DAM LMD <br> Lucas Faura Martín";
    }else{
        h1.style.color = "";
        h1.innerHTML = "Lucas Faura Martín";
    }   
    
});

/*button2.addEventListener("click", function(){
    debugger;
    h1.style.color = "red";
    h1.textContent = "Lucas Faura Martín";
});*/

