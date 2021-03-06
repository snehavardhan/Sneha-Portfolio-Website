$( document ).ready(function() {

  // Get started!
  smoothScroll(1000);
  workBelt();
  workLoad();
  clientStuff();

  window.onscroll = function(){
    scrollFunction()
  };

});

function scrollFunction(){
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("backBtn").style.display = "block";
  } else {
    document.getElementById("backBtn").style.display = "none";
  }
}

function topFunction(){

  document.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function smoothScroll(duration){
  $('a[href^="#"]').on('click', function(event){
    var target = $($(this).attr('href'));

    if(target.length){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}

function workBelt(){
  $('.thumb-unit').click(function(){
    $('.work-belt').css('left', '-100%');
    $('.work-container').show();
  });

  $('.work-return').click(function(){
    $('.work-belt').css('left', '0%');
    $('.work-container').hide(1000);
  });
}

function workLoad(){
  $.ajaxSetup({ cache:true });
  $('.thumb-unit').click(function(){

    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newFolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHtml = 'work/' + newFolder + '.html';
    $('.project-load').html(spinner).load(newHtml);
    $('.project-title').text(newTitle);
  });
}

function clientStuff() {
  $('.client-unit').first().addClass('active-client');
  //--------------Code to insert client logos----------------
  // $('.client-logo').first().addClass('active-client');

  // $('.client-logo').click(function(){
  //   var $this = $(this),
  //       $siblings = $this.parent().children(),
  //       position = $siblings.index($this);
  //
  //   $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
  //   $siblings.removeClass('active-client');
  //   $this.addClass('active-client');
  // });

  $('.client-control-next, .client-control-prev').click(function() {
        var $this = $(this),
            curActiveClient = $('.clients-belt').find('.active-client'),
            position = $('.clients-belt').children().index(curActiveClient),
            clientNum = $('.client-unit').length;

        if($this.hasClass('client-control-next')){
          if(position < clientNum-1) {
            $('.active-client').removeClass('active-client').next().addClass('active-client');
          } else {
            $('.client-unit').removeClass('active-client').first().addClass('active-client');
            // $('.client-unit').removeClass('active-client').first().addClass('active-client');
          }
        } else {
          if(position == 0) {
            $('.client-unit').removeClass('active-client').last().addClass('active-client');
            // $('.client-unit').removeClass('active-client').last().addClass('active-client');
          } else {
            $('.active-client').removeClass('active-client').prev().addClass('active-client');
          }


        }


  });
}
