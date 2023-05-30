
function ValidarNombre(nombre) {
    //Validar nombre con expreciones regulares
    var nom = nombre
    const regexp = new RegExp(/^([A-Za-z])\w+$/)
    var valida = regexp.test(String(nom))

    return valida;

}

function validaVacio(valor) {
    valor = valor.replace("&nbsp;", "");
    valor = valor == undefined ? "" : valor;
    if (!valor || 0 === valor.trim().length) {
        return true;
    }
    else {
        return false;
    }
}



