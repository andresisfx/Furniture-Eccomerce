// const hamburger=document.getElementById('hamburger');
// const menu=document.getElementById('navContenedor');
// console.log(hamburger,menu)
// hamburger.addEventListener('click',function(){
//     menu.classList.toggle('menu-active')
// })

const nav = document.getElementById('navContenedor');
const botonMenu = document.getElementById('hamburger'); // Ajusta este selector

// botonMenu.addEventListener("click", () => {
//     if (nav.classList.contains("menu-active")) {
//         // Cerrar menú (con transición)
//         nav.style.transition = "opacity 0.3s ease, transform 0.3s ease";
//         nav.style.opacity = "0";
      
//         // nav.style.transform = "translateY(-100%)";
        
//         // Esperar a que termine la transición antes de aplicar display: none
//         setTimeout(() => {
//             document.body.style.overflow='auto'
//             nav.classList.remove("menu-active");
//             nav.style.transition = ""; // Limpiar estilos en línea
//         }, 500); // Tiempo igual a la duración de la transición (500ms)
//     } else {
//         // Abrir menú
//         nav.classList.add("menu-active");
//         document.body.style.overflow='hidden'
//         // Esperar un frame para que el navegador registre el cambio antes de la animación
//         requestAnimationFrame(() => {
//             nav.style.transition = "height 0.5s ease, opacity 0.3s ease, transform 0.5s ease";
//             nav.style.opacity = "1";
//             nav.style.transform = "translateY(0)";
//         });
//     }
// }); 

botonMenu.addEventListener('click',function(){
 if(nav.classList.contains('menu-active')){
    nav.style.transition='height 0.4s, opacity 0.4s, transform 0.4s';
    nav.style.opacity='0';

    setTimeout(() => {
        document.body.style.overflow='auto';
        nav.classList.remove('menu-active');
        nav.style.transition=''
    }, 500);
 }else{
    document.body.style.overflow='hidden'
    nav.classList.add('menu-active')

    requestAnimationFrame(()=>{
        nav.style.transition='height 0.4s, opacity 0.4s, transform 0.4s';
        nav.style.opacity='1';
        nav.style.transform='translateY(0)'
    })
 }
})