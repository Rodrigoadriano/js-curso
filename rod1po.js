let date = new Date()
let hora = date.getHours()
let min = date.getMinutes()

let hr = document.getElementById('hora')
hr.innerText = `${hora}:${min}`
