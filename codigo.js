// hacemos una validación complicada al pedo, pero solo para usar regular expressions
// La alternativa era usar una condición radio >= 0 && radio < 100
const validarRadio = (radio) => {
    let validRegExp = /^([1-9]\d*(\.\d*[1-9][0-9])?)|(0\.\d*[1-9][0-9])|(0\.\d*[1-9])$/
    if (validRegExp.test(radio)) {
        if (radio < 100) {
            return true
        } else {
            alert("El radio ingresado no es valido porque es mayor a 100 y supera el valor de cálculo")
            return false
        }
    } else {
        alert("El radio ingresado no es valido porque es un número negativo")
        return false
    }
}

// Usando la librería Math
const calcularAreaCircunferencia = (radioRecibido) => {
    let radio = parseInt(radioRecibido)
    if (validarRadio(radio)) {
        let area = Math.PI * Math.pow(radio, 2)
        document.getElementById('resultado').innerHTML = `El área de la circunferencia es: <span><b>${area}</b></span>`
    }
}


/*
Se podría haber calculado el área de la circunferencia usando la siguiente fórmula:
const pi = 3.14159265358979323846
let area = pi * radio ** 2
alert(`El area de la circunferencia es: ${area}`)
*/
