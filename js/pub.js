$(function () {
   
   // 구독중 버튼
   $('.sbscr-btn').click(function() {
      $(this).toggleClass('sbscr-btn--check');
      $(this).find('img').stop().toggle();
      if($(this).hasClass('sbscr-btn--check')) {
         $(this).find('span').text('구독중');
         $(this).append('<img src="images/icons/check-icon.png" alt="">');
      } else {
         $(this).find('span').text('구독하기');
         $(this).find('img').remove();
      }
   });

   // 검색아이콘 클릭
   $('#searchBtn').click(function(e) {
      e.preventDefault();
      $('#searchPop').stop().slideToggle();
   });

   // 모바일 메뉴열림
   $('#menuBtn').click(function() {
      $('#mobileMenu').stop().animate({'left': 0});
   });

   // 모바일 메뉴닫힘
   $('#menuCloseBtn').click(function() {
      $('#mobileMenu').stop().animate({ 'left': '100%'});
   });

   // 브랜드 코너 메뉴 토글
   $('.downbtn').click(function() {
      $(this).stop().toggleClass('open');
      $(this).parent().find('.header-btm__list').stop().slideToggle();
   });

   // 영상 재생
   $('.video__play').click(function() {
      $(this).stop().fadeOut();
      $(this).parent().find('.video__thum').stop().fadeOut();
      $(this).parent().find('.video__pause').stop().fadeIn();
      $(this).parent().find('iframe')[0].contentWindow.postMessage('{"event": "command", "func": "playVideo", "args": ""}', '*');
   });
   $('.vodbox__play').click(function() {
      $(this).stop().fadeOut();
      $(this).parent().find('.vodbox__thum').stop().fadeOut();
      $(this).parent().find('.vodbox__cover').stop().fadeOut();
      $(this).parent().find('iframe')[0].contentWindow.postMessage('{"event": "command", "func": "playVideo", "args": ""}', '*');
   });

   // 영상 일시정지
   $('.video__pause').click(function() {
      $(this).stop().fadeOut();
      $(this).parent().find('.video__thum').stop().fadeIn();
      $(this).parent().find('.video__play').stop().fadeIn();
      $(this).parent().find('iframe')[0].contentWindow.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', '*');
   });

   // 웨비나 일정 월별 클릭
   $('.calendar__item').click(function() {
      $('.calendar__item').removeClass('calendar__item--focused');
      $(this).addClass('calendar__item--focused');
   });

   // 웨비나 일정 슬라이드
   var schdlSize = $('.schdl__list li').length - 2;
   var schdlCount = 0;

   $('.schdl__prev').click(function() {
      var move = $('.schdl__list li').width() + 60;

      if (schdlSize > schdlCount) {
         schdlCount++;
         $('.schdl__list').stop().animate({ 'left': -1 * move * schdlCount + 'px' });
         console.log(schdlCount);
      }
   });
   $('.schdl__next').click(function() {
      var move = $('.schdl__list li').width() + 60;

      if (schdlCount > 0) {
         schdlCount--;
         $('.schdl__list').stop().animate({ 'left': -1 * move * schdlCount + 'px' });
         console.log(schdlCount);
      } else {
         schdlCount = 0;
         console.log(schdlCount);
      }
   });

   // 명예의 전당 슬라이드
   var templeSize = $('.temple__list li').length;
   var templeCount = 0;

   $('.temple__next').click(function() {
      var move = $('.temple__list').width();
      templeCount++;
      if (templeCount < templeSize) {
         $('.temple__list li').eq(templeCount - 1).stop().css({'left': '0px', 'z-index': 1});
         $('.temple__list li').eq(templeCount - 1).stop().animate({'left': -1 * move + 'px'});
         $('.temple__list li').eq(templeCount).stop().css({ 'left': '100%', 'z-index': 2 });
         $('.temple__list li').eq(templeCount).stop().animate({ 'left': '0px' });
         $('.temple__btnbox button').removeClass('temple__btn--focused');
         $('.temple__btnbox button').eq(templeCount).addClass('temple__btn--focused');
      } else {
         $('.temple__list li').eq(templeCount - 1).stop().css({ 'left': '0px', 'z-index': 1 });
         $('.temple__list li').eq(templeCount - 1).stop().animate({ 'left': -1 * move + 'px' });
         $('.temple__list li').eq(0).stop().css({ 'left': '100%', 'z-index': 2 });
         $('.temple__list li').eq(0).stop().animate({ 'left': '0px' });
         $('.temple__btnbox button').removeClass('temple__btn--focused');
         $('.temple__btnbox button').eq(0).addClass('temple__btn--focused');
         templeCount = 0;
      }
   });
   $('.temple__prev').click(function() {
      var move = $('.temple__list').width();
      templeCount--;
      if (templeCount > -1) {
         $('.temple__list li').eq(templeCount + 1).stop().css({'left': '0px'});
         $('.temple__list li').eq(templeCount + 1).stop().animate({'left': '100%', 'z-index': 1});
         $('.temple__list li').eq(templeCount).stop().css({'left': -1 * move + 'px'});
         $('.temple__list li').eq(templeCount).stop().animate({'left': '0px', 'z-index': 2});
         $('.temple__btnbox button').removeClass('temple__btn--focused');
         $('.temple__btnbox button').eq(templeCount).addClass('temple__btn--focused');
      } else {
         $('.temple__list li').eq(templeCount + 1).stop().css({'left': '0px'});
         $('.temple__list li').eq(templeCount + 1).stop().animate({'left': '100%', 'z-index': 1});
         $('.temple__list li').eq(templeSize - 1).stop().css({ 'left': -1 * move + 'px' });
         $('.temple__list li').eq(templeSize - 1).stop().animate({ 'left': '0px', 'z-index': 2 });
         $('.temple__btnbox button').removeClass('temple__btn--focused');
         $('.temple__btnbox button').eq(templeSize - 1).addClass('temple__btn--focused');
         templeCount = templeSize - 1;
      }
   });

   // Q&A 태그버튼 스와이퍼
   var swiper = new Swiper(".qna-tag", {
      slidesPerView: 'auto',
      freeMode: true,
      grabCursor: true,
      spaceBetween: 9,
      slidesOffsetAfter: 34,
      loop: false,
   });

   // 사이드 웨비나 일정 스와이퍼
   var swiper2 = new Swiper(".wbnr__scroll", {
      slidesPerView: 'auto',
      freeMode: true,
      grabCursor: true,
      spaceBetween: 10,
      slidesOffsetAfter: 34,
      loop: false,
   });

});