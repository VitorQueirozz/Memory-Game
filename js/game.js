const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

const personagens = [
    'arya',
    'bran',
    'cersei',
    'dany',
    'jaime',
    'jon',
    'rei',
    'robb',
    'sansa',
    'tyrion',
]

const creatElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = ''  //guardar a primeira carta
let secondCard = ''  //guardar a segunda carta

const checarEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if(disabledCards.length === 20) {
        clearInterval(this.loop)
        alert(`Parabéns ${spanPlayer.innerHTML
        }! Seu tempo foi de: ${timer.innerHTML} segundos.`)
        location.reload()
        confirm('Jogar de novo?')
    }
}

const checarCards = () => {
    const firstPersongaem = firstCard.getAttribute('data-personagem')
    const secondPersongaem = secondCard.getAttribute('data-personagem')

    if(firstPersongaem === secondPersongaem) {
        
        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')

        firstCard = ''
        secondCard  = ''

        checarEndGame()

    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')

            firstCard = ''
            secondCard  = ''

        }, 500)
    }
}

const revealCard = ({ target }) => {
    // console.log(target.parentNode)

    if(target.parentNode.className.includes('reveal-card')) {
        return
    }

    if(firstCard === '') {
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
    } else if(secondCard === '') {
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode
    }

    checarCards()
    
}   

const creatCard = (personagem) => {

    const card = creatElement('div', 'card')
    const front = creatElement('div', 'face front')
    const back = creatElement('div', 'face back')


    front.style.backgroundImage = `url('../imagem/${personagem}.jpg')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-personagem', personagem)  //pegar o nome dos personagens

    return card

}

const loadGame = () => {

    const duplicarPersonagem = [...personagens, ...personagens]

    const enbaralharArray = duplicarPersonagem.sort(() => Math.random() - 0.5)  //embralhar array

    enbaralharArray.forEach((personagem) => {
        
        const card = creatCard(personagem)
        grid.appendChild(card)
    })
}

const starTimer = () => {

    this.loop = setInterval(() => { 
        const tempoAtual = Number(timer.innerHTML)
        timer.innerHTML = tempoAtual + 1
    }, 1000)
}

window.onload = () => {  //

    const playerName = localStorage.getItem('player')

    spanPlayer.innerHTML = playerName
    starTimer()
    loadGame()
}
