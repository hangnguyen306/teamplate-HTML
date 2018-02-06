 /* custom JS here */
 function responheight() {
     var hfoot = $(window).height();
     var hheader = $('.header').outerHeight();
     var hfooter = $('.footer').outerHeight();
     $('.childpage .page').css({ marginBottom: -hfooter });
     $('.maincontent').css({ paddingBottom: hfooter + 80 });
     $('.bgslider').css({ height: hfoot - hheader });
 }

 $(document).ready(function() {
     $('.menu-page').each(function() {
         var currentid = $(this).attr('href');
         $(this).click(function(e) {
             e.preventDefault();
             $(this).toggleClass('active-menu');
             $(currentid).toggleClass('open-sub');
             $('body').toggleClass('open-page');
         });
     });

 });
 $(window).scroll(function() {
     if ($(this).scrollTop()) {
         $('.to-top').css({ bottom: 0 });
     } else {
         $('.to-top').css({ bottom: -100 });
     }
 });
 $('.to-top a').click(function(e) {
     var href = $(this).attr("href"),
         offsetTop = href === "#" ? 0 : $(href).offset().top;
     $('html, body').stop().animate({
         scrollTop: offsetTop
     }, 1000);
     e.preventDefault();
 });

 $('.bgslider').each(function() {
     var imgUrl1 = $(this).find('.bgimg').attr('src');
     $(this).fixbg({ srcimg: imgUrl1 });
 });

 $('.btn-nav').each(function() {
     $(this).click(function(event) {
         event.preventDefault();
         $(this).next().slideToggle();
         $(this).toggleClass('open-nav');
     });
 });
 $('#menu ul.menu li').each(function() {
     if ($(this).find('li').size() > 0) {
         $(this).append('<span class="icon"></span>');
         $(this).addClass('has-sub');
         var subUl = $(this).find('ul');
         subUl.addClass('sub');

     }
 });
 $('span.icon').each(function() {
     $(this).click(function(e) {
         $(this).parent().find('.sub').toggleClass('showchild');
         $(this).toggleClass('open-icon')
     });

 });
 $('#slider').slick({
     infinite: true,
     arrows: false,
     autoplay: true,
     autoplaySpeed: 3000,
     dots: true
 });
 /*Menu child have sub*/
 $('.menuchild li.has-sub>a').on('click', function(event) {
     var element = $(this).parent('li');
     if (element.hasClass('open')) {
         element.removeClass('open');
         //element.removeClass('active');
         element.find('li').removeClass('open');
         element.find('ul').slideUp();
     } else {
         element.addClass('open');
         //element.addClass('active');
         element.children('ul').slideDown();
         element.siblings('li').children('ul').slideUp();
         element.siblings('li').removeClass('open');
         element.siblings('li').find('li').removeClass('open');
         element.siblings('li').find('ul').slideUp();
     }
 });
 $("input[placeholder]").focusin(function() {
         $(this).data('place-holder-text', $(this).attr('placeholder')).attr('placeholder', '');
     })
     .focusout(function() {
         $(this).attr('placeholder', $(this).data('place-holder-text'));
     });
 $(window).load(function() {
     responheight();
 });

 $(window).resize(function() {
     responheight();
 });