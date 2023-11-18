function tabuada() {
    let num = document.getElementById('txtn')
    let t = Number(num.value)
    let res = document.getElementById('res')

    if (num.value.length == 0) { // Validador da tabuada, não aceita vazio
        alert('Não consigo gerar uma tabuada sem número')
    } else {
        res.innerHTML = `Tabuada de ${t} é: <br><br>`
        for (let c = 1; c <= 10; c++) {
            res.innerHTML += `${t} x ${c} = ${t*c} <br>`
        }
    }
}