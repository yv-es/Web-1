adiciona = () =>{
    if(!verificaVazio())
        return;
    const nome = document.createElement("input");
    const telefone = document.createElement("input");
    const div = document.createElement("div");
    const labelNome = document.createElement("label");
    const labelTelefone = document.createElement("label");
    const botao = document.createElement("button");

    botao.className = "botaoX";
    botao.innerHTML = "&#9932;";
    botao.onclick = () => deleta(botao);
    labelNome.innerText = " Nome: ";
    labelTelefone.innerText = " Telefone: "; 
    div.className = "div02";
    nome.type = "text";
    telefone.type = "tel";
    nome.style.display = "inline-block";
    telefone.style.display = "inline-block";

    div.appendChild(labelNome);
    div.appendChild(nome);
    div.appendChild(labelTelefone);
    div.appendChild(telefone);
    div.appendChild(botao);
    document.getElementsByTagName("span").item(0).appendChild(div);
}

deleta = (elemento) =>{
    document.getElementsByTagName("span")[0].removeChild(elemento.parentElement);
}

verificaVazio = () =>{
    const divs = document.getElementById("lista-divs").children;
    for(const i of divs){
        for(const j of i.children){
            if(j.tagName === "INPUT" && j.value === ""){
                alert("Não pode adicionar com ao menos um campo vazio")
                return false;
            }
        }
    }
    return true;
}