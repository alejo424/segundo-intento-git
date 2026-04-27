let n1=document.getElementById("n1")
let n2=document.getElementById("n2")
let total=document.getElementById("total")
let boton=document.getElementById("boton")

boton.addEventListener("click", suma)
let r
let nu1
let nu2

function suma (){
    nu1=Number(n1.value)
    nu2=Number(n2.value)    
    r=nu1+nu2
    
total.textContent=(r)

}