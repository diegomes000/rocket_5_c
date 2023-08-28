import { modal } from "./modal.js"
import { AlertError } from "./alert.js"
import { IMC, notNumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()
// 3 maneiras para function

//form.onsubmit = () => {}

//form.onsubmit = handleSubmit
//function handleSubmit = () {}

form.onsubmit = function(event) {
    
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if (showAlertError) {
        AlertError.open()
        return;
    }
    
    AlertError.close()

    const result = IMC(weight, height)

    const message = `Your IMC is ${result}`
    modal.message.innerText = message
    modal.open() 
}
