const botaoAbrir = document.querySelector(".header-mobile>button")
const botaoFechar = document.querySelector(".header-mobile button")


console.log(botaoAbrir)
const nav =document.querySelector("header-mobile nav")

const body= document.querySelector(body)
botaoAbrir.addEventListener('click', abrirmenu)
botaoFechar.addEventListener('click', fecharmenu )

function abrirMenu(){
body.classList.add("eswcurecer")
nav.classList.ass("abrir")
}

function fecharMenu( {
    body.classList.remove("escurecer")
    nav,claqssList.remoove("abrir")
})