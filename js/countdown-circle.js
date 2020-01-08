(function() {
  if ('performance' in window == false) {
    window.performance = {};
  }

  Date.now = (Date.now || function () {  // thanks IE8
	  return new Date().getTime();
  });

  if ('now' in window.performance == false) {
    var nowOffset = Date.now();
    if (performance.timing && performance.timing.navigationStart) {
      nowOffset = performance.timing.navigationStart;
    }
    window.performance.now = function now() {
      return Date.now() - nowOffset;
    }
  }
})();

function setCountDown(opt) {
  return new countDownCircle(opt);
}

function map(n, start1, stop1, start2, stop2) {
  return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
}

function countDownCircle(opt) {
  var obj = opt || {};
  this.cnf = $.extend({}, {
    numb: 10,
    elm: '',
    finish: function() { }
  }, obj);
  this.run();
}

countDownCircle.prototype.preInit = function() {
  var elm = this.cnf.elm;
  var circle = elm.find('.circle');
  var num = elm.find('.num');

  circle.css({
    '-webkit-animation': 'none',
    '-ms-animation': 'none',
    'animation': 'none'
  });
  circle.css({
    'transform': 'rotate(45deg)'
  });
  num.text(this.cnf.numb);

  this.circle = circle;
  this.num = num;
}

countDownCircle.prototype.run = function() {
  if ('' === this.elm) {
    return;
  }
  this.preInit();

  var d = parseInt(this.cnf.numb);
  var t = 0;
  var cb = this.cnf.finish;
  var t0 = window.performance.now();
  var update = this.update;
  var self = this;

  cancelAnimationFrame(countDownCircle.ref);
  requestAnimationFrame(render);

  function render() {
    var t1 = window.performance.now();
    t += (t1 - t0) / 1000;
    t0 = t1;
    var prcnt = t / d;
    var floor = Math.floor(t);
    if (t > d) {
      cancelAnimationFrame(countDownCircle.ref);
      self.num.text(0);
      self.circle.css({
        'transform': 'rotate(225deg)'
      });
      cb && cb();
    } else {
      update.call(self, prcnt, floor);
      countDownCircle.ref = requestAnimationFrame(render);
    }
  }
}

countDownCircle.prototype.update = function(prcnt, flr) {
  var deg = map(prcnt, 0, 1, 0, 360);

  if (Math.round(deg) > 180) {
    var d = 45 + deg - 180;
    this.circle.eq(1).css({
      'transform': 'rotate(' + d + 'deg)'
    });
  } else {
    var d = 45 + deg;
    this.circle.eq(0).css({
      'transform': 'rotate(' + d + 'deg)'
    });
  }

  var cnt = this.cnf.numb - flr;
  this.num.text(cnt);
}