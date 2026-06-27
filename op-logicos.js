

let temIdadeMinima = true
let temTituloEleitor = false

let podeVotar = temIdadeMinima && temTituloEleitor
console.log('Pode Votar: ' + podeVotar)

let podeViajar = !podeVotar

console.log('Pode Viajar: ' + podeViajar)