$(function() {
    $(document).scroll(function() {
      var $nav = $("#main-navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $(window).height());
      $nav.toggleClass("scrolled2", $(this).scrollTop() > 2*($(window).height()));
      $nav.toggleClass("scrolled3", $(this).scrollTop() > 3*($(window).height()));
      $nav.toggleClass("scrolled4", $(this).scrollTop() > 4*($(window).height()));
    })
  })


  


