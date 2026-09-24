var _u = Object.defineProperty;
var Cu = (t, e, n) => e in t ? _u(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var j = (t, e, n) => Cu(t, typeof e != "symbol" ? e + "" : e, n);
/**
 * @vue/shared v3.5.29
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function ls(t) {
    const e = Object.create(null);
    for (const n of t.split(",")) e[n] = 1;
    return n => n in e
}
const Ie = {},
    Rn = [],
    $t = () => {},
    sa = () => !1,
    nr = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
    us = t => t.startsWith("onUpdate:"),
    He = Object.assign,
    cs = (t, e) => {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
    },
    Eu = Object.prototype.hasOwnProperty,
    Ee = (t, e) => Eu.call(t, e),
    ue = Array.isArray,
    Dn = t => Si(t) === "[object Map]",
    oa = t => Si(t) === "[object Set]",
    Ns = t => Si(t) === "[object Date]",
    ce = t => typeof t == "function",
    De = t => typeof t == "string",
    Ct = t => typeof t == "symbol",
    _e = t => t !== null && typeof t == "object",
    aa = t => (_e(t) || ce(t)) && ce(t.then) && ce(t.catch),
    la = Object.prototype.toString,
    Si = t => la.call(t),
    Iu = t => Si(t).slice(8, -1),
    ua = t => Si(t) === "[object Object]",
    ir = t => De(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
    ti = ls(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    rr = t => {
        const e = Object.create(null);
        return (n => e[n] || (e[n] = t(n)))
    },
    Au = /-\w/g,
    wt = rr(t => t.replace(Au, e => e.slice(1).toUpperCase())),
    Ou = /\B([A-Z])/g,
    cn = rr(t => t.replace(Ou, "-$1").toLowerCase()),
    sr = rr(t => t.charAt(0).toUpperCase() + t.slice(1)),
    mr = rr(t => t ? `on${sr(t)}` : ""),
    on = (t, e) => !Object.is(t, e),
    Ni = (t, ...e) => {
        for (let n = 0; n < t.length; n++) t[n](...e)
    },
    ca = (t, e, n, i = !1) => {
        Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: !1,
            writable: i,
            value: n
        })
    },
    fs = t => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e
    },
    Lu = t => {
        const e = De(t) ? Number(t) : NaN;
        return isNaN(e) ? t : e
    };
let Fs;
const or = () => Fs || (Fs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function ds(t) {
    if (ue(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const i = t[n],
                r = De(i) ? Mu(i) : ds(i);
            if (r)
                for (const s in r) e[s] = r[s]
        }
        return e
    } else if (De(t) || _e(t)) return t
}
const Pu = /;(?![^(]*\))/g,
    Ru = /:([^]+)/,
    Du = /\/\*[^]*?\*\//g;

function Mu(t) {
    const e = {};
    return t.replace(Du, "").split(Pu).forEach(n => {
        if (n) {
            const i = n.split(Ru);
            i.length > 1 && (e[i[0].trim()] = i[1].trim())
        }
    }), e
}

function hs(t) {
    let e = "";
    if (De(t)) e = t;
    else if (ue(t))
        for (let n = 0; n < t.length; n++) {
            const i = hs(t[n]);
            i && (e += i + " ")
        } else if (_e(t))
            for (const n in t) t[n] && (e += n + " ");
    return e.trim()
}
const Nu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Fu = ls(Nu);

function fa(t) {
    return !!t || t === ""
}

function $u(t, e) {
    if (t.length !== e.length) return !1;
    let n = !0;
    for (let i = 0; n && i < t.length; i++) n = ps(t[i], e[i]);
    return n
}

function ps(t, e) {
    if (t === e) return !0;
    let n = Ns(t),
        i = Ns(e);
    if (n || i) return n && i ? t.getTime() === e.getTime() : !1;
    if (n = Ct(t), i = Ct(e), n || i) return t === e;
    if (n = ue(t), i = ue(e), n || i) return n && i ? $u(t, e) : !1;
    if (n = _e(t), i = _e(e), n || i) {
        if (!n || !i) return !1;
        const r = Object.keys(t).length,
            s = Object.keys(e).length;
        if (r !== s) return !1;
        for (const o in t) {
            const a = t.hasOwnProperty(o),
                l = e.hasOwnProperty(o);
            if (a && !l || !a && l || !ps(t[o], e[o])) return !1
        }
    }
    return String(t) === String(e)
}
const da = t => !!(t && t.__v_isRef === !0),
    Bu = t => De(t) ? t : t == null ? "" : ue(t) || _e(t) && (t.toString === la || !ce(t.toString)) ? da(t) ? Bu(t.value) : JSON.stringify(t, ha, 2) : String(t),
    ha = (t, e) => da(e) ? ha(t, e.value) : Dn(e) ? {
        [`Map(${e.size})`]: [...e.entries()].reduce((n, [i, r], s) => (n[vr(i, s) + " =>"] = r, n), {})
    } : oa(e) ? {
        [`Set(${e.size})`]: [...e.values()].map(n => vr(n))
    } : Ct(e) ? vr(e) : _e(e) && !ue(e) && !ua(e) ? String(e) : e,
    vr = (t, e = "") => {
        var n;
        return Ct(t) ? `Symbol(${(n=t.description)!=null?n:e})` : t
    };
/**
 * @vue/reactivity v3.5.29
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Ge;
class pa {
    constructor(e = !1) {
        this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Ge, !e && Ge && (this.index = (Ge.scopes || (Ge.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let e, n;
            if (this.scopes)
                for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].pause();
            for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let e, n;
            if (this.scopes)
                for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].resume();
            for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].resume()
        }
    }
    run(e) {
        if (this._active) {
            const n = Ge;
            try {
                return Ge = this, e()
            } finally {
                Ge = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = Ge, Ge = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (Ge = this.prevScope, this.prevScope = void 0)
    }
    stop(e) {
        if (this._active) {
            this._active = !1;
            let n, i;
            for (n = 0, i = this.effects.length; n < i; n++) this.effects[n].stop();
            for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++) this.cleanups[n]();
            if (this.cleanups.length = 0, this.scopes) {
                for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !e) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
            }
            this.parent = void 0
        }
    }
}

function ga(t) {
    return new pa(t)
}

function ma() {
    return Ge
}

function Hu(t, e = !1) {
    Ge && Ge.cleanups.push(t)
}
let Ae;
const yr = new WeakSet;
class va {
    constructor(e) {
        this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ge && Ge.active && Ge.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, yr.has(this) && (yr.delete(this), this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wa(this)
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, $s(this), ba(this);
        const e = Ae,
            n = _t;
        Ae = this, _t = !0;
        try {
            return this.fn()
        } finally {
            Sa(this), Ae = e, _t = n, this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let e = this.deps; e; e = e.nextDep) vs(e);
            this.deps = this.depsTail = void 0, $s(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? yr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        $r(this) && this.run()
    }
    get dirty() {
        return $r(this)
    }
}
let ya = 0,
    ni, ii;

function wa(t, e = !1) {
    if (t.flags |= 8, e) {
        t.next = ii, ii = t;
        return
    }
    t.next = ni, ni = t
}

function gs() {
    ya++
}

function ms() {
    if (--ya > 0) return;
    if (ii) {
        let e = ii;
        for (ii = void 0; e;) {
            const n = e.next;
            e.next = void 0, e.flags &= -9, e = n
        }
    }
    let t;
    for (; ni;) {
        let e = ni;
        for (ni = void 0; e;) {
            const n = e.next;
            if (e.next = void 0, e.flags &= -9, e.flags & 1) try {
                e.trigger()
            } catch (i) {
                t || (t = i)
            }
            e = n
        }
    }
    if (t) throw t
}

function ba(t) {
    for (let e = t.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e
}

function Sa(t) {
    let e, n = t.depsTail,
        i = n;
    for (; i;) {
        const r = i.prevDep;
        i.version === -1 ? (i === n && (n = r), vs(i), Wu(i)) : e = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = r
    }
    t.deps = e, t.depsTail = n
}

function $r(t) {
    for (let e = t.deps; e; e = e.nextDep)
        if (e.dep.version !== e.version || e.dep.computed && (xa(e.dep.computed) || e.dep.version !== e.version)) return !0;
    return !!t._dirty
}

function xa(t) {
    if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === fi) || (t.globalVersion = fi, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !$r(t)))) return;
    t.flags |= 2;
    const e = t.dep,
        n = Ae,
        i = _t;
    Ae = t, _t = !0;
    try {
        ba(t);
        const r = t.fn(t._value);
        (e.version === 0 || on(r, t._value)) && (t.flags |= 128, t._value = r, e.version++)
    } catch (r) {
        throw e.version++, r
    } finally {
        Ae = n, _t = i, Sa(t), t.flags &= -3
    }
}

function vs(t, e = !1) {
    const {
        dep: n,
        prevSub: i,
        nextSub: r
    } = t;
    if (i && (i.nextSub = r, t.prevSub = void 0), r && (r.prevSub = i, t.nextSub = void 0), n.subs === t && (n.subs = i, !i && n.computed)) {
        n.computed.flags &= -5;
        for (let s = n.computed.deps; s; s = s.nextDep) vs(s, !0)
    }!e && !--n.sc && n.map && n.map.delete(n.key)
}

function Wu(t) {
    const {
        prevDep: e,
        nextDep: n
    } = t;
    e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0)
}
let _t = !0;
const Ta = [];

function zt() {
    Ta.push(_t), _t = !1
}

function Kt() {
    const t = Ta.pop();
    _t = t === void 0 ? !0 : t
}

function $s(t) {
    const {
        cleanup: e
    } = t;
    if (t.cleanup = void 0, e) {
        const n = Ae;
        Ae = void 0;
        try {
            e()
        } finally {
            Ae = n
        }
    }
}
let fi = 0;
class Uu {
    constructor(e, n) {
        this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class ys {
    constructor(e) {
        this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
    }
    track(e) {
        if (!Ae || !_t || Ae === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== Ae) n = this.activeLink = new Uu(Ae, this), Ae.deps ? (n.prevDep = Ae.depsTail, Ae.depsTail.nextDep = n, Ae.depsTail = n) : Ae.deps = Ae.depsTail = n, ka(n);
        else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const i = n.nextDep;
            i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Ae.depsTail, n.nextDep = void 0, Ae.depsTail.nextDep = n, Ae.depsTail = n, Ae.deps === n && (Ae.deps = i)
        }
        return n
    }
    trigger(e) {
        this.version++, fi++, this.notify(e)
    }
    notify(e) {
        gs();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
        } finally {
            ms()
        }
    }
}

function ka(t) {
    if (t.dep.sc++, t.sub.flags & 4) {
        const e = t.dep.computed;
        if (e && !t.dep.subs) {
            e.flags |= 20;
            for (let i = e.deps; i; i = i.nextDep) ka(i)
        }
        const n = t.dep.subs;
        n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t
    }
}
const Hi = new WeakMap,
    Sn = Symbol(""),
    Br = Symbol(""),
    di = Symbol("");

function Ye(t, e, n) {
    if (_t && Ae) {
        let i = Hi.get(t);
        i || Hi.set(t, i = new Map);
        let r = i.get(n);
        r || (i.set(n, r = new ys), r.map = i, r.key = n), r.track()
    }
}

function Ut(t, e, n, i, r, s) {
    const o = Hi.get(t);
    if (!o) {
        fi++;
        return
    }
    const a = l => {
        l && l.trigger()
    };
    if (gs(), e === "clear") o.forEach(a);
    else {
        const l = ue(t),
            u = l && ir(n);
        if (l && n === "length") {
            const c = Number(i);
            o.forEach((f, p) => {
                (p === "length" || p === di || !Ct(p) && p >= c) && a(f)
            })
        } else switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), u && a(o.get(di)), e) {
            case "add":
                l ? u && a(o.get("length")) : (a(o.get(Sn)), Dn(t) && a(o.get(Br)));
                break;
            case "delete":
                l || (a(o.get(Sn)), Dn(t) && a(o.get(Br)));
                break;
            case "set":
                Dn(t) && a(o.get(Sn));
                break
        }
    }
    ms()
}

function ju(t, e) {
    const n = Hi.get(t);
    return n && n.get(e)
}

function En(t) {
    const e = xe(t);
    return e === t ? e : (Ye(e, "iterate", di), mt(t) ? e : e.map(Et))
}

function ar(t) {
    return Ye(t = xe(t), "iterate", di), t
}

function en(t, e) {
    return Xt(t) ? $n(Vt(t) ? Et(e) : e) : Et(e)
}
const Vu = {
    __proto__: null,
    [Symbol.iterator]() {
        return wr(this, Symbol.iterator, t => en(this, t))
    },
    concat(...t) {
        return En(this).concat(...t.map(e => ue(e) ? En(e) : e))
    },
    entries() {
        return wr(this, "entries", t => (t[1] = en(this, t[1]), t))
    },
    every(t, e) {
        return Bt(this, "every", t, e, void 0, arguments)
    },
    filter(t, e) {
        return Bt(this, "filter", t, e, n => n.map(i => en(this, i)), arguments)
    },
    find(t, e) {
        return Bt(this, "find", t, e, n => en(this, n), arguments)
    },
    findIndex(t, e) {
        return Bt(this, "findIndex", t, e, void 0, arguments)
    },
    findLast(t, e) {
        return Bt(this, "findLast", t, e, n => en(this, n), arguments)
    },
    findLastIndex(t, e) {
        return Bt(this, "findLastIndex", t, e, void 0, arguments)
    },
    forEach(t, e) {
        return Bt(this, "forEach", t, e, void 0, arguments)
    },
    includes(...t) {
        return br(this, "includes", t)
    },
    indexOf(...t) {
        return br(this, "indexOf", t)
    },
    join(t) {
        return En(this).join(t)
    },
    lastIndexOf(...t) {
        return br(this, "lastIndexOf", t)
    },
    map(t, e) {
        return Bt(this, "map", t, e, void 0, arguments)
    },
    pop() {
        return zn(this, "pop")
    },
    push(...t) {
        return zn(this, "push", t)
    },
    reduce(t, ...e) {
        return Bs(this, "reduce", t, e)
    },
    reduceRight(t, ...e) {
        return Bs(this, "reduceRight", t, e)
    },
    shift() {
        return zn(this, "shift")
    },
    some(t, e) {
        return Bt(this, "some", t, e, void 0, arguments)
    },
    splice(...t) {
        return zn(this, "splice", t)
    },
    toReversed() {
        return En(this).toReversed()
    },
    toSorted(t) {
        return En(this).toSorted(t)
    },
    toSpliced(...t) {
        return En(this).toSpliced(...t)
    },
    unshift(...t) {
        return zn(this, "unshift", t)
    },
    values() {
        return wr(this, "values", t => en(this, t))
    }
};

function wr(t, e, n) {
    const i = ar(t),
        r = i[e]();
    return i !== t && !mt(t) && (r._next = r.next, r.next = () => {
        const s = r._next();
        return s.done || (s.value = n(s.value)), s
    }), r
}
const qu = Array.prototype;

function Bt(t, e, n, i, r, s) {
    const o = ar(t),
        a = o !== t && !mt(t),
        l = o[e];
    if (l !== qu[e]) {
        const f = l.apply(t, s);
        return a ? Et(f) : f
    }
    let u = n;
    o !== t && (a ? u = function(f, p) {
        return n.call(this, en(t, f), p, t)
    } : n.length > 2 && (u = function(f, p) {
        return n.call(this, f, p, t)
    }));
    const c = l.call(o, u, i);
    return a && r ? r(c) : c
}

function Bs(t, e, n, i) {
    const r = ar(t);
    let s = n;
    return r !== t && (mt(t) ? n.length > 3 && (s = function(o, a, l) {
        return n.call(this, o, a, l, t)
    }) : s = function(o, a, l) {
        return n.call(this, o, en(t, a), l, t)
    }), r[e](s, ...i)
}

function br(t, e, n) {
    const i = xe(t);
    Ye(i, "iterate", di);
    const r = i[e](...n);
    return (r === -1 || r === !1) && ur(n[0]) ? (n[0] = xe(n[0]), i[e](...n)) : r
}

function zn(t, e, n = []) {
    zt(), gs();
    const i = xe(t)[e].apply(t, n);
    return ms(), Kt(), i
}
const zu = ls("__proto__,__v_isRef,__isVue"),
    _a = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(Ct));

function Ku(t) {
    Ct(t) || (t = String(t));
    const e = xe(this);
    return Ye(e, "has", t), e.hasOwnProperty(t)
}
class Ca {
    constructor(e = !1, n = !1) {
        this._isReadonly = e, this._isShallow = n
    }
    get(e, n, i) {
        if (n === "__v_skip") return e.__v_skip;
        const r = this._isReadonly,
            s = this._isShallow;
        if (n === "__v_isReactive") return !r;
        if (n === "__v_isReadonly") return r;
        if (n === "__v_isShallow") return s;
        if (n === "__v_raw") return i === (r ? s ? ic : Oa : s ? Aa : Ia).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
        const o = ue(e);
        if (!r) {
            let l;
            if (o && (l = Vu[n])) return l;
            if (n === "hasOwnProperty") return Ku
        }
        const a = Reflect.get(e, n, Re(e) ? e : i);
        if ((Ct(n) ? _a.has(n) : zu(n)) || (r || Ye(e, "get", n), s)) return a;
        if (Re(a)) {
            const l = o && ir(n) ? a : a.value;
            return r && _e(l) ? Wr(l) : l
        }
        return _e(a) ? r ? Wr(a) : lr(a) : a
    }
}
class Ea extends Ca {
    constructor(e = !1) {
        super(!1, e)
    }
    set(e, n, i, r) {
        let s = e[n];
        const o = ue(e) && ir(n);
        if (!this._isShallow) {
            const u = Xt(s);
            if (!mt(i) && !Xt(i) && (s = xe(s), i = xe(i)), !o && Re(s) && !Re(i)) return u || (s.value = i), !0
        }
        const a = o ? Number(n) < e.length : Ee(e, n),
            l = Reflect.set(e, n, i, Re(e) ? e : r);
        return e === xe(r) && (a ? on(i, s) && Ut(e, "set", n, i) : Ut(e, "add", n, i)), l
    }
    deleteProperty(e, n) {
        const i = Ee(e, n);
        e[n];
        const r = Reflect.deleteProperty(e, n);
        return r && i && Ut(e, "delete", n, void 0), r
    }
    has(e, n) {
        const i = Reflect.has(e, n);
        return (!Ct(n) || !_a.has(n)) && Ye(e, "has", n), i
    }
    ownKeys(e) {
        return Ye(e, "iterate", ue(e) ? "length" : Sn), Reflect.ownKeys(e)
    }
}
class Xu extends Ca {
    constructor(e = !1) {
        super(!0, e)
    }
    set(e, n) {
        return !0
    }
    deleteProperty(e, n) {
        return !0
    }
}
const Ju = new Ea,
    Gu = new Xu,
    Qu = new Ea(!0);
const Hr = t => t,
    Ii = t => Reflect.getPrototypeOf(t);

function Yu(t, e, n) {
    return function(...i) {
        const r = this.__v_raw,
            s = xe(r),
            o = Dn(s),
            a = t === "entries" || t === Symbol.iterator && o,
            l = t === "keys" && o,
            u = r[t](...i),
            c = n ? Hr : e ? $n : Et;
        return !e && Ye(s, "iterate", l ? Br : Sn), He(Object.create(u), {
            next() {
                const {
                    value: f,
                    done: p
                } = u.next();
                return p ? {
                    value: f,
                    done: p
                } : {
                    value: a ? [c(f[0]), c(f[1])] : c(f),
                    done: p
                }
            }
        })
    }
}

function Ai(t) {
    return function(...e) {
        return t === "delete" ? !1 : t === "clear" ? void 0 : this
    }
}

function Zu(t, e) {
    const n = {
        get(r) {
            const s = this.__v_raw,
                o = xe(s),
                a = xe(r);
            t || (on(r, a) && Ye(o, "get", r), Ye(o, "get", a));
            const {
                has: l
            } = Ii(o), u = e ? Hr : t ? $n : Et;
            if (l.call(o, r)) return u(s.get(r));
            if (l.call(o, a)) return u(s.get(a));
            s !== o && s.get(r)
        },
        get size() {
            const r = this.__v_raw;
            return !t && Ye(xe(r), "iterate", Sn), r.size
        },
        has(r) {
            const s = this.__v_raw,
                o = xe(s),
                a = xe(r);
            return t || (on(r, a) && Ye(o, "has", r), Ye(o, "has", a)), r === a ? s.has(r) : s.has(r) || s.has(a)
        },
        forEach(r, s) {
            const o = this,
                a = o.__v_raw,
                l = xe(a),
                u = e ? Hr : t ? $n : Et;
            return !t && Ye(l, "iterate", Sn), a.forEach((c, f) => r.call(s, u(c), u(f), o))
        }
    };
    return He(n, t ? {
        add: Ai("add"),
        set: Ai("set"),
        delete: Ai("delete"),
        clear: Ai("clear")
    } : {
        add(r) {
            !e && !mt(r) && !Xt(r) && (r = xe(r));
            const s = xe(this);
            return Ii(s).has.call(s, r) || (s.add(r), Ut(s, "add", r, r)), this
        },
        set(r, s) {
            !e && !mt(s) && !Xt(s) && (s = xe(s));
            const o = xe(this),
                {
                    has: a,
                    get: l
                } = Ii(o);
            let u = a.call(o, r);
            u || (r = xe(r), u = a.call(o, r));
            const c = l.call(o, r);
            return o.set(r, s), u ? on(s, c) && Ut(o, "set", r, s) : Ut(o, "add", r, s), this
        },
        delete(r) {
            const s = xe(this),
                {
                    has: o,
                    get: a
                } = Ii(s);
            let l = o.call(s, r);
            l || (r = xe(r), l = o.call(s, r)), a && a.call(s, r);
            const u = s.delete(r);
            return l && Ut(s, "delete", r, void 0), u
        },
        clear() {
            const r = xe(this),
                s = r.size !== 0,
                o = r.clear();
            return s && Ut(r, "clear", void 0, void 0), o
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        n[r] = Yu(r, t, e)
    }), n
}

function ws(t, e) {
    const n = Zu(t, e);
    return (i, r, s) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? i : Reflect.get(Ee(n, r) && r in i ? n : i, r, s)
}
const ec = {
        get: ws(!1, !1)
    },
    tc = {
        get: ws(!1, !0)
    },
    nc = {
        get: ws(!0, !1)
    };
const Ia = new WeakMap,
    Aa = new WeakMap,
    Oa = new WeakMap,
    ic = new WeakMap;

function rc(t) {
    switch (t) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function sc(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : rc(Iu(t))
}

function lr(t) {
    return Xt(t) ? t : bs(t, !1, Ju, ec, Ia)
}

function oc(t) {
    return bs(t, !1, Qu, tc, Aa)
}

function Wr(t) {
    return bs(t, !0, Gu, nc, Oa)
}

function bs(t, e, n, i, r) {
    if (!_e(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
    const s = sc(t);
    if (s === 0) return t;
    const o = r.get(t);
    if (o) return o;
    const a = new Proxy(t, s === 2 ? i : n);
    return r.set(t, a), a
}

function Vt(t) {
    return Xt(t) ? Vt(t.__v_raw) : !!(t && t.__v_isReactive)
}

function Xt(t) {
    return !!(t && t.__v_isReadonly)
}

function mt(t) {
    return !!(t && t.__v_isShallow)
}

function ur(t) {
    return t ? !!t.__v_raw : !1
}

function xe(t) {
    const e = t && t.__v_raw;
    return e ? xe(e) : t
}

function Ss(t) {
    return !Ee(t, "__v_skip") && Object.isExtensible(t) && ca(t, "__v_skip", !0), t
}
const Et = t => _e(t) ? lr(t) : t,
    $n = t => _e(t) ? Wr(t) : t;

function Re(t) {
    return t ? t.__v_isRef === !0 : !1
}

function _(t) {
    return La(t, !1)
}

function ac(t) {
    return La(t, !0)
}

function La(t, e) {
    return Re(t) ? t : new lc(t, e)
}
class lc {
    constructor(e, n) {
        this.dep = new ys, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : xe(e), this._value = n ? e : Et(e), this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(), this._value
    }
    set value(e) {
        const n = this._rawValue,
            i = this.__v_isShallow || mt(e) || Xt(e);
        e = i ? e : xe(e), on(e, n) && (this._rawValue = e, this._value = i ? e : Et(e), this.dep.trigger())
    }
}

function Ep(t) {
    t.dep && t.dep.trigger()
}

function xs(t) {
    return Re(t) ? t.value : t
}

function Ip(t) {
    return ce(t) ? t() : xs(t)
}
const uc = {
    get: (t, e, n) => e === "__v_raw" ? t : xs(Reflect.get(t, e, n)),
    set: (t, e, n, i) => {
        const r = t[e];
        return Re(r) && !Re(n) ? (r.value = n, !0) : Reflect.set(t, e, n, i)
    }
};

function Pa(t) {
    return Vt(t) ? t : new Proxy(t, uc)
}

function cc(t) {
    const e = ue(t) ? new Array(t.length) : {};
    for (const n in t) e[n] = Ra(t, n);
    return e
}
class fc {
    constructor(e, n, i) {
        this._object = e, this._key = n, this._defaultValue = i, this.__v_isRef = !0, this._value = void 0, this._raw = xe(e);
        let r = !0,
            s = e;
        if (!ue(e) || !ir(String(n)))
            do r = !ur(s) || mt(s); while (r && (s = s.__v_raw));
        this._shallow = r
    }
    get value() {
        let e = this._object[this._key];
        return this._shallow && (e = xs(e)), this._value = e === void 0 ? this._defaultValue : e
    }
    set value(e) {
        if (this._shallow && Re(this._raw[this._key])) {
            const n = this._object[this._key];
            if (Re(n)) {
                n.value = e;
                return
            }
        }
        this._object[this._key] = e
    }
    get dep() {
        return ju(this._raw, this._key)
    }
}
class dc {
    constructor(e) {
        this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}

function Ap(t, e, n) {
    return Re(t) ? t : ce(t) ? new dc(t) : _e(t) && arguments.length > 1 ? Ra(t, e, n) : _(t)
}

function Ra(t, e, n) {
    return new fc(t, e, n)
}
class hc {
    constructor(e, n, i) {
        this.fn = e, this.setter = n, this._value = void 0, this.dep = new ys(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i
    }
    notify() {
        if (this.flags |= 16, !(this.flags & 8) && Ae !== this) return wa(this, !0), !0
    }
    get value() {
        const e = this.dep.track();
        return xa(this), e && (e.version = this.dep.version), this._value
    }
    set value(e) {
        this.setter && this.setter(e)
    }
}

function pc(t, e, n = !1) {
    let i, r;
    return ce(t) ? i = t : (i = t.get, r = t.set), new hc(i, r, n)
}
const Oi = {},
    Wi = new WeakMap;
let wn;

function gc(t, e = !1, n = wn) {
    if (n) {
        let i = Wi.get(n);
        i || Wi.set(n, i = []), i.push(t)
    }
}

function mc(t, e, n = Ie) {
    const {
        immediate: i,
        deep: r,
        once: s,
        scheduler: o,
        augmentJob: a,
        call: l
    } = n, u = O => r ? O : mt(O) || r === !1 || r === 0 ? jt(O, 1) : jt(O);
    let c, f, p, h, d = !1,
        g = !1;
    if (Re(t) ? (f = () => t.value, d = mt(t)) : Vt(t) ? (f = () => u(t), d = !0) : ue(t) ? (g = !0, d = t.some(O => Vt(O) || mt(O)), f = () => t.map(O => {
            if (Re(O)) return O.value;
            if (Vt(O)) return u(O);
            if (ce(O)) return l ? l(O, 2) : O()
        })) : ce(t) ? e ? f = l ? () => l(t, 2) : t : f = () => {
            if (p) {
                zt();
                try {
                    p()
                } finally {
                    Kt()
                }
            }
            const O = wn;
            wn = c;
            try {
                return l ? l(t, 3, [h]) : t(h)
            } finally {
                wn = O
            }
        } : f = $t, e && r) {
        const O = f,
            W = r === !0 ? 1 / 0 : r;
        f = () => jt(O(), W)
    }
    const w = ma(),
        x = () => {
            c.stop(), w && w.active && cs(w.effects, c)
        };
    if (s && e) {
        const O = e;
        e = (...W) => {
            O(...W), x()
        }
    }
    let R = g ? new Array(t.length).fill(Oi) : Oi;
    const L = O => {
        if (!(!(c.flags & 1) || !c.dirty && !O))
            if (e) {
                const W = c.run();
                if (r || d || (g ? W.some((C, M) => on(C, R[M])) : on(W, R))) {
                    p && p();
                    const C = wn;
                    wn = c;
                    try {
                        const M = [W, R === Oi ? void 0 : g && R[0] === Oi ? [] : R, h];
                        R = W, l ? l(e, 3, M) : e(...M)
                    } finally {
                        wn = C
                    }
                }
            } else c.run()
    };
    return a && a(L), c = new va(f), c.scheduler = o ? () => o(L, !1) : L, h = O => gc(O, !1, c), p = c.onStop = () => {
        const O = Wi.get(c);
        if (O) {
            if (l) l(O, 4);
            else
                for (const W of O) W();
            Wi.delete(c)
        }
    }, e ? i ? L(!0) : R = c.run() : o ? o(L.bind(null, !0), !0) : c.run(), x.pause = c.pause.bind(c), x.resume = c.resume.bind(c), x.stop = x, x
}

function jt(t, e = 1 / 0, n) {
    if (e <= 0 || !_e(t) || t.__v_skip || (n = n || new Map, (n.get(t) || 0) >= e)) return t;
    if (n.set(t, e), e--, Re(t)) jt(t.value, e, n);
    else if (ue(t))
        for (let i = 0; i < t.length; i++) jt(t[i], e, n);
    else if (oa(t) || Dn(t)) t.forEach(i => {
        jt(i, e, n)
    });
    else if (ua(t)) {
        for (const i in t) jt(t[i], e, n);
        for (const i of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, i) && jt(t[i], e, n)
    }
    return t
}
/**
 * @vue/runtime-core v3.5.29
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function xi(t, e, n, i) {
    try {
        return i ? t(...i) : t()
    } catch (r) {
        Ti(r, e, n)
    }
}

function It(t, e, n, i) {
    if (ce(t)) {
        const r = xi(t, e, n, i);
        return r && aa(r) && r.catch(s => {
            Ti(s, e, n)
        }), r
    }
    if (ue(t)) {
        const r = [];
        for (let s = 0; s < t.length; s++) r.push(It(t[s], e, n, i));
        return r
    }
}

function Ti(t, e, n, i = !0) {
    const r = e ? e.vnode : null,
        {
            errorHandler: s,
            throwUnhandledErrorInProduction: o
        } = e && e.appContext.config || Ie;
    if (e) {
        let a = e.parent;
        const l = e.proxy,
            u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a;) {
            const c = a.ec;
            if (c) {
                for (let f = 0; f < c.length; f++)
                    if (c[f](t, l, u) === !1) return
            }
            a = a.parent
        }
        if (s) {
            zt(), xi(s, null, 10, [t, l, u]), Kt();
            return
        }
    }
    vc(t, n, r, i, o)
}

function vc(t, e, n, i = !0, r = !1) {
    if (r) throw t;
    console.error(t)
}
const ot = [];
let Pt = -1;
const Mn = [];
let tn = null,
    On = 0;
const Da = Promise.resolve();
let Ui = null;

function Ts(t) {
    const e = Ui || Da;
    return t ? e.then(this ? t.bind(this) : t) : e
}

function yc(t) {
    let e = Pt + 1,
        n = ot.length;
    for (; e < n;) {
        const i = e + n >>> 1,
            r = ot[i],
            s = hi(r);
        s < t || s === t && r.flags & 2 ? e = i + 1 : n = i
    }
    return e
}

function ks(t) {
    if (!(t.flags & 1)) {
        const e = hi(t),
            n = ot[ot.length - 1];
        !n || !(t.flags & 2) && e >= hi(n) ? ot.push(t) : ot.splice(yc(e), 0, t), t.flags |= 1, Ma()
    }
}

function Ma() {
    Ui || (Ui = Da.then(Fa))
}

function wc(t) {
    ue(t) ? Mn.push(...t) : tn && t.id === -1 ? tn.splice(On + 1, 0, t) : t.flags & 1 || (Mn.push(t), t.flags |= 1), Ma()
}

function Hs(t, e, n = Pt + 1) {
    for (; n < ot.length; n++) {
        const i = ot[n];
        if (i && i.flags & 2) {
            if (t && i.id !== t.uid) continue;
            ot.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2)
        }
    }
}

function Na(t) {
    if (Mn.length) {
        const e = [...new Set(Mn)].sort((n, i) => hi(n) - hi(i));
        if (Mn.length = 0, tn) {
            tn.push(...e);
            return
        }
        for (tn = e, On = 0; On < tn.length; On++) {
            const n = tn[On];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
        }
        tn = null, On = 0
    }
}
const hi = t => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;

function Fa(t) {
    try {
        for (Pt = 0; Pt < ot.length; Pt++) {
            const e = ot[Pt];
            e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), xi(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2))
        }
    } finally {
        for (; Pt < ot.length; Pt++) {
            const e = ot[Pt];
            e && (e.flags &= -2)
        }
        Pt = -1, ot.length = 0, Na(), Ui = null, (ot.length || Mn.length) && Fa()
    }
}
let Xe = null,
    $a = null;

function ji(t) {
    const e = Xe;
    return Xe = t, $a = t && t.type.__scopeId || null, e
}

function Ba(t, e = Xe, n) {
    if (!e || t._n) return t;
    const i = (...r) => {
        i._d && zi(-1);
        const s = ji(e);
        let o;
        try {
            o = t(...r)
        } finally {
            ji(s), i._d && zi(1)
        }
        return o
    };
    return i._n = !0, i._c = !0, i._d = !0, i
}

function Op(t, e) {
    if (Xe === null) return t;
    const n = hr(Xe),
        i = t.dirs || (t.dirs = []);
    for (let r = 0; r < e.length; r++) {
        let [s, o, a, l = Ie] = e[r];
        s && (ce(s) && (s = {
            mounted: s,
            updated: s
        }), s.deep && jt(o), i.push({
            dir: s,
            instance: n,
            value: o,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return t
}

function pn(t, e, n, i) {
    const r = t.dirs,
        s = e && e.dirs;
    for (let o = 0; o < r.length; o++) {
        const a = r[o];
        s && (a.oldValue = s[o].value);
        let l = a.dir[i];
        l && (zt(), It(l, n, 8, [t.el, a, t, e]), Kt())
    }
}

function bc(t, e) {
    if (Ke) {
        let n = Ke.provides;
        const i = Ke.parent && Ke.parent.provides;
        i === n && (n = Ke.provides = Object.create(i)), n[t] = e
    }
}

function Nt(t, e, n = !1) {
    const i = Vn();
    if (i || xn) {
        let r = xn ? xn._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
        if (r && t in r) return r[t];
        if (arguments.length > 1) return n && ce(e) ? e.call(i && i.proxy) : e
    }
}

function Sc() {
    return !!(Vn() || xn)
}
const xc = Symbol.for("v-scx"),
    Tc = () => Nt(xc);

function xt(t, e, n) {
    return Ha(t, e, n)
}

function Ha(t, e, n = Ie) {
    const {
        immediate: i,
        deep: r,
        flush: s,
        once: o
    } = n, a = He({}, n), l = e && i || !e && s !== "post";
    let u;
    if (Hn) {
        if (s === "sync") {
            const h = Tc();
            u = h.__watcherHandles || (h.__watcherHandles = [])
        } else if (!l) {
            const h = () => {};
            return h.stop = $t, h.resume = $t, h.pause = $t, h
        }
    }
    const c = Ke;
    a.call = (h, d, g) => It(h, c, d, g);
    let f = !1;
    s === "post" ? a.scheduler = h => {
        ut(h, c && c.suspense)
    } : s !== "sync" && (f = !0, a.scheduler = (h, d) => {
        d ? h() : ks(h)
    }), a.augmentJob = h => {
        e && (h.flags |= 4), f && (h.flags |= 2, c && (h.id = c.uid, h.i = c))
    };
    const p = mc(t, e, a);
    return Hn && (u ? u.push(p) : l && p()), p
}

function kc(t, e, n) {
    const i = this.proxy,
        r = De(t) ? t.includes(".") ? Wa(i, t) : () => i[t] : t.bind(i, i);
    let s;
    ce(e) ? s = e : (s = e.handler, n = e);
    const o = _i(this),
        a = Ha(r, s.bind(i), n);
    return o(), a
}

function Wa(t, e) {
    const n = e.split(".");
    return () => {
        let i = t;
        for (let r = 0; r < n.length && i; r++) i = i[n[r]];
        return i
    }
}
const _c = Symbol("_vte"),
    Ua = t => t.__isTeleport,
    Dt = Symbol("_leaveCb"),
    Kn = Symbol("_enterCb");

function ja() {
    const t = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Is(() => {
        t.isMounted = !0
    }), As(() => {
        t.isUnmounting = !0
    }), t
}
const yt = [Function, Array],
    Va = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: yt,
        onEnter: yt,
        onAfterEnter: yt,
        onEnterCancelled: yt,
        onBeforeLeave: yt,
        onLeave: yt,
        onAfterLeave: yt,
        onLeaveCancelled: yt,
        onBeforeAppear: yt,
        onAppear: yt,
        onAfterAppear: yt,
        onAppearCancelled: yt
    },
    qa = t => {
        const e = t.subTree;
        return e.component ? qa(e.component) : e
    },
    Cc = {
        name: "BaseTransition",
        props: Va,
        setup(t, {
            slots: e
        }) {
            const n = Vn(),
                i = ja();
            return () => {
                const r = e.default && _s(e.default(), !0);
                if (!r || !r.length) return;
                const s = za(r),
                    o = xe(t),
                    {
                        mode: a
                    } = o;
                if (i.isLeaving) return Sr(s);
                const l = Ws(s);
                if (!l) return Sr(s);
                let u = pi(l, o, i, n, f => u = f);
                l.type !== Ze && kn(l, u);
                let c = n.subTree && Ws(n.subTree);
                if (c && c.type !== Ze && !bn(c, l) && qa(n).type !== Ze) {
                    let f = pi(c, o, i, n);
                    if (kn(c, f), a === "out-in" && l.type !== Ze) return i.isLeaving = !0, f.afterLeave = () => {
                        i.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0
                    }, Sr(s);
                    a === "in-out" && l.type !== Ze ? f.delayLeave = (p, h, d) => {
                        const g = Ka(i, c);
                        g[String(c.key)] = c, p[Dt] = () => {
                            h(), p[Dt] = void 0, delete u.delayedLeave, c = void 0
                        }, u.delayedLeave = () => {
                            d(), delete u.delayedLeave, c = void 0
                        }
                    } : c = void 0
                } else c && (c = void 0);
                return s
            }
        }
    };

function za(t) {
    let e = t[0];
    if (t.length > 1) {
        for (const n of t)
            if (n.type !== Ze) {
                e = n;
                break
            }
    }
    return e
}
const Ec = Cc;

function Ka(t, e) {
    const {
        leavingVNodes: n
    } = t;
    let i = n.get(e.type);
    return i || (i = Object.create(null), n.set(e.type, i)), i
}

function pi(t, e, n, i, r) {
    const {
        appear: s,
        mode: o,
        persisted: a = !1,
        onBeforeEnter: l,
        onEnter: u,
        onAfterEnter: c,
        onEnterCancelled: f,
        onBeforeLeave: p,
        onLeave: h,
        onAfterLeave: d,
        onLeaveCancelled: g,
        onBeforeAppear: w,
        onAppear: x,
        onAfterAppear: R,
        onAppearCancelled: L
    } = e, O = String(t.key), W = Ka(n, t), C = (v, k) => {
        v && It(v, i, 9, k)
    }, M = (v, k) => {
        const I = k[1];
        C(v, k), ue(v) ? v.every(E => E.length <= 1) && I() : v.length <= 1 && I()
    }, D = {
        mode: o,
        persisted: a,
        beforeEnter(v) {
            let k = l;
            if (!n.isMounted)
                if (s) k = w || l;
                else return;
            v[Dt] && v[Dt](!0);
            const I = W[O];
            I && bn(t, I) && I.el[Dt] && I.el[Dt](), C(k, [v])
        },
        enter(v) {
            if (W[O] === t) return;
            let k = u,
                I = c,
                E = f;
            if (!n.isMounted)
                if (s) k = x || u, I = R || c, E = L || f;
                else return;
            let S = !1;
            v[Kn] = J => {
                S || (S = !0, J ? C(E, [v]) : C(I, [v]), D.delayedLeave && D.delayedLeave(), v[Kn] = void 0)
            };
            const N = v[Kn].bind(null, !1);
            k ? M(k, [v, N]) : N()
        },
        leave(v, k) {
            const I = String(t.key);
            if (v[Kn] && v[Kn](!0), n.isUnmounting) return k();
            C(p, [v]);
            let E = !1;
            v[Dt] = N => {
                E || (E = !0, k(), N ? C(g, [v]) : C(d, [v]), v[Dt] = void 0, W[I] === t && delete W[I])
            };
            const S = v[Dt].bind(null, !1);
            W[I] = t, h ? M(h, [v, S]) : S()
        },
        clone(v) {
            const k = pi(v, e, n, i, r);
            return r && r(k), k
        }
    };
    return D
}

function Sr(t) {
    if (ki(t)) return t = an(t), t.children = null, t
}

function Ws(t) {
    if (!ki(t)) return Ua(t.type) && t.children ? za(t.children) : t;
    if (t.component) return t.component.subTree;
    const {
        shapeFlag: e,
        children: n
    } = t;
    if (n) {
        if (e & 16) return n[0];
        if (e & 32 && ce(n.default)) return n.default()
    }
}

function kn(t, e) {
    t.shapeFlag & 6 && t.component ? (t.transition = e, kn(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
}

function _s(t, e = !1, n) {
    let i = [],
        r = 0;
    for (let s = 0; s < t.length; s++) {
        let o = t[s];
        const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
        o.type === ct ? (o.patchFlag & 128 && r++, i = i.concat(_s(o.children, e, a))) : (e || o.type !== Ze) && i.push(a != null ? an(o, {
            key: a
        }) : o)
    }
    if (r > 1)
        for (let s = 0; s < i.length; s++) i[s].patchFlag = -2;
    return i
}

function Cs(t, e) {
    return ce(t) ? He({
        name: t.name
    }, e, {
        setup: t
    }) : t
}

function Lp() {
    const t = Vn();
    return t ? (t.appContext.config.idPrefix || "v") + "-" + t.ids[0] + t.ids[1]++ : ""
}

function Es(t) {
    t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0]
}

function Us(t, e) {
    let n;
    return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable)
}
const Vi = new WeakMap;

function ri(t, e, n, i, r = !1) {
    if (ue(t)) {
        t.forEach((g, w) => ri(g, e && (ue(e) ? e[w] : e), n, i, r));
        return
    }
    if (Nn(i) && !r) {
        i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && ri(t, e, n, i.component.subTree);
        return
    }
    const s = i.shapeFlag & 4 ? hr(i.component) : i.el,
        o = r ? null : s,
        {
            i: a,
            r: l
        } = t,
        u = e && e.r,
        c = a.refs === Ie ? a.refs = {} : a.refs,
        f = a.setupState,
        p = xe(f),
        h = f === Ie ? sa : g => Us(c, g) ? !1 : Ee(p, g),
        d = (g, w) => !(w && Us(c, w));
    if (u != null && u !== l) {
        if (js(e), De(u)) c[u] = null, h(u) && (f[u] = null);
        else if (Re(u)) {
            const g = e;
            d(u, g.k) && (u.value = null), g.k && (c[g.k] = null)
        }
    }
    if (ce(l)) xi(l, a, 12, [o, c]);
    else {
        const g = De(l),
            w = Re(l);
        if (g || w) {
            const x = () => {
                if (t.f) {
                    const R = g ? h(l) ? f[l] : c[l] : d() || !t.k ? l.value : c[t.k];
                    if (r) ue(R) && cs(R, s);
                    else if (ue(R)) R.includes(s) || R.push(s);
                    else if (g) c[l] = [s], h(l) && (f[l] = c[l]);
                    else {
                        const L = [s];
                        d(l, t.k) && (l.value = L), t.k && (c[t.k] = L)
                    }
                } else g ? (c[l] = o, h(l) && (f[l] = o)) : w && (d(l, t.k) && (l.value = o), t.k && (c[t.k] = o))
            };
            if (o) {
                const R = () => {
                    x(), Vi.delete(t)
                };
                R.id = -1, Vi.set(t, R), ut(R, n)
            } else js(t), x()
        }
    }
}

function js(t) {
    const e = Vi.get(t);
    e && (e.flags |= 8, Vi.delete(t))
}
const Vs = t => t.nodeType === 8;
or().requestIdleCallback;
or().cancelIdleCallback;

function Ic(t, e) {
    if (Vs(t) && t.data === "[") {
        let n = 1,
            i = t.nextSibling;
        for (; i;) {
            if (i.nodeType === 1) {
                if (e(i) === !1) break
            } else if (Vs(i))
                if (i.data === "]") {
                    if (--n === 0) break
                } else i.data === "[" && n++;
            i = i.nextSibling
        }
    } else e(t)
}
const Nn = t => !!t.type.__asyncLoader;

function st(t) {
    ce(t) && (t = {
        loader: t
    });
    const {
        loader: e,
        loadingComponent: n,
        errorComponent: i,
        delay: r = 200,
        hydrate: s,
        timeout: o,
        suspensible: a = !0,
        onError: l
    } = t;
    let u = null,
        c, f = 0;
    const p = () => (f++, u = null, h()),
        h = () => {
            let d;
            return u || (d = u = e().catch(g => {
                if (g = g instanceof Error ? g : new Error(String(g)), l) return new Promise((w, x) => {
                    l(g, () => w(p()), () => x(g), f + 1)
                });
                throw g
            }).then(g => d !== u && u ? u : (g && (g.__esModule || g[Symbol.toStringTag] === "Module") && (g = g.default), c = g, g)))
        };
    return Cs({
        name: "AsyncComponentWrapper",
        __asyncLoader: h,
        __asyncHydrate(d, g, w) {
            let x = !1;
            (g.bu || (g.bu = [])).push(() => x = !0);
            const R = () => {
                    x || w()
                },
                L = s ? () => {
                    const O = s(R, W => Ic(d, W));
                    O && (g.bum || (g.bum = [])).push(O)
                } : R;
            c ? L() : h().then(() => !g.isUnmounted && L())
        },
        get __asyncResolved() {
            return c
        },
        setup() {
            const d = Ke;
            if (Es(d), c) return () => Li(c, d);
            const g = L => {
                u = null, Ti(L, d, 13, !i)
            };
            if (a && d.suspense || Hn) return h().then(L => () => Li(L, d)).catch(L => (g(L), () => i ? Ue(i, {
                error: L
            }) : null));
            const w = _(!1),
                x = _(),
                R = _(!!r);
            return r && setTimeout(() => {
                R.value = !1
            }, r), o != null && setTimeout(() => {
                if (!w.value && !x.value) {
                    const L = new Error(`Async component timed out after ${o}ms.`);
                    g(L), x.value = L
                }
            }, o), h().then(() => {
                w.value = !0, d.parent && ki(d.parent.vnode) && d.parent.update()
            }).catch(L => {
                g(L), x.value = L
            }), () => {
                if (w.value && c) return Li(c, d);
                if (x.value && i) return Ue(i, {
                    error: x.value
                });
                if (n && !R.value) return Li(n, d)
            }
        }
    })
}

function Li(t, e) {
    const {
        ref: n,
        props: i,
        children: r,
        ce: s
    } = e.vnode, o = Ue(t, i, r);
    return o.ref = n, o.ce = s, delete e.vnode.ce, o
}
const ki = t => t.type.__isKeepAlive;

function Ac(t, e) {
    Xa(t, "a", e)
}

function Oc(t, e) {
    Xa(t, "da", e)
}

function Xa(t, e, n = Ke) {
    const i = t.__wdc || (t.__wdc = () => {
        let r = n;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return t()
    });
    if (cr(e, i, n), n) {
        let r = n.parent;
        for (; r && r.parent;) ki(r.parent.vnode) && Lc(i, e, n, r), r = r.parent
    }
}

function Lc(t, e, n, i) {
    const r = cr(e, t, i, !0);
    Ga(() => {
        cs(i[e], r)
    }, n)
}

function cr(t, e, n = Ke, i = !1) {
    if (n) {
        const r = n[t] || (n[t] = []),
            s = e.__weh || (e.__weh = (...o) => {
                zt();
                const a = _i(n),
                    l = It(e, n, t, o);
                return a(), Kt(), l
            });
        return i ? r.unshift(s) : r.push(s), s
    }
}
const Jt = t => (e, n = Ke) => {
        (!Hn || t === "sp") && cr(t, (...i) => e(...i), n)
    },
    Pc = Jt("bm"),
    Is = Jt("m"),
    Rc = Jt("bu"),
    Ja = Jt("u"),
    As = Jt("bum"),
    Ga = Jt("um"),
    Dc = Jt("sp"),
    Mc = Jt("rtg"),
    Nc = Jt("rtc");

function Fc(t, e = Ke) {
    cr("ec", t, e)
}
const Qa = "components",
    $c = "directives",
    Ya = Symbol.for("v-ndc");

function Bc(t) {
    return De(t) ? Za(Qa, t, !1) || t : t || Ya
}

function Pp(t) {
    return Za($c, t)
}

function Za(t, e, n = !0, i = !1) {
    const r = Xe || Ke;
    if (r) {
        const s = r.type;
        if (t === Qa) {
            const a = Ef(s, !1);
            if (a && (a === e || a === wt(e) || a === sr(wt(e)))) return s
        }
        const o = qs(r[t] || s[t], e) || qs(r.appContext[t], e);
        return !o && i ? s : o
    }
}

function qs(t, e) {
    return t && (t[e] || t[wt(e)] || t[sr(wt(e))])
}

function Rp(t, e, n, i) {
    let r;
    const s = n,
        o = ue(t);
    if (o || De(t)) {
        const a = o && Vt(t);
        let l = !1,
            u = !1;
        a && (l = !mt(t), u = Xt(t), t = ar(t)), r = new Array(t.length);
        for (let c = 0, f = t.length; c < f; c++) r[c] = e(l ? u ? $n(Et(t[c])) : Et(t[c]) : t[c], c, void 0, s)
    } else if (typeof t == "number") {
        r = new Array(t);
        for (let a = 0; a < t; a++) r[a] = e(a + 1, a, void 0, s)
    } else if (_e(t))
        if (t[Symbol.iterator]) r = Array.from(t, (a, l) => e(a, l, void 0, s));
        else {
            const a = Object.keys(t);
            r = new Array(a.length);
            for (let l = 0, u = a.length; l < u; l++) {
                const c = a[l];
                r[l] = e(t[c], c, l, s)
            }
        }
    else r = [];
    return r
}

function Dp(t, e, n = {}, i, r) {
    if (Xe.ce || Xe.parent && Nn(Xe.parent) && Xe.parent.ce) {
        const u = Object.keys(n).length > 0;
        return e !== "default" && (n.name = e), Bn(), mi(ct, null, [Ue("slot", n, i)], u ? -2 : 64)
    }
    let s = t[e];
    s && s._c && (s._d = !1), Bn();
    const o = s && el(s(n)),
        a = n.key || o && o.key,
        l = mi(ct, {
            key: (a && !Ct(a) ? a : `_${e}`) + (!o && i ? "_fb" : "")
        }, o || [], o && t._ === 1 ? 64 : -2);
    return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l
}

function el(t) {
    return t.some(e => vi(e) ? !(e.type === Ze || e.type === ct && !el(e.children)) : !0) ? t : null
}
const Ur = t => t ? xl(t) ? hr(t) : Ur(t.parent) : null,
    si = He(Object.create(null), {
        $: t => t,
        $el: t => t.vnode.el,
        $data: t => t.data,
        $props: t => t.props,
        $attrs: t => t.attrs,
        $slots: t => t.slots,
        $refs: t => t.refs,
        $parent: t => Ur(t.parent),
        $root: t => Ur(t.root),
        $host: t => t.ce,
        $emit: t => t.emit,
        $options: t => il(t),
        $forceUpdate: t => t.f || (t.f = () => {
            ks(t.update)
        }),
        $nextTick: t => t.n || (t.n = Ts.bind(t.proxy)),
        $watch: t => kc.bind(t)
    }),
    xr = (t, e) => t !== Ie && !t.__isScriptSetup && Ee(t, e),
    Hc = {
        get({
            _: t
        }, e) {
            if (e === "__v_skip") return !0;
            const {
                ctx: n,
                setupState: i,
                data: r,
                props: s,
                accessCache: o,
                type: a,
                appContext: l
            } = t;
            if (e[0] !== "$") {
                const p = o[e];
                if (p !== void 0) switch (p) {
                    case 1:
                        return i[e];
                    case 2:
                        return r[e];
                    case 4:
                        return n[e];
                    case 3:
                        return s[e]
                } else {
                    if (xr(i, e)) return o[e] = 1, i[e];
                    if (r !== Ie && Ee(r, e)) return o[e] = 2, r[e];
                    if (Ee(s, e)) return o[e] = 3, s[e];
                    if (n !== Ie && Ee(n, e)) return o[e] = 4, n[e];
                    jr && (o[e] = 0)
                }
            }
            const u = si[e];
            let c, f;
            if (u) return e === "$attrs" && Ye(t.attrs, "get", ""), u(t);
            if ((c = a.__cssModules) && (c = c[e])) return c;
            if (n !== Ie && Ee(n, e)) return o[e] = 4, n[e];
            if (f = l.config.globalProperties, Ee(f, e)) return f[e]
        },
        set({
            _: t
        }, e, n) {
            const {
                data: i,
                setupState: r,
                ctx: s
            } = t;
            return xr(r, e) ? (r[e] = n, !0) : i !== Ie && Ee(i, e) ? (i[e] = n, !0) : Ee(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0)
        },
        has({
            _: {
                data: t,
                setupState: e,
                accessCache: n,
                ctx: i,
                appContext: r,
                props: s,
                type: o
            }
        }, a) {
            let l;
            return !!(n[a] || t !== Ie && a[0] !== "$" && Ee(t, a) || xr(e, a) || Ee(s, a) || Ee(i, a) || Ee(si, a) || Ee(r.config.globalProperties, a) || (l = o.__cssModules) && l[a])
        },
        defineProperty(t, e, n) {
            return n.get != null ? t._.accessCache[e] = 0 : Ee(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n)
        }
    };

function Mp() {
    return tl().slots
}

function Np() {
    return tl().attrs
}

function tl(t) {
    const e = Vn();
    return e.setupContext || (e.setupContext = kl(e))
}

function zs(t) {
    return ue(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t
}
let jr = !0;

function Wc(t) {
    const e = il(t),
        n = t.proxy,
        i = t.ctx;
    jr = !1, e.beforeCreate && Ks(e.beforeCreate, t, "bc");
    const {
        data: r,
        computed: s,
        methods: o,
        watch: a,
        provide: l,
        inject: u,
        created: c,
        beforeMount: f,
        mounted: p,
        beforeUpdate: h,
        updated: d,
        activated: g,
        deactivated: w,
        beforeDestroy: x,
        beforeUnmount: R,
        destroyed: L,
        unmounted: O,
        render: W,
        renderTracked: C,
        renderTriggered: M,
        errorCaptured: D,
        serverPrefetch: v,
        expose: k,
        inheritAttrs: I,
        components: E,
        directives: S,
        filters: N
    } = e;
    if (u && Uc(u, i, null), o)
        for (const K in o) {
            const le = o[K];
            ce(le) && (i[K] = le.bind(n))
        }
    if (r) {
        const K = r.call(n, n);
        _e(K) && (t.data = lr(K))
    }
    if (jr = !0, s)
        for (const K in s) {
            const le = s[K],
                me = ce(le) ? le.bind(n, n) : ce(le.get) ? le.get.bind(n, n) : $t,
                Le = !ce(le) && ce(le.set) ? le.set.bind(n) : $t,
                ke = ee({
                    get: me,
                    set: Le
                });
            Object.defineProperty(i, K, {
                enumerable: !0,
                configurable: !0,
                get: () => ke.value,
                set: Ce => ke.value = Ce
            })
        }
    if (a)
        for (const K in a) nl(a[K], i, n, K);
    if (l) {
        const K = ce(l) ? l.call(n) : l;
        Reflect.ownKeys(K).forEach(le => {
            bc(le, K[le])
        })
    }
    c && Ks(c, t, "c");

    function Y(K, le) {
        ue(le) ? le.forEach(me => K(me.bind(n))) : le && K(le.bind(n))
    }
    if (Y(Pc, f), Y(Is, p), Y(Rc, h), Y(Ja, d), Y(Ac, g), Y(Oc, w), Y(Fc, D), Y(Nc, C), Y(Mc, M), Y(As, R), Y(Ga, O), Y(Dc, v), ue(k))
        if (k.length) {
            const K = t.exposed || (t.exposed = {});
            k.forEach(le => {
                Object.defineProperty(K, le, {
                    get: () => n[le],
                    set: me => n[le] = me,
                    enumerable: !0
                })
            })
        } else t.exposed || (t.exposed = {});
    W && t.render === $t && (t.render = W), I != null && (t.inheritAttrs = I), E && (t.components = E), S && (t.directives = S), v && Es(t)
}

function Uc(t, e, n = $t) {
    ue(t) && (t = Vr(t));
    for (const i in t) {
        const r = t[i];
        let s;
        _e(r) ? "default" in r ? s = Nt(r.from || i, r.default, !0) : s = Nt(r.from || i) : s = Nt(r), Re(s) ? Object.defineProperty(e, i, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: o => s.value = o
        }) : e[i] = s
    }
}

function Ks(t, e, n) {
    It(ue(t) ? t.map(i => i.bind(e.proxy)) : t.bind(e.proxy), e, n)
}

function nl(t, e, n, i) {
    let r = i.includes(".") ? Wa(n, i) : () => n[i];
    if (De(t)) {
        const s = e[t];
        ce(s) && xt(r, s)
    } else if (ce(t)) xt(r, t.bind(n));
    else if (_e(t))
        if (ue(t)) t.forEach(s => nl(s, e, n, i));
        else {
            const s = ce(t.handler) ? t.handler.bind(n) : e[t.handler];
            ce(s) && xt(r, s, t)
        }
}

function il(t) {
    const e = t.type,
        {
            mixins: n,
            extends: i
        } = e,
        {
            mixins: r,
            optionsCache: s,
            config: {
                optionMergeStrategies: o
            }
        } = t.appContext,
        a = s.get(e);
    let l;
    return a ? l = a : !r.length && !n && !i ? l = e : (l = {}, r.length && r.forEach(u => qi(l, u, o, !0)), qi(l, e, o)), _e(e) && s.set(e, l), l
}

function qi(t, e, n, i = !1) {
    const {
        mixins: r,
        extends: s
    } = e;
    s && qi(t, s, n, !0), r && r.forEach(o => qi(t, o, n, !0));
    for (const o in e)
        if (!(i && o === "expose")) {
            const a = jc[o] || n && n[o];
            t[o] = a ? a(t[o], e[o]) : e[o]
        }
    return t
}
const jc = {
    data: Xs,
    props: Js,
    emits: Js,
    methods: Yn,
    computed: Yn,
    beforeCreate: rt,
    created: rt,
    beforeMount: rt,
    mounted: rt,
    beforeUpdate: rt,
    updated: rt,
    beforeDestroy: rt,
    beforeUnmount: rt,
    destroyed: rt,
    unmounted: rt,
    activated: rt,
    deactivated: rt,
    errorCaptured: rt,
    serverPrefetch: rt,
    components: Yn,
    directives: Yn,
    watch: qc,
    provide: Xs,
    inject: Vc
};

function Xs(t, e) {
    return e ? t ? function() {
        return He(ce(t) ? t.call(this, this) : t, ce(e) ? e.call(this, this) : e)
    } : e : t
}

function Vc(t, e) {
    return Yn(Vr(t), Vr(e))
}

function Vr(t) {
    if (ue(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
        return e
    }
    return t
}

function rt(t, e) {
    return t ? [...new Set([].concat(t, e))] : e
}

function Yn(t, e) {
    return t ? He(Object.create(null), t, e) : e
}

function Js(t, e) {
    return t ? ue(t) && ue(e) ? [...new Set([...t, ...e])] : He(Object.create(null), zs(t), zs(e ? ? {})) : e
}

function qc(t, e) {
    if (!t) return e;
    if (!e) return t;
    const n = He(Object.create(null), t);
    for (const i in e) n[i] = rt(t[i], e[i]);
    return n
}

function rl() {
    return {
        app: null,
        config: {
            isNativeTag: sa,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let zc = 0;

function Kc(t, e) {
    return function(i, r = null) {
        ce(i) || (i = He({}, i)), r != null && !_e(r) && (r = null);
        const s = rl(),
            o = new WeakSet,
            a = [];
        let l = !1;
        const u = s.app = {
            _uid: zc++,
            _component: i,
            _props: r,
            _container: null,
            _context: s,
            _instance: null,
            version: Af,
            get config() {
                return s.config
            },
            set config(c) {},
            use(c, ...f) {
                return o.has(c) || (c && ce(c.install) ? (o.add(c), c.install(u, ...f)) : ce(c) && (o.add(c), c(u, ...f))), u
            },
            mixin(c) {
                return s.mixins.includes(c) || s.mixins.push(c), u
            },
            component(c, f) {
                return f ? (s.components[c] = f, u) : s.components[c]
            },
            directive(c, f) {
                return f ? (s.directives[c] = f, u) : s.directives[c]
            },
            mount(c, f, p) {
                if (!l) {
                    const h = u._ceVNode || Ue(i, r);
                    return h.appContext = s, p === !0 ? p = "svg" : p === !1 && (p = void 0), t(h, c, p), l = !0, u._container = c, c.__vue_app__ = u, hr(h.component)
                }
            },
            onUnmount(c) {
                a.push(c)
            },
            unmount() {
                l && (It(a, u._instance, 16), t(null, u._container), delete u._container.__vue_app__)
            },
            provide(c, f) {
                return s.provides[c] = f, u
            },
            runWithContext(c) {
                const f = xn;
                xn = u;
                try {
                    return c()
                } finally {
                    xn = f
                }
            }
        };
        return u
    }
}
let xn = null;
const Xc = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${wt(e)}Modifiers`] || t[`${cn(e)}Modifiers`];

function Jc(t, e, ...n) {
    if (t.isUnmounted) return;
    const i = t.vnode.props || Ie;
    let r = n;
    const s = e.startsWith("update:"),
        o = s && Xc(i, e.slice(7));
    o && (o.trim && (r = n.map(c => De(c) ? c.trim() : c)), o.number && (r = n.map(fs)));
    let a, l = i[a = mr(e)] || i[a = mr(wt(e))];
    !l && s && (l = i[a = mr(cn(e))]), l && It(l, t, 6, r);
    const u = i[a + "Once"];
    if (u) {
        if (!t.emitted) t.emitted = {};
        else if (t.emitted[a]) return;
        t.emitted[a] = !0, It(u, t, 6, r)
    }
}
const Gc = new WeakMap;

function sl(t, e, n = !1) {
    const i = n ? Gc : e.emitsCache,
        r = i.get(t);
    if (r !== void 0) return r;
    const s = t.emits;
    let o = {},
        a = !1;
    if (!ce(t)) {
        const l = u => {
            const c = sl(u, e, !0);
            c && (a = !0, He(o, c))
        };
        !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l)
    }
    return !s && !a ? (_e(t) && i.set(t, null), null) : (ue(s) ? s.forEach(l => o[l] = null) : He(o, s), _e(t) && i.set(t, o), o)
}

function fr(t, e) {
    return !t || !nr(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Ee(t, e[0].toLowerCase() + e.slice(1)) || Ee(t, cn(e)) || Ee(t, e))
}

function Gs(t) {
    const {
        type: e,
        vnode: n,
        proxy: i,
        withProxy: r,
        propsOptions: [s],
        slots: o,
        attrs: a,
        emit: l,
        render: u,
        renderCache: c,
        props: f,
        data: p,
        setupState: h,
        ctx: d,
        inheritAttrs: g
    } = t, w = ji(t);
    let x, R;
    try {
        if (n.shapeFlag & 4) {
            const O = r || i,
                W = O;
            x = Mt(u.call(W, O, c, f, h, p, d)), R = a
        } else {
            const O = e;
            x = Mt(O.length > 1 ? O(f, {
                attrs: a,
                slots: o,
                emit: l
            }) : O(f, null)), R = e.props ? a : Qc(a)
        }
    } catch (O) {
        oi.length = 0, Ti(O, t, 1), x = Ue(Ze)
    }
    let L = x;
    if (R && g !== !1) {
        const O = Object.keys(R),
            {
                shapeFlag: W
            } = L;
        O.length && W & 7 && (s && O.some(us) && (R = Yc(R, s)), L = an(L, R, !1, !0))
    }
    return n.dirs && (L = an(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && kn(L, n.transition), x = L, ji(w), x
}
const Qc = t => {
        let e;
        for (const n in t)(n === "class" || n === "style" || nr(n)) && ((e || (e = {}))[n] = t[n]);
        return e
    },
    Yc = (t, e) => {
        const n = {};
        for (const i in t)(!us(i) || !(i.slice(9) in e)) && (n[i] = t[i]);
        return n
    };

function Zc(t, e, n) {
    const {
        props: i,
        children: r,
        component: s
    } = t, {
        props: o,
        children: a,
        patchFlag: l
    } = e, u = s.emitsOptions;
    if (e.dirs || e.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return i ? Qs(i, o, u) : !!o;
        if (l & 8) {
            const c = e.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const p = c[f];
                if (ol(o, i, p) && !fr(u, p)) return !0
            }
        }
    } else return (r || a) && (!a || !a.$stable) ? !0 : i === o ? !1 : i ? o ? Qs(i, o, u) : !0 : !!o;
    return !1
}

function Qs(t, e, n) {
    const i = Object.keys(e);
    if (i.length !== Object.keys(t).length) return !0;
    for (let r = 0; r < i.length; r++) {
        const s = i[r];
        if (ol(e, t, s) && !fr(n, s)) return !0
    }
    return !1
}

function ol(t, e, n) {
    const i = t[n],
        r = e[n];
    return n === "style" && _e(i) && _e(r) ? !ps(i, r) : i !== r
}

function ef({
    vnode: t,
    parent: e
}, n) {
    for (; e;) {
        const i = e.subTree;
        if (i.suspense && i.suspense.activeBranch === t && (i.el = t.el), i === t)(t = e.vnode).el = n, e = e.parent;
        else break
    }
}
const al = {},
    ll = () => Object.create(al),
    ul = t => Object.getPrototypeOf(t) === al;

function tf(t, e, n, i = !1) {
    const r = {},
        s = ll();
    t.propsDefaults = Object.create(null), cl(t, e, r, s);
    for (const o in t.propsOptions[0]) o in r || (r[o] = void 0);
    n ? t.props = i ? r : oc(r) : t.type.props ? t.props = r : t.props = s, t.attrs = s
}

function nf(t, e, n, i) {
    const {
        props: r,
        attrs: s,
        vnode: {
            patchFlag: o
        }
    } = t, a = xe(r), [l] = t.propsOptions;
    let u = !1;
    if ((i || o > 0) && !(o & 16)) {
        if (o & 8) {
            const c = t.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let p = c[f];
                if (fr(t.emitsOptions, p)) continue;
                const h = e[p];
                if (l)
                    if (Ee(s, p)) h !== s[p] && (s[p] = h, u = !0);
                    else {
                        const d = wt(p);
                        r[d] = qr(l, a, d, h, t, !1)
                    }
                else h !== s[p] && (s[p] = h, u = !0)
            }
        }
    } else {
        cl(t, e, r, s) && (u = !0);
        let c;
        for (const f in a)(!e || !Ee(e, f) && ((c = cn(f)) === f || !Ee(e, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (r[f] = qr(l, a, f, void 0, t, !0)) : delete r[f]);
        if (s !== a)
            for (const f in s)(!e || !Ee(e, f)) && (delete s[f], u = !0)
    }
    u && Ut(t.attrs, "set", "")
}

function cl(t, e, n, i) {
    const [r, s] = t.propsOptions;
    let o = !1,
        a;
    if (e)
        for (let l in e) {
            if (ti(l)) continue;
            const u = e[l];
            let c;
            r && Ee(r, c = wt(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : fr(t.emitsOptions, l) || (!(l in i) || u !== i[l]) && (i[l] = u, o = !0)
        }
    if (s) {
        const l = xe(n),
            u = a || Ie;
        for (let c = 0; c < s.length; c++) {
            const f = s[c];
            n[f] = qr(r, l, f, u[f], t, !Ee(u, f))
        }
    }
    return o
}

function qr(t, e, n, i, r, s) {
    const o = t[n];
    if (o != null) {
        const a = Ee(o, "default");
        if (a && i === void 0) {
            const l = o.default;
            if (o.type !== Function && !o.skipFactory && ce(l)) {
                const {
                    propsDefaults: u
                } = r;
                if (n in u) i = u[n];
                else {
                    const c = _i(r);
                    i = u[n] = l.call(null, e), c()
                }
            } else i = l;
            r.ce && r.ce._setProp(n, i)
        }
        o[0] && (s && !a ? i = !1 : o[1] && (i === "" || i === cn(n)) && (i = !0))
    }
    return i
}
const rf = new WeakMap;

function fl(t, e, n = !1) {
    const i = n ? rf : e.propsCache,
        r = i.get(t);
    if (r) return r;
    const s = t.props,
        o = {},
        a = [];
    let l = !1;
    if (!ce(t)) {
        const c = f => {
            l = !0;
            const [p, h] = fl(f, e, !0);
            He(o, p), h && a.push(...h)
        };
        !n && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c)
    }
    if (!s && !l) return _e(t) && i.set(t, Rn), Rn;
    if (ue(s))
        for (let c = 0; c < s.length; c++) {
            const f = wt(s[c]);
            Ys(f) && (o[f] = Ie)
        } else if (s)
            for (const c in s) {
                const f = wt(c);
                if (Ys(f)) {
                    const p = s[c],
                        h = o[f] = ue(p) || ce(p) ? {
                            type: p
                        } : He({}, p),
                        d = h.type;
                    let g = !1,
                        w = !0;
                    if (ue(d))
                        for (let x = 0; x < d.length; ++x) {
                            const R = d[x],
                                L = ce(R) && R.name;
                            if (L === "Boolean") {
                                g = !0;
                                break
                            } else L === "String" && (w = !1)
                        } else g = ce(d) && d.name === "Boolean";
                    h[0] = g, h[1] = w, (g || Ee(h, "default")) && a.push(f)
                }
            }
    const u = [o, a];
    return _e(t) && i.set(t, u), u
}

function Ys(t) {
    return t[0] !== "$" && !ti(t)
}
const Os = t => t === "_" || t === "_ctx" || t === "$stable",
    Ls = t => ue(t) ? t.map(Mt) : [Mt(t)],
    sf = (t, e, n) => {
        if (e._n) return e;
        const i = Ba((...r) => Ls(e(...r)), n);
        return i._c = !1, i
    },
    dl = (t, e, n) => {
        const i = t._ctx;
        for (const r in t) {
            if (Os(r)) continue;
            const s = t[r];
            if (ce(s)) e[r] = sf(r, s, i);
            else if (s != null) {
                const o = Ls(s);
                e[r] = () => o
            }
        }
    },
    hl = (t, e) => {
        const n = Ls(e);
        t.slots.default = () => n
    },
    pl = (t, e, n) => {
        for (const i in e)(n || !Os(i)) && (t[i] = e[i])
    },
    of = (t, e, n) => {
        const i = t.slots = ll();
        if (t.vnode.shapeFlag & 32) {
            const r = e._;
            r ? (pl(i, e, n), n && ca(i, "_", r, !0)) : dl(e, i)
        } else e && hl(t, e)
    },
    af = (t, e, n) => {
        const {
            vnode: i,
            slots: r
        } = t;
        let s = !0,
            o = Ie;
        if (i.shapeFlag & 32) {
            const a = e._;
            a ? n && a === 1 ? s = !1 : pl(r, e, n) : (s = !e.$stable, dl(e, r)), o = e
        } else e && (hl(t, e), o = {
            default: 1
        });
        if (s)
            for (const a in r) !Os(a) && o[a] == null && delete r[a]
    },
    ut = df;

function lf(t) {
    return uf(t)
}

function uf(t, e) {
    const n = or();
    n.__VUE__ = !0;
    const {
        insert: i,
        remove: r,
        patchProp: s,
        createElement: o,
        createText: a,
        createComment: l,
        setText: u,
        setElementText: c,
        parentNode: f,
        nextSibling: p,
        setScopeId: h = $t,
        insertStaticContent: d
    } = t, g = (m, y, A, b = null, P = null, B = null, q = void 0, V = null, U = !!y.dynamicChildren) => {
        if (m === y) return;
        m && !bn(m, y) && (b = dt(m), Ce(m, P, B, !0), m = null), y.patchFlag === -2 && (U = !1, y.dynamicChildren = null);
        const {
            type: H,
            ref: re,
            shapeFlag: G
        } = y;
        switch (H) {
            case dr:
                w(m, y, A, b);
                break;
            case Ze:
                x(m, y, A, b);
                break;
            case Fi:
                m == null && R(y, A, b, q);
                break;
            case ct:
                E(m, y, A, b, P, B, q, V, U);
                break;
            default:
                G & 1 ? W(m, y, A, b, P, B, q, V, U) : G & 6 ? S(m, y, A, b, P, B, q, V, U) : (G & 64 || G & 128) && H.process(m, y, A, b, P, B, q, V, U, ht)
        }
        re != null && P ? ri(re, m && m.ref, B, y || m, !y) : re == null && m && m.ref != null && ri(m.ref, null, B, m, !0)
    }, w = (m, y, A, b) => {
        if (m == null) i(y.el = a(y.children), A, b);
        else {
            const P = y.el = m.el;
            y.children !== m.children && u(P, y.children)
        }
    }, x = (m, y, A, b) => {
        m == null ? i(y.el = l(y.children || ""), A, b) : y.el = m.el
    }, R = (m, y, A, b) => {
        [m.el, m.anchor] = d(m.children, y, A, b, m.el, m.anchor)
    }, L = ({
        el: m,
        anchor: y
    }, A, b) => {
        let P;
        for (; m && m !== y;) P = p(m), i(m, A, b), m = P;
        i(y, A, b)
    }, O = ({
        el: m,
        anchor: y
    }) => {
        let A;
        for (; m && m !== y;) A = p(m), r(m), m = A;
        r(y)
    }, W = (m, y, A, b, P, B, q, V, U) => {
        if (y.type === "svg" ? q = "svg" : y.type === "math" && (q = "mathml"), m == null) C(y, A, b, P, B, q, V, U);
        else {
            const H = m.el && m.el._isVueCE ? m.el : null;
            try {
                H && H._beginPatch(), v(m, y, P, B, q, V, U)
            } finally {
                H && H._endPatch()
            }
        }
    }, C = (m, y, A, b, P, B, q, V) => {
        let U, H;
        const {
            props: re,
            shapeFlag: G,
            transition: ne,
            dirs: se
        } = m;
        if (U = m.el = o(m.type, B, re && re.is, re), G & 8 ? c(U, m.children) : G & 16 && D(m.children, U, null, b, P, Tr(m, B), q, V), se && pn(m, null, b, "created"), M(U, m, m.scopeId, q, b), re) {
            for (const Se in re) Se !== "value" && !ti(Se) && s(U, Se, null, re[Se], B, b);
            "value" in re && s(U, "value", null, re.value, B), (H = re.onVnodeBeforeMount) && At(H, b, m)
        }
        se && pn(m, null, b, "beforeMount");
        const he = cf(P, ne);
        he && ne.beforeEnter(U), i(U, y, A), ((H = re && re.onVnodeMounted) || he || se) && ut(() => {
            H && At(H, b, m), he && ne.enter(U), se && pn(m, null, b, "mounted")
        }, P)
    }, M = (m, y, A, b, P) => {
        if (A && h(m, A), b)
            for (let B = 0; B < b.length; B++) h(m, b[B]);
        if (P) {
            let B = P.subTree;
            if (y === B || yl(B.type) && (B.ssContent === y || B.ssFallback === y)) {
                const q = P.vnode;
                M(m, q, q.scopeId, q.slotScopeIds, P.parent)
            }
        }
    }, D = (m, y, A, b, P, B, q, V, U = 0) => {
        for (let H = U; H < m.length; H++) {
            const re = m[H] = V ? Wt(m[H]) : Mt(m[H]);
            g(null, re, y, A, b, P, B, q, V)
        }
    }, v = (m, y, A, b, P, B, q) => {
        const V = y.el = m.el;
        let {
            patchFlag: U,
            dynamicChildren: H,
            dirs: re
        } = y;
        U |= m.patchFlag & 16;
        const G = m.props || Ie,
            ne = y.props || Ie;
        let se;
        if (A && gn(A, !1), (se = ne.onVnodeBeforeUpdate) && At(se, A, y, m), re && pn(y, m, A, "beforeUpdate"), A && gn(A, !0), (G.innerHTML && ne.innerHTML == null || G.textContent && ne.textContent == null) && c(V, ""), H ? k(m.dynamicChildren, H, V, A, b, Tr(y, P), B) : q || le(m, y, V, null, A, b, Tr(y, P), B, !1), U > 0) {
            if (U & 16) I(V, G, ne, A, P);
            else if (U & 2 && G.class !== ne.class && s(V, "class", null, ne.class, P), U & 4 && s(V, "style", G.style, ne.style, P), U & 8) {
                const he = y.dynamicProps;
                for (let Se = 0; Se < he.length; Se++) {
                    const X = he[Se],
                        de = G[X],
                        ve = ne[X];
                    (ve !== de || X === "value") && s(V, X, de, ve, P, A)
                }
            }
            U & 1 && m.children !== y.children && c(V, y.children)
        } else !q && H == null && I(V, G, ne, A, P);
        ((se = ne.onVnodeUpdated) || re) && ut(() => {
            se && At(se, A, y, m), re && pn(y, m, A, "updated")
        }, b)
    }, k = (m, y, A, b, P, B, q) => {
        for (let V = 0; V < y.length; V++) {
            const U = m[V],
                H = y[V],
                re = U.el && (U.type === ct || !bn(U, H) || U.shapeFlag & 198) ? f(U.el) : A;
            g(U, H, re, null, b, P, B, q, !0)
        }
    }, I = (m, y, A, b, P) => {
        if (y !== A) {
            if (y !== Ie)
                for (const B in y) !ti(B) && !(B in A) && s(m, B, y[B], null, P, b);
            for (const B in A) {
                if (ti(B)) continue;
                const q = A[B],
                    V = y[B];
                q !== V && B !== "value" && s(m, B, V, q, P, b)
            }
            "value" in A && s(m, "value", y.value, A.value, P)
        }
    }, E = (m, y, A, b, P, B, q, V, U) => {
        const H = y.el = m ? m.el : a(""),
            re = y.anchor = m ? m.anchor : a("");
        let {
            patchFlag: G,
            dynamicChildren: ne,
            slotScopeIds: se
        } = y;
        se && (V = V ? V.concat(se) : se), m == null ? (i(H, A, b), i(re, A, b), D(y.children || [], A, re, P, B, q, V, U)) : G > 0 && G & 64 && ne && m.dynamicChildren && m.dynamicChildren.length === ne.length ? (k(m.dynamicChildren, ne, A, P, B, q, V), (y.key != null || P && y === P.subTree) && gl(m, y, !0)) : le(m, y, A, re, P, B, q, V, U)
    }, S = (m, y, A, b, P, B, q, V, U) => {
        y.slotScopeIds = V, m == null ? y.shapeFlag & 512 ? P.ctx.activate(y, A, b, q, U) : N(y, A, b, P, B, q, U) : J(m, y, U)
    }, N = (m, y, A, b, P, B, q) => {
        const V = m.component = Tf(m, b, P);
        if (ki(m) && (V.ctx.renderer = ht), kf(V, !1, q), V.asyncDep) {
            if (P && P.registerDep(V, Y, q), !m.el) {
                const U = V.subTree = Ue(Ze);
                x(null, U, y, A), m.placeholder = U.el
            }
        } else Y(V, m, y, A, P, B, q)
    }, J = (m, y, A) => {
        const b = y.component = m.component;
        if (Zc(m, y, A))
            if (b.asyncDep && !b.asyncResolved) {
                K(b, y, A);
                return
            } else b.next = y, b.update();
        else y.el = m.el, b.vnode = y
    }, Y = (m, y, A, b, P, B, q) => {
        const V = () => {
            if (m.isMounted) {
                let {
                    next: G,
                    bu: ne,
                    u: se,
                    parent: he,
                    vnode: Se
                } = m; {
                    const Z = ml(m);
                    if (Z) {
                        G && (G.el = Se.el, K(m, G, q)), Z.asyncDep.then(() => {
                            ut(() => {
                                m.isUnmounted || H()
                            }, P)
                        });
                        return
                    }
                }
                let X = G,
                    de;
                gn(m, !1), G ? (G.el = Se.el, K(m, G, q)) : G = Se, ne && Ni(ne), (de = G.props && G.props.onVnodeBeforeUpdate) && At(de, he, G, Se), gn(m, !0);
                const ve = Gs(m),
                    T = m.subTree;
                m.subTree = ve, g(T, ve, f(T.el), dt(T), m, P, B), G.el = ve.el, X === null && ef(m, ve.el), se && ut(se, P), (de = G.props && G.props.onVnodeUpdated) && ut(() => At(de, he, G, Se), P)
            } else {
                let G;
                const {
                    el: ne,
                    props: se
                } = y, {
                    bm: he,
                    m: Se,
                    parent: X,
                    root: de,
                    type: ve
                } = m, T = Nn(y);
                gn(m, !1), he && Ni(he), !T && (G = se && se.onVnodeBeforeMount) && At(G, X, y), gn(m, !0); {
                    de.ce && de.ce._hasShadowRoot() && de.ce._injectChildStyle(ve);
                    const Z = m.subTree = Gs(m);
                    g(null, Z, A, b, m, P, B), y.el = Z.el
                }
                if (Se && ut(Se, P), !T && (G = se && se.onVnodeMounted)) {
                    const Z = y;
                    ut(() => At(G, X, Z), P)
                }(y.shapeFlag & 256 || X && Nn(X.vnode) && X.vnode.shapeFlag & 256) && m.a && ut(m.a, P), m.isMounted = !0, y = A = b = null
            }
        };
        m.scope.on();
        const U = m.effect = new va(V);
        m.scope.off();
        const H = m.update = U.run.bind(U),
            re = m.job = U.runIfDirty.bind(U);
        re.i = m, re.id = m.uid, U.scheduler = () => ks(re), gn(m, !0), H()
    }, K = (m, y, A) => {
        y.component = m;
        const b = m.vnode.props;
        m.vnode = y, m.next = null, nf(m, y.props, b, A), af(m, y.children, A), zt(), Hs(m), Kt()
    }, le = (m, y, A, b, P, B, q, V, U = !1) => {
        const H = m && m.children,
            re = m ? m.shapeFlag : 0,
            G = y.children,
            {
                patchFlag: ne,
                shapeFlag: se
            } = y;
        if (ne > 0) {
            if (ne & 128) {
                Le(H, G, A, b, P, B, q, V, U);
                return
            } else if (ne & 256) {
                me(H, G, A, b, P, B, q, V, U);
                return
            }
        }
        se & 8 ? (re & 16 && tt(H, P, B), G !== H && c(A, G)) : re & 16 ? se & 16 ? Le(H, G, A, b, P, B, q, V, U) : tt(H, P, B, !0) : (re & 8 && c(A, ""), se & 16 && D(G, A, b, P, B, q, V, U))
    }, me = (m, y, A, b, P, B, q, V, U) => {
        m = m || Rn, y = y || Rn;
        const H = m.length,
            re = y.length,
            G = Math.min(H, re);
        let ne;
        for (ne = 0; ne < G; ne++) {
            const se = y[ne] = U ? Wt(y[ne]) : Mt(y[ne]);
            g(m[ne], se, A, null, P, B, q, V, U)
        }
        H > re ? tt(m, P, B, !0, !1, G) : D(y, A, b, P, B, q, V, U, G)
    }, Le = (m, y, A, b, P, B, q, V, U) => {
        let H = 0;
        const re = y.length;
        let G = m.length - 1,
            ne = re - 1;
        for (; H <= G && H <= ne;) {
            const se = m[H],
                he = y[H] = U ? Wt(y[H]) : Mt(y[H]);
            if (bn(se, he)) g(se, he, A, null, P, B, q, V, U);
            else break;
            H++
        }
        for (; H <= G && H <= ne;) {
            const se = m[G],
                he = y[ne] = U ? Wt(y[ne]) : Mt(y[ne]);
            if (bn(se, he)) g(se, he, A, null, P, B, q, V, U);
            else break;
            G--, ne--
        }
        if (H > G) {
            if (H <= ne) {
                const se = ne + 1,
                    he = se < re ? y[se].el : b;
                for (; H <= ne;) g(null, y[H] = U ? Wt(y[H]) : Mt(y[H]), A, he, P, B, q, V, U), H++
            }
        } else if (H > ne)
            for (; H <= G;) Ce(m[H], P, B, !0), H++;
        else {
            const se = H,
                he = H,
                Se = new Map;
            for (H = he; H <= ne; H++) {
                const ge = y[H] = U ? Wt(y[H]) : Mt(y[H]);
                ge.key != null && Se.set(ge.key, H)
            }
            let X, de = 0;
            const ve = ne - he + 1;
            let T = !1,
                Z = 0;
            const ie = new Array(ve);
            for (H = 0; H < ve; H++) ie[H] = 0;
            for (H = se; H <= G; H++) {
                const ge = m[H];
                if (de >= ve) {
                    Ce(ge, P, B, !0);
                    continue
                }
                let Te;
                if (ge.key != null) Te = Se.get(ge.key);
                else
                    for (X = he; X <= ne; X++)
                        if (ie[X - he] === 0 && bn(ge, y[X])) {
                            Te = X;
                            break
                        }
                Te === void 0 ? Ce(ge, P, B, !0) : (ie[Te - he] = H + 1, Te >= Z ? Z = Te : T = !0, g(ge, y[Te], A, null, P, B, q, V, U), de++)
            }
            const oe = T ? ff(ie) : Rn;
            for (X = oe.length - 1, H = ve - 1; H >= 0; H--) {
                const ge = he + H,
                    Te = y[ge],
                    Ve = y[ge + 1],
                    Ne = ge + 1 < re ? Ve.el || vl(Ve) : b;
                ie[H] === 0 ? g(null, Te, A, Ne, P, B, q, V, U) : T && (X < 0 || H !== oe[X] ? ke(Te, A, Ne, 2) : X--)
            }
        }
    }, ke = (m, y, A, b, P = null) => {
        const {
            el: B,
            type: q,
            transition: V,
            children: U,
            shapeFlag: H
        } = m;
        if (H & 6) {
            ke(m.component.subTree, y, A, b);
            return
        }
        if (H & 128) {
            m.suspense.move(y, A, b);
            return
        }
        if (H & 64) {
            q.move(m, y, A, ht);
            return
        }
        if (q === ct) {
            i(B, y, A);
            for (let G = 0; G < U.length; G++) ke(U[G], y, A, b);
            i(m.anchor, y, A);
            return
        }
        if (q === Fi) {
            L(m, y, A);
            return
        }
        if (b !== 2 && H & 1 && V)
            if (b === 0) V.beforeEnter(B), i(B, y, A), ut(() => V.enter(B), P);
            else {
                const {
                    leave: G,
                    delayLeave: ne,
                    afterLeave: se
                } = V, he = () => {
                    m.ctx.isUnmounted ? r(B) : i(B, y, A)
                }, Se = () => {
                    B._isLeaving && B[Dt](!0), G(B, () => {
                        he(), se && se()
                    })
                };
                ne ? ne(B, he, Se) : Se()
            }
        else i(B, y, A)
    }, Ce = (m, y, A, b = !1, P = !1) => {
        const {
            type: B,
            props: q,
            ref: V,
            children: U,
            dynamicChildren: H,
            shapeFlag: re,
            patchFlag: G,
            dirs: ne,
            cacheIndex: se
        } = m;
        if (G === -2 && (P = !1), V != null && (zt(), ri(V, null, A, m, !0), Kt()), se != null && (y.renderCache[se] = void 0), re & 256) {
            y.ctx.deactivate(m);
            return
        }
        const he = re & 1 && ne,
            Se = !Nn(m);
        let X;
        if (Se && (X = q && q.onVnodeBeforeUnmount) && At(X, y, m), re & 6) je(m.component, A, b);
        else {
            if (re & 128) {
                m.suspense.unmount(A, b);
                return
            }
            he && pn(m, null, y, "beforeUnmount"), re & 64 ? m.type.remove(m, y, A, ht, b) : H && !H.hasOnce && (B !== ct || G > 0 && G & 64) ? tt(H, y, A, !1, !0) : (B === ct && G & 384 || !P && re & 16) && tt(U, y, A), b && Me(m)
        }(Se && (X = q && q.onVnodeUnmounted) || he) && ut(() => {
            X && At(X, y, m), he && pn(m, null, y, "unmounted")
        }, A)
    }, Me = m => {
        const {
            type: y,
            el: A,
            anchor: b,
            transition: P
        } = m;
        if (y === ct) {
            ft(A, b);
            return
        }
        if (y === Fi) {
            O(m);
            return
        }
        const B = () => {
            r(A), P && !P.persisted && P.afterLeave && P.afterLeave()
        };
        if (m.shapeFlag & 1 && P && !P.persisted) {
            const {
                leave: q,
                delayLeave: V
            } = P, U = () => q(A, B);
            V ? V(m.el, B, U) : U()
        } else B()
    }, ft = (m, y) => {
        let A;
        for (; m !== y;) A = p(m), r(m), m = A;
        r(y)
    }, je = (m, y, A) => {
        const {
            bum: b,
            scope: P,
            job: B,
            subTree: q,
            um: V,
            m: U,
            a: H
        } = m;
        Zs(U), Zs(H), b && Ni(b), P.stop(), B && (B.flags |= 8, Ce(q, m, y, A)), V && ut(V, y), ut(() => {
            m.isUnmounted = !0
        }, y)
    }, tt = (m, y, A, b = !1, P = !1, B = 0) => {
        for (let q = B; q < m.length; q++) Ce(m[q], y, A, b, P)
    }, dt = m => {
        if (m.shapeFlag & 6) return dt(m.component.subTree);
        if (m.shapeFlag & 128) return m.suspense.next();
        const y = p(m.anchor || m.el),
            A = y && y[_c];
        return A ? p(A) : y
    };
    let Je = !1;
    const nt = (m, y, A) => {
            let b;
            m == null ? y._vnode && (Ce(y._vnode, null, null, !0), b = y._vnode.component) : g(y._vnode || null, m, y, null, null, null, A), y._vnode = m, Je || (Je = !0, Hs(b), Na(), Je = !1)
        },
        ht = {
            p: g,
            um: Ce,
            m: ke,
            r: Me,
            mt: N,
            mc: D,
            pc: le,
            pbc: k,
            n: dt,
            o: t
        };
    return {
        render: nt,
        hydrate: void 0,
        createApp: Kc(nt)
    }
}

function Tr({
    type: t,
    props: e
}, n) {
    return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n
}

function gn({
    effect: t,
    job: e
}, n) {
    n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5)
}

function cf(t, e) {
    return (!t || t && !t.pendingBranch) && e && !e.persisted
}

function gl(t, e, n = !1) {
    const i = t.children,
        r = e.children;
    if (ue(i) && ue(r))
        for (let s = 0; s < i.length; s++) {
            const o = i[s];
            let a = r[s];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[s] = Wt(r[s]), a.el = o.el), !n && a.patchFlag !== -2 && gl(o, a)), a.type === dr && (a.patchFlag === -1 && (a = r[s] = Wt(a)), a.el = o.el), a.type === Ze && !a.el && (a.el = o.el)
        }
}

function ff(t) {
    const e = t.slice(),
        n = [0];
    let i, r, s, o, a;
    const l = t.length;
    for (i = 0; i < l; i++) {
        const u = t[i];
        if (u !== 0) {
            if (r = n[n.length - 1], t[r] < u) {
                e[i] = r, n.push(i);
                continue
            }
            for (s = 0, o = n.length - 1; s < o;) a = s + o >> 1, t[n[a]] < u ? s = a + 1 : o = a;
            u < t[n[s]] && (s > 0 && (e[i] = n[s - 1]), n[s] = i)
        }
    }
    for (s = n.length, o = n[s - 1]; s-- > 0;) n[s] = o, o = e[o];
    return n
}

function ml(t) {
    const e = t.subTree.component;
    if (e) return e.asyncDep && !e.asyncResolved ? e : ml(e)
}

function Zs(t) {
    if (t)
        for (let e = 0; e < t.length; e++) t[e].flags |= 8
}

function vl(t) {
    if (t.placeholder) return t.placeholder;
    const e = t.component;
    return e ? vl(e.subTree) : null
}
const yl = t => t.__isSuspense;

function df(t, e) {
    e && e.pendingBranch ? ue(t) ? e.effects.push(...t) : e.effects.push(t) : wc(t)
}
const ct = Symbol.for("v-fgt"),
    dr = Symbol.for("v-txt"),
    Ze = Symbol.for("v-cmt"),
    Fi = Symbol.for("v-stc"),
    oi = [];
let gt = null;

function Bn(t = !1) {
    oi.push(gt = t ? null : [])
}

function hf() {
    oi.pop(), gt = oi[oi.length - 1] || null
}
let gi = 1;

function zi(t, e = !1) {
    gi += t, t < 0 && gt && e && (gt.hasOnce = !0)
}

function wl(t) {
    return t.dynamicChildren = gi > 0 ? gt || Rn : null, hf(), gi > 0 && gt && gt.push(t), t
}

function pf(t, e, n, i, r, s) {
    return wl(Sl(t, e, n, i, r, s, !0))
}

function mi(t, e, n, i, r) {
    return wl(Ue(t, e, n, i, r, !0))
}

function vi(t) {
    return t ? t.__v_isVNode === !0 : !1
}

function bn(t, e) {
    return t.type === e.type && t.key === e.key
}
const bl = ({
        key: t
    }) => t ? ? null,
    $i = ({
        ref: t,
        ref_key: e,
        ref_for: n
    }) => (typeof t == "number" && (t = "" + t), t != null ? De(t) || Re(t) || ce(t) ? {
        i: Xe,
        r: t,
        k: e,
        f: !!n
    } : t : null);

function Sl(t, e = null, n = null, i = 0, r = null, s = t === ct ? 0 : 1, o = !1, a = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t,
        props: e,
        key: e && bl(e),
        ref: e && $i(e),
        scopeId: $a,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: i,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: Xe
    };
    return a ? (Ps(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= De(n) ? 8 : 16), gi > 0 && !o && gt && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && gt.push(l), l
}
const Ue = gf;

function gf(t, e = null, n = null, i = 0, r = null, s = !1) {
    if ((!t || t === Ya) && (t = Ze), vi(t)) {
        const a = an(t, e, !0);
        return n && Ps(a, n), gi > 0 && !s && gt && (a.shapeFlag & 6 ? gt[gt.indexOf(t)] = a : gt.push(a)), a.patchFlag = -2, a
    }
    if (If(t) && (t = t.__vccOpts), e) {
        e = mf(e);
        let {
            class: a,
            style: l
        } = e;
        a && !De(a) && (e.class = hs(a)), _e(l) && (ur(l) && !ue(l) && (l = He({}, l)), e.style = ds(l))
    }
    const o = De(t) ? 1 : yl(t) ? 128 : Ua(t) ? 64 : _e(t) ? 4 : ce(t) ? 2 : 0;
    return Sl(t, e, n, i, r, o, s, !0)
}

function mf(t) {
    return t ? ur(t) || ul(t) ? He({}, t) : t : null
}

function an(t, e, n = !1, i = !1) {
    const {
        props: r,
        ref: s,
        patchFlag: o,
        children: a,
        transition: l
    } = t, u = e ? bf(r || {}, e) : r, c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: u,
        key: u && bl(u),
        ref: e && e.ref ? n && s ? ue(s) ? s.concat($i(e)) : [s, $i(e)] : $i(e) : s,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: a,
        target: t.target,
        targetStart: t.targetStart,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== ct ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: t.dynamicProps,
        dynamicChildren: t.dynamicChildren,
        appContext: t.appContext,
        dirs: t.dirs,
        transition: l,
        component: t.component,
        suspense: t.suspense,
        ssContent: t.ssContent && an(t.ssContent),
        ssFallback: t.ssFallback && an(t.ssFallback),
        placeholder: t.placeholder,
        el: t.el,
        anchor: t.anchor,
        ctx: t.ctx,
        ce: t.ce
    };
    return l && i && kn(c, l.clone(c)), c
}

function vf(t = " ", e = 0) {
    return Ue(dr, null, t, e)
}

function yf(t, e) {
    const n = Ue(Fi, null, t);
    return n.staticCount = e, n
}

function wf(t = "", e = !1) {
    return e ? (Bn(), mi(Ze, null, t)) : Ue(Ze, null, t)
}

function Mt(t) {
    return t == null || typeof t == "boolean" ? Ue(Ze) : ue(t) ? Ue(ct, null, t.slice()) : vi(t) ? Wt(t) : Ue(dr, null, String(t))
}

function Wt(t) {
    return t.el === null && t.patchFlag !== -1 || t.memo ? t : an(t)
}

function Ps(t, e) {
    let n = 0;
    const {
        shapeFlag: i
    } = t;
    if (e == null) e = null;
    else if (ue(e)) n = 16;
    else if (typeof e == "object")
        if (i & 65) {
            const r = e.default;
            r && (r._c && (r._d = !1), Ps(t, r()), r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = e._;
            !r && !ul(e) ? e._ctx = Xe : r === 3 && Xe && (Xe.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024))
        }
    else ce(e) ? (e = {
        default: e,
        _ctx: Xe
    }, n = 32) : (e = String(e), i & 64 ? (n = 16, e = [vf(e)]) : n = 8);
    t.children = e, t.shapeFlag |= n
}

function bf(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
        const i = t[n];
        for (const r in i)
            if (r === "class") e.class !== i.class && (e.class = hs([e.class, i.class]));
            else if (r === "style") e.style = ds([e.style, i.style]);
        else if (nr(r)) {
            const s = e[r],
                o = i[r];
            o && s !== o && !(ue(s) && s.includes(o)) && (e[r] = s ? [].concat(s, o) : o)
        } else r !== "" && (e[r] = i[r])
    }
    return e
}

function At(t, e, n, i = null) {
    It(t, e, 7, [n, i])
}
const Sf = rl();
let xf = 0;

function Tf(t, e, n) {
    const i = t.type,
        r = (e ? e.appContext : t.appContext) || Sf,
        s = {
            uid: xf++,
            vnode: t,
            type: i,
            parent: e,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new pa(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: e ? e.provides : Object.create(r.provides),
            ids: e ? e.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: fl(i, r),
            emitsOptions: sl(i, r),
            emit: null,
            emitted: null,
            propsDefaults: Ie,
            inheritAttrs: i.inheritAttrs,
            ctx: Ie,
            data: Ie,
            props: Ie,
            attrs: Ie,
            slots: Ie,
            refs: Ie,
            setupState: Ie,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return s.ctx = {
        _: s
    }, s.root = e ? e.root : s, s.emit = Jc.bind(null, s), t.ce && t.ce(s), s
}
let Ke = null;
const Vn = () => Ke || Xe;
let Ki, zr; {
    const t = or(),
        e = (n, i) => {
            let r;
            return (r = t[n]) || (r = t[n] = []), r.push(i), s => {
                r.length > 1 ? r.forEach(o => o(s)) : r[0](s)
            }
        };
    Ki = e("__VUE_INSTANCE_SETTERS__", n => Ke = n), zr = e("__VUE_SSR_SETTERS__", n => Hn = n)
}
const _i = t => {
        const e = Ke;
        return Ki(t), t.scope.on(), () => {
            t.scope.off(), Ki(e)
        }
    },
    eo = () => {
        Ke && Ke.scope.off(), Ki(null)
    };

function xl(t) {
    return t.vnode.shapeFlag & 4
}
let Hn = !1;

function kf(t, e = !1, n = !1) {
    e && zr(e);
    const {
        props: i,
        children: r
    } = t.vnode, s = xl(t);
    tf(t, i, s, e), of (t, r, n || e);
    const o = s ? _f(t, e) : void 0;
    return e && zr(!1), o
}

function _f(t, e) {
    const n = t.type;
    t.accessCache = Object.create(null), t.proxy = new Proxy(t.ctx, Hc);
    const {
        setup: i
    } = n;
    if (i) {
        zt();
        const r = t.setupContext = i.length > 1 ? kl(t) : null,
            s = _i(t),
            o = xi(i, t, 0, [t.props, r]),
            a = aa(o);
        if (Kt(), s(), (a || t.sp) && !Nn(t) && Es(t), a) {
            if (o.then(eo, eo), e) return o.then(l => {
                to(t, l)
            }).catch(l => {
                Ti(l, t, 0)
            });
            t.asyncDep = o
        } else to(t, o)
    } else Tl(t)
}

function to(t, e, n) {
    ce(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : _e(e) && (t.setupState = Pa(e)), Tl(t)
}

function Tl(t, e, n) {
    const i = t.type;
    t.render || (t.render = i.render || $t); {
        const r = _i(t);
        zt();
        try {
            Wc(t)
        } finally {
            Kt(), r()
        }
    }
}
const Cf = {
    get(t, e) {
        return Ye(t, "get", ""), t[e]
    }
};

function kl(t) {
    const e = n => {
        t.exposed = n || {}
    };
    return {
        attrs: new Proxy(t.attrs, Cf),
        slots: t.slots,
        emit: t.emit,
        expose: e
    }
}

function hr(t) {
    return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Pa(Ss(t.exposed)), {
        get(e, n) {
            if (n in e) return e[n];
            if (n in si) return si[n](t)
        },
        has(e, n) {
            return n in e || n in si
        }
    })) : t.proxy
}

function Ef(t, e = !0) {
    return ce(t) ? t.displayName || t.name : t.name || e && t.__name
}

function If(t) {
    return ce(t) && "__vccOpts" in t
}
const ee = (t, e) => pc(t, e, Hn);

function _l(t, e, n) {
    try {
        zi(-1);
        const i = arguments.length;
        return i === 2 ? _e(e) && !ue(e) ? vi(e) ? Ue(t, null, [e]) : Ue(t, e) : Ue(t, null, e) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && vi(n) && (n = [n]), Ue(t, e, n))
    } finally {
        zi(1)
    }
}
const Af = "3.5.29";
/**
 * @vue/runtime-dom v3.5.29
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Kr;
const no = typeof window < "u" && window.trustedTypes;
if (no) try {
    Kr = no.createPolicy("vue", {
        createHTML: t => t
    })
} catch {}
const Cl = Kr ? t => Kr.createHTML(t) : t => t,
    Of = "http://www.w3.org/2000/svg",
    Lf = "http://www.w3.org/1998/Math/MathML",
    Ht = typeof document < "u" ? document : null,
    io = Ht && Ht.createElement("template"),
    Pf = {
        insert: (t, e, n) => {
            e.insertBefore(t, n || null)
        },
        remove: t => {
            const e = t.parentNode;
            e && e.removeChild(t)
        },
        createElement: (t, e, n, i) => {
            const r = e === "svg" ? Ht.createElementNS(Of, t) : e === "mathml" ? Ht.createElementNS(Lf, t) : n ? Ht.createElement(t, {
                is: n
            }) : Ht.createElement(t);
            return t === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r
        },
        createText: t => Ht.createTextNode(t),
        createComment: t => Ht.createComment(t),
        setText: (t, e) => {
            t.nodeValue = e
        },
        setElementText: (t, e) => {
            t.textContent = e
        },
        parentNode: t => t.parentNode,
        nextSibling: t => t.nextSibling,
        querySelector: t => Ht.querySelector(t),
        setScopeId(t, e) {
            t.setAttribute(e, "")
        },
        insertStaticContent(t, e, n, i, r, s) {
            const o = n ? n.previousSibling : e.lastChild;
            if (r && (r === s || r.nextSibling))
                for (; e.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)););
            else {
                io.innerHTML = Cl(i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t);
                const a = io.content;
                if (i === "svg" || i === "mathml") {
                    const l = a.firstChild;
                    for (; l.firstChild;) a.appendChild(l.firstChild);
                    a.removeChild(l)
                }
                e.insertBefore(a, n)
            }
            return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
        }
    },
    Qt = "transition",
    Xn = "animation",
    Wn = Symbol("_vtc"),
    El = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    Il = He({}, Va, El),
    Rf = t => (t.displayName = "Transition", t.props = Il, t),
    Df = Rf((t, {
        slots: e
    }) => _l(Ec, Al(t), e)),
    mn = (t, e = []) => {
        ue(t) ? t.forEach(n => n(...e)) : t && t(...e)
    },
    ro = t => t ? ue(t) ? t.some(e => e.length > 1) : t.length > 1 : !1;

function Al(t) {
    const e = {};
    for (const E in t) E in El || (e[E] = t[E]);
    if (t.css === !1) return e;
    const {
        name: n = "v",
        type: i,
        duration: r,
        enterFromClass: s = `${n}-enter-from`,
        enterActiveClass: o = `${n}-enter-active`,
        enterToClass: a = `${n}-enter-to`,
        appearFromClass: l = s,
        appearActiveClass: u = o,
        appearToClass: c = a,
        leaveFromClass: f = `${n}-leave-from`,
        leaveActiveClass: p = `${n}-leave-active`,
        leaveToClass: h = `${n}-leave-to`
    } = t, d = Mf(r), g = d && d[0], w = d && d[1], {
        onBeforeEnter: x,
        onEnter: R,
        onEnterCancelled: L,
        onLeave: O,
        onLeaveCancelled: W,
        onBeforeAppear: C = x,
        onAppear: M = R,
        onAppearCancelled: D = L
    } = e, v = (E, S, N, J) => {
        E._enterCancelled = J, Yt(E, S ? c : a), Yt(E, S ? u : o), N && N()
    }, k = (E, S) => {
        E._isLeaving = !1, Yt(E, f), Yt(E, h), Yt(E, p), S && S()
    }, I = E => (S, N) => {
        const J = E ? M : R,
            Y = () => v(S, E, N);
        mn(J, [S, Y]), so(() => {
            Yt(S, E ? l : s), Lt(S, E ? c : a), ro(J) || oo(S, i, g, Y)
        })
    };
    return He(e, {
        onBeforeEnter(E) {
            mn(x, [E]), Lt(E, s), Lt(E, o)
        },
        onBeforeAppear(E) {
            mn(C, [E]), Lt(E, l), Lt(E, u)
        },
        onEnter: I(!1),
        onAppear: I(!0),
        onLeave(E, S) {
            E._isLeaving = !0;
            const N = () => k(E, S);
            Lt(E, f), E._enterCancelled ? (Lt(E, p), Xr(E)) : (Xr(E), Lt(E, p)), so(() => {
                E._isLeaving && (Yt(E, f), Lt(E, h), ro(O) || oo(E, i, w, N))
            }), mn(O, [E, N])
        },
        onEnterCancelled(E) {
            v(E, !1, void 0, !0), mn(L, [E])
        },
        onAppearCancelled(E) {
            v(E, !0, void 0, !0), mn(D, [E])
        },
        onLeaveCancelled(E) {
            k(E), mn(W, [E])
        }
    })
}

function Mf(t) {
    if (t == null) return null;
    if (_e(t)) return [kr(t.enter), kr(t.leave)]; {
        const e = kr(t);
        return [e, e]
    }
}

function kr(t) {
    return Lu(t)
}

function Lt(t, e) {
    e.split(/\s+/).forEach(n => n && t.classList.add(n)), (t[Wn] || (t[Wn] = new Set)).add(e)
}

function Yt(t, e) {
    e.split(/\s+/).forEach(i => i && t.classList.remove(i));
    const n = t[Wn];
    n && (n.delete(e), n.size || (t[Wn] = void 0))
}

function so(t) {
    requestAnimationFrame(() => {
        requestAnimationFrame(t)
    })
}
let Nf = 0;

function oo(t, e, n, i) {
    const r = t._endId = ++Nf,
        s = () => {
            r === t._endId && i()
        };
    if (n != null) return setTimeout(s, n);
    const {
        type: o,
        timeout: a,
        propCount: l
    } = Ol(t, e);
    if (!o) return i();
    const u = o + "end";
    let c = 0;
    const f = () => {
            t.removeEventListener(u, p), s()
        },
        p = h => {
            h.target === t && ++c >= l && f()
        };
    setTimeout(() => {
        c < l && f()
    }, a + 1), t.addEventListener(u, p)
}

function Ol(t, e) {
    const n = window.getComputedStyle(t),
        i = d => (n[d] || "").split(", "),
        r = i(`${Qt}Delay`),
        s = i(`${Qt}Duration`),
        o = ao(r, s),
        a = i(`${Xn}Delay`),
        l = i(`${Xn}Duration`),
        u = ao(a, l);
    let c = null,
        f = 0,
        p = 0;
    e === Qt ? o > 0 && (c = Qt, f = o, p = s.length) : e === Xn ? u > 0 && (c = Xn, f = u, p = l.length) : (f = Math.max(o, u), c = f > 0 ? o > u ? Qt : Xn : null, p = c ? c === Qt ? s.length : l.length : 0);
    const h = c === Qt && /\b(?:transform|all)(?:,|$)/.test(i(`${Qt}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: p,
        hasTransform: h
    }
}

function ao(t, e) {
    for (; t.length < e.length;) t = t.concat(t);
    return Math.max(...e.map((n, i) => lo(n) + lo(t[i])))
}

function lo(t) {
    return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3
}

function Xr(t) {
    return (t ? t.ownerDocument : document).body.offsetHeight
}

function Ff(t, e, n) {
    const i = t[Wn];
    i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}
const Xi = Symbol("_vod"),
    Ll = Symbol("_vsh"),
    Fp = {
        name: "show",
        beforeMount(t, {
            value: e
        }, {
            transition: n
        }) {
            t[Xi] = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : Jn(t, e)
        },
        mounted(t, {
            value: e
        }, {
            transition: n
        }) {
            n && e && n.enter(t)
        },
        updated(t, {
            value: e,
            oldValue: n
        }, {
            transition: i
        }) {
            !e != !n && (i ? e ? (i.beforeEnter(t), Jn(t, !0), i.enter(t)) : i.leave(t, () => {
                Jn(t, !1)
            }) : Jn(t, e))
        },
        beforeUnmount(t, {
            value: e
        }) {
            Jn(t, e)
        }
    };

function Jn(t, e) {
    t.style.display = e ? t[Xi] : "none", t[Ll] = !e
}
const $f = Symbol(""),
    Bf = /(?:^|;)\s*display\s*:/;

function Hf(t, e, n) {
    const i = t.style,
        r = De(n);
    let s = !1;
    if (n && !r) {
        if (e)
            if (De(e))
                for (const o of e.split(";")) {
                    const a = o.slice(0, o.indexOf(":")).trim();
                    n[a] == null && Bi(i, a, "")
                } else
                    for (const o in e) n[o] == null && Bi(i, o, "");
        for (const o in n) o === "display" && (s = !0), Bi(i, o, n[o])
    } else if (r) {
        if (e !== n) {
            const o = i[$f];
            o && (n += ";" + o), i.cssText = n, s = Bf.test(n)
        }
    } else e && t.removeAttribute("style");
    Xi in t && (t[Xi] = s ? i.display : "", t[Ll] && (i.display = "none"))
}
const uo = /\s*!important$/;

function Bi(t, e, n) {
    if (ue(n)) n.forEach(i => Bi(t, e, i));
    else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
    else {
        const i = Wf(t, e);
        uo.test(n) ? t.setProperty(cn(i), n.replace(uo, ""), "important") : t[i] = n
    }
}
const co = ["Webkit", "Moz", "ms"],
    _r = {};

function Wf(t, e) {
    const n = _r[e];
    if (n) return n;
    let i = wt(e);
    if (i !== "filter" && i in t) return _r[e] = i;
    i = sr(i);
    for (let r = 0; r < co.length; r++) {
        const s = co[r] + i;
        if (s in t) return _r[e] = s
    }
    return e
}
const fo = "http://www.w3.org/1999/xlink";

function ho(t, e, n, i, r, s = Fu(e)) {
    i && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(fo, e.slice(6, e.length)) : t.setAttributeNS(fo, e, n) : n == null || s && !fa(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : Ct(n) ? String(n) : n)
}

function po(t, e, n, i, r) {
    if (e === "innerHTML" || e === "textContent") {
        n != null && (t[e] = e === "innerHTML" ? Cl(n) : n);
        return
    }
    const s = t.tagName;
    if (e === "value" && s !== "PROGRESS" && !s.includes("-")) {
        const a = s === "OPTION" ? t.getAttribute("value") || "" : t.value,
            l = n == null ? t.type === "checkbox" ? "on" : "" : String(n);
        (a !== l || !("_value" in t)) && (t.value = l), n == null && t.removeAttribute(e), t._value = n;
        return
    }
    let o = !1;
    if (n === "" || n == null) {
        const a = typeof t[e];
        a === "boolean" ? n = fa(n) : n == null && a === "string" ? (n = "", o = !0) : a === "number" && (n = 0, o = !0)
    }
    try {
        t[e] = n
    } catch {}
    o && t.removeAttribute(r || e)
}

function Ln(t, e, n, i) {
    t.addEventListener(e, n, i)
}

function Uf(t, e, n, i) {
    t.removeEventListener(e, n, i)
}
const go = Symbol("_vei");

function jf(t, e, n, i, r = null) {
    const s = t[go] || (t[go] = {}),
        o = s[e];
    if (i && o) o.value = i;
    else {
        const [a, l] = Vf(e);
        if (i) {
            const u = s[e] = Kf(i, r);
            Ln(t, a, u, l)
        } else o && (Uf(t, a, o, l), s[e] = void 0)
    }
}
const mo = /(?:Once|Passive|Capture)$/;

function Vf(t) {
    let e;
    if (mo.test(t)) {
        e = {};
        let i;
        for (; i = t.match(mo);) t = t.slice(0, t.length - i[0].length), e[i[0].toLowerCase()] = !0
    }
    return [t[2] === ":" ? t.slice(3) : cn(t.slice(2)), e]
}
let Cr = 0;
const qf = Promise.resolve(),
    zf = () => Cr || (qf.then(() => Cr = 0), Cr = Date.now());

function Kf(t, e) {
    const n = i => {
        if (!i._vts) i._vts = Date.now();
        else if (i._vts <= n.attached) return;
        It(Xf(i, n.value), e, 5, [i])
    };
    return n.value = t, n.attached = zf(), n
}

function Xf(t, e) {
    if (ue(e)) {
        const n = t.stopImmediatePropagation;
        return t.stopImmediatePropagation = () => {
            n.call(t), t._stopped = !0
        }, e.map(i => r => !r._stopped && i && i(r))
    } else return e
}
const vo = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
    Jf = (t, e, n, i, r, s) => {
        const o = r === "svg";
        e === "class" ? Ff(t, i, o) : e === "style" ? Hf(t, n, i) : nr(e) ? us(e) || jf(t, e, n, i, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Gf(t, e, i, o)) ? (po(t, e, i), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && ho(t, e, i, o, s, e !== "value")) : t._isVueCE && (/[A-Z]/.test(e) || !De(i)) ? po(t, wt(e), i, s, e) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), ho(t, e, i, o))
    };

function Gf(t, e, n, i) {
    if (i) return !!(e === "innerHTML" || e === "textContent" || e in t && vo(e) && ce(n));
    if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA") return !1;
    if (e === "width" || e === "height") {
        const r = t.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return !1
    }
    return vo(e) && De(n) ? !1 : e in t
}
const Pl = new WeakMap,
    Rl = new WeakMap,
    Ji = Symbol("_moveCb"),
    yo = Symbol("_enterCb"),
    Qf = t => (delete t.props.mode, t),
    Yf = Qf({
        name: "TransitionGroup",
        props: He({}, Il, {
            tag: String,
            moveClass: String
        }),
        setup(t, {
            slots: e
        }) {
            const n = Vn(),
                i = ja();
            let r, s;
            return Ja(() => {
                if (!r.length) return;
                const o = t.moveClass || `${t.name||"v"}-move`;
                if (!nd(r[0].el, n.vnode.el, o)) {
                    r = [];
                    return
                }
                r.forEach(Zf), r.forEach(ed);
                const a = r.filter(td);
                Xr(n.vnode.el), a.forEach(l => {
                    const u = l.el,
                        c = u.style;
                    Lt(u, o), c.transform = c.webkitTransform = c.transitionDuration = "";
                    const f = u[Ji] = p => {
                        p && p.target !== u || (!p || p.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[Ji] = null, Yt(u, o))
                    };
                    u.addEventListener("transitionend", f)
                }), r = []
            }), () => {
                const o = xe(t),
                    a = Al(o);
                let l = o.tag || ct;
                if (r = [], s)
                    for (let u = 0; u < s.length; u++) {
                        const c = s[u];
                        c.el && c.el instanceof Element && (r.push(c), kn(c, pi(c, a, i, n)), Pl.set(c, Dl(c.el)))
                    }
                s = e.default ? _s(e.default()) : [];
                for (let u = 0; u < s.length; u++) {
                    const c = s[u];
                    c.key != null && kn(c, pi(c, a, i, n))
                }
                return Ue(l, null, s)
            }
        }
    }),
    $p = Yf;

function Zf(t) {
    const e = t.el;
    e[Ji] && e[Ji](), e[yo] && e[yo]()
}

function ed(t) {
    Rl.set(t, Dl(t.el))
}

function td(t) {
    const e = Pl.get(t),
        n = Rl.get(t),
        i = e.left - n.left,
        r = e.top - n.top;
    if (i || r) {
        const s = t.el,
            o = s.style,
            a = s.getBoundingClientRect();
        let l = 1,
            u = 1;
        return s.offsetWidth && (l = a.width / s.offsetWidth), s.offsetHeight && (u = a.height / s.offsetHeight), (!Number.isFinite(l) || l === 0) && (l = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(l - 1) < .01 && (l = 1), Math.abs(u - 1) < .01 && (u = 1), o.transform = o.webkitTransform = `translate(${i/l}px,${r/u}px)`, o.transitionDuration = "0s", t
    }
}

function Dl(t) {
    const e = t.getBoundingClientRect();
    return {
        left: e.left,
        top: e.top
    }
}

function nd(t, e, n) {
    const i = t.cloneNode(),
        r = t[Wn];
    r && r.forEach(a => {
        a.split(/\s+/).forEach(l => l && i.classList.remove(l))
    }), n.split(/\s+/).forEach(a => a && i.classList.add(a)), i.style.display = "none";
    const s = e.nodeType === 1 ? e : e.parentNode;
    s.appendChild(i);
    const {
        hasTransform: o
    } = Ol(i);
    return s.removeChild(i), o
}
const wo = t => {
    const e = t.props["onUpdate:modelValue"] || !1;
    return ue(e) ? n => Ni(e, n) : e
};

function id(t) {
    t.target.composing = !0
}

function bo(t) {
    const e = t.target;
    e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
}
const Er = Symbol("_assign");

function So(t, e, n) {
    return e && (t = t.trim()), n && (t = fs(t)), t
}
const Bp = {
        created(t, {
            modifiers: {
                lazy: e,
                trim: n,
                number: i
            }
        }, r) {
            t[Er] = wo(r);
            const s = i || r.props && r.props.type === "number";
            Ln(t, e ? "change" : "input", o => {
                o.target.composing || t[Er](So(t.value, n, s))
            }), (n || s) && Ln(t, "change", () => {
                t.value = So(t.value, n, s)
            }), e || (Ln(t, "compositionstart", id), Ln(t, "compositionend", bo), Ln(t, "change", bo))
        },
        mounted(t, {
            value: e
        }) {
            t.value = e ? ? ""
        },
        beforeUpdate(t, {
            value: e,
            oldValue: n,
            modifiers: {
                lazy: i,
                trim: r,
                number: s
            }
        }, o) {
            if (t[Er] = wo(o), t.composing) return;
            const a = (s || t.type === "number") && !/^0\d/.test(t.value) ? fs(t.value) : t.value,
                l = e ? ? "";
            a !== l && (document.activeElement === t && t.type !== "range" && (i && e === n || r && t.value.trim() === l) || (t.value = l))
        }
    },
    rd = ["ctrl", "shift", "alt", "meta"],
    sd = {
        stop: t => t.stopPropagation(),
        prevent: t => t.preventDefault(),
        self: t => t.target !== t.currentTarget,
        ctrl: t => !t.ctrlKey,
        shift: t => !t.shiftKey,
        alt: t => !t.altKey,
        meta: t => !t.metaKey,
        left: t => "button" in t && t.button !== 0,
        middle: t => "button" in t && t.button !== 1,
        right: t => "button" in t && t.button !== 2,
        exact: (t, e) => rd.some(n => t[`${n}Key`] && !e.includes(n))
    },
    Hp = (t, e) => {
        if (!t) return t;
        const n = t._withMods || (t._withMods = {}),
            i = e.join(".");
        return n[i] || (n[i] = ((r, ...s) => {
            for (let o = 0; o < e.length; o++) {
                const a = sd[e[o]];
                if (a && a(r, e)) return
            }
            return t(r, ...s)
        }))
    },
    od = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    Wp = (t, e) => {
        const n = t._withKeys || (t._withKeys = {}),
            i = e.join(".");
        return n[i] || (n[i] = (r => {
            if (!("key" in r)) return;
            const s = cn(r.key);
            if (e.some(o => o === s || od[o] === s)) return t(r)
        }))
    },
    ad = He({
        patchProp: Jf
    }, Pf);
let xo;

function ld() {
    return xo || (xo = lf(ad))
}
const Ml = ((...t) => {
    const e = ld().createApp(...t),
        {
            mount: n
        } = e;
    return e.mount = i => {
        const r = cd(i);
        if (!r) return;
        const s = e._component;
        !ce(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
        const o = n(r, !1, ud(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o
    }, e
});

function ud(t) {
    if (t instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml"
}

function cd(t) {
    return De(t) ? document.querySelector(t) : t
}
/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Nl;
const Ci = t => Nl = t,
    Fl = Symbol();

function Jr(t) {
    return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function"
}
var ai;
(function(t) {
    t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function"
})(ai || (ai = {}));

function fd() {
    const t = ga(!0),
        e = t.run(() => _({}));
    let n = [],
        i = [];
    const r = Ss({
        install(s) {
            Ci(r), r._a = s, s.provide(Fl, r), s.config.globalProperties.$pinia = r, i.forEach(o => n.push(o)), i = []
        },
        use(s) {
            return this._a ? n.push(s) : i.push(s), this
        },
        _p: n,
        _a: null,
        _e: t,
        _s: new Map,
        state: e
    });
    return r
}
const $l = () => {};

function To(t, e, n, i = $l) {
    t.add(e);
    const r = () => {
        t.delete(e) && i()
    };
    return !n && ma() && Hu(r), r
}

function In(t, ...e) {
    t.forEach(n => {
        n(...e)
    })
}
const dd = t => t(),
    ko = Symbol(),
    Ir = Symbol();

function Gr(t, e) {
    t instanceof Map && e instanceof Map ? e.forEach((n, i) => t.set(i, n)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
    for (const n in e) {
        if (!e.hasOwnProperty(n)) continue;
        const i = e[n],
            r = t[n];
        Jr(r) && Jr(i) && t.hasOwnProperty(n) && !Re(i) && !Vt(i) ? t[n] = Gr(r, i) : t[n] = i
    }
    return t
}
const hd = Symbol();

function pd(t) {
    return !Jr(t) || !Object.prototype.hasOwnProperty.call(t, hd)
}
const {
    assign: Zt
} = Object;

function gd(t) {
    return !!(Re(t) && t.effect)
}

function md(t, e, n, i) {
    const {
        state: r,
        actions: s,
        getters: o
    } = e, a = n.state.value[t];
    let l;

    function u() {
        a || (n.state.value[t] = r ? r() : {});
        const c = cc(n.state.value[t]);
        return Zt(c, s, Object.keys(o || {}).reduce((f, p) => (f[p] = Ss(ee(() => {
            Ci(n);
            const h = n._s.get(t);
            return o[p].call(h, h)
        })), f), {}))
    }
    return l = Bl(t, u, e, n, i, !0), l
}

function Bl(t, e, n = {}, i, r, s) {
    let o;
    const a = Zt({
            actions: {}
        }, n),
        l = {
            deep: !0
        };
    let u, c, f = new Set,
        p = new Set,
        h;
    const d = i.state.value[t];
    !s && !d && (i.state.value[t] = {});
    let g;

    function w(D) {
        let v;
        u = c = !1, typeof D == "function" ? (D(i.state.value[t]), v = {
            type: ai.patchFunction,
            storeId: t,
            events: h
        }) : (Gr(i.state.value[t], D), v = {
            type: ai.patchObject,
            payload: D,
            storeId: t,
            events: h
        });
        const k = g = Symbol();
        Ts().then(() => {
            g === k && (u = !0)
        }), c = !0, In(f, v, i.state.value[t])
    }
    const x = s ? function() {
        const {
            state: v
        } = n, k = v ? v() : {};
        this.$patch(I => {
            Zt(I, k)
        })
    } : $l;

    function R() {
        o.stop(), f.clear(), p.clear(), i._s.delete(t)
    }
    const L = (D, v = "") => {
            if (ko in D) return D[Ir] = v, D;
            const k = function() {
                Ci(i);
                const I = Array.from(arguments),
                    E = new Set,
                    S = new Set;

                function N(K) {
                    E.add(K)
                }

                function J(K) {
                    S.add(K)
                }
                In(p, {
                    args: I,
                    name: k[Ir],
                    store: W,
                    after: N,
                    onError: J
                });
                let Y;
                try {
                    Y = D.apply(this && this.$id === t ? this : W, I)
                } catch (K) {
                    throw In(S, K), K
                }
                return Y instanceof Promise ? Y.then(K => (In(E, K), K)).catch(K => (In(S, K), Promise.reject(K))) : (In(E, Y), Y)
            };
            return k[ko] = !0, k[Ir] = v, k
        },
        O = {
            _p: i,
            $id: t,
            $onAction: To.bind(null, p),
            $patch: w,
            $reset: x,
            $subscribe(D, v = {}) {
                const k = To(f, D, v.detached, () => I()),
                    I = o.run(() => xt(() => i.state.value[t], E => {
                        (v.flush === "sync" ? c : u) && D({
                            storeId: t,
                            type: ai.direct,
                            events: h
                        }, E)
                    }, Zt({}, l, v)));
                return k
            },
            $dispose: R
        },
        W = lr(O);
    i._s.set(t, W);
    const M = (i._a && i._a.runWithContext || dd)(() => i._e.run(() => (o = ga()).run(() => e({
        action: L
    }))));
    for (const D in M) {
        const v = M[D];
        if (Re(v) && !gd(v) || Vt(v)) s || (d && pd(v) && (Re(v) ? v.value = d[D] : Gr(v, d[D])), i.state.value[t][D] = v);
        else if (typeof v == "function") {
            const k = L(v, D);
            M[D] = k, a.actions[D] = v
        }
    }
    return Zt(W, M), Zt(xe(W), M), Object.defineProperty(W, "$state", {
        get: () => i.state.value[t],
        set: D => {
            w(v => {
                Zt(v, D)
            })
        }
    }), i._p.forEach(D => {
        Zt(W, o.run(() => D({
            store: W,
            app: i._a,
            pinia: i,
            options: a
        })))
    }), d && s && n.hydrate && n.hydrate(W.$state, d), u = !0, c = !0, W
} /*! #__NO_SIDE_EFFECTS__ */
function vt(t, e, n) {
    let i;
    const r = typeof e == "function";
    i = r ? n : e;

    function s(o, a) {
        const l = Sc();
        return o = o || (l ? Nt(Fl, null) : null), o && Ci(o), o = Nl, o._s.has(t) || (r ? Bl(t, e, i, o) : md(t, i, o)), o._s.get(t)
    }
    return s.$id = t, s
}
const We = vt("property", () => {
        const t = _(null),
            e = _(""),
            n = _(!1);

        function i(o) {
            t.value = o
        }

        function r(o) {
            n.value = o
        }

        function s() {
            t.value = null, e.value = "", n.value = !1
        }
        return {
            id: t,
            pageName: e,
            isTawkHostedPage: n,
            updateId: i,
            updateIsTawkHostedPage: r,
            resetState: s
        }
    }),
    _o = ac(null),
    Tt = {
        i18n(t, e, n) {
            var s;
            let i = {};
            t && (e = `${t}.${e}`), n && (i = { ...i,
                ...n
            });
            const r = ((s = globalThis.$_Tawk) == null ? void 0 : s.i18next) ? ? _o.value;
            return typeof r != "function" ? "" : r(e, i)
        },
        setTranslator(t) {
            _o.value = t
        },
        install(t) {
            t && t.provide("i18n", Tt.i18n)
        }
    },
    Gi = {
        isGeneratedName(t) {
            return /^V[0-9]{16}$/.test(t)
        },
        parseVisitorName(t) {
            return this.isGeneratedName(t) ? Tt.i18n("chat", "default_name") || "You" : t
        },
        formatVisitorLoginData(t) {
            const e = {};
            return Object.keys(t).forEach(n => {
                if (n === "hash" || n === "userId" || n === "name" || n === "email" || n === "phone") {
                    e[n] = t[n];
                    return
                }
                e.attributes === void 0 && (e.attributes = {}), e.attributes[n] = t[n]
            }), e
        }
    },
    Qr = "&",
    Hl = '"',
    Wl = "'",
    Ul = "<",
    jl = ">",
    Yr = "©",
    Zr = "®",
    es = "™",
    Vl = "&quot;",
    ql = "&#39;",
    zl = "&lt;",
    Kl = "&gt;",
    Xl = "&amp;",
    Jl = "&copy;",
    Gl = "&reg;",
    Ql = "&trade;",
    vd = new RegExp(Qr, "g"),
    yd = new RegExp(Hl, "g"),
    wd = new RegExp(Wl, "g"),
    bd = new RegExp(Ul, "g"),
    Sd = new RegExp(jl, "g"),
    xd = new RegExp(Yr, "gm"),
    Td = new RegExp(Zr, "gm"),
    kd = new RegExp(es, "gm"),
    _d = new RegExp(Vl, "g"),
    Cd = new RegExp(ql, "g"),
    Ed = new RegExp(zl, "g"),
    Id = new RegExp(Kl, "g"),
    Co = new RegExp(Xl, "g"),
    Eo = new RegExp(Jl, "g"),
    Io = new RegExp(Gl, "g"),
    Ao = new RegExp(Ql, "g"),
    be = {
        regTrim: /^\s+|\s+$/g,
        rawEncode(t) {
            return t && t.replace(vd, Xl).replace(yd, Vl).replace(wd, ql).replace(bd, zl).replace(Sd, Kl).replace(xd, Jl).replace(Td, Gl).replace(kd, Ql)
        },
        rawDecode(t) {
            return t && t.replace(_d, Hl).replace(Cd, Wl).replace(Ed, Ul).replace(Id, jl).replace(Co, Qr).replace(Eo, Yr).replace(Io, Zr).replace(Ao, es)
        },
        rawDecodeHTMLSymbols(t) {
            return t && t.replace(Co, Qr).replace(Eo, Yr).replace(Io, Zr).replace(Ao, es)
        },
        h(t) {
            let e = 0;
            if (t.length === 0) return e;
            for (let n = 0; n < t.length; n++) {
                const i = t.charCodeAt(n);
                e = (e << 5) - e + i, e = e & e
            }
            return e
        },
        isString(t) {
            return !(t === void 0 || typeof t != "string")
        },
        hasPunctuation(t) {
            return t.match(/(?![\u0600-\u06FF\u0750-\u077F\u0590-\u05FF\u0900-\u097F\u4E00-\u9FFF\uAC00-\uD7AF\u3040-\u309F\u30A0-\u30FF\u1100-\u11FF\u3130-\u318F\uA000-\uA48F\u2800-\u28FF])[^\w\s/-]+$/g)
        },
        trim(t) {
            return this.isString(t) ? String.prototype.trim ? t.trim().toString() : t.replace(this.regTrim, "") : null
        },
        toLinkable(t) {
            const e = /\[([^)]+)\]/,
                n = /\(([^)]+)\)/,
                i = /\[[^\]\\(\\)]+\]\((\bhttp:\/\/\b|\bhttps:\/\/\b|\bmailto:\b|\btel:\+{0,1}\b){1}[^\]\\(\\)]+\)/i;
            let r = "_blank",
                s = t,
                o, a, l;
            for (;
                (o = i.exec(s)) !== null;)
                if (a = e.exec(o[0]), l = n.exec(o[0]), l[0].indexOf("(mailto:") || (r = "_top"), s = s.replace(a[0] + l[0], '<a target="' + r + '" href="' + l[1] + '" class="link">' + a[1] + "</a>"), s === t) return s;
            return s
        },
        markdownToHtml(t) {
            return t = this.rawEncode(t), t = this.toLinkable(t), t = t.replace(/(?!<a[^>]*>[^<])_(.*?)_(?![^<]*<\/a>)/gim, "<i>$1</i>"), t = t.replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>").replace(/\*(.*?)\*/gim, "<b>$1</b>"), t
        },
        removeHTMLTags(t) {
            return !t || t.length === 0 ? t : t.replace(/<br\/>|<br>/g, " ")
        },
        removeAnchorTags(t) {
            return t.replace(/<a\b[^>]*>([^<]+)<\/a>/gi, "$1")
        },
        cleanupCssValue(t) {
            return this.isString(t) ? t.replace(/(!important)|(;)/g, "") : t
        },
        parseQueryString(t) {
            const e = {};
            let n;
            t ? n = t.replace(/(.*)\?/, "") : n = window.location.search.substring(1);
            const i = n.split("&");
            for (let r = 0, s = i.length; r < s; r += 1) {
                const o = i[r].split("=");
                e[o[0]] = o[1]
            }
            return e
        },
        hasMarkdown(t) {
            const e = /\[.*?]\(https?:\/\/.*?\)/.test(t),
                n = /\*\*.*?\*\*/.test(t),
                i = /_.*?_/.test(t),
                r = /`.*?`/.test(t);
            return e || n || i || r
        }
    },
    Ar = 2147483647,
    Zn = 36,
    Yl = 1,
    Or = 26,
    Ad = 38,
    Od = 700,
    Ld = 72,
    Pd = 128,
    Rd = "-",
    Dd = /[^\x20-\x7E]/,
    Md = /[\x2E\u3002\uFF0E\uFF61]/g,
    Nd = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
    },
    Lr = Zn - Yl,
    An = Math.floor,
    Pr = String.fromCharCode,
    Fd = {
        error(t) {
            throw new RangeError(Nd[t])
        },
        map(t, e) {
            let n = t.length;
            const i = [];
            for (; n--;) i[n] = e(t[n]);
            return i
        },
        mapDomain(t, e) {
            const n = t.split("@");
            let i = "";
            n.length > 1 && (i = n[0] + "@", t = n[1]), t = t.replace(Md, ".");
            const s = t.split(".").map(e).join(".");
            return i + s
        },
        ucs2decode(t) {
            const e = [];
            let n = 0;
            const i = t.length;
            for (; n < i;) {
                const r = t.charCodeAt(n++);
                if (r >= 55296 && r <= 56319 && n < i) {
                    const s = t.charCodeAt(n++);
                    (s & 64512) == 56320 ? e.push(((r & 1023) << 10) + (s & 1023) + 65536) : (e.push(r), n--)
                } else e.push(r)
            }
            return e
        },
        digitToBasic(t, e) {
            return t + 22 + 75 * (t < 26 ? 1 : 0) - ((e != 0 ? 1 : 0) << 5)
        },
        adapt(t, e, n) {
            let i = 0;
            for (t = n ? An(t / Od) : t >> 1, t += An(t / e); t > Lr * Or >> 1; i += Zn) t = An(t / Lr);
            return An(i + (Lr + 1) * t / (t + Ad))
        },
        encode(t) {
            let e, n, i, r, s, o, a, l, u, c, f;
            const p = [];
            let h, d, g;
            const w = this.ucs2decode(t),
                x = w.length;
            for (e = Pd, n = 0, s = Ld, o = 0; o < x; ++o) f = w[o], f < 128 && p.push(Pr(f));
            for (i = r = p.length, r && p.push(Rd); i < x;) {
                for (a = Ar, o = 0; o < x; ++o) f = w[o], f >= e && f < a && (a = f);
                for (h = i + 1, a - e > An((Ar - n) / h) && this.error("overflow"), n += (a - e) * h, e = a, o = 0; o < x; ++o)
                    if (f = w[o], f < e && ++n > Ar && this.error("overflow"), f == e) {
                        for (l = n, u = Zn; u <= s ? c = Yl : u >= s + Or ? c = Or : c = u - s, !(l < c); u += Zn) g = l - c, d = Zn - c, p.push(Pr(this.digitToBasic(c + g % d, 0))), l = An(g / d);
                        p.push(Pr(this.digitToBasic(l, 0))), s = this.adapt(n, h, i == r), n = 0, ++i
                    }++n, ++e
            }
            return p.join("")
        },
        toASCII(t) {
            return this.mapDomain(t, e => Dd.test(e) ? "xn--" + this.encode(e) : e)
        }
    };
var Qi = function() {
    return Qi = Object.assign || function(t) {
        for (var e, n = 1, i = arguments.length; n < i; n++)
            for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t
    }, Qi.apply(this, arguments)
};

function nn(t, e, n, i) {
    return new(n || (n = Promise))(function(r, s) {
        function o(u) {
            try {
                l(i.next(u))
            } catch (c) {
                s(c)
            }
        }

        function a(u) {
            try {
                l(i.throw(u))
            } catch (c) {
                s(c)
            }
        }

        function l(u) {
            var c;
            u.done ? r(u.value) : (c = u.value, c instanceof n ? c : new n(function(f) {
                f(c)
            })).then(o, a)
        }
        l((i = i.apply(t, [])).next())
    })
}

function rn(t, e) {
    var n, i, r, s = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        },
        o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return o.next = a(0), o.throw = a(1), o.return = a(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }), o;

    function a(l) {
        return function(u) {
            return (function(c) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; o && (o = 0, c[0] && (s = 0)), s;) try {
                    if (n = 1, i && (r = 2 & c[0] ? i.return : c[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, c[1])).done) return r;
                    switch (i = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                        case 0:
                        case 1:
                            r = c;
                            break;
                        case 4:
                            return s.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            s.label++, i = c[1], c = [0];
                            continue;
                        case 7:
                            c = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (r = s.trys, !((r = r.length > 0 && r[r.length - 1]) || c[0] !== 6 && c[0] !== 2)) {
                                s = 0;
                                continue
                            }
                            if (c[0] === 3 && (!r || c[1] > r[0] && c[1] < r[3])) {
                                s.label = c[1];
                                break
                            }
                            if (c[0] === 6 && s.label < r[1]) {
                                s.label = r[1], r = c;
                                break
                            }
                            if (r && s.label < r[2]) {
                                s.label = r[2], s.ops.push(c);
                                break
                            }
                            r[2] && s.ops.pop(), s.trys.pop();
                            continue
                    }
                    c = e.call(t, s)
                } catch (f) {
                    c = [6, f], i = 0
                } finally {
                    n = r = 0
                }
                if (5 & c[0]) throw c[1];
                return {
                    value: c[0] ? c[1] : void 0,
                    done: !0
                }
            })([l, u])
        }
    }
}

function Ot(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) return t;
    var i, r, s = n.call(t),
        o = [];
    try {
        for (;
            (e === void 0 || e-- > 0) && !(i = s.next()).done;) o.push(i.value)
    } catch (a) {
        r = {
            error: a
        }
    } finally {
        try {
            i && !i.done && (n = s.return) && n.call(s)
        } finally {
            if (r) throw r.error
        }
    }
    return o
}

function St(t, e, n) {
    if (arguments.length === 2)
        for (var i, r = 0, s = e.length; r < s; r++) !i && r in e || (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
    return t.concat(i || Array.prototype.slice.call(e))
}
var $d = (function() {
    function t(e) {
        var n = e.key,
            i = e.heartBeatIntervalTime,
            r = i === void 0 ? 1e3 : i,
            s = e.heartBeatDetectIntervalTime,
            o = s === void 0 ? 2e3 : s,
            a = this;
        this._heartBeatIntervalId = null, this._heartBeatDetectIntervalId = null, this._key = n, this._heartBeatIntervalTime = r, this._heartBeatDetectIntervalTime = o, window.addEventListener("unload", function() {
            a.destroy()
        })
    }
    return t.prototype.start = function() {
        var e = this;
        this._heartBeatIntervalId = setInterval(function() {
            e._setLocalTime()
        }, this._heartBeatIntervalTime)
    }, t.prototype.destroy = function() {
        this._heartBeatIntervalId && clearInterval(this._heartBeatIntervalId), this._heartBeatDetectIntervalId && clearInterval(this._heartBeatDetectIntervalId)
    }, t.prototype._setLocalTime = function() {
        window.localStorage.setItem(this._key, Date.now().toString())
    }, t.prototype.detect = function(e) {
        this._heartBeatDetectIntervalId = setInterval(function() {
            e()
        }, this._heartBeatDetectIntervalTime)
    }, t
})();

function Rr(t, e) {
    window.localStorage.setItem(t, e), (function(n, i) {
        var r = new Event(n);
        r.value = i, r.key = n, document.dispatchEvent(r)
    })(t, e)
}

function Pi(t) {
    return window.localStorage.getItem(t)
}

function Oo(t, e) {
    var n = function() {
        return nn(this, void 0, void 0, function() {
            return rn(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, e()];
                    case 1:
                        return r.sent() && document.removeEventListener(t, n), [2]
                }
            })
        })
    };
    document.addEventListener(t, n, !1);
    var i = function(r) {
        return nn(this, void 0, void 0, function() {
            return rn(this, function(s) {
                switch (s.label) {
                    case 0:
                        return r.storageArea !== localStorage || r.key !== t ? [3, 2] : [4, e()];
                    case 1:
                        s.sent() && window.removeEventListener("storage", i), s.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    };
    window.addEventListener("storage", i, !1)
}
var Rt, qe = {
    EXCLUSIVE: "exclusive",
    SHARED: "shared"
};

function Lo() {
    return "".concat(new Date().getTime(), "-").concat(String(Math.random()).substring(2))
}(function(t) {
    t.REQUEST_QUEUE_MAP = "$navigator.locks-requestQueueMap", t.HELD_LOCK_SET = "$navigator.locks-heldLockSet", t.CLIENT_IDS = "$navigator.locks-clientIds"
})(Rt || (Rt = {}));
var Bd = (function() {
    function t() {
        this._defaultOptions = {
            mode: qe.EXCLUSIVE,
            ifAvailable: !1,
            steal: !1
        }, this._clientId = "".concat("$navigator.locks", "-clientId-").concat(Lo()), this._init()
    }
    return t.prototype._init = function() {
        var e = this;
        this._storeThisClientId();
        var n = new $d({
            key: this._clientId
        });
        n.start(), n.detect(function() {
            return e._cleanUnliveClientLocks()
        }), this._onUnload()
    }, t.prototype._getClientIds = function() {
        var e = Pi(Rt.CLIENT_IDS);
        return e && JSON.parse(e) || []
    }, t.prototype._storeClientIds = function(e) {
        Rr(Rt.CLIENT_IDS, JSON.stringify(e))
    }, t.prototype._storeThisClientId = function() {
        var e = St(St([], Ot(this._getClientIds()), !1), [this._clientId], !1);
        this._storeClientIds(e)
    }, t.prototype.request = function() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return nn(this, void 0, void 0, function() {
            var i;
            return rn(this, function(r) {
                return i = this, [2, new Promise(function(s, o) {
                    var a = i._handleRequestArgs(e, o);
                    if (a) {
                        var l = a.cb,
                            u = a._options,
                            c = e[0],
                            f = {
                                name: c,
                                mode: u.mode,
                                clientId: i._clientId,
                                uuid: "".concat(c, "-").concat(Lo()),
                                resolve: s,
                                reject: o,
                                signal: u.signal
                            },
                            p = i._resolveWithCB(l, s, o),
                            h = i._heldLockSet(),
                            d = h.find(function(w) {
                                return w.name === f.name
                            }),
                            g = i._requestLockQueueMap()[f.name] || [];
                        if (u.steal === !0) d = (h = h.filter(function(w) {
                            return w.name !== f.name
                        })).find(function(w) {
                            return w.name === f.name
                        });
                        else {
                            if (u.ifAvailable === !0) return d && (d.mode !== qe.SHARED || f.mode !== qe.SHARED) || g.length ? p(null) : i._handleNewHeldLock(f, p);
                            if (u.signal !== void 0 && !i._handleSignalExisted(u, o, f)) return
                        }
                        i._handleHeldLockAndRequest(d, f, p, g, h)
                    }
                })]
            })
        })
    }, t.prototype.query = function() {
        return nn(this, void 0, void 0, function() {
            return rn(this, function(e) {
                return [2, this._query()]
            })
        })
    }, t.prototype._pushToLockRequestQueueMap = function(e) {
        var n = this._requestLockQueueMap(),
            i = n[e.name] || [];
        return n[e.name] = St(St([], Ot(i), !1), [e], !1), this._storeRequestLockQueueMap(n), e
    }, t.prototype._pushToHeldLockSet = function(e, n) {
        n === void 0 && (n = this._heldLockSet());
        var i = St(St([], Ot(n), !1), [e], !1);
        return this._storeHeldLockSet(i), e
    }, t.prototype._requestLockQueueMap = function() {
        var e = Pi(Rt.REQUEST_QUEUE_MAP);
        return e && JSON.parse(e) || {}
    }, t.prototype._heldLockSet = function() {
        var e = Pi(Rt.HELD_LOCK_SET);
        return e && JSON.parse(e) || []
    }, t.prototype._updateHeldAndRequestLocks = function(e) {
        var n = this._heldLockSet(),
            i = n.findIndex(function(c) {
                return c.uuid === e.uuid
            });
        if (i !== -1) {
            n.splice(i, 1);
            var r = this._requestLockQueueMap(),
                s = r[e.name] || [],
                o = Ot(s),
                a = o[0],
                l = o.slice(1);
            if (a) {
                if (a.mode === qe.EXCLUSIVE || l.length === 0) n.push(a), r[e.name] = l;
                else if (a.mode === qe.SHARED) {
                    var u = s.findIndex(function(c) {
                        return c.mode !== qe.SHARED
                    });
                    u === -1 && (u = s.length), n = St(St([], Ot(n), !1), Ot(s.splice(0, u)), !1)
                }
                return this._storeHeldLockSetAndRequestLockQueueMap(n, r), a
            }
            this._storeHeldLockSet(n)
        } else "this held lock which uuid is ".concat(e.uuid, " had been steal")
    }, t.prototype._getAbortError = function(e) {
        return e.reason || new DOMException("The request was aborted.", "AbortError")
    }, t.prototype._handleSignalExisted = function(e, n, i) {
        var r = e.signal;
        if (!(r instanceof AbortSignal)) return n(new TypeError("Failed to execute 'request' on 'LockManager': member signal is not of type AbortSignal.")), !1;
        if (r.aborted) return n(this._getAbortError(r)), !1;
        var s = this._signalOnabort(r, i);
        return r.addEventListener("abort", s), i.closeSignal = function() {
            return r.removeEventListener("abort", s)
        }, !0
    }, t.prototype._handleRequestArgs = function(e, n) {
        var i, r, s = e.length;
        if (s < 2) return n(new TypeError("Failed to execute 'request' on 'LockManager': 2 arguments required, but only ".concat(e.length, " present."))), null;
        if (s === 2) {
            if (typeof e[1] != "function") return n(new TypeError("Failed to execute 'request' on 'LockManager': parameter 2 is not of type 'Function'.")), null;
            i = e[1], r = this._defaultOptions
        } else {
            if (typeof e[2] != "function") return n(new TypeError("Failed to execute 'request' on 'LockManager': parameter 3 is not of type 'Function'.")), null;
            i = e[2], r = Qi(Qi({}, this._defaultOptions), e[1])
        }
        return Object.values(qe).indexOf(r.mode) < 0 ? (n(new TypeError("Failed to execute 'request' on 'LockManager': The provided value '".concat(r.mode, "' is not a valid enum value of type LockMode."))), null) : e[0][0] === "-" ? (n(new DOMException("Failed to execute 'request' on 'LockManager': Names cannot start with '-'.", "NotSupportedError")), null) : r.signal && r.steal ? (n(new DOMException("Failed to execute 'request' on 'LockManager': The 'signal' and 'steal' options cannot be used together.", "NotSupportedError")), null) : r.signal && r.ifAvailable ? (n(new DOMException("Failed to execute 'request' on 'LockManager': The 'signal' and 'ifAvailable' options cannot be used together.", "NotSupportedError")), null) : r.steal && r.ifAvailable ? (n(new DOMException("Failed to execute 'request' on 'LockManager': The 'steal' and 'ifAvailable' options cannot be used together.", "NotSupportedError")), null) : r.steal && r.mode !== qe.EXCLUSIVE ? (n(new DOMException("Failed to execute 'request' on 'LockManager': The 'steal' option may only be used with 'exclusive' locks.", "NotSupportedError")), null) : {
            cb: i,
            _options: r
        }
    }, t.prototype._handleHeldLockAndRequest = function(e, n, i, r, s) {
        e ? e.mode === qe.EXCLUSIVE ? this._handleNewLockRequest(n, i) : e.mode === qe.SHARED && (n.mode === qe.SHARED && r.length === 0 ? this._handleNewHeldLock(n, i, s) : this._handleNewLockRequest(n, i)) : this._handleNewHeldLock(n, i, s)
    }, t.prototype._signalOnabort = function(e, n) {
        var i = this,
            r = n.name,
            s = n.uuid,
            o = n.reject;
        return function() {
            var a = i._requestLockQueueMap(),
                l = a[r];
            if (l) {
                var u = l.findIndex(function(c) {
                    return c.uuid === s
                });
                u !== -1 && (l.splice(u, 1), i._storeRequestLockQueueMap(a))
            }
            o(i._getAbortError(e))
        }
    }, t.prototype._resolveWithCB = function(e, n, i) {
        var r = this;
        return function(s) {
            return new Promise(function(o) {
                new Promise(function(a) {
                    return a("")
                }).then(function() {
                    return nn(r, void 0, void 0, function() {
                        var a, l;
                        return rn(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return u.trys.push([0, 2, , 3]), [4, e(s)];
                                case 1:
                                    return a = u.sent(), o(a), n(a), [3, 3];
                                case 2:
                                    return l = u.sent(), o(l), i(l), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                })
            })
        }
    }, t.prototype._handleNewHeldLock = function(e, n, i) {
        return nn(this, void 0, void 0, function() {
            var r, s, o, a, l, u = this;
            return rn(this, function(c) {
                switch (c.label) {
                    case 0:
                        return this._pushToHeldLockSet(e, i), [4, new Promise(function(f) {
                            return setTimeout(f, 0)
                        })];
                    case 1:
                        return c.sent(), (a = e.closeSignal) === null || a === void 0 || a.call(e), !((l = e.signal) === null || l === void 0) && l.aborted ? (this._updateHeldAndRequestLocks(e), [2, e.reject(this._getAbortError(e.signal))]) : (r = !1, s = !1, o = function() {
                            return !(r || s || u._isInHeldLockSet(e.uuid)) && (u._handleHeldLockBeSteal(e), s = !0, !0)
                        }, Oo(Rt.HELD_LOCK_SET, o), n({
                            name: e.name,
                            mode: e.mode
                        }).then(function() {
                            r = !0, u._updateHeldAndRequestLocks(e)
                        }), [2])
                }
            })
        })
    }, t.prototype._handleHeldLockBeSteal = function(e) {
        e.reject(new DOMException("Lock broken by another request with the 'steal' option."))
    }, t.prototype._storeHeldLockSet = function(e) {
        Rr(Rt.HELD_LOCK_SET, JSON.stringify(e))
    }, t.prototype._storeRequestLockQueueMap = function(e) {
        Rr(Rt.REQUEST_QUEUE_MAP, JSON.stringify(e))
    }, t.prototype._isInHeldLockSet = function(e) {
        return this._heldLockSet().some(function(n) {
            return n.uuid === e
        })
    }, t.prototype._handleNewLockRequest = function(e, n) {
        var i = this;
        this._pushToLockRequestQueueMap(e);
        var r = !1;
        Oo(Rt.HELD_LOCK_SET, function() {
            return nn(i, void 0, void 0, function() {
                return rn(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return r || !this._isInHeldLockSet(e.uuid) ? [3, 5] : (r = !0, [4, n({
                                name: e.name,
                                mode: e.mode
                            })]);
                        case 1:
                            return s.sent(), this._isInHeldLockSet(e.uuid) || this._handleHeldLockBeSteal(e), e.mode !== qe.EXCLUSIVE ? [3, 2] : (this._updateHeldAndRequestLocks(e), [3, 4]);
                        case 2:
                            return e.mode !== qe.SHARED ? [3, 4] : [4, this._handleSharedLockFromListener(e)];
                        case 3:
                            s.sent(), s.label = 4;
                        case 4:
                            return [2, !0];
                        case 5:
                            return [2, !1]
                    }
                })
            })
        })
    }, t.prototype._handleSharedLockFromListener = function(e) {
        return nn(this, void 0, void 0, function() {
            var n;
            return rn(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, (r = Math.floor(1e3 * Math.random()), new Promise(function(s) {
                            return setTimeout(s, r)
                        }))];
                    case 1:
                        return i.sent(), (n = this._heldLockSet().filter(function(s) {
                            return s.name === e.name && s.uuid !== e.uuid && s.mode === qe.SHARED
                        })).length ? this._storeHeldLockSet(n) : this._updateHeldAndRequestLocks(e), [2]
                }
                var r
            })
        })
    }, t.prototype._storeHeldLockSetAndRequestLockQueueMap = function(e, n) {
        this._storeHeldLockSet(e), this._storeRequestLockQueueMap(n)
    }, t.prototype._query = function() {
        var e = {
                held: this._heldLockSet(),
                pending: []
            },
            n = this._requestLockQueueMap();
        for (var i in n) {
            var r = n[i];
            e.pending = e.pending.concat(r)
        }
        return e
    }, t.prototype._onUnload = function() {
        var e = this;
        window.addEventListener("unload", function(n) {
            e._cleanClientLocksByClientId(e._clientId)
        })
    }, t.prototype._cleanClientLocksByClientId = function(e) {
        var n = this._requestLockQueueMap();
        this._cleanRequestLockQueueByClientId(n, e);
        var i = this._cleanHeldLockSetByClientId(n, e);
        this._storeHeldLockSetAndRequestLockQueueMap(i, n)
    }, t.prototype._cleanHeldLockSetByClientId = function(e, n) {
        var i = this._heldLockSet(),
            r = [];
        return i.forEach(function(s) {
            if (s.clientId !== n) r.push(s);
            else {
                var o = e[s.name] || [],
                    a = Ot(o),
                    l = a[0],
                    u = a.slice(1);
                if (l) {
                    if (l.mode === qe.EXCLUSIVE || u.length === 0) r.push(l), e[s.name] = u;
                    else if (l.mode === qe.SHARED) {
                        var c = o.findIndex(function(f) {
                            return f.mode !== qe.SHARED
                        });
                        c === -1 && (c = o.length), r = St(St([], Ot(r), !1), Ot(o.splice(0, c)), !1)
                    }
                }
            }
        }), r
    }, t.prototype._cleanRequestLockQueueByClientId = function(e, n) {
        for (var i in e) {
            var r = e[i];
            e[i] = r.filter(function(s) {
                return s.clientId !== n
            })
        }
    }, t.prototype._cleanUnliveClientLocks = function() {
        var e = this,
            n = St([], Ot(new Set(this._getClientIds())), !1);
        if (n.length) {
            var i = [];
            n.forEach(function(r) {
                var s, o = Pi(r);
                !o || Date.now() - Number(o) > 3100 ? (s = r, window.localStorage.removeItem(s), e._cleanClientLocksByClientId(r)) : i.push(r)
            }), JSON.stringify(n) !== JSON.stringify(i) && this._storeClientIds(i)
        } else this._storeClientIds([])
    }, t
})();
(function() {
    if (typeof window < "u") {
        var t = window.navigator;
        if (t && !t.locks) {
            var e = new Bd;
            Object.defineProperty(t, "locks", {
                value: e
            })
        }
    }
})();
const Hd = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let ts = (t = 21) => {
    let e = "",
        n = crypto.getRandomValues(new Uint8Array(t |= 0));
    for (; t--;) e += Hd[n[t] & 63];
    return e
};
const at = {
    post(t, e = {}, n = {}, i, r = !0, s = !1) {
        let o = [],
            a = !0;
        const l = { ...n || {}
        };
        if (e instanceof FormData) o = e, a = !1;
        else {
            if (s) o = typeof e == "string" ? e : JSON.stringify(e), l["Content-Type"] = "application/json; charset=utf-8";
            else {
                const c = [];
                if (typeof e == "object" && e !== null)
                    for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && c.push(`${encodeURIComponent(f)}=${encodeURIComponent(String(e[f]))}`);
                c.length && (o = c.join("&")), l["Content-Type"] = "application/www-x-form-urlencoded"
            }
            a = !0
        }
        if (typeof window.fetch < "u" && typeof window.AbortController < "u") {
            const f = new window.AbortController().signal;
            let p;
            return r ? p = {
                method: "POST",
                headers: l,
                signal: f,
                credentials: a ? "include" : "same-origin",
                body: o
            } : p = {
                method: "POST",
                headers: l,
                signal: f,
                body: o
            }, fetch(t, p).then(h => h.status === 500 ? i(!0) : h.json()).then(h => {
                i(null, h)
            }).catch(() => {
                i(!0)
            }), f
        }
        const u = new XMLHttpRequest;
        if (u.onerror = () => i(!0), u.open("POST", t, !0), !(e instanceof FormData)) {
            for (const c in l) u.setRequestHeader(c, l[c]);
            u.withCredentials = !0
        }
        return u.onload = () => {
            u.status >= 200 && u.status < 300 ? i(null, JSON.parse(u.responseText)) : i(!0)
        }, u.send(o), u
    },
    get(t, e = {}, n = {}, i) {
        const r = [],
            s = { ...n || {}
            };
        if (e)
            for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && r.push(`${encodeURIComponent(a)}=${encodeURIComponent(String(e[a]))}`);
        if (r.length && (t += `?${r.join("&")}`), typeof window.fetch < "u" && typeof window.AbortController < "u") {
            const l = new window.AbortController().signal;
            return fetch(t, {
                headers: s,
                signal: l
            }).then(u => u.json()).then(u => {
                i(null, u)
            }).catch(() => {
                i(!0)
            }), l
        }
        const o = new XMLHttpRequest;
        o.onerror = () => i(!0), o.open("GET", t, !0);
        for (const a in s) o.setRequestHeader(a, s[a]);
        return o.onload = () => {
            o.status >= 200 && o.status < 300 ? i(null, JSON.parse(o.responseText)) : i(!0)
        }, o.send(), o
    }
};
class Rs {
    constructor() {
        j(this, "isEnabled", !1);
        this.checkIsEnabled()
    }
    checkIsEnabled() {}
    setItem(e, n) {}
    getItem(e) {
        return null
    }
}
class Wd extends Rs {
    checkIsEnabled() {
        try {
            this.isEnabled = !!window.sessionStorage
        } catch {
            this.isEnabled = !1
        }
    }
    setItem(e, n) {
        if (this.isEnabled) try {
            return window.sessionStorage.setItem(e, n), !0
        } catch {
            return
        }
    }
    getItem(e) {
        return this.isEnabled ? window.sessionStorage.getItem(e) : null
    }
}
class Ud extends Rs {
    checkIsEnabled() {
        try {
            window.localStorage.setItem("exist_test", "yes"), window.localStorage.removeItem("exist_test"), this.isEnabled = !0
        } catch {
            this.isEnabled = !1
        }
    }
    setItem(e, n) {
        if (this.isEnabled) return window.localStorage.setItem(e, n), !0
    }
    getItem(e) {
        return this.isEnabled ? window.localStorage.getItem(e) : null
    }
    deleteItem(e) {
        this.isEnabled && window.localStorage.removeItem(e)
    }
}
var Po = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Up(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}

function Ri(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Ro = {},
    Do;

function jd() {
    return Do || (Do = 1, (function() {
        (function(t) {
            {
                var e;
                typeof window < "u" ? e = window : typeof Po < "u" ? e = Po : typeof self < "u" && (e = self), e.$__TawkEngine = t()
            }
        })(function() {
            return (function t(e, n, i) {
                function r(a, l) {
                    if (!n[a]) {
                        if (!e[a]) {
                            var u = typeof Ri == "function" && Ri;
                            if (!l && u) return u(a, !0);
                            if (s) return s(a, !0);
                            throw new Error("Cannot find module '" + a + "'")
                        }
                        var c = n[a] = {
                            exports: {}
                        };
                        e[a][0].call(c.exports, function(f) {
                            var p = e[a][1][f];
                            return r(p || f)
                        }, c, c.exports, t, e, n, i)
                    }
                    return n[a].exports
                }
                for (var s = typeof Ri == "function" && Ri, o = 0; o < i.length; o++) r(i[o]);
                return r
            })({
                debug: [function(t, e, n) {
                    e.exports = t("n9i2g6")
                }, {}],
                n9i2g6: [function(t, e, n) {
                    e.exports = function() {
                        return function() {}
                    }
                }, {}],
                3: [function(t, e, n) {
                    e.exports = i;

                    function i(s, o, a) {
                        var l = !1;
                        return a = a || r, u.count = s, s === 0 ? o() : u;

                        function u(c, f) {
                            if (u.count <= 0) throw new Error("after called too many times");
                            --u.count, c ? (l = !0, o(c), o = a) : u.count === 0 && !l && o(null, f)
                        }
                    }

                    function r() {}
                }, {}],
                4: [function(t, e, n) {
                    e.exports = function(i, r, s) {
                        var o = i.byteLength;
                        if (r = r || 0, s = s || o, i.slice) return i.slice(r, s);
                        if (r < 0 && (r += o), s < 0 && (s += o), s > o && (s = o), r >= o || r >= s || o === 0) return new ArrayBuffer(0);
                        for (var a = new Uint8Array(i), l = new Uint8Array(s - r), u = r, c = 0; u < s; u++, c++) l[c] = a[u];
                        return l.buffer
                    }
                }, {}],
                5: [function(t, e, n) {
                    (function(i) {
                        n.encode = function(r) {
                            var s = new Uint8Array(r),
                                o, a = s.length,
                                l = "";
                            for (o = 0; o < a; o += 3) l += i[s[o] >> 2], l += i[(s[o] & 3) << 4 | s[o + 1] >> 4], l += i[(s[o + 1] & 15) << 2 | s[o + 2] >> 6], l += i[s[o + 2] & 63];
                            return a % 3 === 2 ? l = l.substring(0, l.length - 1) + "=" : a % 3 === 1 && (l = l.substring(0, l.length - 2) + "=="), l
                        }, n.decode = function(r) {
                            var s = r.length * .75,
                                o = r.length,
                                a, l = 0,
                                u, c, f, p;
                            r[r.length - 1] === "=" && (s--, r[r.length - 2] === "=" && s--);
                            var h = new ArrayBuffer(s),
                                d = new Uint8Array(h);
                            for (a = 0; a < o; a += 4) u = i.indexOf(r[a]), c = i.indexOf(r[a + 1]), f = i.indexOf(r[a + 2]), p = i.indexOf(r[a + 3]), d[l++] = u << 2 | c >> 4, d[l++] = (c & 15) << 4 | f >> 2, d[l++] = (f & 3) << 6 | p & 63;
                            return h
                        }
                    })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
                }, {}],
                6: [function(t, e, n) {
                    (function(i) {
                        var r = i.BlobBuilder || i.WebKitBlobBuilder || i.MSBlobBuilder || i.MozBlobBuilder,
                            s = (function() {
                                try {
                                    var f = new Blob(["hi"]);
                                    return f.size === 2
                                } catch {
                                    return !1
                                }
                            })(),
                            o = s && (function() {
                                try {
                                    var f = new Blob([new Uint8Array([1, 2])]);
                                    return f.size === 2
                                } catch {
                                    return !1
                                }
                            })(),
                            a = r && r.prototype.append && r.prototype.getBlob;

                        function l(f) {
                            for (var p = 0; p < f.length; p++) {
                                var h = f[p];
                                if (h.buffer instanceof ArrayBuffer) {
                                    var d = h.buffer;
                                    if (h.byteLength !== d.byteLength) {
                                        var g = new Uint8Array(h.byteLength);
                                        g.set(new Uint8Array(d, h.byteOffset, h.byteLength)), d = g.buffer
                                    }
                                    f[p] = d
                                }
                            }
                        }

                        function u(f, p) {
                            p = p || {};
                            var h = new r;
                            l(f);
                            for (var d = 0; d < f.length; d++) h.append(f[d]);
                            return p.type ? h.getBlob(p.type) : h.getBlob()
                        }

                        function c(f, p) {
                            return l(f), new Blob(f, p || {})
                        }
                        e.exports = (function() {
                            return s ? o ? i.Blob : c : a ? u : void 0
                        })()
                    }).call(this, typeof self < "u" ? self : typeof window < "u" ? window : {})
                }, {}],
                7: [function(t, e, n) {}, {}],
                8: [function(t, e, n) {
                    e.exports = i;

                    function i(s) {
                        if (s) return r(s)
                    }

                    function r(s) {
                        for (var o in i.prototype) s[o] = i.prototype[o];
                        return s
                    }
                    i.prototype.on = i.prototype.addEventListener = function(s, o) {
                        return this._callbacks = this._callbacks || {}, (this._callbacks[s] = this._callbacks[s] || []).push(o), this
                    }, i.prototype.once = function(s, o) {
                        var a = this;
                        this._callbacks = this._callbacks || {};

                        function l() {
                            a.off(s, l), o.apply(this, arguments)
                        }
                        return l.fn = o, this.on(s, l), this
                    }, i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function(s, o) {
                        if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
                        var a = this._callbacks[s];
                        if (!a) return this;
                        if (arguments.length == 1) return delete this._callbacks[s], this;
                        for (var l, u = 0; u < a.length; u++)
                            if (l = a[u], l === o || l.fn === o) {
                                a.splice(u, 1);
                                break
                            }
                        return this
                    }, i.prototype.emit = function(s) {
                        this._callbacks = this._callbacks || {};
                        var o = [].slice.call(arguments, 1),
                            a = this._callbacks[s];
                        if (a) {
                            a = a.slice(0);
                            for (var l = 0, u = a.length; l < u; ++l) a[l].apply(this, o)
                        }
                        return this
                    }, i.prototype.listeners = function(s) {
                        return this._callbacks = this._callbacks || {}, this._callbacks[s] || []
                    }, i.prototype.hasListeners = function(s) {
                        return !!this.listeners(s).length
                    }
                }, {}],
                9: [function(t, e, n) {
                    e.exports = function(i, r) {
                        var s = function() {};
                        s.prototype = r.prototype, i.prototype = new s, i.prototype.constructor = i
                    }
                }, {}],
                10: [function(t, e, n) {
                    e.exports = t("./lib/")
                }, {
                    "./lib/": 11
                }],
                11: [function(t, e, n) {
                    e.exports = t("./socket"), e.exports.parser = t("engine.io-parser")
                }, {
                    "./socket": 12,
                    "engine.io-parser": 20
                }],
                12: [function(t, e, n) {
                    (function(i) {
                        var r = t("./transports"),
                            s = t("component-emitter"),
                            o = t("debug")("engine.io-client:socket"),
                            a = t("indexof"),
                            l = t("engine.io-parser"),
                            u = t("parseuri"),
                            c = t("parsejson"),
                            f = t("parseqs");
                        e.exports = p;

                        function p(d, g) {
                            if (!(this instanceof p)) return new p(d, g);
                            g = g || {}, d && typeof d == "object" && (g = d, d = null), d ? (d = u(d), g.hostname = d.host, g.secure = d.protocol == "https" || d.protocol == "wss", g.port = d.port, d.query && (g.query = d.query)) : g.host && (g.hostname = u(g.host).host), this.secure = g.secure != null ? g.secure : i.location && location.protocol == "https:", g.hostname && !g.port && (g.port = this.secure ? "443" : "80"), this.agent = g.agent || !1, this.hostname = g.hostname || (i.location ? location.hostname : "localhost"), this.port = g.port || (i.location && location.port ? location.port : this.secure ? 443 : 80), this.query = g.query || {}, typeof this.query == "string" && (this.query = f.decode(this.query)), this.upgrade = g.upgrade !== !1, this.path = (g.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!g.forceJSONP, this.jsonp = g.jsonp !== !1, this.forceBase64 = !!g.forceBase64, this.enablesXDR = !!g.enablesXDR, this.timestampParam = g.timestampParam || "t", this.timestampRequests = g.timestampRequests, this.transports = g.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.policyPort = g.policyPort || 843, this.rememberUpgrade = g.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = g.onlyBinaryUpgrades, this.perMessageDeflate = g.perMessageDeflate !== !1 ? g.perMessageDeflate || {} : !1, this.perMessageDeflate === !0 && (this.perMessageDeflate = {}), this.perMessageDeflate && this.perMessageDeflate.threshold == null && (this.perMessageDeflate.threshold = 1024), this.pfx = g.pfx || null, this.key = g.key || null, this.passphrase = g.passphrase || null, this.cert = g.cert || null, this.ca = g.ca || null, this.ciphers = g.ciphers || null, this.rejectUnauthorized = g.rejectUnauthorized === void 0 ? !0 : g.rejectUnauthorized;
                            var w = typeof i == "object" && i;
                            w.global === w && g.extraHeaders && Object.keys(g.extraHeaders).length > 0 && (this.extraHeaders = g.extraHeaders), this.open()
                        }
                        p.priorWebsocketSuccess = !1, s(p.prototype), p.protocol = l.protocol, p.Socket = p, p.Transport = t("./transport"), p.transports = t("./transports"), p.parser = t("engine.io-parser"), p.prototype.createTransport = function(d) {
                            o('creating transport "%s"', d);
                            var g = h(this.query);
                            g.EIO = l.protocol, g.transport = d, this.id && (g.sid = this.id);
                            var w = new r[d]({
                                agent: this.agent,
                                hostname: this.hostname,
                                port: this.port,
                                secure: this.secure,
                                path: this.path,
                                query: g,
                                forceJSONP: this.forceJSONP,
                                jsonp: this.jsonp,
                                forceBase64: this.forceBase64,
                                enablesXDR: this.enablesXDR,
                                timestampRequests: this.timestampRequests,
                                timestampParam: this.timestampParam,
                                policyPort: this.policyPort,
                                socket: this,
                                pfx: this.pfx,
                                key: this.key,
                                passphrase: this.passphrase,
                                cert: this.cert,
                                ca: this.ca,
                                ciphers: this.ciphers,
                                rejectUnauthorized: this.rejectUnauthorized,
                                perMessageDeflate: this.perMessageDeflate,
                                extraHeaders: this.extraHeaders
                            });
                            return w
                        };

                        function h(d) {
                            var g = {};
                            for (var w in d) d.hasOwnProperty(w) && (g[w] = d[w]);
                            return g
                        }
                        p.prototype.open = function() {
                            var d;
                            if (this.rememberUpgrade && p.priorWebsocketSuccess && this.transports.indexOf("websocket") != -1) d = "websocket";
                            else if (this.transports.length === 0) {
                                var g = this;
                                setTimeout(function() {
                                    g.emit("error", "No transports available")
                                }, 0);
                                return
                            } else d = this.transports[0];
                            this.readyState = "opening";
                            try {
                                d = this.createTransport(d)
                            } catch {
                                this.transports.shift(), this.open();
                                return
                            }
                            d.open(), this.setTransport(d)
                        }, p.prototype.setTransport = function(d) {
                            o("setting transport %s", d.name);
                            var g = this;
                            this.transport && (o("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = d, d.on("drain", function() {
                                g.onDrain()
                            }).on("packet", function(w) {
                                g.onPacket(w)
                            }).on("error", function(w) {
                                g.onError(w)
                            }).on("close", function() {
                                g.onClose("transport close")
                            })
                        }, p.prototype.probe = function(d) {
                            o('probing transport "%s"', d);
                            var g = this.createTransport(d, {
                                    probe: 1
                                }),
                                w = !1,
                                x = this;
                            p.priorWebsocketSuccess = !1;

                            function R() {
                                if (x.onlyBinaryUpgrades) {
                                    var v = !this.supportsBinary && x.transport.supportsBinary;
                                    w = w || v
                                }
                                w || (o('probe transport "%s" opened', d), g.send([{
                                    type: "ping",
                                    data: "probe"
                                }]), g.once("packet", function(k) {
                                    if (!w)
                                        if (k.type == "pong" && k.data == "probe") {
                                            if (o('probe transport "%s" pong', d), x.upgrading = !0, x.emit("upgrading", g), !g) return;
                                            p.priorWebsocketSuccess = g.name == "websocket", o('pausing current transport "%s"', x.transport.name), x.transport.pause(function() {
                                                w || x.readyState != "closed" && (o("changing transport and sending upgrade packet"), D(), x.setTransport(g), g.send([{
                                                    type: "upgrade"
                                                }]), x.emit("upgrade", g), g = null, x.upgrading = !1, x.flush())
                                            })
                                        } else {
                                            o('probe transport "%s" failed', d);
                                            var I = new Error("probe error");
                                            I.transport = g.name, x.emit("upgradeError", I)
                                        }
                                }))
                            }

                            function L() {
                                w || (w = !0, D(), g.close(), g = null)
                            }

                            function O(v) {
                                var k = new Error("probe error: " + v);
                                k.transport = g.name, L(), o('probe transport "%s" failed because of error: %s', d, v), x.emit("upgradeError", k)
                            }

                            function W() {
                                O("transport closed")
                            }

                            function C() {
                                O("socket closed")
                            }

                            function M(v) {
                                g && v.name != g.name && (o('"%s" works - aborting "%s"', v.name, g.name), L())
                            }

                            function D() {
                                g.removeListener("open", R), g.removeListener("error", O), g.removeListener("close", W), x.removeListener("close", C), x.removeListener("upgrading", M)
                            }
                            g.once("open", R), g.once("error", O), g.once("close", W), this.once("close", C), this.once("upgrading", M), g.open()
                        }, p.prototype.onOpen = function() {
                            if (o("socket open"), this.readyState = "open", p.priorWebsocketSuccess = this.transport.name == "websocket", this.emit("open"), this.flush(), this.readyState == "open" && this.upgrade && this.transport.pause) {
                                o("starting upgrade probes");
                                for (var d = 0, g = this.upgrades.length; d < g; d++) this.probe(this.upgrades[d])
                            }
                        }, p.prototype.onPacket = function(d) {
                            if (this.readyState == "opening" || this.readyState == "open") switch (o('socket receive: type "%s", data "%s"', d.type, d.data), this.emit("packet", d), this.emit("heartbeat"), d.type) {
                                case "open":
                                    this.onHandshake(c(d.data));
                                    break;
                                case "pong":
                                    this.setPing(), this.emit("pong");
                                    break;
                                case "error":
                                    var g = new Error("server error");
                                    g.code = d.data, this.onError(g);
                                    break;
                                case "message":
                                    this.emit("data", d.data), this.emit("message", d.data);
                                    break
                            } else o('packet received with socket readyState "%s"', this.readyState)
                        }, p.prototype.onHandshake = function(d) {
                            this.emit("handshake", d), this.id = d.sid, this.transport.query.sid = d.sid, this.upgrades = this.filterUpgrades(d.upgrades), this.pingInterval = d.pingInterval, this.pingTimeout = d.pingTimeout, this.onOpen(), this.readyState != "closed" && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
                        }, p.prototype.onHeartbeat = function(d) {
                            clearTimeout(this.pingTimeoutTimer);
                            var g = this;
                            g.pingTimeoutTimer = setTimeout(function() {
                                g.readyState != "closed" && g.onClose("ping timeout")
                            }, d || g.pingInterval + g.pingTimeout)
                        }, p.prototype.setPing = function() {
                            var d = this;
                            clearTimeout(d.pingIntervalTimer), d.pingIntervalTimer = setTimeout(function() {
                                o("writing ping packet - expecting pong within %sms", d.pingTimeout), d.ping(), d.onHeartbeat(d.pingTimeout)
                            }, d.pingInterval)
                        }, p.prototype.ping = function() {
                            var d = this;
                            this.sendPacket("ping", function() {
                                d.emit("ping")
                            })
                        }, p.prototype.onDrain = function() {
                            this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emit("drain") : this.flush()
                        }, p.prototype.flush = function() {
                            this.readyState != "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length && (o("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                        }, p.prototype.write = p.prototype.send = function(d, g, w) {
                            return this.sendPacket("message", d, g, w), this
                        }, p.prototype.sendPacket = function(d, g, w, x) {
                            if (typeof g == "function" && (x = g, g = void 0), typeof w == "function" && (x = w, w = null), !(this.readyState == "closing" || this.readyState == "closed")) {
                                w = w || {}, w.compress = w.compress !== !1;
                                var R = {
                                    type: d,
                                    data: g,
                                    options: w
                                };
                                this.emit("packetCreate", R), this.writeBuffer.push(R), x && this.once("flush", x), this.flush()
                            }
                        }, p.prototype.close = function() {
                            if (this.readyState == "opening" || this.readyState == "open") {
                                this.readyState = "closing";
                                var d = this;
                                this.writeBuffer.length ? this.once("drain", function() {
                                    this.upgrading ? x() : g()
                                }) : this.upgrading ? x() : g()
                            }

                            function g() {
                                d.onClose("forced close"), o("socket closing - telling transport to close"), d.transport.close()
                            }

                            function w() {
                                d.removeListener("upgrade", w), d.removeListener("upgradeError", w), g()
                            }

                            function x() {
                                d.once("upgrade", w), d.once("upgradeError", w)
                            }
                            return this
                        }, p.prototype.onError = function(d) {
                            o("socket error %j", d), p.priorWebsocketSuccess = !1, this.emit("error", d), this.onClose("transport error", d)
                        }, p.prototype.onClose = function(d, g) {
                            if (this.readyState == "opening" || this.readyState == "open" || this.readyState == "closing") {
                                o('socket close with reason: "%s"', d);
                                var w = this;
                                clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", d, g), w.writeBuffer = [], w.prevBufferLen = 0
                            }
                        }, p.prototype.filterUpgrades = function(d) {
                            for (var g = [], w = 0, x = d.length; w < x; w++) ~a(this.transports, d[w]) && g.push(d[w]);
                            return g
                        }
                    }).call(this, typeof self < "u" ? self : typeof window < "u" ? window : {})
                }, {
                    "./transport": 13,
                    "./transports": 14,
                    "component-emitter": 8,
                    debug: "n9i2g6",
                    "engine.io-parser": 20,
                    indexof: 24,
                    parsejson: 26,
                    parseqs: 27,
                    parseuri: 28
                }],
                13: [function(t, e, n) {
                    var i = t("engine.io-parser"),
                        r = t("component-emitter");
                    e.exports = s;

                    function s(o) {
                        this.path = o.path, this.hostname = o.hostname, this.port = o.port, this.secure = o.secure, this.query = o.query, this.timestampParam = o.timestampParam, this.timestampRequests = o.timestampRequests, this.readyState = "", this.agent = o.agent || !1, this.socket = o.socket, this.enablesXDR = o.enablesXDR, this.pfx = o.pfx, this.key = o.key, this.passphrase = o.passphrase, this.cert = o.cert, this.ca = o.ca, this.ciphers = o.ciphers, this.rejectUnauthorized = o.rejectUnauthorized, this.extraHeaders = o.extraHeaders
                    }
                    r(s.prototype), s.prototype.onError = function(o, a) {
                        var l = new Error(o);
                        return l.type = "TransportError", l.description = a, this.emit("error", l), this
                    }, s.prototype.open = function() {
                        return (this.readyState == "closed" || this.readyState == "") && (this.readyState = "opening", this.doOpen()), this
                    }, s.prototype.close = function() {
                        return (this.readyState == "opening" || this.readyState == "open") && (this.doClose(), this.onClose()), this
                    }, s.prototype.send = function(o) {
                        if (this.readyState == "open") this.write(o);
                        else throw new Error("Transport not open")
                    }, s.prototype.onOpen = function() {
                        this.readyState = "open", this.writable = !0, this.emit("open")
                    }, s.prototype.onData = function(o) {
                        var a = i.decodePacket(o, this.socket.binaryType);
                        this.onPacket(a)
                    }, s.prototype.onPacket = function(o) {
                        this.emit("packet", o)
                    }, s.prototype.onClose = function() {
                        this.readyState = "closed", this.emit("close")
                    }
                }, {
                    "component-emitter": 8,
                    "engine.io-parser": 20
                }],
                14: [function(t, e, n) {
                    (function(i) {
                        var r = t("xmlhttprequest-ssl"),
                            s = t("./polling-xhr"),
                            o = t("./polling-jsonp"),
                            a = t("./websocket");
                        n.polling = l, n.websocket = a;

                        function l(u) {
                            var c, f = !1,
                                p = !1,
                                h = u.jsonp !== !1;
                            if (i.location) {
                                var d = location.protocol == "https:",
                                    g = location.port;
                                g || (g = d ? 443 : 80), f = u.hostname != location.hostname || g != u.port, p = u.secure != d
                            }
                            if (u.xdomain = f, u.xscheme = p, c = new r(u), "open" in c && !u.forceJSONP) return new s(u);
                            if (!h) throw new Error("JSONP disabled");
                            return new o(u)
                        }
                    }).call(this, typeof self < "u" ? self : typeof window < "u" ? window : {})
                }, {
                    "./polling-jsonp": 15,
                    "./polling-xhr": 16,
                    "./websocket": 18,
                    "xmlhttprequest-ssl": 19
                }],
                15: [function(t, e, n) {
                    (function(i) {
                        var r = t("./polling"),
                            s = t("component-inherit");
                        e.exports = c;
                        var o = /\n/g,
                            a = /\\n/g,
                            l;

                        function u() {}

                        function c(f) {
                            r.call(this, f), this.query = this.query || {}, l || (i.___eio || (i.___eio = []), l = i.___eio), this.index = l.length;
                            var p = this;
                            l.push(function(h) {
                                p.onData(h)
                            }), this.query.j = this.index, i.document && i.addEventListener && i.addEventListener("beforeunload", function() {
                                p.script && (p.script.onerror = u)
                            }, !1)
                        }
                        s(c, r), c.prototype.supportsBinary = !1, c.prototype.doClose = function() {
                            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), r.prototype.doClose.call(this)
                        }, c.prototype.doPoll = function() {
                            var f = this,
                                p = document.createElement("script");
                            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), p.async = !0, p.src = this.uri(), p.onerror = function(g) {
                                f.onError("jsonp poll error", g)
                            };
                            var h = document.getElementsByTagName("script")[0];
                            h ? h.parentNode.insertBefore(p, h) : (document.head || document.body).appendChild(p), this.script = p;
                            var d = typeof navigator < "u" && /gecko/i.test(navigator.userAgent);
                            d && setTimeout(function() {
                                var g = document.createElement("iframe");
                                document.body.appendChild(g), document.body.removeChild(g)
                            }, 100)
                        }, c.prototype.doWrite = function(f, p) {
                            var h = this;
                            if (!this.form) {
                                var d = document.createElement("form"),
                                    g = document.createElement("textarea"),
                                    w = this.iframeId = "eio_iframe_" + this.index,
                                    x;
                                d.className = "socketio", d.style.position = "absolute", d.style.top = "-1000px", d.style.left = "-1000px", d.target = w, d.method = "POST", d.setAttribute("accept-charset", "utf-8"), g.name = "d", d.appendChild(g), document.body.appendChild(d), this.form = d, this.area = g
                            }
                            this.form.action = this.uri();

                            function R() {
                                L(), p()
                            }

                            function L() {
                                if (h.iframe) try {
                                    h.form.removeChild(h.iframe)
                                } catch (W) {
                                    h.onError("jsonp polling iframe removal error", W)
                                }
                                try {
                                    var O = '<iframe src="javascript:0" name="' + h.iframeId + '">';
                                    x = document.createElement(O)
                                } catch {
                                    x = document.createElement("iframe"), x.name = h.iframeId, x.src = "javascript:0"
                                }
                                x.id = h.iframeId, h.form.appendChild(x), h.iframe = x
                            }
                            L(), f = f.replace(a, `\\
`), this.area.value = f.replace(o, "\\n");
                            try {
                                this.form.submit()
                            } catch {}
                            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                                h.iframe.readyState == "complete" && R()
                            } : this.iframe.onload = R
                        }
                    }).call(this, typeof self < "u" ? self : typeof window < "u" ? window : {})
                }, {
                    "./polling": 17,
                    "component-inherit": 9
                }],
                16: [function(t, e, n) {
                    (function(i) {
                        var r = t("xmlhttprequest-ssl"),
                            s = t("./polling"),
                            o = t("component-emitter"),
                            a = t("component-inherit"),
                            l = t("debug")("engine.io-client:polling-xhr");
                        e.exports = c, e.exports.Request = f;

                        function u() {}

                        function c(h) {
                            if (s.call(this, h), i.location) {
                                var d = location.protocol == "https:",
                                    g = location.port;
                                g || (g = d ? 443 : 80), this.xd = h.hostname != i.location.hostname || g != h.port, this.xs = h.secure != d
                            } else this.extraHeaders = h.extraHeaders
                        }
                        a(c, s), c.prototype.supportsBinary = !0, c.prototype.request = function(h) {
                            return h = h || {}, h.uri = this.uri(), h.xd = this.xd, h.xs = this.xs, h.agent = this.agent || !1, h.supportsBinary = this.supportsBinary, h.enablesXDR = this.enablesXDR, h.pfx = this.pfx, h.key = this.key, h.passphrase = this.passphrase, h.cert = this.cert, h.ca = this.ca, h.ciphers = this.ciphers, h.rejectUnauthorized = this.rejectUnauthorized, h.extraHeaders = this.extraHeaders, new f(h)
                        }, c.prototype.doWrite = function(h, d) {
                            var g = typeof h != "string" && h !== void 0,
                                w = this.request({
                                    method: "POST",
                                    data: h,
                                    isBinary: g
                                }),
                                x = this;
                            w.on("success", d), w.on("error", function(R) {
                                x.onError("xhr post error", R)
                            }), this.sendXhr = w
                        }, c.prototype.doPoll = function() {
                            l("xhr poll");
                            var h = this.request(),
                                d = this;
                            h.on("data", function(g) {
                                d.onData(g)
                            }), h.on("error", function(g) {
                                d.onError("xhr poll error", g)
                            }), this.pollXhr = h
                        };

                        function f(h) {
                            this.method = h.method || "GET", this.uri = h.uri, this.xd = !!h.xd, this.xs = !!h.xs, this.async = h.async !== !1, this.data = h.data != null ? h.data : null, this.agent = h.agent, this.isBinary = h.isBinary, this.supportsBinary = h.supportsBinary, this.enablesXDR = h.enablesXDR, this.pfx = h.pfx, this.key = h.key, this.passphrase = h.passphrase, this.cert = h.cert, this.ca = h.ca, this.ciphers = h.ciphers, this.rejectUnauthorized = h.rejectUnauthorized, this.extraHeaders = h.extraHeaders, this.create()
                        }
                        o(f.prototype), f.prototype.create = function() {
                            var h = {
                                agent: this.agent,
                                xdomain: this.xd,
                                xscheme: this.xs,
                                enablesXDR: this.enablesXDR
                            };
                            h.pfx = this.pfx, h.key = this.key, h.passphrase = this.passphrase, h.cert = this.cert, h.ca = this.ca, h.ciphers = this.ciphers, h.rejectUnauthorized = this.rejectUnauthorized;
                            var d = this.xhr = new r(h),
                                g = this;
                            try {
                                l("xhr open %s: %s", this.method, this.uri), d.open(this.method, this.uri, this.async);
                                try {
                                    if (this.extraHeaders) {
                                        d.setDisableHeaderCheck(!0);
                                        for (var w in this.extraHeaders) this.extraHeaders.hasOwnProperty(w) && d.setRequestHeader(w, this.extraHeaders[w])
                                    }
                                } catch {}
                                if (this.supportsBinary && (d.responseType = "arraybuffer"), this.method == "POST") try {
                                    this.isBinary ? d.setRequestHeader("Content-type", "application/octet-stream") : d.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                                } catch {}
                                "withCredentials" in d && (d.withCredentials = !0), this.hasXDR() ? (d.onload = function() {
                                    g.onLoad()
                                }, d.onerror = function() {
                                    g.onError(d.responseText)
                                }) : d.onreadystatechange = function() {
                                    d.readyState == 4 && (d.status == 200 || d.status == 1223 ? g.onLoad() : setTimeout(function() {
                                        g.onError(d.status)
                                    }, 0))
                                }, l("xhr data %s", this.data), d.send(this.data)
                            } catch (x) {
                                setTimeout(function() {
                                    g.onError(x)
                                }, 0);
                                return
                            }
                            i.document && (this.index = f.requestsCount++, f.requests[this.index] = this)
                        }, f.prototype.onSuccess = function() {
                            this.emit("success"), this.cleanup()
                        }, f.prototype.onData = function(h) {
                            this.emit("data", h), this.onSuccess()
                        }, f.prototype.onError = function(h) {
                            this.emit("error", h), this.cleanup(!0)
                        }, f.prototype.cleanup = function(h) {
                            if (!(typeof this.xhr > "u" || this.xhr === null)) {
                                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = u : this.xhr.onreadystatechange = u, h) try {
                                    this.xhr.abort()
                                } catch {}
                                i.document && delete f.requests[this.index], this.xhr = null
                            }
                        }, f.prototype.onLoad = function() {
                            var h;
                            try {
                                var d;
                                try {
                                    d = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                                } catch {}
                                if (d === "application/octet-stream") h = this.xhr.response;
                                else if (!this.supportsBinary) h = this.xhr.responseText;
                                else try {
                                    h = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                                } catch {
                                    for (var g = new Uint8Array(this.xhr.response), w = [], x = 0, R = g.length; x < R; x++) w.push(g[x]);
                                    h = String.fromCharCode.apply(null, w)
                                }
                            } catch (L) {
                                this.onError(L)
                            }
                            h != null && this.onData(h)
                        }, f.prototype.hasXDR = function() {
                            return typeof i.XDomainRequest < "u" && !this.xs && this.enablesXDR
                        }, f.prototype.abort = function() {
                            this.cleanup()
                        }, i.document && (f.requestsCount = 0, f.requests = {}, i.attachEvent ? i.attachEvent("onunload", p) : i.addEventListener && i.addEventListener("beforeunload", p, !1));

                        function p() {
                            for (var h in f.requests) f.requests.hasOwnProperty(h) && f.requests[h].abort()
                        }
                    }).call(this, typeof self < "u" ? self : typeof window < "u" ? window : {})
                }, {
                    "./polling": 17,
                    "component-emitter": 8,
                    "component-inherit": 9,
                    debug: "n9i2g6",
                    "xmlhttprequest-ssl": 19
                }],
                17: [function(t, e, n) {
                    var i = t("../transport"),
                        r = t("parseqs"),
                        s = t("engine.io-parser"),
                        o = t("component-inherit"),
                        a = t("yeast"),
                        l = t("debug")("engine.io-client:polling");
                    e.exports = c;
                    var u = (function() {
                        var f = t("xmlhttprequest-ssl"),
                            p = new f({
                                xdomain: !1
                            });
                        return p.responseType != null
                    })();

                    function c(f) {
                        var p = f && f.forceBase64;
                        (!u || p) && (this.supportsBinary = !1), i.call(this, f)
                    }
                    o(c, i), c.prototype.name = "polling", c.prototype.doOpen = function() {
                        this.poll()
                    }, c.prototype.pause = function(f) {
                        var p = this;
                        this.readyState = "pausing";

                        function h() {
                            l("paused"), p.readyState = "paused", f()
                        }
                        if (this.polling || !this.writable) {
                            var d = 0;
                            this.polling && (l("we are currently polling - waiting to pause"), d++, this.once("pollComplete", function() {
                                l("pre-pause polling complete"), --d || h()
                            })), this.writable || (l("we are currently writing - waiting to pause"), d++, this.once("drain", function() {
                                l("pre-pause writing complete"), --d || h()
                            }))
                        } else h()
                    }, c.prototype.poll = function() {
                        l("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
                    }, c.prototype.onData = function(f) {
                        var p = this;
                        l("polling got data %s", f);
                        var h = function(d, g, w) {
                            if (p.readyState == "opening" && p.onOpen(), d.type == "close") return p.onClose(), !1;
                            p.onPacket(d)
                        };
                        s.decodePayload(f, this.socket.binaryType, h), this.readyState != "closed" && (this.polling = !1, this.emit("pollComplete"), this.readyState == "open" ? this.poll() : l('ignoring poll - transport state "%s"', this.readyState))
                    }, c.prototype.doClose = function() {
                        var f = this;

                        function p() {
                            l("writing close packet"), f.write([{
                                type: "close"
                            }])
                        }
                        this.readyState == "open" ? (l("transport open - closing"), p()) : (l("transport not open - deferring close"), this.once("open", p))
                    }, c.prototype.write = function(f) {
                        var h = this;
                        this.writable = !1;
                        var p = function() {
                                h.writable = !0, h.emit("drain")
                            },
                            h = this;
                        s.encodePayload(f, this.supportsBinary, function(d) {
                            h.doWrite(d, p)
                        })
                    }, c.prototype.uri = function() {
                        var f = this.query || {},
                            p = this.secure ? "https" : "http",
                            h = "";
                        this.timestampRequests !== !1 && (f[this.timestampParam] = a()), !this.supportsBinary && !f.sid && (f.b64 = 1), f = r.encode(f), this.port && (p == "https" && this.port != 443 || p == "http" && this.port != 80) && (h = ":" + this.port), f.length && (f = "?" + f);
                        var d = this.hostname.indexOf(":") !== -1;
                        return p + "://" + (d ? "[" + this.hostname + "]" : this.hostname) + h + this.path + f
                    }
                }, {
                    "../transport": 13,
                    "component-inherit": 9,
                    debug: "n9i2g6",
                    "engine.io-parser": 20,
                    parseqs: 27,
                    "xmlhttprequest-ssl": 19,
                    yeast: 30
                }],
                18: [function(t, e, n) {
                    (function(i) {
                        var r = t("../transport"),
                            s = t("engine.io-parser"),
                            o = t("parseqs"),
                            a = t("component-inherit"),
                            l = t("yeast"),
                            u = t("debug")("engine.io-client:websocket"),
                            c = i.WebSocket || i.MozWebSocket,
                            f = c;
                        if (!f && typeof window > "u") try {
                            f = t("ws")
                        } catch {}
                        e.exports = p;

                        function p(h) {
                            var d = h && h.forceBase64;
                            d && (this.supportsBinary = !1), this.perMessageDeflate = h.perMessageDeflate, r.call(this, h)
                        }
                        a(p, r), p.prototype.name = "websocket", p.prototype.supportsBinary = !0, p.prototype.doOpen = function() {
                            if (this.check()) {
                                var h = this.uri(),
                                    d = void 0,
                                    g = {
                                        agent: this.agent,
                                        perMessageDeflate: this.perMessageDeflate
                                    };
                                g.pfx = this.pfx, g.key = this.key, g.passphrase = this.passphrase, g.cert = this.cert, g.ca = this.ca, g.ciphers = this.ciphers, g.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (g.headers = this.extraHeaders), this.ws = c ? new f(h) : new f(h, d, g), this.ws.binaryType === void 0 && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
                            }
                        }, p.prototype.addEventListeners = function() {
                            var h = this;
                            this.ws.onopen = function() {
                                h.onOpen()
                            }, this.ws.onclose = function() {
                                h.onClose()
                            }, this.ws.onmessage = function(d) {
                                h.onData(d.data)
                            }, this.ws.onerror = function(d) {
                                h.onError("websocket error", d)
                            }
                        }, typeof navigator < "u" && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (p.prototype.onData = function(h) {
                            var d = this;
                            setTimeout(function() {
                                r.prototype.onData.call(d, h)
                            }, 0)
                        }), p.prototype.write = function(h) {
                            var d = this;
                            this.writable = !1;
                            for (var g = h.length, w = 0, x = g; w < x; w++)(function(L) {
                                s.encodePacket(L, d.supportsBinary, function(O) {
                                    if (!c) {
                                        var W = {};
                                        if (L.options && (W.compress = L.options.compress), d.perMessageDeflate) {
                                            var C = typeof O == "string" ? i.Buffer.byteLength(O) : O.length;
                                            C < d.perMessageDeflate.threshold && (W.compress = !1)
                                        }
                                    }
                                    try {
                                        c ? d.ws.send(O) : d.ws.send(O, W)
                                    } catch {
                                        u("websocket closed before onclose event")
                                    }--g || R()
                                })
                            })(h[w]);

                            function R() {
                                d.emit("flush"), setTimeout(function() {
                                    d.writable = !0, d.emit("drain")
                                }, 0)
                            }
                        }, p.prototype.onClose = function() {
                            r.prototype.onClose.call(this)
                        }, p.prototype.doClose = function() {
                            typeof this.ws < "u" && this.ws.close()
                        }, p.prototype.uri = function() {
                            var h = this.query || {},
                                d = this.secure ? "wss" : "ws",
                                g = "";
                            this.port && (d == "wss" && this.port != 443 || d == "ws" && this.port != 80) && (g = ":" + this.port), this.timestampRequests && (h[this.timestampParam] = l()), this.supportsBinary || (h.b64 = 1), h = o.encode(h), h.length && (h = "?" + h);
                            var w = this.hostname.indexOf(":") !== -1;
                            return d + "://" + (w ? "[" + this.hostname + "]" : this.hostname) + g + this.path + h
                        }, p.prototype.check = function() {
                            return !!f && !("__initialize" in f && this.name === p.prototype.name)
                        }
                    }).call(this, typeof self < "u" ? self : typeof window < "u" ? window : {})
                }, {
                    "../transport": 13,
                    "component-inherit": 9,
                    debug: "n9i2g6",
                    "engine.io-parser": 20,
                    parseqs: 27,
                    ws: 7,
                    yeast: 30
                }],
                19: [function(t, e, n) {
                    var i = t("has-cors");
                    e.exports = function(r) {
                        var s = r.xdomain,
                            o = r.xscheme,
                            a = r.enablesXDR;
                        try {
                            if (typeof XMLHttpRequest < "u" && (!s || i)) return new XMLHttpRequest
                        } catch {}
                        try {
                            if (typeof XDomainRequest < "u" && !o && a) return new XDomainRequest
                        } catch {}
                        if (!s) try {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        } catch {}
                    }
                }, {
                    "has-cors": 23
                }],
                20: [function(t, e, n) {
                    (function(i) {
                        var r = t("./keys"),
                            s = t("has-binary"),
                            o = t("arraybuffer.slice"),
                            a = t("base64-arraybuffer"),
                            l = t("after"),
                            u = t("utf8"),
                            c = navigator.userAgent.match(/Android/i),
                            f = /PhantomJS/i.test(navigator.userAgent),
                            p = c || f;
                        n.protocol = 3;
                        var h = n.packets = {
                                open: 0,
                                close: 1,
                                ping: 2,
                                pong: 3,
                                message: 4,
                                upgrade: 5,
                                noop: 6
                            },
                            d = r(h),
                            g = {
                                type: "error",
                                data: "parser error"
                            },
                            w = t("blob");
                        n.encodePacket = function(C, M, D, v) {
                            typeof M == "function" && (v = M, M = !1), typeof D == "function" && (v = D, D = null);
                            var k = C.data === void 0 ? void 0 : C.data.buffer || C.data;
                            if (i.ArrayBuffer && k instanceof ArrayBuffer) return R(C, M, v);
                            if (w && k instanceof i.Blob) return O(C, M, v);
                            if (k && k.base64) return x(C, v);
                            var I = h[C.type];
                            return C.data !== void 0 && (I += D ? u.encode(String(C.data)) : String(C.data)), v("" + I)
                        };

                        function x(C, M) {
                            var D = "b" + n.packets[C.type] + C.data.data;
                            return M(D)
                        }

                        function R(C, M, D) {
                            if (!M) return n.encodeBase64Packet(C, D);
                            var v = C.data,
                                k = new Uint8Array(v),
                                I = new Uint8Array(1 + v.byteLength);
                            I[0] = h[C.type];
                            for (var E = 0; E < k.length; E++) I[E + 1] = k[E];
                            return D(I.buffer)
                        }

                        function L(C, M, D) {
                            if (!M) return n.encodeBase64Packet(C, D);
                            var v = new FileReader;
                            return v.onload = function() {
                                C.data = v.result, n.encodePacket(C, M, !0, D)
                            }, v.readAsArrayBuffer(C.data)
                        }

                        function O(C, M, D) {
                            if (!M) return n.encodeBase64Packet(C, D);
                            if (p) return L(C, M, D);
                            var v = new Uint8Array(1);
                            v[0] = h[C.type];
                            var k = new w([v.buffer, C.data]);
                            return D(k)
                        }
                        n.encodeBase64Packet = function(C, M) {
                            var D = "b" + n.packets[C.type];
                            if (w && C.data instanceof i.Blob) {
                                var v = new FileReader;
                                return v.onload = function() {
                                    var N = v.result.split(",")[1];
                                    M(D + N)
                                }, v.readAsDataURL(C.data)
                            }
                            var k;
                            try {
                                k = String.fromCharCode.apply(null, new Uint8Array(C.data))
                            } catch {
                                for (var I = new Uint8Array(C.data), E = new Array(I.length), S = 0; S < I.length; S++) E[S] = I[S];
                                k = String.fromCharCode.apply(null, E)
                            }
                            return D += i.btoa(k), M(D)
                        }, n.decodePacket = function(C, M, D) {
                            if (typeof C == "string" || C === void 0) {
                                if (C.charAt(0) == "b") return n.decodeBase64Packet(C.substr(1), M);
                                if (D) try {
                                    C = u.decode(C)
                                } catch {
                                    return g
                                }
                                var k = C.charAt(0);
                                return Number(k) != k || !d[k] ? g : C.length > 1 ? {
                                    type: d[k],
                                    data: C.substring(1)
                                } : {
                                    type: d[k]
                                }
                            }
                            var v = new Uint8Array(C),
                                k = v[0],
                                I = o(C, 1);
                            return w && M === "blob" && (I = new w([I])), {
                                type: d[k],
                                data: I
                            }
                        }, n.decodeBase64Packet = function(C, M) {
                            var D = d[C.charAt(0)];
                            if (!i.ArrayBuffer) return {
                                type: D,
                                data: {
                                    base64: !0,
                                    data: C.substr(1)
                                }
                            };
                            var v = a.decode(C.substr(1));
                            return M === "blob" && w && (v = new w([v])), {
                                type: D,
                                data: v
                            }
                        }, n.encodePayload = function(C, M, D) {
                            typeof M == "function" && (D = M, M = null);
                            var v = s(C);
                            if (M && v) return w && !p ? n.encodePayloadAsBlob(C, D) : n.encodePayloadAsArrayBuffer(C, D);
                            if (!C.length) return D("0:");

                            function k(E) {
                                return E.length + ":" + E
                            }

                            function I(E, S) {
                                n.encodePacket(E, v ? M : !1, !0, function(N) {
                                    S(null, k(N))
                                })
                            }
                            W(C, I, function(E, S) {
                                return D(S.join(""))
                            })
                        };

                        function W(C, M, D) {
                            for (var v = new Array(C.length), k = l(C.length, D), I = function(S, N, J) {
                                    M(N, function(Y, K) {
                                        v[S] = K, J(Y, v)
                                    })
                                }, E = 0; E < C.length; E++) I(E, C[E], k)
                        }
                        n.decodePayload = function(C, M, D) {
                            if (typeof C != "string") return n.decodePayloadAsBinary(C, M, D);
                            typeof M == "function" && (D = M, M = null);
                            var v;
                            if (C == "") return D(g, 0, 1);
                            for (var k = "", I, E, S = 0, N = C.length; S < N; S++) {
                                var J = C.charAt(S);
                                if (J != ":") k += J;
                                else {
                                    if (k == "" || k != (I = Number(k)) || (E = C.substr(S + 1, I), k != E.length)) return D(g, 0, 1);
                                    if (E.length) {
                                        if (v = n.decodePacket(E, M, !0), g.type == v.type && g.data == v.data) return D(g, 0, 1);
                                        var Y = D(v, S + I, N);
                                        if (Y === !1) return
                                    }
                                    S += I, k = ""
                                }
                            }
                            if (k != "") return D(g, 0, 1)
                        }, n.encodePayloadAsArrayBuffer = function(C, M) {
                            if (!C.length) return M(new ArrayBuffer(0));

                            function D(v, k) {
                                n.encodePacket(v, !0, !0, function(I) {
                                    return k(null, I)
                                })
                            }
                            W(C, D, function(v, k) {
                                var I = k.reduce(function(N, J) {
                                        var Y;
                                        return typeof J == "string" ? Y = J.length : Y = J.byteLength, N + Y.toString().length + Y + 2
                                    }, 0),
                                    E = new Uint8Array(I),
                                    S = 0;
                                return k.forEach(function(N) {
                                    var J = typeof N == "string",
                                        Y = N;
                                    if (J) {
                                        for (var me = new Uint8Array(N.length), K = 0; K < N.length; K++) me[K] = N.charCodeAt(K);
                                        Y = me.buffer
                                    }
                                    J ? E[S++] = 0 : E[S++] = 1;
                                    for (var le = Y.byteLength.toString(), K = 0; K < le.length; K++) E[S++] = parseInt(le[K]);
                                    E[S++] = 255;
                                    for (var me = new Uint8Array(Y), K = 0; K < me.length; K++) E[S++] = me[K]
                                }), M(E.buffer)
                            })
                        }, n.encodePayloadAsBlob = function(C, M) {
                            function D(v, k) {
                                n.encodePacket(v, !0, !0, function(I) {
                                    var E = new Uint8Array(1);
                                    if (E[0] = 1, typeof I == "string") {
                                        for (var S = new Uint8Array(I.length), N = 0; N < I.length; N++) S[N] = I.charCodeAt(N);
                                        I = S.buffer, E[0] = 0
                                    }
                                    for (var J = I instanceof ArrayBuffer ? I.byteLength : I.size, Y = J.toString(), K = new Uint8Array(Y.length + 1), N = 0; N < Y.length; N++) K[N] = parseInt(Y[N]);
                                    if (K[Y.length] = 255, w) {
                                        var le = new w([E.buffer, K.buffer, I]);
                                        k(null, le)
                                    }
                                })
                            }
                            W(C, D, function(v, k) {
                                return M(new w(k))
                            })
                        }, n.decodePayloadAsBinary = function(C, M, D) {
                            typeof M == "function" && (D = M, M = null);
                            for (var v = C, k = [], I = !1; v.byteLength > 0;) {
                                for (var E = new Uint8Array(v), S = E[0] === 0, N = "", J = 1; E[J] != 255; J++) {
                                    if (N.length > 310) {
                                        I = !0;
                                        break
                                    }
                                    N += E[J]
                                }
                                if (I) return D(g, 0, 1);
                                v = o(v, 2 + N.length), N = parseInt(N);
                                var Y = o(v, 0, N);
                                if (S) try {
                                    Y = String.fromCharCode.apply(null, new Uint8Array(Y))
                                } catch {
                                    var K = new Uint8Array(Y);
                                    Y = "";
                                    for (var J = 0; J < K.length; J++) Y += String.fromCharCode(K[J])
                                }
                                k.push(Y), v = o(v, N)
                            }
                            var le = k.length;
                            k.forEach(function(me, Le) {
                                D(n.decodePacket(me, M, !0), Le, le)
                            })
                        }
                    }).call(this, typeof self < "u" ? self : typeof window < "u" ? window : {})
                }, {
                    "./keys": 21,
                    after: 3,
                    "arraybuffer.slice": 4,
                    "base64-arraybuffer": 5,
                    blob: 6,
                    "has-binary": 22,
                    utf8: 29
                }],
                21: [function(t, e, n) {
                    e.exports = Object.keys || function(r) {
                        var s = [],
                            o = Object.prototype.hasOwnProperty;
                        for (var a in r) o.call(r, a) && s.push(a);
                        return s
                    }
                }, {}],
                22: [function(t, e, n) {
                    (function(i) {
                        var r = t("isarray");
                        e.exports = s;

                        function s(o) {
                            function a(l) {
                                if (!l) return !1;
                                if (i.Buffer && i.Buffer.isBuffer(l) || i.ArrayBuffer && l instanceof ArrayBuffer || i.Blob && l instanceof Blob || i.File && l instanceof File) return !0;
                                if (r(l)) {
                                    for (var u = 0; u < l.length; u++)
                                        if (a(l[u])) return !0
                                } else if (l && typeof l == "object") {
                                    l.toJSON && (l = l.toJSON());
                                    for (var c in l)
                                        if (Object.prototype.hasOwnProperty.call(l, c) && a(l[c])) return !0
                                }
                                return !1
                            }
                            return a(o)
                        }
                    }).call(this, typeof self < "u" ? self : typeof window < "u" ? window : {})
                }, {
                    isarray: 25
                }],
                23: [function(t, e, n) {
                    try {
                        e.exports = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
                    } catch {
                        e.exports = !1
                    }
                }, {}],
                24: [function(t, e, n) {
                    var i = [].indexOf;
                    e.exports = function(r, s) {
                        if (i) return r.indexOf(s);
                        for (var o = 0; o < r.length; ++o)
                            if (r[o] === s) return o;
                        return -1
                    }
                }, {}],
                25: [function(t, e, n) {
                    e.exports = Array.isArray || function(i) {
                        return Object.prototype.toString.call(i) == "[object Array]"
                    }
                }, {}],
                26: [function(t, e, n) {
                    (function(i) {
                        var r = /^[\],:{}\s]*$/,
                            s = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                            o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                            a = /(?:^|:|,)(?:\s*\[)+/g,
                            l = /^\s+/,
                            u = /\s+$/;
                        e.exports = function(f) {
                            if (typeof f != "string" || !f) return null;
                            if (f = f.replace(l, "").replace(u, ""), i.JSON && JSON.parse) return JSON.parse(f);
                            if (r.test(f.replace(s, "@").replace(o, "]").replace(a, ""))) return new Function("return " + f)()
                        }
                    }).call(this, typeof self < "u" ? self : typeof window < "u" ? window : {})
                }, {}],
                27: [function(t, e, n) {
                    n.encode = function(i) {
                        var r = "";
                        for (var s in i) i.hasOwnProperty(s) && (r.length && (r += "&"), r += encodeURIComponent(s) + "=" + encodeURIComponent(i[s]));
                        return r
                    }, n.decode = function(i) {
                        for (var r = {}, s = i.split("&"), o = 0, a = s.length; o < a; o++) {
                            var l = s[o].split("=");
                            r[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
                        }
                        return r
                    }
                }, {}],
                28: [function(t, e, n) {
                    var i = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                    e.exports = function(o) {
                        var a = o,
                            l = o.indexOf("["),
                            u = o.indexOf("]");
                        l != -1 && u != -1 && (o = o.substring(0, l) + o.substring(l, u).replace(/:/g, ";") + o.substring(u, o.length));
                        for (var c = i.exec(o || ""), f = {}, p = 14; p--;) f[r[p]] = c[p] || "";
                        return l != -1 && u != -1 && (f.source = a, f.host = f.host.substring(1, f.host.length - 1).replace(/;/g, ":"), f.authority = f.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), f.ipv6uri = !0), f
                    }
                }, {}],
                29: [function(t, e, n) {
                    (function(i) {
                        (function(r) {
                            var s = typeof n == "object" && n,
                                o = typeof e == "object" && e && e.exports == s && e,
                                a = typeof i == "object" && i;
                            (a.global === a || a.window === a) && (r = a);
                            var l = String.fromCharCode;

                            function u(v) {
                                for (var k = [], I = 0, E = v.length, S, N; I < E;) S = v.charCodeAt(I++), S >= 55296 && S <= 56319 && I < E ? (N = v.charCodeAt(I++), (N & 64512) == 56320 ? k.push(((S & 1023) << 10) + (N & 1023) + 65536) : (k.push(S), I--)) : k.push(S);
                                return k
                            }

                            function c(v) {
                                for (var k = v.length, I = -1, E, S = ""; ++I < k;) E = v[I], E > 65535 && (E -= 65536, S += l(E >>> 10 & 1023 | 55296), E = 56320 | E & 1023), S += l(E);
                                return S
                            }

                            function f(v) {
                                if (v >= 55296 && v <= 57343) throw Error("Lone surrogate U+" + v.toString(16).toUpperCase() + " is not a scalar value")
                            }

                            function p(v, k) {
                                return l(v >> k & 63 | 128)
                            }

                            function h(v) {
                                if ((v & 4294967168) == 0) return l(v);
                                var k = "";
                                return (v & 4294965248) == 0 ? k = l(v >> 6 & 31 | 192) : (v & 4294901760) == 0 ? (f(v), k = l(v >> 12 & 15 | 224), k += p(v, 6)) : (v & 4292870144) == 0 && (k = l(v >> 18 & 7 | 240), k += p(v, 12), k += p(v, 6)), k += l(v & 63 | 128), k
                            }

                            function d(v) {
                                for (var k = u(v), I = k.length, E = -1, S, N = ""; ++E < I;) S = k[E], N += h(S);
                                return N
                            }

                            function g() {
                                if (L >= R) throw Error("Invalid byte index");
                                var v = x[L] & 255;
                                if (L++, (v & 192) == 128) return v & 63;
                                throw Error("Invalid continuation byte")
                            }

                            function w() {
                                var v, k, I, E, S;
                                if (L > R) throw Error("Invalid byte index");
                                if (L == R) return !1;
                                if (v = x[L] & 255, L++, (v & 128) == 0) return v;
                                if ((v & 224) == 192) {
                                    var k = g();
                                    if (S = (v & 31) << 6 | k, S >= 128) return S;
                                    throw Error("Invalid continuation byte")
                                }
                                if ((v & 240) == 224) {
                                    if (k = g(), I = g(), S = (v & 15) << 12 | k << 6 | I, S >= 2048) return f(S), S;
                                    throw Error("Invalid continuation byte")
                                }
                                if ((v & 248) == 240 && (k = g(), I = g(), E = g(), S = (v & 15) << 18 | k << 12 | I << 6 | E, S >= 65536 && S <= 1114111)) return S;
                                throw Error("Invalid UTF-8 detected")
                            }
                            var x, R, L;

                            function O(v) {
                                x = u(v), R = x.length, L = 0;
                                for (var k = [], I;
                                    (I = w()) !== !1;) k.push(I);
                                return c(k)
                            }
                            var W = {
                                version: "2.0.0",
                                encode: d,
                                decode: O
                            };
                            if (s && !s.nodeType)
                                if (o) o.exports = W;
                                else {
                                    var C = {},
                                        M = C.hasOwnProperty;
                                    for (var D in W) M.call(W, D) && (s[D] = W[D])
                                }
                            else r.utf8 = W
                        })(this)
                    }).call(this, typeof self < "u" ? self : typeof window < "u" ? window : {})
                }, {}],
                30: [function(t, e, n) {
                    var i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                        r = 64,
                        s = {},
                        o = 0,
                        a = 0,
                        l;

                    function u(p) {
                        var h = "";
                        do h = i[p % r] + h, p = Math.floor(p / r); while (p > 0);
                        return h
                    }

                    function c(p) {
                        var h = 0;
                        for (a = 0; a < p.length; a++) h = h * r + s[p.charAt(a)];
                        return h
                    }

                    function f() {
                        var p = u(+new Date);
                        return p !== l ? (o = 0, l = p) : p + "." + u(o++)
                    }
                    for (; a < r; a++) s[i[a]] = a;
                    f.encode = u, f.decode = c, e.exports = f
                }, {}]
            }, {}, [10])(10)
        })
    })(), (function(t) {
        var e = {
            EventEmitter: function() {}
        };
        typeof Array.isArray != "function" && (Array.isArray = function(r) {
            return Object.prototype.toString.call(r) === "[object Array]"
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(r) {
            for (var s = 0, o = this.length; s < o; s++)
                if (this[s] === r) return s;
            return -1
        });
        var n = t.EventEmitter = e.EventEmitter,
            i = Array.isArray;
        n.prototype.emit = function(r) {
            var s;
            if (r === "error" && (!this._events || !this._events.error || i(this._events.error) && !this._events.error.length)) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
            if (!this._events) return !1;
            var o = this._events[r];
            if (!o) return !1;
            if (typeof o == "function") {
                switch (arguments.length) {
                    case 1:
                        o.call(this);
                        break;
                    case 2:
                        o.call(this, arguments[1]);
                        break;
                    case 3:
                        o.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        s = Array.prototype.slice.call(arguments, 1), o.apply(this, s)
                }
                return !0
            } else if (i(o)) {
                s = Array.prototype.slice.call(arguments, 1);
                for (var a = o.slice(), l = 0, u = a.length; l < u; l++) a[l].apply(this, s);
                return !0
            } else return !1
        }, n.prototype.addListener = function(r, s) {
            if (typeof s != "function") throw new Error("addListener only takes instances of Function");
            return this._events || (this._events = {}), this._events[r] ? i(this._events[r]) ? this._events[r].push(s) : this._events[r] = [this._events[r], s] : this._events[r] = s, this
        }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(r, s) {
            var o = this;
            o.on(r, function a() {
                o.removeListener(r, a), s.apply(this, arguments)
            })
        }, n.prototype.removeListener = function(r, s) {
            if (typeof s != "function") throw new Error("removeListener only takes instances of Function");
            if (!this._events || !this._events[r]) return this;
            var o = this._events[r];
            if (i(o)) {
                var a = o.indexOf(s);
                if (a < 0) return this;
                o.splice(a, 1), o.length === 0 && delete this._events[r]
            } else this._events[r] === s && delete this._events[r];
            return this
        }, n.prototype.removeAllListeners = function(r) {
            return r ? r && this._events && this._events[r] && (this._events[r] = null) : this._events = {}, this
        }, n.prototype.listeners = function(r) {
            return this._events || (this._events = {}), this._events[r] || (this._events[r] = []), i(this._events[r]) || (this._events[r] = [this._events[r]]), this._events[r]
        }
    })(window), (function(t) {
        var e, n = {
            OPENING: "opening",
            OPEN: "open",
            CLOSING: "closing",
            CLOSED: "closed"
        };

        function i(r, s) {
            if (!s.engineIo) throw new Error("You must specify engineIo");
            if (s.timestampRequests = !0, s.timestampParam = "__t", this.__callbackIndex = 0, this.__callbacks = {}, this.state = n.OPENING, this.socket = new s.engineIo(r, s), this.debug = !1, document.getElementById("tawk__dmz")) {
                var o = this;
                t.getSocketTransport = function() {
                    if (o.socket.transport) return o.socket.transport.name
                }
            }
            document.location && document.location.hash === "#!tawk-debug" && (this.debug = !0), EventEmitter.call(this), this.attachListeners()
        }
        for (e in EventEmitter.prototype) typeof EventEmitter.prototype[e] != "function" || !Object.prototype.hasOwnProperty.call(EventEmitter.prototype, e) || (i.prototype[e] = EventEmitter.prototype[e]);
        i.prototype.attachListeners = function() {
            var r = this;
            this.socket.on("open", function() {
                r.state = n.OPEN, r.emit("connect")
            }), this.socket.on("close", function(s, o) {
                r.emit("disconnect", s, o), r.doClose()
            }), this.socket.on("error", function(s) {
                r.emit("error", s)
            }), this.socket.on("message", function(s) {
                r.onMessage(s)
            })
        }, i.prototype.close = i.prototype.disconnect = function() {
            var r = this;
            this.state === n.OPENING && setTimeout(function() {
                r.close()
            }, 1e3), this.state === n.OPEN && (this.state = n.CLOSING, this.clearCallbacks(), this.socket.close())
        }, i.prototype.doClose = function() {
            this.clearCallbacks(), this.state = n.CLOSED, this.socket.removeAllListeners(), this.removeAllListeners(), this.socket = null
        }, i.prototype.clearCallbacks = function() {
            this.__callbacks = {}
        }, i.prototype.onMessage = function(r) {
            var s = this.decode(r);
            s && (s.c === "__callback__" ? this.executeCallback(s) : this.emit.apply(this, [s.c].concat(s.p)))
        }, i.prototype.executeCallback = function(r) {
            var s = this.__callbacks[r.cb];
            delete this.__callbacks[r.cb], s.apply(null, r.p)
        }, i.prototype.decode = function(r) {
            var s, o;
            this.debug && console && console.log && (data = new Date, "" + data.toUTCString() + r);
            try {
                s = JSON.parse(r)
            } catch (a) {
                this.emit("error", a);
                return
            }
            if (!s.c) {
                this.emit("error", new Error("no command was sent by the server"));
                return
            }
            if (s.c === "error" || s.c === "connect" || s.c === "disconnect") {
                this.emit("error", new Error("server returned reserved command : `" + s.cmd + "`"));
                return
            }
            if (s.p && Object.prototype.toString.call(s.p) !== "[object Array]") {
                this.emit("error", new Error("data is expected to be an array"));
                return
            }
            if (s.c !== "__callback__") return s;
            if (o = parseInt(s.cb, 10), isNaN(o)) {
                this.emit("error", new Error("received callback command but there was no valid callback id(`" + o + "`"));
                return
            }
            if (!this.__callbacks[o]) {
                this.emit("error", new Error("received callback command but callback isnt present (`" + s.cb + "`)"));
                return
            }
            return s.cb = o, s
        }, i.prototype.send = function() {
            var r = this.encode(arguments);
            if (this.debug && console && console.log && (data = new Date, "" + data.toUTCString() + r), this.state !== n.OPEN) {
                this.emit("error", new Error("Socket isnt open its state is `" + this.state + "` tried to send `" + r + "`"));
                return
            }
            r && this.socket.send(r)
        }, i.prototype.encode = function(r) {
            var s = {};
            if (r = Array.prototype.slice.call(r), !r[0]) {
                this.emit("error", new Error("now command specified"));
                return
            }
            s.c = r[0], typeof r[r.length - 1] == "function" && (s.cb = this.enqueuCallback(r.pop())), s.p = r.slice(1);
            var o;
            try {
                o = JSON.stringify(s)
            } catch (a) {
                this.emit("error", a);
                return
            }
            return o
        }, i.prototype.enqueuCallback = function(r) {
            return this.__callbacks[this.__callbackIndex] = r, this.__callbackIndex++
        }, t.$__TawkSocket = i
    })(window)), Ro
}
jd();
class Vd {
    constructor() {
        j(this, "unloading", !1)
    }
    install(e, n) {
        e && e.provide("logger", this)
    }
    reportPerformance(e) {
        at.post("https://va.tawk.to/log-performance/v3", {
            logData: JSON.stringify(e)
        }, {}, n => {
            n && console.error(n)
        }, !1, !0)
    }
    reportIncident() {}
    reportError(e) {
        const n = JSON.stringify(e);
        at.post("https://va.tawk.to/log", n, {}, i => {
            i && console.error("[Tawk/Logger]: Error report sent", i)
        }, !1, !0)
    }
}
const Tn = new Vd,
    qd = "(?:(?:[a-z]+:)?//)?",
    zd = "(?:\\S+(?::\\S*)?@)?",
    Kd = "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)",
    Xd = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",
    Jd = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",
    Gd = "(?::\\d{2,5})?",
    Qd = '(?:[/?#][^\\s"]*)?',
    Yd = [qd, zd, "(?:localhost|" + Kd + Xd + Jd + ")", Gd, Qd].join(""),
    lt = {
        regLineBreaks: /(\r\n|\n|\r)/gm,
        regBr: /<br\/>/,
        regMatchUrl: new RegExp("(?:^" + Yd + "$)", "i"),
        regMatchIp: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?\/([a-zA-Z0-9!$&'()*+.=-_~:@\\/\\?#]+)+)\b/gi,
        regEmailMatch: /^((mailto:){0,1}[a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9\\-])+\.)+([a-zA-Z0-9]+)$/,
        regTelMatch: /^(tel:\+|\+|tel:){1}(?:[0-9\-\(\)\/\.]\s?){6,15}[0-9]{1}\b/gi,
        br: "<br/>",
        getTargetElement(t) {
            let e = t.target;
            return e && e.nodeType === 3 && (e = e.parentNode), e
        },
        formatFileSize(t) {
            const e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                n = parseInt(t, 10);
            if (!n) return "0Bytes";
            for (let i = 1; i < e.length; i++)
                if (n < Math.pow(1024, i)) return Math.round(n / Math.pow(1024, i - 1) * 100) / 100 + e[i - 1];
            return n.toString()
        }
    },
    Mo = {
        getUploadHandler(t, e) {
            at.get(`https://upload.tawk.to/upload/handle?_t=${new Date().getTime()}`, null, null, (n, i) => {
                if (n) return e();
                t(i.handle)
            })
        },
        uploadFile(t, e, n, i) {
            const r = new FormData;
            r.append("upload", n, n.name || n.filename || "file"), at.post(`https://upload.tawk.to/upload/visitor-chat/visitor?handle=${t}&visitorSessionId=${e}`, r, {}, (s, o) => {
                if (s) return i(!0);
                i(o)
            })
        }
    };

function ei() {
    return `t${ts()}`
}
const Zl = function(t) {
    const e = t.map(n => n.then(i => ({
        status: "fulfilled",
        value: i
    })).catch(i => ({
        status: "rejected",
        reason: i
    })));
    return Promise.all(e)
};

function Zd(t) {
    return {
        all: t = t || new Map,
        on: function(e, n) {
            var i = t.get(e);
            i ? i.push(n) : t.set(e, [n])
        },
        off: function(e, n) {
            var i = t.get(e);
            i && (n ? i.splice(i.indexOf(n) >>> 0, 1) : t.set(e, []))
        },
        emit: function(e, n) {
            var i = t.get(e);
            i && i.slice().map(function(r) {
                r(n)
            }), (i = t.get("*")) && i.slice().map(function(r) {
                r(e, n)
            })
        }
    }
}
const Gn = Zd(),
    $e = {
        emit: ((t, e) => Gn.emit(t, e)),
        on: ((t, e) => Gn.on(t, e)),
        off: ((t, e) => Gn.off(t, e)),
        once(t, e) {
            const n = (...i) => {
                Gn.off(t, n), e(i[0])
            };
            Gn.on(t, n)
        },
        install(t) {
            t && t.provide("emitter", this)
        }
    },
    Pe = vt("browserData", () => {
        const t = _(!1),
            e = _(null),
            n = _(null),
            i = _(null),
            r = _(null),
            s = _(null),
            o = _(!0),
            a = _(null);

        function l(f) {
            r.value = f.vendor, s.value = String(f.version), t.value = f.isIE, n.value = f.mobileBrowserName || null, e.value = f.html5audio, i.value = f.searchEngine, o.value = f.isWebRTCAvailable, a.value = f.os
        }

        function u(f) {
            n.value = f
        }

        function c() {
            t.value = !1, e.value = null, n.value = null, i.value = null, r.value = null, s.value = null, o.value = !0, a.value = null
        }
        return {
            isIE: t,
            html5audio: e,
            mobileBrowserName: n,
            searchEngine: i,
            vendor: r,
            version: s,
            isWebRTCAvailable: o,
            os: a,
            updateInitialData: l,
            updateMobileBrowserName: u,
            resetState: c
        }
    });
class eh {
    constructor() {
        j(this, "incomingMessage");
        j(this, "audioContext");
        j(this, "isReadyForInit");
        j(this, "touchstartInited");
        j(this, "TawkWindow");
        j(this, "soundFile");
        this.incomingMessage = null, this.audioContext = null, this.isReadyForInit = !1, this.touchstartInited = !1, this.TawkWindow = null, this.soundFile = "https://embed.tawk.to/_s/v4/assets/audio/chat_sound.mp3"
    }
    install(e, {
        TawkWindow: n
    }) {
        e && e.provide("audioPlayer", this), this.TawkWindow = n
    }
    init() {
        let e;
        const n = Pe().html5audio;
        !n || !n.supported || (!this.audioContext && !/Firefox/.test(navigator.userAgent) && typeof AudioBuffer < "u" && (window.AudioContext !== void 0 || window.webkitAudioContext !== void 0) && (window.AudioContext = window.AudioContext || window.webkitAudioContext, this.audioContext = new window.AudioContext), this.audioContext ? this.incomingMessage = this.audioContextPlayer() : this.incomingMessage = this.htmlAudioPlayer(), this.audioContext && (e = () => {
            var i;
            if (this.isReadyForInit && !this.touchstartInited) {
                const r = this.incomingMessage;
                r.volume = 0, r.play(), (i = r.source) == null || i.stop(0), r.volume = 1, window && typeof window.removeEventListener == "function" && window.removeEventListener("touchstart", e), this.touchstartInited = !0
            }
        }, Pe().mobileBrowserName && "ontouchstart" in window && window.addEventListener("touchstart", e, {
            passive: !0
        })))
    }
    playSound() {
        ae.local_API.disableSound || z().isSoundEnabled && z().localSoundEnabled && this.incomingMessage && this.incomingMessage.play()
    }
    audioContextPlayer() {
        const e = {
            sourcePath: this.soundFile,
            buffer: null,
            source: null,
            volume: 1,
            play: () => {
                if (e.buffer) {
                    const n = this.audioContext.createGain();
                    n.gain.value = e.volume, e.source = this.audioContext.createBufferSource(), e.source.buffer = e.buffer, e.source.connect(n), n.connect(this.audioContext.destination), e.source.start(0)
                }
            },
            loadBuffer: () => {
                const n = new XMLHttpRequest;
                n.open("GET", e.sourcePath, !0), n.responseType = "arraybuffer", n.onload = () => {
                    this.audioContext.decodeAudioData(n.response, i => {
                        i && (e.buffer = i, this.isReadyForInit || (this.isReadyForInit = !0))
                    }, i => {
                        throw new Error(i.message)
                    })
                }, n.onerror = () => {
                    throw new Error("BufferLoader: XHR error for " + e.sourcePath)
                }, n.send()
            }
        };
        return e.loadBuffer(), e
    }
    htmlAudioPlayer() {
        const e = {
            play: () => {}
        };
        return Pe().mobileBrowserName === "symbian" || (Pe().mobileBrowserName === "safari" ? (e.sound = document.createElement("audio"), e.sound.src = this.soundFile, e.sound.style.cssText = "position: absolute; width: 0px; height: 0px; top: -10000px; left: -10000px;", document.body.appendChild(e.sound)) : e.sound = new Audio(this.soundFile), e.sound.addEventListener("timeupdate", () => {
            e.sound && e.sound.currentTime >= .2 && e.sound.pause()
        }, !1), e.sound.load(), e.play = () => {
            try {
                e.sound && (e.sound.currentTime = 0, e.sound.autoplay = !0, e.sound.load(), e.sound.play())
            } catch {}
        }), e
    }
}
const yi = new eh,
    Fe = vt("schedule", () => {
        const t = _(!1),
            e = _([]),
            n = _(null);

        function i(o) {
            let a = [];
            if (o && typeof o.enabled < "u" ? t.value = !!o.enabled : t.value = !!o, !t.value) {
                e.value = [];
                return
            }
            const l = o.config ? o.config.schedule : [];
            Array.isArray(l) ? a = l : Object.keys(l).forEach(function(u) {
                const c = l[u];
                c.start === 0 && c.end === 0 || a.push({
                    day: parseInt(u, 10),
                    start: Math.floor(c.start / 6e4),
                    end: Math.floor(c.end / 6e4)
                })
            }), e.value = a
        }

        function r(o) {
            o ? n.value = {
                tzo: o.tzo !== void 0 ? o.tzo : o.offset,
                utc: o.utc
            } : n.value = null
        }

        function s() {
            t.value = !1, e.value = [], n.value = null
        }
        return {
            isEnabled: t,
            slots: e,
            timezone: n,
            addSlots: i,
            updateTimezone: r,
            resetState: s
        }
    });
let Un = null;

function th(t) {
    Un = t
}

function vn() {
    return Un
}

function eu() {
    return !!(Un && !Un.closed)
}

function tu() {
    return !eu() || typeof Un.focus != "function" ? !1 : (Un.focus(), !0)
}
const nu = vt("overlay", () => {
        const t = _(!1);

        function e(i) {
            t.value !== i && (t.value = i)
        }

        function n() {
            t.value = !1
        }
        return {
            isOpen: t,
            updateOverlay: e,
            resetState: n
        }
    }),
    nh = 15,
    ih = new Set(["/", "chat", "prechat"]),
    Di = () => ({
        current: "/",
        history: [],
        routes: []
    }),
    ln = vt("router", () => {
        const t = _(Di().current),
            e = _(Di().history),
            n = _(Di().routes),
            i = ee(() => t.value === "/"),
            r = ee(() => n.value.find(x => x.path === t.value) ? ? null),
            s = ee(() => x => n.value.find(R => R.path === x)),
            o = ee(() => e.value);

        function a(x) {
            if (!n.value.some(R => R.path === x)) throw new Error(`Unrecognised route: ${x}`);
            t.value !== x && (t.value = x, d(x))
        }

        function l() {
            g(), w()
        }

        function u(x) {
            n.value = x
        }

        function c(x) {
            const R = n.value.find(L => L.path === x.path);
            R && typeof x.hasBack < "u" && (R.hasBack = x.hasBack)
        }

        function f() {
            e.value = []
        }

        function p(x) {
            const R = e.value.indexOf(x);
            R !== -1 && e.value.splice(R, 1)
        }

        function h() {
            const x = Di();
            t.value = x.current, e.value = x.history, n.value = x.routes
        }

        function d(x) {
            e.value.length >= nh && e.value.splice(0, 1), e.value.push(x)
        }

        function g() {
            e.value.pop();
            const x = e.value[e.value.length - 1];
            t.value = x ? ? "/"
        }

        function w() {
            (ih.has(t.value) || e.value.length === 0) && nu().updateOverlay(!1)
        }
        return {
            current: t,
            history: e,
            routes: n,
            isHome: i,
            getCurrentView: r,
            getRoute: s,
            getHistory: o,
            routerPush: a,
            routerBack: l,
            addRoutes: u,
            updateRoute: c,
            clearHistory: f,
            removeFromHistory: p,
            resetState: h
        }
    }),
    Q = vt("session", () => {
        const t = _(!1),
            e = _("min"),
            n = _([]),
            i = _(!1),
            r = _(!1),
            s = _(""),
            o = _(0),
            a = _(!1),
            l = _(null),
            u = _(!1),
            c = _(""),
            f = _(""),
            p = _(6e4),
            h = _(0),
            d = _(null),
            g = _(0),
            w = _(null),
            x = _(null),
            R = _(null),
            L = _(null),
            O = _(!1),
            W = _(!1),
            C = _(!1),
            M = _(null),
            D = _(null),
            v = _("US"),
            k = _(null);

        function I(b) {
            t.value = !0, b || we.publish("notifyChatBubbleClosed")
        }

        function E() {
            pe.sessionStore().getItem("previousNav") !== window.location.href && setTimeout(function() {
                const P = {
                    u: window.location.href,
                    t: document.title
                };
                x.value !== null && (P.t = x.value), document.referrer && R.value !== document.referrer && (R.value = document.referrer, P.r = document.referrer), we.publish("nav", P), pe.sessionStore().setItem("previousNav", P.u)
            }, 500)
        }

        function S(b) {
            b !== s.value && ae.triggerApiHandlers("onStatusChange", b)
        }

        function N({
            data: b,
            status: P
        }) {
            const B = Fe(),
                q = z();
            if (!B.isEnabled && typeof q.agentDrivenStatus < "u" && q.agentDrivenStatus === !1) {
                S("online"), s.value = "online", b && Object.keys(b).length && b.dptst && Array.isArray(b.dptst) && (n.value = b.dptst);
                return
            }
            if (b && Object.keys(b).length) {
                const V = b.ast;
                if (!V || !be.isString(V) || b.dptst && !Array.isArray(b.dptst)) return;
                (b.asver > o.value || b.asver === 0) && (kt.originalPageStatus = b.ast, o.value = b.asver, n.value = b.dptst, B.isEnabled || (S(b.ast), s.value = b.ast), kt.calculate());
                return
            }
            P && (S(P), s.value = P)
        }

        function J() {
            z().isWindowed ? window.close() : e.value === "min" ? (K("max"), te().setSeenAllUnseenMessages()) : K("min")
        }

        function Y(b) {
            e.value = b
        }

        function K(b) {
            if (b === "max" && eu()) {
                tu();
                return
            }
            if (e.value === b) return;
            Y(b);
            const P = z();
            b === "max" && P.onClick === "pop" || (b === "max" ? ae.triggerApiHandlers("onChatMaximized") : b === "min" && ae.triggerApiHandlers("onChatMinimized"), we.publish("notifyWindowState", b))
        }

        function le(b) {
            typeof b.vss !== void 0 && (f.value = b.vss), typeof b.sk !== void 0 && (c.value && c.value !== b.sk && (pe.sessionStore().setItem("previousNav", null), ln().routerPush("/")), c.value = b.sk)
        }

        function me(b) {
            r.value = b
        }

        function Le(b) {
            a.value = b
        }

        function ke(b) {
            l.value = b
        }

        function Ce(b) {
            i.value = b
        }

        function Me(b) {
            const P = new Date;
            P.setSeconds(b.expiry), b.token ? (d.value = b.token, Be.storeToken(b.token)) : d.value = Be.getStoredToken(), g.value = P.getTime()
        }
        async function ft() {
            return new Promise((b, P) => {
                Be.TawkWindow.register.init(B => {
                    Me({
                        token: B.data.tkn,
                        expiry: B.data.tknExp
                    }), b(void 0)
                }, P)
            })
        }

        function je(b) {
            h.value = b, we.publish("visitorChatSeen", {
                timestamp: b
            }, function() {})
        }

        function tt() {
            L.value && clearTimeout(L.value), t.value = !1, e.value = "min", n.value = [], i.value = !1, r.value = !1, o.value = 0, a.value = !1, l.value = null, u.value = !1, c.value = "", f.value = "", p.value = 6e4, h.value = 0, d.value = null, g.value = 0, w.value = null, x.value = null, R.value = null, L.value = null, O.value = !1, W.value = !1, C.value = !1, M.value = null, D.value = null, v.value = "US", k.value = null
        }

        function dt(b) {
            p.value = b
        }

        function Je() {
            L.value && clearTimeout(L.value), !(p.value <= 6e4) && (O.value ? (p.value = p.value - 6e4, L.value = setTimeout(() => {
                Je()
            }, 6e4)) : (O.value = !0, L.value = setTimeout(() => {
                Je()
            }, 6e4)))
        }

        function nt() {
            W.value || (W.value = !0, Je())
        }
        async function ht() {
            new Date().getTime() >= g.value && await ft()
        }

        function Gt(b) {
            C.value = !!b
        }

        function m(b) {
            v.value = b || "US"
        }

        function y(b) {
            k.value = b || null
        }

        function A(b) {
            w.value = b, pe.sessionStore().setItem("previousNav", null)
        }
        return {
            chatBubbleClosed: t,
            chatWindowState: e,
            departments: n,
            isWindowFocused: i,
            needConsent: r,
            pageStatus: s,
            pageStatusVersion: o,
            prechatFormSubmitted: a,
            previousSessionKey: l,
            restarted: u,
            sessionKey: c,
            visitorSocketServer: f,
            waitTime: p,
            lastMessageTimestamp: h,
            token: d,
            tokenExpiry: g,
            isInactive: w,
            originalPageTitle: x,
            pageReferrer: R,
            waitTimeTimeout: L,
            waitTimeFirstTime: O,
            waitTimeInitialized: W,
            isReconnecting: C,
            isNotValidEmail: M,
            isNotValidPhone: D,
            countryCode: v,
            regionalCode: k,
            closeChatBubble: I,
            sendNavigationEvent: E,
            setPageStatus: N,
            toggleWidget: J,
            setChatWindowState: Y,
            updateChatWindowState: K,
            updateConnectionData: le,
            updateConsentFlag: me,
            updatePrechatSubmitted: Le,
            updatePreviousSessionKey: ke,
            updateIsWindowFocused: Ce,
            updateToken: Me,
            retrieveNewToken: ft,
            updateVisitorChatSeen: je,
            resetState: tt,
            updateWaitTime: dt,
            addWaitTime: nt,
            waitTimeUpdater: Je,
            checkTokenValidity: ht,
            reconnectSession: Gt,
            triggerPageStatusAPI: S,
            setCountryCode: m,
            setRegionalCode: y,
            setIsInactive: A
        }
    });
class rh {
    constructor() {
        j(this, "setupTimeout", null);
        j(this, "agentCountSubscription", null);
        j(this, "originalPageStatus", null);
        j(this, "utcOffset", 0);
        j(this, "isSetup", !1);
        j(this, "agentCountListener", null);
        j(this, "isCleanedUp", !1);
        j(this, "TawkWindow", null);
        j(this, "initial")
    }
    install(e, {
        TawkWindow: n
    }) {
        e && e.provide("scheduler", this), this.TawkWindow = n
    }
    setup() {
        this.clear(), this.isCleanedUp = !1, this.originalPageStatus === null && (this.originalPageStatus = Q().pageStatus), Fe().isEnabled ? (this.utcOffset = (new Date().getTime() - Fe().timezone.utc) * -1, this.isSetup = !0, this.calculate()) : Q().setPageStatus({
            status: this.originalPageStatus
        })
    }
    clear() {
        clearTimeout(this.setupTimeout), this.setupTimeout = null
    }
    cleanUp() {
        this.clear(), this.originalPageStatus = null, this.isSetup = !1, this.unwatchAgentCount(), this.isCleanedUp = !0
    }
    calculate() {
        if (this.clear(), this.isCleanedUp) return this.setup();
        if (!this.isSetup || !Fe().isEnabled) {
            Q().setPageStatus({
                status: this.originalPageStatus
            });
            return
        }
        const e = Fe().slots;
        if (e.length === 0) {
            this.goOffline();
            return
        }
        let n, i, r;
        const s = new Date,
            o = s.getTimezoneOffset() * -6e4,
            a = Fe().timezone.tzo - o,
            l = new Date(s.getTime() + this.utcOffset + a),
            u = l.getDay(),
            c = l.getHours() * 60 + l.getMinutes(),
            f = c * 60 + l.getSeconds();
        for (let p = 0; p < e.length; p++) {
            const h = e[p];
            if (h.day === u) {
                if (c >= h.start && c < h.end) {
                    n = h;
                    break
                }
                if (c < h.start) {
                    i = h;
                    break
                }
            }
        }
        n !== void 0 ? (this.goOnline(), r = n.end * 60 - f) : (this.goOffline(), i !== void 0 ? r = i.start * 60 - f : r = 86400 - f + 1), r !== void 0 && (this.setupTimeout = setTimeout(() => {
            this.calculate()
        }, r * 1e3))
    }
    goOnline() {
        this.unwatchAgentCount(), z().agentDrivenStatus || Q().setPageStatus({
            status: "online"
        }), this.originalPageStatus && (Q().setPageStatus({
            status: this.originalPageStatus
        }), this.initial = !1)
    }
    goOffline() {
        te().agentsCount === 0 && Q().setPageStatus({
            status: "offline"
        }), this.agentCountListener = xt(() => te().agentsCount, e => {
            e === 0 && Q().setPageStatus({
                status: "offline"
            })
        })
    }
    unwatchAgentCount() {
        typeof this.agentCountListener == "function" && (this.agentCountListener(), this.agentCountListener = null)
    }
    hasScheduleToday() {
        const e = Fe().slots,
            n = new Date,
            i = n.getTimezoneOffset() * -6e4,
            r = Fe().timezone.tzo - i,
            o = new Date(n.getTime() + this.utcOffset + r).getDay();
        for (let a = 0; a < e.length; a++)
            if (e[a].day === o) return !0;
        return !1
    }
    hasCurrentTimePassedSchedule() {
        const e = Fe().slots,
            n = new Date,
            i = n.getTimezoneOffset() * -6e4,
            r = Fe().timezone.tzo - i,
            s = new Date(n.getTime() + this.utcOffset + r),
            o = s.getDay(),
            a = s.getHours() * 60 + s.getMinutes();
        for (let l = 0; l < e.length; l++) {
            const u = e[l];
            if (u.day === o && a >= u.start && a < u.end) return !1
        }
        return !0
    }
}
const kt = new rh;

function No() {
    return {
        buffer: [],
        department: "any",
        endVersion: 1,
        history: [],
        id: null,
        order: 0,
        version: 0,
        unreadMessage: 0,
        synced: !1,
        messages: {},
        unseenMessages: [],
        historyProcessed: !1,
        endedChats: [],
        lastMessage: {}
    }
}

function Fo() {
    return {
        refs: {},
        ticket: {
            id: null,
            hasSubmitted: !1
        },
        lead: {
            id: null,
            hasSubmitted: !1
        }
    }
}
const te = vt("chat", () => {
    const t = _({}),
        e = _(0),
        n = _([]),
        i = _(No()),
        r = _({}),
        s = _(null),
        o = _(null),
        a = _({}),
        l = _({
            data: null,
            version: null
        }),
        u = _(!1),
        c = _(null),
        f = _(!1),
        p = _([]),
        h = _(!1),
        d = _(!1),
        g = _(!1),
        w = _([]),
        x = _(null),
        R = _(null),
        L = _(!1),
        O = _(Fo()),
        W = ee(() => !!(!g.value && h.value && e.value > 0)),
        C = ee(() => !!(!g.value && h.value)),
        M = ee(() => T => {
            const Z = t.value[T];
            return Z && Z.profileId && r.value[Z.profileId] || null
        }),
        D = ee(() => T => a.value[T]);

    function v(T) {
        o.value = T, L.value = !1, Object.keys(i.value.lastMessage).length === 0 && !L.value && (L.value = !0)
    }

    function k(T) {
        R.value = T
    }

    function I(T) {
        h.value = T
    }

    function E(T) {
        d.value = T
    }

    function S(T) {
        s.value = T
    }

    function N(T) {
        c.value = T
    }

    function J(T) {
        l.value.data = T
    }

    function Y(T) {
        w.value.push(T)
    }

    function K(T) {
        const Z = w.value.findIndex(ie => ie.uuid === T);
        Z !== -1 && w.value.splice(Z, 1)
    }

    function le(T) {
        O.value.refs[T.id] = T.done
    }

    function me(T) {
        i.value.history = T
    }

    function Le(T) {
        i.value.id = T
    }

    function ke(T) {
        x.value = T
    }

    function Ce(T) {
        f.value = T, g.value = !T
    }

    function Me(T) {
        O.value.ticket.hasSubmitted = T
    }

    function ft(T) {
        O.value.lead.hasSubmitted = T
    }

    function je(T) {
        T = T || {};
        const Z = T.cver || 0,
            ie = T.c || [];
        if (i.value.synced = !0, !(i.value.version >= Z)) {
            for (let oe = 0, ge = i.value.buffer.length; oe < ge; oe++) i.value.buffer[oe].cver > Z && ie.push(i.value.buffer[oe]);
            for (let oe = 0, ge = ie.length; oe < ge; oe++) {
                const Te = ie[oe];
                if (!Te.md || !Te.md.ao) {
                    const Ve = ze.parseChatMessage(Te, !0);
                    Ve && setTimeout(() => {
                        yi.playSound(), v(Ve), i.value.version = T.cver, ne(Ve)
                    }, 50)
                }
            }
            h.value && !d.value && z().showEstimatedWaitTime && Q().addWaitTime(), i.value.version = Z
        }
    }

    function tt(T) {
        e.value += T
    }

    function dt(T) {
        i.value.version = T
    }

    function Je(T) {
        i.value.department = T
    }

    function nt(T) {
        if (Q().pageStatus === "offline")
            if (T.ut === "a") Q().setPageStatus({
                status: "online"
            });
            else return;
        if (T.cver > i.value.version) {
            if (T.md && T.md.ao) {
                i.value.version = T.cver;
                return
            }
            const Z = ze.parseChatMessage(T, !0);
            Z && (yi.playSound(), v(Z), i.value.version = T.cver, ne(Z))
        }
    }

    function ht(T) {
        T && T.cver > i.value.version && (i.value.version = T.cver, ne(T))
    }

    function Gt(T) {
        let Z;
        const ie = r.value[T.profileData.profileId];
        for (let oe = 0; oe < n.value.length; oe++)
            if (n.value[oe].profileId === T.profileData.profileId) {
                Z = n.value[oe];
                break
            }
        Z ? (Z.count = (Z.count || 0) + 1, Z.profileImage !== T.profileData.profileImage && (Z.profileImage = T.profileData.profileImage, ie && (ie.profileImage = T.profileData.profileImage))) : n.value.push(T.profileData), ie || (r.value[T.profileData.profileId] = T.profileData), t.value[T.resourceId] = {
            profileId: T.agentData.pid,
            seq: T.agentData.seq,
            joined: !0
        }, tt(1)
    }

    function m(T) {
        const Z = M.value(T.resourceId);
        if (Z && Z.profileId) {
            let ie = 1;
            for (let oe = 0; oe < n.value.length; oe++)
                if (n.value[oe].profileId === Z.profileId) {
                    const ge = n.value[oe];
                    ie = ge.count || 1, --ie < 1 ? n.value.splice(oe, 1) : ge.count = ie;
                    break
                }
            T.agentData.pid = Z.profileId, t.value[T.resourceId] = {
                profileId: T.agentData.pid,
                seq: T.agentData.seq,
                joined: !1
            }, tt(-1)
        }
    }

    function y() {
        let T, Z, ie, oe, ge = 0;
        const Te = i.value.history;
        let Ve = 0;
        for (i.value.endVersion = 0, T = 0, Z = Te.length; T < Z; T++) Te[T].m === "CHAT_ENDED" && (se(Te.slice(Ve, T + 1)), ge = T + 1, i.value.endVersion += 1, Ve = T);
        const Ne = i.value.order > 0 ? i.value.messages[i.value.order] : null;
        for (T = ge, Z = Te.length; T < Z; T++)
            if (ie = Te[T], !ie.md || ie.md && !ie.md.ao) {
                if (Ne && Ne.timeStamp !== void 0 && Ne.timeStamp >= new Date(ie.co).getTime()) continue;
                ie.ut === "v" && !h.value && ie.t === "c" && (oe = new Date().getTime() - new Date(ie.co).getTime());
                const it = ze.parseChatMessage(ie);
                it && (setTimeout(function() {
                    v(it)
                }), ne(it))
            }
        if (h.value && !d.value && z().showEstimatedWaitTime) {
            const it = Q();
            it.waitTime < (oe || 0) ? it.waitTime = 6e4 : it.waitTime = it.waitTime - (oe || 0), it.addWaitTime()
        }
        f.value = h.value || d.value, g.value = !!i.value.endVersion && !f.value, i.value.historyProcessed = !0
    }

    function A(T) {
        i.value.unseenMessages.push(T), i.value.unreadMessage += 1
    }

    function b() {
        i.value.unseenMessages = [], i.value.unreadMessage = 0
    }

    function P() {
        n.value = [], r.value = {}, t.value = {}, e.value = 0
    }

    function B(T) {
        T = T || function() {}, we.publish("endVisitorChat", (Z, ie) => {
            if (Z) {
                T(!0);
                return
            }
            const oe = Object.keys(i.value.messages),
                ge = [];
            for (let Te = 0; Te < oe.length; Te++) {
                const Ve = Number(oe[Te]);
                ge.push(i.value.messages[Ve].rawMessage)
            }
            ge.push({
                m: "CHAT_ENDED",
                t: "n",
                co: new Date
            }), i.value.endVersion = ie.chatEndVersion, i.value.messages = {}, i.value.lastMessage = {}, f.value = !1, g.value = !0, i.value.order = 0, se(ge), Le(ie.nextChatId), P(), z().isEmbedded || Q().toggleWidget(), G(), ae.triggerApiHandlers("onChatEnded"), T()
        })
    }

    function q(T) {
        const Z = Object.keys(i.value.messages),
            ie = [];
        for (let ge = 0; ge < Z.length; ge++) {
            const Te = Number(Z[ge]);
            ie.push(i.value.messages[Te].rawMessage)
        }
        ie.push({
            m: "CHAT_ENDED",
            t: "n",
            co: T.co || new Date
        }), i.value.endVersion += 1, i.value.messages = {}, i.value.lastMessage = {}, f.value = !1, g.value = !0, i.value.order = 0, se(ie);
        const oe = T.md;
        oe && oe.nci && Le(oe.nci), P(), z().isEmbedded || Q().toggleWidget(), G(), ae.triggerApiHandlers("onChatEnded")
    }

    function V(T) {
        a.value[T.callId] = T;
        for (const Z in i.value.messages)
            if (i.value.messages[Z].callId === T.callId) {
                i.value.messages[Z].callData = T;
                break
            }
    }

    function U({
        transfer: T,
        transferVersion: Z
    }) {
        Z > (l.value.version || 0) && (l.value.data = T, l.value.version = Z)
    }

    function H(T) {
        T && (i.value.order += 1, i.value.messages[i.value.order] = T)
    }

    function re(T) {
        p.value.push(T)
    }

    function G() {
        p.value = []
    }

    function ne(T) {
        i.value.order += 1, i.value.messages[i.value.order] = T, (T.type === "c" || T.callData) && (i.value.lastMessage = T), T.type === "c" && T.senderType !== "s" && !f.value && Fe().isEnabled && kt.hasScheduleToday() && kt.hasCurrentTimePassedSchedule() && We().id === "603e2c2c1c1c2a130d63fd5a" && Tn.reportError({
            incident: "Sending chat message while offline",
            data: {
                currentTime: new Date,
                timezone: new Date().getTimezoneOffset(),
                userAgent: window.navigator.userAgent
            },
            state: {
                schedule: {
                    isEnabled: Fe().isEnabled,
                    slots: Fe().slots,
                    timeZone: Fe().timezone
                },
                session: {
                    pageStatus: Q().pageStatus
                },
                widget: {
                    id: z().id
                },
                visitor: {
                    id: qt().visitorId
                }
            }
        }), T.type === "c" && T.senderType !== "s" && !f.value && Q().pageStatus !== "offline" && (Ce(!0), ae.triggerApiHandlers("onChatStarted", {
            chatId: i.value.id
        }))
    }

    function se(T) {
        const Z = [],
            ie = [];
        let oe;
        const ge = i.value.id;
        let Te;
        for (let Ve = 0; Ve < T.length; Ve++) {
            const Ne = T[Ve];
            if (Ne.t === "c") {
                Te = Ne.m;
                continue
            }
            if (Ne.t === "n" && Ne.m === "AGENT_JOIN_CONVERSATION" && Ne.md) {
                const it = Ne.md;
                Z.push({
                    displayName: be.rawDecode(Ne.n),
                    profileId: it.pid,
                    profileImage: it.pi,
                    profileTitle: be.rawDecode(it.pst)
                }), ie.indexOf(Ne.uid) === -1 && ie.push(Ne.uid);
                continue
            }
            Ne.m === "CHAT_ENDED" && (oe = Ne.co)
        }
        i.value.endedChats.unshift({
            id: ge + String(i.value.endedChats.length),
            agentAliases: Z,
            agentIds: ie,
            snippet: Te,
            messages: T,
            endedOn: oe,
            isTemp: !0
        })
    }

    function he(T) {
        u.value = T
    }

    function Se(T) {
        O.value.ticket.id = T
    }

    function X(T) {
        O.value.lead.id = T
    }

    function de() {
        if (i.value.unseenMessages.length > 0) {
            const T = Object.keys(i.value.messages).length,
                Z = i.value.messages[T];
            Z && Z.timeStamp && (Q().updateVisitorChatSeen(Z.timeStamp), b(), ae.triggerApiHandlers("onUnreadCountChanged", i.value.unreadMessage))
        }
    }

    function ve() {
        t.value = {}, e.value = 0, n.value = [], i.value = No(), r.value = {}, s.value = null, o.value = null, a.value = {}, l.value = {
            data: null,
            version: null
        }, u.value = !1, c.value = null, f.value = !1, p.value = [], h.value = !1, d.value = !1, g.value = !1, w.value = [], x.value = null, R.value = null, L.value = !1, O.value = Fo()
    }
    return {
        agents: t,
        agentsCount: e,
        activeProfiles: n,
        chat: i,
        allProfiles: r,
        rating: s,
        incomingMessage: o,
        calls: a,
        chatTransfer: l,
        ongoingCall: u,
        incomingCall: c,
        hasChatStarted: f,
        messageBlocks: p,
        visitorHasMessaged: h,
        agentHasMessaged: d,
        hasChatEnded: g,
        uploadFiles: w,
        lastScrollPositon: x,
        outgoingMessage: R,
        firstIncoming: L,
        form: O,
        isChatOngoing: W,
        isVisitorEngaged: C,
        agentProfile: M,
        callData: D,
        setIncomingMessage: v,
        setOutgoingMessage: k,
        setVisitorHasMessaged: I,
        setAgentHasMessaged: E,
        setRating: S,
        setIncomingCall: N,
        setChatTransferData: J,
        addFileUpload: Y,
        removeFileUpload: K,
        setFormRefs: le,
        setHistoryMessages: me,
        setChatId: Le,
        setLastScrollPosition: ke,
        setChatHasStarted: Ce,
        setTicketFormSubmit: Me,
        setLeadFormSubmit: ft,
        updateConversation: je,
        updateAgentCount: tt,
        updateVersion: dt,
        updateDepartment: Je,
        incomingChatMessage: nt,
        outgoingChatMessage: ht,
        agentJoined: Gt,
        agentLeft: m,
        setPreviousMessages: y,
        updateUnseenMessages: A,
        clearUnseenMessages: b,
        clearProfiles: P,
        endChat: B,
        handleIncomingChatEnd: q,
        updateCallData: V,
        updateChatTransferData: U,
        updateRatingMessage: H,
        addMessageBlock: re,
        clearMessageBlock: G,
        updateChatMessage: ne,
        processEndedChat: se,
        updateOngoingCall: he,
        setTicketFormID: Se,
        setLeadFormID: X,
        setSeenAllUnseenMessages: de,
        resetState: ve
    }
});
class sh {
    constructor() {
        j(this, "keyDownTimeout", null);
        j(this, "webrtcWin", null);
        j(this, "maxNumberFileUpload", 5);
        j(this, "maxSizeFileUpload", 50 * 1024 * 1024);
        j(this, "regSurvey", /\[option\](.*?)(<br\/>|$)/gm);
        j(this, "regSurveyQuestion", /^(.*?)\[option\]/s);
        j(this, "regOption", /\[option\]/g);
        j(this, "TawkWindow", null)
    }
    install(e, {
        TawkWindow: n
    }) {
        e && e.provide("chatManager", this), this.TawkWindow = n
    }
    processHistoryMessages(e) {
        const n = [],
            i = {};
        let r = null,
            s = !1,
            o = !1,
            a = !1;
        for (let l = 0; l < e.length; l++) {
            let u, c, f, p = !1,
                h = null;
            const d = e[l],
                g = ei(),
                w = new Date(d.co).getTime();
            let x = {};
            if (d.m === "WEBRTC_CALL" && d.md && d.md.webrtc && (p = !0, h = d.md.clid), d.t === "n" && d.m !== "WEBRTC_CALL") {
                if (d.m === "AGENT_JOIN_CONVERSATION" && d.md) {
                    const L = d.md;
                    i[L.rsc] = L
                }
                continue
            }
            if (d.md && d.md.ao) continue;
            const R = d.n;
            if (u = d.uid, d.ut === "a") {
                const L = d.md,
                    O = i[L.rsc];
                O && (u = O.pid, c = O.pi ? `https://s3.amazonaws.com/tawk-to-pi/${O.pi}` : "https://embed.tawk.to/_s/v4/assets/images/default-profile.svg")
            } else if (d.ut === "s") {
                u = ei();
                const L = d.md;
                c = L && L.pi ? `https://tawk.link/${L.pi}` : "https://embed.tawk.to/_s/v4/assets/images/default-profile.svg"
            }
            if (d.attchs && Array.isArray(d.attchs) && d.attchs.forEach(L => {
                    const O = L.type;
                    O === "suggested-messages" ? (a = !0, r = {
                        options: L.content.options
                    }) : O === "file" ? x = this.processFile(d) || {} : O === "ticket-form" ? s = !0 : O === "lead-capture-form" && (o = !0)
                }), a || d.ut === "v") f = be.rawEncode(this.parseText(d.m));
            else {
                const {
                    parsedMessage: L,
                    surveyOptions: O
                } = this.parseSurvey(d.m);
                f = be.rawEncode(L), O && (r = {
                    options: O
                })
            }
            n.push({ ...x,
                timeStamp: w,
                message: f || "",
                name: R,
                type: d.t,
                time: d.co,
                data: d.md,
                isPending: !1,
                senderType: d.ut,
                ownerId: u,
                profileImage: c,
                cver: d.cver,
                messageId: g,
                isCallView: p,
                callId: h,
                callData: null,
                surveyObj: r,
                rawMessage: d,
                hasInlineTicketForm: s,
                hasInlineLeadCaptureForm: o
            })
        }
        return n
    }
    parseChatMessage(e, n) {
        var L, O, W;
        let i, r, s, o = !1,
            a = null,
            l = {},
            u = null,
            c = null,
            f = null,
            p = !1,
            h = !1,
            d = !1;
        const g = ei(),
            w = new Date(e.co).getTime();
        let x = n ? !!te().chatTransfer.data : !1;
        if (e.n = be.rawDecode(e.n), e.t === "n" && (e.m === "AGENT_JOIN_CONVERSATION" || e.m === "AGENT_LEFT_CONVERSATION")) return this.updateAgentPresence(e, n), te().updateChatMessage({
            rawMessage: e,
            type: "n"
        }), x && e.m === "AGENT_JOIN_CONVERSATION" && te().setChatTransferData(null), null;
        if (e.t === "n" && e.m === "CHAT_ENDED" && n) return te().handleIncomingChatEnd(e), null;
        if (e.t === "n" && e.m === "CHAT_TRANSFER") return te().updateChatMessage({
            rawMessage: e,
            type: "n"
        }), (L = e.md) != null && L.transfer && ((W = (O = e.md) == null ? void 0 : O.transfer) == null ? void 0 : W.status) === "active" ? x = !0 : x = !1, null;
        if (e.t === "n" && e.ut === "v") {
            if (e.m !== "VISITOR_RATING") return;
            if (e.m === "VISITOR_RATING") {
                const C = e.md;
                n && this.changeRating(C.rt, !0), C.rt < 0 ? (e.m = "thumbs-down", e.t = "c") : C.rt > 0 ? (e.m = "thumbs-up", e.t = "c") : e.m = Tt.i18n("chat", "remove_rate")
            }
        }
        if (e.ut === "v") r = e.uid;
        else if (i = e.n, e.ut === "a") {
            const C = e.md,
                M = te().agents;
            M[C.rsc] && (r = M[C.rsc].profileId);
            const D = te().agentProfile(C.rsc);
            s = D ? D.profileImage : void 0
        } else if (e.ut === "s") {
            const C = e.md;
            s = C && C.pi ? `https://tawk.link/${C.pi}` : "https://embed.tawk.to/_s/v4/assets/images/default-profile.svg"
        }
        e.attchs && Array.isArray(e.attchs) && e.attchs.forEach(C => {
            const M = C.type;
            M === "suggested-messages" ? (d = !0, u = {
                options: C.content.options
            }) : M === "file" ? l = this.processFile(e) || {} : M === "ticket-form" ? (p = !0, c = C.content.ref) : M === "lead-capture-form" && (h = !0, f = C.content.ref)
        });
        let R;
        if (e.m === "WEBRTC_CALL" && e.md && e.md.webrtc) o = !0, a = e.md.clid;
        else {
            if (e.t === "c") {
                if (e.ut === "v") te().setVisitorHasMessaged(!0);
                else if (e.ut === "a") {
                    if (te().setAgentHasMessaged(!0), n) {
                        const C = {
                            message: be.rawDecodeHTMLSymbols(e.m),
                            attachments: e.attchs ? e.attchs : []
                        };
                        e.m.length === 0 && delete C.message, ae.triggerApiHandlers("onChatMessageAgent", C)
                    }
                } else if (e.ut === "s" && n) {
                    const C = {
                        message: be.rawDecodeHTMLSymbols(e.m),
                        attachments: e.attchs ? e.attchs : []
                    };
                    e.m.length === 0 && delete C.message, ae.triggerApiHandlers("onChatMessageSystem", C)
                }
            }
            if (d || e.ut === "v") R = this.parseText(e.m);
            else {
                const {
                    parsedMessage: C,
                    surveyOptions: M
                } = this.parseSurvey(e.m);
                R = be.rawDecodeHTMLSymbols(C), M && (u = {
                    options: M
                })
            }
        }
        return w > Q().lastMessageTimestamp && (e.ut === "v" ? Q().lastMessageTimestamp = w : (te().updateUnseenMessages(g), n && ae.triggerApiHandlers("onUnreadCountChanged", te().chat.unreadMessage))), l = { ...l,
            timeStamp: w,
            message: R,
            name: i,
            type: e.t,
            time: e.co,
            data: e.md,
            isPending: !w,
            senderType: e.ut,
            ownerId: r,
            profileImage: s,
            cver: e.cver,
            messageId: g,
            isCallView: o,
            callId: a,
            callData: null,
            surveyObj: u,
            rawMessage: e,
            ticketFormRef: c,
            hasInlineTicketForm: p,
            leadFormRef: f,
            hasInlineLeadCaptureForm: h
        }, l
    }
    processFile(e) {
        if (e.attchs && Array.isArray(e.attchs)) {
            const n = {
                images: [],
                videos: [],
                audios: [],
                files: []
            };
            return e.attchs.forEach(i => {
                if (i.type === "file") {
                    const r = i.content.file;
                    ["image/jpeg", "image/png", "image/gif"].indexOf(r.mimeType) !== -1 ? n.images.push({
                        source: r.url,
                        name: be.rawEncode(r.name)
                    }) : ["video/mp4", "video/ogg", "video/webm"].indexOf(r.mimeType) !== -1 ? n.videos.push({
                        source: "selfhosted",
                        url: r.url,
                        name: be.rawEncode(r.name),
                        size: lt.formatFileSize(r.size),
                        options: {
                            controls: "",
                            mute: !0,
                            loop: !1,
                            startTime: 0
                        }
                    }) : ["audio/mp3", "audio/ogg", "audio/mpeg", "audio/wav"].indexOf(r.mimeType) !== -1 ? n.audios.push({
                        source: r.url,
                        type: r.mimeType,
                        name: be.rawEncode(r.name),
                        size: lt.formatFileSize(r.size)
                    }) : n.files.push({
                        source: r.url,
                        name: be.rawEncode(r.name),
                        size: lt.formatFileSize(r.size)
                    })
                }
            }), {
                attchs: n
            }
        }
    }
    parseText(e, n = !1) {
        if (!e) return e;
        if (be.hasMarkdown(e)) return be.rawEncode(e);
        const i = e.split(`
`);
        for (let r = 0; r < i.length; r++) n || (i[r] = this.createUrl(i[r].split(" "), " "));
        return e = i.join(`
`), e
    }
    createUrl(e, n) {
        for (let i = 0; i < e.length; i++) e[i].match(lt.regEmailMatch) ? e[i] = e[i].replace(lt.regEmailMatch, r => this.parseEmail(r)) : e[i].match(lt.regTelMatch) ? e[i] = e[i].replace(lt.regTelMatch, r => this.parsePhoneNumber(r)) : (e[i] = e[i].replace(lt.regMatchUrl, r => this.parseUrl(r)), e[i] = e[i].replace(lt.regMatchIp, r => this.parseUrl(r)));
        return e.join(n)
    }
    parseUrl(e) {
        let n = "",
            i;
        if (typeof window.emojione < "u" && window.emojione.unifyUnicode(e) !== e) return e;
        const r = be.hasPunctuation(e);
        if (r && r.length) {
            const l = r[0].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
                u = new RegExp(l + "$", "g");
            e = e.replace(u, "")
        }
        const s = `${r&&r.length?r[0]:""} `;
        if (e.match(lt.regEmailMatch) && (n = "mailto:"), n === "mailto:") {
            const l = e.match(lt.regEmailMatch)[0];
            return l.indexOf("mailto") !== -1 && (n = ""), e.replace(lt.regEmailMatch, `[${l}](${n+l})${s}`)
        }
        e.toLowerCase().indexOf("http") !== 0 && e.toLowerCase().indexOf("ftp") !== 0 && (n = "http://");
        const o = this.parseUrlHostName(document.location.href),
            a = this.parseUrlHostName(e);
        return o === a ? i = "_parent" : i = "_blank", i === "_parent" ? `_[${e}](${n+e})${s}` : `[${e}](${n+e})${s}`
    }
    parseUrlHostName(e) {
        const n = e.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
        if (n != null && n.length > 2 && typeof n[2] == "string" && n[2].length > 0) return n[2]
    }
    parseEmail(e) {
        let n = "";
        return typeof window.emojione < "u" && window.emojione.unifyUnicode(e) !== e ? e : (e.indexOf("mailto") === -1 && (n = "mailto:"), `[${e}](${n+e})`)
    }
    parseSurvey(e) {
        const n = e.match(this.regSurveyQuestion);
        if (n === null) return {
            parsedMessage: this.parseText(e),
            surveyOptions: null
        };
        const i = this.parseText(be.trim(n[1])),
            r = [],
            s = e.match(this.regSurvey);
        if (!s) return {
            parsedMessage: i,
            surveyOptions: null
        };
        for (let o = 0, a = s.length; o < a; o++) {
            let l = s[o].replace(this.regOption, "");
            l = l.replace(lt.regBr, ""), l = be.trim(l), r.push({
                text: l
            })
        }
        return {
            parsedMessage: i,
            surveyOptions: r
        }
    }
    updateAgentPresence(e, n) {
        return e.m !== "AGENT_JOIN_CONVERSATION" && e.m !== "AGENT_LEFT_CONVERSATION" ? !1 : e.m === "AGENT_JOIN_CONVERSATION" ? this.addAgentToList(e, n) : this.removeAgentFromList(e, n)
    }
    addAgentToList(e, n) {
        const i = e.md || {},
            r = i.rsc,
            o = te().agents[r],
            a = {
                profileImage: i.pi ? `https://s3.amazonaws.com/tawk-to-pi/${i.pi}` : "https://embed.tawk.to/_s/v4/assets/images/default-profile.svg",
                profileTitle: be.rawDecode(i.pst) || "",
                profileId: i.pid,
                displayName: e.n,
                count: 1,
                isBot: i.bot ? i.bot : !1
            };
        if (o) {
            const l = o.seq,
                u = i.seq;
            if (!(!l || !u || l.time < u.time || l.time === u.time && l.inc < u.inc) || o.profileId === i.pid && o.joined) return
        }
        n && ae.triggerApiHandlers("onAgentJoinChat", {
            name: a.displayName,
            position: a.profileTitle,
            image: a.profileImage,
            id: e.uid
        }), te().agentJoined({
            resourceId: r,
            agentData: i,
            profileData: a
        })
    }
    removeAgentFromList(e, n) {
        const i = e.md || {},
            r = i.rsc,
            o = te().agents[r];
        if (!(!o || o.seq.time > i.seq.time || o.seq.time === i.seq.time && o.seq.inc > i.seq.inc)) {
            if (n) {
                const a = te().agentProfile(r);
                a && ae.triggerApiHandlers("onAgentLeaveChat", {
                    name: a.displayName,
                    position: a.profileTitle,
                    image: a.profileImage,
                    id: e.uid
                })
            }
            te().agentLeft({
                resourceId: r,
                agentData: i
            })
        }
    }
    clearTypingTimeout() {
        this.keyDownTimeout && (clearTimeout(this.keyDownTimeout), this.keyDownTimeout = null), we.publish("notifyMessagePreview", "")
    }
    sendMessagePreview(e) {
        let n;
        const i = lt.getTargetElement(e);
        if (e.keyCode === 13 && !e.shiftKey && !Pe().mobileBrowserName) return n = be.trim(i.value), i.value = "", this.sendMessage({
            message: n || ""
        });
        !this.keyDownTimeout && z().showVisitorTyping && (this.keyDownTimeout = setTimeout(() => {
            n = be.trim(i.value), typeof window.emojione < "u" && (n = window.emojione.toShort(n || "")), we.publish("notifyMessagePreview", n), clearTimeout(this.keyDownTimeout), this.keyDownTimeout = null
        }, 1e3))
    }
    async sendMessage({
        message: e = "",
        attachments: n = [],
        callback: i
    }) {
        e = be.rawDecode(be.trim(e)), i = i || function() {};
        let r = !1,
            s = [];
        n.length === 1 && n[0].type === "lead-capture-response" ? (s = n, r = !0) : n.length > 0 && (s = await this.uploadFiles(n)), clearTimeout(this.keyDownTimeout), this.keyDownTimeout = null, e.length > 0 && typeof window.emojione < "u" && (e = e.replace(/©/gm, "&copy;").replace(/®/gm, "&reg;").replace(/™/gm, "&trade;"), e = window.emojione.toShort(e), e = e.replace(/&copy;/gm, "©").replace(/&reg;/gm, "®").replace(/&trade;/gm, "™")), this.sendMessageToServer({
            message: e,
            attachments: s,
            callback: i,
            isLeadCaptureForm: r
        })
    }
    sendMessageToServer({
        message: e,
        attachments: n = [],
        callback: i = () => {},
        isLeadCaptureForm: r = !1,
        isPreChat: s = !1
    }) {
        i = i || function() {};
        const o = this.parseChatMessage({
            attchs: n,
            ut: "v",
            t: "c",
            m: be.rawEncode(e),
            co: null,
            uid: qt().visitorId
        });
        s && (o.data = {
            pcs: !0
        }), r || te().setOutgoingMessage(o);
        const a = {
            message: e,
            attachments: n
        };
        s && (a.isPreChat = !0), e.length === 0 && delete a.message, we.publish("sendChatMessage", a, (l, u) => {
            l ? (o.sendFailed = !0, o.isPending = !1) : (r && te().setOutgoingMessage(o), o.cver = u.data.cver, o.timeStamp = new Date(u.data.co).getTime(), o.time = u.data.co, o.isPending = !1, o.rawMessage.co = u.data.co, o.sendFailed = !1, ae.triggerApiHandlers("onChatMessageVisitor", a), Q().addWaitTime(), te().outgoingChatMessage(o)), i(l)
        })
    }
    changeRating(e, n) {
        let i, r = "c";
        te().rating === e && (e = 0), te().setRating(e), n || (we.publish("setRating", e), ae.triggerApiHandlers("onChatSatisfaction", e)), e < 0 ? i = "thumbs-down" : e > 0 ? i = "thumbs-up" : (i = Tt.i18n("chat", "remove_rate"), r = "n");
        const s = this.parseChatMessage({
            ut: "v",
            t: r,
            m: i,
            co: new Date,
            uid: qt().visitorId,
            md: {
                rt: e
            }
        });
        n || (te().setOutgoingMessage(s), te().updateRatingMessage(s))
    }
    uploadFiles(e) {
        const n = [],
            i = [];
        for (let r = 0; r < e.length; r++) {
            const s = e[r],
                o = {
                    uuid: ei(),
                    handle: null,
                    fileName: be.rawEncode(s.file.name),
                    percentage: 0,
                    hasError: !1,
                    fileData: s
                };
            if (s.file.size > this.maxSizeFileUpload) {
                i.push(be.rawEncode(s.file.name));
                continue
            }
            r >= this.maxNumberFileUpload || (te().addFileUpload(o), n.push(new Promise((a, l) => {
                Mo.getUploadHandler(u => {
                    o.handle = u, Mo.uploadFile(u, Q().sessionKey, s.file, c => {
                        a(c), te().removeFileUpload(o.uuid)
                    })
                }, l)
            })))
        }
        return i.length && $e.emit("tooBigFileList", i), Zl(n).then(r => {
            const s = [];
            for (let o = 0; o < r.length; o++) {
                const a = r[o];
                if (a.status === "fulfilled" && a.value) {
                    const l = a.value,
                        u = {
                            type: "file",
                            content: {
                                file: {
                                    url: l.url,
                                    name: l.filename,
                                    mimeType: l.mimeType,
                                    size: l.size,
                                    extension: l.extension
                                }
                            }
                        };
                    s.push(u), ae.triggerApiHandlers("onFileUpload", l.url)
                } else te().uploadFiles.forEach(u => {
                    u.hasError || (u.hasError = !0)
                })
            }
            return s
        })
    }
    callStatusUpdate(e) {
        let n = te().callData(e.clid);
        n || (n = {
            callId: e.clid,
            status: e.stts,
            version: e.ver,
            isMissed: e.mssd,
            isRejected: e.rjctd,
            isRinging: e.stts === "ringing",
            isDone: e.stts === "completed",
            isVideo: e.f ? e.f.vid : !1,
            isScreenshare: e.f ? e.f.scrn : !1,
            hasError: !1
        }, te().updateCallData(n)), we.publish("getCallStatus", {
            callId: e.clid
        }, (i, r) => {
            if (i || !r.data.call.f || n.version > r.data.call.ver) {
                n.hasError = !0, te().updateCallData(n);
                return
            }
            let s;
            const o = r.data.call;
            o.cllr.t === "a" && (s = te().agentProfile(o.cllr.urid), !s) || (n = {
                callId: o.clid,
                status: o.stts,
                version: o.ver,
                isMissed: o.mssd,
                isRejected: o.rjctd,
                isRinging: o.stts === "ringing",
                isDone: o.stts === "completed",
                isVideo: o.f.vid,
                isScreenshare: o.f.scrn,
                hasError: !1,
                caller: s || o.cllr,
                startedAt: o.so,
                endedAt: o.eo
            }, n.isRinging && n.caller && o.cllr.t === "a" ? te().setIncomingCall(n) : n.isDone && te().incomingCall && te().incomingCall.callId == n.callId && te().setIncomingCall(null), n.isDone ? te().updateOngoingCall(!1) : te().updateOngoingCall(!0), te().updateCallData(n), $e.emit("callDataUpdated", n))
        })
    }
    chatTransferUpdate(e, n) {
        te().updateChatTransferData({
            transfer: e,
            transferVersion: n
        })
    }
    acceptCall() {
        Pe().isWebRTCAvailable && (this.webrtcWin = window.open("", ""), we.publish("getWebRTCToken", {}, (e, n) => {
            te().setIncomingCall(null), e && this.webrtcWin.close(), this.webrtcWin.location.href = `https://video.tawk.to/v2/call?token=${n.data.token}`
        }))
    }
    declineCall(e) {
        const n = {
            callId: e
        };
        we.publish("declineCall", n, () => {
            te().setIncomingCall(null)
        })
    }
    initiateCall(e, n) {
        this.webrtcWin = window.open("", ""), we.publish("getWebRTCToken", {
            video: e,
            screen: n
        }, (i, r) => {
            i && this.webrtcWin.close(), this.webrtcWin.location.href = `https://video.tawk.to/v2/call?token=${r.data.token}`
        })
    }
    clearUnseenNotification() {
        te().clearUnseenMessages(), ae.triggerApiHandlers("onUnreadCountChanged", te().chat.unreadMessage)
    }
    updateFileProgress(e, n, i) {
        let r;
        const s = te().uploadFiles;
        for (let o = 0; o < s.length; o++)
            if (s[o].handle === e.handle) {
                n ? s.splice(o, 1) : r = s[o];
                break
            }
        r && (i ? r.hasError = !0 : r.percentage = e.progress)
    }
    sendApiEvent(e, n, i) {
        typeof n == "function" && (i = n, n = null), i = i || function() {};
        const r = ae.secureWrapper({});
        r.name = e, r.data = n, we.publish("addEvent", r, i)
    }
    sendApiAttributes(e, n) {
        n = n || function() {};
        let i = !1;
        if (Object.keys(e).length > 50) {
            i = !0, n("[JSAPI/setAttributes]: 50 custom attributes are only allowed.");
            return
        }
        const r = o => /^[a-zA-Z0-9_-]{1,50}$/.test(o),
            s = o => typeof o == "string" && o.length <= 255 || typeof o == "number" || typeof o == "boolean" || o === null;
        Object.keys(e).forEach(o => {
            if (o === "hash") return;
            if (!r(o)) {
                i = !0, n(`[JSAPI/setAttributes]: Invalid key: ${o}`);
                return
            }
            const a = e[o];
            if (!s(a)) {
                i = !0, n(`[JSAPI/setAttributes]: Invalid value for key ${o}: ${String(a)}}`);
                return
            }
        }), !i && (e = ae.secureWrapper(e), we.publish("setAttributes", e, o => {
            o || (e.name || e.email) && qt().updateVisitorInformation({
                n: e.name || void 0,
                e: e.email || void 0
            }), n(o)
        }))
    }
    addTags(e, n) {
        n = n || function() {};
        const i = ae.secureWrapper({});
        i.tags = e, we.publish("addTags", i, n)
    }
    removeTags(e, n) {
        n = n || function() {};
        const i = ae.secureWrapper({});
        i.tags = e, we.publish("removeTags", i, n)
    }
    parsePhoneNumber(e) {
        let n = "";
        return e.indexOf("tel") === -1 && (n = "tel:"), '<a class="tawk-link" href="' + (n + e) + '" title="' + (n + e) + '">' + e + "</a> "
    }
}
const ze = new sh;
class oh {
    constructor() {
        j(this, "local_API");
        j(this, "TawkWindow", null);
        j(this, "triggerApiHandlers", (e, n) => {
            const i = this.local_API[e];
            if (i === void 0) return;
            const r = window.Tawk_API;
            if (e === "onBeforeLoad") {
                if (r.onBeforeLoaded) return;
                r.onBeforeLoaded = !0
            } else if (e === "onLoad") {
                if (r.onLoaded) return;
                r.onLoaded = !0
            }
            if (this.dispatch(i.eventName, n), typeof i.func == "function") try {
                i.func(n)
            } catch {}
            $e.on("resetState", () => {
                r.onBeforeLoaded = !1, r.onLoaded = !1
            })
        });
        j(this, "dispatch", (e, n) => {
            let i;
            e && (typeof window.CustomEvent == "function" ? i = new CustomEvent(e, {
                detail: n
            }) : i = this.CustomEventIE(e, {
                bubbles: !1,
                cancelable: !1,
                detail: n
            }), window.dispatchEvent(i))
        });
        j(this, "secureWrapper", e => (typeof e > "u" && (e = {}), this.local_API && this.local_API.visitor && (this.local_API.visitor.email && (e.email = this.local_API.visitor.email), this.local_API.visitor.hash && (e.hash = this.local_API.visitor.hash)), e));
        j(this, "unsetVisitorAttributes", () => {
            this.local_API && this.local_API.visitor && (this.local_API.visitor = void 0)
        });
        this.local_API = {};
        const e = window;
        if (e.$_Tawk = e.$_Tawk || {}, e.Tawk_API = e.Tawk_API || {}, typeof e.$_Tawk_API == "object") {
            const n = e.$_Tawk_API;
            for (const i in n) Object.prototype.hasOwnProperty.call(n, i) && (e.Tawk_API[i] = n[i])
        }
        typeof window.CustomEvent != "function" && (this.CustomEventIE(), this.CustomEventIE.prototype = window.Event.prototype), this.init()
    }
    install(e, {
        TawkWindow: n
    }) {
        e && e.provide("jsApi", this), this.TawkWindow = n
    }
    CustomEventIE(e, n) {
        n = n || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        const i = document.createEvent("CustomEvent");
        return i.initCustomEvent(e || "", n.bubbles, n.cancelable, n.detail), i
    }
    init() {
        const e = window.Tawk_API || {};
        this.local_API = {
            disableSound: !!e.disableSound,
            embedded: e.embedded || null,
            visitor: e.visitor || null,
            autoStart: e.autoStart || !0,
            disableMobileBackHistory: !!e.disableMobileBackHistory,
            disableWidgetFont: e.disableWidgetFont || !1,
            isWindowed: !!e.isPopup,
            customStyle: e.customStyle || null,
            onBeforeLoad: {
                eventName: "tawkBeforeLoad",
                func: e.onBeforeLoad
            },
            onLoad: {
                eventName: "tawkLoad",
                func: e.onLoad
            },
            onStatusChange: {
                eventName: "tawkStatusChange",
                func: e.onStatusChange
            },
            onChatMaximized: {
                eventName: "tawkChatMaximized",
                func: e.onChatMaximized
            },
            onChatMinimized: {
                eventName: "tawkChatMinimized",
                func: e.onChatMinimized
            },
            onChatHidden: {
                eventName: "tawkChatHidden",
                func: e.onChatHidden
            },
            onChatStarted: {
                eventName: "tawkChatStarted",
                func: e.onChatStarted
            },
            onChatEnded: {
                eventName: "tawkChatEnded",
                func: e.onChatEnded
            },
            onPrechatSubmit: {
                eventName: "tawkPrechatSubmit",
                func: e.onPrechatSubmit
            },
            onOfflineSubmit: {
                eventName: "tawkOfflineSubmit",
                func: e.onOfflineSubmit
            },
            onTranscriptRequest: {
                eventName: "tawkTranscriptRequest",
                func: e.onTranscriptRequest
            },
            onChatMessageVisitor: {
                eventName: "tawkChatMessageVisitor",
                func: e.onChatMessageVisitor
            },
            onChatMessageAgent: {
                eventName: "tawkChatMessageAgent",
                func: e.onChatMessageAgent
            },
            onChatMessageSystem: {
                eventName: "tawkChatMessageSystem",
                func: e.onChatMessageSystem
            },
            onAgentJoinChat: {
                eventName: "tawkAgentJoinChat",
                func: e.onAgentJoinChat
            },
            onAgentLeaveChat: {
                eventName: "tawkAgentLeaveChat",
                func: e.onAgentLeaveChat
            },
            onChatSatisfaction: {
                eventName: "tawkChatSatisfaction",
                func: e.onChatSatisfaction
            },
            onVisitorNameChanged: {
                eventName: "tawkVisitorNameChanged",
                func: e.onVisitorNameChanged
            },
            onFileUpload: {
                eventName: "tawkFileUpload",
                func: e.onFileUpload
            },
            onTagsUpdated: {
                eventName: "tawkTagsUpdated",
                func: e.onTagsUpdated
            },
            onUnreadCountChanged: {
                eventName: "tawkUnreadCountChanged",
                func: e.onUnreadCountChanged
            }
        };
        const n = window;
        n.$_Tawk.maximize = n.Tawk_API.maximize = () => {
            n.$_Tawk.ready || Q().updateChatWindowState("max")
        }, n.$_Tawk.minimize = n.Tawk_API.minimize = () => {
            n.$_Tawk.ready || Q().updateChatWindowState("min")
        }, n.$_Tawk.toggle = n.Tawk_API.toggle = () => {
            n.$_Tawk.ready || Q().toggleWidget()
        }, n.$_Tawk.popup = n.Tawk_API.popup = () => {
            n.$_Tawk.ready || this.TawkWindow.popoutWidget()
        }, n.$_Tawk.getWindowType = n.Tawk_API.getWindowType = () => {
            if (!n.$_Tawk.ready) return z().isEmbedded ? "embed" : z().isWindowed ? "popup" : "inline"
        }, n.$_Tawk.showWidget = n.Tawk_API.showWidget = () => {
            n.$_Tawk.ready || z().setVisibility(!0)
        }, n.$_Tawk.hideWidget = n.Tawk_API.hideWidget = () => {
            n.$_Tawk.ready || z().setVisibility(!1)
        }, n.$_Tawk.toggleVisibility = n.Tawk_API.toggleVisibility = () => {
            n.$_Tawk.ready || z().toggleVisibility()
        }, n.$_Tawk.getStatus = n.Tawk_API.getStatus = () => {
            if (!n.$_Tawk.ready) return Q().pageStatus
        }, n.$_Tawk.isChatMaximized = n.Tawk_API.isChatMaximized = () => {
            if (!n.$_Tawk.ready) return Q().chatWindowState === "max"
        }, n.$_Tawk.isChatMinimized = n.Tawk_API.isChatMinimized = () => {
            if (!n.$_Tawk.ready) return Q().chatWindowState === "min"
        }, n.$_Tawk.isChatHidden = n.Tawk_API.isChatHidden = () => {
            if (!n.$_Tawk.ready) return !z().isVisible
        }, n.$_Tawk.isChatOngoing = n.Tawk_API.isChatOngoing = () => {
            if (!n.$_Tawk.ready) return te().isChatOngoing
        }, n.$_Tawk.isVisitorEngaged = n.Tawk_API.isVisitorEngaged = () => {
            if (!n.$_Tawk.ready) return te().isVisitorEngaged
        }, n.$_Tawk.endChat = n.Tawk_API.endChat = () => {
            n.$_Tawk.ready || te().endChat()
        }, n.$_Tawk.addEvent = n.Tawk_API.addEvent = (i, r, s) => {
            n.$_Tawk.ready || ze.sendApiEvent(i, r, s)
        }, n.$_Tawk.setAttributes = n.Tawk_API.setAttributes = (i, r) => {
            this.local_API.visitor = this.local_API.visitor || {}, i.name && (this.local_API.visitor.name = i.name), i.email && (this.local_API.visitor.email = i.email), i.hash && (this.local_API.visitor.hash = i.hash), ze.sendApiAttributes(i, r)
        }, n.$_Tawk.addTags = n.Tawk_API.addTags = (i, r) => {
            ze.addTags(i, r)
        }, n.$_Tawk.removeTags = n.Tawk_API.removeTags = (i, r) => {
            ze.removeTags(i, r)
        }, n.$_Tawk.widgetPosition = n.Tawk_API.widgetPosition = () => {
            if (!n.$_Tawk.ready) return z().desktopVisibility ? z().desktopVisibility.position : null
        }, n.$_Tawk.login = n.Tawk_API.login = (i = {}, r) => {
            if (n.$_Tawk.ready) return;
            r = r || function() {};
            const s = Gi.formatVisitorLoginData(i);
            Be.login(s, r)
        }, n.$_Tawk.logout = n.Tawk_API.logout = i => {
            n.$_Tawk.ready || (i = i || function() {}, Be.logout(i))
        }, n.$_Tawk.switchWidget = n.Tawk_API.switchWidget = ({
            propertyId: i = null,
            widgetId: r = null
        }, s = () => {}) => {
            n.$_Tawk.ready || z().switchWidget({
                propertyId: i,
                widgetId: r,
                callback: s
            })
        }, n.$_Tawk.shutdown = n.Tawk_API.shutdown = (i = () => {}) => {
            n.$_Tawk.ready || z().shutdown(i)
        }, n.$_Tawk.start = n.Tawk_API.start = (i = {}, r = () => {}) => {
            n.$_Tawk.ready || z().start({
                params: i,
                callback: r
            })
        }
    }
}
const ae = new oh,
    pr = vt("socket", () => {
        const t = _(!1),
            e = _(!1),
            n = _(!1),
            i = _([]);

        function r(l) {
            const c = {
                agentIsTyping: t,
                isReady: e,
                isConnecting: n
            }[l.event];
            c && (c.value = l.value)
        }

        function s(l) {
            Q().sendNavigationEvent(), e.value = l, n.value = !1
        }

        function o(l) {
            n.value = l
        }

        function a() {
            t.value = !1, e.value = !1, n.value = !1, i.value = []
        }
        return {
            agentIsTyping: t,
            isReady: e,
            isConnecting: n,
            stack: i,
            updateEvent: r,
            updateIsReady: s,
            updateIsConnecting: o,
            resetState: a
        }
    });
class ah {
    constructor() {
        j(this, "chatWindowStates");
        j(this, "io");
        j(this, "selfOrigin");
        j(this, "disconnect");
        j(this, "ready");
        j(this, "banned");
        j(this, "forceDisconnected");
        j(this, "clearRegisterRetryTimeout");
        j(this, "events");
        j(this, "stack");
        j(this, "connectCount");
        j(this, "TawkWindow");
        this.chatWindowStates = {
            min: !0,
            max: !0
        }, this.io = null, this.selfOrigin = null, this.disconnect = !1, this.ready = !1, this.banned = !1, this.forceDisconnected = !1, this.clearRegisterRetryTimeout = null, this.events = {}, this.stack = [], this.connectCount = 0, this.TawkWindow = null
    }
    install(e, {
        TawkWindow: n
    }) {
        e && e.provide("socket", this), this.TawkWindow = n
    }
    connect() {
        const e = window;
        if (e.$_Tawk.connected = !1, this.disconnect = !1, this.forceDisconnected = !1, this.connectCount === 5) {
            z().setVisibility(!1);
            return
        }
        this.io && (this.io.removeAllListeners(), this.io.disconnect());
        const n = {
            k: Q().sessionKey,
            cver: te().chat.version,
            pop: z().isWindowed,
            asver: Q().pageStatusVersion,
            tkn: Q().token
        };
        this.connectCount++, this.io = new window.$__TawkSocket(`wss://${Q().visitorSocketServer}/`, {
            transports: ["websocket"],
            engineIo: window.$__TawkEngine,
            path: "/s",
            query: n
        }), this.io.on("disconnect", () => {
            this.disconnectHandler()
        }), this.io.on("error", i => {
            let r, s = "socket on error";
            if (i instanceof Error) {
                if (r = {
                        toString: i.toString(),
                        stack: i.stack,
                        lineNumber: i.lineNumber,
                        fileName: i.fileName
                    }, Tn && Tn.unloading && r.toString.indexOf("post") === -1) return;
                i.type === "TransportError" && (r.description = i.description), r.toString.indexOf("post") !== -1 && (s = "socket post error")
            } else r = i;
            Tn.reportError({
                error: s,
                data: { ...r
                }
            }), this.io.disconnect(), this.disconnectHandler()
        }), this.io.on("connect", () => {
            this.disconnect = !1, Q().reconnectSession(!1)
        }), this.io.on("ready", (i, r, s) => {
            if (!this.TawkWindow) return this.disconnectSocket();
            this.selfOrigin = i, e.$_Tawk.connected = !0, this.ready || (e.$_Tawk.loaded = !0), this.ready = !0, te().updateConversation(r), Q().setPageStatus({
                data: s
            }), pr().updateIsReady(!0), this.clearStack(), clearTimeout(this.clearRegisterRetryTimeout), this.clearRegisterRetryTimeout = setTimeout(() => {
                this.disconnect || this.TawkWindow.register.resetRetryCount(), this.clearRegisterRetryTimeout = null
            }, 5e3)
        }), this.io.on("remoteDisconnect", i => {
            if (i = i || {}, i.msg === "BANNED") {
                this.banned = !0;
                try {
                    this.io.disconnect()
                } catch {}
                $e.emit("removeWidget");
                return
            }
            this.io.disconnect(), this.disconnectHandler()
        }), this.addEventListeners()
    }
    disconnectSocket() {
        this.forceDisconnected = !0, this.io && (this.io.disconnect(), this.disconnectHandler())
    }
    disconnectHandler() {
        if (window.$_Tawk.connected = !1, this.io.removeAllListeners(), kt.cleanUp(), this.banned || this.forceDisconnected || this.disconnect) {
            this.connectCount = 0;
            return
        }
        this.disconnect = !0, Q().reconnectSession(!0), this.TawkWindow.retryRegister()
    }
    addEventListeners() {
        this.io.on("visitorChatWindowState", e => {
            if (this.selfOrigin === e.origin) return;
            const n = z();
            n.isWindowed || n.isEmbedded || Q().setChatWindowState(e.cw)
        }), this.io.on("visitorSound", e => {
            e.origin !== this.selfOrigin && z().toggleLocalSound(!!e.sdo)
        }), this.io.on("pageStatus", e => {
            Q().setPageStatus({
                data: e
            })
        }), this.io.on("visitorPopupFocus", e => {
            e = e || {}, Q().updateIsWindowFocused(!!e.hasFocus)
        }), this.io.on("chatBubbleClosed", e => {
            e.origin !== this.selfOrigin && Q().closeChatBubble(!0)
        }), this.io.on("pageDisable", () => {
            this.disconnectSocket(), $e.emit("removeWidget")
        }), this.io.on("vCallStatus", e => {
            ze.callStatusUpdate(e)
        }), this.io.on("widgetScheduleUpdate", e => {
            const n = z().id;
            n && n !== e.wdgt || (Fe().addSlots(e.ws ? {
                config: {
                    schedule: e.ws.sch
                }
            } : null), Fe().updateTimezone(e.wstz), kt.calculate())
        }), !(!z().hasLiveChat && (!te().hasChatStarted || te().hasChatStarted && te().agentsCount === 0)) && (this.io.on("visitorDataUpdate", e => {
            this.selfOrigin !== e.origin && (qt().updateVisitorInformation(e), e.dpt && te().updateDepartment(e.dpt), e.pcfs && Q().updatePrechatSubmitted(!0))
        }), this.io.on("visitorMessage", e => {
            this.selfOrigin !== e.origin && te().incomingChatMessage(e)
        }), this.io.on("visitorConversationPresenceUpdate", e => {
            te().incomingChatMessage(e)
        }), this.io.on("visitorChatSeen", e => {
            ze.clearUnseenNotification(e)
        }), this.io.on("visitorChatDismiss", e => {
            $e.emit("dismissPreview", e)
        }), this.io.on("visitorTagsUpdate", e => {
            ae.triggerApiHandlers("onTagsUpdated", e)
        }), this.io.on("uploadProgress", e => {
            ze.updateFileProgress(e)
        }), this.io.on("uploadFinished", e => {
            ze.updateFileProgress(e, !0)
        }), this.io.on("uploadError", e => {
            ze.updateFileProgress(e, !1, !0)
        }), this.io.on("agentIsTyping", e => {
            $e.emit("agentIsTyping", e)
        }), this.io.on("agentStopedTyping", e => {
            $e.emit("agentStopedTyping", e)
        }), this.io.on("visitorChatTransfer", e => {
            ze.chatTransferUpdate(e.transfer, e.transferVersion)
        }))
    }
    isForcedDisconnect() {
        return this.forceDisconnected
    }
    publish(e, n, i) {
        if (!window.$_Tawk.connected) {
            this.addToStack(e, n, i);
            return
        }
        if (i !== void 0 || typeof n == "function") this.wrapCallback(e, n, i);
        else try {
            this.send(e, n, i)
        } catch {}
    }
    addToStack(e, n, i) {
        e === "sendChatMessage" && delete this.events.notifyMessagePreview, e === "notifyMessagePreview" ? this.events[e] = {
            command: e,
            data: n,
            callback: i
        } : this.stack.push({
            command: e,
            data: n,
            callback: i
        })
    }
    clearStack() {
        this.stack.forEach(e => {
            this.publish(e.command, e.data, e.callback)
        });
        for (const e in this.events) this.publish(this.events[e].command, this.events[e].data, this.events[e].callback);
        this.stack = [], this.events = {}
    }
    wrapCallback(e, n, i) {
        typeof n == "function" && (i = n, n = null);
        const r = setTimeout(function() {
            throw i(!0), new Error("Socket server did not execute the callback for " + e + " with data : " + JSON.stringify(n))
        }, 35e3);
        let s = function(...o) {
            clearTimeout(r), s = () => {}, i(...o)
        };
        try {
            n === null ? this.send(e, s) : this.send(e, n, s)
        } catch {}
    }
    send(e, n, i) {
        this[e](n, i)
    }
    nav(e, n) {
        this.io.send("nav", e, n)
    }
    notifyMessagePreview(e) {
        this.io.send("messagePreview", e, new Date().getTime())
    }
    sendChatMessage(e, n) {
        this.io.send("service", "visitor-chat", "/v1/message/visitor", e, n)
    }
    getCallStatus(e, n) {
        this.io.send("service", "webrtc", "/v1/vcall/status/visitor", e, n)
    }
    getWebRTCToken(e, n) {
        this.io.send("service", "webrtc", "/v1/vcall/init/visitor", e, n)
    }
    declineCall(e, n) {
        this.io.send("service", "webrtc", "/v1/vcall/reject/visitor", e, n)
    }
    notifyOfflineMessage(e, n) {
        this.io.send("service", "visitor-chat", "/v1/visitor/offline-form", e, n)
    }
    visitorChatSeen(e, n) {
        this.io.send("service", "visitor-chat", "/v1/visitor/messages-seen", e, n)
    }
    notifyPrechat(e, n) {
        this.io.send("service", "visitor-chat", "/v1/visitor/prechat-form", e, n)
    }
    notifyNameChange(e, n) {
        this.io.send("saveNameChangeForm", e, n)
    }
    notifyEmailTranscript(e, n) {
        this.io.send("saveTranscriptEmailForm", e, n)
    }
    notifyEndChatTranscript(e, n) {
        this.io.send("sendTranscript", e, n)
    }
    endVisitorChat(e) {
        this.io.send("endChat", e)
    }
    addEvent(e, n) {
        this.io.send("addEvent", e, n)
    }
    setAttributes(e, n) {
        this.io.send("setAttributes", e, n)
    }
    addTags(e, n) {
        this.io.send("addTags", e, n)
    }
    removeTags(e, n) {
        this.io.send("removeTags", e, n)
    }
    fileUploadMessage(e, n) {
        this.io.send("fileUploadMessage", e, n)
    }
    popupOnFocus(e) {
        this.io.send("visitorPopupFocus", e)
    }
    notifySocketStatusUpdate(e) {
        this.io.send("socketStatusUpdate", e)
    }
    setRating(e) {
        this.io.send("visitorRating", e)
    }
    visitorChatDismiss(e, n) {
        this.io.send("service", "visitor-chat", "/v1/visitor/dismiss-preview", e, n)
    }
    getForm(e, n) {
        this.io.send("service", "table", "/v1/form/get", e, n)
    }
    notifyChatBubbleClosed() {
        this.io.send("chatBubbleClose")
    }
    notifyWindowState(e) {
        this.io.send("chatWindowState", e)
    }
    toggleSound(e) {
        this.io.send("visitorSound", e)
    }
    notifyWidgetResized() {
        this.io.send("notifyWidgetResized")
    }
}
const we = new ah,
    fe = t => typeof t == "string",
    Qn = () => {
        let t, e;
        const n = new Promise((i, r) => {
            t = i, e = r
        });
        return n.resolve = t, n.reject = e, n
    },
    $o = t => t == null ? "" : "" + t,
    lh = (t, e, n) => {
        t.forEach(i => {
            e[i] && (n[i] = e[i])
        })
    },
    uh = /###/g,
    Bo = t => t && t.indexOf("###") > -1 ? t.replace(uh, ".") : t,
    Ho = t => !t || fe(t),
    li = (t, e, n) => {
        const i = fe(e) ? e.split(".") : e;
        let r = 0;
        for (; r < i.length - 1;) {
            if (Ho(t)) return {};
            const s = Bo(i[r]);
            !t[s] && n && (t[s] = new n), Object.prototype.hasOwnProperty.call(t, s) ? t = t[s] : t = {}, ++r
        }
        return Ho(t) ? {} : {
            obj: t,
            k: Bo(i[r])
        }
    },
    Wo = (t, e, n) => {
        const {
            obj: i,
            k: r
        } = li(t, e, Object);
        if (i !== void 0 || e.length === 1) {
            i[r] = n;
            return
        }
        let s = e[e.length - 1],
            o = e.slice(0, e.length - 1),
            a = li(t, o, Object);
        for (; a.obj === void 0 && o.length;) s = `${o[o.length-1]}.${s}`, o = o.slice(0, o.length - 1), a = li(t, o, Object), a != null && a.obj && typeof a.obj[`${a.k}.${s}`] < "u" && (a.obj = void 0);
        a.obj[`${a.k}.${s}`] = n
    },
    ch = (t, e, n, i) => {
        const {
            obj: r,
            k: s
        } = li(t, e, Object);
        r[s] = r[s] || [], r[s].push(n)
    },
    Yi = (t, e) => {
        const {
            obj: n,
            k: i
        } = li(t, e);
        if (n && Object.prototype.hasOwnProperty.call(n, i)) return n[i]
    },
    fh = (t, e, n) => {
        const i = Yi(t, n);
        return i !== void 0 ? i : Yi(e, n)
    },
    iu = (t, e, n) => {
        for (const i in e) i !== "__proto__" && i !== "constructor" && (i in t ? fe(t[i]) || t[i] instanceof String || fe(e[i]) || e[i] instanceof String ? n && (t[i] = e[i]) : iu(t[i], e[i], n) : t[i] = e[i]);
        return t
    },
    yn = t => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var dh = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
const hh = t => fe(t) ? t.replace(/[&<>"'\/]/g, e => dh[e]) : t;
class ph {
    constructor(e) {
        this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
    }
    getRegExp(e) {
        const n = this.regExpMap.get(e);
        if (n !== void 0) return n;
        const i = new RegExp(e);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, i), this.regExpQueue.push(e), i
    }
}
const gh = [" ", ",", "?", "!", ";"],
    mh = new ph(20),
    vh = (t, e, n) => {
        e = e || "", n = n || "";
        const i = gh.filter(o => e.indexOf(o) < 0 && n.indexOf(o) < 0);
        if (i.length === 0) return !0;
        const r = mh.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);
        let s = !r.test(t);
        if (!s) {
            const o = t.indexOf(n);
            o > 0 && !r.test(t.substring(0, o)) && (s = !0)
        }
        return s
    },
    ns = (t, e, n = ".") => {
        if (!t) return;
        if (t[e]) return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
        const i = e.split(n);
        let r = t;
        for (let s = 0; s < i.length;) {
            if (!r || typeof r != "object") return;
            let o, a = "";
            for (let l = s; l < i.length; ++l)
                if (l !== s && (a += n), a += i[l], o = r[a], o !== void 0) {
                    if (["string", "number", "boolean"].indexOf(typeof o) > -1 && l < i.length - 1) continue;
                    s += l - s + 1;
                    break
                }
            r = o
        }
        return r
    },
    wi = t => t == null ? void 0 : t.replace("_", "-"),
    yh = {
        type: "logger",
        log(t) {
            this.output("log", t)
        },
        warn(t) {
            this.output("warn", t)
        },
        error(t) {
            this.output("error", t)
        },
        output(t, e) {
            var n, i;
            (i = (n = console == null ? void 0 : console[t]) == null ? void 0 : n.apply) == null || i.call(n, console, e)
        }
    };
class Zi {
    constructor(e, n = {}) {
        this.init(e, n)
    }
    init(e, n = {}) {
        this.prefix = n.prefix || "i18next:", this.logger = e || yh, this.options = n, this.debug = n.debug
    }
    log(...e) {
        return this.forward(e, "log", "", !0)
    }
    warn(...e) {
        return this.forward(e, "warn", "", !0)
    }
    error(...e) {
        return this.forward(e, "error", "")
    }
    deprecate(...e) {
        return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(e, n, i, r) {
        return r && !this.debug ? null : (fe(e[0]) && (e[0] = `${i}${this.prefix} ${e[0]}`), this.logger[n](e))
    }
    create(e) {
        return new Zi(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options
        })
    }
    clone(e) {
        return e = e || this.options, e.prefix = e.prefix || this.prefix, new Zi(this.logger, e)
    }
}
var Ft = new Zi;
let gr = class {
    constructor() {
        this.observers = {}
    }
    on(e, n) {
        return e.split(" ").forEach(i => {
            this.observers[i] || (this.observers[i] = new Map);
            const r = this.observers[i].get(n) || 0;
            this.observers[i].set(n, r + 1)
        }), this
    }
    off(e, n) {
        if (this.observers[e]) {
            if (!n) {
                delete this.observers[e];
                return
            }
            this.observers[e].delete(n)
        }
    }
    emit(e, ...n) {
        this.observers[e] && Array.from(this.observers[e].entries()).forEach(([r, s]) => {
            for (let o = 0; o < s; o++) r(...n)
        }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([r, s]) => {
            for (let o = 0; o < s; o++) r.apply(r, [e, ...n])
        })
    }
};
class Uo extends gr {
    constructor(e, n = {
        ns: ["translation"],
        defaultNS: "translation"
    }) {
        super(), this.data = e || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(e) {
        this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
    }
    removeNamespaces(e) {
        const n = this.options.ns.indexOf(e);
        n > -1 && this.options.ns.splice(n, 1)
    }
    getResource(e, n, i, r = {}) {
        var u, c;
        const s = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
            o = r.ignoreJSONStructure !== void 0 ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let a;
        e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, n], i && (Array.isArray(i) ? a.push(...i) : fe(i) && s ? a.push(...i.split(s)) : a.push(i)));
        const l = Yi(this.data, a);
        return !l && !n && !i && e.indexOf(".") > -1 && (e = a[0], n = a[1], i = a.slice(2).join(".")), l || !o || !fe(i) ? l : ns((c = (u = this.data) == null ? void 0 : u[e]) == null ? void 0 : c[n], i, s)
    }
    addResource(e, n, i, r, s = {
        silent: !1
    }) {
        const o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
        let a = [e, n];
        i && (a = a.concat(o ? i.split(o) : i)), e.indexOf(".") > -1 && (a = e.split("."), r = n, n = a[1]), this.addNamespaces(n), Wo(this.data, a, r), s.silent || this.emit("added", e, n, i, r)
    }
    addResources(e, n, i, r = {
        silent: !1
    }) {
        for (const s in i)(fe(i[s]) || Array.isArray(i[s])) && this.addResource(e, n, s, i[s], {
            silent: !0
        });
        r.silent || this.emit("added", e, n, i)
    }
    addResourceBundle(e, n, i, r, s, o = {
        silent: !1,
        skipCopy: !1
    }) {
        let a = [e, n];
        e.indexOf(".") > -1 && (a = e.split("."), r = i, i = n, n = a[1]), this.addNamespaces(n);
        let l = Yi(this.data, a) || {};
        o.skipCopy || (i = JSON.parse(JSON.stringify(i))), r ? iu(l, i, s) : l = { ...l,
            ...i
        }, Wo(this.data, a, l), o.silent || this.emit("added", e, n, i)
    }
    removeResourceBundle(e, n) {
        this.hasResourceBundle(e, n) && delete this.data[e][n], this.removeNamespaces(n), this.emit("removed", e, n)
    }
    hasResourceBundle(e, n) {
        return this.getResource(e, n) !== void 0
    }
    getResourceBundle(e, n) {
        return n || (n = this.options.defaultNS), this.getResource(e, n)
    }
    getDataByLanguage(e) {
        return this.data[e]
    }
    hasLanguageSomeTranslations(e) {
        const n = this.getDataByLanguage(e);
        return !!(n && Object.keys(n) || []).find(r => n[r] && Object.keys(n[r]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var ru = {
    processors: {},
    addPostProcessor(t) {
        this.processors[t.name] = t
    },
    handle(t, e, n, i, r) {
        return t.forEach(s => {
            var o;
            e = ((o = this.processors[s]) == null ? void 0 : o.process(e, n, i, r)) ? ? e
        }), e
    }
};
const su = Symbol("i18next/PATH_KEY");

function wh() {
    const t = [],
        e = Object.create(null);
    let n;
    return e.get = (i, r) => {
        var s;
        return (s = n == null ? void 0 : n.revoke) == null || s.call(n), r === su ? t : (t.push(r), n = Proxy.revocable(i, e), n.proxy)
    }, Proxy.revocable(Object.create(null), e).proxy
}

function is(t, e) {
    const {
        [su]: n
    } = t(wh());
    return n.join((e == null ? void 0 : e.keySeparator) ? ? ".")
}
const jo = {},
    Dr = t => !fe(t) && typeof t != "boolean" && typeof t != "number";
class er extends gr {
    constructor(e, n = {}) {
        super(), lh(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Ft.create("translator")
    }
    changeLanguage(e) {
        e && (this.language = e)
    }
    exists(e, n = {
        interpolation: {}
    }) {
        const i = { ...n
        };
        if (e == null) return !1;
        const r = this.resolve(e, i);
        if ((r == null ? void 0 : r.res) === void 0) return !1;
        const s = Dr(r.res);
        return !(i.returnObjects === !1 && s)
    }
    extractFromKey(e, n) {
        let i = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
        i === void 0 && (i = ":");
        const r = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
        let s = n.ns || this.options.defaultNS || [];
        const o = i && e.indexOf(i) > -1,
            a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !vh(e, i, r);
        if (o && !a) {
            const l = e.match(this.interpolator.nestingRegexp);
            if (l && l.length > 0) return {
                key: e,
                namespaces: fe(s) ? [s] : s
            };
            const u = e.split(i);
            (i !== r || i === r && this.options.ns.indexOf(u[0]) > -1) && (s = u.shift()), e = u.join(r)
        }
        return {
            key: e,
            namespaces: fe(s) ? [s] : s
        }
    }
    translate(e, n, i) {
        let r = typeof n == "object" ? { ...n
        } : n;
        if (typeof r != "object" && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)), typeof r == "object" && (r = { ...r
            }), r || (r = {}), e == null) return "";
        typeof e == "function" && (e = is(e, { ...this.options,
            ...r
        })), Array.isArray(e) || (e = [String(e)]);
        const s = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails,
            o = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
            {
                key: a,
                namespaces: l
            } = this.extractFromKey(e[e.length - 1], r),
            u = l[l.length - 1];
        let c = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
        c === void 0 && (c = ":");
        const f = r.lng || this.language,
            p = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if ((f == null ? void 0 : f.toLowerCase()) === "cimode") return p ? s ? {
            res: `${u}${c}${a}`,
            usedKey: a,
            exactUsedKey: a,
            usedLng: f,
            usedNS: u,
            usedParams: this.getUsedParamsDetails(r)
        } : `${u}${c}${a}` : s ? {
            res: a,
            usedKey: a,
            exactUsedKey: a,
            usedLng: f,
            usedNS: u,
            usedParams: this.getUsedParamsDetails(r)
        } : a;
        const h = this.resolve(e, r);
        let d = h == null ? void 0 : h.res;
        const g = (h == null ? void 0 : h.usedKey) || a,
            w = (h == null ? void 0 : h.exactUsedKey) || a,
            x = ["[object Number]", "[object Function]", "[object RegExp]"],
            R = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays,
            L = !this.i18nFormat || this.i18nFormat.handleAsObject,
            O = r.count !== void 0 && !fe(r.count),
            W = er.hasDefaultValue(r),
            C = O ? this.pluralResolver.getSuffix(f, r.count, r) : "",
            M = r.ordinal && O ? this.pluralResolver.getSuffix(f, r.count, {
                ordinal: !1
            }) : "",
            D = O && !r.ordinal && r.count === 0,
            v = D && r[`defaultValue${this.options.pluralSeparator}zero`] || r[`defaultValue${C}`] || r[`defaultValue${M}`] || r.defaultValue;
        let k = d;
        L && !d && W && (k = v);
        const I = Dr(k),
            E = Object.prototype.toString.apply(k);
        if (L && k && I && x.indexOf(E) < 0 && !(fe(R) && Array.isArray(k))) {
            if (!r.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const S = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, k, { ...r,
                    ns: l
                }) : `key '${a} (${this.language})' returned an object instead of string.`;
                return s ? (h.res = S, h.usedParams = this.getUsedParamsDetails(r), h) : S
            }
            if (o) {
                const S = Array.isArray(k),
                    N = S ? [] : {},
                    J = S ? w : g;
                for (const Y in k)
                    if (Object.prototype.hasOwnProperty.call(k, Y)) {
                        const K = `${J}${o}${Y}`;
                        W && !d ? N[Y] = this.translate(K, { ...r,
                            defaultValue: Dr(v) ? v[Y] : void 0,
                            joinArrays: !1,
                            ns: l
                        }) : N[Y] = this.translate(K, { ...r,
                            joinArrays: !1,
                            ns: l
                        }), N[Y] === K && (N[Y] = k[Y])
                    }
                d = N
            }
        } else if (L && fe(R) && Array.isArray(d)) d = d.join(R), d && (d = this.extendTranslation(d, e, r, i));
        else {
            let S = !1,
                N = !1;
            !this.isValidLookup(d) && W && (S = !0, d = v), this.isValidLookup(d) || (N = !0, d = a);
            const Y = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && N ? void 0 : d,
                K = W && v !== d && this.options.updateMissing;
            if (N || S || K) {
                if (this.logger.log(K ? "updateKey" : "missingKey", f, u, a, K ? v : d), o) {
                    const ke = this.resolve(a, { ...r,
                        keySeparator: !1
                    });
                    ke && ke.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let le = [];
                const me = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && me && me[0])
                    for (let ke = 0; ke < me.length; ke++) le.push(me[ke]);
                else this.options.saveMissingTo === "all" ? le = this.languageUtils.toResolveHierarchy(r.lng || this.language) : le.push(r.lng || this.language);
                const Le = (ke, Ce, Me) => {
                    var je;
                    const ft = W && Me !== d ? Me : Y;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(ke, u, Ce, ft, K, r) : (je = this.backendConnector) != null && je.saveMissing && this.backendConnector.saveMissing(ke, u, Ce, ft, K, r), this.emit("missingKey", ke, u, Ce, d)
                };
                this.options.saveMissing && (this.options.saveMissingPlurals && O ? le.forEach(ke => {
                    const Ce = this.pluralResolver.getSuffixes(ke, r);
                    D && r[`defaultValue${this.options.pluralSeparator}zero`] && Ce.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Ce.push(`${this.options.pluralSeparator}zero`), Ce.forEach(Me => {
                        Le([ke], a + Me, r[`defaultValue${Me}`] || v)
                    })
                }) : Le(le, a, v))
            }
            d = this.extendTranslation(d, e, r, h, i), N && d === a && this.options.appendNamespaceToMissingKey && (d = `${u}${c}${a}`), (N || S) && this.options.parseMissingKeyHandler && (d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${c}${a}` : a, S ? d : void 0, r))
        }
        return s ? (h.res = d, h.usedParams = this.getUsedParamsDetails(r), h) : d
    }
    extendTranslation(e, n, i, r, s) {
        var l, u;
        if ((l = this.i18nFormat) != null && l.parse) e = this.i18nFormat.parse(e, { ...this.options.interpolation.defaultVariables,
            ...i
        }, i.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
            resolved: r
        });
        else if (!i.skipInterpolation) {
            i.interpolation && this.interpolator.init({ ...i,
                interpolation: { ...this.options.interpolation,
                    ...i.interpolation
                }
            });
            const c = fe(e) && (((u = i == null ? void 0 : i.interpolation) == null ? void 0 : u.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let f;
            if (c) {
                const h = e.match(this.interpolator.nestingRegexp);
                f = h && h.length
            }
            let p = i.replace && !fe(i.replace) ? i.replace : i;
            if (this.options.interpolation.defaultVariables && (p = { ...this.options.interpolation.defaultVariables,
                    ...p
                }), e = this.interpolator.interpolate(e, p, i.lng || this.language || r.usedLng, i), c) {
                const h = e.match(this.interpolator.nestingRegexp),
                    d = h && h.length;
                f < d && (i.nest = !1)
            }!i.lng && r && r.res && (i.lng = this.language || r.usedLng), i.nest !== !1 && (e = this.interpolator.nest(e, (...h) => (s == null ? void 0 : s[0]) === h[0] && !i.context ? (this.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${n[0]}`), null) : this.translate(...h, n), i)), i.interpolation && this.interpolator.reset()
        }
        const o = i.postProcess || this.options.postProcess,
            a = fe(o) ? [o] : o;
        return e != null && (a != null && a.length) && i.applyPostProcessor !== !1 && (e = ru.handle(a, e, n, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: { ...r,
                usedParams: this.getUsedParamsDetails(i)
            },
            ...i
        } : i, this)), e
    }
    resolve(e, n = {}) {
        let i, r, s, o, a;
        return fe(e) && (e = [e]), e.forEach(l => {
            if (this.isValidLookup(i)) return;
            const u = this.extractFromKey(l, n),
                c = u.key;
            r = c;
            let f = u.namespaces;
            this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
            const p = n.count !== void 0 && !fe(n.count),
                h = p && !n.ordinal && n.count === 0,
                d = n.context !== void 0 && (fe(n.context) || typeof n.context == "number") && n.context !== "",
                g = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
            f.forEach(w => {
                var x, R;
                this.isValidLookup(i) || (a = w, !jo[`${g[0]}-${w}`] && ((x = this.utils) != null && x.hasLoadedNamespace) && !((R = this.utils) != null && R.hasLoadedNamespace(a)) && (jo[`${g[0]}-${w}`] = !0, this.logger.warn(`key "${r}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach(L => {
                    var C;
                    if (this.isValidLookup(i)) return;
                    o = L;
                    const O = [c];
                    if ((C = this.i18nFormat) != null && C.addLookupKeys) this.i18nFormat.addLookupKeys(O, c, L, w, n);
                    else {
                        let M;
                        p && (M = this.pluralResolver.getSuffix(L, n.count, n));
                        const D = `${this.options.pluralSeparator}zero`,
                            v = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (p && (n.ordinal && M.indexOf(v) === 0 && O.push(c + M.replace(v, this.options.pluralSeparator)), O.push(c + M), h && O.push(c + D)), d) {
                            const k = `${c}${this.options.contextSeparator||"_"}${n.context}`;
                            O.push(k), p && (n.ordinal && M.indexOf(v) === 0 && O.push(k + M.replace(v, this.options.pluralSeparator)), O.push(k + M), h && O.push(k + D))
                        }
                    }
                    let W;
                    for (; W = O.pop();) this.isValidLookup(i) || (s = W, i = this.getResource(L, w, W, n))
                }))
            })
        }), {
            res: i,
            usedKey: r,
            exactUsedKey: s,
            usedLng: o,
            usedNS: a
        }
    }
    isValidLookup(e) {
        return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "")
    }
    getResource(e, n, i, r = {}) {
        var s;
        return (s = this.i18nFormat) != null && s.getResource ? this.i18nFormat.getResource(e, n, i, r) : this.resourceStore.getResource(e, n, i, r)
    }
    getUsedParamsDetails(e = {}) {
        const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
            i = e.replace && !fe(e.replace);
        let r = i ? e.replace : e;
        if (i && typeof e.count < "u" && (r.count = e.count), this.options.interpolation.defaultVariables && (r = { ...this.options.interpolation.defaultVariables,
                ...r
            }), !i) {
            r = { ...r
            };
            for (const s of n) delete r[s]
        }
        return r
    }
    static hasDefaultValue(e) {
        const n = "defaultValue";
        for (const i in e)
            if (Object.prototype.hasOwnProperty.call(e, i) && n === i.substring(0, n.length) && e[i] !== void 0) return !0;
        return !1
    }
}
class Vo {
    constructor(e) {
        this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Ft.create("languageUtils")
    }
    getScriptPartFromCode(e) {
        if (e = wi(e), !e || e.indexOf("-") < 0) return null;
        const n = e.split("-");
        return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"))
    }
    getLanguagePartFromCode(e) {
        if (e = wi(e), !e || e.indexOf("-") < 0) return e;
        const n = e.split("-");
        return this.formatLanguageCode(n[0])
    }
    formatLanguageCode(e) {
        if (fe(e) && e.indexOf("-") > -1) {
            let n;
            try {
                n = Intl.getCanonicalLocales(e)[0]
            } catch {}
            return n && this.options.lowerCaseLng && (n = n.toLowerCase()), n || (this.options.lowerCaseLng ? e.toLowerCase() : e)
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
    }
    isSupportedCode(e) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
    }
    getBestMatchFromCodes(e) {
        if (!e) return null;
        let n;
        return e.forEach(i => {
            if (n) return;
            const r = this.formatLanguageCode(i);
            (!this.options.supportedLngs || this.isSupportedCode(r)) && (n = r)
        }), !n && this.options.supportedLngs && e.forEach(i => {
            if (n) return;
            const r = this.getScriptPartFromCode(i);
            if (this.isSupportedCode(r)) return n = r;
            const s = this.getLanguagePartFromCode(i);
            if (this.isSupportedCode(s)) return n = s;
            n = this.options.supportedLngs.find(o => {
                if (o === s) return o;
                if (!(o.indexOf("-") < 0 && s.indexOf("-") < 0) && (o.indexOf("-") > 0 && s.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === s || o.indexOf(s) === 0 && s.length > 1)) return o
            })
        }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n
    }
    getFallbackCodes(e, n) {
        if (!e) return [];
        if (typeof e == "function" && (e = e(n)), fe(e) && (e = [e]), Array.isArray(e)) return e;
        if (!n) return e.default || [];
        let i = e[n];
        return i || (i = e[this.getScriptPartFromCode(n)]), i || (i = e[this.formatLanguageCode(n)]), i || (i = e[this.getLanguagePartFromCode(n)]), i || (i = e.default), i || []
    }
    toResolveHierarchy(e, n) {
        const i = this.getFallbackCodes((n === !1 ? [] : n) || this.options.fallbackLng || [], e),
            r = [],
            s = o => {
                o && (this.isSupportedCode(o) ? r.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))
            };
        return fe(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(e))) : fe(e) && s(this.formatLanguageCode(e)), i.forEach(o => {
            r.indexOf(o) < 0 && s(this.formatLanguageCode(o))
        }), r
    }
}
const qo = {
        zero: 0,
        one: 1,
        two: 2,
        few: 3,
        many: 4,
        other: 5
    },
    zo = {
        select: t => t === 1 ? "one" : "other",
        resolvedOptions: () => ({
            pluralCategories: ["one", "other"]
        })
    };
class bh {
    constructor(e, n = {}) {
        this.languageUtils = e, this.options = n, this.logger = Ft.create("pluralResolver"), this.pluralRulesCache = {}
    }
    clearCache() {
        this.pluralRulesCache = {}
    }
    getRule(e, n = {}) {
        const i = wi(e === "dev" ? "en" : e),
            r = n.ordinal ? "ordinal" : "cardinal",
            s = JSON.stringify({
                cleanedCode: i,
                type: r
            });
        if (s in this.pluralRulesCache) return this.pluralRulesCache[s];
        let o;
        try {
            o = new Intl.PluralRules(i, {
                type: r
            })
        } catch {
            if (typeof Intl > "u") return this.logger.error("No Intl support, please use an Intl polyfill!"), zo;
            if (!e.match(/-|_/)) return zo;
            const l = this.languageUtils.getLanguagePartFromCode(e);
            o = this.getRule(l, n)
        }
        return this.pluralRulesCache[s] = o, o
    }
    needsPlural(e, n = {}) {
        let i = this.getRule(e, n);
        return i || (i = this.getRule("dev", n)), (i == null ? void 0 : i.resolvedOptions().pluralCategories.length) > 1
    }
    getPluralFormsOfKey(e, n, i = {}) {
        return this.getSuffixes(e, i).map(r => `${n}${r}`)
    }
    getSuffixes(e, n = {}) {
        let i = this.getRule(e, n);
        return i || (i = this.getRule("dev", n)), i ? i.resolvedOptions().pluralCategories.sort((r, s) => qo[r] - qo[s]).map(r => `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r}`) : []
    }
    getSuffix(e, n, i = {}) {
        const r = this.getRule(e, i);
        return r ? `${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(n)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", n, i))
    }
}
const Ko = (t, e, n, i = ".", r = !0) => {
        let s = fh(t, e, n);
        return !s && r && fe(n) && (s = ns(t, n, i), s === void 0 && (s = ns(e, n, i))), s
    },
    Mr = t => t.replace(/\$/g, "$$$$");
class Xo {
    constructor(e = {}) {
        var n;
        this.logger = Ft.create("interpolator"), this.options = e, this.format = ((n = e == null ? void 0 : e.interpolation) == null ? void 0 : n.format) || (i => i), this.init(e)
    }
    init(e = {}) {
        e.interpolation || (e.interpolation = {
            escapeValue: !0
        });
        const {
            escape: n,
            escapeValue: i,
            useRawValueToEscape: r,
            prefix: s,
            prefixEscaped: o,
            suffix: a,
            suffixEscaped: l,
            formatSeparator: u,
            unescapeSuffix: c,
            unescapePrefix: f,
            nestingPrefix: p,
            nestingPrefixEscaped: h,
            nestingSuffix: d,
            nestingSuffixEscaped: g,
            nestingOptionsSeparator: w,
            maxReplaces: x,
            alwaysFormat: R
        } = e.interpolation;
        this.escape = n !== void 0 ? n : hh, this.escapeValue = i !== void 0 ? i : !0, this.useRawValueToEscape = r !== void 0 ? r : !1, this.prefix = s ? yn(s) : o || "{{", this.suffix = a ? yn(a) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : f || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = p ? yn(p) : h || yn("$t("), this.nestingSuffix = d ? yn(d) : g || yn(")"), this.nestingOptionsSeparator = w || ",", this.maxReplaces = x || 1e3, this.alwaysFormat = R !== void 0 ? R : !1, this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const e = (n, i) => (n == null ? void 0 : n.source) === i ? (n.lastIndex = 0, n) : new RegExp(i, "g");
        this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)
    }
    interpolate(e, n, i, r) {
        var h;
        let s, o, a;
        const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
            u = d => {
                if (d.indexOf(this.formatSeparator) < 0) {
                    const R = Ko(n, l, d, this.options.keySeparator, this.options.ignoreJSONStructure);
                    return this.alwaysFormat ? this.format(R, void 0, i, { ...r,
                        ...n,
                        interpolationkey: d
                    }) : R
                }
                const g = d.split(this.formatSeparator),
                    w = g.shift().trim(),
                    x = g.join(this.formatSeparator).trim();
                return this.format(Ko(n, l, w, this.options.keySeparator, this.options.ignoreJSONStructure), x, i, { ...r,
                    ...n,
                    interpolationkey: w
                })
            };
        this.resetRegExp();
        const c = (r == null ? void 0 : r.missingInterpolationHandler) || this.options.missingInterpolationHandler,
            f = ((h = r == null ? void 0 : r.interpolation) == null ? void 0 : h.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: d => Mr(d)
        }, {
            regex: this.regexp,
            safeValue: d => this.escapeValue ? Mr(this.escape(d)) : Mr(d)
        }].forEach(d => {
            for (a = 0; s = d.regex.exec(e);) {
                const g = s[1].trim();
                if (o = u(g), o === void 0)
                    if (typeof c == "function") {
                        const x = c(e, s, r);
                        o = fe(x) ? x : ""
                    } else if (r && Object.prototype.hasOwnProperty.call(r, g)) o = "";
                else if (f) {
                    o = s[0];
                    continue
                } else this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`), o = "";
                else !fe(o) && !this.useRawValueToEscape && (o = $o(o));
                const w = d.safeValue(o);
                if (e = e.replace(s[0], w), f ? (d.regex.lastIndex += o.length, d.regex.lastIndex -= s[0].length) : d.regex.lastIndex = 0, a++, a >= this.maxReplaces) break
            }
        }), e
    }
    nest(e, n, i = {}) {
        let r, s, o;
        const a = (l, u) => {
            const c = this.nestingOptionsSeparator;
            if (l.indexOf(c) < 0) return l;
            const f = l.split(new RegExp(`${yn(c)}[ ]*{`));
            let p = `{${f[1]}`;
            l = f[0], p = this.interpolate(p, o);
            const h = p.match(/'/g),
                d = p.match(/"/g);
            (((h == null ? void 0 : h.length) ? ? 0) % 2 === 0 && !d || ((d == null ? void 0 : d.length) ? ? 0) % 2 !== 0) && (p = p.replace(/'/g, '"'));
            try {
                o = JSON.parse(p), u && (o = { ...u,
                    ...o
                })
            } catch (g) {
                return this.logger.warn(`failed parsing options string in nesting for key ${l}`, g), `${l}${c}${p}`
            }
            return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, l
        };
        for (; r = this.nestingRegexp.exec(e);) {
            let l = [];
            o = { ...i
            }, o = o.replace && !fe(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
            const u = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
            if (u !== -1 && (l = r[1].slice(u).split(this.formatSeparator).map(c => c.trim()).filter(Boolean), r[1] = r[1].slice(0, u)), s = n(a.call(this, r[1].trim(), o), o), s && r[0] === e && !fe(s)) return s;
            fe(s) || (s = $o(s)), s || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), s = ""), l.length && (s = l.reduce((c, f) => this.format(c, f, i.lng, { ...i,
                interpolationkey: r[1].trim()
            }), s.trim())), e = e.replace(r[0], s), this.regexp.lastIndex = 0
        }
        return e
    }
}
const Sh = t => {
        let e = t.toLowerCase().trim();
        const n = {};
        if (t.indexOf("(") > -1) {
            const i = t.split("(");
            e = i[0].toLowerCase().trim();
            const r = i[1].substring(0, i[1].length - 1);
            e === "currency" && r.indexOf(":") < 0 ? n.currency || (n.currency = r.trim()) : e === "relativetime" && r.indexOf(":") < 0 ? n.range || (n.range = r.trim()) : r.split(";").forEach(o => {
                if (o) {
                    const [a, ...l] = o.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), c = a.trim();
                    n[c] || (n[c] = u), u === "false" && (n[c] = !1), u === "true" && (n[c] = !0), isNaN(u) || (n[c] = parseInt(u, 10))
                }
            })
        }
        return {
            formatName: e,
            formatOptions: n
        }
    },
    Jo = t => {
        const e = {};
        return (n, i, r) => {
            let s = r;
            r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (s = { ...s,
                [r.interpolationkey]: void 0
            });
            const o = i + JSON.stringify(s);
            let a = e[o];
            return a || (a = t(wi(i), r), e[o] = a), a(n)
        }
    },
    xh = t => (e, n, i) => t(wi(n), i)(e);
class Th {
    constructor(e = {}) {
        this.logger = Ft.create("formatter"), this.options = e, this.init(e)
    }
    init(e, n = {
        interpolation: {}
    }) {
        this.formatSeparator = n.interpolation.formatSeparator || ",";
        const i = n.cacheInBuiltFormats ? Jo : xh;
        this.formats = {
            number: i((r, s) => {
                const o = new Intl.NumberFormat(r, { ...s
                });
                return a => o.format(a)
            }),
            currency: i((r, s) => {
                const o = new Intl.NumberFormat(r, { ...s,
                    style: "currency"
                });
                return a => o.format(a)
            }),
            datetime: i((r, s) => {
                const o = new Intl.DateTimeFormat(r, { ...s
                });
                return a => o.format(a)
            }),
            relativetime: i((r, s) => {
                const o = new Intl.RelativeTimeFormat(r, { ...s
                });
                return a => o.format(a, s.range || "day")
            }),
            list: i((r, s) => {
                const o = new Intl.ListFormat(r, { ...s
                });
                return a => o.format(a)
            })
        }
    }
    add(e, n) {
        this.formats[e.toLowerCase().trim()] = n
    }
    addCached(e, n) {
        this.formats[e.toLowerCase().trim()] = Jo(n)
    }
    format(e, n, i, r = {}) {
        const s = n.split(this.formatSeparator);
        if (s.length > 1 && s[0].indexOf("(") > 1 && s[0].indexOf(")") < 0 && s.find(a => a.indexOf(")") > -1)) {
            const a = s.findIndex(l => l.indexOf(")") > -1);
            s[0] = [s[0], ...s.splice(1, a)].join(this.formatSeparator)
        }
        return s.reduce((a, l) => {
            var f;
            const {
                formatName: u,
                formatOptions: c
            } = Sh(l);
            if (this.formats[u]) {
                let p = a;
                try {
                    const h = ((f = r == null ? void 0 : r.formatParams) == null ? void 0 : f[r.interpolationkey]) || {},
                        d = h.locale || h.lng || r.locale || r.lng || i;
                    p = this.formats[u](a, d, { ...c,
                        ...r,
                        ...h
                    })
                } catch (h) {
                    this.logger.warn(h)
                }
                return p
            } else this.logger.warn(`there was no format function for ${u}`);
            return a
        }, e)
    }
}
const kh = (t, e) => {
    t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--)
};
class _h extends gr {
    constructor(e, n, i, r = {}) {
        var s, o;
        super(), this.backend = e, this.store = n, this.services = i, this.languageUtils = i.languageUtils, this.options = r, this.logger = Ft.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], (o = (s = this.backend) == null ? void 0 : s.init) == null || o.call(s, i, r.backend, r)
    }
    queueLoad(e, n, i, r) {
        const s = {},
            o = {},
            a = {},
            l = {};
        return e.forEach(u => {
            let c = !0;
            n.forEach(f => {
                const p = `${u}|${f}`;
                !i.reload && this.store.hasResourceBundle(u, f) ? this.state[p] = 2 : this.state[p] < 0 || (this.state[p] === 1 ? o[p] === void 0 && (o[p] = !0) : (this.state[p] = 1, c = !1, o[p] === void 0 && (o[p] = !0), s[p] === void 0 && (s[p] = !0), l[f] === void 0 && (l[f] = !0)))
            }), c || (a[u] = !0)
        }), (Object.keys(s).length || Object.keys(o).length) && this.queue.push({
            pending: o,
            pendingCount: Object.keys(o).length,
            loaded: {},
            errors: [],
            callback: r
        }), {
            toLoad: Object.keys(s),
            pending: Object.keys(o),
            toLoadLanguages: Object.keys(a),
            toLoadNamespaces: Object.keys(l)
        }
    }
    loaded(e, n, i) {
        const r = e.split("|"),
            s = r[0],
            o = r[1];
        n && this.emit("failedLoading", s, o, n), !n && i && this.store.addResourceBundle(s, o, i, void 0, void 0, {
            skipCopy: !0
        }), this.state[e] = n ? -1 : 2, n && i && (this.state[e] = 0);
        const a = {};
        this.queue.forEach(l => {
            ch(l.loaded, [s], o), kh(l, e), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach(u => {
                a[u] || (a[u] = {});
                const c = l.loaded[u];
                c.length && c.forEach(f => {
                    a[u][f] === void 0 && (a[u][f] = !0)
                })
            }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback())
        }), this.emit("loaded", a), this.queue = this.queue.filter(l => !l.done)
    }
    read(e, n, i, r = 0, s = this.retryTimeout, o) {
        if (!e.length) return o(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: e,
                ns: n,
                fcName: i,
                tried: r,
                wait: s,
                callback: o
            });
            return
        }
        this.readingCalls++;
        const a = (u, c) => {
                if (this.readingCalls--, this.waitingReads.length > 0) {
                    const f = this.waitingReads.shift();
                    this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback)
                }
                if (u && c && r < this.maxRetries) {
                    setTimeout(() => {
                        this.read.call(this, e, n, i, r + 1, s * 2, o)
                    }, s);
                    return
                }
                o(u, c)
            },
            l = this.backend[i].bind(this.backend);
        if (l.length === 2) {
            try {
                const u = l(e, n);
                u && typeof u.then == "function" ? u.then(c => a(null, c)).catch(a) : a(null, u)
            } catch (u) {
                a(u)
            }
            return
        }
        return l(e, n, a)
    }
    prepareLoading(e, n, i = {}, r) {
        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
        fe(e) && (e = this.languageUtils.toResolveHierarchy(e)), fe(n) && (n = [n]);
        const s = this.queueLoad(e, n, i, r);
        if (!s.toLoad.length) return s.pending.length || r(), null;
        s.toLoad.forEach(o => {
            this.loadOne(o)
        })
    }
    load(e, n, i) {
        this.prepareLoading(e, n, {}, i)
    }
    reload(e, n, i) {
        this.prepareLoading(e, n, {
            reload: !0
        }, i)
    }
    loadOne(e, n = "") {
        const i = e.split("|"),
            r = i[0],
            s = i[1];
        this.read(r, s, "read", void 0, void 0, (o, a) => {
            o && this.logger.warn(`${n}loading namespace ${s} for language ${r} failed`, o), !o && a && this.logger.log(`${n}loaded namespace ${s} for language ${r}`, a), this.loaded(e, o, a)
        })
    }
    saveMissing(e, n, i, r, s, o = {}, a = () => {}) {
        var l, u, c, f, p;
        if ((u = (l = this.services) == null ? void 0 : l.utils) != null && u.hasLoadedNamespace && !((f = (c = this.services) == null ? void 0 : c.utils) != null && f.hasLoadedNamespace(n))) {
            this.logger.warn(`did not save key "${i}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(i == null || i === "")) {
            if ((p = this.backend) != null && p.create) {
                const h = { ...o,
                        isUpdate: s
                    },
                    d = this.backend.create.bind(this.backend);
                if (d.length < 6) try {
                    let g;
                    d.length === 5 ? g = d(e, n, i, r, h) : g = d(e, n, i, r), g && typeof g.then == "function" ? g.then(w => a(null, w)).catch(a) : a(null, g)
                } catch (g) {
                    a(g)
                } else d(e, n, i, r, a, h)
            }!e || !e[0] || this.store.addResource(e[0], n, i, r)
        }
    }
}
const Nr = () => ({
        debug: !1,
        initAsync: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: t => {
            let e = {};
            if (typeof t[1] == "object" && (e = t[1]), fe(t[1]) && (e.defaultValue = t[1]), fe(t[2]) && (e.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
                const n = t[3] || t[2];
                Object.keys(n).forEach(i => {
                    e[i] = n[i]
                })
            }
            return e
        },
        interpolation: {
            escapeValue: !0,
            format: t => t,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        },
        cacheInBuiltFormats: !0
    }),
    Go = t => {
        var e, n;
        return fe(t.ns) && (t.ns = [t.ns]), fe(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]), fe(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]), ((n = (e = t.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : n.call(e, "cimode")) < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), typeof t.initImmediate == "boolean" && (t.initAsync = t.initImmediate), t
    },
    Mi = () => {},
    Ch = t => {
        Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n => {
            typeof t[n] == "function" && (t[n] = t[n].bind(t))
        })
    },
    ou = "__i18next_supportNoticeShown",
    Eh = () => typeof globalThis < "u" && !!globalThis[ou],
    Ih = () => {
        typeof globalThis < "u" && (globalThis[ou] = !0)
    },
    Ah = t => {
        var e, n, i, r, s, o, a, l, u, c, f, p, h;
        return !!(((i = (n = (e = t == null ? void 0 : t.modules) == null ? void 0 : e.backend) == null ? void 0 : n.name) == null ? void 0 : i.indexOf("Locize")) > 0 || ((a = (o = (s = (r = t == null ? void 0 : t.modules) == null ? void 0 : r.backend) == null ? void 0 : s.constructor) == null ? void 0 : o.name) == null ? void 0 : a.indexOf("Locize")) > 0 || (u = (l = t == null ? void 0 : t.options) == null ? void 0 : l.backend) != null && u.backends && t.options.backend.backends.some(d => {
            var g, w, x;
            return ((g = d == null ? void 0 : d.name) == null ? void 0 : g.indexOf("Locize")) > 0 || ((x = (w = d == null ? void 0 : d.constructor) == null ? void 0 : w.name) == null ? void 0 : x.indexOf("Locize")) > 0
        }) || (f = (c = t == null ? void 0 : t.options) == null ? void 0 : c.backend) != null && f.projectId || (h = (p = t == null ? void 0 : t.options) == null ? void 0 : p.backend) != null && h.backendOptions && t.options.backend.backendOptions.some(d => d == null ? void 0 : d.projectId))
    };
class ui extends gr {
    constructor(e = {}, n) {
        if (super(), this.options = Go(e), this.services = {}, this.logger = Ft, this.modules = {
                external: []
            }, Ch(this), n && !this.isInitialized && !e.isClone) {
            if (!this.options.initAsync) return this.init(e, n), this;
            setTimeout(() => {
                this.init(e, n)
            }, 0)
        }
    }
    init(e = {}, n) {
        this.isInitializing = !0, typeof e == "function" && (n = e, e = {}), e.defaultNS == null && e.ns && (fe(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
        const i = Nr();
        this.options = { ...i,
            ...this.options,
            ...Go(e)
        }, this.options.interpolation = { ...i.interpolation,
            ...this.options.interpolation
        }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = i.overloadTranslationOptionHandler), this.options.showSupportNotice !== !1 && !Ah(this) && !Eh() && Ih();
        const r = u => u ? typeof u == "function" ? new u : u : null;
        if (!this.options.isClone) {
            this.modules.logger ? Ft.init(r(this.modules.logger), this.options) : Ft.init(null, this.options);
            let u;
            this.modules.formatter ? u = this.modules.formatter : u = Th;
            const c = new Vo(this.options);
            this.store = new Uo(this.options.resources, this.options);
            const f = this.services;
            f.logger = Ft, f.resourceStore = this.store, f.languageUtils = c, f.pluralResolver = new bh(c, {
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }), this.options.interpolation.format && this.options.interpolation.format !== i.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), u && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (f.formatter = r(u), f.formatter.init && f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Xo(this.options), f.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            }, f.backendConnector = new _h(r(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", (h, ...d) => {
                this.emit(h, ...d)
            }), this.modules.languageDetector && (f.languageDetector = r(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = r(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new er(this.services, this.options), this.translator.on("*", (h, ...d) => {
                this.emit(h, ...d)
            }), this.modules.external.forEach(h => {
                h.init && h.init(this)
            })
        }
        if (this.format = this.options.interpolation.format, n || (n = Mi), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0])
        }!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(u => {
            this[u] = (...c) => this.store[u](...c)
        }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(u => {
            this[u] = (...c) => (this.store[u](...c), this)
        });
        const a = Qn(),
            l = () => {
                const u = (c, f) => {
                    this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(f), n(c, f)
                };
                if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, u)
            };
        return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), a
    }
    loadResources(e, n = Mi) {
        var s, o;
        let i = n;
        const r = fe(e) ? e : this.language;
        if (typeof e == "function" && (i = e), !this.options.resources || this.options.partialBundledLanguages) {
            if ((r == null ? void 0 : r.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return i();
            const a = [],
                l = u => {
                    if (!u || u === "cimode") return;
                    this.services.languageUtils.toResolveHierarchy(u).forEach(f => {
                        f !== "cimode" && a.indexOf(f) < 0 && a.push(f)
                    })
                };
            r ? l(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(c => l(c)), (o = (s = this.options.preload) == null ? void 0 : s.forEach) == null || o.call(s, u => l(u)), this.services.backendConnector.load(a, this.options.ns, u => {
                !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), i(u)
            })
        } else i(null)
    }
    reloadResources(e, n, i) {
        const r = Qn();
        return typeof e == "function" && (i = e, e = void 0), typeof n == "function" && (i = n, n = void 0), e || (e = this.languages), n || (n = this.options.ns), i || (i = Mi), this.services.backendConnector.reload(e, n, s => {
            r.resolve(), i(s)
        }), r
    }
    use(e) {
        if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && ru.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this
    }
    setResolvedLanguage(e) {
        if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
            for (let n = 0; n < this.languages.length; n++) {
                const i = this.languages[n];
                if (!(["cimode", "dev"].indexOf(i) > -1) && this.store.hasLanguageSomeTranslations(i)) {
                    this.resolvedLanguage = i;
                    break
                }
            }!this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e))
        }
    }
    changeLanguage(e, n) {
        this.isLanguageChangingTo = e;
        const i = Qn();
        this.emit("languageChanging", e);
        const r = a => {
                this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a)
            },
            s = (a, l) => {
                l ? this.isLanguageChangingTo === e && (r(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, i.resolve((...u) => this.t(...u)), n && n(a, (...u) => this.t(...u))
            },
            o = a => {
                var c, f;
                !e && !a && this.services.languageDetector && (a = []);
                const l = fe(a) ? a : a && a[0],
                    u = this.store.hasLanguageSomeTranslations(l) ? l : this.services.languageUtils.getBestMatchFromCodes(fe(a) ? [a] : a);
                u && (this.language || r(u), this.translator.language || this.translator.changeLanguage(u), (f = (c = this.services.languageDetector) == null ? void 0 : c.cacheUserLanguage) == null || f.call(c, u)), this.loadResources(u, p => {
                    s(p, u)
                })
            };
        return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), i
    }
    getFixedT(e, n, i) {
        const r = (s, o, ...a) => {
            let l;
            typeof o != "object" ? l = this.options.overloadTranslationOptionHandler([s, o].concat(a)) : l = { ...o
            }, l.lng = l.lng || r.lng, l.lngs = l.lngs || r.lngs, l.ns = l.ns || r.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || i || r.keyPrefix);
            const u = this.options.keySeparator || ".";
            let c;
            return l.keyPrefix && Array.isArray(s) ? c = s.map(f => (typeof f == "function" && (f = is(f, { ...this.options,
                ...o
            })), `${l.keyPrefix}${u}${f}`)) : (typeof s == "function" && (s = is(s, { ...this.options,
                ...o
            })), c = l.keyPrefix ? `${l.keyPrefix}${u}${s}` : s), this.t(c, l)
        };
        return fe(e) ? r.lng = e : r.lngs = e, r.ns = n, r.keyPrefix = i, r
    }
    t(...e) {
        var n;
        return (n = this.translator) == null ? void 0 : n.translate(...e)
    }
    exists(...e) {
        var n;
        return (n = this.translator) == null ? void 0 : n.exists(...e)
    }
    setDefaultNamespace(e) {
        this.options.defaultNS = e
    }
    hasLoadedNamespace(e, n = {}) {
        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
        const i = n.lng || this.resolvedLanguage || this.languages[0],
            r = this.options ? this.options.fallbackLng : !1,
            s = this.languages[this.languages.length - 1];
        if (i.toLowerCase() === "cimode") return !0;
        const o = (a, l) => {
            const u = this.services.backendConnector.state[`${a}|${l}`];
            return u === -1 || u === 0 || u === 2
        };
        if (n.precheck) {
            const a = n.precheck(this, o);
            if (a !== void 0) return a
        }
        return !!(this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(i, e) && (!r || o(s, e)))
    }
    loadNamespaces(e, n) {
        const i = Qn();
        return this.options.ns ? (fe(e) && (e = [e]), e.forEach(r => {
            this.options.ns.indexOf(r) < 0 && this.options.ns.push(r)
        }), this.loadResources(r => {
            i.resolve(), n && n(r)
        }), i) : (n && n(), Promise.resolve())
    }
    loadLanguages(e, n) {
        const i = Qn();
        fe(e) && (e = [e]);
        const r = this.options.preload || [],
            s = e.filter(o => r.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
        return s.length ? (this.options.preload = r.concat(s), this.loadResources(o => {
            i.resolve(), n && n(o)
        }), i) : (n && n(), Promise.resolve())
    }
    dir(e) {
        var r, s;
        if (e || (e = this.resolvedLanguage || (((r = this.languages) == null ? void 0 : r.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
        try {
            const o = new Intl.Locale(e);
            if (o && o.getTextInfo) {
                const a = o.getTextInfo();
                if (a && a.direction) return a.direction
            }
        } catch {}
        const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
            i = ((s = this.services) == null ? void 0 : s.languageUtils) || new Vo(Nr());
        return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : n.indexOf(i.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance(e = {}, n) {
        const i = new ui(e, n);
        return i.createInstance = ui.createInstance, i
    }
    cloneInstance(e = {}, n = Mi) {
        const i = e.forkResourceStore;
        i && delete e.forkResourceStore;
        const r = { ...this.options,
                ...e,
                isClone: !0
            },
            s = new ui(r);
        if ((e.debug !== void 0 || e.prefix !== void 0) && (s.logger = s.logger.clone(e)), ["store", "services", "language"].forEach(a => {
                s[a] = this[a]
            }), s.services = { ...this.services
            }, s.services.utils = {
                hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
            }, i) {
            const a = Object.keys(this.store.data).reduce((l, u) => (l[u] = { ...this.store.data[u]
            }, l[u] = Object.keys(l[u]).reduce((c, f) => (c[f] = { ...l[u][f]
            }, c), l[u]), l), {});
            s.store = new Uo(a, r), s.services.resourceStore = s.store
        }
        if (e.interpolation) {
            const l = { ...Nr().interpolation,
                    ...this.options.interpolation,
                    ...e.interpolation
                },
                u = { ...r,
                    interpolation: l
                };
            s.services.interpolator = new Xo(u)
        }
        return s.translator = new er(s.services, r), s.translator.on("*", (a, ...l) => {
            s.emit(a, ...l)
        }), s.init(r, n), s.translator.options = r, s.translator.backendConnector.services.utils = {
            hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
        }, s
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const et = ui.createInstance();
et.createInstance;
et.dir;
et.init;
et.loadResources;
et.reloadResources;
et.use;
et.changeLanguage;
et.getFixedT;
et.t;
et.exists;
et.setDefaultNamespace;
et.hasLoadedNamespace;
et.loadNamespaces;
et.loadLanguages;
const Oh = {
    isValidStore() {
        let t = !1,
            e = !1;
        const n = !!(window.Shopify && typeof window.Shopify == "object" && window.Shopify.shop);
        for (const i of document.querySelectorAll("link"))
            if (i.href.includes("cdn.shopify.com") || i.href.includes("shopifycdn.com")) {
                t = !0;
                break
            }
        if (!t) {
            for (const i of document.scripts)
                if (i.src.includes("cdn.shopify.com") || i.src.includes("shopifycdn.com")) {
                    e = !0;
                    break
                }
        }
        return n && (t || e)
    }
};
class Lh {
    constructor() {
        j(this, "TawkWindow", null);
        j(this, "languageScript");
        j(this, "version", null);
        this.languageScript = void 0
    }
    install(e, {
        TawkWindow: n
    }) {
        e && e.provide("widgetSettings", this), this.TawkWindow = n
    }
    getSettings(e, n) {
        const i = {
                propertyId: We().id,
                widgetId: z().id
            },
            r = pe.sessionStore().getItem("tawk_sv");
        this.version ? i.sv = this.version : r !== void 0 ? i.sv = r : i.sv = null, at.get("https://va.tawk.to/v1/widget-settings", i, null, (s, o) => {
            if (s) return n(s);
            const a = o.data.widget.language || "en";
            et.changeLanguage(a, l => {
                l && console.error("[Tawk/Widget-Settings]:", l)
            }), this.processSettings(o.data), e(o.data.settingsVersion)
        })
    }
    processSettings(e) {
        const n = Oh.isValidStore(),
            i = {
                text: "",
                textColor: "#000000",
                url: "",
                whitelabeled: !0
            };
        if (e) {
            this.version = e.settingsVersion, z().setData(e.widget), z().setWebrtcOptions(e.webrtc), z().updateBranding(n ? i : e.branding);
            const r = e.widget;
            typeof r.agentDrivenStatus < "u" && r.agentDrivenStatus === !1 && Q().setPageStatus({
                status: "online"
            })
        }
    }
    xOffset() {
        var n, i, r;
        const e = (i = (n = ae == null ? void 0 : ae.local_API) == null ? void 0 : n.customStyle) == null ? void 0 : i.visibility;
        if (((r = e == null ? void 0 : e.desktop) == null ? void 0 : r.xOffset) !== void 0) {
            let s = e.desktop.xOffset;
            if (typeof s == "string" && (s = parseInt(s.replace("px", ""), 10)), !isNaN(s)) return s
        }
        return z().isCenter && !z().isRoundWidget ? 0 : z().xOffset
    }
    yOffset() {
        var n, i, r;
        const e = (i = (n = ae == null ? void 0 : ae.local_API) == null ? void 0 : n.customStyle) == null ? void 0 : i.visibility;
        if (((r = e == null ? void 0 : e.desktop) == null ? void 0 : r.yOffset) !== void 0) {
            let s = e.desktop.yOffset;
            if (typeof s == "string" && (s = parseInt(s.replace("px", ""), 10)), !isNaN(s)) return s
        }
        return z().isCenter ? 0 : z().yOffset
    }
    xOffsetMobile() {
        var n, i, r;
        const e = (i = (n = ae == null ? void 0 : ae.local_API) == null ? void 0 : n.customStyle) == null ? void 0 : i.visibility;
        if (((r = e == null ? void 0 : e.mobile) == null ? void 0 : r.xOffset) !== void 0) {
            let s = e.mobile.xOffset;
            if (typeof s == "string" && (s = parseInt(s.replace("px", ""), 10)), !isNaN(s)) return s
        }
        return z().isCenter && !z().isRoundWidget ? 0 : z().xOffsetMobile
    }
    yOffsetMobile() {
        var n, i, r;
        const e = (i = (n = ae == null ? void 0 : ae.local_API) == null ? void 0 : n.customStyle) == null ? void 0 : i.visibility;
        if (((r = e == null ? void 0 : e.mobile) == null ? void 0 : r.yOffset) !== void 0) {
            let s = e.mobile.yOffset;
            if (typeof s == "string" && (s = parseInt(s.replace("px", ""), 10)), !isNaN(s)) return s
        }
        return z().isCenter ? 0 : z().yOffsetMobile
    }
    bubbleXOffset() {
        var n, i, r, s, o;
        const e = (i = (n = ae == null ? void 0 : ae.local_API) == null ? void 0 : n.customStyle) == null ? void 0 : i.visibility;
        if (((r = e == null ? void 0 : e.bubble) == null ? void 0 : r.xOffset) !== void 0) {
            let a = e.bubble.xOffset;
            if (typeof a == "string" && (a = parseInt(a.replace("px", ""), 10)), !isNaN(a)) return a
        }
        if (((s = e == null ? void 0 : e.desktop) == null ? void 0 : s.position) !== void 0) {
            const a = (o = e == null ? void 0 : e.desktop) == null ? void 0 : o.position;
            if (a && z().desktopVisibility.position !== a) return z().isCenter ? z().minDesktop.height + 5 : 0
        }
        return z().bubble.config.offsetX
    }
    bubbleYOffset() {
        var n, i, r, s, o;
        const e = (i = (n = ae == null ? void 0 : ae.local_API) == null ? void 0 : n.customStyle) == null ? void 0 : i.visibility;
        if (((r = e == null ? void 0 : e.bubble) == null ? void 0 : r.yOffset) !== void 0) {
            let a = e.bubble.yOffset;
            if (typeof a == "string" && (a = parseInt(a.replace("px", ""), 10)), !isNaN(a)) return a
        }
        if (((s = e == null ? void 0 : e.desktop) == null ? void 0 : s.position) !== void 0) {
            const a = (o = e == null ? void 0 : e.desktop) == null ? void 0 : o.position;
            if (a && z().desktopVisibility.position !== a) return z().isCenter ? 0 : z().minDesktop.height + 5
        }
        return z().bubble.config.offsetY
    }
    bubbleRotate() {
        var i, r, s;
        const e = (r = (i = ae == null ? void 0 : ae.local_API) == null ? void 0 : i.customStyle) == null ? void 0 : r.visibility,
            n = [0, 90, -90];
        if (((s = e == null ? void 0 : e.bubble) == null ? void 0 : s.rotate) !== void 0) {
            let o = e.bubble.rotate;
            if (typeof o == "string" && (o = parseInt(o.replace("deg", ""), 10)), !isNaN(o) && n.indexOf(o) !== -1) return o
        }
        return z().bubble.config.rotate
    }
    isRoundWidget() {
        var i, r, s, o;
        const e = z().isRoundWidget,
            n = (r = (i = ae == null ? void 0 : ae.local_API) == null ? void 0 : i.customStyle) == null ? void 0 : r.visibility;
        if (((s = n == null ? void 0 : n.desktop) == null ? void 0 : s.position) !== void 0) {
            const a = (o = n == null ? void 0 : n.desktop) == null ? void 0 : o.position;
            if (z().desktopVisibility.position !== a) return !1
        }
        return e
    }
}
const sn = new Lh;
class Ph {
    constructor({
        TawkWindow: e
    }) {
        j(this, "TawkWindow");
        j(this, "registerTime", 0);
        j(this, "maxRetrycount", 3);
        j(this, "retryCount", 0);
        j(this, "previousRegisterCall", null);
        j(this, "requestCancelTimeout", null);
        j(this, "connectionCookieInterval", null);
        j(this, "registerDelayTimeout", null);
        j(this, "registerData", null);
        j(this, "registerStarted", !1);
        j(this, "retryDelay", null);
        j(this, "retryInitialDelay", 30);
        j(this, "retryMultiplier", 1.5);
        j(this, "minRandom", .5);
        j(this, "maxRandom", 1.5);
        j(this, "maxDelay", 120);
        j(this, "retryRegisterTimeout", null);
        this.TawkWindow = e
    }
    clearTimers() {
        this.abort(), clearTimeout(this.requestCancelTimeout), clearTimeout(this.registerDelayTimeout), clearTimeout(this.retryRegisterTimeout), clearInterval(this.connectionCookieInterval), this.TawkWindow && pe && pe.cookieStore().setItem("TawkConnectionTime", "0", !0), this.retryRegisterTimeout = null, this.registerDelayTimeout = null, this.requestCancelTimeout = null, this.connectionCookieInterval = null
    }
    async init(e, n, {
        visitor: i
    } = {}) {
        var r, s;
        if (this.registerStarted = !0, this.clearTimers(), await this.prepareData({
                visitor: i
            }), !((r = this.registerData) != null && r.u) && !((s = this.registerData) != null && s.uik)) {
            this.clearTimers(), typeof n == "function" && n();
            return
        }
        this.startRegister(e, n)
    }
    async prepareData({
        visitor: e
    } = {}) {
        var l;
        let n;
        if (!this.TawkWindow) return;
        let i = "";
        const r = Be.getSessionInformation();
        r.length && (i = r[0]);
        let s = new Date().getTimezoneOffset();
        (s < -900 || s > 900) && (s = 0), !pe.sessionStore().getItem("tawk_has_register_visitor") && ((l = window.Tawk_API) != null && l.visitor) && typeof window.Tawk_API.visitor == "object" && (n = Gi.formatVisitorLoginData(e)), this.registerData ? this.registerData.vss = i : this.registerData = {
            p: We().id || "",
            w: z().id,
            platform: Pe().mobileBrowserName ? "mobile" : "desktop",
            tzo: s,
            url: document.location.href,
            referrer: document.referrer || void 0,
            vss: i,
            user: n
        };
        let a = null;
        if (window.location && window.location.href) try {
            a = new URL(window.location.href), (a.protocol === "http:" || a.protocol === "https:" || a.protocol === "file:") && (this.registerData.url = window.location.href)
        } catch {}
        if (!a && window.top !== window) try {
            window.top.document && window.top.location && window.top.location.href && (this.registerData.url = window.top.document.location.href)
        } catch {
            console.error("[Tawk/Register]: Failed to access url")
        }
        this.registerData.consent = !1;
        for (let u = 0; u < r.length; u++)
            if (r[u] === "cf") {
                this.registerData.consent = !0;
                break
            }
        this.TawkWindow && this.TawkWindow.maximize ? this.registerData.wss = "max" : this.registerData.wss = "min";
        try {
            const {
                uuid: u,
                version: c,
                isPartial: f
            } = await Be.getUUID();
            u ? (this.registerData.u = u, this.registerData.uv = parseInt(c, 10), c === 2 && f && (this.registerData.uw = 1)) : this.registerData.uik = await Be.getIdempotencyKey()
        } catch (u) {
            console.error(u)
        }
    }
    startRegister(e, n) {
        const i = pe.cookieStore().getItem("TawkConnectionTime"),
            r = parseInt(i.length ? i[0] : "", 10);
        !r || new Date().getTime() - new Date(r).getTime() > 1e3 ? (pe.cookieStore().setItem("TawkConnectionTime", new Date().getTime().toString(), !0), this.connectionCookieInterval = setInterval(() => {
            this.TawkWindow && pe && pe.cookieStore().setItem("TawkConnectionTime", new Date().getTime().toString(), !0)
        }, 100), this.doRegister(e, n)) : this.delayRegister(e, n)
    }
    delayRegister(e, n) {
        clearTimeout(this.registerDelayTimeout), this.registerDelayTimeout = setTimeout(() => {
            this.init(e, n)
        }, 1e3)
    }
    doRegister(e, n) {
        this.setupRegisterTimeout();
        const i = "https://va.tawk.to/v1/session/start",
            r = Be.getStoredToken();
        let s;
        r && (s = {
            "X-Tawk-Token": r
        }), this.previousRegisterCall = at.post(i, this.registerData, s, (o, a) => {
            var l, u;
            if (this.clearTimers(), o || !o && !a) return this.retryRegister(e, n);
            if (a.error) return a.error.code && a.error.code === "InternalServerError" ? this.retryRegister(e, n) : n == null ? void 0 : n();
            (l = window.Tawk_API) != null && l.visitor && typeof window.Tawk_API.visitor == "object" && pe.sessionStore().setItem("tawk_has_register_visitor", "true"), e == null || e(a), (u = this.registerData) != null && u.user && typeof this.registerData == "object" && ae.unsetVisitorAttributes()
        }, !0, !0)
    }
    setupRegisterTimeout() {
        clearTimeout(this.requestCancelTimeout), this.requestCancelTimeout = setTimeout(() => {
            this.abort(), this.retryRegister()
        }, 9e4)
    }
    abort() {
        this.previousRegisterCall !== null && (this.previousRegisterCall = null)
    }
    retryRegister(e, n) {
        if (this.retryRegisterTimeout !== null) return;
        if (this.retryCount >= this.maxRetrycount) {
            this.clearTimers(), Q().updateChatWindowState("min"), z().setVisibility(!1);
            return
        }
        this.retryCount++;
        const i = this.getRetryWaitDelay();
        this.retryRegisterTimeout = setTimeout(() => {
            this.init(e, n)
        }, i)
    }
    getRetryWaitDelay() {
        const e = Math.random() * (this.maxRandom - this.minRandom) + this.minRandom;
        if (this.retryDelay === null) this.retryDelay = this.retryInitialDelay;
        else {
            const n = this.retryDelay * this.retryMultiplier;
            this.retryDelay > this.maxDelay || n > this.maxDelay ? this.retryDelay = this.maxDelay : this.retryDelay = n
        }
        return Math.round(this.retryDelay * e) * 1e3
    }
    resetRetryCount() {
        this.retryCount = 0, this.retryDelay = 10
    }
}
class Rh {
    constructor() {
        j(this, "focusReconnectCalled");
        j(this, "hasFocus");
        j(this, "active");
        j(this, "away");
        j(this, "inactivityTimeout");
        j(this, "awayTimeout");
        j(this, "interval");
        j(this, "TawkWindow");
        j(this, "onActivityHandler");
        j(this, "popupOnFocusHandler");
        j(this, "popupOnBlurHandler");
        j(this, "reconnectOnActivity");
        j(this, "initActivityReset");
        this.focusReconnectCalled = !1, this.hasFocus = !1, this.active = !1, this.away = !1, this.inactivityTimeout = null, this.awayTimeout = null, this.interval = null, this.TawkWindow = null, this.onActivityHandler = () => {
            this.TawkWindow && (this.away && window.$_Tawk.connected && we.publish("notifySocketStatusUpdate", "online"), this.active = !0, this.away = !1)
        }, this.popupOnFocusHandler = () => {
            this.TawkWindow && (!window.$_Tawk.connected && we.isForcedDisconnect() ? (Q().setIsInactive(!1), this.TawkWindow.criticalRefresh()) : (this.hasFocus || (this.active = !0, this.hasFocus = !0, window.$_Tawk.connected && we.publish("popupOnFocus", !0)), this.away && window.$_Tawk.connected && we.publish("notifySocketStatusUpdate", "online"), this.away = !1))
        }, this.popupOnBlurHandler = () => {
            this.TawkWindow && (this.hasFocus = !1, window.$_Tawk.connected && we.publish("popupOnFocus", !1))
        }, this.reconnectOnActivity = () => {
            !this.TawkWindow || this.focusReconnectCalled || (this.focusReconnectCalled = !0, Q().setIsInactive(!1), this.TawkWindow.criticalRefresh())
        }, this.initActivityReset = () => {
            this.cleanUp(), this.resetTimeout(), this.setupListeners(), this.setupMaxWidgetListeners(), this.interval = setInterval(() => {
                this.active && (this.resetTimeout(), this.active = !1)
            }, 1e4)
        }
    }
    install(e, {
        TawkWindow: n
    }) {
        e && e.provide("activityMonitor", this), this.TawkWindow = n
    }
    getMaxWidgetDocument() {
        var e, n, i;
        return ((i = (n = (e = this.TawkWindow) == null ? void 0 : e.maxWidget) == null ? void 0 : n.$el) == null ? void 0 : i.contentDocument) ? ? null
    }
    resetTimeout() {
        clearTimeout(this.inactivityTimeout), clearTimeout(this.awayTimeout), !(!this.TawkWindow || we.isForcedDisconnect()) && (this.awayTimeout = setTimeout(() => {
            this.away || !this.TawkWindow || (this.away = !0, we && window.$_Tawk.connected && we.publish("notifySocketStatusUpdate", "away"))
        }, 6e5), this.inactivityTimeout = setTimeout(() => {
            this.inactivityTimeoutHandler()
        }, 12e5))
    }
    inactivityTimeoutHandler() {
        this.TawkWindow && (te().clearUnseenMessages(), we.disconnectSocket(), Q().setChatWindowState("min"), Q().setIsInactive(!0), this.setupMaxWidgetListenersReconnect(), Pe().mobileBrowserName ? (document.addEventListener("touchmove", this.reconnectOnActivity, {
            once: !0
        }), document.addEventListener("touchend", this.reconnectOnActivity, {
            once: !0
        }), document.addEventListener("keydown", this.reconnectOnActivity, {
            once: !0
        })) : (document.addEventListener("mousemove", this.reconnectOnActivity, {
            once: !0
        }), document.addEventListener("click", this.reconnectOnActivity, {
            once: !0
        }), document.addEventListener("keydown", this.reconnectOnActivity, {
            once: !0
        }), document.onfocusin ? document.addEventListener("focusin", this.reconnectOnActivity, {
            once: !0
        }) : window.addEventListener("focus", this.reconnectOnActivity, {
            once: !0
        })))
    }
    cleanUp() {
        clearInterval(this.interval), clearTimeout(this.inactivityTimeout), clearTimeout(this.awayTimeout), document.removeEventListener("mousemove", this.onActivityHandler), document.removeEventListener("click", this.onActivityHandler), document.removeEventListener("keydown", this.onActivityHandler), document.removeEventListener("click", this.reconnectOnActivity), document.removeEventListener("keydown", this.reconnectOnActivity), document.removeEventListener("focus", this.reconnectOnActivity), document.removeEventListener("focusin", this.popupOnFocusHandler), document.removeEventListener("focusout", this.popupOnBlurHandler), window.removeEventListener("focus", this.popupOnFocusHandler), window.removeEventListener("blur", this.popupOnBlurHandler);
        const e = this.getMaxWidgetDocument();
        e && (e.removeEventListener("mousemove", this.onActivityHandler), e.removeEventListener("click", this.onActivityHandler), e.removeEventListener("keydown", this.onActivityHandler), e.removeEventListener("touchmove", this.onActivityHandler), e.removeEventListener("touchend", this.onActivityHandler), e.removeEventListener("mousemove", this.reconnectOnActivity), e.removeEventListener("click", this.reconnectOnActivity), e.removeEventListener("keydown", this.reconnectOnActivity), e.removeEventListener("touchmove", this.reconnectOnActivity), e.removeEventListener("touchend", this.reconnectOnActivity)), this.hasFocus = !1, this.active = !1, this.away = !1, this.inactivityTimeout = null, this.awayTimeout = null, this.interval = null, this.focusReconnectCalled = !1
    }
    setupListeners() {
        Pe().mobileBrowserName ? (document.addEventListener("touchmove", this.onActivityHandler), document.addEventListener("touchend", this.onActivityHandler), document.addEventListener("keydown", this.onActivityHandler)) : z().isWindowed ? (document.onfocusin ? (document.addEventListener("focusin", this.popupOnFocusHandler), document.addEventListener("focusout", this.popupOnBlurHandler)) : (window.addEventListener("focus", this.popupOnFocusHandler), window.addEventListener("blur", this.popupOnBlurHandler)), document.addEventListener("click", this.popupOnFocusHandler), document.addEventListener("keydown", this.popupOnFocusHandler)) : (document.addEventListener("mousemove", this.onActivityHandler), document.addEventListener("click", this.onActivityHandler), document.addEventListener("keydown", this.onActivityHandler))
    }
    setupMaxWidgetListeners() {
        const e = this.getMaxWidgetDocument();
        e && (e.addEventListener("mousemove", this.onActivityHandler), e.addEventListener("click", this.onActivityHandler), e.addEventListener("keydown", this.onActivityHandler), Pe().mobileBrowserName && (e.addEventListener("touchmove", this.onActivityHandler), e.addEventListener("touchend", this.onActivityHandler)))
    }
    setupMaxWidgetListenersReconnect() {
        const e = this.getMaxWidgetDocument();
        e && (e.addEventListener("mousemove", this.reconnectOnActivity, {
            once: !0
        }), e.addEventListener("click", this.reconnectOnActivity, {
            once: !0
        }), e.addEventListener("keydown", this.reconnectOnActivity, {
            once: !0
        }), Pe().mobileBrowserName && (e.addEventListener("touchmove", this.reconnectOnActivity, {
            once: !0
        }), e.addEventListener("touchend", this.reconnectOnActivity, {
            once: !0
        })))
    }
}
const Fn = new Rh;
class Dh {
    constructor() {
        j(this, "browserIdentifier", [{
            string: navigator.userAgent,
            subString: "Edge",
            identity: "explorer",
            versionSearch: "Edge"
        }, {
            string: navigator.userAgent,
            subString: "Trident/7.0",
            identity: "explorer",
            versionSearch: "rv"
        }, {
            string: navigator.userAgent,
            subString: "(Opera|OPR)",
            identity: "opera",
            versionSearch: "Version"
        }, {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "chrome",
            versionSearch: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "Mobile Safari",
            identity: "android",
            versionSearch: "Version"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "firefox",
            versionSearch: "Firefox"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "IEMobile",
            identity: "explorer",
            versionSearch: "IEMobile"
        }, {
            string: navigator.userAgent,
            subString: "Safari",
            identity: "safari",
            versionSearch: "Version"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "mozilla",
            versionSearch: "rv"
        }]);
        j(this, "osIdentifier", [{
            string: navigator.userAgent,
            subString: "Windows Phone",
            identity: "windows_phone"
        }, {
            string: navigator.platform,
            subString: "Win",
            identity: "windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "mac"
        }, {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iphone"
        }, {
            string: navigator.userAgent,
            subString: "Android",
            identity: "android"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "linux"
        }, {
            string: navigator.userAgent,
            subString: "iPad",
            identity: "ipad"
        }]);
        j(this, "searchEngines", {
            google: "q",
            yahoo: "p",
            baidu: "wd",
            yandex: "text",
            bing: "q",
            soso: "w",
            ask: "q",
            aol: "q",
            sogou: "query",
            mywebsearch: "searchfor",
            youdao: "q",
            lycos: "q",
            infospace: "q",
            blekko: "q",
            info: "q",
            dogpile: "q",
            duckduckgo: "q",
            webcrawler: "q"
        });
        j(this, "mobileBrowserIdentifier", {
            nokia: [/(NokiaBrowser)\/(\d+)\.(\d+).(\d+)\.(\d+)/, /^(Nokia)/, /(NokiaBrowser)\/(\d+)\.(\d+).(\d+)/, /(NokiaBrowser)\/(\d+)\.(\d+)/, /(BrowserNG)\/(\d+)\.(\d+).(\d+)/, /(Series60)\/5\.0/, /(Series60)\/(\d+)\.(\d+)/, /(S40OviBrowser)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Nokia)[EN]?(\d+)/],
            blackberry: [/(BB10);/, /(PlayBook).+RIM Tablet OS (\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry).+Version\/(\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry)\s?(\d+)/],
            chrome: [/(CrMo)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(CriOS)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Android).*(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+) (Mobile)?/],
            ie: [/(IEMobile)[ /](\d+)\.(\d+)/],
            firefox: [/Mobile.*(Firefox)\/(\d+)\.(\d+)/, /Tablet.*(Firefox)\/(\d+)\.(\d+)/],
            operamini: [/(Opera Mini)(?:\/att)?\/(\d+)\.(\d+)/],
            opera: [/(Opera Tablet).*Version\/(\d+)\.(\d+)(?:\.(\d+))?/, /(?:Mobile Safari).*(OPR)\/(\d+)\.(\d+)\.(\d+)'/, /(Opera)\/.+Opera Mobi.+Version\/(\d+)\.(\d+)/, /(Opera)\/(\d+)\.(\d+).+Opera Mobi/, /Opera Mobi.+(Opera)\/(\d+)\.(\d+)/, /Opera Mobi/, /(Opera)\/9.80.*Version\/(\d+)\.(\d+)(?:\.(\d+))?/],
            safari: [/(iPod|iPhone|iPad);.*CPU.*OS (\d+)(?:_\d+)?_(\d+).*Mobile/],
            uc: [/(UCBrowser)[ /](\d+)\.(\d+)\.(\d+)/, /(UC Browser)[ /](\d+)\.(\d+)\.(\d+)/, /(UC Browser|UCBrowser|UCWEB)(\d+)\.(\d+)\.(\d+)/],
            "android2.3": [/(Android) 2\.3(?:[.-]([a-z0-9]+))?/],
            android2: [/(Android) 2\.(\d+)(?:[.-]([a-z0-9]+))?/],
            android: [/Android[- ][\d]+\.[\d]+; [A-Za-z]{2}-[A-Za-z]{0,2}; WOWMobile (.+) Build/, /Android[- ][\d]+\.[\d]+-update1; [A-Za-z]{2}-[A-Za-z]{0,2}; (.+) Build/, /Android[- ][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}-[A-Za-z]{0,2}; (.+) Build/, /Android[- ][\d]+\.[\d]+\.[\d]+;[A-Za-z]{2}-[A-Za-z]{0,2};(.+) Build/, /Android[- ][\d]+\.[\d]+; [A-Za-z]{2}-[A-Za-z]{0,2}; (.+) Build/, /Android[- ][\d]+\.[\d]+\.[\d]+; (.+) Build/, /Android[- ][\d]+\.[\d]+; (.+) Build/]
        });
        this.init()
    }
    init() {
        let e = "other",
            n, i = !1;
        const r = this.searchString(this.browserIdentifier) || {};
        r.identity && (e = r.identity, n = r.versionSearch || r.identity, e === "explorer" && (i = !0));
        const s = this.searchVersion(navigator.userAgent, n) || this.searchVersion(navigator.appVersion, n) || "other",
            o = this.searchString(this.osIdentifier) || "other",
            a = this.getPlugins(),
            l = this.getMobileBrowser(),
            u = this.getReferredSearchEngine(),
            c = {
                mp3: this.hasHtmlAudio("mp3"),
                ogg: this.hasHtmlAudio("ogg"),
                wav: this.hasHtmlAudio("wav")
            };
        c.supported = c.mp3 || c.ogg || c.wav;
        const f = !i;
        Pe().updateInitialData({
            version: s,
            os: o,
            plugins: a,
            mobileBrowserName: l,
            html5audio: c,
            isIE: i,
            searchEngine: u,
            isWebRTCAvailable: f
        })
    }
    searchString(e) {
        for (let n = 0; n < e.length; n++) {
            const i = e[n].string;
            if (new RegExp(e[n].subString).test(i)) return e[n]
        }
    }
    searchVersion(e, n) {
        if (!n) return;
        const i = e.indexOf(n);
        if (i !== -1) return parseFloat(e.substring(i + n.length + 1))
    }
    getMobileBrowser() {
        let e = !1;
        const n = navigator.userAgent,
            i = Object.keys(this.mobileBrowserIdentifier);
        let r = 0;
        for (; !e && r < i.length;) {
            const s = i[r];
            for (let o = 0; o < this.mobileBrowserIdentifier[s].length; o++) {
                const a = this.mobileBrowserIdentifier[s][o];
                if (n.match(a)) {
                    e = s;
                    break
                }
            }
            r++
        }
        return e
    }
    getReferredSearchEngine() {
        let e, n, i = "";
        if (document.referrer && (n = this.getHostname(document.referrer), n)) {
            n = n.toLowerCase();
            for (e in this.searchEngines)
                if (n.indexOf(e) >= 0) {
                    let r = this.getQuerystring(document.referrer, this.searchEngines[e]);
                    e === "blekko" && r === "" && (r = this.getQuerystring(document.referrer.replace("/ws/", "/?q="), "q")), i = e;
                    break
                }
        }
        return i
    }
    getHostname(e) {
        const n = new RegExp("^(?:f|ht)tp(?:s)?://([^/]+)", "im"),
            i = e.match(n);
        return i === null || !Array.isArray(i) || i.length < 2 ? null : i[1] ? i[1].toString() : null
    }
    getQuerystring(e, n) {
        n = n.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        const r = new RegExp("[\\?&]" + n + "=([^&#]*)").exec(e);
        return r === null || !Array.isArray(r) || r.length < 2 ? null : r[1] ? unescape(r[1].replace(/\+/g, " ")) : null
    }
    hasHtmlAudio(e) {
        const n = document.createElement("audio");
        try {
            if (!(n.canPlayType && n.canPlayType("audio/" + e) !== "no" && n.canPlayType("audio/" + e) !== "")) return !1
        } catch {
            return !1
        }
        return !0
    }
    getPlugins() {
        const e = [];
        for (let n = 0, i = navigator.plugins.length; n < i; n++) navigator.plugins[n].name && e.push(navigator.plugins[n].name);
        return e
    }
}
const Mh = vt("form", () => {
        const t = _("/v1/form"),
            e = _({
                index: !1,
                store: !1
            }),
            n = _([]);
        async function i(s = "lead-capture-form") {
            if (!s) throw new Error("Please set form property/form ID before calling the action.show");
            e.value.index = !0, we.publish("getForm", {
                formId: s
            }, function(o, a) {
                if (e.value.index = !1, o) {
                    console.error(`[Tawk/Form]: ${o.code} ${o.message}`);
                    return
                }
                n.value.push(a.data.form)
            })
        }

        function r() {
            t.value = "/v1/form", e.value = {
                index: !1,
                store: !1
            }, n.value = []
        }
        return {
            baseUrl: t,
            loading: e,
            forms: n,
            get: i,
            resetState: r
        }
    }),
    pt = () => ({
        baseUrl: "/v1/chat/",
        items: [],
        loading: {
            index: !1,
            chat: !1
        },
        nextListHash: null,
        lastMessageTimestamp: null,
        loadError: !1,
        messageBlocks: [],
        selectedChat: null,
        chatError: !1,
        selectedChatMessages: null,
        scrollPosition: 0,
        calls: {}
    }),
    Nh = vt("history", () => {
        const t = _(pt().baseUrl),
            e = _(pt().items),
            n = _(pt().loading),
            i = _(pt().nextListHash),
            r = _(pt().lastMessageTimestamp),
            s = _(pt().loadError),
            o = _(pt().messageBlocks),
            a = _(pt().selectedChat),
            l = _(pt().chatError),
            u = _(pt().selectedChatMessages),
            c = _(pt().scrollPosition),
            f = _(pt().calls),
            p = ee(() => I => n.value[I]),
            h = ee(() => I => f.value[I]);
        async function d(I = {}) {
            n.value.index = !0, s.value = !1;
            try {
                await Q().checkTokenValidity()
            } catch {
                s.value = !0;
                return
            }
            const E = Q().token,
                S = {
                    limit: I.limit || 10
                };
            I.loadNext && (S.next = i.value), at.get(`https://va.tawk.to${t.value}list`, S, {
                "X-Tawk-Token": E
            }, (N, J) => {
                if (n.value.index = !1, N) {
                    s.value = !0;
                    return
                }
                if (J.data && J.data.chats.length) {
                    const Y = J.data.chats.map(K => ({ ...K,
                        snippet: be.rawEncode(K.snippet)
                    }));
                    I.loadNext ? e.value = e.value.concat(Y) : e.value = Y
                }
                i.value = J.data.hasNext ? J.data.next : null
            })
        }
        async function g() {
            try {
                await Q().checkTokenValidity()
            } catch {
                return
            }
            const I = Q().token;
            at.get(`https://va.tawk.to${t.value}list`, {
                limit: 1
            }, {
                "X-Tawk-Token": I
            }, (E, S) => {
                E || S.data && S.data.chats.length && (r.value = S.data.chats[0].endedOn ? ? null)
            })
        }
        async function w() {
            if (l.value = !1, n.value.chat = !0, !a.value) throw l.value = !0, new Error("Invalid Id");
            try {
                await Q().checkTokenValidity()
            } catch {
                l.value = !0;
                return
            }
            const I = Q().token;
            at.get(`https://va.tawk.to${t.value}get`, {
                chatId: a.value.id
            }, {
                "X-Tawk-Token": I
            }, (E, S) => {
                if (E) l.value = !0;
                else if (S.data && S.data.error) l.value = !0;
                else {
                    const N = ze.processHistoryMessages(S.data.chat.messages);
                    W(N), C(S.data.chat.calls)
                }
            })
        }

        function x() {
            e.value = []
        }

        function R(I) {
            if (I.messageType === "call") {
                let E;
                const S = Object.values(f.value);
                if (S.length) {
                    for (let N = 0; N < S.length; N++)
                        if (S[N].id === I.callId) {
                            const J = S[N];
                            E = {
                                callId: J.id,
                                status: J.status,
                                version: null,
                                isMissed: J.missed,
                                isRejected: J.rejected,
                                isRinging: !1,
                                isDone: "completed",
                                isVideo: J.features && J.features.video,
                                isScreenshare: J.features && J.features.screenShare,
                                hasError: !1,
                                caller: J.caller,
                                startedAt: J.startedOn,
                                endedAt: J.expiredOn
                            };
                            break
                        }
                }
                E || (E = {
                    hasError: !0
                }), I.callData = E
            }
            o.value.push(I)
        }

        function L() {
            o.value = []
        }

        function O(I) {
            a.value = I
        }

        function W(I) {
            u.value = I, n.value.chat = !1
        }

        function C(I) {
            f.value = I
        }

        function M() {
            a.value = null
        }

        function D(I) {
            c.value = I
        }

        function v() {
            c.value = 0
        }

        function k() {
            const I = pt();
            t.value = I.baseUrl, e.value = I.items, n.value = { ...I.loading
            }, i.value = I.nextListHash, r.value = I.lastMessageTimestamp, s.value = I.loadError, o.value = I.messageBlocks, a.value = I.selectedChat, l.value = I.chatError, u.value = I.selectedChatMessages, c.value = I.scrollPosition, f.value = I.calls
        }
        return {
            baseUrl: t,
            items: e,
            loading: n,
            nextListHash: i,
            lastMessageTimestamp: r,
            loadError: s,
            messageBlocks: o,
            selectedChat: a,
            chatError: l,
            selectedChatMessages: u,
            scrollPosition: c,
            calls: f,
            isLoading: p,
            callData: h,
            load: d,
            getLastMessageTimestamp: g,
            getHistory: w,
            unsetItems: x,
            addMessageBlock: R,
            clearMessageBlock: L,
            setSelectedChat: O,
            setSelectedChatMessages: W,
            setCalls: C,
            unsetSelectedChat: M,
            setScrollPosition: D,
            unsetScrollPosition: v,
            resetState: k
        }
    }),
    Fh = vt("knowledgeBase", () => {
        const t = _("/v1/kb"),
            e = _(null),
            n = _([]),
            i = _([]),
            r = _({
                index: !1,
                show: !1,
                search: !1
            }),
            s = _({}),
            o = _(!1),
            a = _(!1),
            l = _({
                query: null,
                results: [],
                hasNext: !1,
                token: null,
                total: 0,
                error: !1,
                linkTarget: "self"
            }),
            u = _(null),
            c = _(0),
            f = ee(() => S => r.value[S]);
        async function p(S) {
            if (!S.siteId || !S.articleId) throw new Error("Please set article ID before calling the action.show");
            r.value.show = !0, at.get(`https://va.tawk.to${t.value}${S.url}`, {
                propertyId: We().id,
                siteId: S.siteId,
                articleId: S.articleId
            }, null, (N, J) => {
                if (N) throw r.value.show = !1, N;
                J.data.siteId = S.siteId, s.value = J.data, r.value.show = !1
            })
        }

        function h(S) {
            i.value = S
        }

        function d(S) {
            e.value = S
        }

        function g() {
            s.value = {}
        }

        function w() {
            a.value = !1, o.value = !0
        }

        function x() {
            a.value = !0, o.value = !1
        }
        async function R(S) {
            if (r.value.search = !0, S && typeof S.siteId < "u" && (u.value = S.siteId), S && typeof S.search < "u" && (l.value.query = S.search, l.value.results = [], l.value.hasNext = !1, l.value.token = null, l.value.total = 0, l.value.error = !1), !l.value.query) {
                r.value.search = !1;
                return
            }
            const N = {
                propertyId: We().id,
                siteId: u.value,
                query: l.value.query,
                limit: S && S.limit ? S.limit : 10,
                from: l.value.results.length
            };
            at.get("https://va.tawk.to/v1/kb/article/search", N, null, (J, Y) => {
                if (r.value.search = !1, J) {
                    l.value.error = !0;
                    return
                }
                L(Y.data), W()
            })
        }

        function L(S) {
            S.articles.forEach(N => {
                if (N.highlight) {
                    if (N.highlight.title && N.highlight.title.length)
                        for (let J = 0; J < N.highlight.title.length; J++) N.title = be.rawEncode(N.highlight.title[J]).replace(/\[em\]/gi, '<span class="tawk-text-bold">').replace(/\[\/em\]/gi, "</span>");
                    if (N.highlight.subtitle && N.highlight.subtitle.length)
                        for (let J = 0; J < N.highlight.subtitle.length; J++) N.subtitle = be.rawEncode(N.highlight.subtitle[J]).replace(/\[em]/gi, '<span class="tawk-text-bold">').replace(/\[\/em\]/gi, "</span>")
                }
            }), l.value.results = l.value.results.concat(S.articles), l.value.hasNext = S.total > l.value.results.length, l.value.token = S.token, l.value.total = S.total, l.value.error = !1
        }

        function O(S) {
            at.post("https://va.tawk.to/v1/kb/analytics/search-result-clicked", {
                token: l.value.token,
                articleId: S
            }, null, (N, J) => {
                if (N) return J
            }, !1, !0)
        }

        function W() {
            at.post("https://va.tawk.to/v1/kb/analytics/search-performed", {
                token: l.value.token
            }, null, (S, N) => {
                if (S) return N
            }, !1, !0)
        }

        function C(S) {
            r.value.search = S
        }

        function M(S) {
            l.value.linkTarget = S
        }

        function D() {
            l.value.query = null, l.value.results = [], l.value.hasNext = !1, l.value.token = null, l.value.total = 0, l.value.error = !1, l.value.linkTarget = "self"
        }

        function v(S) {
            c.value = S
        }

        function k() {
            c.value = 0
        }

        function I() {
            l.value.results = [], l.value.hasNext = !1, l.value.total = 0, l.value.error = !1
        }

        function E() {
            t.value = "/v1/kb", e.value = null, n.value = [], i.value = [], r.value = {
                index: !1,
                show: !1,
                search: !1
            }, s.value = {}, o.value = !1, a.value = !1, l.value = {
                query: null,
                results: [],
                hasNext: !1,
                token: null,
                total: 0,
                error: !1,
                linkTarget: "self"
            }, u.value = null, c.value = 0
        }
        return {
            baseUrl: t,
            id: e,
            items: n,
            options: i,
            loading: r,
            selected: s,
            isLoadingCodeMirror: o,
            isCodeMirrorLoaded: a,
            searchData: l,
            siteId: u,
            scrollPosition: c,
            getIsLoading: f,
            show: p,
            updateOptions: h,
            updateId: d,
            unsetSelected: g,
            updateCodeMirrorIsLoading: w,
            updateCodeMirrorIsLoaded: x,
            searchArticles: R,
            articleClickedAnalytics: O,
            searchPerformedAnalytics: W,
            updateSearchLoading: C,
            updateSearchDataLinkTarget: M,
            unsetSearchData: D,
            updateScrollPosition: v,
            unsetScrollPosition: k,
            unsetSearchDataResults: I,
            resetState: E
        }
    });

function $h() {
    return [Pe, te, Mh, Nh, Fh, nu, We, ln, Fe, Q, pr, qt, z]
}

function au() {
    for (const t of $h()) t().resetState()
}
const Bh = Cs({
        name: "TawkRouterView",
        __name: "TawkRouterView",
        setup(t) {
            const e = ln(),
                n = ee(() => e.getCurrentView);
            return (i, r) => (Bn(), mi(Df, {
                name: "slide-fade",
                mode: "out-in"
            }, {
                default: Ba(() => {
                    var s;
                    return [(s = n.value) != null && s.component ? (Bn(), mi(Bc(n.value.component), {
                        key: n.value.path
                    })) : wf("", !0)]
                }),
                _: 1
            }))
        }
    }),
    Hh = (function() {
        const e = typeof document < "u" && document.createElement("link").relList;
        return e && e.supports && e.supports("modulepreload") ? "modulepreload" : "preload"
    })(),
    Wh = function(t) {
        return "/" + t
    },
    Qo = {},
    Qe = function(e, n, i) {
        let r = Promise.resolve();
        if (n && n.length > 0) {
            let o = function(u) {
                return Promise.all(u.map(c => Promise.resolve(c).then(f => ({
                    status: "fulfilled",
                    value: f
                }), f => ({
                    status: "rejected",
                    reason: f
                }))))
            };
            document.getElementsByTagName("link");
            const a = document.querySelector("meta[property=csp-nonce]"),
                l = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
            r = o(n.map(u => {
                if (u = Wh(u), u in Qo) return;
                Qo[u] = !0;
                const c = u.endsWith(".css"),
                    f = c ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${u}"]${f}`)) return;
                const p = document.createElement("link");
                if (p.rel = c ? "stylesheet" : Hh, c || (p.as = "script"), p.crossOrigin = "", p.href = u, l && p.setAttribute("nonce", l), document.head.appendChild(p), c) return new Promise((h, d) => {
                    p.addEventListener("load", h), p.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${u}`)))
                })
            }))
        }

        function s(o) {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = o, window.dispatchEvent(a), !a.defaultPrevented) throw o
        }
        return r.then(o => {
            for (const a of o || []) a.status === "rejected" && s(a.reason);
            return e().catch(s)
        })
    },
    lu = [{
        path: "/",
        component: () => {}
    }, {
        path: "chat",
        component: () => {}
    }, {
        path: "kb-article",
        component: st(() => Qe(() =>
            import ("./twk-base-BCpKjRhj.js"), [])),
        hasBack: !0
    }, {
        path: "kb-search",
        component: st(() => Qe(() =>
            import ("./twk-base-C3SwG_-j.js"), [])),
        hasBack: !0,
        title: () => Tt.i18n("kb", "search_results") || "Search Results"
    }, {
        path: "history-list",
        component: st(() => Qe(() =>
            import ("./twk-base-nk6cNc5I.js"), [])),
        hasBack: !0,
        title: () => Tt.i18n("routes", "conversations") || "Conversations"
    }, {
        path: "history-chat",
        component: st(() => Qe(() =>
            import ("./twk-chat-DH7sM8xH.js"), [])),
        hasBack: !0
    }, {
        path: "agents",
        component: st(() => Qe(() =>
            import ("./twk-AgentsList-RlKET5E8.js"), [])),
        hasBack: !0,
        title: () => Tt.i18n("routes", "all_agents") || "All Agents"
    }, {
        path: "offline-success",
        component: st(() => Qe(() =>
            import ("./twk-OfflineSubmitted-1cQ-qOpm.js"), []))
    }, {
        path: "prechat",
        component: () => {}
    }, {
        path: "name-form",
        component: st(() => Qe(() =>
            import ("./twk-ChangeNameForm-KssYGRv_.js"), []))
    }, {
        path: "email-transcript-form",
        component: st(() => Qe(() =>
            import ("./twk-EmailTranscriptForm-CWZvMGW8.js"), []))
    }, {
        path: "restart-chat",
        component: st(() => Qe(() =>
            import ("./twk-RestartChatForm-ilPXjJHm.js"), []))
    }, {
        path: "messages",
        component: st(() => Qe(() =>
            import ("./twk-base-BkGGXA26.js"), [])),
        hasBack: !0,
        title: () => Tt.i18n("home", "messages") || "Messages"
    }];

function Uh(t) {
    ln().addRoutes(lu), t && t.component("TawkRouterView", Bh)
}
class rs {
    constructor(e = {}) {
        j(this, "matcher");
        this.matcher = e.routes
    }
}
j(rs, "install", Uh);
const jh = {
        "outline:": "none !important;",
        "visibility:": "visible !important;",
        "resize:": "none !important;",
        "box-shadow:": "none !important;",
        "overflow:": "visible !important;",
        "background:": "none !important;",
        "opacity:": "1 !important;",
        "filter:": "alpha(opacity=100) !important;",
        "-ms-filter:": "progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important;",
        "-mz-opacity:": "1 !important;",
        "-khtml-opacity:": "1 !important;",
        "top:": "auto !important;",
        "right:": "auto !important;",
        "bottom:": "auto !important;",
        "left:": "auto !important;",
        "position:": "absolute !important;",
        "border:": "0 !important;",
        "min-height:": "auto !important;",
        "min-width:": "auto !important;",
        "max-height:": "none !important;",
        "max-width:": "none !important;",
        "padding:": "0 !important;",
        "margin:": "0 !important;",
        "-moz-transition-property:": "none !important;",
        "-webkit-transition-property:": "none !important;",
        "-o-transition-property:": "none !important;",
        "transition-property:": "none !important;",
        "transform:": "none !important;",
        "-webkit-transform:": "none !important;",
        "-ms-transform:": "none !important;",
        "width:": "auto !important;",
        "height:": "auto !important;",
        "display:": "block !important;",
        "z-index:": "auto !important;",
        "background-color:": "transparent !important;",
        "cursor:": "none !important;",
        "float:": "none !important;",
        "border-radius:": "unset !important;",
        "pointer-events:": "auto !important;",
        "clip:": "auto !important;",
        "color-scheme:": "light !important;"
    },
    Vh = ["a[href]", "area[href]", "button", "input", "select", "textarea", "iframe", "audio[controls]", "video[controls]", '[contenteditable="true"]', "[tabindex]"].join(",");

function qh(t) {
    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
}

function zh(t) {
    if (t.hasAttribute("disabled") || t.getAttribute("aria-hidden") === "true" || t.closest('[aria-hidden="true"]') || t.closest("[inert]")) return !1;
    const e = t.getAttribute("tabindex");
    return e !== null && Number(e) < 0 ? !1 : qh(t)
}

function uu(t) {
    return t ? Array.from(t.querySelectorAll(Vh)).filter(zh) : []
}

function ci(t, e = !1) {
    var n;
    if (!t) return !1;
    try {
        t.focus({
            preventScroll: e
        })
    } catch {
        return !1
    }
    return ((n = t.ownerDocument) == null ? void 0 : n.activeElement) === t
}

function Vp(t) {
    if (!t) return !1;
    const [e] = uu(t);
    return ci(e) || ci(t)
}

function qp(t) {
    let e = !1,
        n = null;

    function i(r) {
        var c, f;
        if (r.key === "Escape" || r.key === "Esc") {
            (c = t.onEscape) == null || c.call(t);
            return
        }
        if (r.key !== "Tab") return;
        const s = t.getRoot(),
            o = uu(s);
        if (!o.length) return;
        const a = o[0],
            l = o[o.length - 1],
            u = (f = s == null ? void 0 : s.ownerDocument) == null ? void 0 : f.activeElement;
        if (!u || !(s != null && s.contains(u)) || u === s) {
            r.preventDefault(), ci(r.shiftKey ? l : a);
            return
        }
        if (r.shiftKey && u === a) {
            r.preventDefault(), ci(l);
            return
        }!r.shiftKey && u === l && (r.preventDefault(), ci(a))
    }
    return {
        activate() {
            e || (n = t.getDocument() ? ? null, n && (n.addEventListener("keydown", i), e = !0))
        },
        deactivate() {
            e && (n == null || n.removeEventListener("keydown", i), n = null, e = !1)
        },
        get isActive() {
            return e
        }
    }
}
const zp = "restoreLauncherFocus",
    Kh = "widgetOpened",
    Xh = ["id"],
    Jh = Cs({
        name: "TawkMessenger",
        __name: "App",
        setup(t) {
            const e = st(() => Qe(() =>
                    import ("./twk-MinWidget-DHjbHpoq.js"), [])),
                n = st(() => Qe(() =>
                    import ("./twk-MaxWidget-DWdMPyXE.js").then(X => X.M), [])),
                i = st(() => Qe(() =>
                    import ("./twk-BrandingWidget-BR0oaogi.js"), [])),
                r = st(() => Qe(() =>
                    import ("./twk-BubbleWidget-COUV0ZiN.js"), [])),
                s = st(() => Qe(() =>
                    import ("./twk-MessagePreview-CoI8j126.js"), [])),
                o = Nt("emitter"),
                a = Nt("i18n"),
                l = Nt("jsApi"),
                u = Nt("audioPlayer"),
                c = Nt("tawkWindow"),
                f = z(),
                p = Q(),
                h = te(),
                d = pr(),
                g = Pe(),
                w = _(null),
                x = _(ei()),
                R = _("auto"),
                L = _("0px"),
                O = _("auto"),
                W = _("0px"),
                C = _(null),
                M = _(!1),
                D = _(null),
                v = _(!1),
                k = jh,
                I = ee(() => f.isRight),
                E = ee(() => f.isBottom),
                S = ee(() => f.isCenter),
                N = ee(() => p.pageStatus),
                J = ee(() => f.bubble),
                Y = ee(() => p.chatBubbleClosed),
                K = ee(() => f.showMessagePreview),
                le = ee(() => f.isWindowed),
                me = ee(() => f.isEmbedded),
                Le = ee(() => f.maxDesktop),
                ke = ee(() => f.isVisible),
                Ce = ee(() => f.onClick),
                Me = ee(() => p.chatWindowState),
                ft = ee(() => f.showTitleNotification),
                je = ee(() => p.originalPageTitle),
                tt = ee(() => f.hasLiveChat),
                dt = ee(() => f.generalVisibility),
                Je = ee(() => f.show),
                nt = ee(() => h.chat.unreadMessage),
                ht = ee(() => h.hasChatStarted),
                Gt = ee(() => h.agentsCount),
                m = ee(() => d.isReady),
                y = ee(() => g.mobileBrowserName),
                A = ee(() => {
                    let X, de, ve, T = "none !important;",
                        ie = "0px",
                        oe = {
                            "transition-property:": "none !important;",
                            "margin:": "0px !important;",
                            "padding:": "0px !important;",
                            "z-index:": "2000000000 !important;",
                            "width:": `${R.value} !important;`,
                            "height:": `${O.value}  !important;`,
                            "max-height:": `${O.value==="auto"?"none":O.value}  !important;`,
                            "max-width:": `${R.value==="auto"?"none":R.value}  !important;`,
                            "min-width:": `${L.value}  !important;`,
                            "min-height:": `${W.value}  !important;`
                        };
                    return me.value ? oe["position:"] = "relative !important;" : le.value ? oe["position:"] = "fixed !important;" : (oe["position:"] = "fixed !important;", E.value || S.value ? (de = "0px !important;", ve = "auto !important;") : (de = "auto !important;", ve = "0px !important;"), v.value ? oe["display:"] = "block !important;" : oe["display:"] = "none !important;", oe["left:"] = I.value ? "auto !important;" : `${ie} !important;`, oe["right:"] = I.value ? `${ie} !important;` : "auto !important;", oe["bottom:"] = de, oe["top:"] = ve, oe["transform:"] = T), l.local_API && l.local_API.customStyle && Object.keys(l.local_API.customStyle).length && l.local_API.customStyle.zIndex && (oe["z-index:"] = `${be.cleanupCssValue(l.local_API.customStyle.zIndex)} !important;`), X = { ...k,
                        ...oe
                    }, Object.entries(X).map(([ge, Te]) => ge + Te).join(`
`)
                }),
                b = [];

            function P(X, de, ve) {
                const T = Ml({
                        name: ve || "WidgetApp",
                        render: () => _l(X)
                    }),
                    Z = {
                        tawkWindow: c,
                        widgetSettings: sn,
                        jsApi: ae,
                        audioPlayer: yi,
                        scheduler: kt,
                        chatManager: ze,
                        activityMonitor: Fn,
                        sessionManager: Be,
                        webStorage: pe,
                        emitter: $e,
                        socket: we,
                        i18n: Tt.i18n,
                        logger: Tn
                    };
                Object.entries(Z).forEach(([oe, ge]) => {
                    T.provide(oe, ge)
                });
                const ie = T.mount(de);
                return b.push(T), ie
            }

            function B() {
                c.maxWidget || (c.maxWidget = P(n, "#max-widget", "MaxWidgetApp"))
            }

            function q() {
                var de, ve;
                b.forEach(T => T.unmount()), b.length = 0, c.minWidget = null, c.maxWidget = null, c.bubbleWidget = null, c.messagePreview = null, c.brandingWidget = null;
                const X = w.value;
                (de = c.app) == null || de.unmount(), c.app = null, (ve = X == null ? void 0 : X.parentNode) == null || ve.removeChild(X)
            }

            function V() {
                if (!document.head.querySelector("link[data-tawk-font-preconnect]"))
                    for (const X of ["https://fonts.googleapis.com", "https://fonts.gstatic.com"]) {
                        const de = document.createElement("link");
                        de.rel = "preconnect", de.href = X, de.crossOrigin = "anonymous", de.setAttribute("data-tawk-font-preconnect", ""), document.head.appendChild(de)
                    }
            }

            function U(X) {
                D.value && clearInterval(D.value), X || N.value === "offline" ? je.value !== null && (document.title = je.value, p.originalPageTitle = null) : (je.value === null && (p.originalPageTitle = document.title), D.value = setInterval(() => {
                    document.title = je.value === document.title ? a("chat", "new_message", {
                        count: nt.value
                    }) : je.value
                }, 1e3))
            }

            function H() {
                let X;
                clearTimeout(X), X = setTimeout(() => {
                    y.value && (!c.isMobileOptimizedWebsite || y.value === "opera" || y.value === "android2.3") && G()
                }, 100)
            }

            function re() {
                return y.value === "safari" || y.value === "android" ? window.orientation !== 0 : screen.height < screen.width || window.innerHeight < window.innerWidth
            }

            function G() {
                let X, de, ve;
                y.value === "safari" || y.value === "android" ? (re() && (navigator.platform === "iPhone" || navigator.platform === "iPad") ? X = screen.height : X = screen.width, de = X / window.innerWidth) : de = screen.width / window.innerWidth, ve = parseFloat((1 / parseFloat(de.toFixed(2))).toFixed(2)), (y.value === "chrome" || y.value === "ie") && (ve = ve < .2 ? .2 : ve), f.setZoomRatio(ve)
            }

            function ne() {
                const X = document.createElement("style");
                X.setAttribute("type", "text/css"), X.innerHTML = `#${x.value} {${A.value}}`, document.head.appendChild(X)
            }

            function se(X) {
                var de;
                (de = w.value) != null && de.style && w.value.style.setProperty("display", X ? "block" : "none", "important")
            }

            function he() {
                if (le.value) {
                    if (N.value === "offline" && !dt.value.showWhenOffline) {
                        window.close(), v.value = !1;
                        return
                    }
                    v.value = !0;
                    return
                }
                if (N.value === "offline" && !dt.value.showWhenOffline) {
                    v.value = !1;
                    return
                }
                if (!ke.value && Me.value === "max") {
                    v.value = !0;
                    return
                }
                if (Je.value !== null) {
                    v.value = Je.value;
                    return
                }
                v.value = ke.value
            }

            function Se() {
                let X = window.matchMedia("(orientation: landscape)").matches;
                y.value && (X ? f.updateMobileLandscape(!0) : f.updateMobileLandscape(!1))
            }
            return xt(Me, X => {
                X === "max" && Ce.value !== "pop" && (B(), $e.emit(Kh)), Ce.value === "pop" && X === "max" ? c.popoutWidget() : y.value && !l.local_API.disableMobileBackHistory && (X === "max" && (!window.location.hash || window.location.hash === "#max-widget") ? (M.value = !0, window.history.pushState ? window.history.pushState({
                    page: 1
                }, "", window.location.href + "#max-widget") : window.location.hash = "max-widget") : X === "min" && window.location.hash === "#max-widget" && (M.value = !0, window.history.back())), he()
            }), xt(nt, X => {
                !ft.value || !tt.value && (!ht.value || Gt.value === 0) || (X > 0 ? U() : U(!0))
            }), xt(N, X => {
                X === "offline" ? U(!0) : nt.value > 0 && U(), he()
            }), xt(Je, () => {
                he()
            }), xt(m, X => {
                X && l.triggerApiHandlers("onLoad")
            }), xt(v, X => {
                se(X)
            }), Ts(() => {
                he()
            }), Is(() => {
                var ve;
                if ((ve = l == null ? void 0 : l.local_API) != null && ve.disableWidgetFont || V(), m.value && l.triggerApiHandlers("onLoad"), (me.value || le.value) && (R.value = "100%", O.value = "100%", L.value = "100%", W.value = "100%"), me.value) {
                    const T = document.getElementById(l.local_API.embedded);
                    T && w.value && (T.appendChild(w.value), (T.clientWidth < 280 || T.clientHeight < 330) && (R.value = `${Le.value.width}px`, O.value = `${Le.value.height}px`, L.value = `${Le.value.width}px`, W.value = `${Le.value.height}px`))
                } else w.value && document.body.appendChild(w.value);
                !le.value && !me.value && (c.minWidget = P(e, "#min-widget", "MinWidgetApp"), J.value && !Y.value && !y.value && (c.bubbleWidget = P(r, "#chat-bubble", "BubbleWidgetApp")), K.value && (c.messagePreview = P(s, "#message-preview", "MessagePreviewApp"))), (le.value || me.value || Me.value === "max") && B(), (Ce.value === "max" || !me.value || !le.value || !y.value) && (c.brandingWidget = P(i, "#branding-widget", "BrandingWidgetApp")), C.value = () => {
                    u.init(), window.removeEventListener("click", C.value)
                }, window.addEventListener("click", C.value, !1), o.on("removeWidget", q);
                const X = window.history.pushState.bind(window.history),
                    de = window.history.replaceState.bind(window.history);
                window.location.hash === "#max-widget" && (window.history ? window.history.replaceState({}, document.title, ".") : window.location.hash = ""), window.history.pushState = (T, Z, ie) => {
                    X(T, Z, ie), (ie && typeof ie == "string" ? ie.indexOf("#max-widget") : -1) === -1 ? p.sendNavigationEvent() : M.value = !1
                }, window.history.replaceState = (T, Z, ie) => {
                    const oe = ie && typeof ie == "string" ? ie.indexOf("#max-widget") : -1;
                    de(T, Z, ie), oe === -1 ? p.sendNavigationEvent() : M.value = !1
                }, window.addEventListener("popstate", () => {
                    if (Me.value === "max" && y.value) return M.value = !0, p.updateChatWindowState("min");
                    M.value || p.sendNavigationEvent()
                }), window.addEventListener("hashchange", () => {
                    M.value || window.location && window.location.hash && (window.location.hash === "#" || window.location.hash === "#max-widget") || p.sendNavigationEvent()
                }), window.addEventListener("resize", () => {
                    H()
                }), H(), ne(), Se(), window.addEventListener("resize", Se), window.addEventListener("beforeprint", () => {
                    je.value !== null && (document.title = je.value), se(!1)
                }), window.addEventListener("afterprint", () => {
                    nt.value > 0 ? U() : U(!0), se(v.value)
                })
            }), As(() => {
                o.off("removeWidget", q)
            }), (X, de) => (Bn(), pf("div", {
                id: x.value,
                ref_key: "rootEl",
                ref: w
            }, [...de[0] || (de[0] = [yf('<div id="min-widget"></div><div id="max-widget"></div><div id="branding-widget"></div><div id="message-preview"></div><div id="chat-bubble"></div>', 5)])], 8, Xh))
        }
    });
class ss {
    constructor({
        propertyId: e,
        widgetId: n,
        callback: i,
        TawkWindow: r
    } = {}) {
        j(this, "propertyId");
        j(this, "widgetId");
        j(this, "callback");
        j(this, "TawkWindow");
        j(this, "pinia");
        this.propertyId = e || window.$_Tawk_AccountKey, this.widgetId = n || window.$_Tawk_WidgetId, this.callback = i || function() {}, this.TawkWindow = r || {}, this.pinia = fd()
    }
    updateConfig(e) {
        this.propertyId = e.propertyId, this.widgetId = e.widgetId
    }
    init({
        visitor: e
    } = {}) {
        Ci(this.pinia);
        const n = globalThis;
        if (n.$_Tawk.downloaded === void 0) {
            if (n.$_Tawk.downloaded = !0, typeof window.Prototype < "u" && typeof window.Prototype.Version == "string" && parseFloat(window.Prototype.Version.substr(0, 3)) < 1.7 && typeof Array.prototype.toJSON < "u") {
                const i = JSON.stringify;
                JSON.stringify = function(r) {
                    const s = Array.prototype.toJSON;
                    delete Array.prototype.toJSON;
                    const o = i(r);
                    return Array.prototype.toJSON = s, o
                }
            }
            n.$_Tawk.startTime = new Date().getTime().toString(), n.$_Tawk.loaded = !1, n.$_Tawk.connected = !1, n.$_Tawk.ready = !1, this.TawkWindow.register = new Ph({
                TawkWindow: this.TawkWindow
            }), Tn.install(null, {}), pe.install(null, {
                TawkWindow: this.TawkWindow
            }), sn.install(null, {
                TawkWindow: this.TawkWindow
            }), ae.install(null, {
                TawkWindow: this.TawkWindow
            }), yi.install(null, {
                TawkWindow: this.TawkWindow
            }), kt.install(null, {
                TawkWindow: this.TawkWindow
            }), ze.install(null, {
                TawkWindow: this.TawkWindow
            }), Fn.install(null, {
                TawkWindow: this.TawkWindow
            }), Be.install(null, {
                TawkWindow: this.TawkWindow
            }), we.install(null, {
                TawkWindow: this.TawkWindow
            }), rs.install(null), this.checkMetaContent(), this.connect({
                visitor: e
            })
        }
    }
    checkMetaContent() {
        let e;
        const n = {},
            i = document.getElementsByTagName("meta");
        let r = "";
        for (let u = 0, c = i.length; u < c; u++) i[u].getAttribute("name") && i[u].getAttribute("name").toLowerCase() === "viewport" && (r = i[u].getAttribute("content") || "");
        r = r.replace(/ /g, "");
        const s = r.split(",");
        for (let u = 0, c = s.length; u < c; u++) e = s[u].split("="), n[e[0]] = e[1];
        const o = !!(n.width || n.height),
            a = n["minimum-scale"] && n["maximum-scale"] && n["minimum-scale"] === n["maximum-scale"],
            l = n["initial-scale"] && n["maximum-scale"] && n["initial-scale"] === n["maximum-scale"];
        this.TawkWindow.metaContent = r && r.length ? r : null, this.TawkWindow.hasNoScale = n["user-scalable"] === "no" || n["user-scalable"] === "0", this.TawkWindow.isMobileOptimizedWebsite = !!(a && (o || this.TawkWindow.hasNoScale) || l)
    }
    connect({
        visitor: e
    } = {}) {
        var r;
        if (au(), We().updateId(this.propertyId), z().updateId(this.widgetId), window.Tawk_API && ((r = window.Tawk_API) == null ? void 0 : r.autoStart) === !1 && z().setVisibility(!1), We().updateIsTawkHostedPage(window.location.host === "tawk.to"), ln().addRoutes(lu), new Dh, ae.local_API.isWindowed) {
            const s = be.parseQueryString();
            Q().updateConnectionData({
                sk: s.$_tawk_sk
            }), s.pop && z().setIsPopout(!0), z().setDirectChatLayout(s.layout ? ? ""), z().setIsWindowed(!0)
        }
        if (ae.local_API.embedded && (z().setIsEmbedded(!0), Pe().updateMobileBrowserName(null)), window.top !== window) {
            let s = !1;
            try {
                s = window.origin === window.top.origin
            } catch {}
            s || z().setIsIframe(!0)
        }
        ae.triggerApiHandlers("onBeforeLoad"), this.TawkWindow.maximize = !1;
        const n = [new Promise((s, o) => {
                sn.getSettings(s, o)
            })],
            i = window.Tawk_API;
        (!i || i.autoStart || i.autoStart === void 0) && n.push(new Promise((s, o) => {
            this.TawkWindow.register.init(s, o, {
                visitor: e
            })
        }));
        try {
            Zl(n).then(s => {
                if (s.length === 2) {
                    if (s[0].status === "fulfilled" && s[1].status === "fulfilled") {
                        const {
                            data: o
                        } = s[1].value || {};
                        o && o.settingsVersion === s[0].value ? (this.extractRegistrationData(s[1].value), this.createUI(!0)) : (pe.sessionStore().setItem("tawk_sv", o == null ? void 0 : o.settingsVersion), sn.version = o == null ? void 0 : o.settingsVersion, sn.getSettings(() => {
                            this.extractRegistrationData(s[1].value), this.createUI(!0), $e.emit("updateWidgetSettings")
                        }, function(a) {
                            console.error(a)
                        }))
                    }
                } else s[0].status === "fulfilled" && this.createUI()
            })
        } catch (s) {
            console.error(s)
        }
    }
    extractRegistrationData({
        data: e
    }) {
        e.cc && Q().setCountryCode(e.cc), e.rc && Q().setRegionalCode(e.rc);
        const n = !!(e.rcf && z().consentFormType);
        if (te().updateVersion(e.cver || 0), Q().updateConsentFlag(n), e.cw === "max" && (this.TawkWindow.maximize = !0), Q().updateConnectionData(e), n || (Be.storeSessionInformation(), e.uid && qt().updateUUID(e.uid), qt().updateVisitorInformation(e), e.dpt && te().updateDepartment(e.dpt)), e.pcfs && Q().updatePrechatSubmitted(e.pcfs), e.refs && e.refs.length)
            for (let i = 0; i < e.refs.length; i++) {
                const r = e.refs[i];
                te().setFormRefs(r)
            }
        e.transfer && te().updateChatTransferData({
            transfer: e.transfer,
            transferVersion: e.transferVer
        }), Fe().updateTimezone(e.wstz), kt && kt.setup(), Q().setPageStatus({
            data: e || {
                ast: "offline"
            }
        }), Q().chatBubbleClosed = !!e.bblc, Q().lastMessageTimestamp = e.lmst, Q().waitTime = e.ewt ? e.ewt * 1e3 : 6e4, te().setHistoryMessages(e.c || []), te().setChatId(e.chid), te().setPreviousMessages(), Q().updateToken({
            token: e.tkn,
            expiry: e.tknExp
        }), this.callback()
    }
    createUI(e) {
        if (this.TawkWindow.app) $e.emit("resetState");
        else {
            const n = Ml(Jh);
            n.provide("tawkWindow", this.TawkWindow), n.use(Tn, {}), n.use(pe, {
                TawkWindow: this.TawkWindow
            }), n.use(sn, {
                TawkWindow: this.TawkWindow
            }), n.use(ae, {
                TawkWindow: this.TawkWindow
            }), n.use(yi, {
                TawkWindow: this.TawkWindow
            }), n.use(kt, {
                TawkWindow: this.TawkWindow
            }), n.use(ze, {
                TawkWindow: this.TawkWindow
            }), n.use(Fn, {
                TawkWindow: this.TawkWindow
            }), n.use(Be, {
                TawkWindow: this.TawkWindow
            }), n.use($e), n.use(we, {
                TawkWindow: this.TawkWindow
            }), n.use(this.pinia), n.use(rs), n.use(Tt), n.mount(document.createElement("div")), this.TawkWindow.app = n
        }!Q().needConsent && e && we.connect(), Fn.initActivityReset(), !Pe().mobileBrowserName && this.TawkWindow.maximize && Q().setChatWindowState("max")
    }
}
const Gh = "DEFAULT",
    Yo = ["code", "state", "stateCode", "region", "regionCode", "key"],
    Zo = {
        statesOf(t) {
            if (!t || typeof t != "object") return {};
            const e = !Array.isArray(t) && t.states || t,
                n = {};
            return Array.isArray(e) ? (e.forEach(i => {
                const r = this.codeOf(i);
                r && (n[r] = i)
            }), n) : (Object.keys(e).forEach(i => {
                n[String(i).toUpperCase()] = e[i]
            }), n)
        },
        codeOf(t) {
            if (!t || typeof t != "object") return null;
            for (let e = 0; e < Yo.length; e++) {
                const n = t[Yo[e]];
                if (n && (typeof n == "string" || typeof n == "number")) return String(n).toUpperCase()
            }
            return null
        },
        resolveStateEntry(t, e) {
            const n = this.statesOf(t);
            return (e ? n[String(e).toUpperCase()] : null) || n[Gh] || null
        },
        isStateEnabled(t, e) {
            if (!t || !Array.isArray(t) && t.enabled === !1) return !1;
            const n = this.resolveStateEntry(t, e);
            return n ? n.enabled !== !1 : !1
        },
        hasGdprForm(t) {
            if (!t || typeof t != "object" || t.enabled === !1) return !1;
            const e = t.policy || {};
            return !!(t.message || e.text || e.url)
        }
    },
    z = vt("widget", () => {
        const t = _({}),
            e = _({}),
            n = _({}),
            i = _(null),
            r = _({}),
            s = _(null),
            o = _(!1),
            a = _({}),
            l = _({}),
            u = _({}),
            c = _({}),
            f = _({}),
            p = _("max"),
            h = _(null),
            d = _({}),
            g = _({}),
            w = _("inline"),
            x = _(void 0),
            R = _({}),
            L = _(!1),
            O = _(0),
            W = _(0),
            C = _(0),
            M = _(0),
            D = _("en"),
            v = _({}),
            k = _({}),
            I = _({}),
            E = _(!1),
            S = _(!0),
            N = _(1),
            J = _({
                showAgentAvatars: !1
            }),
            Y = _(!1),
            K = _(!0),
            le = _(!1),
            me = _("classic"),
            Le = _(!1),
            ke = _(void 0),
            Ce = _("home"),
            Me = ee(() => {
                var F, $;
                return ($ = (F = g.value) == null ? void 0 : F.header) == null ? void 0 : $.background
            }),
            ft = ee(() => {
                var F, $;
                return ($ = (F = g.value) == null ? void 0 : F.header) == null ? void 0 : $.text
            }),
            je = ee(() => {
                var F, $;
                return ($ = (F = g.value) == null ? void 0 : F.visitor) == null ? void 0 : $.messageBackground
            }),
            tt = ee(() => {
                var F, $;
                return ($ = (F = g.value) == null ? void 0 : F.visitor) == null ? void 0 : $.messageText
            }),
            dt = ee(() => {
                var F, $;
                return ($ = (F = g.value) == null ? void 0 : F.agent) == null ? void 0 : $.messageBackground
            }),
            Je = ee(() => {
                var F, $;
                return ($ = (F = g.value) == null ? void 0 : F.agent) == null ? void 0 : $.messageText
            }),
            nt = () => {
                var $;
                const F = ($ = ae.local_API) == null ? void 0 : $.customStyle;
                return F == null ? void 0 : F.visibility
            },
            ht = ee(() => {
                var ye, Oe;
                const F = ["br", "cr", "tr"],
                    $ = nt();
                return Pe().mobileBrowserName ? (ye = $ == null ? void 0 : $.mobile) != null && ye.position ? F.indexOf($.mobile.position) !== -1 : F.indexOf(f.value.position ? ? "") !== -1 : (Oe = $ == null ? void 0 : $.desktop) != null && Oe.position ? F.indexOf($.desktop.position) !== -1 : F.indexOf(r.value.position ? ? "") !== -1
            }),
            Gt = ee(() => {
                var ye, Oe;
                const F = ["br", "bl"],
                    $ = nt();
                return Pe().mobileBrowserName ? (ye = $ == null ? void 0 : $.mobile) != null && ye.position ? F.indexOf($.mobile.position) !== -1 : F.indexOf(f.value.position ? ? "") !== -1 : (Oe = $ == null ? void 0 : $.desktop) != null && Oe.position ? F.indexOf($.desktop.position) !== -1 : F.indexOf(r.value.position ? ? "") !== -1
            }),
            m = ee(() => {
                var ye, Oe;
                const F = ["cr", "cl"],
                    $ = nt();
                return Pe().mobileBrowserName ? (ye = $ == null ? void 0 : $.mobile) != null && ye.position ? F.indexOf($.mobile.position) !== -1 : F.indexOf(f.value.position ? ? "") !== -1 : (Oe = $ == null ? void 0 : $.desktop) != null && Oe.position ? F.indexOf($.desktop.position) !== -1 : F.indexOf(r.value.position ? ? "") !== -1
            }),
            y = ee(() => Pe().mobileBrowserName ? c.value.type === "round" : u.value.type === "round"),
            A = ee(() => o.value && !le.value),
            b = ee(() => A.value && !Pe().mobileBrowserName && me.value === "modern"),
            P = ee(() => {
                var $;
                if (!b.value) return !1;
                const F = t.value;
                return !(F != null && F.whitelabeled) || ((($ = F.text) == null ? void 0 : $.length) ? ? 0) > 0
            }),
            B = ee(() => {
                var F, $, ye, Oe;
                return Pe().mobileBrowserName ? ($ = (F = v.value) == null ? void 0 : F.mobile) == null ? void 0 : $.preview : (Oe = (ye = v.value) == null ? void 0 : ye.desktop) == null ? void 0 : Oe.preview
            }),
            q = ee(() => {
                var F, $;
                return ($ = (F = v.value) == null ? void 0 : F.all) == null ? void 0 : $.visitorTyping
            }),
            V = ee(() => {
                var F, $;
                return !!(($ = (F = v.value) == null ? void 0 : F.all) != null && $.estimatedWaitTime)
            }),
            U = ee(() => {
                var F, $;
                return !!(($ = (F = v.value) == null ? void 0 : F.all) != null && $.agentTyping)
            }),
            H = ee(() => {
                var F, $, ye;
                return !!((ye = ($ = (F = d.value) == null ? void 0 : F.prechat) == null ? void 0 : $.handlers) != null && ye.form)
            }),
            re = ee(() => {
                var F, $, ye;
                return !!((ye = ($ = (F = d.value) == null ? void 0 : F.prechat) == null ? void 0 : $.handlers) != null && ye.suppressAiResponse)
            }),
            G = ee(() => {
                var F, $;
                return !!(($ = (F = v.value) == null ? void 0 : F.all) != null && $.sound) && S.value
            }),
            ne = ee(() => {
                var $, ye, Oe;
                return h.value !== null ? h.value : Q().pageStatus === "offline" && !(($ = a.value) != null && $.showWhenOffline) ? !1 : Pe().mobileBrowserName ? (ye = f.value) == null ? void 0 : ye.show : (Oe = r.value) == null ? void 0 : Oe.show
            }),
            se = ee(() => {
                var Oe;
                const $ = Q().pageStatus,
                    ye = (Oe = d.value) == null ? void 0 : Oe[$];
                if (!(ye != null && ye.header)) return null;
                if (Array.isArray(ye.header)) {
                    const fn = ye.header.find(bt => bt.type === "logo");
                    return fn ? fn.content : null
                }
                return null
            }),
            he = ee(() => Zo.isStateEnabled(i.value, Q().regionalCode)),
            Se = ee(() => Zo.hasGdprForm(n.value)),
            X = ee(() => Q().countryCode === "US" && he.value ? "us-two-party" : Se.value ? "general-data-protection-regulation" : null),
            de = ee(() => {
                var F;
                return !!((F = e.value) != null && F.liveChat)
            }),
            ve = ee(() => {
                var F;
                return !!((F = k.value) != null && F.transcript)
            }),
            T = ee(() => {
                var F;
                return !!((F = k.value) != null && F.emoji)
            }),
            Z = ee(() => {
                var F, $;
                return (($ = (F = v.value) == null ? void 0 : F.all) == null ? void 0 : $.tab) ? ? !1
            });

        function ie() {
            Ei(!h.value)
        }

        function oe(F) {
            t.value = F
        }

        function ge(F) {
            s.value = F
        }

        function Te(F) {
            typeof F < "u" ? S.value = F : (S.value = !S.value, we.publish("toggleSound", S.value))
        }

        function Ve() {
            S.value = !0
        }

        function Ne(F) {
            J.value.showAgentAvatars = F
        }

        function it(F) {
            Y.value = F
        }

        function pu(F) {
            K.value = F
        }

        function Ds(F = () => {}) {
            te().resetState(), Fn.cleanUp(), we.disconnectSocket(), delete window.$_Tawk.downloaded, Ei(!1), F()
        }

        function gu({
            params: F = {},
            callback: $ = () => {}
        }) {
            pr().updateIsConnecting(!0);
            const ye = We().id,
                Oe = s.value,
                fn = new ss({
                    propertyId: ye,
                    widgetId: Oe,
                    TawkWindow: Be.TawkWindow,
                    callback: function() {
                        h.value = F.showWidget ? !0 : null, $()
                    }
                });
            new Promise((bt, dn) => {
                Be.TawkWindow.register.init(bt, dn)
            }).then(bt => {
                sn.version = bt.data.settingsVersion;
                const dn = pe.sessionStore().getItem("tawk_sv"),
                    qn = () => {
                        fn.extractRegistrationData(bt), $e.emit("updateWidgetSettings"), Q().needConsent || we.connect(), Fn.initActivityReset(), ln().clearHistory()
                    };
                !dn || dn !== bt.data.settingsVersion ? (pe.sessionStore().setItem("tawk_sv", bt.data.settingsVersion), sn.getSettings(qn, function(Cn) {
                    console.error(Cn)
                })) : qn()
            })
        }

        function mu({
            propertyId: F,
            widgetId: $,
            callback: ye
        }) {
            if (F === null) return ye("INVALID_PROPERTY_ID");
            if ($ === null) return ye("INVALID_WIDGET_ID");
            Ds(), au(), new ss({
                propertyId: F,
                widgetId: $,
                TawkWindow: Be.TawkWindow,
                callback: function() {
                    Ei(!0), $e.emit("switchWidget"), Be.TawkWindow.updateBootConfig({
                        propertyId: F,
                        widgetId: $
                    }), ye()
                }
            }).init()
        }

        function vu(F) {
            var dn, qn;
            const $ = F;
            x.value = $.version, p.value = $.behavior.click, Ce.value = ((dn = $.behavior) == null ? void 0 : dn.defaultView) || "home", e.value = $.components, g.value = $.theme;
            const ye = JSON.parse(JSON.stringify($.states));
            for (const Cn in ye) {
                const hn = ye[Cn];
                hn && hn.body && (hn.body = hn.body.filter(Ms => !(Ms.id && Ms.id.startsWith("pc:"))))
            }
            d.value = ye, R.value = $.bubble, ke.value = $.agentDrivenStatus, l.value = {
                width: parseInt($.maximized.desktop.width, 10) || 350,
                height: parseInt($.maximized.desktop.height, 10) || 520
            };
            const Oe = $.minimized.desktop;
            u.value = Oe, Oe.type === "rectangle" ? (u.value.width = parseInt(Oe.width ? ? "", 10) || 320, u.value.height = parseInt(Oe.height ? ? "", 10) || 40, O.value = 0, M.value = 10) : (u.value.width = 60, u.value.height = 60, O.value = 20, M.value = 20);
            const fn = $.minimized.mobile;
            c.value = fn, fn.type === "rectangle" ? (c.value.width = 110, c.value.height = 48, C.value = 15, W.value = 15) : (c.value.width = 60, c.value.height = 60, C.value = 20, W.value = 20), a.value = $.visibility.all, r.value = $.visibility.desktop, f.value = $.visibility.mobile, n.value = $.consent;
            const bt = $.usPrivacyShield || $.consent && $.consent.usPrivacyShield;
            if (bt && (i.value = bt), D.value = $.language, L.value = ["ar", "he", "fa"].indexOf($.language) !== -1, v.value = $.notification, k.value = $.features, R.value && R.value.type === "image" && R.value.config && ((qn = R.value.config.image) == null ? void 0 : qn.type) === "gallery") {
                const Cn = $.visibility.desktop.position,
                    hn = $.minimized.desktop.type;
                (Cn !== "cr" && hn !== "rectangle" || Cn !== "cl" && hn !== "rectangle") && (R.value.config.offsetX -= M.value), r.value.position !== "cr" && r.value.position !== "cl" && (R.value.config.offsetY -= O.value)
            }
            $.scheduler && $.scheduler.config ? Fe().addSlots($.scheduler) : Fe().addSlots(void 0)
        }

        function Ei(F) {
            h.value = F, h.value || ae.triggerApiHandlers("onChatHidden")
        }

        function yu(F) {
            I.value = F
        }

        function wu(F) {
            o.value = F
        }

        function bu(F) {
            E.value = F
        }

        function Su(F) {
            N.value = F
        }

        function xu(F) {
            le.value = F
        }

        function Tu(F) {
            me.value = F === "modern" ? "modern" : "classic"
        }

        function ku(F) {
            Le.value = F
        }
        return {
            branding: t,
            components: e,
            consentData: n,
            usPrivacyShield: i,
            desktopVisibility: r,
            id: s,
            isWindowed: o,
            generalVisibility: a,
            maxDesktop: l,
            minDesktop: u,
            minMobile: c,
            mobileVisibility: f,
            onClick: p,
            show: h,
            states: d,
            theme: g,
            type: w,
            version: x,
            bubble: R,
            isRTL: L,
            yOffset: O,
            xOffsetMobile: W,
            yOffsetMobile: C,
            xOffset: M,
            language: D,
            notification: v,
            features: k,
            webrtcOptions: I,
            isEmbedded: E,
            localSoundEnabled: S,
            zoomRatio: N,
            toolbarOptions: J,
            isMobileLandscape: Y,
            isFocus: K,
            isPopout: le,
            directChatLayout: me,
            isIframe: Le,
            agentDrivenStatus: ke,
            defaultView: Ce,
            headerBgColor: Me,
            headerTxtColor: ft,
            visitorBgColor: je,
            visitorTxtColor: tt,
            agentBgColor: dt,
            agentTxtColor: Je,
            isRight: ht,
            isBottom: Gt,
            isCenter: m,
            isRoundWidget: y,
            isDirectChat: A,
            isModernDirectChat: b,
            hasModernDirectChatBranding: P,
            showMessagePreview: B,
            showVisitorTyping: q,
            showEstimatedWaitTime: V,
            showAgentTyping: U,
            isPrechatEnabled: H,
            isPrechatAiResponseSuppressed: re,
            isSoundEnabled: G,
            isVisible: ne,
            getLogoContent: se,
            usPrivacyShieldEnabled: he,
            hasConsentConfig: Se,
            consentFormType: X,
            hasLiveChat: de,
            emailTranscriptEnabled: ve,
            emojiEnabled: T,
            showTitleNotification: Z,
            toggleVisibility: ie,
            updateBranding: oe,
            updateId: ge,
            toggleLocalSound: Te,
            resetState: Ve,
            toggleAgentAvatarToolbar: Ne,
            updateMobileLandscape: it,
            toggleFocus: pu,
            shutdown: Ds,
            start: gu,
            switchWidget: mu,
            setData: vu,
            setVisibility: Ei,
            setWebrtcOptions: yu,
            setIsWindowed: wu,
            setIsEmbedded: bu,
            setZoomRatio: Su,
            setIsPopout: xu,
            setDirectChatLayout: Tu,
            setIsIframe: ku
        }
    });
class Qh extends Rs {
    constructor({
        TawkWindow: n
    } = {}) {
        super();
        j(this, "TawkWindow");
        this.TawkWindow = n || null
    }
    checkIsEnabled() {
        let n = !!navigator.cookieEnabled;
        typeof navigator.cookieEnabled > "u" && !n && (document.cookie = "testcookie", n = document.cookie.indexOf("testcookie") != -1), this.isEnabled = n
    }
    setItem(n, i, r, s) {
        if (window.location.protocol === "file:" || z().isIframe) return pe.localStore().setItem(n, i);
        if (this.isEnabled) {
            let a = "",
                l = "Lax;",
                u = "";
            if (!r) {
                const f = new Date;
                f.setTime(f.getTime() + 15552e6), a = `; expires=${f.toUTCString()}`
            }
            z().isIframe && (l = "None;");
            const c = s ? `; domain=${s}` : "";
            return window.location.protocol === "https:" && (u = " Secure"), document.cookie = `${n}=${i}${a}; path=/${c}; SameSite=${l}${u};`, !0
        }
    }
    getItem(n) {
        const i = [];
        if (window.location.protocol === "file:" || z().isIframe) {
            const s = pe.localStore().getItem(n);
            return s ? [s] : []
        }
        if (this.isEnabled) {
            const s = `${n}=`,
                o = document.cookie.split(";");
            for (let a = 0, l = o.length; a < l; a++) {
                let u = o[a];
                for (; u.charAt(0) === " ";) u = u.substring(1, u.length);
                u.indexOf(s) === 0 && i.push(u.substring(s.length, u.length))
            }
        }
        return i
    }
    deleteItem(n) {
        document.cookie = `${n}=;Max-Age=-99999999;SameSite=Lax;`
    }
    checkItemSaved(n) {
        if (window.location.protocol === "file:" || z().isIframe) {
            pe.localStore().getItem(n);
            return
        }
        const r = this.getItem(n);
        if (!r || !r.length) throw new Error("Unable to store cookie")
    }
}
class Yh {
    constructor() {
        j(this, "TawkWindow", null)
    }
    install(e, {
        TawkWindow: n
    }) {
        e && e.provide("webStorage", this), this.TawkWindow = n
    }
    sessionStore() {
        return new Wd
    }
    localStore() {
        return new Ud
    }
    cookieStore() {
        return new Qh({
            TawkWindow: this.TawkWindow || void 0
        })
    }
}
const pe = new Yh;
class Zh {
    constructor() {
        j(this, "sessionInformation", null);
        j(this, "TawkWindow", null)
    }
    install(e, {
        TawkWindow: n
    }) {
        e && e.provide("sessionManager", this), this.TawkWindow = n
    }
    getSessionInformation() {
        const e = We().id;
        let n = pe.localStore().getItem("twk_" + e);
        return n || (n = pe.cookieStore().getItem("Tawk_" + e)[0]), n || (n = this.sessionInformation), this.parseSessionInformation(n)
    }
    storeSessionInformation(e) {
        const n = Q().visitorSocketServer;
        let i = n || "";
        const r = Q().needConsent,
            s = z().consentData;
        if (!n && !e) return;
        (e || !r && s) && (i += "::cf"), pe.localStore().setItem("twk_" + We().id, i) || pe.cookieStore().setItem("Tawk_" + We().id, i, !1), this.sessionInformation = i
    }
    parseSessionInformation(e) {
        let n = [];
        return e && (n = e.split("::"), n.length <= 1 && (n = e.split("||"))), n
    }
    getUUID() {
        return new Promise((e, n) => {
            let i, r;
            const o = `twk_uuid_${We().id}`;
            if (z().isPopout) {
                this.getPopoutUUID(o).then(a => {
                    e(a)
                }).catch(() => {
                    n(new Error("Failed to get popout UUID"))
                });
                return
            }
            if ((z().isWindowed || We().isTawkHostedPage) && (r = pe.localStore().getItem(o), r && r.length)) try {
                const a = JSON.parse(r);
                if (a && typeof a == "object") return e(a)
            } catch (a) {
                console.error(a)
            }
            if (!r) {
                const a = pe.cookieStore().getItem(o);
                if (a && a.length) try {
                    i = JSON.parse(decodeURIComponent(a[0]))
                } catch (l) {
                    console.error(l)
                }
            }
            i || (i = this.getDeprecatedUUID()), e(i || {})
        })
    }
    getPopoutUUID(e) {
        return new Promise((n, i) => {
            let r, s;
            const o = pe.sessionStore().getItem(e);
            if (o && o.length) try {
                s = JSON.parse(o), n(s)
            } catch (a) {
                console.error(a), i(a instanceof Error ? a : new Error("Failed to parse UUID"))
            } else {
                const a = l => {
                    const u = l.data;
                    if (u && l.source === window.opener) {
                        if (window.removeEventListener("message", a, !1), clearTimeout(r), u.twkWidgetUUID) return n({
                            uuid: u.twkWidgetUUID,
                            version: 3
                        });
                        n({})
                    }
                };
                window.addEventListener("message", a, !1), r = setTimeout(() => {
                    i(new Error("Timed out waiting for popout UUID"))
                }, 1e4), window.opener.postMessage("getTwkWidgetUUID", "*")
            }
        })
    }
    getDeprecatedUUID() {
        let e, n, i = !1,
            r = 1 / 0,
            s = Fd.toASCII(window.location.hostname);
        s.substring(0, 4) === "www." && (s = s.replace("www.", ""));
        const o = pe.cookieStore().getItem("__tawkuuid");
        if (o && o.length > 0)
            for (let a = 0; a < o.length; a++) {
                const l = this.parseSessionInformation(o[a]);
                if (l.length !== 4) continue;
                const u = l[0],
                    c = l[1],
                    f = l[2],
                    p = l[3];
                if (u === "e") {
                    if (s === c) {
                        e = f, n = p;
                        break
                    }
                } else if (u === "p") {
                    const h = s.match(c);
                    h && s.substr(h.index) === c && h.index < r && (r = h.index, e = f, n = p, i = !0)
                }
            }
        return e ? {
            uuid: e,
            version: n,
            isPartial: i
        } : {}
    }
    async getIdempotencyKey() {
        let e;
        try {
            return await navigator.locks.request("idempotency_key", () => {
                e = this.generateIdempotencyKey()
            }), e
        } catch {
            try {
                return this.generateIdempotencyKey()
            } catch (n) {
                return console.error("[Tawk/Session]", n), ts()
            }
        }
    }
    generateIdempotencyKey() {
        let e = pe.cookieStore().getItem("twk_idm_key");
        return e && e.length ? e = e[0] : (e = ts(), pe.cookieStore().setItem("twk_idm_key", e, !0), pe.cookieStore().checkItemSaved("twk_idm_key")), e
    }
    storeUUID(e, n, i) {
        const s = `twk_uuid_${We().id}`,
            o = new Date().getTime(),
            a = JSON.stringify({
                uuid: e,
                version: n,
                domain: i,
                ts: o
            });
        if (z().isPopout) {
            pe.sessionStore().setItem(s, a);
            return
        }
        if (z().isWindowed || We().isTawkHostedPage) pe.localStore().setItem(s, a);
        else {
            pe.cookieStore().setItem(s, encodeURIComponent(a), !1, i || void 0);
            try {
                pe.cookieStore().checkItemSaved(s)
            } catch (l) {
                console.error(l)
            }
        }
    }
    getStoredToken() {
        const e = We().id;
        let n = null;
        return z().isPopout ? n = pe.sessionStore().getItem(`twk_token_${e}`) : n = pe.localStore().getItem(`twk_token_${e}`), n || (pe.localStore().getItem("twk_token"), pe.localStore().deleteItem("twk_token")), n
    }
    storeToken(e) {
        const i = `twk_token_${We().id}`;
        z().isPopout ? pe.sessionStore().setItem(i, e) : pe.localStore().setItem(i, e)
    }
    async reconnectSession(e) {
        e = e || function() {}, await Promise.resolve(this.TawkWindow.criticalRefresh()), e()
    }
    async login(e, n) {
        try {
            await Q().checkTokenValidity()
        } catch (o) {
            console.error("[JSAPI/Login]", o);
            return
        }
        const i = "https://va.tawk.to/v1/client/login",
            r = this.getStoredToken();
        let s;
        r && (s = {
            "X-Tawk-Token": r
        }), at.post(i, e, s, (o, a) => {
            if (o || !o && !a) return n(!0);
            if (a.error) return n(a.error);
            const l = () => {
                n(), $e.emit("forceUpdate")
            };
            this.reconnectSession(l)
        }, !0, !0)
    }
    async logout(e) {
        try {
            await Q().checkTokenValidity()
        } catch (s) {
            console.error("[JSAPI/Logout]", s);
            return
        }
        const n = "https://va.tawk.to/v1/client/logout",
            i = this.getStoredToken();
        let r;
        i && (r = {
            "X-Tawk-Token": i
        }), at.post(n, {}, r, (s, o) => {
            if (s || !s && !o) return e(!0);
            if (o.error) return e(o.error);
            const a = () => {
                e(), $e.emit("forceUpdate")
            };
            this.reconnectSession(a)
        }, !0, !0)
    }
}
const Be = new Zh,
    qt = vt("visitor", () => {
        const t = _(null),
            e = _(null),
            n = _(null),
            i = _(null),
            r = _(null),
            s = _(0),
            o = _(null),
            a = ee(() => t.value || i.value),
            l = ee(() => Gi.isGeneratedName(n.value) ? "" : n.value);

        function u(h) {
            s.value = h.uv || 0, r.value = h.u, Be.storeUUID(h.u, h.uv, h.domain)
        }

        function c(h) {
            const d = {
                visitorId: o.value,
                name: n.value,
                email: t.value,
                transcriptEmail: i.value
            };
            h.n && be.isString(h.n) && (d.name = h.n), h.te && be.isString(h.te) && (d.transcriptEmail = h.te), h.e && be.isString(h.e) && (d.email = h.e), h.vid && (d.visitorId = h.vid), o.value = d.visitorId, n.value = be.rawDecode(d.name), e.value = Gi.parseVisitorName(d.name), t.value = d.email, i.value = d.transcriptEmail
        }

        function f() {
            n.value = null, e.value = null, t.value = null, i.value = null
        }

        function p() {
            t.value = null, e.value = null, n.value = null, i.value = null, r.value = null, s.value = 0, o.value = null
        }
        return {
            email: t,
            displayName: e,
            name: n,
            transcriptEmail: i,
            uuid: r,
            uuidVer: s,
            visitorId: o,
            getEmailValue: a,
            getVisitorName: l,
            updateUUID: u,
            updateVisitorInformation: c,
            clearVisitorInformation: f,
            resetState: p
        }
    });

function os(t) {
    "@babel/helpers - typeof";
    return os = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, os(t)
}

function cu() {
    return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : os(XMLHttpRequest)) === "object"
}

function ep(t) {
    return !!t && typeof t.then == "function"
}

function tp(t) {
    return ep(t) ? t : Promise.resolve(t)
}

function ea(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(r) {
            return Object.getOwnPropertyDescriptor(t, r).enumerable
        })), n.push.apply(n, i)
    }
    return n
}

function ta(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? ea(Object(n), !0).forEach(function(i) {
            np(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ea(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return t
}

function np(t, e, n) {
    return (e = ip(e)) in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function ip(t) {
    var e = rp(t, "string");
    return _n(e) == "symbol" ? e : e + ""
}

function rp(t, e) {
    if (_n(t) != "object" || !t) return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var i = n.call(t, e);
        if (_n(i) != "object") return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}

function _n(t) {
    "@babel/helpers - typeof";
    return _n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, _n(t)
}
var un = typeof fetch == "function" ? fetch : void 0;
typeof global < "u" && global.fetch ? un = global.fetch : typeof window < "u" && window.fetch && (un = window.fetch);
var bi;
cu() && (typeof global < "u" && global.XMLHttpRequest ? bi = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (bi = window.XMLHttpRequest));
var tr;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? tr = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (tr = window.ActiveXObject));
typeof un != "function" && (un = void 0);
if (!un && !bi && !tr) try {
    Qe(() =>
        import ("./twk-browser-ponyfill-DxWGZJwh.js").then(t => t.b), []).then(function(t) {
        un = t.default
    }).catch(function() {})
} catch {}
var as = function(e, n) {
        if (n && _n(n) === "object") {
            var i = "";
            for (var r in n) i += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(n[r]);
            if (!i) return e;
            e = e + (e.indexOf("?") !== -1 ? "&" : "?") + i.slice(1)
        }
        return e
    },
    na = function(e, n, i, r) {
        var s = function(l) {
            if (!l.ok) return i(l.statusText || "Error", {
                status: l.status
            });
            l.text().then(function(u) {
                i(null, {
                    status: l.status,
                    data: u
                })
            }).catch(i)
        };
        if (r) {
            var o = r(e, n);
            if (o instanceof Promise) {
                o.then(s).catch(i);
                return
            }
        }
        typeof fetch == "function" ? fetch(e, n).then(s).catch(i) : un(e, n).then(s).catch(i)
    },
    ia = !1,
    sp = function(e, n, i, r) {
        e.queryStringParams && (n = as(n, e.queryStringParams));
        var s = ta({}, typeof e.customHeaders == "function" ? e.customHeaders() : e.customHeaders);
        typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (s["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), i && (s["Content-Type"] = "application/json");
        var o = typeof e.requestOptions == "function" ? e.requestOptions(i) : e.requestOptions,
            a = ta({
                method: i ? "POST" : "GET",
                body: i ? e.stringify(i) : void 0,
                headers: s
            }, ia ? {} : o),
            l = typeof e.alternateFetch == "function" && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
        try {
            na(n, a, r, l)
        } catch (u) {
            if (!o || Object.keys(o).length === 0 || !u.message || u.message.indexOf("not implemented") < 0) return r(u);
            try {
                Object.keys(o).forEach(function(c) {
                    delete a[c]
                }), na(n, a, r, l), ia = !0
            } catch (c) {
                r(c)
            }
        }
    },
    op = function(e, n, i, r) {
        i && _n(i) === "object" && (i = as("", i).slice(1)), e.queryStringParams && (n = as(n, e.queryStringParams));
        try {
            var s = bi ? new bi : new tr("MSXML2.XMLHTTP.3.0");
            s.open(i ? "POST" : "GET", n, 1), e.crossDomain || s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.withCredentials = !!e.withCredentials, i && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.overrideMimeType && s.overrideMimeType("application/json");
            var o = e.customHeaders;
            if (o = typeof o == "function" ? o() : o, o)
                for (var a in o) s.setRequestHeader(a, o[a]);
            s.onreadystatechange = function() {
                s.readyState > 3 && r(s.status >= 400 ? s.statusText : null, {
                    status: s.status,
                    data: s.responseText
                })
            }, s.send(i)
        } catch (l) {}
    },
    ap = function(e, n, i, r) {
        if (typeof i == "function" && (r = i, i = void 0), r = r || function() {}, un && n.indexOf("file:") !== 0) return sp(e, n, i, r);
        if (cu() || typeof ActiveXObject == "function") return op(e, n, i, r);
        r(new Error("No fetch and no xhr implementation found!"))
    };

function jn(t) {
    "@babel/helpers - typeof";
    return jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, jn(t)
}

function ra(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(r) {
            return Object.getOwnPropertyDescriptor(t, r).enumerable
        })), n.push.apply(n, i)
    }
    return n
}

function Fr(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? ra(Object(n), !0).forEach(function(i) {
            fu(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ra(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return t
}

function lp(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function up(t, e) {
    for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, du(i.key), i)
    }
}

function cp(t, e, n) {
    return e && up(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function fu(t, e, n) {
    return (e = du(e)) in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function du(t) {
    var e = fp(t, "string");
    return jn(e) == "symbol" ? e : e + ""
}

function fp(t, e) {
    if (jn(t) != "object" || !t) return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var i = n.call(t, e);
        if (jn(i) != "object") return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(t)
}
var dp = function() {
        return {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
            addPath: "/locales/add/{{lng}}/{{ns}}",
            parse: function(n) {
                return JSON.parse(n)
            },
            stringify: JSON.stringify,
            parsePayload: function(n, i, r) {
                return fu({}, i, r || "")
            },
            parseLoadPayload: function(n, i) {},
            request: ap,
            reloadInterval: typeof window < "u" ? !1 : 3600 * 1e3,
            customHeaders: {},
            queryStringParams: {},
            crossDomain: !1,
            withCredentials: !1,
            overrideMimeType: !1,
            requestOptions: {
                mode: "cors",
                credentials: "same-origin",
                cache: "default"
            }
        }
    },
    hu = (function() {
        function t(e) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            lp(this, t), this.services = e, this.options = n, this.allOptions = i, this.type = "backend", this.init(e, n, i)
        }
        return cp(t, [{
            key: "init",
            value: function(n) {
                var i = this,
                    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                if (this.services = n, this.options = Fr(Fr(Fr({}, dp()), this.options || {}), r), this.allOptions = s, this.services && this.options.reloadInterval) {
                    var o = setInterval(function() {
                        return i.reload()
                    }, this.options.reloadInterval);
                    jn(o) === "object" && typeof o.unref == "function" && o.unref()
                }
            }
        }, {
            key: "readMulti",
            value: function(n, i, r) {
                this._readAny(n, n, i, i, r)
            }
        }, {
            key: "read",
            value: function(n, i, r) {
                this._readAny([n], n, [i], i, r)
            }
        }, {
            key: "_readAny",
            value: function(n, i, r, s, o) {
                var a = this,
                    l = this.options.loadPath;
                typeof this.options.loadPath == "function" && (l = this.options.loadPath(n, r)), l = tp(l), l.then(function(u) {
                    if (!u) return o(null, {});
                    var c = a.services.interpolator.interpolate(u, {
                        lng: n.join("+"),
                        ns: r.join("+")
                    });
                    a.loadUrl(c, o, i, s)
                })
            }
        }, {
            key: "loadUrl",
            value: function(n, i, r, s) {
                var o = this,
                    a = typeof r == "string" ? [r] : r,
                    l = typeof s == "string" ? [s] : s,
                    u = this.options.parseLoadPayload(a, l);
                this.options.request(this.options, n, u, function(c, f) {
                    if (f && (f.status >= 500 && f.status < 600 || !f.status)) return i("failed loading " + n + "; status code: " + f.status, !0);
                    if (f && f.status >= 400 && f.status < 500) return i("failed loading " + n + "; status code: " + f.status, !1);
                    if (!f && c && c.message) {
                        var p = c.message.toLowerCase(),
                            h = ["failed", "fetch", "network", "load"].find(function(w) {
                                return p.indexOf(w) > -1
                            });
                        if (h) return i("failed loading " + n + ": " + c.message, !0)
                    }
                    if (c) return i(c, !1);
                    var d, g;
                    try {
                        typeof f.data == "string" ? d = o.options.parse(f.data, r, s) : d = f.data
                    } catch {
                        g = "failed parsing " + n + " to json"
                    }
                    if (g) return i(g, !1);
                    i(null, d)
                })
            }
        }, {
            key: "create",
            value: function(n, i, r, s, o) {
                var a = this;
                if (this.options.addPath) {
                    typeof n == "string" && (n = [n]);
                    var l = this.options.parsePayload(i, r, s),
                        u = 0,
                        c = [],
                        f = [];
                    n.forEach(function(p) {
                        var h = a.options.addPath;
                        typeof a.options.addPath == "function" && (h = a.options.addPath(p, i));
                        var d = a.services.interpolator.interpolate(h, {
                            lng: p,
                            ns: i
                        });
                        a.options.request(a.options, d, l, function(g, w) {
                            u += 1, c.push(g), f.push(w), u === n.length && typeof o == "function" && o(c, f)
                        })
                    })
                }
            }
        }, {
            key: "reload",
            value: function() {
                var n = this,
                    i = this.services,
                    r = i.backendConnector,
                    s = i.languageUtils,
                    o = i.logger,
                    a = r.language;
                if (!(a && a.toLowerCase() === "cimode")) {
                    var l = [],
                        u = function(f) {
                            var p = s.toResolveHierarchy(f);
                            p.forEach(function(h) {
                                l.indexOf(h) < 0 && l.push(h)
                            })
                        };
                    u(a), this.allOptions.preload && this.allOptions.preload.forEach(function(c) {
                        return u(c)
                    }), l.forEach(function(c) {
                        n.allOptions.ns.forEach(function(f) {
                            r.read(c, f, "read", null, null, function(p, h) {
                                p && o.warn("loading namespace ".concat(f, " for language ").concat(c, " failed"), p), !p && h && o.log("loaded namespace ".concat(f, " for language ").concat(c), h), r.loaded("".concat(c, "|").concat(f), p, h)
                            })
                        })
                    })
                }
            }
        }])
    })();
hu.type = "backend";
var Pn = function() {
        return Pn = Object.assign || function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) {
                e = arguments[n];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }, Pn.apply(this, arguments)
    },
    hp = new RegExp("```([\\s\\S]*?)```", "g"),
    pp = new RegExp("(`)(.*?)\\1", "g"),
    gp = new RegExp("\\[([^\\]]*)\\]\\(([^\\s]+)(?:\\s+&quot;(.*?)&quot;)?\\)", "g"),
    mp = new RegExp("_\\[([^\\[\\]]*)\\]\\(([^)\\s]+)(?:\\s+&quot;(.*?)&quot;)?\\)", "g"),
    vp = new RegExp("\\*{1,2}(\\S.*?\\S)\\*{1,2}", "g"),
    yp = new RegExp("\\b_{1,2}(\\S[^\\n]*?\\S)_{1,2}\\b", "g"),
    wp = new RegExp("~{1,2}(\\S.*?\\S)~{1,2}", "g"),
    bp = new RegExp("^(&gt;{1,2})(.*)", "gm"),
    Sp = new RegExp("^-\\s.*(?:\\n\\s*-\\s.*)*", "gm"),
    xp = new RegExp("((\\n\\s*((\\d+\\.){1,5})\\s.*)+)", "g"),
    Tp = new RegExp("\\n(<pre>)((\\n|.)*)(<\\/pre>)", "g"),
    kp = new RegExp("https?:\\/\\/(?:[a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,}(?:\\/[^\\s]*)?", "g"),
    _p = (function() {
        function t(e) {
            e === void 0 && (e = {}), this.options = e
        }
        return t.prototype.parseMarkdown = function(e) {
            return e = this.standardizeLineEndings(e), e = e.replace(/\$/g, "DOLLAR=SIGN=PLACEHOLDER"), e = this.fixCodeBlocks(this.replaceMarkdown(`
` + e + `
`)).trim(), e = e.replace(/DOLLAR=SIGN=PLACEHOLDER/g, "$"), e
        }, t.prototype.standardizeLineEndings = function(e) {
            return e = e.replace(/\r\n/g, `
`), e = e.replace(/\r/g, `
`), e
        }, t.prototype.replaceCodeBlocks = function(e) {
            var n = this;
            return e.replace(hp, function(i, r) {
                return `
<pre>` + n.encodeHTMLEntites(r) + "</pre>"
            })
        }, t.prototype.replaceInlineCodes = function(e) {
            return e.replace(pp, function(n, i, r) {
                return "<code>" + r + "</code>"
            })
        }, t.prototype.replaceLinks = function(e) {
            var n = this;
            return e.replace(gp, function(i, r, s, o) {
                var a = r || s,
                    l = {
                        target: "_blank",
                        href: s
                    };
                return o && (l.alt = o), typeof n.options == "object" && n.options.a && n.options.a.length > 0 && n.options.a.forEach(function(u) {
                    u.rule === void 0 && u.attributes && (l = Pn(Pn({}, l), u.attributes)), u.rule && u.rule.test(i) && (l = Pn(Pn({}, l), u.attributes))
                }), "<a " + n.convertAttributesToString(l) + ">" + a + "</a>"
            })
        }, t.prototype.replaceLinksWithTargetParent = function(e) {
            return e.replace(mp, function(n, i, r, s) {
                var o = s ? ' alt="'.concat(s, '"') : "",
                    a = i || r;
                return '<a target="_parent" href="' + r + '"' + o + ">" + a + "</a>"
            })
        }, t.prototype.replaceBold = function(e) {
            return e.replace(vp, function(n, i) {
                var r, s, o = "",
                    a = "",
                    l = ((r = n.match(/^\*+/)) === null || r === void 0 ? void 0 : r[0].length) || 0,
                    u = ((s = n.match(/\*+$/)) === null || s === void 0 ? void 0 : s[0].length) || 0;
                return l !== u && (l >= 2 || u >= 2) && (l > 2 && u > 2 ? (o = "*".repeat(l - 2), a = "*".repeat(u - 2)) : (o = "*".repeat(l - 1), a = "*".repeat(u - 1))), o + "<strong>" + i + "</strong>" + a
            })
        }, t.prototype.replaceItalic = function(e) {
            return e.replace(yp, function(n, i) {
                var r, s;
                if (n.match(kp)) return n;
                var o = "",
                    a = "",
                    l = ((r = n.match(/^_+/)) === null || r === void 0 ? void 0 : r[0].length) || 0,
                    u = ((s = n.match(/_+$/)) === null || s === void 0 ? void 0 : s[0].length) || 0;
                return l !== u && (l >= 2 || u >= 2) && (l > 2 && u > 2 ? (o = "_".repeat(l - 2), a = "_".repeat(u - 2)) : (o = "_".repeat(l - 1), a = "_".repeat(u - 1))), o + "<i>" + i + "</i>" + a
            })
        }, t.prototype.replaceceStrikethrough = function(e) {
            return e.replace(wp, function(n, i) {
                var r, s, o = "",
                    a = "",
                    l = ((r = n.match(/^~+/)) === null || r === void 0 ? void 0 : r[0].length) || 0,
                    u = ((s = n.match(/~+$/)) === null || s === void 0 ? void 0 : s[0].length) || 0;
                return l !== u && (l >= 2 || u >= 2) && (l > 2 && u > 2 ? (o = "~".repeat(l - 2), a = "~".repeat(u - 2)) : (o = "~".repeat(l - 1), a = "~".repeat(u - 1))), o + "<del>" + i + "</del>" + a
            })
        }, t.prototype.replaceBlockquotes = function(e) {
            return e.replace(bp, function(n, i, r) {
                var s = i.length;
                s > 2 && (s = 2), r = r.replace(/^&gt;/, "");
                var o = Array.from({
                    length: s
                }, function() {
                    return "<blockquote>"
                });
                return o.push(r), o.push("</blockquote>".repeat(s)), `
` + o.join("")
            })
        }, t.prototype.replaceUnorderedLists = function(e) {
            return e.replace(Sp, function(n) {
                var i = [],
                    r = 0;
                for (n.trim().split(`
`).forEach(function(s) {
                        var o = s.match(/^(\s*)(-|\+)(?!-|\+)(.*)/);
                        if (o) {
                            for (var a = o[1].length, l = o[3].trim(); r > a;) i.push("</ul>"), r--;
                            r < a ? (i.push("<ul><li>".concat(l, "</li>")), r++) : i.push("<li>".concat(l, "</li>"))
                        }
                    }); r > 0;) i.push("</ul>"), r--;
                return "<ul>".concat(i.join(""), "</ul>")
            })
        }, t.prototype.replaceOrderedLists = function(e) {
            var n = this;
            return e.replace(xp, function(i) {
                var r = [],
                    s = 0,
                    o = i.split(`
`).indexOf(i.trim().split(`
`)[0]);
                for (i.trim().split(`
`).forEach(function(a) {
                        var l = a.match(/(\d+\.)\s(.*)/);
                        if (l) {
                            for (var u = n.countLevels(a) - 1; s > u;) r.push("</ol>"), s--;
                            s < u ? (r.push("<ol><li>".concat(l[2], "</li>")), s++) : r.push("<li>".concat(l[2], "</li>"))
                        }
                    }); s > 0;) r.push("</ol>"), s--;
                return o > 0 ? "".concat(`
`.repeat(o), "<ol>").concat(r.join(""), "</ol>") : "<ol>".concat(r.join(""), "</ol>")
            })
        }, t.prototype.countLevels = function(e) {
            var n = e.match(/^(\d+(\.\d+)*)\./);
            return n ? n[1].split(".").length : 0
        }, t.prototype.fixCodeBlocks = function(e) {
            return e.replace(Tp, function(n, i, r, s, o) {
                var a = "";
                return r.split(`
`).forEach(function(l) {
                    a += l + `
`
                }), i + a + o
            })
        }, t.prototype.encodeHTMLEntites = function(e) {
            return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#47;")
        }, t.prototype.replaceMarkdown = function(e) {
            var n = this,
                i = e,
                r = [],
                s = [];
            return i = i.replace(/```([\s\S]*?)```/g, function(o) {
                return s.push(o), "CODEBLOCK=PLACEHOLDER=".concat((s.length - 1).toString())
            }), i = i.replace(/`([^`]+)`/g, function(o) {
                return r.push(o), "INLINECODE=PLACEHOLDER=".concat((r.length - 1).toString())
            }), i = this.replaceBold(i), i = this.replaceItalic(i), i = this.replaceLinksWithTargetParent(i), i = this.replaceLinks(i), i = this.replaceceStrikethrough(i), i = this.replaceBlockquotes(i), i = this.replaceUnorderedLists(i), i = this.replaceOrderedLists(i), i = i.replace(/INLINECODE=PLACEHOLDER=(\d+)/g, function(o, a) {
                return n.replaceInlineCodes(r[Number(a)])
            }), i = i.replace(/CODEBLOCK=PLACEHOLDER=(\d+)/g, function(o, a) {
                return n.replaceCodeBlocks(s[Number(a)])
            }), i
        }, t.prototype.convertAttributesToString = function(e) {
            return Object.entries(e).map(function(n) {
                var i = n[0],
                    r = n[1];
                return "".concat(i, '="').concat(String(r), '"')
            }).join(" ")
        }, t.prototype.makeHtml = function(e) {
            return this.parseMarkdown(e)
        }, t
    })();
(function() {
    var r;
    const t = {},
        e = new _p(t),
        n = {
            maximize: !1
        },
        i = new ss({
            TawkWindow: n
        });
    n.registerWithConsent = () => {
        n.maximize = !0, Be.storeSessionInformation(!0), new Promise((s, o) => {
            n.register.init(s, o)
        }).then(s => {
            if (i.extractRegistrationData(s), Q().needConsent) {
                $e.emit("consentSubmissionFailed"), vn() && vn().postMessage("twkConsentFailed", "*");
                return
            }
            we.connect(), ln().clearHistory(), Be.storeSessionInformation(!0), vn() && vn().postMessage("twkPopWidgetRegister", "*")
        }).catch(s => {
            console.error("[Tawk/Consent]", s), $e.emit("consentSubmissionFailed")
        })
    }, n.retryRegister = () => {
        new Promise((s, o) => {
            n.register.init(s, o)
        }).then(s => {
            i.extractRegistrationData(s), we.connect()
        })
    }, n.popoutWidget = () => {
        const s = We().id,
            o = z().id,
            a = z().branding;
        let l = `https://tawk.to/chat/${s}/`;
        Q().updateChatWindowState("min"), !tu() && (a && a.whitelabeled && a.popoutBaseUrl && (l = `${a.popoutBaseUrl}/chat/`), th(window.open(l + o + "?pop=1", "Tawk", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no")))
    }, n.criticalRefresh = () => {
        if (z().isWindowed) return window.location.reload();
        delete window.$_Tawk.downloaded, ln().clearHistory(), i.connect()
    }, n.updateBootConfig = s => {
        i.updateConfig(s)
    }, n.makeHtml = s => e.makeHtml(s), window.addEventListener("beforeunload", function() {
        n && n.logger && (n.logger.unloading = !0)
    }), window.addEventListener("message", function(s) {
        if (vn() && s.data === "getTwkWidgetUUID") {
            vn().postMessage({
                twkWidgetUUID: qt().uuid
            }, s.origin);
            return
        }
        if (s.data === "twkRegisterWConsent" && s.source === vn()) return n.registerWithConsent();
        if (z().isPopout && s.data === "twkPopWidgetRegister" && s.source === window.opener) {
            n.registerWithConsent();
            return
        }
        z().isPopout && s.data === "twkConsentFailed" && s.source === window.opener && $e.emit("consentSubmissionFailed")
    }, !1), et.use(hu).init({
        lng: "en",
        debug: !1,
        load: "currentOnly",
        fallbackLng: ["en", "en_dev"],
        interpolation: {
            escapeValue: !1
        },
        backend: {
            loadPath: "https://embed.tawk.to/_s/v4/app/6aabd5a4605/languages/{{lng}}.json"
        }
    }, function(s, o) {
        s && console.error("[Tawk/Widget-Settings]", s), window.$_Tawk.i18next = o, Tt.setTranslator(o)
    }), i.init({
        visitor: (r = window.Tawk_API) == null ? void 0 : r.visitor
    })
})();
export {
    Kh as $, ln as A, As as B, Ts as C, z as D, Wp as E, ct as F, Hp as G, Nh as H, te as I, xt as J, be as K, Pe as L, Op as M, Fp as N, ei as O, qh as P, Vp as Q, zp as R, Mh as S, Df as T, pr as U, qt as V, Ga as W, Dp as X, $p as Y, lr as Z, Qe as _, nu as a, Bh as a0, ci as a1, qp as a2, Ep as a3, ac as a4, We as a5, ze as a6, Pp as a7, Mp as a8, Ml as a9, _l as aa, Np as ab, bf as ac, Bp as ad, Lp as ae, Ip as af, Ap as ag, lt as ah, Zo as ai, Gh as aj, Q as b, Po as c, Cs as d, Bn as e, pf as f, Up as g, Sl as h, Nt as i, Ue as j, xs as k, wf as l, vf as m, _ as n, Is as o, ee as p, at as q, Rp as r, mi as s, Bu as t, Fh as u, ds as v, Ba as w, hs as x, Bc as y, st as z
};