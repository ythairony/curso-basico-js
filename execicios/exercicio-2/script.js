function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''

        const img = document.createElement('div') // Criando de uma div para inserir a imagem
        img.setAttribute('id', 'img') // Criando um ID pra ele que já esta no CSS configurado
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.style.backgroundImage = 'url(fotos/babyboy.jpg)';
            } else if (idade < 21) {
                img.style.backgroundImage = 'url(fotos/youngman.jpg)';
            } else if (idade < 50) {
                img.style.backgroundImage = 'url(fotos/adultman.jpg)';
            } else {
                img.style.backgroundImage = 'url(fotos/oldman.jpg)';
            }

        } else if (fsex[1].checked){
            genero = "mulher"

            if (idade >= 0 && idade < 10) {
                img.style.backgroundImage = 'url(fotos/babygirl.jpg)';
            } else if (idade < 21) {
                img.style.backgroundImage = 'url(fotos/youngwoman.jpg)';
            } else if (idade < 50) {
                img.style.backgroundImage = 'url(fotos/adultwoman.jpg)';
            } else {
                img.style.backgroundImage = 'url(fotos/oldwoman.jpg)';
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // Inclue a DIV depois do texto modificad

    }
}