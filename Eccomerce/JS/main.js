const hamburger=document.getElementById('hamburger');
const menu=document.getElementById('navContenedor');
console.log(hamburger,menu)
hamburger.addEventListener('click',function(){
    menu.classList.toggle('menu-active')
})