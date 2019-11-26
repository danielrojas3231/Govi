//      header      //

let buttonsHeader = document.querySelectorAll(".button-header");

for(let i=0; i< buttonsHeader.length ; i++){
    buttonsHeader[i].addEventListener("click",function() {
    
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

//      planes      //

let buttonsPlan = document.querySelectorAll(".button-plan");

for(let i=0; i< buttonsPlan.length ; i++){
    buttonsPlan[i].addEventListener("click",function() {

        localStorage.setItem("plan", i);
        if(i==0){
            window.location.href = "descubrir.html";
        }else{
            window.location.href = "pago.html";
        }
    });
}

//      pago      //

let buttonsPago = document.querySelectorAll(".button-pago");

for(let i=0; i< buttonsPago.length ; i++){
    buttonsPago[i].addEventListener("click",function() {
    
        switch(i){
            case 0:
                window.location.href = "tarjetaCredito.html";
            break;

            case 1:
                window.location.href = "codigo.html";
            break;
        }

    });
}