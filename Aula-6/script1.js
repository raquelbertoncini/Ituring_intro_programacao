
const calculoIMC = (peso, altura) => {
    let alturax2 = altura * altura
    let imc = peso / alturax2
    return imc
}
const resultadoIMC = (indiceIMC) => {
    if (indiceIMC >= 18.5 && indiceIMC < 25) {
        return "Normal"
    } else if (indiceIMC >= 25 && indiceIMC < 30) {
        return "Sobrepeso"
    } else if (indiceIMC >= 30 && indiceIMC < 40) {
        return "Obesidade"
    } else if (indiceIMC >= 40) {
        return "Obesidade grave"
    } else {
        return "Faixa não definida"
    }
}

const mostrarResultadoIMC = () => {
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)

    let imc = calculoIMC(peso, altura)
    document.getElementById("resultado").innerText = "O seu IMC é: " + imc.toFixed(2)

    let faixaIMC = resultadoIMC(imc)
    alert("Sua faixa de IMC é: " + faixaIMC);
}
