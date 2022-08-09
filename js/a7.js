/*! This file is auto-generated */
this.wp = this.wp || {}, this.wp.i18n = function(t) { var n = {};

    function e(r) { if (n[r]) return n[r].exports; var i = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports } return e.m = t, e.c = n, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r }) }, e.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function(t, n) { if (1 & n && (t = e(t)), 8 & n) return t; if (4 & n && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (e.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t)
            for (var i in t) e.d(r, i, function(n) { return t[n] }.bind(null, i)); return r }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, e.p = "", e(e.s = "Vhyj") }({ "4Z/T": function(t, n, e) { var r;! function() { "use strict"; var i = { not_string: /[^s]/, not_bool: /[^t]/, not_type: /[^T]/, not_primitive: /[^v]/, number: /[diefg]/, numeric_arg: /[bcdiefguxX]/, json: /[j]/, not_json: /[^j]/, text: /^[^\x25]+/, modulo: /^\x25{2}/, placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/, key: /^([a-z_][a-z_\d]*)/i, key_access: /^\.([a-z_][a-z_\d]*)/i, index_access: /^\[(\d+)\]/, sign: /^[+-]/ };

            function o(t) { return s(l(t), arguments) }

            function a(t, n) { return o.apply(null, [t].concat(n || [])) }

            function s(t, n) { var e, r, a, s, u, l, c, p, f, d = 1,
                    h = t.length,
                    g = ""; for (r = 0; r < h; r++)
                    if ("string" == typeof t[r]) g += t[r];
                    else if ("object" == typeof t[r]) { if ((s = t[r]).keys)
                        for (e = n[d], a = 0; a < s.keys.length; a++) { if (null == e) throw new Error(o('[sprintf] Cannot access property "%s" of undefined value "%s"', s.keys[a], s.keys[a - 1]));
                            e = e[s.keys[a]] } else e = s.param_no ? n[s.param_no] : n[d++]; if (i.not_type.test(s.type) && i.not_primitive.test(s.type) && e instanceof Function && (e = e()), i.numeric_arg.test(s.type) && "number" != typeof e && isNaN(e)) throw new TypeError(o("[sprintf] expecting number but found %T", e)); switch (i.number.test(s.type) && (p = e >= 0), s.type) {
                        case "b":
                            e = parseInt(e, 10).toString(2); break;
                        case "c":
                            e = String.fromCharCode(parseInt(e, 10)); break;
                        case "d":
                        case "i":
                            e = parseInt(e, 10); break;
                        case "j":
                            e = JSON.stringify(e, null, s.width ? parseInt(s.width) : 0); break;
                        case "e":
                            e = s.precision ? parseFloat(e).toExponential(s.precision) : parseFloat(e).toExponential(); break;
                        case "f":
                            e = s.precision ? parseFloat(e).toFixed(s.precision) : parseFloat(e); break;
                        case "g":
                            e = s.precision ? String(Number(e.toPrecision(s.precision))) : parseFloat(e); break;
                        case "o":
                            e = (parseInt(e, 10) >>> 0).toString(8); break;
                        case "s":
                            e = String(e), e = s.precision ? e.substring(0, s.precision) : e; break;
                        case "t":
                            e = String(!!e), e = s.precision ? e.substring(0, s.precision) : e; break;
                        case "T":
                            e = Object.prototype.toString.call(e).slice(8, -1).toLowerCase(), e = s.precision ? e.substring(0, s.precision) : e; break;
                        case "u":
                            e = parseInt(e, 10) >>> 0; break;
                        case "v":
                            e = e.valueOf(), e = s.precision ? e.substring(0, s.precision) : e; break;
                        case "x":
                            e = (parseInt(e, 10) >>> 0).toString(16); break;
                        case "X":
                            e = (parseInt(e, 10) >>> 0).toString(16).toUpperCase() }
                    i.json.test(s.type) ? g += e : (!i.number.test(s.type) || p && !s.sign ? f = "" : (f = p ? "+" : "-", e = e.toString().replace(i.sign, "")), l = s.pad_char ? "0" === s.pad_char ? "0" : s.pad_char.charAt(1) : " ", c = s.width - (f + e).length, u = s.width && c > 0 ? l.repeat(c) : "", g += s.align ? f + e + u : "0" === l ? f + u + e : u + f + e) } return g } var u = Object.create(null);

            function l(t) { if (u[t]) return u[t]; for (var n, e = t, r = [], o = 0; e;) { if (null !== (n = i.text.exec(e))) r.push(n[0]);
                    else if (null !== (n = i.modulo.exec(e))) r.push("%");
                    else { if (null === (n = i.placeholder.exec(e))) throw new SyntaxError("[sprintf] unexpected placeholder"); if (n[2]) { o |= 1; var a = [],
                                s = n[2],
                                l = []; if (null === (l = i.key.exec(s))) throw new SyntaxError("[sprintf] failed to parse named argument key"); for (a.push(l[1]);
                                "" !== (s = s.substring(l[0].length));)
                                if (null !== (l = i.key_access.exec(s))) a.push(l[1]);
                                else { if (null === (l = i.index_access.exec(s))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                    a.push(l[1]) }
                            n[2] = a } else o |= 2; if (3 === o) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                        r.push({ placeholder: n[0], param_no: n[1], keys: n[2], sign: n[3], pad_char: n[4], align: n[5], width: n[6], precision: n[7], type: n[8] }) }
                    e = e.substring(n[0].length) } return u[t] = r }
            n.sprintf = o, n.vsprintf = a, "undefined" != typeof window && (window.sprintf = o, window.vsprintf = a, void 0 === (r = function() { return { sprintf: o, vsprintf: a } }.call(n, e, n, t)) || (t.exports = r)) }() }, "4eJC": function(t, n, e) { t.exports = function(t, n) { var e, r, i = 0;

            function o() { var o, a, s = e,
                    u = arguments.length;
                t: for (; s;) { if (s.args.length === arguments.length) { for (a = 0; a < u; a++)
                            if (s.args[a] !== arguments[a]) { s = s.next; continue t }
                        return s !== e && (s === r && (r = s.prev), s.prev.next = s.next, s.next && (s.next.prev = s.prev), s.next = e, s.prev = null, e.prev = s, e = s), s.val }
                    s = s.next }
                for (o = new Array(u), a = 0; a < u; a++) o[a] = arguments[a]; return s = { args: o, val: t.apply(null, o) }, e ? (e.prev = s, s.next = e) : r = s, i === n.maxSize ? (r = r.prev).next = null : i++, e = s, s.val } return n = n || {}, o.clear = function() { e = null, r = null, i = 0 }, o } }, Vhyj: function(t, n, e) { "use strict";
        e.r(n), e.d(n, "sprintf", (function() { return u })), e.d(n, "createI18n", (function() { return b })), e.d(n, "defaultI18n", (function() { return w })), e.d(n, "setLocaleData", (function() { return F })), e.d(n, "resetLocaleData", (function() { return S })), e.d(n, "getLocaleData", (function() { return k })), e.d(n, "subscribe", (function() { return j })), e.d(n, "__", (function() { return T })), e.d(n, "_x", (function() { return O })), e.d(n, "_n", (function() { return L })), e.d(n, "_nx", (function() { return D })), e.d(n, "isRTL", (function() { return P })), e.d(n, "hasTranslation", (function() { return E })); var r = e("4eJC"),
            i = e.n(r),
            o = e("4Z/T"),
            a = e.n(o); const s = i()(console.error);

        function u(t) { try { for (var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r]; return a.a.sprintf(t, ...e) } catch (n) { return n instanceof Error && s("sprintf error: \n\n" + n.toString()), t } } var l, c, p, f;
        l = { "(": 9, "!": 8, "*": 7, "/": 7, "%": 7, "+": 6, "-": 6, "<": 5, "<=": 5, ">": 5, ">=": 5, "==": 4, "!=": 4, "&&": 3, "||": 2, "?": 1, "?:": 1 }, c = ["(", "?"], p = { ")": ["("], ":": ["?", "?:"] }, f = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/; var d = { "!": function(t) { return !t }, "*": function(t, n) { return t * n }, "/": function(t, n) { return t / n }, "%": function(t, n) { return t % n }, "+": function(t, n) { return t + n }, "-": function(t, n) { return t - n }, "<": function(t, n) { return t < n }, "<=": function(t, n) { return t <= n }, ">": function(t, n) { return t > n }, ">=": function(t, n) { return t >= n }, "==": function(t, n) { return t === n }, "!=": function(t, n) { return t !== n }, "&&": function(t, n) { return t && n }, "||": function(t, n) { return t || n }, "?:": function(t, n, e) { if (t) throw n; return e } };

        function h(t) { var n = function(t) { for (var n, e, r, i, o = [], a = []; n = t.match(f);) { for (e = n[0], (r = t.substr(0, n.index).trim()) && o.push(r); i = a.pop();) { if (p[e]) { if (p[e][0] === i) { e = p[e][1] || e; break } } else if (c.indexOf(i) >= 0 || l[i] < l[e]) { a.push(i); break }
                        o.push(i) }
                    p[e] || a.push(e), t = t.substr(n.index + e.length) } return (t = t.trim()) && o.push(t), o.concat(a.reverse()) }(t); return function(t) { return function(t, n) { var e, r, i, o, a, s, u = []; for (e = 0; e < t.length; e++) { if (a = t[e], o = d[a]) { for (r = o.length, i = Array(r); r--;) i[r] = u.pop(); try { s = o.apply(null, i) } catch (t) { return t } } else s = n.hasOwnProperty(a) ? n[a] : +a;
                        u.push(s) } return u[0] }(n, t) } } var g = { contextDelimiter: "", onMissingKey: null };

        function x(t, n) { var e; for (e in this.data = t, this.pluralForms = {}, this.options = {}, g) this.options[e] = void 0 !== n && e in n ? n[e] : g[e] }
        x.prototype.getPluralForm = function(t, n) { var e, r, i, o, a = this.pluralForms[t]; return a || ("function" != typeof(i = (e = this.data[t][""])["Plural-Forms"] || e["plural-forms"] || e.plural_forms) && (r = function(t) { var n, e, r; for (n = t.split(";"), e = 0; e < n.length; e++)
                    if (0 === (r = n[e].trim()).indexOf("plural=")) return r.substr(7) }(e["Plural-Forms"] || e["plural-forms"] || e.plural_forms), o = h(r), i = function(t) { return +o({ n: t }) }), a = this.pluralForms[t] = i), a(n) }, x.prototype.dcnpgettext = function(t, n, e, r, i) { var o, a, s; return o = void 0 === i ? 0 : this.getPluralForm(t, i), a = e, n && (a = n + this.options.contextDelimiter + e), (s = this.data[t][a]) && s[o] ? s[o] : (this.options.onMissingKey && this.options.onMissingKey(e, t), 0 === o ? e : r) }; const y = { "": { plural_forms: t => 1 === t ? 0 : 1 } },
            v = /^i18n\.(n?gettext|has_translation)(_|$)/,
            b = (t, n, e) => { const r = new x({}),
                    i = new Set,
                    o = () => { i.forEach(t => t()) },
                    a = function(t) { let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                        r.data[n] = {...y, ...r.data[n], ...t }, r.data[n][""] = {...y[""], ...r.data[n][""] } },
                    s = (t, n) => { a(t, n), o() },
                    u = function() { let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
                            n = arguments.length > 1 ? arguments[1] : void 0,
                            e = arguments.length > 2 ? arguments[2] : void 0,
                            i = arguments.length > 3 ? arguments[3] : void 0,
                            o = arguments.length > 4 ? arguments[4] : void 0; return r.data[t] || a(void 0, t), r.dcnpgettext(t, n, e, i, o) },
                    l = function() { let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default"; return t },
                    c = (t, n, r) => { let i = u(r, n, t); return e ? (i = e.applyFilters("i18n.gettext_with_context", i, t, n, r), e.applyFilters("i18n.gettext_with_context_" + l(r), i, t, n, r)) : i }; if (t && s(t, n), e) { const t = t => { v.test(t) && o() };
                    e.addAction("hookAdded", "core/i18n", t), e.addAction("hookRemoved", "core/i18n", t) } return { getLocaleData: function() { let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default"; return r.data[t] }, setLocaleData: s, resetLocaleData: (t, n) => { r.data = {}, r.pluralForms = {}, s(t, n) }, subscribe: t => (i.add(t), () => i.delete(t)), __: (t, n) => { let r = u(n, void 0, t); return e ? (r = e.applyFilters("i18n.gettext", r, t, n), e.applyFilters("i18n.gettext_" + l(n), r, t, n)) : r }, _x: c, _n: (t, n, r, i) => { let o = u(i, void 0, t, n, r); return e ? (o = e.applyFilters("i18n.ngettext", o, t, n, r, i), e.applyFilters("i18n.ngettext_" + l(i), o, t, n, r, i)) : o }, _nx: (t, n, r, i, o) => { let a = u(o, i, t, n, r); return e ? (a = e.applyFilters("i18n.ngettext_with_context", a, t, n, r, i, o), e.applyFilters("i18n.ngettext_with_context_" + l(o), a, t, n, r, i, o)) : a }, isRTL: () => "rtl" === c("ltr", "text direction"), hasTranslation: (t, n, i) => { var o, a; const s = n ? n + "" + t : t; let u = !(null === (o = r.data) || void 0 === o || null === (a = o[null != i ? i : "default"]) || void 0 === a || !a[s]); return e && (u = e.applyFilters("i18n.has_translation", u, t, n, i), u = e.applyFilters("i18n.has_translation_" + l(i), u, t, n, i)), u } } }; var _ = e("g56x"); const m = b(void 0, void 0, _.defaultHooks); var w = m; const k = m.getLocaleData.bind(m),
            F = m.setLocaleData.bind(m),
            S = m.resetLocaleData.bind(m),
            j = m.subscribe.bind(m),
            T = m.__.bind(m),
            O = m._x.bind(m),
            L = m._n.bind(m),
            D = m._nx.bind(m),
            P = m.isRTL.bind(m),
            E = m.hasTranslation.bind(m) }, g56x: function(t, n) { t.exports = window.wp.hooks } });