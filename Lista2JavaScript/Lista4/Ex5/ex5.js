interacaoMouse = (elemento, cor) => elemento.style.backgroundColor = cor;

//mudaCor = (elemento) => (elemento.style.backgroundColor === "blue") ? elemento.style.backgroundColor = "gray" : elemento.style.backgroundColor = "blue";
mudaCor = (elemento) => (elemento.style.backgroundColor = (elemento.style.backgroundColor === "blue" ? "gray" : "blue"))