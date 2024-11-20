(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";.ord-connect-wallet-button{color:#000;background-color:#fff;font-weight:700;font-size:14px;line-height:20px;border-radius:40px;padding:10px 16px;border:0px;cursor:pointer}.ord-connect-wallet-button:disabled{background-color:#888;cursor:not-allowed}.ord-connect-wallet-button span:before{content:"Connect"}@media screen and (min-width: 768px){.ord-connect-wallet-button{padding:10px 24px}.ord-connect-wallet-button span:before{content:"Connect wallet"}}.ord-connect-wallet-button:enabled:hover{background-color:#f2f2f2}.ord-connect-wallet-button:enabled:active{opacity:.7}.ord-wallet-connected-container{position:relative;display:inline-block}.ord-wallet-connected-button{border-radius:52px;border:1px solid #8c8c8c;background-color:transparent;padding:8px 12px 8px 8px;display:flex;align-items:center;cursor:pointer}.ord-wallet-connected-button .address-container{display:none}@media screen and (min-width: 768px){.ord-wallet-connected-button .address-container{display:block;margin-left:8px}}.ord-wallet-connected-button .address{color:#fff;font-size:14px;font-weight:700;line-height:20px;margin:0}.ord-wallet-connected-button .network-container{display:flex;align-items:center}.ord-wallet-connected-button .status-indicator{width:8px;height:8px;background:#00ad1d;border-radius:999px;margin-right:8px}.ord-wallet-connected-button .network{color:#ffffff80;margin:0;font-size:12px;font-weight:600;line-height:16px}.ord-wallet-connected-button .wallet-profile-icon{width:28px;height:28px;border-radius:999px;background-color:pink;margin-right:8px}.ord-wallet-connected-button .dropdown-button{transition:transform .3s ease;margin-left:16px}.ord-wallet-connected-button .expand-dropdown-button{width:20px;transform:rotate(0)}.ord-wallet-connected-button .close-dropdown-button{transform:rotate(-180deg)}.ord-wallet-connection-dropdown{background:#121212;border-radius:15px;border:.5px solid rgba(255,255,255,.5);width:256px;position:absolute;top:54px;right:0}.ord-wallet-connection-dropdown .dropdown-button{display:flex;align-items:center;background:transparent;border:0px;cursor:pointer;width:100%;justify-content:space-between}.ord-wallet-connection-dropdown .dropdown-button:hover{background:#ffffff1a}.ord-wallet-connection-dropdown .dropdown-button:hover:first-child{border-top-left-radius:15px;border-top-right-radius:15px}.ord-wallet-connection-dropdown .dropdown-button:hover:last-child{border-bottom-left-radius:15px;border-bottom-right-radius:15px}.ord-wallet-connection-dropdown .dropdown-button:active{background:#ffffff1a;opacity:.7}.ord-wallet-connection-dropdown .dropdown-button:first-child{padding:26px 16px 18px}.ord-wallet-connection-dropdown .dropdown-button:not(:first-child):not(:last-child){padding:9px 16px}.ord-wallet-connection-dropdown .dropdown-button:last-child{padding:18px 16px 26px}.ord-wallet-connection-dropdown .label{color:#fff;font-size:14px;font-weight:600;flex:1 1 0%;text-align:left}.ord-wallet-connection-dropdown .value{color:#a6a6a6}.ord-wallet-connection-dropdown .change-wallet-label{color:#ffffffb3;font-size:14px;font-weight:700;flex:1 1 0%;text-align:right}.ord-wallet-connection-dropdown .profile-item-container{width:100%;display:flex;flex-direction:column}.ord-wallet-connection-dropdown .profile-item-inner-container{display:flex;justify-content:space-between}.ord-wallet-connection-dropdown .offers{font-size:10px;font-weight:700;line-height:12px;letter-spacing:.08em;color:#fff;padding:4px 12px;border-radius:16px;background:#ffffff1a}.ord-wallet-connection-dropdown .horizontal-separator{margin:6px 16px;border:0px;border-top:.5px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal{position:relative;z-index:10}.ord-connect-wallet-modal .backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000080;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.ord-connect-wallet-modal .outer-container{position:fixed;top:0;left:0;overflow-y:auto;width:100%;height:100%}.ord-connect-wallet-modal .inner-container{display:flex;align-items:center;justify-content:center;text-align:center;height:100%}.ord-connect-wallet-modal .panel{width:100%;background-color:#121212;overflow:hidden;text-align:left;height:100%}.ord-connect-wallet-modal .panel-title-container{display:flex;justify-content:space-between;padding:32px 24px 0;align-items:center}.ord-connect-wallet-modal .panel-title{color:#fff;font-size:24px;font-style:normal;font-weight:700;line-height:32px;margin:0}.ord-connect-wallet-modal .unsupported-browser-message{color:#fff}.ord-connect-wallet-modal .close-button{display:inline-flex;background:transparent;border:0px;cursor:pointer}.ord-connect-wallet-modal .panel-content-container{margin:32px 24px 0}.ord-connect-wallet-modal .panel-content-inner-container{border-radius:20px;border:1px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal .wallet-option-button{display:flex;align-items:center;background:transparent;border:0px;color:#fff;font-size:16px;font-weight:600;line-height:20px;width:100%;cursor:pointer}.ord-connect-wallet-modal .wallet-option-button:disabled .chevron-btn{opacity:.3}.waiting-cursor{cursor:wait!important}.wallet-identifier-container{position:relative;display:inline-block}.wallet-identifier-container img{position:absolute;bottom:4px;right:0;width:12px;border-radius:50%;background-color:#000;object-fit:cover}.ord-connect-wallet-modal .option-wrapper{display:flex;align-items:center;justify-content:space-between;padding:16px 4px;width:100%}.ord-connect-wallet-modal .wallet-option-button{padding:8px 16px}.ord-connect-wallet-modal .wallet-option-button:hover{background:#ffffff1a}.ord-connect-wallet-modal .wallet-option-button:active{background:#ffffff1a;opacity:.7}.ord-connect-wallet-modal .wallet-option-button:first-child{padding:16px 16px 8px;border:0px;margin-bottom:0;border-radius:20px 20px 0 0}.ord-connect-wallet-modal .wallet-option-button:last-child{padding:8px 16px 16px;border:0px;margin-bottom:0;border-radius:0 0 20px 20px}.ord-connect-wallet-modal .wallet-option-button:only-child{padding:8px 16px;border:0px;margin-bottom:0;border-radius:20px}.ord-connect-wallet-modal .wallet-icon{width:32px;height:32px}.ord-connect-wallet-modal .wallet-option{flex-grow:1;margin-left:12px;text-align:left}.ord-connect-wallet-modal .wallet-option-connected-address{display:flex;padding:4px 8px;align-items:center;margin-left:4px;margin-right:8px;text-align:left;background-color:#00000080;border-radius:20px;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}.ord-connect-wallet-modal .wallet-option-connected-address .label{margin-left:4px;font-size:12px;font-weight:400;color:#ffffffb3}.ord-connect-wallet-modal .wallet-option-label{font-size:16px;font-weight:600;line-height:20px;margin:0}.ord-connect-wallet-modal .wallet-option-subtitle{font-size:12px;font-weight:400;line-height:16px;color:#8c8c8c;margin:0}.ord-connect-wallet-modal .horizontal-separator{margin:2px 16px;border:0px;border-top:.5px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal .error-message{margin:16px 0 0;color:#e54545;font-size:14px;line-height:20px}.ord-connect-wallet-modal .preferred-label{padding:4px 12px;color:#000000b2;background-color:#ffbf18;font-size:12px;line-height:16px;font-weight:400;border-radius:20px;margin-left:4px;margin-right:8px}@media screen and (min-width: 768px){.ord-connect-wallet-modal .outer-container{top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:auto;border-radius:20px}.ord-connect-wallet-modal .panel{border:1px solid rgba(51,51,51,.5);border-radius:20px}.ord-connect-wallet-modal .panel-title-container{padding:24px 32px 0;border-bottom:0px}.ord-connect-wallet-modal .unsupported-browser-message{font-size:16px;padding-left:24px}.ord-connect-wallet-modal .panel-title{font-size:20px;font-style:normal;font-weight:600;line-height:28px;letter-spacing:.2px}.ord-connect-wallet-modal .panel-content-container{margin:48px 32px 32px}.ord-connect-wallet-modal .wallet-option{margin-left:16px}}@media screen and (min-width: 1080px){.ord-connect-wallet-modal .panel-content-container{margin:48px 32px 32px}.ord-connect-wallet-modal .option-wrapper{padding:16px}.ord-connect-wallet-modal .wallet-option-button{font-size:18px;font-weight:600;line-height:24px}.ord-connect-wallet-modal .wallet-option-button:first-child{padding:16px 16px 8px;border:0px;margin-bottom:0;border-radius:20px 20px 0 0}.ord-connect-wallet-modal .wallet-icon{width:40px;height:40px}.ord-connect-wallet-modal .wallet-option-label{font-size:18px;font-weight:600;line-height:24px}.ord-connect-wallet-modal .wallet-option-connected-address{margin-left:16px;margin-right:16px}.ord-connect-wallet-modal .wallet-option-connected-address .label{font-size:16px}}.ord-connect-font *{font-family:Space Grotesk,sans-serif}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.opacity-0{opacity:0}.opacity-100{opacity:1}.duration-300{transition-duration:.3s}.duration-200{transition-duration:.2s}.scale-95{transform:scale(.95)}.scale-100{transform:scale(1)}')),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import * as Y from "react";
import Q, { useState as ue, useEffect as Pe, useCallback as ve, createContext as rt, useMemo as we, useContext as Ne, useRef as oe, useLayoutEffect as bc, forwardRef as Td, Fragment as ze, isValidElement as _d, cloneElement as Id, createElement as xd, useId as on, useReducer as Sc, useSyncExternalStore as Od, createRef as Pd } from "react";
import * as wo from "react-dom";
import { createPortal as Ad, flushSync as _i } from "react-dom";
import { BrowserWalletNotInstalledError as kd, getAddressesFromPublicKey as Cd, ADDRESS_FORMAT_TO_TYPE as Fd, JsonRpcDatasource as Tc, PSBTBuilder as Ba } from "@ordzaar/ordit-sdk";
import { getAddresses as Nd, signPsbt as Rd, signMessage as Bd } from "@ordzaar/ordit-sdk/unisat";
function Ld(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var La = { exports: {} }, Ue = La.exports = {}, Jt, Qt;
function zs() {
  throw new Error("setTimeout has not been defined");
}
function Ys() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Jt = setTimeout : Jt = zs;
  } catch {
    Jt = zs;
  }
  try {
    typeof clearTimeout == "function" ? Qt = clearTimeout : Qt = Ys;
  } catch {
    Qt = Ys;
  }
})();
function Ua(e) {
  if (Jt === setTimeout)
    return setTimeout(e, 0);
  if ((Jt === zs || !Jt) && setTimeout)
    return Jt = setTimeout, setTimeout(e, 0);
  try {
    return Jt(e, 0);
  } catch {
    try {
      return Jt.call(null, e, 0);
    } catch {
      return Jt.call(this, e, 0);
    }
  }
}
function Ud(e) {
  if (Qt === clearTimeout)
    return clearTimeout(e);
  if ((Qt === Ys || !Qt) && clearTimeout)
    return Qt = clearTimeout, clearTimeout(e);
  try {
    return Qt(e);
  } catch {
    try {
      return Qt.call(null, e);
    } catch {
      return Qt.call(this, e);
    }
  }
}
var yn = [], Dr = !1, tr, uo = -1;
function $d() {
  !Dr || !tr || (Dr = !1, tr.length ? yn = tr.concat(yn) : uo = -1, yn.length && $a());
}
function $a() {
  if (!Dr) {
    var e = Ua($d);
    Dr = !0;
    for (var t = yn.length; t; ) {
      for (tr = yn, yn = []; ++uo < t; )
        tr && tr[uo].run();
      uo = -1, t = yn.length;
    }
    tr = null, Dr = !1, Ud(e);
  }
}
Ue.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      t[n - 1] = arguments[n];
  yn.push(new Ha(e, t)), yn.length === 1 && !Dr && Ua($a);
};
function Ha(e, t) {
  this.fun = e, this.array = t;
}
Ha.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Ue.title = "browser";
Ue.browser = !0;
Ue.env = {};
Ue.argv = [];
Ue.version = "";
Ue.versions = {};
function In() {
}
Ue.on = In;
Ue.addListener = In;
Ue.once = In;
Ue.off = In;
Ue.removeListener = In;
Ue.removeAllListeners = In;
Ue.emit = In;
Ue.prependListener = In;
Ue.prependOnceListener = In;
Ue.listeners = function(e) {
  return [];
};
Ue.binding = function(e) {
  throw new Error("process.binding is not supported");
};
Ue.cwd = function() {
  return "/";
};
Ue.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
Ue.umask = function() {
  return 0;
};
var Hd = La.exports;
const En = /* @__PURE__ */ Ld(Hd);
var Md = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function jd(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Js = { exports: {} }, ui = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yu;
function Wd() {
  if (yu) return ui;
  yu = 1;
  var e = Q, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, d) {
    var a, g = {}, m = null, h = null;
    d !== void 0 && (m = "" + d), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (h = u.ref);
    for (a in u) r.call(u, a) && !o.hasOwnProperty(a) && (g[a] = u[a]);
    if (c && c.defaultProps) for (a in u = c.defaultProps, u) g[a] === void 0 && (g[a] = u[a]);
    return { $$typeof: t, type: c, key: m, ref: h, props: g, _owner: i.current };
  }
  return ui.Fragment = n, ui.jsx = s, ui.jsxs = s, ui;
}
var ai = {}, Eu;
function Kd() {
  return Eu || (Eu = 1, En.env.NODE_ENV !== "production" && function() {
    var e = Q, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), a = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), S = Symbol.iterator, _ = "@@iterator";
    function A(R) {
      if (R === null || typeof R != "object")
        return null;
      var V = S && R[S] || R[_];
      return typeof V == "function" ? V : null;
    }
    var L = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(R) {
      {
        for (var V = arguments.length, X = new Array(V > 1 ? V - 1 : 0), ee = 1; ee < V; ee++)
          X[ee - 1] = arguments[ee];
        I("error", R, X);
      }
    }
    function I(R, V, X) {
      {
        var ee = L.ReactDebugCurrentFrame, me = ee.getStackAddendum();
        me !== "" && (V += "%s", X = X.concat([me]));
        var Se = X.map(function(he) {
          return String(he);
        });
        Se.unshift("Warning: " + V), Function.prototype.apply.call(console[R], console, Se);
      }
    }
    var O = !1, H = !1, B = !1, W = !1, w = !1, p;
    p = Symbol.for("react.module.reference");
    function b(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === r || R === o || w || R === i || R === d || R === a || W || R === h || O || H || B || typeof R == "object" && R !== null && (R.$$typeof === m || R.$$typeof === g || R.$$typeof === s || R.$$typeof === c || R.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === p || R.getModuleId !== void 0));
    }
    function k(R, V, X) {
      var ee = R.displayName;
      if (ee)
        return ee;
      var me = V.displayName || V.name || "";
      return me !== "" ? X + "(" + me + ")" : X;
    }
    function E(R) {
      return R.displayName || "Context";
    }
    function T(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case a:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case c:
            var V = R;
            return E(V) + ".Consumer";
          case s:
            var X = R;
            return E(X._context) + ".Provider";
          case u:
            return k(R, R.render, "ForwardRef");
          case g:
            var ee = R.displayName || null;
            return ee !== null ? ee : T(R.type) || "Memo";
          case m: {
            var me = R, Se = me._payload, he = me._init;
            try {
              return T(he(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, P = 0, C, U, N, D, G, q, Z;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function ie() {
      {
        if (P === 0) {
          C = console.log, U = console.info, N = console.warn, D = console.error, G = console.group, q = console.groupCollapsed, Z = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        P++;
      }
    }
    function J() {
      {
        if (P--, P === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, R, {
              value: C
            }),
            info: F({}, R, {
              value: U
            }),
            warn: F({}, R, {
              value: N
            }),
            error: F({}, R, {
              value: D
            }),
            group: F({}, R, {
              value: G
            }),
            groupCollapsed: F({}, R, {
              value: q
            }),
            groupEnd: F({}, R, {
              value: Z
            })
          });
        }
        P < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = L.ReactCurrentDispatcher, be;
    function Qe(R, V, X) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (me) {
            var ee = me.stack.trim().match(/\n( *(at )?)/);
            be = ee && ee[1] || "";
          }
        return `
` + be + R;
      }
    }
    var ot = !1, Ut;
    {
      var je = typeof WeakMap == "function" ? WeakMap : Map;
      Ut = new je();
    }
    function It(R, V) {
      if (!R || ot)
        return "";
      {
        var X = Ut.get(R);
        if (X !== void 0)
          return X;
      }
      var ee;
      ot = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Se;
      Se = le.current, le.current = null, ie();
      try {
        if (V) {
          var he = function() {
            throw Error();
          };
          if (Object.defineProperty(he.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(he, []);
            } catch (Et) {
              ee = Et;
            }
            Reflect.construct(R, [], he);
          } else {
            try {
              he.call();
            } catch (Et) {
              ee = Et;
            }
            R.call(he.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            ee = Et;
          }
          R();
        }
      } catch (Et) {
        if (Et && ee && typeof Et.stack == "string") {
          for (var fe = Et.stack.split(`
`), lt = ee.stack.split(`
`), Be = fe.length - 1, $e = lt.length - 1; Be >= 1 && $e >= 0 && fe[Be] !== lt[$e]; )
            $e--;
          for (; Be >= 1 && $e >= 0; Be--, $e--)
            if (fe[Be] !== lt[$e]) {
              if (Be !== 1 || $e !== 1)
                do
                  if (Be--, $e--, $e < 0 || fe[Be] !== lt[$e]) {
                    var Ot = `
` + fe[Be].replace(" at new ", " at ");
                    return R.displayName && Ot.includes("<anonymous>") && (Ot = Ot.replace("<anonymous>", R.displayName)), typeof R == "function" && Ut.set(R, Ot), Ot;
                  }
                while (Be >= 1 && $e >= 0);
              break;
            }
        }
      } finally {
        ot = !1, le.current = Se, J(), Error.prepareStackTrace = me;
      }
      var Cr = R ? R.displayName || R.name : "", Xn = Cr ? Qe(Cr) : "";
      return typeof R == "function" && Ut.set(R, Xn), Xn;
    }
    function Ze(R, V, X) {
      return It(R, !1);
    }
    function We(R) {
      var V = R.prototype;
      return !!(V && V.isReactComponent);
    }
    function ge(R, V, X) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return It(R, We(R));
      if (typeof R == "string")
        return Qe(R);
      switch (R) {
        case d:
          return Qe("Suspense");
        case a:
          return Qe("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case u:
            return Ze(R.render);
          case g:
            return ge(R.type, V, X);
          case m: {
            var ee = R, me = ee._payload, Se = ee._init;
            try {
              return ge(Se(me), V, X);
            } catch {
            }
          }
        }
      return "";
    }
    var xt = Object.prototype.hasOwnProperty, xn = {}, Vi = L.ReactDebugCurrentFrame;
    function Pr(R) {
      if (R) {
        var V = R._owner, X = ge(R.type, R._source, V ? V.type : null);
        Vi.setExtraStackFrame(X);
      } else
        Vi.setExtraStackFrame(null);
    }
    function si(R, V, X, ee, me) {
      {
        var Se = Function.call.bind(xt);
        for (var he in R)
          if (Se(R, he)) {
            var fe = void 0;
            try {
              if (typeof R[he] != "function") {
                var lt = Error((ee || "React class") + ": " + X + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw lt.name = "Invariant Violation", lt;
              }
              fe = R[he](V, he, ee, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Be) {
              fe = Be;
            }
            fe && !(fe instanceof Error) && (Pr(me), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ee || "React class", X, he, typeof fe), Pr(null)), fe instanceof Error && !(fe.message in xn) && (xn[fe.message] = !0, Pr(me), v("Failed %s type: %s", X, fe.message), Pr(null));
          }
      }
    }
    var ls = Array.isArray;
    function ci(R) {
      return ls(R);
    }
    function Gi(R) {
      {
        var V = typeof Symbol == "function" && Symbol.toStringTag, X = V && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return X;
      }
    }
    function Ar(R) {
      try {
        return bt(R), !1;
      } catch {
        return !0;
      }
    }
    function bt(R) {
      return "" + R;
    }
    function kr(R) {
      if (Ar(R))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Gi(R)), bt(R);
    }
    var qn = L.ReactCurrentOwner, Kt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qi, y, l;
    l = {};
    function f(R) {
      if (xt.call(R, "ref")) {
        var V = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function x(R) {
      if (xt.call(R, "key")) {
        var V = Object.getOwnPropertyDescriptor(R, "key").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function $(R, V) {
      if (typeof R.ref == "string" && qn.current && V && qn.current.stateNode !== V) {
        var X = T(qn.current.type);
        l[X] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(qn.current.type), R.ref), l[X] = !0);
      }
    }
    function j(R, V) {
      {
        var X = function() {
          qi || (qi = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        X.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: X,
          configurable: !0
        });
      }
    }
    function K(R, V) {
      {
        var X = function() {
          y || (y = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        X.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: X,
          configurable: !0
        });
      }
    }
    var ce = function(R, V, X, ee, me, Se, he) {
      var fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: R,
        key: V,
        ref: X,
        props: he,
        // Record the component responsible for creating this element.
        _owner: Se
      };
      return fe._store = {}, Object.defineProperty(fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.defineProperty(fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.freeze && (Object.freeze(fe.props), Object.freeze(fe)), fe;
    };
    function Ae(R, V, X, ee, me) {
      {
        var Se, he = {}, fe = null, lt = null;
        X !== void 0 && (kr(X), fe = "" + X), x(V) && (kr(V.key), fe = "" + V.key), f(V) && (lt = V.ref, $(V, me));
        for (Se in V)
          xt.call(V, Se) && !Kt.hasOwnProperty(Se) && (he[Se] = V[Se]);
        if (R && R.defaultProps) {
          var Be = R.defaultProps;
          for (Se in Be)
            he[Se] === void 0 && (he[Se] = Be[Se]);
        }
        if (fe || lt) {
          var $e = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          fe && j(he, $e), lt && K(he, $e);
        }
        return ce(R, fe, lt, me, ee, qn.current, he);
      }
    }
    var ye = L.ReactCurrentOwner, Ie = L.ReactDebugCurrentFrame;
    function de(R) {
      if (R) {
        var V = R._owner, X = ge(R.type, R._source, V ? V.type : null);
        Ie.setExtraStackFrame(X);
      } else
        Ie.setExtraStackFrame(null);
    }
    var fs;
    fs = !1;
    function ds(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function du() {
      {
        if (ye.current) {
          var R = T(ye.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function hd(R) {
      return "";
    }
    var hu = {};
    function pd(R) {
      {
        var V = du();
        if (!V) {
          var X = typeof R == "string" ? R : R.displayName || R.name;
          X && (V = `

Check the top-level render call using <` + X + ">.");
        }
        return V;
      }
    }
    function pu(R, V) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var X = pd(V);
        if (hu[X])
          return;
        hu[X] = !0;
        var ee = "";
        R && R._owner && R._owner !== ye.current && (ee = " It was passed a child from " + T(R._owner.type) + "."), de(R), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, ee), de(null);
      }
    }
    function gu(R, V) {
      {
        if (typeof R != "object")
          return;
        if (ci(R))
          for (var X = 0; X < R.length; X++) {
            var ee = R[X];
            ds(ee) && pu(ee, V);
          }
        else if (ds(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var me = A(R);
          if (typeof me == "function" && me !== R.entries)
            for (var Se = me.call(R), he; !(he = Se.next()).done; )
              ds(he.value) && pu(he.value, V);
        }
      }
    }
    function gd(R) {
      {
        var V = R.type;
        if (V == null || typeof V == "string")
          return;
        var X;
        if (typeof V == "function")
          X = V.propTypes;
        else if (typeof V == "object" && (V.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        V.$$typeof === g))
          X = V.propTypes;
        else
          return;
        if (X) {
          var ee = T(V);
          si(X, R.props, "prop", ee, R);
        } else if (V.PropTypes !== void 0 && !fs) {
          fs = !0;
          var me = T(V);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof V.getDefaultProps == "function" && !V.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function md(R) {
      {
        for (var V = Object.keys(R.props), X = 0; X < V.length; X++) {
          var ee = V[X];
          if (ee !== "children" && ee !== "key") {
            de(R), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ee), de(null);
            break;
          }
        }
        R.ref !== null && (de(R), v("Invalid attribute `ref` supplied to `React.Fragment`."), de(null));
      }
    }
    var mu = {};
    function wu(R, V, X, ee, me, Se) {
      {
        var he = b(R);
        if (!he) {
          var fe = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var lt = hd();
          lt ? fe += lt : fe += du();
          var Be;
          R === null ? Be = "null" : ci(R) ? Be = "array" : R !== void 0 && R.$$typeof === t ? (Be = "<" + (T(R.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : Be = typeof R, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Be, fe);
        }
        var $e = Ae(R, V, X, me, Se);
        if ($e == null)
          return $e;
        if (he) {
          var Ot = V.children;
          if (Ot !== void 0)
            if (ee)
              if (ci(Ot)) {
                for (var Cr = 0; Cr < Ot.length; Cr++)
                  gu(Ot[Cr], R);
                Object.freeze && Object.freeze(Ot);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gu(Ot, R);
        }
        if (xt.call(V, "key")) {
          var Xn = T(R), Et = Object.keys(V).filter(function(Sd) {
            return Sd !== "key";
          }), hs = Et.length > 0 ? "{key: someKey, " + Et.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mu[Xn + hs]) {
            var bd = Et.length > 0 ? "{" + Et.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, hs, Xn, bd, Xn), mu[Xn + hs] = !0;
          }
        }
        return R === r ? md($e) : gd($e), $e;
      }
    }
    function wd(R, V, X) {
      return wu(R, V, X, !0);
    }
    function yd(R, V, X) {
      return wu(R, V, X, !1);
    }
    var Ed = yd, vd = wd;
    ai.Fragment = r, ai.jsx = Ed, ai.jsxs = vd;
  }()), ai;
}
En.env.NODE_ENV === "production" ? Js.exports = Wd() : Js.exports = Kd();
var z = Js.exports;
function Vd() {
  const [e, t] = ue(!1);
  return Pe(() => {
    t(!0);
  }, []), e;
}
const Ma = "ord-connect";
function Gd(e) {
  typeof window > "u" && console.warn(
    `Attempted to read local storage key ${e} even though environment is not a browser.`
  );
  const t = `${Ma}_${e}`;
  try {
    const n = window.localStorage.getItem(t);
    return n != null ? JSON.parse(n) : null;
  } catch (n) {
    return console.error(`Error retrieving ${t} from localStorage`, n), null;
  }
}
function vu(e, t) {
  typeof window > "u" && console.warn(
    `Attempted to set local storage key ${e} even though environment is not a browser.`
  );
  const n = `${Ma}_${e}`;
  try {
    t ? window.localStorage.setItem(n, JSON.stringify(t)) : window.localStorage.removeItem(n);
  } catch (r) {
    console.error(`Error saving ${n} to localStorage`, r);
  }
}
function Xi(e, t, n = {}) {
  const { initializeWithValue: r = !0 } = n, i = ve(() => {
    const u = Gd(e);
    return u || (vu(e, t), t);
  }, [t, e]), [o, s] = ue(() => r ? i() : t), c = ve(
    (u) => {
      vu(e, u), s(u);
    },
    [e]
  );
  return Pe(() => {
    s(i());
  }, [e]), [o, c];
}
var ao = /* @__PURE__ */ ((e) => (e.MAINNET = "mainnet", e.TESTNET = "testnet", e.SIGNET = "signet", e))(ao || {}), Lt = /* @__PURE__ */ ((e) => (e.UNISAT = "unisat", e))(Lt || {}), qr = /* @__PURE__ */ ((e) => (e.BITCOIN = "bitcoin", e.FRACTAL_BITCOIN = "fractal-bitcoin", e))(qr || {});
const Fr = {
  payments: null,
  ordinals: null
}, Da = rt(
  void 0
), qd = "address", Xd = "wallet", zd = "publicKey", Yd = "format";
function eE({
  children: e,
  network: t,
  chain: n = "bitcoin",
  ssr: r = !1
}) {
  if (!t)
    throw new Error("Network cannot be empty");
  const [i, o] = ue(t), [s, c] = ue(n), [u, d] = Xi(
    qd,
    Fr,
    { initializeWithValue: !r }
  ), [a, g] = Xi(Xd, null, {
    initializeWithValue: !r
  }), [m, h] = Xi(
    zd,
    Fr,
    { initializeWithValue: !r }
  ), [S, _] = Xi(
    Yd,
    Fr,
    { initializeWithValue: !r }
  ), [A, L] = ue(!1), v = ve(() => L(!0), []), I = ve(() => L(!1), []), O = ve(() => {
    d(Fr), h(Fr), _(Fr), g(null);
  }, [d, _, h, g]), H = we(
    () => ({
      address: u,
      updateAddress: d,
      publicKey: m,
      updatePublicKey: h,
      network: i,
      updateNetwork: o,
      wallet: a,
      updateWallet: g,
      isModalOpen: A,
      openModal: v,
      closeModal: I,
      format: S,
      updateFormat: _,
      disconnectWallet: O,
      chain: s,
      updateChain: c
    }),
    [
      u,
      d,
      m,
      h,
      i,
      o,
      a,
      g,
      A,
      v,
      I,
      S,
      _,
      O,
      s,
      c
    ]
  );
  return Pe(() => {
    o(t);
  }, [t]), Pe(() => {
    s !== n && (O(), c(n));
  }, [n, s, O]), /* @__PURE__ */ z.jsx(Da.Provider, { value: H, children: e });
}
function sn() {
  const e = Ne(Da);
  if (!e)
    throw new Error("useOrdConnect must be used within OrdConnectProvider");
  return e;
}
var ja = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r(Q);
  })(Md, function(n) {
    return function(r) {
      var i = {};
      function o(s) {
        if (i[s]) return i[s].exports;
        var c = i[s] = { i: s, l: !1, exports: {} };
        return r[s].call(c.exports, c, c.exports, o), c.l = !0, c.exports;
      }
      return o.m = r, o.c = i, o.d = function(s, c, u) {
        o.o(s, c) || Object.defineProperty(s, c, { enumerable: !0, get: u });
      }, o.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, o.t = function(s, c) {
        if (1 & c && (s = o(s)), 8 & c || 4 & c && typeof s == "object" && s && s.__esModule) return s;
        var u = /* @__PURE__ */ Object.create(null);
        if (o.r(u), Object.defineProperty(u, "default", { enumerable: !0, value: s }), 2 & c && typeof s != "string") for (var d in s) o.d(u, d, (function(a) {
          return s[a];
        }).bind(null, d));
        return u;
      }, o.n = function(s) {
        var c = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return o.d(c, "a", c), c;
      }, o.o = function(s, c) {
        return Object.prototype.hasOwnProperty.call(s, c);
      }, o.p = "/", o(o.s = 1);
    }([function(r, i) {
      r.exports = n;
    }, function(r, i, o) {
      r.exports = o(2);
    }, function(r, i, o) {
      function s(v, I) {
        if (v == null) return {};
        var O, H, B = function(w, p) {
          if (w == null) return {};
          var b, k, E = {}, T = Object.keys(w);
          for (k = 0; k < T.length; k++) b = T[k], p.indexOf(b) >= 0 || (E[b] = w[b]);
          return E;
        }(v, I);
        if (Object.getOwnPropertySymbols) {
          var W = Object.getOwnPropertySymbols(v);
          for (H = 0; H < W.length; H++) O = W[H], I.indexOf(O) >= 0 || Object.prototype.propertyIsEnumerable.call(v, O) && (B[O] = v[O]);
        }
        return B;
      }
      o.r(i);
      var c = o(0), u = o.n(c), d = function(v) {
        for (var I = 0, O = 0; O < v.length; O++)
          I = (I << 5) - I + v.charCodeAt(O), I &= I;
        return Math.abs(I);
      }, a = function(v, I) {
        return Math.floor(v / Math.pow(10, I) % 10);
      }, g = function(v, I) {
        return !(a(v, I) % 2);
      }, m = function(v, I, O) {
        var H = v % I;
        return O && a(v, O) % 2 === 0 ? -H : H;
      }, h = function(v, I, O) {
        return I[v % O];
      }, S = function(v) {
        var I = v.name, O = v.colors, H = v.title, B = v.square, W = v.size, w = s(v, ["name", "colors", "title", "square", "size"]), p = function(k, E) {
          var T = d(k), F = E && E.length;
          return Array.from({ length: 3 }, function(P, C) {
            return { color: h(T + C, E, F), translateX: m(T * (C + 1), 8, 1), translateY: m(T * (C + 1), 8, 2), scale: 1.2 + m(T * (C + 1), 4) / 10, rotate: m(T * (C + 1), 360, 1) };
          });
        }(I, O), b = c.useId();
        return c.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, w), H && c.createElement("title", null, I), c.createElement("mask", { id: b, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, c.createElement("rect", { width: 80, height: 80, rx: B ? void 0 : 160, fill: "#FFFFFF" })), c.createElement("g", { mask: "url(#".concat(b, ")") }, c.createElement("rect", { width: 80, height: 80, fill: p[0].color }), c.createElement("path", { filter: "url(#filter_".concat(b, ")"), d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z", fill: p[1].color, transform: "translate(" + p[1].translateX + " " + p[1].translateY + ") rotate(" + p[1].rotate + " 40 40) scale(" + p[2].scale + ")" }), c.createElement("path", { filter: "url(#filter_".concat(b, ")"), style: { mixBlendMode: "overlay" }, d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z", fill: p[2].color, transform: "translate(" + p[2].translateX + " " + p[2].translateY + ") rotate(" + p[2].rotate + " 40 40) scale(" + p[2].scale + ")" })), c.createElement("defs", null, c.createElement("filter", { id: "filter_".concat(b), filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, c.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), c.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), c.createElement("feGaussianBlur", { stdDeviation: 7, result: "effect1_foregroundBlur" }))));
      }, _ = { pixel: function(v) {
        var I = v.name, O = v.colors, H = v.title, B = v.square, W = v.size, w = s(v, ["name", "colors", "title", "square", "size"]), p = function(k, E) {
          var T = d(k), F = E && E.length;
          return Array.from({ length: 64 }, function(P, C) {
            return h(T % (C + 1), E, F);
          });
        }(I, O), b = c.useId();
        return c.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, w), H && c.createElement("title", null, I), c.createElement("mask", { id: b, "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, c.createElement("rect", { width: 80, height: 80, rx: B ? void 0 : 160, fill: "#FFFFFF" })), c.createElement("g", { mask: "url(#".concat(b, ")") }, c.createElement("rect", { width: 10, height: 10, fill: p[0] }), c.createElement("rect", { x: 20, width: 10, height: 10, fill: p[1] }), c.createElement("rect", { x: 40, width: 10, height: 10, fill: p[2] }), c.createElement("rect", { x: 60, width: 10, height: 10, fill: p[3] }), c.createElement("rect", { x: 10, width: 10, height: 10, fill: p[4] }), c.createElement("rect", { x: 30, width: 10, height: 10, fill: p[5] }), c.createElement("rect", { x: 50, width: 10, height: 10, fill: p[6] }), c.createElement("rect", { x: 70, width: 10, height: 10, fill: p[7] }), c.createElement("rect", { y: 10, width: 10, height: 10, fill: p[8] }), c.createElement("rect", { y: 20, width: 10, height: 10, fill: p[9] }), c.createElement("rect", { y: 30, width: 10, height: 10, fill: p[10] }), c.createElement("rect", { y: 40, width: 10, height: 10, fill: p[11] }), c.createElement("rect", { y: 50, width: 10, height: 10, fill: p[12] }), c.createElement("rect", { y: 60, width: 10, height: 10, fill: p[13] }), c.createElement("rect", { y: 70, width: 10, height: 10, fill: p[14] }), c.createElement("rect", { x: 20, y: 10, width: 10, height: 10, fill: p[15] }), c.createElement("rect", { x: 20, y: 20, width: 10, height: 10, fill: p[16] }), c.createElement("rect", { x: 20, y: 30, width: 10, height: 10, fill: p[17] }), c.createElement("rect", { x: 20, y: 40, width: 10, height: 10, fill: p[18] }), c.createElement("rect", { x: 20, y: 50, width: 10, height: 10, fill: p[19] }), c.createElement("rect", { x: 20, y: 60, width: 10, height: 10, fill: p[20] }), c.createElement("rect", { x: 20, y: 70, width: 10, height: 10, fill: p[21] }), c.createElement("rect", { x: 40, y: 10, width: 10, height: 10, fill: p[22] }), c.createElement("rect", { x: 40, y: 20, width: 10, height: 10, fill: p[23] }), c.createElement("rect", { x: 40, y: 30, width: 10, height: 10, fill: p[24] }), c.createElement("rect", { x: 40, y: 40, width: 10, height: 10, fill: p[25] }), c.createElement("rect", { x: 40, y: 50, width: 10, height: 10, fill: p[26] }), c.createElement("rect", { x: 40, y: 60, width: 10, height: 10, fill: p[27] }), c.createElement("rect", { x: 40, y: 70, width: 10, height: 10, fill: p[28] }), c.createElement("rect", { x: 60, y: 10, width: 10, height: 10, fill: p[29] }), c.createElement("rect", { x: 60, y: 20, width: 10, height: 10, fill: p[30] }), c.createElement("rect", { x: 60, y: 30, width: 10, height: 10, fill: p[31] }), c.createElement("rect", { x: 60, y: 40, width: 10, height: 10, fill: p[32] }), c.createElement("rect", { x: 60, y: 50, width: 10, height: 10, fill: p[33] }), c.createElement("rect", { x: 60, y: 60, width: 10, height: 10, fill: p[34] }), c.createElement("rect", { x: 60, y: 70, width: 10, height: 10, fill: p[35] }), c.createElement("rect", { x: 10, y: 10, width: 10, height: 10, fill: p[36] }), c.createElement("rect", { x: 10, y: 20, width: 10, height: 10, fill: p[37] }), c.createElement("rect", { x: 10, y: 30, width: 10, height: 10, fill: p[38] }), c.createElement("rect", { x: 10, y: 40, width: 10, height: 10, fill: p[39] }), c.createElement("rect", { x: 10, y: 50, width: 10, height: 10, fill: p[40] }), c.createElement("rect", { x: 10, y: 60, width: 10, height: 10, fill: p[41] }), c.createElement("rect", { x: 10, y: 70, width: 10, height: 10, fill: p[42] }), c.createElement("rect", { x: 30, y: 10, width: 10, height: 10, fill: p[43] }), c.createElement("rect", { x: 30, y: 20, width: 10, height: 10, fill: p[44] }), c.createElement("rect", { x: 30, y: 30, width: 10, height: 10, fill: p[45] }), c.createElement("rect", { x: 30, y: 40, width: 10, height: 10, fill: p[46] }), c.createElement("rect", { x: 30, y: 50, width: 10, height: 10, fill: p[47] }), c.createElement("rect", { x: 30, y: 60, width: 10, height: 10, fill: p[48] }), c.createElement("rect", { x: 30, y: 70, width: 10, height: 10, fill: p[49] }), c.createElement("rect", { x: 50, y: 10, width: 10, height: 10, fill: p[50] }), c.createElement("rect", { x: 50, y: 20, width: 10, height: 10, fill: p[51] }), c.createElement("rect", { x: 50, y: 30, width: 10, height: 10, fill: p[52] }), c.createElement("rect", { x: 50, y: 40, width: 10, height: 10, fill: p[53] }), c.createElement("rect", { x: 50, y: 50, width: 10, height: 10, fill: p[54] }), c.createElement("rect", { x: 50, y: 60, width: 10, height: 10, fill: p[55] }), c.createElement("rect", { x: 50, y: 70, width: 10, height: 10, fill: p[56] }), c.createElement("rect", { x: 70, y: 10, width: 10, height: 10, fill: p[57] }), c.createElement("rect", { x: 70, y: 20, width: 10, height: 10, fill: p[58] }), c.createElement("rect", { x: 70, y: 30, width: 10, height: 10, fill: p[59] }), c.createElement("rect", { x: 70, y: 40, width: 10, height: 10, fill: p[60] }), c.createElement("rect", { x: 70, y: 50, width: 10, height: 10, fill: p[61] }), c.createElement("rect", { x: 70, y: 60, width: 10, height: 10, fill: p[62] }), c.createElement("rect", { x: 70, y: 70, width: 10, height: 10, fill: p[63] })));
      }, bauhaus: function(v) {
        var I = v.name, O = v.colors, H = v.title, B = v.square, W = v.size, w = s(v, ["name", "colors", "title", "square", "size"]), p = function(k, E) {
          var T = d(k), F = E && E.length;
          return Array.from({ length: 4 }, function(P, C) {
            return { color: h(T + C, E, F), translateX: m(T * (C + 1), 40 - (C + 17), 1), translateY: m(T * (C + 1), 40 - (C + 17), 2), rotate: m(T * (C + 1), 360), isSquare: g(T, 2) };
          });
        }(I, O), b = c.useId();
        return c.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, w), H && c.createElement("title", null, I), c.createElement("mask", { id: b, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, c.createElement("rect", { width: 80, height: 80, rx: B ? void 0 : 160, fill: "#FFFFFF" })), c.createElement("g", { mask: "url(#".concat(b, ")") }, c.createElement("rect", { width: 80, height: 80, fill: p[0].color }), c.createElement("rect", { x: 10, y: 30, width: 80, height: p[1].isSquare ? 80 : 10, fill: p[1].color, transform: "translate(" + p[1].translateX + " " + p[1].translateY + ") rotate(" + p[1].rotate + " 40 40)" }), c.createElement("circle", { cx: 40, cy: 40, fill: p[2].color, r: 16, transform: "translate(" + p[2].translateX + " " + p[2].translateY + ")" }), c.createElement("line", { x1: 0, y1: 40, x2: 80, y2: 40, strokeWidth: 2, stroke: p[3].color, transform: "translate(" + p[3].translateX + " " + p[3].translateY + ") rotate(" + p[3].rotate + " 40 40)" })));
      }, ring: function(v) {
        var I = v.name, O = v.colors, H = v.title, B = v.square, W = v.size, w = s(v, ["name", "colors", "title", "square", "size"]), p = function(k, E) {
          var T = d(E), F = k && k.length, P = Array.from({ length: 5 }, function(U, N) {
            return h(T + N, k, F);
          }), C = [];
          return C[0] = P[0], C[1] = P[1], C[2] = P[1], C[3] = P[2], C[4] = P[2], C[5] = P[3], C[6] = P[3], C[7] = P[0], C[8] = P[4], C;
        }(O, I), b = u.a.useId();
        return u.a.createElement("svg", Object.assign({ viewBox: "0 0 90 90", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, w), H && u.a.createElement("title", null, I), u.a.createElement("mask", { id: b, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 90, height: 90 }, u.a.createElement("rect", { width: 90, height: 90, rx: B ? void 0 : 180, fill: "#FFFFFF" })), u.a.createElement("g", { mask: "url(#".concat(b, ")") }, u.a.createElement("path", { d: "M0 0h90v45H0z", fill: p[0] }), u.a.createElement("path", { d: "M0 45h90v45H0z", fill: p[1] }), u.a.createElement("path", { d: "M83 45a38 38 0 00-76 0h76z", fill: p[2] }), u.a.createElement("path", { d: "M83 45a38 38 0 01-76 0h76z", fill: p[3] }), u.a.createElement("path", { d: "M77 45a32 32 0 10-64 0h64z", fill: p[4] }), u.a.createElement("path", { d: "M77 45a32 32 0 11-64 0h64z", fill: p[5] }), u.a.createElement("path", { d: "M71 45a26 26 0 00-52 0h52z", fill: p[6] }), u.a.createElement("path", { d: "M71 45a26 26 0 01-52 0h52z", fill: p[7] }), u.a.createElement("circle", { cx: 45, cy: 45, r: 23, fill: p[8] })));
      }, beam: function(v) {
        var I = v.name, O = v.colors, H = v.title, B = v.square, W = v.size, w = s(v, ["name", "colors", "title", "square", "size"]), p = function(k, E) {
          var T, F = d(k), P = E && E.length, C = h(F, E, P), U = m(F, 10, 1), N = U < 5 ? U + 4 : U, D = m(F, 10, 2), G = D < 5 ? D + 4 : D;
          return { wrapperColor: C, faceColor: (T = C, T.slice(0, 1) === "#" && (T = T.slice(1)), (299 * parseInt(T.substr(0, 2), 16) + 587 * parseInt(T.substr(2, 2), 16) + 114 * parseInt(T.substr(4, 2), 16)) / 1e3 >= 128 ? "#000000" : "#FFFFFF"), backgroundColor: h(F + 13, E, P), wrapperTranslateX: N, wrapperTranslateY: G, wrapperRotate: m(F, 360), wrapperScale: 1 + m(F, 3) / 10, isMouthOpen: g(F, 2), isCircle: g(F, 1), eyeSpread: m(F, 5), mouthSpread: m(F, 3), faceRotate: m(F, 10, 3), faceTranslateX: N > 6 ? N / 2 : m(F, 8, 1), faceTranslateY: G > 6 ? G / 2 : m(F, 7, 2) };
        }(I, O), b = c.useId();
        return c.createElement("svg", Object.assign({ viewBox: "0 0 36 36", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, w), H && c.createElement("title", null, I), c.createElement("mask", { id: b, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 36, height: 36 }, c.createElement("rect", { width: 36, height: 36, rx: B ? void 0 : 72, fill: "#FFFFFF" })), c.createElement("g", { mask: "url(#".concat(b, ")") }, c.createElement("rect", { width: 36, height: 36, fill: p.backgroundColor }), c.createElement("rect", { x: "0", y: "0", width: 36, height: 36, transform: "translate(" + p.wrapperTranslateX + " " + p.wrapperTranslateY + ") rotate(" + p.wrapperRotate + " 18 18) scale(" + p.wrapperScale + ")", fill: p.wrapperColor, rx: p.isCircle ? 36 : 6 }), c.createElement("g", { transform: "translate(" + p.faceTranslateX + " " + p.faceTranslateY + ") rotate(" + p.faceRotate + " 18 18)" }, p.isMouthOpen ? c.createElement("path", { d: "M15 " + (19 + p.mouthSpread) + "c2 1 4 1 6 0", stroke: p.faceColor, fill: "none", strokeLinecap: "round" }) : c.createElement("path", { d: "M13," + (19 + p.mouthSpread) + " a1,0.75 0 0,0 10,0", fill: p.faceColor }), c.createElement("rect", { x: 14 - p.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: p.faceColor }), c.createElement("rect", { x: 20 + p.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: p.faceColor }))));
      }, sunset: function(v) {
        var I = v.name, O = v.colors, H = v.title, B = v.square, W = v.size, w = s(v, ["name", "colors", "title", "square", "size"]), p = function(E, T) {
          var F = d(E), P = T && T.length;
          return Array.from({ length: 4 }, function(C, U) {
            return h(F + U, T, P);
          });
        }(I, O), b = I.replace(/\s/g, ""), k = c.useId();
        return c.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, w), H && c.createElement("title", null, I), c.createElement("mask", { id: k, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, c.createElement("rect", { width: 80, height: 80, rx: B ? void 0 : 160, fill: "#FFFFFF" })), c.createElement("g", { mask: "url(#".concat(k, ")") }, c.createElement("path", { fill: "url(#gradient_paint0_linear_" + b + ")", d: "M0 0h80v40H0z" }), c.createElement("path", { fill: "url(#gradient_paint1_linear_" + b + ")", d: "M0 40h80v40H0z" })), c.createElement("defs", null, c.createElement("linearGradient", { id: "gradient_paint0_linear_" + b, x1: 40, y1: 0, x2: 40, y2: 40, gradientUnits: "userSpaceOnUse" }, c.createElement("stop", { stopColor: p[0] }), c.createElement("stop", { offset: 1, stopColor: p[1] })), c.createElement("linearGradient", { id: "gradient_paint1_linear_" + b, x1: 40, y1: 40, x2: 40, y2: 80, gradientUnits: "userSpaceOnUse" }, c.createElement("stop", { stopColor: p[2] }), c.createElement("stop", { offset: 1, stopColor: p[3] }))));
      }, marble: S }, A = { geometric: "beam", abstract: "bauhaus" }, L = function(v) {
        var I = v.variant, O = I === void 0 ? "marble" : I, H = v.colors, B = H === void 0 ? ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"] : H, W = v.name, w = W === void 0 ? "Clara Barton" : W, p = v.title, b = p !== void 0 && p, k = v.size, E = v.square, T = E !== void 0 && E, F = s(v, ["variant", "colors", "name", "title", "size", "square"]), P = _[A[O] || O] || S;
        return u.a.createElement(P, Object.assign({ colors: B, name: w, title: b, size: k, square: T }, F));
      };
      i.default = L;
    }]);
  });
})(ja);
var Jd = ja.exports;
const Wa = /* @__PURE__ */ Dd(Jd), Ka = typeof document < "u" ? Q.useLayoutEffect : () => {
};
function Qd(e) {
  const t = oe(null);
  return Ka(() => {
    t.current = e;
  }, [
    e
  ]), ve((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const Bi = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, nr = (e) => e && "window" in e && e.window === e ? e : Bi(e).defaultView || window;
function Zd(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function eh(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Va(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const th = Va(function() {
  return eh(/^Mac/i);
}), nh = Va(function() {
  return Zd(/Android/i);
});
function rh(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : nh() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
class ih {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(t, n) {
    this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = t;
  }
}
function Ga(e) {
  let t = oe({
    isFocused: !1,
    observer: null
  });
  Ka(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = Qd((r) => {
    e == null || e(r);
  });
  return ve((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let i = r.target, o = (s) => {
        t.current.isFocused = !1, i.disabled && n(new ih("blur", s)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      i.addEventListener("focusout", o, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && i.disabled) {
          var s;
          (s = t.current.observer) === null || s === void 0 || s.disconnect();
          let c = i === document.activeElement ? null : document.activeElement;
          i.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: c
          })), i.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: c
          }));
        }
      }), t.current.observer.observe(i, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
function oh(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: i } = e;
  const o = ve((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), i && i(!1), !0;
  }, [
    r,
    i
  ]), s = Ga(o), c = ve((u) => {
    const d = Bi(u.target);
    u.target === u.currentTarget && d.activeElement === u.target && (n && n(u), i && i(!0), s(u));
  }, [
    i,
    n,
    s
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || i || r) ? c : void 0,
      onBlur: !t && (r || i) ? o : void 0
    }
  };
}
let Li = null, Qs = /* @__PURE__ */ new Set(), Ii = /* @__PURE__ */ new Map(), cr = !1, Zs = !1;
const sh = {
  Tab: !0,
  Escape: !0
};
function _c(e, t) {
  for (let n of Qs) n(e, t);
}
function ch(e) {
  return !(e.metaKey || !th() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function yo(e) {
  cr = !0, ch(e) && (Li = "keyboard", _c("keyboard", e));
}
function Rt(e) {
  Li = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (cr = !0, _c("pointer", e));
}
function qa(e) {
  rh(e) && (cr = !0, Li = "virtual");
}
function Xa(e) {
  e.target === window || e.target === document || (!cr && !Zs && (Li = "virtual", _c("virtual", e)), cr = !1, Zs = !1);
}
function za() {
  cr = !1, Zs = !0;
}
function ec(e) {
  if (typeof window > "u" || Ii.get(nr(e))) return;
  const t = nr(e), n = Bi(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    cr = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", yo, !0), n.addEventListener("keyup", yo, !0), n.addEventListener("click", qa, !0), t.addEventListener("focus", Xa, !0), t.addEventListener("blur", za, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", Rt, !0), n.addEventListener("pointermove", Rt, !0), n.addEventListener("pointerup", Rt, !0)) : (n.addEventListener("mousedown", Rt, !0), n.addEventListener("mousemove", Rt, !0), n.addEventListener("mouseup", Rt, !0)), t.addEventListener("beforeunload", () => {
    Ya(e);
  }, {
    once: !0
  }), Ii.set(t, {
    focus: r
  });
}
const Ya = (e, t) => {
  const n = nr(e), r = Bi(e);
  t && r.removeEventListener("DOMContentLoaded", t), Ii.has(n) && (n.HTMLElement.prototype.focus = Ii.get(n).focus, r.removeEventListener("keydown", yo, !0), r.removeEventListener("keyup", yo, !0), r.removeEventListener("click", qa, !0), n.removeEventListener("focus", Xa, !0), n.removeEventListener("blur", za, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", Rt, !0), r.removeEventListener("pointermove", Rt, !0), r.removeEventListener("pointerup", Rt, !0)) : (r.removeEventListener("mousedown", Rt, !0), r.removeEventListener("mousemove", Rt, !0), r.removeEventListener("mouseup", Rt, !0)), Ii.delete(n));
};
function uh(e) {
  const t = Bi(e);
  let n;
  return t.readyState !== "loading" ? ec(e) : (n = () => {
    ec(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Ya(e, n);
}
typeof document < "u" && uh();
function Ja() {
  return Li !== "pointer";
}
const ah = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function lh(e, t, n) {
  var r;
  const i = typeof window < "u" ? nr(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, o = typeof window < "u" ? nr(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? nr(n == null ? void 0 : n.target).HTMLElement : HTMLElement, c = typeof window < "u" ? nr(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof i && !ah.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof o || (n == null ? void 0 : n.target) instanceof s && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof c && !sh[n.key]);
}
function fh(e, t, n) {
  ec(), Pe(() => {
    let r = (i, o) => {
      lh(!!(n != null && n.isTextInput), i, o) && e(Ja());
    };
    return Qs.add(r), () => {
      Qs.delete(r);
    };
  }, t);
}
function dh(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: i } = e, o = oe({
    isFocusWithin: !1
  }), s = ve((d) => {
    o.current.isFocusWithin && !d.currentTarget.contains(d.relatedTarget) && (o.current.isFocusWithin = !1, n && n(d), i && i(!1));
  }, [
    n,
    i,
    o
  ]), c = Ga(s), u = ve((d) => {
    !o.current.isFocusWithin && document.activeElement === d.target && (r && r(d), i && i(!0), o.current.isFocusWithin = !0, c(d));
  }, [
    r,
    i,
    c
  ]);
  return t ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: u,
      onBlur: s
    }
  };
}
let Eo = !1, ps = 0;
function tc() {
  Eo = !0, setTimeout(() => {
    Eo = !1;
  }, 50);
}
function bu(e) {
  e.pointerType === "touch" && tc();
}
function hh() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", bu) : document.addEventListener("touchend", tc), ps++, () => {
      ps--, !(ps > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", bu) : document.removeEventListener("touchend", tc));
    };
}
function ph(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: i } = e, [o, s] = ue(!1), c = oe({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Pe(hh, []);
  let { hoverProps: u, triggerHoverEnd: d } = we(() => {
    let a = (h, S) => {
      if (c.pointerType = S, i || S === "touch" || c.isHovered || !h.currentTarget.contains(h.target)) return;
      c.isHovered = !0;
      let _ = h.currentTarget;
      c.target = _, t && t({
        type: "hoverstart",
        target: _,
        pointerType: S
      }), n && n(!0), s(!0);
    }, g = (h, S) => {
      if (c.pointerType = "", c.target = null, S === "touch" || !c.isHovered) return;
      c.isHovered = !1;
      let _ = h.currentTarget;
      r && r({
        type: "hoverend",
        target: _,
        pointerType: S
      }), n && n(!1), s(!1);
    }, m = {};
    return typeof PointerEvent < "u" ? (m.onPointerEnter = (h) => {
      Eo && h.pointerType === "mouse" || a(h, h.pointerType);
    }, m.onPointerLeave = (h) => {
      !i && h.currentTarget.contains(h.target) && g(h, h.pointerType);
    }) : (m.onTouchStart = () => {
      c.ignoreEmulatedMouseEvents = !0;
    }, m.onMouseEnter = (h) => {
      !c.ignoreEmulatedMouseEvents && !Eo && a(h, "mouse"), c.ignoreEmulatedMouseEvents = !1;
    }, m.onMouseLeave = (h) => {
      !i && h.currentTarget.contains(h.target) && g(h, "mouse");
    }), {
      hoverProps: m,
      triggerHoverEnd: g
    };
  }, [
    t,
    n,
    r,
    i,
    c
  ]);
  return Pe(() => {
    i && d({
      currentTarget: c.target
    }, c.pointerType);
  }, [
    i
  ]), {
    hoverProps: u,
    isHovered: o
  };
}
function gh(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, i = oe({
    isFocused: !1,
    isFocusVisible: t || Ja()
  }), [o, s] = ue(!1), [c, u] = ue(() => i.current.isFocused && i.current.isFocusVisible), d = ve(() => u(i.current.isFocused && i.current.isFocusVisible), []), a = ve((h) => {
    i.current.isFocused = h, s(h), d();
  }, [
    d
  ]);
  fh((h) => {
    i.current.isFocusVisible = h, d();
  }, [], {
    isTextInput: n
  });
  let { focusProps: g } = oh({
    isDisabled: r,
    onFocusChange: a
  }), { focusWithinProps: m } = dh({
    isDisabled: !r,
    onFocusWithinChange: a
  });
  return {
    isFocused: o,
    isFocusVisible: c,
    focusProps: r ? m : g
  };
}
var mh = Object.defineProperty, wh = (e, t, n) => t in e ? mh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, gs = (e, t, n) => (wh(e, typeof t != "symbol" ? t + "" : t, n), n);
let yh = class {
  constructor() {
    gs(this, "current", this.detect()), gs(this, "handoffState", "pending"), gs(this, "currentId", 0);
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
}, ir = new yh();
function lr(e) {
  return ir.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function No(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function cn() {
  let e = [], t = { addEventListener(n, r, i, o) {
    return n.addEventListener(r, i, o), t.add(() => n.removeEventListener(r, i, o));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return No(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, i) {
    let o = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: i }), this.add(() => {
      Object.assign(n.style, { [r]: o });
    });
  }, group(n) {
    let r = cn();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.includes(n) || e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0) for (let i of e.splice(r, 1)) i();
    };
  }, dispose() {
    for (let n of e.splice(0)) n();
  } };
  return t;
}
function ei() {
  let [e] = ue(cn);
  return Pe(() => () => e.dispose(), [e]), e;
}
let Te = (e, t) => {
  ir.isServer ? Pe(e, t) : bc(e, t);
};
function fr(e) {
  let t = oe(e);
  return Te(() => {
    t.current = e;
  }, [e]), t;
}
let ne = function(e) {
  let t = fr(e);
  return Q.useCallback((...n) => t.current(...n), [t]);
};
function Eh(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function vh(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function bh({ disabled: e = !1 } = {}) {
  let t = oe(null), [n, r] = ue(!1), i = ei(), o = ne(() => {
    t.current = null, r(!1), i.dispose();
  }), s = ne((c) => {
    if (i.dispose(), t.current === null) {
      t.current = c.currentTarget, r(!0);
      {
        let u = lr(c.currentTarget);
        i.addEventListener(u, "pointerup", o, !1), i.addEventListener(u, "pointermove", (d) => {
          if (t.current) {
            let a = Eh(d);
            r(vh(a, t.current.getBoundingClientRect()));
          }
        }, !1), i.addEventListener(u, "pointercancel", o, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: s, onPointerUp: o, onClick: o } };
}
let Sh = rt(void 0);
function Qa() {
  return Ne(Sh);
}
function nc(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function nn(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, nn), r;
}
var Xr = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Xr || {}), Ln = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ln || {});
function De() {
  let e = _h();
  return ve((t) => Th({ mergeRefs: e, ...t }), [e]);
}
function Th({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: i, visible: o = !0, name: s, mergeRefs: c }) {
  c = c ?? Ih;
  let u = Za(t, e);
  if (o) return zi(u, n, r, s, c);
  let d = i ?? 0;
  if (d & 2) {
    let { static: a = !1, ...g } = u;
    if (a) return zi(g, n, r, s, c);
  }
  if (d & 1) {
    let { unmount: a = !0, ...g } = u;
    return nn(a ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return zi({ ...g, hidden: !0, style: { display: "none" } }, n, r, s, c);
    } });
  }
  return zi(u, n, r, s, c);
}
function zi(e, t = {}, n, r, i) {
  let { as: o = n, children: s, refName: c = "ref", ...u } = ms(e, ["unmount", "static"]), d = e.ref !== void 0 ? { [c]: e.ref } : {}, a = typeof s == "function" ? s(t) : s;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t)), u["aria-labelledby"] && u["aria-labelledby"] === u.id && (u["aria-labelledby"] = void 0);
  let g = {};
  if (t) {
    let m = !1, h = [];
    for (let [S, _] of Object.entries(t)) typeof _ == "boolean" && (m = !0), _ === !0 && h.push(S.replace(/([A-Z])/g, (A) => `-${A.toLowerCase()}`));
    if (m) {
      g["data-headlessui-state"] = h.join(" ");
      for (let S of h) g[`data-${S}`] = "";
    }
  }
  if (o === ze && (Object.keys(Qn(u)).length > 0 || Object.keys(Qn(g)).length > 0)) if (!_d(a) || Array.isArray(a) && a.length > 1) {
    if (Object.keys(Qn(u)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(Qn(u)).concat(Object.keys(Qn(g))).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
  } else {
    let m = a.props, h = m == null ? void 0 : m.className, S = typeof h == "function" ? (...L) => nc(h(...L), u.className) : nc(h, u.className), _ = S ? { className: S } : {}, A = Za(a.props, Qn(ms(u, ["ref"])));
    for (let L in g) L in A && delete g[L];
    return Id(a, Object.assign({}, A, g, d, { ref: i(a.ref, d.ref) }, _));
  }
  return xd(o, Object.assign({}, ms(u, ["ref"]), o !== ze && d, o !== ze && g), a);
}
function _h() {
  let e = oe([]), t = ve((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function Ih(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Za(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let i in r) i.startsWith("on") && typeof r[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(r[i])) : t[i] = r[i];
  if (t.disabled || t["aria-disabled"]) for (let r in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(i) => {
    var o;
    return (o = i == null ? void 0 : i.preventDefault) == null ? void 0 : o.call(i);
  }]);
  for (let r in n) Object.assign(t, { [r](i, ...o) {
    let s = n[r];
    for (let c of s) {
      if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented) return;
      c(i, ...o);
    }
  } });
  return t;
}
function el(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let i in r) i.startsWith("on") && typeof r[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(r[i])) : t[i] = r[i];
  for (let r in n) Object.assign(t, { [r](...i) {
    let o = n[r];
    for (let s of o) s == null || s(...i);
  } });
  return t;
}
function Re(e) {
  var t;
  return Object.assign(Td(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Qn(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function ms(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let xh = "span";
var vo = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(vo || {});
function Oh(e, t) {
  var n;
  let { features: r = 1, ...i } = e, o = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = i["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return De()({ ourProps: o, theirProps: i, slot: {}, defaultTag: xh, name: "Hidden" });
}
let rc = Re(Oh), Ph = rt(void 0);
function Ah() {
  return Ne(Ph);
}
function kh(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Ch(n) ? !1 : r;
}
function Ch(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let tl = Symbol();
function Fh(e, t = !0) {
  return Object.assign(e, { [tl]: t });
}
function wt(...e) {
  let t = oe(e);
  Pe(() => {
    t.current = e;
  }, [e]);
  let n = ne((r) => {
    for (let i of t.current) i != null && (typeof i == "function" ? i(r) : i.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[tl])) ? void 0 : n;
}
let Ic = rt(null);
Ic.displayName = "DescriptionContext";
function nl() {
  let e = Ne(Ic);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, nl), t;
  }
  return e;
}
function rl() {
  let [e, t] = ue([]);
  return [e.length > 0 ? e.join(" ") : void 0, we(() => function(n) {
    let r = ne((o) => (t((s) => [...s, o]), () => t((s) => {
      let c = s.slice(), u = c.indexOf(o);
      return u !== -1 && c.splice(u, 1), c;
    }))), i = we(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return Q.createElement(Ic.Provider, { value: i }, n.children);
  }, [t])];
}
let Nh = "p";
function Rh(e, t) {
  let n = on(), r = Qa(), { id: i = `headlessui-description-${n}`, ...o } = e, s = nl(), c = wt(t);
  Te(() => s.register(i), [i, s.register]);
  let u = r || !1, d = we(() => ({ ...s.slot, disabled: u }), [s.slot, u]), a = { ref: c, ...s.props, id: i };
  return De()({ ourProps: a, theirProps: o, slot: d, defaultTag: Nh, name: s.name || "Description" });
}
let Bh = Re(Rh), Lh = Object.assign(Bh, {});
var Xe = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Xe || {});
let Ro = rt(null);
Ro.displayName = "LabelContext";
function xc() {
  let e = Ne(Ro);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, xc), t;
  }
  return e;
}
function Uh(e) {
  var t, n, r;
  let i = (n = (t = Ne(Ro)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = void 0) != null ? r : 0) > 0 ? [i, ...e].filter(Boolean).join(" ") : i;
}
function il({ inherit: e = !1 } = {}) {
  let t = Uh(), [n, r] = ue([]), i = e ? [t, ...n].filter(Boolean) : n;
  return [i.length > 0 ? i.join(" ") : void 0, we(() => function(o) {
    let s = ne((u) => (r((d) => [...d, u]), () => r((d) => {
      let a = d.slice(), g = a.indexOf(u);
      return g !== -1 && a.splice(g, 1), a;
    }))), c = we(() => ({ register: s, slot: o.slot, name: o.name, props: o.props, value: o.value }), [s, o.slot, o.name, o.props, o.value]);
    return Q.createElement(Ro.Provider, { value: c }, o.children);
  }, [r])];
}
let $h = "label";
function Hh(e, t) {
  var n;
  let r = on(), i = xc(), o = Ah(), s = Qa(), { id: c = `headlessui-label-${r}`, htmlFor: u = o ?? ((n = i.props) == null ? void 0 : n.htmlFor), passive: d = !1, ...a } = e, g = wt(t);
  Te(() => i.register(c), [c, i.register]);
  let m = ne((A) => {
    let L = A.currentTarget;
    if (L instanceof HTMLLabelElement && A.preventDefault(), i.props && "onClick" in i.props && typeof i.props.onClick == "function" && i.props.onClick(A), L instanceof HTMLLabelElement) {
      let v = document.getElementById(L.htmlFor);
      if (v) {
        let I = v.getAttribute("disabled");
        if (I === "true" || I === "") return;
        let O = v.getAttribute("aria-disabled");
        if (O === "true" || O === "") return;
        (v instanceof HTMLInputElement && (v.type === "radio" || v.type === "checkbox") || v.role === "radio" || v.role === "checkbox" || v.role === "switch") && v.click(), v.focus({ preventScroll: !0 });
      }
    }
  }), h = s || !1, S = we(() => ({ ...i.slot, disabled: h }), [i.slot, h]), _ = { ref: g, ...i.props, id: c, htmlFor: u, onClick: m };
  return d && ("onClick" in _ && (delete _.htmlFor, delete _.onClick), "onClick" in a && delete a.onClick), De()({ ourProps: _, theirProps: a, slot: S, defaultTag: u ? $h : "div", name: i.name || "Label" });
}
let Mh = Re(Hh);
Object.assign(Mh, {});
let Dh = rt(() => {
});
function jh({ value: e, children: t }) {
  return Q.createElement(Dh.Provider, { value: e }, t);
}
function Wh(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Kh(e, t = !1) {
  let [n, r] = Sc(() => ({}), {}), i = we(() => Wh(e), [e, n]);
  return Te(() => {
    if (!e) return;
    let o = new ResizeObserver(r);
    return o.observe(e), () => {
      o.disconnect();
    };
  }, [e]), t ? { width: `${i.width}px`, height: `${i.height}px` } : i;
}
let Vh = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function ol(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(i) {
    return r.add(i), () => r.delete(i);
  }, dispatch(i, ...o) {
    let s = t[i].call(n, ...o);
    s && (n = s, r.forEach((c) => c()));
  } };
}
function sl(e) {
  return Od(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let Gh = new Vh(() => ol(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function ti(e, t) {
  let n = Gh.get(t), r = on(), i = sl(n);
  if (Te(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let o = i.indexOf(r), s = i.length;
  return o === -1 && (o = s, s += 1), o === s - 1;
}
let ic = /* @__PURE__ */ new Map(), xi = /* @__PURE__ */ new Map();
function Su(e) {
  var t;
  let n = (t = xi.get(e)) != null ? t : 0;
  return xi.set(e, n + 1), n !== 0 ? () => Tu(e) : (ic.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Tu(e));
}
function Tu(e) {
  var t;
  let n = (t = xi.get(e)) != null ? t : 1;
  if (n === 1 ? xi.delete(e) : xi.set(e, n - 1), n !== 1) return;
  let r = ic.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, ic.delete(e));
}
function cl(e, { allowed: t, disallowed: n } = {}) {
  let r = ti(e, "inert-others");
  Te(() => {
    var i, o;
    if (!r) return;
    let s = cn();
    for (let u of (i = n == null ? void 0 : n()) != null ? i : []) u && s.add(Su(u));
    let c = (o = t == null ? void 0 : t()) != null ? o : [];
    for (let u of c) {
      if (!u) continue;
      let d = lr(u);
      if (!d) continue;
      let a = u.parentElement;
      for (; a && a !== d.body; ) {
        for (let g of a.children) c.some((m) => g.contains(m)) || s.add(Su(g));
        a = a.parentElement;
      }
    }
    return s.dispose;
  }, [r, t, n]);
}
function ul(e, t, n) {
  let r = fr((i) => {
    let o = i.getBoundingClientRect();
    o.x === 0 && o.y === 0 && o.width === 0 && o.height === 0 && n();
  });
  Pe(() => {
    if (!e) return;
    let i = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!i) return;
    let o = cn();
    if (typeof ResizeObserver < "u") {
      let s = new ResizeObserver(() => r.current(i));
      s.observe(i), o.add(() => s.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let s = new IntersectionObserver(() => r.current(i));
      s.observe(i), o.add(() => s.disconnect());
    }
    return () => o.dispose();
  }, [t, r, e]);
}
let bo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), qh = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Mt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(Mt || {}), oc = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(oc || {}), Xh = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Xh || {});
function al(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(bo)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function zh(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(qh)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Oc = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Oc || {});
function Pc(e, t = 0) {
  var n;
  return e === ((n = lr(e)) == null ? void 0 : n.body) ? !1 : nn(t, { 0() {
    return e.matches(bo);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(bo)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
function ll(e) {
  let t = lr(e);
  cn().nextFrame(() => {
    t && !Pc(t.activeElement, 0) && en(e);
  });
}
var Yh = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Yh || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function en(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Jh = ["textarea", "input"].join(",");
function Qh(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Jh)) != null ? n : !1;
}
function fl(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let i = t(n), o = t(r);
    if (i === null || o === null) return 0;
    let s = i.compareDocumentPosition(o);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Zh(e, t) {
  return jr(al(), t, { relativeTo: e });
}
function jr(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}) {
  let o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? n ? fl(e) : e : t & 64 ? zh(e) : al(e);
  i.length > 0 && s.length > 1 && (s = s.filter((h) => !i.some((S) => S != null && "current" in S ? (S == null ? void 0 : S.current) === h : S === h))), r = r ?? o.activeElement;
  let c = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, s.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, s.indexOf(r)) + 1;
    if (t & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = t & 32 ? { preventScroll: !0 } : {}, a = 0, g = s.length, m;
  do {
    if (a >= g || a + g <= 0) return 0;
    let h = u + a;
    if (t & 16) h = (h + g) % g;
    else {
      if (h < 0) return 3;
      if (h >= g) return 1;
    }
    m = s[h], m == null || m.focus(d), a += c;
  } while (m !== o.activeElement);
  return t & 6 && Qh(m) && m.select(), 2;
}
function dl() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function e0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function t0() {
  return dl() || e0();
}
function li(e, t, n, r) {
  let i = fr(n);
  Pe(() => {
    if (!e) return;
    function o(s) {
      i.current(s);
    }
    return document.addEventListener(t, o, r), () => document.removeEventListener(t, o, r);
  }, [e, t, r]);
}
function hl(e, t, n, r) {
  let i = fr(n);
  Pe(() => {
    if (!e) return;
    function o(s) {
      i.current(s);
    }
    return window.addEventListener(t, o, r), () => window.removeEventListener(t, o, r);
  }, [e, t, r]);
}
const _u = 30;
function pl(e, t, n) {
  let r = ti(e, "outside-click"), i = fr(n), o = ve(function(u, d) {
    if (u.defaultPrevented) return;
    let a = d(u);
    if (a === null || !a.getRootNode().contains(a) || !a.isConnected) return;
    let g = function m(h) {
      return typeof h == "function" ? m(h()) : Array.isArray(h) || h instanceof Set ? h : [h];
    }(t);
    for (let m of g) if (m !== null && (m.contains(a) || u.composed && u.composedPath().includes(m))) return;
    return !Pc(a, Oc.Loose) && a.tabIndex !== -1 && u.preventDefault(), i.current(u, a);
  }, [i, t]), s = oe(null);
  li(r, "pointerdown", (u) => {
    var d, a;
    s.current = ((a = (d = u.composedPath) == null ? void 0 : d.call(u)) == null ? void 0 : a[0]) || u.target;
  }, !0), li(r, "mousedown", (u) => {
    var d, a;
    s.current = ((a = (d = u.composedPath) == null ? void 0 : d.call(u)) == null ? void 0 : a[0]) || u.target;
  }, !0), li(r, "click", (u) => {
    t0() || s.current && (o(u, () => s.current), s.current = null);
  }, !0);
  let c = oe({ x: 0, y: 0 });
  li(r, "touchstart", (u) => {
    c.current.x = u.touches[0].clientX, c.current.y = u.touches[0].clientY;
  }, !0), li(r, "touchend", (u) => {
    let d = { x: u.changedTouches[0].clientX, y: u.changedTouches[0].clientY };
    if (!(Math.abs(d.x - c.current.x) >= _u || Math.abs(d.y - c.current.y) >= _u)) return o(u, () => u.target instanceof HTMLElement ? u.target : null);
  }, !0), hl(r, "blur", (u) => o(u, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function ni(...e) {
  return we(() => lr(...e), [...e]);
}
function gl(e, t, n, r) {
  let i = fr(n);
  Pe(() => {
    e = e ?? window;
    function o(s) {
      i.current(s);
    }
    return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
  }, [e, t, r]);
}
function n0(e, t) {
  return we(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function r0() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement, i = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, i.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, i = Math.max(0, r.clientWidth - r.offsetWidth), o = Math.max(0, e - i);
    n.style(r, "paddingRight", `${o}px`);
  } };
}
function i0() {
  return dl() ? { before({ doc: e, d: t, meta: n }) {
    function r(i) {
      return n.containers.flatMap((o) => o()).some((o) => o.contains(i));
    }
    t.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let c = cn();
        c.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => c.dispose()));
      }
      let o = (i = window.scrollY) != null ? i : window.pageYOffset, s = null;
      t.addEventListener(e, "click", (c) => {
        if (c.target instanceof HTMLElement) try {
          let u = c.target.closest("a");
          if (!u) return;
          let { hash: d } = new URL(u.href), a = e.querySelector(d);
          a && !r(a) && (s = a);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (c) => {
        if (c.target instanceof HTMLElement) if (r(c.target)) {
          let u = c.target;
          for (; u.parentElement && r(u.parentElement); ) u = u.parentElement;
          t.style(u, "overscrollBehavior", "contain");
        } else t.style(c.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (c) => {
        if (c.target instanceof HTMLElement) {
          if (c.target.tagName === "INPUT") return;
          if (r(c.target)) {
            let u = c.target;
            for (; u.parentElement && u.dataset.headlessuiPortal !== "" && !(u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth); ) u = u.parentElement;
            u.dataset.headlessuiPortal === "" && c.preventDefault();
          } else c.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var c;
        let u = (c = window.scrollY) != null ? c : window.pageYOffset;
        o !== u && window.scrollTo(0, o), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
      });
    });
  } } : {};
}
function o0() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function s0(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let rr = ol(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: cn(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: s0(n) }, i = [i0(), r0(), o0()];
  i.forEach(({ before: o }) => o == null ? void 0 : o(r)), i.forEach(({ after: o }) => o == null ? void 0 : o(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
rr.subscribe(() => {
  let e = rr.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", i = n.count !== 0;
    (i && !r || !i && r) && rr.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && rr.dispatch("TEARDOWN", n);
  }
});
function c0(e, t, n = () => ({ containers: [] })) {
  let r = sl(rr), i = t ? r.get(t) : void 0, o = i ? i.count > 0 : !1;
  return Te(() => {
    if (!(!t || !e)) return rr.dispatch("PUSH", t, n), () => rr.dispatch("POP", t, n);
  }, [e, t]), o;
}
function ml(e, t, n = () => [document.body]) {
  let r = ti(e, "scroll-lock");
  c0(r, t, (i) => {
    var o;
    return { containers: [...(o = i.containers) != null ? o : [], n] };
  });
}
function Iu(e) {
  return [e.screenX, e.screenY];
}
function u0() {
  let e = oe([-1, -1]);
  return { wasMoved(t) {
    let n = Iu(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Iu(t);
  } };
}
function a0(e = 0) {
  let [t, n] = ue(e), r = ve((u) => n(u), [t]), i = ve((u) => n((d) => d | u), [t]), o = ve((u) => (t & u) === u, [t]), s = ve((u) => n((d) => d & ~u), [n]), c = ve((u) => n((d) => d ^ u), [n]);
  return { flags: t, setFlag: r, addFlag: i, hasFlag: o, removeFlag: s, toggleFlag: c };
}
var xu, Ou;
typeof En < "u" && typeof globalThis < "u" && typeof Element < "u" && ((xu = En == null ? void 0 : En.env) == null ? void 0 : xu.NODE_ENV) === "test" && typeof ((Ou = Element == null ? void 0 : Element.prototype) == null ? void 0 : Ou.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var l0 = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(l0 || {});
function wl(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function yl(e, t, n, r) {
  let [i, o] = ue(n), { hasFlag: s, addFlag: c, removeFlag: u } = a0(e && i ? 3 : 0), d = oe(!1), a = oe(!1), g = ei();
  return Te(() => {
    var m;
    if (e) {
      if (n && o(!0), !t) {
        n && c(3);
        return;
      }
      return (m = r == null ? void 0 : r.start) == null || m.call(r, n), f0(t, { inFlight: d, prepare() {
        a.current ? a.current = !1 : a.current = d.current, d.current = !0, !a.current && (n ? (c(3), u(4)) : (c(4), u(2)));
      }, run() {
        a.current ? n ? (u(3), c(4)) : (u(4), c(3)) : n ? u(1) : c(1);
      }, done() {
        var h;
        a.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (d.current = !1, u(7), n || o(!1), (h = r == null ? void 0 : r.end) == null || h.call(r, n));
      } });
    }
  }, [e, n, t, g]), e ? [i, { closed: s(1), enter: s(2), leave: s(4), transition: s(2) || s(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function f0(e, { prepare: t, run: n, done: r, inFlight: i }) {
  let o = cn();
  return h0(e, { prepare: t, inFlight: i }), o.nextFrame(() => {
    n(), o.requestAnimationFrame(() => {
      o.add(d0(e, r));
    });
  }), o.dispose;
}
function d0(e, t) {
  var n, r;
  let i = cn();
  if (!e) return i.dispose;
  let o = !1;
  i.add(() => {
    o = !0;
  });
  let s = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter((c) => c instanceof CSSTransition)) != null ? r : [];
  return s.length === 0 ? (t(), i.dispose) : (Promise.allSettled(s.map((c) => c.finished)).then(() => {
    o || t();
  }), i.dispose);
}
function h0(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function p0(e, { container: t, accept: n, walk: r }) {
  let i = oe(n), o = oe(r);
  Pe(() => {
    i.current = n, o.current = r;
  }, [n, r]), Te(() => {
    if (!t || !e) return;
    let s = lr(t);
    if (!s) return;
    let c = i.current, u = o.current, d = Object.assign((g) => c(g), { acceptNode: c }), a = s.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, d, !1);
    for (; a.nextNode(); ) u(a.currentNode);
  }, [t, e, i, o]);
}
function Ac(e, t) {
  let n = oe([]), r = ne(e);
  Pe(() => {
    let i = [...n.current];
    for (let [o, s] of t.entries()) if (n.current[o] !== s) {
      let c = r(t, i);
      return n.current = t, c;
    }
  }, [r, ...t]);
}
function Bo() {
  return typeof window < "u";
}
function ri(e) {
  return El(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function un(e) {
  var t;
  return (t = (El(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function El(e) {
  return Bo() ? e instanceof Node || e instanceof Tt(e).Node : !1;
}
function at(e) {
  return Bo() ? e instanceof Element || e instanceof Tt(e).Element : !1;
}
function rn(e) {
  return Bo() ? e instanceof HTMLElement || e instanceof Tt(e).HTMLElement : !1;
}
function Pu(e) {
  return !Bo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Tt(e).ShadowRoot;
}
function Ui(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = Dt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function g0(e) {
  return ["table", "td", "th"].includes(ri(e));
}
function Lo(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function kc(e) {
  const t = Cc(), n = at(e) ? Dt(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function m0(e) {
  let t = Mn(e);
  for (; rn(t) && !zr(t); ) {
    if (kc(t))
      return t;
    if (Lo(t))
      return null;
    t = Mn(t);
  }
  return null;
}
function Cc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function zr(e) {
  return ["html", "body", "#document"].includes(ri(e));
}
function Dt(e) {
  return Tt(e).getComputedStyle(e);
}
function Uo(e) {
  return at(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Mn(e) {
  if (ri(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Pu(e) && e.host || // Fallback.
    un(e)
  );
  return Pu(t) ? t.host : t;
}
function vl(e) {
  const t = Mn(e);
  return zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : rn(t) && Ui(t) ? t : vl(t);
}
function ki(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = vl(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Tt(i);
  if (o) {
    const c = sc(s);
    return t.concat(s, s.visualViewport || [], Ui(i) ? i : [], c && n ? ki(c) : []);
  }
  return t.concat(i, ki(i, [], n));
}
function sc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function w0() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const Yr = Math.min, ct = Math.max, Ci = Math.round, Yi = Math.floor, Dn = (e) => ({
  x: e,
  y: e
}), y0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, E0 = {
  start: "end",
  end: "start"
};
function Au(e, t, n) {
  return ct(e, Yr(t, n));
}
function ii(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jn(e) {
  return e.split("-")[0];
}
function $i(e) {
  return e.split("-")[1];
}
function bl(e) {
  return e === "x" ? "y" : "x";
}
function Sl(e) {
  return e === "y" ? "height" : "width";
}
function ur(e) {
  return ["top", "bottom"].includes(jn(e)) ? "y" : "x";
}
function Tl(e) {
  return bl(ur(e));
}
function v0(e, t, n) {
  n === void 0 && (n = !1);
  const r = $i(e), i = Tl(e), o = Sl(i);
  let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (s = So(s)), [s, So(s)];
}
function b0(e) {
  const t = So(e);
  return [cc(e), t, cc(t)];
}
function cc(e) {
  return e.replace(/start|end/g, (t) => E0[t]);
}
function S0(e, t, n) {
  const r = ["left", "right"], i = ["right", "left"], o = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : r : t ? r : i;
    case "left":
    case "right":
      return t ? o : s;
    default:
      return [];
  }
}
function T0(e, t, n, r) {
  const i = $i(e);
  let o = S0(jn(e), n === "start", r);
  return i && (o = o.map((s) => s + "-" + i), t && (o = o.concat(o.map(cc)))), o;
}
function So(e) {
  return e.replace(/left|right|bottom|top/g, (t) => y0[t]);
}
function _0(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function I0(e) {
  return typeof e != "number" ? _0(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function To(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  };
}
function ku(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const o = ur(t), s = Tl(t), c = Sl(s), u = jn(t), d = o === "y", a = r.x + r.width / 2 - i.width / 2, g = r.y + r.height / 2 - i.height / 2, m = r[c] / 2 - i[c] / 2;
  let h;
  switch (u) {
    case "top":
      h = {
        x: a,
        y: r.y - i.height
      };
      break;
    case "bottom":
      h = {
        x: a,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: g
      };
      break;
    case "left":
      h = {
        x: r.x - i.width,
        y: g
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch ($i(t)) {
    case "start":
      h[s] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      h[s] += m * (n && d ? -1 : 1);
      break;
  }
  return h;
}
const x0 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: s
  } = n, c = o.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: a,
    y: g
  } = ku(d, r, u), m = r, h = {}, S = 0;
  for (let _ = 0; _ < c.length; _++) {
    const {
      name: A,
      fn: L
    } = c[_], {
      x: v,
      y: I,
      data: O,
      reset: H
    } = await L({
      x: a,
      y: g,
      initialPlacement: r,
      placement: m,
      strategy: i,
      middlewareData: h,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    a = v ?? a, g = I ?? g, h = {
      ...h,
      [A]: {
        ...h[A],
        ...O
      }
    }, H && S <= 50 && (S++, typeof H == "object" && (H.placement && (m = H.placement), H.rects && (d = H.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : H.rects), {
      x: a,
      y: g
    } = ku(d, m, u)), _ = -1);
  }
  return {
    x: a,
    y: g,
    placement: m,
    strategy: i,
    middlewareData: h
  };
};
async function $o(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: i,
    platform: o,
    rects: s,
    elements: c,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: a = "viewport",
    elementContext: g = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = ii(t, e), S = I0(h), A = c[m ? g === "floating" ? "reference" : "floating" : g], L = To(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(A))) == null || n ? A : A.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(c.floating)),
    boundary: d,
    rootBoundary: a,
    strategy: u
  })), v = g === "floating" ? {
    x: r,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, I = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c.floating)), O = await (o.isElement == null ? void 0 : o.isElement(I)) ? await (o.getScale == null ? void 0 : o.getScale(I)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, H = To(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: v,
    offsetParent: I,
    strategy: u
  }) : v);
  return {
    top: (L.top - H.top + S.top) / O.y,
    bottom: (H.bottom - L.bottom + S.bottom) / O.y,
    left: (L.left - H.left + S.left) / O.x,
    right: (H.right - L.right + S.right) / O.x
  };
}
const O0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: i,
        middlewareData: o,
        rects: s,
        initialPlacement: c,
        platform: u,
        elements: d
      } = t, {
        mainAxis: a = !0,
        crossAxis: g = !0,
        fallbackPlacements: m,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: S = "none",
        flipAlignment: _ = !0,
        ...A
      } = ii(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const L = jn(i), v = ur(c), I = jn(c) === c, O = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), H = m || (I || !_ ? [So(c)] : b0(c)), B = S !== "none";
      !m && B && H.push(...T0(c, _, S, O));
      const W = [c, ...H], w = await $o(t, A), p = [];
      let b = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (a && p.push(w[L]), g) {
        const F = v0(i, s, O);
        p.push(w[F[0]], w[F[1]]);
      }
      if (b = [...b, {
        placement: i,
        overflows: p
      }], !p.every((F) => F <= 0)) {
        var k, E;
        const F = (((k = o.flip) == null ? void 0 : k.index) || 0) + 1, P = W[F];
        if (P)
          return {
            data: {
              index: F,
              overflows: b
            },
            reset: {
              placement: P
            }
          };
        let C = (E = b.filter((U) => U.overflows[0] <= 0).sort((U, N) => U.overflows[1] - N.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!C)
          switch (h) {
            case "bestFit": {
              var T;
              const U = (T = b.filter((N) => {
                if (B) {
                  const D = ur(N.placement);
                  return D === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((D) => D > 0).reduce((D, G) => D + G, 0)]).sort((N, D) => N[1] - D[1])[0]) == null ? void 0 : T[0];
              U && (C = U);
              break;
            }
            case "initialPlacement":
              C = c;
              break;
          }
        if (i !== C)
          return {
            reset: {
              placement: C
            }
          };
      }
      return {};
    }
  };
};
async function P0(e, t) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), s = jn(n), c = $i(n), u = ur(n) === "y", d = ["left", "top"].includes(s) ? -1 : 1, a = o && u ? -1 : 1, g = ii(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: S
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return c && typeof S == "number" && (h = c === "end" ? S * -1 : S), u ? {
    x: h * a,
    y: m * d
  } : {
    x: m * d,
    y: h * a
  };
}
const A0 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: i,
        y: o,
        placement: s,
        middlewareData: c
      } = t, u = await P0(t, e);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
        x: i + u.x,
        y: o + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, k0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: i
      } = t, {
        mainAxis: o = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (A) => {
            let {
              x: L,
              y: v
            } = A;
            return {
              x: L,
              y: v
            };
          }
        },
        ...u
      } = ii(e, t), d = {
        x: n,
        y: r
      }, a = await $o(t, u), g = ur(jn(i)), m = bl(g);
      let h = d[m], S = d[g];
      if (o) {
        const A = m === "y" ? "top" : "left", L = m === "y" ? "bottom" : "right", v = h + a[A], I = h - a[L];
        h = Au(v, h, I);
      }
      if (s) {
        const A = g === "y" ? "top" : "left", L = g === "y" ? "bottom" : "right", v = S + a[A], I = S - a[L];
        S = Au(v, S, I);
      }
      const _ = c.fn({
        ...t,
        [m]: h,
        [g]: S
      });
      return {
        ..._,
        data: {
          x: _.x - n,
          y: _.y - r,
          enabled: {
            [m]: o,
            [g]: s
          }
        }
      };
    }
  };
}, C0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: i,
        rects: o,
        platform: s,
        elements: c
      } = t, {
        apply: u = () => {
        },
        ...d
      } = ii(e, t), a = await $o(t, d), g = jn(i), m = $i(i), h = ur(i) === "y", {
        width: S,
        height: _
      } = o.floating;
      let A, L;
      g === "top" || g === "bottom" ? (A = g, L = m === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (L = g, A = m === "end" ? "top" : "bottom");
      const v = _ - a.top - a.bottom, I = S - a.left - a.right, O = Yr(_ - a[A], v), H = Yr(S - a[L], I), B = !t.middlewareData.shift;
      let W = O, w = H;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = I), (r = t.middlewareData.shift) != null && r.enabled.y && (W = v), B && !m) {
        const b = ct(a.left, 0), k = ct(a.right, 0), E = ct(a.top, 0), T = ct(a.bottom, 0);
        h ? w = S - 2 * (b !== 0 || k !== 0 ? b + k : ct(a.left, a.right)) : W = _ - 2 * (E !== 0 || T !== 0 ? E + T : ct(a.top, a.bottom));
      }
      await u({
        ...t,
        availableWidth: w,
        availableHeight: W
      });
      const p = await s.getDimensions(c.floating);
      return S !== p.width || _ !== p.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function _l(e) {
  const t = Dt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = rn(e), o = i ? e.offsetWidth : n, s = i ? e.offsetHeight : r, c = Ci(n) !== o || Ci(r) !== s;
  return c && (n = o, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function Fc(e) {
  return at(e) ? e : e.contextElement;
}
function Wr(e) {
  const t = Fc(e);
  if (!rn(t))
    return Dn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = _l(t);
  let s = (o ? Ci(n.width) : n.width) / r, c = (o ? Ci(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const F0 = /* @__PURE__ */ Dn(0);
function Il(e) {
  const t = Tt(e);
  return !Cc() || !t.visualViewport ? F0 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function N0(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Tt(e) ? !1 : t;
}
function ar(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = Fc(e);
  let s = Dn(1);
  t && (r ? at(r) && (s = Wr(r)) : s = Wr(e));
  const c = N0(o, n, r) ? Il(o) : Dn(0);
  let u = (i.left + c.x) / s.x, d = (i.top + c.y) / s.y, a = i.width / s.x, g = i.height / s.y;
  if (o) {
    const m = Tt(o), h = r && at(r) ? Tt(r) : r;
    let S = m, _ = sc(S);
    for (; _ && r && h !== S; ) {
      const A = Wr(_), L = _.getBoundingClientRect(), v = Dt(_), I = L.left + (_.clientLeft + parseFloat(v.paddingLeft)) * A.x, O = L.top + (_.clientTop + parseFloat(v.paddingTop)) * A.y;
      u *= A.x, d *= A.y, a *= A.x, g *= A.y, u += I, d += O, S = Tt(_), _ = sc(S);
    }
  }
  return To({
    width: a,
    height: g,
    x: u,
    y: d
  });
}
function R0(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: i
  } = e;
  const o = i === "fixed", s = un(r), c = t ? Lo(t.floating) : !1;
  if (r === s || c && o)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Dn(1);
  const a = Dn(0), g = rn(r);
  if ((g || !g && !o) && ((ri(r) !== "body" || Ui(s)) && (u = Uo(r)), rn(r))) {
    const m = ar(r);
    d = Wr(r), a.x = m.x + r.clientLeft, a.y = m.y + r.clientTop;
  }
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + a.x,
    y: n.y * d.y - u.scrollTop * d.y + a.y
  };
}
function B0(e) {
  return Array.from(e.getClientRects());
}
function uc(e, t) {
  const n = Uo(e).scrollLeft;
  return t ? t.left + n : ar(un(e)).left + n;
}
function L0(e) {
  const t = un(e), n = Uo(e), r = e.ownerDocument.body, i = ct(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = ct(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + uc(e);
  const c = -n.scrollTop;
  return Dt(r).direction === "rtl" && (s += ct(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: o,
    x: s,
    y: c
  };
}
function U0(e, t) {
  const n = Tt(e), r = un(e), i = n.visualViewport;
  let o = r.clientWidth, s = r.clientHeight, c = 0, u = 0;
  if (i) {
    o = i.width, s = i.height;
    const d = Cc();
    (!d || d && t === "fixed") && (c = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: c,
    y: u
  };
}
function $0(e, t) {
  const n = ar(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, o = rn(e) ? Wr(e) : Dn(1), s = e.clientWidth * o.x, c = e.clientHeight * o.y, u = i * o.x, d = r * o.y;
  return {
    width: s,
    height: c,
    x: u,
    y: d
  };
}
function Cu(e, t, n) {
  let r;
  if (t === "viewport")
    r = U0(e, n);
  else if (t === "document")
    r = L0(un(e));
  else if (at(t))
    r = $0(t, n);
  else {
    const i = Il(e);
    r = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return To(r);
}
function xl(e, t) {
  const n = Mn(e);
  return n === t || !at(n) || zr(n) ? !1 : Dt(n).position === "fixed" || xl(n, t);
}
function H0(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ki(e, [], !1).filter((c) => at(c) && ri(c) !== "body"), i = null;
  const o = Dt(e).position === "fixed";
  let s = o ? Mn(e) : e;
  for (; at(s) && !zr(s); ) {
    const c = Dt(s), u = kc(s);
    !u && c.position === "fixed" && (i = null), (o ? !u && !i : !u && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Ui(s) && !u && xl(e, s)) ? r = r.filter((a) => a !== s) : i = c, s = Mn(s);
  }
  return t.set(e, r), r;
}
function M0(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const s = [...n === "clippingAncestors" ? Lo(t) ? [] : H0(t, this._c) : [].concat(n), r], c = s[0], u = s.reduce((d, a) => {
    const g = Cu(t, a, i);
    return d.top = ct(g.top, d.top), d.right = Yr(g.right, d.right), d.bottom = Yr(g.bottom, d.bottom), d.left = ct(g.left, d.left), d;
  }, Cu(t, c, i));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function D0(e) {
  const {
    width: t,
    height: n
  } = _l(e);
  return {
    width: t,
    height: n
  };
}
function j0(e, t, n) {
  const r = rn(t), i = un(t), o = n === "fixed", s = ar(e, !0, o, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Dn(0);
  if (r || !r && !o)
    if ((ri(t) !== "body" || Ui(i)) && (c = Uo(t)), r) {
      const h = ar(t, !0, o, t);
      u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
    } else i && (u.x = uc(i));
  let d = 0, a = 0;
  if (i && !r && !o) {
    const h = i.getBoundingClientRect();
    a = h.top + c.scrollTop, d = h.left + c.scrollLeft - // RTL <body> scrollbar.
    uc(i, h);
  }
  const g = s.left + c.scrollLeft - u.x - d, m = s.top + c.scrollTop - u.y - a;
  return {
    x: g,
    y: m,
    width: s.width,
    height: s.height
  };
}
function ws(e) {
  return Dt(e).position === "static";
}
function Fu(e, t) {
  if (!rn(e) || Dt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return un(e) === n && (n = n.ownerDocument.body), n;
}
function Ol(e, t) {
  const n = Tt(e);
  if (Lo(e))
    return n;
  if (!rn(e)) {
    let i = Mn(e);
    for (; i && !zr(i); ) {
      if (at(i) && !ws(i))
        return i;
      i = Mn(i);
    }
    return n;
  }
  let r = Fu(e, t);
  for (; r && g0(r) && ws(r); )
    r = Fu(r, t);
  return r && zr(r) && ws(r) && !kc(r) ? n : r || m0(e) || n;
}
const W0 = async function(e) {
  const t = this.getOffsetParent || Ol, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: j0(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function K0(e) {
  return Dt(e).direction === "rtl";
}
const V0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: R0,
  getDocumentElement: un,
  getClippingRect: M0,
  getOffsetParent: Ol,
  getElementRects: W0,
  getClientRects: B0,
  getDimensions: D0,
  getScale: Wr,
  isElement: at,
  isRTL: K0
};
function G0(e, t) {
  let n = null, r;
  const i = un(e);
  function o() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), o();
    const {
      left: d,
      top: a,
      width: g,
      height: m
    } = e.getBoundingClientRect();
    if (c || t(), !g || !m)
      return;
    const h = Yi(a), S = Yi(i.clientWidth - (d + g)), _ = Yi(i.clientHeight - (a + m)), A = Yi(d), v = {
      rootMargin: -h + "px " + -S + "px " + -_ + "px " + -A + "px",
      threshold: ct(0, Yr(1, u)) || 1
    };
    let I = !0;
    function O(H) {
      const B = H[0].intersectionRatio;
      if (B !== u) {
        if (!I)
          return s();
        B ? s(!1, B) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      I = !1;
    }
    try {
      n = new IntersectionObserver(O, {
        ...v,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(O, v);
    }
    n.observe(e);
  }
  return s(!0), o;
}
function q0(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, d = Fc(e), a = i || o ? [...d ? ki(d) : [], ...ki(t)] : [];
  a.forEach((L) => {
    i && L.addEventListener("scroll", n, {
      passive: !0
    }), o && L.addEventListener("resize", n);
  });
  const g = d && c ? G0(d, n) : null;
  let m = -1, h = null;
  s && (h = new ResizeObserver((L) => {
    let [v] = L;
    v && v.target === d && h && (h.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var I;
      (I = h) == null || I.observe(t);
    })), n();
  }), d && !u && h.observe(d), h.observe(t));
  let S, _ = u ? ar(e) : null;
  u && A();
  function A() {
    const L = ar(e);
    _ && (L.x !== _.x || L.y !== _.y || L.width !== _.width || L.height !== _.height) && n(), _ = L, S = requestAnimationFrame(A);
  }
  return n(), () => {
    var L;
    a.forEach((v) => {
      i && v.removeEventListener("scroll", n), o && v.removeEventListener("resize", n);
    }), g == null || g(), (L = h) == null || L.disconnect(), h = null, u && cancelAnimationFrame(S);
  };
}
const ys = $o, X0 = A0, z0 = k0, Y0 = O0, J0 = C0, Q0 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: V0,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return x0(e, t, {
    ...i,
    platform: o
  });
};
var lo = typeof document < "u" ? bc : Pe;
function _o(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!_o(e[r], t[r]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const o = i[r];
      if (!(o === "_owner" && e.$$typeof) && !_o(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Pl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Nu(e, t) {
  const n = Pl(e);
  return Math.round(t * n) / n;
}
function Es(e) {
  const t = Y.useRef(e);
  return lo(() => {
    t.current = e;
  }), t;
}
function Z0(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: i,
    elements: {
      reference: o,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: u,
    open: d
  } = e, [a, g] = Y.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, h] = Y.useState(r);
  _o(m, r) || h(r);
  const [S, _] = Y.useState(null), [A, L] = Y.useState(null), v = Y.useCallback((N) => {
    N !== B.current && (B.current = N, _(N));
  }, []), I = Y.useCallback((N) => {
    N !== W.current && (W.current = N, L(N));
  }, []), O = o || S, H = s || A, B = Y.useRef(null), W = Y.useRef(null), w = Y.useRef(a), p = u != null, b = Es(u), k = Es(i), E = Es(d), T = Y.useCallback(() => {
    if (!B.current || !W.current)
      return;
    const N = {
      placement: t,
      strategy: n,
      middleware: m
    };
    k.current && (N.platform = k.current), Q0(B.current, W.current, N).then((D) => {
      const G = {
        ...D,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: E.current !== !1
      };
      F.current && !_o(w.current, G) && (w.current = G, wo.flushSync(() => {
        g(G);
      }));
    });
  }, [m, t, n, k, E]);
  lo(() => {
    d === !1 && w.current.isPositioned && (w.current.isPositioned = !1, g((N) => ({
      ...N,
      isPositioned: !1
    })));
  }, [d]);
  const F = Y.useRef(!1);
  lo(() => (F.current = !0, () => {
    F.current = !1;
  }), []), lo(() => {
    if (O && (B.current = O), H && (W.current = H), O && H) {
      if (b.current)
        return b.current(O, H, T);
      T();
    }
  }, [O, H, T, b, p]);
  const P = Y.useMemo(() => ({
    reference: B,
    floating: W,
    setReference: v,
    setFloating: I
  }), [v, I]), C = Y.useMemo(() => ({
    reference: O,
    floating: H
  }), [O, H]), U = Y.useMemo(() => {
    const N = {
      position: n,
      left: 0,
      top: 0
    };
    if (!C.floating)
      return N;
    const D = Nu(C.floating, a.x), G = Nu(C.floating, a.y);
    return c ? {
      ...N,
      transform: "translate(" + D + "px, " + G + "px)",
      ...Pl(C.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: D,
      top: G
    };
  }, [n, c, C.floating, a.x, a.y]);
  return Y.useMemo(() => ({
    ...a,
    update: T,
    refs: P,
    elements: C,
    floatingStyles: U
  }), [a, T, P, C, U]);
}
const Al = (e, t) => ({
  ...X0(e),
  options: [e, t]
}), ep = (e, t) => ({
  ...z0(e),
  options: [e, t]
}), tp = (e, t) => ({
  ...Y0(e),
  options: [e, t]
}), np = (e, t) => ({
  ...J0(e),
  options: [e, t]
}), kl = {
  ...Y
}, rp = kl.useInsertionEffect, ip = rp || ((e) => e());
function Cl(e) {
  const t = Y.useRef(() => {
    if (En.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return ip(() => {
    t.current = e;
  }), Y.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var ac = typeof document < "u" ? bc : Pe;
let Ru = !1, op = 0;
const Bu = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + op++
);
function sp() {
  const [e, t] = Y.useState(() => Ru ? Bu() : void 0);
  return ac(() => {
    e == null && t(Bu());
  }, []), Y.useEffect(() => {
    Ru = !0;
  }, []), e;
}
const cp = kl.useId, up = cp || sp;
let Fi;
En.env.NODE_ENV !== "production" && (Fi = /* @__PURE__ */ new Set());
function ap() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const i = "Floating UI: " + n.join(" ");
  if (!((e = Fi) != null && e.has(i))) {
    var o;
    (o = Fi) == null || o.add(i), console.warn(i);
  }
}
function lp() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const i = "Floating UI: " + n.join(" ");
  if (!((e = Fi) != null && e.has(i))) {
    var o;
    (o = Fi) == null || o.add(i), console.error(i);
  }
}
function fp() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((i) => i(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((i) => i !== n)) || []);
    }
  };
}
const dp = /* @__PURE__ */ Y.createContext(null), hp = /* @__PURE__ */ Y.createContext(null), pp = () => {
  var e;
  return ((e = Y.useContext(dp)) == null ? void 0 : e.id) || null;
}, gp = () => Y.useContext(hp), mp = "data-floating-ui-focusable";
function wp(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, i = up(), o = Y.useRef({}), [s] = Y.useState(() => fp()), c = pp() != null;
  if (En.env.NODE_ENV !== "production") {
    const h = r.reference;
    h && !at(h) && lp("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [u, d] = Y.useState(r.reference), a = Cl((h, S, _) => {
    o.current.openEvent = h ? S : void 0, s.emit("openchange", {
      open: h,
      event: S,
      reason: _,
      nested: c
    }), n == null || n(h, S, _);
  }), g = Y.useMemo(() => ({
    setPositionReference: d
  }), []), m = Y.useMemo(() => ({
    reference: u || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [u, r.reference, r.floating]);
  return Y.useMemo(() => ({
    dataRef: o,
    open: t,
    onOpenChange: a,
    elements: m,
    events: s,
    floatingId: i,
    refs: g
  }), [t, a, m, s, i, g]);
}
function yp(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = wp({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, i = r.elements, [o, s] = Y.useState(null), [c, u] = Y.useState(null), a = (i == null ? void 0 : i.reference) || o, g = Y.useRef(null), m = gp();
  ac(() => {
    a && (g.current = a);
  }, [a]);
  const h = Z0({
    ...e,
    elements: {
      ...i,
      ...c && {
        reference: c
      }
    }
  }), S = Y.useCallback((I) => {
    const O = at(I) ? {
      getBoundingClientRect: () => I.getBoundingClientRect(),
      contextElement: I
    } : I;
    u(O), h.refs.setReference(O);
  }, [h.refs]), _ = Y.useCallback((I) => {
    (at(I) || I === null) && (g.current = I, s(I)), (at(h.refs.reference.current) || h.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    I !== null && !at(I)) && h.refs.setReference(I);
  }, [h.refs]), A = Y.useMemo(() => ({
    ...h.refs,
    setReference: _,
    setPositionReference: S,
    domReference: g
  }), [h.refs, _, S]), L = Y.useMemo(() => ({
    ...h.elements,
    domReference: a
  }), [h.elements, a]), v = Y.useMemo(() => ({
    ...h,
    ...r,
    refs: A,
    elements: L,
    nodeId: t
  }), [h, A, L, t, r]);
  return ac(() => {
    r.dataRef.current.floatingContext = v;
    const I = m == null ? void 0 : m.nodesRef.current.find((O) => O.id === t);
    I && (I.context = v);
  }), Y.useMemo(() => ({
    ...h,
    context: v,
    refs: A,
    elements: L
  }), [h, A, L, v]);
}
const Lu = "active", Uu = "selected";
function vs(e, t, n) {
  const r = /* @__PURE__ */ new Map(), i = n === "item";
  let o = e;
  if (i && e) {
    const {
      [Lu]: s,
      [Uu]: c,
      ...u
    } = e;
    o = u;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [mp]: ""
    },
    ...o,
    ...t.map((s) => {
      const c = s ? s[n] : null;
      return typeof c == "function" ? e ? c(e) : null : c;
    }).concat(e).reduce((s, c) => (c && Object.entries(c).forEach((u) => {
      let [d, a] = u;
      if (!(i && [Lu, Uu].includes(d)))
        if (d.indexOf("on") === 0) {
          if (r.has(d) || r.set(d, []), typeof a == "function") {
            var g;
            (g = r.get(d)) == null || g.push(a), s[d] = function() {
              for (var m, h = arguments.length, S = new Array(h), _ = 0; _ < h; _++)
                S[_] = arguments[_];
              return (m = r.get(d)) == null ? void 0 : m.map((A) => A(...S)).find((A) => A !== void 0);
            };
          }
        } else
          s[d] = a;
    }), s), {})
  };
}
function Ep(e) {
  e === void 0 && (e = []);
  const t = e.map((c) => c == null ? void 0 : c.reference), n = e.map((c) => c == null ? void 0 : c.floating), r = e.map((c) => c == null ? void 0 : c.item), i = Y.useCallback(
    (c) => vs(c, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = Y.useCallback(
    (c) => vs(c, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), s = Y.useCallback(
    (c) => vs(c, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return Y.useMemo(() => ({
    getReferenceProps: i,
    getFloatingProps: o,
    getItemProps: s
  }), [i, o, s]);
}
function $u(e, t) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: t
      }
    }
  };
}
const vp = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: i,
      offset: o = 0,
      index: s = 0,
      minItemsVisible: c = 4,
      referenceOverflowThreshold: u = 0,
      scrollRef: d,
      ...a
    } = ii(e, t), {
      rects: g,
      elements: {
        floating: m
      }
    } = t, h = n.current[s], S = (d == null ? void 0 : d.current) || m, _ = m.clientTop || S.clientTop, A = m.clientTop !== 0, L = S.clientTop !== 0, v = m === S;
    if (En.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || ap('`placement` side must be "bottom" when using the `inner`', "middleware.")), !h)
      return {};
    const I = {
      ...t,
      ...await Al(-h.offsetTop - m.clientTop - g.reference.height / 2 - h.offsetHeight / 2 - o).fn(t)
    }, O = await ys($u(I, S.scrollHeight + _ + m.clientTop), a), H = await ys(I, {
      ...a,
      elementContext: "reference"
    }), B = ct(0, O.top), W = I.y + B, w = S.scrollHeight > S.clientHeight, b = (w ? (k) => k : Ci)(ct(0, S.scrollHeight + (A && v || L ? _ * 2 : 0) - B - ct(0, O.bottom)));
    if (S.style.maxHeight = b + "px", S.scrollTop = B, i) {
      const k = w && S.offsetHeight < h.offsetHeight * c - 1 || H.top >= -u || H.bottom >= -u;
      wo.flushSync(() => i(k));
    }
    return r && (r.current = await ys($u({
      ...I,
      y: W
    }, S.offsetHeight + _ + m.clientTop), a)), {
      y: W
    };
  }
});
function bp(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: i = !0,
    overflowRef: o,
    scrollRef: s,
    onChange: c
  } = t, u = Cl(c), d = Y.useRef(!1), a = Y.useRef(null), g = Y.useRef(null);
  Y.useEffect(() => {
    if (!i) return;
    function h(_) {
      if (_.ctrlKey || !S || o.current == null)
        return;
      const A = _.deltaY, L = o.current.top >= -0.5, v = o.current.bottom >= -0.5, I = S.scrollHeight - S.clientHeight, O = A < 0 ? -1 : 1, H = A < 0 ? "max" : "min";
      S.scrollHeight <= S.clientHeight || (!L && A > 0 || !v && A < 0 ? (_.preventDefault(), wo.flushSync(() => {
        u((B) => B + Math[H](A, I * O));
      })) : /firefox/i.test(w0()) && (S.scrollTop += A));
    }
    const S = (s == null ? void 0 : s.current) || r.floating;
    if (n && S)
      return S.addEventListener("wheel", h), requestAnimationFrame(() => {
        a.current = S.scrollTop, o.current != null && (g.current = {
          ...o.current
        });
      }), () => {
        a.current = null, g.current = null, S.removeEventListener("wheel", h);
      };
  }, [i, n, r.floating, o, s, u]);
  const m = Y.useMemo(() => ({
    onKeyDown() {
      d.current = !0;
    },
    onWheel() {
      d.current = !1;
    },
    onPointerMove() {
      d.current = !1;
    },
    onScroll() {
      const h = (s == null ? void 0 : s.current) || r.floating;
      if (!(!o.current || !h || !d.current)) {
        if (a.current !== null) {
          const S = h.scrollTop - a.current;
          (o.current.bottom < -0.5 && S < -1 || o.current.top < -0.5 && S > 1) && wo.flushSync(() => u((_) => _ + S));
        }
        requestAnimationFrame(() => {
          a.current = h.scrollTop;
        });
      }
    }
  }), [r.floating, u, o, s]);
  return Y.useMemo(() => i ? {
    floating: m
  } : {}, [i, m]);
}
let oi = rt({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
oi.displayName = "FloatingContext";
let Nc = rt(null);
Nc.displayName = "PlacementContext";
function Sp(e) {
  return we(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function Tp() {
  return Ne(oi).setReference;
}
function _p() {
  return Ne(oi).getReferenceProps;
}
function Ip() {
  let { getFloatingProps: e, slot: t } = Ne(oi);
  return ve((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function xp(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = Ne(Nc), n = we(() => e, [JSON.stringify(e, (i, o) => {
    var s;
    return (s = o == null ? void 0 : o.outerHTML) != null ? s : o;
  })]);
  Te(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = Ne(oi);
  return we(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let Hu = 4;
function Op({ children: e, enabled: t = !0 }) {
  let [n, r] = ue(null), [i, o] = ue(0), s = oe(null), [c, u] = ue(null);
  Pp(c);
  let d = t && n !== null && c !== null, { to: a = "bottom", gap: g = 0, offset: m = 0, padding: h = 0, inner: S } = Ap(n, c), [_, A = "center"] = a.split(" ");
  Te(() => {
    d && o(0);
  }, [d]);
  let { refs: L, floatingStyles: v, context: I } = yp({ open: d, placement: _ === "selection" ? A === "center" ? "bottom" : `bottom-${A}` : A === "center" ? `${_}` : `${_}-${A}`, strategy: "absolute", transform: !1, middleware: [Al({ mainAxis: _ === "selection" ? 0 : g, crossAxis: m }), ep({ padding: h }), _ !== "selection" && tp({ padding: h }), _ === "selection" && S ? vp({ ...S, padding: h, overflowRef: s, offset: i, minItemsVisible: Hu, referenceOverflowThreshold: h, onFallbackChange(k) {
    var E, T;
    if (!k) return;
    let F = I.elements.floating;
    if (!F) return;
    let P = parseFloat(getComputedStyle(F).scrollPaddingBottom) || 0, C = Math.min(Hu, F.childElementCount), U = 0, N = 0;
    for (let D of (T = (E = I.elements.floating) == null ? void 0 : E.childNodes) != null ? T : []) if (D instanceof HTMLElement) {
      let G = D.offsetTop, q = G + D.clientHeight + P, Z = F.scrollTop, te = Z + F.clientHeight;
      if (G >= Z && q <= te) C--;
      else {
        N = Math.max(0, Math.min(q, te) - Math.max(G, Z)), U = D.clientHeight;
        break;
      }
    }
    C >= 1 && o((D) => {
      let G = U * C - N + P;
      return D >= G ? D : G;
    });
  } }) : null, np({ padding: h, apply({ availableWidth: k, availableHeight: E, elements: T }) {
    Object.assign(T.floating.style, { overflow: "auto", maxWidth: `${k}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${E}px)` });
  } })].filter(Boolean), whileElementsMounted: q0 }), [O = _, H = A] = I.placement.split("-");
  _ === "selection" && (O = "selection");
  let B = we(() => ({ anchor: [O, H].filter(Boolean).join(" ") }), [O, H]), W = bp(I, { overflowRef: s, onChange: o }), { getReferenceProps: w, getFloatingProps: p } = Ep([W]), b = ne((k) => {
    u(k), L.setFloating(k);
  });
  return Y.createElement(Nc.Provider, { value: r }, Y.createElement(oi.Provider, { value: { setFloating: b, setReference: L.setReference, styles: v, getReferenceProps: w, getFloatingProps: p, slot: B } }, e));
}
function Pp(e) {
  Te(() => {
    if (!e) return;
    let t = new MutationObserver(() => {
      let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
      if (isNaN(r)) return;
      let i = parseInt(n);
      isNaN(i) || r !== i && (e.style.maxHeight = `${Math.ceil(r)}px`);
    });
    return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), () => {
      t.disconnect();
    };
  }, [e]);
}
function Ap(e, t) {
  var n, r, i;
  let o = bs((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), s = bs((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), c = bs((i = e == null ? void 0 : e.padding) != null ? i : "var(--anchor-padding, 0)", t);
  return { ...e, gap: o, offset: s, padding: c };
}
function bs(e, t, n = void 0) {
  let r = ei(), i = ne((u, d) => {
    if (u == null) return [n, null];
    if (typeof u == "number") return [u, null];
    if (typeof u == "string") {
      if (!d) return [n, null];
      let a = Mu(u, d);
      return [a, (g) => {
        let m = Fl(u);
        {
          let h = m.map((S) => window.getComputedStyle(d).getPropertyValue(S));
          r.requestAnimationFrame(function S() {
            r.nextFrame(S);
            let _ = !1;
            for (let [L, v] of m.entries()) {
              let I = window.getComputedStyle(d).getPropertyValue(v);
              if (h[L] !== I) {
                h[L] = I, _ = !0;
                break;
              }
            }
            if (!_) return;
            let A = Mu(u, d);
            a !== A && (g(A), a = A);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), o = we(() => i(e, t)[0], [e, t]), [s = o, c] = ue();
  return Te(() => {
    let [u, d] = i(e, t);
    if (c(u), !!d) return d(c);
  }, [e, t]), s;
}
function Fl(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), i = t[1].slice(n + 1).trim();
    return i ? [r, ...Fl(i)] : [r];
  }
  return [];
}
function Mu(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
let Ho = rt(null);
Ho.displayName = "OpenClosedContext";
var mt = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(mt || {});
function Hi() {
  return Ne(Ho);
}
function Nl({ value: e, children: t }) {
  return Q.createElement(Ho.Provider, { value: e }, t);
}
function kp({ children: e }) {
  return Q.createElement(Ho.Provider, { value: null }, e);
}
function Cp(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Bn = [];
Cp(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || Bn[0] === t.target) return;
    let n = t.target;
    n = n.closest(bo), Bn.unshift(n ?? t.target), Bn = Bn.filter((r) => r != null && r.isConnected), Bn.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Fp(e) {
  throw new Error("Unexpected object: " + e);
}
var ut = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ut || {});
function Ss(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), i = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let o = 0; o < n.length; ++o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 1: {
      i === -1 && (i = n.length);
      for (let o = i - 1; o >= 0; --o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 2: {
      for (let o = i + 1; o < n.length; ++o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 3: {
      for (let o = n.length - 1; o >= 0; --o) if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 4: {
      for (let o = 0; o < n.length; ++o) if (t.resolveId(n[o], o, n) === e.id) return o;
      return r;
    }
    case 5:
      return null;
    default:
      Fp(e);
  }
}
function Rl(e) {
  let t = ne(e), n = oe(!1);
  Pe(() => (n.current = !1, () => {
    n.current = !0, No(() => {
      n.current && t();
    });
  }), [t]);
}
function Np() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Y ? ((t) => t.useSyncExternalStore)(Y)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Mi() {
  let e = Np(), [t, n] = Y.useState(ir.isHandoffComplete);
  return t && ir.isHandoffComplete === !1 && n(!1), Y.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), Y.useEffect(() => ir.handoff(), []), e ? !1 : t;
}
let Bl = rt(!1);
function Rp() {
  return Ne(Bl);
}
function Du(e) {
  return Q.createElement(Bl.Provider, { value: e.force }, e.children);
}
function Bp(e) {
  let t = Rp(), n = Ne(Ul), r = ni(e), [i, o] = ue(() => {
    var s;
    if (!t && n !== null) return (s = n.current) != null ? s : null;
    if (ir.isServer) return null;
    let c = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (c) return c;
    if (r === null) return null;
    let u = r.createElement("div");
    return u.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(u);
  });
  return Pe(() => {
    i !== null && (r != null && r.body.contains(i) || r == null || r.body.appendChild(i));
  }, [i, r]), Pe(() => {
    t || n !== null && o(n.current);
  }, [n, o, t]), i;
}
let Ll = ze, Lp = Re(function(e, t) {
  let n = e, r = oe(null), i = wt(Fh((g) => {
    r.current = g;
  }), t), o = ni(r), s = Bp(r), [c] = ue(() => {
    var g;
    return ir.isServer ? null : (g = o == null ? void 0 : o.createElement("div")) != null ? g : null;
  }), u = Ne(lc), d = Mi();
  Te(() => {
    !s || !c || s.contains(c) || (c.setAttribute("data-headlessui-portal", ""), s.appendChild(c));
  }, [s, c]), Te(() => {
    if (c && u) return u.register(c);
  }, [u, c]), Rl(() => {
    var g;
    !s || !c || (c instanceof Node && s.contains(c) && s.removeChild(c), s.childNodes.length <= 0 && ((g = s.parentElement) == null || g.removeChild(s)));
  });
  let a = De();
  return d ? !s || !c ? null : Ad(a({ ourProps: { ref: i }, theirProps: n, slot: {}, defaultTag: Ll, name: "Portal" }), c) : null;
});
function Up(e, t) {
  let n = wt(t), { enabled: r = !0, ...i } = e, o = De();
  return r ? Q.createElement(Lp, { ...i, ref: n }) : o({ ourProps: { ref: n }, theirProps: i, slot: {}, defaultTag: Ll, name: "Portal" });
}
let $p = ze, Ul = rt(null);
function Hp(e, t) {
  let { target: n, ...r } = e, i = { ref: wt(t) }, o = De();
  return Q.createElement(Ul.Provider, { value: n }, o({ ourProps: i, theirProps: r, defaultTag: $p, name: "Popover.Group" }));
}
let lc = rt(null);
function Mp() {
  let e = Ne(lc), t = oe([]), n = ne((o) => (t.current.push(o), e && e.register(o), () => r(o))), r = ne((o) => {
    let s = t.current.indexOf(o);
    s !== -1 && t.current.splice(s, 1), e && e.unregister(o);
  }), i = we(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, we(() => function({ children: o }) {
    return Q.createElement(lc.Provider, { value: i }, o);
  }, [i])];
}
let Dp = Re(Up), $l = Re(Hp), Hl = Object.assign(Dp, { Group: $l });
function jp(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = ti(e, "escape");
  gl(t, "keydown", (i) => {
    r && (i.defaultPrevented || i.key === Xe.Escape && n(i));
  });
}
function Wp() {
  var e;
  let [t] = ue(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = ue((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return Te(() => {
    if (!t) return;
    function i(o) {
      r(o.matches);
    }
    return t.addEventListener("change", i), () => t.removeEventListener("change", i);
  }, [t]), n;
}
function Kp({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = ni(n), i = ne(() => {
    var o, s;
    let c = [];
    for (let u of e) u !== null && (u instanceof HTMLElement ? c.push(u) : "current" in u && u.current instanceof HTMLElement && c.push(u.current));
    if (t != null && t.current) for (let u of t.current) c.push(u);
    for (let u of (o = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? o : []) u !== document.body && u !== document.head && u instanceof HTMLElement && u.id !== "headlessui-portal-root" && (n && (u.contains(n) || u.contains((s = n == null ? void 0 : n.getRootNode()) == null ? void 0 : s.host)) || c.some((d) => u.contains(d)) || c.push(u));
    return c;
  });
  return { resolveContainers: i, contains: ne((o) => i().some((s) => s.contains(o))) };
}
let Ml = rt(null);
function ju({ children: e, node: t }) {
  let [n, r] = ue(null), i = Dl(t ?? n);
  return Q.createElement(Ml.Provider, { value: i }, e, i === null && Q.createElement(rc, { features: vo.Hidden, ref: (o) => {
    var s, c;
    if (o) {
      for (let u of (c = (s = lr(o)) == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null ? c : []) if (u !== document.body && u !== document.head && u instanceof HTMLElement && u != null && u.contains(o)) {
        r(u);
        break;
      }
    }
  } }));
}
function Dl(e = null) {
  var t;
  return (t = Ne(Ml)) != null ? t : e;
}
function Rc() {
  let e = oe(!1);
  return Te(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var yi = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(yi || {});
function Vp() {
  let e = oe(0);
  return hl(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function jl(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let Gp = "div";
var Zn = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(Zn || {});
function qp(e, t) {
  let n = oe(null), r = wt(n, t), { initialFocus: i, initialFocusFallback: o, containers: s, features: c = 15, ...u } = e;
  Mi() || (c = 0);
  let d = ni(n);
  Jp(c, { ownerDocument: d });
  let a = Qp(c, { ownerDocument: d, container: n, initialFocus: i, initialFocusFallback: o });
  Zp(c, { ownerDocument: d, container: n, containers: s, previousActiveElement: a });
  let g = Vp(), m = ne((v) => {
    let I = n.current;
    I && ((O) => O())(() => {
      nn(g.current, { [yi.Forwards]: () => {
        jr(I, Mt.First, { skipElements: [v.relatedTarget, o] });
      }, [yi.Backwards]: () => {
        jr(I, Mt.Last, { skipElements: [v.relatedTarget, o] });
      } });
    });
  }), h = ti(!!(c & 2), "focus-trap#tab-lock"), S = ei(), _ = oe(!1), A = { ref: r, onKeyDown(v) {
    v.key == "Tab" && (_.current = !0, S.requestAnimationFrame(() => {
      _.current = !1;
    }));
  }, onBlur(v) {
    if (!(c & 4)) return;
    let I = jl(s);
    n.current instanceof HTMLElement && I.add(n.current);
    let O = v.relatedTarget;
    O instanceof HTMLElement && O.dataset.headlessuiFocusGuard !== "true" && (Wl(I, O) || (_.current ? jr(n.current, nn(g.current, { [yi.Forwards]: () => Mt.Next, [yi.Backwards]: () => Mt.Previous }) | Mt.WrapAround, { relativeTo: v.target }) : v.target instanceof HTMLElement && en(v.target)));
  } }, L = De();
  return Q.createElement(Q.Fragment, null, h && Q.createElement(rc, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: m, features: vo.Focusable }), L({ ourProps: A, theirProps: u, defaultTag: Gp, name: "FocusTrap" }), h && Q.createElement(rc, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: m, features: vo.Focusable }));
}
let Xp = Re(qp), zp = Object.assign(Xp, { features: Zn });
function Yp(e = !0) {
  let t = oe(Bn.slice());
  return Ac(([n], [r]) => {
    r === !0 && n === !1 && No(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = Bn.slice());
  }, [e, Bn, t]), ne(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function Jp(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = Yp(n);
  Ac(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && en(r());
  }, [n]), Rl(() => {
    n && en(r());
  });
}
function Qp(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: i }) {
  let o = oe(null), s = ti(!!(e & 1), "focus-trap#initial-focus"), c = Rc();
  return Ac(() => {
    if (e === 0) return;
    if (!s) {
      i != null && i.current && en(i.current);
      return;
    }
    let u = n.current;
    u && No(() => {
      if (!c.current) return;
      let d = t == null ? void 0 : t.activeElement;
      if (r != null && r.current) {
        if ((r == null ? void 0 : r.current) === d) {
          o.current = d;
          return;
        }
      } else if (u.contains(d)) {
        o.current = d;
        return;
      }
      if (r != null && r.current) en(r.current);
      else {
        if (e & 16) {
          if (jr(u, Mt.First | Mt.AutoFocus) !== oc.Error) return;
        } else if (jr(u, Mt.First) !== oc.Error) return;
        if (i != null && i.current && (en(i.current), (t == null ? void 0 : t.activeElement) === i.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      o.current = t == null ? void 0 : t.activeElement;
    });
  }, [i, s, e]), o;
}
function Zp(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: i }) {
  let o = Rc(), s = !!(e & 4);
  gl(t == null ? void 0 : t.defaultView, "focus", (c) => {
    if (!s || !o.current) return;
    let u = jl(r);
    n.current instanceof HTMLElement && u.add(n.current);
    let d = i.current;
    if (!d) return;
    let a = c.target;
    a && a instanceof HTMLElement ? Wl(u, a) ? (i.current = a, en(a)) : (c.preventDefault(), c.stopPropagation(), en(d)) : en(i.current);
  }, !0);
}
function Wl(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function Kl(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : Gl) !== ze || Q.Children.count(e.children) === 1;
}
let Mo = rt(null);
Mo.displayName = "TransitionContext";
var eg = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(eg || {});
function tg() {
  let e = Ne(Mo);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function ng() {
  let e = Ne(Do);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Do = rt(null);
Do.displayName = "NestingContext";
function jo(e) {
  return "children" in e ? jo(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Vl(e, t) {
  let n = fr(e), r = oe([]), i = Rc(), o = ei(), s = ne((h, S = Ln.Hidden) => {
    let _ = r.current.findIndex(({ el: A }) => A === h);
    _ !== -1 && (nn(S, { [Ln.Unmount]() {
      r.current.splice(_, 1);
    }, [Ln.Hidden]() {
      r.current[_].state = "hidden";
    } }), o.microTask(() => {
      var A;
      !jo(r) && i.current && ((A = n.current) == null || A.call(n));
    }));
  }), c = ne((h) => {
    let S = r.current.find(({ el: _ }) => _ === h);
    return S ? S.state !== "visible" && (S.state = "visible") : r.current.push({ el: h, state: "visible" }), () => s(h, Ln.Unmount);
  }), u = oe([]), d = oe(Promise.resolve()), a = oe({ enter: [], leave: [] }), g = ne((h, S, _) => {
    u.current.splice(0), t && (t.chains.current[S] = t.chains.current[S].filter(([A]) => A !== h)), t == null || t.chains.current[S].push([h, new Promise((A) => {
      u.current.push(A);
    })]), t == null || t.chains.current[S].push([h, new Promise((A) => {
      Promise.all(a.current[S].map(([L, v]) => v)).then(() => A());
    })]), S === "enter" ? d.current = d.current.then(() => t == null ? void 0 : t.wait.current).then(() => _(S)) : _(S);
  }), m = ne((h, S, _) => {
    Promise.all(a.current[S].splice(0).map(([A, L]) => L)).then(() => {
      var A;
      (A = u.current.shift()) == null || A();
    }).then(() => _(S));
  });
  return we(() => ({ children: r, register: c, unregister: s, onStart: g, onStop: m, wait: d, chains: a }), [c, s, r, g, m, a, d]);
}
let Gl = ze, ql = Xr.RenderStrategy;
function rg(e, t) {
  var n, r;
  let { transition: i = !0, beforeEnter: o, afterEnter: s, beforeLeave: c, afterLeave: u, enter: d, enterFrom: a, enterTo: g, entered: m, leave: h, leaveFrom: S, leaveTo: _, ...A } = e, [L, v] = ue(null), I = oe(null), O = Kl(e), H = wt(...O ? [I, t, v] : t === null ? [] : [t]), B = (n = A.unmount) == null || n ? Ln.Unmount : Ln.Hidden, { show: W, appear: w, initial: p } = tg(), [b, k] = ue(W ? "visible" : "hidden"), E = ng(), { register: T, unregister: F } = E;
  Te(() => T(I), [T, I]), Te(() => {
    if (B === Ln.Hidden && I.current) {
      if (W && b !== "visible") {
        k("visible");
        return;
      }
      return nn(b, { hidden: () => F(I), visible: () => T(I) });
    }
  }, [b, I, T, F, W, B]);
  let P = Mi();
  Te(() => {
    if (O && P && b === "visible" && I.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [I, b, P, O]);
  let C = p && !w, U = w && W && p, N = oe(!1), D = Vl(() => {
    N.current || (k("hidden"), F(I));
  }, E), G = ne((be) => {
    N.current = !0;
    let Qe = be ? "enter" : "leave";
    D.onStart(I, Qe, (ot) => {
      ot === "enter" ? o == null || o() : ot === "leave" && (c == null || c());
    });
  }), q = ne((be) => {
    let Qe = be ? "enter" : "leave";
    N.current = !1, D.onStop(I, Qe, (ot) => {
      ot === "enter" ? s == null || s() : ot === "leave" && (u == null || u());
    }), Qe === "leave" && !jo(D) && (k("hidden"), F(I));
  });
  Pe(() => {
    O && i || (G(W), q(W));
  }, [W, O, i]);
  let Z = !(!i || !O || !P || C), [, te] = yl(Z, L, W, { start: G, end: q }), ie = Qn({ ref: H, className: ((r = nc(A.className, U && d, U && a, te.enter && d, te.enter && te.closed && a, te.enter && !te.closed && g, te.leave && h, te.leave && !te.closed && S, te.leave && te.closed && _, !te.transition && W && m)) == null ? void 0 : r.trim()) || void 0, ...wl(te) }), J = 0;
  b === "visible" && (J |= mt.Open), b === "hidden" && (J |= mt.Closed), te.enter && (J |= mt.Opening), te.leave && (J |= mt.Closing);
  let le = De();
  return Q.createElement(Do.Provider, { value: D }, Q.createElement(Nl, { value: J }, le({ ourProps: ie, theirProps: A, defaultTag: Gl, features: ql, visible: b === "visible", name: "Transition.Child" })));
}
function ig(e, t) {
  let { show: n, appear: r = !1, unmount: i = !0, ...o } = e, s = oe(null), c = Kl(e), u = wt(...c ? [s, t] : t === null ? [] : [t]);
  Mi();
  let d = Hi();
  if (n === void 0 && d !== null && (n = (d & mt.Open) === mt.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [a, g] = ue(n ? "visible" : "hidden"), m = Vl(() => {
    n || g("hidden");
  }), [h, S] = ue(!0), _ = oe([n]);
  Te(() => {
    h !== !1 && _.current[_.current.length - 1] !== n && (_.current.push(n), S(!1));
  }, [_, n]);
  let A = we(() => ({ show: n, appear: r, initial: h }), [n, r, h]);
  Te(() => {
    n ? g("visible") : !jo(m) && s.current !== null && g("hidden");
  }, [n, m]);
  let L = { unmount: i }, v = ne(() => {
    var H;
    h && S(!1), (H = e.beforeEnter) == null || H.call(e);
  }), I = ne(() => {
    var H;
    h && S(!1), (H = e.beforeLeave) == null || H.call(e);
  }), O = De();
  return Q.createElement(Do.Provider, { value: m }, Q.createElement(Mo.Provider, { value: A }, O({ ourProps: { ...L, as: ze, children: Q.createElement(Xl, { ref: u, ...L, ...o, beforeEnter: v, beforeLeave: I }) }, theirProps: {}, defaultTag: ze, features: ql, visible: a === "visible", name: "Transition" })));
}
function og(e, t) {
  let n = Ne(Mo) !== null, r = Hi() !== null;
  return Q.createElement(Q.Fragment, null, !n && r ? Q.createElement(fc, { ref: t, ...e }) : Q.createElement(Xl, { ref: t, ...e }));
}
let fc = Re(ig), Xl = Re(rg), Bc = Re(og), Oi = Object.assign(fc, { Child: Bc, Root: fc });
var sg = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(sg || {}), cg = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(cg || {});
let ug = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Lc = rt(null);
Lc.displayName = "DialogContext";
function Wo(e) {
  let t = Ne(Lc);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Wo), n;
  }
  return t;
}
function ag(e, t) {
  return nn(t.type, ug, e, t);
}
let Wu = Re(function(e, t) {
  let n = on(), { id: r = `headlessui-dialog-${n}`, open: i, onClose: o, initialFocus: s, role: c = "dialog", autoFocus: u = !0, __demoMode: d = !1, unmount: a = !1, ...g } = e, m = oe(!1);
  c = function() {
    return c === "dialog" || c === "alertdialog" ? c : (m.current || (m.current = !0, console.warn(`Invalid role [${c}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let h = Hi();
  i === void 0 && h !== null && (i = (h & mt.Open) === mt.Open);
  let S = oe(null), _ = wt(S, t), A = ni(S), L = i ? 0 : 1, [v, I] = Sc(ag, { titleId: null, descriptionId: null, panelRef: Pd() }), O = ne(() => o(!1)), H = ne((q) => I({ type: 0, id: q })), B = Mi() ? L === 0 : !1, [W, w] = Mp(), p = { get current() {
    var q;
    return (q = v.panelRef.current) != null ? q : S.current;
  } }, b = Dl(), { resolveContainers: k } = Kp({ mainTreeNode: b, portals: W, defaultContainers: [p] }), E = h !== null ? (h & mt.Closing) === mt.Closing : !1;
  cl(d || E ? !1 : B, { allowed: ne(() => {
    var q, Z;
    return [(Z = (q = S.current) == null ? void 0 : q.closest("[data-headlessui-portal]")) != null ? Z : null];
  }), disallowed: ne(() => {
    var q;
    return [(q = b == null ? void 0 : b.closest("body > *:not(#headlessui-portal-root)")) != null ? q : null];
  }) }), pl(B, k, (q) => {
    q.preventDefault(), O();
  }), jp(B, A == null ? void 0 : A.defaultView, (q) => {
    q.preventDefault(), q.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), O();
  }), ml(d || E ? !1 : B, A, k), ul(B, S, O);
  let [T, F] = rl(), P = we(() => [{ dialogState: L, close: O, setTitleId: H, unmount: a }, v], [L, v, O, H, a]), C = we(() => ({ open: L === 0 }), [L]), U = { ref: _, id: r, role: c, tabIndex: -1, "aria-modal": d ? void 0 : L === 0 ? !0 : void 0, "aria-labelledby": v.titleId, "aria-describedby": T, unmount: a }, N = !Wp(), D = Zn.None;
  B && !d && (D |= Zn.RestoreFocus, D |= Zn.TabLock, u && (D |= Zn.AutoFocus), N && (D |= Zn.InitialFocus));
  let G = De();
  return Q.createElement(kp, null, Q.createElement(Du, { force: !0 }, Q.createElement(Hl, null, Q.createElement(Lc.Provider, { value: P }, Q.createElement($l, { target: S }, Q.createElement(Du, { force: !1 }, Q.createElement(F, { slot: C }, Q.createElement(w, null, Q.createElement(zp, { initialFocus: s, initialFocusFallback: S, containers: k, features: D }, Q.createElement(jh, { value: O }, G({ ourProps: U, theirProps: g, slot: C, defaultTag: lg, features: fg, visible: L === 0, name: "Dialog" })))))))))));
}), lg = "div", fg = Xr.RenderStrategy | Xr.Static;
function dg(e, t) {
  let { transition: n = !1, open: r, ...i } = e, o = Hi(), s = e.hasOwnProperty("open") || o !== null, c = e.hasOwnProperty("onClose");
  if (!s && !c) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!s) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!c) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!o && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !i.static ? Q.createElement(ju, null, Q.createElement(Oi, { show: r, transition: n, unmount: i.unmount }, Q.createElement(Wu, { ref: t, ...i }))) : Q.createElement(ju, null, Q.createElement(Wu, { ref: t, open: r, ...i }));
}
let hg = "div";
function pg(e, t) {
  let n = on(), { id: r = `headlessui-dialog-panel-${n}`, transition: i = !1, ...o } = e, [{ dialogState: s, unmount: c }, u] = Wo("Dialog.Panel"), d = wt(t, u.panelRef), a = we(() => ({ open: s === 0 }), [s]), g = ne((A) => {
    A.stopPropagation();
  }), m = { ref: d, id: r, onClick: g }, h = i ? Bc : ze, S = i ? { unmount: c } : {}, _ = De();
  return Q.createElement(h, { ...S }, _({ ourProps: m, theirProps: o, slot: a, defaultTag: hg, name: "Dialog.Panel" }));
}
let gg = "div";
function mg(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: i, unmount: o }] = Wo("Dialog.Backdrop"), s = we(() => ({ open: i === 0 }), [i]), c = { ref: t, "aria-hidden": !0 }, u = n ? Bc : ze, d = n ? { unmount: o } : {}, a = De();
  return Q.createElement(u, { ...d }, a({ ourProps: c, theirProps: r, slot: s, defaultTag: gg, name: "Dialog.Backdrop" }));
}
let wg = "h2";
function yg(e, t) {
  let n = on(), { id: r = `headlessui-dialog-title-${n}`, ...i } = e, [{ dialogState: o, setTitleId: s }] = Wo("Dialog.Title"), c = wt(t);
  Pe(() => (s(r), () => s(null)), [r, s]);
  let u = we(() => ({ open: o === 0 }), [o]), d = { ref: c, id: r };
  return De()({ ourProps: d, theirProps: i, slot: u, defaultTag: wg, name: "Dialog.Title" });
}
let Eg = Re(dg), vg = Re(pg);
Re(mg);
let bg = Re(yg), Ts = Object.assign(Eg, { Panel: vg, Title: bg, Description: Lh });
function Sg(e, t) {
  let n = oe({ left: 0, top: 0 });
  if (Te(() => {
    if (!t) return;
    let i = t.getBoundingClientRect();
    i && (n.current = i);
  }, [e, t]), t == null || !e || t === document.activeElement) return !1;
  let r = t.getBoundingClientRect();
  return r.top !== n.current.top || r.left !== n.current.left;
}
let Ku = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Vu(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return r;
  let o = !1;
  for (let c of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) c.remove(), o = !0;
  let s = o ? (n = i.innerText) != null ? n : "" : r;
  return Ku.test(s) && (s = s.replace(Ku, "")), s;
}
function Tg(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((i) => {
      let o = document.getElementById(i);
      if (o) {
        let s = o.getAttribute("aria-label");
        return typeof s == "string" ? s.trim() : Vu(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return Vu(e).trim();
}
function _g(e) {
  let t = oe(""), n = oe("");
  return ne(() => {
    let r = e.current;
    if (!r) return "";
    let i = r.innerText;
    if (t.current === i) return n.current;
    let o = Tg(r).trim().toLowerCase();
    return t.current = i, n.current = o, o;
  });
}
var Ig = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ig || {}), xg = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(xg || {}), Og = ((e) => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e[e.SetButtonElement = 7] = "SetButtonElement", e[e.SetItemsElement = 8] = "SetItemsElement", e))(Og || {});
function _s(e, t = (n) => n) {
  let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, r = fl(t(e.items.slice()), (o) => o.dataRef.current.domRef.current), i = n ? r.indexOf(n) : null;
  return i === -1 && (i = null), { items: r, activeItemIndex: i };
}
let Pg = { 1(e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, 0(e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
}, 2: (e, t) => {
  var n, r, i, o, s;
  if (e.menuState === 1) return e;
  let c = { ...e, searchQuery: "", activationTrigger: (n = t.trigger) != null ? n : 1, __demoMode: !1 };
  if (t.focus === ut.Nothing) return { ...c, activeItemIndex: null };
  if (t.focus === ut.Specific) return { ...c, activeItemIndex: e.items.findIndex((a) => a.id === t.id) };
  if (t.focus === ut.Previous) {
    let a = e.activeItemIndex;
    if (a !== null) {
      let g = e.items[a].dataRef.current.domRef, m = Ss(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (h) => h.id, resolveDisabled: (h) => h.dataRef.current.disabled });
      if (m !== null) {
        let h = e.items[m].dataRef.current.domRef;
        if (((r = g.current) == null ? void 0 : r.previousElementSibling) === h.current || ((i = h.current) == null ? void 0 : i.previousElementSibling) === null) return { ...c, activeItemIndex: m };
      }
    }
  } else if (t.focus === ut.Next) {
    let a = e.activeItemIndex;
    if (a !== null) {
      let g = e.items[a].dataRef.current.domRef, m = Ss(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (h) => h.id, resolveDisabled: (h) => h.dataRef.current.disabled });
      if (m !== null) {
        let h = e.items[m].dataRef.current.domRef;
        if (((o = g.current) == null ? void 0 : o.nextElementSibling) === h.current || ((s = h.current) == null ? void 0 : s.nextElementSibling) === null) return { ...c, activeItemIndex: m };
      }
    }
  }
  let u = _s(e), d = Ss(t, { resolveItems: () => u.items, resolveActiveIndex: () => u.activeItemIndex, resolveId: (a) => a.id, resolveDisabled: (a) => a.dataRef.current.disabled });
  return { ...c, ...u, activeItemIndex: d };
}, 3: (e, t) => {
  let n = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + t.value.toLowerCase(), i = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((s) => {
    var c;
    return ((c = s.dataRef.current.textValue) == null ? void 0 : c.startsWith(r)) && !s.dataRef.current.disabled;
  }), o = i ? e.items.indexOf(i) : -1;
  return o === -1 || o === e.activeItemIndex ? { ...e, searchQuery: r } : { ...e, searchQuery: r, activeItemIndex: o, activationTrigger: 1 };
}, 4(e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, 5: (e, t) => {
  let n = _s(e, (r) => [...r, { id: t.id, dataRef: t.dataRef }]);
  return { ...e, ...n };
}, 6: (e, t) => {
  let n = _s(e, (r) => {
    let i = r.findIndex((o) => o.id === t.id);
    return i !== -1 && r.splice(i, 1), r;
  });
  return { ...e, ...n, activationTrigger: 1 };
}, 7: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 8: (e, t) => e.itemsElement === t.element ? e : { ...e, itemsElement: t.element } }, Uc = rt(null);
Uc.displayName = "MenuContext";
function Ko(e) {
  let t = Ne(Uc);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ko), n;
  }
  return t;
}
function Ag(e, t) {
  return nn(t.type, Pg, e, t);
}
let kg = ze;
function Cg(e, t) {
  let { __demoMode: n = !1, ...r } = e, i = Sc(Ag, { __demoMode: n, menuState: n ? 0 : 1, buttonElement: null, itemsElement: null, items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: o, itemsElement: s, buttonElement: c }, u] = i, d = wt(t);
  pl(o === 0, [c, s], (S, _) => {
    u({ type: 1 }), Pc(_, Oc.Loose) || (S.preventDefault(), c == null || c.focus());
  });
  let a = ne(() => {
    u({ type: 1 });
  }), g = we(() => ({ open: o === 0, close: a }), [o, a]), m = { ref: d }, h = De();
  return Q.createElement(Op, null, Q.createElement(Uc.Provider, { value: i }, Q.createElement(Nl, { value: nn(o, { 0: mt.Open, 1: mt.Closed }) }, h({ ourProps: m, theirProps: r, slot: g, defaultTag: kg, name: "Menu" }))));
}
let Fg = "button";
function Ng(e, t) {
  var n;
  let r = on(), { id: i = `headlessui-menu-button-${r}`, disabled: o = !1, autoFocus: s = !1, ...c } = e, [u, d] = Ko("Menu.Button"), a = _p(), g = wt(t, Tp(), ne((W) => d({ type: 7, element: W }))), m = ne((W) => {
    switch (W.key) {
      case Xe.Space:
      case Xe.Enter:
      case Xe.ArrowDown:
        W.preventDefault(), W.stopPropagation(), _i(() => d({ type: 0 })), d({ type: 2, focus: ut.First });
        break;
      case Xe.ArrowUp:
        W.preventDefault(), W.stopPropagation(), _i(() => d({ type: 0 })), d({ type: 2, focus: ut.Last });
        break;
    }
  }), h = ne((W) => {
    switch (W.key) {
      case Xe.Space:
        W.preventDefault();
        break;
    }
  }), S = ne((W) => {
    var w;
    if (kh(W.currentTarget)) return W.preventDefault();
    o || (u.menuState === 0 ? (_i(() => d({ type: 1 })), (w = u.buttonElement) == null || w.focus({ preventScroll: !0 })) : (W.preventDefault(), d({ type: 0 })));
  }), { isFocusVisible: _, focusProps: A } = gh({ autoFocus: s }), { isHovered: L, hoverProps: v } = ph({ isDisabled: o }), { pressed: I, pressProps: O } = bh({ disabled: o }), H = we(() => ({ open: u.menuState === 0, active: I || u.menuState === 0, disabled: o, hover: L, focus: _, autofocus: s }), [u, L, _, I, o, s]), B = el(a(), { ref: g, id: i, type: n0(e, u.buttonElement), "aria-haspopup": "menu", "aria-controls": (n = u.itemsElement) == null ? void 0 : n.id, "aria-expanded": u.menuState === 0, disabled: o || void 0, autoFocus: s, onKeyDown: m, onKeyUp: h, onClick: S }, A, v, O);
  return De()({ ourProps: B, theirProps: c, slot: H, defaultTag: Fg, name: "Menu.Button" });
}
let Rg = "div", Bg = Xr.RenderStrategy | Xr.Static;
function Lg(e, t) {
  var n, r;
  let i = on(), { id: o = `headlessui-menu-items-${i}`, anchor: s, portal: c = !1, modal: u = !0, transition: d = !1, ...a } = e, g = Sp(s), [m, h] = Ko("Menu.Items"), [S, _] = xp(g), A = Ip(), [L, v] = ue(null), I = wt(t, g ? S : null, ne((N) => h({ type: 8, element: N })), v), O = ni(m.itemsElement);
  g && (c = !0);
  let H = Hi(), [B, W] = yl(d, L, H !== null ? (H & mt.Open) === mt.Open : m.menuState === 0);
  ul(B, m.buttonElement, () => {
    h({ type: 1 });
  });
  let w = m.__demoMode ? !1 : u && m.menuState === 0;
  ml(w, O);
  let p = m.__demoMode ? !1 : u && m.menuState === 0;
  cl(p, { allowed: ve(() => [m.buttonElement, m.itemsElement], [m.buttonElement, m.itemsElement]) });
  let b = m.menuState !== 0, k = Sg(b, m.buttonElement) ? !1 : B;
  Pe(() => {
    let N = m.itemsElement;
    N && m.menuState === 0 && N !== (O == null ? void 0 : O.activeElement) && N.focus({ preventScroll: !0 });
  }, [m.menuState, m.itemsElement, O]), p0(m.menuState === 0, { container: m.itemsElement, accept(N) {
    return N.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : N.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(N) {
    N.setAttribute("role", "none");
  } });
  let E = ei(), T = ne((N) => {
    var D, G, q;
    switch (E.dispose(), N.key) {
      case Xe.Space:
        if (m.searchQuery !== "") return N.preventDefault(), N.stopPropagation(), h({ type: 3, value: N.key });
      case Xe.Enter:
        if (N.preventDefault(), N.stopPropagation(), h({ type: 1 }), m.activeItemIndex !== null) {
          let { dataRef: Z } = m.items[m.activeItemIndex];
          (G = (D = Z.current) == null ? void 0 : D.domRef.current) == null || G.click();
        }
        ll(m.buttonElement);
        break;
      case Xe.ArrowDown:
        return N.preventDefault(), N.stopPropagation(), h({ type: 2, focus: ut.Next });
      case Xe.ArrowUp:
        return N.preventDefault(), N.stopPropagation(), h({ type: 2, focus: ut.Previous });
      case Xe.Home:
      case Xe.PageUp:
        return N.preventDefault(), N.stopPropagation(), h({ type: 2, focus: ut.First });
      case Xe.End:
      case Xe.PageDown:
        return N.preventDefault(), N.stopPropagation(), h({ type: 2, focus: ut.Last });
      case Xe.Escape:
        N.preventDefault(), N.stopPropagation(), _i(() => h({ type: 1 })), (q = m.buttonElement) == null || q.focus({ preventScroll: !0 });
        break;
      case Xe.Tab:
        N.preventDefault(), N.stopPropagation(), _i(() => h({ type: 1 })), Zh(m.buttonElement, N.shiftKey ? Mt.Previous : Mt.Next);
        break;
      default:
        N.key.length === 1 && (h({ type: 3, value: N.key }), E.setTimeout(() => h({ type: 4 }), 350));
        break;
    }
  }), F = ne((N) => {
    switch (N.key) {
      case Xe.Space:
        N.preventDefault();
        break;
    }
  }), P = we(() => ({ open: m.menuState === 0 }), [m.menuState]), C = el(g ? A() : {}, { "aria-activedescendant": m.activeItemIndex === null || (n = m.items[m.activeItemIndex]) == null ? void 0 : n.id, "aria-labelledby": (r = m.buttonElement) == null ? void 0 : r.id, id: o, onKeyDown: T, onKeyUp: F, role: "menu", tabIndex: m.menuState === 0 ? 0 : void 0, ref: I, style: { ...a.style, ..._, "--button-width": Kh(m.buttonElement, !0).width }, ...wl(W) }), U = De();
  return Q.createElement(Hl, { enabled: c ? e.static || B : !1 }, U({ ourProps: C, theirProps: a, slot: P, defaultTag: Rg, features: Bg, visible: k, name: "Menu.Items" }));
}
let Ug = ze;
function $g(e, t) {
  let n = on(), { id: r = `headlessui-menu-item-${n}`, disabled: i = !1, ...o } = e, [s, c] = Ko("Menu.Item"), u = s.activeItemIndex !== null ? s.items[s.activeItemIndex].id === r : !1, d = oe(null), a = wt(t, d);
  Te(() => {
    if (!s.__demoMode && s.menuState === 0 && u && s.activationTrigger !== 0) return cn().requestAnimationFrame(() => {
      var k, E;
      (E = (k = d.current) == null ? void 0 : k.scrollIntoView) == null || E.call(k, { block: "nearest" });
    });
  }, [s.__demoMode, d, u, s.menuState, s.activationTrigger, s.activeItemIndex]);
  let g = _g(d), m = oe({ disabled: i, domRef: d, get textValue() {
    return g();
  } });
  Te(() => {
    m.current.disabled = i;
  }, [m, i]), Te(() => (c({ type: 5, id: r, dataRef: m }), () => c({ type: 6, id: r })), [m, r]);
  let h = ne(() => {
    c({ type: 1 });
  }), S = ne((k) => {
    if (i) return k.preventDefault();
    c({ type: 1 }), ll(s.buttonElement);
  }), _ = ne(() => {
    if (i) return c({ type: 2, focus: ut.Nothing });
    c({ type: 2, focus: ut.Specific, id: r });
  }), A = u0(), L = ne((k) => {
    A.update(k), !i && (u || c({ type: 2, focus: ut.Specific, id: r, trigger: 0 }));
  }), v = ne((k) => {
    A.wasMoved(k) && (i || u || c({ type: 2, focus: ut.Specific, id: r, trigger: 0 }));
  }), I = ne((k) => {
    A.wasMoved(k) && (i || u && c({ type: 2, focus: ut.Nothing }));
  }), [O, H] = il(), [B, W] = rl(), w = we(() => ({ active: u, focus: u, disabled: i, close: h }), [u, i, h]), p = { id: r, ref: a, role: "menuitem", tabIndex: i === !0 ? void 0 : -1, "aria-disabled": i === !0 ? !0 : void 0, "aria-labelledby": O, "aria-describedby": B, disabled: void 0, onClick: S, onFocus: _, onPointerEnter: L, onMouseEnter: L, onPointerMove: v, onMouseMove: v, onPointerLeave: I, onMouseLeave: I }, b = De();
  return Q.createElement(H, null, Q.createElement(W, null, b({ ourProps: p, theirProps: o, slot: w, defaultTag: Ug, name: "Menu.Item" })));
}
let Hg = "div";
function Mg(e, t) {
  let [n, r] = il(), i = e, o = { ref: t, "aria-labelledby": n, role: "group" }, s = De();
  return Q.createElement(r, null, s({ ourProps: o, theirProps: i, slot: {}, defaultTag: Hg, name: "Menu.Section" }));
}
let Dg = "header";
function jg(e, t) {
  let n = on(), { id: r = `headlessui-menu-heading-${n}`, ...i } = e, o = xc();
  Te(() => o.register(r), [r, o.register]);
  let s = { id: r, ref: t, role: "presentation", ...o.props };
  return De()({ ourProps: s, theirProps: i, slot: {}, defaultTag: Dg, name: "Menu.Heading" });
}
let Wg = "div";
function Kg(e, t) {
  let n = e, r = { ref: t, role: "separator" };
  return De()({ ourProps: r, theirProps: n, slot: {}, defaultTag: Wg, name: "Menu.Separator" });
}
let Vg = Re(Cg), Gg = Re(Ng), qg = Re(Lg), Xg = Re($g), zg = Re(Mg), Yg = Re(jg), Jg = Re(Kg), Nr = Object.assign(Vg, { Button: Gg, Items: qg, Item: Xg, Section: zg, Heading: Yg, Separator: Jg });
const Qg = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Zg = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2017.5H4.16667C3.72464%2017.5%203.30072%2017.3244%202.98816%2017.0118C2.67559%2016.6993%202.5%2016.2754%202.5%2015.8333V4.16667C2.5%203.72464%202.67559%203.30072%202.98816%202.98816C3.30072%202.67559%203.72464%202.5%204.16667%202.5H7.5'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.333%2014.1667L17.4997%2010L13.333%205.83337'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.5%2010H7.5'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", zl = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.8742%204.5804L18.5392%208.15088C18.8511%208.45416%2019.0047%208.76103%2018.9999%209.07026C18.995%209.3795%2018.8608%209.66136%2018.5984%209.91707C18.3239%2010.1847%2018.0277%2010.3203%2017.7109%2010.3262C17.3941%2010.331%2017.0797%2010.1811%2016.7677%209.87785L13.0193%206.22648C12.5937%205.8114%2012.1825%205.51762%2011.7872%205.34516C11.3917%205.1727%2010.9758%205.14535%2010.5405%205.26428C10.104%205.38203%209.63603%205.68532%209.13422%206.17295C8.44258%206.84733%208.11246%207.48007%208.14634%208.0712C8.18018%208.6623%208.52358%209.27602%209.17534%209.90996L12.954%2013.5922C13.2696%2013.8991%2013.4244%2014.2059%2013.4195%2014.5104C13.4147%2014.8161%2013.2793%2015.098%2013.012%2015.3584C12.746%2015.6177%2012.4522%2015.7533%2012.133%2015.764C11.8137%2015.7747%2011.4957%2015.6261%2011.1813%2015.3192L7.51634%2011.7487C6.92022%2011.1683%206.48975%2010.6188%206.22495%2010.1002C5.96014%209.58168%205.86099%208.99533%205.92991%208.34118C5.99158%207.78099%206.17416%207.23864%206.47887%206.71294C6.78237%206.18723%207.21768%205.64964%207.78237%205.09896C8.45466%204.44362%209.09673%203.94171%209.70858%203.59203C10.3192%203.24236%2010.9105%203.04849%2011.4812%203.00806C12.0532%202.96762%2012.6166%203.07942%2013.1741%203.34346C13.7315%203.6075%2014.2974%204.01902%2014.873%204.5804H14.8742Z'%20fill='url(%23paint0_linear_4212_6487)'/%3e%3cpath%20d='M9.12459%2018.9872L5.46081%2015.4167C5.14884%2015.1122%204.99527%2014.8066%205.00011%2014.4973C5.00495%2014.1881%205.13917%2013.9062%205.40156%2013.6505C5.67604%2013.3829%205.97229%2013.2473%206.28909%2013.2414C6.60589%2013.2366%206.92028%2013.3853%207.23225%2013.6897L10.9795%2017.3411C11.4063%2017.7562%2011.8162%2018.05%2012.2116%2018.2224C12.607%2018.3949%2013.023%2018.421%2013.4595%2018.3033C13.896%2018.1856%2014.3639%2017.8823%2014.8657%2017.3934C15.5574%2016.7191%2015.8875%2016.0863%2015.8537%2015.4952C15.8198%2014.9041%2015.4764%2014.2904%2014.8247%2013.6553L12.8114%2011.7106C12.4958%2011.4038%2012.341%2011.0969%2012.3458%2010.7925C12.3507%2010.4868%2012.4861%2010.2049%2012.7533%209.94445C13.0194%209.68514%2013.3132%209.54957%2013.6324%209.53887C13.9516%209.52816%2014.2696%209.67682%2014.584%209.9837L16.4824%2011.8165C17.0785%2012.3969%2017.509%2012.9464%2017.7738%2013.465C18.0386%2013.9835%2018.1378%2014.5699%2018.0688%2015.224C18.0072%2015.7842%2017.8246%2016.3266%2017.5199%2016.8523C17.2164%2017.378%2016.7811%2017.9156%2016.2164%2018.4663C15.5441%2019.1216%2014.902%2019.6235%2014.2902%2019.9732C13.6783%2020.3229%2013.0871%2020.5179%2012.5151%2020.5583C11.9432%2020.5988%2011.3797%2020.487%2010.8223%2020.2229C10.2648%2019.9589%209.69894%2019.5474%209.12338%2018.986L9.12459%2018.9872Z'%20fill='url(%23paint1_linear_4212_6487)'/%3e%3cpath%20d='M11.4098%209.77448C12.153%209.77448%2012.7556%209.18182%2012.7556%208.4507C12.7556%207.71962%2012.153%207.12695%2011.4098%207.12695C10.6665%207.12695%2010.064%207.71962%2010.064%208.4507C10.064%209.18182%2010.6665%209.77448%2011.4098%209.77448Z'%20fill='url(%23paint2_radial_4212_6487)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_4212_6487'%20x1='17.9364'%20y1='6.66057'%20x2='6.64095'%20y2='11.7639'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23201C1B'/%3e%3cstop%20offset='0.36'%20stop-color='%2377390D'/%3e%3cstop%20offset='0.67'%20stop-color='%23EA8101'/%3e%3cstop%20offset='1'%20stop-color='%23F4B852'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_4212_6487'%20x1='6.3763'%20y1='17.0541'%20x2='19.5023'%20y2='13.0825'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%231F1D1C'/%3e%3cstop%20offset='0.37'%20stop-color='%2377390D'/%3e%3cstop%20offset='0.67'%20stop-color='%23EA8101'/%3e%3cstop%20offset='1'%20stop-color='%23F4FB52'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint2_radial_4212_6487'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(11.4098%208.45191)%20scale(1.34581%201.32377)'%3e%3cstop%20stop-color='%23F4B852'/%3e%3cstop%20offset='0.33'%20stop-color='%23EA8101'/%3e%3cstop%20offset='0.64'%20stop-color='%2377390D'/%3e%3cstop%20offset='1'%20stop-color='%23211C1D'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
function dc(e, t = 4, n = 5) {
  if (e.length <= t + n)
    return e;
  const r = e.slice(0, t), i = e.slice(e.length - n);
  return `${r}...${i}`;
}
const em = {
  [Lt.UNISAT]: zl
}, tm = {
  [ao.MAINNET]: "Mainnet",
  [ao.TESTNET]: "Testnet",
  [ao.SIGNET]: "Signet"
};
function nm({
  address: e,
  network: t,
  onViewProfile: n,
  onChangeWallet: r,
  onDisconnectWallet: i,
  renderAvatar: o
}) {
  const { wallet: s } = sn();
  return /* @__PURE__ */ z.jsx(
    Nr,
    {
      as: "section",
      className: "ord-connect-font ord-wallet-connected-container relative inline-block text-left",
      children: ({ open: c }) => /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
        /* @__PURE__ */ z.jsxs(Nr.Button, { className: "ord-wallet-connected-button", children: [
          /* @__PURE__ */ z.jsxs("div", { className: "wallet-identifier-container", children: [
            o ? o(e, "large") : /* @__PURE__ */ z.jsx(
              Wa,
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
                src: em[s],
                alt: `${s} is connected`
              }
            )
          ] }),
          /* @__PURE__ */ z.jsxs("section", { className: "address-container", children: [
            /* @__PURE__ */ z.jsx("p", { className: "address", children: dc(e) }),
            /* @__PURE__ */ z.jsxs("section", { className: "network-container", children: [
              /* @__PURE__ */ z.jsx("div", { className: "status-indicator" }),
              /* @__PURE__ */ z.jsx("p", { className: "network", children: tm[t] ?? t })
            ] })
          ] }),
          /* @__PURE__ */ z.jsx(
            "img",
            {
              src: Qg,
              className: `dropdown-button ${c ? "close-dropdown-button" : "expand-dropdown-button"}`,
              alt: ""
            }
          )
        ] }),
        /* @__PURE__ */ z.jsx(
          Oi,
          {
            as: ze,
            enter: "transition ease-out duration-100",
            enterFrom: "transform opacity-0 scale-95",
            enterTo: "transform opacity-100 scale-100",
            leave: "transition ease-in duration-75",
            leaveFrom: "transform opacity-100 scale-100",
            leaveTo: "transform opacity-0 scale-95",
            children: /* @__PURE__ */ z.jsxs(Nr.Items, { className: "ord-wallet-connection-dropdown", children: [
              /* @__PURE__ */ z.jsxs(
                Nr.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => n == null ? void 0 : n(),
                  children: [
                    /* @__PURE__ */ z.jsx("span", { className: "label", children: "View profile" }),
                    /* @__PURE__ */ z.jsx("span", { className: "value", children: dc(e) })
                  ]
                }
              ),
              /* @__PURE__ */ z.jsx(
                Nr.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => r == null ? void 0 : r(),
                  children: /* @__PURE__ */ z.jsx("span", { className: "change-wallet-label", children: "Change wallet" })
                }
              ),
              /* @__PURE__ */ z.jsx("hr", { className: "horizontal-separator" }),
              /* @__PURE__ */ z.jsxs(
                Nr.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => i == null ? void 0 : i(),
                  children: [
                    /* @__PURE__ */ z.jsx("span", { className: "label", children: "Disconnect wallet" }),
                    /* @__PURE__ */ z.jsx("img", { src: Zg, className: "logout-icon", alt: "" })
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
function rm({
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
const im = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2022C17.5228%2022%2022%2017.5228%2022%2012C22%206.47715%2017.5228%202%2012%202C6.47715%202%202%206.47715%202%2012C2%2017.5228%206.47715%2022%2012%2022Z'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%209L9%2015'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%209L15%2015'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
function Yl() {
  return typeof window > "u" ? !1 : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );
}
async function om() {
  let e = 0;
  const t = 20;
  for (; e < t; ) {
    if (typeof window < "u" && window.unisat)
      try {
        const n = await window.unisat.getAccounts();
        if (n && n.length > 0)
          return !0;
      } catch {
        break;
      }
    e += 1, await new Promise((n) => {
      setTimeout(n, 100);
    });
  }
  return !1;
}
const sm = {
  [Lt.UNISAT]: "https://unisat.io/download"
  // their www subdomain doesn't work
}, cm = async ({
  network: e,
  wallet: t,
  chain: n = qr.BITCOIN
}, { readOnly: r = !1 } = {}) => {
  switch (t) {
    case Lt.UNISAT: {
      const i = await Nd(e, n, { readOnly: r });
      if (!i || i.length < 1)
        throw new Error("Unisat via Ordit returned no addresses");
      const o = i[0];
      return {
        address: {
          ordinals: o.address,
          payments: o.address
        },
        publicKey: {
          ordinals: o.publicKey,
          payments: o.publicKey
        },
        format: {
          ordinals: o.format,
          payments: o.format
        }
      };
    }
    default:
      throw new Error("Invalid wallet");
  }
};
function um({
  onClose: e,
  onError: t
}) {
  const {
    updateAddress: n,
    network: r,
    updateWallet: i,
    updatePublicKey: o,
    updateFormat: s,
    disconnectWallet: c,
    address: u,
    publicKey: d,
    format: a,
    wallet: g,
    chain: m
  } = sn(), h = (_, A) => {
    t(A.message ?? A.toString()), console.error(`Error while connecting to ${_} wallet`, A), c(), A instanceof kd && window.open(
      sm[_],
      "_blank",
      "noopener,noreferrer"
    );
  }, S = async (_, { readOnly: A = !1 } = {}) => {
    try {
      const { address: L, publicKey: v, format: I } = await cm(
        { network: r, wallet: _, chain: m },
        { readOnly: A }
      );
      return n({
        ordinals: L.ordinals,
        payments: L.payments
      }), o({
        ordinals: v.ordinals,
        payments: v.payments
      }), i(_), s({
        ordinals: I.ordinals,
        payments: I.payments
      }), e(), !0;
    } catch (L) {
      return h(_, L), !1;
    }
  };
  return Pe(() => {
    if (g !== Lt.UNISAT)
      return;
    let _ = !0, A = !1;
    const L = () => S(Lt.UNISAT);
    return u && d && a && (async () => {
      const I = await om();
      if (_) {
        if (!I) {
          c();
          return;
        }
        A = await S(Lt.UNISAT, {
          readOnly: !0
        }), _ && A && window.unisat.addListener("accountsChanged", L);
      }
    })(), () => {
      _ = !1, A && window.unisat.removeListener("accountsChanged", L);
    };
  }, [g]), { connectWallet: S };
}
const am = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%2018L15%2012L9%206'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", lm = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20stroke='%23fff'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20stroke-width='2'%3e%3ccircle%20cx='22'%20cy='22'%20r='1'%3e%3canimate%20attributeName='r'%20begin='0s'%20dur='1.8s'%20values='1;%2020'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.165,%200.84,%200.44,%201'%20repeatCount='indefinite'/%3e%3canimate%20attributeName='stroke-opacity'%20begin='0s'%20dur='1.8s'%20values='1;%200'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.3,%200.61,%200.355,%201'%20repeatCount='indefinite'/%3e%3c/circle%3e%3ccircle%20cx='22'%20cy='22'%20r='1'%3e%3canimate%20attributeName='r'%20begin='-0.9s'%20dur='1.8s'%20values='1;%2020'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.165,%200.84,%200.44,%201'%20repeatCount='indefinite'/%3e%3canimate%20attributeName='stroke-opacity'%20begin='-0.9s'%20dur='1.8s'%20values='1;%200'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.3,%200.61,%200.355,%201'%20repeatCount='indefinite'/%3e%3c/circle%3e%3c/g%3e%3c/svg%3e", fm = {
  [Lt.UNISAT]: "UniSat"
};
function dm({
  wallet: e,
  onConnect: t,
  icon: n,
  renderAvatar: r,
  isPreferred: i
}) {
  const o = Yl(), { wallet: s, address: c } = sn(), [u, d] = ue(!1), a = fm[e], g = async () => {
    d(!0);
    try {
      await t();
    } catch {
    }
    d(!1);
  }, m = s === e && c.ordinals;
  return /* @__PURE__ */ z.jsx(
    "button",
    {
      type: "button",
      className: "wallet-option-button",
      onClick: g,
      children: /* @__PURE__ */ z.jsxs("div", { className: "option-wrapper", children: [
        /* @__PURE__ */ z.jsx("img", { className: "wallet-icon", src: n, alt: "" }),
        /* @__PURE__ */ z.jsxs("div", { className: "wallet-option", children: [
          /* @__PURE__ */ z.jsx("p", { className: "wallet-option-label", children: a }),
          /* @__PURE__ */ z.jsx("p", { className: "wallet-option-subtitle", children: o ? "Available on app" : "" })
        ] }),
        s === e && c.ordinals ? /* @__PURE__ */ z.jsxs("div", { className: "wallet-option-connected-address", children: [
          r ? r(c.ordinals, "small") : /* @__PURE__ */ z.jsx(
            Wa,
            {
              size: o ? 12 : 16,
              variant: "beam",
              name: c.ordinals,
              colors: ["#1C2DCB", "#F226B8"]
            }
          ),
          /* @__PURE__ */ z.jsx("span", { className: "label", children: dc(c.ordinals) })
        ] }) : null,
        !m && i ? /* @__PURE__ */ z.jsx("span", { className: "preferred-label", children: "Preferred" }) : null,
        u ? /* @__PURE__ */ z.jsx(
          "img",
          {
            src: lm,
            width: o ? 20 : 24,
            height: o ? 20 : 24,
            alt: `${a} extension is loading`
          }
        ) : /* @__PURE__ */ z.jsx(
          "img",
          {
            src: am,
            alt: "",
            width: o ? 20 : 24,
            height: o ? 20 : 24,
            className: "chevron-btn"
          }
        )
      ] })
    }
  );
}
const hm = {
  [qr.BITCOIN]: "Bitcoin",
  [qr.FRACTAL_BITCOIN]: "Fractal Bitcoin"
};
function pm({
  isOpen: e,
  closeModal: t,
  renderAvatar: n,
  preferredWallet: r,
  walletsOrder: i
}) {
  const [o, s] = ue(""), { connectWallet: c } = um({
    onClose: t,
    onError: (m) => s(m)
  }), { network: u, chain: d } = sn(), a = Yl(), g = we(() => {
    const h = [
      {
        wallet: Lt.UNISAT,
        onConnect: () => c(Lt.UNISAT),
        icon: zl,
        hidden: a,
        order: 21,
        chains: [qr.BITCOIN, qr.FRACTAL_BITCOIN]
      }
    ].filter(
      (_) => _.chains.includes(d) && !_.hidden
    );
    return i ? h.map((_) => {
      const A = i.findIndex(
        (L) => L === _.wallet
      );
      return A >= 0 ? { ..._, order: A } : _;
    }).sort((_, A) => _.order - A.order) : h;
  }, [a, u, i, c, d]);
  return /* @__PURE__ */ z.jsx(Oi, { appear: !0, show: e, as: ze, children: /* @__PURE__ */ z.jsxs(
    Ts,
    {
      as: "div",
      className: "ord-connect-font ord-connect-wallet-modal",
      onClose: t,
      children: [
        /* @__PURE__ */ z.jsx(
          Oi.Child,
          {
            as: ze,
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
          Oi.Child,
          {
            as: ze,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ z.jsxs(Ts.Panel, { className: "panel", children: [
              /* @__PURE__ */ z.jsxs("section", { className: "panel-title-container", children: [
                /* @__PURE__ */ z.jsxs(Ts.Title, { as: "h3", className: "panel-title", children: [
                  "Choose ",
                  hm[d],
                  " wallet to connect"
                ] }),
                /* @__PURE__ */ z.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: t,
                    className: "close-button",
                    children: /* @__PURE__ */ z.jsx("img", { src: im, alt: "Close" })
                  }
                )
              ] }),
              /* @__PURE__ */ z.jsxs("section", { className: "panel-content-container", children: [
                /* @__PURE__ */ z.jsx("section", { className: "panel-content-inner-container", children: g.map((m, h) => {
                  const S = h === g.length - 1;
                  return /* @__PURE__ */ z.jsxs(ze, { children: [
                    /* @__PURE__ */ z.jsx(
                      dm,
                      {
                        wallet: m.wallet,
                        onConnect: async () => {
                          s("");
                          const _ = m.onConnect().then((L) => (L && s(""), L)), A = await Promise.race([
                            _,
                            new Promise((L) => {
                              setTimeout(() => L("timeout"), 5e3);
                            })
                          ]);
                          return typeof A == "string" ? (s(
                            "No wallet pop-up? The extension is not responding. Try reloading your browser."
                          ), _) : A;
                        },
                        icon: m.icon,
                        renderAvatar: n,
                        isPreferred: r === m.wallet
                      }
                    ),
                    !S && /* @__PURE__ */ z.jsx("hr", { className: "horizontal-separator" })
                  ] }, m.wallet);
                }) }),
                /* @__PURE__ */ z.jsx("p", { className: "error-message", children: o })
              ] })
            ] })
          }
        ) }) })
      ]
    }
  ) });
}
function rE({
  hideConnectButton: e,
  onViewProfile: t,
  onChangeWalletClick: n,
  onDisconnectWalletClick: r,
  renderAvatar: i,
  preferredWallet: o,
  walletsOrder: s
}) {
  const {
    address: c,
    disconnectWallet: u,
    network: d,
    isModalOpen: a,
    openModal: g,
    closeModal: m
  } = sn(), h = Vd(), S = () => e ? null : c != null && c.ordinals ? /* @__PURE__ */ z.jsx(
    nm,
    {
      address: c.ordinals,
      network: d,
      onViewProfile: t,
      onChangeWallet: () => {
        g(), n == null || n();
      },
      onDisconnectWallet: () => {
        u(), r == null || r();
      },
      renderAvatar: i
    }
  ) : /* @__PURE__ */ z.jsx(rm, { disabled: !h, openModal: g });
  return /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    S(),
    h ? /* @__PURE__ */ z.jsx(
      pm,
      {
        isOpen: a,
        closeModal: m,
        renderAvatar: i,
        preferredWallet: o,
        walletsOrder: s
      }
    ) : null
  ] });
}
var gm = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, Is = Math.ceil, kt = Math.floor, vt = "[BigNumber Error] ", Gu = vt + "Number primitive has more than 15 significant digits: ", $t = 1e14, re = 14, xs = 9007199254740991, Os = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], On = 1e7, qe = 1e9;
function Jl(e) {
  var t, n, r, i = v.prototype = { constructor: v, toString: null, valueOf: null }, o = new v(1), s = 20, c = 4, u = -7, d = 21, a = -1e7, g = 1e7, m = !1, h = 1, S = 0, _ = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, A = "0123456789abcdefghijklmnopqrstuvwxyz", L = !0;
  function v(w, p) {
    var b, k, E, T, F, P, C, U, N = this;
    if (!(N instanceof v)) return new v(w, p);
    if (p == null) {
      if (w && w._isBigNumber === !0) {
        N.s = w.s, !w.c || w.e > g ? N.c = N.e = null : w.e < a ? N.c = [N.e = 0] : (N.e = w.e, N.c = w.c.slice());
        return;
      }
      if ((P = typeof w == "number") && w * 0 == 0) {
        if (N.s = 1 / w < 0 ? (w = -w, -1) : 1, w === ~~w) {
          for (T = 0, F = w; F >= 10; F /= 10, T++) ;
          T > g ? N.c = N.e = null : (N.e = T, N.c = [w]);
          return;
        }
        U = String(w);
      } else {
        if (!gm.test(U = String(w))) return r(N, U, P);
        N.s = U.charCodeAt(0) == 45 ? (U = U.slice(1), -1) : 1;
      }
      (T = U.indexOf(".")) > -1 && (U = U.replace(".", "")), (F = U.search(/e/i)) > 0 ? (T < 0 && (T = F), T += +U.slice(F + 1), U = U.substring(0, F)) : T < 0 && (T = U.length);
    } else {
      if (Ce(p, 2, A.length, "Base"), p == 10 && L)
        return N = new v(w), B(N, s + N.e + 1, c);
      if (U = String(w), P = typeof w == "number") {
        if (w * 0 != 0) return r(N, U, P, p);
        if (N.s = 1 / w < 0 ? (U = U.slice(1), -1) : 1, v.DEBUG && U.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Gu + w);
      } else
        N.s = U.charCodeAt(0) === 45 ? (U = U.slice(1), -1) : 1;
      for (b = A.slice(0, p), T = F = 0, C = U.length; F < C; F++)
        if (b.indexOf(k = U.charAt(F)) < 0) {
          if (k == ".") {
            if (F > T) {
              T = C;
              continue;
            }
          } else if (!E && (U == U.toUpperCase() && (U = U.toLowerCase()) || U == U.toLowerCase() && (U = U.toUpperCase()))) {
            E = !0, F = -1, T = 0;
            continue;
          }
          return r(N, String(w), P, p);
        }
      P = !1, U = n(U, p, 10, N.s), (T = U.indexOf(".")) > -1 ? U = U.replace(".", "") : T = U.length;
    }
    for (F = 0; U.charCodeAt(F) === 48; F++) ;
    for (C = U.length; U.charCodeAt(--C) === 48; ) ;
    if (U = U.slice(F, ++C)) {
      if (C -= F, P && v.DEBUG && C > 15 && (w > xs || w !== kt(w)))
        throw Error(Gu + N.s * w);
      if ((T = T - F - 1) > g)
        N.c = N.e = null;
      else if (T < a)
        N.c = [N.e = 0];
      else {
        if (N.e = T, N.c = [], F = (T + 1) % re, T < 0 && (F += re), F < C) {
          for (F && N.c.push(+U.slice(0, F)), C -= re; F < C; )
            N.c.push(+U.slice(F, F += re));
          F = re - (U = U.slice(F)).length;
        } else
          F -= C;
        for (; F--; U += "0") ;
        N.c.push(+U);
      }
    } else
      N.c = [N.e = 0];
  }
  v.clone = Jl, v.ROUND_UP = 0, v.ROUND_DOWN = 1, v.ROUND_CEIL = 2, v.ROUND_FLOOR = 3, v.ROUND_HALF_UP = 4, v.ROUND_HALF_DOWN = 5, v.ROUND_HALF_EVEN = 6, v.ROUND_HALF_CEIL = 7, v.ROUND_HALF_FLOOR = 8, v.EUCLID = 9, v.config = v.set = function(w) {
    var p, b;
    if (w != null)
      if (typeof w == "object") {
        if (w.hasOwnProperty(p = "DECIMAL_PLACES") && (b = w[p], Ce(b, 0, qe, p), s = b), w.hasOwnProperty(p = "ROUNDING_MODE") && (b = w[p], Ce(b, 0, 8, p), c = b), w.hasOwnProperty(p = "EXPONENTIAL_AT") && (b = w[p], b && b.pop ? (Ce(b[0], -qe, 0, p), Ce(b[1], 0, qe, p), u = b[0], d = b[1]) : (Ce(b, -qe, qe, p), u = -(d = b < 0 ? -b : b))), w.hasOwnProperty(p = "RANGE"))
          if (b = w[p], b && b.pop)
            Ce(b[0], -qe, -1, p), Ce(b[1], 1, qe, p), a = b[0], g = b[1];
          else if (Ce(b, -qe, qe, p), b)
            a = -(g = b < 0 ? -b : b);
          else
            throw Error(vt + p + " cannot be zero: " + b);
        if (w.hasOwnProperty(p = "CRYPTO"))
          if (b = w[p], b === !!b)
            if (b)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                m = b;
              else
                throw m = !b, Error(vt + "crypto unavailable");
            else
              m = b;
          else
            throw Error(vt + p + " not true or false: " + b);
        if (w.hasOwnProperty(p = "MODULO_MODE") && (b = w[p], Ce(b, 0, 9, p), h = b), w.hasOwnProperty(p = "POW_PRECISION") && (b = w[p], Ce(b, 0, qe, p), S = b), w.hasOwnProperty(p = "FORMAT"))
          if (b = w[p], typeof b == "object") _ = b;
          else throw Error(vt + p + " not an object: " + b);
        if (w.hasOwnProperty(p = "ALPHABET"))
          if (b = w[p], typeof b == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(b))
            L = b.slice(0, 10) == "0123456789", A = b;
          else
            throw Error(vt + p + " invalid: " + b);
      } else
        throw Error(vt + "Object expected: " + w);
    return {
      DECIMAL_PLACES: s,
      ROUNDING_MODE: c,
      EXPONENTIAL_AT: [u, d],
      RANGE: [a, g],
      CRYPTO: m,
      MODULO_MODE: h,
      POW_PRECISION: S,
      FORMAT: _,
      ALPHABET: A
    };
  }, v.isBigNumber = function(w) {
    if (!w || w._isBigNumber !== !0) return !1;
    if (!v.DEBUG) return !0;
    var p, b, k = w.c, E = w.e, T = w.s;
    e: if ({}.toString.call(k) == "[object Array]") {
      if ((T === 1 || T === -1) && E >= -qe && E <= qe && E === kt(E)) {
        if (k[0] === 0) {
          if (E === 0 && k.length === 1) return !0;
          break e;
        }
        if (p = (E + 1) % re, p < 1 && (p += re), String(k[0]).length == p) {
          for (p = 0; p < k.length; p++)
            if (b = k[p], b < 0 || b >= $t || b !== kt(b)) break e;
          if (b !== 0) return !0;
        }
      }
    } else if (k === null && E === null && (T === null || T === 1 || T === -1))
      return !0;
    throw Error(vt + "Invalid BigNumber: " + w);
  }, v.maximum = v.max = function() {
    return O(arguments, -1);
  }, v.minimum = v.min = function() {
    return O(arguments, 1);
  }, v.random = function() {
    var w = 9007199254740992, p = Math.random() * w & 2097151 ? function() {
      return kt(Math.random() * w);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(b) {
      var k, E, T, F, P, C = 0, U = [], N = new v(o);
      if (b == null ? b = s : Ce(b, 0, qe), F = Is(b / re), m)
        if (crypto.getRandomValues) {
          for (k = crypto.getRandomValues(new Uint32Array(F *= 2)); C < F; )
            P = k[C] * 131072 + (k[C + 1] >>> 11), P >= 9e15 ? (E = crypto.getRandomValues(new Uint32Array(2)), k[C] = E[0], k[C + 1] = E[1]) : (U.push(P % 1e14), C += 2);
          C = F / 2;
        } else if (crypto.randomBytes) {
          for (k = crypto.randomBytes(F *= 7); C < F; )
            P = (k[C] & 31) * 281474976710656 + k[C + 1] * 1099511627776 + k[C + 2] * 4294967296 + k[C + 3] * 16777216 + (k[C + 4] << 16) + (k[C + 5] << 8) + k[C + 6], P >= 9e15 ? crypto.randomBytes(7).copy(k, C) : (U.push(P % 1e14), C += 7);
          C = F / 7;
        } else
          throw m = !1, Error(vt + "crypto unavailable");
      if (!m)
        for (; C < F; )
          P = p(), P < 9e15 && (U[C++] = P % 1e14);
      for (F = U[--C], b %= re, F && b && (P = Os[re - b], U[C] = kt(F / P) * P); U[C] === 0; U.pop(), C--) ;
      if (C < 0)
        U = [T = 0];
      else {
        for (T = -1; U[0] === 0; U.splice(0, 1), T -= re) ;
        for (C = 1, P = U[0]; P >= 10; P /= 10, C++) ;
        C < re && (T -= re - C);
      }
      return N.e = T, N.c = U, N;
    };
  }(), v.sum = function() {
    for (var w = 1, p = arguments, b = new v(p[0]); w < p.length; ) b = b.plus(p[w++]);
    return b;
  }, n = /* @__PURE__ */ function() {
    var w = "0123456789";
    function p(b, k, E, T) {
      for (var F, P = [0], C, U = 0, N = b.length; U < N; ) {
        for (C = P.length; C--; P[C] *= k) ;
        for (P[0] += T.indexOf(b.charAt(U++)), F = 0; F < P.length; F++)
          P[F] > E - 1 && (P[F + 1] == null && (P[F + 1] = 0), P[F + 1] += P[F] / E | 0, P[F] %= E);
      }
      return P.reverse();
    }
    return function(b, k, E, T, F) {
      var P, C, U, N, D, G, q, Z, te = b.indexOf("."), ie = s, J = c;
      for (te >= 0 && (N = S, S = 0, b = b.replace(".", ""), Z = new v(k), G = Z.pow(b.length - te), S = N, Z.c = p(
        fn(Pt(G.c), G.e, "0"),
        10,
        E,
        w
      ), Z.e = Z.c.length), q = p(b, k, E, F ? (P = A, w) : (P = w, A)), U = N = q.length; q[--N] == 0; q.pop()) ;
      if (!q[0]) return P.charAt(0);
      if (te < 0 ? --U : (G.c = q, G.e = U, G.s = T, G = t(G, Z, ie, J, E), q = G.c, D = G.r, U = G.e), C = U + ie + 1, te = q[C], N = E / 2, D = D || C < 0 || q[C + 1] != null, D = J < 4 ? (te != null || D) && (J == 0 || J == (G.s < 0 ? 3 : 2)) : te > N || te == N && (J == 4 || D || J == 6 && q[C - 1] & 1 || J == (G.s < 0 ? 8 : 7)), C < 1 || !q[0])
        b = D ? fn(P.charAt(1), -ie, P.charAt(0)) : P.charAt(0);
      else {
        if (q.length = C, D)
          for (--E; ++q[--C] > E; )
            q[C] = 0, C || (++U, q = [1].concat(q));
        for (N = q.length; !q[--N]; ) ;
        for (te = 0, b = ""; te <= N; b += P.charAt(q[te++])) ;
        b = fn(b, U, P.charAt(0));
      }
      return b;
    };
  }(), t = /* @__PURE__ */ function() {
    function w(k, E, T) {
      var F, P, C, U, N = 0, D = k.length, G = E % On, q = E / On | 0;
      for (k = k.slice(); D--; )
        C = k[D] % On, U = k[D] / On | 0, F = q * C + U * G, P = G * C + F % On * On + N, N = (P / T | 0) + (F / On | 0) + q * U, k[D] = P % T;
      return N && (k = [N].concat(k)), k;
    }
    function p(k, E, T, F) {
      var P, C;
      if (T != F)
        C = T > F ? 1 : -1;
      else
        for (P = C = 0; P < T; P++)
          if (k[P] != E[P]) {
            C = k[P] > E[P] ? 1 : -1;
            break;
          }
      return C;
    }
    function b(k, E, T, F) {
      for (var P = 0; T--; )
        k[T] -= P, P = k[T] < E[T] ? 1 : 0, k[T] = P * F + k[T] - E[T];
      for (; !k[0] && k.length > 1; k.splice(0, 1)) ;
    }
    return function(k, E, T, F, P) {
      var C, U, N, D, G, q, Z, te, ie, J, le, be, Qe, ot, Ut, je, It, Ze = k.s == E.s ? 1 : -1, We = k.c, ge = E.c;
      if (!We || !We[0] || !ge || !ge[0])
        return new v(
          // Return NaN if either NaN, or both Infinity or 0.
          !k.s || !E.s || (We ? ge && We[0] == ge[0] : !ge) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            We && We[0] == 0 || !ge ? Ze * 0 : Ze / 0
          )
        );
      for (te = new v(Ze), ie = te.c = [], U = k.e - E.e, Ze = T + U + 1, P || (P = $t, U = Ct(k.e / re) - Ct(E.e / re), Ze = Ze / re | 0), N = 0; ge[N] == (We[N] || 0); N++) ;
      if (ge[N] > (We[N] || 0) && U--, Ze < 0)
        ie.push(1), D = !0;
      else {
        for (ot = We.length, je = ge.length, N = 0, Ze += 2, G = kt(P / (ge[0] + 1)), G > 1 && (ge = w(ge, G, P), We = w(We, G, P), je = ge.length, ot = We.length), Qe = je, J = We.slice(0, je), le = J.length; le < je; J[le++] = 0) ;
        It = ge.slice(), It = [0].concat(It), Ut = ge[0], ge[1] >= P / 2 && Ut++;
        do {
          if (G = 0, C = p(ge, J, je, le), C < 0) {
            if (be = J[0], je != le && (be = be * P + (J[1] || 0)), G = kt(be / Ut), G > 1)
              for (G >= P && (G = P - 1), q = w(ge, G, P), Z = q.length, le = J.length; p(q, J, Z, le) == 1; )
                G--, b(q, je < Z ? It : ge, Z, P), Z = q.length, C = 1;
            else
              G == 0 && (C = G = 1), q = ge.slice(), Z = q.length;
            if (Z < le && (q = [0].concat(q)), b(J, q, le, P), le = J.length, C == -1)
              for (; p(ge, J, je, le) < 1; )
                G++, b(J, je < le ? It : ge, le, P), le = J.length;
          } else C === 0 && (G++, J = [0]);
          ie[N++] = G, J[0] ? J[le++] = We[Qe] || 0 : (J = [We[Qe]], le = 1);
        } while ((Qe++ < ot || J[0] != null) && Ze--);
        D = J[0] != null, ie[0] || ie.splice(0, 1);
      }
      if (P == $t) {
        for (N = 1, Ze = ie[0]; Ze >= 10; Ze /= 10, N++) ;
        B(te, T + (te.e = N + U * re - 1) + 1, F, D);
      } else
        te.e = U, te.r = +D;
      return te;
    };
  }();
  function I(w, p, b, k) {
    var E, T, F, P, C;
    if (b == null ? b = c : Ce(b, 0, 8), !w.c) return w.toString();
    if (E = w.c[0], F = w.e, p == null)
      C = Pt(w.c), C = k == 1 || k == 2 && (F <= u || F >= d) ? Qi(C, F) : fn(C, F, "0");
    else if (w = B(new v(w), p, b), T = w.e, C = Pt(w.c), P = C.length, k == 1 || k == 2 && (p <= T || T <= u)) {
      for (; P < p; C += "0", P++) ;
      C = Qi(C, T);
    } else if (p -= F, C = fn(C, T, "0"), T + 1 > P) {
      if (--p > 0) for (C += "."; p--; C += "0") ;
    } else if (p += T - P, p > 0)
      for (T + 1 == P && (C += "."); p--; C += "0") ;
    return w.s < 0 && E ? "-" + C : C;
  }
  function O(w, p) {
    for (var b, k, E = 1, T = new v(w[0]); E < w.length; E++)
      k = new v(w[E]), (!k.s || (b = zn(T, k)) === p || b === 0 && T.s === p) && (T = k);
    return T;
  }
  function H(w, p, b) {
    for (var k = 1, E = p.length; !p[--E]; p.pop()) ;
    for (E = p[0]; E >= 10; E /= 10, k++) ;
    return (b = k + b * re - 1) > g ? w.c = w.e = null : b < a ? w.c = [w.e = 0] : (w.e = b, w.c = p), w;
  }
  r = /* @__PURE__ */ function() {
    var w = /^(-?)0([xbo])(?=\w[\w.]*$)/i, p = /^([^.]+)\.$/, b = /^\.([^.]+)$/, k = /^-?(Infinity|NaN)$/, E = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(T, F, P, C) {
      var U, N = P ? F : F.replace(E, "");
      if (k.test(N))
        T.s = isNaN(N) ? null : N < 0 ? -1 : 1;
      else {
        if (!P && (N = N.replace(w, function(D, G, q) {
          return U = (q = q.toLowerCase()) == "x" ? 16 : q == "b" ? 2 : 8, !C || C == U ? G : D;
        }), C && (U = C, N = N.replace(p, "$1").replace(b, "0.$1")), F != N))
          return new v(N, U);
        if (v.DEBUG)
          throw Error(vt + "Not a" + (C ? " base " + C : "") + " number: " + F);
        T.s = null;
      }
      T.c = T.e = null;
    };
  }();
  function B(w, p, b, k) {
    var E, T, F, P, C, U, N, D = w.c, G = Os;
    if (D) {
      e: {
        for (E = 1, P = D[0]; P >= 10; P /= 10, E++) ;
        if (T = p - E, T < 0)
          T += re, F = p, C = D[U = 0], N = kt(C / G[E - F - 1] % 10);
        else if (U = Is((T + 1) / re), U >= D.length)
          if (k) {
            for (; D.length <= U; D.push(0)) ;
            C = N = 0, E = 1, T %= re, F = T - re + 1;
          } else
            break e;
        else {
          for (C = P = D[U], E = 1; P >= 10; P /= 10, E++) ;
          T %= re, F = T - re + E, N = F < 0 ? 0 : kt(C / G[E - F - 1] % 10);
        }
        if (k = k || p < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        D[U + 1] != null || (F < 0 ? C : C % G[E - F - 1]), k = b < 4 ? (N || k) && (b == 0 || b == (w.s < 0 ? 3 : 2)) : N > 5 || N == 5 && (b == 4 || k || b == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (T > 0 ? F > 0 ? C / G[E - F] : 0 : D[U - 1]) % 10 & 1 || b == (w.s < 0 ? 8 : 7)), p < 1 || !D[0])
          return D.length = 0, k ? (p -= w.e + 1, D[0] = G[(re - p % re) % re], w.e = -p || 0) : D[0] = w.e = 0, w;
        if (T == 0 ? (D.length = U, P = 1, U--) : (D.length = U + 1, P = G[re - T], D[U] = F > 0 ? kt(C / G[E - F] % G[F]) * P : 0), k)
          for (; ; )
            if (U == 0) {
              for (T = 1, F = D[0]; F >= 10; F /= 10, T++) ;
              for (F = D[0] += P, P = 1; F >= 10; F /= 10, P++) ;
              T != P && (w.e++, D[0] == $t && (D[0] = 1));
              break;
            } else {
              if (D[U] += P, D[U] != $t) break;
              D[U--] = 0, P = 1;
            }
        for (T = D.length; D[--T] === 0; D.pop()) ;
      }
      w.e > g ? w.c = w.e = null : w.e < a && (w.c = [w.e = 0]);
    }
    return w;
  }
  function W(w) {
    var p, b = w.e;
    return b === null ? w.toString() : (p = Pt(w.c), p = b <= u || b >= d ? Qi(p, b) : fn(p, b, "0"), w.s < 0 ? "-" + p : p);
  }
  return i.absoluteValue = i.abs = function() {
    var w = new v(this);
    return w.s < 0 && (w.s = 1), w;
  }, i.comparedTo = function(w, p) {
    return zn(this, new v(w, p));
  }, i.decimalPlaces = i.dp = function(w, p) {
    var b, k, E, T = this;
    if (w != null)
      return Ce(w, 0, qe), p == null ? p = c : Ce(p, 0, 8), B(new v(T), w + T.e + 1, p);
    if (!(b = T.c)) return null;
    if (k = ((E = b.length - 1) - Ct(this.e / re)) * re, E = b[E]) for (; E % 10 == 0; E /= 10, k--) ;
    return k < 0 && (k = 0), k;
  }, i.dividedBy = i.div = function(w, p) {
    return t(this, new v(w, p), s, c);
  }, i.dividedToIntegerBy = i.idiv = function(w, p) {
    return t(this, new v(w, p), 0, 1);
  }, i.exponentiatedBy = i.pow = function(w, p) {
    var b, k, E, T, F, P, C, U, N, D = this;
    if (w = new v(w), w.c && !w.isInteger())
      throw Error(vt + "Exponent not an integer: " + W(w));
    if (p != null && (p = new v(p)), P = w.e > 14, !D.c || !D.c[0] || D.c[0] == 1 && !D.e && D.c.length == 1 || !w.c || !w.c[0])
      return N = new v(Math.pow(+W(D), P ? w.s * (2 - Ji(w)) : +W(w))), p ? N.mod(p) : N;
    if (C = w.s < 0, p) {
      if (p.c ? !p.c[0] : !p.s) return new v(NaN);
      k = !C && D.isInteger() && p.isInteger(), k && (D = D.mod(p));
    } else {
      if (w.e > 9 && (D.e > 0 || D.e < -1 || (D.e == 0 ? D.c[0] > 1 || P && D.c[1] >= 24e7 : D.c[0] < 8e13 || P && D.c[0] <= 9999975e7)))
        return T = D.s < 0 && Ji(w) ? -0 : 0, D.e > -1 && (T = 1 / T), new v(C ? 1 / T : T);
      S && (T = Is(S / re + 2));
    }
    for (P ? (b = new v(0.5), C && (w.s = 1), U = Ji(w)) : (E = Math.abs(+W(w)), U = E % 2), N = new v(o); ; ) {
      if (U) {
        if (N = N.times(D), !N.c) break;
        T ? N.c.length > T && (N.c.length = T) : k && (N = N.mod(p));
      }
      if (E) {
        if (E = kt(E / 2), E === 0) break;
        U = E % 2;
      } else if (w = w.times(b), B(w, w.e + 1, 1), w.e > 14)
        U = Ji(w);
      else {
        if (E = +W(w), E === 0) break;
        U = E % 2;
      }
      D = D.times(D), T ? D.c && D.c.length > T && (D.c.length = T) : k && (D = D.mod(p));
    }
    return k ? N : (C && (N = o.div(N)), p ? N.mod(p) : T ? B(N, S, c, F) : N);
  }, i.integerValue = function(w) {
    var p = new v(this);
    return w == null ? w = c : Ce(w, 0, 8), B(p, p.e + 1, w);
  }, i.isEqualTo = i.eq = function(w, p) {
    return zn(this, new v(w, p)) === 0;
  }, i.isFinite = function() {
    return !!this.c;
  }, i.isGreaterThan = i.gt = function(w, p) {
    return zn(this, new v(w, p)) > 0;
  }, i.isGreaterThanOrEqualTo = i.gte = function(w, p) {
    return (p = zn(this, new v(w, p))) === 1 || p === 0;
  }, i.isInteger = function() {
    return !!this.c && Ct(this.e / re) > this.c.length - 2;
  }, i.isLessThan = i.lt = function(w, p) {
    return zn(this, new v(w, p)) < 0;
  }, i.isLessThanOrEqualTo = i.lte = function(w, p) {
    return (p = zn(this, new v(w, p))) === -1 || p === 0;
  }, i.isNaN = function() {
    return !this.s;
  }, i.isNegative = function() {
    return this.s < 0;
  }, i.isPositive = function() {
    return this.s > 0;
  }, i.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, i.minus = function(w, p) {
    var b, k, E, T, F = this, P = F.s;
    if (w = new v(w, p), p = w.s, !P || !p) return new v(NaN);
    if (P != p)
      return w.s = -p, F.plus(w);
    var C = F.e / re, U = w.e / re, N = F.c, D = w.c;
    if (!C || !U) {
      if (!N || !D) return N ? (w.s = -p, w) : new v(D ? F : NaN);
      if (!N[0] || !D[0])
        return D[0] ? (w.s = -p, w) : new v(N[0] ? F : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          c == 3 ? -0 : 0
        ));
    }
    if (C = Ct(C), U = Ct(U), N = N.slice(), P = C - U) {
      for ((T = P < 0) ? (P = -P, E = N) : (U = C, E = D), E.reverse(), p = P; p--; E.push(0)) ;
      E.reverse();
    } else
      for (k = (T = (P = N.length) < (p = D.length)) ? P : p, P = p = 0; p < k; p++)
        if (N[p] != D[p]) {
          T = N[p] < D[p];
          break;
        }
    if (T && (E = N, N = D, D = E, w.s = -w.s), p = (k = D.length) - (b = N.length), p > 0) for (; p--; N[b++] = 0) ;
    for (p = $t - 1; k > P; ) {
      if (N[--k] < D[k]) {
        for (b = k; b && !N[--b]; N[b] = p) ;
        --N[b], N[k] += $t;
      }
      N[k] -= D[k];
    }
    for (; N[0] == 0; N.splice(0, 1), --U) ;
    return N[0] ? H(w, N, U) : (w.s = c == 3 ? -1 : 1, w.c = [w.e = 0], w);
  }, i.modulo = i.mod = function(w, p) {
    var b, k, E = this;
    return w = new v(w, p), !E.c || !w.s || w.c && !w.c[0] ? new v(NaN) : !w.c || E.c && !E.c[0] ? new v(E) : (h == 9 ? (k = w.s, w.s = 1, b = t(E, w, 0, 3), w.s = k, b.s *= k) : b = t(E, w, 0, h), w = E.minus(b.times(w)), !w.c[0] && h == 1 && (w.s = E.s), w);
  }, i.multipliedBy = i.times = function(w, p) {
    var b, k, E, T, F, P, C, U, N, D, G, q, Z, te, ie, J = this, le = J.c, be = (w = new v(w, p)).c;
    if (!le || !be || !le[0] || !be[0])
      return !J.s || !w.s || le && !le[0] && !be || be && !be[0] && !le ? w.c = w.e = w.s = null : (w.s *= J.s, !le || !be ? w.c = w.e = null : (w.c = [0], w.e = 0)), w;
    for (k = Ct(J.e / re) + Ct(w.e / re), w.s *= J.s, C = le.length, D = be.length, C < D && (Z = le, le = be, be = Z, E = C, C = D, D = E), E = C + D, Z = []; E--; Z.push(0)) ;
    for (te = $t, ie = On, E = D; --E >= 0; ) {
      for (b = 0, G = be[E] % ie, q = be[E] / ie | 0, F = C, T = E + F; T > E; )
        U = le[--F] % ie, N = le[F] / ie | 0, P = q * U + N * G, U = G * U + P % ie * ie + Z[T] + b, b = (U / te | 0) + (P / ie | 0) + q * N, Z[T--] = U % te;
      Z[T] = b;
    }
    return b ? ++k : Z.splice(0, 1), H(w, Z, k);
  }, i.negated = function() {
    var w = new v(this);
    return w.s = -w.s || null, w;
  }, i.plus = function(w, p) {
    var b, k = this, E = k.s;
    if (w = new v(w, p), p = w.s, !E || !p) return new v(NaN);
    if (E != p)
      return w.s = -p, k.minus(w);
    var T = k.e / re, F = w.e / re, P = k.c, C = w.c;
    if (!T || !F) {
      if (!P || !C) return new v(E / 0);
      if (!P[0] || !C[0]) return C[0] ? w : new v(P[0] ? k : E * 0);
    }
    if (T = Ct(T), F = Ct(F), P = P.slice(), E = T - F) {
      for (E > 0 ? (F = T, b = C) : (E = -E, b = P), b.reverse(); E--; b.push(0)) ;
      b.reverse();
    }
    for (E = P.length, p = C.length, E - p < 0 && (b = C, C = P, P = b, p = E), E = 0; p; )
      E = (P[--p] = P[p] + C[p] + E) / $t | 0, P[p] = $t === P[p] ? 0 : P[p] % $t;
    return E && (P = [E].concat(P), ++F), H(w, P, F);
  }, i.precision = i.sd = function(w, p) {
    var b, k, E, T = this;
    if (w != null && w !== !!w)
      return Ce(w, 1, qe), p == null ? p = c : Ce(p, 0, 8), B(new v(T), w, p);
    if (!(b = T.c)) return null;
    if (E = b.length - 1, k = E * re + 1, E = b[E]) {
      for (; E % 10 == 0; E /= 10, k--) ;
      for (E = b[0]; E >= 10; E /= 10, k++) ;
    }
    return w && T.e + 1 > k && (k = T.e + 1), k;
  }, i.shiftedBy = function(w) {
    return Ce(w, -xs, xs), this.times("1e" + w);
  }, i.squareRoot = i.sqrt = function() {
    var w, p, b, k, E, T = this, F = T.c, P = T.s, C = T.e, U = s + 4, N = new v("0.5");
    if (P !== 1 || !F || !F[0])
      return new v(!P || P < 0 && (!F || F[0]) ? NaN : F ? T : 1 / 0);
    if (P = Math.sqrt(+W(T)), P == 0 || P == 1 / 0 ? (p = Pt(F), (p.length + C) % 2 == 0 && (p += "0"), P = Math.sqrt(+p), C = Ct((C + 1) / 2) - (C < 0 || C % 2), P == 1 / 0 ? p = "5e" + C : (p = P.toExponential(), p = p.slice(0, p.indexOf("e") + 1) + C), b = new v(p)) : b = new v(P + ""), b.c[0]) {
      for (C = b.e, P = C + U, P < 3 && (P = 0); ; )
        if (E = b, b = N.times(E.plus(t(T, E, U, 1))), Pt(E.c).slice(0, P) === (p = Pt(b.c)).slice(0, P))
          if (b.e < C && --P, p = p.slice(P - 3, P + 1), p == "9999" || !k && p == "4999") {
            if (!k && (B(E, E.e + s + 2, 0), E.times(E).eq(T))) {
              b = E;
              break;
            }
            U += 4, P += 4, k = 1;
          } else {
            (!+p || !+p.slice(1) && p.charAt(0) == "5") && (B(b, b.e + s + 2, 1), w = !b.times(b).eq(T));
            break;
          }
    }
    return B(b, b.e + s + 1, c, w);
  }, i.toExponential = function(w, p) {
    return w != null && (Ce(w, 0, qe), w++), I(this, w, p, 1);
  }, i.toFixed = function(w, p) {
    return w != null && (Ce(w, 0, qe), w = w + this.e + 1), I(this, w, p);
  }, i.toFormat = function(w, p, b) {
    var k, E = this;
    if (b == null)
      w != null && p && typeof p == "object" ? (b = p, p = null) : w && typeof w == "object" ? (b = w, w = p = null) : b = _;
    else if (typeof b != "object")
      throw Error(vt + "Argument not an object: " + b);
    if (k = E.toFixed(w, p), E.c) {
      var T, F = k.split("."), P = +b.groupSize, C = +b.secondaryGroupSize, U = b.groupSeparator || "", N = F[0], D = F[1], G = E.s < 0, q = G ? N.slice(1) : N, Z = q.length;
      if (C && (T = P, P = C, C = T, Z -= T), P > 0 && Z > 0) {
        for (T = Z % P || P, N = q.substr(0, T); T < Z; T += P) N += U + q.substr(T, P);
        C > 0 && (N += U + q.slice(T)), G && (N = "-" + N);
      }
      k = D ? N + (b.decimalSeparator || "") + ((C = +b.fractionGroupSize) ? D.replace(
        new RegExp("\\d{" + C + "}\\B", "g"),
        "$&" + (b.fractionGroupSeparator || "")
      ) : D) : N;
    }
    return (b.prefix || "") + k + (b.suffix || "");
  }, i.toFraction = function(w) {
    var p, b, k, E, T, F, P, C, U, N, D, G, q = this, Z = q.c;
    if (w != null && (P = new v(w), !P.isInteger() && (P.c || P.s !== 1) || P.lt(o)))
      throw Error(vt + "Argument " + (P.isInteger() ? "out of range: " : "not an integer: ") + W(P));
    if (!Z) return new v(q);
    for (p = new v(o), U = b = new v(o), k = C = new v(o), G = Pt(Z), T = p.e = G.length - q.e - 1, p.c[0] = Os[(F = T % re) < 0 ? re + F : F], w = !w || P.comparedTo(p) > 0 ? T > 0 ? p : U : P, F = g, g = 1 / 0, P = new v(G), C.c[0] = 0; N = t(P, p, 0, 1), E = b.plus(N.times(k)), E.comparedTo(w) != 1; )
      b = k, k = E, U = C.plus(N.times(E = U)), C = E, p = P.minus(N.times(E = p)), P = E;
    return E = t(w.minus(b), k, 0, 1), C = C.plus(E.times(U)), b = b.plus(E.times(k)), C.s = U.s = q.s, T = T * 2, D = t(U, k, T, c).minus(q).abs().comparedTo(
      t(C, b, T, c).minus(q).abs()
    ) < 1 ? [U, k] : [C, b], g = F, D;
  }, i.toNumber = function() {
    return +W(this);
  }, i.toPrecision = function(w, p) {
    return w != null && Ce(w, 1, qe), I(this, w, p, 2);
  }, i.toString = function(w) {
    var p, b = this, k = b.s, E = b.e;
    return E === null ? k ? (p = "Infinity", k < 0 && (p = "-" + p)) : p = "NaN" : (w == null ? p = E <= u || E >= d ? Qi(Pt(b.c), E) : fn(Pt(b.c), E, "0") : w === 10 && L ? (b = B(new v(b), s + E + 1, c), p = fn(Pt(b.c), b.e, "0")) : (Ce(w, 2, A.length, "Base"), p = n(fn(Pt(b.c), E, "0"), 10, w, k, !0)), k < 0 && b.c[0] && (p = "-" + p)), p;
  }, i.valueOf = i.toJSON = function() {
    return W(this);
  }, i._isBigNumber = !0, i[Symbol.toStringTag] = "BigNumber", i[Symbol.for("nodejs.util.inspect.custom")] = i.valueOf, e != null && v.set(e), v;
}
function Ct(e) {
  var t = e | 0;
  return e > 0 || e === t ? t : t - 1;
}
function Pt(e) {
  for (var t, n, r = 1, i = e.length, o = e[0] + ""; r < i; ) {
    for (t = e[r++] + "", n = re - t.length; n--; t = "0" + t) ;
    o += t;
  }
  for (i = o.length; o.charCodeAt(--i) === 48; ) ;
  return o.slice(0, i + 1 || 1);
}
function zn(e, t) {
  var n, r, i = e.c, o = t.c, s = e.s, c = t.s, u = e.e, d = t.e;
  if (!s || !c) return null;
  if (n = i && !i[0], r = o && !o[0], n || r) return n ? r ? 0 : -c : s;
  if (s != c) return s;
  if (n = s < 0, r = u == d, !i || !o) return r ? 0 : !i ^ n ? 1 : -1;
  if (!r) return u > d ^ n ? 1 : -1;
  for (c = (u = i.length) < (d = o.length) ? u : d, s = 0; s < c; s++) if (i[s] != o[s]) return i[s] > o[s] ^ n ? 1 : -1;
  return u == d ? 0 : u > d ^ n ? 1 : -1;
}
function Ce(e, t, n, r) {
  if (e < t || e > n || e !== kt(e))
    throw Error(vt + (r || "Argument") + (typeof e == "number" ? e < t || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e));
}
function Ji(e) {
  var t = e.c.length - 1;
  return Ct(e.e / re) == t && e.c[t] % 2 != 0;
}
function Qi(e, t) {
  return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t;
}
function fn(e, t, n) {
  var r, i;
  if (t < 0) {
    for (i = n + "."; ++t; i += n) ;
    e = i + e;
  } else if (r = e.length, ++t > r) {
    for (i = n, t -= r; --t; i += n) ;
    e += i;
  } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
  return e;
}
var qu = Jl();
function iE() {
  const { network: e, publicKey: t, format: n, chain: r } = sn(), [i, o] = ue(null), [s, c] = ue(!1);
  return { getBalance: ve(async () => {
    c(!0);
    try {
      if (o(null), !n || !n.payments || !t || !t.payments)
        throw new Error("No wallet is connected");
      const { address: d } = Cd(
        t.payments,
        e,
        Fd[n.payments],
        r
      )[0], g = await new Tc({
        chain: r,
        network: e
      }).getBalance({ address: d }), m = Number(
        new qu(g).multipliedBy(1e8).toFixed(0, qu.ROUND_HALF_DOWN)
      );
      return c(!1), m;
    } catch (d) {
      throw o(d.message), c(!1), d;
    }
  }, [n, e, t]), error: i, loading: s };
}
async function $c({
  wallet: e,
  psbt: t,
  options: n
}) {
  var o, s;
  if ((o = n == null ? void 0 : n.signingIndexes) != null && o.length && ((s = n == null ? void 0 : n.inputsToSign) != null && s.length))
    throw new Error("Cannot have both indexes and inputs to sign together");
  const r = (n == null ? void 0 : n.finalize) ?? !0, i = (n == null ? void 0 : n.extractTx) ?? !0;
  if (e === Lt.UNISAT)
    return await Rd(t, {
      finalize: r,
      extractTx: i
    });
  throw new Error("Invalid wallet selected");
}
function oE() {
  const { wallet: e, network: t, address: n, publicKey: r, chain: i } = sn(), [o, s] = ue(null), [c, u] = ue(!1);
  return { send: ve(
    async (a, g, m, h = !0) => {
      u(!0);
      try {
        if (s(null), !n || !n.payments || !r || !r.payments || !e)
          throw new Error("No wallet is connected");
        const S = new Ba({
          address: n.payments,
          feeRate: m,
          network: t,
          chain: i,
          publicKey: r.payments,
          outputs: [
            {
              address: a,
              value: g
            }
          ]
        });
        await S.prepare();
        const _ = await $c({
          address: n.payments,
          wallet: e,
          network: t,
          psbt: S.toPSBT()
        });
        if (h) {
          const L = await new Tc({ network: t, chain: i }).relay({ hex: _.hex });
          return u(!1), L;
        }
        return u(!1), _.hex;
      } catch (S) {
        return s(S.message), u(!1), null;
      }
    },
    [n, t, r, e]
  ), error: o, loading: c };
}
function sE() {
  const { wallet: e, network: t, address: n, publicKey: r, chain: i } = sn(), [o, s] = ue(!1);
  return { send: ve(
    async ({
      toAddress: u,
      satoshis: d,
      feeRate: a,
      relay: g = !0,
      rbf: m = !1
    }) => {
      s(!0);
      try {
        if (!n || !n.payments || !r || !r.payments || !e)
          throw new Error("No wallet is connected");
        const h = new Ba({
          address: n.payments,
          feeRate: a,
          network: t,
          chain: i,
          publicKey: r.payments,
          outputs: [
            {
              address: u,
              value: d
            }
          ]
        });
        h.setRBF(m), await h.prepare();
        const S = await $c({
          address: n.payments,
          wallet: e,
          network: t,
          psbt: h.toPSBT()
        });
        if (g) {
          const A = await new Tc({ network: t, chain: i }).relay({ hex: S.hex });
          return s(!1), {
            txId: A
          };
        }
        return s(!1), {
          signedPsbtHex: S.hex
        };
      } catch (h) {
        return s(!1), {
          error: h.message
        };
      }
    },
    [n, t, r, e]
  ), isLoading: o };
}
var Ql = {}, Ge = {}, Vo = {};
Vo.byteLength = ym;
Vo.toByteArray = vm;
Vo.fromByteArray = Tm;
var Zt = [], Nt = [], mm = typeof Uint8Array < "u" ? Uint8Array : Array, Ps = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Rr = 0, wm = Ps.length; Rr < wm; ++Rr)
  Zt[Rr] = Ps[Rr], Nt[Ps.charCodeAt(Rr)] = Rr;
Nt[45] = 62;
Nt[95] = 63;
function Zl(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var r = n === t ? 0 : 4 - n % 4;
  return [n, r];
}
function ym(e) {
  var t = Zl(e), n = t[0], r = t[1];
  return (n + r) * 3 / 4 - r;
}
function Em(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function vm(e) {
  var t, n = Zl(e), r = n[0], i = n[1], o = new mm(Em(e, r, i)), s = 0, c = i > 0 ? r - 4 : r, u;
  for (u = 0; u < c; u += 4)
    t = Nt[e.charCodeAt(u)] << 18 | Nt[e.charCodeAt(u + 1)] << 12 | Nt[e.charCodeAt(u + 2)] << 6 | Nt[e.charCodeAt(u + 3)], o[s++] = t >> 16 & 255, o[s++] = t >> 8 & 255, o[s++] = t & 255;
  return i === 2 && (t = Nt[e.charCodeAt(u)] << 2 | Nt[e.charCodeAt(u + 1)] >> 4, o[s++] = t & 255), i === 1 && (t = Nt[e.charCodeAt(u)] << 10 | Nt[e.charCodeAt(u + 1)] << 4 | Nt[e.charCodeAt(u + 2)] >> 2, o[s++] = t >> 8 & 255, o[s++] = t & 255), o;
}
function bm(e) {
  return Zt[e >> 18 & 63] + Zt[e >> 12 & 63] + Zt[e >> 6 & 63] + Zt[e & 63];
}
function Sm(e, t, n) {
  for (var r, i = [], o = t; o < n; o += 3)
    r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(bm(r));
  return i.join("");
}
function Tm(e) {
  for (var t, n = e.length, r = n % 3, i = [], o = 16383, s = 0, c = n - r; s < c; s += o)
    i.push(Sm(e, s, s + o > c ? c : s + o));
  return r === 1 ? (t = e[n - 1], i.push(
    Zt[t >> 2] + Zt[t << 4 & 63] + "=="
  )) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], i.push(
    Zt[t >> 10] + Zt[t >> 4 & 63] + Zt[t << 2 & 63] + "="
  )), i.join("");
}
var Hc = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Hc.read = function(e, t, n, r, i) {
  var o, s, c = i * 8 - r - 1, u = (1 << c) - 1, d = u >> 1, a = -7, g = n ? i - 1 : 0, m = n ? -1 : 1, h = e[t + g];
  for (g += m, o = h & (1 << -a) - 1, h >>= -a, a += c; a > 0; o = o * 256 + e[t + g], g += m, a -= 8)
    ;
  for (s = o & (1 << -a) - 1, o >>= -a, a += r; a > 0; s = s * 256 + e[t + g], g += m, a -= 8)
    ;
  if (o === 0)
    o = 1 - d;
  else {
    if (o === u)
      return s ? NaN : (h ? -1 : 1) * (1 / 0);
    s = s + Math.pow(2, r), o = o - d;
  }
  return (h ? -1 : 1) * s * Math.pow(2, o - r);
};
Hc.write = function(e, t, n, r, i, o) {
  var s, c, u, d = o * 8 - i - 1, a = (1 << d) - 1, g = a >> 1, m = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = r ? 0 : o - 1, S = r ? 1 : -1, _ = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (c = isNaN(t) ? 1 : 0, s = a) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), s + g >= 1 ? t += m / u : t += m * Math.pow(2, 1 - g), t * u >= 2 && (s++, u /= 2), s + g >= a ? (c = 0, s = a) : s + g >= 1 ? (c = (t * u - 1) * Math.pow(2, i), s = s + g) : (c = t * Math.pow(2, g - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + h] = c & 255, h += S, c /= 256, i -= 8)
    ;
  for (s = s << i | c, d += i; d > 0; e[n + h] = s & 255, h += S, s /= 256, d -= 8)
    ;
  e[n + h - S] |= _ * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = Vo, n = Hc, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = a, e.SlowBuffer = H, e.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  e.kMaxLength = i;
  const { Uint8Array: o, ArrayBuffer: s, SharedArrayBuffer: c } = globalThis;
  a.TYPED_ARRAY_SUPPORT = u(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function u() {
    try {
      const y = new o(1), l = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(l, o.prototype), Object.setPrototypeOf(y, l), y.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(a.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.byteOffset;
    }
  });
  function d(y) {
    if (y > i)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
    const l = new o(y);
    return Object.setPrototypeOf(l, a.prototype), l;
  }
  function a(y, l, f) {
    if (typeof y == "number") {
      if (typeof l == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return S(y);
    }
    return g(y, l, f);
  }
  a.poolSize = 8192;
  function g(y, l, f) {
    if (typeof y == "string")
      return _(y, l);
    if (s.isView(y))
      return L(y);
    if (y == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y
      );
    if (bt(y, s) || y && bt(y.buffer, s) || typeof c < "u" && (bt(y, c) || y && bt(y.buffer, c)))
      return v(y, l, f);
    if (typeof y == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const x = y.valueOf && y.valueOf();
    if (x != null && x !== y)
      return a.from(x, l, f);
    const $ = I(y);
    if ($) return $;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof y[Symbol.toPrimitive] == "function")
      return a.from(y[Symbol.toPrimitive]("string"), l, f);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y
    );
  }
  a.from = function(y, l, f) {
    return g(y, l, f);
  }, Object.setPrototypeOf(a.prototype, o.prototype), Object.setPrototypeOf(a, o);
  function m(y) {
    if (typeof y != "number")
      throw new TypeError('"size" argument must be of type number');
    if (y < 0)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
  }
  function h(y, l, f) {
    return m(y), y <= 0 ? d(y) : l !== void 0 ? typeof f == "string" ? d(y).fill(l, f) : d(y).fill(l) : d(y);
  }
  a.alloc = function(y, l, f) {
    return h(y, l, f);
  };
  function S(y) {
    return m(y), d(y < 0 ? 0 : O(y) | 0);
  }
  a.allocUnsafe = function(y) {
    return S(y);
  }, a.allocUnsafeSlow = function(y) {
    return S(y);
  };
  function _(y, l) {
    if ((typeof l != "string" || l === "") && (l = "utf8"), !a.isEncoding(l))
      throw new TypeError("Unknown encoding: " + l);
    const f = B(y, l) | 0;
    let x = d(f);
    const $ = x.write(y, l);
    return $ !== f && (x = x.slice(0, $)), x;
  }
  function A(y) {
    const l = y.length < 0 ? 0 : O(y.length) | 0, f = d(l);
    for (let x = 0; x < l; x += 1)
      f[x] = y[x] & 255;
    return f;
  }
  function L(y) {
    if (bt(y, o)) {
      const l = new o(y);
      return v(l.buffer, l.byteOffset, l.byteLength);
    }
    return A(y);
  }
  function v(y, l, f) {
    if (l < 0 || y.byteLength < l)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (y.byteLength < l + (f || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let x;
    return l === void 0 && f === void 0 ? x = new o(y) : f === void 0 ? x = new o(y, l) : x = new o(y, l, f), Object.setPrototypeOf(x, a.prototype), x;
  }
  function I(y) {
    if (a.isBuffer(y)) {
      const l = O(y.length) | 0, f = d(l);
      return f.length === 0 || y.copy(f, 0, 0, l), f;
    }
    if (y.length !== void 0)
      return typeof y.length != "number" || kr(y.length) ? d(0) : A(y);
    if (y.type === "Buffer" && Array.isArray(y.data))
      return A(y.data);
  }
  function O(y) {
    if (y >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return y | 0;
  }
  function H(y) {
    return +y != y && (y = 0), a.alloc(+y);
  }
  a.isBuffer = function(l) {
    return l != null && l._isBuffer === !0 && l !== a.prototype;
  }, a.compare = function(l, f) {
    if (bt(l, o) && (l = a.from(l, l.offset, l.byteLength)), bt(f, o) && (f = a.from(f, f.offset, f.byteLength)), !a.isBuffer(l) || !a.isBuffer(f))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (l === f) return 0;
    let x = l.length, $ = f.length;
    for (let j = 0, K = Math.min(x, $); j < K; ++j)
      if (l[j] !== f[j]) {
        x = l[j], $ = f[j];
        break;
      }
    return x < $ ? -1 : $ < x ? 1 : 0;
  }, a.isEncoding = function(l) {
    switch (String(l).toLowerCase()) {
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
  }, a.concat = function(l, f) {
    if (!Array.isArray(l))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (l.length === 0)
      return a.alloc(0);
    let x;
    if (f === void 0)
      for (f = 0, x = 0; x < l.length; ++x)
        f += l[x].length;
    const $ = a.allocUnsafe(f);
    let j = 0;
    for (x = 0; x < l.length; ++x) {
      let K = l[x];
      if (bt(K, o))
        j + K.length > $.length ? (a.isBuffer(K) || (K = a.from(K)), K.copy($, j)) : o.prototype.set.call(
          $,
          K,
          j
        );
      else if (a.isBuffer(K))
        K.copy($, j);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      j += K.length;
    }
    return $;
  };
  function B(y, l) {
    if (a.isBuffer(y))
      return y.length;
    if (s.isView(y) || bt(y, s))
      return y.byteLength;
    if (typeof y != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof y
      );
    const f = y.length, x = arguments.length > 2 && arguments[2] === !0;
    if (!x && f === 0) return 0;
    let $ = !1;
    for (; ; )
      switch (l) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return si(y).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return Gi(y).length;
        default:
          if ($)
            return x ? -1 : si(y).length;
          l = ("" + l).toLowerCase(), $ = !0;
      }
  }
  a.byteLength = B;
  function W(y, l, f) {
    let x = !1;
    if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((f === void 0 || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, l >>>= 0, f <= l))
      return "";
    for (y || (y = "utf8"); ; )
      switch (y) {
        case "hex":
          return Z(this, l, f);
        case "utf8":
        case "utf-8":
          return U(this, l, f);
        case "ascii":
          return G(this, l, f);
        case "latin1":
        case "binary":
          return q(this, l, f);
        case "base64":
          return C(this, l, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return te(this, l, f);
        default:
          if (x) throw new TypeError("Unknown encoding: " + y);
          y = (y + "").toLowerCase(), x = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function w(y, l, f) {
    const x = y[l];
    y[l] = y[f], y[f] = x;
  }
  a.prototype.swap16 = function() {
    const l = this.length;
    if (l % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let f = 0; f < l; f += 2)
      w(this, f, f + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const l = this.length;
    if (l % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let f = 0; f < l; f += 4)
      w(this, f, f + 3), w(this, f + 1, f + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const l = this.length;
    if (l % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let f = 0; f < l; f += 8)
      w(this, f, f + 7), w(this, f + 1, f + 6), w(this, f + 2, f + 5), w(this, f + 3, f + 4);
    return this;
  }, a.prototype.toString = function() {
    const l = this.length;
    return l === 0 ? "" : arguments.length === 0 ? U(this, 0, l) : W.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(l) {
    if (!a.isBuffer(l)) throw new TypeError("Argument must be a Buffer");
    return this === l ? !0 : a.compare(this, l) === 0;
  }, a.prototype.inspect = function() {
    let l = "";
    const f = e.INSPECT_MAX_BYTES;
    return l = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim(), this.length > f && (l += " ... "), "<Buffer " + l + ">";
  }, r && (a.prototype[r] = a.prototype.inspect), a.prototype.compare = function(l, f, x, $, j) {
    if (bt(l, o) && (l = a.from(l, l.offset, l.byteLength)), !a.isBuffer(l))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof l
      );
    if (f === void 0 && (f = 0), x === void 0 && (x = l ? l.length : 0), $ === void 0 && ($ = 0), j === void 0 && (j = this.length), f < 0 || x > l.length || $ < 0 || j > this.length)
      throw new RangeError("out of range index");
    if ($ >= j && f >= x)
      return 0;
    if ($ >= j)
      return -1;
    if (f >= x)
      return 1;
    if (f >>>= 0, x >>>= 0, $ >>>= 0, j >>>= 0, this === l) return 0;
    let K = j - $, ce = x - f;
    const Ae = Math.min(K, ce), ye = this.slice($, j), Ie = l.slice(f, x);
    for (let de = 0; de < Ae; ++de)
      if (ye[de] !== Ie[de]) {
        K = ye[de], ce = Ie[de];
        break;
      }
    return K < ce ? -1 : ce < K ? 1 : 0;
  };
  function p(y, l, f, x, $) {
    if (y.length === 0) return -1;
    if (typeof f == "string" ? (x = f, f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648), f = +f, kr(f) && (f = $ ? 0 : y.length - 1), f < 0 && (f = y.length + f), f >= y.length) {
      if ($) return -1;
      f = y.length - 1;
    } else if (f < 0)
      if ($) f = 0;
      else return -1;
    if (typeof l == "string" && (l = a.from(l, x)), a.isBuffer(l))
      return l.length === 0 ? -1 : b(y, l, f, x, $);
    if (typeof l == "number")
      return l = l & 255, typeof o.prototype.indexOf == "function" ? $ ? o.prototype.indexOf.call(y, l, f) : o.prototype.lastIndexOf.call(y, l, f) : b(y, [l], f, x, $);
    throw new TypeError("val must be string, number or Buffer");
  }
  function b(y, l, f, x, $) {
    let j = 1, K = y.length, ce = l.length;
    if (x !== void 0 && (x = String(x).toLowerCase(), x === "ucs2" || x === "ucs-2" || x === "utf16le" || x === "utf-16le")) {
      if (y.length < 2 || l.length < 2)
        return -1;
      j = 2, K /= 2, ce /= 2, f /= 2;
    }
    function Ae(Ie, de) {
      return j === 1 ? Ie[de] : Ie.readUInt16BE(de * j);
    }
    let ye;
    if ($) {
      let Ie = -1;
      for (ye = f; ye < K; ye++)
        if (Ae(y, ye) === Ae(l, Ie === -1 ? 0 : ye - Ie)) {
          if (Ie === -1 && (Ie = ye), ye - Ie + 1 === ce) return Ie * j;
        } else
          Ie !== -1 && (ye -= ye - Ie), Ie = -1;
    } else
      for (f + ce > K && (f = K - ce), ye = f; ye >= 0; ye--) {
        let Ie = !0;
        for (let de = 0; de < ce; de++)
          if (Ae(y, ye + de) !== Ae(l, de)) {
            Ie = !1;
            break;
          }
        if (Ie) return ye;
      }
    return -1;
  }
  a.prototype.includes = function(l, f, x) {
    return this.indexOf(l, f, x) !== -1;
  }, a.prototype.indexOf = function(l, f, x) {
    return p(this, l, f, x, !0);
  }, a.prototype.lastIndexOf = function(l, f, x) {
    return p(this, l, f, x, !1);
  };
  function k(y, l, f, x) {
    f = Number(f) || 0;
    const $ = y.length - f;
    x ? (x = Number(x), x > $ && (x = $)) : x = $;
    const j = l.length;
    x > j / 2 && (x = j / 2);
    let K;
    for (K = 0; K < x; ++K) {
      const ce = parseInt(l.substr(K * 2, 2), 16);
      if (kr(ce)) return K;
      y[f + K] = ce;
    }
    return K;
  }
  function E(y, l, f, x) {
    return Ar(si(l, y.length - f), y, f, x);
  }
  function T(y, l, f, x) {
    return Ar(ls(l), y, f, x);
  }
  function F(y, l, f, x) {
    return Ar(Gi(l), y, f, x);
  }
  function P(y, l, f, x) {
    return Ar(ci(l, y.length - f), y, f, x);
  }
  a.prototype.write = function(l, f, x, $) {
    if (f === void 0)
      $ = "utf8", x = this.length, f = 0;
    else if (x === void 0 && typeof f == "string")
      $ = f, x = this.length, f = 0;
    else if (isFinite(f))
      f = f >>> 0, isFinite(x) ? (x = x >>> 0, $ === void 0 && ($ = "utf8")) : ($ = x, x = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const j = this.length - f;
    if ((x === void 0 || x > j) && (x = j), l.length > 0 && (x < 0 || f < 0) || f > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    $ || ($ = "utf8");
    let K = !1;
    for (; ; )
      switch ($) {
        case "hex":
          return k(this, l, f, x);
        case "utf8":
        case "utf-8":
          return E(this, l, f, x);
        case "ascii":
        case "latin1":
        case "binary":
          return T(this, l, f, x);
        case "base64":
          return F(this, l, f, x);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return P(this, l, f, x);
        default:
          if (K) throw new TypeError("Unknown encoding: " + $);
          $ = ("" + $).toLowerCase(), K = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function C(y, l, f) {
    return l === 0 && f === y.length ? t.fromByteArray(y) : t.fromByteArray(y.slice(l, f));
  }
  function U(y, l, f) {
    f = Math.min(y.length, f);
    const x = [];
    let $ = l;
    for (; $ < f; ) {
      const j = y[$];
      let K = null, ce = j > 239 ? 4 : j > 223 ? 3 : j > 191 ? 2 : 1;
      if ($ + ce <= f) {
        let Ae, ye, Ie, de;
        switch (ce) {
          case 1:
            j < 128 && (K = j);
            break;
          case 2:
            Ae = y[$ + 1], (Ae & 192) === 128 && (de = (j & 31) << 6 | Ae & 63, de > 127 && (K = de));
            break;
          case 3:
            Ae = y[$ + 1], ye = y[$ + 2], (Ae & 192) === 128 && (ye & 192) === 128 && (de = (j & 15) << 12 | (Ae & 63) << 6 | ye & 63, de > 2047 && (de < 55296 || de > 57343) && (K = de));
            break;
          case 4:
            Ae = y[$ + 1], ye = y[$ + 2], Ie = y[$ + 3], (Ae & 192) === 128 && (ye & 192) === 128 && (Ie & 192) === 128 && (de = (j & 15) << 18 | (Ae & 63) << 12 | (ye & 63) << 6 | Ie & 63, de > 65535 && de < 1114112 && (K = de));
        }
      }
      K === null ? (K = 65533, ce = 1) : K > 65535 && (K -= 65536, x.push(K >>> 10 & 1023 | 55296), K = 56320 | K & 1023), x.push(K), $ += ce;
    }
    return D(x);
  }
  const N = 4096;
  function D(y) {
    const l = y.length;
    if (l <= N)
      return String.fromCharCode.apply(String, y);
    let f = "", x = 0;
    for (; x < l; )
      f += String.fromCharCode.apply(
        String,
        y.slice(x, x += N)
      );
    return f;
  }
  function G(y, l, f) {
    let x = "";
    f = Math.min(y.length, f);
    for (let $ = l; $ < f; ++$)
      x += String.fromCharCode(y[$] & 127);
    return x;
  }
  function q(y, l, f) {
    let x = "";
    f = Math.min(y.length, f);
    for (let $ = l; $ < f; ++$)
      x += String.fromCharCode(y[$]);
    return x;
  }
  function Z(y, l, f) {
    const x = y.length;
    (!l || l < 0) && (l = 0), (!f || f < 0 || f > x) && (f = x);
    let $ = "";
    for (let j = l; j < f; ++j)
      $ += qn[y[j]];
    return $;
  }
  function te(y, l, f) {
    const x = y.slice(l, f);
    let $ = "";
    for (let j = 0; j < x.length - 1; j += 2)
      $ += String.fromCharCode(x[j] + x[j + 1] * 256);
    return $;
  }
  a.prototype.slice = function(l, f) {
    const x = this.length;
    l = ~~l, f = f === void 0 ? x : ~~f, l < 0 ? (l += x, l < 0 && (l = 0)) : l > x && (l = x), f < 0 ? (f += x, f < 0 && (f = 0)) : f > x && (f = x), f < l && (f = l);
    const $ = this.subarray(l, f);
    return Object.setPrototypeOf($, a.prototype), $;
  };
  function ie(y, l, f) {
    if (y % 1 !== 0 || y < 0) throw new RangeError("offset is not uint");
    if (y + l > f) throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(l, f, x) {
    l = l >>> 0, f = f >>> 0, x || ie(l, f, this.length);
    let $ = this[l], j = 1, K = 0;
    for (; ++K < f && (j *= 256); )
      $ += this[l + K] * j;
    return $;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(l, f, x) {
    l = l >>> 0, f = f >>> 0, x || ie(l, f, this.length);
    let $ = this[l + --f], j = 1;
    for (; f > 0 && (j *= 256); )
      $ += this[l + --f] * j;
    return $;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(l, f) {
    return l = l >>> 0, f || ie(l, 1, this.length), this[l];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(l, f) {
    return l = l >>> 0, f || ie(l, 2, this.length), this[l] | this[l + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(l, f) {
    return l = l >>> 0, f || ie(l, 2, this.length), this[l] << 8 | this[l + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(l, f) {
    return l = l >>> 0, f || ie(l, 4, this.length), (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(l, f) {
    return l = l >>> 0, f || ie(l, 4, this.length), this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]);
  }, a.prototype.readBigUInt64LE = Kt(function(l) {
    l = l >>> 0, xt(l, "offset");
    const f = this[l], x = this[l + 7];
    (f === void 0 || x === void 0) && xn(l, this.length - 8);
    const $ = f + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24, j = this[++l] + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + x * 2 ** 24;
    return BigInt($) + (BigInt(j) << BigInt(32));
  }), a.prototype.readBigUInt64BE = Kt(function(l) {
    l = l >>> 0, xt(l, "offset");
    const f = this[l], x = this[l + 7];
    (f === void 0 || x === void 0) && xn(l, this.length - 8);
    const $ = f * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l], j = this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + x;
    return (BigInt($) << BigInt(32)) + BigInt(j);
  }), a.prototype.readIntLE = function(l, f, x) {
    l = l >>> 0, f = f >>> 0, x || ie(l, f, this.length);
    let $ = this[l], j = 1, K = 0;
    for (; ++K < f && (j *= 256); )
      $ += this[l + K] * j;
    return j *= 128, $ >= j && ($ -= Math.pow(2, 8 * f)), $;
  }, a.prototype.readIntBE = function(l, f, x) {
    l = l >>> 0, f = f >>> 0, x || ie(l, f, this.length);
    let $ = f, j = 1, K = this[l + --$];
    for (; $ > 0 && (j *= 256); )
      K += this[l + --$] * j;
    return j *= 128, K >= j && (K -= Math.pow(2, 8 * f)), K;
  }, a.prototype.readInt8 = function(l, f) {
    return l = l >>> 0, f || ie(l, 1, this.length), this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l];
  }, a.prototype.readInt16LE = function(l, f) {
    l = l >>> 0, f || ie(l, 2, this.length);
    const x = this[l] | this[l + 1] << 8;
    return x & 32768 ? x | 4294901760 : x;
  }, a.prototype.readInt16BE = function(l, f) {
    l = l >>> 0, f || ie(l, 2, this.length);
    const x = this[l + 1] | this[l] << 8;
    return x & 32768 ? x | 4294901760 : x;
  }, a.prototype.readInt32LE = function(l, f) {
    return l = l >>> 0, f || ie(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24;
  }, a.prototype.readInt32BE = function(l, f) {
    return l = l >>> 0, f || ie(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3];
  }, a.prototype.readBigInt64LE = Kt(function(l) {
    l = l >>> 0, xt(l, "offset");
    const f = this[l], x = this[l + 7];
    (f === void 0 || x === void 0) && xn(l, this.length - 8);
    const $ = this[l + 4] + this[l + 5] * 2 ** 8 + this[l + 6] * 2 ** 16 + (x << 24);
    return (BigInt($) << BigInt(32)) + BigInt(f + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24);
  }), a.prototype.readBigInt64BE = Kt(function(l) {
    l = l >>> 0, xt(l, "offset");
    const f = this[l], x = this[l + 7];
    (f === void 0 || x === void 0) && xn(l, this.length - 8);
    const $ = (f << 24) + // Overflow
    this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
    return (BigInt($) << BigInt(32)) + BigInt(this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + x);
  }), a.prototype.readFloatLE = function(l, f) {
    return l = l >>> 0, f || ie(l, 4, this.length), n.read(this, l, !0, 23, 4);
  }, a.prototype.readFloatBE = function(l, f) {
    return l = l >>> 0, f || ie(l, 4, this.length), n.read(this, l, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(l, f) {
    return l = l >>> 0, f || ie(l, 8, this.length), n.read(this, l, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(l, f) {
    return l = l >>> 0, f || ie(l, 8, this.length), n.read(this, l, !1, 52, 8);
  };
  function J(y, l, f, x, $, j) {
    if (!a.isBuffer(y)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (l > $ || l < j) throw new RangeError('"value" argument is out of bounds');
    if (f + x > y.length) throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(l, f, x, $) {
    if (l = +l, f = f >>> 0, x = x >>> 0, !$) {
      const ce = Math.pow(2, 8 * x) - 1;
      J(this, l, f, x, ce, 0);
    }
    let j = 1, K = 0;
    for (this[f] = l & 255; ++K < x && (j *= 256); )
      this[f + K] = l / j & 255;
    return f + x;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(l, f, x, $) {
    if (l = +l, f = f >>> 0, x = x >>> 0, !$) {
      const ce = Math.pow(2, 8 * x) - 1;
      J(this, l, f, x, ce, 0);
    }
    let j = x - 1, K = 1;
    for (this[f + j] = l & 255; --j >= 0 && (K *= 256); )
      this[f + j] = l / K & 255;
    return f + x;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(l, f, x) {
    return l = +l, f = f >>> 0, x || J(this, l, f, 1, 255, 0), this[f] = l & 255, f + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(l, f, x) {
    return l = +l, f = f >>> 0, x || J(this, l, f, 2, 65535, 0), this[f] = l & 255, this[f + 1] = l >>> 8, f + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(l, f, x) {
    return l = +l, f = f >>> 0, x || J(this, l, f, 2, 65535, 0), this[f] = l >>> 8, this[f + 1] = l & 255, f + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(l, f, x) {
    return l = +l, f = f >>> 0, x || J(this, l, f, 4, 4294967295, 0), this[f + 3] = l >>> 24, this[f + 2] = l >>> 16, this[f + 1] = l >>> 8, this[f] = l & 255, f + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(l, f, x) {
    return l = +l, f = f >>> 0, x || J(this, l, f, 4, 4294967295, 0), this[f] = l >>> 24, this[f + 1] = l >>> 16, this[f + 2] = l >>> 8, this[f + 3] = l & 255, f + 4;
  };
  function le(y, l, f, x, $) {
    ge(l, x, $, y, f, 7);
    let j = Number(l & BigInt(4294967295));
    y[f++] = j, j = j >> 8, y[f++] = j, j = j >> 8, y[f++] = j, j = j >> 8, y[f++] = j;
    let K = Number(l >> BigInt(32) & BigInt(4294967295));
    return y[f++] = K, K = K >> 8, y[f++] = K, K = K >> 8, y[f++] = K, K = K >> 8, y[f++] = K, f;
  }
  function be(y, l, f, x, $) {
    ge(l, x, $, y, f, 7);
    let j = Number(l & BigInt(4294967295));
    y[f + 7] = j, j = j >> 8, y[f + 6] = j, j = j >> 8, y[f + 5] = j, j = j >> 8, y[f + 4] = j;
    let K = Number(l >> BigInt(32) & BigInt(4294967295));
    return y[f + 3] = K, K = K >> 8, y[f + 2] = K, K = K >> 8, y[f + 1] = K, K = K >> 8, y[f] = K, f + 8;
  }
  a.prototype.writeBigUInt64LE = Kt(function(l, f = 0) {
    return le(this, l, f, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = Kt(function(l, f = 0) {
    return be(this, l, f, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(l, f, x, $) {
    if (l = +l, f = f >>> 0, !$) {
      const Ae = Math.pow(2, 8 * x - 1);
      J(this, l, f, x, Ae - 1, -Ae);
    }
    let j = 0, K = 1, ce = 0;
    for (this[f] = l & 255; ++j < x && (K *= 256); )
      l < 0 && ce === 0 && this[f + j - 1] !== 0 && (ce = 1), this[f + j] = (l / K >> 0) - ce & 255;
    return f + x;
  }, a.prototype.writeIntBE = function(l, f, x, $) {
    if (l = +l, f = f >>> 0, !$) {
      const Ae = Math.pow(2, 8 * x - 1);
      J(this, l, f, x, Ae - 1, -Ae);
    }
    let j = x - 1, K = 1, ce = 0;
    for (this[f + j] = l & 255; --j >= 0 && (K *= 256); )
      l < 0 && ce === 0 && this[f + j + 1] !== 0 && (ce = 1), this[f + j] = (l / K >> 0) - ce & 255;
    return f + x;
  }, a.prototype.writeInt8 = function(l, f, x) {
    return l = +l, f = f >>> 0, x || J(this, l, f, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[f] = l & 255, f + 1;
  }, a.prototype.writeInt16LE = function(l, f, x) {
    return l = +l, f = f >>> 0, x || J(this, l, f, 2, 32767, -32768), this[f] = l & 255, this[f + 1] = l >>> 8, f + 2;
  }, a.prototype.writeInt16BE = function(l, f, x) {
    return l = +l, f = f >>> 0, x || J(this, l, f, 2, 32767, -32768), this[f] = l >>> 8, this[f + 1] = l & 255, f + 2;
  }, a.prototype.writeInt32LE = function(l, f, x) {
    return l = +l, f = f >>> 0, x || J(this, l, f, 4, 2147483647, -2147483648), this[f] = l & 255, this[f + 1] = l >>> 8, this[f + 2] = l >>> 16, this[f + 3] = l >>> 24, f + 4;
  }, a.prototype.writeInt32BE = function(l, f, x) {
    return l = +l, f = f >>> 0, x || J(this, l, f, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[f] = l >>> 24, this[f + 1] = l >>> 16, this[f + 2] = l >>> 8, this[f + 3] = l & 255, f + 4;
  }, a.prototype.writeBigInt64LE = Kt(function(l, f = 0) {
    return le(this, l, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = Kt(function(l, f = 0) {
    return be(this, l, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Qe(y, l, f, x, $, j) {
    if (f + x > y.length) throw new RangeError("Index out of range");
    if (f < 0) throw new RangeError("Index out of range");
  }
  function ot(y, l, f, x, $) {
    return l = +l, f = f >>> 0, $ || Qe(y, l, f, 4), n.write(y, l, f, x, 23, 4), f + 4;
  }
  a.prototype.writeFloatLE = function(l, f, x) {
    return ot(this, l, f, !0, x);
  }, a.prototype.writeFloatBE = function(l, f, x) {
    return ot(this, l, f, !1, x);
  };
  function Ut(y, l, f, x, $) {
    return l = +l, f = f >>> 0, $ || Qe(y, l, f, 8), n.write(y, l, f, x, 52, 8), f + 8;
  }
  a.prototype.writeDoubleLE = function(l, f, x) {
    return Ut(this, l, f, !0, x);
  }, a.prototype.writeDoubleBE = function(l, f, x) {
    return Ut(this, l, f, !1, x);
  }, a.prototype.copy = function(l, f, x, $) {
    if (!a.isBuffer(l)) throw new TypeError("argument should be a Buffer");
    if (x || (x = 0), !$ && $ !== 0 && ($ = this.length), f >= l.length && (f = l.length), f || (f = 0), $ > 0 && $ < x && ($ = x), $ === x || l.length === 0 || this.length === 0) return 0;
    if (f < 0)
      throw new RangeError("targetStart out of bounds");
    if (x < 0 || x >= this.length) throw new RangeError("Index out of range");
    if ($ < 0) throw new RangeError("sourceEnd out of bounds");
    $ > this.length && ($ = this.length), l.length - f < $ - x && ($ = l.length - f + x);
    const j = $ - x;
    return this === l && typeof o.prototype.copyWithin == "function" ? this.copyWithin(f, x, $) : o.prototype.set.call(
      l,
      this.subarray(x, $),
      f
    ), j;
  }, a.prototype.fill = function(l, f, x, $) {
    if (typeof l == "string") {
      if (typeof f == "string" ? ($ = f, f = 0, x = this.length) : typeof x == "string" && ($ = x, x = this.length), $ !== void 0 && typeof $ != "string")
        throw new TypeError("encoding must be a string");
      if (typeof $ == "string" && !a.isEncoding($))
        throw new TypeError("Unknown encoding: " + $);
      if (l.length === 1) {
        const K = l.charCodeAt(0);
        ($ === "utf8" && K < 128 || $ === "latin1") && (l = K);
      }
    } else typeof l == "number" ? l = l & 255 : typeof l == "boolean" && (l = Number(l));
    if (f < 0 || this.length < f || this.length < x)
      throw new RangeError("Out of range index");
    if (x <= f)
      return this;
    f = f >>> 0, x = x === void 0 ? this.length : x >>> 0, l || (l = 0);
    let j;
    if (typeof l == "number")
      for (j = f; j < x; ++j)
        this[j] = l;
    else {
      const K = a.isBuffer(l) ? l : a.from(l, $), ce = K.length;
      if (ce === 0)
        throw new TypeError('The value "' + l + '" is invalid for argument "value"');
      for (j = 0; j < x - f; ++j)
        this[j + f] = K[j % ce];
    }
    return this;
  };
  const je = {};
  function It(y, l, f) {
    je[y] = class extends f {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: l.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${y}]`, this.stack, delete this.name;
      }
      get code() {
        return y;
      }
      set code($) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: $,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${y}]: ${this.message}`;
      }
    };
  }
  It(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(y) {
      return y ? `${y} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), It(
    "ERR_INVALID_ARG_TYPE",
    function(y, l) {
      return `The "${y}" argument must be of type number. Received type ${typeof l}`;
    },
    TypeError
  ), It(
    "ERR_OUT_OF_RANGE",
    function(y, l, f) {
      let x = `The value of "${y}" is out of range.`, $ = f;
      return Number.isInteger(f) && Math.abs(f) > 2 ** 32 ? $ = Ze(String(f)) : typeof f == "bigint" && ($ = String(f), (f > BigInt(2) ** BigInt(32) || f < -(BigInt(2) ** BigInt(32))) && ($ = Ze($)), $ += "n"), x += ` It must be ${l}. Received ${$}`, x;
    },
    RangeError
  );
  function Ze(y) {
    let l = "", f = y.length;
    const x = y[0] === "-" ? 1 : 0;
    for (; f >= x + 4; f -= 3)
      l = `_${y.slice(f - 3, f)}${l}`;
    return `${y.slice(0, f)}${l}`;
  }
  function We(y, l, f) {
    xt(l, "offset"), (y[l] === void 0 || y[l + f] === void 0) && xn(l, y.length - (f + 1));
  }
  function ge(y, l, f, x, $, j) {
    if (y > f || y < l) {
      const K = typeof l == "bigint" ? "n" : "";
      let ce;
      throw l === 0 || l === BigInt(0) ? ce = `>= 0${K} and < 2${K} ** ${(j + 1) * 8}${K}` : ce = `>= -(2${K} ** ${(j + 1) * 8 - 1}${K}) and < 2 ** ${(j + 1) * 8 - 1}${K}`, new je.ERR_OUT_OF_RANGE("value", ce, y);
    }
    We(x, $, j);
  }
  function xt(y, l) {
    if (typeof y != "number")
      throw new je.ERR_INVALID_ARG_TYPE(l, "number", y);
  }
  function xn(y, l, f) {
    throw Math.floor(y) !== y ? (xt(y, f), new je.ERR_OUT_OF_RANGE("offset", "an integer", y)) : l < 0 ? new je.ERR_BUFFER_OUT_OF_BOUNDS() : new je.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${l}`,
      y
    );
  }
  const Vi = /[^+/0-9A-Za-z-_]/g;
  function Pr(y) {
    if (y = y.split("=")[0], y = y.trim().replace(Vi, ""), y.length < 2) return "";
    for (; y.length % 4 !== 0; )
      y = y + "=";
    return y;
  }
  function si(y, l) {
    l = l || 1 / 0;
    let f;
    const x = y.length;
    let $ = null;
    const j = [];
    for (let K = 0; K < x; ++K) {
      if (f = y.charCodeAt(K), f > 55295 && f < 57344) {
        if (!$) {
          if (f > 56319) {
            (l -= 3) > -1 && j.push(239, 191, 189);
            continue;
          } else if (K + 1 === x) {
            (l -= 3) > -1 && j.push(239, 191, 189);
            continue;
          }
          $ = f;
          continue;
        }
        if (f < 56320) {
          (l -= 3) > -1 && j.push(239, 191, 189), $ = f;
          continue;
        }
        f = ($ - 55296 << 10 | f - 56320) + 65536;
      } else $ && (l -= 3) > -1 && j.push(239, 191, 189);
      if ($ = null, f < 128) {
        if ((l -= 1) < 0) break;
        j.push(f);
      } else if (f < 2048) {
        if ((l -= 2) < 0) break;
        j.push(
          f >> 6 | 192,
          f & 63 | 128
        );
      } else if (f < 65536) {
        if ((l -= 3) < 0) break;
        j.push(
          f >> 12 | 224,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else if (f < 1114112) {
        if ((l -= 4) < 0) break;
        j.push(
          f >> 18 | 240,
          f >> 12 & 63 | 128,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return j;
  }
  function ls(y) {
    const l = [];
    for (let f = 0; f < y.length; ++f)
      l.push(y.charCodeAt(f) & 255);
    return l;
  }
  function ci(y, l) {
    let f, x, $;
    const j = [];
    for (let K = 0; K < y.length && !((l -= 2) < 0); ++K)
      f = y.charCodeAt(K), x = f >> 8, $ = f % 256, j.push($), j.push(x);
    return j;
  }
  function Gi(y) {
    return t.toByteArray(Pr(y));
  }
  function Ar(y, l, f, x) {
    let $;
    for ($ = 0; $ < x && !($ + f >= l.length || $ >= y.length); ++$)
      l[$ + f] = y[$];
    return $;
  }
  function bt(y, l) {
    return y instanceof l || y != null && y.constructor != null && y.constructor.name != null && y.constructor.name === l.name;
  }
  function kr(y) {
    return y !== y;
  }
  const qn = function() {
    const y = "0123456789abcdef", l = new Array(256);
    for (let f = 0; f < 16; ++f) {
      const x = f * 16;
      for (let $ = 0; $ < 16; ++$)
        l[x + $] = y[f] + y[$];
    }
    return l;
  }();
  function Kt(y) {
    return typeof BigInt > "u" ? qi : y;
  }
  function qi() {
    throw new Error("BigInt not supported");
  }
})(Ge);
const M = Ge.Buffer, _m = Ge.Blob, Im = Ge.BlobOptions, xm = Ge.Buffer, Om = Ge.File, Pm = Ge.FileOptions, Am = Ge.INSPECT_MAX_BYTES, km = Ge.SlowBuffer, Cm = Ge.TranscodeEncoding, Fm = Ge.atob, Nm = Ge.btoa, Rm = Ge.constants, Bm = Ge.isAscii, Lm = Ge.isUtf8, Um = Ge.kMaxLength, $m = Ge.kStringMaxLength, Hm = Ge.resolveObjectURL, Mm = Ge.transcode, Dm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Blob: _m,
  BlobOptions: Im,
  Buffer: xm,
  File: Om,
  FileOptions: Pm,
  INSPECT_MAX_BYTES: Am,
  SlowBuffer: km,
  TranscodeEncoding: Cm,
  atob: Fm,
  btoa: Nm,
  constants: Rm,
  default: M,
  isAscii: Bm,
  isUtf8: Lm,
  kMaxLength: Um,
  kStringMaxLength: $m,
  resolveObjectURL: Hm,
  transcode: Mm
}, Symbol.toStringTag, { value: "Module" }));
var ft = {}, Ye = {};
Object.defineProperty(Ye, "__esModule", { value: !0 });
Ye.testnet = Ye.regtest = Ye.bitcoin = void 0;
Ye.bitcoin = {
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
Ye.regtest = {
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
Ye.testnet = {
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
var As = {}, Go = {}, ks = {}, vn = {};
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.encode = vn.decode = vn.check = void 0;
function jm(e) {
  if (e.length < 8 || e.length > 72 || e[0] !== 48 || e[1] !== e.length - 2 || e[2] !== 2) return !1;
  const t = e[3];
  if (t === 0 || 5 + t >= e.length || e[4 + t] !== 2) return !1;
  const n = e[5 + t];
  return !(n === 0 || 6 + t + n !== e.length || e[4] & 128 || t > 1 && e[4] === 0 && !(e[5] & 128) || e[t + 6] & 128 || n > 1 && e[t + 6] === 0 && !(e[t + 7] & 128));
}
vn.check = jm;
function Wm(e) {
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
  const n = e[5 + t];
  if (n === 0) throw new Error("S length is zero");
  if (6 + t + n !== e.length) throw new Error("S length is invalid");
  if (e[4] & 128) throw new Error("R value is negative");
  if (t > 1 && e[4] === 0 && !(e[5] & 128))
    throw new Error("R value excessively padded");
  if (e[t + 6] & 128) throw new Error("S value is negative");
  if (n > 1 && e[t + 6] === 0 && !(e[t + 7] & 128))
    throw new Error("S value excessively padded");
  return {
    r: e.slice(4, 4 + t),
    s: e.slice(6 + t)
  };
}
vn.decode = Wm;
function Km(e, t) {
  const n = e.length, r = t.length;
  if (n === 0) throw new Error("R length is zero");
  if (r === 0) throw new Error("S length is zero");
  if (n > 33) throw new Error("R length is too long");
  if (r > 33) throw new Error("S length is too long");
  if (e[0] & 128) throw new Error("R value is negative");
  if (t[0] & 128) throw new Error("S value is negative");
  if (n > 1 && e[0] === 0 && !(e[1] & 128))
    throw new Error("R value excessively padded");
  if (r > 1 && t[0] === 0 && !(t[1] & 128))
    throw new Error("S value excessively padded");
  const i = M.allocUnsafe(6 + n + r);
  return i[0] = 48, i[1] = i.length - 2, i[2] = 2, i[3] = e.length, e.copy(i, 4), i[4 + n] = 2, i[5 + n] = t.length, t.copy(i, 6 + n), i;
}
vn.encode = Km;
var Wn = {};
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.REVERSE_OPS = Wn.OPS = void 0;
const hc = {
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
Wn.OPS = hc;
const ef = {};
Wn.REVERSE_OPS = ef;
for (const e of Object.keys(hc)) {
  const t = hc[e];
  ef[t] = e;
}
var $n = {};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.decode = $n.encode = $n.encodingLength = void 0;
const Un = Wn;
function tf(e) {
  return e < Un.OPS.OP_PUSHDATA1 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5;
}
$n.encodingLength = tf;
function Vm(e, t, n) {
  const r = tf(t);
  return r === 1 ? e.writeUInt8(t, n) : r === 2 ? (e.writeUInt8(Un.OPS.OP_PUSHDATA1, n), e.writeUInt8(t, n + 1)) : r === 3 ? (e.writeUInt8(Un.OPS.OP_PUSHDATA2, n), e.writeUInt16LE(t, n + 1)) : (e.writeUInt8(Un.OPS.OP_PUSHDATA4, n), e.writeUInt32LE(t, n + 1)), r;
}
$n.encode = Vm;
function Gm(e, t) {
  const n = e.readUInt8(t);
  let r, i;
  if (n < Un.OPS.OP_PUSHDATA1)
    r = n, i = 1;
  else if (n === Un.OPS.OP_PUSHDATA1) {
    if (t + 2 > e.length) return null;
    r = e.readUInt8(t + 1), i = 2;
  } else if (n === Un.OPS.OP_PUSHDATA2) {
    if (t + 3 > e.length) return null;
    r = e.readUInt16LE(t + 1), i = 3;
  } else {
    if (t + 5 > e.length) return null;
    if (n !== Un.OPS.OP_PUSHDATA4) throw new Error("Unexpected opcode");
    r = e.readUInt32LE(t + 1), i = 5;
  }
  return {
    opcode: n,
    number: r,
    size: i
  };
}
$n.decode = Gm;
var Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.encode = Jr.decode = void 0;
function qm(e, t, n) {
  t = t || 4, n = n === void 0 ? !0 : n;
  const r = e.length;
  if (r === 0) return 0;
  if (r > t) throw new TypeError("Script number overflow");
  if (n && !(e[r - 1] & 127) && (r <= 1 || !(e[r - 2] & 128)))
    throw new Error("Non-minimally encoded script number");
  if (r === 5) {
    const o = e.readUInt32LE(0), s = e.readUInt8(4);
    return s & 128 ? -((s & -129) * 4294967296 + o) : s * 4294967296 + o;
  }
  let i = 0;
  for (let o = 0; o < r; ++o)
    i |= e[o] << 8 * o;
  return e[r - 1] & 128 ? -(i & ~(128 << 8 * (r - 1))) : i;
}
Jr.decode = qm;
function Xm(e) {
  return e > 2147483647 ? 5 : e > 8388607 ? 4 : e > 32767 ? 3 : e > 127 ? 2 : e > 0 ? 1 : 0;
}
function zm(e) {
  let t = Math.abs(e);
  const n = Xm(t), r = M.allocUnsafe(n), i = e < 0;
  for (let o = 0; o < n; ++o)
    r.writeUInt8(t & 255, o), t >>= 8;
  return r[n - 1] & 128 ? r.writeUInt8(i ? 128 : 0, n - 1) : i && (r[n - 1] |= 128), r;
}
Jr.encode = zm;
var Yn = {}, it = {};
const qo = /* @__PURE__ */ jd(Dm);
var Ni = {
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
Ni.Null = Ni.Nil;
for (var Xu in Ni)
  Ni[Xu].toJSON = (function(e) {
    return e;
  }).bind(null, Xu);
var Mc = Ni, or = Mc;
function nf(e) {
  return e.name || e.toString().match(/function (.*?)\s*\(/)[1];
}
function Dc(e) {
  return or.Nil(e) ? "" : nf(e.constructor);
}
function Ym(e) {
  return or.Function(e) ? "" : or.String(e) ? JSON.stringify(e) : e && or.Object(e) ? "" : e;
}
function jc(e, t) {
  Error.captureStackTrace && Error.captureStackTrace(e, t);
}
function Io(e) {
  return or.Function(e) ? e.toJSON ? e.toJSON() : nf(e) : or.Array(e) ? "Array" : e && or.Object(e) ? "Object" : e !== void 0 ? e : "";
}
function rf(e, t, n) {
  var r = Ym(t);
  return "Expected " + Io(e) + ", got" + (n !== "" ? " " + n : "") + (r !== "" ? " " + r : "");
}
function Tn(e, t, n) {
  n = n || Dc(t), this.message = rf(e, t, n), jc(this, Tn), this.__type = e, this.__value = t, this.__valueTypeName = n;
}
Tn.prototype = Object.create(Error.prototype);
Tn.prototype.constructor = Tn;
function Jm(e, t, n, r, i) {
  var o = '" of type ';
  return t === "key" && (o = '" with key type '), rf('property "' + Io(n) + o + Io(e), r, i);
}
function Kr(e, t, n, r, i) {
  e ? (i = i || Dc(r), this.message = Jm(e, n, t, r, i)) : this.message = 'Unexpected property "' + t + '"', jc(this, Tn), this.__label = n, this.__property = t, this.__type = e, this.__value = r, this.__valueTypeName = i;
}
Kr.prototype = Object.create(Error.prototype);
Kr.prototype.constructor = Tn;
function Qm(e, t) {
  return new Tn(e, {}, t);
}
function Zm(e, t, n) {
  return e instanceof Kr ? (t = t + "." + e.__property, e = new Kr(
    e.__type,
    t,
    e.__label,
    e.__value,
    e.__valueTypeName
  )) : e instanceof Tn && (e = new Kr(
    e.__type,
    t,
    n,
    e.__value,
    e.__valueTypeName
  )), jc(e), e;
}
var of = {
  TfTypeError: Tn,
  TfPropertyTypeError: Kr,
  tfCustomError: Qm,
  tfSubError: Zm,
  tfJSON: Io,
  getValueTypeName: Dc
}, Cs, zu;
function e1() {
  if (zu) return Cs;
  zu = 1;
  var e = Mc, t = of;
  function n(B) {
    return M.isBuffer(B);
  }
  function r(B) {
    return typeof B == "string" && /^([0-9a-f]{2})+$/i.test(B);
  }
  function i(B, W) {
    var w = B.toJSON();
    function p(b) {
      if (!B(b)) return !1;
      if (b.length === W) return !0;
      throw t.tfCustomError(w + "(Length: " + W + ")", w + "(Length: " + b.length + ")");
    }
    return p.toJSON = function() {
      return w;
    }, p;
  }
  var o = i.bind(null, e.Array), s = i.bind(null, n), c = i.bind(null, r), u = i.bind(null, e.String);
  function d(B, W, w) {
    w = w || e.Number;
    function p(b, k) {
      return w(b, k) && b > B && b < W;
    }
    return p.toJSON = function() {
      return `${w.toJSON()} between [${B}, ${W}]`;
    }, p;
  }
  var a = Math.pow(2, 53) - 1;
  function g(B) {
    return typeof B == "number" && isFinite(B);
  }
  function m(B) {
    return B << 24 >> 24 === B;
  }
  function h(B) {
    return B << 16 >> 16 === B;
  }
  function S(B) {
    return (B | 0) === B;
  }
  function _(B) {
    return typeof B == "number" && B >= -a && B <= a && Math.floor(B) === B;
  }
  function A(B) {
    return (B & 255) === B;
  }
  function L(B) {
    return (B & 65535) === B;
  }
  function v(B) {
    return B >>> 0 === B;
  }
  function I(B) {
    return typeof B == "number" && B >= 0 && B <= a && Math.floor(B) === B;
  }
  var O = {
    ArrayN: o,
    Buffer: n,
    BufferN: s,
    Finite: g,
    Hex: r,
    HexN: c,
    Int8: m,
    Int16: h,
    Int32: S,
    Int53: _,
    Range: d,
    StringN: u,
    UInt8: A,
    UInt16: L,
    UInt32: v,
    UInt53: I
  };
  for (var H in O)
    O[H].toJSON = (function(B) {
      return B;
    }).bind(null, H);
  return Cs = O, Cs;
}
var Di = of, nt = Mc, dn = Di.tfJSON, sf = Di.TfTypeError, cf = Di.TfPropertyTypeError, fi = Di.tfSubError, t1 = Di.getValueTypeName, wn = {
  arrayOf: function(t, n) {
    t = Yt(t), n = n || {};
    function r(i, o) {
      return !nt.Array(i) || nt.Nil(i) || n.minLength !== void 0 && i.length < n.minLength || n.maxLength !== void 0 && i.length > n.maxLength || n.length !== void 0 && i.length !== n.length ? !1 : i.every(function(s, c) {
        try {
          return gt(t, s, o);
        } catch (u) {
          throw fi(u, c);
        }
      });
    }
    return r.toJSON = function() {
      var i = "[" + dn(t) + "]";
      return n.length !== void 0 ? i += "{" + n.length + "}" : (n.minLength !== void 0 || n.maxLength !== void 0) && (i += "{" + (n.minLength === void 0 ? 0 : n.minLength) + "," + (n.maxLength === void 0 ? 1 / 0 : n.maxLength) + "}"), i;
    }, r;
  },
  maybe: function e(t) {
    t = Yt(t);
    function n(r, i) {
      return nt.Nil(r) || t(r, i, e);
    }
    return n.toJSON = function() {
      return "?" + dn(t);
    }, n;
  },
  map: function(t, n) {
    t = Yt(t), n && (n = Yt(n));
    function r(i, o) {
      if (!nt.Object(i) || nt.Nil(i)) return !1;
      for (var s in i) {
        try {
          n && gt(n, s, o);
        } catch (u) {
          throw fi(u, s, "key");
        }
        try {
          var c = i[s];
          gt(t, c, o);
        } catch (u) {
          throw fi(u, s);
        }
      }
      return !0;
    }
    return n ? r.toJSON = function() {
      return "{" + dn(n) + ": " + dn(t) + "}";
    } : r.toJSON = function() {
      return "{" + dn(t) + "}";
    }, r;
  },
  object: function(t) {
    var n = {};
    for (var r in t)
      n[r] = Yt(t[r]);
    function i(o, s) {
      if (!nt.Object(o) || nt.Nil(o)) return !1;
      var c;
      try {
        for (c in n) {
          var u = n[c], d = o[c];
          gt(u, d, s);
        }
      } catch (a) {
        throw fi(a, c);
      }
      if (s) {
        for (c in o)
          if (!n[c])
            throw new cf(void 0, c);
      }
      return !0;
    }
    return i.toJSON = function() {
      return dn(n);
    }, i;
  },
  anyOf: function() {
    var t = [].slice.call(arguments).map(Yt);
    function n(r, i) {
      return t.some(function(o) {
        try {
          return gt(o, r, i);
        } catch {
          return !1;
        }
      });
    }
    return n.toJSON = function() {
      return t.map(dn).join("|");
    }, n;
  },
  allOf: function() {
    var t = [].slice.call(arguments).map(Yt);
    function n(r, i) {
      return t.every(function(o) {
        try {
          return gt(o, r, i);
        } catch {
          return !1;
        }
      });
    }
    return n.toJSON = function() {
      return t.map(dn).join(" & ");
    }, n;
  },
  quacksLike: function(t) {
    function n(r) {
      return t === t1(r);
    }
    return n.toJSON = function() {
      return t;
    }, n;
  },
  tuple: function() {
    var t = [].slice.call(arguments).map(Yt);
    function n(r, i) {
      return nt.Nil(r) || nt.Nil(r.length) || i && r.length !== t.length ? !1 : t.every(function(o, s) {
        try {
          return gt(o, r[s], i);
        } catch (c) {
          throw fi(c, s);
        }
      });
    }
    return n.toJSON = function() {
      return "(" + t.map(dn).join(", ") + ")";
    }, n;
  },
  value: function(t) {
    function n(r) {
      return r === t;
    }
    return n.toJSON = function() {
      return t;
    }, n;
  }
};
wn.oneOf = wn.anyOf;
function Yt(e) {
  if (nt.String(e))
    return e[0] === "?" ? wn.maybe(e.slice(1)) : nt[e] || wn.quacksLike(e);
  if (e && nt.Object(e)) {
    if (nt.Array(e)) {
      if (e.length !== 1) throw new TypeError("Expected compile() parameter of type Array of length 1");
      return wn.arrayOf(e[0]);
    }
    return wn.object(e);
  } else if (nt.Function(e))
    return e;
  return wn.value(e);
}
function gt(e, t, n, r) {
  if (nt.Function(e)) {
    if (e(t, n)) return !0;
    throw new sf(r || e, t);
  }
  return gt(Yt(e), t, n);
}
for (var Hn in nt)
  gt[Hn] = nt[Hn];
for (Hn in wn)
  gt[Hn] = wn[Hn];
var Yu = e1();
for (Hn in Yu)
  gt[Hn] = Yu[Hn];
gt.compile = Yt;
gt.TfTypeError = sf;
gt.TfPropertyTypeError = cf;
var n1 = gt;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.oneOf = e.Null = e.BufferN = e.Function = e.UInt32 = e.UInt8 = e.tuple = e.maybe = e.Hex = e.Buffer = e.String = e.Boolean = e.Array = e.Number = e.Hash256bit = e.Hash160bit = e.Buffer256bit = e.isTaptree = e.isTapleaf = e.TAPLEAF_VERSION_MASK = e.Satoshi = e.isPoint = e.stacksEqual = e.typeforce = void 0;
  const t = qo;
  e.typeforce = n1;
  const n = t.Buffer.alloc(32, 0), r = t.Buffer.from(
    "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
    "hex"
  );
  function i(a, g) {
    return a.length !== g.length ? !1 : a.every((m, h) => m.equals(g[h]));
  }
  e.stacksEqual = i;
  function o(a) {
    if (!t.Buffer.isBuffer(a) || a.length < 33) return !1;
    const g = a[0], m = a.slice(1, 33);
    if (m.compare(n) === 0 || m.compare(r) >= 0) return !1;
    if ((g === 2 || g === 3) && a.length === 33)
      return !0;
    const h = a.slice(33);
    return h.compare(n) === 0 || h.compare(r) >= 0 ? !1 : g === 4 && a.length === 65;
  }
  e.isPoint = o;
  const s = 21 * 1e14;
  function c(a) {
    return e.typeforce.UInt53(a) && a <= s;
  }
  e.Satoshi = c, e.TAPLEAF_VERSION_MASK = 254;
  function u(a) {
    return !a || !("output" in a) || !t.Buffer.isBuffer(a.output) ? !1 : a.version !== void 0 ? (a.version & e.TAPLEAF_VERSION_MASK) === a.version : !0;
  }
  e.isTapleaf = u;
  function d(a) {
    return (0, e.Array)(a) ? a.length !== 2 ? !1 : a.every((g) => d(g)) : u(a);
  }
  e.isTaptree = d, e.Buffer256bit = e.typeforce.BufferN(32), e.Hash160bit = e.typeforce.BufferN(20), e.Hash256bit = e.typeforce.BufferN(32), e.Number = e.typeforce.Number, e.Array = e.typeforce.Array, e.Boolean = e.typeforce.Boolean, e.String = e.typeforce.String, e.Buffer = e.typeforce.Buffer, e.Hex = e.typeforce.Hex, e.maybe = e.typeforce.maybe, e.tuple = e.typeforce.tuple, e.UInt8 = e.typeforce.UInt8, e.UInt32 = e.typeforce.UInt32, e.Function = e.typeforce.Function, e.BufferN = e.typeforce.BufferN, e.Null = e.typeforce.Null, e.oneOf = e.typeforce.oneOf;
})(it);
var Ju;
function r1() {
  if (Ju) return Yn;
  Ju = 1, Object.defineProperty(Yn, "__esModule", { value: !0 }), Yn.encode = Yn.decode = void 0;
  const e = vn, t = yt(), n = it, { typeforce: r } = n, i = M.alloc(1, 0);
  function o(d) {
    let a = 0;
    for (; d[a] === 0; ) ++a;
    return a === d.length ? i : (d = d.slice(a), d[0] & 128 ? M.concat([i, d], 1 + d.length) : d);
  }
  function s(d) {
    d[0] === 0 && (d = d.slice(1));
    const a = M.alloc(32, 0), g = Math.max(0, 32 - d.length);
    return d.copy(a, g), a;
  }
  function c(d) {
    const a = d.readUInt8(d.length - 1);
    if (!(0, t.isDefinedHashType)(a))
      throw new Error("Invalid hashType " + a);
    const g = e.decode(d.slice(0, -1)), m = s(g.r), h = s(g.s);
    return { signature: M.concat([m, h], 64), hashType: a };
  }
  Yn.decode = c;
  function u(d, a) {
    if (r(
      {
        signature: n.BufferN(64),
        hashType: n.UInt8
      },
      { signature: d, hashType: a }
    ), !(0, t.isDefinedHashType)(a))
      throw new Error("Invalid hashType " + a);
    const g = M.allocUnsafe(1);
    g.writeUInt8(a, 0);
    const m = o(d.slice(0, 32)), h = o(d.slice(32, 64));
    return M.concat([e.encode(m, h), g]);
  }
  return Yn.encode = u, Yn;
}
var Qu;
function yt() {
  return Qu || (Qu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.signature = e.number = e.isCanonicalScriptSignature = e.isDefinedHashType = e.isCanonicalPubKey = e.toStack = e.fromASM = e.toASM = e.decompile = e.compile = e.countNonPushOnlyOPs = e.isPushOnly = e.OPS = void 0;
    const t = vn, n = Wn;
    Object.defineProperty(e, "OPS", {
      enumerable: !0,
      get: function() {
        return n.OPS;
      }
    });
    const r = $n, i = Jr, o = r1(), s = it, { typeforce: c } = s, u = n.OPS.OP_RESERVED;
    function d(p) {
      return s.Number(p) && (p === n.OPS.OP_0 || p >= n.OPS.OP_1 && p <= n.OPS.OP_16 || p === n.OPS.OP_1NEGATE);
    }
    function a(p) {
      return s.Buffer(p) || d(p);
    }
    function g(p) {
      return s.Array(p) && p.every(a);
    }
    e.isPushOnly = g;
    function m(p) {
      return p.length - p.filter(a).length;
    }
    e.countNonPushOnlyOPs = m;
    function h(p) {
      if (p.length === 0) return n.OPS.OP_0;
      if (p.length === 1) {
        if (p[0] >= 1 && p[0] <= 16) return u + p[0];
        if (p[0] === 129) return n.OPS.OP_1NEGATE;
      }
    }
    function S(p) {
      return M.isBuffer(p);
    }
    function _(p) {
      return s.Array(p);
    }
    function A(p) {
      return M.isBuffer(p);
    }
    function L(p) {
      if (S(p)) return p;
      c(s.Array, p);
      const b = p.reduce((T, F) => A(F) ? F.length === 1 && h(F) !== void 0 ? T + 1 : T + r.encodingLength(F.length) + F.length : T + 1, 0), k = M.allocUnsafe(b);
      let E = 0;
      if (p.forEach((T) => {
        if (A(T)) {
          const F = h(T);
          if (F !== void 0) {
            k.writeUInt8(F, E), E += 1;
            return;
          }
          E += r.encode(k, T.length, E), T.copy(k, E), E += T.length;
        } else
          k.writeUInt8(T, E), E += 1;
      }), E !== k.length) throw new Error("Could not decode chunks");
      return k;
    }
    e.compile = L;
    function v(p) {
      if (_(p)) return p;
      c(s.Buffer, p);
      const b = [];
      let k = 0;
      for (; k < p.length; ) {
        const E = p[k];
        if (E > n.OPS.OP_0 && E <= n.OPS.OP_PUSHDATA4) {
          const T = r.decode(p, k);
          if (T === null || (k += T.size, k + T.number > p.length)) return null;
          const F = p.slice(k, k + T.number);
          k += T.number;
          const P = h(F);
          P !== void 0 ? b.push(P) : b.push(F);
        } else
          b.push(E), k += 1;
      }
      return b;
    }
    e.decompile = v;
    function I(p) {
      if (S(p) && (p = v(p)), !p)
        throw new Error("Could not convert invalid chunks to ASM");
      return p.map((b) => {
        if (A(b)) {
          const k = h(b);
          if (k === void 0) return b.toString("hex");
          b = k;
        }
        return n.REVERSE_OPS[b];
      }).join(" ");
    }
    e.toASM = I;
    function O(p) {
      return c(s.String, p), L(
        p.split(" ").map((b) => n.OPS[b] !== void 0 ? n.OPS[b] : (c(s.Hex, b), M.from(b, "hex")))
      );
    }
    e.fromASM = O;
    function H(p) {
      return p = v(p), c(g, p), p.map((b) => A(b) ? b : b === n.OPS.OP_0 ? M.allocUnsafe(0) : i.encode(b - u));
    }
    e.toStack = H;
    function B(p) {
      return s.isPoint(p);
    }
    e.isCanonicalPubKey = B;
    function W(p) {
      const b = p & -129;
      return b > 0 && b < 4;
    }
    e.isDefinedHashType = W;
    function w(p) {
      return !M.isBuffer(p) || !W(p[p.length - 1]) ? !1 : t.check(p.slice(0, -1));
    }
    e.isCanonicalScriptSignature = w, e.number = i, e.signature = o;
  }(ks)), ks;
}
var _t = {};
Object.defineProperty(_t, "__esModule", { value: !0 });
_t.value = _t.prop = void 0;
function i1(e, t, n) {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !0,
    get() {
      const r = n.call(this);
      return this[t] = r, r;
    },
    set(r) {
      Object.defineProperty(this, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
      });
    }
  });
}
_t.prop = i1;
function o1(e) {
  let t;
  return () => (t !== void 0 || (t = e()), t);
}
_t.value = o1;
Object.defineProperty(Go, "__esModule", { value: !0 });
Go.p2data = void 0;
const s1 = Ye, fo = yt(), Vt = it, Zu = _t, ea = fo.OPS;
function c1(e, t) {
  if (!e.data && !e.output) throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, Vt.typeforce)(
    {
      network: Vt.typeforce.maybe(Vt.typeforce.Object),
      output: Vt.typeforce.maybe(Vt.typeforce.Buffer),
      data: Vt.typeforce.maybe(
        Vt.typeforce.arrayOf(Vt.typeforce.Buffer)
      )
    },
    e
  );
  const r = { name: "embed", network: e.network || s1.bitcoin };
  if (Zu.prop(r, "output", () => {
    if (e.data)
      return fo.compile([ea.OP_RETURN].concat(e.data));
  }), Zu.prop(r, "data", () => {
    if (e.output)
      return fo.decompile(e.output).slice(1);
  }), t.validate && e.output) {
    const i = fo.decompile(e.output);
    if (i[0] !== ea.OP_RETURN) throw new TypeError("Output is invalid");
    if (!i.slice(1).every(Vt.typeforce.Buffer))
      throw new TypeError("Output is invalid");
    if (e.data && !(0, Vt.stacksEqual)(e.data, r.data))
      throw new TypeError("Data mismatch");
  }
  return Object.assign(r, e);
}
Go.p2data = c1;
var Xo = {};
Object.defineProperty(Xo, "__esModule", { value: !0 });
Xo.p2ms = void 0;
const u1 = Ye, Ur = yt(), Le = it, Pn = _t, $r = Ur.OPS, Zi = $r.OP_RESERVED;
function a1(e, t) {
  if (!e.input && !e.output && !(e.pubkeys && e.m !== void 0) && !e.signatures)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {});
  function n(u) {
    return Ur.isCanonicalScriptSignature(u) || (t.allowIncomplete && u === $r.OP_0) !== void 0;
  }
  (0, Le.typeforce)(
    {
      network: Le.typeforce.maybe(Le.typeforce.Object),
      m: Le.typeforce.maybe(Le.typeforce.Number),
      n: Le.typeforce.maybe(Le.typeforce.Number),
      output: Le.typeforce.maybe(Le.typeforce.Buffer),
      pubkeys: Le.typeforce.maybe(
        Le.typeforce.arrayOf(Le.isPoint)
      ),
      signatures: Le.typeforce.maybe(
        Le.typeforce.arrayOf(n)
      ),
      input: Le.typeforce.maybe(Le.typeforce.Buffer)
    },
    e
  );
  const i = { network: e.network || u1.bitcoin };
  let o = [], s = !1;
  function c(u) {
    s || (s = !0, o = Ur.decompile(u), i.m = o[0] - Zi, i.n = o[o.length - 2] - Zi, i.pubkeys = o.slice(1, -2));
  }
  if (Pn.prop(i, "output", () => {
    if (e.m && i.n && e.pubkeys)
      return Ur.compile(
        [].concat(
          Zi + e.m,
          e.pubkeys,
          Zi + i.n,
          $r.OP_CHECKMULTISIG
        )
      );
  }), Pn.prop(i, "m", () => {
    if (i.output)
      return c(i.output), i.m;
  }), Pn.prop(i, "n", () => {
    if (i.pubkeys)
      return i.pubkeys.length;
  }), Pn.prop(i, "pubkeys", () => {
    if (e.output)
      return c(e.output), i.pubkeys;
  }), Pn.prop(i, "signatures", () => {
    if (e.input)
      return Ur.decompile(e.input).slice(1);
  }), Pn.prop(i, "input", () => {
    if (e.signatures)
      return Ur.compile([$r.OP_0].concat(e.signatures));
  }), Pn.prop(i, "witness", () => {
    if (i.input)
      return [];
  }), Pn.prop(i, "name", () => {
    if (!(!i.m || !i.n))
      return `p2ms(${i.m} of ${i.n})`;
  }), t.validate) {
    if (e.output) {
      if (c(e.output), !Le.typeforce.Number(o[0]))
        throw new TypeError("Output is invalid");
      if (!Le.typeforce.Number(o[o.length - 2]))
        throw new TypeError("Output is invalid");
      if (o[o.length - 1] !== $r.OP_CHECKMULTISIG)
        throw new TypeError("Output is invalid");
      if (i.m <= 0 || i.n > 16 || i.m > i.n || i.n !== o.length - 3)
        throw new TypeError("Output is invalid");
      if (!i.pubkeys.every((u) => (0, Le.isPoint)(u)))
        throw new TypeError("Output is invalid");
      if (e.m !== void 0 && e.m !== i.m) throw new TypeError("m mismatch");
      if (e.n !== void 0 && e.n !== i.n) throw new TypeError("n mismatch");
      if (e.pubkeys && !(0, Le.stacksEqual)(e.pubkeys, i.pubkeys))
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
      if (e.input[0] !== $r.OP_0) throw new TypeError("Input is invalid");
      if (i.signatures.length === 0 || !i.signatures.every(n))
        throw new TypeError("Input has invalid signature(s)");
      if (e.signatures && !(0, Le.stacksEqual)(e.signatures, i.signatures))
        throw new TypeError("Signature mismatch");
      if (e.m !== void 0 && e.m !== e.signatures.length)
        throw new TypeError("Signature count mismatch");
    }
  }
  return Object.assign(i, e);
}
Xo.p2ms = a1;
var zo = {};
Object.defineProperty(zo, "__esModule", { value: !0 });
zo.p2pk = void 0;
const l1 = Ye, Hr = yt(), Ht = it, Br = _t, ta = Hr.OPS;
function f1(e, t) {
  if (!e.input && !e.output && !e.pubkey && !e.input && !e.signature)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, Ht.typeforce)(
    {
      network: Ht.typeforce.maybe(Ht.typeforce.Object),
      output: Ht.typeforce.maybe(Ht.typeforce.Buffer),
      pubkey: Ht.typeforce.maybe(Ht.isPoint),
      signature: Ht.typeforce.maybe(Hr.isCanonicalScriptSignature),
      input: Ht.typeforce.maybe(Ht.typeforce.Buffer)
    },
    e
  );
  const n = Br.value(() => Hr.decompile(e.input)), i = { name: "p2pk", network: e.network || l1.bitcoin };
  if (Br.prop(i, "output", () => {
    if (e.pubkey)
      return Hr.compile([e.pubkey, ta.OP_CHECKSIG]);
  }), Br.prop(i, "pubkey", () => {
    if (e.output)
      return e.output.slice(1, -1);
  }), Br.prop(i, "signature", () => {
    if (e.input)
      return n()[0];
  }), Br.prop(i, "input", () => {
    if (e.signature)
      return Hr.compile([e.signature]);
  }), Br.prop(i, "witness", () => {
    if (i.input)
      return [];
  }), t.validate) {
    if (e.output) {
      if (e.output[e.output.length - 1] !== ta.OP_CHECKSIG)
        throw new TypeError("Output is invalid");
      if (!(0, Ht.isPoint)(i.pubkey))
        throw new TypeError("Output pubkey is invalid");
      if (e.pubkey && !e.pubkey.equals(i.pubkey))
        throw new TypeError("Pubkey mismatch");
    }
    if (e.signature && e.input && !e.input.equals(i.input))
      throw new TypeError("Signature mismatch");
    if (e.input) {
      if (n().length !== 1) throw new TypeError("Input is invalid");
      if (!Hr.isCanonicalScriptSignature(i.signature))
        throw new TypeError("Input has invalid signature");
    }
  }
  return Object.assign(i, e);
}
zo.p2pk = f1;
var Yo = {}, an = {}, Qr = {}, tn = {}, jt = {};
Object.defineProperty(jt, "__esModule", { value: !0 });
jt.isBytes = af;
jt.number = xo;
jt.bool = uf;
jt.bytes = Wc;
jt.hash = lf;
jt.exists = ff;
jt.output = df;
function xo(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`positive integer expected, not ${e}`);
}
function uf(e) {
  if (typeof e != "boolean")
    throw new Error(`boolean expected, not ${e}`);
}
function af(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Wc(e, ...t) {
  if (!af(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function lf(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  xo(e.outputLen), xo(e.blockLen);
}
function ff(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function df(e, t) {
  Wc(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const d1 = { number: xo, bool: uf, bytes: Wc, hash: lf, exists: ff, output: df };
jt.default = d1;
var ji = {}, Jo = {};
Object.defineProperty(Jo, "__esModule", { value: !0 });
Jo.crypto = void 0;
Jo.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Hash = e.nextTick = e.byteSwapIfBE = e.byteSwap = e.isLE = e.rotl = e.rotr = e.createView = e.u32 = e.u8 = void 0, e.isBytes = r, e.byteSwap32 = a, e.bytesToHex = m, e.hexToBytes = _, e.asyncLoop = L, e.utf8ToBytes = v, e.toBytes = I, e.concatBytes = O, e.checkOpts = W, e.wrapConstructor = w, e.wrapConstructorWithOpts = p, e.wrapXOFConstructorWithOpts = b, e.randomBytes = k;
  const t = Jo, n = jt;
  function r(E) {
    return E instanceof Uint8Array || E != null && typeof E == "object" && E.constructor.name === "Uint8Array";
  }
  const i = (E) => new Uint8Array(E.buffer, E.byteOffset, E.byteLength);
  e.u8 = i;
  const o = (E) => new Uint32Array(E.buffer, E.byteOffset, Math.floor(E.byteLength / 4));
  e.u32 = o;
  const s = (E) => new DataView(E.buffer, E.byteOffset, E.byteLength);
  e.createView = s;
  const c = (E, T) => E << 32 - T | E >>> T;
  e.rotr = c;
  const u = (E, T) => E << T | E >>> 32 - T >>> 0;
  e.rotl = u, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  const d = (E) => E << 24 & 4278190080 | E << 8 & 16711680 | E >>> 8 & 65280 | E >>> 24 & 255;
  e.byteSwap = d, e.byteSwapIfBE = e.isLE ? (E) => E : (E) => (0, e.byteSwap)(E);
  function a(E) {
    for (let T = 0; T < E.length; T++)
      E[T] = (0, e.byteSwap)(E[T]);
  }
  const g = /* @__PURE__ */ Array.from({ length: 256 }, (E, T) => T.toString(16).padStart(2, "0"));
  function m(E) {
    (0, n.bytes)(E);
    let T = "";
    for (let F = 0; F < E.length; F++)
      T += g[E[F]];
    return T;
  }
  const h = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function S(E) {
    if (E >= h._0 && E <= h._9)
      return E - h._0;
    if (E >= h._A && E <= h._F)
      return E - (h._A - 10);
    if (E >= h._a && E <= h._f)
      return E - (h._a - 10);
  }
  function _(E) {
    if (typeof E != "string")
      throw new Error("hex string expected, got " + typeof E);
    const T = E.length, F = T / 2;
    if (T % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + T);
    const P = new Uint8Array(F);
    for (let C = 0, U = 0; C < F; C++, U += 2) {
      const N = S(E.charCodeAt(U)), D = S(E.charCodeAt(U + 1));
      if (N === void 0 || D === void 0) {
        const G = E[U] + E[U + 1];
        throw new Error('hex string expected, got non-hex character "' + G + '" at index ' + U);
      }
      P[C] = N * 16 + D;
    }
    return P;
  }
  const A = async () => {
  };
  e.nextTick = A;
  async function L(E, T, F) {
    let P = Date.now();
    for (let C = 0; C < E; C++) {
      F(C);
      const U = Date.now() - P;
      U >= 0 && U < T || (await (0, e.nextTick)(), P += U);
    }
  }
  function v(E) {
    if (typeof E != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof E}`);
    return new Uint8Array(new TextEncoder().encode(E));
  }
  function I(E) {
    return typeof E == "string" && (E = v(E)), (0, n.bytes)(E), E;
  }
  function O(...E) {
    let T = 0;
    for (let P = 0; P < E.length; P++) {
      const C = E[P];
      (0, n.bytes)(C), T += C.length;
    }
    const F = new Uint8Array(T);
    for (let P = 0, C = 0; P < E.length; P++) {
      const U = E[P];
      F.set(U, C), C += U.length;
    }
    return F;
  }
  class H {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = H;
  const B = {}.toString;
  function W(E, T) {
    if (T !== void 0 && B.call(T) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(E, T);
  }
  function w(E) {
    const T = (P) => E().update(I(P)).digest(), F = E();
    return T.outputLen = F.outputLen, T.blockLen = F.blockLen, T.create = () => E(), T;
  }
  function p(E) {
    const T = (P, C) => E(C).update(I(P)).digest(), F = E({});
    return T.outputLen = F.outputLen, T.blockLen = F.blockLen, T.create = (P) => E(P), T;
  }
  function b(E) {
    const T = (P, C) => E(C).update(I(P)).digest(), F = E({});
    return T.outputLen = F.outputLen, T.blockLen = F.blockLen, T.create = (P) => E(P), T;
  }
  function k(E = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(E));
    if (t.crypto && typeof t.crypto.randomBytes == "function")
      return t.crypto.randomBytes(E);
    throw new Error("crypto.getRandomValues must be defined");
  }
})(ji);
Object.defineProperty(tn, "__esModule", { value: !0 });
tn.HashMD = tn.Maj = tn.Chi = void 0;
const Fs = jt, di = ji;
function h1(e, t, n, r) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, r);
  const i = BigInt(32), o = BigInt(4294967295), s = Number(n >> i & o), c = Number(n & o), u = r ? 4 : 0, d = r ? 0 : 4;
  e.setUint32(t + u, s, r), e.setUint32(t + d, c, r);
}
const p1 = (e, t, n) => e & t ^ ~e & n;
tn.Chi = p1;
const g1 = (e, t, n) => e & t ^ e & n ^ t & n;
tn.Maj = g1;
class m1 extends di.Hash {
  constructor(t, n, r, i) {
    super(), this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = (0, di.createView)(this.buffer);
  }
  update(t) {
    (0, Fs.exists)(this);
    const { view: n, buffer: r, blockLen: i } = this;
    t = (0, di.toBytes)(t);
    const o = t.length;
    for (let s = 0; s < o; ) {
      const c = Math.min(i - this.pos, o - s);
      if (c === i) {
        const u = (0, di.createView)(t);
        for (; i <= o - s; s += i)
          this.process(u, s);
        continue;
      }
      r.set(t.subarray(s, s + c), this.pos), this.pos += c, s += c, this.pos === i && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    (0, Fs.exists)(this), (0, Fs.output)(t, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: i, isLE: o } = this;
    let { pos: s } = this;
    n[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > i - s && (this.process(r, 0), s = 0);
    for (let g = s; g < i; g++)
      n[g] = 0;
    h1(r, i - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const c = (0, di.createView)(t), u = this.outputLen;
    if (u % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const d = u / 4, a = this.get();
    if (d > a.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let g = 0; g < d; g++)
      c.setUint32(4 * g, a[g], o);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const r = t.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: r, length: i, finished: o, destroyed: s, pos: c } = this;
    return t.length = i, t.pos = c, t.finished = o, t.destroyed = s, i % n && t.buffer.set(r), t;
  }
}
tn.HashMD = m1;
Object.defineProperty(Qr, "__esModule", { value: !0 });
Qr.ripemd160 = Qr.RIPEMD160 = void 0;
const w1 = tn, Ei = ji, y1 = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]), hf = /* @__PURE__ */ new Uint8Array(new Array(16).fill(0).map((e, t) => t)), E1 = /* @__PURE__ */ hf.map((e) => (9 * e + 5) % 16);
let Kc = [hf], Vc = [E1];
for (let e = 0; e < 4; e++)
  for (let t of [Kc, Vc])
    t.push(t[e].map((n) => y1[n]));
const pf = /* @__PURE__ */ [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((e) => new Uint8Array(e)), v1 = /* @__PURE__ */ Kc.map((e, t) => e.map((n) => pf[t][n])), b1 = /* @__PURE__ */ Vc.map((e, t) => e.map((n) => pf[t][n])), S1 = /* @__PURE__ */ new Uint32Array([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]), T1 = /* @__PURE__ */ new Uint32Array([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]);
function na(e, t, n, r) {
  return e === 0 ? t ^ n ^ r : e === 1 ? t & n | ~t & r : e === 2 ? (t | ~n) ^ r : e === 3 ? t & r | n & ~r : t ^ (n | ~r);
}
const eo = /* @__PURE__ */ new Uint32Array(16);
class gf extends w1.HashMD {
  constructor() {
    super(64, 20, 8, !0), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
  }
  get() {
    const { h0: t, h1: n, h2: r, h3: i, h4: o } = this;
    return [t, n, r, i, o];
  }
  set(t, n, r, i, o) {
    this.h0 = t | 0, this.h1 = n | 0, this.h2 = r | 0, this.h3 = i | 0, this.h4 = o | 0;
  }
  process(t, n) {
    for (let h = 0; h < 16; h++, n += 4)
      eo[h] = t.getUint32(n, !0);
    let r = this.h0 | 0, i = r, o = this.h1 | 0, s = o, c = this.h2 | 0, u = c, d = this.h3 | 0, a = d, g = this.h4 | 0, m = g;
    for (let h = 0; h < 5; h++) {
      const S = 4 - h, _ = S1[h], A = T1[h], L = Kc[h], v = Vc[h], I = v1[h], O = b1[h];
      for (let H = 0; H < 16; H++) {
        const B = (0, Ei.rotl)(r + na(h, o, c, d) + eo[L[H]] + _, I[H]) + g | 0;
        r = g, g = d, d = (0, Ei.rotl)(c, 10) | 0, c = o, o = B;
      }
      for (let H = 0; H < 16; H++) {
        const B = (0, Ei.rotl)(i + na(S, s, u, a) + eo[v[H]] + A, O[H]) + m | 0;
        i = m, m = a, a = (0, Ei.rotl)(u, 10) | 0, u = s, s = B;
      }
    }
    this.set(this.h1 + c + a | 0, this.h2 + d + m | 0, this.h3 + g + i | 0, this.h4 + r + s | 0, this.h0 + o + u | 0);
  }
  roundClean() {
    eo.fill(0);
  }
  destroy() {
    this.destroyed = !0, this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
  }
}
Qr.RIPEMD160 = gf;
Qr.ripemd160 = (0, Ei.wrapConstructor)(() => new gf());
var Zr = {};
Object.defineProperty(Zr, "__esModule", { value: !0 });
Zr.sha1 = Zr.SHA1 = void 0;
const Ns = tn, ho = ji, hi = /* @__PURE__ */ new Uint32Array([
  1732584193,
  4023233417,
  2562383102,
  271733878,
  3285377520
]), An = /* @__PURE__ */ new Uint32Array(80);
class mf extends Ns.HashMD {
  constructor() {
    super(64, 20, 8, !1), this.A = hi[0] | 0, this.B = hi[1] | 0, this.C = hi[2] | 0, this.D = hi[3] | 0, this.E = hi[4] | 0;
  }
  get() {
    const { A: t, B: n, C: r, D: i, E: o } = this;
    return [t, n, r, i, o];
  }
  set(t, n, r, i, o) {
    this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = i | 0, this.E = o | 0;
  }
  process(t, n) {
    for (let u = 0; u < 16; u++, n += 4)
      An[u] = t.getUint32(n, !1);
    for (let u = 16; u < 80; u++)
      An[u] = (0, ho.rotl)(An[u - 3] ^ An[u - 8] ^ An[u - 14] ^ An[u - 16], 1);
    let { A: r, B: i, C: o, D: s, E: c } = this;
    for (let u = 0; u < 80; u++) {
      let d, a;
      u < 20 ? (d = (0, Ns.Chi)(i, o, s), a = 1518500249) : u < 40 ? (d = i ^ o ^ s, a = 1859775393) : u < 60 ? (d = (0, Ns.Maj)(i, o, s), a = 2400959708) : (d = i ^ o ^ s, a = 3395469782);
      const g = (0, ho.rotl)(r, 5) + d + c + a + An[u] | 0;
      c = s, s = o, o = (0, ho.rotl)(i, 30), i = r, r = g;
    }
    r = r + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, s = s + this.D | 0, c = c + this.E | 0, this.set(r, i, o, s, c);
  }
  roundClean() {
    An.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
Zr.SHA1 = mf;
Zr.sha1 = (0, ho.wrapConstructor)(() => new mf());
var bn = {};
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.sha224 = bn.sha256 = bn.SHA256 = void 0;
const Rs = tn, Ft = ji, _1 = /* @__PURE__ */ new Uint32Array([
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
]), kn = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Cn = /* @__PURE__ */ new Uint32Array(64);
class Gc extends Rs.HashMD {
  constructor() {
    super(64, 32, 8, !1), this.A = kn[0] | 0, this.B = kn[1] | 0, this.C = kn[2] | 0, this.D = kn[3] | 0, this.E = kn[4] | 0, this.F = kn[5] | 0, this.G = kn[6] | 0, this.H = kn[7] | 0;
  }
  get() {
    const { A: t, B: n, C: r, D: i, E: o, F: s, G: c, H: u } = this;
    return [t, n, r, i, o, s, c, u];
  }
  // prettier-ignore
  set(t, n, r, i, o, s, c, u) {
    this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = i | 0, this.E = o | 0, this.F = s | 0, this.G = c | 0, this.H = u | 0;
  }
  process(t, n) {
    for (let g = 0; g < 16; g++, n += 4)
      Cn[g] = t.getUint32(n, !1);
    for (let g = 16; g < 64; g++) {
      const m = Cn[g - 15], h = Cn[g - 2], S = (0, Ft.rotr)(m, 7) ^ (0, Ft.rotr)(m, 18) ^ m >>> 3, _ = (0, Ft.rotr)(h, 17) ^ (0, Ft.rotr)(h, 19) ^ h >>> 10;
      Cn[g] = _ + Cn[g - 7] + S + Cn[g - 16] | 0;
    }
    let { A: r, B: i, C: o, D: s, E: c, F: u, G: d, H: a } = this;
    for (let g = 0; g < 64; g++) {
      const m = (0, Ft.rotr)(c, 6) ^ (0, Ft.rotr)(c, 11) ^ (0, Ft.rotr)(c, 25), h = a + m + (0, Rs.Chi)(c, u, d) + _1[g] + Cn[g] | 0, _ = ((0, Ft.rotr)(r, 2) ^ (0, Ft.rotr)(r, 13) ^ (0, Ft.rotr)(r, 22)) + (0, Rs.Maj)(r, i, o) | 0;
      a = d, d = u, u = c, c = s + h | 0, s = o, o = i, i = r, r = h + _ | 0;
    }
    r = r + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, s = s + this.D | 0, c = c + this.E | 0, u = u + this.F | 0, d = d + this.G | 0, a = a + this.H | 0, this.set(r, i, o, s, c, u, d, a);
  }
  roundClean() {
    Cn.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
bn.SHA256 = Gc;
class I1 extends Gc {
  constructor() {
    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
  }
}
bn.sha256 = (0, Ft.wrapConstructor)(() => new Gc());
bn.sha224 = (0, Ft.wrapConstructor)(() => new I1());
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.taggedHash = e.TAGGED_HASH_PREFIXES = e.TAGS = e.hash256 = e.hash160 = e.sha256 = e.sha1 = e.ripemd160 = void 0;
  const t = Qr, n = Zr, r = bn;
  function i(a) {
    return M.from((0, t.ripemd160)(Uint8Array.from(a)));
  }
  e.ripemd160 = i;
  function o(a) {
    return M.from((0, n.sha1)(Uint8Array.from(a)));
  }
  e.sha1 = o;
  function s(a) {
    return M.from((0, r.sha256)(Uint8Array.from(a)));
  }
  e.sha256 = s;
  function c(a) {
    return M.from(
      (0, t.ripemd160)((0, r.sha256)(Uint8Array.from(a)))
    );
  }
  e.hash160 = c;
  function u(a) {
    return M.from(
      (0, r.sha256)((0, r.sha256)(Uint8Array.from(a)))
    );
  }
  e.hash256 = u, e.TAGS = [
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
    "BIP0340/challenge": M.from([
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
    "BIP0340/aux": M.from([
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
    "BIP0340/nonce": M.from([
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
    TapLeaf: M.from([
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
    TapBranch: M.from([
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
    TapSighash: M.from([
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
    TapTweak: M.from([
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
    "KeyAgg list": M.from([
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
    "KeyAgg coefficient": M.from([
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
  function d(a, g) {
    return s(M.concat([e.TAGGED_HASH_PREFIXES[a], g]));
  }
  e.taggedHash = d;
})(an);
function x1(e) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), n = 0; n < t.length; n++)
    t[n] = 255;
  for (var r = 0; r < e.length; r++) {
    var i = e.charAt(r), o = i.charCodeAt(0);
    if (t[o] !== 255)
      throw new TypeError(i + " is ambiguous");
    t[o] = r;
  }
  var s = e.length, c = e.charAt(0), u = Math.log(s) / Math.log(256), d = Math.log(256) / Math.log(s);
  function a(h) {
    if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))), !(h instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (h.length === 0)
      return "";
    for (var S = 0, _ = 0, A = 0, L = h.length; A !== L && h[A] === 0; )
      A++, S++;
    for (var v = (L - A) * d + 1 >>> 0, I = new Uint8Array(v); A !== L; ) {
      for (var O = h[A], H = 0, B = v - 1; (O !== 0 || H < _) && B !== -1; B--, H++)
        O += 256 * I[B] >>> 0, I[B] = O % s >>> 0, O = O / s >>> 0;
      if (O !== 0)
        throw new Error("Non-zero carry");
      _ = H, A++;
    }
    for (var W = v - _; W !== v && I[W] === 0; )
      W++;
    for (var w = c.repeat(S); W < v; ++W)
      w += e.charAt(I[W]);
    return w;
  }
  function g(h) {
    if (typeof h != "string")
      throw new TypeError("Expected String");
    if (h.length === 0)
      return new Uint8Array();
    for (var S = 0, _ = 0, A = 0; h[S] === c; )
      _++, S++;
    for (var L = (h.length - S) * u + 1 >>> 0, v = new Uint8Array(L); h[S]; ) {
      var I = t[h.charCodeAt(S)];
      if (I === 255)
        return;
      for (var O = 0, H = L - 1; (I !== 0 || O < A) && H !== -1; H--, O++)
        I += s * v[H] >>> 0, v[H] = I % 256 >>> 0, I = I / 256 >>> 0;
      if (I !== 0)
        throw new Error("Non-zero carry");
      A = O, S++;
    }
    for (var B = L - A; B !== L && v[B] === 0; )
      B++;
    for (var W = new Uint8Array(_ + (L - B)), w = _; B !== L; )
      W[w++] = v[B++];
    return W;
  }
  function m(h) {
    var S = g(h);
    if (S)
      return S;
    throw new Error("Non-base" + s + " character");
  }
  return {
    encode: a,
    decodeUnsafe: g,
    decode: m
  };
}
var O1 = x1;
const P1 = O1, A1 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var k1 = P1(A1), Bs = k1, C1 = function(e) {
  function t(o) {
    var s = Uint8Array.from(o), c = e(s), u = s.length + 4, d = new Uint8Array(u);
    return d.set(s, 0), d.set(c.subarray(0, 4), s.length), Bs.encode(d, u);
  }
  function n(o) {
    var s = o.slice(0, -4), c = o.slice(-4), u = e(s);
    if (!(c[0] ^ u[0] | c[1] ^ u[1] | c[2] ^ u[2] | c[3] ^ u[3]))
      return s;
  }
  function r(o) {
    var s = Bs.decodeUnsafe(o);
    if (s)
      return n(s);
  }
  function i(o) {
    var s = Bs.decode(o), c = n(s);
    if (!c) throw new Error("Invalid checksum");
    return c;
  }
  return {
    encode: t,
    decode: i,
    decodeUnsafe: r
  };
}, { sha256: ra } = bn, F1 = C1;
function N1(e) {
  return ra(ra(e));
}
var qc = F1(N1);
Object.defineProperty(Yo, "__esModule", { value: !0 });
Yo.p2pkh = void 0;
const Ls = an, R1 = Ye, Mr = yt(), dt = it, hn = _t, ia = qc, Fn = Mr.OPS;
function B1(e, t) {
  if (!e.address && !e.hash && !e.output && !e.pubkey && !e.input)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, dt.typeforce)(
    {
      network: dt.typeforce.maybe(dt.typeforce.Object),
      address: dt.typeforce.maybe(dt.typeforce.String),
      hash: dt.typeforce.maybe(dt.typeforce.BufferN(20)),
      output: dt.typeforce.maybe(dt.typeforce.BufferN(25)),
      pubkey: dt.typeforce.maybe(dt.isPoint),
      signature: dt.typeforce.maybe(Mr.isCanonicalScriptSignature),
      input: dt.typeforce.maybe(dt.typeforce.Buffer)
    },
    e
  );
  const n = hn.value(() => {
    const s = M.from(ia.decode(e.address)), c = s.readUInt8(0), u = s.slice(1);
    return { version: c, hash: u };
  }), r = hn.value(() => Mr.decompile(e.input)), i = e.network || R1.bitcoin, o = { name: "p2pkh", network: i };
  if (hn.prop(o, "address", () => {
    if (!o.hash) return;
    const s = M.allocUnsafe(21);
    return s.writeUInt8(i.pubKeyHash, 0), o.hash.copy(s, 1), ia.encode(s);
  }), hn.prop(o, "hash", () => {
    if (e.output) return e.output.slice(3, 23);
    if (e.address) return n().hash;
    if (e.pubkey || o.pubkey) return Ls.hash160(e.pubkey || o.pubkey);
  }), hn.prop(o, "output", () => {
    if (o.hash)
      return Mr.compile([
        Fn.OP_DUP,
        Fn.OP_HASH160,
        o.hash,
        Fn.OP_EQUALVERIFY,
        Fn.OP_CHECKSIG
      ]);
  }), hn.prop(o, "pubkey", () => {
    if (e.input)
      return r()[1];
  }), hn.prop(o, "signature", () => {
    if (e.input)
      return r()[0];
  }), hn.prop(o, "input", () => {
    if (e.pubkey && e.signature)
      return Mr.compile([e.signature, e.pubkey]);
  }), hn.prop(o, "witness", () => {
    if (o.input)
      return [];
  }), t.validate) {
    let s = M.from([]);
    if (e.address) {
      if (n().version !== i.pubKeyHash)
        throw new TypeError("Invalid version or Network mismatch");
      if (n().hash.length !== 20) throw new TypeError("Invalid address");
      s = n().hash;
    }
    if (e.hash) {
      if (s.length > 0 && !s.equals(e.hash))
        throw new TypeError("Hash mismatch");
      s = e.hash;
    }
    if (e.output) {
      if (e.output.length !== 25 || e.output[0] !== Fn.OP_DUP || e.output[1] !== Fn.OP_HASH160 || e.output[2] !== 20 || e.output[23] !== Fn.OP_EQUALVERIFY || e.output[24] !== Fn.OP_CHECKSIG)
        throw new TypeError("Output is invalid");
      const c = e.output.slice(3, 23);
      if (s.length > 0 && !s.equals(c))
        throw new TypeError("Hash mismatch");
      s = c;
    }
    if (e.pubkey) {
      const c = Ls.hash160(e.pubkey);
      if (s.length > 0 && !s.equals(c))
        throw new TypeError("Hash mismatch");
      s = c;
    }
    if (e.input) {
      const c = r();
      if (c.length !== 2) throw new TypeError("Input is invalid");
      if (!Mr.isCanonicalScriptSignature(c[0]))
        throw new TypeError("Input has invalid signature");
      if (!(0, dt.isPoint)(c[1]))
        throw new TypeError("Input has invalid pubkey");
      if (e.signature && !e.signature.equals(c[0]))
        throw new TypeError("Signature mismatch");
      if (e.pubkey && !e.pubkey.equals(c[1]))
        throw new TypeError("Pubkey mismatch");
      const u = Ls.hash160(c[1]);
      if (s.length > 0 && !s.equals(u))
        throw new TypeError("Hash mismatch");
    }
  }
  return Object.assign(o, e);
}
Yo.p2pkh = B1;
var Qo = {};
Object.defineProperty(Qo, "__esModule", { value: !0 });
Qo.p2sh = void 0;
const oa = an, L1 = Ye, Xt = yt(), xe = it, Gt = _t, sa = qc, pi = Xt.OPS;
function U1(e, t) {
  if (!e.address && !e.hash && !e.output && !e.redeem && !e.input)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, xe.typeforce)(
    {
      network: xe.typeforce.maybe(xe.typeforce.Object),
      address: xe.typeforce.maybe(xe.typeforce.String),
      hash: xe.typeforce.maybe(xe.typeforce.BufferN(20)),
      output: xe.typeforce.maybe(xe.typeforce.BufferN(23)),
      redeem: xe.typeforce.maybe({
        network: xe.typeforce.maybe(xe.typeforce.Object),
        output: xe.typeforce.maybe(xe.typeforce.Buffer),
        input: xe.typeforce.maybe(xe.typeforce.Buffer),
        witness: xe.typeforce.maybe(
          xe.typeforce.arrayOf(xe.typeforce.Buffer)
        )
      }),
      input: xe.typeforce.maybe(xe.typeforce.Buffer),
      witness: xe.typeforce.maybe(
        xe.typeforce.arrayOf(xe.typeforce.Buffer)
      )
    },
    e
  );
  let n = e.network;
  n || (n = e.redeem && e.redeem.network || L1.bitcoin);
  const r = { network: n }, i = Gt.value(() => {
    const c = M.from(sa.decode(e.address)), u = c.readUInt8(0), d = c.slice(1);
    return { version: u, hash: d };
  }), o = Gt.value(() => Xt.decompile(e.input)), s = Gt.value(() => {
    const c = o(), u = c[c.length - 1];
    return {
      network: n,
      output: u === pi.OP_FALSE ? M.from([]) : u,
      input: Xt.compile(c.slice(0, -1)),
      witness: e.witness || []
    };
  });
  if (Gt.prop(r, "address", () => {
    if (!r.hash) return;
    const c = M.allocUnsafe(21);
    return c.writeUInt8(r.network.scriptHash, 0), r.hash.copy(c, 1), sa.encode(c);
  }), Gt.prop(r, "hash", () => {
    if (e.output) return e.output.slice(2, 22);
    if (e.address) return i().hash;
    if (r.redeem && r.redeem.output) return oa.hash160(r.redeem.output);
  }), Gt.prop(r, "output", () => {
    if (r.hash)
      return Xt.compile([pi.OP_HASH160, r.hash, pi.OP_EQUAL]);
  }), Gt.prop(r, "redeem", () => {
    if (e.input)
      return s();
  }), Gt.prop(r, "input", () => {
    if (!(!e.redeem || !e.redeem.input || !e.redeem.output))
      return Xt.compile(
        [].concat(Xt.decompile(e.redeem.input), e.redeem.output)
      );
  }), Gt.prop(r, "witness", () => {
    if (r.redeem && r.redeem.witness) return r.redeem.witness;
    if (r.input) return [];
  }), Gt.prop(r, "name", () => {
    const c = ["p2sh"];
    return r.redeem !== void 0 && r.redeem.name !== void 0 && c.push(r.redeem.name), c.join("-");
  }), t.validate) {
    let c = M.from([]);
    if (e.address) {
      if (i().version !== n.scriptHash)
        throw new TypeError("Invalid version or Network mismatch");
      if (i().hash.length !== 20) throw new TypeError("Invalid address");
      c = i().hash;
    }
    if (e.hash) {
      if (c.length > 0 && !c.equals(e.hash))
        throw new TypeError("Hash mismatch");
      c = e.hash;
    }
    if (e.output) {
      if (e.output.length !== 23 || e.output[0] !== pi.OP_HASH160 || e.output[1] !== 20 || e.output[22] !== pi.OP_EQUAL)
        throw new TypeError("Output is invalid");
      const d = e.output.slice(2, 22);
      if (c.length > 0 && !c.equals(d))
        throw new TypeError("Hash mismatch");
      c = d;
    }
    const u = (d) => {
      if (d.output) {
        const a = Xt.decompile(d.output);
        if (!a || a.length < 1)
          throw new TypeError("Redeem.output too short");
        if (d.output.byteLength > 520)
          throw new TypeError(
            "Redeem.output unspendable if larger than 520 bytes"
          );
        if (Xt.countNonPushOnlyOPs(a) > 201)
          throw new TypeError(
            "Redeem.output unspendable with more than 201 non-push ops"
          );
        const g = oa.hash160(d.output);
        if (c.length > 0 && !c.equals(g))
          throw new TypeError("Hash mismatch");
        c = g;
      }
      if (d.input) {
        const a = d.input.length > 0, g = d.witness && d.witness.length > 0;
        if (!a && !g) throw new TypeError("Empty input");
        if (a && g)
          throw new TypeError("Input and witness provided");
        if (a) {
          const m = Xt.decompile(d.input);
          if (!Xt.isPushOnly(m))
            throw new TypeError("Non push-only scriptSig");
        }
      }
    };
    if (e.input) {
      const d = o();
      if (!d || d.length < 1) throw new TypeError("Input too short");
      if (!M.isBuffer(s().output))
        throw new TypeError("Input is invalid");
      u(s());
    }
    if (e.redeem) {
      if (e.redeem.network && e.redeem.network !== n)
        throw new TypeError("Network mismatch");
      if (e.input) {
        const d = s();
        if (e.redeem.output && !e.redeem.output.equals(d.output))
          throw new TypeError("Redeem.output mismatch");
        if (e.redeem.input && !e.redeem.input.equals(d.input))
          throw new TypeError("Redeem.input mismatch");
      }
      u(e.redeem);
    }
    if (e.witness && e.redeem && e.redeem.witness && !(0, xe.stacksEqual)(e.redeem.witness, e.witness))
      throw new TypeError("Witness and redeem.witness mismatch");
  }
  return Object.assign(r, e);
}
Qo.p2sh = U1;
var Zo = {}, _n = {};
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.bech32m = _n.bech32 = void 0;
const Oo = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", wf = {};
for (let e = 0; e < Oo.length; e++) {
  const t = Oo.charAt(e);
  wf[t] = e;
}
function Vr(e) {
  const t = e >> 25;
  return (e & 33554431) << 5 ^ -(t >> 0 & 1) & 996825010 ^ -(t >> 1 & 1) & 642813549 ^ -(t >> 2 & 1) & 513874426 ^ -(t >> 3 & 1) & 1027748829 ^ -(t >> 4 & 1) & 705979059;
}
function ca(e) {
  let t = 1;
  for (let n = 0; n < e.length; ++n) {
    const r = e.charCodeAt(n);
    if (r < 33 || r > 126)
      return "Invalid prefix (" + e + ")";
    t = Vr(t) ^ r >> 5;
  }
  t = Vr(t);
  for (let n = 0; n < e.length; ++n) {
    const r = e.charCodeAt(n);
    t = Vr(t) ^ r & 31;
  }
  return t;
}
function Xc(e, t, n, r) {
  let i = 0, o = 0;
  const s = (1 << n) - 1, c = [];
  for (let u = 0; u < e.length; ++u)
    for (i = i << t | e[u], o += t; o >= n; )
      o -= n, c.push(i >> o & s);
  if (r)
    o > 0 && c.push(i << n - o & s);
  else {
    if (o >= t)
      return "Excess padding";
    if (i << n - o & s)
      return "Non-zero padding";
  }
  return c;
}
function $1(e) {
  return Xc(e, 8, 5, !0);
}
function H1(e) {
  const t = Xc(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
}
function M1(e) {
  const t = Xc(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
  throw new Error(t);
}
function yf(e) {
  let t;
  e === "bech32" ? t = 1 : t = 734539939;
  function n(s, c, u) {
    if (u = u || 90, s.length + 7 + c.length > u)
      throw new TypeError("Exceeds length limit");
    s = s.toLowerCase();
    let d = ca(s);
    if (typeof d == "string")
      throw new Error(d);
    let a = s + "1";
    for (let g = 0; g < c.length; ++g) {
      const m = c[g];
      if (m >> 5)
        throw new Error("Non 5-bit word");
      d = Vr(d) ^ m, a += Oo.charAt(m);
    }
    for (let g = 0; g < 6; ++g)
      d = Vr(d);
    d ^= t;
    for (let g = 0; g < 6; ++g) {
      const m = d >> (5 - g) * 5 & 31;
      a += Oo.charAt(m);
    }
    return a;
  }
  function r(s, c) {
    if (c = c || 90, s.length < 8)
      return s + " too short";
    if (s.length > c)
      return "Exceeds length limit";
    const u = s.toLowerCase(), d = s.toUpperCase();
    if (s !== u && s !== d)
      return "Mixed-case string " + s;
    s = u;
    const a = s.lastIndexOf("1");
    if (a === -1)
      return "No separator character for " + s;
    if (a === 0)
      return "Missing prefix for " + s;
    const g = s.slice(0, a), m = s.slice(a + 1);
    if (m.length < 6)
      return "Data too short";
    let h = ca(g);
    if (typeof h == "string")
      return h;
    const S = [];
    for (let _ = 0; _ < m.length; ++_) {
      const A = m.charAt(_), L = wf[A];
      if (L === void 0)
        return "Unknown character " + A;
      h = Vr(h) ^ L, !(_ + 6 >= m.length) && S.push(L);
    }
    return h !== t ? "Invalid checksum for " + s : { prefix: g, words: S };
  }
  function i(s, c) {
    const u = r(s, c);
    if (typeof u == "object")
      return u;
  }
  function o(s, c) {
    const u = r(s, c);
    if (typeof u == "object")
      return u;
    throw new Error(u);
  }
  return {
    decodeUnsafe: i,
    decode: o,
    encode: n,
    toWords: $1,
    fromWordsUnsafe: H1,
    fromWords: M1
  };
}
_n.bech32 = yf("bech32");
_n.bech32m = yf("bech32m");
Object.defineProperty(Zo, "__esModule", { value: !0 });
Zo.p2wpkh = void 0;
const Us = an, D1 = Ye, po = yt(), Ke = it, Nn = _t, to = _n, ua = po.OPS, j1 = M.alloc(0);
function W1(e, t) {
  if (!e.address && !e.hash && !e.output && !e.pubkey && !e.witness)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, Ke.typeforce)(
    {
      address: Ke.typeforce.maybe(Ke.typeforce.String),
      hash: Ke.typeforce.maybe(Ke.typeforce.BufferN(20)),
      input: Ke.typeforce.maybe(Ke.typeforce.BufferN(0)),
      network: Ke.typeforce.maybe(Ke.typeforce.Object),
      output: Ke.typeforce.maybe(Ke.typeforce.BufferN(22)),
      pubkey: Ke.typeforce.maybe(Ke.isPoint),
      signature: Ke.typeforce.maybe(po.isCanonicalScriptSignature),
      witness: Ke.typeforce.maybe(
        Ke.typeforce.arrayOf(Ke.typeforce.Buffer)
      )
    },
    e
  );
  const n = Nn.value(() => {
    const o = to.bech32.decode(e.address), s = o.words.shift(), c = to.bech32.fromWords(o.words);
    return {
      version: s,
      prefix: o.prefix,
      data: M.from(c)
    };
  }), r = e.network || D1.bitcoin, i = { name: "p2wpkh", network: r };
  if (Nn.prop(i, "address", () => {
    if (!i.hash) return;
    const o = to.bech32.toWords(i.hash);
    return o.unshift(0), to.bech32.encode(r.bech32, o);
  }), Nn.prop(i, "hash", () => {
    if (e.output) return e.output.slice(2, 22);
    if (e.address) return n().data;
    if (e.pubkey || i.pubkey) return Us.hash160(e.pubkey || i.pubkey);
  }), Nn.prop(i, "output", () => {
    if (i.hash)
      return po.compile([ua.OP_0, i.hash]);
  }), Nn.prop(i, "pubkey", () => {
    if (e.pubkey) return e.pubkey;
    if (e.witness)
      return e.witness[1];
  }), Nn.prop(i, "signature", () => {
    if (e.witness)
      return e.witness[0];
  }), Nn.prop(i, "input", () => {
    if (i.witness)
      return j1;
  }), Nn.prop(i, "witness", () => {
    if (e.pubkey && e.signature)
      return [e.signature, e.pubkey];
  }), t.validate) {
    let o = M.from([]);
    if (e.address) {
      if (r && r.bech32 !== n().prefix)
        throw new TypeError("Invalid prefix or Network mismatch");
      if (n().version !== 0)
        throw new TypeError("Invalid address version");
      if (n().data.length !== 20)
        throw new TypeError("Invalid address data");
      o = n().data;
    }
    if (e.hash) {
      if (o.length > 0 && !o.equals(e.hash))
        throw new TypeError("Hash mismatch");
      o = e.hash;
    }
    if (e.output) {
      if (e.output.length !== 22 || e.output[0] !== ua.OP_0 || e.output[1] !== 20)
        throw new TypeError("Output is invalid");
      if (o.length > 0 && !o.equals(e.output.slice(2)))
        throw new TypeError("Hash mismatch");
      o = e.output.slice(2);
    }
    if (e.pubkey) {
      const s = Us.hash160(e.pubkey);
      if (o.length > 0 && !o.equals(s))
        throw new TypeError("Hash mismatch");
      if (o = s, !(0, Ke.isPoint)(e.pubkey) || e.pubkey.length !== 33)
        throw new TypeError("Invalid pubkey for p2wpkh");
    }
    if (e.witness) {
      if (e.witness.length !== 2) throw new TypeError("Witness is invalid");
      if (!po.isCanonicalScriptSignature(e.witness[0]))
        throw new TypeError("Witness has invalid signature");
      if (!(0, Ke.isPoint)(e.witness[1]) || e.witness[1].length !== 33)
        throw new TypeError("Witness has invalid pubkey");
      if (e.signature && !e.signature.equals(e.witness[0]))
        throw new TypeError("Signature mismatch");
      if (e.pubkey && !e.pubkey.equals(e.witness[1]))
        throw new TypeError("Pubkey mismatch");
      const s = Us.hash160(e.witness[1]);
      if (o.length > 0 && !o.equals(s))
        throw new TypeError("Hash mismatch");
    }
  }
  return Object.assign(i, e);
}
Zo.p2wpkh = W1;
var es = {};
Object.defineProperty(es, "__esModule", { value: !0 });
es.p2wsh = void 0;
const aa = an, K1 = Ye, mn = yt(), _e = it, pn = _t, no = _n, la = mn.OPS, $s = M.alloc(0);
function ro(e) {
  return !!(M.isBuffer(e) && e.length === 65 && e[0] === 4 && (0, _e.isPoint)(e));
}
function V1(e, t) {
  if (!e.address && !e.hash && !e.output && !e.redeem && !e.witness)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, _e.typeforce)(
    {
      network: _e.typeforce.maybe(_e.typeforce.Object),
      address: _e.typeforce.maybe(_e.typeforce.String),
      hash: _e.typeforce.maybe(_e.typeforce.BufferN(32)),
      output: _e.typeforce.maybe(_e.typeforce.BufferN(34)),
      redeem: _e.typeforce.maybe({
        input: _e.typeforce.maybe(_e.typeforce.Buffer),
        network: _e.typeforce.maybe(_e.typeforce.Object),
        output: _e.typeforce.maybe(_e.typeforce.Buffer),
        witness: _e.typeforce.maybe(
          _e.typeforce.arrayOf(_e.typeforce.Buffer)
        )
      }),
      input: _e.typeforce.maybe(_e.typeforce.BufferN(0)),
      witness: _e.typeforce.maybe(
        _e.typeforce.arrayOf(_e.typeforce.Buffer)
      )
    },
    e
  );
  const n = pn.value(() => {
    const s = no.bech32.decode(e.address), c = s.words.shift(), u = no.bech32.fromWords(s.words);
    return {
      version: c,
      prefix: s.prefix,
      data: M.from(u)
    };
  }), r = pn.value(() => mn.decompile(e.redeem.input));
  let i = e.network;
  i || (i = e.redeem && e.redeem.network || K1.bitcoin);
  const o = { network: i };
  if (pn.prop(o, "address", () => {
    if (!o.hash) return;
    const s = no.bech32.toWords(o.hash);
    return s.unshift(0), no.bech32.encode(i.bech32, s);
  }), pn.prop(o, "hash", () => {
    if (e.output) return e.output.slice(2);
    if (e.address) return n().data;
    if (o.redeem && o.redeem.output) return aa.sha256(o.redeem.output);
  }), pn.prop(o, "output", () => {
    if (o.hash)
      return mn.compile([la.OP_0, o.hash]);
  }), pn.prop(o, "redeem", () => {
    if (e.witness)
      return {
        output: e.witness[e.witness.length - 1],
        input: $s,
        witness: e.witness.slice(0, -1)
      };
  }), pn.prop(o, "input", () => {
    if (o.witness)
      return $s;
  }), pn.prop(o, "witness", () => {
    if (e.redeem && e.redeem.input && e.redeem.input.length > 0 && e.redeem.output && e.redeem.output.length > 0) {
      const s = mn.toStack(r());
      return o.redeem = Object.assign({ witness: s }, e.redeem), o.redeem.input = $s, [].concat(s, e.redeem.output);
    }
    if (e.redeem && e.redeem.output && e.redeem.witness)
      return [].concat(e.redeem.witness, e.redeem.output);
  }), pn.prop(o, "name", () => {
    const s = ["p2wsh"];
    return o.redeem !== void 0 && o.redeem.name !== void 0 && s.push(o.redeem.name), s.join("-");
  }), t.validate) {
    let s = M.from([]);
    if (e.address) {
      if (n().prefix !== i.bech32)
        throw new TypeError("Invalid prefix or Network mismatch");
      if (n().version !== 0)
        throw new TypeError("Invalid address version");
      if (n().data.length !== 32)
        throw new TypeError("Invalid address data");
      s = n().data;
    }
    if (e.hash) {
      if (s.length > 0 && !s.equals(e.hash))
        throw new TypeError("Hash mismatch");
      s = e.hash;
    }
    if (e.output) {
      if (e.output.length !== 34 || e.output[0] !== la.OP_0 || e.output[1] !== 32)
        throw new TypeError("Output is invalid");
      const c = e.output.slice(2);
      if (s.length > 0 && !s.equals(c))
        throw new TypeError("Hash mismatch");
      s = c;
    }
    if (e.redeem) {
      if (e.redeem.network && e.redeem.network !== i)
        throw new TypeError("Network mismatch");
      if (e.redeem.input && e.redeem.input.length > 0 && e.redeem.witness && e.redeem.witness.length > 0)
        throw new TypeError("Ambiguous witness source");
      if (e.redeem.output) {
        const c = mn.decompile(e.redeem.output);
        if (!c || c.length < 1)
          throw new TypeError("Redeem.output is invalid");
        if (e.redeem.output.byteLength > 3600)
          throw new TypeError(
            "Redeem.output unspendable if larger than 3600 bytes"
          );
        if (mn.countNonPushOnlyOPs(c) > 201)
          throw new TypeError(
            "Redeem.output unspendable with more than 201 non-push ops"
          );
        const u = aa.sha256(e.redeem.output);
        if (s.length > 0 && !s.equals(u))
          throw new TypeError("Hash mismatch");
        s = u;
      }
      if (e.redeem.input && !mn.isPushOnly(r()))
        throw new TypeError("Non push-only scriptSig");
      if (e.witness && e.redeem.witness && !(0, _e.stacksEqual)(e.witness, e.redeem.witness))
        throw new TypeError("Witness and redeem.witness mismatch");
      if (e.redeem.input && r().some(ro) || e.redeem.output && (mn.decompile(e.redeem.output) || []).some(
        ro
      ))
        throw new TypeError(
          "redeem.input or redeem.output contains uncompressed pubkey"
        );
    }
    if (e.witness && e.witness.length > 0) {
      const c = e.witness[e.witness.length - 1];
      if (e.redeem && e.redeem.output && !e.redeem.output.equals(c))
        throw new TypeError("Witness and redeem.output mismatch");
      if (e.witness.some(ro) || (mn.decompile(c) || []).some(ro))
        throw new TypeError("Witness contains uncompressed pubkey");
    }
  }
  return Object.assign(o, e);
}
es.p2wsh = V1;
var gi = {}, Kn = {};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.getEccLib = Kn.initEccLib = void 0;
const Pi = {};
function G1(e) {
  e ? e !== Pi.eccLib && (X1(e), Pi.eccLib = e) : Pi.eccLib = e;
}
Kn.initEccLib = G1;
function q1() {
  if (!Pi.eccLib)
    throw new Error(
      "No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance"
    );
  return Pi.eccLib;
}
Kn.getEccLib = q1;
const gn = (e) => M.from(e, "hex");
function X1(e) {
  At(typeof e.isXOnlyPoint == "function"), At(
    e.isXOnlyPoint(
      gn("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")
    )
  ), At(
    e.isXOnlyPoint(
      gn("fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e")
    )
  ), At(
    e.isXOnlyPoint(
      gn("f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9")
    )
  ), At(
    e.isXOnlyPoint(
      gn("0000000000000000000000000000000000000000000000000000000000000001")
    )
  ), At(
    !e.isXOnlyPoint(
      gn("0000000000000000000000000000000000000000000000000000000000000000")
    )
  ), At(
    !e.isXOnlyPoint(
      gn("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")
    )
  ), At(typeof e.xOnlyPointAddTweak == "function"), z1.forEach((t) => {
    const n = e.xOnlyPointAddTweak(gn(t.pubkey), gn(t.tweak));
    t.result === null ? At(n === null) : (At(n !== null), At(n.parity === t.parity), At(M.from(n.xOnlyPubkey).equals(gn(t.result))));
  });
}
function At(e) {
  if (!e) throw new Error("ecc library invalid");
}
const z1 = [
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
var ts = {}, Ve = {}, pc = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, t) {
  var n = qo, r = n.Buffer;
  function i(s, c) {
    for (var u in s)
      c[u] = s[u];
  }
  r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? e.exports = n : (i(n, t), t.Buffer = o);
  function o(s, c, u) {
    return r(s, c, u);
  }
  o.prototype = Object.create(r.prototype), i(r, o), o.from = function(s, c, u) {
    if (typeof s == "number")
      throw new TypeError("Argument must not be a number");
    return r(s, c, u);
  }, o.alloc = function(s, c, u) {
    if (typeof s != "number")
      throw new TypeError("Argument must be a number");
    var d = r(s);
    return c !== void 0 ? typeof u == "string" ? d.fill(c, u) : d.fill(c) : d.fill(0), d;
  }, o.allocUnsafe = function(s) {
    if (typeof s != "number")
      throw new TypeError("Argument must be a number");
    return r(s);
  }, o.allocUnsafeSlow = function(s) {
    if (typeof s != "number")
      throw new TypeError("Argument must be a number");
    return n.SlowBuffer(s);
  };
})(pc, pc.exports);
var Y1 = pc.exports, gc = Y1.Buffer, J1 = 9007199254740991;
function zc(e) {
  if (e < 0 || e > J1 || e % 1 !== 0) throw new RangeError("value out of range");
}
function vi(e, t, n) {
  if (zc(e), t || (t = gc.allocUnsafe(Ef(e))), !gc.isBuffer(t)) throw new TypeError("buffer must be a Buffer instance");
  return n || (n = 0), e < 253 ? (t.writeUInt8(e, n), vi.bytes = 1) : e <= 65535 ? (t.writeUInt8(253, n), t.writeUInt16LE(e, n + 1), vi.bytes = 3) : e <= 4294967295 ? (t.writeUInt8(254, n), t.writeUInt32LE(e, n + 1), vi.bytes = 5) : (t.writeUInt8(255, n), t.writeUInt32LE(e >>> 0, n + 1), t.writeUInt32LE(e / 4294967296 | 0, n + 5), vi.bytes = 9), t;
}
function bi(e, t) {
  if (!gc.isBuffer(e)) throw new TypeError("buffer must be a Buffer instance");
  t || (t = 0);
  var n = e.readUInt8(t);
  if (n < 253)
    return bi.bytes = 1, n;
  if (n === 253)
    return bi.bytes = 3, e.readUInt16LE(t + 1);
  if (n === 254)
    return bi.bytes = 5, e.readUInt32LE(t + 1);
  bi.bytes = 9;
  var r = e.readUInt32LE(t + 1), i = e.readUInt32LE(t + 5), o = i * 4294967296 + r;
  return zc(o), o;
}
function Ef(e) {
  return zc(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9;
}
var Q1 = { encode: vi, decode: bi, encodingLength: Ef };
Object.defineProperty(Ve, "__esModule", { value: !0 });
Ve.BufferReader = Ve.BufferWriter = Ve.cloneBuffer = Ve.reverseBuffer = Ve.writeUInt64LE = Ve.readUInt64LE = Ve.varuint = void 0;
const sr = it, { typeforce: vf } = sr, Ri = Q1;
Ve.varuint = Ri;
function bf(e, t) {
  if (typeof e != "number")
    throw new Error("cannot write a non-number as a number");
  if (e < 0)
    throw new Error("specified a negative value for writing an unsigned value");
  if (e > t) throw new Error("RangeError: value out of range");
  if (Math.floor(e) !== e)
    throw new Error("value has a fractional component");
}
function Sf(e, t) {
  const n = e.readUInt32LE(t);
  let r = e.readUInt32LE(t + 4);
  return r *= 4294967296, bf(r + n, 9007199254740991), r + n;
}
Ve.readUInt64LE = Sf;
function Tf(e, t, n) {
  return bf(t, 9007199254740991), e.writeInt32LE(t & -1, n), e.writeUInt32LE(Math.floor(t / 4294967296), n + 4), n + 8;
}
Ve.writeUInt64LE = Tf;
function Z1(e) {
  if (e.length < 1) return e;
  let t = e.length - 1, n = 0;
  for (let r = 0; r < e.length / 2; r++)
    n = e[r], e[r] = e[t], e[t] = n, t--;
  return e;
}
Ve.reverseBuffer = Z1;
function ew(e) {
  const t = M.allocUnsafe(e.length);
  return e.copy(t), t;
}
Ve.cloneBuffer = ew;
class Yc {
  static withCapacity(t) {
    return new Yc(M.alloc(t));
  }
  constructor(t, n = 0) {
    this.buffer = t, this.offset = n, vf(sr.tuple(sr.Buffer, sr.UInt32), [t, n]);
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
    this.offset = Tf(this.buffer, t, this.offset);
  }
  writeVarInt(t) {
    Ri.encode(t, this.buffer, this.offset), this.offset += Ri.encode.bytes;
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
    this.writeVarInt(t.length), t.forEach((n) => this.writeVarSlice(n));
  }
  end() {
    if (this.buffer.length === this.offset)
      return this.buffer;
    throw new Error(`buffer size ${this.buffer.length}, offset ${this.offset}`);
  }
}
Ve.BufferWriter = Yc;
class tw {
  constructor(t, n = 0) {
    this.buffer = t, this.offset = n, vf(sr.tuple(sr.Buffer, sr.UInt32), [t, n]);
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
    const t = Sf(this.buffer, this.offset);
    return this.offset += 8, t;
  }
  readVarInt() {
    const t = Ri.decode(this.buffer, this.offset);
    return this.offset += Ri.decode.bytes, t;
  }
  readSlice(t) {
    if (this.buffer.length < this.offset + t)
      throw new Error("Cannot read slice out of bounds");
    const n = this.buffer.slice(this.offset, this.offset + t);
    return this.offset += t, n;
  }
  readVarSlice() {
    return this.readSlice(this.readVarInt());
  }
  readVector() {
    const t = this.readVarInt(), n = [];
    for (let r = 0; r < t; r++) n.push(this.readVarSlice());
    return n;
  }
}
Ve.BufferReader = tw;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.tweakKey = e.tapTweakHash = e.tapleafHash = e.findScriptPath = e.toHashTree = e.rootHashFromPath = e.MAX_TAPTREE_DEPTH = e.LEAF_VERSION_TAPSCRIPT = void 0;
  const t = qo, n = Kn, r = an, i = Ve, o = it;
  e.LEAF_VERSION_TAPSCRIPT = 192, e.MAX_TAPTREE_DEPTH = 128;
  const s = (_) => "left" in _ && "right" in _;
  function c(_, A) {
    if (_.length < 33)
      throw new TypeError(
        `The control-block length is too small. Got ${_.length}, expected min 33.`
      );
    const L = (_.length - 33) / 32;
    let v = A;
    for (let I = 0; I < L; I++) {
      const O = _.slice(33 + 32 * I, 65 + 32 * I);
      v.compare(O) < 0 ? v = h(v, O) : v = h(O, v);
    }
    return v;
  }
  e.rootHashFromPath = c;
  function u(_) {
    if ((0, o.isTapleaf)(_))
      return { hash: a(_) };
    const A = [u(_[0]), u(_[1])];
    A.sort((I, O) => I.hash.compare(O.hash));
    const [L, v] = A;
    return {
      hash: h(L.hash, v.hash),
      left: L,
      right: v
    };
  }
  e.toHashTree = u;
  function d(_, A) {
    if (s(_)) {
      const L = d(_.left, A);
      if (L !== void 0) return [...L, _.right.hash];
      const v = d(_.right, A);
      if (v !== void 0) return [...v, _.left.hash];
    } else if (_.hash.equals(A))
      return [];
  }
  e.findScriptPath = d;
  function a(_) {
    const A = _.version || e.LEAF_VERSION_TAPSCRIPT;
    return r.taggedHash(
      "TapLeaf",
      t.Buffer.concat([
        t.Buffer.from([A]),
        S(_.output)
      ])
    );
  }
  e.tapleafHash = a;
  function g(_, A) {
    return r.taggedHash(
      "TapTweak",
      t.Buffer.concat(A ? [_, A] : [_])
    );
  }
  e.tapTweakHash = g;
  function m(_, A) {
    if (!t.Buffer.isBuffer(_) || _.length !== 32 || A && A.length !== 32) return null;
    const L = g(_, A), v = (0, n.getEccLib)().xOnlyPointAddTweak(_, L);
    return !v || v.xOnlyPubkey === null ? null : {
      parity: v.parity,
      x: t.Buffer.from(v.xOnlyPubkey)
    };
  }
  e.tweakKey = m;
  function h(_, A) {
    return r.taggedHash("TapBranch", t.Buffer.concat([_, A]));
  }
  function S(_) {
    const A = i.varuint.encodingLength(_.length), L = t.Buffer.allocUnsafe(A);
    return i.varuint.encode(_.length, L), t.Buffer.concat([L, _]);
  }
})(ts);
var fa;
function nw() {
  if (fa) return gi;
  fa = 1, Object.defineProperty(gi, "__esModule", { value: !0 }), gi.p2tr = void 0;
  const e = qo, t = Ye, n = yt(), r = it, i = Kn, o = ts, s = _t, c = _n, u = Jc(), d = n.OPS, a = 1, g = 80;
  function m(h, S) {
    if (!h.address && !h.output && !h.pubkey && !h.internalPubkey && !(h.witness && h.witness.length > 1))
      throw new TypeError("Not enough data");
    S = Object.assign({ validate: !0 }, S || {}), (0, r.typeforce)(
      {
        address: r.typeforce.maybe(r.typeforce.String),
        input: r.typeforce.maybe(r.typeforce.BufferN(0)),
        network: r.typeforce.maybe(r.typeforce.Object),
        output: r.typeforce.maybe(r.typeforce.BufferN(34)),
        internalPubkey: r.typeforce.maybe(r.typeforce.BufferN(32)),
        hash: r.typeforce.maybe(r.typeforce.BufferN(32)),
        pubkey: r.typeforce.maybe(r.typeforce.BufferN(32)),
        signature: r.typeforce.maybe(
          r.typeforce.anyOf(
            r.typeforce.BufferN(64),
            r.typeforce.BufferN(65)
          )
        ),
        witness: r.typeforce.maybe(
          r.typeforce.arrayOf(r.typeforce.Buffer)
        ),
        scriptTree: r.typeforce.maybe(r.isTaptree),
        redeem: r.typeforce.maybe({
          output: r.typeforce.maybe(r.typeforce.Buffer),
          redeemVersion: r.typeforce.maybe(r.typeforce.Number),
          witness: r.typeforce.maybe(
            r.typeforce.arrayOf(r.typeforce.Buffer)
          )
        }),
        redeemVersion: r.typeforce.maybe(r.typeforce.Number)
      },
      h
    );
    const _ = s.value(() => (0, u.fromBech32)(h.address)), A = s.value(() => {
      if (!(!h.witness || !h.witness.length))
        return h.witness.length >= 2 && h.witness[h.witness.length - 1][0] === g ? h.witness.slice(0, -1) : h.witness.slice();
    }), L = s.value(() => {
      if (h.scriptTree) return (0, o.toHashTree)(h.scriptTree);
      if (h.hash) return { hash: h.hash };
    }), v = h.network || t.bitcoin, I = { name: "p2tr", network: v };
    if (s.prop(I, "address", () => {
      if (!I.pubkey) return;
      const O = c.bech32m.toWords(I.pubkey);
      return O.unshift(a), c.bech32m.encode(v.bech32, O);
    }), s.prop(I, "hash", () => {
      const O = L();
      if (O) return O.hash;
      const H = A();
      if (H && H.length > 1) {
        const B = H[H.length - 1], W = B[0] & r.TAPLEAF_VERSION_MASK, w = H[H.length - 2], p = (0, o.tapleafHash)({
          output: w,
          version: W
        });
        return (0, o.rootHashFromPath)(B, p);
      }
      return null;
    }), s.prop(I, "output", () => {
      if (I.pubkey)
        return n.compile([d.OP_1, I.pubkey]);
    }), s.prop(I, "redeemVersion", () => h.redeemVersion ? h.redeemVersion : h.redeem && h.redeem.redeemVersion !== void 0 && h.redeem.redeemVersion !== null ? h.redeem.redeemVersion : o.LEAF_VERSION_TAPSCRIPT), s.prop(I, "redeem", () => {
      const O = A();
      if (!(!O || O.length < 2))
        return {
          output: O[O.length - 2],
          witness: O.slice(0, -2),
          redeemVersion: O[O.length - 1][0] & r.TAPLEAF_VERSION_MASK
        };
    }), s.prop(I, "pubkey", () => {
      if (h.pubkey) return h.pubkey;
      if (h.output) return h.output.slice(2);
      if (h.address) return _().data;
      if (I.internalPubkey) {
        const O = (0, o.tweakKey)(I.internalPubkey, I.hash);
        if (O) return O.x;
      }
    }), s.prop(I, "internalPubkey", () => {
      if (h.internalPubkey) return h.internalPubkey;
      const O = A();
      if (O && O.length > 1)
        return O[O.length - 1].slice(1, 33);
    }), s.prop(I, "signature", () => {
      if (h.signature) return h.signature;
      const O = A();
      if (!(!O || O.length !== 1))
        return O[0];
    }), s.prop(I, "witness", () => {
      if (h.witness) return h.witness;
      const O = L();
      if (O && h.redeem && h.redeem.output && h.internalPubkey) {
        const H = (0, o.tapleafHash)({
          output: h.redeem.output,
          version: I.redeemVersion
        }), B = (0, o.findScriptPath)(O, H);
        if (!B) return;
        const W = (0, o.tweakKey)(h.internalPubkey, O.hash);
        if (!W) return;
        const w = e.Buffer.concat(
          [
            e.Buffer.from([I.redeemVersion | W.parity]),
            h.internalPubkey
          ].concat(B)
        );
        return [h.redeem.output, w];
      }
      if (h.signature) return [h.signature];
    }), S.validate) {
      let O = e.Buffer.from([]);
      if (h.address) {
        if (v && v.bech32 !== _().prefix)
          throw new TypeError("Invalid prefix or Network mismatch");
        if (_().version !== a)
          throw new TypeError("Invalid address version");
        if (_().data.length !== 32)
          throw new TypeError("Invalid address data");
        O = _().data;
      }
      if (h.pubkey) {
        if (O.length > 0 && !O.equals(h.pubkey))
          throw new TypeError("Pubkey mismatch");
        O = h.pubkey;
      }
      if (h.output) {
        if (h.output.length !== 34 || h.output[0] !== d.OP_1 || h.output[1] !== 32)
          throw new TypeError("Output is invalid");
        if (O.length > 0 && !O.equals(h.output.slice(2)))
          throw new TypeError("Pubkey mismatch");
        O = h.output.slice(2);
      }
      if (h.internalPubkey) {
        const W = (0, o.tweakKey)(h.internalPubkey, I.hash);
        if (O.length > 0 && !O.equals(W.x))
          throw new TypeError("Pubkey mismatch");
        O = W.x;
      }
      if (O && O.length && !(0, i.getEccLib)().isXOnlyPoint(O))
        throw new TypeError("Invalid pubkey for p2tr");
      const H = L();
      if (h.hash && H && !h.hash.equals(H.hash))
        throw new TypeError("Hash mismatch");
      if (h.redeem && h.redeem.output && H) {
        const W = (0, o.tapleafHash)({
          output: h.redeem.output,
          version: I.redeemVersion
        });
        if (!(0, o.findScriptPath)(H, W))
          throw new TypeError("Redeem script not in tree");
      }
      const B = A();
      if (h.redeem && I.redeem) {
        if (h.redeem.redeemVersion && h.redeem.redeemVersion !== I.redeem.redeemVersion)
          throw new TypeError("Redeem.redeemVersion and witness mismatch");
        if (h.redeem.output) {
          if (n.decompile(h.redeem.output).length === 0)
            throw new TypeError("Redeem.output is invalid");
          if (I.redeem.output && !h.redeem.output.equals(I.redeem.output))
            throw new TypeError("Redeem.output and witness mismatch");
        }
        if (h.redeem.witness && I.redeem.witness && !(0, r.stacksEqual)(h.redeem.witness, I.redeem.witness))
          throw new TypeError("Redeem.witness and witness mismatch");
      }
      if (B && B.length)
        if (B.length === 1) {
          if (h.signature && !h.signature.equals(B[0]))
            throw new TypeError("Signature mismatch");
        } else {
          const W = B[B.length - 1];
          if (W.length < 33)
            throw new TypeError(
              `The control-block length is too small. Got ${W.length}, expected min 33.`
            );
          if ((W.length - 33) % 32 !== 0)
            throw new TypeError(
              `The control-block length of ${W.length} is incorrect!`
            );
          const w = (W.length - 33) / 32;
          if (w > 128)
            throw new TypeError(
              `The script path is too long. Got ${w}, expected max 128.`
            );
          const p = W.slice(1, 33);
          if (h.internalPubkey && !h.internalPubkey.equals(p))
            throw new TypeError("Internal pubkey mismatch");
          if (!(0, i.getEccLib)().isXOnlyPoint(p))
            throw new TypeError("Invalid internalPubkey for p2tr witness");
          const b = W[0] & r.TAPLEAF_VERSION_MASK, k = B[B.length - 2], E = (0, o.tapleafHash)({
            output: k,
            version: b
          }), T = (0, o.rootHashFromPath)(W, E), F = (0, o.tweakKey)(p, T);
          if (!F)
            throw new TypeError("Invalid outputKey for p2tr witness");
          if (O.length && !O.equals(F.x))
            throw new TypeError("Pubkey mismatch for p2tr witness");
          if (F.parity !== (W[0] & 1))
            throw new Error("Incorrect parity");
        }
    }
    return Object.assign(I, h);
  }
  return gi.p2tr = m, gi;
}
var da;
function Wi() {
  return da || (da = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.p2tr = e.p2wsh = e.p2wpkh = e.p2sh = e.p2pkh = e.p2pk = e.p2ms = e.embed = void 0;
    const t = Go;
    Object.defineProperty(e, "embed", {
      enumerable: !0,
      get: function() {
        return t.p2data;
      }
    });
    const n = Xo;
    Object.defineProperty(e, "p2ms", {
      enumerable: !0,
      get: function() {
        return n.p2ms;
      }
    });
    const r = zo;
    Object.defineProperty(e, "p2pk", {
      enumerable: !0,
      get: function() {
        return r.p2pk;
      }
    });
    const i = Yo;
    Object.defineProperty(e, "p2pkh", {
      enumerable: !0,
      get: function() {
        return i.p2pkh;
      }
    });
    const o = Qo;
    Object.defineProperty(e, "p2sh", {
      enumerable: !0,
      get: function() {
        return o.p2sh;
      }
    });
    const s = Zo;
    Object.defineProperty(e, "p2wpkh", {
      enumerable: !0,
      get: function() {
        return s.p2wpkh;
      }
    });
    const c = es;
    Object.defineProperty(e, "p2wsh", {
      enumerable: !0,
      get: function() {
        return c.p2wsh;
      }
    });
    const u = nw();
    Object.defineProperty(e, "p2tr", {
      enumerable: !0,
      get: function() {
        return u.p2tr;
      }
    });
  }(As)), As;
}
var ha;
function Jc() {
  if (ha) return ft;
  ha = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.toOutputScript = ft.fromOutputScript = ft.toBech32 = ft.toBase58Check = ft.fromBech32 = ft.fromBase58Check = void 0;
  const e = Ye, t = Wi(), n = yt(), r = it, i = _n, o = qc, s = 40, c = 2, u = 16, d = 2, a = 80, g = "WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.";
  function m(I, O) {
    const H = I.slice(2);
    if (H.length < c || H.length > s)
      throw new TypeError("Invalid program length for segwit address");
    const B = I[0] - a;
    if (B < d || B > u)
      throw new TypeError("Invalid version for segwit address");
    if (I[1] !== H.length)
      throw new TypeError("Invalid script for segwit address");
    return console.warn(g), A(H, B, O.bech32);
  }
  function h(I) {
    const O = M.from(o.decode(I));
    if (O.length < 21) throw new TypeError(I + " is too short");
    if (O.length > 21) throw new TypeError(I + " is too long");
    const H = O.readUInt8(0), B = O.slice(1);
    return { version: H, hash: B };
  }
  ft.fromBase58Check = h;
  function S(I) {
    let O, H;
    try {
      O = i.bech32.decode(I);
    } catch {
    }
    if (O) {
      if (H = O.words[0], H !== 0) throw new TypeError(I + " uses wrong encoding");
    } else if (O = i.bech32m.decode(I), H = O.words[0], H === 0) throw new TypeError(I + " uses wrong encoding");
    const B = i.bech32.fromWords(O.words.slice(1));
    return {
      version: H,
      prefix: O.prefix,
      data: M.from(B)
    };
  }
  ft.fromBech32 = S;
  function _(I, O) {
    (0, r.typeforce)(
      (0, r.tuple)(r.Hash160bit, r.UInt8),
      arguments
    );
    const H = M.allocUnsafe(21);
    return H.writeUInt8(O, 0), I.copy(H, 1), o.encode(H);
  }
  ft.toBase58Check = _;
  function A(I, O, H) {
    const B = i.bech32.toWords(I);
    return B.unshift(O), O === 0 ? i.bech32.encode(H, B) : i.bech32m.encode(H, B);
  }
  ft.toBech32 = A;
  function L(I, O) {
    O = O || e.bitcoin;
    try {
      return t.p2pkh({ output: I, network: O }).address;
    } catch {
    }
    try {
      return t.p2sh({ output: I, network: O }).address;
    } catch {
    }
    try {
      return t.p2wpkh({ output: I, network: O }).address;
    } catch {
    }
    try {
      return t.p2wsh({ output: I, network: O }).address;
    } catch {
    }
    try {
      return t.p2tr({ output: I, network: O }).address;
    } catch {
    }
    try {
      return m(I, O);
    } catch {
    }
    throw new Error(n.toASM(I) + " has no matching Address");
  }
  ft.fromOutputScript = L;
  function v(I, O) {
    O = O || e.bitcoin;
    let H, B;
    try {
      H = h(I);
    } catch {
    }
    if (H) {
      if (H.version === O.pubKeyHash)
        return t.p2pkh({ hash: H.hash }).output;
      if (H.version === O.scriptHash)
        return t.p2sh({ hash: H.hash }).output;
    } else {
      try {
        B = S(I);
      } catch {
      }
      if (B) {
        if (B.prefix !== O.bech32)
          throw new Error(I + " has an invalid prefix");
        if (B.version === 0) {
          if (B.data.length === 20)
            return t.p2wpkh({ hash: B.data }).output;
          if (B.data.length === 32)
            return t.p2wsh({ hash: B.data }).output;
        } else if (B.version === 1) {
          if (B.data.length === 32)
            return t.p2tr({ pubkey: B.data }).output;
        } else if (B.version >= d && B.version <= u && B.data.length >= c && B.data.length <= s)
          return console.warn(g), n.compile([
            B.version + a,
            B.data
          ]);
      }
    }
    throw new Error(I + " has no matching Script");
  }
  return ft.toOutputScript = v, ft;
}
var ns = {}, rs = {};
Object.defineProperty(rs, "__esModule", { value: !0 });
rs.fastMerkleRoot = void 0;
function rw(e, t) {
  if (!Array.isArray(e)) throw TypeError("Expected values Array");
  if (typeof t != "function")
    throw TypeError("Expected digest Function");
  let n = e.length;
  const r = e.concat();
  for (; n > 1; ) {
    let i = 0;
    for (let o = 0; o < n; o += 2, ++i) {
      const s = r[o], c = o + 1 === n ? s : r[o + 1], u = M.concat([s, c]);
      r[i] = t(u);
    }
    n = i;
  }
  return r[0];
}
rs.fastMerkleRoot = rw;
var Gn = {};
Object.defineProperty(Gn, "__esModule", { value: !0 });
Gn.Transaction = void 0;
const He = Ve, ht = an, pa = yt(), iw = yt(), pe = it, { typeforce: qt } = pe;
function zt(e) {
  const t = e.length;
  return He.varuint.encodingLength(t) + t;
}
function ow(e) {
  const t = e.length;
  return He.varuint.encodingLength(t) + e.reduce((n, r) => n + zt(r), 0);
}
const Rn = M.allocUnsafe(0), ga = [], Hs = M.from(
  "0000000000000000000000000000000000000000000000000000000000000000",
  "hex"
), ma = M.from(
  "0000000000000000000000000000000000000000000000000000000000000001",
  "hex"
), sw = M.from("ffffffffffffffff", "hex"), cw = {
  script: Rn,
  valueBuffer: sw
};
function uw(e) {
  return e.value !== void 0;
}
class ae {
  constructor() {
    this.version = 1, this.locktime = 0, this.ins = [], this.outs = [];
  }
  static fromBuffer(t, n) {
    const r = new He.BufferReader(t), i = new ae();
    i.version = r.readInt32();
    const o = r.readUInt8(), s = r.readUInt8();
    let c = !1;
    o === ae.ADVANCED_TRANSACTION_MARKER && s === ae.ADVANCED_TRANSACTION_FLAG ? c = !0 : r.offset -= 2;
    const u = r.readVarInt();
    for (let a = 0; a < u; ++a)
      i.ins.push({
        hash: r.readSlice(32),
        index: r.readUInt32(),
        script: r.readVarSlice(),
        sequence: r.readUInt32(),
        witness: ga
      });
    const d = r.readVarInt();
    for (let a = 0; a < d; ++a)
      i.outs.push({
        value: r.readUInt64(),
        script: r.readVarSlice()
      });
    if (c) {
      for (let a = 0; a < u; ++a)
        i.ins[a].witness = r.readVector();
      if (!i.hasWitnesses())
        throw new Error("Transaction has superfluous witness data");
    }
    if (i.locktime = r.readUInt32(), n) return i;
    if (r.offset !== t.length)
      throw new Error("Transaction has unexpected data");
    return i;
  }
  static fromHex(t) {
    return ae.fromBuffer(M.from(t, "hex"), !1);
  }
  static isCoinbaseHash(t) {
    qt(pe.Hash256bit, t);
    for (let n = 0; n < 32; ++n)
      if (t[n] !== 0) return !1;
    return !0;
  }
  isCoinbase() {
    return this.ins.length === 1 && ae.isCoinbaseHash(this.ins[0].hash);
  }
  addInput(t, n, r, i) {
    return qt(
      pe.tuple(
        pe.Hash256bit,
        pe.UInt32,
        pe.maybe(pe.UInt32),
        pe.maybe(pe.Buffer)
      ),
      arguments
    ), pe.Null(r) && (r = ae.DEFAULT_SEQUENCE), this.ins.push({
      hash: t,
      index: n,
      script: i || Rn,
      sequence: r,
      witness: ga
    }) - 1;
  }
  addOutput(t, n) {
    return qt(pe.tuple(pe.Buffer, pe.Satoshi), arguments), this.outs.push({
      script: t,
      value: n
    }) - 1;
  }
  hasWitnesses() {
    return this.ins.some((t) => t.witness.length !== 0);
  }
  weight() {
    const t = this.byteLength(!1), n = this.byteLength(!0);
    return t * 3 + n;
  }
  virtualSize() {
    return Math.ceil(this.weight() / 4);
  }
  byteLength(t = !0) {
    const n = t && this.hasWitnesses();
    return (n ? 10 : 8) + He.varuint.encodingLength(this.ins.length) + He.varuint.encodingLength(this.outs.length) + this.ins.reduce((r, i) => r + 40 + zt(i.script), 0) + this.outs.reduce((r, i) => r + 8 + zt(i.script), 0) + (n ? this.ins.reduce((r, i) => r + ow(i.witness), 0) : 0);
  }
  clone() {
    const t = new ae();
    return t.version = this.version, t.locktime = this.locktime, t.ins = this.ins.map((n) => ({
      hash: n.hash,
      index: n.index,
      script: n.script,
      sequence: n.sequence,
      witness: n.witness
    })), t.outs = this.outs.map((n) => ({
      script: n.script,
      value: n.value
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
  hashForSignature(t, n, r) {
    if (qt(
      pe.tuple(
        pe.UInt32,
        pe.Buffer,
        /* types.UInt8 */
        pe.Number
      ),
      arguments
    ), t >= this.ins.length) return ma;
    const i = pa.compile(
      pa.decompile(n).filter((c) => c !== iw.OPS.OP_CODESEPARATOR)
    ), o = this.clone();
    if ((r & 31) === ae.SIGHASH_NONE)
      o.outs = [], o.ins.forEach((c, u) => {
        u !== t && (c.sequence = 0);
      });
    else if ((r & 31) === ae.SIGHASH_SINGLE) {
      if (t >= this.outs.length) return ma;
      o.outs.length = t + 1;
      for (let c = 0; c < t; c++)
        o.outs[c] = cw;
      o.ins.forEach((c, u) => {
        u !== t && (c.sequence = 0);
      });
    }
    r & ae.SIGHASH_ANYONECANPAY ? (o.ins = [o.ins[t]], o.ins[0].script = i) : (o.ins.forEach((c) => {
      c.script = Rn;
    }), o.ins[t].script = i);
    const s = M.allocUnsafe(o.byteLength(!1) + 4);
    return s.writeInt32LE(r, s.length - 4), o.__toBuffer(s, 0, !1), ht.hash256(s);
  }
  hashForWitnessV1(t, n, r, i, o, s) {
    if (qt(
      pe.tuple(
        pe.UInt32,
        qt.arrayOf(pe.Buffer),
        qt.arrayOf(pe.Satoshi),
        pe.UInt32
      ),
      arguments
    ), r.length !== this.ins.length || n.length !== this.ins.length)
      throw new Error("Must supply prevout script and value for all inputs");
    const c = i === ae.SIGHASH_DEFAULT ? ae.SIGHASH_ALL : i & ae.SIGHASH_OUTPUT_MASK, d = (i & ae.SIGHASH_INPUT_MASK) === ae.SIGHASH_ANYONECANPAY, a = c === ae.SIGHASH_NONE, g = c === ae.SIGHASH_SINGLE;
    let m = Rn, h = Rn, S = Rn, _ = Rn, A = Rn;
    if (!d) {
      let O = He.BufferWriter.withCapacity(
        36 * this.ins.length
      );
      this.ins.forEach((H) => {
        O.writeSlice(H.hash), O.writeUInt32(H.index);
      }), m = ht.sha256(O.end()), O = He.BufferWriter.withCapacity(
        8 * this.ins.length
      ), r.forEach((H) => O.writeUInt64(H)), h = ht.sha256(O.end()), O = He.BufferWriter.withCapacity(
        n.map(zt).reduce((H, B) => H + B)
      ), n.forEach(
        (H) => O.writeVarSlice(H)
      ), S = ht.sha256(O.end()), O = He.BufferWriter.withCapacity(
        4 * this.ins.length
      ), this.ins.forEach((H) => O.writeUInt32(H.sequence)), _ = ht.sha256(O.end());
    }
    if (a || g) {
      if (g && t < this.outs.length) {
        const O = this.outs[t], H = He.BufferWriter.withCapacity(
          8 + zt(O.script)
        );
        H.writeUInt64(O.value), H.writeVarSlice(O.script), A = ht.sha256(H.end());
      }
    } else {
      const O = this.outs.map((B) => 8 + zt(B.script)).reduce((B, W) => B + W), H = He.BufferWriter.withCapacity(O);
      this.outs.forEach((B) => {
        H.writeUInt64(B.value), H.writeVarSlice(B.script);
      }), A = ht.sha256(H.end());
    }
    const L = (o ? 2 : 0) + (s ? 1 : 0), v = 174 - (d ? 49 : 0) - (a ? 32 : 0) + (s ? 32 : 0) + (o ? 37 : 0), I = He.BufferWriter.withCapacity(v);
    if (I.writeUInt8(i), I.writeInt32(this.version), I.writeUInt32(this.locktime), I.writeSlice(m), I.writeSlice(h), I.writeSlice(S), I.writeSlice(_), a || g || I.writeSlice(A), I.writeUInt8(L), d) {
      const O = this.ins[t];
      I.writeSlice(O.hash), I.writeUInt32(O.index), I.writeUInt64(r[t]), I.writeVarSlice(n[t]), I.writeUInt32(O.sequence);
    } else
      I.writeUInt32(t);
    if (s) {
      const O = He.BufferWriter.withCapacity(
        zt(s)
      );
      O.writeVarSlice(s), I.writeSlice(ht.sha256(O.end()));
    }
    return g && I.writeSlice(A), o && (I.writeSlice(o), I.writeUInt8(0), I.writeUInt32(4294967295)), ht.taggedHash(
      "TapSighash",
      M.concat([M.from([0]), I.end()])
    );
  }
  hashForWitnessV0(t, n, r, i) {
    qt(
      pe.tuple(pe.UInt32, pe.Buffer, pe.Satoshi, pe.UInt32),
      arguments
    );
    let o = M.from([]), s, c = Hs, u = Hs, d = Hs;
    if (i & ae.SIGHASH_ANYONECANPAY || (o = M.allocUnsafe(36 * this.ins.length), s = new He.BufferWriter(o, 0), this.ins.forEach((g) => {
      s.writeSlice(g.hash), s.writeUInt32(g.index);
    }), u = ht.hash256(o)), !(i & ae.SIGHASH_ANYONECANPAY) && (i & 31) !== ae.SIGHASH_SINGLE && (i & 31) !== ae.SIGHASH_NONE && (o = M.allocUnsafe(4 * this.ins.length), s = new He.BufferWriter(o, 0), this.ins.forEach((g) => {
      s.writeUInt32(g.sequence);
    }), d = ht.hash256(o)), (i & 31) !== ae.SIGHASH_SINGLE && (i & 31) !== ae.SIGHASH_NONE) {
      const g = this.outs.reduce((m, h) => m + 8 + zt(h.script), 0);
      o = M.allocUnsafe(g), s = new He.BufferWriter(o, 0), this.outs.forEach((m) => {
        s.writeUInt64(m.value), s.writeVarSlice(m.script);
      }), c = ht.hash256(o);
    } else if ((i & 31) === ae.SIGHASH_SINGLE && t < this.outs.length) {
      const g = this.outs[t];
      o = M.allocUnsafe(8 + zt(g.script)), s = new He.BufferWriter(o, 0), s.writeUInt64(g.value), s.writeVarSlice(g.script), c = ht.hash256(o);
    }
    o = M.allocUnsafe(156 + zt(n)), s = new He.BufferWriter(o, 0);
    const a = this.ins[t];
    return s.writeInt32(this.version), s.writeSlice(u), s.writeSlice(d), s.writeSlice(a.hash), s.writeUInt32(a.index), s.writeVarSlice(n), s.writeUInt64(r), s.writeUInt32(a.sequence), s.writeSlice(c), s.writeUInt32(this.locktime), s.writeUInt32(i), ht.hash256(o);
  }
  getHash(t) {
    return t && this.isCoinbase() ? M.alloc(32, 0) : ht.hash256(this.__toBuffer(void 0, void 0, t));
  }
  getId() {
    return (0, He.reverseBuffer)(this.getHash(!1)).toString(
      "hex"
    );
  }
  toBuffer(t, n) {
    return this.__toBuffer(t, n, !0);
  }
  toHex() {
    return this.toBuffer(void 0, void 0).toString("hex");
  }
  setInputScript(t, n) {
    qt(pe.tuple(pe.Number, pe.Buffer), arguments), this.ins[t].script = n;
  }
  setWitness(t, n) {
    qt(pe.tuple(pe.Number, [pe.Buffer]), arguments), this.ins[t].witness = n;
  }
  __toBuffer(t, n, r = !1) {
    t || (t = M.allocUnsafe(this.byteLength(r)));
    const i = new He.BufferWriter(
      t,
      n || 0
    );
    i.writeInt32(this.version);
    const o = r && this.hasWitnesses();
    return o && (i.writeUInt8(ae.ADVANCED_TRANSACTION_MARKER), i.writeUInt8(ae.ADVANCED_TRANSACTION_FLAG)), i.writeVarInt(this.ins.length), this.ins.forEach((s) => {
      i.writeSlice(s.hash), i.writeUInt32(s.index), i.writeVarSlice(s.script), i.writeUInt32(s.sequence);
    }), i.writeVarInt(this.outs.length), this.outs.forEach((s) => {
      uw(s) ? i.writeUInt64(s.value) : i.writeSlice(s.valueBuffer), i.writeVarSlice(s.script);
    }), o && this.ins.forEach((s) => {
      i.writeVector(s.witness);
    }), i.writeUInt32(this.locktime), n !== void 0 ? t.slice(n, i.offset) : t;
  }
}
Gn.Transaction = ae;
ae.DEFAULT_SEQUENCE = 4294967295;
ae.SIGHASH_DEFAULT = 0;
ae.SIGHASH_ALL = 1;
ae.SIGHASH_NONE = 2;
ae.SIGHASH_SINGLE = 3;
ae.SIGHASH_ANYONECANPAY = 128;
ae.SIGHASH_OUTPUT_MASK = 3;
ae.SIGHASH_INPUT_MASK = 128;
ae.ADVANCED_TRANSACTION_MARKER = 0;
ae.ADVANCED_TRANSACTION_FLAG = 1;
Object.defineProperty(ns, "__esModule", { value: !0 });
ns.Block = void 0;
const Jn = Ve, Ms = an, aw = rs, lw = Gn, _f = it, { typeforce: fw } = _f, Ds = new TypeError(
  "Cannot compute merkle root for zero transactions"
), wa = new TypeError(
  "Cannot compute witness commit for non-segwit block"
);
class er {
  constructor() {
    this.version = 1, this.prevHash = void 0, this.merkleRoot = void 0, this.timestamp = 0, this.witnessCommit = void 0, this.bits = 0, this.nonce = 0, this.transactions = void 0;
  }
  static fromBuffer(t) {
    if (t.length < 80) throw new Error("Buffer too small (< 80 bytes)");
    const n = new Jn.BufferReader(t), r = new er();
    if (r.version = n.readInt32(), r.prevHash = n.readSlice(32), r.merkleRoot = n.readSlice(32), r.timestamp = n.readUInt32(), r.bits = n.readUInt32(), r.nonce = n.readUInt32(), t.length === 80) return r;
    const i = () => {
      const c = lw.Transaction.fromBuffer(
        n.buffer.slice(n.offset),
        !0
      );
      return n.offset += c.byteLength(), c;
    }, o = n.readVarInt();
    r.transactions = [];
    for (let c = 0; c < o; ++c) {
      const u = i();
      r.transactions.push(u);
    }
    const s = r.getWitnessCommit();
    return s && (r.witnessCommit = s), r;
  }
  static fromHex(t) {
    return er.fromBuffer(M.from(t, "hex"));
  }
  static calculateTarget(t) {
    const n = ((t & 4278190080) >> 24) - 3, r = t & 8388607, i = M.alloc(32, 0);
    return i.writeUIntBE(r, 29 - n, 3), i;
  }
  static calculateMerkleRoot(t, n) {
    if (fw([{ getHash: _f.Function }], t), t.length === 0) throw Ds;
    if (n && !ya(t))
      throw wa;
    const r = t.map(
      (o) => o.getHash(n)
    ), i = (0, aw.fastMerkleRoot)(r, Ms.hash256);
    return n ? Ms.hash256(
      M.concat([i, t[0].ins[0].witness[0]])
    ) : i;
  }
  getWitnessCommit() {
    if (!ya(this.transactions)) return null;
    const t = this.transactions[0].outs.filter(
      (r) => r.script.slice(0, 6).equals(M.from("6a24aa21a9ed", "hex"))
    ).map((r) => r.script.slice(6, 38));
    if (t.length === 0) return null;
    const n = t[t.length - 1];
    return n instanceof M && n.length === 32 ? n : null;
  }
  hasWitnessCommit() {
    return this.witnessCommit instanceof M && this.witnessCommit.length === 32 || this.getWitnessCommit() !== null;
  }
  hasWitness() {
    return dw(this.transactions);
  }
  weight() {
    const t = this.byteLength(!1, !1), n = this.byteLength(!1, !0);
    return t * 3 + n;
  }
  byteLength(t, n = !0) {
    return t || !this.transactions ? 80 : 80 + Jn.varuint.encodingLength(this.transactions.length) + this.transactions.reduce((r, i) => r + i.byteLength(n), 0);
  }
  getHash() {
    return Ms.hash256(this.toBuffer(!0));
  }
  getId() {
    return (0, Jn.reverseBuffer)(this.getHash()).toString("hex");
  }
  getUTCDate() {
    const t = /* @__PURE__ */ new Date(0);
    return t.setUTCSeconds(this.timestamp), t;
  }
  // TODO: buffer, offset compatibility
  toBuffer(t) {
    const n = M.allocUnsafe(this.byteLength(t)), r = new Jn.BufferWriter(n);
    return r.writeInt32(this.version), r.writeSlice(this.prevHash), r.writeSlice(this.merkleRoot), r.writeUInt32(this.timestamp), r.writeUInt32(this.bits), r.writeUInt32(this.nonce), t || !this.transactions || (Jn.varuint.encode(
      this.transactions.length,
      n,
      r.offset
    ), r.offset += Jn.varuint.encode.bytes, this.transactions.forEach((i) => {
      const o = i.byteLength();
      i.toBuffer(n, r.offset), r.offset += o;
    })), n;
  }
  toHex(t) {
    return this.toBuffer(t).toString("hex");
  }
  checkTxRoots() {
    const t = this.hasWitnessCommit();
    return !t && this.hasWitness() ? !1 : this.__checkMerkleRoot() && (t ? this.__checkWitnessCommit() : !0);
  }
  checkProofOfWork() {
    const t = (0, Jn.reverseBuffer)(this.getHash()), n = er.calculateTarget(this.bits);
    return t.compare(n) <= 0;
  }
  __checkMerkleRoot() {
    if (!this.transactions) throw Ds;
    const t = er.calculateMerkleRoot(this.transactions);
    return this.merkleRoot.compare(t) === 0;
  }
  __checkWitnessCommit() {
    if (!this.transactions) throw Ds;
    if (!this.hasWitnessCommit()) throw wa;
    const t = er.calculateMerkleRoot(
      this.transactions,
      !0
    );
    return this.witnessCommit.compare(t) === 0;
  }
}
ns.Block = er;
function ya(e) {
  return e instanceof Array && e[0] && e[0].ins && e[0].ins instanceof Array && e[0].ins[0] && e[0].ins[0].witness && e[0].ins[0].witness instanceof Array && e[0].ins[0].witness.length > 0;
}
function dw(e) {
  return e instanceof Array && e.some(
    (t) => typeof t == "object" && t.ins instanceof Array && t.ins.some(
      (n) => typeof n == "object" && n.witness instanceof Array && n.witness.length > 0
    )
  );
}
var is = {}, Qc = {}, Zc = {}, eu = {}, Ki = {}, dr = {}, Je = {};
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
})(Je);
var hr = {};
Object.defineProperty(hr, "__esModule", { value: !0 });
const If = Je, hw = (e) => [...Array(e).keys()];
function pw(e) {
  if (e.key[0] !== If.GlobalTypes.GLOBAL_XPUB)
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
  const t = e.key.slice(1), n = {
    masterFingerprint: e.value.slice(0, 4),
    extendedPubkey: t,
    path: "m"
  };
  for (const r of hw(e.value.length / 4 - 1)) {
    const i = e.value.readUInt32LE(r * 4 + 4), o = !!(i & 2147483648), s = i & 2147483647;
    n.path += "/" + s.toString(10) + (o ? "'" : "");
  }
  return n;
}
hr.decode = pw;
function gw(e) {
  const t = M.from([If.GlobalTypes.GLOBAL_XPUB]), n = M.concat([t, e.extendedPubkey]), r = e.path.split("/"), i = M.allocUnsafe(r.length * 4);
  e.masterFingerprint.copy(i, 0);
  let o = 4;
  return r.slice(1).forEach((s) => {
    const c = s.slice(-1) === "'";
    let u = 2147483647 & parseInt(c ? s.slice(0, -1) : s, 10);
    c && (u += 2147483648), i.writeUInt32LE(u, o), o += 4;
  }), {
    key: n,
    value: i
  };
}
hr.encode = gw;
hr.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }";
function mw(e) {
  const t = e.extendedPubkey, n = e.masterFingerprint, r = e.path;
  return M.isBuffer(t) && t.length === 78 && [2, 3].indexOf(t[45]) > -1 && M.isBuffer(n) && n.length === 4 && typeof r == "string" && !!r.match(/^m(\/\d+'?)*$/);
}
hr.check = mw;
function ww(e, t, n) {
  const r = t.extendedPubkey.toString("hex");
  return n.has(r) ? !1 : (n.add(r), e.filter((i) => i.extendedPubkey.equals(t.extendedPubkey)).length === 0);
}
hr.canAddToArray = ww;
var tu = {};
Object.defineProperty(tu, "__esModule", { value: !0 });
const yw = Je;
function Ew(e) {
  return {
    key: M.from([yw.GlobalTypes.UNSIGNED_TX]),
    value: e.toBuffer()
  };
}
tu.encode = Ew;
var pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
const xf = Je;
function vw(e) {
  if (e.key[0] !== xf.InputTypes.FINAL_SCRIPTSIG)
    throw new Error(
      "Decode Error: could not decode finalScriptSig with key 0x" + e.key.toString("hex")
    );
  return e.value;
}
pr.decode = vw;
function bw(e) {
  return {
    key: M.from([xf.InputTypes.FINAL_SCRIPTSIG]),
    value: e
  };
}
pr.encode = bw;
pr.expected = "Buffer";
function Sw(e) {
  return M.isBuffer(e);
}
pr.check = Sw;
function Tw(e, t) {
  return !!e && !!t && e.finalScriptSig === void 0;
}
pr.canAdd = Tw;
var gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
const Of = Je;
function _w(e) {
  if (e.key[0] !== Of.InputTypes.FINAL_SCRIPTWITNESS)
    throw new Error(
      "Decode Error: could not decode finalScriptWitness with key 0x" + e.key.toString("hex")
    );
  return e.value;
}
gr.decode = _w;
function Iw(e) {
  return {
    key: M.from([Of.InputTypes.FINAL_SCRIPTWITNESS]),
    value: e
  };
}
gr.encode = Iw;
gr.expected = "Buffer";
function xw(e) {
  return M.isBuffer(e);
}
gr.check = xw;
function Ow(e, t) {
  return !!e && !!t && e.finalScriptWitness === void 0;
}
gr.canAdd = Ow;
var mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
const Pf = Je;
function Pw(e) {
  if (e.key[0] !== Pf.InputTypes.NON_WITNESS_UTXO)
    throw new Error(
      "Decode Error: could not decode nonWitnessUtxo with key 0x" + e.key.toString("hex")
    );
  return e.value;
}
mr.decode = Pw;
function Aw(e) {
  return {
    key: M.from([Pf.InputTypes.NON_WITNESS_UTXO]),
    value: e
  };
}
mr.encode = Aw;
mr.expected = "Buffer";
function kw(e) {
  return M.isBuffer(e);
}
mr.check = kw;
function Cw(e, t) {
  return !!e && !!t && e.nonWitnessUtxo === void 0;
}
mr.canAdd = Cw;
var wr = {};
Object.defineProperty(wr, "__esModule", { value: !0 });
const Af = Je;
function Fw(e) {
  if (e.key[0] !== Af.InputTypes.PARTIAL_SIG)
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
wr.decode = Fw;
function Nw(e) {
  const t = M.from([Af.InputTypes.PARTIAL_SIG]);
  return {
    key: M.concat([t, e.pubkey]),
    value: e.signature
  };
}
wr.encode = Nw;
wr.expected = "{ pubkey: Buffer; signature: Buffer; }";
function Rw(e) {
  return M.isBuffer(e.pubkey) && M.isBuffer(e.signature) && [33, 65].includes(e.pubkey.length) && [2, 3, 4].includes(e.pubkey[0]) && Bw(e.signature);
}
wr.check = Rw;
function Bw(e) {
  if (!M.isBuffer(e) || e.length < 9 || e[0] !== 48 || e.length !== e[1] + 3 || e[2] !== 2) return !1;
  const t = e[3];
  if (t > 33 || t < 1 || e[3 + t + 1] !== 2) return !1;
  const n = e[3 + t + 2];
  return !(n > 33 || n < 1 || e.length !== 3 + t + 2 + n + 2);
}
function Lw(e, t, n) {
  const r = t.pubkey.toString("hex");
  return n.has(r) ? !1 : (n.add(r), e.filter((i) => i.pubkey.equals(t.pubkey)).length === 0);
}
wr.canAddToArray = Lw;
var yr = {};
Object.defineProperty(yr, "__esModule", { value: !0 });
const kf = Je;
function Uw(e) {
  if (e.key[0] !== kf.InputTypes.POR_COMMITMENT)
    throw new Error(
      "Decode Error: could not decode porCommitment with key 0x" + e.key.toString("hex")
    );
  return e.value.toString("utf8");
}
yr.decode = Uw;
function $w(e) {
  return {
    key: M.from([kf.InputTypes.POR_COMMITMENT]),
    value: M.from(e, "utf8")
  };
}
yr.encode = $w;
yr.expected = "string";
function Hw(e) {
  return typeof e == "string";
}
yr.check = Hw;
function Mw(e, t) {
  return !!e && !!t && e.porCommitment === void 0;
}
yr.canAdd = Mw;
var Er = {};
Object.defineProperty(Er, "__esModule", { value: !0 });
const Cf = Je;
function Dw(e) {
  if (e.key[0] !== Cf.InputTypes.SIGHASH_TYPE)
    throw new Error(
      "Decode Error: could not decode sighashType with key 0x" + e.key.toString("hex")
    );
  return e.value.readUInt32LE(0);
}
Er.decode = Dw;
function jw(e) {
  const t = M.from([Cf.InputTypes.SIGHASH_TYPE]), n = M.allocUnsafe(4);
  return n.writeUInt32LE(e, 0), {
    key: t,
    value: n
  };
}
Er.encode = jw;
Er.expected = "number";
function Ww(e) {
  return typeof e == "number";
}
Er.check = Ww;
function Kw(e, t) {
  return !!e && !!t && e.sighashType === void 0;
}
Er.canAdd = Kw;
var vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
const Ff = Je;
function Vw(e) {
  if (e.key[0] !== Ff.InputTypes.TAP_KEY_SIG || e.key.length !== 1)
    throw new Error(
      "Decode Error: could not decode tapKeySig with key 0x" + e.key.toString("hex")
    );
  if (!Nf(e.value))
    throw new Error(
      "Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature"
    );
  return e.value;
}
vr.decode = Vw;
function Gw(e) {
  return { key: M.from([Ff.InputTypes.TAP_KEY_SIG]), value: e };
}
vr.encode = Gw;
vr.expected = "Buffer";
function Nf(e) {
  return M.isBuffer(e) && (e.length === 64 || e.length === 65);
}
vr.check = Nf;
function qw(e, t) {
  return !!e && !!t && e.tapKeySig === void 0;
}
vr.canAdd = qw;
var br = {};
Object.defineProperty(br, "__esModule", { value: !0 });
const Rf = Je;
function Xw(e) {
  if (e.key[0] !== Rf.InputTypes.TAP_LEAF_SCRIPT)
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
  const n = e.value.slice(0, -1);
  return { controlBlock: e.key.slice(1), script: n, leafVersion: t };
}
br.decode = Xw;
function zw(e) {
  const t = M.from([Rf.InputTypes.TAP_LEAF_SCRIPT]), n = M.from([e.leafVersion]);
  return {
    key: M.concat([t, e.controlBlock]),
    value: M.concat([e.script, n])
  };
}
br.encode = zw;
br.expected = "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }";
function Yw(e) {
  return M.isBuffer(e.controlBlock) && (e.controlBlock.length - 1) % 32 === 0 && (e.controlBlock[0] & 254) === e.leafVersion && M.isBuffer(e.script);
}
br.check = Yw;
function Jw(e, t, n) {
  const r = t.controlBlock.toString("hex");
  return n.has(r) ? !1 : (n.add(r), e.filter((i) => i.controlBlock.equals(t.controlBlock)).length === 0);
}
br.canAddToArray = Jw;
var Sr = {};
Object.defineProperty(Sr, "__esModule", { value: !0 });
const Bf = Je;
function Qw(e) {
  if (e.key[0] !== Bf.InputTypes.TAP_MERKLE_ROOT || e.key.length !== 1)
    throw new Error(
      "Decode Error: could not decode tapMerkleRoot with key 0x" + e.key.toString("hex")
    );
  if (!Lf(e.value))
    throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
  return e.value;
}
Sr.decode = Qw;
function Zw(e) {
  return { key: M.from([Bf.InputTypes.TAP_MERKLE_ROOT]), value: e };
}
Sr.encode = Zw;
Sr.expected = "Buffer";
function Lf(e) {
  return M.isBuffer(e) && e.length === 32;
}
Sr.check = Lf;
function ey(e, t) {
  return !!e && !!t && e.tapMerkleRoot === void 0;
}
Sr.canAdd = ey;
var Tr = {};
Object.defineProperty(Tr, "__esModule", { value: !0 });
const Uf = Je;
function ty(e) {
  if (e.key[0] !== Uf.InputTypes.TAP_SCRIPT_SIG)
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
  const t = e.key.slice(1, 33), n = e.key.slice(33);
  return {
    pubkey: t,
    leafHash: n,
    signature: e.value
  };
}
Tr.decode = ty;
function ny(e) {
  const t = M.from([Uf.InputTypes.TAP_SCRIPT_SIG]);
  return {
    key: M.concat([t, e.pubkey, e.leafHash]),
    value: e.signature
  };
}
Tr.encode = ny;
Tr.expected = "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }";
function ry(e) {
  return M.isBuffer(e.pubkey) && M.isBuffer(e.leafHash) && M.isBuffer(e.signature) && e.pubkey.length === 32 && e.leafHash.length === 32 && (e.signature.length === 64 || e.signature.length === 65);
}
Tr.check = ry;
function iy(e, t, n) {
  const r = t.pubkey.toString("hex") + t.leafHash.toString("hex");
  return n.has(r) ? !1 : (n.add(r), e.filter(
    (i) => i.pubkey.equals(t.pubkey) && i.leafHash.equals(t.leafHash)
  ).length === 0);
}
Tr.canAddToArray = iy;
var _r = {}, ln = {}, Wt = {};
Object.defineProperty(Wt, "__esModule", { value: !0 });
const oy = 9007199254740991;
function nu(e) {
  if (e < 0 || e > oy || e % 1 !== 0)
    throw new RangeError("value out of range");
}
function Si(e, t, n) {
  if (nu(e), t || (t = M.allocUnsafe($f(e))), !M.isBuffer(t))
    throw new TypeError("buffer must be a Buffer instance");
  return n || (n = 0), e < 253 ? (t.writeUInt8(e, n), Object.assign(Si, { bytes: 1 })) : e <= 65535 ? (t.writeUInt8(253, n), t.writeUInt16LE(e, n + 1), Object.assign(Si, { bytes: 3 })) : e <= 4294967295 ? (t.writeUInt8(254, n), t.writeUInt32LE(e, n + 1), Object.assign(Si, { bytes: 5 })) : (t.writeUInt8(255, n), t.writeUInt32LE(e >>> 0, n + 1), t.writeUInt32LE(e / 4294967296 | 0, n + 5), Object.assign(Si, { bytes: 9 })), t;
}
Wt.encode = Si;
function Ti(e, t) {
  if (!M.isBuffer(e))
    throw new TypeError("buffer must be a Buffer instance");
  t || (t = 0);
  const n = e.readUInt8(t);
  if (n < 253)
    return Object.assign(Ti, { bytes: 1 }), n;
  if (n === 253)
    return Object.assign(Ti, { bytes: 3 }), e.readUInt16LE(t + 1);
  if (n === 254)
    return Object.assign(Ti, { bytes: 5 }), e.readUInt32LE(t + 1);
  {
    Object.assign(Ti, { bytes: 9 });
    const r = e.readUInt32LE(t + 1), o = e.readUInt32LE(t + 5) * 4294967296 + r;
    return nu(o), o;
  }
}
Wt.decode = Ti;
function $f(e) {
  return nu(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9;
}
Wt.encodingLength = $f;
Object.defineProperty(ln, "__esModule", { value: !0 });
const io = Wt;
ln.range = (e) => [...Array(e).keys()];
function sy(e) {
  if (e.length < 1) return e;
  let t = e.length - 1, n = 0;
  for (let r = 0; r < e.length / 2; r++)
    n = e[r], e[r] = e[t], e[t] = n, t--;
  return e;
}
ln.reverseBuffer = sy;
function cy(e) {
  const t = e.map(Hf);
  return t.push(M.from([0])), M.concat(t);
}
ln.keyValsToBuffer = cy;
function Hf(e) {
  const t = e.key.length, n = e.value.length, r = io.encodingLength(t), i = io.encodingLength(n), o = M.allocUnsafe(
    r + t + i + n
  );
  return io.encode(t, o, 0), e.key.copy(o, r), io.encode(n, o, r + t), e.value.copy(o, r + t + i), o;
}
ln.keyValToBuffer = Hf;
function Mf(e, t) {
  if (typeof e != "number")
    throw new Error("cannot write a non-number as a number");
  if (e < 0)
    throw new Error("specified a negative value for writing an unsigned value");
  if (e > t) throw new Error("RangeError: value out of range");
  if (Math.floor(e) !== e)
    throw new Error("value has a fractional component");
}
function uy(e, t) {
  const n = e.readUInt32LE(t);
  let r = e.readUInt32LE(t + 4);
  return r *= 4294967296, Mf(r + n, 9007199254740991), r + n;
}
ln.readUInt64LE = uy;
function ay(e, t, n) {
  return Mf(t, 9007199254740991), e.writeInt32LE(t & -1, n), e.writeUInt32LE(Math.floor(t / 4294967296), n + 4), n + 8;
}
ln.writeUInt64LE = ay;
Object.defineProperty(_r, "__esModule", { value: !0 });
const Df = Je, jf = ln, Po = Wt;
function ly(e) {
  if (e.key[0] !== Df.InputTypes.WITNESS_UTXO)
    throw new Error(
      "Decode Error: could not decode witnessUtxo with key 0x" + e.key.toString("hex")
    );
  const t = jf.readUInt64LE(e.value, 0);
  let n = 8;
  const r = Po.decode(e.value, n);
  n += Po.encodingLength(r);
  const i = e.value.slice(n);
  if (i.length !== r)
    throw new Error("Decode Error: WITNESS_UTXO script is not proper length");
  return {
    script: i,
    value: t
  };
}
_r.decode = ly;
function fy(e) {
  const { script: t, value: n } = e, r = Po.encodingLength(t.length), i = M.allocUnsafe(8 + r + t.length);
  return jf.writeUInt64LE(i, n, 0), Po.encode(t.length, i, 8), t.copy(i, 8 + r), {
    key: M.from([Df.InputTypes.WITNESS_UTXO]),
    value: i
  };
}
_r.encode = fy;
_r.expected = "{ script: Buffer; value: number; }";
function dy(e) {
  return M.isBuffer(e.script) && typeof e.value == "number";
}
_r.check = dy;
function hy(e, t) {
  return !!e && !!t && e.witnessUtxo === void 0;
}
_r.canAdd = hy;
var Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
const Wf = Je, mc = Wt;
function py(e) {
  if (e.key[0] !== Wf.OutputTypes.TAP_TREE || e.key.length !== 1)
    throw new Error(
      "Decode Error: could not decode tapTree with key 0x" + e.key.toString("hex")
    );
  let t = 0;
  const n = [];
  for (; t < e.value.length; ) {
    const r = e.value[t++], i = e.value[t++], o = mc.decode(e.value, t);
    t += mc.encodingLength(o), n.push({
      depth: r,
      leafVersion: i,
      script: e.value.slice(t, t + o)
    }), t += o;
  }
  return { leaves: n };
}
Ir.decode = py;
function gy(e) {
  const t = M.from([Wf.OutputTypes.TAP_TREE]), n = [].concat(
    ...e.leaves.map((r) => [
      M.of(r.depth, r.leafVersion),
      mc.encode(r.script.length),
      r.script
    ])
  );
  return {
    key: t,
    value: M.concat(n)
  };
}
Ir.encode = gy;
Ir.expected = "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }";
function my(e) {
  return Array.isArray(e.leaves) && e.leaves.every(
    (t) => t.depth >= 0 && t.depth <= 128 && (t.leafVersion & 254) === t.leafVersion && M.isBuffer(t.script)
  );
}
Ir.check = my;
function wy(e, t) {
  return !!e && !!t && e.tapTree === void 0;
}
Ir.canAdd = wy;
var os = {};
Object.defineProperty(os, "__esModule", { value: !0 });
const yy = (e) => [...Array(e).keys()], Ey = (e) => e.length === 33 && [2, 3].includes(e[0]) || e.length === 65 && e[0] === 4;
function vy(e, t = Ey) {
  function n(c) {
    if (c.key[0] !== e)
      throw new Error(
        "Decode Error: could not decode bip32Derivation with key 0x" + c.key.toString("hex")
      );
    const u = c.key.slice(1);
    if (!t(u))
      throw new Error(
        "Decode Error: bip32Derivation has invalid pubkey in key 0x" + c.key.toString("hex")
      );
    if (c.value.length / 4 % 1 !== 0)
      throw new Error(
        "Decode Error: Input BIP32_DERIVATION value length should be multiple of 4"
      );
    const d = {
      masterFingerprint: c.value.slice(0, 4),
      pubkey: u,
      path: "m"
    };
    for (const a of yy(c.value.length / 4 - 1)) {
      const g = c.value.readUInt32LE(a * 4 + 4), m = !!(g & 2147483648), h = g & 2147483647;
      d.path += "/" + h.toString(10) + (m ? "'" : "");
    }
    return d;
  }
  function r(c) {
    const u = M.from([e]), d = M.concat([u, c.pubkey]), a = c.path.split("/"), g = M.allocUnsafe(a.length * 4);
    c.masterFingerprint.copy(g, 0);
    let m = 4;
    return a.slice(1).forEach((h) => {
      const S = h.slice(-1) === "'";
      let _ = 2147483647 & parseInt(S ? h.slice(0, -1) : h, 10);
      S && (_ += 2147483648), g.writeUInt32LE(_, m), m += 4;
    }), {
      key: d,
      value: g
    };
  }
  const i = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
  function o(c) {
    return M.isBuffer(c.pubkey) && M.isBuffer(c.masterFingerprint) && typeof c.path == "string" && t(c.pubkey) && c.masterFingerprint.length === 4;
  }
  function s(c, u, d) {
    const a = u.pubkey.toString("hex");
    return d.has(a) ? !1 : (d.add(a), c.filter((g) => g.pubkey.equals(u.pubkey)).length === 0);
  }
  return {
    decode: n,
    encode: r,
    check: o,
    expected: i,
    canAddToArray: s
  };
}
os.makeConverter = vy;
var ru = {};
Object.defineProperty(ru, "__esModule", { value: !0 });
function by(e) {
  return t;
  function t(n) {
    let r;
    if (e.includes(n.key[0]) && (r = n.key.slice(1), !(r.length === 33 || r.length === 65) || ![2, 3, 4].includes(r[0])))
      throw new Error(
        "Format Error: invalid pubkey in key 0x" + n.key.toString("hex")
      );
    return r;
  }
}
ru.makeChecker = by;
var iu = {};
Object.defineProperty(iu, "__esModule", { value: !0 });
function Sy(e) {
  function t(s) {
    if (s.key[0] !== e)
      throw new Error(
        "Decode Error: could not decode redeemScript with key 0x" + s.key.toString("hex")
      );
    return s.value;
  }
  function n(s) {
    return {
      key: M.from([e]),
      value: s
    };
  }
  const r = "Buffer";
  function i(s) {
    return M.isBuffer(s);
  }
  function o(s, c) {
    return !!s && !!c && s.redeemScript === void 0;
  }
  return {
    decode: t,
    encode: n,
    check: i,
    expected: r,
    canAdd: o
  };
}
iu.makeConverter = Sy;
var ou = {};
Object.defineProperty(ou, "__esModule", { value: !0 });
const oo = Wt, Ty = os, _y = (e) => e.length === 32;
function Iy(e) {
  const t = Ty.makeConverter(e, _y);
  function n(s) {
    const c = oo.decode(s.value), u = oo.encodingLength(c), d = t.decode({
      key: s.key,
      value: s.value.slice(u + c * 32)
    }), a = new Array(c);
    for (let g = 0, m = u; g < c; g++, m += 32)
      a[g] = s.value.slice(m, m + 32);
    return Object.assign({}, d, { leafHashes: a });
  }
  function r(s) {
    const c = t.encode(s), u = oo.encodingLength(s.leafHashes.length), d = M.allocUnsafe(u);
    oo.encode(s.leafHashes.length, d);
    const a = M.concat([d, ...s.leafHashes, c.value]);
    return Object.assign({}, c, { value: a });
  }
  const i = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
  function o(s) {
    return Array.isArray(s.leafHashes) && s.leafHashes.every(
      (c) => M.isBuffer(c) && c.length === 32
    ) && t.check(s);
  }
  return {
    decode: n,
    encode: r,
    check: o,
    expected: i,
    canAddToArray: t.canAddToArray
  };
}
ou.makeConverter = Iy;
var su = {};
Object.defineProperty(su, "__esModule", { value: !0 });
function xy(e) {
  function t(s) {
    if (s.key[0] !== e || s.key.length !== 1)
      throw new Error(
        "Decode Error: could not decode tapInternalKey with key 0x" + s.key.toString("hex")
      );
    if (s.value.length !== 32)
      throw new Error(
        "Decode Error: tapInternalKey not a 32-byte x-only pubkey"
      );
    return s.value;
  }
  function n(s) {
    return { key: M.from([e]), value: s };
  }
  const r = "Buffer";
  function i(s) {
    return M.isBuffer(s) && s.length === 32;
  }
  function o(s, c) {
    return !!s && !!c && s.tapInternalKey === void 0;
  }
  return {
    decode: t,
    encode: n,
    check: i,
    expected: r,
    canAdd: o
  };
}
su.makeConverter = xy;
var cu = {};
Object.defineProperty(cu, "__esModule", { value: !0 });
function Oy(e) {
  function t(s) {
    if (s.key[0] !== e)
      throw new Error(
        "Decode Error: could not decode witnessScript with key 0x" + s.key.toString("hex")
      );
    return s.value;
  }
  function n(s) {
    return {
      key: M.from([e]),
      value: s
    };
  }
  const r = "Buffer";
  function i(s) {
    return M.isBuffer(s);
  }
  function o(s, c) {
    return !!s && !!c && s.witnessScript === void 0;
  }
  return {
    decode: t,
    encode: n,
    check: i,
    expected: r,
    canAdd: o
  };
}
cu.makeConverter = Oy;
Object.defineProperty(dr, "__esModule", { value: !0 });
const St = Je, Py = hr, Ay = tu, ky = pr, Cy = gr, Fy = mr, Ny = wr, Ry = yr, By = Er, Ly = vr, Uy = br, $y = Sr, Hy = Tr, My = _r, Dy = Ir, Kf = os, uu = ru, Vf = iu, Gf = ou, qf = su, Xf = cu, jy = {
  unsignedTx: Ay,
  globalXpub: Py,
  // pass an Array of key bytes that require pubkey beside the key
  checkPubkey: uu.makeChecker([])
};
dr.globals = jy;
const Wy = {
  nonWitnessUtxo: Fy,
  partialSig: Ny,
  sighashType: By,
  finalScriptSig: ky,
  finalScriptWitness: Cy,
  porCommitment: Ry,
  witnessUtxo: My,
  bip32Derivation: Kf.makeConverter(
    St.InputTypes.BIP32_DERIVATION
  ),
  redeemScript: Vf.makeConverter(
    St.InputTypes.REDEEM_SCRIPT
  ),
  witnessScript: Xf.makeConverter(
    St.InputTypes.WITNESS_SCRIPT
  ),
  checkPubkey: uu.makeChecker([
    St.InputTypes.PARTIAL_SIG,
    St.InputTypes.BIP32_DERIVATION
  ]),
  tapKeySig: Ly,
  tapScriptSig: Hy,
  tapLeafScript: Uy,
  tapBip32Derivation: Gf.makeConverter(
    St.InputTypes.TAP_BIP32_DERIVATION
  ),
  tapInternalKey: qf.makeConverter(
    St.InputTypes.TAP_INTERNAL_KEY
  ),
  tapMerkleRoot: $y
};
dr.inputs = Wy;
const Ky = {
  bip32Derivation: Kf.makeConverter(
    St.OutputTypes.BIP32_DERIVATION
  ),
  redeemScript: Vf.makeConverter(
    St.OutputTypes.REDEEM_SCRIPT
  ),
  witnessScript: Xf.makeConverter(
    St.OutputTypes.WITNESS_SCRIPT
  ),
  checkPubkey: uu.makeChecker([
    St.OutputTypes.BIP32_DERIVATION
  ]),
  tapBip32Derivation: Gf.makeConverter(
    St.OutputTypes.TAP_BIP32_DERIVATION
  ),
  tapTree: Dy,
  tapInternalKey: qf.makeConverter(
    St.OutputTypes.TAP_INTERNAL_KEY
  )
};
dr.outputs = Ky;
Object.defineProperty(Ki, "__esModule", { value: !0 });
const Oe = dr, Ao = ln, Ea = Wt, se = Je;
function Vy(e, t) {
  let n = 0;
  function r() {
    const A = Ea.decode(e, n);
    n += Ea.encodingLength(A);
    const L = e.slice(n, n + A);
    return n += A, L;
  }
  function i() {
    const A = e.readUInt32BE(n);
    return n += 4, A;
  }
  function o() {
    const A = e.readUInt8(n);
    return n += 1, A;
  }
  function s() {
    const A = r(), L = r();
    return {
      key: A,
      value: L
    };
  }
  function c() {
    if (n >= e.length)
      throw new Error("Format Error: Unexpected End of PSBT");
    const A = e.readUInt8(n) === 0;
    return A && n++, A;
  }
  if (i() !== 1886610036)
    throw new Error("Format Error: Invalid Magic Number");
  if (o() !== 255)
    throw new Error(
      "Format Error: Magic Number must be followed by 0xff separator"
    );
  const u = [], d = {};
  for (; !c(); ) {
    const A = s(), L = A.key.toString("hex");
    if (d[L])
      throw new Error(
        "Format Error: Keys must be unique for global keymap: key " + L
      );
    d[L] = 1, u.push(A);
  }
  const a = u.filter(
    (A) => A.key[0] === se.GlobalTypes.UNSIGNED_TX
  );
  if (a.length !== 1)
    throw new Error("Format Error: Only one UNSIGNED_TX allowed");
  const g = t(a[0].value), { inputCount: m, outputCount: h } = g.getInputOutputCounts(), S = [], _ = [];
  for (const A of Ao.range(m)) {
    const L = {}, v = [];
    for (; !c(); ) {
      const I = s(), O = I.key.toString("hex");
      if (L[O])
        throw new Error(
          "Format Error: Keys must be unique for each input: input index " + A + " key " + O
        );
      L[O] = 1, v.push(I);
    }
    S.push(v);
  }
  for (const A of Ao.range(h)) {
    const L = {}, v = [];
    for (; !c(); ) {
      const I = s(), O = I.key.toString("hex");
      if (L[O])
        throw new Error(
          "Format Error: Keys must be unique for each output: output index " + A + " key " + O
        );
      L[O] = 1, v.push(I);
    }
    _.push(v);
  }
  return zf(g, {
    globalMapKeyVals: u,
    inputKeyVals: S,
    outputKeyVals: _
  });
}
Ki.psbtFromBuffer = Vy;
function tt(e, t, n) {
  if (!t.equals(M.from([n])))
    throw new Error(
      `Format Error: Invalid ${e} key: ${t.toString("hex")}`
    );
}
Ki.checkKeyBuffer = tt;
function zf(e, { globalMapKeyVals: t, inputKeyVals: n, outputKeyVals: r }) {
  const i = {
    unsignedTx: e
  };
  let o = 0;
  for (const a of t)
    switch (a.key[0]) {
      case se.GlobalTypes.UNSIGNED_TX:
        if (tt(
          "global",
          a.key,
          se.GlobalTypes.UNSIGNED_TX
        ), o > 0)
          throw new Error("Format Error: GlobalMap has multiple UNSIGNED_TX");
        o++;
        break;
      case se.GlobalTypes.GLOBAL_XPUB:
        i.globalXpub === void 0 && (i.globalXpub = []), i.globalXpub.push(Oe.globals.globalXpub.decode(a));
        break;
      default:
        i.unknownKeyVals || (i.unknownKeyVals = []), i.unknownKeyVals.push(a);
    }
  const s = n.length, c = r.length, u = [], d = [];
  for (const a of Ao.range(s)) {
    const g = {};
    for (const m of n[a])
      switch (Oe.inputs.checkPubkey(m), m.key[0]) {
        case se.InputTypes.NON_WITNESS_UTXO:
          if (tt(
            "input",
            m.key,
            se.InputTypes.NON_WITNESS_UTXO
          ), g.nonWitnessUtxo !== void 0)
            throw new Error(
              "Format Error: Input has multiple NON_WITNESS_UTXO"
            );
          g.nonWitnessUtxo = Oe.inputs.nonWitnessUtxo.decode(m);
          break;
        case se.InputTypes.WITNESS_UTXO:
          if (tt(
            "input",
            m.key,
            se.InputTypes.WITNESS_UTXO
          ), g.witnessUtxo !== void 0)
            throw new Error("Format Error: Input has multiple WITNESS_UTXO");
          g.witnessUtxo = Oe.inputs.witnessUtxo.decode(m);
          break;
        case se.InputTypes.PARTIAL_SIG:
          g.partialSig === void 0 && (g.partialSig = []), g.partialSig.push(Oe.inputs.partialSig.decode(m));
          break;
        case se.InputTypes.SIGHASH_TYPE:
          if (tt(
            "input",
            m.key,
            se.InputTypes.SIGHASH_TYPE
          ), g.sighashType !== void 0)
            throw new Error("Format Error: Input has multiple SIGHASH_TYPE");
          g.sighashType = Oe.inputs.sighashType.decode(m);
          break;
        case se.InputTypes.REDEEM_SCRIPT:
          if (tt(
            "input",
            m.key,
            se.InputTypes.REDEEM_SCRIPT
          ), g.redeemScript !== void 0)
            throw new Error("Format Error: Input has multiple REDEEM_SCRIPT");
          g.redeemScript = Oe.inputs.redeemScript.decode(m);
          break;
        case se.InputTypes.WITNESS_SCRIPT:
          if (tt(
            "input",
            m.key,
            se.InputTypes.WITNESS_SCRIPT
          ), g.witnessScript !== void 0)
            throw new Error("Format Error: Input has multiple WITNESS_SCRIPT");
          g.witnessScript = Oe.inputs.witnessScript.decode(m);
          break;
        case se.InputTypes.BIP32_DERIVATION:
          g.bip32Derivation === void 0 && (g.bip32Derivation = []), g.bip32Derivation.push(
            Oe.inputs.bip32Derivation.decode(m)
          );
          break;
        case se.InputTypes.FINAL_SCRIPTSIG:
          tt(
            "input",
            m.key,
            se.InputTypes.FINAL_SCRIPTSIG
          ), g.finalScriptSig = Oe.inputs.finalScriptSig.decode(m);
          break;
        case se.InputTypes.FINAL_SCRIPTWITNESS:
          tt(
            "input",
            m.key,
            se.InputTypes.FINAL_SCRIPTWITNESS
          ), g.finalScriptWitness = Oe.inputs.finalScriptWitness.decode(
            m
          );
          break;
        case se.InputTypes.POR_COMMITMENT:
          tt(
            "input",
            m.key,
            se.InputTypes.POR_COMMITMENT
          ), g.porCommitment = Oe.inputs.porCommitment.decode(m);
          break;
        case se.InputTypes.TAP_KEY_SIG:
          tt(
            "input",
            m.key,
            se.InputTypes.TAP_KEY_SIG
          ), g.tapKeySig = Oe.inputs.tapKeySig.decode(m);
          break;
        case se.InputTypes.TAP_SCRIPT_SIG:
          g.tapScriptSig === void 0 && (g.tapScriptSig = []), g.tapScriptSig.push(Oe.inputs.tapScriptSig.decode(m));
          break;
        case se.InputTypes.TAP_LEAF_SCRIPT:
          g.tapLeafScript === void 0 && (g.tapLeafScript = []), g.tapLeafScript.push(Oe.inputs.tapLeafScript.decode(m));
          break;
        case se.InputTypes.TAP_BIP32_DERIVATION:
          g.tapBip32Derivation === void 0 && (g.tapBip32Derivation = []), g.tapBip32Derivation.push(
            Oe.inputs.tapBip32Derivation.decode(m)
          );
          break;
        case se.InputTypes.TAP_INTERNAL_KEY:
          tt(
            "input",
            m.key,
            se.InputTypes.TAP_INTERNAL_KEY
          ), g.tapInternalKey = Oe.inputs.tapInternalKey.decode(m);
          break;
        case se.InputTypes.TAP_MERKLE_ROOT:
          tt(
            "input",
            m.key,
            se.InputTypes.TAP_MERKLE_ROOT
          ), g.tapMerkleRoot = Oe.inputs.tapMerkleRoot.decode(m);
          break;
        default:
          g.unknownKeyVals || (g.unknownKeyVals = []), g.unknownKeyVals.push(m);
      }
    u.push(g);
  }
  for (const a of Ao.range(c)) {
    const g = {};
    for (const m of r[a])
      switch (Oe.outputs.checkPubkey(m), m.key[0]) {
        case se.OutputTypes.REDEEM_SCRIPT:
          if (tt(
            "output",
            m.key,
            se.OutputTypes.REDEEM_SCRIPT
          ), g.redeemScript !== void 0)
            throw new Error("Format Error: Output has multiple REDEEM_SCRIPT");
          g.redeemScript = Oe.outputs.redeemScript.decode(m);
          break;
        case se.OutputTypes.WITNESS_SCRIPT:
          if (tt(
            "output",
            m.key,
            se.OutputTypes.WITNESS_SCRIPT
          ), g.witnessScript !== void 0)
            throw new Error("Format Error: Output has multiple WITNESS_SCRIPT");
          g.witnessScript = Oe.outputs.witnessScript.decode(m);
          break;
        case se.OutputTypes.BIP32_DERIVATION:
          g.bip32Derivation === void 0 && (g.bip32Derivation = []), g.bip32Derivation.push(
            Oe.outputs.bip32Derivation.decode(m)
          );
          break;
        case se.OutputTypes.TAP_INTERNAL_KEY:
          tt(
            "output",
            m.key,
            se.OutputTypes.TAP_INTERNAL_KEY
          ), g.tapInternalKey = Oe.outputs.tapInternalKey.decode(m);
          break;
        case se.OutputTypes.TAP_TREE:
          tt(
            "output",
            m.key,
            se.OutputTypes.TAP_TREE
          ), g.tapTree = Oe.outputs.tapTree.decode(m);
          break;
        case se.OutputTypes.TAP_BIP32_DERIVATION:
          g.tapBip32Derivation === void 0 && (g.tapBip32Derivation = []), g.tapBip32Derivation.push(
            Oe.outputs.tapBip32Derivation.decode(m)
          );
          break;
        default:
          g.unknownKeyVals || (g.unknownKeyVals = []), g.unknownKeyVals.push(m);
      }
    d.push(g);
  }
  return { globalMap: i, inputs: u, outputs: d };
}
Ki.psbtFromKeyVals = zf;
var ss = {};
Object.defineProperty(ss, "__esModule", { value: !0 });
const js = dr, va = ln;
function Gy({ globalMap: e, inputs: t, outputs: n }) {
  const { globalKeyVals: r, inputKeyVals: i, outputKeyVals: o } = Yf({
    globalMap: e,
    inputs: t,
    outputs: n
  }), s = va.keyValsToBuffer(r), c = (g) => g.length === 0 ? [M.from([0])] : g.map(va.keyValsToBuffer), u = c(i), d = c(o), a = M.allocUnsafe(5);
  return a.writeUIntBE(482972169471, 0, 5), M.concat(
    [a, s].concat(u, d)
  );
}
ss.psbtToBuffer = Gy;
const qy = (e, t) => e.key.compare(t.key);
function Ws(e, t) {
  const n = /* @__PURE__ */ new Set(), r = Object.entries(e).reduce((o, [s, c]) => {
    if (s === "unknownKeyVals") return o;
    const u = t[s];
    if (u === void 0) return o;
    const d = (Array.isArray(c) ? c : [c]).map(
      u.encode
    );
    return d.map((g) => g.key.toString("hex")).forEach((g) => {
      if (n.has(g))
        throw new Error("Serialize Error: Duplicate key: " + g);
      n.add(g);
    }), o.concat(d);
  }, []), i = e.unknownKeyVals ? e.unknownKeyVals.filter((o) => !n.has(o.key.toString("hex"))) : [];
  return r.concat(i).sort(qy);
}
function Yf({ globalMap: e, inputs: t, outputs: n }) {
  return {
    globalKeyVals: Ws(e, js.globals),
    inputKeyVals: t.map((r) => Ws(r, js.inputs)),
    outputKeyVals: n.map((r) => Ws(r, js.outputs))
  };
}
ss.psbtToKeyVals = Yf;
(function(e) {
  function t(n) {
    for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Ki), t(ss);
})(eu);
Object.defineProperty(Zc, "__esModule", { value: !0 });
const Ks = eu;
function Xy(e) {
  const t = e[0], n = Ks.psbtToKeyVals(t), r = e.slice(1);
  if (r.length === 0) throw new Error("Combine: Nothing to combine");
  const i = ba(t);
  if (i === void 0)
    throw new Error("Combine: Self missing transaction");
  const o = Lr(n.globalKeyVals), s = n.inputKeyVals.map(Lr), c = n.outputKeyVals.map(Lr);
  for (const u of r) {
    const d = ba(u);
    if (d === void 0 || !d.toBuffer().equals(i.toBuffer()))
      throw new Error(
        "Combine: One of the Psbts does not have the same transaction."
      );
    const a = Ks.psbtToKeyVals(u);
    Lr(a.globalKeyVals).forEach(
      Vs(
        o,
        n.globalKeyVals,
        a.globalKeyVals
      )
    ), a.inputKeyVals.map(Lr).forEach(
      (S, _) => S.forEach(
        Vs(
          s[_],
          n.inputKeyVals[_],
          a.inputKeyVals[_]
        )
      )
    ), a.outputKeyVals.map(Lr).forEach(
      (S, _) => S.forEach(
        Vs(
          c[_],
          n.outputKeyVals[_],
          a.outputKeyVals[_]
        )
      )
    );
  }
  return Ks.psbtFromKeyVals(i, {
    globalMapKeyVals: n.globalKeyVals,
    inputKeyVals: n.inputKeyVals,
    outputKeyVals: n.outputKeyVals
  });
}
Zc.combine = Xy;
function Vs(e, t, n) {
  return (r) => {
    if (e.has(r)) return;
    const i = n.filter((o) => o.key.toString("hex") === r)[0];
    t.push(i), e.add(r);
  };
}
function ba(e) {
  return e.globalMap.unsignedTx;
}
function Lr(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const r = n.key.toString("hex");
    if (t.has(r))
      throw new Error("Combine: KeyValue Map keys should be unique");
    t.add(r);
  }), t;
}
var au = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = dr;
  function n(h, S) {
    const _ = h[S];
    if (_ === void 0) throw new Error(`No input #${S}`);
    return _;
  }
  e.checkForInput = n;
  function r(h, S) {
    const _ = h[S];
    if (_ === void 0) throw new Error(`No output #${S}`);
    return _;
  }
  e.checkForOutput = r;
  function i(h, S, _) {
    if (h.key[0] < _)
      throw new Error(
        "Use the method for your specific key instead of addUnknownKeyVal*"
      );
    if (S && S.filter((A) => A.key.equals(h.key)).length !== 0)
      throw new Error(`Duplicate Key: ${h.key.toString("hex")}`);
  }
  e.checkHasKey = i;
  function o(h) {
    let S = 0;
    return Object.keys(h).forEach((_) => {
      Number(isNaN(Number(_))) && S++;
    }), S;
  }
  e.getEnumLength = o;
  function s(h, S) {
    let _ = !1;
    if (S.nonWitnessUtxo || S.witnessUtxo) {
      const A = !!S.redeemScript, L = !!S.witnessScript, v = !A || !!S.finalScriptSig, I = !L || !!S.finalScriptWitness, O = !!S.finalScriptSig || !!S.finalScriptWitness;
      _ = v && I && O;
    }
    if (_ === !1)
      throw new Error(
        `Input #${h} has too much or too little data to clean`
      );
  }
  e.inputCheckUncleanFinalized = s;
  function c(h, S, _, A) {
    throw new Error(
      `Data for ${h} key ${S} is incorrect: Expected ${_} and got ${JSON.stringify(A)}`
    );
  }
  function u(h) {
    return (S, _) => {
      for (const A of Object.keys(S)) {
        const L = S[A], { canAdd: v, canAddToArray: I, check: O, expected: H } = (
          // @ts-ignore
          t[h + "s"][A] || {}
        ), B = !!I;
        if (O)
          if (B) {
            if (!Array.isArray(L) || // @ts-ignore
            _[A] && !Array.isArray(_[A]))
              throw new Error(`Key type ${A} must be an array`);
            L.every(O) || c(h, A, H, L);
            const W = _[A] || [], w = /* @__PURE__ */ new Set();
            if (!L.every((p) => I(W, p, w)))
              throw new Error("Can not add duplicate data to array");
            _[A] = W.concat(L);
          } else {
            if (O(L) || c(h, A, H, L), !v(_, L))
              throw new Error(`Can not add duplicate data to ${h}`);
            _[A] = L;
          }
      }
    };
  }
  e.updateGlobal = u("global"), e.updateInput = u("input"), e.updateOutput = u("output");
  function d(h, S) {
    const _ = h.length - 1, A = n(h, _);
    e.updateInput(S, A);
  }
  e.addInputAttributes = d;
  function a(h, S) {
    const _ = h.length - 1, A = r(h, _);
    e.updateOutput(S, A);
  }
  e.addOutputAttributes = a;
  function g(h, S) {
    if (!M.isBuffer(S) || S.length < 4)
      throw new Error("Set Version: Invalid Transaction");
    return S.writeUInt32LE(h, 0), S;
  }
  e.defaultVersionSetter = g;
  function m(h, S) {
    if (!M.isBuffer(S) || S.length < 4)
      throw new Error("Set Locktime: Invalid Transaction");
    return S.writeUInt32LE(h, S.length - 4), S;
  }
  e.defaultLocktimeSetter = m;
})(au);
Object.defineProperty(Qc, "__esModule", { value: !0 });
const zy = Zc, Sa = eu, Gs = Je, et = au;
let Yy = class {
  constructor(t) {
    this.inputs = [], this.outputs = [], this.globalMap = {
      unsignedTx: t
    };
  }
  static fromBase64(t, n) {
    const r = M.from(t, "base64");
    return this.fromBuffer(r, n);
  }
  static fromHex(t, n) {
    const r = M.from(t, "hex");
    return this.fromBuffer(r, n);
  }
  static fromBuffer(t, n) {
    const r = Sa.psbtFromBuffer(t, n), i = new this(r.globalMap.unsignedTx);
    return Object.assign(i, r), i;
  }
  toBase64() {
    return this.toBuffer().toString("base64");
  }
  toHex() {
    return this.toBuffer().toString("hex");
  }
  toBuffer() {
    return Sa.psbtToBuffer(this);
  }
  updateGlobal(t) {
    return et.updateGlobal(t, this.globalMap), this;
  }
  updateInput(t, n) {
    const r = et.checkForInput(this.inputs, t);
    return et.updateInput(n, r), this;
  }
  updateOutput(t, n) {
    const r = et.checkForOutput(this.outputs, t);
    return et.updateOutput(n, r), this;
  }
  addUnknownKeyValToGlobal(t) {
    return et.checkHasKey(
      t,
      this.globalMap.unknownKeyVals,
      et.getEnumLength(Gs.GlobalTypes)
    ), this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []), this.globalMap.unknownKeyVals.push(t), this;
  }
  addUnknownKeyValToInput(t, n) {
    const r = et.checkForInput(this.inputs, t);
    return et.checkHasKey(
      n,
      r.unknownKeyVals,
      et.getEnumLength(Gs.InputTypes)
    ), r.unknownKeyVals || (r.unknownKeyVals = []), r.unknownKeyVals.push(n), this;
  }
  addUnknownKeyValToOutput(t, n) {
    const r = et.checkForOutput(this.outputs, t);
    return et.checkHasKey(
      n,
      r.unknownKeyVals,
      et.getEnumLength(Gs.OutputTypes)
    ), r.unknownKeyVals || (r.unknownKeyVals = []), r.unknownKeyVals.push(n), this;
  }
  addInput(t) {
    this.globalMap.unsignedTx.addInput(t), this.inputs.push({
      unknownKeyVals: []
    });
    const n = t.unknownKeyVals || [], r = this.inputs.length - 1;
    if (!Array.isArray(n))
      throw new Error("unknownKeyVals must be an Array");
    return n.forEach(
      (i) => this.addUnknownKeyValToInput(r, i)
    ), et.addInputAttributes(this.inputs, t), this;
  }
  addOutput(t) {
    this.globalMap.unsignedTx.addOutput(t), this.outputs.push({
      unknownKeyVals: []
    });
    const n = t.unknownKeyVals || [], r = this.outputs.length - 1;
    if (!Array.isArray(n))
      throw new Error("unknownKeyVals must be an Array");
    return n.forEach(
      (i) => this.addUnknownKeyValToOutput(r, i)
    ), et.addOutputAttributes(this.outputs, t), this;
  }
  clearFinalizedInput(t) {
    const n = et.checkForInput(this.inputs, t);
    et.inputCheckUncleanFinalized(t, n);
    for (const r of Object.keys(n))
      [
        "witnessUtxo",
        "nonWitnessUtxo",
        "finalScriptSig",
        "finalScriptWitness",
        "unknownKeyVals"
      ].includes(r) || delete n[r];
    return this;
  }
  combine(...t) {
    const n = zy.combine([this].concat(t));
    return Object.assign(this, n), this;
  }
  getTransaction() {
    return this.globalMap.unsignedTx.toBuffer();
  }
};
Qc.Psbt = Yy;
var ke = {}, Ee = {};
Object.defineProperty(Ee, "__esModule", { value: !0 });
Ee.signatureBlocksAction = Ee.checkInputForSig = Ee.pubkeyInScript = Ee.pubkeyPositionInScript = Ee.witnessStackToScriptWitness = Ee.isP2TR = Ee.isP2SHScript = Ee.isP2WSHScript = Ee.isP2WPKH = Ee.isP2PKH = Ee.isP2PK = Ee.isP2MS = void 0;
const Ta = Wt, Ai = yt(), so = Gn, Jy = an, xr = Wi();
function Or(e) {
  return (t) => {
    try {
      return e({ output: t }), !0;
    } catch {
      return !1;
    }
  };
}
Ee.isP2MS = Or(xr.p2ms);
Ee.isP2PK = Or(xr.p2pk);
Ee.isP2PKH = Or(xr.p2pkh);
Ee.isP2WPKH = Or(xr.p2wpkh);
Ee.isP2WSHScript = Or(xr.p2wsh);
Ee.isP2SHScript = Or(xr.p2sh);
Ee.isP2TR = Or(xr.p2tr);
function Qy(e) {
  let t = M.allocUnsafe(0);
  function n(s) {
    t = M.concat([t, M.from(s)]);
  }
  function r(s) {
    const c = t.length, u = Ta.encodingLength(s);
    t = M.concat([t, M.allocUnsafe(u)]), Ta.encode(s, t, c);
  }
  function i(s) {
    r(s.length), n(s);
  }
  function o(s) {
    r(s.length), s.forEach(i);
  }
  return o(e), t;
}
Ee.witnessStackToScriptWitness = Qy;
function Jf(e, t) {
  const n = (0, Jy.hash160)(e), r = e.slice(1, 33), i = Ai.decompile(t);
  if (i === null) throw new Error("Unknown script error");
  return i.findIndex((o) => typeof o == "number" ? !1 : o.equals(e) || o.equals(n) || o.equals(r));
}
Ee.pubkeyPositionInScript = Jf;
function Zy(e, t) {
  return Jf(e, t) !== -1;
}
Ee.pubkeyInScript = Zy;
function e2(e, t) {
  return t2(e).some(
    (r) => Qf(r, Ai.signature.decode, t)
  );
}
Ee.checkInputForSig = e2;
function Qf(e, t, n) {
  const { hashType: r } = t(e), i = [];
  switch (r & so.Transaction.SIGHASH_ANYONECANPAY && i.push("addInput"), r & 31) {
    case so.Transaction.SIGHASH_ALL:
      break;
    case so.Transaction.SIGHASH_SINGLE:
    case so.Transaction.SIGHASH_NONE:
      i.push("addOutput"), i.push("setInputSequence");
      break;
  }
  return i.indexOf(n) === -1;
}
Ee.signatureBlocksAction = Qf;
function t2(e) {
  let t = [];
  if ((e.partialSig || []).length === 0) {
    if (!e.finalScriptSig && !e.finalScriptWitness) return [];
    t = n2(e);
  } else
    t = e.partialSig;
  return t.map((n) => n.signature);
}
function n2(e) {
  const t = e.finalScriptSig ? Ai.decompile(e.finalScriptSig) || [] : [], n = e.finalScriptWitness ? Ai.decompile(e.finalScriptWitness) || [] : [];
  return t.concat(n).filter((r) => M.isBuffer(r) && Ai.isCanonicalScriptSignature(r)).map((r) => ({ signature: r }));
}
Object.defineProperty(ke, "__esModule", { value: !0 });
ke.checkTaprootInputForSigs = ke.tapTreeFromList = ke.tapTreeToList = ke.tweakInternalPubKey = ke.checkTaprootOutputFields = ke.checkTaprootInputFields = ke.isTaprootOutput = ke.isTaprootInput = ke.serializeTaprootSignature = ke.tapScriptFinalizer = ke.toXOnly = void 0;
const lu = it, r2 = Gn, cs = Ee, Vn = ts, i2 = Wi(), o2 = Ee, s2 = (e) => e.length === 32 ? e : e.slice(1, 33);
ke.toXOnly = s2;
function c2(e, t, n) {
  const r = I2(
    t,
    e,
    n
  );
  try {
    const o = T2(t, r).concat(r.script).concat(r.controlBlock);
    return {
      finalScriptWitness: (0, cs.witnessStackToScriptWitness)(o)
    };
  } catch (i) {
    throw new Error(`Can not finalize taproot input #${e}: ${i}`);
  }
}
ke.tapScriptFinalizer = c2;
function u2(e, t) {
  const n = t ? M.from([t]) : M.from([]);
  return M.concat([e, n]);
}
ke.serializeTaprootSignature = u2;
function go(e) {
  return e && !!(e.tapInternalKey || e.tapMerkleRoot || e.tapLeafScript && e.tapLeafScript.length || e.tapBip32Derivation && e.tapBip32Derivation.length || e.witnessUtxo && (0, cs.isP2TR)(e.witnessUtxo.script));
}
ke.isTaprootInput = go;
function mo(e, t) {
  return e && !!(e.tapInternalKey || e.tapTree || e.tapBip32Derivation && e.tapBip32Derivation.length || t && (0, cs.isP2TR)(t));
}
ke.isTaprootOutput = mo;
function a2(e, t, n) {
  v2(e, t, n), S2(e, t, n);
}
ke.checkTaprootInputFields = a2;
function l2(e, t, n) {
  b2(e, t, n), f2(e, t);
}
ke.checkTaprootOutputFields = l2;
function f2(e, t) {
  if (!t.tapTree && !t.tapInternalKey) return;
  const n = t.tapInternalKey || e.tapInternalKey, r = t.tapTree || e.tapTree;
  if (n) {
    const { script: i } = e, o = d2(n, r);
    if (i && !i.equals(o))
      throw new Error("Error adding output. Script or address missmatch.");
  }
}
function d2(e, t) {
  const n = t && Zf(t.leaves), { output: r } = (0, i2.p2tr)({
    internalPubkey: e,
    scriptTree: n
  });
  return r;
}
function h2(e, t) {
  const n = t.tapInternalKey, r = n && (0, Vn.tweakKey)(n, t.tapMerkleRoot);
  if (!r)
    throw new Error(
      `Cannot tweak tap internal key for input #${e}. Public key: ${n && n.toString("hex")}`
    );
  return r.x;
}
ke.tweakInternalPubKey = h2;
function p2(e) {
  if (!(0, lu.isTaptree)(e))
    throw new Error(
      "Cannot convert taptree to tapleaf list. Expecting a tapree structure."
    );
  return wc(e);
}
ke.tapTreeToList = p2;
function Zf(e = []) {
  return e.length === 1 && e[0].depth === 0 ? {
    output: e[0].script,
    version: e[0].leafVersion
  } : E2(e);
}
ke.tapTreeFromList = Zf;
function g2(e, t) {
  return w2(e).some(
    (r) => (0, o2.signatureBlocksAction)(r, m2, t)
  );
}
ke.checkTaprootInputForSigs = g2;
function m2(e) {
  return {
    signature: e.slice(0, 64),
    hashType: e.slice(64)[0] || r2.Transaction.SIGHASH_DEFAULT
  };
}
function w2(e) {
  const t = [];
  if (e.tapKeySig && t.push(e.tapKeySig), e.tapScriptSig && t.push(...e.tapScriptSig.map((n) => n.signature)), !t.length) {
    const n = y2(e.finalScriptWitness);
    n && t.push(n);
  }
  return t;
}
function y2(e) {
  if (!e) return;
  const t = e.slice(2);
  if (t.length === 64 || t.length === 65) return t;
}
function wc(e, t = [], n = 0) {
  if (n > Vn.MAX_TAPTREE_DEPTH)
    throw new Error("Max taptree depth exceeded.");
  return e ? (0, lu.isTapleaf)(e) ? (t.push({
    depth: n,
    leafVersion: e.version || Vn.LEAF_VERSION_TAPSCRIPT,
    script: e.output
  }), t) : (e[0] && wc(e[0], t, n + 1), e[1] && wc(e[1], t, n + 1), t) : [];
}
function E2(e) {
  let t;
  for (const n of e)
    if (t = yc(n, t), !t) throw new Error("No room left to insert tapleaf in tree");
  return t;
}
function yc(e, t, n = 0) {
  if (n > Vn.MAX_TAPTREE_DEPTH)
    throw new Error("Max taptree depth exceeded.");
  if (e.depth === n)
    return t ? void 0 : {
      output: e.script,
      version: e.leafVersion
    };
  if ((0, lu.isTapleaf)(t)) return;
  const r = yc(e, t && t[0], n + 1);
  if (r) return [r, t && t[1]];
  const i = yc(e, t && t[1], n + 1);
  if (i) return [t && t[0], i];
}
function v2(e, t, n) {
  const r = go(e) && Gr(t), i = Gr(e) && go(t), o = e === t && go(t) && Gr(t);
  if (r || i || o)
    throw new Error(
      `Invalid arguments for Psbt.${n}. Cannot use both taproot and non-taproot fields.`
    );
}
function b2(e, t, n) {
  const r = mo(e) && Gr(t), i = Gr(e) && mo(t), o = e === t && mo(t) && Gr(t);
  if (r || i || o)
    throw new Error(
      `Invalid arguments for Psbt.${n}. Cannot use both taproot and non-taproot fields.`
    );
}
function S2(e, t, n) {
  if (t.tapMerkleRoot) {
    const r = (t.tapLeafScript || []).every(
      (o) => qs(o, t.tapMerkleRoot)
    ), i = (e.tapLeafScript || []).every(
      (o) => qs(o, t.tapMerkleRoot)
    );
    if (!r || !i)
      throw new Error(
        `Invalid arguments for Psbt.${n}. Tapleaf not part of taptree.`
      );
  } else if (e.tapMerkleRoot && !(t.tapLeafScript || []).every(
    (i) => qs(i, e.tapMerkleRoot)
  ))
    throw new Error(
      `Invalid arguments for Psbt.${n}. Tapleaf not part of taptree.`
    );
}
function qs(e, t) {
  if (!t) return !0;
  const n = (0, Vn.tapleafHash)({
    output: e.script,
    version: e.leafVersion
  });
  return (0, Vn.rootHashFromPath)(
    e.controlBlock,
    n
  ).equals(t);
}
function T2(e, t) {
  const n = (0, Vn.tapleafHash)({
    output: t.script,
    version: t.leafVersion
  });
  return (e.tapScriptSig || []).filter((r) => r.leafHash.equals(n)).map((r) => _2(t.script, r)).sort((r, i) => i.positionInScript - r.positionInScript).map((r) => r.signature);
}
function _2(e, t) {
  return Object.assign(
    {
      positionInScript: (0, cs.pubkeyPositionInScript)(
        t.pubkey,
        e
      )
    },
    t
  );
}
function I2(e, t, n) {
  if (!e.tapScriptSig || !e.tapScriptSig.length)
    throw new Error(
      `Can not finalize taproot input #${t}. No tapleaf script signature provided.`
    );
  const r = (e.tapLeafScript || []).sort((i, o) => i.controlBlock.length - o.controlBlock.length).find(
    (i) => x2(i, e.tapScriptSig, n)
  );
  if (!r)
    throw new Error(
      `Can not finalize taproot input #${t}. Signature for tapleaf script not found.`
    );
  return r;
}
function x2(e, t, n) {
  const r = (0, Vn.tapleafHash)({
    output: e.script,
    version: e.leafVersion
  });
  return (!n || n.equals(r)) && t.find((o) => o.leafHash.equals(r)) !== void 0;
}
function Gr(e) {
  return e && !!(e.redeemScript || e.witnessScript || e.bip32Derivation && e.bip32Derivation.length);
}
Object.defineProperty(is, "__esModule", { value: !0 });
is.Psbt = void 0;
const _a = Qc, Ia = Wt, pt = au, xa = Jc(), ko = Ve, O2 = Ye, Bt = Wi(), P2 = ts, Sn = yt(), st = Gn, Fe = ke, Me = Ee, A2 = {
  /**
   * A bitcoinjs Network object. This is only used if you pass an `address`
   * parameter to addOutput. Otherwise it is not needed and can be left default.
   */
  network: O2.bitcoin,
  /**
   * When extractTransaction is called, the fee rate is checked.
   * THIS IS NOT TO BE RELIED ON.
   * It is only here as a last ditch effort to prevent sending a 500 BTC fee etc.
   */
  maximumFeeRate: 5e3
  // satoshi per byte
};
class Co {
  static fromBase64(t, n = {}) {
    const r = M.from(t, "base64");
    return this.fromBuffer(r, n);
  }
  static fromHex(t, n = {}) {
    const r = M.from(t, "hex");
    return this.fromBuffer(r, n);
  }
  static fromBuffer(t, n = {}) {
    const r = _a.Psbt.fromBuffer(t, k2), i = new Co(n, r);
    return B2(i.__CACHE.__TX, i.__CACHE), i;
  }
  constructor(t = {}, n = new _a.Psbt(new ed())) {
    this.data = n, this.opts = Object.assign({}, A2, t), this.__CACHE = {
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
    const r = (i, o, s, c) => Object.defineProperty(i, o, {
      enumerable: s,
      writable: c
    });
    r(this, "__CACHE", !1, !0), r(this, "opts", !1, !0);
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
      hash: (0, ko.cloneBuffer)(t.hash),
      index: t.index,
      sequence: t.sequence
    }));
  }
  get txOutputs() {
    return this.__CACHE.__TX.outs.map((t) => {
      let n;
      try {
        n = (0, xa.fromOutputScript)(
          t.script,
          this.opts.network
        );
      } catch {
      }
      return {
        script: (0, ko.cloneBuffer)(t.script),
        value: t.value,
        address: n
      };
    });
  }
  combine(...t) {
    return this.data.combine(...t.map((n) => n.data)), this;
  }
  clone() {
    const t = Co.fromBuffer(this.data.toBuffer());
    return t.opts = JSON.parse(JSON.stringify(this.opts)), t;
  }
  setMaximumFeeRate(t) {
    co(t), this.opts.maximumFeeRate = t;
  }
  setVersion(t) {
    co(t), mi(this.data.inputs, "setVersion");
    const n = this.__CACHE;
    return n.__TX.version = t, n.__EXTRACTED_TX = void 0, this;
  }
  setLocktime(t) {
    co(t), mi(this.data.inputs, "setLocktime");
    const n = this.__CACHE;
    return n.__TX.locktime = t, n.__EXTRACTED_TX = void 0, this;
  }
  setInputSequence(t, n) {
    co(n), mi(this.data.inputs, "setInputSequence");
    const r = this.__CACHE;
    if (r.__TX.ins.length <= t)
      throw new Error("Input index too high");
    return r.__TX.ins[t].sequence = n, r.__EXTRACTED_TX = void 0, this;
  }
  addInputs(t) {
    return t.forEach((n) => this.addInput(n)), this;
  }
  addInput(t) {
    if (arguments.length > 1 || !t || t.hash === void 0 || t.index === void 0)
      throw new Error(
        "Invalid arguments for Psbt.addInput. Requires single object with at least [hash] and [index]"
      );
    (0, Fe.checkTaprootInputFields)(t, t, "addInput"), mi(this.data.inputs, "addInput"), t.witnessScript && Fo(t.witnessScript);
    const n = this.__CACHE;
    this.data.addInput(t);
    const r = n.__TX.ins[n.__TX.ins.length - 1];
    rd(n, r);
    const i = this.data.inputs.length - 1, o = this.data.inputs[i];
    return o.nonWitnessUtxo && vc(this.__CACHE, o, i), n.__FEE = void 0, n.__FEE_RATE = void 0, n.__EXTRACTED_TX = void 0, this;
  }
  addOutputs(t) {
    return t.forEach((n) => this.addOutput(n)), this;
  }
  addOutput(t) {
    if (arguments.length > 1 || !t || t.value === void 0 || t.address === void 0 && t.script === void 0)
      throw new Error(
        "Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]"
      );
    mi(this.data.inputs, "addOutput");
    const { address: n } = t;
    if (typeof n == "string") {
      const { network: i } = this.opts, o = (0, xa.toOutputScript)(n, i);
      t = Object.assign({}, t, { script: o });
    }
    (0, Fe.checkTaprootOutputFields)(t, t, "addOutput");
    const r = this.__CACHE;
    return this.data.addOutput(t), r.__FEE = void 0, r.__FEE_RATE = void 0, r.__EXTRACTED_TX = void 0, this;
  }
  extractTransaction(t) {
    if (!this.data.inputs.every(td)) throw new Error("Not finalized");
    const n = this.__CACHE;
    if (t || F2(this, n, this.opts), n.__EXTRACTED_TX) return n.__EXTRACTED_TX;
    const r = n.__TX.clone();
    return ad(this.data.inputs, r, n, !0), r;
  }
  getFeeRate() {
    return Ca(
      "__FEE_RATE",
      "fee rate",
      this.data.inputs,
      this.__CACHE
    );
  }
  getFee() {
    return Ca("__FEE", "fee", this.data.inputs, this.__CACHE);
  }
  finalizeAllInputs() {
    return (0, pt.checkForInput)(this.data.inputs, 0), wi(this.data.inputs.length).forEach((t) => this.finalizeInput(t)), this;
  }
  finalizeInput(t, n) {
    const r = (0, pt.checkForInput)(this.data.inputs, t);
    return (0, Fe.isTaprootInput)(r) ? this._finalizeTaprootInput(
      t,
      r,
      void 0,
      n
    ) : this._finalizeInput(t, r, n);
  }
  finalizeTaprootInput(t, n, r = Fe.tapScriptFinalizer) {
    const i = (0, pt.checkForInput)(this.data.inputs, t);
    if ((0, Fe.isTaprootInput)(i))
      return this._finalizeTaprootInput(
        t,
        i,
        n,
        r
      );
    throw new Error(`Cannot finalize input #${t}. Not Taproot.`);
  }
  _finalizeInput(t, n, r = L2) {
    const { script: i, isP2SH: o, isP2WSH: s, isSegwit: c } = M2(
      t,
      n,
      this.__CACHE
    );
    if (!i) throw new Error(`No script found for input #${t}`);
    N2(n);
    const { finalScriptSig: u, finalScriptWitness: d } = r(
      t,
      n,
      i,
      c,
      o,
      s
    );
    if (u && this.data.updateInput(t, { finalScriptSig: u }), d && this.data.updateInput(t, { finalScriptWitness: d }), !u && !d)
      throw new Error(`Unknown error finalizing input #${t}`);
    return this.data.clearFinalizedInput(t), this;
  }
  _finalizeTaprootInput(t, n, r, i = Fe.tapScriptFinalizer) {
    if (!n.witnessUtxo)
      throw new Error(
        `Cannot finalize input #${t}. Missing withness utxo.`
      );
    if (n.tapKeySig) {
      const o = Bt.p2tr({
        output: n.witnessUtxo.script,
        signature: n.tapKeySig
      }), s = (0, Me.witnessStackToScriptWitness)(
        o.witness
      );
      this.data.updateInput(t, { finalScriptWitness: s });
    } else {
      const { finalScriptWitness: o } = i(
        t,
        n,
        r
      );
      this.data.updateInput(t, { finalScriptWitness: o });
    }
    return this.data.clearFinalizedInput(t), this;
  }
  getInputType(t) {
    const n = (0, pt.checkForInput)(this.data.inputs, t), r = ld(t, n, this.__CACHE), i = as(
      r,
      t,
      "input",
      n.redeemScript || V2(n.finalScriptSig),
      n.witnessScript || G2(n.finalScriptWitness)
    ), o = i.type === "raw" ? "" : i.type + "-", s = dd(i.meaningfulScript);
    return o + s;
  }
  inputHasPubkey(t, n) {
    const r = (0, pt.checkForInput)(this.data.inputs, t);
    return W2(n, r, t, this.__CACHE);
  }
  inputHasHDKey(t, n) {
    const r = (0, pt.checkForInput)(this.data.inputs, t), i = Pa(n);
    return !!r.bip32Derivation && r.bip32Derivation.some(i);
  }
  outputHasPubkey(t, n) {
    const r = (0, pt.checkForOutput)(this.data.outputs, t);
    return K2(n, r, t, this.__CACHE);
  }
  outputHasHDKey(t, n) {
    const r = (0, pt.checkForOutput)(this.data.outputs, t), i = Pa(n);
    return !!r.bip32Derivation && r.bip32Derivation.some(i);
  }
  validateSignaturesOfAllInputs(t) {
    return (0, pt.checkForInput)(this.data.inputs, 0), wi(this.data.inputs.length).map(
      (r) => this.validateSignaturesOfInput(r, t)
    ).reduce((r, i) => i === !0 && r, !0);
  }
  validateSignaturesOfInput(t, n, r) {
    const i = this.data.inputs[t];
    return (0, Fe.isTaprootInput)(i) ? this.validateSignaturesOfTaprootInput(
      t,
      n,
      r
    ) : this._validateSignaturesOfInput(t, n, r);
  }
  _validateSignaturesOfInput(t, n, r) {
    const i = this.data.inputs[t], o = (i || {}).partialSig;
    if (!i || !o || o.length < 1)
      throw new Error("No signatures to validate");
    if (typeof n != "function")
      throw new Error("Need validator function to validate signatures");
    const s = r ? o.filter((g) => g.pubkey.equals(r)) : o;
    if (s.length < 1) throw new Error("No signatures for this pubkey");
    const c = [];
    let u, d, a;
    for (const g of s) {
      const m = Sn.signature.decode(g.signature), { hash: h, script: S } = a !== m.hashType ? od(
        t,
        Object.assign({}, i, { sighashType: m.hashType }),
        this.__CACHE,
        !0
      ) : { hash: u, script: d };
      a = m.hashType, u = h, d = S, nd(g.pubkey, S, "verify"), c.push(n(g.pubkey, h, m.signature));
    }
    return c.every((g) => g === !0);
  }
  validateSignaturesOfTaprootInput(t, n, r) {
    const i = this.data.inputs[t], o = (i || {}).tapKeySig, s = (i || {}).tapScriptSig;
    if (!i && !o && !(s && !s.length))
      throw new Error("No signatures to validate");
    if (typeof n != "function")
      throw new Error("Need validator function to validate signatures");
    r = r && (0, Fe.toXOnly)(r);
    const c = r ? Ec(
      t,
      i,
      this.data.inputs,
      r,
      this.__CACHE
    ) : $2(
      t,
      i,
      this.data.inputs,
      this.__CACHE
    );
    if (!c.length) throw new Error("No signatures for this pubkey");
    const u = c.find((a) => !a.leafHash);
    let d = 0;
    if (o && u) {
      if (!n(
        u.pubkey,
        u.hash,
        Na(o)
      )) return !1;
      d++;
    }
    if (s)
      for (const a of s) {
        const g = c.find((m) => a.pubkey.equals(m.pubkey));
        if (g) {
          if (!n(
            a.pubkey,
            g.hash,
            Na(a.signature)
          )) return !1;
          d++;
        }
      }
    return d > 0;
  }
  signAllInputsHD(t, n = [st.Transaction.SIGHASH_ALL]) {
    if (!t || !t.publicKey || !t.fingerprint)
      throw new Error("Need HDSigner to sign input");
    const r = [];
    for (const i of wi(this.data.inputs.length))
      try {
        this.signInputHD(i, t, n), r.push(!0);
      } catch {
        r.push(!1);
      }
    if (r.every((i) => i === !1))
      throw new Error("No inputs were signed");
    return this;
  }
  signAllInputsHDAsync(t, n = [st.Transaction.SIGHASH_ALL]) {
    return new Promise((r, i) => {
      if (!t || !t.publicKey || !t.fingerprint)
        return i(new Error("Need HDSigner to sign input"));
      const o = [], s = [];
      for (const c of wi(this.data.inputs.length))
        s.push(
          this.signInputHDAsync(c, t, n).then(
            () => {
              o.push(!0);
            },
            () => {
              o.push(!1);
            }
          )
        );
      return Promise.all(s).then(() => {
        if (o.every((c) => c === !1))
          return i(new Error("No inputs were signed"));
        r();
      });
    });
  }
  signInputHD(t, n, r = [st.Transaction.SIGHASH_ALL]) {
    if (!n || !n.publicKey || !n.fingerprint)
      throw new Error("Need HDSigner to sign input");
    return Ra(t, this.data.inputs, n).forEach((o) => this.signInput(t, o, r)), this;
  }
  signInputHDAsync(t, n, r = [st.Transaction.SIGHASH_ALL]) {
    return new Promise((i, o) => {
      if (!n || !n.publicKey || !n.fingerprint)
        return o(new Error("Need HDSigner to sign input"));
      const c = Ra(t, this.data.inputs, n).map(
        (u) => this.signInputAsync(t, u, r)
      );
      return Promise.all(c).then(() => {
        i();
      }).catch(o);
    });
  }
  signAllInputs(t, n) {
    if (!t || !t.publicKey)
      throw new Error("Need Signer to sign input");
    const r = [];
    for (const i of wi(this.data.inputs.length))
      try {
        this.signInput(i, t, n), r.push(!0);
      } catch {
        r.push(!1);
      }
    if (r.every((i) => i === !1))
      throw new Error("No inputs were signed");
    return this;
  }
  signAllInputsAsync(t, n) {
    return new Promise((r, i) => {
      if (!t || !t.publicKey)
        return i(new Error("Need Signer to sign input"));
      const o = [], s = [];
      for (const [c] of this.data.inputs.entries())
        s.push(
          this.signInputAsync(c, t, n).then(
            () => {
              o.push(!0);
            },
            () => {
              o.push(!1);
            }
          )
        );
      return Promise.all(s).then(() => {
        if (o.every((c) => c === !1))
          return i(new Error("No inputs were signed"));
        r();
      });
    });
  }
  signInput(t, n, r) {
    if (!n || !n.publicKey)
      throw new Error("Need Signer to sign input");
    const i = (0, pt.checkForInput)(this.data.inputs, t);
    return (0, Fe.isTaprootInput)(i) ? this._signTaprootInput(
      t,
      i,
      n,
      void 0,
      r
    ) : this._signInput(t, n, r);
  }
  signTaprootInput(t, n, r, i) {
    if (!n || !n.publicKey)
      throw new Error("Need Signer to sign input");
    const o = (0, pt.checkForInput)(this.data.inputs, t);
    if ((0, Fe.isTaprootInput)(o))
      return this._signTaprootInput(
        t,
        o,
        n,
        r,
        i
      );
    throw new Error(`Input #${t} is not of type Taproot.`);
  }
  _signInput(t, n, r = [st.Transaction.SIGHASH_ALL]) {
    const { hash: i, sighashType: o } = Fa(
      this.data.inputs,
      t,
      n.publicKey,
      this.__CACHE,
      r
    ), s = [
      {
        pubkey: n.publicKey,
        signature: Sn.signature.encode(n.sign(i), o)
      }
    ];
    return this.data.updateInput(t, { partialSig: s }), this;
  }
  _signTaprootInput(t, n, r, i, o = [st.Transaction.SIGHASH_DEFAULT]) {
    const s = this.checkTaprootHashesForSig(
      t,
      n,
      r,
      i,
      o
    ), c = s.filter((d) => !d.leafHash).map(
      (d) => (0, Fe.serializeTaprootSignature)(
        r.signSchnorr(d.hash),
        n.sighashType
      )
    )[0], u = s.filter((d) => !!d.leafHash).map((d) => ({
      pubkey: (0, Fe.toXOnly)(r.publicKey),
      signature: (0, Fe.serializeTaprootSignature)(
        r.signSchnorr(d.hash),
        n.sighashType
      ),
      leafHash: d.leafHash
    }));
    return c && this.data.updateInput(t, { tapKeySig: c }), u.length && this.data.updateInput(t, { tapScriptSig: u }), this;
  }
  signInputAsync(t, n, r) {
    return Promise.resolve().then(() => {
      if (!n || !n.publicKey)
        throw new Error("Need Signer to sign input");
      const i = (0, pt.checkForInput)(this.data.inputs, t);
      return (0, Fe.isTaprootInput)(i) ? this._signTaprootInputAsync(
        t,
        i,
        n,
        void 0,
        r
      ) : this._signInputAsync(t, n, r);
    });
  }
  signTaprootInputAsync(t, n, r, i) {
    return Promise.resolve().then(() => {
      if (!n || !n.publicKey)
        throw new Error("Need Signer to sign input");
      const o = (0, pt.checkForInput)(this.data.inputs, t);
      if ((0, Fe.isTaprootInput)(o))
        return this._signTaprootInputAsync(
          t,
          o,
          n,
          r,
          i
        );
      throw new Error(`Input #${t} is not of type Taproot.`);
    });
  }
  _signInputAsync(t, n, r = [st.Transaction.SIGHASH_ALL]) {
    const { hash: i, sighashType: o } = Fa(
      this.data.inputs,
      t,
      n.publicKey,
      this.__CACHE,
      r
    );
    return Promise.resolve(n.sign(i)).then((s) => {
      const c = [
        {
          pubkey: n.publicKey,
          signature: Sn.signature.encode(s, o)
        }
      ];
      this.data.updateInput(t, { partialSig: c });
    });
  }
  async _signTaprootInputAsync(t, n, r, i, o = [st.Transaction.SIGHASH_DEFAULT]) {
    const s = this.checkTaprootHashesForSig(
      t,
      n,
      r,
      i,
      o
    ), c = [], u = s.filter((a) => !a.leafHash)[0];
    if (u) {
      const a = Promise.resolve(
        r.signSchnorr(u.hash)
      ).then((g) => ({
        tapKeySig: (0, Fe.serializeTaprootSignature)(
          g,
          n.sighashType
        )
      }));
      c.push(a);
    }
    const d = s.filter((a) => !!a.leafHash);
    if (d.length) {
      const a = d.map((g) => Promise.resolve(r.signSchnorr(g.hash)).then(
        (m) => ({ tapScriptSig: [
          {
            pubkey: (0, Fe.toXOnly)(r.publicKey),
            signature: (0, Fe.serializeTaprootSignature)(
              m,
              n.sighashType
            ),
            leafHash: g.leafHash
          }
        ] })
      ));
      c.push(...a);
    }
    return Promise.all(c).then((a) => {
      a.forEach((g) => this.data.updateInput(t, g));
    });
  }
  checkTaprootHashesForSig(t, n, r, i, o) {
    if (typeof r.signSchnorr != "function")
      throw new Error(
        `Need Schnorr Signer to sign taproot input #${t}.`
      );
    const s = Ec(
      t,
      n,
      this.data.inputs,
      r.publicKey,
      this.__CACHE,
      i,
      o
    );
    if (!s || !s.length)
      throw new Error(
        `Can not sign for input #${t} with the key ${r.publicKey.toString(
          "hex"
        )}`
      );
    return s;
  }
  toBuffer() {
    return Xs(this.__CACHE), this.data.toBuffer();
  }
  toHex() {
    return Xs(this.__CACHE), this.data.toHex();
  }
  toBase64() {
    return Xs(this.__CACHE), this.data.toBase64();
  }
  updateGlobal(t) {
    return this.data.updateGlobal(t), this;
  }
  updateInput(t, n) {
    return n.witnessScript && Fo(n.witnessScript), (0, Fe.checkTaprootInputFields)(
      this.data.inputs[t],
      n,
      "updateInput"
    ), this.data.updateInput(t, n), n.nonWitnessUtxo && vc(
      this.__CACHE,
      this.data.inputs[t],
      t
    ), this;
  }
  updateOutput(t, n) {
    const r = this.data.outputs[t];
    return (0, Fe.checkTaprootOutputFields)(
      r,
      n,
      "updateOutput"
    ), this.data.updateOutput(t, n), this;
  }
  addUnknownKeyValToGlobal(t) {
    return this.data.addUnknownKeyValToGlobal(t), this;
  }
  addUnknownKeyValToInput(t, n) {
    return this.data.addUnknownKeyValToInput(t, n), this;
  }
  addUnknownKeyValToOutput(t, n) {
    return this.data.addUnknownKeyValToOutput(t, n), this;
  }
  clearFinalizedInput(t) {
    return this.data.clearFinalizedInput(t), this;
  }
}
is.Psbt = Co;
const k2 = (e) => new ed(e);
class ed {
  constructor(t = M.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
    this.tx = st.Transaction.fromBuffer(t), R2(this.tx), Object.defineProperty(this, "tx", {
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
    if (t.hash === void 0 || t.index === void 0 || !M.isBuffer(t.hash) && typeof t.hash != "string" || typeof t.index != "number")
      throw new Error("Error adding input.");
    const n = typeof t.hash == "string" ? (0, ko.reverseBuffer)(M.from(t.hash, "hex")) : t.hash;
    this.tx.addInput(n, t.index, t.sequence);
  }
  addOutput(t) {
    if (t.script === void 0 || t.value === void 0 || !M.isBuffer(t.script) || typeof t.value != "number")
      throw new Error("Error adding output.");
    this.tx.addOutput(t.script, t.value);
  }
  toBuffer() {
    return this.tx.toBuffer();
  }
}
function C2(e, t, n) {
  switch (n) {
    case "pubkey":
    case "pubkeyhash":
    case "witnesspubkeyhash":
      return Oa(1, e.partialSig);
    case "multisig":
      const r = Bt.p2ms({ output: t });
      return Oa(r.m, e.partialSig, r.pubkeys);
    default:
      return !1;
  }
}
function Xs(e) {
  if (e.__UNSAFE_SIGN_NONSEGWIT !== !1)
    throw new Error("Not BIP174 compliant, can not export");
}
function Oa(e, t, n) {
  if (!t) return !1;
  let r;
  if (n ? r = n.map((i) => {
    const o = q2(i);
    return t.find((s) => s.pubkey.equals(o));
  }).filter((i) => !!i) : r = t, r.length > e) throw new Error("Too many signatures");
  return r.length === e;
}
function td(e) {
  return !!e.finalScriptSig || !!e.finalScriptWitness;
}
function Pa(e) {
  return (t) => !(!t.masterFingerprint.equals(e.fingerprint) || !e.derivePath(t.path).publicKey.equals(t.pubkey));
}
function co(e) {
  if (typeof e != "number" || e !== Math.floor(e) || e > 4294967295 || e < 0)
    throw new Error("Invalid 32 bit integer");
}
function F2(e, t, n) {
  const r = t.__FEE_RATE || e.getFeeRate(), i = t.__EXTRACTED_TX.virtualSize(), o = r * i;
  if (r >= n.maximumFeeRate)
    throw new Error(
      `Warning: You are paying around ${(o / 1e8).toFixed(8)} in fees, which is ${r} satoshi per byte for a transaction with a VSize of ${i} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`
    );
}
function mi(e, t) {
  e.forEach((n) => {
    if ((0, Fe.isTaprootInput)(n) ? (0, Fe.checkTaprootInputForSigs)(n, t) : (0, Me.checkInputForSig)(n, t))
      throw new Error("Can not modify transaction, signatures exist.");
  });
}
function N2(e) {
  if (!e.sighashType || !e.partialSig) return;
  const { partialSig: t, sighashType: n } = e;
  t.forEach((r) => {
    const { hashType: i } = Sn.signature.decode(r.signature);
    if (n !== i)
      throw new Error("Signature sighash does not match input sighash type");
  });
}
function nd(e, t, n) {
  if (!(0, Me.pubkeyInScript)(e, t))
    throw new Error(
      `Can not ${n} for this input with the key ${e.toString("hex")}`
    );
}
function R2(e) {
  if (!e.ins.every(
    (n) => n.script && n.script.length === 0 && n.witness && n.witness.length === 0
  ))
    throw new Error("Format Error: Transaction ScriptSigs are not empty");
}
function B2(e, t) {
  e.ins.forEach((n) => {
    rd(t, n);
  });
}
function rd(e, t) {
  const n = (0, ko.reverseBuffer)(M.from(t.hash)).toString("hex") + ":" + t.index;
  if (e.__TX_IN_CACHE[n]) throw new Error("Duplicate input detected.");
  e.__TX_IN_CACHE[n] = 1;
}
function id(e, t) {
  return (n, r, i, o) => {
    const s = e({
      redeem: { output: i }
    }).output;
    if (!r.equals(s))
      throw new Error(
        `${t} for ${o} #${n} doesn't match the scriptPubKey in the prevout`
      );
  };
}
const Aa = id(Bt.p2sh, "Redeem script"), ka = id(
  Bt.p2wsh,
  "Witness script"
);
function Ca(e, t, n, r) {
  if (!n.every(td))
    throw new Error(`PSBT must be finalized to calculate ${t}`);
  if (e === "__FEE_RATE" && r.__FEE_RATE) return r.__FEE_RATE;
  if (e === "__FEE" && r.__FEE) return r.__FEE;
  let i, o = !0;
  if (r.__EXTRACTED_TX ? (i = r.__EXTRACTED_TX, o = !1) : i = r.__TX.clone(), ad(n, i, r, o), e === "__FEE_RATE") return r.__FEE_RATE;
  if (e === "__FEE") return r.__FEE;
}
function L2(e, t, n, r, i, o) {
  const s = dd(n);
  if (!C2(t, n, s))
    throw new Error(`Can not finalize input #${e}`);
  return U2(
    n,
    s,
    t.partialSig,
    r,
    i,
    o
  );
}
function U2(e, t, n, r, i, o) {
  let s, c;
  const u = H2(e, t, n), d = o ? Bt.p2wsh({ redeem: u }) : null, a = i ? Bt.p2sh({ redeem: d || u }) : null;
  return r ? (d ? c = (0, Me.witnessStackToScriptWitness)(
    d.witness
  ) : c = (0, Me.witnessStackToScriptWitness)(
    u.witness
  ), a && (s = a.input)) : a ? s = a.input : s = u.input, {
    finalScriptSig: s,
    finalScriptWitness: c
  };
}
function Fa(e, t, n, r, i) {
  const o = (0, pt.checkForInput)(e, t), { hash: s, sighashType: c, script: u } = od(
    t,
    o,
    r,
    !1,
    i
  );
  return nd(n, u, "sign"), {
    hash: s,
    sighashType: c
  };
}
function od(e, t, n, r, i) {
  const o = n.__TX, s = t.sighashType || st.Transaction.SIGHASH_ALL;
  cd(s, i);
  let c, u;
  if (t.nonWitnessUtxo) {
    const g = us(
      n,
      t,
      e
    ), m = o.ins[e].hash, h = g.getHash();
    if (!m.equals(h))
      throw new Error(
        `Non-witness UTXO hash for input #${e} doesn't match the hash specified in the prevout`
      );
    const S = o.ins[e].index;
    u = g.outs[S];
  } else if (t.witnessUtxo)
    u = t.witnessUtxo;
  else
    throw new Error("Need a Utxo input item for signing");
  const { meaningfulScript: d, type: a } = as(
    u.script,
    e,
    "input",
    t.redeemScript,
    t.witnessScript
  );
  if (["p2sh-p2wsh", "p2wsh"].indexOf(a) >= 0)
    c = o.hashForWitnessV0(
      e,
      d,
      u.value,
      s
    );
  else if ((0, Me.isP2WPKH)(d)) {
    const g = Bt.p2pkh({
      hash: d.slice(2)
    }).output;
    c = o.hashForWitnessV0(
      e,
      g,
      u.value,
      s
    );
  } else {
    if (t.nonWitnessUtxo === void 0 && n.__UNSAFE_SIGN_NONSEGWIT === !1)
      throw new Error(
        `Input #${e} has witnessUtxo but non-segwit script: ${d.toString("hex")}`
      );
    !r && n.__UNSAFE_SIGN_NONSEGWIT !== !1 && console.warn(
      `Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as Psbt's predecessor (TransactionBuilder - now removed) when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.
*********************
PROCEED WITH CAUTION!
*********************`
    ), c = o.hashForSignature(
      e,
      d,
      s
    );
  }
  return {
    script: d,
    sighashType: s,
    hash: c
  };
}
function $2(e, t, n, r) {
  const i = [];
  if (t.tapInternalKey) {
    const s = sd(e, t, r);
    s && i.push(s);
  }
  if (t.tapScriptSig) {
    const s = t.tapScriptSig.map((c) => c.pubkey);
    i.push(...s);
  }
  return i.map(
    (s) => Ec(e, t, n, s, r)
  ).flat();
}
function sd(e, t, n) {
  const { script: r } = fu(e, t, n);
  return (0, Me.isP2TR)(r) ? r.subarray(2, 34) : null;
}
function Na(e) {
  return e.length === 64 ? e : e.subarray(0, 64);
}
function Ec(e, t, n, r, i, o, s) {
  const c = i.__TX, u = t.sighashType || st.Transaction.SIGHASH_DEFAULT;
  cd(u, s);
  const d = n.map(
    (S, _) => fu(_, S, i)
  ), a = d.map((S) => S.script), g = d.map((S) => S.value), m = [];
  if (t.tapInternalKey && !o) {
    const S = sd(e, t, i) || M.from([]);
    if ((0, Fe.toXOnly)(r).equals(S)) {
      const _ = c.hashForWitnessV1(
        e,
        a,
        g,
        u
      );
      m.push({ pubkey: r, hash: _ });
    }
  }
  const h = (t.tapLeafScript || []).filter((S) => (0, Me.pubkeyInScript)(r, S.script)).map((S) => {
    const _ = (0, P2.tapleafHash)({
      output: S.script,
      version: S.leafVersion
    });
    return Object.assign({ hash: _ }, S);
  }).filter(
    (S) => !o || o.equals(S.hash)
  ).map((S) => {
    const _ = c.hashForWitnessV1(
      e,
      a,
      g,
      u,
      S.hash
    );
    return {
      pubkey: r,
      hash: _,
      leafHash: S.hash
    };
  });
  return m.concat(h);
}
function cd(e, t) {
  if (t && t.indexOf(e) < 0) {
    const n = j2(e);
    throw new Error(
      `Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: ${n}`
    );
  }
}
function H2(e, t, n) {
  let r;
  switch (t) {
    case "multisig":
      const i = D2(e, n);
      r = Bt.p2ms({
        output: e,
        signatures: i
      });
      break;
    case "pubkey":
      r = Bt.p2pk({
        output: e,
        signature: n[0].signature
      });
      break;
    case "pubkeyhash":
      r = Bt.p2pkh({
        output: e,
        pubkey: n[0].pubkey,
        signature: n[0].signature
      });
      break;
    case "witnesspubkeyhash":
      r = Bt.p2wpkh({
        output: e,
        pubkey: n[0].pubkey,
        signature: n[0].signature
      });
      break;
  }
  return r;
}
function M2(e, t, n) {
  const r = n.__TX, i = {
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
    const o = us(
      n,
      t,
      e
    ), s = r.ins[e].index;
    i.script = o.outs[s].script;
  } else t.witnessUtxo && (i.script = t.witnessUtxo.script);
  return (t.witnessScript || (0, Me.isP2WPKH)(i.script)) && (i.isSegwit = !0), i;
}
function Ra(e, t, n) {
  const r = (0, pt.checkForInput)(t, e);
  if (!r.bip32Derivation || r.bip32Derivation.length === 0)
    throw new Error("Need bip32Derivation to sign with HD");
  const i = r.bip32Derivation.map((s) => {
    if (s.masterFingerprint.equals(n.fingerprint))
      return s;
  }).filter((s) => !!s);
  if (i.length === 0)
    throw new Error(
      "Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint"
    );
  return i.map((s) => {
    const c = n.derivePath(s.path);
    if (!s.pubkey.equals(c.publicKey))
      throw new Error("pubkey did not match bip32Derivation");
    return c;
  });
}
function D2(e, t) {
  return Bt.p2ms({ output: e }).pubkeys.map((r) => (t.filter((i) => i.pubkey.equals(r))[0] || {}).signature).filter((r) => !!r);
}
function ud(e) {
  let t = 0;
  function n(s) {
    return t += s, e.slice(t - s, t);
  }
  function r() {
    const s = Ia.decode(e, t);
    return t += Ia.decode.bytes, s;
  }
  function i() {
    return n(r());
  }
  function o() {
    const s = r(), c = [];
    for (let u = 0; u < s; u++) c.push(i());
    return c;
  }
  return o();
}
function j2(e) {
  let t = e & st.Transaction.SIGHASH_ANYONECANPAY ? "SIGHASH_ANYONECANPAY | " : "";
  switch (e & 31) {
    case st.Transaction.SIGHASH_ALL:
      t += "SIGHASH_ALL";
      break;
    case st.Transaction.SIGHASH_SINGLE:
      t += "SIGHASH_SINGLE";
      break;
    case st.Transaction.SIGHASH_NONE:
      t += "SIGHASH_NONE";
      break;
  }
  return t;
}
function vc(e, t, n) {
  e.__NON_WITNESS_UTXO_BUF_CACHE[n] = t.nonWitnessUtxo;
  const r = st.Transaction.fromBuffer(t.nonWitnessUtxo);
  e.__NON_WITNESS_UTXO_TX_CACHE[n] = r;
  const i = e, o = n;
  delete t.nonWitnessUtxo, Object.defineProperty(t, "nonWitnessUtxo", {
    enumerable: !0,
    get() {
      const s = i.__NON_WITNESS_UTXO_BUF_CACHE[o], c = i.__NON_WITNESS_UTXO_TX_CACHE[o];
      if (s !== void 0)
        return s;
      {
        const u = c.toBuffer();
        return i.__NON_WITNESS_UTXO_BUF_CACHE[o] = u, u;
      }
    },
    set(s) {
      i.__NON_WITNESS_UTXO_BUF_CACHE[o] = s;
    }
  });
}
function ad(e, t, n, r) {
  let i = 0;
  e.forEach((u, d) => {
    if (r && u.finalScriptSig && (t.ins[d].script = u.finalScriptSig), r && u.finalScriptWitness && (t.ins[d].witness = ud(
      u.finalScriptWitness
    )), u.witnessUtxo)
      i += u.witnessUtxo.value;
    else if (u.nonWitnessUtxo) {
      const a = us(n, u, d), g = t.ins[d].index, m = a.outs[g];
      i += m.value;
    }
  });
  const o = t.outs.reduce((u, d) => u + d.value, 0), s = i - o;
  if (s < 0)
    throw new Error("Outputs are spending more than Inputs");
  const c = t.virtualSize();
  n.__FEE = s, n.__EXTRACTED_TX = t, n.__FEE_RATE = Math.floor(s / c);
}
function us(e, t, n) {
  const r = e.__NON_WITNESS_UTXO_TX_CACHE;
  return r[n] || vc(e, t, n), r[n];
}
function ld(e, t, n) {
  const { script: r } = fu(e, t, n);
  return r;
}
function fu(e, t, n) {
  if (t.witnessUtxo !== void 0)
    return {
      script: t.witnessUtxo.script,
      value: t.witnessUtxo.value
    };
  if (t.nonWitnessUtxo !== void 0) {
    const i = us(
      n,
      t,
      e
    ).outs[n.__TX.ins[e].index];
    return { script: i.script, value: i.value };
  } else
    throw new Error("Can't find pubkey in input without Utxo data");
}
function W2(e, t, n, r) {
  const i = ld(n, t, r), { meaningfulScript: o } = as(
    i,
    n,
    "input",
    t.redeemScript,
    t.witnessScript
  );
  return (0, Me.pubkeyInScript)(e, o);
}
function K2(e, t, n, r) {
  const i = r.__TX.outs[n].script, { meaningfulScript: o } = as(
    i,
    n,
    "output",
    t.redeemScript,
    t.witnessScript
  );
  return (0, Me.pubkeyInScript)(e, o);
}
function V2(e) {
  if (!e) return;
  const t = Sn.decompile(e);
  if (!t) return;
  const n = t[t.length - 1];
  if (!(!M.isBuffer(n) || fd(n) || X2(n) || !Sn.decompile(n)))
    return n;
}
function G2(e) {
  if (!e) return;
  const t = ud(e), n = t[t.length - 1];
  if (!(fd(n) || !Sn.decompile(n)))
    return n;
}
function q2(e) {
  if (e.length === 65) {
    const t = e[64] & 1, n = e.slice(0, 33);
    return n[0] = 2 | t, n;
  }
  return e.slice();
}
function fd(e) {
  return e.length === 33 && Sn.isCanonicalPubKey(e);
}
function X2(e) {
  return Sn.isCanonicalScriptSignature(e);
}
function as(e, t, n, r, i) {
  const o = (0, Me.isP2SHScript)(e), s = o && r && (0, Me.isP2WSHScript)(r), c = (0, Me.isP2WSHScript)(e);
  if (o && r === void 0)
    throw new Error("scriptPubkey is P2SH but redeemScript missing");
  if ((c || s) && i === void 0)
    throw new Error(
      "scriptPubkey or redeemScript is P2WSH but witnessScript missing"
    );
  let u;
  return s ? (u = i, Aa(t, e, r, n), ka(t, r, i, n), Fo(u)) : c ? (u = i, ka(t, e, i, n), Fo(u)) : o ? (u = r, Aa(t, e, r, n)) : u = e, {
    meaningfulScript: u,
    type: s ? "p2sh-p2wsh" : o ? "p2sh" : c ? "p2wsh" : "raw"
  };
}
function Fo(e) {
  if ((0, Me.isP2WPKH)(e) || (0, Me.isP2SHScript)(e))
    throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
}
function dd(e) {
  return (0, Me.isP2WPKH)(e) ? "witnesspubkeyhash" : (0, Me.isP2PKH)(e) ? "pubkeyhash" : (0, Me.isP2MS)(e) ? "multisig" : (0, Me.isP2PK)(e) ? "pubkey" : "nonstandard";
}
function wi(e) {
  return [...Array(e).keys()];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initEccLib = e.Transaction = e.opcodes = e.Psbt = e.Block = e.script = e.payments = e.networks = e.crypto = e.address = void 0;
  const t = Jc();
  e.address = t;
  const n = an;
  e.crypto = n;
  const r = Ye;
  e.networks = r;
  const i = Wi();
  e.payments = i;
  const o = yt();
  e.script = o;
  var s = ns;
  Object.defineProperty(e, "Block", {
    enumerable: !0,
    get: function() {
      return s.Block;
    }
  });
  var c = is;
  Object.defineProperty(e, "Psbt", {
    enumerable: !0,
    get: function() {
      return c.Psbt;
    }
  });
  var u = Wn;
  Object.defineProperty(e, "opcodes", {
    enumerable: !0,
    get: function() {
      return u.OPS;
    }
  });
  var d = Gn;
  Object.defineProperty(e, "Transaction", {
    enumerable: !0,
    get: function() {
      return d.Transaction;
    }
  });
  var a = Kn;
  Object.defineProperty(e, "initEccLib", {
    enumerable: !0,
    get: function() {
      return a.initEccLib;
    }
  });
})(Ql);
function aE() {
  const { network: e, publicKey: t, format: n, wallet: r } = sn(), [i, o] = ue(null), [s, c] = ue(!1);
  return { sign: ve(
    async (d, a, g) => {
      c(!0);
      try {
        if (o(null), !n || !t || !r)
          throw new Error("No wallet is connected");
        const m = Ql.Psbt.fromBase64(a), h = await $c({
          address: d,
          wallet: r,
          network: e,
          psbt: m,
          options: g
        });
        return c(!1), h;
      } catch (m) {
        throw o(m.message), c(!1), m;
      }
    },
    [n, e, t, r]
  ), error: i, loading: s };
}
async function z2({
  message: e,
  wallet: t
}) {
  if (t === Lt.UNISAT) {
    const { base64: n } = await Bd(e, "bip322-simple");
    return n;
  }
  throw new Error("Invalid wallet selected");
}
function lE() {
  const {
    network: e,
    wallet: t,
    publicKey: n,
    format: r,
    address: i
  } = sn(), [o, s] = ue(null), [c, u] = ue(!1);
  return { signMsg: ve(
    async (a, g) => {
      u(!0);
      try {
        if (s(null), !r || !n || !t)
          throw new Error("No wallet is connected");
        if (i.ordinals !== a && i.payments !== a)
          throw new Error("Address supplied is not connected address");
        const m = await z2({
          address: a,
          wallet: t,
          message: g,
          network: e,
          format: i.ordinals === a ? r.ordinals : r.payments
        });
        return u(!1), m;
      } catch (m) {
        throw s(m.message), u(!1), m;
      }
    },
    [r, e, n, t, i]
  ), error: o, isLoading: c };
}
export {
  qr as Chain,
  ao as Network,
  rE as OrdConnectKit,
  eE as OrdConnectProvider,
  pm as SelectWalletModal,
  Lt as Wallet,
  iE as useBalance,
  sn as useOrdConnect,
  oE as useSend,
  sE as useSendV2,
  aE as useSign,
  lE as useSignMessage
};
