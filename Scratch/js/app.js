(() => {
    var __webpack_modules__ = {
        265: module => {
            !function(t, n) {
                if (true) module.exports = n(); else ;
            }(window, (function() {
                return function(t) {
                    var n = {};
                    function e(o) {
                        if (n[o]) return n[o].exports;
                        var r = n[o] = {
                            i: o,
                            l: !1,
                            exports: {}
                        };
                        return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
                    }
                    return e.m = t, e.c = n, e.d = function(t, n, o) {
                        e.o(t, n) || Object.defineProperty(t, n, {
                            enumerable: !0,
                            get: o
                        });
                    }, e.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                    }, e.t = function(t, n) {
                        if (1 & n && (t = e(t)), 8 & n) return t;
                        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
                        var o = Object.create(null);
                        if (e.r(o), Object.defineProperty(o, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & n && "string" != typeof t) for (var r in t) e.d(o, r, function(n) {
                            return t[n];
                        }.bind(null, r));
                        return o;
                    }, e.n = function(t) {
                        var n = t && t.__esModule ? function() {
                            return t.default;
                        } : function() {
                            return t;
                        };
                        return e.d(n, "a", n), n;
                    }, e.o = function(t, n) {
                        return Object.prototype.hasOwnProperty.call(t, n);
                    }, e.p = "", e(e.s = 66);
                }([ function(t, n) {
                    var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                    "number" == typeof __g && (__g = e);
                }, function(t, n, e) {
                    var o = e(12)("wks"), r = e(13), i = e(0).Symbol, c = "function" == typeof i;
                    (t.exports = function(t) {
                        return o[t] || (o[t] = c && i[t] || (c ? i : r)("Symbol." + t));
                    }).store = o;
                }, function(t, n) {
                    var e = t.exports = {
                        version: "2.6.11"
                    };
                    "number" == typeof __e && (__e = e);
                }, function(t, n, e) {
                    var o = e(4);
                    t.exports = function(t) {
                        if (!o(t)) throw TypeError(t + " is not an object!");
                        return t;
                    };
                }, function(t, n) {
                    t.exports = function(t) {
                        return "object" == typeof t ? null !== t : "function" == typeof t;
                    };
                }, function(t, n, e) {
                    t.exports = !e(17)((function() {
                        return 7 != Object.defineProperty({}, "a", {
                            get: function() {
                                return 7;
                            }
                        }).a;
                    }));
                }, function(t, n, e) {
                    var o = e(7);
                    t.exports = function(t, n, e) {
                        if (o(t), void 0 === n) return t;
                        switch (e) {
                          case 1:
                            return function(e) {
                                return t.call(n, e);
                            };

                          case 2:
                            return function(e, o) {
                                return t.call(n, e, o);
                            };

                          case 3:
                            return function(e, o, r) {
                                return t.call(n, e, o, r);
                            };
                        }
                        return function() {
                            return t.apply(n, arguments);
                        };
                    };
                }, function(t, n) {
                    t.exports = function(t) {
                        if ("function" != typeof t) throw TypeError(t + " is not a function!");
                        return t;
                    };
                }, function(t, n) {
                    var e = {}.toString;
                    t.exports = function(t) {
                        return e.call(t).slice(8, -1);
                    };
                }, function(t, n) {
                    t.exports = function(t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                    };
                }, function(t, n) {
                    function e(t, n) {
                        for (var e = 0; e < n.length; e++) {
                            var o = n[e];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                            Object.defineProperty(t, o.key, o);
                        }
                    }
                    t.exports = function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t;
                    };
                }, function(t, n, e) {
                    var o = e(8), r = e(1)("toStringTag"), i = "Arguments" == o(function() {
                        return arguments;
                    }());
                    t.exports = function(t) {
                        var n, e, c;
                        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function(t, n) {
                            try {
                                return t[n];
                            } catch (t) {}
                        }(n = Object(t), r)) ? e : i ? o(n) : "Object" == (c = o(n)) && "function" == typeof n.callee ? "Arguments" : c;
                    };
                }, function(t, n, e) {
                    var o = e(2), r = e(0), i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
                    (t.exports = function(t, n) {
                        return i[t] || (i[t] = void 0 !== n ? n : {});
                    })("versions", []).push({
                        version: o.version,
                        mode: e(22) ? "pure" : "global",
                        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                    });
                }, function(t, n) {
                    var e = 0, o = Math.random();
                    t.exports = function(t) {
                        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + o).toString(36));
                    };
                }, function(t, n, e) {
                    var o = e(0), r = e(2), i = e(15), c = e(18), s = e(6), a = function(t, n, e) {
                        var u, f, h, l, v = t & a.F, p = t & a.G, d = t & a.S, m = t & a.P, g = t & a.B, y = p ? o : d ? o[n] || (o[n] = {}) : (o[n] || {}).prototype, b = p ? r : r[n] || (r[n] = {}), x = b.prototype || (b.prototype = {});
                        for (u in p && (e = n), e) h = ((f = !v && y && void 0 !== y[u]) ? y : e)[u], l = g && f ? s(h, o) : m && "function" == typeof h ? s(Function.call, h) : h, 
                        y && c(y, u, h, t & a.U), b[u] != h && i(b, u, l), m && x[u] != h && (x[u] = h);
                    };
                    o.core = r, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, 
                    t.exports = a;
                }, function(t, n, e) {
                    var o = e(16), r = e(36);
                    t.exports = e(5) ? function(t, n, e) {
                        return o.f(t, n, r(1, e));
                    } : function(t, n, e) {
                        return t[n] = e, t;
                    };
                }, function(t, n, e) {
                    var o = e(3), r = e(34), i = e(35), c = Object.defineProperty;
                    n.f = e(5) ? Object.defineProperty : function(t, n, e) {
                        if (o(t), n = i(n, !0), o(e), r) try {
                            return c(t, n, e);
                        } catch (t) {}
                        if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
                        return "value" in e && (t[n] = e.value), t;
                    };
                }, function(t, n) {
                    t.exports = function(t) {
                        try {
                            return !!t();
                        } catch (t) {
                            return !0;
                        }
                    };
                }, function(t, n, e) {
                    var o = e(0), r = e(15), i = e(19), c = e(13)("src"), s = e(37), a = ("" + s).split("toString");
                    e(2).inspectSource = function(t) {
                        return s.call(t);
                    }, (t.exports = function(t, n, e, s) {
                        var u = "function" == typeof e;
                        u && (i(e, "name") || r(e, "name", n)), t[n] !== e && (u && (i(e, c) || r(e, c, t[n] ? "" + t[n] : a.join(String(n)))), 
                        t === o ? t[n] = e : s ? t[n] ? t[n] = e : r(t, n, e) : (delete t[n], r(t, n, e)));
                    })(Function.prototype, "toString", (function() {
                        return "function" == typeof this && this[c] || s.call(this);
                    }));
                }, function(t, n) {
                    var e = {}.hasOwnProperty;
                    t.exports = function(t, n) {
                        return e.call(t, n);
                    };
                }, function(t, n, e) {
                    var o = e(25), r = Math.min;
                    t.exports = function(t) {
                        return t > 0 ? r(o(t), 9007199254740991) : 0;
                    };
                }, function(t, n, e) {
                    "use strict";
                    var o, r, i, c, s = e(22), a = e(0), u = e(6), f = e(11), h = e(14), l = e(4), v = e(7), p = e(38), d = e(39), m = e(43), g = e(26).set, y = e(46)(), b = e(27), x = e(47), w = e(48), _ = e(49), P = a.TypeError, E = a.process, S = E && E.versions, j = S && S.v8 || "", k = a.Promise, T = "process" == f(E), O = function() {}, M = r = b.f, L = !!function() {
                        try {
                            var t = k.resolve(1), n = (t.constructor = {})[e(1)("species")] = function(t) {
                                t(O, O);
                            };
                            return (T || "function" == typeof PromiseRejectionEvent) && t.then(O) instanceof n && 0 !== j.indexOf("6.6") && -1 === w.indexOf("Chrome/66");
                        } catch (t) {}
                    }(), C = function(t) {
                        var n;
                        return !(!l(t) || "function" != typeof (n = t.then)) && n;
                    }, R = function(t, n) {
                        if (!t._n) {
                            t._n = !0;
                            var e = t._c;
                            y((function() {
                                for (var o = t._v, r = 1 == t._s, i = 0, c = function(n) {
                                    var e, i, c, s = r ? n.ok : n.fail, a = n.resolve, u = n.reject, f = n.domain;
                                    try {
                                        s ? (r || (2 == t._h && F(t), t._h = 1), !0 === s ? e = o : (f && f.enter(), e = s(o), 
                                        f && (f.exit(), c = !0)), e === n.promise ? u(P("Promise-chain cycle")) : (i = C(e)) ? i.call(e, a, u) : a(e)) : u(o);
                                    } catch (t) {
                                        f && !c && f.exit(), u(t);
                                    }
                                }; e.length > i; ) c(e[i++]);
                                t._c = [], t._n = !1, n && !t._h && I(t);
                            }));
                        }
                    }, I = function(t) {
                        g.call(a, (function() {
                            var n, e, o, r = t._v, i = B(t);
                            if (i && (n = x((function() {
                                T ? E.emit("unhandledRejection", r, t) : (e = a.onunhandledrejection) ? e({
                                    promise: t,
                                    reason: r
                                }) : (o = a.console) && o.error && o.error("Unhandled promise rejection", r);
                            })), t._h = T || B(t) ? 2 : 1), t._a = void 0, i && n.e) throw n.v;
                        }));
                    }, B = function(t) {
                        return 1 !== t._h && 0 === (t._a || t._c).length;
                    }, F = function(t) {
                        g.call(a, (function() {
                            var n;
                            T ? E.emit("rejectionHandled", t) : (n = a.onrejectionhandled) && n({
                                promise: t,
                                reason: t._v
                            });
                        }));
                    }, A = function(t) {
                        var n = this;
                        n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), 
                        R(n, !0));
                    }, Y = function(t) {
                        var n, e = this;
                        if (!e._d) {
                            e._d = !0, e = e._w || e;
                            try {
                                if (e === t) throw P("Promise can't be resolved itself");
                                (n = C(t)) ? y((function() {
                                    var o = {
                                        _w: e,
                                        _d: !1
                                    };
                                    try {
                                        n.call(t, u(Y, o, 1), u(A, o, 1));
                                    } catch (t) {
                                        A.call(o, t);
                                    }
                                })) : (e._v = t, e._s = 1, R(e, !1));
                            } catch (t) {
                                A.call({
                                    _w: e,
                                    _d: !1
                                }, t);
                            }
                        }
                    };
                    L || (k = function(t) {
                        p(this, k, "Promise", "_h"), v(t), o.call(this);
                        try {
                            t(u(Y, this, 1), u(A, this, 1));
                        } catch (t) {
                            A.call(this, t);
                        }
                    }, (o = function(t) {
                        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, 
                        this._n = !1;
                    }).prototype = e(50)(k.prototype, {
                        then: function(t, n) {
                            var e = M(m(this, k));
                            return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, 
                            e.domain = T ? E.domain : void 0, this._c.push(e), this._a && this._a.push(e), this._s && R(this, !1), 
                            e.promise;
                        },
                        catch: function(t) {
                            return this.then(void 0, t);
                        }
                    }), i = function() {
                        var t = new o;
                        this.promise = t, this.resolve = u(Y, t, 1), this.reject = u(A, t, 1);
                    }, b.f = M = function(t) {
                        return t === k || t === c ? new i(t) : r(t);
                    }), h(h.G + h.W + h.F * !L, {
                        Promise: k
                    }), e(51)(k, "Promise"), e(52)("Promise"), c = e(2).Promise, h(h.S + h.F * !L, "Promise", {
                        reject: function(t) {
                            var n = M(this);
                            return (0, n.reject)(t), n.promise;
                        }
                    }), h(h.S + h.F * (s || !L), "Promise", {
                        resolve: function(t) {
                            return _(s && this === c ? k : this, t);
                        }
                    }), h(h.S + h.F * !(L && e(53)((function(t) {
                        k.all(t).catch(O);
                    }))), "Promise", {
                        all: function(t) {
                            var n = this, e = M(n), o = e.resolve, r = e.reject, i = x((function() {
                                var e = [], i = 0, c = 1;
                                d(t, !1, (function(t) {
                                    var s = i++, a = !1;
                                    e.push(void 0), c++, n.resolve(t).then((function(t) {
                                        a || (a = !0, e[s] = t, --c || o(e));
                                    }), r);
                                })), --c || o(e);
                            }));
                            return i.e && r(i.v), e.promise;
                        },
                        race: function(t) {
                            var n = this, e = M(n), o = e.reject, r = x((function() {
                                d(t, !1, (function(t) {
                                    n.resolve(t).then(e.resolve, o);
                                }));
                            }));
                            return r.e && o(r.v), e.promise;
                        }
                    });
                }, function(t, n) {
                    t.exports = !1;
                }, function(t, n, e) {
                    var o = e(4), r = e(0).document, i = o(r) && o(r.createElement);
                    t.exports = function(t) {
                        return i ? r.createElement(t) : {};
                    };
                }, function(t, n) {
                    t.exports = {};
                }, function(t, n) {
                    var e = Math.ceil, o = Math.floor;
                    t.exports = function(t) {
                        return isNaN(t = +t) ? 0 : (t > 0 ? o : e)(t);
                    };
                }, function(t, n, e) {
                    var o, r, i, c = e(6), s = e(44), a = e(45), u = e(23), f = e(0), h = f.process, l = f.setImmediate, v = f.clearImmediate, p = f.MessageChannel, d = f.Dispatch, m = 0, g = {}, y = function() {
                        var t = +this;
                        if (g.hasOwnProperty(t)) {
                            var n = g[t];
                            delete g[t], n();
                        }
                    }, b = function(t) {
                        y.call(t.data);
                    };
                    l && v || (l = function(t) {
                        for (var n = [], e = 1; arguments.length > e; ) n.push(arguments[e++]);
                        return g[++m] = function() {
                            s("function" == typeof t ? t : Function(t), n);
                        }, o(m), m;
                    }, v = function(t) {
                        delete g[t];
                    }, "process" == e(8)(h) ? o = function(t) {
                        h.nextTick(c(y, t, 1));
                    } : d && d.now ? o = function(t) {
                        d.now(c(y, t, 1));
                    } : p ? (i = (r = new p).port2, r.port1.onmessage = b, o = c(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (o = function(t) {
                        f.postMessage(t + "", "*");
                    }, f.addEventListener("message", b, !1)) : o = "onreadystatechange" in u("script") ? function(t) {
                        a.appendChild(u("script")).onreadystatechange = function() {
                            a.removeChild(this), y.call(t);
                        };
                    } : function(t) {
                        setTimeout(c(y, t, 1), 0);
                    }), t.exports = {
                        set: l,
                        clear: v
                    };
                }, function(t, n, e) {
                    "use strict";
                    var o = e(7);
                    function r(t) {
                        var n, e;
                        this.promise = new t((function(t, o) {
                            if (void 0 !== n || void 0 !== e) throw TypeError("Bad Promise constructor");
                            n = t, e = o;
                        })), this.resolve = o(n), this.reject = o(e);
                    }
                    t.exports.f = function(t) {
                        return new r(t);
                    };
                }, function(t, n, e) {
                    "use strict";
                    var o = e(11), r = {};
                    r[e(1)("toStringTag")] = "z", r + "" != "[object z]" && e(18)(Object.prototype, "toString", (function() {
                        return "[object " + o(this) + "]";
                    }), !0);
                }, function(t, n, e) {
                    var o = e(30), r = e(31);
                    t.exports = function(t) {
                        return o(r(t));
                    };
                }, function(t, n, e) {
                    var o = e(8);
                    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                        return "String" == o(t) ? t.split("") : Object(t);
                    };
                }, function(t, n) {
                    t.exports = function(t) {
                        if (null == t) throw TypeError("Can't call method on  " + t);
                        return t;
                    };
                }, function(t, n, e) {
                    var o = e(25), r = Math.max, i = Math.min;
                    t.exports = function(t, n) {
                        return (t = o(t)) < 0 ? r(t + n, 0) : i(t, n);
                    };
                }, function(t, n, e) {
                    var o = e(31);
                    t.exports = function(t) {
                        return Object(o(t));
                    };
                }, function(t, n, e) {
                    t.exports = !e(5) && !e(17)((function() {
                        return 7 != Object.defineProperty(e(23)("div"), "a", {
                            get: function() {
                                return 7;
                            }
                        }).a;
                    }));
                }, function(t, n, e) {
                    var o = e(4);
                    t.exports = function(t, n) {
                        if (!o(t)) return t;
                        var e, r;
                        if (n && "function" == typeof (e = t.toString) && !o(r = e.call(t))) return r;
                        if ("function" == typeof (e = t.valueOf) && !o(r = e.call(t))) return r;
                        if (!n && "function" == typeof (e = t.toString) && !o(r = e.call(t))) return r;
                        throw TypeError("Can't convert object to primitive value");
                    };
                }, function(t, n) {
                    t.exports = function(t, n) {
                        return {
                            enumerable: !(1 & t),
                            configurable: !(2 & t),
                            writable: !(4 & t),
                            value: n
                        };
                    };
                }, function(t, n, e) {
                    t.exports = e(12)("native-function-to-string", Function.toString);
                }, function(t, n) {
                    t.exports = function(t, n, e, o) {
                        if (!(t instanceof n) || void 0 !== o && o in t) throw TypeError(e + ": incorrect invocation!");
                        return t;
                    };
                }, function(t, n, e) {
                    var o = e(6), r = e(40), i = e(41), c = e(3), s = e(20), a = e(42), u = {}, f = {};
                    (n = t.exports = function(t, n, e, h, l) {
                        var v, p, d, m, g = l ? function() {
                            return t;
                        } : a(t), y = o(e, h, n ? 2 : 1), b = 0;
                        if ("function" != typeof g) throw TypeError(t + " is not iterable!");
                        if (i(g)) {
                            for (v = s(t.length); v > b; b++) if ((m = n ? y(c(p = t[b])[0], p[1]) : y(t[b])) === u || m === f) return m;
                        } else for (d = g.call(t); !(p = d.next()).done; ) if ((m = r(d, y, p.value, n)) === u || m === f) return m;
                    }).BREAK = u, n.RETURN = f;
                }, function(t, n, e) {
                    var o = e(3);
                    t.exports = function(t, n, e, r) {
                        try {
                            return r ? n(o(e)[0], e[1]) : n(e);
                        } catch (n) {
                            var i = t.return;
                            throw void 0 !== i && o(i.call(t)), n;
                        }
                    };
                }, function(t, n, e) {
                    var o = e(24), r = e(1)("iterator"), i = Array.prototype;
                    t.exports = function(t) {
                        return void 0 !== t && (o.Array === t || i[r] === t);
                    };
                }, function(t, n, e) {
                    var o = e(11), r = e(1)("iterator"), i = e(24);
                    t.exports = e(2).getIteratorMethod = function(t) {
                        if (null != t) return t[r] || t["@@iterator"] || i[o(t)];
                    };
                }, function(t, n, e) {
                    var o = e(3), r = e(7), i = e(1)("species");
                    t.exports = function(t, n) {
                        var e, c = o(t).constructor;
                        return void 0 === c || null == (e = o(c)[i]) ? n : r(e);
                    };
                }, function(t, n) {
                    t.exports = function(t, n, e) {
                        var o = void 0 === e;
                        switch (n.length) {
                          case 0:
                            return o ? t() : t.call(e);

                          case 1:
                            return o ? t(n[0]) : t.call(e, n[0]);

                          case 2:
                            return o ? t(n[0], n[1]) : t.call(e, n[0], n[1]);

                          case 3:
                            return o ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);

                          case 4:
                            return o ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3]);
                        }
                        return t.apply(e, n);
                    };
                }, function(t, n, e) {
                    var o = e(0).document;
                    t.exports = o && o.documentElement;
                }, function(t, n, e) {
                    var o = e(0), r = e(26).set, i = o.MutationObserver || o.WebKitMutationObserver, c = o.process, s = o.Promise, a = "process" == e(8)(c);
                    t.exports = function() {
                        var t, n, e, u = function() {
                            var o, r;
                            for (a && (o = c.domain) && o.exit(); t; ) {
                                r = t.fn, t = t.next;
                                try {
                                    r();
                                } catch (o) {
                                    throw t ? e() : n = void 0, o;
                                }
                            }
                            n = void 0, o && o.enter();
                        };
                        if (a) e = function() {
                            c.nextTick(u);
                        }; else if (!i || o.navigator && o.navigator.standalone) if (s && s.resolve) {
                            var f = s.resolve(void 0);
                            e = function() {
                                f.then(u);
                            };
                        } else e = function() {
                            r.call(o, u);
                        }; else {
                            var h = !0, l = document.createTextNode("");
                            new i(u).observe(l, {
                                characterData: !0
                            }), e = function() {
                                l.data = h = !h;
                            };
                        }
                        return function(o) {
                            var r = {
                                fn: o,
                                next: void 0
                            };
                            n && (n.next = r), t || (t = r, e()), n = r;
                        };
                    };
                }, function(t, n) {
                    t.exports = function(t) {
                        try {
                            return {
                                e: !1,
                                v: t()
                            };
                        } catch (t) {
                            return {
                                e: !0,
                                v: t
                            };
                        }
                    };
                }, function(t, n, e) {
                    var o = e(0).navigator;
                    t.exports = o && o.userAgent || "";
                }, function(t, n, e) {
                    var o = e(3), r = e(4), i = e(27);
                    t.exports = function(t, n) {
                        if (o(t), r(n) && n.constructor === t) return n;
                        var e = i.f(t);
                        return (0, e.resolve)(n), e.promise;
                    };
                }, function(t, n, e) {
                    var o = e(18);
                    t.exports = function(t, n, e) {
                        for (var r in n) o(t, r, n[r], e);
                        return t;
                    };
                }, function(t, n, e) {
                    var o = e(16).f, r = e(19), i = e(1)("toStringTag");
                    t.exports = function(t, n, e) {
                        t && !r(t = e ? t : t.prototype, i) && o(t, i, {
                            configurable: !0,
                            value: n
                        });
                    };
                }, function(t, n, e) {
                    "use strict";
                    var o = e(0), r = e(16), i = e(5), c = e(1)("species");
                    t.exports = function(t) {
                        var n = o[t];
                        i && n && !n[c] && r.f(n, c, {
                            configurable: !0,
                            get: function() {
                                return this;
                            }
                        });
                    };
                }, function(t, n, e) {
                    var o = e(1)("iterator"), r = !1;
                    try {
                        var i = [ 7 ][o]();
                        i.return = function() {
                            r = !0;
                        }, Array.from(i, (function() {
                            throw 2;
                        }));
                    } catch (t) {}
                    t.exports = function(t, n) {
                        if (!n && !r) return !1;
                        var e = !1;
                        try {
                            var i = [ 7 ], c = i[o]();
                            c.next = function() {
                                return {
                                    done: e = !0
                                };
                            }, i[o] = function() {
                                return c;
                            }, t(i);
                        } catch (t) {}
                        return e;
                    };
                }, function(t, n, e) {
                    var o = e(14);
                    o(o.S + o.F, "Object", {
                        assign: e(55)
                    });
                }, function(t, n, e) {
                    "use strict";
                    var o = e(5), r = e(56), i = e(61), c = e(62), s = e(33), a = e(30), u = Object.assign;
                    t.exports = !u || e(17)((function() {
                        var t = {}, n = {}, e = Symbol(), o = "abcdefghijklmnopqrst";
                        return t[e] = 7, o.split("").forEach((function(t) {
                            n[t] = t;
                        })), 7 != u({}, t)[e] || Object.keys(u({}, n)).join("") != o;
                    })) ? function(t, n) {
                        for (var e = s(t), u = arguments.length, f = 1, h = i.f, l = c.f; u > f; ) for (var v, p = a(arguments[f++]), d = h ? r(p).concat(h(p)) : r(p), m = d.length, g = 0; m > g; ) v = d[g++], 
                        o && !l.call(p, v) || (e[v] = p[v]);
                        return e;
                    } : u;
                }, function(t, n, e) {
                    var o = e(57), r = e(60);
                    t.exports = Object.keys || function(t) {
                        return o(t, r);
                    };
                }, function(t, n, e) {
                    var o = e(19), r = e(29), i = e(58)(!1), c = e(59)("IE_PROTO");
                    t.exports = function(t, n) {
                        var e, s = r(t), a = 0, u = [];
                        for (e in s) e != c && o(s, e) && u.push(e);
                        for (;n.length > a; ) o(s, e = n[a++]) && (~i(u, e) || u.push(e));
                        return u;
                    };
                }, function(t, n, e) {
                    var o = e(29), r = e(20), i = e(32);
                    t.exports = function(t) {
                        return function(n, e, c) {
                            var s, a = o(n), u = r(a.length), f = i(c, u);
                            if (t && e != e) {
                                for (;u > f; ) if ((s = a[f++]) != s) return !0;
                            } else for (;u > f; f++) if ((t || f in a) && a[f] === e) return t || f || 0;
                            return !t && -1;
                        };
                    };
                }, function(t, n, e) {
                    var o = e(12)("keys"), r = e(13);
                    t.exports = function(t) {
                        return o[t] || (o[t] = r(t));
                    };
                }, function(t, n) {
                    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
                }, function(t, n) {
                    n.f = Object.getOwnPropertySymbols;
                }, function(t, n) {
                    n.f = {}.propertyIsEnumerable;
                }, function(t, n, e) {
                    var o = e(14);
                    o(o.P, "Array", {
                        fill: e(64)
                    }), e(65)("fill");
                }, function(t, n, e) {
                    "use strict";
                    var o = e(33), r = e(32), i = e(20);
                    t.exports = function(t) {
                        for (var n = o(this), e = i(n.length), c = arguments.length, s = r(c > 1 ? arguments[1] : void 0, e), a = c > 2 ? arguments[2] : void 0, u = void 0 === a ? e : r(a, e); u > s; ) n[s++] = t;
                        return n;
                    };
                }, function(t, n, e) {
                    var o = e(1)("unscopables"), r = Array.prototype;
                    null == r[o] && e(15)(r, o, {}), t.exports = function(t) {
                        r[o][t] = !0;
                    };
                }, function(t, n, e) {
                    "use strict";
                    e.r(n), e.d(n, "ScratchCard", (function() {
                        return h;
                    })), e.d(n, "SCRATCH_TYPE", (function() {
                        return o;
                    }));
                    e(21), e(28), e(54);
                    var o, r = e(9), i = e.n(r), c = e(10), s = e.n(c), a = (e(63), function() {
                        function t(n, e, o) {
                            i()(this, t), this.ctx = n, this.mouseX = e, this.mouseY = o;
                        }
                        return s()(t, [ {
                            key: "updateMousePosition",
                            value: function(t, n) {
                                this.mouseX = t, this.mouseY = n;
                            }
                        }, {
                            key: "circle",
                            value: function(t) {
                                this.ctx.beginPath(), this.ctx.arc(this.mouseX + t, this.mouseY + t, t, 0, 2 * Math.PI, !1), 
                                this.ctx.fillStyle = "#000000", this.ctx.fill(), this.ctx.closePath();
                            }
                        }, {
                            key: "clearPoint",
                            value: function(t) {
                                var n = t, e = 2 * Math.random() * n - n, o = Math.sqrt(n * n - e * e), r = 2 * Math.random() * o - o;
                                return e += n, r += n, [ e += this.mouseX, r += this.mouseY ];
                            }
                        }, {
                            key: "spray",
                            value: function(t, n, e) {
                                for (var o = 0; o < e; o++) {
                                    var r = this.clearPoint(t / 2);
                                    this.ctx.beginPath(), this.ctx.arc(r[0] + t / 2, r[1] + t / 2, n / 2, 0, 2 * Math.PI, !1), 
                                    this.ctx.fillStyle = "#000000", this.ctx.fill(), this.ctx.closePath();
                                }
                            }
                        }, {
                            key: "brush",
                            value: function(t) {
                                if (null !== t) {
                                    var n = Math.atan2(this.mouseY, this.mouseX);
                                    this.ctx.save(), this.ctx.translate(this.mouseX, this.mouseY), this.ctx.rotate(n), 
                                    this.ctx.drawImage(t, -t.width / 2, -t.height / 2);
                                } else {
                                    var e = new Error("argument img is not a node IMG");
                                    console.log(e.message);
                                }
                            }
                        }, {
                            key: "startLine",
                            value: function(t) {
                                this.ctx.beginPath(), this.ctx.strokeStyle = "black", this.ctx.lineWidth = t, this.ctx.lineJoin = this.ctx.lineCap = "round", 
                                this.ctx.moveTo(this.mouseX + t, this.mouseY + t);
                            }
                        }, {
                            key: "drawLine",
                            value: function(t) {
                                this.ctx.filter = "blur(1px)", this.ctx.lineTo(this.mouseX + t, this.mouseY + t), 
                                this.ctx.stroke();
                            }
                        } ]), t;
                    }());
                    function u(t) {
                        return new Promise((function(n, e) {
                            var o = new Image;
                            o.crossOrigin = "Anonymous", o.onload = function() {
                                n(o);
                            }, o.src = t, o.onerror = function(n) {
                                var o = new Error("Image ".concat(t, " is not loaded."));
                                e(o);
                            };
                        }));
                    }
                    function f(t, n) {
                        var e, o;
                        return function() {
                            var r = this, i = +new Date, c = arguments;
                            e && i < e + n ? (clearTimeout(o), o = window.setTimeout((function() {
                                e = i, t.apply(r, c);
                            }), n)) : (e = i, t.apply(r, c));
                        };
                    }
                    !function(t) {
                        t[t.BRUSH = 0] = "BRUSH", t[t.SPRAY = 1] = "SPRAY", t[t.CIRCLE = 2] = "CIRCLE", 
                        t[t.LINE = 3] = "LINE";
                    }(o || (o = {})), function() {
                        if ("function" == typeof window.CustomEvent) return !1;
                        function t(t, n) {
                            n = n || {
                                bubbles: !1,
                                cancelable: !1,
                                detail: void 0
                            };
                            var e = document.createEvent("CustomEvent");
                            return e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), e;
                        }
                        t.prototype = window.Event.prototype, window.CustomEvent = t;
                    }();
                    var h = function() {
                        function t(n, e) {
                            var r = this;
                            i()(this, t);
                            var c = this, s = {
                                scratchType: o.LINE,
                                containerWidth: 100,
                                containerHeight: 100,
                                percentToFinish: 50,
                                nPoints: 0,
                                pointSize: [ 0, 0 ],
                                callback: function() {
                                    alert("done.");
                                },
                                brushSrc: "",
                                imageForwardSrc: "./images/scratchcard.png",
                                imageBackgroundSrc: "./images/scratchcard-background.svg",
                                htmlBackground: "",
                                clearZoneRadius: 0,
                                enabledPercentUpdate: !0
                            };
                            this.config = Object.assign(Object.assign({}, s), e), this.scratchType = this.config.scratchType, 
                            this.container = document.querySelector(n), this.position = [ 0, 0 ], this.readyToClear = !1, 
                            this.percent = 0, this.callbackDone = !1, this.generateCanvas(), this.ctx = this.canvas.getContext("2d"), 
                            this.brush = new a(this.ctx, this.position[0], this.position[1]), this.config.scratchType === o.BRUSH && u(this.config.brushSrc).then((function(t) {
                                r.brushImage = t;
                            }));
                            var h = f((function(t) {
                                t.preventDefault(), c.dispatchEvent("scratch", "move"), c.position = c.mousePosition(t), 
                                c.brush.updateMousePosition(c.position[0], c.position[1]), c.scratch(), r.config.enabledPercentUpdate && (c.percent = c.updatePercent());
                            }), 16);
                            this.canvas.addEventListener("mousedown", (function(t) {
                                t.preventDefault(), c._setScratchPosition(), c.scratchType === o.LINE && (c.position = c.mousePosition(t), 
                                c.brush.updateMousePosition(c.position[0], c.position[1]), c.brush.startLine(c.config.clearZoneRadius)), 
                                c.canvas.addEventListener("mousemove", h), document.body.addEventListener("mouseup", (function t(n) {
                                    c.canvas.removeEventListener("mousemove", h), c.finish(), this.removeEventListener("mouseup", t);
                                }));
                            })), this.canvas.addEventListener("touchstart", (function(t) {
                                t.preventDefault(), c._setScratchPosition(), c.scratchType === o.LINE && (c.position = c.mousePosition(t), 
                                c.brush.updateMousePosition(c.position[0], c.position[1]), c.brush.startLine(c.config.clearZoneRadius)), 
                                c.canvas.addEventListener("touchmove", h), document.body.addEventListener("touchend", (function t() {
                                    c.canvas.removeEventListener("touchmove", h), c.finish(), this.removeEventListener("touchend", t);
                                }));
                            })), window.addEventListener("resize", f((function() {
                                r._setScratchPosition();
                            }), 100)), window.addEventListener("scroll", f((function() {
                                r._setScratchPosition();
                            }), 16));
                        }
                        return s()(t, [ {
                            key: "getPercent",
                            value: function() {
                                return this.percent;
                            }
                        }, {
                            key: "_setScratchPosition",
                            value: function() {
                                this.zone = function(t) {
                                    for (var n = {
                                        left: 0,
                                        top: 0
                                    }, e = t.getBoundingClientRect(); t; ) n.top += t.offsetTop, n.left += t.offsetLeft, 
                                    t = t.offsetParent;
                                    var o = n.left - e.left, r = n.top - e.top;
                                    return {
                                        left: o < 0 ? n.left + Math.abs(o) : n.left - Math.abs(o),
                                        top: r < 0 ? n.top + Math.abs(r) : n.top - Math.abs(r)
                                    };
                                }(this.canvas);
                            }
                        }, {
                            key: "finish",
                            value: function() {
                                !this.callbackDone && this.percent > this.config.percentToFinish && (this.clear(), 
                                this.canvas.style.pointerEvents = "none", void 0 !== this.config.callback && (this.callbackDone = !0, 
                                this.config.callback()));
                            }
                        }, {
                            key: "dispatchEvent",
                            value: function(t, n) {
                                !function(t, n, e) {
                                    var o = new CustomEvent(n, {
                                        bubbles: !0,
                                        cancelable: !0,
                                        detail: e
                                    });
                                    t.dispatchEvent(o);
                                }(this.canvas, "".concat(t, ".").concat(n), {});
                            }
                        }, {
                            key: "init",
                            value: function() {
                                var t = this;
                                return new Promise((function(n, e) {
                                    u(t.config.imageForwardSrc).then((function(e) {
                                        t.scratchImage = e, t.ctx.drawImage(t.scratchImage, 0, 0, t.canvas.width, t.canvas.height), 
                                        t.setBackground(), n();
                                    }), (function(n) {
                                        return e(n), new TypeError("".concat(t.config.imageForwardSrc, " is not loaded."));
                                    }));
                                }));
                            }
                        }, {
                            key: "generateCanvas",
                            value: function() {
                                this.canvas = document.createElement("canvas"), this.canvas.classList.add("sc__canvas"), 
                                this.canvas.width = this.config.containerWidth, this.canvas.height = this.config.containerHeight, 
                                this.container.appendChild(this.canvas);
                            }
                        }, {
                            key: "setBackground",
                            value: function() {
                                var t = this;
                                if (0 !== this.config.htmlBackground.length) !function(t, n) {
                                    var e = new DOMParser, o = document.createElement("div");
                                    o.classList.add("sc__inner");
                                    var r = e.parseFromString(t, "text/html");
                                    o.innerHTML = r.body.innerHTML, n.insertBefore(o, n.firstElementChild);
                                }(this.config.htmlBackground, this.container); else {
                                    var n = document.createElement("img");
                                    u(this.config.imageBackgroundSrc).then((function(e) {
                                        n.src = e.src, t.container.insertBefore(n, t.canvas);
                                    }), (function(t) {
                                        console.log(t.message);
                                    }));
                                }
                            }
                        }, {
                            key: "mousePosition",
                            value: function(t) {
                                var n, e;
                                switch (t.type) {
                                  case "touchmove":
                                    n = t.touches[0].clientX - this.config.clearZoneRadius - this.zone.left, e = t.touches[0].clientY - this.config.clearZoneRadius - this.zone.top;
                                    break;

                                  case "mousemove":
                                    n = t.clientX - this.config.clearZoneRadius - this.zone.left, e = t.clientY - this.config.clearZoneRadius - this.zone.top;
                                }
                                return [ n, e ];
                            }
                        }, {
                            key: "scratch",
                            value: function() {
                                this.position[0], this.position[1];
                                switch (this.ctx.globalCompositeOperation = "destination-out", this.ctx.save(), 
                                this.config.scratchType) {
                                  case o.BRUSH:
                                    this.brush.brush(this.brushImage);
                                    break;

                                  case o.CIRCLE:
                                    this.brush.circle(this.config.clearZoneRadius);
                                    break;

                                  case o.SPRAY:
                                    this.brush.spray(this.config.clearZoneRadius, this.config.pointSize, this.config.nPoints);
                                    break;

                                  case o.LINE:
                                    this.brush.drawLine(this.config.clearZoneRadius);
                                }
                                this.ctx.restore();
                            }
                        }, {
                            key: "updatePercent",
                            value: function() {
                                for (var t = 0, n = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height), e = n.data.length, o = 0; o < e; o += 4) 0 === n.data[o] && 0 === n.data[o + 1] && 0 === n.data[o + 2] && 0 === n.data[o + 3] && t++;
                                return t >= 1 ? t / (this.canvas.width * this.canvas.height) * 100 : 0;
                            }
                        }, {
                            key: "clear",
                            value: function() {
                                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                            }
                        } ]), t;
                    }();
                    window.ScratchCard = h, window.SCRATCH_TYPE = o;
                } ]);
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        var scratchcard_min = __webpack_require__(265);
        let imageOverFields;
        if (window.matchMedia("(max-width: 500px)").matches) imageOverFields = imageOverFieldsMobile; else imageOverFields = imageOverFieldsPC;
        const timeoutSecond = 1e3 * timeout;
        const timeToRedirectSecond = 1e3 * timeToRedirect;
        const timeBeforeFinalMessageSecond = 1e3 * timeBeforeFinalMessage;
        document.addEventListener("DOMContentLoaded", (() => {
            document.querySelector(".main-game-home__start-message").innerHTML = startMessage;
            document.querySelector(".final-message-game__text").innerHTML = finalMessage;
            const scContainer = document.querySelector(".main-game-home__game-wrapper");
            const sc = new scratchcard_min.ScratchCard(".main-game-home__game-wrapper", {
                scratchType: scratchcard_min.SCRATCH_TYPE.BRUSH,
                containerWidth: scContainer.offsetWidth,
                containerHeight: scContainer.offsetHeight,
                imageForwardSrc: imageOverFields,
                imageBackgroundSrc: "",
                brushSrc: "img/game/brush.png",
                htmlBackground: `\n      <ul class="main-game-home__field">\n        <li class="main-game-home__item">\n          <div class="main-game-home__image-ibg">\n            <img class="game-image-first" src="${scratchField1}" alt="Gift">\n          </div>\n        </li>\n        <li class="main-game-home__item">\n          <div class="main-game-home__image-ibg">\n            <img class="game-image-first" src="${scratchField2}" alt="Gift">\n          </div>\n        </li>\n        <li class="main-game-home__item">\n          <div class="main-game-home__image-ibg">\n            <img class="game-image-first" src="${scratchField3}" alt="Gift">\n          </div>\n        </li>\n        <li class="main-game-home__item">\n          <div class="main-game-home__image-ibg">\n            <img class="game-image-first" src="${scratchField4}" alt="Gift">\n          </div>\n        </li>\n        <li class="main-game-home__item">\n          <div class="main-game-home__image-ibg">\n            <img class="game-image-first" src="${scratchField5}" alt="Gift">\n          </div>\n        </li>\n        <li class="main-game-home__item">\n          <div class="main-game-home__image-ibg">\n            <img class="game-image-first" src="${scratchField6}" alt="Gift">\n          </div>\n        </li>\n        <li class="main-game-home__item">\n          <div class="main-game-home__image-ibg">\n            <img class="game-image-first" src="${scratchField7}" alt="Gift">\n          </div>\n        </li>\n        <li class="main-game-home__item">\n          <div class="main-game-home__image-ibg">\n            <img class="game-image-first" src="${scratchField8}" alt="Gift">\n          </div>\n        </li>\n        <li class="main-game-home__item">\n          <div class="main-game-home__image-ibg">\n            <img class="game-image-first" src="${scratchField9}" alt="Gift">\n          </div>\n        </li>\n      </ul>\n    `,
                clearZoneRadius: 0,
                percentToFinish,
                callback: function() {
                    if (!finalMessage) setTimeout((() => {
                        document.location.href = redirectURL;
                    }), timeToRedirectSecond); else setTimeout((() => {
                        document.querySelector(".final-message-game").classList.add("_active");
                        setTimeout((() => {
                            document.location.href = redirectURL;
                        }), timeToRedirectSecond);
                    }), timeBeforeFinalMessageSecond);
                }
            });
            sc.init().then((() => {
                let isGameStarted = false;
                sc.canvas.addEventListener("scratch.move", (function() {
                    let percent = sc.getPercent();
                    if (percent > 0 && !isGameStarted) {
                        isGameStarted = true;
                        document.querySelector(".main-game-home__start-message").classList.add("_hide");
                    }
                    if (percent >= percentToFinish) sc.finish();
                }));
            })).catch((error => {}));
        }));
        function timeoutFunc() {
            setTimeout((() => {
                document.querySelector(".final-message-game").classList.add("_active");
                setTimeout((() => {
                    document.location.href = redirectURL;
                }), timeToRedirectSecond);
            }), timeoutSecond);
        }
        window.addEventListener("load", timeoutFunc);
        window["FLS"] = false;
    })();
})();