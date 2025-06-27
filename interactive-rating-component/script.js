let rating =  {
    nota: [document.querySelector('#Rating1'), document.querySelector('#Rating2'), document.querySelector('#Rating3'), document.querySelector('#Rating4'), document.querySelector('#Rating5')],
    estado: [false, false, false, false, false] 
}
const submit = document.querySelector('#enviar')
let section1 = document.querySelector('#ratingStart')
let section2 = document.querySelector('#Report')
let notareport = document.querySelector('#grade')
rating.nota.forEach((atual, indice) => {
    atual.addEventListener('click', () => {
        if(!rating.estado[indice]){
            atual.style = 'background-color: white; color: var(--cor5);'
            if (rating.estado.includes(true)){
                rating.nota[rating.estado.indexOf(true)].style = ''
                rating.estado[rating.estado.indexOf(true)] = false
            }
            rating.estado[indice] = true
        }
    })
})
submit.addEventListener('click', () => {
    if (rating.estado.includes(true)){
        let nota = rating.nota[rating.estado.indexOf(true)].innerHTML
        section1.style = 'display: none'
        section2.style = 'display: flex'
        notareport.innerHTML = `You selected ${nota} out of 5`
    }
    
})
