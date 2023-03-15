//masih case yang sama ketika kita menjadi pemilik trans Jakarta
//membuat fungsi untuk tap in dan tap out
//dengan 2 parameter (namaPenumpang, arrayPenumpang)

//======= RULES ========
//1. jika TJ kosong, maka penumpang akan duduk di kursi pertama
// 2. penumpang berikutnya duduk di kursi selanjutnya secara berurutan
// 3. jika ada kursi kosong karena penumpang turun, maka penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
// 4. asumsi kursi tidak akan pernah penuh dan akan bertambah terus jika ada pennumpang naik
// 5. nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika ada penumpang turun

const transJakarta = (penumpang, arr) => {
    // jika TJ kosong
    //     tambah penumpang diawal array
    //     kembalikan isi array dan keluar function
    // else
    //     telusuri seluruh kursi dari awal
    //         jika ada kursi kosong
    //             tambah penumpang di kursi tersebut
    //             kembalikan isi array dan keluar function
    //         jika sudah ada nama yang sama
    //             tampilkan pesan kesalahan nya
    //             kembalikan isi array dan keluar function
    //         jika seluruh kursi terisi
    //             tambah penumpang diakhir array
    //             kembalikan isi array dan keluar function
}


const penumpangTJ = []
const employee = ["teguh", "agung", "ahmad", "riyadi", "julia", "dhaffa"];

employee.forEach(e => {
    transJakarta(e, penumpangTJ)
});