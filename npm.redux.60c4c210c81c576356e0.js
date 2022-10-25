(self.webpackChunkunit_demo_cra = self.webpackChunkunit_demo_cra || []).push([[593], {
  890: (r, t, n) => {
    function e(r) { return `Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `; }n.d(t, { MT: () => c }); const o = typeof Symbol === 'function' && Symbol.observable || '@@observable'; const i = function () {
      return Math.random().toString(36).substring(7).split('')
        .join('.');
    }; const f = { INIT: `@@redux/INIT${i()}`, REPLACE: `@@redux/REPLACE${i()}`, PROBE_UNKNOWN_ACTION() { return `@@redux/PROBE_UNKNOWN_ACTION${i()}`; } }; function u(r) { if (typeof r !== 'object' || r === null) return !1; for (var t = r; Object.getPrototypeOf(t) !== null;)t = Object.getPrototypeOf(t); return Object.getPrototypeOf(r) === t; } function c(r, t, n) {
      let i; if (typeof t === 'function' && typeof n === 'function' || typeof n === 'function' && typeof arguments[3] === 'function') throw new Error(e(0)); if (typeof t === 'function' && void 0 === n && (n = t, t = void 0), void 0 !== n) { if (typeof n !== 'function') throw new Error(e(1)); return n(c)(r, t); } if (typeof r !== 'function') throw new Error(e(2)); let s = r; let p = t; let w = []; let l = w; let h = !1; function y() { l === w && (l = w.slice()); } function a() { if (h) throw new Error(e(3)); return p; } function E(r) { if (typeof r !== 'function') throw new Error(e(4)); if (h) throw new Error(e(5)); let t = !0; return y(), l.push(r), function () { if (t) { if (h) throw new Error(e(6)); t = !1, y(); const n = l.indexOf(r); l.splice(n, 1), w = null; } }; } function b(r) { if (!u(r)) throw new Error(e(7)); if (void 0 === r.type) throw new Error(e(8)); if (h) throw new Error(e(9)); try { h = !0, p = s(p, r); } finally { h = !1; } for (let t = w = l, n = 0; n < t.length; n++)(0, t[n])(); return r; } function d(r) { if (typeof r !== 'function') throw new Error(e(10)); s = r, b({ type: f.REPLACE }); } function v() { let r; const t = E; return (r = { subscribe(r) { if (typeof r !== 'object' || r === null) throw new Error(e(11)); function n() { r.next && r.next(a()); } return n(), { unsubscribe: t(n) }; } })[o] = function () { return this; }, r; } return b({ type: f.INIT }), (i = {
        dispatch: b, subscribe: E, getState: a, replaceReducer: d,
      })[o] = v, i;
    }
  },
}]);
