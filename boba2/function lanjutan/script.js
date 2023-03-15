
// function arg() {
//     return arguments;
// }

// let hasil = arg(10, 2, 20, "beby", true)
// console.log(hasil)



console.log("FUNCTION LANJUTAN")

//MENJUMLAHKAN 2 BUAH KUBUS
// let sisiA = 8;
// let sisiB = 3;

// let volumeA = sisiA * sisiA * sisiA;
// let volumeB = sisiB * sisiB * sisiB;

// let hasil = volumeA + volumeB;

// console.log(hasil)

function penjumlahanKubus(a, b) {
    let volumeA = a * a * a;
    let volumeB = b * b * b;

    let hasil = volumeA + volumeB;
    return hasil;
}

// console.log(penjumlahanKubus(8, 3))

// console.log(penjumlahanKubus(10, 5))

// function tambah(angka1, angka2, angka3) {
//     console.log(angka3)
//     return angka1 + angka2;
// }

//console.log( tambah(10, 5) )

function arg() {

    for(let i = 0; i <= arguments.length; i++){
        console.log(arguments[i]);
    } 
    
}

//arg(1, 10, 20, "beby", true)
//console.log( arg(1, 10, 20, "beby", true))


function tambah() {
    let hasil = 0;

    for(let i = 0; i < arguments.length; i++){
        hasil = hasil + arguments[i]
    } 

    return hasil;
}

console.log( tambah(5, 6, 7) )







