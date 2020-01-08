jQuery(function($) {
  runEffect();
  lnClick();
});

var gTop = 252;
var gRight = 404;
var gLock = false;

function lnClick() {
  $(window).click(function(e) {
    if (gLock) return;

    gRight = $(window).width() - e.pageX;
    gTop = e.pageY;

    runEffect();
  });
}

function runEffect() {
  /*
  var pos = [
    [100, 300, 26, 253],
    [120, 310, 25, 251],
    [140, 340, 24, 251],
    [160, 330, 23, 250],
    [180, 350, 22, 250],
    [200, 370, 22, 250],
    [220, 400, 21, 250],
    [240, 380, 19, 249],
    [260, 440, 19, 249],
    [280, 360, 16, 249],
  ];

  var pos = [
    [237, 403, 26, 253],
    [250, 407, 25, 251],
    [264, 399, 24, 251],
    [261, 417, 23, 250],
    [237, 426, 22, 250],
    [285, 407, 22, 250],
    [220, 400, 21, 250],
    [240, 380, 19, 249],
    [260, 440, 19, 249],
    [280, 360, 16, 249],
  ];
  */

  gLock = true;
  var dmns = $('.move_diamonds');
  var pos = [
    [-15, -1, 26, 253],
    [-2, 3, 25, 251],
    [12, -5, 24, 251],
    [9, 13, 23, 250],
    [-15, 22, 22, 250],
    [33, 3, 22, 250],
    [-32, -4, 21, 250],
    [-12, -24, 19, 249],
    [8, 36, 19, 249],
    [28, -44, 16, 249],
  ];

  dmns.each(function(i, v) {
    var p = pos[i];
    var d = 300 + 150*i;
    var s = 200 + 200*i;

    $(v).css({
      right: p[1] + gRight,
      top: p[0] + gTop,
      opacity: 0
    });

    $(v).animate({
      opacity: 1
    }, { duration: 200, queue: false });

    $(v).delay(s).animate({
      right: p[3],
      top: p[2]
    }, {
      easing: 'easeOutBounce',
      duration: d,
      queue: false,
      complete: function() {
        if (9 === i) {
          setTimeout(function() {
            gLock = false;
          }, 500);
        }
      }
    });
  });
}



