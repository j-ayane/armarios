function b101() {
    var b101 = document.getElementById('b101')
    b101.innerHTML = '<form><select id="estado" name="estd"><option value="livre">Livre</option><option value="ocupado">Ocupado</option><option value="manut">Em Manutenção</option></select> </form><button type="button" onclick="alterar(document.getElementById(estado).input.value)">Ok</button>'
}

function alterar(ipt) {
    switch (ipt) {
        case "Ocupado":
            b101.style.cssText = 'background-image: url(imgs/armario-ocupado.png)';
            break;
}
}
