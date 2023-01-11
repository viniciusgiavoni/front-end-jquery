// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')
     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

     });

     /*
      * Manipulação de eventos
      */
     $('.featured-item a').on('blur', function(event){

        event.preventDefault();

        alert('Produto esgotado');

     })
     
     /* 
     * callback
     *
     * 
     */

     $('.featured-item:nth(1)')
      .hide(2000, function(){
         ( $(this).find('h4').text() + ' esgotado')
     })
      .show(2000, function(){
         ( $(this).find('h4').text() + ' em estoque')
      })
     
     
      /*
      * Animações
      *
      */
      const duracao = 1000 // equivalente a 1 segundo
      $('.featured-item:nth(1)')
         .hide(duracao)
         .show(duracao)
         .fadeOut(duracao)
         .fadeIn(duracao)

      $('#form-submit').on('click', function(e){
         e.preventDefault()
         if($('#email').val().length < 1 ){
            
            $('#email').animate({'border': '2px solid #f00'})
         }
      })


      /*
      *
      * Ouvinte de eventos .nav-modal-open
      * 
      */
      $('.nav-modal-open').on('click', function(e){
         e.preventDefault();

         let elem = $(this).attr('rel')

         $('.modal-body').html($('#'+elem).html())

         $('.modal-header h5.modal-title').html($(this).text())


         let myModal = new bootstrap.Modal($('#modalId'))

         myModal.show()

      })


})
