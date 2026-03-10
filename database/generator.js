const fs = require("fs")

const huruf="abcdefghijklmnopqrstuvwxyz"

let words=new Set()

function randomWord(){

let panjang = Math.floor(Math.random()*6)+4

let kata=""

for(let i=0;i<panjang;i++){

kata += huruf[Math.floor(Math.random()*huruf.length)]

}

return kata

}

while(words.size < 500000){

words.add(randomWord())

}

let output = "window.KAMUS="+JSON.stringify([...words])

fs.writeFileSync("../js/database.js",output)

console.log("Database 500k selesai")