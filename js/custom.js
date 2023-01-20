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

      /*
       *TODO: incrementar na validação
       * - checar se o nome é válido (com pelo menos 2 caracteres)
       * - checar se o email é válido com "@" e pelo menos um "."
       */

      function validate( elem ){

         if( elem.val() == '') {

            console.log('o campo de '+ elem.attr('name') + ' é obrigatório')
   
            elem.addClass('invalid')

            return false

         } else {
            elem.removeClass('invalid')
         }

      }

      $('body').on('submit', '.modal-body .form', function(e){

         e.preventDefault()

         const inputDate = $('#date')
         const inputTime = $('#time')
         const inputCep = $('#cep')
         const inputPhone = $('#phone')
         const inputCpf = $('#cpf')

         validate(inputDate)
         validate(inputTime)
         validate(inputCep)
         validate(inputPhone)
         validate(inputCpf)

         if( inputDate.hasClass('invalid') || inputTime.hasClass('invalid') || inputCep.hasClass('invalid') || inputPhone.hasClass('invalid') || inputCpf.hasClass('invalid')){
            console.log('verificar campos obrigatórios')
            return false
         } else {
            $(this).submit()
         }

      })


      //$('body').on('blur', '#date', function(){

      //   validate($(this))
      //   $('#date').mask('00/00/0000');
      //})

      $('body').on('blur', '#datepicker', function(){

         $(this).datepicker();
         validate($(this))
         $('#datepicker').mask('00/00/0000');

      })

      $('body').on('blur', '#time', function(){

         validate($(this))
         $('#time').mask('00:00');
      })

      $('body').on('blur', '#cep', function(){

         validate($(this))
         $('#cep').mask('00000-000');
      })

      $('body').on('blur', '#phone', function(){

         validate($(this))
         $('#phone').mask('(00) 00000-0000');
      })

      $('body').on('blur', '#cpf', function(){

         validate($(this))
         $('#cpf').mask('000.000.000-00');
      })



})
