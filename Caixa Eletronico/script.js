function botao (numero){
    const display = document.querySelector("#display")
    display.value = display.value + numero
}


function limpar(){
    const display = document.querySelector("#display")
    display.value = ""
}

function cancelar(){
    caixaEletronico = "inicial"
    document.querySelector("#visor").innerText = "Bem Vindo ao Caixa Eletronico"
    mostraDepositado.innerHTML = ""
    mostraSaldo.innerHTML = ""
}

function apagar() {
    let input = document.getElementById('display');
    let texto = input.value;
    if (texto.length > 0) {
        texto = texto.substring(0, texto.length - 1);
        input.value = texto;
    }
}


let saldo = 500
let valorDepositado = 0
const mostraSaldo = document.querySelector("#saldo");
const mostraDepositado = document.querySelector("#conta");
let caixaEletronico = "inicial"

function deposita(){
    let display = parseInt(document.querySelector("#display").value);
    if (caixaEletronico === "deposito") {
        teste1(display);
    } else if (caixaEletronico === "saque") {
        teste2(display);
    }

}


function saque(){
    caixaEletronico = "saque"
    document.querySelector("#visor").innerText = "Qual o Valor do Saque"
    mostraDepositado.innerHTML = "Saldo na Conta R$" +valorDepositado
    document.querySelector("#display").value = "";
}

function deposito(){
    caixaEletronico = "deposito"
    document.querySelector("#visor").innerText = "Qual valor deseja depósitar"
    mostraSaldo.innerHTML = "Valor disponivel para Deposito R$" +saldo
    document.querySelector("#display").value = "";
}


function teste1(display){
    if(display < saldo){
    valorDepositado += display;
    saldo -= display;
    alert("Valor Depositado com Sucesso");
    mostraSaldo.innerHTML = "Valor disponível para Depósito R$" + saldo;
    mostraDepositado.innerHTML = "Saldo R$" + valorDepositado;
    document.querySelector("#display").value = "";
    }else{
        alert("Saldo Insuficiente")
        document.querySelector("#display").value = "";
    }
}

function teste2(display){
    if (display <= valorDepositado) {
        valorDepositado -= display;
        saldo += display;
        mostraSaldo.innerHTML = "Valor disponível para Depósito R$" + saldo;
        mostraDepositado.innerHTML = "Saldo R$" + valorDepositado;
        document.querySelector("#display").value = "";
        alert("Saque Realizado com Sucesso");
    } else {
        alert("Saldo insuficiente para Saque");
        document.querySelector("#display").value = "";
    }
}