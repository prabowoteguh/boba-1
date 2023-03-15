// kita adalah CEO/pemilik sebuah perusahaan transportasi (Trans)
// kita mempunyai 20 armada 
// kita mau menampilkan status armada tersebut = beroperasi / sedang berjalan

let noArmada = 1
let jumlahArmada = 20

for(noArmada; noArmada <= jumlahArmada; noArmada++) {
    if (noArmada > 15) {
        if(noArmada == 17 || noArmada == 18) {
            console.log("ARMADA " + noArmada + " SEDANG LEMBUR")
        } else {
            console.log("ARMADA " + noArmada + " SEDANG MAINTENANCE")
        }
    } else {
        console.log("ARMADA " + noArmada + " SEDANG BEROPERASI")
    }
}

//ARRAY ?
//LEMARI => uang, baju, etc
// int, string, boolean, obj, array

let array = [
    "januar", 
    "faqih", 
    "hadi nizar", 
    "beby", 
    "teguh", 
    "hani", 
    "restu"
];

for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}

console.log(array[7])

//INFINITE LOOP / LOOP FOREVER
let isTrue = true
while(isTrue) {
    console.log("Halo")
    isTrue = confirm("apakah lanjut?")
}



let hari = ["senin", "selasa", "rabu"]
let employee = ["teguh", "agung", "julia"]
let angka = [123, 17, 12, 2022]
let myArr = ["teguh", 2022, true]

const myFunc = function() {
    console.log("return function")
}
let myArr2 = ["teguh", 2022, true, myFunc]
let myArr3 = ["teguh", 2022, true, myFunc, [1,2,3,4]]
let binatang = ["beruang", "panda", "kelinci", "kudanil", "musang", "pinguin"]

console.log( myArr3[4][2] )























