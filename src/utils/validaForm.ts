const confirmaEmail: HTMLInputElement = document.querySelector('#confirmaEmail')!
const confirmaSenha: HTMLInputElement = document.querySelector('#confirmaSenha')!
const senha: HTMLInputElement = document.querySelector('#senha')!
const email: HTMLInputElement = document.querySelector('#email')!




export function VerificaSeCampoEmailEhIgual() {
    const errorEmail: HTMLInputElement = document.querySelector('#errorEmail')!
    
    if(confirmaEmail.value !== email.value ) {
        errorEmail.style.display = 'block'
        
    } else if (confirmaEmail.value === '' || confirmaEmail.value === email.value ) {
        errorEmail.style.display = 'none'
    }

    
    
    
}

export function VerificaSeCampoSenhaEhIgual() {
    const errorSenha: HTMLElement = document.querySelector('#errorSenha')!

    if(confirmaSenha.value !== senha.value ) {
        errorSenha.style.display = 'block'

    } else if (confirmaSenha.value === '' || confirmaSenha.value === senha.value ) {
        errorSenha.style.display = 'none'
    }
    
    
}