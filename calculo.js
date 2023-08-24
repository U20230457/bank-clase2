//capturar los textos

const deposito_texto = document.getElementById("depositoActual"),
    retiro_texto = document.getElementById("retiroActual"), 
    balance_texto = document.getElementById("balanceActual"),
    //capturar los input
    input_deposito = document.getElementById("depositoInput"),
    input_retiro = document.getElementById("retiroInput")
    //capturar botones
    btn_deposito = document.getElementById("calcularDeposito"),
    btn_retiro = document.getElementById("calcularRetiro")
;

//agregar evento

btn_deposito.addEventListener('click',(event)=>{
    console.log("hola")
    const valor_deposito = input_deposito.value

    const total_deposito = Number(deposito_texto.innerText) + Number(valor_deposito)

    const total_valance = Number(balance_texto.innerText)+Number(valor_deposito)

    deposito_texto.innerHTML=total_deposito
 
    valor_texto.innerHTML=total_valance

    input_deposito.value=""
})

btn_retiro.addEventListener('click',(event)=>{
    console.log("hola")
    const valor_retiro = input_deposito.value

    if(valor_retiro==0){
        alert("No tengo nada que retirar")
        return
    }

    if(Number(valor_retiro)>Number(balance_texto.innerText)){
        alert("No ay dinero suficiente")

        return
    }

    alert("Retiro exitoso")
})