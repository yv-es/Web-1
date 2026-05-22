mudaEstado = (elemento) =>{
    const selecionado = elemento.value;
    document.getElementById("cidades").style.display = selecionado === "escolha-estado" ? 
    "none" : "inline-block";
}