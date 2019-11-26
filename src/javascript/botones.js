//      home      //

let buttonsHome = document.querySelectorAll(".button-home");

for(let i=0; i< buttonsHome.length ; i++){
    buttonsHome[i].addEventListener("click",function() {
    
        switch(i){
            case 0:
                window.location.href = "login.html";
            break;

            case 1:
                window.location.href = "registro.html";
            break;
        }

    });
}

//      login      //

let buttonsLogin = document.querySelectorAll(".button-login");

for(let i=0; i< buttonsLogin.length ; i++){
    buttonsLogin[i].addEventListener("click",function() {
    
        switch(i){
            case 0:
                window.location.href = "registro.html";
            break;

            case 1:
                
            break;
        }

    });
}

//      registro      //

let buttonsRegistro = document.querySelectorAll(".button-registro");

for(let i=0; i< buttonsRegistro.length ; i++){
    buttonsRegistro[i].addEventListener("click",function() {
    
        switch(i){
            case 0:
                window.location.href = "login.html";
            break;

            case 1:
                window.location.href = "planes.html";
            break;
        }

    });
}