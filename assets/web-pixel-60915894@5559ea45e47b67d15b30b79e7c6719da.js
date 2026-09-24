(() => {
    var D = Object.create;
    var w = Object.defineProperty;
    var J = Object.getOwnPropertyDescriptor;
    var L = Object.getOwnPropertyNames;
    var M = Object.getPrototypeOf,
        q = Object.prototype.hasOwnProperty;
    var n = (r, e) => () => (r && (e = r(r = 0)), e);
    var z = (r, e) => () => (e || r((e = {
        exports: {}
    }).exports, e), e.exports);
    var X = (r, e, t, c) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let o of L(e)) !q.call(r, o) && o !== t && w(r, o, {
                get: () => e[o],
                enumerable: !(c = J(e, o)) || c.enumerable
            });
        return r
    };
    var B = (r, e, t) => (t = r != null ? D(M(r)) : {}, X(e || !r || !r.__esModule ? w(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r));
    var l = (r, e, t) => new Promise((c, o) => {
        var d = a => {
                try {
                    s(t.next(a))
                } catch (i) {
                    o(i)
                }
            },
            S = a => {
                try {
                    s(t.throw(a))
                } catch (i) {
                    o(i)
                }
            },
            s = a => a.done ? c(a.value) : Promise.resolve(a.value).then(d, S);
        s((t = t.apply(r, e)).next())
    });
    var E, x = n(() => {
        E = "WebPixel::Render"
    });
    var N, b = n(() => {
        x();
        N = function(e) {
            return shopify.extend(E, e)
        }
    });
    var I = n(() => {});
    var O = n(() => {});
    var A = n(() => {});
    var T = n(() => {
        I();
        O();
        A()
    });
    var P = n(() => {
        b();
        T()
    });
    var C = n(() => {
        P()
    });
    var k = z(_ => {
        C();
        var y = null,
            m = {
                SessionName: "SeStatisticSession",
                SearchStorageName: "ProductsSearch"
            },
            F = r => l(null, null, function*() {
                let e = {
                        clicked: !1,
                        uuid: null
                    },
                    t = yield v(m.SearchStorageName);
                if (!t) return e;
                for (let c = 0; c < t.length; c++)
                    if (r == t[c].product_id) {
                        e.clicked = !0, t[c].uuid && (e.uuid = t[c].uuid);
                        break
                    }
                return e
            }),
            v = r => l(null, null, function*() {
                try {
                    return JSON.parse(yield y.localStorage.getItem(r))
                } catch (e) {
                    return null
                }
            }),
            R = (r, e) => l(null, null, function*() {
                try {
                    yield y.localStorage.setItem(r, JSON.stringify(e))
                } catch (t) {
                    return null
                }
            }),
            H = (r, e, t) => l(null, null, function*() {
                let c = `https://${t.host}/analytics`,
                    o = r.presentment_currency ? r.presentment_currency : r.currencyCode ? r.currencyCode : "",
                    d = yield v("snize-shopify-cart-currency"), S = r.order.id ? r.order.id : 0, s = yield v(m.SessionName), a = {
                        external_order_id: S,
                        currency: o,
                        session_id: s.session_id,
                        order_items: []
                    };
                for (let i = 0; i < e.length; i++) {
                    let u = e[i].variant.product.id,
                        p = yield F(u);
                    if (p.clicked) {
                        let f = e[i].variant.price.currencyCode ? e[i].variant.price.currencyCode : o,
                            V = e[i].variant.price.amount,
                            g = e[i].variant.price.amount;
                        d && d.hasOwnProperty(f) && (g = (g / d[f].rate).toFixed(2));
                        let h = {
                            product_id: u,
                            variant_id: e[i].variant.id,
                            price: g,
                            original_price: V,
                            quantity: e[i].quantity,
                            currency: f,
                            add_also_bought: p.clicked
                        };
                        p.uuid && (h.uuid = p.uuid), a.order_items.push(h)
                    }
                }
                if (!a.order_items.length) R(m.SearchStorageName, []);
                else {
                    let i = {
                            api_key: t.apiKey,
                            order_data: a,
                            send_from_beacon: !0
                        },
                        u = yield y.sendBeacon(c, JSON.stringify(i));
                    console.log("checkout_completed", t, a, u), u && R(m.SearchStorageName, [])
                }
            });
        N(({
            analytics: r,
            browser: e,
            settings: t,
            init: c
        }) => {
            y = e, r.subscribe("checkout_completed", o => {
                H(o.data.checkout, o.data.checkout.lineItems, t)
            })
        })
    });
    var se = B(k());
})();