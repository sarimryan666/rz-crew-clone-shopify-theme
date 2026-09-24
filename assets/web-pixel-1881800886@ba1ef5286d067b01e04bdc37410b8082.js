(() => {
    var B = Object.create;
    var x = Object.defineProperty;
    var F = Object.getOwnPropertyDescriptor;
    var H = Object.getOwnPropertyNames,
        w = Object.getOwnPropertySymbols,
        K = Object.getPrototypeOf,
        j = Object.prototype.hasOwnProperty,
        Q = Object.prototype.propertyIsEnumerable;
    var N = (o, e, t) => e in o ? x(o, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : o[e] = t,
        h = (o, e) => {
            for (var t in e || (e = {})) j.call(e, t) && N(o, t, e[t]);
            if (w)
                for (var t of w(e)) Q.call(e, t) && N(o, t, e[t]);
            return o
        };
    var m = (o, e) => () => (o && (e = o(o = 0)), e);
    var V = (o, e) => () => (e || o((e = {
        exports: {}
    }).exports, e), e.exports);
    var Y = (o, e, t, d) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let n of H(e)) !j.call(o, n) && n !== t && x(o, n, {
                get: () => e[n],
                enumerable: !(d = F(e, n)) || d.enumerable
            });
        return o
    };
    var Z = (o, e, t) => (t = o != null ? B(K(o)) : {}, Y(e || !o || !o.__esModule ? x(t, "default", {
        value: o,
        enumerable: !0
    }) : t, o));
    var R = (o, e, t) => new Promise((d, n) => {
        var s = c => {
                try {
                    l(t.next(c))
                } catch (i) {
                    n(i)
                }
            },
            f = c => {
                try {
                    l(t.throw(c))
                } catch (i) {
                    n(i)
                }
            },
            l = c => c.done ? d(c.value) : Promise.resolve(c.value).then(s, f);
        l((t = t.apply(o, e)).next())
    });
    var $, q = m(() => {
        $ = "WebPixel::Render"
    });
    var I, A = m(() => {
        q();
        I = o => shopify.extend($, o)
    });
    var J = m(() => {
        A()
    });
    var L = m(() => {
        J()
    });
    var G = V(O => {
        L();
        I(n => R(null, [n], function*({
            analytics: o,
            browser: e,
            settings: t,
            init: d
        }) {
            let s = yield e.cookie.get("__adroll_fpc"), f = decodeURIComponent(yield e.cookie.get("__ar_v4")).replace(/:\d+(:)/g, "$1"), l = yield e.sessionStorage.getItem("adroll_tpc"), c = yield e.sessionStorage.getItem("adroll_dqs"), i = yield e.localStorage.getItem("__adroll_consent_data"), k = null;
            if (i !== null) try {
                k = JSON.parse(i).arconsent
            } catch (a) {}
            let p = {};
            if (c !== null) try {
                p = Object.fromEntries(new URLSearchParams(c).entries())
            } catch (a) {}
            o.subscribe("checkout_completed", a => R(null, null, function*() {
                var D, C, T;
                let y = Math.random() * 1e11,
                    u = a.data.checkout.lineItems.map(r => ({
                        product_id: `${r.variant.product.id}-${r.variant.id}`,
                        platform_prod_id: r.variant.product.id,
                        platform_variant_id: r.variant.id,
                        price: r.variant.price.amount,
                        quantity: r.quantity.toString()
                    })),
                    X = {
                        currency: a.data.checkout.totalPrice.currencyCode,
                        ORDER_ID: parseInt(a.data.checkout.order.id),
                        USER_ID: parseInt((D = d.data.customer) == null ? void 0 : D.id) || void 0,
                        checkout_token: a.data.checkout.token,
                        order_id: a.data.checkout.order.id,
                        conversion_value: a.data.checkout.totalPrice.amount,
                        products: u
                    },
                    b = {
                        currency: a.data.checkout.totalPrice.currencyCode,
                        ORDER_ID: a.data.checkout.order.id,
                        USER_ID: (C = d.data.customer) == null ? void 0 : C.id,
                        checkout_token: a.data.checkout.token,
                        order_id: a.data.checkout.order.id,
                        conversion_value: a.data.checkout.totalPrice.amount,
                        products: u
                    },
                    _ = {
                        currency: a.data.checkout.totalPrice.currencyCode,
                        ORDER_ID: a.data.checkout.order.id,
                        USER_ID: (T = d.data.customer) == null ? void 0 : T.id,
                        checkout_token: a.data.checkout.token,
                        order_id: a.data.checkout.order.id,
                        conversion_value: a.data.checkout.totalPrice.amount,
                        products: JSON.stringify(u),
                        segment_name: "shopify_responsive_checkout"
                    },
                    E = new URL(t.advertisableEid, "https://d.adroll.com/uev/");
                E.pathname += "/" + t.pixelEid;
                let g = h({
                    adroll_fpc: s,
                    adroll_tpc: l,
                    arconsent: k,
                    flg: 1,
                    pv: y,
                    arrfrr: a.context.document.location.href,
                    event_name: "purchase",
                    adroll_version: "2.0",
                    event_attributes: JSON.stringify(X),
                    conv_value: a.data.checkout.totalPrice.amount,
                    adroll_currency: a.data.checkout.totalPrice.currencyCode,
                    pixel_type: "shopify_web_pixel"
                }, p);
                Object.keys(g).forEach(r => {
                    g[r] !== null && E.searchParams.append(r, g[r])
                });
                let U = new URL(t.advertisableEid, "https://d.adroll.com/p/"),
                    S = h({
                        adroll_fpc: s,
                        flg: 1,
                        pv: y,
                        arrfrr: a.context.document.location.href,
                        adroll_external_data: Object.keys(b).filter(r => _[r] !== void 0).map(r => `${encodeURIComponent(r)}=${encodeURIComponent(b[r])}`).join("&"),
                        adroll_version: "2.0",
                        adroll_products: JSON.stringify(u),
                        adroll_product_action: "purchase",
                        pixel_type: "shopify_web_pixel"
                    }, p);
                Object.keys(S).forEach(r => {
                    U.searchParams.append(r, S[r])
                });
                let P = new URL(t.advertisableEid, "https://d.adroll.com/segment/");
                P.pathname += "/" + t.pixelEid;
                let v = h({
                    adroll_fpc: s,
                    adroll_tpc: l,
                    arconsent: k,
                    flg: 1,
                    pv: y,
                    arrfrr: a.context.document.location.href,
                    cookie: f,
                    adroll_s_ref: a.context.document.referrer,
                    keyw: "",
                    name: "shopify_responsive_checkout",
                    conv_value: a.data.checkout.totalPrice.amount,
                    adroll_currency: a.data.checkout.totalPrice.currencyCode,
                    adroll_external_data: Object.keys(_).filter(r => _[r] !== void 0).map(r => `${encodeURIComponent(r)}=${encodeURIComponent(_[r])}`).join("&"),
                    adroll_version: "2.0",
                    pixel_type: "shopify_web_pixel"
                }, p);
                Object.keys(v).forEach(r => {
                    v[r] !== null && P.searchParams.append(r, v[r])
                });
                let M = fetch(E, {
                        method: "GET",
                        keepalive: !0,
                        mode: "no-cors",
                        referrerPolicy: "origin",
                        credentials: "include"
                    }),
                    W = fetch(U, {
                        method: "GET",
                        keepalive: !0,
                        mode: "no-cors",
                        referrerPolicy: "origin",
                        credentials: "include"
                    }),
                    z = fetch(P, {
                        method: "GET",
                        keepalive: !0,
                        mode: "no-cors",
                        referrerPolicy: "origin",
                        credentials: "include"
                    });
                yield Promise.all([M, W, z])
            }))
        }))
    });
    var pe = Z(G());
})();