// Owl carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// Código para la animación Scroll

window.addEventListener("scroll", function(){

    // 
let elementoAnimado = document.getElementById("animado");
let posicion = elementoAnimado.getBoundingClientRect();

console.log(posicion);
});


