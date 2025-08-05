let botaoCurriculo = document.getElementById("curriculo")
botaoCurriculo.addEventListener("click", onClickCurriculo)

let textoDescricao = document.getElementById("descricao")
let nomeVisitante = document.getElementById("campoNome")

function onClickCurriculo(){

let valorCampoNome = nomeVisitante.value    
textoDescricao.innerHTML = valorCampoNome + ", Seguem as informações complementares!"
nomeVisitante.remove(campoNome);
}


console.log("mensagem")




