let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

console.log(produtoA)
console.log(produtoB)
console.log(produtoC)

if (produtoA.internacional == true) {
    let A1 = produtoA.valor * 1.2
    console.log(produtoA.nome, "internacional")
    console.log("R$",A1);
} else {
    A1 = produtoA.valor * 1.12
    console.log(produtoA, "nacional")
    console.log("R$",A1);
}
if (produtoB.internacional == true) {
    let B1 = produtoB.valor * 1.2
    console.log(produtoB.nome, "internacional")
    console.log("R$", B1);
} else {
    B1 = produtoB.valor * 1.12
    console.log(produtoB, "nacional")
    console.log("R$", B1);
}
if (produtoC.internacional == true) {
    let C1 = produtoC.valor * 1.2
    console.log(produtoC.nome, "internacinal")
    console.log("R$", C1);
} else {
    C1 = produtoC.valor * 1.12
    console.log(produtoC.nome, "nacional")
    console.log("R$", C1);
}