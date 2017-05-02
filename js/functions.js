$(document).ready(function () {
    // Fecha o menu após clicar no botão
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });

    // Zera as barras de progresso
    $('.progress-bar').each(function(index, item){
      $(item).css('width', '0%');
    });

    $('.progress-bar').each(function(index, item){
      var percentage = $(item).attr('aria-valuenow');
      $(item).addClass('progress-bar-striped').addClass('active');
      $(item).animate({
        width: percentage + "%"
      }, 2500, function(){
        $(item).removeClass('progress-bar-striped').removeClass('active');
      });
    });
});
