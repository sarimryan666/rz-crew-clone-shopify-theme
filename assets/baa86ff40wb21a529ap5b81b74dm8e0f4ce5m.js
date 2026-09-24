(() => {
    var e = {
            11: (e, t, n) => {
                "use strict";
                var r = n(9058),
                    o = String,
                    i = TypeError;
                e.exports = function(e) {
                    if (r(e)) return e;
                    throw new i("Can't set " + o(e) + " as a prototype")
                }
            },
            74: (e, t, n) => {
                "use strict";
                var r = n(1399),
                    o = n(5201),
                    i = TypeError,
                    s = Object.getOwnPropertyDescriptor,
                    a = r && ! function() {
                        if (void 0 !== this) return !0;
                        try {
                            Object.defineProperty([], "length", {
                                writable: !1
                            }).length = 1
                        } catch (e) {
                            return e instanceof TypeError
                        }
                    }();
                e.exports = a ? function(e, t) {
                    if (o(e) && !s(e, "length").writable) throw new i("Cannot set read only .length");
                    return e.length = t
                } : function(e, t) {
                    return e.length = t
                }
            },
            78: (e, t, n) => {
                "use strict";
                var r = n(1834);
                e.exports = function(e, t, n) {
                    for (var o, i, s = n ? e : e.iterator, a = e.next; !(o = r(a, s)).done;)
                        if (void 0 !== (i = t(o.value))) return i
                }
            },
            164: (e, t, n) => {
                "use strict";
                var r = n(9544),
                    o = n(8078),
                    i = r("iterator"),
                    s = Array.prototype;
                e.exports = function(e) {
                    return void 0 !== e && (o.Array === e || s[i] === e)
                }
            },
            352: (e, t, n) => {
                "use strict";
                var r = n(1834),
                    o = n(6895),
                    i = n(960),
                    s = n(7636),
                    a = n(3649),
                    c = n(3842),
                    u = a(function() {
                        var e = this.iterator,
                            t = i(r(this.next, e));
                        if (!(this.done = !!t.done)) return c(e, this.mapper, [t.value, this.counter++], !0)
                    });
                e.exports = function(e) {
                    return i(this), o(e), new u(s(this), {
                        mapper: e
                    })
                }
            },
            380: (e, t, n) => {
                "use strict";
                var r = n(1399),
                    o = n(1536),
                    i = n(2661),
                    s = n(960),
                    a = n(3094),
                    c = TypeError,
                    u = Object.defineProperty,
                    d = Object.getOwnPropertyDescriptor,
                    l = "enumerable",
                    p = "configurable",
                    h = "writable";
                t.f = r ? i ? function(e, t, n) {
                    if (s(e), t = a(t), s(n), "function" == typeof e && "prototype" === t && "value" in n && h in n && !n[h]) {
                        var r = d(e, t);
                        r && r[h] && (e[t] = n.value, n = {
                            configurable: p in n ? n[p] : r[p],
                            enumerable: l in n ? n[l] : r[l],
                            writable: !1
                        })
                    }
                    return u(e, t, n)
                } : u : function(e, t, n) {
                    if (s(e), t = a(t), s(n), o) try {
                        return u(e, t, n)
                    } catch (r) {}
                    if ("get" in n || "set" in n) throw new c("Accessors not supported");
                    return "value" in n && (e[t] = n.value), e
                }
            },
            459: (e, t, n) => {
                "use strict";
                var r = n(3013),
                    o = n(8280).concat("length", "prototype");
                t.f = Object.getOwnPropertyNames || function(e) {
                    return r(e, o)
                }
            },
            482: e => {
                "use strict";
                e.exports = {}
            },
            543: (e, t, n) => {
                "use strict";
                var r = n(1105);
                e.exports = function(e) {
                    return r(e.length)
                }
            },
            621: (e, t, n) => {
                "use strict";
                var r = n(4202);
                e.exports = function(e) {
                    return "object" == typeof e ? null !== e : r(e)
                }
            },
            654: (e, t, n) => {
                "use strict";
                var r = n(8482),
                    o = n(6591);
                e.exports = function(e) {
                    return r(o(e))
                }
            },
            663: (e, t, n) => {
                "use strict";
                n(6202)
            },
            679: (e, t, n) => {
                "use strict";
                var r = n(4202),
                    o = n(380),
                    i = n(4952),
                    s = n(4980);
                e.exports = function(e, t, n, a) {
                    a || (a = {});
                    var c = a.enumerable,
                        u = void 0 !== a.name ? a.name : t;
                    if (r(n) && i(n, u, a), a.global) c ? e[t] = n : s(t, n);
                    else {
                        try {
                            a.unsafe ? e[t] && (c = !0) : delete e[t]
                        } catch (d) {}
                        c ? e[t] = n : o.f(e, t, {
                            value: n,
                            enumerable: !1,
                            configurable: !a.nonConfigurable,
                            writable: !a.nonWritable
                        })
                    }
                    return e
                }
            },
            728: (e, t, n) => {
                "use strict";
                var r = n(6947);
                e.exports = r({}.isPrototypeOf)
            },
            764: (e, t, n) => {
                "use strict";
                var r = n(1311),
                    o = n(4202),
                    i = n(7759),
                    s = n(9544)("toStringTag"),
                    a = Object,
                    c = "Arguments" === i(function() {
                        return arguments
                    }());
                e.exports = r ? i : function(e) {
                    var t, n, r;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                        try {
                            return e[t]
                        } catch (n) {}
                    }(t = a(e), s)) ? n : c ? i(t) : "Object" === (r = i(t)) && o(t.callee) ? "Arguments" : r
                }
            },
            960: (e, t, n) => {
                "use strict";
                var r = n(621),
                    o = String,
                    i = TypeError;
                e.exports = function(e) {
                    if (r(e)) return e;
                    throw new i(o(e) + " is not an object")
                }
            },
            1105: (e, t, n) => {
                "use strict";
                var r = n(1578),
                    o = Math.min;
                e.exports = function(e) {
                    var t = r(e);
                    return t > 0 ? o(t, 9007199254740991) : 0
                }
            },
            1120: (e, t, n) => {
                "use strict";
                var r = n(6947),
                    o = n(5201),
                    i = n(4202),
                    s = n(7759),
                    a = n(8144),
                    c = r([].push);
                e.exports = function(e) {
                    if (i(e)) return e;
                    if (o(e)) {
                        for (var t = e.length, n = [], r = 0; r < t; r++) {
                            var u = e[r];
                            "string" == typeof u ? c(n, u) : "number" != typeof u && "Number" !== s(u) && "String" !== s(u) || c(n, a(u))
                        }
                        var d = n.length,
                            l = !0;
                        return function(e, t) {
                            if (l) return l = !1, t;
                            if (o(this)) return t;
                            for (var r = 0; r < d; r++)
                                if (n[r] === e) return t
                        }
                    }
                }
            },
            1249: (e, t, n) => {
                "use strict";
                var r = n(5833),
                    o = n(9634),
                    i = r.Set,
                    s = r.add;
                e.exports = function(e) {
                    var t = new i;
                    return o(e, function(e) {
                        s(t, e)
                    }), t
                }
            },
            1256: (e, t, n) => {
                "use strict";
                n(5873)
            },
            1311: (e, t, n) => {
                "use strict";
                var r = {};
                r[n(9544)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
            },
            1381: (e, t, n) => {
                "use strict";
                var r = n(4862),
                    o = function(e) {
                        return {
                            size: e,
                            has: function() {
                                return !1
                            },
                            keys: function() {
                                return {
                                    next: function() {
                                        return {
                                            done: !0
                                        }
                                    }
                                }
                            }
                        }
                    };
                e.exports = function(e) {
                    var t = r("Set");
                    try {
                        (new t)[e](o(0));
                        try {
                            return (new t)[e](o(-1)), !1
                        } catch (n) {
                            return !0
                        }
                    } catch (i) {
                        return !1
                    }
                }
            },
            1399: (e, t, n) => {
                "use strict";
                var r = n(4492);
                e.exports = !r(function() {
                    return 7 !== Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                })
            },
            1536: (e, t, n) => {
                "use strict";
                var r = n(1399),
                    o = n(4492),
                    i = n(3552);
                e.exports = !r && !o(function() {
                    return 7 !== Object.defineProperty(i("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            },
            1548: (e, t, n) => {
                "use strict";
                var r = n(728),
                    o = TypeError;
                e.exports = function(e, t) {
                    if (r(t, e)) return e;
                    throw new o("Incorrect invocation")
                }
            },
            1554: function(e, t, n) {
                var r;
                ! function(o, i) {
                    "use strict";
                    var s = "function",
                        a = "undefined",
                        c = "object",
                        u = "string",
                        d = "major",
                        l = "model",
                        p = "name",
                        h = "type",
                        f = "vendor",
                        m = "version",
                        v = "architecture",
                        g = "console",
                        y = "mobile",
                        b = "tablet",
                        w = "smarttv",
                        _ = "wearable",
                        x = "embedded",
                        I = "Amazon",
                        k = "Apple",
                        E = "ASUS",
                        S = "BlackBerry",
                        P = "Browser",
                        T = "Chrome",
                        A = "Firefox",
                        C = "Google",
                        O = "Huawei",
                        N = "LG",
                        R = "Microsoft",
                        j = "Motorola",
                        U = "Opera",
                        D = "Samsung",
                        M = "Sharp",
                        $ = "Sony",
                        L = "Xiaomi",
                        q = "Zebra",
                        B = "Facebook",
                        V = "Chromium OS",
                        z = "Mac OS",
                        F = function(e) {
                            for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                            return t
                        },
                        H = function(e, t) {
                            return typeof e === u && -1 !== W(t).indexOf(W(e))
                        },
                        W = function(e) {
                            return e.toLowerCase()
                        },
                        K = function(e, t) {
                            if (typeof e === u) return e = e.replace(/^\s\s*/, ""), typeof t === a ? e : e.substring(0, 500)
                        },
                        Y = function(e, t) {
                            for (var n, r, o, a, u, d, l = 0; l < t.length && !u;) {
                                var p = t[l],
                                    h = t[l + 1];
                                for (n = r = 0; n < p.length && !u && p[n];)
                                    if (u = p[n++].exec(e))
                                        for (o = 0; o < h.length; o++) d = u[++r], typeof(a = h[o]) === c && a.length > 0 ? 2 === a.length ? typeof a[1] == s ? this[a[0]] = a[1].call(this, d) : this[a[0]] = a[1] : 3 === a.length ? typeof a[1] !== s || a[1].exec && a[1].test ? this[a[0]] = d ? d.replace(a[1], a[2]) : i : this[a[0]] = d ? a[1].call(this, d, a[2]) : i : 4 === a.length && (this[a[0]] = d ? a[3].call(this, d.replace(a[1], a[2])) : i) : this[a] = d || i;
                                l += 2
                            }
                        },
                        J = function(e, t) {
                            for (var n in t)
                                if (typeof t[n] === c && t[n].length > 0) {
                                    for (var r = 0; r < t[n].length; r++)
                                        if (H(t[n][r], e)) return "?" === n ? i : n
                                } else if (H(t[n], e)) return "?" === n ? i : n;
                            return e
                        },
                        X = {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        },
                        G = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [m, [p, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [m, [p, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [p, m],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [m, [p, U + " Mini"]],
                                [/\bopr\/([\w\.]+)/i],
                                [m, [p, U]],
                                [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                                [m, [p, "Baidu"]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [p, m],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [m, [p, "UC" + P]],
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                                [m, [p, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [m, [p, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [m, [p, "IE"]],
                                [/ya(?:search)?browser\/([\w\.]+)/i],
                                [m, [p, "Yandex"]],
                                [/slbrowser\/([\w\.]+)/i],
                                [m, [p, "Smart Lenovo " + P]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [p, /(.+)/, "$1 Secure " + P], m
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [m, [p, A + " Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [m, [p, U + " Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [m, [p, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [m, [p, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [m, [p, U + " Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [m, [p, "MIUI " + P]],
                                [/fxios\/([-\w\.]+)/i],
                                [m, [p, A]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [p, "360 " + P]
                                ],
                                [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                                [
                                    [p, /(.+)/, "$1 " + P], m
                                ],
                                [/samsungbrowser\/([\w\.]+)/i],
                                [m, [p, D + " Internet"]],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [p, /_/g, " "], m
                                ],
                                [/metasr[\/ ]?([\d\.]+)/i],
                                [m, [p, "Sogou Explorer"]],
                                [/(sogou)mo\w+\/([\d\.]+)/i],
                                [
                                    [p, "Sogou Mobile"], m
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [p, m],
                                [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                                [p],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [p, B], m
                                ],
                                [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                                [p, m],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [m, [p, "GSA"]],
                                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                                [m, [p, "TikTok"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [m, [p, T + " Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [p, T + " WebView"], m
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [m, [p, "Android " + P]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [p, m],
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                [m, [p, "Mobile Safari"]],
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                [m, p],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [p, [m, J, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [p, m],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [p, "Netscape"], m
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [m, [p, A + " Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                                [p, m],
                                [/(cobalt)\/([\w\.]+)/i],
                                [p, [m, /master.|lts./, ""]]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    [v, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [v, W]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [v, "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    [v, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [v, "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    [v, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    [v, /ower/, "", W]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [v, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [v, W]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [l, [f, D],
                                    [h, b]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [l, [f, D],
                                    [h, y]
                                ],
                                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                                [l, [f, k],
                                    [h, y]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [l, [f, k],
                                    [h, b]
                                ],
                                [/(macintosh);/i],
                                [l, [f, k]],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [l, [f, M],
                                    [h, y]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [l, [f, O],
                                    [h, b]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                [l, [f, O],
                                    [h, y]
                                ],
                                [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [l, /_/g, " "],
                                    [f, L],
                                    [h, y]
                                ],
                                [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [l, /_/g, " "],
                                    [f, L],
                                    [h, b]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [l, [f, "OPPO"],
                                    [h, y]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [l, [f, "Vivo"],
                                    [h, y]
                                ],
                                [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                                [l, [f, "Realme"],
                                    [h, y]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [l, [f, j],
                                    [h, y]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [l, [f, j],
                                    [h, b]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [l, [f, N],
                                    [h, b]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [l, [f, N],
                                    [h, y]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [l, [f, "Lenovo"],
                                    [h, b]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [l, /_/g, " "],
                                    [f, "Nokia"],
                                    [h, y]
                                ],
                                [/(pixel c)\b/i],
                                [l, [f, C],
                                    [h, b]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [l, [f, C],
                                    [h, y]
                                ],
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [l, [f, $],
                                    [h, y]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [l, "Xperia Tablet"],
                                    [f, $],
                                    [h, b]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [l, [f, "OnePlus"],
                                    [h, y]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [l, [f, I],
                                    [h, b]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [l, /(.+)/g, "Fire Phone $1"],
                                    [f, I],
                                    [h, y]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [l, f, [h, b]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [l, [f, S],
                                    [h, y]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [l, [f, E],
                                    [h, b]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [l, [f, E],
                                    [h, y]
                                ],
                                [/(nexus 9)/i],
                                [l, [f, "HTC"],
                                    [h, b]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                [f, [l, /_/g, " "],
                                    [h, y]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [l, [f, "Acer"],
                                    [h, b]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [l, [f, "Meizu"],
                                    [h, y]
                                ],
                                [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                                [l, [f, "Ulefone"],
                                    [h, y]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [f, l, [h, y]],
                                [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [f, l, [h, b]],
                                [/(surface duo)/i],
                                [l, [f, R],
                                    [h, b]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [l, [f, "Fairphone"],
                                    [h, y]
                                ],
                                [/(u304aa)/i],
                                [l, [f, "AT&T"],
                                    [h, y]
                                ],
                                [/\bsie-(\w*)/i],
                                [l, [f, "Siemens"],
                                    [h, y]
                                ],
                                [/\b(rct\w+) b/i],
                                [l, [f, "RCA"],
                                    [h, b]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [l, [f, "Dell"],
                                    [h, b]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [l, [f, "Verizon"],
                                    [h, b]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [l, [f, "Barnes & Noble"],
                                    [h, b]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [l, [f, "NuVision"],
                                    [h, b]
                                ],
                                [/\b(k88) b/i],
                                [l, [f, "ZTE"],
                                    [h, b]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [l, [f, "ZTE"],
                                    [h, y]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [l, [f, "Swiss"],
                                    [h, y]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [l, [f, "Swiss"],
                                    [h, b]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [l, [f, "Zeki"],
                                    [h, b]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [f, "Dragon Touch"], l, [h, b]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [l, [f, "Insignia"],
                                    [h, b]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [l, [f, "NextBook"],
                                    [h, b]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [f, "Voice"], l, [h, y]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [f, "LvTel"], l, [h, y]
                                ],
                                [/\b(ph-1) /i],
                                [l, [f, "Essential"],
                                    [h, y]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [l, [f, "Envizen"],
                                    [h, b]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [l, [f, "MachSpeed"],
                                    [h, b]
                                ],
                                [/\btu_(1491) b/i],
                                [l, [f, "Rotor"],
                                    [h, b]
                                ],
                                [/(shield[\w ]+) b/i],
                                [l, [f, "Nvidia"],
                                    [h, b]
                                ],
                                [/(sprint) (\w+)/i],
                                [f, l, [h, y]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [l, /\./g, " "],
                                    [f, R],
                                    [h, y]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [l, [f, q],
                                    [h, b]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [l, [f, q],
                                    [h, y]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [f, [h, w]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [l, /^/, "SmartTV"],
                                    [f, D],
                                    [h, w]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [f, N],
                                    [h, w]
                                ],
                                [/(apple) ?tv/i],
                                [f, [l, k + " TV"],
                                    [h, w]
                                ],
                                [/crkey/i],
                                [
                                    [l, T + "cast"],
                                    [f, C],
                                    [h, w]
                                ],
                                [/droid.+aft(\w+)( bui|\))/i],
                                [l, [f, I],
                                    [h, w]
                                ],
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                [l, [f, M],
                                    [h, w]
                                ],
                                [/(bravia[\w ]+)( bui|\))/i],
                                [l, [f, $],
                                    [h, w]
                                ],
                                [/(mitv-\w{5}) bui/i],
                                [l, [f, L],
                                    [h, w]
                                ],
                                [/Hbbtv.*(technisat) (.*);/i],
                                [f, l, [h, w]],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                                [
                                    [f, K],
                                    [l, K],
                                    [h, w]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [h, w]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [f, l, [h, g]],
                                [/droid.+; (shield) bui/i],
                                [l, [f, "Nvidia"],
                                    [h, g]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [l, [f, $],
                                    [h, g]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [l, [f, R],
                                    [h, g]
                                ],
                                [/((pebble))app/i],
                                [f, l, [h, _]],
                                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                                [l, [f, k],
                                    [h, _]
                                ],
                                [/droid.+; (glass) \d/i],
                                [l, [f, C],
                                    [h, _]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [l, [f, q],
                                    [h, _]
                                ],
                                [/(quest( 2| pro)?)/i],
                                [l, [f, B],
                                    [h, _]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [f, [h, x]],
                                [/(aeobc)\b/i],
                                [l, [f, I],
                                    [h, x]
                                ],
                                [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                                [l, [h, y]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [l, [h, b]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [h, b]
                                ],
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                [
                                    [h, y]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [l, [f, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [m, [p, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [m, [p, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                                [p, m],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [m, p]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [p, m],
                                [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                                [p, [m, J, X]],
                                [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [m, J, X],
                                    [p, "Windows"]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [m, /_/g, "."],
                                    [p, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [p, z],
                                    [m, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [m, p],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [p, m],
                                [/\(bb(10);/i],
                                [m, [p, S]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [m, [p, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [m, [p, A + " OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [m, [p, "webOS"]],
                                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                [m, [p, "watchOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [m, [p, T + "cast"]],
                                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                [
                                    [p, V], m
                                ],
                                [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [p, m],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [p, "Solaris"], m
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                                [p, m]
                            ]
                        },
                        Q = function(e, t) {
                            if (typeof e === c && (t = e, e = i), !(this instanceof Q)) return new Q(e, t).getResult();
                            var n = typeof o !== a && o.navigator ? o.navigator : i,
                                r = e || (n && n.userAgent ? n.userAgent : ""),
                                g = n && n.userAgentData ? n.userAgentData : i,
                                w = t ? function(e, t) {
                                    var n = {};
                                    for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                                    return n
                                }(G, t) : G,
                                _ = n && n.userAgent == r;
                            return this.getBrowser = function() {
                                var e, t = {};
                                return t[p] = i, t[m] = i, Y.call(t, r, w.browser), t[d] = typeof(e = t[m]) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : i, _ && n && n.brave && typeof n.brave.isBrave == s && (t[p] = "Brave"), t
                            }, this.getCPU = function() {
                                var e = {};
                                return e[v] = i, Y.call(e, r, w.cpu), e
                            }, this.getDevice = function() {
                                var e = {};
                                return e[f] = i, e[l] = i, e[h] = i, Y.call(e, r, w.device), _ && !e[h] && g && g.mobile && (e[h] = y), _ && "Macintosh" == e[l] && n && typeof n.standalone !== a && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[l] = "iPad", e[h] = b), e
                            }, this.getEngine = function() {
                                var e = {};
                                return e[p] = i, e[m] = i, Y.call(e, r, w.engine), e
                            }, this.getOS = function() {
                                var e = {};
                                return e[p] = i, e[m] = i, Y.call(e, r, w.os), _ && !e[p] && g && "Unknown" != g.platform && (e[p] = g.platform.replace(/chrome os/i, V).replace(/macos/i, z)), e
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function() {
                                return r
                            }, this.setUA = function(e) {
                                return r = typeof e === u && e.length > 500 ? K(e, 500) : e, this
                            }, this.setUA(r), this
                        };
                    Q.VERSION = "1.0.37", Q.BROWSER = F([p, m, d]), Q.CPU = F([v]), Q.DEVICE = F([l, f, h, g, y, w, b, _, x]), Q.ENGINE = Q.OS = F([p, m]), typeof t !== a ? (e.exports && (t = e.exports = Q), t.UAParser = Q) : n.amdO ? (r = function() {
                        return Q
                    }.call(t, n, t, e)) === i || (e.exports = r) : typeof o !== a && (o.UAParser = Q);
                    var Z = typeof o !== a && (o.jQuery || o.Zepto);
                    if (Z && !Z.ua) {
                        var ee = new Q;
                        Z.ua = ee.getResult(), Z.ua.get = function() {
                            return ee.getUA()
                        }, Z.ua.set = function(e) {
                            ee.setUA(e);
                            var t = ee.getResult();
                            for (var n in t) Z.ua[n] = t[n]
                        }
                    }
                }("object" == typeof window ? window : this)
            },
            1576: e => {
                "use strict";
                var t = TypeError;
                e.exports = function(e) {
                    if (e > 9007199254740991) throw t("Maximum allowed index exceeded");
                    return e
                }
            },
            1578: (e, t, n) => {
                "use strict";
                var r = n(5912);
                e.exports = function(e) {
                    var t = +e;
                    return t != t || 0 === t ? 0 : r(t)
                }
            },
            1613: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(9639);
                r({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !n(1381)("union")
                }, {
                    union: o
                })
            },
            1639: (e, t, n) => {
                "use strict";
                var r = n(6999),
                    o = n(1834),
                    i = n(960),
                    s = n(2544),
                    a = n(164),
                    c = n(543),
                    u = n(728),
                    d = n(9580),
                    l = n(7768),
                    p = n(8042),
                    h = TypeError,
                    f = function(e, t) {
                        this.stopped = e, this.result = t
                    },
                    m = f.prototype;
                e.exports = function(e, t, n) {
                    var v, g, y, b, w, _, x, I = n && n.that,
                        k = !(!n || !n.AS_ENTRIES),
                        E = !(!n || !n.IS_RECORD),
                        S = !(!n || !n.IS_ITERATOR),
                        P = !(!n || !n.INTERRUPTED),
                        T = r(t, I),
                        A = function(e) {
                            return v && p(v, "normal", e), new f(!0, e)
                        },
                        C = function(e) {
                            return k ? (i(e), P ? T(e[0], e[1], A) : T(e[0], e[1])) : P ? T(e, A) : T(e)
                        };
                    if (E) v = e.iterator;
                    else if (S) v = e;
                    else {
                        if (!(g = l(e))) throw new h(s(e) + " is not iterable");
                        if (a(g)) {
                            for (y = 0, b = c(e); b > y; y++)
                                if ((w = C(e[y])) && u(m, w)) return w;
                            return new f(!1)
                        }
                        v = d(e, g)
                    }
                    for (_ = E ? e.next : v.next; !(x = o(_, v)).done;) {
                        try {
                            w = C(x.value)
                        } catch (O) {
                            p(v, "throw", O)
                        }
                        if ("object" == typeof w && w && u(m, w)) return w
                    }
                    return new f(!1)
                }
            },
            1649: (e, t, n) => {
                "use strict";
                var r = n(679),
                    o = n(6947),
                    i = n(8144),
                    s = n(2451),
                    a = URLSearchParams,
                    c = a.prototype,
                    u = o(c.getAll),
                    d = o(c.has),
                    l = new a("a=1");
                !l.has("a", 2) && l.has("a", void 0) || r(c, "has", function(e) {
                    var t = arguments.length,
                        n = t < 2 ? void 0 : arguments[1];
                    if (t && void 0 === n) return d(this, e);
                    var r = u(this, e);
                    s(t, 1);
                    for (var o = i(n), a = 0; a < r.length;)
                        if (r[a++] === o) return !0;
                    return !1
                }, {
                    enumerable: !0,
                    unsafe: !0
                })
            },
            1700: (e, t, n) => {
                "use strict";
                var r = n(8575),
                    o = n(5833).has,
                    i = n(9151),
                    s = n(3868),
                    a = n(9634),
                    c = n(78),
                    u = n(8042);
                e.exports = function(e) {
                    var t = r(this),
                        n = s(e);
                    if (i(t) <= n.size) return !1 !== a(t, function(e) {
                        if (n.includes(e)) return !1
                    }, !0);
                    var d = n.getIterator();
                    return !1 !== c(d, function(e) {
                        if (o(t, e)) return u(d, "normal", !1)
                    })
                }
            },
            1777: (e, t, n) => {
                "use strict";
                var r = n(1578),
                    o = Math.max,
                    i = Math.min;
                e.exports = function(e, t) {
                    var n = r(e);
                    return n < 0 ? o(n + t, 0) : i(n, t)
                }
            },
            1799: (e, t, n) => {
                "use strict";
                var r = n(4492),
                    o = n(4202),
                    i = /#|\.prototype\./,
                    s = function(e, t) {
                        var n = c[a(e)];
                        return n === d || n !== u && (o(t) ? r(t) : !!t)
                    },
                    a = s.normalize = function(e) {
                        return String(e).replace(i, ".").toLowerCase()
                    },
                    c = s.data = {},
                    u = s.NATIVE = "N",
                    d = s.POLYFILL = "P";
                e.exports = s
            },
            1815: (e, t, n) => {
                "use strict";
                var r = n(1399),
                    o = n(380),
                    i = n(3929);
                e.exports = function(e, t, n) {
                    r ? o.f(e, t, i(0, n)) : e[t] = n
                }
            },
            1834: (e, t, n) => {
                "use strict";
                var r = n(5121),
                    o = Function.prototype.call;
                e.exports = r ? o.bind(o) : function() {
                    return o.apply(o, arguments)
                }
            },
            1884: (e, t, n) => {
                "use strict";
                n(2561)
            },
            1995: (e, t, n) => {
                "use strict";
                var r = n(6668),
                    o = n(4450),
                    i = n(6710),
                    s = n(380);
                e.exports = function(e, t, n) {
                    for (var a = o(t), c = s.f, u = i.f, d = 0; d < a.length; d++) {
                        var l = a[d];
                        r(e, l) || n && r(n, l) || c(e, l, u(t, l))
                    }
                }
            },
            2265: (e, t, n) => {
                "use strict";
                var r = n(7759),
                    o = n(6947);
                e.exports = function(e) {
                    if ("Function" === r(e)) return o(e)
                }
            },
            2275: (e, t, n) => {
                "use strict";
                var r = n(8575),
                    o = n(5833),
                    i = n(9151),
                    s = n(3868),
                    a = n(9634),
                    c = n(78),
                    u = o.Set,
                    d = o.add,
                    l = o.has;
                e.exports = function(e) {
                    var t = r(this),
                        n = s(e),
                        o = new u;
                    return i(t) > n.size ? c(n.getIterator(), function(e) {
                        l(t, e) && d(o, e)
                    }) : a(t, function(e) {
                        n.includes(e) && d(o, e)
                    }), o
                }
            },
            2341: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(1834),
                    i = n(6895),
                    s = n(960),
                    a = n(7636),
                    c = n(3649),
                    u = n(3842),
                    d = n(4192),
                    l = c(function() {
                        for (var e, t, n = this.iterator, r = this.predicate, i = this.next;;) {
                            if (e = s(o(i, n)), this.done = !!e.done) return;
                            if (t = e.value, u(n, r, [t, this.counter++], !0)) return t
                        }
                    });
                r({
                    target: "Iterator",
                    proto: !0,
                    real: !0,
                    forced: d
                }, {
                    filter: function(e) {
                        return s(this), i(e), new l(a(this), {
                            predicate: e
                        })
                    }
                })
            },
            2451: e => {
                "use strict";
                var t = TypeError;
                e.exports = function(e, n) {
                    if (e < n) throw new t("Not enough arguments");
                    return e
                }
            },
            2513: (e, t, n) => {
                "use strict";
                n(4204)
            },
            2544: e => {
                "use strict";
                var t = String;
                e.exports = function(e) {
                    try {
                        return t(e)
                    } catch (n) {
                        return "Object"
                    }
                }
            },
            2561: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(6115);
                r({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !n(1381)("symmetricDifference")
                }, {
                    symmetricDifference: o
                })
            },
            2578: (e, t, n) => {
                "use strict";
                var r = n(8575),
                    o = n(5833).has,
                    i = n(9151),
                    s = n(3868),
                    a = n(78),
                    c = n(8042);
                e.exports = function(e) {
                    var t = r(this),
                        n = s(e);
                    if (i(t) < n.size) return !1;
                    var u = n.getIterator();
                    return !1 !== a(u, function(e) {
                        if (!o(t, e)) return c(u, "normal", !1)
                    })
                }
            },
            2661: (e, t, n) => {
                "use strict";
                var r = n(1399),
                    o = n(4492);
                e.exports = r && o(function() {
                    return 42 !== Object.defineProperty(function() {}, "prototype", {
                        value: 42,
                        writable: !1
                    }).prototype
                })
            },
            2690: (e, t, n) => {
                "use strict";
                var r = n(6947),
                    o = Error,
                    i = r("".replace),
                    s = String(new o("zxcasd").stack),
                    a = /\n\s*at [^:]*:[^\n]*/,
                    c = a.test(s);
                e.exports = function(e, t) {
                    if (c && "string" == typeof e && !o.prepareStackTrace)
                        for (; t--;) e = i(e, a, "");
                    return e
                }
            },
            2820: (e, t, n) => {
                "use strict";
                var r, o, i, s = n(2903),
                    a = n(6002),
                    c = n(621),
                    u = n(6426),
                    d = n(6668),
                    l = n(5408),
                    p = n(7258),
                    h = n(482),
                    f = "Object already initialized",
                    m = a.TypeError,
                    v = a.WeakMap;
                if (s || l.state) {
                    var g = l.state || (l.state = new v);
                    g.get = g.get, g.has = g.has, g.set = g.set, r = function(e, t) {
                        if (g.has(e)) throw new m(f);
                        return t.facade = e, g.set(e, t), t
                    }, o = function(e) {
                        return g.get(e) || {}
                    }, i = function(e) {
                        return g.has(e)
                    }
                } else {
                    var y = p("state");
                    h[y] = !0, r = function(e, t) {
                        if (d(e, y)) throw new m(f);
                        return t.facade = e, u(e, y, t), t
                    }, o = function(e) {
                        return d(e, y) ? e[y] : {}
                    }, i = function(e) {
                        return d(e, y)
                    }
                }
                e.exports = {
                    set: r,
                    get: o,
                    has: i,
                    enforce: function(e) {
                        return i(e) ? o(e) : r(e, {})
                    },
                    getterFor: function(e) {
                        return function(t) {
                            var n;
                            if (!c(t) || (n = o(t)).type !== e) throw new m("Incompatible receiver, " + e + " required");
                            return n
                        }
                    }
                }
            },
            2903: (e, t, n) => {
                "use strict";
                var r = n(6002),
                    o = n(4202),
                    i = r.WeakMap;
                e.exports = o(i) && /native code/.test(String(i))
            },
            3004: (e, t, n) => {
                "use strict";
                var r, o, i, s = n(4492),
                    a = n(4202),
                    c = n(621),
                    u = n(5979),
                    d = n(9972),
                    l = n(679),
                    p = n(9544),
                    h = n(4192),
                    f = p("iterator"),
                    m = !1;
                [].keys && ("next" in (i = [].keys()) ? (o = d(d(i))) !== Object.prototype && (r = o) : m = !0), !c(r) || s(function() {
                    var e = {};
                    return r[f].call(e) !== e
                }) ? r = {} : h && (r = u(r)), a(r[f]) || l(r, f, function() {
                    return this
                }), e.exports = {
                    IteratorPrototype: r,
                    BUGGY_SAFARI_ITERATORS: m
                }
            },
            3013: (e, t, n) => {
                "use strict";
                var r = n(6947),
                    o = n(6668),
                    i = n(654),
                    s = n(5972).indexOf,
                    a = n(482),
                    c = r([].push);
                e.exports = function(e, t) {
                    var n, r = i(e),
                        u = 0,
                        d = [];
                    for (n in r) !o(a, n) && o(r, n) && c(d, n);
                    for (; t.length > u;) o(r, n = t[u++]) && (~s(d, n) || c(d, n));
                    return d
                }
            },
            3094: (e, t, n) => {
                "use strict";
                var r = n(5308),
                    o = n(3578);
                e.exports = function(e) {
                    var t = r(e, "string");
                    return o(t) ? t : t + ""
                }
            },
            3154: (e, t, n) => {
                "use strict";
                var r = n(679),
                    o = n(6947),
                    i = n(8144),
                    s = n(2451),
                    a = URLSearchParams,
                    c = a.prototype,
                    u = o(c.append),
                    d = o(c.delete),
                    l = o(c.forEach),
                    p = o([].push),
                    h = new a("a=1&a=2&b=3");
                h.delete("a", 1), h.delete("b", void 0), h + "" != "a=2" && r(c, "delete", function(e) {
                    var t = arguments.length,
                        n = t < 2 ? void 0 : arguments[1];
                    if (t && void 0 === n) return d(this, e);
                    var r = [];
                    l(this, function(e, t) {
                        p(r, {
                            key: t,
                            value: e
                        })
                    }), s(t, 1);
                    for (var o, a = i(e), c = i(n), h = 0, f = 0, m = !1, v = r.length; h < v;) o = r[h++], m || o.key === a ? (m = !0, d(this, o.key)) : f++;
                    for (; f < v;)(o = r[f++]).key === a && o.value === c || u(this, o.key, o.value)
                }, {
                    enumerable: !0,
                    unsafe: !0
                })
            },
            3192: (e, t, n) => {
                "use strict";
                var r = n(6671),
                    o = n(621),
                    i = n(6591),
                    s = n(11);
                e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var e, t = !1,
                        n = {};
                    try {
                        (e = r(Object.prototype, "__proto__", "set"))(n, []), t = n instanceof Array
                    } catch (a) {}
                    return function(n, r) {
                        return i(n), s(r), o(n) ? (t ? e(n, r) : n.__proto__ = r, n) : n
                    }
                }() : void 0)
            },
            3382: (e, t, n) => {
                "use strict";
                var r = n(4492);
                e.exports = !r(function() {
                    function e() {}
                    return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
                })
            },
            3506: (e, t) => {
                "use strict";
                t.f = Object.getOwnPropertySymbols
            },
            3552: (e, t, n) => {
                "use strict";
                var r = n(6002),
                    o = n(621),
                    i = r.document,
                    s = o(i) && o(i.createElement);
                e.exports = function(e) {
                    return s ? i.createElement(e) : {}
                }
            },
            3578: (e, t, n) => {
                "use strict";
                var r = n(4862),
                    o = n(4202),
                    i = n(728),
                    s = n(4455),
                    a = Object;
                e.exports = s ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    var t = r("Symbol");
                    return o(t) && i(t.prototype, a(e))
                }
            },
            3649: (e, t, n) => {
                "use strict";
                var r = n(1834),
                    o = n(5979),
                    i = n(6426),
                    s = n(9746),
                    a = n(9544),
                    c = n(2820),
                    u = n(7751),
                    d = n(3004).IteratorPrototype,
                    l = n(7214),
                    p = n(8042),
                    h = a("toStringTag"),
                    f = "IteratorHelper",
                    m = "WrapForValidIterator",
                    v = c.set,
                    g = function(e) {
                        var t = c.getterFor(e ? m : f);
                        return s(o(d), {
                            next: function() {
                                var n = t(this);
                                if (e) return n.nextHandler();
                                try {
                                    var r = n.done ? void 0 : n.nextHandler();
                                    return l(r, n.done)
                                } catch (o) {
                                    throw n.done = !0, o
                                }
                            },
                            return: function() {
                                var n = t(this),
                                    o = n.iterator;
                                if (n.done = !0, e) {
                                    var i = u(o, "return");
                                    return i ? r(i, o) : l(void 0, !0)
                                }
                                if (n.inner) try {
                                    p(n.inner.iterator, "normal")
                                } catch (s) {
                                    return p(o, "throw", s)
                                }
                                return p(o, "normal"), l(void 0, !0)
                            }
                        })
                    },
                    y = g(!0),
                    b = g(!1);
                i(b, h, "Iterator Helper"), e.exports = function(e, t) {
                    var n = function(n, r) {
                        r ? (r.iterator = n.iterator, r.next = n.next) : r = n, r.type = t ? m : f, r.nextHandler = e, r.counter = 0, r.done = !1, v(this, r)
                    };
                    return n.prototype = t ? y : b, n
                }
            },
            3841: (e, t, n) => {
                "use strict";
                var r = n(8575),
                    o = n(5833),
                    i = n(1249),
                    s = n(9151),
                    a = n(3868),
                    c = n(9634),
                    u = n(78),
                    d = o.has,
                    l = o.remove;
                e.exports = function(e) {
                    var t = r(this),
                        n = a(e),
                        o = i(t);
                    return s(t) <= n.size ? c(t, function(e) {
                        n.includes(e) && l(o, e)
                    }) : u(n.getIterator(), function(e) {
                        d(t, e) && l(o, e)
                    }), o
                }
            },
            3842: (e, t, n) => {
                "use strict";
                var r = n(960),
                    o = n(8042);
                e.exports = function(e, t, n, i) {
                    try {
                        return i ? t(r(n)[0], n[1]) : t(n)
                    } catch (s) {
                        o(e, "throw", s)
                    }
                }
            },
            3868: (e, t, n) => {
                "use strict";
                var r = n(6895),
                    o = n(960),
                    i = n(1834),
                    s = n(1578),
                    a = n(7636),
                    c = "Invalid size",
                    u = RangeError,
                    d = TypeError,
                    l = Math.max,
                    p = function(e, t) {
                        this.set = e, this.size = l(t, 0), this.has = r(e.has), this.keys = r(e.keys)
                    };
                p.prototype = {
                    getIterator: function() {
                        return a(o(i(this.keys, this.set)))
                    },
                    includes: function(e) {
                        return i(this.has, this.set, e)
                    }
                }, e.exports = function(e) {
                    o(e);
                    var t = +e.size;
                    if (t != t) throw new d(c);
                    var n = s(t);
                    if (n < 0) throw new u(c);
                    return new p(e, n)
                }
            },
            3875: (e, t, n) => {
                "use strict";
                var r = n(6947),
                    o = 0,
                    i = Math.random(),
                    s = r(1..toString);
                e.exports = function(e) {
                    return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++o + i, 36)
                }
            },
            3912: (e, t, n) => {
                "use strict";
                var r = n(5121),
                    o = Function.prototype,
                    i = o.apply,
                    s = o.call;
                e.exports = "object" == typeof Reflect && Reflect.apply || (r ? s.bind(i) : function() {
                    return s.apply(i, arguments)
                })
            },
            3929: e => {
                "use strict";
                e.exports = function(e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                }
            },
            4183: (e, t, n) => {
                "use strict";
                var r = n(6947),
                    o = n(4202),
                    i = n(5408),
                    s = r(Function.toString);
                o(i.inspectSource) || (i.inspectSource = function(e) {
                    return s(e)
                }), e.exports = i.inspectSource
            },
            4192: e => {
                "use strict";
                e.exports = !1
            },
            4202: e => {
                "use strict";
                var t = "object" == typeof document && document.all;
                e.exports = void 0 === t && void 0 !== t ? function(e) {
                    return "function" == typeof e || e === t
                } : function(e) {
                    return "function" == typeof e
                }
            },
            4204: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(1700);
                r({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !n(1381)("isDisjointFrom")
                }, {
                    isDisjointFrom: o
                })
            },
            4435: (e, t, n) => {
                "use strict";
                var r = n(8575),
                    o = n(9151),
                    i = n(9634),
                    s = n(3868);
                e.exports = function(e) {
                    var t = r(this),
                        n = s(e);
                    return !(o(t) > n.size) && !1 !== i(t, function(e) {
                        if (!n.includes(e)) return !1
                    }, !0)
                }
            },
            4450: (e, t, n) => {
                "use strict";
                var r = n(4862),
                    o = n(6947),
                    i = n(459),
                    s = n(3506),
                    a = n(960),
                    c = o([].concat);
                e.exports = r("Reflect", "ownKeys") || function(e) {
                    var t = i.f(a(e)),
                        n = s.f;
                    return n ? c(t, n(e)) : t
                }
            },
            4455: (e, t, n) => {
                "use strict";
                var r = n(9750);
                e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
            },
            4456: (e, t, n) => {
                "use strict";
                var r = n(5408);
                e.exports = function(e, t) {
                    return r[e] || (r[e] = t || {})
                }
            },
            4492: e => {
                "use strict";
                e.exports = function(e) {
                    try {
                        return !!e()
                    } catch (t) {
                        return !0
                    }
                }
            },
            4555: (e, t, n) => {
                "use strict";
                var r = n(6947),
                    o = n(6668),
                    i = SyntaxError,
                    s = parseInt,
                    a = String.fromCharCode,
                    c = r("".charAt),
                    u = r("".slice),
                    d = r(/./.exec),
                    l = {
                        '\\"': '"',
                        "\\\\": "\\",
                        "\\/": "/",
                        "\\b": "\b",
                        "\\f": "\f",
                        "\\n": "\n",
                        "\\r": "\r",
                        "\\t": "\t"
                    },
                    p = /^[\da-f]{4}$/i,
                    h = /^[\u0000-\u001F]$/;
                e.exports = function(e, t) {
                    for (var n = !0, r = ""; t < e.length;) {
                        var f = c(e, t);
                        if ("\\" === f) {
                            var m = u(e, t, t + 2);
                            if (o(l, m)) r += l[m], t += 2;
                            else {
                                if ("\\u" !== m) throw new i('Unknown escape sequence: "' + m + '"');
                                var v = u(e, t += 2, t + 4);
                                if (!d(p, v)) throw new i("Bad Unicode escape at: " + t);
                                r += a(s(v, 16)), t += 4
                            }
                        } else {
                            if ('"' === f) {
                                n = !1, t++;
                                break
                            }
                            if (d(h, f)) throw new i("Bad control character in string literal at: " + t);
                            r += f, t++
                        }
                    }
                    if (n) throw new i("Unterminated string at: " + t);
                    return {
                        value: r,
                        end: t
                    }
                }
            },
            4737: (e, t, n) => {
                "use strict";
                var r = n(1399),
                    o = n(6668),
                    i = Function.prototype,
                    s = r && Object.getOwnPropertyDescriptor,
                    a = o(i, "name"),
                    c = a && "something" === function() {}.name,
                    u = a && (!r || r && s(i, "name").configurable);
                e.exports = {
                    EXISTS: a,
                    PROPER: c,
                    CONFIGURABLE: u
                }
            },
            4827: (e, t, n) => {
                "use strict";
                var r = n(3013),
                    o = n(8280);
                e.exports = Object.keys || function(e) {
                    return r(e, o)
                }
            },
            4862: (e, t, n) => {
                "use strict";
                var r = n(6002),
                    o = n(4202);
                e.exports = function(e, t) {
                    return arguments.length < 2 ? (n = r[e], o(n) ? n : void 0) : r[e] && r[e][t];
                    var n
                }
            },
            4952: (e, t, n) => {
                "use strict";
                var r = n(6947),
                    o = n(4492),
                    i = n(4202),
                    s = n(6668),
                    a = n(1399),
                    c = n(4737).CONFIGURABLE,
                    u = n(4183),
                    d = n(2820),
                    l = d.enforce,
                    p = d.get,
                    h = String,
                    f = Object.defineProperty,
                    m = r("".slice),
                    v = r("".replace),
                    g = r([].join),
                    y = a && !o(function() {
                        return 8 !== f(function() {}, "length", {
                            value: 8
                        }).length
                    }),
                    b = String(String).split("String"),
                    w = e.exports = function(e, t, n) {
                        "Symbol(" === m(h(t), 0, 7) && (t = "[" + v(h(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!s(e, "name") || c && e.name !== t) && (a ? f(e, "name", {
                            value: t,
                            configurable: !0
                        }) : e.name = t), y && n && s(n, "arity") && e.length !== n.arity && f(e, "length", {
                            value: n.arity
                        });
                        try {
                            n && s(n, "constructor") && n.constructor ? a && f(e, "prototype", {
                                writable: !1
                            }) : e.prototype && (e.prototype = void 0)
                        } catch (o) {}
                        var r = l(e);
                        return s(r, "source") || (r.source = g(b, "string" == typeof t ? t : "")), e
                    };
                Function.prototype.toString = w(function() {
                    return i(this) && p(this).source || u(this)
                }, "toString")
            },
            4980: (e, t, n) => {
                "use strict";
                var r = n(6002),
                    o = Object.defineProperty;
                e.exports = function(e, t) {
                    try {
                        o(r, e, {
                            value: t,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (n) {
                        r[e] = t
                    }
                    return t
                }
            },
            5121: (e, t, n) => {
                "use strict";
                var r = n(4492);
                e.exports = !r(function() {
                    var e = function() {}.bind();
                    return "function" != typeof e || e.hasOwnProperty("prototype")
                })
            },
            5201: (e, t, n) => {
                "use strict";
                var r = n(7759);
                e.exports = Array.isArray || function(e) {
                    return "Array" === r(e)
                }
            },
            5251: (e, t, n) => {
                "use strict";
                var r = n(4952),
                    o = n(380);
                e.exports = function(e, t, n) {
                    return n.get && r(n.get, t, {
                        getter: !0
                    }), n.set && r(n.set, t, {
                        setter: !0
                    }), o.f(e, t, n)
                }
            },
            5308: (e, t, n) => {
                "use strict";
                var r = n(1834),
                    o = n(621),
                    i = n(3578),
                    s = n(7751),
                    a = n(5621),
                    c = n(9544),
                    u = TypeError,
                    d = c("toPrimitive");
                e.exports = function(e, t) {
                    if (!o(e) || i(e)) return e;
                    var n, c = s(e, d);
                    if (c) {
                        if (void 0 === t && (t = "default"), n = r(c, e, t), !o(n) || i(n)) return n;
                        throw new u("Can't convert object to primitive value")
                    }
                    return void 0 === t && (t = "number"), a(e, t)
                }
            },
            5379: (e, t, n) => {
                "use strict";
                var r = n(6947);
                e.exports = r([].slice)
            },
            5408: (e, t, n) => {
                "use strict";
                var r = n(4192),
                    o = n(6002),
                    i = n(4980),
                    s = "__core-js_shared__",
                    a = e.exports = o[s] || i(s, {});
                (a.versions || (a.versions = [])).push({
                    version: "3.37.0",
                    mode: r ? "pure" : "global",
                    copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
                    license: "https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                })
            },
            5527: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(3841);
                r({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !n(1381)("difference")
                }, {
                    difference: o
                })
            },
            5621: (e, t, n) => {
                "use strict";
                var r = n(1834),
                    o = n(4202),
                    i = n(621),
                    s = TypeError;
                e.exports = function(e, t) {
                    var n, a;
                    if ("string" === t && o(n = e.toString) && !i(a = r(n, e))) return a;
                    if (o(n = e.valueOf) && !i(a = r(n, e))) return a;
                    if ("string" !== t && o(n = e.toString) && !i(a = r(n, e))) return a;
                    throw new s("Can't convert object to primitive value")
                }
            },
            5833: (e, t, n) => {
                "use strict";
                var r = n(6947),
                    o = Set.prototype;
                e.exports = {
                    Set,
                    add: r(o.add),
                    has: r(o.has),
                    remove: r(o.delete),
                    proto: o
                }
            },
            5864: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(1639),
                    i = n(6895),
                    s = n(960),
                    a = n(7636);
                r({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    every: function(e) {
                        s(this), i(e);
                        var t = a(this),
                            n = 0;
                        return !o(t, function(t, r) {
                            if (!e(t, n++)) return r()
                        }, {
                            IS_RECORD: !0,
                            INTERRUPTED: !0
                        }).stopped
                    }
                })
            },
            5873: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(4492),
                    i = n(2275);
                r({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !n(1381)("intersection") || o(function() {
                        return "3,2" !== String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))))
                    })
                }, {
                    intersection: i
                })
            },
            5912: e => {
                "use strict";
                var t = Math.ceil,
                    n = Math.floor;
                e.exports = Math.trunc || function(e) {
                    var r = +e;
                    return (r > 0 ? n : t)(r)
                }
            },
            5972: (e, t, n) => {
                "use strict";
                var r = n(654),
                    o = n(1777),
                    i = n(543),
                    s = function(e) {
                        return function(t, n, s) {
                            var a = r(t),
                                c = i(a);
                            if (0 === c) return !e && -1;
                            var u, d = o(s, c);
                            if (e && n != n) {
                                for (; c > d;)
                                    if ((u = a[d++]) != u) return !0
                            } else
                                for (; c > d; d++)
                                    if ((e || d in a) && a[d] === n) return e || d || 0;
                            return !e && -1
                        }
                    };
                e.exports = {
                    includes: s(!0),
                    indexOf: s(!1)
                }
            },
            5979: (e, t, n) => {
                "use strict";
                var r, o = n(960),
                    i = n(8220),
                    s = n(8280),
                    a = n(482),
                    c = n(9936),
                    u = n(3552),
                    d = n(7258),
                    l = "prototype",
                    p = "script",
                    h = d("IE_PROTO"),
                    f = function() {},
                    m = function(e) {
                        return "<" + p + ">" + e + "</" + p + ">"
                    },
                    v = function(e) {
                        e.write(m("")), e.close();
                        var t = e.parentWindow.Object;
                        return e = null, t
                    },
                    g = function() {
                        try {
                            r = new ActiveXObject("htmlfile")
                        } catch (i) {}
                        var e, t, n;
                        g = "undefined" != typeof document ? document.domain && r ? v(r) : (t = u("iframe"), n = "java" + p + ":", t.style.display = "none", c.appendChild(t), t.src = String(n), (e = t.contentWindow.document).open(), e.write(m("document.F=Object")), e.close(), e.F) : v(r);
                        for (var o = s.length; o--;) delete g[l][s[o]];
                        return g()
                    };
                a[h] = !0, e.exports = Object.create || function(e, t) {
                    var n;
                    return null !== e ? (f[l] = o(e), n = new f, f[l] = null, n[h] = e) : n = g(), void 0 === t ? n : i.f(n, t)
                }
            },
            5993: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(4862),
                    i = n(3912),
                    s = n(1834),
                    a = n(6947),
                    c = n(4492),
                    u = n(4202),
                    d = n(3578),
                    l = n(5379),
                    p = n(1120),
                    h = n(9750),
                    f = String,
                    m = o("JSON", "stringify"),
                    v = a(/./.exec),
                    g = a("".charAt),
                    y = a("".charCodeAt),
                    b = a("".replace),
                    w = a(1..toString),
                    _ = /[\uD800-\uDFFF]/g,
                    x = /^[\uD800-\uDBFF]$/,
                    I = /^[\uDC00-\uDFFF]$/,
                    k = !h || c(function() {
                        var e = o("Symbol")("stringify detection");
                        return "[null]" !== m([e]) || "{}" !== m({
                            a: e
                        }) || "{}" !== m(Object(e))
                    }),
                    E = c(function() {
                        return '"\\udf06\\ud834"' !== m("\udf06\ud834") || '"\\udead"' !== m("\udead")
                    }),
                    S = function(e, t) {
                        var n = l(arguments),
                            r = p(t);
                        if (u(r) || void 0 !== e && !d(e)) return n[1] = function(e, t) {
                            if (u(r) && (t = s(r, this, f(e), t)), !d(t)) return t
                        }, i(m, null, n)
                    },
                    P = function(e, t, n) {
                        var r = g(n, t - 1),
                            o = g(n, t + 1);
                        return v(x, e) && !v(I, o) || v(I, e) && !v(x, r) ? "\\u" + w(y(e, 0), 16) : e
                    };
                m && r({
                    target: "JSON",
                    stat: !0,
                    arity: 3,
                    forced: k || E
                }, {
                    stringify: function(e, t, n) {
                        var r = l(arguments),
                            o = i(k ? S : m, null, r);
                        return E && "string" == typeof o ? b(o, _, P) : o
                    }
                })
            },
            6002: function(e, t, n) {
                "use strict";
                var r = function(e) {
                    return e && e.Math === Math && e
                };
                e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || r("object" == typeof this && this) || function() {
                    return this
                }() || Function("return this")()
            },
            6115: (e, t, n) => {
                "use strict";
                var r = n(8575),
                    o = n(5833),
                    i = n(1249),
                    s = n(3868),
                    a = n(78),
                    c = o.add,
                    u = o.has,
                    d = o.remove;
                e.exports = function(e) {
                    var t = r(this),
                        n = s(e).getIterator(),
                        o = i(t);
                    return a(n, function(e) {
                        u(t, e) ? d(o, e) : c(o, e)
                    }), o
                }
            },
            6202: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(2578);
                r({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !n(1381)("isSupersetOf")
                }, {
                    isSupersetOf: o
                })
            },
            6364: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(6002),
                    i = n(4862),
                    s = n(3929),
                    a = n(380).f,
                    c = n(6668),
                    u = n(1548),
                    d = n(8404),
                    l = n(9760),
                    p = n(8505),
                    h = n(2690),
                    f = n(1399),
                    m = n(4192),
                    v = "DOMException",
                    g = i("Error"),
                    y = i(v),
                    b = function() {
                        u(this, w);
                        var e = arguments.length,
                            t = l(e < 1 ? void 0 : arguments[0]),
                            n = l(e < 2 ? void 0 : arguments[1], "Error"),
                            r = new y(t, n),
                            o = new g(t);
                        return o.name = v, a(r, "stack", s(1, h(o.stack, 1))), d(r, this, b), r
                    },
                    w = b.prototype = y.prototype,
                    _ = "stack" in new g(v),
                    x = "stack" in new y(1, 2),
                    I = y && f && Object.getOwnPropertyDescriptor(o, v),
                    k = !(!I || I.writable && I.configurable),
                    E = _ && !k && !x;
                r({
                    global: !0,
                    constructor: !0,
                    forced: m || E
                }, {
                    DOMException: E ? b : y
                });
                var S = i(v),
                    P = S.prototype;
                if (P.constructor !== S)
                    for (var T in m || a(P, "constructor", s(1, S)), p)
                        if (c(p, T)) {
                            var A = p[T],
                                C = A.s;
                            c(S, C) || a(S, C, s(6, A.c))
                        }
            },
            6426: (e, t, n) => {
                "use strict";
                var r = n(1399),
                    o = n(380),
                    i = n(3929);
                e.exports = r ? function(e, t, n) {
                    return o.f(e, t, i(1, n))
                } : function(e, t, n) {
                    return e[t] = n, e
                }
            },
            6456: (e, t, n) => {
                "use strict";
                n(7777)
            },
            6507: function(e, t) {
                var n, r, o;
                ! function() {
                    "use strict";
                    r = [], void 0 === (o = "function" == typeof(n = function() {
                        function e(e) {
                            return e.charAt(0).toUpperCase() + e.substring(1)
                        }

                        function t(e) {
                            return function() {
                                return this[e]
                            }
                        }
                        var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
                            r = ["columnNumber", "lineNumber"],
                            o = ["fileName", "functionName", "source"],
                            i = n.concat(r, o, ["args"], ["evalOrigin"]);

                        function s(t) {
                            if (t)
                                for (var n = 0; n < i.length; n++) void 0 !== t[i[n]] && this["set" + e(i[n])](t[i[n]])
                        }
                        s.prototype = {
                            getArgs: function() {
                                return this.args
                            },
                            setArgs: function(e) {
                                if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                                this.args = e
                            },
                            getEvalOrigin: function() {
                                return this.evalOrigin
                            },
                            setEvalOrigin: function(e) {
                                if (e instanceof s) this.evalOrigin = e;
                                else {
                                    if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                                    this.evalOrigin = new s(e)
                                }
                            },
                            toString: function() {
                                var e = this.getFileName() || "",
                                    t = this.getLineNumber() || "",
                                    n = this.getColumnNumber() || "",
                                    r = this.getFunctionName() || "";
                                return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + n + ")" : "[eval]:" + t + ":" + n : r ? r + " (" + e + ":" + t + ":" + n + ")" : e + ":" + t + ":" + n
                            }
                        }, s.fromString = function(e) {
                            var t = e.indexOf("("),
                                n = e.lastIndexOf(")"),
                                r = e.substring(0, t),
                                o = e.substring(t + 1, n).split(","),
                                i = e.substring(n + 1);
                            if (0 === i.indexOf("@")) var a = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, ""),
                                c = a[1],
                                u = a[2],
                                d = a[3];
                            return new s({
                                functionName: r,
                                args: o || void 0,
                                fileName: c,
                                lineNumber: u || void 0,
                                columnNumber: d || void 0
                            })
                        };
                        for (var a = 0; a < n.length; a++) s.prototype["get" + e(n[a])] = t(n[a]), s.prototype["set" + e(n[a])] = function(e) {
                            return function(t) {
                                this[e] = Boolean(t)
                            }
                        }(n[a]);
                        for (var c = 0; c < r.length; c++) s.prototype["get" + e(r[c])] = t(r[c]), s.prototype["set" + e(r[c])] = function(e) {
                            return function(t) {
                                if (n = t, isNaN(parseFloat(n)) || !isFinite(n)) throw new TypeError(e + " must be a Number");
                                var n;
                                this[e] = Number(t)
                            }
                        }(r[c]);
                        for (var u = 0; u < o.length; u++) s.prototype["get" + e(o[u])] = t(o[u]), s.prototype["set" + e(o[u])] = function(e) {
                            return function(t) {
                                this[e] = String(t)
                            }
                        }(o[u]);
                        return s
                    }) ? n.apply(t, r) : n) || (e.exports = o)
                }()
            },
            6591: (e, t, n) => {
                "use strict";
                var r = n(7104),
                    o = TypeError;
                e.exports = function(e) {
                    if (r(e)) throw new o("Can't call method on " + e);
                    return e
                }
            },
            6668: (e, t, n) => {
                "use strict";
                var r = n(6947),
                    o = n(7282),
                    i = r({}.hasOwnProperty);
                e.exports = Object.hasOwn || function(e, t) {
                    return i(o(e), t)
                }
            },
            6671: (e, t, n) => {
                "use strict";
                var r = n(6947),
                    o = n(6895);
                e.exports = function(e, t, n) {
                    try {
                        return r(o(Object.getOwnPropertyDescriptor(e, t)[n]))
                    } catch (i) {}
                }
            },
            6710: (e, t, n) => {
                "use strict";
                var r = n(1399),
                    o = n(1834),
                    i = n(8590),
                    s = n(3929),
                    a = n(654),
                    c = n(3094),
                    u = n(6668),
                    d = n(1536),
                    l = Object.getOwnPropertyDescriptor;
                t.f = r ? l : function(e, t) {
                    if (e = a(e), t = c(t), d) try {
                        return l(e, t)
                    } catch (n) {}
                    if (u(e, t)) return s(!o(i.f, e, t), e[t])
                }
            },
            6718: function(e, t, n) {
                var r, o, i;
                ! function() {
                    "use strict";
                    o = [n(6507)], void 0 === (i = "function" == typeof(r = function(e) {
                        var t = /(^|@)\S+:\d+/,
                            n = /^\s*at .*(\S+:\d+|\(native\))/m,
                            r = /^(eval@)?(\[native code])?$/;
                        return {
                            parse: function(e) {
                                if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]) return this.parseOpera(e);
                                if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                                if (e.stack) return this.parseFFOrSafari(e);
                                throw new Error("Cannot parse given Error object")
                            },
                            extractLocation: function(e) {
                                if (-1 === e.indexOf(":")) return [e];
                                var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                                return [t[1], t[2] || void 0, t[3] || void 0]
                            },
                            parseV8OrIE: function(t) {
                                return t.stack.split("\n").filter(function(e) {
                                    return !!e.match(n)
                                }, this).map(function(t) {
                                    t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                                    var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""),
                                        r = n.match(/ (\(.+\)$)/);
                                    n = r ? n.replace(r[0], "") : n;
                                    var o = this.extractLocation(r ? r[1] : n),
                                        i = r && n || void 0,
                                        s = ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? void 0 : o[0];
                                    return new e({
                                        functionName: i,
                                        fileName: s,
                                        lineNumber: o[1],
                                        columnNumber: o[2],
                                        source: t
                                    })
                                }, this)
                            },
                            parseFFOrSafari: function(t) {
                                return t.stack.split("\n").filter(function(e) {
                                    return !e.match(r)
                                }, this).map(function(t) {
                                    if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e({
                                        functionName: t
                                    });
                                    var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                        r = t.match(n),
                                        o = r && r[1] ? r[1] : void 0,
                                        i = this.extractLocation(t.replace(n, ""));
                                    return new e({
                                        functionName: o,
                                        fileName: i[0],
                                        lineNumber: i[1],
                                        columnNumber: i[2],
                                        source: t
                                    })
                                }, this)
                            },
                            parseOpera: function(e) {
                                return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                            },
                            parseOpera9: function(t) {
                                for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), o = [], i = 2, s = r.length; i < s; i += 2) {
                                    var a = n.exec(r[i]);
                                    a && o.push(new e({
                                        fileName: a[2],
                                        lineNumber: a[1],
                                        source: r[i]
                                    }))
                                }
                                return o
                            },
                            parseOpera10: function(t) {
                                for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), o = [], i = 0, s = r.length; i < s; i += 2) {
                                    var a = n.exec(r[i]);
                                    a && o.push(new e({
                                        functionName: a[3] || void 0,
                                        fileName: a[2],
                                        lineNumber: a[1],
                                        source: r[i]
                                    }))
                                }
                                return o
                            },
                            parseOpera11: function(n) {
                                return n.stack.split("\n").filter(function(e) {
                                    return !!e.match(t) && !e.match(/^Error created at/)
                                }, this).map(function(t) {
                                    var n, r = t.split("@"),
                                        o = this.extractLocation(r.pop()),
                                        i = r.shift() || "",
                                        s = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                                    i.match(/\(([^)]*)\)/) && (n = i.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                                    var a = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                                    return new e({
                                        functionName: s,
                                        args: a,
                                        fileName: o[0],
                                        lineNumber: o[1],
                                        columnNumber: o[2],
                                        source: t
                                    })
                                }, this)
                            }
                        }
                    }) ? r.apply(t, o) : r) || (e.exports = i)
                }()
            },
            6895: (e, t, n) => {
                "use strict";
                var r = n(4202),
                    o = n(2544),
                    i = TypeError;
                e.exports = function(e) {
                    if (r(e)) return e;
                    throw new i(o(e) + " is not a function")
                }
            },
            6947: (e, t, n) => {
                "use strict";
                var r = n(5121),
                    o = Function.prototype,
                    i = o.call,
                    s = r && o.bind.bind(i, i);
                e.exports = r ? s : function(e) {
                    return function() {
                        return i.apply(e, arguments)
                    }
                }
            },
            6999: (e, t, n) => {
                "use strict";
                var r = n(2265),
                    o = n(6895),
                    i = n(5121),
                    s = r(r.bind);
                e.exports = function(e, t) {
                    return o(e), void 0 === t ? e : i ? s(e, t) : function() {
                        return e.apply(t, arguments)
                    }
                }
            },
            7104: e => {
                "use strict";
                e.exports = function(e) {
                    return null == e
                }
            },
            7214: e => {
                "use strict";
                e.exports = function(e, t) {
                    return {
                        value: e,
                        done: t
                    }
                }
            },
            7258: (e, t, n) => {
                "use strict";
                var r = n(4456),
                    o = n(3875),
                    i = r("keys");
                e.exports = function(e) {
                    return i[e] || (i[e] = o(e))
                }
            },
            7282: (e, t, n) => {
                "use strict";
                var r = n(6591),
                    o = Object;
                e.exports = function(e) {
                    return o(r(e))
                }
            },
            7636: e => {
                "use strict";
                e.exports = function(e) {
                    return {
                        iterator: e,
                        next: e.next,
                        done: !1
                    }
                }
            },
            7697: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(7282),
                    i = n(543),
                    s = n(74),
                    a = n(1576);
                r({
                    target: "Array",
                    proto: !0,
                    arity: 1,
                    forced: n(4492)(function() {
                        return 4294967297 !== [].push.call({
                            length: 4294967296
                        }, 1)
                    }) || ! function() {
                        try {
                            Object.defineProperty([], "length", {
                                writable: !1
                            }).push()
                        } catch (e) {
                            return e instanceof TypeError
                        }
                    }()
                }, {
                    push: function(e) {
                        var t = o(this),
                            n = i(t),
                            r = arguments.length;
                        a(n + r);
                        for (var c = 0; c < r; c++) t[n] = arguments[c], n++;
                        return s(t, n), n
                    }
                })
            },
            7751: (e, t, n) => {
                "use strict";
                var r = n(6895),
                    o = n(7104);
                e.exports = function(e, t) {
                    var n = e[t];
                    return o(n) ? void 0 : r(n)
                }
            },
            7759: (e, t, n) => {
                "use strict";
                var r = n(6947),
                    o = r({}.toString),
                    i = r("".slice);
                e.exports = function(e) {
                    return i(o(e), 8, -1)
                }
            },
            7768: (e, t, n) => {
                "use strict";
                var r = n(764),
                    o = n(7751),
                    i = n(7104),
                    s = n(8078),
                    a = n(9544)("iterator");
                e.exports = function(e) {
                    if (!i(e)) return o(e, a) || o(e, "@@iterator") || s[r(e)]
                }
            },
            7777: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(4435);
                r({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !n(1381)("isSubsetOf")
                }, {
                    isSubsetOf: o
                })
            },
            7872: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(1639),
                    i = n(6895),
                    s = n(960),
                    a = n(7636);
                r({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    forEach: function(e) {
                        s(this), i(e);
                        var t = a(this),
                            n = 0;
                        o(t, function(t) {
                            e(t, n++)
                        }, {
                            IS_RECORD: !0
                        })
                    }
                })
            },
            7960: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(1639),
                    i = n(6895),
                    s = n(960),
                    a = n(7636);
                r({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    find: function(e) {
                        s(this), i(e);
                        var t = a(this),
                            n = 0;
                        return o(t, function(t, r) {
                            if (e(t, n++)) return r(t)
                        }, {
                            IS_RECORD: !0,
                            INTERRUPTED: !0
                        }).result
                    }
                })
            },
            8003: e => {
                "use strict";
                e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
            },
            8006: (e, t, n) => {
                "use strict";
                n(1613)
            },
            8042: (e, t, n) => {
                "use strict";
                var r = n(1834),
                    o = n(960),
                    i = n(7751);
                e.exports = function(e, t, n) {
                    var s, a;
                    o(e);
                    try {
                        if (!(s = i(e, "return"))) {
                            if ("throw" === t) throw n;
                            return n
                        }
                        s = r(s, e)
                    } catch (c) {
                        a = !0, s = c
                    }
                    if ("throw" === t) throw n;
                    if (a) throw s;
                    return o(s), n
                }
            },
            8078: e => {
                "use strict";
                e.exports = {}
            },
            8142: (e, t, n) => {
                "use strict";
                n(5527)
            },
            8144: (e, t, n) => {
                "use strict";
                var r = n(764),
                    o = String;
                e.exports = function(e) {
                    if ("Symbol" === r(e)) throw new TypeError("Cannot convert a Symbol value to a string");
                    return o(e)
                }
            },
            8220: (e, t, n) => {
                "use strict";
                var r = n(1399),
                    o = n(2661),
                    i = n(380),
                    s = n(960),
                    a = n(654),
                    c = n(4827);
                t.f = r && !o ? Object.defineProperties : function(e, t) {
                    s(e);
                    for (var n, r = a(t), o = c(t), u = o.length, d = 0; u > d;) i.f(e, n = o[d++], r[n]);
                    return e
                }
            },
            8239: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(1639),
                    i = n(6895),
                    s = n(960),
                    a = n(7636);
                r({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    some: function(e) {
                        s(this), i(e);
                        var t = a(this),
                            n = 0;
                        return o(t, function(t, r) {
                            if (e(t, n++)) return r()
                        }, {
                            IS_RECORD: !0,
                            INTERRUPTED: !0
                        }).stopped
                    }
                })
            },
            8280: e => {
                "use strict";
                e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            8404: (e, t, n) => {
                "use strict";
                var r = n(4202),
                    o = n(621),
                    i = n(3192);
                e.exports = function(e, t, n) {
                    var s, a;
                    return i && r(s = t.constructor) && s !== n && o(a = s.prototype) && a !== n.prototype && i(e, a), e
                }
            },
            8482: (e, t, n) => {
                "use strict";
                var r = n(6947),
                    o = n(4492),
                    i = n(7759),
                    s = Object,
                    a = r("".split);
                e.exports = o(function() {
                    return !s("z").propertyIsEnumerable(0)
                }) ? function(e) {
                    return "String" === i(e) ? a(e, "") : s(e)
                } : s
            },
            8505: e => {
                "use strict";
                e.exports = {
                    IndexSizeError: {
                        s: "INDEX_SIZE_ERR",
                        c: 1,
                        m: 1
                    },
                    DOMStringSizeError: {
                        s: "DOMSTRING_SIZE_ERR",
                        c: 2,
                        m: 0
                    },
                    HierarchyRequestError: {
                        s: "HIERARCHY_REQUEST_ERR",
                        c: 3,
                        m: 1
                    },
                    WrongDocumentError: {
                        s: "WRONG_DOCUMENT_ERR",
                        c: 4,
                        m: 1
                    },
                    InvalidCharacterError: {
                        s: "INVALID_CHARACTER_ERR",
                        c: 5,
                        m: 1
                    },
                    NoDataAllowedError: {
                        s: "NO_DATA_ALLOWED_ERR",
                        c: 6,
                        m: 0
                    },
                    NoModificationAllowedError: {
                        s: "NO_MODIFICATION_ALLOWED_ERR",
                        c: 7,
                        m: 1
                    },
                    NotFoundError: {
                        s: "NOT_FOUND_ERR",
                        c: 8,
                        m: 1
                    },
                    NotSupportedError: {
                        s: "NOT_SUPPORTED_ERR",
                        c: 9,
                        m: 1
                    },
                    InUseAttributeError: {
                        s: "INUSE_ATTRIBUTE_ERR",
                        c: 10,
                        m: 1
                    },
                    InvalidStateError: {
                        s: "INVALID_STATE_ERR",
                        c: 11,
                        m: 1
                    },
                    SyntaxError: {
                        s: "SYNTAX_ERR",
                        c: 12,
                        m: 1
                    },
                    InvalidModificationError: {
                        s: "INVALID_MODIFICATION_ERR",
                        c: 13,
                        m: 1
                    },
                    NamespaceError: {
                        s: "NAMESPACE_ERR",
                        c: 14,
                        m: 1
                    },
                    InvalidAccessError: {
                        s: "INVALID_ACCESS_ERR",
                        c: 15,
                        m: 1
                    },
                    ValidationError: {
                        s: "VALIDATION_ERR",
                        c: 16,
                        m: 0
                    },
                    TypeMismatchError: {
                        s: "TYPE_MISMATCH_ERR",
                        c: 17,
                        m: 1
                    },
                    SecurityError: {
                        s: "SECURITY_ERR",
                        c: 18,
                        m: 1
                    },
                    NetworkError: {
                        s: "NETWORK_ERR",
                        c: 19,
                        m: 1
                    },
                    AbortError: {
                        s: "ABORT_ERR",
                        c: 20,
                        m: 1
                    },
                    URLMismatchError: {
                        s: "URL_MISMATCH_ERR",
                        c: 21,
                        m: 1
                    },
                    QuotaExceededError: {
                        s: "QUOTA_EXCEEDED_ERR",
                        c: 22,
                        m: 1
                    },
                    TimeoutError: {
                        s: "TIMEOUT_ERR",
                        c: 23,
                        m: 1
                    },
                    InvalidNodeTypeError: {
                        s: "INVALID_NODE_TYPE_ERR",
                        c: 24,
                        m: 1
                    },
                    DataCloneError: {
                        s: "DATA_CLONE_ERR",
                        c: 25,
                        m: 1
                    }
                }
            },
            8575: (e, t, n) => {
                "use strict";
                var r = n(5833).has;
                e.exports = function(e) {
                    return r(e), e
                }
            },
            8590: (e, t) => {
                "use strict";
                var n = {}.propertyIsEnumerable,
                    r = Object.getOwnPropertyDescriptor,
                    o = r && !n.call({
                        1: 2
                    }, 1);
                t.f = o ? function(e) {
                    var t = r(this, e);
                    return !!t && t.enumerable
                } : n
            },
            8596: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(1399),
                    i = n(6002),
                    s = n(4862),
                    a = n(6947),
                    c = n(1834),
                    u = n(4202),
                    d = n(621),
                    l = n(5201),
                    p = n(6668),
                    h = n(8144),
                    f = n(543),
                    m = n(1815),
                    v = n(4492),
                    g = n(4555),
                    y = n(9750),
                    b = i.JSON,
                    w = i.Number,
                    _ = i.SyntaxError,
                    x = b && b.parse,
                    I = s("Object", "keys"),
                    k = Object.getOwnPropertyDescriptor,
                    E = a("".charAt),
                    S = a("".slice),
                    P = a(/./.exec),
                    T = a([].push),
                    A = /^\d$/,
                    C = /^[1-9]$/,
                    O = /^(?:-|\d)$/,
                    N = /^[\t\n\r ]$/,
                    R = function(e, t, n, r) {
                        var o, i, s, a, u, h = e[t],
                            m = r && h === r.value,
                            v = m && "string" == typeof r.source ? {
                                source: r.source
                            } : {};
                        if (d(h)) {
                            var g = l(h),
                                y = m ? r.nodes : g ? [] : {};
                            if (g)
                                for (o = y.length, s = f(h), a = 0; a < s; a++) j(h, a, R(h, "" + a, n, a < o ? y[a] : void 0));
                            else
                                for (i = I(h), s = f(i), a = 0; a < s; a++) u = i[a], j(h, u, R(h, u, n, p(y, u) ? y[u] : void 0))
                        }
                        return c(n, e, t, h, v)
                    },
                    j = function(e, t, n) {
                        if (o) {
                            var r = k(e, t);
                            if (r && !r.configurable) return
                        }
                        void 0 === n ? delete e[t] : m(e, t, n)
                    },
                    U = function(e, t, n, r) {
                        this.value = e, this.end = t, this.source = n, this.nodes = r
                    },
                    D = function(e, t) {
                        this.source = e, this.index = t
                    };
                D.prototype = {
                    fork: function(e) {
                        return new D(this.source, e)
                    },
                    parse: function() {
                        var e = this.source,
                            t = this.skip(N, this.index),
                            n = this.fork(t),
                            r = E(e, t);
                        if (P(O, r)) return n.number();
                        switch (r) {
                            case "{":
                                return n.object();
                            case "[":
                                return n.array();
                            case '"':
                                return n.string();
                            case "t":
                                return n.keyword(!0);
                            case "f":
                                return n.keyword(!1);
                            case "n":
                                return n.keyword(null)
                        }
                        throw new _('Unexpected character: "' + r + '" at: ' + t)
                    },
                    node: function(e, t, n, r, o) {
                        return new U(t, r, e ? null : S(this.source, n, r), o)
                    },
                    object: function() {
                        for (var e = this.source, t = this.index + 1, n = !1, r = {}, o = {}; t < e.length;) {
                            if (t = this.until(['"', "}"], t), "}" === E(e, t) && !n) {
                                t++;
                                break
                            }
                            var i = this.fork(t).string(),
                                s = i.value;
                            t = i.end, t = this.until([":"], t) + 1, t = this.skip(N, t), i = this.fork(t).parse(), m(o, s, i), m(r, s, i.value), t = this.until([",", "}"], i.end);
                            var a = E(e, t);
                            if ("," === a) n = !0, t++;
                            else if ("}" === a) {
                                t++;
                                break
                            }
                        }
                        return this.node(1, r, this.index, t, o)
                    },
                    array: function() {
                        for (var e = this.source, t = this.index + 1, n = !1, r = [], o = []; t < e.length;) {
                            if (t = this.skip(N, t), "]" === E(e, t) && !n) {
                                t++;
                                break
                            }
                            var i = this.fork(t).parse();
                            if (T(o, i), T(r, i.value), t = this.until([",", "]"], i.end), "," === E(e, t)) n = !0, t++;
                            else if ("]" === E(e, t)) {
                                t++;
                                break
                            }
                        }
                        return this.node(1, r, this.index, t, o)
                    },
                    string: function() {
                        var e = this.index,
                            t = g(this.source, this.index + 1);
                        return this.node(0, t.value, e, t.end)
                    },
                    number: function() {
                        var e = this.source,
                            t = this.index,
                            n = t;
                        if ("-" === E(e, n) && n++, "0" === E(e, n)) n++;
                        else {
                            if (!P(C, E(e, n))) throw new _("Failed to parse number at: " + n);
                            n = this.skip(A, ++n)
                        }
                        if (!("." === E(e, n) && (n = this.skip(A, ++n)), "e" !== E(e, n) && "E" !== E(e, n) || (n++, "+" !== E(e, n) && "-" !== E(e, n) || n++, n !== (n = this.skip(A, n))))) throw new _("Failed to parse number's exponent value at: " + n);
                        return this.node(0, w(S(e, t, n)), t, n)
                    },
                    keyword: function(e) {
                        var t = "" + e,
                            n = this.index,
                            r = n + t.length;
                        if (S(this.source, n, r) !== t) throw new _("Failed to parse value at: " + n);
                        return this.node(0, e, n, r)
                    },
                    skip: function(e, t) {
                        for (var n = this.source; t < n.length && P(e, E(n, t)); t++);
                        return t
                    },
                    until: function(e, t) {
                        t = this.skip(N, t);
                        for (var n = E(this.source, t), r = 0; r < e.length; r++)
                            if (e[r] === n) return t;
                        throw new _('Unexpected character: "' + n + '" at: ' + t)
                    }
                };
                var M = v(function() {
                        var e, t = "9007199254740993";
                        return x(t, function(t, n, r) {
                            e = r.source
                        }), e !== t
                    }),
                    $ = y && !v(function() {
                        return 1 / x("-0 \t") != -1 / 0
                    });
                r({
                    target: "JSON",
                    stat: !0,
                    forced: M
                }, {
                    parse: function(e, t) {
                        return $ && !u(t) ? x(e) : function(e, t) {
                            e = h(e);
                            var n = new D(e, 0, ""),
                                r = n.parse(),
                                o = r.value,
                                i = n.skip(N, r.end);
                            if (i < e.length) throw new _('Unexpected extra character: "' + E(e, i) + '" after the parsed data at: ' + i);
                            return u(t) ? R({
                                "": o
                            }, "", t, r) : o
                        }(e, t)
                    }
                })
            },
            8643: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(6002),
                    i = n(1548),
                    s = n(960),
                    a = n(4202),
                    c = n(9972),
                    u = n(5251),
                    d = n(1815),
                    l = n(4492),
                    p = n(6668),
                    h = n(9544),
                    f = n(3004).IteratorPrototype,
                    m = n(1399),
                    v = n(4192),
                    g = "constructor",
                    y = "Iterator",
                    b = h("toStringTag"),
                    w = TypeError,
                    _ = o[y],
                    x = v || !a(_) || _.prototype !== f || !l(function() {
                        _({})
                    }),
                    I = function() {
                        if (i(this, f), c(this) === f) throw new w("Abstract class Iterator not directly constructable")
                    },
                    k = function(e, t) {
                        m ? u(f, e, {
                            configurable: !0,
                            get: function() {
                                return t
                            },
                            set: function(t) {
                                if (s(this), this === f) throw new w("You can't redefine this property");
                                p(this, e) ? this[e] = t : d(this, e, t)
                            }
                        }) : f[e] = t
                    };
                p(f, b) || k(b, y), !x && p(f, g) && f[g] !== Object || k(g, I), I.prototype = f, r({
                    global: !0,
                    constructor: !0,
                    forced: x
                }, {
                    Iterator: I
                })
            },
            8963: (e, t, n) => {
                "use strict";
                var r, o, i = n(6002),
                    s = n(8003),
                    a = i.process,
                    c = i.Deno,
                    u = a && a.versions || c && c.version,
                    d = u && u.v8;
                d && (o = (r = d.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (o = +r[1]), e.exports = o
            },
            9041: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(352);
                r({
                    target: "Iterator",
                    proto: !0,
                    real: !0,
                    forced: n(4192)
                }, {
                    map: o
                })
            },
            9058: (e, t, n) => {
                "use strict";
                var r = n(621);
                e.exports = function(e) {
                    return r(e) || null === e
                }
            },
            9151: (e, t, n) => {
                "use strict";
                var r = n(6671),
                    o = n(5833);
                e.exports = r(o.proto, "size", "get") || function(e) {
                    return e.size
                }
            },
            9544: (e, t, n) => {
                "use strict";
                var r = n(6002),
                    o = n(4456),
                    i = n(6668),
                    s = n(3875),
                    a = n(9750),
                    c = n(4455),
                    u = r.Symbol,
                    d = o("wks"),
                    l = c ? u.for || u : u && u.withoutSetter || s;
                e.exports = function(e) {
                    return i(d, e) || (d[e] = a && i(u, e) ? u[e] : l("Symbol." + e)), d[e]
                }
            },
            9580: (e, t, n) => {
                "use strict";
                var r = n(1834),
                    o = n(6895),
                    i = n(960),
                    s = n(2544),
                    a = n(7768),
                    c = TypeError;
                e.exports = function(e, t) {
                    var n = arguments.length < 2 ? a(e) : t;
                    if (o(n)) return i(r(n, e));
                    throw new c(s(e) + " is not iterable")
                }
            },
            9604: (e, t, n) => {
                "use strict";
                var r = n(1399),
                    o = n(6947),
                    i = n(5251),
                    s = URLSearchParams.prototype,
                    a = o(s.forEach);
                r && !("size" in s) && i(s, "size", {
                    get: function() {
                        var e = 0;
                        return a(this, function() {
                            e++
                        }), e
                    },
                    configurable: !0,
                    enumerable: !0
                })
            },
            9634: (e, t, n) => {
                "use strict";
                var r = n(6947),
                    o = n(78),
                    i = n(5833),
                    s = i.Set,
                    a = i.proto,
                    c = r(a.forEach),
                    u = r(a.keys),
                    d = u(new s).next;
                e.exports = function(e, t, n) {
                    return n ? o({
                        iterator: u(e),
                        next: d
                    }, t) : c(e, t)
                }
            },
            9639: (e, t, n) => {
                "use strict";
                var r = n(8575),
                    o = n(5833).add,
                    i = n(1249),
                    s = n(3868),
                    a = n(78);
                e.exports = function(e) {
                    var t = r(this),
                        n = s(e).getIterator(),
                        c = i(t);
                    return a(n, function(e) {
                        o(c, e)
                    }), c
                }
            },
            9641: (e, t, n) => {
                "use strict";
                var r = n(9731),
                    o = n(1639),
                    i = n(6895),
                    s = n(960),
                    a = n(7636),
                    c = TypeError;
                r({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    reduce: function(e) {
                        s(this), i(e);
                        var t = a(this),
                            n = arguments.length < 2,
                            r = n ? void 0 : arguments[1],
                            u = 0;
                        if (o(t, function(t) {
                                n ? (n = !1, r = t) : r = e(r, t, u), u++
                            }, {
                                IS_RECORD: !0
                            }), n) throw new c("Reduce of empty iterator with no initial value");
                        return r
                    }
                })
            },
            9731: (e, t, n) => {
                "use strict";
                var r = n(6002),
                    o = n(6710).f,
                    i = n(6426),
                    s = n(679),
                    a = n(4980),
                    c = n(1995),
                    u = n(1799);
                e.exports = function(e, t) {
                    var n, d, l, p, h, f = e.target,
                        m = e.global,
                        v = e.stat;
                    if (n = m ? r : v ? r[f] || a(f, {}) : r[f] && r[f].prototype)
                        for (d in t) {
                            if (p = t[d], l = e.dontCallGetSet ? (h = o(n, d)) && h.value : n[d], !u(m ? d : f + (v ? "." : "#") + d, e.forced) && void 0 !== l) {
                                if (typeof p == typeof l) continue;
                                c(p, l)
                            }(e.sham || l && l.sham) && i(p, "sham", !0), s(n, d, p, e)
                        }
                }
            },
            9746: (e, t, n) => {
                "use strict";
                var r = n(679);
                e.exports = function(e, t, n) {
                    for (var o in t) r(e, o, t[o], n);
                    return e
                }
            },
            9750: (e, t, n) => {
                "use strict";
                var r = n(8963),
                    o = n(4492),
                    i = n(6002).String;
                e.exports = !!Object.getOwnPropertySymbols && !o(function() {
                    var e = Symbol("symbol detection");
                    return !i(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
                })
            },
            9760: (e, t, n) => {
                "use strict";
                var r = n(8144);
                e.exports = function(e, t) {
                    return void 0 === e ? arguments.length < 2 ? "" : t : r(e)
                }
            },
            9936: (e, t, n) => {
                "use strict";
                var r = n(4862);
                e.exports = r("document", "documentElement")
            },
            9972: (e, t, n) => {
                "use strict";
                var r = n(6668),
                    o = n(4202),
                    i = n(7282),
                    s = n(7258),
                    a = n(3382),
                    c = s("IE_PROTO"),
                    u = Object,
                    d = u.prototype;
                e.exports = a ? u.getPrototypeOf : function(e) {
                    var t = i(e);
                    if (r(t, c)) return t[c];
                    var n = t.constructor;
                    return o(n) && t instanceof n ? n.prototype : t instanceof u ? d : null
                }
            }
        },
        t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.exports
    }
    n.amdO = {}, n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";

        function e() {
            const e = "xxxx-4xxx-xxxx-xxxxxxxxxxxx";
            let t = "";
            try {
                const n = window.crypto,
                    r = new Uint16Array(31);
                n.getRandomValues(r);
                let o = 0;
                t = e.replace(/[x]/g, e => {
                    const t = r[o];
                    if ("number" != typeof t) throw new Error(`Event ID service: Invalid random number at index "${o}".`);
                    const n = t % 16;
                    return o++, ("x" === e ? n : 3 & n | 8).toString(16)
                }).toUpperCase()
            } catch {
                t = e.replace(/[x]/g, e => {
                    const t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                }).toUpperCase()
            }
            return `${function(){let e=0,t=0;e=(new Date).getTime()>>>0;try{t=performance.now()>>>0}catch{t=0}return Math.abs(e+t).toString(16).toLowerCase().padStart(8,"0")}()}-${t}`
        }
        const t = ["page_viewed", "collection_viewed", "product_viewed", "search_submitted", "product_added_to_cart", "product_added_to_cart_next", "checkout_started", "checkout_completed", "payment_info_submitted", "checkout_contact_step_started", "checkout_contact_info_submitted", "checkout_address_info_submitted", "checkout_shipping_step_started", "checkout_shipping_info_submitted", "checkout_payment_step_started", "session_started"],
            r = "wpm",
            o = "trekkie",
            i = "trekkie-next",
            s = "trekkie-parity";
        let a, c;

        function u(t) {
            return `${t||"sh"}-${e()}`
        }
        n(7697), n(8643), n(7872), n(9641), n(8239), n(8142), n(1256), n(2513), n(6456), n(663), n(1884), n(8006);
        var d = (e => (e.AdvancedDom = "advanced-dom", e.Custom = "custom", e.Dom = "dom", e.Meta = "meta", e.Standard = "standard", e))(d || {});
        const l = {
            all_events: d.Meta,
            all_standard_events: d.Meta,
            all_custom_events: d.Meta,
            all_dom_events: d.Meta,
            checkout_address_info_submitted: d.Standard,
            checkout_completed: d.Standard,
            checkout_started: d.Standard,
            payment_info_submitted: d.Standard,
            collection_viewed: d.Standard,
            checkout_contact_info_submitted: d.Standard,
            page_viewed: d.Standard,
            product_added_to_cart: d.Standard,
            product_removed_from_cart: d.Standard,
            product_viewed: d.Standard,
            search_submitted: d.Standard,
            cart_viewed: d.Standard,
            checkout_shipping_info_submitted: d.Standard,
            alert_displayed: d.Standard,
            ui_extension_errored: d.Standard,
            input_changed: d.Dom,
            input_blurred: d.Dom,
            input_focused: d.Dom,
            form_submitted: d.Dom,
            clicked: d.Dom,
            advanced_dom_mouse_moved: d.AdvancedDom,
            advanced_dom_window_resized: d.AdvancedDom,
            advanced_dom_scrolled: d.AdvancedDom,
            advanced_dom_clipboard: d.AdvancedDom,
            advanced_dom_selection_changed: d.AdvancedDom,
            advanced_dom_available: d.AdvancedDom,
            advanced_dom_changed: d.AdvancedDom,
            advanced_dom_clicked: d.AdvancedDom,
            advanced_dom_form_submitted: d.AdvancedDom,
            advanced_dom_input_changed: d.AdvancedDom,
            advanced_dom_input_blurred: d.AdvancedDom,
            advanced_dom_input_focused: d.AdvancedDom
        };

        function p(e) {
            return function(e) {
                return e in l
            }(e) ? l[e] : d.Custom
        }

        function h(e) {
            return p(e) === d.Standard
        }

        function f(e) {
            return p(e) === d.Custom
        }

        function m(e) {
            return p(e) === d.Dom
        }

        function v(e) {
            return p(e) === d.AdvancedDom
        }
        class g extends Error {
            constructor(e, t = {}) {
                super(e), this.severity = t.severity || "error", this.groupingHash = t.groupingHash ? ? ("Error" === this.name ? void 0 : this.name)
            }
        }
        var y = (e => (e.Shopify = "shopify", e.StorefrontRenderer = "storefront-renderer", e.CheckoutOne = "checkout-one", e.CheckoutOneSdk = "checkout-one-sdk", e.CheckoutOneShopApp = "checkout-one-shop-app", e.CheckoutOneNativeShopApp = "checkout-one-native-shop-app", e.CustomerAccount = "customer-account", e.Unknown = "unknown", e.NotAvailable = "n/a", e))(y || {}),
            b = (e => (e.App = "APP", e.Custom = "CUSTOM", e))(b || {}),
            w = (e => (e.Strict = "STRICT", e.Lax = "LAX", e.Open = "OPEN", e))(w || {}),
            _ = (e => (e.AdvancedDomEvents = "advanced_dom_events", e))(_ || {}),
            x = (e => (e.Modern = "modern", e.Legacy = "legacy", e.Bot = "bot", e.Unknown = "unknown", e.NotAvailable = "n/a", e))(x || {});
        const I = "product_added_to_cart",
            k = "Added Product",
            E = "cart_link_id";

        function S(e, t, n) {
            const {
                jQuery: r
            } = window;
            if (r && r(e).bind) {
                const o = e => {
                    e && n(e)
                };
                r(e).bind(t, o)
            } else e.addEventListener && e.addEventListener(t, n)
        }

        function P(e) {
            window.addEventListener("load", () => {
                for (const t of document.forms) e(t)
            })
        }

        function T() {
            return window.ShopifyAnalytics ? .meta || {}
        }

        function A(e, t) {
            for (const n of t.variants)
                if (String(n.id) === String(e)) return n;
            return null
        }

        function C(e, t) {
            for (const n of t) {
                const t = A(e, n);
                if (t) return {
                    product: n,
                    variant: t
                }
            }
            return {}
        }

        function O(e, t) {
            const [n] = t.productVariants ? .filter(t => t.id === e) || [];
            return n || function(e) {
                let t, n;
                const r = T();
                let o = {
                    currency: r.currency,
                    variant_id: e
                };
                if (r.products) {
                    const o = r.products;
                    ({
                        product: t,
                        variant: n
                    } = C(e, o))
                } else r.product && (t = r.product, n = A(e, t));
                return t && (o = { ...o,
                    product_id: t.id,
                    product_gid: t.gid,
                    product_vendor: t.vendor,
                    collection_title: null,
                    untranslated_product_title: t.untranslated_product_title
                }, n && (o = { ...o,
                    variant_id: e,
                    variant_price: n.price / 100,
                    product_title: n.name,
                    variant_sku: n.sku,
                    variant_title: n.public_title,
                    untranslated_variant_title: n.untranslated_variant_title
                })), {
                    id: String(o.variant_id),
                    image: {
                        src: ""
                    },
                    price: {
                        amount: o.variant_price,
                        currencyCode: o.currency
                    },
                    product: {
                        id: String(o.product_id),
                        title: o.product_title,
                        vendor: o.product_vendor,
                        type: o.product_type,
                        untranslatedTitle: o.untranslated_product_title || o.product_title,
                        url: o.url
                    },
                    sku: o.variant_sku,
                    title: o.variant_title,
                    untranslatedTitle: o.untranslated_variant_title || o.variant_title
                }
            }(e)
        }

        function N(e) {
            try {
                return e instanceof FormData ? function(e) {
                    const t = {};
                    return e.forEach((e, n) => {
                        R(n, e, t)
                    }), t
                }(e) : e instanceof URLSearchParams ? function(e) {
                    return Object.fromEntries(e.entries())
                }(e) : JSON.parse(e)
            } catch {
                return {}
            }
        }

        function R(e, t, n) {
            const [r, ...o] = e.split(".").filter(e => e);
            if (r && o.length > 0) return n[r] = n[r] || {}, void R(o.join("."), t, n[r]);
            const i = /(\w+)?\[(\d+)?\](.+)?/.exec(e);
            if (i) {
                const [e, r, o, s = ""] = i;
                if (r) return n[r] = n[r] || [], void R(e.replace(r, ""), t, n[r]);
                if (o) {
                    const e = s && "[" === s[0] ? [] : {};
                    return n[o] = n[o] || e, void R(s, t, n[o])
                }
                n.push(t)
            } else n[e] = t
        }

        function j(e) {
            let t = e.toLowerCase();
            return t = t.replace(/\/+$/, ""), t = t.replace(/\/\/+/g, "/"), t = t.split("?")[0] || t, t
        }

        function U(e) {
            if (!e) return 1;
            try {
                return JSON.parse(e).quantity || 1
            } catch {
                if (e instanceof FormData || e instanceof URLSearchParams) {
                    if (e.has("quantity")) return Number(e.get("quantity"))
                } else {
                    const t = e.split("&");
                    for (const e of t) {
                        const t = e.split("=");
                        if ("quantity" === t[0]) return Number(t[1])
                    }
                }
            }
            return 1
        }

        function D(e) {
            return null != e && "object" == typeof e && ("merchandise" in e && null != e.merchandise ? .id || "variant_id" in e && null != e.variant_id || "id" in e && null != e.id)
        }

        function M(e) {
            if (!D(e)) return null;
            if ("remote" in e && "boolean" == typeof e.remote) return e.remote;
            let t = null;
            if ("merchandise" in e ? t = e.merchandise ? .id : "variant_id" in e ? t = e.variant_id : "id" in e && (t = e.id), t) {
                const e = function(e) {
                    let t = null,
                        n = null;
                    const r = T();
                    return r.products ? ({
                        product: t,
                        variant: n
                    } = C(e, r.products)) : r.product && (n = A(e, r.product), n && (t = r.product)), n ? t ? ? null : null
                }(String(t));
                if (e && "remote" in e && "boolean" == typeof e.remote) return e.remote
            }
            return null
        }

        function $(e, t, n) {
            const r = function(e) {
                const t = e.merchandise ? .product.title || void 0,
                    n = e.merchandise ? .title || void 0,
                    r = t && n ? `${t} - ${n}` : t || n || "",
                    o = M(e.merchandise);
                return e ? {
                    productId: e.merchandise ? .product ? .id,
                    variantId: e.merchandise ? .id,
                    name: r,
                    sku: e.merchandise ? .sku,
                    category: e.merchandise ? .product ? .type,
                    brand: e.merchandise ? .product ? .vendor,
                    variant: e.merchandise ? .title,
                    price: e.merchandise ? .price ? .amount,
                    quantity: e.quantity,
                    currency: e.merchandise ? .price ? .currencyCode,
                    cartToken: L(document.cookie).cart || void 0,
                    remote: o
                } : {}
            }(e);
            window.ShopifyAnalytics && window.ShopifyAnalytics.lib && "function" == typeof window.ShopifyAnalytics.lib.track && window.ShopifyAnalytics.lib.track(k, { ...r
            }, void 0, void 0, {
                addApiSource: t,
                shopifyEmitted: !0
            })
        }

        function L(e) {
            const t = {};
            for (const n of e.split(/ *; */)) {
                const [e, r] = n.split("=");
                if (void 0 !== e) try {
                    t[decodeURIComponent(e)] = decodeURIComponent(r || "")
                } catch {
                    continue
                }
            }
            return t
        }

        function q(e) {
            if (!e.extensions ? .cart_changelog || "function" != typeof window.ShopifyAnalytics ? .lib ? .track) return;
            const t = function(e) {
                try {
                    return JSON.parse(atob(e))
                } catch {
                    return {}
                }
            }(e.extensions.cart_changelog);
            t.items_added && Array.isArray(t.items_added) && function(e) {
                const t = [];
                return e.forEach(e => {
                    const n = {
                        productId: e.product_id,
                        variantId: e.variant_id,
                        name: e.title,
                        sku: e.sku,
                        category: e.product_type,
                        brand: e.vendor,
                        variant: e.variant_title,
                        price: e.price,
                        quantity: e.quantity,
                        currency: window.ShopifyAnalytics.meta.currency,
                        cartToken: L(document.cookie).cart || void 0
                    };
                    t.push(n)
                }), t
            }(t.items_added).forEach(e => {
                window.ShopifyAnalytics.lib.track(k, e, void 0, void 0, {
                    addApiSource: "storefrontApi",
                    shopifyEmitted: !0
                })
            })
        }

        function B(e, t, n, r) {
            if (t.length !== n.length) throw new g("Payload body and response have different number of items");
            t.forEach((t, o) => {
                let i = 1;
                try {
                    const e = n[o] ? .quantity;
                    i = e ? Number(e) : 1
                } catch {}
                z(e, t, i, r)
            })
        }

        function V(e, t, n, r, o) {
            let i;
            if (function(e) {
                    return e && "object" == typeof e && "merchandise" in e && "cost" in e && "quantity" in e
                }(t)) i = t;
            else {
                const e = T().currency,
                    r = {
                        id: o.includes("add") ? String(t.id) : String(t.variant_id),
                        image: {
                            src: t.image
                        },
                        price: {
                            amount: t.presentment_price,
                            currencyCode: e
                        },
                        product: {
                            id: String(t.product_id),
                            title: t.product_title,
                            vendor: t.vendor,
                            type: t.product_type,
                            untranslatedTitle: t.untranslated_product_title,
                            url: t.url
                        },
                        sku: t.sku,
                        title: t.variant_title,
                        untranslatedTitle: t.untranslated_variant_title
                    };
                i = {
                    cost: {
                        totalAmount: {
                            amount: r.price.amount * n,
                            currencyCode: e
                        }
                    },
                    merchandise: r,
                    quantity: Number(n)
                }
            }
            Y(t, "fetch") || e(r, {
                cartLine: i
            }), r === I && (o.includes("change") || o.includes("update") || o.includes("permalink")) && $({ ...i,
                merchandise: { ...i.merchandise || {},
                    remote: t ? .remote ? ? null
                }
            }, o)
        }

        function z(e, t, n, r) {
            V(e, t, n, I, r)
        }

        function F(e, t, n) {
            const r = t.items,
                o = t.items_changelog ? .added;
            o && Array.isArray(o) && o.map(e => {
                const t = r.find(t => String(t.variant_id) === String(e.variant_id));
                return t ? {
                    variant_id: t.variant_id,
                    view_key: t.key,
                    image: t.image,
                    presentment_price: t.presentment_price,
                    product_id: t.product_id,
                    vendor: t.vendor,
                    product_type: t.product_type,
                    untranslated_product_title: t.product_title,
                    url: t.url,
                    sku: t.sku,
                    product_title: t.product_title,
                    variant_title: t.variant_title,
                    untranslated_variant_title: t.variant_title,
                    quantity: e.quantity,
                    remote: t.remote
                } : null
            }).filter(e => null !== e).forEach(t => {
                z(e, t, t.quantity, n)
            })
        }

        function H(e, t, n) {
            const r = t.items_added,
                o = t.items_removed;
            r.forEach(t => {
                z(e, t, t ? .quantity, n)
            }), o.forEach(t => {
                ! function(e, t, n, r) {
                    V(e, t, n, "product_removed_from_cart", r)
                }(e, t, t ? .quantity, n)
            })
        }

        function W(e, t, n, r) {
            try {
                const o = function(e) {
                    const t = [];
                    if (e.id) t.push({
                        id: e.id,
                        quantity: Number(e.quantity) || 1
                    });
                    else if (e.items)
                        for (const n of e.items) n.id && t.push({
                            id: n.id,
                            quantity: Number(e.quantity) || 1
                        });
                    return t
                }(t);
                if (0 === o.length) return !1;
                ! function(e, t, n, r) {
                    for (const o of t) {
                        const t = o.id.toString(),
                            i = o.quantity,
                            s = O(t, n),
                            a = {
                                cost: {
                                    totalAmount: {
                                        amount: s.price.amount * i,
                                        currencyCode: s.price.currencyCode
                                    }
                                },
                                merchandise: s,
                                quantity: Number(i)
                            };
                        e(I, {
                            cartLine: a
                        }), $(a, r)
                    }
                }(e, o, n, r)
            } catch {
                return !1
            }
            return !0
        }

        function K(e) {}

        function Y(e, t) {
            if (!T().remoteProductsEnabled) return !1;
            if (!D(e)) return !0;
            const n = M(e);
            switch (t) {
                case "fetch":
                case "form":
                    return !0 === n;
                default:
                    return t
            }
        }
        const J = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/+cart\/+add(?:\.js|\.json)?\/*$/,
            X = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/+cart\/+change(?:\.js|\.json)?\/*$/,
            G = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/+cart\/+update(?:\.js|\.json)?\/*$/,
            Q = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/api\/(\d{4}-\d{2}|unstable)\/graphql\.json(\?.*)?$/;
        class Z {
            static handleXhrOpen() {}
            static handleXhrDone(e) {
                if (!(e.xhr.status >= 400)) try {
                    const t = document.createElement("a");
                    t.href = e.url;
                    const n = t.pathname ? t.pathname : e.url;
                    t.href = e.xhr.responseURL;
                    const r = t.pathname ? t.pathname : e.xhr.responseURL;
                    let o = !1;
                    if (n.match(J) && function(e, t) {
                            return j(e) !== j(t)
                        }(n, r)) {
                        const t = N(e.body);
                        o = W(e.publish, t, e.initData, "add-xhr-redirect")
                    }
                    if (o) return;
                    n.match(J) ? Z.parsePayloadResponse(e, t => {
                        const n = Object.keys(t).find(e => "items" === e);
                        if (n) {
                            const r = t[n];
                            let o;
                            try {
                                o = JSON.parse(e.body).items
                            } catch {
                                o = function(e, t) {
                                    const n = new Array(t);
                                    for (let r = 0; r < t; r++) n[r] = {};
                                    for (const r of decodeURI(e).split("&")) {
                                        const [e = "", t] = r.split("="), o = e.match(/items\[(\d+)\]\[(\w+)\].*/);
                                        if (o) {
                                            const e = Number(o[1]),
                                                r = o[2];
                                            "quantity" === r ? n[e].quantity = t : "id" === r && (n[e].id = t)
                                        }
                                    }
                                    return n
                                }(e.body, r.length)
                            }
                            B(e.publish, r, o, "add-xhr-bulk")
                        } else z(e.publish, t, U(e.body), "add-xhr")
                    }) : n.match(X) ? Z.parsePayloadResponse(e, t => {
                        H(e.publish, t, "change-xhr")
                    }) : n.match(G) ? Z.parsePayloadResponse(e, t => {
                        F(e.publish, t, "update-xhr")
                    }) : n.match(Q) && Z.parsePayloadResponse(e, e => {
                        q(e)
                    })
                } catch {}
            }
            static parseBlobToJson(e, t) {
                const n = new FileReader;
                n.addEventListener("loadend", () => {
                    t(JSON.parse(String.fromCharCode(...new Uint8Array(n.result))))
                }), n.readAsArrayBuffer(e)
            }
            static parsePayloadResponse(e, t) {
                e.xhr.response instanceof Blob ? Z.parseBlobToJson(e.xhr.response, t) : e.xhr.responseText && t(JSON.parse(e.xhr.responseText))
            }
            constructor(e, t, n, r, o, i) {
                this.xhr = e, this.url = t, this.method = n, this.body = r, this.publish = o, this.initData = i
            }
            onReadyStateChange() {
                4 === this.xhr.readyState && Z.handleXhrDone({
                    method: this.method,
                    url: this.url,
                    body: this.body,
                    xhr: this.xhr,
                    publish: this.publish,
                    initData: this.initData
                }), this.oldOnReadyStateChange && this.oldOnReadyStateChange.call(this.xhr, new Event("oldOnReadyStateChange"))
            }
        }

        function ee(e, t) {
            (function(e, t, n) {
                if (void 0 === e ? .prototype ? .open) return;
                const r = e.prototype.open,
                    o = e.prototype.send;
                Reflect.defineProperty(e.prototype, "open", {
                    value(e, t) {
                        this._url = t, this._method = e, r.apply(this, arguments)
                    }
                }), Reflect.defineProperty(e.prototype, "send", {
                    value(e) {
                        if (!(e instanceof Document)) {
                            const r = new Z(this, this._url, this._method, e || "", t, n);
                            this.addEventListener ? this.addEventListener("readystatechange", r.onReadyStateChange.bind(r), !1) : (r.oldOnReadyStateChange = this.onreadystatechange, this.onreadystatechange = r.onReadyStateChange)
                        }
                        o.call(this, e)
                    }
                })
            })(window.XMLHttpRequest, e, t),
            function(e, t, n) {
                const r = e.fetch;
                if ("function" != typeof r) return;
                const o = function(e, t, n) {
                    return function(...r) {
                        return e.apply(this, Array.prototype.slice.call(r)).then(e => {
                            if (!e.ok) return e;
                            const r = document.createElement("a");
                            r.href = e.url;
                            const o = r.pathname ? r.pathname : e.url;
                            let i, s = !1;
                            if (o.match(J) && arguments[1] ? .body && e.redirected && (i = N(arguments[1].body), s = W(t, i, n, "add-fetch-redirect")), s) return e;
                            try {
                                if (o.match(J)) {
                                    try {
                                        if (i = i || N(arguments[1].body), Object.keys(i).includes("items")) return function(e, t, n) {
                                            t.clone().json().then(t => {
                                                const r = n.items,
                                                    o = t.items;
                                                return B(e, o, r || [], "add-fetch-bulk"), t
                                            }).catch(K)
                                        }(t, e, i), e
                                    } catch (a) {}! function(e, t, n) {
                                        const r = U(n);
                                        t.clone().json().then(t => z(e, t, r, "add-fetch")).catch(K)
                                    }(t, e, arguments[1].body)
                                } else o.match(X) ? function(e, t) {
                                    t.clone().json().then(t => {
                                        H(e, t, "change-fetch")
                                    }).catch(K)
                                }(t, e) : o.match(G) ? function(e, t) {
                                    t.clone().json().then(t => {
                                        F(e, t, "update-fetch")
                                    }).catch(K)
                                }(t, e) : o.match(Q) && function(e) {
                                    e.ok && e.clone().json().then(e => {
                                        q(e)
                                    }).catch(K)
                                }(e)
                            } catch {}
                            return e
                        })
                    }
                }(r, t, n);
                Reflect.defineProperty(e, "fetch", {
                    value: o
                })
            }(window, e, t), P(n => {
                const r = n.getAttribute("action");
                r && r.indexOf("/cart/add") >= 0 && S(n, "submit", n => {
                    ! function(e, t, n) {
                        const r = t || window.event;
                        if (!r || r.defaultPrevented || r.isDefaultPrevented && r.isDefaultPrevented()) return;
                        const o = r.currentTarget || r.srcElement;
                        if (o && o instanceof Element && (o.getAttribute("action") || o.getAttribute("href"))) try {
                            const t = function(e) {
                                let t;
                                const n = e.querySelector('[name="id"]') || e instanceof HTMLFormElement && e.elements.namedItem("id");
                                return n instanceof HTMLSelectElement && n.options ? t = n.options[n.selectedIndex] : (n instanceof HTMLOptionElement || n instanceof HTMLInputElement) && (t = n), t
                            }(o);
                            if (!t) return;
                            const r = t.value,
                                i = function(e) {
                                    const t = e.querySelector('[name="quantity"]');
                                    return t instanceof HTMLInputElement ? Number(t.value) : 1
                                }(o),
                                s = O(r, n);
                            if (Y(s, "form")) return;
                            const a = {
                                cost: {
                                    totalAmount: {
                                        amount: s.price.amount * i,
                                        currencyCode: s.price.currencyCode
                                    }
                                },
                                merchandise: s,
                                quantity: Number(i)
                            };
                            e(I, {
                                cartLine: a
                            })
                        } catch {}
                    }(e, n, t)
                })
            })
        }
        n(5993), n(9041), n(6364);
        const te = () => "undefined" == typeof window,
            ne = () => "undefined" != typeof __CtaTestEnv__ && "true" === __CtaTestEnv__;
        class re {}
        re.warn = e => {
            ne() || console.warn(e)
        }, re.error = e => {
            ne() || console.error(e)
        }, re.info = e => {
            ne() || console.info(e)
        }, re.debug = e => {
            ne() || console.debug(e)
        }, re.trace = e => {
            ne() || console.trace(e)
        };
        const oe = re;

        function ie(e, t) {
            if (null === e) return "null";
            if (Array.isArray(e)) return `[${e.map(e=>ie(e,!0)).join(",")}]`;
            if ("object" == typeof e) {
                let n = [];
                for (const t in e) e.hasOwnProperty(t) && void 0 !== e[t] && "" !== e[t] && n.push(`${t}:${ie(e[t],!0)}`);
                const r = n.join(",");
                return t ? `{${r}}` : r
            }
            return "string" == typeof e ? JSON.stringify(e) : `${e}`
        }

        function se(e, ...t) {
            if (0 === t.length) return e;
            const n = t[0];
            return e[n] || (e[n] = {}), se(e[n], ...t.slice(1))
        }

        function ae(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return ""
            }
        }

        function ce() {
            if (!te()) return window
        }

        function ue() {
            var e, t;
            return !te() && Boolean(null === (e = ce()) || void 0 === e || null === (t = e.Shopify) || void 0 === t ? void 0 : t.theme)
        }

        function de() {
            try {
                return "undefined" != typeof PerformanceServerTiming
            } catch {
                return !1
            }
        }
        class le extends TypeError {
            constructor(e) {
                super(e), this.name = "ConsentValidationError", Object.setPrototypeOf(this, le.prototype)
            }
        }
        const pe = "visitorConsentCollected",
            he = "p",
            fe = "a",
            me = "m",
            ve = "t",
            ge = "m",
            ye = "a",
            be = "p",
            we = "s";
        n(8596);
        const _e = "_tracking_consent";

        function xe(e, t = !1) {
            const n = function() {
                try {
                    return document.cookie
                } catch {
                    return !1
                }
            }() ? document.cookie.split("; ") : [];
            for (let r = 0; r < n.length; r++) {
                const [t, o] = n[r].split("=");
                if (e === ae(t)) return ae(o)
            }
            if (t && "_tracking_consent" === e && !window.localStorage.getItem("tracking_consent_fetched")) {
                if (ne()) return;
                return console.debug("_tracking_consent missing"),
                    function(e = "/") {
                        const t = new XMLHttpRequest;
                        t.open("HEAD", e, !1), t.withCredentials = !0, t.send()
                    }(), window.localStorage.setItem("tracking_consent_fetched", "true"), xe(e, !1)
            }
        }

        function Ie(e) {
            return e === encodeURIComponent(ae(e))
        }

        function ke(e, t, n, r) {
            if (!Ie(r)) throw new TypeError("Cookie value is not correctly URI encoded.");
            if (!Ie(e)) throw new TypeError("Cookie name is not correctly URI encoded.");
            let o = `${e}=${r}`;
            o += "; path=/", t && (o += `; domain=${t}`), o += `; expires=${new Date((new Date).getTime()+n).toUTCString()}`, document.cookie = o
        }
        n(7960);
        class Ee {
            constructor() {
                if (Ee.instance) return Ee.instance;
                Ee.instance = this
            }
            produce(e, t) {
                if (!te()) try {
                    const n = {
                            schema_id: "customer_privacy_api_events/2.0",
                            payload: {
                                shop_domain: window.location.host,
                                method_name: e,
                                call_details: t || null
                            }
                        },
                        r = {
                            accept: "*/*",
                            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                            "content-type": "application/json; charset=utf-8",
                            "x-monorail-edge-event-created-at-ms": String(Date.now()),
                            "x-monorail-edge-event-sent-at-ms": String(Date.now())
                        };
                    if (!window.location.host.endsWith("spin.dev")) return fetch("https://monorail-edge.shopifysvc.com/v1/produce", {
                        headers: r,
                        body: JSON.stringify(n),
                        method: "POST",
                        mode: "cors",
                        credentials: "omit"
                    }).catch(() => {});
                    console.log("Monorail event from consent API:", r, n)
                } catch (n) {}
            }
        }

        function Se() {
            var e, t;
            return te() ? {} : (null === (e = window.Shopify) || void 0 === e || null === (t = e.customerPrivacy) || void 0 === t ? void 0 : t.config) || {}
        }
        Ee.instance = void 0;
        const Pe = /^https?:\/\/([^/]+)(\/api\/(?:unstable|2\d{3}-\d{2})\/graphql\.json(?=$|\?))?/;

        function Te(e, t) {
            if ("fetch" !== e.initiatorType) return !1;
            const n = e.name.match(Pe);
            if (!n) return !1;
            const [, r, o] = n;
            return r === t || !!o && !(null == r || !r.endsWith(`.${t}`))
        }
        const Ae = "_cmp";

        function Ce(e = Ae) {
            let t;
            if (t = Ue() && Oe(() => function(e = Ae) {
                    var t, n;
                    if (te()) return;
                    const r = null === (t = performance) || void 0 === t || null === (n = t.getEntriesByType) || void 0 === n ? void 0 : n.call(t, "resource"),
                        o = window.location.host;
                    let i = Ne[e];
                    for (let s = r.length - 1; s >= 0; s--) {
                        const t = r[s];
                        if (!Te(t, o)) continue;
                        const n = Re(t, e);
                        if (n) {
                            i = n;
                            break
                        }
                    }
                    return Ne[e] = i, i
                }(e)) || Oe(() => function(e = Ae) {
                    var t, n;
                    if (!De() && ! function() {
                            try {
                                const e = performance.getEntriesByType("navigation")[0].serverTiming;
                                return !!e && 0 != e.length
                            } catch {
                                return !1
                            }
                        }()) {
                        const e = new Ee;
                        let t = "failed_to_fetch";
                        try {
                            t = navigator.userAgent
                        } catch {}
                        e.produce("navigationServerTiming", JSON.stringify({
                            failed: !0,
                            userAgent: t,
                            apiSupported: de()
                        })), De() || (se(ce(), "Shopify", "customerPrivacy").serverTimingSupportVerified = !0)
                    }
                    const r = null === (t = performance) || void 0 === t || null === (n = t.getEntriesByType) || void 0 === n ? void 0 : n.call(t, "navigation");
                    if (!r) return;
                    const o = r.map(t => Re(t, e)).find(e => e);
                    if (o && e === Ae) try {
                        sessionStorage.setItem("consentHeader", o)
                    } catch {}
                    return o
                }(e)), !t) {
                if (e !== Ae) return;
                let t;
                try {
                    t = sessionStorage.getItem("consentHeader")
                } catch {}
                return t || void 0
            }
            try {
                t = decodeURIComponent(t)
            } catch {}
            return t
        }

        function Oe(e) {
            try {
                return e()
            } catch {
                return
            }
        }
        const Ne = {};

        function Re(e, t = Ae) {
            var n, r;
            if (e) return null === (n = e.serverTiming) || void 0 === n || null === (r = n.find(e => e.name == t)) || void 0 === r ? void 0 : r.description
        }

        function je() {
            var e, t;
            const n = ce();
            return !0 === (null == n || null === (e = n.Shopify) || void 0 === e || null === (t = e.customerPrivacy) || void 0 === t ? void 0 : t.backendConsentEnabled) || !0 === Se().asyncVisitorState
        }

        function Ue() {
            return !te() && (je() || !ue())
        }

        function De() {
            var e, t;
            const n = ce();
            return null == n || null === (e = n.Shopify) || void 0 === e || null === (t = e.customerPrivacy) || void 0 === t ? void 0 : t.serverTimingSupportVerified
        }

        function Me() {
            if (!te()) {
                var e, t;
                const n = (null === (e = window.Shopify) || void 0 === e || null === (t = e.customerPrivacy) || void 0 === t ? void 0 : t.injectedConsent) || Se().injectedConsent;
                return n ? ae(n) : void 0
            }
        }

        function $e() {
            let e;
            if (e = te() ? Me() : function() {
                    var e, t;
                    const n = null === (e = window.Shopify) || void 0 === e || null === (t = e.customerPrivacy) || void 0 === t ? void 0 : t.cachedConsent;
                    return n ? ae(n) : void 0
                }() || Me() || new URLSearchParams(window.location.search).get("_cs") || xe(_e) || Ce(), void 0 !== e) return function(e) {
                if ("%" == e.slice(0, 1)) try {
                    e = decodeURIComponent(e)
                } catch {}
                const t = e.slice(0, 1);
                return "{" == t ? function(e) {
                    var t;
                    let n;
                    try {
                        n = JSON.parse(e)
                    } catch {
                        return
                    }
                    if ("2.1" === n.v && null !== (t = n.con) && void 0 !== t && t.CMP) return n
                }(e) : "3" == t ? function(e) {
                    const t = e.slice(1).split("_"),
                        [n, r, o, i, s] = t;
                    let a, c;
                    try {
                        a = t[5] ? JSON.parse(t.slice(5).join("_")) : void 0
                    } catch {}
                    if (s) {
                        const e = s.replace(/\*/g, "/").replace(/-/g, "+"),
                            t = atob(e);
                        let n = "";
                        for (let r = 0; r < t.length; r++) {
                            const e = t.charCodeAt(r).toString(16);
                            n += 1 === e.length ? "0" + e : e
                        }
                        c = [8, 13, 18, 23].reduce((e, t) => e.slice(0, t) + "-" + e.slice(t), n)
                    }

                    function u(e) {
                        const t = n.split(".")[0];
                        return t.includes(e.toLowerCase()) ? "0" : t.includes(e.toUpperCase()) ? "1" : ""
                    }

                    function d(e) {
                        return n.includes(e.replace("t", "s").toUpperCase())
                    }
                    return {
                        v: "3",
                        con: {
                            CMP: {
                                [ye]: u("a"),
                                [be]: u("p"),
                                [ge]: u("m"),
                                [we]: u("s")
                            }
                        },
                        region: r || "",
                        cus: a,
                        purposes: {
                            [fe]: d(fe),
                            [he]: d(he),
                            [me]: d(me),
                            [ve]: d(ve)
                        },
                        sale_of_data_region: "t" == i,
                        display_banner: "t" == o,
                        consent_id: c
                    }
                }(e) : void 0
            }(e)
        }

        function Le() {
            try {
                let e = $e();
                if (!e) return;
                return e
            } catch {
                return
            }
        }

        function qe(e) {
            const t = Le();
            if (!t || !t.purposes) return !0;
            const n = t.purposes[e];
            return "boolean" != typeof n || n
        }

        function Be() {
            return qe(he)
        }

        function Ve() {
            return qe(fe)
        }

        function ze() {
            return qe(me)
        }

        function Fe() {
            return qe(ve)
        }

        function He(e, t) {
            void 0 !== e.granular_consent && function(e) {
                ! function() {
                    const e = function() {
                        var e;
                        if (!te()) return null === (e = window.Shopify) || void 0 === e ? void 0 : e.customerPrivacy
                    }();
                    e && (e.consentStatus = "loaded")
                }();
                const t = e[me],
                    n = e[ve],
                    r = e[fe],
                    o = e[he];
                !0 === t ? We("firstPartyMarketingConsentAccepted") : !1 === t && We("firstPartyMarketingConsentDeclined"), !0 === n ? We("thirdPartyMarketingConsentAccepted") : !1 === n && We("thirdPartyMarketingConsentDeclined"), !0 === r ? We("analyticsConsentAccepted") : !1 === r && We("analyticsConsentDeclined"), !0 === o ? We("preferencesConsentAccepted") : !1 === o && We("preferencesConsentDeclined");
                const i = function(e) {
                    return {
                        marketingAllowed: e[me],
                        saleOfDataAllowed: e[ve],
                        analyticsAllowed: e[fe],
                        preferencesAllowed: e[he],
                        firstPartyMarketingAllowed: e[me],
                        thirdPartyMarketingAllowed: e[ve]
                    }
                }(e);
                We(pe, i);
                const s = [r, o, t, n];
                s.every(e => !0 === e) && We("trackingConsentAccepted"), s.every(e => !1 === e) && We("trackingConsentDeclined")
            }(t)
        }

        function We(e, t) {
            if (!te()) try {
                document.dispatchEvent(new CustomEvent(e, {
                    detail: t || {}
                }))
            } catch (n) {
                console.error(`[Shopify Customer Privacy] Error in event listener for "${e}":`, n)
            }
        }
        n(3154), n(1649), n(9604), n(2341);

        function Ke(e, t) {
            const n = ce();
            if (!n) return;
            const r = se(n, "Shopify", "customerPrivacy", "cachedToken");
            if (t) {
                const n = "_shopify_s" === e ? 18e5 : 31536e6;
                r[e] = t, r[e + "_expires_at"] = Date.now() + n
            } else delete r[e], delete r[e + "_expires_at"]
        }

        function Ye(e) {
            return `${e.origin}${t=e.pathname,t.replace(/\/$/,"")}`;
            var t
        }

        function Je(e) {
            return e.startsWith("http://") || e.startsWith("https://")
        }
        const Xe = "Shopify-Storefront-Consent-Management";

        function Ge(e) {
            const t = e.granular_consent;
            return {
                query: `query { consentManagement { cookies(${ie({visitorConsent:{marketing:t.marketing,analytics:t.analytics,preferences:t.preferences,saleOfData:t.sale_of_data,...t.metafields&&{metafields:t.metafields}},...t.email&&{visitorEmail:t.email},origReferrer:e.referrer,landingPage:e.landing_page})}) { trackingConsentCookie cookieDomain landingPageCookie origReferrerCookie shopifyUnique shopifyVisit } customerAccountUrl } }`,
                variables: {}
            }
        }
        let Qe;

        function Ze(e, t, n, r = {}) {
            const o = Se().consentDomain || t.granular_consent.checkoutRootDomain || window.location.host,
                i = () => function(e, t, n, r) {
                    const o = t.granular_consent;
                    let i = "",
                        s = {};
                    if (o.customerAccountRequestInfo) i = o.customerAccountRequestInfo.url, s = o.customerAccountRequestInfo.headers;
                    else {
                        const t = Se(),
                            r = o.storefrontAccessToken || t.storefrontAccessToken || function() {
                                try {
                                    const e = document.documentElement.querySelector("#shopify-features"),
                                        t = "Could not find liquid access token";
                                    if (!e) return void oe.warn(t);
                                    const n = e.textContent;
                                    if (!n) return void oe.warn(t);
                                    let r;
                                    try {
                                        r = JSON.parse(n).accessToken
                                    } catch {
                                        return void oe.warn(t)
                                    }
                                    return r || void oe.warn(t)
                                } catch {
                                    return void oe.warn("Could not find liquid access token")
                                }
                            }();
                        i = `${/^(localhost|127\.0\.0\.1)(:|$)/.test(e)?"http:":"https:"}//${e}/api/unstable/graphql.json`;
                        const a = o.isExtensionToken ? "Shopify-Storefront-Extension-Token" : "x-shopify-storefront-access-token";
                        s = r ? {
                            [a]: r
                        } : {}, n && (s = { ...s,
                            ...n()
                        })
                    }
                    const a = {
                        headers: {
                            "content-type": "application/json",
                            ...!0 === Se().asyncConsent && new URL(i).origin === window.location.origin && {
                                [Xe]: "1"
                            },
                            ...s,
                            ...ne() ? {
                                "x-test-payload": JSON.stringify(t)
                            } : {}
                        },
                        body: JSON.stringify(Ge(t)),
                        method: "POST"
                    };
                    let c;
                    try {
                        c = fetch(i, a)
                    } catch (u) {
                        c = Promise.reject(u)
                    }
                    return c.then(e => {
                        try {
                            null == r || r(e)
                        } catch {}
                        if (e.ok) return e.json(); {
                            const t = new Error("Server error");
                            throw t.cause = {
                                status: e.status
                            }, t
                        }
                    })
                }(o, t, r.getVisitorTokenHeaders, r.onResponse).then(e => {
                    var o, i;
                    const s = null == e || null === (o = e.data) || void 0 === o ? void 0 : o.consentManagement;
                    if (!s) {
                        var a;
                        const t = (null !== (a = null == e ? void 0 : e.errors) && void 0 !== a ? a : []).map(e => null == e ? void 0 : e.message).filter(Boolean).join("; ");
                        throw new Error(t ? `GraphQL error: ${t}` : "GraphQL response missing consentManagement")
                    }
                    const c = s.cookies.cookieDomain,
                        u = s.cookies.trackingConsentCookie,
                        d = s.cookies.shopifyUnique,
                        l = s.cookies.shopifyVisit,
                        p = null !== (i = s.customerAccountUrl) && void 0 !== i ? i : "";
                    var h;
                    if (u && (h = u, se(window, "Shopify", "customerPrivacy").cachedConsent = h), Ke("_shopify_y", d), Ke("_shopify_s", l), t.granular_consent.headlessStorefront && !je()) {
                        const e = 31536e6,
                            n = t.granular_consent,
                            r = c || n.checkoutRootDomain || window.location.hostname,
                            o = n.storefrontRootDomain || c || window.location.hostname;
                        ke(_e, r, e, u), o !== r && ke(_e, o, e, u)
                    }
                    return !1 !== r.emitEvents && He(t, {
                            [he]: Be(),
                            [fe]: Ve(),
                            [me]: ze(),
                            [ve]: Fe()
                        }),
                        function(e, t) {
                            if (!e) return;
                            const n = function(e) {
                                const t = new URL(e, window.location.origin),
                                    n = Je(e) ? Ye(t) : Ye(t).replace(window.location.origin, ""),
                                    r = document.querySelectorAll(`a[href^="${n}"]`),
                                    o = document.querySelectorAll(`a[href*="${window.location.hostname}/customer_authentication"]`),
                                    i = new Set,
                                    s = [];
                                for (let a = 0; a < r.length; a++) i.has(r[a]) || (i.add(r[a]), s.push(r[a]));
                                for (let a = 0; a < o.length; a++) i.has(o[a]) || (i.add(o[a]), s.push(o[a]));
                                return s
                            }(e);
                            if (n.length)
                                for (let r = 0; r < n.length; r++) {
                                    const o = n[r],
                                        i = o.getAttribute("href");
                                    if (!i) continue;
                                    const s = new URL(i, window.location.origin);
                                    s.searchParams.set("_cs", t);
                                    const a = Je(e) ? s.toString() : s.toString().replace(window.location.origin, "");
                                    o.setAttribute("href", a)
                                }
                        }(p, u), void 0 !== n && n(null, e), e
                }).catch(e => {
                    var t;
                    const r = "Error while setting storefront API consent: " + e.message,
                        o = null === (t = e.cause) || void 0 === t ? void 0 : t.status,
                        i = {
                            error: r
                        };
                    if (void 0 !== o && (i.statusCode = o), void 0 === n) throw i;
                    n(i)
                });
            if (!0 !== Se().asyncConsent) return i();
            const s = Qe = Qe ? Qe.then(i, i) : i(),
                a = () => {
                    Qe === s && (Qe = void 0)
                };
            return s.then(a, a), s
        }
        const et = ["marketing", "analytics", "preferences", "sale_of_data"],
            tt = [...et, "email", "rootDomain", "checkoutRootDomain", "storefrontRootDomain", "storefrontAccessToken", "headlessStorefront", "isExtensionToken", "metafields", "customerAccountRequestInfo"],
            nt = et.map(e => `"${e}"`).join(", "),
            rt = "https://shopify.dev/docs/api/customer-privacy";

        function ot() {
            try {
                if ("" === document.referrer) return !0;
                const e = document.createElement("a");
                return e.href = document.referrer, window.location.hostname != e.hostname
            } catch {
                return !0
            }
        }

        function it() {
            return !! function(e = null) {
                return null === e && (e = Le()), void 0 === e
            }() || ze() && Ve()
        }
        const st = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/;

        function at(e, t) {
            if ("string" != typeof e) return;
            if (! function(e) {
                    return !!e && st.test(e.trim().toLowerCase())
                }(e)) return;
            const n = e.trim();
            if ("00000000-0000-0000-0000-000000000000" === n) return;
            if ("00000000-0000-0000-5000-000000000000" === n) return;
            const r = null == t || "string" == typeof t && "" === t.trim() ? NaN : Number(t);
            return Number.isFinite(r) && Date.now() > r ? void 0 : n
        }

        function ct(e) {
            if (!te()) try {
                var t, n;
                return null === (t = document.querySelector(`meta[name="${e}"]`)) || void 0 === t || null === (n = t.getAttribute("content")) || void 0 === n ? void 0 : n.trim()
            } catch {
                return
            }
        }

        function ut(e) {
            const t = ct(e);
            if (t) try {
                const e = JSON.parse(t);
                return "string" == typeof e ? e.trim() : void 0
            } catch {
                return
            }
        }

        function dt(e) {
            return void 0 !== e && Date.now() > e
        }

        function lt(e) {
            const t = ct(e);
            if (!t) return !1;
            const n = t.replace(/^"(.*)"$/, "$1").toLowerCase();
            return "true" === n || "t" === n
        }

        function pt(e, t) {
            if (lt("serialized-isNewCookieStorageEnabled")) {
                const e = at(ut(t));
                if (e && !dt(function(e) {
                        const t = ut(`${e}Expiration`);
                        if (!t) return;
                        const n = Number(t);
                        return Number.isFinite(n) ? n : void 0
                    }(t))) return e
            }
            if (lt("new-cookie-storage-activated")) {
                const t = at(ct(e));
                if (t && !dt(function(e) {
                        if (!te()) try {
                            var t, n;
                            const r = null === (t = document.querySelector(`meta[name="${e}"]`)) || void 0 === t || null === (n = t.getAttribute("data-expiration")) || void 0 === n ? void 0 : n.trim();
                            if (!r) return;
                            const o = Number(r);
                            return Number.isFinite(o) ? o : void 0
                        } catch {
                            return
                        }
                    }(e))) return t
            }
        }

        function ht() {
            return pt("shopify-y", "serialized-shopifyY")
        }

        function ft() {
            return pt("shopify-s", "serialized-shopifyS")
        }
        class mt {
            constructor() {
                if (this.endpoint = "https://otlp-http-production.shopifysvc.com/v1/metrics", this.serviceName = "consent-tracking-api", this.scopeName = "consent-tracking-api-opentelemetry", mt.instance) return mt.instance;
                mt.instance = this
            }
            increment(e, t = {}) {
                if (!te() && e) try {
                    const n = this.buildMetricBody(e, t);
                    if (window.location.host.endsWith("spin.dev")) return void console.log("OpenTelemetry metric from consent API:", n);
                    if ("function" != typeof fetch) return;
                    return fetch(this.endpoint, {
                        headers: {
                            accept: "*/*",
                            "content-type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify(n),
                        method: "POST",
                        mode: "cors",
                        credentials: "omit"
                    }).catch(() => {})
                } catch (n) {}
            }
            buildMetricBody(e, t) {
                const n = 1e6 * Date.now();
                return {
                    resourceMetrics: [{
                        resource: {
                            attributes: [{
                                key: "service.name",
                                value: {
                                    stringValue: this.serviceName
                                }
                            }]
                        },
                        scopeMetrics: [{
                            scope: {
                                name: this.scopeName,
                                version: "1.0.0",
                                attributes: []
                            },
                            metrics: [{
                                name: e,
                                unit: "1",
                                sum: {
                                    aggregationTemporality: 1,
                                    isMonotonic: !0,
                                    dataPoints: [{
                                        asDouble: 1,
                                        startTimeUnixNano: n,
                                        timeUnixNano: n,
                                        attributes: vt(t)
                                    }]
                                }
                            }]
                        }]
                    }]
                }
            }
        }

        function vt(e) {
            return Object.keys(e).reduce((t, n) => {
                const r = e[n];
                return null == r || t.push({
                    key: n,
                    value: gt(r)
                }), t
            }, [])
        }

        function gt(e) {
            return "string" == typeof e ? {
                stringValue: e
            } : "boolean" == typeof e ? {
                boolValue: e
            } : isFinite(e) ? Math.floor(e) === e ? {
                intValue: e
            } : {
                doubleValue: e
            } : {
                stringValue: String(e)
            }
        }
        mt.instance = void 0;
        const yt = new mt,
            bt = {};

        function wt(e) {
            if (Ue()) {
                const t = function(e) {
                    const t = function(e) {
                        try {
                            var t, n;
                            const i = null === (t = performance) || void 0 === t || null === (n = t.getEntriesByType) || void 0 === n ? void 0 : n.call(t, "resource");
                            if (!i) return;
                            const s = window.location.host;
                            for (let t = i.length - 1; t >= 0; t--) {
                                var r, o;
                                const n = i[t];
                                if (!Te(n, s)) continue;
                                const a = null === (r = n.serverTiming) || void 0 === r || null === (o = r.find(t => t.name === e)) || void 0 === o ? void 0 : o.description;
                                if (a) return a
                            }
                            return
                        } catch {
                            return
                        }
                    }(e);
                    return t && (bt[e] = t), t
                }(e);
                if (t) return {
                    value: t,
                    source: "resource"
                };
                const n = bt[e];
                if (n) return {
                    value: n,
                    source: "cache"
                }
            }
            const t = function(e) {
                try {
                    var t, n, r, o;
                    return null === (t = performance) || void 0 === t || null === (n = t.getEntriesByType("navigation")[0]) || void 0 === n || null === (r = n.serverTiming) || void 0 === r || null === (o = r.find(t => t.name == e)) || void 0 === o ? void 0 : o.description
                } catch {
                    return
                }
            }(e);
            return t ? {
                value: t,
                source: "navigation"
            } : {
                value: void 0,
                source: null
            }
        }

        function _t(e, t, {
            generateFallback: n = !1,
            tag: r = "unknown"
        } = {}) {
            if (!Ve() && !ze()) return;
            const o = function(e) {
                var t, n, r, o, i, s;
                const a = ce();
                if (!a) return;
                const c = null === (t = a.Shopify) || void 0 === t || null === (n = t.customerPrivacy) || void 0 === n || null === (r = n.cachedToken) || void 0 === r ? void 0 : r[e],
                    u = null === (o = a.Shopify) || void 0 === o || null === (i = o.customerPrivacy) || void 0 === i || null === (s = i.cachedToken) || void 0 === s ? void 0 : s[e + "_expires_at"];
                return !c || !u || u < (new Date).getTime() ? void 0 : at(c)
            }(e);
            if (o) return o;
            const i = ce();
            if (null != i && i.ShopPay) return function(e) {
                const t = ce();
                if (!t || !t.ShopPay) return;
                const n = {
                    _shopify_y: "trackingUnique",
                    _shopify_s: "trackingVisit"
                }[e];
                return n ? at(t.ShopPay[n]) : void 0
            }(e);
            const s = t();
            if (s) return s;
            const a = function(e) {
                const t = e.replace("_shopify", ""),
                    n = wt(t).value,
                    r = Number(wt(`${t}e`).value);
                if (!r || Date.now() / 1e3 < r) return at(n)
            }(e);
            if (a) return a;
            const c = at(function(e) {
                try {
                    var t, n, r, o;
                    return null === (t = document.cookie) || void 0 === t || null === (n = t.split(";")) || void 0 === n || null === (r = n.find(t => t.trim().startsWith(`${e}=`))) || void 0 === r || null === (o = r.split("=")[1]) || void 0 === o ? void 0 : o.trim()
                } catch {
                    return
                }
            }(e));
            if (c) return c;
            try {
                ! function(e, t = !1, n = "unknown") {
                    var r, o;
                    yt.increment("consent_tracking_api_tracking_token_missing");
                    const i = ce();
                    (new Ee).produce("trackingTokenMissing", JSON.stringify({
                        token: e,
                        hasTrekkie: !(null == i || !i.ShopifyAnalytics),
                        hasTheme: !(null == i || null === (r = i.Shopify) || void 0 === r || !r.theme),
                        domain: null == i || null === (o = i.location) || void 0 === o ? void 0 : o.hostname,
                        fallbackRequested: t,
                        tag: n
                    }))
                }(e, n, r)
            } catch {}
        }

        function xt({
            generateFallback: e = !1,
            tag: t = "unknown"
        } = {}) {
            return _t("_shopify_y", ht, {
                generateFallback: e,
                tag: t
            })
        }

        function It({
            generateFallback: e = !1,
            tag: t = "unknown"
        } = {}) {
            return _t("_shopify_s", ft, {
                generateFallback: e,
                tag: t
            })
        }

        function kt() {
            return ze()
        }

        function Et() {
            return Ve()
        }

        function St() {
            return Be()
        }

        function Pt() {
            return Fe()
        }! function() {
            try {
                var e, t, n, r, o;
                if (te() || ue()) return;
                if ("function" != typeof(null === (e = performance) || void 0 === e ? void 0 : e.setResourceTimingBufferSize)) return;
                if ((null !== (t = null === (n = (r = performance).getEntriesByType) || void 0 === n || null === (o = n.call(r, "resource")) || void 0 === o ? void 0 : o.length) && void 0 !== t ? t : 0) >= 1e3) return;
                performance.setResourceTimingBufferSize(1e3)
            } catch {}
        }();
        const Tt = new Set;

        function At(e) {
            return Tt.has(e)
        }
        const Ct = "6b3fd603",
            Ot = "72f1cbdd",
            Nt = "b13923a8",
            Rt = "873d0e44";
        let jt = function(e) {
            return e.Product = "product", e.Collection = "collection", e
        }({});
        const Ut = {
            randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        };
        let Dt;
        const Mt = new Uint8Array(16);

        function $t() {
            if (!Dt && (Dt = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Dt)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return Dt(Mt)
        }
        const Lt = [];
        for (let n = 0; n < 256; ++n) Lt.push((n + 256).toString(16).slice(1));
        const qt = function(e, t, n) {
                if (Ut.randomUUID && !t && !e) return Ut.randomUUID();
                const r = (e = e || {}).random || (e.rng || $t)();
                if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
                    n = n || 0;
                    for (let e = 0; e < 16; ++e) t[n + e] = r[e];
                    return t
                }
                return function(e, t = 0) {
                    return Lt[e[t + 0]] + Lt[e[t + 1]] + Lt[e[t + 2]] + Lt[e[t + 3]] + "-" + Lt[e[t + 4]] + Lt[e[t + 5]] + "-" + Lt[e[t + 6]] + Lt[e[t + 7]] + "-" + Lt[e[t + 8]] + Lt[e[t + 9]] + "-" + Lt[e[t + 10]] + Lt[e[t + 11]] + Lt[e[t + 12]] + Lt[e[t + 13]] + Lt[e[t + 14]] + Lt[e[t + 15]]
                }(r)
            },
            Bt = /\/products\/([a-z0-9]+(?:-[a-z0-9]+)*)-([a-zA-Z0-9+/=_-]+?)-([a-f0-9]{8})-remote(?:[?#/]|$)/;

        function Vt(e) {
            try {
                const [t = ""] = e.split(/[?#]/, 1), n = Bt.exec(t) ? .[2];
                if (!n) return;
                const r = atob(n.replace(/-/g, "+").replace(/_/g, "/")).split(":");
                if (r.length < 5 || "v1" !== r[0]) return;
                const [, o, i, s] = r;
                return {
                    productId: o || void 0,
                    remoteShopId: i || void 0,
                    adResponseId: s || void 0
                }
            } catch {
                return
            }
        }

        function zt(e) {
            const t = e.searchParams.get("variant");
            return t && t.length > 0 ? t : null
        }
        const Ft = /\/products\/([^/?#]+)/,
            Ht = 'predictive-search, predictive-search-component, [data-predictive-search], .predictive-search, form[action$="/search"]',
            Wt = "search";

        function Kt(e, t) {
            const n = function(e) {
                    if (!e ? .length) return () => null;
                    const t = new Map;
                    return n => {
                        if (0 === t.size)
                            for (const r of e) r.handle && !t.has(r.handle) && t.set(r.handle, r);
                        return t.get(n) ? ? null
                    }
                }(e),
                r = new Map,
                o = new Map;
            return (e, i = e) => {
                if (function(e) {
                        return !!e.closest("header") && !e.closest(Ht)
                    }(e)) return null;
                const s = function(e) {
                        try {
                            return new URL(e.href).pathname
                        } catch {
                            return (e.getAttribute("href") ? ? "").trim()
                        }
                    }(e),
                    a = function(e) {
                        const t = Ft.exec(e) ? .[1];
                        if (!t) return null;
                        try {
                            return {
                                handle: decodeURIComponent(t)
                            }
                        } catch {
                            return {
                                handle: t
                            }
                        }
                    }(s);
                if (!a) return null;
                const c = function(e, t) {
                        return e.closest(Ht) ? Wt : e.closest("product-recommendations, [data-product-recommendations], .product-recommendations") ? "recommendations" : function(e) {
                            return e === jt.Collection ? "collection" : "searchresults" === e ? Wt : "other"
                        }(t)
                    }(e, t),
                    u = n(a.handle),
                    d = function(e) {
                        const t = e.getAttribute("href") ? .trim();
                        if (t) try {
                            return zt(new URL(t, e.baseURI)) ? ? void 0
                        } catch {
                            return
                        }
                    }(e) ? ? u ? .variants ? .[0] ? .id,
                    l = i.getBoundingClientRect(),
                    p = {
                        width: window.innerWidth,
                        height: window.innerHeight
                    },
                    h = `${a.handle}:${c}`,
                    f = r.get(h);
                if (f) return { ...f,
                    variantId: d,
                    rect: l,
                    viewport: p
                };
                const m = (o.get(c) ? ? 0) + 1;
                o.set(c, m);
                const v = Vt(s),
                    g = v ? .productId && v.remoteShopId ? v : void 0,
                    y = {
                        handle: a.handle,
                        productId: g ? .productId ? ? u ? .id,
                        variantId: d,
                        remoteShopId: g ? .remoteShopId ? ? u ? .remoteShopId,
                        isCollective: u ? .isCollective,
                        adResponseId: v ? .adResponseId,
                        impressionId: qt(),
                        placement: c,
                        position: m,
                        rect: l,
                        viewport: p
                    };
                return r.set(h, y), y
            }
        }

        function Yt() {
            return !At("229bb729")
        }

        function Jt() {
            return !At("add5c673")
        }

        function Xt() {
            return At(Rt) && At("0fa89373")
        }

        function Gt() {
            return At(Rt) && (Yt() || Jt() || Xt())
        }
        class Qt extends g {
            constructor(e, t) {
                super(t instanceof Error ? t.message : String(t), {
                    groupingHash: e
                }), this.cause = void 0, this.name = e, this.cause = t
            }
        }

        function Zt(e, t) {
            try {
                return e()
            } catch (n) {
                return t
            }
        }
        const en = new Set;

        function tn() {
            document.removeEventListener("visibilitychange", tn);
            for (const e of en) e();
            en.clear()
        }

        function nn() {
            return new Promise(e => {
                en.add(e), "visible" === document.visibilityState ? (document.addEventListener("visibilitychange", tn), requestAnimationFrame(() => setTimeout(() => {
                    en.delete(e), e()
                }))) : tn()
            })
        }
        const rn = 'a[href*="/products/"]';

        function on(e) {
            return Zt(() => e.nodeType === Node.ELEMENT_NODE, !1)
        }

        function sn(e) {
            return !(!on(e) || !e.matches(rn) && null === e.querySelector(rn))
        }

        function an(e) {
            let t = !1;
            const {
                onProductFound: n,
                onProductRemoved: r,
                onError: o
            } = e;

            function i(e, t) {
                if (on(e)) {
                    e.matches(rn) && e instanceof HTMLAnchorElement && t(e);
                    for (const n of Array.from(e.querySelectorAll(rn))) n instanceof HTMLAnchorElement && t(n)
                }
            }
            let s = [],
                a = [],
                c = null;
            const u = new MutationObserver(e => {
                    if (!t) try {
                        let u = !1;
                        for (const t of e) {
                            for (const e of Array.from(t.addedNodes)) sn(e) && (s.push(e), u = !0);
                            for (const e of Array.from(t.removedNodes)) sn(e) && (a.push(e), u = !0)
                        }
                        u && (c || (c = nn().then(() => {
                            c = null,
                                function() {
                                    if (t) return s = [], void(a = []);
                                    const e = s,
                                        c = a;
                                    s = [], a = [];
                                    for (const t of c) try {
                                        i(t, e => {
                                            e.isConnected || r(e)
                                        })
                                    } catch (u) {
                                        o ? .(new Qt("ProductScannerError", u))
                                    }
                                    for (const t of e) try {
                                        i(t, e => {
                                            e.isConnected && n(e)
                                        })
                                    } catch (u) {
                                        o ? .(new Qt("ProductScannerError", u))
                                    }
                                }()
                        })))
                    } catch (u) {
                        o ? .(new Qt("ProductScannerError", u))
                    }
                }),
                d = "function" == typeof requestIdleCallback && "function" == typeof cancelIdleCallback,
                l = d ? requestIdleCallback : requestAnimationFrame,
                p = d ? cancelIdleCallback : cancelAnimationFrame,
                h = l(() => {
                    if (!t) try {
                        i(document.documentElement, n)
                    } catch (e) {
                        o ? .(new Qt("ProductScannerError", e))
                    }
                });
            return u.observe(document.documentElement, {
                childList: !0,
                subtree: !0
            }), () => {
                t || (t = !0, p(h), u.disconnect(), s = [], a = [], c = null)
            }
        }
        class cn extends g {
            constructor() {
                super("The wait time must be above zero."), this.name = "InvalidThrottlingWaitTimeError"
            }
        }
        class un extends g {
            constructor() {
                super("The throttle function requires at least one of leading or trailing to be true, otherwise, its callback will never be called."), this.name = "InvalidThrottleOptionsError"
            }
        }

        function dn(e, t, n = {}) {
            return ln(e, t, n)
        }

        function ln(e, t, {
            leading: n = !0,
            trailing: r = !0,
            debounceMode: o = !1
        } = {}) {
            if (t <= 0) throw new cn;
            if (!n && !r) throw new un;
            let i, s, a, c = null,
                u = 0;

            function d() {
                u = !1 === n ? 0 : (new Date).valueOf(), c = null, i && (s = e.apply(a, i)), a = null, i = null
            }
            return Object.assign(function(...l) {
                const p = (new Date).valueOf();
                u || !1 !== n || (u = p), o && (u = p, c && (clearTimeout(c), c = null));
                const h = t - (p - u);
                return a = this, i = l, h <= 0 || h > t ? (c && (clearTimeout(c), c = null), u = p, i && (s = e.apply(a, i)), a = null, i = null) : c || !1 === r || (c = setTimeout(d, h)), s
            }, {
                cancel: function() {
                    c && (clearTimeout(c), c = null), i = null, a = null, u = 0
                }
            })
        }
        let pn;
        const hn = () => (void 0 === pn && (pn = function() {
                let e = !1;
                try {
                    const t = {
                            get passive() {
                                return e = !0, !1
                            }
                        },
                        n = () => {};
                    self.addEventListener("test", n, t), self.removeEventListener("test", n, t)
                } catch (t) {
                    return !1
                }
                return e
            }()), pn),
            fn = {
                capture: !0,
                passive: !0
            };

        function mn(e, t, n, r) {
            const o = r.addEventListenerOptions ? { ...fn,
                ...r.addEventListenerOptions
            } : fn;
            try {
                const i = function(e, {
                    sampleRate: t,
                    throttleDelay: n,
                    onError: r
                }) {
                    const o = n => {
                        nn().then(() => e(n)).catch(e => {
                            const n = /Maximum call stack size exceeded/i.test(e ? .message || "");
                            r(e, {
                                context: "listenTo/handler",
                                type: n ? "metric" : "error",
                                unhandled: !1,
                                options: {
                                    sampleRate: t ? ? .5
                                }
                            })
                        })
                    };
                    return "number" == typeof n ? dn(o, n) : o
                }(n, r);
                return e.addEventListener(t, i, hn() ? o : o.capture), () => {
                    e.removeEventListener(t, i, hn() ? o : o.capture)
                }
            } catch (i) {
                r.onError(i, {
                    context: "listenTo",
                    unhandled: !1
                })
            }
            return () => {}
        }

        function vn(e, t) {
            if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
            return e
        }
        var gn = 0;

        function yn(e) {
            return "__private_" + gn++ + "_" + e
        }
        var bn = yn("observer"),
            wn = yn("watchesByElement"),
            _n = yn("lastEntryByElement"),
            xn = yn("disposed"),
            In = yn("onIntersect"),
            kn = yn("armDwell"),
            En = yn("clearTimer"),
            Sn = yn("removeWatch");
        class Pn {
            constructor() {
                if (Object.defineProperty(this, Sn, {
                        value: On
                    }), Object.defineProperty(this, En, {
                        value: Cn
                    }), Object.defineProperty(this, kn, {
                        value: An
                    }), Object.defineProperty(this, In, {
                        value: Tn
                    }), Object.defineProperty(this, bn, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, wn, {
                        writable: !0,
                        value: new Map
                    }), Object.defineProperty(this, _n, {
                        writable: !0,
                        value: new Map
                    }), Object.defineProperty(this, xn, {
                        writable: !0,
                        value: !1
                    }), "function" != typeof IntersectionObserver) return vn(this, bn)[bn] = null, void(vn(this, xn)[xn] = !0);
                vn(this, bn)[bn] = new IntersectionObserver(e => vn(this, In)[In](e), {
                    threshold: .5
                })
            }
            watch(e, t) {
                if (vn(this, xn)[xn]) return () => {};
                const n = { ...t,
                    el: e,
                    durationMs: t.durationMs ? ? 1e3,
                    timer: null,
                    satisfied: !1
                };
                let r = vn(this, wn)[wn].get(e);
                r || (r = new Set, vn(this, wn)[wn].set(e, r), vn(this, bn)[bn] ? .observe(e)), r.add(n);
                const o = vn(this, _n)[_n].get(e);
                return o && o.intersectionRatio >= .5 && vn(this, kn)[kn](n, o), () => {
                    vn(this, En)[En](n), n.satisfied || vn(this, Sn)[Sn](n)
                }
            }
            dispose() {
                if (!vn(this, xn)[xn]) {
                    vn(this, xn)[xn] = !0;
                    for (const e of vn(this, wn)[wn].values())
                        for (const t of e) vn(this, En)[En](t);
                    vn(this, wn)[wn].clear(), vn(this, _n)[_n].clear(), vn(this, bn)[bn] ? .disconnect()
                }
            }
        }

        function Tn(e) {
            if (!vn(this, xn)[xn])
                for (const t of e) {
                    const e = vn(this, wn)[wn].get(t.target);
                    if (e)
                        if (vn(this, _n)[_n].set(t.target, t), t.intersectionRatio < .5)
                            for (const t of e) vn(this, En)[En](t);
                        else
                            for (const n of [...e]) vn(this, kn)[kn](n, t)
                }
        }

        function An(e, t) {
            if (e.satisfied || null != e.timer) return;
            let n = !0;
            try {
                n = !e.shouldStartDwell || e.shouldStartDwell(t)
            } catch (r) {
                return e.onError ? .(new Qt("VisibilityObserverError", r)), void vn(this, Sn)[Sn](e)
            }
            n ? e.timer = setTimeout(() => {
                if (e.timer = null, !e.satisfied) {
                    e.satisfied = !0;
                    try {
                        e.onSatisfied()
                    } catch (r) {
                        e.onError ? .(new Qt("VisibilityObserverError", r))
                    } finally {
                        vn(this, Sn)[Sn](e)
                    }
                }
            }, e.durationMs) : vn(this, Sn)[Sn](e)
        }

        function Cn(e) {
            null != e.timer && (clearTimeout(e.timer), e.timer = null)
        }

        function On(e) {
            const t = vn(this, wn)[wn].get(e.el);
            t && (t.delete(e), 0 === t.size && (vn(this, wn)[wn].delete(e.el), vn(this, _n)[_n].delete(e.el), vn(this, bn)[bn] ? .unobserve(e.el)))
        }

        function Nn({
            context: e,
            products: t,
            onEvent: n,
            onHoverEvent: r,
            onError: o
        }) {
            try {
                const i = Yt(),
                    s = Jt(),
                    a = Xt() && Boolean(r);
                if (!i && !s && !a) return () => {};
                const c = i || a ? new Pn : null,
                    u = Kt(t, e.pageType),
                    d = new Map,
                    l = new Map;
                let p = !1;
                const h = c && i ? function({
                        visibility: e,
                        context: t,
                        emit: n,
                        onError: r
                    }) {
                        const o = new Set;
                        return {
                            track(i, s) {
                                const a = `${s.handle}:${s.placement}`;
                                return o.has(a) ? () => {} : e.watch(i, {
                                    onError: r,
                                    shouldStartDwell: e => e.boundingClientRect.width >= 10 && e.boundingClientRect.height >= 10,
                                    onSatisfied: () => {
                                        o.has(a) || (o.add(a), n({
                                            interaction: "impression",
                                            event: {
                                                pageType: t.pageType,
                                                productId: s.productId,
                                                variantId: s.variantId,
                                                remoteShopId: s.remoteShopId,
                                                isCollective: s.isCollective,
                                                adResponseId: s.adResponseId,
                                                impressionId: s.impressionId,
                                                placement: s.placement,
                                                position: s.position,
                                                rect: s.rect,
                                                collectionId: t.collectionId,
                                                totalProducts: t.totalProducts
                                            },
                                            viewport: s.viewport
                                        }))
                                    }
                                })
                            }
                        }
                    }({
                        visibility: c,
                        context: e,
                        emit: n,
                        onError: o
                    }) : null,
                    f = s ? function({
                        context: e,
                        emit: t,
                        onError: n
                    }) {
                        const r = e => {
                            n ? .(new Qt("ClickTrackerError", e))
                        };
                        return {
                            track(n, o) {
                                let i = !1;
                                const s = mn(n, "click", n => {
                                    i || n ? .isTrusted && t({
                                        interaction: "click",
                                        event: {
                                            pageType: e.pageType,
                                            productId: o.productId,
                                            variantId: o.variantId,
                                            remoteShopId: o.remoteShopId,
                                            isCollective: o.isCollective,
                                            adResponseId: o.adResponseId,
                                            impressionId: o.impressionId,
                                            placement: o.placement,
                                            position: o.position,
                                            rect: o.rect,
                                            collectionId: e.collectionId,
                                            totalProducts: e.totalProducts
                                        },
                                        viewport: o.viewport
                                    })
                                }, {
                                    onError: r
                                });
                                return () => {
                                    i = !0, s()
                                }
                            }
                        }
                    }({
                        context: e,
                        emit: n,
                        onError: o
                    }) : null,
                    m = c && a && r ? function({
                        visibility: e,
                        context: t,
                        emit: n,
                        onError: r
                    }) {
                        const o = e => {
                                r ? .(new Qt("HoverTrackerError", e))
                            },
                            i = "function" == typeof window.matchMedia ? window.matchMedia("(any-hover: none)") : null,
                            s = new Set;
                        let a = null,
                            c = null,
                            u = null,
                            d = !1;

                        function l() {
                            null != u && (clearTimeout(u), u = null)
                        }

                        function p() {
                            c && (c.cancel(), c = null)
                        }

                        function h() {
                            l(), a = null, p()
                        }

                        function f(e, t, n) {
                            const r = e => {
                                try {
                                    n(e)
                                } catch (t) {
                                    o(t)
                                }
                            };
                            return e.addEventListener(t, r, {
                                passive: !0
                            }), () => e.removeEventListener(t, r)
                        }

                        function m(r, i) {
                            a = {
                                el: r,
                                impressionId: i.impressionId
                            }, c = {
                                el: r,
                                impressionId: i.impressionId,
                                cancel: e.watch(r, {
                                    onError: o,
                                    durationMs: 3e3,
                                    shouldStartDwell: e => e.boundingClientRect.width >= 10 && e.boundingClientRect.height >= 10,
                                    onSatisfied: () => {
                                        a ? .el === r && a.impressionId === i.impressionId && null == u && (c = null, n({
                                            event: {
                                                pageType: t.pageType,
                                                productId: i.productId,
                                                variantId: i.variantId,
                                                remoteShopId: i.remoteShopId,
                                                isCollective: i.isCollective,
                                                impressionId: i.impressionId,
                                                placement: i.placement,
                                                position: i.position,
                                                rect: i.rect,
                                                collectionId: t.collectionId,
                                                adResponseId: i.adResponseId,
                                                totalProducts: t.totalProducts
                                            },
                                            viewport: i.viewport
                                        }))
                                    }
                                })
                            }
                        }
                        const v = f(document, "visibilitychange", () => {
                            "visible" !== document.visibilityState && h()
                        });
                        return {
                            track(e, t) {
                                let n = !1;
                                s.add(e);
                                const r = f(e, "mouseenter", r => {
                                        if (r instanceof MouseEvent && !n && !d && r.isTrusted && !i ? .matches && "visible" === document.visibilityState) {
                                            if (a ? .impressionId === t.impressionId) {
                                                const n = null != u;
                                                if (l(), c ? .el === e) return;
                                                return p(), void((n || a.el !== e) && m(e, t))
                                            }
                                            l(), p(), m(e, t)
                                        }
                                    }),
                                    o = f(e, "mouseleave", r => {
                                        r instanceof MouseEvent && (n || d || r.isTrusted && function(e) {
                                            const {
                                                relatedTarget: t
                                            } = e;
                                            if (t instanceof Element)
                                                for (const n of s)
                                                    if (n === t || n.contains(t)) return n
                                        }(r) !== e && a ? .el === e && (p(), function(e, t) {
                                            l(), u = setTimeout(() => {
                                                u = null, a ? .el === e && a.impressionId === t && (a = null, p())
                                            }, 250)
                                        }(e, t.impressionId)))
                                    });
                                return () => {
                                    n = !0, s.delete(e), c ? .el === e && p(), a ? .el === e && h(), r(), o()
                                }
                            },
                            dispose() {
                                d || (d = !0, s.clear(), h(), v())
                            }
                        }
                    }({
                        visibility: c,
                        context: e,
                        emit: r,
                        onError: o
                    }) : null,
                    v = (e, t, n) => {
                        let r = !1;
                        return () => {
                            r || (r = !0, n.anchors.delete(e), n.anchors.size > 0 || (l.get(t) === n && l.delete(t), n.dispose()))
                        }
                    },
                    g = (e, t, n) => {
                        if (!m) return () => {};
                        const r = l.get(t);
                        if (r) return r.anchors.add(e), v(e, t, r);
                        const o = {
                            anchors: new Set([e]),
                            dispose: m.track(t, n)
                        };
                        return l.set(t, o), v(e, t, o)
                    },
                    y = an({
                        onProductFound: e => {
                            if (p) return;
                            const t = Zt(() => n.closest(".card-wrapper, .product-card-wrapper, .product-card, .grid__item, [data-product-card]") ? ? n.closest("[data-product-id]") ? ? n, n = e);
                            var n;
                            const r = d.get(e);
                            if (r) {
                                if (r.wrapper === t) return;
                                d.delete(e), r.dispose()
                            }
                            const i = u(e, t);
                            if (!i) return;
                            const s = [];
                            h && s.push(h.track(t, i)), f && s.push(f.track(e, i)), m && s.push(g(e, t, i)), d.set(e, {
                                wrapper: t,
                                dispose: Rn(s, o)
                            })
                        },
                        onProductRemoved: e => {
                            if (p) return;
                            const t = d.get(e);
                            t && (d.delete(e), t.dispose())
                        },
                        onError: o
                    });
                return () => {
                    if (!p) {
                        p = !0, y();
                        for (const {
                                dispose: e
                            } of d.values()) e();
                        d.clear(), l.clear(), c ? .dispose(), m ? .dispose()
                    }
                }
            } catch (i) {
                return o ? .(new Qt("ProductInteractionProducerError", i)), () => {}
            }
        }

        function Rn(e, t) {
            return () => {
                for (const r of e) try {
                    r()
                } catch (n) {
                    t ? .(new Qt("ProductInteractionProducerError", n))
                }
            }
        }

        function jn(e) {
            return e !== jt.Product || At("d5e4cc6b") ? e !== jt.Collection || At("b5872a1d") ? void 0 : jt.Collection : jt.Product
        }

        function Un(e) {
            return e.replace(/\/$/, "")
        }

        function Dn(e) {
            return !!At(Rt) && (e.pageType === jt.Product ? Boolean(e.resourceId) : e.pageType === jt.Collection && (Boolean(e.resourceId) || function(e) {
                if (!e) return !1;
                try {
                    const t = Un(new URL(e).pathname);
                    return "/collections/all" === t || /^\/[a-z]{2,3}(?:-[a-z]{2,4})?\/collections\/all$/.test(t)
                } catch {
                    return !1
                }
            }(e.pageUrl)))
        }
        class Mn extends g {
            constructor(e, t) {
                super(t instanceof Error ? t.message : String(t), {
                    groupingHash: e
                }), this.cause = void 0, this.name = e, this.cause = t
            }
        }
        const $n = [5e3, 1e4, 3e4, 6e4];

        function Ln(e) {
            return At(Rt) && e === jt.Product && !At("22fc6a6b")
        }
        class qn extends g {
            constructor(e, t) {
                super(t instanceof Error ? t.message : String(t), {
                    groupingHash: e
                }), this.cause = void 0, this.name = e, this.cause = t
            }
        }
        const Bn = ["/cart/add", "/cart/add.js"];

        function Vn(e) {
            return (e instanceof HTMLInputElement || e instanceof HTMLSelectElement) && "quantity" === e.name
        }

        function zn(e) {
            const t = e.form ? .getAttribute("action");
            if (!t) return !1;
            try {
                const {
                    pathname: e
                } = new URL(t, window.location.origin);
                return Bn.some(t => e.endsWith(t))
            } catch {
                return !1
            }
        }

        function Fn(e) {
            return Number.isInteger(e) && e >= 1
        }

        function Hn(e, t) {
            const n = e.target;
            if (!Vn(n)) return;
            if (!zn(n)) return;
            const r = Number(n.value);
            Fn(r) ? t.scheduleEmit(n, r) : t.cancelPending()
        }

        function Wn({
            publish: e,
            debounceMs: t
        }) {
            let n = !1,
                r = null;
            const o = function(e, t) {
                return ln(e, t, {
                    leading: !1,
                    trailing: !0,
                    debounceMode: !0
                })
            }((t, n) => {
                t !== r && (e({
                    interaction: "quantity",
                    event: {
                        quantity: t,
                        variantId: n
                    }
                }), r = t)
            }, t);

            function i() {
                o.cancel()
            }
            return {
                scheduleEmit: function(e, t) {
                    n || o(t, function(e) {
                        const t = e.form ? .querySelector('[name="id"]');
                        return t ? .value ? t.value : new URLSearchParams(window.location.search).get("variant") || void 0
                    }(e))
                },
                cancelPending: i,
                dispose: function() {
                    n || (n = !0, i())
                }
            }
        }

        function Kn(e) {
            return At(Rt) && e.pageType === jt.Product && Boolean(e.resourceId) && !At("80a63488")
        }
        class Yn extends g {
            constructor(e, t) {
                super(t instanceof Error ? t.message : String(t), {
                    groupingHash: e
                }), this.cause = void 0, this.name = e, this.cause = t
            }
        }

        function Jn({
            pageType: e,
            resourceId: t,
            pageUrl: n,
            products: r,
            emit: o,
            onError: i
        }) {
            const s = function({
                pageType: e,
                resourceId: t,
                products: n
            }) {
                if (e === jt.Product) return n ? .find(e => e.id === t) ? .remoteShopId
            }({
                pageType: e,
                resourceId: t,
                products: r
            });
            if (Gt() && Nn({
                    context: {
                        pageType: e,
                        collectionId: e === jt.Collection ? t : void 0,
                        totalProducts: r ? .length
                    },
                    products: r,
                    onEvent: e => {
                        o("log:buyer-behavior:product-interaction", e)
                    },
                    ...Xt() ? {
                        onHoverEvent: e => {
                            o("log:buyer-behavior:product-hover", e)
                        }
                    } : {},
                    onError: e => {
                        i(e, {
                            context: "features/buyer-behavior/productInteractionProducer",
                            severity: "warning",
                            unhandled: !1
                        })
                    }
                }), Dn({
                    pageType: jn(e),
                    resourceId: t,
                    pageUrl: n
                })) {
                const a = function({
                        pageType: e,
                        resourceId: t,
                        pageUrl: n,
                        products: r
                    }) {
                        if (e !== jt.Product) return;
                        const o = r ? .find(e => e.id === t);
                        if (!o) return;
                        const {
                            variants: i
                        } = o, s = i ? .[0] ? .id;
                        let a = null;
                        try {
                            a = zt(new URL(n))
                        } catch {}
                        return a ? Array.isArray(i) ? i.some(e => e.id === a) ? a : s : a : s
                    }({
                        pageType: e,
                        resourceId: t,
                        pageUrl: n,
                        products: r
                    }),
                    c = function({
                        pageType: e,
                        pageUrl: t
                    }) {
                        if (e === jt.Product) try {
                            return Vt(new URL(t).pathname) ? .adResponseId
                        } catch {
                            return
                        }
                    }({
                        pageType: e,
                        pageUrl: n
                    });
                ! function(e, {
                    onError: t
                }) {
                    let n = !1,
                        r = 0,
                        o = 0,
                        i = null;

                    function s() {
                        if (n) return;
                        a();
                        const t = $n[r];
                        if (void 0 === t) return;
                        const c = Math.max(0, t - o);
                        i = setTimeout(() => {
                            return i = null, o = n = t, r++, e({
                                event: {
                                    dwellMilliseconds: n
                                }
                            }), void(r >= $n.length ? u() : s());
                            var n
                        }, c)
                    }

                    function a() {
                        null !== i && (clearTimeout(i), i = null)
                    }
                    const c = mn(document, "visibilitychange", function() {
                        "visible" !== document.visibilityState ? (a(), o = 0) : !n && r < $n.length && s()
                    }, {
                        onError: e => {
                            t(new Mn("PageDwellListenerError", e))
                        }
                    });

                    function u() {
                        n || (n = !0, a(), c())
                    }
                    "visible" === document.visibilityState && s()
                }(({
                    event: e
                }) => o("log:buyer-behavior:page-dwell", {
                    event: { ...e,
                        remoteShopId: s,
                        variantId: a,
                        adResponseId: c
                    }
                }), {
                    onError: e => {
                        i(e, {
                            context: "features/buyer-behavior/pageDwellListener",
                            severity: "warning",
                            unhandled: !1
                        })
                    }
                })
            }
            Ln(e) && t && function(e, {
                onError: t
            }) {
                const n = e => {
                        t(new qn("ProductQuantityChangeListenerError", e))
                    },
                    r = Wn({
                        publish: e,
                        debounceMs: 500
                    });
                mn(document, "input", e => Hn(e, r), {
                    onError: n
                }), mn(document, "change", e => Hn(e, r), {
                    onError: n
                }), mn(document, "quantity-selector:update", e => function(e, t) {
                    const n = e.detail ? .quantity;
                    if ("number" != typeof n || !Fn(n)) return;
                    const r = Vn(o = e.target) ? o : o instanceof Element ? o.querySelector('[name="quantity"]') : null;
                    var o;
                    r && zn(r) && t.scheduleEmit(r, n)
                }(e, r), {
                    onError: n
                })
            }(({
                interaction: e,
                event: t
            }) => o("log:buyer-behavior:product-quantity-change", {
                interaction: e,
                event: { ...t,
                    remoteShopId: s
                }
            }), {
                onError: e => {
                    i(e, {
                        context: "features/buyer-behavior/productQuantityChangeListener",
                        severity: "warning",
                        unhandled: !1
                    })
                }
            }), Kn({
                pageType: e,
                resourceId: t
            }) && function(e, t) {
                const n = e => {
                        t.onError(new Yn("ProductVariantChangeListenerError", e))
                    },
                    r = function(e) {
                        const t = window.location.pathname;
                        let n = zt(new URL(window.location.href));
                        return function(r = window.location.href) {
                            const o = new URL(r, window.location.href);
                            if (o.pathname !== t) return;
                            const i = zt(o);
                            null !== i ? i !== n && (e({
                                event: {
                                    variantId: i
                                }
                            }), n = i) : n = null
                        }
                    }(e),
                    o = function() {
                        const e = window.navigation;
                        if (e && "function" == typeof e.addEventListener && "function" == typeof e.removeEventListener) return e
                    }();
                o ? function(e, t, n) {
                    let r = !1;
                    const o = e => {
                        try {
                            if (r) return;
                            if (!e.destination.sameDocument) return;
                            if ("replace" !== e.navigationType) return;
                            t(e.destination.url)
                        } catch (o) {
                            n(o)
                        }
                    };
                    e.addEventListener("navigate", o)
                }(o, r, n) : function(e, t) {
                    let n = !1;
                    const r = history.replaceState;

                    function o(o, i, s) {
                        r.call(this, o, i, s);
                        try {
                            if (n) return;
                            if (null == s) return;
                            e()
                        } catch (a) {
                            t(a)
                        }
                    }
                    history.replaceState = o
                }(r, n)
            }(({
                event: e
            }) => o("log:buyer-behavior:product-variant-change", {
                event: { ...e,
                    remoteShopId: s
                }
            }), {
                onError: e => {
                    i(e, {
                        context: "features/buyer-behavior/productVariantChangeListener",
                        severity: "warning",
                        unhandled: !1
                    })
                }
            })
        }
        const Xn = "webPixelsManager",
            Gn = "production",
            Qn = "modern",
            Zn = "aa86ff40wb21a529ap5b81b74dm8e0f4ce5",
            er = "baa86ff40wb21a529ap5b81b74dm8e0f4ce5m.js",
            tr = "isMerchantSession";
        n(5864);
        const nr = () => {
            let e, t;
            return {
                promise: new Promise((...n) => {
                    [e, t] = n
                }),
                resolve: e,
                reject: t
            }
        };
        class rr {
            constructor(e) {
                this.maxSize = e, this.cache = new Map
            }
            get(e) {
                if (!this.cache.has(e)) return;
                const t = this.cache.get(e);
                return this.cache.delete(e), this.cache.set(e, t), t
            }
            has(e) {
                return this.cache.has(e)
            }
            set(e, t) {
                if (this.cache.size >= this.maxSize) {
                    const e = this.cache.keys().next().value;
                    this.cache.delete(e)
                }
                return this.cache.set(e, t), this
            }
            delete(e) {
                return this.cache.delete(e)
            }
            clear() {
                this.cache.clear()
            }
        }
        const or = e => "number" == typeof e ? new rr(e) : new Map,
            ir = (...e) => JSON.stringify(e);

        function sr(e, {
            cache: t,
            cacheKey: n
        } = {}) {
            function r(...t) {
                const o = r.cache,
                    i = (n ? ? ir).apply(this, t);
                if (o.has(i)) return o.get(i); {
                    const n = e(...t);
                    return o.set(i, n), n
                }
            }
            return r.cache = t ? ? or(), r
        }
        const ar = sr(e => {
                if (!e) return 0;
                let t = 5381;
                for (let n = 0; n < e.length; n++) t = Math.imul(t, 33) + e.charCodeAt(n) | 0;
                return t >>> 0
            }, {
                cacheKey: e => e
            }),
            cr = (e, t) => Math.random() <= t;

        function ur(e) {
            return dr(cr, e)
        }

        function dr(e, {
            rate: t = 1
        } = {}) {
            return lr(t), {
                includes: (n, r = t) => (r !== t && lr(r), e(n, r))
            }
        }

        function lr(e) {
            if (e <= 0 || e > 1) throw new g("Invalid sampling rate", {
                groupingHash: "Utilities:Sample:InvalidSamplingRate"
            })
        }
        const pr = [/Googlebot/i, /Storebot-Google/i, /bingbot/i, /Baiduspider/i, /YandexBot/i, /DuckDuckBot/i, /Slurp/i, /facebookexternalhit/i, /Twitterbot/i, /LinkedInBot/i, /Applebot/i, /AdsBot-Google/i, /Mediapartners-Google/i, /APIs-Google/i, /bytedance/i, /PetalBot/i, /SemrushBot/i, /AhrefsBot/i, /MJ12bot/i, /DotBot/i, /Acunetix/i, /PerplexityBot/i, /Perplexity-User/i],
            hr = sr(e => !!e && pr.some(t => e.match(t)), {
                cacheKey: e => e ? ? "unknown",
                cache: or(100)
            });
        var fr = n(1554),
            mr = n(6718),
            vr = n.n(mr);
        class gr extends Error {
            constructor(...e) {
                super(...e), this.message = "Excessive Stacktrace: May indicate infinite loop forming"
            }
        }
        const yr = (e, t) => {
                const n = function(e) {
                    if (t = e, "string" != typeof(t ? .stack || t ? .stacktrace || t ? .["opera#sourceloc"]) || t.stack === `${t.name}: ${t.message}`) return null;
                    var t;
                    try {
                        const t = vr().parse(e).reduce((e, t) => {
                            const n = function({
                                functionName: e,
                                lineNumber: t,
                                columnNumber: n
                            }) {
                                const r = /^global code$/i.test((o = e) || "") ? "global code" : o;
                                var o;
                                return {
                                    file: `https://cdn.shopify.com/cdn/wpm/${er}`,
                                    method: r,
                                    lineNumber: t,
                                    columnNumber: n
                                }
                            }(t);
                            try {
                                return "{}" === JSON.stringify(n) ? e : e.concat(n)
                            } catch (r) {
                                return e
                            }
                        }, []);
                        return {
                            errorClass: e ? .name,
                            message: e ? .message,
                            stacktrace: t,
                            type: "browserjs"
                        }
                    } catch (n) {
                        return null
                    }
                }(e);
                if (n) return n;
                const r = function(e, t) {
                    let n = "";
                    const r = {
                            lineNumber: "1",
                            columnNumber: "1",
                            method: t,
                            file: `https://cdn.shopify.com/cdn/wpm/${er}`
                        },
                        o = e.stackTrace || e.stack || e.description;
                    try {
                        if (o) {
                            n = e.stack.split("\n")[0];
                            const t = e.stack.match(/([0-9]+):([0-9]+)/);
                            if (t && t.length > 2 && (r.lineNumber = t[1], r.columnNumber = t[2], parseInt(r.lineNumber, 10) > 1e5)) throw new gr
                        }
                        return {
                            errorClass: e ? .name || n,
                            message: e ? .message || n,
                            stacktrace: [r],
                            type: "browserjs"
                        }
                    } catch (i) {
                        return null
                    }
                }(e, t);
                return r || {
                    errorClass: e ? .name,
                    message: e ? .message,
                    stacktrace: [],
                    type: "browserjs"
                }
            },
            br = ["number", "boolean", "symbol"],
            wr = (e, {
                context: t
            }) => {
                const n = "v1/" + (t ? `${t}/` : "");
                return null == e || br.includes(typeof e) || Array.isArray(e) ? `${n}UnknownError` : "string" == typeof e ? `${n}${e}` : "groupingHash" in e && "string" == typeof e.groupingHash ? `${n}${e.groupingHash}` : `${n}${"Error"!==e.name&&e.name?e.name:e.message}`
            };
        class _r extends Error {
            constructor(...e) {
                super(...e), Error.captureStackTrace && Error.captureStackTrace(this, _r)
            }
        }
        const xr = {
                severity: "error",
                context: "",
                unhandled: !0,
                library: "browser",
                surface: y.Unknown
            },
            Ir = ur(),
            kr = function({
                sampler: e = Ir
            } = {}) {
                const t = {
                    metadata: {
                        shopId: -1,
                        surface: y.NotAvailable,
                        browserTarget: x.NotAvailable,
                        shopDomain: "n/a"
                    },
                    notify: (n, r) => {
                        try {
                            if ("metric" === r ? .type || !0 === n ? .metric) return;
                            const o = r ? .userAgent || self.navigator ? .userAgent;
                            if (hr(o)) return;
                            const i = r ? .options ? .sampleRate;
                            if (void 0 !== i && !e.includes(wr(n, r ? ? {}), i)) return;
                            const s = { ...xr,
                                ...r,
                                ...t.metadata,
                                shopUrl: self.location.href
                            };
                            if (s.browserTarget === x.NotAvailable || s.browserTarget === x.Unknown || s.surface === y.NotAvailable || s.surface === y.Unknown || !Er(s.shopUrl)) return void(console ? .error && console.error(n));
                            const a = function(e, t) {
                                const {
                                    userAgent: n,
                                    context: r,
                                    severity: o,
                                    unhandled: i,
                                    library: s,
                                    hashVersionSandbox: a,
                                    sandboxUrl: c,
                                    pixelId: u,
                                    pixelType: d,
                                    runtimeContext: l,
                                    shopId: p,
                                    initConfig: h,
                                    notes: f,
                                    surface: m,
                                    shopDomain: v,
                                    browserTarget: g,
                                    shopUrl: y
                                } = t, {
                                    device: b,
                                    os: w,
                                    browser: _,
                                    engine: x
                                } = function(t) {
                                    try {
                                        return new fr.UAParser(t).getResult()
                                    } catch (e) {
                                        return {
                                            ua: "",
                                            browser: {
                                                name: "",
                                                version: "",
                                                major: ""
                                            },
                                            engine: {
                                                name: "",
                                                version: ""
                                            },
                                            os: {
                                                name: "",
                                                version: ""
                                            },
                                            device: {
                                                model: "",
                                                type: "",
                                                vendor: ""
                                            },
                                            cpu: {
                                                architecture: ""
                                            }
                                        }
                                    }
                                }(n || self.navigator ? .userAgent), I = yr(e, r);
                                return {
                                    payload_version: 5,
                                    notifier: {
                                        name: "web-pixel-manager",
                                        version: Zn,
                                        url: "-"
                                    },
                                    events: [{
                                        exceptions: [I],
                                        context: r ? `v1/${r}` : void 0,
                                        severity: o,
                                        unhandled: i,
                                        app: {
                                            version: Zn
                                        },
                                        device: {
                                            manufacturer: b.vendor,
                                            model: b.model,
                                            osName: w.name,
                                            osVersion: w.version,
                                            browserName: _.name,
                                            browserVersion: _.version
                                        },
                                        request: {
                                            url: y,
                                            referrer: self.document ? .referrer
                                        },
                                        metaData: {
                                            app: {
                                                surface: m,
                                                library: s,
                                                build_target: Qn,
                                                env: Gn,
                                                hash_version_sandbox: a || "N/A",
                                                sandbox_url: c || "N/A"
                                            },
                                            device: {
                                                user_agent: n || self.navigator ? .userAgent,
                                                rendering_engine_name: x.name,
                                                rendering_engine_version: x.version,
                                                browser_target: g || "N/A",
                                                deploy_phase: Gn
                                            },
                                            request: {
                                                shop_id: p,
                                                shop_domain: v || "N/A",
                                                shop_url: y,
                                                pixel_id: u,
                                                pixel_type: d,
                                                runtime_context: l
                                            },
                                            "Additional Notes": {
                                                init_config: JSON.stringify(h),
                                                notes: f
                                            },
                                            error_source: {
                                                shop_id: p
                                            },
                                            custom: {
                                                slice_name: "signals",
                                                slice_id: "S-27053f",
                                                observe_grouping_key: wr(e, t)
                                            }
                                        }
                                    }]
                                }
                            }(n, s);
                            fetch("https://error-analytics-production.shopifysvc.com", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Bugsnag-Api-Key": "bcbc9f6762da195561967577c2d74ff8",
                                    "Bugsnag-Payload-Version": "5"
                                },
                                body: JSON.stringify(a)
                            }).catch(() => {})
                        } catch (o) {}
                    }
                };
                return t
            }(),
            Er = e => {
                try {
                    const t = new URL(e);
                    return Boolean(t.protocol.startsWith("http") && t.host)
                } catch {
                    return !1
                }
            },
            Sr = new Set,
            Pr = e => (Sr.add(e), () => {
                Sr.delete(e)
            });

        function Tr(e) {
            Sr.forEach(t => {
                try {
                    t(e)
                } catch (n) {
                    kr.notify(n, {
                        context: "onConsentCollected/callEachCallback",
                        unhandled: !1
                    })
                }
            })
        }

        function Ar(e) {
            Tr(e)
        }
        let Cr = !1;
        const Or = ["analytics", "preferences", "marketing", "sale_of_data"];

        function Nr(e, t) {
            return e ? !t || Object.keys(e).every(n => !e[n] || t[n]) : it()
        }

        function Rr(e) {
            const {
                promise: t,
                resolve: n
            } = nr(), r = {
                analytics: Et(),
                marketing: kt(),
                preferences: St(),
                sale_of_data: Pt()
            };
            if (Nr(e, r)) return n(!0), t;
            const o = Pr(t => {
                const r = t.detail;
                Nr(e, {
                    analytics: !0 === r ? .analyticsAllowed,
                    marketing: !0 === r ? .marketingAllowed,
                    preferences: !0 === r ? .preferencesAllowed,
                    sale_of_data: !0 === r ? .saleOfDataAllowed
                }) && (o(), n(!0))
            });
            return t
        }
        const jr = {},
            Ur = {
                "pixel:register": {
                    start: {
                        name: "pixel:register:started",
                        params: {
                            pixelId: "",
                            source: ""
                        }
                    },
                    end: {
                        name: "pixel:register:completed",
                        params: {
                            pixelId: "",
                            source: ""
                        }
                    }
                },
                "page:session": {
                    start: {
                        name: "start",
                        params: jr
                    },
                    end: {
                        name: "page:unload",
                        params: jr
                    }
                },
                completed: {
                    start: {
                        name: "start",
                        params: jr
                    },
                    end: {
                        name: "pixels:resolved",
                        params: jr
                    }
                }
            };

        function Dr(e, t = jr) {
            const n = $r(e, "end", t),
                r = function(e, t) {
                    try {
                        const n = Lr(e, "start", t),
                            r = Lr(e, "end", t),
                            o = function(e, t) {
                                return qr(e, t)
                            }(e, t),
                            i = self.performance.measure(o, n, r);
                        return { ...i,
                            duration: Math.round(i.duration),
                            startTime: Math.round(i.startTime)
                        }
                    } catch (n) {
                        return null
                    }
                }(e, t);
            return {
                mark: n,
                measurement: r
            }
        }

        function Mr() {
            const [e] = window.performance ? .getEntriesByType("navigation") || [];
            return e && function(e) {
                return "type" in e
            }(e) ? e : void 0
        }

        function $r(e, t, n) {
            try {
                const r = Lr(e, t, n);
                return self.performance.mark(r), {
                    name: r,
                    params: n
                }
            } catch (r) {
                return {
                    name: null,
                    params: n
                }
            }
        }

        function Lr(e, t, n) {
            return qr(Ur[e][t].name, n)
        }

        function qr(e, t = {}) {
            const n = ["wpm", e];
            return Object.keys(t).forEach(e => {
                const r = t[e];
                r && n.push(r)
            }), n.join(":")
        }
        const Br = sr((e = "") => {
                const t = e.indexOf("=");
                return -1 === t ? [e.trim(), void 0] : [e.slice(0, t).trim(), e.slice(t + 1).trim()]
            }, {
                cache: or(100),
                cacheKey: (e = "") => e
            }),
            Vr = sr((e = "") => e.split(";").reduce((e, t) => {
                const [n, r] = Br(t);
                if (n) try {
                    e[decodeURIComponent(n)] = decodeURIComponent(r ? ? "")
                } catch {
                    e[n] = r ? ? ""
                }
                return e
            }, Object.create(null)), {
                cache: or(50),
                cacheKey: (e = "") => e
            }),
            zr = "_shopify_y",
            Fr = () => {
                try {
                    return document.cookie
                } catch {
                    return
                }
            },
            Hr = e => {
                try {
                    document.cookie = e
                } catch {}
            },
            Wr = (e, t, n = {}) => {
                let r = `${encodeURIComponent(e)}=${encodeURIComponent(t)}`;
                "number" == typeof n.maxAgeMs && (r += `; expires=${new Date((new Date).getTime()+n.maxAgeMs).toUTCString()}`), n.path && (r += `; path=${n.path}`), n.domain && (r += `; domain=${n.domain}`), r += `; SameSite=${n.sameSite??"Lax"}`, n.secure && (r += "; secure"), Hr(r)
            },
            Kr = e => {
                try {
                    if ((e === zr || "_shopify_s" === e) && "1" === Mr() ? .serverTiming ? .find(({
                            name: e
                        }) => "_cta" === e) ? .description) return e === zr ? xt({
                        generateFallback: !1,
                        tag: "wpm_cookie_read"
                    }) : It({
                        generateFallback: !1,
                        tag: "wpm_cookie_read"
                    })
                } catch {}
                try {
                    const t = Fr();
                    return "string" == typeof t ? Vr(t)[e] : void 0
                } catch {
                    return
                }
            },
            Yr = "_shopify_test";

        function Jr(e) {
            Hr(`${Yr}=1; path=/; domain=${e}`)
        }

        function Xr(e) {
            Hr(`${Yr}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${e}`)
        }

        function Gr(e) {
            return e ? e.split(".").reverse().reduce((e, t) => {
                const n = e[e.length - 1];
                return e.push(n ? `${t}.${n}` : t), e
            }, []) : []
        }

        function Qr() {
            return window ? .location ? .hostname || ""
        }
        const Zr = sr(() => {
            const e = [];
            for (const t of Gr(Qr())) Jr(t), Kr(Yr) || e.push(t), Xr(t);
            return e
        }, {
            cacheKey: () => Qr()
        });

        function eo() {
            try {
                const e = Qr();
                if (!e) return;
                const t = new Set(Zr());
                return Gr(e).find(e => !t.has(e))
            } catch {
                return
            }
        }
        const to = {
                uniqueToken: "_shopify_y",
                visitToken: "_shopify_s"
            },
            no = {
                uniqueToken: "trackingUnique",
                visitToken: "trackingVisit"
            };

        function ro() {
            return {
                read: e => window.ShopPay ? .[no[e]] || void 0
            }
        }
        const oo = ro(),
            io = ro();

        function so(e, t) {
            if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
            return e
        }
        var ao = 0;

        function co(e) {
            return "__private_" + ao++ + "_" + e
        }

        function uo(e) {
            return Object.entries(e).map(([e, t]) => ({
                key: e,
                value: {
                    stringValue: String(t)
                }
            }))
        }

        function lo(e) {
            if (Array.isArray(e)) return {
                arrayValue: {
                    values: e.map(e => lo(e))
                }
            };
            switch (typeof e) {
                case "boolean":
                    return {
                        boolValue: Boolean(e)
                    };
                case "number":
                    return {
                        doubleValue: Number(e)
                    };
                default:
                    return {
                        stringValue: String(e)
                    }
            }
        }
        const po = function() {
            const e = [0];
            for (let t = 0; t < 12; t++) {
                const n = Math.floor(5 * 2 ** t);
                e.push(n)
            }
            return e
        }();
        var ho = co("exporter"),
            fo = co("attributes"),
            mo = co("metrics"),
            vo = co("logs");
        class go {
            constructor({
                exporter: e,
                attributes: t
            }) {
                Object.defineProperty(this, ho, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, fo, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, mo, {
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, vo, {
                    writable: !0,
                    value: []
                }), so(this, ho)[ho] = e, so(this, fo)[fo] = null != t ? t : {}
            }
            addAttributes(e) {
                so(this, fo)[fo] = { ...so(this, fo)[fo],
                    ...e
                }
            }
            histogram({
                name: e,
                value: t,
                unit: n,
                bounds: r,
                attributes: o,
                scale: i,
                requiresKeepalive: s
            }) {
                const a = 1e6 * Date.now();
                r ? so(this, mo)[mo].push({
                    name: e,
                    type: "histogram",
                    value: t,
                    unit: n,
                    timeUnixNano: a,
                    attributes: o,
                    bounds: r,
                    requiresKeepalive: s
                }) : so(this, mo)[mo].push({
                    name: e,
                    type: "exponential_histogram",
                    value: t,
                    unit: n,
                    timeUnixNano: a,
                    attributes: o,
                    scale: i,
                    requiresKeepalive: s
                })
            }
            counter({
                name: e,
                value: t,
                unit: n,
                attributes: r,
                requiresKeepalive: o
            }) {
                const i = 1e6 * Date.now();
                so(this, mo)[mo].push({
                    name: e,
                    type: "counter",
                    value: t,
                    unit: n,
                    timeUnixNano: i,
                    attributes: r,
                    requiresKeepalive: o
                })
            }
            gauge({
                name: e,
                value: t,
                unit: n,
                attributes: r,
                requiresKeepalive: o
            }) {
                const i = 1e6 * Date.now();
                so(this, mo)[mo].push({
                    name: e,
                    type: "gauge",
                    value: t,
                    unit: n,
                    timeUnixNano: i,
                    attributes: r,
                    requiresKeepalive: o
                })
            }
            log({
                body: e,
                attributes: t,
                requiresKeepalive: n
            }) {
                const r = 1e6 * Date.now();
                so(this, vo)[vo].push({
                    timeUnixNano: r,
                    body: e,
                    attributes: t,
                    requiresKeepalive: n
                })
            }
            async exportMetrics() {
                so(this, mo)[mo].forEach(e => {
                    e.attributes = { ...so(this, fo)[fo],
                        ...e.attributes
                    }
                });
                const e = so(this, mo)[mo];
                so(this, mo)[mo] = [], await this.exportByKeepalive(e, (e, t) => so(this, ho)[ho].exportMetrics(this.aggregateMetrics(e), t))
            }
            async exportLogs() {
                const e = so(this, vo)[vo];
                so(this, vo)[vo] = [], await this.exportByKeepalive(e, (e, t) => so(this, ho)[ho].exportLogs(this.formatLogs(e), t))
            }
            aggregateMetrics(e) {
                const t = {};
                return e.forEach(e => {
                    switch (e.type) {
                        case "histogram":
                            ! function(e, t) {
                                var n;
                                const {
                                    name: r,
                                    value: o,
                                    unit: i,
                                    timeUnixNano: s,
                                    attributes: a
                                } = t, c = null !== (n = t.bounds) && void 0 !== n ? n : po, u = new Array(c.length + 1).fill(0);
                                e[r] || = {
                                    name: r,
                                    unit: i || "1",
                                    histogram: {
                                        aggregationTemporality: 1,
                                        dataPoints: []
                                    }
                                };
                                for (let d = 0; d < u.length; d++) {
                                    const e = c[d];
                                    if (void 0 === e) u[d] = 1;
                                    else if (o <= e) {
                                        u[d] = 1;
                                        break
                                    }
                                }
                                e[r].histogram.dataPoints.push({
                                    startTimeUnixNano: s,
                                    timeUnixNano: s,
                                    count: 1,
                                    sum: o,
                                    min: o,
                                    max: o,
                                    bucketCounts: u,
                                    explicitBounds: c,
                                    attributes: uo(null != a ? a : {})
                                })
                            }(t, e);
                            break;
                        case "exponential_histogram":
                            ! function(e, t) {
                                const {
                                    name: n,
                                    value: r,
                                    unit: o,
                                    timeUnixNano: i,
                                    attributes: s,
                                    scale: a
                                } = t;
                                e[n] || = {
                                    name: n,
                                    unit: o || "1",
                                    exponentialHistogram: {
                                        aggregationTemporality: 1,
                                        dataPoints: []
                                    }
                                };
                                const c = r <= 0 ? 0 : r,
                                    u = a || 3,
                                    d = 2 ** u / Math.log(2),
                                    l = Math.ceil(Math.log(r) * d) - 1,
                                    p = r <= 0 ? 1 : 0,
                                    h = {
                                        offset: r > 0 ? l : 0,
                                        bucketCounts: r > 0 ? [1] : []
                                    };
                                e[n].exponentialHistogram.dataPoints.push({
                                    attributes: uo(null != s ? s : {}),
                                    startTimeUnixNano: i,
                                    timeUnixNano: i,
                                    count: 1,
                                    sum: c,
                                    scale: u,
                                    zeroCount: p,
                                    positive: h,
                                    negative: {
                                        offset: 0,
                                        bucketCounts: []
                                    },
                                    min: c,
                                    max: c,
                                    zeroThreshold: 0
                                })
                            }(t, e);
                            break;
                        case "counter":
                            ! function(e, t) {
                                const {
                                    name: n,
                                    value: r,
                                    unit: o,
                                    timeUnixNano: i,
                                    attributes: s
                                } = t;
                                e[n] || = {
                                    name: n,
                                    unit: o || "1",
                                    sum: {
                                        aggregationTemporality: 1,
                                        isMonotonic: !0,
                                        dataPoints: []
                                    }
                                }, e[n].sum.dataPoints.push({
                                    startTimeUnixNano: i,
                                    timeUnixNano: i,
                                    asDouble: r,
                                    attributes: uo(null != s ? s : {})
                                })
                            }(t, e);
                            break;
                        case "gauge":
                            ! function(e, t) {
                                const {
                                    name: n,
                                    value: r,
                                    unit: o,
                                    timeUnixNano: i,
                                    attributes: s
                                } = t;
                                e[n] || = {
                                    name: n,
                                    unit: o || "1",
                                    gauge: {
                                        dataPoints: []
                                    }
                                }, e[n].gauge.dataPoints.push({
                                    startTimeUnixNano: i,
                                    timeUnixNano: i,
                                    asDouble: r,
                                    attributes: uo(null != s ? s : {})
                                })
                            }(t, e)
                    }
                }), Object.values(t)
            }
            async exportByKeepalive(e, t) {
                if (0 === e.length) return;
                const n = [],
                    r = [];
                e.forEach(e => {
                    var t;
                    null === (t = e.requiresKeepalive) || void 0 === t || t ? n.push(e) : r.push(e)
                });
                const o = [n.length > 0 ? t(n, {
                    keepalive: !0
                }) : void 0, r.length > 0 ? t(r, {
                    keepalive: !1
                }) : void 0].filter(e => void 0 !== e);
                await Promise.all(o)
            }
            formatLogs(e) {
                return e.map(e => {
                    const t = {
                        timeUnixNano: e.timeUnixNano,
                        observedTimeUnixNano: e.timeUnixNano,
                        attributes: (n = { ...so(this, fo)[fo],
                            ...e.attributes
                        }, Object.entries(n).map(([e, t]) => ({
                            key: e,
                            value: lo(t)
                        })))
                    };
                    var n;
                    return e.body && (t.body = {
                        stringValue: e.body
                    }), t
                })
            }
        }
        var yo = co("url"),
            bo = co("serviceName"),
            wo = co("logger"),
            _o = co("fetchFn"),
            xo = co("maxPayloadSizeBytes");
        class Io {
            constructor(e, t, n) {
                var r;
                Object.defineProperty(this, yo, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, bo, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, wo, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, _o, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, xo, {
                    writable: !0,
                    value: void 0
                }), so(this, yo)[yo] = e.replace(/\/v1\/(logs|metrics|traces)\/?$/, ""), so(this, bo)[bo] = t, so(this, wo)[wo] = null == n ? void 0 : n.logger, so(this, _o)[_o] = null == n ? void 0 : n.fetchFn, so(this, xo)[xo] = null !== (r = null == n ? void 0 : n.maxPayloadSizeBytes) && void 0 !== r ? r : 51200
            }
            async exportMetrics(e, t) {
                var n;
                const r = null === (n = null == t ? void 0 : t.keepalive) || void 0 === n || n;
                await this.exportBatches("/v1/metrics", [...e], e => ({
                    resourceMetrics: [{
                        resource: {
                            attributes: [{
                                key: "service.name",
                                value: {
                                    stringValue: so(this, bo)[bo]
                                }
                            }]
                        },
                        scopeMetrics: [{
                            scope: {
                                name: "open-telemetry-mini-client",
                                version: "1.1.0",
                                attributes: []
                            },
                            metrics: e
                        }]
                    }]
                }), r)
            }
            async exportLogs(e, t) {
                var n;
                const r = null === (n = null == t ? void 0 : t.keepalive) || void 0 === n || n;
                await this.exportBatches("/v1/logs", [...e], e => ({
                    resourceLogs: [{
                        resource: {
                            attributes: [{
                                key: "service.name",
                                value: {
                                    stringValue: so(this, bo)[bo]
                                }
                            }]
                        },
                        scopeLogs: [{
                            scope: {
                                name: "open-telemetry-mini-client",
                                version: "1.1.0",
                                attributes: []
                            },
                            logRecords: e
                        }]
                    }]
                }), r)
            }
            async exportTo(e, t, n) {
                var r;
                const o = JSON.stringify(e),
                    i = (new TextEncoder).encode(o).length;
                if (i > so(this, xo)[xo]) throw new Eo(`Payload size ${i} exceeds ${so(this,xo)[xo]} bytes`);
                const s = await this.exporterFetch()(`${so(this,yo)[yo]}${t}`, {
                    method: "POST",
                    keepalive: n,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: o
                });
                if (null === (r = so(this, wo)[wo]) || void 0 === r || r.log({
                        status: s.status
                    }), !s.ok) {
                    if (400 === s.status) {
                        const e = await s.text();
                        throw new ko(`Invalid OpenTelemetry Data: ${e}`)
                    }
                    if (429 === s.status || 503 === s.status) {
                        const t = await s.text(),
                            n = s.headers.get("Retry-After"),
                            r = n ? {
                                seconds: Number(n)
                            } : void 0;
                        throw new ko("Server did not accept data", {
                            errorData: t,
                            retryAfter: r,
                            body: e
                        })
                    }
                    if (401 === s.status || 403 === s.status) {
                        const t = await s.text();
                        throw new So(`Authentication failed: ${s.status} ${401===s.status?"Unauthorized":"Forbidden"}`, {
                            errorData: t,
                            body: e
                        })
                    }
                    throw new ko(`Server responded with ${s.status}`)
                }
            }
            exporterFetch() {
                return so(this, _o)[_o] || fetch
            }
            async exportBatches(e, t, n, r) {
                let o = t.length;
                for (; t.length > 0;) try {
                    const i = t.slice(0, o);
                    await this.exportTo(n(i), e, r), t.splice(0, o)
                } catch (i) {
                    if (!(i instanceof Eo && o > 1)) throw i;
                    o = Math.ceil(o / 2)
                }
            }
        }
        class ko extends Error {
            constructor(e, t) {
                super(e), this.metadata = void 0, this.name = "OpenTelemetryClientError", this.metadata = t
            }
        }
        class Eo extends Error {
            constructor(...e) {
                super(...e), this.name = "PayloadTooLargeError"
            }
        }
        class So extends Error {
            constructor(e, t) {
                super(e), this.name = "AuthenticationFailedError", this.metadata = void 0, this.name = "AuthenticationFailedError", this.metadata = t
            }
        }
        let Po = function(e) {
            return e.Histogram = "histogram", e.Counter = "counter", e.Gauge = "gauge", e.ExponentialHistogram = "exponential_histogram", e
        }({});
        var To = yn("client"),
            Ao = yn("metrics"),
            Co = yn("prefix"),
            Oo = yn("defaultAttributes");
        class No {
            constructor({
                client: e,
                metrics: t,
                prefix: n,
                defaultAttributes: r
            }) {
                Object.defineProperty(this, To, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Ao, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Co, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Oo, {
                    writable: !0,
                    value: void 0
                }), vn(this, To)[To] = e, vn(this, Ao)[Ao] = t, vn(this, Co)[Co] = n ? ? "", vn(this, Oo)[Oo] = r ? ? {}
            }
            record(e, t, ...n) {
                const r = vn(this, Ao)[Ao][e],
                    o = String(e),
                    i = n[0] ? ? {},
                    s = {
                        name: vn(this, Co)[Co] ? `${vn(this,Co)[Co]}_${o}` : o,
                        value: t,
                        unit: r.unit,
                        attributes: { ...vn(this, Oo)[Oo],
                            ...i
                        }
                    },
                    a = r.type;
                switch (a) {
                    case Po.Counter:
                    case Po.Gauge:
                        vn(this, To)[To][a](s);
                        break;
                    case Po.Histogram:
                        vn(this, To)[To].histogram({ ...s,
                            bounds: r.bounds
                        });
                        break;
                    case Po.ExponentialHistogram:
                        vn(this, To)[To].histogram({ ...s,
                            scale: r.scale
                        });
                        break;
                    default:
                        throw new g(`Unknown metric type: ${a}`)
                }
                vn(this, To)[To].exportMetrics().catch(() => {})
            }
            log(e, t) {
                vn(this, To)[To].log({
                    body: e,
                    attributes: { ...vn(this, Oo)[Oo],
                        ...t
                    }
                }), vn(this, To)[To].exportLogs().catch(() => {})
            }
        }
        var Ro = yn("client");
        class jo {
            constructor({
                client: e,
                throttleDelay: t
            }) {
                Object.defineProperty(this, Ro, {
                    writable: !0,
                    value: void 0
                }), vn(this, Ro)[Ro] = t ? function(e, t) {
                    return {
                        counter: e.counter.bind(e),
                        gauge: e.gauge.bind(e),
                        histogram: e.histogram.bind(e),
                        log: e.log.bind(e),
                        exportMetrics: dn(() => e.exportMetrics().catch(() => {}), t),
                        exportLogs: dn(() => e.exportLogs().catch(() => {}), t)
                    }
                }(e, t) : e
            }
            createClient(e) {
                return new No({ ...e,
                    client: vn(this, Ro)[Ro]
                })
            }
        }
        var Uo = yn("prefix");
        class Do {
            constructor(e = "OpenTelemetry") {
                Object.defineProperty(this, Uo, {
                    writable: !0,
                    value: void 0
                }), vn(this, Uo)[Uo] = e
            }
            exportMetrics(e) {
                return console.log(`[${vn(this,Uo)[Uo]}] Metrics:`, e), Promise.resolve()
            }
            exportLogs(e) {
                return console.log(`[${vn(this,Uo)[Uo]}] Logs:`, e), Promise.resolve()
            }
        }
        const Mo = {
                feature_usage: {
                    unit: "1",
                    type: Po.Counter
                }
            },
            $o = ["platform", "platformVersion", "architecture", "model", "uaFullVersion", "bitness", "fullVersionList", "wow64"];
        var Lo = yn("attrs"),
            qo = yn("prefetchStarted"),
            Bo = yn("buildBaseAttributes"),
            Vo = yn("requestHighEntropyValues");
        class zo {
            constructor() {
                Object.defineProperty(this, Vo, {
                    value: Ho
                }), Object.defineProperty(this, Bo, {
                    value: Fo
                }), Object.defineProperty(this, Lo, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, qo, {
                    writable: !0,
                    value: !1
                })
            }
            prefetch() {
                vn(this, qo)[qo] || (vn(this, Lo)[Lo] ? ? = vn(this, Bo)[Bo](), vn(this, Lo)[Lo] && (vn(this, qo)[qo] = !0, vn(this, Vo)[Vo]()))
            }
            getAttributes() {
                return this.prefetch(), vn(this, Lo)[Lo]
            }
        }

        function Fo() {
            return Zt(() => {
                const e = self.navigator,
                    t = self.screen;
                return {
                    tzo: (new Date).getTimezoneOffset(),
                    mtp: e.maxTouchPoints,
                    sw: t.width,
                    sh: t.height,
                    scd: t.colorDepth
                }
            })
        }

        function Ho() {
            const e = Zt(() => self.navigator.userAgentData);
            e ? .getHighEntropyValues && Zt(() => e.getHighEntropyValues($o).then(e => {
                const t = Zt(() => JSON.stringify(e));
                void 0 !== t && vn(this, Lo)[Lo] && (vn(this, Lo)[Lo].uahe = t)
            }).catch(() => {}))
        }
        const Wo = {
            test: "edge_test_click/1.0",
            load: "web_pixels_manager_load/3.3",
            init: "web_pixels_manager_init/3.2",
            register: "web_pixels_manager_pixel_register/3.8",
            subscriberEventEmit: "web_pixels_manager_subscriber_event_emit/4.1",
            eventPublish: "web_pixels_manager_event_publish/1.7",
            unload: "web_pixels_manager_unload/1.2",
            visitor: "web_pixels_manager_visitor/1.0",
            subscriberEventEmitDom: "web_pixels_manager_subscriber_event_emit_dom/2.0",
            subscriberEventEmitPrivacy: "web_pixels_manager_subscriber_event_emit_privacy/1.0",
            helperLoad: "web_pixels_helper_load/1.0",
            helperWindowButtonClick: "web_pixels_helper_window_button_click/1.0",
            buyerEventSample: "web_pixels_manager_buyer_event_sample/1.0",
            firstPartyTracking: "storefront_customer_tracking/4.27",
            webPixelsStorefrontCustomerTracking: "web_pixels_manager_storefront_customer_tracking/1.0",
            webPixelsPublicEventPayloadTransform: "web_pixels_public_event_payload_transform/1.0",
            webPixelsManagerSubscriberEventBlocked: "web_pixels_manager_subscriber_event_blocked/1.0"
        };

        function Ko(e, t) {
            return {
                schemaId: Wo[e],
                payload: t
            }
        }
        let Yo;

        function Jo(e, t = !1) {
            Yo ? .produce(e.schemaId, e.payload, {
                flush: t
            })
        }

        function Xo(e, t, n = !1) {
            Jo(Ko(e, t), n)
        }
        var Go = yn("delayStrategy"),
            Qo = yn("onError"),
            Zo = yn("buffer"),
            ei = yn("timeoutId"),
            ti = yn("batchIndex"),
            ni = yn("onPageHide"),
            ri = yn("onVisibilityChange"),
            oi = yn("flush"),
            ii = yn("sendChunked"),
            si = yn("clearBatchTimeout");
        class ai {
            constructor(e) {
                Object.defineProperty(this, si, {
                    value: di
                }), Object.defineProperty(this, ii, {
                    value: ui
                }), Object.defineProperty(this, oi, {
                    value: ci
                }), Object.defineProperty(this, Go, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Qo, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Zo, {
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, ei, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ti, {
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, ni, {
                    writable: !0,
                    value: () => {
                        vn(this, oi)[oi](!0)
                    }
                }), Object.defineProperty(this, ri, {
                    writable: !0,
                    value: () => {
                        "hidden" === document.visibilityState && vn(this, oi)[oi](!1)
                    }
                }), vn(this, Go)[Go] = e.delayStrategy ? ? (e => 0 === e ? 0 : 50), vn(this, Qo)[Qo] = e.onError, window.addEventListener("pagehide", vn(this, ni)[ni]), document.addEventListener("visibilitychange", vn(this, ri)[ri])
            }
            destroy() {
                window.removeEventListener("pagehide", vn(this, ni)[ni]), document.removeEventListener("visibilitychange", vn(this, ri)[ri]), vn(this, si)[si]()
            }
            flush() {
                vn(this, oi)[oi](!1)
            }
            get pendingEvents() {
                return vn(this, Zo)[Zo]
            }
            get maxBatchBytes() {
                return 1 / 0
            }
            enqueue(e, t) {
                if (vn(this, Zo)[Zo].push(e), t || "hidden" === document.visibilityState) this.flush();
                else if (void 0 === vn(this, ei)[ei]) {
                    const e = vn(this, Go)[Go](vn(this, ti)[ti]);
                    vn(this, ei)[ei] = setTimeout(() => this.flush(), e)
                }
            }
        }

        function ci(e) {
            vn(this, si)[si](), 0 !== vn(this, Zo)[Zo].length && (vn(this, ti)[ti]++, vn(this, ii)[ii](vn(this, Zo)[Zo].splice(0), e))
        }

        function ui(e, t) {
            let n;
            try {
                n = this.serialize(e)
            } catch (s) {
                return void vn(this, Qo)[Qo] ? .(s)
            }
            if (r = n, o = this.maxBatchBytes, 3 * r.length <= o || !(new Blob([r]).size > o) || 1 === e.length) {
                try {
                    this.send(n, {
                        isFinal: t
                    })
                } catch (s) {
                    vn(this, Qo)[Qo] ? .(s)
                }
                return
            }
            var r, o;
            const i = Math.ceil(e.length / 2);
            vn(this, ii)[ii](e.slice(0, i), t), vn(this, ii)[ii](e.slice(i), t)
        }

        function di() {
            void 0 !== vn(this, ei)[ei] && (clearTimeout(vn(this, ei)[ei]), vn(this, ei)[ei] = void 0)
        }
        const li = Zt(() => {
            const e = "undefined" == typeof window ? void 0 : window.navigator.sendBeacon;
            return "function" == typeof e ? e.bind(window.navigator) : () => !1
        }, () => !1);

        function pi(e) {
            return e.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").toLowerCase()
        }

        function hi(e) {
            return null !== e && "object" == typeof e && !Array.isArray(e) && "[object Object]" === Object.prototype.toString.call(e)
        }

        function fi(e, t = new WeakMap) {
            if (!hi(e)) return e;
            const n = t.get(e);
            if (n) return n;
            const r = {};
            t.set(e, r);
            for (const [o, i] of Object.entries(e)) {
                const e = pi(o);
                Array.isArray(i) ? r[e] = i.map(e => fi(e, t)) : hi(i) ? r[e] = fi(i, t) : r[e] = i
            }
            return r
        }

        function mi(e, t) {
            return function(e) {
                if ("function" != typeof e) return e;
                try {
                    return e()
                } catch {
                    return
                }
            }(t)
        }
        var vi = yn("endpoint");
        class gi extends ai {
            constructor(e) {
                super(e), Object.defineProperty(this, vi, {
                    writable: !0,
                    value: void 0
                }), vn(this, vi)[vi] = e.endpoint
            }
            setEndpoint(e) {
                vn(this, vi)[vi] = e
            }
            produce(e, t, {
                flush: n,
                convertEventCase: r = !0
            } = {}) {
                const o = t,
                    i = r ? fi(o) : o;
                vn(this, vi)[vi] ? this.enqueue({
                    schema_id: e,
                    payload: i,
                    metadata: {
                        event_created_at_ms: (new Date).getTime()
                    }
                }, n) : console.log("[MonorailClient]", e, i)
            }
            get maxBatchBytes() {
                return 6e4
            }
            serialize(e) {
                const t = {
                    events: e,
                    metadata: {
                        event_sent_at_ms: (new Date).getTime()
                    }
                };
                return JSON.stringify(t, mi)
            }
            send(e, {
                isFinal: t
            }) {
                const n = vn(this, vi)[vi];
                if (!n) return;
                if (Zt(() => li(n, e), !1) || t) return;
                const r = new XMLHttpRequest;
                r.open("POST", n, !0), r.setRequestHeader("Content-Type", "text/plain"), r.send(e)
            }
        }

        function yi({
            storefrontBaseUrl: e,
            region: t,
            endpoint: n
        }) {
            return n || `${function(e,t){const n={global:"https://monorail-edge.shopifysvc.com",wellKnown:`${e}/.well-known/shopify/monorail`,staging:"https://monorail-edge-staging.shopifysvc.com",test:"https://localhost"},r=t||"wellKnown";return r in n?n[r]:n.wellKnown}(Un(e),t)}/unstable/produce_batch`
        }

        function bi(e) {
            const t = [0];
            for (const n of e) {
                let e = Number.parseInt(n, 16);
                for (let n = 0; n < t.length; n++) {
                    const r = 16 * t[n] + e;
                    t[n] = r % 10, e = Math.floor(r / 10)
                }
                for (; e > 0;) t.push(e % 10), e = Math.floor(e / 10)
            }
            return t.reverse().join("")
        }

        function wi() {
            return `${(new Date).getTime().toString()}${Math.floor(1e6*Math.random()).toString().padStart(6,"0")}`
        }

        function _i(e) {
            return void 0 === e ? {
                lowid: wi(),
                highid: wi()
            } : {
                lowid: String(e)
            }
        }

        function xi(e) {
            const t = e.replace(/-/g, "");
            if (!/^[0-9a-f]{32}$/i.test(t)) throw new Error("Invalid UUID format");
            return {
                highid: bi(t.slice(0, 16)),
                lowid: bi(t.slice(16))
            }
        }
        var Ii = yn("endpoint");
        class ki extends ai {
            constructor(e) {
                super(e), Object.defineProperty(this, Ii, {
                    writable: !0,
                    value: void 0
                }), vn(this, Ii)[Ii] = e.endpoint
            }
            produce(e, {
                flush: t
            } = {}) {
                this.enqueue(e, t)
            }
            get maxBatchBytes() {
                return 6e4
            }
            serialize(e) {
                const t = {
                    events: e
                };
                return JSON.stringify(t)
            }
            send(e, {
                isFinal: t
            }) {
                const n = vn(this, Ii)[Ii];
                if (Zt(() => li(n, e), !1) || t) return;
                const r = new XMLHttpRequest;
                r.open("POST", n, !0), r.setRequestHeader("Content-Type", "text/plain"), r.send(e)
            }
        }
        const Ei = [
            ["analyticsProcessingAllowed", "USER_CONSENT_TYPE_ANALYTICS"],
            ["marketingAllowed", "USER_CONSENT_TYPE_MARKETING"],
            ["preferencesProcessingAllowed", "USER_CONSENT_TYPE_PREFERENCES"],
            ["saleOfDataAllowed", "USER_CONSENT_TYPE_SALE_OF_DATA"]
        ];

        function Si(e) {
            return Ei.filter(([t]) => e[t]).map(([, e]) => ({
                consentType: e
            }))
        }

        function Pi(e) {
            switch (e) {
                case y.CheckoutOneShopApp:
                case y.CheckoutOneNativeShopApp:
                    return "shop-pay";
                case y.Shopify:
                case y.StorefrontRenderer:
                case y.CheckoutOne:
                case y.CheckoutOneSdk:
                case y.CustomerAccount:
                    return "storefront";
                case y.Unknown:
                case y.NotAvailable:
                default:
                    return "unspecified"
            }
        }
        const Ti = {
                "shop-pay": "EVENT_APP_SHOP_PAY",
                storefront: "EVENT_APP_STOREFRONT",
                unspecified: "EVENT_APP_UNSPECIFIED"
            },
            Ai = {
                "shop-pay": "DATA_ORIGINATOR_SHOPIFY",
                storefront: "DATA_ORIGINATOR_MERCHANT",
                unspecified: "DATA_ORIGINATOR_UNSPECIFIED"
            };

        function Ci(e) {
            return Ai[Pi(e)]
        }

        function Oi(e) {
            return `${Un(e)}/.well-known/shopify/fec/produce`
        }
        var Ni = yn("proto"),
            Ri = yn("context");
        class ji {
            constructor({
                storefrontBaseUrl: e,
                frontendEventCollectorEndpoint: t,
                onError: n,
                ...r
            }) {
                Object.defineProperty(this, Ni, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Ri, {
                    writable: !0,
                    value: void 0
                }), vn(this, Ni)[Ni] = new ki({
                    endpoint: t || Oi(e),
                    onError: n
                }), vn(this, Ri)[Ri] = r
            }
            produce(e, t = {}) {
                const {
                    consent: n
                } = vn(this, Ri)[Ri], r = n.trackingTokens.getUniqueToken(), {
                    clientMessageId: o,
                    userContext: i
                } = t, s = "apiClientId" in t ? t.apiClientId : vn(this, Ri)[Ri].apiClientId, a = i && "customerId" in i ? i.customerId : vn(this, Ri)[Ri].customerId;
                var c;
                vn(this, Ni)[Ni].produce({
                    source: (c = vn(this, Ri)[Ri].surface, Ti[Pi(c)]),
                    eventClass: "EVENT_CLASS_EVENT",
                    dataOriginator: Ci(vn(this, Ri)[Ri].surface),
                    user: {
                        type: "USER_TYPE_BUYER",
                        ...r && {
                            domainScopedBrowserId: {
                                value: r
                            }
                        },
                        ...i ? .email && {
                            email: {
                                address: i.email
                            }
                        },
                        ...i ? .phone && {
                            phone: {
                                number: i.phone
                            }
                        },
                        ...void 0 !== a && {
                            customer: {
                                id: _i(a)
                            }
                        }
                    },
                    shop: {
                        id: _i(vn(this, Ri)[Ri].shopId)
                    },
                    session: {
                        clientSessionToken: n.trackingTokens.getVisitToken()
                    },
                    ...vn(this, Ri)[Ri].httpRequestId && {
                        server: {
                            request: {
                                httpRequestId: vn(this, Ri)[Ri].httpRequestId
                            }
                        }
                    },
                    ...void 0 !== s && {
                        apiClient: {
                            id: _i(s)
                        }
                    },
                    userConsents: Si({
                        analyticsProcessingAllowed: n.analyticsProcessingAllowed(),
                        marketingAllowed: n.marketingAllowed(),
                        preferencesProcessingAllowed: n.preferencesProcessingAllowed(),
                        saleOfDataAllowed: n.saleOfDataAllowed()
                    }),
                    client: {
                        message: {
                            id: void 0 === o ? _i() : xi(o)
                        },
                        browser: {
                            href: vn(this, Ri)[Ri].pageUrl
                        },
                        tokens: {
                            pageViewToken: vn(this, Ri)[Ri].pageId
                        }
                    },
                    payload: e
                })
            }
        }
        let Ui;

        function Di() {
            return Ui || (Ui = function() {
                let e;
                try {
                    e = window.Shopify ? .evids ? window.Shopify ? .evids("session_started", {
                        analyticsFramework: "wpm"
                    }) : qt()
                } catch (t) {
                    e = qt()
                }
                return e
            }()), Ui
        }

        function Mi(e, t, n, r = !0) {
            try {
                const o = { ...r ? Object.getOwnPropertyDescriptor(e, t) : {},
                    ...n
                };
                return Object.defineProperty(e, t, o)
            } catch (o) {
                return e
            }
        }
        const $i = () => Kr("_shopify_y") ? ? "";

        function Li(e, t) {
            return t.reduce((t, n) => (n in e && (t[n] = e[n]), t), {})
        }
        class qi {
            constructor({
                onError: e
            } = {}) {
                this.trackingTokens = void 0, this.analyticsProcessingAllowed = Et, this.marketingAllowed = kt, this.preferencesProcessingAllowed = St, this.saleOfDataAllowed = Pt, this.onConsentCollected = Pr, this.trackingTokens = function(e, {
                    onError: t
                } = {}) {
                    function n(n, r) {
                        for (const i of e) {
                            let e;
                            try {
                                e = i.read(n, r)
                            } catch (o) {
                                t ? .(o);
                                continue
                            }
                            if ("string" == typeof e) return e
                        }
                        return r ? ? ""
                    }
                    return {
                        getUniqueToken: e => n("uniqueToken", e),
                        getVisitToken: e => n("visitToken", e),
                        dispose: () => {
                            for (const r of e) try {
                                r.dispose ? .()
                            } catch (n) {
                                t ? .(n)
                            }
                        }
                    }
                }([ro(), {
                    read: e => Kr(to[e]) || void 0
                }], {
                    onError: e
                })
            }
        }
        class Bi extends Set {
            constructor(e, t) {
                if (super(), Number.isFinite(e) && !Number.isInteger(e) || e <= 0) throw new Error("Invalid maxSize specified");
                this.maxSize = e, this.keep = t
            }
            add(e) {
                if ("oldest" === this.keep) this.size < this.maxSize && super.add(e);
                else if ("newest" === this.keep && (super.add(e), this.size > this.maxSize))
                    for (const t of this)
                        if (this.delete(t), this.size <= this.maxSize) break;
                return this
            }
        }
        const Vi = Symbol("eventBusReplay");
        class zi {
            constructor({
                bufferSize: e = 50,
                replayKeep: t = "oldest",
                subscribeAllKey: n,
                onSubscriberError: r
            } = {}) {
                this.channelSubscribers = new Map, this.bufferSize = e, this.replayKeep = t, this.subscribeAllKey = n, this.replayQueue = new Bi(e, t), this.onSubscriberError = r, this.middlewareChain = e => e()
            }
            use(...e) {
                return e.forEach(e => this.useMiddleware(e)), this
            }
            publish(e, t, n = {}) {
                if (this.subscribeAllKey && e === this.subscribeAllKey) throw new Error(`Cannot publish to ${String(e)}`);
                this.replayQueue.add({
                    name: e,
                    payload: t,
                    options: n
                });
                const r = (r, o) => {
                    this.processEvent(e, t, o, n, r)
                };
                return [this.channelSubscribers.get(e), this.subscribeAllKey ? this.channelSubscribers.get(this.subscribeAllKey) : void 0].filter(e => !!e).forEach(e => e.forEach(r)), !0
            }
            subscribe(e, t, n = {}) {
                const r = this.channelSubscribers.get(e) || new Map;
                return this.channelSubscribers.set(e, r.set(t, n)), this.replayQueue.forEach(({
                    name: r,
                    payload: o,
                    options: i
                }) => {
                    (e === r || this.subscribeAllKey && e === this.subscribeAllKey) && this.processEvent(r, o, t, { ...i,
                        [Vi]: !0
                    }, n)
                }), () => r.delete(t)
            }
            processEvent(e, t, n, r = {}, o = {}) {
                const i = (e = t) => {
                    n.call({}, e)
                };
                try {
                    this.middlewareChain(i, e, t, r, o)
                } catch (s) {
                    this.onSubscriberError ? this.onSubscriberError(s) : console ? .error(`Error in subscriber for event ${e}:`, s)
                }
            }
            useMiddleware(e) {
                const t = this.middlewareChain;
                this.middlewareChain = (n, r, o, ...i) => {
                    t((t = o) => {
                        let s = !1;
                        e((e = t) => {
                            s || (s = !0, n(e))
                        }, r, t, ...i), s = !0
                    }, r, o, ...i)
                }
            }
        }
        var Fi = (e => (e.Standard = "standard", e.Advanced = "advanced", e))(Fi || {});
        const Hi = "remote-ui::ready";

        function Wi(e, {
            terminate: t = !0,
            targetOrigin: n = "*"
        } = {}) {
            var r;
            if ("undefined" == typeof window) throw new Error("You can only run fromIframe() in a browser context, but no window was found.");
            const o = new WeakMap;
            let i;

            function s(t) {
                t.source === e.contentWindow && t.data === Hi && (window.removeEventListener("message", s), i())
            }
            null === (r = e.contentWindow) || void 0 === r || r.postMessage(Hi, n);
            const a = new Promise(e => {
                i = e, window.addEventListener("message", s)
            });
            return {
                async postMessage(t, r) {
                    var o;
                    await a, null === (o = e.contentWindow) || void 0 === o || o.postMessage(t, n, r)
                },
                addEventListener(t, n) {
                    const r = t => {
                        t.source === e.contentWindow && n(t)
                    };
                    o.set(n, r), self.addEventListener(t, r)
                },
                removeEventListener(e, t) {
                    const n = o.get(t);
                    null != n && (o.delete(t), self.removeEventListener(e, n))
                },
                terminate() {
                    window.removeEventListener("message", s), t && e.remove()
                }
            }
        }
        const Ki = Symbol.for("RemoteUi::Retain"),
            Yi = Symbol.for("RemoteUi::Release"),
            Ji = Symbol.for("RemoteUi::RetainedBy");
        class Xi {
            constructor() {
                this.memoryManaged = new Set
            }
            add(e) {
                this.memoryManaged.add(e), e[Ji].add(this), e[Ki]()
            }
            release() {
                for (const e of this.memoryManaged) e[Ji].delete(this), e[Yi]();
                this.memoryManaged.clear()
            }
        }

        function Gi(e) {
            return Boolean(e && e[Ki] && e[Yi])
        }

        function Qi(e, {
            deep: t = !0
        } = {}) {
            return Zi(e, t, new Map)
        }

        function Zi(e, t, n) {
            const r = n.get(e);
            if (null != r) return r;
            const o = Gi(e);
            if (o && e[Ki](), n.set(e, o), t) {
                if (Array.isArray(e)) {
                    const r = e.reduce((e, r) => Zi(r, t, n) || e, o);
                    return n.set(e, r), r
                }
                if (ns(e)) {
                    const r = Object.keys(e).reduce((r, o) => Zi(e[o], t, n) || r, o);
                    return n.set(e, r), r
                }
            }
            return n.set(e, o), o
        }

        function es(e, {
            deep: t = !0
        } = {}) {
            return ts(e, t, new Map)
        }

        function ts(e, t, n) {
            const r = n.get(e);
            if (null != r) return r;
            const o = Gi(e);
            if (o && e[Yi](), n.set(e, o), t) {
                if (Array.isArray(e)) {
                    const r = e.reduce((e, r) => ts(r, t, n) || e, o);
                    return n.set(e, r), r
                }
                if (ns(e)) {
                    const r = Object.keys(e).reduce((r, o) => ts(e[o], t, n) || r, o);
                    return n.set(e, r), r
                }
            }
            return o
        }

        function ns(e) {
            if (null == e || "object" != typeof e) return !1;
            const t = Object.getPrototypeOf(e);
            return null == t || t === Object.prototype
        }
        const rs = "_@f";

        function os(e) {
            const t = new Map,
                n = new Map,
                r = new Map;
            return {
                encode: function r(o, i = new Map) {
                    if (null == o) return [o];
                    const s = i.get(o);
                    if (s) return s;
                    if ("object" == typeof o) {
                        if (Array.isArray(o)) {
                            i.set(o, [void 0]);
                            const e = [],
                                t = [o.map(t => {
                                    const [n, o = []] = r(t, i);
                                    return e.push(...o), n
                                }), e];
                            return i.set(o, t), t
                        }
                        if (ns(o)) {
                            i.set(o, [void 0]);
                            const e = [],
                                t = [Object.keys(o).reduce((t, n) => {
                                    const [s, a = []] = r(o[n], i);
                                    return e.push(...a), { ...t,
                                        [n]: s
                                    }
                                }, {}), e];
                            return i.set(o, t), t
                        }
                    }
                    if ("function" == typeof o) {
                        if (t.has(o)) {
                            const e = t.get(o),
                                n = [{
                                    [rs]: e
                                }];
                            return i.set(o, n), n
                        }
                        const r = e.uuid();
                        t.set(o, r), n.set(r, o);
                        const s = [{
                            [rs]: r
                        }];
                        return i.set(o, s), s
                    }
                    const a = [o];
                    return i.set(o, a), a
                },
                decode: o,
                async call(e, t) {
                    const r = new Xi,
                        i = n.get(e);
                    if (null == i) throw new Error("You attempted to call a function that was already released.");
                    try {
                        const e = Gi(i) ? [r, ...i[Ji]] : [r];
                        return await i(...o(t, e))
                    } finally {
                        r.release()
                    }
                },
                release(e) {
                    const r = n.get(e);
                    r && (n.delete(e), t.delete(r))
                },
                terminate() {
                    t.clear(), n.clear(), r.clear()
                }
            };

            function o(t, n) {
                if ("object" == typeof t) {
                    if (null == t) return t;
                    if (Array.isArray(t)) return t.map(e => o(e, n));
                    if (rs in t) {
                        const o = t[rs];
                        if (r.has(o)) return r.get(o);
                        let i = 0,
                            s = !1;
                        const a = () => {
                                i -= 1, 0 === i && (s = !0, r.delete(o), e.release(o))
                            },
                            c = () => {
                                i += 1
                            },
                            u = new Set(n),
                            d = (...t) => {
                                if (s) throw new Error("You attempted to call a function that was already released.");
                                if (!r.has(o)) throw new Error("You attempted to call a function that was already revoked.");
                                return e.call(o, t)
                            };
                        Object.defineProperties(d, {
                            [Yi]: {
                                value: a,
                                writable: !1
                            },
                            [Ki]: {
                                value: c,
                                writable: !1
                            },
                            [Ji]: {
                                value: u,
                                writable: !1
                            }
                        });
                        for (const e of u) e.add(d);
                        return r.set(o, d), d
                    }
                    if (ns(t)) return Object.keys(t).reduce((e, r) => ({ ...e,
                        [r]: o(t[r], n)
                    }), {})
                }
                return t
            }
        }
        class is extends Error {
            constructor(e) {
                const {
                    callId: t,
                    error: n,
                    result: r
                } = e;
                super(`No resolver found for call ID: ${t}${n?` Error: ${String(n)}`:""}${null==r?"":` Result: ${JSON.stringify(r)}`}`), this.callId = void 0, this.error = void 0, this.result = void 0, this.groupingHash = "RemoteUI::MissingResolverError", this.name = "MissingResolverError", this.callId = t, this.error = n, this.result = r
            }
        }

        function ss(e, {
            uuid: t = as,
            createEncoder: n = os,
            callable: r
        } = {}) {
            let o = !1,
                i = e;
            const s = new Map,
                a = new Map,
                c = function(e, t) {
                    let n;
                    if (null == t) {
                        if ("function" != typeof Proxy) throw new Error("You must pass an array of callable methods in environments without Proxies.");
                        const t = new Map;
                        n = new Proxy({}, {
                            get(n, r) {
                                if (t.has(r)) return t.get(r);
                                const o = e(r);
                                return t.set(r, o), o
                            }
                        })
                    } else {
                        n = {};
                        for (const r of t) Object.defineProperty(n, r, {
                            value: e(r),
                            writable: !1,
                            configurable: !0,
                            enumerable: !0
                        })
                    }
                    return n
                }(p, r),
                u = n({
                    uuid: t,
                    release(e) {
                        d(3, [e])
                    },
                    call(e, n, r) {
                        const o = t(),
                            i = h(o, r),
                            [s, a] = u.encode(n);
                        return d(5, [o, e, s], a), i
                    }
                });
            return i.addEventListener("message", l), {
                call: c,
                replace(e) {
                    const t = i;
                    i = e, t.removeEventListener("message", l), e.addEventListener("message", l)
                },
                expose(e) {
                    for (const t of Object.keys(e)) {
                        const n = e[t];
                        "function" == typeof n ? s.set(t, n) : s.delete(t)
                    }
                },
                callable(...e) {
                    if (null != r)
                        for (const t of e) Object.defineProperty(c, t, {
                            value: p(t),
                            writable: !1,
                            configurable: !0,
                            enumerable: !0
                        })
                },
                terminate() {
                    d(2, void 0), f(), i.terminate && i.terminate()
                }
            };

            function d(e, t, n) {
                o || i.postMessage(t ? [e, t] : [e], n)
            }
            async function l(e) {
                if (o) return;
                const {
                    data: t
                } = e;
                var n;
                if (n = t, Array.isArray(n) && "number" == typeof n[0] && (null == n[1] || Array.isArray(n[1]))) switch (t[0]) {
                    case 2:
                        f();
                        break;
                    case 0:
                        {
                            const e = new Xi,
                                [n, o, i] = t[1],
                                a = s.get(o);
                            try {
                                if (null == a) throw new Error(`No '${o}' method is exposed on this endpoint`);
                                const [t, r] = u.encode(await a(...u.decode(i, [e])));
                                d(1, [n, void 0, t], r)
                            } catch (r) {
                                const {
                                    name: e,
                                    message: t,
                                    stack: o
                                } = r;
                                throw d(1, [n, {
                                    name: e,
                                    message: t,
                                    stack: o
                                }]), r
                            } finally {
                                e.release()
                            }
                            break
                        }
                    case 1:
                        {
                            const [e, n, r] = t[1],
                            o = a.get(e);
                            if (null == o) throw new is({
                                callId: e,
                                error: n,
                                result: r
                            });o(...t[1]),
                            a.delete(e);
                            break
                        }
                    case 3:
                        {
                            const [e] = t[1];u.release(e);
                            break
                        }
                    case 6:
                        {
                            const [e, n, r] = t[1],
                            o = a.get(e);
                            if (null == o) throw new is({
                                callId: e,
                                error: n,
                                result: r
                            });o(...t[1]),
                            a.delete(e);
                            break
                        }
                    case 5:
                        {
                            const [e, n, o] = t[1];
                            try {
                                const t = await u.call(n, o),
                                    [r, i] = u.encode(t);
                                d(6, [e, void 0, r], i)
                            } catch (r) {
                                const {
                                    name: t,
                                    message: n,
                                    stack: o
                                } = r;
                                throw d(6, [e, {
                                    name: t,
                                    message: n,
                                    stack: o
                                }]), r
                            }
                            break
                        }
                }
            }

            function p(e) {
                return (...n) => {
                    if (o) return Promise.reject(new Error("You attempted to call a function on a terminated web worker."));
                    if ("string" != typeof e && "number" != typeof e) return Promise.reject(new Error(`Can’t call a symbol method on a remote endpoint: ${e.toString()}`));
                    const r = t(),
                        i = h(r),
                        [s, a] = u.encode(n);
                    return d(0, [r, e, s], a), i
                }
            }

            function h(e, t) {
                return new Promise((n, r) => {
                    a.set(e, (e, o, i) => {
                        if (null == o) n(i && u.decode(i, t));
                        else {
                            const e = new Error;
                            Object.assign(e, o), r(e)
                        }
                    })
                })
            }

            function f() {
                var e;
                o = !0, s.clear(), a.clear(), null === (e = u.terminate) || void 0 === e || e.call(u), i.removeEventListener("message", l)
            }
        }

        function as() {
            return `${cs()}-${cs()}-${cs()}-${cs()}`
        }

        function cs() {
            return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
        }
        const us = (e, t, {
                important: n = !1
            } = {}) => Object.keys(t).forEach(r => {
                const o = t[r],
                    [i = "", s = (n ? "important" : void 0)] = Array.isArray(o) ? o : [o];
                e.style.setProperty(r, i, s)
            }),
            ds = "web-pixels-helper-sandbox-handle",
            ls = {
                height: "26px",
                width: "21px",
                top: "12px",
                left: "12px"
            },
            ps = {
                height: "100%",
                width: "100%",
                top: "0px",
                left: "0px"
            };
        const hs = 25;

        function fs(e) {
            return e instanceof HTMLElement || e instanceof SVGElement
        }

        function ms({
            id: e,
            tagName: t,
            attributes: n,
            dataset: r,
            styles: o
        }) {
            const i = document.querySelector(`${t}#${e}`);
            if (i) return [i, !1];
            const s = ((e, t) => {
                const n = document.createElement(e);
                return Object.keys(t).forEach(e => {
                    const r = t[e];
                    void 0 !== r && n.setAttribute(e, r)
                }), n
            })(t, { ...n,
                id: e
            });
            return r && Object.keys(r).forEach(e => {
                s.dataset[e] = r[e]
            }), us(s, o.props, o.options), [s, !0]
        }
        async function vs({
            containerSpec: e,
            iframeSpec: t
        }) {
            await new Promise(e => {
                if (document.body) e();
                else {
                    const t = () => {
                        "loading" !== document.readyState && (e(), document.removeEventListener("readystatechange", t))
                    };
                    document.addEventListener("readystatechange", t)
                }
            });
            const [n, r] = ms({
                id: e.id,
                tagName: e.tagName,
                styles: {
                    props: e.styles,
                    options: {
                        important: !0
                    }
                },
                attributes: {
                    tabIndex: "-1",
                    ...e.attributes
                },
                dataset: e.dataset
            });
            r && document.body.appendChild(n);
            const o = t.attributes || {},
                [i, s] = ms({
                    id: t.id,
                    tagName: "iframe",
                    styles: {
                        props: t.styles,
                        options: {
                            important: !0
                        }
                    },
                    attributes: {
                        tabIndex: "-1",
                        ...o,
                        name: t.id,
                        src: t.src
                    }
                });
            if (s) {
                if (t.privileges) {
                    if (! function(e) {
                            return "sandbox" in e
                        }(i)) throw new _r("browser does not support the sandbox attribute on IFrames");
                    i.setAttribute("sandbox", t.privileges.join(" "))
                }
                n.appendChild(i)
            }
            return {
                container: n,
                iframe: i
            }
        }
        async function gs({
            state: e,
            extensionsBaseUrl: t,
            onHelperReady: n
        }) {
            const r = await async function({
                    extensionsBaseUrl: e,
                    height: t = 216,
                    position: n = null
                }) {
                    const r = `${e}/web-pixels-helper/h${Zn}m.html`;
                    return vs({
                        containerSpec: {
                            id: "web-pixels-helper-sandbox-container",
                            tagName: "dialog",
                            attributes: {
                                popover: "manual"
                            },
                            styles: { ...n ? {
                                    top: `${n.y}px`,
                                    left: `${n.x}px`,
                                    right: "auto",
                                    bottom: "auto"
                                } : {
                                    top: "max(0px, calc(100% - 770px))",
                                    bottom: "auto",
                                    right: "30px",
                                    left: "auto"
                                },
                                width: "393px",
                                height: `${t}px`,
                                position: "fixed",
                                border: "0",
                                opacity: "0",
                                margin: "0",
                                padding: "0",
                                background: "transparent",
                                overflow: "hidden",
                                visibility: "hidden",
                                transform: "translate(0px, 0px)",
                                "border-radius": "16px",
                                "box-shadow": "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px",
                                transition: "opacity 200ms ease-in-out, height 300ms ease-in-out, top 300ms ease-in-out, box-shadow 300ms",
                                display: "block",
                                "pointer-events": "auto"
                            },
                            dataset: {
                                shopifyPrivacy: "exclude"
                            }
                        },
                        iframeSpec: {
                            id: "web-pixels-helper-sandbox-iframe",
                            src: r,
                            styles: {
                                border: "none",
                                background: "#fff",
                                clip: "initial",
                                display: "inline",
                                margin: "0",
                                opacity: "1",
                                padding: "0",
                                visibility: "visible",
                                width: "100%",
                                height: "100%",
                                "border-radius": "16px"
                            }
                        }
                    })
                }({
                    extensionsBaseUrl: t,
                    height: e.height,
                    position: e.position
                }),
                o = ss(Wi(r.iframe), {
                    callable: ["initializeHelper", "logConsentGranted", "logPixelRegister", "logSubscribe", "logEvent"]
                }),
                i = ys({
                    state: e,
                    reference: r,
                    onHelperReady: n
                });
            return o.expose({ ...i
                }),
                function(e, t) {
                    if (e.querySelector(`#${ds}`)) return;
                    const n = document.createElement("div");
                    n.setAttribute("id", ds), us(n, {
                        display: "block",
                        position: "absolute",
                        cursor: "grab",
                        background: "transparent",
                        ...ls
                    }, {
                        important: !0
                    }), e.appendChild(n), n.addEventListener("mousedown", function({
                        container: e,
                        handle: t,
                        onMove: n
                    }, r) {
                        function o(t) {
                            t.preventDefault();
                            const o = hs,
                                i = self.innerHeight - hs,
                                s = hs,
                                a = self.innerWidth - hs;
                            if (t.clientY < o || t.clientY > i || t.clientX < s || t.clientX > a) return;
                            n && n(t.clientX - hs, t.clientY - hs), r[1] = r[3] - t.clientX, r[2] = r[4] - t.clientY, r[3] = t.clientX, r[4] = t.clientY;
                            const c = new DOMMatrix(getComputedStyle(e).transform),
                                u = c.e,
                                d = c.f,
                                l = u - r[1],
                                p = d - r[2];
                            us(e, {
                                transform: `translate(${l}px, ${p}px)`
                            }, {
                                important: !0
                            })
                        }

                        function i(e) {
                            us(t, ls, {
                                important: !0
                            }), self.removeEventListener("mouseup", i), self.removeEventListener("mousemove", o)
                        }
                        return e => {
                            e.preventDefault(), r[3] = e.clientX, r[4] = e.clientY, self.addEventListener("mouseup", i), self.addEventListener("mousemove", o), us(t, ps, {
                                important: !0
                            })
                        }
                    }({
                        container: e,
                        handle: n,
                        onMove: t
                    }, {
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0
                    }))
                }(r.container, (t, n) => {
                    e.setPosition({
                        x: t,
                        y: n
                    })
                }), o
        }
        const ys = ({
                state: e,
                reference: t,
                onHelperReady: n
            }) => ({
                async setHelperReady() {
                    t.container.showPopover(), us(t.container, {
                        visibility: "visible",
                        opacity: "1"
                    }, {
                        important: !0
                    }), n()
                },
                setHeight: ({
                    height: n
                }) => new Promise((r, o) => {
                    try {
                        us(t.container, {
                            height: `${n}px`
                        }, {
                            important: !0
                        }), e.setHeight(n), r(!0)
                    } catch (i) {
                        r(!1)
                    }
                }),
                async proceedWithoutConsent() {
                    try {
                        const {
                            success: e
                        } = await
                        function(e, t) {
                            if (te()) throw new Error("setTrackingConsent is not supported in Node.js environments. This function requires browser APIs (XHR, cookies, window) and can only be called client-side.");
                            const n = new Ee;
                            if (Ve() && n.produce("setTrackingConsent", "v0.2"), function(e) {
                                    if ("boolean" != typeof e && "object" != typeof e) throw new le(`setTrackingConsent received an invalid argument of type "${typeof e}". Expected an object with consent keys. Example: setTrackingConsent({ analytics: true, marketing: false }). See ${rt} for documentation.`);
                                    if ("object" == typeof e) {
                                        const t = Object.keys(e);
                                        if (0 === t.length) throw new le(`The submitted consent object is empty. Expected at least one consent key: ${nt}. Example: setTrackingConsent({ analytics: true, marketing: false }). See ${rt} for documentation.`);
                                        for (const e of t)
                                            if (!tt.includes(e)) throw new le(`The submitted consent object contains an invalid key: "${e}". Valid keys are: ${nt}. Example: setTrackingConsent({ analytics: true, marketing: false }). See ${rt} for documentation.`)
                                    }
                                }(e), void 0 !== t && "function" != typeof t) throw new le(`setTrackingConsent received an invalid callback of type "${typeof t}". The second argument must be a function if provided. Example: setTrackingConsent({ analytics: true }, (error, result) => { ... }). See ${rt} for documentation.`);
                            const r = function(e) {
                                    if (!e) return null;
                                    try {
                                        return ot() ? document.referrer : ""
                                    } catch {
                                        return ""
                                    }
                                }(e.analytics),
                                o = function(e) {
                                    if (!e) return null;
                                    if (!ot()) return "/";
                                    try {
                                        return window.location.pathname + window.location.search
                                    } catch {
                                        return "/"
                                    }
                                }(e.analytics);
                            return Ze(0, {
                                granular_consent: e,
                                ...null !== r && {
                                    referrer: r
                                },
                                ...null !== o && {
                                    landing_page: o
                                }
                            }, t)
                        }(Or.reduce((e, t) => (e[t] = !0, e), {}));
                        return Boolean(e)
                    } catch (e) {
                        return !1
                    }
                },
                async setClipboard({
                    text: e
                }) {
                    try {
                        return self.navigator.clipboard.writeText(e), !0
                    } catch (t) {
                        return !1
                    }
                },
                async reportTelemetry(e) {
                    Xo("helperWindowButtonClick", e)
                }
            }),
            bs = new Set,
            ws = "webPixelDebug";
        class _s extends g {
            constructor(e) {
                super(`Helper state is invalid.\n\nState: ${JSON.stringify(e)}`), this.name = "InvalidHelperStateError"
            }
        }
        class xs extends g {
            constructor(e, t) {
                super(`Helper's selected pixel is invalid.\n\nPixel: ${JSON.stringify(t)}\n\nState: ${JSON.stringify(e)}`), this.name = "InvalidPixelHelperError"
            }
        }
        const Is = [b.Custom, b.App];

        function ks(e) {
            try {
                sessionStorage.setItem(ws, JSON.stringify(e))
            } catch {
                t = "Session storage is not available. The Pixel Helper experience may be degraded.", bs.has(t) || (bs.add(t), "console" in self && console.warn(t))
            }
            var t
        }

        function Es() {
            Zt(() => sessionStorage.removeItem(ws))
        }
        const Ss = (e, t) => ({
                version: Zn,
                pageUrl: self.location.href,
                surface: e.surface ? ? y.Unknown,
                status: t,
                bundleTarget: Qn,
                shopId: e.shopId
            }),
            Ps = function() {
                const e = new Bi(1e3, "newest");
                let t = null;
                return {
                    message(n, r) {
                        const o = () => t ? .call[n](r);
                        if (t) try {
                            o()
                        } catch (i) {
                            kr.notify(i, {
                                context: "createWebPixelsHelper/message/endpoint-call",
                                unhandled: !1,
                                severity: "warning"
                            })
                        } else e ? .add(o)
                    },
                    async init(n) {
                        const r = (() => {
                            try {
                                return (e => {
                                    const t = new URL(window.location.href),
                                        n = t.searchParams.get(ws),
                                        r = Zt(() => n ? JSON.parse(atob(n)) : null, null);
                                    n && (t.searchParams.delete(ws), self.history.replaceState(null, "", t.toString()));
                                    const o = Zt(() => JSON.parse(sessionStorage.getItem(ws) ? ? "null"), null);
                                    if (!r && !o) return null;
                                    const i = {
                                        position: null,
                                        height: 216,
                                        ...r ? ? o
                                    };
                                    if (! function(e) {
                                            return !(!e || !e.pixel || "string" != typeof e.pixel.type || "string" != typeof e.pixel.id || e.pixel.name && "string" != typeof e.pixel.name || "number" != typeof e.height)
                                        }(i)) throw Es(), new _s(i);
                                    const s = e.find(e => e.type === i.pixel.type && e.id === i.pixel.id);
                                    if (!s || !Is.includes(s.type) || s.id.match(/shopify/i)) throw Es(), new xs(i, i.pixel);
                                    return i.pixel = { ...i.pixel,
                                        name: i.pixel.name || s ? .name || ""
                                    }, ks(i), {
                                        get pixel() {
                                            return i.pixel
                                        },
                                        get height() {
                                            return i.height
                                        },
                                        get position() {
                                            return i.position
                                        },
                                        setHeight(e) {
                                            i.height = e, ks(i)
                                        },
                                        setPosition(e) {
                                            i.position = e, ks(i)
                                        }
                                    }
                                })(n.webPixelsConfigList)
                            } catch (e) {
                                kr.notify(e, {
                                    context: "createWebPixelsHelper/init/state",
                                    unhandled: !1,
                                    severity: "warning",
                                    options: {
                                        sampleRate: .001
                                    }
                                }), Xo("helperLoad", Ss(n, "helper-read-error"))
                            }
                            return null
                        })();
                        if (!r) return;
                        let o = !1;
                        const {
                            shopId: i,
                            surface: s = y.Unknown
                        } = n, a = Ko("helperLoad", {
                            version: Zn,
                            pageUrl: self.location.href,
                            surface: s,
                            status: "loaded",
                            bundleTarget: Qn,
                            shopId: i
                        });
                        await gs({
                            state: r,
                            extensionsBaseUrl: n.extensionsBaseUrl,
                            onHelperReady: () => {
                                o || (Jo(a), o = !0)
                            }
                        }).then(o => {
                            if (!o) return;
                            t = o;
                            const i = r.pixel;
                            this.message("initializeHelper", {
                                pixelUid: {
                                    id: i.id,
                                    type: i.type
                                },
                                pixelName: i.name ? ? "",
                                config: n,
                                isCollapsed: r.height <= 216,
                                loggerLevel: Zt(() => "true" === self.localStorage.getItem("pixel-helper-advanced") ? Fi.Advanced : Fi.Standard, Fi.Standard)
                            }), e.forEach(e => e()), e.clear()
                        }).catch(e => {
                            kr.notify(e, {
                                context: "createWebPixelsHelper/init/createHelperSandbox",
                                unhandled: !1,
                                severity: "warning"
                            }), Xo("helperLoad", Ss(n, "helper-create-error"))
                        })
                    }
                }
            }();
        let Ts = function(e) {
                return e.WebPixelExtension = "web-pixel-extension", e.CheckoutOneSdk = "checkout-one-sdk", e.Unknown = "unknown", e
            }({}),
            As = function(e) {
                return e.Storefront = "storefront", e.Checkout = "checkout", e.Unknown = "unknown", e
            }({}),
            Cs = function(e) {
                return e.Custom = "custom", e.All = "all", e
            }({});

        function Os(e) {
            return "shopify-custom-pixel" === e.id ? "shopify-pixel" : e.type === b.Custom ? "-1" : e.apiClientId ? `${e.apiClientId}` : void 0
        }
        const Ns = "[object Undefined]",
            Rs = "[object Null]",
            js = ["[object String]", "[object Number]", "[object Boolean]", Ns, Rs],
            Us = e => null === e ? Rs : void 0 === e ? Ns : Object.prototype.toString.call(e);

        function Ds(e) {
            let t = null,
                n = null;

            function r(e) {
                return "[object Object]" === Us(e)
            }
            return void 0 === e || r(e) ? {
                isValid: function e(o, i = "root") {
                    if (Array.isArray(o)) return o.every((t, n) => e(t, `${i}[${n}]`));
                    if (r(o)) return Object.keys(o).every(t => e(o[t], `${i}.${t}`));
                    const s = Us(o),
                        a = js.includes(s);
                    return a || (n = i, t = `Value of type "${s}" at "${n}" must be one of the following types: ${js.join(", ")}.`), a
                }(e, "root"),
                error: t,
                errorKey: n
            } : (n = "root", t = `Value of type "${Us(e)}" at "${n}" must be an object.`, {
                isValid: !1,
                error: t,
                errorKey: n
            })
        }
        const Ms = ["page_viewed", "product_viewed", "collection_viewed", "cart_viewed", "clicked", "form_submitted", "input_blurred", "input_focused", "input_changed", "advanced_dom_clicked", "advanced_dom_scrolled", "advanced_dom_window_resized"],
            $s = dr((e, t) => ar(e.toLowerCase()) / 4294967296 <= t, {
                rate: .01
            });

        function Ls(e, t, n, r = $s) {
            try {
                if (!Ms.includes(e.name)) return;
                const o = Kr("_shopify_s") || "";
                o && r.includes(o) && Xo("buyerEventSample", {
                    shopId: t,
                    eventType: e.type,
                    eventName: e.name,
                    surface: n,
                    eventPayloadJson: JSON.stringify(e),
                    sessionToken: o
                })
            } catch (o) {
                kr.notify(o, {
                    severity: "warning",
                    unhandled: !1,
                    context: "logBuyerEvent",
                    options: {
                        sampleRate: .2
                    }
                })
            }
        }
        const qs = new Set(["innerHeight", "innerWidth", "scrollX", "scrollY", "pageXOffset", "pageYOffset"]);
        let Bs = {},
            Vs = !1,
            zs = !0;

        function Fs() {
            Bs.innerHeight = Zt(() => window.innerHeight, 0), Bs.innerWidth = Zt(() => window.innerWidth, 0);
            const e = Zt(() => window.scrollX, 0),
                t = Zt(() => window.scrollY, 0);
            Bs.scrollX = e, Bs.pageXOffset = e, Bs.scrollY = t, Bs.pageYOffset = t, zs = !1
        }

        function Hs() {
            zs = !0
        }
        const Ws = new Proxy(window, {
            get: (e, t) => (Vs || (Vs = !0, Fs(), window.addEventListener("resize", Hs, {
                passive: !0
            }), window.addEventListener("scroll", Hs, {
                passive: !0
            }), window.addEventListener("orientationchange", Hs, {
                passive: !0
            })), qs.has(t) ? (zs && Fs(), Bs[t]) : Zt(() => Reflect.get(e, t)))
        });

        function Ks() {
            const e = Ws.location,
                t = Ws.screen,
                n = {
                    href: Zt(() => e ? .href) ? ? "",
                    hash: Zt(() => e ? .hash) ? ? "",
                    host: Zt(() => e ? .host) ? ? "",
                    hostname: Zt(() => e ? .hostname) ? ? "",
                    origin: Zt(() => e ? .origin) ? ? "",
                    pathname: Zt(() => e ? .pathname) ? ? "",
                    port: Zt(() => e ? .port) ? ? "",
                    protocol: Zt(() => e ? .protocol) ? ? "",
                    search: Zt(() => e ? .search) ? ? ""
                };
            return {
                document: {
                    location: n,
                    referrer: Zt(() => document ? .referrer) ? ? "",
                    characterSet: Zt(() => document ? .characterSet) ? ? "",
                    title: Zt(() => document ? .title) ? ? ""
                },
                navigator: {
                    language: Zt(() => navigator ? .language) ? ? "",
                    cookieEnabled: Zt(() => navigator ? .cookieEnabled) ? ? !1,
                    languages: Zt(() => navigator ? .languages) ? ? [],
                    userAgent: Zt(() => navigator ? .userAgent) ? ? ""
                },
                window: {
                    innerHeight: Ws.innerHeight ? ? 0,
                    innerWidth: Ws.innerWidth ? ? 0,
                    outerHeight: Ws.outerHeight ? ? 0,
                    outerWidth: Ws.outerWidth ? ? 0,
                    pageXOffset: Ws.pageXOffset ? ? 0,
                    pageYOffset: Ws.pageYOffset ? ? 0,
                    location: n,
                    origin: Ws.origin ? ? "",
                    screen: {
                        height: Zt(() => t ? .height) ? ? 0,
                        width: Zt(() => t ? .width) ? ? 0
                    },
                    screenX: Ws.screenX ? ? 0,
                    screenY: Ws.screenY ? ? 0,
                    scrollX: Ws.scrollX ? ? 0,
                    scrollY: Ws.scrollY ? ? 0
                }
            }
        }
        const Ys = new Map,
            Js = e => {
                const t = (Ys.get(e) ? ? 0) + 1;
                return Ys.set(e, t), t
            },
            Xs = e => ({ ...e,
                get clientId() {
                    return $i()
                },
                timestamp: (new Date).toISOString(),
                context: Ks(),
                id: "string" == typeof e.id && e.id.length > 0 ? e.id : qt(),
                seq: Js(e.name)
            });

        function Gs(e, t, n = {}) {
            const r = function(e, t, n) {
                if ("checkout_completed" === e && n.eventId) return n.eventId;
                const r = {
                    analyticsFramework: "wpm"
                };
                try {
                    return "product_added_to_cart" === e && "cartLine" in t && (r.cacheKey = function({
                        cartLine: e
                    } = {
                        cartLine: null
                    }) {
                        const t = e ? .merchandise.product.id,
                            n = e ? .merchandise.id;
                        if (t && n) return `${t}-${n}`
                    }(t)), window.Shopify ? .evids ? .(e, r)
                } catch {
                    return
                }
            }(e, t, n);
            return Xs({
                id: r,
                name: e,
                data: t,
                type: p(e)
            })
        }

        function Qs(e, t = null) {
            return Xs({
                name: e,
                customData: t,
                type: d.Custom
            })
        }
        const Zs = "wpmLoggedConversion1",
            ea = ["thank_you", "thank-you", "post_purchase", "post-purchase"];
        class ta extends g {
            constructor(e) {
                super(`Duplicate conversion event blocked for checkout token: "${e}"`), this.name = "ExcludedConversionError"
            }
        }
        class na extends g {
            constructor() {
                super("Checkout token unavailable from payload"), this.name = "MissingCheckoutTokenError"
            }
        }
        class ra extends g {
            constructor() {
                super("Failed to extract valid checkout token from pathname"), this.name = "MissingPathnameCheckoutTokenError"
            }
        }

        function oa(e) {
            const t = {},
                n = (new Date).getTime();
            for (const [r, o] of Object.entries(e))
                if ("number" == typeof o) {
                    const e = new Date(o);
                    e.setMonth(e.getMonth() + 2), n < e.getTime() && (t[r] = o)
                }
            return t
        }
        const ia = /^\/checkouts\/([^/]+)\/([^/]+)(?:\/((?:[a-z]{2,3}|zh-hans|zh-hant)(?:-[a-zA-Z0-9]+)?))?(?:\/([^/]+))\/?$/,
            sa = (e, t, n, r, o) => {
                const {
                    pixelRuntimeConfig: i
                } = o || {}, {
                    apiClientId: s,
                    restrictions: a
                } = i || {}, {
                    allowedEvents: c,
                    disallowedEvents: u
                } = a || {}, {
                    sendTo: d
                } = r || {}, l = d && String(d) === String(s), p = d && !l, h = !c || c.includes(t), f = u && u.includes(t);
                Boolean(h && !f && !p || l) && e()
            },
            aa = (e, t, n, r, o) => {
                if (!v(t)) return void e();
                const {
                    pixelRuntimeConfig: i
                } = o || {}, {
                    capabilities: s,
                    type: a
                } = i || {}, c = s ? .includes(_.AdvancedDomEvents);
                c && a === b.App && e()
            };
        class ca extends g {
            constructor(e) {
                super(`Circular reference detected at "${e}" while applying protected customer data filtering. Event payload contains cyclic structures which are not supported.`), this.name = "ProtectedCustomerDataTransformError"
            }
        }

        function ua(e, t, n) {
            if ("function" == typeof t) {
                const r = t(e, n.context);
                return n.onTransformed ? .(e, r, n.path), r
            }
            if (null == t || "object" != typeof t) return n.onTransformed ? .(e, t, n.path), t;
            if (null == e) return n.onTransformed ? .(e, e, n.path), e;
            if ("object" != typeof e) return n.onTransformed ? .(e, e, n.path), e;
            if (n.ancestors.has(e)) throw new ca(n.path);
            const r = function(e, t, n) {
                return e.get(t) ? .get(n)
            }(n.cache, e, t);
            if (void 0 !== r) return r;
            let o;
            return n.ancestors.add(e), o = Array.isArray(e) ? function(e, t, n) {
                    let r = e;
                    for (let o = 0; o < e.length; o++) {
                        const i = e[o],
                            s = ua(i, t, { ...n,
                                path: `${n.path}[${o}]`
                            });
                        s !== i && (r === e && (r = e.slice()), r[o] = s)
                    }
                    return r
                }(e, t, n) : function(e, t, n) {
                    const r = Object.keys(t);
                    if (0 === r.length) return e;
                    let o = e;
                    for (const i of r)
                        if (i in e) {
                            const r = e[i],
                                s = ua(r, t[i], { ...n,
                                    path: `${n.path}.${i}`
                                });
                            s !== r && (o === e && (o = { ...e
                            }), o[i] = s)
                        }
                    return o
                }(e, t, n), n.ancestors.delete(e),
                function(e, t, n, r) {
                    let o = e.get(t);
                    o || (o = new WeakMap, e.set(t, o)), o.set(n, r)
                }(n.cache, e, t, o), o
        }
        const da = sr(e => {
                const t = e ? .protectedCustomerApprovalScopes ? ? [];
                return {
                    protectedCustomerApprovalScopes: {
                        read_customer_address: t.includes("read_customer_address"),
                        read_customer_email: t.includes("read_customer_email"),
                        read_customer_name: t.includes("read_customer_name"),
                        read_customer_personal_data: t.includes("read_customer_personal_data"),
                        read_customer_phone: t.includes("read_customer_phone")
                    }
                }
            }, {
                cache: new WeakMap,
                cacheKey: e => e
            }),
            la = (e, t, n, r) => {
                if (!n ? .protectedCustomerApprovalScopes) return e;
                const o = {
                        adjustmentsTriggers: 0,
                        adjustmentsApplied: 0
                    },
                    i = function(e, t, n) {
                        return ua(e, t, {
                            context: n,
                            ancestors: new WeakSet,
                            cache: new WeakMap,
                            path: "$",
                            onTransformed: (e, t, n) => {
                                o.adjustmentsTriggers++, e !== t && o.adjustmentsApplied++
                            }
                        })
                    }(e, t, da(n));
                return r ? .(o), i
            },
            pa = e => (t, n) => n.protectedCustomerApprovalScopes[e] ? t : null,
            ha = {
                data: {
                    checkout: {
                        email: pa("read_customer_email"),
                        phone: pa("read_customer_phone"),
                        smsMarketingPhone: pa("read_customer_phone"),
                        billingAddress: {
                            firstName: pa("read_customer_name"),
                            lastName: pa("read_customer_name"),
                            phone: pa("read_customer_phone"),
                            address1: pa("read_customer_address"),
                            address2: pa("read_customer_address"),
                            zip: pa("read_customer_address")
                        },
                        shippingAddress: {
                            firstName: pa("read_customer_name"),
                            lastName: pa("read_customer_name"),
                            phone: pa("read_customer_phone"),
                            address1: pa("read_customer_address"),
                            address2: pa("read_customer_address"),
                            zip: pa("read_customer_address")
                        }
                    }
                }
            },
            fa = {
                checkout_address_info_submitted: ha,
                checkout_completed: ha,
                checkout_contact_info_submitted: ha,
                checkout_shipping_info_submitted: ha,
                checkout_started: ha,
                payment_info_submitted: ha
            };
        class ma extends g {
            constructor(e, t) {
                super(`Failed to apply protected customer data filtering for event: ${e}. ${t.message}`), this.name = "ProtectedCustomerDataError"
            }
        }
        const va = ["share_all_events"],
            ga = e => (t, n, r, o, i) => {
                const s = i ? .pixelRuntimeConfig;
                if (!s) return void t();
                const {
                    dataSharingAdjustments: a,
                    dataSharingState: c
                } = s;
                if (u = s, Boolean(u.enabledFlags ? .includes("9a3ed68a")) || s.type === b.Custom && !At(Ot)) return void t();
                var u;
                const {
                    dataSharingControls: d
                } = a ? ? {};
                ((e, t) => Boolean(t) && "unrestricted" !== t && !1 === e ? .includes("share_all_events"))(d, c) ? function(e) {
                    return e ? .filter(e => !va.includes(e)) ? ? []
                }(d).length > 0 ? t() : e.emit("log:event-bus:publish:blocked", {
                    pixel: s,
                    event: {
                        name: n,
                        id: r.id
                    }
                }): t()
            },
            ya = "all_standard_events",
            ba = "all_custom_events",
            wa = "all_dom_events";
        class _a extends g {
            constructor(e, t = "PublishEventError") {
                super(e, {
                    groupingHash: `EventBus:${t}`
                }), this.name = t
            }
        }
        const xa = ur({
            rate: .01
        });

        function Ia(e, {
            domEventSampler: t = xa
        } = {}) {
            const {
                shopId: n,
                surface: r,
                emit: o
            } = e, i = (({
                logError: e
            }) => function(t, n) {
                if ("checkout_completed" !== t) return !1;
                let r = n && "checkout" in n ? n ? .checkout ? .token : null;
                if (r && "string" == typeof r || (e(new na, {
                        severity: "info",
                        unhandled: !1,
                        context: "isExcludedDuplicateConversion"
                    }), r = function() {
                        try {
                            const e = new URL(window.location.href),
                                t = ia.exec(e.pathname);
                            if (!t) return null;
                            const [, n, r, o, i] = t;
                            return r ? ? null
                        } catch (e) {
                            return null
                        }
                    }()), !r || "string" != typeof r) return e(new ra, {
                    severity: "info",
                    unhandled: !1,
                    context: "isExcludedDuplicateConversion"
                }), !1;
                if (! function() {
                        try {
                            const e = new URL(window.location.href).pathname.split("/").filter(Boolean);
                            return e.includes("checkouts") && e.some(e => ea.includes(e))
                        } catch (e) {
                            return !1
                        }
                    }()) return !1;
                const o = function() {
                    try {
                        const e = localStorage.getItem(Zs);
                        if (!e) return {};
                        const t = JSON.parse(e);
                        return "object" != typeof t || null === t ? {} : oa(t)
                    } catch (e) {
                        return {}
                    }
                }();
                return r in o ? (e(new ta(r), {
                    severity: "info",
                    unhandled: !1,
                    context: "isExcludedDuplicateConversion"
                }), !0) : (function(e, t) {
                    t[e] = (new Date).getTime(),
                        function(e) {
                            try {
                                const t = oa(e);
                                localStorage.setItem(Zs, JSON.stringify(t))
                            } catch (t) {}
                        }(t)
                }(r, o), !1)
            })(e), s = new zi({
                bufferSize: Number.POSITIVE_INFINITY,
                subscribeAllKey: ya
            }).use(sa, ga(e), (e => (t, n, r, o, i) => {
                const s = i ? .pixelRuntimeConfig,
                    {
                        dataSharingAdjustments: a
                    } = s || {},
                    c = fa[n] ? ? null;
                if (c && (s ? .type !== b.Custom || At(Ot))) try {
                    t(la(r, c, a, t => {
                        s && e.emit("log:event-bus:publish:transformed", {
                            pixel: s,
                            event: r,
                            adjustmentsTriggers: t.adjustmentsTriggers,
                            adjustmentsApplied: t.adjustmentsApplied
                        })
                    }))
                } catch (u) {
                    e.logError(new ma(n, u instanceof Error ? u : new Error(String(u))), {
                        context: "eventBus/middleware/protected-customer-data",
                        unhandled: !1,
                        severity: "error",
                        pixelId: s ? .id
                    })
                } else t()
            })(e)), a = new zi({
                bufferSize: 1e3,
                subscribeAllKey: ba
            }).use(sa, ga(e)), c = new zi({
                bufferSize: 1e3,
                replayKeep: "newest",
                subscribeAllKey: wa
            }).use(sa), u = new zi({
                bufferSize: 1e3,
                replayKeep: "newest"
            }).use(sa, aa);
            return {
                publish(e, t, l) {
                    if (!At(Ct) && r !== y.CustomerAccount) return function(e, t, a) {
                        if ("string" != typeof e) throw new _a("Expected event name to be a string, but got " + typeof e, "LegacyPublishStandardEventError");
                        if (!h(e)) return !1;
                        const c = Ds(t);
                        if (!c.isValid) return console.error(c.error), !1;
                        const u = Gs(e, t, a),
                            d = u.data ? .checkout ? .token;
                        return Ls(u, n, r), Xo("eventPublish", {
                            version: Zn,
                            bundleTarget: Qn,
                            pageUrl: self.location.href,
                            shopId: n,
                            surface: r,
                            eventName: u.name,
                            eventType: u.type,
                            extensionId: a ? .extension ? .extensionId,
                            extensionAppId: a ? .extension ? .appId,
                            extensionType: a ? .extension ? .type,
                            userCanBeTracked: it().toString(),
                            eventId: u.id,
                            checkoutToken: d,
                            checkoutCompletedPageType: a ? .checkoutCompletedPageType
                        }), o("log:event-bus:publish", {
                            event: u,
                            options: a
                        }), !i(e, u.data) && s.publish(u.name, u)
                    }(e, t, l);
                    if ("string" != typeof e) {
                        const t = JSON.stringify(e);
                        throw new _a(`Expected event name "${t}" to be a string, but got ${typeof e}`, "PublishEventError")
                    }
                    if (p(e) === d.Meta) return !1;
                    const g = Ds(t);
                    if (!g.isValid) {
                        if (m(e) || v(e)) {
                            const n = new _a(`Input Validation Error for event ${e}: ${g.error}\nPayload: ${JSON.stringify(t)}`, "PublishAdvancedDomEventError");
                            return kr.notify(n, {
                                type: "metric",
                                context: "publish/invalidPayload"
                            }), !1
                        }
                        return console.error(g.error), !1
                    }
                    let b;
                    if (b = f(e) ? Qs(e, t) : Gs(e, t, l), f(e) || h(e)) {
                        let t = {
                            version: Zn,
                            bundleTarget: Qn,
                            pageUrl: self.location.href,
                            shopId: n,
                            surface: r,
                            eventName: b.name,
                            eventType: b.type,
                            extensionId: l ? .extension ? .extensionId,
                            extensionAppId: l ? .extension ? .appId,
                            extensionType: l ? .extension ? .type,
                            eventId: b.id
                        };
                        if (h(e)) {
                            const e = b.data ? .checkout ? .token;
                            Ls(b, n, r), t = { ...t,
                                userCanBeTracked: it().toString(),
                                checkoutToken: e,
                                checkoutCompletedPageType: l ? .checkoutCompletedPageType
                            }
                        }
                        Xo("eventPublish", t)
                    } else Ls(b, n, r);
                    return o("log:event-bus:publish", {
                        event: b,
                        options: l
                    }), !i(e, b.data) && (h(e) ? s.publish(e, b) : m(e) ? c.publish(e, b) : v(e) ? u.publish(e, b) : a.publish(e, b, l))
                },
                publishCustomEvent(e, t, o) {
                    if (At(Ct)) return this.publish(e, t, o);
                    if ("string" != typeof e) throw new _a("Expected event name to be a string, but got " + typeof e, "PublishCustomEventError");
                    if (!f(e)) return !1;
                    const i = Ds(t);
                    if (!i.isValid) return console.error(i.error), !1;
                    const s = Qs(e, t);
                    return Xo("eventPublish", {
                        version: Zn,
                        bundleTarget: Qn,
                        pageUrl: self.location.href,
                        shopId: n,
                        surface: r,
                        eventName: s.name,
                        eventType: "custom",
                        extensionId: o ? .extension ? .extensionId,
                        extensionAppId: o ? .extension ? .appId,
                        extensionType: o ? .extension ? .type,
                        eventId: s.id
                    }), a.publish(e, s, o)
                },
                publishDomEvent(e, t, o) {
                    if (At(Ct)) return this.publish(e, t, o);
                    if ("string" != typeof e) {
                        const t = JSON.stringify(e);
                        throw new _a(`Expected event name "${t}" to be a string, but got ${typeof e}`, "PublishDomEventError")
                    }
                    if (!m(e) && !v(e)) throw new _a(`Event name "${e}" is not a supported DOM Event`, "PublishDomEventError");
                    const i = Ds(t);
                    if (!i.isValid) {
                        const t = new _a(`Input Validation Error for event ${e}: ${i.error}`, "PublishDomEventError");
                        return kr.notify(t, {
                            type: "metric",
                            context: "publishDomEvent/invalidPayload"
                        }), !1
                    }
                    const s = Gs(e, t, o);
                    return Ls(s, n, r), v(e) ? u.publish(e, s) : c.publish(e, s)
                },
                subscribe(e, n, o = {}) {
                    const i = qt(),
                        l = async s => {
                            if (r === y.CheckoutOneSdk && o.scope !== Ts.CheckoutOneSdk) return;
                            await nn();
                            const a = {
                                    configuration: o.pixelRuntimeConfig ? .configuration,
                                    eventPayloadVersion: o.schemaVersion || o.pixelRuntimeConfig ? .eventPayloadVersion || "unknown",
                                    id: o.pixelRuntimeConfig ? .id || "unknown",
                                    type: o.pixelRuntimeConfig ? .type || "unknown",
                                    runtimeContext: o.pixelRuntimeConfig ? .runtimeContext || "unknown",
                                    restrictions: o.pixelRuntimeConfig ? .restrictions,
                                    scriptVersion: o.pixelRuntimeConfig ? .scriptVersion || "unknown",
                                    apiClientId: o.pixelRuntimeConfig ? .apiClientId,
                                    name: o.pixelRuntimeConfig ? .name
                                },
                                c = {
                                    pixelUid: {
                                        id: a.id,
                                        type: a.type
                                    },
                                    event: s,
                                    eventNameAsSubscribed: e,
                                    subscriptionId: i,
                                    status: "SUCCESS"
                                };
                            let u;
                            try {
                                await n.call(s, s), Ps.message("logEvent", c)
                            } catch (g) {
                                u = g, Ps.message("logEvent", { ...c,
                                    status: "FAIL",
                                    error: u
                                })
                            }
                            const l = p(s.name),
                                f = {
                                    version: Zn,
                                    bundleTarget: Qn,
                                    pageUrl: self.location.href,
                                    shopId: o.shopId,
                                    surface: o.surface,
                                    pixelName: a.name,
                                    pixelId: a.id,
                                    pixelAppId: Os(a),
                                    pixelSource: a.type,
                                    pixelRuntimeContext: a.runtimeContext,
                                    pixelScriptVersion: a.scriptVersion,
                                    pixelConfiguration: a.configuration,
                                    pixelEventSchemaVersion: a.eventPayloadVersion,
                                    eventName: s.name,
                                    eventId: s.id
                                },
                                m = u ? "FAILURE" : "SUCCESS",
                                v = u ? String(u) : void 0;
                            if ([d.Dom, d.AdvancedDom].includes(l)) t.includes(a.id) && Xo("subscriberEventEmitDom", { ...f,
                                status: m,
                                errorMessage: v
                            });
                            else {
                                let e;
                                h(s.name) && (e = s ? .data ? .checkout ? .token), Xo("subscriberEventEmit", { ...f,
                                    eventType: l,
                                    checkoutToken: e || void 0,
                                    status: m,
                                    errorMessage: v
                                })
                            }
                        };
                    if (v(e)) return u.subscribe(e, l, o);
                    if ("all_events" === e) {
                        const e = s.subscribe(ya, l, o),
                            t = a.subscribe(ba, l, o),
                            n = c.subscribe(wa, l, o);
                        return () => {
                            const r = e(),
                                o = t(),
                                i = n();
                            return r && o && i
                        }
                    }
                    return e === ba ? a.subscribe(ba, l, o) : e === ya || h(e) ? s.subscribe(e, l, o) : e === wa || m(e) ? c.subscribe(e, l, o) : a.subscribe(e, l, o)
                }
            }
        }
        const ka = ["31014027265", "28638674945", "44186959873"],
            Ea = {
                customer: {
                    email: pa("read_customer_email"),
                    firstName: pa("read_customer_name"),
                    lastName: pa("read_customer_name"),
                    phone: pa("read_customer_phone")
                }
            };
        class Sa extends g {
            constructor(e) {
                super(`Failed to apply protected customer data filtering to init data. ${e.message}`), this.name = "ProtectedCustomerDataInitError"
            }
        }

        function Pa(e, t, n) {
            const r = {
                context: Ks(),
                data: {
                    customer: (s = t.customer, s ? {
                        email: s.email,
                        firstName: s.firstName,
                        id: s.id,
                        lastName: s.lastName,
                        phone: s.phone,
                        ordersCount: s.ordersCount
                    } : null),
                    cart: (i = t.cart, i ? {
                        id: i ? .id,
                        cost: {
                            totalAmount: {
                                amount: i ? .cost ? .totalAmount ? .amount,
                                currencyCode: i ? .cost ? .totalAmount ? .currencyCode
                            }
                        },
                        lines: i ? .lines,
                        totalQuantity: i ? .totalQuantity,
                        attributes: i ? .attributes
                    } : null),
                    shop: t.shop,
                    purchasingCompany: (o = t.purchasingCompany, o ? {
                        company: o.company,
                        location: o.location
                    } : null)
                },
                customerPrivacy: {
                    analyticsProcessingAllowed: Et(),
                    marketingAllowed: kt(),
                    preferencesProcessingAllowed: St(),
                    saleOfDataAllowed: Pt()
                }
            };
            var o, i, s;
            const a = function(e, t, n) {
                const {
                    dataSharingAdjustments: r
                } = n;
                if (n.type === b.Custom && !At(Ot)) return t;
                try {
                    return la(t, Ea, r, t => {
                        e.emit("log:pixel:init:transformed", {
                            pixel: n,
                            ...t
                        })
                    })
                } catch (o) {
                    return kr.notify(new Sa(o instanceof Error ? o : new Error(String(o))), {
                        context: "createRegisterInit/filterProtectedCustomerData",
                        unhandled: !1,
                        severity: "error",
                        pixelId: n.id
                    }), { ...t,
                        customer: t.customer ? { ...t.customer,
                            email: null,
                            firstName: null,
                            lastName: null,
                            phone: null
                        } : null
                    }
                }
            }(e, r.data, n);
            return { ...r,
                data: a
            }
        }
        const Ta = new Set;

        function Aa(e) {
            Ta.add(e)
        }

        function Ca(e, {
            eventBus: t,
            customerPrivacyEventBus: n,
            webPixelConfig: r,
            initData: o,
            forRPC: i = !1
        }) {
            const {
                shopId: s,
                surface: a
            } = e;
            let c = {};
            try {
                c = r.configuration ? JSON.parse(r.configuration) : {}
            } catch (d) {}
            const u = function(e) {
                return e === y.Shopify || e === y.CheckoutOne || e === y.CheckoutOneSdk || e === y.CheckoutOneShopApp || e === y.CheckoutOneNativeShopApp ? As.Checkout : e === y.StorefrontRenderer ? As.Storefront : As.Unknown
            }(a);
            return {
                analytics: {
                    subscribe(e, n, o) {
                        i && Qi(n);
                        const c = t.subscribe(e, n, { ...o,
                            pixelRuntimeConfig: r,
                            shopId: s,
                            surface: a,
                            scope: Ts.WebPixelExtension
                        });
                        return Aa(() => {
                            c(), i && Zt(() => es(n))
                        }), c
                    }
                },
                browser: {
                    cookie: {
                        get: async e => e ? Kr(e) ? ? "" : Fr() ? ? "",
                        set: async (e, t) => {
                            if (t) {
                                const n = `${e}=${t}`;
                                document.cookie = n
                            } else document.cookie = e;
                            return Fr() ? ? ""
                        }
                    },
                    sendBeacon: async (e, t = "") => {
                        if (e.includes(self.location.origin) && !e.match(/\/\.well-known\/shopify\/monorail\/unstable\/produce_batch/)) return !1;
                        const n = new window.Blob([t], {
                            type: "text/plain"
                        });
                        return Zt(() => window.navigator.sendBeacon(e, n), !1)
                    },
                    localStorage: {
                        setItem: async (e, t) => {
                            Zt(() => window.localStorage.setItem(e, t))
                        },
                        getItem: async e => Zt(() => window.localStorage.getItem(e), null),
                        key: async e => Zt(() => window.localStorage.key(e), null),
                        removeItem: async e => {
                            Zt(() => window.localStorage.removeItem(e))
                        },
                        clear: async () => {
                            Zt(() => window.localStorage.clear())
                        },
                        length: async () => Zt(() => window.localStorage.length, 0)
                    },
                    sessionStorage: {
                        setItem: async (e, t) => {
                            Zt(() => window.sessionStorage.setItem(e, t))
                        },
                        getItem: async e => Zt(() => window.sessionStorage.getItem(e), null),
                        key: async e => Zt(() => window.sessionStorage.key(e), null),
                        removeItem: async e => {
                            Zt(() => window.sessionStorage.removeItem(e))
                        },
                        clear: async () => {
                            Zt(() => window.sessionStorage.clear())
                        },
                        length: async () => Zt(() => window.sessionStorage.length, 0)
                    }
                },
                settings: c,
                init: Pa(e, o, r),
                _pixelInfo: { ...r,
                    surface: a,
                    surfaceNext: u
                },
                customerPrivacy: {
                    subscribe(e, t, o) {
                        i && Qi(t);
                        const c = n.subscribe(e, t, { ...o,
                            pixelRuntimeConfig: r,
                            shopId: s,
                            surface: a,
                            scope: Ts.WebPixelExtension
                        });
                        return Aa(() => {
                            c(), i && Zt(() => es(t))
                        }), c
                    }
                }
            }
        }
        window.addEventListener("pagehide", ({
            persisted: e
        }) => {
            e || (Ta.forEach(e => {
                Zt(e)
            }), Ta.clear())
        }, {
            capture: !0
        });
        let Oa, Na = function(e) {
            return e.Wpm = "wpm", e.WebPixels = "web-pixels", e
        }({});
        class Ra extends Error {
            constructor(e, t) {
                super(e), this.url = void 0, this.name = "WebWorkerTopLevelError", this.url = t
            }
        }
        class ja extends Error {
            constructor(...e) {
                super(...e), this.name = "SandboxAlreadyCreatedError", this.message = "Sandbox already created."
            }
        }
        class Ua extends Error {
            constructor(e, t) {
                super(e), this.name = "PixelInitializationError", this.stack = t
            }
        }
        class Da extends g {
            constructor(...e) {
                super(...e), this.name = "InvalidExtensionPointError", this.message = "Invalid Extension Point"
            }
        }
        const Ma = new Map;
        async function $a(e, t) {
            let n = !1,
                r = null;
            const {
                webPixelConfig: o,
                eventBus: i
            } = t, {
                shopId: s,
                surface: a
            } = e, c = o.id, u = o.type.toLowerCase(), d = Na.WebPixels;
            var l, p;
            switch (o.restrictions || (o.restrictions = function(e, t) {
                const n = {};
                return ka.includes(String(e)) && (n.allowedEvents = [], t !== y.StorefrontRenderer && (n.preventLoadingBeforeEvent = `shopify:app:pixels:load:${e}`)), n
            }(String(o.apiClientId), a)), await Promise.all([(async () => {
                await Rr(function(e) {
                    if (e) return Or.reduce((t, n) => (t[n] = e.includes(n.toUpperCase()), t), {})
                }(o.privacyPurposes)), Ps.message("logConsentGranted", {
                    pixelUid: {
                        id: c,
                        type: o.type
                    }
                })
            })(), (l = (e, t) => i.subscribe(e, t, {
                pixelRuntimeConfig: {
                    apiClientId: "PIXEL-LOADER"
                }
            }), p = o.restrictions ? .preventLoadingBeforeEvent, new Promise((e, t) => {
                void 0 === p ? e(!0) : l(p, () => {
                    e(!0)
                })
            }))]), $r("pixel:register", "start", {
                pixelId: c,
                source: u
            }), o.runtimeContext) {
                case w.Lax:
                case w.Strict:
                    try {
                        n = await async function(e, {
                            webPixelConfig: t,
                            eventBus: n,
                            customerPrivacyEventBus: r,
                            initData: o,
                            cookieRestrictedDomains: i,
                            pixelPath: s
                        }) {
                            const {
                                shopId: a,
                                storefrontBaseUrl: c
                            } = e, u = `web-pixel-sandbox-${t.type}-${t.id}-${t.runtimeContext}-${Zn}`;
                            if (t.runtimeContext === w.Lax && document.getElementById(u)) {
                                const e = new ja;
                                throw kr.notify(e, {
                                    type: "metric",
                                    pixelId: t.id,
                                    pixelType: t.type,
                                    runtimeContext: t.runtimeContext,
                                    shopId: a,
                                    context: "createWebPixelSandbox/alreadyCreatedError",
                                    userAgent: self.navigator.userAgent,
                                    hashVersionSandbox: Zn,
                                    sandboxUrl: self.location.href || "unknown",
                                    options: {
                                        sampleRate: .15
                                    }
                                }), e
                            }
                            let d, l;
                            switch (t.runtimeContext) {
                                case w.Strict:
                                    [d, l] = await async function({
                                        sandboxId: e,
                                        webPixelConfig: t,
                                        storefrontBaseUrl: n,
                                        pixelPath: r = Na.Wpm
                                    }) {
                                        const o = t.id,
                                            i = [Un(n), `/${r}`, `@${Zn}`, `/web-pixel-${o}`, `@${t.scriptVersion}`, "/sandbox", `/worker.${Qn}.js`].join(""),
                                            s = new Worker(i, {
                                                name: e,
                                                type: "classic",
                                                credentials: "omit"
                                            }),
                                            a = new Promise((e, t) => {
                                                const n = e => {
                                                    s.removeEventListener("error", n), t(e ? .filename && e ? .lineno && e ? .message ? new Ra(e.message, i) : new g(`Failed to load web worker for pixel ${o} with url ${i}}`, {
                                                        groupingHash: "WebPixelCreateWebWorkerSandbox:WebWorkerLoadError"
                                                    }))
                                                };
                                                s.addEventListener("error", n)
                                            });
                                        return [s, a]
                                    }({
                                        sandboxId: u,
                                        webPixelConfig: t,
                                        storefrontBaseUrl: c,
                                        pixelPath: s
                                    });
                                    break;
                                case w.Lax:
                                    [d, l] = await async function({
                                        sandboxId: e,
                                        webPixelConfig: t,
                                        storefrontBaseUrl: n,
                                        pixelPath: r = Na.Wpm
                                    }) {
                                        const {
                                            search: o
                                        } = self.location, i = t.id, s = t.type.toLowerCase(), a = [Un(n), `/${r}`, `@${Zn}`, `/${s}`, `/web-pixel-${i}`, `@${t.scriptVersion}`, "/sandbox", `/${Qn}`, /\.(js|json|xml)$/.test(self.location.pathname) ? "" : self.location.pathname, o].join(""), {
                                            iframe: c
                                        } = await vs({
                                            containerSpec: {
                                                id: "web-pixels-manager-sandbox-container",
                                                tagName: "div",
                                                styles: {
                                                    height: "0",
                                                    width: "0",
                                                    position: "fixed",
                                                    visibility: "hidden",
                                                    overflow: "hidden",
                                                    "z-index": "-100",
                                                    margin: "0",
                                                    padding: "0",
                                                    border: "0"
                                                },
                                                attributes: {
                                                    "aria-hidden": "true"
                                                },
                                                dataset: {
                                                    shopifyPrivacy: "exclude"
                                                }
                                            },
                                            iframeSpec: {
                                                id: e,
                                                src: a,
                                                privileges: ["allow-scripts", "allow-forms"],
                                                styles: {
                                                    height: "0",
                                                    width: "0",
                                                    visibility: "hidden"
                                                },
                                                attributes: {
                                                    "aria-hidden": "true"
                                                }
                                            }
                                        }), {
                                            promise: u,
                                            reject: d
                                        } = nr();
                                        let l;
                                        const p = () => {
                                            l = setTimeout(() => {
                                                d(new g(`Failed to load iframe for pixel ${i} with url ${a}`, {
                                                    groupingHash: "WebPixelCreateIframeSandbox:IframeLoadError"
                                                }))
                                            }, 1e3)
                                        };
                                        c.addEventListener("load", p);
                                        const h = Wi(c);
                                        return h.addEventListener("message", e => {
                                            "remote-ui::ready" === e.data && (clearTimeout(l), c.removeEventListener("load", p))
                                        }), [h, u]
                                    }({
                                        sandboxId: u,
                                        webPixelConfig: t,
                                        storefrontBaseUrl: c,
                                        pixelPath: s
                                    });
                                    break;
                                default:
                                    throw new g(`Unsupported runtime context: ${t.runtimeContext}`, {
                                        groupingHash: "WebPixelCreateSandbox:UnsupportedRuntimeContext"
                                    })
                            }
                            const p = ss(d, {
                                    callable: ["initialize"]
                                }),
                                h = Ca(e, {
                                    eventBus: n,
                                    customerPrivacyEventBus: r,
                                    webPixelConfig: t,
                                    initData: o,
                                    forRPC: !0
                                }),
                                f = Ks();
                            let m = {
                                status: "unknown",
                                hashVersion: "unknown",
                                sandboxUrl: "unknown"
                            };
                            const v = t.runtimeContext === w.Lax ? (Oa || (Oa = {
                                    localStorageItems: { ...self.localStorage
                                    },
                                    sessionStorageItems: { ...self.sessionStorage
                                    }
                                }), Oa) : {
                                    localStorageItems: {},
                                    sessionStorageItems: {}
                                },
                                y = [p.call.initialize({
                                    pageTitle: self.document.title,
                                    webPixelConfig: t,
                                    shopId: a,
                                    webPixelApi: h,
                                    cookieRestrictedDomains: i,
                                    cookie: Fr() ? ? "",
                                    origin: self.origin,
                                    referrer: self.document.referrer,
                                    ...v
                                }).then(e => {
                                    m = e
                                }).catch(e => {
                                    throw new Ua(e.toString(), e.stack ? ? "")
                                })];
                            if (l && y.push(l), await Promise.race(y), Zn !== m.hashVersion) {
                                const e = new g(`The main bundle hash (${Zn}) does not match the sandbox hash (${m.hashVersion})`, {
                                    groupingHash: "WebPixelCreateSandbox:HashMismatch"
                                });
                                throw kr.notify(e, {
                                    type: "metric",
                                    severity: "warning",
                                    pixelId: t.id,
                                    pixelType: t.type,
                                    runtimeContext: t.runtimeContext,
                                    context: "createSandbox/hashMismatch",
                                    shopId: a,
                                    userAgent: f.navigator.userAgent || self.navigator.userAgent,
                                    hashVersionSandbox: m.hashVersion,
                                    sandboxUrl: m.sandboxUrl
                                }), e
                            }
                            return !0
                        }(e, { ...t,
                            pixelPath: d
                        })
                    } catch (b) {
                        r = b, n = !1
                    }
                    break;
                case w.Open:
                    try {
                        n = await async function(e, {
                            webPixelConfig: t,
                            eventBus: n,
                            customerPrivacyEventBus: r,
                            initData: o,
                            pixelPath: i = Na.Wpm
                        }) {
                            const {
                                storefrontBaseUrl: s
                            } = e, {
                                promise: a,
                                resolve: c,
                                reject: u
                            } = nr(), {
                                id: d,
                                type: l,
                                integrityHash: p
                            } = t, h = `${d}-${l}`.toLowerCase();
                            Ma.set(h, () => ({
                                webPixelApi: Ca(e, {
                                    eventBus: n,
                                    customerPrivacyEventBus: r,
                                    webPixelConfig: t,
                                    initData: o,
                                    forRPC: !0
                                }),
                                resolve: c,
                                reject: u
                            }));
                            const f = [Un(s), `/${i}@${Zn}`, `/${t.type.toLocaleLowerCase()}`, `/web-pixel-${d}@${t.scriptVersion}`, "~2", `/pixel.${Qn}.js`].join("");
                            if (!self[Xn]) {
                                const e = new g(`${Xn} was not found on the global scope. ${Xn}.createShopifyExtend() was not exposed to the window.`, {
                                    groupingHash: "WebPixelOpen:GlobalObjectMissing",
                                    severity: "warning"
                                });
                                return kr.notify(e, {
                                    type: "metric",
                                    context: "createWebPixelOpen/globalObjectMissing",
                                    severity: "warning",
                                    unhandled: !1
                                }), u(e), a
                            }
                            if (!("createShopifyExtend" in self[Xn])) {
                                const e = (e, t) => {
                                    let n;
                                    try {
                                        n = document.currentScript ? .dataset || {}
                                    } catch (b) {
                                        n = {}, kr.notify(b, {
                                            type: "metric",
                                            context: "createWebPixel/createWebPixelOpen/createShopifyExtend",
                                            unhandled: !1
                                        })
                                    }
                                    let {
                                        pixelId: r,
                                        pixelType: o
                                    } = n;
                                    if (r && o || (r = e, o = t), !r || !o) return u(new g("No pixelId or pixelType found in script tag or params.", {
                                        groupingHash: "WebPixelOpen:NoPixelIdOrType"
                                    })), null;
                                    const i = `${r}-${o}`.toLowerCase(),
                                        s = Ma.get(i);
                                    if (!s) return u(new g(`No openPixelFn found for ${i}.`, {
                                        groupingHash: "WebPixelOpen:NoOpenPixelFn"
                                    })), null;
                                    const {
                                        resolve: a,
                                        reject: c,
                                        webPixelApi: d
                                    } = s();
                                    return d || c(new g(`No api found for pixel ${i}.`, {
                                        groupingHash: "WebPixelOpen:NoApiFound"
                                    })), Object.freeze({
                                        extend: (e, t) => {
                                            "WebPixel::Render" !== e && c(new Da(`Invalid extension point: ${e}`, {
                                                groupingHash: "WebPixelOpen:InvalidExtensionPoint"
                                            }));
                                            try {
                                                t.call(d, d), a(!0)
                                            } catch (b) {
                                                c(new g(b, {
                                                    groupingHash: "WebPixelOpen:PixelCallbackError"
                                                }))
                                            }
                                        }
                                    })
                                };
                                Mi(self[Xn], "createShopifyExtend", {
                                    value: e,
                                    enumerable: !1,
                                    writable: !1,
                                    configurable: !1
                                })
                            }
                            var m, v;
                            return await (m = f, v = e => {
                                e.dataset.pixelId = d, e.dataset.pixelType = l, p ? (e.integrity = p, e.crossOrigin = "anonymous") : kr.notify(new g(`Missing integrityHash for SRI-enabled open pixel of type ${l} with id ${d} and src ${f}`, {
                                    groupingHash: "WebPixelOpen:MissingIntegrityHash"
                                }), {
                                    type: "metric",
                                    context: "createWebPixelOpen/loadScript",
                                    severity: "warning",
                                    unhandled: !1
                                })
                            }, new Promise((e, t) => {
                                try {
                                    const n = document.createElement("script");
                                    n.src = m, n.async = !0, n.onload = () => {
                                        e()
                                    }, n.onerror = () => {
                                        r(), t(new g(`Failed to load script: ${m}`, {
                                            groupingHash: "WebPixelOpen:LoadScriptError"
                                        }))
                                    };
                                    const r = () => {
                                        n.onload = null, n.onerror = null, n.remove()
                                    };
                                    v && v(n);
                                    const o = document.head ? ? document.body ? ? document.documentElement;
                                    if (!o) return r(), void t(new g(`No DOM insertion target (head/body/documentElement) available to load script: ${m}`));
                                    o.appendChild(n)
                                } catch (b) {
                                    t(b)
                                }
                            })), a
                        }(e, { ...t,
                            pixelPath: d
                        })
                    } catch (b) {
                        r = b, n = !1
                    }
                    break;
                default:
                    {
                        const e = new g(`Invalid runtimeContext: ${o.runtimeContext}`, {
                            groupingHash: "WebPixel:InvalidRuntimeContext"
                        });
                        throw Ps.message("logPixelRegister", {
                            pixelUid: {
                                id: c,
                                type: o.type
                            },
                            status: "FAIL",
                            errorType: "PixelRegistrationError",
                            error: e
                        }),
                        e
                    }
            }
            const h = Os(o),
                {
                    measurement: f
                } = Dr("pixel:register", {
                    pixelId: c,
                    source: u
                });
            r && !n ? Ps.message("logPixelRegister", {
                pixelUid: {
                    id: c,
                    type: o.type
                },
                status: "FAIL",
                errorType: r instanceof Ua ? "PixelInitializationError" : "PixelRegistrationError",
                error: r
            }) : n && Ps.message("logPixelRegister", {
                pixelUid: {
                    id: c,
                    type: o.type
                },
                status: "SUCCESS"
            });
            const m = r ? "failed" : "registered",
                v = r ? r.message : void 0;
            return Xo("register", {
                version: Zn,
                pageUrl: self.location.href,
                shopId: s,
                surface: a,
                pixelId: c,
                pixelAppId: h,
                pixelSource: o.type,
                pixelRuntimeContext: o.runtimeContext,
                pixelScriptVersion: o.scriptVersion,
                pixelConfiguration: o ? .configuration,
                pixelEventSchemaVersion: o.eventPayloadVersion,
                pixelName: o.name,
                status: m,
                userCanBeTracked: it().toString(),
                bundleTarget: Qn,
                errorMsg: v,
                duration: f ? .duration,
                startTime: f ? .startTime,
                sessionId: Di()
            }), n
        }
        const La = new RegExp(["password", "pass", "pw", "ssn", "sin", "social", "security", "cc", "card", "creditcard", "cvv", "cvc", "cvn", "billing", "license", "health", "secret", "unique"].map(e => `^(.*[^a-z])?${e}([^a-z].*)?$`).join("|"), "i"),
            qa = function(e, {
                cache: t,
                cacheKey: n
            } = {}) {
                if ("function" != typeof queueMicrotask) return e;
                const r = t ? ? or();
                let o = !1;
                const i = sr(e, {
                    cache: r,
                    cacheKey: n
                });
                return function(...e) {
                    return o || (queueMicrotask(() => {
                        r.clear(), o = !1
                    }), o = !0), i(...e)
                }
            }(function(e) {
                return !!fs(e) && null !== e.closest('script, iframe, [data-shopify-privacy="exclude"]')
            }, {
                cacheKey: e => e
            }),
            Ba = ["id", "name", "type"],
            Va = (e, t) => ("value" in t && "string" == typeof t.value && (e => {
                if (!fs(e)) return !1;
                if ("redact" === e.dataset ? .shopifyPrivacy) return !0;
                for (const t of Ba) {
                    const n = e.getAttribute(t);
                    if ("string" == typeof n && La.test(n)) return !0
                }
                return !1
            })(e) && (t.value = "******"), t);

        function za(e, t, n) {
            if (t in e) try {
                const n = e[t],
                    r = typeof n;
                if ("string" === r || "number" === r || "boolean" === r) return n
            } catch (r) {
                kr.notify(r, {
                    context: "createDomEventsListener/getElementAttributes/getElementAttribute",
                    type: "metric"
                })
            }
            return e.getAttribute(t) ? ? n
        }

        function Fa(e, t, n) {
            const r = {};
            for (const o of t) {
                const t = za(e, o, n ? .[o]);
                void 0 !== t && (r[o] = t)
            }
            return Va(e, r), r
        }
        const Ha = {
                id: null,
                href: null,
                name: null,
                tagName: null,
                type: null,
                value: null
            },
            Wa = Object.keys(Ha);

        function Ka(e) {
            return Fa(e, Wa, Ha)
        }
        const Ya = ["screenX", "screenY", "pageX", "pageY", "clientX", "clientY", "offsetX", "offsetY", "movementX", "movementY"],
            Ja = Ya.reduce((e, t) => (e[t] = 0, e), {});
        let Xa = 0,
            Ga = new WeakMap;

        function Qa(e) {
            if (!e) return -1;
            let t = Ga.get(e);
            return void 0 === t && (t = Xa++, Ga.set(e, t)), t
        }
        let Za = new WeakMap;
        const ec = {
            parentSerializationId: -1,
            prevSiblingSerializationId: -1
        };

        function tc(e) {
            if (!e) return ec;
            let t = Za.get(e);
            if (void 0 === t) {
                let n = e.previousSibling;
                for (; n && qa(n);) n = n.previousSibling;
                t = {
                    parentSerializationId: Qa(e.parentNode),
                    prevSiblingSerializationId: Qa(n)
                }, nc(e, t)
            }
            return t
        }

        function nc(e, t) {
            Za.set(e, t)
        }

        function rc(e) {
            Za.delete(e)
        }

        function oc(e) {
            const t = e.nodeType;
            if (t === Node.ELEMENT_NODE) {
                const n = e,
                    r = {},
                    o = n.attributes;
                if (o)
                    for (let e = 0; e < o.length; e++) {
                        const t = o[e];
                        if (t) {
                            const e = t.name;
                            if (e in n) try {
                                const t = n[e],
                                    o = typeof t;
                                if ("string" === o || "number" === o || "boolean" === o) {
                                    r[e] = t;
                                    continue
                                }
                            } catch {}
                            r[e] = t.value
                        }
                    }
                if ("value" in n) try {
                    const e = n.value,
                        t = typeof e;
                    "string" !== t && "number" !== t && "boolean" !== t || (r.value = e)
                } catch {}
                Va(n, r);
                const i = n.getBoundingClientRect(),
                    s = {
                        nodeType: t,
                        serializationId: Qa(e),
                        attributes: r,
                        tagName: n.tagName,
                        clientRect: {
                            x: i.x,
                            y: i.y,
                            height: i.height,
                            width: i.width
                        },
                        scroll: {
                            x: n.scrollLeft,
                            y: n.scrollTop,
                            width: n.scrollWidth,
                            height: n.scrollHeight
                        }
                    };
                if (n instanceof HTMLInputElement && ("checkbox" === n.type || "radio" === n.type)) {
                    const e = n.getAttribute("checked");
                    null !== e && (r.checked = e), s.checked = n.checked
                }
                return s
            }
            if (t === Node.TEXT_NODE) return {
                nodeType: t,
                serializationId: Qa(e),
                textContent: e.textContent ? ? ""
            };
            if (t === Node.DOCUMENT_TYPE_NODE) {
                const n = e;
                return {
                    nodeType: t,
                    serializationId: Qa(e),
                    attributes: {
                        name: n.name,
                        publicId: n.publicId,
                        systemId: n.systemId
                    }
                }
            }
            return {
                nodeType: t,
                serializationId: Qa(e)
            }
        }

        function ic(e, t) {
            return {
                node: oc(t),
                ...Ja,
                ...Li(e, Ya)
            }
        }
        const sc = [HTMLInputElement, HTMLSelectElement, HTMLTextAreaElement, HTMLButtonElement],
            ac = ["id", "name", "tagName", "type", "value"];

        function cc(e) {
            return Fa(e, ac)
        }
        const uc = (e, t) => (n, {
                eventPrefix: r,
                onError: o
            }) => mn(window, e, i => {
                try {
                    const e = i ? .target;
                    if (!(e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement) || qa(e)) return;
                    r ? n(`${r}${t}`, {
                        node: oc(e)
                    }) : n(t, {
                        element: cc(e)
                    })
                } catch (s) {
                    o ? .(s, {
                        context: `createInputListenerFactory/${e}/${t}`,
                        type: "error",
                        unhandled: !1
                    })
                }
            }, {
                onError: o
            }),
            dc = uc("blur", "input_blurred"),
            lc = uc("focus", "input_focused"),
            pc = uc("change", "input_changed"),
            hc = ["action", "id"],
            fc = [dc, pc, (e, {
                eventPrefix: t,
                onError: n
            }) => mn(window, "click", n => {
                const r = n ? .target;
                if (!(r instanceof Element) || qa(r)) return;
                const o = t ? ic(n, r) : function(e, t) {
                    return {
                        element: Ka(t),
                        ...Ja,
                        ...Li(e, Ya)
                    }
                }(n, r);
                e(`${t??""}clicked`, o)
            }, {
                onError: n,
                throttleDelay: 50
            }), lc, (e, {
                eventPrefix: t,
                onError: n
            }) => mn(window, "submit", n => {
                const r = n ? .target;
                r instanceof HTMLFormElement && !qa(r) && (t ? e(`${t}form_submitted`, {
                    node: oc(r)
                }) : e("form_submitted", {
                    element: { ...Fa(r, hc),
                        elements: Array.from(r.elements).filter(e => sc.some(t => e instanceof t) && !qa(e)).map(e => cc(e))
                    }
                }))
            }, {
                onError: n
            })],
            mc = (e, t) => {
                const n = fc.map(n => {
                    try {
                        return n(e, t)
                    } catch (r) {
                        return t ? .onError ? .(r, {
                            context: "createDomEventsListener"
                        }), () => {}
                    }
                });
                return () => {
                    n.forEach(e => e())
                }
            };

        function vc(e, t, {
            onError: n
        }) {
            return mn(document, e, n => {
                if (!(n instanceof Event && n.type === e)) return;
                const r = n.target;
                if (!(r instanceof Element) || qa(r)) return;
                const o = oc(r);
                t("advanced_dom_clipboard", {
                    node: o,
                    action: n.type ? ? "copy"
                })
            }, {
                onError: n,
                throttleDelay: 100
            })
        }
        const gc = (e, t) => {
            const n = [],
                r = e.length;
            for (let o = 0; o < r; o++) {
                const r = e[o];
                r && !qa(r) && n.push(t(r))
            }
            return n
        };

        function yc(e) {
            const t = Qa(e),
                n = e.childNodes,
                r = [];
            let o = -1;
            const i = n.length;
            for (let s = 0; s < i; s++) {
                const e = n[s];
                if (!e || qa(e)) continue;
                const i = {
                    parentSerializationId: t,
                    prevSiblingSerializationId: o
                };
                nc(e, i), r.push({
                    node: oc(e),
                    children: yc(e),
                    ...i
                }), o = Qa(e)
            }
            return r
        }
        const bc = e => {
                const t = tc(e);
                return {
                    node: oc(e),
                    children: yc(e),
                    parentSerializationId: t.parentSerializationId,
                    prevSiblingSerializationId: t.prevSiblingSerializationId
                }
            },
            wc = [(e, {
                onError: t
            }) => {
                let n = null;
                return mn(window, "mousemove", t => {
                    if (!(t instanceof MouseEvent)) return;
                    const r = t ? .target;
                    if (!(r instanceof Element) || qa(r)) return;
                    const o = ic(t, r);
                    o.movementX = n ? t.screenX - n.screenX : 0, o.movementY = n ? t.screenY - n.screenY : 0, e("advanced_dom_mouse_moved", o), n = t
                }, {
                    onError: t,
                    throttleDelay: 50
                })
            }, (e, {
                onError: t
            }) => mn(window, "resize", t => {
                const n = t.view;
                n && e("advanced_dom_window_resized", {
                    innerHeight: n.innerHeight,
                    innerWidth: n.innerWidth
                })
            }, {
                onError: t,
                throttleDelay: 100
            }), (e, {
                onError: t
            }) => mn(window, "scroll", t => {
                if (!(t instanceof Event)) return;
                const n = t ? .target;
                let r;
                if (n instanceof Document) r = n.scrollingElement ? ? document.documentElement;
                else {
                    if (!(n instanceof Element)) return;
                    r = n
                }
                qa(r) || e("advanced_dom_scrolled", {
                    node: oc(r)
                })
            }, {
                onError: t,
                throttleDelay: 100
            }), (e, t) => {
                const n = [vc("cut", e, t), vc("paste", e, t), vc("copy", e, t)];
                return () => {
                    n.forEach(e => e())
                }
            }, (e, {
                onError: t
            }) => mn(document, "selectionchange", t => {
                const n = document.activeElement;
                n instanceof Element && !qa(n) && e("advanced_dom_selection_changed", {
                    node: oc(n)
                })
            }, {
                onError: t,
                throttleDelay: 250
            }), (e, {
                onError: t
            }) => {
                const n = () => {
                    e("advanced_dom_available", {
                        root: bc(document)
                    })
                };
                return "loading" !== document.readyState ? (n(), () => {}) : mn(window, "DOMContentLoaded", n, {
                    onError: t
                })
            }, (e, {
                onError: t
            }) => {
                const n = new MutationObserver(n => {
                        nn().then(() => {
                            n.forEach(t => {
                                if (qa(t.target)) return;
                                const n = gc(Array.from(t.addedNodes).filter(e => e.parentNode), bc),
                                    r = function(e) {
                                        if (0 === e.removedNodes.length) return [];
                                        if (qa(e.target)) return e.removedNodes.forEach(e => rc(e)), [];
                                        const t = Array.from(e.removedNodes).filter(e => {
                                            const {
                                                parentSerializationId: t
                                            } = tc(e);
                                            return -1 !== t || (rc(e), !1)
                                        });
                                        return gc(t, e => {
                                            const t = oc(e);
                                            return rc(e), t
                                        })
                                    }(t),
                                    o = [];
                                if ("attributes" === t.type) {
                                    const {
                                        target: e,
                                        attributeName: n
                                    } = t;
                                    n && e instanceof HTMLElement && t.oldValue !== e.getAttribute(n) && o.push(oc(t.target))
                                }
                                if ("characterData" === t.type) {
                                    const {
                                        target: e
                                    } = t;
                                    e instanceof Text && t.oldValue !== e.data && o.push(oc(e))
                                }
                                0 === n.length && 0 === r.length && 0 === o.length || e("advanced_dom_changed", {
                                    addedFragments: n,
                                    removedNodes: r,
                                    modifiedNodes: o
                                })
                            })
                        }).catch(e => {
                            t ? .(e, {
                                context: "createDomChangeListener/observer",
                                unhandled: !1
                            })
                        })
                    }),
                    r = () => {
                        n.observe(document.documentElement, {
                            attributes: !0,
                            attributeOldValue: !0,
                            childList: !0,
                            subtree: !0,
                            characterData: !0,
                            characterDataOldValue: !0
                        })
                    };
                if ("loading" !== document.readyState) return r(), () => {
                    n.disconnect()
                };
                const o = mn(window, "DOMContentLoaded", r, {
                    onError: t
                });
                return () => {
                    o(), n.disconnect()
                }
            }];
        class _c extends Error {
            constructor(...e) {
                super(...e), this.name = "VisitorError"
            }
        }
        const xc = {
            publish: () => !1,
            publishCustomEvent: () => !1,
            publishDomEvent: () => !1,
            visitor: () => !1,
            subscribe: () => () => !1
        };
        const Ic = (e, t, n) => {
            const r = (e.gates ? ? []).filter(e => !e.isOpen);
            if (0 === r.length) return void e.register(t);
            const o = {
                    remaining: r.length
                },
                i = [],
                s = () => {
                    if (o.remaining--, 0 === o.remaining) {
                        i.forEach(e => e());
                        try {
                            e.register(t)
                        } catch (r) {
                            n && n(r)
                        }
                    }
                };
            for (const a of r) i.push(a.onOpen(s))
        };
        class kc {
            constructor(e, {
                onError: t,
                bufferSize: n,
                replayKeep: r,
                registrationStrategy: o = Ic
            } = {}) {
                this.eventBus = void 0, this.eventBus = new zi({
                    subscribeAllKey: "*",
                    onSubscriberError: t,
                    bufferSize: n,
                    replayKeep: r
                }), this.eventBus.use((e, t, n, r) => {
                    Reflect.get(r, Vi) ? e({ ...n,
                        replayed: !0
                    }) : e()
                });
                const i = this.eventBus.subscribe.bind(this.eventBus);
                e.forEach(e => {
                    try {
                        o(e, i, t)
                    } catch (n) {
                        t ? t(n) : console ? .error("Error registering event hub adapter:", n)
                    }
                })
            }
            emit(e, t) {
                this.eventBus.publish(e, {
                    id: qt(),
                    name: e,
                    timestamp: (new Date).valueOf(),
                    payload: t
                })
            }
        }

        function Ec(e, t) {
            return e.gates = [...e.gates ? ? [], ...t], e
        }
        var Sc = yn("open"),
            Pc = yn("callbacks");
        class Tc {
            constructor(e, t) {
                Object.defineProperty(this, Sc, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Pc, {
                    writable: !0,
                    value: new Set
                }), vn(this, Sc)[Sc] = e(), vn(this, Sc)[Sc] || t(() => {
                    !vn(this, Sc)[Sc] && e() && (vn(this, Sc)[Sc] = !0, vn(this, Pc)[Pc].forEach(e => e()), vn(this, Pc)[Pc].clear())
                })
            }
            get isOpen() {
                return vn(this, Sc)[Sc]
            }
            onOpen(e) {
                return vn(this, Sc)[Sc] ? (e(), () => {}) : (vn(this, Pc)[Pc].add(e), () => {
                    vn(this, Pc)[Pc].delete(e)
                })
            }
        }
        class Ac extends Tc {
            constructor(e, t) {
                super(t ? ? (() => e.analyticsProcessingAllowed() || e.marketingAllowed()), t => e.onConsentCollected(t))
            }
        }
        var Cc = yn("consent"),
            Oc = yn("notify"),
            Nc = yn("snapshot"),
            Rc = yn("check"),
            jc = yn("read"),
            Uc = yn("matchesSnapshot");
        class Dc {
            constructor(e, t) {
                Object.defineProperty(this, Uc, {
                    value: Lc
                }), Object.defineProperty(this, jc, {
                    value: $c
                }), Object.defineProperty(this, Rc, {
                    value: Mc
                }), Object.defineProperty(this, Cc, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Oc, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Nc, {
                    writable: !0,
                    value: void 0
                }), vn(this, Cc)[Cc] = e, vn(this, Oc)[Oc] = t, vn(this, Nc)[Nc] = vn(this, jc)[jc]()
            }
            register(e) {
                vn(this, Cc)[Cc].onConsentCollected(() => {
                    vn(this, Nc)[Nc] = vn(this, jc)[jc]()
                }), e("*", () => vn(this, Rc)[Rc]())
            }
        }

        function Mc() {
            const e = vn(this, jc)[jc]();
            vn(this, Uc)[Uc](e) || (vn(this, Oc)[Oc](new CustomEvent(pe, {
                detail: e
            })), vn(this, Nc)[Nc] = e)
        }

        function $c() {
            const e = vn(this, Cc)[Cc].marketingAllowed(),
                t = vn(this, Cc)[Cc].saleOfDataAllowed();
            return {
                analyticsAllowed: vn(this, Cc)[Cc].analyticsProcessingAllowed(),
                marketingAllowed: e,
                preferencesAllowed: vn(this, Cc)[Cc].preferencesProcessingAllowed(),
                saleOfDataAllowed: t,
                firstPartyMarketingAllowed: e,
                thirdPartyMarketingAllowed: t
            }
        }

        function Lc(e) {
            return e.analyticsAllowed === vn(this, Nc)[Nc].analyticsAllowed && e.marketingAllowed === vn(this, Nc)[Nc].marketingAllowed && e.preferencesAllowed === vn(this, Nc)[Nc].preferencesAllowed && e.saleOfDataAllowed === vn(this, Nc)[Nc].saleOfDataAllowed
        }
        var qc = yn("monorailClient"),
            Bc = yn("options"),
            Vc = yn("produce");
        class zc {
            constructor(e, t) {
                Object.defineProperty(this, Vc, {
                    value: Fc
                }), Object.defineProperty(this, qc, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Bc, {
                    writable: !0,
                    value: void 0
                }), vn(this, qc)[qc] = e, vn(this, Bc)[Bc] = t
            }
            register(e) {
                e("log:visitor:reported", ({
                    payload: {
                        event: e
                    }
                }) => {
                    vn(this, Vc)[Vc](e)
                })
            }
        }

        function Fc(e) {
            vn(this, qc)[qc].produce("web_pixels_manager_visitor/1.0", {
                email: e.email,
                phone: e.phone,
                customerId: e.customerId,
                apiClientId: e.apiClientId,
                clientId: $i(),
                shopId: vn(this, Bc)[Bc].shopId,
                version: Zn,
                pageUrl: vn(this, Bc)[Bc].pageUrl,
                surface: vn(this, Bc)[Bc].surface
            })
        }
        var Hc = yn("collector"),
            Wc = yn("options"),
            Kc = yn("produce");
        class Yc {
            constructor(e, t) {
                Object.defineProperty(this, Kc, {
                    value: Jc
                }), Object.defineProperty(this, Hc, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Wc, {
                    writable: !0,
                    value: void 0
                }), vn(this, Hc)[Hc] = e, vn(this, Wc)[Wc] = t
            }
            register(e) {
                e("log:visitor:reported", ({
                    payload: {
                        event: e
                    }
                }) => {
                    vn(this, Kc)[Kc](e)
                })
            }
        }

        function Jc(e) {
            const t = {
                "@type": "type.googleapis.com/shopify.buyer_activity.WebPixelsManagerVisitorApiEvent",
                version: Zn,
                surface: vn(this, Wc)[Wc].surface
            };
            vn(this, Hc)[Hc].produce(t, {
                apiClientId: e.apiClientId,
                userContext: {
                    email: e.email,
                    phone: e.phone,
                    customerId: e.customerId
                }
            })
        }

        function Xc(e, t) {
            return Boolean(t && t !== String(e))
        }
        const Gc = "storefront_product_interaction_event_test/1.2",
            Qc = {
                impression: {
                    local: "product_viewable_impression",
                    remote: "remote_product_viewable_impression"
                },
                click: {
                    local: "product_clicked",
                    remote: "remote_product_clicked"
                }
            };

        function Zc(e, t) {
            return Qc[e][t ? "remote" : "local"]
        }

        function eu(e) {
            return e ? "remote_product_hovered" : "product_hovered"
        }

        function tu(e, t) {
            return e.top >= 0 && e.top + e.height / 2 < t.height
        }

        function nu(e, t) {
            return e ? "ORIGIN_PRODUCT_NETWORK" : t ? "ORIGIN_COLLECTIVE" : "ORIGIN_ORGANIC"
        }
        const ru = /^\d{1,19}$/;

        function ou(e) {
            return void 0 !== e && function(e) {
                return ru.test(String(e))
            }(e) && !/^0+$/.test(String(e))
        }

        function iu({
            shopId: e,
            themeId: t,
            themePublished: n
        }, r) {
            const {
                productId: o,
                remoteShopId: i,
                adResponseId: s,
                collectionId: a,
                variantId: c,
                pageType: u
            } = r;
            return void 0 === t || void 0 === n ? {
                accepted: !1,
                reason: "missing-theme-context"
            } : u ? void 0 === o ? {
                accepted: !1,
                reason: "missing-product-id"
            } : ou(o) ? a && !ou(a) ? {
                accepted: !1,
                reason: "invalid-collection-id"
            } : void 0 === c || ou(c) ? Xc(e, i) ? ou(i) ? s ? {
                accepted: !0,
                remote: !0,
                remoteShopId: i,
                adResponseId: s
            } : {
                accepted: !1,
                reason: "missing-ad-response-id"
            } : {
                accepted: !1,
                reason: "invalid-remote-shop-id"
            } : {
                accepted: !0,
                remote: !1
            } : {
                accepted: !1,
                reason: "invalid-variant-id"
            } : {
                accepted: !1,
                reason: "invalid-product-id"
            } : {
                accepted: !1,
                reason: "missing-page-context"
            }
        }
        var su = yn("monorailClient"),
            au = yn("options"),
            cu = yn("produce");
        class uu {
            constructor(e, t) {
                Object.defineProperty(this, cu, {
                    value: du
                }), Object.defineProperty(this, su, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, au, {
                    writable: !0,
                    value: void 0
                }), vn(this, su)[su] = e, vn(this, au)[au] = t
            }
            register(e) {
                e("log:buyer-behavior:product-interaction", ({
                    id: e,
                    payload: {
                        interaction: t,
                        event: n,
                        viewport: r
                    }
                }) => {
                    vn(this, cu)[cu](e, t, n, r)
                })
            }
        }

        function du(e, t, n, r) {
            if (iu(vn(this, au)[au], n).accepted) return;
            const o = Xc(vn(this, au)[au].shopId, n.remoteShopId),
                i = Zc(t, o),
                {
                    consent: s
                } = vn(this, au)[au];
            vn(this, su)[su].produce(Gc, {
                eventId: e,
                source: "EVENT_APP_STOREFRONT",
                shopId: vn(this, au)[au].shopId,
                eventName: i,
                pageUrl: vn(this, au)[au].pageUrl,
                pageId: vn(this, au)[au].pageId,
                pageType: n.pageType,
                productId: n.productId,
                variantId: n.variantId,
                apiClientId: vn(this, au)[au].apiClientId,
                themeId: vn(this, au)[au].themeId,
                themeStoreId: vn(this, au)[au].themeStoreId,
                themePublished: vn(this, au)[au].themePublished,
                remoteShopId: n.remoteShopId,
                origin: nu(o, n.isCollective),
                impressionId: n.impressionId,
                placement: n.placement,
                position: n.position,
                aboveFold: tu(n.rect, r),
                collectionId: n.collectionId,
                analyticsAllowed: s.analyticsProcessingAllowed(),
                marketingAllowed: s.marketingAllowed(),
                preferencesAllowed: s.preferencesProcessingAllowed(),
                saleOfDataAllowed: s.saleOfDataAllowed(),
                visitToken: s.trackingTokens.getVisitToken(),
                uniqueToken: s.trackingTokens.getUniqueToken()
            }), vn(this, au)[au].onEmission ? .({
                eventName: i,
                schemaId: Gc
            })
        }

        function lu({
            themeId: e,
            themeStoreId: t,
            themePublished: n
        }) {
            if (void 0 !== e || void 0 !== t || void 0 !== n) return { ...void 0 !== e && {
                    themeId: _i(e)
                },
                ...void 0 !== t && {
                    themeStoreId: String(t)
                },
                ...void 0 !== n && {
                    themePublished: n
                }
            }
        }
        const pu = {
            collection: "PLACEMENT_TYPE_COLLECTION",
            search: "PLACEMENT_TYPE_SEARCH",
            recommendations: "PLACEMENT_TYPE_RECOMMENDATIONS",
            other: "PLACEMENT_TYPE_OTHER"
        };

        function hu({
            shopId: e,
            themeId: t,
            themeStoreId: n,
            themePublished: r,
            pageUrl: o
        }, i) {
            const s = function(e, t, n) {
                    if ("search" === e) {
                        if (t === vu) {
                            const e = function(e) {
                                if (e) try {
                                    const t = new URL(e).searchParams.get("q") ? .trim();
                                    return t || void 0
                                } catch {
                                    return
                                }
                            }(n);
                            return {
                                searchType: "SEARCH_TYPE_SEARCH_PAGE",
                                ...void 0 !== e && {
                                    searchQuery: e
                                }
                            }
                        }
                        return {
                            searchType: "SEARCH_TYPE_TYPEAHEAD"
                        }
                    }
                }(i.placement, i.pageType, o),
                a = void 0 === t ? void 0 : lu({
                    themeId: t,
                    themeStoreId: n,
                    themePublished: r
                });
            return { ...void 0 !== i.pageType && {
                    pageContext: {
                        pageType: i.pageType
                    }
                },
                ...void 0 !== a && {
                    themeContext: a
                },
                product: mu({
                    shopId: e,
                    productId: i.productId,
                    variantId: i.variantId
                }),
                ...i.collectionId && {
                    collection: {
                        shopId: _i(e),
                        collectionId: _i(i.collectionId)
                    }
                },
                placementContext: {
                    placement: (c = i.placement, pu[c] ? ? "PLACEMENT_TYPE_UNSPECIFIED"),
                    ...void 0 !== i.position && {
                        position: i.position
                    },
                    ...void 0 !== i.totalProducts && {
                        totalProducts: i.totalProducts
                    },
                    ...void 0 !== i.aboveFold && {
                        aboveFold: i.aboveFold
                    }
                },
                ...void 0 !== s && {
                    searchContext: s
                },
                origin: nu(Xc(e, i.remoteShopId), i.isCollective),
                ...void 0 !== i.impressionId && {
                    impressionId: i.impressionId
                }
            };
            var c
        }

        function fu(e, t) {
            return { ...hu(e, t),
                product: mu({
                    shopId: t.remoteShopId,
                    productId: t.productId,
                    variantId: t.variantId
                }),
                adContext: {
                    responseId: t.adResponseId,
                    publisherShopId: _i(e.shopId),
                    advertiserShopId: _i(t.remoteShopId)
                }
            }
        }

        function mu({
            shopId: e,
            productId: t,
            variantId: n
        }) {
            return {
                shopId: _i(e),
                ...void 0 !== t && {
                    productId: _i(t)
                },
                ...void 0 !== n && {
                    variantId: _i(n)
                }
            }
        }
        const vu = "searchresults";
        var gu = yn("collector"),
            yu = yn("options"),
            bu = yn("produceOrganic"),
            wu = yn("produceRemote"),
            _u = yn("produceImpression"),
            xu = yn("produceClick"),
            Iu = yn("produceHover"),
            ku = yn("produceRemoteHover");
        class Eu {
            constructor(e, t) {
                Object.defineProperty(this, ku, {
                    value: Ou
                }), Object.defineProperty(this, Iu, {
                    value: Cu
                }), Object.defineProperty(this, xu, {
                    value: Au
                }), Object.defineProperty(this, _u, {
                    value: Tu
                }), Object.defineProperty(this, wu, {
                    value: Pu
                }), Object.defineProperty(this, bu, {
                    value: Su
                }), Object.defineProperty(this, gu, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, yu, {
                    writable: !0,
                    value: void 0
                }), vn(this, gu)[gu] = e, vn(this, yu)[yu] = t
            }
            register(e) {
                e("log:buyer-behavior:product-interaction", ({
                    id: e,
                    payload: {
                        interaction: t,
                        event: n,
                        viewport: r
                    }
                }) => {
                    const o = Zc(t, Xc(vn(this, yu)[yu].shopId, n.remoteShopId)),
                        i = iu(vn(this, yu)[yu], n);
                    i.accepted ? i.remote ? vn(this, wu)[wu](e, o, t, n, r, i) : vn(this, bu)[bu](e, o, t, n, r) : vn(this, yu)[yu].onValidationError ? .({
                        eventName: o,
                        reason: i.reason
                    })
                }), vn(this, yu)[yu].hoversEnabled && e("log:buyer-behavior:product-hover", ({
                    id: e,
                    payload: {
                        event: t,
                        viewport: n
                    }
                }) => {
                    const r = eu(Xc(vn(this, yu)[yu].shopId, t.remoteShopId)),
                        o = iu(vn(this, yu)[yu], t);
                    o.accepted ? (o.remote ? vn(this, ku)[ku](e, t, n, o) : vn(this, Iu)[Iu](e, t, n), vn(this, yu)[yu].onEmission ? .({
                        eventName: r
                    })) : vn(this, yu)[yu].onValidationError ? .({
                        eventName: r,
                        reason: o.reason
                    })
                })
            }
        }

        function Su(e, t, n, r, o) {
            "impression" === n ? vn(this, _u)[_u](e, r, o) : vn(this, xu)[xu](e, r, o), vn(this, yu)[yu].onEmission ? .({
                eventName: t
            })
        }

        function Pu(e, t, n, r, o, {
            remoteShopId: i,
            adResponseId: s
        }) {
            const a = fu(vn(this, yu)[yu], { ...r,
                remoteShopId: i,
                adResponseId: s,
                aboveFold: tu(r.rect, o)
            });
            "impression" === n ? vn(this, gu)[gu].produce({
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontRemoteProductViewableImpressionEvent",
                ...a
            }, {
                clientMessageId: e
            }) : vn(this, gu)[gu].produce({
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontRemoteProductClickedEvent",
                ...a
            }, {
                clientMessageId: e
            }), vn(this, yu)[yu].onEmission ? .({
                eventName: t
            })
        }

        function Tu(e, t, n) {
            const r = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontProductViewableImpressionEvent",
                ...hu(vn(this, yu)[yu], { ...t,
                    aboveFold: tu(t.rect, n)
                })
            };
            vn(this, gu)[gu].produce(r, {
                clientMessageId: e
            })
        }

        function Au(e, t, n) {
            const r = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontProductClickedEvent",
                ...hu(vn(this, yu)[yu], { ...t,
                    aboveFold: tu(t.rect, n)
                })
            };
            vn(this, gu)[gu].produce(r, {
                clientMessageId: e
            })
        }

        function Cu(e, t, n) {
            const r = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontProductHoveredEvent",
                ...hu(vn(this, yu)[yu], { ...t,
                    aboveFold: tu(t.rect, n)
                })
            };
            vn(this, gu)[gu].produce(r, {
                clientMessageId: e
            })
        }

        function Ou(e, t, n, {
            remoteShopId: r,
            adResponseId: o
        }) {
            const i = fu(vn(this, yu)[yu], { ...t,
                remoteShopId: r,
                adResponseId: o,
                aboveFold: tu(t.rect, n)
            });
            vn(this, gu)[gu].produce({
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontRemoteProductHoveredEvent",
                ...i
            }, {
                clientMessageId: e
            })
        }
        var Nu = yn("monorailClient"),
            Ru = yn("options"),
            ju = yn("produce");
        class Uu {
            constructor(e, t) {
                Object.defineProperty(this, ju, {
                    value: Du
                }), Object.defineProperty(this, Nu, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Ru, {
                    writable: !0,
                    value: void 0
                }), vn(this, Nu)[Nu] = e, vn(this, Ru)[Ru] = t
            }
            register(e) {
                e("log:buyer-behavior:product-hover", ({
                    id: e,
                    payload: {
                        event: t,
                        viewport: n
                    }
                }) => {
                    vn(this, ju)[ju](e, t, n)
                })
            }
        }

        function Du(e, t, n) {
            if (iu(vn(this, Ru)[Ru], t).accepted) return;
            const r = Xc(vn(this, Ru)[Ru].shopId, t.remoteShopId),
                o = eu(r),
                {
                    consent: i
                } = vn(this, Ru)[Ru];
            vn(this, Nu)[Nu].produce(Gc, {
                eventId: e,
                source: "EVENT_APP_STOREFRONT",
                shopId: vn(this, Ru)[Ru].shopId,
                eventName: o,
                pageUrl: vn(this, Ru)[Ru].pageUrl,
                pageId: vn(this, Ru)[Ru].pageId,
                pageType: t.pageType,
                productId: t.productId,
                variantId: t.variantId,
                apiClientId: vn(this, Ru)[Ru].apiClientId,
                themeId: vn(this, Ru)[Ru].themeId,
                themeStoreId: vn(this, Ru)[Ru].themeStoreId,
                themePublished: vn(this, Ru)[Ru].themePublished,
                remoteShopId: t.remoteShopId,
                origin: nu(r, t.isCollective),
                impressionId: t.impressionId,
                placement: t.placement,
                position: t.position,
                aboveFold: tu(t.rect, n),
                collectionId: t.collectionId,
                analyticsAllowed: i.analyticsProcessingAllowed(),
                marketingAllowed: i.marketingAllowed(),
                preferencesAllowed: i.preferencesProcessingAllowed(),
                saleOfDataAllowed: i.saleOfDataAllowed(),
                visitToken: i.trackingTokens.getVisitToken(),
                uniqueToken: i.trackingTokens.getUniqueToken()
            }), vn(this, Ru)[Ru].onEmission ? .({
                eventName: o,
                schemaId: Gc
            })
        }
        const Mu = "storefront_product_interaction_event_test/1.2";

        function $u(e, t) {
            const {
                shopId: n,
                themeId: r,
                themePublished: o,
                pageType: i,
                resourceId: s
            } = e;
            if (void 0 === r || void 0 === o) return {
                accepted: !1,
                reason: "missing-theme-context"
            };
            if (!Number.isFinite(t.dwellMilliseconds) || t.dwellMilliseconds <= 0) return {
                accepted: !1,
                reason: "invalid-dwell-duration"
            };
            if (i === jt.Product) {
                const {
                    variantId: e,
                    remoteShopId: i
                } = t;
                return ou(s) ? ou(e) ? Xc(n, i) ? ou(i) ? {
                    accepted: !0,
                    themeId: r,
                    themePublished: o,
                    variant: "remote-product",
                    productId: s,
                    variantId: e,
                    remoteShopId: i
                } : {
                    accepted: !1,
                    reason: "invalid-remote-shop-id"
                } : {
                    accepted: !0,
                    themeId: r,
                    themePublished: o,
                    variant: "product",
                    productId: s,
                    variantId: e
                } : {
                    accepted: !1,
                    reason: "invalid-variant-id"
                } : {
                    accepted: !1,
                    reason: "invalid-product-id"
                }
            }
            return s && !ou(s) ? {
                accepted: !1,
                reason: "invalid-collection-id"
            } : {
                accepted: !0,
                themeId: r,
                themePublished: o,
                variant: "collection"
            }
        }
        const Lu = {
            [jt.Product]: "product_page_dwelled",
            [jt.Collection]: "collection_page_dwelled"
        };
        var qu = yn("monorailClient"),
            Bu = yn("options"),
            Vu = yn("handle");
        class zu {
            constructor(e, t) {
                Object.defineProperty(this, Vu, {
                    value: Fu
                }), Object.defineProperty(this, qu, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Bu, {
                    writable: !0,
                    value: void 0
                }), vn(this, qu)[qu] = e, vn(this, Bu)[Bu] = t
            }
            register(e) {
                e("log:buyer-behavior:page-dwell", ({
                    id: e,
                    payload: {
                        event: t
                    }
                }) => {
                    vn(this, Vu)[Vu](e, t)
                })
            }
        }

        function Fu(e, t) {
            if ($u(vn(this, Bu)[Bu], t).accepted) return;
            const {
                consent: n,
                pageType: r,
                resourceId: o
            } = vn(this, Bu)[Bu], i = r === jt.Product && Xc(vn(this, Bu)[Bu].shopId, t.remoteShopId) ? "remote_product_page_dwelled" : Lu[r];
            vn(this, qu)[qu].produce(Mu, {
                eventId: e,
                source: "EVENT_APP_STOREFRONT",
                shopId: vn(this, Bu)[Bu].shopId,
                eventName: i,
                pageUrl: vn(this, Bu)[Bu].pageUrl,
                pageId: vn(this, Bu)[Bu].pageId,
                pageType: r,
                productId: r === jt.Product ? o : void 0,
                variantId: t.variantId,
                collectionId: r === jt.Collection ? o : void 0,
                remoteShopId: t.remoteShopId,
                apiClientId: vn(this, Bu)[Bu].apiClientId,
                themeId: vn(this, Bu)[Bu].themeId,
                themeStoreId: vn(this, Bu)[Bu].themeStoreId,
                themePublished: vn(this, Bu)[Bu].themePublished,
                dwellMilliseconds: t.dwellMilliseconds,
                analyticsAllowed: n.analyticsProcessingAllowed(),
                marketingAllowed: n.marketingAllowed(),
                preferencesAllowed: n.preferencesProcessingAllowed(),
                saleOfDataAllowed: n.saleOfDataAllowed(),
                visitToken: n.trackingTokens.getVisitToken(),
                uniqueToken: n.trackingTokens.getUniqueToken()
            }), vn(this, Bu)[Bu].onEmission ? .({
                eventName: i,
                schemaId: Mu
            })
        }

        function Hu(e, t) {
            return {
                pageContext: {
                    pageType: e.pageType
                },
                themeContext: Yu(e),
                product: {
                    shopId: _i(e.shopId),
                    productId: _i(t.productId),
                    variantId: _i(t.variantId)
                },
                dwellTimeMs: t.dwellMilliseconds
            }
        }

        function Wu(e, t) {
            return {
                pageContext: {
                    pageType: e.pageType
                },
                themeContext: Yu(e),
                collection: {
                    shopId: _i(e.shopId),
                    ...t.collectionId && {
                        collectionId: _i(t.collectionId)
                    }
                },
                dwellTimeMs: t.dwellMilliseconds
            }
        }

        function Ku(e, t) {
            const n = Hu(e, t);
            return { ...n,
                product: { ...n.product,
                    shopId: _i(t.remoteShopId)
                },
                adContext: {
                    publisherShopId: _i(e.shopId),
                    advertiserShopId: _i(t.remoteShopId),
                    ...void 0 !== t.adResponseId && {
                        responseId: t.adResponseId
                    }
                }
            }
        }

        function Yu({
            themeId: e,
            themeStoreId: t,
            themePublished: n
        }) {
            return {
                themeId: _i(e),
                ...void 0 !== t && {
                    themeStoreId: String(t)
                },
                themePublished: n
            }
        }
        var Ju = yn("collector"),
            Xu = yn("options"),
            Gu = yn("handle"),
            Qu = yn("eventName"),
            Zu = yn("produce");
        class ed {
            constructor(e, t) {
                Object.defineProperty(this, Zu, {
                    value: rd
                }), Object.defineProperty(this, Qu, {
                    value: nd
                }), Object.defineProperty(this, Gu, {
                    value: td
                }), Object.defineProperty(this, Ju, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Xu, {
                    writable: !0,
                    value: void 0
                }), vn(this, Ju)[Ju] = e, vn(this, Xu)[Xu] = t
            }
            register(e) {
                e("log:buyer-behavior:page-dwell", ({
                    id: e,
                    payload: {
                        event: t
                    }
                }) => {
                    vn(this, Gu)[Gu](e, t)
                })
            }
        }

        function td(e, t) {
            const n = Xc(vn(this, Xu)[Xu].shopId, t.remoteShopId),
                r = vn(this, Qu)[Qu](n),
                o = $u(vn(this, Xu)[Xu], t);
            if (!o.accepted) return void vn(this, Xu)[Xu].onValidationError ? .({
                eventName: r,
                reason: o.reason
            });
            const i = {
                    shopId: vn(this, Xu)[Xu].shopId,
                    themeId: o.themeId,
                    themeStoreId: vn(this, Xu)[Xu].themeStoreId,
                    themePublished: o.themePublished,
                    pageType: vn(this, Xu)[Xu].pageType
                },
                {
                    dwellMilliseconds: s
                } = t;
            "product" === o.variant ? vn(this, Zu)[Zu](e, r, {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontProductPageDwelledEvent",
                ...Hu(i, {
                    productId: o.productId,
                    variantId: o.variantId,
                    dwellMilliseconds: s
                })
            }) : "remote-product" === o.variant ? vn(this, Zu)[Zu](e, r, {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontRemoteProductPageDwelledEvent",
                ...Ku(i, {
                    productId: o.productId,
                    variantId: o.variantId,
                    remoteShopId: o.remoteShopId,
                    adResponseId: t.adResponseId,
                    dwellMilliseconds: s
                })
            }) : vn(this, Zu)[Zu](e, r, {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontCollectionPageDwelledEvent",
                ...Wu(i, {
                    collectionId: vn(this, Xu)[Xu].resourceId,
                    dwellMilliseconds: s
                })
            })
        }

        function nd(e) {
            return vn(this, Xu)[Xu].pageType === jt.Product ? e ? "remote_product_page_dwelled" : "product_page_dwelled" : "collection_page_dwelled"
        }

        function rd(e, t, n) {
            vn(this, Ju)[Ju].produce(n, {
                clientMessageId: e
            }), vn(this, Xu)[Xu].onEmission ? .({
                eventName: t
            })
        }
        const od = "storefront_product_interaction_event_test/1.2",
            id = "product_quantity_changed",
            sd = "remote_product_quantity_changed";

        function ad({
            shopId: e,
            productId: t,
            pageUrl: n,
            themeId: r,
            themePublished: o
        }, i) {
            const {
                remoteShopId: s,
                variantId: a
            } = i;
            if (void 0 === r || void 0 === o) return {
                accepted: !1,
                reason: "missing-theme-context"
            };
            if (!ou(t)) return {
                accepted: !1,
                reason: "invalid-product-id"
            };
            if (void 0 !== a && !ou(a)) return {
                accepted: !1,
                reason: "invalid-variant-id"
            };
            if (!Xc(e, s)) return {
                accepted: !0,
                remote: !1
            };
            if (!ou(s)) return {
                accepted: !1,
                reason: "invalid-remote-shop-id"
            };
            const c = Vt(n) ? .adResponseId;
            return c ? {
                accepted: !0,
                remote: !0,
                remoteShopId: s,
                adResponseId: c
            } : {
                accepted: !1,
                reason: "missing-ad-response-id"
            }
        }
        var cd = yn("monorailClient"),
            ud = yn("options"),
            dd = yn("handle");
        class ld {
            constructor(e, t) {
                Object.defineProperty(this, dd, {
                    value: pd
                }), Object.defineProperty(this, cd, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ud, {
                    writable: !0,
                    value: void 0
                }), vn(this, cd)[cd] = e, vn(this, ud)[ud] = t
            }
            register(e) {
                e("log:buyer-behavior:product-quantity-change", ({
                    id: e,
                    payload: {
                        interaction: t,
                        event: n
                    }
                }) => {
                    "quantity" === t && vn(this, dd)[dd](e, n)
                })
            }
        }

        function pd(e, t) {
            if (ad(vn(this, ud)[ud], t).accepted) return;
            const n = Xc(vn(this, ud)[ud].shopId, t.remoteShopId) ? sd : id,
                {
                    consent: r
                } = vn(this, ud)[ud];
            vn(this, cd)[cd].produce(od, {
                eventId: e,
                source: "EVENT_APP_STOREFRONT",
                shopId: vn(this, ud)[ud].shopId,
                eventName: n,
                pageUrl: vn(this, ud)[ud].pageUrl,
                pageId: vn(this, ud)[ud].pageId,
                pageType: jt.Product,
                productId: vn(this, ud)[ud].productId,
                variantId: t.variantId,
                remoteShopId: t.remoteShopId,
                apiClientId: vn(this, ud)[ud].apiClientId,
                themeId: vn(this, ud)[ud].themeId,
                themeStoreId: vn(this, ud)[ud].themeStoreId,
                themePublished: vn(this, ud)[ud].themePublished,
                quantity: t.quantity,
                analyticsAllowed: r.analyticsProcessingAllowed(),
                marketingAllowed: r.marketingAllowed(),
                preferencesAllowed: r.preferencesProcessingAllowed(),
                saleOfDataAllowed: r.saleOfDataAllowed(),
                visitToken: r.trackingTokens.getVisitToken(),
                uniqueToken: r.trackingTokens.getUniqueToken()
            }), vn(this, ud)[ud].onEmission ? .({
                eventName: n,
                schemaId: od
            })
        }

        function hd({
            shopId: e,
            productId: t,
            pageType: n,
            themeId: r,
            themeStoreId: o,
            themePublished: i
        }, {
            quantity: s,
            variantId: a
        }) {
            return { ...void 0 !== n && {
                    pageContext: {
                        pageType: n
                    }
                },
                ...void 0 !== r && {
                    themeContext: {
                        themeId: _i(r),
                        ...void 0 !== o && {
                            themeStoreId: String(o)
                        },
                        ...void 0 !== i && {
                            themePublished: i
                        }
                    }
                },
                product: md({
                    shopId: e,
                    productId: t,
                    variantId: a
                }),
                quantity: s
            }
        }

        function fd(e, t) {
            return { ...hd(e, t),
                product: md({
                    shopId: t.remoteShopId,
                    productId: e.productId,
                    variantId: t.variantId
                }),
                adContext: {
                    responseId: t.adResponseId,
                    publisherShopId: _i(e.shopId),
                    advertiserShopId: _i(t.remoteShopId)
                }
            }
        }

        function md({
            shopId: e,
            productId: t,
            variantId: n
        }) {
            return {
                shopId: _i(e),
                productId: _i(t),
                ...void 0 !== n && {
                    variantId: _i(n)
                }
            }
        }
        var vd = yn("collector"),
            gd = yn("options"),
            yd = yn("produce"),
            bd = yn("produceRemote");
        class wd {
            constructor(e, t) {
                Object.defineProperty(this, bd, {
                    value: xd
                }), Object.defineProperty(this, yd, {
                    value: _d
                }), Object.defineProperty(this, vd, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, gd, {
                    writable: !0,
                    value: void 0
                }), vn(this, vd)[vd] = e, vn(this, gd)[gd] = t
            }
            register(e) {
                e("log:buyer-behavior:product-quantity-change", ({
                    id: e,
                    payload: {
                        interaction: t,
                        event: n
                    }
                }) => {
                    if ("quantity" !== t) return;
                    const r = Xc(vn(this, gd)[gd].shopId, n.remoteShopId) ? sd : id,
                        o = ad(vn(this, gd)[gd], n);
                    o.accepted ? o.remote ? vn(this, bd)[bd](e, r, n, o) : vn(this, yd)[yd](e, r, n) : vn(this, gd)[gd].onValidationError ? .({
                        eventName: r,
                        reason: o.reason
                    })
                })
            }
        }

        function _d(e, t, n) {
            const r = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontProductQuantityChangedEvent",
                ...hd(vn(this, gd)[gd], n)
            };
            vn(this, vd)[vd].produce(r, {
                clientMessageId: e
            }), vn(this, gd)[gd].onEmission ? .({
                eventName: t
            })
        }

        function xd(e, t, n, {
            remoteShopId: r,
            adResponseId: o
        }) {
            const i = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontRemoteProductQuantityChangedEvent",
                ...fd(vn(this, gd)[gd], { ...n,
                    remoteShopId: r,
                    adResponseId: o
                })
            };
            vn(this, vd)[vd].produce(i, {
                clientMessageId: e
            }), vn(this, gd)[gd].onEmission ? .({
                eventName: t
            })
        }
        const Id = "storefront_product_interaction_event_test/1.2",
            kd = "product_variant_changed",
            Ed = "remote_product_variant_changed";

        function Sd({
            shopId: e,
            resourceId: t,
            pageUrl: n,
            themeId: r,
            themePublished: o
        }, i) {
            if (void 0 === r || void 0 === o) return {
                accepted: !1,
                reason: "missing-theme-context"
            };
            if (!ou(t)) return {
                accepted: !1,
                reason: "invalid-product-id"
            };
            if (!ou(i.variantId)) return {
                accepted: !1,
                reason: "invalid-variant-id"
            };
            const {
                remoteShopId: s
            } = i;
            if (!Xc(e, s)) return {
                accepted: !0,
                remote: !1
            };
            if (!ou(s)) return {
                accepted: !1,
                reason: "invalid-remote-shop-id"
            };
            const a = Vt(n) ? .adResponseId;
            return a ? {
                accepted: !0,
                remote: !0,
                remoteShopId: s,
                adResponseId: a
            } : {
                accepted: !1,
                reason: "missing-ad-response-id"
            }
        }
        var Pd = yn("monorailClient"),
            Td = yn("options"),
            Ad = yn("handle");
        class Cd {
            constructor(e, t) {
                Object.defineProperty(this, Ad, {
                    value: Od
                }), Object.defineProperty(this, Pd, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Td, {
                    writable: !0,
                    value: void 0
                }), vn(this, Pd)[Pd] = e, vn(this, Td)[Td] = t
            }
            register(e) {
                e("log:buyer-behavior:product-variant-change", ({
                    id: e,
                    payload: {
                        event: t
                    }
                }) => {
                    vn(this, Ad)[Ad](e, t)
                })
            }
        }

        function Od(e, t) {
            if (Sd(vn(this, Td)[Td], t).accepted) return;
            const n = Xc(vn(this, Td)[Td].shopId, t.remoteShopId) ? Ed : kd,
                {
                    consent: r
                } = vn(this, Td)[Td];
            vn(this, Pd)[Pd].produce(Id, {
                eventId: e,
                source: "EVENT_APP_STOREFRONT",
                shopId: vn(this, Td)[Td].shopId,
                eventName: n,
                pageUrl: vn(this, Td)[Td].pageUrl,
                pageId: vn(this, Td)[Td].pageId,
                pageType: jt.Product,
                productId: vn(this, Td)[Td].resourceId,
                variantId: t.variantId,
                remoteShopId: t.remoteShopId,
                apiClientId: vn(this, Td)[Td].apiClientId,
                themeId: vn(this, Td)[Td].themeId,
                themeStoreId: vn(this, Td)[Td].themeStoreId,
                themePublished: vn(this, Td)[Td].themePublished,
                analyticsAllowed: r.analyticsProcessingAllowed(),
                marketingAllowed: r.marketingAllowed(),
                preferencesAllowed: r.preferencesProcessingAllowed(),
                saleOfDataAllowed: r.saleOfDataAllowed(),
                visitToken: r.trackingTokens.getVisitToken(),
                uniqueToken: r.trackingTokens.getUniqueToken()
            }), vn(this, Td)[Td].onEmission ? .({
                eventName: n,
                schemaId: Id
            })
        }

        function Nd({
            shopId: e,
            resourceId: t,
            themeId: n,
            themeStoreId: r,
            themePublished: o
        }, i) {
            const s = lu({
                themeId: n,
                themeStoreId: r,
                themePublished: o
            });
            return {
                pageContext: {
                    pageType: jt.Product
                },
                ...void 0 !== s && {
                    themeContext: s
                },
                product: {
                    shopId: _i(e),
                    productId: _i(t),
                    variantId: _i(i.variantId)
                }
            }
        }
        var Rd = yn("collector"),
            jd = yn("options"),
            Ud = yn("produceOrganic"),
            Dd = yn("produceRemote");
        class Md {
            constructor(e, t) {
                Object.defineProperty(this, Dd, {
                    value: Ld
                }), Object.defineProperty(this, Ud, {
                    value: $d
                }), Object.defineProperty(this, Rd, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, jd, {
                    writable: !0,
                    value: void 0
                }), vn(this, Rd)[Rd] = e, vn(this, jd)[jd] = t
            }
            register(e) {
                e("log:buyer-behavior:product-variant-change", ({
                    id: e,
                    payload: {
                        event: t
                    }
                }) => {
                    const n = Xc(vn(this, jd)[jd].shopId, t.remoteShopId) ? Ed : kd,
                        r = Sd(vn(this, jd)[jd], t);
                    r.accepted ? r.remote ? vn(this, Dd)[Dd](e, n, t, r) : vn(this, Ud)[Ud](e, n, t) : vn(this, jd)[jd].onValidationError ? .({
                        eventName: n,
                        reason: r.reason
                    })
                })
            }
        }

        function $d(e, t, n) {
            const r = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontProductVariantChangedEvent",
                ...Nd(vn(this, jd)[jd], n)
            };
            vn(this, Rd)[Rd].produce(r, {
                clientMessageId: e
            }), vn(this, jd)[jd].onEmission ? .({
                eventName: t
            })
        }

        function Ld(e, t, n, {
            remoteShopId: r,
            adResponseId: o
        }) {
            const i = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontRemoteProductVariantChangedEvent",
                ...(s = vn(this, jd)[jd], a = { ...n,
                    remoteShopId: r,
                    adResponseId: o
                }, { ...Nd(s, a),
                    product: {
                        shopId: _i(a.remoteShopId),
                        productId: _i(s.resourceId),
                        variantId: _i(a.variantId)
                    },
                    adContext: {
                        responseId: a.adResponseId,
                        publisherShopId: _i(s.shopId),
                        advertiserShopId: _i(a.remoteShopId)
                    }
                })
            };
            var s, a;
            vn(this, Rd)[Rd].produce(i, {
                clientMessageId: e
            }), vn(this, jd)[jd].onEmission ? .({
                eventName: t
            })
        }
        var qd = yn("monorailClient"),
            Bd = yn("configuration");
        class Vd {
            constructor(e, t) {
                Object.defineProperty(this, qd, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Bd, {
                    writable: !0,
                    value: void 0
                }), vn(this, qd)[qd] = e, vn(this, Bd)[Bd] = t
            }
            register(e) {
                vn(this, Bd)[Bd].surface === y.CustomerAccount && e("log:event-bus:publish", ({
                    payload: {
                        event: e
                    }
                }) => {
                    if ("page_viewed" === e.name) {
                        const {
                            context: t
                        } = e, {
                            consent: n
                        } = vn(this, Bd)[Bd], r = n.analyticsProcessingAllowed(), o = n.marketingAllowed(), i = n.preferencesProcessingAllowed(), s = n.saleOfDataAllowed(), a = !(o && r), c = {
                            eventName: "page_rendered",
                            shopifyEmitted: !0,
                            eventTime: new Date(e.timestamp).valueOf(),
                            eventId: e.id,
                            uniqueToken: e.clientId,
                            userAgent: t.navigator.userAgent,
                            acceptLanguage: t.navigator.language,
                            referrer: t.document.referrer,
                            eventSourceUrl: t.document.location.href,
                            source: `wpm-${vn(this,Bd)[Bd].surface}`,
                            shopId: vn(this, Bd)[Bd].shopId,
                            isMerchantRequest: vn(this, Bd)[Bd].isMerchantRequest,
                            apiClientId: vn(this, Bd)[Bd].apiClientId,
                            customerId: vn(this, Bd)[Bd].customerId,
                            analyticsAllowed: r,
                            marketingAllowed: o,
                            preferencesAllowed: i,
                            saleOfDataAllowed: s,
                            facebookCapiEnabled: vn(this, Bd)[Bd].firstPartyTracking.facebookCapiEnabled,
                            deprecatedVisitToken: n.trackingTokens.getVisitToken()
                        };
                        vn(this, qd)[qd].produce("storefront_customer_tracking/4.27", { ...c,
                            emittedToV5: !0,
                            ccpaEnforced: !s,
                            gdprEnforced: a,
                            isPersistentCookie: "persistent" === (Kr("_shopify_m") ? ? "persistent")
                        });
                        const {
                            browserContext: u
                        } = vn(this, Bd)[Bd];
                        vn(this, qd)[qd].produce("storefront_customer_tracking/5.9", { ...c,
                            ...u && {
                                attributes: () => {
                                    const e = u.getAttributes();
                                    return e && JSON.stringify(e)
                                },
                                attributesVersion: 2
                            }
                        })
                    }
                })
            }
        }
        const zd = ["checkout_completed", "checkout_started", "payment_info_submitted", "checkout_shipping_info_submitted", "checkout_contact_info_submitted", "checkout_address_info_submitted"],
            Fd = new Set([...zd, "page_viewed", "product_viewed", "collection_viewed", "product_added_to_cart", "search_submitted"]),
            Hd = {
                page_viewed: "page_rendered",
                product_viewed: "product_page_rendered",
                collection_viewed: "collection_page_rendered"
            },
            Wd = e => Hd[e] || e;
        var Kd = yn("client"),
            Yd = yn("surface");
        class Jd {
            constructor(e, {
                surface: t
            }) {
                Object.defineProperty(this, Kd, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Yd, {
                    writable: !0,
                    value: void 0
                }), vn(this, Kd)[Kd] = e, vn(this, Yd)[Yd] = t
            }
            register(e) {
                e("log:event-bus:publish", ({
                    payload: {
                        event: e
                    }
                }) => {
                    if (!(e => Fd.has(e.name))(e)) return;
                    const {
                        context: t
                    } = e, n = {
                        eventTime: new Date(e.timestamp).valueOf(),
                        eventId: e.id,
                        uniqueToken: e.clientId,
                        eventSourceUrl: t.document.location.href,
                        surface: vn(this, Yd)[Yd],
                        userAgent: t.navigator.userAgent,
                        sessionId: Di(),
                        referrer: t.document.referrer
                    };
                    if ((e => zd.includes(e.name))(e)) {
                        const {
                            checkout: t
                        } = e.data;
                        vn(this, Kd)[Kd].track({ ...n,
                            eventName: e.name,
                            checkoutToken: t.token || void 0,
                            orderId: t.order ? .id || void 0,
                            subtotalValue: t.subtotalPrice ? .amount,
                            totalValue: t.totalPrice ? .amount,
                            currency: t.currencyCode || void 0,
                            email: t.email || void 0,
                            phone: t.shippingAddress ? .phone || void 0,
                            billingAddressCity: t.shippingAddress ? .city || void 0,
                            billingAddressCountry: t.shippingAddress ? .country || void 0,
                            billingAddressRegion: t.shippingAddress ? .province || void 0
                        })
                    } else if ("product_viewed" === e.name) {
                        const {
                            productVariant: t
                        } = e.data;
                        vn(this, Kd)[Kd].track({ ...n,
                            eventName: Wd(e.name),
                            productId: t.product ? .id || void 0,
                            productTitle: t.product ? .title || void 0,
                            totalValue: t.price ? .amount || void 0,
                            currency: t.price ? .currencyCode || void 0
                        })
                    } else if ("collection_viewed" === e.name) {
                        const {
                            collection: t
                        } = e.data;
                        vn(this, Kd)[Kd].track({ ...n,
                            eventName: Wd(e.name),
                            collectionName: t ? .title || void 0,
                            currency: t ? .productVariants ? .find(e => e ? .price ? .currencyCode) ? .price ? .currencyCode || void 0
                        })
                    } else if ("product_added_to_cart" === e.name) {
                        const {
                            cartLine: t
                        } = e.data, {
                            merchandise: o
                        } = t || {}, i = o ? .product ? .title, s = o ? .title, a = i && s ? `${i} - ${s}` : i, c = {
                            variant_id: o ? .id || void 0,
                            product_id: o ? .product ? .id || void 0,
                            name: a || void 0,
                            price: o ? .price ? .amount || void 0,
                            sku: o ? .sku || void 0,
                            brand: o ? .product ? .vendor || void 0,
                            variant: o ? .title || void 0,
                            category: o ? .product ? .type || void 0,
                            quantity: t ? .quantity || void 0
                        };
                        let u = [];
                        try {
                            u = [JSON.stringify(c)]
                        } catch (r) {
                            console.warn("Failed to serialize product object for tracking:", r)
                        }
                        vn(this, Kd)[Kd].track({ ...n,
                            eventName: e.name,
                            products: u,
                            totalValue: t ? .cost ? .totalAmount ? .amount || void 0,
                            currency: t ? .cost ? .totalAmount ? .currencyCode || void 0
                        })
                    } else if ("page_viewed" === e.name) vn(this, Kd)[Kd].track({ ...n,
                        eventName: Wd(e.name),
                        referrer: t.document.referrer
                    });
                    else if ("search_submitted" === e.name) {
                        const {
                            searchResult: r
                        } = e.data;
                        vn(this, Kd)[Kd].track({ ...n,
                            eventName: e.name,
                            searchString: r ? .query || "",
                            referrer: t.document.referrer
                        })
                    }
                })
            }
        }
        var Xd = yn("sendEvent"),
            Gd = yn("configuration");
        class Qd {
            constructor(e, t) {
                Object.defineProperty(this, Xd, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Gd, {
                    writable: !0,
                    value: void 0
                }), vn(this, Xd)[Xd] = e, vn(this, Gd)[Gd] = t
            }
            track(e) {
                try {
                    const {
                        consent: t
                    } = vn(this, Gd)[Gd], n = { ...e,
                        shopId: vn(this, Gd)[Gd].shopId,
                        source: this.constructSource(e.surface),
                        analyticsAllowed: t.analyticsProcessingAllowed(),
                        marketingAllowed: t.marketingAllowed(),
                        preferencesAllowed: t.preferencesProcessingAllowed(),
                        saleOfDataAllowed: t.saleOfDataAllowed(),
                        assetVersionId: Zn,
                        facebookCapiEnabled: !1,
                        shopifyEmitted: !0
                    };
                    vn(this, Xd)[Xd](Ko("webPixelsStorefrontCustomerTracking", n))
                } catch (t) {}
            }
            constructSource(e) {
                return `wpm-${e}`
            }
        }
        const Zd = "__shopify_agent_context_events";
        class el {
            persist(e) {
                const t = Zt(() => sessionStorage.getItem(Zd), null),
                    n = Zt(() => t ? JSON.parse(t) : [], []),
                    r = Array.isArray(n) ? n : [];
                r.length >= 50 && r.shift(), r.push(e), Zt(() => sessionStorage.setItem(Zd, JSON.stringify(r)))
            }
        }
        const tl = new Set(["page_viewed", "product_viewed", "collection_viewed", "product_added_to_cart", "search_submitted"]);
        var nl = yn("client"),
            rl = yn("extractDetail");
        class ol {
            constructor({
                client: e
            }) {
                Object.defineProperty(this, rl, {
                    value: il
                }), Object.defineProperty(this, nl, {
                    writable: !0,
                    value: void 0
                }), vn(this, nl)[nl] = e
            }
            register(e) {
                e("log:event-bus:publish", ({
                    payload: {
                        event: e
                    }
                }) => {
                    if (!(e => tl.has(e.name))(e)) return;
                    const t = vn(this, rl)[rl](e);
                    t && vn(this, nl)[nl].persist(t)
                })
            }
        }

        function il(e) {
            const t = e.context.document.location.href,
                n = new Date(e.timestamp).valueOf();
            switch (e.name) {
                case "page_viewed":
                    return {
                        type: "page_viewed",
                        url: t,
                        referrer: e.context.document.referrer,
                        timestamp: n
                    };
                case "product_viewed":
                    {
                        const {
                            productVariant: r
                        } = e.data;
                        return {
                            type: "product_viewed",
                            title: r.product ? .title || "",
                            productId: r.product ? .id || "",
                            price: r.price ? .amount || 0,
                            currency: r.price ? .currencyCode || "",
                            url: t,
                            timestamp: n
                        }
                    }
                case "collection_viewed":
                    {
                        const {
                            collection: r
                        } = e.data;
                        return {
                            type: "collection_viewed",
                            title: r ? .title || "",
                            currency: r ? .productVariants ? .find(e => e ? .price ? .currencyCode) ? .price ? .currencyCode || "",
                            url: t,
                            timestamp: n
                        }
                    }
                case "product_added_to_cart":
                    {
                        const {
                            cartLine: r
                        } = e.data,
                        {
                            merchandise: o
                        } = r || {};
                        return {
                            type: "product_added_to_cart",
                            productTitle: o ? .product ? .title || "",
                            variantTitle: o ? .title || "",
                            price: o ? .price ? .amount || 0,
                            currency: o ? .price ? .currencyCode || "",
                            quantity: r ? .quantity || 0,
                            sku: o ? .sku || "",
                            url: t,
                            timestamp: n
                        }
                    }
                case "search_submitted":
                    {
                        const {
                            searchResult: r
                        } = e.data;
                        return {
                            type: "search_submitted",
                            query: r ? .query || "",
                            url: t,
                            timestamp: n
                        }
                    }
                default:
                    return null
            }
        }

        function sl(e) {
            return "string" == typeof e ? e : void 0
        }

        function al(e) {
            if (!e && 0 !== e) return;
            const t = Number(e);
            return Number.isNaN(t) ? void 0 : t
        }

        function cl(e) {
            return "number" == typeof e && Number.isFinite(e)
        }

        function ul(e) {
            return Boolean(e) && "object" == typeof e && !Array.isArray(e)
        }

        function dl(e) {
            return ul(e) ? e : void 0
        }

        function ll(e, t) {
            if (!Array.isArray(e) || 0 === e.length) return;
            const n = e.filter(t);
            return n.length === e.length ? n : void 0
        }

        function pl(e) {
            return Array.isArray(e) ? e.filter(ul) : []
        }

        function hl() {
            try {
                const e = Mr(),
                    t = e ? .serverTiming;
                if (t) {
                    const e = t.find(e => "_s" === e.name) ? .description;
                    if (e) return e;
                    const n = t.map(e => e.name).join(",");
                    return `no_s_field|${window.location?.href}|${n}`
                }
                return e ? "no_server_timing" : "no_navigation"
            } catch {
                return "error_while_reading"
            }
        }

        function fl(e) {
            const t = e.toLowerCase();
            if (t.startsWith("monorail://") && t.length > 11) return t.slice(11)
        }
        const ml = {
            trekkie_storefront_remote_ad_rendered: "BUYER_EVENT_TYPE_AD_RENDERED",
            trekkie_storefront_remote_ad_impression: "BUYER_EVENT_TYPE_AD_IMPRESSION",
            trekkie_storefront_remote_ad_click: "BUYER_EVENT_TYPE_AD_CLICKED"
        };

        function vl(e, t, n) {
            return sl(e[t]) || sl(e[n])
        }

        function gl(e, t, n) {
            return al(e[t]) ? ? al(e[n])
        }
        var yl = yn("monorailClient"),
            bl = yn("options"),
            wl = yn("produce");
        class _l {
            constructor(e, t) {
                Object.defineProperty(this, wl, {
                    value: xl
                }), Object.defineProperty(this, yl, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, bl, {
                    writable: !0,
                    value: void 0
                }), vn(this, yl)[yl] = e, vn(this, bl)[bl] = t
            }
            register(e) {
                e("log:trekkie:track", ({
                    payload: {
                        method: e,
                        args: [t, n]
                    }
                }) => {
                    if ("track" !== e) return;
                    const r = sl(t);
                    if (!r) return;
                    const o = fl(r);
                    if (!o) return;
                    const i = function(e) {
                        const [t] = e.split("/");
                        if (t) return ml[t]
                    }(o);
                    i && vn(this, wl)[wl](i, dl(n) ? ? {})
                })
            }
        }

        function xl(e, t) {
            const {
                consent: n
            } = vn(this, bl)[bl], r = n.analyticsProcessingAllowed(), o = n.marketingAllowed(), i = !(o && r), s = gl(t, "shopId", "shop_id") ? ? gl(t, "publisherShopId", "publisher_shop_id") ? ? vn(this, bl)[bl].shopId;
            vn(this, yl)[yl].produce("storefront_customer_tracking_parity/1.0", {
                shopId: s,
                eventId: vl(t, "eventId", "event_id") || qt(),
                eventName: e,
                eventTime: (new Date).getTime(),
                eventSourceUrl: vn(this, bl)[bl].pageUrl || self.location ? .href || "",
                uniqueToken: n.trackingTokens.getUniqueToken() || vl(t, "userToken", "user_token") || "",
                source: `wpm-${vn(this,bl)[bl].surface}`,
                shopifyEmitted: !0,
                assetVersionId: Zn,
                ccpaEnforced: !n.saleOfDataAllowed(),
                gdprEnforced: i,
                gdprEnforcedAsString: String(i),
                isPersistentCookie: "persistent" === (Kr("_shopify_m") ? ? "persistent"),
                analyticsAllowed: r,
                marketingAllowed: o,
                preferencesAllowed: n.preferencesProcessingAllowed(),
                saleOfDataAllowed: n.saleOfDataAllowed(),
                deprecatedVisitToken: n.trackingTokens.getVisitToken(),
                trackingConsent: hl(),
                sessionId: Di(),
                pageId: vn(this, bl)[bl].pageId,
                userAgent: self.navigator ? .userAgent,
                apiClientId: vn(this, bl)[bl].apiClientId,
                isMerchantRequest: vn(this, bl)[bl].isMerchantRequest,
                navigationType: vn(this, bl)[bl].navigationType,
                navigationApi: vn(this, bl)[bl].navigationApi
            }), vn(this, bl)[bl].onProduce ? .(e)
        }
        const Il = sr(e => JSON.stringify(e), {
            cache: new WeakMap,
            cacheKey: e => e
        });
        var kl = yn("monorailClient"),
            El = yn("options"),
            Sl = yn("trackTransform");
        class Pl {
            constructor(e, t) {
                Object.defineProperty(this, Sl, {
                    value: Tl
                }), Object.defineProperty(this, kl, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, El, {
                    writable: !0,
                    value: void 0
                }), vn(this, kl)[kl] = e, vn(this, El)[El] = t
            }
            register(e) {
                e("log:event-bus:publish:transformed", ({
                    payload: e
                }) => {
                    vn(this, Sl)[Sl](e.event.name, "publish", e)
                }), e("log:pixel:init:transformed", ({
                    payload: e
                }) => {
                    vn(this, Sl)[Sl]("register:init", "init", e)
                })
            }
        }

        function Tl(e, t, {
            pixel: n,
            adjustmentsTriggers: r,
            adjustmentsApplied: o
        }) {
            vn(this, kl)[kl].produce("web_pixels_public_event_payload_transform/1.0", {
                shopId: vn(this, El)[El].shopId,
                pixelSource: n.type,
                surface: vn(this, El)[El].surface,
                eventName: e,
                pixelId: n.id,
                pixelAppId: Os(n),
                pageUrl: vn(this, El)[El].pageUrl,
                bundleTarget: Qn,
                adjustmentsTriggers: r,
                adjustmentsApplied: o,
                adjustmentsContext: t,
                adjustmentsJson: n.dataSharingAdjustments ? Il(n.dataSharingAdjustments) : void 0
            })
        }
        var Al = yn("monorailClient"),
            Cl = yn("options");
        class Ol {
            constructor(e, t) {
                Object.defineProperty(this, Al, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Cl, {
                    writable: !0,
                    value: void 0
                }), vn(this, Al)[Al] = e, vn(this, Cl)[Cl] = t
            }
            register(e) {
                e("log:event-bus:publish:blocked", ({
                    payload: e
                }) => {
                    const {
                        pixel: t,
                        event: n
                    } = e;
                    vn(this, Al)[Al].produce("web_pixels_manager_subscriber_event_blocked/1.0", {
                        eventId: n.id,
                        apiClientId: t.apiClientId ? .toString(),
                        shopId: vn(this, Cl)[Cl].shopId,
                        pixelId: t.id,
                        surface: vn(this, Cl)[Cl].surface,
                        eventName: n.name,
                        eventType: p(n.name),
                        dataSharingState: t.dataSharingState ? ? "unknown",
                        bundleTarget: Qn,
                        pageUrl: vn(this, Cl)[Cl].pageUrl
                    })
                })
            }
        }
        const Nl = "storefront_customer_tracking_parity/1.2",
            Rl = "storefront_customer_tracking/5.9",
            jl = [
                [/^[ _]?checkout[ _]?one[ _]?page[ _]?view[ _]?$/i, "page_rendered"],
                [/^[ _]?viewed[ _]?product[ _]?$/i, "product_page_rendered"],
                [/^[ _]?viewed[ _]?product[ _]?category[ _]?$/i, "collection_page_rendered"],
                [/^[ _]?added[ _]?product[ _]?$/i, "product_added_to_cart"],
                [/^[ _]?completed[ _]?order[ _]?$/i, "checkout_completed"],
                [/^[ _]?started[ _]?order[ _]?once[ _]?per[ _]?checkout[ _]?remote[ _]?$/i, "remote_checkout_started_once_per_checkout"],
                [/^[ _]?started[ _]?order[ _]?once[ _]?per[ _]?checkout[ _]?$/i, "checkout_started_once_per_checkout"],
                [/^[ _]?started[ _]?order[ _]?remote[ _]?$/i, "remote_checkout_started"],
                [/^[ _]?started[ _]?order[ _]?$/i, "checkout_started"],
                [/^[ _]?performed[ _]?search[ _]?$/i, "search_submitted"],
                [/^[ _]?added[ _]?payment[ _]?remote[ _]?$/i, "remote_payment_info_submitted"],
                [/^[ _]?added[ _]?payment[ _]?$/i, "payment_info_submitted"],
                [/^[ _]?checkout[ _]?[ _]?contact[ _]?info[ _]?submitted[ _]?remote[ _]?$/i, "remote_checkout_contact_info_submitted"],
                [/^[ _]?checkout[ _]?[ _]?contact[ _]?info[ _]?submitted[ _]?$/i, "checkout_contact_info_submitted"],
                [/^[ _]?checkout[ _]?[ _]?address[ _]?info[ _]?submitted[ _]?remote[ _]?$/i, "remote_checkout_address_info_submitted"],
                [/^[ _]?checkout[ _]?[ _]?address[ _]?info[ _]?submitted[ _]?$/i, "checkout_address_info_submitted"],
                [/^[ _]?checkout[ _]?[ _]?shipping[ _]?info[ _]?submitted[ _]?remote[ _]?$/i, "remote_checkout_shipping_info_submitted"],
                [/^[ _]?checkout[ _]?[ _]?shipping[ _]?info[ _]?submitted[ _]?$/i, "checkout_shipping_info_submitted"]
            ],
            Ul = "custom_storefront_customer_tracking/1.6",
            Dl = new Set([6167201, 12875497473]),
            Ml = new Set(["page_rendered", "payment_info_submitted", "checkout_contact_info_submitted", "checkout_address_info_submitted", "checkout_shipping_info_submitted", "checkout_started", "checkout_started_once_per_checkout", "checkout_completed"]),
            $l = "00000000-0000-0000-5000-000000000000";
        new Set([$l, "00000000-0000-0000-4000-000000000000"]);
        let Ll = function(e) {
            return e.Block = "block", e.Filter = "filter", e.Allow = "allow", e
        }({});

        function ql(e) {
            const t = self.ShopifyAnalytics ? .meta;
            if (!t ? .remoteProductsEnabled) return Ll.Allow;
            if (!e) {
                const e = t.product;
                return e ? void 0 === e.id ? Ll.Block : !0 === e.remote ? Ll.Filter : Ll.Allow : Ll.Allow
            }
            return void 0 === e.productId ? Ll.Block : function(e, t) {
                return "boolean" == typeof e.remote ? e.remote : !!e.variantId && Boolean(function(e, t) {
                    return e.products ? function(e, t) {
                        for (const n of t)
                            if (n.variants)
                                for (const t of n.variants)
                                    if (String(t.id) === e) return n
                    }(t, e.products) : e.product ? .variants && e.product.variants.some(e => String(e.id) === t) ? e.product : void 0
                }(t, e.variantId) ? .remote)
            }(e, t) ? Ll.Filter : Ll.Allow
        }
        const Bl = {
            page_rendered: "page_viewed",
            remote_page_rendered: "page_viewed",
            product_page_rendered: "product_viewed",
            remote_product_page_rendered: "product_viewed",
            product_added_to_cart: "product_added_to_cart",
            remote_product_added_to_cart: "product_added_to_cart",
            product_added_to_cart_legacy: "product_added_to_cart",
            checkout_started: "checkout_started",
            remote_checkout_started: "checkout_started",
            checkout_started_once_per_checkout: "checkout_started",
            remote_checkout_started_once_per_checkout: "checkout_started",
            checkout_completed: "checkout_completed",
            search_submitted: "search_submitted",
            payment_info_submitted: "payment_info_submitted",
            remote_payment_info_submitted: "payment_info_submitted",
            collection_page_rendered: "collection_viewed",
            checkout_contact_info_submitted: "checkout_contact_info_submitted",
            remote_checkout_contact_info_submitted: "checkout_contact_info_submitted",
            checkout_address_info_submitted: "checkout_address_info_submitted",
            remote_checkout_address_info_submitted: "checkout_address_info_submitted",
            checkout_shipping_info_submitted: "checkout_shipping_info_submitted",
            remote_checkout_shipping_info_submitted: "checkout_shipping_info_submitted"
        };

        function Vl(e) {
            if (e.productId && e.variantId) return `${e.productId}-${e.variantId}`
        }
        const zl = /^https?:\/\//;
        let Fl, Hl;

        function Wl() {
            const e = self.location ? .href;
            return e && e === Fl || (Fl = e, Hl = function() {
                const e = self.document ? .getElementsByTagName("link");
                if (e)
                    for (const t of Array.from(e)) {
                        if ("canonical" !== t.getAttribute("rel")) continue;
                        const e = t.getAttribute("href");
                        if (e && zl.test(e) && !(e.replace(zl, "").length <= 5)) return e
                    }
            }()), Hl
        }

        function Kl(e) {
            return "string" == typeof e && e || "USD"
        }

        function Yl(e) {
            return e.map(e => JSON.stringify({
                variant_id: al(e.variantId) ? ? null,
                product_id: al(e.productId) ? ? null,
                product_gid: e.productGid,
                name: e.name,
                price: al(e.price) ? ? 0,
                sku: e.sku,
                brand: e.brand,
                variant: e.variant,
                category: e.category,
                available: "boolean" == typeof e.available ? e.available : void 0,
                quantity: al(e.quantity) ? ? 0
            }))
        }

        function Jl(e) {
            return {
                totalValue: al(e.price) ? ? 0,
                currency: Kl(e.currency)
            }
        }

        function Xl(e) {
            return {
                totalValue: al(e.total) ? ? 0,
                subtotalValue: al(e.subtotalAfterMerchandiseDiscounts) ? ? 0,
                currency: Kl(e.currency)
            }
        }

        function Gl(e) {
            return al(e.subtotalAfterMerchandiseDiscounts) ? ? 0
        }

        function Ql(e) {
            return {
                billingAddressCity: sl(e ? .city),
                billingAddressCountry: sl(e ? .country),
                billingAddressRegion: sl(e ? .province)
            }
        }

        function Zl(e) {
            const t = sl(e);
            return {
                referrer: self.document ? .referrer,
                canonicalUrl: Wl() ? ? "",
                pageType: "searchresults" === t ? "search" : t
            }
        }
        const ep = {
            page_rendered: "z",
            product_page_rendered: "x",
            collection_page_rendered: "c",
            search_submitted: "b"
        };

        function tp(t, n) {
            try {
                if (!ep[t] || "storefront-renderer" !== n) return;
                const r = Mr() ? .serverTiming ? .find(e => "requestID" === e.name) ? .description;
                if (!r) return;
                return function(e, t) {
                    try {
                        const n = np(e, t);
                        return n ? window.sessionStorage.getItem(n) : null
                    } catch {
                        return null
                    }
                }(r, t) ? e().toUpperCase() : (function(e, t) {
                    try {
                        const n = np(e, t);
                        if (!n) return;
                        window.sessionStorage.setItem(n, (new Date).getTime().toString())
                    } catch {}
                }(r, t), r)
            } catch {
                return
            }
        }

        function np(e, t) {
            const n = ep[t];
            if (n) return `wpm-ri-${e}-${n}`
        }

        function rp(e) {
            return "string" == typeof e ? e : cl(e) ? String(e) : void 0
        }

        function op(e) {
            return {
                productId: rp(e.productId),
                variantId: rp(e.variantId),
                remote: "boolean" == typeof e.remote ? e.remote : void 0
            }
        }

        function ip(e, t, n) {
            return e === Ll.Block ? null : e === Ll.Filter ? n : t
        }
        var sp = yn("monorailClient"),
            ap = yn("configuration"),
            cp = yn("resolveTrackFlags"),
            up = yn("resolveEventName"),
            dp = yn("produce");
        class lp {
            constructor(e, t) {
                Object.defineProperty(this, dp, {
                    value: fp
                }), Object.defineProperty(this, up, {
                    value: hp
                }), Object.defineProperty(this, cp, {
                    value: pp
                }), Object.defineProperty(this, sp, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ap, {
                    writable: !0,
                    value: void 0
                }), vn(this, sp)[sp] = e, vn(this, ap)[ap] = t
            }
            register(e) {
                e("log:trekkie:track", ({
                    replayed: e,
                    payload: {
                        method: t,
                        args: [n, r, o, i, s]
                    }
                }) => {
                    const a = dl(r) ? ? {},
                        c = dl(s) ? ? {},
                        u = vn(this, up)[up](t, n, a);
                    if (!u) return;
                    if ("checkout_completed" === u && !i) return;
                    const d = vn(this, cp)[cp](t, a, c);
                    vn(this, dp)[dp](u, a, {
                        injectedEventId: sl(o),
                        trackFlags: d,
                        emittedAsync: !0 === e
                    })
                })
            }
        }

        function pp(e, t, n) {
            return "page" === e ? "shopifyEmitted" in t ? {
                shopifyEmitted: Boolean(t.shopifyEmitted)
            } : {} : {
                addToCartApiSource: sl(n.addApiSource),
                shopifyEmitted: "boolean" == typeof n.shopifyEmitted ? n.shopifyEmitted : void 0
            }
        }

        function hp(e, t, n) {
            let r;
            if ("page" === e) r = "page_rendered";
            else {
                const e = sl(t);
                if (!e) return null;
                r = function(e) {
                    for (const [t, n] of jl)
                        if (t.test(e)) return n
                }(e)
            }
            if (!r) return null;
            switch (r) {
                case "page_rendered":
                    return ip(ql(), r, "remote_page_rendered");
                case "product_page_rendered":
                    return ip(ql(op(n)), r, "remote_product_page_rendered");
                case "product_added_to_cart":
                    {
                        const e = ql(op(n));
                        return At("bdb960ec") ? e === Ll.Allow ? "product_added_to_cart_legacy" : null : ip(e, r, "remote_product_added_to_cart")
                    }
                default:
                    return r
            }
        }

        function fp(t, n, {
            injectedEventId: r,
            trackFlags: o,
            emittedAsync: i
        }) {
            const s = (a = t, void 0 !== (c = vn(this, ap)[ap].apiClientId) && Dl.has(c) && Ml.has(a));
            var a, c;
            if (s && !At("7b21cf0b") && !At(Nt)) return;
            const u = function(t, n, r) {
                    const o = function(e, t, n) {
                        const r = Bl[e];
                        if (!r) return;
                        if ("checkout_completed" === r && n) return n;
                        const o = self.Shopify ? .evids;
                        return o ? o(r, "product_added_to_cart" === r ? {
                            analyticsFramework: "trekkie-parity",
                            cacheKey: Vl(t)
                        } : {
                            analyticsFramework: "trekkie-parity"
                        }) : void 0
                    }(t, n, r);
                    return o || e()
                }(t, n, r),
                d = function(e, t) {
                    switch (e) {
                        case "page_rendered":
                        case "remote_page_rendered":
                            return Zl(t.pageType);
                        case "product_page_rendered":
                        case "remote_product_page_rendered":
                            return { ...Zl("product"),
                                ...Jl(t),
                                products: Yl([{ ...t,
                                    quantity: 1
                                }])
                            };
                        case "product_added_to_cart":
                        case "remote_product_added_to_cart":
                        case "product_added_to_cart_legacy":
                            return { ...Jl(t),
                                products: Yl([t]),
                                cartToken: sl(t.cartToken)
                            };
                        case "payment_info_submitted":
                        case "remote_payment_info_submitted":
                        case "checkout_shipping_info_submitted":
                        case "remote_checkout_shipping_info_submitted":
                            return Xl(t);
                        case "search_submitted":
                            return { ...Zl("search"),
                                searchString: sl(t.query) ? ? ""
                            };
                        case "checkout_started":
                        case "remote_checkout_started":
                        case "checkout_started_once_per_checkout":
                        case "remote_checkout_started_once_per_checkout":
                            return { ...Xl(t),
                                products: Yl(pl(t.products))
                            };
                        case "checkout_completed":
                            {
                                const e = dl(t.customerEventData),
                                    n = dl(e ? .customer),
                                    r = dl(e ? .address),
                                    o = { ...Xl(t),
                                        ...Ql(r),
                                        products: Yl(pl(t.products)),
                                        firstName: sl(n ? .firstName),
                                        lastName: sl(n ? .lastName),
                                        email: sl(n ? .emailAddress),
                                        phone: sl(n ? .phoneNumber),
                                        billingAddressZipcode: sl(r ? .zip)
                                    };
                                return t.orderId && (o.orderId = String(t.orderId)),
                                o
                            }
                        case "collection_page_rendered":
                            return { ...Zl("collection"),
                                collectionId: al(t.collectionId),
                                collectionName: sl(t.collectionName),
                                currency: Kl(t.currency)
                            };
                        case "checkout_contact_info_submitted":
                        case "remote_checkout_contact_info_submitted":
                            return {
                                email: sl(t.email),
                                phone: sl(t.phone),
                                subtotalValue: Gl(t)
                            };
                        case "checkout_address_info_submitted":
                        case "remote_checkout_address_info_submitted":
                            return { ...Ql(t),
                                phone: sl(t.phone),
                                subtotalValue: Gl(t)
                            };
                        default:
                            return e
                    }
                }(t, n),
                l = ll(n.rolloutIds, cl) ? ? vn(this, ap)[ap].rolloutIds,
                p = ll(n.rolloutTreatmentIds, cl) ? ? vn(this, ap)[ap].rolloutTreatmentIds,
                h = Kr("shop_analytics"),
                f = window.ShopifyAnalytics ? .lib ? .trekkie ? .defaultAttributes,
                m = vn(this, ap)[ap].eventMetadataId ? ? f ? .eventMetadataId,
                {
                    consent: v
                } = vn(this, ap)[ap],
                g = !(v.marketingAllowed() && v.analyticsProcessingAllowed()),
                b = {
                    eventId: u,
                    eventTime: (new Date).getTime(),
                    eventSourceUrl: self.location ? .href ? ? "",
                    uniqueToken: v.trackingTokens.getUniqueToken() || $l,
                    userAgent: self.navigator ? .userAgent,
                    eventName: t,
                    eventMetadataId: m,
                    shopId: vn(this, ap)[ap].shopId,
                    source: (w = vn(this, ap)[ap].surface, `wpm-${w===y.CheckoutOneNativeShopApp?y.CheckoutOneShopApp:w}`),
                    facebookCapiEnabled: vn(this, ap)[ap].firstPartyTracking.facebookCapiEnabled,
                    assetVersionId: Zn,
                    analyticsAllowed: v.analyticsProcessingAllowed(),
                    marketingAllowed: v.marketingAllowed(),
                    preferencesAllowed: v.preferencesProcessingAllowed(),
                    saleOfDataAllowed: v.saleOfDataAllowed(),
                    deprecatedVisitToken: v.trackingTokens.getVisitToken() || $l,
                    trackingConsent: hl(),
                    sessionId: Di(),
                    pageId: vn(this, ap)[ap].pageId,
                    apiClientId: vn(this, ap)[ap].apiClientId ? ? 580111,
                    ...vn(this, ap)[ap].checkoutToken && {
                        checkoutToken: vn(this, ap)[ap].checkoutToken
                    },
                    customerId: vn(this, ap)[ap].customerId,
                    ...h && {
                        shopAnalyticsToken: h
                    },
                    addToCartApiSource: o.addToCartApiSource,
                    shopifyEmitted: o.shopifyEmitted,
                    requestId: tp(t, vn(this, ap)[ap].surface),
                    ...l && {
                        rolloutIds: l
                    },
                    ...p && {
                        rolloutTreatmentIds: p
                    },
                    navigationType: vn(this, ap)[ap].navigationType,
                    navigationApi: vn(this, ap)[ap].navigationApi,
                    ...vn(this, ap)[ap].isMerchantRequest && {
                        isMerchantRequest: !0
                    },
                    ...i && {
                        emittedAsync: !0
                    },
                    ...d
                };
            var w;
            const _ = {
                ccpaEnforced: !v.saleOfDataAllowed(),
                gdprEnforced: g,
                gdprEnforcedAsString: String(g),
                isPersistentCookie: "persistent" === (Kr("_shopify_m") ? ? "persistent")
            };
            let x;
            if (s) x = Ul, vn(this, sp)[sp].produce(x, { ...b,
                ..._,
                hydrogenSubchannelId: ""
            });
            else if (At("4c64608a")) {
                const {
                    browserContext: e
                } = vn(this, ap)[ap];
                x = Rl, vn(this, sp)[sp].produce(x, { ...b,
                    ...e && {
                        attributes: () => {
                            const t = e.getAttributes();
                            return t && JSON.stringify(t)
                        },
                        attributesVersion: 2
                    }
                })
            } else x = Nl, vn(this, sp)[sp].produce(x, { ...b,
                ..._,
                emittedToV5: !0
            });
            vn(this, ap)[ap].onProduce ? .(t, x)
        }
        var mp = yn("monorailClient"),
            vp = yn("configuration");
        class gp {
            constructor(e, t = {}) {
                Object.defineProperty(this, mp, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, vp, {
                    writable: !0,
                    value: void 0
                }), vn(this, mp)[mp] = e, vn(this, vp)[vp] = t
            }
            register(e) {
                e("log:trekkie:track", ({
                    payload: {
                        method: e,
                        args: [t, n, , r]
                    }
                }) => {
                    if ("track" !== e) return;
                    const o = sl(t);
                    if (!o) return;
                    const i = fl(o);
                    if (!i) return;
                    const s = { ...dl(n) ? ? {},
                        ...!0 === r && {
                            emit_conversion_event: !0
                        }
                    };
                    vn(this, vp)[vp].onEventReceived ? .(i), At(Nt) && vn(this, mp)[mp].produce(i, s, {
                        convertEventCase: !1
                    })
                })
            }
        }
        var yp = yn("client"),
            bp = yn("options");
        class wp {
            constructor(e, t) {
                Object.defineProperty(this, yp, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, bp, {
                    writable: !0,
                    value: void 0
                }), vn(this, yp)[yp] = e, vn(this, bp)[bp] = t
            }
            register(e) {
                e("log:trekkie:track", ({
                    payload: {
                        method: e,
                        args: t
                    }
                }) => {
                    if ("track" !== e && "page" !== e) return;
                    const n = "page" === e ? "Page Viewed" : t[0];
                    if ("string" != typeof n) return;
                    const {
                        consent: r
                    } = vn(this, bp)[bp];
                    vn(this, yp)[yp].record("feature_usage", 1, {
                        feature: "event_emission",
                        event_name: n,
                        user_can_be_tracked: r.analyticsProcessingAllowed() || r.marketingAllowed()
                    })
                })
            }
        }
        const _p = {
            [Nl]: "storefront_customer_tracking_parity",
            [Rl]: "storefront_customer_tracking_v5",
            [Ul]: "custom_storefront_customer_tracking"
        };

        function xp(e) {
            return {
                requestId: Ip(e.requestId, 128),
                navigationType: (t = e.navigationType, "unknown" === t || "error" === t ? void 0 : Ip(t, 64)),
                trekkieState: kp()
            };
            var t
        }

        function Ip(e, t) {
            return "string" == typeof e && e.length > 0 && e.length <= t ? e : void 0
        }

        function kp() {
            try {
                const e = self.ShopifyAnalytics ? .lib ? .trekkie ? .state;
                return "awaiting-consent" === e || "initialized" === e ? e : void 0
            } catch (e) {
                return
            }
        }
        let Ep;
        const Sp = Object.values(x),
            Pp = e => {
                const t = e.trim().toLowerCase();
                return n = t, Sp.includes(n) ? t : x.NotAvailable;
                var n
            },
            Tp = Object.values(y),
            Ap = [y.NotAvailable, y.Unknown, y.StorefrontRenderer],
            Cp = e => {
                if (!e) return -1;
                const t = e.trim();
                if (!/^\d+$/.test(t)) return -1;
                const n = window.parseInt(t, 10);
                return window.isNaN(n) || n <= 0 ? -1 : n
            };

        function Op(e) {
            if (!e) return [];
            try {
                const t = JSON.parse(e);
                return Array.isArray(t) ? t : []
            } catch (t) {
                return []
            }
        }
        const Np = e => {
            if (e) try {
                const t = JSON.parse(e);
                if (!Array.isArray(t)) return;
                const n = t.filter(e => "number" == typeof e);
                if (0 === n.length || n.length !== t.length) return;
                return n
            } catch {
                return
            }
        };

        function Rp() {
            try {
                const e = window.performance,
                    t = "function" == typeof e ? .getEntriesByType ? Mr() : void 0;
                if (t ? .type) return {
                    navigationType: t.type,
                    navigationApi: "PerformanceNavigationTiming"
                };
                const n = e ? .navigation;
                if (void 0 !== n) return {
                    navigationType: {
                        0: "navigate",
                        1: "reload",
                        2: "back_forward"
                    }[n.type] ? ? "unknown",
                    navigationApi : "performance.navigation"
                }
            } catch (e) {
                return {
                    navigationType: "error",
                    navigationApi: "error"
                }
            }
            return {
                navigationType: "unknown",
                navigationApi: "unknown"
            }
        }

        function jp(e) {
            if (e) return e;
            try {
                return Mr() ? .serverTiming ? .find(({
                    name: e
                }) => "requestID" === e) ? .description || void 0
            } catch {
                return
            }
        }
        const Up = () => {
            const e = (() => {
                    try {
                        return document.currentScript ? .dataset
                    } catch {
                        return null
                    }
                })(),
                t = (e => {
                    const t = e.trim().toLowerCase();
                    return n = t, Tp.includes(n) ? t : window.Shopify ? .Checkout ? y.Shopify : window.Shopify ? .analytics ? .replayQueue ? y.StorefrontRenderer : window.CardFields ? y.CheckoutOne : y.Unknown;
                    var n
                })(e ? .surface ? ? ""),
                n = (e => {
                    if (!e) return [];
                    try {
                        const t = JSON.parse(e);
                        return Array.isArray(t) ? t.filter(e => "string" == typeof e) : []
                    } catch {
                        return []
                    }
                })(e ? .enabledBetaFlags);
            return {
                browserTarget: Pp(e ? .browserTarget ? ? ""),
                surface: t,
                enabledBetaFlags: n,
                isMerchantRequest: "true" === e ? .isMerchantRequest,
                firstPartyTracking: {
                    facebookCapiEnabled: "true" === e ? .facebookCapiEnabled
                },
                hashVersion: e ? .hashVersion ? ? "",
                shopId: Cp(e ? .shopId),
                apiClientId: Number(e ? .apiClientId) || void 0,
                pageId: e ? .pageId ? ? qt(),
                pageType: e ? .pageType,
                resourceId: e ? .resourceId,
                requestId: jp(e ? .requestId),
                ...Rp(),
                themeId: Number(e ? .themeId) || void 0,
                themeStoreId: Number(e ? .themeStoreId) || void 0,
                themePublished: void 0 === e ? .themePublished ? void 0 : "true" === e.themePublished,
                storefrontBaseUrl: (window.location.origin || e ? .storefrontBaseUrl) ? ? "",
                monorailEndpoint: e ? .monorailEndpoint || "",
                frontendEventCollectorEndpoint: e ? .frontendEventCollectorEndpoint || "",
                extensionBaseUrl: e ? .extensionBaseUrl ? ? "",
                shopDomain: e ? .shopDomain ? ? window.Shopify ? .shop ? ? "",
                checkoutToken: e ? .checkoutToken || void 0,
                customerId: Number(e ? .customerId) || void 0,
                rolloutIds: Np(e ? .rolloutIds),
                rolloutTreatmentIds: Np(e ? .rolloutTreatmentIds),
                eventMetadataId: e ? .eventMetadataId || void 0,
                events: Op(e ? .events),
                features: {
                    domEvents: "false" !== e ? .domEvents && Ap.includes(t),
                    advancedDomEvents: "false" !== e ? .advancedDomEvents,
                    storefrontEvents: "false" !== e ? .storefrontEvents && Ap.includes(t),
                    cartPermalink: "false" !== e ? .cartPermalink && [...Ap, y.CheckoutOne, y.CheckoutOneShopApp, y.CheckoutOneNativeShopApp, y.Shopify].includes(t),
                    trekkieShim: "true" === e ? .trekkieShim,
                    agentContext: "true" === e ? .agentContext
                },
                scope: {
                    publish: e ? .publish === Cs.All ? Cs.All : Cs.Custom
                }
            }
        };
        try {
            window.Shopify = window.Shopify || {}, !window.Shopify.evids && (a = {}, c = {
                    [r]: {},
                    [o]: {},
                    [i]: {},
                    [s]: {}
                }, window.Shopify.evids = (...e) => function(e, n) {
                    if (! function(e) {
                            return t.includes(e)
                        }(e) || (null == n ? void 0 : n.analyticsFramework) !== o && "wpm" !== (null == n ? void 0 : n.analyticsFramework) && (null == n ? void 0 : n.analyticsFramework) !== i && (null == n ? void 0 : n.analyticsFramework) !== s) return u("shu");
                    const r = function(e) {
                            return "string" == typeof e && e ? e : "default"
                        }(n.cacheKey),
                        d = function(e, t, n) {
                            const r = c[t],
                                o = r[e] ? ? (r[e] = {}),
                                i = o[n];
                            return o[n] = "number" == typeof i ? i + 1 : 0
                        }(e, n.analyticsFramework, r);
                    return function(e, t, n) {
                        const r = a[e] ? ? (a[e] = {}),
                            o = r[n] ? ? [];
                        let i = o[t];
                        return i || (i = u(), o.push(i)), r[n] = o, i
                    }(e, d, r)
                }(...e)),
                function({
                    configuration: t,
                    eventHub: n
                }) {
                    const r = window.location.href;
                    kr.metadata = Li(t, ["shopId", "surface", "browserTarget", "shopDomain"]);
                    try {
                        (({
                            storefrontBaseUrl: e
                        }) => {
                            if (!e) throw new _r("storefrontBaseUrl is required.");
                            if (! function(e) {
                                    try {
                                        return new URL(e), !0
                                    } catch (t) {
                                        return function(e) {
                                            const t = new RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)*[a-z]{1,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
                                            return Boolean(t.test(e))
                                        }(e)
                                    }
                                }(e)) throw new _r(`storefrontBaseUrl is not a valid absolute URL: "${e}"`)
                        })(t);
                        const o = function(e, t) {
                                return e.createClient({
                                    metrics: Mo,
                                    prefix: "web_pixels_manager",
                                    defaultAttributes: {
                                        surface: t.surface
                                    }
                                })
                            }(new jo({
                                throttleDelay: 1e3,
                                client: new go({
                                    exporter: "https://otlp-http-production.shopifysvc.com" ? new Io("https://otlp-http-production.shopifysvc.com", "web-pixels-manager") : new Do("WPM OTel")
                                })
                            }), t),
                            i = ur({
                                rate: .01
                            }),
                            s = () => {
                                ! function({
                                    onWrite: t,
                                    onError: n
                                } = {}) {
                                    try {
                                        if (!Et() && !kt()) return;
                                        if (oo.read("visitToken")) return;
                                        const n = to.visitToken;
                                        if (Kr(n)) return;
                                        try {
                                            It({
                                                generateFallback: !1,
                                                tag: "wpm"
                                            })
                                        } catch {}
                                        Wr(n, e(), {
                                            maxAgeMs: 18e5,
                                            path: "/",
                                            domain: eo(),
                                            sameSite: "Lax"
                                        }), t ? .()
                                    } catch (r) {
                                        n ? .(r)
                                    }
                                }({
                                    onWrite: () => {
                                        i.includes("visit_token_fallback") && o.record("feature_usage", 100, {
                                            feature: "visit_token_fallback"
                                        })
                                    },
                                    onError: e => {
                                        kr.notify(e, {
                                            context: "createWebPixelsManager/ensureVisitToken",
                                            severity: "info",
                                            unhandled: !1
                                        })
                                    }
                                }),
                                function({
                                    onWrite: t,
                                    onError: n
                                } = {}) {
                                    try {
                                        if (!self.navigator ? .cookieEnabled || void 0 === Fr()) return;
                                        if (!Et() && !kt()) return;
                                        if (io.read("uniqueToken")) return;
                                        const n = to.uniqueToken;
                                        if (Kr(n)) return;
                                        try {
                                            xt({
                                                generateFallback: !1,
                                                tag: "wpm"
                                            })
                                        } catch {}
                                        Wr(n, e(), {
                                            maxAgeMs: 31104e6,
                                            path: "/",
                                            domain: eo(),
                                            sameSite: "Lax"
                                        }), t ? .()
                                    } catch (r) {
                                        n ? .(r)
                                    }
                                }({
                                    onWrite: () => {
                                        i.includes("unique_token_fallback") && o.record("feature_usage", 100, {
                                            feature: "unique_token_fallback"
                                        })
                                    },
                                    onError: e => {
                                        kr.notify(e, {
                                            context: "createWebPixelsManager/ensureUniqueToken",
                                            severity: "info",
                                            unhandled: !1
                                        })
                                    }
                                })
                            };
                        ! function() {
                            if (!Cr) try {
                                document.addEventListener(pe, Tr), Cr = !0
                            } catch (e) {
                                kr.notify(e, {
                                    context: "onConsentCollected/createOnConsentCollectedListener",
                                    unhandled: !1
                                })
                            }
                        }(), Pr(() => {
                            s()
                        }), s();
                        const a = new gi({
                            endpoint: yi({
                                storefrontBaseUrl: t.storefrontBaseUrl,
                                endpoint: t.monorailEndpoint
                            }),
                            onError: e => {
                                kr.notify(e, {
                                    context: "utilities/monorail/sendRequest",
                                    unhandled: !1,
                                    type: "metric"
                                })
                            }
                        });
                        Yo = a,
                            function(e = []) {
                                (Array.isArray(e) ? e : [e]).forEach(e => Tt.add(e))
                            }(t.enabledBetaFlags);
                        const c = new Set,
                            u = new qi({
                                onError: e => {
                                    const t = e instanceof Error ? `${e.name}:${e.message}` : String(e);
                                    c.has(t) || (c.add(t), kr.notify(e, {
                                        context: "foundation/consent/trackingTokens",
                                        severity: "warning",
                                        unhandled: !1
                                    }))
                                }
                            });
                        let d;
                        if (At("16072cab")) {
                            const e = new zo,
                                t = () => u.analyticsProcessingAllowed() || u.marketingAllowed(),
                                n = () => {
                                    t() && e.prefetch()
                                };
                            n(), Pr(n), d = {
                                getAttributes: () => t() ? e.getAttributes() : void 0
                            }
                        }
                        const l = new ji({
                                storefrontBaseUrl: t.storefrontBaseUrl,
                                frontendEventCollectorEndpoint: t.frontendEventCollectorEndpoint,
                                onError: e => {
                                    kr.notify(e, {
                                        context: "foundation/frontend-event-collector/send",
                                        unhandled: !1,
                                        type: "metric"
                                    })
                                },
                                shopId: t.shopId,
                                apiClientId: t.apiClientId,
                                customerId: t.customerId,
                                pageUrl: r,
                                pageId: t.pageId,
                                httpRequestId: t.requestId,
                                surface: t.surface,
                                consent: u
                            }),
                            p = n ? ? ((e, {
                                monorailClient: t,
                                collectorClient: n,
                                featureUsageClient: r,
                                onError: o,
                                pageUrl: i,
                                consent: s,
                                browserContext: a
                            }) => {
                                const c = new Dc(s, Ar),
                                    u = new Ac(s),
                                    d = new Ac(s, () => s.analyticsProcessingAllowed() && s.marketingAllowed()),
                                    l = i ? ? "",
                                    p = [Ec(new Vd(t, { ...e,
                                        consent: s,
                                        browserContext: a
                                    }), [u])];
                                if (p.push(Ec(new zc(t, {
                                        shopId: e.shopId,
                                        surface: e.surface,
                                        pageUrl: l
                                    }), [d]), Ec(new Yc(n, {
                                        surface: e.surface
                                    }), [d])), At("f12a06f7") && p.push(Ec(new Jd(new Qd(Jo, { ...e,
                                        consent: s
                                    }), {
                                        surface: e.surface
                                    }), [u])), e.features.agentContext) {
                                    const e = new el;
                                    p.push(Ec(new ol({
                                        client: e
                                    }), [u]))
                                }
                                e.features.storefrontEvents && p.push(... function({
                                    configuration: e,
                                    monorailClient: t,
                                    collectorClient: n,
                                    consent: r,
                                    pageUrl: o,
                                    onMonorailEmission: i,
                                    onCollectorEmission: s,
                                    onCollectorValidationError: a
                                }) {
                                    const c = [];
                                    Gt() && (c.push(new uu(t, { ...e,
                                        pageUrl: o,
                                        consent: r,
                                        onEmission: i
                                    })), At(Rt) && c.push(new Eu(n, { ...e,
                                        pageUrl: o,
                                        hoversEnabled: Xt(),
                                        onEmission: s,
                                        onValidationError: a
                                    })), Xt() && c.push(new Uu(t, { ...e,
                                        pageUrl: o,
                                        consent: r,
                                        onEmission: i
                                    })));
                                    const u = {
                                        pageType: jn(e.pageType),
                                        resourceId: e.resourceId,
                                        pageUrl: o
                                    };
                                    Dn(u) && (c.push(new zu(t, { ...e,
                                        ...u,
                                        consent: r,
                                        onEmission: i
                                    })), At(Rt) && c.push(new ed(n, { ...e,
                                        ...u,
                                        onEmission: s,
                                        onValidationError: a
                                    }))), e.resourceId && Ln(e.pageType) && (c.push(new ld(t, { ...e,
                                        productId: e.resourceId,
                                        pageUrl: o,
                                        consent: r,
                                        onEmission: i
                                    })), At(Rt) && c.push(new wd(n, {
                                        shopId: e.shopId,
                                        productId: e.resourceId,
                                        pageType: e.pageType,
                                        themeId: e.themeId,
                                        themeStoreId: e.themeStoreId,
                                        themePublished: e.themePublished,
                                        pageUrl: o,
                                        onEmission: s,
                                        onValidationError: a
                                    })));
                                    const d = {
                                        pageType: e.pageType,
                                        resourceId: e.resourceId
                                    };
                                    return Kn(d) && (c.push(new Cd(t, { ...e,
                                        resourceId: d.resourceId,
                                        pageUrl: o,
                                        consent: r,
                                        onEmission: i
                                    })), At(Rt) && c.push(new Md(n, {
                                        shopId: e.shopId,
                                        resourceId: d.resourceId,
                                        themeId: e.themeId,
                                        themeStoreId: e.themeStoreId,
                                        themePublished: e.themePublished,
                                        pageUrl: o,
                                        onEmission: s,
                                        onValidationError: a
                                    }))), c
                                }({
                                    configuration: e,
                                    monorailClient: t,
                                    collectorClient: n,
                                    consent: s,
                                    pageUrl: l,
                                    onMonorailEmission: e => {
                                        r.record("feature_usage", 1, {
                                            feature: "monorail_emission",
                                            schema_id: e.schemaId,
                                            event_name: e.eventName
                                        })
                                    },
                                    onCollectorEmission: ({
                                        eventName: e
                                    }) => {
                                        r.record("feature_usage", 1, {
                                            feature: "collector_emission",
                                            event_name: e,
                                            status: "emitted"
                                        })
                                    },
                                    onCollectorValidationError: ({
                                        eventName: e,
                                        reason: t
                                    }) => {
                                        r.record("feature_usage", 1, {
                                            feature: "collector_emission",
                                            event_name: e,
                                            status: "skipped",
                                            reason: t
                                        })
                                    }
                                }).map(e => Ec(e, [u])));
                                const h = {
                                    shopId: e.shopId,
                                    surface: e.surface,
                                    pageUrl: l
                                };
                                return p.push(new Pl(t, h), new Ol(t, h)), p.push(Ec(new lp(t, { ...e,
                                    consent: s,
                                    browserContext: a,
                                    onProduce: (e, t) => {
                                        r.record("feature_usage", 1, {
                                            feature: "monorail_emission",
                                            schema_id: _p[t],
                                            event_name: e
                                        })
                                    }
                                }), [u]), Ec(new gp(t, {
                                    onEventReceived: t => {
                                        r.record("feature_usage", 1, {
                                            feature: "monorail_forwarding"
                                        }), r.log("monorail_forwarding", {
                                            schema_id: t,
                                            shop_id: e.shopId,
                                            shop_domain: e.shopDomain,
                                            api_client_id: e.apiClientId,
                                            page_url: i
                                        })
                                    }
                                }), [u]), Ec(new _l(t, { ...e,
                                    pageUrl: i,
                                    consent: s,
                                    onProduce: e => {
                                        r.record("feature_usage", 1, {
                                            feature: "monorail_emission",
                                            schema_id: "storefront_customer_tracking_parity",
                                            event_name: e
                                        })
                                    }
                                }), [u])), p.push(new wp(r, {
                                    consent: s
                                }), c), new kc(p, {
                                    onError: o,
                                    bufferSize: 500,
                                    replayKeep: "newest"
                                })
                            })(t, {
                                pageUrl: r,
                                monorailClient: a,
                                collectorClient: l,
                                featureUsageClient: o,
                                consent: u,
                                browserContext: d,
                                onError: e => {
                                    kr.notify(e, {
                                        context: "createWebPixelsManager/eventHub",
                                        severity: "warning",
                                        unhandled: !1
                                    })
                                }
                            }),
                            m = p.emit.bind(p),
                            {
                                shopId: v,
                                surface: b,
                                storefrontBaseUrl: w,
                                extensionBaseUrl: x,
                                browserTarget: k,
                                features: T,
                                scope: A
                            } = t,
                            C = {
                                shopId: v,
                                surface: b,
                                browserTarget: k,
                                pageUrl: r,
                                storefrontBaseUrl: w,
                                extensionBaseUrl: x,
                                addMonorailEvent: Jo,
                                logError: kr.notify,
                                userConsent: Rr,
                                getClientId: $i,
                                emit: m
                            };
                        if (self[Xn]) {
                            const e = new g(`WebPixelsManager: ${Xn} global object is already defined`, {
                                groupingHash: "WebPixelsManager:GlobalObjectAlreadyDefined",
                                severity: "info"
                            });
                            return kr.notify(e, {
                                type: "metric",
                                context: "createWebPixelsManager",
                                severity: "info",
                                unhandled: !1
                            }), self[Xn]
                        }
                        T.trekkieShim && function({
                            callback: e,
                            onError: t
                        }) {
                            try {
                                if (At(Nt)) {
                                    const e = window.trekkie;
                                    Array.isArray(e) && e.forEach(function(t) {
                                        if (Array.isArray(t) && "ready" === t[0] && "function" == typeof t[1]) try {
                                            t[1].call(e)
                                        } catch {}
                                    })
                                }
                                const r = window.__TREKKIE_SHIM_QUEUE;
                                if (!Array.isArray(r)) return void t(new Error("__TREKKIE_SHIM_QUEUE is unavailable or not an array."), {
                                    context: "trekkieShim/queueUnavailable"
                                });
                                for (; r.length > 0;) {
                                    const o = r.shift();
                                    if (!o) break;
                                    const {
                                        from: i,
                                        method: s,
                                        args: a
                                    } = o;
                                    try {
                                        e({
                                            from: `${i} -> wpm-replay-queue`,
                                            method: s,
                                            args: a
                                        })
                                    } catch (n) {
                                        t(n, {
                                            context: `trekkieShim/replay/${s}`
                                        })
                                    }
                                }
                                const o = (...r) => (r.forEach(({
                                    from: r,
                                    method: o,
                                    args: i
                                }) => {
                                    try {
                                        e({
                                            from: `${r} -> wpm-replay-queue-push`,
                                            method: o,
                                            args: i
                                        })
                                    } catch (n) {
                                        t(n, {
                                            context: `trekkieShim/push/${o}`
                                        })
                                    }
                                }), r.length);
                                Reflect.defineProperty(r, "push", {
                                    value: o,
                                    writable: !0,
                                    configurable: !0
                                }) || t(new Error("Failed to install trekkie shim push interceptor: __TREKKIE_SHIM_QUEUE is not extensible."), {
                                    context: "trekkieShim/installPush"
                                }), new Promise((e, t) => {
                                    const n = window.__TREKKIE_SHIM_QUEUE;
                                    if (!n) return void t(new Error("__TREKKIE_SHIM_QUEUE is not defined on the window object."));
                                    let r = !1;
                                    const o = setTimeout(() => {
                                            r || (r = !0, t(new Error("Trekkie did not become ready within 30000ms.")))
                                        }, 3e4),
                                        i = () => {
                                            r || (r = !0, clearTimeout(o), e(window.trekkie))
                                        };
                                    if (n.ready) return void i();
                                    let s = !1;
                                    Reflect.defineProperty(n, "ready", {
                                        get: () => s,
                                        set(e) {
                                            s = e, i()
                                        },
                                        configurable: !0
                                    }) || i()
                                }).catch(() => {})
                            } catch (n) {
                                t(n, {
                                    context: "trekkieShim"
                                })
                            }
                        }({
                            callback: e => {
                                m("log:trekkie:track", e)
                            },
                            onError: (e, t) => {
                                kr.notify(e, { ...t,
                                    severity: "warning",
                                    unhandled: !1,
                                    options: {
                                        sampleRate: .01
                                    }
                                })
                            }
                        });
                        const O = Ko("load", {
                                version: Zn,
                                bundleTarget: Qn,
                                pageUrl: r,
                                status: "loading",
                                surface: b,
                                shopId: v,
                                visitToken: Kr("_shopify_s")
                            }),
                            N = Di(),
                            R = {
                                init(e) {
                                    if (function() {
                                            const e = `\\/(${Na.Wpm}|${Na.WebPixels})@(.+)\\/sandbox`;
                                            return null !== self.location.href.match(new RegExp(e))
                                        }()) return xc;
                                    const {
                                        initData: n,
                                        isMerchantRequest: o,
                                        monorailRegion: i,
                                        webPixelsConfigList: s
                                    } = e, c = { ...e,
                                        ...t,
                                        monorailEndpoint: t.monorailEndpoint || e.monorailEndpoint
                                    };
                                    if (Ep) return kr.notify(new g(`WebPixelsManager: ${Xn} is being initialized multiple times`, {
                                        groupingHash: "WebPixelsManager:MultipleInitialization",
                                        severity: "info"
                                    }), {
                                        type: "metric",
                                        context: "createWebPixelsManager/init",
                                        severity: "info",
                                        unhandled: !1,
                                        initConfig: c
                                    }), Ep;
                                    const d = Zr();
                                    o && Zt(() => self.sessionStorage.setItem(tr, "true")), a.setEndpoint(yi({
                                        storefrontBaseUrl: w,
                                        region: i,
                                        endpoint: t.monorailEndpoint
                                    })), (Zt(() => "true" === self.sessionStorage.getItem(tr), !1) || b === y.CustomerAccount) && Ps.init(c);
                                    const l = it().toString(),
                                        p = Ko("unload", {
                                            version: Zn,
                                            bundleTarget: Qn,
                                            pageUrl: r,
                                            shopId: v,
                                            surface: b,
                                            isCompleted: "false",
                                            runtimeErrorCaught: "false",
                                            userCanBeTracked: l,
                                            sessionId: N
                                        });
                                    var x;
                                    x = p, window.addEventListener("pagehide", () => {
                                        x.payload.pageDuration = Dr("page:session") ? .measurement ? .duration, Jo(x, !0)
                                    });
                                    const k = Ia(C),
                                        O = function(e) {
                                            const t = new zi({
                                                bufferSize: 1e3,
                                                subscribeAllKey: "all_customer_privacy_events"
                                            });
                                            return t.use(sa), {
                                                publish(e, n, r) {
                                                    if ("string" != typeof e) throw new g("Expected event name to be a string, but got " + typeof e, {
                                                        groupingHash: "CustomerPrivacyEventBus:PublishEventNameNotString"
                                                    });
                                                    if (e !== pe) throw new g(`Expected event name to be a ${pe}, but got "${e}".`, {
                                                        groupingHash: "CustomerPrivacyEventBus:PublishEventNameNotSupported"
                                                    });
                                                    return t.publish(e, n, r)
                                                },
                                                subscribe(n, r, o = {}) {
                                                    if (n !== pe) throw new g(`Event name "${n}" is not supported in the CustomerPrivacyEventBus.`, {
                                                        groupingHash: "CustomerPrivacyEventBus:SubscribeEventNameNotSupported"
                                                    });
                                                    return t.subscribe(n, t => {
                                                        if (e === y.CheckoutOneSdk && o.scope !== Ts.CheckoutOneSdk) return;
                                                        const n = {
                                                            configuration: o.pixelRuntimeConfig ? .configuration,
                                                            eventPayloadVersion: o.schemaVersion || o.pixelRuntimeConfig ? .eventPayloadVersion || "unknown",
                                                            id: o.pixelRuntimeConfig ? .id || "unknown",
                                                            type: o.pixelRuntimeConfig ? .type || "unknown",
                                                            runtimeContext: o.pixelRuntimeConfig ? .runtimeContext || "unknown",
                                                            restrictions: o.pixelRuntimeConfig ? .restrictions,
                                                            scriptVersion: o.pixelRuntimeConfig ? .scriptVersion || "unknown",
                                                            apiClientId: o.pixelRuntimeConfig ? .apiClientId
                                                        };
                                                        r.call(t, t), Xo("subscriberEventEmitPrivacy", {
                                                            version: Zn,
                                                            bundleTarget: Qn,
                                                            pageUrl: self.location.href,
                                                            shopId: o.shopId,
                                                            surface: o.surface,
                                                            pixelId: n.id,
                                                            pixelAppId: Os(n),
                                                            pixelSource: n.type,
                                                            pixelRuntimeContext: n.runtimeContext,
                                                            pixelScriptVersion: n.scriptVersion,
                                                            pixelConfiguration: n.configuration,
                                                            pixelEventSchemaVersion: n.eventPayloadVersion,
                                                            eventName: pe,
                                                            eventId: qt()
                                                        })
                                                    }, o)
                                                }
                                            }
                                        }(b),
                                        R = {
                                            context: "createWebPixelsManager/init",
                                            severity: "warning",
                                            unhandled: !1,
                                            initConfig: c
                                        },
                                        j = Ko("init", {
                                            version: Zn,
                                            bundleTarget: Qn,
                                            pageUrl: r,
                                            shopId: v,
                                            surface: b,
                                            status: "initializing",
                                            userCanBeTracked: l
                                        });
                                    try {
                                        if (window.Shopify && !0 === window.Shopify.designMode) return window.console && console.log("[WebPixelsManager] Prevented from executing in the Theme Editor"), xc;
                                        if (/^web-pixel-sandbox/.test(self.name)) {
                                            const e = new _r("WebPixelsManager: browser library is being run in a sandbox");
                                            throw kr.notify(e, { ...R,
                                                type: "metric",
                                                library: "browser"
                                            }), e
                                        }
                                        b === y.CheckoutOneSdk && (s.length = 0);
                                        const e = s.reduce((e, t) => {
                                            t.type = t.type.toUpperCase(), t.runtimeContext = t.runtimeContext ? .toUpperCase();
                                            const r = $a(C, {
                                                webPixelConfig: t,
                                                eventBus: k,
                                                customerPrivacyEventBus: O,
                                                initData: n,
                                                cookieRestrictedDomains: d
                                            });
                                            return t.restrictions ? .preventLoadingBeforeEvent ? e.waiting.push(r) : e.ready.push(r), e
                                        }, {
                                            ready: [],
                                            waiting: []
                                        });
                                        Promise.all(e.ready).then(() => function(e) {
                                            const {
                                                measurement: t
                                            } = Dr("completed");
                                            e.payload.isCompleted = "true", e.payload.runTimeDuration = t ? .duration, e.payload.startTime = t ? .startTime
                                        }(p)).catch(e => {
                                            window.console && console.error("[Web Pixels]", e)
                                        }), Promise.all(e.waiting).catch(() => {}), u.onConsentCollected(e => {
                                            e && e.detail && O.publish(pe, {
                                                customerPrivacy: {
                                                    analyticsProcessingAllowed: e.detail.analyticsAllowed,
                                                    marketingAllowed: e.detail.marketingAllowed,
                                                    preferencesProcessingAllowed: e.detail.preferencesAllowed,
                                                    saleOfDataAllowed: e.detail.saleOfDataAllowed
                                                }
                                            })
                                        });
                                        const o = (b === y.CustomerAccount ? k.publish : k.publishDomEvent).bind(k),
                                            i = {
                                                onError: kr.notify.bind(kr)
                                            };
                                        if (T.storefrontEvents) {
                                            try {
                                                ! function(e, t) {
                                                    ee(e, t),
                                                        function(e, t) {
                                                            P(n => {
                                                                const r = n.querySelector('[name="previous_step"]');
                                                                r && r instanceof HTMLInputElement && "payment_method" === r.value && S(document.body, "submit", n => {
                                                                    ! function(e, t, n) {
                                                                        const r = t || window.event;
                                                                        if (!r) return;
                                                                        const o = r.target || r.srcElement;
                                                                        if (o && o instanceof HTMLFormElement && o.getAttribute("action") && null !== o.getAttribute("data-payment-form")) try {
                                                                            const t = n.checkout;
                                                                            if (!t) throw new g("Checkout data not found");
                                                                            e("payment_info_submitted", {
                                                                                checkout: t
                                                                            })
                                                                        } catch {}
                                                                    }(e, n, t)
                                                                })
                                                            })
                                                        }(e, t)
                                                }(k.publish.bind(k), n)
                                            } catch (M) {
                                                kr.notify(M, {
                                                    context: "createWebPixelsManager/createShopEventsListener"
                                                })
                                            }
                                            Jn({
                                                pageType: t.pageType,
                                                resourceId: t.resourceId,
                                                pageUrl: r,
                                                products: n ? .products,
                                                emit: m,
                                                onError: kr.notify
                                            })
                                        }
                                        return T.cartPermalink && function(e, {
                                            cart: t
                                        }) {
                                            try {
                                                if (!window.localStorage) return;
                                                const n = new URLSearchParams(window.location.search).get(E);
                                                if (!n) return;
                                                if (n === window.localStorage.getItem(E)) return;
                                                window.localStorage.setItem(E, n), t ? .lines.forEach(t => {
                                                    V(e, t, t.quantity, I, "permalink")
                                                })
                                            } catch {}
                                        }(k.publish.bind(k), n), T.domEvents && mc(o, i), T.advancedDomEvents && s.some(({
                                            capabilities: e
                                        }) => (e || []).includes(_.AdvancedDomEvents)) && (U = o, D = i, wc.map(e => {
                                            try {
                                                return e(U, D)
                                            } catch (M) {
                                                return D ? .onError ? .(M, {
                                                    context: "createAdvancedDomEventsListener"
                                                }), () => {}
                                            }
                                        }), mc(o, { ...i,
                                            eventPrefix: "advanced_dom_"
                                        })), j.payload.status = "initialized", Jo(j), Ep = function(e, {
                                            eventBus: t,
                                            customerId: n,
                                            scope: r
                                        }) {
                                            const o = function({
                                                    emit: e
                                                }, t) {
                                                    return {
                                                        visitor: (n = {}, r) => {
                                                            const o = function(e = {}, t) {
                                                                if (!e || "object" != typeof e) return "Visitor info must be of type object";
                                                                const {
                                                                    email: n,
                                                                    phone: r
                                                                } = e;
                                                                return n || r ? n && "string" != typeof n ? "Email must be of type string" : r && "string" != typeof r ? "Phone must be of type string" : t ? .appId && "string" != typeof t.appId ? "appId must be of type string" : t ? .apiClientId && "string" != typeof t.apiClientId ? "apiClientId must be of type string" : null : "Visitor must have one of phone or email"
                                                            }(n, r);
                                                            if (o) throw new _c(o);
                                                            return e("log:visitor:reported", {
                                                                event: {
                                                                    email: n.email,
                                                                    phone: n.phone,
                                                                    customerId: t.customerId,
                                                                    apiClientId: r ? .appId || r ? .apiClientId
                                                                }
                                                            }), !0
                                                        }
                                                    }
                                                }(e, {
                                                    customerId: n
                                                }),
                                                {
                                                    shopId: i,
                                                    surface: s
                                                } = e,
                                                a = (e, n, o) => !(s === y.CustomerAccount && !f(e) && r.publish !== Cs.All) && t.publish(e, n, o);
                                            return {
                                                publish: (e, t, n) => a(e, t, n),
                                                publishCustomEvent: (e, n, r = {}) => s === y.CustomerAccount ? a(e, n, r) : t.publishCustomEvent(e, n, r),
                                                publishDomEvent: (e, n, r = {}) => s === y.CustomerAccount ? a(e, n, r) : t.publishDomEvent(e, n, r),
                                                subscribe: (e, n, r) => t.subscribe(e, n, { ...r,
                                                    shopId: i,
                                                    surface: s,
                                                    scope: s === y.CheckoutOneSdk ? Ts.CheckoutOneSdk : void 0
                                                }),
                                                visitor: (e, t) => o.visitor(e, t)
                                            }
                                        }(C, {
                                            eventBus: k,
                                            customerId: n ? .customer ? .id,
                                            scope: A
                                        }), t.events.forEach(([e, t, n]) => {
                                            try {
                                                b === y.CustomerAccount || h(e) ? k.publish(e, t, n) : k.publishCustomEvent(e, t, n)
                                            } catch (M) {
                                                kr.notify(M, {
                                                    context: "createWebPixelsManager/init/replayEvents",
                                                    severity: "warning",
                                                    unhandled: !1,
                                                    initConfig: c
                                                })
                                            }
                                        }), Ep
                                    } catch (M) {
                                        return M instanceof _r || kr.notify(M, {
                                            context: "init",
                                            initConfig: c
                                        }), window.console && console.error(M), j.payload.status = "failed", j.payload.errorMsg = M ? .message, Jo(j), p.payload.runtimeErrorCaught = "true", xc
                                    }
                                    var U, D
                                }
                            };
                        return Mi(self, Xn, {
                            value: R,
                            writable: !1,
                            configurable: !1,
                            enumerable: !1
                        }, !1), O.payload.status = "loaded", O.payload.visitToken = Kr("_shopify_s"), Object.assign(O.payload, xp(t)), Jo(O), R
                    } catch (o) {
                        const e = "string" == typeof o ? .message ? o.message : void 0,
                            n = o instanceof _r || "WebPixelsHandledError" === o.name;
                        return kr.notify(o, {
                            context: "createWebPixelsManager",
                            severity: n ? "warning" : "error",
                            unhandled: !n
                        }), window.console && console.error(o), Jo(Ko("load", {
                            version: Zn,
                            bundleTarget: Qn,
                            pageUrl: r,
                            status: "manager-create-error",
                            surface: t.surface,
                            errorMsg: e,
                            failureReason: "manager_create_failed",
                            shopId: t.shopId,
                            visitToken: Kr("_shopify_s"),
                            ...xp(t)
                        }), !0), {
                            init: () => xc
                        }
                    }
                }({
                    configuration: Up()
                })
        } catch (Dp) {
            kr.notify(Dp, {
                context: "entry-browser",
                severity: "error",
                unhandled: !1
            })
        }
    })()
})();