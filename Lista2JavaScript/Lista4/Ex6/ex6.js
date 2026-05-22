criaQuadrado = () => {
    const d = document.createElement("div"); // criando uma div no html
    d.setAttribute("class", "quadrado"); // para essa div crio uma classe que se chama quadrado
    document.getElementById("quadrados").appendChild(d); // boto no final do id quadrados a div que acabei de criar
}