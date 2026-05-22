validaTexto = () => {
    if (document.getElementById("texto").value === "")
        alert("Campo em branco");
}

validaCPF = () => {
    let tamCPF = document.getElementById("cpf").value.length;
    if (tamCPF != 11)
        alert("CPF inválido");
}

contaLetras = () => {
    const tamanhoString = document.getElementById("texto1").value.length;
    document.getElementById("resultado").innerText = tamanhoString;
}


quebraString = () => {
    texto = document.getElementById("texto2").value.split(' ');
    if (texto.length < 2) alert("Texto precisa ter pelo menos 2 palavras")
    else {
        for (let i = 0; i < texto.length; i++) {
            const celula = document.createElement("input");
            celula.type = "text";
            celula.style.display = "inline-block";
            celula.value = texto[i];
            celula.disabled = true;
            document.getElementById("div01").appendChild(celula);
        }
    }
}

validaForm = () =>{
    let nome = document.forms["form"]["nome"].value;
    let nomeTrim = nome.trim()

    let anoAtual = new Date().getFullYear();
    let ano = document.forms["form"]["dataNascimento"].value;
    ano = new Date(ano).getFullYear();

    let qntFilhos = parseInt(document.forms["form"]["qntFilhos"].value);

    if(nome === "" || nome.length > 40 || nomeTrim === ""){
        alert("Nome inválido");
        return false;
    }    
    // alert(ano);
    if(ano < 1910 || ano > anoAtual || isNaN(ano)){
        alert("Data inválida");
        return false;
    }    

    if(qntFilhos < 1 || qntFilhos > 99){
        alert("Quantidade de filhos inválida");
        return false;
    }
    
}