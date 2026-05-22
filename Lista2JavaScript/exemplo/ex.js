clickei = (botao) => {
    const botoes = document.getElementById("botoes").children;
    for (const i of botoes) {
        if (!i.classList.contains('botao-nao-selecionado'))
            i.classList.add("botao-nao-selecionado");

        if (i.classList.contains('botao-selecionado'))
            i.classList.remove('botao-selecionado');
    }
    botao.classList.remove("botao-nao-selecionado")
    botao.classList.add("botao-selecionado")

    const conteudos = document.getElementById("conteudos").children;
    const id = botao.id.split("-")[1];
    for (const i of conteudos) {
        if (!i.classList.contains('conteudo-nao-selecionado'))
            i.classList.add("conteudo-nao-selecionado");
        if (i.classList.contains("conteudo-selecionado"))
            i.classList.remove("conteudo-selecionado");
        const idComparado = i.id.split("-")[1];
        if (id === idComparado) {
            i.classList.add("conteudo-selecionado");
            i.classList.remove("conteudo-nao-selecionado")
        }
    }
}


removeLinha = (botao) => {
    document.getElementById("tarefas").removeChild(botao.parentElement);
}

insereTarefa = () => {
    if(document.getElementById("inserir-tarefa").value === "")
        return;

    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const botao = document.createElement("button");
    input.type = "checkbox";
    input.name = "tarefa";
    label.for = "tarefa";
    label.innerText = document.getElementById("inserir-tarefa").value;
    botao.className = "remover botao-verde";
    botao.onclick = () => { removeLinha(botao) };
    botao.innerText = "remover";
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(botao);
    document.getElementById("tarefas").appendChild(div);
    document.getElementById("inserir-tarefa").value = "";
}

excluirTarefasConcluidas = () => {
    const tarefasRemover = [];
    const deletar = confirm("Deseja realmente deletar?");
    if(!deletar)
        return;
    const tarefas = document.getElementById("tarefas").children;
    for (const i of tarefas) {
        for (const j of i.children) {
            if (j.tagName === "INPUT" && j.checked) {
                tarefasRemover.push(j);
                break;
            }
        }
    }
    tarefasRemover.forEach(i => removeLinha(i));
}