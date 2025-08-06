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


function onClickCurriculo(){

let valorCampoNome = nomeVisitante.value    
textoDescricao.innerHTML = valorCampoNome + ", Seguem as informações complementares!" 
nomeVisitante.remove(campoNome);
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
    arrayHobbies.push(campoHobbies.value)
    campoHobbies.value = ""
    atualizaHobbies()
}

function atualizaHobbies(){
    exibirHobbies.innerHTML = ""
    for( let i = 0; i < arrayHobbies.length;i ++){
        const item = document.createElement("li")
        item.textContent = arrayHobbies[i]
        exibirHobbies.appendChild(item)
    }
}

console.log("mensagem")




