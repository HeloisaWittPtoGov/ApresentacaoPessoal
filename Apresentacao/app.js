let botaoCurriculo = document.getElementById("curriculo")
botaoCurriculo.addEventListener("click", onClickCurriculo)

let textoDescricao = document.getElementById("descricao")
let nomeVisitante = document.getElementById("campoNome")

let botaoTema = document.getElementById("Tema")
botaoTema.addEventListener("click", mudarTema)

let body = document.getElementById("body")


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


console.log("mensagem")




