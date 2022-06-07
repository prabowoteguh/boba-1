
const btnClose = document.querySelectorAll('.close')
const cards = document.querySelectorAll('.card')
console.log(btnClose)

// for(let i = 0; i < btnClose.length; i++ ) {
//     btnClose[i].addEventListener('click', () => {
//         cards[i].remove()
//     })
// }



// btnClose.addEventListener('click', () => {
//     const card = document.querySelector('.card')
//     card.remove()
// })

for(let i = 0; i < btnClose.length; i++ ) {
    btnClose[i].addEventListener('click', () => {
        let curCard = btnClose[i].parentElement.parentElement;
        console.log(curCard)
        curCard.remove()
    })
}






