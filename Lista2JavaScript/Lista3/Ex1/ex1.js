const matriz = [1, 2, 3];
const pessoas = [{nome: "João", idade: 50}, {nome: "Ana", idade: 23}];

insereMatriz = () => {
    matriz.push(parseInt(document.getElementById("campo").value));
    document.getElementById("paragrafo").innerText = `Matriz: ${matriz}`;
    document.getElementById("campo").value = "";
}

insereObjeto = () => {
    let nomeDigitado = document.getElementById("nome").value;
    let idadeDigitada = document.getElementById("idade").value;
    pessoas.push({nome: nomeDigitado, idade: idadeDigitada});
    document.getElementById("paragrafo1").innerHTML = `Tamanho do objeto: ${pessoas.length}`
}