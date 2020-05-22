// Nur bei StackBlitz notwendig. Nicht löschen
import './style.css';



var kommentarbereich = document.getElementById('kommentarbereich') 

var submitKnopf = document.getElementById ('kommentar-form-submit')
submitKnopf.addEventListener('click',function(event){
var name = document.getElementById('kommentar-form-name')
var meinung = document.getElementById('kommentar-form-meinung')
console.log(name.value, meinung.value)

var kommentar = ''

kommentar += '<section class ="kommentar">'

kommentar += '<span>' + name.value + '</span>'

kommentar += '<p>' + meinung.value + '</p>'

kommentar += '</section>' 

console.log(kommentar)
console.log(kommentarbereich)

kommentarbereich.innerHTML += kommentar
})