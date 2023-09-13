const leia = require('prompt-sync')();

const codigo = ["COD01","COD02", "COD03", "COD04","COD05"];
const servico = ["Segurança para transtornados mentais","Programas de Educação aos transtornados mentais","Monitoramento da saude mental do transtornado mental", "Pesquisas sobre transtorno mental","Tratamente para transtornados mentais"];
const valorUnitarioDoacao = [15, 45, 55, 75, 125, 250, 385, 1555, 7555, 15000];
const movimento = ["0", "0", "0", "0", "0"];
let index = 0;
let total = 0;

function finalizar(){
    console.log("Carrinho final:");
    for(i = 0; i < movimento.length; i++){
        index = codigo.indexOf(movimento[i]);
        console.log(codigo[index] + "\t" + servico[index] + "\t" + valorUnitarioDoacao[index]);
        total += valorUnitarioDoacao[index];
    }
    console.log(`Total: ${total}`);
    let quer = leia("Gostaria de doar(D) ou Negar(N)? ");
    if(quer == "F"){
        let quer = leia("Valor dado! Gostaria de proceder?(P/R) ");
        if(quer == "P"){
            fazerDoacoes();
        } else {
            console.log("Até em breve!")
        }
    } else {
        console.log("Doação Regredida. Até a proxima!")
    }
}

function fazerDoacoes(){
    let i = 0;
    while(i < movimento.length){
        console.log(`Doação ${i + 1}`);
        for(j = 0; j < codigo.length; j++){
            console.log(codigo[j] + "\t" + servico[j] + "\t" + valorUnitarioDoacao[j]);
        }
        let doou = leia("Qual é o valor desejado para doar? ");
        if(movimento.includes(doou)){
            console.log("Você já tinha escolhido essa opção, tenta de novo");
        } else {
            movimento[i] = doou;
            console.log(movimento)
            i++;

            if(i < movimento.length){
                let quer = leia("Gostaria de proceder?(P/R) ");
                if(quer == "R"){
                    finalizar();
                    break;
                }
            } else {
                finalizar();
                break;
            }
        }
    }
}

let quer = leia("Gostaria de fazer doações?(S/N) ");
if(quer == "S"){
    fazerDoacoes();
} else {
    console.log("Até breve!")
}