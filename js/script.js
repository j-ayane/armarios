function alterarEstado(id, status, btnId){
    const armario = document.getElementById(id)
    const livre = "url(imgs/armario-livre.png)"
    const ocupado = "url(/imgs/armario-ocupado.png)"
    const manut = "url(imgs/armario-manutencao.png)"

    if(status == "livre") {
        status = "ocupado"
        document.getElementById(btnId).value = status
        armario.style.background = ocupado
    }
    else if(status == "ocupado") {
        status = "manutencao"
        document.getElementById(btnId).value = status
        armario.style.background = manut
    }
    else {
        status = "livre"
        document.getElementById(btnId).value = status
        armario.style.background = livre
    }
}
