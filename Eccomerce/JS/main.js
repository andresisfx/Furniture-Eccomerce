// const hamburger=document.getElementById('hamburger');
// const menu=document.getElementById('navContenedor');
// console.log(hamburger,menu)
// hamburger.addEventListener('click',function(){
//     menu.classList.toggle('menu-active')
// })

document.addEventListener('DOMContentLoaded',function(){
     



            const nav = document.getElementById('navContenedor');
            const botonMenu = document.getElementById('hamburger'); // Ajusta este selector
            const anclas = document.querySelectorAll('.enlace')
            console.log(anclas[0].classList)

            anclas.forEach(ancla=>{
                    ancla.classList.add('subir-anclas');
                    
                    ancla.style.transition='transform 0.4s easy'
                })

            botonMenu.addEventListener('click',function(){
            if(nav.classList.contains('menu-active')){
                nav.style.transition='height 0.4s, opacity 0.4s, transform 0.4s';
                nav.style.opacity='0';

                setTimeout(() => {
                    document.body.style.overflow='auto';
                    nav.classList.remove('menu-active');
                    nav.style.transition=''
                    anclas.forEach(ancla=>{
                    ancla.classList.remove('bajar-anclas');
                    ancla.classList.add('subir-anclas');
                    ancla.style.transition='transform 0.4s easy'
                })
                }, 500);
            }else{
                document.body.style.overflow='hidden'
                nav.classList.add('menu-active')
                
                

                requestAnimationFrame(()=>{
                    nav.style.transition='height 0.4s, opacity 0.4s, transform 0.4s';
                    nav.style.opacity='1';
                    nav.style.transform='translateY(0)'
                    anclas.forEach(ancla=>{
                    ancla.classList.remove('subir-anclas');
                    ancla.classList.add('bajar-anclas');
                    ancla.style.transition='transform 0.4s easy'
                })
                })
            }
            })

})