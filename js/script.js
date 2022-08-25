const input = document.querySelector('.login-input')
const button = document.querySelector('.login-button')
const form = document.querySelector('.login-form')

const validaInput = (event) => {
    if(event.target.value.length > 3) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

const enviarSubmit = (event) => {
    event.preventDefault()  //previne o envio do formulario

    localStorage.setItem('player', input.value)
    window.location = 'pages/game.html'   //Manda para outra pagina html
}

input.addEventListener('input', validaInput)
form.addEventListener('submit', enviarSubmit)

