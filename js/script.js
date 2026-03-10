let database = []
let index = {}

window.onload = function(){

database = window.KAMUS

// buat index 2 huruf depan
database.forEach(function(kata){

let key = kata.substring(0,2)

if(!index[key]){
index[key] = []
}

index[key].push(kata)

})

}

function cariKata(){

let input = document.getElementById("kataInput").value.toLowerCase()

if(input.length < 2){

document.getElementById("hasil").innerHTML="Minimal 2 huruf"
return

}

let akhir = input.slice(-2)

let hasil = index[akhir] || []

hasil = hasil.slice(0,30)

if(hasil.length === 0){

document.getElementById("hasil").innerHTML="Tidak ditemukan"

}else{

document.getElementById("hasil").innerHTML =
"<b>Hasil:</b><br>"+hasil.join("<br>")

}

}
