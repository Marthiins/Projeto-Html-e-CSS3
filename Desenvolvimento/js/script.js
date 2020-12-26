$(document).ready(function(){
 //dialog da modal abrir
 $('.dialog-close').click(function(){
    $('.dialog-body').fadeOut('200' , function(){ //FadeOut fechar a Modal Principal
       $('.dialog').fadeOut('200');
 });
});

$('.dialog-open').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href'); //Como ja estou dentro do botão posso passar o this e o atributo attr
    $('.dialog').fadeIn('200' , function(){ //Abrir a Modal Principal
       $(target).fadeIn('200');
 });
});
    //Menu nav toogle
    $('#nav-toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    });

    // variaveis rolar para agrupar se for 3 usa a , nas duas e na ultima ;
    var nav = $('.header-nav'),
    navHeight= nav.outerHeight(),
    sections = $('.section');

    //Scroll
    $(window).on('scroll', function(){
        var sTop = $(this).scrollTop();
        
        //Fixando o header
        if(sTop > navHeight){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }

        //Marcando Menu Scroll  o each ele vai passar de um por um
        if(sTop == 0){
            nav.find('a').removeClass('active');
            nav.find('a[href="#home"]').addClass('active');  // attr é Atributo 
        }else{
          sections.each(function(){
             var top = $(this).offset().top - navHeight;

        if(sTop >= top){
            nav.find('a').removeClass('active');
            nav.find('a[href="#' + $(this).attr('id') +'"]').addClass('active');  // attr é Atributo   
        }
      });
     }
  });

     //Navegação quando clicar e correr ate a seção
     nav.find('a').on ('click', function(e){
         e.preventDefault();
         $('.header-collapse').removeClass('active');
         $('#nav-toggle').removeClass('active');

         var target = $(this).attr('href');
         if(target == "#home"){
             $('html , body').animate({scrollTop : 0}, 700);
         }else{
            $('html , body').stop().animate({scrollTop : $(target).offset().top}, 700);
         }
     });

     //BACK TOPO
     $('.back-topo').on('click' , function(e){
         e.preventDefault();
         $('html, body').animate({scrollTop : 0}, 700);  //para se usar uma propriedade tenho que colocar entre chaves 700 é para demorar
     });


    //Carousel Principal
    $('#carousel_principal').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 0,
        nav: true,
        navSpeed: 1000,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        dots: true,
        navSpeed: 1000,
        //autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10

    });

     //Carousel Testemunhas
     $('#carousel_testemunhas').owlCarousel({
        items: 1,
        loop: true,
        margin: 40,
        nav: false,
        navSpeed: 1000,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        dots: true,
        navSpeed: 1000,
       // autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10,
        responsive:{   //Carousel Testemunhas plugin do site owl.carousel.js quando chegar em 960 tamanho ele fica em dois
            960:{
                items:2
            },
            1280:{ // quando chegar em 1280 ele vai mostrar as setas
                items:2,
                nav: true
            }
        }
    });

    // Carousel Portfolio
    $('.carousel_portfolio').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 0,
        nav: true,
        navSpeed: 1000,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        dots: false,
        navSpeed: 1000,
        //autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10

    });

    //PORTFOLIO jerry para quando clicar na categoria ele não esta somente em um job como passei como link
    // quero passar aqui o link dos( TODOS, WEBSITES , SISTEMAS, DESIGN E LOGOS) POS USO .PORTFOLIO pos se trata de uma classe
    $('.portfolio-nav li a').click(function(e){ //coloquei o e para prevenir
        e.preventDefault();
          $('.portfolio-nav li a').removeClass('active');
          $(this).addClass('active');

          $('.portfolio').removeClass('visible');
          if(this.id == "all"){
            $('.portfolio').addClass('visible');
          }else{
            $('.portfolio.' + this.id).addClass('visible'); //concatenei o portifolio ( TODOS, WEBSITES , SISTEMAS, DESIGN E LOGOS)

          }
    });   
});