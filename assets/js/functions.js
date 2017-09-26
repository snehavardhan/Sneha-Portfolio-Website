$( document ).ready(function() {

  // Get started!
  smoothScroll(1000);
  workBelt();
  workLoad();
  clientStuff();

});

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
        newHtml = '/work/' + newFolder + '.html';
    $('.project-load').html(spinner).load(newHtml);
    $('.project-title').text(newTitle);
  });
}

function clientStuff() {
  $('.client-unit').first().addClass('active-client');

  $('.client-control-next').click(function() {
    console.log("asasfasdfwertgdfbsghehtry5yufghdfh");
    alert("hi");
  });
  //   var $this = $(this),
  //       curActiveClient = $('.clients-belt').find('.active-client'),
  //       position = $('.clients-belt').children().index(curActiveClient),
  //       clientNum = $('.client-unit').length;
  //

  //       $('.active-client').removeClass('active-client').next().addClass('active-client');
  // });
}
