let agora = new Date() // pegar data e hora do sistema

let hora = agora.getHours() // pega o númeral da hora

console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}