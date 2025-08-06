let botaoCurriculo = document.getElementById("curriculo")
botaoCurriculo.addEventListener("click", onClickCurriculo)

let textoDescricao = document.getElementById("descricao")
let nomeVisitante = document.getElementById("campoNome")

let botaoTema = document.getElementById("Tema")
botaoTema.addEventListener("click", mudarTema)

let body = document.getElementById("body")

let botaoGravar = document.getElementById("gravar")
botaoGravar.addEventListener("click", AddeExibirHobbies)

let campoHobbies = document.getElementById("campoHobbies")
let exibirHobbies = document.getElementById("exibiListaHobbies")
let arrayHobbies = []
let auxDescricao = textoDescricao.innerHTML;

let botaoLimpar = document.getElementById("limpar")
botaoLimpar.addEventListener("click", limpaLista)

let botaoVoltar = document.getElementById("voltar")
botaoVoltar.addEventListener("click",voltarInfosPrincipais)


function onClickCurriculo(){
    let valorCampoNome = nomeVisitante.value  
    if(valorCampoNome != ""){
        textoDescricao.innerHTML = valorCampoNome + ", Seguem as informações complementares!" 
    }
    else{
       textoDescricao.innerHTML = "Informe seu Nome!" 
    }

    nomeVisitante.value = "";
    botaoVoltar.style.display = "block"
}

function mudarTema(){
    if(body.classList.contains("dark")){
        body.classList.remove("dark"); 
    }
    else{
        body.classList.add("dark")
    }
}

function AddeExibirHobbies(){
    if(campoHobbies.value != ""){
        arrayHobbies.push(campoHobbies.value)
        campoHobbies.value = ""
        botaoLimpar.style.display = "block"
        atualizaHobbies()
    } else{
        exibirHobbies.innerHTML = "Informe um Hobbie!"
    }
}

function atualizaHobbies(){
    exibirHobbies.innerHTML = ""
    for( let i = 0; i < arrayHobbies.length;i ++){
        const item = document.createElement("li")
        item.textContent = arrayHobbies[i]
        exibirHobbies.appendChild(item)
    }
}

function limpaLista(){
    if(arrayHobbies.length != 0){
     arrayHobbies.length = 0;
     exibirHobbies.innerHTML = "Lista limpa!"
    }
    botaoLimpar.style.display = "none"
}

function voltarInfosPrincipais(){
    textoDescricao.innerHTML = auxDescricao;
    botaoVoltar.style.display = "none";
}
console.log("mensagem")




