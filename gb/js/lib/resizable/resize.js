/* w2ui 1.4.2 (c) http://w2ui.com, vitmalina@gmail.com */
var w2ui = w2ui || {},
    w2obj = w2obj || {},
    w2utils = function() {
        function a(a) {
            var b = /^[-+]?[0-9]+$/;
            return b.test(a)
        }

        function b(a) {
            return "string" == typeof a && (a = a.replace(w2utils.settings.decimalSymbol, ".")), ("number" == typeof a || "string" == typeof a && "" !== a) && !isNaN(Number(a))
        }

        function c(a) {
            var b = w2utils.settings,
                c = new RegExp("^" + (b.currencyPrefix ? "\\" + b.currencyPrefix + "?" : "") + "[-+]?[0-9]*[\\" + w2utils.settings.decimalSymbol + "]?[0-9]+" + (b.currencySuffix ? "\\" + b.currencySuffix + "?" : "") + "$", "i");
            return "string" == typeof a && (a = a.replace(new RegExp(b.groupSymbol, "g"), "")), "object" == typeof a || "" === a ? !1 : c.test(a)
        }

        function d(a) {
            var b = /^[a-fA-F0-9]+$/;
            return b.test(a)
        }

        function e(a) {
            var b = /^[a-zA-Z0-9_-]+$/;
            return b.test(a)
        }

        function f(a) {
            var b = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return b.test(a)
        }

        function g(b, c, d) {
            if (!b) return !1;
            var e, f, g, h = "Invalid Date";
            if (null == c && (c = w2utils.settings.date_format), "function" == typeof b.getUTCFullYear && "function" == typeof b.getUTCMonth && "function" == typeof b.getUTCDate) g = b.getUTCFullYear(), e = b.getUTCMonth(), f = b.getUTCDate();
            else if ("function" == typeof b.getFullYear && "function" == typeof b.getMonth && "function" == typeof b.getDate) g = b.getFullYear(), e = b.getMonth(), f = b.getDate();
            else {
                if (b = String(b), RegExp("mon", "ig").test(c)) {
                    c = c.replace(/month/gi, "m").replace(/mon/gi, "m").replace(/dd/gi, "d").replace(/[, ]/gi, "/").replace(/\/\//g, "/").toLowerCase(), b = b.replace(/[, ]/gi, "/").replace(/\/\//g, "/").toLowerCase();
                    for (var i = 0, j = w2utils.settings.fullmonths.length; j > i; i++) {
                        var k = w2utils.settings.fullmonths[i];
                        b = b.replace(RegExp(k, "ig"), parseInt(i) + 1).replace(RegExp(k.substr(0, 3), "ig"), parseInt(i) + 1)
                    }
                }
                var l = b.replace(/-/g, "/").replace(/\./g, "/").toLowerCase().split("/"),
                    m = c.replace(/-/g, "/").replace(/\./g, "/").toLowerCase();
                "mm/dd/yyyy" === m && (e = l[0], f = l[1], g = l[2]), "m/d/yyyy" === m && (e = l[0], f = l[1], g = l[2]), "dd/mm/yyyy" === m && (e = l[1], f = l[0], g = l[2]), "d/m/yyyy" === m && (e = l[1], f = l[0], g = l[2]), "yyyy/dd/mm" === m && (e = l[2], f = l[1], g = l[0]), "yyyy/d/m" === m && (e = l[2], f = l[1], g = l[0]), "yyyy/mm/dd" === m && (e = l[1], f = l[2], g = l[0]), "yyyy/m/d" === m && (e = l[1], f = l[2], g = l[0]), "mm/dd/yy" === m && (e = l[0], f = l[1], g = l[2]), "m/d/yy" === m && (e = l[0], f = l[1], g = parseInt(l[2]) + 1900), "dd/mm/yy" === m && (e = l[1], f = l[0], g = parseInt(l[2]) + 1900), "d/m/yy" === m && (e = l[1], f = l[0], g = parseInt(l[2]) + 1900), "yy/dd/mm" === m && (e = l[2], f = l[1], g = parseInt(l[0]) + 1900), "yy/d/m" === m && (e = l[2], f = l[1], g = parseInt(l[0]) + 1900), "yy/mm/dd" === m && (e = l[1], f = l[2], g = parseInt(l[0]) + 1900), "yy/m/d" === m && (e = l[1], f = l[2], g = parseInt(l[0]) + 1900)
            }
            return a(g) && a(e) && a(f) ? (g = +g, e = +e, f = +f, h = new Date(g, e - 1, f), null == e ? !1 : "Invalid Date" === h ? !1 : h.getMonth() + 1 !== e || h.getDate() !== f || h.getFullYear() !== g ? !1 : d === !0 ? h : !0) : !1
        }

        function h(a, b) {
            if (null == a) return !1;
            var c, d;
            a = String(a), a = a.toUpperCase(), d = a.indexOf("PM") >= 0;
            var e = d || a.indexOf("AM") >= 0;
            c = e ? 12 : 24, a = a.replace("AM", "").replace("PM", ""), a = $.trim(a);
            var f = a.split(":"),
                g = parseInt(f[0] || 0),
                h = parseInt(f[1] || 0);
            return e && 1 === f.length || 2 === f.length ? "" === f[0] || 0 > g || g > c || !this.isInt(f[0]) || f[0].length > 2 ? !1 : 2 === f.length && ("" === f[1] || 0 > h || h > 59 || !this.isInt(f[1]) || 2 !== f[1].length) ? !1 : e || c !== g || 0 === h ? e && 1 === f.length && 0 === g ? !1 : b === !0 ? (d && (g += 12), {
                hours: g,
                minutes: h
            }) : !0 : !1 : !1
        }

        function i(a) {
            if ("" === a || null == a) return "";
            var b = new Date(a);
            if (w2utils.isInt(a) && (b = new Date(Number(a))), "Invalid Date" === b) return "";
            var c = new Date,
                d = (c.getTime() - b.getTime()) / 1e3,
                e = "",
                f = "";
            return 0 > d ? (e = '<span style="color: #aaa">future</span>', f = "") : 60 > d ? (e = Math.floor(d), f = "sec", 0 > d && (e = 0, f = "sec")) : 3600 > d ? (e = Math.floor(d / 60), f = "min") : 86400 > d ? (e = Math.floor(d / 60 / 60), f = "hour") : 2592e3 > d ? (e = Math.floor(d / 24 / 60 / 60), f = "day") : 31557600 > d ? (e = Math.floor(d / 365.25 / 24 / 60 / 60 * 10) / 10, f = "month") : d >= 31557600 && (e = Math.floor(d / 365.25 / 24 / 60 / 60 * 10) / 10, f = "year"), e + " " + f + (e > 1 ? "s" : "")
        }

        function j(a) {
            if ("" === a || null == a) return "";
            var b = new Date(a);
            if (w2utils.isInt(a) && (b = new Date(Number(a))), "Invalid Date" === b) return "";
            var c = w2utils.settings.shortmonths,
                d = new Date,
                e = new Date;
            e.setTime(e.getTime() - 864e5);
            var f = c[b.getMonth()] + " " + b.getDate() + ", " + b.getFullYear(),
                g = c[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear(),
                h = c[e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear(),
                i = b.getHours() - (b.getHours() > 12 ? 12 : 0) + ":" + (b.getMinutes() < 10 ? "0" : "") + b.getMinutes() + " " + (b.getHours() >= 12 ? "pm" : "am"),
                j = b.getHours() - (b.getHours() > 12 ? 12 : 0) + ":" + (b.getMinutes() < 10 ? "0" : "") + b.getMinutes() + ":" + (b.getSeconds() < 10 ? "0" : "") + b.getSeconds() + " " + (b.getHours() >= 12 ? "pm" : "am"),
                k = f;
            return f === g && (k = i), f === h && (k = w2utils.lang("Yesterday")), '<span title="' + f + " " + j + '">' + k + "</span>"
        }

        function k(a) {
            if (!w2utils.isFloat(a) || "" === a) return "";
            if (a = parseFloat(a), 0 === a) return 0;
            var b = ["Bt", "KB", "MB", "GB", "TB"],
                c = parseInt(Math.floor(Math.log(a) / Math.log(1024)));
            return (Math.floor(a / Math.pow(1024, c) * 10) / 10).toFixed(0 === c ? 0 : 1) + " " + b[c]
        }

        function l(a, b, c) {
            var d = "";
            return null == b && (b = w2utils.settings.groupSymbol || ","), null == c && (c = w2utils.settings.decimalSymbol || "."), (w2utils.isFloat(a) || w2utils.isInt(a) || w2utils.isMoney(a)) && (E = String(a).split("."), d = String(E[0]).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + b), null != E[1] && (d += w2utils.settings.decimalSymbol + E[1])), d
        }

        function m(a, b) {
            w2utils.settings.shortmonths, w2utils.settings.fullmonths;
            if (b || (b = this.settings.date_format), "" === a || null == a || "object" == typeof a && !a.getMonth) return "";
            var c = new Date(a);
            if (w2utils.isInt(a) && (c = new Date(Number(a))), "Invalid Date" === c) return "";
            var d = c.getFullYear(),
                e = c.getMonth(),
                f = c.getDate();
            return b.toLowerCase().replace("month", w2utils.settings.fullmonths[e]).replace("mon", w2utils.settings.shortmonths[e]).replace(/yyyy/g, d).replace(/yyy/g, d).replace(/yy/g, d > 2e3 ? 100 + parseInt(String(d).substr(2)) : String(d).substr(2)).replace(/(^|[^a-z$])y/g, "$1" + d).replace(/mm/g, (10 > e + 1 ? "0" : "") + (e + 1)).replace(/dd/g, (10 > f ? "0" : "") + f).replace(/th/g, 1 == f ? "st" : "th").replace(/th/g, 2 == f ? "nd" : "th").replace(/th/g, 3 == f ? "rd" : "th").replace(/(^|[^a-z$])m/g, "$1" + (e + 1)).replace(/(^|[^a-z$])d/g, "$1" + f)
        }

        function n(a, b) {
            w2utils.settings.shortmonths, w2utils.settings.fullmonths;
            if (b || (b = this.settings.time_format), "" === a || null == a || "object" == typeof a && !a.getMonth) return "";
            var c = new Date(a);
            if (w2utils.isInt(a) && (c = new Date(Number(a))), w2utils.isTime(a)) {
                var d = w2utils.isTime(a, !0);
                c = new Date, c.setHours(d.hours), c.setMinutes(d.minutes)
            }
            if ("Invalid Date" === c) return "";
            var e = "am",
                f = c.getHours(),
                g = c.getHours(),
                h = c.getMinutes(),
                i = c.getSeconds();
            return 10 > h && (h = "0" + h), 10 > i && (i = "0" + i), (-1 !== b.indexOf("am") || -1 !== b.indexOf("pm")) && (f >= 12 && (e = "pm"), f > 12 && (f -= 12)), b.toLowerCase().replace("am", e).replace("pm", e).replace("hhh", 10 > f ? "0" + f : f).replace("hh24", 10 > g ? "0" + g : g).replace("h24", g).replace("hh", f).replace("mm", h).replace("mi", h).replace("ss", i).replace(/(^|[^a-z$])h/g, "$1" + f).replace(/(^|[^a-z$])m/g, "$1" + h).replace(/(^|[^a-z$])s/g, "$1" + i)
        }

        function o(a, b) {
            var c;
            return "" === a || null == a || "object" == typeof a && !a.getMonth ? "" : (c = "string" != typeof b ? [this.settings.date_format, this.settings.time_format] : b.split("|"), this.formatDate(a, c[0]) + " " + this.formatTime(a, c[1]))
        }

        function p(a) {
            if (null === a) return a;
            switch (typeof a) {
                case "number":
                    break;
                case "string":
                    a = $.trim(String(a).replace(/(<([^>]+)>)/gi, ""));
                    break;
                case "object":
                    for (var b in a) a[b] = this.stripTags(a[b])
            }
            return a
        }

        function q(a) {
            if (null === a) return a;
            switch (typeof a) {
                case "number":
                    break;
                case "string":
                    a = String(a).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
                    break;
                case "object":
                    for (var b in a) a[b] = this.encodeTags(a[b])
            }
            return a
        }

        function r(a) {
            return "" === a || null == a ? "" : String(a).replace(/([;&,\.\+\*\~'`:"\!\^#$%@\[\]\(\)=<>\|\/? {}\\])/g, "\\$1")
        }

        function s(a) {
            function b(a) {
                for (var a = String(a).replace(/\r\n/g, "\n"), b = "", c = 0; c < a.length; c++) {
                    var d = a.charCodeAt(c);
                    128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
                }
                return b
            }
            var c, d, e, f, g, h, i, j = "",
                k = 0,
                l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            for (a = b(a); k < a.length;) c = a.charCodeAt(k++), d = a.charCodeAt(k++), e = a.charCodeAt(k++), f = c >> 2, g = (3 & c) << 4 | d >> 4, h = (15 & d) << 2 | e >> 6, i = 63 & e, isNaN(d) ? h = i = 64 : isNaN(e) && (i = 64), j = j + l.charAt(f) + l.charAt(g) + l.charAt(h) + l.charAt(i);
            return j
        }

        function t(a) {
            function b(a) {
                for (var b, c, d = "", e = 0, f = 0; e < a.length;) f = a.charCodeAt(e), 128 > f ? (d += String.fromCharCode(f), e++) : f > 191 && 224 > f ? (b = a.charCodeAt(e + 1), d += String.fromCharCode((31 & f) << 6 | 63 & b), e += 2) : (b = a.charCodeAt(e + 1), c = a.charCodeAt(e + 2), d += String.fromCharCode((15 & f) << 12 | (63 & b) << 6 | 63 & c), e += 3);
                return d
            }
            var c, d, e, f, g, h, i, j = "",
                k = 0,
                l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < a.length;) f = l.indexOf(a.charAt(k++)), g = l.indexOf(a.charAt(k++)), h = l.indexOf(a.charAt(k++)), i = l.indexOf(a.charAt(k++)), c = f << 2 | g >> 4, d = (15 & g) << 4 | h >> 2, e = (3 & h) << 6 | i, j += String.fromCharCode(c), 64 !== h && (j += String.fromCharCode(d)), 64 !== i && (j += String.fromCharCode(e));
            return j = b(j)
        }

        function u(a, b, c, d) {
            function e(a, b, c) {
                var d = !!window.webkitURL;
                return d || "undefined" == typeof c || (b = c), ";" + a + ": " + b + "; -webkit-" + a + ": " + b + "; -moz-" + a + ": " + b + "; -ms-" + a + ": " + b + "; -o-" + a + ": " + b + ";"
            }
            var f = $(a).width(),
                g = $(a).height(),
                h = .5;
            if (!a || !b) return void console.log("ERROR: Cannot do transition when one of the divs is null");
            switch (a.parentNode.style.cssText += e("perspective", "700px") + "; overflow: hidden;", a.style.cssText += "; position: absolute; z-index: 1019; " + e("backface-visibility", "hidden"), b.style.cssText += "; position: absolute; z-index: 1020; " + e("backface-visibility", "hidden"), c) {
                case "slide-left":
                    a.style.cssText += "overflow: hidden; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)"), b.style.cssText += "overflow: hidden; " + e("transform", "translate3d(" + f + "px, 0, 0)", "translate(" + f + "px, 0)"), $(b).show(), window.setTimeout(function() {
                        b.style.cssText += e("transition", h + "s") + ";" + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)"), a.style.cssText += e("transition", h + "s") + ";" + e("transform", "translate3d(-" + f + "px, 0, 0)", "translate(-" + f + "px, 0)")
                    }, 1);
                    break;
                case "slide-right":
                    a.style.cssText += "overflow: hidden; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)"), b.style.cssText += "overflow: hidden; " + e("transform", "translate3d(-" + f + "px, 0, 0)", "translate(-" + f + "px, 0)"), $(b).show(), window.setTimeout(function() {
                        b.style.cssText += e("transition", h + "s") + "; " + e("transform", "translate3d(0px, 0, 0)", "translate(0px, 0)"), a.style.cssText += e("transition", h + "s") + "; " + e("transform", "translate3d(" + f + "px, 0, 0)", "translate(" + f + "px, 0)")
                    }, 1);
                    break;
                case "slide-down":
                    a.style.cssText += "overflow: hidden; z-index: 1; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)"), b.style.cssText += "overflow: hidden; z-index: 0; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)"), $(b).show(), window.setTimeout(function() {
                        b.style.cssText += e("transition", h + "s") + "; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)"), a.style.cssText += e("transition", h + "s") + "; " + e("transform", "translate3d(0, " + g + "px, 0)", "translate(0, " + g + "px)")
                    }, 1);
                    break;
                case "slide-up":
                    a.style.cssText += "overflow: hidden; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)"), b.style.cssText += "overflow: hidden; " + e("transform", "translate3d(0, " + g + "px, 0)", "translate(0, " + g + "px)"), $(b).show(), window.setTimeout(function() {
                        b.style.cssText += e("transition", h + "s") + "; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)"), a.style.cssText += e("transition", h + "s") + "; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)")
                    }, 1);
                    break;
                case "flip-left":
                    a.style.cssText += "overflow: hidden; " + e("transform", "rotateY(0deg)"), b.style.cssText += "overflow: hidden; " + e("transform", "rotateY(-180deg)"), $(b).show(), window.setTimeout(function() {
                        b.style.cssText += e("transition", h + "s") + "; " + e("transform", "rotateY(0deg)"), a.style.cssText += e("transition", h + "s") + "; " + e("transform", "rotateY(180deg)")
                    }, 1);
                    break;
                case "flip-right":
                    a.style.cssText += "overflow: hidden; " + e("transform", "rotateY(0deg)"), b.style.cssText += "overflow: hidden; " + e("transform", "rotateY(180deg)"), $(b).show(), window.setTimeout(function() {
                        b.style.cssText += e("transition", h + "s") + "; " + e("transform", "rotateY(0deg)"), a.style.cssText += e("transition", h + "s") + "; " + e("transform", "rotateY(-180deg)")
                    }, 1);
                    break;
                case "flip-down":
                    a.style.cssText += "overflow: hidden; " + e("transform", "rotateX(0deg)"), b.style.cssText += "overflow: hidden; " + e("transform", "rotateX(180deg)"), $(b).show(), window.setTimeout(function() {
                        b.style.cssText += e("transition", h + "s") + "; " + e("transform", "rotateX(0deg)"), a.style.cssText += e("transition", h + "s") + "; " + e("transform", "rotateX(-180deg)")
                    }, 1);
                    break;
                case "flip-up":
                    a.style.cssText += "overflow: hidden; " + e("transform", "rotateX(0deg)"), b.style.cssText += "overflow: hidden; " + e("transform", "rotateX(-180deg)"), $(b).show(), window.setTimeout(function() {
                        b.style.cssText += e("transition", h + "s") + "; " + e("transform", "rotateX(0deg)"), a.style.cssText += e("transition", h + "s") + "; " + e("transform", "rotateX(180deg)")
                    }, 1);
                    break;
                case "pop-in":
                    a.style.cssText += "overflow: hidden; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)"), b.style.cssText += "overflow: hidden; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)") + "; " + e("transform", "scale(.8)") + "; opacity: 0;", $(b).show(), window.setTimeout(function() {
                        b.style.cssText += e("transition", h + "s") + "; " + e("transform", "scale(1)") + "; opacity: 1;", a.style.cssText += e("transition", h + "s") + ";"
                    }, 1);
                    break;
                case "pop-out":
                    a.style.cssText += "overflow: hidden; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)") + "; " + e("transform", "scale(1)") + "; opacity: 1;", b.style.cssText += "overflow: hidden; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)") + "; opacity: 0;", $(b).show(), window.setTimeout(function() {
                        b.style.cssText += e("transition", h + "s") + "; opacity: 1;", a.style.cssText += e("transition", h + "s") + "; " + e("transform", "scale(1.7)") + "; opacity: 0;"
                    }, 1);
                    break;
                default:
                    a.style.cssText += "overflow: hidden; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)"), b.style.cssText += "overflow: hidden; " + e("transform", "translate3d(0, 0, 0)", "translate(0, 0)") + "; opacity: 0;", $(b).show(), window.setTimeout(function() {
                        b.style.cssText += e("transition", h + "s") + "; opacity: 1;", a.style.cssText += e("transition", h + "s")
                    }, 1)
            }
            setTimeout(function() {
                "slide-down" === c && ($(a).css("z-index", "1019"), $(b).css("z-index", "1020")), b && $(b).css({
                    opacity: "1",
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-ms-transition": "",
                    "-o-transition": "",
                    "-webkit-transform": "",
                    "-moz-transform": "",
                    "-ms-transform": "",
                    "-o-transform": "",
                    "-webkit-backface-visibility": "",
                    "-moz-backface-visibility": "",
                    "-ms-backface-visibility": "",
                    "-o-backface-visibility": ""
                }), a && ($(a).css({
                    opacity: "1",
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-ms-transition": "",
                    "-o-transition": "",
                    "-webkit-transform": "",
                    "-moz-transform": "",
                    "-ms-transform": "",
                    "-o-transform": "",
                    "-webkit-backface-visibility": "",
                    "-moz-backface-visibility": "",
                    "-ms-backface-visibility": "",
                    "-o-backface-visibility": ""
                }), a.parentNode && $(a.parentNode).css({
                    "-webkit-perspective": "",
                    "-moz-perspective": "",
                    "-ms-perspective": "",
                    "-o-perspective": ""
                })), "function" == typeof d && d()
            }, 1e3 * h)
        }

        function v(a, b, c) {
            var d = {};
            "object" == typeof b ? d = b : (d.msg = b, d.spinner = c), d.msg || 0 === d.msg || (d.msg = ""), w2utils.unlock(a), $(a).prepend('<div class="w2ui-lock"></div><div class="w2ui-lock-msg"></div>');
            var e = $(a).find(".w2ui-lock"),
                f = $(a).find(".w2ui-lock-msg");
            d.msg || f.css({
                "background-color": "transparent",
                border: "0px"
            }), d.spinner === !0 && (d.msg = '<div class="w2ui-spinner" ' + (d.msg ? "" : 'style="width: 35px; height: 35px"') + "></div>" + d.msg), null != d.opacity && e.css("opacity", d.opacity), "function" == typeof e.fadeIn ? (e.fadeIn(200), f.html(d.msg).fadeIn(200)) : (e.show(), f.html(d.msg).show(0)), $().w2tag()
        }

        function w(a) {
            $(a).find(".w2ui-lock").remove(), $(a).find(".w2ui-lock-msg").remove()
        }

        function x(a, b) {
            var c = $(a),
                d = {
                    left: parseInt(c.css("border-left-width")) || 0,
                    right: parseInt(c.css("border-right-width")) || 0,
                    top: parseInt(c.css("border-top-width")) || 0,
                    bottom: parseInt(c.css("border-bottom-width")) || 0
                },
                e = {
                    left: parseInt(c.css("margin-left")) || 0,
                    right: parseInt(c.css("margin-right")) || 0,
                    top: parseInt(c.css("margin-top")) || 0,
                    bottom: parseInt(c.css("margin-bottom")) || 0
                },
                f = {
                    left: parseInt(c.css("padding-left")) || 0,
                    right: parseInt(c.css("padding-right")) || 0,
                    top: parseInt(c.css("padding-top")) || 0,
                    bottom: parseInt(c.css("padding-bottom")) || 0
                };
            switch (b) {
                case "top":
                    return d.top + e.top + f.top;
                case "bottom":
                    return d.bottom + e.bottom + f.bottom;
                case "left":
                    return d.left + e.left + f.left;
                case "right":
                    return d.right + e.right + f.right;
                case "width":
                    return d.left + d.right + e.left + e.right + f.left + f.right + parseInt(c.width());
                case "height":
                    return d.top + d.bottom + e.top + e.bottom + f.top + f.bottom + parseInt(c.height());
                case "+width":
                    return d.left + d.right + e.left + e.right + f.left + f.right;
                case "+height":
                    return d.top + d.bottom + e.top + e.bottom + f.top + f.bottom
            }
            return 0
        }

        function y(a) {
            var b = this.settings.phrases[a];
            return null == b ? a : b
        }

        function z(a) {
            a || (a = "en-us"), 5 === a.length && (a = "locale/" + a + ".json"), $.ajax({
                url: a,
                type: "GET",
                dataType: "JSON",
                async: !1,
                cache: !1,
                success: function(a) {
                    w2utils.settings = $.extend(!0, w2utils.settings, a);
                    var b = w2obj.grid.prototype;
                    for (var c in b.buttons) b.buttons[c].caption = w2utils.lang(b.buttons[c].caption), b.buttons[c].hint = w2utils.lang(b.buttons[c].hint);
                    b.msgDelete = w2utils.lang(b.msgDelete), b.msgNotJSON = w2utils.lang(b.msgNotJSON), b.msgRefresh = w2utils.lang(b.msgRefresh)
                },
                error: function() {
                    console.log("ERROR: Cannot load locale " + a)
                }
            })
        }

        function A() {
            if (E.scrollBarSize) return E.scrollBarSize;
            var a = '<div id="_scrollbar_width" style="position: absolute; top: -300px; width: 100px; height: 100px; overflow-y: scroll;">    <div style="height: 120px">1</div></div>';
            return $("body").append(a), E.scrollBarSize = 100 - $("#_scrollbar_width > div").width(), $("#_scrollbar_width").remove(), String(navigator.userAgent).indexOf("MSIE") >= 0 && (E.scrollBarSize = E.scrollBarSize / 2), E.scrollBarSize
        }

        function B(a, b) {
            return a && "undefined" != typeof a.name ? "undefined" != typeof w2ui[a.name] ? (console.log('ERROR: The parameter "name" is not unique. There are other objects already created with the same name (obj: ' + a.name + ")."), !1) : w2utils.isAlphaNumeric(a.name) ? !0 : (console.log('ERROR: The parameter "name" has to be alpha-numeric (a-z, 0-9, dash and underscore). '), !1) : (console.log('ERROR: The parameter "name" is required but not supplied in $().' + b + "()."), !1)
        }

        function C(a, b, c, d) {
            $.isArray(b) || (b = [b]);
            for (var e = 0; e < b.length; e++)
                if (b[e].id === a) return console.log('ERROR: The parameter "id=' + a + '" is not unique within the current ' + c + ". (obj: " + d + ")"), !1;
            return !0
        }

        function D(a) {
            var b = [],
                c = a.replace(/\/\(/g, "(?:/").replace(/\+/g, "__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function(a, c, d, e, f, g) {
                    return b.push({
                        name: e,
                        optional: !!g
                    }), c = c || "", "" + (g ? "" : c) + "(?:" + (g ? c : "") + (d || "") + (f || d && "([^/.]+?)" || "([^/]+?)") + ")" + (g || "")
                }).replace(/([\/.])/g, "\\$1").replace(/__plus__/g, "(.+)").replace(/\*/g, "(.*)");
            return {
                path: new RegExp("^" + c + "$", "i"),
                keys: b
            }
        }
        var E = {},
            F = {
                version: "1.4.2",
                settings: {
                    locale: "en-us",
                    date_format: "m/d/yyyy",
                    date_display: "Mon d, yyyy",
                    time_format: "hh:mi pm",
                    currencyPrefix: "$",
                    currencySuffix: "",
                    currencyPrecision: 2,
                    groupSymbol: ",",
                    decimalSymbol: ".",
                    shortmonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    fullmonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    shortdays: ["M", "T", "W", "T", "F", "S", "S"],
                    fulldays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    dataType: "HTTP",
                    phrases: {}
                },
                isInt: a,
                isFloat: b,
                isMoney: c,
                isHex: d,
                isAlphaNumeric: e,
                isEmail: f,
                isDate: g,
                isTime: h,
                age: i,
                date: j,
                size: k,
                formatNumber: l,
                formatDate: m,
                formatTime: n,
                formatDateTime: o,
                stripTags: p,
                encodeTags: q,
                escapeId: r,
                base64encode: s,
                base64decode: t,
                transition: u,
                lock: v,
                unlock: w,
                lang: y,
                locale: z,
                getSize: x,
                scrollBarSize: A,
                checkName: B,
                checkUniqueId: C,
                parseRoute: D,
                isIOS: -1 != navigator.userAgent.toLowerCase().indexOf("iphone") || -1 != navigator.userAgent.toLowerCase().indexOf("ipod") || -1 != navigator.userAgent.toLowerCase().indexOf("ipad") ? !0 : !1,
                isIE: -1 != navigator.userAgent.toLowerCase().indexOf("msie") || -1 != navigator.userAgent.toLowerCase().indexOf("trident") ? !0 : !1
            };
        return F
    }();
w2utils.event = {
        on: function(a, b) {
            return $.isPlainObject(a) || (a = {
                type: a
            }), a = $.extend({
                type: null,
                execute: "before",
                target: null,
                onComplete: null
            }, a), a.type ? b ? ($.isArray(this.handlers) || (this.handlers = []), void this.handlers.push({
                event: a,
                handler: b
            })) : void console.log("ERROR: You must specify event handler function when calling .on() method of " + this.name) : void console.log("ERROR: You must specify event type when calling .on() method of " + this.name)
        },
        off: function(a, b) {
            if ($.isPlainObject(a) || (a = {
                    type: a
                }), a = $.extend({}, {
                    type: null,
                    execute: "before",
                    target: null,
                    onComplete: null
                }, a), !a.type) return void console.log("ERROR: You must specify event type when calling .off() method of " + this.name);
            b || (b = null);
            for (var c = [], d = 0, e = this.handlers.length; e > d; d++) {
                var f = this.handlers[d];
                (f.event.type !== a.type && "*" !== a.type || f.event.target !== a.target && null !== a.target || f.handler !== b && null !== b) && c.push(f)
            }
            this.handlers = c
        },
        trigger: function(a) {
            var a = $.extend({
                type: null,
                phase: "before",
                target: null
            }, a, {
                isStopped: !1,
                isCancelled: !1,
                preventDefault: function() {
                    this.isCancelled = !0
                },
                stopPropagation: function() {
                    this.isStopped = !0
                }
            });
            "before" === a.phase && (a.onComplete = null);
            var b, c, d;
            null == a.target && (a.target = null), $.isArray(this.handlers) || (this.handlers = []);
            for (var e = this.handlers.length - 1; e >= 0; e--) {
                var f = this.handlers[e];
                if (!(f.event.type !== a.type && "*" !== f.event.type || f.event.target !== a.target && null !== f.event.target || f.event.execute !== a.phase && "*" !== f.event.execute && "*" !== f.event.phase) && (a = $.extend({}, f.event, a), b = [], d = RegExp(/\((.*?)\)/).exec(f.handler), d && (b = d[1].split(/\s*,\s*/)), 2 === b.length ? f.handler.call(this, a.target, a) : f.handler.call(this, a), a.isStopped === !0 || a.stop === !0)) return a
            }
            var g = "on" + a.type.substr(0, 1).toUpperCase() + a.type.substr(1);
            return "before" === a.phase && "function" == typeof this[g] && (c = this[g], b = [], d = RegExp(/\((.*?)\)/).exec(c), d && (b = d[1].split(/\s*,\s*/)), 2 === b.length ? c.call(this, a.target, a) : c.call(this, a), a.isStopped === !0 || a.stop === !0) ? a : null != a.object && "before" === a.phase && "function" == typeof a.object[g] && (c = a.object[g], b = [], d = RegExp(/\((.*?)\)/).exec(c), d && (b = d[1].split(/\s*,\s*/)), 2 === b.length ? c.call(this, a.target, a) : c.call(this, a), a.isStopped === !0 || a.stop === !0) ? a : ("after" === a.phase && "function" == typeof a.onComplete && a.onComplete.call(this, a), a)
        }
    }, w2utils.keyboard = function(a) {
        function b() {
            $(document).on("keydown", c), $(document).on("mousedown", d)
        }

        function c(a) {
            var b = a.target.tagName; - 1 === $.inArray(b, ["INPUT", "SELECT", "TEXTAREA"]) && "true" !== $(a.target).prop("contenteditable") && g && w2ui[g] && "function" == typeof w2ui[g].keydown && w2ui[g].keydown.call(w2ui[g], a)
        }

        function d(a) {
            var b = (a.target.tagName, $(a.target).parents(".w2ui-reset"));
            if (b.length > 0) {
                var c = b.attr("name");
                w2ui[c] && w2ui[c].keyboard && (g = c)
            }
        }

        function e(a) {
            return "undefined" != typeof a && (g = a), g
        }

        function f() {
            g = null
        }
        var g = null;
        return a.active = e, a.clear = f, b(), a
    }({}),
    function() {
        $.fn.w2render = function(a) {
            $(this).length > 0 && ("string" == typeof a && w2ui[a] && w2ui[a].render($(this)[0]), "object" == typeof a && a.render($(this)[0]))
        }, $.fn.w2destroy = function(a) {
            !a && this.length > 0 && (a = this.attr("name")), "string" == typeof a && w2ui[a] && w2ui[a].destroy(), "object" == typeof a && a.destroy()
        }, $.fn.w2marker = function(a) {
            return $(this).each("" === a || null == a ? function(a, b) {
                b.innerHTML = b.innerHTML.replace(/\<span class=\"w2ui\-marker\"\>(.*)\<\/span\>/gi, "$1")
            } : function(b, c) {
                function d(a) {
                    return '<span class="w2ui-marker">' + a + "</span>"
                }
                "string" == typeof a && (a = [a]), c.innerHTML = c.innerHTML.replace(/\<span class=\"w2ui\-marker\"\>(.*)\<\/span\>/gi, "$1");
                for (var e in a) {
                    var f = a[e];
                    "string" != typeof f && (f = String(f)), f = f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&").replace(/&/g, "&amp;").replace(/</g, "&gt;").replace(/>/g, "&lt;");
                    var g = new RegExp(f + "(?!([^<]+)?>)", "gi");
                    c.innerHTML = c.innerHTML.replace(g, d)
                }
            })
        }, $.fn.w2tag = function(a, b) {
            return $.isPlainObject(b) || (b = {}), $.isPlainObject(b.css) || (b.css = {}), "undefined" == typeof b["class"] && (b["class"] = ""), 0 === $(this).length ? void $(".w2ui-tag").each(function(a, b) {
                var c = $(b).data("options");
                null == c && (c = {}), $($(b).data("taged-el")).removeClass(c["class"]), clearInterval($(b).data("timer")), $(b).remove()
            }) : $(this).each(function(c, d) {
                function e() {
                    $tag = $("#w2ui-tag-" + g), $tag.length <= 0 || (clearInterval($tag.data("timer")), $tag.remove(), $(d).off("keypress", e).removeClass(b["class"]), $(d).length > 0 && ($(d)[0].style.cssText = i), "function" == typeof b.onHide && b.onHide())
                }
                var f = d.id,
                    g = w2utils.escapeId(d.id);
                if ("" === a || null == a) $("#w2ui-tag-" + g).css("opacity", 0), setTimeout(function() {
                    clearInterval($("#w2ui-tag-" + g).data("timer")), $("#w2ui-tag-" + g).remove()
                }, 300);
                else {
                    clearInterval($("#w2ui-tag-" + g).data("timer")), $("#w2ui-tag-" + g).remove(), $("body").append('<div id="w2ui-tag-' + f + '" class="w2ui-tag ' + ($(d).parents(".w2ui-popup").length > 0 ? "w2ui-tag-popup" : "") + '" style=""></div>');
                    var h = setInterval(function() {
                        return 0 === $(d).length || 0 === $(d).offset().left && 0 === $(d).offset().top ? (clearInterval($("#w2ui-tag-" + g).data("timer")), void e()) : void($("#w2ui-tag-" + g).data("position") !== $(d).offset().left + d.offsetWidth + "x" + $(d).offset().top && $("#w2ui-tag-" + g).css({
                            "-webkit-transition": ".2s",
                            "-moz-transition": ".2s",
                            "-ms-transition": ".2s",
                            "-o-transition": ".2s",
                            left: $(d).offset().left + d.offsetWidth + "px",
                            top: $(d).offset().top + "px"
                        }).data("position", $(d).offset().left + d.offsetWidth + "x" + $(d).offset().top))
                    }, 100);
                    setTimeout(function() {
                        $(d).offset() && ($("#w2ui-tag-" + g).css({
                            opacity: "1",
                            left: $(d).offset().left + d.offsetWidth + "px",
                            top: $(d).offset().top + "px"
                        }).html('<div style="margin-top: -2px 0px 0px -2px; white-space: nowrap;"> <div class="w2ui-tag-body">' + a + "</div> </div>").data("text", a).data("taged-el", d).data("options", b).data("position", $(d).offset().left + d.offsetWidth + "x" + $(d).offset().top).data("timer", h), $(d).off("keypress", e).on("keypress", e).off("change", e).on("change", e).css(b.css).addClass(b["class"]), "function" == typeof b.onShow && b.onShow())
                    }, 1);
                    var i = "";
                    $(d).length > 0 && (i = $(d)[0].style.cssText)
                }
            })
        }, $.fn.w2overlay = function(a, b) {
            function c() {
                var a = $("#w2ui-overlay" + g);
                if (a.data("element") === f[0] && 0 !== a.length) {
                    var b = $(f).offset().left + "x" + $(f).offset().top;
                    a.data("position") !== b ? d() : setTimeout(c, 250)
                }
            }

            function d() {
                var a = $("#w2ui-overlay" + g);
                if (a.data("keepOpen") === !0) return void a.removeData("keepOpen");
                var c;
                "function" == typeof b.onHide && (c = b.onHide()), c !== !1 && (a.remove(), $(document).off("click", d), clearInterval(a.data("timer")))
            }

            function e() {
                var a = $("#w2ui-overlay" + g),
                    c = a.find(" > div");
                if (a.length > 0) {
                    c.height("auto").width("auto");
                    var d = !1,
                        h = !1,
                        i = c.height(),
                        j = c.width();
                    switch (b.width && b.width < j && (j = b.width), 30 > j && (j = 30), b.tmp.contentHeight && (i = b.tmp.contentHeight, c.height(i), setTimeout(function() {
                        c.height() > c.find("div.menu > table").height() && c.find("div.menu").css("overflow-y", "hidden")
                    }, 1), setTimeout(function() {
                        c.find("div.menu").css("overflow-y", "auto")
                    }, 10)), b.tmp.contentWidth && (j = b.tmp.contentWidth, c.width(j), setTimeout(function() {
                        c.width() > c.find("div.menu > table").width() && c.find("div.menu").css("overflow-x", "hidden")
                    }, 1), setTimeout(function() {
                        c.find("div.menu").css("overflow-y", "auto")
                    }, 10)), b.align) {
                        case "both":
                            b.left = 17, 0 === b.width && (b.width = w2utils.getSize($(f), "width"));
                            break;
                        case "left":
                            b.left = 17;
                            break;
                        case "right":
                            b.tipLeft = j - 45, b.left = w2utils.getSize($(f), "width") - j + 10
                    }
                    var k = (j - 17) / 2,
                        l = b.left,
                        m = b.width,
                        n = b.tipLeft;
                    m = 30 !== j || m ? b.width ? b.width : "auto" : 30, 25 > k && (l = 25 - k, n = Math.floor(k)), a.css({
                        top: f.offset().top + w2utils.getSize(f, "height") + b.top + 7 + "px",
                        left: (f.offset().left > 25 ? f.offset().left : 25) + l + "px",
                        "min-width": m,
                        "min-height": b.height ? b.height : "auto"
                    });
                    var o = window.innerHeight + $(document).scrollTop() - c.offset().top - 7,
                        p = window.innerWidth + $(document).scrollLeft() - c.offset().left - 7;
                    o > -50 && 210 > o || b.openAbove === !0 ? (o = c.offset().top - $(document).scrollTop() - 7, b.maxHeight && o > b.maxHeight && (o = b.maxHeight), i > o && (h = !0, c.height(o).width(j).css({
                        "overflow-y": "auto"
                    }), i = o), a.css("top", $(f).offset().top - i - 24 + b.top + "px"), a.find(">style").html("#w2ui-overlay" + g + ":before { display: none; margin-left: " + parseInt(n) + "px; }#w2ui-overlay" + g + ":after { display: block; margin-left: " + parseInt(n) + "px; }")) : (b.maxHeight && o > b.maxHeight && (o = b.maxHeight), i > o && (h = !0, c.height(o).width(j).css({
                        "overflow-y": "auto"
                    })), a.find(">style").html("#w2ui-overlay" + g + ":before { display: block; margin-left: " + parseInt(n) + "px; }#w2ui-overlay" + g + ":after { display: none; margin-left: " + parseInt(n) + "px; }")), j = c.width(), p = window.innerWidth + $(document).scrollLeft() - c.offset().left - 7, b.maxWidth && p > b.maxWidth && (p = b.maxWidth), j > p && "both" !== b.align && (b.align = "right", setTimeout(function() {
                        e()
                    }, 1)), h && d && c.width(j + w2utils.scrollBarSize() + 2)
                }
            }
            var f = this,
                g = "",
                h = {
                    name: null,
                    html: "",
                    align: "none",
                    left: 0,
                    top: 0,
                    tipLeft: 30,
                    width: 0,
                    height: 0,
                    maxWidth: null,
                    maxHeight: null,
                    style: "",
                    "class": "",
                    onShow: null,
                    onHide: null,
                    openAbove: !1,
                    tmp: {}
                };
            1 == arguments.length && (b = "object" == typeof a ? a : {
                html: a
            }), 2 == arguments.length && (b.html = a), $.isPlainObject(b) || (b = {}), b = $.extend({}, h, b), b.name && (g = "-" + b.name);
            var i;
            if (0 === this.length || "" === b.html || null == b.html) return $("#w2ui-overlay" + g).length > 0 ? (i = $("#w2ui-overlay" + g)[0].hide, "function" == typeof i && i()) : $("#w2ui-overlay" + g).remove(), $(this);
            $("#w2ui-overlay" + g).length > 0 && (i = $("#w2ui-overlay" + g)[0].hide, $(document).off("click", i), "function" == typeof i && i()), $("body").append('<div id="w2ui-overlay' + g + '" style="display: none"        class="w2ui-reset w2ui-overlay ' + ($(this).parents(".w2ui-popup, .w2ui-overlay-popup").length > 0 ? "w2ui-overlay-popup" : "") + '">    <style></style>    <div style="' + b.style + '" class="' + b["class"] + '"></div></div>');
            var j = $("#w2ui-overlay" + g),
                k = j.find(" > div");
            k.html(b.html);
            var l = k.css("background-color");
            return null != l && "rgba(0, 0, 0, 0)" !== l && "transparent" !== l && j.css("background-color", l), j.data("element", f.length > 0 ? f[0] : null).data("options", b).data("position", $(f).offset().left + "x" + $(f).offset().top).fadeIn("fast").on("mousedown", function(a) {
                $("#w2ui-overlay" + g).data("keepOpen", !0), -1 === ["INPUT", "TEXTAREA", "SELECT"].indexOf(a.target.tagName) && a.preventDefault()
            }), j[0].hide = d, j[0].resize = e, e(), setTimeout(function() {
                e(), $(document).off("click", d).on("click", d), "function" == typeof b.onShow && b.onShow()
            }, 10), c(), $(this)
        }, $.fn.w2menu = function(a, b) {
            function c() {
                setTimeout(function() {
                    $("#w2ui-overlay" + h + " tr.w2ui-selected").removeClass("w2ui-selected");
                    var a = $("#w2ui-overlay" + h + " tr[index=" + b.index + "]"),
                        c = $("#w2ui-overlay" + h + " div.menu").scrollTop();
                    if (a.addClass("w2ui-selected"), b.tmp && (b.tmp.contentHeight = $("#w2ui-overlay" + h + " table").height() + (b.search ? 50 : 10)), b.tmp && (b.tmp.contentWidth = $("#w2ui-overlay" + h + " table").width()), $("#w2ui-overlay" + h).length > 0 && $("#w2ui-overlay" + h)[0].resize(), a.length > 0) {
                        var d = a[0].offsetTop - 5,
                            e = $("#w2ui-overlay" + h + " div.menu"),
                            f = e.height();
                        $("#w2ui-overlay" + h + " div.menu").scrollTop(c), (c > d || d + a.height() > c + f) && $("#w2ui-overlay" + h + " div.menu").animate({
                            scrollTop: d - (f - 2 * a.height()) / 2
                        }, 200, "linear")
                    }
                }, 1)
            }

            function d(a) {
                var d = this.value,
                    e = a.keyCode,
                    f = !1;
                switch (e) {
                    case 13:
                        $("#w2ui-overlay" + h).remove(), $.fn.w2menuHandler(a, b.index);
                        break;
                    case 9:
                    case 27:
                        $("#w2ui-overlay" + h).remove(), $.fn.w2menuHandler(a, -1);
                        break;
                    case 38:
                        for (b.index = w2utils.isInt(b.index) ? parseInt(b.index) : 0, b.index--; b.index > 0 && b.items[b.index].hidden;) b.index--;
                        if (0 === b.index && b.items[b.index].hidden)
                            for (; b.items[b.index] && b.items[b.index].hidden;) b.index++;
                        b.index < 0 && (b.index = 0), f = !0;
                        break;
                    case 40:
                        for (b.index = w2utils.isInt(b.index) ? parseInt(b.index) : 0, b.index++; b.index < b.items.length - 1 && b.items[b.index].hidden;) b.index++;
                        if (b.index === b.items.length - 1 && b.items[b.index].hidden)
                            for (; b.items[b.index] && b.items[b.index].hidden;) b.index--;
                        b.index >= b.items.length && (b.index = b.items.length - 1), f = !0
                }
                if (!f) {
                    var i = 0;
                    for (var j in b.items) {
                        var k = b.items[j],
                            l = "",
                            m = ""; - 1 !== ["is", "begins with"].indexOf(b.match) && (l = "^"), -1 !== ["is", "ends with"].indexOf(b.match) && (m = "$");
                        try {
                            var n = new RegExp(l + d + m, "i");
                            k.hidden = n.test(k.text) || "..." === k.text ? !1 : !0
                        } catch (o) {}
                        "enum" === g.type && -1 !== $.inArray(k.id, ids) && (k.hidden = !0), k.hidden !== !0 && i++
                    }
                    for (b.index = 0; b.index < b.items.length - 1 && b.items[b.index].hidden;) b.index++;
                    0 >= i && (b.index = -1)
                }
                $(g).w2menu("refresh", b), c()
            }

            function e() {
                if (b.spinner) return '<table class="w2ui-drop-menu"><tr><td style="padding: 5px 10px 10px 10px; text-align: center">    <div class="w2ui-spinner" style="width: 18px; height: 18px; position: relative; top: 5px;"></div>     <div style="display: inline-block; padding: 3px; color: #999;">' + w2utils.lang("Loading...") + "</div></td></tr></table>";
                for (var a = 0, c = '<table cellspacing="0" cellpadding="0" class="w2ui-drop-menu">', d = null, e = null, f = 0; f < b.items.length; f++) {
                    var g = b.items[f];
                    if ("string" == typeof g ? g = {
                            id: g,
                            text: g
                        } : (null != g.text && null == g.id && (g.id = g.text), null == g.text && null != g.id && (g.text = g.id), null != g.caption && (g.text = g.caption), d = g.img, e = g.icon, null == d && (d = null), null == e && (e = null)), g.hidden !== !0) {
                        var i = "",
                            j = g.text;
                        if ("function" == typeof b.render && (j = b.render(g, b)), d && (i = '<td class="menu-icon"><div class="w2ui-tb-image w2ui-icon ' + d + '"></div></td>'), e && (i = '<td class="menu-icon" align="center"><span class="w2ui-icon ' + e + '"></span></td>'), "undefined" == typeof j || "" === j || /^-+$/.test(j)) c += '<tr><td colspan="2" style="padding: 6px; pointer-events: none"><div style="border-top: 1px solid silver;"></div></td></tr>';
                        else {
                            var k = a % 2 === 0 ? "w2ui-item-even" : "w2ui-item-odd";
                            b.altRows !== !0 && (k = "");
                            var l = 1;
                            "" == i && l++, null == g.count && l++, c += '<tr index="' + f + '" style="' + (g.style ? g.style : "") + '"         class="' + k + " " + (b.index === f ? "w2ui-selected" : "") + " " + (g.disabled === !0 ? "w2ui-disabled" : "") + "\"        onmousedown=\"$(this).parent().find('tr').removeClass('w2ui-selected'); $(this).addClass('w2ui-selected');\"        onclick=\"event.stopPropagation();                if (" + (g.disabled === !0 ? "true" : "false") + ") return;               $('#w2ui-overlay" + h + "').remove();                $.fn.w2menuHandler(event, '" + f + "');\">" + i + '   <td class="menu-text" colspan="' + l + '">' + j + '</td>   <td class="menu-count">' + (null != g.count ? "<span>" + g.count + "</span>" : "") + "</td></tr>", a++
                        }
                    }
                    b.items[f] = g
                }
                return 0 === a && (c += '<tr><td style="padding: 13px; color: #999; text-align: center">' + b.msgNoItems + "</div></td></tr>"), c += "</table>"
            }
            var f = {
                    index: null,
                    items: [],
                    render: null,
                    msgNoItems: "No items",
                    onSelect: null,
                    tmp: {}
                },
                g = this,
                h = "";
            if ("refresh" !== a) {
                1 === arguments.length ? b = a : b.items = a, "object" != typeof b && (b = {}), b = $.extend({}, f, b), $.fn.w2menuOptions = b, b.name && (h = "-" + b.name), "function" == typeof b.select && "function" != typeof b.onSelect && (b.onSelect = b.select), "function" == typeof b.onRender && "function" != typeof b.render && (b.render = b.onRender), $.fn.w2menuHandler = function(a, c) {
                    "function" == typeof b.onSelect && setTimeout(function() {
                        b.onSelect({
                            index: c,
                            item: b.items[c],
                            originalEvent: a
                        })
                    }, 10)
                };
                var i = "";
                if (b.search) {
                    i += '<div style="position: absolute; top: 0px; height: 40px; left: 0px; right: 0px; border-bottom: 1px solid silver; background-color: #ECECEC; padding: 8px 5px;">    <div class="w2ui-icon icon-search" style="position: absolute; margin-top: 4px; margin-left: 6px; width: 11px; background-position: left !important;"></div>    <input id="menu-search" type="text" style="width: 100%; outline: none; padding-left: 20px;" onclick="event.stopPropagation();"></div>', b.style += ";background-color: #ECECEC", b.index = 0;
                    for (var j in b.items) b.items[j].hidden = !1
                }
                i += '<div class="menu" style="position: absolute; top: ' + (b.search ? 40 : 0) + 'px; bottom: 0px; width: 100%; overflow: auto;">' + e() + "</div>";
                var k = $(this).w2overlay(i, b);
                return setTimeout(function() {
                    if ($("#w2ui-overlay" + h + " #menu-search").on("keyup", d).on("keydown", function(a) {
                            9 === a.keyCode && (a.stopPropagation(), a.preventDefault())
                        }), b.search) {
                        if (-1 != ["text", "password"].indexOf($(g)[0].type) || "texarea" == $(g)[0].tagName) return;
                        $("#w2ui-overlay" + h + " #menu-search").focus()
                    }
                }, 200), c(), k
            }
            if ($("#w2ui-overlay" + h).length > 0) {
                b = $.extend($.fn.w2menuOptions, b);
                var l = $("#w2ui-overlay" + h + " div.menu").scrollTop();
                $("#w2ui-overlay" + h + " div.menu").html(e()), $("#w2ui-overlay" + h + " div.menu").scrollTop(l), c()
            } else $(this).w2menu(b)
        }
    }(),
    function() {
        var w2grid = function(a) {
            this.name = null, this.box = null, this.header = "", this.url = "", this.routeData = {}, this.columns = [], this.columnGroups = [], this.records = [], this.summary = [], this.searches = [], this.searchData = [], this.sortData = [], this.postData = {}, this.toolbar = {}, this.show = {
                header: !1,
                toolbar: !1,
                footer: !1,
                columnHeaders: !0,
                lineNumbers: !1,
                expandColumn: !1,
                selectColumn: !1,
                emptyRecords: !0,
                toolbarReload: !0,
                toolbarColumns: !0,
                toolbarSearch: !0,
                toolbarAdd: !1,
                toolbarEdit: !1,
                toolbarDelete: !1,
                toolbarSave: !1,
                selectionBorder: !0,
                recordTitles: !0,
                skipRecords: !0
            }, this.autoLoad = !0, this.fixedBody = !0, this.recordHeight = 24, this.keyboard = !0, this.selectType = "row", this.multiSearch = !0, this.multiSelect = !0, this.multiSort = !0, this.reorderColumns = !1, this.reorderRows = !1, this.markSearch = !0, this.total = 0, this.limit = 100, this.offset = 0, this.style = "", this.ranges = [], this.menu = [], this.method = null, this.recid = null, this.parser = null, this.onAdd = null, this.onEdit = null, this.onRequest = null, this.onLoad = null, this.onDelete = null, this.onDeleted = null, this.onSubmit = null, this.onSave = null, this.onSelect = null, this.onUnselect = null, this.onClick = null, this.onDblClick = null, this.onContextMenu = null, this.onMenuClick = null, this.onColumnClick = null, this.onColumnResize = null, this.onSort = null, this.onSearch = null, this.onChange = null, this.onRestore = null, this.onExpand = null, this.onCollapse = null, this.onError = null, this.onKeydown = null, this.onToolbar = null, this.onColumnOnOff = null, this.onCopy = null, this.onPaste = null, this.onSelectionExtend = null, this.onEditField = null, this.onRender = null, this.onRefresh = null, this.onReload = null, this.onResize = null, this.onDestroy = null, this.onStateSave = null, this.onStateRestore = null, this.last = {
                field: "all",
                caption: w2utils.lang("All Fields"),
                logic: "OR",
                search: "",
                searchIds: [],
                selection: {
                    indexes: [],
                    columns: {}
                },
                multi: !1,
                scrollTop: 0,
                scrollLeft: 0,
                sortData: null,
                sortCount: 0,
                xhr: null,
                range_start: null,
                range_end: null,
                sel_ind: null,
                sel_col: null,
                sel_type: null,
                edit_col: null
            }, $.extend(!0, this, w2obj.grid, a)
        };
        $.fn.w2grid = function(a) {
            if ("object" == typeof a || !a) {
                if (!w2utils.checkName(a, "w2grid")) return;
                var b = a.columns,
                    c = a.columnGroups,
                    d = a.records,
                    e = a.searches,
                    f = a.searchData,
                    g = a.sortData,
                    h = a.postData,
                    i = a.toolbar,
                    j = new w2grid(a);
                $.extend(j, {
                    postData: {},
                    records: [],
                    columns: [],
                    searches: [],
                    toolbar: {},
                    sortData: [],
                    searchData: [],
                    handlers: []
                }), null != j.onExpand && (j.show.expandColumn = !0), $.extend(!0, j.toolbar, i);
                for (var k in b) j.columns[k] = $.extend(!0, {}, b[k]);
                for (var k in c) j.columnGroups[k] = $.extend(!0, {}, c[k]);
                for (var k in e) j.searches[k] = $.extend(!0, {}, e[k]);
                for (var k in f) j.searchData[k] = $.extend(!0, {}, f[k]);
                for (var k in g) j.sortData[k] = $.extend(!0, {}, g[k]);
                j.postData = $.extend(!0, {}, h);
                for (var l in d) {
                    if (null == d[l].recid || "undefined" == typeof d[l].recid) return void console.log("ERROR: Cannot add records without recid. (obj: " + j.name + ")");
                    j.records[l] = $.extend(!0, {}, d[l])
                }
                for (var m in j.columns) {
                    var n = j.columns[m];
                    if ("undefined" != typeof n.searchable && null == j.getSearch(n.field)) {
                        var o = n.searchable,
                            p = "";
                        n.searchable === !0 && (o = "text", p = 'size="20"'), j.addSearch({
                            field: n.field,
                            caption: n.caption,
                            type: o,
                            attr: p
                        })
                    }
                }
                return j.initToolbar(), 0 !== $(this).length && j.render($(this)[0]), w2ui[j.name] = j, j
            }
            if (w2ui[$(this).attr("name")]) {
                var q = w2ui[$(this).attr("name")];
                return q[a].apply(q, Array.prototype.slice.call(arguments, 1)), this
            }
            console.log("ERROR: Method " + a + " does not exist on jQuery.w2grid")
        }, w2grid.prototype = {
            msgDelete: w2utils.lang("Are you sure you want to delete selected records?"),
            msgNotJSON: w2utils.lang("Returned data is not in valid JSON format."),
            msgAJAXerror: w2utils.lang("AJAX error. See console for more details."),
            msgRefresh: w2utils.lang("Refreshing..."),
            buttons: {
                reload: {
                    type: "button",
                    id: "w2ui-reload",
                    icon: "w2ui-icon-reload",
                    hint: w2utils.lang("Reload data in the list")
                },
                columns: {
                    type: "drop",
                    id: "w2ui-column-on-off",
                    icon: "w2ui-icon-columns",
                    hint: w2utils.lang("Show/hide columns"),
                    arrow: !1,
                    html: ""
                },
                search: {
                    type: "html",
                    id: "w2ui-search",
                    html: '<div class="w2ui-icon icon-search-down w2ui-search-down" title="Select Search Field" onclick="var obj = w2ui[$(this).parents(\'div.w2ui-grid\').attr(\'name\')]; obj.searchShowFields();"></div>'
                },
                "search-go": {
                    type: "check",
                    id: "w2ui-search-advanced",
                    caption: w2utils.lang("Search..."),
                    hint: w2utils.lang("Open Search Fields")
                },
                add: {
                    type: "button",
                    id: "w2ui-add",
                    caption: w2utils.lang("Add New"),
                    hint: w2utils.lang("Add new record"),
                    icon: "w2ui-icon-plus"
                },
                edit: {
                    type: "button",
                    id: "w2ui-edit",
                    caption: w2utils.lang("Edit"),
                    hint: w2utils.lang("Edit selected record"),
                    icon: "w2ui-icon-pencil",
                    disabled: !0
                },
                "delete": {
                    type: "button",
                    id: "w2ui-delete",
                    caption: w2utils.lang("Delete"),
                    hint: w2utils.lang("Delete selected records"),
                    icon: "w2ui-icon-cross",
                    disabled: !0
                },
                save: {
                    type: "button",
                    id: "w2ui-save",
                    caption: w2utils.lang("Save"),
                    hint: w2utils.lang("Save changed records"),
                    icon: "w2ui-icon-check"
                }
            },
            add: function(a) {
                $.isArray(a) || (a = [a]);
                var b = 0;
                for (var c in a) this.recid || "undefined" != typeof a[c].recid || (a[c].recid = a[c][this.recid]), null != a[c].recid && "undefined" != typeof a[c].recid ? (this.records.push(a[c]), b++) : console.log("ERROR: Cannot add record without recid. (obj: " + this.name + ")");
                var d = "object" != typeof this.url ? this.url : this.url.get;
                return d || (this.total = this.records.length, this.localSort(), this.localSearch()), this.refresh(), b
            },
            find: function(a, b) {
                ("undefined" == typeof a || null == a) && (a = {});
                var c = [],
                    d = !1;
                for (var e in a) - 1 != String(e).indexOf(".") && (d = !0);
                for (var f = 0; f < this.records.length; f++) {
                    var g = !0;
                    for (var e in a) {
                        var h = this.records[f][e];
                        d && -1 != String(e).indexOf(".") && (h = this.parseField(this.records[f], e)), a[e] != h && (g = !1)
                    }
                    g && b !== !0 && c.push(this.records[f].recid), g && b === !0 && c.push(f)
                }
                return c
            },
            set: function(a, b, c) {
                if ("object" == typeof a && (c = b, b = a, a = null), null == a) {
                    for (var d in this.records) $.extend(!0, this.records[d], b);
                    c !== !0 && this.refresh()
                } else {
                    var e = this.get(a, !0);
                    if (null == e) return !1;
                    var f = this.records[e] && this.records[e].recid == a ? !1 : !0;
                    f ? $.extend(!0, this.summary[e], b) : $.extend(!0, this.records[e], b), c !== !0 && this.refreshRow(a)
                }
                return !0
            },
            get: function(a, b) {
                for (var c = 0; c < this.records.length; c++)
                    if (this.records[c].recid == a) return b === !0 ? c : this.records[c];
                for (var c = 0; c < this.summary.length; c++)
                    if (this.summary[c].recid == a) return b === !0 ? c : this.summary[c];
                return null
            },
            remove: function() {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.records.length - 1; c >= 0; c--) this.records[c].recid == arguments[b] && (this.records.splice(c, 1), a++);
                var d = "object" != typeof this.url ? this.url : this.url.get;
                return d || (this.localSort(), this.localSearch()), this.refresh(), a
            },
            addColumn: function(a, b) {
                var c = 0;
                1 == arguments.length ? (b = a, a = this.columns.length) : ("string" == typeof a && (a = this.getColumn(a, !0)), null === a && (a = this.columns.length)), $.isArray(b) || (b = [b]);
                for (var d in b) this.columns.splice(a, 0, b[d]), a++, c++;
                return this.refresh(), c
            },
            removeColumn: function() {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.columns.length - 1; c >= 0; c--) this.columns[c].field == arguments[b] && (this.columns.splice(c, 1), a++);
                return this.refresh(), a
            },
            getColumn: function(a, b) {
                for (var c = 0; c < this.columns.length; c++)
                    if (this.columns[c].field == a) return b === !0 ? c : this.columns[c];
                return null
            },
            toggleColumn: function() {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.columns.length - 1; c >= 0; c--) {
                        var d = this.columns[c];
                        d.field == arguments[b] && (d.hidden = !d.hidden, a++)
                    }
                return this.refresh(), a
            },
            showColumn: function() {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.columns.length - 1; c >= 0; c--) {
                        var d = this.columns[c];
                        d.gridMinWidth && delete d.gridMinWidth, d.field == arguments[b] && d.hidden !== !1 && (d.hidden = !1, a++)
                    }
                return this.refresh(), a
            },
            hideColumn: function() {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.columns.length - 1; c >= 0; c--) {
                        var d = this.columns[c];
                        d.field == arguments[b] && d.hidden !== !0 && (d.hidden = !0, a++)
                    }
                return this.refresh(), a
            },
            addSearch: function(a, b) {
                var c = 0;
                1 == arguments.length ? (b = a, a = this.searches.length) : ("string" == typeof a && (a = this.getSearch(a, !0)), null === a && (a = this.searches.length)), $.isArray(b) || (b = [b]);
                for (var d in b) this.searches.splice(a, 0, b[d]), a++, c++;
                return this.searchClose(), c
            },
            removeSearch: function() {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.searches.length - 1; c >= 0; c--) this.searches[c].field == arguments[b] && (this.searches.splice(c, 1), a++);
                return this.searchClose(), a
            },
            getSearch: function(a, b) {
                for (var c = 0; c < this.searches.length; c++)
                    if (this.searches[c].field == a) return b === !0 ? c : this.searches[c];
                return null
            },
            toggleSearch: function() {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.searches.length - 1; c >= 0; c--) this.searches[c].field == arguments[b] && (this.searches[c].hidden = !this.searches[c].hidden, a++);
                return this.searchClose(), a
            },
            showSearch: function() {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.searches.length - 1; c >= 0; c--) this.searches[c].field == arguments[b] && this.searches[c].hidden !== !1 && (this.searches[c].hidden = !1, a++);
                return this.searchClose(), a
            },
            hideSearch: function() {
                for (var a = 0, b = 0; b < arguments.length; b++)
                    for (var c = this.searches.length - 1; c >= 0; c--) this.searches[c].field == arguments[b] && this.searches[c].hidden !== !0 && (this.searches[c].hidden = !0, a++);
                return this.searchClose(), a
            },
            getSearchData: function(a) {
                for (var b in this.searchData)
                    if (this.searchData[b].field == a) return this.searchData[b];
                return null
            },
            localSort: function(a) {
                var b = "object" != typeof this.url ? this.url : this.url.get;
                if (b) return void console.log("ERROR: grid.localSort can only be used on local data source, grid.url should be empty.");
                if (!$.isEmptyObject(this.sortData)) {
                    var c = (new Date).getTime(),
                        d = this;
                    d.prepareData();
                    for (var e in this.sortData) {
                        var f = this.getColumn(this.sortData[e].field);
                        if (!f) return;
                        "string" == typeof f.render && (-1 != ["date", "age"].indexOf(f.render.split(":")[0]) && (this.sortData[e].field_ = f.field + "_"), -1 != ["time"].indexOf(f.render.split(":")[0]) && (this.sortData[e].field_ = f.field + "_"))
                    }
                    return this.records.sort(function(a, b) {
                        var c = 0;
                        for (var e in d.sortData) {
                            var f = d.sortData[e].field;
                            d.sortData[e].field_ && (f = d.sortData[e].field_);
                            var g = a[f],
                                h = b[f];
                            if (-1 != String(f).indexOf(".") && (g = d.parseField(a, f), h = d.parseField(b, f)), "string" == typeof g && (g = $.trim(g.toLowerCase())), "string" == typeof h && (h = $.trim(h.toLowerCase())), g > h && (c = "asc" == d.sortData[e].direction ? 1 : -1), h > g && (c = "asc" == d.sortData[e].direction ? -1 : 1), "object" != typeof g && "object" == typeof h && (c = -1), "object" != typeof h && "object" == typeof g && (c = 1), null == g && null != h && (c = 1), null != g && null == h && (c = -1), 0 != c) break
                        }
                        return c
                    }), c = (new Date).getTime() - c, a !== !0 && setTimeout(function() {
                        d.status(w2utils.lang("Sorting took") + " " + c / 1e3 + " " + w2utils.lang("sec"))
                    }, 10), c
                }
            },
            localSearch: function(a) {
                var b = "object" != typeof this.url ? this.url : this.url.get;
                if (b) return void console.log("ERROR: grid.localSearch can only be used on local data source, grid.url should be empty.");
                var c = (new Date).getTime(),
                    d = this;
                if (this.total = this.records.length, this.last.searchIds = [], this.prepareData(), this.searchData.length > 0 && !b) {
                    this.total = 0;
                    for (var e in this.records) {
                        var f = this.records[e],
                            g = 0;
                        for (var h in this.searchData) {
                            var i = this.searchData[h],
                                j = this.getSearch(i.field);
                            if (null != i) {
                                null == j && (j = {
                                    field: i.field,
                                    type: i.type
                                });
                                var k = String(d.parseField(f, j.field)).toLowerCase();
                                if ("undefined" != typeof i.value)
                                    if ($.isArray(i.value)) var l = i.value[0],
                                        m = i.value[1];
                                    else var l = String(i.value).toLowerCase();
                                switch (i.operator) {
                                    case "is":
                                        if (f[j.field] == i.value && g++, "date" == j.type) {
                                            var k = w2utils.formatDate(f[j.field + "_"], "yyyy-mm-dd"),
                                                l = w2utils.formatDate(l, "yyyy-mm-dd");
                                            k == l && g++
                                        }
                                        if ("time" == j.type) {
                                            var k = w2utils.formatTime(f[j.field + "_"], "h24:mi"),
                                                l = w2utils.formatTime(l, "h24:mi");
                                            k == l && g++
                                        }
                                        break;
                                    case "between":
                                        if (-1 != ["int", "float", "money", "currency", "percent"].indexOf(j.type) && parseFloat(f[j.field]) >= parseFloat(l) && parseFloat(f[j.field]) <= parseFloat(m) && g++, "date" == j.type) {
                                            var k = f[j.field + "_"],
                                                l = w2utils.isDate(l, w2utils.settings.date_format, !0),
                                                m = w2utils.isDate(m, w2utils.settings.date_format, !0);
                                            null != m && (m = new Date(m.getTime() + 864e5)), k >= l && m > k && g++
                                        }
                                        if ("time" == j.type) {
                                            var k = f[j.field + "_"],
                                                l = w2utils.isTime(l, !0),
                                                m = w2utils.isTime(m, !0);
                                            l = (new Date).setHours(l.hours, l.minutes, l.seconds ? l.seconds : 0, 0), m = (new Date).setHours(m.hours, m.minutes, m.seconds ? m.seconds : 0, 0), k >= l && m > k && g++
                                        }
                                        break;
                                    case "in":
                                        var n = i.value;
                                        i.svalue && (n = i.svalue), -1 !== n.indexOf(k) && g++;
                                        break;
                                    case "not in":
                                        var n = i.value;
                                        i.svalue && (n = i.svalue), -1 == n.indexOf(k) && g++;
                                        break;
                                    case "begins":
                                    case "begins with":
                                        0 == k.indexOf(l) && g++;
                                        break;
                                    case "contains":
                                        k.indexOf(l) >= 0 && g++;
                                        break;
                                    case "ends":
                                    case "ends with":
                                        k.indexOf(l) == k.length - l.length && g++
                                }
                            }
                        }("OR" == this.last.logic && 0 != g || "AND" == this.last.logic && g == this.searchData.length) && this.last.searchIds.push(parseInt(e))
                    }
                    this.total = this.last.searchIds.length
                }
                return c = (new Date).getTime() - c, a !== !0 && setTimeout(function() {
                    d.status(w2utils.lang("Search took") + " " + c / 1e3 + " " + w2utils.lang("sec"))
                }, 10), c
            },
            getRangeData: function(a, b) {
                var c = this.get(a[0].recid, !0),
                    d = this.get(a[1].recid, !0),
                    e = a[0].column,
                    f = a[1].column,
                    g = [];
                if (e == f)
                    for (var h = c; d >= h; h++) {
                        var i = this.records[h],
                            j = i[this.columns[e].field] || null;
                        g.push(b !== !0 ? j : {
                            data: j,
                            column: e,
                            index: h,
                            record: i
                        })
                    } else if (c == d)
                        for (var i = this.records[c], k = e; f >= k; k++) {
                            var j = i[this.columns[k].field] || null;
                            g.push(b !== !0 ? j : {
                                data: j,
                                column: k,
                                index: c,
                                record: i
                            })
                        } else
                            for (var h = c; d >= h; h++) {
                                var i = this.records[h];
                                g.push([]);
                                for (var k = e; f >= k; k++) {
                                    var j = i[this.columns[k].field];
                                    g[g.length - 1].push(b !== !0 ? j : {
                                        data: j,
                                        column: k,
                                        index: h,
                                        record: i
                                    })
                                }
                            }
                    return g
            },
            addRange: function(a) {
                var b = 0;
                if ("row" == this.selectType) return b;
                $.isArray(a) || (a = [a]);
                for (var c in a) {
                    if ("object" != typeof a[c] && (a[c] = {
                            name: "selection"
                        }), "selection" == a[c].name) {
                        if (this.show.selectionBorder === !1) continue;
                        var d = this.getSelection();
                        if (0 == d.length) {
                            this.removeRange(a[c].name);
                            continue
                        } {
                            var e = d[0],
                                f = d[d.length - 1];
                            $("#grid_" + this.name + "_rec_" + e.recid + " td[col=" + e.column + "]"), $("#grid_" + this.name + "_rec_" + f.recid + " td[col=" + f.column + "]")
                        }
                    } else {
                        var e = a[c].range[0],
                            f = a[c].range[1];
                        $("#grid_" + this.name + "_rec_" + e.recid + " td[col=" + e.column + "]"), $("#grid_" + this.name + "_rec_" + f.recid + " td[col=" + f.column + "]")
                    }
                    if (e) {
                        var g = {
                                name: a[c].name,
                                range: [{
                                    recid: e.recid,
                                    column: e.column
                                }, {
                                    recid: f.recid,
                                    column: f.column
                                }],
                                style: a[c].style || ""
                            },
                            h = !1;
                        for (var i in this.ranges)
                            if (this.ranges[i].name == a[c].name) {
                                h = c;
                                break
                            }
                        h !== !1 ? this.ranges[h] = g : this.ranges.push(g), b++
                    }
                }
                return this.refreshRanges(), b
            },
            removeRange: function() {
                for (var a = 0, b = 0; b < arguments.length; b++) {
                    var c = arguments[b];
                    $("#grid_" + this.name + "_" + c).remove();
                    for (var d = this.ranges.length - 1; d >= 0; d--) this.ranges[d].name == c && (this.ranges.splice(d, 1), a++)
                }
                return a
            },
            refreshRanges: function() {
                function a(a) {
                    var e = d.getSelection();
                    d.last.move = {
                        type: "expand",
                        x: a.screenX,
                        y: a.screenY,
                        divX: 0,
                        divY: 0,
                        recid: e[0].recid,
                        column: e[0].column,
                        originalRange: [{
                            recid: e[0].recid,
                            column: e[0].column
                        }, {
                            recid: e[e.length - 1].recid,
                            column: e[e.length - 1].column
                        }],
                        newRange: [{
                            recid: e[0].recid,
                            column: e[0].column
                        }, {
                            recid: e[e.length - 1].recid,
                            column: e[e.length - 1].column
                        }]
                    }, $(document).off("mousemove", b).on("mousemove", b), $(document).off("mouseup", c).on("mouseup", c)
                }

                function b(a) {
                    var b = d.last.move;
                    if (b && "expand" == b.type) {
                        b.divX = a.screenX - b.x, b.divY = a.screenY - b.y;
                        var c, e, f = a.originalEvent.target;
                        if ("TD" != f.tagName && (f = $(f).parents("td")[0]), "undefined" != typeof $(f).attr("col") && (e = parseInt($(f).attr("col"))), f = $(f).parents("tr")[0], c = $(f).attr("recid"), b.newRange[1].recid != c || b.newRange[1].column != e) {
                            var g = $.extend({}, b.newRange);
                            return b.newRange = [{
                                recid: b.recid,
                                column: b.column
                            }, {
                                recid: c,
                                column: e
                            }], m = d.trigger($.extend(m, {
                                originalRange: b.originalRange,
                                newRange: b.newRange
                            })), m.isCancelled === !0 ? (b.newRange = g, void(m.newRange = g)) : (d.removeRange("grid-selection-expand"), void d.addRange({
                                name: "grid-selection-expand",
                                range: m.newRange,
                                style: "background-color: rgba(100,100,100,0.1); border: 2px dotted rgba(100,100,100,0.5);"
                            }))
                        }
                    }
                }

                function c() {
                    d.removeRange("grid-selection-expand"), delete d.last.move, $(document).off("mousemove", b), $(document).off("mouseup", c), d.trigger($.extend(m, {
                        phase: "after"
                    }))
                }
                var d = this,
                    e = (new Date).getTime(),
                    f = $("#grid_" + this.name + "_records");
                for (var g in this.ranges) {
                    var h = this.ranges[g],
                        i = h.range[0],
                        j = h.range[1],
                        k = $("#grid_" + this.name + "_rec_" + i.recid + " td[col=" + i.column + "]"),
                        l = $("#grid_" + this.name + "_rec_" + j.recid + " td[col=" + j.column + "]");
                    0 == $("#grid_" + this.name + "_" + h.name).length ? f.append('<div id="grid_' + this.name + "_" + h.name + '" class="w2ui-selection" style="' + h.style + '">' + ("selection" == h.name ? '<div id="grid_' + this.name + '_resizer" class="w2ui-selection-resizer"></div>' : "") + "</div>") : $("#grid_" + this.name + "_" + h.name).attr("style", h.style), k.length > 0 && l.length > 0 && $("#grid_" + this.name + "_" + h.name).css({
                        left: k.position().left - 1 + f.scrollLeft() + "px",
                        top: k.position().top - 1 + f.scrollTop() + "px",
                        width: l.position().left - k.position().left + l.width() + 3 + "px",
                        height: l.position().top - k.position().top + l.height() + 3 + "px"
                    })
                }
                $(this.box).find("#grid_" + this.name + "_resizer").off("mousedown").on("mousedown", a);
                var m = {
                    phase: "before",
                    type: "selectionExtend",
                    target: d.name,
                    originalRange: null,
                    newRange: null
                };
                return (new Date).getTime() - e
            },
            select: function() {
                var a = 0,
                    b = this.last.selection;
                this.multiSelect || this.selectNone();
                for (var c = 0; c < arguments.length; c++) {
                    var d = "object" == typeof arguments[c] ? arguments[c].recid : arguments[c],
                        e = this.get(d);
                    if (null != e) {
                        var f = this.get(d, !0),
                            g = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(d));
                        if ("row" == this.selectType) {
                            if (b.indexes.indexOf(f) >= 0) continue;
                            var h = this.trigger({
                                phase: "before",
                                type: "select",
                                target: this.name,
                                recid: d,
                                index: f
                            });
                            if (h.isCancelled === !0) continue;
                            b.indexes.push(f), b.indexes.sort(function(a, b) {
                                return a - b
                            }), g.addClass("w2ui-selected").data("selected", "yes"), g.find(".w2ui-grid-select-check").prop("checked", !0), a++
                        } else {
                            var i = arguments[c].column;
                            if (!w2utils.isInt(i)) {
                                var j = [];
                                for (var k in this.columns) this.columns[k].hidden || j.push({
                                    recid: d,
                                    column: parseInt(k)
                                });
                                return this.multiSelect || (j = j.splice(0, 1)), this.select.apply(this, j)
                            }
                            var l = b.columns[f] || [];
                            if ($.isArray(l) && -1 != l.indexOf(i)) continue;
                            var h = this.trigger({
                                phase: "before",
                                type: "select",
                                target: this.name,
                                recid: d,
                                index: f,
                                column: i
                            });
                            if (h.isCancelled === !0) continue; - 1 == b.indexes.indexOf(f) && (b.indexes.push(f), b.indexes.sort(function(a, b) {
                                return a - b
                            })), l.push(i), l.sort(function(a, b) {
                                return a - b
                            }), g.find(" > td[col=" + i + "]").addClass("w2ui-selected"), a++, g.data("selected", "yes"), g.find(".w2ui-grid-select-check").prop("checked", !0), b.columns[f] = l
                        }
                        this.trigger($.extend(h, {
                            phase: "after"
                        }))
                    }
                }
                return b.indexes.length == this.records.length || 0 !== this.searchData.length && b.indexes.length == this.last.searchIds.length ? $("#grid_" + this.name + "_check_all").prop("checked", !0) : $("#grid_" + this.name + "_check_all").prop("checked", !1), this.status(), this.addRange("selection"), a
            },
            unselect: function() {
                for (var a = 0, b = this.last.selection, c = 0; c < arguments.length; c++) {
                    var d = "object" == typeof arguments[c] ? arguments[c].recid : arguments[c],
                        e = this.get(d);
                    if (null != e) {
                        var f = this.get(e.recid, !0),
                            g = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(d));
                        if ("row" == this.selectType) {
                            if (-1 == b.indexes.indexOf(f)) continue;
                            var h = this.trigger({
                                phase: "before",
                                type: "unselect",
                                target: this.name,
                                recid: d,
                                index: f
                            });
                            if (h.isCancelled === !0) continue;
                            b.indexes.splice(b.indexes.indexOf(f), 1), g.removeClass("w2ui-selected").removeData("selected"), 0 != g.length && (g[0].style.cssText = "height: " + this.recordHeight + "px; " + g.attr("custom_style")), g.find(".w2ui-grid-select-check").prop("checked", !1), a++
                        } else {
                            var i = arguments[c].column;
                            if (!w2utils.isInt(i)) {
                                var j = [];
                                for (var k in this.columns) this.columns[k].hidden || j.push({
                                    recid: d,
                                    column: parseInt(k)
                                });
                                return this.unselect.apply(this, j)
                            }
                            var l = b.columns[f];
                            if (!$.isArray(l) || -1 == l.indexOf(i)) continue;
                            var h = this.trigger({
                                phase: "before",
                                type: "unselect",
                                target: this.name,
                                recid: d,
                                column: i
                            });
                            if (h.isCancelled === !0) continue;
                            l.splice(l.indexOf(i), 1), $("#grid_" + this.name + "_rec_" + w2utils.escapeId(d) + " > td[col=" + i + "]").removeClass("w2ui-selected"), a++, 0 == l.length && (delete b.columns[f], b.indexes.splice(b.indexes.indexOf(f), 1), g.removeData("selected"), g.find(".w2ui-grid-select-check").prop("checked", !1))
                        }
                        this.trigger($.extend(h, {
                            phase: "after"
                        }))
                    }
                }
                return b.indexes.length == this.records.length || 0 !== this.searchData.length && b.indexes.length == this.last.searchIds.length ? $("#grid_" + this.name + "_check_all").prop("checked", !0) : $("#grid_" + this.name + "_check_all").prop("checked", !1), this.status(), this.addRange("selection"), a
            },
            selectAll: function() {
                if (this.multiSelect !== !1) {
                    var a = this.trigger({
                        phase: "before",
                        type: "select",
                        target: this.name,
                        all: !0
                    });
                    if (a.isCancelled !== !0) {
                        var b = "object" != typeof this.url ? this.url : this.url.get,
                            c = this.last.selection,
                            d = [];
                        for (var e in this.columns) d.push(parseInt(e));
                        if (c.indexes = [], b || 0 === this.searchData.length) {
                            var f = this.records.length;
                            0 == this.searchData.length || this.url || (f = this.last.searchIds.length);
                            for (var g = 0; f > g; g++) c.indexes.push(g), "row" != this.selectType && (c.columns[g] = d.slice())
                        } else
                            for (var g = 0; g < this.last.searchIds.length; g++) c.indexes.push(this.last.searchIds[g]), "row" != this.selectType && (c.columns[this.last.searchIds[g]] = d.slice());
                        this.refresh();
                        var c = this.getSelection();
                        1 == c.length ? this.toolbar.enable("w2ui-edit") : this.toolbar.disable("w2ui-edit"), c.length >= 1 ? this.toolbar.enable("w2ui-delete") : this.toolbar.disable("w2ui-delete"), this.addRange("selection"), this.trigger($.extend(a, {
                            phase: "after"
                        }))
                    }
                }
            },
            selectNone: function() {
                var a = this.trigger({
                    phase: "before",
                    type: "unselect",
                    target: this.name,
                    all: !0
                });
                if (a.isCancelled !== !0) {
                    var b = this.last.selection;
                    for (var c in b.indexes) {
                        var d = b.indexes[c],
                            e = this.records[d],
                            f = e ? e.recid : null,
                            g = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(f));
                        if (g.removeClass("w2ui-selected").removeData("selected"), g.find(".w2ui-grid-select-check").prop("checked", !1), "row" != this.selectType) {
                            var h = b.columns[d];
                            for (var i in h) g.find(" > td[col=" + h[i] + "]").removeClass("w2ui-selected")
                        }
                    }
                    b.indexes = [], b.columns = {}, this.toolbar.disable("w2ui-edit", "w2ui-delete"), this.removeRange("selection"), $("#grid_" + this.name + "_check_all").prop("checked", !1), this.trigger($.extend(a, {
                        phase: "after"
                    }))
                }
            },
            getSelection: function(a) {
                var b = [],
                    c = this.last.selection;
                if ("row" == this.selectType) {
                    for (var d in c.indexes) this.records[c.indexes[d]] && b.push(a === !0 ? c.indexes[d] : this.records[c.indexes[d]].recid);
                    return b
                }
                for (var d in c.indexes) {
                    var e = c.columns[c.indexes[d]];
                    if (this.records[c.indexes[d]])
                        for (var f in e) b.push({
                            recid: this.records[c.indexes[d]].recid,
                            index: parseInt(c.indexes[d]),
                            column: e[f]
                        })
                }
                return b
            },
            search: function(a, b) {
                var c = "object" != typeof this.url ? this.url : this.url.get,
                    d = [],
                    e = this.last.multi,
                    f = this.last.logic,
                    g = this.last.field,
                    h = this.last.search;
                if (0 == arguments.length) {
                    h = "";
                    for (var i in this.searches) {
                        var j = this.searches[i],
                            k = $("#grid_" + this.name + "_operator_" + i).val(),
                            l = $("#grid_" + this.name + "_field_" + i),
                            m = $("#grid_" + this.name + "_field2_" + i),
                            n = l.val(),
                            o = m.val(),
                            p = null;
                        if (-1 != ["int", "float", "money", "currency", "percent"].indexOf(j.type)) {
                            var q = l.data("w2field"),
                                r = m.data("w2field");
                            q && (n = q.clean(n)), r && (o = r.clean(o))
                        }
                        if (-1 != ["list", "enum"].indexOf(j.type))
                            if (n = l.data("selected") || {}, $.isArray(n)) {
                                p = [];
                                for (var s in n) p.push(w2utils.isFloat(n[s].id) ? parseFloat(n[s].id) : String(n[s].id).toLowerCase()), delete n[s].hidden
                            } else n = n.id || "";
                        if ("" != n && null != n || "undefined" != typeof o && "" != o) {
                            var t = {
                                field: j.field,
                                type: j.type,
                                operator: k
                            };
                            "between" == k ? $.extend(t, {
                                value: [n, o]
                            }) : "in" == k && "string" == typeof n ? $.extend(t, {
                                value: n.split(",")
                            }) : "not in" == k && "string" == typeof n ? $.extend(t, {
                                value: n.split(",")
                            }) : $.extend(t, {
                                value: n
                            }), p && $.extend(t, {
                                svalue: p
                            });
                            try {
                                "date" == j.type && "between" == k && (t.value[0] = n, t.value[1] = o), "date" == j.type && "is" == k && (t.value = n)
                            } catch (u) {}
                            d.push(t)
                        }
                    }
                    d.length > 0 && !c ? (e = !0, f = "AND") : (e = !0, f = "AND")
                }
                if ("string" == typeof a && (g = a, h = b, e = !1, f = "OR", "undefined" != typeof b))
                    if ("all" == a.toLowerCase())
                        if (this.searches.length > 0)
                            for (var i in this.searches) {
                                var j = this.searches[i];
                                if ("text" == j.type || "alphanumeric" == j.type && w2utils.isAlphaNumeric(b) || "int" == j.type && w2utils.isInt(b) || "float" == j.type && w2utils.isFloat(b) || "percent" == j.type && w2utils.isFloat(b) || "hex" == j.type && w2utils.isHex(b) || "currency" == j.type && w2utils.isMoney(b) || "money" == j.type && w2utils.isMoney(b) || "date" == j.type && w2utils.isDate(b)) {
                                    var t = {
                                        field: j.field,
                                        type: j.type,
                                        operator: "text" == j.type ? "contains" : "is",
                                        value: b
                                    };
                                    d.push(t)
                                }
                                if (-1 != ["int", "float", "money", "currency", "percent"].indexOf(j.type) && -1 != String(b).indexOf("-")) {
                                    var v = String(b).split("-"),
                                        t = {
                                            field: j.field,
                                            type: j.type,
                                            operator: "between",
                                            value: [v[0], v[1]]
                                        };
                                    d.push(t)
                                }
                            } else
                                for (var w in this.columns) {
                                    var t = {
                                        field: this.columns[w].field,
                                        type: "text",
                                        operator: "contains",
                                        value: b
                                    };
                                    d.push(t)
                                } else {
                                    var x = $("#grid_" + this.name + "_search_all"),
                                        j = this.getSearch(a);
                                    if (null == j && (j = {
                                            field: a,
                                            type: "text"
                                        }), j.field == a && (this.last.caption = j.caption), "list" == j.type) {
                                        var t = x.data("selected");
                                        t && !$.isEmptyObject(t) && (b = t.id)
                                    }
                                    if ("" != b) {
                                        var y = "contains",
                                            z = b;
                                        if (-1 != ["date", "time", "list"].indexOf(j.type) && (y = "is"), "int" == j.type && "" != b) {
                                            if (y = "is", -1 != String(b).indexOf("-")) {
                                                var t = b.split("-");
                                                2 == t.length && (y = "between", z = [parseInt(t[0]), parseInt(t[1])])
                                            }
                                            if (-1 != String(b).indexOf(",")) {
                                                var t = b.split(",");
                                                y = "in", z = [];
                                                for (var v in t) z.push(t[v])
                                            }
                                        }
                                        var t = {
                                            field: j.field,
                                            type: j.type,
                                            operator: y,
                                            value: z
                                        };
                                        d.push(t)
                                    }
                                }
                        if ($.isArray(a)) {
                            var A = "AND";
                            "string" == typeof b && (A = b.toUpperCase(), "OR" != A && "AND" != A && (A = "AND")), h = "", e = !0, f = A;
                            for (var B in a) {
                                var C = a[B],
                                    j = this.getSearch(C.field);
                                null == j && (j = {
                                    type: "text",
                                    operator: "contains"
                                }), d.push($.extend(!0, {}, j, C))
                            }
                        }
                var D = this.trigger({
                    phase: "before",
                    type: "search",
                    target: this.name,
                    searchData: d,
                    searchField: a ? a : "multi",
                    searchValue: b ? b : "multi"
                });
                D.isCancelled !== !0 && (this.searchData = D.searchData, this.last.field = g, this.last.search = h, this.last.multi = e, this.last.logic = f, this.last.scrollTop = 0, this.last.scrollLeft = 0, this.last.selection.indexes = [], this.last.selection.columns = {}, this.searchClose(), this.set({
                    expanded: !1
                }, !0), c ? (this.last.xhr_offset = 0, this.reload()) : (this.localSearch(), this.refresh()), this.trigger($.extend(D, {
                    phase: "after"
                })))
            },
            searchOpen: function() {
                if (this.box && 0 != this.searches.length) {
                    var a = this;
                    $("#tb_" + this.name + "_toolbar_item_w2ui-search-advanced").w2overlay(this.getSearchesHTML(), {
                        name: "searches-" + this.name,
                        left: -10,
                        "class": "w2ui-grid-searches",
                        onShow: function() {
                            "OR" == a.last.logic && (a.searchData = []), a.initSearches(), $("#w2ui-overlay-searches-" + this.name + " .w2ui-grid-searches").data("grid-name", a.name);
                            var b = $("#w2ui-overlay-searches-" + this.name + " .w2ui-grid-searches *[rel=search]");
                            b.length > 0 && b[0].focus()
                        }
                    })
                }
            },
            searchClose: function() {
                this.box && 0 != this.searches.length && (this.toolbar && this.toolbar.uncheck("w2ui-search-advanced"), $("#w2ui-overlay-searches-" + this.name + " .w2ui-grid-searches").length > 0 && $().w2overlay("", {
                    name: "searches-" + this.name
                }))
            },
            searchShowFields: function() {
                for (var a = $("#grid_" + this.name + "_search_all"), b = '<div class="w2ui-select-field"><table>', c = -1; c < this.searches.length; c++) {
                    var d = this.searches[c];
                    if (-1 == c) {
                        if (!this.multiSearch) continue;
                        d = {
                            field: "all",
                            caption: w2utils.lang("All Fields")
                        }
                    } else if (this.searches[c].hidden === !0) continue;
                    b += "<tr " + (w2utils.isIOS ? "onTouchStart" : "onClick") + "=\"w2ui['" + this.name + "'].initAllField('" + d.field + '\')">    <td><input type="radio" tabIndex="-1" ' + (d.field == this.last.field ? "checked" : "") + "></td>    <td>" + d.caption + "</td></tr>"
                }
                b += "</table></div>", setTimeout(function() {
                    $(a).w2overlay(b, {
                        left: -10
                    })
                }, 1)
            },
            initAllField: function(a, b) {
                var c = $("#grid_" + this.name + "_search_all"),
                    d = this.getSearch(a);
                if ("all" == a) d = {
                    field: "all",
                    caption: w2utils.lang("All Fields")
                }, c.w2field("clear"), c.change().focus();
                else {
                    var e = d.type; - 1 != ["enum", "select"].indexOf(e) && (e = "list"), c.w2field(e, $.extend({}, d.options, {
                        suffix: "",
                        autoFormat: !1,
                        selected: b
                    })), -1 != ["list", "enum"].indexOf(d.type) && (this.last.search = "", this.last.item = "", c.val("")), setTimeout(function() {
                        c.focus()
                    }, 1)
                }
                "" != this.last.search ? this.search(d.field, this.last.search) : (this.last.field = d.field, this.last.caption = d.caption), c.attr("placeholder", d.caption), $().w2overlay()
            },
            searchReset: function(a) {
                var b = this.trigger({
                    phase: "before",
                    type: "search",
                    target: this.name,
                    searchData: []
                });
                b.isCancelled !== !0 && (this.searchData = [], this.last.search = "", this.last.logic = "OR", this.last.multi = !1, this.last.xhr_offset = 0, this.last.scrollTop = 0, this.last.scrollLeft = 0, this.last.selection.indexes = [], this.last.selection.columns = {}, this.searchClose(), $("#grid_" + this.name + "_search_all").val(""), a || this.reload(), this.trigger($.extend(b, {
                    phase: "after"
                })))
            },
            clear: function(a) {
                this.records = [], this.summary = [], this.last.scrollTop = 0, this.last.scrollLeft = 0, this.last.selection.indexes = [], this.last.selection.columns = {}, this.last.range_start = null, this.last.range_end = null, this.last.xhr_offset = 0, a || this.refresh()
            },
            reset: function(a) {
                this.offset = 0, this.total = 0, this.last.scrollTop = 0, this.last.scrollLeft = 0, this.last.selection.indexes = [], this.last.selection.columns = {}, this.last.range_start = null, this.last.range_end = null, this.last.xhr_offset = 0, this.searchReset(a), null != this.last.sortData && (this.sortData = this.last.sortData), this.set({
                    expanded: !1
                }, !0), a || this.refresh()
            },
            skip: function(a) {
                var b = "object" != typeof this.url ? this.url : this.url.get;
                b ? (this.offset = parseInt(a), this.offset > this.total && (this.offset = this.total - this.limit), (this.offset < 0 || !w2utils.isInt(this.offset)) && (this.offset = 0), this.records = [], this.last.xhr_offset = 0, this.last.pull_more = !0, this.last.scrollTop = 0, this.last.scrollLeft = 0, $("#grid_" + this.name + "_records").prop("scrollTop", 0), this.reload()) : console.log("ERROR: grid.skip() can only be called when you have remote data source.")
            },
            load: function(a, b) {
                return "undefined" == typeof a ? void console.log('ERROR: You need to provide url argument when calling .load() method of "' + this.name + '" object.') : void this.request("get-records", {}, a, b)
            },
            reload: function(a) {
                var b = "object" != typeof this.url ? this.url : this.url.get;
                b ? (this.clear(!0), this.request("get-records", {}, null, a)) : (this.last.scrollTop = 0, this.last.scrollLeft = 0, this.last.range_start = null, this.last.range_end = null, this.localSearch(), this.refresh(), "function" == typeof a && a({
                    status: "success"
                }))
            },
            request: function(a, b, c, d) {
                if ("undefined" == typeof b && (b = {}), ("undefined" == typeof c || "" == c || null == c) && (c = this.url), "" != c && null != c) {
                    var e = {};
                    if (w2utils.isInt(this.offset) || (this.offset = 0), w2utils.isInt(this.last.xhr_offset) || (this.last.xhr_offset = 0), e.cmd = a, e.selected = this.getSelection(), e.limit = this.limit, e.offset = parseInt(this.offset) + this.last.xhr_offset, e.search = this.searchData, e.searchLogic = this.last.logic, e.sort = this.sortData, 0 == this.searchData.length && (delete e.search, delete e.searchLogic), 0 == this.sortData.length && delete e.sort, $.extend(e, this.postData), $.extend(e, b), "get-records" == a) {
                        var f = this.trigger({
                            phase: "before",
                            type: "request",
                            target: this.name,
                            url: c,
                            postData: e
                        });
                        if (f.isCancelled === !0) return void("function" == typeof d && d({
                            status: "error",
                            message: "Request aborted."
                        }))
                    } else var f = {
                        url: c,
                        postData: e
                    };
                    var g = this;
                    if (0 == this.last.xhr_offset) this.lock(this.msgRefresh, !0);
                    else {
                        var h = $("#grid_" + this.name + "_rec_more");
                        this.autoLoad === !0 ? h.show().find("td").html('<div><div style="width: 20px; height: 20px;" class="w2ui-spinner"></div></div>') : h.find("td").html("<div>" + w2utils.lang("Load") + " " + g.limit + " " + w2utils.lang("More") + "...</div>")
                    }
                    if (this.last.xhr) try {
                        this.last.xhr.abort()
                    } catch (i) {}
                    var c = "object" != typeof f.url ? f.url : f.url.get;
                    if ("save-records" == e.cmd && "object" == typeof f.url && (c = f.url.save), "delete-records" == e.cmd && "object" == typeof f.url && (c = f.url.remove), !$.isEmptyObject(g.routeData)) {
                        var j = w2utils.parseRoute(c);
                        if (j.keys.length > 0)
                            for (var k = 0; k < j.keys.length; k++) null != g.routeData[j.keys[k].name] && (c = c.replace(new RegExp(":" + j.keys[k].name, "g"), g.routeData[j.keys[k].name]))
                    }
                    var l = {
                        type: "POST",
                        url: c,
                        data: f.postData,
                        dataType: "text"
                    };
                    "HTTP" == w2utils.settings.dataType && (l.data = "object" == typeof l.data ? String($.param(l.data, !1)).replace(/%5B/g, "[").replace(/%5D/g, "]") : l.data), "RESTFULL" == w2utils.settings.dataType && (l.type = "GET", "save-records" == e.cmd && (l.type = "PUT"), "delete-records" == e.cmd && (l.type = "DELETE"), l.data = "object" == typeof l.data ? String($.param(l.data, !1)).replace(/%5B/g, "[").replace(/%5D/g, "]") : l.data), "JSON" == w2utils.settings.dataType && (l.type = "POST", l.data = JSON.stringify(l.data), l.contentType = "application/json"), this.method && (l.type = this.method), this.last.xhr_cmd = e.cmd, this.last.xhr_start = (new Date).getTime(), this.last.xhr = $.ajax(l).done(function(b, c) {
                        g.requestComplete(c, a, d)
                    }).fail(function(b, c, e) {
                        var f = {
                                status: c,
                                error: e,
                                rawResponseText: b.responseText
                            },
                            h = g.trigger({
                                phase: "before",
                                type: "error",
                                error: f,
                                xhr: b
                            });
                        if (h.isCancelled !== !0) {
                            if ("abort" != c) {
                                var i;
                                try {
                                    i = $.parseJSON(b.responseText)
                                } catch (j) {}
                                console.log("ERROR: Server communication failed.", "\n   EXPECTED:", {
                                    status: "success",
                                    total: 5,
                                    records: [{
                                        recid: 1,
                                        field: "value"
                                    }]
                                }, "\n         OR:", {
                                    status: "error",
                                    message: "error message"
                                }, "\n   RECEIVED:", "object" == typeof i ? i : b.responseText), g.requestComplete("error", a, d)
                            }
                            g.trigger($.extend(h, {
                                phase: "after"
                            }))
                        }
                    }), "get-records" == a && this.trigger($.extend(f, {
                        phase: "after"
                    }))
                }
            },
            requestComplete: function(status, cmd, callBack) {
                var obj = this;
                this.unlock(), setTimeout(function() {
                    obj.status(w2utils.lang("Server Response") + " " + ((new Date).getTime() - obj.last.xhr_start) / 1e3 + " " + w2utils.lang("sec"))
                }, 10), this.last.pull_more = !1, this.last.pull_refresh = !0;
                var event_name = "load";
                "save-records" == this.last.xhr_cmd && (event_name = "save"), "delete-records" == this.last.xhr_cmd && (event_name = "deleted");
                var eventData = this.trigger({
                    phase: "before",
                    target: this.name,
                    type: event_name,
                    xhr: this.last.xhr,
                    status: status
                });
                if (eventData.isCancelled === !0) return void("function" == typeof callBack && callBack({
                    status: "error",
                    message: "Request aborted."
                }));
                var data, responseText = this.last.xhr.responseText;
                if ("error" != status) {
                    if ("undefined" != typeof responseText && "" != responseText) {
                        if ("object" == typeof responseText) data = responseText;
                        else if ("function" == typeof obj.parser) data = obj.parser(responseText), "object" != typeof data && console.log("ERROR: Your parser did not return proper object");
                        else try {
                            eval("data = " + responseText)
                        } catch (e) {}
                        if (obj.recid)
                            for (var r in data.records) data.records[r].recid = data.records[r][obj.recid];
                        if ("undefined" == typeof data && (data = {
                                status: "error",
                                message: this.msgNotJSON,
                                responseText: responseText
                            }), "error" == data.status) obj.error(data.message);
                        else {
                            if ("get-records" == cmd)
                                if (0 == this.last.xhr_offset) this.records = [], this.summary = [], delete data.status, $.extend(!0, this, data);
                                else {
                                    var records = data.records;
                                    delete data.records, delete data.status, $.extend(!0, this, data);
                                    for (var r in records) this.records.push(records[r])
                                }
                            if ("delete-records" == cmd) return void this.reset()
                        }
                    }
                } else data = {
                    status: "error",
                    message: this.msgAJAXerror,
                    responseText: responseText
                }, obj.error(this.msgAJAXerror);
                var url = "object" != typeof this.url ? this.url : this.url.get;
                url || (this.localSort(), this.localSearch()), this.total = parseInt(this.total), this.trigger($.extend(eventData, {
                    phase: "after"
                })), 0 == this.last.xhr_offset ? this.refresh() : this.scroll(), "function" == typeof callBack && callBack(data)
            },
            error: function(a) {
                var b = this.trigger({
                    target: this.name,
                    type: "error",
                    message: a,
                    xhr: this.last.xhr
                });
                return b.isCancelled === !0 ? void("function" == typeof callBack && callBack({
                    status: "error",
                    message: "Request aborted."
                })) : (w2alert(a, "Error"), void this.trigger($.extend(b, {
                    phase: "after"
                })))
            },
            getChanges: function() {
                var a = [];
                for (var b in this.records) {
                    var c = this.records[b];
                    "undefined" != typeof c.changes && a.push($.extend(!0, {
                        recid: c.recid
                    }, c.changes))
                }
                return a
            },
            mergeChanges: function() {
                var changes = this.getChanges();
                for (var c in changes) {
                    var record = this.get(changes[c].recid);
                    for (var s in changes[c])
                        if ("recid" != s) {
                            try {
                                eval("record." + s + " = changes[c][s]")
                            } catch (e) {}
                            delete record.changes
                        }
                }
                this.refresh()
            },
            save: function() {
                var a = this,
                    b = this.getChanges(),
                    c = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "submit",
                        changes: b
                    });
                if (c.isCancelled !== !0) {
                    var d = "object" != typeof this.url ? this.url : this.url.save;
                    d ? this.request("save-records", {
                        changes: c.changes
                    }, null, function(b) {
                        "error" !== b.status && a.mergeChanges(), a.trigger($.extend(c, {
                            phase: "after"
                        }))
                    }) : (this.mergeChanges(), this.trigger($.extend(c, {
                        phase: "after"
                    })))
                }
            },
            editField: function(a, b, c, d) {
                var e = this,
                    f = e.get(a, !0),
                    g = e.records[f],
                    h = e.columns[b],
                    i = h ? h.editable : null;
                if (g && h && i && g.editable !== !1) {
                    if (-1 != ["enum", "file"].indexOf(i.type)) return void console.log('ERROR: input types "enum" and "file" are not supported in inline editing.');
                    var j = e.trigger({
                        phase: "before",
                        type: "editField",
                        target: e.name,
                        recid: a,
                        column: b,
                        value: c,
                        index: f,
                        originalEvent: d
                    });
                    if (j.isCancelled !== !0 && (c = j.value, this.selectNone(), this.select({
                            recid: a,
                            column: b
                        }), this.last.edit_col = b, -1 == ["checkbox", "check"].indexOf(i.type))) {
                        var k = $("#grid_" + e.name + "_rec_" + w2utils.escapeId(a)),
                            l = k.find("[col=" + b + "] > div");
                        "undefined" == typeof i.inTag && (i.inTag = ""), "undefined" == typeof i.outTag && (i.outTag = ""), "undefined" == typeof i.style && (i.style = ""), "undefined" == typeof i.items && (i.items = []);
                        var m = w2utils.stripTags(g.changes && "undefined" != typeof g.changes[h.field] ? g.changes[h.field] : g[h.field]);
                        (null == m || "undefined" == typeof m) && (m = ""), "undefined" != typeof c && null != c && (m = c);
                        var n = "undefined" != typeof h.style ? h.style + ";" : "";
                        if ("string" == typeof h.render && -1 != ["number", "int", "float", "money", "percent"].indexOf(h.render.split(":")[0]) && (n += "text-align: right;"), i.items.length > 0 && !$.isPlainObject(i.items[0]) && (i.items = w2obj.field.prototype.normMenu(i.items)), "select" == i.type) {
                            var o = "";
                            for (var p in i.items) o += '<option value="' + i.items[p].id + '" ' + (i.items[p].id == m ? "selected" : "") + ">" + i.items[p].text + "</option>";
                            l.addClass("w2ui-editable").html('<select id="grid_' + e.name + "_edit_" + a + "_" + b + '" column="' + b + '"     style="width: 100%; ' + n + i.style + '" field="' + h.field + '" recid="' + a + '"     ' + i.inTag + ">" + o + "</select>" + i.outTag), l.find("select").focus().on("change", function() {
                                delete e.last.move
                            }).on("blur", function(a) {
                                e.editChange.call(e, this, f, b, a)
                            })
                        } else {
                            l.addClass("w2ui-editable").html('<input id="grid_' + e.name + "_edit_" + a + "_" + b + '"     type="text" style="font-family: inherit; font-size: inherit; outline: none; ' + n + i.style + '" field="' + h.field + '" recid="' + a + '"     column="' + b + '" ' + i.inTag + ">" + i.outTag), null == c && l.find("input").val("object" != m ? m : "");
                            var q = l.find("input").get(0);
                            $(q).w2field(i.type, $.extend(i, {
                                selected: m
                            })), setTimeout(function() {
                                var a = q;
                                "list" == i.type && (a = $($(q).data("w2field").helpers.focus).find("input"), "object" != typeof m && "" != m && a.val(m).css({
                                    opacity: 1
                                }).prev().css({
                                    opacity: 1
                                })), $(a).on("blur", function(a) {
                                    e.editChange.call(e, q, f, b, a)
                                })
                            }, 10), null != c && $(q).val("object" != m ? m : "")
                        }
                        setTimeout(function() {
                            l.find("input, select").on("click", function(a) {
                                a.stopPropagation()
                            }).on("keydown", function(c) {
                                var d = !1;
                                switch (c.keyCode) {
                                    case 9:
                                        d = !0;
                                        var i = a,
                                            j = c.shiftKey ? e.prevCell(b, !0) : e.nextCell(b, !0);
                                        if (null == j) {
                                            var k = c.shiftKey ? e.prevRow(f) : e.nextRow(f);
                                            if (null != k && k != f) {
                                                i = e.records[k].recid;
                                                for (var l in e.columns) {
                                                    var k = e.columns[l].editable;
                                                    if ("undefined" != typeof k && -1 == ["checkbox", "check"].indexOf(k.type) && (j = parseInt(l), !c.shiftKey)) break
                                                }
                                            }
                                        }
                                        i === !1 && (i = a), null == j && (j = b), this.blur(), setTimeout(function() {
                                            "row" != e.selectType ? (e.selectNone(), e.select({
                                                recid: i,
                                                column: j
                                            })) : e.editField(i, j, null, c)
                                        }, 1);
                                        break;
                                    case 13:
                                        this.blur();
                                        var m = c.shiftKey ? e.prevRow(f) : e.nextRow(f);
                                        null != m && m != f && setTimeout(function() {
                                            "row" != e.selectType ? (e.selectNone(), e.select({
                                                recid: e.records[m].recid,
                                                column: b
                                            })) : e.editField(e.records[m].recid, b, null, c)
                                        }, 100);
                                        break;
                                    case 38:
                                        if (!c.shiftKey) break;
                                        d = !0;
                                        var m = e.prevRow(f);
                                        m != f && (this.blur(), setTimeout(function() {
                                            "row" != e.selectType ? (e.selectNone(), e.select({
                                                recid: e.records[m].recid,
                                                column: b
                                            })) : e.editField(e.records[m].recid, b, null, c)
                                        }, 1));
                                        break;
                                    case 40:
                                        if (!c.shiftKey) break;
                                        d = !0;
                                        var m = e.nextRow(f);
                                        null != m && m != f && (this.blur(), setTimeout(function() {
                                            "row" != e.selectType ? (e.selectNone(), e.select({
                                                recid: e.records[m].recid,
                                                column: b
                                            })) : e.editField(e.records[m].recid, b, null, c)
                                        }, 1));
                                        break;
                                    case 27:
                                        var n = e.parseField(g, h.field);
                                        g.changes && "undefined" != typeof g.changes[h.field] && (n = g.changes[h.field]), this.value = "undefined" != typeof n ? n : "", this.blur(), setTimeout(function() {
                                            e.select({
                                                recid: a,
                                                column: b
                                            })
                                        }, 1)
                                }
                                d && c.preventDefault && c.preventDefault()
                            });
                            var d = l.find("input").focus();
                            null != c ? d[0].setSelectionRange(d.val().length, d.val().length) : d.select()
                        }, 1), e.trigger($.extend(j, {
                            phase: "after"
                        }))
                    }
                }
            },
            editChange: function(a, b, c) {
                var d = 0 > b;
                b = 0 > b ? -b - 1 : b;
                var e = d ? this.summary : this.records,
                    f = e[b],
                    g = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(f.recid)),
                    h = this.columns[c],
                    i = a.value,
                    j = this.parseField(f, h.field),
                    k = $(a).data("w2field");
                k && (i = k.clean(i), "list" == k.type && "" != i && (i = $(a).data("selected"))), "checkbox" == a.type && (i = a.checked);
                for (var l = {
                        phase: "before",
                        type: "change",
                        target: this.name,
                        input_id: a.id,
                        recid: f.recid,
                        index: b,
                        column: c,
                        value_new: i,
                        value_previous: f.changes && f.changes.hasOwnProperty(h.field) ? f.changes[h.field] : j,
                        value_original: j
                    };;) {
                    if (i = l.value_new, "object" != typeof i && String(j) != String(i) || "object" == typeof i && ("object" != typeof j || i.id != j.id)) {
                        if (l = this.trigger($.extend(l, {
                                type: "change",
                                phase: "before"
                            })), l.isCancelled !== !0) {
                            if (i !== l.value_new) continue;
                            f.changes = f.changes || {}, f.changes[h.field] = l.value_new, this.trigger($.extend(l, {
                                phase: "after"
                            }))
                        }
                    } else if (l = this.trigger($.extend(l, {
                            type: "restore",
                            phase: "before"
                        })), l.isCancelled !== !0) {
                        if (i !== l.value_new) continue;
                        f.changes && delete f.changes[h.field], $.isEmptyObject(f.changes) && delete f.changes, this.trigger($.extend(l, {
                            phase: "after"
                        }))
                    }
                    break
                }
                var m = this.getCellHTML(b, c, d);
                d || (f.changes && "undefined" != typeof f.changes[h.field] ? $(g).find("[col=" + c + "]").addClass("w2ui-changed").html(m) : $(g).find("[col=" + c + "]").removeClass("w2ui-changed").html(m))
            },
            "delete": function(a) {
                var b = this,
                    c = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "delete",
                        force: a
                    });
                if (c.isCancelled !== !0) {
                    a = c.force;
                    var d = this.getSelection();
                    if (0 != d.length) {
                        if ("" != this.msgDelete && !a) return void w2confirm({
                            title: w2utils.lang("Delete Confirmation"),
                            msg: b.msgDelete,
                            btn_yes: {
                                "class": "btn-red"
                            },
                            callBack: function(a) {
                                "Yes" == a && w2ui[b.name]["delete"](!0)
                            }
                        });
                        var e = "object" != typeof this.url ? this.url : this.url.remove;
                        if (e) this.request("delete-records");
                        else if (this.selectNone(), "object" != typeof d[0]) this.remove.apply(this, d);
                        else {
                            for (var f in d) {
                                var g = this.columns[d[f].column].field,
                                    h = this.get(d[f].recid, !0);
                                null != h && "recid" != g && (this.records[h][g] = "", this.records[h].changes && delete this.records[h].changes[g])
                            }
                            this.refresh()
                        }
                        this.trigger($.extend(c, {
                            phase: "after"
                        }))
                    }
                }
            },
            click: function(a, b) {
                var c = (new Date).getTime(),
                    d = null;
                if (!(1 == this.last.cancelClick || b && b.altKey)) {
                    if ("object" == typeof a && (d = a.column, a = a.recid), "undefined" == typeof b && (b = {}), c - parseInt(this.last.click_time) < 350 && "click" == b.type) return void this.dblClick(a, b);
                    if (this.last.click_time = c, null == d && b.target) {
                        var e = b.target;
                        "TD" != e.tagName && (e = $(e).parents("td")[0]), "undefined" != typeof $(e).attr("col") && (d = parseInt($(e).attr("col")))
                    }
                    var f = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "click",
                        recid: a,
                        column: d,
                        originalEvent: b
                    });
                    if (f.isCancelled !== !0) {
                        var g = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(a)).parents("tr");
                        if (g.length > 0 && -1 != String(g.attr("id")).indexOf("expanded_row")) {
                            var h = g.parents(".w2ui-grid").attr("name");
                            w2ui[h].selectNone(), g.parents(".w2ui-grid").find(".w2ui-expanded-row .w2ui-grid").each(function(a, b) {
                                var c = $(b).attr("name");
                                w2ui[c] && w2ui[c].selectNone()
                            })
                        }
                        $(this.box).find(".w2ui-expanded-row .w2ui-grid").each(function(a, b) {
                            var c = $(b).attr("name");
                            w2ui[c] && w2ui[c].selectNone()
                        });
                        var i = this,
                            j = this.getSelection();
                        $("#grid_" + this.name + "_check_all").prop("checked", !1);
                        var k = this.get(a, !0),
                            l = (this.records[k], []);
                        if (i.last.sel_ind = k, i.last.sel_col = d, i.last.sel_recid = a, i.last.sel_type = "click", b.shiftKey && j.length > 0 && i.multiSelect) {
                            if (j[0].recid) {
                                var m = this.get(j[0].recid, !0),
                                    n = this.get(a, !0);
                                if (d > j[0].column) var o = j[0].column,
                                    p = d;
                                else var o = d,
                                    p = j[0].column;
                                for (var q = o; p >= q; q++) l.push(q)
                            } else var m = this.get(j[0], !0),
                                n = this.get(a, !0);
                            var r = [];
                            if (m > n) {
                                var e = m;
                                m = n, n = e
                            }
                            for (var s = "object" != typeof this.url ? this.url : this.url.get, t = m; n >= t; t++)
                                if (!(this.searchData.length > 0) || s || -1 != $.inArray(t, this.last.searchIds))
                                    if ("row" == this.selectType) r.push(this.records[t].recid);
                                    else
                                        for (var u in l) r.push({
                                            recid: this.records[t].recid,
                                            column: l[u]
                                        });
                            this.select.apply(this, r)
                        } else {
                            var v = this.last.selection,
                                w = -1 != v.indexes.indexOf(k) ? !0 : !1;
                            (b.ctrlKey || b.shiftKey || b.metaKey) && this.multiSelect || this.showSelectColumn ? ("row" != this.selectType && -1 == $.inArray(d, v.columns[k]) && (w = !1), w === !0 ? this.unselect({
                                recid: a,
                                column: d
                            }) : this.select({
                                recid: a,
                                column: d
                            })) : ("row" != this.selectType && -1 == $.inArray(d, v.columns[k]) && (w = !1), j.length > 300 ? this.selectNone() : this.unselect.apply(this, j), w === !0 ? this.unselect({
                                recid: a,
                                column: d
                            }) : this.select({
                                recid: a,
                                column: d
                            }))
                        }
                        this.status(), i.initResize(), this.trigger($.extend(f, {
                            phase: "after"
                        }))
                    }
                }
            },
            columnClick: function(a, b) {
                var c = this.trigger({
                    phase: "before",
                    type: "columnClick",
                    target: this.name,
                    field: a,
                    originalEvent: b
                });
                if (c.isCancelled !== !0) {
                    var d = this.getColumn(a);
                    d.sortable && this.sort(a, null, b && (b.ctrlKey || b.metaKey) ? !0 : !1), this.trigger($.extend(c, {
                        phase: "after"
                    }))
                }
            },
            keydown: function(a) {
                function b() {
                    $("#_tmp_copy_data").remove(), $(document).off("keyup", b)
                }

                function c() {
                    var a = Math.floor((h[0].scrollTop + h.height() / 2.1) / e.recordHeight);
                    e.records[a] || (a = 0), e.select({
                        recid: e.records[a].recid,
                        column: 0
                    })
                }

                function d() {
                    if ("click" != e.last.sel_type) return !1;
                    if ("row" != e.selectType) {
                        if (e.last.sel_type = "key", i.length > 1) {
                            for (var a in i)
                                if (i[a].recid == e.last.sel_recid && i[a].column == e.last.sel_col) {
                                    i.splice(a, 1);
                                    break
                                }
                            return e.unselect.apply(e, i), !0
                        }
                        return !1
                    }
                    return e.last.sel_type = "key", i.length > 1 ? (i.splice(i.indexOf(e.records[e.last.sel_ind].recid), 1), e.unselect.apply(e, i), !0) : !1
                }
                var e = this;
                if (e.keyboard === !0) {
                    var f = e.trigger({
                        phase: "before",
                        type: "keydown",
                        target: e.name,
                        originalEvent: a
                    });
                    if (f.isCancelled !== !0) {
                        var g = !1,
                            h = $("#grid_" + e.name + "_records"),
                            i = e.getSelection();
                        0 == i.length && (g = !0);
                        var j = i[0] || null,
                            k = [],
                            l = i[i.length - 1];
                        if ("object" == typeof j && null != j) {
                            j = i[0].recid, k = [];
                            for (var m = 0;;) {
                                if (!i[m] || i[m].recid != j) break;
                                k.push(i[m].column), m++
                            }
                            l = i[i.length - 1].recid
                        }
                        var n = e.get(j, !0),
                            o = e.get(l, !0),
                            p = e.get(j),
                            q = $("#grid_" + e.name + "_rec_" + (null !== n ? w2utils.escapeId(e.records[n].recid) : "none")),
                            r = !1,
                            s = a.keyCode,
                            t = a.shiftKey;
                        switch (9 == s && (s = a.shiftKey ? 37 : 39, t = !1, r = !0), s) {
                            case 8:
                            case 46:
                                this.show.toolbarDelete && e["delete"](), r = !0, a.stopPropagation();
                                break;
                            case 27:
                                e.selectNone(), i.length > 0 && "object" == typeof i[0] && e.select({
                                    recid: i[0].recid,
                                    column: i[0].column
                                }), r = !0;
                                break;
                            case 65:
                                if (!a.metaKey && !a.ctrlKey) break;
                                e.selectAll(), r = !0;
                                break;
                            case 70:
                                if (!a.metaKey && !a.ctrlKey) break;
                                $("#grid_" + e.name + "_search_all").focus(), r = !0;
                                break;
                            case 13:
                                if ("row" == this.selectType && e.show.expandColumn === !0) {
                                    if (q.length <= 0) break;
                                    e.toggle(j, a), r = !0
                                } else {
                                    for (var u in this.columns)
                                        if (this.columns[u].editable) {
                                            k.push(parseInt(u));
                                            break
                                        }
                                        "row" == this.selectType && this.last.edit_col && (k = [this.last.edit_col]), k.length > 0 && (e.editField(j, k[0], null, a), r = !0)
                                }
                                break;
                            case 37:
                                if (g) break;
                                var v = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(e.records[n].recid)).parents("tr");
                                if (v.length > 0 && -1 != String(v.attr("id")).indexOf("expanded_row")) {
                                    var j = v.prev().attr("recid"),
                                        w = v.parents(".w2ui-grid").attr("name");
                                    e.selectNone(), w2utils.keyboard.active(w), w2ui[w].set(j, {
                                        expanded: !1
                                    }), w2ui[w].collapse(j), w2ui[w].click(j), r = !0;
                                    break
                                }
                                if ("row" == this.selectType) {
                                    if (q.length <= 0 || p.expanded !== !0) break;
                                    e.set(j, {
                                        expanded: !1
                                    }, !0), e.collapse(j, a)
                                } else {
                                    var x = e.prevCell(k[0]);
                                    if (null != x)
                                        if (t && e.multiSelect) {
                                            if (d()) return;
                                            var y = [],
                                                z = [],
                                                A = [];
                                            if (0 == k.indexOf(this.last.sel_col) && k.length > 1)
                                                for (var B in i) - 1 == y.indexOf(i[B].recid) && y.push(i[B].recid), A.push({
                                                    recid: i[B].recid,
                                                    column: k[k.length - 1]
                                                });
                                            else
                                                for (var B in i) - 1 == y.indexOf(i[B].recid) && y.push(i[B].recid), z.push({
                                                    recid: i[B].recid,
                                                    column: x
                                                });
                                            e.unselect.apply(e, A), e.select.apply(e, z)
                                        } else a.shiftKey = !1, e.click({
                                            recid: j,
                                            column: x
                                        }, a);
                                    else if (!t)
                                        for (var C = 1; C < i.length; C++) e.unselect(i[C])
                                }
                                r = !0;
                                break;
                            case 39:
                                if (g) break;
                                if ("row" == this.selectType) {
                                    if (q.length <= 0 || p.expanded === !0 || e.show.expandColumn !== !0) break;
                                    e.expand(j, a)
                                } else {
                                    var D = e.nextCell(k[k.length - 1]);
                                    if (null !== D)
                                        if (t && 39 == s && e.multiSelect) {
                                            if (d()) return;
                                            var y = [],
                                                z = [],
                                                A = [];
                                            if (k.indexOf(this.last.sel_col) == k.length - 1 && k.length > 1)
                                                for (var B in i) - 1 == y.indexOf(i[B].recid) && y.push(i[B].recid), A.push({
                                                    recid: i[B].recid,
                                                    column: k[0]
                                                });
                                            else
                                                for (var B in i) - 1 == y.indexOf(i[B].recid) && y.push(i[B].recid), z.push({
                                                    recid: i[B].recid,
                                                    column: D
                                                });
                                            e.unselect.apply(e, A), e.select.apply(e, z)
                                        } else e.click({
                                            recid: j,
                                            column: D
                                        }, a);
                                    else if (!t)
                                        for (var C = 0; C < i.length - 1; C++) e.unselect(i[C])
                                }
                                r = !0;
                                break;
                            case 38:
                                if (g && c(), q.length <= 0) break;
                                var x = e.prevRow(n);
                                if (null != x) {
                                    if (e.records[x].expanded) {
                                        var E = $("#grid_" + e.name + "_rec_" + w2utils.escapeId(e.records[x].recid) + "_expanded_row").find(".w2ui-grid");
                                        if (E.length > 0 && w2ui[E.attr("name")]) {
                                            e.selectNone();
                                            var w = E.attr("name"),
                                                F = w2ui[w].records;
                                            w2utils.keyboard.active(w), w2ui[w].click(F[F.length - 1].recid), r = !0;
                                            break
                                        }
                                    }
                                    if (t && e.multiSelect) {
                                        if (d()) return;
                                        if ("row" == e.selectType) e.last.sel_ind > x && e.last.sel_ind != o ? e.unselect(e.records[o].recid) : e.select(e.records[x].recid);
                                        else if (e.last.sel_ind > x && e.last.sel_ind != o) {
                                            x = o;
                                            var y = [];
                                            for (var u in k) y.push({
                                                recid: e.records[x].recid,
                                                column: k[u]
                                            });
                                            e.unselect.apply(e, y)
                                        } else {
                                            var y = [];
                                            for (var u in k) y.push({
                                                recid: e.records[x].recid,
                                                column: k[u]
                                            });
                                            e.select.apply(e, y)
                                        }
                                    } else e.selectNone(), e.click({
                                        recid: e.records[x].recid,
                                        column: k[0]
                                    }, a);
                                    e.scrollIntoView(x), a.preventDefault && a.preventDefault()
                                } else {
                                    if (!t)
                                        for (var C = 1; C < i.length; C++) e.unselect(i[C]);
                                    var v = $("#grid_" + e.name + "_rec_" + w2utils.escapeId(e.records[n].recid)).parents("tr");
                                    if (v.length > 0 && -1 != String(v.attr("id")).indexOf("expanded_row")) {
                                        var j = v.prev().attr("recid"),
                                            w = v.parents(".w2ui-grid").attr("name");
                                        e.selectNone(), w2utils.keyboard.active(w), w2ui[w].click(j), r = !0;
                                        break
                                    }
                                }
                                break;
                            case 40:
                                if (g && c(), q.length <= 0) break;
                                if (e.records[o].expanded) {
                                    var E = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(e.records[o].recid) + "_expanded_row").find(".w2ui-grid");
                                    if (E.length > 0 && w2ui[E.attr("name")]) {
                                        e.selectNone();
                                        var w = E.attr("name"),
                                            F = w2ui[w].records;
                                        w2utils.keyboard.active(w), w2ui[w].click(F[0].recid), r = !0;
                                        break
                                    }
                                }
                                var D = e.nextRow(o);
                                if (null != D) {
                                    if (t && e.multiSelect) {
                                        if (d()) return;
                                        if ("row" == e.selectType) this.last.sel_ind < D && this.last.sel_ind != n ? e.unselect(e.records[n].recid) : e.select(e.records[D].recid);
                                        else if (this.last.sel_ind < D && this.last.sel_ind != n) {
                                            D = n;
                                            var y = [];
                                            for (var u in k) y.push({
                                                recid: e.records[D].recid,
                                                column: k[u]
                                            });
                                            e.unselect.apply(e, y)
                                        } else {
                                            var y = [];
                                            for (var u in k) y.push({
                                                recid: e.records[D].recid,
                                                column: k[u]
                                            });
                                            e.select.apply(e, y)
                                        }
                                    } else e.selectNone(), e.click({
                                        recid: e.records[D].recid,
                                        column: k[0]
                                    }, a);
                                    e.scrollIntoView(D), r = !0
                                } else {
                                    if (!t)
                                        for (var C = 0; C < i.length - 1; C++) e.unselect(i[C]);
                                    var v = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(e.records[o].recid)).parents("tr");
                                    if (v.length > 0 && -1 != String(v.attr("id")).indexOf("expanded_row")) {
                                        var j = v.next().attr("recid"),
                                            w = v.parents(".w2ui-grid").attr("name");
                                        e.selectNone(), w2utils.keyboard.active(w), w2ui[w].click(j), r = !0;
                                        break
                                    }
                                }
                                break;
                            case 17:
                            case 91:
                                if (g) break;
                                var G = e.copy();
                                $("body").append('<textarea id="_tmp_copy_data"    onpaste="var obj = this; setTimeout(function () { w2ui[\'' + e.name + "'].paste(obj.value); }, 1);\"    onkeydown=\"w2ui['" + e.name + '\'].keydown(event)"   style="position: absolute; top: -100px; height: 1px; width: 1px">' + G + "</textarea>"), $("#_tmp_copy_data").focus().select(), $(document).on("keyup", b);
                                break;
                            case 88:
                                if (g) break;
                                (a.ctrlKey || a.metaKey) && setTimeout(function() {
                                    e["delete"](!0)
                                }, 100)
                        }
                        for (var y = [187, 189, 32], B = 48; 90 >= B; B++) y.push(B);
                        if (-1 != y.indexOf(s) && !a.ctrlKey && !a.metaKey && !r) {
                            0 == k.length && k.push(0);
                            var y = String.fromCharCode(s);
                            187 == s && (y = "="), 189 == s && (y = "-"), t || (y = y.toLowerCase()), e.editField(j, k[0], y, a), r = !0
                        }
                        r && a.preventDefault && a.preventDefault(), e.trigger($.extend(f, {
                            phase: "after"
                        }))
                    }
                }
            },
            scrollIntoView: function(a) {
                var b = this.records.length;
                if (0 == this.searchData.length || this.url || (b = this.last.searchIds.length), "undefined" == typeof a) {
                    var c = this.getSelection();
                    if (0 == c.length) return;
                    a = this.get(c[0], !0)
                }
                var d = $("#grid_" + this.name + "_records");
                if (0 != b) {
                    var e = this.last.searchIds.length;
                    if (!(d.height() > this.recordHeight * (e > 0 ? e : b))) {
                        e > 0 && (a = this.last.searchIds.indexOf(a));
                        var f = Math.floor(d[0].scrollTop / this.recordHeight),
                            g = f + Math.floor(d.height() / this.recordHeight);
                        a == f && d.animate({
                            scrollTop: d.scrollTop() - d.height() / 1.3
                        }, 250, "linear"), a == g && d.animate({
                            scrollTop: d.scrollTop() + d.height() / 1.3
                        }, 250, "linear"), (f > a || a > g) && d.animate({
                            scrollTop: (a - 1) * this.recordHeight
                        })
                    }
                }
            },
            dblClick: function(a, b) {
                var c = null;
                if ("object" == typeof a && (c = a.column, a = a.recid), "undefined" == typeof b && (b = {}), null == c && b.target) {
                    var d = b.target;
                    "TD" != d.tagName && (d = $(d).parents("td")[0]), c = parseInt($(d).attr("col"))
                }
                var e = this.trigger({
                    phase: "before",
                    target: this.name,
                    type: "dblClick",
                    recid: a,
                    column: c,
                    originalEvent: b
                });
                if (e.isCancelled !== !0) {
                    this.selectNone();
                    var f = this.columns[c];
                    f && $.isPlainObject(f.editable) ? this.editField(a, c, null, b) : this.select({
                        recid: a,
                        column: c
                    }), this.trigger($.extend(e, {
                        phase: "after"
                    }))
                }
            },
            contextMenu: function(a, b) {
                var c = this;
                "text" != c.last.userSelect && ("undefined" == typeof b && (b = {
                    offsetX: 0,
                    offsetY: 0,
                    target: $("#grid_" + c.name + "_rec_" + a)[0]
                }), "undefined" == typeof b.offsetX && (b.offsetX = b.layerX - b.target.offsetLeft, b.offsetY = b.layerY - b.target.offsetTop), w2utils.isFloat(a) && (a = parseFloat(a)), -1 == this.getSelection().indexOf(a) && c.click(a), setTimeout(function() {
                    var d = c.trigger({
                        phase: "before",
                        type: "contextMenu",
                        target: c.name,
                        originalEvent: b,
                        recid: a
                    });
                    d.isCancelled !== !0 && (c.menu.length > 0 && $(c.box).find(b.target).w2menu(c.menu, {
                        left: b.offsetX,
                        onSelect: function(b) {
                            c.menuClick(a, parseInt(b.index), b.originalEvent)
                        }
                    }), c.trigger($.extend(d, {
                        phase: "after"
                    })))
                }, 150), b.preventDefault && b.preventDefault())
            },
            menuClick: function(a, b, c) {
                var d = this,
                    e = d.trigger({
                        phase: "before",
                        type: "menuClick",
                        target: d.name,
                        originalEvent: c,
                        recid: a,
                        menuIndex: b,
                        menuItem: d.menu[b]
                    });
                e.isCancelled !== !0 && d.trigger($.extend(e, {
                    phase: "after"
                }))
            },
            toggle: function(a) {
                var b = this.get(a);
                return b.expanded === !0 ? this.collapse(a) : this.expand(a)
            },
            expand: function(a) {
                function b() {
                    var b = $("#grid_" + d.name + "_rec_" + e + "_expanded"),
                        c = $("#grid_" + d.name + "_rec_" + e + "_expanded_row .w2ui-expanded1 > div");
                    b.height() < 5 || (b.css("opacity", 1), c.show().css("opacity", 1), $("#grid_" + d.name + "_cell_" + d.get(a, !0) + "_expand div").html("-"))
                }
                var c = this.get(a),
                    d = this,
                    e = w2utils.escapeId(a);
                if ($("#grid_" + this.name + "_rec_" + e + "_expanded_row").length > 0) return !1;
                if ("none" == c.expanded) return !1;
                var f = 1 + (this.show.selectColumn ? 1 : 0),
                    g = "";
                $("#grid_" + this.name + "_rec_" + e).after('<tr id="grid_' + this.name + "_rec_" + a + '_expanded_row" class="w2ui-expanded-row ' + g + '">' + (this.show.lineNumbers ? '<td class="w2ui-col-number"></td>' : "") + '    <td class="w2ui-grid-data w2ui-expanded1" colspan="' + f + '"><div style="display: none"></div></td>    <td colspan="100" class="w2ui-expanded2">        <div id="grid_' + this.name + "_rec_" + a + '_expanded" style="opacity: 0"></div>    </td></tr>');
                var h = this.trigger({
                    phase: "before",
                    type: "expand",
                    target: this.name,
                    recid: a,
                    box_id: "grid_" + this.name + "_rec_" + a + "_expanded",
                    ready: b
                });
                return h.isCancelled === !0 ? void $("#grid_" + this.name + "_rec_" + e + "_expanded_row").remove() : ($("#grid_" + this.name + "_rec_" + e).attr("expanded", "yes").addClass("w2ui-expanded"), $("#grid_" + this.name + "_rec_" + e + "_expanded_row").show(), $("#grid_" + this.name + "_cell_" + this.get(a, !0) + "_expand div").html('<div class="w2ui-spinner" style="width: 16px; height: 16px; margin: -2px 2px;"></div>'), c.expanded = !0, setTimeout(b, 300), this.trigger($.extend(h, {
                    phase: "after"
                })), this.resizeRecords(), !0)
            },
            collapse: function(a) {
                var b = this.get(a),
                    c = this,
                    d = w2utils.escapeId(a);
                if (0 == $("#grid_" + this.name + "_rec_" + d + "_expanded_row").length) return !1;
                var e = this.trigger({
                    phase: "before",
                    type: "collapse",
                    target: this.name,
                    recid: a,
                    box_id: "grid_" + this.name + "_rec_" + d + "_expanded"
                });
                return e.isCancelled !== !0 ? ($("#grid_" + this.name + "_rec_" + d).removeAttr("expanded").removeClass("w2ui-expanded"), $("#grid_" + this.name + "_rec_" + d + "_expanded").css("opacity", 0), $("#grid_" + this.name + "_cell_" + this.get(a, !0) + "_expand div").html("+"), setTimeout(function() {
                    $("#grid_" + c.name + "_rec_" + d + "_expanded").height("0px"), setTimeout(function() {
                        $("#grid_" + c.name + "_rec_" + d + "_expanded_row").remove(), delete b.expanded, c.trigger($.extend(e, {
                            phase: "after"
                        })), c.resizeRecords()
                    }, 300)
                }, 200), !0) : void 0
            },
            sort: function(a, b, c) {
                var d = this.trigger({
                    phase: "before",
                    type: "sort",
                    target: this.name,
                    field: a,
                    direction: b,
                    multiField: c
                });
                if (d.isCancelled !== !0) {
                    if ("undefined" != typeof a) {
                        var e = this.sortData.length;
                        for (var f in this.sortData)
                            if (this.sortData[f].field == a) {
                                e = f;
                                break
                            }
                        if ("undefined" == typeof b || null == b)
                            if ("undefined" == typeof this.sortData[e]) b = "asc";
                            else switch (String(this.sortData[e].direction)) {
                                case "asc":
                                    b = "desc";
                                    break;
                                case "desc":
                                    b = "asc";
                                    break;
                                default:
                                    b = "asc"
                            }
                            this.multiSort === !1 && (this.sortData = [], e = 0), 1 != c && (this.sortData = [], e = 0), "undefined" == typeof this.sortData[e] && (this.sortData[e] = {}), this.sortData[e].field = a, this.sortData[e].direction = b
                    } else this.sortData = [];
                    this.selectNone();
                    var g = "object" != typeof this.url ? this.url : this.url.get;
                    g ? (this.trigger($.extend(d, {
                        phase: "after"
                    })), this.last.xhr_offset = 0, this.reload()) : (this.localSort(), this.searchData.length > 0 && this.localSearch(!0), this.trigger($.extend(d, {
                        phase: "after"
                    })), this.refresh())
                }
            },
            copy: function() {
                var a = this.getSelection();
                if (0 == a.length) return "";
                var b = "";
                if ("object" == typeof a[0]) {
                    var c = a[0].column,
                        d = a[0].column,
                        e = [];
                    for (var f in a) a[f].column < c && (c = a[f].column), a[f].column > d && (d = a[f].column), -1 == e.indexOf(a[f].index) && e.push(a[f].index);
                    e.sort();
                    for (var g in e) {
                        for (var h = e[g], i = c; d >= i; i++) {
                            var j = this.columns[i];
                            j.hidden !== !0 && (b += w2utils.stripTags(this.getCellHTML(h, i)) + "	")
                        }
                        b = b.substr(0, b.length - 1), b += "\n"
                    }
                } else {
                    for (var i in this.columns) {
                        var j = this.columns[i];
                        j.hidden !== !0 && (b += '"' + w2utils.stripTags(j.caption ? j.caption : j.field) + '"	')
                    }
                    b = b.substr(0, b.length - 1), b += "\n";
                    for (var f in a) {
                        var h = this.get(a[f], !0);
                        for (var i in this.columns) {
                            var j = this.columns[i];
                            j.hidden !== !0 && (b += '"' + w2utils.stripTags(this.getCellHTML(h, i)) + '"	')
                        }
                        b = b.substr(0, b.length - 1), b += "\n"
                    }
                }
                b = b.substr(0, b.length - 1);
                var k = this.trigger({
                    phase: "before",
                    type: "copy",
                    target: this.name,
                    text: b
                });
                return k.isCancelled === !0 ? "" : (b = k.text, this.trigger($.extend(k, {
                    phase: "after"
                })), b)
            },
            paste: function(a) {
                var b = this.getSelection(),
                    c = this.get(b[0].recid, !0),
                    d = b[0].column,
                    e = this.trigger({
                        phase: "before",
                        type: "paste",
                        target: this.name,
                        text: a,
                        index: c,
                        column: d
                    });
                if (e.isCancelled !== !0) {
                    if (a = e.text, "row" == this.selectType || 0 == b.length) return console.log("ERROR: You can paste only if grid.selectType = 'cell' and when at least one cell selected."), void this.trigger($.extend(e, {
                        phase: "after"
                    }));
                    var f = [],
                        a = a.split("\n");
                    for (var g in a) {
                        var h = a[g].split("	"),
                            i = 0,
                            j = this.records[c],
                            k = [];
                        for (var l in h)
                            if (this.columns[d + i]) {
                                var m = this.columns[d + i].field;
                                j.changes = j.changes || {}, j.changes[m] = h[l], k.push(d + i), i++
                            }
                        for (var n in k) f.push({
                            recid: j.recid,
                            column: k[n]
                        });
                        c++
                    }
                    this.selectNone(), this.select.apply(this, f), this.refresh(), this.trigger($.extend(e, {
                        phase: "after"
                    }))
                }
            },
            resize: function() {
                var a = this,
                    b = (new Date).getTime();
                if (this.box && $(this.box).attr("name") == this.name) {
                    $(this.box).find("> div").css("width", $(this.box).width()).css("height", $(this.box).height());
                    var c = this.trigger({
                        phase: "before",
                        type: "resize",
                        target: this.name
                    });
                    if (c.isCancelled !== !0) return a.resizeBoxes(), a.resizeRecords(), this.trigger($.extend(c, {
                        phase: "after"
                    })), (new Date).getTime() - b
                }
            },
            refreshCell: function(a, b) {
                var c = this.get(a, !0),
                    d = this.records[c] && this.records[c].recid == a ? !1 : !0,
                    e = this.getColumn(b, !0),
                    f = d ? this.summary[c] : this.records[c],
                    g = this.columns[e],
                    h = $("#grid_" + this.name + "_rec_" + a + " [col=" + e + "]");
                h.html(this.getCellHTML(c, e, d)), f.changes && "undefined" != typeof f.changes[g.field] ? h.addClass("w2ui-changed") : h.removeClass("w2ui-changed")
            },
            refreshRow: function(a) {
                var b = $("#grid_" + this.name + "_rec_" + w2utils.escapeId(a));
                if (0 != b.length) {
                    var c = this.get(a, !0),
                        d = b.attr("line"),
                        e = this.records[c] && this.records[c].recid == a ? !1 : !0,
                        f = "object" != typeof this.url ? this.url : this.url.get;
                    if (this.searchData.length > 0 && !f)
                        for (var g in this.last.searchIds) this.last.searchIds[g] == c && (c = g);
                    $(b).replaceWith(this.getRecordHTML(c, d, e)), e && this.resize()
                }
            },
            refresh: function() {
                var a = this,
                    b = (new Date).getTime(),
                    c = "object" != typeof this.url ? this.url : this.url.get;
                if (this.total <= 0 && !c && 0 == this.searchData.length && (this.total = this.records.length), this.toolbar.disable("w2ui-edit", "w2ui-delete"), this.box) {
                    var d = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "refresh"
                    });
                    if (d.isCancelled !== !0) {
                        if (this.show.header ? $("#grid_" + this.name + "_header").html(this.header + "&nbsp;").show() : $("#grid_" + this.name + "_header").hide(), this.show.toolbar) {
                            if (this.toolbar && this.toolbar.get("w2ui-column-on-off") && this.toolbar.get("w2ui-column-on-off").checked);
                            else if ($("#grid_" + this.name + "_toolbar").show(), "object" == typeof this.toolbar) {
                                var e = this.toolbar.items;
                                for (var f in e) "w2ui-search" != e[f].id && "break" != e[f].type && this.toolbar.refresh(e[f].id)
                            }
                        } else $("#grid_" + this.name + "_toolbar").hide();
                        this.searchClose();
                        var g = $("#grid_" + a.name + "_search_all");
                        !this.multiSearch && "all" == this.last.field && this.searches.length > 0 && (this.last.field = this.searches[0].field, this.last.caption = this.searches[0].caption);
                        for (var h in this.searches) this.searches[h].field == this.last.field && (this.last.caption = this.searches[h].caption);
                        if (this.last.multi ? g.attr("placeholder", "[" + w2utils.lang("Multiple Fields") + "]") : g.attr("placeholder", this.last.caption), g.val() != this.last.search) {
                            var i = this.last.search,
                                e = g.data("w2field");
                            e && (i = e.format(i)), g.val(i)
                        }
                        var e = this.find({
                            summary: !0
                        }, !0);
                        if (e.length > 0) {
                            for (var f in e) this.summary.push(this.records[e[f]]);
                            for (var f = e.length - 1; f >= 0; f--) this.records.splice(e[f], 1);
                            this.total = this.total - e.length
                        }
                        var j = "";
                        j += '<div id="grid_' + this.name + '_records" class="w2ui-grid-records"    onscroll="var obj = w2ui[\'' + this.name + "'];         obj.last.scrollTop = this.scrollTop;         obj.last.scrollLeft = this.scrollLeft;         $('#grid_" + this.name + "_columns')[0].scrollLeft = this.scrollLeft;        $('#grid_" + this.name + "_summary')[0].scrollLeft = this.scrollLeft;        obj.scroll(event);\">" + this.getRecordsHTML() + '</div><div id="grid_' + this.name + '_columns" class="w2ui-grid-columns">    <table>' + this.getColumnsHTML() + "</table></div>", $("#grid_" + this.name + "_body").html(j), this.summary.length > 0 ? $("#grid_" + this.name + "_summary").html(this.getSummaryHTML()).show() : $("#grid_" + this.name + "_summary").hide(), this.show.footer ? $("#grid_" + this.name + "_footer").html(this.getFooterHTML()).show() : $("#grid_" + this.name + "_footer").hide(), this.searchData.length > 0 ? $("#grid_" + this.name + "_searchClear").show() : $("#grid_" + this.name + "_searchClear").hide();
                        var k = this.last.selection;
                        k.indexes.length == this.records.length || 0 !== this.searchData.length && k.indexes.length == this.last.searchIds.length ? $("#grid_" + this.name + "_check_all").prop("checked", !0) : $("#grid_" + this.name + "_check_all").prop("checked", !1), this.status();
                        var l = a.find({
                            expanded: !0
                        }, !0);
                        for (var m in l) a.records[l[m]].expanded = !1;
                        return setTimeout(function() {
                            var b = $.trim($("#grid_" + a.name + "_search_all").val());
                            "" != b && $(a.box).find(".w2ui-grid-data > div").w2marker(b)
                        }, 50), this.trigger($.extend(d, {
                            phase: "after"
                        })), a.resize(), a.addRange("selection"), setTimeout(function() {
                            a.resize(), a.scroll()
                        }, 1), a.reorderColumns && !a.last.columnDrag ? a.last.columnDrag = a.initColumnDrag() : !a.reorderColumns && a.last.columnDrag && a.last.columnDrag.remove(), (new Date).getTime() - b
                    }
                }
            },
            render: function(a) {
                function b(a) {
                    if (1 == a.which && ("text" == e.last.userSelect && (delete e.last.userSelect, $(e.box).find(".w2ui-grid-body").css("user-select", "none").css("-webkit-user-select", "none").css("-moz-user-select", "none").css("-ms-user-select", "none"), $(this.box).on("selectstart", function() {
                            return !1
                        })), !($(a.target).parents().hasClass("w2ui-head") || $(a.target).hasClass("w2ui-head") || e.last.move && "expand" == e.last.move.type))) {
                        if (a.altKey) $(e.box).off("selectstart"), $(e.box).find(".w2ui-grid-body").css("user-select", "text").css("-webkit-user-select", "text").css("-moz-user-select", "text").css("-ms-user-select", "text"), e.selectNone(), e.last.move = {
                            type: "text-select"
                        }, e.last.userSelect = "text";
                        else {
                            if (!e.multiSelect) return;
                            e.last.move = {
                                x: a.screenX,
                                y: a.screenY,
                                divX: 0,
                                divY: 0,
                                recid: $(a.target).parents("tr").attr("recid"),
                                column: "TD" == a.target.tagName ? $(a.target).attr("col") : $(a.target).parents("td").attr("col"),
                                type: "select",
                                ghost: !1,
                                start: !0
                            }
                        }
                        $(document).on("mousemove", c), $(document).on("mouseup", d)
                    }
                }

                function c(a) {
                    var b = e.last.move;
                    if (b && "select" == b.type && (b.divX = a.screenX - b.x, b.divY = a.screenY - b.y, !(Math.abs(b.divX) <= 1 && Math.abs(b.divY) <= 1))) {
                        if (e.last.cancelClick = !0, 1 == e.reorderRows) {
                            if (!b.ghost) {
                                var c = $("#grid_" + e.name + "_rec_" + b.recid),
                                    d = c.parents("table").find("tr:first-child").clone();
                                b.offsetY = a.offsetY, b.from = b.recid, b.pos = c.position(), b.ghost = $(c).clone(!0), b.ghost.removeAttr("id"), c.find("td:first-child").replaceWith('<td colspan="1000" style="height: ' + e.recordHeight + 'px; background-color: #ddd"></td>');
                                var f = $(e.box).find(".w2ui-grid-records");
                                f.append('<table id="grid_' + e.name + '_ghost" style="position: absolute; z-index: 999999; opacity: 0.8; border-bottom: 2px dashed #aaa; border-top: 2px dashed #aaa; pointer-events: none;"></table>'), $("#grid_" + e.name + "_ghost").append(d).append(b.ghost)
                            }
                            var g = $(a.target).parents("tr").attr("recid");
                            if (g != b.from) {
                                var h = $("#grid_" + e.name + "_rec_" + b.recid),
                                    i = $("#grid_" + e.name + "_rec_" + g);
                                a.screenY - b.lastY < 0 ? h.after(i) : i.after(h), b.lastY = a.screenY, b.to = g
                            }
                            var j = $("#grid_" + e.name + "_ghost"),
                                f = $(e.box).find(".w2ui-grid-records");
                            return void j.css({
                                top: b.pos.top + b.divY + f.scrollTop(),
                                left: b.pos.left
                            })
                        }
                        b.start && b.recid && (e.selectNone(), b.start = !1);
                        var k = [],
                            g = "TR" == a.target.tagName ? $(a.target).attr("recid") : $(a.target).parents("tr").attr("recid");
                        if ("undefined" != typeof g) {
                            var l = e.get(b.recid, !0);
                            if (null !== l) {
                                var m = e.get(g, !0);
                                if (null !== m) {
                                    var n = parseInt(b.column),
                                        o = parseInt("TD" == a.target.tagName ? $(a.target).attr("col") : $(a.target).parents("td").attr("col"));
                                    if (l > m) {
                                        var d = l;
                                        l = m, m = d
                                    }
                                    var d = "ind1:" + l + ",ind2;" + m + ",col1:" + n + ",col2:" + o;
                                    if (b.range != d) {
                                        b.range = d;
                                        for (var p = l; m >= p; p++)
                                            if (!(e.last.searchIds.length > 0 && -1 == e.last.searchIds.indexOf(p)))
                                                if ("row" != e.selectType) {
                                                    if (n > o) {
                                                        var d = n;
                                                        n = o, o = d
                                                    }
                                                    for (var d = [], q = n; o >= q; q++) e.columns[q].hidden || k.push({
                                                        recid: e.records[p].recid,
                                                        column: parseInt(q)
                                                    })
                                                } else k.push(e.records[p].recid);
                                        if ("row" != e.selectType) {
                                            var r = e.getSelection(),
                                                d = [];
                                            for (var s in k) {
                                                var t = !1;
                                                for (var u in r) k[s].recid == r[u].recid && k[s].column == r[u].column && (t = !0);
                                                t || d.push({
                                                    recid: k[s].recid,
                                                    column: k[s].column
                                                })
                                            }
                                            e.select.apply(e, d);
                                            var d = [];
                                            for (var u in r) {
                                                var t = !1;
                                                for (var s in k) k[s].recid == r[u].recid && k[s].column == r[u].column && (t = !0);
                                                t || d.push({
                                                    recid: r[u].recid,
                                                    column: r[u].column
                                                })
                                            }
                                            e.unselect.apply(e, d)
                                        } else if (e.multiSelect) {
                                            var r = e.getSelection();
                                            for (var s in k) - 1 == r.indexOf(k[s]) && e.select(k[s]);
                                            for (var u in r) - 1 == k.indexOf(r[u]) && e.unselect(r[u])
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                function d(a) {
                    var b = e.last.move;
                    if (setTimeout(function() {
                            delete e.last.cancelClick
                        }, 1), !$(a.target).parents().hasClass(".w2ui-head") && !$(a.target).hasClass(".w2ui-head")) {
                        if (b && "select" == b.type && 1 == e.reorderRows) {
                            var f = e.get(b.from, !0),
                                g = e.records[f];
                            e.records.splice(f, 1);
                            var h = e.get(b.to, !0);
                            f > h ? e.records.splice(h, 0, g) : e.records.splice(h + 1, 0, g), $("#grid_" + e.name + "_ghost").remove(), e.refresh()
                        }
                        delete e.last.move, $(document).off("mousemove", c), $(document).off("mouseup", d)
                    }
                }
                var e = this,
                    f = (new Date).getTime();
                if ("undefined" != typeof a && null != a && ($(this.box).find("#grid_" + this.name + "_body").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-grid").html(""), this.box = a), this.box) {
                    null == this.last.sortData && (this.last.sortData = this.sortData);
                    var g = this.trigger({
                        phase: "before",
                        target: this.name,
                        type: "render",
                        box: a
                    });
                    if (g.isCancelled !== !0) {
                        if ($(this.box).attr("name", this.name).addClass("w2ui-reset w2ui-grid").html('<div>    <div id="grid_' + this.name + '_header" class="w2ui-grid-header"></div>    <div id="grid_' + this.name + '_toolbar" class="w2ui-grid-toolbar"></div>    <div id="grid_' + this.name + '_body" class="w2ui-grid-body"></div>    <div id="grid_' + this.name + '_summary" class="w2ui-grid-body w2ui-grid-summary"></div>    <div id="grid_' + this.name + '_footer" class="w2ui-grid-footer"></div></div>'), "row" != this.selectType && $(this.box).addClass("w2ui-ss"), $(this.box).length > 0 && ($(this.box)[0].style.cssText += this.style), this.initToolbar(), null != this.toolbar && this.toolbar.render($("#grid_" + this.name + "_toolbar")[0]), this.last.field && "all" != this.last.field) {
                            var h = this.searchData;
                            this.initAllField(this.last.field, 1 == h.length ? h[0].value : null)
                        }
                        return $("#grid_" + this.name + "_footer").html(this.getFooterHTML()), this.last.state || (this.last.state = this.stateSave(!0)), this.stateRestore(), this.url && this.refresh(), this.reload(), $(this.box).on("mousedown", b), $(this.box).on("selectstart", function() {
                            return !1
                        }), this.trigger($.extend(g, {
                            phase: "after"
                        })), 0 == $(".w2ui-layout").length && (this.tmp_resize = function() {
                            w2ui[e.name].resize()
                        }, $(window).off("resize", this.tmp_resize).on("resize", this.tmp_resize)), (new Date).getTime() - f
                    }
                }
            },
            destroy: function() {
                var a = this.trigger({
                    phase: "before",
                    target: this.name,
                    type: "destroy"
                });
                a.isCancelled !== !0 && ($(window).off("resize", this.tmp_resize), "object" == typeof this.toolbar && this.toolbar.destroy && this.toolbar.destroy(), $(this.box).find("#grid_" + this.name + "_body").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-grid").html(""), delete w2ui[this.name], this.trigger($.extend(a, {
                    phase: "after"
                })))
            },
            initColumnOnOff: function() {
                if (this.show.toolbarColumns) {
                    var a = this,
                        b = '<div class="w2ui-col-on-off"><table><tr><td style="width: 30px">    <input id="grid_' + this.name + '_column_ln_check" type="checkbox" tabIndex="-1" ' + (a.show.lineNumbers ? "checked" : "") + "        onclick=\"w2ui['" + a.name + "'].columnOnOff(this, event, 'line-numbers');\"></td><td onclick=\"w2ui['" + a.name + "'].columnOnOff(this, event, 'line-numbers'); $('#w2ui-overlay')[0].hide();\">    <label for=\"grid_" + this.name + '_column_ln_check">' + w2utils.lang("Line #") + "</label></td></tr>";
                    for (var c in this.columns) {
                        var d = this.columns[c],
                            e = this.columns[c].caption;
                        d.hideable !== !1 && (!e && this.columns[c].hint && (e = this.columns[c].hint), e || (e = "- column " + (parseInt(c) + 1) + " -"), b += '<tr><td style="width: 30px">    <input id="grid_' + this.name + "_column_" + c + '_check" type="checkbox" tabIndex="-1" ' + (d.hidden ? "" : "checked") + "        onclick=\"w2ui['" + a.name + "'].columnOnOff(this, event, '" + d.field + '\');"></td><td>    <label for="grid_' + this.name + "_column_" + c + '_check">' + e + "</label></td></tr>")
                    }
                    b += '<tr><td colspan="2"><div style="border-top: 1px solid #ddd;"></div></td></tr>';
                    var f = "object" != typeof this.url ? this.url : this.url.get;
                    f && a.show.skipRecords && (b += '<tr><td colspan="2" style="padding: 0px">    <div style="cursor: pointer; padding: 2px 8px; cursor: default">' + w2utils.lang("Skip") + '        <input type="text" style="width: 45px" value="' + this.offset + '"             onkeypress="if (event.keyCode == 13) {                w2ui[\'' + a.name + "'].skip(this.value);                $('#w2ui-overlay')[0].hide();             }\"> " + w2utils.lang("Records") + "    </div></td></tr>"), b += '<tr><td colspan="2" onclick="w2ui[\'' + a.name + "'].stateSave(); $('#w2ui-overlay')[0].hide();\">    <div style=\"cursor: pointer; padding: 4px 8px; cursor: default\">" + w2utils.lang("Save Grid State") + '</div></td></tr><tr><td colspan="2" onclick="w2ui[\'' + a.name + "'].stateReset(); $('#w2ui-overlay')[0].hide();\">    <div style=\"cursor: pointer; padding: 4px 8px; cursor: default\">" + w2utils.lang("Restore Default State") + "</div></td></tr>", b += "</table></div>", this.toolbar.get("w2ui-column-on-off").html = b
                }
            },
            initColumnDrag: function() {
                function a() {
                    i.pressed = !1, clearTimeout(i.timeout)
                }

                function b(a) {
                    i.timeout && clearTimeout(i.timeout);
                    var b = this;
                    i.pressed = !0, i.timeout = setTimeout(function() {
                        if (i.pressed) {
                            var e, f, g, j, k, l = ["w2ui-col-number", "w2ui-col-expand", "w2ui-col-select"],
                                m = ["w2ui-head-last"],
                                n = l.concat(m),
                                o = ".w2ui-col-number, .w2ui-col-expand, .w2ui-col-select",
                                p = ".w2ui-head.w2ui-col-number, .w2ui-head.w2ui-col-expand, .w2ui-head.w2ui-col-select";
                            if ($(a.originalEvent.target).parents().hasClass("w2ui-head")) {
                                for (var q = 0, r = n.length; r > q; q++)
                                    if ($(a.originalEvent.target).parents().hasClass(n[q])) return;
                                if (i.numberPreColumnsPresent = $(h.box).find(p).length, i.columnHead = j = $(a.originalEvent.target).parents(".w2ui-head"), k = parseInt(j.attr("col"), 10), e = h.trigger({
                                        type: "columnDragStart",
                                        phase: "before",
                                        originalEvent: a,
                                        origColumnNumber: k,
                                        target: j[0]
                                    }), e.isCancelled === !0) return !1;
                                f = i.columns = $(h.box).find(".w2ui-head:not(.w2ui-head-last)"), $(document).on("mouseup", d), $(document).on("mousemove", c), i.originalPos = parseInt($(a.originalEvent.target).parent(".w2ui-head").attr("col"), 10), i.ghost = $(b).clone(!0), $(i.ghost).find('[col]:not([col="' + i.originalPos + '"]), .w2ui-toolbar, .w2ui-grid-header').remove(), $(i.ghost).find(o).remove(), $(i.ghost).find(".w2ui-grid-body").css({
                                    top: 0
                                }), g = $(i.ghost).find('[col="' + i.originalPos + '"]'), $(document.body).append(i.ghost), $(i.ghost).css({
                                    width: 0,
                                    height: 0,
                                    margin: 0,
                                    position: "fixed",
                                    zIndex: 999999,
                                    opacity: 0
                                }).addClass(".w2ui-grid-ghost").animate({
                                    width: g.width(),
                                    height: $(h.box).find(".w2ui-grid-body:first").height(),
                                    left: a.pageX,
                                    top: a.pageY,
                                    opacity: .8
                                }, 0), i.offsets = [];
                                for (var q = 0, r = f.length; r > q; q++) i.offsets.push($(f[q]).offset().left);
                                h.trigger($.extend(e, {
                                    phase: "after"
                                }))
                            }
                        }
                    }, 150)
                }

                function c(a) {
                    if (i.pressed) {
                        var b = a.originalEvent.pageX,
                            c = a.originalEvent.pageY,
                            d = i.offsets,
                            h = $(".w2ui-head:not(.w2ui-head-last)").width();
                        i.targetInt = Math.max(i.numberPreColumnsPresent, f(b, d, h)), e(i.targetInt), g(b, c)
                    }
                }

                function d(a) {
                    i.pressed = !1;
                    var b, e, f, g, j, k = $(".w2ui-grid-ghost");
                    return b = h.trigger({
                        type: "columnDragEnd",
                        phase: "before",
                        originalEvent: a,
                        target: i.columnHead[0]
                    }), b.isCancelled === !0 ? !1 : (f = h.columns[i.originalPos], g = h.columns, j = $(i.columns[Math.min(i.lastInt, i.columns.length - 1)]), e = i.lastInt < i.columns.length ? parseInt(j.attr("col")) : g.length, e !== i.originalPos + 1 && e !== i.originalPos && j && j.length ? ($(i.ghost).animate({
                        top: $(h.box).offset().top,
                        left: j.offset().left,
                        width: 0,
                        height: 0,
                        opacity: .2
                    }, 300, function() {
                        $(this).remove(), k.remove()
                    }), g.splice(e, 0, $.extend({}, f)), g.splice(g.indexOf(f), 1)) : ($(i.ghost).remove(), k.remove()), $(document).off("mouseup", d), $(document).off("mousemove", c), i.marker && i.marker.remove(), i = {}, h.refresh(), void h.trigger($.extend(b, {
                        phase: "after",
                        targetColumnNumber: e - 1
                    })))
                }

                function e(a) {
                    i.marker || i.markerLeft || (i.marker = $('<div class="col-intersection-marker"><div class="top-marker"></div><div class="bottom-marker"></div></div>'), i.markerLeft = $('<div class="col-intersection-marker"><div class="top-marker"></div><div class="bottom-marker"></div></div>')), i.lastInt && i.lastInt === a || (i.lastInt = a, i.marker.remove(), i.markerLeft.remove(), $(".w2ui-head").removeClass("w2ui-col-intersection"), a >= i.columns.length ? ($(i.columns[i.columns.length - 1]).children("div:last").append(i.marker.addClass("right").removeClass("left")), $(i.columns[i.columns.length - 1]).addClass("w2ui-col-intersection")) : a <= i.numberPreColumnsPresent ? ($(i.columns[i.numberPreColumnsPresent]).prepend(i.marker.addClass("left").removeClass("right")).css({
                        position: "relative"
                    }), $(i.columns[i.numberPreColumnsPresent]).prev().addClass("w2ui-col-intersection")) : ($(i.columns[a]).children("div:last").prepend(i.marker.addClass("left").removeClass("right")), $(i.columns[a]).prev().children("div:last").append(i.markerLeft.addClass("right").removeClass("left")).css({
                        position: "relative"
                    }), $(i.columns[a - 1]).addClass("w2ui-col-intersection")))
                }

                function f(a, b, c) {
                    if (a <= b[0]) return 0;
                    if (a >= b[b.length - 1] + c) return b.length;
                    for (var d = 0, e = b.length; e > d; d++) {
                        var f = b[d],
                            g = b[d + 1] || b[d] + c,
                            h = (g - b[d]) / 2 + b[d];
                        if (a > f && h >= a) return d;
                        if (a > h && g >= a) return d + 1
                    }
                    return intersection
                }

                function g(a, b) {
                    $(i.ghost).css({
                        left: a - 10,
                        top: b - 10
                    })
                }
                if (this.columnGroups && this.columnGroups.length) throw "Draggable columns are not currently supported with column groups.";
                var h = this,
                    i = {};
                return i.lastInt = null, i.pressed = !1, i.timeout = null, i.columnHead = null, $(h.box).on("mousedown", b), $(h.box).on("mouseup", a), {
                    remove: function() {
                        $(h.box).off("mousedown", b), $(h.box).off("mouseup", a), $(h.box).find(".w2ui-head").removeAttr("draggable"), h.last.columnDrag = !1
                    }
                }
            },
            columnOnOff: function(a, b, c) {
                var d = this.trigger({
                    phase: "before",
                    target: this.name,
                    type: "columnOnOff",
                    checkbox: a,
                    field: c,
                    originalEvent: b
                });
                if (d.isCancelled !== !0) {
                    var e = this;
                    for (var f in this.records) this.records[f].expanded === !0 && (this.records[f].expanded = !1);
                    var g = !0;
                    if ("line-numbers" == c) this.show.lineNumbers = !this.show.lineNumbers, this.refresh();
                    else {
                        var h = this.getColumn(c);
                        h.hidden ? ($(a).prop("checked", !0), this.showColumn(h.field)) : ($(a).prop("checked", !1), this.hideColumn(h.field)), g = !1
                    }
                    g && setTimeout(function() {
                        $().w2overlay("", {
                            name: "searches-" + this.name
                        }), e.toolbar.uncheck("column-on-off")
                    }, 100), this.trigger($.extend(d, {
                        phase: "after"
                    }))
                }
            },
            initToolbar: function() {
                if ("undefined" == typeof this.toolbar.render) {
                    var a = this.toolbar.items;
                    if (this.toolbar.items = [], this.toolbar = $().w2toolbar($.extend(!0, {}, this.toolbar, {
                            name: this.name + "_toolbar",
                            owner: this
                        })), this.show.toolbarReload && this.toolbar.items.push($.extend(!0, {}, this.buttons.reload)), this.show.toolbarColumns && this.toolbar.items.push($.extend(!0, {}, this.buttons.columns)), (this.show.toolbarReload || this.show.toolbarColumn) && this.toolbar.items.push({
                            type: "break",
                            id: "w2ui-break0"
                        }), this.show.toolbarSearch) {
                        var b = '<div class="w2ui-toolbar-search"><table cellpadding="0" cellspacing="0"><tr>    <td>' + this.buttons.search.html + '</td>    <td>        <input id="grid_' + this.name + '_search_all" class="w2ui-search-all"             placeholder="' + this.last.caption + '" value="' + this.last.search + "\"            onkeydown=\"if (event.keyCode == 13 && w2utils.isIE) this.onchange();\"            onchange=\"                var val = this.value;                 var fld = $(this).data('w2field');                 var dat = $(this).data('selected');                 if (fld) val = fld.clean(val);                if (dat != null && $.isPlainObject(dat)) val = dat.id;                w2ui['" + this.name + "'].search(w2ui['" + this.name + '\'].last.field, val);             ">    </td>    <td>        <div title="' + w2utils.lang("Clear Search") + '" class="w2ui-search-clear" id="grid_' + this.name + '_searchClear"               onclick="var obj = w2ui[\'' + this.name + "']; obj.searchReset();\"         >&nbsp;&nbsp;</div>    </td></tr></table></div>";
                        this.toolbar.items.push({
                            type: "html",
                            id: "w2ui-search",
                            html: b
                        }), this.multiSearch && this.searches.length > 0 && this.toolbar.items.push($.extend(!0, {}, this.buttons["search-go"]))
                    }
                    this.show.toolbarSearch && (this.show.toolbarAdd || this.show.toolbarEdit || this.show.toolbarDelete || this.show.toolbarSave) && this.toolbar.items.push({
                        type: "break",
                        id: "w2ui-break1"
                    }), this.show.toolbarAdd && this.toolbar.items.push($.extend(!0, {}, this.buttons.add)), this.show.toolbarEdit && this.toolbar.items.push($.extend(!0, {}, this.buttons.edit)), this.show.toolbarDelete && this.toolbar.items.push($.extend(!0, {}, this.buttons["delete"])), this.show.toolbarSave && ((this.show.toolbarAdd || this.show.toolbarDelete || this.show.toolbarEdit) && this.toolbar.items.push({
                        type: "break",
                        id: "w2ui-break2"
                    }), this.toolbar.items.push($.extend(!0, {}, this.buttons.save)));
                    for (var c in a) this.toolbar.items.push(a[c]);
                    var d = this;
                    this.toolbar.on("click", function(a) {
                        function b() {
                            $("#w2ui-overlay-searches-" + d.name).data("keepOpen") !== !0 && (g.uncheck(e), $(document).off("click", "body", b))
                        }
                        var c = d.trigger({
                            phase: "before",
                            type: "toolbar",
                            target: a.target,
                            originalEvent: a
                        });
                        if (c.isCancelled !== !0) {
                            var e = a.target;
                            switch (e) {
                                case "w2ui-reload":
                                    var f = d.trigger({
                                        phase: "before",
                                        type: "reload",
                                        target: d.name
                                    });
                                    if (f.isCancelled === !0) return !1;
                                    d.reload(), d.trigger($.extend(f, {
                                        phase: "after"
                                    }));
                                    break;
                                case "w2ui-column-on-off":
                                    d.initColumnOnOff(), d.initResize(), d.resize();
                                    break;
                                case "w2ui-search-advanced":
                                    var g = this,
                                        h = this.get(e);
                                    h.checked ? (d.searchClose(), setTimeout(function() {
                                        g.uncheck(e)
                                    }, 1)) : (d.searchOpen(), a.originalEvent.stopPropagation(), $(document).on("click", "body", b));
                                    break;
                                case "w2ui-add":
                                    var c = d.trigger({
                                        phase: "before",
                                        target: d.name,
                                        type: "add",
                                        recid: null
                                    });
                                    d.trigger($.extend(c, {
                                        phase: "after"
                                    }));
                                    break;
                                case "w2ui-edit":
                                    var i = d.getSelection(),
                                        j = null;
                                    1 == i.length && (j = i[0]);
                                    var c = d.trigger({
                                        phase: "before",
                                        target: d.name,
                                        type: "edit",
                                        recid: j
                                    });
                                    d.trigger($.extend(c, {
                                        phase: "after"
                                    }));
                                    break;
                                case "w2ui-delete":
                                    d["delete"]();
                                    break;
                                case "w2ui-save":
                                    d.save()
                            }
                            d.trigger($.extend(c, {
                                phase: "after"
                            }))
                        }
                    })
                }
            },
            initResize: function() {
                var a = this;
                $(this.box).find(".w2ui-resizer").off("click").on("click", function(a) {
                    a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, a.preventDefault && a.preventDefault()
                }).off("mousedown").on("mousedown", function(b) {
                    b || (b = window.event), window.addEventListener || window.document.attachEvent("onselectstart", function() {
                        return !1
                    }), a.resizing = !0, a.last.tmp = {
                        x: b.screenX,
                        y: b.screenY,
                        gx: b.screenX,
                        gy: b.screenY,
                        col: parseInt($(this).attr("name"))
                    }, b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0, b.preventDefault && b.preventDefault();
                    for (var c in a.columns) "undefined" == typeof a.columns[c].sizeOriginal && (a.columns[c].sizeOriginal = a.columns[c].size), a.columns[c].size = a.columns[c].sizeCalculated;
                    var d = {
                        phase: "before",
                        type: "columnResize",
                        target: a.name,
                        column: a.last.tmp.col,
                        field: a.columns[a.last.tmp.col].field
                    };
                    d = a.trigger($.extend(d, {
                        resizeBy: 0,
                        originalEvent: b
                    }));
                    var e = function(b) {
                            if (1 == a.resizing) {
                                if (b || (b = window.event), d = a.trigger($.extend(d, {
                                        resizeBy: b.screenX - a.last.tmp.gx,
                                        originalEvent: b
                                    })), d.isCancelled === !0) return void(d.isCancelled = !1);
                                a.last.tmp.x = b.screenX - a.last.tmp.x, a.last.tmp.y = b.screenY - a.last.tmp.y, a.columns[a.last.tmp.col].size = parseInt(a.columns[a.last.tmp.col].size) + a.last.tmp.x + "px", a.resizeRecords(), a.last.tmp.x = b.screenX, a.last.tmp.y = b.screenY
                            }
                        },
                        f = function(b) {
                            delete a.resizing, $(document).off("mousemove", "body"), $(document).off("mouseup", "body"), a.resizeRecords(), a.trigger($.extend(d, {
                                phase: "after",
                                originalEvent: b
                            }))
                        };
                    $(document).on("mousemove", "body", e), $(document).on("mouseup", "body", f)
                }).each(function(a, b) {
                    var c = $(b).parent();
                    $(b).css({
                        height: "25px",
                        "margin-left": c.width() - 3 + "px"
                    })
                })
            },
            resizeBoxes: function() {
                {
                    var a = ($(this.box).find("> div"), $("#grid_" + this.name + "_header")),
                        b = $("#grid_" + this.name + "_toolbar"),
                        c = $("#grid_" + this.name + "_summary"),
                        d = $("#grid_" + this.name + "_footer"),
                        e = $("#grid_" + this.name + "_body");
                    $("#grid_" + this.name + "_columns"), $("#grid_" + this.name + "_records")
                }
                this.show.header && a.css({
                    top: "0px",
                    left: "0px",
                    right: "0px"
                }), this.show.toolbar && b.css({
                    top: 0 + (this.show.header ? w2utils.getSize(a, "height") : 0) + "px",
                    left: "0px",
                    right: "0px"
                }), this.show.footer && d.css({
                    bottom: "0px",
                    left: "0px",
                    right: "0px"
                }), this.summary.length > 0 && c.css({
                    bottom: 0 + (this.show.footer ? w2utils.getSize(d, "height") : 0) + "px",
                    left: "0px",
                    right: "0px"
                }), e.css({
                    top: 0 + (this.show.header ? w2utils.getSize(a, "height") : 0) + (this.show.toolbar ? w2utils.getSize(b, "height") : 0) + "px",
                    bottom: 0 + (this.show.footer ? w2utils.getSize(d, "height") : 0) + (this.summary.length > 0 ? w2utils.getSize(c, "height") : 0) + "px",
                    left: "0px",
                    right: "0px"
                })
            },
            resizeRecords: function() {
                var a = this;
                $(this.box).find(".w2ui-empty-record").remove();
                var b = $(this.box),
                    c = $(this.box).find("> div"),
                    d = $("#grid_" + this.name + "_header"),
                    e = $("#grid_" + this.name + "_toolbar"),
                    f = $("#grid_" + this.name + "_summary"),
                    g = $("#grid_" + this.name + "_footer"),
                    h = $("#grid_" + this.name + "_body"),
                    i = $("#grid_" + this.name + "_columns"),
                    j = $("#grid_" + this.name + "_records");
                if (this.fixedBody) {
                    var k = c.height() - (this.show.header ? w2utils.getSize(d, "height") : 0) - (this.show.toolbar ? w2utils.getSize(e, "height") : 0) - ("none" != f.css("display") ? w2utils.getSize(f, "height") : 0) - (this.show.footer ? w2utils.getSize(g, "height") : 0);
                    h.css("height", k)
                } else {
                    var k = w2utils.getSize(i, "height") + w2utils.getSize($("#grid_" + a.name + "_records table"), "height");
                    a.height = k + w2utils.getSize(c, "+height") + (a.show.header ? w2utils.getSize(d, "height") : 0) + (a.show.toolbar ? w2utils.getSize(e, "height") : 0) + ("none" != f.css("display") ? w2utils.getSize(f, "height") : 0) + (a.show.footer ? w2utils.getSize(g, "height") : 0), c.css("height", a.height), h.css("height", k), b.css("height", w2utils.getSize(c, "height") + w2utils.getSize(b, "+height"))
                }
                var l = this.records.length;
                0 == this.searchData.length || this.url || (l = this.last.searchIds.length);
                var m = !1,
                    n = !1;
                if (h.width() < $(j).find(">table").width() && (m = !0), h.height() - i.height() < $(j).find(">table").height() + (m ? w2utils.scrollBarSize() : 0) && (n = !0), this.fixedBody || (n = !1, m = !1), m || n ? (i.find("> table > tbody > tr:nth-child(1) td.w2ui-head-last").css("width", w2utils.scrollBarSize()).show(), j.css({
                        top: (this.columnGroups.length > 0 && this.show.columns ? 1 : 0) + w2utils.getSize(i, "height") + "px",
                        "-webkit-overflow-scrolling": "touch",
                        "overflow-x": m ? "auto" : "hidden",
                        "overflow-y": n ? "auto" : "hidden"
                    })) : (i.find("> table > tbody > tr:nth-child(1) td.w2ui-head-last").hide(), j.css({
                        top: (this.columnGroups.length > 0 && this.show.columns ? 1 : 0) + w2utils.getSize(i, "height") + "px",
                        overflow: "hidden"
                    }), j.length > 0 && (this.last.scrollTop = 0, this.last.scrollLeft = 0)), this.show.emptyRecords && !n) {
                    var o = Math.floor(j.height() / this.recordHeight) + 1;
                    if (this.fixedBody)
                        for (var p = l; o >= p; p++) {
                            var q = "";
                            q += '<tr class="' + (p % 2 ? "w2ui-even" : "w2ui-odd") + ' w2ui-empty-record" style="height: ' + this.recordHeight + 'px">', this.show.lineNumbers && (q += '<td class="w2ui-col-number"></td>'), this.show.selectColumn && (q += '<td class="w2ui-grid-data w2ui-col-select"></td>'), this.show.expandColumn && (q += '<td class="w2ui-grid-data w2ui-col-expand"></td>');
                            for (var r = 0; this.columns.length > 0;) {
                                var s = this.columns[r];
                                if (s.hidden) {
                                    if (r++, "undefined" == typeof this.columns[r]) break
                                } else if (q += '<td class="w2ui-grid-data" ' + ("undefined" != typeof s.attr ? s.attr : "") + ' col="' + r + '"></td>', r++, "undefined" == typeof this.columns[r]) break
                            }
                            q += '<td class="w2ui-grid-data-last"></td>', q += "</tr>", $("#grid_" + this.name + "_records > table").append(q)
                        }
                }
                if (h.length > 0) {
                    for (var t = parseInt(h.width()) - (n ? w2utils.scrollBarSize() : 0) - (this.show.lineNumbers ? 34 : 0) - (this.show.selectColumn ? 26 : 0) - (this.show.expandColumn ? 26 : 0), u = t, v = 0, w = !1, x = 0; x < this.columns.length; x++) {
                        var s = this.columns[x];
                        s.gridMinWidth > 0 && (s.gridMinWidth > u && s.hidden !== !0 && (s.hidden = !0, w = !0), s.gridMinWidth < u && s.hidden === !0 && (s.hidden = !1, w = !0))
                    }
                    if (w === !0) return void this.refresh();
                    for (var x = 0; x < this.columns.length; x++) {
                        var s = this.columns[x];
                        s.hidden || ("px" == String(s.size).substr(String(s.size).length - 2).toLowerCase() ? (t -= parseFloat(s.size), this.columns[x].sizeCalculated = s.size, this.columns[x].sizeType = "px") : (v += parseFloat(s.size), this.columns[x].sizeType = "%", delete s.sizeCorrected))
                    }
                    if (100 != v && v > 0)
                        for (var x = 0; x < this.columns.length; x++) {
                            var s = this.columns[x];
                            s.hidden || "%" == s.sizeType && (s.sizeCorrected = Math.round(100 * parseFloat(s.size) * 100 / v) / 100 + "%")
                        }
                    for (var x = 0; x < this.columns.length; x++) {
                        var s = this.columns[x];
                        s.hidden || "%" == s.sizeType && (this.columns[x].sizeCalculated = "undefined" != typeof this.columns[x].sizeCorrected ? Math.floor(t * parseFloat(s.sizeCorrected) / 100) - 1 + "px" : Math.floor(t * parseFloat(s.size) / 100) - 1 + "px")
                    }
                }
                for (var y = 0, x = 0; x < this.columns.length; x++) {
                    var s = this.columns[x];
                    s.hidden || ("undefined" == typeof s.min && (s.min = 20), parseInt(s.sizeCalculated) < parseInt(s.min) && (s.sizeCalculated = s.min + "px"), parseInt(s.sizeCalculated) > parseInt(s.max) && (s.sizeCalculated = s.max + "px"), y += parseInt(s.sizeCalculated))
                }
                var z = parseInt(u) - parseInt(y);
                if (z > 0 && v > 0)
                    for (var x = 0;;) {
                        var s = this.columns[x];
                        if ("undefined" != typeof s)
                            if (s.hidden || "px" == s.sizeType) x++;
                            else {
                                if (s.sizeCalculated = parseInt(s.sizeCalculated) + 1 + "px", z--, 0 == z) break;
                                x++
                            }
                        else x = 0
                    } else z > 0 && i.find("> table > tbody > tr:nth-child(1) td.w2ui-head-last").css("width", w2utils.scrollBarSize()).show();
                i.find("> table > tbody > tr:nth-child(1) td").each(function(b, c) {
                    var d = $(c).attr("col");
                    "undefined" != typeof d && a.columns[d] && $(c).css("width", a.columns[d].sizeCalculated), $(c).hasClass("w2ui-head-last") && $(c).css("width", w2utils.scrollBarSize() + (z > 0 && 0 == v ? z : 0) + "px")
                }), 3 == i.find("> table > tbody > tr").length && i.find("> table > tbody > tr:nth-child(1) td").html("").css({
                    height: "0px",
                    border: "0px",
                    padding: "0px",
                    margin: "0px"
                }), j.find("> table > tbody > tr:nth-child(1) td").each(function(b, c) {
                    var d = $(c).attr("col");
                    "undefined" != typeof d && a.columns[d] && $(c).css("width", a.columns[d].sizeCalculated), $(c).hasClass("w2ui-grid-data-last") && $(c).css("width", (z > 0 && 0 == v ? z : 0) + "px")
                }), f.find("> table > tbody > tr:nth-child(1) td").each(function(b, c) {
                    var d = $(c).attr("col");
                    "undefined" != typeof d && a.columns[d] && $(c).css("width", a.columns[d].sizeCalculated), $(c).hasClass("w2ui-grid-data-last") && $(c).css("width", w2utils.scrollBarSize() + (z > 0 && 0 == v ? z : 0) + "px")
                }), this.initResize(), this.refreshRanges(), (this.last.scrollTop || this.last.scrollLeft) && j.length > 0 && (i.prop("scrollLeft", this.last.scrollLeft), j.prop("scrollTop", this.last.scrollTop), j.prop("scrollLeft", this.last.scrollLeft))
            },
            getSearchesHTML: function() {
                for (var a = '<table cellspacing="0">', b = !1, c = 0; c < this.searches.length; c++) {
                    var d = this.searches[c];
                    if (d.type = String(d.type).toLowerCase(), !d.hidden) {
                        var e = "";
                        if (0 == b && (e = '<button class="btn close-btn" onclick="obj = w2ui[\'' + this.name + "']; if (obj) { obj.searchClose(); }\">X</button", b = !0), "undefined" == typeof d.inTag && (d.inTag = ""), "undefined" == typeof d.outTag && (d.outTag = ""), "undefined" == typeof d.type && (d.type = "text"), -1 != ["text", "alphanumeric", "combo"].indexOf(d.type)) var f = '<select id="grid_' + this.name + "_operator_" + c + '" onclick="event.stopPropagation();">    <option value="is">' + w2utils.lang("is") + '</option>    <option value="begins">' + w2utils.lang("begins") + '</option>    <option value="contains">' + w2utils.lang("contains") + '</option>    <option value="ends">' + w2utils.lang("ends") + "</option></select>";
                        if (-1 != ["int", "float", "money", "currency", "percent", "date", "time"].indexOf(d.type)) var f = '<select id="grid_' + this.name + "_operator_" + c + '"         onchange="w2ui[\'' + this.name + "'].initOperator(this, " + c + ');" onclick="event.stopPropagation();">    <option value="is">' + w2utils.lang("is") + "</option>" + (-1 != ["int"].indexOf(d.type) ? '<option value="in">' + w2utils.lang("in") + "</option>" : "") + (-1 != ["int"].indexOf(d.type) ? '<option value="not in">' + w2utils.lang("not in") + "</option>" : "") + '<option value="between">' + w2utils.lang("between") + "</option></select>";
                        if (-1 != ["select", "list", "hex"].indexOf(d.type)) var f = '<select id="grid_' + this.name + "_operator_" + c + '" onclick="event.stopPropagation();">    <option value="is">' + w2utils.lang("is") + "</option></select>";
                        if (-1 != ["enum"].indexOf(d.type)) var f = '<select id="grid_' + this.name + "_operator_" + c + '" onclick="event.stopPropagation();">    <option value="in">' + w2utils.lang("in") + '</option>    <option value="not in">' + w2utils.lang("not in") + "</option></select>";
                        switch (a += '<tr>    <td class="close-btn">' + e + '</td>    <td class="caption">' + d.caption + '</td>    <td class="operator">' + f + '</td>    <td class="value">', d.type) {
                            case "text":
                            case "alphanumeric":
                            case "hex":
                            case "list":
                            case "combo":
                            case "enum":
                                a += '<input rel="search" type="text" style="width: 300px;" id="grid_' + this.name + "_field_" + c + '" name="' + d.field + '" ' + d.inTag + ">";
                                break;
                            case "int":
                            case "float":
                            case "money":
                            case "currency":
                            case "percent":
                            case "date":
                            case "time":
                                a += '<input rel="search" type="text" size="12" id="grid_' + this.name + "_field_" + c + '" name="' + d.field + '" ' + d.inTag + '><span id="grid_' + this.name + "_range_" + c + '" style="display: none">&nbsp;-&nbsp;&nbsp;<input rel="search" type="text" style="width: 90px" id="grid_' + this.name + "_field2_" + c + '" name="' + d.field + '" ' + d.inTag + "></span>";
                                break;
                            case "select":
                                a += '<select rel="search" id="grid_' + this.name + "_field_" + c + '" name="' + d.field + '" ' + d.inTag + '  onclick="event.stopPropagation();"></select>'
                        }
                        a += d.outTag + "    </td></tr>"
                    }
                }
                return a += '<tr>    <td colspan="4" class="actions">        <div>        <button class="btn" onclick="obj = w2ui[\'' + this.name + "']; if (obj) { obj.searchReset(); }\">" + w2utils.lang("Reset") + '</button>        <button class="btn btn-blue" onclick="obj = w2ui[\'' + this.name + "']; if (obj) { obj.search(); }\">" + w2utils.lang("Search") + "</button>        </div>    </td></tr></table>"
            },
            initOperator: function(a, b) {
                var c = this,
                    d = c.searches[b],
                    e = $("#grid_" + c.name + "_range_" + b),
                    f = $("#grid_" + c.name + "_field_" + b),
                    g = f.parent().find("span input");
                f.w2field("in" == $(a).val() || "not in" == $(a).val() ? "clear" : d.type), "between" == $(a).val() ? (e.show(), g.w2field(d.type)) : e.hide()
            },
            initSearches: function() {
                var a = this;
                for (var b in this.searches) {
                    var c = this.searches[b],
                        d = this.getSearchData(c.field);
                    switch (c.type = String(c.type).toLowerCase(), "object" != typeof c.options && (c.options = {}), c.type) {
                        case "text":
                        case "alphanumeric":
                            $("#grid_" + this.name + "_operator_" + b).val("begins"), -1 != ["alphanumeric", "hex"].indexOf(c.type) && $("#grid_" + this.name + "_field_" + b).w2field(c.type, c.options);
                            break;
                        case "int":
                        case "float":
                        case "money":
                        case "currency":
                        case "percent":
                        case "date":
                        case "time":
                            if (d && "int" == d.type && -1 != ["in", "not in"].indexOf(d.operator)) break;
                            $("#grid_" + this.name + "_field_" + b).w2field(c.type, c.options), $("#grid_" + this.name + "_field2_" + b).w2field(c.type, c.options), setTimeout(function() {
                                $("#grid_" + a.name + "_field_" + b).keydown(), $("#grid_" + a.name + "_field2_" + b).keydown()
                            }, 1);
                            break;
                        case "hex":
                            break;
                        case "list":
                        case "combo":
                        case "enum":
                            var e = c.options;
                            "list" == c.type && (e.selected = {}), "enum" == c.type && (e.selected = []), d && (e.selected = d.value), $("#grid_" + this.name + "_field_" + b).w2field(c.type, e), "combo" == c.type && $("#grid_" + this.name + "_operator_" + b).val("begins");
                            break;
                        case "select":
                            var e = '<option value="">--</option>';
                            for (var f in c.options.items) {
                                var g = c.options.items[f];
                                if ($.isPlainObject(c.options.items[f])) {
                                    var h = g.id,
                                        i = g.text;
                                    "undefined" == typeof h && "undefined" != typeof g.value && (h = g.value), "undefined" == typeof i && "undefined" != typeof g.caption && (i = g.caption), null == h && (h = ""), e += '<option value="' + h + '">' + i + "</option>"
                                } else e += '<option value="' + g + '">' + g + "</option>"
                            }
                            $("#grid_" + this.name + "_field_" + b).html(e)
                    }
                    null != d && ("int" == d.type && -1 != ["in", "not in"].indexOf(d.operator) && $("#grid_" + this.name + "_field_" + b).w2field("clear").val(d.value), $("#grid_" + this.name + "_operator_" + b).val(d.operator).trigger("change"), $.isArray(d.value) ? -1 != ["in", "not in"].indexOf(d.operator) ? $("#grid_" + this.name + "_field_" + b).val(d.value).trigger("change") : ($("#grid_" + this.name + "_field_" + b).val(d.value[0]).trigger("change"), $("#grid_" + this.name + "_field2_" + b).val(d.value[1]).trigger("change")) : "udefined" != typeof d.value && $("#grid_" + this.name + "_field_" + b).val(d.value).trigger("change"))
                }
                $("#w2ui-overlay-searches-" + this.name + " .w2ui-grid-searches *[rel=search]").on("keypress", function(b) {
                    13 == b.keyCode && (a.search(), $().w2overlay())
                })
            },
            getColumnsHTML: function() {
                function a() {
                    var a = "<tr>";
                    "" != c.columnGroups[c.columnGroups.length - 1].caption && c.columnGroups.push({
                        caption: ""
                    }), c.show.lineNumbers && (a += '<td class="w2ui-head w2ui-col-number">    <div>&nbsp;</div></td>'), c.show.selectColumn && (a += '<td class="w2ui-head w2ui-col-select">    <div>&nbsp;</div></td>'), c.show.expandColumn && (a += '<td class="w2ui-head w2ui-col-expand">    <div>&nbsp;</div></td>');
                    for (var b = 0, d = 0; d < c.columnGroups.length; d++) {
                        var e = c.columnGroups[d],
                            f = c.columns[b];
                        if (("undefined" == typeof e.span || e.span != parseInt(e.span)) && (e.span = 1), "undefined" != typeof e.colspan && (e.span = e.colspan), e.master === !0) {
                            var g = "";
                            for (var h in c.sortData) c.sortData[h].field == f.field && (RegExp("asc", "i").test(c.sortData[h].direction) && (g = "w2ui-sort-up"), RegExp("desc", "i").test(c.sortData[h].direction) && (g = "w2ui-sort-down"));
                            var i = "";
                            f.resizable !== !1 && (i = '<div class="w2ui-resizer" name="' + b + '"></div>'), a += '<td class="w2ui-head ' + g + '" col="' + b + '" rowspan="2" colspan="' + (e.span + (d == c.columnGroups.length - 1 ? 1 : 0)) + '"     onclick="w2ui[\'' + c.name + "'].columnClick('" + f.field + "', event);\">" + i + '    <div class="w2ui-col-group w2ui-col-header ' + (g ? "w2ui-col-sorted" : "") + '">        <div class="' + g + '"></div>' + (f.caption ? f.caption : "&nbsp;") + "    </div></td>"
                        } else a += '<td class="w2ui-head" col="' + b + '"         colspan="' + (e.span + (d == c.columnGroups.length - 1 ? 1 : 0)) + '">    <div class="w2ui-col-group">' + (e.caption ? e.caption : "&nbsp;") + "    </div></td>";
                        b += e.span
                    }
                    return a += "</tr>"
                }

                function b(a) {
                    var b = "<tr>",
                        d = !c.reorderColumns || c.columnGroups && c.columnGroups.length ? "" : " w2ui-reorder-cols-head ";
                    c.show.lineNumbers && (b += '<td class="w2ui-head w2ui-col-number" onclick="w2ui[\'' + c.name + "'].columnClick('line-number', event);\">    <div>#</div></td>"), c.show.selectColumn && (b += '<td class="w2ui-head w2ui-col-select"         onclick="if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;">    <div>        <input type="checkbox" id="grid_' + c.name + '_check_all" tabIndex="-1"            style="' + (0 == c.multiSelect ? "display: none;" : "") + '"            onclick="if (this.checked) w2ui[\'' + c.name + "'].selectAll();                      else w2ui['" + c.name + "'].selectNone();                      if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;\">    </div></td>"), c.show.expandColumn && (b += '<td class="w2ui-head w2ui-col-expand">    <div>&nbsp;</div></td>');
                    for (var e = 0, f = 0, g = 0; g < c.columns.length; g++) {
                        var h = c.columns[g],
                            i = {};
                        if (g == f && (f += "undefined" != typeof c.columnGroups[e] ? parseInt(c.columnGroups[e].span) : 0, e++), "undefined" != typeof c.columnGroups[e - 1]) var i = c.columnGroups[e - 1];
                        if (!h.hidden) {
                            var j = "";
                            for (var k in c.sortData) c.sortData[k].field == h.field && (RegExp("asc", "i").test(c.sortData[k].direction) && (j = "w2ui-sort-up"), RegExp("desc", "i").test(c.sortData[k].direction) && (j = "w2ui-sort-down"));
                            if (i.master !== !0 || a) {
                                var l = "";
                                h.resizable !== !1 && (l = '<div class="w2ui-resizer" name="' + g + '"></div>'), b += '<td col="' + g + '" class="w2ui-head ' + j + d + '"     onclick="w2ui[\'' + c.name + "'].columnClick('" + h.field + "', event);\">" + l + '    <div class="w2ui-col-header ' + (j ? "w2ui-col-sorted" : "") + '">        <div class="' + j + '"></div>' + (h.caption ? h.caption : "&nbsp;") + "    </div></td>"
                            }
                        }
                    }
                    return b += '<td class="w2ui-head w2ui-head-last"><div>&nbsp;</div></td>', b += "</tr>"
                }
                var c = this,
                    d = "";
                return this.show.columnHeaders && (d = this.columnGroups.length > 0 ? b(!0) + a() + b(!1) : b(!0)), d
            },
            getRecordsHTML: function() {
                var a = this.records.length;
                0 == this.searchData.length || this.url || (a = this.last.searchIds.length), this.show_extra = a > 300 ? 30 : 300;
                var b = $("#grid_" + this.name + "_records"),
                    c = Math.floor(b.height() / this.recordHeight) + this.show_extra + 1;
                (!this.fixedBody || c > a) && (c = a);
                var d = "<table>" + this.getRecordHTML(-1, 0);
                d += '<tr id="grid_' + this.name + '_rec_top" line="top" style="height: 0px">    <td colspan="200"></td></tr>';
                for (var e = 0; c > e; e++) d += this.getRecordHTML(e, e + 1);
                return d += '<tr id="grid_' + this.name + '_rec_bottom" line="bottom" style="height: ' + (a - c) * this.recordHeight + 'px">    <td colspan="200"></td></tr><tr id="grid_' + this.name + '_rec_more" style="display: none">    <td colspan="200" class="w2ui-load-more"></td></tr></table>', this.last.range_start = 0, this.last.range_end = c, d
            },
            getSummaryHTML: function() {
                if (0 != this.summary.length) {
                    for (var a = "<table>", b = 0; b < this.summary.length; b++) a += this.getRecordHTML(b, b + 1, !0);
                    return a += "</table>"
                }
            },
            scroll: function() {
                function a() {
                    b.markSearch !== !1 && (clearTimeout(b.last.marker_timer), b.last.marker_timer = setTimeout(function() {
                        var a = [];
                        for (var c in b.searchData) {
                            var d = b.searchData[c]; - 1 == $.inArray(d.value, a) && a.push(d.value)
                        }
                        a.length > 0 && $(b.box).find(".w2ui-grid-data > div").w2marker(a)
                    }, 50))
                }
                var b = ((new Date).getTime(), this),
                    c = $("#grid_" + this.name + "_records"),
                    d = this.records.length;
                if (0 == this.searchData.length || this.url || (d = this.last.searchIds.length), 0 != d && 0 != c.length && 0 != c.height()) {
                    if (this.show_extra = d > 300 ? 30 : 300, c.height() < d * this.recordHeight && "hidden" == c.css("overflow-y")) return void(this.total > 0 && this.refresh());
                    var e = Math.round(c[0].scrollTop / this.recordHeight + 1),
                        f = e + (Math.round(c.height() / this.recordHeight) - 1);
                    e > d && (e = d), f > d && (f = d);
                    var g = "object" != typeof this.url ? this.url : this.url.get;
                    if ($("#grid_" + this.name + "_footer .w2ui-footer-right").html(w2utils.formatNumber(this.offset + e) + "-" + w2utils.formatNumber(this.offset + f) + " " + w2utils.lang("of") + " " + w2utils.formatNumber(this.total) + (g ? " (" + w2utils.lang("buffered") + " " + w2utils.formatNumber(d) + (this.offset > 0 ? ", skip " + w2utils.formatNumber(this.offset) : "") + ")" : "")), g || this.fixedBody && !(this.total <= 300)) {
                        var h = Math.floor(c[0].scrollTop / this.recordHeight) - this.show_extra,
                            i = h + Math.floor(c.height() / this.recordHeight) + 2 * this.show_extra + 1;
                        1 > h && (h = 1), i > this.total && (i = this.total);
                        var j = c.find("#grid_" + this.name + "_rec_top"),
                            k = c.find("#grid_" + this.name + "_rec_bottom"); - 1 != String(j.next().prop("id")).indexOf("_expanded_row") && j.next().remove(), this.total > i && -1 != String(k.prev().prop("id")).indexOf("_expanded_row") && k.prev().remove();
                        var l = parseInt(j.next().attr("line")),
                            m = parseInt(k.prev().attr("line"));
                        if (h > l || 1 == l || this.last.pull_refresh) {
                            if (i <= m + this.show_extra - 2 && i != this.total) return;
                            for (this.last.pull_refresh = !1;;) {
                                var n = c.find("#grid_" + this.name + "_rec_top").next();
                                if ("bottom" == n.attr("line")) break;
                                if (!(parseInt(n.attr("line")) < h)) break;
                                n.remove()
                            }
                            var n = c.find("#grid_" + this.name + "_rec_bottom").prev(),
                                o = n.attr("line");
                            "top" == o && (o = h);
                            for (var p = parseInt(o) + 1; i >= p; p++) this.records[p - 1] && (this.records[p - 1].expanded === !0 && (this.records[p - 1].expanded = !1), k.before(this.getRecordHTML(p - 1, p)));
                            a(), setTimeout(function() {
                                b.refreshRanges()
                            }, 0)
                        } else {
                            if (h >= l - this.show_extra + 2 && h > 1) return;
                            for (;;) {
                                var n = c.find("#grid_" + this.name + "_rec_bottom").prev();
                                if ("top" == n.attr("line")) break;
                                if (!(parseInt(n.attr("line")) > i)) break;
                                n.remove()
                            }
                            var n = c.find("#grid_" + this.name + "_rec_top").next(),
                                o = n.attr("line");
                            "bottom" == o && (o = i);
                            for (var p = parseInt(o) - 1; p >= h; p--) this.records[p - 1] && (this.records[p - 1].expanded === !0 && (this.records[p - 1].expanded = !1), j.after(this.getRecordHTML(p - 1, p)));
                            a(), setTimeout(function() {
                                b.refreshRanges()
                            }, 0)
                        }
                        var q = (h - 1) * b.recordHeight,
                            r = (d - i) * b.recordHeight;
                        0 > r && (r = 0), j.css("height", q + "px"), k.css("height", r + "px"), b.last.range_start = h, b.last.range_end = i;
                        var s = Math.floor(c[0].scrollTop / this.recordHeight),
                            t = s + Math.floor(c.height() / this.recordHeight);
                        if (t + 10 > d && this.last.pull_more !== !0 && d < this.total - this.offset)
                            if (this.autoLoad === !0) this.last.pull_more = !0, this.last.xhr_offset += this.limit, this.request("get-records");
                            else {
                                var u = $("#grid_" + this.name + "_rec_more");
                                "none" == u.css("display") && u.show().on("click", function() {
                                    b.last.pull_more = !0, b.last.xhr_offset += b.limit, b.request("get-records"), $(this).find("td").html('<div><div style="width: 20px; height: 20px;" class="w2ui-spinner"></div></div>')
                                }), -1 == u.find("td").text().indexOf("Load") && u.find("td").html("<div>" + w2utils.lang("Load") + " " + b.limit + " " + w2utils.lang("More") + "...</div>")
                            }
                        d >= this.total - this.offset && $("#grid_" + this.name + "_rec_more").hide()
                    }
                }
            },
            getRecordHTML: function(a, b, c) {
                var d, e = "",
                    f = this.last.selection;
                if (-1 == a) {
                    e += '<tr line="0">', this.show.lineNumbers && (e += '<td class="w2ui-col-number" style="height: 0px;"></td>'), this.show.selectColumn && (e += '<td class="w2ui-col-select" style="height: 0px;"></td>'), this.show.expandColumn && (e += '<td class="w2ui-col-expand" style="height: 0px;"></td>');
                    for (var g in this.columns) this.columns[g].hidden || (e += '<td class="w2ui-grid-data" col="' + g + '" style="height: 0px;"></td>');
                    return e += '<td class="w2ui-grid-data-last" style="height: 0px;"></td>', e += "</tr>"
                }
                var h = "object" != typeof this.url ? this.url : this.url.get;
                if (c !== !0)
                    if (this.searchData.length > 0 && !h) {
                        if (a >= this.last.searchIds.length) return "";
                        a = this.last.searchIds[a], d = this.records[a]
                    } else {
                        if (a >= this.records.length) return "";
                        d = this.records[a]
                    }
                else {
                    if (a >= this.summary.length) return "";
                    d = this.summary[a]
                }
                if (!d) return "";
                var i = (w2utils.escapeId(d.recid), !1);
                if (-1 != f.indexes.indexOf(a) && (i = !0), e += '<tr id="grid_' + this.name + "_rec_" + d.recid + '" recid="' + d.recid + '" line="' + b + '"  class="' + (b % 2 == 0 ? "w2ui-even" : "w2ui-odd") + (i && "row" == this.selectType ? " w2ui-selected" : "") + (d.expanded === !0 ? " w2ui-expanded" : "") + '" ' + (c !== !0 ? w2utils.isIOS ? "    onclick  = \"w2ui['" + this.name + "'].dblClick('" + d.recid + "', event);\"" : "    onclick  = \"w2ui['" + this.name + "'].click('" + d.recid + "', event);\"    oncontextmenu = \"w2ui['" + this.name + "'].contextMenu('" + d.recid + "', event);\"" : "") + ' style="height: ' + this.recordHeight + "px; " + (i || "string" != typeof d.style ? "" : d.style) + '" ' + ("string" == typeof d.style ? 'custom_style="' + d.style + '"' : "") + ">", this.show.lineNumbers && (e += '<td id="grid_' + this.name + "_cell_" + a + "_number" + (c ? "_s" : "") + '" class="w2ui-col-number">' + (c !== !0 ? "<div>" + b + "</div>" : "") + "</td>"), this.show.selectColumn && (e += '<td id="grid_' + this.name + "_cell_" + a + "_select" + (c ? "_s" : "") + '" class="w2ui-grid-data w2ui-col-select"         onclick="if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;">' + (c !== !0 ? '    <div>        <input class="w2ui-grid-select-check" type="checkbox" tabIndex="-1"            ' + (i ? 'checked="checked"' : "") + "            onclick=\"var obj = w2ui['" + this.name + "'];                 if (!obj.multiSelect) { obj.selectNone(); }                if (this.checked) obj.select('" + d.recid + "'); else obj.unselect('" + d.recid + "');                 if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;\">    </div>" : "") + "</td>"), this.show.expandColumn) {
                    var j = "";
                    j = d.expanded === !0 ? "-" : "+", "none" == d.expanded && (j = ""), "spinner" == d.expanded && (j = '<div class="w2ui-spinner" style="width: 16px; margin: -2px 2px;"></div>'), e += '<td id="grid_' + this.name + "_cell_" + a + "_expand" + (c ? "_s" : "") + '" class="w2ui-grid-data w2ui-col-expand">' + (c !== !0 ? '    <div ondblclick="if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;"             onclick="w2ui[\'' + this.name + "'].toggle('" + d.recid + "', event);                 if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;\">        " + j + " </div>" : "") + "</td>"
                }
                for (var k = 0;;) {
                    var l = this.columns[k];
                    if (l.hidden) {
                        if (k++, "undefined" == typeof this.columns[k]) break
                    } else {
                        var m = !c && d.changes && "undefined" != typeof d.changes[l.field],
                            n = this.getCellHTML(a, k, c),
                            o = "";
                        if ("string" == typeof l.render) {
                            var p = l.render.toLowerCase().split(":"); - 1 != ["number", "int", "float", "money", "currency", "percent"].indexOf(p[0]) && (o += "text-align: right;")
                        }
                        "object" == typeof d.style && "string" == typeof d.style[k] && (o += d.style[k] + ";");
                        var q = !1;
                        if (i && -1 != $.inArray(k, f.columns[a]) && (q = !0), e += '<td class="w2ui-grid-data' + (q ? " w2ui-selected" : "") + (m ? " w2ui-changed" : "") + '" col="' + k + '"     style="' + o + ("undefined" != typeof l.style ? l.style : "") + '" ' + ("undefined" != typeof l.attr ? l.attr : "") + ">" + n + "</td>", k++, "undefined" == typeof this.columns[k]) break
                    }
                }
                return e += '<td class="w2ui-grid-data-last"></td>', e += "</tr>"
            },
            getCellHTML: function(a, b, c) {
                var d = this.columns[b],
                    e = c !== !0 ? this.records[a] : this.summary[a],
                    f = this.getCellValue(a, b, c),
                    g = d.editable;
                if ("undefined" != typeof d.render) {
                    if ("function" == typeof d.render && (f = $.trim(d.render.call(this, e, a, b)), (f.length < 4 || "<div" != f.substr(0, 4).toLowerCase()) && (f = "<div>" + f + "</div>")), "object" == typeof d.render && (f = "<div>" + (d.render[f] || "") + "</div>"), "string" == typeof d.render) {
                        var h = d.render.toLowerCase().split(":"),
                            i = "",
                            j = ""; - 1 != ["number", "int", "float", "money", "currency", "percent"].indexOf(h[0]) && ("undefined" != typeof h[1] && w2utils.isInt(h[1]) || (h[1] = 0), h[1] > 20 && (h[1] = 20), h[1] < 0 && (h[1] = 0), -1 != ["money", "currency"].indexOf(h[0]) && (h[1] = w2utils.settings.currencyPrecision, i = w2utils.settings.currencyPrefix, j = w2utils.settings.currencySuffix), "percent" == h[0] && (j = "%", "0" !== h[1] && (h[1] = 1)), "int" == h[0] && (h[1] = 0), f = "<div>" + ("" !== f ? i + w2utils.formatNumber(Number(f).toFixed(h[1])) + j : "") + "</div>"), "time" == h[0] && (("undefined" == typeof h[1] || "" == h[1]) && (h[1] = w2utils.settings.time_format), f = "<div>" + i + w2utils.formatTime(f, "h12" == h[1] ? "hh:mi pm" : "h24:min") + j + "</div>"), "date" == h[0] && (("undefined" == typeof h[1] || "" == h[1]) && (h[1] = w2utils.settings.date_display), f = "<div>" + i + w2utils.formatDate(f, h[1]) + j + "</div>"), "age" == h[0] && (f = "<div>" + i + w2utils.age(f) + j + "</div>"), "toggle" == h[0] && (f = "<div>" + i + (f ? "Yes" : "") + j + "</div>")
                    }
                } else {
                    var k = "";
                    if (g && -1 != ["checkbox", "check"].indexOf(g.type)) {
                        var l = c ? -(a + 1) : a;
                        k = "text-align: center", f = '<input type="checkbox" ' + (f ? "checked" : "") + " onclick=\"    var obj = w2ui['" + this.name + "'];     obj.editChange.call(obj, this, " + l + ", " + b + ', event); ">'
                    }
                    if (this.show.recordTitles) {
                        var m = String(f).replace(/"/g, "''");
                        "undefined" != typeof d.title && ("function" == typeof d.title && (m = d.title.call(this, e, a, b)), "string" == typeof d.title && (m = d.title));
                        var f = '<div title="' + w2utils.stripTags(m) + '" style="' + k + '">' + f + "</div>"
                    } else var f = '<div style="' + k + '">' + f + "</div>"
                }
                return (null == f || "undefined" == typeof f) && (f = ""), f
            },
            getCellValue: function(a, b, c) {
                var d = this.columns[b],
                    e = c !== !0 ? this.records[a] : this.summary[a],
                    f = this.parseField(e, d.field);
                return e.changes && "undefined" != typeof e.changes[d.field] && (f = e.changes[d.field]), (null == f || "undefined" == typeof f) && (f = ""), f
            },
            getFooterHTML: function() {
                return '<div>    <div class="w2ui-footer-left"></div>    <div class="w2ui-footer-right"></div>    <div class="w2ui-footer-center"></div></div>'
            },
            status: function(a) {
                if ("undefined" != typeof a) $("#grid_" + this.name + "_footer").find(".w2ui-footer-left").html(a);
                else {
                    var b = "",
                        c = this.getSelection();
                    if (c.length > 0) {
                        b = String(c.length).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " " + w2utils.lang("selected");
                        var d = c[0];
                        "object" == typeof d && (d = d.recid + ", " + w2utils.lang("Column") + ": " + d.column), 1 == c.length && (b = w2utils.lang("Record ID") + ": " + d + " ")
                    }
                    $("#grid_" + this.name + "_footer .w2ui-footer-left").html(b), 1 == c.length ? this.toolbar.enable("w2ui-edit") : this.toolbar.disable("w2ui-edit"), c.length >= 1 ? this.toolbar.enable("w2ui-delete") : this.toolbar.disable("w2ui-delete")
                }
            },
            lock: function() {
                var a = $(this.box).find("> div:first-child"),
                    b = Array.prototype.slice.call(arguments, 0);
                b.unshift(a), setTimeout(function() {
                    w2utils.lock.apply(window, b)
                }, 10)
            },
            unlock: function() {
                var a = this.box;
                setTimeout(function() {
                    w2utils.unlock(a)
                }, 25)
            },
            stateSave: function(a) {
                if (!localStorage) return null;
                var b = {
                    columns: [],
                    show: $.extend({}, this.show),
                    last: {
                        search: this.last.search,
                        multi: this.last.multi,
                        logic: this.last.logic,
                        caption: this.last.caption,
                        field: this.last.field,
                        scrollTop: this.last.scrollTop,
                        scrollLeft: this.last.scrollLeft
                    },
                    sortData: [],
                    searchData: []
                };
                for (var c in this.columns) {
                    var d = this.columns[c];
                    b.columns.push({
                        field: d.field,
                        hidden: d.hidden,
                        size: d.size,
                        sizeCalculated: d.sizeCalculated,
                        sizeOriginal: d.sizeOriginal,
                        sizeType: d.sizeType
                    })
                }
                for (var c in this.sortData) b.sortData.push($.extend({}, this.sortData[c]));
                for (var c in this.searchData) b.searchData.push($.extend({}, this.searchData[c]));
                if (a !== !0) {
                    var e = this.trigger({
                        phase: "before",
                        type: "stateSave",
                        target: this.name,
                        state: b
                    });
                    if (e.isCancelled === !0) return void("function" == typeof callBack && callBack({
                        status: "error",
                        message: "Request aborted."
                    }));
                    try {
                        var f = $.parseJSON(localStorage.w2ui || "{}");
                        f || (f = {}), f.states || (f.states = {}), f.states[this.name] = b, localStorage.w2ui = JSON.stringify(f)
                    } catch (g) {
                        return delete localStorage.w2ui, null
                    }
                    this.trigger($.extend(e, {
                        phase: "after"
                    }))
                }
                return b
            },
            stateRestore: function(a) {
                var b = this;
                if (!a) try {
                    if (!localStorage) return !1;
                    var c = $.parseJSON(localStorage.w2ui || "{}");
                    c || (c = {}), c.states || (c.states = {}), a = c.states[this.name]
                } catch (d) {
                    return delete localStorage.w2ui, null
                }
                var e = this.trigger({
                    phase: "before",
                    type: "stateRestore",
                    target: this.name,
                    state: a
                });
                if (e.isCancelled === !0) return void("function" == typeof callBack && callBack({
                    status: "error",
                    message: "Request aborted."
                }));
                if ($.isPlainObject(a)) {
                    $.extend(this.show, a.show), $.extend(this.last, a.last);
                    var f = this.last.scrollTop,
                        g = this.last.scrollLeft;
                    for (var h in a.columns) {
                        var c = a.columns[h],
                            i = this.getColumn(c.field);
                        i && $.extend(i, c)
                    }
                    this.sortData.splice(0, this.sortData.length);
                    for (var h in a.sortData) this.sortData.push(a.sortData[h]);
                    this.searchData.splice(0, this.searchData.length);
                    for (var h in a.searchData) this.searchData.push(a.searchData[h]);
                    setTimeout(function() {
                        b.sortData.length > 0 && b.localSort(), b.searchData.length > 0 && b.localSearch(), b.last.scrollTop = f, b.last.scrollLeft = g, b.refresh()
                    }, 1)
                }
                return this.trigger($.extend(e, {
                    phase: "after"
                })), !0
            },
            stateReset: function() {
                if (this.stateRestore(this.last.state), localStorage) try {
                    var a = $.parseJSON(localStorage.w2ui || "{}");
                    a.states && a.states[this.name] && delete a.states[this.name], localStorage.w2ui = JSON.stringify(a)
                } catch (b) {
                    return delete localStorage.w2ui, null
                }
            },
            parseField: function(a, b) {
                var c = "";
                try {
                    c = a;
                    var d = String(b).split(".");
                    for (var e in d) c = c[d[e]]
                } catch (f) {
                    c = ""
                }
                return c
            },
            prepareData: function() {
                for (var a in this.records) {
                    var b = this.records[a];
                    for (var c in this.columns) {
                        var d = this.columns[c];
                        if (null != b[d.field] && "string" == typeof d.render) {
                            if (-1 != ["number", "int", "float", "money", "currency", "percent"].indexOf(d.render.split(":")[0]) && "number" != typeof b[d.field] && (b[d.field] = parseFloat(b[d.field])), -1 != ["date", "age"].indexOf(d.render.split(":")[0]) && !b[d.field + "_"]) {
                                var e = b[d.field];
                                w2utils.isInt(e) && (e = parseInt(e)), b[d.field + "_"] = new Date(e)
                            }
                            if (-1 != ["time"].indexOf(d.render))
                                if (w2utils.isTime(b[d.field])) {
                                    var f = w2utils.isTime(b[d.field], !0),
                                        e = new Date;
                                    e.setHours(f.hours, f.minutes, f.seconds ? f.seconds : 0, 0), b[d.field + "_"] || (b[d.field + "_"] = e)
                                } else {
                                    var f = b[d.field];
                                    w2utils.isInt(f) && (f = parseInt(f));
                                    var f = null != f ? new Date(f) : new Date,
                                        e = new Date;
                                    e.setHours(f.getHours(), f.getMinutes(), f.getSeconds(), 0), b[d.field + "_"] || (b[d.field + "_"] = e)
                                }
                        }
                    }
                }
            },
            nextCell: function(a, b) {
                var c = a + 1;
                if (this.columns.length == c) return null;
                if (b === !0) {
                    var d = this.columns[c].editable;
                    if (this.columns[c].hidden || "undefined" == typeof d || d && -1 != ["checkbox", "check"].indexOf(d.type)) return this.nextCell(c, b)
                }
                return c
            },
            prevCell: function(a, b) {
                var c = a - 1;
                if (0 > c) return null;
                if (b === !0) {
                    var d = this.columns[c].editable;
                    if (this.columns[c].hidden || "undefined" == typeof d || d && -1 != ["checkbox", "check"].indexOf(d.type)) return this.prevCell(c, b)
                }
                return c
            },
            nextRow: function(a) {
                if (a + 1 < this.records.length && 0 == this.last.searchIds.length || this.last.searchIds.length > 0 && a < this.last.searchIds[this.last.searchIds.length - 1]) {
                    if (a++, this.last.searchIds.length > 0)
                        for (;;) {
                            if (-1 != $.inArray(a, this.last.searchIds) || a > this.records.length) break;
                            a++
                        }
                    return a
                }
                return null
            },
            prevRow: function(a) {
                if (a > 0 && 0 == this.last.searchIds.length || this.last.searchIds.length > 0 && a > this.last.searchIds[0]) {
                    if (a--, this.last.searchIds.length > 0)
                        for (;;) {
                            if (-1 != $.inArray(a, this.last.searchIds) || 0 > a) break;
                            a--
                        }
                    return a
                }
                return null
            }
        }, $.extend(w2grid.prototype, w2utils.event), w2obj.grid = w2grid
    }(),
    function() {
        var a = function(a) {
                this.box = null, this.name = null, this.panels = [], this.tmp = {}, this.padding = 1, this.resizer = 4, this.style = "", this.onShow = null, this.onHide = null, this.onResizing = null, this.onResizerClick = null, this.onRender = null, this.onRefresh = null, this.onResize = null, this.onDestroy = null, $.extend(!0, this, w2obj.layout, a)
            },
            b = ["top", "left", "main", "preview", "right", "bottom"];
        $.fn.w2layout = function(c) {
            function d(a, b, c) {
                var d = a.get(b);
                return null !== d && "undefined" == typeof c && (c = d.tabs), null === d || null === c ? !1 : ($.isArray(c) && (c = {
                    tabs: c
                }), $().w2destroy(a.name + "_" + b + "_tabs"), d.tabs = $().w2tabs($.extend({}, c, {
                    owner: a,
                    name: a.name + "_" + b + "_tabs"
                })), d.show.tabs = !0, !0)
            }

            function e(a, b, c) {
                var d = a.get(b);
                return null !== d && "undefined" == typeof c && (c = d.toolbar), null === d || null === c ? !1 : ($.isArray(c) && (c = {
                    items: c
                }), $().w2destroy(a.name + "_" + b + "_toolbar"), d.toolbar = $().w2toolbar($.extend({}, c, {
                    owner: a,
                    name: a.name + "_" + b + "_toolbar"
                })), d.show.toolbar = !0, !0)
            }
            if ("object" == typeof c || !c) {
                if (!w2utils.checkName(c, "w2layout")) return;
                var f = c.panels || [],
                    g = new a(c);
                $.extend(g, {
                    handlers: [],
                    panels: []
                });
                for (var h = 0, i = f.length; i > h; h++) g.panels[h] = $.extend(!0, {}, a.prototype.panel, f[h]), ($.isPlainObject(g.panels[h].tabs) || $.isArray(g.panels[h].tabs)) && d(g, f[h].type), ($.isPlainObject(g.panels[h].toolbar) || $.isArray(g.panels[h].toolbar)) && e(g, f[h].type);
                for (var j in b) j = b[j], null === g.get(j) && g.panels.push($.extend(!0, {}, a.prototype.panel, {
                    type: j,
                    hidden: "main" !== j,
                    size: 50
                }));
                return $(this).length > 0 && g.render($(this)[0]), w2ui[g.name] = g, g
            }
            if (w2ui[$(this).attr("name")]) {
                var k = w2ui[$(this).attr("name")];
                return k[c].apply(k, Array.prototype.slice.call(arguments, 1)), this
            }
            console.log("ERROR: Method " + c + " does not exist on jQuery.w2layout")
        }, a.prototype = {
            panel: {
                type: null,
                title: "",
                size: 100,
                minSize: 20,
                maxSize: !1,
                hidden: !1,
                resizable: !1,
                overflow: "auto",
                style: "",
                content: "",
                tabs: null,
                toolbar: null,
                width: null,
                height: null,
                show: {
                    toolbar: !1,
                    tabs: !1
                },
                onRefresh: null,
                onShow: null,
                onHide: null
            },
            html: function(a, b, c) {
                return this.content(a, b, c)
            },
            content: function(a, b, c) {
                var d = this,
                    e = this.get(a);
                if ("css" == a) return $("#layout_" + d.name + "_panel_css").html("<style>" + b + "</style>"), !0;
                if (null === e) return !1;
                if ("undefined" == typeof b || null === b) return e.content;
                if (b instanceof jQuery) return console.log("ERROR: You can not pass jQuery object to w2layout.content() method"), !1;
                var f = "#layout_" + this.name + "_panel_" + e.type,
                    g = $(f + "> .w2ui-panel-content"),
                    h = 0;
                if (g.length > 0 && ($(f).scrollTop(0), h = $(g).position().top), "" === e.content) e.content = b, this.refresh(a);
                else {
                    if (e.content = b, !e.hidden && null !== c && "" !== c && "undefined" != typeof c) {
                        var i = $(f + "> .w2ui-panel-content");
                        i.after('<div class="w2ui-panel-content new-panel" style="' + i[0].style.cssText + '"></div>');
                        var j = $(f + "> .w2ui-panel-content.new-panel");
                        i.css("top", h), j.css("top", h), "object" == typeof b ? (b.box = j[0], b.render()) : j.html(b), w2utils.transition(i[0], j[0], c, function() {
                            i.remove(), j.removeClass("new-panel"), j.css("overflow", e.overflow), d.resize(), -1 != window.navigator.userAgent.indexOf("MSIE") && setTimeout(function() {
                                d.resize()
                            }, 100)
                        })
                    }
                    this.refresh(a)
                }
                return d.resize(), -1 != window.navigator.userAgent.indexOf("MSIE") && setTimeout(function() {
                    d.resize()
                }, 100), !0
            },
            load: function(a, b, c, d) {
                var e = this;
                return "css" == a ? ($.get(b, function(b, c, f) {
                    e.content(a, f.responseText), d && d()
                }), !0) : null !== this.get(a) ? ($.get(b, function(b, f, g) {
                    e.content(a, g.responseText, c), d && d(), e.resize(), -1 != window.navigator.userAgent.indexOf("MSIE") && setTimeout(function() {
                        e.resize()
                    }, 100)
                }), !0) : !1
            },
            sizeTo: function(a, b) {
                var c = this,
                    d = c.get(a);
                return null === d ? !1 : ($(c.box).find(" > div > .w2ui-panel").css({
                    "-webkit-transition": ".2s",
                    "-moz-transition": ".2s",
                    "-ms-transition": ".2s",
                    "-o-transition": ".2s"
                }), setTimeout(function() {
                    c.set(a, {
                        size: b
                    })
                }, 1), setTimeout(function() {
                    $(c.box).find(" > div > .w2ui-panel").css({
                        "-webkit-transition": "0s",
                        "-moz-transition": "0s",
                        "-ms-transition": "0s",
                        "-o-transition": "0s"
                    }), c.resize()
                }, 500), !0)
            },
            show: function(a, b) {
                var c = this,
                    d = this.trigger({
                        phase: "before",
                        type: "show",
                        target: a,
                        object: this.get(a),
                        immediate: b
                    });
                if (d.isCancelled !== !0) {
                    var e = c.get(a);
                    return null === e ? !1 : (e.hidden = !1, b === !0 ? ($("#layout_" + c.name + "_panel_" + a).css({
                        opacity: "1"
                    }), e.resizable && $("#layout_" + c.name + "_resizer_" + a).show(), c.trigger($.extend(d, {
                        phase: "after"
                    })), c.resize()) : (e.resizable && $("#layout_" + c.name + "_resizer_" + a).show(), $("#layout_" + c.name + "_panel_" + a).css({
                        opacity: "0"
                    }), $(c.box).find(" > div > .w2ui-panel").css({
                        "-webkit-transition": ".2s",
                        "-moz-transition": ".2s",
                        "-ms-transition": ".2s",
                        "-o-transition": ".2s"
                    }), setTimeout(function() {
                        c.resize()
                    }, 1), setTimeout(function() {
                        $("#layout_" + c.name + "_panel_" + a).css({
                            opacity: "1"
                        })
                    }, 250), setTimeout(function() {
                        $(c.box).find(" > div > .w2ui-panel").css({
                            "-webkit-transition": "0s",
                            "-moz-transition": "0s",
                            "-ms-transition": "0s",
                            "-o-transition": "0s"
                        }), c.trigger($.extend(d, {
                            phase: "after"
                        })), c.resize()
                    }, 500)), !0)
                }
            },
            hide: function(a, b) {
                var c = this,
                    d = this.trigger({
                        phase: "before",
                        type: "hide",
                        target: a,
                        object: this.get(a),
                        immediate: b
                    });
                if (d.isCancelled !== !0) {
                    var e = c.get(a);
                    return null === e ? !1 : (e.hidden = !0, b === !0 ? ($("#layout_" + c.name + "_panel_" + a).css({
                        opacity: "0"
                    }), $("#layout_" + c.name + "_resizer_" + a).hide(), c.trigger($.extend(d, {
                        phase: "after"
                    })), c.resize()) : ($("#layout_" + c.name + "_resizer_" + a).hide(), $(c.box).find(" > div > .w2ui-panel").css({
                        "-webkit-transition": ".2s",
                        "-moz-transition": ".2s",
                        "-ms-transition": ".2s",
                        "-o-transition": ".2s"
                    }), $("#layout_" + c.name + "_panel_" + a).css({
                        opacity: "0"
                    }), setTimeout(function() {
                        c.resize()
                    }, 1), setTimeout(function() {
                        $(c.box).find(" > div > .w2ui-panel").css({
                            "-webkit-transition": "0s",
                            "-moz-transition": "0s",
                            "-ms-transition": "0s",
                            "-o-transition": "0s"
                        }), c.trigger($.extend(d, {
                            phase: "after"
                        })), c.resize()
                    }, 500)), !0)
                }
            },
            toggle: function(a, b) {
                var c = this.get(a);
                return null === c ? !1 : c.hidden ? this.show(a, b) : this.hide(a, b)
            },
            set: function(a, b) {
                var c = this.get(a, !0);
                return null === c ? !1 : ($.extend(this.panels[c], b), "undefined" != typeof b.content && this.refresh(a), this.resize(), !0)
            },
            get: function(a, b) {
                for (var c in this.panels)
                    if (this.panels[c].type == a) return b === !0 ? c : this.panels[c];
                return null
            },
            el: function(a) {
                var b = $("#layout_" + this.name + "_panel_" + a + "> .w2ui-panel-content");
                return 1 != b.length ? null : b[0]
            },
            hideToolbar: function(a) {
                var b = this.get(a);
                b && (b.show.toolbar = !1, $("#layout_" + this.name + "_panel_" + a + "> .w2ui-panel-toolbar").hide(), this.resize())
            },
            showToolbar: function(a) {
                var b = this.get(a);
                b && (b.show.toolbar = !0, $("#layout_" + this.name + "_panel_" + a + "> .w2ui-panel-toolbar").show(), this.resize())
            },
            toggleToolbar: function(a) {
                var b = this.get(a);
                b && (b.show.toolbar ? this.hideToolbar(a) : this.showToolbar(a))
            },
            hideTabs: function(a) {
                var b = this.get(a);
                b && (b.show.tabs = !1, $("#layout_" + this.name + "_panel_" + a + "> .w2ui-panel-tabs").hide(), this.resize())
            },
            showTabs: function(a) {
                var b = this.get(a);
                b && (b.show.tabs = !0, $("#layout_" + this.name + "_panel_" + a + "> .w2ui-panel-tabs").show(), this.resize())
            },
            toggleTabs: function(a) {
                var b = this.get(a);
                b && (b.show.tabs ? this.hideTabs(a) : this.showTabs(a))
            },
            render: function(a) {
                function c() {
                    g.tmp.events = {
                        resize: function() {
                            w2ui[g.name].resize()
                        },
                        resizeStart: d,
                        mouseMove: f,
                        mouseUp: e
                    }, $(window).on("resize", g.tmp.events.resize)
                }

                function d(a, c) {
                    if (g.box) {
                        c || (c = window.event), window.addEventListener || window.document.attachEvent("onselectstart", function() {
                            return !1
                        }), $(document).off("mousemove", g.tmp.events.mouseMove).on("mousemove", g.tmp.events.mouseMove), $(document).off("mouseup", g.tmp.events.mouseUp).on("mouseup", g.tmp.events.mouseUp), g.tmp.resize = {
                            type: a,
                            x: c.screenX,
                            y: c.screenY,
                            diff_x: 0,
                            diff_y: 0,
                            value: 0
                        };
                        for (var d in b) d = b[d], g.lock(d, {
                            opacity: 0
                        });
                        ("left" == a || "right" == a) && (g.tmp.resize.value = parseInt($("#layout_" + g.name + "_resizer_" + a)[0].style.left)), ("top" == a || "preview" == a || "bottom" == a) && (g.tmp.resize.value = parseInt($("#layout_" + g.name + "_resizer_" + a)[0].style.top))
                    }
                }

                function e(a) {
                    if (g.box && (a || (a = window.event), window.addEventListener || window.document.attachEvent("onselectstart", function() {
                            return !1
                        }), $(document).off("mousemove", g.tmp.events.mouseMove), $(document).off("mouseup", g.tmp.events.mouseUp), "undefined" != typeof g.tmp.resize)) {
                        for (var c in b) g.unlock(b[c]);
                        if (0 !== g.tmp.diff_x || 0 !== g.tmp.resize.diff_y) {
                            var d, e, f = g.get("top"),
                                h = g.get("bottom"),
                                i = g.get(g.tmp.resize.type),
                                j = parseInt($(g.box).height()),
                                k = parseInt($(g.box).width()),
                                l = String(i.size);
                            switch (g.tmp.resize.type) {
                                case "top":
                                    d = parseInt(i.sizeCalculated) + g.tmp.resize.diff_y, e = 0;
                                    break;
                                case "bottom":
                                    d = parseInt(i.sizeCalculated) - g.tmp.resize.diff_y, e = 0;
                                    break;
                                case "preview":
                                    d = parseInt(i.sizeCalculated) - g.tmp.resize.diff_y, e = (f && !f.hidden ? f.sizeCalculated : 0) + (h && !h.hidden ? h.sizeCalculated : 0);
                                    break;
                                case "left":
                                    d = parseInt(i.sizeCalculated) + g.tmp.resize.diff_x, e = 0;
                                    break;
                                case "right":
                                    d = parseInt(i.sizeCalculated) - g.tmp.resize.diff_x, e = 0
                            }
                            i.size = "%" == l.substr(l.length - 1) ? Math.floor(100 * d / ("left" == i.type || "right" == i.type ? k : j - e) * 100) / 100 + "%" : d, g.resize()
                        }
                        $("#layout_" + g.name + "_resizer_" + g.tmp.resize.type).removeClass("active"), delete g.tmp.resize
                    }
                }

                function f(a) {
                    if (g.box && (a || (a = window.event), "undefined" != typeof g.tmp.resize)) {
                        var b = g.get(g.tmp.resize.type),
                            c = g.tmp.resize,
                            d = g.trigger({
                                phase: "before",
                                type: "resizing",
                                target: g.name,
                                object: b,
                                originalEvent: a,
                                panel: c ? c.type : "all",
                                diff_x: c ? c.diff_x : 0,
                                diff_y: c ? c.diff_y : 0
                            });
                        if (d.isCancelled !== !0) {
                            var e = $("#layout_" + g.name + "_resizer_" + c.type),
                                f = a.screenX - c.x,
                                h = a.screenY - c.y,
                                i = g.get("main");
                            switch (e.hasClass("active") || e.addClass("active"), c.type) {
                                case "left":
                                    b.minSize - f > b.width && (f = b.minSize - b.width), b.maxSize && b.width + f > b.maxSize && (f = b.maxSize - b.width), i.minSize + f > i.width && (f = i.width - i.minSize);
                                    break;
                                case "right":
                                    b.minSize + f > b.width && (f = b.width - b.minSize), b.maxSize && b.width - f > b.maxSize && (f = b.width - b.maxSize), i.minSize - f > i.width && (f = i.minSize - i.width);
                                    break;
                                case "top":
                                    b.minSize - h > b.height && (h = b.minSize - b.height), b.maxSize && b.height + h > b.maxSize && (h = b.maxSize - b.height), i.minSize + h > i.height && (h = i.height - i.minSize);
                                    break;
                                case "preview":
                                case "bottom":
                                    b.minSize + h > b.height && (h = b.height - b.minSize), b.maxSize && b.height - h > b.maxSize && (h = b.height - b.maxSize), i.minSize - h > i.height && (h = i.minSize - i.height)
                            }
                            switch (c.diff_x = f, c.diff_y = h, c.type) {
                                case "top":
                                case "preview":
                                case "bottom":
                                    c.diff_x = 0, e.length > 0 && (e[0].style.top = c.value + c.diff_y + "px");
                                    break;
                                case "left":
                                case "right":
                                    c.diff_y = 0, e.length > 0 && (e[0].style.left = c.value + c.diff_x + "px")
                            }
                            g.trigger($.extend(d, {
                                phase: "after"
                            }))
                        }
                    }
                }
                var g = this,
                    h = (new Date).getTime(),
                    i = g.trigger({
                        phase: "before",
                        type: "render",
                        target: g.name,
                        box: a
                    });
                if (i.isCancelled !== !0) {
                    if ("undefined" != typeof a && null !== a && ($(g.box).find("#layout_" + g.name + "_panel_main").length > 0 && $(g.box).removeAttr("name").removeClass("w2ui-layout").html(""), g.box = a), !g.box) return !1;
                    $(g.box).attr("name", g.name).addClass("w2ui-layout").html("<div></div>"), $(g.box).length > 0 && ($(g.box)[0].style.cssText += g.style);
                    for (var j in b) {
                        j = b[j];
                        var k = (g.get(j), '<div id="layout_' + g.name + "_panel_" + j + '" class="w2ui-panel">    <div class="w2ui-panel-title"></div>    <div class="w2ui-panel-tabs"></div>    <div class="w2ui-panel-toolbar"></div>    <div class="w2ui-panel-content"></div></div><div id="layout_' + g.name + "_resizer_" + j + '" class="w2ui-resizer"></div>');
                        $(g.box).find(" > div").append(k)
                    }
                    return $(g.box).find(" > div").append('<div id="layout_' + g.name + '_panel_css" style="position: absolute; top: 10000px;"></div'), g.refresh(), g.trigger($.extend(i, {
                        phase: "after"
                    })), setTimeout(function() {
                        c(), g.resize()
                    }, 0), (new Date).getTime() - h
                }
            },
            refresh: function(a) {
                var b = this;
                "undefined" == typeof a && (a = null);
                var c = (new Date).getTime(),
                    d = b.trigger({
                        phase: "before",
                        type: "refresh",
                        target: "undefined" != typeof a ? a : b.name,
                        object: b.get(a)
                    });
                if (d.isCancelled !== !0) {
                    if ("string" == typeof a) {
                        var e = b.get(a);
                        if (null === e) return;
                        var f = "#layout_" + b.name + "_panel_" + e.type,
                            g = "#layout_" + b.name + "_resizer_" + e.type;
                        $(f).css({
                            display: e.hidden ? "none" : "block"
                        }), e.resizable ? $(g).show() : $(g).hide(), "object" == typeof e.content && "function" == typeof e.content.render ? (e.content.box = $(f + "> .w2ui-panel-content")[0], setTimeout(function() {
                            $(f + "> .w2ui-panel-content").length > 0 && ($(f + "> .w2ui-panel-content").removeClass().removeAttr("name").addClass("w2ui-panel-content").css("overflow", e.overflow)[0].style.cssText += ";" + e.style), e.content.render()
                        }, 1)) : $(f + "> .w2ui-panel-content").length > 0 && ($(f + "> .w2ui-panel-content").removeClass().removeAttr("name").addClass("w2ui-panel-content").html(e.content).css("overflow", e.overflow)[0].style.cssText += ";" + e.style);
                        var h = $(b.box).find(f + "> .w2ui-panel-tabs");
                        e.show.tabs ? 0 === h.find("[name=" + e.tabs.name + "]").length && null !== e.tabs ? h.w2render(e.tabs) : e.tabs.refresh() : h.html("").removeClass("w2ui-tabs").hide(), h = $(b.box).find(f + "> .w2ui-panel-toolbar"), e.show.toolbar ? 0 === h.find("[name=" + e.toolbar.name + "]").length && null !== e.toolbar ? h.w2render(e.toolbar) : e.toolbar.refresh() : h.html("").removeClass("w2ui-toolbar").hide(), h = $(b.box).find(f + "> .w2ui-panel-title"), e.title ? h.html(e.title).show() : h.html("").hide()
                    } else {
                        if (0 == $("#layout_" + b.name + "_panel_main").length) return void b.render();
                        b.resize();
                        for (var i in this.panels) b.refresh(this.panels[i].type)
                    }
                    return b.trigger($.extend(d, {
                        phase: "after"
                    })), (new Date).getTime() - c
                }
            },
            resize: function() {
                if (!this.box) return !1;
                var a = (new Date).getTime(),
                    c = this.tmp.resize,
                    d = this.trigger({
                        phase: "before",
                        type: "resize",
                        target: this.name,
                        panel: c ? c.type : "all",
                        diff_x: c ? c.diff_x : 0,
                        diff_y: c ? c.diff_y : 0
                    });
                if (d.isCancelled !== !0) {
                    this.padding < 0 && (this.padding = 0);
                    var e = parseInt($(this.box).width()),
                        f = parseInt($(this.box).height());
                    $(this.box).find(" > div").css({
                        width: e + "px",
                        height: f + "px"
                    });
                    var g, h, i, j, k, l = this,
                        m = this.get("main"),
                        n = this.get("preview"),
                        o = this.get("left"),
                        p = this.get("right"),
                        q = this.get("top"),
                        r = this.get("bottom"),
                        s = null !== n && n.hidden !== !0 ? !0 : !1,
                        t = null !== o && o.hidden !== !0 ? !0 : !1,
                        u = null !== p && p.hidden !== !0 ? !0 : !1,
                        v = null !== q && q.hidden !== !0 ? !0 : !1,
                        w = null !== r && r.hidden !== !0 ? !0 : !1;
                    for (var x in b)
                        if (x = b[x], "main" !== x) {
                            var c = this.get(x);
                            if (c) {
                                var y = String(c.size || 0);
                                if ("%" == y.substr(y.length - 1)) {
                                    var z = f;
                                    "preview" == c.type && (z = z - (q && !q.hidden ? q.sizeCalculated : 0) - (r && !r.hidden ? r.sizeCalculated : 0)), c.sizeCalculated = parseInt(("left" == c.type || "right" == c.type ? e : z) * parseFloat(c.size) / 100)
                                } else c.sizeCalculated = parseInt(c.size);
                                c.sizeCalculated = Math.max(c.sizeCalculated, parseInt(c.minSize))
                            }
                        }
                    null !== q && q.hidden !== !0 ? (g = 0, h = 0, i = e, j = q.sizeCalculated, $("#layout_" + this.name + "_panel_top").css({
                        display: "block",
                        left: g + "px",
                        top: h + "px",
                        width: i + "px",
                        height: j + "px"
                    }).show(), q.width = i, q.height = j, q.resizable && (h = q.sizeCalculated - (0 === this.padding ? this.resizer : 0), j = this.resizer > this.padding ? this.resizer : this.padding, $("#layout_" + this.name + "_resizer_top").show().css({
                        display: "block",
                        left: g + "px",
                        top: h + "px",
                        width: i + "px",
                        height: j + "px",
                        cursor: "ns-resize"
                    }).off("mousedown").on("mousedown", function(a) {
                        var b = l.trigger({
                            phase: "before",
                            type: "resizerClick",
                            target: "top",
                            originalEvent: a
                        });
                        if (b.isCancelled !== !0) return w2ui[l.name].tmp.events.resizeStart("top", a), l.trigger($.extend(b, {
                            phase: "after"
                        })), !1
                    }))) : $("#layout_" + this.name + "_panel_top").hide(), null !== o && o.hidden !== !0 ? (g = 0, h = 0 + (v ? q.sizeCalculated + this.padding : 0), i = o.sizeCalculated, j = f - (v ? q.sizeCalculated + this.padding : 0) - (w ? r.sizeCalculated + this.padding : 0), k = $("#layout_" + this.name + "_panel_left"), -1 != window.navigator.userAgent.indexOf("MSIE") && k.length > 0 && k[0].clientHeight < k[0].scrollHeight && (i += 17), k.css({
                        display: "block",
                        left: g + "px",
                        top: h + "px",
                        width: i + "px",
                        height: j + "px"
                    }).show(), o.width = i, o.height = j, o.resizable && (g = o.sizeCalculated - (0 === this.padding ? this.resizer : 0), i = this.resizer > this.padding ? this.resizer : this.padding, $("#layout_" + this.name + "_resizer_left").show().css({
                        display: "block",
                        left: g + "px",
                        top: h + "px",
                        width: i + "px",
                        height: j + "px",
                        cursor: "ew-resize"
                    }).off("mousedown").on("mousedown", function(a) {
                        var b = l.trigger({
                            phase: "before",
                            type: "resizerClick",
                            target: "left",
                            originalEvent: a
                        });
                        if (b.isCancelled !== !0) return w2ui[l.name].tmp.events.resizeStart("left", a), l.trigger($.extend(b, {
                            phase: "after"
                        })), !1
                    }))) : ($("#layout_" + this.name + "_panel_left").hide(), $("#layout_" + this.name + "_resizer_left").hide()), null !== p && p.hidden !== !0 ? (g = e - p.sizeCalculated, h = 0 + (v ? q.sizeCalculated + this.padding : 0), i = p.sizeCalculated, j = f - (v ? q.sizeCalculated + this.padding : 0) - (w ? r.sizeCalculated + this.padding : 0), $("#layout_" + this.name + "_panel_right").css({
                        display: "block",
                        left: g + "px",
                        top: h + "px",
                        width: i + "px",
                        height: j + "px"
                    }).show(), p.width = i, p.height = j, p.resizable && (g -= this.padding, i = this.resizer > this.padding ? this.resizer : this.padding, $("#layout_" + this.name + "_resizer_right").show().css({
                        display: "block",
                        left: g + "px",
                        top: h + "px",
                        width: i + "px",
                        height: j + "px",
                        cursor: "ew-resize"
                    }).off("mousedown").on("mousedown", function(a) {
                        var b = l.trigger({
                            phase: "before",
                            type: "resizerClick",
                            target: "right",
                            originalEvent: a
                        });
                        if (b.isCancelled !== !0) return w2ui[l.name].tmp.events.resizeStart("right", a), l.trigger($.extend(b, {
                            phase: "after"
                        })), !1
                    }))) : $("#layout_" + this.name + "_panel_right").hide(), null !== r && r.hidden !== !0 ? (g = 0, h = f - r.sizeCalculated, i = e, j = r.sizeCalculated, $("#layout_" + this.name + "_panel_bottom").css({
                        display: "block",
                        left: g + "px",
                        top: h + "px",
                        width: i + "px",
                        height: j + "px"
                    }).show(), r.width = i, r.height = j, r.resizable && (h -= 0 === this.padding ? 0 : this.padding, j = this.resizer > this.padding ? this.resizer : this.padding, $("#layout_" + this.name + "_resizer_bottom").show().css({
                        display: "block",
                        left: g + "px",
                        top: h + "px",
                        width: i + "px",
                        height: j + "px",
                        cursor: "ns-resize"
                    }).off("mousedown").on("mousedown", function(a) {
                        var b = l.trigger({
                            phase: "before",
                            type: "resizerClick",
                            target: "bottom",
                            originalEvent: a
                        });
                        if (b.isCancelled !== !0) return w2ui[l.name].tmp.events.resizeStart("bottom", a), l.trigger($.extend(b, {
                            phase: "after"
                        })), !1
                    }))) : $("#layout_" + this.name + "_panel_bottom").hide(), g = 0 + (t ? o.sizeCalculated + this.padding : 0), h = 0 + (v ? q.sizeCalculated + this.padding : 0), i = e - (t ? o.sizeCalculated + this.padding : 0) - (u ? p.sizeCalculated + this.padding : 0), j = f - (v ? q.sizeCalculated + this.padding : 0) - (w ? r.sizeCalculated + this.padding : 0) - (s ? n.sizeCalculated + this.padding : 0), k = $("#layout_" + this.name + "_panel_main"), -1 != window.navigator.userAgent.indexOf("MSIE") && k.length > 0 && k[0].clientHeight < k[0].scrollHeight && (i += 17), k.css({
                        display: "block",
                        left: g + "px",
                        top: h + "px",
                        width: i + "px",
                        height: j + "px"
                    }), m.width = i, m.height = j, null !== n && n.hidden !== !0 ? (g = 0 + (t ? o.sizeCalculated + this.padding : 0), h = f - (w ? r.sizeCalculated + this.padding : 0) - n.sizeCalculated, i = e - (t ? o.sizeCalculated + this.padding : 0) - (u ? p.sizeCalculated + this.padding : 0), j = n.sizeCalculated, k = $("#layout_" + this.name + "_panel_preview"), -1 != window.navigator.userAgent.indexOf("MSIE") && k.length > 0 && k[0].clientHeight < k[0].scrollHeight && (i += 17), k.css({
                        display: "block",
                        left: g + "px",
                        top: h + "px",
                        width: i + "px",
                        height: j + "px"
                    }).show(), n.width = i, n.height = j, n.resizable && (h -= 0 === this.padding ? 0 : this.padding, j = this.resizer > this.padding ? this.resizer : this.padding, $("#layout_" + this.name + "_resizer_preview").show().css({
                        display: "block",
                        left: g + "px",
                        top: h + "px",
                        width: i + "px",
                        height: j + "px",
                        cursor: "ns-resize"
                    }).off("mousedown").on("mousedown", function(a) {
                        var b = l.trigger({
                            phase: "before",
                            type: "resizerClick",
                            target: "preview",
                            originalEvent: a
                        });
                        if (b.isCancelled !== !0) return w2ui[l.name].tmp.events.resizeStart("preview", a), l.trigger($.extend(b, {
                            phase: "after"
                        })), !1
                    }))) : $("#layout_" + this.name + "_panel_preview").hide();
                    for (var A in b) {
                        A = b[A];
                        var B = this.get(A),
                            C = "#layout_" + this.name + "_panel_" + A + " > .w2ui-panel-",
                            D = 0;
                        B && (B.title && (D += w2utils.getSize($(C + "title").css({
                            top: D + "px",
                            display: "block"
                        }), "height")), B.show.tabs && (null !== B.tabs && w2ui[this.name + "_" + A + "_tabs"] && w2ui[this.name + "_" + A + "_tabs"].resize(), D += w2utils.getSize($(C + "tabs").css({
                            top: D + "px",
                            display: "block"
                        }), "height")), B.show.toolbar && (null !== B.toolbar && w2ui[this.name + "_" + A + "_toolbar"] && w2ui[this.name + "_" + A + "_toolbar"].resize(), D += w2utils.getSize($(C + "toolbar").css({
                            top: D + "px",
                            display: "block"
                        }), "height"))), $(C + "content").css({
                            display: "block"
                        }).css({
                            top: D + "px"
                        })
                    }
                    return clearTimeout(this._resize_timer), this._resize_timer = setTimeout(function() {
                        for (var a in w2ui)
                            if ("function" == typeof w2ui[a].resize) {
                                "undefined" == w2ui[a].panels && w2ui[a].resize();
                                var b = $(w2ui[a].box).parents(".w2ui-layout");
                                b.length > 0 && b.attr("name") == l.name && w2ui[a].resize()
                            }
                    }, 100), this.trigger($.extend(d, {
                        phase: "after"
                    })), (new Date).getTime() - a
                }
            },
            destroy: function() {
                var a = this.trigger({
                    phase: "before",
                    type: "destroy",
                    target: this.name
                });
                if (a.isCancelled !== !0) return "undefined" == typeof w2ui[this.name] ? !1 : ($(this.box).find("#layout_" + this.name + "_panel_main").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-layout").html(""), delete w2ui[this.name], this.trigger($.extend(a, {
                    phase: "after"
                })), this.tmp.events && this.tmp.events.resize && $(window).off("resize", this.tmp.events.resize), !0)
            },
            lock: function(a) {
                if (-1 == b.indexOf(a)) return void console.log("ERROR: First parameter needs to be the a valid panel name.");
                var c = Array.prototype.slice.call(arguments, 0);
                c[0] = "#layout_" + this.name + "_panel_" + a, w2utils.lock.apply(window, c)
            },
            unlock: function(a) {
                if (-1 == b.indexOf(a)) return void console.log("ERROR: First parameter needs to be the a valid panel name.");
                var c = "#layout_" + this.name + "_panel_" + a;
                w2utils.unlock(c)
            }
        }, $.extend(a.prototype, w2utils.event), w2obj.layout = a
    }();
var w2popup = {};
! function() {
    $.fn.w2popup = function(a, b) {
        "undefined" == typeof a && (b = {}, a = "open"), $.isPlainObject(a) && (b = a, a = "open"), a = a.toLowerCase(), "load" === a && "string" == typeof b && (b = $.extend({
            url: b
        }, arguments.length > 2 ? arguments[2] : {})), "open" === a && null != b.url && (a = "load"), b = b || {};
        var c = {};
        return $(this).length > 0 && ($(this).find("div[rel=title], div[rel=body], div[rel=buttons]").length > 0 ? ($(this).find("div[rel=title]").length > 0 && (c.title = $(this).find("div[rel=title]").html()), $(this).find("div[rel=body]").length > 0 && (c.body = $(this).find("div[rel=body]").html(), c.style = $(this).find("div[rel=body]")[0].style.cssText), $(this).find("div[rel=buttons]").length > 0 && (c.buttons = $(this).find("div[rel=buttons]").html())) : (c.title = "&nbsp;", c.body = $(this).html()), 0 != parseInt($(this).css("width")) && (c.width = parseInt($(this).css("width"))), 0 != parseInt($(this).css("height")) && (c.height = parseInt($(this).css("height")))), w2popup[a]($.extend({}, c, b))
    }, w2popup = {
        defaults: {
            title: "",
            body: "",
            buttons: "",
            style: "",
            color: "#000",
            opacity: .4,
            speed: .3,
            modal: !1,
            maximized: !1,
            keyboard: !0,
            width: 500,
            height: 300,
            showClose: !0,
            showMax: !1,
            transition: null
        },
        status: "closed",
        handlers: [],
        onOpen: null,
        onClose: null,
        onMax: null,
        onMin: null,
        onToggle: null,
        onKeydown: null,
        open: function(a) {
            function b(a) {
                return a || (a = window.event), window.addEventListener || window.document.attachEvent("onselectstart", function() {
                    return !1
                }), w2popup.status = "moving", q.resizing = !0, q.x = a.screenX, q.y = a.screenY, q.pos_x = $("#w2ui-popup").position().left, q.pos_y = $("#w2ui-popup").position().top, w2popup.lock({
                    opacity: 0
                }), $(document).on("mousemove", q.mvMove), $(document).on("mouseup", q.mvStop), a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, a.preventDefault ? void a.preventDefault() : !1
            }

            function c(a) {
                1 == q.resizing && (a || (a = window.event), q.div_x = a.screenX - q.x, q.div_y = a.screenY - q.y, $("#w2ui-popup").css({
                    "-webkit-transition": "none",
                    "-webkit-transform": "translate3d(" + q.div_x + "px, " + q.div_y + "px, 0px)",
                    "-moz-transition": "none",
                    "-moz-transform": "translate(" + q.div_x + "px, " + q.div_y + "px)",
                    "-ms-transition": "none",
                    "-ms-transform": "translate(" + q.div_x + "px, " + q.div_y + "px)",
                    "-o-transition": "none",
                    "-o-transform": "translate(" + q.div_x + "px, " + q.div_y + "px)"
                }))
            }

            function d(a) {
                1 == q.resizing && (a || (a = window.event), w2popup.status = "open", q.div_x = a.screenX - q.x, q.div_y = a.screenY - q.y, $("#w2ui-popup").css({
                    left: q.pos_x + q.div_x + "px",
                    top: q.pos_y + q.div_y + "px",
                    "-webkit-transition": "none",
                    "-webkit-transform": "translate3d(0px, 0px, 0px)",
                    "-moz-transition": "none",
                    "-moz-transform": "translate(0px, 0px)",
                    "-ms-transition": "none",
                    "-ms-transform": "translate(0px, 0px)",
                    "-o-transition": "none",
                    "-o-transform": "translate(0px, 0px)"
                }), q.resizing = !1, $(document).off("mousemove", q.mvMove), $(document).off("mouseup", q.mvStop), w2popup.unlock())
            }
            var e = this;
            if ("closing" == w2popup.status) return void setTimeout(function() {
                e.open.call(e, a)
            }, 100);
            var f = $("#w2ui-popup").data("options"),
                a = $.extend({}, this.defaults, f, {
                    title: "",
                    body: "",
                    buttons: ""
                }, a, {
                    maximized: !1
                });
            if (setTimeout(function() {
                    $("#w2ui-popup").data("options", a)
                }, 100), 0 == $("#w2ui-popup").length && (w2popup.handlers = [], w2popup.onMax = null, w2popup.onMin = null, w2popup.onToggle = null, w2popup.onOpen = null, w2popup.onClose = null, w2popup.onKeydown = null), a.onOpen && (w2popup.onOpen = a.onOpen), a.onClose && (w2popup.onClose = a.onClose), a.onMax && (w2popup.onMax = a.onMax), a.onMin && (w2popup.onMin = a.onMin), a.onToggle && (w2popup.onToggle = a.onToggle), a.onKeydown && (w2popup.onKeydown = a.onKeydown), void 0 == window.innerHeight) {
                var g = document.documentElement.offsetWidth,
                    h = document.documentElement.offsetHeight;
                "IE7" === w2utils.engine && (g += 21, h += 4)
            } else var g = window.innerWidth,
                h = window.innerHeight;
            parseInt(g) - 10 < parseInt(a.width) && (a.width = parseInt(g) - 10), parseInt(h) - 10 < parseInt(a.height) && (a.height = parseInt(h) - 10);
            var i = parseInt((parseInt(h) - parseInt(a.height)) / 2 * .6),
                j = parseInt((parseInt(g) - parseInt(a.width)) / 2);
            if (0 == $("#w2ui-popup").length) {
                var k = this.trigger({
                    phase: "before",
                    type: "open",
                    target: "popup",
                    options: a,
                    present: !1
                });
                if (k.isCancelled === !0) return;
                w2popup.status = "opening", w2popup.lockScreen(a);
                var l = "";
                a.showClose && (l += '<div class="w2ui-msg-button w2ui-msg-close" onmousedown="event.stopPropagation()" onclick="w2popup.close()">Close</div>'), a.showMax && (l += '<div class="w2ui-msg-button w2ui-msg-max" onmousedown="event.stopPropagation()" onclick="w2popup.toggle()">Max</div>');
                var m = '<div id="w2ui-popup" class="w2ui-popup" style="opacity: 0; left: ' + j + "px; top: " + i + "px;     width: " + parseInt(a.width) + "px; height: " + parseInt(a.height) + 'px;     -webkit-transform: scale(0.8); -moz-transform: scale(0.8); -ms-transform: scale(0.8); -o-transform: scale(0.8); ">   <div class="w2ui-msg-title" style="' + ("" == a.title ? "display: none" : "") + '">' + l + a.title + '</div>   <div class="w2ui-box1" style="' + ("" == a.title ? "top: 0px !important;" : "") + ("" == a.buttons ? "bottom: 0px !important;" : "") + '">       <div class="w2ui-msg-body' + ("" != !a.title ? " w2ui-msg-no-title" : "") + ("" != !a.buttons ? " w2ui-msg-no-buttons" : "") + '" style="' + a.style + '">' + a.body + '</div>   </div>   <div class="w2ui-box2" style="' + ("" == a.title ? "top: 0px !important;" : "") + ("" == a.buttons ? "bottom: 0px !important;" : "") + '">       <div class="w2ui-msg-body' + ("" != !a.title ? " w2ui-msg-no-title" : "") + ("" != !a.buttons ? " w2ui-msg-no-buttons" : "") + '" style="' + a.style + '"></div>       </div>   <div class="w2ui-msg-buttons" style="' + ("" == a.buttons ? "display: none" : "") + '">' + a.buttons + "</div></div>";
                $("body").append(m), setTimeout(function() {
                    $("#w2ui-popup .w2ui-box2").hide(), $("#w2ui-popup").css({
                        "-webkit-transition": a.speed + "s opacity, " + a.speed + "s -webkit-transform",
                        "-webkit-transform": "scale(1)",
                        "-moz-transition": a.speed + "s opacity, " + a.speed + "s -moz-transform",
                        "-moz-transform": "scale(1)",
                        "-ms-transition": a.speed + "s opacity, " + a.speed + "s -ms-transform",
                        "-ms-transform": "scale(1)",
                        "-o-transition": a.speed + "s opacity, " + a.speed + "s -o-transform",
                        "-o-transform": "scale(1)",
                        opacity: "1"
                    })
                }, 1), setTimeout(function() {
                    $("#w2ui-popup").css({
                        "-webkit-transform": "",
                        "-moz-transform": "",
                        "-ms-transform": "",
                        "-o-transform": ""
                    }), w2popup.status = "open", setTimeout(function() {
                        e.trigger($.extend(k, {
                            phase: "after"
                        }))
                    }, 100)
                }, 1e3 * a.speed)
            } else {
                var k = this.trigger({
                    phase: "before",
                    type: "open",
                    target: "popup",
                    options: a,
                    present: !0
                });
                if (k.isCancelled === !0) return;
                w2popup.status = "opening", ("undefined" == typeof f || f.width != a.width || f.height != a.height) && w2popup.resize(a.width, a.height), "undefined" != typeof f && (a.prevSize = a.width + ":" + a.height, a.maximized = f.maximized);
                var n = $("#w2ui-popup .w2ui-box2 > .w2ui-msg-body").html(a.body);
                n.length > 0 && (n[0].style.cssText = a.style), "" != a.buttons ? ($("#w2ui-popup .w2ui-msg-buttons").show().html(a.buttons), $("#w2ui-popup .w2ui-msg-body").removeClass("w2ui-msg-no-buttons"), $("#w2ui-popup .w2ui-box1, #w2ui-popup .w2ui-box2").css("bottom", "")) : ($("#w2ui-popup .w2ui-msg-buttons").hide().html(""), $("#w2ui-popup .w2ui-msg-body").addClass("w2ui-msg-no-buttons"), $("#w2ui-popup .w2ui-box1, #w2ui-popup .w2ui-box2").css("bottom", "0px")), "" != a.title ? ($("#w2ui-popup .w2ui-msg-title").show().html((a.showClose ? '<div class="w2ui-msg-button w2ui-msg-close" onmousedown="event.stopPropagation()" onclick="w2popup.close()">Close</div>' : "") + (a.showMax ? '<div class="w2ui-msg-button w2ui-msg-max" onmousedown="event.stopPropagation()" onclick="w2popup.toggle()">Max</div>' : "") + a.title), $("#w2ui-popup .w2ui-msg-body").removeClass("w2ui-msg-no-title"), $("#w2ui-popup .w2ui-box1, #w2ui-popup .w2ui-box2").css("top", "")) : ($("#w2ui-popup .w2ui-msg-title").hide().html(""), $("#w2ui-popup .w2ui-msg-body").addClass("w2ui-msg-no-title"), $("#w2ui-popup .w2ui-box1, #w2ui-popup .w2ui-box2").css("top", "0px"));
                var o = $("#w2ui-popup .w2ui-box1")[0],
                    p = $("#w2ui-popup .w2ui-box2")[0];
                w2utils.transition(o, p, a.transition), p.className = "w2ui-box1", o.className = "w2ui-box2", $(p).addClass("w2ui-current-box"), $("#w2ui-popup").data("prev-size", null), setTimeout(function() {
                    w2popup.status = "open", e.trigger($.extend(k, {
                        phase: "after"
                    }))
                }, 100)
            }
            a._last_w2ui_name = w2utils.keyboard.active(), w2utils.keyboard.active(null), a.keyboard && $(document).on("keydown", this.keydown);
            var q = {
                resizing: !1,
                mvMove: c,
                mvStop: d
            };
            return $("#w2ui-popup .w2ui-msg-title").on("mousedown", function(a) {
                b(a)
            }), this
        },
        keydown: function(a) {
            var b = $("#w2ui-popup").data("options");
            if (b.keyboard) {
                var c = w2popup.trigger({
                    phase: "before",
                    type: "keydown",
                    target: "popup",
                    options: b,
                    originalEvent: a
                });
                if (c.isCancelled !== !0) {
                    switch (a.keyCode) {
                        case 27:
                            a.preventDefault(), $("#w2ui-popup .w2ui-popup-message").length > 0 ? w2popup.message() : w2popup.close()
                    }
                    w2popup.trigger($.extend(c, {
                        phase: "after"
                    }))
                }
            }
        },
        close: function(a) {
            var b = this,
                a = $.extend({}, $("#w2ui-popup").data("options"), a);
            if (0 != $("#w2ui-popup").length) {
                var c = this.trigger({
                    phase: "before",
                    type: "close",
                    target: "popup",
                    options: a
                });
                c.isCancelled !== !0 && (w2popup.status = "closing", $("#w2ui-popup").css({
                    "-webkit-transition": a.speed + "s opacity, " + a.speed + "s -webkit-transform",
                    "-webkit-transform": "scale(0.9)",
                    "-moz-transition": a.speed + "s opacity, " + a.speed + "s -moz-transform",
                    "-moz-transform": "scale(0.9)",
                    "-ms-transition": a.speed + "s opacity, " + a.speed + "s -ms-transform",
                    "-ms-transform": "scale(0.9)",
                    "-o-transition": a.speed + "s opacity, " + a.speed + "s -o-transform",
                    "-o-transform": "scale(0.9)",
                    opacity: "0"
                }), w2popup.unlockScreen(a), setTimeout(function() {
                    $("#w2ui-popup").remove(), w2popup.status = "closed", b.trigger($.extend(c, {
                        phase: "after"
                    }))
                }, 1e3 * a.speed), w2utils.keyboard.active(a._last_w2ui_name), a.keyboard && $(document).off("keydown", this.keydown))
            }
        },
        toggle: function() {
            var a = this,
                b = $("#w2ui-popup").data("options"),
                c = this.trigger({
                    phase: "before",
                    type: "toggle",
                    target: "popup",
                    options: b
                });
            c.isCancelled !== !0 && (b.maximized === !0 ? w2popup.min() : w2popup.max(), setTimeout(function() {
                a.trigger($.extend(c, {
                    phase: "after"
                }))
            }, 1e3 * b.speed + 50))
        },
        max: function() {
            var a = this,
                b = $("#w2ui-popup").data("options");
            if (b.maximized !== !0) {
                var c = this.trigger({
                    phase: "before",
                    type: "max",
                    target: "popup",
                    options: b
                });
                c.isCancelled !== !0 && (w2popup.status = "resizing", b.prevSize = $("#w2ui-popup").css("width") + ":" + $("#w2ui-popup").css("height"), w2popup.resize(1e4, 1e4, function() {
                    w2popup.status = "open", b.maximized = !0, a.trigger($.extend(c, {
                        phase: "after"
                    }))
                }))
            }
        },
        min: function() {
            var a = this,
                b = $("#w2ui-popup").data("options");
            if (b.maximized === !0) {
                var c = b.prevSize.split(":"),
                    d = this.trigger({
                        phase: "before",
                        type: "min",
                        target: "popup",
                        options: b
                    });
                d.isCancelled !== !0 && (w2popup.status = "resizing", w2popup.resize(c[0], c[1], function() {
                    w2popup.status = "open", b.maximized = !1, b.prevSize = null, a.trigger($.extend(d, {
                        phase: "after"
                    }))
                }))
            }
        },
        get: function() {
            return $("#w2ui-popup").data("options")
        },
        set: function(a) {
            w2popup.open(a)
        },
        clear: function() {
            $("#w2ui-popup .w2ui-msg-title").html(""), $("#w2ui-popup .w2ui-msg-body").html(""), $("#w2ui-popup .w2ui-msg-buttons").html("")
        },
        reset: function() {
            w2popup.open(w2popup.defaults)
        },
        load: function(a) {
            function b(b, c) {
                if (delete a.url, $("body").append('<div id="w2ui-tmp" style="display: none">' + b + "</div>"), "undefined" != typeof c && $("#w2ui-tmp #" + c).length > 0 ? $("#w2ui-tmp #" + c).w2popup(a) : $("#w2ui-tmp > div").w2popup(a), $("#w2ui-tmp > style").length > 0) {
                    var d = $("<div>").append($("#w2ui-tmp > style").clone()).html();
                    0 == $("#w2ui-popup #div-style").length && $("#w2ui-popup").append('<div id="div-style" style="position: absolute; left: -100; width: 1px"></div>'), $("#w2ui-popup #div-style").html(d)
                }
                $("#w2ui-tmp").remove()
            }
            if (w2popup.status = "loading", "undefined" == String(a.url)) return void console.log("ERROR: The url parameter is empty.");
            var c = String(a.url).split("#"),
                d = c[0],
                e = c[1];
            "undefined" == String(a) && (a = {});
            var f = $("#w2ui-popup").data(d);
            "undefined" != typeof f && null != f ? b(f, e) : $.get(d, function(a, c, f) {
                b(f.responseText, e), $("#w2ui-popup").data(d, f.responseText)
            })
        },
        message: function(a) {
            $().w2tag(), a || (a = {
                width: 200,
                height: 100
            }), parseInt(a.width) < 10 && (a.width = 10), parseInt(a.height) < 10 && (a.height = 10), "undefined" == typeof a.hideOnClick && (a.hideOnClick = !1);
            var b = $("#w2ui-popup").data("options") || {};
            ("undefined" == typeof a.width || a.width > b.width - 10) && (a.width = b.width - 10), ("undefined" == typeof a.height || a.height > b.height - 40) && (a.height = b.height - 40);
            var c = $("#w2ui-popup .w2ui-msg-title"),
                d = parseInt($("#w2ui-popup").width()),
                e = $("#w2ui-popup .w2ui-popup-message").length;
            if ("" == $.trim(a.html)) {
                $("#w2ui-popup #w2ui-message" + (e - 1)).css("z-Index", 250);
                var a = $("#w2ui-popup #w2ui-message" + (e - 1)).data("options") || {};
                $("#w2ui-popup #w2ui-message" + (e - 1)).remove(), "function" == typeof a.onClose && a.onClose(), 1 == e ? w2popup.unlock() : $("#w2ui-popup #w2ui-message" + (e - 2)).show()
            } else {
                $("#w2ui-popup .w2ui-popup-message").hide(), $("#w2ui-popup .w2ui-box1").before('<div id="w2ui-message' + e + '" class="w2ui-popup-message" style="display: none; ' + (0 == c.length ? "top: 0px;" : "top: " + w2utils.getSize(c, "height") + "px;") + ("undefined" != typeof a.width ? "width: " + a.width + "px; left: " + (d - a.width) / 2 + "px;" : "left: 10px; right: 10px;") + ("undefined" != typeof a.height ? "height: " + a.height + "px;" : "bottom: 6px;") + '-webkit-transition: .3s; -moz-transition: .3s; -ms-transition: .3s; -o-transition: .3s;"' + (a.hideOnClick === !0 ? 'onclick="w2popup.message();"' : "") + "></div>"), $("#w2ui-popup #w2ui-message" + e).data("options", a);
                var f = $("#w2ui-popup #w2ui-message" + e).css("display");
                $("#w2ui-popup #w2ui-message" + e).css({
                    "-webkit-transform": "none" == f ? "translateY(-" + a.height + "px)" : "translateY(0px)",
                    "-moz-transform": "none" == f ? "translateY(-" + a.height + "px)" : "translateY(0px)",
                    "-ms-transform": "none" == f ? "translateY(-" + a.height + "px)" : "translateY(0px)",
                    "-o-transform": "none" == f ? "translateY(-" + a.height + "px)" : "translateY(0px)"
                }), "none" == f && ($("#w2ui-popup #w2ui-message" + e).show().html(a.html), setTimeout(function() {
                    $("#w2ui-popup #w2ui-message" + e).css({
                        "-webkit-transform": "none" == f ? "translateY(0px)" : "translateY(-" + a.height + "px)",
                        "-moz-transform": "none" == f ? "translateY(0px)" : "translateY(-" + a.height + "px)",
                        "-ms-transform": "none" == f ? "translateY(0px)" : "translateY(-" + a.height + "px)",
                        "-o-transform": "none" == f ? "translateY(0px)" : "translateY(-" + a.height + "px)"
                    })
                }, 1), setTimeout(function() {
                    $("#w2ui-popup #w2ui-message" + e).css({
                        "-webkit-transition": "0s",
                        "-moz-transition": "0s",
                        "-ms-transition": "0s",
                        "-o-transition": "0s",
                        "z-Index": 1500
                    }), 0 == e && w2popup.lock(), "function" == typeof a.onOpen && a.onOpen()
                }, 300))
            }
        },
        lock: function() {
            var a = Array.prototype.slice.call(arguments, 0);
            a.unshift($("#w2ui-popup")), w2utils.lock.apply(window, a)
        },
        unlock: function() {
            w2utils.unlock($("#w2ui-popup"))
        },
        lockScreen: function(a) {
            return $("#w2ui-lock").length > 0 ? !1 : ("undefined" == typeof a && (a = $("#w2ui-popup").data("options")), "undefined" == typeof a && (a = {}), a = $.extend({}, w2popup.defaults, a), $("body").append('<div id="w2ui-lock"     onmousewheel="if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true; if (event.preventDefault) event.preventDefault(); else return false;"    style="position: ' + ("IE5" == w2utils.engine ? "absolute" : "fixed") + "; z-Index: 1199; left: 0px; top: 0px;            padding: 0px; margin: 0px; background-color: " + a.color + '; width: 100%; height: 100%; opacity: 0;"></div>'), setTimeout(function() {
                $("#w2ui-lock").css({
                    "-webkit-transition": a.speed + "s opacity",
                    "-moz-transition": a.speed + "s opacity",
                    "-ms-transition": a.speed + "s opacity",
                    "-o-transition": a.speed + "s opacity",
                    opacity: a.opacity
                })
            }, 1), 1 == a.modal ? ($("#w2ui-lock").on("mousedown", function() {
                $("#w2ui-lock").css({
                    "-webkit-transition": ".1s",
                    "-moz-transition": ".1s",
                    "-ms-transition": ".1s",
                    "-o-transition": ".1s",
                    opacity: "0.6"
                })
            }), $("#w2ui-lock").on("mouseup", function() {
                setTimeout(function() {
                    $("#w2ui-lock").css({
                        "-webkit-transition": ".1s",
                        "-moz-transition": ".1s",
                        "-ms-transition": ".1s",
                        "-o-transition": ".1s",
                        opacity: a.opacity
                    })
                }, 100)
            })) : $("#w2ui-lock").on("mouseup", function() {
                w2popup.close()
            }), !0)
        },
        unlockScreen: function(a) {
            return 0 == $("#w2ui-lock").length ? !1 : ("undefined" == typeof a && (a = $("#w2ui-popup").data("options")), "undefined" == typeof a && (a = {}), a = $.extend({}, w2popup.defaults, a), $("#w2ui-lock").css({
                "-webkit-transition": a.speed + "s opacity",
                "-moz-transition": a.speed + "s opacity",
                "-ms-transition": a.speed + "s opacity",
                "-o-transition": a.speed + "s opacity",
                opacity: 0
            }), setTimeout(function() {
                $("#w2ui-lock").remove()
            }, 1e3 * a.speed), !0)
        },
        resize: function(a, b, c) {
            var d = $("#w2ui-popup").data("options");
            parseInt($(window).width()) - 10 < parseInt(a) && (a = parseInt($(window).width()) - 10), parseInt($(window).height()) - 10 < parseInt(b) && (b = parseInt($(window).height()) - 10);
            var e = (parseInt($(window).height()) - parseInt(b)) / 2 * .8,
                f = (parseInt($(window).width()) - parseInt(a)) / 2;
            $("#w2ui-popup").css({
                "-webkit-transition": d.speed + "s width, " + d.speed + "s height, " + d.speed + "s left, " + d.speed + "s top",
                "-moz-transition": d.speed + "s width, " + d.speed + "s height, " + d.speed + "s left, " + d.speed + "s top",
                "-ms-transition": d.speed + "s width, " + d.speed + "s height, " + d.speed + "s left, " + d.speed + "s top",
                "-o-transition": d.speed + "s width, " + d.speed + "s height, " + d.speed + "s left, " + d.speed + "s top",
                top: e,
                left: f,
                width: a,
                height: b
            }), setTimeout(function() {
                d.width = a, d.height = b, "function" == typeof c && c()
            }, 1e3 * d.speed + 50)
        }
    }, $.extend(w2popup, w2utils.event)
}();
var w2alert = function(a, b, c) {
        null == b && (b = w2utils.lang("Notification")), $("#w2ui-popup").length > 0 && "closing" != w2popup.status ? w2popup.message({
            width: 400,
            height: 170,
            html: '<div style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 45px; overflow: auto">        <div class="w2ui-centered" style="font-size: 13px;">' + a + '</div></div><div style="position: absolute; bottom: 7px; left: 0px; right: 0px; text-align: center; padding: 5px">        <button onclick="w2popup.message();" class="w2ui-popup-btn btn">' + w2utils.lang("Ok") + "</button></div>",
            onClose: function() {
                "function" == typeof c && c()
            }
        }) : w2popup.open({
            width: 450,
            height: 220,
            showMax: !1,
            showClose: !1,
            title: b,
            body: '<div class="w2ui-centered" style="font-size: 13px;">' + a + "</div>",
            buttons: '<button onclick="w2popup.close();" class="w2ui-popup-btn btn">' + w2utils.lang("Ok") + "</button>",
            onClose: function() {
                "function" == typeof c && c()
            }
        })
    },
    w2confirm = function(a, b, c) {
        var d = {},
            e = {
                msg: "",
                title: w2utils.lang("Confirmation"),
                width: $("#w2ui-popup").length > 0 ? 400 : 450,
                height: $("#w2ui-popup").length > 0 ? 170 : 220,
                yes_text: "Yes",
                yes_class: "",
                yes_style: "",
                yes_callBack: null,
                no_text: "No",
                no_class: "",
                no_style: "",
                no_callBack: null,
                callBack: null
            };
        return 1 == arguments.length && "object" == typeof a ? $.extend(d, e, a) : "function" == typeof b ? $.extend(d, e, {
            msg: a,
            callBack: b
        }) : $.extend(d, e, {
            msg: a,
            title: b,
            callBack: c
        }), $("#w2ui-popup").length > 0 && "closing" != w2popup.status ? (d.width > w2popup.get().width && (d.width = w2popup.get().width), d.height > w2popup.get().height - 50 && (d.height = w2popup.get().height - 50), w2popup.message({
            width: d.width,
            height: d.height,
            html: '<div style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 40px; overflow: auto">        <div class="w2ui-centered" style="font-size: 13px;">' + d.msg + '</div></div><div style="position: absolute; bottom: 7px; left: 0px; right: 0px; text-align: center; padding: 5px">        <button id="Yes" class="w2ui-popup-btn btn ' + d.yes_class + '" style="' + d.yes_style + '">' + w2utils.lang(d.yes_text) + '</button>        <button id="No" class="w2ui-popup-btn btn ' + d.no_class + '" style="' + d.no_style + '">' + w2utils.lang(d.no_text) + "</button></div>",
            onOpen: function() {
                $("#w2ui-popup .w2ui-popup-message .btn").on("click", function(a) {
                    w2popup.message(), "function" == typeof d.callBack && d.callBack(a.target.id), "Yes" == a.target.id && "function" == typeof d.yes_callBack && d.yes_callBack(), "No" == a.target.id && "function" == typeof d.no_callBack && d.no_callBack()
                })
            },
            onKeydown: function(a) {
                switch (a.originalEvent.keyCode) {
                    case 13:
                        "function" == typeof d.callBack && d.callBack("Yes"), "function" == typeof d.yes_callBack && d.yes_callBack(), w2popup.message();
                        break;
                    case 27:
                        "function" == typeof d.callBack && d.callBack("No"), "function" == typeof d.no_callBack && d.no_callBack(), w2popup.message()
                }
            }
        })) : (w2utils.isInt(d.height) || (d.height = d.height + 50), w2popup.open({
            width: d.width,
            height: d.height,
            title: d.title,
            modal: !0,
            showClose: !1,
            body: '<div class="w2ui-centered" style="font-size: 13px;">' + d.msg + "</div>",
            buttons: '<button id="Yes" class="w2ui-popup-btn btn ' + d.yes_class + '" style="' + d.yes_style + '">' + w2utils.lang(d.yes_text) + '</button><button id="No" class="w2ui-popup-btn btn ' + d.no_class + '" style="' + d.no_style + '">' + w2utils.lang(d.no_text) + "</button>",
            onOpen: function(a) {
                a.onComplete = function() {
                    $("#w2ui-popup .w2ui-popup-btn").on("click", function(a) {
                        w2popup.close(), "function" == typeof d.callBack && d.callBack(a.target.id), "Yes" == a.target.id && "function" == typeof d.yes_callBack && d.yes_callBack(), "No" == a.target.id && "function" == typeof d.no_callBack && d.no_callBack()
                    })
                }
            },
            onKeydown: function(a) {
                switch (a.originalEvent.keyCode) {
                    case 13:
                        "function" == typeof d.callBack && d.callBack("Yes"), "function" == typeof d.yes_callBack && d.yes_callBack(), w2popup.close();
                        break;
                    case 27:
                        "function" == typeof d.callBack && d.callBack("No"), "function" == typeof d.no_callBack && d.no_callBack(), w2popup.close()
                }
            }
        })), {
            yes: function(a) {
                return d.yes_callBack = a, this
            },
            no: function(a) {
                return d.no_callBack = a, this
            }
        }
    };
! function() {
    var a = function(a) {
        this.box = null, this.name = null, this.active = null, this.tabs = [], this.routeData = {}, this.right = "", this.style = "", this.onClick = null, this.onClose = null, this.onRender = null, this.onRefresh = null, this.onResize = null, this.onDestroy = null, $.extend(this, {
            handlers: []
        }), $.extend(!0, this, w2obj.tabs, a)
    };
    $.fn.w2tabs = function(b) {
        if ("object" != typeof b && b) {
            if (w2ui[$(this).attr("name")]) {
                var c = w2ui[$(this).attr("name")];
                return c[b].apply(c, Array.prototype.slice.call(arguments, 1)), this
            }
            return void console.log("ERROR: Method " + b + " does not exist on jQuery.w2tabs")
        }
        if (w2utils.checkName(b, "w2tabs")) {
            for (var d = b.tabs || [], e = new a(b), f = 0; f < d.length; f++) e.tabs[f] = $.extend({}, a.prototype.tab, d[f]);
            return 0 !== $(this).length && e.render($(this)[0]), w2ui[e.name] = e, e
        }
    }, a.prototype = {
        tab: {
            id: null,
            text: "",
            route: null,
            hidden: !1,
            disabled: !1,
            closable: !1,
            hint: "",
            onClick: null,
            onRefresh: null,
            onClose: null
        },
        add: function(a) {
            return this.insert(null, a)
        },
        insert: function(b, c) {
            $.isArray(c) || (c = [c]);
            for (var d = 0; d < c.length; d++) {
                if ("undefined" == typeof c[d].id) return void console.log('ERROR: The parameter "id" is required but not supplied. (obj: ' + this.name + ")");
                if (!w2utils.checkUniqueId(c[d].id, this.tabs, "tabs", this.name)) return;
                var e = $.extend({}, a.prototype.tab, c[d]);
                if (null === b || "undefined" == typeof b) this.tabs.push(e);
                else {
                    var f = this.get(b, !0);
                    this.tabs = this.tabs.slice(0, f).concat([e], this.tabs.slice(f))
                }
                this.refresh(c[d].id)
            }
        },
        remove: function() {
            for (var a = 0, b = 0; b < arguments.length; b++) {
                var c = this.get(arguments[b]);
                if (!c) return !1;
                a++, this.tabs.splice(this.get(c.id, !0), 1), $(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(c.id)).remove()
            }
            return a
        },
        select: function(a) {
            return this.active == a || null === this.get(a) ? !1 : (this.active = a, this.refresh(), !0)
        },
        set: function(a, b) {
            var c = this.get(a, !0);
            return null === c ? !1 : ($.extend(this.tabs[c], b), this.refresh(a), !0)
        },
        get: function(a, b) {
            if (0 === arguments.length) {
                for (var c = [], d = 0; d < this.tabs.length; d++) null != this.tabs[d].id && c.push(this.tabs[d].id);
                return c
            }
            for (var e = 0; e < this.tabs.length; e++)
                if (this.tabs[e].id == a) return b === !0 ? e : this.tabs[e];
            return null
        },
        show: function() {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && e.hidden !== !1 && (b++, e.hidden = !1, c.push(e.id))
            }
            return setTimeout(function() {
                for (var b in c) a.refresh(c[b])
            }, 15), b
        },
        hide: function() {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && e.hidden !== !0 && (b++, e.hidden = !0, c.push(e.id))
            }
            return setTimeout(function() {
                for (var b in c) a.refresh(c[b])
            }, 15), b
        },
        enable: function() {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && e.disabled !== !1 && (b++, e.disabled = !1, c.push(e.id))
            }
            return setTimeout(function() {
                for (var b in c) a.refresh(c[b])
            }, 15), b
        },
        disable: function() {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && e.disabled !== !0 && (b++, e.disabled = !0, c.push(e.id))
            }
            return setTimeout(function() {
                for (var b in c) a.refresh(c[b])
            }, 15), b
        },
        refresh: function(a) {
            var b = (new Date).getTime(),
                c = this.trigger({
                    phase: "before",
                    type: "refresh",
                    target: "undefined" != typeof a ? a : this.name,
                    object: this.get(a)
                });
            if (c.isCancelled !== !0) {
                if ("undefined" == typeof a)
                    for (var d = 0; d < this.tabs.length; d++) this.refresh(this.tabs[d].id);
                else {
                    var e = this.get(a);
                    if (null === e) return !1;
                    "undefined" != typeof e.caption && (e.text = e.caption);
                    var f = $(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(e.id)),
                        g = (e.closable ? '<div class="w2ui-tab-close" onclick="w2ui[\'' + this.name + "'].animateClose('" + e.id + "', event);\"></div>" : "") + '    <div class="w2ui-tab' + (this.active === e.id ? " active" : "") + (e.closable ? " closable" : "") + '"         title="' + ("undefined" != typeof e.hint ? e.hint : "") + '"        onclick="w2ui[\'' + this.name + "'].click('" + e.id + "', event);\">" + e.text + "</div>";
                    if (0 === f.length) {
                        var h = "";
                        e.hidden && (h += "display: none;"), e.disabled && (h += "opacity: 0.2; -moz-opacity: 0.2; -webkit-opacity: 0.2; -o-opacity: 0.2; filter:alpha(opacity=20);");
                        var i = '<td id="tabs_' + this.name + "_tab_" + e.id + '" style="' + h + '" valign="middle">' + g + "</td>";
                        this.get(a, !0) !== this.tabs.length - 1 && $(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(this.tabs[parseInt(this.get(a, !0)) + 1].id)).length > 0 ? $(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(this.tabs[parseInt(this.get(a, !0)) + 1].id)).before(i) : $(this.box).find("#tabs_" + this.name + "_right").before(i)
                    } else f.html(g), e.hidden ? f.css("display", "none") : f.css("display", ""), f.css(e.disabled ? {
                        opacity: "0.2",
                        "-moz-opacity": "0.2",
                        "-webkit-opacity": "0.2",
                        "-o-opacity": "0.2",
                        filter: "alpha(opacity=20)"
                    } : {
                        opacity: "1",
                        "-moz-opacity": "1",
                        "-webkit-opacity": "1",
                        "-o-opacity": "1",
                        filter: "alpha(opacity=100)"
                    })
                }
                return $("#tabs_" + this.name + "_right").html(this.right), this.trigger($.extend(c, {
                    phase: "after"
                })), (new Date).getTime() - b
            }
        },
        render: function(a) {
            var b = (new Date).getTime(),
                c = this.trigger({
                    phase: "before",
                    type: "render",
                    target: this.name,
                    box: a
                });
            if (c.isCancelled !== !0) {
                if ("undefined" != typeof a && null !== a && ($(this.box).find("> table #tabs_" + this.name + "_right").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-tabs").html(""), this.box = a), !this.box) return !1;
                var d = '<table cellspacing="0" cellpadding="1" width="100%">    <tr><td width="100%" id="tabs_' + this.name + '_right" align="right">' + this.right + "</td></tr></table>";
                return $(this.box).attr("name", this.name).addClass("w2ui-reset w2ui-tabs").html(d), $(this.box).length > 0 && ($(this.box)[0].style.cssText += this.style), this.trigger($.extend(c, {
                    phase: "after"
                })), this.refresh(), (new Date).getTime() - b
            }
        },
        resize: function() {
            var a = (new Date).getTime(),
                b = this.trigger({
                    phase: "before",
                    type: "resize",
                    target: this.name
                });
            return b.isCancelled !== !0 ? (this.trigger($.extend(b, {
                phase: "after"
            })), (new Date).getTime() - a) : void 0
        },
        destroy: function() {
            var a = this.trigger({
                phase: "before",
                type: "destroy",
                target: this.name
            });
            a.isCancelled !== !0 && ($(this.box).find("> table #tabs_" + this.name + "_right").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-tabs").html(""), delete w2ui[this.name], this.trigger($.extend(a, {
                phase: "after"
            })))
        },
        click: function(a, b) {
            var c = this.get(a);
            if (null === c || c.disabled) return !1;
            var d = this.trigger({
                phase: "before",
                type: "click",
                target: a,
                tab: c,
                object: c,
                originalEvent: b
            });
            if (d.isCancelled !== !0) {
                if ($(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(this.active) + " .w2ui-tab").removeClass("active"), this.active = c.id, c.route) {
                    var e = String("/" + c.route).replace(/\/{2,}/g, "/"),
                        f = w2utils.parseRoute(e);
                    if (f.keys.length > 0)
                        for (var g = 0; g < f.keys.length; g++) null != this.routeData[f.keys[g].name] && (e = e.replace(new RegExp(":" + f.keys[g].name, "g"), this.routeData[f.keys[g].name]));
                    setTimeout(function() {
                        window.location.hash = e
                    }, 1)
                }
                this.trigger($.extend(d, {
                    phase: "after"
                })), this.refresh(a)
            }
        },
        animateClose: function(a, b) {
            var c = this.get(a);
            if (null === c || c.disabled) return !1;
            var d = this.trigger({
                phase: "before",
                type: "close",
                target: a,
                object: this.get(a),
                originalEvent: b
            });
            if (d.isCancelled !== !0) {
                var e = this;
                $(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(c.id)).css({
                    "-webkit-transition": ".2s",
                    "-moz-transition": "2s",
                    "-ms-transition": ".2s",
                    "-o-transition": ".2s",
                    opacity: "0"
                }), setTimeout(function() {
                    var a = $(e.box).find("#tabs_" + e.name + "_tab_" + w2utils.escapeId(c.id)).width();
                    $(e.box).find("#tabs_" + e.name + "_tab_" + w2utils.escapeId(c.id)).html('<div style="width: ' + a + 'px; -webkit-transition: .2s; -moz-transition: .2s; -ms-transition: .2s; -o-transition: .2s"></div>'), setTimeout(function() {
                        $(e.box).find("#tabs_" + e.name + "_tab_" + w2utils.escapeId(c.id)).find(":first-child").css({
                            width: "0px"
                        })
                    }, 50)
                }, 200), setTimeout(function() {
                    e.remove(a)
                }, 450), this.trigger($.extend(d, {
                    phase: "after"
                })), this.refresh()
            }
        },
        animateInsert: function(a, b) {
            if (null !== this.get(a) && $.isPlainObject(b) && w2utils.checkUniqueId(b.id, this.tabs, "tabs", this.name)) {
                var c = $(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(b.id));
                if (0 === c.length) {
                    "undefined" != typeof b.caption && (b.text = b.caption);
                    var d = '<div id="_tmp_tabs" class="w2ui-reset w2ui-tabs" style="position: absolute; top: -1000px;"><table cellspacing="0" cellpadding="1" width="100%"><tr><td id="_tmp_simple_tab" style="" valign="middle">' + (b.closable ? '<div class="w2ui-tab-close"></div>' : "") + '    <div class="w2ui-tab ' + (this.active === b.id ? "active" : "") + '">' + b.text + "</div></td></tr></table></div>";
                    $("body").append(d);
                    var e = '<div style="width: 1px; -webkit-transition: 0.2s; -moz-transition: 0.2s; -ms-transition: 0.2s; -o-transition: 0.2s;">&nbsp;</div>',
                        f = "";
                    b.hidden && (f += "display: none;"), b.disabled && (f += "opacity: 0.2; -moz-opacity: 0.2; -webkit-opacity: 0.2; -o-opacity: 0.2; filter:alpha(opacity=20);");
                    var g = '<td id="tabs_' + this.name + "_tab_" + b.id + '" style="' + f + '" valign="middle">' + e + "</td>";
                    this.get(a, !0) !== this.tabs.length && $(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(this.tabs[parseInt(this.get(a, !0))].id)).length > 0 ? $(this.box).find("#tabs_" + this.name + "_tab_" + w2utils.escapeId(this.tabs[parseInt(this.get(a, !0))].id)).before(g) : $(this.box).find("#tabs_" + this.name + "_right").before(g);
                    var h = this;
                    setTimeout(function() {
                        var a = $("#_tmp_simple_tab").width();
                        $("#_tmp_tabs").remove(), $("#tabs_" + h.name + "_tab_" + w2utils.escapeId(b.id) + " > div").css("width", a + "px")
                    }, 1), setTimeout(function() {
                        h.insert(a, b)
                    }, 200)
                }
            }
        }
    }, $.extend(a.prototype, w2utils.event), w2obj.tabs = a
}(),
function() {
    var a = function(a) {
        this.box = null, this.name = null, this.routeData = {}, this.items = [], this.right = "", this.onClick = null, this.onRender = null, this.onRefresh = null, this.onResize = null, this.onDestroy = null, $.extend(!0, this, w2obj.toolbar, a)
    };
    $.fn.w2toolbar = function(b) {
        if ("object" == typeof b || !b) {
            if (!w2utils.checkName(b, "w2toolbar")) return;
            var c = b.items || [],
                d = new a(b);
            $.extend(d, {
                items: [],
                handlers: []
            });
            for (var e = 0; e < c.length; e++) d.items[e] = $.extend({}, a.prototype.item, c[e]);
            return 0 !== $(this).length && d.render($(this)[0]), w2ui[d.name] = d, d
        }
        if (w2ui[$(this).attr("name")]) {
            var f = w2ui[$(this).attr("name")];
            return f[b].apply(f, Array.prototype.slice.call(arguments, 1)), this
        }
        console.log("ERROR: Method " + b + " does not exist on jQuery.w2toolbar")
    }, a.prototype = {
        item: {
            id: null,
            type: "button",
            text: "",
            route: null,
            html: "",
            img: null,
            icon: null,
            count: null,
            hidden: !1,
            disabled: !1,
            checked: !1,
            arrow: !0,
            hint: "",
            group: null,
            items: null,
            overlay: {},
            onClick: null
        },
        add: function(a) {
            this.insert(null, a)
        },
        insert: function(b, c) {
            $.isArray(c) || (c = [c]);
            for (var d = 0; d < c.length; d++) {
                if ("undefined" == typeof c[d].type) return void console.log('ERROR: The parameter "type" is required but not supplied in w2toolbar.add() method.');
                if (-1 === $.inArray(String(c[d].type), ["button", "check", "radio", "drop", "menu", "break", "html", "spacer"])) return void console.log('ERROR: The parameter "type" should be one of the following [button, check, radio, drop, menu, break, html, spacer] in w2toolbar.add() method.');
                if ("undefined" == typeof c[d].id) return void console.log('ERROR: The parameter "id" is required but not supplied in w2toolbar.add() method.');
                if (!w2utils.checkUniqueId(c[d].id, this.items, "toolbar items", this.name)) return;
                var e = $.extend({}, a.prototype.item, c[d]);
                if (null == b) this.items.push(e);
                else {
                    var f = this.get(b, !0);
                    this.items = this.items.slice(0, f).concat([e], this.items.slice(f))
                }
                this.refresh(e.id)
            }
        },
        remove: function() {
            for (var a = 0, b = 0; b < arguments.length; b++) {
                var c = this.get(arguments[b]);
                if (c) {
                    a++, $(this.box).find("#tb_" + this.name + "_item_" + w2utils.escapeId(c.id)).remove();
                    var d = this.get(c.id, !0);
                    d && this.items.splice(d, 1)
                }
            }
            return a
        },
        set: function(a, b) {
            var c = this.get(a, !0);
            return null === c ? !1 : ($.extend(this.items[c], b), this.refresh(a), !0)
        },
        get: function(a, b) {
            if (0 === arguments.length) {
                for (var c = [], d = 0; d < this.items.length; d++) null !== this.items[d].id && c.push(this.items[d].id);
                return c
            }
            for (var e = 0; e < this.items.length; e++)
                if (this.items[e].id === a) return b === !0 ? e : this.items[e];
            return null
        },
        show: function() {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && (b++, e.hidden = !1, c.push(e.id))
            }
            return setTimeout(function() {
                for (var b in c) a.refresh(c[b])
            }, 15), b
        },
        hide: function() {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && (b++, e.hidden = !0, c.push(e.id))
            }
            return setTimeout(function() {
                for (var b in c) a.refresh(c[b])
            }, 15), b
        },
        enable: function() {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && (b++, e.disabled = !1, c.push(e.id))
            }
            return setTimeout(function() {
                for (var b in c) a.refresh(c[b])
            }, 15), b
        },
        disable: function() {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && (b++, e.disabled = !0, c.push(e.id))
            }
            return setTimeout(function() {
                for (var b in c) a.refresh(c[b])
            }, 15), b
        },
        check: function() {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && (b++, e.checked = !0, c.push(e.id))
            }
            return setTimeout(function() {
                for (var b in c) a.refresh(c[b])
            }, 15), b
        },
        uncheck: function() {
            for (var a = this, b = 0, c = [], d = 0; d < arguments.length; d++) {
                var e = this.get(arguments[d]);
                e && (b++, e.checked = !1, c.push(e.id))
            }
            return setTimeout(function() {
                for (var b in c) a.refresh(c[b])
            }, 15), b
        },
        render: function(a) {
            var b = (new Date).getTime(),
                c = this.trigger({
                    phase: "before",
                    type: "render",
                    target: this.name,
                    box: a
                });
            if (c.isCancelled !== !0 && (null != a && ($(this.box).find("> table #tb_" + this.name + "_right").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-toolbar").html(""), this.box = a), this.box)) {
                for (var d = '<table cellspacing="0" cellpadding="0" width="100%"><tr>', e = 0; e < this.items.length; e++) {
                    var f = this.items[e];
                    null == f.id && (f.id = "item_" + e), null !== f && (d += "spacer" === f.type ? '<td width="100%" id="tb_' + this.name + "_item_" + f.id + '" align="right"></td>' : '<td id="tb_' + this.name + "_item_" + f.id + '" style="' + (f.hidden ? "display: none" : "") + '"     class="' + (f.disabled ? "disabled" : "") + '" valign="middle">' + this.getItemHTML(f) + "</td>")
                }
                return d += '<td width="100%" id="tb_' + this.name + '_right" align="right">' + this.right + "</td>", d += "</tr></table>", $(this.box).attr("name", this.name).addClass("w2ui-reset w2ui-toolbar").html(d), $(this.box).length > 0 && ($(this.box)[0].style.cssText += this.style), this.trigger($.extend(c, {
                    phase: "after"
                })), (new Date).getTime() - b
            }
        },
        refresh: function(a) {
            var b = (new Date).getTime(),
                c = this.trigger({
                    phase: "before",
                    type: "refresh",
                    target: "undefined" != typeof a ? a : this.name,
                    item: this.get(a)
                });
            if (c.isCancelled !== !0) {
                if (null == a)
                    for (var d = 0; d < this.items.length; d++) {
                        var e = this.items[d];
                        null == e.id && (e.id = "item_" + d), this.refresh(e.id)
                    }
                var f = this.get(a);
                if (null === f) return !1;
                var g = $(this.box).find("#tb_" + this.name + "_item_" + w2utils.escapeId(f.id)),
                    h = this.getItemHTML(f);
                return 0 === g.length ? (h = "spacer" === f.type ? '<td width="100%" id="tb_' + this.name + "_item_" + f.id + '" align="right"></td>' : '<td id="tb_' + this.name + "_item_" + f.id + '" style="' + (f.hidden ? "display: none" : "") + '"     class="' + (f.disabled ? "disabled" : "") + '" valign="middle">' + h + "</td>", this.get(a, !0) === this.items.length - 1 ? $(this.box).find("#tb_" + this.name + "_right").before(h) : $(this.box).find("#tb_" + this.name + "_item_" + w2utils.escapeId(this.items[parseInt(this.get(a, !0)) + 1].id)).before(h)) : (g.html(h), f.hidden ? g.css("display", "none") : g.css("display", ""), f.disabled ? g.addClass("disabled") : g.removeClass("disabled")), this.trigger($.extend(c, {
                    phase: "after"
                })), (new Date).getTime() - b
            }
        },
        resize: function() {
            var a = (new Date).getTime(),
                b = this.trigger({
                    phase: "before",
                    type: "resize",
                    target: this.name
                });
            return b.isCancelled !== !0 ? (this.trigger($.extend(b, {
                phase: "after"
            })), (new Date).getTime() - a) : void 0
        },
        destroy: function() {
            var a = this.trigger({
                phase: "before",
                type: "destroy",
                target: this.name
            });
            a.isCancelled !== !0 && ($(this.box).find("> table #tb_" + this.name + "_right").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-toolbar").html(""), $(this.box).html(""), delete w2ui[this.name], this.trigger($.extend(a, {
                phase: "after"
            })))
        },
        getItemHTML: function(a) {
            var b = "";
            switch ("undefined" != typeof a.caption && (a.text = a.caption), "undefined" == typeof a.hint && (a.hint = ""), "undefined" == typeof a.text && (a.text = ""), a.type) {
                case "menu":
                case "button":
                case "check":
                case "radio":
                case "drop":
                    var c = "<td>&nbsp;</td>";
                    a.img && (c = '<td><div class="w2ui-tb-image w2ui-icon ' + a.img + '"></div></td>'), a.icon && (c = '<td><div class="w2ui-tb-image"><span class="' + a.icon + '"></span></div></td>'), b += '<table cellpadding="0" cellspacing="0" title="' + a.hint + '" class="w2ui-button ' + (a.checked ? "checked" : "") + '"        onclick     = "var el=w2ui[\'' + this.name + "']; if (el) el.click('" + a.id + '\', event);"        onmouseover = "' + (a.disabled ? "" : "$(this).addClass('over');") + '"       onmouseout  = "' + (a.disabled ? "" : "$(this).removeClass('over').removeClass('down');") + '"       onmousedown = "' + (a.disabled ? "" : "$(this).addClass('down');") + '"       onmouseup   = "' + (a.disabled ? "" : "$(this).removeClass('down');") + '"><tr><td>  <table cellpadding="1" cellspacing="0">  <tr>' + c + ("" !== a.text ? '<td class="w2ui-tb-caption" nowrap>' + a.text + "</td>" : "") + (null != a.count ? '<td class="w2ui-tb-count" nowrap><span>' + a.count + "</span></td>" : "") + ("drop" !== a.type && "menu" !== a.type || a.arrow === !1 ? "" : '<td class="w2ui-tb-down" nowrap><div></div></td>') + "  </tr></table></td></tr></table>";
                    break;
                case "break":
                    b += '<table cellpadding="0" cellspacing="0"><tr>    <td><div class="w2ui-break">&nbsp;</div></td></tr></table>';
                    break;
                case "html":
                    b += '<table cellpadding="0" cellspacing="0"><tr>    <td nowrap>' + a.html + "</td></tr></table>"
            }
            var d = "";
            return "function" == typeof a.onRender && (d = a.onRender.call(this, a.id, b)), "function" == typeof this.onRender && (d = this.onRender(a.id, b)), "" !== d && null != d && (b = d), b
        },
        menuClick: function(a) {
            var b = this;
            if (a.item && !a.item.disabled) {
                var c = this.trigger({
                    phase: "before",
                    type: "click",
                    target: a.item.id + ":" + a.subItem.id,
                    item: a.item,
                    subItem: a.subItem,
                    originalEvent: a.originalEvent
                });
                if (c.isCancelled === !0) return;
                var d = a.subItem;
                if (d.route) {
                    var e = String("/" + d.route).replace(/\/{2,}/g, "/"),
                        f = w2utils.parseRoute(e);
                    if (f.keys.length > 0)
                        for (var g = 0; g < f.keys.length; g++) null != b.routeData[f.keys[g].name] && (e = e.replace(new RegExp(":" + f.keys[g].name, "g"), this.routeData[f.keys[g].name]));
                    setTimeout(function() {
                        window.location.hash = e
                    }, 1)
                }
                this.trigger($.extend(c, {
                    phase: "after"
                }))
            }
        },
        click: function(a, b) {
            var c = this,
                d = this.get(a);
            if (d && !d.disabled) {
                var e = this.trigger({
                    phase: "before",
                    type: "click",
                    target: "undefined" != typeof a ? a : this.name,
                    item: d,
                    object: d,
                    originalEvent: b
                });
                if (e.isCancelled === !0) return;
                var f = $("#tb_" + this.name + "_item_" + w2utils.escapeId(d.id) + " table.w2ui-button");
                if (f.removeClass("down"), "radio" === d.type) {
                    for (var g = 0; g < this.items.length; g++) {
                        var h = this.items[g];
                        null != h && h.id !== d.id && "radio" === h.type && h.group === d.group && h.checked && (h.checked = !1, this.refresh(h.id))
                    }
                    d.checked = !0, f.addClass("checked")
                }
                if (("drop" === d.type || "menu" === d.type) && (d.checked ? d.checked = !1 : setTimeout(function() {
                        function a() {
                            $(document).off("click", a), d.checked = !1, f.removeClass("checked")
                        }
                        var b = $("#tb_" + c.name + "_item_" + w2utils.escapeId(d.id));
                        $.isPlainObject(d.overlay) || (d.overlay = {});
                        var e = (b.width() - 50) / 2;
                        e > 19 && (e = 19), "drop" === d.type && b.w2overlay(d.html, $.extend({
                            left: e,
                            top: 3
                        }, d.overlay)), "menu" === d.type && b.w2menu(d.items, $.extend({
                            left: e,
                            top: 3
                        }, d.overlay, {
                            select: function(b) {
                                c.menuClick({
                                    item: d,
                                    subItem: b.item,
                                    originalEvent: b.originalEvent
                                }), a()
                            }
                        })), $(document).on("click", a)
                    }, 1)), ("check" === d.type || "drop" === d.type || "menu" === d.type) && (d.checked = !d.checked, d.checked ? f.addClass("checked") : f.removeClass("checked")), d.route) {
                    var i = String("/" + d.route).replace(/\/{2,}/g, "/"),
                        j = w2utils.parseRoute(i);
                    if (j.keys.length > 0)
                        for (var k = 0; k < j.keys.length; k++) i = i.replace(new RegExp(":" + j.keys[k].name, "g"), this.routeData[j.keys[k].name]);
                    setTimeout(function() {
                        window.location.hash = i
                    }, 1)
                }
                this.trigger($.extend(e, {
                    phase: "after"
                }))
            }
        }
    }, $.extend(a.prototype, w2utils.event), w2obj.toolbar = a
}(),
function() {
    var a = function(a) {
        this.name = null, this.box = null, this.sidebar = null, this.parent = null, this.nodes = [], this.menu = [], this.routeData = {}, this.selected = null, this.img = null, this.icon = null, this.style = "", this.topHTML = "", this.bottomHTML = "", this.keyboard = !0, this.onClick = null, this.onDblClick = null, this.onContextMenu = null, this.onMenuClick = null, this.onExpand = null, this.onCollapse = null, this.onKeydown = null, this.onRender = null, this.onRefresh = null, this.onResize = null, this.onDestroy = null, $.extend(!0, this, w2obj.sidebar, a)
    };
    $.fn.w2sidebar = function(b) {
        if ("object" == typeof b || !b) {
            if (!w2utils.checkName(b, "w2sidebar")) return;
            var c = b.nodes,
                d = new a(b);
            return $.extend(d, {
                handlers: [],
                nodes: []
            }), "undefined" != typeof c && d.add(d, c), 0 !== $(this).length && d.render($(this)[0]), d.sidebar = d, w2ui[d.name] = d, d
        }
        if (w2ui[$(this).attr("name")]) {
            var e = w2ui[$(this).attr("name")];
            return e[b].apply(e, Array.prototype.slice.call(arguments, 1)), this
        }
        console.log("ERROR: Method " + b + " does not exist on jQuery.w2sidebar")
    }, a.prototype = {
        node: {
            id: null,
            text: "",
            count: null,
            img: null,
            icon: null,
            nodes: [],
            style: "",
            route: null,
            selected: !1,
            expanded: !1,
            hidden: !1,
            disabled: !1,
            group: !1,
            groupShowHide: !0,
            plus: !1,
            onClick: null,
            onDblClick: null,
            onContextMenu: null,
            onExpand: null,
            onCollapse: null,
            parent: null,
            sidebar: null
        },
        add: function(a, b) {
            return 1 == arguments.length && (b = arguments[0], a = this), "string" == typeof a && (a = this.get(a)), this.insert(a, null, b)
        },
        insert: function(b, c, d) {
            var e, f, g, h, i;
            if (2 == arguments.length) {
                if (d = arguments[1], c = arguments[0], f = this.get(c), null === f) return $.isArray(d) || (d = [d]), e = null != d[0].caption ? d[0].caption : d[0].text, console.log('ERROR: Cannot insert node "' + e + '" because cannot find node "' + c + '" to insert before.'), null;
                b = this.get(c).parent
            }
            "string" == typeof b && (b = this.get(b)), $.isArray(d) || (d = [d]);
            for (var j in d)
                if (h = d[j], null != typeof h.id)
                    if (null === this.get(this, h.id)) {
                        if (g = $.extend({}, a.prototype.node, h), g.sidebar = this, g.parent = b, i = g.nodes || [], g.nodes = [], null === c) b.nodes.push(g);
                        else {
                            if (f = this.get(b, c, !0), null === f) return e = null != h.caption ? h.caption : h.text, console.log('ERROR: Cannot insert node "' + e + '" because cannot find node "' + c + '" to insert before.'), null;
                            b.nodes.splice(f, 0, g)
                        }
                        i.length > 0 && this.insert(g, null, i)
                    } else e = null != h.caption ? h.caption : h.text, console.log("ERROR: Cannot insert node with id=" + h.id + " (text: " + e + ") because another node with the same id already exists.");
            else e = null != h.caption ? h.caption : h.text, console.log('ERROR: Cannot insert node "' + e + '" because it has no id.');
            return this.refresh(b.id), g
        },
        remove: function() {
            for (var a, b = 0, c = 0; c < arguments.length; c++)
                if (a = this.get(arguments[c]), null !== a) {
                    null !== this.selected && this.selected === a.id && (this.selected = null);
                    var d = this.get(a.parent, arguments[c], !0);
                    null !== d && (a.parent.nodes[d].selected && a.sidebar.unselect(a.id), a.parent.nodes.splice(d, 1), b++)
                }
            return b > 0 && 1 == arguments.length ? this.refresh(a.parent.id) : this.refresh(), b
        },
        set: function(a, b, c) {
            if (2 == arguments.length && (c = b, b = a, a = this), "string" == typeof a && (a = this.get(a)), null == a.nodes) return null;
            for (var d = 0; d < a.nodes.length; d++) {
                if (a.nodes[d].id === b) {
                    var e = c.nodes;
                    return $.extend(a.nodes[d], c, {
                        nodes: []
                    }), null != e && this.add(a.nodes[d], e), this.refresh(b), !0
                }
                var f = this.set(a.nodes[d], b, c);
                if (f) return !0
            }
            return !1
        },
        get: function(a, b, c) {
            if (0 === arguments.length) {
                for (var d = [], e = this.find({}), f = 0; f < e.length; f++) null != e[f].id && d.push(e[f].id);
                return d
            }
            if ((1 == arguments.length || 2 == arguments.length && b === !0) && (c = b, b = a, a = this), "string" == typeof a && (a = this.get(a)), null == a.nodes) return null;
            for (var g = 0; g < a.nodes.length; g++) {
                if (a.nodes[g].id == b) return c === !0 ? g : a.nodes[g];
                var h = this.get(a.nodes[g], b, c);
                if (h || 0 === h) return h
            }
            return null
        },
        find: function(a, b, c) {
            if (1 == arguments.length && (b = a, a = this), c || (c = []), "string" == typeof a && (a = this.get(a)), null == a.nodes) return c;
            for (var d = 0; d < a.nodes.length; d++) {
                var e = !0;
                for (var f in b) a.nodes[d][f] != b[f] && (e = !1);
                e && c.push(a.nodes[d]), a.nodes[d].nodes.length > 0 && (c = this.find(a.nodes[d], b, c))
            }
            return c
        },
        hide: function() {
            for (var a = 0, b = 0; b < arguments.length; b++) {
                var c = this.get(arguments[b]);
                null !== c && (c.hidden = !0, a++)
            }
            return 1 == arguments.length ? this.refresh(arguments[0]) : this.refresh(), a
        },
        show: function() {
            for (var a = 0, b = 0; b < arguments.length; b++) {
                var c = this.get(arguments[b]);
                null !== c && (c.hidden = !1, a++)
            }
            return 1 == arguments.length ? this.refresh(arguments[0]) : this.refresh(), a
        },
        disable: function() {
            for (var a = 0, b = 0; b < arguments.length; b++) {
                var c = this.get(arguments[b]);
                null !== c && (c.disabled = !0, c.selected && this.unselect(c.id), a++)
            }
            return 1 == arguments.length ? this.refresh(arguments[0]) : this.refresh(), a
        },
        enable: function() {
            for (var a = 0, b = 0; b < arguments.length; b++) {
                var c = this.get(arguments[b]);
                null !== c && (c.disabled = !1, a++)
            }
            return 1 == arguments.length ? this.refresh(arguments[0]) : this.refresh(), a
        },
        select: function(a) {
            var b = this.get(a);
            return b ? this.selected == a && b.selected ? !1 : (this.unselect(this.selected), $(this.box).find("#node_" + w2utils.escapeId(a)).addClass("w2ui-selected").find(".w2ui-icon").addClass("w2ui-icon-selected"), b.selected = !0, this.selected = a, !0) : !1
        },
        unselect: function(a) {
            var b = this.get(a);
            return b ? (b.selected = !1, $(this.box).find("#node_" + w2utils.escapeId(a)).removeClass("w2ui-selected").find(".w2ui-icon").removeClass("w2ui-icon-selected"), this.selected == a && (this.selected = null), !0) : !1
        },
        toggle: function(a) {
            var b = this.get(a);
            return null === b ? !1 : b.plus ? (this.set(a, {
                plus: !1
            }), this.expand(a), void this.refresh(a)) : 0 === b.nodes.length ? !1 : this.get(a).expanded ? this.collapse(a) : this.expand(a)
        },
        collapse: function(a) {
            var b = this,
                c = this.get(a),
                d = this.trigger({
                    phase: "before",
                    type: "collapse",
                    target: a,
                    object: c
                });
            return d.isCancelled !== !0 ? ($(this.box).find("#node_" + w2utils.escapeId(a) + "_sub").slideUp(200), $(this.box).find("#node_" + w2utils.escapeId(a) + " .w2ui-node-dots:first-child").html('<div class="w2ui-expand">+</div>'), c.expanded = !1, this.trigger($.extend(d, {
                phase: "after"
            })), setTimeout(function() {
                b.refresh(a)
            }, 200), !0) : void 0
        },
        collapseAll: function(a) {
            if ("undefined" == typeof a && (a = this), "string" == typeof a && (a = this.get(a)), null == a.nodes) return !1;
            for (var b = 0; b < a.nodes.length; b++) a.nodes[b].expanded === !0 && (a.nodes[b].expanded = !1), a.nodes[b].nodes && a.nodes[b].nodes.length > 0 && this.collapseAll(a.nodes[b]);
            return this.refresh(a.id), !0
        },
        expand: function(a) {
            var b = this,
                c = this.get(a),
                d = this.trigger({
                    phase: "before",
                    type: "expand",
                    target: a,
                    object: c
                });
            return d.isCancelled !== !0 ? ($(this.box).find("#node_" + w2utils.escapeId(a) + "_sub").slideDown(200), $(this.box).find("#node_" + w2utils.escapeId(a) + " .w2ui-node-dots:first-child").html('<div class="w2ui-expand">-</div>'), c.expanded = !0, this.trigger($.extend(d, {
                phase: "after"
            })), setTimeout(function() {
                b.refresh(a)
            }, 200), !0) : void 0
        },
        expandAll: function(a) {
            if ("undefined" == typeof a && (a = this), "string" == typeof a && (a = this.get(a)), null == a.nodes) return !1;
            for (var b = 0; b < a.nodes.length; b++) a.nodes[b].expanded === !1 && (a.nodes[b].expanded = !0), a.nodes[b].nodes && a.nodes[b].nodes.length > 0 && this.collapseAll(a.nodes[b]);
            this.refresh(a.id)
        },
        expandParents: function(a) {
            var b = this.get(a);
            return null === b ? !1 : (b.parent && (b.parent.expanded = !0, this.expandParents(b.parent.id)), this.refresh(a), !0)
        },
        click: function(a, b) {
            var c = this,
                d = this.get(a);
            if (null !== d && !d.disabled && !d.group) {
                $(c.box).find(".w2ui-node.w2ui-selected").each(function(a, b) {
                    var d = $(b).attr("id").replace("node_", ""),
                        e = c.get(d);
                    null != e && (e.selected = !1), $(b).removeClass("w2ui-selected").find(".w2ui-icon").removeClass("w2ui-icon-selected")
                });
                var e = $(c.box).find("#node_" + w2utils.escapeId(a)),
                    f = $(c.box).find("#node_" + w2utils.escapeId(c.selected));
                e.addClass("w2ui-selected").find(".w2ui-icon").addClass("w2ui-icon-selected"), setTimeout(function() {
                    var g = c.trigger({
                        phase: "before",
                        type: "click",
                        target: a,
                        originalEvent: b,
                        node: d,
                        object: d
                    });
                    if (g.isCancelled === !0) return e.removeClass("w2ui-selected").find(".w2ui-icon").removeClass("w2ui-icon-selected"), void f.addClass("w2ui-selected").find(".w2ui-icon").addClass("w2ui-icon-selected");
                    if (null !== f && (f.selected = !1), c.get(a).selected = !0, c.selected = a, d.route) {
                        var h = String("/" + d.route).replace(/\/{2,}/g, "/"),
                            i = w2utils.parseRoute(h);
                        if (i.keys.length > 0)
                            for (var j = 0; j < i.keys.length; j++) null != c.routeData[i.keys[j].name] && (h = h.replace(new RegExp(":" + i.keys[j].name, "g"), c.routeData[i.keys[j].name]));
                        setTimeout(function() {
                            window.location.hash = h
                        }, 1)
                    }
                    c.trigger($.extend(g, {
                        phase: "after"
                    }))
                }, 1)
            }
        },
        keydown: function(a) {
            function b(a, b) {
                null === a || a.hidden || a.disabled || a.group || (g.click(a.id, b), setTimeout(function() {
                    g.scrollIntoView()
                }, 50))
            }

            function c(a, b) {
                for (a = b(a); null !== a && (a.hidden || a.disabled) && !a.group;) a = b(a);
                return a
            }

            function d(a, b) {
                if (null === a) return null;
                var c = a.parent,
                    e = g.get(a.id, !0),
                    f = null;
                if (a.expanded && a.nodes.length > 0 && b !== !0) {
                    var h = a.nodes[0];
                    f = h.hidden || h.disabled || h.group ? d(h) : h
                } else f = c && e + 1 < c.nodes.length ? c.nodes[e + 1] : d(c, !0);
                return null !== f && (f.hidden || f.disabled || f.group) && (f = d(f)), f
            }

            function e(a) {
                if (null === a) return null;
                var b = a.parent,
                    c = g.get(a.id, !0),
                    d = c > 0 ? f(b.nodes[c - 1]) : b;
                return null !== d && (d.hidden || d.disabled || d.group) && (d = e(d)), d
            }

            function f(a) {
                if (a.expanded && a.nodes.length > 0) {
                    var b = a.nodes[a.nodes.length - 1];
                    return b.hidden || b.disabled || b.group ? e(b) : f(b)
                }
                return a
            }
            var g = this,
                h = g.get(g.selected);
            if (h && g.keyboard === !0) {
                var i = g.trigger({
                    phase: "before",
                    type: "keydown",
                    target: g.name,
                    originalEvent: a
                });
                i.isCancelled !== !0 && ((13 == a.keyCode || 32 == a.keyCode) && h.nodes.length > 0 && g.toggle(g.selected), 37 == a.keyCode && (h.nodes.length > 0 && h.expanded ? g.collapse(g.selected) : (b(h.parent), h.parent.group || g.collapse(h.parent.id))), 39 == a.keyCode && (h.nodes.length > 0 || h.plus) && !h.expanded && g.expand(g.selected), 38 == a.keyCode && b(c(h, e)), 40 == a.keyCode && b(c(h, d)), -1 != $.inArray(a.keyCode, [13, 32, 37, 38, 39, 40]) && (a.preventDefault && a.preventDefault(), a.stopPropagation && a.stopPropagation()), g.trigger($.extend(i, {
                    phase: "after"
                })))
            }
        },
        scrollIntoView: function(a) {
            "undefined" == typeof a && (a = this.selected);
            var b = this.get(a);
            if (null !== b) {
                var c = $(this.box).find(".w2ui-sidebar-div"),
                    d = $(this.box).find("#node_" + w2utils.escapeId(a)),
                    e = d.offset().top - c.offset().top;
                e + d.height() > c.height() && c.animate({
                    scrollTop: c.scrollTop() + c.height() / 1.3
                }, 250, "linear"), 0 >= e && c.animate({
                    scrollTop: c.scrollTop() - c.height() / 1.3
                }, 250, "linear")
            }
        },
        dblClick: function(a, b) {
            var c = this.get(a),
                d = this.trigger({
                    phase: "before",
                    type: "dblClick",
                    target: a,
                    originalEvent: b,
                    object: c
                });
            d.isCancelled !== !0 && (this.toggle(a), this.trigger($.extend(d, {
                phase: "after"
            })))
        },
        contextMenu: function(a, b) {
            var c = this,
                d = c.get(a);
            a != c.selected && c.click(a), setTimeout(function() {
                var e = c.trigger({
                    phase: "before",
                    type: "contextMenu",
                    target: a,
                    originalEvent: b,
                    object: d
                });
                e.isCancelled !== !0 && (d.group || d.disabled || (c.menu.length > 0 && $(c.box).find("#node_" + w2utils.escapeId(a)).w2menu(c.menu, {
                    left: (b ? b.offsetX || b.pageX : 50) - 25,
                    onSelect: function(b) {
                        c.menuClick(a, parseInt(b.index), b.originalEvent)
                    }
                }), c.trigger($.extend(e, {
                    phase: "after"
                }))))
            }, 150)
        },
        menuClick: function(a, b, c) {
            var d = this,
                e = d.trigger({
                    phase: "before",
                    type: "menuClick",
                    target: a,
                    originalEvent: c,
                    menuIndex: b,
                    menuItem: d.menu[b]
                });
            e.isCancelled !== !0 && d.trigger($.extend(e, {
                phase: "after"
            }))
        },
        render: function(a) {
            var b = (new Date).getTime(),
                c = this.trigger({
                    phase: "before",
                    type: "render",
                    target: this.name,
                    box: a
                });
            return c.isCancelled !== !0 && ("undefined" != typeof a && null !== a && ($(this.box).find("> div > div.w2ui-sidebar-div").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-sidebar").html(""), this.box = a), this.box) ? ($(this.box).attr("name", this.name).addClass("w2ui-reset w2ui-sidebar").html('<div><div class="w2ui-sidebar-top"></div><div class="w2ui-sidebar-div"></div><div class="w2ui-sidebar-bottom"></div></div>'), $(this.box).find("> div").css({
                width: $(this.box).width() + "px",
                height: $(this.box).height() + "px"
            }), $(this.box).length > 0 && ($(this.box)[0].style.cssText += this.style), "" !== this.topHTML && ($(this.box).find(".w2ui-sidebar-top").html(this.topHTML), $(this.box).find(".w2ui-sidebar-div").css("top", $(this.box).find(".w2ui-sidebar-top").height() + "px")), "" !== this.bottomHTML && ($(this.box).find(".w2ui-sidebar-bottom").html(this.bottomHTML), $(this.box).find(".w2ui-sidebar-div").css("bottom", $(this.box).find(".w2ui-sidebar-bottom").height() + "px")), this.trigger($.extend(c, {
                phase: "after"
            })), this.refresh(), (new Date).getTime() - b) : void 0
        },
        refresh: function(a) {
            function b(a) {
                var b = "",
                    c = a.img;
                null === c && (c = this.img);
                var d = a.icon;
                null === d && (d = this.icon);
                for (var e = a.parent, f = 0; e && null !== e.parent;) e.group && f--, e = e.parent, f++;
                return "undefined" != typeof a.caption && (a.text = a.caption), a.group ? b = '<div class="w2ui-node-group"  id="node_' + a.id + '"        onclick="w2ui[\'' + h.name + "'].toggle('" + a.id + "')\"        onmouseout=\"$(this).find('span:nth-child(1)').css('color', 'transparent')\"         onmouseover=\"$(this).find('span:nth-child(1)').css('color', 'inherit')\">" + (a.groupShowHide ? "<span>" + w2utils.lang(!a.hidden && a.expanded ? "Hide" : "Show") + "</span>" : "<span></span>") + "    <span>" + a.text + '</span></div><div class="w2ui-node-sub" id="node_' + a.id + '_sub" style="' + a.style + ";" + (!a.hidden && a.expanded ? "" : "display: none;") + '"></div>' : (a.selected && !a.disabled && (h.selected = a.id), e = "", c && (e = '<div class="w2ui-node-image w2ui-icon ' + c + (a.selected && !a.disabled ? " w2ui-icon-selected" : "") + '"></div>'), d && (e = '<div class="w2ui-node-image"><span class="' + d + '"></span></div>'), b = '<div class="w2ui-node ' + (a.selected ? "w2ui-selected" : "") + " " + (a.disabled ? "w2ui-disabled" : "") + '" id="node_' + a.id + '" style="' + (a.hidden ? "display: none;" : "") + '"    ondblclick="w2ui[\'' + h.name + "'].dblClick('" + a.id + "', event);\"    oncontextmenu=\"w2ui['" + h.name + "'].contextMenu('" + a.id + "', event);         if (event.preventDefault) event.preventDefault();\"    onClick=\"w2ui['" + h.name + "'].click('" + a.id + '\', event); "><table cellpadding="0" cellspacing="0" style="margin-left:' + 18 * f + "px; padding-right:" + 18 * f + 'px"><tr><td class="w2ui-node-dots" nowrap onclick="w2ui[\'' + h.name + "'].toggle('" + a.id + '\');         if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;">    <div class="w2ui-expand">' + (a.nodes.length > 0 ? a.expanded ? "-" : "+" : a.plus ? "+" : "") + '</div></td><td class="w2ui-node-data" nowrap>' + e + (a.count || 0 === a.count ? '<div class="w2ui-node-count">' + a.count + "</div>" : "") + '<div class="w2ui-node-caption">' + a.text + '</div></td></tr></table></div><div class="w2ui-node-sub" id="node_' + a.id + '_sub" style="' + a.style + ";" + (!a.hidden && a.expanded ? "" : "display: none;") + '"></div>'), b
            }
            var c = (new Date).getTime(),
                d = this.trigger({
                    phase: "before",
                    type: "refresh",
                    target: "undefined" != typeof a ? a : this.name
                });
            if (d.isCancelled !== !0) {
                "" !== this.topHTML && ($(this.box).find(".w2ui-sidebar-top").html(this.topHTML), $(this.box).find(".w2ui-sidebar-div").css("top", $(this.box).find(".w2ui-sidebar-top").height() + "px")), "" !== this.bottomHTML && ($(this.box).find(".w2ui-sidebar-bottom").html(this.bottomHTML), $(this.box).find(".w2ui-sidebar-div").css("bottom", $(this.box).find(".w2ui-sidebar-bottom").height() + "px")), $(this.box).find("> div").css({
                    width: $(this.box).width() + "px",
                    height: $(this.box).height() + "px"
                });
                var e, f, g, h = this;
                if ("undefined" == typeof a) e = this, g = ".w2ui-sidebar-div";
                else {
                    if (e = this.get(a), null === e) return;
                    g = "#node_" + w2utils.escapeId(e.id) + "_sub"
                }
                var i;
                if (e !== this) {
                    var j = "#node_" + w2utils.escapeId(e.id);
                    i = b(e), $(this.box).find(j).before('<div id="sidebar_' + this.name + '_tmp"></div>'), $(this.box).find(j).remove(), $(this.box).find(g).remove(), $("#sidebar_" + this.name + "_tmp").before(i), $("#sidebar_" + this.name + "_tmp").remove()
                }
                $(this.box).find(g).html("");
                for (var k = 0; k < e.nodes.length; k++) f = e.nodes[k], i = b(f), $(this.box).find(g).append(i), 0 !== f.nodes.length && this.refresh(f.id);
                return this.trigger($.extend(d, {
                    phase: "after"
                })), (new Date).getTime() - c
            }
        },
        resize: function() {
            var a = (new Date).getTime(),
                b = this.trigger({
                    phase: "before",
                    type: "resize",
                    target: this.name
                });
            return b.isCancelled !== !0 ? ($(this.box).css("overflow", "hidden"), $(this.box).find("> div").css({
                width: $(this.box).width() + "px",
                height: $(this.box).height() + "px"
            }), this.trigger($.extend(b, {
                phase: "after"
            })), (new Date).getTime() - a) : void 0
        },
        destroy: function() {
            var a = this.trigger({
                phase: "before",
                type: "destroy",
                target: this.name
            });
            a.isCancelled !== !0 && ($(this.box).find("> div > div.w2ui-sidebar-div").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-sidebar").html(""), delete w2ui[this.name], this.trigger($.extend(a, {
                phase: "after"
            })))
        },
        lock: function() {
            var a = $(this.box).find("> div:first-child"),
                b = Array.prototype.slice.call(arguments, 0);
            b.unshift(a), w2utils.lock.apply(window, b)
        },
        unlock: function() {
            w2utils.unlock(this.box)
        }
    }, $.extend(a.prototype, w2utils.event), w2obj.sidebar = a
}(),
function(a) {
    var b = function(b) {
        this.el = null, this.helpers = {}, this.type = b.type || "text", this.options = a.extend(!0, {}, b), this.onSearch = b.onSearch || null, this.onRequest = b.onRequest || null, this.onLoad = b.onLoad || null, this.onError = b.onError || null, this.onClick = b.onClick || null, this.onAdd = b.onAdd || null, this.onNew = b.onNew || null, this.onRemove = b.onRemove || null, this.onMouseOver = b.onMouseOver || null, this.onMouseOut = b.onMouseOut || null, this.onIconClick = b.onIconClick || null, this.tmp = {}, delete this.options.type, delete this.options.onSearch, delete this.options.onRequest, delete this.options.onLoad, delete this.options.onError, delete this.options.onClick, delete this.options.onMouseOver, delete this.options.onMouseOut, delete this.options.onIconClick, a.extend(!0, this, w2obj.field)
    };
    a.fn.w2field = function(c, d) {
        if (0 != this.length) {
            if (0 == arguments.length) {
                var e = a(this).data("w2field");
                return e
            }
            return "string" == typeof c && "object" == typeof d && (c = a.extend(!0, {}, d, {
                type: c
            })), "string" == typeof c && "undefined" == typeof d && (c = {
                type: c
            }), c.type = String(c.type).toLowerCase(), this.each(function(d, e) {
                var f = a(e).data("w2field");
                if ("undefined" == typeof f) {
                    var f = new b(c);
                    return a.extend(f, {
                        handlers: []
                    }), e && (f.el = a(e)[0]), f.init(), a(e).data("w2field", f), f
                }
                if (f.clear(), "clear" != c.type) {
                    var f = new b(c);
                    return a.extend(f, {
                        handlers: []
                    }), e && (f.el = a(e)[0]), f.init(), a(e).data("w2field", f), f
                }
            })
        }
        var f = b.prototype;
        return f[c] ? f[c].apply(f, Array.prototype.slice.call(arguments, 1)) : void 0
    }, b.prototype = {
        custom: {},
        pallete: [
            ["000000", "444444", "666666", "999999", "CCCCCC", "EEEEEE", "F3F3F3", "FFFFFF"],
            ["FF011B", "FF9838", "FFFD59", "01FD55", "00FFFE", "0424F3", "9B24F4", "FF21F5"],
            ["F4CCCC", "FCE5CD", "FFF2CC", "D9EAD3", "D0E0E3", "CFE2F3", "D9D1E9", "EAD1DC"],
            ["EA9899", "F9CB9C", "FEE599", "B6D7A8", "A2C4C9", "9FC5E8", "B4A7D6", "D5A6BD"],
            ["E06666", "F6B26B", "FED966", "93C47D", "76A5AF", "6FA8DC", "8E7CC3", "C27BA0"],
            ["CC0814", "E69138", "F1C232", "6AA84F", "45818E", "3D85C6", "674EA7", "A54D79"],
            ["99050C", "B45F17", "BF901F", "37761D", "124F5C", "0A5394", "351C75", "741B47"],
            ["660205", "783F0B", "7F6011", "274E12", "0C343D", "063762", "20124D", "4C1030"]
        ],
        addType: function(a, b) {
            return a = String(a).toLowerCase(), this.custom[a] = b, !0
        },
        removeType: function(a) {
            return a = String(a).toLowerCase(), this.custom[a] ? (delete this.custom[a], !0) : !1
        },
        init: function() {
            var b, c = this,
                d = this.options;
            if ("function" == typeof this.custom[this.type]) return void this.custom[this.type].call(this, d);
            if (-1 == ["INPUT", "TEXTAREA"].indexOf(this.el.tagName)) return void console.log("ERROR: w2field could only be applied to INPUT or TEXTAREA.", this.el);
            switch (this.type) {
                case "text":
                case "int":
                case "float":
                case "money":
                case "currency":
                case "percent":
                case "alphanumeric":
                case "hex":
                    b = {
                        min: null,
                        max: null,
                        step: 1,
                        placeholder: "",
                        autoFormat: !0,
                        currencyPrefix: w2utils.settings.currencyPrefix,
                        currencySuffix: w2utils.settings.currencySuffix,
                        currencyPrecision: w2utils.settings.currencyPrecision,
                        decimalSymbol: w2utils.settings.decimalSymbol,
                        groupSymbol: w2utils.settings.groupSymbol,
                        arrows: !1,
                        keyboard: !0,
                        precision: null,
                        silent: !0,
                        prefix: "",
                        suffix: ""
                    }, this.options = a.extend(!0, {}, b, d), d = this.options, d.numberRE = new RegExp("[" + d.groupSymbol + "]", "g"), d.moneyRE = new RegExp("[" + d.currencyPrefix + d.currencySuffix + d.groupSymbol + "]", "g"), d.percentRE = new RegExp("[" + d.groupSymbol + "%]", "g"), -1 != ["text", "alphanumeric", "hex"].indexOf(this.type) && (d.arrows = !1, d.keyboard = !1), this.addPrefix(), this.addSuffix(), a(this.el).attr("placeholder") && "" == d.placeholder && (d.placeholder = a(this.el).attr("placeholder")), a(this.el).attr("placeholder", d.placeholder);
                    break;
                case "color":
                    b = {
                        prefix: "#",
                        suffix: '<div style="width: ' + (parseInt(a(this.el).css("font-size")) || 12) + 'px">&nbsp;</div>',
                        placeholder: "",
                        arrows: !1,
                        keyboard: !1
                    }, a.extend(d, b), this.addPrefix(), this.addSuffix(), a(this.el).attr("maxlength", 6), "" != a(this.el).val() && setTimeout(function() {
                        a(c.el).change()
                    }, 1), a(this.el).attr("placeholder") && "" == d.placeholder && (d.placeholder = a(this.el).attr("placeholder")), a(this.el).attr("placeholder", d.placeholder);
                    break;
                case "date":
                    b = {
                        format: w2utils.settings.date_format,
                        placeholder: "",
                        keyboard: !0,
                        silent: !0,
                        start: "",
                        end: "",
                        blocked: {},
                        colored: {}
                    }, this.options = a.extend(!0, {}, b, d), d = this.options, a(this.el).attr("placeholder") && "" == d.placeholder && (d.placeholder = a(this.el).attr("placeholder")), a(this.el).attr("placeholder", d.placeholder ? d.placeholder : d.format);
                    break;
                case "time":
                    b = {
                        format: w2utils.settings.time_format,
                        placeholder: "",
                        keyboard: !0,
                        silent: !0,
                        start: "",
                        end: ""
                    }, this.options = a.extend(!0, {}, b, d), d = this.options, a(this.el).attr("placeholder") && "" == d.placeholder && (d.placeholder = a(this.el).attr("placeholder")), a(this.el).attr("placeholder", d.placeholder ? d.placeholder : "h12" == d.format ? "hh:mi pm" : "hh:mi");
                    break;
                case "datetime":
                    break;
                case "list":
                case "combo":
                    if (b = {
                            items: [],
                            selected: {},
                            placeholder: "",
                            url: null,
                            postData: {},
                            minLength: 1,
                            cacheMax: 250,
                            maxDropHeight: 350,
                            match: "begins",
                            silent: !0,
                            icon: null,
                            iconStyle: "",
                            onSearch: null,
                            onRequest: null,
                            onLoad: null,
                            onError: null,
                            onIconClick: null,
                            renderDrop: null,
                            prefix: "",
                            suffix: "",
                            openOnFocus: !1,
                            markSearch: !1
                        }, d.items = this.normMenu(d.items), "list" == this.type && (b.openOnFocus = !0, b.suffix = '<div class="arrow-down" style="margin-top: ' + (parseInt(a(this.el).height()) - 6) / 2 + 'px;"></div>', a(this.el).addClass("w2ui-select"), !a.isPlainObject(d.selected)))
                        for (var e in d.items) {
                            var f = d.items[e];
                            if (f && f.id == d.selected) {
                                d.selected = a.extend(!0, {}, f);
                                break
                            }
                        }
                    d = a.extend({}, b, d, {
                        align: "both",
                        altRows: !0
                    }), this.options = d, a.isPlainObject(d.selected) || (d.selected = {}), a(this.el).data("selected", d.selected), d.url && this.request(0), "list" == this.type && this.addFocus(), this.addPrefix(), this.addSuffix(), setTimeout(function() {
                        c.refresh()
                    }, 10), a(this.el).attr("placeholder") && "" == d.placeholder && (d.placeholder = a(this.el).attr("placeholder")), a(this.el).attr("placeholder", d.placeholder).attr("autocomplete", "off"), "undefined" != typeof d.selected.text && a(this.el).val(d.selected.text);
                    break;
                case "enum":
                    b = {
                        items: [],
                        selected: [],
                        placeholder: "",
                        max: 0,
                        url: null,
                        postData: {},
                        minLength: 1,
                        cacheMax: 250,
                        maxWidth: 250,
                        maxHeight: 350,
                        maxDropHeight: 350,
                        match: "contains",
                        silent: !0,
                        openOnFocus: !1,
                        markSearch: !0,
                        renderDrop: null,
                        renderItem: null,
                        style: "",
                        onSearch: null,
                        onRequest: null,
                        onLoad: null,
                        onError: null,
                        onClick: null,
                        onAdd: null,
                        onNew: null,
                        onRemove: null,
                        onMouseOver: null,
                        onMouseOut: null
                    }, d = a.extend({}, b, d, {
                        align: "both",
                        suffix: "",
                        altRows: !0
                    }), d.items = this.normMenu(d.items), d.selected = this.normMenu(d.selected), this.options = d, a.isArray(d.selected) || (d.selected = []), a(this.el).data("selected", d.selected), d.url && this.request(0), this.addSuffix(), this.addMulti();
                    break;
                case "file":
                    b = {
                        selected: [],
                        placeholder: w2utils.lang("Attach files by dragging and dropping or Click to Select"),
                        max: 0,
                        maxSize: 0,
                        maxFileSize: 0,
                        maxWidth: 250,
                        maxHeight: 350,
                        maxDropHeight: 350,
                        silent: !0,
                        renderItem: null,
                        style: "",
                        onClick: null,
                        onAdd: null,
                        onRemove: null,
                        onMouseOver: null,
                        onMouseOut: null
                    }, d = a.extend({}, b, d, {
                        align: "both",
                        altRows: !0
                    }), this.options = d, a.isArray(d.selected) || (d.selected = []), a(this.el).data("selected", d.selected), a(this.el).attr("placeholder") && (d.placeholder = a(this.el).attr("placeholder")), this.addMulti()
            }
            this.tmp = {
                onChange: function(a) {
                    c.change.call(c, a)
                },
                onClick: function(a) {
                    c.click.call(c, a)
                },
                onFocus: function(a) {
                    c.focus.call(c, a)
                },
                onBlur: function(a) {
                    c.blur.call(c, a)
                },
                onKeydown: function(a) {
                    c.keyDown.call(c, a)
                },
                onKeyup: function(a) {
                    c.keyUp.call(c, a)
                },
                onKeypress: function(a) {
                    c.keyPress.call(c, a)
                }
            }, a(this.el).addClass("w2field").data("w2field", this).on("change", this.tmp.onChange).on("click", this.tmp.onClick).on("focus", this.tmp.onFocus).on("blur", this.tmp.onBlur).on("keydown", this.tmp.onKeydown).on("keyup", this.tmp.onKeyup).on("keypress", this.tmp.onKeypress).css({
                "box-sizing": "border-box",
                "-webkit-box-sizing": "border-box",
                "-moz-box-sizing": "border-box",
                "-ms-box-sizing": "border-box",
                "-o-box-sizing": "border-box"
            }), this.change(a.Event("change"))
        },
        clear: function() {
            var b = this.options; - 1 != ["money", "currency"].indexOf(this.type) && a(this.el).val(a(this.el).val().replace(b.moneyRE, "")), "percent" == this.type && a(this.el).val(a(this.el).val().replace(/%/g, "")), "color" == this.type && a(this.el).removeAttr("maxlength"), "list" == this.type && a(this.el).removeClass("w2ui-select"), -1 != ["date", "time"].indexOf(this.type) && a(this.el).attr("placeholder") == b.format && a(this.el).attr("placeholder", ""), this.type = "clear";
            var c = a(this.el).data("tmp");
            if (this.tmp) {
                "undefined" != typeof c && (c && c["old-padding-left"] && a(this.el).css("padding-left", c["old-padding-left"]), c && c["old-padding-right"] && a(this.el).css("padding-right", c["old-padding-right"])), a(this.el).val(this.clean(a(this.el).val())).removeClass("w2field").removeData().off("change", this.tmp.onChange).off("click", this.tmp.onClick).off("focus", this.tmp.onFocus).off("blur", this.tmp.onBlur).off("keydown", this.tmp.onKeydown).off("keyup", this.tmp.onKeyup).off("keypress", this.tmp.onKeypress);
                for (var d in this.helpers) a(this.helpers[d]).remove();
                this.helpers = {}
            }
        },
        refresh: function() {
            var b = this,
                c = this.options,
                d = a(this.el).data("selected"),
                e = (new Date).getTime();
            if (-1 != ["list"].indexOf(this.type) && (a(b.el).parent().css("white-space", "nowrap"), b.helpers.prefix && b.helpers.prefix.hide(), setTimeout(function() {
                    if (b.helpers.focus) {
                        !a.isEmptyObject(d) && c.icon ? (c.prefix = '<span class="w2ui-icon ' + c.icon + '"style="cursor: pointer; font-size: 14px; display: inline-block; margin-top: -1px; color: #7F98AD;' + c.iconStyle + '"></span>', b.addPrefix()) : (c.prefix = "", b.addPrefix());
                        var e = b.helpers.focus.find("input");
                        "" == a(e).val() ? (a(e).css("opacity", 0).prev().css("opacity", 0), a(b.el).val(d && null != d.text ? d.text : ""), a(b.el).attr("placeholder", c.placeholder || "")) : (a(e).css("opacity", 1).prev().css("opacity", 1), a(b.el).val(""), a(b.el).removeAttr("placeholder"), setTimeout(function() {
                            b.helpers.prefix && b.helpers.prefix.hide();
                            var d = "position: absolute; opacity: 0; margin: 4px 0px 0px 2px; background-position: left !important;";
                            c.icon ? (a(e).css("margin-left", "17px"), a(b.helpers.focus).find(".icon-search").attr("style", d + "width: 11px !important; opacity: 1")) : (a(e).css("margin-left", "0px"), a(b.helpers.focus).find(".icon-search").attr("style", d + "width: 0px !important; opacity: 0"))
                        }, 1)), a(b.el).prop("readonly") || a(b.el).prop("disabled") ? setTimeout(function() {
                            a(b.helpers.prefix).css("opacity", "0.6"), a(b.helpers.suffix).css("opacity", "0.6")
                        }, 1) : setTimeout(function() {
                            a(b.helpers.prefix).css("opacity", "1"), a(b.helpers.suffix).css("opacity", "1")
                        }, 1)
                    }
                }, 1)), -1 != ["enum", "file"].indexOf(this.type)) {
                var f = "";
                for (var g in d) {
                    var h = d[g],
                        i = "";
                    i = "function" == typeof c.renderItem ? c.renderItem(h, g, '<div class="w2ui-list-remove" title="' + w2utils.lang("Remove") + '" index="' + g + '">&nbsp;&nbsp;</div>') : '<div class="w2ui-list-remove" title="' + w2utils.lang("Remove") + '" index="' + g + '">&nbsp;&nbsp;</div>' + ("enum" == b.type ? h.text : h.name + '<span class="file-size"> - ' + w2utils.size(h.size) + "</span>"), f += '<li index="' + g + '" style="max-width: ' + parseInt(c.maxWidth) + "px; " + (h.style ? h.style : "") + '">' + i + "</li>"
                }
                var j = b.helpers.multi,
                    k = j.find("ul");
                if (j.attr("style", j.attr("style") + ";" + c.style), a(b.el).prop("readonly") || a(b.el).prop("disabled") ? (j.addClass("w2ui-readonly"), j.css("pointer-events", "none").find("li").css("opacity", "0.6"), a(b.helpers.multi).find("input").prop("readonly", !0)) : (j.removeClass("w2ui-readonly"), j.css("pointer-events", "auto").find("li").css("opacity", "1"), a(b.helpers.multi).find("input").prop("readonly", !1)), j.find(".w2ui-enum-placeholder").remove(), k.find("li").not("li.nomouse").remove(), "" != f) k.prepend(f);
                else if ("undefined" != typeof c.placeholder) {
                    var l = "padding-top: " + a(this.el).css("padding-top") + ";padding-left: " + a(this.el).css("padding-left") + "; box-sizing: " + a(this.el).css("box-sizing") + "; line-height: " + a(this.el).css("line-height") + "; font-size: " + a(this.el).css("font-size") + "; font-family: " + a(this.el).css("font-family") + "; ";
                    j.prepend('<div class="w2ui-enum-placeholder" style="' + l + '">' + c.placeholder + "</div>")
                }
                j.find("li").data("mouse", "out").on("click", function(c) {
                    var e = d[a(c.target).attr("index")];
                    if (!a(c.target).hasClass("nomouse")) {
                        c.stopPropagation();
                        var f = b.trigger({
                            phase: "before",
                            type: "click",
                            target: b.el,
                            originalEvent: c.originalEvent,
                            item: e
                        });
                        if (f.isCancelled !== !0) {
                            if (a(c.target).hasClass("w2ui-list-remove")) {
                                if (a(b.el).attr("readonly") || a(b.el).attr("disabled")) return;
                                var f = b.trigger({
                                    phase: "before",
                                    type: "remove",
                                    target: b.el,
                                    originalEvent: c.originalEvent,
                                    item: e
                                });
                                if (f.isCancelled === !0) return;
                                a().w2overlay(), d.splice(a(c.target).attr("index"), 1), a(b.el).trigger("change"), a(c.target).parent().fadeOut("fast"), setTimeout(function() {
                                    b.refresh(), b.trigger(a.extend(f, {
                                        phase: "after"
                                    }))
                                }, 300)
                            }
                            if ("file" == b.type && !a(c.target).hasClass("w2ui-list-remove")) {
                                var g = "";
                                /image/i.test(e.type) && (g = '<div style="padding: 3px;">    <img src="' + (e.content ? "data:" + e.type + ";base64," + e.content : "") + '" style="max-width: 300px;"         onload="var w = $(this).width(); var h = $(this).height();             if (w < 300 & h < 300) return;             if (w >= h && w > 300) $(this).width(300);            if (w < h && h > 300) $(this).height(300);"        onerror="this.style.display = \'none\'"    ></div>');
                                var h = 'style="padding: 3px; text-align: right; color: #777;"',
                                    i = 'style="padding: 3px"';
                                g += '<div style="padding: 8px;">    <table cellpadding="2">    <tr><td ' + h + ">" + w2utils.lang("Name") + ":</td><td " + i + ">" + e.name + "</td></tr>    <tr><td " + h + ">" + w2utils.lang("Size") + ":</td><td " + i + ">" + w2utils.size(e.size) + "</td></tr>    <tr><td " + h + ">" + w2utils.lang("Type") + ":</td><td " + i + '>        <span style="width: 200px; display: block-inline; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">' + e.type + "</span>    </td></tr>    <tr><td " + h + ">" + w2utils.lang("Modified") + ":</td><td " + i + ">" + w2utils.date(e.modified) + "</td></tr>    </table></div>", a(c.target).w2overlay(g)
                            }
                            b.trigger(a.extend(f, {
                                phase: "after"
                            }))
                        }
                    }
                }).on("mouseover", function(c) {
                    var e = c.target;
                    if ("LI" != e.tagName && (e = e.parentNode), !a(e).hasClass("nomouse")) {
                        if ("out" == a(e).data("mouse")) {
                            var f = d[a(e).attr("index")],
                                g = b.trigger({
                                    phase: "before",
                                    type: "mouseOver",
                                    target: b.el,
                                    originalEvent: c.originalEvent,
                                    item: f
                                });
                            if (g.isCancelled === !0) return;
                            b.trigger(a.extend(g, {
                                phase: "after"
                            }))
                        }
                        a(e).data("mouse", "over")
                    }
                }).on("mouseout", function(c) {
                    var e = c.target;
                    "LI" != e.tagName && (e = e.parentNode), a(e).hasClass("nomouse") || (a(e).data("mouse", "leaving"), setTimeout(function() {
                        if ("leaving" == a(e).data("mouse")) {
                            a(e).data("mouse", "out");
                            var f = d[a(e).attr("index")],
                                g = b.trigger({
                                    phase: "before",
                                    type: "f",
                                    target: b.el,
                                    originalEvent: c.originalEvent,
                                    item: f
                                });
                            if (g.isCancelled === !0) return;
                            b.trigger(a.extend(g, {
                                phase: "after"
                            }))
                        }
                    }, 0))
                }), a(this.el).height("auto");
                var m = a(j).find("> div").height() + 2 * w2utils.getSize(j, "+height");
                26 > m && (m = 26), m > c.maxHeight && (m = c.maxHeight), j.length > 0 && (j[0].scrollTop = 1e3);
                var n = w2utils.getSize(a(this.el), "height") - 2;
                n > m && (m = n), a(j).css({
                    height: m + "px",
                    overflow: m == c.maxHeight ? "auto" : "hidden"
                }), m < c.maxHeight && a(j).prop("scrollTop", 0), a(this.el).css({
                    height: m + 2 + "px"
                })
            }
            return (new Date).getTime() - e
        },
        reset: function() {
            var a = this.type;
            this.clear(), this.type = a, this.init()
        },
        clean: function(b) {
            var c = this.options;
            return b = String(b).trim(), -1 != ["int", "float", "money", "currency", "percent"].indexOf(this.type) && ("string" == typeof b && (b = b.replace(c.decimalSymbol, ".")), c.autoFormat && -1 != ["money", "currency"].indexOf(this.type) && (b = String(b).replace(c.moneyRE, "")), c.autoFormat && "percent" == this.type && (b = String(b).replace(c.percentRE, "")), c.autoFormat && -1 != ["int", "float"].indexOf(this.type) && (b = String(b).replace(c.numberRE, "")), parseFloat(b) == b && (null !== c.min && b < c.min && (b = c.min, a(this.el).val(c.min)), null !== c.max && b > c.max && (b = c.max, a(this.el).val(c.max))), b = "" !== b && w2utils.isFloat(b) ? Number(b) : ""), b
        },
        format: function(a) {
            var b = this.options;
            if (b.autoFormat && "" != a) switch (this.type) {
                case "money":
                case "currency":
                    a = w2utils.formatNumber(Number(a).toFixed(b.currencyPrecision), b.groupSymbol), "" != a && (a = b.currencyPrefix + a + b.currencySuffix);
                    break;
                case "percent":
                    a = w2utils.formatNumber(b.precision ? Number(a).toFixed(b.precision) : a, b.groupSymbol), "" != a && (a += "%");
                    break;
                case "float":
                    a = w2utils.formatNumber(b.precision ? Number(a).toFixed(b.precision) : a, b.groupSymbol);
                    break;
                case "int":
                    a = w2utils.formatNumber(a, b.groupSymbol)
            }
            return a
        },
        change: function(b) {
            var c = this,
                d = c.options;
            if (-1 != ["int", "float", "money", "currency", "percent"].indexOf(this.type)) {
                var e = a(this.el).val(),
                    f = this.format(this.clean(a(this.el).val()));
                if ("" != e && e != f) return a(this.el).val(f).change(), b.stopPropagation(), b.preventDefault(), !1
            }
            if ("color" == this.type) {
                var g = "#" + a(this.el).val();
                6 != a(this.el).val().length && 3 != a(this.el).val().length && (g = ""), a(this.el).next().find("div").css("background-color", g), a(c.el).is(":focus") && this.updateOverlay()
            }
            if (-1 != ["list", "enum", "file"].indexOf(this.type) && (c.refresh(), setTimeout(function() {
                    c.refresh()
                }, 5)), -1 != ["date", "time"].indexOf(this.type)) {
                var h = parseInt(c.el.value);
                w2utils.isInt(h) && h > 1e3 && ("time" == this.type && a(c.el).val(w2utils.formatTime(new Date(h), d.format)).change(), "date" == this.type && a(c.el).val(w2utils.formatDate(new Date(h), d.format)).change())
            }
        },
        click: function(b) {
            b.stopPropagation(), -1 != ["list", "combo", "enum"].indexOf(this.type) && (a(this.el).is(":focus") || this.focus(b)), -1 != ["date", "time", "color"].indexOf(this.type) && this.updateOverlay()
        },
        focus: function() {
            {
                var b = this;
                this.options
            }
            if (-1 !== ["color", "date", "time"].indexOf(b.type)) {
                if (a(b.el).attr("readonly") || a(b.el).attr("disabled")) return;
                a("#w2ui-overlay").length > 0 && a("#w2ui-overlay")[0].hide(), setTimeout(function() {
                    b.updateOverlay()
                }, 150)
            }
            if (-1 != ["list", "combo", "enum"].indexOf(b.type)) {
                if (a(b.el).attr("readonly") || a(b.el).attr("disabled")) return;
                a("#w2ui-overlay").length > 0 && a("#w2ui-overlay")[0].hide(), setTimeout(function() {
                    return "list" == b.type && a(b.el).is(":focus") ? void a(b.helpers.focus).find("input").focus() : (b.search(), void setTimeout(function() {
                        b.updateOverlay()
                    }, 1))
                }, 1)
            }
            "file" == b.type && a(b.helpers.multi).css({
                outline: "auto 5px #7DB4F3",
                "outline-offset": "-2px"
            })
        },
        blur: function() {
            var b = this,
                c = b.options,
                d = a(b.el).val().trim(); - 1 != ["color", "date", "time", "list", "combo", "enum"].indexOf(b.type) && a("#w2ui-overlay").length > 0 && a("#w2ui-overlay")[0].hide(), -1 != ["int", "float", "money", "currency", "percent"].indexOf(b.type) && ("" === d || b.checkType(d) || (a(b.el).val("").change(), c.silent === !1 && (a(b.el).w2tag("Not a valid number"), setTimeout(function() {
                a(b.el).w2tag("")
            }, 3e3)))), -1 != ["date", "time"].indexOf(b.type) && ("" === d || b.inRange(b.el.value) ? ("date" != b.type || "" === d || w2utils.isDate(b.el.value, c.format) || (a(b.el).val("").removeData("selected").change(), c.silent === !1 && (a(b.el).w2tag("Not a valid date"), setTimeout(function() {
                a(b.el).w2tag("")
            }, 3e3))), "time" != b.type || "" === d || w2utils.isTime(b.el.value) || (a(b.el).val("").removeData("selected").change(), c.silent === !1 && (a(b.el).w2tag("Not a valid time"), setTimeout(function() {
                a(b.el).w2tag("")
            }, 3e3)))) : (a(b.el).val("").removeData("selected").change(), c.silent === !1 && (a(b.el).w2tag("Not in range"), setTimeout(function() {
                a(b.el).w2tag("")
            }, 3e3)))), "enum" == b.type && a(b.helpers.multi).find("input").val("").width(20), "file" == b.type && a(b.helpers.multi).css({
                outline: "none"
            })
        },
        keyPress: function(a) {
            {
                var b = this;
                b.options
            }
            if (-1 != ["int", "float", "money", "currency", "percent", "hex", "color", "alphanumeric"].indexOf(b.type)) {
                if (a.metaKey || a.ctrlKey || a.altKey || a.charCode != a.keyCode && a.keyCode > 0) return;
                var c = String.fromCharCode(a.charCode);
                if (!b.checkType(c, !0) && 13 != a.keyCode) return a.preventDefault(), a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, !1
            } - 1 != ["date", "time"].indexOf(b.type) && setTimeout(function() {
                b.updateOverlay()
            }, 1)
        },
        keyDown: function(b, c) {
            var d = this,
                e = d.options,
                f = b.keyCode || c && c.keyCode;
            if (-1 != ["int", "float", "money", "currency", "percent"].indexOf(d.type)) {
                if (!e.keyboard || a(d.el).attr("readonly")) return;
                var g = !1,
                    h = parseFloat(a(d.el).val().replace(e.moneyRE, "")) || 0,
                    i = e.step;
                switch ((b.ctrlKey || b.metaKey) && (i = 10), f) {
                    case 38:
                        if (b.shiftKey) break;
                        a(d.el).val(h + i <= e.max || null === e.max ? Number((h + i).toFixed(12)) : e.max).change(), g = !0;
                        break;
                    case 40:
                        if (b.shiftKey) break;
                        a(d.el).val(h - i >= e.min || null === e.min ? Number((h - i).toFixed(12)) : e.min).change(), g = !0
                }
                g && (b.preventDefault(), setTimeout(function() {
                    d.el.setSelectionRange(d.el.value.length, d.el.value.length)
                }, 0))
            }
            if ("date" == d.type) {
                if (!e.keyboard || a(d.el).attr("readonly")) return;
                var g = !1,
                    j = 864e5,
                    i = 1;
                (b.ctrlKey || b.metaKey) && (i = 10);
                var k = w2utils.isDate(a(d.el).val(), e.format, !0);
                switch (k || (k = new Date, j = 0), f) {
                    case 38:
                        if (b.shiftKey) break;
                        var l = w2utils.formatDate(k.getTime() + j, e.format);
                        10 == i && (l = w2utils.formatDate(new Date(k.getFullYear(), k.getMonth() + 1, k.getDate()), e.format)), a(d.el).val(l).change(), g = !0;
                        break;
                    case 40:
                        if (b.shiftKey) break;
                        var l = w2utils.formatDate(k.getTime() - j, e.format);
                        10 == i && (l = w2utils.formatDate(new Date(k.getFullYear(), k.getMonth() - 1, k.getDate()), e.format)), a(d.el).val(l).change(), g = !0
                }
                g && (b.preventDefault(), setTimeout(function() {
                    d.el.setSelectionRange(d.el.value.length, d.el.value.length), d.updateOverlay()
                }, 0))
            }
            if ("time" == d.type) {
                if (!e.keyboard || a(d.el).attr("readonly")) return;
                var g = !1,
                    i = b.ctrlKey || b.metaKey ? 60 : 1,
                    h = a(d.el).val(),
                    m = d.toMin(h) || d.toMin((new Date).getHours() + ":" + ((new Date).getMinutes() - 1));
                switch (f) {
                    case 38:
                        if (b.shiftKey) break;
                        m += i, g = !0;
                        break;
                    case 40:
                        if (b.shiftKey) break;
                        m -= i, g = !0
                }
                g && (a(d.el).val(d.fromMin(m)).change(), b.preventDefault(), setTimeout(function() {
                    d.el.setSelectionRange(d.el.value.length, d.el.value.length)
                }, 0))
            }
            if ("color" == d.type) {
                if (a(d.el).attr("readonly")) return;
                if (86 == b.keyCode && (b.ctrlKey || b.metaKey) && (a(d.el).prop("maxlength", 7), setTimeout(function() {
                        var b = a(d).val();
                        "#" == b.substr(0, 1) && (b = b.substr(1)), w2utils.isHex(b) || (b = ""), a(d).val(b).prop("maxlength", 6).change()
                    }, 20)), (b.ctrlKey || b.metaKey) && !b.shiftKey) {
                    if ("undefined" == typeof d.tmp.cind1) d.tmp.cind1 = -1, d.tmp.cind2 = -1;
                    else {
                        switch (f) {
                            case 38:
                                d.tmp.cind1--;
                                break;
                            case 40:
                                d.tmp.cind1++;
                                break;
                            case 39:
                                d.tmp.cind2++;
                                break;
                            case 37:
                                d.tmp.cind2--
                        }
                        d.tmp.cind1 < 0 && (d.tmp.cind1 = 0), d.tmp.cind1 > this.pallete.length - 1 && (d.tmp.cind1 = this.pallete.length - 1), d.tmp.cind2 < 0 && (d.tmp.cind2 = 0), d.tmp.cind2 > this.pallete[0].length - 1 && (d.tmp.cind2 = this.pallete[0].length - 1)
                    } - 1 != [37, 38, 39, 40].indexOf(f) && (a(d.el).val(this.pallete[d.tmp.cind1][d.tmp.cind2]).change(), b.preventDefault())
                }
            }
            if (-1 != ["list", "combo", "enum"].indexOf(d.type)) {
                if (a(d.el).attr("readonly")) return;
                var g = !1,
                    n = a(d.el).data("selected"),
                    o = a(d.helpers.focus).find("input");
                switch ("list" == d.type && -1 == [37, 38, 39, 40].indexOf(f) && d.refresh(), f) {
                    case 27:
                        "list" == d.type && ("" != a(o).val() && a(o).val(""), b.stopPropagation());
                        break;
                    case 37:
                    case 39:
                        break;
                    case 13:
                        if (0 == a("#w2ui-overlay").length) break;
                        var p = e.items[e.index],
                            q = a(d.helpers.multi).find("input");
                        if ("enum" == d.type)
                            if (null != p) {
                                var r = d.trigger({
                                    phase: "before",
                                    type: "add",
                                    target: d.el,
                                    originalEvent: b.originalEvent,
                                    item: p
                                });
                                if (r.isCancelled === !0) return;
                                p = r.item, n.length >= e.max && e.max > 0 && n.pop(), delete p.hidden, delete d.tmp.force_open, n.push(p), a(d.el).change(), q.val("").width(20), d.refresh(), d.trigger(a.extend(r, {
                                    phase: "after"
                                }))
                            } else {
                                p = {
                                    id: q.val(),
                                    text: q.val()
                                };
                                var r = d.trigger({
                                    phase: "before",
                                    type: "new",
                                    target: d.el,
                                    originalEvent: b.originalEvent,
                                    item: p
                                });
                                if (r.isCancelled === !0) return;
                                p = r.item, "function" == typeof d.onNew && (n.length >= e.max && e.max > 0 && n.pop(), delete d.tmp.force_open, n.push(p), a(d.el).change(), q.val("").width(20), d.refresh()), d.trigger(a.extend(r, {
                                    phase: "after"
                                }))
                            }
                        else p && a(d.el).data("selected", p).val(p.text).change(), "" == a(d.el).val() && a(d.el).data("selected") && a(d.el).removeData("selected").val("").change(), "list" == d.type && (o.val(""), d.refresh()), d.tmp.force_hide = !0;
                        break;
                    case 8:
                    case 46:
                        if ("enum" == d.type && 8 == f && "" == a(d.helpers.multi).find("input").val() && n.length > 0) {
                            var p = n[n.length - 1],
                                r = d.trigger({
                                    phase: "before",
                                    type: "remove",
                                    target: d.el,
                                    originalEvent: b.originalEvent,
                                    item: p
                                });
                            if (r.isCancelled === !0) return;
                            n.pop(), a(d.el).trigger("change"), d.refresh(), d.trigger(a.extend(r, {
                                phase: "after"
                            }))
                        }
                        "list" == d.type && "" == a(o).val() && (a(d.el).data("selected", {}).change(), d.refresh());
                        break;
                    case 38:
                        for (e.index = w2utils.isInt(e.index) ? parseInt(e.index) : 0, e.index--; e.index > 0 && e.items[e.index].hidden;) e.index--;
                        if (0 == e.index && e.items[e.index].hidden)
                            for (; e.items[e.index] && e.items[e.index].hidden;) e.index++;
                        g = !0;
                        break;
                    case 40:
                        for (e.index = w2utils.isInt(e.index) ? parseInt(e.index) : -1, e.index++; e.index < e.items.length - 1 && e.items[e.index].hidden;) e.index++;
                        if (e.index == e.items.length - 1 && e.items[e.index].hidden)
                            for (; e.items[e.index] && e.items[e.index].hidden;) e.index--;
                        var s = d.el; - 1 != ["enum"].indexOf(d.type) && (s = d.helpers.multi.find("input")), "" == a(s).val() && 0 == a("#w2ui-overlay").length ? d.tmp.force_open = !0 : g = !0
                }
                if (g) return e.index < 0 && (e.index = 0), e.index >= e.items.length && (e.index = e.items.length - 1), d.updateOverlay(), b.preventDefault(), void setTimeout(function() {
                    if ("enum" == d.type) {
                        var a = d.helpers.multi.find("input").get(0);
                        a.setSelectionRange(a.value.length, a.value.length)
                    } else if ("list" == d.type) {
                        var a = d.helpers.focus.find("input").get(0);
                        a.setSelectionRange(a.value.length, a.value.length)
                    } else d.el.setSelectionRange(d.el.value.length, d.el.value.length)
                }, 0);
                if ("enum" == d.type) {
                    var s = d.helpers.multi.find("input"),
                        t = s.val();
                    s.width(8 * (t.length + 2) + "px")
                } - 1 == [16, 17, 18, 20, 37, 39, 91].indexOf(f) && setTimeout(function() {
                    d.tmp.force_hide || d.request(), d.search()
                }, 1)
            }
        },
        keyUp: function(b) {
            "color" == this.type && 86 == b.keyCode && (b.ctrlKey || b.metaKey) && a(this).prop("maxlength", 6)
        },
        clearCache: function() {
            var a = this.options;
            a.items = [], this.tmp.xhr_loading = !1, this.tmp.xhr_search = "", this.tmp.xhr_total = -1, this.search()
        },
        request: function(b) {
            var c = this,
                d = this.options,
                e = a(c.el).val() || "";
            if (d.url) {
                if ("enum" == c.type) {
                    var f = a(c.helpers.multi).find("input");
                    e = 0 == f.length ? "" : f.val()
                }
                if ("list" == c.type) {
                    var f = a(c.helpers.focus).find("input");
                    e = 0 == f.length ? "" : f.val()
                }
                if (0 != d.minLength && e.length < d.minLength) return d.items = [], void this.updateOverlay();
                "undefined" == typeof b && (b = 350), "undefined" == typeof c.tmp.xhr_search && (c.tmp.xhr_search = ""), "undefined" == typeof c.tmp.xhr_total && (c.tmp.xhr_total = -1), d.url && 1 != a(c.el).prop("readonly") && (0 === d.items.length && 0 !== c.tmp.xhr_total || c.tmp.xhr_total == d.cacheMax && e.length > c.tmp.xhr_search.length || e.length >= c.tmp.xhr_search.length && e.substr(0, c.tmp.xhr_search.length) != c.tmp.xhr_search || e.length < c.tmp.xhr_search.length) && (c.tmp.xhr_loading = !0, c.search(), clearTimeout(c.tmp.timeout), c.tmp.timeout = setTimeout(function() {
                    var b = d.url,
                        f = {
                            search: e,
                            max: d.cacheMax
                        };
                    a.extend(f, d.postData);
                    var g = c.trigger({
                        phase: "before",
                        type: "request",
                        target: c.el,
                        url: b,
                        postData: f
                    });
                    if (g.isCancelled !== !0) {
                        b = g.url, f = g.postData, c.tmp.xhr && c.tmp.xhr.abort();
                        var h = {
                            type: "GET",
                            url: b,
                            data: f,
                            dataType: "JSON"
                        };
                        "JSON" == w2utils.settings.dataType && (h.type = "POST", h.data = JSON.stringify(h.data), h.contentType = "application/json"), c.tmp.xhr = a.ajax(h).done(function(b, g, h) {
                            var i = c.trigger({
                                phase: "before",
                                type: "load",
                                target: c.el,
                                search: f.search,
                                data: b,
                                xhr: h
                            });
                            if (i.isCancelled !== !0) {
                                if (b = i.data, "string" == typeof b && (b = JSON.parse(b)), "success" != b.status) return void console.log("ERROR: server did not return proper structure. It should return", {
                                    status: "success",
                                    items: [{
                                        id: 1,
                                        text: "item"
                                    }]
                                });
                                b.items.length > d.cacheMax && b.items.splice(d.cacheMax, 1e5), c.tmp.xhr_loading = !1, c.tmp.xhr_search = e, c.tmp.xhr_total = b.items.length, d.items = c.normMenu(b.items), c.tmp.emptySet = "" == e && 0 == b.items.length ? !0 : !1, c.search(), c.trigger(a.extend(i, {
                                    phase: "after"
                                }))
                            }
                        }).fail(function(b, d, f) {
                            var g = {
                                    status: d,
                                    error: f,
                                    rawResponseText: b.responseText
                                },
                                h = c.trigger({
                                    phase: "before",
                                    type: "error",
                                    target: c.el,
                                    search: e,
                                    error: g,
                                    xhr: b
                                });
                            if (h.isCancelled !== !0) {
                                if ("abort" != d) {
                                    var i;
                                    try {
                                        i = a.parseJSON(b.responseText)
                                    } catch (j) {}
                                    console.log("ERROR: Server communication failed.", "\n   EXPECTED:", {
                                        status: "success",
                                        items: [{
                                            id: 1,
                                            text: "item"
                                        }]
                                    }, "\n         OR:", {
                                        status: "error",
                                        message: "error message"
                                    }, "\n   RECEIVED:", "object" == typeof i ? i : b.responseText)
                                }
                                c.clearCache(), c.trigger(a.extend(h, {
                                    phase: "after"
                                }))
                            }
                        }), c.trigger(a.extend(g, {
                            phase: "after"
                        }))
                    }
                }, b))
            }
        },
        search: function() {
            var b = this,
                c = this.options,
                d = a(b.el).val(),
                e = b.el,
                f = [],
                g = a(b.el).data("selected");
            if ("enum" == b.type) {
                e = a(b.helpers.multi).find("input"), d = e.val();
                for (var h in g) g[h] && f.push(g[h].id)
            }
            if ("list" == b.type) {
                e = a(b.helpers.focus).find("input"), d = e.val();
                for (var h in g) g[h] && f.push(g[h].id)
            }
            var i = b.trigger({
                phase: "before",
                type: "search",
                target: e,
                search: d
            });
            if (i.isCancelled !== !0) {
                if (b.tmp.xhr_loading !== !0) {
                    var j = 0;
                    for (var k in c.items) {
                        var l = c.items[k],
                            m = "",
                            n = ""; - 1 != ["is", "begins"].indexOf(c.match) && (m = "^"), -1 != ["is", "ends"].indexOf(c.match) && (n = "$");
                        try {
                            var o = new RegExp(m + d + n, "i");
                            l.hidden = o.test(l.text) || "..." == l.text ? !1 : !0
                        } catch (p) {}
                        "enum" == b.type && -1 != a.inArray(l.id, f) && (l.hidden = !0), l.hidden !== !0 && j++
                    }
                    if ("combo" != b.type)
                        for (c.index = 0; c.items[c.index] && c.items[c.index].hidden;) c.index++;
                    else c.index = -1;
                    0 >= j && (c.index = -1), c.spinner = !1, b.updateOverlay(), setTimeout(function() {
                        var b = a("#w2ui-overlay").html() || "";
                        c.markSearch && -1 != b.indexOf("$.fn.w2menuHandler") && a("#w2ui-overlay").w2marker(d)
                    }, 1)
                } else c.items.splice(0, c.cacheMax), c.spinner = !0, b.updateOverlay();
                b.trigger(a.extend(i, {
                    phase: "after"
                }))
            }
        },
        updateOverlay: function() {
            var b = this,
                c = this.options;
            if ("color" == this.type) {
                if (a(b.el).attr("readonly")) return;
                0 == a("#w2ui-overlay").length ? a(b.el).w2overlay(b.getColorHTML()) : a("#w2ui-overlay").html(b.getColorHTML()), a("#w2ui-overlay .color").on("mousedown", function(c) {
                    var d = a(c.originalEvent.target).attr("name"),
                        e = a(c.originalEvent.target).attr("index").split(":");
                    b.tmp.cind1 = e[0], b.tmp.cind2 = e[1], a(b.el).val(d).change(), a(this).html("&#149;")
                }).on("mouseup", function() {
                    setTimeout(function() {
                        a("#w2ui-overlay").length > 0 && a("#w2ui-overlay").removeData("keepOpen")[0].hide()
                    }, 10)
                })
            }
            if ("date" == this.type) {
                if (a(b.el).attr("readonly")) return;
                0 == a("#w2ui-overlay").length && a(b.el).w2overlay('<div class="w2ui-reset w2ui-calendar" onclick="event.stopPropagation();"></div>', {
                    css: {
                        "background-color": "#f5f5f5"
                    }
                });
                var d, e, f = w2utils.isDate(a(b.el).val(), b.options.format, !0);
                f && (d = f.getMonth() + 1, e = f.getFullYear()),
                    function k(c, d) {
                        a("#w2ui-overlay > div > div").html(b.getMonthHTML(c, d)), a("#w2ui-overlay .w2ui-calendar-title").on("mousedown", function() {
                            if (a(this).next().hasClass("w2ui-calendar-jump")) a(this).next().remove();
                            else {
                                var c, d;
                                a(this).after('<div class="w2ui-calendar-jump" style=""></div>'), a(this).next().hide().html(b.getYearHTML()).fadeIn(200), setTimeout(function() {
                                    a("#w2ui-overlay .w2ui-calendar-jump").find(".w2ui-jump-month, .w2ui-jump-year").on("click", function() {
                                        a(this).hasClass("w2ui-jump-month") && (a(this).parent().find(".w2ui-jump-month").removeClass("selected"), a(this).addClass("selected"), d = a(this).attr("name")), a(this).hasClass("w2ui-jump-year") && (a(this).parent().find(".w2ui-jump-year").removeClass("selected"), a(this).addClass("selected"), c = a(this).attr("name")), null != c && null != d && (a("#w2ui-overlay .w2ui-calendar-jump").fadeOut(100), setTimeout(function() {
                                            k(parseInt(d) + 1, c)
                                        }, 100))
                                    }), a("#w2ui-overlay .w2ui-calendar-jump >:last-child").prop("scrollTop", 2e3)
                                }, 1)
                            }
                        }), a("#w2ui-overlay .w2ui-date").on("mousedown", function() {
                            var c = a(this).attr("date");
                            a(b.el).val(c).change(), a(this).css({
                                "background-color": "#B6D5FB",
                                "border-color": "#aaa"
                            })
                        }).on("mouseup", function() {
                            setTimeout(function() {
                                a("#w2ui-overlay").length > 0 && a("#w2ui-overlay").removeData("keepOpen")[0].hide()
                            }, 10)
                        }), a("#w2ui-overlay .previous").on("mousedown", function() {
                            var a = b.options.current.split("/");
                            a[0] = parseInt(a[0]) - 1, k(a[0], a[1])
                        }), a("#w2ui-overlay .next").on("mousedown", function() {
                            var a = b.options.current.split("/");
                            a[0] = parseInt(a[0]) + 1, k(a[0], a[1])
                        })
                    }(d, e)
            }
            if ("time" == this.type) {
                if (a(b.el).attr("readonly")) return;
                0 == a("#w2ui-overlay").length && a(b.el).w2overlay('<div class="w2ui-reset w2ui-calendar-time" onclick="event.stopPropagation();"></div>', {
                    css: {
                        "background-color": "#fff"
                    }
                });
                var g = "h24" == this.options.format ? !0 : !1;
                a("#w2ui-overlay > div").html(b.getHourHTML()), a("#w2ui-overlay .w2ui-time").on("mousedown", function() {
                    a(this).css({
                        "background-color": "#B6D5FB",
                        "border-color": "#aaa"
                    });
                    var c = a(this).attr("hour");
                    a(b.el).val((c > 12 && !g ? c - 12 : c) + ":00" + (g ? "" : 12 > c ? " am" : " pm")).change()
                }).on("mouseup", function() {
                    var c = a(this).attr("hour");
                    a("#w2ui-overlay").length > 0 && a("#w2ui-overlay")[0].hide(), a(b.el).w2overlay('<div class="w2ui-reset w2ui-calendar-time"></div>', {
                        css: {
                            "background-color": "#fff"
                        }
                    }), a("#w2ui-overlay > div").html(b.getMinHTML(c)), a("#w2ui-overlay .w2ui-time").on("mousedown", function() {
                        a(this).css({
                            "background-color": "#B6D5FB",
                            "border-color": "#aaa"
                        });
                        var d = a(this).attr("min");
                        a(b.el).val((c > 12 && !g ? c - 12 : c) + ":" + (10 > d ? 0 : "") + d + (g ? "" : 12 > c ? " am" : " pm")).change()
                    }).on("mouseup", function() {
                        setTimeout(function() {
                            a("#w2ui-overlay").length > 0 && a("#w2ui-overlay").removeData("keepOpen")[0].hide()
                        }, 10)
                    })
                })
            }
            if (-1 != ["list", "combo", "enum"].indexOf(this.type)) {
                var h = this.el,
                    i = this.el;
                if ("enum" == this.type && (h = a(this.helpers.multi), i = a(h).find("input")), "list" == this.type && (i = a(this.helpers.focus).find("input")), a(i).is(":focus")) {
                    if (c.openOnFocus === !1 && "" == a(i).val() && b.tmp.force_open !== !0) return void a().w2overlay();
                    if (b.tmp.force_hide) return a().w2overlay(), void setTimeout(function() {
                        delete b.tmp.force_hide
                    }, 1);
                    "" != a(i).val() && delete b.tmp.force_open, 0 == a("#w2ui-overlay").length && (c.index = 0);
                    var j = w2utils.lang("No matches");
                    null != c.url && a(i).val().length < c.minLength && b.tmp.emptySet !== !0 && (j = c.minLength + " " + w2utils.lang("letters or more...")), null != c.url && "" == a(i).val() && b.tmp.emptySet !== !0 && (j = w2utils.lang("Type to search....")), a(h).w2menu("refresh", a.extend(!0, {}, c, {
                        search: !1,
                        render: c.renderDrop,
                        maxHeight: c.maxDropHeight,
                        msgNoItems: j,
                        onSelect: function(d) {
                            if ("enum" == b.type) {
                                var e = a(b.el).data("selected");
                                if (d.item) {
                                    var f = b.trigger({
                                        phase: "before",
                                        type: "add",
                                        target: b.el,
                                        originalEvent: d.originalEvent,
                                        item: d.item
                                    });
                                    if (f.isCancelled === !0) return;
                                    e.length >= c.max && c.max > 0 && e.pop(), delete d.item.hidden, e.push(d.item), a(b.el).data("selected", e).change(), a(b.helpers.multi).find("input").val("").width(20), b.refresh(), a("#w2ui-overlay").length > 0 && a("#w2ui-overlay")[0].hide(), b.trigger(a.extend(f, {
                                        phase: "after"
                                    }))
                                }
                            } else a(b.el).data("selected", d.item).val(d.item.text).change(), b.helpers.focus && b.helpers.focus.find("input").val("")
                        }
                    }))
                }
            }
        },
        inRange: function(b) {
            var c = !1;
            if ("date" == this.type) {
                var d = w2utils.isDate(b, this.options.format, !0);
                if (d) {
                    if (this.options.start || this.options.end) {
                        var e = "string" == typeof this.options.start ? this.options.start : a(this.options.start).val(),
                            f = "string" == typeof this.options.end ? this.options.end : a(this.options.end).val(),
                            g = w2utils.isDate(e, this.options.format, !0),
                            h = w2utils.isDate(f, this.options.format, !0),
                            i = new Date(d);
                        g || (g = i), h || (h = i), i >= g && h >= i && (c = !0)
                    } else c = !0;
                    this.options.blocked && -1 != a.inArray(b, this.options.blocked) && (c = !1)
                }
            }
            if ("time" == this.type)
                if (this.options.start || this.options.end) {
                    var j = this.toMin(b),
                        k = this.toMin(this.options.start),
                        l = this.toMin(this.options.end);
                    k || (k = j), l || (l = j), j >= k && l >= j && (c = !0)
                } else c = !0;
            return c
        },
        checkType: function(a, b) {
            var c = this;
            switch (c.type) {
                case "int":
                    return b && -1 != ["-", c.options.groupSymbol].indexOf(a) ? !0 : w2utils.isInt(a.replace(c.options.numberRE, ""));
                case "percent":
                    a = a.replace(/%/g, "");
                case "float":
                    return b && -1 != ["-", w2utils.settings.decimalSymbol, c.options.groupSymbol].indexOf(a) ? !0 : w2utils.isFloat(a.replace(c.options.numberRE, ""));
                case "money":
                case "currency":
                    return b && -1 != ["-", c.options.decimalSymbol, c.options.groupSymbol, c.options.currencyPrefix, c.options.currencySuffix].indexOf(a) ? !0 : w2utils.isFloat(a.replace(c.options.moneyRE, ""));
                case "hex":
                case "color":
                    return w2utils.isHex(a);
                case "alphanumeric":
                    return w2utils.isAlphaNumeric(a)
            }
            return !0
        },
        addPrefix: function() {
            var b = this;
            setTimeout(function() {
                if ("clear" !== b.type) {
                    var c, d = a(b.el).data("tmp") || {};
                    d["old-padding-left"] && a(b.el).css("padding-left", d["old-padding-left"]), d["old-padding-left"] = a(b.el).css("padding-left"), a(b.el).data("tmp", d), b.helpers.prefix && a(b.helpers.prefix).remove(), "" !== b.options.prefix && (a(b.el).before('<div class="w2ui-field-helper">' + b.options.prefix + "</div>"), c = a(b.el).prev(), c.css({
                        color: a(b.el).css("color"),
                        "font-family": a(b.el).css("font-family"),
                        "font-size": a(b.el).css("font-size"),
                        "padding-top": a(b.el).css("padding-top"),
                        "padding-bottom": a(b.el).css("padding-bottom"),
                        "padding-left": a(b.el).css("padding-left"),
                        "padding-right": 0,
                        "margin-top": parseInt(a(b.el).css("margin-top"), 10) + 2 + "px",
                        "margin-bottom": parseInt(a(b.el).css("margin-bottom"), 10) + 1 + "px",
                        "margin-left": a(b.el).css("margin-left"),
                        "margin-right": 0
                    }).on("click", function() {
                        if (b.options.icon && "function" == typeof b.onIconClick) {
                            var c = b.trigger({
                                phase: "before",
                                type: "iconClick",
                                target: b.el,
                                el: a(this).find("span.w2ui-icon")[0]
                            });
                            if (c.isCancelled === !0) return;
                            b.trigger(a.extend(c, {
                                phase: "after"
                            }))
                        } else "list" == b.type ? a(b.helpers.focus).find("input").focus() : a(b.el).focus()
                    }), a(b.el).css("padding-left", c.width() + parseInt(a(b.el).css("padding-left"), 10) + "px"), b.helpers.prefix = c)
                }
            }, 1)
        },
        addSuffix: function() {
            var b, c, d = this;
            setTimeout(function() {
                if ("clear" !== d.type) {
                    var e = a(d.el).data("tmp") || {};
                    if (e["old-padding-right"] && a(d.el).css("padding-right", e["old-padding-right"]), e["old-padding-right"] = a(d.el).css("padding-right"), a(d.el).data("tmp", e), c = parseInt(a(d.el).css("padding-right"), 10), d.options.arrows) {
                        d.helpers.arrows && a(d.helpers.arrows).remove(), a(d.el).after('<div class="w2ui-field-helper" style="border: 1px solid transparent">&nbsp;    <div class="w2ui-field-up" type="up">        <div class="arrow-up" type="up"></div>    </div>    <div class="w2ui-field-down" type="down">        <div class="arrow-down" type="down"></div>    </div></div>'); {
                            w2utils.getSize(d.el, "height")
                        }
                        b = a(d.el).next(), b.css({
                            color: a(d.el).css("color"),
                            "font-family": a(d.el).css("font-family"),
                            "font-size": a(d.el).css("font-size"),
                            height: a(d.el).height() + parseInt(a(d.el).css("padding-top"), 10) + parseInt(a(d.el).css("padding-bottom"), 10) + "px",
                            padding: 0,
                            "margin-top": parseInt(a(d.el).css("margin-top"), 10) + 1 + "px",
                            "margin-bottom": 0,
                            "border-left": "1px solid silver"
                        }).css("margin-left", "-" + (b.width() + parseInt(a(d.el).css("margin-right"), 10) + 12) + "px").on("mousedown", function(b) {
                            function c() {
                                clearTimeout(a("body").data("_field_update_timer")), a("body").off("mouseup", c)
                            }

                            function e(c) {
                                a(d.el).focus(), d.keyDown(a.Event("keydown"), {
                                    keyCode: "up" == a(b.target).attr("type") ? 38 : 40
                                }), c !== !1 && a("body").data("_field_update_timer", setTimeout(e, 60))
                            }
                            a("body").on("mouseup", c), a("body").data("_field_update_timer", setTimeout(e, 700)), e(!1)
                        }), c += b.width() + 12, a(d.el).css("padding-right", c + "px"), d.helpers.arrows = b
                    }
                    "" !== d.options.suffix && (d.helpers.suffix && a(d.helpers.suffix).remove(), a(d.el).after('<div class="w2ui-field-helper">' + d.options.suffix + "</div>"), b = a(d.el).next(), b.css({
                        color: a(d.el).css("color"),
                        "font-family": a(d.el).css("font-family"),
                        "font-size": a(d.el).css("font-size"),
                        "padding-top": a(d.el).css("padding-top"),
                        "padding-bottom": a(d.el).css("padding-bottom"),
                        "padding-left": "3px",
                        "padding-right": a(d.el).css("padding-right"),
                        "margin-top": parseInt(a(d.el).css("margin-top"), 10) + 2 + "px",
                        "margin-bottom": parseInt(a(d.el).css("margin-bottom"), 10) + 1 + "px"
                    }).on("click", function() {
                        "list" == d.type ? a(d.helpers.focus).find("input").focus() : a(d.el).focus()
                    }), b.css("margin-left", "-" + (w2utils.getSize(b, "width") + parseInt(a(d.el).css("margin-right"), 10) + 2) + "px"), c += b.width() + 3, a(d.el).css("padding-right", c + "px"), d.helpers.suffix = b)
                }
            }, 1)
        },
        addFocus: function() {
            var b = this,
                c = (this.options, 0);
            a(b.helpers.focus).remove();
            var d = '<div class="w2ui-field-helper">    <div class="w2ui-icon icon-search"></div>    <input type="text" autocomplete="off"><div>';
            a(b.el).attr("tabindex", -1).before(d);
            var e = a(b.el).prev();
            b.helpers.focus = e, e.css({
                width: a(b.el).width(),
                "margin-top": a(b.el).css("margin-top"),
                "margin-left": parseInt(a(b.el).css("margin-left")) + parseInt(a(b.el).css("padding-left")) + "px",
                "margin-bottom": a(b.el).css("margin-bottom"),
                "margin-right": a(b.el).css("margin-right")
            }).find("input").css({
                cursor: "default",
                width: "100%",
                outline: "none",
                opacity: 1,
                margin: 0,
                border: "1px solid transparent",
                padding: a(b.el).css("padding-top"),
                "padding-left": 0,
                "margin-left": c > 0 ? c + 6 : 0,
                "background-color": "transparent"
            }), e.find("input").on("click", function(c) {
                0 == a("#w2ui-overlay").length && b.focus(c), c.stopPropagation()
            }).on("focus", function(c) {
                a(b.el).css({
                    outline: "auto 5px #7DB4F3",
                    "outline-offset": "-2px"
                }), a(this).val(""), a(b.el).triggerHandler("focus"), c.stopPropagation ? c.stopPropagation() : c.cancelBubble = !0
            }).on("blur", function(c) {
                a(b.el).css("outline", "none"), a(this).val(""), b.refresh(), a(b.el).triggerHandler("blur"), c.stopPropagation ? c.stopPropagation() : c.cancelBubble = !0
            }).on("keyup", function(a) {
                b.keyUp(a)
            }).on("keydown", function(a) {
                b.keyDown(a)
            }).on("keypress", function(a) {
                b.keyPress(a)
            }), e.on("click", function() {
                a(this).find("input").focus()
            }), b.refresh()
        },
        addMulti: function() {
            {
                var b = this;
                this.options
            }
            a(b.helpers.multi).remove();
            var c = "",
                d = "margin-top     : 0px; margin-bottom  : 0px; margin-left    : " + a(b.el).css("margin-left") + "; margin-right   : " + a(b.el).css("margin-right") + "; width          : " + (w2utils.getSize(b.el, "width") - parseInt(a(b.el).css("margin-left"), 10) - parseInt(a(b.el).css("margin-right"), 10)) + "px;";
            "enum" == b.type && (c = '<div class="w2ui-field-helper w2ui-list" style="' + d + '; box-sizing: border-box">    <div style="padding: 0px; margin: 0px; margin-right: 20px; display: inline-block">    <ul>        <li style="padding-left: 0px; padding-right: 0px" class="nomouse">            <input type="text" style="width: 20px" autocomplete="off" ' + (a(b.el).attr("readonly") ? "readonly" : "") + ">        </li>"), "file" == b.type && (c = '<div class="w2ui-field-helper w2ui-list" style="' + d + '; box-sizing: border-box">    <div style="padding: 0px; margin: 0px; margin-right: 20px; display: inline-block">    <ul><li style="padding-left: 0px; padding-right: 0px" class="nomouse"></li></ul>    <input class="file-input" type="file" name="attachment" multiple style="display: none" tabindex="-1">'), a(b.el).before(c).css({
                "background-color": "transparent",
                "border-color": "transparent"
            });
            var e = a(b.el).prev();
            b.helpers.multi = e, "enum" == b.type && (a(b.el).attr("tabindex", -1), e.find("input").on("click", function(c) {
                0 == a("#w2ui-overlay").length && b.focus(c), a(b.el).triggerHandler("click")
            }).on("focus", function(c) {
                a(e).css({
                    outline: "auto 5px #7DB4F3",
                    "outline-offset": "-2px"
                }), a(b.el).triggerHandler("focus"), c.stopPropagation ? c.stopPropagation() : c.cancelBubble = !0
            }).on("blur", function(c) {
                a(e).css("outline", "none"), a(b.el).triggerHandler("blur"), c.stopPropagation ? c.stopPropagation() : c.cancelBubble = !0
            }).on("keyup", function(a) {
                b.keyUp(a)
            }).on("keydown", function(a) {
                b.keyDown(a)
            }).on("keypress", function(a) {
                e.find(".w2ui-enum-placeholder").remove(), b.keyPress(a)
            }), e.on("click", function() {
                a(this).find("input").focus()
            })), "file" == b.type && (a(b.el).css("outline", "none"), e.on("click", function(c) {
                a(b.el).focus(), a(b.el).attr("readonly") || (b.blur(c), e.find("input").click())
            }).on("dragenter", function() {
                a(b.el).attr("readonly") || a(e).addClass("w2ui-file-dragover")
            }).on("dragleave", function(c) {
                if (!a(b.el).attr("readonly")) {
                    var d = a(c.target).parents(".w2ui-field-helper");
                    0 == d.length && a(e).removeClass("w2ui-file-dragover")
                }
            }).on("drop", function(c) {
                if (!a(b.el).attr("readonly")) {
                    a(e).removeClass("w2ui-file-dragover");
                    for (var d = c.originalEvent.dataTransfer.files, f = 0, g = d.length; g > f; f++) b.addFile.call(b, d[f]);
                    c.preventDefault(), c.stopPropagation()
                }
            }).on("dragover", function(a) {
                a.preventDefault(), a.stopPropagation()
            }), e.find("input").on("click", function(a) {
                a.stopPropagation()
            }).on("change", function() {
                if ("undefined" != typeof this.files)
                    for (var a = 0, c = this.files.length; c > a; a++) b.addFile.call(b, this.files[a])
            })), b.refresh()
        },
        addFile: function(b) {
            var c, d = this,
                e = this.options,
                f = a(d.el).data("selected"),
                g = {
                    name: b.name,
                    type: b.type,
                    modified: b.lastModifiedDate,
                    size: b.size,
                    content: null
                },
                h = 0,
                i = 0;
            for (var j in f) {
                if (f[j].name == b.name && f[j].size == b.size) return;
                h += f[j].size, i++
            }
            var k = d.trigger({
                phase: "before",
                type: "add",
                target: d.el,
                file: g,
                total: i,
                totalSize: h
            });
            if (k.isCancelled !== !0) {
                if (0 !== e.maxFileSize && g.size > e.maxFileSize) return c = "Maximum file size is " + w2utils.size(e.maxFileSize), e.silent === !1 && a(d.el).w2tag(c), void console.log("ERROR: " + c);
                if (0 !== e.maxSize && h + g.size > e.maxSize) return c = "Maximum total size is " + w2utils.size(e.maxSize), e.silent === !1 && a(d.el).w2tag(c), void console.log("ERROR: " + c);
                if (0 !== e.max && i >= e.max) return c = "Maximum number of files is " + e.max, e.silent === !1 && a(d.el).w2tag(c), void console.log("ERROR: " + c);
                if (f.push(g), "undefined" != typeof FileReader) {
                    var l = new FileReader;
                    l.onload = function() {
                        return function(b) {
                            var c = b.target.result,
                                e = c.indexOf(",");
                            g.content = c.substr(e + 1), d.refresh(), a(d.el).trigger("change"), d.trigger(a.extend(k, {
                                phase: "after"
                            }))
                        }
                    }(), l.readAsDataURL(b)
                } else d.refresh(), a(d.el).trigger("change")
            }
        },
        normMenu: function(b) {
            if (a.isArray(b)) {
                for (var c = 0; c < b.length; c++) "string" == typeof b[c] ? b[c] = {
                    id: b[c],
                    text: b[c]
                } : ("undefined" != typeof b[c].text && "undefined" == typeof b[c].id && (b[c].id = b[c].text), "undefined" == typeof b[c].text && "undefined" != typeof b[c].id && (b[c].text = b[c].id), "undefined" != typeof b[c].caption && (b[c].text = b[c].caption));
                return b
            }
            if ("object" == typeof b) {
                var d = [];
                for (var c in b) d.push({
                    id: c,
                    text: b[c]
                });
                return d
            }
        },
        getColorHTML: function() {
            for (var b = '<div class="w2ui-color"><table cellspacing="5">', c = 0; 8 > c; c++) {
                b += "<tr>";
                for (var d = 0; 8 > d; d++) b += '<td>    <div class="color" style="background-color: #' + this.pallete[c][d] + ';" name="' + this.pallete[c][d] + '" index="' + c + ":" + d + '">        ' + (a(this.el).val() == this.pallete[c][d] ? "&#149;" : "&nbsp;") + "    </div></td>";
                b += "</tr>", 2 > c && (b += '<tr><td style="height: 8px" colspan="8"></td></tr>')
            }
            return b += "</table></div>"
        },
        getMonthHTML: function(a, b) {
            var c = new Date,
                d = w2utils.settings.fullmonths,
                e = (w2utils.settings.fulldays, ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"]),
                f = c.getFullYear() + "/" + (Number(c.getMonth()) + 1) + "/" + c.getDate();
            b = w2utils.isInt(b) ? parseInt(b) : c.getFullYear(), a = w2utils.isInt(a) ? parseInt(a) : c.getMonth() + 1, a > 12 && (a -= 12, b++), (1 > a || 0 === a) && (a += 12, b--), e[1] = b / 4 == Math.floor(b / 4) ? "29" : "28", this.options.current = a + "/" + b, c = new Date(b, a - 1, 1);
            for (var g = c.getDay(), h = w2utils.settings.shortdays, i = "", j = 0, k = h.length; k > j; j++) i += "<td>" + h[j] + "</td>";
            for (var l = '<div class="w2ui-calendar-title title">    <div class="w2ui-calendar-previous previous"> <div></div> </div>    <div class="w2ui-calendar-next next"> <div></div> </div> ' + d[a - 1] + ", " + b + '</div><table class="w2ui-calendar-days" cellspacing="0">    <tr class="w2ui-day-title">' + i + "</tr>    <tr>", m = 1, n = 1; 43 > n; n++) {
                if (0 === g && 1 == n) {
                    for (var o = 0; 6 > o; o++) l += '<td class="w2ui-day-empty">&nbsp;</td>';
                    n += 6
                } else if (g > n || m > e[a - 1]) {
                    l += '<td class="w2ui-day-empty">&nbsp;</td>', n % 7 === 0 && (l += "</tr><tr>");
                    continue
                }
                var p = b + "/" + a + "/" + m,
                    q = "";
                n % 7 == 6 && (q = " w2ui-saturday"), n % 7 === 0 && (q = " w2ui-sunday"), p == f && (q += " w2ui-today");
                var r = m,
                    s = "",
                    t = "",
                    u = w2utils.formatDate(p, this.options.format);
                this.options.colored && void 0 !== this.options.colored[u] && (tmp = this.options.colored[u].split(":"), t = "background-color: " + tmp[0] + ";", s = "color: " + tmp[1] + ";"), l += '<td class="' + (this.inRange(u) ? "w2ui-date " : "w2ui-blocked") + q + '" style="' + s + t + '" date="' + u + '">' + r + "</td>", (n % 7 === 0 || 0 === g && 1 == n) && (l += "</tr><tr>"), m++
            }
            return l += "</tr></table>"
        },
        getYearHTML: function() {
            var a = w2utils.settings.shortmonths,
                b = "",
                c = "";
            for (var d in a) b += '<div class="w2ui-jump-month" name="' + d + '">' + a[d] + "</div>";
            for (var e = 1950; 2020 >= e; e++) c += '<div class="w2ui-jump-year" name="' + e + '">' + e + "</div>";
            return "<div>" + b + "</div><div>" + c + "</div>"
        },
        getHourHTML: function() {
            for (var a = [], b = "h24" == this.options.format ? !0 : !1, c = 0; 24 > c; c++) {
                var d = (c >= 12 && !b ? c - 12 : c) + ":00" + (b ? "" : 12 > c ? " am" : " pm");
                12 != c || b || (d = "12:00 pm"), a[Math.floor(c / 8)] || (a[Math.floor(c / 8)] = "");
                var e = this.fromMin(this.toMin(d)),
                    f = this.fromMin(this.toMin(d) + 59);
                a[Math.floor(c / 8)] += '<div class="' + (this.inRange(e) || this.inRange(f) ? "w2ui-time " : "w2ui-blocked") + '" hour="' + c + '">' + d + "</div>"
            }
            var g = '<div class="w2ui-calendar-time"><table><tr>    <td>' + a[0] + "</td>    <td>" + a[1] + "</td>    <td>" + a[2] + "</td></tr></table></div>";
            return g
        },
        getMinHTML: function(a) {
            "undefined" == typeof a && (a = 0);
            for (var b = "h24" == this.options.format ? !0 : !1, c = [], d = 0; 60 > d; d += 5) {
                var e = (a > 12 && !b ? a - 12 : a) + ":" + (10 > d ? 0 : "") + d + " " + (b ? "" : 12 > a ? "am" : "pm"),
                    f = 20 > d ? 0 : 40 > d ? 1 : 2;
                c[f] || (c[f] = ""), c[f] += '<div class="' + (this.inRange(e) ? "w2ui-time " : "w2ui-blocked") + '" min="' + d + '">' + e + "</div>"
            }
            var g = '<div class="w2ui-calendar-time"><table><tr>    <td>' + c[0] + "</td>    <td>" + c[1] + "</td>    <td>" + c[2] + "</td></tr></table></div>";
            return g
        },
        toMin: function(a) {
            if ("string" != typeof a) return null;
            var b = a.split(":");
            return 2 != b.length ? null : (b[0] = parseInt(b[0]), b[1] = parseInt(b[1]), -1 != a.indexOf("pm") && 12 != b[0] && (b[0] += 12), 60 * b[0] + b[1])
        },
        fromMin: function(a) {
            var b = "";
            a >= 1440 && (a %= 1440), 0 > a && (a = 1440 + a);
            var c = Math.floor(a / 60),
                d = (10 > a % 60 ? "0" : "") + a % 60;
            return b = -1 != this.options.format.indexOf("h24") ? c + ":" + d : (12 >= c ? c : c - 12) + ":" + d + " " + (c >= 12 ? "pm" : "am")
        }
    }, a.extend(b.prototype, w2utils.event), w2obj.field = b
}(jQuery),
function() {
    var w2form = function(a) {
        this.name = null, this.header = "", this.box = null, this.url = "", this.routeData = {}, this.formURL = "", this.formHTML = "", this.page = 0, this.recid = 0, this.fields = [], this.actions = {}, this.record = {}, this.original = {}, this.postData = {}, this.toolbar = {}, this.tabs = {}, this.style = "", this.focus = 0, this.msgNotJSON = w2utils.lang("Return data is not in JSON format."), this.msgAJAXerror = w2utils.lang("AJAX error. See console for more details."), this.msgRefresh = w2utils.lang("Refreshing..."), this.msgSaving = w2utils.lang("Saving..."), this.onRequest = null, this.onLoad = null, this.onValidate = null, this.onSubmit = null, this.onSave = null, this.onChange = null, this.onRender = null, this.onRefresh = null, this.onResize = null, this.onDestroy = null, this.onAction = null, this.onToolbar = null, this.onError = null, this.isGenerated = !1, this.last = {
            xhr: null
        }, $.extend(!0, this, w2obj.form, a)
    };
    $.fn.w2form = function(a) {
        if ("object" == typeof a || !a) {
            var b = this;
            if (!w2utils.checkName(a, "w2form")) return;
            var c = a.record,
                d = a.original,
                e = a.fields,
                f = a.toolbar,
                g = a.tabs,
                h = new w2form(a);
            if ($.extend(h, {
                    record: {},
                    original: {},
                    fields: [],
                    tabs: {},
                    toolbar: {},
                    handlers: []
                }), $.isArray(g)) {
                $.extend(!0, h.tabs, {
                    tabs: []
                });
                for (var i in g) {
                    var j = g[i];
                    h.tabs.tabs.push("object" == typeof j ? j : {
                        id: j,
                        caption: j
                    })
                }
            } else $.extend(!0, h.tabs, g);
            $.extend(!0, h.toolbar, f);
            for (var k in e) {
                var l = $.extend(!0, {}, e[k]);
                "undefined" == typeof l.name && "undefined" != typeof l.field && (l.name = l.field), "undefined" == typeof l.field && "undefined" != typeof l.name && (l.field = l.name), h.fields[k] = l
            }
            for (var k in c) h.record[k] = $.isPlainObject(c[k]) ? $.extend(!0, {}, c[k]) : c[k];
            for (var k in d) h.original[k] = $.isPlainObject(d[k]) ? $.extend(!0, {}, d[k]) : d[k];
            return b.length > 0 && (h.box = b[0]), "" != h.formURL ? $.get(h.formURL, function(a) {
                h.formHTML = a, h.isGenerated = !0, (0 != $(h.box).length || 0 != a.length) && ($(h.box).html(a), h.render(h.box))
            }) : "" != h.formHTML || (h.formHTML = 0 != $(this).length && "" != $.trim($(this).html()) ? $(this).html() : h.generateHTML()), w2ui[h.name] = h, "" == h.formURL && (-1 == String(h.formHTML).indexOf("w2ui-page") && (h.formHTML = '<div class="w2ui-page page-0">' + h.formHTML + "</div>"), $(h.box).html(h.formHTML), h.isGenerated = !0, h.render(h.box)), h
        }
        if (w2ui[$(this).attr("name")]) {
            var b = w2ui[$(this).attr("name")];
            return b[a].apply(b, Array.prototype.slice.call(arguments, 1)), this
        }
        console.log("ERROR: Method " + a + " does not exist on jQuery.w2form")
    }, w2form.prototype = {
        get: function(a, b) {
            if (0 === arguments.length) {
                var c = [];
                for (var d in this.fields) null != this.fields[d].name && c.push(this.fields[d].name);
                return c
            }
            for (var e in this.fields)
                if (this.fields[e].name == a) return b === !0 ? e : this.fields[e];
            return null
        },
        set: function(a, b) {
            for (var c in this.fields)
                if (this.fields[c].name == a) return $.extend(this.fields[c], b), this.refresh(), !0;
            return !1
        },
        reload: function(a) {
            var b = "object" != typeof this.url ? this.url : this.url.get;
            b && 0 != this.recid ? this.request(a) : "function" == typeof a && a()
        },
        clear: function() {
            this.recid = 0, this.record = {}, $().w2tag(), this.refresh()
        },
        error: function(a) {
            var b = this.trigger({
                target: this.name,
                type: "error",
                message: a,
                xhr: this.last.xhr
            });
            return b.isCancelled === !0 ? void("function" == typeof callBack && callBack()) : (setTimeout(function() {
                w2alert(a, "Error")
            }, 1), void this.trigger($.extend(b, {
                phase: "after"
            })))
        },
        validate: function(a) {
            "undefined" == typeof a && (a = !0), $().w2tag();
            var b = [];
            for (var c in this.fields) {
                var d = this.fields[c];
                switch (null == this.record[d.name] && (this.record[d.name] = ""), d.type) {
                    case "int":
                        this.record[d.name] && !w2utils.isInt(this.record[d.name]) && b.push({
                            field: d,
                            error: w2utils.lang("Not an integer")
                        });
                        break;
                    case "float":
                        this.record[d.name] && !w2utils.isFloat(this.record[d.name]) && b.push({
                            field: d,
                            error: w2utils.lang("Not a float")
                        });
                        break;
                    case "money":
                        this.record[d.name] && !w2utils.isMoney(this.record[d.name]) && b.push({
                            field: d,
                            error: w2utils.lang("Not in money format")
                        });
                        break;
                    case "color":
                    case "hex":
                        this.record[d.name] && !w2utils.isHex(this.record[d.name]) && b.push({
                            field: d,
                            error: w2utils.lang("Not a hex number")
                        });
                        break;
                    case "email":
                        this.record[d.name] && !w2utils.isEmail(this.record[d.name]) && b.push({
                            field: d,
                            error: w2utils.lang("Not a valid email")
                        });
                        break;
                    case "checkbox":
                        this.record[d.name] = 1 == this.record[d.name] ? 1 : 0;
                        break;
                    case "date":
                        d.options.format || (d.options.format = w2utils.settings.date_format), this.record[d.name] && !w2utils.isDate(this.record[d.name], d.options.format) && b.push({
                            field: d,
                            error: w2utils.lang("Not a valid date") + ": " + d.options.format
                        });
                        break;
                    case "list":
                    case "combo":
                        break;
                    case "enum":
                }
                var e = this.record[d.name];
                d.required && ("" === e || $.isArray(e) && 0 == e.length || $.isPlainObject(e) && $.isEmptyObject(e)) && b.push({
                    field: d,
                    error: w2utils.lang("Required field")
                }), d.equalto && this.record[d.name] != this.record[d.equalto] && b.push({
                    field: d,
                    error: w2utils.lang("Field should be equal to ") + d.equalto
                })
            }
            var f = this.trigger({
                phase: "before",
                target: this.name,
                type: "validate",
                errors: b
            });
            if (f.isCancelled !== !0) {
                if (a)
                    for (var g in f.errors) {
                        var h = f.errors[g];
                        "radio" == h.field.type ? $($(h.field.el).parents("div")[0]).w2tag(h.error, {
                            "class": "w2ui-error"
                        }) : -1 != ["enum", "file"].indexOf(h.field.type) ? ! function(a) {
                            setTimeout(function() {
                                var b = $(a.field.el).data("w2field").helpers.multi;
                                $(a.field.el).w2tag(a.error), $(b).addClass("w2ui-error")
                            }, 1)
                        }(h) : $(h.field.el).w2tag(h.error, {
                            "class": "w2ui-error"
                        }), this.goto(b[0].field.page)
                    }
                return this.trigger($.extend(f, {
                    phase: "after"
                })), b
            }
        },
        getChanges: function() {
            var a = function(b, c, d) {
                for (var e in b) "object" == typeof b[e] ? (d[e] = a(b[e], c[e] || {}, {}), (!d[e] || $.isEmptyObject(d[e])) && delete d[e]) : b[e] != c[e] && (d[e] = b[e]);
                return d
            };
            return a(this.record, this.original, {})
        },
        request: function(postData, callBack) {
            var obj = this;
            if ("function" == typeof postData && (callBack = postData, postData = null), ("undefined" == typeof postData || null == postData) && (postData = {}), this.url && ("object" != typeof this.url || this.url.get)) {
                (null == this.recid || "undefined" == typeof this.recid) && (this.recid = 0);
                var params = {};
                params.cmd = "get-record", params.recid = this.recid, $.extend(params, this.postData), $.extend(params, postData);
                var eventData = this.trigger({
                    phase: "before",
                    type: "request",
                    target: this.name,
                    url: this.url,
                    postData: params
                });
                if (eventData.isCancelled === !0) return void("function" == typeof callBack && callBack({
                    status: "error",
                    message: "Request aborted."
                }));
                this.record = {}, this.original = {}, this.lock(this.msgRefresh);
                var url = eventData.url;
                if ("object" == typeof eventData.url && eventData.url.get && (url = eventData.url.get), this.last.xhr) try {
                    this.last.xhr.abort()
                } catch (e) {}
                if (!$.isEmptyObject(obj.routeData)) {
                    var info = w2utils.parseRoute(url);
                    if (info.keys.length > 0)
                        for (var k = 0; k < info.keys.length; k++) null != obj.routeData[info.keys[k].name] && (url = url.replace(new RegExp(":" + info.keys[k].name, "g"), obj.routeData[info.keys[k].name]))
                }
                var ajaxOptions = {
                    type: "POST",
                    url: url,
                    data: eventData.postData,
                    dataType: "text"
                };
                "HTTP" == w2utils.settings.dataType && (ajaxOptions.data = String($.param(ajaxOptions.data, !1)).replace(/%5B/g, "[").replace(/%5D/g, "]")), "RESTFULL" == w2utils.settings.dataType && (ajaxOptions.type = "GET", ajaxOptions.data = String($.param(ajaxOptions.data, !1)).replace(/%5B/g, "[").replace(/%5D/g, "]")), "JSON" == w2utils.settings.dataType && (ajaxOptions.type = "POST", ajaxOptions.data = JSON.stringify(ajaxOptions.data), ajaxOptions.contentType = "application/json"), this.last.xhr = $.ajax(ajaxOptions).done(function(data, status, xhr) {
                    obj.unlock();
                    var eventData = obj.trigger({
                        phase: "before",
                        target: obj.name,
                        type: "load",
                        xhr: xhr
                    });
                    if (eventData.isCancelled === !0) return void("function" == typeof callBack && callBack({
                        status: "error",
                        message: "Request aborted."
                    }));
                    var data, responseText = obj.last.xhr.responseText;
                    if ("error" != status) {
                        if ("undefined" != typeof responseText && "" != responseText) {
                            if ("object" == typeof responseText) data = responseText;
                            else try {
                                eval("data = " + responseText)
                            } catch (e) {}
                            "undefined" == typeof data && (data = {
                                status: "error",
                                message: obj.msgNotJSON,
                                responseText: responseText
                            }), "error" == data.status ? obj.error(data.message) : (obj.record = $.extend({}, data.record), obj.original = $.extend({}, data.record))
                        }
                    } else obj.error("AJAX Error " + xhr.status + ": " + xhr.statusText), data = {
                        status: "error",
                        message: obj.msgAJAXerror,
                        responseText: responseText
                    };
                    obj.trigger($.extend(eventData, {
                        phase: "after"
                    })), obj.refresh(), "function" == typeof callBack && callBack(data)
                }).fail(function(a, b, c) {
                    var d = {
                            status: b,
                            error: c,
                            rawResponseText: a.responseText
                        },
                        e = obj.trigger({
                            phase: "before",
                            type: "error",
                            error: d,
                            xhr: a
                        });
                    if (e.isCancelled !== !0) {
                        if ("abort" != b) {
                            var f;
                            try {
                                f = $.parseJSON(a.responseText)
                            } catch (g) {}
                            console.log("ERROR: Server communication failed.", "\n   EXPECTED:", {
                                status: "success",
                                items: [{
                                    id: 1,
                                    text: "item"
                                }]
                            }, "\n         OR:", {
                                status: "error",
                                message: "error message"
                            }, "\n   RECEIVED:", "object" == typeof f ? f : a.responseText)
                        }
                        obj.trigger($.extend(e, {
                            phase: "after"
                        }))
                    }
                }), this.trigger($.extend(eventData, {
                    phase: "after"
                }))
            }
        },
        submit: function(a, b) {
            return this.save(a, b)
        },
        save: function(postData, callBack) {
            var obj = this;
            $(this.box).find(":focus").change(), "function" == typeof postData && (callBack = postData, postData = null);
            var errors = obj.validate(!0);
            if (0 === errors.length) {
                if (("undefined" == typeof postData || null == postData) && (postData = {}), !obj.url || "object" == typeof obj.url && !obj.url.save) return void console.log("ERROR: Form cannot be saved because no url is defined.");
                obj.lock(obj.msgSaving + ' <span id="' + obj.name + '_progress"></span>'), setTimeout(function() {
                    var params = {};
                    params.cmd = "save-record", params.recid = obj.recid, $.extend(params, obj.postData), $.extend(params, postData), params.record = $.extend(!0, {}, obj.record);
                    var eventData = obj.trigger({
                        phase: "before",
                        type: "submit",
                        target: obj.name,
                        url: obj.url,
                        postData: params
                    });
                    if (eventData.isCancelled !== !0) {
                        var url = eventData.url;
                        if ("object" == typeof eventData.url && eventData.url.save && (url = eventData.url.save), obj.last.xhr) try {
                            obj.last.xhr.abort()
                        } catch (e) {}
                        if (!$.isEmptyObject(obj.routeData)) {
                            var info = w2utils.parseRoute(url);
                            if (info.keys.length > 0)
                                for (var k = 0; k < info.keys.length; k++) null != obj.routeData[info.keys[k].name] && (url = url.replace(new RegExp(":" + info.keys[k].name, "g"), obj.routeData[info.keys[k].name]))
                        }
                        var ajaxOptions = {
                            type: "POST",
                            url: url,
                            data: eventData.postData,
                            dataType: "text",
                            xhr: function() {
                                var a = new window.XMLHttpRequest;
                                return a.upload.addEventListener("progress", function(a) {
                                    if (a.lengthComputable) {
                                        var b = Math.round(a.loaded / a.total * 100);
                                        $("#" + obj.name + "_progress").text("" + b + "%")
                                    }
                                }, !1), a
                            }
                        };
                        "HTTP" == w2utils.settings.dataType && (ajaxOptions.data = String($.param(ajaxOptions.data, !1)).replace(/%5B/g, "[").replace(/%5D/g, "]")), "RESTFULL" == w2utils.settings.dataType && (0 != obj.recid && (ajaxOptions.type = "PUT"), ajaxOptions.data = String($.param(ajaxOptions.data, !1)).replace(/%5B/g, "[").replace(/%5D/g, "]")), "JSON" == w2utils.settings.dataType && (ajaxOptions.type = "POST", ajaxOptions.data = JSON.stringify(ajaxOptions.data), ajaxOptions.contentType = "application/json"), obj.last.xhr = $.ajax(ajaxOptions).done(function(data, status, xhr) {
                            obj.unlock();
                            var eventData = obj.trigger({
                                phase: "before",
                                target: obj.name,
                                type: "save",
                                xhr: xhr,
                                status: status
                            });
                            if (eventData.isCancelled !== !0) {
                                var data, responseText = xhr.responseText;
                                if ("error" != status) {
                                    if ("undefined" != typeof responseText && "" != responseText) {
                                        if ("object" == typeof responseText) data = responseText;
                                        else try {
                                            eval("data = " + responseText)
                                        } catch (e) {}
                                        "undefined" == typeof data && (data = {
                                            status: "error",
                                            message: obj.msgNotJSON,
                                            responseText: responseText
                                        }), "error" == data.status ? obj.error(data.message) : obj.original = $.extend({}, obj.record)
                                    }
                                } else obj.error("AJAX Error " + xhr.status + ": " + xhr.statusText), data = {
                                    status: "error",
                                    message: obj.msgAJAXerror,
                                    responseText: responseText
                                };
                                obj.trigger($.extend(eventData, {
                                    phase: "after"
                                })), obj.refresh(), "success" == data.status && "function" == typeof callBack && callBack(data)
                            }
                        }).fail(function(a, b, c) {
                            var d = {
                                    status: b,
                                    error: c,
                                    rawResponseText: a.responseText
                                },
                                e = obj.trigger({
                                    phase: "before",
                                    type: "error",
                                    error: d,
                                    xhr: a
                                });
                            e.isCancelled !== !0 && (console.log("ERROR: server communication failed. The server should return", {
                                status: "success"
                            }, "OR", {
                                status: "error",
                                message: "error message"
                            }, ", instead the AJAX request produced this: ", d), obj.trigger($.extend(e, {
                                phase: "after"
                            })))
                        }), obj.trigger($.extend(eventData, {
                            phase: "after"
                        }))
                    }
                }, 50)
            }
        },
        lock: function() {
            var a = $(this.box).find("> div:first-child"),
                b = Array.prototype.slice.call(arguments, 0);
            b.unshift(a), w2utils.lock.apply(window, b)
        },
        unlock: function() {
            var a = this;
            setTimeout(function() {
                w2utils.unlock(a.box)
            }, 25)
        },
        "goto": function(a) {
            "undefined" != typeof a && (this.page = a), $(this.box).data("auto-size") === !0 && $(this.box).height(0), this.refresh()
        },
        generateHTML: function() {
            var a, b = [],
                c = "";
            for (var d in this.fields) {
                var e = "",
                    f = this.fields[d];
                "undefined" == typeof f.html && (f.html = {}), f.html = $.extend(!0, {
                    caption: "",
                    span: 6,
                    attr: "",
                    text: "",
                    page: 0
                }, f.html), "undefined" == typeof a && (a = f.html.page), "" == f.html.caption && (f.html.caption = f.name);
                var g = '<input name="' + f.name + '" type="text" ' + f.html.attr + "/>";
                ("pass" === f.type || "password" === f.type) && (g = '<input name="' + f.name + '" type = "password" ' + f.html.attr + "/>"), "checkbox" == f.type && (g = '<input name="' + f.name + '" type="checkbox" ' + f.html.attr + "/>"), "textarea" == f.type && (g = '<textarea name="' + f.name + '" ' + f.html.attr + "></textarea>"), "toggle" == f.type && (g = '<input name="' + f.name + '" type="checkbox" ' + f.html.attr + ' class="w2ui-toggle"/><div><div></div></div>'), f.html.group && ("" != c && (e += "\n   </div>"), e += '\n   <div class="w2ui-group-title">' + f.html.group + '</div>\n   <div class="w2ui-group">', c = f.html.group), f.html.page != a && "" != c && (b[b.length - 1] += "\n   </div>", c = ""), e += '\n      <div class="w2ui-field ' + ("undefined" != typeof f.html.span ? "w2ui-span" + f.html.span : "") + '">\n         <label>' + w2utils.lang(f.html.caption) + "</label>\n         <div>" + g + w2utils.lang(f.html.text) + "</div>\n      </div>", "undefined" == typeof b[f.html.page] && (b[f.html.page] = ""), b[f.html.page] += e, a = f.html.page
            }
            if ("" != c && (b[b.length - 1] += "\n   </div>"), this.tabs.tabs)
                for (var h = 0; h < this.tabs.tabs.length; h++) "undefined" == typeof b[h] && (b[h] = "");
            for (var i in b) b[i] = '<div class="w2ui-page page-' + i + '">' + b[i] + "\n</div>";
            var j = "";
            if (!$.isEmptyObject(this.actions)) {
                var k = "";
                j += '\n<div class="w2ui-buttons">';
                for (var l in this.actions) k = -1 != ["save", "update", "create"].indexOf(l.toLowerCase()) ? "btn-green" : "", j += '\n    <button name="' + l + '" class="btn ' + k + '">' + w2utils.lang(l) + "</button>";
                j += "\n</div>"
            }
            return b.join("") + j
        },
        action: function(a, b) {
            var c = this.trigger({
                phase: "before",
                target: a,
                type: "action",
                originalEvent: b
            });
            c.isCancelled !== !0 && ("function" == typeof this.actions[a] && this.actions[a].call(this, b), this.trigger($.extend(c, {
                phase: "after"
            })))
        },
        resize: function() {
            function a() {
                d.width($(b.box).width()).height($(b.box).height()), f.css("top", "" != b.header ? w2utils.getSize(e, "height") : 0), g.css("top", ("" != b.header ? w2utils.getSize(e, "height") : 0) + ("object" == typeof b.toolbar && $.isArray(b.toolbar.items) && b.toolbar.items.length > 0 ? w2utils.getSize(f, "height") : 0)), h.css("top", ("" != b.header ? w2utils.getSize(e, "height") : 0) + ("object" == typeof b.toolbar && $.isArray(b.toolbar.items) && b.toolbar.items.length > 0 ? w2utils.getSize(f, "height") + 5 : 0) + ("object" == typeof b.tabs && $.isArray(b.tabs.tabs) && b.tabs.tabs.length > 0 ? w2utils.getSize(g, "height") + 5 : 0)), h.css("bottom", k.length > 0 ? w2utils.getSize(k, "height") : 0)
            }
            var b = this,
                c = this.trigger({
                    phase: "before",
                    target: this.name,
                    type: "resize"
                });
            if (c.isCancelled !== !0) {
                var d = $(this.box).find("> div"),
                    e = $(this.box).find("> div .w2ui-form-header"),
                    f = $(this.box).find("> div .w2ui-form-toolbar"),
                    g = $(this.box).find("> div .w2ui-form-tabs"),
                    h = $(this.box).find("> div .w2ui-page"),
                    i = $(this.box).find("> div .w2ui-page.page-" + this.page),
                    j = $(this.box).find("> div .w2ui-page.page-" + this.page + " > div"),
                    k = $(this.box).find("> div .w2ui-buttons");
                a(), (0 == parseInt($(this.box).height()) || $(this.box).data("auto-size") === !0) && ($(this.box).height((e.length > 0 ? w2utils.getSize(e, "height") : 0) + ("object" == typeof this.tabs && $.isArray(this.tabs.tabs) && this.tabs.tabs.length > 0 ? w2utils.getSize(g, "height") : 0) + ("object" == typeof this.toolbar && $.isArray(this.toolbar.items) && this.toolbar.items.length > 0 ? w2utils.getSize(f, "height") : 0) + (h.length > 0 ? w2utils.getSize(j, "height") + w2utils.getSize(i, "+height") + 12 : 0) + (k.length > 0 ? w2utils.getSize(k, "height") : 0)), $(this.box).data("auto-size", !0)), a(), b.trigger($.extend(c, {
                    phase: "after"
                }))
            }
        },
        refresh: function() {
            var a = (new Date).getTime(),
                b = this;
            if (this.box && this.isGenerated && "undefined" != typeof $(this.box).html()) {
                $(this.box).find("input, textarea, select").each(function(a, c) {
                    var d = $(c).attr("undefined" != typeof $(c).attr("name") ? "name" : "id"),
                        e = b.get(d);
                    if (e) {
                        var f = $(c).parents(".w2ui-page");
                        if (f.length > 0)
                            for (var g = 0; 100 > g; g++)
                                if (f.hasClass("page-" + g)) {
                                    e.page = g;
                                    break
                                }
                    }
                });
                var c = this.trigger({
                    phase: "before",
                    target: this.name,
                    type: "refresh",
                    page: this.page
                });
                if (c.isCancelled !== !0) {
                    $(this.box).find(".w2ui-page").hide(), $(this.box).find(".w2ui-page.page-" + this.page).show(), $(this.box).find(".w2ui-form-header").html(this.header), "object" == typeof this.tabs && $.isArray(this.tabs.tabs) && this.tabs.tabs.length > 0 ? ($("#form_" + this.name + "_tabs").show(), this.tabs.active = this.tabs.tabs[this.page].id, this.tabs.refresh()) : $("#form_" + this.name + "_tabs").hide(), "object" == typeof this.toolbar && $.isArray(this.toolbar.items) && this.toolbar.items.length > 0 ? ($("#form_" + this.name + "_toolbar").show(), this.toolbar.refresh()) : $("#form_" + this.name + "_toolbar").hide();
                    for (var d in this.fields) {
                        var e = this.fields[d];
                        "undefined" == typeof e.name && "undefined" != typeof e.field && (e.name = e.field), "undefined" == typeof e.field && "undefined" != typeof e.name && (e.field = e.name), e.$el = $(this.box).find('[name="' + String(e.name).replace(/\\/g, "\\\\") + '"]'), e.el = e.$el[0], "undefined" == typeof e.el && console.log('ERROR: Cannot associate field "' + e.name + '" with html control. Make sure html control exists with the same name.'), e.el && (e.el.id = e.name);
                        var f = $(e).data("w2field");
                        f && f.clear(), $(e.$el).off("change").on("change", function() {
                            var a = this.value,
                                c = b.record[this.name] ? b.record[this.name] : "",
                                d = b.get(this.name);
                            if (-1 != ["list", "enum", "file"].indexOf(d.type) && $(this).data("selected")) {
                                var e = $(this).data("selected"),
                                    f = b.record[this.name];
                                if ($.isArray(e)) {
                                    a = [];
                                    for (var g in e) a[g] = $.extend(!0, {}, e[g])
                                }
                                if ($.isPlainObject(e) && (a = $.extend(!0, {}, e)), $.isArray(f)) {
                                    c = [];
                                    for (var g in f) c[g] = $.extend(!0, {}, f[g])
                                }
                                $.isPlainObject(f) && (c = $.extend(!0, {}, f))
                            }
                            if ("toggle" == d.type && (a = $(this).prop("checked") ? 1 : 0), -1 != ["int", "float", "percent", "money", "currency"].indexOf(d.type) && (a = $(this).data("w2field").clean(a)), a !== c) {
                                var h = b.trigger({
                                    phase: "before",
                                    target: this.name,
                                    type: "change",
                                    value_new: a,
                                    value_previous: c
                                });
                                if (h.isCancelled === !0) return void $(this).val(b.record[this.name]);
                                var i = this.value;
                                if ("select" == this.type && (i = this.value), "checkbox" == this.type && (i = this.checked ? !0 : !1), "radio" == this.type && d.$el.each(function(a, b) {
                                        b.checked && (i = b.value)
                                    }), -1 != ["int", "float", "percent", "money", "currency", "list", "combo", "enum", "file", "toggle"].indexOf(d.type) && (i = a), -1 != ["enum", "file"].indexOf(d.type) && i.length > 0) {
                                    var j = $(d.el).data("w2field").helpers.multi;
                                    $(j).removeClass("w2ui-error")
                                }
                                b.record[this.name] = i, b.trigger($.extend(h, {
                                    phase: "after"
                                }))
                            }
                        }), e.required ? $(e.el).parent().parent().addClass("w2ui-required") : $(e.el).parent().parent().removeClass("w2ui-required")
                    }
                    $(this.box).find("button, input[type=button]").each(function(a, c) {
                        $(c).off("click").on("click", function(a) {
                            var c = this.value;
                            this.id && (c = this.id), this.name && (c = this.name), b.action(c, a)
                        })
                    });
                    for (var d in this.fields) {
                        var e = this.fields[d],
                            g = "undefined" != typeof this.record[e.name] ? this.record[e.name] : "";
                        if (e.el) switch (e.type = String(e.type).toLowerCase(), e.options || (e.options = {}), e.type) {
                            case "text":
                            case "textarea":
                            case "email":
                            case "pass":
                            case "password":
                                e.el.value = g;
                                break;
                            case "int":
                            case "float":
                            case "money":
                            case "currency":
                            case "percent":
                            case "hex":
                            case "alphanumeric":
                            case "color":
                            case "date":
                            case "time":
                                e.el.value = g, $(e.el).w2field($.extend({}, e.options, {
                                    type: e.type
                                }));
                                break;
                            case "toggle":
                                w2utils.isFloat(g) && (g = parseFloat(g)), $(e.el).prop("checked", g ? !0 : !1), this.record[e.name] = g ? 1 : 0;
                                break;
                            case "list":
                            case "combo":
                                if ("list" == e.type) {
                                    var h = $.isPlainObject(g) ? g.id : g,
                                        i = e.options.items;
                                    $.isArray(i) && i.length > 0 && !$.isPlainObject(i[0]) && (e.options.items = w2obj.field.prototype.normMenu(i));
                                    for (var j in e.options.items) {
                                        var k = e.options.items[j];
                                        if (k.id == h) {
                                            g = $.extend(!0, {}, k), b.record[e.name] = g;
                                            break
                                        }
                                    }
                                } else e.el.value = "combo" != e.type || $.isPlainObject(g) ? $.isPlainObject(g) && "undefined" != typeof g.text ? g.text : "" : g;
                                $.isPlainObject(g) || (g = {}), $(e.el).w2field($.extend({}, e.options, {
                                    type: e.type,
                                    selected: g
                                }));
                                break;
                            case "enum":
                            case "file":
                                $.isArray(g) || (g = []), $(e.el).w2field($.extend({}, e.options, {
                                    type: e.type,
                                    selected: g
                                }));
                                break;
                            case "select":
                                var i = e.options.items;
                                if ("undefined" != typeof i && i.length > 0) {
                                    i = w2obj.field.prototype.normMenu(i), $(e.el).html("");
                                    for (var l in i) $(e.el).append('<option value="' + i[l].id + '">' + i[l].text + "</option")
                                }
                                $(e.el).val(g);
                                break;
                            case "radio":
                                $(e.$el).prop("checked", !1).each(function(a, b) {
                                    $(b).val() == g && $(b).prop("checked", !0)
                                });
                                break;
                            case "checkbox":
                                $(e.el).prop("checked", g ? !0 : !1);
                                break;
                            default:
                                $(e.el).w2field($.extend({}, e.options, {
                                    type: e.type
                                }))
                        }
                    }
                    for (var f = $(this.box).find(".w2ui-page"), j = 0; j < f.length; j++) $(f[j]).find("> *").length > 1 && $(f[j]).wrapInner("<div></div>");
                    return this.trigger($.extend(c, {
                        phase: "after"
                    })), this.resize(), (new Date).getTime() - a
                }
            }
        },
        render: function(a) {
            function b() {
                var a = $(d.box).find("input, select, textarea");
                a.length > d.focus && a[d.focus].focus()
            }
            var c = (new Date).getTime(),
                d = this;
            if ("object" == typeof a && ($(this.box).find("#form_" + this.name + "_tabs").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-form").html(""), this.box = a), this.isGenerated && this.box) {
                var e = this.trigger({
                    phase: "before",
                    target: this.name,
                    type: "render",
                    box: "undefined" != typeof a ? a : this.box
                });
                if (e.isCancelled !== !0) {
                    $.isEmptyObject(this.original) && !$.isEmptyObject(this.record) && (this.original = $.extend(!0, {}, this.record));
                    var f = "<div>" + ("" != this.header ? '<div class="w2ui-form-header">' + this.header + "</div>" : "") + '    <div id="form_' + this.name + '_toolbar" class="w2ui-form-toolbar"></div>    <div id="form_' + this.name + '_tabs" class="w2ui-form-tabs"></div>' + this.formHTML + "</div>";
                    $(this.box).attr("name", this.name).addClass("w2ui-reset w2ui-form").html(f), $(this.box).length > 0 && ($(this.box)[0].style.cssText += this.style), "function" != typeof this.toolbar.render && (this.toolbar = $().w2toolbar($.extend({}, this.toolbar, {
                        name: this.name + "_toolbar",
                        owner: this
                    })), this.toolbar.on("click", function(a) {
                        var b = d.trigger({
                            phase: "before",
                            type: "toolbar",
                            target: a.target,
                            originalEvent: a
                        });
                        b.isCancelled !== !0 && d.trigger($.extend(b, {
                            phase: "after"
                        }))
                    })), "object" == typeof this.toolbar && "function" == typeof this.toolbar.render && this.toolbar.render($("#form_" + this.name + "_toolbar")[0]), "function" != typeof this.tabs.render && (this.tabs = $().w2tabs($.extend({}, this.tabs, {
                        name: this.name + "_tabs",
                        owner: this
                    })), this.tabs.on("click", function(a) {
                        d.goto(this.get(a.target, !0))
                    })), "object" == typeof this.tabs && "function" == typeof this.tabs.render && this.tabs.render($("#form_" + this.name + "_tabs")[0]), this.trigger($.extend(e, {
                        phase: "after"
                    })), this.resize();
                    var g = "object" != typeof this.url ? this.url : this.url.get;
                    return g && 0 != this.recid ? this.request() : this.refresh(), 0 == $(".w2ui-layout").length && (this.tmp_resize = function() {
                        w2ui[d.name].resize()
                    }, $(window).off("resize", "body").on("resize", "body", this.tmp_resize)), setTimeout(function() {
                        d.resize(), d.refresh()
                    }, 150), this.focus >= 0 && setTimeout(b, 500), (new Date).getTime() - c
                }
            }
        },
        destroy: function() {
            var a = this.trigger({
                phase: "before",
                target: this.name,
                type: "destroy"
            });
            a.isCancelled !== !0 && ("object" == typeof this.toolbar && this.toolbar.destroy && this.toolbar.destroy(), "object" == typeof this.tabs && this.tabs.destroy && this.tabs.destroy(), $(this.box).find("#form_" + this.name + "_tabs").length > 0 && $(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-form").html(""), delete w2ui[this.name], this.trigger($.extend(a, {
                phase: "after"
            })), $(window).off("resize", "body"))
        }
    }, $.extend(w2form.prototype, w2utils.event), w2obj.form = w2form
}();