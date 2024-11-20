(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";.ord-connect-wallet-button{color:#000;background-color:#fff;font-weight:700;font-size:14px;line-height:20px;border-radius:40px;padding:10px 16px;border:0px;cursor:pointer}.ord-connect-wallet-button:disabled{background-color:#888;cursor:not-allowed}.ord-connect-wallet-button span:before{content:"Connect"}@media screen and (min-width: 768px){.ord-connect-wallet-button{padding:10px 24px}.ord-connect-wallet-button span:before{content:"Connect wallet"}}.ord-connect-wallet-button:enabled:hover{background-color:#f2f2f2}.ord-connect-wallet-button:enabled:active{opacity:.7}.ord-wallet-connected-container{position:relative;display:inline-block}.ord-wallet-connected-button{border-radius:52px;border:1px solid #8c8c8c;background-color:transparent;padding:8px 12px 8px 8px;display:flex;align-items:center;cursor:pointer}.ord-wallet-connected-button .address-container{display:none}@media screen and (min-width: 768px){.ord-wallet-connected-button .address-container{display:block;margin-left:8px}}.ord-wallet-connected-button .address{color:#fff;font-size:14px;font-weight:700;line-height:20px;margin:0}.ord-wallet-connected-button .network-container{display:flex;align-items:center}.ord-wallet-connected-button .status-indicator{width:8px;height:8px;background:#00ad1d;border-radius:999px;margin-right:8px}.ord-wallet-connected-button .network{color:#ffffff80;margin:0;font-size:12px;font-weight:600;line-height:16px}.ord-wallet-connected-button .wallet-profile-icon{width:28px;height:28px;border-radius:999px;background-color:pink;margin-right:8px}.ord-wallet-connected-button .dropdown-button{transition:transform .3s ease;margin-left:16px}.ord-wallet-connected-button .expand-dropdown-button{width:20px;transform:rotate(0)}.ord-wallet-connected-button .close-dropdown-button{transform:rotate(-180deg)}.ord-wallet-connection-dropdown{background:#121212;border-radius:15px;border:.5px solid rgba(255,255,255,.5);width:256px;position:absolute;top:54px;right:0}.ord-wallet-connection-dropdown .dropdown-button{display:flex;align-items:center;background:transparent;border:0px;cursor:pointer;width:100%;justify-content:space-between}.ord-wallet-connection-dropdown .dropdown-button:hover{background:#ffffff1a}.ord-wallet-connection-dropdown .dropdown-button:hover:first-child{border-top-left-radius:15px;border-top-right-radius:15px}.ord-wallet-connection-dropdown .dropdown-button:hover:last-child{border-bottom-left-radius:15px;border-bottom-right-radius:15px}.ord-wallet-connection-dropdown .dropdown-button:active{background:#ffffff1a;opacity:.7}.ord-wallet-connection-dropdown .dropdown-button:first-child{padding:26px 16px 18px}.ord-wallet-connection-dropdown .dropdown-button:not(:first-child):not(:last-child){padding:9px 16px}.ord-wallet-connection-dropdown .dropdown-button:last-child{padding:18px 16px 26px}.ord-wallet-connection-dropdown .label{color:#fff;font-size:14px;font-weight:600;flex:1 1 0%;text-align:left}.ord-wallet-connection-dropdown .value{color:#a6a6a6}.ord-wallet-connection-dropdown .change-wallet-label{color:#ffffffb3;font-size:14px;font-weight:700;flex:1 1 0%;text-align:right}.ord-wallet-connection-dropdown .profile-item-container{width:100%;display:flex;flex-direction:column}.ord-wallet-connection-dropdown .profile-item-inner-container{display:flex;justify-content:space-between}.ord-wallet-connection-dropdown .offers{font-size:10px;font-weight:700;line-height:12px;letter-spacing:.08em;color:#fff;padding:4px 12px;border-radius:16px;background:#ffffff1a}.ord-wallet-connection-dropdown .horizontal-separator{margin:6px 16px;border:0px;border-top:.5px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal{position:relative;z-index:10}.ord-connect-wallet-modal .backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000080;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.ord-connect-wallet-modal .outer-container{position:fixed;top:0;left:0;overflow-y:auto;width:100%;height:100%}.ord-connect-wallet-modal .inner-container{display:flex;align-items:center;justify-content:center;text-align:center;height:100%}.ord-connect-wallet-modal .panel{width:100%;background-color:#121212;overflow:hidden;text-align:left;height:100%}.ord-connect-wallet-modal .panel-title-container{display:flex;justify-content:space-between;padding:32px 24px 0;align-items:center}.ord-connect-wallet-modal .panel-title{color:#fff;font-size:24px;font-style:normal;font-weight:700;line-height:32px;margin:0}.ord-connect-wallet-modal .unsupported-browser-message{color:#fff}.ord-connect-wallet-modal .close-button{display:inline-flex;background:transparent;border:0px;cursor:pointer}.ord-connect-wallet-modal .panel-content-container{margin:32px 24px 0}.ord-connect-wallet-modal .panel-content-inner-container{border-radius:20px;border:1px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal .wallet-option-button{display:flex;align-items:center;background:transparent;border:0px;color:#fff;font-size:16px;font-weight:600;line-height:20px;width:100%;cursor:pointer}.ord-connect-wallet-modal .wallet-option-button:disabled .chevron-btn{opacity:.3}.waiting-cursor{cursor:wait!important}.wallet-identifier-container{position:relative;display:inline-block}.wallet-identifier-container img{position:absolute;bottom:4px;right:0;width:12px;border-radius:50%;background-color:#000;object-fit:cover}.ord-connect-wallet-modal .option-wrapper{display:flex;align-items:center;justify-content:space-between;padding:16px 4px;width:100%}.ord-connect-wallet-modal .wallet-option-button{padding:8px 16px}.ord-connect-wallet-modal .wallet-option-button:hover{background:#ffffff1a}.ord-connect-wallet-modal .wallet-option-button:active{background:#ffffff1a;opacity:.7}.ord-connect-wallet-modal .wallet-option-button:first-child{padding:16px 16px 8px;border:0px;margin-bottom:0;border-radius:20px 20px 0 0}.ord-connect-wallet-modal .wallet-option-button:last-child{padding:8px 16px 16px;border:0px;margin-bottom:0;border-radius:0 0 20px 20px}.ord-connect-wallet-modal .wallet-option-button:only-child{padding:8px 16px;border:0px;margin-bottom:0;border-radius:20px}.ord-connect-wallet-modal .wallet-icon{width:32px;height:32px}.ord-connect-wallet-modal .wallet-option{flex-grow:1;margin-left:12px;text-align:left}.ord-connect-wallet-modal .wallet-option-connected-address{display:flex;padding:4px 8px;align-items:center;margin-left:4px;margin-right:8px;text-align:left;background-color:#00000080;border-radius:20px;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}.ord-connect-wallet-modal .wallet-option-connected-address .label{margin-left:4px;font-size:12px;font-weight:400;color:#ffffffb3}.ord-connect-wallet-modal .wallet-option-label{font-size:16px;font-weight:600;line-height:20px;margin:0}.ord-connect-wallet-modal .wallet-option-subtitle{font-size:12px;font-weight:400;line-height:16px;color:#8c8c8c;margin:0}.ord-connect-wallet-modal .horizontal-separator{margin:2px 16px;border:0px;border-top:.5px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal .error-message{margin:16px 0 0;color:#e54545;font-size:14px;line-height:20px}.ord-connect-wallet-modal .preferred-label{padding:4px 12px;color:#000000b2;background-color:#ffbf18;font-size:12px;line-height:16px;font-weight:400;border-radius:20px;margin-left:4px;margin-right:8px}@media screen and (min-width: 768px){.ord-connect-wallet-modal .outer-container{top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:auto;border-radius:20px}.ord-connect-wallet-modal .panel{border:1px solid rgba(51,51,51,.5);border-radius:20px}.ord-connect-wallet-modal .panel-title-container{padding:24px 32px 0;border-bottom:0px}.ord-connect-wallet-modal .unsupported-browser-message{font-size:16px;padding-left:24px}.ord-connect-wallet-modal .panel-title{font-size:20px;font-style:normal;font-weight:600;line-height:28px;letter-spacing:.2px}.ord-connect-wallet-modal .panel-content-container{margin:48px 32px 32px}.ord-connect-wallet-modal .wallet-option{margin-left:16px}}@media screen and (min-width: 1080px){.ord-connect-wallet-modal .panel-content-container{margin:48px 32px 32px}.ord-connect-wallet-modal .option-wrapper{padding:16px}.ord-connect-wallet-modal .wallet-option-button{font-size:18px;font-weight:600;line-height:24px}.ord-connect-wallet-modal .wallet-option-button:first-child{padding:16px 16px 8px;border:0px;margin-bottom:0;border-radius:20px 20px 0 0}.ord-connect-wallet-modal .wallet-icon{width:40px;height:40px}.ord-connect-wallet-modal .wallet-option-label{font-size:18px;font-weight:600;line-height:24px}.ord-connect-wallet-modal .wallet-option-connected-address{margin-left:16px;margin-right:16px}.ord-connect-wallet-modal .wallet-option-connected-address .label{font-size:16px}}.ord-connect-font *{font-family:Space Grotesk,sans-serif}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.opacity-0{opacity:0}.opacity-100{opacity:1}.duration-300{transition-duration:.3s}.duration-200{transition-duration:.2s}.scale-95{transform:scale(.95)}.scale-100{transform:scale(1)}')),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import * as Ar from "react";
import ne, { useState as Se, useEffect as ve, useCallback as nt, createContext as Lt, useMemo as Me, useContext as yt, useLayoutEffect as wl, useRef as he, forwardRef as yl, Fragment as wt, isValidElement as ml, cloneElement as El, createElement as bl, useReducer as cu, createRef as ns } from "react";
import { BrowserWalletNotInstalledError as Sl, getAddressesFromPublicKey as vl, ADDRESS_FORMAT_TO_TYPE as _l, JsonRpcDatasource as _s, PSBTBuilder as lu } from "@ordzaar/ordit-sdk";
import { getAddresses as Tl, signPsbt as Il, signMessage as Ol } from "@ordzaar/ordit-sdk/unisat";
import { createPortal as Pl } from "react-dom";
function kl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fu = { exports: {} }, Re = fu.exports = {}, Vt, qt;
function is() {
  throw new Error("setTimeout has not been defined");
}
function os() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Vt = setTimeout : Vt = is;
  } catch {
    Vt = is;
  }
  try {
    typeof clearTimeout == "function" ? qt = clearTimeout : qt = os;
  } catch {
    qt = os;
  }
})();
function hu(e) {
  if (Vt === setTimeout)
    return setTimeout(e, 0);
  if ((Vt === is || !Vt) && setTimeout)
    return Vt = setTimeout, setTimeout(e, 0);
  try {
    return Vt(e, 0);
  } catch {
    try {
      return Vt.call(null, e, 0);
    } catch {
      return Vt.call(this, e, 0);
    }
  }
}
function Al(e) {
  if (qt === clearTimeout)
    return clearTimeout(e);
  if ((qt === os || !qt) && clearTimeout)
    return qt = clearTimeout, clearTimeout(e);
  try {
    return qt(e);
  } catch {
    try {
      return qt.call(null, e);
    } catch {
      return qt.call(this, e);
    }
  }
}
var ar = [], Tn = !1, Kr, ki = -1;
function xl() {
  !Tn || !Kr || (Tn = !1, Kr.length ? ar = Kr.concat(ar) : ki = -1, ar.length && du());
}
function du() {
  if (!Tn) {
    var e = hu(xl);
    Tn = !0;
    for (var t = ar.length; t; ) {
      for (Kr = ar, ar = []; ++ki < t; )
        Kr && Kr[ki].run();
      ki = -1, t = ar.length;
    }
    Kr = null, Tn = !1, Al(e);
  }
}
Re.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  ar.push(new pu(e, t)), ar.length === 1 && !Tn && hu(du);
};
function pu(e, t) {
  this.fun = e, this.array = t;
}
pu.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Re.title = "browser";
Re.browser = !0;
Re.env = {};
Re.argv = [];
Re.version = "";
Re.versions = {};
function pr() {
}
Re.on = pr;
Re.addListener = pr;
Re.once = pr;
Re.off = pr;
Re.removeListener = pr;
Re.removeAllListeners = pr;
Re.emit = pr;
Re.prependListener = pr;
Re.prependOnceListener = pr;
Re.listeners = function(e) {
  return [];
};
Re.binding = function(e) {
  throw new Error("process.binding is not supported");
};
Re.cwd = function() {
  return "/";
};
Re.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
Re.umask = function() {
  return 0;
};
var Nl = fu.exports;
const gu = /* @__PURE__ */ kl(Nl);
var Bl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Fl(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var ss = { exports: {} }, Un = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ca;
function Rl() {
  if (ca) return Un;
  ca = 1;
  var e = ne, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, l, p) {
    var f, d = {}, _ = null, m = null;
    p !== void 0 && (_ = "" + p), l.key !== void 0 && (_ = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (f in l) n.call(l, f) && !s.hasOwnProperty(f) && (d[f] = l[f]);
    if (a && a.defaultProps) for (f in l = a.defaultProps, l) d[f] === void 0 && (d[f] = l[f]);
    return { $$typeof: t, type: a, key: _, ref: m, props: d, _owner: i.current };
  }
  return Un.Fragment = r, Un.jsx = o, Un.jsxs = o, Un;
}
var Ln = {}, la;
function Ul() {
  return la || (la = 1, gu.env.NODE_ENV !== "production" && function() {
    var e = ne, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), B = Symbol.iterator, I = "@@iterator";
    function C(P) {
      if (P === null || typeof P != "object")
        return null;
      var G = B && P[B] || P[I];
      return typeof G == "function" ? G : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(P) {
      {
        for (var G = arguments.length, q = new Array(G > 1 ? G - 1 : 0), Z = 1; Z < G; Z++)
          q[Z - 1] = arguments[Z];
        A("error", P, q);
      }
    }
    function A(P, G, q) {
      {
        var Z = D.ReactDebugCurrentFrame, we = Z.getStackAddendum();
        we !== "" && (G += "%s", q = q.concat([we]));
        var Ee = q.map(function(le) {
          return String(le);
        });
        Ee.unshift("Warning: " + G), Function.prototype.apply.call(console[P], console, Ee);
      }
    }
    var x = !1, M = !1, U = !1, W = !1, g = !1, h;
    h = Symbol.for("react.module.reference");
    function E(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === s || g || P === i || P === p || P === f || W || P === m || x || M || U || typeof P == "object" && P !== null && (P.$$typeof === _ || P.$$typeof === d || P.$$typeof === o || P.$$typeof === a || P.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === h || P.getModuleId !== void 0));
    }
    function N(P, G, q) {
      var Z = P.displayName;
      if (Z)
        return Z;
      var we = G.displayName || G.name || "";
      return we !== "" ? q + "(" + we + ")" : q;
    }
    function y(P) {
      return P.displayName || "Context";
    }
    function S(P) {
      if (P == null)
        return null;
      if (typeof P.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof P == "function")
        return P.displayName || P.name || null;
      if (typeof P == "string")
        return P;
      switch (P) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case a:
            var G = P;
            return y(G) + ".Consumer";
          case o:
            var q = P;
            return y(q._context) + ".Provider";
          case l:
            return N(P, P.render, "ForwardRef");
          case d:
            var Z = P.displayName || null;
            return Z !== null ? Z : S(P.type) || "Memo";
          case _: {
            var we = P, Ee = we._payload, le = we._init;
            try {
              return S(le(Ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, T = 0, O, R, L, j, V, X, Q;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Y() {
      {
        if (T === 0) {
          O = console.log, R = console.info, L = console.warn, j = console.error, V = console.group, X = console.groupCollapsed, Q = console.groupEnd;
          var P = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: P,
            log: P,
            warn: P,
            error: P,
            group: P,
            groupCollapsed: P,
            groupEnd: P
          });
        }
        T++;
      }
    }
    function J() {
      {
        if (T--, T === 0) {
          var P = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, P, {
              value: O
            }),
            info: k({}, P, {
              value: R
            }),
            warn: k({}, P, {
              value: L
            }),
            error: k({}, P, {
              value: j
            }),
            group: k({}, P, {
              value: V
            }),
            groupCollapsed: k({}, P, {
              value: X
            }),
            groupEnd: k({}, P, {
              value: Q
            })
          });
        }
        T < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = D.ReactCurrentDispatcher, _e;
    function dt(P, G, q) {
      {
        if (_e === void 0)
          try {
            throw Error();
          } catch (we) {
            var Z = we.stack.trim().match(/\n( *(at )?)/);
            _e = Z && Z[1] || "";
          }
        return `
` + _e + P;
      }
    }
    var mt = !1, Et;
    {
      var te = typeof WeakMap == "function" ? WeakMap : Map;
      Et = new te();
    }
    function Be(P, G) {
      if (!P || mt)
        return "";
      {
        var q = Et.get(P);
        if (q !== void 0)
          return q;
      }
      var Z;
      mt = !0;
      var we = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ee;
      Ee = se.current, se.current = null, Y();
      try {
        if (G) {
          var le = function() {
            throw Error();
          };
          if (Object.defineProperty(le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(le, []);
            } catch (pt) {
              Z = pt;
            }
            Reflect.construct(P, [], le);
          } else {
            try {
              le.call();
            } catch (pt) {
              Z = pt;
            }
            P.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pt) {
            Z = pt;
          }
          P();
        }
      } catch (pt) {
        if (pt && Z && typeof pt.stack == "string") {
          for (var ue = pt.stack.split(`
`), ot = Z.stack.split(`
`), Ce = ue.length - 1, Ue = ot.length - 1; Ce >= 1 && Ue >= 0 && ue[Ce] !== ot[Ue]; )
            Ue--;
          for (; Ce >= 1 && Ue >= 0; Ce--, Ue--)
            if (ue[Ce] !== ot[Ue]) {
              if (Ce !== 1 || Ue !== 1)
                do
                  if (Ce--, Ue--, Ue < 0 || ue[Ce] !== ot[Ue]) {
                    var Tt = `
` + ue[Ce].replace(" at new ", " at ");
                    return P.displayName && Tt.includes("<anonymous>") && (Tt = Tt.replace("<anonymous>", P.displayName)), typeof P == "function" && Et.set(P, Tt), Tt;
                  }
                while (Ce >= 1 && Ue >= 0);
              break;
            }
        }
      } finally {
        mt = !1, se.current = Ee, J(), Error.prepareStackTrace = we;
      }
      var pn = P ? P.displayName || P.name : "", Hr = pn ? dt(pn) : "";
      return typeof P == "function" && Et.set(P, Hr), Hr;
    }
    function pe(P, G, q) {
      return Be(P, !1);
    }
    function Pe(P) {
      var G = P.prototype;
      return !!(G && G.isReactComponent);
    }
    function ge(P, G, q) {
      if (P == null)
        return "";
      if (typeof P == "function")
        return Be(P, Pe(P));
      if (typeof P == "string")
        return dt(P);
      switch (P) {
        case p:
          return dt("Suspense");
        case f:
          return dt("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case l:
            return pe(P.render);
          case d:
            return ge(P.type, G, q);
          case _: {
            var Z = P, we = Z._payload, Ee = Z._init;
            try {
              return ge(Ee(we), G, q);
            } catch {
            }
          }
        }
      return "";
    }
    var _t = Object.prototype.hasOwnProperty, wr = {}, fi = D.ReactDebugCurrentFrame;
    function fn(P) {
      if (P) {
        var G = P._owner, q = ge(P.type, P._source, G ? G.type : null);
        fi.setExtraStackFrame(q);
      } else
        fi.setExtraStackFrame(null);
    }
    function Fn(P, G, q, Z, we) {
      {
        var Ee = Function.call.bind(_t);
        for (var le in P)
          if (Ee(P, le)) {
            var ue = void 0;
            try {
              if (typeof P[le] != "function") {
                var ot = Error((Z || "React class") + ": " + q + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ot.name = "Invariant Violation", ot;
              }
              ue = P[le](G, le, Z, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ce) {
              ue = Ce;
            }
            ue && !(ue instanceof Error) && (fn(we), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", q, le, typeof ue), fn(null)), ue instanceof Error && !(ue.message in wr) && (wr[ue.message] = !0, fn(we), b("Failed %s type: %s", q, ue.message), fn(null));
          }
      }
    }
    var So = Array.isArray;
    function Rn(P) {
      return So(P);
    }
    function hi(P) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, q = G && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return q;
      }
    }
    function hn(P) {
      try {
        return bt(P), !1;
      } catch {
        return !0;
      }
    }
    function bt(P) {
      return "" + P;
    }
    function dn(P) {
      if (hn(P))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hi(P)), bt(P);
    }
    var Lr = D.ReactCurrentOwner, Mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, di, w, u;
    u = {};
    function c(P) {
      if (_t.call(P, "ref")) {
        var G = Object.getOwnPropertyDescriptor(P, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return P.ref !== void 0;
    }
    function v(P) {
      if (_t.call(P, "key")) {
        var G = Object.getOwnPropertyDescriptor(P, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return P.key !== void 0;
    }
    function F(P, G) {
      if (typeof P.ref == "string" && Lr.current && G && Lr.current.stateNode !== G) {
        var q = S(Lr.current.type);
        u[q] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(Lr.current.type), P.ref), u[q] = !0);
      }
    }
    function $(P, G) {
      {
        var q = function() {
          di || (di = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        q.isReactWarning = !0, Object.defineProperty(P, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function K(P, G) {
      {
        var q = function() {
          w || (w = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        q.isReactWarning = !0, Object.defineProperty(P, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var ie = function(P, G, q, Z, we, Ee, le) {
      var ue = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: P,
        key: G,
        ref: q,
        props: le,
        // Record the component responsible for creating this element.
        _owner: Ee
      };
      return ue._store = {}, Object.defineProperty(ue._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ue, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.defineProperty(ue, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.freeze && (Object.freeze(ue.props), Object.freeze(ue)), ue;
    };
    function ke(P, G, q, Z, we) {
      {
        var Ee, le = {}, ue = null, ot = null;
        q !== void 0 && (dn(q), ue = "" + q), v(G) && (dn(G.key), ue = "" + G.key), c(G) && (ot = G.ref, F(G, we));
        for (Ee in G)
          _t.call(G, Ee) && !Mt.hasOwnProperty(Ee) && (le[Ee] = G[Ee]);
        if (P && P.defaultProps) {
          var Ce = P.defaultProps;
          for (Ee in Ce)
            le[Ee] === void 0 && (le[Ee] = Ce[Ee]);
        }
        if (ue || ot) {
          var Ue = typeof P == "function" ? P.displayName || P.name || "Unknown" : P;
          ue && $(le, Ue), ot && K(le, Ue);
        }
        return ie(P, ue, ot, we, Z, Lr.current, le);
      }
    }
    var ye = D.ReactCurrentOwner, Te = D.ReactDebugCurrentFrame;
    function ce(P) {
      if (P) {
        var G = P._owner, q = ge(P.type, P._source, G ? G.type : null);
        Te.setExtraStackFrame(q);
      } else
        Te.setExtraStackFrame(null);
    }
    var vo;
    vo = !1;
    function _o(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function na() {
      {
        if (ye.current) {
          var P = S(ye.current.type);
          if (P)
            return `

Check the render method of \`` + P + "`.";
        }
        return "";
      }
    }
    function sl(P) {
      return "";
    }
    var ia = {};
    function al(P) {
      {
        var G = na();
        if (!G) {
          var q = typeof P == "string" ? P : P.displayName || P.name;
          q && (G = `

Check the top-level render call using <` + q + ">.");
        }
        return G;
      }
    }
    function oa(P, G) {
      {
        if (!P._store || P._store.validated || P.key != null)
          return;
        P._store.validated = !0;
        var q = al(G);
        if (ia[q])
          return;
        ia[q] = !0;
        var Z = "";
        P && P._owner && P._owner !== ye.current && (Z = " It was passed a child from " + S(P._owner.type) + "."), ce(P), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, Z), ce(null);
      }
    }
    function sa(P, G) {
      {
        if (typeof P != "object")
          return;
        if (Rn(P))
          for (var q = 0; q < P.length; q++) {
            var Z = P[q];
            _o(Z) && oa(Z, G);
          }
        else if (_o(P))
          P._store && (P._store.validated = !0);
        else if (P) {
          var we = C(P);
          if (typeof we == "function" && we !== P.entries)
            for (var Ee = we.call(P), le; !(le = Ee.next()).done; )
              _o(le.value) && oa(le.value, G);
        }
      }
    }
    function ul(P) {
      {
        var G = P.type;
        if (G == null || typeof G == "string")
          return;
        var q;
        if (typeof G == "function")
          q = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === d))
          q = G.propTypes;
        else
          return;
        if (q) {
          var Z = S(G);
          Fn(q, P.props, "prop", Z, P);
        } else if (G.PropTypes !== void 0 && !vo) {
          vo = !0;
          var we = S(G);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cl(P) {
      {
        for (var G = Object.keys(P.props), q = 0; q < G.length; q++) {
          var Z = G[q];
          if (Z !== "children" && Z !== "key") {
            ce(P), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), ce(null);
            break;
          }
        }
        P.ref !== null && (ce(P), b("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    var aa = {};
    function ua(P, G, q, Z, we, Ee) {
      {
        var le = E(P);
        if (!le) {
          var ue = "";
          (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = sl();
          ot ? ue += ot : ue += na();
          var Ce;
          P === null ? Ce = "null" : Rn(P) ? Ce = "array" : P !== void 0 && P.$$typeof === t ? (Ce = "<" + (S(P.type) || "Unknown") + " />", ue = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof P, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, ue);
        }
        var Ue = ke(P, G, q, we, Ee);
        if (Ue == null)
          return Ue;
        if (le) {
          var Tt = G.children;
          if (Tt !== void 0)
            if (Z)
              if (Rn(Tt)) {
                for (var pn = 0; pn < Tt.length; pn++)
                  sa(Tt[pn], P);
                Object.freeze && Object.freeze(Tt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sa(Tt, P);
        }
        if (_t.call(G, "key")) {
          var Hr = S(P), pt = Object.keys(G).filter(function(gl) {
            return gl !== "key";
          }), To = pt.length > 0 ? "{key: someKey, " + pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!aa[Hr + To]) {
            var pl = pt.length > 0 ? "{" + pt.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, To, Hr, pl, Hr), aa[Hr + To] = !0;
          }
        }
        return P === n ? cl(Ue) : ul(Ue), Ue;
      }
    }
    function ll(P, G, q) {
      return ua(P, G, q, !0);
    }
    function fl(P, G, q) {
      return ua(P, G, q, !1);
    }
    var hl = fl, dl = ll;
    Ln.Fragment = n, Ln.jsx = hl, Ln.jsxs = dl;
  }()), Ln;
}
gu.env.NODE_ENV === "production" ? ss.exports = Rl() : ss.exports = Ul();
var z = ss.exports;
function Ll() {
  const [e, t] = Se(!1);
  return ve(() => {
    t(!0);
  }, []), e;
}
const wu = "ord-connect";
function Hl(e) {
  typeof window > "u" && console.warn(
    `Attempted to read local storage key ${e} even though environment is not a browser.`
  );
  const t = `${wu}_${e}`;
  try {
    const r = window.localStorage.getItem(t);
    return r != null ? JSON.parse(r) : null;
  } catch (r) {
    return console.error(`Error retrieving ${t} from localStorage`, r), null;
  }
}
function fa(e, t) {
  typeof window > "u" && console.warn(
    `Attempted to set local storage key ${e} even though environment is not a browser.`
  );
  const r = `${wu}_${e}`;
  try {
    t ? window.localStorage.setItem(r, JSON.stringify(t)) : window.localStorage.removeItem(r);
  } catch (n) {
    console.error(`Error saving ${r} to localStorage`, n);
  }
}
function pi(e, t, r = {}) {
  const { initializeWithValue: n = !0 } = r, i = nt(() => {
    const l = Hl(e);
    return l || (fa(e, t), t);
  }, [t, e]), [s, o] = Se(() => n ? i() : t), a = nt(
    (l) => {
      fa(e, l), o(l);
    },
    [e]
  );
  return ve(() => {
    o(i());
  }, [e]), [s, a];
}
var Ai = /* @__PURE__ */ ((e) => (e.MAINNET = "mainnet", e.TESTNET = "testnet", e.SIGNET = "signet", e))(Ai || {}), Bt = /* @__PURE__ */ ((e) => (e.UNISAT = "unisat", e))(Bt || {}), kn = /* @__PURE__ */ ((e) => (e.BITCOIN = "bitcoin", e.FRACTAL_BITCOIN = "fractal-bitcoin", e))(kn || {});
const gn = {
  payments: null,
  ordinals: null
}, yu = Lt(
  void 0
), Ml = "address", $l = "wallet", Dl = "publicKey", jl = "format";
function cw({
  children: e,
  network: t,
  chain: r = "bitcoin",
  ssr: n = !1
}) {
  if (!t)
    throw new Error("Network cannot be empty");
  const [i, s] = Se(t), [o, a] = Se(r), [l, p] = pi(
    Ml,
    gn,
    { initializeWithValue: !n }
  ), [f, d] = pi($l, null, {
    initializeWithValue: !n
  }), [_, m] = pi(
    Dl,
    gn,
    { initializeWithValue: !n }
  ), [B, I] = pi(
    jl,
    gn,
    { initializeWithValue: !n }
  ), [C, D] = Se(!1), b = nt(() => D(!0), []), A = nt(() => D(!1), []), x = nt(() => {
    p(gn), m(gn), I(gn), d(null);
  }, [p, I, m, d]), M = Me(
    () => ({
      address: l,
      updateAddress: p,
      publicKey: _,
      updatePublicKey: m,
      network: i,
      updateNetwork: s,
      wallet: f,
      updateWallet: d,
      isModalOpen: C,
      openModal: b,
      closeModal: A,
      format: B,
      updateFormat: I,
      disconnectWallet: x,
      chain: o,
      updateChain: a
    }),
    [
      l,
      p,
      _,
      m,
      i,
      s,
      f,
      d,
      C,
      b,
      A,
      B,
      I,
      x,
      o,
      a
    ]
  );
  return ve(() => {
    s(t);
  }, [t]), ve(() => {
    o !== r && (x(), a(r));
  }, [r, o, x]), /* @__PURE__ */ z.jsx(yu.Provider, { value: M, children: e });
}
function Yt() {
  const e = yt(yu);
  if (!e)
    throw new Error("useOrdConnect must be used within OrdConnectProvider");
  return e;
}
var mu = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n(ne);
  })(Bl, function(r) {
    return function(n) {
      var i = {};
      function s(o) {
        if (i[o]) return i[o].exports;
        var a = i[o] = { i: o, l: !1, exports: {} };
        return n[o].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
      }
      return s.m = n, s.c = i, s.d = function(o, a, l) {
        s.o(o, a) || Object.defineProperty(o, a, { enumerable: !0, get: l });
      }, s.r = function(o) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
      }, s.t = function(o, a) {
        if (1 & a && (o = s(o)), 8 & a || 4 & a && typeof o == "object" && o && o.__esModule) return o;
        var l = /* @__PURE__ */ Object.create(null);
        if (s.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: o }), 2 & a && typeof o != "string") for (var p in o) s.d(l, p, (function(f) {
          return o[f];
        }).bind(null, p));
        return l;
      }, s.n = function(o) {
        var a = o && o.__esModule ? function() {
          return o.default;
        } : function() {
          return o;
        };
        return s.d(a, "a", a), a;
      }, s.o = function(o, a) {
        return Object.prototype.hasOwnProperty.call(o, a);
      }, s.p = "/", s(s.s = 1);
    }([function(n, i) {
      n.exports = r;
    }, function(n, i, s) {
      n.exports = s(2);
    }, function(n, i, s) {
      function o(b, A) {
        if (b == null) return {};
        var x, M, U = function(g, h) {
          if (g == null) return {};
          var E, N, y = {}, S = Object.keys(g);
          for (N = 0; N < S.length; N++) E = S[N], h.indexOf(E) >= 0 || (y[E] = g[E]);
          return y;
        }(b, A);
        if (Object.getOwnPropertySymbols) {
          var W = Object.getOwnPropertySymbols(b);
          for (M = 0; M < W.length; M++) x = W[M], A.indexOf(x) >= 0 || Object.prototype.propertyIsEnumerable.call(b, x) && (U[x] = b[x]);
        }
        return U;
      }
      s.r(i);
      var a = s(0), l = s.n(a), p = function(b) {
        for (var A = 0, x = 0; x < b.length; x++)
          A = (A << 5) - A + b.charCodeAt(x), A &= A;
        return Math.abs(A);
      }, f = function(b, A) {
        return Math.floor(b / Math.pow(10, A) % 10);
      }, d = function(b, A) {
        return !(f(b, A) % 2);
      }, _ = function(b, A, x) {
        var M = b % A;
        return x && f(b, x) % 2 === 0 ? -M : M;
      }, m = function(b, A, x) {
        return A[b % x];
      }, B = function(b) {
        var A = b.name, x = b.colors, M = b.title, U = b.square, W = b.size, g = o(b, ["name", "colors", "title", "square", "size"]), h = function(N, y) {
          var S = p(N), k = y && y.length;
          return Array.from({ length: 3 }, function(T, O) {
            return { color: m(S + O, y, k), translateX: _(S * (O + 1), 8, 1), translateY: _(S * (O + 1), 8, 2), scale: 1.2 + _(S * (O + 1), 4) / 10, rotate: _(S * (O + 1), 360, 1) };
          });
        }(A, x), E = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, g), M && a.createElement("title", null, A), a.createElement("mask", { id: E, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, a.createElement("rect", { width: 80, height: 80, rx: U ? void 0 : 160, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(E, ")") }, a.createElement("rect", { width: 80, height: 80, fill: h[0].color }), a.createElement("path", { filter: "url(#filter_".concat(E, ")"), d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z", fill: h[1].color, transform: "translate(" + h[1].translateX + " " + h[1].translateY + ") rotate(" + h[1].rotate + " 40 40) scale(" + h[2].scale + ")" }), a.createElement("path", { filter: "url(#filter_".concat(E, ")"), style: { mixBlendMode: "overlay" }, d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z", fill: h[2].color, transform: "translate(" + h[2].translateX + " " + h[2].translateY + ") rotate(" + h[2].rotate + " 40 40) scale(" + h[2].scale + ")" })), a.createElement("defs", null, a.createElement("filter", { id: "filter_".concat(E), filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, a.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), a.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), a.createElement("feGaussianBlur", { stdDeviation: 7, result: "effect1_foregroundBlur" }))));
      }, I = { pixel: function(b) {
        var A = b.name, x = b.colors, M = b.title, U = b.square, W = b.size, g = o(b, ["name", "colors", "title", "square", "size"]), h = function(N, y) {
          var S = p(N), k = y && y.length;
          return Array.from({ length: 64 }, function(T, O) {
            return m(S % (O + 1), y, k);
          });
        }(A, x), E = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, g), M && a.createElement("title", null, A), a.createElement("mask", { id: E, "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, a.createElement("rect", { width: 80, height: 80, rx: U ? void 0 : 160, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(E, ")") }, a.createElement("rect", { width: 10, height: 10, fill: h[0] }), a.createElement("rect", { x: 20, width: 10, height: 10, fill: h[1] }), a.createElement("rect", { x: 40, width: 10, height: 10, fill: h[2] }), a.createElement("rect", { x: 60, width: 10, height: 10, fill: h[3] }), a.createElement("rect", { x: 10, width: 10, height: 10, fill: h[4] }), a.createElement("rect", { x: 30, width: 10, height: 10, fill: h[5] }), a.createElement("rect", { x: 50, width: 10, height: 10, fill: h[6] }), a.createElement("rect", { x: 70, width: 10, height: 10, fill: h[7] }), a.createElement("rect", { y: 10, width: 10, height: 10, fill: h[8] }), a.createElement("rect", { y: 20, width: 10, height: 10, fill: h[9] }), a.createElement("rect", { y: 30, width: 10, height: 10, fill: h[10] }), a.createElement("rect", { y: 40, width: 10, height: 10, fill: h[11] }), a.createElement("rect", { y: 50, width: 10, height: 10, fill: h[12] }), a.createElement("rect", { y: 60, width: 10, height: 10, fill: h[13] }), a.createElement("rect", { y: 70, width: 10, height: 10, fill: h[14] }), a.createElement("rect", { x: 20, y: 10, width: 10, height: 10, fill: h[15] }), a.createElement("rect", { x: 20, y: 20, width: 10, height: 10, fill: h[16] }), a.createElement("rect", { x: 20, y: 30, width: 10, height: 10, fill: h[17] }), a.createElement("rect", { x: 20, y: 40, width: 10, height: 10, fill: h[18] }), a.createElement("rect", { x: 20, y: 50, width: 10, height: 10, fill: h[19] }), a.createElement("rect", { x: 20, y: 60, width: 10, height: 10, fill: h[20] }), a.createElement("rect", { x: 20, y: 70, width: 10, height: 10, fill: h[21] }), a.createElement("rect", { x: 40, y: 10, width: 10, height: 10, fill: h[22] }), a.createElement("rect", { x: 40, y: 20, width: 10, height: 10, fill: h[23] }), a.createElement("rect", { x: 40, y: 30, width: 10, height: 10, fill: h[24] }), a.createElement("rect", { x: 40, y: 40, width: 10, height: 10, fill: h[25] }), a.createElement("rect", { x: 40, y: 50, width: 10, height: 10, fill: h[26] }), a.createElement("rect", { x: 40, y: 60, width: 10, height: 10, fill: h[27] }), a.createElement("rect", { x: 40, y: 70, width: 10, height: 10, fill: h[28] }), a.createElement("rect", { x: 60, y: 10, width: 10, height: 10, fill: h[29] }), a.createElement("rect", { x: 60, y: 20, width: 10, height: 10, fill: h[30] }), a.createElement("rect", { x: 60, y: 30, width: 10, height: 10, fill: h[31] }), a.createElement("rect", { x: 60, y: 40, width: 10, height: 10, fill: h[32] }), a.createElement("rect", { x: 60, y: 50, width: 10, height: 10, fill: h[33] }), a.createElement("rect", { x: 60, y: 60, width: 10, height: 10, fill: h[34] }), a.createElement("rect", { x: 60, y: 70, width: 10, height: 10, fill: h[35] }), a.createElement("rect", { x: 10, y: 10, width: 10, height: 10, fill: h[36] }), a.createElement("rect", { x: 10, y: 20, width: 10, height: 10, fill: h[37] }), a.createElement("rect", { x: 10, y: 30, width: 10, height: 10, fill: h[38] }), a.createElement("rect", { x: 10, y: 40, width: 10, height: 10, fill: h[39] }), a.createElement("rect", { x: 10, y: 50, width: 10, height: 10, fill: h[40] }), a.createElement("rect", { x: 10, y: 60, width: 10, height: 10, fill: h[41] }), a.createElement("rect", { x: 10, y: 70, width: 10, height: 10, fill: h[42] }), a.createElement("rect", { x: 30, y: 10, width: 10, height: 10, fill: h[43] }), a.createElement("rect", { x: 30, y: 20, width: 10, height: 10, fill: h[44] }), a.createElement("rect", { x: 30, y: 30, width: 10, height: 10, fill: h[45] }), a.createElement("rect", { x: 30, y: 40, width: 10, height: 10, fill: h[46] }), a.createElement("rect", { x: 30, y: 50, width: 10, height: 10, fill: h[47] }), a.createElement("rect", { x: 30, y: 60, width: 10, height: 10, fill: h[48] }), a.createElement("rect", { x: 30, y: 70, width: 10, height: 10, fill: h[49] }), a.createElement("rect", { x: 50, y: 10, width: 10, height: 10, fill: h[50] }), a.createElement("rect", { x: 50, y: 20, width: 10, height: 10, fill: h[51] }), a.createElement("rect", { x: 50, y: 30, width: 10, height: 10, fill: h[52] }), a.createElement("rect", { x: 50, y: 40, width: 10, height: 10, fill: h[53] }), a.createElement("rect", { x: 50, y: 50, width: 10, height: 10, fill: h[54] }), a.createElement("rect", { x: 50, y: 60, width: 10, height: 10, fill: h[55] }), a.createElement("rect", { x: 50, y: 70, width: 10, height: 10, fill: h[56] }), a.createElement("rect", { x: 70, y: 10, width: 10, height: 10, fill: h[57] }), a.createElement("rect", { x: 70, y: 20, width: 10, height: 10, fill: h[58] }), a.createElement("rect", { x: 70, y: 30, width: 10, height: 10, fill: h[59] }), a.createElement("rect", { x: 70, y: 40, width: 10, height: 10, fill: h[60] }), a.createElement("rect", { x: 70, y: 50, width: 10, height: 10, fill: h[61] }), a.createElement("rect", { x: 70, y: 60, width: 10, height: 10, fill: h[62] }), a.createElement("rect", { x: 70, y: 70, width: 10, height: 10, fill: h[63] })));
      }, bauhaus: function(b) {
        var A = b.name, x = b.colors, M = b.title, U = b.square, W = b.size, g = o(b, ["name", "colors", "title", "square", "size"]), h = function(N, y) {
          var S = p(N), k = y && y.length;
          return Array.from({ length: 4 }, function(T, O) {
            return { color: m(S + O, y, k), translateX: _(S * (O + 1), 40 - (O + 17), 1), translateY: _(S * (O + 1), 40 - (O + 17), 2), rotate: _(S * (O + 1), 360), isSquare: d(S, 2) };
          });
        }(A, x), E = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, g), M && a.createElement("title", null, A), a.createElement("mask", { id: E, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, a.createElement("rect", { width: 80, height: 80, rx: U ? void 0 : 160, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(E, ")") }, a.createElement("rect", { width: 80, height: 80, fill: h[0].color }), a.createElement("rect", { x: 10, y: 30, width: 80, height: h[1].isSquare ? 80 : 10, fill: h[1].color, transform: "translate(" + h[1].translateX + " " + h[1].translateY + ") rotate(" + h[1].rotate + " 40 40)" }), a.createElement("circle", { cx: 40, cy: 40, fill: h[2].color, r: 16, transform: "translate(" + h[2].translateX + " " + h[2].translateY + ")" }), a.createElement("line", { x1: 0, y1: 40, x2: 80, y2: 40, strokeWidth: 2, stroke: h[3].color, transform: "translate(" + h[3].translateX + " " + h[3].translateY + ") rotate(" + h[3].rotate + " 40 40)" })));
      }, ring: function(b) {
        var A = b.name, x = b.colors, M = b.title, U = b.square, W = b.size, g = o(b, ["name", "colors", "title", "square", "size"]), h = function(N, y) {
          var S = p(y), k = N && N.length, T = Array.from({ length: 5 }, function(R, L) {
            return m(S + L, N, k);
          }), O = [];
          return O[0] = T[0], O[1] = T[1], O[2] = T[1], O[3] = T[2], O[4] = T[2], O[5] = T[3], O[6] = T[3], O[7] = T[0], O[8] = T[4], O;
        }(x, A), E = l.a.useId();
        return l.a.createElement("svg", Object.assign({ viewBox: "0 0 90 90", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, g), M && l.a.createElement("title", null, A), l.a.createElement("mask", { id: E, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 90, height: 90 }, l.a.createElement("rect", { width: 90, height: 90, rx: U ? void 0 : 180, fill: "#FFFFFF" })), l.a.createElement("g", { mask: "url(#".concat(E, ")") }, l.a.createElement("path", { d: "M0 0h90v45H0z", fill: h[0] }), l.a.createElement("path", { d: "M0 45h90v45H0z", fill: h[1] }), l.a.createElement("path", { d: "M83 45a38 38 0 00-76 0h76z", fill: h[2] }), l.a.createElement("path", { d: "M83 45a38 38 0 01-76 0h76z", fill: h[3] }), l.a.createElement("path", { d: "M77 45a32 32 0 10-64 0h64z", fill: h[4] }), l.a.createElement("path", { d: "M77 45a32 32 0 11-64 0h64z", fill: h[5] }), l.a.createElement("path", { d: "M71 45a26 26 0 00-52 0h52z", fill: h[6] }), l.a.createElement("path", { d: "M71 45a26 26 0 01-52 0h52z", fill: h[7] }), l.a.createElement("circle", { cx: 45, cy: 45, r: 23, fill: h[8] })));
      }, beam: function(b) {
        var A = b.name, x = b.colors, M = b.title, U = b.square, W = b.size, g = o(b, ["name", "colors", "title", "square", "size"]), h = function(N, y) {
          var S, k = p(N), T = y && y.length, O = m(k, y, T), R = _(k, 10, 1), L = R < 5 ? R + 4 : R, j = _(k, 10, 2), V = j < 5 ? j + 4 : j;
          return { wrapperColor: O, faceColor: (S = O, S.slice(0, 1) === "#" && (S = S.slice(1)), (299 * parseInt(S.substr(0, 2), 16) + 587 * parseInt(S.substr(2, 2), 16) + 114 * parseInt(S.substr(4, 2), 16)) / 1e3 >= 128 ? "#000000" : "#FFFFFF"), backgroundColor: m(k + 13, y, T), wrapperTranslateX: L, wrapperTranslateY: V, wrapperRotate: _(k, 360), wrapperScale: 1 + _(k, 3) / 10, isMouthOpen: d(k, 2), isCircle: d(k, 1), eyeSpread: _(k, 5), mouthSpread: _(k, 3), faceRotate: _(k, 10, 3), faceTranslateX: L > 6 ? L / 2 : _(k, 8, 1), faceTranslateY: V > 6 ? V / 2 : _(k, 7, 2) };
        }(A, x), E = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 36 36", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, g), M && a.createElement("title", null, A), a.createElement("mask", { id: E, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 36, height: 36 }, a.createElement("rect", { width: 36, height: 36, rx: U ? void 0 : 72, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(E, ")") }, a.createElement("rect", { width: 36, height: 36, fill: h.backgroundColor }), a.createElement("rect", { x: "0", y: "0", width: 36, height: 36, transform: "translate(" + h.wrapperTranslateX + " " + h.wrapperTranslateY + ") rotate(" + h.wrapperRotate + " 18 18) scale(" + h.wrapperScale + ")", fill: h.wrapperColor, rx: h.isCircle ? 36 : 6 }), a.createElement("g", { transform: "translate(" + h.faceTranslateX + " " + h.faceTranslateY + ") rotate(" + h.faceRotate + " 18 18)" }, h.isMouthOpen ? a.createElement("path", { d: "M15 " + (19 + h.mouthSpread) + "c2 1 4 1 6 0", stroke: h.faceColor, fill: "none", strokeLinecap: "round" }) : a.createElement("path", { d: "M13," + (19 + h.mouthSpread) + " a1,0.75 0 0,0 10,0", fill: h.faceColor }), a.createElement("rect", { x: 14 - h.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: h.faceColor }), a.createElement("rect", { x: 20 + h.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: h.faceColor }))));
      }, sunset: function(b) {
        var A = b.name, x = b.colors, M = b.title, U = b.square, W = b.size, g = o(b, ["name", "colors", "title", "square", "size"]), h = function(y, S) {
          var k = p(y), T = S && S.length;
          return Array.from({ length: 4 }, function(O, R) {
            return m(k + R, S, T);
          });
        }(A, x), E = A.replace(/\s/g, ""), N = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, g), M && a.createElement("title", null, A), a.createElement("mask", { id: N, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, a.createElement("rect", { width: 80, height: 80, rx: U ? void 0 : 160, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(N, ")") }, a.createElement("path", { fill: "url(#gradient_paint0_linear_" + E + ")", d: "M0 0h80v40H0z" }), a.createElement("path", { fill: "url(#gradient_paint1_linear_" + E + ")", d: "M0 40h80v40H0z" })), a.createElement("defs", null, a.createElement("linearGradient", { id: "gradient_paint0_linear_" + E, x1: 40, y1: 0, x2: 40, y2: 40, gradientUnits: "userSpaceOnUse" }, a.createElement("stop", { stopColor: h[0] }), a.createElement("stop", { offset: 1, stopColor: h[1] })), a.createElement("linearGradient", { id: "gradient_paint1_linear_" + E, x1: 40, y1: 40, x2: 40, y2: 80, gradientUnits: "userSpaceOnUse" }, a.createElement("stop", { stopColor: h[2] }), a.createElement("stop", { offset: 1, stopColor: h[3] }))));
      }, marble: B }, C = { geometric: "beam", abstract: "bauhaus" }, D = function(b) {
        var A = b.variant, x = A === void 0 ? "marble" : A, M = b.colors, U = M === void 0 ? ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"] : M, W = b.name, g = W === void 0 ? "Clara Barton" : W, h = b.title, E = h !== void 0 && h, N = b.size, y = b.square, S = y !== void 0 && y, k = o(b, ["variant", "colors", "name", "title", "size", "square"]), T = I[C[x] || x] || B;
        return l.a.createElement(T, Object.assign({ colors: U, name: g, title: E, size: N, square: S }, k));
      };
      i.default = D;
    }]);
  });
})(mu);
var Kl = mu.exports;
const Eu = /* @__PURE__ */ Cl(Kl);
var Wl = Object.defineProperty, Gl = (e, t, r) => t in e ? Wl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Io = (e, t, r) => (Gl(e, typeof t != "symbol" ? t + "" : t, r), r);
let Vl = class {
  constructor() {
    Io(this, "current", this.detect()), Io(this, "handoffState", "pending"), Io(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, ur = new Vl(), qe = (e, t) => {
  ur.isServer ? ve(e, t) : wl(e, t);
};
function cr(e) {
  let t = he(e);
  return qe(() => {
    t.current = e;
  }, [e]), t;
}
let ae = function(e) {
  let t = cr(e);
  return ne.useCallback((...r) => t.current(...r), [t]);
};
function qi(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Ut() {
  let e = [], t = { addEventListener(r, n, i, s) {
    return r.addEventListener(n, i, s), t.add(() => r.removeEventListener(n, i, s));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    return t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    return t.add(() => clearTimeout(n));
  }, microTask(...r) {
    let n = { current: !0 };
    return qi(() => {
      n.current && r[0]();
    }), t.add(() => {
      n.current = !1;
    });
  }, style(r, n, i) {
    let s = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: i }), this.add(() => {
      Object.assign(r.style, { [n]: s });
    });
  }, group(r) {
    let n = Ut();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return e.push(r), () => {
      let n = e.indexOf(r);
      if (n >= 0) for (let i of e.splice(n, 1)) i();
    };
  }, dispose() {
    for (let r of e.splice(0)) r();
  } };
  return t;
}
function ii() {
  let [e] = Se(Ut);
  return ve(() => () => e.dispose(), [e]), e;
}
function ql() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Ar ? ((t) => t.useSyncExternalStore)(Ar)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Bn() {
  let e = ql(), [t, r] = Ar.useState(ur.isHandoffComplete);
  return t && ur.isHandoffComplete === !1 && r(!1), Ar.useEffect(() => {
    t !== !0 && r(!0);
  }, [t]), Ar.useEffect(() => ur.handoff(), []), e ? !1 : t;
}
var ha;
let gr = (ha = ne.useId) != null ? ha : function() {
  let e = Bn(), [t, r] = ne.useState(e ? () => ur.nextId() : null);
  return qe(() => {
    t === null && r(ur.nextId());
  }, [t]), t != null ? "" + t : void 0;
};
function Ve(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Ve), n;
}
function Xi(e) {
  return ur.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
let as = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var or = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(or || {}), bu = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(bu || {}), Xl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Xl || {});
function Su(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(as)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ts = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ts || {});
function Is(e, t = 0) {
  var r;
  return e === ((r = Xi(e)) == null ? void 0 : r.body) ? !1 : Ve(t, { 0() {
    return e.matches(as);
  }, 1() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(as)) return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function vu(e) {
  let t = Xi(e);
  Ut().nextFrame(() => {
    t && !Is(t.activeElement, 0) && xr(e);
  });
}
var zl = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(zl || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function xr(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Yl = ["textarea", "input"].join(",");
function Jl(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Yl)) != null ? r : !1;
}
function _u(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), s = t(n);
    if (i === null || s === null) return 0;
    let o = i.compareDocumentPosition(s);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ql(e, t) {
  return Zn(Su(), t, { relativeTo: e });
}
function Zn(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  let s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, o = Array.isArray(e) ? r ? _u(e) : e : Su(e);
  i.length > 0 && o.length > 1 && (o = o.filter((m) => !i.includes(m))), n = n ?? s.activeElement;
  let a = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, o.indexOf(n)) - 1;
    if (t & 4) return Math.max(0, o.indexOf(n)) + 1;
    if (t & 8) return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = t & 32 ? { preventScroll: !0 } : {}, f = 0, d = o.length, _;
  do {
    if (f >= d || f + d <= 0) return 0;
    let m = l + f;
    if (t & 16) m = (m + d) % d;
    else {
      if (m < 0) return 3;
      if (m >= d) return 1;
    }
    _ = o[m], _ == null || _.focus(p), f += a;
  } while (_ !== s.activeElement);
  return t & 6 && Jl(_) && _.select(), 2;
}
function Tu() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Zl() {
  return /Android/gi.test(window.navigator.userAgent);
}
function ef() {
  return Tu() || Zl();
}
function gi(e, t, r) {
  let n = cr(t);
  ve(() => {
    function i(s) {
      n.current(s);
    }
    return document.addEventListener(e, i, r), () => document.removeEventListener(e, i, r);
  }, [e, r]);
}
function Iu(e, t, r) {
  let n = cr(t);
  ve(() => {
    function i(s) {
      n.current(s);
    }
    return window.addEventListener(e, i, r), () => window.removeEventListener(e, i, r);
  }, [e, r]);
}
function Ou(e, t, r = !0) {
  let n = he(!1);
  ve(() => {
    requestAnimationFrame(() => {
      n.current = r;
    });
  }, [r]);
  function i(o, a) {
    if (!n.current || o.defaultPrevented) return;
    let l = a(o);
    if (l === null || !l.getRootNode().contains(l) || !l.isConnected) return;
    let p = function f(d) {
      return typeof d == "function" ? f(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let f of p) {
      if (f === null) continue;
      let d = f instanceof HTMLElement ? f : f.current;
      if (d != null && d.contains(l) || o.composed && o.composedPath().includes(d)) return;
    }
    return !Is(l, Ts.Loose) && l.tabIndex !== -1 && o.preventDefault(), t(o, l);
  }
  let s = he(null);
  gi("pointerdown", (o) => {
    var a, l;
    n.current && (s.current = ((l = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : l[0]) || o.target);
  }, !0), gi("mousedown", (o) => {
    var a, l;
    n.current && (s.current = ((l = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : l[0]) || o.target);
  }, !0), gi("click", (o) => {
    ef() || s.current && (i(o, () => s.current), s.current = null);
  }, !0), gi("touchend", (o) => i(o, () => o.target instanceof HTMLElement ? o.target : null), !0), Iu("blur", (o) => i(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Cn(...e) {
  return Me(() => Xi(...e), [...e]);
}
function da(e) {
  var t;
  if (e.type) return e.type;
  let r = (t = e.as) != null ? t : "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function tf(e, t) {
  let [r, n] = Se(() => da(e));
  return qe(() => {
    n(da(e));
  }, [e.type, e.as]), qe(() => {
    r || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && n("button");
  }, [r, t]), r;
}
let Pu = Symbol();
function rf(e, t = !0) {
  return Object.assign(e, { [Pu]: t });
}
function ft(...e) {
  let t = he(e);
  ve(() => {
    t.current = e;
  }, [e]);
  let r = ae((n) => {
    for (let i of t.current) i != null && (typeof i == "function" ? i(n) : i.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[Pu])) ? void 0 : r;
}
function pa(e) {
  return [e.screenX, e.screenY];
}
function nf() {
  let e = he([-1, -1]);
  return { wasMoved(t) {
    let r = pa(t);
    return e.current[0] === r[0] && e.current[1] === r[1] ? !1 : (e.current = r, !0);
  }, update(t) {
    e.current = pa(t);
  } };
}
function of({ container: e, accept: t, walk: r, enabled: n = !0 }) {
  let i = he(t), s = he(r);
  ve(() => {
    i.current = t, s.current = r;
  }, [t, r]), qe(() => {
    if (!e || !n) return;
    let o = Xi(e);
    if (!o) return;
    let a = i.current, l = s.current, p = Object.assign((d) => a(d), { acceptNode: a }), f = o.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, p, !1);
    for (; f.nextNode(); ) l(f.currentNode);
  }, [e, n, i, s]);
}
function Os(e, t) {
  let r = he([]), n = ae(e);
  ve(() => {
    let i = [...r.current];
    for (let [s, o] of t.entries()) if (r.current[s] !== o) {
      let a = n(t, i);
      return r.current = t, a;
    }
  }, [n, ...t]);
}
function Ui(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var An = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(An || {}), Pr = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Pr || {});
function it({ ourProps: e, theirProps: t, slot: r, defaultTag: n, features: i, visible: s = !0, name: o, mergeRefs: a }) {
  a = a ?? sf;
  let l = ku(t, e);
  if (s) return wi(l, r, n, o, a);
  let p = i ?? 0;
  if (p & 2) {
    let { static: f = !1, ...d } = l;
    if (f) return wi(d, r, n, o, a);
  }
  if (p & 1) {
    let { unmount: f = !0, ...d } = l;
    return Ve(f ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return wi({ ...d, hidden: !0, style: { display: "none" } }, r, n, o, a);
    } });
  }
  return wi(l, r, n, o, a);
}
function wi(e, t = {}, r, n, i) {
  let { as: s = r, children: o, refName: a = "ref", ...l } = Oo(e, ["unmount", "static"]), p = e.ref !== void 0 ? { [a]: e.ref } : {}, f = typeof o == "function" ? o(t) : o;
  "className" in l && l.className && typeof l.className == "function" && (l.className = l.className(t));
  let d = {};
  if (t) {
    let _ = !1, m = [];
    for (let [B, I] of Object.entries(t)) typeof I == "boolean" && (_ = !0), I === !0 && m.push(B);
    _ && (d["data-headlessui-state"] = m.join(" "));
  }
  if (s === wt && Object.keys(ga(l)).length > 0) {
    if (!ml(f) || Array.isArray(f) && f.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l).map((I) => `  - ${I}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((I) => `  - ${I}`).join(`
`)].join(`
`));
    let _ = f.props, m = typeof (_ == null ? void 0 : _.className) == "function" ? (...I) => Ui(_ == null ? void 0 : _.className(...I), l.className) : Ui(_ == null ? void 0 : _.className, l.className), B = m ? { className: m } : {};
    return El(f, Object.assign({}, ku(f.props, ga(Oo(l, ["ref"]))), d, p, { ref: i(f.ref, p.ref) }, B));
  }
  return bl(s, Object.assign({}, Oo(l, ["ref"]), s !== wt && p, s !== wt && d), f);
}
function sf(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e) r != null && (typeof r == "function" ? r(t) : r.current = t);
  };
}
function ku(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, r = {};
  for (let n of e) for (let i in n) i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r) Object.assign(t, { [n](i, ...s) {
    let o = r[n];
    for (let a of o) {
      if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented) return;
      a(i, ...s);
    }
  } });
  return t;
}
function et(e) {
  var t;
  return Object.assign(yl(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function ga(e) {
  let t = Object.assign({}, e);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function Oo(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t) n in r && delete r[n];
  return r;
}
let af = "div";
var Li = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Li || {});
function uf(e, t) {
  var r;
  let { features: n = 1, ...i } = e, s = { ref: t, "aria-hidden": (n & 2) === 2 ? !0 : (r = i["aria-hidden"]) != null ? r : void 0, hidden: (n & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return it({ ourProps: s, theirProps: i, slot: {}, defaultTag: af, name: "Hidden" });
}
let us = et(uf), Ps = Lt(null);
Ps.displayName = "OpenClosedContext";
var Ze = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ze || {});
function zi() {
  return yt(Ps);
}
function Au({ value: e, children: t }) {
  return ne.createElement(Ps.Provider, { value: e }, t);
}
function cf(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Or = [];
cf(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Or[0] !== t.target && (Or.unshift(t.target), Or = Or.filter((r) => r != null && r.isConnected), Or.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function xu(e) {
  let t = e.parentElement, r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
  let n = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return n && lf(r) ? !1 : n;
}
function lf(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
function ff(e) {
  throw new Error("Unexpected object: " + e);
}
var Rt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Rt || {});
function hf(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0) return null;
  let n = t.resolveActiveIndex(), i = n ?? -1;
  switch (e.focus) {
    case 0: {
      for (let s = 0; s < r.length; ++s) if (!t.resolveDisabled(r[s], s, r)) return s;
      return n;
    }
    case 1: {
      for (let s = i - 1; s >= 0; --s) if (!t.resolveDisabled(r[s], s, r)) return s;
      return n;
    }
    case 2: {
      for (let s = i + 1; s < r.length; ++s) if (!t.resolveDisabled(r[s], s, r)) return s;
      return n;
    }
    case 3: {
      for (let s = r.length - 1; s >= 0; --s) if (!t.resolveDisabled(r[s], s, r)) return s;
      return n;
    }
    case 4: {
      for (let s = 0; s < r.length; ++s) if (t.resolveId(r[s], s, r) === e.id) return s;
      return n;
    }
    case 5:
      return null;
    default:
      ff(e);
  }
}
var We = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(We || {});
function Nu(e, t, r, n) {
  let i = cr(r);
  ve(() => {
    e = e ?? window;
    function s(o) {
      i.current(o);
    }
    return e.addEventListener(t, s, n), () => e.removeEventListener(t, s, n);
  }, [e, t, n]);
}
function oi() {
  let e = he(!1);
  return qe(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Bu(e) {
  let t = ae(e), r = he(!1);
  ve(() => (r.current = !1, () => {
    r.current = !0, qi(() => {
      r.current && t();
    });
  }), [t]);
}
var qn = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(qn || {});
function df() {
  let e = he(0);
  return Iu("keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Cu(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let r of e.current) r.current instanceof HTMLElement && t.add(r.current);
  return t;
}
let pf = "div";
var Fu = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Fu || {});
function gf(e, t) {
  let r = he(null), n = ft(r, t), { initialFocus: i, containers: s, features: o = 30, ...a } = e;
  Bn() || (o = 1);
  let l = Cn(r);
  mf({ ownerDocument: l }, !!(o & 16));
  let p = Ef({ ownerDocument: l, container: r, initialFocus: i }, !!(o & 2));
  bf({ ownerDocument: l, container: r, containers: s, previousActiveElement: p }, !!(o & 8));
  let f = df(), d = ae((I) => {
    let C = r.current;
    C && ((D) => D())(() => {
      Ve(f.current, { [qn.Forwards]: () => {
        Zn(C, or.First, { skipElements: [I.relatedTarget] });
      }, [qn.Backwards]: () => {
        Zn(C, or.Last, { skipElements: [I.relatedTarget] });
      } });
    });
  }), _ = ii(), m = he(!1), B = { ref: n, onKeyDown(I) {
    I.key == "Tab" && (m.current = !0, _.requestAnimationFrame(() => {
      m.current = !1;
    }));
  }, onBlur(I) {
    let C = Cu(s);
    r.current instanceof HTMLElement && C.add(r.current);
    let D = I.relatedTarget;
    D instanceof HTMLElement && D.dataset.headlessuiFocusGuard !== "true" && (Ru(C, D) || (m.current ? Zn(r.current, Ve(f.current, { [qn.Forwards]: () => or.Next, [qn.Backwards]: () => or.Previous }) | or.WrapAround, { relativeTo: I.target }) : I.target instanceof HTMLElement && xr(I.target)));
  } };
  return ne.createElement(ne.Fragment, null, !!(o & 4) && ne.createElement(us, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Li.Focusable }), it({ ourProps: B, theirProps: a, defaultTag: pf, name: "FocusTrap" }), !!(o & 4) && ne.createElement(us, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Li.Focusable }));
}
let wf = et(gf), Hn = Object.assign(wf, { features: Fu });
function yf(e = !0) {
  let t = he(Or.slice());
  return Os(([r], [n]) => {
    n === !0 && r === !1 && qi(() => {
      t.current.splice(0);
    }), n === !1 && r === !0 && (t.current = Or.slice());
  }, [e, Or, t]), ae(() => {
    var r;
    return (r = t.current.find((n) => n != null && n.isConnected)) != null ? r : null;
  });
}
function mf({ ownerDocument: e }, t) {
  let r = yf(t);
  Os(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && xr(r());
  }, [t]), Bu(() => {
    t && xr(r());
  });
}
function Ef({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = he(null), s = oi();
  return Os(() => {
    if (!n) return;
    let o = t.current;
    o && qi(() => {
      if (!s.current) return;
      let a = e == null ? void 0 : e.activeElement;
      if (r != null && r.current) {
        if ((r == null ? void 0 : r.current) === a) {
          i.current = a;
          return;
        }
      } else if (o.contains(a)) {
        i.current = a;
        return;
      }
      r != null && r.current ? xr(r.current) : Zn(o, or.First) === bu.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = e == null ? void 0 : e.activeElement;
    });
  }, [n]), i;
}
function bf({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  let s = oi();
  Nu(e == null ? void 0 : e.defaultView, "focus", (o) => {
    if (!i || !s.current) return;
    let a = Cu(r);
    t.current instanceof HTMLElement && a.add(t.current);
    let l = n.current;
    if (!l) return;
    let p = o.target;
    p && p instanceof HTMLElement ? Ru(a, p) ? (n.current = p, xr(p)) : (o.preventDefault(), o.stopPropagation(), xr(l)) : xr(n.current);
  }, !0);
}
function Ru(e, t) {
  for (let r of e) if (r.contains(t)) return !0;
  return !1;
}
let Uu = Lt(!1);
function Sf() {
  return yt(Uu);
}
function cs(e) {
  return ne.createElement(Uu.Provider, { value: e.force }, e.children);
}
function vf(e) {
  let t = Sf(), r = yt(Lu), n = Cn(e), [i, s] = Se(() => {
    if (!t && r !== null || ur.isServer) return null;
    let o = n == null ? void 0 : n.getElementById("headlessui-portal-root");
    if (o) return o;
    if (n === null) return null;
    let a = n.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(a);
  });
  return ve(() => {
    i !== null && (n != null && n.body.contains(i) || n == null || n.body.appendChild(i));
  }, [i, n]), ve(() => {
    t || r !== null && s(r.current);
  }, [r, s, t]), i;
}
let _f = wt;
function Tf(e, t) {
  let r = e, n = he(null), i = ft(rf((f) => {
    n.current = f;
  }), t), s = Cn(n), o = vf(n), [a] = Se(() => {
    var f;
    return ur.isServer ? null : (f = s == null ? void 0 : s.createElement("div")) != null ? f : null;
  }), l = yt(ls), p = Bn();
  return qe(() => {
    !o || !a || o.contains(a) || (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a));
  }, [o, a]), qe(() => {
    if (a && l) return l.register(a);
  }, [l, a]), Bu(() => {
    var f;
    !o || !a || (a instanceof Node && o.contains(a) && o.removeChild(a), o.childNodes.length <= 0 && ((f = o.parentElement) == null || f.removeChild(o)));
  }), p ? !o || !a ? null : Pl(it({ ourProps: { ref: i }, theirProps: r, defaultTag: _f, name: "Portal" }), a) : null;
}
let If = wt, Lu = Lt(null);
function Of(e, t) {
  let { target: r, ...n } = e, i = { ref: ft(t) };
  return ne.createElement(Lu.Provider, { value: r }, it({ ourProps: i, theirProps: n, defaultTag: If, name: "Popover.Group" }));
}
let ls = Lt(null);
function Pf() {
  let e = yt(ls), t = he([]), r = ae((s) => (t.current.push(s), e && e.register(s), () => n(s))), n = ae((s) => {
    let o = t.current.indexOf(s);
    o !== -1 && t.current.splice(o, 1), e && e.unregister(s);
  }), i = Me(() => ({ register: r, unregister: n, portals: t }), [r, n, t]);
  return [t, Me(() => function({ children: s }) {
    return ne.createElement(ls.Provider, { value: i }, s);
  }, [i])];
}
let kf = et(Tf), Af = et(Of), fs = Object.assign(kf, { Group: Af });
function xf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const Nf = typeof Object.is == "function" ? Object.is : xf, { useState: Bf, useEffect: Cf, useLayoutEffect: Ff, useDebugValue: Rf } = Ar;
function Uf(e, t, r) {
  const n = t(), [{ inst: i }, s] = Bf({ inst: { value: n, getSnapshot: t } });
  return Ff(() => {
    i.value = n, i.getSnapshot = t, Po(i) && s({ inst: i });
  }, [e, n, t]), Cf(() => (Po(i) && s({ inst: i }), e(() => {
    Po(i) && s({ inst: i });
  })), [e]), Rf(n), n;
}
function Po(e) {
  const t = e.getSnapshot, r = e.value;
  try {
    const n = t();
    return !Nf(r, n);
  } catch {
    return !0;
  }
}
function Lf(e, t, r) {
  return t();
}
const Hf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Mf = !Hf, $f = Mf ? Lf : Uf, Df = "useSyncExternalStore" in Ar ? ((e) => e.useSyncExternalStore)(Ar) : $f;
function jf(e) {
  return Df(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Kf(e, t) {
  let r = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return n.add(i), () => n.delete(i);
  }, dispatch(i, ...s) {
    let o = t[i].call(r, ...s);
    o && (r = o, n.forEach((a) => a()));
  } };
}
function Wf() {
  let e;
  return { before({ doc: t }) {
    var r;
    let n = t.documentElement;
    e = ((r = t.defaultView) != null ? r : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: r }) {
    let n = t.documentElement, i = n.clientWidth - n.offsetWidth, s = e - i;
    r.style(n, "paddingRight", `${s}px`);
  } };
}
function Gf() {
  return Tu() ? { before({ doc: e, d: t, meta: r }) {
    function n(i) {
      return r.containers.flatMap((s) => s()).some((s) => s.contains(i));
    }
    t.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let a = Ut();
        a.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => a.dispose()));
      }
      let s = (i = window.scrollY) != null ? i : window.pageYOffset, o = null;
      t.addEventListener(e, "click", (a) => {
        if (a.target instanceof HTMLElement) try {
          let l = a.target.closest("a");
          if (!l) return;
          let { hash: p } = new URL(l.href), f = e.querySelector(p);
          f && !n(f) && (o = f);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (a) => {
        if (a.target instanceof HTMLElement) if (n(a.target)) {
          let l = a.target;
          for (; l.parentElement && n(l.parentElement); ) l = l.parentElement;
          t.style(l, "overscrollBehavior", "contain");
        } else t.style(a.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (a) => {
        if (a.target instanceof HTMLElement) if (n(a.target)) {
          let l = a.target;
          for (; l.parentElement && l.dataset.headlessuiPortal !== "" && !(l.scrollHeight > l.clientHeight || l.scrollWidth > l.clientWidth); ) l = l.parentElement;
          l.dataset.headlessuiPortal === "" && a.preventDefault();
        } else a.preventDefault();
      }, { passive: !1 }), t.add(() => {
        var a;
        let l = (a = window.scrollY) != null ? a : window.pageYOffset;
        s !== l && window.scrollTo(0, s), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
      });
    });
  } } : {};
}
function Vf() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function qf(e) {
  let t = {};
  for (let r of e) Object.assign(t, r(t));
  return t;
}
let Wr = Kf(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: Ut(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: qf(r) }, i = [Gf(), Wf(), Vf()];
  i.forEach(({ before: s }) => s == null ? void 0 : s(n)), i.forEach(({ after: s }) => s == null ? void 0 : s(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Wr.subscribe(() => {
  let e = Wr.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e) t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && Wr.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && Wr.dispatch("TEARDOWN", r);
  }
});
function Xf(e, t, r) {
  let n = jf(Wr), i = e ? n.get(e) : void 0, s = i ? i.count > 0 : !1;
  return qe(() => {
    if (!(!e || !t)) return Wr.dispatch("PUSH", e, r), () => Wr.dispatch("POP", e, r);
  }, [t, e]), s;
}
let ko = /* @__PURE__ */ new Map(), Mn = /* @__PURE__ */ new Map();
function wa(e, t = !0) {
  qe(() => {
    var r;
    if (!t) return;
    let n = typeof e == "function" ? e() : e.current;
    if (!n) return;
    function i() {
      var o;
      if (!n) return;
      let a = (o = Mn.get(n)) != null ? o : 1;
      if (a === 1 ? Mn.delete(n) : Mn.set(n, a - 1), a !== 1) return;
      let l = ko.get(n);
      l && (l["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", l["aria-hidden"]), n.inert = l.inert, ko.delete(n));
    }
    let s = (r = Mn.get(n)) != null ? r : 0;
    return Mn.set(n, s + 1), s !== 0 || (ko.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0), i;
  }, [e, t]);
}
function zf({ defaultContainers: e = [], portals: t, mainTreeNodeRef: r } = {}) {
  var n;
  let i = he((n = r == null ? void 0 : r.current) != null ? n : null), s = Cn(i), o = ae(() => {
    var a, l, p;
    let f = [];
    for (let d of e) d !== null && (d instanceof HTMLElement ? f.push(d) : "current" in d && d.current instanceof HTMLElement && f.push(d.current));
    if (t != null && t.current) for (let d of t.current) f.push(d);
    for (let d of (a = s == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null ? a : []) d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(i.current) || d.contains((p = (l = i.current) == null ? void 0 : l.getRootNode()) == null ? void 0 : p.host) || f.some((_) => d.contains(_)) || f.push(d));
    return f;
  });
  return { resolveContainers: o, contains: ae((a) => o().some((l) => l.contains(a))), mainTreeNodeRef: i, MainTreeNode: Me(() => function() {
    return r != null ? null : ne.createElement(us, { features: Li.Hidden, ref: i });
  }, [i, r]) };
}
let ks = Lt(() => {
});
ks.displayName = "StackContext";
var hs = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(hs || {});
function Yf() {
  return yt(ks);
}
function Jf({ children: e, onUpdate: t, type: r, element: n, enabled: i }) {
  let s = Yf(), o = ae((...a) => {
    t == null || t(...a), s(...a);
  });
  return qe(() => {
    let a = i === void 0 || i === !0;
    return a && o(0, r, n), () => {
      a && o(1, r, n);
    };
  }, [o, r, n, i]), ne.createElement(ks.Provider, { value: o }, e);
}
let Hu = Lt(null);
function Mu() {
  let e = yt(Hu);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Mu), t;
  }
  return e;
}
function Qf() {
  let [e, t] = Se([]);
  return [e.length > 0 ? e.join(" ") : void 0, Me(() => function(r) {
    let n = ae((s) => (t((o) => [...o, s]), () => t((o) => {
      let a = o.slice(), l = a.indexOf(s);
      return l !== -1 && a.splice(l, 1), a;
    }))), i = Me(() => ({ register: n, slot: r.slot, name: r.name, props: r.props }), [n, r.slot, r.name, r.props]);
    return ne.createElement(Hu.Provider, { value: i }, r.children);
  }, [t])];
}
let Zf = "p";
function eh(e, t) {
  let r = gr(), { id: n = `headlessui-description-${r}`, ...i } = e, s = Mu(), o = ft(t);
  qe(() => s.register(n), [n, s.register]);
  let a = { ref: o, ...s.props, id: n };
  return it({ ourProps: a, theirProps: i, slot: s.slot || {}, defaultTag: Zf, name: s.name || "Description" });
}
let th = et(eh), rh = Object.assign(th, {});
var nh = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(nh || {}), ih = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(ih || {});
let oh = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Hi = Lt(null);
Hi.displayName = "DialogContext";
function si(e) {
  let t = yt(Hi);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, si), r;
  }
  return t;
}
function sh(e, t, r = () => [document.body]) {
  Xf(e, t, (n) => {
    var i;
    return { containers: [...(i = n.containers) != null ? i : [], r] };
  });
}
function ah(e, t) {
  return Ve(t.type, oh, e, t);
}
let uh = "div", ch = An.RenderStrategy | An.Static;
function lh(e, t) {
  let r = gr(), { id: n = `headlessui-dialog-${r}`, open: i, onClose: s, initialFocus: o, role: a = "dialog", __demoMode: l = !1, ...p } = e, [f, d] = Se(0), _ = he(!1);
  a = function() {
    return a === "dialog" || a === "alertdialog" ? a : (_.current || (_.current = !0, console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let m = zi();
  i === void 0 && m !== null && (i = (m & Ze.Open) === Ze.Open);
  let B = he(null), I = ft(B, t), C = Cn(B), D = e.hasOwnProperty("open") || m !== null, b = e.hasOwnProperty("onClose");
  if (!D && !b) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!D) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!b) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof i != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
  if (typeof s != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${s}`);
  let A = i ? 0 : 1, [x, M] = cu(ah, { titleId: null, descriptionId: null, panelRef: ns() }), U = ae(() => s(!1)), W = ae((te) => M({ type: 0, id: te })), g = Bn() ? l ? !1 : A === 0 : !1, h = f > 1, E = yt(Hi) !== null, [N, y] = Pf(), S = { get current() {
    var te;
    return (te = x.panelRef.current) != null ? te : B.current;
  } }, { resolveContainers: k, mainTreeNodeRef: T, MainTreeNode: O } = zf({ portals: N, defaultContainers: [S] }), R = h ? "parent" : "leaf", L = m !== null ? (m & Ze.Closing) === Ze.Closing : !1, j = E || L ? !1 : g, V = nt(() => {
    var te, Be;
    return (Be = Array.from((te = C == null ? void 0 : C.querySelectorAll("body > *")) != null ? te : []).find((pe) => pe.id === "headlessui-portal-root" ? !1 : pe.contains(T.current) && pe instanceof HTMLElement)) != null ? Be : null;
  }, [T]);
  wa(V, j);
  let X = h ? !0 : g, Q = nt(() => {
    var te, Be;
    return (Be = Array.from((te = C == null ? void 0 : C.querySelectorAll("[data-headlessui-portal]")) != null ? te : []).find((pe) => pe.contains(T.current) && pe instanceof HTMLElement)) != null ? Be : null;
  }, [T]);
  wa(Q, X), Ou(k, (te) => {
    te.preventDefault(), U();
  }, !(!g || h));
  let Y = !(h || A !== 0);
  Nu(C == null ? void 0 : C.defaultView, "keydown", (te) => {
    Y && (te.defaultPrevented || te.key === We.Escape && (te.preventDefault(), te.stopPropagation(), U()));
  }), sh(C, !(L || A !== 0 || E), k), ve(() => {
    if (A !== 0 || !B.current) return;
    let te = new ResizeObserver((Be) => {
      for (let pe of Be) {
        let Pe = pe.target.getBoundingClientRect();
        Pe.x === 0 && Pe.y === 0 && Pe.width === 0 && Pe.height === 0 && U();
      }
    });
    return te.observe(B.current), () => te.disconnect();
  }, [A, B, U]);
  let [se, _e] = Qf(), dt = Me(() => [{ dialogState: A, close: U, setTitleId: W }, x], [A, x, U, W]), mt = Me(() => ({ open: A === 0 }), [A]), Et = { ref: I, id: n, role: a, "aria-modal": A === 0 ? !0 : void 0, "aria-labelledby": x.titleId, "aria-describedby": se };
  return ne.createElement(Jf, { type: "Dialog", enabled: A === 0, element: B, onUpdate: ae((te, Be) => {
    Be === "Dialog" && Ve(te, { [hs.Add]: () => d((pe) => pe + 1), [hs.Remove]: () => d((pe) => pe - 1) });
  }) }, ne.createElement(cs, { force: !0 }, ne.createElement(fs, null, ne.createElement(Hi.Provider, { value: dt }, ne.createElement(fs.Group, { target: B }, ne.createElement(cs, { force: !1 }, ne.createElement(_e, { slot: mt, name: "Dialog.Description" }, ne.createElement(Hn, { initialFocus: o, containers: k, features: g ? Ve(R, { parent: Hn.features.RestoreFocus, leaf: Hn.features.All & ~Hn.features.FocusLock }) : Hn.features.None }, ne.createElement(y, null, it({ ourProps: Et, theirProps: p, slot: mt, defaultTag: uh, features: ch, visible: A === 0, name: "Dialog" }))))))))), ne.createElement(O, null));
}
let fh = "div";
function hh(e, t) {
  let r = gr(), { id: n = `headlessui-dialog-overlay-${r}`, ...i } = e, [{ dialogState: s, close: o }] = si("Dialog.Overlay"), a = ft(t), l = ae((f) => {
    if (f.target === f.currentTarget) {
      if (xu(f.currentTarget)) return f.preventDefault();
      f.preventDefault(), f.stopPropagation(), o();
    }
  }), p = Me(() => ({ open: s === 0 }), [s]);
  return it({ ourProps: { ref: a, id: n, "aria-hidden": !0, onClick: l }, theirProps: i, slot: p, defaultTag: fh, name: "Dialog.Overlay" });
}
let dh = "div";
function ph(e, t) {
  let r = gr(), { id: n = `headlessui-dialog-backdrop-${r}`, ...i } = e, [{ dialogState: s }, o] = si("Dialog.Backdrop"), a = ft(t);
  ve(() => {
    if (o.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [o.panelRef]);
  let l = Me(() => ({ open: s === 0 }), [s]);
  return ne.createElement(cs, { force: !0 }, ne.createElement(fs, null, it({ ourProps: { ref: a, id: n, "aria-hidden": !0 }, theirProps: i, slot: l, defaultTag: dh, name: "Dialog.Backdrop" })));
}
let gh = "div";
function wh(e, t) {
  let r = gr(), { id: n = `headlessui-dialog-panel-${r}`, ...i } = e, [{ dialogState: s }, o] = si("Dialog.Panel"), a = ft(t, o.panelRef), l = Me(() => ({ open: s === 0 }), [s]), p = ae((f) => {
    f.stopPropagation();
  });
  return it({ ourProps: { ref: a, id: n, onClick: p }, theirProps: i, slot: l, defaultTag: gh, name: "Dialog.Panel" });
}
let yh = "h2";
function mh(e, t) {
  let r = gr(), { id: n = `headlessui-dialog-title-${r}`, ...i } = e, [{ dialogState: s, setTitleId: o }] = si("Dialog.Title"), a = ft(t);
  ve(() => (o(n), () => o(null)), [n, o]);
  let l = Me(() => ({ open: s === 0 }), [s]);
  return it({ ourProps: { ref: a, id: n }, theirProps: i, slot: l, defaultTag: yh, name: "Dialog.Title" });
}
let Eh = et(lh), bh = et(ph), Sh = et(wh), vh = et(hh), _h = et(mh), Ao = Object.assign(Eh, { Backdrop: bh, Panel: Sh, Overlay: vh, Title: _h, Description: rh }), ya = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function ma(e) {
  var t, r;
  let n = (t = e.innerText) != null ? t : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return n;
  let s = !1;
  for (let a of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) a.remove(), s = !0;
  let o = s ? (r = i.innerText) != null ? r : "" : n;
  return ya.test(o) && (o = o.replace(ya, "")), o;
}
function Th(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let n = r.split(" ").map((i) => {
      let s = document.getElementById(i);
      if (s) {
        let o = s.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : ma(s).trim();
      }
      return null;
    }).filter(Boolean);
    if (n.length > 0) return n.join(", ");
  }
  return ma(e).trim();
}
function Ih(e) {
  let t = he(""), r = he("");
  return ae(() => {
    let n = e.current;
    if (!n) return "";
    let i = n.innerText;
    if (t.current === i) return r.current;
    let s = Th(n).trim().toLowerCase();
    return t.current = i, r.current = s, s;
  });
}
var Oh = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Oh || {}), Ph = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Ph || {}), kh = ((e) => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(kh || {});
function xo(e, t = (r) => r) {
  let r = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, n = _u(t(e.items.slice()), (s) => s.dataRef.current.domRef.current), i = r ? n.indexOf(r) : null;
  return i === -1 && (i = null), { items: n, activeItemIndex: i };
}
let Ah = { 1(e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, 0(e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
}, 2: (e, t) => {
  var r;
  let n = xo(e), i = hf(t, { resolveItems: () => n.items, resolveActiveIndex: () => n.activeItemIndex, resolveId: (s) => s.id, resolveDisabled: (s) => s.dataRef.current.disabled });
  return { ...e, ...n, searchQuery: "", activeItemIndex: i, activationTrigger: (r = t.trigger) != null ? r : 1 };
}, 3: (e, t) => {
  let r = e.searchQuery !== "" ? 0 : 1, n = e.searchQuery + t.value.toLowerCase(), i = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + r).concat(e.items.slice(0, e.activeItemIndex + r)) : e.items).find((o) => {
    var a;
    return ((a = o.dataRef.current.textValue) == null ? void 0 : a.startsWith(n)) && !o.dataRef.current.disabled;
  }), s = i ? e.items.indexOf(i) : -1;
  return s === -1 || s === e.activeItemIndex ? { ...e, searchQuery: n } : { ...e, searchQuery: n, activeItemIndex: s, activationTrigger: 1 };
}, 4(e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, 5: (e, t) => {
  let r = xo(e, (n) => [...n, { id: t.id, dataRef: t.dataRef }]);
  return { ...e, ...r };
}, 6: (e, t) => {
  let r = xo(e, (n) => {
    let i = n.findIndex((s) => s.id === t.id);
    return i !== -1 && n.splice(i, 1), n;
  });
  return { ...e, ...r, activationTrigger: 1 };
} }, As = Lt(null);
As.displayName = "MenuContext";
function Yi(e) {
  let t = yt(As);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Yi), r;
  }
  return t;
}
function xh(e, t) {
  return Ve(t.type, Ah, e, t);
}
let Nh = wt;
function Bh(e, t) {
  let { __demoMode: r = !1, ...n } = e, i = cu(xh, { __demoMode: r, menuState: r ? 0 : 1, buttonRef: ns(), itemsRef: ns(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: s, itemsRef: o, buttonRef: a }, l] = i, p = ft(t);
  Ou([a, o], (m, B) => {
    var I;
    l({ type: 1 }), Is(B, Ts.Loose) || (m.preventDefault(), (I = a.current) == null || I.focus());
  }, s === 0);
  let f = ae(() => {
    l({ type: 1 });
  }), d = Me(() => ({ open: s === 0, close: f }), [s, f]), _ = { ref: p };
  return ne.createElement(As.Provider, { value: i }, ne.createElement(Au, { value: Ve(s, { 0: Ze.Open, 1: Ze.Closed }) }, it({ ourProps: _, theirProps: n, slot: d, defaultTag: Nh, name: "Menu" })));
}
let Ch = "button";
function Fh(e, t) {
  var r;
  let n = gr(), { id: i = `headlessui-menu-button-${n}`, ...s } = e, [o, a] = Yi("Menu.Button"), l = ft(o.buttonRef, t), p = ii(), f = ae((I) => {
    switch (I.key) {
      case We.Space:
      case We.Enter:
      case We.ArrowDown:
        I.preventDefault(), I.stopPropagation(), a({ type: 0 }), p.nextFrame(() => a({ type: 2, focus: Rt.First }));
        break;
      case We.ArrowUp:
        I.preventDefault(), I.stopPropagation(), a({ type: 0 }), p.nextFrame(() => a({ type: 2, focus: Rt.Last }));
        break;
    }
  }), d = ae((I) => {
    switch (I.key) {
      case We.Space:
        I.preventDefault();
        break;
    }
  }), _ = ae((I) => {
    if (xu(I.currentTarget)) return I.preventDefault();
    e.disabled || (o.menuState === 0 ? (a({ type: 1 }), p.nextFrame(() => {
      var C;
      return (C = o.buttonRef.current) == null ? void 0 : C.focus({ preventScroll: !0 });
    })) : (I.preventDefault(), a({ type: 0 })));
  }), m = Me(() => ({ open: o.menuState === 0 }), [o]), B = { ref: l, id: i, type: tf(e, o.buttonRef), "aria-haspopup": "menu", "aria-controls": (r = o.itemsRef.current) == null ? void 0 : r.id, "aria-expanded": o.menuState === 0, onKeyDown: f, onKeyUp: d, onClick: _ };
  return it({ ourProps: B, theirProps: s, slot: m, defaultTag: Ch, name: "Menu.Button" });
}
let Rh = "div", Uh = An.RenderStrategy | An.Static;
function Lh(e, t) {
  var r, n;
  let i = gr(), { id: s = `headlessui-menu-items-${i}`, ...o } = e, [a, l] = Yi("Menu.Items"), p = ft(a.itemsRef, t), f = Cn(a.itemsRef), d = ii(), _ = zi(), m = _ !== null ? (_ & Ze.Open) === Ze.Open : a.menuState === 0;
  ve(() => {
    let b = a.itemsRef.current;
    b && a.menuState === 0 && b !== (f == null ? void 0 : f.activeElement) && b.focus({ preventScroll: !0 });
  }, [a.menuState, a.itemsRef, f]), of({ container: a.itemsRef.current, enabled: a.menuState === 0, accept(b) {
    return b.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : b.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(b) {
    b.setAttribute("role", "none");
  } });
  let B = ae((b) => {
    var A, x;
    switch (d.dispose(), b.key) {
      case We.Space:
        if (a.searchQuery !== "") return b.preventDefault(), b.stopPropagation(), l({ type: 3, value: b.key });
      case We.Enter:
        if (b.preventDefault(), b.stopPropagation(), l({ type: 1 }), a.activeItemIndex !== null) {
          let { dataRef: M } = a.items[a.activeItemIndex];
          (x = (A = M.current) == null ? void 0 : A.domRef.current) == null || x.click();
        }
        vu(a.buttonRef.current);
        break;
      case We.ArrowDown:
        return b.preventDefault(), b.stopPropagation(), l({ type: 2, focus: Rt.Next });
      case We.ArrowUp:
        return b.preventDefault(), b.stopPropagation(), l({ type: 2, focus: Rt.Previous });
      case We.Home:
      case We.PageUp:
        return b.preventDefault(), b.stopPropagation(), l({ type: 2, focus: Rt.First });
      case We.End:
      case We.PageDown:
        return b.preventDefault(), b.stopPropagation(), l({ type: 2, focus: Rt.Last });
      case We.Escape:
        b.preventDefault(), b.stopPropagation(), l({ type: 1 }), Ut().nextFrame(() => {
          var M;
          return (M = a.buttonRef.current) == null ? void 0 : M.focus({ preventScroll: !0 });
        });
        break;
      case We.Tab:
        b.preventDefault(), b.stopPropagation(), l({ type: 1 }), Ut().nextFrame(() => {
          Ql(a.buttonRef.current, b.shiftKey ? or.Previous : or.Next);
        });
        break;
      default:
        b.key.length === 1 && (l({ type: 3, value: b.key }), d.setTimeout(() => l({ type: 4 }), 350));
        break;
    }
  }), I = ae((b) => {
    switch (b.key) {
      case We.Space:
        b.preventDefault();
        break;
    }
  }), C = Me(() => ({ open: a.menuState === 0 }), [a]), D = { "aria-activedescendant": a.activeItemIndex === null || (r = a.items[a.activeItemIndex]) == null ? void 0 : r.id, "aria-labelledby": (n = a.buttonRef.current) == null ? void 0 : n.id, id: s, onKeyDown: B, onKeyUp: I, role: "menu", tabIndex: 0, ref: p };
  return it({ ourProps: D, theirProps: o, slot: C, defaultTag: Rh, features: Uh, visible: m, name: "Menu.Items" });
}
let Hh = wt;
function Mh(e, t) {
  let r = gr(), { id: n = `headlessui-menu-item-${r}`, disabled: i = !1, ...s } = e, [o, a] = Yi("Menu.Item"), l = o.activeItemIndex !== null ? o.items[o.activeItemIndex].id === n : !1, p = he(null), f = ft(t, p);
  qe(() => {
    if (o.__demoMode || o.menuState !== 0 || !l || o.activationTrigger === 0) return;
    let M = Ut();
    return M.requestAnimationFrame(() => {
      var U, W;
      (W = (U = p.current) == null ? void 0 : U.scrollIntoView) == null || W.call(U, { block: "nearest" });
    }), M.dispose;
  }, [o.__demoMode, p, l, o.menuState, o.activationTrigger, o.activeItemIndex]);
  let d = Ih(p), _ = he({ disabled: i, domRef: p, get textValue() {
    return d();
  } });
  qe(() => {
    _.current.disabled = i;
  }, [_, i]), qe(() => (a({ type: 5, id: n, dataRef: _ }), () => a({ type: 6, id: n })), [_, n]);
  let m = ae(() => {
    a({ type: 1 });
  }), B = ae((M) => {
    if (i) return M.preventDefault();
    a({ type: 1 }), vu(o.buttonRef.current);
  }), I = ae(() => {
    if (i) return a({ type: 2, focus: Rt.Nothing });
    a({ type: 2, focus: Rt.Specific, id: n });
  }), C = nf(), D = ae((M) => C.update(M)), b = ae((M) => {
    C.wasMoved(M) && (i || l || a({ type: 2, focus: Rt.Specific, id: n, trigger: 0 }));
  }), A = ae((M) => {
    C.wasMoved(M) && (i || l && a({ type: 2, focus: Rt.Nothing }));
  }), x = Me(() => ({ active: l, disabled: i, close: m }), [l, i, m]);
  return it({ ourProps: { id: n, ref: f, role: "menuitem", tabIndex: i === !0 ? void 0 : -1, "aria-disabled": i === !0 ? !0 : void 0, disabled: void 0, onClick: B, onFocus: I, onPointerEnter: D, onMouseEnter: D, onPointerMove: b, onMouseMove: b, onPointerLeave: A, onMouseLeave: A }, theirProps: s, slot: x, defaultTag: Hh, name: "Menu.Item" });
}
let $h = et(Bh), Dh = et(Fh), jh = et(Lh), Kh = et(Mh), wn = Object.assign($h, { Button: Dh, Items: jh, Item: Kh });
function Wh(e = 0) {
  let [t, r] = Se(e), n = oi(), i = nt((l) => {
    n.current && r((p) => p | l);
  }, [t, n]), s = nt((l) => !!(t & l), [t]), o = nt((l) => {
    n.current && r((p) => p & ~l);
  }, [r, n]), a = nt((l) => {
    n.current && r((p) => p ^ l);
  }, [r]);
  return { flags: t, addFlag: i, hasFlag: s, removeFlag: o, toggleFlag: a };
}
function Gh(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called) return t.called = !0, e(...r);
  };
}
function No(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Bo(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function Vh(e, t) {
  let r = Ut();
  if (!e) return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, o] = [n, i].map((l) => {
    let [p = 0] = l.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, d) => d - f);
    return p;
  }), a = s + o;
  if (a !== 0) {
    r.group((p) => {
      p.setTimeout(() => {
        t(), p.dispose();
      }, a), p.addEventListener(e, "transitionrun", (f) => {
        f.target === f.currentTarget && p.dispose();
      });
    });
    let l = r.addEventListener(e, "transitionend", (p) => {
      p.target === p.currentTarget && (t(), l());
    });
  } else t();
  return r.add(() => t()), r.dispose;
}
function qh(e, t, r, n) {
  let i = r ? "enter" : "leave", s = Ut(), o = n !== void 0 ? Gh(n) : () => {
  };
  i === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
  let a = Ve(i, { enter: () => t.enter, leave: () => t.leave }), l = Ve(i, { enter: () => t.enterTo, leave: () => t.leaveTo }), p = Ve(i, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return Bo(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), No(e, ...t.base, ...a, ...p), s.nextFrame(() => {
    Bo(e, ...t.base, ...a, ...p), No(e, ...t.base, ...a, ...l), Vh(e, () => (Bo(e, ...t.base, ...a), No(e, ...t.base, ...t.entered), o()));
  }), s.dispose;
}
function Xh({ immediate: e, container: t, direction: r, classes: n, onStart: i, onStop: s }) {
  let o = oi(), a = ii(), l = cr(r);
  qe(() => {
    e && (l.current = "enter");
  }, [e]), qe(() => {
    let p = Ut();
    a.add(p.dispose);
    let f = t.current;
    if (f && l.current !== "idle" && o.current) return p.dispose(), i.current(l.current), p.add(qh(f, n.current, l.current === "enter", () => {
      p.dispose(), s.current(l.current);
    })), p.dispose;
  }, [r]);
}
function yr(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Ji = Lt(null);
Ji.displayName = "TransitionContext";
var zh = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(zh || {});
function Yh() {
  let e = yt(Ji);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Jh() {
  let e = yt(Qi);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Qi = Lt(null);
Qi.displayName = "NestingContext";
function Zi(e) {
  return "children" in e ? Zi(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function $u(e, t) {
  let r = cr(e), n = he([]), i = oi(), s = ii(), o = ae((m, B = Pr.Hidden) => {
    let I = n.current.findIndex(({ el: C }) => C === m);
    I !== -1 && (Ve(B, { [Pr.Unmount]() {
      n.current.splice(I, 1);
    }, [Pr.Hidden]() {
      n.current[I].state = "hidden";
    } }), s.microTask(() => {
      var C;
      !Zi(n) && i.current && ((C = r.current) == null || C.call(r));
    }));
  }), a = ae((m) => {
    let B = n.current.find(({ el: I }) => I === m);
    return B ? B.state !== "visible" && (B.state = "visible") : n.current.push({ el: m, state: "visible" }), () => o(m, Pr.Unmount);
  }), l = he([]), p = he(Promise.resolve()), f = he({ enter: [], leave: [], idle: [] }), d = ae((m, B, I) => {
    l.current.splice(0), t && (t.chains.current[B] = t.chains.current[B].filter(([C]) => C !== m)), t == null || t.chains.current[B].push([m, new Promise((C) => {
      l.current.push(C);
    })]), t == null || t.chains.current[B].push([m, new Promise((C) => {
      Promise.all(f.current[B].map(([D, b]) => b)).then(() => C());
    })]), B === "enter" ? p.current = p.current.then(() => t == null ? void 0 : t.wait.current).then(() => I(B)) : I(B);
  }), _ = ae((m, B, I) => {
    Promise.all(f.current[B].splice(0).map(([C, D]) => D)).then(() => {
      var C;
      (C = l.current.shift()) == null || C();
    }).then(() => I(B));
  });
  return Me(() => ({ children: n, register: a, unregister: o, onStart: d, onStop: _, wait: p, chains: f }), [a, o, n, d, _, f, p]);
}
function Qh() {
}
let Zh = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Ea(e) {
  var t;
  let r = {};
  for (let n of Zh) r[n] = (t = e[n]) != null ? t : Qh;
  return r;
}
function e0(e) {
  let t = he(Ea(e));
  return ve(() => {
    t.current = Ea(e);
  }, [e]), t;
}
let t0 = "div", Du = An.RenderStrategy;
function r0(e, t) {
  var r, n;
  let { beforeEnter: i, afterEnter: s, beforeLeave: o, afterLeave: a, enter: l, enterFrom: p, enterTo: f, entered: d, leave: _, leaveFrom: m, leaveTo: B, ...I } = e, C = he(null), D = ft(C, t), b = (r = I.unmount) == null || r ? Pr.Unmount : Pr.Hidden, { show: A, appear: x, initial: M } = Yh(), [U, W] = Se(A ? "visible" : "hidden"), g = Jh(), { register: h, unregister: E } = g;
  ve(() => h(C), [h, C]), ve(() => {
    if (b === Pr.Hidden && C.current) {
      if (A && U !== "visible") {
        W("visible");
        return;
      }
      return Ve(U, { hidden: () => E(C), visible: () => h(C) });
    }
  }, [U, C, h, E, A, b]);
  let N = cr({ base: yr(I.className), enter: yr(l), enterFrom: yr(p), enterTo: yr(f), entered: yr(d), leave: yr(_), leaveFrom: yr(m), leaveTo: yr(B) }), y = e0({ beforeEnter: i, afterEnter: s, beforeLeave: o, afterLeave: a }), S = Bn();
  ve(() => {
    if (S && U === "visible" && C.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [C, U, S]);
  let k = M && !x, T = x && A && M, O = !S || k ? "idle" : A ? "enter" : "leave", R = Wh(0), L = ae((Y) => Ve(Y, { enter: () => {
    R.addFlag(Ze.Opening), y.current.beforeEnter();
  }, leave: () => {
    R.addFlag(Ze.Closing), y.current.beforeLeave();
  }, idle: () => {
  } })), j = ae((Y) => Ve(Y, { enter: () => {
    R.removeFlag(Ze.Opening), y.current.afterEnter();
  }, leave: () => {
    R.removeFlag(Ze.Closing), y.current.afterLeave();
  }, idle: () => {
  } })), V = $u(() => {
    W("hidden"), E(C);
  }, g), X = he(!1);
  Xh({ immediate: T, container: C, classes: N, direction: O, onStart: cr((Y) => {
    X.current = !0, V.onStart(C, Y, L);
  }), onStop: cr((Y) => {
    X.current = !1, V.onStop(C, Y, j), Y === "leave" && !Zi(V) && (W("hidden"), E(C));
  }) });
  let Q = I, de = { ref: D };
  return T ? Q = { ...Q, className: Ui(I.className, ...N.current.enter, ...N.current.enterFrom) } : X.current && (Q.className = Ui(I.className, (n = C.current) == null ? void 0 : n.className), Q.className === "" && delete Q.className), ne.createElement(Qi.Provider, { value: V }, ne.createElement(Au, { value: Ve(U, { visible: Ze.Open, hidden: Ze.Closed }) | R.flags }, it({ ourProps: de, theirProps: Q, defaultTag: t0, features: Du, visible: U === "visible", name: "Transition.Child" })));
}
function n0(e, t) {
  let { show: r, appear: n = !1, unmount: i = !0, ...s } = e, o = he(null), a = ft(o, t);
  Bn();
  let l = zi();
  if (r === void 0 && l !== null && (r = (l & Ze.Open) === Ze.Open), ![!0, !1].includes(r)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [p, f] = Se(r ? "visible" : "hidden"), d = $u(() => {
    f("hidden");
  }), [_, m] = Se(!0), B = he([r]);
  qe(() => {
    _ !== !1 && B.current[B.current.length - 1] !== r && (B.current.push(r), m(!1));
  }, [B, r]);
  let I = Me(() => ({ show: r, appear: n, initial: _ }), [r, n, _]);
  ve(() => {
    if (r) f("visible");
    else if (!Zi(d)) f("hidden");
    else {
      let A = o.current;
      if (!A) return;
      let x = A.getBoundingClientRect();
      x.x === 0 && x.y === 0 && x.width === 0 && x.height === 0 && f("hidden");
    }
  }, [r, d]);
  let C = { unmount: i }, D = ae(() => {
    var A;
    _ && m(!1), (A = e.beforeEnter) == null || A.call(e);
  }), b = ae(() => {
    var A;
    _ && m(!1), (A = e.beforeLeave) == null || A.call(e);
  });
  return ne.createElement(Qi.Provider, { value: d }, ne.createElement(Ji.Provider, { value: I }, it({ ourProps: { ...C, as: wt, children: ne.createElement(ju, { ref: a, ...C, ...s, beforeEnter: D, beforeLeave: b }) }, theirProps: {}, defaultTag: wt, features: Du, visible: p === "visible", name: "Transition" })));
}
function i0(e, t) {
  let r = yt(Ji) !== null, n = zi() !== null;
  return ne.createElement(ne.Fragment, null, !r && n ? ne.createElement(ds, { ref: t, ...e }) : ne.createElement(ju, { ref: t, ...e }));
}
let ds = et(n0), ju = et(r0), o0 = et(i0), xi = Object.assign(ds, { Child: o0, Root: ds });
const s0 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", a0 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2017.5H4.16667C3.72464%2017.5%203.30072%2017.3244%202.98816%2017.0118C2.67559%2016.6993%202.5%2016.2754%202.5%2015.8333V4.16667C2.5%203.72464%202.67559%203.30072%202.98816%202.98816C3.30072%202.67559%203.72464%202.5%204.16667%202.5H7.5'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.333%2014.1667L17.4997%2010L13.333%205.83337'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.5%2010H7.5'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Ku = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.8742%204.5804L18.5392%208.15088C18.8511%208.45416%2019.0047%208.76103%2018.9999%209.07026C18.995%209.3795%2018.8608%209.66136%2018.5984%209.91707C18.3239%2010.1847%2018.0277%2010.3203%2017.7109%2010.3262C17.3941%2010.331%2017.0797%2010.1811%2016.7677%209.87785L13.0193%206.22648C12.5937%205.8114%2012.1825%205.51762%2011.7872%205.34516C11.3917%205.1727%2010.9758%205.14535%2010.5405%205.26428C10.104%205.38203%209.63603%205.68532%209.13422%206.17295C8.44258%206.84733%208.11246%207.48007%208.14634%208.0712C8.18018%208.6623%208.52358%209.27602%209.17534%209.90996L12.954%2013.5922C13.2696%2013.8991%2013.4244%2014.2059%2013.4195%2014.5104C13.4147%2014.8161%2013.2793%2015.098%2013.012%2015.3584C12.746%2015.6177%2012.4522%2015.7533%2012.133%2015.764C11.8137%2015.7747%2011.4957%2015.6261%2011.1813%2015.3192L7.51634%2011.7487C6.92022%2011.1683%206.48975%2010.6188%206.22495%2010.1002C5.96014%209.58168%205.86099%208.99533%205.92991%208.34118C5.99158%207.78099%206.17416%207.23864%206.47887%206.71294C6.78237%206.18723%207.21768%205.64964%207.78237%205.09896C8.45466%204.44362%209.09673%203.94171%209.70858%203.59203C10.3192%203.24236%2010.9105%203.04849%2011.4812%203.00806C12.0532%202.96762%2012.6166%203.07942%2013.1741%203.34346C13.7315%203.6075%2014.2974%204.01902%2014.873%204.5804H14.8742Z'%20fill='url(%23paint0_linear_4212_6487)'/%3e%3cpath%20d='M9.12459%2018.9872L5.46081%2015.4167C5.14884%2015.1122%204.99527%2014.8066%205.00011%2014.4973C5.00495%2014.1881%205.13917%2013.9062%205.40156%2013.6505C5.67604%2013.3829%205.97229%2013.2473%206.28909%2013.2414C6.60589%2013.2366%206.92028%2013.3853%207.23225%2013.6897L10.9795%2017.3411C11.4063%2017.7562%2011.8162%2018.05%2012.2116%2018.2224C12.607%2018.3949%2013.023%2018.421%2013.4595%2018.3033C13.896%2018.1856%2014.3639%2017.8823%2014.8657%2017.3934C15.5574%2016.7191%2015.8875%2016.0863%2015.8537%2015.4952C15.8198%2014.9041%2015.4764%2014.2904%2014.8247%2013.6553L12.8114%2011.7106C12.4958%2011.4038%2012.341%2011.0969%2012.3458%2010.7925C12.3507%2010.4868%2012.4861%2010.2049%2012.7533%209.94445C13.0194%209.68514%2013.3132%209.54957%2013.6324%209.53887C13.9516%209.52816%2014.2696%209.67682%2014.584%209.9837L16.4824%2011.8165C17.0785%2012.3969%2017.509%2012.9464%2017.7738%2013.465C18.0386%2013.9835%2018.1378%2014.5699%2018.0688%2015.224C18.0072%2015.7842%2017.8246%2016.3266%2017.5199%2016.8523C17.2164%2017.378%2016.7811%2017.9156%2016.2164%2018.4663C15.5441%2019.1216%2014.902%2019.6235%2014.2902%2019.9732C13.6783%2020.3229%2013.0871%2020.5179%2012.5151%2020.5583C11.9432%2020.5988%2011.3797%2020.487%2010.8223%2020.2229C10.2648%2019.9589%209.69894%2019.5474%209.12338%2018.986L9.12459%2018.9872Z'%20fill='url(%23paint1_linear_4212_6487)'/%3e%3cpath%20d='M11.4098%209.77448C12.153%209.77448%2012.7556%209.18182%2012.7556%208.4507C12.7556%207.71962%2012.153%207.12695%2011.4098%207.12695C10.6665%207.12695%2010.064%207.71962%2010.064%208.4507C10.064%209.18182%2010.6665%209.77448%2011.4098%209.77448Z'%20fill='url(%23paint2_radial_4212_6487)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_4212_6487'%20x1='17.9364'%20y1='6.66057'%20x2='6.64095'%20y2='11.7639'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23201C1B'/%3e%3cstop%20offset='0.36'%20stop-color='%2377390D'/%3e%3cstop%20offset='0.67'%20stop-color='%23EA8101'/%3e%3cstop%20offset='1'%20stop-color='%23F4B852'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_4212_6487'%20x1='6.3763'%20y1='17.0541'%20x2='19.5023'%20y2='13.0825'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%231F1D1C'/%3e%3cstop%20offset='0.37'%20stop-color='%2377390D'/%3e%3cstop%20offset='0.67'%20stop-color='%23EA8101'/%3e%3cstop%20offset='1'%20stop-color='%23F4FB52'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint2_radial_4212_6487'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(11.4098%208.45191)%20scale(1.34581%201.32377)'%3e%3cstop%20stop-color='%23F4B852'/%3e%3cstop%20offset='0.33'%20stop-color='%23EA8101'/%3e%3cstop%20offset='0.64'%20stop-color='%2377390D'/%3e%3cstop%20offset='1'%20stop-color='%23211C1D'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
function ps(e, t = 4, r = 5) {
  if (e.length <= t + r)
    return e;
  const n = e.slice(0, t), i = e.slice(e.length - r);
  return `${n}...${i}`;
}
const u0 = {
  [Bt.UNISAT]: Ku
}, c0 = {
  [Ai.MAINNET]: "Mainnet",
  [Ai.TESTNET]: "Testnet",
  [Ai.SIGNET]: "Signet"
};
function l0({
  address: e,
  network: t,
  onViewProfile: r,
  onChangeWallet: n,
  onDisconnectWallet: i,
  renderAvatar: s
}) {
  const { wallet: o } = Yt();
  return /* @__PURE__ */ z.jsx(
    wn,
    {
      as: "section",
      className: "ord-connect-font ord-wallet-connected-container relative inline-block text-left",
      children: ({ open: a }) => /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
        /* @__PURE__ */ z.jsxs(wn.Button, { className: "ord-wallet-connected-button", children: [
          /* @__PURE__ */ z.jsxs("div", { className: "wallet-identifier-container", children: [
            s ? s(e, "large") : /* @__PURE__ */ z.jsx(
              Eu,
              {
                size: 28,
                variant: "beam",
                name: e,
                colors: ["#1C2DCB", "#F226B8"]
              }
            ),
            /* @__PURE__ */ z.jsx(
              "img",
              {
                src: u0[o],
                alt: `${o} is connected`
              }
            )
          ] }),
          /* @__PURE__ */ z.jsxs("section", { className: "address-container", children: [
            /* @__PURE__ */ z.jsx("p", { className: "address", children: ps(e) }),
            /* @__PURE__ */ z.jsxs("section", { className: "network-container", children: [
              /* @__PURE__ */ z.jsx("div", { className: "status-indicator" }),
              /* @__PURE__ */ z.jsx("p", { className: "network", children: c0[t] ?? t })
            ] })
          ] }),
          /* @__PURE__ */ z.jsx(
            "img",
            {
              src: s0,
              className: `dropdown-button ${a ? "close-dropdown-button" : "expand-dropdown-button"}`,
              alt: ""
            }
          )
        ] }),
        /* @__PURE__ */ z.jsx(
          xi,
          {
            as: wt,
            enter: "transition ease-out duration-100",
            enterFrom: "transform opacity-0 scale-95",
            enterTo: "transform opacity-100 scale-100",
            leave: "transition ease-in duration-75",
            leaveFrom: "transform opacity-100 scale-100",
            leaveTo: "transform opacity-0 scale-95",
            children: /* @__PURE__ */ z.jsxs(wn.Items, { className: "ord-wallet-connection-dropdown", children: [
              /* @__PURE__ */ z.jsxs(
                wn.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => r == null ? void 0 : r(),
                  children: [
                    /* @__PURE__ */ z.jsx("span", { className: "label", children: "View profile" }),
                    /* @__PURE__ */ z.jsx("span", { className: "value", children: ps(e) })
                  ]
                }
              ),
              /* @__PURE__ */ z.jsx(
                wn.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => n == null ? void 0 : n(),
                  children: /* @__PURE__ */ z.jsx("span", { className: "change-wallet-label", children: "Change wallet" })
                }
              ),
              /* @__PURE__ */ z.jsx("hr", { className: "horizontal-separator" }),
              /* @__PURE__ */ z.jsxs(
                wn.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => i == null ? void 0 : i(),
                  children: [
                    /* @__PURE__ */ z.jsx("span", { className: "label", children: "Disconnect wallet" }),
                    /* @__PURE__ */ z.jsx("img", { src: a0, className: "logout-icon", alt: "" })
                  ]
                }
              )
            ] })
          }
        )
      ] })
    }
  );
}
function f0({
  openModal: e,
  disabled: t
}) {
  return /* @__PURE__ */ z.jsx(
    "button",
    {
      type: "button",
      onClick: e,
      disabled: t,
      "data-testid": "connect-wallet-button",
      className: "ord-connect-font ord-connect-wallet-button",
      children: /* @__PURE__ */ z.jsx("span", {})
    }
  );
}
const h0 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2022C17.5228%2022%2022%2017.5228%2022%2012C22%206.47715%2017.5228%202%2012%202C6.47715%202%202%206.47715%202%2012C2%2017.5228%206.47715%2022%2012%2022Z'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%209L9%2015'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%209L15%2015'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
function Wu() {
  return typeof window > "u" ? !1 : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );
}
async function d0() {
  let e = 0;
  const t = 20;
  for (; e < t; ) {
    if (typeof window < "u" && window.unisat)
      try {
        const r = await window.unisat.getAccounts();
        if (r && r.length > 0)
          return !0;
      } catch {
        break;
      }
    e += 1, await new Promise((r) => {
      setTimeout(r, 100);
    });
  }
  return !1;
}
const p0 = {
  [Bt.UNISAT]: "https://unisat.io/download"
  // their www subdomain doesn't work
}, g0 = async ({
  network: e,
  wallet: t,
  chain: r = kn.BITCOIN
}, { readOnly: n = !1 } = {}) => {
  switch (t) {
    case Bt.UNISAT: {
      const i = await Tl(e, r, { readOnly: n });
      if (!i || i.length < 1)
        throw new Error("Unisat via Ordit returned no addresses");
      const s = i[0];
      return {
        address: {
          ordinals: s.address,
          payments: s.address
        },
        publicKey: {
          ordinals: s.publicKey,
          payments: s.publicKey
        },
        format: {
          ordinals: s.format,
          payments: s.format
        }
      };
    }
    default:
      throw new Error("Invalid wallet");
  }
};
function w0({
  onClose: e,
  onError: t
}) {
  const {
    updateAddress: r,
    network: n,
    updateWallet: i,
    updatePublicKey: s,
    updateFormat: o,
    disconnectWallet: a,
    address: l,
    publicKey: p,
    format: f,
    wallet: d,
    chain: _
  } = Yt(), m = (I, C) => {
    t(C.message ?? C.toString()), console.error(`Error while connecting to ${I} wallet`, C), a(), C instanceof Sl && window.open(
      p0[I],
      "_blank",
      "noopener,noreferrer"
    );
  }, B = async (I, { readOnly: C = !1 } = {}) => {
    try {
      const { address: D, publicKey: b, format: A } = await g0(
        { network: n, wallet: I, chain: _ },
        { readOnly: C }
      );
      return r({
        ordinals: D.ordinals,
        payments: D.payments
      }), s({
        ordinals: b.ordinals,
        payments: b.payments
      }), i(I), o({
        ordinals: A.ordinals,
        payments: A.payments
      }), e(), !0;
    } catch (D) {
      return m(I, D), !1;
    }
  };
  return ve(() => {
    if (d !== Bt.UNISAT)
      return;
    let I = !0, C = !1;
    const D = () => B(Bt.UNISAT);
    return l && p && f && (async () => {
      const A = await d0();
      if (I) {
        if (!A) {
          a();
          return;
        }
        C = await B(Bt.UNISAT, {
          readOnly: !0
        }), I && C && window.unisat.addListener("accountsChanged", D);
      }
    })(), () => {
      I = !1, C && window.unisat.removeListener("accountsChanged", D);
    };
  }, [d]), { connectWallet: B };
}
const y0 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%2018L15%2012L9%206'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", m0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20stroke='%23fff'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20stroke-width='2'%3e%3ccircle%20cx='22'%20cy='22'%20r='1'%3e%3canimate%20attributeName='r'%20begin='0s'%20dur='1.8s'%20values='1;%2020'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.165,%200.84,%200.44,%201'%20repeatCount='indefinite'/%3e%3canimate%20attributeName='stroke-opacity'%20begin='0s'%20dur='1.8s'%20values='1;%200'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.3,%200.61,%200.355,%201'%20repeatCount='indefinite'/%3e%3c/circle%3e%3ccircle%20cx='22'%20cy='22'%20r='1'%3e%3canimate%20attributeName='r'%20begin='-0.9s'%20dur='1.8s'%20values='1;%2020'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.165,%200.84,%200.44,%201'%20repeatCount='indefinite'/%3e%3canimate%20attributeName='stroke-opacity'%20begin='-0.9s'%20dur='1.8s'%20values='1;%200'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.3,%200.61,%200.355,%201'%20repeatCount='indefinite'/%3e%3c/circle%3e%3c/g%3e%3c/svg%3e", E0 = {
  [Bt.UNISAT]: "UniSat"
};
function b0({
  wallet: e,
  onConnect: t,
  icon: r,
  renderAvatar: n,
  isPreferred: i
}) {
  const s = Wu(), { wallet: o, address: a } = Yt(), [l, p] = Se(!1), f = E0[e], d = async () => {
    p(!0);
    try {
      await t();
    } catch {
    }
    p(!1);
  }, _ = o === e && a.ordinals;
  return /* @__PURE__ */ z.jsx(
    "button",
    {
      type: "button",
      className: "wallet-option-button",
      onClick: d,
      children: /* @__PURE__ */ z.jsxs("div", { className: "option-wrapper", children: [
        /* @__PURE__ */ z.jsx("img", { className: "wallet-icon", src: r, alt: "" }),
        /* @__PURE__ */ z.jsxs("div", { className: "wallet-option", children: [
          /* @__PURE__ */ z.jsx("p", { className: "wallet-option-label", children: f }),
          /* @__PURE__ */ z.jsx("p", { className: "wallet-option-subtitle", children: s ? "Available on app" : "" })
        ] }),
        o === e && a.ordinals ? /* @__PURE__ */ z.jsxs("div", { className: "wallet-option-connected-address", children: [
          n ? n(a.ordinals, "small") : /* @__PURE__ */ z.jsx(
            Eu,
            {
              size: s ? 12 : 16,
              variant: "beam",
              name: a.ordinals,
              colors: ["#1C2DCB", "#F226B8"]
            }
          ),
          /* @__PURE__ */ z.jsx("span", { className: "label", children: ps(a.ordinals) })
        ] }) : null,
        !_ && i ? /* @__PURE__ */ z.jsx("span", { className: "preferred-label", children: "Preferred" }) : null,
        l ? /* @__PURE__ */ z.jsx(
          "img",
          {
            src: m0,
            width: s ? 20 : 24,
            height: s ? 20 : 24,
            alt: `${f} extension is loading`
          }
        ) : /* @__PURE__ */ z.jsx(
          "img",
          {
            src: y0,
            alt: "",
            width: s ? 20 : 24,
            height: s ? 20 : 24,
            className: "chevron-btn"
          }
        )
      ] })
    }
  );
}
const S0 = {
  [kn.BITCOIN]: "Bitcoin",
  [kn.FRACTAL_BITCOIN]: "Fractal Bitcoin"
};
function v0({
  isOpen: e,
  closeModal: t,
  renderAvatar: r,
  preferredWallet: n,
  walletsOrder: i
}) {
  const [s, o] = Se(""), { connectWallet: a } = w0({
    onClose: t,
    onError: (_) => o(_)
  }), { network: l, chain: p } = Yt(), f = Wu(), d = Me(() => {
    const m = [
      {
        wallet: Bt.UNISAT,
        onConnect: () => a(Bt.UNISAT),
        icon: Ku,
        hidden: f,
        order: 21,
        chains: [kn.BITCOIN, kn.FRACTAL_BITCOIN]
      }
    ].filter(
      (I) => I.chains.includes(p) && !I.hidden
    );
    return i ? m.map((I) => {
      const C = i.findIndex(
        (D) => D === I.wallet
      );
      return C >= 0 ? { ...I, order: C } : I;
    }).sort((I, C) => I.order - C.order) : m;
  }, [f, l, i, a, p]);
  return /* @__PURE__ */ z.jsx(xi, { appear: !0, show: e, as: wt, children: /* @__PURE__ */ z.jsxs(
    Ao,
    {
      as: "div",
      className: "ord-connect-font ord-connect-wallet-modal",
      onClose: t,
      children: [
        /* @__PURE__ */ z.jsx(
          xi.Child,
          {
            as: wt,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ z.jsx("section", { className: "backdrop" })
          }
        ),
        /* @__PURE__ */ z.jsx("section", { className: "outer-container", children: /* @__PURE__ */ z.jsx("div", { className: "inner-container", children: /* @__PURE__ */ z.jsx(
          xi.Child,
          {
            as: wt,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ z.jsxs(Ao.Panel, { className: "panel", children: [
              /* @__PURE__ */ z.jsxs("section", { className: "panel-title-container", children: [
                /* @__PURE__ */ z.jsxs(Ao.Title, { as: "h3", className: "panel-title", children: [
                  "Choose ",
                  S0[p],
                  " wallet to connect"
                ] }),
                /* @__PURE__ */ z.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: t,
                    className: "close-button",
                    children: /* @__PURE__ */ z.jsx("img", { src: h0, alt: "Close" })
                  }
                )
              ] }),
              /* @__PURE__ */ z.jsxs("section", { className: "panel-content-container", children: [
                /* @__PURE__ */ z.jsx("section", { className: "panel-content-inner-container", children: d.map((_, m) => {
                  const B = m === d.length - 1;
                  return /* @__PURE__ */ z.jsxs(wt, { children: [
                    /* @__PURE__ */ z.jsx(
                      b0,
                      {
                        wallet: _.wallet,
                        onConnect: async () => {
                          o("");
                          const I = _.onConnect().then((D) => (D && o(""), D)), C = await Promise.race([
                            I,
                            new Promise((D) => {
                              setTimeout(() => D("timeout"), 5e3);
                            })
                          ]);
                          return typeof C == "string" ? (o(
                            "No wallet pop-up? The extension is not responding. Try reloading your browser."
                          ), I) : C;
                        },
                        icon: _.icon,
                        renderAvatar: r,
                        isPreferred: n === _.wallet
                      }
                    ),
                    !B && /* @__PURE__ */ z.jsx("hr", { className: "horizontal-separator" })
                  ] }, _.wallet);
                }) }),
                /* @__PURE__ */ z.jsx("p", { className: "error-message", children: s })
              ] })
            ] })
          }
        ) }) })
      ]
    }
  ) });
}
function fw({
  hideConnectButton: e,
  onViewProfile: t,
  onChangeWalletClick: r,
  onDisconnectWalletClick: n,
  renderAvatar: i,
  preferredWallet: s,
  walletsOrder: o
}) {
  const {
    address: a,
    disconnectWallet: l,
    network: p,
    isModalOpen: f,
    openModal: d,
    closeModal: _
  } = Yt(), m = Ll(), B = () => e ? null : a != null && a.ordinals ? /* @__PURE__ */ z.jsx(
    l0,
    {
      address: a.ordinals,
      network: p,
      onViewProfile: t,
      onChangeWallet: () => {
        d(), r == null || r();
      },
      onDisconnectWallet: () => {
        l(), n == null || n();
      },
      renderAvatar: i
    }
  ) : /* @__PURE__ */ z.jsx(f0, { disabled: !m, openModal: d });
  return /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    B(),
    m ? /* @__PURE__ */ z.jsx(
      v0,
      {
        isOpen: f,
        closeModal: _,
        renderAvatar: i,
        preferredWallet: s,
        walletsOrder: o
      }
    ) : null
  ] });
}
var _0 = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, Co = Math.ceil, Pt = Math.floor, gt = "[BigNumber Error] ", ba = gt + "Number primitive has more than 15 significant digits: ", Ct = 1e14, ee = 14, Fo = 9007199254740991, Ro = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], mr = 1e7, Ke = 1e9;
function Gu(e) {
  var t, r, n, i = b.prototype = { constructor: b, toString: null, valueOf: null }, s = new b(1), o = 20, a = 4, l = -7, p = 21, f = -1e7, d = 1e7, _ = !1, m = 1, B = 0, I = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, C = "0123456789abcdefghijklmnopqrstuvwxyz", D = !0;
  function b(g, h) {
    var E, N, y, S, k, T, O, R, L = this;
    if (!(L instanceof b)) return new b(g, h);
    if (h == null) {
      if (g && g._isBigNumber === !0) {
        L.s = g.s, !g.c || g.e > d ? L.c = L.e = null : g.e < f ? L.c = [L.e = 0] : (L.e = g.e, L.c = g.c.slice());
        return;
      }
      if ((T = typeof g == "number") && g * 0 == 0) {
        if (L.s = 1 / g < 0 ? (g = -g, -1) : 1, g === ~~g) {
          for (S = 0, k = g; k >= 10; k /= 10, S++) ;
          S > d ? L.c = L.e = null : (L.e = S, L.c = [g]);
          return;
        }
        R = String(g);
      } else {
        if (!_0.test(R = String(g))) return n(L, R, T);
        L.s = R.charCodeAt(0) == 45 ? (R = R.slice(1), -1) : 1;
      }
      (S = R.indexOf(".")) > -1 && (R = R.replace(".", "")), (k = R.search(/e/i)) > 0 ? (S < 0 && (S = k), S += +R.slice(k + 1), R = R.substring(0, k)) : S < 0 && (S = R.length);
    } else {
      if (xe(h, 2, C.length, "Base"), h == 10 && D)
        return L = new b(g), U(L, o + L.e + 1, a);
      if (R = String(g), T = typeof g == "number") {
        if (g * 0 != 0) return n(L, R, T, h);
        if (L.s = 1 / g < 0 ? (R = R.slice(1), -1) : 1, b.DEBUG && R.replace(/^0\.0*|\./, "").length > 15)
          throw Error(ba + g);
      } else
        L.s = R.charCodeAt(0) === 45 ? (R = R.slice(1), -1) : 1;
      for (E = C.slice(0, h), S = k = 0, O = R.length; k < O; k++)
        if (E.indexOf(N = R.charAt(k)) < 0) {
          if (N == ".") {
            if (k > S) {
              S = O;
              continue;
            }
          } else if (!y && (R == R.toUpperCase() && (R = R.toLowerCase()) || R == R.toLowerCase() && (R = R.toUpperCase()))) {
            y = !0, k = -1, S = 0;
            continue;
          }
          return n(L, String(g), T, h);
        }
      T = !1, R = r(R, h, 10, L.s), (S = R.indexOf(".")) > -1 ? R = R.replace(".", "") : S = R.length;
    }
    for (k = 0; R.charCodeAt(k) === 48; k++) ;
    for (O = R.length; R.charCodeAt(--O) === 48; ) ;
    if (R = R.slice(k, ++O)) {
      if (O -= k, T && b.DEBUG && O > 15 && (g > Fo || g !== Pt(g)))
        throw Error(ba + L.s * g);
      if ((S = S - k - 1) > d)
        L.c = L.e = null;
      else if (S < f)
        L.c = [L.e = 0];
      else {
        if (L.e = S, L.c = [], k = (S + 1) % ee, S < 0 && (k += ee), k < O) {
          for (k && L.c.push(+R.slice(0, k)), O -= ee; k < O; )
            L.c.push(+R.slice(k, k += ee));
          k = ee - (R = R.slice(k)).length;
        } else
          k -= O;
        for (; k--; R += "0") ;
        L.c.push(+R);
      }
    } else
      L.c = [L.e = 0];
  }
  b.clone = Gu, b.ROUND_UP = 0, b.ROUND_DOWN = 1, b.ROUND_CEIL = 2, b.ROUND_FLOOR = 3, b.ROUND_HALF_UP = 4, b.ROUND_HALF_DOWN = 5, b.ROUND_HALF_EVEN = 6, b.ROUND_HALF_CEIL = 7, b.ROUND_HALF_FLOOR = 8, b.EUCLID = 9, b.config = b.set = function(g) {
    var h, E;
    if (g != null)
      if (typeof g == "object") {
        if (g.hasOwnProperty(h = "DECIMAL_PLACES") && (E = g[h], xe(E, 0, Ke, h), o = E), g.hasOwnProperty(h = "ROUNDING_MODE") && (E = g[h], xe(E, 0, 8, h), a = E), g.hasOwnProperty(h = "EXPONENTIAL_AT") && (E = g[h], E && E.pop ? (xe(E[0], -Ke, 0, h), xe(E[1], 0, Ke, h), l = E[0], p = E[1]) : (xe(E, -Ke, Ke, h), l = -(p = E < 0 ? -E : E))), g.hasOwnProperty(h = "RANGE"))
          if (E = g[h], E && E.pop)
            xe(E[0], -Ke, -1, h), xe(E[1], 1, Ke, h), f = E[0], d = E[1];
          else if (xe(E, -Ke, Ke, h), E)
            f = -(d = E < 0 ? -E : E);
          else
            throw Error(gt + h + " cannot be zero: " + E);
        if (g.hasOwnProperty(h = "CRYPTO"))
          if (E = g[h], E === !!E)
            if (E)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                _ = E;
              else
                throw _ = !E, Error(gt + "crypto unavailable");
            else
              _ = E;
          else
            throw Error(gt + h + " not true or false: " + E);
        if (g.hasOwnProperty(h = "MODULO_MODE") && (E = g[h], xe(E, 0, 9, h), m = E), g.hasOwnProperty(h = "POW_PRECISION") && (E = g[h], xe(E, 0, Ke, h), B = E), g.hasOwnProperty(h = "FORMAT"))
          if (E = g[h], typeof E == "object") I = E;
          else throw Error(gt + h + " not an object: " + E);
        if (g.hasOwnProperty(h = "ALPHABET"))
          if (E = g[h], typeof E == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(E))
            D = E.slice(0, 10) == "0123456789", C = E;
          else
            throw Error(gt + h + " invalid: " + E);
      } else
        throw Error(gt + "Object expected: " + g);
    return {
      DECIMAL_PLACES: o,
      ROUNDING_MODE: a,
      EXPONENTIAL_AT: [l, p],
      RANGE: [f, d],
      CRYPTO: _,
      MODULO_MODE: m,
      POW_PRECISION: B,
      FORMAT: I,
      ALPHABET: C
    };
  }, b.isBigNumber = function(g) {
    if (!g || g._isBigNumber !== !0) return !1;
    if (!b.DEBUG) return !0;
    var h, E, N = g.c, y = g.e, S = g.s;
    e: if ({}.toString.call(N) == "[object Array]") {
      if ((S === 1 || S === -1) && y >= -Ke && y <= Ke && y === Pt(y)) {
        if (N[0] === 0) {
          if (y === 0 && N.length === 1) return !0;
          break e;
        }
        if (h = (y + 1) % ee, h < 1 && (h += ee), String(N[0]).length == h) {
          for (h = 0; h < N.length; h++)
            if (E = N[h], E < 0 || E >= Ct || E !== Pt(E)) break e;
          if (E !== 0) return !0;
        }
      }
    } else if (N === null && y === null && (S === null || S === 1 || S === -1))
      return !0;
    throw Error(gt + "Invalid BigNumber: " + g);
  }, b.maximum = b.max = function() {
    return x(arguments, -1);
  }, b.minimum = b.min = function() {
    return x(arguments, 1);
  }, b.random = function() {
    var g = 9007199254740992, h = Math.random() * g & 2097151 ? function() {
      return Pt(Math.random() * g);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(E) {
      var N, y, S, k, T, O = 0, R = [], L = new b(s);
      if (E == null ? E = o : xe(E, 0, Ke), k = Co(E / ee), _)
        if (crypto.getRandomValues) {
          for (N = crypto.getRandomValues(new Uint32Array(k *= 2)); O < k; )
            T = N[O] * 131072 + (N[O + 1] >>> 11), T >= 9e15 ? (y = crypto.getRandomValues(new Uint32Array(2)), N[O] = y[0], N[O + 1] = y[1]) : (R.push(T % 1e14), O += 2);
          O = k / 2;
        } else if (crypto.randomBytes) {
          for (N = crypto.randomBytes(k *= 7); O < k; )
            T = (N[O] & 31) * 281474976710656 + N[O + 1] * 1099511627776 + N[O + 2] * 4294967296 + N[O + 3] * 16777216 + (N[O + 4] << 16) + (N[O + 5] << 8) + N[O + 6], T >= 9e15 ? crypto.randomBytes(7).copy(N, O) : (R.push(T % 1e14), O += 7);
          O = k / 7;
        } else
          throw _ = !1, Error(gt + "crypto unavailable");
      if (!_)
        for (; O < k; )
          T = h(), T < 9e15 && (R[O++] = T % 1e14);
      for (k = R[--O], E %= ee, k && E && (T = Ro[ee - E], R[O] = Pt(k / T) * T); R[O] === 0; R.pop(), O--) ;
      if (O < 0)
        R = [S = 0];
      else {
        for (S = -1; R[0] === 0; R.splice(0, 1), S -= ee) ;
        for (O = 1, T = R[0]; T >= 10; T /= 10, O++) ;
        O < ee && (S -= ee - O);
      }
      return L.e = S, L.c = R, L;
    };
  }(), b.sum = function() {
    for (var g = 1, h = arguments, E = new b(h[0]); g < h.length; ) E = E.plus(h[g++]);
    return E;
  }, r = /* @__PURE__ */ function() {
    var g = "0123456789";
    function h(E, N, y, S) {
      for (var k, T = [0], O, R = 0, L = E.length; R < L; ) {
        for (O = T.length; O--; T[O] *= N) ;
        for (T[0] += S.indexOf(E.charAt(R++)), k = 0; k < T.length; k++)
          T[k] > y - 1 && (T[k + 1] == null && (T[k + 1] = 0), T[k + 1] += T[k] / y | 0, T[k] %= y);
      }
      return T.reverse();
    }
    return function(E, N, y, S, k) {
      var T, O, R, L, j, V, X, Q, de = E.indexOf("."), Y = o, J = a;
      for (de >= 0 && (L = B, B = 0, E = E.replace(".", ""), Q = new b(N), V = Q.pow(E.length - de), B = L, Q.c = h(
        Zt(It(V.c), V.e, "0"),
        10,
        y,
        g
      ), Q.e = Q.c.length), X = h(E, N, y, k ? (T = C, g) : (T = g, C)), R = L = X.length; X[--L] == 0; X.pop()) ;
      if (!X[0]) return T.charAt(0);
      if (de < 0 ? --R : (V.c = X, V.e = R, V.s = S, V = t(V, Q, Y, J, y), X = V.c, j = V.r, R = V.e), O = R + Y + 1, de = X[O], L = y / 2, j = j || O < 0 || X[O + 1] != null, j = J < 4 ? (de != null || j) && (J == 0 || J == (V.s < 0 ? 3 : 2)) : de > L || de == L && (J == 4 || j || J == 6 && X[O - 1] & 1 || J == (V.s < 0 ? 8 : 7)), O < 1 || !X[0])
        E = j ? Zt(T.charAt(1), -Y, T.charAt(0)) : T.charAt(0);
      else {
        if (X.length = O, j)
          for (--y; ++X[--O] > y; )
            X[O] = 0, O || (++R, X = [1].concat(X));
        for (L = X.length; !X[--L]; ) ;
        for (de = 0, E = ""; de <= L; E += T.charAt(X[de++])) ;
        E = Zt(E, R, T.charAt(0));
      }
      return E;
    };
  }(), t = /* @__PURE__ */ function() {
    function g(N, y, S) {
      var k, T, O, R, L = 0, j = N.length, V = y % mr, X = y / mr | 0;
      for (N = N.slice(); j--; )
        O = N[j] % mr, R = N[j] / mr | 0, k = X * O + R * V, T = V * O + k % mr * mr + L, L = (T / S | 0) + (k / mr | 0) + X * R, N[j] = T % S;
      return L && (N = [L].concat(N)), N;
    }
    function h(N, y, S, k) {
      var T, O;
      if (S != k)
        O = S > k ? 1 : -1;
      else
        for (T = O = 0; T < S; T++)
          if (N[T] != y[T]) {
            O = N[T] > y[T] ? 1 : -1;
            break;
          }
      return O;
    }
    function E(N, y, S, k) {
      for (var T = 0; S--; )
        N[S] -= T, T = N[S] < y[S] ? 1 : 0, N[S] = T * k + N[S] - y[S];
      for (; !N[0] && N.length > 1; N.splice(0, 1)) ;
    }
    return function(N, y, S, k, T) {
      var O, R, L, j, V, X, Q, de, Y, J, se, _e, dt, mt, Et, te, Be, pe = N.s == y.s ? 1 : -1, Pe = N.c, ge = y.c;
      if (!Pe || !Pe[0] || !ge || !ge[0])
        return new b(
          // Return NaN if either NaN, or both Infinity or 0.
          !N.s || !y.s || (Pe ? ge && Pe[0] == ge[0] : !ge) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            Pe && Pe[0] == 0 || !ge ? pe * 0 : pe / 0
          )
        );
      for (de = new b(pe), Y = de.c = [], R = N.e - y.e, pe = S + R + 1, T || (T = Ct, R = kt(N.e / ee) - kt(y.e / ee), pe = pe / ee | 0), L = 0; ge[L] == (Pe[L] || 0); L++) ;
      if (ge[L] > (Pe[L] || 0) && R--, pe < 0)
        Y.push(1), j = !0;
      else {
        for (mt = Pe.length, te = ge.length, L = 0, pe += 2, V = Pt(T / (ge[0] + 1)), V > 1 && (ge = g(ge, V, T), Pe = g(Pe, V, T), te = ge.length, mt = Pe.length), dt = te, J = Pe.slice(0, te), se = J.length; se < te; J[se++] = 0) ;
        Be = ge.slice(), Be = [0].concat(Be), Et = ge[0], ge[1] >= T / 2 && Et++;
        do {
          if (V = 0, O = h(ge, J, te, se), O < 0) {
            if (_e = J[0], te != se && (_e = _e * T + (J[1] || 0)), V = Pt(_e / Et), V > 1)
              for (V >= T && (V = T - 1), X = g(ge, V, T), Q = X.length, se = J.length; h(X, J, Q, se) == 1; )
                V--, E(X, te < Q ? Be : ge, Q, T), Q = X.length, O = 1;
            else
              V == 0 && (O = V = 1), X = ge.slice(), Q = X.length;
            if (Q < se && (X = [0].concat(X)), E(J, X, se, T), se = J.length, O == -1)
              for (; h(ge, J, te, se) < 1; )
                V++, E(J, te < se ? Be : ge, se, T), se = J.length;
          } else O === 0 && (V++, J = [0]);
          Y[L++] = V, J[0] ? J[se++] = Pe[dt] || 0 : (J = [Pe[dt]], se = 1);
        } while ((dt++ < mt || J[0] != null) && pe--);
        j = J[0] != null, Y[0] || Y.splice(0, 1);
      }
      if (T == Ct) {
        for (L = 1, pe = Y[0]; pe >= 10; pe /= 10, L++) ;
        U(de, S + (de.e = L + R * ee - 1) + 1, k, j);
      } else
        de.e = R, de.r = +j;
      return de;
    };
  }();
  function A(g, h, E, N) {
    var y, S, k, T, O;
    if (E == null ? E = a : xe(E, 0, 8), !g.c) return g.toString();
    if (y = g.c[0], k = g.e, h == null)
      O = It(g.c), O = N == 1 || N == 2 && (k <= l || k >= p) ? mi(O, k) : Zt(O, k, "0");
    else if (g = U(new b(g), h, E), S = g.e, O = It(g.c), T = O.length, N == 1 || N == 2 && (h <= S || S <= l)) {
      for (; T < h; O += "0", T++) ;
      O = mi(O, S);
    } else if (h -= k, O = Zt(O, S, "0"), S + 1 > T) {
      if (--h > 0) for (O += "."; h--; O += "0") ;
    } else if (h += S - T, h > 0)
      for (S + 1 == T && (O += "."); h--; O += "0") ;
    return g.s < 0 && y ? "-" + O : O;
  }
  function x(g, h) {
    for (var E, N, y = 1, S = new b(g[0]); y < g.length; y++)
      N = new b(g[y]), (!N.s || (E = Mr(S, N)) === h || E === 0 && S.s === h) && (S = N);
    return S;
  }
  function M(g, h, E) {
    for (var N = 1, y = h.length; !h[--y]; h.pop()) ;
    for (y = h[0]; y >= 10; y /= 10, N++) ;
    return (E = N + E * ee - 1) > d ? g.c = g.e = null : E < f ? g.c = [g.e = 0] : (g.e = E, g.c = h), g;
  }
  n = /* @__PURE__ */ function() {
    var g = /^(-?)0([xbo])(?=\w[\w.]*$)/i, h = /^([^.]+)\.$/, E = /^\.([^.]+)$/, N = /^-?(Infinity|NaN)$/, y = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(S, k, T, O) {
      var R, L = T ? k : k.replace(y, "");
      if (N.test(L))
        S.s = isNaN(L) ? null : L < 0 ? -1 : 1;
      else {
        if (!T && (L = L.replace(g, function(j, V, X) {
          return R = (X = X.toLowerCase()) == "x" ? 16 : X == "b" ? 2 : 8, !O || O == R ? V : j;
        }), O && (R = O, L = L.replace(h, "$1").replace(E, "0.$1")), k != L))
          return new b(L, R);
        if (b.DEBUG)
          throw Error(gt + "Not a" + (O ? " base " + O : "") + " number: " + k);
        S.s = null;
      }
      S.c = S.e = null;
    };
  }();
  function U(g, h, E, N) {
    var y, S, k, T, O, R, L, j = g.c, V = Ro;
    if (j) {
      e: {
        for (y = 1, T = j[0]; T >= 10; T /= 10, y++) ;
        if (S = h - y, S < 0)
          S += ee, k = h, O = j[R = 0], L = Pt(O / V[y - k - 1] % 10);
        else if (R = Co((S + 1) / ee), R >= j.length)
          if (N) {
            for (; j.length <= R; j.push(0)) ;
            O = L = 0, y = 1, S %= ee, k = S - ee + 1;
          } else
            break e;
        else {
          for (O = T = j[R], y = 1; T >= 10; T /= 10, y++) ;
          S %= ee, k = S - ee + y, L = k < 0 ? 0 : Pt(O / V[y - k - 1] % 10);
        }
        if (N = N || h < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        j[R + 1] != null || (k < 0 ? O : O % V[y - k - 1]), N = E < 4 ? (L || N) && (E == 0 || E == (g.s < 0 ? 3 : 2)) : L > 5 || L == 5 && (E == 4 || N || E == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (S > 0 ? k > 0 ? O / V[y - k] : 0 : j[R - 1]) % 10 & 1 || E == (g.s < 0 ? 8 : 7)), h < 1 || !j[0])
          return j.length = 0, N ? (h -= g.e + 1, j[0] = V[(ee - h % ee) % ee], g.e = -h || 0) : j[0] = g.e = 0, g;
        if (S == 0 ? (j.length = R, T = 1, R--) : (j.length = R + 1, T = V[ee - S], j[R] = k > 0 ? Pt(O / V[y - k] % V[k]) * T : 0), N)
          for (; ; )
            if (R == 0) {
              for (S = 1, k = j[0]; k >= 10; k /= 10, S++) ;
              for (k = j[0] += T, T = 1; k >= 10; k /= 10, T++) ;
              S != T && (g.e++, j[0] == Ct && (j[0] = 1));
              break;
            } else {
              if (j[R] += T, j[R] != Ct) break;
              j[R--] = 0, T = 1;
            }
        for (S = j.length; j[--S] === 0; j.pop()) ;
      }
      g.e > d ? g.c = g.e = null : g.e < f && (g.c = [g.e = 0]);
    }
    return g;
  }
  function W(g) {
    var h, E = g.e;
    return E === null ? g.toString() : (h = It(g.c), h = E <= l || E >= p ? mi(h, E) : Zt(h, E, "0"), g.s < 0 ? "-" + h : h);
  }
  return i.absoluteValue = i.abs = function() {
    var g = new b(this);
    return g.s < 0 && (g.s = 1), g;
  }, i.comparedTo = function(g, h) {
    return Mr(this, new b(g, h));
  }, i.decimalPlaces = i.dp = function(g, h) {
    var E, N, y, S = this;
    if (g != null)
      return xe(g, 0, Ke), h == null ? h = a : xe(h, 0, 8), U(new b(S), g + S.e + 1, h);
    if (!(E = S.c)) return null;
    if (N = ((y = E.length - 1) - kt(this.e / ee)) * ee, y = E[y]) for (; y % 10 == 0; y /= 10, N--) ;
    return N < 0 && (N = 0), N;
  }, i.dividedBy = i.div = function(g, h) {
    return t(this, new b(g, h), o, a);
  }, i.dividedToIntegerBy = i.idiv = function(g, h) {
    return t(this, new b(g, h), 0, 1);
  }, i.exponentiatedBy = i.pow = function(g, h) {
    var E, N, y, S, k, T, O, R, L, j = this;
    if (g = new b(g), g.c && !g.isInteger())
      throw Error(gt + "Exponent not an integer: " + W(g));
    if (h != null && (h = new b(h)), T = g.e > 14, !j.c || !j.c[0] || j.c[0] == 1 && !j.e && j.c.length == 1 || !g.c || !g.c[0])
      return L = new b(Math.pow(+W(j), T ? g.s * (2 - yi(g)) : +W(g))), h ? L.mod(h) : L;
    if (O = g.s < 0, h) {
      if (h.c ? !h.c[0] : !h.s) return new b(NaN);
      N = !O && j.isInteger() && h.isInteger(), N && (j = j.mod(h));
    } else {
      if (g.e > 9 && (j.e > 0 || j.e < -1 || (j.e == 0 ? j.c[0] > 1 || T && j.c[1] >= 24e7 : j.c[0] < 8e13 || T && j.c[0] <= 9999975e7)))
        return S = j.s < 0 && yi(g) ? -0 : 0, j.e > -1 && (S = 1 / S), new b(O ? 1 / S : S);
      B && (S = Co(B / ee + 2));
    }
    for (T ? (E = new b(0.5), O && (g.s = 1), R = yi(g)) : (y = Math.abs(+W(g)), R = y % 2), L = new b(s); ; ) {
      if (R) {
        if (L = L.times(j), !L.c) break;
        S ? L.c.length > S && (L.c.length = S) : N && (L = L.mod(h));
      }
      if (y) {
        if (y = Pt(y / 2), y === 0) break;
        R = y % 2;
      } else if (g = g.times(E), U(g, g.e + 1, 1), g.e > 14)
        R = yi(g);
      else {
        if (y = +W(g), y === 0) break;
        R = y % 2;
      }
      j = j.times(j), S ? j.c && j.c.length > S && (j.c.length = S) : N && (j = j.mod(h));
    }
    return N ? L : (O && (L = s.div(L)), h ? L.mod(h) : S ? U(L, B, a, k) : L);
  }, i.integerValue = function(g) {
    var h = new b(this);
    return g == null ? g = a : xe(g, 0, 8), U(h, h.e + 1, g);
  }, i.isEqualTo = i.eq = function(g, h) {
    return Mr(this, new b(g, h)) === 0;
  }, i.isFinite = function() {
    return !!this.c;
  }, i.isGreaterThan = i.gt = function(g, h) {
    return Mr(this, new b(g, h)) > 0;
  }, i.isGreaterThanOrEqualTo = i.gte = function(g, h) {
    return (h = Mr(this, new b(g, h))) === 1 || h === 0;
  }, i.isInteger = function() {
    return !!this.c && kt(this.e / ee) > this.c.length - 2;
  }, i.isLessThan = i.lt = function(g, h) {
    return Mr(this, new b(g, h)) < 0;
  }, i.isLessThanOrEqualTo = i.lte = function(g, h) {
    return (h = Mr(this, new b(g, h))) === -1 || h === 0;
  }, i.isNaN = function() {
    return !this.s;
  }, i.isNegative = function() {
    return this.s < 0;
  }, i.isPositive = function() {
    return this.s > 0;
  }, i.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, i.minus = function(g, h) {
    var E, N, y, S, k = this, T = k.s;
    if (g = new b(g, h), h = g.s, !T || !h) return new b(NaN);
    if (T != h)
      return g.s = -h, k.plus(g);
    var O = k.e / ee, R = g.e / ee, L = k.c, j = g.c;
    if (!O || !R) {
      if (!L || !j) return L ? (g.s = -h, g) : new b(j ? k : NaN);
      if (!L[0] || !j[0])
        return j[0] ? (g.s = -h, g) : new b(L[0] ? k : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          a == 3 ? -0 : 0
        ));
    }
    if (O = kt(O), R = kt(R), L = L.slice(), T = O - R) {
      for ((S = T < 0) ? (T = -T, y = L) : (R = O, y = j), y.reverse(), h = T; h--; y.push(0)) ;
      y.reverse();
    } else
      for (N = (S = (T = L.length) < (h = j.length)) ? T : h, T = h = 0; h < N; h++)
        if (L[h] != j[h]) {
          S = L[h] < j[h];
          break;
        }
    if (S && (y = L, L = j, j = y, g.s = -g.s), h = (N = j.length) - (E = L.length), h > 0) for (; h--; L[E++] = 0) ;
    for (h = Ct - 1; N > T; ) {
      if (L[--N] < j[N]) {
        for (E = N; E && !L[--E]; L[E] = h) ;
        --L[E], L[N] += Ct;
      }
      L[N] -= j[N];
    }
    for (; L[0] == 0; L.splice(0, 1), --R) ;
    return L[0] ? M(g, L, R) : (g.s = a == 3 ? -1 : 1, g.c = [g.e = 0], g);
  }, i.modulo = i.mod = function(g, h) {
    var E, N, y = this;
    return g = new b(g, h), !y.c || !g.s || g.c && !g.c[0] ? new b(NaN) : !g.c || y.c && !y.c[0] ? new b(y) : (m == 9 ? (N = g.s, g.s = 1, E = t(y, g, 0, 3), g.s = N, E.s *= N) : E = t(y, g, 0, m), g = y.minus(E.times(g)), !g.c[0] && m == 1 && (g.s = y.s), g);
  }, i.multipliedBy = i.times = function(g, h) {
    var E, N, y, S, k, T, O, R, L, j, V, X, Q, de, Y, J = this, se = J.c, _e = (g = new b(g, h)).c;
    if (!se || !_e || !se[0] || !_e[0])
      return !J.s || !g.s || se && !se[0] && !_e || _e && !_e[0] && !se ? g.c = g.e = g.s = null : (g.s *= J.s, !se || !_e ? g.c = g.e = null : (g.c = [0], g.e = 0)), g;
    for (N = kt(J.e / ee) + kt(g.e / ee), g.s *= J.s, O = se.length, j = _e.length, O < j && (Q = se, se = _e, _e = Q, y = O, O = j, j = y), y = O + j, Q = []; y--; Q.push(0)) ;
    for (de = Ct, Y = mr, y = j; --y >= 0; ) {
      for (E = 0, V = _e[y] % Y, X = _e[y] / Y | 0, k = O, S = y + k; S > y; )
        R = se[--k] % Y, L = se[k] / Y | 0, T = X * R + L * V, R = V * R + T % Y * Y + Q[S] + E, E = (R / de | 0) + (T / Y | 0) + X * L, Q[S--] = R % de;
      Q[S] = E;
    }
    return E ? ++N : Q.splice(0, 1), M(g, Q, N);
  }, i.negated = function() {
    var g = new b(this);
    return g.s = -g.s || null, g;
  }, i.plus = function(g, h) {
    var E, N = this, y = N.s;
    if (g = new b(g, h), h = g.s, !y || !h) return new b(NaN);
    if (y != h)
      return g.s = -h, N.minus(g);
    var S = N.e / ee, k = g.e / ee, T = N.c, O = g.c;
    if (!S || !k) {
      if (!T || !O) return new b(y / 0);
      if (!T[0] || !O[0]) return O[0] ? g : new b(T[0] ? N : y * 0);
    }
    if (S = kt(S), k = kt(k), T = T.slice(), y = S - k) {
      for (y > 0 ? (k = S, E = O) : (y = -y, E = T), E.reverse(); y--; E.push(0)) ;
      E.reverse();
    }
    for (y = T.length, h = O.length, y - h < 0 && (E = O, O = T, T = E, h = y), y = 0; h; )
      y = (T[--h] = T[h] + O[h] + y) / Ct | 0, T[h] = Ct === T[h] ? 0 : T[h] % Ct;
    return y && (T = [y].concat(T), ++k), M(g, T, k);
  }, i.precision = i.sd = function(g, h) {
    var E, N, y, S = this;
    if (g != null && g !== !!g)
      return xe(g, 1, Ke), h == null ? h = a : xe(h, 0, 8), U(new b(S), g, h);
    if (!(E = S.c)) return null;
    if (y = E.length - 1, N = y * ee + 1, y = E[y]) {
      for (; y % 10 == 0; y /= 10, N--) ;
      for (y = E[0]; y >= 10; y /= 10, N++) ;
    }
    return g && S.e + 1 > N && (N = S.e + 1), N;
  }, i.shiftedBy = function(g) {
    return xe(g, -Fo, Fo), this.times("1e" + g);
  }, i.squareRoot = i.sqrt = function() {
    var g, h, E, N, y, S = this, k = S.c, T = S.s, O = S.e, R = o + 4, L = new b("0.5");
    if (T !== 1 || !k || !k[0])
      return new b(!T || T < 0 && (!k || k[0]) ? NaN : k ? S : 1 / 0);
    if (T = Math.sqrt(+W(S)), T == 0 || T == 1 / 0 ? (h = It(k), (h.length + O) % 2 == 0 && (h += "0"), T = Math.sqrt(+h), O = kt((O + 1) / 2) - (O < 0 || O % 2), T == 1 / 0 ? h = "5e" + O : (h = T.toExponential(), h = h.slice(0, h.indexOf("e") + 1) + O), E = new b(h)) : E = new b(T + ""), E.c[0]) {
      for (O = E.e, T = O + R, T < 3 && (T = 0); ; )
        if (y = E, E = L.times(y.plus(t(S, y, R, 1))), It(y.c).slice(0, T) === (h = It(E.c)).slice(0, T))
          if (E.e < O && --T, h = h.slice(T - 3, T + 1), h == "9999" || !N && h == "4999") {
            if (!N && (U(y, y.e + o + 2, 0), y.times(y).eq(S))) {
              E = y;
              break;
            }
            R += 4, T += 4, N = 1;
          } else {
            (!+h || !+h.slice(1) && h.charAt(0) == "5") && (U(E, E.e + o + 2, 1), g = !E.times(E).eq(S));
            break;
          }
    }
    return U(E, E.e + o + 1, a, g);
  }, i.toExponential = function(g, h) {
    return g != null && (xe(g, 0, Ke), g++), A(this, g, h, 1);
  }, i.toFixed = function(g, h) {
    return g != null && (xe(g, 0, Ke), g = g + this.e + 1), A(this, g, h);
  }, i.toFormat = function(g, h, E) {
    var N, y = this;
    if (E == null)
      g != null && h && typeof h == "object" ? (E = h, h = null) : g && typeof g == "object" ? (E = g, g = h = null) : E = I;
    else if (typeof E != "object")
      throw Error(gt + "Argument not an object: " + E);
    if (N = y.toFixed(g, h), y.c) {
      var S, k = N.split("."), T = +E.groupSize, O = +E.secondaryGroupSize, R = E.groupSeparator || "", L = k[0], j = k[1], V = y.s < 0, X = V ? L.slice(1) : L, Q = X.length;
      if (O && (S = T, T = O, O = S, Q -= S), T > 0 && Q > 0) {
        for (S = Q % T || T, L = X.substr(0, S); S < Q; S += T) L += R + X.substr(S, T);
        O > 0 && (L += R + X.slice(S)), V && (L = "-" + L);
      }
      N = j ? L + (E.decimalSeparator || "") + ((O = +E.fractionGroupSize) ? j.replace(
        new RegExp("\\d{" + O + "}\\B", "g"),
        "$&" + (E.fractionGroupSeparator || "")
      ) : j) : L;
    }
    return (E.prefix || "") + N + (E.suffix || "");
  }, i.toFraction = function(g) {
    var h, E, N, y, S, k, T, O, R, L, j, V, X = this, Q = X.c;
    if (g != null && (T = new b(g), !T.isInteger() && (T.c || T.s !== 1) || T.lt(s)))
      throw Error(gt + "Argument " + (T.isInteger() ? "out of range: " : "not an integer: ") + W(T));
    if (!Q) return new b(X);
    for (h = new b(s), R = E = new b(s), N = O = new b(s), V = It(Q), S = h.e = V.length - X.e - 1, h.c[0] = Ro[(k = S % ee) < 0 ? ee + k : k], g = !g || T.comparedTo(h) > 0 ? S > 0 ? h : R : T, k = d, d = 1 / 0, T = new b(V), O.c[0] = 0; L = t(T, h, 0, 1), y = E.plus(L.times(N)), y.comparedTo(g) != 1; )
      E = N, N = y, R = O.plus(L.times(y = R)), O = y, h = T.minus(L.times(y = h)), T = y;
    return y = t(g.minus(E), N, 0, 1), O = O.plus(y.times(R)), E = E.plus(y.times(N)), O.s = R.s = X.s, S = S * 2, j = t(R, N, S, a).minus(X).abs().comparedTo(
      t(O, E, S, a).minus(X).abs()
    ) < 1 ? [R, N] : [O, E], d = k, j;
  }, i.toNumber = function() {
    return +W(this);
  }, i.toPrecision = function(g, h) {
    return g != null && xe(g, 1, Ke), A(this, g, h, 2);
  }, i.toString = function(g) {
    var h, E = this, N = E.s, y = E.e;
    return y === null ? N ? (h = "Infinity", N < 0 && (h = "-" + h)) : h = "NaN" : (g == null ? h = y <= l || y >= p ? mi(It(E.c), y) : Zt(It(E.c), y, "0") : g === 10 && D ? (E = U(new b(E), o + y + 1, a), h = Zt(It(E.c), E.e, "0")) : (xe(g, 2, C.length, "Base"), h = r(Zt(It(E.c), y, "0"), 10, g, N, !0)), N < 0 && E.c[0] && (h = "-" + h)), h;
  }, i.valueOf = i.toJSON = function() {
    return W(this);
  }, i._isBigNumber = !0, i[Symbol.toStringTag] = "BigNumber", i[Symbol.for("nodejs.util.inspect.custom")] = i.valueOf, e != null && b.set(e), b;
}
function kt(e) {
  var t = e | 0;
  return e > 0 || e === t ? t : t - 1;
}
function It(e) {
  for (var t, r, n = 1, i = e.length, s = e[0] + ""; n < i; ) {
    for (t = e[n++] + "", r = ee - t.length; r--; t = "0" + t) ;
    s += t;
  }
  for (i = s.length; s.charCodeAt(--i) === 48; ) ;
  return s.slice(0, i + 1 || 1);
}
function Mr(e, t) {
  var r, n, i = e.c, s = t.c, o = e.s, a = t.s, l = e.e, p = t.e;
  if (!o || !a) return null;
  if (r = i && !i[0], n = s && !s[0], r || n) return r ? n ? 0 : -a : o;
  if (o != a) return o;
  if (r = o < 0, n = l == p, !i || !s) return n ? 0 : !i ^ r ? 1 : -1;
  if (!n) return l > p ^ r ? 1 : -1;
  for (a = (l = i.length) < (p = s.length) ? l : p, o = 0; o < a; o++) if (i[o] != s[o]) return i[o] > s[o] ^ r ? 1 : -1;
  return l == p ? 0 : l > p ^ r ? 1 : -1;
}
function xe(e, t, r, n) {
  if (e < t || e > r || e !== Pt(e))
    throw Error(gt + (n || "Argument") + (typeof e == "number" ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e));
}
function yi(e) {
  var t = e.c.length - 1;
  return kt(e.e / ee) == t && e.c[t] % 2 != 0;
}
function mi(e, t) {
  return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t;
}
function Zt(e, t, r) {
  var n, i;
  if (t < 0) {
    for (i = r + "."; ++t; i += r) ;
    e = i + e;
  } else if (n = e.length, ++t > n) {
    for (i = r, t -= n; --t; i += r) ;
    e += i;
  } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
  return e;
}
var Sa = Gu();
function hw() {
  const { network: e, publicKey: t, format: r } = Yt(), [n, i] = Se(null), [s, o] = Se(!1);
  return { getBalance: nt(async () => {
    o(!0);
    try {
      if (i(null), !r || !r.payments || !t || !t.payments)
        throw new Error("No wallet is connected");
      const { address: l } = vl(
        t.payments,
        e,
        _l[r.payments]
      )[0], f = await new _s({ network: e }).getBalance({ address: l }), d = Number(
        new Sa(f).multipliedBy(1e8).toFixed(0, Sa.ROUND_HALF_DOWN)
      );
      return o(!1), d;
    } catch (l) {
      throw i(l.message), o(!1), l;
    }
  }, [r, e, t]), error: n, loading: s };
}
async function xs({
  wallet: e,
  psbt: t,
  options: r
}) {
  var s, o;
  if ((s = r == null ? void 0 : r.signingIndexes) != null && s.length && ((o = r == null ? void 0 : r.inputsToSign) != null && o.length))
    throw new Error("Cannot have both indexes and inputs to sign together");
  const n = (r == null ? void 0 : r.finalize) ?? !0, i = (r == null ? void 0 : r.extractTx) ?? !0;
  if (e === Bt.UNISAT)
    return await Il(t, {
      finalize: n,
      extractTx: i
    });
  throw new Error("Invalid wallet selected");
}
function dw() {
  const { wallet: e, network: t, address: r, publicKey: n } = Yt(), [i, s] = Se(null), [o, a] = Se(!1);
  return { send: nt(
    async (p, f, d, _ = !0) => {
      a(!0);
      try {
        if (s(null), !r || !r.payments || !n || !n.payments || !e)
          throw new Error("No wallet is connected");
        const m = new lu({
          address: r.payments,
          feeRate: d,
          network: t,
          publicKey: n.payments,
          outputs: [
            {
              address: p,
              value: f
            }
          ]
        });
        await m.prepare();
        const B = await xs({
          address: r.payments,
          wallet: e,
          network: t,
          psbt: m.toPSBT()
        });
        if (_) {
          const C = await new _s({ network: t }).relay({ hex: B.hex });
          return a(!1), C;
        }
        return a(!1), B.hex;
      } catch (m) {
        return s(m.message), a(!1), null;
      }
    },
    [r, t, n, e]
  ), error: i, loading: o };
}
function pw() {
  const { wallet: e, network: t, address: r, publicKey: n } = Yt(), [i, s] = Se(!1);
  return { send: nt(
    async ({
      toAddress: a,
      satoshis: l,
      feeRate: p,
      relay: f = !0,
      rbf: d = !1
    }) => {
      s(!0);
      try {
        if (!r || !r.payments || !n || !n.payments || !e)
          throw new Error("No wallet is connected");
        const _ = new lu({
          address: r.payments,
          feeRate: p,
          network: t,
          publicKey: n.payments,
          outputs: [
            {
              address: a,
              value: l
            }
          ]
        });
        _.setRBF(d), await _.prepare();
        const m = await xs({
          address: r.payments,
          wallet: e,
          network: t,
          psbt: _.toPSBT()
        });
        if (f) {
          const I = await new _s({ network: t }).relay({ hex: m.hex });
          return s(!1), {
            txId: I
          };
        }
        return s(!1), {
          signedPsbtHex: m.hex
        };
      } catch (_) {
        return s(!1), {
          error: _.message
        };
      }
    },
    [r, t, n, e]
  ), isLoading: i };
}
var Vu = {}, je = {}, eo = {};
eo.byteLength = O0;
eo.toByteArray = k0;
eo.fromByteArray = N0;
var Xt = [], xt = [], T0 = typeof Uint8Array < "u" ? Uint8Array : Array, Uo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var yn = 0, I0 = Uo.length; yn < I0; ++yn)
  Xt[yn] = Uo[yn], xt[Uo.charCodeAt(yn)] = yn;
xt[45] = 62;
xt[95] = 63;
function qu(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = t);
  var n = r === t ? 0 : 4 - r % 4;
  return [r, n];
}
function O0(e) {
  var t = qu(e), r = t[0], n = t[1];
  return (r + n) * 3 / 4 - n;
}
function P0(e, t, r) {
  return (t + r) * 3 / 4 - r;
}
function k0(e) {
  var t, r = qu(e), n = r[0], i = r[1], s = new T0(P0(e, n, i)), o = 0, a = i > 0 ? n - 4 : n, l;
  for (l = 0; l < a; l += 4)
    t = xt[e.charCodeAt(l)] << 18 | xt[e.charCodeAt(l + 1)] << 12 | xt[e.charCodeAt(l + 2)] << 6 | xt[e.charCodeAt(l + 3)], s[o++] = t >> 16 & 255, s[o++] = t >> 8 & 255, s[o++] = t & 255;
  return i === 2 && (t = xt[e.charCodeAt(l)] << 2 | xt[e.charCodeAt(l + 1)] >> 4, s[o++] = t & 255), i === 1 && (t = xt[e.charCodeAt(l)] << 10 | xt[e.charCodeAt(l + 1)] << 4 | xt[e.charCodeAt(l + 2)] >> 2, s[o++] = t >> 8 & 255, s[o++] = t & 255), s;
}
function A0(e) {
  return Xt[e >> 18 & 63] + Xt[e >> 12 & 63] + Xt[e >> 6 & 63] + Xt[e & 63];
}
function x0(e, t, r) {
  for (var n, i = [], s = t; s < r; s += 3)
    n = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (e[s + 2] & 255), i.push(A0(n));
  return i.join("");
}
function N0(e) {
  for (var t, r = e.length, n = r % 3, i = [], s = 16383, o = 0, a = r - n; o < a; o += s)
    i.push(x0(e, o, o + s > a ? a : o + s));
  return n === 1 ? (t = e[r - 1], i.push(
    Xt[t >> 2] + Xt[t << 4 & 63] + "=="
  )) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], i.push(
    Xt[t >> 10] + Xt[t >> 4 & 63] + Xt[t << 2 & 63] + "="
  )), i.join("");
}
var Ns = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ns.read = function(e, t, r, n, i) {
  var s, o, a = i * 8 - n - 1, l = (1 << a) - 1, p = l >> 1, f = -7, d = r ? i - 1 : 0, _ = r ? -1 : 1, m = e[t + d];
  for (d += _, s = m & (1 << -f) - 1, m >>= -f, f += a; f > 0; s = s * 256 + e[t + d], d += _, f -= 8)
    ;
  for (o = s & (1 << -f) - 1, s >>= -f, f += n; f > 0; o = o * 256 + e[t + d], d += _, f -= 8)
    ;
  if (s === 0)
    s = 1 - p;
  else {
    if (s === l)
      return o ? NaN : (m ? -1 : 1) * (1 / 0);
    o = o + Math.pow(2, n), s = s - p;
  }
  return (m ? -1 : 1) * o * Math.pow(2, s - n);
};
Ns.write = function(e, t, r, n, i, s) {
  var o, a, l, p = s * 8 - i - 1, f = (1 << p) - 1, d = f >> 1, _ = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = n ? 0 : s - 1, B = n ? 1 : -1, I = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = f) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), o + d >= 1 ? t += _ / l : t += _ * Math.pow(2, 1 - d), t * l >= 2 && (o++, l /= 2), o + d >= f ? (a = 0, o = f) : o + d >= 1 ? (a = (t * l - 1) * Math.pow(2, i), o = o + d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); i >= 8; e[r + m] = a & 255, m += B, a /= 256, i -= 8)
    ;
  for (o = o << i | a, p += i; p > 0; e[r + m] = o & 255, m += B, o /= 256, p -= 8)
    ;
  e[r + m - B] |= I * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = eo, r = Ns, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = f, e.SlowBuffer = M, e.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  e.kMaxLength = i;
  const { Uint8Array: s, ArrayBuffer: o, SharedArrayBuffer: a } = globalThis;
  f.TYPED_ARRAY_SUPPORT = l(), !f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function l() {
    try {
      const w = new s(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, s.prototype), Object.setPrototypeOf(w, u), w.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(f.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (f.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(f.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (f.isBuffer(this))
        return this.byteOffset;
    }
  });
  function p(w) {
    if (w > i)
      throw new RangeError('The value "' + w + '" is invalid for option "size"');
    const u = new s(w);
    return Object.setPrototypeOf(u, f.prototype), u;
  }
  function f(w, u, c) {
    if (typeof w == "number") {
      if (typeof u == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return B(w);
    }
    return d(w, u, c);
  }
  f.poolSize = 8192;
  function d(w, u, c) {
    if (typeof w == "string")
      return I(w, u);
    if (o.isView(w))
      return D(w);
    if (w == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof w
      );
    if (bt(w, o) || w && bt(w.buffer, o) || typeof a < "u" && (bt(w, a) || w && bt(w.buffer, a)))
      return b(w, u, c);
    if (typeof w == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const v = w.valueOf && w.valueOf();
    if (v != null && v !== w)
      return f.from(v, u, c);
    const F = A(w);
    if (F) return F;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof w[Symbol.toPrimitive] == "function")
      return f.from(w[Symbol.toPrimitive]("string"), u, c);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof w
    );
  }
  f.from = function(w, u, c) {
    return d(w, u, c);
  }, Object.setPrototypeOf(f.prototype, s.prototype), Object.setPrototypeOf(f, s);
  function _(w) {
    if (typeof w != "number")
      throw new TypeError('"size" argument must be of type number');
    if (w < 0)
      throw new RangeError('The value "' + w + '" is invalid for option "size"');
  }
  function m(w, u, c) {
    return _(w), w <= 0 ? p(w) : u !== void 0 ? typeof c == "string" ? p(w).fill(u, c) : p(w).fill(u) : p(w);
  }
  f.alloc = function(w, u, c) {
    return m(w, u, c);
  };
  function B(w) {
    return _(w), p(w < 0 ? 0 : x(w) | 0);
  }
  f.allocUnsafe = function(w) {
    return B(w);
  }, f.allocUnsafeSlow = function(w) {
    return B(w);
  };
  function I(w, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !f.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    const c = U(w, u) | 0;
    let v = p(c);
    const F = v.write(w, u);
    return F !== c && (v = v.slice(0, F)), v;
  }
  function C(w) {
    const u = w.length < 0 ? 0 : x(w.length) | 0, c = p(u);
    for (let v = 0; v < u; v += 1)
      c[v] = w[v] & 255;
    return c;
  }
  function D(w) {
    if (bt(w, s)) {
      const u = new s(w);
      return b(u.buffer, u.byteOffset, u.byteLength);
    }
    return C(w);
  }
  function b(w, u, c) {
    if (u < 0 || w.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (w.byteLength < u + (c || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let v;
    return u === void 0 && c === void 0 ? v = new s(w) : c === void 0 ? v = new s(w, u) : v = new s(w, u, c), Object.setPrototypeOf(v, f.prototype), v;
  }
  function A(w) {
    if (f.isBuffer(w)) {
      const u = x(w.length) | 0, c = p(u);
      return c.length === 0 || w.copy(c, 0, 0, u), c;
    }
    if (w.length !== void 0)
      return typeof w.length != "number" || dn(w.length) ? p(0) : C(w);
    if (w.type === "Buffer" && Array.isArray(w.data))
      return C(w.data);
  }
  function x(w) {
    if (w >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return w | 0;
  }
  function M(w) {
    return +w != w && (w = 0), f.alloc(+w);
  }
  f.isBuffer = function(u) {
    return u != null && u._isBuffer === !0 && u !== f.prototype;
  }, f.compare = function(u, c) {
    if (bt(u, s) && (u = f.from(u, u.offset, u.byteLength)), bt(c, s) && (c = f.from(c, c.offset, c.byteLength)), !f.isBuffer(u) || !f.isBuffer(c))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (u === c) return 0;
    let v = u.length, F = c.length;
    for (let $ = 0, K = Math.min(v, F); $ < K; ++$)
      if (u[$] !== c[$]) {
        v = u[$], F = c[$];
        break;
      }
    return v < F ? -1 : F < v ? 1 : 0;
  }, f.isEncoding = function(u) {
    switch (String(u).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, f.concat = function(u, c) {
    if (!Array.isArray(u))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0)
      return f.alloc(0);
    let v;
    if (c === void 0)
      for (c = 0, v = 0; v < u.length; ++v)
        c += u[v].length;
    const F = f.allocUnsafe(c);
    let $ = 0;
    for (v = 0; v < u.length; ++v) {
      let K = u[v];
      if (bt(K, s))
        $ + K.length > F.length ? (f.isBuffer(K) || (K = f.from(K)), K.copy(F, $)) : s.prototype.set.call(
          F,
          K,
          $
        );
      else if (f.isBuffer(K))
        K.copy(F, $);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      $ += K.length;
    }
    return F;
  };
  function U(w, u) {
    if (f.isBuffer(w))
      return w.length;
    if (o.isView(w) || bt(w, o))
      return w.byteLength;
    if (typeof w != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof w
      );
    const c = w.length, v = arguments.length > 2 && arguments[2] === !0;
    if (!v && c === 0) return 0;
    let F = !1;
    for (; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return c;
        case "utf8":
        case "utf-8":
          return Fn(w).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return c * 2;
        case "hex":
          return c >>> 1;
        case "base64":
          return hi(w).length;
        default:
          if (F)
            return v ? -1 : Fn(w).length;
          u = ("" + u).toLowerCase(), F = !0;
      }
  }
  f.byteLength = U;
  function W(w, u, c) {
    let v = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((c === void 0 || c > this.length) && (c = this.length), c <= 0) || (c >>>= 0, u >>>= 0, c <= u))
      return "";
    for (w || (w = "utf8"); ; )
      switch (w) {
        case "hex":
          return Q(this, u, c);
        case "utf8":
        case "utf-8":
          return R(this, u, c);
        case "ascii":
          return V(this, u, c);
        case "latin1":
        case "binary":
          return X(this, u, c);
        case "base64":
          return O(this, u, c);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return de(this, u, c);
        default:
          if (v) throw new TypeError("Unknown encoding: " + w);
          w = (w + "").toLowerCase(), v = !0;
      }
  }
  f.prototype._isBuffer = !0;
  function g(w, u, c) {
    const v = w[u];
    w[u] = w[c], w[c] = v;
  }
  f.prototype.swap16 = function() {
    const u = this.length;
    if (u % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let c = 0; c < u; c += 2)
      g(this, c, c + 1);
    return this;
  }, f.prototype.swap32 = function() {
    const u = this.length;
    if (u % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let c = 0; c < u; c += 4)
      g(this, c, c + 3), g(this, c + 1, c + 2);
    return this;
  }, f.prototype.swap64 = function() {
    const u = this.length;
    if (u % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let c = 0; c < u; c += 8)
      g(this, c, c + 7), g(this, c + 1, c + 6), g(this, c + 2, c + 5), g(this, c + 3, c + 4);
    return this;
  }, f.prototype.toString = function() {
    const u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? R(this, 0, u) : W.apply(this, arguments);
  }, f.prototype.toLocaleString = f.prototype.toString, f.prototype.equals = function(u) {
    if (!f.isBuffer(u)) throw new TypeError("Argument must be a Buffer");
    return this === u ? !0 : f.compare(this, u) === 0;
  }, f.prototype.inspect = function() {
    let u = "";
    const c = e.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, c).replace(/(.{2})/g, "$1 ").trim(), this.length > c && (u += " ... "), "<Buffer " + u + ">";
  }, n && (f.prototype[n] = f.prototype.inspect), f.prototype.compare = function(u, c, v, F, $) {
    if (bt(u, s) && (u = f.from(u, u.offset, u.byteLength)), !f.isBuffer(u))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
      );
    if (c === void 0 && (c = 0), v === void 0 && (v = u ? u.length : 0), F === void 0 && (F = 0), $ === void 0 && ($ = this.length), c < 0 || v > u.length || F < 0 || $ > this.length)
      throw new RangeError("out of range index");
    if (F >= $ && c >= v)
      return 0;
    if (F >= $)
      return -1;
    if (c >= v)
      return 1;
    if (c >>>= 0, v >>>= 0, F >>>= 0, $ >>>= 0, this === u) return 0;
    let K = $ - F, ie = v - c;
    const ke = Math.min(K, ie), ye = this.slice(F, $), Te = u.slice(c, v);
    for (let ce = 0; ce < ke; ++ce)
      if (ye[ce] !== Te[ce]) {
        K = ye[ce], ie = Te[ce];
        break;
      }
    return K < ie ? -1 : ie < K ? 1 : 0;
  };
  function h(w, u, c, v, F) {
    if (w.length === 0) return -1;
    if (typeof c == "string" ? (v = c, c = 0) : c > 2147483647 ? c = 2147483647 : c < -2147483648 && (c = -2147483648), c = +c, dn(c) && (c = F ? 0 : w.length - 1), c < 0 && (c = w.length + c), c >= w.length) {
      if (F) return -1;
      c = w.length - 1;
    } else if (c < 0)
      if (F) c = 0;
      else return -1;
    if (typeof u == "string" && (u = f.from(u, v)), f.isBuffer(u))
      return u.length === 0 ? -1 : E(w, u, c, v, F);
    if (typeof u == "number")
      return u = u & 255, typeof s.prototype.indexOf == "function" ? F ? s.prototype.indexOf.call(w, u, c) : s.prototype.lastIndexOf.call(w, u, c) : E(w, [u], c, v, F);
    throw new TypeError("val must be string, number or Buffer");
  }
  function E(w, u, c, v, F) {
    let $ = 1, K = w.length, ie = u.length;
    if (v !== void 0 && (v = String(v).toLowerCase(), v === "ucs2" || v === "ucs-2" || v === "utf16le" || v === "utf-16le")) {
      if (w.length < 2 || u.length < 2)
        return -1;
      $ = 2, K /= 2, ie /= 2, c /= 2;
    }
    function ke(Te, ce) {
      return $ === 1 ? Te[ce] : Te.readUInt16BE(ce * $);
    }
    let ye;
    if (F) {
      let Te = -1;
      for (ye = c; ye < K; ye++)
        if (ke(w, ye) === ke(u, Te === -1 ? 0 : ye - Te)) {
          if (Te === -1 && (Te = ye), ye - Te + 1 === ie) return Te * $;
        } else
          Te !== -1 && (ye -= ye - Te), Te = -1;
    } else
      for (c + ie > K && (c = K - ie), ye = c; ye >= 0; ye--) {
        let Te = !0;
        for (let ce = 0; ce < ie; ce++)
          if (ke(w, ye + ce) !== ke(u, ce)) {
            Te = !1;
            break;
          }
        if (Te) return ye;
      }
    return -1;
  }
  f.prototype.includes = function(u, c, v) {
    return this.indexOf(u, c, v) !== -1;
  }, f.prototype.indexOf = function(u, c, v) {
    return h(this, u, c, v, !0);
  }, f.prototype.lastIndexOf = function(u, c, v) {
    return h(this, u, c, v, !1);
  };
  function N(w, u, c, v) {
    c = Number(c) || 0;
    const F = w.length - c;
    v ? (v = Number(v), v > F && (v = F)) : v = F;
    const $ = u.length;
    v > $ / 2 && (v = $ / 2);
    let K;
    for (K = 0; K < v; ++K) {
      const ie = parseInt(u.substr(K * 2, 2), 16);
      if (dn(ie)) return K;
      w[c + K] = ie;
    }
    return K;
  }
  function y(w, u, c, v) {
    return hn(Fn(u, w.length - c), w, c, v);
  }
  function S(w, u, c, v) {
    return hn(So(u), w, c, v);
  }
  function k(w, u, c, v) {
    return hn(hi(u), w, c, v);
  }
  function T(w, u, c, v) {
    return hn(Rn(u, w.length - c), w, c, v);
  }
  f.prototype.write = function(u, c, v, F) {
    if (c === void 0)
      F = "utf8", v = this.length, c = 0;
    else if (v === void 0 && typeof c == "string")
      F = c, v = this.length, c = 0;
    else if (isFinite(c))
      c = c >>> 0, isFinite(v) ? (v = v >>> 0, F === void 0 && (F = "utf8")) : (F = v, v = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const $ = this.length - c;
    if ((v === void 0 || v > $) && (v = $), u.length > 0 && (v < 0 || c < 0) || c > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    F || (F = "utf8");
    let K = !1;
    for (; ; )
      switch (F) {
        case "hex":
          return N(this, u, c, v);
        case "utf8":
        case "utf-8":
          return y(this, u, c, v);
        case "ascii":
        case "latin1":
        case "binary":
          return S(this, u, c, v);
        case "base64":
          return k(this, u, c, v);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return T(this, u, c, v);
        default:
          if (K) throw new TypeError("Unknown encoding: " + F);
          F = ("" + F).toLowerCase(), K = !0;
      }
  }, f.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function O(w, u, c) {
    return u === 0 && c === w.length ? t.fromByteArray(w) : t.fromByteArray(w.slice(u, c));
  }
  function R(w, u, c) {
    c = Math.min(w.length, c);
    const v = [];
    let F = u;
    for (; F < c; ) {
      const $ = w[F];
      let K = null, ie = $ > 239 ? 4 : $ > 223 ? 3 : $ > 191 ? 2 : 1;
      if (F + ie <= c) {
        let ke, ye, Te, ce;
        switch (ie) {
          case 1:
            $ < 128 && (K = $);
            break;
          case 2:
            ke = w[F + 1], (ke & 192) === 128 && (ce = ($ & 31) << 6 | ke & 63, ce > 127 && (K = ce));
            break;
          case 3:
            ke = w[F + 1], ye = w[F + 2], (ke & 192) === 128 && (ye & 192) === 128 && (ce = ($ & 15) << 12 | (ke & 63) << 6 | ye & 63, ce > 2047 && (ce < 55296 || ce > 57343) && (K = ce));
            break;
          case 4:
            ke = w[F + 1], ye = w[F + 2], Te = w[F + 3], (ke & 192) === 128 && (ye & 192) === 128 && (Te & 192) === 128 && (ce = ($ & 15) << 18 | (ke & 63) << 12 | (ye & 63) << 6 | Te & 63, ce > 65535 && ce < 1114112 && (K = ce));
        }
      }
      K === null ? (K = 65533, ie = 1) : K > 65535 && (K -= 65536, v.push(K >>> 10 & 1023 | 55296), K = 56320 | K & 1023), v.push(K), F += ie;
    }
    return j(v);
  }
  const L = 4096;
  function j(w) {
    const u = w.length;
    if (u <= L)
      return String.fromCharCode.apply(String, w);
    let c = "", v = 0;
    for (; v < u; )
      c += String.fromCharCode.apply(
        String,
        w.slice(v, v += L)
      );
    return c;
  }
  function V(w, u, c) {
    let v = "";
    c = Math.min(w.length, c);
    for (let F = u; F < c; ++F)
      v += String.fromCharCode(w[F] & 127);
    return v;
  }
  function X(w, u, c) {
    let v = "";
    c = Math.min(w.length, c);
    for (let F = u; F < c; ++F)
      v += String.fromCharCode(w[F]);
    return v;
  }
  function Q(w, u, c) {
    const v = w.length;
    (!u || u < 0) && (u = 0), (!c || c < 0 || c > v) && (c = v);
    let F = "";
    for (let $ = u; $ < c; ++$)
      F += Lr[w[$]];
    return F;
  }
  function de(w, u, c) {
    const v = w.slice(u, c);
    let F = "";
    for (let $ = 0; $ < v.length - 1; $ += 2)
      F += String.fromCharCode(v[$] + v[$ + 1] * 256);
    return F;
  }
  f.prototype.slice = function(u, c) {
    const v = this.length;
    u = ~~u, c = c === void 0 ? v : ~~c, u < 0 ? (u += v, u < 0 && (u = 0)) : u > v && (u = v), c < 0 ? (c += v, c < 0 && (c = 0)) : c > v && (c = v), c < u && (c = u);
    const F = this.subarray(u, c);
    return Object.setPrototypeOf(F, f.prototype), F;
  };
  function Y(w, u, c) {
    if (w % 1 !== 0 || w < 0) throw new RangeError("offset is not uint");
    if (w + u > c) throw new RangeError("Trying to access beyond buffer length");
  }
  f.prototype.readUintLE = f.prototype.readUIntLE = function(u, c, v) {
    u = u >>> 0, c = c >>> 0, v || Y(u, c, this.length);
    let F = this[u], $ = 1, K = 0;
    for (; ++K < c && ($ *= 256); )
      F += this[u + K] * $;
    return F;
  }, f.prototype.readUintBE = f.prototype.readUIntBE = function(u, c, v) {
    u = u >>> 0, c = c >>> 0, v || Y(u, c, this.length);
    let F = this[u + --c], $ = 1;
    for (; c > 0 && ($ *= 256); )
      F += this[u + --c] * $;
    return F;
  }, f.prototype.readUint8 = f.prototype.readUInt8 = function(u, c) {
    return u = u >>> 0, c || Y(u, 1, this.length), this[u];
  }, f.prototype.readUint16LE = f.prototype.readUInt16LE = function(u, c) {
    return u = u >>> 0, c || Y(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, f.prototype.readUint16BE = f.prototype.readUInt16BE = function(u, c) {
    return u = u >>> 0, c || Y(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, f.prototype.readUint32LE = f.prototype.readUInt32LE = function(u, c) {
    return u = u >>> 0, c || Y(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, f.prototype.readUint32BE = f.prototype.readUInt32BE = function(u, c) {
    return u = u >>> 0, c || Y(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, f.prototype.readBigUInt64LE = Mt(function(u) {
    u = u >>> 0, _t(u, "offset");
    const c = this[u], v = this[u + 7];
    (c === void 0 || v === void 0) && wr(u, this.length - 8);
    const F = c + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, $ = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + v * 2 ** 24;
    return BigInt(F) + (BigInt($) << BigInt(32));
  }), f.prototype.readBigUInt64BE = Mt(function(u) {
    u = u >>> 0, _t(u, "offset");
    const c = this[u], v = this[u + 7];
    (c === void 0 || v === void 0) && wr(u, this.length - 8);
    const F = c * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], $ = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + v;
    return (BigInt(F) << BigInt(32)) + BigInt($);
  }), f.prototype.readIntLE = function(u, c, v) {
    u = u >>> 0, c = c >>> 0, v || Y(u, c, this.length);
    let F = this[u], $ = 1, K = 0;
    for (; ++K < c && ($ *= 256); )
      F += this[u + K] * $;
    return $ *= 128, F >= $ && (F -= Math.pow(2, 8 * c)), F;
  }, f.prototype.readIntBE = function(u, c, v) {
    u = u >>> 0, c = c >>> 0, v || Y(u, c, this.length);
    let F = c, $ = 1, K = this[u + --F];
    for (; F > 0 && ($ *= 256); )
      K += this[u + --F] * $;
    return $ *= 128, K >= $ && (K -= Math.pow(2, 8 * c)), K;
  }, f.prototype.readInt8 = function(u, c) {
    return u = u >>> 0, c || Y(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, f.prototype.readInt16LE = function(u, c) {
    u = u >>> 0, c || Y(u, 2, this.length);
    const v = this[u] | this[u + 1] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, f.prototype.readInt16BE = function(u, c) {
    u = u >>> 0, c || Y(u, 2, this.length);
    const v = this[u + 1] | this[u] << 8;
    return v & 32768 ? v | 4294901760 : v;
  }, f.prototype.readInt32LE = function(u, c) {
    return u = u >>> 0, c || Y(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, f.prototype.readInt32BE = function(u, c) {
    return u = u >>> 0, c || Y(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, f.prototype.readBigInt64LE = Mt(function(u) {
    u = u >>> 0, _t(u, "offset");
    const c = this[u], v = this[u + 7];
    (c === void 0 || v === void 0) && wr(u, this.length - 8);
    const F = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (v << 24);
    return (BigInt(F) << BigInt(32)) + BigInt(c + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
  }), f.prototype.readBigInt64BE = Mt(function(u) {
    u = u >>> 0, _t(u, "offset");
    const c = this[u], v = this[u + 7];
    (c === void 0 || v === void 0) && wr(u, this.length - 8);
    const F = (c << 24) + // Overflow
    this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
    return (BigInt(F) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + v);
  }), f.prototype.readFloatLE = function(u, c) {
    return u = u >>> 0, c || Y(u, 4, this.length), r.read(this, u, !0, 23, 4);
  }, f.prototype.readFloatBE = function(u, c) {
    return u = u >>> 0, c || Y(u, 4, this.length), r.read(this, u, !1, 23, 4);
  }, f.prototype.readDoubleLE = function(u, c) {
    return u = u >>> 0, c || Y(u, 8, this.length), r.read(this, u, !0, 52, 8);
  }, f.prototype.readDoubleBE = function(u, c) {
    return u = u >>> 0, c || Y(u, 8, this.length), r.read(this, u, !1, 52, 8);
  };
  function J(w, u, c, v, F, $) {
    if (!f.isBuffer(w)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > F || u < $) throw new RangeError('"value" argument is out of bounds');
    if (c + v > w.length) throw new RangeError("Index out of range");
  }
  f.prototype.writeUintLE = f.prototype.writeUIntLE = function(u, c, v, F) {
    if (u = +u, c = c >>> 0, v = v >>> 0, !F) {
      const ie = Math.pow(2, 8 * v) - 1;
      J(this, u, c, v, ie, 0);
    }
    let $ = 1, K = 0;
    for (this[c] = u & 255; ++K < v && ($ *= 256); )
      this[c + K] = u / $ & 255;
    return c + v;
  }, f.prototype.writeUintBE = f.prototype.writeUIntBE = function(u, c, v, F) {
    if (u = +u, c = c >>> 0, v = v >>> 0, !F) {
      const ie = Math.pow(2, 8 * v) - 1;
      J(this, u, c, v, ie, 0);
    }
    let $ = v - 1, K = 1;
    for (this[c + $] = u & 255; --$ >= 0 && (K *= 256); )
      this[c + $] = u / K & 255;
    return c + v;
  }, f.prototype.writeUint8 = f.prototype.writeUInt8 = function(u, c, v) {
    return u = +u, c = c >>> 0, v || J(this, u, c, 1, 255, 0), this[c] = u & 255, c + 1;
  }, f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(u, c, v) {
    return u = +u, c = c >>> 0, v || J(this, u, c, 2, 65535, 0), this[c] = u & 255, this[c + 1] = u >>> 8, c + 2;
  }, f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(u, c, v) {
    return u = +u, c = c >>> 0, v || J(this, u, c, 2, 65535, 0), this[c] = u >>> 8, this[c + 1] = u & 255, c + 2;
  }, f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(u, c, v) {
    return u = +u, c = c >>> 0, v || J(this, u, c, 4, 4294967295, 0), this[c + 3] = u >>> 24, this[c + 2] = u >>> 16, this[c + 1] = u >>> 8, this[c] = u & 255, c + 4;
  }, f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(u, c, v) {
    return u = +u, c = c >>> 0, v || J(this, u, c, 4, 4294967295, 0), this[c] = u >>> 24, this[c + 1] = u >>> 16, this[c + 2] = u >>> 8, this[c + 3] = u & 255, c + 4;
  };
  function se(w, u, c, v, F) {
    ge(u, v, F, w, c, 7);
    let $ = Number(u & BigInt(4294967295));
    w[c++] = $, $ = $ >> 8, w[c++] = $, $ = $ >> 8, w[c++] = $, $ = $ >> 8, w[c++] = $;
    let K = Number(u >> BigInt(32) & BigInt(4294967295));
    return w[c++] = K, K = K >> 8, w[c++] = K, K = K >> 8, w[c++] = K, K = K >> 8, w[c++] = K, c;
  }
  function _e(w, u, c, v, F) {
    ge(u, v, F, w, c, 7);
    let $ = Number(u & BigInt(4294967295));
    w[c + 7] = $, $ = $ >> 8, w[c + 6] = $, $ = $ >> 8, w[c + 5] = $, $ = $ >> 8, w[c + 4] = $;
    let K = Number(u >> BigInt(32) & BigInt(4294967295));
    return w[c + 3] = K, K = K >> 8, w[c + 2] = K, K = K >> 8, w[c + 1] = K, K = K >> 8, w[c] = K, c + 8;
  }
  f.prototype.writeBigUInt64LE = Mt(function(u, c = 0) {
    return se(this, u, c, BigInt(0), BigInt("0xffffffffffffffff"));
  }), f.prototype.writeBigUInt64BE = Mt(function(u, c = 0) {
    return _e(this, u, c, BigInt(0), BigInt("0xffffffffffffffff"));
  }), f.prototype.writeIntLE = function(u, c, v, F) {
    if (u = +u, c = c >>> 0, !F) {
      const ke = Math.pow(2, 8 * v - 1);
      J(this, u, c, v, ke - 1, -ke);
    }
    let $ = 0, K = 1, ie = 0;
    for (this[c] = u & 255; ++$ < v && (K *= 256); )
      u < 0 && ie === 0 && this[c + $ - 1] !== 0 && (ie = 1), this[c + $] = (u / K >> 0) - ie & 255;
    return c + v;
  }, f.prototype.writeIntBE = function(u, c, v, F) {
    if (u = +u, c = c >>> 0, !F) {
      const ke = Math.pow(2, 8 * v - 1);
      J(this, u, c, v, ke - 1, -ke);
    }
    let $ = v - 1, K = 1, ie = 0;
    for (this[c + $] = u & 255; --$ >= 0 && (K *= 256); )
      u < 0 && ie === 0 && this[c + $ + 1] !== 0 && (ie = 1), this[c + $] = (u / K >> 0) - ie & 255;
    return c + v;
  }, f.prototype.writeInt8 = function(u, c, v) {
    return u = +u, c = c >>> 0, v || J(this, u, c, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[c] = u & 255, c + 1;
  }, f.prototype.writeInt16LE = function(u, c, v) {
    return u = +u, c = c >>> 0, v || J(this, u, c, 2, 32767, -32768), this[c] = u & 255, this[c + 1] = u >>> 8, c + 2;
  }, f.prototype.writeInt16BE = function(u, c, v) {
    return u = +u, c = c >>> 0, v || J(this, u, c, 2, 32767, -32768), this[c] = u >>> 8, this[c + 1] = u & 255, c + 2;
  }, f.prototype.writeInt32LE = function(u, c, v) {
    return u = +u, c = c >>> 0, v || J(this, u, c, 4, 2147483647, -2147483648), this[c] = u & 255, this[c + 1] = u >>> 8, this[c + 2] = u >>> 16, this[c + 3] = u >>> 24, c + 4;
  }, f.prototype.writeInt32BE = function(u, c, v) {
    return u = +u, c = c >>> 0, v || J(this, u, c, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[c] = u >>> 24, this[c + 1] = u >>> 16, this[c + 2] = u >>> 8, this[c + 3] = u & 255, c + 4;
  }, f.prototype.writeBigInt64LE = Mt(function(u, c = 0) {
    return se(this, u, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), f.prototype.writeBigInt64BE = Mt(function(u, c = 0) {
    return _e(this, u, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function dt(w, u, c, v, F, $) {
    if (c + v > w.length) throw new RangeError("Index out of range");
    if (c < 0) throw new RangeError("Index out of range");
  }
  function mt(w, u, c, v, F) {
    return u = +u, c = c >>> 0, F || dt(w, u, c, 4), r.write(w, u, c, v, 23, 4), c + 4;
  }
  f.prototype.writeFloatLE = function(u, c, v) {
    return mt(this, u, c, !0, v);
  }, f.prototype.writeFloatBE = function(u, c, v) {
    return mt(this, u, c, !1, v);
  };
  function Et(w, u, c, v, F) {
    return u = +u, c = c >>> 0, F || dt(w, u, c, 8), r.write(w, u, c, v, 52, 8), c + 8;
  }
  f.prototype.writeDoubleLE = function(u, c, v) {
    return Et(this, u, c, !0, v);
  }, f.prototype.writeDoubleBE = function(u, c, v) {
    return Et(this, u, c, !1, v);
  }, f.prototype.copy = function(u, c, v, F) {
    if (!f.isBuffer(u)) throw new TypeError("argument should be a Buffer");
    if (v || (v = 0), !F && F !== 0 && (F = this.length), c >= u.length && (c = u.length), c || (c = 0), F > 0 && F < v && (F = v), F === v || u.length === 0 || this.length === 0) return 0;
    if (c < 0)
      throw new RangeError("targetStart out of bounds");
    if (v < 0 || v >= this.length) throw new RangeError("Index out of range");
    if (F < 0) throw new RangeError("sourceEnd out of bounds");
    F > this.length && (F = this.length), u.length - c < F - v && (F = u.length - c + v);
    const $ = F - v;
    return this === u && typeof s.prototype.copyWithin == "function" ? this.copyWithin(c, v, F) : s.prototype.set.call(
      u,
      this.subarray(v, F),
      c
    ), $;
  }, f.prototype.fill = function(u, c, v, F) {
    if (typeof u == "string") {
      if (typeof c == "string" ? (F = c, c = 0, v = this.length) : typeof v == "string" && (F = v, v = this.length), F !== void 0 && typeof F != "string")
        throw new TypeError("encoding must be a string");
      if (typeof F == "string" && !f.isEncoding(F))
        throw new TypeError("Unknown encoding: " + F);
      if (u.length === 1) {
        const K = u.charCodeAt(0);
        (F === "utf8" && K < 128 || F === "latin1") && (u = K);
      }
    } else typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (c < 0 || this.length < c || this.length < v)
      throw new RangeError("Out of range index");
    if (v <= c)
      return this;
    c = c >>> 0, v = v === void 0 ? this.length : v >>> 0, u || (u = 0);
    let $;
    if (typeof u == "number")
      for ($ = c; $ < v; ++$)
        this[$] = u;
    else {
      const K = f.isBuffer(u) ? u : f.from(u, F), ie = K.length;
      if (ie === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for ($ = 0; $ < v - c; ++$)
        this[$ + c] = K[$ % ie];
    }
    return this;
  };
  const te = {};
  function Be(w, u, c) {
    te[w] = class extends c {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: u.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${w}]`, this.stack, delete this.name;
      }
      get code() {
        return w;
      }
      set code(F) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: F,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${w}]: ${this.message}`;
      }
    };
  }
  Be(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(w) {
      return w ? `${w} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Be(
    "ERR_INVALID_ARG_TYPE",
    function(w, u) {
      return `The "${w}" argument must be of type number. Received type ${typeof u}`;
    },
    TypeError
  ), Be(
    "ERR_OUT_OF_RANGE",
    function(w, u, c) {
      let v = `The value of "${w}" is out of range.`, F = c;
      return Number.isInteger(c) && Math.abs(c) > 2 ** 32 ? F = pe(String(c)) : typeof c == "bigint" && (F = String(c), (c > BigInt(2) ** BigInt(32) || c < -(BigInt(2) ** BigInt(32))) && (F = pe(F)), F += "n"), v += ` It must be ${u}. Received ${F}`, v;
    },
    RangeError
  );
  function pe(w) {
    let u = "", c = w.length;
    const v = w[0] === "-" ? 1 : 0;
    for (; c >= v + 4; c -= 3)
      u = `_${w.slice(c - 3, c)}${u}`;
    return `${w.slice(0, c)}${u}`;
  }
  function Pe(w, u, c) {
    _t(u, "offset"), (w[u] === void 0 || w[u + c] === void 0) && wr(u, w.length - (c + 1));
  }
  function ge(w, u, c, v, F, $) {
    if (w > c || w < u) {
      const K = typeof u == "bigint" ? "n" : "";
      let ie;
      throw u === 0 || u === BigInt(0) ? ie = `>= 0${K} and < 2${K} ** ${($ + 1) * 8}${K}` : ie = `>= -(2${K} ** ${($ + 1) * 8 - 1}${K}) and < 2 ** ${($ + 1) * 8 - 1}${K}`, new te.ERR_OUT_OF_RANGE("value", ie, w);
    }
    Pe(v, F, $);
  }
  function _t(w, u) {
    if (typeof w != "number")
      throw new te.ERR_INVALID_ARG_TYPE(u, "number", w);
  }
  function wr(w, u, c) {
    throw Math.floor(w) !== w ? (_t(w, c), new te.ERR_OUT_OF_RANGE("offset", "an integer", w)) : u < 0 ? new te.ERR_BUFFER_OUT_OF_BOUNDS() : new te.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${u}`,
      w
    );
  }
  const fi = /[^+/0-9A-Za-z-_]/g;
  function fn(w) {
    if (w = w.split("=")[0], w = w.trim().replace(fi, ""), w.length < 2) return "";
    for (; w.length % 4 !== 0; )
      w = w + "=";
    return w;
  }
  function Fn(w, u) {
    u = u || 1 / 0;
    let c;
    const v = w.length;
    let F = null;
    const $ = [];
    for (let K = 0; K < v; ++K) {
      if (c = w.charCodeAt(K), c > 55295 && c < 57344) {
        if (!F) {
          if (c > 56319) {
            (u -= 3) > -1 && $.push(239, 191, 189);
            continue;
          } else if (K + 1 === v) {
            (u -= 3) > -1 && $.push(239, 191, 189);
            continue;
          }
          F = c;
          continue;
        }
        if (c < 56320) {
          (u -= 3) > -1 && $.push(239, 191, 189), F = c;
          continue;
        }
        c = (F - 55296 << 10 | c - 56320) + 65536;
      } else F && (u -= 3) > -1 && $.push(239, 191, 189);
      if (F = null, c < 128) {
        if ((u -= 1) < 0) break;
        $.push(c);
      } else if (c < 2048) {
        if ((u -= 2) < 0) break;
        $.push(
          c >> 6 | 192,
          c & 63 | 128
        );
      } else if (c < 65536) {
        if ((u -= 3) < 0) break;
        $.push(
          c >> 12 | 224,
          c >> 6 & 63 | 128,
          c & 63 | 128
        );
      } else if (c < 1114112) {
        if ((u -= 4) < 0) break;
        $.push(
          c >> 18 | 240,
          c >> 12 & 63 | 128,
          c >> 6 & 63 | 128,
          c & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return $;
  }
  function So(w) {
    const u = [];
    for (let c = 0; c < w.length; ++c)
      u.push(w.charCodeAt(c) & 255);
    return u;
  }
  function Rn(w, u) {
    let c, v, F;
    const $ = [];
    for (let K = 0; K < w.length && !((u -= 2) < 0); ++K)
      c = w.charCodeAt(K), v = c >> 8, F = c % 256, $.push(F), $.push(v);
    return $;
  }
  function hi(w) {
    return t.toByteArray(fn(w));
  }
  function hn(w, u, c, v) {
    let F;
    for (F = 0; F < v && !(F + c >= u.length || F >= w.length); ++F)
      u[F + c] = w[F];
    return F;
  }
  function bt(w, u) {
    return w instanceof u || w != null && w.constructor != null && w.constructor.name != null && w.constructor.name === u.name;
  }
  function dn(w) {
    return w !== w;
  }
  const Lr = function() {
    const w = "0123456789abcdef", u = new Array(256);
    for (let c = 0; c < 16; ++c) {
      const v = c * 16;
      for (let F = 0; F < 16; ++F)
        u[v + F] = w[c] + w[F];
    }
    return u;
  }();
  function Mt(w) {
    return typeof BigInt > "u" ? di : w;
  }
  function di() {
    throw new Error("BigInt not supported");
  }
})(je);
const H = je.Buffer, B0 = je.Blob, C0 = je.BlobOptions, F0 = je.Buffer, R0 = je.File, U0 = je.FileOptions, L0 = je.INSPECT_MAX_BYTES, H0 = je.SlowBuffer, M0 = je.TranscodeEncoding, $0 = je.atob, D0 = je.btoa, j0 = je.constants, K0 = je.isAscii, W0 = je.isUtf8, G0 = je.kMaxLength, V0 = je.kStringMaxLength, q0 = je.resolveObjectURL, X0 = je.transcode, z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Blob: B0,
  BlobOptions: C0,
  Buffer: F0,
  File: R0,
  FileOptions: U0,
  INSPECT_MAX_BYTES: L0,
  SlowBuffer: H0,
  TranscodeEncoding: M0,
  atob: $0,
  btoa: D0,
  constants: j0,
  default: H,
  isAscii: K0,
  isUtf8: W0,
  kMaxLength: G0,
  kStringMaxLength: V0,
  resolveObjectURL: q0,
  transcode: X0
}, Symbol.toStringTag, { value: "Module" }));
var st = {}, Xe = {};
Object.defineProperty(Xe, "__esModule", { value: !0 });
Xe.testnet = Xe.regtest = Xe.bitcoin = void 0;
Xe.bitcoin = {
  /**
   * The message prefix used for signing Bitcoin messages.
   */
  messagePrefix: `Bitcoin Signed Message:
`,
  /**
   * The Bech32 prefix used for Bitcoin addresses.
   */
  bech32: "bc",
  /**
   * The BIP32 key prefixes for Bitcoin.
   */
  bip32: {
    /**
     * The public key prefix for BIP32 extended public keys.
     */
    public: 76067358,
    /**
     * The private key prefix for BIP32 extended private keys.
     */
    private: 76066276
  },
  /**
   * The prefix for Bitcoin public key hashes.
   */
  pubKeyHash: 0,
  /**
   * The prefix for Bitcoin script hashes.
   */
  scriptHash: 5,
  /**
   * The prefix for Bitcoin Wallet Import Format (WIF) private keys.
   */
  wif: 128
};
Xe.regtest = {
  messagePrefix: `Bitcoin Signed Message:
`,
  bech32: "bcrt",
  bip32: {
    public: 70617039,
    private: 70615956
  },
  pubKeyHash: 111,
  scriptHash: 196,
  wif: 239
};
Xe.testnet = {
  messagePrefix: `Bitcoin Signed Message:
`,
  bech32: "tb",
  bip32: {
    public: 70617039,
    private: 70615956
  },
  pubKeyHash: 111,
  scriptHash: 196,
  wif: 239
};
var Lo = {}, to = {}, Ho = {}, lr = {};
Object.defineProperty(lr, "__esModule", { value: !0 });
lr.encode = lr.decode = lr.check = void 0;
function Y0(e) {
  if (e.length < 8 || e.length > 72 || e[0] !== 48 || e[1] !== e.length - 2 || e[2] !== 2) return !1;
  const t = e[3];
  if (t === 0 || 5 + t >= e.length || e[4 + t] !== 2) return !1;
  const r = e[5 + t];
  return !(r === 0 || 6 + t + r !== e.length || e[4] & 128 || t > 1 && e[4] === 0 && !(e[5] & 128) || e[t + 6] & 128 || r > 1 && e[t + 6] === 0 && !(e[t + 7] & 128));
}
lr.check = Y0;
function J0(e) {
  if (e.length < 8) throw new Error("DER sequence length is too short");
  if (e.length > 72) throw new Error("DER sequence length is too long");
  if (e[0] !== 48) throw new Error("Expected DER sequence");
  if (e[1] !== e.length - 2)
    throw new Error("DER sequence length is invalid");
  if (e[2] !== 2) throw new Error("Expected DER integer");
  const t = e[3];
  if (t === 0) throw new Error("R length is zero");
  if (5 + t >= e.length) throw new Error("R length is too long");
  if (e[4 + t] !== 2) throw new Error("Expected DER integer (2)");
  const r = e[5 + t];
  if (r === 0) throw new Error("S length is zero");
  if (6 + t + r !== e.length) throw new Error("S length is invalid");
  if (e[4] & 128) throw new Error("R value is negative");
  if (t > 1 && e[4] === 0 && !(e[5] & 128))
    throw new Error("R value excessively padded");
  if (e[t + 6] & 128) throw new Error("S value is negative");
  if (r > 1 && e[t + 6] === 0 && !(e[t + 7] & 128))
    throw new Error("S value excessively padded");
  return {
    r: e.slice(4, 4 + t),
    s: e.slice(6 + t)
  };
}
lr.decode = J0;
function Q0(e, t) {
  const r = e.length, n = t.length;
  if (r === 0) throw new Error("R length is zero");
  if (n === 0) throw new Error("S length is zero");
  if (r > 33) throw new Error("R length is too long");
  if (n > 33) throw new Error("S length is too long");
  if (e[0] & 128) throw new Error("R value is negative");
  if (t[0] & 128) throw new Error("S value is negative");
  if (r > 1 && e[0] === 0 && !(e[1] & 128))
    throw new Error("R value excessively padded");
  if (n > 1 && t[0] === 0 && !(t[1] & 128))
    throw new Error("S value excessively padded");
  const i = H.allocUnsafe(6 + r + n);
  return i[0] = 48, i[1] = i.length - 2, i[2] = 2, i[3] = e.length, e.copy(i, 4), i[4 + r] = 2, i[5 + r] = t.length, t.copy(i, 6 + r), i;
}
lr.encode = Q0;
var Cr = {};
Object.defineProperty(Cr, "__esModule", { value: !0 });
Cr.REVERSE_OPS = Cr.OPS = void 0;
const gs = {
  OP_FALSE: 0,
  OP_0: 0,
  OP_PUSHDATA1: 76,
  OP_PUSHDATA2: 77,
  OP_PUSHDATA4: 78,
  OP_1NEGATE: 79,
  OP_RESERVED: 80,
  OP_TRUE: 81,
  OP_1: 81,
  OP_2: 82,
  OP_3: 83,
  OP_4: 84,
  OP_5: 85,
  OP_6: 86,
  OP_7: 87,
  OP_8: 88,
  OP_9: 89,
  OP_10: 90,
  OP_11: 91,
  OP_12: 92,
  OP_13: 93,
  OP_14: 94,
  OP_15: 95,
  OP_16: 96,
  OP_NOP: 97,
  OP_VER: 98,
  OP_IF: 99,
  OP_NOTIF: 100,
  OP_VERIF: 101,
  OP_VERNOTIF: 102,
  OP_ELSE: 103,
  OP_ENDIF: 104,
  OP_VERIFY: 105,
  OP_RETURN: 106,
  OP_TOALTSTACK: 107,
  OP_FROMALTSTACK: 108,
  OP_2DROP: 109,
  OP_2DUP: 110,
  OP_3DUP: 111,
  OP_2OVER: 112,
  OP_2ROT: 113,
  OP_2SWAP: 114,
  OP_IFDUP: 115,
  OP_DEPTH: 116,
  OP_DROP: 117,
  OP_DUP: 118,
  OP_NIP: 119,
  OP_OVER: 120,
  OP_PICK: 121,
  OP_ROLL: 122,
  OP_ROT: 123,
  OP_SWAP: 124,
  OP_TUCK: 125,
  OP_CAT: 126,
  OP_SUBSTR: 127,
  OP_LEFT: 128,
  OP_RIGHT: 129,
  OP_SIZE: 130,
  OP_INVERT: 131,
  OP_AND: 132,
  OP_OR: 133,
  OP_XOR: 134,
  OP_EQUAL: 135,
  OP_EQUALVERIFY: 136,
  OP_RESERVED1: 137,
  OP_RESERVED2: 138,
  OP_1ADD: 139,
  OP_1SUB: 140,
  OP_2MUL: 141,
  OP_2DIV: 142,
  OP_NEGATE: 143,
  OP_ABS: 144,
  OP_NOT: 145,
  OP_0NOTEQUAL: 146,
  OP_ADD: 147,
  OP_SUB: 148,
  OP_MUL: 149,
  OP_DIV: 150,
  OP_MOD: 151,
  OP_LSHIFT: 152,
  OP_RSHIFT: 153,
  OP_BOOLAND: 154,
  OP_BOOLOR: 155,
  OP_NUMEQUAL: 156,
  OP_NUMEQUALVERIFY: 157,
  OP_NUMNOTEQUAL: 158,
  OP_LESSTHAN: 159,
  OP_GREATERTHAN: 160,
  OP_LESSTHANOREQUAL: 161,
  OP_GREATERTHANOREQUAL: 162,
  OP_MIN: 163,
  OP_MAX: 164,
  OP_WITHIN: 165,
  OP_RIPEMD160: 166,
  OP_SHA1: 167,
  OP_SHA256: 168,
  OP_HASH160: 169,
  OP_HASH256: 170,
  OP_CODESEPARATOR: 171,
  OP_CHECKSIG: 172,
  OP_CHECKSIGVERIFY: 173,
  OP_CHECKMULTISIG: 174,
  OP_CHECKMULTISIGVERIFY: 175,
  OP_NOP1: 176,
  OP_NOP2: 177,
  OP_CHECKLOCKTIMEVERIFY: 177,
  OP_NOP3: 178,
  OP_CHECKSEQUENCEVERIFY: 178,
  OP_NOP4: 179,
  OP_NOP5: 180,
  OP_NOP6: 181,
  OP_NOP7: 182,
  OP_NOP8: 183,
  OP_NOP9: 184,
  OP_NOP10: 185,
  OP_CHECKSIGADD: 186,
  OP_PUBKEYHASH: 253,
  OP_PUBKEY: 254,
  OP_INVALIDOPCODE: 255
};
Cr.OPS = gs;
const Xu = {};
Cr.REVERSE_OPS = Xu;
for (const e of Object.keys(gs)) {
  const t = gs[e];
  Xu[t] = e;
}
var Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
Nr.decode = Nr.encode = Nr.encodingLength = void 0;
const kr = Cr;
function zu(e) {
  return e < kr.OPS.OP_PUSHDATA1 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5;
}
Nr.encodingLength = zu;
function Z0(e, t, r) {
  const n = zu(t);
  return n === 1 ? e.writeUInt8(t, r) : n === 2 ? (e.writeUInt8(kr.OPS.OP_PUSHDATA1, r), e.writeUInt8(t, r + 1)) : n === 3 ? (e.writeUInt8(kr.OPS.OP_PUSHDATA2, r), e.writeUInt16LE(t, r + 1)) : (e.writeUInt8(kr.OPS.OP_PUSHDATA4, r), e.writeUInt32LE(t, r + 1)), n;
}
Nr.encode = Z0;
function ed(e, t) {
  const r = e.readUInt8(t);
  let n, i;
  if (r < kr.OPS.OP_PUSHDATA1)
    n = r, i = 1;
  else if (r === kr.OPS.OP_PUSHDATA1) {
    if (t + 2 > e.length) return null;
    n = e.readUInt8(t + 1), i = 2;
  } else if (r === kr.OPS.OP_PUSHDATA2) {
    if (t + 3 > e.length) return null;
    n = e.readUInt16LE(t + 1), i = 3;
  } else {
    if (t + 5 > e.length) return null;
    if (r !== kr.OPS.OP_PUSHDATA4) throw new Error("Unexpected opcode");
    n = e.readUInt32LE(t + 1), i = 5;
  }
  return {
    opcode: r,
    number: n,
    size: i
  };
}
Nr.decode = ed;
var xn = {};
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.encode = xn.decode = void 0;
function td(e, t, r) {
  t = t || 4, r = r === void 0 ? !0 : r;
  const n = e.length;
  if (n === 0) return 0;
  if (n > t) throw new TypeError("Script number overflow");
  if (r && !(e[n - 1] & 127) && (n <= 1 || !(e[n - 2] & 128)))
    throw new Error("Non-minimally encoded script number");
  if (n === 5) {
    const s = e.readUInt32LE(0), o = e.readUInt8(4);
    return o & 128 ? -((o & -129) * 4294967296 + s) : o * 4294967296 + s;
  }
  let i = 0;
  for (let s = 0; s < n; ++s)
    i |= e[s] << 8 * s;
  return e[n - 1] & 128 ? -(i & ~(128 << 8 * (n - 1))) : i;
}
xn.decode = td;
function rd(e) {
  return e > 2147483647 ? 5 : e > 8388607 ? 4 : e > 32767 ? 3 : e > 127 ? 2 : e > 0 ? 1 : 0;
}
function nd(e) {
  let t = Math.abs(e);
  const r = rd(t), n = H.allocUnsafe(r), i = e < 0;
  for (let s = 0; s < r; ++s)
    n.writeUInt8(t & 255, s), t >>= 8;
  return n[r - 1] & 128 ? n.writeUInt8(i ? 128 : 0, r - 1) : i && (n[r - 1] |= 128), n;
}
xn.encode = nd;
var $r = {}, tt = {};
const ro = /* @__PURE__ */ Fl(z0);
var ri = {
  Array: function(e) {
    return e != null && e.constructor === Array;
  },
  Boolean: function(e) {
    return typeof e == "boolean";
  },
  Function: function(e) {
    return typeof e == "function";
  },
  Nil: function(e) {
    return e == null;
  },
  Number: function(e) {
    return typeof e == "number";
  },
  Object: function(e) {
    return typeof e == "object";
  },
  String: function(e) {
    return typeof e == "string";
  },
  "": function() {
    return !0;
  }
};
ri.Null = ri.Nil;
for (var va in ri)
  ri[va].toJSON = (function(e) {
    return e;
  }).bind(null, va);
var Bs = ri, Gr = Bs;
function Yu(e) {
  return e.name || e.toString().match(/function (.*?)\s*\(/)[1];
}
function Cs(e) {
  return Gr.Nil(e) ? "" : Yu(e.constructor);
}
function id(e) {
  return Gr.Function(e) ? "" : Gr.String(e) ? JSON.stringify(e) : e && Gr.Object(e) ? "" : e;
}
function Fs(e, t) {
  Error.captureStackTrace && Error.captureStackTrace(e, t);
}
function Mi(e) {
  return Gr.Function(e) ? e.toJSON ? e.toJSON() : Yu(e) : Gr.Array(e) ? "Array" : e && Gr.Object(e) ? "Object" : e !== void 0 ? e : "";
}
function Ju(e, t, r) {
  var n = id(t);
  return "Expected " + Mi(e) + ", got" + (r !== "" ? " " + r : "") + (n !== "" ? " " + n : "");
}
function hr(e, t, r) {
  r = r || Cs(t), this.message = Ju(e, t, r), Fs(this, hr), this.__type = e, this.__value = t, this.__valueTypeName = r;
}
hr.prototype = Object.create(Error.prototype);
hr.prototype.constructor = hr;
function od(e, t, r, n, i) {
  var s = '" of type ';
  return t === "key" && (s = '" with key type '), Ju('property "' + Mi(r) + s + Mi(e), n, i);
}
function In(e, t, r, n, i) {
  e ? (i = i || Cs(n), this.message = od(e, r, t, n, i)) : this.message = 'Unexpected property "' + t + '"', Fs(this, hr), this.__label = r, this.__property = t, this.__type = e, this.__value = n, this.__valueTypeName = i;
}
In.prototype = Object.create(Error.prototype);
In.prototype.constructor = hr;
function sd(e, t) {
  return new hr(e, {}, t);
}
function ad(e, t, r) {
  return e instanceof In ? (t = t + "." + e.__property, e = new In(
    e.__type,
    t,
    e.__label,
    e.__value,
    e.__valueTypeName
  )) : e instanceof hr && (e = new In(
    e.__type,
    t,
    r,
    e.__value,
    e.__valueTypeName
  )), Fs(e), e;
}
var Qu = {
  TfTypeError: hr,
  TfPropertyTypeError: In,
  tfCustomError: sd,
  tfSubError: ad,
  tfJSON: Mi,
  getValueTypeName: Cs
}, Mo, _a;
function ud() {
  if (_a) return Mo;
  _a = 1;
  var e = Bs, t = Qu;
  function r(U) {
    return H.isBuffer(U);
  }
  function n(U) {
    return typeof U == "string" && /^([0-9a-f]{2})+$/i.test(U);
  }
  function i(U, W) {
    var g = U.toJSON();
    function h(E) {
      if (!U(E)) return !1;
      if (E.length === W) return !0;
      throw t.tfCustomError(g + "(Length: " + W + ")", g + "(Length: " + E.length + ")");
    }
    return h.toJSON = function() {
      return g;
    }, h;
  }
  var s = i.bind(null, e.Array), o = i.bind(null, r), a = i.bind(null, n), l = i.bind(null, e.String);
  function p(U, W, g) {
    g = g || e.Number;
    function h(E, N) {
      return g(E, N) && E > U && E < W;
    }
    return h.toJSON = function() {
      return `${g.toJSON()} between [${U}, ${W}]`;
    }, h;
  }
  var f = Math.pow(2, 53) - 1;
  function d(U) {
    return typeof U == "number" && isFinite(U);
  }
  function _(U) {
    return U << 24 >> 24 === U;
  }
  function m(U) {
    return U << 16 >> 16 === U;
  }
  function B(U) {
    return (U | 0) === U;
  }
  function I(U) {
    return typeof U == "number" && U >= -f && U <= f && Math.floor(U) === U;
  }
  function C(U) {
    return (U & 255) === U;
  }
  function D(U) {
    return (U & 65535) === U;
  }
  function b(U) {
    return U >>> 0 === U;
  }
  function A(U) {
    return typeof U == "number" && U >= 0 && U <= f && Math.floor(U) === U;
  }
  var x = {
    ArrayN: s,
    Buffer: r,
    BufferN: o,
    Finite: d,
    Hex: n,
    HexN: a,
    Int8: _,
    Int16: m,
    Int32: B,
    Int53: I,
    Range: p,
    StringN: l,
    UInt8: C,
    UInt16: D,
    UInt32: b,
    UInt53: A
  };
  for (var M in x)
    x[M].toJSON = (function(U) {
      return U;
    }).bind(null, M);
  return Mo = x, Mo;
}
var ai = Qu, Qe = Bs, er = ai.tfJSON, Zu = ai.TfTypeError, ec = ai.TfPropertyTypeError, $n = ai.tfSubError, cd = ai.getValueTypeName, sr = {
  arrayOf: function(t, r) {
    t = Gt(t), r = r || {};
    function n(i, s) {
      return !Qe.Array(i) || Qe.Nil(i) || r.minLength !== void 0 && i.length < r.minLength || r.maxLength !== void 0 && i.length > r.maxLength || r.length !== void 0 && i.length !== r.length ? !1 : i.every(function(o, a) {
        try {
          return lt(t, o, s);
        } catch (l) {
          throw $n(l, a);
        }
      });
    }
    return n.toJSON = function() {
      var i = "[" + er(t) + "]";
      return r.length !== void 0 ? i += "{" + r.length + "}" : (r.minLength !== void 0 || r.maxLength !== void 0) && (i += "{" + (r.minLength === void 0 ? 0 : r.minLength) + "," + (r.maxLength === void 0 ? 1 / 0 : r.maxLength) + "}"), i;
    }, n;
  },
  maybe: function e(t) {
    t = Gt(t);
    function r(n, i) {
      return Qe.Nil(n) || t(n, i, e);
    }
    return r.toJSON = function() {
      return "?" + er(t);
    }, r;
  },
  map: function(t, r) {
    t = Gt(t), r && (r = Gt(r));
    function n(i, s) {
      if (!Qe.Object(i) || Qe.Nil(i)) return !1;
      for (var o in i) {
        try {
          r && lt(r, o, s);
        } catch (l) {
          throw $n(l, o, "key");
        }
        try {
          var a = i[o];
          lt(t, a, s);
        } catch (l) {
          throw $n(l, o);
        }
      }
      return !0;
    }
    return r ? n.toJSON = function() {
      return "{" + er(r) + ": " + er(t) + "}";
    } : n.toJSON = function() {
      return "{" + er(t) + "}";
    }, n;
  },
  object: function(t) {
    var r = {};
    for (var n in t)
      r[n] = Gt(t[n]);
    function i(s, o) {
      if (!Qe.Object(s) || Qe.Nil(s)) return !1;
      var a;
      try {
        for (a in r) {
          var l = r[a], p = s[a];
          lt(l, p, o);
        }
      } catch (f) {
        throw $n(f, a);
      }
      if (o) {
        for (a in s)
          if (!r[a])
            throw new ec(void 0, a);
      }
      return !0;
    }
    return i.toJSON = function() {
      return er(r);
    }, i;
  },
  anyOf: function() {
    var t = [].slice.call(arguments).map(Gt);
    function r(n, i) {
      return t.some(function(s) {
        try {
          return lt(s, n, i);
        } catch {
          return !1;
        }
      });
    }
    return r.toJSON = function() {
      return t.map(er).join("|");
    }, r;
  },
  allOf: function() {
    var t = [].slice.call(arguments).map(Gt);
    function r(n, i) {
      return t.every(function(s) {
        try {
          return lt(s, n, i);
        } catch {
          return !1;
        }
      });
    }
    return r.toJSON = function() {
      return t.map(er).join(" & ");
    }, r;
  },
  quacksLike: function(t) {
    function r(n) {
      return t === cd(n);
    }
    return r.toJSON = function() {
      return t;
    }, r;
  },
  tuple: function() {
    var t = [].slice.call(arguments).map(Gt);
    function r(n, i) {
      return Qe.Nil(n) || Qe.Nil(n.length) || i && n.length !== t.length ? !1 : t.every(function(s, o) {
        try {
          return lt(s, n[o], i);
        } catch (a) {
          throw $n(a, o);
        }
      });
    }
    return r.toJSON = function() {
      return "(" + t.map(er).join(", ") + ")";
    }, r;
  },
  value: function(t) {
    function r(n) {
      return n === t;
    }
    return r.toJSON = function() {
      return t;
    }, r;
  }
};
sr.oneOf = sr.anyOf;
function Gt(e) {
  if (Qe.String(e))
    return e[0] === "?" ? sr.maybe(e.slice(1)) : Qe[e] || sr.quacksLike(e);
  if (e && Qe.Object(e)) {
    if (Qe.Array(e)) {
      if (e.length !== 1) throw new TypeError("Expected compile() parameter of type Array of length 1");
      return sr.arrayOf(e[0]);
    }
    return sr.object(e);
  } else if (Qe.Function(e))
    return e;
  return sr.value(e);
}
function lt(e, t, r, n) {
  if (Qe.Function(e)) {
    if (e(t, r)) return !0;
    throw new Zu(n || e, t);
  }
  return lt(Gt(e), t, r);
}
for (var Br in Qe)
  lt[Br] = Qe[Br];
for (Br in sr)
  lt[Br] = sr[Br];
var Ta = ud();
for (Br in Ta)
  lt[Br] = Ta[Br];
lt.compile = Gt;
lt.TfTypeError = Zu;
lt.TfPropertyTypeError = ec;
var ld = lt;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.oneOf = e.Null = e.BufferN = e.Function = e.UInt32 = e.UInt8 = e.tuple = e.maybe = e.Hex = e.Buffer = e.String = e.Boolean = e.Array = e.Number = e.Hash256bit = e.Hash160bit = e.Buffer256bit = e.isTaptree = e.isTapleaf = e.TAPLEAF_VERSION_MASK = e.Satoshi = e.isPoint = e.stacksEqual = e.typeforce = void 0;
  const t = ro;
  e.typeforce = ld;
  const r = t.Buffer.alloc(32, 0), n = t.Buffer.from(
    "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
    "hex"
  );
  function i(f, d) {
    return f.length !== d.length ? !1 : f.every((_, m) => _.equals(d[m]));
  }
  e.stacksEqual = i;
  function s(f) {
    if (!t.Buffer.isBuffer(f) || f.length < 33) return !1;
    const d = f[0], _ = f.slice(1, 33);
    if (_.compare(r) === 0 || _.compare(n) >= 0) return !1;
    if ((d === 2 || d === 3) && f.length === 33)
      return !0;
    const m = f.slice(33);
    return m.compare(r) === 0 || m.compare(n) >= 0 ? !1 : d === 4 && f.length === 65;
  }
  e.isPoint = s;
  const o = 21 * 1e14;
  function a(f) {
    return e.typeforce.UInt53(f) && f <= o;
  }
  e.Satoshi = a, e.TAPLEAF_VERSION_MASK = 254;
  function l(f) {
    return !f || !("output" in f) || !t.Buffer.isBuffer(f.output) ? !1 : f.version !== void 0 ? (f.version & e.TAPLEAF_VERSION_MASK) === f.version : !0;
  }
  e.isTapleaf = l;
  function p(f) {
    return (0, e.Array)(f) ? f.length !== 2 ? !1 : f.every((d) => p(d)) : l(f);
  }
  e.isTaptree = p, e.Buffer256bit = e.typeforce.BufferN(32), e.Hash160bit = e.typeforce.BufferN(20), e.Hash256bit = e.typeforce.BufferN(32), e.Number = e.typeforce.Number, e.Array = e.typeforce.Array, e.Boolean = e.typeforce.Boolean, e.String = e.typeforce.String, e.Buffer = e.typeforce.Buffer, e.Hex = e.typeforce.Hex, e.maybe = e.typeforce.maybe, e.tuple = e.typeforce.tuple, e.UInt8 = e.typeforce.UInt8, e.UInt32 = e.typeforce.UInt32, e.Function = e.typeforce.Function, e.BufferN = e.typeforce.BufferN, e.Null = e.typeforce.Null, e.oneOf = e.typeforce.oneOf;
})(tt);
var Ia;
function fd() {
  if (Ia) return $r;
  Ia = 1, Object.defineProperty($r, "__esModule", { value: !0 }), $r.encode = $r.decode = void 0;
  const e = lr, t = ht(), r = tt, { typeforce: n } = r, i = H.alloc(1, 0);
  function s(p) {
    let f = 0;
    for (; p[f] === 0; ) ++f;
    return f === p.length ? i : (p = p.slice(f), p[0] & 128 ? H.concat([i, p], 1 + p.length) : p);
  }
  function o(p) {
    p[0] === 0 && (p = p.slice(1));
    const f = H.alloc(32, 0), d = Math.max(0, 32 - p.length);
    return p.copy(f, d), f;
  }
  function a(p) {
    const f = p.readUInt8(p.length - 1);
    if (!(0, t.isDefinedHashType)(f))
      throw new Error("Invalid hashType " + f);
    const d = e.decode(p.slice(0, -1)), _ = o(d.r), m = o(d.s);
    return { signature: H.concat([_, m], 64), hashType: f };
  }
  $r.decode = a;
  function l(p, f) {
    if (n(
      {
        signature: r.BufferN(64),
        hashType: r.UInt8
      },
      { signature: p, hashType: f }
    ), !(0, t.isDefinedHashType)(f))
      throw new Error("Invalid hashType " + f);
    const d = H.allocUnsafe(1);
    d.writeUInt8(f, 0);
    const _ = s(p.slice(0, 32)), m = s(p.slice(32, 64));
    return H.concat([e.encode(_, m), d]);
  }
  return $r.encode = l, $r;
}
var Oa;
function ht() {
  return Oa || (Oa = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.signature = e.number = e.isCanonicalScriptSignature = e.isDefinedHashType = e.isCanonicalPubKey = e.toStack = e.fromASM = e.toASM = e.decompile = e.compile = e.countNonPushOnlyOPs = e.isPushOnly = e.OPS = void 0;
    const t = lr, r = Cr;
    Object.defineProperty(e, "OPS", {
      enumerable: !0,
      get: function() {
        return r.OPS;
      }
    });
    const n = Nr, i = xn, s = fd(), o = tt, { typeforce: a } = o, l = r.OPS.OP_RESERVED;
    function p(h) {
      return o.Number(h) && (h === r.OPS.OP_0 || h >= r.OPS.OP_1 && h <= r.OPS.OP_16 || h === r.OPS.OP_1NEGATE);
    }
    function f(h) {
      return o.Buffer(h) || p(h);
    }
    function d(h) {
      return o.Array(h) && h.every(f);
    }
    e.isPushOnly = d;
    function _(h) {
      return h.length - h.filter(f).length;
    }
    e.countNonPushOnlyOPs = _;
    function m(h) {
      if (h.length === 0) return r.OPS.OP_0;
      if (h.length === 1) {
        if (h[0] >= 1 && h[0] <= 16) return l + h[0];
        if (h[0] === 129) return r.OPS.OP_1NEGATE;
      }
    }
    function B(h) {
      return H.isBuffer(h);
    }
    function I(h) {
      return o.Array(h);
    }
    function C(h) {
      return H.isBuffer(h);
    }
    function D(h) {
      if (B(h)) return h;
      a(o.Array, h);
      const E = h.reduce((S, k) => C(k) ? k.length === 1 && m(k) !== void 0 ? S + 1 : S + n.encodingLength(k.length) + k.length : S + 1, 0), N = H.allocUnsafe(E);
      let y = 0;
      if (h.forEach((S) => {
        if (C(S)) {
          const k = m(S);
          if (k !== void 0) {
            N.writeUInt8(k, y), y += 1;
            return;
          }
          y += n.encode(N, S.length, y), S.copy(N, y), y += S.length;
        } else
          N.writeUInt8(S, y), y += 1;
      }), y !== N.length) throw new Error("Could not decode chunks");
      return N;
    }
    e.compile = D;
    function b(h) {
      if (I(h)) return h;
      a(o.Buffer, h);
      const E = [];
      let N = 0;
      for (; N < h.length; ) {
        const y = h[N];
        if (y > r.OPS.OP_0 && y <= r.OPS.OP_PUSHDATA4) {
          const S = n.decode(h, N);
          if (S === null || (N += S.size, N + S.number > h.length)) return null;
          const k = h.slice(N, N + S.number);
          N += S.number;
          const T = m(k);
          T !== void 0 ? E.push(T) : E.push(k);
        } else
          E.push(y), N += 1;
      }
      return E;
    }
    e.decompile = b;
    function A(h) {
      if (B(h) && (h = b(h)), !h)
        throw new Error("Could not convert invalid chunks to ASM");
      return h.map((E) => {
        if (C(E)) {
          const N = m(E);
          if (N === void 0) return E.toString("hex");
          E = N;
        }
        return r.REVERSE_OPS[E];
      }).join(" ");
    }
    e.toASM = A;
    function x(h) {
      return a(o.String, h), D(
        h.split(" ").map((E) => r.OPS[E] !== void 0 ? r.OPS[E] : (a(o.Hex, E), H.from(E, "hex")))
      );
    }
    e.fromASM = x;
    function M(h) {
      return h = b(h), a(d, h), h.map((E) => C(E) ? E : E === r.OPS.OP_0 ? H.allocUnsafe(0) : i.encode(E - l));
    }
    e.toStack = M;
    function U(h) {
      return o.isPoint(h);
    }
    e.isCanonicalPubKey = U;
    function W(h) {
      const E = h & -129;
      return E > 0 && E < 4;
    }
    e.isDefinedHashType = W;
    function g(h) {
      return !H.isBuffer(h) || !W(h[h.length - 1]) ? !1 : t.check(h.slice(0, -1));
    }
    e.isCanonicalScriptSignature = g, e.number = i, e.signature = s;
  }(Ho)), Ho;
}
var vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.value = vt.prop = void 0;
function hd(e, t, r) {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !0,
    get() {
      const n = r.call(this);
      return this[t] = n, n;
    },
    set(n) {
      Object.defineProperty(this, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
      });
    }
  });
}
vt.prop = hd;
function dd(e) {
  let t;
  return () => (t !== void 0 || (t = e()), t);
}
vt.value = dd;
Object.defineProperty(to, "__esModule", { value: !0 });
to.p2data = void 0;
const pd = Xe, Ni = ht(), $t = tt, Pa = vt, ka = Ni.OPS;
function gd(e, t) {
  if (!e.data && !e.output) throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, $t.typeforce)(
    {
      network: $t.typeforce.maybe($t.typeforce.Object),
      output: $t.typeforce.maybe($t.typeforce.Buffer),
      data: $t.typeforce.maybe(
        $t.typeforce.arrayOf($t.typeforce.Buffer)
      )
    },
    e
  );
  const n = { name: "embed", network: e.network || pd.bitcoin };
  if (Pa.prop(n, "output", () => {
    if (e.data)
      return Ni.compile([ka.OP_RETURN].concat(e.data));
  }), Pa.prop(n, "data", () => {
    if (e.output)
      return Ni.decompile(e.output).slice(1);
  }), t.validate && e.output) {
    const i = Ni.decompile(e.output);
    if (i[0] !== ka.OP_RETURN) throw new TypeError("Output is invalid");
    if (!i.slice(1).every($t.typeforce.Buffer))
      throw new TypeError("Output is invalid");
    if (e.data && !(0, $t.stacksEqual)(e.data, n.data))
      throw new TypeError("Data mismatch");
  }
  return Object.assign(n, e);
}
to.p2data = gd;
var no = {};
Object.defineProperty(no, "__esModule", { value: !0 });
no.p2ms = void 0;
const wd = Xe, bn = ht(), Fe = tt, Er = vt, Sn = bn.OPS, Ei = Sn.OP_RESERVED;
function yd(e, t) {
  if (!e.input && !e.output && !(e.pubkeys && e.m !== void 0) && !e.signatures)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {});
  function r(l) {
    return bn.isCanonicalScriptSignature(l) || (t.allowIncomplete && l === Sn.OP_0) !== void 0;
  }
  (0, Fe.typeforce)(
    {
      network: Fe.typeforce.maybe(Fe.typeforce.Object),
      m: Fe.typeforce.maybe(Fe.typeforce.Number),
      n: Fe.typeforce.maybe(Fe.typeforce.Number),
      output: Fe.typeforce.maybe(Fe.typeforce.Buffer),
      pubkeys: Fe.typeforce.maybe(
        Fe.typeforce.arrayOf(Fe.isPoint)
      ),
      signatures: Fe.typeforce.maybe(
        Fe.typeforce.arrayOf(r)
      ),
      input: Fe.typeforce.maybe(Fe.typeforce.Buffer)
    },
    e
  );
  const i = { network: e.network || wd.bitcoin };
  let s = [], o = !1;
  function a(l) {
    o || (o = !0, s = bn.decompile(l), i.m = s[0] - Ei, i.n = s[s.length - 2] - Ei, i.pubkeys = s.slice(1, -2));
  }
  if (Er.prop(i, "output", () => {
    if (e.m && i.n && e.pubkeys)
      return bn.compile(
        [].concat(
          Ei + e.m,
          e.pubkeys,
          Ei + i.n,
          Sn.OP_CHECKMULTISIG
        )
      );
  }), Er.prop(i, "m", () => {
    if (i.output)
      return a(i.output), i.m;
  }), Er.prop(i, "n", () => {
    if (i.pubkeys)
      return i.pubkeys.length;
  }), Er.prop(i, "pubkeys", () => {
    if (e.output)
      return a(e.output), i.pubkeys;
  }), Er.prop(i, "signatures", () => {
    if (e.input)
      return bn.decompile(e.input).slice(1);
  }), Er.prop(i, "input", () => {
    if (e.signatures)
      return bn.compile([Sn.OP_0].concat(e.signatures));
  }), Er.prop(i, "witness", () => {
    if (i.input)
      return [];
  }), Er.prop(i, "name", () => {
    if (!(!i.m || !i.n))
      return `p2ms(${i.m} of ${i.n})`;
  }), t.validate) {
    if (e.output) {
      if (a(e.output), !Fe.typeforce.Number(s[0]))
        throw new TypeError("Output is invalid");
      if (!Fe.typeforce.Number(s[s.length - 2]))
        throw new TypeError("Output is invalid");
      if (s[s.length - 1] !== Sn.OP_CHECKMULTISIG)
        throw new TypeError("Output is invalid");
      if (i.m <= 0 || i.n > 16 || i.m > i.n || i.n !== s.length - 3)
        throw new TypeError("Output is invalid");
      if (!i.pubkeys.every((l) => (0, Fe.isPoint)(l)))
        throw new TypeError("Output is invalid");
      if (e.m !== void 0 && e.m !== i.m) throw new TypeError("m mismatch");
      if (e.n !== void 0 && e.n !== i.n) throw new TypeError("n mismatch");
      if (e.pubkeys && !(0, Fe.stacksEqual)(e.pubkeys, i.pubkeys))
        throw new TypeError("Pubkeys mismatch");
    }
    if (e.pubkeys) {
      if (e.n !== void 0 && e.n !== e.pubkeys.length)
        throw new TypeError("Pubkey count mismatch");
      if (i.n = e.pubkeys.length, i.n < i.m) throw new TypeError("Pubkey count cannot be less than m");
    }
    if (e.signatures) {
      if (e.signatures.length < i.m)
        throw new TypeError("Not enough signatures provided");
      if (e.signatures.length > i.m)
        throw new TypeError("Too many signatures provided");
    }
    if (e.input) {
      if (e.input[0] !== Sn.OP_0) throw new TypeError("Input is invalid");
      if (i.signatures.length === 0 || !i.signatures.every(r))
        throw new TypeError("Input has invalid signature(s)");
      if (e.signatures && !(0, Fe.stacksEqual)(e.signatures, i.signatures))
        throw new TypeError("Signature mismatch");
      if (e.m !== void 0 && e.m !== e.signatures.length)
        throw new TypeError("Signature count mismatch");
    }
  }
  return Object.assign(i, e);
}
no.p2ms = yd;
var io = {};
Object.defineProperty(io, "__esModule", { value: !0 });
io.p2pk = void 0;
const md = Xe, vn = ht(), Ft = tt, mn = vt, Aa = vn.OPS;
function Ed(e, t) {
  if (!e.input && !e.output && !e.pubkey && !e.input && !e.signature)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, Ft.typeforce)(
    {
      network: Ft.typeforce.maybe(Ft.typeforce.Object),
      output: Ft.typeforce.maybe(Ft.typeforce.Buffer),
      pubkey: Ft.typeforce.maybe(Ft.isPoint),
      signature: Ft.typeforce.maybe(vn.isCanonicalScriptSignature),
      input: Ft.typeforce.maybe(Ft.typeforce.Buffer)
    },
    e
  );
  const r = mn.value(() => vn.decompile(e.input)), i = { name: "p2pk", network: e.network || md.bitcoin };
  if (mn.prop(i, "output", () => {
    if (e.pubkey)
      return vn.compile([e.pubkey, Aa.OP_CHECKSIG]);
  }), mn.prop(i, "pubkey", () => {
    if (e.output)
      return e.output.slice(1, -1);
  }), mn.prop(i, "signature", () => {
    if (e.input)
      return r()[0];
  }), mn.prop(i, "input", () => {
    if (e.signature)
      return vn.compile([e.signature]);
  }), mn.prop(i, "witness", () => {
    if (i.input)
      return [];
  }), t.validate) {
    if (e.output) {
      if (e.output[e.output.length - 1] !== Aa.OP_CHECKSIG)
        throw new TypeError("Output is invalid");
      if (!(0, Ft.isPoint)(i.pubkey))
        throw new TypeError("Output pubkey is invalid");
      if (e.pubkey && !e.pubkey.equals(i.pubkey))
        throw new TypeError("Pubkey mismatch");
    }
    if (e.signature && e.input && !e.input.equals(i.input))
      throw new TypeError("Signature mismatch");
    if (e.input) {
      if (r().length !== 1) throw new TypeError("Input is invalid");
      if (!vn.isCanonicalScriptSignature(i.signature))
        throw new TypeError("Input has invalid signature");
    }
  }
  return Object.assign(i, e);
}
io.p2pk = Ed;
var oo = {}, Jt = {}, Nn = {}, zt = {}, Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.output = Ge.exists = Ge.hash = Ge.bytes = Ge.bool = Ge.number = Ge.isBytes = void 0;
function $i(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`positive integer expected, not ${e}`);
}
Ge.number = $i;
function tc(e) {
  if (typeof e != "boolean")
    throw new Error(`boolean expected, not ${e}`);
}
Ge.bool = tc;
function rc(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
Ge.isBytes = rc;
function Rs(e, ...t) {
  if (!rc(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
Ge.bytes = Rs;
function nc(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  $i(e.outputLen), $i(e.blockLen);
}
Ge.hash = nc;
function ic(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
Ge.exists = ic;
function oc(e, t) {
  Rs(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
Ge.output = oc;
const bd = { number: $i, bool: tc, bytes: Rs, hash: nc, exists: ic, output: oc };
Ge.default = bd;
var ui = {}, so = {};
Object.defineProperty(so, "__esModule", { value: !0 });
so.crypto = void 0;
so.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomBytes = e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.byteSwap32 = e.byteSwapIfBE = e.byteSwap = e.isLE = e.rotl = e.rotr = e.createView = e.u32 = e.u8 = e.isBytes = void 0;
  const t = so, r = Ge;
  function n(y) {
    return y instanceof Uint8Array || y != null && typeof y == "object" && y.constructor.name === "Uint8Array";
  }
  e.isBytes = n;
  const i = (y) => new Uint8Array(y.buffer, y.byteOffset, y.byteLength);
  e.u8 = i;
  const s = (y) => new Uint32Array(y.buffer, y.byteOffset, Math.floor(y.byteLength / 4));
  e.u32 = s;
  const o = (y) => new DataView(y.buffer, y.byteOffset, y.byteLength);
  e.createView = o;
  const a = (y, S) => y << 32 - S | y >>> S;
  e.rotr = a;
  const l = (y, S) => y << S | y >>> 32 - S >>> 0;
  e.rotl = l, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  const p = (y) => y << 24 & 4278190080 | y << 8 & 16711680 | y >>> 8 & 65280 | y >>> 24 & 255;
  e.byteSwap = p, e.byteSwapIfBE = e.isLE ? (y) => y : (y) => (0, e.byteSwap)(y);
  function f(y) {
    for (let S = 0; S < y.length; S++)
      y[S] = (0, e.byteSwap)(y[S]);
  }
  e.byteSwap32 = f;
  const d = /* @__PURE__ */ Array.from({ length: 256 }, (y, S) => S.toString(16).padStart(2, "0"));
  function _(y) {
    (0, r.bytes)(y);
    let S = "";
    for (let k = 0; k < y.length; k++)
      S += d[y[k]];
    return S;
  }
  e.bytesToHex = _;
  const m = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function B(y) {
    if (y >= m._0 && y <= m._9)
      return y - m._0;
    if (y >= m._A && y <= m._F)
      return y - (m._A - 10);
    if (y >= m._a && y <= m._f)
      return y - (m._a - 10);
  }
  function I(y) {
    if (typeof y != "string")
      throw new Error("hex string expected, got " + typeof y);
    const S = y.length, k = S / 2;
    if (S % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + S);
    const T = new Uint8Array(k);
    for (let O = 0, R = 0; O < k; O++, R += 2) {
      const L = B(y.charCodeAt(R)), j = B(y.charCodeAt(R + 1));
      if (L === void 0 || j === void 0) {
        const V = y[R] + y[R + 1];
        throw new Error('hex string expected, got non-hex character "' + V + '" at index ' + R);
      }
      T[O] = L * 16 + j;
    }
    return T;
  }
  e.hexToBytes = I;
  const C = async () => {
  };
  e.nextTick = C;
  async function D(y, S, k) {
    let T = Date.now();
    for (let O = 0; O < y; O++) {
      k(O);
      const R = Date.now() - T;
      R >= 0 && R < S || (await (0, e.nextTick)(), T += R);
    }
  }
  e.asyncLoop = D;
  function b(y) {
    if (typeof y != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof y}`);
    return new Uint8Array(new TextEncoder().encode(y));
  }
  e.utf8ToBytes = b;
  function A(y) {
    return typeof y == "string" && (y = b(y)), (0, r.bytes)(y), y;
  }
  e.toBytes = A;
  function x(...y) {
    let S = 0;
    for (let T = 0; T < y.length; T++) {
      const O = y[T];
      (0, r.bytes)(O), S += O.length;
    }
    const k = new Uint8Array(S);
    for (let T = 0, O = 0; T < y.length; T++) {
      const R = y[T];
      k.set(R, O), O += R.length;
    }
    return k;
  }
  e.concatBytes = x;
  class M {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = M;
  const U = {}.toString;
  function W(y, S) {
    if (S !== void 0 && U.call(S) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(y, S);
  }
  e.checkOpts = W;
  function g(y) {
    const S = (T) => y().update(A(T)).digest(), k = y();
    return S.outputLen = k.outputLen, S.blockLen = k.blockLen, S.create = () => y(), S;
  }
  e.wrapConstructor = g;
  function h(y) {
    const S = (T, O) => y(O).update(A(T)).digest(), k = y({});
    return S.outputLen = k.outputLen, S.blockLen = k.blockLen, S.create = (T) => y(T), S;
  }
  e.wrapConstructorWithOpts = h;
  function E(y) {
    const S = (T, O) => y(O).update(A(T)).digest(), k = y({});
    return S.outputLen = k.outputLen, S.blockLen = k.blockLen, S.create = (T) => y(T), S;
  }
  e.wrapXOFConstructorWithOpts = E;
  function N(y = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(y));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = N;
})(ui);
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.HashMD = zt.Maj = zt.Chi = void 0;
const $o = Ge, Dn = ui;
function Sd(e, t, r, n) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, r, n);
  const i = BigInt(32), s = BigInt(4294967295), o = Number(r >> i & s), a = Number(r & s), l = n ? 4 : 0, p = n ? 0 : 4;
  e.setUint32(t + l, o, n), e.setUint32(t + p, a, n);
}
const vd = (e, t, r) => e & t ^ ~e & r;
zt.Chi = vd;
const _d = (e, t, r) => e & t ^ e & r ^ t & r;
zt.Maj = _d;
class Td extends Dn.Hash {
  constructor(t, r, n, i) {
    super(), this.blockLen = t, this.outputLen = r, this.padOffset = n, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = (0, Dn.createView)(this.buffer);
  }
  update(t) {
    (0, $o.exists)(this);
    const { view: r, buffer: n, blockLen: i } = this;
    t = (0, Dn.toBytes)(t);
    const s = t.length;
    for (let o = 0; o < s; ) {
      const a = Math.min(i - this.pos, s - o);
      if (a === i) {
        const l = (0, Dn.createView)(t);
        for (; i <= s - o; o += i)
          this.process(l, o);
        continue;
      }
      n.set(t.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === i && (this.process(r, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    (0, $o.exists)(this), (0, $o.output)(t, this), this.finished = !0;
    const { buffer: r, view: n, blockLen: i, isLE: s } = this;
    let { pos: o } = this;
    r[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > i - o && (this.process(n, 0), o = 0);
    for (let d = o; d < i; d++)
      r[d] = 0;
    Sd(n, i - 8, BigInt(this.length * 8), s), this.process(n, 0);
    const a = (0, Dn.createView)(t), l = this.outputLen;
    if (l % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const p = l / 4, f = this.get();
    if (p > f.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let d = 0; d < p; d++)
      a.setUint32(4 * d, f[d], s);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: i, finished: s, destroyed: o, pos: a } = this;
    return t.length = i, t.pos = a, t.finished = s, t.destroyed = o, i % r && t.buffer.set(n), t;
  }
}
zt.HashMD = Td;
Object.defineProperty(Nn, "__esModule", { value: !0 });
Nn.ripemd160 = Nn.RIPEMD160 = void 0;
const Id = zt, Xn = ui, Od = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]), sc = /* @__PURE__ */ new Uint8Array(new Array(16).fill(0).map((e, t) => t)), Pd = /* @__PURE__ */ sc.map((e) => (9 * e + 5) % 16);
let Us = [sc], Ls = [Pd];
for (let e = 0; e < 4; e++)
  for (let t of [Us, Ls])
    t.push(t[e].map((r) => Od[r]));
const ac = /* @__PURE__ */ [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((e) => new Uint8Array(e)), kd = /* @__PURE__ */ Us.map((e, t) => e.map((r) => ac[t][r])), Ad = /* @__PURE__ */ Ls.map((e, t) => e.map((r) => ac[t][r])), xd = /* @__PURE__ */ new Uint32Array([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]), Nd = /* @__PURE__ */ new Uint32Array([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]);
function xa(e, t, r, n) {
  return e === 0 ? t ^ r ^ n : e === 1 ? t & r | ~t & n : e === 2 ? (t | ~r) ^ n : e === 3 ? t & n | r & ~n : t ^ (r | ~n);
}
const bi = /* @__PURE__ */ new Uint32Array(16);
class uc extends Id.HashMD {
  constructor() {
    super(64, 20, 8, !0), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
  }
  get() {
    const { h0: t, h1: r, h2: n, h3: i, h4: s } = this;
    return [t, r, n, i, s];
  }
  set(t, r, n, i, s) {
    this.h0 = t | 0, this.h1 = r | 0, this.h2 = n | 0, this.h3 = i | 0, this.h4 = s | 0;
  }
  process(t, r) {
    for (let m = 0; m < 16; m++, r += 4)
      bi[m] = t.getUint32(r, !0);
    let n = this.h0 | 0, i = n, s = this.h1 | 0, o = s, a = this.h2 | 0, l = a, p = this.h3 | 0, f = p, d = this.h4 | 0, _ = d;
    for (let m = 0; m < 5; m++) {
      const B = 4 - m, I = xd[m], C = Nd[m], D = Us[m], b = Ls[m], A = kd[m], x = Ad[m];
      for (let M = 0; M < 16; M++) {
        const U = (0, Xn.rotl)(n + xa(m, s, a, p) + bi[D[M]] + I, A[M]) + d | 0;
        n = d, d = p, p = (0, Xn.rotl)(a, 10) | 0, a = s, s = U;
      }
      for (let M = 0; M < 16; M++) {
        const U = (0, Xn.rotl)(i + xa(B, o, l, f) + bi[b[M]] + C, x[M]) + _ | 0;
        i = _, _ = f, f = (0, Xn.rotl)(l, 10) | 0, l = o, o = U;
      }
    }
    this.set(this.h1 + a + f | 0, this.h2 + p + _ | 0, this.h3 + d + i | 0, this.h4 + n + o | 0, this.h0 + s + l | 0);
  }
  roundClean() {
    bi.fill(0);
  }
  destroy() {
    this.destroyed = !0, this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
  }
}
Nn.RIPEMD160 = uc;
Nn.ripemd160 = (0, Xn.wrapConstructor)(() => new uc());
var ao = {};
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.sha1 = void 0;
const Do = zt, Bi = ui, jn = /* @__PURE__ */ new Uint32Array([
  1732584193,
  4023233417,
  2562383102,
  271733878,
  3285377520
]), br = /* @__PURE__ */ new Uint32Array(80);
class Bd extends Do.HashMD {
  constructor() {
    super(64, 20, 8, !1), this.A = jn[0] | 0, this.B = jn[1] | 0, this.C = jn[2] | 0, this.D = jn[3] | 0, this.E = jn[4] | 0;
  }
  get() {
    const { A: t, B: r, C: n, D: i, E: s } = this;
    return [t, r, n, i, s];
  }
  set(t, r, n, i, s) {
    this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = i | 0, this.E = s | 0;
  }
  process(t, r) {
    for (let l = 0; l < 16; l++, r += 4)
      br[l] = t.getUint32(r, !1);
    for (let l = 16; l < 80; l++)
      br[l] = (0, Bi.rotl)(br[l - 3] ^ br[l - 8] ^ br[l - 14] ^ br[l - 16], 1);
    let { A: n, B: i, C: s, D: o, E: a } = this;
    for (let l = 0; l < 80; l++) {
      let p, f;
      l < 20 ? (p = (0, Do.Chi)(i, s, o), f = 1518500249) : l < 40 ? (p = i ^ s ^ o, f = 1859775393) : l < 60 ? (p = (0, Do.Maj)(i, s, o), f = 2400959708) : (p = i ^ s ^ o, f = 3395469782);
      const d = (0, Bi.rotl)(n, 5) + p + a + f + br[l] | 0;
      a = o, o = s, s = (0, Bi.rotl)(i, 30), i = n, n = d;
    }
    n = n + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, this.set(n, i, s, o, a);
  }
  roundClean() {
    br.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
ao.sha1 = (0, Bi.wrapConstructor)(() => new Bd());
var qr = {};
Object.defineProperty(qr, "__esModule", { value: !0 });
qr.sha224 = qr.sha256 = void 0;
const jo = zt, At = ui, Cd = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Sr = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), vr = /* @__PURE__ */ new Uint32Array(64);
class cc extends jo.HashMD {
  constructor() {
    super(64, 32, 8, !1), this.A = Sr[0] | 0, this.B = Sr[1] | 0, this.C = Sr[2] | 0, this.D = Sr[3] | 0, this.E = Sr[4] | 0, this.F = Sr[5] | 0, this.G = Sr[6] | 0, this.H = Sr[7] | 0;
  }
  get() {
    const { A: t, B: r, C: n, D: i, E: s, F: o, G: a, H: l } = this;
    return [t, r, n, i, s, o, a, l];
  }
  // prettier-ignore
  set(t, r, n, i, s, o, a, l) {
    this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = i | 0, this.E = s | 0, this.F = o | 0, this.G = a | 0, this.H = l | 0;
  }
  process(t, r) {
    for (let d = 0; d < 16; d++, r += 4)
      vr[d] = t.getUint32(r, !1);
    for (let d = 16; d < 64; d++) {
      const _ = vr[d - 15], m = vr[d - 2], B = (0, At.rotr)(_, 7) ^ (0, At.rotr)(_, 18) ^ _ >>> 3, I = (0, At.rotr)(m, 17) ^ (0, At.rotr)(m, 19) ^ m >>> 10;
      vr[d] = I + vr[d - 7] + B + vr[d - 16] | 0;
    }
    let { A: n, B: i, C: s, D: o, E: a, F: l, G: p, H: f } = this;
    for (let d = 0; d < 64; d++) {
      const _ = (0, At.rotr)(a, 6) ^ (0, At.rotr)(a, 11) ^ (0, At.rotr)(a, 25), m = f + _ + (0, jo.Chi)(a, l, p) + Cd[d] + vr[d] | 0, I = ((0, At.rotr)(n, 2) ^ (0, At.rotr)(n, 13) ^ (0, At.rotr)(n, 22)) + (0, jo.Maj)(n, i, s) | 0;
      f = p, p = l, l = a, a = o + m | 0, o = s, s = i, i = n, n = m + I | 0;
    }
    n = n + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, l = l + this.F | 0, p = p + this.G | 0, f = f + this.H | 0, this.set(n, i, s, o, a, l, p, f);
  }
  roundClean() {
    vr.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class Fd extends cc {
  constructor() {
    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
  }
}
qr.sha256 = (0, At.wrapConstructor)(() => new cc());
qr.sha224 = (0, At.wrapConstructor)(() => new Fd());
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.taggedHash = e.TAGGED_HASH_PREFIXES = e.TAGS = e.hash256 = e.hash160 = e.sha256 = e.sha1 = e.ripemd160 = void 0;
  const t = Nn, r = ao, n = qr;
  function i(f) {
    return H.from((0, t.ripemd160)(Uint8Array.from(f)));
  }
  e.ripemd160 = i;
  function s(f) {
    return H.from((0, r.sha1)(Uint8Array.from(f)));
  }
  e.sha1 = s;
  function o(f) {
    return H.from((0, n.sha256)(Uint8Array.from(f)));
  }
  e.sha256 = o;
  function a(f) {
    return H.from(
      (0, t.ripemd160)((0, n.sha256)(Uint8Array.from(f)))
    );
  }
  e.hash160 = a;
  function l(f) {
    return H.from(
      (0, n.sha256)((0, n.sha256)(Uint8Array.from(f)))
    );
  }
  e.hash256 = l, e.TAGS = [
    "BIP0340/challenge",
    "BIP0340/aux",
    "BIP0340/nonce",
    "TapLeaf",
    "TapBranch",
    "TapSighash",
    "TapTweak",
    "KeyAgg list",
    "KeyAgg coefficient"
  ], e.TAGGED_HASH_PREFIXES = {
    "BIP0340/challenge": H.from([
      123,
      181,
      45,
      122,
      159,
      239,
      88,
      50,
      62,
      177,
      191,
      122,
      64,
      125,
      179,
      130,
      210,
      243,
      242,
      216,
      27,
      177,
      34,
      79,
      73,
      254,
      81,
      143,
      109,
      72,
      211,
      124,
      123,
      181,
      45,
      122,
      159,
      239,
      88,
      50,
      62,
      177,
      191,
      122,
      64,
      125,
      179,
      130,
      210,
      243,
      242,
      216,
      27,
      177,
      34,
      79,
      73,
      254,
      81,
      143,
      109,
      72,
      211,
      124
    ]),
    "BIP0340/aux": H.from([
      241,
      239,
      78,
      94,
      192,
      99,
      202,
      218,
      109,
      148,
      202,
      250,
      157,
      152,
      126,
      160,
      105,
      38,
      88,
      57,
      236,
      193,
      31,
      151,
      45,
      119,
      165,
      46,
      216,
      193,
      204,
      144,
      241,
      239,
      78,
      94,
      192,
      99,
      202,
      218,
      109,
      148,
      202,
      250,
      157,
      152,
      126,
      160,
      105,
      38,
      88,
      57,
      236,
      193,
      31,
      151,
      45,
      119,
      165,
      46,
      216,
      193,
      204,
      144
    ]),
    "BIP0340/nonce": H.from([
      7,
      73,
      119,
      52,
      167,
      155,
      203,
      53,
      91,
      155,
      140,
      125,
      3,
      79,
      18,
      28,
      244,
      52,
      215,
      62,
      247,
      45,
      218,
      25,
      135,
      0,
      97,
      251,
      82,
      191,
      235,
      47,
      7,
      73,
      119,
      52,
      167,
      155,
      203,
      53,
      91,
      155,
      140,
      125,
      3,
      79,
      18,
      28,
      244,
      52,
      215,
      62,
      247,
      45,
      218,
      25,
      135,
      0,
      97,
      251,
      82,
      191,
      235,
      47
    ]),
    TapLeaf: H.from([
      174,
      234,
      143,
      220,
      66,
      8,
      152,
      49,
      5,
      115,
      75,
      88,
      8,
      29,
      30,
      38,
      56,
      211,
      95,
      28,
      181,
      64,
      8,
      212,
      211,
      87,
      202,
      3,
      190,
      120,
      233,
      238,
      174,
      234,
      143,
      220,
      66,
      8,
      152,
      49,
      5,
      115,
      75,
      88,
      8,
      29,
      30,
      38,
      56,
      211,
      95,
      28,
      181,
      64,
      8,
      212,
      211,
      87,
      202,
      3,
      190,
      120,
      233,
      238
    ]),
    TapBranch: H.from([
      25,
      65,
      161,
      242,
      229,
      110,
      185,
      95,
      162,
      169,
      241,
      148,
      190,
      92,
      1,
      247,
      33,
      111,
      51,
      237,
      130,
      176,
      145,
      70,
      52,
      144,
      208,
      91,
      245,
      22,
      160,
      21,
      25,
      65,
      161,
      242,
      229,
      110,
      185,
      95,
      162,
      169,
      241,
      148,
      190,
      92,
      1,
      247,
      33,
      111,
      51,
      237,
      130,
      176,
      145,
      70,
      52,
      144,
      208,
      91,
      245,
      22,
      160,
      21
    ]),
    TapSighash: H.from([
      244,
      10,
      72,
      223,
      75,
      42,
      112,
      200,
      180,
      146,
      75,
      242,
      101,
      70,
      97,
      237,
      61,
      149,
      253,
      102,
      163,
      19,
      235,
      135,
      35,
      117,
      151,
      198,
      40,
      228,
      160,
      49,
      244,
      10,
      72,
      223,
      75,
      42,
      112,
      200,
      180,
      146,
      75,
      242,
      101,
      70,
      97,
      237,
      61,
      149,
      253,
      102,
      163,
      19,
      235,
      135,
      35,
      117,
      151,
      198,
      40,
      228,
      160,
      49
    ]),
    TapTweak: H.from([
      232,
      15,
      225,
      99,
      156,
      156,
      160,
      80,
      227,
      175,
      27,
      57,
      193,
      67,
      198,
      62,
      66,
      156,
      188,
      235,
      21,
      217,
      64,
      251,
      181,
      197,
      161,
      244,
      175,
      87,
      197,
      233,
      232,
      15,
      225,
      99,
      156,
      156,
      160,
      80,
      227,
      175,
      27,
      57,
      193,
      67,
      198,
      62,
      66,
      156,
      188,
      235,
      21,
      217,
      64,
      251,
      181,
      197,
      161,
      244,
      175,
      87,
      197,
      233
    ]),
    "KeyAgg list": H.from([
      72,
      28,
      151,
      28,
      60,
      11,
      70,
      215,
      240,
      178,
      117,
      174,
      89,
      141,
      78,
      44,
      126,
      215,
      49,
      156,
      89,
      74,
      92,
      110,
      199,
      158,
      160,
      212,
      153,
      2,
      148,
      240,
      72,
      28,
      151,
      28,
      60,
      11,
      70,
      215,
      240,
      178,
      117,
      174,
      89,
      141,
      78,
      44,
      126,
      215,
      49,
      156,
      89,
      74,
      92,
      110,
      199,
      158,
      160,
      212,
      153,
      2,
      148,
      240
    ]),
    "KeyAgg coefficient": H.from([
      191,
      201,
      4,
      3,
      77,
      28,
      136,
      232,
      200,
      14,
      34,
      229,
      61,
      36,
      86,
      109,
      100,
      130,
      78,
      214,
      66,
      114,
      129,
      192,
      145,
      0,
      249,
      77,
      205,
      82,
      201,
      129,
      191,
      201,
      4,
      3,
      77,
      28,
      136,
      232,
      200,
      14,
      34,
      229,
      61,
      36,
      86,
      109,
      100,
      130,
      78,
      214,
      66,
      114,
      129,
      192,
      145,
      0,
      249,
      77,
      205,
      82,
      201,
      129
    ])
  };
  function p(f, d) {
    return o(H.concat([e.TAGGED_HASH_PREFIXES[f], d]));
  }
  e.taggedHash = p;
})(Jt);
function Rd(e) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), r = 0; r < t.length; r++)
    t[r] = 255;
  for (var n = 0; n < e.length; n++) {
    var i = e.charAt(n), s = i.charCodeAt(0);
    if (t[s] !== 255)
      throw new TypeError(i + " is ambiguous");
    t[s] = n;
  }
  var o = e.length, a = e.charAt(0), l = Math.log(o) / Math.log(256), p = Math.log(256) / Math.log(o);
  function f(m) {
    if (m instanceof Uint8Array || (ArrayBuffer.isView(m) ? m = new Uint8Array(m.buffer, m.byteOffset, m.byteLength) : Array.isArray(m) && (m = Uint8Array.from(m))), !(m instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (m.length === 0)
      return "";
    for (var B = 0, I = 0, C = 0, D = m.length; C !== D && m[C] === 0; )
      C++, B++;
    for (var b = (D - C) * p + 1 >>> 0, A = new Uint8Array(b); C !== D; ) {
      for (var x = m[C], M = 0, U = b - 1; (x !== 0 || M < I) && U !== -1; U--, M++)
        x += 256 * A[U] >>> 0, A[U] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      I = M, C++;
    }
    for (var W = b - I; W !== b && A[W] === 0; )
      W++;
    for (var g = a.repeat(B); W < b; ++W)
      g += e.charAt(A[W]);
    return g;
  }
  function d(m) {
    if (typeof m != "string")
      throw new TypeError("Expected String");
    if (m.length === 0)
      return new Uint8Array();
    for (var B = 0, I = 0, C = 0; m[B] === a; )
      I++, B++;
    for (var D = (m.length - B) * l + 1 >>> 0, b = new Uint8Array(D); m[B]; ) {
      var A = t[m.charCodeAt(B)];
      if (A === 255)
        return;
      for (var x = 0, M = D - 1; (A !== 0 || x < C) && M !== -1; M--, x++)
        A += o * b[M] >>> 0, b[M] = A % 256 >>> 0, A = A / 256 >>> 0;
      if (A !== 0)
        throw new Error("Non-zero carry");
      C = x, B++;
    }
    for (var U = D - C; U !== D && b[U] === 0; )
      U++;
    for (var W = new Uint8Array(I + (D - U)), g = I; U !== D; )
      W[g++] = b[U++];
    return W;
  }
  function _(m) {
    var B = d(m);
    if (B)
      return B;
    throw new Error("Non-base" + o + " character");
  }
  return {
    encode: f,
    decodeUnsafe: d,
    decode: _
  };
}
var Ud = Rd;
const Ld = Ud, Hd = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var Md = Ld(Hd), Ko = Md, $d = function(e) {
  function t(s) {
    var o = Uint8Array.from(s), a = e(o), l = o.length + 4, p = new Uint8Array(l);
    return p.set(o, 0), p.set(a.subarray(0, 4), o.length), Ko.encode(p, l);
  }
  function r(s) {
    var o = s.slice(0, -4), a = s.slice(-4), l = e(o);
    if (!(a[0] ^ l[0] | a[1] ^ l[1] | a[2] ^ l[2] | a[3] ^ l[3]))
      return o;
  }
  function n(s) {
    var o = Ko.decodeUnsafe(s);
    if (o)
      return r(o);
  }
  function i(s) {
    var o = Ko.decode(s), a = r(o);
    if (!a) throw new Error("Invalid checksum");
    return a;
  }
  return {
    encode: t,
    decode: i,
    decodeUnsafe: n
  };
}, { sha256: Na } = qr, Dd = $d;
function jd(e) {
  return Na(Na(e));
}
var Hs = Dd(jd);
Object.defineProperty(oo, "__esModule", { value: !0 });
oo.p2pkh = void 0;
const Wo = Jt, Kd = Xe, _n = ht(), at = tt, tr = vt, Ba = Hs, _r = _n.OPS;
function Wd(e, t) {
  if (!e.address && !e.hash && !e.output && !e.pubkey && !e.input)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, at.typeforce)(
    {
      network: at.typeforce.maybe(at.typeforce.Object),
      address: at.typeforce.maybe(at.typeforce.String),
      hash: at.typeforce.maybe(at.typeforce.BufferN(20)),
      output: at.typeforce.maybe(at.typeforce.BufferN(25)),
      pubkey: at.typeforce.maybe(at.isPoint),
      signature: at.typeforce.maybe(_n.isCanonicalScriptSignature),
      input: at.typeforce.maybe(at.typeforce.Buffer)
    },
    e
  );
  const r = tr.value(() => {
    const o = H.from(Ba.decode(e.address)), a = o.readUInt8(0), l = o.slice(1);
    return { version: a, hash: l };
  }), n = tr.value(() => _n.decompile(e.input)), i = e.network || Kd.bitcoin, s = { name: "p2pkh", network: i };
  if (tr.prop(s, "address", () => {
    if (!s.hash) return;
    const o = H.allocUnsafe(21);
    return o.writeUInt8(i.pubKeyHash, 0), s.hash.copy(o, 1), Ba.encode(o);
  }), tr.prop(s, "hash", () => {
    if (e.output) return e.output.slice(3, 23);
    if (e.address) return r().hash;
    if (e.pubkey || s.pubkey) return Wo.hash160(e.pubkey || s.pubkey);
  }), tr.prop(s, "output", () => {
    if (s.hash)
      return _n.compile([
        _r.OP_DUP,
        _r.OP_HASH160,
        s.hash,
        _r.OP_EQUALVERIFY,
        _r.OP_CHECKSIG
      ]);
  }), tr.prop(s, "pubkey", () => {
    if (e.input)
      return n()[1];
  }), tr.prop(s, "signature", () => {
    if (e.input)
      return n()[0];
  }), tr.prop(s, "input", () => {
    if (e.pubkey && e.signature)
      return _n.compile([e.signature, e.pubkey]);
  }), tr.prop(s, "witness", () => {
    if (s.input)
      return [];
  }), t.validate) {
    let o = H.from([]);
    if (e.address) {
      if (r().version !== i.pubKeyHash)
        throw new TypeError("Invalid version or Network mismatch");
      if (r().hash.length !== 20) throw new TypeError("Invalid address");
      o = r().hash;
    }
    if (e.hash) {
      if (o.length > 0 && !o.equals(e.hash))
        throw new TypeError("Hash mismatch");
      o = e.hash;
    }
    if (e.output) {
      if (e.output.length !== 25 || e.output[0] !== _r.OP_DUP || e.output[1] !== _r.OP_HASH160 || e.output[2] !== 20 || e.output[23] !== _r.OP_EQUALVERIFY || e.output[24] !== _r.OP_CHECKSIG)
        throw new TypeError("Output is invalid");
      const a = e.output.slice(3, 23);
      if (o.length > 0 && !o.equals(a))
        throw new TypeError("Hash mismatch");
      o = a;
    }
    if (e.pubkey) {
      const a = Wo.hash160(e.pubkey);
      if (o.length > 0 && !o.equals(a))
        throw new TypeError("Hash mismatch");
      o = a;
    }
    if (e.input) {
      const a = n();
      if (a.length !== 2) throw new TypeError("Input is invalid");
      if (!_n.isCanonicalScriptSignature(a[0]))
        throw new TypeError("Input has invalid signature");
      if (!(0, at.isPoint)(a[1]))
        throw new TypeError("Input has invalid pubkey");
      if (e.signature && !e.signature.equals(a[0]))
        throw new TypeError("Signature mismatch");
      if (e.pubkey && !e.pubkey.equals(a[1]))
        throw new TypeError("Pubkey mismatch");
      const l = Wo.hash160(a[1]);
      if (o.length > 0 && !o.equals(l))
        throw new TypeError("Hash mismatch");
    }
  }
  return Object.assign(s, e);
}
oo.p2pkh = Wd;
var uo = {};
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.p2sh = void 0;
const Ca = Jt, Gd = Xe, Kt = ht(), Ie = tt, Dt = vt, Fa = Hs, Kn = Kt.OPS;
function Vd(e, t) {
  if (!e.address && !e.hash && !e.output && !e.redeem && !e.input)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, Ie.typeforce)(
    {
      network: Ie.typeforce.maybe(Ie.typeforce.Object),
      address: Ie.typeforce.maybe(Ie.typeforce.String),
      hash: Ie.typeforce.maybe(Ie.typeforce.BufferN(20)),
      output: Ie.typeforce.maybe(Ie.typeforce.BufferN(23)),
      redeem: Ie.typeforce.maybe({
        network: Ie.typeforce.maybe(Ie.typeforce.Object),
        output: Ie.typeforce.maybe(Ie.typeforce.Buffer),
        input: Ie.typeforce.maybe(Ie.typeforce.Buffer),
        witness: Ie.typeforce.maybe(
          Ie.typeforce.arrayOf(Ie.typeforce.Buffer)
        )
      }),
      input: Ie.typeforce.maybe(Ie.typeforce.Buffer),
      witness: Ie.typeforce.maybe(
        Ie.typeforce.arrayOf(Ie.typeforce.Buffer)
      )
    },
    e
  );
  let r = e.network;
  r || (r = e.redeem && e.redeem.network || Gd.bitcoin);
  const n = { network: r }, i = Dt.value(() => {
    const a = H.from(Fa.decode(e.address)), l = a.readUInt8(0), p = a.slice(1);
    return { version: l, hash: p };
  }), s = Dt.value(() => Kt.decompile(e.input)), o = Dt.value(() => {
    const a = s(), l = a[a.length - 1];
    return {
      network: r,
      output: l === Kn.OP_FALSE ? H.from([]) : l,
      input: Kt.compile(a.slice(0, -1)),
      witness: e.witness || []
    };
  });
  if (Dt.prop(n, "address", () => {
    if (!n.hash) return;
    const a = H.allocUnsafe(21);
    return a.writeUInt8(n.network.scriptHash, 0), n.hash.copy(a, 1), Fa.encode(a);
  }), Dt.prop(n, "hash", () => {
    if (e.output) return e.output.slice(2, 22);
    if (e.address) return i().hash;
    if (n.redeem && n.redeem.output) return Ca.hash160(n.redeem.output);
  }), Dt.prop(n, "output", () => {
    if (n.hash)
      return Kt.compile([Kn.OP_HASH160, n.hash, Kn.OP_EQUAL]);
  }), Dt.prop(n, "redeem", () => {
    if (e.input)
      return o();
  }), Dt.prop(n, "input", () => {
    if (!(!e.redeem || !e.redeem.input || !e.redeem.output))
      return Kt.compile(
        [].concat(Kt.decompile(e.redeem.input), e.redeem.output)
      );
  }), Dt.prop(n, "witness", () => {
    if (n.redeem && n.redeem.witness) return n.redeem.witness;
    if (n.input) return [];
  }), Dt.prop(n, "name", () => {
    const a = ["p2sh"];
    return n.redeem !== void 0 && n.redeem.name !== void 0 && a.push(n.redeem.name), a.join("-");
  }), t.validate) {
    let a = H.from([]);
    if (e.address) {
      if (i().version !== r.scriptHash)
        throw new TypeError("Invalid version or Network mismatch");
      if (i().hash.length !== 20) throw new TypeError("Invalid address");
      a = i().hash;
    }
    if (e.hash) {
      if (a.length > 0 && !a.equals(e.hash))
        throw new TypeError("Hash mismatch");
      a = e.hash;
    }
    if (e.output) {
      if (e.output.length !== 23 || e.output[0] !== Kn.OP_HASH160 || e.output[1] !== 20 || e.output[22] !== Kn.OP_EQUAL)
        throw new TypeError("Output is invalid");
      const p = e.output.slice(2, 22);
      if (a.length > 0 && !a.equals(p))
        throw new TypeError("Hash mismatch");
      a = p;
    }
    const l = (p) => {
      if (p.output) {
        const f = Kt.decompile(p.output);
        if (!f || f.length < 1)
          throw new TypeError("Redeem.output too short");
        if (p.output.byteLength > 520)
          throw new TypeError(
            "Redeem.output unspendable if larger than 520 bytes"
          );
        if (Kt.countNonPushOnlyOPs(f) > 201)
          throw new TypeError(
            "Redeem.output unspendable with more than 201 non-push ops"
          );
        const d = Ca.hash160(p.output);
        if (a.length > 0 && !a.equals(d))
          throw new TypeError("Hash mismatch");
        a = d;
      }
      if (p.input) {
        const f = p.input.length > 0, d = p.witness && p.witness.length > 0;
        if (!f && !d) throw new TypeError("Empty input");
        if (f && d)
          throw new TypeError("Input and witness provided");
        if (f) {
          const _ = Kt.decompile(p.input);
          if (!Kt.isPushOnly(_))
            throw new TypeError("Non push-only scriptSig");
        }
      }
    };
    if (e.input) {
      const p = s();
      if (!p || p.length < 1) throw new TypeError("Input too short");
      if (!H.isBuffer(o().output))
        throw new TypeError("Input is invalid");
      l(o());
    }
    if (e.redeem) {
      if (e.redeem.network && e.redeem.network !== r)
        throw new TypeError("Network mismatch");
      if (e.input) {
        const p = o();
        if (e.redeem.output && !e.redeem.output.equals(p.output))
          throw new TypeError("Redeem.output mismatch");
        if (e.redeem.input && !e.redeem.input.equals(p.input))
          throw new TypeError("Redeem.input mismatch");
      }
      l(e.redeem);
    }
    if (e.witness && e.redeem && e.redeem.witness && !(0, Ie.stacksEqual)(e.redeem.witness, e.witness))
      throw new TypeError("Witness and redeem.witness mismatch");
  }
  return Object.assign(n, e);
}
uo.p2sh = Vd;
var co = {}, dr = {};
Object.defineProperty(dr, "__esModule", { value: !0 });
dr.bech32m = dr.bech32 = void 0;
const Di = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", lc = {};
for (let e = 0; e < Di.length; e++) {
  const t = Di.charAt(e);
  lc[t] = e;
}
function On(e) {
  const t = e >> 25;
  return (e & 33554431) << 5 ^ -(t >> 0 & 1) & 996825010 ^ -(t >> 1 & 1) & 642813549 ^ -(t >> 2 & 1) & 513874426 ^ -(t >> 3 & 1) & 1027748829 ^ -(t >> 4 & 1) & 705979059;
}
function Ra(e) {
  let t = 1;
  for (let r = 0; r < e.length; ++r) {
    const n = e.charCodeAt(r);
    if (n < 33 || n > 126)
      return "Invalid prefix (" + e + ")";
    t = On(t) ^ n >> 5;
  }
  t = On(t);
  for (let r = 0; r < e.length; ++r) {
    const n = e.charCodeAt(r);
    t = On(t) ^ n & 31;
  }
  return t;
}
function Ms(e, t, r, n) {
  let i = 0, s = 0;
  const o = (1 << r) - 1, a = [];
  for (let l = 0; l < e.length; ++l)
    for (i = i << t | e[l], s += t; s >= r; )
      s -= r, a.push(i >> s & o);
  if (n)
    s > 0 && a.push(i << r - s & o);
  else {
    if (s >= t)
      return "Excess padding";
    if (i << r - s & o)
      return "Non-zero padding";
  }
  return a;
}
function qd(e) {
  return Ms(e, 8, 5, !0);
}
function Xd(e) {
  const t = Ms(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
}
function zd(e) {
  const t = Ms(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
  throw new Error(t);
}
function fc(e) {
  let t;
  e === "bech32" ? t = 1 : t = 734539939;
  function r(o, a, l) {
    if (l = l || 90, o.length + 7 + a.length > l)
      throw new TypeError("Exceeds length limit");
    o = o.toLowerCase();
    let p = Ra(o);
    if (typeof p == "string")
      throw new Error(p);
    let f = o + "1";
    for (let d = 0; d < a.length; ++d) {
      const _ = a[d];
      if (_ >> 5)
        throw new Error("Non 5-bit word");
      p = On(p) ^ _, f += Di.charAt(_);
    }
    for (let d = 0; d < 6; ++d)
      p = On(p);
    p ^= t;
    for (let d = 0; d < 6; ++d) {
      const _ = p >> (5 - d) * 5 & 31;
      f += Di.charAt(_);
    }
    return f;
  }
  function n(o, a) {
    if (a = a || 90, o.length < 8)
      return o + " too short";
    if (o.length > a)
      return "Exceeds length limit";
    const l = o.toLowerCase(), p = o.toUpperCase();
    if (o !== l && o !== p)
      return "Mixed-case string " + o;
    o = l;
    const f = o.lastIndexOf("1");
    if (f === -1)
      return "No separator character for " + o;
    if (f === 0)
      return "Missing prefix for " + o;
    const d = o.slice(0, f), _ = o.slice(f + 1);
    if (_.length < 6)
      return "Data too short";
    let m = Ra(d);
    if (typeof m == "string")
      return m;
    const B = [];
    for (let I = 0; I < _.length; ++I) {
      const C = _.charAt(I), D = lc[C];
      if (D === void 0)
        return "Unknown character " + C;
      m = On(m) ^ D, !(I + 6 >= _.length) && B.push(D);
    }
    return m !== t ? "Invalid checksum for " + o : { prefix: d, words: B };
  }
  function i(o, a) {
    const l = n(o, a);
    if (typeof l == "object")
      return l;
  }
  function s(o, a) {
    const l = n(o, a);
    if (typeof l == "object")
      return l;
    throw new Error(l);
  }
  return {
    decodeUnsafe: i,
    decode: s,
    encode: r,
    toWords: qd,
    fromWordsUnsafe: Xd,
    fromWords: zd
  };
}
dr.bech32 = fc("bech32");
dr.bech32m = fc("bech32m");
Object.defineProperty(co, "__esModule", { value: !0 });
co.p2wpkh = void 0;
const Go = Jt, Yd = Xe, Ci = ht(), $e = tt, Tr = vt, Si = dr, Ua = Ci.OPS, Jd = H.alloc(0);
function Qd(e, t) {
  if (!e.address && !e.hash && !e.output && !e.pubkey && !e.witness)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, $e.typeforce)(
    {
      address: $e.typeforce.maybe($e.typeforce.String),
      hash: $e.typeforce.maybe($e.typeforce.BufferN(20)),
      input: $e.typeforce.maybe($e.typeforce.BufferN(0)),
      network: $e.typeforce.maybe($e.typeforce.Object),
      output: $e.typeforce.maybe($e.typeforce.BufferN(22)),
      pubkey: $e.typeforce.maybe($e.isPoint),
      signature: $e.typeforce.maybe(Ci.isCanonicalScriptSignature),
      witness: $e.typeforce.maybe(
        $e.typeforce.arrayOf($e.typeforce.Buffer)
      )
    },
    e
  );
  const r = Tr.value(() => {
    const s = Si.bech32.decode(e.address), o = s.words.shift(), a = Si.bech32.fromWords(s.words);
    return {
      version: o,
      prefix: s.prefix,
      data: H.from(a)
    };
  }), n = e.network || Yd.bitcoin, i = { name: "p2wpkh", network: n };
  if (Tr.prop(i, "address", () => {
    if (!i.hash) return;
    const s = Si.bech32.toWords(i.hash);
    return s.unshift(0), Si.bech32.encode(n.bech32, s);
  }), Tr.prop(i, "hash", () => {
    if (e.output) return e.output.slice(2, 22);
    if (e.address) return r().data;
    if (e.pubkey || i.pubkey) return Go.hash160(e.pubkey || i.pubkey);
  }), Tr.prop(i, "output", () => {
    if (i.hash)
      return Ci.compile([Ua.OP_0, i.hash]);
  }), Tr.prop(i, "pubkey", () => {
    if (e.pubkey) return e.pubkey;
    if (e.witness)
      return e.witness[1];
  }), Tr.prop(i, "signature", () => {
    if (e.witness)
      return e.witness[0];
  }), Tr.prop(i, "input", () => {
    if (i.witness)
      return Jd;
  }), Tr.prop(i, "witness", () => {
    if (e.pubkey && e.signature)
      return [e.signature, e.pubkey];
  }), t.validate) {
    let s = H.from([]);
    if (e.address) {
      if (n && n.bech32 !== r().prefix)
        throw new TypeError("Invalid prefix or Network mismatch");
      if (r().version !== 0)
        throw new TypeError("Invalid address version");
      if (r().data.length !== 20)
        throw new TypeError("Invalid address data");
      s = r().data;
    }
    if (e.hash) {
      if (s.length > 0 && !s.equals(e.hash))
        throw new TypeError("Hash mismatch");
      s = e.hash;
    }
    if (e.output) {
      if (e.output.length !== 22 || e.output[0] !== Ua.OP_0 || e.output[1] !== 20)
        throw new TypeError("Output is invalid");
      if (s.length > 0 && !s.equals(e.output.slice(2)))
        throw new TypeError("Hash mismatch");
      s = e.output.slice(2);
    }
    if (e.pubkey) {
      const o = Go.hash160(e.pubkey);
      if (s.length > 0 && !s.equals(o))
        throw new TypeError("Hash mismatch");
      if (s = o, !(0, $e.isPoint)(e.pubkey) || e.pubkey.length !== 33)
        throw new TypeError("Invalid pubkey for p2wpkh");
    }
    if (e.witness) {
      if (e.witness.length !== 2) throw new TypeError("Witness is invalid");
      if (!Ci.isCanonicalScriptSignature(e.witness[0]))
        throw new TypeError("Witness has invalid signature");
      if (!(0, $e.isPoint)(e.witness[1]) || e.witness[1].length !== 33)
        throw new TypeError("Witness has invalid pubkey");
      if (e.signature && !e.signature.equals(e.witness[0]))
        throw new TypeError("Signature mismatch");
      if (e.pubkey && !e.pubkey.equals(e.witness[1]))
        throw new TypeError("Pubkey mismatch");
      const o = Go.hash160(e.witness[1]);
      if (s.length > 0 && !s.equals(o))
        throw new TypeError("Hash mismatch");
    }
  }
  return Object.assign(i, e);
}
co.p2wpkh = Qd;
var lo = {};
Object.defineProperty(lo, "__esModule", { value: !0 });
lo.p2wsh = void 0;
const La = Jt, Zd = Xe, ir = ht(), be = tt, rr = vt, vi = dr, Ha = ir.OPS, Vo = H.alloc(0);
function _i(e) {
  return !!(H.isBuffer(e) && e.length === 65 && e[0] === 4 && (0, be.isPoint)(e));
}
function ep(e, t) {
  if (!e.address && !e.hash && !e.output && !e.redeem && !e.witness)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, be.typeforce)(
    {
      network: be.typeforce.maybe(be.typeforce.Object),
      address: be.typeforce.maybe(be.typeforce.String),
      hash: be.typeforce.maybe(be.typeforce.BufferN(32)),
      output: be.typeforce.maybe(be.typeforce.BufferN(34)),
      redeem: be.typeforce.maybe({
        input: be.typeforce.maybe(be.typeforce.Buffer),
        network: be.typeforce.maybe(be.typeforce.Object),
        output: be.typeforce.maybe(be.typeforce.Buffer),
        witness: be.typeforce.maybe(
          be.typeforce.arrayOf(be.typeforce.Buffer)
        )
      }),
      input: be.typeforce.maybe(be.typeforce.BufferN(0)),
      witness: be.typeforce.maybe(
        be.typeforce.arrayOf(be.typeforce.Buffer)
      )
    },
    e
  );
  const r = rr.value(() => {
    const o = vi.bech32.decode(e.address), a = o.words.shift(), l = vi.bech32.fromWords(o.words);
    return {
      version: a,
      prefix: o.prefix,
      data: H.from(l)
    };
  }), n = rr.value(() => ir.decompile(e.redeem.input));
  let i = e.network;
  i || (i = e.redeem && e.redeem.network || Zd.bitcoin);
  const s = { network: i };
  if (rr.prop(s, "address", () => {
    if (!s.hash) return;
    const o = vi.bech32.toWords(s.hash);
    return o.unshift(0), vi.bech32.encode(i.bech32, o);
  }), rr.prop(s, "hash", () => {
    if (e.output) return e.output.slice(2);
    if (e.address) return r().data;
    if (s.redeem && s.redeem.output) return La.sha256(s.redeem.output);
  }), rr.prop(s, "output", () => {
    if (s.hash)
      return ir.compile([Ha.OP_0, s.hash]);
  }), rr.prop(s, "redeem", () => {
    if (e.witness)
      return {
        output: e.witness[e.witness.length - 1],
        input: Vo,
        witness: e.witness.slice(0, -1)
      };
  }), rr.prop(s, "input", () => {
    if (s.witness)
      return Vo;
  }), rr.prop(s, "witness", () => {
    if (e.redeem && e.redeem.input && e.redeem.input.length > 0 && e.redeem.output && e.redeem.output.length > 0) {
      const o = ir.toStack(n());
      return s.redeem = Object.assign({ witness: o }, e.redeem), s.redeem.input = Vo, [].concat(o, e.redeem.output);
    }
    if (e.redeem && e.redeem.output && e.redeem.witness)
      return [].concat(e.redeem.witness, e.redeem.output);
  }), rr.prop(s, "name", () => {
    const o = ["p2wsh"];
    return s.redeem !== void 0 && s.redeem.name !== void 0 && o.push(s.redeem.name), o.join("-");
  }), t.validate) {
    let o = H.from([]);
    if (e.address) {
      if (r().prefix !== i.bech32)
        throw new TypeError("Invalid prefix or Network mismatch");
      if (r().version !== 0)
        throw new TypeError("Invalid address version");
      if (r().data.length !== 32)
        throw new TypeError("Invalid address data");
      o = r().data;
    }
    if (e.hash) {
      if (o.length > 0 && !o.equals(e.hash))
        throw new TypeError("Hash mismatch");
      o = e.hash;
    }
    if (e.output) {
      if (e.output.length !== 34 || e.output[0] !== Ha.OP_0 || e.output[1] !== 32)
        throw new TypeError("Output is invalid");
      const a = e.output.slice(2);
      if (o.length > 0 && !o.equals(a))
        throw new TypeError("Hash mismatch");
      o = a;
    }
    if (e.redeem) {
      if (e.redeem.network && e.redeem.network !== i)
        throw new TypeError("Network mismatch");
      if (e.redeem.input && e.redeem.input.length > 0 && e.redeem.witness && e.redeem.witness.length > 0)
        throw new TypeError("Ambiguous witness source");
      if (e.redeem.output) {
        const a = ir.decompile(e.redeem.output);
        if (!a || a.length < 1)
          throw new TypeError("Redeem.output is invalid");
        if (e.redeem.output.byteLength > 3600)
          throw new TypeError(
            "Redeem.output unspendable if larger than 3600 bytes"
          );
        if (ir.countNonPushOnlyOPs(a) > 201)
          throw new TypeError(
            "Redeem.output unspendable with more than 201 non-push ops"
          );
        const l = La.sha256(e.redeem.output);
        if (o.length > 0 && !o.equals(l))
          throw new TypeError("Hash mismatch");
        o = l;
      }
      if (e.redeem.input && !ir.isPushOnly(n()))
        throw new TypeError("Non push-only scriptSig");
      if (e.witness && e.redeem.witness && !(0, be.stacksEqual)(e.witness, e.redeem.witness))
        throw new TypeError("Witness and redeem.witness mismatch");
      if (e.redeem.input && n().some(_i) || e.redeem.output && (ir.decompile(e.redeem.output) || []).some(
        _i
      ))
        throw new TypeError(
          "redeem.input or redeem.output contains uncompressed pubkey"
        );
    }
    if (e.witness && e.witness.length > 0) {
      const a = e.witness[e.witness.length - 1];
      if (e.redeem && e.redeem.output && !e.redeem.output.equals(a))
        throw new TypeError("Witness and redeem.output mismatch");
      if (e.witness.some(_i) || (ir.decompile(a) || []).some(_i))
        throw new TypeError("Witness contains uncompressed pubkey");
    }
  }
  return Object.assign(s, e);
}
lo.p2wsh = ep;
var Wn = {}, Fr = {};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.getEccLib = Fr.initEccLib = void 0;
const ei = {};
function tp(e) {
  e ? e !== ei.eccLib && (np(e), ei.eccLib = e) : ei.eccLib = e;
}
Fr.initEccLib = tp;
function rp() {
  if (!ei.eccLib)
    throw new Error(
      "No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance"
    );
  return ei.eccLib;
}
Fr.getEccLib = rp;
const nr = (e) => H.from(e, "hex");
function np(e) {
  Ot(typeof e.isXOnlyPoint == "function"), Ot(
    e.isXOnlyPoint(
      nr("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")
    )
  ), Ot(
    e.isXOnlyPoint(
      nr("fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e")
    )
  ), Ot(
    e.isXOnlyPoint(
      nr("f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9")
    )
  ), Ot(
    e.isXOnlyPoint(
      nr("0000000000000000000000000000000000000000000000000000000000000001")
    )
  ), Ot(
    !e.isXOnlyPoint(
      nr("0000000000000000000000000000000000000000000000000000000000000000")
    )
  ), Ot(
    !e.isXOnlyPoint(
      nr("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")
    )
  ), Ot(typeof e.xOnlyPointAddTweak == "function"), ip.forEach((t) => {
    const r = e.xOnlyPointAddTweak(nr(t.pubkey), nr(t.tweak));
    t.result === null ? Ot(r === null) : (Ot(r !== null), Ot(r.parity === t.parity), Ot(H.from(r.xOnlyPubkey).equals(nr(t.result))));
  });
}
function Ot(e) {
  if (!e) throw new Error("ecc library invalid");
}
const ip = [
  {
    pubkey: "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
    tweak: "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140",
    parity: -1,
    result: null
  },
  {
    pubkey: "1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b",
    tweak: "a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac",
    parity: 1,
    result: "e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf"
  },
  {
    pubkey: "2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991",
    tweak: "823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47",
    parity: 0,
    result: "9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c"
  }
];
var fo = {}, De = {}, ws = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, t) {
  var r = ro, n = r.Buffer;
  function i(o, a) {
    for (var l in o)
      a[l] = o[l];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = s);
  function s(o, a, l) {
    return n(o, a, l);
  }
  s.prototype = Object.create(n.prototype), i(n, s), s.from = function(o, a, l) {
    if (typeof o == "number")
      throw new TypeError("Argument must not be a number");
    return n(o, a, l);
  }, s.alloc = function(o, a, l) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    var p = n(o);
    return a !== void 0 ? typeof l == "string" ? p.fill(a, l) : p.fill(a) : p.fill(0), p;
  }, s.allocUnsafe = function(o) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    return n(o);
  }, s.allocUnsafeSlow = function(o) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    return r.SlowBuffer(o);
  };
})(ws, ws.exports);
var op = ws.exports, ys = op.Buffer, sp = 9007199254740991;
function $s(e) {
  if (e < 0 || e > sp || e % 1 !== 0) throw new RangeError("value out of range");
}
function zn(e, t, r) {
  if ($s(e), t || (t = ys.allocUnsafe(hc(e))), !ys.isBuffer(t)) throw new TypeError("buffer must be a Buffer instance");
  return r || (r = 0), e < 253 ? (t.writeUInt8(e, r), zn.bytes = 1) : e <= 65535 ? (t.writeUInt8(253, r), t.writeUInt16LE(e, r + 1), zn.bytes = 3) : e <= 4294967295 ? (t.writeUInt8(254, r), t.writeUInt32LE(e, r + 1), zn.bytes = 5) : (t.writeUInt8(255, r), t.writeUInt32LE(e >>> 0, r + 1), t.writeUInt32LE(e / 4294967296 | 0, r + 5), zn.bytes = 9), t;
}
function Yn(e, t) {
  if (!ys.isBuffer(e)) throw new TypeError("buffer must be a Buffer instance");
  t || (t = 0);
  var r = e.readUInt8(t);
  if (r < 253)
    return Yn.bytes = 1, r;
  if (r === 253)
    return Yn.bytes = 3, e.readUInt16LE(t + 1);
  if (r === 254)
    return Yn.bytes = 5, e.readUInt32LE(t + 1);
  Yn.bytes = 9;
  var n = e.readUInt32LE(t + 1), i = e.readUInt32LE(t + 5), s = i * 4294967296 + n;
  return $s(s), s;
}
function hc(e) {
  return $s(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9;
}
var ap = { encode: zn, decode: Yn, encodingLength: hc };
Object.defineProperty(De, "__esModule", { value: !0 });
De.BufferReader = De.BufferWriter = De.cloneBuffer = De.reverseBuffer = De.writeUInt64LE = De.readUInt64LE = De.varuint = void 0;
const Vr = tt, { typeforce: dc } = Vr, ni = ap;
De.varuint = ni;
function pc(e, t) {
  if (typeof e != "number")
    throw new Error("cannot write a non-number as a number");
  if (e < 0)
    throw new Error("specified a negative value for writing an unsigned value");
  if (e > t) throw new Error("RangeError: value out of range");
  if (Math.floor(e) !== e)
    throw new Error("value has a fractional component");
}
function gc(e, t) {
  const r = e.readUInt32LE(t);
  let n = e.readUInt32LE(t + 4);
  return n *= 4294967296, pc(n + r, 9007199254740991), n + r;
}
De.readUInt64LE = gc;
function wc(e, t, r) {
  return pc(t, 9007199254740991), e.writeInt32LE(t & -1, r), e.writeUInt32LE(Math.floor(t / 4294967296), r + 4), r + 8;
}
De.writeUInt64LE = wc;
function up(e) {
  if (e.length < 1) return e;
  let t = e.length - 1, r = 0;
  for (let n = 0; n < e.length / 2; n++)
    r = e[n], e[n] = e[t], e[t] = r, t--;
  return e;
}
De.reverseBuffer = up;
function cp(e) {
  const t = H.allocUnsafe(e.length);
  return e.copy(t), t;
}
De.cloneBuffer = cp;
class Ds {
  static withCapacity(t) {
    return new Ds(H.alloc(t));
  }
  constructor(t, r = 0) {
    this.buffer = t, this.offset = r, dc(Vr.tuple(Vr.Buffer, Vr.UInt32), [t, r]);
  }
  writeUInt8(t) {
    this.offset = this.buffer.writeUInt8(t, this.offset);
  }
  writeInt32(t) {
    this.offset = this.buffer.writeInt32LE(t, this.offset);
  }
  writeUInt32(t) {
    this.offset = this.buffer.writeUInt32LE(t, this.offset);
  }
  writeUInt64(t) {
    this.offset = wc(this.buffer, t, this.offset);
  }
  writeVarInt(t) {
    ni.encode(t, this.buffer, this.offset), this.offset += ni.encode.bytes;
  }
  writeSlice(t) {
    if (this.buffer.length < this.offset + t.length)
      throw new Error("Cannot write slice out of bounds");
    this.offset += t.copy(this.buffer, this.offset);
  }
  writeVarSlice(t) {
    this.writeVarInt(t.length), this.writeSlice(t);
  }
  writeVector(t) {
    this.writeVarInt(t.length), t.forEach((r) => this.writeVarSlice(r));
  }
  end() {
    if (this.buffer.length === this.offset)
      return this.buffer;
    throw new Error(`buffer size ${this.buffer.length}, offset ${this.offset}`);
  }
}
De.BufferWriter = Ds;
class lp {
  constructor(t, r = 0) {
    this.buffer = t, this.offset = r, dc(Vr.tuple(Vr.Buffer, Vr.UInt32), [t, r]);
  }
  readUInt8() {
    const t = this.buffer.readUInt8(this.offset);
    return this.offset++, t;
  }
  readInt32() {
    const t = this.buffer.readInt32LE(this.offset);
    return this.offset += 4, t;
  }
  readUInt32() {
    const t = this.buffer.readUInt32LE(this.offset);
    return this.offset += 4, t;
  }
  readUInt64() {
    const t = gc(this.buffer, this.offset);
    return this.offset += 8, t;
  }
  readVarInt() {
    const t = ni.decode(this.buffer, this.offset);
    return this.offset += ni.decode.bytes, t;
  }
  readSlice(t) {
    if (this.buffer.length < this.offset + t)
      throw new Error("Cannot read slice out of bounds");
    const r = this.buffer.slice(this.offset, this.offset + t);
    return this.offset += t, r;
  }
  readVarSlice() {
    return this.readSlice(this.readVarInt());
  }
  readVector() {
    const t = this.readVarInt(), r = [];
    for (let n = 0; n < t; n++) r.push(this.readVarSlice());
    return r;
  }
}
De.BufferReader = lp;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.tweakKey = e.tapTweakHash = e.tapleafHash = e.findScriptPath = e.toHashTree = e.rootHashFromPath = e.MAX_TAPTREE_DEPTH = e.LEAF_VERSION_TAPSCRIPT = void 0;
  const t = ro, r = Fr, n = Jt, i = De, s = tt;
  e.LEAF_VERSION_TAPSCRIPT = 192, e.MAX_TAPTREE_DEPTH = 128;
  const o = (I) => "left" in I && "right" in I;
  function a(I, C) {
    if (I.length < 33)
      throw new TypeError(
        `The control-block length is too small. Got ${I.length}, expected min 33.`
      );
    const D = (I.length - 33) / 32;
    let b = C;
    for (let A = 0; A < D; A++) {
      const x = I.slice(33 + 32 * A, 65 + 32 * A);
      b.compare(x) < 0 ? b = m(b, x) : b = m(x, b);
    }
    return b;
  }
  e.rootHashFromPath = a;
  function l(I) {
    if ((0, s.isTapleaf)(I))
      return { hash: f(I) };
    const C = [l(I[0]), l(I[1])];
    C.sort((A, x) => A.hash.compare(x.hash));
    const [D, b] = C;
    return {
      hash: m(D.hash, b.hash),
      left: D,
      right: b
    };
  }
  e.toHashTree = l;
  function p(I, C) {
    if (o(I)) {
      const D = p(I.left, C);
      if (D !== void 0) return [...D, I.right.hash];
      const b = p(I.right, C);
      if (b !== void 0) return [...b, I.left.hash];
    } else if (I.hash.equals(C))
      return [];
  }
  e.findScriptPath = p;
  function f(I) {
    const C = I.version || e.LEAF_VERSION_TAPSCRIPT;
    return n.taggedHash(
      "TapLeaf",
      t.Buffer.concat([
        t.Buffer.from([C]),
        B(I.output)
      ])
    );
  }
  e.tapleafHash = f;
  function d(I, C) {
    return n.taggedHash(
      "TapTweak",
      t.Buffer.concat(C ? [I, C] : [I])
    );
  }
  e.tapTweakHash = d;
  function _(I, C) {
    if (!t.Buffer.isBuffer(I) || I.length !== 32 || C && C.length !== 32) return null;
    const D = d(I, C), b = (0, r.getEccLib)().xOnlyPointAddTweak(I, D);
    return !b || b.xOnlyPubkey === null ? null : {
      parity: b.parity,
      x: t.Buffer.from(b.xOnlyPubkey)
    };
  }
  e.tweakKey = _;
  function m(I, C) {
    return n.taggedHash("TapBranch", t.Buffer.concat([I, C]));
  }
  function B(I) {
    const C = i.varuint.encodingLength(I.length), D = t.Buffer.allocUnsafe(C);
    return i.varuint.encode(I.length, D), t.Buffer.concat([D, I]);
  }
})(fo);
var Ma;
function fp() {
  if (Ma) return Wn;
  Ma = 1, Object.defineProperty(Wn, "__esModule", { value: !0 }), Wn.p2tr = void 0;
  const e = ro, t = Xe, r = ht(), n = tt, i = Fr, s = fo, o = vt, a = dr, l = js(), p = r.OPS, f = 1, d = 80;
  function _(m, B) {
    if (!m.address && !m.output && !m.pubkey && !m.internalPubkey && !(m.witness && m.witness.length > 1))
      throw new TypeError("Not enough data");
    B = Object.assign({ validate: !0 }, B || {}), (0, n.typeforce)(
      {
        address: n.typeforce.maybe(n.typeforce.String),
        input: n.typeforce.maybe(n.typeforce.BufferN(0)),
        network: n.typeforce.maybe(n.typeforce.Object),
        output: n.typeforce.maybe(n.typeforce.BufferN(34)),
        internalPubkey: n.typeforce.maybe(n.typeforce.BufferN(32)),
        hash: n.typeforce.maybe(n.typeforce.BufferN(32)),
        pubkey: n.typeforce.maybe(n.typeforce.BufferN(32)),
        signature: n.typeforce.maybe(
          n.typeforce.anyOf(
            n.typeforce.BufferN(64),
            n.typeforce.BufferN(65)
          )
        ),
        witness: n.typeforce.maybe(
          n.typeforce.arrayOf(n.typeforce.Buffer)
        ),
        scriptTree: n.typeforce.maybe(n.isTaptree),
        redeem: n.typeforce.maybe({
          output: n.typeforce.maybe(n.typeforce.Buffer),
          redeemVersion: n.typeforce.maybe(n.typeforce.Number),
          witness: n.typeforce.maybe(
            n.typeforce.arrayOf(n.typeforce.Buffer)
          )
        }),
        redeemVersion: n.typeforce.maybe(n.typeforce.Number)
      },
      m
    );
    const I = o.value(() => (0, l.fromBech32)(m.address)), C = o.value(() => {
      if (!(!m.witness || !m.witness.length))
        return m.witness.length >= 2 && m.witness[m.witness.length - 1][0] === d ? m.witness.slice(0, -1) : m.witness.slice();
    }), D = o.value(() => {
      if (m.scriptTree) return (0, s.toHashTree)(m.scriptTree);
      if (m.hash) return { hash: m.hash };
    }), b = m.network || t.bitcoin, A = { name: "p2tr", network: b };
    if (o.prop(A, "address", () => {
      if (!A.pubkey) return;
      const x = a.bech32m.toWords(A.pubkey);
      return x.unshift(f), a.bech32m.encode(b.bech32, x);
    }), o.prop(A, "hash", () => {
      const x = D();
      if (x) return x.hash;
      const M = C();
      if (M && M.length > 1) {
        const U = M[M.length - 1], W = U[0] & n.TAPLEAF_VERSION_MASK, g = M[M.length - 2], h = (0, s.tapleafHash)({
          output: g,
          version: W
        });
        return (0, s.rootHashFromPath)(U, h);
      }
      return null;
    }), o.prop(A, "output", () => {
      if (A.pubkey)
        return r.compile([p.OP_1, A.pubkey]);
    }), o.prop(A, "redeemVersion", () => m.redeemVersion ? m.redeemVersion : m.redeem && m.redeem.redeemVersion !== void 0 && m.redeem.redeemVersion !== null ? m.redeem.redeemVersion : s.LEAF_VERSION_TAPSCRIPT), o.prop(A, "redeem", () => {
      const x = C();
      if (!(!x || x.length < 2))
        return {
          output: x[x.length - 2],
          witness: x.slice(0, -2),
          redeemVersion: x[x.length - 1][0] & n.TAPLEAF_VERSION_MASK
        };
    }), o.prop(A, "pubkey", () => {
      if (m.pubkey) return m.pubkey;
      if (m.output) return m.output.slice(2);
      if (m.address) return I().data;
      if (A.internalPubkey) {
        const x = (0, s.tweakKey)(A.internalPubkey, A.hash);
        if (x) return x.x;
      }
    }), o.prop(A, "internalPubkey", () => {
      if (m.internalPubkey) return m.internalPubkey;
      const x = C();
      if (x && x.length > 1)
        return x[x.length - 1].slice(1, 33);
    }), o.prop(A, "signature", () => {
      if (m.signature) return m.signature;
      const x = C();
      if (!(!x || x.length !== 1))
        return x[0];
    }), o.prop(A, "witness", () => {
      if (m.witness) return m.witness;
      const x = D();
      if (x && m.redeem && m.redeem.output && m.internalPubkey) {
        const M = (0, s.tapleafHash)({
          output: m.redeem.output,
          version: A.redeemVersion
        }), U = (0, s.findScriptPath)(x, M);
        if (!U) return;
        const W = (0, s.tweakKey)(m.internalPubkey, x.hash);
        if (!W) return;
        const g = e.Buffer.concat(
          [
            e.Buffer.from([A.redeemVersion | W.parity]),
            m.internalPubkey
          ].concat(U)
        );
        return [m.redeem.output, g];
      }
      if (m.signature) return [m.signature];
    }), B.validate) {
      let x = e.Buffer.from([]);
      if (m.address) {
        if (b && b.bech32 !== I().prefix)
          throw new TypeError("Invalid prefix or Network mismatch");
        if (I().version !== f)
          throw new TypeError("Invalid address version");
        if (I().data.length !== 32)
          throw new TypeError("Invalid address data");
        x = I().data;
      }
      if (m.pubkey) {
        if (x.length > 0 && !x.equals(m.pubkey))
          throw new TypeError("Pubkey mismatch");
        x = m.pubkey;
      }
      if (m.output) {
        if (m.output.length !== 34 || m.output[0] !== p.OP_1 || m.output[1] !== 32)
          throw new TypeError("Output is invalid");
        if (x.length > 0 && !x.equals(m.output.slice(2)))
          throw new TypeError("Pubkey mismatch");
        x = m.output.slice(2);
      }
      if (m.internalPubkey) {
        const W = (0, s.tweakKey)(m.internalPubkey, A.hash);
        if (x.length > 0 && !x.equals(W.x))
          throw new TypeError("Pubkey mismatch");
        x = W.x;
      }
      if (x && x.length && !(0, i.getEccLib)().isXOnlyPoint(x))
        throw new TypeError("Invalid pubkey for p2tr");
      const M = D();
      if (m.hash && M && !m.hash.equals(M.hash))
        throw new TypeError("Hash mismatch");
      if (m.redeem && m.redeem.output && M) {
        const W = (0, s.tapleafHash)({
          output: m.redeem.output,
          version: A.redeemVersion
        });
        if (!(0, s.findScriptPath)(M, W))
          throw new TypeError("Redeem script not in tree");
      }
      const U = C();
      if (m.redeem && A.redeem) {
        if (m.redeem.redeemVersion && m.redeem.redeemVersion !== A.redeem.redeemVersion)
          throw new TypeError("Redeem.redeemVersion and witness mismatch");
        if (m.redeem.output) {
          if (r.decompile(m.redeem.output).length === 0)
            throw new TypeError("Redeem.output is invalid");
          if (A.redeem.output && !m.redeem.output.equals(A.redeem.output))
            throw new TypeError("Redeem.output and witness mismatch");
        }
        if (m.redeem.witness && A.redeem.witness && !(0, n.stacksEqual)(m.redeem.witness, A.redeem.witness))
          throw new TypeError("Redeem.witness and witness mismatch");
      }
      if (U && U.length)
        if (U.length === 1) {
          if (m.signature && !m.signature.equals(U[0]))
            throw new TypeError("Signature mismatch");
        } else {
          const W = U[U.length - 1];
          if (W.length < 33)
            throw new TypeError(
              `The control-block length is too small. Got ${W.length}, expected min 33.`
            );
          if ((W.length - 33) % 32 !== 0)
            throw new TypeError(
              `The control-block length of ${W.length} is incorrect!`
            );
          const g = (W.length - 33) / 32;
          if (g > 128)
            throw new TypeError(
              `The script path is too long. Got ${g}, expected max 128.`
            );
          const h = W.slice(1, 33);
          if (m.internalPubkey && !m.internalPubkey.equals(h))
            throw new TypeError("Internal pubkey mismatch");
          if (!(0, i.getEccLib)().isXOnlyPoint(h))
            throw new TypeError("Invalid internalPubkey for p2tr witness");
          const E = W[0] & n.TAPLEAF_VERSION_MASK, N = U[U.length - 2], y = (0, s.tapleafHash)({
            output: N,
            version: E
          }), S = (0, s.rootHashFromPath)(W, y), k = (0, s.tweakKey)(h, S);
          if (!k)
            throw new TypeError("Invalid outputKey for p2tr witness");
          if (x.length && !x.equals(k.x))
            throw new TypeError("Pubkey mismatch for p2tr witness");
          if (k.parity !== (W[0] & 1))
            throw new Error("Incorrect parity");
        }
    }
    return Object.assign(A, m);
  }
  return Wn.p2tr = _, Wn;
}
var $a;
function ci() {
  return $a || ($a = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.p2tr = e.p2wsh = e.p2wpkh = e.p2sh = e.p2pkh = e.p2pk = e.p2ms = e.embed = void 0;
    const t = to;
    Object.defineProperty(e, "embed", {
      enumerable: !0,
      get: function() {
        return t.p2data;
      }
    });
    const r = no;
    Object.defineProperty(e, "p2ms", {
      enumerable: !0,
      get: function() {
        return r.p2ms;
      }
    });
    const n = io;
    Object.defineProperty(e, "p2pk", {
      enumerable: !0,
      get: function() {
        return n.p2pk;
      }
    });
    const i = oo;
    Object.defineProperty(e, "p2pkh", {
      enumerable: !0,
      get: function() {
        return i.p2pkh;
      }
    });
    const s = uo;
    Object.defineProperty(e, "p2sh", {
      enumerable: !0,
      get: function() {
        return s.p2sh;
      }
    });
    const o = co;
    Object.defineProperty(e, "p2wpkh", {
      enumerable: !0,
      get: function() {
        return o.p2wpkh;
      }
    });
    const a = lo;
    Object.defineProperty(e, "p2wsh", {
      enumerable: !0,
      get: function() {
        return a.p2wsh;
      }
    });
    const l = fp();
    Object.defineProperty(e, "p2tr", {
      enumerable: !0,
      get: function() {
        return l.p2tr;
      }
    });
  }(Lo)), Lo;
}
var Da;
function js() {
  if (Da) return st;
  Da = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.toOutputScript = st.fromOutputScript = st.toBech32 = st.toBase58Check = st.fromBech32 = st.fromBase58Check = void 0;
  const e = Xe, t = ci(), r = ht(), n = tt, i = dr, s = Hs, o = 40, a = 2, l = 16, p = 2, f = 80, d = "WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.";
  function _(A, x) {
    const M = A.slice(2);
    if (M.length < a || M.length > o)
      throw new TypeError("Invalid program length for segwit address");
    const U = A[0] - f;
    if (U < p || U > l)
      throw new TypeError("Invalid version for segwit address");
    if (A[1] !== M.length)
      throw new TypeError("Invalid script for segwit address");
    return console.warn(d), C(M, U, x.bech32);
  }
  function m(A) {
    const x = H.from(s.decode(A));
    if (x.length < 21) throw new TypeError(A + " is too short");
    if (x.length > 21) throw new TypeError(A + " is too long");
    const M = x.readUInt8(0), U = x.slice(1);
    return { version: M, hash: U };
  }
  st.fromBase58Check = m;
  function B(A) {
    let x, M;
    try {
      x = i.bech32.decode(A);
    } catch {
    }
    if (x) {
      if (M = x.words[0], M !== 0) throw new TypeError(A + " uses wrong encoding");
    } else if (x = i.bech32m.decode(A), M = x.words[0], M === 0) throw new TypeError(A + " uses wrong encoding");
    const U = i.bech32.fromWords(x.words.slice(1));
    return {
      version: M,
      prefix: x.prefix,
      data: H.from(U)
    };
  }
  st.fromBech32 = B;
  function I(A, x) {
    (0, n.typeforce)(
      (0, n.tuple)(n.Hash160bit, n.UInt8),
      arguments
    );
    const M = H.allocUnsafe(21);
    return M.writeUInt8(x, 0), A.copy(M, 1), s.encode(M);
  }
  st.toBase58Check = I;
  function C(A, x, M) {
    const U = i.bech32.toWords(A);
    return U.unshift(x), x === 0 ? i.bech32.encode(M, U) : i.bech32m.encode(M, U);
  }
  st.toBech32 = C;
  function D(A, x) {
    x = x || e.bitcoin;
    try {
      return t.p2pkh({ output: A, network: x }).address;
    } catch {
    }
    try {
      return t.p2sh({ output: A, network: x }).address;
    } catch {
    }
    try {
      return t.p2wpkh({ output: A, network: x }).address;
    } catch {
    }
    try {
      return t.p2wsh({ output: A, network: x }).address;
    } catch {
    }
    try {
      return t.p2tr({ output: A, network: x }).address;
    } catch {
    }
    try {
      return _(A, x);
    } catch {
    }
    throw new Error(r.toASM(A) + " has no matching Address");
  }
  st.fromOutputScript = D;
  function b(A, x) {
    x = x || e.bitcoin;
    let M, U;
    try {
      M = m(A);
    } catch {
    }
    if (M) {
      if (M.version === x.pubKeyHash)
        return t.p2pkh({ hash: M.hash }).output;
      if (M.version === x.scriptHash)
        return t.p2sh({ hash: M.hash }).output;
    } else {
      try {
        U = B(A);
      } catch {
      }
      if (U) {
        if (U.prefix !== x.bech32)
          throw new Error(A + " has an invalid prefix");
        if (U.version === 0) {
          if (U.data.length === 20)
            return t.p2wpkh({ hash: U.data }).output;
          if (U.data.length === 32)
            return t.p2wsh({ hash: U.data }).output;
        } else if (U.version === 1) {
          if (U.data.length === 32)
            return t.p2tr({ pubkey: U.data }).output;
        } else if (U.version >= p && U.version <= l && U.data.length >= a && U.data.length <= o)
          return console.warn(d), r.compile([
            U.version + f,
            U.data
          ]);
      }
    }
    throw new Error(A + " has no matching Script");
  }
  return st.toOutputScript = b, st;
}
var ho = {}, po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.fastMerkleRoot = void 0;
function hp(e, t) {
  if (!Array.isArray(e)) throw TypeError("Expected values Array");
  if (typeof t != "function")
    throw TypeError("Expected digest Function");
  let r = e.length;
  const n = e.concat();
  for (; r > 1; ) {
    let i = 0;
    for (let s = 0; s < r; s += 2, ++i) {
      const o = n[s], a = s + 1 === r ? o : n[s + 1], l = H.concat([o, a]);
      n[i] = t(l);
    }
    r = i;
  }
  return n[0];
}
po.fastMerkleRoot = hp;
var Ur = {};
Object.defineProperty(Ur, "__esModule", { value: !0 });
Ur.Transaction = void 0;
const Le = De, ut = Jt, ja = ht(), dp = ht(), fe = tt, { typeforce: jt } = fe;
function Wt(e) {
  const t = e.length;
  return Le.varuint.encodingLength(t) + t;
}
function pp(e) {
  const t = e.length;
  return Le.varuint.encodingLength(t) + e.reduce((r, n) => r + Wt(n), 0);
}
const Ir = H.allocUnsafe(0), Ka = [], qo = H.from(
  "0000000000000000000000000000000000000000000000000000000000000000",
  "hex"
), Wa = H.from(
  "0000000000000000000000000000000000000000000000000000000000000001",
  "hex"
), gp = H.from("ffffffffffffffff", "hex"), wp = {
  script: Ir,
  valueBuffer: gp
};
function yp(e) {
  return e.value !== void 0;
}
class oe {
  constructor() {
    this.version = 1, this.locktime = 0, this.ins = [], this.outs = [];
  }
  static fromBuffer(t, r) {
    const n = new Le.BufferReader(t), i = new oe();
    i.version = n.readInt32();
    const s = n.readUInt8(), o = n.readUInt8();
    let a = !1;
    s === oe.ADVANCED_TRANSACTION_MARKER && o === oe.ADVANCED_TRANSACTION_FLAG ? a = !0 : n.offset -= 2;
    const l = n.readVarInt();
    for (let f = 0; f < l; ++f)
      i.ins.push({
        hash: n.readSlice(32),
        index: n.readUInt32(),
        script: n.readVarSlice(),
        sequence: n.readUInt32(),
        witness: Ka
      });
    const p = n.readVarInt();
    for (let f = 0; f < p; ++f)
      i.outs.push({
        value: n.readUInt64(),
        script: n.readVarSlice()
      });
    if (a) {
      for (let f = 0; f < l; ++f)
        i.ins[f].witness = n.readVector();
      if (!i.hasWitnesses())
        throw new Error("Transaction has superfluous witness data");
    }
    if (i.locktime = n.readUInt32(), r) return i;
    if (n.offset !== t.length)
      throw new Error("Transaction has unexpected data");
    return i;
  }
  static fromHex(t) {
    return oe.fromBuffer(H.from(t, "hex"), !1);
  }
  static isCoinbaseHash(t) {
    jt(fe.Hash256bit, t);
    for (let r = 0; r < 32; ++r)
      if (t[r] !== 0) return !1;
    return !0;
  }
  isCoinbase() {
    return this.ins.length === 1 && oe.isCoinbaseHash(this.ins[0].hash);
  }
  addInput(t, r, n, i) {
    return jt(
      fe.tuple(
        fe.Hash256bit,
        fe.UInt32,
        fe.maybe(fe.UInt32),
        fe.maybe(fe.Buffer)
      ),
      arguments
    ), fe.Null(n) && (n = oe.DEFAULT_SEQUENCE), this.ins.push({
      hash: t,
      index: r,
      script: i || Ir,
      sequence: n,
      witness: Ka
    }) - 1;
  }
  addOutput(t, r) {
    return jt(fe.tuple(fe.Buffer, fe.Satoshi), arguments), this.outs.push({
      script: t,
      value: r
    }) - 1;
  }
  hasWitnesses() {
    return this.ins.some((t) => t.witness.length !== 0);
  }
  weight() {
    const t = this.byteLength(!1), r = this.byteLength(!0);
    return t * 3 + r;
  }
  virtualSize() {
    return Math.ceil(this.weight() / 4);
  }
  byteLength(t = !0) {
    const r = t && this.hasWitnesses();
    return (r ? 10 : 8) + Le.varuint.encodingLength(this.ins.length) + Le.varuint.encodingLength(this.outs.length) + this.ins.reduce((n, i) => n + 40 + Wt(i.script), 0) + this.outs.reduce((n, i) => n + 8 + Wt(i.script), 0) + (r ? this.ins.reduce((n, i) => n + pp(i.witness), 0) : 0);
  }
  clone() {
    const t = new oe();
    return t.version = this.version, t.locktime = this.locktime, t.ins = this.ins.map((r) => ({
      hash: r.hash,
      index: r.index,
      script: r.script,
      sequence: r.sequence,
      witness: r.witness
    })), t.outs = this.outs.map((r) => ({
      script: r.script,
      value: r.value
    })), t;
  }
  /**
   * Hash transaction for signing a specific input.
   *
   * Bitcoin uses a different hash for each signed transaction input.
   * This method copies the transaction, makes the necessary changes based on the
   * hashType, and then hashes the result.
   * This hash can then be used to sign the provided transaction input.
   */
  hashForSignature(t, r, n) {
    if (jt(
      fe.tuple(
        fe.UInt32,
        fe.Buffer,
        /* types.UInt8 */
        fe.Number
      ),
      arguments
    ), t >= this.ins.length) return Wa;
    const i = ja.compile(
      ja.decompile(r).filter((a) => a !== dp.OPS.OP_CODESEPARATOR)
    ), s = this.clone();
    if ((n & 31) === oe.SIGHASH_NONE)
      s.outs = [], s.ins.forEach((a, l) => {
        l !== t && (a.sequence = 0);
      });
    else if ((n & 31) === oe.SIGHASH_SINGLE) {
      if (t >= this.outs.length) return Wa;
      s.outs.length = t + 1;
      for (let a = 0; a < t; a++)
        s.outs[a] = wp;
      s.ins.forEach((a, l) => {
        l !== t && (a.sequence = 0);
      });
    }
    n & oe.SIGHASH_ANYONECANPAY ? (s.ins = [s.ins[t]], s.ins[0].script = i) : (s.ins.forEach((a) => {
      a.script = Ir;
    }), s.ins[t].script = i);
    const o = H.allocUnsafe(s.byteLength(!1) + 4);
    return o.writeInt32LE(n, o.length - 4), s.__toBuffer(o, 0, !1), ut.hash256(o);
  }
  hashForWitnessV1(t, r, n, i, s, o) {
    if (jt(
      fe.tuple(
        fe.UInt32,
        jt.arrayOf(fe.Buffer),
        jt.arrayOf(fe.Satoshi),
        fe.UInt32
      ),
      arguments
    ), n.length !== this.ins.length || r.length !== this.ins.length)
      throw new Error("Must supply prevout script and value for all inputs");
    const a = i === oe.SIGHASH_DEFAULT ? oe.SIGHASH_ALL : i & oe.SIGHASH_OUTPUT_MASK, p = (i & oe.SIGHASH_INPUT_MASK) === oe.SIGHASH_ANYONECANPAY, f = a === oe.SIGHASH_NONE, d = a === oe.SIGHASH_SINGLE;
    let _ = Ir, m = Ir, B = Ir, I = Ir, C = Ir;
    if (!p) {
      let x = Le.BufferWriter.withCapacity(
        36 * this.ins.length
      );
      this.ins.forEach((M) => {
        x.writeSlice(M.hash), x.writeUInt32(M.index);
      }), _ = ut.sha256(x.end()), x = Le.BufferWriter.withCapacity(
        8 * this.ins.length
      ), n.forEach((M) => x.writeUInt64(M)), m = ut.sha256(x.end()), x = Le.BufferWriter.withCapacity(
        r.map(Wt).reduce((M, U) => M + U)
      ), r.forEach(
        (M) => x.writeVarSlice(M)
      ), B = ut.sha256(x.end()), x = Le.BufferWriter.withCapacity(
        4 * this.ins.length
      ), this.ins.forEach((M) => x.writeUInt32(M.sequence)), I = ut.sha256(x.end());
    }
    if (f || d) {
      if (d && t < this.outs.length) {
        const x = this.outs[t], M = Le.BufferWriter.withCapacity(
          8 + Wt(x.script)
        );
        M.writeUInt64(x.value), M.writeVarSlice(x.script), C = ut.sha256(M.end());
      }
    } else {
      const x = this.outs.map((U) => 8 + Wt(U.script)).reduce((U, W) => U + W), M = Le.BufferWriter.withCapacity(x);
      this.outs.forEach((U) => {
        M.writeUInt64(U.value), M.writeVarSlice(U.script);
      }), C = ut.sha256(M.end());
    }
    const D = (s ? 2 : 0) + (o ? 1 : 0), b = 174 - (p ? 49 : 0) - (f ? 32 : 0) + (o ? 32 : 0) + (s ? 37 : 0), A = Le.BufferWriter.withCapacity(b);
    if (A.writeUInt8(i), A.writeInt32(this.version), A.writeUInt32(this.locktime), A.writeSlice(_), A.writeSlice(m), A.writeSlice(B), A.writeSlice(I), f || d || A.writeSlice(C), A.writeUInt8(D), p) {
      const x = this.ins[t];
      A.writeSlice(x.hash), A.writeUInt32(x.index), A.writeUInt64(n[t]), A.writeVarSlice(r[t]), A.writeUInt32(x.sequence);
    } else
      A.writeUInt32(t);
    if (o) {
      const x = Le.BufferWriter.withCapacity(
        Wt(o)
      );
      x.writeVarSlice(o), A.writeSlice(ut.sha256(x.end()));
    }
    return d && A.writeSlice(C), s && (A.writeSlice(s), A.writeUInt8(0), A.writeUInt32(4294967295)), ut.taggedHash(
      "TapSighash",
      H.concat([H.from([0]), A.end()])
    );
  }
  hashForWitnessV0(t, r, n, i) {
    jt(
      fe.tuple(fe.UInt32, fe.Buffer, fe.Satoshi, fe.UInt32),
      arguments
    );
    let s = H.from([]), o, a = qo, l = qo, p = qo;
    if (i & oe.SIGHASH_ANYONECANPAY || (s = H.allocUnsafe(36 * this.ins.length), o = new Le.BufferWriter(s, 0), this.ins.forEach((d) => {
      o.writeSlice(d.hash), o.writeUInt32(d.index);
    }), l = ut.hash256(s)), !(i & oe.SIGHASH_ANYONECANPAY) && (i & 31) !== oe.SIGHASH_SINGLE && (i & 31) !== oe.SIGHASH_NONE && (s = H.allocUnsafe(4 * this.ins.length), o = new Le.BufferWriter(s, 0), this.ins.forEach((d) => {
      o.writeUInt32(d.sequence);
    }), p = ut.hash256(s)), (i & 31) !== oe.SIGHASH_SINGLE && (i & 31) !== oe.SIGHASH_NONE) {
      const d = this.outs.reduce((_, m) => _ + 8 + Wt(m.script), 0);
      s = H.allocUnsafe(d), o = new Le.BufferWriter(s, 0), this.outs.forEach((_) => {
        o.writeUInt64(_.value), o.writeVarSlice(_.script);
      }), a = ut.hash256(s);
    } else if ((i & 31) === oe.SIGHASH_SINGLE && t < this.outs.length) {
      const d = this.outs[t];
      s = H.allocUnsafe(8 + Wt(d.script)), o = new Le.BufferWriter(s, 0), o.writeUInt64(d.value), o.writeVarSlice(d.script), a = ut.hash256(s);
    }
    s = H.allocUnsafe(156 + Wt(r)), o = new Le.BufferWriter(s, 0);
    const f = this.ins[t];
    return o.writeInt32(this.version), o.writeSlice(l), o.writeSlice(p), o.writeSlice(f.hash), o.writeUInt32(f.index), o.writeVarSlice(r), o.writeUInt64(n), o.writeUInt32(f.sequence), o.writeSlice(a), o.writeUInt32(this.locktime), o.writeUInt32(i), ut.hash256(s);
  }
  getHash(t) {
    return t && this.isCoinbase() ? H.alloc(32, 0) : ut.hash256(this.__toBuffer(void 0, void 0, t));
  }
  getId() {
    return (0, Le.reverseBuffer)(this.getHash(!1)).toString(
      "hex"
    );
  }
  toBuffer(t, r) {
    return this.__toBuffer(t, r, !0);
  }
  toHex() {
    return this.toBuffer(void 0, void 0).toString("hex");
  }
  setInputScript(t, r) {
    jt(fe.tuple(fe.Number, fe.Buffer), arguments), this.ins[t].script = r;
  }
  setWitness(t, r) {
    jt(fe.tuple(fe.Number, [fe.Buffer]), arguments), this.ins[t].witness = r;
  }
  __toBuffer(t, r, n = !1) {
    t || (t = H.allocUnsafe(this.byteLength(n)));
    const i = new Le.BufferWriter(
      t,
      r || 0
    );
    i.writeInt32(this.version);
    const s = n && this.hasWitnesses();
    return s && (i.writeUInt8(oe.ADVANCED_TRANSACTION_MARKER), i.writeUInt8(oe.ADVANCED_TRANSACTION_FLAG)), i.writeVarInt(this.ins.length), this.ins.forEach((o) => {
      i.writeSlice(o.hash), i.writeUInt32(o.index), i.writeVarSlice(o.script), i.writeUInt32(o.sequence);
    }), i.writeVarInt(this.outs.length), this.outs.forEach((o) => {
      yp(o) ? i.writeUInt64(o.value) : i.writeSlice(o.valueBuffer), i.writeVarSlice(o.script);
    }), s && this.ins.forEach((o) => {
      i.writeVector(o.witness);
    }), i.writeUInt32(this.locktime), r !== void 0 ? t.slice(r, i.offset) : t;
  }
}
Ur.Transaction = oe;
oe.DEFAULT_SEQUENCE = 4294967295;
oe.SIGHASH_DEFAULT = 0;
oe.SIGHASH_ALL = 1;
oe.SIGHASH_NONE = 2;
oe.SIGHASH_SINGLE = 3;
oe.SIGHASH_ANYONECANPAY = 128;
oe.SIGHASH_OUTPUT_MASK = 3;
oe.SIGHASH_INPUT_MASK = 128;
oe.ADVANCED_TRANSACTION_MARKER = 0;
oe.ADVANCED_TRANSACTION_FLAG = 1;
Object.defineProperty(ho, "__esModule", { value: !0 });
ho.Block = void 0;
const Dr = De, Xo = Jt, mp = po, Ep = Ur, yc = tt, { typeforce: bp } = yc, zo = new TypeError(
  "Cannot compute merkle root for zero transactions"
), Ga = new TypeError(
  "Cannot compute witness commit for non-segwit block"
);
class jr {
  constructor() {
    this.version = 1, this.prevHash = void 0, this.merkleRoot = void 0, this.timestamp = 0, this.witnessCommit = void 0, this.bits = 0, this.nonce = 0, this.transactions = void 0;
  }
  static fromBuffer(t) {
    if (t.length < 80) throw new Error("Buffer too small (< 80 bytes)");
    const r = new Dr.BufferReader(t), n = new jr();
    if (n.version = r.readInt32(), n.prevHash = r.readSlice(32), n.merkleRoot = r.readSlice(32), n.timestamp = r.readUInt32(), n.bits = r.readUInt32(), n.nonce = r.readUInt32(), t.length === 80) return n;
    const i = () => {
      const a = Ep.Transaction.fromBuffer(
        r.buffer.slice(r.offset),
        !0
      );
      return r.offset += a.byteLength(), a;
    }, s = r.readVarInt();
    n.transactions = [];
    for (let a = 0; a < s; ++a) {
      const l = i();
      n.transactions.push(l);
    }
    const o = n.getWitnessCommit();
    return o && (n.witnessCommit = o), n;
  }
  static fromHex(t) {
    return jr.fromBuffer(H.from(t, "hex"));
  }
  static calculateTarget(t) {
    const r = ((t & 4278190080) >> 24) - 3, n = t & 8388607, i = H.alloc(32, 0);
    return i.writeUIntBE(n, 29 - r, 3), i;
  }
  static calculateMerkleRoot(t, r) {
    if (bp([{ getHash: yc.Function }], t), t.length === 0) throw zo;
    if (r && !Va(t))
      throw Ga;
    const n = t.map(
      (s) => s.getHash(r)
    ), i = (0, mp.fastMerkleRoot)(n, Xo.hash256);
    return r ? Xo.hash256(
      H.concat([i, t[0].ins[0].witness[0]])
    ) : i;
  }
  getWitnessCommit() {
    if (!Va(this.transactions)) return null;
    const t = this.transactions[0].outs.filter(
      (n) => n.script.slice(0, 6).equals(H.from("6a24aa21a9ed", "hex"))
    ).map((n) => n.script.slice(6, 38));
    if (t.length === 0) return null;
    const r = t[t.length - 1];
    return r instanceof H && r.length === 32 ? r : null;
  }
  hasWitnessCommit() {
    return this.witnessCommit instanceof H && this.witnessCommit.length === 32 || this.getWitnessCommit() !== null;
  }
  hasWitness() {
    return Sp(this.transactions);
  }
  weight() {
    const t = this.byteLength(!1, !1), r = this.byteLength(!1, !0);
    return t * 3 + r;
  }
  byteLength(t, r = !0) {
    return t || !this.transactions ? 80 : 80 + Dr.varuint.encodingLength(this.transactions.length) + this.transactions.reduce((n, i) => n + i.byteLength(r), 0);
  }
  getHash() {
    return Xo.hash256(this.toBuffer(!0));
  }
  getId() {
    return (0, Dr.reverseBuffer)(this.getHash()).toString("hex");
  }
  getUTCDate() {
    const t = /* @__PURE__ */ new Date(0);
    return t.setUTCSeconds(this.timestamp), t;
  }
  // TODO: buffer, offset compatibility
  toBuffer(t) {
    const r = H.allocUnsafe(this.byteLength(t)), n = new Dr.BufferWriter(r);
    return n.writeInt32(this.version), n.writeSlice(this.prevHash), n.writeSlice(this.merkleRoot), n.writeUInt32(this.timestamp), n.writeUInt32(this.bits), n.writeUInt32(this.nonce), t || !this.transactions || (Dr.varuint.encode(
      this.transactions.length,
      r,
      n.offset
    ), n.offset += Dr.varuint.encode.bytes, this.transactions.forEach((i) => {
      const s = i.byteLength();
      i.toBuffer(r, n.offset), n.offset += s;
    })), r;
  }
  toHex(t) {
    return this.toBuffer(t).toString("hex");
  }
  checkTxRoots() {
    const t = this.hasWitnessCommit();
    return !t && this.hasWitness() ? !1 : this.__checkMerkleRoot() && (t ? this.__checkWitnessCommit() : !0);
  }
  checkProofOfWork() {
    const t = (0, Dr.reverseBuffer)(this.getHash()), r = jr.calculateTarget(this.bits);
    return t.compare(r) <= 0;
  }
  __checkMerkleRoot() {
    if (!this.transactions) throw zo;
    const t = jr.calculateMerkleRoot(this.transactions);
    return this.merkleRoot.compare(t) === 0;
  }
  __checkWitnessCommit() {
    if (!this.transactions) throw zo;
    if (!this.hasWitnessCommit()) throw Ga;
    const t = jr.calculateMerkleRoot(
      this.transactions,
      !0
    );
    return this.witnessCommit.compare(t) === 0;
  }
}
ho.Block = jr;
function Va(e) {
  return e instanceof Array && e[0] && e[0].ins && e[0].ins instanceof Array && e[0].ins[0] && e[0].ins[0].witness && e[0].ins[0].witness instanceof Array && e[0].ins[0].witness.length > 0;
}
function Sp(e) {
  return e instanceof Array && e.some(
    (t) => typeof t == "object" && t.ins instanceof Array && t.ins.some(
      (r) => typeof r == "object" && r.witness instanceof Array && r.witness.length > 0
    )
  );
}
var go = {}, Ks = {}, Ws = {}, Gs = {}, li = {}, Xr = {}, ze = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), function(t) {
    t[t.UNSIGNED_TX = 0] = "UNSIGNED_TX", t[t.GLOBAL_XPUB = 1] = "GLOBAL_XPUB";
  }(e.GlobalTypes || (e.GlobalTypes = {})), e.GLOBAL_TYPE_NAMES = ["unsignedTx", "globalXpub"], function(t) {
    t[t.NON_WITNESS_UTXO = 0] = "NON_WITNESS_UTXO", t[t.WITNESS_UTXO = 1] = "WITNESS_UTXO", t[t.PARTIAL_SIG = 2] = "PARTIAL_SIG", t[t.SIGHASH_TYPE = 3] = "SIGHASH_TYPE", t[t.REDEEM_SCRIPT = 4] = "REDEEM_SCRIPT", t[t.WITNESS_SCRIPT = 5] = "WITNESS_SCRIPT", t[t.BIP32_DERIVATION = 6] = "BIP32_DERIVATION", t[t.FINAL_SCRIPTSIG = 7] = "FINAL_SCRIPTSIG", t[t.FINAL_SCRIPTWITNESS = 8] = "FINAL_SCRIPTWITNESS", t[t.POR_COMMITMENT = 9] = "POR_COMMITMENT", t[t.TAP_KEY_SIG = 19] = "TAP_KEY_SIG", t[t.TAP_SCRIPT_SIG = 20] = "TAP_SCRIPT_SIG", t[t.TAP_LEAF_SCRIPT = 21] = "TAP_LEAF_SCRIPT", t[t.TAP_BIP32_DERIVATION = 22] = "TAP_BIP32_DERIVATION", t[t.TAP_INTERNAL_KEY = 23] = "TAP_INTERNAL_KEY", t[t.TAP_MERKLE_ROOT = 24] = "TAP_MERKLE_ROOT";
  }(e.InputTypes || (e.InputTypes = {})), e.INPUT_TYPE_NAMES = [
    "nonWitnessUtxo",
    "witnessUtxo",
    "partialSig",
    "sighashType",
    "redeemScript",
    "witnessScript",
    "bip32Derivation",
    "finalScriptSig",
    "finalScriptWitness",
    "porCommitment",
    "tapKeySig",
    "tapScriptSig",
    "tapLeafScript",
    "tapBip32Derivation",
    "tapInternalKey",
    "tapMerkleRoot"
  ], function(t) {
    t[t.REDEEM_SCRIPT = 0] = "REDEEM_SCRIPT", t[t.WITNESS_SCRIPT = 1] = "WITNESS_SCRIPT", t[t.BIP32_DERIVATION = 2] = "BIP32_DERIVATION", t[t.TAP_INTERNAL_KEY = 5] = "TAP_INTERNAL_KEY", t[t.TAP_TREE = 6] = "TAP_TREE", t[t.TAP_BIP32_DERIVATION = 7] = "TAP_BIP32_DERIVATION";
  }(e.OutputTypes || (e.OutputTypes = {})), e.OUTPUT_TYPE_NAMES = [
    "redeemScript",
    "witnessScript",
    "bip32Derivation",
    "tapInternalKey",
    "tapTree",
    "tapBip32Derivation"
  ];
})(ze);
var zr = {};
Object.defineProperty(zr, "__esModule", { value: !0 });
const mc = ze, vp = (e) => [...Array(e).keys()];
function _p(e) {
  if (e.key[0] !== mc.GlobalTypes.GLOBAL_XPUB)
    throw new Error(
      "Decode Error: could not decode globalXpub with key 0x" + e.key.toString("hex")
    );
  if (e.key.length !== 79 || ![2, 3].includes(e.key[46]))
    throw new Error(
      "Decode Error: globalXpub has invalid extended pubkey in key 0x" + e.key.toString("hex")
    );
  if (e.value.length / 4 % 1 !== 0)
    throw new Error(
      "Decode Error: Global GLOBAL_XPUB value length should be multiple of 4"
    );
  const t = e.key.slice(1), r = {
    masterFingerprint: e.value.slice(0, 4),
    extendedPubkey: t,
    path: "m"
  };
  for (const n of vp(e.value.length / 4 - 1)) {
    const i = e.value.readUInt32LE(n * 4 + 4), s = !!(i & 2147483648), o = i & 2147483647;
    r.path += "/" + o.toString(10) + (s ? "'" : "");
  }
  return r;
}
zr.decode = _p;
function Tp(e) {
  const t = H.from([mc.GlobalTypes.GLOBAL_XPUB]), r = H.concat([t, e.extendedPubkey]), n = e.path.split("/"), i = H.allocUnsafe(n.length * 4);
  e.masterFingerprint.copy(i, 0);
  let s = 4;
  return n.slice(1).forEach((o) => {
    const a = o.slice(-1) === "'";
    let l = 2147483647 & parseInt(a ? o.slice(0, -1) : o, 10);
    a && (l += 2147483648), i.writeUInt32LE(l, s), s += 4;
  }), {
    key: r,
    value: i
  };
}
zr.encode = Tp;
zr.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }";
function Ip(e) {
  const t = e.extendedPubkey, r = e.masterFingerprint, n = e.path;
  return H.isBuffer(t) && t.length === 78 && [2, 3].indexOf(t[45]) > -1 && H.isBuffer(r) && r.length === 4 && typeof n == "string" && !!n.match(/^m(\/\d+'?)*$/);
}
zr.check = Ip;
function Op(e, t, r) {
  const n = t.extendedPubkey.toString("hex");
  return r.has(n) ? !1 : (r.add(n), e.filter((i) => i.extendedPubkey.equals(t.extendedPubkey)).length === 0);
}
zr.canAddToArray = Op;
var Vs = {};
Object.defineProperty(Vs, "__esModule", { value: !0 });
const Pp = ze;
function kp(e) {
  return {
    key: H.from([Pp.GlobalTypes.UNSIGNED_TX]),
    value: e.toBuffer()
  };
}
Vs.encode = kp;
var Yr = {};
Object.defineProperty(Yr, "__esModule", { value: !0 });
const Ec = ze;
function Ap(e) {
  if (e.key[0] !== Ec.InputTypes.FINAL_SCRIPTSIG)
    throw new Error(
      "Decode Error: could not decode finalScriptSig with key 0x" + e.key.toString("hex")
    );
  return e.value;
}
Yr.decode = Ap;
function xp(e) {
  return {
    key: H.from([Ec.InputTypes.FINAL_SCRIPTSIG]),
    value: e
  };
}
Yr.encode = xp;
Yr.expected = "Buffer";
function Np(e) {
  return H.isBuffer(e);
}
Yr.check = Np;
function Bp(e, t) {
  return !!e && !!t && e.finalScriptSig === void 0;
}
Yr.canAdd = Bp;
var Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
const bc = ze;
function Cp(e) {
  if (e.key[0] !== bc.InputTypes.FINAL_SCRIPTWITNESS)
    throw new Error(
      "Decode Error: could not decode finalScriptWitness with key 0x" + e.key.toString("hex")
    );
  return e.value;
}
Jr.decode = Cp;
function Fp(e) {
  return {
    key: H.from([bc.InputTypes.FINAL_SCRIPTWITNESS]),
    value: e
  };
}
Jr.encode = Fp;
Jr.expected = "Buffer";
function Rp(e) {
  return H.isBuffer(e);
}
Jr.check = Rp;
function Up(e, t) {
  return !!e && !!t && e.finalScriptWitness === void 0;
}
Jr.canAdd = Up;
var Qr = {};
Object.defineProperty(Qr, "__esModule", { value: !0 });
const Sc = ze;
function Lp(e) {
  if (e.key[0] !== Sc.InputTypes.NON_WITNESS_UTXO)
    throw new Error(
      "Decode Error: could not decode nonWitnessUtxo with key 0x" + e.key.toString("hex")
    );
  return e.value;
}
Qr.decode = Lp;
function Hp(e) {
  return {
    key: H.from([Sc.InputTypes.NON_WITNESS_UTXO]),
    value: e
  };
}
Qr.encode = Hp;
Qr.expected = "Buffer";
function Mp(e) {
  return H.isBuffer(e);
}
Qr.check = Mp;
function $p(e, t) {
  return !!e && !!t && e.nonWitnessUtxo === void 0;
}
Qr.canAdd = $p;
var Zr = {};
Object.defineProperty(Zr, "__esModule", { value: !0 });
const vc = ze;
function Dp(e) {
  if (e.key[0] !== vc.InputTypes.PARTIAL_SIG)
    throw new Error(
      "Decode Error: could not decode partialSig with key 0x" + e.key.toString("hex")
    );
  if (!(e.key.length === 34 || e.key.length === 66) || ![2, 3, 4].includes(e.key[1]))
    throw new Error(
      "Decode Error: partialSig has invalid pubkey in key 0x" + e.key.toString("hex")
    );
  return {
    pubkey: e.key.slice(1),
    signature: e.value
  };
}
Zr.decode = Dp;
function jp(e) {
  const t = H.from([vc.InputTypes.PARTIAL_SIG]);
  return {
    key: H.concat([t, e.pubkey]),
    value: e.signature
  };
}
Zr.encode = jp;
Zr.expected = "{ pubkey: Buffer; signature: Buffer; }";
function Kp(e) {
  return H.isBuffer(e.pubkey) && H.isBuffer(e.signature) && [33, 65].includes(e.pubkey.length) && [2, 3, 4].includes(e.pubkey[0]) && Wp(e.signature);
}
Zr.check = Kp;
function Wp(e) {
  if (!H.isBuffer(e) || e.length < 9 || e[0] !== 48 || e.length !== e[1] + 3 || e[2] !== 2) return !1;
  const t = e[3];
  if (t > 33 || t < 1 || e[3 + t + 1] !== 2) return !1;
  const r = e[3 + t + 2];
  return !(r > 33 || r < 1 || e.length !== 3 + t + 2 + r + 2);
}
function Gp(e, t, r) {
  const n = t.pubkey.toString("hex");
  return r.has(n) ? !1 : (r.add(n), e.filter((i) => i.pubkey.equals(t.pubkey)).length === 0);
}
Zr.canAddToArray = Gp;
var en = {};
Object.defineProperty(en, "__esModule", { value: !0 });
const _c = ze;
function Vp(e) {
  if (e.key[0] !== _c.InputTypes.POR_COMMITMENT)
    throw new Error(
      "Decode Error: could not decode porCommitment with key 0x" + e.key.toString("hex")
    );
  return e.value.toString("utf8");
}
en.decode = Vp;
function qp(e) {
  return {
    key: H.from([_c.InputTypes.POR_COMMITMENT]),
    value: H.from(e, "utf8")
  };
}
en.encode = qp;
en.expected = "string";
function Xp(e) {
  return typeof e == "string";
}
en.check = Xp;
function zp(e, t) {
  return !!e && !!t && e.porCommitment === void 0;
}
en.canAdd = zp;
var tn = {};
Object.defineProperty(tn, "__esModule", { value: !0 });
const Tc = ze;
function Yp(e) {
  if (e.key[0] !== Tc.InputTypes.SIGHASH_TYPE)
    throw new Error(
      "Decode Error: could not decode sighashType with key 0x" + e.key.toString("hex")
    );
  return e.value.readUInt32LE(0);
}
tn.decode = Yp;
function Jp(e) {
  const t = H.from([Tc.InputTypes.SIGHASH_TYPE]), r = H.allocUnsafe(4);
  return r.writeUInt32LE(e, 0), {
    key: t,
    value: r
  };
}
tn.encode = Jp;
tn.expected = "number";
function Qp(e) {
  return typeof e == "number";
}
tn.check = Qp;
function Zp(e, t) {
  return !!e && !!t && e.sighashType === void 0;
}
tn.canAdd = Zp;
var rn = {};
Object.defineProperty(rn, "__esModule", { value: !0 });
const Ic = ze;
function e1(e) {
  if (e.key[0] !== Ic.InputTypes.TAP_KEY_SIG || e.key.length !== 1)
    throw new Error(
      "Decode Error: could not decode tapKeySig with key 0x" + e.key.toString("hex")
    );
  if (!Oc(e.value))
    throw new Error(
      "Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature"
    );
  return e.value;
}
rn.decode = e1;
function t1(e) {
  return { key: H.from([Ic.InputTypes.TAP_KEY_SIG]), value: e };
}
rn.encode = t1;
rn.expected = "Buffer";
function Oc(e) {
  return H.isBuffer(e) && (e.length === 64 || e.length === 65);
}
rn.check = Oc;
function r1(e, t) {
  return !!e && !!t && e.tapKeySig === void 0;
}
rn.canAdd = r1;
var nn = {};
Object.defineProperty(nn, "__esModule", { value: !0 });
const Pc = ze;
function n1(e) {
  if (e.key[0] !== Pc.InputTypes.TAP_LEAF_SCRIPT)
    throw new Error(
      "Decode Error: could not decode tapLeafScript with key 0x" + e.key.toString("hex")
    );
  if ((e.key.length - 2) % 32 !== 0)
    throw new Error(
      "Decode Error: tapLeafScript has invalid control block in key 0x" + e.key.toString("hex")
    );
  const t = e.value[e.value.length - 1];
  if ((e.key[1] & 254) !== t)
    throw new Error(
      "Decode Error: tapLeafScript bad leaf version in key 0x" + e.key.toString("hex")
    );
  const r = e.value.slice(0, -1);
  return { controlBlock: e.key.slice(1), script: r, leafVersion: t };
}
nn.decode = n1;
function i1(e) {
  const t = H.from([Pc.InputTypes.TAP_LEAF_SCRIPT]), r = H.from([e.leafVersion]);
  return {
    key: H.concat([t, e.controlBlock]),
    value: H.concat([e.script, r])
  };
}
nn.encode = i1;
nn.expected = "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }";
function o1(e) {
  return H.isBuffer(e.controlBlock) && (e.controlBlock.length - 1) % 32 === 0 && (e.controlBlock[0] & 254) === e.leafVersion && H.isBuffer(e.script);
}
nn.check = o1;
function s1(e, t, r) {
  const n = t.controlBlock.toString("hex");
  return r.has(n) ? !1 : (r.add(n), e.filter((i) => i.controlBlock.equals(t.controlBlock)).length === 0);
}
nn.canAddToArray = s1;
var on = {};
Object.defineProperty(on, "__esModule", { value: !0 });
const kc = ze;
function a1(e) {
  if (e.key[0] !== kc.InputTypes.TAP_MERKLE_ROOT || e.key.length !== 1)
    throw new Error(
      "Decode Error: could not decode tapMerkleRoot with key 0x" + e.key.toString("hex")
    );
  if (!Ac(e.value))
    throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
  return e.value;
}
on.decode = a1;
function u1(e) {
  return { key: H.from([kc.InputTypes.TAP_MERKLE_ROOT]), value: e };
}
on.encode = u1;
on.expected = "Buffer";
function Ac(e) {
  return H.isBuffer(e) && e.length === 32;
}
on.check = Ac;
function c1(e, t) {
  return !!e && !!t && e.tapMerkleRoot === void 0;
}
on.canAdd = c1;
var sn = {};
Object.defineProperty(sn, "__esModule", { value: !0 });
const xc = ze;
function l1(e) {
  if (e.key[0] !== xc.InputTypes.TAP_SCRIPT_SIG)
    throw new Error(
      "Decode Error: could not decode tapScriptSig with key 0x" + e.key.toString("hex")
    );
  if (e.key.length !== 65)
    throw new Error(
      "Decode Error: tapScriptSig has invalid key 0x" + e.key.toString("hex")
    );
  if (e.value.length !== 64 && e.value.length !== 65)
    throw new Error(
      "Decode Error: tapScriptSig has invalid signature in key 0x" + e.key.toString("hex")
    );
  const t = e.key.slice(1, 33), r = e.key.slice(33);
  return {
    pubkey: t,
    leafHash: r,
    signature: e.value
  };
}
sn.decode = l1;
function f1(e) {
  const t = H.from([xc.InputTypes.TAP_SCRIPT_SIG]);
  return {
    key: H.concat([t, e.pubkey, e.leafHash]),
    value: e.signature
  };
}
sn.encode = f1;
sn.expected = "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }";
function h1(e) {
  return H.isBuffer(e.pubkey) && H.isBuffer(e.leafHash) && H.isBuffer(e.signature) && e.pubkey.length === 32 && e.leafHash.length === 32 && (e.signature.length === 64 || e.signature.length === 65);
}
sn.check = h1;
function d1(e, t, r) {
  const n = t.pubkey.toString("hex") + t.leafHash.toString("hex");
  return r.has(n) ? !1 : (r.add(n), e.filter(
    (i) => i.pubkey.equals(t.pubkey) && i.leafHash.equals(t.leafHash)
  ).length === 0);
}
sn.canAddToArray = d1;
var an = {}, Qt = {}, Ht = {};
Object.defineProperty(Ht, "__esModule", { value: !0 });
const p1 = 9007199254740991;
function qs(e) {
  if (e < 0 || e > p1 || e % 1 !== 0)
    throw new RangeError("value out of range");
}
function Jn(e, t, r) {
  if (qs(e), t || (t = H.allocUnsafe(Nc(e))), !H.isBuffer(t))
    throw new TypeError("buffer must be a Buffer instance");
  return r || (r = 0), e < 253 ? (t.writeUInt8(e, r), Object.assign(Jn, { bytes: 1 })) : e <= 65535 ? (t.writeUInt8(253, r), t.writeUInt16LE(e, r + 1), Object.assign(Jn, { bytes: 3 })) : e <= 4294967295 ? (t.writeUInt8(254, r), t.writeUInt32LE(e, r + 1), Object.assign(Jn, { bytes: 5 })) : (t.writeUInt8(255, r), t.writeUInt32LE(e >>> 0, r + 1), t.writeUInt32LE(e / 4294967296 | 0, r + 5), Object.assign(Jn, { bytes: 9 })), t;
}
Ht.encode = Jn;
function Qn(e, t) {
  if (!H.isBuffer(e))
    throw new TypeError("buffer must be a Buffer instance");
  t || (t = 0);
  const r = e.readUInt8(t);
  if (r < 253)
    return Object.assign(Qn, { bytes: 1 }), r;
  if (r === 253)
    return Object.assign(Qn, { bytes: 3 }), e.readUInt16LE(t + 1);
  if (r === 254)
    return Object.assign(Qn, { bytes: 5 }), e.readUInt32LE(t + 1);
  {
    Object.assign(Qn, { bytes: 9 });
    const n = e.readUInt32LE(t + 1), s = e.readUInt32LE(t + 5) * 4294967296 + n;
    return qs(s), s;
  }
}
Ht.decode = Qn;
function Nc(e) {
  return qs(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9;
}
Ht.encodingLength = Nc;
Object.defineProperty(Qt, "__esModule", { value: !0 });
const Ti = Ht;
Qt.range = (e) => [...Array(e).keys()];
function g1(e) {
  if (e.length < 1) return e;
  let t = e.length - 1, r = 0;
  for (let n = 0; n < e.length / 2; n++)
    r = e[n], e[n] = e[t], e[t] = r, t--;
  return e;
}
Qt.reverseBuffer = g1;
function w1(e) {
  const t = e.map(Bc);
  return t.push(H.from([0])), H.concat(t);
}
Qt.keyValsToBuffer = w1;
function Bc(e) {
  const t = e.key.length, r = e.value.length, n = Ti.encodingLength(t), i = Ti.encodingLength(r), s = H.allocUnsafe(
    n + t + i + r
  );
  return Ti.encode(t, s, 0), e.key.copy(s, n), Ti.encode(r, s, n + t), e.value.copy(s, n + t + i), s;
}
Qt.keyValToBuffer = Bc;
function Cc(e, t) {
  if (typeof e != "number")
    throw new Error("cannot write a non-number as a number");
  if (e < 0)
    throw new Error("specified a negative value for writing an unsigned value");
  if (e > t) throw new Error("RangeError: value out of range");
  if (Math.floor(e) !== e)
    throw new Error("value has a fractional component");
}
function y1(e, t) {
  const r = e.readUInt32LE(t);
  let n = e.readUInt32LE(t + 4);
  return n *= 4294967296, Cc(n + r, 9007199254740991), n + r;
}
Qt.readUInt64LE = y1;
function m1(e, t, r) {
  return Cc(t, 9007199254740991), e.writeInt32LE(t & -1, r), e.writeUInt32LE(Math.floor(t / 4294967296), r + 4), r + 8;
}
Qt.writeUInt64LE = m1;
Object.defineProperty(an, "__esModule", { value: !0 });
const Fc = ze, Rc = Qt, ji = Ht;
function E1(e) {
  if (e.key[0] !== Fc.InputTypes.WITNESS_UTXO)
    throw new Error(
      "Decode Error: could not decode witnessUtxo with key 0x" + e.key.toString("hex")
    );
  const t = Rc.readUInt64LE(e.value, 0);
  let r = 8;
  const n = ji.decode(e.value, r);
  r += ji.encodingLength(n);
  const i = e.value.slice(r);
  if (i.length !== n)
    throw new Error("Decode Error: WITNESS_UTXO script is not proper length");
  return {
    script: i,
    value: t
  };
}
an.decode = E1;
function b1(e) {
  const { script: t, value: r } = e, n = ji.encodingLength(t.length), i = H.allocUnsafe(8 + n + t.length);
  return Rc.writeUInt64LE(i, r, 0), ji.encode(t.length, i, 8), t.copy(i, 8 + n), {
    key: H.from([Fc.InputTypes.WITNESS_UTXO]),
    value: i
  };
}
an.encode = b1;
an.expected = "{ script: Buffer; value: number; }";
function S1(e) {
  return H.isBuffer(e.script) && typeof e.value == "number";
}
an.check = S1;
function v1(e, t) {
  return !!e && !!t && e.witnessUtxo === void 0;
}
an.canAdd = v1;
var un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
const Uc = ze, ms = Ht;
function _1(e) {
  if (e.key[0] !== Uc.OutputTypes.TAP_TREE || e.key.length !== 1)
    throw new Error(
      "Decode Error: could not decode tapTree with key 0x" + e.key.toString("hex")
    );
  let t = 0;
  const r = [];
  for (; t < e.value.length; ) {
    const n = e.value[t++], i = e.value[t++], s = ms.decode(e.value, t);
    t += ms.encodingLength(s), r.push({
      depth: n,
      leafVersion: i,
      script: e.value.slice(t, t + s)
    }), t += s;
  }
  return { leaves: r };
}
un.decode = _1;
function T1(e) {
  const t = H.from([Uc.OutputTypes.TAP_TREE]), r = [].concat(
    ...e.leaves.map((n) => [
      H.of(n.depth, n.leafVersion),
      ms.encode(n.script.length),
      n.script
    ])
  );
  return {
    key: t,
    value: H.concat(r)
  };
}
un.encode = T1;
un.expected = "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }";
function I1(e) {
  return Array.isArray(e.leaves) && e.leaves.every(
    (t) => t.depth >= 0 && t.depth <= 128 && (t.leafVersion & 254) === t.leafVersion && H.isBuffer(t.script)
  );
}
un.check = I1;
function O1(e, t) {
  return !!e && !!t && e.tapTree === void 0;
}
un.canAdd = O1;
var wo = {};
Object.defineProperty(wo, "__esModule", { value: !0 });
const P1 = (e) => [...Array(e).keys()], k1 = (e) => e.length === 33 && [2, 3].includes(e[0]) || e.length === 65 && e[0] === 4;
function A1(e, t = k1) {
  function r(a) {
    if (a.key[0] !== e)
      throw new Error(
        "Decode Error: could not decode bip32Derivation with key 0x" + a.key.toString("hex")
      );
    const l = a.key.slice(1);
    if (!t(l))
      throw new Error(
        "Decode Error: bip32Derivation has invalid pubkey in key 0x" + a.key.toString("hex")
      );
    if (a.value.length / 4 % 1 !== 0)
      throw new Error(
        "Decode Error: Input BIP32_DERIVATION value length should be multiple of 4"
      );
    const p = {
      masterFingerprint: a.value.slice(0, 4),
      pubkey: l,
      path: "m"
    };
    for (const f of P1(a.value.length / 4 - 1)) {
      const d = a.value.readUInt32LE(f * 4 + 4), _ = !!(d & 2147483648), m = d & 2147483647;
      p.path += "/" + m.toString(10) + (_ ? "'" : "");
    }
    return p;
  }
  function n(a) {
    const l = H.from([e]), p = H.concat([l, a.pubkey]), f = a.path.split("/"), d = H.allocUnsafe(f.length * 4);
    a.masterFingerprint.copy(d, 0);
    let _ = 4;
    return f.slice(1).forEach((m) => {
      const B = m.slice(-1) === "'";
      let I = 2147483647 & parseInt(B ? m.slice(0, -1) : m, 10);
      B && (I += 2147483648), d.writeUInt32LE(I, _), _ += 4;
    }), {
      key: p,
      value: d
    };
  }
  const i = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
  function s(a) {
    return H.isBuffer(a.pubkey) && H.isBuffer(a.masterFingerprint) && typeof a.path == "string" && t(a.pubkey) && a.masterFingerprint.length === 4;
  }
  function o(a, l, p) {
    const f = l.pubkey.toString("hex");
    return p.has(f) ? !1 : (p.add(f), a.filter((d) => d.pubkey.equals(l.pubkey)).length === 0);
  }
  return {
    decode: r,
    encode: n,
    check: s,
    expected: i,
    canAddToArray: o
  };
}
wo.makeConverter = A1;
var Xs = {};
Object.defineProperty(Xs, "__esModule", { value: !0 });
function x1(e) {
  return t;
  function t(r) {
    let n;
    if (e.includes(r.key[0]) && (n = r.key.slice(1), !(n.length === 33 || n.length === 65) || ![2, 3, 4].includes(n[0])))
      throw new Error(
        "Format Error: invalid pubkey in key 0x" + r.key.toString("hex")
      );
    return n;
  }
}
Xs.makeChecker = x1;
var zs = {};
Object.defineProperty(zs, "__esModule", { value: !0 });
function N1(e) {
  function t(o) {
    if (o.key[0] !== e)
      throw new Error(
        "Decode Error: could not decode redeemScript with key 0x" + o.key.toString("hex")
      );
    return o.value;
  }
  function r(o) {
    return {
      key: H.from([e]),
      value: o
    };
  }
  const n = "Buffer";
  function i(o) {
    return H.isBuffer(o);
  }
  function s(o, a) {
    return !!o && !!a && o.redeemScript === void 0;
  }
  return {
    decode: t,
    encode: r,
    check: i,
    expected: n,
    canAdd: s
  };
}
zs.makeConverter = N1;
var Ys = {};
Object.defineProperty(Ys, "__esModule", { value: !0 });
const Ii = Ht, B1 = wo, C1 = (e) => e.length === 32;
function F1(e) {
  const t = B1.makeConverter(e, C1);
  function r(o) {
    const a = Ii.decode(o.value), l = Ii.encodingLength(a), p = t.decode({
      key: o.key,
      value: o.value.slice(l + a * 32)
    }), f = new Array(a);
    for (let d = 0, _ = l; d < a; d++, _ += 32)
      f[d] = o.value.slice(_, _ + 32);
    return Object.assign({}, p, { leafHashes: f });
  }
  function n(o) {
    const a = t.encode(o), l = Ii.encodingLength(o.leafHashes.length), p = H.allocUnsafe(l);
    Ii.encode(o.leafHashes.length, p);
    const f = H.concat([p, ...o.leafHashes, a.value]);
    return Object.assign({}, a, { value: f });
  }
  const i = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
  function s(o) {
    return Array.isArray(o.leafHashes) && o.leafHashes.every(
      (a) => H.isBuffer(a) && a.length === 32
    ) && t.check(o);
  }
  return {
    decode: r,
    encode: n,
    check: s,
    expected: i,
    canAddToArray: t.canAddToArray
  };
}
Ys.makeConverter = F1;
var Js = {};
Object.defineProperty(Js, "__esModule", { value: !0 });
function R1(e) {
  function t(o) {
    if (o.key[0] !== e || o.key.length !== 1)
      throw new Error(
        "Decode Error: could not decode tapInternalKey with key 0x" + o.key.toString("hex")
      );
    if (o.value.length !== 32)
      throw new Error(
        "Decode Error: tapInternalKey not a 32-byte x-only pubkey"
      );
    return o.value;
  }
  function r(o) {
    return { key: H.from([e]), value: o };
  }
  const n = "Buffer";
  function i(o) {
    return H.isBuffer(o) && o.length === 32;
  }
  function s(o, a) {
    return !!o && !!a && o.tapInternalKey === void 0;
  }
  return {
    decode: t,
    encode: r,
    check: i,
    expected: n,
    canAdd: s
  };
}
Js.makeConverter = R1;
var Qs = {};
Object.defineProperty(Qs, "__esModule", { value: !0 });
function U1(e) {
  function t(o) {
    if (o.key[0] !== e)
      throw new Error(
        "Decode Error: could not decode witnessScript with key 0x" + o.key.toString("hex")
      );
    return o.value;
  }
  function r(o) {
    return {
      key: H.from([e]),
      value: o
    };
  }
  const n = "Buffer";
  function i(o) {
    return H.isBuffer(o);
  }
  function s(o, a) {
    return !!o && !!a && o.witnessScript === void 0;
  }
  return {
    decode: t,
    encode: r,
    check: i,
    expected: n,
    canAdd: s
  };
}
Qs.makeConverter = U1;
Object.defineProperty(Xr, "__esModule", { value: !0 });
const St = ze, L1 = zr, H1 = Vs, M1 = Yr, $1 = Jr, D1 = Qr, j1 = Zr, K1 = en, W1 = tn, G1 = rn, V1 = nn, q1 = on, X1 = sn, z1 = an, Y1 = un, Lc = wo, Zs = Xs, Hc = zs, Mc = Ys, $c = Js, Dc = Qs, J1 = {
  unsignedTx: H1,
  globalXpub: L1,
  // pass an Array of key bytes that require pubkey beside the key
  checkPubkey: Zs.makeChecker([])
};
Xr.globals = J1;
const Q1 = {
  nonWitnessUtxo: D1,
  partialSig: j1,
  sighashType: W1,
  finalScriptSig: M1,
  finalScriptWitness: $1,
  porCommitment: K1,
  witnessUtxo: z1,
  bip32Derivation: Lc.makeConverter(
    St.InputTypes.BIP32_DERIVATION
  ),
  redeemScript: Hc.makeConverter(
    St.InputTypes.REDEEM_SCRIPT
  ),
  witnessScript: Dc.makeConverter(
    St.InputTypes.WITNESS_SCRIPT
  ),
  checkPubkey: Zs.makeChecker([
    St.InputTypes.PARTIAL_SIG,
    St.InputTypes.BIP32_DERIVATION
  ]),
  tapKeySig: G1,
  tapScriptSig: X1,
  tapLeafScript: V1,
  tapBip32Derivation: Mc.makeConverter(
    St.InputTypes.TAP_BIP32_DERIVATION
  ),
  tapInternalKey: $c.makeConverter(
    St.InputTypes.TAP_INTERNAL_KEY
  ),
  tapMerkleRoot: q1
};
Xr.inputs = Q1;
const Z1 = {
  bip32Derivation: Lc.makeConverter(
    St.OutputTypes.BIP32_DERIVATION
  ),
  redeemScript: Hc.makeConverter(
    St.OutputTypes.REDEEM_SCRIPT
  ),
  witnessScript: Dc.makeConverter(
    St.OutputTypes.WITNESS_SCRIPT
  ),
  checkPubkey: Zs.makeChecker([
    St.OutputTypes.BIP32_DERIVATION
  ]),
  tapBip32Derivation: Mc.makeConverter(
    St.OutputTypes.TAP_BIP32_DERIVATION
  ),
  tapTree: Y1,
  tapInternalKey: $c.makeConverter(
    St.OutputTypes.TAP_INTERNAL_KEY
  )
};
Xr.outputs = Z1;
Object.defineProperty(li, "__esModule", { value: !0 });
const Oe = Xr, Ki = Qt, qa = Ht, re = ze;
function eg(e, t) {
  let r = 0;
  function n() {
    const C = qa.decode(e, r);
    r += qa.encodingLength(C);
    const D = e.slice(r, r + C);
    return r += C, D;
  }
  function i() {
    const C = e.readUInt32BE(r);
    return r += 4, C;
  }
  function s() {
    const C = e.readUInt8(r);
    return r += 1, C;
  }
  function o() {
    const C = n(), D = n();
    return {
      key: C,
      value: D
    };
  }
  function a() {
    if (r >= e.length)
      throw new Error("Format Error: Unexpected End of PSBT");
    const C = e.readUInt8(r) === 0;
    return C && r++, C;
  }
  if (i() !== 1886610036)
    throw new Error("Format Error: Invalid Magic Number");
  if (s() !== 255)
    throw new Error(
      "Format Error: Magic Number must be followed by 0xff separator"
    );
  const l = [], p = {};
  for (; !a(); ) {
    const C = o(), D = C.key.toString("hex");
    if (p[D])
      throw new Error(
        "Format Error: Keys must be unique for global keymap: key " + D
      );
    p[D] = 1, l.push(C);
  }
  const f = l.filter(
    (C) => C.key[0] === re.GlobalTypes.UNSIGNED_TX
  );
  if (f.length !== 1)
    throw new Error("Format Error: Only one UNSIGNED_TX allowed");
  const d = t(f[0].value), { inputCount: _, outputCount: m } = d.getInputOutputCounts(), B = [], I = [];
  for (const C of Ki.range(_)) {
    const D = {}, b = [];
    for (; !a(); ) {
      const A = o(), x = A.key.toString("hex");
      if (D[x])
        throw new Error(
          "Format Error: Keys must be unique for each input: input index " + C + " key " + x
        );
      D[x] = 1, b.push(A);
    }
    B.push(b);
  }
  for (const C of Ki.range(m)) {
    const D = {}, b = [];
    for (; !a(); ) {
      const A = o(), x = A.key.toString("hex");
      if (D[x])
        throw new Error(
          "Format Error: Keys must be unique for each output: output index " + C + " key " + x
        );
      D[x] = 1, b.push(A);
    }
    I.push(b);
  }
  return jc(d, {
    globalMapKeyVals: l,
    inputKeyVals: B,
    outputKeyVals: I
  });
}
li.psbtFromBuffer = eg;
function Je(e, t, r) {
  if (!t.equals(H.from([r])))
    throw new Error(
      `Format Error: Invalid ${e} key: ${t.toString("hex")}`
    );
}
li.checkKeyBuffer = Je;
function jc(e, { globalMapKeyVals: t, inputKeyVals: r, outputKeyVals: n }) {
  const i = {
    unsignedTx: e
  };
  let s = 0;
  for (const f of t)
    switch (f.key[0]) {
      case re.GlobalTypes.UNSIGNED_TX:
        if (Je(
          "global",
          f.key,
          re.GlobalTypes.UNSIGNED_TX
        ), s > 0)
          throw new Error("Format Error: GlobalMap has multiple UNSIGNED_TX");
        s++;
        break;
      case re.GlobalTypes.GLOBAL_XPUB:
        i.globalXpub === void 0 && (i.globalXpub = []), i.globalXpub.push(Oe.globals.globalXpub.decode(f));
        break;
      default:
        i.unknownKeyVals || (i.unknownKeyVals = []), i.unknownKeyVals.push(f);
    }
  const o = r.length, a = n.length, l = [], p = [];
  for (const f of Ki.range(o)) {
    const d = {};
    for (const _ of r[f])
      switch (Oe.inputs.checkPubkey(_), _.key[0]) {
        case re.InputTypes.NON_WITNESS_UTXO:
          if (Je(
            "input",
            _.key,
            re.InputTypes.NON_WITNESS_UTXO
          ), d.nonWitnessUtxo !== void 0)
            throw new Error(
              "Format Error: Input has multiple NON_WITNESS_UTXO"
            );
          d.nonWitnessUtxo = Oe.inputs.nonWitnessUtxo.decode(_);
          break;
        case re.InputTypes.WITNESS_UTXO:
          if (Je(
            "input",
            _.key,
            re.InputTypes.WITNESS_UTXO
          ), d.witnessUtxo !== void 0)
            throw new Error("Format Error: Input has multiple WITNESS_UTXO");
          d.witnessUtxo = Oe.inputs.witnessUtxo.decode(_);
          break;
        case re.InputTypes.PARTIAL_SIG:
          d.partialSig === void 0 && (d.partialSig = []), d.partialSig.push(Oe.inputs.partialSig.decode(_));
          break;
        case re.InputTypes.SIGHASH_TYPE:
          if (Je(
            "input",
            _.key,
            re.InputTypes.SIGHASH_TYPE
          ), d.sighashType !== void 0)
            throw new Error("Format Error: Input has multiple SIGHASH_TYPE");
          d.sighashType = Oe.inputs.sighashType.decode(_);
          break;
        case re.InputTypes.REDEEM_SCRIPT:
          if (Je(
            "input",
            _.key,
            re.InputTypes.REDEEM_SCRIPT
          ), d.redeemScript !== void 0)
            throw new Error("Format Error: Input has multiple REDEEM_SCRIPT");
          d.redeemScript = Oe.inputs.redeemScript.decode(_);
          break;
        case re.InputTypes.WITNESS_SCRIPT:
          if (Je(
            "input",
            _.key,
            re.InputTypes.WITNESS_SCRIPT
          ), d.witnessScript !== void 0)
            throw new Error("Format Error: Input has multiple WITNESS_SCRIPT");
          d.witnessScript = Oe.inputs.witnessScript.decode(_);
          break;
        case re.InputTypes.BIP32_DERIVATION:
          d.bip32Derivation === void 0 && (d.bip32Derivation = []), d.bip32Derivation.push(
            Oe.inputs.bip32Derivation.decode(_)
          );
          break;
        case re.InputTypes.FINAL_SCRIPTSIG:
          Je(
            "input",
            _.key,
            re.InputTypes.FINAL_SCRIPTSIG
          ), d.finalScriptSig = Oe.inputs.finalScriptSig.decode(_);
          break;
        case re.InputTypes.FINAL_SCRIPTWITNESS:
          Je(
            "input",
            _.key,
            re.InputTypes.FINAL_SCRIPTWITNESS
          ), d.finalScriptWitness = Oe.inputs.finalScriptWitness.decode(
            _
          );
          break;
        case re.InputTypes.POR_COMMITMENT:
          Je(
            "input",
            _.key,
            re.InputTypes.POR_COMMITMENT
          ), d.porCommitment = Oe.inputs.porCommitment.decode(_);
          break;
        case re.InputTypes.TAP_KEY_SIG:
          Je(
            "input",
            _.key,
            re.InputTypes.TAP_KEY_SIG
          ), d.tapKeySig = Oe.inputs.tapKeySig.decode(_);
          break;
        case re.InputTypes.TAP_SCRIPT_SIG:
          d.tapScriptSig === void 0 && (d.tapScriptSig = []), d.tapScriptSig.push(Oe.inputs.tapScriptSig.decode(_));
          break;
        case re.InputTypes.TAP_LEAF_SCRIPT:
          d.tapLeafScript === void 0 && (d.tapLeafScript = []), d.tapLeafScript.push(Oe.inputs.tapLeafScript.decode(_));
          break;
        case re.InputTypes.TAP_BIP32_DERIVATION:
          d.tapBip32Derivation === void 0 && (d.tapBip32Derivation = []), d.tapBip32Derivation.push(
            Oe.inputs.tapBip32Derivation.decode(_)
          );
          break;
        case re.InputTypes.TAP_INTERNAL_KEY:
          Je(
            "input",
            _.key,
            re.InputTypes.TAP_INTERNAL_KEY
          ), d.tapInternalKey = Oe.inputs.tapInternalKey.decode(_);
          break;
        case re.InputTypes.TAP_MERKLE_ROOT:
          Je(
            "input",
            _.key,
            re.InputTypes.TAP_MERKLE_ROOT
          ), d.tapMerkleRoot = Oe.inputs.tapMerkleRoot.decode(_);
          break;
        default:
          d.unknownKeyVals || (d.unknownKeyVals = []), d.unknownKeyVals.push(_);
      }
    l.push(d);
  }
  for (const f of Ki.range(a)) {
    const d = {};
    for (const _ of n[f])
      switch (Oe.outputs.checkPubkey(_), _.key[0]) {
        case re.OutputTypes.REDEEM_SCRIPT:
          if (Je(
            "output",
            _.key,
            re.OutputTypes.REDEEM_SCRIPT
          ), d.redeemScript !== void 0)
            throw new Error("Format Error: Output has multiple REDEEM_SCRIPT");
          d.redeemScript = Oe.outputs.redeemScript.decode(_);
          break;
        case re.OutputTypes.WITNESS_SCRIPT:
          if (Je(
            "output",
            _.key,
            re.OutputTypes.WITNESS_SCRIPT
          ), d.witnessScript !== void 0)
            throw new Error("Format Error: Output has multiple WITNESS_SCRIPT");
          d.witnessScript = Oe.outputs.witnessScript.decode(_);
          break;
        case re.OutputTypes.BIP32_DERIVATION:
          d.bip32Derivation === void 0 && (d.bip32Derivation = []), d.bip32Derivation.push(
            Oe.outputs.bip32Derivation.decode(_)
          );
          break;
        case re.OutputTypes.TAP_INTERNAL_KEY:
          Je(
            "output",
            _.key,
            re.OutputTypes.TAP_INTERNAL_KEY
          ), d.tapInternalKey = Oe.outputs.tapInternalKey.decode(_);
          break;
        case re.OutputTypes.TAP_TREE:
          Je(
            "output",
            _.key,
            re.OutputTypes.TAP_TREE
          ), d.tapTree = Oe.outputs.tapTree.decode(_);
          break;
        case re.OutputTypes.TAP_BIP32_DERIVATION:
          d.tapBip32Derivation === void 0 && (d.tapBip32Derivation = []), d.tapBip32Derivation.push(
            Oe.outputs.tapBip32Derivation.decode(_)
          );
          break;
        default:
          d.unknownKeyVals || (d.unknownKeyVals = []), d.unknownKeyVals.push(_);
      }
    p.push(d);
  }
  return { globalMap: i, inputs: l, outputs: p };
}
li.psbtFromKeyVals = jc;
var yo = {};
Object.defineProperty(yo, "__esModule", { value: !0 });
const Yo = Xr, Xa = Qt;
function tg({ globalMap: e, inputs: t, outputs: r }) {
  const { globalKeyVals: n, inputKeyVals: i, outputKeyVals: s } = Kc({
    globalMap: e,
    inputs: t,
    outputs: r
  }), o = Xa.keyValsToBuffer(n), a = (d) => d.length === 0 ? [H.from([0])] : d.map(Xa.keyValsToBuffer), l = a(i), p = a(s), f = H.allocUnsafe(5);
  return f.writeUIntBE(482972169471, 0, 5), H.concat(
    [f, o].concat(l, p)
  );
}
yo.psbtToBuffer = tg;
const rg = (e, t) => e.key.compare(t.key);
function Jo(e, t) {
  const r = /* @__PURE__ */ new Set(), n = Object.entries(e).reduce((s, [o, a]) => {
    if (o === "unknownKeyVals") return s;
    const l = t[o];
    if (l === void 0) return s;
    const p = (Array.isArray(a) ? a : [a]).map(
      l.encode
    );
    return p.map((d) => d.key.toString("hex")).forEach((d) => {
      if (r.has(d))
        throw new Error("Serialize Error: Duplicate key: " + d);
      r.add(d);
    }), s.concat(p);
  }, []), i = e.unknownKeyVals ? e.unknownKeyVals.filter((s) => !r.has(s.key.toString("hex"))) : [];
  return n.concat(i).sort(rg);
}
function Kc({ globalMap: e, inputs: t, outputs: r }) {
  return {
    globalKeyVals: Jo(e, Yo.globals),
    inputKeyVals: t.map((n) => Jo(n, Yo.inputs)),
    outputKeyVals: r.map((n) => Jo(n, Yo.outputs))
  };
}
yo.psbtToKeyVals = Kc;
(function(e) {
  function t(r) {
    for (var n in r) e.hasOwnProperty(n) || (e[n] = r[n]);
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), t(li), t(yo);
})(Gs);
Object.defineProperty(Ws, "__esModule", { value: !0 });
const Qo = Gs;
function ng(e) {
  const t = e[0], r = Qo.psbtToKeyVals(t), n = e.slice(1);
  if (n.length === 0) throw new Error("Combine: Nothing to combine");
  const i = za(t);
  if (i === void 0)
    throw new Error("Combine: Self missing transaction");
  const s = En(r.globalKeyVals), o = r.inputKeyVals.map(En), a = r.outputKeyVals.map(En);
  for (const l of n) {
    const p = za(l);
    if (p === void 0 || !p.toBuffer().equals(i.toBuffer()))
      throw new Error(
        "Combine: One of the Psbts does not have the same transaction."
      );
    const f = Qo.psbtToKeyVals(l);
    En(f.globalKeyVals).forEach(
      Zo(
        s,
        r.globalKeyVals,
        f.globalKeyVals
      )
    ), f.inputKeyVals.map(En).forEach(
      (B, I) => B.forEach(
        Zo(
          o[I],
          r.inputKeyVals[I],
          f.inputKeyVals[I]
        )
      )
    ), f.outputKeyVals.map(En).forEach(
      (B, I) => B.forEach(
        Zo(
          a[I],
          r.outputKeyVals[I],
          f.outputKeyVals[I]
        )
      )
    );
  }
  return Qo.psbtFromKeyVals(i, {
    globalMapKeyVals: r.globalKeyVals,
    inputKeyVals: r.inputKeyVals,
    outputKeyVals: r.outputKeyVals
  });
}
Ws.combine = ng;
function Zo(e, t, r) {
  return (n) => {
    if (e.has(n)) return;
    const i = r.filter((s) => s.key.toString("hex") === n)[0];
    t.push(i), e.add(n);
  };
}
function za(e) {
  return e.globalMap.unsignedTx;
}
function En(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const n = r.key.toString("hex");
    if (t.has(n))
      throw new Error("Combine: KeyValue Map keys should be unique");
    t.add(n);
  }), t;
}
var ea = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Xr;
  function r(m, B) {
    const I = m[B];
    if (I === void 0) throw new Error(`No input #${B}`);
    return I;
  }
  e.checkForInput = r;
  function n(m, B) {
    const I = m[B];
    if (I === void 0) throw new Error(`No output #${B}`);
    return I;
  }
  e.checkForOutput = n;
  function i(m, B, I) {
    if (m.key[0] < I)
      throw new Error(
        "Use the method for your specific key instead of addUnknownKeyVal*"
      );
    if (B && B.filter((C) => C.key.equals(m.key)).length !== 0)
      throw new Error(`Duplicate Key: ${m.key.toString("hex")}`);
  }
  e.checkHasKey = i;
  function s(m) {
    let B = 0;
    return Object.keys(m).forEach((I) => {
      Number(isNaN(Number(I))) && B++;
    }), B;
  }
  e.getEnumLength = s;
  function o(m, B) {
    let I = !1;
    if (B.nonWitnessUtxo || B.witnessUtxo) {
      const C = !!B.redeemScript, D = !!B.witnessScript, b = !C || !!B.finalScriptSig, A = !D || !!B.finalScriptWitness, x = !!B.finalScriptSig || !!B.finalScriptWitness;
      I = b && A && x;
    }
    if (I === !1)
      throw new Error(
        `Input #${m} has too much or too little data to clean`
      );
  }
  e.inputCheckUncleanFinalized = o;
  function a(m, B, I, C) {
    throw new Error(
      `Data for ${m} key ${B} is incorrect: Expected ${I} and got ${JSON.stringify(C)}`
    );
  }
  function l(m) {
    return (B, I) => {
      for (const C of Object.keys(B)) {
        const D = B[C], { canAdd: b, canAddToArray: A, check: x, expected: M } = (
          // @ts-ignore
          t[m + "s"][C] || {}
        ), U = !!A;
        if (x)
          if (U) {
            if (!Array.isArray(D) || // @ts-ignore
            I[C] && !Array.isArray(I[C]))
              throw new Error(`Key type ${C} must be an array`);
            D.every(x) || a(m, C, M, D);
            const W = I[C] || [], g = /* @__PURE__ */ new Set();
            if (!D.every((h) => A(W, h, g)))
              throw new Error("Can not add duplicate data to array");
            I[C] = W.concat(D);
          } else {
            if (x(D) || a(m, C, M, D), !b(I, D))
              throw new Error(`Can not add duplicate data to ${m}`);
            I[C] = D;
          }
      }
    };
  }
  e.updateGlobal = l("global"), e.updateInput = l("input"), e.updateOutput = l("output");
  function p(m, B) {
    const I = m.length - 1, C = r(m, I);
    e.updateInput(B, C);
  }
  e.addInputAttributes = p;
  function f(m, B) {
    const I = m.length - 1, C = n(m, I);
    e.updateOutput(B, C);
  }
  e.addOutputAttributes = f;
  function d(m, B) {
    if (!H.isBuffer(B) || B.length < 4)
      throw new Error("Set Version: Invalid Transaction");
    return B.writeUInt32LE(m, 0), B;
  }
  e.defaultVersionSetter = d;
  function _(m, B) {
    if (!H.isBuffer(B) || B.length < 4)
      throw new Error("Set Locktime: Invalid Transaction");
    return B.writeUInt32LE(m, B.length - 4), B;
  }
  e.defaultLocktimeSetter = _;
})(ea);
Object.defineProperty(Ks, "__esModule", { value: !0 });
const ig = Ws, Ya = Gs, es = ze, Ye = ea;
let og = class {
  constructor(t) {
    this.inputs = [], this.outputs = [], this.globalMap = {
      unsignedTx: t
    };
  }
  static fromBase64(t, r) {
    const n = H.from(t, "base64");
    return this.fromBuffer(n, r);
  }
  static fromHex(t, r) {
    const n = H.from(t, "hex");
    return this.fromBuffer(n, r);
  }
  static fromBuffer(t, r) {
    const n = Ya.psbtFromBuffer(t, r), i = new this(n.globalMap.unsignedTx);
    return Object.assign(i, n), i;
  }
  toBase64() {
    return this.toBuffer().toString("base64");
  }
  toHex() {
    return this.toBuffer().toString("hex");
  }
  toBuffer() {
    return Ya.psbtToBuffer(this);
  }
  updateGlobal(t) {
    return Ye.updateGlobal(t, this.globalMap), this;
  }
  updateInput(t, r) {
    const n = Ye.checkForInput(this.inputs, t);
    return Ye.updateInput(r, n), this;
  }
  updateOutput(t, r) {
    const n = Ye.checkForOutput(this.outputs, t);
    return Ye.updateOutput(r, n), this;
  }
  addUnknownKeyValToGlobal(t) {
    return Ye.checkHasKey(
      t,
      this.globalMap.unknownKeyVals,
      Ye.getEnumLength(es.GlobalTypes)
    ), this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []), this.globalMap.unknownKeyVals.push(t), this;
  }
  addUnknownKeyValToInput(t, r) {
    const n = Ye.checkForInput(this.inputs, t);
    return Ye.checkHasKey(
      r,
      n.unknownKeyVals,
      Ye.getEnumLength(es.InputTypes)
    ), n.unknownKeyVals || (n.unknownKeyVals = []), n.unknownKeyVals.push(r), this;
  }
  addUnknownKeyValToOutput(t, r) {
    const n = Ye.checkForOutput(this.outputs, t);
    return Ye.checkHasKey(
      r,
      n.unknownKeyVals,
      Ye.getEnumLength(es.OutputTypes)
    ), n.unknownKeyVals || (n.unknownKeyVals = []), n.unknownKeyVals.push(r), this;
  }
  addInput(t) {
    this.globalMap.unsignedTx.addInput(t), this.inputs.push({
      unknownKeyVals: []
    });
    const r = t.unknownKeyVals || [], n = this.inputs.length - 1;
    if (!Array.isArray(r))
      throw new Error("unknownKeyVals must be an Array");
    return r.forEach(
      (i) => this.addUnknownKeyValToInput(n, i)
    ), Ye.addInputAttributes(this.inputs, t), this;
  }
  addOutput(t) {
    this.globalMap.unsignedTx.addOutput(t), this.outputs.push({
      unknownKeyVals: []
    });
    const r = t.unknownKeyVals || [], n = this.outputs.length - 1;
    if (!Array.isArray(r))
      throw new Error("unknownKeyVals must be an Array");
    return r.forEach(
      (i) => this.addUnknownKeyValToOutput(n, i)
    ), Ye.addOutputAttributes(this.outputs, t), this;
  }
  clearFinalizedInput(t) {
    const r = Ye.checkForInput(this.inputs, t);
    Ye.inputCheckUncleanFinalized(t, r);
    for (const n of Object.keys(r))
      [
        "witnessUtxo",
        "nonWitnessUtxo",
        "finalScriptSig",
        "finalScriptWitness",
        "unknownKeyVals"
      ].includes(n) || delete r[n];
    return this;
  }
  combine(...t) {
    const r = ig.combine([this].concat(t));
    return Object.assign(this, r), this;
  }
  getTransaction() {
    return this.globalMap.unsignedTx.toBuffer();
  }
};
Ks.Psbt = og;
var Ae = {}, me = {};
Object.defineProperty(me, "__esModule", { value: !0 });
me.signatureBlocksAction = me.checkInputForSig = me.pubkeyInScript = me.pubkeyPositionInScript = me.witnessStackToScriptWitness = me.isP2TR = me.isP2SHScript = me.isP2WSHScript = me.isP2WPKH = me.isP2PKH = me.isP2PK = me.isP2MS = void 0;
const Ja = Ht, ti = ht(), Oi = Ur, sg = Jt, cn = ci();
function ln(e) {
  return (t) => {
    try {
      return e({ output: t }), !0;
    } catch {
      return !1;
    }
  };
}
me.isP2MS = ln(cn.p2ms);
me.isP2PK = ln(cn.p2pk);
me.isP2PKH = ln(cn.p2pkh);
me.isP2WPKH = ln(cn.p2wpkh);
me.isP2WSHScript = ln(cn.p2wsh);
me.isP2SHScript = ln(cn.p2sh);
me.isP2TR = ln(cn.p2tr);
function ag(e) {
  let t = H.allocUnsafe(0);
  function r(o) {
    t = H.concat([t, H.from(o)]);
  }
  function n(o) {
    const a = t.length, l = Ja.encodingLength(o);
    t = H.concat([t, H.allocUnsafe(l)]), Ja.encode(o, t, a);
  }
  function i(o) {
    n(o.length), r(o);
  }
  function s(o) {
    n(o.length), o.forEach(i);
  }
  return s(e), t;
}
me.witnessStackToScriptWitness = ag;
function Wc(e, t) {
  const r = (0, sg.hash160)(e), n = e.slice(1, 33), i = ti.decompile(t);
  if (i === null) throw new Error("Unknown script error");
  return i.findIndex((s) => typeof s == "number" ? !1 : s.equals(e) || s.equals(r) || s.equals(n));
}
me.pubkeyPositionInScript = Wc;
function ug(e, t) {
  return Wc(e, t) !== -1;
}
me.pubkeyInScript = ug;
function cg(e, t) {
  return lg(e).some(
    (n) => Gc(n, ti.signature.decode, t)
  );
}
me.checkInputForSig = cg;
function Gc(e, t, r) {
  const { hashType: n } = t(e), i = [];
  switch (n & Oi.Transaction.SIGHASH_ANYONECANPAY && i.push("addInput"), n & 31) {
    case Oi.Transaction.SIGHASH_ALL:
      break;
    case Oi.Transaction.SIGHASH_SINGLE:
    case Oi.Transaction.SIGHASH_NONE:
      i.push("addOutput"), i.push("setInputSequence");
      break;
  }
  return i.indexOf(r) === -1;
}
me.signatureBlocksAction = Gc;
function lg(e) {
  let t = [];
  if ((e.partialSig || []).length === 0) {
    if (!e.finalScriptSig && !e.finalScriptWitness) return [];
    t = fg(e);
  } else
    t = e.partialSig;
  return t.map((r) => r.signature);
}
function fg(e) {
  const t = e.finalScriptSig ? ti.decompile(e.finalScriptSig) || [] : [], r = e.finalScriptWitness ? ti.decompile(e.finalScriptWitness) || [] : [];
  return t.concat(r).filter((n) => H.isBuffer(n) && ti.isCanonicalScriptSignature(n)).map((n) => ({ signature: n }));
}
Object.defineProperty(Ae, "__esModule", { value: !0 });
Ae.checkTaprootInputForSigs = Ae.tapTreeFromList = Ae.tapTreeToList = Ae.tweakInternalPubKey = Ae.checkTaprootOutputFields = Ae.checkTaprootInputFields = Ae.isTaprootOutput = Ae.isTaprootInput = Ae.serializeTaprootSignature = Ae.tapScriptFinalizer = Ae.toXOnly = void 0;
const ta = tt, hg = Ur, mo = me, Rr = fo, dg = ci(), pg = me, gg = (e) => e.length === 32 ? e : e.slice(1, 33);
Ae.toXOnly = gg;
function wg(e, t, r) {
  const n = Fg(
    t,
    e,
    r
  );
  try {
    const s = Bg(t, n).concat(n.script).concat(n.controlBlock);
    return {
      finalScriptWitness: (0, mo.witnessStackToScriptWitness)(s)
    };
  } catch (i) {
    throw new Error(`Can not finalize taproot input #${e}: ${i}`);
  }
}
Ae.tapScriptFinalizer = wg;
function yg(e, t) {
  const r = t ? H.from([t]) : H.from([]);
  return H.concat([e, r]);
}
Ae.serializeTaprootSignature = yg;
function Fi(e) {
  return e && !!(e.tapInternalKey || e.tapMerkleRoot || e.tapLeafScript && e.tapLeafScript.length || e.tapBip32Derivation && e.tapBip32Derivation.length || e.witnessUtxo && (0, mo.isP2TR)(e.witnessUtxo.script));
}
Ae.isTaprootInput = Fi;
function Ri(e, t) {
  return e && !!(e.tapInternalKey || e.tapTree || e.tapBip32Derivation && e.tapBip32Derivation.length || t && (0, mo.isP2TR)(t));
}
Ae.isTaprootOutput = Ri;
function mg(e, t, r) {
  Ag(e, t, r), Ng(e, t, r);
}
Ae.checkTaprootInputFields = mg;
function Eg(e, t, r) {
  xg(e, t, r), bg(e, t);
}
Ae.checkTaprootOutputFields = Eg;
function bg(e, t) {
  if (!t.tapTree && !t.tapInternalKey) return;
  const r = t.tapInternalKey || e.tapInternalKey, n = t.tapTree || e.tapTree;
  if (r) {
    const { script: i } = e, s = Sg(r, n);
    if (i && !i.equals(s))
      throw new Error("Error adding output. Script or address missmatch.");
  }
}
function Sg(e, t) {
  const r = t && Vc(t.leaves), { output: n } = (0, dg.p2tr)({
    internalPubkey: e,
    scriptTree: r
  });
  return n;
}
function vg(e, t) {
  const r = t.tapInternalKey, n = r && (0, Rr.tweakKey)(r, t.tapMerkleRoot);
  if (!n)
    throw new Error(
      `Cannot tweak tap internal key for input #${e}. Public key: ${r && r.toString("hex")}`
    );
  return n.x;
}
Ae.tweakInternalPubKey = vg;
function _g(e) {
  if (!(0, ta.isTaptree)(e))
    throw new Error(
      "Cannot convert taptree to tapleaf list. Expecting a tapree structure."
    );
  return Es(e);
}
Ae.tapTreeToList = _g;
function Vc(e = []) {
  return e.length === 1 && e[0].depth === 0 ? {
    output: e[0].script,
    version: e[0].leafVersion
  } : kg(e);
}
Ae.tapTreeFromList = Vc;
function Tg(e, t) {
  return Og(e).some(
    (n) => (0, pg.signatureBlocksAction)(n, Ig, t)
  );
}
Ae.checkTaprootInputForSigs = Tg;
function Ig(e) {
  return {
    signature: e.slice(0, 64),
    hashType: e.slice(64)[0] || hg.Transaction.SIGHASH_DEFAULT
  };
}
function Og(e) {
  const t = [];
  if (e.tapKeySig && t.push(e.tapKeySig), e.tapScriptSig && t.push(...e.tapScriptSig.map((r) => r.signature)), !t.length) {
    const r = Pg(e.finalScriptWitness);
    r && t.push(r);
  }
  return t;
}
function Pg(e) {
  if (!e) return;
  const t = e.slice(2);
  if (t.length === 64 || t.length === 65) return t;
}
function Es(e, t = [], r = 0) {
  if (r > Rr.MAX_TAPTREE_DEPTH)
    throw new Error("Max taptree depth exceeded.");
  return e ? (0, ta.isTapleaf)(e) ? (t.push({
    depth: r,
    leafVersion: e.version || Rr.LEAF_VERSION_TAPSCRIPT,
    script: e.output
  }), t) : (e[0] && Es(e[0], t, r + 1), e[1] && Es(e[1], t, r + 1), t) : [];
}
function kg(e) {
  let t;
  for (const r of e)
    if (t = bs(r, t), !t) throw new Error("No room left to insert tapleaf in tree");
  return t;
}
function bs(e, t, r = 0) {
  if (r > Rr.MAX_TAPTREE_DEPTH)
    throw new Error("Max taptree depth exceeded.");
  if (e.depth === r)
    return t ? void 0 : {
      output: e.script,
      version: e.leafVersion
    };
  if ((0, ta.isTapleaf)(t)) return;
  const n = bs(e, t && t[0], r + 1);
  if (n) return [n, t && t[1]];
  const i = bs(e, t && t[1], r + 1);
  if (i) return [t && t[0], i];
}
function Ag(e, t, r) {
  const n = Fi(e) && Pn(t), i = Pn(e) && Fi(t), s = e === t && Fi(t) && Pn(t);
  if (n || i || s)
    throw new Error(
      `Invalid arguments for Psbt.${r}. Cannot use both taproot and non-taproot fields.`
    );
}
function xg(e, t, r) {
  const n = Ri(e) && Pn(t), i = Pn(e) && Ri(t), s = e === t && Ri(t) && Pn(t);
  if (n || i || s)
    throw new Error(
      `Invalid arguments for Psbt.${r}. Cannot use both taproot and non-taproot fields.`
    );
}
function Ng(e, t, r) {
  if (t.tapMerkleRoot) {
    const n = (t.tapLeafScript || []).every(
      (s) => ts(s, t.tapMerkleRoot)
    ), i = (e.tapLeafScript || []).every(
      (s) => ts(s, t.tapMerkleRoot)
    );
    if (!n || !i)
      throw new Error(
        `Invalid arguments for Psbt.${r}. Tapleaf not part of taptree.`
      );
  } else if (e.tapMerkleRoot && !(t.tapLeafScript || []).every(
    (i) => ts(i, e.tapMerkleRoot)
  ))
    throw new Error(
      `Invalid arguments for Psbt.${r}. Tapleaf not part of taptree.`
    );
}
function ts(e, t) {
  if (!t) return !0;
  const r = (0, Rr.tapleafHash)({
    output: e.script,
    version: e.leafVersion
  });
  return (0, Rr.rootHashFromPath)(
    e.controlBlock,
    r
  ).equals(t);
}
function Bg(e, t) {
  const r = (0, Rr.tapleafHash)({
    output: t.script,
    version: t.leafVersion
  });
  return (e.tapScriptSig || []).filter((n) => n.leafHash.equals(r)).map((n) => Cg(t.script, n)).sort((n, i) => i.positionInScript - n.positionInScript).map((n) => n.signature);
}
function Cg(e, t) {
  return Object.assign(
    {
      positionInScript: (0, mo.pubkeyPositionInScript)(
        t.pubkey,
        e
      )
    },
    t
  );
}
function Fg(e, t, r) {
  if (!e.tapScriptSig || !e.tapScriptSig.length)
    throw new Error(
      `Can not finalize taproot input #${t}. No tapleaf script signature provided.`
    );
  const n = (e.tapLeafScript || []).sort((i, s) => i.controlBlock.length - s.controlBlock.length).find(
    (i) => Rg(i, e.tapScriptSig, r)
  );
  if (!n)
    throw new Error(
      `Can not finalize taproot input #${t}. Signature for tapleaf script not found.`
    );
  return n;
}
function Rg(e, t, r) {
  const n = (0, Rr.tapleafHash)({
    output: e.script,
    version: e.leafVersion
  });
  return (!r || r.equals(n)) && t.find((s) => s.leafHash.equals(n)) !== void 0;
}
function Pn(e) {
  return e && !!(e.redeemScript || e.witnessScript || e.bip32Derivation && e.bip32Derivation.length);
}
Object.defineProperty(go, "__esModule", { value: !0 });
go.Psbt = void 0;
const Qa = Ks, Za = Ht, ct = ea, eu = js(), Wi = De, Ug = Xe, Nt = ci(), Lg = fo, fr = ht(), rt = Ur, Ne = Ae, He = me, Hg = {
  /**
   * A bitcoinjs Network object. This is only used if you pass an `address`
   * parameter to addOutput. Otherwise it is not needed and can be left default.
   */
  network: Ug.bitcoin,
  /**
   * When extractTransaction is called, the fee rate is checked.
   * THIS IS NOT TO BE RELIED ON.
   * It is only here as a last ditch effort to prevent sending a 500 BTC fee etc.
   */
  maximumFeeRate: 5e3
  // satoshi per byte
};
class Gi {
  static fromBase64(t, r = {}) {
    const n = H.from(t, "base64");
    return this.fromBuffer(n, r);
  }
  static fromHex(t, r = {}) {
    const n = H.from(t, "hex");
    return this.fromBuffer(n, r);
  }
  static fromBuffer(t, r = {}) {
    const n = Qa.Psbt.fromBuffer(t, Mg), i = new Gi(r, n);
    return Wg(i.__CACHE.__TX, i.__CACHE), i;
  }
  constructor(t = {}, r = new Qa.Psbt(new qc())) {
    this.data = r, this.opts = Object.assign({}, Hg, t), this.__CACHE = {
      __NON_WITNESS_UTXO_TX_CACHE: [],
      __NON_WITNESS_UTXO_BUF_CACHE: [],
      __TX_IN_CACHE: {},
      __TX: this.data.globalMap.unsignedTx.tx,
      // Psbt's predecessor (TransactionBuilder - now removed) behavior
      // was to not confirm input values  before signing.
      // Even though we highly encourage people to get
      // the full parent transaction to verify values, the ability to
      // sign non-segwit inputs without the full transaction was often
      // requested. So the only way to activate is to use @ts-ignore.
      // We will disable exporting the Psbt when unsafe sign is active.
      // because it is not BIP174 compliant.
      __UNSAFE_SIGN_NONSEGWIT: !1
    }, this.data.inputs.length === 0 && this.setVersion(2);
    const n = (i, s, o, a) => Object.defineProperty(i, s, {
      enumerable: o,
      writable: a
    });
    n(this, "__CACHE", !1, !0), n(this, "opts", !1, !0);
  }
  get inputCount() {
    return this.data.inputs.length;
  }
  get version() {
    return this.__CACHE.__TX.version;
  }
  set version(t) {
    this.setVersion(t);
  }
  get locktime() {
    return this.__CACHE.__TX.locktime;
  }
  set locktime(t) {
    this.setLocktime(t);
  }
  get txInputs() {
    return this.__CACHE.__TX.ins.map((t) => ({
      hash: (0, Wi.cloneBuffer)(t.hash),
      index: t.index,
      sequence: t.sequence
    }));
  }
  get txOutputs() {
    return this.__CACHE.__TX.outs.map((t) => {
      let r;
      try {
        r = (0, eu.fromOutputScript)(
          t.script,
          this.opts.network
        );
      } catch {
      }
      return {
        script: (0, Wi.cloneBuffer)(t.script),
        value: t.value,
        address: r
      };
    });
  }
  combine(...t) {
    return this.data.combine(...t.map((r) => r.data)), this;
  }
  clone() {
    const t = Gi.fromBuffer(this.data.toBuffer());
    return t.opts = JSON.parse(JSON.stringify(this.opts)), t;
  }
  setMaximumFeeRate(t) {
    Pi(t), this.opts.maximumFeeRate = t;
  }
  setVersion(t) {
    Pi(t), Gn(this.data.inputs, "setVersion");
    const r = this.__CACHE;
    return r.__TX.version = t, r.__EXTRACTED_TX = void 0, this;
  }
  setLocktime(t) {
    Pi(t), Gn(this.data.inputs, "setLocktime");
    const r = this.__CACHE;
    return r.__TX.locktime = t, r.__EXTRACTED_TX = void 0, this;
  }
  setInputSequence(t, r) {
    Pi(r), Gn(this.data.inputs, "setInputSequence");
    const n = this.__CACHE;
    if (n.__TX.ins.length <= t)
      throw new Error("Input index too high");
    return n.__TX.ins[t].sequence = r, n.__EXTRACTED_TX = void 0, this;
  }
  addInputs(t) {
    return t.forEach((r) => this.addInput(r)), this;
  }
  addInput(t) {
    if (arguments.length > 1 || !t || t.hash === void 0 || t.index === void 0)
      throw new Error(
        "Invalid arguments for Psbt.addInput. Requires single object with at least [hash] and [index]"
      );
    (0, Ne.checkTaprootInputFields)(t, t, "addInput"), Gn(this.data.inputs, "addInput"), t.witnessScript && Vi(t.witnessScript);
    const r = this.__CACHE;
    this.data.addInput(t);
    const n = r.__TX.ins[r.__TX.ins.length - 1];
    Yc(r, n);
    const i = this.data.inputs.length - 1, s = this.data.inputs[i];
    return s.nonWitnessUtxo && vs(this.__CACHE, s, i), r.__FEE = void 0, r.__FEE_RATE = void 0, r.__EXTRACTED_TX = void 0, this;
  }
  addOutputs(t) {
    return t.forEach((r) => this.addOutput(r)), this;
  }
  addOutput(t) {
    if (arguments.length > 1 || !t || t.value === void 0 || t.address === void 0 && t.script === void 0)
      throw new Error(
        "Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]"
      );
    Gn(this.data.inputs, "addOutput");
    const { address: r } = t;
    if (typeof r == "string") {
      const { network: i } = this.opts, s = (0, eu.toOutputScript)(r, i);
      t = Object.assign({}, t, { script: s });
    }
    (0, Ne.checkTaprootOutputFields)(t, t, "addOutput");
    const n = this.__CACHE;
    return this.data.addOutput(t), n.__FEE = void 0, n.__FEE_RATE = void 0, n.__EXTRACTED_TX = void 0, this;
  }
  extractTransaction(t) {
    if (!this.data.inputs.every(Xc)) throw new Error("Not finalized");
    const r = this.__CACHE;
    if (t || Dg(this, r, this.opts), r.__EXTRACTED_TX) return r.__EXTRACTED_TX;
    const n = r.__TX.clone();
    return rl(this.data.inputs, n, r, !0), n;
  }
  getFeeRate() {
    return ou(
      "__FEE_RATE",
      "fee rate",
      this.data.inputs,
      this.__CACHE
    );
  }
  getFee() {
    return ou("__FEE", "fee", this.data.inputs, this.__CACHE);
  }
  finalizeAllInputs() {
    return (0, ct.checkForInput)(this.data.inputs, 0), Vn(this.data.inputs.length).forEach((t) => this.finalizeInput(t)), this;
  }
  finalizeInput(t, r) {
    const n = (0, ct.checkForInput)(this.data.inputs, t);
    return (0, Ne.isTaprootInput)(n) ? this._finalizeTaprootInput(
      t,
      n,
      void 0,
      r
    ) : this._finalizeInput(t, n, r);
  }
  finalizeTaprootInput(t, r, n = Ne.tapScriptFinalizer) {
    const i = (0, ct.checkForInput)(this.data.inputs, t);
    if ((0, Ne.isTaprootInput)(i))
      return this._finalizeTaprootInput(
        t,
        i,
        r,
        n
      );
    throw new Error(`Cannot finalize input #${t}. Not Taproot.`);
  }
  _finalizeInput(t, r, n = Gg) {
    const { script: i, isP2SH: s, isP2WSH: o, isSegwit: a } = zg(
      t,
      r,
      this.__CACHE
    );
    if (!i) throw new Error(`No script found for input #${t}`);
    jg(r);
    const { finalScriptSig: l, finalScriptWitness: p } = n(
      t,
      r,
      i,
      a,
      s,
      o
    );
    if (l && this.data.updateInput(t, { finalScriptSig: l }), p && this.data.updateInput(t, { finalScriptWitness: p }), !l && !p)
      throw new Error(`Unknown error finalizing input #${t}`);
    return this.data.clearFinalizedInput(t), this;
  }
  _finalizeTaprootInput(t, r, n, i = Ne.tapScriptFinalizer) {
    if (!r.witnessUtxo)
      throw new Error(
        `Cannot finalize input #${t}. Missing withness utxo.`
      );
    if (r.tapKeySig) {
      const s = Nt.p2tr({
        output: r.witnessUtxo.script,
        signature: r.tapKeySig
      }), o = (0, He.witnessStackToScriptWitness)(
        s.witness
      );
      this.data.updateInput(t, { finalScriptWitness: o });
    } else {
      const { finalScriptWitness: s } = i(
        t,
        r,
        n
      );
      this.data.updateInput(t, { finalScriptWitness: s });
    }
    return this.data.clearFinalizedInput(t), this;
  }
  getInputType(t) {
    const r = (0, ct.checkForInput)(this.data.inputs, t), n = nl(t, r, this.__CACHE), i = bo(
      n,
      t,
      "input",
      r.redeemScript || ew(r.finalScriptSig),
      r.witnessScript || tw(r.finalScriptWitness)
    ), s = i.type === "raw" ? "" : i.type + "-", o = ol(i.meaningfulScript);
    return s + o;
  }
  inputHasPubkey(t, r) {
    const n = (0, ct.checkForInput)(this.data.inputs, t);
    return Qg(r, n, t, this.__CACHE);
  }
  inputHasHDKey(t, r) {
    const n = (0, ct.checkForInput)(this.data.inputs, t), i = ru(r);
    return !!n.bip32Derivation && n.bip32Derivation.some(i);
  }
  outputHasPubkey(t, r) {
    const n = (0, ct.checkForOutput)(this.data.outputs, t);
    return Zg(r, n, t, this.__CACHE);
  }
  outputHasHDKey(t, r) {
    const n = (0, ct.checkForOutput)(this.data.outputs, t), i = ru(r);
    return !!n.bip32Derivation && n.bip32Derivation.some(i);
  }
  validateSignaturesOfAllInputs(t) {
    return (0, ct.checkForInput)(this.data.inputs, 0), Vn(this.data.inputs.length).map(
      (n) => this.validateSignaturesOfInput(n, t)
    ).reduce((n, i) => i === !0 && n, !0);
  }
  validateSignaturesOfInput(t, r, n) {
    const i = this.data.inputs[t];
    return (0, Ne.isTaprootInput)(i) ? this.validateSignaturesOfTaprootInput(
      t,
      r,
      n
    ) : this._validateSignaturesOfInput(t, r, n);
  }
  _validateSignaturesOfInput(t, r, n) {
    const i = this.data.inputs[t], s = (i || {}).partialSig;
    if (!i || !s || s.length < 1)
      throw new Error("No signatures to validate");
    if (typeof r != "function")
      throw new Error("Need validator function to validate signatures");
    const o = n ? s.filter((d) => d.pubkey.equals(n)) : s;
    if (o.length < 1) throw new Error("No signatures for this pubkey");
    const a = [];
    let l, p, f;
    for (const d of o) {
      const _ = fr.signature.decode(d.signature), { hash: m, script: B } = f !== _.hashType ? Qc(
        t,
        Object.assign({}, i, { sighashType: _.hashType }),
        this.__CACHE,
        !0
      ) : { hash: l, script: p };
      f = _.hashType, l = m, p = B, zc(d.pubkey, B, "verify"), a.push(r(d.pubkey, m, _.signature));
    }
    return a.every((d) => d === !0);
  }
  validateSignaturesOfTaprootInput(t, r, n) {
    const i = this.data.inputs[t], s = (i || {}).tapKeySig, o = (i || {}).tapScriptSig;
    if (!i && !s && !(o && !o.length))
      throw new Error("No signatures to validate");
    if (typeof r != "function")
      throw new Error("Need validator function to validate signatures");
    n = n && (0, Ne.toXOnly)(n);
    const a = n ? Ss(
      t,
      i,
      this.data.inputs,
      n,
      this.__CACHE
    ) : qg(
      t,
      i,
      this.data.inputs,
      this.__CACHE
    );
    if (!a.length) throw new Error("No signatures for this pubkey");
    const l = a.find((f) => !f.leafHash);
    let p = 0;
    if (s && l) {
      if (!r(
        l.pubkey,
        l.hash,
        au(s)
      )) return !1;
      p++;
    }
    if (o)
      for (const f of o) {
        const d = a.find((_) => f.pubkey.equals(_.pubkey));
        if (d) {
          if (!r(
            f.pubkey,
            d.hash,
            au(f.signature)
          )) return !1;
          p++;
        }
      }
    return p > 0;
  }
  signAllInputsHD(t, r = [rt.Transaction.SIGHASH_ALL]) {
    if (!t || !t.publicKey || !t.fingerprint)
      throw new Error("Need HDSigner to sign input");
    const n = [];
    for (const i of Vn(this.data.inputs.length))
      try {
        this.signInputHD(i, t, r), n.push(!0);
      } catch {
        n.push(!1);
      }
    if (n.every((i) => i === !1))
      throw new Error("No inputs were signed");
    return this;
  }
  signAllInputsHDAsync(t, r = [rt.Transaction.SIGHASH_ALL]) {
    return new Promise((n, i) => {
      if (!t || !t.publicKey || !t.fingerprint)
        return i(new Error("Need HDSigner to sign input"));
      const s = [], o = [];
      for (const a of Vn(this.data.inputs.length))
        o.push(
          this.signInputHDAsync(a, t, r).then(
            () => {
              s.push(!0);
            },
            () => {
              s.push(!1);
            }
          )
        );
      return Promise.all(o).then(() => {
        if (s.every((a) => a === !1))
          return i(new Error("No inputs were signed"));
        n();
      });
    });
  }
  signInputHD(t, r, n = [rt.Transaction.SIGHASH_ALL]) {
    if (!r || !r.publicKey || !r.fingerprint)
      throw new Error("Need HDSigner to sign input");
    return uu(t, this.data.inputs, r).forEach((s) => this.signInput(t, s, n)), this;
  }
  signInputHDAsync(t, r, n = [rt.Transaction.SIGHASH_ALL]) {
    return new Promise((i, s) => {
      if (!r || !r.publicKey || !r.fingerprint)
        return s(new Error("Need HDSigner to sign input"));
      const a = uu(t, this.data.inputs, r).map(
        (l) => this.signInputAsync(t, l, n)
      );
      return Promise.all(a).then(() => {
        i();
      }).catch(s);
    });
  }
  signAllInputs(t, r) {
    if (!t || !t.publicKey)
      throw new Error("Need Signer to sign input");
    const n = [];
    for (const i of Vn(this.data.inputs.length))
      try {
        this.signInput(i, t, r), n.push(!0);
      } catch {
        n.push(!1);
      }
    if (n.every((i) => i === !1))
      throw new Error("No inputs were signed");
    return this;
  }
  signAllInputsAsync(t, r) {
    return new Promise((n, i) => {
      if (!t || !t.publicKey)
        return i(new Error("Need Signer to sign input"));
      const s = [], o = [];
      for (const [a] of this.data.inputs.entries())
        o.push(
          this.signInputAsync(a, t, r).then(
            () => {
              s.push(!0);
            },
            () => {
              s.push(!1);
            }
          )
        );
      return Promise.all(o).then(() => {
        if (s.every((a) => a === !1))
          return i(new Error("No inputs were signed"));
        n();
      });
    });
  }
  signInput(t, r, n) {
    if (!r || !r.publicKey)
      throw new Error("Need Signer to sign input");
    const i = (0, ct.checkForInput)(this.data.inputs, t);
    return (0, Ne.isTaprootInput)(i) ? this._signTaprootInput(
      t,
      i,
      r,
      void 0,
      n
    ) : this._signInput(t, r, n);
  }
  signTaprootInput(t, r, n, i) {
    if (!r || !r.publicKey)
      throw new Error("Need Signer to sign input");
    const s = (0, ct.checkForInput)(this.data.inputs, t);
    if ((0, Ne.isTaprootInput)(s))
      return this._signTaprootInput(
        t,
        s,
        r,
        n,
        i
      );
    throw new Error(`Input #${t} is not of type Taproot.`);
  }
  _signInput(t, r, n = [rt.Transaction.SIGHASH_ALL]) {
    const { hash: i, sighashType: s } = su(
      this.data.inputs,
      t,
      r.publicKey,
      this.__CACHE,
      n
    ), o = [
      {
        pubkey: r.publicKey,
        signature: fr.signature.encode(r.sign(i), s)
      }
    ];
    return this.data.updateInput(t, { partialSig: o }), this;
  }
  _signTaprootInput(t, r, n, i, s = [rt.Transaction.SIGHASH_DEFAULT]) {
    const o = this.checkTaprootHashesForSig(
      t,
      r,
      n,
      i,
      s
    ), a = o.filter((p) => !p.leafHash).map(
      (p) => (0, Ne.serializeTaprootSignature)(
        n.signSchnorr(p.hash),
        r.sighashType
      )
    )[0], l = o.filter((p) => !!p.leafHash).map((p) => ({
      pubkey: (0, Ne.toXOnly)(n.publicKey),
      signature: (0, Ne.serializeTaprootSignature)(
        n.signSchnorr(p.hash),
        r.sighashType
      ),
      leafHash: p.leafHash
    }));
    return a && this.data.updateInput(t, { tapKeySig: a }), l.length && this.data.updateInput(t, { tapScriptSig: l }), this;
  }
  signInputAsync(t, r, n) {
    return Promise.resolve().then(() => {
      if (!r || !r.publicKey)
        throw new Error("Need Signer to sign input");
      const i = (0, ct.checkForInput)(this.data.inputs, t);
      return (0, Ne.isTaprootInput)(i) ? this._signTaprootInputAsync(
        t,
        i,
        r,
        void 0,
        n
      ) : this._signInputAsync(t, r, n);
    });
  }
  signTaprootInputAsync(t, r, n, i) {
    return Promise.resolve().then(() => {
      if (!r || !r.publicKey)
        throw new Error("Need Signer to sign input");
      const s = (0, ct.checkForInput)(this.data.inputs, t);
      if ((0, Ne.isTaprootInput)(s))
        return this._signTaprootInputAsync(
          t,
          s,
          r,
          n,
          i
        );
      throw new Error(`Input #${t} is not of type Taproot.`);
    });
  }
  _signInputAsync(t, r, n = [rt.Transaction.SIGHASH_ALL]) {
    const { hash: i, sighashType: s } = su(
      this.data.inputs,
      t,
      r.publicKey,
      this.__CACHE,
      n
    );
    return Promise.resolve(r.sign(i)).then((o) => {
      const a = [
        {
          pubkey: r.publicKey,
          signature: fr.signature.encode(o, s)
        }
      ];
      this.data.updateInput(t, { partialSig: a });
    });
  }
  async _signTaprootInputAsync(t, r, n, i, s = [rt.Transaction.SIGHASH_DEFAULT]) {
    const o = this.checkTaprootHashesForSig(
      t,
      r,
      n,
      i,
      s
    ), a = [], l = o.filter((f) => !f.leafHash)[0];
    if (l) {
      const f = Promise.resolve(
        n.signSchnorr(l.hash)
      ).then((d) => ({
        tapKeySig: (0, Ne.serializeTaprootSignature)(
          d,
          r.sighashType
        )
      }));
      a.push(f);
    }
    const p = o.filter((f) => !!f.leafHash);
    if (p.length) {
      const f = p.map((d) => Promise.resolve(n.signSchnorr(d.hash)).then(
        (_) => ({ tapScriptSig: [
          {
            pubkey: (0, Ne.toXOnly)(n.publicKey),
            signature: (0, Ne.serializeTaprootSignature)(
              _,
              r.sighashType
            ),
            leafHash: d.leafHash
          }
        ] })
      ));
      a.push(...f);
    }
    return Promise.all(a).then((f) => {
      f.forEach((d) => this.data.updateInput(t, d));
    });
  }
  checkTaprootHashesForSig(t, r, n, i, s) {
    if (typeof n.signSchnorr != "function")
      throw new Error(
        `Need Schnorr Signer to sign taproot input #${t}.`
      );
    const o = Ss(
      t,
      r,
      this.data.inputs,
      n.publicKey,
      this.__CACHE,
      i,
      s
    );
    if (!o || !o.length)
      throw new Error(
        `Can not sign for input #${t} with the key ${n.publicKey.toString(
          "hex"
        )}`
      );
    return o;
  }
  toBuffer() {
    return rs(this.__CACHE), this.data.toBuffer();
  }
  toHex() {
    return rs(this.__CACHE), this.data.toHex();
  }
  toBase64() {
    return rs(this.__CACHE), this.data.toBase64();
  }
  updateGlobal(t) {
    return this.data.updateGlobal(t), this;
  }
  updateInput(t, r) {
    return r.witnessScript && Vi(r.witnessScript), (0, Ne.checkTaprootInputFields)(
      this.data.inputs[t],
      r,
      "updateInput"
    ), this.data.updateInput(t, r), r.nonWitnessUtxo && vs(
      this.__CACHE,
      this.data.inputs[t],
      t
    ), this;
  }
  updateOutput(t, r) {
    const n = this.data.outputs[t];
    return (0, Ne.checkTaprootOutputFields)(
      n,
      r,
      "updateOutput"
    ), this.data.updateOutput(t, r), this;
  }
  addUnknownKeyValToGlobal(t) {
    return this.data.addUnknownKeyValToGlobal(t), this;
  }
  addUnknownKeyValToInput(t, r) {
    return this.data.addUnknownKeyValToInput(t, r), this;
  }
  addUnknownKeyValToOutput(t, r) {
    return this.data.addUnknownKeyValToOutput(t, r), this;
  }
  clearFinalizedInput(t) {
    return this.data.clearFinalizedInput(t), this;
  }
}
go.Psbt = Gi;
const Mg = (e) => new qc(e);
class qc {
  constructor(t = H.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
    this.tx = rt.Transaction.fromBuffer(t), Kg(this.tx), Object.defineProperty(this, "tx", {
      enumerable: !1,
      writable: !0
    });
  }
  getInputOutputCounts() {
    return {
      inputCount: this.tx.ins.length,
      outputCount: this.tx.outs.length
    };
  }
  addInput(t) {
    if (t.hash === void 0 || t.index === void 0 || !H.isBuffer(t.hash) && typeof t.hash != "string" || typeof t.index != "number")
      throw new Error("Error adding input.");
    const r = typeof t.hash == "string" ? (0, Wi.reverseBuffer)(H.from(t.hash, "hex")) : t.hash;
    this.tx.addInput(r, t.index, t.sequence);
  }
  addOutput(t) {
    if (t.script === void 0 || t.value === void 0 || !H.isBuffer(t.script) || typeof t.value != "number")
      throw new Error("Error adding output.");
    this.tx.addOutput(t.script, t.value);
  }
  toBuffer() {
    return this.tx.toBuffer();
  }
}
function $g(e, t, r) {
  switch (r) {
    case "pubkey":
    case "pubkeyhash":
    case "witnesspubkeyhash":
      return tu(1, e.partialSig);
    case "multisig":
      const n = Nt.p2ms({ output: t });
      return tu(n.m, e.partialSig, n.pubkeys);
    default:
      return !1;
  }
}
function rs(e) {
  if (e.__UNSAFE_SIGN_NONSEGWIT !== !1)
    throw new Error("Not BIP174 compliant, can not export");
}
function tu(e, t, r) {
  if (!t) return !1;
  let n;
  if (r ? n = r.map((i) => {
    const s = rw(i);
    return t.find((o) => o.pubkey.equals(s));
  }).filter((i) => !!i) : n = t, n.length > e) throw new Error("Too many signatures");
  return n.length === e;
}
function Xc(e) {
  return !!e.finalScriptSig || !!e.finalScriptWitness;
}
function ru(e) {
  return (t) => !(!t.masterFingerprint.equals(e.fingerprint) || !e.derivePath(t.path).publicKey.equals(t.pubkey));
}
function Pi(e) {
  if (typeof e != "number" || e !== Math.floor(e) || e > 4294967295 || e < 0)
    throw new Error("Invalid 32 bit integer");
}
function Dg(e, t, r) {
  const n = t.__FEE_RATE || e.getFeeRate(), i = t.__EXTRACTED_TX.virtualSize(), s = n * i;
  if (n >= r.maximumFeeRate)
    throw new Error(
      `Warning: You are paying around ${(s / 1e8).toFixed(8)} in fees, which is ${n} satoshi per byte for a transaction with a VSize of ${i} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`
    );
}
function Gn(e, t) {
  e.forEach((r) => {
    if ((0, Ne.isTaprootInput)(r) ? (0, Ne.checkTaprootInputForSigs)(r, t) : (0, He.checkInputForSig)(r, t))
      throw new Error("Can not modify transaction, signatures exist.");
  });
}
function jg(e) {
  if (!e.sighashType || !e.partialSig) return;
  const { partialSig: t, sighashType: r } = e;
  t.forEach((n) => {
    const { hashType: i } = fr.signature.decode(n.signature);
    if (r !== i)
      throw new Error("Signature sighash does not match input sighash type");
  });
}
function zc(e, t, r) {
  if (!(0, He.pubkeyInScript)(e, t))
    throw new Error(
      `Can not ${r} for this input with the key ${e.toString("hex")}`
    );
}
function Kg(e) {
  if (!e.ins.every(
    (r) => r.script && r.script.length === 0 && r.witness && r.witness.length === 0
  ))
    throw new Error("Format Error: Transaction ScriptSigs are not empty");
}
function Wg(e, t) {
  e.ins.forEach((r) => {
    Yc(t, r);
  });
}
function Yc(e, t) {
  const r = (0, Wi.reverseBuffer)(H.from(t.hash)).toString("hex") + ":" + t.index;
  if (e.__TX_IN_CACHE[r]) throw new Error("Duplicate input detected.");
  e.__TX_IN_CACHE[r] = 1;
}
function Jc(e, t) {
  return (r, n, i, s) => {
    const o = e({
      redeem: { output: i }
    }).output;
    if (!n.equals(o))
      throw new Error(
        `${t} for ${s} #${r} doesn't match the scriptPubKey in the prevout`
      );
  };
}
const nu = Jc(Nt.p2sh, "Redeem script"), iu = Jc(
  Nt.p2wsh,
  "Witness script"
);
function ou(e, t, r, n) {
  if (!r.every(Xc))
    throw new Error(`PSBT must be finalized to calculate ${t}`);
  if (e === "__FEE_RATE" && n.__FEE_RATE) return n.__FEE_RATE;
  if (e === "__FEE" && n.__FEE) return n.__FEE;
  let i, s = !0;
  if (n.__EXTRACTED_TX ? (i = n.__EXTRACTED_TX, s = !1) : i = n.__TX.clone(), rl(r, i, n, s), e === "__FEE_RATE") return n.__FEE_RATE;
  if (e === "__FEE") return n.__FEE;
}
function Gg(e, t, r, n, i, s) {
  const o = ol(r);
  if (!$g(t, r, o))
    throw new Error(`Can not finalize input #${e}`);
  return Vg(
    r,
    o,
    t.partialSig,
    n,
    i,
    s
  );
}
function Vg(e, t, r, n, i, s) {
  let o, a;
  const l = Xg(e, t, r), p = s ? Nt.p2wsh({ redeem: l }) : null, f = i ? Nt.p2sh({ redeem: p || l }) : null;
  return n ? (p ? a = (0, He.witnessStackToScriptWitness)(
    p.witness
  ) : a = (0, He.witnessStackToScriptWitness)(
    l.witness
  ), f && (o = f.input)) : f ? o = f.input : o = l.input, {
    finalScriptSig: o,
    finalScriptWitness: a
  };
}
function su(e, t, r, n, i) {
  const s = (0, ct.checkForInput)(e, t), { hash: o, sighashType: a, script: l } = Qc(
    t,
    s,
    n,
    !1,
    i
  );
  return zc(r, l, "sign"), {
    hash: o,
    sighashType: a
  };
}
function Qc(e, t, r, n, i) {
  const s = r.__TX, o = t.sighashType || rt.Transaction.SIGHASH_ALL;
  el(o, i);
  let a, l;
  if (t.nonWitnessUtxo) {
    const d = Eo(
      r,
      t,
      e
    ), _ = s.ins[e].hash, m = d.getHash();
    if (!_.equals(m))
      throw new Error(
        `Non-witness UTXO hash for input #${e} doesn't match the hash specified in the prevout`
      );
    const B = s.ins[e].index;
    l = d.outs[B];
  } else if (t.witnessUtxo)
    l = t.witnessUtxo;
  else
    throw new Error("Need a Utxo input item for signing");
  const { meaningfulScript: p, type: f } = bo(
    l.script,
    e,
    "input",
    t.redeemScript,
    t.witnessScript
  );
  if (["p2sh-p2wsh", "p2wsh"].indexOf(f) >= 0)
    a = s.hashForWitnessV0(
      e,
      p,
      l.value,
      o
    );
  else if ((0, He.isP2WPKH)(p)) {
    const d = Nt.p2pkh({
      hash: p.slice(2)
    }).output;
    a = s.hashForWitnessV0(
      e,
      d,
      l.value,
      o
    );
  } else {
    if (t.nonWitnessUtxo === void 0 && r.__UNSAFE_SIGN_NONSEGWIT === !1)
      throw new Error(
        `Input #${e} has witnessUtxo but non-segwit script: ${p.toString("hex")}`
      );
    !n && r.__UNSAFE_SIGN_NONSEGWIT !== !1 && console.warn(
      `Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as Psbt's predecessor (TransactionBuilder - now removed) when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.
*********************
PROCEED WITH CAUTION!
*********************`
    ), a = s.hashForSignature(
      e,
      p,
      o
    );
  }
  return {
    script: p,
    sighashType: o,
    hash: a
  };
}
function qg(e, t, r, n) {
  const i = [];
  if (t.tapInternalKey) {
    const o = Zc(e, t, n);
    o && i.push(o);
  }
  if (t.tapScriptSig) {
    const o = t.tapScriptSig.map((a) => a.pubkey);
    i.push(...o);
  }
  return i.map(
    (o) => Ss(e, t, r, o, n)
  ).flat();
}
function Zc(e, t, r) {
  const { script: n } = ra(e, t, r);
  return (0, He.isP2TR)(n) ? n.subarray(2, 34) : null;
}
function au(e) {
  return e.length === 64 ? e : e.subarray(0, 64);
}
function Ss(e, t, r, n, i, s, o) {
  const a = i.__TX, l = t.sighashType || rt.Transaction.SIGHASH_DEFAULT;
  el(l, o);
  const p = r.map(
    (B, I) => ra(I, B, i)
  ), f = p.map((B) => B.script), d = p.map((B) => B.value), _ = [];
  if (t.tapInternalKey && !s) {
    const B = Zc(e, t, i) || H.from([]);
    if ((0, Ne.toXOnly)(n).equals(B)) {
      const I = a.hashForWitnessV1(
        e,
        f,
        d,
        l
      );
      _.push({ pubkey: n, hash: I });
    }
  }
  const m = (t.tapLeafScript || []).filter((B) => (0, He.pubkeyInScript)(n, B.script)).map((B) => {
    const I = (0, Lg.tapleafHash)({
      output: B.script,
      version: B.leafVersion
    });
    return Object.assign({ hash: I }, B);
  }).filter(
    (B) => !s || s.equals(B.hash)
  ).map((B) => {
    const I = a.hashForWitnessV1(
      e,
      f,
      d,
      l,
      B.hash
    );
    return {
      pubkey: n,
      hash: I,
      leafHash: B.hash
    };
  });
  return _.concat(m);
}
function el(e, t) {
  if (t && t.indexOf(e) < 0) {
    const r = Jg(e);
    throw new Error(
      `Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: ${r}`
    );
  }
}
function Xg(e, t, r) {
  let n;
  switch (t) {
    case "multisig":
      const i = Yg(e, r);
      n = Nt.p2ms({
        output: e,
        signatures: i
      });
      break;
    case "pubkey":
      n = Nt.p2pk({
        output: e,
        signature: r[0].signature
      });
      break;
    case "pubkeyhash":
      n = Nt.p2pkh({
        output: e,
        pubkey: r[0].pubkey,
        signature: r[0].signature
      });
      break;
    case "witnesspubkeyhash":
      n = Nt.p2wpkh({
        output: e,
        pubkey: r[0].pubkey,
        signature: r[0].signature
      });
      break;
  }
  return n;
}
function zg(e, t, r) {
  const n = r.__TX, i = {
    script: null,
    isSegwit: !1,
    isP2SH: !1,
    isP2WSH: !1
  };
  if (i.isP2SH = !!t.redeemScript, i.isP2WSH = !!t.witnessScript, t.witnessScript)
    i.script = t.witnessScript;
  else if (t.redeemScript)
    i.script = t.redeemScript;
  else if (t.nonWitnessUtxo) {
    const s = Eo(
      r,
      t,
      e
    ), o = n.ins[e].index;
    i.script = s.outs[o].script;
  } else t.witnessUtxo && (i.script = t.witnessUtxo.script);
  return (t.witnessScript || (0, He.isP2WPKH)(i.script)) && (i.isSegwit = !0), i;
}
function uu(e, t, r) {
  const n = (0, ct.checkForInput)(t, e);
  if (!n.bip32Derivation || n.bip32Derivation.length === 0)
    throw new Error("Need bip32Derivation to sign with HD");
  const i = n.bip32Derivation.map((o) => {
    if (o.masterFingerprint.equals(r.fingerprint))
      return o;
  }).filter((o) => !!o);
  if (i.length === 0)
    throw new Error(
      "Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint"
    );
  return i.map((o) => {
    const a = r.derivePath(o.path);
    if (!o.pubkey.equals(a.publicKey))
      throw new Error("pubkey did not match bip32Derivation");
    return a;
  });
}
function Yg(e, t) {
  return Nt.p2ms({ output: e }).pubkeys.map((n) => (t.filter((i) => i.pubkey.equals(n))[0] || {}).signature).filter((n) => !!n);
}
function tl(e) {
  let t = 0;
  function r(o) {
    return t += o, e.slice(t - o, t);
  }
  function n() {
    const o = Za.decode(e, t);
    return t += Za.decode.bytes, o;
  }
  function i() {
    return r(n());
  }
  function s() {
    const o = n(), a = [];
    for (let l = 0; l < o; l++) a.push(i());
    return a;
  }
  return s();
}
function Jg(e) {
  let t = e & rt.Transaction.SIGHASH_ANYONECANPAY ? "SIGHASH_ANYONECANPAY | " : "";
  switch (e & 31) {
    case rt.Transaction.SIGHASH_ALL:
      t += "SIGHASH_ALL";
      break;
    case rt.Transaction.SIGHASH_SINGLE:
      t += "SIGHASH_SINGLE";
      break;
    case rt.Transaction.SIGHASH_NONE:
      t += "SIGHASH_NONE";
      break;
  }
  return t;
}
function vs(e, t, r) {
  e.__NON_WITNESS_UTXO_BUF_CACHE[r] = t.nonWitnessUtxo;
  const n = rt.Transaction.fromBuffer(t.nonWitnessUtxo);
  e.__NON_WITNESS_UTXO_TX_CACHE[r] = n;
  const i = e, s = r;
  delete t.nonWitnessUtxo, Object.defineProperty(t, "nonWitnessUtxo", {
    enumerable: !0,
    get() {
      const o = i.__NON_WITNESS_UTXO_BUF_CACHE[s], a = i.__NON_WITNESS_UTXO_TX_CACHE[s];
      if (o !== void 0)
        return o;
      {
        const l = a.toBuffer();
        return i.__NON_WITNESS_UTXO_BUF_CACHE[s] = l, l;
      }
    },
    set(o) {
      i.__NON_WITNESS_UTXO_BUF_CACHE[s] = o;
    }
  });
}
function rl(e, t, r, n) {
  let i = 0;
  e.forEach((l, p) => {
    if (n && l.finalScriptSig && (t.ins[p].script = l.finalScriptSig), n && l.finalScriptWitness && (t.ins[p].witness = tl(
      l.finalScriptWitness
    )), l.witnessUtxo)
      i += l.witnessUtxo.value;
    else if (l.nonWitnessUtxo) {
      const f = Eo(r, l, p), d = t.ins[p].index, _ = f.outs[d];
      i += _.value;
    }
  });
  const s = t.outs.reduce((l, p) => l + p.value, 0), o = i - s;
  if (o < 0)
    throw new Error("Outputs are spending more than Inputs");
  const a = t.virtualSize();
  r.__FEE = o, r.__EXTRACTED_TX = t, r.__FEE_RATE = Math.floor(o / a);
}
function Eo(e, t, r) {
  const n = e.__NON_WITNESS_UTXO_TX_CACHE;
  return n[r] || vs(e, t, r), n[r];
}
function nl(e, t, r) {
  const { script: n } = ra(e, t, r);
  return n;
}
function ra(e, t, r) {
  if (t.witnessUtxo !== void 0)
    return {
      script: t.witnessUtxo.script,
      value: t.witnessUtxo.value
    };
  if (t.nonWitnessUtxo !== void 0) {
    const i = Eo(
      r,
      t,
      e
    ).outs[r.__TX.ins[e].index];
    return { script: i.script, value: i.value };
  } else
    throw new Error("Can't find pubkey in input without Utxo data");
}
function Qg(e, t, r, n) {
  const i = nl(r, t, n), { meaningfulScript: s } = bo(
    i,
    r,
    "input",
    t.redeemScript,
    t.witnessScript
  );
  return (0, He.pubkeyInScript)(e, s);
}
function Zg(e, t, r, n) {
  const i = n.__TX.outs[r].script, { meaningfulScript: s } = bo(
    i,
    r,
    "output",
    t.redeemScript,
    t.witnessScript
  );
  return (0, He.pubkeyInScript)(e, s);
}
function ew(e) {
  if (!e) return;
  const t = fr.decompile(e);
  if (!t) return;
  const r = t[t.length - 1];
  if (!(!H.isBuffer(r) || il(r) || nw(r) || !fr.decompile(r)))
    return r;
}
function tw(e) {
  if (!e) return;
  const t = tl(e), r = t[t.length - 1];
  if (!(il(r) || !fr.decompile(r)))
    return r;
}
function rw(e) {
  if (e.length === 65) {
    const t = e[64] & 1, r = e.slice(0, 33);
    return r[0] = 2 | t, r;
  }
  return e.slice();
}
function il(e) {
  return e.length === 33 && fr.isCanonicalPubKey(e);
}
function nw(e) {
  return fr.isCanonicalScriptSignature(e);
}
function bo(e, t, r, n, i) {
  const s = (0, He.isP2SHScript)(e), o = s && n && (0, He.isP2WSHScript)(n), a = (0, He.isP2WSHScript)(e);
  if (s && n === void 0)
    throw new Error("scriptPubkey is P2SH but redeemScript missing");
  if ((a || o) && i === void 0)
    throw new Error(
      "scriptPubkey or redeemScript is P2WSH but witnessScript missing"
    );
  let l;
  return o ? (l = i, nu(t, e, n, r), iu(t, n, i, r), Vi(l)) : a ? (l = i, iu(t, e, i, r), Vi(l)) : s ? (l = n, nu(t, e, n, r)) : l = e, {
    meaningfulScript: l,
    type: o ? "p2sh-p2wsh" : s ? "p2sh" : a ? "p2wsh" : "raw"
  };
}
function Vi(e) {
  if ((0, He.isP2WPKH)(e) || (0, He.isP2SHScript)(e))
    throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
}
function ol(e) {
  return (0, He.isP2WPKH)(e) ? "witnesspubkeyhash" : (0, He.isP2PKH)(e) ? "pubkeyhash" : (0, He.isP2MS)(e) ? "multisig" : (0, He.isP2PK)(e) ? "pubkey" : "nonstandard";
}
function Vn(e) {
  return [...Array(e).keys()];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initEccLib = e.Transaction = e.opcodes = e.Psbt = e.Block = e.script = e.payments = e.networks = e.crypto = e.address = void 0;
  const t = js();
  e.address = t;
  const r = Jt;
  e.crypto = r;
  const n = Xe;
  e.networks = n;
  const i = ci();
  e.payments = i;
  const s = ht();
  e.script = s;
  var o = ho;
  Object.defineProperty(e, "Block", {
    enumerable: !0,
    get: function() {
      return o.Block;
    }
  });
  var a = go;
  Object.defineProperty(e, "Psbt", {
    enumerable: !0,
    get: function() {
      return a.Psbt;
    }
  });
  var l = Cr;
  Object.defineProperty(e, "opcodes", {
    enumerable: !0,
    get: function() {
      return l.OPS;
    }
  });
  var p = Ur;
  Object.defineProperty(e, "Transaction", {
    enumerable: !0,
    get: function() {
      return p.Transaction;
    }
  });
  var f = Fr;
  Object.defineProperty(e, "initEccLib", {
    enumerable: !0,
    get: function() {
      return f.initEccLib;
    }
  });
})(Vu);
function yw() {
  const { network: e, publicKey: t, format: r, wallet: n } = Yt(), [i, s] = Se(null), [o, a] = Se(!1);
  return { sign: nt(
    async (p, f, d) => {
      a(!0);
      try {
        if (s(null), !r || !t || !n)
          throw new Error("No wallet is connected");
        const _ = Vu.Psbt.fromBase64(f), m = await xs({
          address: p,
          wallet: n,
          network: e,
          psbt: _,
          options: d
        });
        return a(!1), m;
      } catch (_) {
        throw s(_.message), a(!1), _;
      }
    },
    [r, e, t, n]
  ), error: i, loading: o };
}
async function iw({
  message: e,
  wallet: t
}) {
  if (t === Bt.UNISAT) {
    const { base64: r } = await Ol(e, "bip322-simple");
    return r;
  }
  throw new Error("Invalid wallet selected");
}
function mw() {
  const {
    network: e,
    wallet: t,
    publicKey: r,
    format: n,
    address: i
  } = Yt(), [s, o] = Se(null), [a, l] = Se(!1);
  return { signMsg: nt(
    async (f, d) => {
      l(!0);
      try {
        if (o(null), !n || !r || !t)
          throw new Error("No wallet is connected");
        if (i.ordinals !== f && i.payments !== f)
          throw new Error("Address supplied is not connected address");
        const _ = await iw({
          address: f,
          wallet: t,
          message: d,
          network: e,
          format: i.ordinals === f ? n.ordinals : n.payments
        });
        return l(!1), _;
      } catch (_) {
        throw o(_.message), l(!1), _;
      }
    },
    [n, e, r, t, i]
  ), error: s, isLoading: a };
}
export {
  kn as Chain,
  Ai as Network,
  fw as OrdConnectKit,
  cw as OrdConnectProvider,
  v0 as SelectWalletModal,
  Bt as Wallet,
  hw as useBalance,
  Yt as useOrdConnect,
  dw as useSend,
  pw as useSendV2,
  yw as useSign,
  mw as useSignMessage
};
