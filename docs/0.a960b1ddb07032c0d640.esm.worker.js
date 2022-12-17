!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 'WJEn'));
})({
  '4DnI': function (e, t, n) {
    'use strict';
    (function (e) {
      var r,
        a = n('ruDV');
      r =
        'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
          ? global
          : e;
      var o = Object(a.a)(r);
      t.a = o;
    }.call(this, n('Ua1F')(e)));
  },
  Ua1F: function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          Object.defineProperty(t, 'exports', { enumerable: !0 }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  WJEn: function (e, t, n) {
    'use strict';
    n.r(t);
    const r = Symbol('Comlink.proxy'),
      a = Symbol('Comlink.endpoint'),
      o = Symbol('Comlink.releaseProxy'),
      i = Symbol('Comlink.thrown'),
      u = (e) => ('object' == typeof e && null !== e) || 'function' == typeof e,
      s = new Map([
        [
          'proxy',
          {
            canHandle: (e) => u(e) && e[r],
            serialize(e) {
              const { port1: t, port2: n } = new MessageChannel();
              return c(e, t), [n, [n]];
            },
            deserialize: (e) => (
              e.start(),
              (function e(t, n = [], r = function () {}) {
                let i = !1;
                const u = new Proxy(r, {
                  get(r, a) {
                    if ((f(i), a === o))
                      return () =>
                        m(t, {
                          type: 5,
                          path: n.map((e) => e.toString()),
                        }).then(() => {
                          l(t), (i = !0);
                        });
                    if ('then' === a) {
                      if (0 === n.length) return { then: () => u };
                      const e = m(t, {
                        type: 0,
                        path: n.map((e) => e.toString()),
                      }).then(b);
                      return e.then.bind(e);
                    }
                    return e(t, [...n, a]);
                  },
                  set(e, r, a) {
                    f(i);
                    const [o, u] = y(a);
                    return m(
                      t,
                      {
                        type: 1,
                        path: [...n, r].map((e) => e.toString()),
                        value: o,
                      },
                      u
                    ).then(b);
                  },
                  apply(r, o, u) {
                    f(i);
                    const s = n[n.length - 1];
                    if (s === a) return m(t, { type: 4 }).then(b);
                    if ('bind' === s) return e(t, n.slice(0, -1));
                    const [c, l] = d(u);
                    return m(
                      t,
                      {
                        type: 2,
                        path: n.map((e) => e.toString()),
                        argumentList: c,
                      },
                      l
                    ).then(b);
                  },
                  construct(e, r) {
                    f(i);
                    const [a, o] = d(r);
                    return m(
                      t,
                      {
                        type: 3,
                        path: n.map((e) => e.toString()),
                        argumentList: a,
                      },
                      o
                    ).then(b);
                  },
                });
                return u;
              })(e, [], void 0)
            ),
          },
        ],
        [
          'throw',
          {
            canHandle: (e) => u(e) && i in e,
            serialize({ value: e }) {
              let t;
              return (
                (t =
                  e instanceof Error
                    ? {
                        isError: !0,
                        value: {
                          message: e.message,
                          name: e.name,
                          stack: e.stack,
                        },
                      }
                    : { isError: !1, value: e }),
                [t, []]
              );
            },
            deserialize(e) {
              if (e.isError)
                throw Object.assign(new Error(e.value.message), e.value);
              throw e.value;
            },
          },
        ],
      ]);
    function c(e, t = self) {
      t.addEventListener('message', function n(a) {
        if (!a || !a.data) return;
        const { id: o, type: u, path: s } = Object.assign({ path: [] }, a.data),
          f = (a.data.argumentList || []).map(b);
        let d;
        try {
          const t = s.slice(0, -1).reduce((e, t) => e[t], e),
            n = s.reduce((e, t) => e[t], e);
          switch (u) {
            case 0:
              d = n;
              break;
            case 1:
              (t[s.slice(-1)[0]] = b(a.data.value)), (d = !0);
              break;
            case 2:
              d = n.apply(t, f);
              break;
            case 3:
              d = (function (e) {
                return Object.assign(e, { [r]: !0 });
              })(new n(...f));
              break;
            case 4:
              {
                const { port1: t, port2: n } = new MessageChannel();
                c(e, n),
                  (d = (function (e, t) {
                    return p.set(e, t), e;
                  })(t, [t]));
              }
              break;
            case 5:
              d = void 0;
          }
        } catch (m) {
          d = { value: m, [i]: 0 };
        }
        Promise.resolve(d)
          .catch((e) => ({ value: e, [i]: 0 }))
          .then((e) => {
            const [r, a] = y(e);
            t.postMessage(Object.assign(Object.assign({}, r), { id: o }), a),
              5 === u && (t.removeEventListener('message', n), l(t));
          });
      }),
        t.start && t.start();
    }
    function l(e) {
      (function (e) {
        return 'MessagePort' === e.constructor.name;
      })(e) && e.close();
    }
    function f(e) {
      if (e) throw new Error('Proxy has been released and is not useable');
    }
    function d(e) {
      const t = e.map(y);
      return [
        t.map((e) => e[0]),
        ((n = t.map((e) => e[1])), Array.prototype.concat.apply([], n)),
      ];
      var n;
    }
    const p = new WeakMap();
    function y(e) {
      for (const [t, n] of s)
        if (n.canHandle(e)) {
          const [r, a] = n.serialize(e);
          return [{ type: 3, name: t, value: r }, a];
        }
      return [{ type: 0, value: e }, p.get(e) || []];
    }
    function b(e) {
      switch (e.type) {
        case 3:
          return s.get(e.name).deserialize(e.value);
        case 0:
          return e.value;
      }
    }
    function m(e, t, n) {
      return new Promise((r) => {
        const a = new Array(4)
          .fill(0)
          .map(() =>
            Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
          )
          .join('-');
        e.addEventListener('message', function t(n) {
          n.data &&
            n.data.id &&
            n.data.id === a &&
            (e.removeEventListener('message', t), r(n.data));
        }),
          e.start && e.start(),
          e.postMessage(Object.assign({ id: a }, t), n);
      });
    }
    n('4DnI');
    var h = function () {
        return Math.random().toString(36).substring(7).split('').join('.');
      },
      v = {
        INIT: '@@redux/INIT' + h(),
        REPLACE: '@@redux/REPLACE' + h(),
        PROBE_UNKNOWN_ACTION: function () {
          return '@@redux/PROBE_UNKNOWN_ACTION' + h();
        },
      };
    function g(e, t) {
      var n = t && t.type;
      return (
        'Given ' +
        ((n && 'action "' + String(n) + '"') || 'an action') +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
      );
    }
    function O(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function w(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? O(Object(n), !0).forEach(function (t) {
              j(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : O(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function j(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const E = { data: [], normalized: [], filtered: [] };
    c(
      (function (e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
          var a = t[r];
          'function' == typeof e[a] && (n[a] = e[a]);
        }
        var o,
          i = Object.keys(n);
        try {
          !(function (e) {
            Object.keys(e).forEach(function (t) {
              var n = e[t];
              if (void 0 === n(void 0, { type: v.INIT }))
                throw new Error(
                  'Reducer "' +
                    t +
                    '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don\'t want to set a value for this reducer, you can use null instead of undefined.'
                );
              if (void 0 === n(void 0, { type: v.PROBE_UNKNOWN_ACTION() }))
                throw new Error(
                  'Reducer "' +
                    t +
                    '" returned undefined when probed with a random type. Don\'t try to handle ' +
                    v.INIT +
                    ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                );
            });
          })(n);
        } catch (u) {
          o = u;
        }
        return function (e, t) {
          if ((void 0 === e && (e = {}), o)) throw o;
          for (var r = !1, a = {}, u = 0; u < i.length; u++) {
            var s = i[u],
              c = e[s],
              l = (0, n[s])(c, t);
            if (void 0 === l) {
              var f = g(s, t);
              throw new Error(f);
            }
            (a[s] = l), (r = r || l !== c);
          }
          return (r = r || i.length !== Object.keys(e).length) ? a : e;
        };
      })({
        payments: (e = E, { type: t, payload: n }) => {
          switch (t) {
            case '@@PAYMENTS/TABLE/FORMAT': {
              const t = Object.values(n.payments).map((e) =>
                w(
                  w({}, e),
                  {},
                  {
                    date: e.created_date,
                    amount: '$' + e.payment_value,
                    deductions: '-$' + e.payment_due,
                  }
                )
              );
              return w(w({}, e), {}, { data: n.payments, normalized: t });
            }
            case '@@PAYMENTS/TABLE/FILTER':
              return !n.filters.length || n.filters.includes('all')
                ? w(w({}, e), {}, { filtered: n.payments })
                : w(
                    w({}, e),
                    {},
                    {
                      filtered: n.payments.filter((e) =>
                        n.filters.includes(e.payment_type)
                      ),
                    }
                  );
            case '@@PAYMENTS/TABLE/UPDATE':
              return w(w({}, e), n);
            default:
              return E;
          }
        },
      })
    );
  },
  ruDV: function (e, t, n) {
    'use strict';
    function r(e) {
      var t,
        n = e.Symbol;
      return (
        'function' == typeof n
          ? n.observable
            ? (t = n.observable)
            : ((t = n('observable')), (n.observable = t))
          : (t = '@@observable'),
        t
      );
    }
    n.d(t, 'a', function () {
      return r;
    });
  },
});
