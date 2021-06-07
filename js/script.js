var tnum = 'ru';

$(document).ready(function(){

  $(document).click( function(e) {
       $('.translate_wrapper, .more_lang').removeClass('active');
  });

  $('.translate_wrapper .current_lang').click(function(e){
    e.stopPropagation();
    $(this).parent().toggleClass('active');

    setTimeout(function(){
      $('.more_lang').toggleClass('active');
    }, 5);
  });


  /*TRANSLATE*/
  translate(tnum);

  $('.more_lang .lang').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.more_lang').removeClass('active');

    var img = $(this).find('img').attr('src');
    var lang = $(this).attr('data-value');
    var tnum = lang;
    translate(tnum);

    $('.current_lang .lang__txt').text(lang);
    $('.current_lang .lang__img').attr('src', img);
  });
});

function translate(tnum){
  $('h2').text(trans[0][tnum]);
}

var trans = [
  {
    ru : 'Сделай шаг к выздоровлению',
    en : 'Take a step towards recovery',
  }
];
