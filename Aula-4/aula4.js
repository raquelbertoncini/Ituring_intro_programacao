let pessoaA = {"nome": "Raquel", "idade": 40, "temIngresso": true};
let pessoaB = {"nome": "Maria", "idade": 8, "temIngresso": false};
let pessoaC = {"nome": "Ana", "idade": 18, "temIngresso": false};

function podeEntrar (idade, ingresso) {
    if (idade >= 18 && ingresso == true) {
        console.log('Pode entrar')
    } else {
        console.log('Não pode entrar')
    }
}
podeEntrar(pessoaA.idade, pessoaA.temIngresso)
podeEntrar(pessoaB.idade, pessoaB.temIngresso)
podeEntrar(pessoaC.idade, pessoaC.temIngresso)
podeEntrar(15, true)

