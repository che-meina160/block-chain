jQuery(function ($) {
  ln_nav();
  ln_line();
  ln_win();
});

var g_handle_out;
var g_handle_in;
var g_curr = -1;
var g_widths = [];

function ln_win() {
  $(window).resize(function () {
    fn_adpt();
  });
}

function ln_line() {
  var e_nav_on = $('.menu_nav > li.on');
  var e_nav = $('.menu_nav > li');

  if (e_nav_on && e_nav_on.length) {
    g_curr = e_nav.index(e_nav_on);
  }

  if (-1 !== g_curr) {
    fn_slide(g_curr);
  }

  e_nav.each(function (i, v) {
    $(v).mouseenter(function () {
      if (i !== g_curr) {
        clearTimeout(g_handle_out);
        clearTimeout(g_handle_in);
        g_handle_in = setTimeout(function () {
          fn_slide(i);
        }, 200);
      }
    });
    $(v).mouseleave(function () {
      clearTimeout(g_handle_in);
      if (!$(v).hasClass('on')) {
        g_handle_out = setTimeout(function () {
          fn_slide(g_curr);
        }, 300);
      }
    });
  });
}

function ln_nav() {
  var elm_nav = $('.menu_nav > li');
  var elm_on = $('.menu_nav > li.on');
  var prm_idx = -1;

  if (elm_on && elm_on.length) {
    prm_idx = elm_on.index(elm_nav);
  }

  elm_nav.click(function (e) {
    e.preventDefault();
    var e_self = $(this);
    var p_idx = e_self.index();
    if (prm_idx === p_idx) {
      return;
    }
    fn_swich(p_idx);
    g_curr = p_idx;
    prm_idx = p_idx;
    elm_nav.removeClass('on');
    e_self.addClass('on');
  });
}

function fn_swich(idx) {
  var bg_elm = $('.recently_played');
  var bg_img = bg_elm.find('.game_img');
  var bg_game = bg_elm.find('.game_bg');
  var bg_num = parseInt(idx) + 1;
  var bg_cls = 'bg0' + bg_num;
  var list_nav = $('.game_list');
  var list_idx = parseInt(idx);

  bg_elm.removeClass('bg01 bg02 bg03 bg04').addClass(bg_cls);

  bg_game.eq(g_curr).fadeOut();
  bg_game.eq(idx).fadeIn();

  bg_img.eq(g_curr).fadeOut();
  bg_img.eq(idx).fadeIn();

  list_nav.eq(g_curr).hide();
  list_nav.eq(idx).fadeIn(300);
}

function fn_adpt() {
  var e_nav = $('.menu_nav > li');
  var e_on = $('.menu_nav > li.on');
  var e_bar = $('.menu_nav_line');
  var tmp = g_widths[0];

  g_widths = [];
  e_nav.each(function (i, v) {
    g_widths.push(Math.round($(v).width()));
  });

  var p_idx = e_nav.index(e_on);
  var p_width = Math.round(e_on.width());

  if (tmp !== g_widths[0]) {
    var p_left = 0;
    for (var i = 0; i < p_idx; i++) {
      p_left += (g_widths[i] + 30);
    }
    e_bar.animate({
      width: p_width,
      left: p_left
    });
  }
}

function fn_slide(idx) {
  var e_nav = $('.menu_nav > li');
  var e_bar = $('.menu_nav_line');

  g_widths = [];
  e_nav.each(function (i, v) {
    g_widths.push(Math.round($(v).width()));
  });

  var e_curr = e_nav.eq(idx);
  var p_width = Math.round(e_curr.width());

  var p_left = 0;
  for (var i = 0; i < idx; i++) {
    p_left += (g_widths[i] + 30);
  }
  e_bar.animate({
    width: p_width,
    left: p_left
  });
}