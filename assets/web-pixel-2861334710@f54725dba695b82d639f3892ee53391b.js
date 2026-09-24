(() => {
    var N = Object.create;
    var m = Object.defineProperty;
    var O = Object.getOwnPropertyDescriptor;
    var k = Object.getOwnPropertyNames;
    var S = Object.getPrototypeOf,
        _ = Object.prototype.hasOwnProperty;
    var d = (e, r, t) => () => {
        if (t) throw t[0];
        try {
            return e && (r = e(e = 0)), r
        } catch (i) {
            throw t = [i], i
        }
    };
    var v = (e, r) => () => {
        try {
            return r || e((r = {
                exports: {}
            }).exports, r), r.exports
        } catch (t) {
            throw r = 0, t
        }
    };
    var D = (e, r, t, i) => {
        if (r && typeof r == "object" || typeof r == "function")
            for (let o of k(r)) !_.call(e, o) && o !== t && m(e, o, {
                get: () => r[o],
                enumerable: !(i = O(r, o)) || i.enumerable
            });
        return e
    };
    var P = (e, r, t) => (t = e != null ? N(S(e)) : {}, D(r || !e || !e.__esModule ? m(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
    var h = (e, r, t) => new Promise((i, o) => {
        var p = n => {
                try {
                    s(t.next(n))
                } catch (c) {
                    o(c)
                }
            },
            a = n => {
                try {
                    s(t.throw(n))
                } catch (c) {
                    o(c)
                }
            },
            s = n => n.done ? i(n.value) : Promise.resolve(n.value).then(p, a);
        s((t = t.apply(e, r)).next())
    });
    var y, f = d(() => {
        y = "WebPixel::Render"
    });
    var l, T = d(() => {
        f();
        l = e => shopify.extend(y, e)
    });
    var g = d(() => {
        T()
    });
    var x = d(() => {
        g()
    });
    var b = v(E => {
        x();
        l(({
            analytics: e,
            browser: r,
            init: t,
            settings: i
        }) => {
            e.subscribe("checkout_completed", o => {
                h(null, null, function*() {
                    var p;
                    try {
                        let a = yield r.localStorage.getItem("FMO_attr").then(I => JSON.parse(I || "[]")).catch(() => []);
                        if (a.length === 0) return;
                        let s = (p = o.data.checkout.order) == null ? void 0 : p.id;
                        if (!s) {
                            console.error("[Fomo] Missing order ID");
                            return
                        }
                        let {
                            backendUrl: n,
                            clientId: c,
                            shopifyDomain: u
                        } = i;
                        yield fetch(`${n}/shopify/js/${c}/orders`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                shopify_order_id: s,
                                shop: u,
                                history: a
                            }),
                            keepalive: !0
                        })
                    } catch (a) {
                        console.error("[Fomo] Failed to track attribution", a)
                    }
                })
            })
        })
    });
    var W = P(b());
})();