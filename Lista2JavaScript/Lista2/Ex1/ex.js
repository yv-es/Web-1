let nome = prompt("Digite o seu nome:");
let dia = prompt("Digite o dia do seu nascimento:");
let mes = prompt("Digite o mêS do seu nascimento:");
let ano = prompt("Digite o ano do seu nascimento:");
const d = new Date(ano, mes, dia);
const diaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

document.getElementById("texto").innerHTML = "Meu nome é " + nome + " e nasci em " + dia + "/" + mes + "/" + ano + "</br>" + "Tenho " + Math.round(d.getTime()/(1000*3600*24)) + " dias de vida" +  "</br>" + "Nasci na " + diaSemana[d.getDay()];