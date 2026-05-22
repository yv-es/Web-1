contaLetras = (elemento) => {
    const tamanho = elemento.value.length;
    const p = elemento.nextElementSibling;
    p.innerText = `${tamanho} caracter${tamanho > 1 ? "es!!!" : ""}`
    tamanho + " caracter" + (tamanho > 1 ? "es" : "");
}

mudaCor = (elemento, cor) => elemento.style.borderColor = cor;