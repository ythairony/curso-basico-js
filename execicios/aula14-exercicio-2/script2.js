function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let res = document.getElementById('res')
    
    if (num.value.length == 0) { // Validador da tabuada, não aceita vazio
        alert('Não consigo gerar uma tabuada sem número')
    } else {
        let t = Number(num.value)
        let c = 1 
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${t} x ${c} = ${t*c}`
            item.value = `tab${c}` // Isso seria problema em outras linguagens
            tab.appendChild(item)
            c++
        }
    }
}