let database = []
let index = {}

function loadDatabase(){

database = window.KAMUS

database.forEach(kata => {

let key = kata.substring(0,2)

if(!index[key]) index[key] = []

index[key].push(kata)

})

}

loadDatabase()

function cariKata(){

let kata = document.getElementById("kataInput").value.toLowerCase()

if(!kata) return

let akhir = kata.slice(-2)

let hasil = index[akhir] || []

hasil = hasil.slice(0,30)

if(hasil.length == 0){

document.getElementById("hasil").innerHTML="Tidak ditemukan"

}else{

document.getElementById("hasil").innerHTML="<b>Hasil:</b><br>"+hasil.join("<br>")

}

}