(self.webpackChunkunit_demo_cra = self.webpackChunkunit_demo_cra || []).push([[216], {
  727: (e, t, n) => {
    n.d(t, { VK: () => f, rU: () => y }); const r = n(550); const a = n(354); const i = n(294); const o = n(731); const c = n(462); const l = n(366); const u = n(776); var f = (function (e) { function t() { for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)r[a] = arguments[a]; return (t = e.call.apply(e, [this].concat(r)) || this).history = (0, o.lX)(t.props), t; } return (0, a.Z)(t, e), t.prototype.render = function () { return i.createElement(r.F0, { history: this.history, children: this.props.children }); }, t; }(i.Component)); i.Component; const s = function (e, t) { return typeof e === 'function' ? e(t) : e; }; const v = function (e, t) { return typeof e === 'string' ? (0, o.ob)(e, null, null, t) : e; }; const p = function (e) { return e; }; let h = i.forwardRef; void 0 === h && (h = p); const m = h(((e, t) => { const n = e.innerRef; const r = e.navigate; const a = e.onClick; const o = (0, l.Z)(e, ['innerRef', 'navigate', 'onClick']); const u = o.target; const f = (0, c.Z)({}, o, { onClick(e) { try { a && a(e); } catch (t) { throw e.preventDefault(), t; }e.defaultPrevented || e.button !== 0 || u && u !== '_self' || (function (e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }(e)) || (e.preventDefault(), r()); } }); return f.ref = p !== h && t || n, i.createElement('a', f); })); var y = h(((e, t) => { const n = e.component; const a = void 0 === n ? m : n; const f = e.replace; const y = e.to; const d = e.innerRef; const C = (0, l.Z)(e, ['component', 'replace', 'to', 'innerRef']); return i.createElement(r.s6.Consumer, null, ((e) => { e || (0, u.Z)(!1); const n = e.history; const r = v(s(y, e.location), e.location); const l = r ? n.createHref(r) : ''; const m = (0, c.Z)({}, C, { href: l, navigate() { const t = s(y, e.location); const r = (0, o.Ep)(e.location) === (0, o.Ep)(v(t)); (f || r ? n.replace : n.push)(t); } }); return p !== h ? m.ref = t || d : m.innerRef = d, i.createElement(a, m); })); })); const d = function (e) { return e; }; let C = i.forwardRef; void 0 === C && (C = d), C(((e, t) => {
      const n = e['aria-current']; const a = void 0 === n ? 'page' : n; const o = e.activeClassName; const f = void 0 === o ? 'active' : o; const p = e.activeStyle; const h = e.className; const m = e.exact; const R = e.isActive; const Z = e.location; const g = e.sensitive; const E = e.strict; const k = e.style; const w = e.to; const K = e.innerRef; const N = (0, l.Z)(e, ['aria-current', 'activeClassName', 'activeStyle', 'className', 'exact', 'isActive', 'location', 'sensitive', 'strict', 'style', 'to', 'innerRef']); return i.createElement(r.s6.Consumer, null, ((e) => {
        e || (0, u.Z)(!1); const n = Z || e.location; const o = v(s(w, n), n); const l = o.pathname; const _ = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'); const b = _ ? (0, r.LX)(n.pathname, {
          path: _, exact: m, sensitive: g, strict: E,
        }) : null; const A = !!(R ? R(b, n) : b); let x = typeof h === 'function' ? h(A) : h; let D = typeof k === 'function' ? k(A) : k; A && (x = (function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return t.filter(((e) => e)).join(' '); }(x, f)), D = (0, c.Z)({}, D, p)); const S = (0, c.Z)({
          'aria-current': A && a || null, className: x, style: D, to: o,
        }, N); return d !== C ? S.ref = t || K : S.innerRef = K, i.createElement(y, S);
      }));
    }));
  },
}]);
