(self.webpackChunkunit_demo_cra = self.webpackChunkunit_demo_cra || []).push([[162], {
  731: (n, t, e) => {
    e.d(t, {
      Ep: () => s, PP: () => A, lX: () => g, ob: () => h, q_: () => b,
    }); const o = e(462); const i = e(273); const r = e(776); function a(n) { return n.charAt(0) === '/' ? n : `/${n}`; } function c(n) { return n.charAt(0) === '/' ? n.substr(1) : n; } function u(n, t) { return (function (n, t) { return n.toLowerCase().indexOf(t.toLowerCase()) === 0 && '/?#'.indexOf(n.charAt(t.length)) !== -1; }(n, t)) ? n.substr(t.length) : n; } function f(n) { return n.charAt(n.length - 1) === '/' ? n.slice(0, -1) : n; } function s(n) { const t = n.pathname; const e = n.search; const o = n.hash; let i = t || '/'; return e && e !== '?' && (i += e.charAt(0) === '?' ? e : `?${e}`), o && o !== '#' && (i += o.charAt(0) === '#' ? o : `#${o}`), i; } function h(n, t, e, r) { let a; typeof n === 'string' ? (a = (function (n) { let t = n || '/'; let e = ''; let o = ''; const i = t.indexOf('#'); i !== -1 && (o = t.substr(i), t = t.substr(0, i)); const r = t.indexOf('?'); return r !== -1 && (e = t.substr(r), t = t.substr(0, r)), { pathname: t, search: e === '?' ? '' : e, hash: o === '#' ? '' : o }; }(n)), a.state = t) : (void 0 === (a = (0, o.Z)({}, n)).pathname && (a.pathname = ''), a.search ? a.search.charAt(0) !== '?' && (a.search = `?${a.search}`) : a.search = '', a.hash ? a.hash.charAt(0) !== '#' && (a.hash = `#${a.hash}`) : a.hash = '', void 0 !== t && void 0 === a.state && (a.state = t)); try { a.pathname = decodeURI(a.pathname); } catch (n) { throw n instanceof URIError ? new URIError(`Pathname "${a.pathname}" could not be decoded. This is likely caused by an invalid percent-encoding.`) : n; } return e && (a.key = e), r ? a.pathname ? a.pathname.charAt(0) !== '/' && (a.pathname = (0, i.Z)(a.pathname, r.pathname)) : a.pathname = r.pathname : a.pathname || (a.pathname = '/'), a; } function d() {
      let n = null; let t = []; return {
        setPrompt(t) { return n = t, function () { n === t && (n = null); }; }, confirmTransitionTo(t, e, o, i) { if (n != null) { const r = typeof n === 'function' ? n(t, e) : n; typeof r === 'string' ? typeof o === 'function' ? o(r, i) : i(!0) : i(!1 !== r); } else i(!0); }, appendListener(n) { let e = !0; function o() { e && n.apply(void 0, arguments); } return t.push(o), function () { e = !1, t = t.filter(((n) => n !== o)); }; }, notifyListeners() { for (var n = arguments.length, e = new Array(n), o = 0; o < n; o++)e[o] = arguments[o]; t.forEach(((n) => n.apply(void 0, e))); },
      };
    } const l = !(typeof window === 'undefined' || !window.document || !window.document.createElement); function v(n, t) { t(window.confirm(n)); } const p = 'popstate'; const w = 'hashchange'; function m() { try { return window.history.state || {}; } catch (n) { return {}; } } function g(n) {
      void 0 === n && (n = {}), l || (0, r.Z)(!1); let t; const e = window.history; const i = ((t = window.navigator.userAgent).indexOf('Android 2.') === -1 && t.indexOf('Android 4.0') === -1 || t.indexOf('Mobile Safari') === -1 || t.indexOf('Chrome') !== -1 || t.indexOf('Windows Phone') !== -1) && window.history && 'pushState' in window.history; const c = !(window.navigator.userAgent.indexOf('Trident') === -1); const g = n; const y = g.forceRefresh; const P = void 0 !== y && y; const x = g.getUserConfirmation; const O = void 0 === x ? v : x; const k = g.keyLength; const b = void 0 === k ? 6 : k; const T = n.basename ? f(a(n.basename)) : ''; function A(n) { const t = n || {}; const e = t.key; const o = t.state; const i = window.location; let r = i.pathname + i.search + i.hash; return T && (r = u(r, T)), h(r, o, e); } function L() { return Math.random().toString(36).substr(2, b); } const E = d(); function C(n) { (0, o.Z)(G, n), G.length = e.length, E.notifyListeners(G.location, G.action); } function S(n) { (function (n) { return void 0 === n.state && navigator.userAgent.indexOf('CriOS') === -1; }(n)) || R(A(n.state)); } function U() { R(A(m())); } let I = !1; function R(n) { I ? (I = !1, C()) : E.confirmTransitionTo(n, 'POP', O, ((t) => { t ? C({ action: 'POP', location: n }) : (function (n) { const t = G.location; let e = H.indexOf(t.key); e === -1 && (e = 0); let o = H.indexOf(n.key); o === -1 && (o = 0); const i = e - o; i && (I = !0, _(i)); }(n)); })); } const Z = A(m()); var H = [Z.key]; function M(n) { return T + s(n); } function _(n) { e.go(n); } let F = 0; function B(n) { (F += n) === 1 && n === 1 ? (window.addEventListener(p, S), c && window.addEventListener(w, U)) : F === 0 && (window.removeEventListener(p, S), c && window.removeEventListener(w, U)); } let q = !1; var G = {
        length: e.length, action: 'POP', location: Z, createHref: M, push(n, t) { const o = 'PUSH'; const r = h(n, t, L(), G.location); E.confirmTransitionTo(r, o, O, ((n) => { if (n) { const t = M(r); const a = r.key; const c = r.state; if (i) if (e.pushState({ key: a, state: c }, null, t), P)window.location.href = t; else { const u = H.indexOf(G.location.key); const f = H.slice(0, u + 1); f.push(r.key), H = f, C({ action: o, location: r }); } else window.location.href = t; } })); }, replace(n, t) { const o = 'REPLACE'; const r = h(n, t, L(), G.location); E.confirmTransitionTo(r, o, O, ((n) => { if (n) { const t = M(r); const a = r.key; const c = r.state; if (i) if (e.replaceState({ key: a, state: c }, null, t), P)window.location.replace(t); else { const u = H.indexOf(G.location.key); u !== -1 && (H[u] = r.key), C({ action: o, location: r }); } else window.location.replace(t); } })); }, go: _, goBack() { _(-1); }, goForward() { _(1); }, block(n) { void 0 === n && (n = !1); const t = E.setPrompt(n); return q || (B(1), q = !0), function () { return q && (q = !1, B(-1)), t(); }; }, listen(n) { const t = E.appendListener(n); return B(1), function () { B(-1), t(); }; },
      }; return G;
    } const y = 'hashchange'; const P = { hashbang: { encodePath(n) { return n.charAt(0) === '!' ? n : `!/${c(n)}`; }, decodePath(n) { return n.charAt(0) === '!' ? n.substr(1) : n; } }, noslash: { encodePath: c, decodePath: a }, slash: { encodePath: a, decodePath: a } }; function x(n) { const t = n.indexOf('#'); return t === -1 ? n : n.slice(0, t); } function O() { const n = window.location.href; const t = n.indexOf('#'); return t === -1 ? '' : n.substring(t + 1); } function k(n) { window.location.replace(`${x(window.location.href)}#${n}`); } function b(n) {
      void 0 === n && (n = {}), l || (0, r.Z)(!1); const t = window.history; const e = (window.navigator.userAgent.indexOf('Firefox'), n); const i = e.getUserConfirmation; const c = void 0 === i ? v : i; const p = e.hashType; const w = void 0 === p ? 'slash' : p; const m = n.basename ? f(a(n.basename)) : ''; const g = P[w]; const b = g.encodePath; const T = g.decodePath; function A() { let n = T(O()); return m && (n = u(n, m)), h(n); } const L = d(); function E(n) { (0, o.Z)(q, n), q.length = t.length, L.notifyListeners(q.location, q.action); } let C = !1; let S = null; function U() { let n; let t; const e = O(); const o = b(e); if (e !== o)k(o); else { const i = A(); const r = q.location; if (!C && (t = i, (n = r).pathname === t.pathname && n.search === t.search && n.hash === t.hash)) return; if (S === s(i)) return; S = null, (function (n) { if (C)C = !1, E(); else { L.confirmTransitionTo(n, 'POP', c, ((t) => { t ? E({ action: 'POP', location: n }) : (function (n) { const t = q.location; let e = H.lastIndexOf(s(t)); e === -1 && (e = 0); let o = H.lastIndexOf(s(n)); o === -1 && (o = 0); const i = e - o; i && (C = !0, M(i)); }(n)); })); } }(i)); } } const I = O(); const R = b(I); I !== R && k(R); const Z = A(); var H = [s(Z)]; function M(n) { t.go(n); } let _ = 0; function F(n) { (_ += n) === 1 && n === 1 ? window.addEventListener(y, U) : _ === 0 && window.removeEventListener(y, U); } let B = !1; var q = {
        length: t.length, action: 'POP', location: Z, createHref(n) { const t = document.querySelector('base'); let e = ''; return t && t.getAttribute('href') && (e = x(window.location.href)), `${e}#${b(m + s(n))}`; }, push(n, t) { const e = 'PUSH'; const o = h(n, void 0, void 0, q.location); L.confirmTransitionTo(o, e, c, ((n) => { if (n) { const t = s(o); const i = b(m + t); if (O() !== i) { S = t, (function (n) { window.location.hash = n; }(i)); const r = H.lastIndexOf(s(q.location)); const a = H.slice(0, r + 1); a.push(t), H = a, E({ action: e, location: o }); } else E(); } })); }, replace(n, t) { const e = 'REPLACE'; const o = h(n, void 0, void 0, q.location); L.confirmTransitionTo(o, e, c, ((n) => { if (n) { const t = s(o); const i = b(m + t); O() !== i && (S = t, k(i)); const r = H.indexOf(s(q.location)); r !== -1 && (H[r] = t), E({ action: e, location: o }); } })); }, go: M, goBack() { M(-1); }, goForward() { M(1); }, block(n) { void 0 === n && (n = !1); const t = L.setPrompt(n); return B || (F(1), B = !0), function () { return B && (B = !1, F(-1)), t(); }; }, listen(n) { const t = L.appendListener(n); return F(1), function () { F(-1), t(); }; },
      }; return q;
    } function T(n, t, e) { return Math.min(Math.max(n, t), e); } function A(n) {
      void 0 === n && (n = {}); const t = n; const e = t.getUserConfirmation; const i = t.initialEntries; const r = void 0 === i ? ['/'] : i; const a = t.initialIndex; const c = void 0 === a ? 0 : a; const u = t.keyLength; const f = void 0 === u ? 6 : u; const l = d(); function v(n) { (0, o.Z)(P, n), P.length = P.entries.length, l.notifyListeners(P.location, P.action); } function p() { return Math.random().toString(36).substr(2, f); } const w = T(c, 0, r.length - 1); const m = r.map(((n) => h(n, void 0, typeof n === 'string' ? p() : n.key || p()))); const g = s; function y(n) { const t = T(P.index + n, 0, P.entries.length - 1); const o = P.entries[t]; l.confirmTransitionTo(o, 'POP', e, ((n) => { n ? v({ action: 'POP', location: o, index: t }) : v(); })); } var P = {
        length: m.length,
        action: 'POP',
        location: m[w],
        index: w,
        entries: m,
        createHref: g,
        push(n, t) {
          const o = 'PUSH'; const i = h(n, t, p(), P.location); l.confirmTransitionTo(i, o, e, ((n) => {
            if (n) {
              const t = P.index + 1; const e = P.entries.slice(0); e.length > t ? e.splice(t, e.length - t, i) : e.push(i), v({
                action: o, location: i, index: t, entries: e,
              });
            }
          }));
        },
        replace(n, t) { const o = 'REPLACE'; const i = h(n, t, p(), P.location); l.confirmTransitionTo(i, o, e, ((n) => { n && (P.entries[P.index] = i, v({ action: o, location: i })); })); },
        go: y,
        goBack() { y(-1); },
        goForward() { y(1); },
        canGo(n) { const t = P.index + n; return t >= 0 && t < P.entries.length; },
        block(n) { return void 0 === n && (n = !1), l.setPrompt(n); },
        listen(n) { return l.appendListener(n); },
      }; return P;
    }
  },
}]);
