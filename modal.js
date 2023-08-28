
export const modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.modal button.close'),

    open() {modal.wrapper.classList.add('open')},
    close() {modal.wrapper.classList.remove('open')}
}

//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalBtnClose = document.querySelector('.modal button.close')
//const modalMessage = document.querySelector('.modal .title span')

modal.btnClose.onclick = () => {
    modal.close() 
}

window.addEventListener('keydown', handleEscDown)

function handleEscDown(event) {
    if(event.key === 'Escape') {
        modal.close()
    }
}