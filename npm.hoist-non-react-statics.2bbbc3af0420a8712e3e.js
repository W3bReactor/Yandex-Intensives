(self.webpackChunkunit_demo_cra = self.webpackChunkunit_demo_cra || []).push([[642], {
  679: (e, t, r) => {
    const o = r(864); const p = {
      childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0,
    }; const a = {
      name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0,
    }; const s = {
      $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0,
    }; const n = {}; function y(e) { return o.isMemo(e) ? s : n[e.$$typeof] || p; }n[o.ForwardRef] = {
      $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0,
    }, n[o.Memo] = s; const c = Object.defineProperty; const i = Object.getOwnPropertyNames; const f = Object.getOwnPropertySymbols; const l = Object.getOwnPropertyDescriptor; const m = Object.getPrototypeOf; const u = Object.prototype; e.exports = function e(t, r, o) { if (typeof r !== 'string') { if (u) { const p = m(r); p && p !== u && e(t, p, o); } let s = i(r); f && (s = s.concat(f(r))); for (let n = y(t), d = y(r), g = 0; g < s.length; ++g) { const O = s[g]; if (!(a[O] || o && o[O] || d && d[O] || n && n[O])) { const P = l(r, O); try { c(t, O, P); } catch (e) {} } } } return t; };
  },
}]);
