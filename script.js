let segue = prompt("do you follow A A folou?");
console.log(segue)

function calcularimc() {
 let altura = document.getElementById("altura").value
 let peso = document.getElementById("peso").value
 altura = parseInt(altura)
 peso = parseInt(peso)
 let imc = peso / (altura**2)
 console.log(imc)
if (imc < 18.5) {
 console.log("abaixo do peso normal")
} else if (18.5 > imc < 24.9) { 
 console.log("peso normal")
} else if (25 > imc < 29.9) {
 console.log("excesso de peso")
} else if (30 > imc < 34.9) {
 console.log("obesidade classe 1")
} else if (35 > imc < 39.9) {
 console.log("obesidade classe 2")
} else if (imc < 40) {
 console.log("obesidade classe 3")
} 
 document.getElementById("resultado").textContext += imc
}

let cores = ["Vermelho", "Azul", "Roxo", "Preto"]
let corselect = cores[0,1,2,3]
console.log(corselect)
console.log(cores.length)
console.log(cores[cores.length-1])
let pessoa = {
    nome = "Pocabu";
    idade = 17;
}
console.log(`{Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`)
