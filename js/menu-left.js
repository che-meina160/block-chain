jQuery(function($) {
  menu_left();
});

function menu_left() {
  var menus = $('#headerArea ul.top-menu > li');
  var navs = menus.find('> a');
  var subs = menus.find('.sub-menu');
  menus.each(function(i, v) {
    $(v).mouseenter(function() {
      navs.removeClass('active');
      subs.hide();
      $(this).find('> a').addClass('active');
      $(this).find('.sub-menu').show();
    });
    $(v).mouseleave(function() {
      $(this).find('> a').removeClass('active');
      $(this).find('.sub-menu').hide();
    });
  });
}

