console.log("BELAJAR JSON")

let peserta = {
    nama: "Dea",
    email: "dea@gmail.com",
    hobby: ["memasak", "listening"],
    bekerja: true,
    sallary: 6000000
}

// console.log(peserta)
let json = JSON.stringify(peserta) // mengubah object menjadi json
console.log(json)

//#################################
// JSON.parse() 
// JSON dikonversi menjadi object
//#################################

// SHOPEE => API => BRI 
// axios

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
	if (xhr.readyState === 4 && xhr.status === 200) {
		// let data = JSON.parse(this.responseText)
        let data = xhr.responseText;
        let obj = JSON.parse(data); // konversi json menjadi objek

		console.log(obj)
        let p = document.getElementById('json')
        p.innerHTML = obj
	}
}

xhr.open('GET', 'data.json', true);
xhr.send();


axios({
    method: "get",
    url: "data.json"
}).then( function (hasil) {
    console.log(hasil)
})