/*!
	git revision: 9a0ff6abf9f463945483f3559d53f2839176c877
	build num: 8882
	branch name: release-branch-rm-5.0.0
	built @ 5/3/2017, 3:44:38 PM CDT
*/
! function(a) {
    "use strict";
    "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    });
    var b, c, d, e, f, g, h, i, j, k, l = "backgroundImageUrl",
        m = "backgroundImageId",
        n = "newUserWelcomeMessage",
        o = "newUserWelcomeMessageDescription",
        p = "returningUserWelcomeMessage",
        q = "logoUrl",
        r = "displayName",
        s = "VMECheckoutIframe",
        t = "Visa Checkout",
        u = "Learn more about Visa Checkout",
        v = "backgroundURL",
        w = "cdc",
        x = "euIP",
        y = "CxoCheckout",
        z = "VmeGtm",
        A = "visaCheckout",
        B = {
            SMALL: 154,
            NORMAL: 213,
            LARGE: 425
        },
        C = !0,
        D = !1,
        E = {
            normalizeClass: function(a) {
                return a.replace(/\s+/g, " ").trim()
            },
            hasClass: function(a, b) {
                var c = !1;
                return E.normalizeClass(b).split(" ").forEach(function(b) {
                    c = c || (b instanceof RegExp ? b : new RegExp(b)).test(a.className)
                }), c
            },
            debug: function() {
                return /^(.*;)?\s*_debug\s*=/.test(document.cookie)
            },
            addClass: function(a, b) {
                if (!E.hasClass(a, b)) {
                    var c = E.normalizeClass(a.className + " " + b);
                    return a.className = c, a
                }
            },
            removeClass: function(a, b) {
                if (E.hasClass(a, b)) return E.normalizeClass(b).split(" ").forEach(function(b) {
                    var c = a.className.replace(new RegExp("(\\s+)?" + b + "(\\s+)?"), " ");
                    a.className = c.trim()
                }), a
            },
            addEvent: function(a, b, c) {
                return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c), a
            },
            removeEvent: function(a, b, c) {
                return a.removeEventListener && a.removeEventListener(b, c, !1), a.detachEvent && a.detachEvent("on" + b, c), a
            },
            debounce: function(a, b, c) {
                var d;
                return function() {
                    function e() {
                        c || a.apply(f, g), d = null
                    }
                    var f = this,
                        g = arguments;
                    d ? clearTimeout(d) : c && a.apply(f, g), d = setTimeout(e, b || 100)
                }
            },
            copyKeys: function(a, b) {
                var c, d, e, f = arguments.length - 1;
                for (d = 0; d < f; d++) {
                    c = arguments[d + 1];
                    for (e in c) Object.hasOwnProperty.call(c, e) && (a[e] = c[e])
                }
                return a
            },
            deepCopyObject: function(a) {
                var b, c;
                if (!a) return a;
                if (a instanceof Array) {
                    var d = a.length;
                    for (b = [], c = 0; c < d; c++) b[c] = E.deepCopyObject(a[c])
                } else if ("object" == typeof a) {
                    b = {};
                    for (c in a) Object.hasOwnProperty.call(a, c) && (b[c] = E.deepCopyObject(a[c]))
                } else b = a;
                return b
            },
            getBoundingClientRect: function(a) {
                var b = a.getBoundingClientRect(),
                    c = {
                        top: b.top,
                        bottom: b.bottom,
                        left: b.left,
                        right: b.right,
                        width: b.width || b.right - b.left,
                        height: b.height || b.bottom - b.top
                    };
                return c
            },
            param: function(a, b) {
                a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var c, d = new RegExp("[\\?&]" + a + "=([^&#]*)");
                return b = b || window.location.search, c = d.exec(b), null === c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "))
            },
            updateQueryStringParameter: function(a, b, c) {
                var d = new RegExp("([?&])" + b + "=.*?(&|#|$)", "i");
                if (void 0 === c) return a.match(d) ? a.replace(d, "$1$2") : a;
                if (a.match(d)) return a.replace(d, "$1" + b + "=" + c + "$2");
                var e = "";
                a.indexOf("#") !== -1 && (e = a.replace(/.*#/, "#"), a = a.replace(/#.*/, ""));
                var f = a.indexOf("?") !== -1 ? "&" : "?";
                return a + f + b + "=" + c + e
            },
            isIOSAndroid: function() {
                return /iPad|iPhone|iPod|Android/.test(navigator.userAgent) && !window.MSStream
            },
            getVisitId: function() {
                try {
                    return sessionStorage.getItem("visitId")
                } catch (a) {
                    return ""
                }
            }
        },
        F = function() {
            function a() {
                var a = window.navigator.userAgent;
                return a ? a.toLowerCase() : ""
            }

            function b() {
                return !!window.chrome
            }

            function c() {
                var a = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                return !!a && parseInt(a[2], 10)
            }

            function d() {
                var b = a();
                return b.indexOf("android") > -1 && b.indexOf("mozilla/5.0") > -1 && b.indexOf("applewebkit") > -1
            }

            function e() {
                return U
            }

            function f() {
                return d() && b() && c() >= 57
            }

            function g() {
                if (oa && ra) {
                    var a = {
                            vInitRequest: Vb(),
                            merchantConfig: i,
                            correlationId: k,
                            visitId: E.getVisitId(),
                            isCXOEnabled: e(),
                            isCobrandEnabled: h(),
                            cxoEnvConfig: W
                        },
                        b = "setCxoMerchantConfig--" + JSON.stringify(a);
                    Ub(b, y)
                }
            }

            function h() {
                return V
            }

            function j() {
                var a, b = l();
                for (a = 0; a < b.length; a++) {
                    var c = b[a].src;
                    if (c) {
                        var d = E.param("cobrand", c),
                            e = !d || "false" != d.toLowerCase() && 0 != d.toLowerCase();
                        h() && !e ? b[a].src = E.updateQueryStringParameter(c, "cobrand", "true") : !h() && e && (b[a].src = E.updateQueryStringParameter(c, "cobrand", "false"))
                    }
                }
            }

            function l() {
                var a = window.parent.document.querySelectorAll(".v-button");
                return a
            }

            function m() {
                try {
                    var a = n(),
                        b = {};
                    for (var c in a) a[c].isLinked === !0 && (b[c] = a[c])
                } catch (a) {
                    console.error(a)
                }
                return b
            }

            function n() {
                try {
                    return Object.keys(X).length ? JSON.parse(X) : {}
                } catch (a) {
                    return console.error(a), {}
                }
            }

            function o() {
                return Y
            }

            function p(a) {
                var b = "sendGTMEventForCheckoutButton--" + JSON.stringify({
                    selectedPay: a,
                    buttonType: ka.vcopParams.buttonType
                });
                Ub(b, y)
            }

            function q() {
                sb(C), D = !0, Ub("saveCardArt--{}", y)
            }

            function r() {
                D && (Ub("replaceCardArt--{}", y), D = !1)
            }
            return {
                isCXOSupported: e,
                isCobrandSupported: h,
                flipButtonState: j,
                getLastPay: o,
                getLinkedPays: n,
                getAvailableWallets: m,
                launchMiniRxo: q,
                replaceCardArt: r,
                sendCheckoutButtonGTMEvent: p,
                isCXOEligibleDevice: f,
                sendMerchantConfigToCXO: g
            }
        }(),
        G = function() {
            function a() {
                return Ka() + u + Wa("parentUrl", J.parentUrl, !0)
            }

            function b(a) {
                var b = document.getElementById(t).contentWindow;
                b.postMessage(a, Ka())
            }

            function c() {
                return /^(.*;)?\s*_debug\s*=/.test(document.cookie)
            }

            function d(a) {
                var b = "body." + z + " {overflow:hidden !important; position: fixed; width: 100%; height:100%;}",
                    c = document.createElement("style");
                c.type = "text/css", c.styleSheet ? c.styleSheet.cssText = b : c.appendChild(document.createTextNode(b)), a.appendChild(c), E.addClass(document.body, z)
            }

            function e() {
                var a = F.getLinkedPays(),
                    b = !!document.getElementById(r),
                    c = a && Object.keys(a).length > 0;
                return c && !b
            }

            function f() {
                E.removeClass(document.body, z)
            }

            function g() {
                var a, b;
                return a = "#" + t + "." + t + "{height: 100%; /*height: 100vh;*/ width: 100%; width: 100vw;} body.pay-selector {overflow:hidden;}", b = document.createElement("style"), b.type = "text/css", b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a)), b
            }

            function h() {
                var a = document.createElement("div"),
                    b = document.createElement("iframe"),
                    c = {
                        visibility: "",
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 999999
                    };
                b.frameBorder = 0, b.title = s, b.id = t, b.className = t, a.id = r, a.name = s, a.appendChild(b), d(a);
                for (var e in c) c.hasOwnProperty(e) && (a.style[e] = c[e]);
                return document.body.appendChild(a), b.focus(), a
            }

            function i() {
                if (e()) {
                    var b = h();
                    b.appendChild(g());
                    var c = b.firstChild;
                    c.src = a(), document.body.appendChild(b), c.focus()
                } else q()
            }

            function j() {
                var a = document.getElementById(r);
                a.parentElement === document.body && document.body.removeChild(a), f()
            }

            function l() {
                var a = {
                    mode: y || x,
                    lastPay: Z || F.getLastPay(),
                    lastSelectedPay: Z,
                    linkedPays: F.getLinkedPays(),
                    payErrors: w
                };
                c ? console.log(JSON.stringify(a)) : null, b(v.FETCHED_LAUNCHER_DATA + "--" + JSON.stringify(a))
            }

            function m(a) {
                j(), a.pay === A ? (ib(a.pay), F.launchMiniRxo()) : (console.log("Launching", a.pay), hb(a.pay, {
                    triggerGtmVButtonClick: !1
                }))
            }

            function n(a) {
                try {
                    zb(a)
                } finally {
                    k = null, wb()
                }
            }

            function o() {
                y = "CHANGE", wb(), i()
            }

            function p(a) {
                w[a.payName] = a.reasonCode, wb(), i()
            }

            function q() {
                Bb({}, "Something went wrong. Unable to open Wallet Selector.")
            }
            var r = "pay-selector",
                s = "Pay Selector",
                t = "pay-selector-frame",
                u = "/checkout-widget/launcher",
                v = {
                    FETCH_LAUNCHER_DATA: "cxo:pay-selector:fetchLauncherData",
                    FETCHED_LAUNCHER_DATA: "cxo:pay-selector:fetchedLauncherData",
                    SUCCESS_PAY: "cxo:pay-selector:successPay",
                    SELECT_PAY: "cxo:pay-selector:selectPay",
                    CHANGE_PAY: "cxo:pay-selector:changePay",
                    CANCEL_PAY_SELECTOR: "cxo:pay-selector:cancel",
                    ERROR_PAY: "cxo:pay-selector:errorPay"
                },
                w = {},
                x = "SELECT",
                y = "",
                z = "vxo-no-scroll";
            return {
                open: i,
                close: j,
                fetchLauncherData: l,
                selectPay: m,
                successPay: n,
                changePay: o,
                errorPay: p,
                events: v
            }
        }(),
        H = window[a] = {},
        I = window.onload,
        J = {
            settings: {},
            paymentRequest: {}
        },
        K = {},
        L = "checkout-widget/resources/img/integration/v1/locked-button-s.png",
        M = "checkout-widget/resources/img/integration/v1/locked-button-m.png",
        N = "checkout-widget/resources/img/integration/v1/locked-button-l.png",
        O = "Visa Checkout integration problem",
        P = !1,
        Q = !1,
        R = !1,
        S = !1,
        T = !1,
        U = !1,
        V = !1,
        W = null,
        X = {},
        Y = null,
        Z = null,
        $ = null,
        _ = !1,
        aa = {
            isEuroIp: !1,
            canDropCookies: !0
        },
        ba = !1,
        ca = {
            buttonAnimation: !1
        },
        da = {},
        ea = {},
        fa = !1,
        ga = !1,
        ha = !1,
        ia = 0,
        ja = 0,
        ka = {},
        la = null,
        ma = null,
        na = null,
        oa = !1,
        pa = !1,
        qa = E.debug(),
        ra = !1,
        sa = (function() {
            var a = !0;
            try {
                sessionStorage.setItem("test", "test"), sessionStorage.removeItem("test")
            } catch (b) {
                a = !1
            }
            return a
        }(), function() {
            var a = !(document.querySelectorAll && window.JSON && window.postMessage);
            return !(Ca() || Da() || Ea() || a)
        }),
        ta = function() {
            var a = window.navigator.userAgent;
            return a ? a.toLowerCase() : ""
        },
        ua = function() {
            if (!va()) return sa();
            try {
                new Event;
                return !0
            } catch (a) {
                return !1
            }
        },
        va = function() {
            var a = ta(),
                b = /trident/.exec(a),
                c = /msie/.exec(a);
            return !!b && !c
        },
        wa = function() {
            var a = ta(),
                b = /msie ([0-9]+)/.exec(a);
            return b ? b[1] : ""
        },
        xa = function() {
            var a = ta(),
                b = /(?:ipad|iphone) os ([0-9]+)/.exec(a);
            return b ? b[1] : ""
        },
        ya = function() {
            var a = ta(),
                b = /android ([0-9.]+)/.exec(a);
            return b ? b[1] : ""
        },
        za = function() {
            var a = wa(),
                b = !!(window.ActiveXObject && !document.addEventListener || a && a.match(/^8/));
            return b
        },
        Aa = function() {
            var a = wa(),
                b = !!(window.ActiveXObject && document.addEventListener && !window.atob || a && a.match(/^9/));
            return b
        },
        Ba = function() {
            var a = wa(),
                b = !!a && a.match(/^10/);
            return b
        },
        Ca = function() {
            return za() || Aa() || Ba()
        },
        Da = function() {
            var a = xa(),
                b = !!a && Fa(a, "8") === -1;
            return b
        },
        Ea = function() {
            var a = ya(),
                b = !!a && Fa(a, "4.4.2") === -1;
            return b
        },
        Fa = function(a, b) {
            for (var c = a.split("."), d = b.split("."); c.length < d.length;) c.push("0");
            for (; d.length < c.length;) d.push("0");
            c = c.map(Number), d = d.map(Number);
            for (var e = 0; e < c.length; ++e) {
                if (d.length == e) return 1;
                if (c[e] != d[e]) return c[e] > d[e] ? 1 : -1
            }
            return c.length != d.length ? -1 : 0
        },
        Ga = function(a, b) {
            var c, d, e = document.getElementsByTagName("img"),
                f = /\bv-button\b/,
                g = La() + "/",
                h = function() {
                    window.alert(a)
                },
                i = function(b) {
                    13 === b.keyCode && window.alert(a)
                };
            for (d = 0; d < e.length; d++)
                if (f.test(e[d].className)) switch (c = E.param("size", e[d].src) || B.NORMAL, b && (e[d].onclick = h, e[d].onkeydown = i), e[d].title = a, !0) {
                    case parseInt(c, 10) < B.NORMAL:
                        e[d].src = g + L;
                        break;
                    case parseInt(c, 10) >= B.LARGE:
                        e[d].src = g + N;
                        break;
                    default:
                        e[d].src = g + M
                }
            P = !0
        },
        Ha = function() {
            var a = document.body,
                b = document.documentElement;
            return Math.max(a.scrollHeight, a.offsetHeight, b.clientHeight, b.scrollHeight, b.offsetHeight)
        },
        Ia = function() {
            var a, c, d = Na("VmeCheckout"),
                e = "0",
                f = window.innerWidth,
                g = (window.innerHeight - 650) / 2;
            f <= b ? (c = f, a = f / 2 * -1) : (g > 0 && g < 100 ? e = g + "px" : g >= 100 && (e = "100px"), c = b, a = b / 2 * -1), d.style.top = e, d.style.marginLeft = a + "px", d.style.width = c + "px"
        },
        Ja = function(a) {
            var b = document.getElementById(a),
                c = {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    background: "#000",
                    opacity: "0.6",
                    filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)",
                    minWidth: "100%",
                    minHeight: "100%",
                    zIndex: "999998"
                };
            if (!b) {
                b = document.createElement("div"), b.id = a;
                for (var d in c) b.style[d] = c[d]
            }
            return b
        },
        Ka = function() {
            return "https://sandbox.secure.checkout.visa.com"
        },
        La = function() {
            return "https://sandbox-assets.secure.checkout.visa.com"
        },
        Ma = function(a) {
            var b = document.getElementById("VmeCheckoutBackground");
            b || (b = document.createElement("div"), b.innerHTML = '<div id="VmeCheckoutBackground" style="-ms-filter: \'progid:DXImageTransform.Microsoft.Alpha(Opacity=10)\'; opacity: 0.1; background: #000; position: absolute; left: 0; right: 0; top: 0; bottom: 0; min-height: 850px;"></div>', b = b.firstChild, document.addEventListener && (b.style.zIndex = "999998"), document.body.insertBefore(b, a)), b.style.display = "block", b.style.height = Ha() + "px"
        },
        Na = function(a) {
            var b, c = document.getElementById(a);
            if (c && "IFRAME" === c.tagName ? (c.id = a + "_inner", b = document.createElement("div"), b.id = a, b.appendChild(c)) : b = c, !b) {
                var d = document.createElement("iframe");
                d.frameBorder = 0, b = document.createElement("div"), b.name = "Checkout Window", b.id = a, b.appendChild(d)
            }
            return b
        },
        Oa = function(a, b) {
            var c = a || "",
                d = b ? "/checkout-widget" + b : "/checkout-widget/",
                e = E.copyKeys({}, J, J.settings);
            return delete J.settings.startPath, delete e.settings, Ka() + d + c + Xa(e)
        },
        Pa = function(a) {
            return Oa(null, a)
        },
        Qa = function(a) {
            var b = J[l],
                c = b ? Wa(v, b) : "",
                d = Wa(w, aa.canDropCookies),
                e = Wa(x, aa.isEuroIp),
                f = a ? Wa("miniRXO", a) : "";
            return Oa("rxo") + c + d + e + f
        },
        Ra = function() {
            return Oa("exo")
        },
        Sa = function() {
            return Oa("cxo")
        },
        Ta = function() {
            return Oa("config")
        },
        Ua = function() {
            return Oa("gtm")
        },
        Va = function(a, b, c) {
            if (b = b || "VmeCheckout", c = c || Ka(), e) e.postMessage(a, c);
            else {
                var d = Na(b).firstChild.contentWindow;
                d.postMessage(a, c)
            }
        },
        Wa = function(a, b, c) {
            return (c ? "?" : "&") + a + "=" + encodeURIComponent(b)
        },
        Xa = function(a) {
            var b = [];
            return b.push(Wa("apikey", a.apikey, !0)), b.push(Wa("externalClientId", a.externalClientId || "")), b.push(Wa("externalProfileId", a.externalProfileId || "")), a.settings && a.settings.countryCode && b.push(Wa("settings%5BcountryCode%5D", a.settings.countryCode)), b.push(Wa("parentUrl", a.parentUrl || "")), b.push(Wa("locale", a.locale || "")), b.push(Wa("browserLocale", a.browserLocale || "")), b.push(Wa("countryCode", a.countryCode || "")), void 0 !== S && b.push(Wa("allowEXO", S)), void 0 !== T && b.push(Wa("allowCXO", T)), b.push(Wa("buttonPosition", a.buttonPosition || "")), b.push("&postmessage=true"), b.push("&allowRXO=" + !R), a.shipping && a.shipping.collectShipping && b.push(Wa("collectShipping", a.shipping.collectShipping)), b.join("")
        },
        Ya = function(a, b, c) {
            var d, e;
            b = b || "VmeCheckout", c = c || Ta(), a.apikey || Ga(O, !1), d = Na(b), e = d.firstChild, e.src = c, e.title = "For system use, please ignore.", e.tabIndex = "-1", e.setAttribute("role", "presentation"), e.style.height = "0px", e.style.width = "0px", e.style.display = "none", d.style.visibility = "hidden", d.style.position = "absolute", d.style.height = "1px", d.style.width = "1px", d.style.left = "-2000px", d.style.bottom = "0px", b === y && e.setAttribute("allowpaymentrequest", ""), document.getElementById(b) || document.body.appendChild(d)
        },
        Za = function() {
            var a, b = document.head || document.getElementsByTagName("head")[0];
            a = document.createElement("style"), b.insertBefore(a, b.firstChild)
        },
        $a = function(a, b) {
            var c = document.styleSheets[0];
            c && (c.insertRule ? c.insertRule(a + "{" + b.join(";") + "}", c.cssRules.length) : c.addRule(a, b.join(";"), -1))
        },
        _a = function() {
            var a = document.querySelectorAll(".v-learn");
            if (a.length)
                for (var b = 0, c = a.length; b < c; b++) {
                    var d = a[b];
                    d.setAttribute("aria-label", "Learn more about Visa Checkout"), E.addEvent(d, "click", ab(d)), Za(), $a(".v-learn.v-learn-default", ["float: right", "margin-right: 4px", "font-size: 12px", "text-transform: capitalize", "color: #003ea9", "cursor: pointer", "text-decoration: none"]), $a(".v-learn.v-learn-default:hover", ["text-decoration: underline"]), $a(".v-learn.v-learn-default:visited", ["color: #003ea9"])
                }
        },
        ab = function(a) {
            return function(b) {
                mb(b, a)
            }
        },
        bb = function() {
            var a, b = "VmeCheckout",
                c = Na(b),
                d = c.firstChild,
                e = E.getBoundingClientRect(document.querySelector("html")),
                f = E.getBoundingClientRect(h),
                g = E.getBoundingClientRect(d),
                i = {
                    top: f.top - e.top,
                    left: f.left - e.left
                };
            f.top > g.height ? c.style.top = i.top - g.height - 5 + "px" : c.style.top = i.top + f.height + 5 + "px", a = i.left - g.width / 2 + f.width / 2, a + g.width > window.innerWidth || a < 0 ? (c.style.marginLeft = "-153px", a = "50%") : (c.style.marginLeft = "", a += "px"), c.style.left = a
        },
        cb = function() {
            return !(window.ActiveXObject && "ActiveXObject" in window) && ((Y == A || null == Y) && 0 == Object.keys(X).length && _ === !0 && S === !0 && P === !1 && gc() === !0)
        },
        db = function() {
            return P === !1 && R === !1
        },
        eb = function() {
            try {
                cb() === !0 && (ga = !0, kb(), Fb())
            } catch (a) {
                console.error(a)
            }
        },
        fb = function() {
            db() === !0 && i && ca.buttonAnimation && kb()
        },
        gb = function(a) {
            F.isCXOEligibleDevice() ? Ya(a, y, Sa()) : _ = !0
        },
        hb = function(a, b) {
            var c = F.getAvailableWallets(),
                d = F.getLinkedPays(),
                e = Object.keys(c).length,
                f = Object.keys(d).length,
                g = !0;
            if (qa && (console.log("Chassis Flow - User clicked Button", new Date), console.log("linkedPays", d)), b && !b.triggerGtmVButtonClick ? g = b.triggerGtmVButtonClick : ($ = null, Z = null), a === A && 0 == f) sb();
            else if (a === A && f > 0) ib(a), F.launchMiniRxo();
            else if (a && c && c[a]) {
                ib(a);
                var h = "invokeWalletLaunch--" + JSON.stringify({
                    selectedPay: a
                });
                Ub(h, y), g && F.sendCheckoutButtonGTMEvent(a)
            } else f || e || a ? (F.sendCheckoutButtonGTMEvent(null), G.open()) : sb()
        },
        ib = function(a) {
            $ = Z, Z = a
        },
        jb = function(a) {
            var b;
            try {
                b = new Event(a)
            } catch (c) {
                b = document.createEvent("Event"), b.initEvent(a, !0, !0)
            }
            dispatchEvent(b)
        },
        kb = function() {
            var a = "ExoCheckoutClass",
                b = "300",
                c = (E.copyKeys({}, J, J.settings), Ra()),
                d = document.querySelectorAll("img.v-button");
            window.addEventListener("repositionexo", function() {
                jb("resize")
            });
            var e = !1;
            window.addEventListener("keydown", function(a) {
                var b = a.which || a.keyCode;
                e = !(9 !== b || !a.shiftKey)
            }), window.addEventListener("hashchange", function() {
                jb("resize")
            }), Object.keys(History.prototype).reduce(function(a, b) {
                var c = Object.getOwnPropertyDescriptor(a, b);
                if ("function" == typeof c.value) {
                    var d = c.value;
                    c.value = function() {
                        jb("resize"), d.apply(this, arguments)
                    }, Object.defineProperty(a, b, c)
                }
                return a
            }, History.prototype);
            var f = function(a) {
                    var b = a.parentNode.querySelectorAll("img.v-button");
                    if (b.length > 1) {
                        var c;
                        if (Array.prototype.some.call(b, function(a) {
                                if (Array.prototype.indexOf.call(a.classList, "ng-hide") === -1) return c = a, !0
                            }), c) return c;
                        console.warn("Could not pick v-button from siblings! All have 'ng-hide' class!")
                    }
                    return a
                },
                g = function(a, b) {
                    a.onload = function() {
                        Eb(a, b), a.style.overflow = "hidden", jb("resize")
                    }
                },
                h = function(a) {
                    var b = null,
                        c = ["absoluteContainerId", "absoluteContainerClass", "absoluteContainerSelector"],
                        d = Object.keys(a.dataset).filter(function(a) {
                            return c.indexOf(a) > -1
                        });
                    if (1 === d.length) {
                        var e = d[0],
                            f = a.dataset[e],
                            g = e.match(/id/i) ? "#" + f : e.match(/class/i) ? "." + f : f;
                        b = document.querySelector(g) ? document.querySelector(g) : null
                    } else d.length > 1 && console.error("Error: " + (a.id ? 'On vButton "' + a.id + '", f' : "F") + 'ound multiple data-absolute-container attributes: "' + d.map(function(a) {
                        return a.replace("absoluteContainer", "")
                    }).join('", "') + '". Only use one!');
                    return b
                },
                i = function(a) {
                    var b = getComputedStyle(a),
                        c = a.tagName.toLowerCase(),
                        d = ["button", "input", "select", "textarea", "a"],
                        e = ["fieldset", "legend", "label"],
                        f = {
                            audio: "controls",
                            video: "controls"
                        },
                        g = e.indexOf(c) === -1 && (d.indexOf(c) > -1 || a.tabIndex > -1),
                        h = f[c] && Array.prototype.indexOf.call(a.attributes, f[c]) > -1;
                    return (g || h) && "hidden" !== b.visibility && "none" !== b.display
                },
                j = function(a, b) {
                    for (var c, d, e, f = Array.prototype.slice.call(a.children); f.length;) {
                        if (c = b ? f.pop() : f.shift(), d = i(c)) return c;
                        if (c.children.length && (e = j(c, b))) return e
                    }
                    return null
                },
                k = function(a, b) {
                    var c = b ? a.previousElementSibling : a.nextElementSibling;
                    if (c) {
                        var d = i(c);
                        if (d) return c;
                        if (c.children.length) {
                            var e = j(c, b);
                            if (e) return e
                        }
                        return k(c, b)
                    }
                    return a.parentNode !== document.body ? k(a.parentNode, b) : document.body
                },
                l = function(a, b) {
                    var c = (b || document.documentElement).getBoundingClientRect(),
                        d = b ? b.offsetTop : 0,
                        e = b ? b.offsetLeft : 0,
                        f = a.top + (d - c.top),
                        g = a.left + (e - c.left),
                        h = a.bottom + (d - c.top),
                        i = a.right + (e - c.left),
                        j = "",
                        k = document.body.scrollHeight,
                        l = document.body.scrollWidth;
                    return j += "&btnTop=" + f, j += "&btnLeft=" + g, j += "&btnBottom=" + (k - h), j += "&btnRight=" + (l - i), j += "&btnWidth=" + a.width, j += "&btnHeight=" + a.height
                },
                m = function(a, b, c) {
                    var d = a.getBoundingClientRect();
                    return c ? d : l(d, b)
                },
                n = function(a, b) {
                    if (a && b) a.contentWindow.postMessage("resize--" + b, "*");
                    else {
                        var c = [];
                        Array.prototype.forEach.call(d, function(a, b) {
                            if (a = f(a), !(c.indexOf(a) > -1)) {
                                c.push(a);
                                var d = a.dataset.frameId,
                                    e = document.getElementById(d),
                                    g = h(a);
                                e && e.contentWindow.postMessage("resize--" + m(a, g), "*")
                            }
                        })
                    }
                };
            if (0 === document.getElementsByClassName(a).length) {
                var o = [];
                Array.prototype.forEach.call(d, function(d, i) {
                    if (d = f(d), !(o.indexOf(d) > -1)) {
                        o.push(d);
                        var j, p = "exoFrame-" + i,
                            q = p + "-wrapper",
                            r = Na(q),
                            s = r.firstChild,
                            t = h(d),
                            u = lb(d),
                            v = m(d, t),
                            w = c;
                        if (d.dataset.exoTarget = !0, d.dataset.frameId = p, d.dataset.buttonPositionOverride && (j = d.dataset.buttonPositionOverride.toUpperCase(), "ABSOLUTE" !== j && "RELATIVE" !== j || (w = w.replace(/buttonPosition=.*/, "buttonPosition=" + j))), s.src = w + "&id=exoFrame-" + i + v, s.style.width = "100%", s.id = p, s.scrolling = "no", u && (s.src += "&btnSrc=" + encodeURIComponent(u)), r.style.visibility = "", d.dataset.exoZindexOverride ? r.style.zIndex = d.dataset.exoZindexOverride : r.style.zIndex = b, r.id = q, r.className = a, r.style.display = "none", "ABSOLUTE" === J.settings.buttonPosition || "ABSOLUTE" === j) {
                            var x = document.createElement("a");
                            x.id = "vcoFocusTunnel", x.style.opacity = 0, x.style.height = 0, x.style.width = 0, x.href = "", x.onfocus = function() {
                                Tb("focusThroughTunnel--" + e, p), document.activeElement.blur()
                            }, d.tabIndex > -1 && (x.tabIndex = d.tabIndex), d.parentNode.insertBefore(x, d), s.focusPrevious = function() {
                                document.activeElement.blur(), k(x, !0).focus()
                            }, s.focusNext = function() {
                                document.activeElement.blur(), k(x).focus()
                            }, s.tabIndex = -1, t ? t.appendChild(r) : document.body.appendChild(r)
                        } else d.parentNode.insertBefore(r, d.nextSibling);
                        g(s, d);
                        for (var y, z = {
                                attributes: !0,
                                attributeOldValue: !0,
                                attributeFilter: ["style", "class"]
                            }, A = new MutationObserver(function(a) {
                                a.forEach(function(a) {
                                    var b = m(d, null, !0);
                                    y && y.height !== b.height && y.width !== b.width && n(s, l(b, t)), y = b
                                })
                            }), B = ba ? 10 : 5, C = d; C && B--;) A.observe(C, z), C = C.parentNode
                    }
                }), window.addEventListener("resize", n), window.addEventListener("orientationchange", n)
            }
        },
        lb = function(a) {
            return a && a.getAttribute("src")
        },
        mb = function(a, b) {
            var c = "VmeCheckout",
                e = Na(c),
                f = e.firstChild,
                g = Ka() + "/checkout-widget/learn?",
                i = (b.getAttribute("data-locale") || "").replace("_", "-"),
                j = {
                    parentUrl: window.location.href
                };
            0 === i.indexOf("en-US") && (i = "en"), j.locale = i, g = g + "apikey=" + J.apikey + "&" + Xb(j), e.style.visibility = "", e.style.position = "absolute", e.style.height = "375px", e.style.width = "306px", e.style.left = "", e.style.boxShadow = "rgba(0, 0, 0, 0.40) 5px 5px 16px", e.style.zIndex = "999999", e.style.borderRadius = "2px", f.src = g, f.style.height = "375px", f.style.width = "100%", f.title = u, f.removeAttribute("tabindex"), f.removeAttribute("role"), f.style.display = "inline", document.getElementById(c) || document.body.appendChild(e), setTimeout(function() {
                f.focus()
            }, 100), d = E.debounce(bb, 30), E.addEvent(window, "resize", d), h = b, bb(), a.preventDefault()
        },
        nb = function() {
            if (E.isIOSAndroid()) {
                var a = "rxo-ios-android";
                E.addClass(document.body, a)
            }
        },
        ob = function(a) {
            if (f) {
                g && (document.body.removeChild(g), document.removeEventListener("focus", pb)), document.addEventListener("focus", pb, !0), g = document.createElement("div"), g.setAttribute("role", "dialog"), g.id = "ghostLayerText";
                var b = {
                    color: "#fff",
                    textAlign: "center",
                    zIndex: "999999",
                    position: "fixed",
                    width: "100%",
                    top: "35%",
                    fontSize: "10px",
                    fontFamily: "Open sans"
                };
                for (var c in b) g.style[c] = b[c];
                var d = {
                        fontFamily: "Open Sans",
                        webkitUserSelect: "none",
                        MozUserSelect: "none",
                        msUserSelect: "none",
                        userSelect: "none"
                    },
                    h = document.createElement("p"),
                    i = {
                        backgroundImage: "url(data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20width%3D%22100px%22%20height%3D%2215px%22%20viewBox%3D%220%200%20100%2015%22%20enable-background%3D%22new%200%200%20100%2015%22%20xml%3Aspace%3D%22preserve%22%3E%3Cmetadata%3E%3C%3Fxpacket%20begin%3D%22%EF%BB%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%205.3-c011%2066.145661%2C%202012%2F02%2F06-14%3A56%3A27%20%20%20%20%20%20%20%20%22%3E%20%20%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%20%20%20%20%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20%20%20%20%20%20%20%20%20%20%20%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20%20%20%20%20%20%20%20%20%20%20%20xmlns%3AxmpGImg%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fg%2Fimg%2F%22%3E%20%20%20%20%20%20%20%20%20%3Cxmp%3ACreatorTool%3EAdobe%20Illustrator%20CS6%20%28Macintosh%29%3C%2Fxmp%3ACreatorTool%3E%20%20%20%20%20%20%20%20%20%3Cxmp%3ACreateDate%3E2015-04-20T11%3A04%3A28-07%3A00%3C%2Fxmp%3ACreateDate%3E%20%20%20%20%20%20%20%20%20%3Cxmp%3AThumbnails%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Crdf%3AAlt%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Crdf%3Ali%20rdf%3AparseType%3D%22Resource%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CxmpGImg%3Awidth%3E256%3C%2FxmpGImg%3Awidth%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CxmpGImg%3Aheight%3E36%3C%2FxmpGImg%3Aheight%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CxmpGImg%3Aformat%3EJPEG%3C%2FxmpGImg%3Aformat%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CxmpGImg%3Aimage%3E%2F9j%2F4AAQSkZJRgABAgEASABIAAD%2F7QAsUGhvdG9zaG9wIDMuMAA4QklNA%2B0AAAAAABAASAAAAAEA%26%23xA%3BAQBIAAAAAQAB%2F%2B4ADkFkb2JlAGTAAAAAAf%2FbAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoK%26%23xA%3BDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8f%26%23xA%3BHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f%2F8AAEQgAJAEAAwER%26%23xA%3BAAIRAQMRAf%2FEAaIAAAAHAQEBAQEAAAAAAAAAAAQFAwIGAQAHCAkKCwEAAgIDAQEBAQEAAAAAAAAA%26%23xA%3BAQACAwQFBgcICQoLEAACAQMDAgQCBgcDBAIGAnMBAgMRBAAFIRIxQVEGE2EicYEUMpGhBxWxQiPB%26%23xA%3BUtHhMxZi8CRygvElQzRTkqKyY3PCNUQnk6OzNhdUZHTD0uIIJoMJChgZhJRFRqS0VtNVKBry4%2FPE%26%23xA%3B1OT0ZXWFlaW1xdXl9WZ2hpamtsbW5vY3R1dnd4eXp7fH1%2Bf3OEhYaHiImKi4yNjo%2BCk5SVlpeYmZ%26%23xA%3BqbnJ2en5KjpKWmp6ipqqusra6voRAAICAQIDBQUEBQYECAMDbQEAAhEDBCESMUEFURNhIgZxgZEy%26%23xA%3BobHwFMHR4SNCFVJicvEzJDRDghaSUyWiY7LCB3PSNeJEgxdUkwgJChgZJjZFGidkdFU38qOzwygp%26%23xA%3B0%2BPzhJSktMTU5PRldYWVpbXF1eX1RlZmdoaWprbG1ub2R1dnd4eXp7fH1%2Bf3OEhYaHiImKi4yNjo%26%23xA%3B%2BDlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq%2Bv%2FaAAwDAQACEQMRAD8A9U4q7FXYq7FXYq7FXYq7%26%23xA%3BFXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7F%26%23xA%3BXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FX%26%23xA%3BYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXY%26%23xA%3Bq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq%26%23xA%3B7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7FXYq7%26%23xA%3BFX%2F%2F2Q%3D%3D%3C%2FxmpGImg%3Aimage%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Frdf%3Ali%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Frdf%3AAlt%3E%20%20%20%20%20%20%20%20%20%3C%2Fxmp%3AThumbnails%3E%20%20%20%20%20%20%3C%2Frdf%3ADescription%3E%20%20%20%20%20%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20%20%20%20%20%20%20%20%20%20%20%20xmlns%3AxmpTPg%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Ft%2Fpg%2F%22%20%20%20%20%20%20%20%20%20%20%20%20xmlns%3AstDim%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FDimensions%23%22%20%20%20%20%20%20%20%20%20%20%20%20xmlns%3AxmpG%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fg%2F%22%3E%20%20%20%20%20%20%20%20%20%3CxmpTPg%3AMaxPageSize%20rdf%3AparseType%3D%22Resource%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3CstDim%3Aw%3E100.000000%3C%2FstDim%3Aw%3E%20%20%20%20%20%20%20%20%20%20%20%20%3CstDim%3Ah%3E15.000000%3C%2FstDim%3Ah%3E%20%20%20%20%20%20%20%20%20%20%20%20%3CstDim%3Aunit%3EPixels%3C%2FstDim%3Aunit%3E%20%20%20%20%20%20%20%20%20%3C%2FxmpTPg%3AMaxPageSize%3E%20%20%20%20%20%20%20%20%20%3CxmpTPg%3ANPages%3E1%3C%2FxmpTPg%3ANPages%3E%20%20%20%20%20%20%20%20%20%3CxmpTPg%3AHasVisibleTransparency%3EFalse%3C%2FxmpTPg%3AHasVisibleTransparency%3E%20%20%20%20%20%20%20%20%20%3CxmpTPg%3AHasVisibleOverprint%3EFalse%3C%2FxmpTPg%3AHasVisibleOverprint%3E%20%20%20%20%20%20%20%20%20%3CxmpTPg%3ASwatchGroups%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Crdf%3ASeq%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Crdf%3Ali%20rdf%3AparseType%3D%22Resource%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CxmpG%3AgroupName%3EDefault%20Swatch%20Group%3C%2FxmpG%3AgroupName%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CxmpG%3AgroupType%3E0%3C%2FxmpG%3AgroupType%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Frdf%3Ali%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Frdf%3ASeq%3E%20%20%20%20%20%20%20%20%20%3C%2FxmpTPg%3ASwatchGroups%3E%20%20%20%20%20%20%3C%2Frdf%3ADescription%3E%20%20%20%20%20%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20%20%20%20%20%20%20%20%20%20%20%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%3E%20%20%20%20%20%20%20%20%20%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%20%20%20%20%20%20%3C%2Frdf%3ADescription%3E%20%20%20%3C%2Frdf%3ARDF%3E%3C%2Fx%3Axmpmeta%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%3Fxpacket%20end%3D%22w%22%3F%3E%20%3C%2Fmetadata%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M51.866%2C13.902c-0.511%2C0.178-0.994%2C0.312-1.46%2C0.406c-0.466%2C0.092-0.91%2C0.135-1.326%2C0.135%20c-1.105%2C0-1.988-0.301-2.648-0.904c-0.662-0.609-0.992-1.41-0.992-2.41c0-0.656%2C0.104-1.277%2C0.313-1.859%20c0.209-0.584%2C0.516-1.11%2C0.925-1.59c0.48-0.564%2C1.06-1%2C1.737-1.307c0.677-0.305%2C1.407-0.456%2C2.188-0.456%20c0.428%2C0%2C0.854%2C0.05%2C1.285%2C0.15c0.428%2C0.103%2C0.864%2C0.253%2C1.31%2C0.46l-0.341%2C1.703c-0.353-0.269-0.707-0.463-1.062-0.59%20C51.441%2C7.513%2C51.059%2C7.45%2C50.65%2C7.45c-0.851%2C0-1.561%2C0.328-2.13%2C0.981c-0.574%2C0.65-0.86%2C1.471-0.86%2C2.447%20c0%2C0.635%2C0.176%2C1.128%2C0.528%2C1.49c0.354%2C0.359%2C0.84%2C0.535%2C1.46%2C0.535c0.37%2C0%2C0.763-0.065%2C1.18-0.196%20c0.417-0.136%2C0.884-0.347%2C1.402-0.634l-0.364%2C1.824V13.902z%20M59.848%2C10.529l-0.734%2C3.756h-1.973l0.619-3.215%20c0.045-0.211%2C0.077-0.387%2C0.102-0.53c0.023-0.146%2C0.035-0.261%2C0.035-0.347c0-0.234-0.062-0.416-0.191-0.543%20c-0.13-0.131-0.312-0.195-0.557-0.195c-0.406%2C0-0.76%2C0.16-1.049%2C0.477c-0.291%2C0.318-0.498%2C0.76-0.607%2C1.318l-0.598%2C3.033H52.92%20l1.66-8.568h1.982L55.92%2C9.02c0.359-0.354%2C0.73-0.619%2C1.096-0.789c0.365-0.174%2C0.75-0.258%2C1.15-0.258%20c0.566%2C0%2C1.006%2C0.147%2C1.314%2C0.444c0.31%2C0.3%2C0.459%2C0.717%2C0.459%2C1.256c0%2C0.12-0.006%2C0.25-0.02%2C0.395%20C59.904%2C10.206%2C59.88%2C10.361%2C59.848%2C10.529%20M67.12%2C11.434l-0.068%2C0.312h-4.614c0%2C0.02%2C0%2C0.055-0.006%2C0.096%20c-0.005%2C0.047-0.007%2C0.076-0.007%2C0.098c0%2C0.402%2C0.12%2C0.701%2C0.363%2C0.896c0.237%2C0.2%2C0.601%2C0.297%2C1.08%2C0.297%20c0.416%2C0%2C0.854-0.06%2C1.315-0.186c0.457-0.123%2C0.941-0.312%2C1.447-0.557l-0.3%2C1.529c-0.479%2C0.18-0.96%2C0.311-1.435%2C0.393%20c-0.478%2C0.088-0.961%2C0.131-1.451%2C0.131c-0.961%2C0-1.703-0.223-2.229-0.666c-0.521-0.443-0.782-1.069-0.782-1.885%20c0-0.47%2C0.086-0.924%2C0.25-1.365c0.17-0.441%2C0.409-0.848%2C0.729-1.217c0.38-0.436%2C0.83-0.77%2C1.358-1%20c0.524-0.227%2C1.109-0.339%2C1.754-0.339c0.834%2C0%2C1.496%2C0.22%2C1.983%2C0.666c0.488%2C0.443%2C0.736%2C1.043%2C0.736%2C1.793%20c0%2C0.146-0.017%2C0.305-0.03%2C0.471c-0.02%2C0.162-0.05%2C0.34-0.092%2C0.535%20M65.26%2C10.529c0.01-0.045%2C0.02-0.1%2C0.024-0.146%20c0.004-0.05%2C0.008-0.098%2C0.008-0.145c0-0.295-0.09-0.527-0.271-0.7c-0.17-0.173-0.41-0.261-0.713-0.261%20c-0.385%2C0-0.713%2C0.105-0.98%2C0.32c-0.27%2C0.209-0.479%2C0.521-0.62%2C0.93h2.55L65.26%2C10.529z%20M73.73%2C8.311l-0.316%2C1.607%20c-0.268-0.176-0.52-0.311-0.78-0.402c-0.26-0.092-0.51-0.14-0.755-0.14c-0.646%2C0-1.17%2C0.218-1.578%2C0.649%20c-0.404%2C0.431-0.607%2C0.98-0.607%2C1.654c0%2C0.43%2C0.125%2C0.764%2C0.38%2C1c0.254%2C0.232%2C0.61%2C0.352%2C1.073%2C0.352%20c0.308%2C0%2C0.607-0.045%2C0.91-0.137c0.297-0.093%2C0.576-0.23%2C0.848-0.41L72.6%2C14.1c-0.324%2C0.113-0.652%2C0.2-0.984%2C0.26%20c-0.33%2C0.055-0.663%2C0.08-0.995%2C0.08c-0.97%2C0-1.716-0.213-2.238-0.649S67.6%2C12.738%2C67.6%2C11.938c0-0.5%2C0.096-0.99%2C0.289-1.463%20c0.189-0.477%2C0.469-0.9%2C0.825-1.281c0.399-0.412%2C0.86-0.721%2C1.377-0.922c0.519-0.201%2C1.115-0.3%2C1.79-0.3%20c0.312%2C0%2C0.62%2C0.027%2C0.93%2C0.085c0.308%2C0.057%2C0.616%2C0.139%2C0.92%2C0.256%20M75.318%2C5.715h1.986l-0.906%2C4.645l2.662-2.244h2.323%20L77.8%2C10.973l2.603%2C3.312H78.15l-2-2.66l-0.517%2C2.66h-1.977L75.318%2C5.715z%20M84.48%2C7.968c0.916%2C0%2C1.64%2C0.233%2C2.162%2C0.698%20c0.524%2C0.47%2C0.787%2C1.104%2C0.787%2C1.906c0%2C0.465-0.082%2C0.918-0.246%2C1.357c-0.166%2C0.436-0.406%2C0.836-0.724%2C1.199%20c-0.375%2C0.436-0.813%2C0.76-1.328%2C0.98c-0.508%2C0.22-1.075%2C0.33-1.704%2C0.33c-0.906%2C0-1.619-0.23-2.146-0.696%20c-0.523-0.468-0.785-1.103-0.785-1.908c0-0.46%2C0.084-0.912%2C0.252-1.354c0.166-0.442%2C0.412-0.85%2C0.728-1.215%20c0.362-0.427%2C0.805-0.75%2C1.312-0.972c0.51-0.216%2C1.069-0.328%2C1.69-0.328%20M84.314%2C9.376c-0.512%2C0-0.932%2C0.233-1.26%2C0.694%20c-0.332%2C0.466-0.496%2C1.05-0.496%2C1.77c0%2C0.391%2C0.09%2C0.688%2C0.269%2C0.891c0.177%2C0.199%2C0.437%2C0.306%2C0.776%2C0.306%20c0.51%2C0%2C0.934-0.229%2C1.26-0.695c0.336-0.466%2C0.498-1.054%2C0.498-1.772c0-0.383-0.09-0.68-0.268-0.881%20c-0.176-0.207-0.436-0.31-0.779-0.31%20M88.039%2C11.886l0.72-3.768h1.979l-0.622%2C3.21c-0.043%2C0.208-0.076%2C0.388-0.101%2C0.533%20c-0.021%2C0.148-0.035%2C0.265-0.035%2C0.351c0%2C0.229%2C0.064%2C0.41%2C0.195%2C0.54c0.131%2C0.126%2C0.312%2C0.191%2C0.551%2C0.191%20c0.409%2C0%2C0.756-0.156%2C1.056-0.473c0.29-0.316%2C0.491-0.757%2C0.604-1.318L92.98%2C8.12h1.979l-1.192%2C6.167h-1.988l0.184-0.904%20c-0.338%2C0.356-0.691%2C0.624-1.064%2C0.801c-0.371%2C0.18-0.76%2C0.264-1.172%2C0.264c-0.561%2C0-0.996-0.147-1.307-0.442%20c-0.311-0.3-0.46-0.717-0.46-1.265c0-0.127%2C0.005-0.262%2C0.021-0.407c0.006-0.142%2C0.029-0.29%2C0.06-0.444%22%2F%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M98.134%2C6.366l-0.336%2C1.75h2.017l-0.279%2C1.409h-2.018l-0.506%2C2.61c-0.017%2C0.06-0.025%2C0.106-0.029%2C0.15%20c-0.006%2C0.036-0.01%2C0.077-0.01%2C0.11c0%2C0.17%2C0.057%2C0.291%2C0.166%2C0.363c0.11%2C0.072%2C0.301%2C0.11%2C0.561%2C0.11h1.02l-0.277%2C1.409h-1.656%20c-0.598%2C0-1.051-0.125-1.36-0.377c-0.313-0.248-0.468-0.607-0.468-1.078c0-0.104%2C0.005-0.213%2C0.016-0.33%20c0.01-0.117%2C0.026-0.234%2C0.051-0.36l1.127-5.775l1.98%2C0.005L98.134%2C6.366z%20M16.394%2C0.902l-5.59%2C13.334H7.158L4.407%2C3.593%20c-0.165-0.654-0.31-0.893-0.82-1.17c-0.83-0.45-2.197-0.872-3.4-1.133l0.08-0.388h5.87c0.748%2C0%2C1.42%2C0.498%2C1.59%2C1.36l1.45%2C7.716%20L12.773%2C0.9l3.625%2C0.002%20M30.684%2C9.882c0.017-3.517-4.865-3.71-4.832-5.287c0.013-0.476%2C0.466-0.984%2C1.464-1.115%20c0.495-0.064%2C1.858-0.114%2C3.403%2C0.597l0.607-2.827c-0.832-0.304-1.9-0.593-3.228-0.593c-3.41%2C0-5.81%2C1.814-5.83%2C4.408%20c-0.023%2C1.92%2C1.713%2C2.992%2C3.02%2C3.628c1.345%2C0.654%2C1.795%2C1.074%2C1.79%2C1.66c-0.008%2C0.894-1.07%2C1.285-2.064%2C1.299%20c-1.734%2C0.029-2.74-0.465-3.544-0.84l-0.623%2C2.924c0.805%2C0.369%2C2.293%2C0.689%2C3.836%2C0.705c3.624%2C0.004%2C5.995-1.783%2C6.006-4.557%20%20M39.694%2C14.238h3.19L40.09%2C0.902h-2.944c-0.663%2C0-1.22%2C0.387-1.47%2C0.98L30.5%2C14.234h3.62l0.722-1.991h4.424l0.42%2C1.991%20L39.694%2C14.238z%20M35.844%2C9.516l1.815-5.008L38.7%2C9.516h-2.86H35.844z%20M21.323%2C0.902L18.47%2C14.236h-3.45l2.85-13.334H21.323z%22%2F%3E%3C%2Fsvg%3E)",
                        backgroundRepeat: "no-repeat",
                        margin: "0px auto",
                        width: "100px",
                        height: "18px",
                        marginBottom: "20px"
                    };
                for (c in i) h.style[c] = i[c];
                var j = document.createElement("a"),
                    k = {
                        opacity: "0"
                    };
                E.copyKeys(k, d);
                for (c in k) j.style[c] = k[c];
                j.innerHTML = "Visa Checkout Logo", j.setAttribute("aria-label", "Visa Checkout"), j.setAttribute("tabindex", 0), E.addClass(j, "ghost-layer-logo-a"), h.appendChild(j);
                var l = document.createElement("p"),
                    m = {
                        maxWidth: "290px",
                        margin: "0px auto",
                        marginBottom: "20px",
                        fontWeight: "bold",
                        fontSize: "11px"
                    };
                E.copyKeys(m, d), l.setAttribute("aria-label", qb() ? a.message_iOS_safari : a.message), l.setAttribute("tabindex", 0), l.innerHTML = qb() ? a.message_iOS_safari : a.message;
                for (c in m) l.style[c] = m[c];
                E.addClass(l, "ghost-layer-text");
                var n = document.createElement("button"),
                    o = {
                        color: "#FED931",
                        border: "1px solid #FED931",
                        padding: "5px 20px",
                        background: "none"
                    };
                E.copyKeys(o, d), n.setAttribute("aria-label", qb() ? a.restart_button : a.find_button), n.setAttribute("tabindex", 0), n.innerHTML = qb() ? a.restart_button : a.find_button, n.onclick = function(a) {
                    return a.cancelBubble = !0, a.returnValue = !1, a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), qb() ? (Va("mobileSafariPopupRestart--{}"), setTimeout(function() {
                        sb()
                    }, 100)) : (e.focus(), Va("ghostLayerFindButtonClick--{}")), !1
                };
                for (c in o) n.style[c] = o[c];
                E.addClass(n, "ghost-layer-reopen");
                var p = document.createElement("p");
                p.style.marginTop = "20px";
                var q = document.createElement("a"),
                    r = {
                        color: "#FED931",
                        fontSize: "10px",
                        cursor: "pointer"
                    };
                E.copyKeys(r, d), q.setAttribute("aria-label", a.cancel_and_return), q.setAttribute("tabindex", 0), q.innerHTML = a.cancel_and_return, q.onclick = function() {
                    Va("ghostLayerCancelReturnClick--{}")
                };
                for (c in r) q.style[c] = r[c];
                E.addClass(q, "ghost-layer-cancel"), p.appendChild(q), g.appendChild(h), g.appendChild(l), g.appendChild(n), g.appendChild(p), document.body.appendChild(g)
            }
        },
        pb = function(a) {
            if (a.srcElement.className.indexOf("ghost-layer") == -1) {
                var b = g.querySelector(".ghost-layer-logo-a");
                b && b.focus()
            }
        },
        qb = function() {
            var a = ta(),
                b = /iP(ad|od|hone)/i.test(a),
                c = /WebKit/i.test(a);
            return b && c && !/CriOS/i.test(a)
        },
        rb = !1,
        sb = function(a) {
            var c, d, g = "VmeCheckout",
                h = Qa(a);
            if (Q) {
                if (!rb) {
                    rb = !0;
                    var i = document.createElement("style");
                    i.innerHTML = "@import url('https://fonts.googleapis.com/css?family=Open+Sans');", document.getElementsByTagName("head")[0].appendChild(i)
                }
                f = Ja("ghostLayer"), document.body.appendChild(f);
                var j = screen.height < 640 ? screen.height : 640,
                    k = screen.width < 400 ? screen.width : 400,
                    l = screen.width / 2 - k / 2,
                    m = screen.height / 2 - j / 2,
                    n = "directories=no, location=yes, menubar=no, scrollbars=yes, status=no, toolbar=no, resizable=no, width=" + k + ", height=" + j + ", top=" + m + ", left=" + l;
                e = window.open(h, g, n), e.focus()
            } else {
                var o, p, q = "rxo-open";
                wb(), c = Na(g), d = c.firstChild, o = "#" + s + "." + s + "{height: 100%; /*height: 100vh;*/ width: 100%; width: 100vw;} body.rxo-open {overflow:hidden;} body.rxo-ios-android { position: fixed; width: 100%; height:100%; }", p = document.createElement("style"), p.type = "text/css", p.styleSheet ? p.styleSheet.cssText = o : p.appendChild(document.createTextNode(o)), c.style.visibility = "", c.style.width = "100%", c.style.height = "100%", c.style.position = "fixed", c.style.top = 0, c.style.left = 0, c.style.zIndex = 999999, d.className = s, d.id = s, c.appendChild(p), d.src = h, d.title = t, E.addClass(document.body, q), document.getElementById(g) || document.body.appendChild(c), b || (b = c.offsetWidth), d.focus(), ha = !0
            }
        },
        tb = function(a) {
            a && (la = document.createElement("img"), la.src = a)
        },
        ub = function(a, d) {
            var f = "VmeCheckout",
                g = Na(f),
                h = g.firstChild,
                i = Pa(a),
                j = Ja("VmeCheckoutBackground"),
                k = ~navigator.userAgent.indexOf("Android") && navigator.userAgent.match(/Chrome\/[.0-9]* Mobile/);
            d && (i += "&fromEXO=true"), P || ("POPUP" !== J.settings.widgetStyle || Aa() ? (J.settings.widgetStyle = "LIGHTBOX", g.style.visibility = "", g.style.position = "absolute", g.style.height = "650px", g.style.width = "650px", g.style.marginLeft = "-325px", g.style.left = "50%", g.style.boxShadow = "rgba(0, 0, 0, 0.40) 5px 5px 16px", g.style.zIndex = "999999", g.style.borderRadius = "2px", k || (g.style.overflow = "hidden"), h.src = i, h.style.height = "650px", h.style.width = "100%", document.body.appendChild(j), document.getElementById(f) || document.body.appendChild(g), b || (b = g.offsetWidth), c = E.debounce(Ia, 30), E.addEvent(window, "resize", c), Ia(), Ma(document.getElementById(f)), window.scrollTo(0, 0), h.focus()) : ! function() {
                var a = 650,
                    b = 650,
                    c = screen.width / 2 - b / 2,
                    d = screen.height / 2 - a / 2,
                    g = "directories=no, location=yes, menubar=no, scrollbars=yes, status=no, toolbar=no, resizable=yes, width=" + b + ", height=" + a + ", top=" + d + ", left=" + c;
                e = window.open(i, f, g), e.focus()
            }())
        },
        vb = function(a, b) {
            _ === !0 ? oa ? T ? hb(F.getLastPay()) : db() ? sb() : ub(a, b) : (pa = !0, Ya(J)) : pa = !0
        },
        wb = function(a) {
            var b, h;
            e ? (e.close(), e = null, f && (document.body.removeChild(f), f = null), g && (document.body.removeChild(g), document.removeEventListener("focus", pb), g = null)) : (b = Ja("VmeCheckoutBackground"), b.parentElement === document.body && document.body.removeChild(b), h = Na("VmeCheckout"), h.parentElement === document.body && (document.body.removeChild(h), ha && (E.removeClass(document.body, "rxo-open rxo-ios-android"), yb(!0), ha = !1)), c && E.removeEvent(window, "resize", c), d && E.removeEvent(window, "resize", d))
        },
        xb = function() {
            var a, b, c = window.parent.document.querySelectorAll(".v-learn");
            for (b = 0; b < c.length; b++) a = c[b], a.style.visibility = "hidden"
        },
        yb = function(a) {
            ha && !a || Tb("closeButton")
        },
        zb = function(a) {
            ic("Success! However, no callback defined for success event. Data: ", a)
        },
        Ab = function(a) {
            ic("Canceled. (No callback defined for cancel event.)")
        },
        Bb = function(a, b) {
            try {
                window.console && console.error && console.error("Error occurred. (No callback defined for error event.) Error: ", b)
            } catch (a) {}
        },
        Cb = function(a) {
            try {
                if (a && "FAILURE" === a.status) {
                    a.reasonCode;
                    alert("Looks like something went wrong. You are now being redirected to Visa Checkout"), T = !1, vb()
                } else alert("Sorry, service is unavailable. --" + a.reasonCode)
            } catch (a) {
                ic("Unknown Error Happened on Chassis Flow")
            }
        },
        Db = function() {
            var a, b, c = window.parent.document.querySelectorAll(".v-button");
            for (b = 0; b < c.length; b++) a = c[b], a.style.visibility = "hidden"
        },
        Eb = function(a, b) {
            if (a || b) b = b || document.querySelector("[data-frame-id=" + a.id + "]"), b.style.visibility = "hidden";
            else {
                var c, d, e = document.querySelectorAll("img.v-button");
                for (d = 0; d < e.length; d++) c = e[d], c.style.visibility = "hidden"
            }
        },
        Fb = function() {
            if (fa && ga)
                for (var a = document.querySelectorAll(".v-learn"), b = a.length, c = 0; c < b; c++) a[c].style.visibility = "hidden"
        },
        Gb = function() {
            var a = function(a) {
                    var b = J.settings;
                    return b[a] || J[a] || "false"
                },
                b = J.paymentRequest,
                c = b.currencyCode || "",
                d = b.total || "",
                e = J.allowCustomBranding || "",
                f = J.externalClientId || "",
                g = a("guestCheckout"),
                h = a("allowEnrollment"),
                i = J.settings.shipping && J.settings.shipping.collectShipping || "false",
                j = {
                    allowCustomBranding: e,
                    externalClientId: f,
                    currencyCode: c,
                    total: d,
                    collectShipping: i,
                    guestCheckout: g,
                    allowEnrollment: h,
                    widget_style: Q ? "Popup" : "Lightbox"
                },
                k = {
                    newUserWelcomeMessage: "",
                    newUserWelcomeMessageDescription: "",
                    returningUserWelcomeMessage: ""
                };
            for (var l in k) k.hasOwnProperty(l) && (J.settings[l] ? k[l] = "custom" : k[l] = "default"), j[l] = k[l];
            "undefined" == typeof ka.gtm && (ka.gtm = {});
            for (var m in j) j.hasOwnProperty(m) && (ka.gtm[m] = j[m])
        },
        Hb = function(a) {
            var b, c;
            return ma ? a ? "none" === a.toLowerCase() ? (J = Kb(J), b = null, c = "none") : (b = ma[a], c = "custom", b || (b = na, c = "custom")) : (c = "custom", b = na) : (J = Kb(J), c = "default", b = null), "undefined" == typeof ka.gtm && (ka.gtm = {}), ka.gtm.background_img_type = c, b
        },
        Ib = function() {
            var a = J[m],
                b = Hb(a);
            tb(b), J[l] = b
        },
        Jb = function(a, b) {
            if (a) {
                for (var c = {}, d = a.length - 1; d >= 0; --d) {
                    var e = a[d];
                    c[e.imageId] = e.imageURL
                }
                b && c[b] ? na = c[b] : console.warn("Merchant profile does not contain default image for custom branding."), ma = c, Ib()
            }
        },
        Kb = function(a) {
            return delete a[l], a.settings && delete a.settings[l], a
        },
        Lb = function(a) {
            return a = Kb(a), delete a[n], delete a[o], delete a[p], a.settings && (delete a.settings[n], delete a.settings[o], delete a.settings[p]), a
        },
        Mb = function(a, b, c) {
            var d = b ? a.intialVinit : a.merchantConfig;
            if (d) {
                if (Nb(J, d, "clientId"), Nb(J, a, "allowEnrollment"), Nb(J, d, "externalClientId"), Nb(J, d, "allowCustomBranding"), Nb(J, d, "guestCheckout"), Nb(J, d, "currencyFormat"), d.bannerURL && Nb(J, d, "bannerURL"), c) {
                    if (a && a.vInitRequest && a.vInitRequest.settings) {
                        var e = a.vInitRequest.settings,
                            f = e.welcomeTitleMessage,
                            g = e.welcomeContentMessage,
                            h = e.returningMessage;
                        f && (J[n] = f), g && (J[o] = g), h && (J[p] = h)
                    }
                    Nb(J, d, n), Nb(J, d, o), Nb(J, d, p), Jb(d.backgroundImages, d.backgroundImageId)
                } else d = Lb(d), J = Lb(J);
                Nb(J.settings, d, "widgetStyle"), Nb(J.settings, d, "buttonPosition"), Nb(J, d, r), Nb(J, d, q);
                var j = d.logo;
                if (j && (j.url && (J[q] = j.url), j[r] && (J[r] = j[r])), d.shippingConstraints && (J.settings.shipping = J.settings.shipping || {}, Nb(J.settings.shipping, d.shippingConstraints, "collectShipping"), d.shippingConstraints.acceptedRegions && (d.shippingConstraints.acceptedRegions = d.shippingConstraints.acceptedRegions.region || [], Nb(J.settings.shipping, d.shippingConstraints, "acceptedRegions", Pb))), d.billingConstraints && (J.settings.payment = J.settings.payment || {}, d.billingConstraints.acceptedRegions && (d.billingConstraints.acceptedRegions = d.billingConstraints.acceptedRegions.region || [], Ob(J.settings.payment, d.billingConstraints, "acceptedRegions", "billingCountries", Pb))), J.settings.threeDSSuppressChallenge && (d.threeDSSuppressChallenge = "false"), E.copyKeys(d, ea), E.copyKeys(J, ea), b) return d;
                i = d, eb(), fb()
            }
        },
        Nb = function(a, b, c, d) {
            !(c in a) && c in b && (a[c] = b[c], d && "function" == typeof d && (a[c] = d(a[c])))
        },
        Ob = function(a, b, c, d, e) {
            !(d in a) && c in b && (a[d] = b[c], e && "function" == typeof e && (a[d] = e(a[d])))
        },
        Pb = function(a) {
            var b = [];
            if (a instanceof Array)
                for (var c = 0; c < a.length; c++) a[c] && a[c].countryCode && b.push(a[c].countryCode);
            return b
        },
        Qb = function(a) {
            var b = 0,
                c = 0;
            do b += a.offsetTop || 0, c += a.offsetLeft || 0, a = a.offsetParent; while (a);
            return {
                top: b,
                left: c
            }
        },
        Rb = function(a, b) {
            for (var c = 0, d = a.length; c < d; ++c) Sb({
                data: a[c],
                origin: b
            })
        },
        Sb = function(a) {
            if (a.origin === Ka()) {
                var b = "--",
                    c = "+-+-+";
                if (a.data && "string" == typeof a.data) {
                    if (a.data.indexOf(c) > -1) return Rb(a.data.split(c), Ka());
                    if (!(a.data.indexOf(b) < -1)) {
                        var d, f, g, h = a.data.split(b),
                            l = {};
                        try {
                            switch (l = JSON.parse(h[1]), h.length > 2 && (d = JSON.parse(h[2])), h.length > 3 && (f = JSON.parse(h[3])), g = !f || f.hideWidget, "v1" !== l.merchantType && (l.vInitRequest = J), delete l.merchantType, h[0]) {
                                case "ghostLayerText":
                                    ob(l);
                                    break;
                                case "checkCorrId":
                                    var m = Na(l.frameName).firstChild.contentWindow,
                                        n = {};
                                    n.hasCorrId = "undefined" != typeof k && null !== k, k && (n.corrId = k), l.fromWidget ? e ? e.postMessage("corrIdData-" + JSON.stringify(n), l.target) : l.fromRxo ? m.postMessage("corrIdData--" + JSON.stringify(n), l.target) : m.postMessage("corrIdData-" + JSON.stringify(n), l.target) : l.fromExo ? Tb("corrIdData-" + JSON.stringify(n), l.id) : e ? e.postMessage(JSON.stringify(n), l.target) : m.postMessage(JSON.stringify(n), l.target);
                                    break;
                                case "showRxoPopup":
                                    Q = !0;
                                    break;
                                case "getMerchantConfig":
                                    var o = {
                                            vInitRequest: Vb(),
                                            merchantConfig: i
                                        },
                                        p = "setMerchantConfig--" + JSON.stringify(o);
                                    Va(p);
                                    break;
                                case "animatedButton":
                                    ca.buttonAnimation = !0, fb();
                                    break;
                                case "getMerchantConfigForCXO":
                                    ra = !0;
                                    break;
                                case "storeCorrId":
                                    k = l.correlationId;
                                    break;
                                case "success":
                                    try {
                                        D && (Y = A), zb(l)
                                    } finally {
                                        k = null, wb(), yb()
                                    }
                                    k = null, D = !1;
                                    break;
                                case "cancel":
                                    try {
                                        Ab(l)
                                    } finally {
                                        g && wb(), yb()
                                    }
                                    k = null, F.replaceCardArt();
                                    break;
                                case "error":
                                    try {
                                        Bb(l, d)
                                    } finally {
                                        g && wb(), yb()
                                    }
                                    F.replaceCardArt();
                                    break;
                                case "redirectToRxo":
                                    try {
                                        Cb(l)
                                    } catch (a) {
                                        console.error(a)
                                    }
                                    break;
                                case "lock":
                                    Bb(l), g && wb(), yb();
                                    break;
                                case "hide":
                                    Bb({
                                        vInitRequest: {}
                                    }, {
                                        code: 401,
                                        message: "Invalid API Key"
                                    }), Db(), Eb(), xb(), D = !1;
                                    break;
                                case "hideLearnMore":
                                    fa = !0, Fb();
                                    break;
                                case "close":
                                    wb(), l && "learn" === l.origin || yb(), k = null, D = !1;
                                    break;
                                case "launchFromLearn":
                                    wb(), l && l.startPath && (j = l.startPath), Q = !1, vb();
                                    break;
                                case "lockButton":
                                    Ga(O, !1), xb();
                                    break;
                                case "euroInfo":
                                    aa = l;
                                    break;
                                case "merchantConfig":
                                    oa = !0, f.vInitRequest && f.vInitRequest.browserLocale && (l.vInitRequest.browserLocale = f.vInitRequest.browserLocale), Mb(l, !1, !!l.merchantConfig.allowCustomBranding), Gb(), S && hc(), F.sendMerchantConfigToCXO(), pa && (pa = !1, vb());
                                    break;
                                case "fitContent":
                                    if (l && l.height) {
                                        var q = Na("VmeCheckout");
                                        q.style.height = l.height + "px", q.firstChild.style.height = l.height + "px"
                                    }
                                    bb();
                                    break;
                                case "fitExoContent":
                                    if (l) {
                                        var q = document.getElementById(l.id),
                                            r = q.parentNode;
                                        q.style.height = l.iframeHeight + "px", r.style.height = l.iframeHeight + "px", Object.keys(l.styles).forEach(function(a) {
                                            "display" === a && "none" !== l.styles[a] || (r.style[a] = "number" != typeof l.styles[a] ? l.styles[a] : l.styles[a] + "px")
                                        }), "none" === r.style.display && "none" !== l.styles.display && (r.style.display = "block", q.style.height = l.iframeHeight + 1 + "px"), /absolute/i.test(l.styles.position) && r.style.setProperty("margin-top", l.styles.marginTop + "px", "important"), l.sendPostBack && Tb("iframeResizeDone--" + q.style.height, l.id)
                                    }
                                    break;
                                case "setExoAbData":
                                    l && E.copyKeys(da, l.experiments);
                                    break;
                                case "getABData":
                                    var s = da,
                                        t = "setABData",
                                        u = l.fromExo ? "-" : "--",
                                        p = [t, JSON.stringify(s)].join(u);
                                    l.fromExo ? S && Tb(p, l.id) : Va(p);
                                    break;
                                case "disableRxo":
                                    R = !0;
                                    break;
                                case "enableCobrand":
                                    V = !0;
                                    break;
                                case "enableCXO":
                                    l && l.isCXOEnabled && (U = !0, W = l.cxoEnvConfig), F.flipButtonState();
                                    break;
                                case "vxoAllowEXO":
                                    S = !0, ba = l.exoMutationObserverWhitelisted > 0, eb();
                                    break;
                                case "vxoAllowCXO":
                                    l && l.status === !0 ? (T = !0, _ = !0) : (_ = !0, S && eb()), pa && (pa = !1, vb());
                                    break;
                                case "cxoLinkedPays":
                                    l && l.linkedPays ? (X = l.linkedPays, qa ? console.log(JSON.stringify(X)) : null) : S && (_ = !0, eb());
                                    break;
                                case "cxoLastPay":
                                    l && l.lastPay && (Y = l.lastPay);
                                    break;
                                case "storeAdditionalXoParams":
                                    l && E.copyKeys(ka, l);
                                    break;
                                case "getSDKParams":
                                    var v = E.copyKeys({}, ka);
                                    v.vcopParams && (v.vcopParams.lastSelectedPay = $);
                                    var p = "setSDKParams--" + JSON.stringify(v);
                                    Va(p);
                                    break;
                                case "fullCheckout":
                                    l && l.route ? vb(l.route, !0) : vb(null, !0);
                                    break;
                                case "disableButtons":
                                    Tb("disableButton", l.id, !0);
                                    break;
                                case "enableButtons":
                                    Tb("enableButton", l.id, !0);
                                    break;
                                case "scrollIntoView":
                                    var q = document.getElementById(l.id),
                                        w = q.parentNode.parentNode.querySelectorAll("img.v-button"),
                                        x = Array.prototype.reduce.call(w, function(a, b) {
                                            return a ? a : b.dataset.exoTarget ? b : a
                                        }, !1),
                                        y = Qb(x),
                                        B = .3 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                                        C = y.top - B,
                                        H = parseInt(document.body.scrollTop),
                                        I = C - H,
                                        K = 500,
                                        L = Date.now(),
                                        M = function() {
                                            var a = (Date.now() - L) / K;
                                            document.body.scrollTop = H + I * a, setTimeout(function() {
                                                Date.now() < L + K && M()
                                            }, 1e3 / 60)
                                        };
                                    M();
                                    break;
                                case "postMerchantConfig":
                                    var o = Vb(),
                                        p = "merchantConfigData-" + JSON.stringify(o);
                                    Va(p, "VmeCheckout", l.target);
                                    break;
                                case "postMerchantConfigToEXO":
                                    var o = Vb();
                                    Tb("merchantConfigData-" + JSON.stringify(o), l.id);
                                    break;
                                case "prerenderReady":
                                    var q = document.getElementById(l.id);
                                    q && (l.isHidden ? console.log("Cannot hide static button due to hide/show scenario... waiting for full app load.") : (console.log(l, "prerenderReady!!!!"), Eb(q)));
                                    break;
                                case "focusTunnel":
                                    var q = document.getElementById(l.id);
                                    q && ("back" === l.direction ? q.focusPrevious() : q.focusNext());
                                    break;
                                case "applyRxoStyles":
                                    nb();
                                    break;
                                case "clickQueuedBySSR":
                                    Tb("clickedSSR");
                                    break;
                                case "pushGtmData":
                                    Ub(l, z);
                                    break;
                                case G.events.FETCH_LAUNCHER_DATA:
                                    G.fetchLauncherData();
                                    break;
                                case G.events.SELECT_PAY:
                                    G.selectPay(l);
                                    break;
                                case G.events.SUCCESS_PAY:
                                    G.successPay(l);
                                    break;
                                case G.events.CHANGE_PAY:
                                    G.changePay();
                                    break;
                                case G.events.CANCEL_PAY_SELECTOR:
                                    G.close();
                                    break;
                                case G.events.ERROR_PAY:
                                    G.errorPay(l)
                            }
                        } catch (a) {
                            console.error(a)
                        }
                    }
                }
            }
        },
        Tb = function(a, b, c) {
            for (var d = document.querySelectorAll(".ExoCheckoutClass > iframe"), e = d.length, f = 0; f < e; f++) {
                var g = d[f],
                    h = g && g.contentWindow;
                h && (!b || c && b !== d[f].id || !c && b === d[f].id) && h.postMessage(a, "*")
            }
        },
        Ub = function(a, b) {
            var c = document.getElementById(b);
            if (c || b) {
                var d = Ka(),
                    e = c && c.childNodes[0] && c.childNodes[0].contentWindow;
                e && b === c.id && e.postMessage(a, d)
            }
        },
        Vb = function() {
            var a = E.copyKeys({}, J, J.settings);
            return Wb(a), delete a.settings, a.shipping && a.shipping.acceptedRegions && 0 === a.shipping.acceptedRegions.length && delete a.shipping.acceptedRegions, a.payment && a.payment.billingCountries && 0 === a.payment.billingCountries.length && delete a.payment.billingCountries, a.payment && a.payment.cardBrands && 0 === a.payment.cardBrands.length && delete a.payment.cardBrands, j && (a.startPath = j), a.intialVinit || (a.intialVinit = E.copyKeys({}, K, K.settings), Mb(a, !0, "true" === a.allowCustomBranding)), a
        },
        Wb = function(a, b) {
            for (var c in a)
                if (a.hasOwnProperty(c)) {
                    var d = b ? b + "[" + c + "]" : c,
                        e = a[c];
                    "object" == typeof e ? Wb(e, d) : "boolean" == typeof e && (a[c] = e.toString())
                }
        },
        Xb = function(a, b) {
            var c = [];
            for (var d in a)
                if (a.hasOwnProperty(d)) {
                    var e = b ? b + "[" + d + "]" : d,
                        f = a[d];
                    "object" == typeof f ? c.push(Xb(f, e)) : "boolean" == typeof f ? c.push(encodeURIComponent(e) + "=" + encodeURIComponent(f)) : c.push(encodeURIComponent(e) + "=" + encodeURIComponent(f))
                }
            return c.join("&")
        },
        Yb = function(a, b) {
            var c = a.parentNode,
                d = document.createElement("img"),
                e = La() + "/wallet-services-web/xo/button.png?size=" + B.SMALL;
            b && (e += "&locale=" + b), d.setAttribute("src", e), d.setAttribute("class", "v-button"), d.style.maxWidth = "154px", d.style.maxHeight = "34px", c && c.appendChild(d)
        },
        Zb = function(a) {
            var b, c, d, e = $b(a, window);
            e ? (b = function(a) {
                e("purchase.success", a)
            }, c = function(a) {
                e("purchase.cancel", a)
            }, d = function(a) {
                e("purchase.error", a)
            }, H.on("payment.success", b), H.on("payment.cancel", c), H.on("payment.error", d)) : ic("Error: No callback defined.")
        },
        $b = function(a, b) {
            for (var c = a.split("."), d = c.pop(), e = 0; e < c.length; e++) b = b[c[e]];
            return b[d]
        },
        _b = function() {
            var a = document.getElementsByTagName("v:init");
            return a && 0 !== a.length || (a = document.getElementsByTagName("init")), a.length && a.length > 0 ? a[0] : void 0
        },
        ac = function(a, b) {
            var c = null;
            try {
                c = window.getComputedStyle(a, null).getPropertyValue(b)
            } catch (d) {
                c = a.currentStyle[b]
            }
            return c
        },
        bc = function() {
            var a = document.getElementsByTagName("v:buy");
            return a && 0 !== a.length || (a = document.getElementsByTagName("buy")), a
        },
        cc = function() {
            return window.onVisaCheckoutReady || window.onVmeReady
        },
        dc = function() {
            var a, b, c, d, e, f, g, h, i, j, k, l, m = _b(),
                n = bc(),
                o = n.length;
            if (m && o > 0)
                for (var p = 0; p < o; ++p) {
                    var q = n[p];
                    try {
                        b = q.getAttribute("apikey") || m.getAttribute("apikey"), d = q.getAttribute("callback") || m.getAttribute("callback"), f = m.getAttribute("country") || "", 3 === f.length && ("USA" === f ? f = "US" : "CAN" === f ? f = "CA" : "AUS" === f && (f = "AU")), h = m.getAttribute("locale") || "", i = m.getAttribute("logo-url") || "", l = q.getAttribute("amount") || "", e = q.getAttribute("collect-shipping") || "", g = q.getAttribute("currency") || "", j = q.getAttribute("product-id") || "", k = q.getAttribute("merch-trans") || "", c = q.getAttribute("reviewmode") || "", a = {
                            apikey: b,
                            settings: {
                                locale: h,
                                countryCode: f,
                                logoUrl: i,
                                shipping: {
                                    collectShipping: e
                                },
                                review: {
                                    buttonAction: c
                                }
                            },
                            paymentRequest: {
                                merchantRequestId: j,
                                currencyCode: g,
                                total: l,
                                orderId: k
                            }
                        }, Zb(d), Yb(q, h), H.init(a)
                    } catch (a) {
                        console.error(a)
                    }
                } else ic("No valid Visa Checkout integrations")
        },
        ec = function(a) {
            Ya(a, z, Ua())
        },
        fc = function(a) {
            a.onload = function() {
                ja++, eb()
            }
        },
        gc = function(a) {
            return ja >= ia
        },
        hc = function() {
            var a = document.querySelectorAll("img.v-button");
            ia = a.length;
            for (var b = 0; b < a.length; b++) {
                var c = a[b],
                    d = !1,
                    e = !1,
                    f = "0px" !== ac(c, "height"),
                    g = "0px" !== ac(c, "width");
                (c.getAttribute("height") || c.style.height || f) && (d = !0), (c.getAttribute("width") || c.style.width || g) && (e = !0), e && d ? ja++ : fc(c)
            }
        },
        ic = function(a, b) {
            try {
                b && "undefined" != typeof b ? window.console && console.log(a, b) : window.console && console.log(a)
            } catch (a) {}
        },
        jc = function(a) {
            13 === a.keyCode && vb()
        },
        kc = function() {
            vb()
        };
    H.init = function(a) {
      debugger;
            var b, c, d = document.querySelectorAll(".v-button");
            if (ja > 0 && (ja = ia), a.parentUrl = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "") + window.location.pathname, a.parentUrl.indexOf(";") > -1) {
                var e = a.parentUrl.indexOf(";");
                a.parentUrl = a.parentUrl.slice(0, e)
            }
            P = !1, J = a, J.settings || (J.settings = {}), J.paymentRequest || (J.paymentRequest = {}), K = E.deepCopyObject(a), J[m] = a[m] || a.settings[m], Ib(), ec(a), Ya(a), gb(a);
            var f = function(a) {
                return function() {
                    var b = 1 + a;
                    this.style.filter = "brightness(" + b + ")"
                }
            };
            for (c = 0; c < d.length; c++)
                if (b = d[c], b.style.cursor = "pointer", E.addEvent(b, "click", kc), "IMG" === b.tagName && (b.getAttribute("tabindex") || b.setAttribute("tabindex", "0"), E.addEvent(b, "keydown", jc)), ua()) {
                    b.style.transitionProperty = "filter", b.style.transitionDuration = "0.25s";
                    var g = f(0),
                        h = f(.2),
                        i = f(.5);
                    E.addEvent(b, "mousedown", i), E.addEvent(b, "mouseup", h), E.addEvent(b, "mouseenter", h), E.addEvent(b, "mouseout", g), E.addEvent(b, "focus", h), E.addEvent(b, "blur", g)
                }
            _a(), E.addEvent(window, "message", Sb)
        }, H.on = function(a, b) {
            if (b && "function" == typeof b) switch (a) {
                case "payment.success":
                    zb = b;
                    break;
                case "payment.cancel":
                    Ab = b;
                    break;
                case "payment.error":
                    Bb = b;
                    break;
                default:
                    try {
                        window.console && console.error("Error - no callback named " + a + " is defined")
                    } catch (a) {}
            }
        }, H.setOptions = function(a) {
            var b, c = document.querySelectorAll(".v-button");
            for (b = 0; b < c.length; b++) c[b].src = La() + "/wallet-services-web/xo/button.png", c[b].title = "";
            a.parentUrl = window.location.href, J = a, J.settings || (J.settings = {}), J.paymentRequest || (J.paymentRequest = {}), ec(a), Ya(a)
        },
        function(a) {
            if (sa()) {
                var b = function() {
                        return cc() || !!_b()
                    },
                    c = {
                        interactive: 1,
                        complete: 1
                    },
                    d = !1,
                    e = this;
                c[document.readyState] && b() ? (d = !0, a.apply(e)) : E.addEvent(document, "readystatechange", function() {
                    c[document.readyState] && b() && (d || (d = !0, a.apply(e)))
                })
            } else Ga("Detected browser version does not support Visa Checkout", !0)
        }(function() {
            I && I();
            var a = cc();
            a ? a() : dc()
        })
}("V");
//# sourceMappingURL=sdk.js.map