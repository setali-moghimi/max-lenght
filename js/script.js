let inp =document.querySelector('input')
let spann=document.querySelector('span')
inp.addEventListener('keyup',function(){
    spann.innerHTML=19-(inp.value.length)
})