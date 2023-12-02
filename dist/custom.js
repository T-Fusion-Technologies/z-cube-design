"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* Scroll Nav */
/*
!function(e){"use strict";e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=e(this.hash);if((a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:a.offset().top-50},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#mainNav",offset:50});var a=function(){50<e("#mainNav").offset().top?e("#mainNav").addClass("navbar-shrink"):e("#mainNav").removeClass("navbar-shrink")};a(),e(window).scroll(a)}(jQuery);
*/

/*! Stellar.js v0.6.2 | Copyright 2013, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
(function (e, t, n, r) {
  function d(t, n) {
    this.element = t, this.options = e.extend({}, s, n), this._defaults = s, this._name = i, this.init();
  }var i = "stellar",
      s = { scrollProperty: "scroll", positionProperty: "position", horizontalScrolling: !0, verticalScrolling: !0, horizontalOffset: 0, verticalOffset: 0, responsive: !1, parallaxBackgrounds: !0, parallaxElements: !0, hideDistantElements: !0, hideElement: function hideElement(e) {
      e.hide();
    }, showElement: function showElement(e) {
      e.show();
    } },
      o = { scroll: { getLeft: function getLeft(e) {
        return e.scrollLeft();
      }, setLeft: function setLeft(e, t) {
        e.scrollLeft(t);
      }, getTop: function getTop(e) {
        return e.scrollTop();
      }, setTop: function setTop(e, t) {
        e.scrollTop(t);
      } }, position: { getLeft: function getLeft(e) {
        return parseInt(e.css("left"), 10) * -1;
      }, getTop: function getTop(e) {
        return parseInt(e.css("top"), 10) * -1;
      } }, margin: { getLeft: function getLeft(e) {
        return parseInt(e.css("margin-left"), 10) * -1;
      }, getTop: function getTop(e) {
        return parseInt(e.css("margin-top"), 10) * -1;
      } }, transform: { getLeft: function getLeft(e) {
        var t = getComputedStyle(e[0])[f];return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0;
      }, getTop: function getTop(e) {
        var t = getComputedStyle(e[0])[f];return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0;
      } } },
      u = { position: { setLeft: function setLeft(e, t) {
        e.css("left", t);
      }, setTop: function setTop(e, t) {
        e.css("top", t);
      } }, transform: { setPosition: function setPosition(e, t, n, r, i) {
        e[0].style[f] = "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)";
      } } },
      a = function () {
    var t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        n = e("script")[0].style,
        r = "",
        i;for (i in n) {
      if (t.test(i)) {
        r = i.match(t)[0];break;
      }
    }return "WebkitOpacity" in n && (r = "Webkit"), "KhtmlOpacity" in n && (r = "Khtml"), function (e) {
      return r + (r.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e);
    };
  }(),
      f = a("transform"),
      l = e("<div />", { style: "background:#fff" }).css("background-position-x") !== r,
      c = l ? function (e, t, n) {
    e.css({ "background-position-x": t, "background-position-y": n });
  } : function (e, t, n) {
    e.css("background-position", t + " " + n);
  },
      h = l ? function (e) {
    return [e.css("background-position-x"), e.css("background-position-y")];
  } : function (e) {
    return e.css("background-position").split(" ");
  },
      p = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
    setTimeout(e, 1e3 / 60);
  };d.prototype = { init: function init() {
      this.options.name = i + "_" + Math.floor(Math.random() * 1e9), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({ firstLoad: !0 }), this.options.scrollProperty === "scroll" ? this._handleScrollEvent() : this._startAnimationLoop();
    }, _defineElements: function _defineElements() {
      this.element === n.body && (this.element = t), this.$scrollElement = e(this.element), this.$element = this.element === t ? e("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== r ? e(this.options.viewportElement) : this.$scrollElement[0] === t || this.options.scrollProperty === "scroll" ? this.$scrollElement : this.$scrollElement.parent();
    }, _defineGetters: function _defineGetters() {
      var e = this,
          t = o[e.options.scrollProperty];this._getScrollLeft = function () {
        return t.getLeft(e.$scrollElement);
      }, this._getScrollTop = function () {
        return t.getTop(e.$scrollElement);
      };
    }, _defineSetters: function _defineSetters() {
      var t = this,
          n = o[t.options.scrollProperty],
          r = u[t.options.positionProperty],
          i = n.setLeft,
          s = n.setTop;this._setScrollLeft = typeof i == "function" ? function (e) {
        i(t.$scrollElement, e);
      } : e.noop, this._setScrollTop = typeof s == "function" ? function (e) {
        s(t.$scrollElement, e);
      } : e.noop, this._setPosition = r.setPosition || function (e, n, i, s, o) {
        t.options.horizontalScrolling && r.setLeft(e, n, i), t.options.verticalScrolling && r.setTop(e, s, o);
      };
    }, _handleWindowLoadAndResize: function _handleWindowLoadAndResize() {
      var n = this,
          r = e(t);n.options.responsive && r.bind("load." + this.name, function () {
        n.refresh();
      }), r.bind("resize." + this.name, function () {
        n._detectViewport(), n.options.responsive && n.refresh();
      });
    }, refresh: function refresh(n) {
      var r = this,
          i = r._getScrollLeft(),
          s = r._getScrollTop();(!n || !n.firstLoad) && this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && e(t).load(function () {
        var e = r._getScrollLeft(),
            t = r._getScrollTop();r._setScrollLeft(e + 1), r._setScrollTop(t + 1), r._setScrollLeft(e), r._setScrollTop(t);
      }), this._setScrollLeft(i), this._setScrollTop(s);
    }, _detectViewport: function _detectViewport() {
      var e = this.$viewportElement.offset(),
          t = e !== null && e !== r;this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = t ? e.top : 0, this.viewportOffsetLeft = t ? e.left : 0;
    }, _findParticles: function _findParticles() {
      var t = this,
          n = this._getScrollLeft(),
          i = this._getScrollTop();if (this.particles !== r) for (var s = this.particles.length - 1; s >= 0; s--) {
        this.particles[s].$element.data("stellar-elementIsActive", r);
      }this.particles = [];if (!this.options.parallaxElements) return;this.$element.find("[data-stellar-ratio]").each(function (n) {
        var i = e(this),
            s,
            o,
            u,
            a,
            f,
            l,
            c,
            h,
            p,
            d = 0,
            v = 0,
            m = 0,
            g = 0;if (!i.data("stellar-elementIsActive")) i.data("stellar-elementIsActive", this);else if (i.data("stellar-elementIsActive") !== this) return;t.options.showElement(i), i.data("stellar-startingLeft") ? (i.css("left", i.data("stellar-startingLeft")), i.css("top", i.data("stellar-startingTop"))) : (i.data("stellar-startingLeft", i.css("left")), i.data("stellar-startingTop", i.css("top"))), u = i.position().left, a = i.position().top, f = i.css("margin-left") === "auto" ? 0 : parseInt(i.css("margin-left"), 10), l = i.css("margin-top") === "auto" ? 0 : parseInt(i.css("margin-top"), 10), h = i.offset().left - f, p = i.offset().top - l, i.parents().each(function () {
          var t = e(this);if (t.data("stellar-offset-parent") === !0) return d = m, v = g, c = t, !1;m += t.position().left, g += t.position().top;
        }), s = i.data("stellar-horizontal-offset") !== r ? i.data("stellar-horizontal-offset") : c !== r && c.data("stellar-horizontal-offset") !== r ? c.data("stellar-horizontal-offset") : t.horizontalOffset, o = i.data("stellar-vertical-offset") !== r ? i.data("stellar-vertical-offset") : c !== r && c.data("stellar-vertical-offset") !== r ? c.data("stellar-vertical-offset") : t.verticalOffset, t.particles.push({ $element: i, $offsetParent: c, isFixed: i.css("position") === "fixed", horizontalOffset: s, verticalOffset: o, startingPositionLeft: u, startingPositionTop: a, startingOffsetLeft: h, startingOffsetTop: p, parentOffsetLeft: d, parentOffsetTop: v, stellarRatio: i.data("stellar-ratio") !== r ? i.data("stellar-ratio") : 1, width: i.outerWidth(!0), height: i.outerHeight(!0), isHidden: !1 });
      });
    }, _findBackgrounds: function _findBackgrounds() {
      var t = this,
          n = this._getScrollLeft(),
          i = this._getScrollTop(),
          s;this.backgrounds = [];if (!this.options.parallaxBackgrounds) return;s = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (s = s.add(this.$element)), s.each(function () {
        var s = e(this),
            o = h(s),
            u,
            a,
            f,
            l,
            p,
            d,
            v,
            m,
            g,
            y = 0,
            b = 0,
            w = 0,
            E = 0;if (!s.data("stellar-backgroundIsActive")) s.data("stellar-backgroundIsActive", this);else if (s.data("stellar-backgroundIsActive") !== this) return;s.data("stellar-backgroundStartingLeft") ? c(s, s.data("stellar-backgroundStartingLeft"), s.data("stellar-backgroundStartingTop")) : (s.data("stellar-backgroundStartingLeft", o[0]), s.data("stellar-backgroundStartingTop", o[1])), p = s.css("margin-left") === "auto" ? 0 : parseInt(s.css("margin-left"), 10), d = s.css("margin-top") === "auto" ? 0 : parseInt(s.css("margin-top"), 10), v = s.offset().left - p - n, m = s.offset().top - d - i, s.parents().each(function () {
          var t = e(this);if (t.data("stellar-offset-parent") === !0) return y = w, b = E, g = t, !1;w += t.position().left, E += t.position().top;
        }), u = s.data("stellar-horizontal-offset") !== r ? s.data("stellar-horizontal-offset") : g !== r && g.data("stellar-horizontal-offset") !== r ? g.data("stellar-horizontal-offset") : t.horizontalOffset, a = s.data("stellar-vertical-offset") !== r ? s.data("stellar-vertical-offset") : g !== r && g.data("stellar-vertical-offset") !== r ? g.data("stellar-vertical-offset") : t.verticalOffset, t.backgrounds.push({ $element: s, $offsetParent: g, isFixed: s.css("background-attachment") === "fixed", horizontalOffset: u, verticalOffset: a, startingValueLeft: o[0], startingValueTop: o[1], startingBackgroundPositionLeft: isNaN(parseInt(o[0], 10)) ? 0 : parseInt(o[0], 10), startingBackgroundPositionTop: isNaN(parseInt(o[1], 10)) ? 0 : parseInt(o[1], 10), startingPositionLeft: s.position().left, startingPositionTop: s.position().top, startingOffsetLeft: v, startingOffsetTop: m, parentOffsetLeft: y, parentOffsetTop: b, stellarRatio: s.data("stellar-background-ratio") === r ? 1 : s.data("stellar-background-ratio") });
      });
    }, _reset: function _reset() {
      var e, t, n, r, i;for (i = this.particles.length - 1; i >= 0; i--) {
        e = this.particles[i], t = e.$element.data("stellar-startingLeft"), n = e.$element.data("stellar-startingTop"), this._setPosition(e.$element, t, t, n, n), this.options.showElement(e.$element), e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
      }for (i = this.backgrounds.length - 1; i >= 0; i--) {
        r = this.backgrounds[i], r.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), c(r.$element, r.startingValueLeft, r.startingValueTop);
      }
    }, destroy: function destroy() {
      this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = e.noop, e(t).unbind("load." + this.name).unbind("resize." + this.name);
    }, _setOffsets: function _setOffsets() {
      var n = this,
          r = e(t);r.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), typeof this.options.horizontalOffset == "function" ? (this.horizontalOffset = this.options.horizontalOffset(), r.bind("resize.horizontal-" + this.name, function () {
        n.horizontalOffset = n.options.horizontalOffset();
      })) : this.horizontalOffset = this.options.horizontalOffset, typeof this.options.verticalOffset == "function" ? (this.verticalOffset = this.options.verticalOffset(), r.bind("resize.vertical-" + this.name, function () {
        n.verticalOffset = n.options.verticalOffset();
      })) : this.verticalOffset = this.options.verticalOffset;
    }, _repositionElements: function _repositionElements() {
      var e = this._getScrollLeft(),
          t = this._getScrollTop(),
          n,
          r,
          i,
          s,
          o,
          u,
          a,
          f = !0,
          l = !0,
          h,
          p,
          d,
          v,
          m;if (this.currentScrollLeft === e && this.currentScrollTop === t && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) return;this.currentScrollLeft = e, this.currentScrollTop = t, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight;for (m = this.particles.length - 1; m >= 0; m--) {
        i = this.particles[m], s = i.isFixed ? 1 : 0, this.options.horizontalScrolling ? (h = (e + i.horizontalOffset + this.viewportOffsetLeft + i.startingPositionLeft - i.startingOffsetLeft + i.parentOffsetLeft) * -(i.stellarRatio + s - 1) + i.startingPositionLeft, d = h - i.startingPositionLeft + i.startingOffsetLeft) : (h = i.startingPositionLeft, d = i.startingOffsetLeft), this.options.verticalScrolling ? (p = (t + i.verticalOffset + this.viewportOffsetTop + i.startingPositionTop - i.startingOffsetTop + i.parentOffsetTop) * -(i.stellarRatio + s - 1) + i.startingPositionTop, v = p - i.startingPositionTop + i.startingOffsetTop) : (p = i.startingPositionTop, v = i.startingOffsetTop), this.options.hideDistantElements && (l = !this.options.horizontalScrolling || d + i.width > (i.isFixed ? 0 : e) && d < (i.isFixed ? 0 : e) + this.viewportWidth + this.viewportOffsetLeft, f = !this.options.verticalScrolling || v + i.height > (i.isFixed ? 0 : t) && v < (i.isFixed ? 0 : t) + this.viewportHeight + this.viewportOffsetTop), l && f ? (i.isHidden && (this.options.showElement(i.$element), i.isHidden = !1), this._setPosition(i.$element, h, i.startingPositionLeft, p, i.startingPositionTop)) : i.isHidden || (this.options.hideElement(i.$element), i.isHidden = !0);
      }for (m = this.backgrounds.length - 1; m >= 0; m--) {
        o = this.backgrounds[m], s = o.isFixed ? 0 : 1, u = this.options.horizontalScrolling ? (e + o.horizontalOffset - this.viewportOffsetLeft - o.startingOffsetLeft + o.parentOffsetLeft - o.startingBackgroundPositionLeft) * (s - o.stellarRatio) + "px" : o.startingValueLeft, a = this.options.verticalScrolling ? (t + o.verticalOffset - this.viewportOffsetTop - o.startingOffsetTop + o.parentOffsetTop - o.startingBackgroundPositionTop) * (s - o.stellarRatio) + "px" : o.startingValueTop, c(o.$element, u, a);
      }
    }, _handleScrollEvent: function _handleScrollEvent() {
      var e = this,
          t = !1,
          n = function n() {
        e._repositionElements(), t = !1;
      },
          r = function r() {
        t || (p(n), t = !0);
      };this.$scrollElement.bind("scroll." + this.name, r), r();
    }, _startAnimationLoop: function _startAnimationLoop() {
      var e = this;this._animationLoop = function () {
        p(e._animationLoop), e._repositionElements();
      }, this._animationLoop();
    } }, e.fn[i] = function (t) {
    var n = arguments;if (t === r || (typeof t === "undefined" ? "undefined" : _typeof(t)) == "object") return this.each(function () {
      e.data(this, "plugin_" + i) || e.data(this, "plugin_" + i, new d(this, t));
    });if (typeof t == "string" && t[0] !== "_" && t !== "init") return this.each(function () {
      var r = e.data(this, "plugin_" + i);r instanceof d && typeof r[t] == "function" && r[t].apply(r, Array.prototype.slice.call(n, 1)), t === "destroy" && e.data(this, "plugin_" + i, null);
    });
  }, e[i] = function (n) {
    var r = e(t);return r.stellar.apply(r, Array.prototype.slice.call(arguments, 0));
  }, e[i].scrollProperty = o, e[i].positionProperty = u, t.Stellar = d;
})(jQuery, undefined, document);

/* Easing.Min */
jQuery.easing.jswing = jQuery.easing.swing;jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function swing(e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
  }, easeInQuad: function easeInQuad(e, f, a, h, g) {
    return h * (f /= g) * f + a;
  }, easeOutQuad: function easeOutQuad(e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a;
  }, easeInOutQuad: function easeInOutQuad(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f + a;
    }return -h / 2 * (--f * (f - 2) - 1) + a;
  }, easeInCubic: function easeInCubic(e, f, a, h, g) {
    return h * (f /= g) * f * f + a;
  }, easeOutCubic: function easeOutCubic(e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a;
  }, easeInOutCubic: function easeInOutCubic(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f + a;
    }return h / 2 * ((f -= 2) * f * f + 2) + a;
  }, easeInQuart: function easeInQuart(e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a;
  }, easeOutQuart: function easeOutQuart(e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a;
  }, easeInOutQuart: function easeInOutQuart(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f * f + a;
    }return -h / 2 * ((f -= 2) * f * f * f - 2) + a;
  }, easeInQuint: function easeInQuint(e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a;
  }, easeOutQuint: function easeOutQuint(e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
  }, easeInOutQuint: function easeInOutQuint(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f * f * f + a;
    }return h / 2 * ((f -= 2) * f * f * f * f + 2) + a;
  }, easeInSine: function easeInSine(e, f, a, h, g) {
    return -h * Math.cos(f / g * (Math.PI / 2)) + h + a;
  }, easeOutSine: function easeOutSine(e, f, a, h, g) {
    return h * Math.sin(f / g * (Math.PI / 2)) + a;
  }, easeInOutSine: function easeInOutSine(e, f, a, h, g) {
    return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a;
  }, easeInExpo: function easeInExpo(e, f, a, h, g) {
    return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
  }, easeOutExpo: function easeOutExpo(e, f, a, h, g) {
    return f == g ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a;
  }, easeInOutExpo: function easeInOutExpo(e, f, a, h, g) {
    if (f == 0) {
      return a;
    }if (f == g) {
      return a + h;
    }if ((f /= g / 2) < 1) {
      return h / 2 * Math.pow(2, 10 * (f - 1)) + a;
    }return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a;
  }, easeInCirc: function easeInCirc(e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
  }, easeOutCirc: function easeOutCirc(e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
  }, easeInOutCirc: function easeInOutCirc(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a;
    }return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
  }, easeInElastic: function easeInElastic(f, h, e, l, k) {
    var i = 1.70158;var j = 0;var g = l;if (h == 0) {
      return e;
    }if ((h /= k) == 1) {
      return e + l;
    }if (!j) {
      j = k * 0.3;
    }if (g < Math.abs(l)) {
      g = l;var i = j / 4;
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g);
    }return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
  }, easeOutElastic: function easeOutElastic(f, h, e, l, k) {
    var i = 1.70158;var j = 0;var g = l;if (h == 0) {
      return e;
    }if ((h /= k) == 1) {
      return e + l;
    }if (!j) {
      j = k * 0.3;
    }if (g < Math.abs(l)) {
      g = l;var i = j / 4;
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g);
    }return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e;
  }, easeInOutElastic: function easeInOutElastic(f, h, e, l, k) {
    var i = 1.70158;var j = 0;var g = l;if (h == 0) {
      return e;
    }if ((h /= k / 2) == 2) {
      return e + l;
    }if (!j) {
      j = k * (0.3 * 1.5);
    }if (g < Math.abs(l)) {
      g = l;var i = j / 4;
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g);
    }if (h < 1) {
      return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
    }return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e;
  }, easeInBack: function easeInBack(e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }return i * (f /= h) * f * ((g + 1) * f - g) + a;
  }, easeOutBack: function easeOutBack(e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
  }, easeInOutBack: function easeInOutBack(e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }if ((f /= h / 2) < 1) {
      return i / 2 * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
    }return i / 2 * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
  }, easeInBounce: function easeInBounce(e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
  }, easeOutBounce: function easeOutBounce(e, f, a, h, g) {
    if ((f /= g) < 1 / 2.75) {
      return h * (7.5625 * f * f) + a;
    } else {
      if (f < 2 / 2.75) {
        return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
      } else {
        if (f < 2.5 / 2.75) {
          return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
        } else {
          return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
        }
      }
    }
  }, easeInOutBounce: function easeInOutBounce(e, f, a, h, g) {
    if (f < g / 2) {
      return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
    }return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a;
  } });

/* Wow Animation */
(function () {
  var t,
      e = function e(t, _e) {
    return function () {
      return t.apply(_e, arguments);
    };
  };t = function () {
    function t() {}return t.prototype.extend = function (t, e) {
      var i, n;for (i in t) {
        null != (n = t[i]) && (e[i] = n);
      }return e;
    }, t.prototype.isMobile = function (t) {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
      );
    }, t;
  }(), this.WOW = function () {
    function i(t) {
      null == t && (t = {}), this.scrollCallback = e(this.scrollCallback, this), this.scrollHandler = e(this.scrollHandler, this), this.start = e(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults);
    }return i.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0 }, i.prototype.init = function () {
      var t;return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : document.addEventListener("DOMContentLoaded", this.start);
    }, i.prototype.start = function () {
      var t, e, i, n;if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
        if (this.disabled()) return this.resetStyle();for (e = 0, i = (n = this.boxes).length; e < i; e++) {
          t = n[e], this.applyStyle(t, !0);
        }return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50);
      }
    }, i.prototype.stop = function () {
      if (window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval) return clearInterval(this.interval);
    }, i.prototype.show = function (t) {
      return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass;
    }, i.prototype.applyStyle = function (t, e) {
      var i, n, o;return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), t.setAttribute("style", this.customStyle(e, n, i, o));
    }, i.prototype.resetStyle = function () {
      var t, e, i, n, o;for (o = [], e = 0, i = (n = this.boxes).length; e < i; e++) {
        t = n[e], o.push(t.setAttribute("style", "visibility: visible;"));
      }return o;
    }, i.prototype.customStyle = function (t, e, i, n) {
      var o;return o = t ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;", e && (o += "-webkit-animation-duration: " + e + "; -moz-animation-duration: " + e + "; animation-duration: " + e + ";"), i && (o += "-webkit-animation-delay: " + i + "; -moz-animation-delay: " + i + "; animation-delay: " + i + ";"), n && (o += "-webkit-animation-iteration-count: " + n + "; -moz-animation-iteration-count: " + n + "; animation-iteration-count: " + n + ";"), o;
    }, i.prototype.scrollHandler = function () {
      return this.scrolled = !0;
    }, i.prototype.scrollCallback = function () {
      var t;if (this.scrolled && (this.scrolled = !1, this.boxes = function () {
        var e, i, n, o;for (o = [], e = 0, i = (n = this.boxes).length; e < i; e++) {
          (t = n[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
        }return o;
      }.call(this), !this.boxes.length)) return this.stop();
    }, i.prototype.offsetTop = function (t) {
      var e;for (e = t.offsetTop; t = t.offsetParent;) {
        e += t.offsetTop;
      }return e;
    }, i.prototype.isVisible = function (t) {
      var e, i, n, o, s;return i = t.getAttribute("data-wow-offset") || this.config.offset, o = (s = window.pageYOffset) + this.element.clientHeight - i, e = (n = this.offsetTop(t)) + t.clientHeight, n <= o && e >= s;
    }, i.prototype.util = function () {
      return this._util || (this._util = new t());
    }, i.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    }, i;
  }();
}).call(undefined), wow = new WOW({ animateClass: "animated", offset: 100 }), wow.init();

/* Scroll Reveal */
var isMobile = { Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  }, BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  }, iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  }, Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  }, Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  }, any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  } };!function (t) {
  "use strict";
  function e() {
    var e = o.clientHeight,
        i = t.innerHeight;return i > e ? i : e;
  }function i(t) {
    var e = 0,
        i = 0;do {
      isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft);
    } while (t = t.offsetParent);return { top: e, left: i };
  }function n(n, r) {
    var a = t.pageYOffset,
        o = a + e(),
        s = n.offsetHeight,
        l = i(n).top,
        u = l + s,
        r = r || 0;return o >= l + s * r && u >= a;
  }function r(t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }return t;
  }function a(t) {
    this.options = r(this.defaults, t), this._init();
  }var o = t.document.documentElement;a.prototype = { defaults: { axis: "y", distance: "25px", duration: "0.66s", delay: "0s", viewportFactor: .33 }, _init: function _init() {
      if (!isMobile.any()) {
        var e = this;this.elems = Array.prototype.slice.call(o.querySelectorAll("[data-scrollReveal]")), this.scrolled = !1, this.elems.forEach(function (t, i) {
          e.animate(t);
        });var i = function i() {
          e.scrolled || (e.scrolled = !0, setTimeout(function () {
            e._scrollPage();
          }, 60));
        },
            n = function n() {
          function t() {
            e._scrollPage(), e.resizeTimeout = null;
          }e.resizeTimeout && clearTimeout(e.resizeTimeout), e.resizeTimeout = setTimeout(t, 200);
        };t.addEventListener("scroll", i, !1), t.addEventListener("resize", n, !1);
      }
    }, _scrollPage: function _scrollPage() {
      var t = this;this.elems.forEach(function (e, i) {
        n(e, t.options.viewportFactor) && t.animate(e);
      }), this.scrolled = !1;
    }, parseLanguage: function parseLanguage(t) {
      function e(t) {
        var e = [],
            i = ["from", "the", "and", "then", "but"];return t.forEach(function (t, n) {
          i.indexOf(t) > -1 || e.push(t);
        }), e;
      }var i,
          n = t.getAttribute("data-scrollreveal").split(/[, ]+/),
          r = {};return n = e(n), n.forEach(function (t, e) {
        switch (t) {case "enter":
            return i = n[e + 1], ("top" == i || "bottom" == i) && (r.axis = "y"), void (("left" == i || "right" == i) && (r.axis = "x"));case "after":
            return void (r.delay = n[e + 1]);case "wait":
            return void (r.delay = n[e + 1]);case "move":
            return void (r.distance = n[e + 1]);case "over":
            return void (r.duration = n[e + 1]);case "trigger":
            return void (r.eventName = n[e + 1]);default:
            return;}
      }), ("top" == i || "left" == i) && (r.distance = "-" + this.options.distance), r;
    }, genCSS: function genCSS(t) {
      var e = this.parseLanguage(t),
          i = e.distance || this.options.distance,
          n = e.duration || this.options.duration,
          r = e.delay || this.options.delay,
          a = e.axis || this.options.axis,
          o = "-webkit-transition: all " + n + " ease " + r + ";-moz-transition: all " + n + " ease " + r + ";-o-transition: all " + n + " ease " + r + ";transition: all " + n + " ease " + r + ";",
          s = "-webkit-transform: translate" + a + "(" + i + ");-moz-transform: translate" + a + "(" + i + ");transform: translate" + a + "(" + i + ");opacity: 0;",
          l = "-webkit-transform: translate" + a + "(0);-moz-transform: translate" + a + "(0);transform: translate" + a + "(0);opacity: 1;";return { transition: o, initial: s, target: l, totalDuration: 1e3 * (parseFloat(n) + parseFloat(r)) };
    }, animate: function animate(t) {
      var e = this.genCSS(t);t.getAttribute("data-sr-init") || (t.setAttribute("style", e.initial), t.setAttribute("data-sr-init", !0)), t.getAttribute("data-sr-complete") || n(t, this.options.viewportFactor) && (t.setAttribute("style", e.target + e.transition), setTimeout(function () {
        t.removeAttribute("style"), t.setAttribute("data-sr-complete", !0);
      }, e.totalDuration));
    } }, document.addEventListener("DOMContentLoaded", function (e) {
    t.scrollReveal = new a();
  });
}(window);

//Owl Crousel
"function" !== typeof Object.create && (Object.create = function (f) {
  function g() {}g.prototype = f;return new g();
});
(function (f, g, k) {
  var l = { init: function init(a, b) {
      this.$elem = f(b);this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);this.userOptions = a;this.loadContent();
    }, loadContent: function loadContent() {
      function a(a) {
        var d,
            e = "";if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);else {
          for (d in a.owl) {
            a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
          }b.$elem.html(e);
        }b.logIn();
      }var b = this,
          e;"function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);"string" === typeof b.options.jsonPath ? (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn();
    }, logIn: function logIn() {
      this.$elem.data("owl-originalStyles", this.$elem.attr("style"));this.$elem.data("owl-originalClasses", this.$elem.attr("class"));this.$elem.css({ opacity: 0 });this.orignalItems = this.options.items;this.checkBrowser();this.wrapperWidth = 0;this.checkVisible = null;this.setVars();
    }, setVars: function setVars() {
      if (0 === this.$elem.children().length) return !1;this.baseClass();this.eventTypes();this.$userItems = this.$elem.children();this.itemsAmount = this.$userItems.length;
      this.wrapItems();this.$owlItems = this.$elem.find(".owl-item");this.$owlWrapper = this.$elem.find(".owl-wrapper");this.playDirection = "next";this.prevItem = 0;this.prevArr = [0];this.currentItem = 0;this.customEvents();this.onStartup();
    }, onStartup: function onStartup() {
      this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);!0 === this.options.autoPlay && (this.options.autoPlay = 5E3);this.play();this.$elem.find(".owl-wrapper").css("display", "block");this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();this.onstartup = !1;this.eachMoveUpdate();"function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem]);
    }, eachMoveUpdate: function eachMoveUpdate() {
      !0 === this.options.lazyLoad && this.lazyLoad();!0 === this.options.autoHeight && this.autoHeight();this.onVisibleItems();"function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem]);
    }, updateVars: function updateVars() {
      "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem]);
    }, reload: function reload() {
      var a = this;g.setTimeout(function () {
        a.updateVars();
      }, 0);
    }, watchVisibility: function watchVisibility() {
      var a = this;if (!1 === a.$elem.is(":visible")) a.$elem.css({ opacity: 0 }), g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);else return !1;a.checkVisible = g.setInterval(function () {
        a.$elem.is(":visible") && (a.reload(), a.$elem.animate({ opacity: 1 }, 200), g.clearInterval(a.checkVisible));
      }, 500);
    }, wrapItems: function wrapItems() {
      this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");this.$elem.css("display", "block");
    },
    baseClass: function baseClass() {
      var a = this.$elem.hasClass(this.options.baseClass),
          b = this.$elem.hasClass(this.options.theme);a || this.$elem.addClass(this.options.baseClass);b || this.$elem.addClass(this.options.theme);
    }, updateItems: function updateItems() {
      var a, b;if (!1 === this.options.responsive) return !1;if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;a = f(this.options.responsiveBaseWidth).width();a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);if (!1 !== this.options.itemsCustom) for (this.options.itemsCustom.sort(function (a, b) {
        return a[0] - b[0];
      }), b = 0; b < this.options.itemsCustom.length; b += 1) {
        this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
      } else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount);
    }, response: function response() {
      var a = this,
          b,
          e;if (!0 !== a.options.responsive) return !1;e = f(g).width();a.resizer = function () {
        f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function () {
          e = f(g).width();a.updateVars();
        }, a.options.responsiveRefreshRate));
      };f(g).resize(a.resizer);
    }, updatePosition: function updatePosition() {
      this.jumpTo(this.currentItem);!1 !== this.options.autoPlay && this.checkAp();
    }, appendItemsSizes: function appendItemsSizes() {
      var a = this,
          b = 0,
          e = a.itemsAmount - a.options.items;a.$owlItems.each(function (c) {
        var d = f(this);d.css({ width: a.itemWidth }).data("owl-item", Number(c));if (0 === c % a.options.items || c === e) c > e || (b += 1);d.data("owl-roundPages", b);
      });
    }, appendWrapperSizes: function appendWrapperSizes() {
      this.$owlWrapper.css({ width: this.$owlItems.length * this.itemWidth * 2, left: 0 });this.appendItemsSizes();
    }, calculateAll: function calculateAll() {
      this.calculateWidth();this.appendWrapperSizes();this.loops();this.max();
    }, calculateWidth: function calculateWidth() {
      this.itemWidth = Math.round(this.$elem.width() / this.options.items);
    }, max: function max() {
      var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);return a;
    }, min: function min() {
      return 0;
    }, loops: function loops() {
      var a = 0,
          b = 0,
          e,
          c;this.positionsInArray = [0];this.pagesInArray = [];for (e = 0; e < this.itemsAmount; e += 1) {
        b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]), c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c));
      }
    }, buildControls: function buildControls() {
      if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);!0 === this.options.pagination && this.buildPagination();!0 === this.options.navigation && this.buildButtons();
    }, buildButtons: function buildButtons() {
      var a = this,
          b = f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev = f("<div/>", { "class": "owl-prev", html: a.options.navigationText[0] || "" });a.buttonNext = f("<div/>", { "class": "owl-next", html: a.options.navigationText[1] || "" });b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (a) {
        a.preventDefault();
      });b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (b) {
        b.preventDefault();f(this).hasClass("owl-next") ? a.next() : a.prev();
      });
    }, buildPagination: function buildPagination() {
      var a = this;a.paginationWrapper = f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (b) {
        b.preventDefault();Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0);
      });
    }, updatePagination: function updatePagination() {
      var a, b, e, c, d, g;if (!1 === this.options.pagination) return !1;this.paginationWrapper.html("");a = 0;b = this.itemsAmount - this.itemsAmount % this.options.items;for (c = 0; c < this.itemsAmount; c += 1) {
        0 === c % this.options.items && (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", { "class": "owl-page" }), g = f("<span></span>", { text: !0 === this.options.paginationNumbers ? a : "", "class": !0 === this.options.paginationNumbers ? "owl-numbers" : "" }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
      }this.checkPagination();
    }, checkPagination: function checkPagination() {
      var a = this;if (!1 === a.options.pagination) return !1;a.paginationWrapper.find(".owl-page").each(function () {
        f(this).data("owl-roundPages") === f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"));
      });
    }, checkNavigation: function checkNavigation() {
      if (!1 === this.options.navigation) return !1;!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")));
    }, updateControls: function updateControls() {
      this.updatePagination();this.checkNavigation();this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show());
    }, destroyControls: function destroyControls() {
      this.owlControls && this.owlControls.remove();
    }, next: function next(a) {
      if (this.isTransition) return !1;
      this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";else return this.currentItem = this.maximumItem, !1;this.goTo(this.currentItem, a);
    }, prev: function prev(a) {
      if (this.isTransition) return !1;this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);if (0 > this.currentItem) if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";else return this.currentItem = 0, !1;this.goTo(this.currentItem, a);
    }, goTo: function goTo(a, b, e) {
      var c = this;if (c.isTransition) return !1;"function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);c.currentItem = c.owl.currentItem = a;if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;a = c.positionsInArray[a];!0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function () {
        c.isCss3Finish = !0;
      }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function () {
        c.isCss3Finish = !0;
      }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function () {
        c.isCss3Finish = !0;
      }, c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);c.afterGo();
    }, jumpTo: function jumpTo(a) {
      "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);this.swapSpeed(0);!0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);this.currentItem = this.owl.currentItem = a;this.afterGo();
    }, afterGo: function afterGo() {
      this.prevArr.push(this.currentItem);this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];this.prevArr.shift(0);this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());"function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem]);
    }, stop: function stop() {
      this.apStatus = "stop";g.clearInterval(this.autoPlayInterval);
    },
    checkAp: function checkAp() {
      "stop" !== this.apStatus && this.play();
    }, play: function play() {
      var a = this;a.apStatus = "play";if (!1 === a.options.autoPlay) return !1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval = g.setInterval(function () {
        a.next(!0);
      }, a.options.autoPlay);
    }, swapSpeed: function swapSpeed(a) {
      "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a));
    },
    addCssSpeed: function addCssSpeed(a) {
      return { "-webkit-transition": "all " + a + "ms ease", "-moz-transition": "all " + a + "ms ease", "-o-transition": "all " + a + "ms ease", transition: "all " + a + "ms ease" };
    }, removeTransition: function removeTransition() {
      return { "-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: "" };
    }, doTranslate: function doTranslate(a) {
      return { "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)", "-moz-transform": "translate3d(" + a + "px, 0px, 0px)", "-o-transform": "translate3d(" + a + "px, 0px, 0px)", "-ms-transform": "translate3d(" + a + "px, 0px, 0px)", transform: "translate3d(" + a + "px, 0px,0px)" };
    }, transition3d: function transition3d(a) {
      this.$owlWrapper.css(this.doTranslate(a));
    }, css2move: function css2move(a) {
      this.$owlWrapper.css({ left: a });
    }, css2slide: function css2slide(a, b) {
      var e = this;e.isCssFinish = !1;e.$owlWrapper.stop(!0, !0).animate({ left: a }, { duration: b || e.options.slideSpeed, complete: function complete() {
          e.isCssFinish = !0;
        } });
    }, checkBrowser: function checkBrowser() {
      var a = k.createElement("div");a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
      a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser = { support3d: null !== a && 1 === a.length, isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints };
    }, moveEvents: function moveEvents() {
      if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents();
    }, eventTypes: function eventTypes() {
      var a = ["s", "e", "x"];this.ev_types = {};!0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);this.ev_types.start = a[0];this.ev_types.move = a[1];this.ev_types.end = a[2];
    }, disabledEvents: function disabledEvents() {
      this.$elem.on("dragstart.owl", function (a) {
        a.preventDefault();
      });this.$elem.on("mousedown.disableTextSelect", function (a) {
        return f(a.target).is("input, textarea, select, option");
      });
    },
    gestures: function gestures() {
      function a(a) {
        if (void 0 !== a.touches) return { x: a.touches[0].pageX, y: a.touches[0].pageY };if (void 0 === a.touches) {
          if (void 0 !== a.pageX) return { x: a.pageX, y: a.pageY };if (void 0 === a.pageX) return { x: a.clientX, y: a.clientY };
        }
      }function b(a) {
        "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end));
      }function e(b) {
        b = b.originalEvent || b || g.event;d.newPosX = a(b).x - h.offsetX;d.newPosY = a(b).y - h.offsetY;d.newRelativeX = d.newPosX - h.relativePos;
        "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));(8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);(10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);!0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX);
      }
      function c(a) {
        a = a.originalEvent || a || g.event;var c;a.target = a.target || a.srcElement;h.dragging = !1;!0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function (a) {
          a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable");
        }), a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));b("off");
      }var d = this,
          h = { offsetX: 0, offsetY: 0, baseElWidth: 0, relativePos: 0, position: null, minSwipe: null, maxSwipe: null, sliding: null, dargging: null, targetElement: null };d.isCssFinish = !0;d.$elem.on(d.ev_types.start, ".owl-wrapper", function (c) {
        c = c.originalEvent || c || g.event;var e;if (3 === c.which) return !1;if (!(d.itemsAmount <= d.options.items)) {
          if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
          !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);!0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");d.newPosX = 0;d.newRelativeX = 0;f(this).css(d.removeTransition());e = f(this).position();h.relativePos = e.left;h.offsetX = a(c).x - e.left;h.offsetY = a(c).y - e.top;b("on");h.sliding = !1;h.targetElement = c.target || c.srcElement;
        }
      });
    }, getNewPosition: function getNewPosition() {
      var a = this.closestItem();a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = a = 0);return a;
    }, closestItem: function closestItem() {
      var a = this,
          b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
          e = a.newPosX,
          c = null;f.each(b, function (d, g) {
        e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) : (c = b[d + 1], a.currentItem = d + 1));
      });return a.currentItem;
    }, moveDirection: function moveDirection() {
      var a;0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");return a;
    }, customEvents: function customEvents() {
      var a = this;a.$elem.on("owl.next", function () {
        a.next();
      });a.$elem.on("owl.prev", function () {
        a.prev();
      });a.$elem.on("owl.play", function (b, e) {
        a.options.autoPlay = e;a.play();a.hoverStatus = "play";
      });a.$elem.on("owl.stop", function () {
        a.stop();a.hoverStatus = "stop";
      });a.$elem.on("owl.goTo", function (b, e) {
        a.goTo(e);
      });
      a.$elem.on("owl.jumpTo", function (b, e) {
        a.jumpTo(e);
      });
    }, stopOnHover: function stopOnHover() {
      var a = this;!0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function () {
        a.stop();
      }), a.$elem.on("mouseout", function () {
        "stop" !== a.hoverStatus && a.play();
      }));
    }, lazyLoad: function lazyLoad() {
      var a, b, e, c, d;if (!1 === this.options.lazyLoad) return !1;for (a = 0; a < this.itemsAmount; a += 1) {
        b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ? b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)));
      }
    }, lazyPreload: function lazyPreload(a, b) {
      function e() {
        a.data("owl-loaded", "loaded").removeClass("loading");b.removeAttr("data-src");"fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();"function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem]);
      }function c() {
        f += 1;d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e();
      }var d = this,
          f = 0,
          k;"DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");c();
    }, autoHeight: function autoHeight() {
      function a() {
        var a = f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height", a + "px");e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function () {
          e.wrapperOuter.addClass("autoHeight");
        }, 0);
      }function b() {
        d += 1;e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b, 100) : e.wrapperOuter.css("height", "");
      }var e = this,
          c = f(e.$owlItems[e.currentItem]).find("img"),
          d;void 0 !== c.get(0) ? (d = 0, b()) : a();
    }, completeImg: function completeImg(a) {
      return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0;
    }, onVisibleItems: function onVisibleItems() {
      var a;!0 === this.options.addClassActive && this.$owlItems.removeClass("active");this.visibleItems = [];for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) {
        this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
      }this.owl.visibleItems = this.visibleItems;
    }, transitionTypes: function transitionTypes(a) {
      this.outClass = "owl-" + a + "-out";this.inClass = "owl-" + a + "-in";
    }, singleItemTransition: function singleItemTransition() {
      var a = this,
          b = a.outClass,
          e = a.inClass,
          c = a.$owlItems.eq(a.currentItem),
          d = a.$owlItems.eq(a.prevItem),
          f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
          g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;a.isTransition = !0;a.$owlWrapper.addClass("owl-origin").css({ "-webkit-transform-origin": g + "px", "-moz-perspective-origin": g + "px", "perspective-origin": g + "px" });d.css({ position: "relative", left: f + "px" }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
        a.endPrev = !0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d, b);
      });c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
        a.endCurrent = !0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c, e);
      });
    }, clearTransStyle: function clearTransStyle(a, b) {
      a.css({ position: "", left: "" }).removeClass(b);this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1);
    }, owlStatus: function owlStatus() {
      this.owl = { userOptions: this.userOptions, baseElement: this.$elem, userItems: this.$userItems, owlItems: this.$owlItems, currentItem: this.currentItem, prevItem: this.prevItem, visibleItems: this.visibleItems, isTouch: this.browser.isTouch, browser: this.browser, dragDirection: this.dragDirection };
    }, clearEvents: function clearEvents() {
      this.$elem.off(".owl owl mousedown.disableTextSelect");
      f(k).off(".owl owl");f(g).off("resize", this.resizer);
    }, unWrap: function unWrap() {
      0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());this.clearEvents();this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"));
    }, destroy: function destroy() {
      this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData();
    }, reinit: function reinit(a) {
      a = f.extend({}, this.userOptions, a);this.unWrap();this.init(a, this.$elem);
    }, addItem: function addItem(a, b) {
      var e;if (!a) return !1;if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;this.unWrap();e = void 0 === b || -1 === b ? -1 : b;e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);this.setVars();
    }, removeItem: function removeItem(a) {
      if (0 === this.$elem.children().length) return !1;a = void 0 === a || -1 === a ? -1 : a;this.unWrap();this.$userItems.eq(a).remove();this.setVars();
    } };f.fn.owlCarousel = function (a) {
    return this.each(function () {
      if (!0 === f(this).data("owl-init")) return !1;f(this).data("owl-init", !0);var b = Object.create(l);b.init(a, this);f.data(this, "owlCarousel", b);
    });
  };f.fn.owlCarousel.options = { items: 5, itemsCustom: !1, itemsDesktop: [1199, 4], itemsDesktopSmall: [979, 3], itemsTablet: [768, 2], itemsTabletSmall: !1, itemsMobile: [479, 1], singleItem: !1, itemsScaleUp: !1, slideSpeed: 200, paginationSpeed: 800, rewindSpeed: 1E3, autoPlay: !1, stopOnHover: !1, navigation: !1, navigationText: ["prev", "next"], rewindNav: !0, scrollPerPage: !1, pagination: !0, paginationNumbers: !1,
    responsive: !0, responsiveRefreshRate: 200, responsiveBaseWidth: g, baseClass: "owl-carousel", theme: "owl-theme", lazyLoad: !1, lazyFollow: !0, lazyEffect: "fade", autoHeight: !1, jsonPath: !1, jsonSuccess: !1, dragBeforeAnimFinish: !0, mouseDrag: !0, touchDrag: !0, addClassActive: !1, transitionStyle: !1, beforeUpdate: !1, afterUpdate: !1, beforeInit: !1, afterInit: !1, beforeMove: !1, afterMove: !1, afterAction: !1, startDragging: !1, afterLazyLoad: !1 };
})(jQuery, window, document);

/*!
 * Lightbox v2.8.2
 */

!function (a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b(require("jquery")) : a.lightbox = b(a.jQuery);
}(undefined, function (a) {
  function b(b) {
    this.album = [], this.currentImageIndex = void 0, this.init(), this.options = a.extend({}, this.constructor.defaults), this.option(b);
  }return b.defaults = { albumLabel: "Image %1 of %2", alwaysShowNavOnTouchDevices: !1, fadeDuration: 500, fitImagesInViewport: !0, positionFromTop: 50, resizeDuration: 700, showImageNumberLabel: !0, wrapAround: !1, disableScrolling: !1 }, b.prototype.option = function (b) {
    a.extend(this.options, b);
  }, b.prototype.imageCountLabel = function (a, b) {
    return this.options.albumLabel.replace(/%1/g, a).replace(/%2/g, b);
  }, b.prototype.init = function () {
    this.enable(), this.build();
  }, b.prototype.enable = function () {
    var b = this;a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function (c) {
      return b.start(a(c.currentTarget)), !1;
    });
  }, b.prototype.build = function () {
    var b = this;a('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(a("body")), this.$lightbox = a("#lightbox"), this.$overlay = a("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function () {
      return b.end(), !1;
    }), this.$lightbox.hide().on("click", function (c) {
      return "lightbox" === a(c.target).attr("id") && b.end(), !1;
    }), this.$outerContainer.on("click", function (c) {
      return "lightbox" === a(c.target).attr("id") && b.end(), !1;
    }), this.$lightbox.find(".lb-prev").on("click", function () {
      return 0 === b.currentImageIndex ? b.changeImage(b.album.length - 1) : b.changeImage(b.currentImageIndex - 1), !1;
    }), this.$lightbox.find(".lb-next").on("click", function () {
      return b.currentImageIndex === b.album.length - 1 ? b.changeImage(0) : b.changeImage(b.currentImageIndex + 1), !1;
    }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function () {
      return b.end(), !1;
    });
  }, b.prototype.start = function (b) {
    function c(a) {
      d.album.push({ link: a.attr("href"), title: a.attr("data-title") || a.attr("title") });
    }var d = this,
        e = a(window);e.on("resize", a.proxy(this.sizeOverlay, this)), a("select, object, embed").css({ visibility: "hidden" }), this.sizeOverlay(), this.album = [];var f,
        g = 0,
        h = b.attr("data-lightbox");if (h) {
      f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]');for (var i = 0; i < f.length; i = ++i) {
        c(a(f[i])), f[i] === b[0] && (g = i);
      }
    } else if ("lightbox" === b.attr("rel")) c(b);else {
      f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');for (var j = 0; j < f.length; j = ++j) {
        c(a(f[j])), f[j] === b[0] && (g = j);
      }
    }var k = e.scrollTop() + this.options.positionFromTop,
        l = e.scrollLeft();this.$lightbox.css({ top: k + "px", left: l + "px" }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && a("body").addClass("lb-disable-scrolling"), this.changeImage(g);
  }, b.prototype.changeImage = function (b) {
    var c = this;this.disableKeyboardNav();var d = this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration), a(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");var e = new Image();e.onload = function () {
      var f, g, h, i, j, k, l;d.attr("src", c.album[b].link), f = a(e), d.width(e.width), d.height(e.height), c.options.fitImagesInViewport && (l = a(window).width(), k = a(window).height(), j = l - c.containerLeftPadding - c.containerRightPadding - 20, i = k - c.containerTopPadding - c.containerBottomPadding - 120, c.options.maxWidth && c.options.maxWidth < j && (j = c.options.maxWidth), c.options.maxHeight && c.options.maxHeight < j && (i = c.options.maxHeight), (e.width > j || e.height > i) && (e.width / j > e.height / i ? (h = j, g = parseInt(e.height / (e.width / h), 10), d.width(h), d.height(g)) : (g = i, h = parseInt(e.width / (e.height / g), 10), d.width(h), d.height(g)))), c.sizeContainer(d.width(), d.height());
    }, e.src = this.album[b].link, this.currentImageIndex = b;
  }, b.prototype.sizeOverlay = function () {
    this.$overlay.width(a(document).width()).height(a(document).height());
  }, b.prototype.sizeContainer = function (a, b) {
    function c() {
      d.$lightbox.find(".lb-dataContainer").width(g), d.$lightbox.find(".lb-prevLink").height(h), d.$lightbox.find(".lb-nextLink").height(h), d.showImage();
    }var d = this,
        e = this.$outerContainer.outerWidth(),
        f = this.$outerContainer.outerHeight(),
        g = a + this.containerLeftPadding + this.containerRightPadding,
        h = b + this.containerTopPadding + this.containerBottomPadding;e !== g || f !== h ? this.$outerContainer.animate({ width: g, height: h }, this.options.resizeDuration, "swing", function () {
      c();
    }) : c();
  }, b.prototype.showImage = function () {
    this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav();
  }, b.prototype.updateNav = function () {
    var a = !1;try {
      document.createEvent("TouchEvent"), a = this.options.alwaysShowNavOnTouchDevices ? !0 : !1;
    } catch (b) {}this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a && this.$lightbox.find(".lb-next").css("opacity", "1"))));
  }, b.prototype.updateDetails = function () {
    var b = this;if ("undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function (b) {
      void 0 !== a(this).attr("target") ? window.open(a(this).attr("href"), a(this).attr("target")) : location.href = a(this).attr("href");
    }), this.album.length > 1 && this.options.showImageNumberLabel) {
      var c = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);this.$lightbox.find(".lb-number").text(c).fadeIn("fast");
    } else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function () {
      return b.sizeOverlay();
    });
  }, b.prototype.preloadNeighboringImages = function () {
    if (this.album.length > this.currentImageIndex + 1) {
      var a = new Image();a.src = this.album[this.currentImageIndex + 1].link;
    }if (this.currentImageIndex > 0) {
      var b = new Image();b.src = this.album[this.currentImageIndex - 1].link;
    }
  }, b.prototype.enableKeyboardNav = function () {
    a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this));
  }, b.prototype.disableKeyboardNav = function () {
    a(document).off(".keyboard");
  }, b.prototype.keyboardAction = function (a) {
    var b = 27,
        c = 37,
        d = 39,
        e = a.keyCode,
        f = String.fromCharCode(e).toLowerCase();e === b || f.match(/x|o|c/) ? this.end() : "p" === f || e === c ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : ("n" === f || e === d) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0));
  }, b.prototype.end = function () {
    this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), a("select, object, embed").css({ visibility: "visible" }), this.options.disableScrolling && a("body").removeClass("lb-disable-scrolling");
  }, new b();
});

/*!
 * Cookies
 */
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : jQuery);
}(function (e) {
  function o(e) {
    return u.raw ? e : encodeURIComponent(e);
  }function i(e) {
    return u.raw ? e : decodeURIComponent(e);
  }function n(e) {
    return o(u.json ? JSON.stringify(e) : String(e));
  }function r(e) {
    0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));try {
      return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e;
    } catch (e) {}
  }function t(o, i) {
    var n = u.raw ? o : r(o);return e.isFunction(i) ? i(n) : n;
  }var c = /\+/g,
      u = e.cookie = function (r, c, s) {
    if (void 0 !== c && !e.isFunction(c)) {
      if ("number" == typeof (s = e.extend({}, u.defaults, s)).expires) {
        var d = s.expires,
            a = s.expires = new Date();a.setTime(+a + 864e5 * d);
      }return document.cookie = [o(r), "=", n(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("");
    }for (var f = r ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], k = 0, m = p.length; k < m; k++) {
      var x = p[k].split("="),
          l = i(x.shift()),
          v = x.join("=");if (r && r === l) {
        f = t(v, c);break;
      }r || void 0 === (v = t(v)) || (f[l] = v);
    }return f;
  };u.defaults = {}, e.removeCookie = function (o, i) {
    return void 0 !== e.cookie(o) && (e.cookie(o, "", e.extend({}, i, { expires: -1 })), !e.cookie(o));
  };
}), $(".close-cookie-warning").on("click", function () {
  $.cookie("HideCookieMessage", "true", { expires: 120, path: "/" }), $("div.cookies").hide();
}), function (e) {
  e.cookie("HideCookieMessage") ? e(".cookies").hide() : e(".cookies").show();
}(jQuery);