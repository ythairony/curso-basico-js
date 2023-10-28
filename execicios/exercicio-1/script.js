
function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')

    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#C8DBF1'
        img.style.backgroundImage = 'url(fotos/manha.jpg)';
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#EAE3D9'
        img.style.backgroundImage = 'url(fotos/tarde.jpg)';
    } else {
        document.body.style.background = '#33340B'
        img.style.backgroundImage = 'url(fotos/noite.jpg)';
    }
}