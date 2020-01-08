jQuery(function($) {
  menu_right();
});

function menu_right() {
  var menu = $('#headerArea .right-menu .btn_light');
  var sub = $('#headerArea .sub-game');
  var ref1;
  var ref2;

  menu.mouseenter(function(e) {
    clearTimeout(ref2);
    menu.addClass('active');
    sub.show();
  });
  menu.mouseleave(function(e) {
    ref1 = setTimeout(function() {
      menu.removeClass('active');
      sub.hide();
    }, 200);
  });
  sub.mouseenter(function(e) {
    clearTimeout(ref1);
  });
  sub.mouseleave(function(e) {
    ref2 = setTimeout(function() {
      menu.removeClass('active');
      sub.hide();
    }, 200);
  });
}