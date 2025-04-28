function calcularRank(vitorias , derrotas) { 
let saldo = vitoria - derrota;
let nivel = "";
}
if (vitoria < 10) {
    nivel = Ferro
} else if (vitoria <= 11 && 20 ) {
    nive = bronze 
} else if (vitoria <= 21 && 50 ){
    nivel = prata 
} else if (vitoria <= 51 && 80){
    nivel  = ouro 
} else if (vitoria <= 81 && 90){
    nivel = diamante
} else if (vitoria <= 91 && 100){
    nivel = lendario
} else if (vitoria >= 101 ){
    nivel = lendario 
}
 return `O Herói tem de saldo de **${saldo}** está no nível de **${nivel}**`;


 // exemplo de como usar 
 let vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
let derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));

let resultado = calcularRank(vitorias, derrotas); 

