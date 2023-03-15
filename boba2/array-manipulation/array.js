console.log("Array Manipulation")

let employee = ["teguh", "agung", "julia"]

//1. Join ====== Menggabungkan value dari array
console.log(employee.join(" - "))

//2. Push ====== Menambahkan value di paling akhir index array
employee.push("dhaffa", "ikhsan")
console.log(employee.join(" - "))

//3. Pop ====== Menghapus value terakhir dari array
employee.pop()
console.log(employee.join(" - "))

//4. Unshift ===== Menambahkan di awal index array
employee.unshift("beby")
console.log(employee.join(" - "))

//5. Shift ===== Menghapus index pertama array
employee.shift("beby")
console.log(employee.join(" - "))

//6. splice ===== Menambahkan berdasarkan index array dan menghapus berdasarkan index array
// employee.splice(indexAwal, mauDihapusBerapa?, elemenBaru1, elemenBaru2, ...)
employee.splice(2, 0, "ahmad", "riyadi")
console.log(employee.join(" - "))

//7. slice ===== mengambil value dari index ke ?? sampai index ke ??
// arr.slice(indexKe?, sampai indexSebelumKe?)
let arr = ["teguh", "agung", "ahmad", "riyadi", "julia", "dhaffa"]
let arr2 = arr.slice(0,2)
console.log(arr2)

//8. forEach ====== looping untuk mengembalikan tiap-tiap element
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// arr.forEach(function (e) { //func expression
//     console.log(e)
// }); 

//9. map ====== looping untuk mengembalikan tiap-tiap element dan dijadikan array
let arrMap = arr.map(function (e) {
    return e * 2 
})
console.log(arrMap.join(" - "))

//10. sort ===== untuk mengurutkan element didalam array (ASC)
let angka = [1,7,6,3,4,5,9,20,10]
angka.sort() 
console.log(angka.join(" - "))  
angka.sort(function (a,b) {
    return a-b
})
console.log(angka.join(" - "))


//11. filter ===== untuk mencari data pada array dengan ketentuan khusus (mengembalikan array)
let filterAngka = angka.filter(e => e > 2)
console.log(filterAngka)

//12. find ===== untuk mencari 1 element dengan ketentuan khusus (mengembalikan hanya 1 nilai saja)
let findAngka = angka.find(e => e > 2)
console.log(findAngka)


//13. reduce ===== untuk melakukan sesuatu terhadap seluruh element array
angka.reduce((acc, curr) => {
    console.log("acc", acc)
    console.log("curr", curr)
    return acc + curr
})



