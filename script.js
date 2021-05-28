let btnCalculo = document.getElementById("btnCalculo")
    
function calculoIMC(){
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let resultado = document.getElementById("resultado").value
    
    if(altura !=="" && pesso!==""){
        let imc = (peso/(altura * altura)).toFixed(2)

        resultado.textContent = `Seu IMC é ${imc}`
    }else{
        resultado.textContent = "preencha os campos"
    }
}

btnCalculo.addEventListener("click",calculoIMC)