console.log("sukses")

const btnHapus = document.getElementById('btn_hapus');

const hapus = () => {
    const lastList = document.querySelector('section#b ol li:last-child');
    lastList.remove()
}

// btnHapus.onmouseenter = (function() {
//     btnHapus.style.backgroundColor = 'rgb(23, 82, 140)';
// })

// btnHapus.onmouseleave = function() {
//     btnHapus.style.backgroundColor = 'dodgerblue'
// }

// btnHapus.addEventListener('click', function() {
//     hapus()
// })

// btnHapus.addEventListener('mouseenter', function() {
//     btnHapus.classList.add('active')
// })

// btnHapus.addEventListener('mouseleave', function() {
//     btnHapus.classList.remove('active')
// })


const btnMode = document.getElementById('btn_mode')

btnMode.addEventListener('click', function() {
    let dark = btnMode.classList.contains('dark') // true / false

    console.log(dark)
    if(dark) {
        btnMode.innerHTML = "Dark"
        document.body.style.color = '#333'
        document.body.style.background = '#f0e406'
        btnMode.classList.remove('dark')
    } else {
        btnMode.classList.add('dark')
        btnMode.innerHTML = "Light"
        document.body.style.color = 'white'
        document.body.style.background = '#333'
    }    
})


// btnHapus.onclick = () => {
//     hapus()
// }

// btnHapus.onclick = () => {
//     const lastList = document.querySelector('section#b ol li:last-child');
//     lastList.style.background = 'red';
// }


btnHapus.addEventListener('click', () => {
    hapus()
})

btnHapus.addEventListener('click', () => {
    const lastList = document.querySelector('section#b ol li:last-child');
    lastList.style.background = 'red';
})


const btnTambah = document.getElementById('btn_tambah_list')
btnTambah.addEventListener('click', () => {
    let list = document.createElement('li')
    let text = document.createTextNode('List Baru')

    list.appendChild(text)
    const lastList = document.querySelector('section#b ol');
    lastList.appendChild(list)
})















