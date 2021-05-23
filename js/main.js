 $('.interest-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // center:true,
    // center:true,
    // autoplay:true,
    autoplayTimeout:3000,
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.team-slide').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    // autoplay:true,
    autoplayTimeout:4000,
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('.service-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    center:true,
    // autoplay:true,
    autoplayTimeout:4000,
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('.step-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    center:true,
    // autoplay:true,
    autoplayTimeout:4000,
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('.showcase-slide').owlCarousel({
    loop:true,
    margin:40,
    nav:false,
    center:true,
    // autoplay:true,
    autoplayTimeout:4000,
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})