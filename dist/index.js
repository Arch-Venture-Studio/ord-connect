(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";.ord-connect-wallet-button{color:#000;background-color:#fff;font-weight:700;font-size:14px;line-height:20px;border-radius:40px;padding:10px 16px;border:0px;cursor:pointer}.ord-connect-wallet-button:disabled{background-color:#888;cursor:not-allowed}.ord-connect-wallet-button span:before{content:"Connect"}@media screen and (min-width: 768px){.ord-connect-wallet-button{padding:10px 24px}.ord-connect-wallet-button span:before{content:"Connect wallet"}}.ord-connect-wallet-button:enabled:hover{background-color:#f2f2f2}.ord-connect-wallet-button:enabled:active{opacity:.7}.ord-wallet-connected-container{position:relative;display:inline-block}.ord-wallet-connected-button{border-radius:52px;border:1px solid #8c8c8c;background-color:transparent;padding:8px 12px 8px 8px;display:flex;align-items:center;cursor:pointer}.ord-wallet-connected-button .address-container{display:none}@media screen and (min-width: 768px){.ord-wallet-connected-button .address-container{display:block;margin-left:8px}}.ord-wallet-connected-button .address{color:#fff;font-size:14px;font-weight:700;line-height:20px;margin:0}.ord-wallet-connected-button .network-container{display:flex;align-items:center}.ord-wallet-connected-button .status-indicator{width:8px;height:8px;background:#00ad1d;border-radius:999px;margin-right:8px}.ord-wallet-connected-button .network{color:#ffffff80;margin:0;font-size:12px;font-weight:600;line-height:16px}.ord-wallet-connected-button .wallet-profile-icon{width:28px;height:28px;border-radius:999px;background-color:pink;margin-right:8px}.ord-wallet-connected-button .dropdown-button{transition:transform .3s ease;margin-left:16px}.ord-wallet-connected-button .expand-dropdown-button{width:20px;transform:rotate(0)}.ord-wallet-connected-button .close-dropdown-button{transform:rotate(-180deg)}.ord-wallet-connection-dropdown{background:#121212;border-radius:15px;border:.5px solid rgba(255,255,255,.5);width:256px;position:absolute;top:54px;right:0}.ord-wallet-connection-dropdown .dropdown-button{display:flex;align-items:center;background:transparent;border:0px;cursor:pointer;width:100%;justify-content:space-between}.ord-wallet-connection-dropdown .dropdown-button:hover{background:#ffffff1a}.ord-wallet-connection-dropdown .dropdown-button:hover:first-child{border-top-left-radius:15px;border-top-right-radius:15px}.ord-wallet-connection-dropdown .dropdown-button:hover:last-child{border-bottom-left-radius:15px;border-bottom-right-radius:15px}.ord-wallet-connection-dropdown .dropdown-button:active{background:#ffffff1a;opacity:.7}.ord-wallet-connection-dropdown .dropdown-button:first-child{padding:26px 16px 18px}.ord-wallet-connection-dropdown .dropdown-button:not(:first-child):not(:last-child){padding:9px 16px}.ord-wallet-connection-dropdown .dropdown-button:last-child{padding:18px 16px 26px}.ord-wallet-connection-dropdown .label{color:#fff;font-size:14px;font-weight:600;flex:1 1 0%;text-align:left}.ord-wallet-connection-dropdown .value{color:#a6a6a6}.ord-wallet-connection-dropdown .change-wallet-label{color:#ffffffb3;font-size:14px;font-weight:700;flex:1 1 0%;text-align:right}.ord-wallet-connection-dropdown .profile-item-container{width:100%;display:flex;flex-direction:column}.ord-wallet-connection-dropdown .profile-item-inner-container{display:flex;justify-content:space-between}.ord-wallet-connection-dropdown .offers{font-size:10px;font-weight:700;line-height:12px;letter-spacing:.08em;color:#fff;padding:4px 12px;border-radius:16px;background:#ffffff1a}.ord-wallet-connection-dropdown .horizontal-separator{margin:6px 16px;border:0px;border-top:.5px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal{position:relative;z-index:10}.ord-connect-wallet-modal .backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000080;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.ord-connect-wallet-modal .outer-container{position:fixed;top:0;left:0;overflow-y:auto;width:100%;height:100%}.ord-connect-wallet-modal .inner-container{display:flex;align-items:center;justify-content:center;text-align:center;height:100%}.ord-connect-wallet-modal .panel{width:100%;background-color:#121212;overflow:hidden;text-align:left;height:100%}.ord-connect-wallet-modal .panel-title-container{display:flex;justify-content:space-between;padding:32px 24px 0;align-items:center}.ord-connect-wallet-modal .panel-title{color:#fff;font-size:24px;font-style:normal;font-weight:700;line-height:32px;margin:0}.ord-connect-wallet-modal .unsupported-browser-message{color:#fff}.ord-connect-wallet-modal .close-button{display:inline-flex;background:transparent;border:0px;cursor:pointer}.ord-connect-wallet-modal .panel-content-container{margin:32px 24px 0}.ord-connect-wallet-modal .panel-content-inner-container{border-radius:20px;border:1px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal .wallet-option-button{display:flex;align-items:center;background:transparent;border:0px;color:#fff;font-size:16px;font-weight:600;line-height:20px;width:100%;cursor:pointer}.ord-connect-wallet-modal .wallet-option-button:disabled .chevron-btn{opacity:.3}.waiting-cursor{cursor:wait!important}.wallet-identifier-container{position:relative;display:inline-block}.wallet-identifier-container img{position:absolute;bottom:4px;right:0;width:12px;border-radius:50%;background-color:#000;object-fit:cover}.ord-connect-wallet-modal .option-wrapper{display:flex;align-items:center;justify-content:space-between;padding:16px 4px;width:100%}.ord-connect-wallet-modal .wallet-option-button{padding:8px 16px}.ord-connect-wallet-modal .wallet-option-button:hover{background:#ffffff1a}.ord-connect-wallet-modal .wallet-option-button:active{background:#ffffff1a;opacity:.7}.ord-connect-wallet-modal .wallet-option-button:first-child{padding:16px 16px 8px;border:0px;margin-bottom:0;border-radius:20px 20px 0 0}.ord-connect-wallet-modal .wallet-option-button:last-child{padding:8px 16px 16px;border:0px;margin-bottom:0;border-radius:0 0 20px 20px}.ord-connect-wallet-modal .wallet-option-button:only-child{padding:8px 16px;border:0px;margin-bottom:0;border-radius:20px}.ord-connect-wallet-modal .wallet-icon{width:32px;height:32px}.ord-connect-wallet-modal .wallet-option{flex-grow:1;margin-left:12px;text-align:left}.ord-connect-wallet-modal .wallet-option-connected-address{display:flex;padding:4px 8px;align-items:center;margin-left:4px;margin-right:8px;text-align:left;background-color:#00000080;border-radius:20px;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}.ord-connect-wallet-modal .wallet-option-connected-address .label{margin-left:4px;font-size:12px;font-weight:400;color:#ffffffb3}.ord-connect-wallet-modal .wallet-option-label{font-size:16px;font-weight:600;line-height:20px;margin:0}.ord-connect-wallet-modal .wallet-option-subtitle{font-size:12px;font-weight:400;line-height:16px;color:#8c8c8c;margin:0}.ord-connect-wallet-modal .horizontal-separator{margin:2px 16px;border:0px;border-top:.5px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal .error-message{margin:16px 0 0;color:#e54545;font-size:14px;line-height:20px}.ord-connect-wallet-modal .preferred-label{padding:4px 12px;color:#000000b2;background-color:#ffbf18;font-size:12px;line-height:16px;font-weight:400;border-radius:20px;margin-left:4px;margin-right:8px}@media screen and (min-width: 768px){.ord-connect-wallet-modal .outer-container{top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:auto;border-radius:20px}.ord-connect-wallet-modal .panel{border:1px solid rgba(51,51,51,.5);border-radius:20px}.ord-connect-wallet-modal .panel-title-container{padding:24px 32px 0;border-bottom:0px}.ord-connect-wallet-modal .unsupported-browser-message{font-size:16px;padding-left:24px}.ord-connect-wallet-modal .panel-title{font-size:20px;font-style:normal;font-weight:600;line-height:28px;letter-spacing:.2px}.ord-connect-wallet-modal .panel-content-container{margin:48px 32px 32px}.ord-connect-wallet-modal .wallet-option{margin-left:16px}}@media screen and (min-width: 1080px){.ord-connect-wallet-modal .panel-content-container{margin:48px 32px 32px}.ord-connect-wallet-modal .option-wrapper{padding:16px}.ord-connect-wallet-modal .wallet-option-button{font-size:18px;font-weight:600;line-height:24px}.ord-connect-wallet-modal .wallet-option-button:first-child{padding:16px 16px 8px;border:0px;margin-bottom:0;border-radius:20px 20px 0 0}.ord-connect-wallet-modal .wallet-icon{width:40px;height:40px}.ord-connect-wallet-modal .wallet-option-label{font-size:18px;font-weight:600;line-height:24px}.ord-connect-wallet-modal .wallet-option-connected-address{margin-left:16px;margin-right:16px}.ord-connect-wallet-modal .wallet-option-connected-address .label{font-size:16px}}.ord-connect-font *{font-family:Space Grotesk,sans-serif}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.opacity-0{opacity:0}.opacity-100{opacity:1}.duration-300{transition-duration:.3s}.duration-200{transition-duration:.2s}.scale-95{transform:scale(.95)}.scale-100{transform:scale(1)}')),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import * as xr from "react";
import ie, { useState as Pe, useEffect as Se, useCallback as it, createContext as Lt, useMemo as De, useContext as yt, useLayoutEffect as Pl, useRef as de, forwardRef as bl, Fragment as mt, isValidElement as Sl, cloneElement as vl, createElement as Tl, useReducer as lc, createRef as ns } from "react";
import { BrowserWalletNotInstalledError as _l, getAddressesFromPublicKey as Il, ADDRESS_FORMAT_TO_TYPE as Ol, JsonRpcDatasource as Ss, PSBTBuilder as fc } from "@ordzaar/ordit-sdk";
import { getAddresses as kl, signPsbt as xl, signMessage as Bl, LeatherAddressType as ua } from "@ordzaar/ordit-sdk/leather";
import { getAddresses as Cl, signPsbt as Nl, signMessage as Rl } from "@ordzaar/ordit-sdk/magiceden";
import { getAddresses as Fl, signPsbt as Ul, signMessage as Ll } from "@ordzaar/ordit-sdk/okx";
import { getAddresses as Hl, signPsbt as Ml, signMessage as Dl } from "@ordzaar/ordit-sdk/unisat";
import { getAddresses as $l, signPsbt as jl, signMessage as Kl } from "@ordzaar/ordit-sdk/xverse";
import { createPortal as Wl } from "react-dom";
function Vl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hc = { exports: {} }, Ue = hc.exports = {}, Gt, Xt;
function is() {
  throw new Error("setTimeout has not been defined");
}
function os() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Gt = setTimeout : Gt = is;
  } catch {
    Gt = is;
  }
  try {
    typeof clearTimeout == "function" ? Xt = clearTimeout : Xt = os;
  } catch {
    Xt = os;
  }
})();
function dc(e) {
  if (Gt === setTimeout)
    return setTimeout(e, 0);
  if ((Gt === is || !Gt) && setTimeout)
    return Gt = setTimeout, setTimeout(e, 0);
  try {
    return Gt(e, 0);
  } catch {
    try {
      return Gt.call(null, e, 0);
    } catch {
      return Gt.call(this, e, 0);
    }
  }
}
function Gl(e) {
  if (Xt === clearTimeout)
    return clearTimeout(e);
  if ((Xt === os || !Xt) && clearTimeout)
    return Xt = clearTimeout, clearTimeout(e);
  try {
    return Xt(e);
  } catch {
    try {
      return Xt.call(null, e);
    } catch {
      return Xt.call(this, e);
    }
  }
}
var cr = [], Tn = !1, Wr, ki = -1;
function Xl() {
  !Tn || !Wr || (Tn = !1, Wr.length ? cr = Wr.concat(cr) : ki = -1, cr.length && pc());
}
function pc() {
  if (!Tn) {
    var e = dc(Xl);
    Tn = !0;
    for (var t = cr.length; t; ) {
      for (Wr = cr, cr = []; ++ki < t; )
        Wr && Wr[ki].run();
      ki = -1, t = cr.length;
    }
    Wr = null, Tn = !1, Gl(e);
  }
}
Ue.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  cr.push(new gc(e, t)), cr.length === 1 && !Tn && dc(pc);
};
function gc(e, t) {
  this.fun = e, this.array = t;
}
gc.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Ue.title = "browser";
Ue.browser = !0;
Ue.env = {};
Ue.argv = [];
Ue.version = "";
Ue.versions = {};
function gr() {
}
Ue.on = gr;
Ue.addListener = gr;
Ue.once = gr;
Ue.off = gr;
Ue.removeListener = gr;
Ue.removeAllListeners = gr;
Ue.emit = gr;
Ue.prependListener = gr;
Ue.prependOnceListener = gr;
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
var ql = hc.exports;
const wc = /* @__PURE__ */ Vl(ql);
var Yl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ql(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function zl(e) {
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
var la;
function Jl() {
  if (la) return Un;
  la = 1;
  var e = ie, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, p) {
    var f, d = {}, S = null, m = null;
    p !== void 0 && (S = "" + p), l.key !== void 0 && (S = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (f in l) n.call(l, f) && !o.hasOwnProperty(f) && (d[f] = l[f]);
    if (a && a.defaultProps) for (f in l = a.defaultProps, l) d[f] === void 0 && (d[f] = l[f]);
    return { $$typeof: t, type: a, key: S, ref: m, props: d, _owner: i.current };
  }
  return Un.Fragment = r, Un.jsx = s, Un.jsxs = s, Un;
}
var Ln = {}, fa;
function Zl() {
  return fa || (fa = 1, wc.env.NODE_ENV !== "production" && function() {
    var e = ie, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), B = Symbol.iterator, O = "@@iterator";
    function x(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var V = B && _[B] || _[O];
      return typeof V == "function" ? V : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(_) {
      {
        for (var V = arguments.length, X = new Array(V > 1 ? V - 1 : 0), Z = 1; Z < V; Z++)
          X[Z - 1] = arguments[Z];
        k("error", _, X);
      }
    }
    function k(_, V, X) {
      {
        var Z = $.ReactDebugCurrentFrame, me = Z.getStackAddendum();
        me !== "" && (V += "%s", X = X.concat([me]));
        var Ee = X.map(function(fe) {
          return String(fe);
        });
        Ee.unshift("Warning: " + V), Function.prototype.apply.call(console[_], console, Ee);
      }
    }
    var C = !1, M = !1, F = !1, W = !1, g = !1, h;
    h = Symbol.for("react.module.reference");
    function E(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === n || _ === o || g || _ === i || _ === p || _ === f || W || _ === m || C || M || F || typeof _ == "object" && _ !== null && (_.$$typeof === S || _.$$typeof === d || _.$$typeof === s || _.$$typeof === a || _.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === h || _.getModuleId !== void 0));
    }
    function N(_, V, X) {
      var Z = _.displayName;
      if (Z)
        return Z;
      var me = V.displayName || V.name || "";
      return me !== "" ? X + "(" + me + ")" : X;
    }
    function y(_) {
      return _.displayName || "Context";
    }
    function P(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case a:
            var V = _;
            return y(V) + ".Consumer";
          case s:
            var X = _;
            return y(X._context) + ".Provider";
          case l:
            return N(_, _.render, "ForwardRef");
          case d:
            var Z = _.displayName || null;
            return Z !== null ? Z : P(_.type) || "Memo";
          case S: {
            var me = _, Ee = me._payload, fe = me._init;
            try {
              return P(fe(Ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, v = 0, T, U, L, j, G, q, J;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Q() {
      {
        if (v === 0) {
          T = console.log, U = console.info, L = console.warn, j = console.error, G = console.group, q = console.groupCollapsed, J = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        v++;
      }
    }
    function z() {
      {
        if (v--, v === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, _, {
              value: T
            }),
            info: I({}, _, {
              value: U
            }),
            warn: I({}, _, {
              value: L
            }),
            error: I({}, _, {
              value: j
            }),
            group: I({}, _, {
              value: G
            }),
            groupCollapsed: I({}, _, {
              value: q
            }),
            groupEnd: I({}, _, {
              value: J
            })
          });
        }
        v < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = $.ReactCurrentDispatcher, ve;
    function pt(_, V, X) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (me) {
            var Z = me.stack.trim().match(/\n( *(at )?)/);
            ve = Z && Z[1] || "";
          }
        return `
` + ve + _;
      }
    }
    var At = !1, Et;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      Et = new re();
    }
    function Ne(_, V) {
      if (!_ || At)
        return "";
      {
        var X = Et.get(_);
        if (X !== void 0)
          return X;
      }
      var Z;
      At = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ee;
      Ee = ae.current, ae.current = null, Q();
      try {
        if (V) {
          var fe = function() {
            throw Error();
          };
          if (Object.defineProperty(fe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(fe, []);
            } catch (gt) {
              Z = gt;
            }
            Reflect.construct(_, [], fe);
          } else {
            try {
              fe.call();
            } catch (gt) {
              Z = gt;
            }
            _.call(fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gt) {
            Z = gt;
          }
          _();
        }
      } catch (gt) {
        if (gt && Z && typeof gt.stack == "string") {
          for (var ue = gt.stack.split(`
`), st = Z.stack.split(`
`), Re = ue.length - 1, Le = st.length - 1; Re >= 1 && Le >= 0 && ue[Re] !== st[Le]; )
            Le--;
          for (; Re >= 1 && Le >= 0; Re--, Le--)
            if (ue[Re] !== st[Le]) {
              if (Re !== 1 || Le !== 1)
                do
                  if (Re--, Le--, Le < 0 || ue[Re] !== st[Le]) {
                    var Tt = `
` + ue[Re].replace(" at new ", " at ");
                    return _.displayName && Tt.includes("<anonymous>") && (Tt = Tt.replace("<anonymous>", _.displayName)), typeof _ == "function" && Et.set(_, Tt), Tt;
                  }
                while (Re >= 1 && Le >= 0);
              break;
            }
        }
      } finally {
        At = !1, ae.current = Ee, z(), Error.prepareStackTrace = me;
      }
      var gn = _ ? _.displayName || _.name : "", Mr = gn ? pt(gn) : "";
      return typeof _ == "function" && Et.set(_, Mr), Mr;
    }
    function ge(_, V, X) {
      return Ne(_, !1);
    }
    function Oe(_) {
      var V = _.prototype;
      return !!(V && V.isReactComponent);
    }
    function we(_, V, X) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return Ne(_, Oe(_));
      if (typeof _ == "string")
        return pt(_);
      switch (_) {
        case p:
          return pt("Suspense");
        case f:
          return pt("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case l:
            return ge(_.render);
          case d:
            return we(_.type, V, X);
          case S: {
            var Z = _, me = Z._payload, Ee = Z._init;
            try {
              return we(Ee(me), V, X);
            } catch {
            }
          }
        }
      return "";
    }
    var vt = Object.prototype.hasOwnProperty, mr = {}, hi = $.ReactDebugCurrentFrame;
    function hn(_) {
      if (_) {
        var V = _._owner, X = we(_.type, _._source, V ? V.type : null);
        hi.setExtraStackFrame(X);
      } else
        hi.setExtraStackFrame(null);
    }
    function Rn(_, V, X, Z, me) {
      {
        var Ee = Function.call.bind(vt);
        for (var fe in _)
          if (Ee(_, fe)) {
            var ue = void 0;
            try {
              if (typeof _[fe] != "function") {
                var st = Error((Z || "React class") + ": " + X + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw st.name = "Invariant Violation", st;
              }
              ue = _[fe](V, fe, Z, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Re) {
              ue = Re;
            }
            ue && !(ue instanceof Error) && (hn(me), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", X, fe, typeof ue), hn(null)), ue instanceof Error && !(ue.message in mr) && (mr[ue.message] = !0, hn(me), A("Failed %s type: %s", X, ue.message), hn(null));
          }
      }
    }
    var Po = Array.isArray;
    function Fn(_) {
      return Po(_);
    }
    function di(_) {
      {
        var V = typeof Symbol == "function" && Symbol.toStringTag, X = V && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return X;
      }
    }
    function dn(_) {
      try {
        return Pt(_), !1;
      } catch {
        return !0;
      }
    }
    function Pt(_) {
      return "" + _;
    }
    function pn(_) {
      if (dn(_))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", di(_)), Pt(_);
    }
    var Hr = $.ReactCurrentOwner, Mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pi, w, c;
    c = {};
    function u(_) {
      if (vt.call(_, "ref")) {
        var V = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function b(_) {
      if (vt.call(_, "key")) {
        var V = Object.getOwnPropertyDescriptor(_, "key").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function R(_, V) {
      if (typeof _.ref == "string" && Hr.current && V && Hr.current.stateNode !== V) {
        var X = P(Hr.current.type);
        c[X] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(Hr.current.type), _.ref), c[X] = !0);
      }
    }
    function D(_, V) {
      {
        var X = function() {
          pi || (pi = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        X.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: X,
          configurable: !0
        });
      }
    }
    function K(_, V) {
      {
        var X = function() {
          w || (w = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        X.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: X,
          configurable: !0
        });
      }
    }
    var oe = function(_, V, X, Z, me, Ee, fe) {
      var ue = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: _,
        key: V,
        ref: X,
        props: fe,
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
        value: me
      }), Object.freeze && (Object.freeze(ue.props), Object.freeze(ue)), ue;
    };
    function ke(_, V, X, Z, me) {
      {
        var Ee, fe = {}, ue = null, st = null;
        X !== void 0 && (pn(X), ue = "" + X), b(V) && (pn(V.key), ue = "" + V.key), u(V) && (st = V.ref, R(V, me));
        for (Ee in V)
          vt.call(V, Ee) && !Mt.hasOwnProperty(Ee) && (fe[Ee] = V[Ee]);
        if (_ && _.defaultProps) {
          var Re = _.defaultProps;
          for (Ee in Re)
            fe[Ee] === void 0 && (fe[Ee] = Re[Ee]);
        }
        if (ue || st) {
          var Le = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          ue && D(fe, Le), st && K(fe, Le);
        }
        return oe(_, ue, st, me, Z, Hr.current, fe);
      }
    }
    var ye = $.ReactCurrentOwner, Te = $.ReactDebugCurrentFrame;
    function le(_) {
      if (_) {
        var V = _._owner, X = we(_.type, _._source, V ? V.type : null);
        Te.setExtraStackFrame(X);
      } else
        Te.setExtraStackFrame(null);
    }
    var bo;
    bo = !1;
    function So(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function na() {
      {
        if (ye.current) {
          var _ = P(ye.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function fl(_) {
      return "";
    }
    var ia = {};
    function hl(_) {
      {
        var V = na();
        if (!V) {
          var X = typeof _ == "string" ? _ : _.displayName || _.name;
          X && (V = `

Check the top-level render call using <` + X + ">.");
        }
        return V;
      }
    }
    function oa(_, V) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var X = hl(V);
        if (ia[X])
          return;
        ia[X] = !0;
        var Z = "";
        _ && _._owner && _._owner !== ye.current && (Z = " It was passed a child from " + P(_._owner.type) + "."), le(_), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, Z), le(null);
      }
    }
    function sa(_, V) {
      {
        if (typeof _ != "object")
          return;
        if (Fn(_))
          for (var X = 0; X < _.length; X++) {
            var Z = _[X];
            So(Z) && oa(Z, V);
          }
        else if (So(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var me = x(_);
          if (typeof me == "function" && me !== _.entries)
            for (var Ee = me.call(_), fe; !(fe = Ee.next()).done; )
              So(fe.value) && oa(fe.value, V);
        }
      }
    }
    function dl(_) {
      {
        var V = _.type;
        if (V == null || typeof V == "string")
          return;
        var X;
        if (typeof V == "function")
          X = V.propTypes;
        else if (typeof V == "object" && (V.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        V.$$typeof === d))
          X = V.propTypes;
        else
          return;
        if (X) {
          var Z = P(V);
          Rn(X, _.props, "prop", Z, _);
        } else if (V.PropTypes !== void 0 && !bo) {
          bo = !0;
          var me = P(V);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof V.getDefaultProps == "function" && !V.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pl(_) {
      {
        for (var V = Object.keys(_.props), X = 0; X < V.length; X++) {
          var Z = V[X];
          if (Z !== "children" && Z !== "key") {
            le(_), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), le(null);
            break;
          }
        }
        _.ref !== null && (le(_), A("Invalid attribute `ref` supplied to `React.Fragment`."), le(null));
      }
    }
    var aa = {};
    function ca(_, V, X, Z, me, Ee) {
      {
        var fe = E(_);
        if (!fe) {
          var ue = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var st = fl();
          st ? ue += st : ue += na();
          var Re;
          _ === null ? Re = "null" : Fn(_) ? Re = "array" : _ !== void 0 && _.$$typeof === t ? (Re = "<" + (P(_.type) || "Unknown") + " />", ue = " Did you accidentally export a JSX literal instead of a component?") : Re = typeof _, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Re, ue);
        }
        var Le = ke(_, V, X, me, Ee);
        if (Le == null)
          return Le;
        if (fe) {
          var Tt = V.children;
          if (Tt !== void 0)
            if (Z)
              if (Fn(Tt)) {
                for (var gn = 0; gn < Tt.length; gn++)
                  sa(Tt[gn], _);
                Object.freeze && Object.freeze(Tt);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sa(Tt, _);
        }
        if (vt.call(V, "key")) {
          var Mr = P(_), gt = Object.keys(V).filter(function(El) {
            return El !== "key";
          }), vo = gt.length > 0 ? "{key: someKey, " + gt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!aa[Mr + vo]) {
            var Al = gt.length > 0 ? "{" + gt.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, vo, Mr, Al, Mr), aa[Mr + vo] = !0;
          }
        }
        return _ === n ? pl(Le) : dl(Le), Le;
      }
    }
    function gl(_, V, X) {
      return ca(_, V, X, !0);
    }
    function wl(_, V, X) {
      return ca(_, V, X, !1);
    }
    var ml = wl, yl = gl;
    Ln.Fragment = n, Ln.jsx = ml, Ln.jsxs = yl;
  }()), Ln;
}
wc.env.NODE_ENV === "production" ? ss.exports = Jl() : ss.exports = Zl();
var Y = ss.exports;
function ef() {
  const [e, t] = Pe(!1);
  return Se(() => {
    t(!0);
  }, []), e;
}
const mc = "ord-connect";
function tf(e) {
  typeof window > "u" && console.warn(
    `Attempted to read local storage key ${e} even though environment is not a browser.`
  );
  const t = `${mc}_${e}`;
  try {
    const r = window.localStorage.getItem(t);
    return r != null ? JSON.parse(r) : null;
  } catch (r) {
    return console.error(`Error retrieving ${t} from localStorage`, r), null;
  }
}
function ha(e, t) {
  typeof window > "u" && console.warn(
    `Attempted to set local storage key ${e} even though environment is not a browser.`
  );
  const r = `${mc}_${e}`;
  try {
    t ? window.localStorage.setItem(r, JSON.stringify(t)) : window.localStorage.removeItem(r);
  } catch (n) {
    console.error(`Error saving ${r} to localStorage`, n);
  }
}
function gi(e, t, r = {}) {
  const { initializeWithValue: n = !0 } = r, i = it(() => {
    const l = tf(e);
    return l || (ha(e, t), t);
  }, [t, e]), [o, s] = Pe(() => n ? i() : t), a = it(
    (l) => {
      ha(e, l), s(l);
    },
    [e]
  );
  return Se(() => {
    s(i());
  }, [e]), [o, a];
}
var Zn = /* @__PURE__ */ ((e) => (e.MAINNET = "mainnet", e.TESTNET = "testnet", e.SIGNET = "signet", e))(Zn || {}), ee = /* @__PURE__ */ ((e) => (e.UNISAT = "unisat", e.XVERSE = "xverse", e.MAGICEDEN = "magiceden", e.LEATHER = "leather", e.OKX = "okx", e))(ee || {}), qt = /* @__PURE__ */ ((e) => (e.BITCOIN = "bitcoin", e.FRACTAL_BITCOIN = "fractal-bitcoin", e))(qt || {});
const wn = {
  payments: null,
  ordinals: null
}, yc = Lt(
  void 0
), rf = "address", nf = "wallet", of = "publicKey", sf = "format";
function Bg({
  children: e,
  network: t,
  visibleWallets: r,
  chain: n = "bitcoin",
  ssr: i = !1
}) {
  if (!t)
    throw new Error("Network cannot be empty");
  if (!r || r.length === 0)
    throw new Error("Visible wallets cannot be empty");
  const [o, s] = Pe(t), [a, l] = Pe(r), [p, f] = Pe(n), [d, S] = gi(
    rf,
    wn,
    { initializeWithValue: !i }
  ), [m, B] = gi(nf, null, {
    initializeWithValue: !i
  }), [O, x] = gi(
    of,
    wn,
    { initializeWithValue: !i }
  ), [$, A] = gi(
    sf,
    wn,
    { initializeWithValue: !i }
  ), [k, C] = Pe(!1), M = it(() => C(!0), []), F = it(() => C(!1), []), W = it(() => {
    S(wn), x(wn), A(wn), B(null);
  }, [S, A, x, B]), g = De(
    () => ({
      address: d,
      updateAddress: S,
      publicKey: O,
      updatePublicKey: x,
      network: o,
      updateNetwork: (h) => {
        s(m === "xverse" && h === "testnet" ? "testnet4" : h);
      },
      wallet: m,
      updateWallet: (h) => {
        (o === "testnet" || o === "testnet4") && s(h === "xverse" ? "testnet4" : "testnet"), B(h);
      },
      isModalOpen: k,
      openModal: M,
      closeModal: F,
      format: $,
      updateFormat: A,
      disconnectWallet: W,
      chain: p,
      updateChain: f,
      visibleWallets: a,
      updateVisibleWallets: l
    }),
    [
      d,
      S,
      O,
      x,
      o,
      s,
      m,
      B,
      k,
      M,
      F,
      $,
      A,
      W,
      p,
      f
    ]
  );
  return Se(() => {
    s(t);
  }, [t]), Se(() => {
    p !== n && (W(), f(n));
  }, [n, p, W]), /* @__PURE__ */ Y.jsx(yc.Provider, { value: g, children: e });
}
function zt() {
  const e = yt(yc);
  if (console.log("context", e), !e)
    throw new Error("useOrdConnect must be used within OrdConnectProvider");
  return e;
}
var Ac = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n(ie);
  })(Yl, function(r) {
    return function(n) {
      var i = {};
      function o(s) {
        if (i[s]) return i[s].exports;
        var a = i[s] = { i: s, l: !1, exports: {} };
        return n[s].call(a.exports, a, a.exports, o), a.l = !0, a.exports;
      }
      return o.m = n, o.c = i, o.d = function(s, a, l) {
        o.o(s, a) || Object.defineProperty(s, a, { enumerable: !0, get: l });
      }, o.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, o.t = function(s, a) {
        if (1 & a && (s = o(s)), 8 & a || 4 & a && typeof s == "object" && s && s.__esModule) return s;
        var l = /* @__PURE__ */ Object.create(null);
        if (o.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: s }), 2 & a && typeof s != "string") for (var p in s) o.d(l, p, (function(f) {
          return s[f];
        }).bind(null, p));
        return l;
      }, o.n = function(s) {
        var a = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return o.d(a, "a", a), a;
      }, o.o = function(s, a) {
        return Object.prototype.hasOwnProperty.call(s, a);
      }, o.p = "/", o(o.s = 1);
    }([function(n, i) {
      n.exports = r;
    }, function(n, i, o) {
      n.exports = o(2);
    }, function(n, i, o) {
      function s(A, k) {
        if (A == null) return {};
        var C, M, F = function(g, h) {
          if (g == null) return {};
          var E, N, y = {}, P = Object.keys(g);
          for (N = 0; N < P.length; N++) E = P[N], h.indexOf(E) >= 0 || (y[E] = g[E]);
          return y;
        }(A, k);
        if (Object.getOwnPropertySymbols) {
          var W = Object.getOwnPropertySymbols(A);
          for (M = 0; M < W.length; M++) C = W[M], k.indexOf(C) >= 0 || Object.prototype.propertyIsEnumerable.call(A, C) && (F[C] = A[C]);
        }
        return F;
      }
      o.r(i);
      var a = o(0), l = o.n(a), p = function(A) {
        for (var k = 0, C = 0; C < A.length; C++)
          k = (k << 5) - k + A.charCodeAt(C), k &= k;
        return Math.abs(k);
      }, f = function(A, k) {
        return Math.floor(A / Math.pow(10, k) % 10);
      }, d = function(A, k) {
        return !(f(A, k) % 2);
      }, S = function(A, k, C) {
        var M = A % k;
        return C && f(A, C) % 2 === 0 ? -M : M;
      }, m = function(A, k, C) {
        return k[A % C];
      }, B = function(A) {
        var k = A.name, C = A.colors, M = A.title, F = A.square, W = A.size, g = s(A, ["name", "colors", "title", "square", "size"]), h = function(N, y) {
          var P = p(N), I = y && y.length;
          return Array.from({ length: 3 }, function(v, T) {
            return { color: m(P + T, y, I), translateX: S(P * (T + 1), 8, 1), translateY: S(P * (T + 1), 8, 2), scale: 1.2 + S(P * (T + 1), 4) / 10, rotate: S(P * (T + 1), 360, 1) };
          });
        }(k, C), E = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, g), M && a.createElement("title", null, k), a.createElement("mask", { id: E, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, a.createElement("rect", { width: 80, height: 80, rx: F ? void 0 : 160, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(E, ")") }, a.createElement("rect", { width: 80, height: 80, fill: h[0].color }), a.createElement("path", { filter: "url(#filter_".concat(E, ")"), d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z", fill: h[1].color, transform: "translate(" + h[1].translateX + " " + h[1].translateY + ") rotate(" + h[1].rotate + " 40 40) scale(" + h[2].scale + ")" }), a.createElement("path", { filter: "url(#filter_".concat(E, ")"), style: { mixBlendMode: "overlay" }, d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z", fill: h[2].color, transform: "translate(" + h[2].translateX + " " + h[2].translateY + ") rotate(" + h[2].rotate + " 40 40) scale(" + h[2].scale + ")" })), a.createElement("defs", null, a.createElement("filter", { id: "filter_".concat(E), filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, a.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), a.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), a.createElement("feGaussianBlur", { stdDeviation: 7, result: "effect1_foregroundBlur" }))));
      }, O = { pixel: function(A) {
        var k = A.name, C = A.colors, M = A.title, F = A.square, W = A.size, g = s(A, ["name", "colors", "title", "square", "size"]), h = function(N, y) {
          var P = p(N), I = y && y.length;
          return Array.from({ length: 64 }, function(v, T) {
            return m(P % (T + 1), y, I);
          });
        }(k, C), E = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, g), M && a.createElement("title", null, k), a.createElement("mask", { id: E, "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, a.createElement("rect", { width: 80, height: 80, rx: F ? void 0 : 160, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(E, ")") }, a.createElement("rect", { width: 10, height: 10, fill: h[0] }), a.createElement("rect", { x: 20, width: 10, height: 10, fill: h[1] }), a.createElement("rect", { x: 40, width: 10, height: 10, fill: h[2] }), a.createElement("rect", { x: 60, width: 10, height: 10, fill: h[3] }), a.createElement("rect", { x: 10, width: 10, height: 10, fill: h[4] }), a.createElement("rect", { x: 30, width: 10, height: 10, fill: h[5] }), a.createElement("rect", { x: 50, width: 10, height: 10, fill: h[6] }), a.createElement("rect", { x: 70, width: 10, height: 10, fill: h[7] }), a.createElement("rect", { y: 10, width: 10, height: 10, fill: h[8] }), a.createElement("rect", { y: 20, width: 10, height: 10, fill: h[9] }), a.createElement("rect", { y: 30, width: 10, height: 10, fill: h[10] }), a.createElement("rect", { y: 40, width: 10, height: 10, fill: h[11] }), a.createElement("rect", { y: 50, width: 10, height: 10, fill: h[12] }), a.createElement("rect", { y: 60, width: 10, height: 10, fill: h[13] }), a.createElement("rect", { y: 70, width: 10, height: 10, fill: h[14] }), a.createElement("rect", { x: 20, y: 10, width: 10, height: 10, fill: h[15] }), a.createElement("rect", { x: 20, y: 20, width: 10, height: 10, fill: h[16] }), a.createElement("rect", { x: 20, y: 30, width: 10, height: 10, fill: h[17] }), a.createElement("rect", { x: 20, y: 40, width: 10, height: 10, fill: h[18] }), a.createElement("rect", { x: 20, y: 50, width: 10, height: 10, fill: h[19] }), a.createElement("rect", { x: 20, y: 60, width: 10, height: 10, fill: h[20] }), a.createElement("rect", { x: 20, y: 70, width: 10, height: 10, fill: h[21] }), a.createElement("rect", { x: 40, y: 10, width: 10, height: 10, fill: h[22] }), a.createElement("rect", { x: 40, y: 20, width: 10, height: 10, fill: h[23] }), a.createElement("rect", { x: 40, y: 30, width: 10, height: 10, fill: h[24] }), a.createElement("rect", { x: 40, y: 40, width: 10, height: 10, fill: h[25] }), a.createElement("rect", { x: 40, y: 50, width: 10, height: 10, fill: h[26] }), a.createElement("rect", { x: 40, y: 60, width: 10, height: 10, fill: h[27] }), a.createElement("rect", { x: 40, y: 70, width: 10, height: 10, fill: h[28] }), a.createElement("rect", { x: 60, y: 10, width: 10, height: 10, fill: h[29] }), a.createElement("rect", { x: 60, y: 20, width: 10, height: 10, fill: h[30] }), a.createElement("rect", { x: 60, y: 30, width: 10, height: 10, fill: h[31] }), a.createElement("rect", { x: 60, y: 40, width: 10, height: 10, fill: h[32] }), a.createElement("rect", { x: 60, y: 50, width: 10, height: 10, fill: h[33] }), a.createElement("rect", { x: 60, y: 60, width: 10, height: 10, fill: h[34] }), a.createElement("rect", { x: 60, y: 70, width: 10, height: 10, fill: h[35] }), a.createElement("rect", { x: 10, y: 10, width: 10, height: 10, fill: h[36] }), a.createElement("rect", { x: 10, y: 20, width: 10, height: 10, fill: h[37] }), a.createElement("rect", { x: 10, y: 30, width: 10, height: 10, fill: h[38] }), a.createElement("rect", { x: 10, y: 40, width: 10, height: 10, fill: h[39] }), a.createElement("rect", { x: 10, y: 50, width: 10, height: 10, fill: h[40] }), a.createElement("rect", { x: 10, y: 60, width: 10, height: 10, fill: h[41] }), a.createElement("rect", { x: 10, y: 70, width: 10, height: 10, fill: h[42] }), a.createElement("rect", { x: 30, y: 10, width: 10, height: 10, fill: h[43] }), a.createElement("rect", { x: 30, y: 20, width: 10, height: 10, fill: h[44] }), a.createElement("rect", { x: 30, y: 30, width: 10, height: 10, fill: h[45] }), a.createElement("rect", { x: 30, y: 40, width: 10, height: 10, fill: h[46] }), a.createElement("rect", { x: 30, y: 50, width: 10, height: 10, fill: h[47] }), a.createElement("rect", { x: 30, y: 60, width: 10, height: 10, fill: h[48] }), a.createElement("rect", { x: 30, y: 70, width: 10, height: 10, fill: h[49] }), a.createElement("rect", { x: 50, y: 10, width: 10, height: 10, fill: h[50] }), a.createElement("rect", { x: 50, y: 20, width: 10, height: 10, fill: h[51] }), a.createElement("rect", { x: 50, y: 30, width: 10, height: 10, fill: h[52] }), a.createElement("rect", { x: 50, y: 40, width: 10, height: 10, fill: h[53] }), a.createElement("rect", { x: 50, y: 50, width: 10, height: 10, fill: h[54] }), a.createElement("rect", { x: 50, y: 60, width: 10, height: 10, fill: h[55] }), a.createElement("rect", { x: 50, y: 70, width: 10, height: 10, fill: h[56] }), a.createElement("rect", { x: 70, y: 10, width: 10, height: 10, fill: h[57] }), a.createElement("rect", { x: 70, y: 20, width: 10, height: 10, fill: h[58] }), a.createElement("rect", { x: 70, y: 30, width: 10, height: 10, fill: h[59] }), a.createElement("rect", { x: 70, y: 40, width: 10, height: 10, fill: h[60] }), a.createElement("rect", { x: 70, y: 50, width: 10, height: 10, fill: h[61] }), a.createElement("rect", { x: 70, y: 60, width: 10, height: 10, fill: h[62] }), a.createElement("rect", { x: 70, y: 70, width: 10, height: 10, fill: h[63] })));
      }, bauhaus: function(A) {
        var k = A.name, C = A.colors, M = A.title, F = A.square, W = A.size, g = s(A, ["name", "colors", "title", "square", "size"]), h = function(N, y) {
          var P = p(N), I = y && y.length;
          return Array.from({ length: 4 }, function(v, T) {
            return { color: m(P + T, y, I), translateX: S(P * (T + 1), 40 - (T + 17), 1), translateY: S(P * (T + 1), 40 - (T + 17), 2), rotate: S(P * (T + 1), 360), isSquare: d(P, 2) };
          });
        }(k, C), E = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, g), M && a.createElement("title", null, k), a.createElement("mask", { id: E, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, a.createElement("rect", { width: 80, height: 80, rx: F ? void 0 : 160, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(E, ")") }, a.createElement("rect", { width: 80, height: 80, fill: h[0].color }), a.createElement("rect", { x: 10, y: 30, width: 80, height: h[1].isSquare ? 80 : 10, fill: h[1].color, transform: "translate(" + h[1].translateX + " " + h[1].translateY + ") rotate(" + h[1].rotate + " 40 40)" }), a.createElement("circle", { cx: 40, cy: 40, fill: h[2].color, r: 16, transform: "translate(" + h[2].translateX + " " + h[2].translateY + ")" }), a.createElement("line", { x1: 0, y1: 40, x2: 80, y2: 40, strokeWidth: 2, stroke: h[3].color, transform: "translate(" + h[3].translateX + " " + h[3].translateY + ") rotate(" + h[3].rotate + " 40 40)" })));
      }, ring: function(A) {
        var k = A.name, C = A.colors, M = A.title, F = A.square, W = A.size, g = s(A, ["name", "colors", "title", "square", "size"]), h = function(N, y) {
          var P = p(y), I = N && N.length, v = Array.from({ length: 5 }, function(U, L) {
            return m(P + L, N, I);
          }), T = [];
          return T[0] = v[0], T[1] = v[1], T[2] = v[1], T[3] = v[2], T[4] = v[2], T[5] = v[3], T[6] = v[3], T[7] = v[0], T[8] = v[4], T;
        }(C, k), E = l.a.useId();
        return l.a.createElement("svg", Object.assign({ viewBox: "0 0 90 90", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, g), M && l.a.createElement("title", null, k), l.a.createElement("mask", { id: E, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 90, height: 90 }, l.a.createElement("rect", { width: 90, height: 90, rx: F ? void 0 : 180, fill: "#FFFFFF" })), l.a.createElement("g", { mask: "url(#".concat(E, ")") }, l.a.createElement("path", { d: "M0 0h90v45H0z", fill: h[0] }), l.a.createElement("path", { d: "M0 45h90v45H0z", fill: h[1] }), l.a.createElement("path", { d: "M83 45a38 38 0 00-76 0h76z", fill: h[2] }), l.a.createElement("path", { d: "M83 45a38 38 0 01-76 0h76z", fill: h[3] }), l.a.createElement("path", { d: "M77 45a32 32 0 10-64 0h64z", fill: h[4] }), l.a.createElement("path", { d: "M77 45a32 32 0 11-64 0h64z", fill: h[5] }), l.a.createElement("path", { d: "M71 45a26 26 0 00-52 0h52z", fill: h[6] }), l.a.createElement("path", { d: "M71 45a26 26 0 01-52 0h52z", fill: h[7] }), l.a.createElement("circle", { cx: 45, cy: 45, r: 23, fill: h[8] })));
      }, beam: function(A) {
        var k = A.name, C = A.colors, M = A.title, F = A.square, W = A.size, g = s(A, ["name", "colors", "title", "square", "size"]), h = function(N, y) {
          var P, I = p(N), v = y && y.length, T = m(I, y, v), U = S(I, 10, 1), L = U < 5 ? U + 4 : U, j = S(I, 10, 2), G = j < 5 ? j + 4 : j;
          return { wrapperColor: T, faceColor: (P = T, P.slice(0, 1) === "#" && (P = P.slice(1)), (299 * parseInt(P.substr(0, 2), 16) + 587 * parseInt(P.substr(2, 2), 16) + 114 * parseInt(P.substr(4, 2), 16)) / 1e3 >= 128 ? "#000000" : "#FFFFFF"), backgroundColor: m(I + 13, y, v), wrapperTranslateX: L, wrapperTranslateY: G, wrapperRotate: S(I, 360), wrapperScale: 1 + S(I, 3) / 10, isMouthOpen: d(I, 2), isCircle: d(I, 1), eyeSpread: S(I, 5), mouthSpread: S(I, 3), faceRotate: S(I, 10, 3), faceTranslateX: L > 6 ? L / 2 : S(I, 8, 1), faceTranslateY: G > 6 ? G / 2 : S(I, 7, 2) };
        }(k, C), E = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 36 36", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, g), M && a.createElement("title", null, k), a.createElement("mask", { id: E, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 36, height: 36 }, a.createElement("rect", { width: 36, height: 36, rx: F ? void 0 : 72, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(E, ")") }, a.createElement("rect", { width: 36, height: 36, fill: h.backgroundColor }), a.createElement("rect", { x: "0", y: "0", width: 36, height: 36, transform: "translate(" + h.wrapperTranslateX + " " + h.wrapperTranslateY + ") rotate(" + h.wrapperRotate + " 18 18) scale(" + h.wrapperScale + ")", fill: h.wrapperColor, rx: h.isCircle ? 36 : 6 }), a.createElement("g", { transform: "translate(" + h.faceTranslateX + " " + h.faceTranslateY + ") rotate(" + h.faceRotate + " 18 18)" }, h.isMouthOpen ? a.createElement("path", { d: "M15 " + (19 + h.mouthSpread) + "c2 1 4 1 6 0", stroke: h.faceColor, fill: "none", strokeLinecap: "round" }) : a.createElement("path", { d: "M13," + (19 + h.mouthSpread) + " a1,0.75 0 0,0 10,0", fill: h.faceColor }), a.createElement("rect", { x: 14 - h.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: h.faceColor }), a.createElement("rect", { x: 20 + h.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: h.faceColor }))));
      }, sunset: function(A) {
        var k = A.name, C = A.colors, M = A.title, F = A.square, W = A.size, g = s(A, ["name", "colors", "title", "square", "size"]), h = function(y, P) {
          var I = p(y), v = P && P.length;
          return Array.from({ length: 4 }, function(T, U) {
            return m(I + U, P, v);
          });
        }(k, C), E = k.replace(/\s/g, ""), N = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: W, height: W }, g), M && a.createElement("title", null, k), a.createElement("mask", { id: N, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, a.createElement("rect", { width: 80, height: 80, rx: F ? void 0 : 160, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(N, ")") }, a.createElement("path", { fill: "url(#gradient_paint0_linear_" + E + ")", d: "M0 0h80v40H0z" }), a.createElement("path", { fill: "url(#gradient_paint1_linear_" + E + ")", d: "M0 40h80v40H0z" })), a.createElement("defs", null, a.createElement("linearGradient", { id: "gradient_paint0_linear_" + E, x1: 40, y1: 0, x2: 40, y2: 40, gradientUnits: "userSpaceOnUse" }, a.createElement("stop", { stopColor: h[0] }), a.createElement("stop", { offset: 1, stopColor: h[1] })), a.createElement("linearGradient", { id: "gradient_paint1_linear_" + E, x1: 40, y1: 40, x2: 40, y2: 80, gradientUnits: "userSpaceOnUse" }, a.createElement("stop", { stopColor: h[2] }), a.createElement("stop", { offset: 1, stopColor: h[3] }))));
      }, marble: B }, x = { geometric: "beam", abstract: "bauhaus" }, $ = function(A) {
        var k = A.variant, C = k === void 0 ? "marble" : k, M = A.colors, F = M === void 0 ? ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"] : M, W = A.name, g = W === void 0 ? "Clara Barton" : W, h = A.title, E = h !== void 0 && h, N = A.size, y = A.square, P = y !== void 0 && y, I = s(A, ["variant", "colors", "name", "title", "size", "square"]), v = O[x[C] || C] || B;
        return l.a.createElement(v, Object.assign({ colors: F, name: g, title: E, size: N, square: P }, I));
      };
      i.default = $;
    }]);
  });
})(Ac);
var af = Ac.exports;
const Ec = /* @__PURE__ */ Ql(af);
var cf = Object.defineProperty, uf = (e, t, r) => t in e ? cf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, To = (e, t, r) => (uf(e, typeof t != "symbol" ? t + "" : t, r), r);
let lf = class {
  constructor() {
    To(this, "current", this.detect()), To(this, "handoffState", "pending"), To(this, "currentId", 0);
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
}, ur = new lf(), qe = (e, t) => {
  ur.isServer ? Se(e, t) : Pl(e, t);
};
function lr(e) {
  let t = de(e);
  return qe(() => {
    t.current = e;
  }, [e]), t;
}
let ce = function(e) {
  let t = lr(e);
  return ie.useCallback((...r) => t.current(...r), [t]);
};
function Xi(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Ut() {
  let e = [], t = { addEventListener(r, n, i, o) {
    return r.addEventListener(n, i, o), t.add(() => r.removeEventListener(n, i, o));
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
    return Xi(() => {
      n.current && r[0]();
    }), t.add(() => {
      n.current = !1;
    });
  }, style(r, n, i) {
    let o = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: i }), this.add(() => {
      Object.assign(r.style, { [n]: o });
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
function oi() {
  let [e] = Pe(Ut);
  return Se(() => () => e.dispose(), [e]), e;
}
function ff() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in xr ? ((t) => t.useSyncExternalStore)(xr)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Cn() {
  let e = ff(), [t, r] = xr.useState(ur.isHandoffComplete);
  return t && ur.isHandoffComplete === !1 && r(!1), xr.useEffect(() => {
    t !== !0 && r(!0);
  }, [t]), xr.useEffect(() => ur.handoff(), []), e ? !1 : t;
}
var da;
let wr = (da = ie.useId) != null ? da : function() {
  let e = Cn(), [t, r] = ie.useState(e ? () => ur.nextId() : null);
  return qe(() => {
    t === null && r(ur.nextId());
  }, [t]), t != null ? "" + t : void 0;
};
function Xe(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Xe), n;
}
function qi(e) {
  return ur.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
let as = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var sr = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(sr || {}), Pc = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Pc || {}), hf = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(hf || {});
function bc(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(as)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var vs = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(vs || {});
function Ts(e, t = 0) {
  var r;
  return e === ((r = qi(e)) == null ? void 0 : r.body) ? !1 : Xe(t, { 0() {
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
function Sc(e) {
  let t = qi(e);
  Ut().nextFrame(() => {
    t && !Ts(t.activeElement, 0) && Br(e);
  });
}
var df = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(df || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Br(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let pf = ["textarea", "input"].join(",");
function gf(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, pf)) != null ? r : !1;
}
function vc(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), o = t(n);
    if (i === null || o === null) return 0;
    let s = i.compareDocumentPosition(o);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function wf(e, t) {
  return ei(bc(), t, { relativeTo: e });
}
function ei(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  let o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? r ? vc(e) : e : bc(e);
  i.length > 0 && s.length > 1 && (s = s.filter((m) => !i.includes(m))), n = n ?? o.activeElement;
  let a = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, s.indexOf(n)) - 1;
    if (t & 4) return Math.max(0, s.indexOf(n)) + 1;
    if (t & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = t & 32 ? { preventScroll: !0 } : {}, f = 0, d = s.length, S;
  do {
    if (f >= d || f + d <= 0) return 0;
    let m = l + f;
    if (t & 16) m = (m + d) % d;
    else {
      if (m < 0) return 3;
      if (m >= d) return 1;
    }
    S = s[m], S == null || S.focus(p), f += a;
  } while (S !== o.activeElement);
  return t & 6 && gf(S) && S.select(), 2;
}
function Tc() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function mf() {
  return /Android/gi.test(window.navigator.userAgent);
}
function yf() {
  return Tc() || mf();
}
function wi(e, t, r) {
  let n = lr(t);
  Se(() => {
    function i(o) {
      n.current(o);
    }
    return document.addEventListener(e, i, r), () => document.removeEventListener(e, i, r);
  }, [e, r]);
}
function _c(e, t, r) {
  let n = lr(t);
  Se(() => {
    function i(o) {
      n.current(o);
    }
    return window.addEventListener(e, i, r), () => window.removeEventListener(e, i, r);
  }, [e, r]);
}
function Ic(e, t, r = !0) {
  let n = de(!1);
  Se(() => {
    requestAnimationFrame(() => {
      n.current = r;
    });
  }, [r]);
  function i(s, a) {
    if (!n.current || s.defaultPrevented) return;
    let l = a(s);
    if (l === null || !l.getRootNode().contains(l) || !l.isConnected) return;
    let p = function f(d) {
      return typeof d == "function" ? f(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let f of p) {
      if (f === null) continue;
      let d = f instanceof HTMLElement ? f : f.current;
      if (d != null && d.contains(l) || s.composed && s.composedPath().includes(d)) return;
    }
    return !Ts(l, vs.Loose) && l.tabIndex !== -1 && s.preventDefault(), t(s, l);
  }
  let o = de(null);
  wi("pointerdown", (s) => {
    var a, l;
    n.current && (o.current = ((l = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : l[0]) || s.target);
  }, !0), wi("mousedown", (s) => {
    var a, l;
    n.current && (o.current = ((l = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : l[0]) || s.target);
  }, !0), wi("click", (s) => {
    yf() || o.current && (i(s, () => o.current), o.current = null);
  }, !0), wi("touchend", (s) => i(s, () => s.target instanceof HTMLElement ? s.target : null), !0), _c("blur", (s) => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Nn(...e) {
  return De(() => qi(...e), [...e]);
}
function pa(e) {
  var t;
  if (e.type) return e.type;
  let r = (t = e.as) != null ? t : "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function Af(e, t) {
  let [r, n] = Pe(() => pa(e));
  return qe(() => {
    n(pa(e));
  }, [e.type, e.as]), qe(() => {
    r || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && n("button");
  }, [r, t]), r;
}
let Oc = Symbol();
function Ef(e, t = !0) {
  return Object.assign(e, { [Oc]: t });
}
function ht(...e) {
  let t = de(e);
  Se(() => {
    t.current = e;
  }, [e]);
  let r = ce((n) => {
    for (let i of t.current) i != null && (typeof i == "function" ? i(n) : i.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[Oc])) ? void 0 : r;
}
function ga(e) {
  return [e.screenX, e.screenY];
}
function Pf() {
  let e = de([-1, -1]);
  return { wasMoved(t) {
    let r = ga(t);
    return e.current[0] === r[0] && e.current[1] === r[1] ? !1 : (e.current = r, !0);
  }, update(t) {
    e.current = ga(t);
  } };
}
function bf({ container: e, accept: t, walk: r, enabled: n = !0 }) {
  let i = de(t), o = de(r);
  Se(() => {
    i.current = t, o.current = r;
  }, [t, r]), qe(() => {
    if (!e || !n) return;
    let s = qi(e);
    if (!s) return;
    let a = i.current, l = o.current, p = Object.assign((d) => a(d), { acceptNode: a }), f = s.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, p, !1);
    for (; f.nextNode(); ) l(f.currentNode);
  }, [e, n, i, o]);
}
function _s(e, t) {
  let r = de([]), n = ce(e);
  Se(() => {
    let i = [...r.current];
    for (let [o, s] of t.entries()) if (r.current[o] !== s) {
      let a = n(t, i);
      return r.current = t, a;
    }
  }, [n, ...t]);
}
function Ui(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var kn = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(kn || {}), Or = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Or || {});
function ot({ ourProps: e, theirProps: t, slot: r, defaultTag: n, features: i, visible: o = !0, name: s, mergeRefs: a }) {
  a = a ?? Sf;
  let l = kc(t, e);
  if (o) return mi(l, r, n, s, a);
  let p = i ?? 0;
  if (p & 2) {
    let { static: f = !1, ...d } = l;
    if (f) return mi(d, r, n, s, a);
  }
  if (p & 1) {
    let { unmount: f = !0, ...d } = l;
    return Xe(f ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return mi({ ...d, hidden: !0, style: { display: "none" } }, r, n, s, a);
    } });
  }
  return mi(l, r, n, s, a);
}
function mi(e, t = {}, r, n, i) {
  let { as: o = r, children: s, refName: a = "ref", ...l } = _o(e, ["unmount", "static"]), p = e.ref !== void 0 ? { [a]: e.ref } : {}, f = typeof s == "function" ? s(t) : s;
  "className" in l && l.className && typeof l.className == "function" && (l.className = l.className(t));
  let d = {};
  if (t) {
    let S = !1, m = [];
    for (let [B, O] of Object.entries(t)) typeof O == "boolean" && (S = !0), O === !0 && m.push(B);
    S && (d["data-headlessui-state"] = m.join(" "));
  }
  if (o === mt && Object.keys(wa(l)).length > 0) {
    if (!Sl(f) || Array.isArray(f) && f.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l).map((O) => `  - ${O}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((O) => `  - ${O}`).join(`
`)].join(`
`));
    let S = f.props, m = typeof (S == null ? void 0 : S.className) == "function" ? (...O) => Ui(S == null ? void 0 : S.className(...O), l.className) : Ui(S == null ? void 0 : S.className, l.className), B = m ? { className: m } : {};
    return vl(f, Object.assign({}, kc(f.props, wa(_o(l, ["ref"]))), d, p, { ref: i(f.ref, p.ref) }, B));
  }
  return Tl(o, Object.assign({}, _o(l, ["ref"]), o !== mt && p, o !== mt && d), f);
}
function Sf(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e) r != null && (typeof r == "function" ? r(t) : r.current = t);
  };
}
function kc(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, r = {};
  for (let n of e) for (let i in n) i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r) Object.assign(t, { [n](i, ...o) {
    let s = r[n];
    for (let a of s) {
      if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented) return;
      a(i, ...o);
    }
  } });
  return t;
}
function tt(e) {
  var t;
  return Object.assign(bl(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function wa(e) {
  let t = Object.assign({}, e);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function _o(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t) n in r && delete r[n];
  return r;
}
let vf = "div";
var Li = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Li || {});
function Tf(e, t) {
  var r;
  let { features: n = 1, ...i } = e, o = { ref: t, "aria-hidden": (n & 2) === 2 ? !0 : (r = i["aria-hidden"]) != null ? r : void 0, hidden: (n & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return ot({ ourProps: o, theirProps: i, slot: {}, defaultTag: vf, name: "Hidden" });
}
let cs = tt(Tf), Is = Lt(null);
Is.displayName = "OpenClosedContext";
var et = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(et || {});
function Yi() {
  return yt(Is);
}
function xc({ value: e, children: t }) {
  return ie.createElement(Is.Provider, { value: e }, t);
}
function _f(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Ir = [];
_f(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Ir[0] !== t.target && (Ir.unshift(t.target), Ir = Ir.filter((r) => r != null && r.isConnected), Ir.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Bc(e) {
  let t = e.parentElement, r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
  let n = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return n && If(r) ? !1 : n;
}
function If(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
function Of(e) {
  throw new Error("Unexpected object: " + e);
}
var Ft = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Ft || {});
function kf(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0) return null;
  let n = t.resolveActiveIndex(), i = n ?? -1;
  switch (e.focus) {
    case 0: {
      for (let o = 0; o < r.length; ++o) if (!t.resolveDisabled(r[o], o, r)) return o;
      return n;
    }
    case 1: {
      for (let o = i - 1; o >= 0; --o) if (!t.resolveDisabled(r[o], o, r)) return o;
      return n;
    }
    case 2: {
      for (let o = i + 1; o < r.length; ++o) if (!t.resolveDisabled(r[o], o, r)) return o;
      return n;
    }
    case 3: {
      for (let o = r.length - 1; o >= 0; --o) if (!t.resolveDisabled(r[o], o, r)) return o;
      return n;
    }
    case 4: {
      for (let o = 0; o < r.length; ++o) if (t.resolveId(r[o], o, r) === e.id) return o;
      return n;
    }
    case 5:
      return null;
    default:
      Of(e);
  }
}
var Ve = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ve || {});
function Cc(e, t, r, n) {
  let i = lr(r);
  Se(() => {
    e = e ?? window;
    function o(s) {
      i.current(s);
    }
    return e.addEventListener(t, o, n), () => e.removeEventListener(t, o, n);
  }, [e, t, n]);
}
function si() {
  let e = de(!1);
  return qe(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Nc(e) {
  let t = ce(e), r = de(!1);
  Se(() => (r.current = !1, () => {
    r.current = !0, Xi(() => {
      r.current && t();
    });
  }), [t]);
}
var Xn = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Xn || {});
function xf() {
  let e = de(0);
  return _c("keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Rc(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let r of e.current) r.current instanceof HTMLElement && t.add(r.current);
  return t;
}
let Bf = "div";
var Fc = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Fc || {});
function Cf(e, t) {
  let r = de(null), n = ht(r, t), { initialFocus: i, containers: o, features: s = 30, ...a } = e;
  Cn() || (s = 1);
  let l = Nn(r);
  Ff({ ownerDocument: l }, !!(s & 16));
  let p = Uf({ ownerDocument: l, container: r, initialFocus: i }, !!(s & 2));
  Lf({ ownerDocument: l, container: r, containers: o, previousActiveElement: p }, !!(s & 8));
  let f = xf(), d = ce((O) => {
    let x = r.current;
    x && (($) => $())(() => {
      Xe(f.current, { [Xn.Forwards]: () => {
        ei(x, sr.First, { skipElements: [O.relatedTarget] });
      }, [Xn.Backwards]: () => {
        ei(x, sr.Last, { skipElements: [O.relatedTarget] });
      } });
    });
  }), S = oi(), m = de(!1), B = { ref: n, onKeyDown(O) {
    O.key == "Tab" && (m.current = !0, S.requestAnimationFrame(() => {
      m.current = !1;
    }));
  }, onBlur(O) {
    let x = Rc(o);
    r.current instanceof HTMLElement && x.add(r.current);
    let $ = O.relatedTarget;
    $ instanceof HTMLElement && $.dataset.headlessuiFocusGuard !== "true" && (Uc(x, $) || (m.current ? ei(r.current, Xe(f.current, { [Xn.Forwards]: () => sr.Next, [Xn.Backwards]: () => sr.Previous }) | sr.WrapAround, { relativeTo: O.target }) : O.target instanceof HTMLElement && Br(O.target)));
  } };
  return ie.createElement(ie.Fragment, null, !!(s & 4) && ie.createElement(cs, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Li.Focusable }), ot({ ourProps: B, theirProps: a, defaultTag: Bf, name: "FocusTrap" }), !!(s & 4) && ie.createElement(cs, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: Li.Focusable }));
}
let Nf = tt(Cf), Hn = Object.assign(Nf, { features: Fc });
function Rf(e = !0) {
  let t = de(Ir.slice());
  return _s(([r], [n]) => {
    n === !0 && r === !1 && Xi(() => {
      t.current.splice(0);
    }), n === !1 && r === !0 && (t.current = Ir.slice());
  }, [e, Ir, t]), ce(() => {
    var r;
    return (r = t.current.find((n) => n != null && n.isConnected)) != null ? r : null;
  });
}
function Ff({ ownerDocument: e }, t) {
  let r = Rf(t);
  _s(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && Br(r());
  }, [t]), Nc(() => {
    t && Br(r());
  });
}
function Uf({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = de(null), o = si();
  return _s(() => {
    if (!n) return;
    let s = t.current;
    s && Xi(() => {
      if (!o.current) return;
      let a = e == null ? void 0 : e.activeElement;
      if (r != null && r.current) {
        if ((r == null ? void 0 : r.current) === a) {
          i.current = a;
          return;
        }
      } else if (s.contains(a)) {
        i.current = a;
        return;
      }
      r != null && r.current ? Br(r.current) : ei(s, sr.First) === Pc.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = e == null ? void 0 : e.activeElement;
    });
  }, [n]), i;
}
function Lf({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  let o = si();
  Cc(e == null ? void 0 : e.defaultView, "focus", (s) => {
    if (!i || !o.current) return;
    let a = Rc(r);
    t.current instanceof HTMLElement && a.add(t.current);
    let l = n.current;
    if (!l) return;
    let p = s.target;
    p && p instanceof HTMLElement ? Uc(a, p) ? (n.current = p, Br(p)) : (s.preventDefault(), s.stopPropagation(), Br(l)) : Br(n.current);
  }, !0);
}
function Uc(e, t) {
  for (let r of e) if (r.contains(t)) return !0;
  return !1;
}
let Lc = Lt(!1);
function Hf() {
  return yt(Lc);
}
function us(e) {
  return ie.createElement(Lc.Provider, { value: e.force }, e.children);
}
function Mf(e) {
  let t = Hf(), r = yt(Hc), n = Nn(e), [i, o] = Pe(() => {
    if (!t && r !== null || ur.isServer) return null;
    let s = n == null ? void 0 : n.getElementById("headlessui-portal-root");
    if (s) return s;
    if (n === null) return null;
    let a = n.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(a);
  });
  return Se(() => {
    i !== null && (n != null && n.body.contains(i) || n == null || n.body.appendChild(i));
  }, [i, n]), Se(() => {
    t || r !== null && o(r.current);
  }, [r, o, t]), i;
}
let Df = mt;
function $f(e, t) {
  let r = e, n = de(null), i = ht(Ef((f) => {
    n.current = f;
  }), t), o = Nn(n), s = Mf(n), [a] = Pe(() => {
    var f;
    return ur.isServer ? null : (f = o == null ? void 0 : o.createElement("div")) != null ? f : null;
  }), l = yt(ls), p = Cn();
  return qe(() => {
    !s || !a || s.contains(a) || (a.setAttribute("data-headlessui-portal", ""), s.appendChild(a));
  }, [s, a]), qe(() => {
    if (a && l) return l.register(a);
  }, [l, a]), Nc(() => {
    var f;
    !s || !a || (a instanceof Node && s.contains(a) && s.removeChild(a), s.childNodes.length <= 0 && ((f = s.parentElement) == null || f.removeChild(s)));
  }), p ? !s || !a ? null : Wl(ot({ ourProps: { ref: i }, theirProps: r, defaultTag: Df, name: "Portal" }), a) : null;
}
let jf = mt, Hc = Lt(null);
function Kf(e, t) {
  let { target: r, ...n } = e, i = { ref: ht(t) };
  return ie.createElement(Hc.Provider, { value: r }, ot({ ourProps: i, theirProps: n, defaultTag: jf, name: "Popover.Group" }));
}
let ls = Lt(null);
function Wf() {
  let e = yt(ls), t = de([]), r = ce((o) => (t.current.push(o), e && e.register(o), () => n(o))), n = ce((o) => {
    let s = t.current.indexOf(o);
    s !== -1 && t.current.splice(s, 1), e && e.unregister(o);
  }), i = De(() => ({ register: r, unregister: n, portals: t }), [r, n, t]);
  return [t, De(() => function({ children: o }) {
    return ie.createElement(ls.Provider, { value: i }, o);
  }, [i])];
}
let Vf = tt($f), Gf = tt(Kf), fs = Object.assign(Vf, { Group: Gf });
function Xf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const qf = typeof Object.is == "function" ? Object.is : Xf, { useState: Yf, useEffect: Qf, useLayoutEffect: zf, useDebugValue: Jf } = xr;
function Zf(e, t, r) {
  const n = t(), [{ inst: i }, o] = Yf({ inst: { value: n, getSnapshot: t } });
  return zf(() => {
    i.value = n, i.getSnapshot = t, Io(i) && o({ inst: i });
  }, [e, n, t]), Qf(() => (Io(i) && o({ inst: i }), e(() => {
    Io(i) && o({ inst: i });
  })), [e]), Jf(n), n;
}
function Io(e) {
  const t = e.getSnapshot, r = e.value;
  try {
    const n = t();
    return !qf(r, n);
  } catch {
    return !0;
  }
}
function e0(e, t, r) {
  return t();
}
const t0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", r0 = !t0, n0 = r0 ? e0 : Zf, i0 = "useSyncExternalStore" in xr ? ((e) => e.useSyncExternalStore)(xr) : n0;
function o0(e) {
  return i0(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function s0(e, t) {
  let r = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return n.add(i), () => n.delete(i);
  }, dispatch(i, ...o) {
    let s = t[i].call(r, ...o);
    s && (r = s, n.forEach((a) => a()));
  } };
}
function a0() {
  let e;
  return { before({ doc: t }) {
    var r;
    let n = t.documentElement;
    e = ((r = t.defaultView) != null ? r : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: r }) {
    let n = t.documentElement, i = n.clientWidth - n.offsetWidth, o = e - i;
    r.style(n, "paddingRight", `${o}px`);
  } };
}
function c0() {
  return Tc() ? { before({ doc: e, d: t, meta: r }) {
    function n(i) {
      return r.containers.flatMap((o) => o()).some((o) => o.contains(i));
    }
    t.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let a = Ut();
        a.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => a.dispose()));
      }
      let o = (i = window.scrollY) != null ? i : window.pageYOffset, s = null;
      t.addEventListener(e, "click", (a) => {
        if (a.target instanceof HTMLElement) try {
          let l = a.target.closest("a");
          if (!l) return;
          let { hash: p } = new URL(l.href), f = e.querySelector(p);
          f && !n(f) && (s = f);
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
        o !== l && window.scrollTo(0, o), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
      });
    });
  } } : {};
}
function u0() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function l0(e) {
  let t = {};
  for (let r of e) Object.assign(t, r(t));
  return t;
}
let Vr = s0(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: Ut(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: l0(r) }, i = [c0(), a0(), u0()];
  i.forEach(({ before: o }) => o == null ? void 0 : o(n)), i.forEach(({ after: o }) => o == null ? void 0 : o(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Vr.subscribe(() => {
  let e = Vr.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e) t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && Vr.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && Vr.dispatch("TEARDOWN", r);
  }
});
function f0(e, t, r) {
  let n = o0(Vr), i = e ? n.get(e) : void 0, o = i ? i.count > 0 : !1;
  return qe(() => {
    if (!(!e || !t)) return Vr.dispatch("PUSH", e, r), () => Vr.dispatch("POP", e, r);
  }, [t, e]), o;
}
let Oo = /* @__PURE__ */ new Map(), Mn = /* @__PURE__ */ new Map();
function ma(e, t = !0) {
  qe(() => {
    var r;
    if (!t) return;
    let n = typeof e == "function" ? e() : e.current;
    if (!n) return;
    function i() {
      var s;
      if (!n) return;
      let a = (s = Mn.get(n)) != null ? s : 1;
      if (a === 1 ? Mn.delete(n) : Mn.set(n, a - 1), a !== 1) return;
      let l = Oo.get(n);
      l && (l["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", l["aria-hidden"]), n.inert = l.inert, Oo.delete(n));
    }
    let o = (r = Mn.get(n)) != null ? r : 0;
    return Mn.set(n, o + 1), o !== 0 || (Oo.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0), i;
  }, [e, t]);
}
function h0({ defaultContainers: e = [], portals: t, mainTreeNodeRef: r } = {}) {
  var n;
  let i = de((n = r == null ? void 0 : r.current) != null ? n : null), o = Nn(i), s = ce(() => {
    var a, l, p;
    let f = [];
    for (let d of e) d !== null && (d instanceof HTMLElement ? f.push(d) : "current" in d && d.current instanceof HTMLElement && f.push(d.current));
    if (t != null && t.current) for (let d of t.current) f.push(d);
    for (let d of (a = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? a : []) d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(i.current) || d.contains((p = (l = i.current) == null ? void 0 : l.getRootNode()) == null ? void 0 : p.host) || f.some((S) => d.contains(S)) || f.push(d));
    return f;
  });
  return { resolveContainers: s, contains: ce((a) => s().some((l) => l.contains(a))), mainTreeNodeRef: i, MainTreeNode: De(() => function() {
    return r != null ? null : ie.createElement(cs, { features: Li.Hidden, ref: i });
  }, [i, r]) };
}
let Os = Lt(() => {
});
Os.displayName = "StackContext";
var hs = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(hs || {});
function d0() {
  return yt(Os);
}
function p0({ children: e, onUpdate: t, type: r, element: n, enabled: i }) {
  let o = d0(), s = ce((...a) => {
    t == null || t(...a), o(...a);
  });
  return qe(() => {
    let a = i === void 0 || i === !0;
    return a && s(0, r, n), () => {
      a && s(1, r, n);
    };
  }, [s, r, n, i]), ie.createElement(Os.Provider, { value: s }, e);
}
let Mc = Lt(null);
function Dc() {
  let e = yt(Mc);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Dc), t;
  }
  return e;
}
function g0() {
  let [e, t] = Pe([]);
  return [e.length > 0 ? e.join(" ") : void 0, De(() => function(r) {
    let n = ce((o) => (t((s) => [...s, o]), () => t((s) => {
      let a = s.slice(), l = a.indexOf(o);
      return l !== -1 && a.splice(l, 1), a;
    }))), i = De(() => ({ register: n, slot: r.slot, name: r.name, props: r.props }), [n, r.slot, r.name, r.props]);
    return ie.createElement(Mc.Provider, { value: i }, r.children);
  }, [t])];
}
let w0 = "p";
function m0(e, t) {
  let r = wr(), { id: n = `headlessui-description-${r}`, ...i } = e, o = Dc(), s = ht(t);
  qe(() => o.register(n), [n, o.register]);
  let a = { ref: s, ...o.props, id: n };
  return ot({ ourProps: a, theirProps: i, slot: o.slot || {}, defaultTag: w0, name: o.name || "Description" });
}
let y0 = tt(m0), A0 = Object.assign(y0, {});
var E0 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(E0 || {}), P0 = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(P0 || {});
let b0 = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Hi = Lt(null);
Hi.displayName = "DialogContext";
function ai(e) {
  let t = yt(Hi);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ai), r;
  }
  return t;
}
function S0(e, t, r = () => [document.body]) {
  f0(e, t, (n) => {
    var i;
    return { containers: [...(i = n.containers) != null ? i : [], r] };
  });
}
function v0(e, t) {
  return Xe(t.type, b0, e, t);
}
let T0 = "div", _0 = kn.RenderStrategy | kn.Static;
function I0(e, t) {
  let r = wr(), { id: n = `headlessui-dialog-${r}`, open: i, onClose: o, initialFocus: s, role: a = "dialog", __demoMode: l = !1, ...p } = e, [f, d] = Pe(0), S = de(!1);
  a = function() {
    return a === "dialog" || a === "alertdialog" ? a : (S.current || (S.current = !0, console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let m = Yi();
  i === void 0 && m !== null && (i = (m & et.Open) === et.Open);
  let B = de(null), O = ht(B, t), x = Nn(B), $ = e.hasOwnProperty("open") || m !== null, A = e.hasOwnProperty("onClose");
  if (!$ && !A) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!$) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!A) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof i != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
  if (typeof o != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);
  let k = i ? 0 : 1, [C, M] = lc(v0, { titleId: null, descriptionId: null, panelRef: ns() }), F = ce(() => o(!1)), W = ce((re) => M({ type: 0, id: re })), g = Cn() ? l ? !1 : k === 0 : !1, h = f > 1, E = yt(Hi) !== null, [N, y] = Wf(), P = { get current() {
    var re;
    return (re = C.panelRef.current) != null ? re : B.current;
  } }, { resolveContainers: I, mainTreeNodeRef: v, MainTreeNode: T } = h0({ portals: N, defaultContainers: [P] }), U = h ? "parent" : "leaf", L = m !== null ? (m & et.Closing) === et.Closing : !1, j = E || L ? !1 : g, G = it(() => {
    var re, Ne;
    return (Ne = Array.from((re = x == null ? void 0 : x.querySelectorAll("body > *")) != null ? re : []).find((ge) => ge.id === "headlessui-portal-root" ? !1 : ge.contains(v.current) && ge instanceof HTMLElement)) != null ? Ne : null;
  }, [v]);
  ma(G, j);
  let q = h ? !0 : g, J = it(() => {
    var re, Ne;
    return (Ne = Array.from((re = x == null ? void 0 : x.querySelectorAll("[data-headlessui-portal]")) != null ? re : []).find((ge) => ge.contains(v.current) && ge instanceof HTMLElement)) != null ? Ne : null;
  }, [v]);
  ma(J, q), Ic(I, (re) => {
    re.preventDefault(), F();
  }, !(!g || h));
  let Q = !(h || k !== 0);
  Cc(x == null ? void 0 : x.defaultView, "keydown", (re) => {
    Q && (re.defaultPrevented || re.key === Ve.Escape && (re.preventDefault(), re.stopPropagation(), F()));
  }), S0(x, !(L || k !== 0 || E), I), Se(() => {
    if (k !== 0 || !B.current) return;
    let re = new ResizeObserver((Ne) => {
      for (let ge of Ne) {
        let Oe = ge.target.getBoundingClientRect();
        Oe.x === 0 && Oe.y === 0 && Oe.width === 0 && Oe.height === 0 && F();
      }
    });
    return re.observe(B.current), () => re.disconnect();
  }, [k, B, F]);
  let [ae, ve] = g0(), pt = De(() => [{ dialogState: k, close: F, setTitleId: W }, C], [k, C, F, W]), At = De(() => ({ open: k === 0 }), [k]), Et = { ref: O, id: n, role: a, "aria-modal": k === 0 ? !0 : void 0, "aria-labelledby": C.titleId, "aria-describedby": ae };
  return ie.createElement(p0, { type: "Dialog", enabled: k === 0, element: B, onUpdate: ce((re, Ne) => {
    Ne === "Dialog" && Xe(re, { [hs.Add]: () => d((ge) => ge + 1), [hs.Remove]: () => d((ge) => ge - 1) });
  }) }, ie.createElement(us, { force: !0 }, ie.createElement(fs, null, ie.createElement(Hi.Provider, { value: pt }, ie.createElement(fs.Group, { target: B }, ie.createElement(us, { force: !1 }, ie.createElement(ve, { slot: At, name: "Dialog.Description" }, ie.createElement(Hn, { initialFocus: s, containers: I, features: g ? Xe(U, { parent: Hn.features.RestoreFocus, leaf: Hn.features.All & ~Hn.features.FocusLock }) : Hn.features.None }, ie.createElement(y, null, ot({ ourProps: Et, theirProps: p, slot: At, defaultTag: T0, features: _0, visible: k === 0, name: "Dialog" }))))))))), ie.createElement(T, null));
}
let O0 = "div";
function k0(e, t) {
  let r = wr(), { id: n = `headlessui-dialog-overlay-${r}`, ...i } = e, [{ dialogState: o, close: s }] = ai("Dialog.Overlay"), a = ht(t), l = ce((f) => {
    if (f.target === f.currentTarget) {
      if (Bc(f.currentTarget)) return f.preventDefault();
      f.preventDefault(), f.stopPropagation(), s();
    }
  }), p = De(() => ({ open: o === 0 }), [o]);
  return ot({ ourProps: { ref: a, id: n, "aria-hidden": !0, onClick: l }, theirProps: i, slot: p, defaultTag: O0, name: "Dialog.Overlay" });
}
let x0 = "div";
function B0(e, t) {
  let r = wr(), { id: n = `headlessui-dialog-backdrop-${r}`, ...i } = e, [{ dialogState: o }, s] = ai("Dialog.Backdrop"), a = ht(t);
  Se(() => {
    if (s.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s.panelRef]);
  let l = De(() => ({ open: o === 0 }), [o]);
  return ie.createElement(us, { force: !0 }, ie.createElement(fs, null, ot({ ourProps: { ref: a, id: n, "aria-hidden": !0 }, theirProps: i, slot: l, defaultTag: x0, name: "Dialog.Backdrop" })));
}
let C0 = "div";
function N0(e, t) {
  let r = wr(), { id: n = `headlessui-dialog-panel-${r}`, ...i } = e, [{ dialogState: o }, s] = ai("Dialog.Panel"), a = ht(t, s.panelRef), l = De(() => ({ open: o === 0 }), [o]), p = ce((f) => {
    f.stopPropagation();
  });
  return ot({ ourProps: { ref: a, id: n, onClick: p }, theirProps: i, slot: l, defaultTag: C0, name: "Dialog.Panel" });
}
let R0 = "h2";
function F0(e, t) {
  let r = wr(), { id: n = `headlessui-dialog-title-${r}`, ...i } = e, [{ dialogState: o, setTitleId: s }] = ai("Dialog.Title"), a = ht(t);
  Se(() => (s(n), () => s(null)), [n, s]);
  let l = De(() => ({ open: o === 0 }), [o]);
  return ot({ ourProps: { ref: a, id: n }, theirProps: i, slot: l, defaultTag: R0, name: "Dialog.Title" });
}
let U0 = tt(I0), L0 = tt(B0), H0 = tt(N0), M0 = tt(k0), D0 = tt(F0), ko = Object.assign(U0, { Backdrop: L0, Panel: H0, Overlay: M0, Title: D0, Description: A0 }), ya = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Aa(e) {
  var t, r;
  let n = (t = e.innerText) != null ? t : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return n;
  let o = !1;
  for (let a of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) a.remove(), o = !0;
  let s = o ? (r = i.innerText) != null ? r : "" : n;
  return ya.test(s) && (s = s.replace(ya, "")), s;
}
function $0(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let n = r.split(" ").map((i) => {
      let o = document.getElementById(i);
      if (o) {
        let s = o.getAttribute("aria-label");
        return typeof s == "string" ? s.trim() : Aa(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (n.length > 0) return n.join(", ");
  }
  return Aa(e).trim();
}
function j0(e) {
  let t = de(""), r = de("");
  return ce(() => {
    let n = e.current;
    if (!n) return "";
    let i = n.innerText;
    if (t.current === i) return r.current;
    let o = $0(n).trim().toLowerCase();
    return t.current = i, r.current = o, o;
  });
}
var K0 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(K0 || {}), W0 = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(W0 || {}), V0 = ((e) => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(V0 || {});
function xo(e, t = (r) => r) {
  let r = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, n = vc(t(e.items.slice()), (o) => o.dataRef.current.domRef.current), i = r ? n.indexOf(r) : null;
  return i === -1 && (i = null), { items: n, activeItemIndex: i };
}
let G0 = { 1(e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, 0(e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
}, 2: (e, t) => {
  var r;
  let n = xo(e), i = kf(t, { resolveItems: () => n.items, resolveActiveIndex: () => n.activeItemIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return { ...e, ...n, searchQuery: "", activeItemIndex: i, activationTrigger: (r = t.trigger) != null ? r : 1 };
}, 3: (e, t) => {
  let r = e.searchQuery !== "" ? 0 : 1, n = e.searchQuery + t.value.toLowerCase(), i = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + r).concat(e.items.slice(0, e.activeItemIndex + r)) : e.items).find((s) => {
    var a;
    return ((a = s.dataRef.current.textValue) == null ? void 0 : a.startsWith(n)) && !s.dataRef.current.disabled;
  }), o = i ? e.items.indexOf(i) : -1;
  return o === -1 || o === e.activeItemIndex ? { ...e, searchQuery: n } : { ...e, searchQuery: n, activeItemIndex: o, activationTrigger: 1 };
}, 4(e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, 5: (e, t) => {
  let r = xo(e, (n) => [...n, { id: t.id, dataRef: t.dataRef }]);
  return { ...e, ...r };
}, 6: (e, t) => {
  let r = xo(e, (n) => {
    let i = n.findIndex((o) => o.id === t.id);
    return i !== -1 && n.splice(i, 1), n;
  });
  return { ...e, ...r, activationTrigger: 1 };
} }, ks = Lt(null);
ks.displayName = "MenuContext";
function Qi(e) {
  let t = yt(ks);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Qi), r;
  }
  return t;
}
function X0(e, t) {
  return Xe(t.type, G0, e, t);
}
let q0 = mt;
function Y0(e, t) {
  let { __demoMode: r = !1, ...n } = e, i = lc(X0, { __demoMode: r, menuState: r ? 0 : 1, buttonRef: ns(), itemsRef: ns(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: o, itemsRef: s, buttonRef: a }, l] = i, p = ht(t);
  Ic([a, s], (m, B) => {
    var O;
    l({ type: 1 }), Ts(B, vs.Loose) || (m.preventDefault(), (O = a.current) == null || O.focus());
  }, o === 0);
  let f = ce(() => {
    l({ type: 1 });
  }), d = De(() => ({ open: o === 0, close: f }), [o, f]), S = { ref: p };
  return ie.createElement(ks.Provider, { value: i }, ie.createElement(xc, { value: Xe(o, { 0: et.Open, 1: et.Closed }) }, ot({ ourProps: S, theirProps: n, slot: d, defaultTag: q0, name: "Menu" })));
}
let Q0 = "button";
function z0(e, t) {
  var r;
  let n = wr(), { id: i = `headlessui-menu-button-${n}`, ...o } = e, [s, a] = Qi("Menu.Button"), l = ht(s.buttonRef, t), p = oi(), f = ce((O) => {
    switch (O.key) {
      case Ve.Space:
      case Ve.Enter:
      case Ve.ArrowDown:
        O.preventDefault(), O.stopPropagation(), a({ type: 0 }), p.nextFrame(() => a({ type: 2, focus: Ft.First }));
        break;
      case Ve.ArrowUp:
        O.preventDefault(), O.stopPropagation(), a({ type: 0 }), p.nextFrame(() => a({ type: 2, focus: Ft.Last }));
        break;
    }
  }), d = ce((O) => {
    switch (O.key) {
      case Ve.Space:
        O.preventDefault();
        break;
    }
  }), S = ce((O) => {
    if (Bc(O.currentTarget)) return O.preventDefault();
    e.disabled || (s.menuState === 0 ? (a({ type: 1 }), p.nextFrame(() => {
      var x;
      return (x = s.buttonRef.current) == null ? void 0 : x.focus({ preventScroll: !0 });
    })) : (O.preventDefault(), a({ type: 0 })));
  }), m = De(() => ({ open: s.menuState === 0 }), [s]), B = { ref: l, id: i, type: Af(e, s.buttonRef), "aria-haspopup": "menu", "aria-controls": (r = s.itemsRef.current) == null ? void 0 : r.id, "aria-expanded": s.menuState === 0, onKeyDown: f, onKeyUp: d, onClick: S };
  return ot({ ourProps: B, theirProps: o, slot: m, defaultTag: Q0, name: "Menu.Button" });
}
let J0 = "div", Z0 = kn.RenderStrategy | kn.Static;
function eh(e, t) {
  var r, n;
  let i = wr(), { id: o = `headlessui-menu-items-${i}`, ...s } = e, [a, l] = Qi("Menu.Items"), p = ht(a.itemsRef, t), f = Nn(a.itemsRef), d = oi(), S = Yi(), m = S !== null ? (S & et.Open) === et.Open : a.menuState === 0;
  Se(() => {
    let A = a.itemsRef.current;
    A && a.menuState === 0 && A !== (f == null ? void 0 : f.activeElement) && A.focus({ preventScroll: !0 });
  }, [a.menuState, a.itemsRef, f]), bf({ container: a.itemsRef.current, enabled: a.menuState === 0, accept(A) {
    return A.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : A.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(A) {
    A.setAttribute("role", "none");
  } });
  let B = ce((A) => {
    var k, C;
    switch (d.dispose(), A.key) {
      case Ve.Space:
        if (a.searchQuery !== "") return A.preventDefault(), A.stopPropagation(), l({ type: 3, value: A.key });
      case Ve.Enter:
        if (A.preventDefault(), A.stopPropagation(), l({ type: 1 }), a.activeItemIndex !== null) {
          let { dataRef: M } = a.items[a.activeItemIndex];
          (C = (k = M.current) == null ? void 0 : k.domRef.current) == null || C.click();
        }
        Sc(a.buttonRef.current);
        break;
      case Ve.ArrowDown:
        return A.preventDefault(), A.stopPropagation(), l({ type: 2, focus: Ft.Next });
      case Ve.ArrowUp:
        return A.preventDefault(), A.stopPropagation(), l({ type: 2, focus: Ft.Previous });
      case Ve.Home:
      case Ve.PageUp:
        return A.preventDefault(), A.stopPropagation(), l({ type: 2, focus: Ft.First });
      case Ve.End:
      case Ve.PageDown:
        return A.preventDefault(), A.stopPropagation(), l({ type: 2, focus: Ft.Last });
      case Ve.Escape:
        A.preventDefault(), A.stopPropagation(), l({ type: 1 }), Ut().nextFrame(() => {
          var M;
          return (M = a.buttonRef.current) == null ? void 0 : M.focus({ preventScroll: !0 });
        });
        break;
      case Ve.Tab:
        A.preventDefault(), A.stopPropagation(), l({ type: 1 }), Ut().nextFrame(() => {
          wf(a.buttonRef.current, A.shiftKey ? sr.Previous : sr.Next);
        });
        break;
      default:
        A.key.length === 1 && (l({ type: 3, value: A.key }), d.setTimeout(() => l({ type: 4 }), 350));
        break;
    }
  }), O = ce((A) => {
    switch (A.key) {
      case Ve.Space:
        A.preventDefault();
        break;
    }
  }), x = De(() => ({ open: a.menuState === 0 }), [a]), $ = { "aria-activedescendant": a.activeItemIndex === null || (r = a.items[a.activeItemIndex]) == null ? void 0 : r.id, "aria-labelledby": (n = a.buttonRef.current) == null ? void 0 : n.id, id: o, onKeyDown: B, onKeyUp: O, role: "menu", tabIndex: 0, ref: p };
  return ot({ ourProps: $, theirProps: s, slot: x, defaultTag: J0, features: Z0, visible: m, name: "Menu.Items" });
}
let th = mt;
function rh(e, t) {
  let r = wr(), { id: n = `headlessui-menu-item-${r}`, disabled: i = !1, ...o } = e, [s, a] = Qi("Menu.Item"), l = s.activeItemIndex !== null ? s.items[s.activeItemIndex].id === n : !1, p = de(null), f = ht(t, p);
  qe(() => {
    if (s.__demoMode || s.menuState !== 0 || !l || s.activationTrigger === 0) return;
    let M = Ut();
    return M.requestAnimationFrame(() => {
      var F, W;
      (W = (F = p.current) == null ? void 0 : F.scrollIntoView) == null || W.call(F, { block: "nearest" });
    }), M.dispose;
  }, [s.__demoMode, p, l, s.menuState, s.activationTrigger, s.activeItemIndex]);
  let d = j0(p), S = de({ disabled: i, domRef: p, get textValue() {
    return d();
  } });
  qe(() => {
    S.current.disabled = i;
  }, [S, i]), qe(() => (a({ type: 5, id: n, dataRef: S }), () => a({ type: 6, id: n })), [S, n]);
  let m = ce(() => {
    a({ type: 1 });
  }), B = ce((M) => {
    if (i) return M.preventDefault();
    a({ type: 1 }), Sc(s.buttonRef.current);
  }), O = ce(() => {
    if (i) return a({ type: 2, focus: Ft.Nothing });
    a({ type: 2, focus: Ft.Specific, id: n });
  }), x = Pf(), $ = ce((M) => x.update(M)), A = ce((M) => {
    x.wasMoved(M) && (i || l || a({ type: 2, focus: Ft.Specific, id: n, trigger: 0 }));
  }), k = ce((M) => {
    x.wasMoved(M) && (i || l && a({ type: 2, focus: Ft.Nothing }));
  }), C = De(() => ({ active: l, disabled: i, close: m }), [l, i, m]);
  return ot({ ourProps: { id: n, ref: f, role: "menuitem", tabIndex: i === !0 ? void 0 : -1, "aria-disabled": i === !0 ? !0 : void 0, disabled: void 0, onClick: B, onFocus: O, onPointerEnter: $, onMouseEnter: $, onPointerMove: A, onMouseMove: A, onPointerLeave: k, onMouseLeave: k }, theirProps: o, slot: C, defaultTag: th, name: "Menu.Item" });
}
let nh = tt(Y0), ih = tt(z0), oh = tt(eh), sh = tt(rh), mn = Object.assign(nh, { Button: ih, Items: oh, Item: sh });
function ah(e = 0) {
  let [t, r] = Pe(e), n = si(), i = it((l) => {
    n.current && r((p) => p | l);
  }, [t, n]), o = it((l) => !!(t & l), [t]), s = it((l) => {
    n.current && r((p) => p & ~l);
  }, [r, n]), a = it((l) => {
    n.current && r((p) => p ^ l);
  }, [r]);
  return { flags: t, addFlag: i, hasFlag: o, removeFlag: s, toggleFlag: a };
}
function ch(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called) return t.called = !0, e(...r);
  };
}
function Bo(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Co(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function uh(e, t) {
  let r = Ut();
  if (!e) return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [o, s] = [n, i].map((l) => {
    let [p = 0] = l.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, d) => d - f);
    return p;
  }), a = o + s;
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
function lh(e, t, r, n) {
  let i = r ? "enter" : "leave", o = Ut(), s = n !== void 0 ? ch(n) : () => {
  };
  i === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
  let a = Xe(i, { enter: () => t.enter, leave: () => t.leave }), l = Xe(i, { enter: () => t.enterTo, leave: () => t.leaveTo }), p = Xe(i, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return Co(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), Bo(e, ...t.base, ...a, ...p), o.nextFrame(() => {
    Co(e, ...t.base, ...a, ...p), Bo(e, ...t.base, ...a, ...l), uh(e, () => (Co(e, ...t.base, ...a), Bo(e, ...t.base, ...t.entered), s()));
  }), o.dispose;
}
function fh({ immediate: e, container: t, direction: r, classes: n, onStart: i, onStop: o }) {
  let s = si(), a = oi(), l = lr(r);
  qe(() => {
    e && (l.current = "enter");
  }, [e]), qe(() => {
    let p = Ut();
    a.add(p.dispose);
    let f = t.current;
    if (f && l.current !== "idle" && s.current) return p.dispose(), i.current(l.current), p.add(lh(f, n.current, l.current === "enter", () => {
      p.dispose(), o.current(l.current);
    })), p.dispose;
  }, [r]);
}
function yr(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let zi = Lt(null);
zi.displayName = "TransitionContext";
var hh = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(hh || {});
function dh() {
  let e = yt(zi);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function ph() {
  let e = yt(Ji);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Ji = Lt(null);
Ji.displayName = "NestingContext";
function Zi(e) {
  return "children" in e ? Zi(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function $c(e, t) {
  let r = lr(e), n = de([]), i = si(), o = oi(), s = ce((m, B = Or.Hidden) => {
    let O = n.current.findIndex(({ el: x }) => x === m);
    O !== -1 && (Xe(B, { [Or.Unmount]() {
      n.current.splice(O, 1);
    }, [Or.Hidden]() {
      n.current[O].state = "hidden";
    } }), o.microTask(() => {
      var x;
      !Zi(n) && i.current && ((x = r.current) == null || x.call(r));
    }));
  }), a = ce((m) => {
    let B = n.current.find(({ el: O }) => O === m);
    return B ? B.state !== "visible" && (B.state = "visible") : n.current.push({ el: m, state: "visible" }), () => s(m, Or.Unmount);
  }), l = de([]), p = de(Promise.resolve()), f = de({ enter: [], leave: [], idle: [] }), d = ce((m, B, O) => {
    l.current.splice(0), t && (t.chains.current[B] = t.chains.current[B].filter(([x]) => x !== m)), t == null || t.chains.current[B].push([m, new Promise((x) => {
      l.current.push(x);
    })]), t == null || t.chains.current[B].push([m, new Promise((x) => {
      Promise.all(f.current[B].map(([$, A]) => A)).then(() => x());
    })]), B === "enter" ? p.current = p.current.then(() => t == null ? void 0 : t.wait.current).then(() => O(B)) : O(B);
  }), S = ce((m, B, O) => {
    Promise.all(f.current[B].splice(0).map(([x, $]) => $)).then(() => {
      var x;
      (x = l.current.shift()) == null || x();
    }).then(() => O(B));
  });
  return De(() => ({ children: n, register: a, unregister: s, onStart: d, onStop: S, wait: p, chains: f }), [a, s, n, d, S, f, p]);
}
function gh() {
}
let wh = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Ea(e) {
  var t;
  let r = {};
  for (let n of wh) r[n] = (t = e[n]) != null ? t : gh;
  return r;
}
function mh(e) {
  let t = de(Ea(e));
  return Se(() => {
    t.current = Ea(e);
  }, [e]), t;
}
let yh = "div", jc = kn.RenderStrategy;
function Ah(e, t) {
  var r, n;
  let { beforeEnter: i, afterEnter: o, beforeLeave: s, afterLeave: a, enter: l, enterFrom: p, enterTo: f, entered: d, leave: S, leaveFrom: m, leaveTo: B, ...O } = e, x = de(null), $ = ht(x, t), A = (r = O.unmount) == null || r ? Or.Unmount : Or.Hidden, { show: k, appear: C, initial: M } = dh(), [F, W] = Pe(k ? "visible" : "hidden"), g = ph(), { register: h, unregister: E } = g;
  Se(() => h(x), [h, x]), Se(() => {
    if (A === Or.Hidden && x.current) {
      if (k && F !== "visible") {
        W("visible");
        return;
      }
      return Xe(F, { hidden: () => E(x), visible: () => h(x) });
    }
  }, [F, x, h, E, k, A]);
  let N = lr({ base: yr(O.className), enter: yr(l), enterFrom: yr(p), enterTo: yr(f), entered: yr(d), leave: yr(S), leaveFrom: yr(m), leaveTo: yr(B) }), y = mh({ beforeEnter: i, afterEnter: o, beforeLeave: s, afterLeave: a }), P = Cn();
  Se(() => {
    if (P && F === "visible" && x.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [x, F, P]);
  let I = M && !C, v = C && k && M, T = !P || I ? "idle" : k ? "enter" : "leave", U = ah(0), L = ce((Q) => Xe(Q, { enter: () => {
    U.addFlag(et.Opening), y.current.beforeEnter();
  }, leave: () => {
    U.addFlag(et.Closing), y.current.beforeLeave();
  }, idle: () => {
  } })), j = ce((Q) => Xe(Q, { enter: () => {
    U.removeFlag(et.Opening), y.current.afterEnter();
  }, leave: () => {
    U.removeFlag(et.Closing), y.current.afterLeave();
  }, idle: () => {
  } })), G = $c(() => {
    W("hidden"), E(x);
  }, g), q = de(!1);
  fh({ immediate: v, container: x, classes: N, direction: T, onStart: lr((Q) => {
    q.current = !0, G.onStart(x, Q, L);
  }), onStop: lr((Q) => {
    q.current = !1, G.onStop(x, Q, j), Q === "leave" && !Zi(G) && (W("hidden"), E(x));
  }) });
  let J = O, pe = { ref: $ };
  return v ? J = { ...J, className: Ui(O.className, ...N.current.enter, ...N.current.enterFrom) } : q.current && (J.className = Ui(O.className, (n = x.current) == null ? void 0 : n.className), J.className === "" && delete J.className), ie.createElement(Ji.Provider, { value: G }, ie.createElement(xc, { value: Xe(F, { visible: et.Open, hidden: et.Closed }) | U.flags }, ot({ ourProps: pe, theirProps: J, defaultTag: yh, features: jc, visible: F === "visible", name: "Transition.Child" })));
}
function Eh(e, t) {
  let { show: r, appear: n = !1, unmount: i = !0, ...o } = e, s = de(null), a = ht(s, t);
  Cn();
  let l = Yi();
  if (r === void 0 && l !== null && (r = (l & et.Open) === et.Open), ![!0, !1].includes(r)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [p, f] = Pe(r ? "visible" : "hidden"), d = $c(() => {
    f("hidden");
  }), [S, m] = Pe(!0), B = de([r]);
  qe(() => {
    S !== !1 && B.current[B.current.length - 1] !== r && (B.current.push(r), m(!1));
  }, [B, r]);
  let O = De(() => ({ show: r, appear: n, initial: S }), [r, n, S]);
  Se(() => {
    if (r) f("visible");
    else if (!Zi(d)) f("hidden");
    else {
      let k = s.current;
      if (!k) return;
      let C = k.getBoundingClientRect();
      C.x === 0 && C.y === 0 && C.width === 0 && C.height === 0 && f("hidden");
    }
  }, [r, d]);
  let x = { unmount: i }, $ = ce(() => {
    var k;
    S && m(!1), (k = e.beforeEnter) == null || k.call(e);
  }), A = ce(() => {
    var k;
    S && m(!1), (k = e.beforeLeave) == null || k.call(e);
  });
  return ie.createElement(Ji.Provider, { value: d }, ie.createElement(zi.Provider, { value: O }, ot({ ourProps: { ...x, as: mt, children: ie.createElement(Kc, { ref: a, ...x, ...o, beforeEnter: $, beforeLeave: A }) }, theirProps: {}, defaultTag: mt, features: jc, visible: p === "visible", name: "Transition" })));
}
function Ph(e, t) {
  let r = yt(zi) !== null, n = Yi() !== null;
  return ie.createElement(ie.Fragment, null, !r && n ? ie.createElement(ds, { ref: t, ...e }) : ie.createElement(Kc, { ref: t, ...e }));
}
let ds = tt(Eh), Kc = tt(Ah), bh = tt(Ph), xi = Object.assign(ds, { Child: bh, Root: ds });
const Sh = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Wc = "data:image/svg+xml,%3csvg%20width='41'%20height='40'%20viewBox='0%200%2041%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20x='0.5'%20width='40'%20height='40'%20rx='20'%20fill='url(%23pattern0)'/%3e%3cdefs%3e%3cpattern%20id='pattern0'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_21497_326778'%20transform='translate(-0.00625)%20scale(0.0125)'/%3e%3c/pattern%3e%3cimage%20id='image0_21497_326778'%20width='81'%20height='80'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABQCAYAAABh05mTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAi3SURBVHgB7Z1dbBRVFMfPLJVuE1lGFNOENi5v2sbY8kIbEymJtJiYSIVq9AEKrQm+0A+Q+KBpqz5ppIU3Ywvti4kWktaYQFsTi4nZ8sTyQH3TIa0JD0Km2wQWkB3Pf3Zms/Oxu7Mfszvb7i9Zdjt7Zzfz33PuOffcOxeBSowoisEtRG0KUZAo9pJAQjD+mkTtkYzED1lQH0I4RnTHRxR+lh+SLMtUIgQqMkFWbZ3okEKxffz1h8gqVK6EfSQs8vPsv7K8SEWkKCJqwrURKX2K+uw6kkDKokC+qWII6qqIEC9CsT7+mn4qnMVlCwsqjNyT5UlyCVdE9Ih4ZlwTs+Ai7hADEG+YvCOeGYg5wGLOUIEomIg7RbHpKSmX+GUTlQHcZ04+Q76Ru7IsUZ4URETN+sao/JA4oh/PN/hsoTxA37fFX32VBTxJ5YnI2UJ3jb+aHkYfXaccydkSazlJfkzKbxRPjMseFmJmG1tlLkl7TiJq/R8E9GrwyJXwVhI6s+0nsxZxAwuoI7GQ+7MRMisRN4GAOlKAhGanru0jh6AP3CQCgmCErxWB00ljR9E5KYjU0uahlq+5lqP2bKaGjkTc6q+GgC/TpkNoqvHXrD2MRpfStcrozpxID1GZjELcQRl9QRTb0rVIG1i0QHKTKqQNNGnd2e+vDtHmCCSZEJ+Q4n8QfTRn92ZKd9bcOEgVVGJc1kvl1rburEXjv6mCARZr8Z68tt983NYSnxANUQULmNqws0aLJVasMD121mixxIoVpsfOGg2WWI5W2NrSQu3tb9LBjnaqq6tTj4WWlmj68hWanr5CbmC2RoOIz4titxIv8XueQCBA5779mjra21O2mb58mQZPnyU34Gi9W9YqPYY8kSu8ENDz42NY3M8zV2hPc3Pado0NDRSJROjmzTAVGp7swnBwMf5ao5SuPDT0OR1sP2A41vHW26oAZiDg9I8/JFw3E/iMxlddGbVK9+W13XiRCCyPiQ5RCYBb9p44roqiP0JLN2wFBHBhOwHRD45PXKLV1VXL59fXOxM8S1ApU3+dKv0ITyG+o1DxaW3Zazk2N79g27an54QaSJKB2L0fnVRFBMvLyyz0N1QMfPElMWHVEllRsUhrZCw0cL9lZnVl1XIM1td7otty/L33P0wICAKB7ZY2a2v2Vp0vMDw8qyJWlbDUZeeakXXrRQ/2n7K0HRn5km6z5SV/Vm9Pt6EN3DtV15AviqabKmLMY/XCul1WYVtbjW4MccYvGrOx4aHPLEKPT0ySi8CJg6qIHKL3UYlYXv7Tcqyr613j30cOW8Q5N3Yh8RrvXbv6iyVnhNDIFd2Ec8QmLTorJasZLie5o07XkSPUwxE78XfXYcP7qjjTcXEQbOZYwEabvhUBxy1X1sGqXjXZrvH7h6lExVcI0tq6l+pNltbWto9Tk13xFIiFSmaFz9n54k6a+P47tr4DVF1dbflcjFQWr+e8MiQLlLtqsr1D3F6K7CYB0pafOIEuBOaUx20UEma3oGdkJT+lEgJrXI+ss/W9QfkA4Y4ePW6I2G7jI+GuEI8u3qjcIDDYRdhMQLzR0QtFsz4TkqdE1EFgGRw4lVZMWO+1uQWa59FNicTT8aaIOoP9fTQw0Gc8duYTmmPx3I66WSBVkYdpaHzF8DeEc6vQmgey4wVNpcBcbAiFbpDX4LqiXIXqLKc4VEyQE7Zw9Ubv89C/ra7+Y+jbICByxGTmFhbIi+juLFERJuohzAAHDLOF6UDMc2Pn1T6v3VSkBUuhkgaQVNzSk22st3G1CIEAgUDhBL2wmhydkfsd5Gq39xBGtD5RuEUuggKCUwGBXuFOJuTACmHhK3f+MjxSWX2hYCsM6+6MmZxj5BKDA1YBEWkxDQDq6nbZFhCSmZ//lbzIUz3FwT3DMXIHWILZqlCBGf7iK0OuhzawVnPFRsdJXmhXJXc5n+S4LMenB/6LW6IrtNjMoUxcnLRcHPpBNZFOMb+CAkWHTbBJxlzVBm6Oo3HjOp5VESEnZvXJBSJcWDBjJyzSGUydphIK749z6QuzffU2w0EELks/6vJwkEtf6nruxLzzDlEc5sMFX4eTqsyFC0TyHAhso8bGhqwDAM6/fTtuZanOHzxzNlG8dYMYCc1w54SIbo6hQ3/8nnVlRj2Phco1uqrF3tfzK61lwDp5j5GLWy6dy3qY0dHz6nQohDBPyGcC7XGum3B/mLg1w7QWpwbKtlGBwUVhQmrPnibLUM4MrO80i45VXQABaOLiJXVY2MgFiUznI5CgMLuSpfDZwq78QTQaVRfCG1aFocqtubQr8y1waSyBw1I45IUQBCLhgtE/OqkNotaI2UD9fIAfCTknKjzFqC2yFS7ek2X7pXWAA8wYdg2hCilhETuTtz+wiOjlIq1HSAQUHUs9Mb5wUZiiCrZgRxPrMRs0a0Rlp3IjkBGLFQLbO6oQdThS11CJVop5FSTXekROxpf6BMLuIhJVUGE3Pi+nuBs/pYgYT2O7E6oAJC55Dad6M+0Nkg+iUYnd+jl+6W5l0+OwG++X0+wJkXG2774s97s1HCwPhBEUGdK1cDRl+jTu1hJtMtAPshENZ27nkE2Y9oQ1N864I4njyXv0CfhQvKSND66104mAIOvNhXDvhm+Dby6UKZCYyXoZCTpZzSIl2niEsxUQ5LQWZyMKyUFkKhcBQc5b/2H4U+2vmfXFV04EqawRRpDK8TVFKQfy2j8RQj6MPprihBx9axuVH9iEsjPffWZz2vrPDi0FKpv9FJEDYijnNAKn/6wCw5Xxfq0yHiRvgk3NBwq5/3Ze7mwH9tVCX8m/NMbcXrrdTd3VmOuBH6MmQAWk4JaYjHbfGywTd2MGqQQI8a30p8pus3I7sL8Ei3msSLcEy5ji4B9wpuy3zbdD/18vYmydQkHTI3Vx0fViCWf4ZioxmqhNivpQXvOp2zYLQe2mTdPQUpDwL7cLC6SwtfluYVkgVrUVIsrmyv91DJTKn0hYjQAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e", vh = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2017.5H4.16667C3.72464%2017.5%203.30072%2017.3244%202.98816%2017.0118C2.67559%2016.6993%202.5%2016.2754%202.5%2015.8333V4.16667C2.5%203.72464%202.67559%203.30072%202.98816%202.98816C3.30072%202.67559%203.72464%202.5%204.16667%202.5H7.5'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.333%2014.1667L17.4997%2010L13.333%205.83337'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.5%2010H7.5'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Vc = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.423462'%20width='24'%20height='24'%20rx='12'%20fill='%231C1326'/%3e%3cpath%20d='M15.6787%209.69931L16.5929%2010.7735C16.6976%2010.8942%2016.7904%2010.9934%2016.8279%2011.0499C17.1013%2011.3216%2017.2546%2011.6889%2017.2544%2012.0716C17.2288%2012.523%2016.9345%2012.8305%2016.662%2013.1594L16.0222%2013.9106L15.6885%2014.2998C15.6765%2014.3132%2015.6688%2014.3298%2015.6663%2014.3475C15.6638%2014.3652%2015.6666%2014.3832%2015.6743%2014.3993C15.6821%2014.4155%2015.6945%2014.429%2015.71%2014.4383C15.7255%2014.4476%2015.7434%2014.4522%2015.7616%2014.4515H19.0968C19.6062%2014.4515%2020.248%2014.8797%2020.2105%2015.5297C20.2095%2015.8251%2020.0899%2016.1081%2019.8779%2016.317C19.6659%2016.5259%2019.3788%2016.6437%2019.079%2016.6447H13.856C13.5124%2016.6447%2012.5883%2016.6817%2012.3296%2015.8936C12.2746%2015.7289%2012.2671%2015.5524%2012.3079%2015.3837C12.3831%2015.1343%2012.502%2014.8998%2012.6594%2014.6909C12.922%2014.3017%2013.2064%2013.9125%2013.4868%2013.535C13.8481%2013.0407%2014.2194%2012.5619%2014.5847%2012.0579C14.5977%2012.0415%2014.6047%2012.0213%2014.6047%2012.0005C14.6047%2011.9797%2014.5977%2011.9595%2014.5847%2011.9431L13.2577%2010.3863C13.2491%2010.375%2013.2379%2010.3658%2013.225%2010.3595C13.2122%2010.3532%2013.198%2010.3499%2013.1836%2010.3499C13.1693%2010.3499%2013.1551%2010.3532%2013.1423%2010.3595C13.1295%2010.3658%2013.1182%2010.375%2013.1096%2010.3863C12.7542%2010.8591%2011.1982%2012.9531%2010.8664%2013.3773C10.5346%2013.8016%209.71714%2013.8249%209.26493%2013.3773L7.18959%2011.3243C7.17633%2011.3112%207.1594%2011.3022%207.14103%2011.2986C7.12261%2011.295%207.10348%2011.2968%207.08614%2011.3039C7.06879%2011.311%207.05398%2011.323%207.04358%2011.3384C7.03317%2011.3538%207.02764%2011.3719%207.02768%2011.3904V15.3389C7.03256%2015.6192%206.94837%2015.8938%206.78689%2016.1245C6.6254%2016.3552%206.39473%2016.5303%206.12722%2016.6253C5.95626%2016.6839%205.77359%2016.7014%205.59439%2016.6763C5.41518%2016.6513%205.24465%2016.5843%205.09704%2016.4811C4.94943%2016.3779%204.82898%2016.2414%204.74575%2016.083C4.66252%2015.9246%204.61892%2015.7489%204.61859%2015.5705V8.47138C4.63049%208.21553%204.7239%207.96991%204.88554%207.76938C5.04719%207.56885%205.26884%207.42363%205.51901%207.35435C5.73365%207.298%205.95954%207.29856%206.17386%207.35599C6.38817%207.41341%206.58326%207.52563%206.73936%207.6813L9.93042%2010.83C9.93998%2010.8395%209.95151%2010.8469%209.96431%2010.8516C9.97706%2010.8562%209.9907%2010.8581%2010.0043%2010.857C10.0178%2010.8559%2010.031%2010.8518%2010.0428%2010.8451C10.0546%2010.8385%2010.0648%2010.8293%2010.0726%2010.8183L12.3395%207.72606C12.4442%207.60053%2012.5756%207.49905%2012.7243%207.42883C12.873%207.35856%2013.0355%207.32121%2013.2005%207.31933H19.0968C19.2581%207.31956%2019.4176%207.35378%2019.5644%207.41969C19.7113%207.48555%2019.8422%207.5816%2019.9484%207.70131C20.0546%207.82108%2020.1336%207.9618%2020.1802%208.11405C20.2267%208.2663%2020.2397%208.42661%2020.2184%208.58425C20.1768%208.85767%2020.0361%209.107%2019.8222%209.28592C19.6083%209.46485%2019.3358%209.56127%2019.0553%209.55728H15.7537C15.7371%209.55766%2015.7209%209.56244%2015.7068%209.57111C15.6928%209.57974%2015.6813%209.59197%2015.6736%209.60645C15.666%209.62099%2015.6624%209.63725%2015.6632%209.65356C15.6641%209.66992%2015.6695%209.68572%2015.6787%209.69931Z'%20fill='url(%23paint0_radial_6204_5907)'/%3e%3cdefs%3e%3cradialGradient%20id='paint0_radial_6204_5907'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(4.66396%207.31249)%20rotate(31.8526)%20scale(18.4306%2015.0426)'%3e%3cstop%20stop-color='%237500EB'/%3e%3cstop%20offset='0.48642'%20stop-color='%23E42575'/%3e%3cstop%20offset='0.791667'%20stop-color='%23E42575'/%3e%3cstop%20offset='1'%20stop-color='%23FF6914'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e", Gc = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20clip-path='url(%23clip0_6327_5988)'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='black'/%3e%3crect%20x='5.37042'%20y='5.10571'%20width='14.1245'%20height='14.3972'%20fill='url(%23pattern0)'/%3e%3c/g%3e%3cdefs%3e%3cpattern%20id='pattern0'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_6327_5988'%20transform='matrix(0.00331001%200%200%200.00324732%20-0.161%20-0.168981)'/%3e%3c/pattern%3e%3cclipPath%20id='clip0_6327_5988'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3cimage%20id='image0_6327_5988'%20width='399'%20height='399'%20xlink:href='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gKgSUNDX1BST0ZJTEUAAQEAAAKQbGNtcwQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAADhjcHJ0AAABQAAAAE53dHB0AAABkAAAABRjaGFkAAABpAAAACxyWFlaAAAB0AAAABRiWFlaAAAB5AAAABRnWFlaAAAB+AAAABRyVFJDAAACDAAAACBnVFJDAAACLAAAACBiVFJDAAACTAAAACBjaHJtAAACbAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABwAAAAcAHMAUgBHAEIAIABiAHUAaQBsAHQALQBpAG4AAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAMgAAABwATgBvACAAYwBvAHAAeQByAGkAZwBoAHQALAAgAHUAcwBlACAAZgByAGUAZQBsAHkAAAAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEoAAAXj///zKgAAB5sAAP2H///7ov///aMAAAPYAADAlFhZWiAAAAAAAABvlAAAOO4AAAOQWFlaIAAAAAAAACSdAAAPgwAAtr5YWVogAAAAAAAAYqUAALeQAAAY3nBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR7AABMzQAAmZoAACZmAAAPXP/bAEMABQMEBAQDBQQEBAUFBQYHDAgHBwcHDwsLCQwRDxISEQ8RERMWHBcTFBoVEREYIRgaHR0fHx8TFyIkIh4kHB4fHv/bAEMBBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/CABEIAY8BjwMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAACAYHBQECBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf2K5JLV2JEV2JEV2JE+V4IzbnDAAAA2Jnf1XYkRXYkRXYkRXYkD+KxpMPMAAAAAAAAAB6NdyJXYAAABO/O+ic7AAAG6wu6KSAAAAk2spNPFAAAAAAAAAB6NdyJXYAAABO/O+ic7AAAG6wu6KSAAAAk2spNPFAAAAAAAAAB6NdyJXYAAABO/O+ic7AAAG6wu6KSAAAAk2spNPFAAAAAAAAAB6NdyHXgAAABO/O+hc9AAAG6wu5KTAAAAk2spMPGAAAAAAAAAA3OGHRHOx0RzsdEc7HRPnPB1TauhnPHQxzx0Mc8dDHPMd3TDHLf3zsdEc7HRHOx0RzsbvDfkAAAAAAAAAAAAAAAUT0PnnQwAABhtzhibAAAAAAAAAAAAAAAAAAAAUT0PnnQwAABhtzhibAAAAAAAAAAAAAAAAAAAAUT0PnnQwAABhtzhibAAAAAAAAAAAAAAADYGPboYVuhhW6GFbr4dQ6Hwvdm5YYblhhuWGG5wzEnIm4/RhW6GFboYVuhhWyxoAAAAAAAAAB/fXsiV2AAAATpz7onOwAABuMPuikgAAAJLrSTTxQAAAAAAAAAejXciV2AAAATvzvonOwAABusLuikgAAAJNrKTTxQAAAAAAAAAejXciV2AAAATvzvonOwAABusLuikgAAAJNrKTTxQAAAAAAAAAejXciV2AAAATvzvonOwAABusLuikgAAAJNrKTTxQAAAAAAAAAf21zHPqFcJNFZJNFZJNFZJN+Gjwf34AAANljRZiS/0Vkk0Vkk0Vkk0VdJjygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8QAJRAAAAMIAwEBAQEAAAAAAAAAAAUwAQIDBAYWNTYHFEAVUIAR/9oACAEBAAEFAv7/AIUtMRXelOjpTo6U6OlOjpTo6U6OlOh6Tm3WJOyk0870p0dKdHSnR0p0dKdHSnR0p0RZaZhO+WUhsizcGE5BhIVtLwpc+QpCBCmD9CI45EcNITsAy8hbkUeQNgQoXZET3N+QtyKPIGwIULsiJ7m/IW5FHkDYEKF2RE9zfkLcijyBsCFC7Iie5vyFuRR5A2BChdkRPc35C3Io8gbAhQuyInub8hbkUeQNgQoXZET3N+Qvax2fRr5rG1AhQ7WMqNE7ax458spVBvLwLwOBeBwLwOBeBwLwOBeBwLwOA2rzj/KaJGHbLPJxZ5OLPJxZ5OLPJxZ5OLPJxZ5OKlIHCiC5Vxwx28DgXgcC8DgXgcC8DgXgcC8DgTFVG8aF7+P9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/fK04bzMG1DsWodi1DsWodi1DsWodi1DsNpU6YylTuEUOXWSC6yQXWSC6yQXWSC6yQXWSC6yQVSfwDKVdpY7ay1DsWodi1DsWodi1DsWodi1DsTFNHMCF5ZB1j88jXzrGVAhRDrHqjROXWOHHkLcijyBsCFC7Iie5vyFuRR5A2BChdkRPc35C3Io8gbAhQuyInub8hbkUeQNgQoXZET3N+QtyKPIGwIULsiJ7m/IW5FHkDYEKF2RE9zfkLcijyBsCFC7Iie5vySb7IU5DfciOIVxGhxj9Cjo0OBUKDWsdYaxHYxp5YM/PQHPrGg+saD6xoPrGg+saD6xoPrGgeNDJ5iThmZOu/WNB9Y0H1jQfWNB9Y0H1jQfWNBGMJ+ND/v8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAwEBPwEcf//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8BHH//xAA5EAABAQUDCQcCBQUAAAAAAAACAQADBDCTETSyNUBEcnN0g5KxBRITITFQUUFhFDJxkaFCY4CBkP/aAAgBAQAGPwL/AD/tduHpp8iKq10iKatdIimrXSIpq10iKatdIimrXSIpq10iKat3ihX6Js1loQwr5UX0VAVrpEU1a6RFNWukRTVrpEU1a6RFNWukRTVrpEU1bvPHD0B+SBUzZy6L0M0FWF06FAAUsRE+kl4jkEBDFDVE+ZMOD4UIUtKxfsklQMUISSxUX6tFOHf5Hb4hT/S5rDbUesrhDJcapYZUfvLzEuaw21HrK4QyXGqWGVH7y8xLmsNtR6yuEMlxqlhlR+8vMS5rDbUesrhDJcapYZUfvLzEuaw21HrK4QyXGqWGVH7y8xLmsNtR6yuEMlxqlhlR+8vMS5rDbUesrhDJcapYZUfvLzEuaw6qtiI9HrKWxfR0NsmHtX1QsMqNJPRYg8S5sLlHoPEHyRTG1W0fkbR+RtH5G0fkbR+RtH5G0fkb1cJw2e9odovnhIp2eS+ZL8tpHO2kc7aRztpHO2kc7aRztpHO2kc7B2j2c+eD4Zpair5p90ZEUnJfdXbaPyNo/I2j8jaPyNo/I2j8jaPyMTvxQd976gNi+wcUpL/WHF7TxSkv9YcXtPFKS/1hxe08UpL/AFhxe08UpL/WHF7TxSkv9YcXtPFKS/1hxe08UpL/AFhxewI9CEsEvTvEiNdwqC13CoLXcKgtdwqC13CoLXcKgtdwqC1v4YV4gs97O7RA3dhqqLZ6L8KjXg6ZNeDpk14OmTXg6ZNeDpk14OmTXg6ZNeDpkw9n9ngb3xCS1e7/AAjW/hRT9XgtdwqC13CoLXcKgtdwqC13CoLXcKgtdwqCxPChbRHzXukirmzgS80V4KL+8olRLLXYqsmHtS2xCX+JUaApYiRBonNmsNtR6yuEMlxqlhlR+8vMS5rDbUesrhDJcapYZUfvLzEuaw21HrK4QyXGqWGVH7y8xLmsNtR6yuEMlxqlhlR+8vMS5rDbUesrhDJcapYZUfvLzEuaw21HrK4QyXGqWGVH7y8xLmsNtR6yuEMlxqlhlR+8vMS5q5eF6AaEv7shgSEJJaip9ZLzwyQu4CAtnzJhyekgito2r90kqqrYiNFvna2gb4yH9FXNu45jYh0PwD1URspRlcmylGVybKUZXJspRlcmylGVybKUZXJspRlcmsLtGLVF/vFLQQ7QixFPREfE2UoyuTZSjK5NlKMrk2UoyuTZSjK5NlKMrk2UoyuTeG+jol4K/wBJPVVP+AH/xAAoEAABAgUDBAIDAQAAAAAAAAABAPARMFFxwSFAYTFBUKGBsYCR0ZD/2gAIAQEAAT8h/P8A4J2T0nVhOrCdWE6sJ1YTqwnVhEoL6kgA9S9fFxED6TqwnVhOrCdWE6sJ1YTqwuEdA9jbRoBAyhMFC+2bQJIclZQALr9Rk6bVK0JIRH5kwD3GiAPYoPBFlygbVzolOryWGrfwHOiU6vJYat/Ac6JTq8lhq38BzolOryWGrfwHOiU6vJYat/Ac6JTq8lhq38BzolOryWGrfwBHCEmmiUMQEiBQ6mSNoEGLxSimxIg7YGgrRYL9/lczbrmbdczbrmbdczbrmbdczbowgDT0I6P2UWbMNLqCRprCC4m2XE2y4m2XE2y4m2XE2y4m2XE2y6tWBFjoS8NOUVDDlH9LmbdczbrmbdczbrmbdczbrmbdQuIIHQvB7I6mJ37q0lxo8S6tJcaPEurSXGjxLq0lxo8S6tJcaPEurSXGjxLq0lxo8S6tJcaPAFnDRj0isCYp1ZTqynVlOrKdWU6sp1ZR5onYf2QiPHWTpA9R2TqwnVhOrCdWE6sJ1YTqwnVhFzcVkIwOgOpMUNaj2ivtOrKdWU6sp1ZTqynVlOrKhN5o6FgYn42wJoOKghKBzI5Hc6j6AkwooGiOhjlDhBpQAtq50SnV5LDVv4DnRKdXksNW/gOdEp1eSw1b+A50SnV5LDVv4DnRKdXksNW/gOdEp1eSw1b+A50SnV5LDVv4EeP4sAFRD3GiAPcSYbaa6hB1HuTTmpESAe5IywESSYABR8BqpJG2FRr/ACYFNzKbmU3MpuZTcym5lNzKJes4Ew+5egkAAA9puZTcym5lNzKbmU3MpuZRl1HFb4J/wA//2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNPPPPNPPPOPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPHPPPOPPPPPPPPPPPPPPPLDDDDHPPPOLDDDLPPPPPPPPPPPPPPPPPPPKPPPPPPPPPPPPPPPPPPPPPPPPKPPPPPPPPPPPPPPPPPPPPPPPPKPPPPPPPPPPPPPPPPMMMNOMMMJMMMMPPPPPPPPPPPPPPPPNPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPGPPPPNPPPPPPPPJPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP/xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/EBx//8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPxAcf//EACYQAQABAwQBBQEBAQEAAAAAAAERACExMFDw8UFAUWFxgZGhgJD/2gAIAQEAAT8Q/wC/7iwi5HtITQrVq1atWrCYGTo91YGmFR4LPuJBNCtWrVq1ashDEGcXFwPTMgkmUNR+NBDFHgkAGjGQMElGBYlk+V0Z5/JGGs5ADHmL2oAINBHwCRqEGyJkowgOspMT9B689m533LVRHs3O+5aqI9m533LVRHs3O+5aqI9m533LVRHs3O+5aqI9m532jVRKGE+AMr9aRbEZ5iB/Ef3REhc/ylj/ADSBSf8AhFB/npgQrBGWBKMPeT812GvYa9hr2GvYa9hr2Gpvwi7fIkP6NGdVgHBWMCAAY8AD0GvQa9Br0GvQa9Br0GvQaoA4tpWaDaBQ+Uxag7pCD7WQfwrsNew17DXsNew17DXsNVC+nwRDKqvkhPCUlElbq+vxc7blW4udtyrcXO25VuLnbcq3FztuVbi523Ktxc7blW4udtprQPDZ/YhgPiQnJbQq1atWrVqnZQW6PwSalFaSYDLLyEHLNodGrVq1atWrVYBaqOR+8hLB7EzZWRExA+wcaFWrVq1atUQqIDAlRkHwX0xHUpwCT9KACDROYeHikfmB+aPkbIkEb9njSCi7bBED6D157NzvuWqiPZud9y1UR7NzvuWqiPZud9y1UR7NzvuWqiPZud9y1UR7NzvtGqigkRZmQf4UD4BI1IhZEw6MktLQEshaSx9kTJowshWgFKuJQfbotXweCJVWwBlr5etjM/RPTY2XGH0I86AMGDBgwYMKoQ8D2Ri0qsukbFYO/sAQNAGDBgwYMH/q6K5SP8/8AP/Z'/%3e%3c/defs%3e%3c/svg%3e", Xc = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.8742%204.5804L18.5392%208.15088C18.8511%208.45416%2019.0047%208.76103%2018.9999%209.07026C18.995%209.3795%2018.8608%209.66136%2018.5984%209.91707C18.3239%2010.1847%2018.0277%2010.3203%2017.7109%2010.3262C17.3941%2010.331%2017.0797%2010.1811%2016.7677%209.87785L13.0193%206.22648C12.5937%205.8114%2012.1825%205.51762%2011.7872%205.34516C11.3917%205.1727%2010.9758%205.14535%2010.5405%205.26428C10.104%205.38203%209.63603%205.68532%209.13422%206.17295C8.44258%206.84733%208.11246%207.48007%208.14634%208.0712C8.18018%208.6623%208.52358%209.27602%209.17534%209.90996L12.954%2013.5922C13.2696%2013.8991%2013.4244%2014.2059%2013.4195%2014.5104C13.4147%2014.8161%2013.2793%2015.098%2013.012%2015.3584C12.746%2015.6177%2012.4522%2015.7533%2012.133%2015.764C11.8137%2015.7747%2011.4957%2015.6261%2011.1813%2015.3192L7.51634%2011.7487C6.92022%2011.1683%206.48975%2010.6188%206.22495%2010.1002C5.96014%209.58168%205.86099%208.99533%205.92991%208.34118C5.99158%207.78099%206.17416%207.23864%206.47887%206.71294C6.78237%206.18723%207.21768%205.64964%207.78237%205.09896C8.45466%204.44362%209.09673%203.94171%209.70858%203.59203C10.3192%203.24236%2010.9105%203.04849%2011.4812%203.00806C12.0532%202.96762%2012.6166%203.07942%2013.1741%203.34346C13.7315%203.6075%2014.2974%204.01902%2014.873%204.5804H14.8742Z'%20fill='url(%23paint0_linear_4212_6487)'/%3e%3cpath%20d='M9.12459%2018.9872L5.46081%2015.4167C5.14884%2015.1122%204.99527%2014.8066%205.00011%2014.4973C5.00495%2014.1881%205.13917%2013.9062%205.40156%2013.6505C5.67604%2013.3829%205.97229%2013.2473%206.28909%2013.2414C6.60589%2013.2366%206.92028%2013.3853%207.23225%2013.6897L10.9795%2017.3411C11.4063%2017.7562%2011.8162%2018.05%2012.2116%2018.2224C12.607%2018.3949%2013.023%2018.421%2013.4595%2018.3033C13.896%2018.1856%2014.3639%2017.8823%2014.8657%2017.3934C15.5574%2016.7191%2015.8875%2016.0863%2015.8537%2015.4952C15.8198%2014.9041%2015.4764%2014.2904%2014.8247%2013.6553L12.8114%2011.7106C12.4958%2011.4038%2012.341%2011.0969%2012.3458%2010.7925C12.3507%2010.4868%2012.4861%2010.2049%2012.7533%209.94445C13.0194%209.68514%2013.3132%209.54957%2013.6324%209.53887C13.9516%209.52816%2014.2696%209.67682%2014.584%209.9837L16.4824%2011.8165C17.0785%2012.3969%2017.509%2012.9464%2017.7738%2013.465C18.0386%2013.9835%2018.1378%2014.5699%2018.0688%2015.224C18.0072%2015.7842%2017.8246%2016.3266%2017.5199%2016.8523C17.2164%2017.378%2016.7811%2017.9156%2016.2164%2018.4663C15.5441%2019.1216%2014.902%2019.6235%2014.2902%2019.9732C13.6783%2020.3229%2013.0871%2020.5179%2012.5151%2020.5583C11.9432%2020.5988%2011.3797%2020.487%2010.8223%2020.2229C10.2648%2019.9589%209.69894%2019.5474%209.12338%2018.986L9.12459%2018.9872Z'%20fill='url(%23paint1_linear_4212_6487)'/%3e%3cpath%20d='M11.4098%209.77448C12.153%209.77448%2012.7556%209.18182%2012.7556%208.4507C12.7556%207.71962%2012.153%207.12695%2011.4098%207.12695C10.6665%207.12695%2010.064%207.71962%2010.064%208.4507C10.064%209.18182%2010.6665%209.77448%2011.4098%209.77448Z'%20fill='url(%23paint2_radial_4212_6487)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_4212_6487'%20x1='17.9364'%20y1='6.66057'%20x2='6.64095'%20y2='11.7639'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23201C1B'/%3e%3cstop%20offset='0.36'%20stop-color='%2377390D'/%3e%3cstop%20offset='0.67'%20stop-color='%23EA8101'/%3e%3cstop%20offset='1'%20stop-color='%23F4B852'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_4212_6487'%20x1='6.3763'%20y1='17.0541'%20x2='19.5023'%20y2='13.0825'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%231F1D1C'/%3e%3cstop%20offset='0.37'%20stop-color='%2377390D'/%3e%3cstop%20offset='0.67'%20stop-color='%23EA8101'/%3e%3cstop%20offset='1'%20stop-color='%23F4FB52'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint2_radial_4212_6487'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(11.4098%208.45191)%20scale(1.34581%201.32377)'%3e%3cstop%20stop-color='%23F4B852'/%3e%3cstop%20offset='0.33'%20stop-color='%23EA8101'/%3e%3cstop%20offset='0.64'%20stop-color='%2377390D'/%3e%3cstop%20offset='1'%20stop-color='%23211C1D'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e", qc = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.4283%2019.185V16.4677C19.4283%2016.36%2019.3855%2016.2572%2019.3092%2016.1809L7.74741%204.61916C7.67106%204.54281%207.56829%204.5%207.46055%204.5H4.74332C4.60917%204.5%204.5%204.60917%204.5%204.74332V7.26787C4.5%207.37562%204.54281%207.47837%204.61916%207.55472L8.76923%2011.7047C8.86412%2011.7997%208.86412%2011.9538%208.76923%2012.0487L4.57136%2016.2465C4.52569%2016.2922%204.5%2016.3543%204.5%2016.4185V19.185C4.5%2019.319%204.60917%2019.4283%204.74332%2019.4283H9.28369C9.41784%2019.4283%209.527%2019.319%209.527%2019.185V17.5552C9.527%2017.491%209.55271%2017.4289%209.59838%2017.3832L11.8504%2015.1312C11.9453%2015.0363%2012.0994%2015.0363%2012.1943%2015.1312L16.3729%2019.3099C16.4492%2019.3862%2016.552%2019.429%2016.6597%2019.429H19.1843C19.3185%2019.429%2019.4276%2019.3198%2019.4276%2019.1857L19.4283%2019.185Z'%20fill='white'/%3e%3cpath%20d='M13.372%208.09816H15.6461C15.781%208.09816%2015.8909%208.20805%2015.8909%208.34292V10.617C15.8909%2010.8353%2016.1549%2010.9445%2016.309%2010.7897L19.4287%207.66505C19.4743%207.61937%2019.5001%207.5573%2019.5001%207.49236V4.75588C19.5001%204.62102%2019.3908%204.51114%2019.2553%204.51114L16.4781%204.50757C16.4132%204.50757%2016.3511%204.53326%2016.3047%204.57892L13.1986%207.68003C13.0445%207.83415%2013.1537%208.09816%2013.3713%208.09816H13.372Z'%20fill='%23EE7A30'/%3e%3c/svg%3e";
function ps(e, t = 4, r = 5) {
  if (e.length <= t + r)
    return e;
  const n = e.slice(0, t), i = e.slice(e.length - r);
  return `${n}...${i}`;
}
const Th = {
  [ee.MAGICEDEN]: Vc,
  [ee.UNISAT]: Xc,
  [ee.XVERSE]: qc,
  [ee.LEATHER]: Wc,
  [ee.OKX]: Gc
}, _h = {
  [Zn.MAINNET]: "Mainnet",
  [Zn.TESTNET]: "Testnet",
  [Zn.SIGNET]: "Signet"
};
function Ih({
  address: e,
  network: t,
  onViewProfile: r,
  onChangeWallet: n,
  onDisconnectWallet: i,
  renderAvatar: o
}) {
  const { wallet: s } = zt();
  return /* @__PURE__ */ Y.jsx(
    mn,
    {
      as: "section",
      className: "ord-connect-font ord-wallet-connected-container relative inline-block text-left",
      children: ({ open: a }) => /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
        /* @__PURE__ */ Y.jsxs(mn.Button, { className: "ord-wallet-connected-button", children: [
          /* @__PURE__ */ Y.jsxs("div", { className: "wallet-identifier-container", children: [
            o ? o(e, "large") : /* @__PURE__ */ Y.jsx(
              Ec,
              {
                size: 28,
                variant: "beam",
                name: e,
                colors: ["#1C2DCB", "#F226B8"]
              }
            ),
            /* @__PURE__ */ Y.jsx(
              "img",
              {
                src: Th[s],
                alt: `${s} is connected`
              }
            )
          ] }),
          /* @__PURE__ */ Y.jsxs("section", { className: "address-container", children: [
            /* @__PURE__ */ Y.jsx("p", { className: "address", children: ps(e) }),
            /* @__PURE__ */ Y.jsxs("section", { className: "network-container", children: [
              /* @__PURE__ */ Y.jsx("div", { className: "status-indicator" }),
              /* @__PURE__ */ Y.jsx("p", { className: "network", children: _h[t] ?? t })
            ] })
          ] }),
          /* @__PURE__ */ Y.jsx(
            "img",
            {
              src: Sh,
              className: `dropdown-button ${a ? "close-dropdown-button" : "expand-dropdown-button"}`,
              alt: ""
            }
          )
        ] }),
        /* @__PURE__ */ Y.jsx(
          xi,
          {
            as: mt,
            enter: "transition ease-out duration-100",
            enterFrom: "transform opacity-0 scale-95",
            enterTo: "transform opacity-100 scale-100",
            leave: "transition ease-in duration-75",
            leaveFrom: "transform opacity-100 scale-100",
            leaveTo: "transform opacity-0 scale-95",
            children: /* @__PURE__ */ Y.jsxs(mn.Items, { className: "ord-wallet-connection-dropdown", children: [
              /* @__PURE__ */ Y.jsxs(
                mn.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => r == null ? void 0 : r(),
                  children: [
                    /* @__PURE__ */ Y.jsx("span", { className: "label", children: "View profile" }),
                    /* @__PURE__ */ Y.jsx("span", { className: "value", children: ps(e) })
                  ]
                }
              ),
              /* @__PURE__ */ Y.jsx(
                mn.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => n == null ? void 0 : n(),
                  children: /* @__PURE__ */ Y.jsx("span", { className: "change-wallet-label", children: "Change wallet" })
                }
              ),
              /* @__PURE__ */ Y.jsx("hr", { className: "horizontal-separator" }),
              /* @__PURE__ */ Y.jsxs(
                mn.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => i == null ? void 0 : i(),
                  children: [
                    /* @__PURE__ */ Y.jsx("span", { className: "label", children: "Disconnect wallet" }),
                    /* @__PURE__ */ Y.jsx("img", { src: vh, className: "logout-icon", alt: "" })
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
function Oh({
  openModal: e,
  disabled: t
}) {
  return /* @__PURE__ */ Y.jsx(
    "button",
    {
      type: "button",
      onClick: e,
      disabled: t,
      "data-testid": "connect-wallet-button",
      className: "ord-connect-font ord-connect-wallet-button",
      children: /* @__PURE__ */ Y.jsx("span", {})
    }
  );
}
const kh = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2022C17.5228%2022%2022%2017.5228%2022%2012C22%206.47715%2017.5228%202%2012%202C6.47715%202%202%206.47715%202%2012C2%2017.5228%206.47715%2022%2012%2022Z'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%209L9%2015'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%209L15%2015'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
function Yc() {
  return typeof window > "u" ? !1 : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );
}
async function xh() {
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
const Bh = {
  [ee.OKX]: "https://www.okx.com/web3",
  [ee.MAGICEDEN]: "https://wallet.magiceden.io/",
  [ee.UNISAT]: "https://unisat.io/download",
  // their www subdomain doesn't work
  [ee.XVERSE]: "https://www.xverse.app/download",
  [ee.LEATHER]: "https://leather.io/install-extension"
}, Ch = async ({
  network: e,
  wallet: t,
  chain: r = qt.BITCOIN
}, { readOnly: n = !1 } = {}) => {
  switch (t) {
    case ee.UNISAT: {
      const i = await Hl(e, r, { readOnly: n });
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
    case ee.XVERSE: {
      const i = await $l(e);
      if (console.log("xverse1", i), !i || i.length < 1)
        throw new Error("Xverse via Ordit returned no addresses");
      const o = i.find(
        (a) => a.format === "p2sh-p2wpkh" || a.format === "segwit"
      );
      if (!o)
        throw new Error(
          "Xverse via Ordit did not return a P2SH or Segwit address"
        );
      const s = i.find(
        (a) => a.format === "taproot"
      );
      if (!s)
        throw new Error("Xverse via Ordit did not return a Taproot address");
      return console.log("xverse2", s, o), {
        address: {
          ordinals: s.address,
          payments: o.address
        },
        publicKey: {
          ordinals: s.publicKey,
          payments: o.publicKey
        },
        format: {
          ordinals: s.format,
          payments: o.format
        }
      };
    }
    case ee.MAGICEDEN: {
      const i = await Cl(e);
      if (!i || i.length < 1)
        throw new Error("Magic Eden via Ordit returned no addresses");
      const o = i.find(
        (a) => a.format === "segwit" || a.format === "p2sh-p2wpkh"
      );
      if (!o)
        throw new Error(
          "Magic Eden via Ordit did not return a P2SH or Segwit address"
        );
      const s = i.find(
        (a) => a.format === "taproot"
      );
      if (!s)
        throw new Error(
          "Magic Eden via Ordit did not return a Taproot address"
        );
      return {
        address: {
          ordinals: s.address,
          payments: o.address
        },
        publicKey: {
          ordinals: s.publicKey,
          payments: o.publicKey
        },
        format: {
          ordinals: s.format,
          payments: o.format
        }
      };
    }
    case ee.LEATHER: {
      const i = await kl(e);
      if (!i || i.length < 1)
        throw new Error("Leather via Ordit returned no addresses");
      const o = i.find(
        (a) => a.format === "segwit"
      );
      if (!o)
        throw new Error("Leather via Ordit did not return a Segwit address");
      const s = i.find(
        (a) => a.format === "taproot"
      );
      if (!s)
        throw new Error("Leather via Ordit did not return a Taproot address");
      return {
        address: {
          ordinals: s.address,
          payments: o.address
        },
        publicKey: {
          ordinals: s.publicKey,
          payments: o.publicKey
        },
        format: {
          ordinals: s.format,
          payments: o.format
        }
      };
    }
    case ee.OKX: {
      const i = await Fl(e);
      if (!i || i.length < 1)
        throw new Error("OKX via Ordit returned no addresses");
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
function Nh({
  onClose: e,
  onError: t
}) {
  const {
    updateAddress: r,
    network: n,
    updateWallet: i,
    updatePublicKey: o,
    updateFormat: s,
    disconnectWallet: a,
    address: l,
    publicKey: p,
    format: f,
    wallet: d,
    chain: S
  } = zt(), m = (O, x) => {
    t(x.message ?? x.toString()), console.error(`Error while connecting to ${O} wallet`, x), a(), x instanceof _l && window.open(
      Bh[O],
      "_blank",
      "noopener,noreferrer"
    );
  }, B = async (O, { readOnly: x = !1 } = {}) => {
    try {
      const { address: $, publicKey: A, format: k } = await Ch(
        { network: n, wallet: O, chain: S },
        { readOnly: x }
      );
      return r({
        ordinals: $.ordinals,
        payments: $.payments
      }), o({
        ordinals: A.ordinals,
        payments: A.payments
      }), i(O), s({
        ordinals: k.ordinals,
        payments: k.payments
      }), e(), !0;
    } catch ($) {
      return m(O, $), !1;
    }
  };
  return Se(() => {
    if (d !== ee.UNISAT) {
      console.log("connectedWallet", d);
      return;
    }
    let O = !0, x = !1;
    const $ = () => B(ee.UNISAT);
    return l && p && f && (async () => {
      const k = await xh();
      if (O) {
        if (!k) {
          a();
          return;
        }
        x = await B(ee.UNISAT, {
          readOnly: !0
        }), O && x && window.unisat.addListener("accountsChanged", $);
      }
    })(), () => {
      O = !1, x && window.unisat.removeListener("accountsChanged", $);
    };
  }, [d]), { connectWallet: B };
}
const Rh = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%2018L15%2012L9%206'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Fh = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20stroke='%23fff'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20stroke-width='2'%3e%3ccircle%20cx='22'%20cy='22'%20r='1'%3e%3canimate%20attributeName='r'%20begin='0s'%20dur='1.8s'%20values='1;%2020'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.165,%200.84,%200.44,%201'%20repeatCount='indefinite'/%3e%3canimate%20attributeName='stroke-opacity'%20begin='0s'%20dur='1.8s'%20values='1;%200'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.3,%200.61,%200.355,%201'%20repeatCount='indefinite'/%3e%3c/circle%3e%3ccircle%20cx='22'%20cy='22'%20r='1'%3e%3canimate%20attributeName='r'%20begin='-0.9s'%20dur='1.8s'%20values='1;%2020'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.165,%200.84,%200.44,%201'%20repeatCount='indefinite'/%3e%3canimate%20attributeName='stroke-opacity'%20begin='-0.9s'%20dur='1.8s'%20values='1;%200'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.3,%200.61,%200.355,%201'%20repeatCount='indefinite'/%3e%3c/circle%3e%3c/g%3e%3c/svg%3e", Uh = {
  [ee.MAGICEDEN]: "Magic Eden",
  [ee.UNISAT]: "UniSat",
  [ee.XVERSE]: "Xverse",
  [ee.LEATHER]: "Leather",
  [ee.OKX]: "OKX"
};
function Lh({
  wallet: e,
  onConnect: t,
  icon: r,
  renderAvatar: n,
  isPreferred: i
}) {
  const o = Yc(), { wallet: s, address: a } = zt(), [l, p] = Pe(!1), f = Uh[e], d = async () => {
    p(!0);
    try {
      await t();
    } catch {
    }
    p(!1);
  }, S = s === e && a.ordinals;
  return /* @__PURE__ */ Y.jsx(
    "button",
    {
      type: "button",
      className: "wallet-option-button",
      onClick: d,
      children: /* @__PURE__ */ Y.jsxs("div", { className: "option-wrapper", children: [
        /* @__PURE__ */ Y.jsx("img", { className: "wallet-icon", src: r, alt: "" }),
        /* @__PURE__ */ Y.jsxs("div", { className: "wallet-option", children: [
          /* @__PURE__ */ Y.jsx("p", { className: "wallet-option-label", children: f }),
          /* @__PURE__ */ Y.jsx("p", { className: "wallet-option-subtitle", children: o ? "Available on app" : "" })
        ] }),
        s === e && a.ordinals ? /* @__PURE__ */ Y.jsxs("div", { className: "wallet-option-connected-address", children: [
          n ? n(a.ordinals, "small") : /* @__PURE__ */ Y.jsx(
            Ec,
            {
              size: o ? 12 : 16,
              variant: "beam",
              name: a.ordinals,
              colors: ["#1C2DCB", "#F226B8"]
            }
          ),
          /* @__PURE__ */ Y.jsx("span", { className: "label", children: ps(a.ordinals) })
        ] }) : null,
        !S && i ? /* @__PURE__ */ Y.jsx("span", { className: "preferred-label", children: "Preferred" }) : null,
        l ? /* @__PURE__ */ Y.jsx(
          "img",
          {
            src: Fh,
            width: o ? 20 : 24,
            height: o ? 20 : 24,
            alt: `${f} extension is loading`
          }
        ) : /* @__PURE__ */ Y.jsx(
          "img",
          {
            src: Rh,
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
const Hh = {
  [qt.BITCOIN]: "Bitcoin",
  [qt.FRACTAL_BITCOIN]: "Fractal Bitcoin"
};
function Mh({
  isOpen: e,
  closeModal: t,
  renderAvatar: r,
  preferredWallet: n,
  walletsOrder: i,
  visibleWallets: o
}) {
  const [s, a] = Pe(""), { connectWallet: l } = Nh({
    onClose: t,
    onError: (m) => a(m)
  }), { network: p, chain: f } = zt(), d = Yc(), S = De(() => {
    const B = [
      {
        wallet: ee.OKX,
        onConnect: () => l(ee.OKX),
        icon: Gc,
        hidden: d && p !== Zn.MAINNET,
        order: 20,
        chains: [qt.BITCOIN]
      },
      {
        wallet: ee.UNISAT,
        onConnect: () => l(ee.UNISAT),
        icon: Xc,
        hidden: d,
        order: 21,
        chains: [qt.BITCOIN, qt.FRACTAL_BITCOIN]
      },
      {
        wallet: ee.XVERSE,
        onConnect: () => l(ee.XVERSE),
        icon: qc,
        order: 22,
        chains: [qt.BITCOIN]
      },
      {
        wallet: ee.MAGICEDEN,
        onConnect: () => l(ee.MAGICEDEN),
        icon: Vc,
        order: 23,
        chains: [qt.BITCOIN]
      },
      {
        wallet: ee.LEATHER,
        onConnect: () => l(ee.LEATHER),
        icon: Wc,
        hidden: d,
        order: 24,
        chains: [qt.BITCOIN]
      }
    ].filter((x) => (o || []).includes(x.wallet)).filter(
      (x) => x.chains.includes(f) && !x.hidden
    );
    return i ? B.map((x) => {
      const $ = i.findIndex(
        (A) => A === x.wallet
      );
      return $ >= 0 ? { ...x, order: $ } : x;
    }).sort((x, $) => x.order - $.order) : B;
  }, [d, p, i, l, f]);
  return /* @__PURE__ */ Y.jsx(xi, { appear: !0, show: e, as: mt, children: /* @__PURE__ */ Y.jsxs(
    ko,
    {
      as: "div",
      className: "ord-connect-font ord-connect-wallet-modal",
      onClose: t,
      children: [
        /* @__PURE__ */ Y.jsx(
          xi.Child,
          {
            as: mt,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ Y.jsx("section", { className: "backdrop" })
          }
        ),
        /* @__PURE__ */ Y.jsx("section", { className: "outer-container", children: /* @__PURE__ */ Y.jsx("div", { className: "inner-container", children: /* @__PURE__ */ Y.jsx(
          xi.Child,
          {
            as: mt,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ Y.jsxs(ko.Panel, { className: "panel", children: [
              /* @__PURE__ */ Y.jsxs("section", { className: "panel-title-container", children: [
                /* @__PURE__ */ Y.jsxs(ko.Title, { as: "h3", className: "panel-title", children: [
                  "Choose ",
                  Hh[f],
                  " wallet to connect"
                ] }),
                /* @__PURE__ */ Y.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: t,
                    className: "close-button",
                    children: /* @__PURE__ */ Y.jsx("img", { src: kh, alt: "Close" })
                  }
                )
              ] }),
              /* @__PURE__ */ Y.jsxs("section", { className: "panel-content-container", children: [
                /* @__PURE__ */ Y.jsx("section", { className: "panel-content-inner-container", children: S.map((m, B) => {
                  const O = B === S.length - 1;
                  return /* @__PURE__ */ Y.jsxs(mt, { children: [
                    /* @__PURE__ */ Y.jsx(
                      Lh,
                      {
                        wallet: m.wallet,
                        onConnect: async () => {
                          a("");
                          const x = m.onConnect().then((A) => (A && a(""), A)), $ = await Promise.race([
                            x,
                            new Promise((A) => {
                              setTimeout(() => A("timeout"), 5e3);
                            })
                          ]);
                          return typeof $ == "string" ? (a(
                            "No wallet pop-up? The extension is not responding. Try reloading your browser."
                          ), x) : $;
                        },
                        icon: m.icon,
                        renderAvatar: r,
                        isPreferred: n === m.wallet
                      }
                    ),
                    !O && /* @__PURE__ */ Y.jsx("hr", { className: "horizontal-separator" })
                  ] }, m.wallet);
                }) }),
                /* @__PURE__ */ Y.jsx("p", { className: "error-message", children: s })
              ] })
            ] })
          }
        ) }) })
      ]
    }
  ) });
}
function Ng({
  hideConnectButton: e,
  onViewProfile: t,
  onChangeWalletClick: r,
  onDisconnectWalletClick: n,
  renderAvatar: i,
  preferredWallet: o,
  walletsOrder: s
}) {
  const {
    address: a,
    disconnectWallet: l,
    network: p,
    isModalOpen: f,
    openModal: d,
    closeModal: S,
    visibleWallets: m
  } = zt(), B = ef(), O = () => e ? null : a != null && a.ordinals ? /* @__PURE__ */ Y.jsx(
    Ih,
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
  ) : /* @__PURE__ */ Y.jsx(Oh, { disabled: !B, openModal: d });
  return /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
    O(),
    B ? /* @__PURE__ */ Y.jsx(
      Mh,
      {
        isOpen: f,
        closeModal: S,
        renderAvatar: i,
        preferredWallet: o,
        walletsOrder: s,
        visibleWallets: m
      }
    ) : null
  ] });
}
var Dh = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, No = Math.ceil, Ot = Math.floor, wt = "[BigNumber Error] ", Pa = wt + "Number primitive has more than 15 significant digits: ", Nt = 1e14, te = 14, Ro = 9007199254740991, Fo = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Ar = 1e7, We = 1e9;
function Qc(e) {
  var t, r, n, i = A.prototype = { constructor: A, toString: null, valueOf: null }, o = new A(1), s = 20, a = 4, l = -7, p = 21, f = -1e7, d = 1e7, S = !1, m = 1, B = 0, O = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, x = "0123456789abcdefghijklmnopqrstuvwxyz", $ = !0;
  function A(g, h) {
    var E, N, y, P, I, v, T, U, L = this;
    if (!(L instanceof A)) return new A(g, h);
    if (h == null) {
      if (g && g._isBigNumber === !0) {
        L.s = g.s, !g.c || g.e > d ? L.c = L.e = null : g.e < f ? L.c = [L.e = 0] : (L.e = g.e, L.c = g.c.slice());
        return;
      }
      if ((v = typeof g == "number") && g * 0 == 0) {
        if (L.s = 1 / g < 0 ? (g = -g, -1) : 1, g === ~~g) {
          for (P = 0, I = g; I >= 10; I /= 10, P++) ;
          P > d ? L.c = L.e = null : (L.e = P, L.c = [g]);
          return;
        }
        U = String(g);
      } else {
        if (!Dh.test(U = String(g))) return n(L, U, v);
        L.s = U.charCodeAt(0) == 45 ? (U = U.slice(1), -1) : 1;
      }
      (P = U.indexOf(".")) > -1 && (U = U.replace(".", "")), (I = U.search(/e/i)) > 0 ? (P < 0 && (P = I), P += +U.slice(I + 1), U = U.substring(0, I)) : P < 0 && (P = U.length);
    } else {
      if (Be(h, 2, x.length, "Base"), h == 10 && $)
        return L = new A(g), F(L, s + L.e + 1, a);
      if (U = String(g), v = typeof g == "number") {
        if (g * 0 != 0) return n(L, U, v, h);
        if (L.s = 1 / g < 0 ? (U = U.slice(1), -1) : 1, A.DEBUG && U.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Pa + g);
      } else
        L.s = U.charCodeAt(0) === 45 ? (U = U.slice(1), -1) : 1;
      for (E = x.slice(0, h), P = I = 0, T = U.length; I < T; I++)
        if (E.indexOf(N = U.charAt(I)) < 0) {
          if (N == ".") {
            if (I > P) {
              P = T;
              continue;
            }
          } else if (!y && (U == U.toUpperCase() && (U = U.toLowerCase()) || U == U.toLowerCase() && (U = U.toUpperCase()))) {
            y = !0, I = -1, P = 0;
            continue;
          }
          return n(L, String(g), v, h);
        }
      v = !1, U = r(U, h, 10, L.s), (P = U.indexOf(".")) > -1 ? U = U.replace(".", "") : P = U.length;
    }
    for (I = 0; U.charCodeAt(I) === 48; I++) ;
    for (T = U.length; U.charCodeAt(--T) === 48; ) ;
    if (U = U.slice(I, ++T)) {
      if (T -= I, v && A.DEBUG && T > 15 && (g > Ro || g !== Ot(g)))
        throw Error(Pa + L.s * g);
      if ((P = P - I - 1) > d)
        L.c = L.e = null;
      else if (P < f)
        L.c = [L.e = 0];
      else {
        if (L.e = P, L.c = [], I = (P + 1) % te, P < 0 && (I += te), I < T) {
          for (I && L.c.push(+U.slice(0, I)), T -= te; I < T; )
            L.c.push(+U.slice(I, I += te));
          I = te - (U = U.slice(I)).length;
        } else
          I -= T;
        for (; I--; U += "0") ;
        L.c.push(+U);
      }
    } else
      L.c = [L.e = 0];
  }
  A.clone = Qc, A.ROUND_UP = 0, A.ROUND_DOWN = 1, A.ROUND_CEIL = 2, A.ROUND_FLOOR = 3, A.ROUND_HALF_UP = 4, A.ROUND_HALF_DOWN = 5, A.ROUND_HALF_EVEN = 6, A.ROUND_HALF_CEIL = 7, A.ROUND_HALF_FLOOR = 8, A.EUCLID = 9, A.config = A.set = function(g) {
    var h, E;
    if (g != null)
      if (typeof g == "object") {
        if (g.hasOwnProperty(h = "DECIMAL_PLACES") && (E = g[h], Be(E, 0, We, h), s = E), g.hasOwnProperty(h = "ROUNDING_MODE") && (E = g[h], Be(E, 0, 8, h), a = E), g.hasOwnProperty(h = "EXPONENTIAL_AT") && (E = g[h], E && E.pop ? (Be(E[0], -We, 0, h), Be(E[1], 0, We, h), l = E[0], p = E[1]) : (Be(E, -We, We, h), l = -(p = E < 0 ? -E : E))), g.hasOwnProperty(h = "RANGE"))
          if (E = g[h], E && E.pop)
            Be(E[0], -We, -1, h), Be(E[1], 1, We, h), f = E[0], d = E[1];
          else if (Be(E, -We, We, h), E)
            f = -(d = E < 0 ? -E : E);
          else
            throw Error(wt + h + " cannot be zero: " + E);
        if (g.hasOwnProperty(h = "CRYPTO"))
          if (E = g[h], E === !!E)
            if (E)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                S = E;
              else
                throw S = !E, Error(wt + "crypto unavailable");
            else
              S = E;
          else
            throw Error(wt + h + " not true or false: " + E);
        if (g.hasOwnProperty(h = "MODULO_MODE") && (E = g[h], Be(E, 0, 9, h), m = E), g.hasOwnProperty(h = "POW_PRECISION") && (E = g[h], Be(E, 0, We, h), B = E), g.hasOwnProperty(h = "FORMAT"))
          if (E = g[h], typeof E == "object") O = E;
          else throw Error(wt + h + " not an object: " + E);
        if (g.hasOwnProperty(h = "ALPHABET"))
          if (E = g[h], typeof E == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(E))
            $ = E.slice(0, 10) == "0123456789", x = E;
          else
            throw Error(wt + h + " invalid: " + E);
      } else
        throw Error(wt + "Object expected: " + g);
    return {
      DECIMAL_PLACES: s,
      ROUNDING_MODE: a,
      EXPONENTIAL_AT: [l, p],
      RANGE: [f, d],
      CRYPTO: S,
      MODULO_MODE: m,
      POW_PRECISION: B,
      FORMAT: O,
      ALPHABET: x
    };
  }, A.isBigNumber = function(g) {
    if (!g || g._isBigNumber !== !0) return !1;
    if (!A.DEBUG) return !0;
    var h, E, N = g.c, y = g.e, P = g.s;
    e: if ({}.toString.call(N) == "[object Array]") {
      if ((P === 1 || P === -1) && y >= -We && y <= We && y === Ot(y)) {
        if (N[0] === 0) {
          if (y === 0 && N.length === 1) return !0;
          break e;
        }
        if (h = (y + 1) % te, h < 1 && (h += te), String(N[0]).length == h) {
          for (h = 0; h < N.length; h++)
            if (E = N[h], E < 0 || E >= Nt || E !== Ot(E)) break e;
          if (E !== 0) return !0;
        }
      }
    } else if (N === null && y === null && (P === null || P === 1 || P === -1))
      return !0;
    throw Error(wt + "Invalid BigNumber: " + g);
  }, A.maximum = A.max = function() {
    return C(arguments, -1);
  }, A.minimum = A.min = function() {
    return C(arguments, 1);
  }, A.random = function() {
    var g = 9007199254740992, h = Math.random() * g & 2097151 ? function() {
      return Ot(Math.random() * g);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(E) {
      var N, y, P, I, v, T = 0, U = [], L = new A(o);
      if (E == null ? E = s : Be(E, 0, We), I = No(E / te), S)
        if (crypto.getRandomValues) {
          for (N = crypto.getRandomValues(new Uint32Array(I *= 2)); T < I; )
            v = N[T] * 131072 + (N[T + 1] >>> 11), v >= 9e15 ? (y = crypto.getRandomValues(new Uint32Array(2)), N[T] = y[0], N[T + 1] = y[1]) : (U.push(v % 1e14), T += 2);
          T = I / 2;
        } else if (crypto.randomBytes) {
          for (N = crypto.randomBytes(I *= 7); T < I; )
            v = (N[T] & 31) * 281474976710656 + N[T + 1] * 1099511627776 + N[T + 2] * 4294967296 + N[T + 3] * 16777216 + (N[T + 4] << 16) + (N[T + 5] << 8) + N[T + 6], v >= 9e15 ? crypto.randomBytes(7).copy(N, T) : (U.push(v % 1e14), T += 7);
          T = I / 7;
        } else
          throw S = !1, Error(wt + "crypto unavailable");
      if (!S)
        for (; T < I; )
          v = h(), v < 9e15 && (U[T++] = v % 1e14);
      for (I = U[--T], E %= te, I && E && (v = Fo[te - E], U[T] = Ot(I / v) * v); U[T] === 0; U.pop(), T--) ;
      if (T < 0)
        U = [P = 0];
      else {
        for (P = -1; U[0] === 0; U.splice(0, 1), P -= te) ;
        for (T = 1, v = U[0]; v >= 10; v /= 10, T++) ;
        T < te && (P -= te - T);
      }
      return L.e = P, L.c = U, L;
    };
  }(), A.sum = function() {
    for (var g = 1, h = arguments, E = new A(h[0]); g < h.length; ) E = E.plus(h[g++]);
    return E;
  }, r = /* @__PURE__ */ function() {
    var g = "0123456789";
    function h(E, N, y, P) {
      for (var I, v = [0], T, U = 0, L = E.length; U < L; ) {
        for (T = v.length; T--; v[T] *= N) ;
        for (v[0] += P.indexOf(E.charAt(U++)), I = 0; I < v.length; I++)
          v[I] > y - 1 && (v[I + 1] == null && (v[I + 1] = 0), v[I + 1] += v[I] / y | 0, v[I] %= y);
      }
      return v.reverse();
    }
    return function(E, N, y, P, I) {
      var v, T, U, L, j, G, q, J, pe = E.indexOf("."), Q = s, z = a;
      for (pe >= 0 && (L = B, B = 0, E = E.replace(".", ""), J = new A(N), G = J.pow(E.length - pe), B = L, J.c = h(
        er(_t(G.c), G.e, "0"),
        10,
        y,
        g
      ), J.e = J.c.length), q = h(E, N, y, I ? (v = x, g) : (v = g, x)), U = L = q.length; q[--L] == 0; q.pop()) ;
      if (!q[0]) return v.charAt(0);
      if (pe < 0 ? --U : (G.c = q, G.e = U, G.s = P, G = t(G, J, Q, z, y), q = G.c, j = G.r, U = G.e), T = U + Q + 1, pe = q[T], L = y / 2, j = j || T < 0 || q[T + 1] != null, j = z < 4 ? (pe != null || j) && (z == 0 || z == (G.s < 0 ? 3 : 2)) : pe > L || pe == L && (z == 4 || j || z == 6 && q[T - 1] & 1 || z == (G.s < 0 ? 8 : 7)), T < 1 || !q[0])
        E = j ? er(v.charAt(1), -Q, v.charAt(0)) : v.charAt(0);
      else {
        if (q.length = T, j)
          for (--y; ++q[--T] > y; )
            q[T] = 0, T || (++U, q = [1].concat(q));
        for (L = q.length; !q[--L]; ) ;
        for (pe = 0, E = ""; pe <= L; E += v.charAt(q[pe++])) ;
        E = er(E, U, v.charAt(0));
      }
      return E;
    };
  }(), t = /* @__PURE__ */ function() {
    function g(N, y, P) {
      var I, v, T, U, L = 0, j = N.length, G = y % Ar, q = y / Ar | 0;
      for (N = N.slice(); j--; )
        T = N[j] % Ar, U = N[j] / Ar | 0, I = q * T + U * G, v = G * T + I % Ar * Ar + L, L = (v / P | 0) + (I / Ar | 0) + q * U, N[j] = v % P;
      return L && (N = [L].concat(N)), N;
    }
    function h(N, y, P, I) {
      var v, T;
      if (P != I)
        T = P > I ? 1 : -1;
      else
        for (v = T = 0; v < P; v++)
          if (N[v] != y[v]) {
            T = N[v] > y[v] ? 1 : -1;
            break;
          }
      return T;
    }
    function E(N, y, P, I) {
      for (var v = 0; P--; )
        N[P] -= v, v = N[P] < y[P] ? 1 : 0, N[P] = v * I + N[P] - y[P];
      for (; !N[0] && N.length > 1; N.splice(0, 1)) ;
    }
    return function(N, y, P, I, v) {
      var T, U, L, j, G, q, J, pe, Q, z, ae, ve, pt, At, Et, re, Ne, ge = N.s == y.s ? 1 : -1, Oe = N.c, we = y.c;
      if (!Oe || !Oe[0] || !we || !we[0])
        return new A(
          // Return NaN if either NaN, or both Infinity or 0.
          !N.s || !y.s || (Oe ? we && Oe[0] == we[0] : !we) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            Oe && Oe[0] == 0 || !we ? ge * 0 : ge / 0
          )
        );
      for (pe = new A(ge), Q = pe.c = [], U = N.e - y.e, ge = P + U + 1, v || (v = Nt, U = kt(N.e / te) - kt(y.e / te), ge = ge / te | 0), L = 0; we[L] == (Oe[L] || 0); L++) ;
      if (we[L] > (Oe[L] || 0) && U--, ge < 0)
        Q.push(1), j = !0;
      else {
        for (At = Oe.length, re = we.length, L = 0, ge += 2, G = Ot(v / (we[0] + 1)), G > 1 && (we = g(we, G, v), Oe = g(Oe, G, v), re = we.length, At = Oe.length), pt = re, z = Oe.slice(0, re), ae = z.length; ae < re; z[ae++] = 0) ;
        Ne = we.slice(), Ne = [0].concat(Ne), Et = we[0], we[1] >= v / 2 && Et++;
        do {
          if (G = 0, T = h(we, z, re, ae), T < 0) {
            if (ve = z[0], re != ae && (ve = ve * v + (z[1] || 0)), G = Ot(ve / Et), G > 1)
              for (G >= v && (G = v - 1), q = g(we, G, v), J = q.length, ae = z.length; h(q, z, J, ae) == 1; )
                G--, E(q, re < J ? Ne : we, J, v), J = q.length, T = 1;
            else
              G == 0 && (T = G = 1), q = we.slice(), J = q.length;
            if (J < ae && (q = [0].concat(q)), E(z, q, ae, v), ae = z.length, T == -1)
              for (; h(we, z, re, ae) < 1; )
                G++, E(z, re < ae ? Ne : we, ae, v), ae = z.length;
          } else T === 0 && (G++, z = [0]);
          Q[L++] = G, z[0] ? z[ae++] = Oe[pt] || 0 : (z = [Oe[pt]], ae = 1);
        } while ((pt++ < At || z[0] != null) && ge--);
        j = z[0] != null, Q[0] || Q.splice(0, 1);
      }
      if (v == Nt) {
        for (L = 1, ge = Q[0]; ge >= 10; ge /= 10, L++) ;
        F(pe, P + (pe.e = L + U * te - 1) + 1, I, j);
      } else
        pe.e = U, pe.r = +j;
      return pe;
    };
  }();
  function k(g, h, E, N) {
    var y, P, I, v, T;
    if (E == null ? E = a : Be(E, 0, 8), !g.c) return g.toString();
    if (y = g.c[0], I = g.e, h == null)
      T = _t(g.c), T = N == 1 || N == 2 && (I <= l || I >= p) ? Ai(T, I) : er(T, I, "0");
    else if (g = F(new A(g), h, E), P = g.e, T = _t(g.c), v = T.length, N == 1 || N == 2 && (h <= P || P <= l)) {
      for (; v < h; T += "0", v++) ;
      T = Ai(T, P);
    } else if (h -= I, T = er(T, P, "0"), P + 1 > v) {
      if (--h > 0) for (T += "."; h--; T += "0") ;
    } else if (h += P - v, h > 0)
      for (P + 1 == v && (T += "."); h--; T += "0") ;
    return g.s < 0 && y ? "-" + T : T;
  }
  function C(g, h) {
    for (var E, N, y = 1, P = new A(g[0]); y < g.length; y++)
      N = new A(g[y]), (!N.s || (E = Dr(P, N)) === h || E === 0 && P.s === h) && (P = N);
    return P;
  }
  function M(g, h, E) {
    for (var N = 1, y = h.length; !h[--y]; h.pop()) ;
    for (y = h[0]; y >= 10; y /= 10, N++) ;
    return (E = N + E * te - 1) > d ? g.c = g.e = null : E < f ? g.c = [g.e = 0] : (g.e = E, g.c = h), g;
  }
  n = /* @__PURE__ */ function() {
    var g = /^(-?)0([xbo])(?=\w[\w.]*$)/i, h = /^([^.]+)\.$/, E = /^\.([^.]+)$/, N = /^-?(Infinity|NaN)$/, y = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(P, I, v, T) {
      var U, L = v ? I : I.replace(y, "");
      if (N.test(L))
        P.s = isNaN(L) ? null : L < 0 ? -1 : 1;
      else {
        if (!v && (L = L.replace(g, function(j, G, q) {
          return U = (q = q.toLowerCase()) == "x" ? 16 : q == "b" ? 2 : 8, !T || T == U ? G : j;
        }), T && (U = T, L = L.replace(h, "$1").replace(E, "0.$1")), I != L))
          return new A(L, U);
        if (A.DEBUG)
          throw Error(wt + "Not a" + (T ? " base " + T : "") + " number: " + I);
        P.s = null;
      }
      P.c = P.e = null;
    };
  }();
  function F(g, h, E, N) {
    var y, P, I, v, T, U, L, j = g.c, G = Fo;
    if (j) {
      e: {
        for (y = 1, v = j[0]; v >= 10; v /= 10, y++) ;
        if (P = h - y, P < 0)
          P += te, I = h, T = j[U = 0], L = Ot(T / G[y - I - 1] % 10);
        else if (U = No((P + 1) / te), U >= j.length)
          if (N) {
            for (; j.length <= U; j.push(0)) ;
            T = L = 0, y = 1, P %= te, I = P - te + 1;
          } else
            break e;
        else {
          for (T = v = j[U], y = 1; v >= 10; v /= 10, y++) ;
          P %= te, I = P - te + y, L = I < 0 ? 0 : Ot(T / G[y - I - 1] % 10);
        }
        if (N = N || h < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        j[U + 1] != null || (I < 0 ? T : T % G[y - I - 1]), N = E < 4 ? (L || N) && (E == 0 || E == (g.s < 0 ? 3 : 2)) : L > 5 || L == 5 && (E == 4 || N || E == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (P > 0 ? I > 0 ? T / G[y - I] : 0 : j[U - 1]) % 10 & 1 || E == (g.s < 0 ? 8 : 7)), h < 1 || !j[0])
          return j.length = 0, N ? (h -= g.e + 1, j[0] = G[(te - h % te) % te], g.e = -h || 0) : j[0] = g.e = 0, g;
        if (P == 0 ? (j.length = U, v = 1, U--) : (j.length = U + 1, v = G[te - P], j[U] = I > 0 ? Ot(T / G[y - I] % G[I]) * v : 0), N)
          for (; ; )
            if (U == 0) {
              for (P = 1, I = j[0]; I >= 10; I /= 10, P++) ;
              for (I = j[0] += v, v = 1; I >= 10; I /= 10, v++) ;
              P != v && (g.e++, j[0] == Nt && (j[0] = 1));
              break;
            } else {
              if (j[U] += v, j[U] != Nt) break;
              j[U--] = 0, v = 1;
            }
        for (P = j.length; j[--P] === 0; j.pop()) ;
      }
      g.e > d ? g.c = g.e = null : g.e < f && (g.c = [g.e = 0]);
    }
    return g;
  }
  function W(g) {
    var h, E = g.e;
    return E === null ? g.toString() : (h = _t(g.c), h = E <= l || E >= p ? Ai(h, E) : er(h, E, "0"), g.s < 0 ? "-" + h : h);
  }
  return i.absoluteValue = i.abs = function() {
    var g = new A(this);
    return g.s < 0 && (g.s = 1), g;
  }, i.comparedTo = function(g, h) {
    return Dr(this, new A(g, h));
  }, i.decimalPlaces = i.dp = function(g, h) {
    var E, N, y, P = this;
    if (g != null)
      return Be(g, 0, We), h == null ? h = a : Be(h, 0, 8), F(new A(P), g + P.e + 1, h);
    if (!(E = P.c)) return null;
    if (N = ((y = E.length - 1) - kt(this.e / te)) * te, y = E[y]) for (; y % 10 == 0; y /= 10, N--) ;
    return N < 0 && (N = 0), N;
  }, i.dividedBy = i.div = function(g, h) {
    return t(this, new A(g, h), s, a);
  }, i.dividedToIntegerBy = i.idiv = function(g, h) {
    return t(this, new A(g, h), 0, 1);
  }, i.exponentiatedBy = i.pow = function(g, h) {
    var E, N, y, P, I, v, T, U, L, j = this;
    if (g = new A(g), g.c && !g.isInteger())
      throw Error(wt + "Exponent not an integer: " + W(g));
    if (h != null && (h = new A(h)), v = g.e > 14, !j.c || !j.c[0] || j.c[0] == 1 && !j.e && j.c.length == 1 || !g.c || !g.c[0])
      return L = new A(Math.pow(+W(j), v ? g.s * (2 - yi(g)) : +W(g))), h ? L.mod(h) : L;
    if (T = g.s < 0, h) {
      if (h.c ? !h.c[0] : !h.s) return new A(NaN);
      N = !T && j.isInteger() && h.isInteger(), N && (j = j.mod(h));
    } else {
      if (g.e > 9 && (j.e > 0 || j.e < -1 || (j.e == 0 ? j.c[0] > 1 || v && j.c[1] >= 24e7 : j.c[0] < 8e13 || v && j.c[0] <= 9999975e7)))
        return P = j.s < 0 && yi(g) ? -0 : 0, j.e > -1 && (P = 1 / P), new A(T ? 1 / P : P);
      B && (P = No(B / te + 2));
    }
    for (v ? (E = new A(0.5), T && (g.s = 1), U = yi(g)) : (y = Math.abs(+W(g)), U = y % 2), L = new A(o); ; ) {
      if (U) {
        if (L = L.times(j), !L.c) break;
        P ? L.c.length > P && (L.c.length = P) : N && (L = L.mod(h));
      }
      if (y) {
        if (y = Ot(y / 2), y === 0) break;
        U = y % 2;
      } else if (g = g.times(E), F(g, g.e + 1, 1), g.e > 14)
        U = yi(g);
      else {
        if (y = +W(g), y === 0) break;
        U = y % 2;
      }
      j = j.times(j), P ? j.c && j.c.length > P && (j.c.length = P) : N && (j = j.mod(h));
    }
    return N ? L : (T && (L = o.div(L)), h ? L.mod(h) : P ? F(L, B, a, I) : L);
  }, i.integerValue = function(g) {
    var h = new A(this);
    return g == null ? g = a : Be(g, 0, 8), F(h, h.e + 1, g);
  }, i.isEqualTo = i.eq = function(g, h) {
    return Dr(this, new A(g, h)) === 0;
  }, i.isFinite = function() {
    return !!this.c;
  }, i.isGreaterThan = i.gt = function(g, h) {
    return Dr(this, new A(g, h)) > 0;
  }, i.isGreaterThanOrEqualTo = i.gte = function(g, h) {
    return (h = Dr(this, new A(g, h))) === 1 || h === 0;
  }, i.isInteger = function() {
    return !!this.c && kt(this.e / te) > this.c.length - 2;
  }, i.isLessThan = i.lt = function(g, h) {
    return Dr(this, new A(g, h)) < 0;
  }, i.isLessThanOrEqualTo = i.lte = function(g, h) {
    return (h = Dr(this, new A(g, h))) === -1 || h === 0;
  }, i.isNaN = function() {
    return !this.s;
  }, i.isNegative = function() {
    return this.s < 0;
  }, i.isPositive = function() {
    return this.s > 0;
  }, i.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, i.minus = function(g, h) {
    var E, N, y, P, I = this, v = I.s;
    if (g = new A(g, h), h = g.s, !v || !h) return new A(NaN);
    if (v != h)
      return g.s = -h, I.plus(g);
    var T = I.e / te, U = g.e / te, L = I.c, j = g.c;
    if (!T || !U) {
      if (!L || !j) return L ? (g.s = -h, g) : new A(j ? I : NaN);
      if (!L[0] || !j[0])
        return j[0] ? (g.s = -h, g) : new A(L[0] ? I : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          a == 3 ? -0 : 0
        ));
    }
    if (T = kt(T), U = kt(U), L = L.slice(), v = T - U) {
      for ((P = v < 0) ? (v = -v, y = L) : (U = T, y = j), y.reverse(), h = v; h--; y.push(0)) ;
      y.reverse();
    } else
      for (N = (P = (v = L.length) < (h = j.length)) ? v : h, v = h = 0; h < N; h++)
        if (L[h] != j[h]) {
          P = L[h] < j[h];
          break;
        }
    if (P && (y = L, L = j, j = y, g.s = -g.s), h = (N = j.length) - (E = L.length), h > 0) for (; h--; L[E++] = 0) ;
    for (h = Nt - 1; N > v; ) {
      if (L[--N] < j[N]) {
        for (E = N; E && !L[--E]; L[E] = h) ;
        --L[E], L[N] += Nt;
      }
      L[N] -= j[N];
    }
    for (; L[0] == 0; L.splice(0, 1), --U) ;
    return L[0] ? M(g, L, U) : (g.s = a == 3 ? -1 : 1, g.c = [g.e = 0], g);
  }, i.modulo = i.mod = function(g, h) {
    var E, N, y = this;
    return g = new A(g, h), !y.c || !g.s || g.c && !g.c[0] ? new A(NaN) : !g.c || y.c && !y.c[0] ? new A(y) : (m == 9 ? (N = g.s, g.s = 1, E = t(y, g, 0, 3), g.s = N, E.s *= N) : E = t(y, g, 0, m), g = y.minus(E.times(g)), !g.c[0] && m == 1 && (g.s = y.s), g);
  }, i.multipliedBy = i.times = function(g, h) {
    var E, N, y, P, I, v, T, U, L, j, G, q, J, pe, Q, z = this, ae = z.c, ve = (g = new A(g, h)).c;
    if (!ae || !ve || !ae[0] || !ve[0])
      return !z.s || !g.s || ae && !ae[0] && !ve || ve && !ve[0] && !ae ? g.c = g.e = g.s = null : (g.s *= z.s, !ae || !ve ? g.c = g.e = null : (g.c = [0], g.e = 0)), g;
    for (N = kt(z.e / te) + kt(g.e / te), g.s *= z.s, T = ae.length, j = ve.length, T < j && (J = ae, ae = ve, ve = J, y = T, T = j, j = y), y = T + j, J = []; y--; J.push(0)) ;
    for (pe = Nt, Q = Ar, y = j; --y >= 0; ) {
      for (E = 0, G = ve[y] % Q, q = ve[y] / Q | 0, I = T, P = y + I; P > y; )
        U = ae[--I] % Q, L = ae[I] / Q | 0, v = q * U + L * G, U = G * U + v % Q * Q + J[P] + E, E = (U / pe | 0) + (v / Q | 0) + q * L, J[P--] = U % pe;
      J[P] = E;
    }
    return E ? ++N : J.splice(0, 1), M(g, J, N);
  }, i.negated = function() {
    var g = new A(this);
    return g.s = -g.s || null, g;
  }, i.plus = function(g, h) {
    var E, N = this, y = N.s;
    if (g = new A(g, h), h = g.s, !y || !h) return new A(NaN);
    if (y != h)
      return g.s = -h, N.minus(g);
    var P = N.e / te, I = g.e / te, v = N.c, T = g.c;
    if (!P || !I) {
      if (!v || !T) return new A(y / 0);
      if (!v[0] || !T[0]) return T[0] ? g : new A(v[0] ? N : y * 0);
    }
    if (P = kt(P), I = kt(I), v = v.slice(), y = P - I) {
      for (y > 0 ? (I = P, E = T) : (y = -y, E = v), E.reverse(); y--; E.push(0)) ;
      E.reverse();
    }
    for (y = v.length, h = T.length, y - h < 0 && (E = T, T = v, v = E, h = y), y = 0; h; )
      y = (v[--h] = v[h] + T[h] + y) / Nt | 0, v[h] = Nt === v[h] ? 0 : v[h] % Nt;
    return y && (v = [y].concat(v), ++I), M(g, v, I);
  }, i.precision = i.sd = function(g, h) {
    var E, N, y, P = this;
    if (g != null && g !== !!g)
      return Be(g, 1, We), h == null ? h = a : Be(h, 0, 8), F(new A(P), g, h);
    if (!(E = P.c)) return null;
    if (y = E.length - 1, N = y * te + 1, y = E[y]) {
      for (; y % 10 == 0; y /= 10, N--) ;
      for (y = E[0]; y >= 10; y /= 10, N++) ;
    }
    return g && P.e + 1 > N && (N = P.e + 1), N;
  }, i.shiftedBy = function(g) {
    return Be(g, -Ro, Ro), this.times("1e" + g);
  }, i.squareRoot = i.sqrt = function() {
    var g, h, E, N, y, P = this, I = P.c, v = P.s, T = P.e, U = s + 4, L = new A("0.5");
    if (v !== 1 || !I || !I[0])
      return new A(!v || v < 0 && (!I || I[0]) ? NaN : I ? P : 1 / 0);
    if (v = Math.sqrt(+W(P)), v == 0 || v == 1 / 0 ? (h = _t(I), (h.length + T) % 2 == 0 && (h += "0"), v = Math.sqrt(+h), T = kt((T + 1) / 2) - (T < 0 || T % 2), v == 1 / 0 ? h = "5e" + T : (h = v.toExponential(), h = h.slice(0, h.indexOf("e") + 1) + T), E = new A(h)) : E = new A(v + ""), E.c[0]) {
      for (T = E.e, v = T + U, v < 3 && (v = 0); ; )
        if (y = E, E = L.times(y.plus(t(P, y, U, 1))), _t(y.c).slice(0, v) === (h = _t(E.c)).slice(0, v))
          if (E.e < T && --v, h = h.slice(v - 3, v + 1), h == "9999" || !N && h == "4999") {
            if (!N && (F(y, y.e + s + 2, 0), y.times(y).eq(P))) {
              E = y;
              break;
            }
            U += 4, v += 4, N = 1;
          } else {
            (!+h || !+h.slice(1) && h.charAt(0) == "5") && (F(E, E.e + s + 2, 1), g = !E.times(E).eq(P));
            break;
          }
    }
    return F(E, E.e + s + 1, a, g);
  }, i.toExponential = function(g, h) {
    return g != null && (Be(g, 0, We), g++), k(this, g, h, 1);
  }, i.toFixed = function(g, h) {
    return g != null && (Be(g, 0, We), g = g + this.e + 1), k(this, g, h);
  }, i.toFormat = function(g, h, E) {
    var N, y = this;
    if (E == null)
      g != null && h && typeof h == "object" ? (E = h, h = null) : g && typeof g == "object" ? (E = g, g = h = null) : E = O;
    else if (typeof E != "object")
      throw Error(wt + "Argument not an object: " + E);
    if (N = y.toFixed(g, h), y.c) {
      var P, I = N.split("."), v = +E.groupSize, T = +E.secondaryGroupSize, U = E.groupSeparator || "", L = I[0], j = I[1], G = y.s < 0, q = G ? L.slice(1) : L, J = q.length;
      if (T && (P = v, v = T, T = P, J -= P), v > 0 && J > 0) {
        for (P = J % v || v, L = q.substr(0, P); P < J; P += v) L += U + q.substr(P, v);
        T > 0 && (L += U + q.slice(P)), G && (L = "-" + L);
      }
      N = j ? L + (E.decimalSeparator || "") + ((T = +E.fractionGroupSize) ? j.replace(
        new RegExp("\\d{" + T + "}\\B", "g"),
        "$&" + (E.fractionGroupSeparator || "")
      ) : j) : L;
    }
    return (E.prefix || "") + N + (E.suffix || "");
  }, i.toFraction = function(g) {
    var h, E, N, y, P, I, v, T, U, L, j, G, q = this, J = q.c;
    if (g != null && (v = new A(g), !v.isInteger() && (v.c || v.s !== 1) || v.lt(o)))
      throw Error(wt + "Argument " + (v.isInteger() ? "out of range: " : "not an integer: ") + W(v));
    if (!J) return new A(q);
    for (h = new A(o), U = E = new A(o), N = T = new A(o), G = _t(J), P = h.e = G.length - q.e - 1, h.c[0] = Fo[(I = P % te) < 0 ? te + I : I], g = !g || v.comparedTo(h) > 0 ? P > 0 ? h : U : v, I = d, d = 1 / 0, v = new A(G), T.c[0] = 0; L = t(v, h, 0, 1), y = E.plus(L.times(N)), y.comparedTo(g) != 1; )
      E = N, N = y, U = T.plus(L.times(y = U)), T = y, h = v.minus(L.times(y = h)), v = y;
    return y = t(g.minus(E), N, 0, 1), T = T.plus(y.times(U)), E = E.plus(y.times(N)), T.s = U.s = q.s, P = P * 2, j = t(U, N, P, a).minus(q).abs().comparedTo(
      t(T, E, P, a).minus(q).abs()
    ) < 1 ? [U, N] : [T, E], d = I, j;
  }, i.toNumber = function() {
    return +W(this);
  }, i.toPrecision = function(g, h) {
    return g != null && Be(g, 1, We), k(this, g, h, 2);
  }, i.toString = function(g) {
    var h, E = this, N = E.s, y = E.e;
    return y === null ? N ? (h = "Infinity", N < 0 && (h = "-" + h)) : h = "NaN" : (g == null ? h = y <= l || y >= p ? Ai(_t(E.c), y) : er(_t(E.c), y, "0") : g === 10 && $ ? (E = F(new A(E), s + y + 1, a), h = er(_t(E.c), E.e, "0")) : (Be(g, 2, x.length, "Base"), h = r(er(_t(E.c), y, "0"), 10, g, N, !0)), N < 0 && E.c[0] && (h = "-" + h)), h;
  }, i.valueOf = i.toJSON = function() {
    return W(this);
  }, i._isBigNumber = !0, i[Symbol.toStringTag] = "BigNumber", i[Symbol.for("nodejs.util.inspect.custom")] = i.valueOf, e != null && A.set(e), A;
}
function kt(e) {
  var t = e | 0;
  return e > 0 || e === t ? t : t - 1;
}
function _t(e) {
  for (var t, r, n = 1, i = e.length, o = e[0] + ""; n < i; ) {
    for (t = e[n++] + "", r = te - t.length; r--; t = "0" + t) ;
    o += t;
  }
  for (i = o.length; o.charCodeAt(--i) === 48; ) ;
  return o.slice(0, i + 1 || 1);
}
function Dr(e, t) {
  var r, n, i = e.c, o = t.c, s = e.s, a = t.s, l = e.e, p = t.e;
  if (!s || !a) return null;
  if (r = i && !i[0], n = o && !o[0], r || n) return r ? n ? 0 : -a : s;
  if (s != a) return s;
  if (r = s < 0, n = l == p, !i || !o) return n ? 0 : !i ^ r ? 1 : -1;
  if (!n) return l > p ^ r ? 1 : -1;
  for (a = (l = i.length) < (p = o.length) ? l : p, s = 0; s < a; s++) if (i[s] != o[s]) return i[s] > o[s] ^ r ? 1 : -1;
  return l == p ? 0 : l > p ^ r ? 1 : -1;
}
function Be(e, t, r, n) {
  if (e < t || e > r || e !== Ot(e))
    throw Error(wt + (n || "Argument") + (typeof e == "number" ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e));
}
function yi(e) {
  var t = e.c.length - 1;
  return kt(e.e / te) == t && e.c[t] % 2 != 0;
}
function Ai(e, t) {
  return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t;
}
function er(e, t, r) {
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
var ba = Qc();
function Rg() {
  const { network: e, publicKey: t, format: r } = zt(), [n, i] = Pe(null), [o, s] = Pe(!1);
  return { getBalance: it(async () => {
    s(!0);
    try {
      if (i(null), !r || !r.payments || !t || !t.payments)
        throw new Error("No wallet is connected");
      const { address: l } = Il(
        t.payments,
        e,
        Ol[r.payments]
      )[0], f = await new Ss({ network: e }).getBalance({ address: l }), d = Number(
        new ba(f).multipliedBy(1e8).toFixed(0, ba.ROUND_HALF_DOWN)
      );
      return s(!1), d;
    } catch (l) {
      throw i(l.message), s(!1), l;
    }
  }, [r, e, t]), error: n, loading: o };
}
async function xs({
  address: e,
  wallet: t,
  network: r,
  psbt: n,
  options: i
}) {
  var l, p;
  if ((l = i == null ? void 0 : i.signingIndexes) != null && l.length && ((p = i == null ? void 0 : i.inputsToSign) != null && p.length))
    throw new Error("Cannot have both indexes and inputs to sign together");
  const o = (i == null ? void 0 : i.finalize) ?? !0, s = (i == null ? void 0 : i.extractTx) ?? !0, a = () => n.data.inputs.map((f, d) => d);
  if (t === ee.MAGICEDEN)
    return await Nl(n, {
      network: r,
      inputsToSign: (i == null ? void 0 : i.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (i == null ? void 0 : i.signingIndexes) ?? a(),
          sigHash: i == null ? void 0 : i.sigHash
        }
      ],
      finalize: o,
      extractTx: s
    });
  if (t === ee.UNISAT)
    return await Ml(n, {
      finalize: o,
      extractTx: s
    });
  if (t === ee.XVERSE)
    return await jl(n, {
      network: r,
      inputsToSign: (i == null ? void 0 : i.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (i == null ? void 0 : i.signingIndexes) ?? a(),
          // If signingIndexes is not provided, just sign everything
          sigHash: i == null ? void 0 : i.sigHash
        }
      ],
      finalize: o,
      extractTx: s
    });
  if (t === ee.LEATHER)
    return await xl(n, {
      network: r,
      finalize: o,
      extractTx: s,
      allowedSighash: i != null && i.sigHash ? [i == null ? void 0 : i.sigHash] : [],
      signAtIndexes: (i == null ? void 0 : i.signingIndexes) ?? a()
      // If signingIndexes is not provided, just sign everything
    });
  if (t === ee.OKX)
    return await Ul(n, {
      finalize: o,
      extractTx: s,
      network: r,
      inputsToSign: (i == null ? void 0 : i.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (i == null ? void 0 : i.signingIndexes) ?? a(),
          // If signingIndexes is not provided, just sign everything
          sigHash: i == null ? void 0 : i.sigHash
        }
      ]
    });
  throw new Error("Invalid wallet selected");
}
function Fg() {
  const { wallet: e, network: t, address: r, publicKey: n } = zt(), [i, o] = Pe(null), [s, a] = Pe(!1);
  return { send: it(
    async (p, f, d, S = !0) => {
      a(!0);
      try {
        if (o(null), !r || !r.payments || !n || !n.payments || !e)
          throw new Error("No wallet is connected");
        const m = new fc({
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
        if (S) {
          const x = await new Ss({ network: t }).relay({ hex: B.hex });
          return a(!1), x;
        }
        return a(!1), B.hex;
      } catch (m) {
        return o(m.message), a(!1), null;
      }
    },
    [r, t, n, e]
  ), error: i, loading: s };
}
function Ug() {
  const { wallet: e, network: t, address: r, publicKey: n } = zt(), [i, o] = Pe(!1);
  return { send: it(
    async ({
      toAddress: a,
      satoshis: l,
      feeRate: p,
      relay: f = !0,
      rbf: d = !1
    }) => {
      o(!0);
      try {
        if (!r || !r.payments || !n || !n.payments || !e)
          throw new Error("No wallet is connected");
        const S = new fc({
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
        S.setRBF(d), await S.prepare();
        const m = await xs({
          address: r.payments,
          wallet: e,
          network: t,
          psbt: S.toPSBT()
        });
        if (f) {
          const O = await new Ss({ network: t }).relay({ hex: m.hex });
          return o(!1), {
            txId: O
          };
        }
        return o(!1), {
          signedPsbtHex: m.hex
        };
      } catch (S) {
        return o(!1), {
          error: S.message
        };
      }
    },
    [r, t, n, e]
  ), isLoading: i };
}
var zc = {}, Ke = {}, eo = {};
eo.byteLength = Kh;
eo.toByteArray = Vh;
eo.fromByteArray = qh;
var Yt = [], Bt = [], $h = typeof Uint8Array < "u" ? Uint8Array : Array, Uo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var yn = 0, jh = Uo.length; yn < jh; ++yn)
  Yt[yn] = Uo[yn], Bt[Uo.charCodeAt(yn)] = yn;
Bt[45] = 62;
Bt[95] = 63;
function Jc(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = t);
  var n = r === t ? 0 : 4 - r % 4;
  return [r, n];
}
function Kh(e) {
  var t = Jc(e), r = t[0], n = t[1];
  return (r + n) * 3 / 4 - n;
}
function Wh(e, t, r) {
  return (t + r) * 3 / 4 - r;
}
function Vh(e) {
  var t, r = Jc(e), n = r[0], i = r[1], o = new $h(Wh(e, n, i)), s = 0, a = i > 0 ? n - 4 : n, l;
  for (l = 0; l < a; l += 4)
    t = Bt[e.charCodeAt(l)] << 18 | Bt[e.charCodeAt(l + 1)] << 12 | Bt[e.charCodeAt(l + 2)] << 6 | Bt[e.charCodeAt(l + 3)], o[s++] = t >> 16 & 255, o[s++] = t >> 8 & 255, o[s++] = t & 255;
  return i === 2 && (t = Bt[e.charCodeAt(l)] << 2 | Bt[e.charCodeAt(l + 1)] >> 4, o[s++] = t & 255), i === 1 && (t = Bt[e.charCodeAt(l)] << 10 | Bt[e.charCodeAt(l + 1)] << 4 | Bt[e.charCodeAt(l + 2)] >> 2, o[s++] = t >> 8 & 255, o[s++] = t & 255), o;
}
function Gh(e) {
  return Yt[e >> 18 & 63] + Yt[e >> 12 & 63] + Yt[e >> 6 & 63] + Yt[e & 63];
}
function Xh(e, t, r) {
  for (var n, i = [], o = t; o < r; o += 3)
    n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(Gh(n));
  return i.join("");
}
function qh(e) {
  for (var t, r = e.length, n = r % 3, i = [], o = 16383, s = 0, a = r - n; s < a; s += o)
    i.push(Xh(e, s, s + o > a ? a : s + o));
  return n === 1 ? (t = e[r - 1], i.push(
    Yt[t >> 2] + Yt[t << 4 & 63] + "=="
  )) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], i.push(
    Yt[t >> 10] + Yt[t >> 4 & 63] + Yt[t << 2 & 63] + "="
  )), i.join("");
}
var Bs = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Bs.read = function(e, t, r, n, i) {
  var o, s, a = i * 8 - n - 1, l = (1 << a) - 1, p = l >> 1, f = -7, d = r ? i - 1 : 0, S = r ? -1 : 1, m = e[t + d];
  for (d += S, o = m & (1 << -f) - 1, m >>= -f, f += a; f > 0; o = o * 256 + e[t + d], d += S, f -= 8)
    ;
  for (s = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; s = s * 256 + e[t + d], d += S, f -= 8)
    ;
  if (o === 0)
    o = 1 - p;
  else {
    if (o === l)
      return s ? NaN : (m ? -1 : 1) * (1 / 0);
    s = s + Math.pow(2, n), o = o - p;
  }
  return (m ? -1 : 1) * s * Math.pow(2, o - n);
};
Bs.write = function(e, t, r, n, i, o) {
  var s, a, l, p = o * 8 - i - 1, f = (1 << p) - 1, d = f >> 1, S = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = n ? 0 : o - 1, B = n ? 1 : -1, O = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), s + d >= 1 ? t += S / l : t += S * Math.pow(2, 1 - d), t * l >= 2 && (s++, l /= 2), s + d >= f ? (a = 0, s = f) : s + d >= 1 ? (a = (t * l - 1) * Math.pow(2, i), s = s + d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, i), s = 0)); i >= 8; e[r + m] = a & 255, m += B, a /= 256, i -= 8)
    ;
  for (s = s << i | a, p += i; p > 0; e[r + m] = s & 255, m += B, s /= 256, p -= 8)
    ;
  e[r + m - B] |= O * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = eo, r = Bs, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = f, e.SlowBuffer = M, e.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  e.kMaxLength = i;
  const { Uint8Array: o, ArrayBuffer: s, SharedArrayBuffer: a } = globalThis;
  f.TYPED_ARRAY_SUPPORT = l(), !f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function l() {
    try {
      const w = new o(1), c = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(c, o.prototype), Object.setPrototypeOf(w, c), w.foo() === 42;
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
    const c = new o(w);
    return Object.setPrototypeOf(c, f.prototype), c;
  }
  function f(w, c, u) {
    if (typeof w == "number") {
      if (typeof c == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return B(w);
    }
    return d(w, c, u);
  }
  f.poolSize = 8192;
  function d(w, c, u) {
    if (typeof w == "string")
      return O(w, c);
    if (s.isView(w))
      return $(w);
    if (w == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof w
      );
    if (Pt(w, s) || w && Pt(w.buffer, s) || typeof a < "u" && (Pt(w, a) || w && Pt(w.buffer, a)))
      return A(w, c, u);
    if (typeof w == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const b = w.valueOf && w.valueOf();
    if (b != null && b !== w)
      return f.from(b, c, u);
    const R = k(w);
    if (R) return R;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof w[Symbol.toPrimitive] == "function")
      return f.from(w[Symbol.toPrimitive]("string"), c, u);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof w
    );
  }
  f.from = function(w, c, u) {
    return d(w, c, u);
  }, Object.setPrototypeOf(f.prototype, o.prototype), Object.setPrototypeOf(f, o);
  function S(w) {
    if (typeof w != "number")
      throw new TypeError('"size" argument must be of type number');
    if (w < 0)
      throw new RangeError('The value "' + w + '" is invalid for option "size"');
  }
  function m(w, c, u) {
    return S(w), w <= 0 ? p(w) : c !== void 0 ? typeof u == "string" ? p(w).fill(c, u) : p(w).fill(c) : p(w);
  }
  f.alloc = function(w, c, u) {
    return m(w, c, u);
  };
  function B(w) {
    return S(w), p(w < 0 ? 0 : C(w) | 0);
  }
  f.allocUnsafe = function(w) {
    return B(w);
  }, f.allocUnsafeSlow = function(w) {
    return B(w);
  };
  function O(w, c) {
    if ((typeof c != "string" || c === "") && (c = "utf8"), !f.isEncoding(c))
      throw new TypeError("Unknown encoding: " + c);
    const u = F(w, c) | 0;
    let b = p(u);
    const R = b.write(w, c);
    return R !== u && (b = b.slice(0, R)), b;
  }
  function x(w) {
    const c = w.length < 0 ? 0 : C(w.length) | 0, u = p(c);
    for (let b = 0; b < c; b += 1)
      u[b] = w[b] & 255;
    return u;
  }
  function $(w) {
    if (Pt(w, o)) {
      const c = new o(w);
      return A(c.buffer, c.byteOffset, c.byteLength);
    }
    return x(w);
  }
  function A(w, c, u) {
    if (c < 0 || w.byteLength < c)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (w.byteLength < c + (u || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let b;
    return c === void 0 && u === void 0 ? b = new o(w) : u === void 0 ? b = new o(w, c) : b = new o(w, c, u), Object.setPrototypeOf(b, f.prototype), b;
  }
  function k(w) {
    if (f.isBuffer(w)) {
      const c = C(w.length) | 0, u = p(c);
      return u.length === 0 || w.copy(u, 0, 0, c), u;
    }
    if (w.length !== void 0)
      return typeof w.length != "number" || pn(w.length) ? p(0) : x(w);
    if (w.type === "Buffer" && Array.isArray(w.data))
      return x(w.data);
  }
  function C(w) {
    if (w >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return w | 0;
  }
  function M(w) {
    return +w != w && (w = 0), f.alloc(+w);
  }
  f.isBuffer = function(c) {
    return c != null && c._isBuffer === !0 && c !== f.prototype;
  }, f.compare = function(c, u) {
    if (Pt(c, o) && (c = f.from(c, c.offset, c.byteLength)), Pt(u, o) && (u = f.from(u, u.offset, u.byteLength)), !f.isBuffer(c) || !f.isBuffer(u))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (c === u) return 0;
    let b = c.length, R = u.length;
    for (let D = 0, K = Math.min(b, R); D < K; ++D)
      if (c[D] !== u[D]) {
        b = c[D], R = u[D];
        break;
      }
    return b < R ? -1 : R < b ? 1 : 0;
  }, f.isEncoding = function(c) {
    switch (String(c).toLowerCase()) {
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
  }, f.concat = function(c, u) {
    if (!Array.isArray(c))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (c.length === 0)
      return f.alloc(0);
    let b;
    if (u === void 0)
      for (u = 0, b = 0; b < c.length; ++b)
        u += c[b].length;
    const R = f.allocUnsafe(u);
    let D = 0;
    for (b = 0; b < c.length; ++b) {
      let K = c[b];
      if (Pt(K, o))
        D + K.length > R.length ? (f.isBuffer(K) || (K = f.from(K)), K.copy(R, D)) : o.prototype.set.call(
          R,
          K,
          D
        );
      else if (f.isBuffer(K))
        K.copy(R, D);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      D += K.length;
    }
    return R;
  };
  function F(w, c) {
    if (f.isBuffer(w))
      return w.length;
    if (s.isView(w) || Pt(w, s))
      return w.byteLength;
    if (typeof w != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof w
      );
    const u = w.length, b = arguments.length > 2 && arguments[2] === !0;
    if (!b && u === 0) return 0;
    let R = !1;
    for (; ; )
      switch (c) {
        case "ascii":
        case "latin1":
        case "binary":
          return u;
        case "utf8":
        case "utf-8":
          return Rn(w).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return u * 2;
        case "hex":
          return u >>> 1;
        case "base64":
          return di(w).length;
        default:
          if (R)
            return b ? -1 : Rn(w).length;
          c = ("" + c).toLowerCase(), R = !0;
      }
  }
  f.byteLength = F;
  function W(w, c, u) {
    let b = !1;
    if ((c === void 0 || c < 0) && (c = 0), c > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, c >>>= 0, u <= c))
      return "";
    for (w || (w = "utf8"); ; )
      switch (w) {
        case "hex":
          return J(this, c, u);
        case "utf8":
        case "utf-8":
          return U(this, c, u);
        case "ascii":
          return G(this, c, u);
        case "latin1":
        case "binary":
          return q(this, c, u);
        case "base64":
          return T(this, c, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return pe(this, c, u);
        default:
          if (b) throw new TypeError("Unknown encoding: " + w);
          w = (w + "").toLowerCase(), b = !0;
      }
  }
  f.prototype._isBuffer = !0;
  function g(w, c, u) {
    const b = w[c];
    w[c] = w[u], w[u] = b;
  }
  f.prototype.swap16 = function() {
    const c = this.length;
    if (c % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let u = 0; u < c; u += 2)
      g(this, u, u + 1);
    return this;
  }, f.prototype.swap32 = function() {
    const c = this.length;
    if (c % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let u = 0; u < c; u += 4)
      g(this, u, u + 3), g(this, u + 1, u + 2);
    return this;
  }, f.prototype.swap64 = function() {
    const c = this.length;
    if (c % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let u = 0; u < c; u += 8)
      g(this, u, u + 7), g(this, u + 1, u + 6), g(this, u + 2, u + 5), g(this, u + 3, u + 4);
    return this;
  }, f.prototype.toString = function() {
    const c = this.length;
    return c === 0 ? "" : arguments.length === 0 ? U(this, 0, c) : W.apply(this, arguments);
  }, f.prototype.toLocaleString = f.prototype.toString, f.prototype.equals = function(c) {
    if (!f.isBuffer(c)) throw new TypeError("Argument must be a Buffer");
    return this === c ? !0 : f.compare(this, c) === 0;
  }, f.prototype.inspect = function() {
    let c = "";
    const u = e.INSPECT_MAX_BYTES;
    return c = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (c += " ... "), "<Buffer " + c + ">";
  }, n && (f.prototype[n] = f.prototype.inspect), f.prototype.compare = function(c, u, b, R, D) {
    if (Pt(c, o) && (c = f.from(c, c.offset, c.byteLength)), !f.isBuffer(c))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof c
      );
    if (u === void 0 && (u = 0), b === void 0 && (b = c ? c.length : 0), R === void 0 && (R = 0), D === void 0 && (D = this.length), u < 0 || b > c.length || R < 0 || D > this.length)
      throw new RangeError("out of range index");
    if (R >= D && u >= b)
      return 0;
    if (R >= D)
      return -1;
    if (u >= b)
      return 1;
    if (u >>>= 0, b >>>= 0, R >>>= 0, D >>>= 0, this === c) return 0;
    let K = D - R, oe = b - u;
    const ke = Math.min(K, oe), ye = this.slice(R, D), Te = c.slice(u, b);
    for (let le = 0; le < ke; ++le)
      if (ye[le] !== Te[le]) {
        K = ye[le], oe = Te[le];
        break;
      }
    return K < oe ? -1 : oe < K ? 1 : 0;
  };
  function h(w, c, u, b, R) {
    if (w.length === 0) return -1;
    if (typeof u == "string" ? (b = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, pn(u) && (u = R ? 0 : w.length - 1), u < 0 && (u = w.length + u), u >= w.length) {
      if (R) return -1;
      u = w.length - 1;
    } else if (u < 0)
      if (R) u = 0;
      else return -1;
    if (typeof c == "string" && (c = f.from(c, b)), f.isBuffer(c))
      return c.length === 0 ? -1 : E(w, c, u, b, R);
    if (typeof c == "number")
      return c = c & 255, typeof o.prototype.indexOf == "function" ? R ? o.prototype.indexOf.call(w, c, u) : o.prototype.lastIndexOf.call(w, c, u) : E(w, [c], u, b, R);
    throw new TypeError("val must be string, number or Buffer");
  }
  function E(w, c, u, b, R) {
    let D = 1, K = w.length, oe = c.length;
    if (b !== void 0 && (b = String(b).toLowerCase(), b === "ucs2" || b === "ucs-2" || b === "utf16le" || b === "utf-16le")) {
      if (w.length < 2 || c.length < 2)
        return -1;
      D = 2, K /= 2, oe /= 2, u /= 2;
    }
    function ke(Te, le) {
      return D === 1 ? Te[le] : Te.readUInt16BE(le * D);
    }
    let ye;
    if (R) {
      let Te = -1;
      for (ye = u; ye < K; ye++)
        if (ke(w, ye) === ke(c, Te === -1 ? 0 : ye - Te)) {
          if (Te === -1 && (Te = ye), ye - Te + 1 === oe) return Te * D;
        } else
          Te !== -1 && (ye -= ye - Te), Te = -1;
    } else
      for (u + oe > K && (u = K - oe), ye = u; ye >= 0; ye--) {
        let Te = !0;
        for (let le = 0; le < oe; le++)
          if (ke(w, ye + le) !== ke(c, le)) {
            Te = !1;
            break;
          }
        if (Te) return ye;
      }
    return -1;
  }
  f.prototype.includes = function(c, u, b) {
    return this.indexOf(c, u, b) !== -1;
  }, f.prototype.indexOf = function(c, u, b) {
    return h(this, c, u, b, !0);
  }, f.prototype.lastIndexOf = function(c, u, b) {
    return h(this, c, u, b, !1);
  };
  function N(w, c, u, b) {
    u = Number(u) || 0;
    const R = w.length - u;
    b ? (b = Number(b), b > R && (b = R)) : b = R;
    const D = c.length;
    b > D / 2 && (b = D / 2);
    let K;
    for (K = 0; K < b; ++K) {
      const oe = parseInt(c.substr(K * 2, 2), 16);
      if (pn(oe)) return K;
      w[u + K] = oe;
    }
    return K;
  }
  function y(w, c, u, b) {
    return dn(Rn(c, w.length - u), w, u, b);
  }
  function P(w, c, u, b) {
    return dn(Po(c), w, u, b);
  }
  function I(w, c, u, b) {
    return dn(di(c), w, u, b);
  }
  function v(w, c, u, b) {
    return dn(Fn(c, w.length - u), w, u, b);
  }
  f.prototype.write = function(c, u, b, R) {
    if (u === void 0)
      R = "utf8", b = this.length, u = 0;
    else if (b === void 0 && typeof u == "string")
      R = u, b = this.length, u = 0;
    else if (isFinite(u))
      u = u >>> 0, isFinite(b) ? (b = b >>> 0, R === void 0 && (R = "utf8")) : (R = b, b = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const D = this.length - u;
    if ((b === void 0 || b > D) && (b = D), c.length > 0 && (b < 0 || u < 0) || u > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    R || (R = "utf8");
    let K = !1;
    for (; ; )
      switch (R) {
        case "hex":
          return N(this, c, u, b);
        case "utf8":
        case "utf-8":
          return y(this, c, u, b);
        case "ascii":
        case "latin1":
        case "binary":
          return P(this, c, u, b);
        case "base64":
          return I(this, c, u, b);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return v(this, c, u, b);
        default:
          if (K) throw new TypeError("Unknown encoding: " + R);
          R = ("" + R).toLowerCase(), K = !0;
      }
  }, f.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function T(w, c, u) {
    return c === 0 && u === w.length ? t.fromByteArray(w) : t.fromByteArray(w.slice(c, u));
  }
  function U(w, c, u) {
    u = Math.min(w.length, u);
    const b = [];
    let R = c;
    for (; R < u; ) {
      const D = w[R];
      let K = null, oe = D > 239 ? 4 : D > 223 ? 3 : D > 191 ? 2 : 1;
      if (R + oe <= u) {
        let ke, ye, Te, le;
        switch (oe) {
          case 1:
            D < 128 && (K = D);
            break;
          case 2:
            ke = w[R + 1], (ke & 192) === 128 && (le = (D & 31) << 6 | ke & 63, le > 127 && (K = le));
            break;
          case 3:
            ke = w[R + 1], ye = w[R + 2], (ke & 192) === 128 && (ye & 192) === 128 && (le = (D & 15) << 12 | (ke & 63) << 6 | ye & 63, le > 2047 && (le < 55296 || le > 57343) && (K = le));
            break;
          case 4:
            ke = w[R + 1], ye = w[R + 2], Te = w[R + 3], (ke & 192) === 128 && (ye & 192) === 128 && (Te & 192) === 128 && (le = (D & 15) << 18 | (ke & 63) << 12 | (ye & 63) << 6 | Te & 63, le > 65535 && le < 1114112 && (K = le));
        }
      }
      K === null ? (K = 65533, oe = 1) : K > 65535 && (K -= 65536, b.push(K >>> 10 & 1023 | 55296), K = 56320 | K & 1023), b.push(K), R += oe;
    }
    return j(b);
  }
  const L = 4096;
  function j(w) {
    const c = w.length;
    if (c <= L)
      return String.fromCharCode.apply(String, w);
    let u = "", b = 0;
    for (; b < c; )
      u += String.fromCharCode.apply(
        String,
        w.slice(b, b += L)
      );
    return u;
  }
  function G(w, c, u) {
    let b = "";
    u = Math.min(w.length, u);
    for (let R = c; R < u; ++R)
      b += String.fromCharCode(w[R] & 127);
    return b;
  }
  function q(w, c, u) {
    let b = "";
    u = Math.min(w.length, u);
    for (let R = c; R < u; ++R)
      b += String.fromCharCode(w[R]);
    return b;
  }
  function J(w, c, u) {
    const b = w.length;
    (!c || c < 0) && (c = 0), (!u || u < 0 || u > b) && (u = b);
    let R = "";
    for (let D = c; D < u; ++D)
      R += Hr[w[D]];
    return R;
  }
  function pe(w, c, u) {
    const b = w.slice(c, u);
    let R = "";
    for (let D = 0; D < b.length - 1; D += 2)
      R += String.fromCharCode(b[D] + b[D + 1] * 256);
    return R;
  }
  f.prototype.slice = function(c, u) {
    const b = this.length;
    c = ~~c, u = u === void 0 ? b : ~~u, c < 0 ? (c += b, c < 0 && (c = 0)) : c > b && (c = b), u < 0 ? (u += b, u < 0 && (u = 0)) : u > b && (u = b), u < c && (u = c);
    const R = this.subarray(c, u);
    return Object.setPrototypeOf(R, f.prototype), R;
  };
  function Q(w, c, u) {
    if (w % 1 !== 0 || w < 0) throw new RangeError("offset is not uint");
    if (w + c > u) throw new RangeError("Trying to access beyond buffer length");
  }
  f.prototype.readUintLE = f.prototype.readUIntLE = function(c, u, b) {
    c = c >>> 0, u = u >>> 0, b || Q(c, u, this.length);
    let R = this[c], D = 1, K = 0;
    for (; ++K < u && (D *= 256); )
      R += this[c + K] * D;
    return R;
  }, f.prototype.readUintBE = f.prototype.readUIntBE = function(c, u, b) {
    c = c >>> 0, u = u >>> 0, b || Q(c, u, this.length);
    let R = this[c + --u], D = 1;
    for (; u > 0 && (D *= 256); )
      R += this[c + --u] * D;
    return R;
  }, f.prototype.readUint8 = f.prototype.readUInt8 = function(c, u) {
    return c = c >>> 0, u || Q(c, 1, this.length), this[c];
  }, f.prototype.readUint16LE = f.prototype.readUInt16LE = function(c, u) {
    return c = c >>> 0, u || Q(c, 2, this.length), this[c] | this[c + 1] << 8;
  }, f.prototype.readUint16BE = f.prototype.readUInt16BE = function(c, u) {
    return c = c >>> 0, u || Q(c, 2, this.length), this[c] << 8 | this[c + 1];
  }, f.prototype.readUint32LE = f.prototype.readUInt32LE = function(c, u) {
    return c = c >>> 0, u || Q(c, 4, this.length), (this[c] | this[c + 1] << 8 | this[c + 2] << 16) + this[c + 3] * 16777216;
  }, f.prototype.readUint32BE = f.prototype.readUInt32BE = function(c, u) {
    return c = c >>> 0, u || Q(c, 4, this.length), this[c] * 16777216 + (this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3]);
  }, f.prototype.readBigUInt64LE = Mt(function(c) {
    c = c >>> 0, vt(c, "offset");
    const u = this[c], b = this[c + 7];
    (u === void 0 || b === void 0) && mr(c, this.length - 8);
    const R = u + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24, D = this[++c] + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + b * 2 ** 24;
    return BigInt(R) + (BigInt(D) << BigInt(32));
  }), f.prototype.readBigUInt64BE = Mt(function(c) {
    c = c >>> 0, vt(c, "offset");
    const u = this[c], b = this[c + 7];
    (u === void 0 || b === void 0) && mr(c, this.length - 8);
    const R = u * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c], D = this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + b;
    return (BigInt(R) << BigInt(32)) + BigInt(D);
  }), f.prototype.readIntLE = function(c, u, b) {
    c = c >>> 0, u = u >>> 0, b || Q(c, u, this.length);
    let R = this[c], D = 1, K = 0;
    for (; ++K < u && (D *= 256); )
      R += this[c + K] * D;
    return D *= 128, R >= D && (R -= Math.pow(2, 8 * u)), R;
  }, f.prototype.readIntBE = function(c, u, b) {
    c = c >>> 0, u = u >>> 0, b || Q(c, u, this.length);
    let R = u, D = 1, K = this[c + --R];
    for (; R > 0 && (D *= 256); )
      K += this[c + --R] * D;
    return D *= 128, K >= D && (K -= Math.pow(2, 8 * u)), K;
  }, f.prototype.readInt8 = function(c, u) {
    return c = c >>> 0, u || Q(c, 1, this.length), this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c];
  }, f.prototype.readInt16LE = function(c, u) {
    c = c >>> 0, u || Q(c, 2, this.length);
    const b = this[c] | this[c + 1] << 8;
    return b & 32768 ? b | 4294901760 : b;
  }, f.prototype.readInt16BE = function(c, u) {
    c = c >>> 0, u || Q(c, 2, this.length);
    const b = this[c + 1] | this[c] << 8;
    return b & 32768 ? b | 4294901760 : b;
  }, f.prototype.readInt32LE = function(c, u) {
    return c = c >>> 0, u || Q(c, 4, this.length), this[c] | this[c + 1] << 8 | this[c + 2] << 16 | this[c + 3] << 24;
  }, f.prototype.readInt32BE = function(c, u) {
    return c = c >>> 0, u || Q(c, 4, this.length), this[c] << 24 | this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3];
  }, f.prototype.readBigInt64LE = Mt(function(c) {
    c = c >>> 0, vt(c, "offset");
    const u = this[c], b = this[c + 7];
    (u === void 0 || b === void 0) && mr(c, this.length - 8);
    const R = this[c + 4] + this[c + 5] * 2 ** 8 + this[c + 6] * 2 ** 16 + (b << 24);
    return (BigInt(R) << BigInt(32)) + BigInt(u + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24);
  }), f.prototype.readBigInt64BE = Mt(function(c) {
    c = c >>> 0, vt(c, "offset");
    const u = this[c], b = this[c + 7];
    (u === void 0 || b === void 0) && mr(c, this.length - 8);
    const R = (u << 24) + // Overflow
    this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c];
    return (BigInt(R) << BigInt(32)) + BigInt(this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + b);
  }), f.prototype.readFloatLE = function(c, u) {
    return c = c >>> 0, u || Q(c, 4, this.length), r.read(this, c, !0, 23, 4);
  }, f.prototype.readFloatBE = function(c, u) {
    return c = c >>> 0, u || Q(c, 4, this.length), r.read(this, c, !1, 23, 4);
  }, f.prototype.readDoubleLE = function(c, u) {
    return c = c >>> 0, u || Q(c, 8, this.length), r.read(this, c, !0, 52, 8);
  }, f.prototype.readDoubleBE = function(c, u) {
    return c = c >>> 0, u || Q(c, 8, this.length), r.read(this, c, !1, 52, 8);
  };
  function z(w, c, u, b, R, D) {
    if (!f.isBuffer(w)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (c > R || c < D) throw new RangeError('"value" argument is out of bounds');
    if (u + b > w.length) throw new RangeError("Index out of range");
  }
  f.prototype.writeUintLE = f.prototype.writeUIntLE = function(c, u, b, R) {
    if (c = +c, u = u >>> 0, b = b >>> 0, !R) {
      const oe = Math.pow(2, 8 * b) - 1;
      z(this, c, u, b, oe, 0);
    }
    let D = 1, K = 0;
    for (this[u] = c & 255; ++K < b && (D *= 256); )
      this[u + K] = c / D & 255;
    return u + b;
  }, f.prototype.writeUintBE = f.prototype.writeUIntBE = function(c, u, b, R) {
    if (c = +c, u = u >>> 0, b = b >>> 0, !R) {
      const oe = Math.pow(2, 8 * b) - 1;
      z(this, c, u, b, oe, 0);
    }
    let D = b - 1, K = 1;
    for (this[u + D] = c & 255; --D >= 0 && (K *= 256); )
      this[u + D] = c / K & 255;
    return u + b;
  }, f.prototype.writeUint8 = f.prototype.writeUInt8 = function(c, u, b) {
    return c = +c, u = u >>> 0, b || z(this, c, u, 1, 255, 0), this[u] = c & 255, u + 1;
  }, f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(c, u, b) {
    return c = +c, u = u >>> 0, b || z(this, c, u, 2, 65535, 0), this[u] = c & 255, this[u + 1] = c >>> 8, u + 2;
  }, f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(c, u, b) {
    return c = +c, u = u >>> 0, b || z(this, c, u, 2, 65535, 0), this[u] = c >>> 8, this[u + 1] = c & 255, u + 2;
  }, f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(c, u, b) {
    return c = +c, u = u >>> 0, b || z(this, c, u, 4, 4294967295, 0), this[u + 3] = c >>> 24, this[u + 2] = c >>> 16, this[u + 1] = c >>> 8, this[u] = c & 255, u + 4;
  }, f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(c, u, b) {
    return c = +c, u = u >>> 0, b || z(this, c, u, 4, 4294967295, 0), this[u] = c >>> 24, this[u + 1] = c >>> 16, this[u + 2] = c >>> 8, this[u + 3] = c & 255, u + 4;
  };
  function ae(w, c, u, b, R) {
    we(c, b, R, w, u, 7);
    let D = Number(c & BigInt(4294967295));
    w[u++] = D, D = D >> 8, w[u++] = D, D = D >> 8, w[u++] = D, D = D >> 8, w[u++] = D;
    let K = Number(c >> BigInt(32) & BigInt(4294967295));
    return w[u++] = K, K = K >> 8, w[u++] = K, K = K >> 8, w[u++] = K, K = K >> 8, w[u++] = K, u;
  }
  function ve(w, c, u, b, R) {
    we(c, b, R, w, u, 7);
    let D = Number(c & BigInt(4294967295));
    w[u + 7] = D, D = D >> 8, w[u + 6] = D, D = D >> 8, w[u + 5] = D, D = D >> 8, w[u + 4] = D;
    let K = Number(c >> BigInt(32) & BigInt(4294967295));
    return w[u + 3] = K, K = K >> 8, w[u + 2] = K, K = K >> 8, w[u + 1] = K, K = K >> 8, w[u] = K, u + 8;
  }
  f.prototype.writeBigUInt64LE = Mt(function(c, u = 0) {
    return ae(this, c, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), f.prototype.writeBigUInt64BE = Mt(function(c, u = 0) {
    return ve(this, c, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), f.prototype.writeIntLE = function(c, u, b, R) {
    if (c = +c, u = u >>> 0, !R) {
      const ke = Math.pow(2, 8 * b - 1);
      z(this, c, u, b, ke - 1, -ke);
    }
    let D = 0, K = 1, oe = 0;
    for (this[u] = c & 255; ++D < b && (K *= 256); )
      c < 0 && oe === 0 && this[u + D - 1] !== 0 && (oe = 1), this[u + D] = (c / K >> 0) - oe & 255;
    return u + b;
  }, f.prototype.writeIntBE = function(c, u, b, R) {
    if (c = +c, u = u >>> 0, !R) {
      const ke = Math.pow(2, 8 * b - 1);
      z(this, c, u, b, ke - 1, -ke);
    }
    let D = b - 1, K = 1, oe = 0;
    for (this[u + D] = c & 255; --D >= 0 && (K *= 256); )
      c < 0 && oe === 0 && this[u + D + 1] !== 0 && (oe = 1), this[u + D] = (c / K >> 0) - oe & 255;
    return u + b;
  }, f.prototype.writeInt8 = function(c, u, b) {
    return c = +c, u = u >>> 0, b || z(this, c, u, 1, 127, -128), c < 0 && (c = 255 + c + 1), this[u] = c & 255, u + 1;
  }, f.prototype.writeInt16LE = function(c, u, b) {
    return c = +c, u = u >>> 0, b || z(this, c, u, 2, 32767, -32768), this[u] = c & 255, this[u + 1] = c >>> 8, u + 2;
  }, f.prototype.writeInt16BE = function(c, u, b) {
    return c = +c, u = u >>> 0, b || z(this, c, u, 2, 32767, -32768), this[u] = c >>> 8, this[u + 1] = c & 255, u + 2;
  }, f.prototype.writeInt32LE = function(c, u, b) {
    return c = +c, u = u >>> 0, b || z(this, c, u, 4, 2147483647, -2147483648), this[u] = c & 255, this[u + 1] = c >>> 8, this[u + 2] = c >>> 16, this[u + 3] = c >>> 24, u + 4;
  }, f.prototype.writeInt32BE = function(c, u, b) {
    return c = +c, u = u >>> 0, b || z(this, c, u, 4, 2147483647, -2147483648), c < 0 && (c = 4294967295 + c + 1), this[u] = c >>> 24, this[u + 1] = c >>> 16, this[u + 2] = c >>> 8, this[u + 3] = c & 255, u + 4;
  }, f.prototype.writeBigInt64LE = Mt(function(c, u = 0) {
    return ae(this, c, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), f.prototype.writeBigInt64BE = Mt(function(c, u = 0) {
    return ve(this, c, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function pt(w, c, u, b, R, D) {
    if (u + b > w.length) throw new RangeError("Index out of range");
    if (u < 0) throw new RangeError("Index out of range");
  }
  function At(w, c, u, b, R) {
    return c = +c, u = u >>> 0, R || pt(w, c, u, 4), r.write(w, c, u, b, 23, 4), u + 4;
  }
  f.prototype.writeFloatLE = function(c, u, b) {
    return At(this, c, u, !0, b);
  }, f.prototype.writeFloatBE = function(c, u, b) {
    return At(this, c, u, !1, b);
  };
  function Et(w, c, u, b, R) {
    return c = +c, u = u >>> 0, R || pt(w, c, u, 8), r.write(w, c, u, b, 52, 8), u + 8;
  }
  f.prototype.writeDoubleLE = function(c, u, b) {
    return Et(this, c, u, !0, b);
  }, f.prototype.writeDoubleBE = function(c, u, b) {
    return Et(this, c, u, !1, b);
  }, f.prototype.copy = function(c, u, b, R) {
    if (!f.isBuffer(c)) throw new TypeError("argument should be a Buffer");
    if (b || (b = 0), !R && R !== 0 && (R = this.length), u >= c.length && (u = c.length), u || (u = 0), R > 0 && R < b && (R = b), R === b || c.length === 0 || this.length === 0) return 0;
    if (u < 0)
      throw new RangeError("targetStart out of bounds");
    if (b < 0 || b >= this.length) throw new RangeError("Index out of range");
    if (R < 0) throw new RangeError("sourceEnd out of bounds");
    R > this.length && (R = this.length), c.length - u < R - b && (R = c.length - u + b);
    const D = R - b;
    return this === c && typeof o.prototype.copyWithin == "function" ? this.copyWithin(u, b, R) : o.prototype.set.call(
      c,
      this.subarray(b, R),
      u
    ), D;
  }, f.prototype.fill = function(c, u, b, R) {
    if (typeof c == "string") {
      if (typeof u == "string" ? (R = u, u = 0, b = this.length) : typeof b == "string" && (R = b, b = this.length), R !== void 0 && typeof R != "string")
        throw new TypeError("encoding must be a string");
      if (typeof R == "string" && !f.isEncoding(R))
        throw new TypeError("Unknown encoding: " + R);
      if (c.length === 1) {
        const K = c.charCodeAt(0);
        (R === "utf8" && K < 128 || R === "latin1") && (c = K);
      }
    } else typeof c == "number" ? c = c & 255 : typeof c == "boolean" && (c = Number(c));
    if (u < 0 || this.length < u || this.length < b)
      throw new RangeError("Out of range index");
    if (b <= u)
      return this;
    u = u >>> 0, b = b === void 0 ? this.length : b >>> 0, c || (c = 0);
    let D;
    if (typeof c == "number")
      for (D = u; D < b; ++D)
        this[D] = c;
    else {
      const K = f.isBuffer(c) ? c : f.from(c, R), oe = K.length;
      if (oe === 0)
        throw new TypeError('The value "' + c + '" is invalid for argument "value"');
      for (D = 0; D < b - u; ++D)
        this[D + u] = K[D % oe];
    }
    return this;
  };
  const re = {};
  function Ne(w, c, u) {
    re[w] = class extends u {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: c.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${w}]`, this.stack, delete this.name;
      }
      get code() {
        return w;
      }
      set code(R) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: R,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${w}]: ${this.message}`;
      }
    };
  }
  Ne(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(w) {
      return w ? `${w} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Ne(
    "ERR_INVALID_ARG_TYPE",
    function(w, c) {
      return `The "${w}" argument must be of type number. Received type ${typeof c}`;
    },
    TypeError
  ), Ne(
    "ERR_OUT_OF_RANGE",
    function(w, c, u) {
      let b = `The value of "${w}" is out of range.`, R = u;
      return Number.isInteger(u) && Math.abs(u) > 2 ** 32 ? R = ge(String(u)) : typeof u == "bigint" && (R = String(u), (u > BigInt(2) ** BigInt(32) || u < -(BigInt(2) ** BigInt(32))) && (R = ge(R)), R += "n"), b += ` It must be ${c}. Received ${R}`, b;
    },
    RangeError
  );
  function ge(w) {
    let c = "", u = w.length;
    const b = w[0] === "-" ? 1 : 0;
    for (; u >= b + 4; u -= 3)
      c = `_${w.slice(u - 3, u)}${c}`;
    return `${w.slice(0, u)}${c}`;
  }
  function Oe(w, c, u) {
    vt(c, "offset"), (w[c] === void 0 || w[c + u] === void 0) && mr(c, w.length - (u + 1));
  }
  function we(w, c, u, b, R, D) {
    if (w > u || w < c) {
      const K = typeof c == "bigint" ? "n" : "";
      let oe;
      throw c === 0 || c === BigInt(0) ? oe = `>= 0${K} and < 2${K} ** ${(D + 1) * 8}${K}` : oe = `>= -(2${K} ** ${(D + 1) * 8 - 1}${K}) and < 2 ** ${(D + 1) * 8 - 1}${K}`, new re.ERR_OUT_OF_RANGE("value", oe, w);
    }
    Oe(b, R, D);
  }
  function vt(w, c) {
    if (typeof w != "number")
      throw new re.ERR_INVALID_ARG_TYPE(c, "number", w);
  }
  function mr(w, c, u) {
    throw Math.floor(w) !== w ? (vt(w, u), new re.ERR_OUT_OF_RANGE("offset", "an integer", w)) : c < 0 ? new re.ERR_BUFFER_OUT_OF_BOUNDS() : new re.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${c}`,
      w
    );
  }
  const hi = /[^+/0-9A-Za-z-_]/g;
  function hn(w) {
    if (w = w.split("=")[0], w = w.trim().replace(hi, ""), w.length < 2) return "";
    for (; w.length % 4 !== 0; )
      w = w + "=";
    return w;
  }
  function Rn(w, c) {
    c = c || 1 / 0;
    let u;
    const b = w.length;
    let R = null;
    const D = [];
    for (let K = 0; K < b; ++K) {
      if (u = w.charCodeAt(K), u > 55295 && u < 57344) {
        if (!R) {
          if (u > 56319) {
            (c -= 3) > -1 && D.push(239, 191, 189);
            continue;
          } else if (K + 1 === b) {
            (c -= 3) > -1 && D.push(239, 191, 189);
            continue;
          }
          R = u;
          continue;
        }
        if (u < 56320) {
          (c -= 3) > -1 && D.push(239, 191, 189), R = u;
          continue;
        }
        u = (R - 55296 << 10 | u - 56320) + 65536;
      } else R && (c -= 3) > -1 && D.push(239, 191, 189);
      if (R = null, u < 128) {
        if ((c -= 1) < 0) break;
        D.push(u);
      } else if (u < 2048) {
        if ((c -= 2) < 0) break;
        D.push(
          u >> 6 | 192,
          u & 63 | 128
        );
      } else if (u < 65536) {
        if ((c -= 3) < 0) break;
        D.push(
          u >> 12 | 224,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else if (u < 1114112) {
        if ((c -= 4) < 0) break;
        D.push(
          u >> 18 | 240,
          u >> 12 & 63 | 128,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return D;
  }
  function Po(w) {
    const c = [];
    for (let u = 0; u < w.length; ++u)
      c.push(w.charCodeAt(u) & 255);
    return c;
  }
  function Fn(w, c) {
    let u, b, R;
    const D = [];
    for (let K = 0; K < w.length && !((c -= 2) < 0); ++K)
      u = w.charCodeAt(K), b = u >> 8, R = u % 256, D.push(R), D.push(b);
    return D;
  }
  function di(w) {
    return t.toByteArray(hn(w));
  }
  function dn(w, c, u, b) {
    let R;
    for (R = 0; R < b && !(R + u >= c.length || R >= w.length); ++R)
      c[R + u] = w[R];
    return R;
  }
  function Pt(w, c) {
    return w instanceof c || w != null && w.constructor != null && w.constructor.name != null && w.constructor.name === c.name;
  }
  function pn(w) {
    return w !== w;
  }
  const Hr = function() {
    const w = "0123456789abcdef", c = new Array(256);
    for (let u = 0; u < 16; ++u) {
      const b = u * 16;
      for (let R = 0; R < 16; ++R)
        c[b + R] = w[u] + w[R];
    }
    return c;
  }();
  function Mt(w) {
    return typeof BigInt > "u" ? pi : w;
  }
  function pi() {
    throw new Error("BigInt not supported");
  }
})(Ke);
const H = Ke.Buffer, Yh = Ke.Blob, Qh = Ke.BlobOptions, zh = Ke.Buffer, Jh = Ke.File, Zh = Ke.FileOptions, ed = Ke.INSPECT_MAX_BYTES, td = Ke.SlowBuffer, rd = Ke.TranscodeEncoding, nd = Ke.atob, id = Ke.btoa, od = Ke.constants, sd = Ke.isAscii, ad = Ke.isUtf8, cd = Ke.kMaxLength, ud = Ke.kStringMaxLength, ld = Ke.resolveObjectURL, fd = Ke.transcode, hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Blob: Yh,
  BlobOptions: Qh,
  Buffer: zh,
  File: Jh,
  FileOptions: Zh,
  INSPECT_MAX_BYTES: ed,
  SlowBuffer: td,
  TranscodeEncoding: rd,
  atob: nd,
  btoa: id,
  constants: od,
  default: H,
  isAscii: sd,
  isUtf8: ad,
  kMaxLength: cd,
  kStringMaxLength: ud,
  resolveObjectURL: ld,
  transcode: fd
}, Symbol.toStringTag, { value: "Module" }));
var at = {}, Ye = {};
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
var Lo = {}, to = {}, Ho = {}, fr = {};
Object.defineProperty(fr, "__esModule", { value: !0 });
fr.encode = fr.decode = fr.check = void 0;
function dd(e) {
  if (e.length < 8 || e.length > 72 || e[0] !== 48 || e[1] !== e.length - 2 || e[2] !== 2) return !1;
  const t = e[3];
  if (t === 0 || 5 + t >= e.length || e[4 + t] !== 2) return !1;
  const r = e[5 + t];
  return !(r === 0 || 6 + t + r !== e.length || e[4] & 128 || t > 1 && e[4] === 0 && !(e[5] & 128) || e[t + 6] & 128 || r > 1 && e[t + 6] === 0 && !(e[t + 7] & 128));
}
fr.check = dd;
function pd(e) {
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
fr.decode = pd;
function gd(e, t) {
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
fr.encode = gd;
var Rr = {};
Object.defineProperty(Rr, "__esModule", { value: !0 });
Rr.REVERSE_OPS = Rr.OPS = void 0;
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
Rr.OPS = gs;
const Zc = {};
Rr.REVERSE_OPS = Zc;
for (const e of Object.keys(gs)) {
  const t = gs[e];
  Zc[t] = e;
}
var Cr = {};
Object.defineProperty(Cr, "__esModule", { value: !0 });
Cr.decode = Cr.encode = Cr.encodingLength = void 0;
const kr = Rr;
function eu(e) {
  return e < kr.OPS.OP_PUSHDATA1 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5;
}
Cr.encodingLength = eu;
function wd(e, t, r) {
  const n = eu(t);
  return n === 1 ? e.writeUInt8(t, r) : n === 2 ? (e.writeUInt8(kr.OPS.OP_PUSHDATA1, r), e.writeUInt8(t, r + 1)) : n === 3 ? (e.writeUInt8(kr.OPS.OP_PUSHDATA2, r), e.writeUInt16LE(t, r + 1)) : (e.writeUInt8(kr.OPS.OP_PUSHDATA4, r), e.writeUInt32LE(t, r + 1)), n;
}
Cr.encode = wd;
function md(e, t) {
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
Cr.decode = md;
var xn = {};
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.encode = xn.decode = void 0;
function yd(e, t, r) {
  t = t || 4, r = r === void 0 ? !0 : r;
  const n = e.length;
  if (n === 0) return 0;
  if (n > t) throw new TypeError("Script number overflow");
  if (r && !(e[n - 1] & 127) && (n <= 1 || !(e[n - 2] & 128)))
    throw new Error("Non-minimally encoded script number");
  if (n === 5) {
    const o = e.readUInt32LE(0), s = e.readUInt8(4);
    return s & 128 ? -((s & -129) * 4294967296 + o) : s * 4294967296 + o;
  }
  let i = 0;
  for (let o = 0; o < n; ++o)
    i |= e[o] << 8 * o;
  return e[n - 1] & 128 ? -(i & ~(128 << 8 * (n - 1))) : i;
}
xn.decode = yd;
function Ad(e) {
  return e > 2147483647 ? 5 : e > 8388607 ? 4 : e > 32767 ? 3 : e > 127 ? 2 : e > 0 ? 1 : 0;
}
function Ed(e) {
  let t = Math.abs(e);
  const r = Ad(t), n = H.allocUnsafe(r), i = e < 0;
  for (let o = 0; o < r; ++o)
    n.writeUInt8(t & 255, o), t >>= 8;
  return n[r - 1] & 128 ? n.writeUInt8(i ? 128 : 0, r - 1) : i && (n[r - 1] |= 128), n;
}
xn.encode = Ed;
var $r = {}, rt = {};
const ro = /* @__PURE__ */ zl(hd);
var ni = {
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
ni.Null = ni.Nil;
for (var Sa in ni)
  ni[Sa].toJSON = (function(e) {
    return e;
  }).bind(null, Sa);
var Cs = ni, Gr = Cs;
function tu(e) {
  return e.name || e.toString().match(/function (.*?)\s*\(/)[1];
}
function Ns(e) {
  return Gr.Nil(e) ? "" : tu(e.constructor);
}
function Pd(e) {
  return Gr.Function(e) ? "" : Gr.String(e) ? JSON.stringify(e) : e && Gr.Object(e) ? "" : e;
}
function Rs(e, t) {
  Error.captureStackTrace && Error.captureStackTrace(e, t);
}
function Mi(e) {
  return Gr.Function(e) ? e.toJSON ? e.toJSON() : tu(e) : Gr.Array(e) ? "Array" : e && Gr.Object(e) ? "Object" : e !== void 0 ? e : "";
}
function ru(e, t, r) {
  var n = Pd(t);
  return "Expected " + Mi(e) + ", got" + (r !== "" ? " " + r : "") + (n !== "" ? " " + n : "");
}
function dr(e, t, r) {
  r = r || Ns(t), this.message = ru(e, t, r), Rs(this, dr), this.__type = e, this.__value = t, this.__valueTypeName = r;
}
dr.prototype = Object.create(Error.prototype);
dr.prototype.constructor = dr;
function bd(e, t, r, n, i) {
  var o = '" of type ';
  return t === "key" && (o = '" with key type '), ru('property "' + Mi(r) + o + Mi(e), n, i);
}
function _n(e, t, r, n, i) {
  e ? (i = i || Ns(n), this.message = bd(e, r, t, n, i)) : this.message = 'Unexpected property "' + t + '"', Rs(this, dr), this.__label = r, this.__property = t, this.__type = e, this.__value = n, this.__valueTypeName = i;
}
_n.prototype = Object.create(Error.prototype);
_n.prototype.constructor = dr;
function Sd(e, t) {
  return new dr(e, {}, t);
}
function vd(e, t, r) {
  return e instanceof _n ? (t = t + "." + e.__property, e = new _n(
    e.__type,
    t,
    e.__label,
    e.__value,
    e.__valueTypeName
  )) : e instanceof dr && (e = new _n(
    e.__type,
    t,
    r,
    e.__value,
    e.__valueTypeName
  )), Rs(e), e;
}
var nu = {
  TfTypeError: dr,
  TfPropertyTypeError: _n,
  tfCustomError: Sd,
  tfSubError: vd,
  tfJSON: Mi,
  getValueTypeName: Ns
}, Mo, va;
function Td() {
  if (va) return Mo;
  va = 1;
  var e = Cs, t = nu;
  function r(F) {
    return H.isBuffer(F);
  }
  function n(F) {
    return typeof F == "string" && /^([0-9a-f]{2})+$/i.test(F);
  }
  function i(F, W) {
    var g = F.toJSON();
    function h(E) {
      if (!F(E)) return !1;
      if (E.length === W) return !0;
      throw t.tfCustomError(g + "(Length: " + W + ")", g + "(Length: " + E.length + ")");
    }
    return h.toJSON = function() {
      return g;
    }, h;
  }
  var o = i.bind(null, e.Array), s = i.bind(null, r), a = i.bind(null, n), l = i.bind(null, e.String);
  function p(F, W, g) {
    g = g || e.Number;
    function h(E, N) {
      return g(E, N) && E > F && E < W;
    }
    return h.toJSON = function() {
      return `${g.toJSON()} between [${F}, ${W}]`;
    }, h;
  }
  var f = Math.pow(2, 53) - 1;
  function d(F) {
    return typeof F == "number" && isFinite(F);
  }
  function S(F) {
    return F << 24 >> 24 === F;
  }
  function m(F) {
    return F << 16 >> 16 === F;
  }
  function B(F) {
    return (F | 0) === F;
  }
  function O(F) {
    return typeof F == "number" && F >= -f && F <= f && Math.floor(F) === F;
  }
  function x(F) {
    return (F & 255) === F;
  }
  function $(F) {
    return (F & 65535) === F;
  }
  function A(F) {
    return F >>> 0 === F;
  }
  function k(F) {
    return typeof F == "number" && F >= 0 && F <= f && Math.floor(F) === F;
  }
  var C = {
    ArrayN: o,
    Buffer: r,
    BufferN: s,
    Finite: d,
    Hex: n,
    HexN: a,
    Int8: S,
    Int16: m,
    Int32: B,
    Int53: O,
    Range: p,
    StringN: l,
    UInt8: x,
    UInt16: $,
    UInt32: A,
    UInt53: k
  };
  for (var M in C)
    C[M].toJSON = (function(F) {
      return F;
    }).bind(null, M);
  return Mo = C, Mo;
}
var ci = nu, Ze = Cs, tr = ci.tfJSON, iu = ci.TfTypeError, ou = ci.TfPropertyTypeError, Dn = ci.tfSubError, _d = ci.getValueTypeName, ar = {
  arrayOf: function(t, r) {
    t = Vt(t), r = r || {};
    function n(i, o) {
      return !Ze.Array(i) || Ze.Nil(i) || r.minLength !== void 0 && i.length < r.minLength || r.maxLength !== void 0 && i.length > r.maxLength || r.length !== void 0 && i.length !== r.length ? !1 : i.every(function(s, a) {
        try {
          return ft(t, s, o);
        } catch (l) {
          throw Dn(l, a);
        }
      });
    }
    return n.toJSON = function() {
      var i = "[" + tr(t) + "]";
      return r.length !== void 0 ? i += "{" + r.length + "}" : (r.minLength !== void 0 || r.maxLength !== void 0) && (i += "{" + (r.minLength === void 0 ? 0 : r.minLength) + "," + (r.maxLength === void 0 ? 1 / 0 : r.maxLength) + "}"), i;
    }, n;
  },
  maybe: function e(t) {
    t = Vt(t);
    function r(n, i) {
      return Ze.Nil(n) || t(n, i, e);
    }
    return r.toJSON = function() {
      return "?" + tr(t);
    }, r;
  },
  map: function(t, r) {
    t = Vt(t), r && (r = Vt(r));
    function n(i, o) {
      if (!Ze.Object(i) || Ze.Nil(i)) return !1;
      for (var s in i) {
        try {
          r && ft(r, s, o);
        } catch (l) {
          throw Dn(l, s, "key");
        }
        try {
          var a = i[s];
          ft(t, a, o);
        } catch (l) {
          throw Dn(l, s);
        }
      }
      return !0;
    }
    return r ? n.toJSON = function() {
      return "{" + tr(r) + ": " + tr(t) + "}";
    } : n.toJSON = function() {
      return "{" + tr(t) + "}";
    }, n;
  },
  object: function(t) {
    var r = {};
    for (var n in t)
      r[n] = Vt(t[n]);
    function i(o, s) {
      if (!Ze.Object(o) || Ze.Nil(o)) return !1;
      var a;
      try {
        for (a in r) {
          var l = r[a], p = o[a];
          ft(l, p, s);
        }
      } catch (f) {
        throw Dn(f, a);
      }
      if (s) {
        for (a in o)
          if (!r[a])
            throw new ou(void 0, a);
      }
      return !0;
    }
    return i.toJSON = function() {
      return tr(r);
    }, i;
  },
  anyOf: function() {
    var t = [].slice.call(arguments).map(Vt);
    function r(n, i) {
      return t.some(function(o) {
        try {
          return ft(o, n, i);
        } catch {
          return !1;
        }
      });
    }
    return r.toJSON = function() {
      return t.map(tr).join("|");
    }, r;
  },
  allOf: function() {
    var t = [].slice.call(arguments).map(Vt);
    function r(n, i) {
      return t.every(function(o) {
        try {
          return ft(o, n, i);
        } catch {
          return !1;
        }
      });
    }
    return r.toJSON = function() {
      return t.map(tr).join(" & ");
    }, r;
  },
  quacksLike: function(t) {
    function r(n) {
      return t === _d(n);
    }
    return r.toJSON = function() {
      return t;
    }, r;
  },
  tuple: function() {
    var t = [].slice.call(arguments).map(Vt);
    function r(n, i) {
      return Ze.Nil(n) || Ze.Nil(n.length) || i && n.length !== t.length ? !1 : t.every(function(o, s) {
        try {
          return ft(o, n[s], i);
        } catch (a) {
          throw Dn(a, s);
        }
      });
    }
    return r.toJSON = function() {
      return "(" + t.map(tr).join(", ") + ")";
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
ar.oneOf = ar.anyOf;
function Vt(e) {
  if (Ze.String(e))
    return e[0] === "?" ? ar.maybe(e.slice(1)) : Ze[e] || ar.quacksLike(e);
  if (e && Ze.Object(e)) {
    if (Ze.Array(e)) {
      if (e.length !== 1) throw new TypeError("Expected compile() parameter of type Array of length 1");
      return ar.arrayOf(e[0]);
    }
    return ar.object(e);
  } else if (Ze.Function(e))
    return e;
  return ar.value(e);
}
function ft(e, t, r, n) {
  if (Ze.Function(e)) {
    if (e(t, r)) return !0;
    throw new iu(n || e, t);
  }
  return ft(Vt(e), t, r);
}
for (var Nr in Ze)
  ft[Nr] = Ze[Nr];
for (Nr in ar)
  ft[Nr] = ar[Nr];
var Ta = Td();
for (Nr in Ta)
  ft[Nr] = Ta[Nr];
ft.compile = Vt;
ft.TfTypeError = iu;
ft.TfPropertyTypeError = ou;
var Id = ft;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.oneOf = e.Null = e.BufferN = e.Function = e.UInt32 = e.UInt8 = e.tuple = e.maybe = e.Hex = e.Buffer = e.String = e.Boolean = e.Array = e.Number = e.Hash256bit = e.Hash160bit = e.Buffer256bit = e.isTaptree = e.isTapleaf = e.TAPLEAF_VERSION_MASK = e.Satoshi = e.isPoint = e.stacksEqual = e.typeforce = void 0;
  const t = ro;
  e.typeforce = Id;
  const r = t.Buffer.alloc(32, 0), n = t.Buffer.from(
    "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
    "hex"
  );
  function i(f, d) {
    return f.length !== d.length ? !1 : f.every((S, m) => S.equals(d[m]));
  }
  e.stacksEqual = i;
  function o(f) {
    if (!t.Buffer.isBuffer(f) || f.length < 33) return !1;
    const d = f[0], S = f.slice(1, 33);
    if (S.compare(r) === 0 || S.compare(n) >= 0) return !1;
    if ((d === 2 || d === 3) && f.length === 33)
      return !0;
    const m = f.slice(33);
    return m.compare(r) === 0 || m.compare(n) >= 0 ? !1 : d === 4 && f.length === 65;
  }
  e.isPoint = o;
  const s = 21 * 1e14;
  function a(f) {
    return e.typeforce.UInt53(f) && f <= s;
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
})(rt);
var _a;
function Od() {
  if (_a) return $r;
  _a = 1, Object.defineProperty($r, "__esModule", { value: !0 }), $r.encode = $r.decode = void 0;
  const e = fr, t = dt(), r = rt, { typeforce: n } = r, i = H.alloc(1, 0);
  function o(p) {
    let f = 0;
    for (; p[f] === 0; ) ++f;
    return f === p.length ? i : (p = p.slice(f), p[0] & 128 ? H.concat([i, p], 1 + p.length) : p);
  }
  function s(p) {
    p[0] === 0 && (p = p.slice(1));
    const f = H.alloc(32, 0), d = Math.max(0, 32 - p.length);
    return p.copy(f, d), f;
  }
  function a(p) {
    const f = p.readUInt8(p.length - 1);
    if (!(0, t.isDefinedHashType)(f))
      throw new Error("Invalid hashType " + f);
    const d = e.decode(p.slice(0, -1)), S = s(d.r), m = s(d.s);
    return { signature: H.concat([S, m], 64), hashType: f };
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
    const S = o(p.slice(0, 32)), m = o(p.slice(32, 64));
    return H.concat([e.encode(S, m), d]);
  }
  return $r.encode = l, $r;
}
var Ia;
function dt() {
  return Ia || (Ia = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.signature = e.number = e.isCanonicalScriptSignature = e.isDefinedHashType = e.isCanonicalPubKey = e.toStack = e.fromASM = e.toASM = e.decompile = e.compile = e.countNonPushOnlyOPs = e.isPushOnly = e.OPS = void 0;
    const t = fr, r = Rr;
    Object.defineProperty(e, "OPS", {
      enumerable: !0,
      get: function() {
        return r.OPS;
      }
    });
    const n = Cr, i = xn, o = Od(), s = rt, { typeforce: a } = s, l = r.OPS.OP_RESERVED;
    function p(h) {
      return s.Number(h) && (h === r.OPS.OP_0 || h >= r.OPS.OP_1 && h <= r.OPS.OP_16 || h === r.OPS.OP_1NEGATE);
    }
    function f(h) {
      return s.Buffer(h) || p(h);
    }
    function d(h) {
      return s.Array(h) && h.every(f);
    }
    e.isPushOnly = d;
    function S(h) {
      return h.length - h.filter(f).length;
    }
    e.countNonPushOnlyOPs = S;
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
    function O(h) {
      return s.Array(h);
    }
    function x(h) {
      return H.isBuffer(h);
    }
    function $(h) {
      if (B(h)) return h;
      a(s.Array, h);
      const E = h.reduce((P, I) => x(I) ? I.length === 1 && m(I) !== void 0 ? P + 1 : P + n.encodingLength(I.length) + I.length : P + 1, 0), N = H.allocUnsafe(E);
      let y = 0;
      if (h.forEach((P) => {
        if (x(P)) {
          const I = m(P);
          if (I !== void 0) {
            N.writeUInt8(I, y), y += 1;
            return;
          }
          y += n.encode(N, P.length, y), P.copy(N, y), y += P.length;
        } else
          N.writeUInt8(P, y), y += 1;
      }), y !== N.length) throw new Error("Could not decode chunks");
      return N;
    }
    e.compile = $;
    function A(h) {
      if (O(h)) return h;
      a(s.Buffer, h);
      const E = [];
      let N = 0;
      for (; N < h.length; ) {
        const y = h[N];
        if (y > r.OPS.OP_0 && y <= r.OPS.OP_PUSHDATA4) {
          const P = n.decode(h, N);
          if (P === null || (N += P.size, N + P.number > h.length)) return null;
          const I = h.slice(N, N + P.number);
          N += P.number;
          const v = m(I);
          v !== void 0 ? E.push(v) : E.push(I);
        } else
          E.push(y), N += 1;
      }
      return E;
    }
    e.decompile = A;
    function k(h) {
      if (B(h) && (h = A(h)), !h)
        throw new Error("Could not convert invalid chunks to ASM");
      return h.map((E) => {
        if (x(E)) {
          const N = m(E);
          if (N === void 0) return E.toString("hex");
          E = N;
        }
        return r.REVERSE_OPS[E];
      }).join(" ");
    }
    e.toASM = k;
    function C(h) {
      return a(s.String, h), $(
        h.split(" ").map((E) => r.OPS[E] !== void 0 ? r.OPS[E] : (a(s.Hex, E), H.from(E, "hex")))
      );
    }
    e.fromASM = C;
    function M(h) {
      return h = A(h), a(d, h), h.map((E) => x(E) ? E : E === r.OPS.OP_0 ? H.allocUnsafe(0) : i.encode(E - l));
    }
    e.toStack = M;
    function F(h) {
      return s.isPoint(h);
    }
    e.isCanonicalPubKey = F;
    function W(h) {
      const E = h & -129;
      return E > 0 && E < 4;
    }
    e.isDefinedHashType = W;
    function g(h) {
      return !H.isBuffer(h) || !W(h[h.length - 1]) ? !1 : t.check(h.slice(0, -1));
    }
    e.isCanonicalScriptSignature = g, e.number = i, e.signature = o;
  }(Ho)), Ho;
}
var St = {};
Object.defineProperty(St, "__esModule", { value: !0 });
St.value = St.prop = void 0;
function kd(e, t, r) {
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
St.prop = kd;
function xd(e) {
  let t;
  return () => (t !== void 0 || (t = e()), t);
}
St.value = xd;
Object.defineProperty(to, "__esModule", { value: !0 });
to.p2data = void 0;
const Bd = Ye, Bi = dt(), Dt = rt, Oa = St, ka = Bi.OPS;
function Cd(e, t) {
  if (!e.data && !e.output) throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, Dt.typeforce)(
    {
      network: Dt.typeforce.maybe(Dt.typeforce.Object),
      output: Dt.typeforce.maybe(Dt.typeforce.Buffer),
      data: Dt.typeforce.maybe(
        Dt.typeforce.arrayOf(Dt.typeforce.Buffer)
      )
    },
    e
  );
  const n = { name: "embed", network: e.network || Bd.bitcoin };
  if (Oa.prop(n, "output", () => {
    if (e.data)
      return Bi.compile([ka.OP_RETURN].concat(e.data));
  }), Oa.prop(n, "data", () => {
    if (e.output)
      return Bi.decompile(e.output).slice(1);
  }), t.validate && e.output) {
    const i = Bi.decompile(e.output);
    if (i[0] !== ka.OP_RETURN) throw new TypeError("Output is invalid");
    if (!i.slice(1).every(Dt.typeforce.Buffer))
      throw new TypeError("Output is invalid");
    if (e.data && !(0, Dt.stacksEqual)(e.data, n.data))
      throw new TypeError("Data mismatch");
  }
  return Object.assign(n, e);
}
to.p2data = Cd;
var no = {};
Object.defineProperty(no, "__esModule", { value: !0 });
no.p2ms = void 0;
const Nd = Ye, Pn = dt(), Fe = rt, Er = St, bn = Pn.OPS, Ei = bn.OP_RESERVED;
function Rd(e, t) {
  if (!e.input && !e.output && !(e.pubkeys && e.m !== void 0) && !e.signatures)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {});
  function r(l) {
    return Pn.isCanonicalScriptSignature(l) || (t.allowIncomplete && l === bn.OP_0) !== void 0;
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
  const i = { network: e.network || Nd.bitcoin };
  let o = [], s = !1;
  function a(l) {
    s || (s = !0, o = Pn.decompile(l), i.m = o[0] - Ei, i.n = o[o.length - 2] - Ei, i.pubkeys = o.slice(1, -2));
  }
  if (Er.prop(i, "output", () => {
    if (e.m && i.n && e.pubkeys)
      return Pn.compile(
        [].concat(
          Ei + e.m,
          e.pubkeys,
          Ei + i.n,
          bn.OP_CHECKMULTISIG
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
      return Pn.decompile(e.input).slice(1);
  }), Er.prop(i, "input", () => {
    if (e.signatures)
      return Pn.compile([bn.OP_0].concat(e.signatures));
  }), Er.prop(i, "witness", () => {
    if (i.input)
      return [];
  }), Er.prop(i, "name", () => {
    if (!(!i.m || !i.n))
      return `p2ms(${i.m} of ${i.n})`;
  }), t.validate) {
    if (e.output) {
      if (a(e.output), !Fe.typeforce.Number(o[0]))
        throw new TypeError("Output is invalid");
      if (!Fe.typeforce.Number(o[o.length - 2]))
        throw new TypeError("Output is invalid");
      if (o[o.length - 1] !== bn.OP_CHECKMULTISIG)
        throw new TypeError("Output is invalid");
      if (i.m <= 0 || i.n > 16 || i.m > i.n || i.n !== o.length - 3)
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
      if (e.input[0] !== bn.OP_0) throw new TypeError("Input is invalid");
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
no.p2ms = Rd;
var io = {};
Object.defineProperty(io, "__esModule", { value: !0 });
io.p2pk = void 0;
const Fd = Ye, Sn = dt(), Rt = rt, An = St, xa = Sn.OPS;
function Ud(e, t) {
  if (!e.input && !e.output && !e.pubkey && !e.input && !e.signature)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, Rt.typeforce)(
    {
      network: Rt.typeforce.maybe(Rt.typeforce.Object),
      output: Rt.typeforce.maybe(Rt.typeforce.Buffer),
      pubkey: Rt.typeforce.maybe(Rt.isPoint),
      signature: Rt.typeforce.maybe(Sn.isCanonicalScriptSignature),
      input: Rt.typeforce.maybe(Rt.typeforce.Buffer)
    },
    e
  );
  const r = An.value(() => Sn.decompile(e.input)), i = { name: "p2pk", network: e.network || Fd.bitcoin };
  if (An.prop(i, "output", () => {
    if (e.pubkey)
      return Sn.compile([e.pubkey, xa.OP_CHECKSIG]);
  }), An.prop(i, "pubkey", () => {
    if (e.output)
      return e.output.slice(1, -1);
  }), An.prop(i, "signature", () => {
    if (e.input)
      return r()[0];
  }), An.prop(i, "input", () => {
    if (e.signature)
      return Sn.compile([e.signature]);
  }), An.prop(i, "witness", () => {
    if (i.input)
      return [];
  }), t.validate) {
    if (e.output) {
      if (e.output[e.output.length - 1] !== xa.OP_CHECKSIG)
        throw new TypeError("Output is invalid");
      if (!(0, Rt.isPoint)(i.pubkey))
        throw new TypeError("Output pubkey is invalid");
      if (e.pubkey && !e.pubkey.equals(i.pubkey))
        throw new TypeError("Pubkey mismatch");
    }
    if (e.signature && e.input && !e.input.equals(i.input))
      throw new TypeError("Signature mismatch");
    if (e.input) {
      if (r().length !== 1) throw new TypeError("Input is invalid");
      if (!Sn.isCanonicalScriptSignature(i.signature))
        throw new TypeError("Input has invalid signature");
    }
  }
  return Object.assign(i, e);
}
io.p2pk = Ud;
var oo = {}, Jt = {}, Bn = {}, Qt = {}, Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.output = Ge.exists = Ge.hash = Ge.bytes = Ge.bool = Ge.number = Ge.isBytes = void 0;
function Di(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`positive integer expected, not ${e}`);
}
Ge.number = Di;
function su(e) {
  if (typeof e != "boolean")
    throw new Error(`boolean expected, not ${e}`);
}
Ge.bool = su;
function au(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
Ge.isBytes = au;
function Fs(e, ...t) {
  if (!au(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
Ge.bytes = Fs;
function cu(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Di(e.outputLen), Di(e.blockLen);
}
Ge.hash = cu;
function uu(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
Ge.exists = uu;
function lu(e, t) {
  Fs(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
Ge.output = lu;
const Ld = { number: Di, bool: su, bytes: Fs, hash: cu, exists: uu, output: lu };
Ge.default = Ld;
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
  const o = (y) => new Uint32Array(y.buffer, y.byteOffset, Math.floor(y.byteLength / 4));
  e.u32 = o;
  const s = (y) => new DataView(y.buffer, y.byteOffset, y.byteLength);
  e.createView = s;
  const a = (y, P) => y << 32 - P | y >>> P;
  e.rotr = a;
  const l = (y, P) => y << P | y >>> 32 - P >>> 0;
  e.rotl = l, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  const p = (y) => y << 24 & 4278190080 | y << 8 & 16711680 | y >>> 8 & 65280 | y >>> 24 & 255;
  e.byteSwap = p, e.byteSwapIfBE = e.isLE ? (y) => y : (y) => (0, e.byteSwap)(y);
  function f(y) {
    for (let P = 0; P < y.length; P++)
      y[P] = (0, e.byteSwap)(y[P]);
  }
  e.byteSwap32 = f;
  const d = /* @__PURE__ */ Array.from({ length: 256 }, (y, P) => P.toString(16).padStart(2, "0"));
  function S(y) {
    (0, r.bytes)(y);
    let P = "";
    for (let I = 0; I < y.length; I++)
      P += d[y[I]];
    return P;
  }
  e.bytesToHex = S;
  const m = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function B(y) {
    if (y >= m._0 && y <= m._9)
      return y - m._0;
    if (y >= m._A && y <= m._F)
      return y - (m._A - 10);
    if (y >= m._a && y <= m._f)
      return y - (m._a - 10);
  }
  function O(y) {
    if (typeof y != "string")
      throw new Error("hex string expected, got " + typeof y);
    const P = y.length, I = P / 2;
    if (P % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + P);
    const v = new Uint8Array(I);
    for (let T = 0, U = 0; T < I; T++, U += 2) {
      const L = B(y.charCodeAt(U)), j = B(y.charCodeAt(U + 1));
      if (L === void 0 || j === void 0) {
        const G = y[U] + y[U + 1];
        throw new Error('hex string expected, got non-hex character "' + G + '" at index ' + U);
      }
      v[T] = L * 16 + j;
    }
    return v;
  }
  e.hexToBytes = O;
  const x = async () => {
  };
  e.nextTick = x;
  async function $(y, P, I) {
    let v = Date.now();
    for (let T = 0; T < y; T++) {
      I(T);
      const U = Date.now() - v;
      U >= 0 && U < P || (await (0, e.nextTick)(), v += U);
    }
  }
  e.asyncLoop = $;
  function A(y) {
    if (typeof y != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof y}`);
    return new Uint8Array(new TextEncoder().encode(y));
  }
  e.utf8ToBytes = A;
  function k(y) {
    return typeof y == "string" && (y = A(y)), (0, r.bytes)(y), y;
  }
  e.toBytes = k;
  function C(...y) {
    let P = 0;
    for (let v = 0; v < y.length; v++) {
      const T = y[v];
      (0, r.bytes)(T), P += T.length;
    }
    const I = new Uint8Array(P);
    for (let v = 0, T = 0; v < y.length; v++) {
      const U = y[v];
      I.set(U, T), T += U.length;
    }
    return I;
  }
  e.concatBytes = C;
  class M {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = M;
  const F = {}.toString;
  function W(y, P) {
    if (P !== void 0 && F.call(P) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(y, P);
  }
  e.checkOpts = W;
  function g(y) {
    const P = (v) => y().update(k(v)).digest(), I = y();
    return P.outputLen = I.outputLen, P.blockLen = I.blockLen, P.create = () => y(), P;
  }
  e.wrapConstructor = g;
  function h(y) {
    const P = (v, T) => y(T).update(k(v)).digest(), I = y({});
    return P.outputLen = I.outputLen, P.blockLen = I.blockLen, P.create = (v) => y(v), P;
  }
  e.wrapConstructorWithOpts = h;
  function E(y) {
    const P = (v, T) => y(T).update(k(v)).digest(), I = y({});
    return P.outputLen = I.outputLen, P.blockLen = I.blockLen, P.create = (v) => y(v), P;
  }
  e.wrapXOFConstructorWithOpts = E;
  function N(y = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(y));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = N;
})(ui);
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.HashMD = Qt.Maj = Qt.Chi = void 0;
const Do = Ge, $n = ui;
function Hd(e, t, r, n) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, r, n);
  const i = BigInt(32), o = BigInt(4294967295), s = Number(r >> i & o), a = Number(r & o), l = n ? 4 : 0, p = n ? 0 : 4;
  e.setUint32(t + l, s, n), e.setUint32(t + p, a, n);
}
const Md = (e, t, r) => e & t ^ ~e & r;
Qt.Chi = Md;
const Dd = (e, t, r) => e & t ^ e & r ^ t & r;
Qt.Maj = Dd;
class $d extends $n.Hash {
  constructor(t, r, n, i) {
    super(), this.blockLen = t, this.outputLen = r, this.padOffset = n, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = (0, $n.createView)(this.buffer);
  }
  update(t) {
    (0, Do.exists)(this);
    const { view: r, buffer: n, blockLen: i } = this;
    t = (0, $n.toBytes)(t);
    const o = t.length;
    for (let s = 0; s < o; ) {
      const a = Math.min(i - this.pos, o - s);
      if (a === i) {
        const l = (0, $n.createView)(t);
        for (; i <= o - s; s += i)
          this.process(l, s);
        continue;
      }
      n.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === i && (this.process(r, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    (0, Do.exists)(this), (0, Do.output)(t, this), this.finished = !0;
    const { buffer: r, view: n, blockLen: i, isLE: o } = this;
    let { pos: s } = this;
    r[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > i - s && (this.process(n, 0), s = 0);
    for (let d = s; d < i; d++)
      r[d] = 0;
    Hd(n, i - 8, BigInt(this.length * 8), o), this.process(n, 0);
    const a = (0, $n.createView)(t), l = this.outputLen;
    if (l % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const p = l / 4, f = this.get();
    if (p > f.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let d = 0; d < p; d++)
      a.setUint32(4 * d, f[d], o);
  }
  digest() {
    const { buffer: t, outputLen: r } = this;
    this.digestInto(t);
    const n = t.slice(0, r);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: r, buffer: n, length: i, finished: o, destroyed: s, pos: a } = this;
    return t.length = i, t.pos = a, t.finished = o, t.destroyed = s, i % r && t.buffer.set(n), t;
  }
}
Qt.HashMD = $d;
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.ripemd160 = Bn.RIPEMD160 = void 0;
const jd = Qt, qn = ui, Kd = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]), fu = /* @__PURE__ */ new Uint8Array(new Array(16).fill(0).map((e, t) => t)), Wd = /* @__PURE__ */ fu.map((e) => (9 * e + 5) % 16);
let Us = [fu], Ls = [Wd];
for (let e = 0; e < 4; e++)
  for (let t of [Us, Ls])
    t.push(t[e].map((r) => Kd[r]));
const hu = /* @__PURE__ */ [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((e) => new Uint8Array(e)), Vd = /* @__PURE__ */ Us.map((e, t) => e.map((r) => hu[t][r])), Gd = /* @__PURE__ */ Ls.map((e, t) => e.map((r) => hu[t][r])), Xd = /* @__PURE__ */ new Uint32Array([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]), qd = /* @__PURE__ */ new Uint32Array([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]);
function Ba(e, t, r, n) {
  return e === 0 ? t ^ r ^ n : e === 1 ? t & r | ~t & n : e === 2 ? (t | ~r) ^ n : e === 3 ? t & n | r & ~n : t ^ (r | ~n);
}
const Pi = /* @__PURE__ */ new Uint32Array(16);
class du extends jd.HashMD {
  constructor() {
    super(64, 20, 8, !0), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
  }
  get() {
    const { h0: t, h1: r, h2: n, h3: i, h4: o } = this;
    return [t, r, n, i, o];
  }
  set(t, r, n, i, o) {
    this.h0 = t | 0, this.h1 = r | 0, this.h2 = n | 0, this.h3 = i | 0, this.h4 = o | 0;
  }
  process(t, r) {
    for (let m = 0; m < 16; m++, r += 4)
      Pi[m] = t.getUint32(r, !0);
    let n = this.h0 | 0, i = n, o = this.h1 | 0, s = o, a = this.h2 | 0, l = a, p = this.h3 | 0, f = p, d = this.h4 | 0, S = d;
    for (let m = 0; m < 5; m++) {
      const B = 4 - m, O = Xd[m], x = qd[m], $ = Us[m], A = Ls[m], k = Vd[m], C = Gd[m];
      for (let M = 0; M < 16; M++) {
        const F = (0, qn.rotl)(n + Ba(m, o, a, p) + Pi[$[M]] + O, k[M]) + d | 0;
        n = d, d = p, p = (0, qn.rotl)(a, 10) | 0, a = o, o = F;
      }
      for (let M = 0; M < 16; M++) {
        const F = (0, qn.rotl)(i + Ba(B, s, l, f) + Pi[A[M]] + x, C[M]) + S | 0;
        i = S, S = f, f = (0, qn.rotl)(l, 10) | 0, l = s, s = F;
      }
    }
    this.set(this.h1 + a + f | 0, this.h2 + p + S | 0, this.h3 + d + i | 0, this.h4 + n + s | 0, this.h0 + o + l | 0);
  }
  roundClean() {
    Pi.fill(0);
  }
  destroy() {
    this.destroyed = !0, this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
  }
}
Bn.RIPEMD160 = du;
Bn.ripemd160 = (0, qn.wrapConstructor)(() => new du());
var ao = {};
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.sha1 = void 0;
const $o = Qt, Ci = ui, jn = /* @__PURE__ */ new Uint32Array([
  1732584193,
  4023233417,
  2562383102,
  271733878,
  3285377520
]), Pr = /* @__PURE__ */ new Uint32Array(80);
class Yd extends $o.HashMD {
  constructor() {
    super(64, 20, 8, !1), this.A = jn[0] | 0, this.B = jn[1] | 0, this.C = jn[2] | 0, this.D = jn[3] | 0, this.E = jn[4] | 0;
  }
  get() {
    const { A: t, B: r, C: n, D: i, E: o } = this;
    return [t, r, n, i, o];
  }
  set(t, r, n, i, o) {
    this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = i | 0, this.E = o | 0;
  }
  process(t, r) {
    for (let l = 0; l < 16; l++, r += 4)
      Pr[l] = t.getUint32(r, !1);
    for (let l = 16; l < 80; l++)
      Pr[l] = (0, Ci.rotl)(Pr[l - 3] ^ Pr[l - 8] ^ Pr[l - 14] ^ Pr[l - 16], 1);
    let { A: n, B: i, C: o, D: s, E: a } = this;
    for (let l = 0; l < 80; l++) {
      let p, f;
      l < 20 ? (p = (0, $o.Chi)(i, o, s), f = 1518500249) : l < 40 ? (p = i ^ o ^ s, f = 1859775393) : l < 60 ? (p = (0, $o.Maj)(i, o, s), f = 2400959708) : (p = i ^ o ^ s, f = 3395469782);
      const d = (0, Ci.rotl)(n, 5) + p + a + f + Pr[l] | 0;
      a = s, s = o, o = (0, Ci.rotl)(i, 30), i = n, n = d;
    }
    n = n + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, this.set(n, i, o, s, a);
  }
  roundClean() {
    Pr.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
ao.sha1 = (0, Ci.wrapConstructor)(() => new Yd());
var qr = {};
Object.defineProperty(qr, "__esModule", { value: !0 });
qr.sha224 = qr.sha256 = void 0;
const jo = Qt, xt = ui, Qd = /* @__PURE__ */ new Uint32Array([
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
]), br = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Sr = /* @__PURE__ */ new Uint32Array(64);
class pu extends jo.HashMD {
  constructor() {
    super(64, 32, 8, !1), this.A = br[0] | 0, this.B = br[1] | 0, this.C = br[2] | 0, this.D = br[3] | 0, this.E = br[4] | 0, this.F = br[5] | 0, this.G = br[6] | 0, this.H = br[7] | 0;
  }
  get() {
    const { A: t, B: r, C: n, D: i, E: o, F: s, G: a, H: l } = this;
    return [t, r, n, i, o, s, a, l];
  }
  // prettier-ignore
  set(t, r, n, i, o, s, a, l) {
    this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = i | 0, this.E = o | 0, this.F = s | 0, this.G = a | 0, this.H = l | 0;
  }
  process(t, r) {
    for (let d = 0; d < 16; d++, r += 4)
      Sr[d] = t.getUint32(r, !1);
    for (let d = 16; d < 64; d++) {
      const S = Sr[d - 15], m = Sr[d - 2], B = (0, xt.rotr)(S, 7) ^ (0, xt.rotr)(S, 18) ^ S >>> 3, O = (0, xt.rotr)(m, 17) ^ (0, xt.rotr)(m, 19) ^ m >>> 10;
      Sr[d] = O + Sr[d - 7] + B + Sr[d - 16] | 0;
    }
    let { A: n, B: i, C: o, D: s, E: a, F: l, G: p, H: f } = this;
    for (let d = 0; d < 64; d++) {
      const S = (0, xt.rotr)(a, 6) ^ (0, xt.rotr)(a, 11) ^ (0, xt.rotr)(a, 25), m = f + S + (0, jo.Chi)(a, l, p) + Qd[d] + Sr[d] | 0, O = ((0, xt.rotr)(n, 2) ^ (0, xt.rotr)(n, 13) ^ (0, xt.rotr)(n, 22)) + (0, jo.Maj)(n, i, o) | 0;
      f = p, p = l, l = a, a = s + m | 0, s = o, o = i, i = n, n = m + O | 0;
    }
    n = n + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, l = l + this.F | 0, p = p + this.G | 0, f = f + this.H | 0, this.set(n, i, o, s, a, l, p, f);
  }
  roundClean() {
    Sr.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class zd extends pu {
  constructor() {
    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
  }
}
qr.sha256 = (0, xt.wrapConstructor)(() => new pu());
qr.sha224 = (0, xt.wrapConstructor)(() => new zd());
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.taggedHash = e.TAGGED_HASH_PREFIXES = e.TAGS = e.hash256 = e.hash160 = e.sha256 = e.sha1 = e.ripemd160 = void 0;
  const t = Bn, r = ao, n = qr;
  function i(f) {
    return H.from((0, t.ripemd160)(Uint8Array.from(f)));
  }
  e.ripemd160 = i;
  function o(f) {
    return H.from((0, r.sha1)(Uint8Array.from(f)));
  }
  e.sha1 = o;
  function s(f) {
    return H.from((0, n.sha256)(Uint8Array.from(f)));
  }
  e.sha256 = s;
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
    return s(H.concat([e.TAGGED_HASH_PREFIXES[f], d]));
  }
  e.taggedHash = p;
})(Jt);
function Jd(e) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), r = 0; r < t.length; r++)
    t[r] = 255;
  for (var n = 0; n < e.length; n++) {
    var i = e.charAt(n), o = i.charCodeAt(0);
    if (t[o] !== 255)
      throw new TypeError(i + " is ambiguous");
    t[o] = n;
  }
  var s = e.length, a = e.charAt(0), l = Math.log(s) / Math.log(256), p = Math.log(256) / Math.log(s);
  function f(m) {
    if (m instanceof Uint8Array || (ArrayBuffer.isView(m) ? m = new Uint8Array(m.buffer, m.byteOffset, m.byteLength) : Array.isArray(m) && (m = Uint8Array.from(m))), !(m instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (m.length === 0)
      return "";
    for (var B = 0, O = 0, x = 0, $ = m.length; x !== $ && m[x] === 0; )
      x++, B++;
    for (var A = ($ - x) * p + 1 >>> 0, k = new Uint8Array(A); x !== $; ) {
      for (var C = m[x], M = 0, F = A - 1; (C !== 0 || M < O) && F !== -1; F--, M++)
        C += 256 * k[F] >>> 0, k[F] = C % s >>> 0, C = C / s >>> 0;
      if (C !== 0)
        throw new Error("Non-zero carry");
      O = M, x++;
    }
    for (var W = A - O; W !== A && k[W] === 0; )
      W++;
    for (var g = a.repeat(B); W < A; ++W)
      g += e.charAt(k[W]);
    return g;
  }
  function d(m) {
    if (typeof m != "string")
      throw new TypeError("Expected String");
    if (m.length === 0)
      return new Uint8Array();
    for (var B = 0, O = 0, x = 0; m[B] === a; )
      O++, B++;
    for (var $ = (m.length - B) * l + 1 >>> 0, A = new Uint8Array($); m[B]; ) {
      var k = t[m.charCodeAt(B)];
      if (k === 255)
        return;
      for (var C = 0, M = $ - 1; (k !== 0 || C < x) && M !== -1; M--, C++)
        k += s * A[M] >>> 0, A[M] = k % 256 >>> 0, k = k / 256 >>> 0;
      if (k !== 0)
        throw new Error("Non-zero carry");
      x = C, B++;
    }
    for (var F = $ - x; F !== $ && A[F] === 0; )
      F++;
    for (var W = new Uint8Array(O + ($ - F)), g = O; F !== $; )
      W[g++] = A[F++];
    return W;
  }
  function S(m) {
    var B = d(m);
    if (B)
      return B;
    throw new Error("Non-base" + s + " character");
  }
  return {
    encode: f,
    decodeUnsafe: d,
    decode: S
  };
}
var Zd = Jd;
const ep = Zd, tp = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var rp = ep(tp), Ko = rp, np = function(e) {
  function t(o) {
    var s = Uint8Array.from(o), a = e(s), l = s.length + 4, p = new Uint8Array(l);
    return p.set(s, 0), p.set(a.subarray(0, 4), s.length), Ko.encode(p, l);
  }
  function r(o) {
    var s = o.slice(0, -4), a = o.slice(-4), l = e(s);
    if (!(a[0] ^ l[0] | a[1] ^ l[1] | a[2] ^ l[2] | a[3] ^ l[3]))
      return s;
  }
  function n(o) {
    var s = Ko.decodeUnsafe(o);
    if (s)
      return r(s);
  }
  function i(o) {
    var s = Ko.decode(o), a = r(s);
    if (!a) throw new Error("Invalid checksum");
    return a;
  }
  return {
    encode: t,
    decode: i,
    decodeUnsafe: n
  };
}, { sha256: Ca } = qr, ip = np;
function op(e) {
  return Ca(Ca(e));
}
var Hs = ip(op);
Object.defineProperty(oo, "__esModule", { value: !0 });
oo.p2pkh = void 0;
const Wo = Jt, sp = Ye, vn = dt(), ct = rt, rr = St, Na = Hs, vr = vn.OPS;
function ap(e, t) {
  if (!e.address && !e.hash && !e.output && !e.pubkey && !e.input)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, ct.typeforce)(
    {
      network: ct.typeforce.maybe(ct.typeforce.Object),
      address: ct.typeforce.maybe(ct.typeforce.String),
      hash: ct.typeforce.maybe(ct.typeforce.BufferN(20)),
      output: ct.typeforce.maybe(ct.typeforce.BufferN(25)),
      pubkey: ct.typeforce.maybe(ct.isPoint),
      signature: ct.typeforce.maybe(vn.isCanonicalScriptSignature),
      input: ct.typeforce.maybe(ct.typeforce.Buffer)
    },
    e
  );
  const r = rr.value(() => {
    const s = H.from(Na.decode(e.address)), a = s.readUInt8(0), l = s.slice(1);
    return { version: a, hash: l };
  }), n = rr.value(() => vn.decompile(e.input)), i = e.network || sp.bitcoin, o = { name: "p2pkh", network: i };
  if (rr.prop(o, "address", () => {
    if (!o.hash) return;
    const s = H.allocUnsafe(21);
    return s.writeUInt8(i.pubKeyHash, 0), o.hash.copy(s, 1), Na.encode(s);
  }), rr.prop(o, "hash", () => {
    if (e.output) return e.output.slice(3, 23);
    if (e.address) return r().hash;
    if (e.pubkey || o.pubkey) return Wo.hash160(e.pubkey || o.pubkey);
  }), rr.prop(o, "output", () => {
    if (o.hash)
      return vn.compile([
        vr.OP_DUP,
        vr.OP_HASH160,
        o.hash,
        vr.OP_EQUALVERIFY,
        vr.OP_CHECKSIG
      ]);
  }), rr.prop(o, "pubkey", () => {
    if (e.input)
      return n()[1];
  }), rr.prop(o, "signature", () => {
    if (e.input)
      return n()[0];
  }), rr.prop(o, "input", () => {
    if (e.pubkey && e.signature)
      return vn.compile([e.signature, e.pubkey]);
  }), rr.prop(o, "witness", () => {
    if (o.input)
      return [];
  }), t.validate) {
    let s = H.from([]);
    if (e.address) {
      if (r().version !== i.pubKeyHash)
        throw new TypeError("Invalid version or Network mismatch");
      if (r().hash.length !== 20) throw new TypeError("Invalid address");
      s = r().hash;
    }
    if (e.hash) {
      if (s.length > 0 && !s.equals(e.hash))
        throw new TypeError("Hash mismatch");
      s = e.hash;
    }
    if (e.output) {
      if (e.output.length !== 25 || e.output[0] !== vr.OP_DUP || e.output[1] !== vr.OP_HASH160 || e.output[2] !== 20 || e.output[23] !== vr.OP_EQUALVERIFY || e.output[24] !== vr.OP_CHECKSIG)
        throw new TypeError("Output is invalid");
      const a = e.output.slice(3, 23);
      if (s.length > 0 && !s.equals(a))
        throw new TypeError("Hash mismatch");
      s = a;
    }
    if (e.pubkey) {
      const a = Wo.hash160(e.pubkey);
      if (s.length > 0 && !s.equals(a))
        throw new TypeError("Hash mismatch");
      s = a;
    }
    if (e.input) {
      const a = n();
      if (a.length !== 2) throw new TypeError("Input is invalid");
      if (!vn.isCanonicalScriptSignature(a[0]))
        throw new TypeError("Input has invalid signature");
      if (!(0, ct.isPoint)(a[1]))
        throw new TypeError("Input has invalid pubkey");
      if (e.signature && !e.signature.equals(a[0]))
        throw new TypeError("Signature mismatch");
      if (e.pubkey && !e.pubkey.equals(a[1]))
        throw new TypeError("Pubkey mismatch");
      const l = Wo.hash160(a[1]);
      if (s.length > 0 && !s.equals(l))
        throw new TypeError("Hash mismatch");
    }
  }
  return Object.assign(o, e);
}
oo.p2pkh = ap;
var co = {};
Object.defineProperty(co, "__esModule", { value: !0 });
co.p2sh = void 0;
const Ra = Jt, cp = Ye, Kt = dt(), _e = rt, $t = St, Fa = Hs, Kn = Kt.OPS;
function up(e, t) {
  if (!e.address && !e.hash && !e.output && !e.redeem && !e.input)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, _e.typeforce)(
    {
      network: _e.typeforce.maybe(_e.typeforce.Object),
      address: _e.typeforce.maybe(_e.typeforce.String),
      hash: _e.typeforce.maybe(_e.typeforce.BufferN(20)),
      output: _e.typeforce.maybe(_e.typeforce.BufferN(23)),
      redeem: _e.typeforce.maybe({
        network: _e.typeforce.maybe(_e.typeforce.Object),
        output: _e.typeforce.maybe(_e.typeforce.Buffer),
        input: _e.typeforce.maybe(_e.typeforce.Buffer),
        witness: _e.typeforce.maybe(
          _e.typeforce.arrayOf(_e.typeforce.Buffer)
        )
      }),
      input: _e.typeforce.maybe(_e.typeforce.Buffer),
      witness: _e.typeforce.maybe(
        _e.typeforce.arrayOf(_e.typeforce.Buffer)
      )
    },
    e
  );
  let r = e.network;
  r || (r = e.redeem && e.redeem.network || cp.bitcoin);
  const n = { network: r }, i = $t.value(() => {
    const a = H.from(Fa.decode(e.address)), l = a.readUInt8(0), p = a.slice(1);
    return { version: l, hash: p };
  }), o = $t.value(() => Kt.decompile(e.input)), s = $t.value(() => {
    const a = o(), l = a[a.length - 1];
    return {
      network: r,
      output: l === Kn.OP_FALSE ? H.from([]) : l,
      input: Kt.compile(a.slice(0, -1)),
      witness: e.witness || []
    };
  });
  if ($t.prop(n, "address", () => {
    if (!n.hash) return;
    const a = H.allocUnsafe(21);
    return a.writeUInt8(n.network.scriptHash, 0), n.hash.copy(a, 1), Fa.encode(a);
  }), $t.prop(n, "hash", () => {
    if (e.output) return e.output.slice(2, 22);
    if (e.address) return i().hash;
    if (n.redeem && n.redeem.output) return Ra.hash160(n.redeem.output);
  }), $t.prop(n, "output", () => {
    if (n.hash)
      return Kt.compile([Kn.OP_HASH160, n.hash, Kn.OP_EQUAL]);
  }), $t.prop(n, "redeem", () => {
    if (e.input)
      return s();
  }), $t.prop(n, "input", () => {
    if (!(!e.redeem || !e.redeem.input || !e.redeem.output))
      return Kt.compile(
        [].concat(Kt.decompile(e.redeem.input), e.redeem.output)
      );
  }), $t.prop(n, "witness", () => {
    if (n.redeem && n.redeem.witness) return n.redeem.witness;
    if (n.input) return [];
  }), $t.prop(n, "name", () => {
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
        const d = Ra.hash160(p.output);
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
          const S = Kt.decompile(p.input);
          if (!Kt.isPushOnly(S))
            throw new TypeError("Non push-only scriptSig");
        }
      }
    };
    if (e.input) {
      const p = o();
      if (!p || p.length < 1) throw new TypeError("Input too short");
      if (!H.isBuffer(s().output))
        throw new TypeError("Input is invalid");
      l(s());
    }
    if (e.redeem) {
      if (e.redeem.network && e.redeem.network !== r)
        throw new TypeError("Network mismatch");
      if (e.input) {
        const p = s();
        if (e.redeem.output && !e.redeem.output.equals(p.output))
          throw new TypeError("Redeem.output mismatch");
        if (e.redeem.input && !e.redeem.input.equals(p.input))
          throw new TypeError("Redeem.input mismatch");
      }
      l(e.redeem);
    }
    if (e.witness && e.redeem && e.redeem.witness && !(0, _e.stacksEqual)(e.redeem.witness, e.witness))
      throw new TypeError("Witness and redeem.witness mismatch");
  }
  return Object.assign(n, e);
}
co.p2sh = up;
var uo = {}, pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
pr.bech32m = pr.bech32 = void 0;
const $i = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", gu = {};
for (let e = 0; e < $i.length; e++) {
  const t = $i.charAt(e);
  gu[t] = e;
}
function In(e) {
  const t = e >> 25;
  return (e & 33554431) << 5 ^ -(t >> 0 & 1) & 996825010 ^ -(t >> 1 & 1) & 642813549 ^ -(t >> 2 & 1) & 513874426 ^ -(t >> 3 & 1) & 1027748829 ^ -(t >> 4 & 1) & 705979059;
}
function Ua(e) {
  let t = 1;
  for (let r = 0; r < e.length; ++r) {
    const n = e.charCodeAt(r);
    if (n < 33 || n > 126)
      return "Invalid prefix (" + e + ")";
    t = In(t) ^ n >> 5;
  }
  t = In(t);
  for (let r = 0; r < e.length; ++r) {
    const n = e.charCodeAt(r);
    t = In(t) ^ n & 31;
  }
  return t;
}
function Ms(e, t, r, n) {
  let i = 0, o = 0;
  const s = (1 << r) - 1, a = [];
  for (let l = 0; l < e.length; ++l)
    for (i = i << t | e[l], o += t; o >= r; )
      o -= r, a.push(i >> o & s);
  if (n)
    o > 0 && a.push(i << r - o & s);
  else {
    if (o >= t)
      return "Excess padding";
    if (i << r - o & s)
      return "Non-zero padding";
  }
  return a;
}
function lp(e) {
  return Ms(e, 8, 5, !0);
}
function fp(e) {
  const t = Ms(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
}
function hp(e) {
  const t = Ms(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
  throw new Error(t);
}
function wu(e) {
  let t;
  e === "bech32" ? t = 1 : t = 734539939;
  function r(s, a, l) {
    if (l = l || 90, s.length + 7 + a.length > l)
      throw new TypeError("Exceeds length limit");
    s = s.toLowerCase();
    let p = Ua(s);
    if (typeof p == "string")
      throw new Error(p);
    let f = s + "1";
    for (let d = 0; d < a.length; ++d) {
      const S = a[d];
      if (S >> 5)
        throw new Error("Non 5-bit word");
      p = In(p) ^ S, f += $i.charAt(S);
    }
    for (let d = 0; d < 6; ++d)
      p = In(p);
    p ^= t;
    for (let d = 0; d < 6; ++d) {
      const S = p >> (5 - d) * 5 & 31;
      f += $i.charAt(S);
    }
    return f;
  }
  function n(s, a) {
    if (a = a || 90, s.length < 8)
      return s + " too short";
    if (s.length > a)
      return "Exceeds length limit";
    const l = s.toLowerCase(), p = s.toUpperCase();
    if (s !== l && s !== p)
      return "Mixed-case string " + s;
    s = l;
    const f = s.lastIndexOf("1");
    if (f === -1)
      return "No separator character for " + s;
    if (f === 0)
      return "Missing prefix for " + s;
    const d = s.slice(0, f), S = s.slice(f + 1);
    if (S.length < 6)
      return "Data too short";
    let m = Ua(d);
    if (typeof m == "string")
      return m;
    const B = [];
    for (let O = 0; O < S.length; ++O) {
      const x = S.charAt(O), $ = gu[x];
      if ($ === void 0)
        return "Unknown character " + x;
      m = In(m) ^ $, !(O + 6 >= S.length) && B.push($);
    }
    return m !== t ? "Invalid checksum for " + s : { prefix: d, words: B };
  }
  function i(s, a) {
    const l = n(s, a);
    if (typeof l == "object")
      return l;
  }
  function o(s, a) {
    const l = n(s, a);
    if (typeof l == "object")
      return l;
    throw new Error(l);
  }
  return {
    decodeUnsafe: i,
    decode: o,
    encode: r,
    toWords: lp,
    fromWordsUnsafe: fp,
    fromWords: hp
  };
}
pr.bech32 = wu("bech32");
pr.bech32m = wu("bech32m");
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.p2wpkh = void 0;
const Vo = Jt, dp = Ye, Ni = dt(), $e = rt, Tr = St, bi = pr, La = Ni.OPS, pp = H.alloc(0);
function gp(e, t) {
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
      signature: $e.typeforce.maybe(Ni.isCanonicalScriptSignature),
      witness: $e.typeforce.maybe(
        $e.typeforce.arrayOf($e.typeforce.Buffer)
      )
    },
    e
  );
  const r = Tr.value(() => {
    const o = bi.bech32.decode(e.address), s = o.words.shift(), a = bi.bech32.fromWords(o.words);
    return {
      version: s,
      prefix: o.prefix,
      data: H.from(a)
    };
  }), n = e.network || dp.bitcoin, i = { name: "p2wpkh", network: n };
  if (Tr.prop(i, "address", () => {
    if (!i.hash) return;
    const o = bi.bech32.toWords(i.hash);
    return o.unshift(0), bi.bech32.encode(n.bech32, o);
  }), Tr.prop(i, "hash", () => {
    if (e.output) return e.output.slice(2, 22);
    if (e.address) return r().data;
    if (e.pubkey || i.pubkey) return Vo.hash160(e.pubkey || i.pubkey);
  }), Tr.prop(i, "output", () => {
    if (i.hash)
      return Ni.compile([La.OP_0, i.hash]);
  }), Tr.prop(i, "pubkey", () => {
    if (e.pubkey) return e.pubkey;
    if (e.witness)
      return e.witness[1];
  }), Tr.prop(i, "signature", () => {
    if (e.witness)
      return e.witness[0];
  }), Tr.prop(i, "input", () => {
    if (i.witness)
      return pp;
  }), Tr.prop(i, "witness", () => {
    if (e.pubkey && e.signature)
      return [e.signature, e.pubkey];
  }), t.validate) {
    let o = H.from([]);
    if (e.address) {
      if (n && n.bech32 !== r().prefix)
        throw new TypeError("Invalid prefix or Network mismatch");
      if (r().version !== 0)
        throw new TypeError("Invalid address version");
      if (r().data.length !== 20)
        throw new TypeError("Invalid address data");
      o = r().data;
    }
    if (e.hash) {
      if (o.length > 0 && !o.equals(e.hash))
        throw new TypeError("Hash mismatch");
      o = e.hash;
    }
    if (e.output) {
      if (e.output.length !== 22 || e.output[0] !== La.OP_0 || e.output[1] !== 20)
        throw new TypeError("Output is invalid");
      if (o.length > 0 && !o.equals(e.output.slice(2)))
        throw new TypeError("Hash mismatch");
      o = e.output.slice(2);
    }
    if (e.pubkey) {
      const s = Vo.hash160(e.pubkey);
      if (o.length > 0 && !o.equals(s))
        throw new TypeError("Hash mismatch");
      if (o = s, !(0, $e.isPoint)(e.pubkey) || e.pubkey.length !== 33)
        throw new TypeError("Invalid pubkey for p2wpkh");
    }
    if (e.witness) {
      if (e.witness.length !== 2) throw new TypeError("Witness is invalid");
      if (!Ni.isCanonicalScriptSignature(e.witness[0]))
        throw new TypeError("Witness has invalid signature");
      if (!(0, $e.isPoint)(e.witness[1]) || e.witness[1].length !== 33)
        throw new TypeError("Witness has invalid pubkey");
      if (e.signature && !e.signature.equals(e.witness[0]))
        throw new TypeError("Signature mismatch");
      if (e.pubkey && !e.pubkey.equals(e.witness[1]))
        throw new TypeError("Pubkey mismatch");
      const s = Vo.hash160(e.witness[1]);
      if (o.length > 0 && !o.equals(s))
        throw new TypeError("Hash mismatch");
    }
  }
  return Object.assign(i, e);
}
uo.p2wpkh = gp;
var lo = {};
Object.defineProperty(lo, "__esModule", { value: !0 });
lo.p2wsh = void 0;
const Ha = Jt, wp = Ye, or = dt(), be = rt, nr = St, Si = pr, Ma = or.OPS, Go = H.alloc(0);
function vi(e) {
  return !!(H.isBuffer(e) && e.length === 65 && e[0] === 4 && (0, be.isPoint)(e));
}
function mp(e, t) {
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
  const r = nr.value(() => {
    const s = Si.bech32.decode(e.address), a = s.words.shift(), l = Si.bech32.fromWords(s.words);
    return {
      version: a,
      prefix: s.prefix,
      data: H.from(l)
    };
  }), n = nr.value(() => or.decompile(e.redeem.input));
  let i = e.network;
  i || (i = e.redeem && e.redeem.network || wp.bitcoin);
  const o = { network: i };
  if (nr.prop(o, "address", () => {
    if (!o.hash) return;
    const s = Si.bech32.toWords(o.hash);
    return s.unshift(0), Si.bech32.encode(i.bech32, s);
  }), nr.prop(o, "hash", () => {
    if (e.output) return e.output.slice(2);
    if (e.address) return r().data;
    if (o.redeem && o.redeem.output) return Ha.sha256(o.redeem.output);
  }), nr.prop(o, "output", () => {
    if (o.hash)
      return or.compile([Ma.OP_0, o.hash]);
  }), nr.prop(o, "redeem", () => {
    if (e.witness)
      return {
        output: e.witness[e.witness.length - 1],
        input: Go,
        witness: e.witness.slice(0, -1)
      };
  }), nr.prop(o, "input", () => {
    if (o.witness)
      return Go;
  }), nr.prop(o, "witness", () => {
    if (e.redeem && e.redeem.input && e.redeem.input.length > 0 && e.redeem.output && e.redeem.output.length > 0) {
      const s = or.toStack(n());
      return o.redeem = Object.assign({ witness: s }, e.redeem), o.redeem.input = Go, [].concat(s, e.redeem.output);
    }
    if (e.redeem && e.redeem.output && e.redeem.witness)
      return [].concat(e.redeem.witness, e.redeem.output);
  }), nr.prop(o, "name", () => {
    const s = ["p2wsh"];
    return o.redeem !== void 0 && o.redeem.name !== void 0 && s.push(o.redeem.name), s.join("-");
  }), t.validate) {
    let s = H.from([]);
    if (e.address) {
      if (r().prefix !== i.bech32)
        throw new TypeError("Invalid prefix or Network mismatch");
      if (r().version !== 0)
        throw new TypeError("Invalid address version");
      if (r().data.length !== 32)
        throw new TypeError("Invalid address data");
      s = r().data;
    }
    if (e.hash) {
      if (s.length > 0 && !s.equals(e.hash))
        throw new TypeError("Hash mismatch");
      s = e.hash;
    }
    if (e.output) {
      if (e.output.length !== 34 || e.output[0] !== Ma.OP_0 || e.output[1] !== 32)
        throw new TypeError("Output is invalid");
      const a = e.output.slice(2);
      if (s.length > 0 && !s.equals(a))
        throw new TypeError("Hash mismatch");
      s = a;
    }
    if (e.redeem) {
      if (e.redeem.network && e.redeem.network !== i)
        throw new TypeError("Network mismatch");
      if (e.redeem.input && e.redeem.input.length > 0 && e.redeem.witness && e.redeem.witness.length > 0)
        throw new TypeError("Ambiguous witness source");
      if (e.redeem.output) {
        const a = or.decompile(e.redeem.output);
        if (!a || a.length < 1)
          throw new TypeError("Redeem.output is invalid");
        if (e.redeem.output.byteLength > 3600)
          throw new TypeError(
            "Redeem.output unspendable if larger than 3600 bytes"
          );
        if (or.countNonPushOnlyOPs(a) > 201)
          throw new TypeError(
            "Redeem.output unspendable with more than 201 non-push ops"
          );
        const l = Ha.sha256(e.redeem.output);
        if (s.length > 0 && !s.equals(l))
          throw new TypeError("Hash mismatch");
        s = l;
      }
      if (e.redeem.input && !or.isPushOnly(n()))
        throw new TypeError("Non push-only scriptSig");
      if (e.witness && e.redeem.witness && !(0, be.stacksEqual)(e.witness, e.redeem.witness))
        throw new TypeError("Witness and redeem.witness mismatch");
      if (e.redeem.input && n().some(vi) || e.redeem.output && (or.decompile(e.redeem.output) || []).some(
        vi
      ))
        throw new TypeError(
          "redeem.input or redeem.output contains uncompressed pubkey"
        );
    }
    if (e.witness && e.witness.length > 0) {
      const a = e.witness[e.witness.length - 1];
      if (e.redeem && e.redeem.output && !e.redeem.output.equals(a))
        throw new TypeError("Witness and redeem.output mismatch");
      if (e.witness.some(vi) || (or.decompile(a) || []).some(vi))
        throw new TypeError("Witness contains uncompressed pubkey");
    }
  }
  return Object.assign(o, e);
}
lo.p2wsh = mp;
var Wn = {}, Fr = {};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.getEccLib = Fr.initEccLib = void 0;
const ti = {};
function yp(e) {
  e ? e !== ti.eccLib && (Ep(e), ti.eccLib = e) : ti.eccLib = e;
}
Fr.initEccLib = yp;
function Ap() {
  if (!ti.eccLib)
    throw new Error(
      "No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance"
    );
  return ti.eccLib;
}
Fr.getEccLib = Ap;
const ir = (e) => H.from(e, "hex");
function Ep(e) {
  It(typeof e.isXOnlyPoint == "function"), It(
    e.isXOnlyPoint(
      ir("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")
    )
  ), It(
    e.isXOnlyPoint(
      ir("fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e")
    )
  ), It(
    e.isXOnlyPoint(
      ir("f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9")
    )
  ), It(
    e.isXOnlyPoint(
      ir("0000000000000000000000000000000000000000000000000000000000000001")
    )
  ), It(
    !e.isXOnlyPoint(
      ir("0000000000000000000000000000000000000000000000000000000000000000")
    )
  ), It(
    !e.isXOnlyPoint(
      ir("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")
    )
  ), It(typeof e.xOnlyPointAddTweak == "function"), Pp.forEach((t) => {
    const r = e.xOnlyPointAddTweak(ir(t.pubkey), ir(t.tweak));
    t.result === null ? It(r === null) : (It(r !== null), It(r.parity === t.parity), It(H.from(r.xOnlyPubkey).equals(ir(t.result))));
  });
}
function It(e) {
  if (!e) throw new Error("ecc library invalid");
}
const Pp = [
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
var fo = {}, je = {}, ws = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, t) {
  var r = ro, n = r.Buffer;
  function i(s, a) {
    for (var l in s)
      a[l] = s[l];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = o);
  function o(s, a, l) {
    return n(s, a, l);
  }
  o.prototype = Object.create(n.prototype), i(n, o), o.from = function(s, a, l) {
    if (typeof s == "number")
      throw new TypeError("Argument must not be a number");
    return n(s, a, l);
  }, o.alloc = function(s, a, l) {
    if (typeof s != "number")
      throw new TypeError("Argument must be a number");
    var p = n(s);
    return a !== void 0 ? typeof l == "string" ? p.fill(a, l) : p.fill(a) : p.fill(0), p;
  }, o.allocUnsafe = function(s) {
    if (typeof s != "number")
      throw new TypeError("Argument must be a number");
    return n(s);
  }, o.allocUnsafeSlow = function(s) {
    if (typeof s != "number")
      throw new TypeError("Argument must be a number");
    return r.SlowBuffer(s);
  };
})(ws, ws.exports);
var bp = ws.exports, ms = bp.Buffer, Sp = 9007199254740991;
function Ds(e) {
  if (e < 0 || e > Sp || e % 1 !== 0) throw new RangeError("value out of range");
}
function Yn(e, t, r) {
  if (Ds(e), t || (t = ms.allocUnsafe(mu(e))), !ms.isBuffer(t)) throw new TypeError("buffer must be a Buffer instance");
  return r || (r = 0), e < 253 ? (t.writeUInt8(e, r), Yn.bytes = 1) : e <= 65535 ? (t.writeUInt8(253, r), t.writeUInt16LE(e, r + 1), Yn.bytes = 3) : e <= 4294967295 ? (t.writeUInt8(254, r), t.writeUInt32LE(e, r + 1), Yn.bytes = 5) : (t.writeUInt8(255, r), t.writeUInt32LE(e >>> 0, r + 1), t.writeUInt32LE(e / 4294967296 | 0, r + 5), Yn.bytes = 9), t;
}
function Qn(e, t) {
  if (!ms.isBuffer(e)) throw new TypeError("buffer must be a Buffer instance");
  t || (t = 0);
  var r = e.readUInt8(t);
  if (r < 253)
    return Qn.bytes = 1, r;
  if (r === 253)
    return Qn.bytes = 3, e.readUInt16LE(t + 1);
  if (r === 254)
    return Qn.bytes = 5, e.readUInt32LE(t + 1);
  Qn.bytes = 9;
  var n = e.readUInt32LE(t + 1), i = e.readUInt32LE(t + 5), o = i * 4294967296 + n;
  return Ds(o), o;
}
function mu(e) {
  return Ds(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9;
}
var vp = { encode: Yn, decode: Qn, encodingLength: mu };
Object.defineProperty(je, "__esModule", { value: !0 });
je.BufferReader = je.BufferWriter = je.cloneBuffer = je.reverseBuffer = je.writeUInt64LE = je.readUInt64LE = je.varuint = void 0;
const Xr = rt, { typeforce: yu } = Xr, ii = vp;
je.varuint = ii;
function Au(e, t) {
  if (typeof e != "number")
    throw new Error("cannot write a non-number as a number");
  if (e < 0)
    throw new Error("specified a negative value for writing an unsigned value");
  if (e > t) throw new Error("RangeError: value out of range");
  if (Math.floor(e) !== e)
    throw new Error("value has a fractional component");
}
function Eu(e, t) {
  const r = e.readUInt32LE(t);
  let n = e.readUInt32LE(t + 4);
  return n *= 4294967296, Au(n + r, 9007199254740991), n + r;
}
je.readUInt64LE = Eu;
function Pu(e, t, r) {
  return Au(t, 9007199254740991), e.writeInt32LE(t & -1, r), e.writeUInt32LE(Math.floor(t / 4294967296), r + 4), r + 8;
}
je.writeUInt64LE = Pu;
function Tp(e) {
  if (e.length < 1) return e;
  let t = e.length - 1, r = 0;
  for (let n = 0; n < e.length / 2; n++)
    r = e[n], e[n] = e[t], e[t] = r, t--;
  return e;
}
je.reverseBuffer = Tp;
function _p(e) {
  const t = H.allocUnsafe(e.length);
  return e.copy(t), t;
}
je.cloneBuffer = _p;
class $s {
  static withCapacity(t) {
    return new $s(H.alloc(t));
  }
  constructor(t, r = 0) {
    this.buffer = t, this.offset = r, yu(Xr.tuple(Xr.Buffer, Xr.UInt32), [t, r]);
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
    this.offset = Pu(this.buffer, t, this.offset);
  }
  writeVarInt(t) {
    ii.encode(t, this.buffer, this.offset), this.offset += ii.encode.bytes;
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
je.BufferWriter = $s;
class Ip {
  constructor(t, r = 0) {
    this.buffer = t, this.offset = r, yu(Xr.tuple(Xr.Buffer, Xr.UInt32), [t, r]);
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
    const t = Eu(this.buffer, this.offset);
    return this.offset += 8, t;
  }
  readVarInt() {
    const t = ii.decode(this.buffer, this.offset);
    return this.offset += ii.decode.bytes, t;
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
je.BufferReader = Ip;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.tweakKey = e.tapTweakHash = e.tapleafHash = e.findScriptPath = e.toHashTree = e.rootHashFromPath = e.MAX_TAPTREE_DEPTH = e.LEAF_VERSION_TAPSCRIPT = void 0;
  const t = ro, r = Fr, n = Jt, i = je, o = rt;
  e.LEAF_VERSION_TAPSCRIPT = 192, e.MAX_TAPTREE_DEPTH = 128;
  const s = (O) => "left" in O && "right" in O;
  function a(O, x) {
    if (O.length < 33)
      throw new TypeError(
        `The control-block length is too small. Got ${O.length}, expected min 33.`
      );
    const $ = (O.length - 33) / 32;
    let A = x;
    for (let k = 0; k < $; k++) {
      const C = O.slice(33 + 32 * k, 65 + 32 * k);
      A.compare(C) < 0 ? A = m(A, C) : A = m(C, A);
    }
    return A;
  }
  e.rootHashFromPath = a;
  function l(O) {
    if ((0, o.isTapleaf)(O))
      return { hash: f(O) };
    const x = [l(O[0]), l(O[1])];
    x.sort((k, C) => k.hash.compare(C.hash));
    const [$, A] = x;
    return {
      hash: m($.hash, A.hash),
      left: $,
      right: A
    };
  }
  e.toHashTree = l;
  function p(O, x) {
    if (s(O)) {
      const $ = p(O.left, x);
      if ($ !== void 0) return [...$, O.right.hash];
      const A = p(O.right, x);
      if (A !== void 0) return [...A, O.left.hash];
    } else if (O.hash.equals(x))
      return [];
  }
  e.findScriptPath = p;
  function f(O) {
    const x = O.version || e.LEAF_VERSION_TAPSCRIPT;
    return n.taggedHash(
      "TapLeaf",
      t.Buffer.concat([
        t.Buffer.from([x]),
        B(O.output)
      ])
    );
  }
  e.tapleafHash = f;
  function d(O, x) {
    return n.taggedHash(
      "TapTweak",
      t.Buffer.concat(x ? [O, x] : [O])
    );
  }
  e.tapTweakHash = d;
  function S(O, x) {
    if (!t.Buffer.isBuffer(O) || O.length !== 32 || x && x.length !== 32) return null;
    const $ = d(O, x), A = (0, r.getEccLib)().xOnlyPointAddTweak(O, $);
    return !A || A.xOnlyPubkey === null ? null : {
      parity: A.parity,
      x: t.Buffer.from(A.xOnlyPubkey)
    };
  }
  e.tweakKey = S;
  function m(O, x) {
    return n.taggedHash("TapBranch", t.Buffer.concat([O, x]));
  }
  function B(O) {
    const x = i.varuint.encodingLength(O.length), $ = t.Buffer.allocUnsafe(x);
    return i.varuint.encode(O.length, $), t.Buffer.concat([$, O]);
  }
})(fo);
var Da;
function Op() {
  if (Da) return Wn;
  Da = 1, Object.defineProperty(Wn, "__esModule", { value: !0 }), Wn.p2tr = void 0;
  const e = ro, t = Ye, r = dt(), n = rt, i = Fr, o = fo, s = St, a = pr, l = js(), p = r.OPS, f = 1, d = 80;
  function S(m, B) {
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
    const O = s.value(() => (0, l.fromBech32)(m.address)), x = s.value(() => {
      if (!(!m.witness || !m.witness.length))
        return m.witness.length >= 2 && m.witness[m.witness.length - 1][0] === d ? m.witness.slice(0, -1) : m.witness.slice();
    }), $ = s.value(() => {
      if (m.scriptTree) return (0, o.toHashTree)(m.scriptTree);
      if (m.hash) return { hash: m.hash };
    }), A = m.network || t.bitcoin, k = { name: "p2tr", network: A };
    if (s.prop(k, "address", () => {
      if (!k.pubkey) return;
      const C = a.bech32m.toWords(k.pubkey);
      return C.unshift(f), a.bech32m.encode(A.bech32, C);
    }), s.prop(k, "hash", () => {
      const C = $();
      if (C) return C.hash;
      const M = x();
      if (M && M.length > 1) {
        const F = M[M.length - 1], W = F[0] & n.TAPLEAF_VERSION_MASK, g = M[M.length - 2], h = (0, o.tapleafHash)({
          output: g,
          version: W
        });
        return (0, o.rootHashFromPath)(F, h);
      }
      return null;
    }), s.prop(k, "output", () => {
      if (k.pubkey)
        return r.compile([p.OP_1, k.pubkey]);
    }), s.prop(k, "redeemVersion", () => m.redeemVersion ? m.redeemVersion : m.redeem && m.redeem.redeemVersion !== void 0 && m.redeem.redeemVersion !== null ? m.redeem.redeemVersion : o.LEAF_VERSION_TAPSCRIPT), s.prop(k, "redeem", () => {
      const C = x();
      if (!(!C || C.length < 2))
        return {
          output: C[C.length - 2],
          witness: C.slice(0, -2),
          redeemVersion: C[C.length - 1][0] & n.TAPLEAF_VERSION_MASK
        };
    }), s.prop(k, "pubkey", () => {
      if (m.pubkey) return m.pubkey;
      if (m.output) return m.output.slice(2);
      if (m.address) return O().data;
      if (k.internalPubkey) {
        const C = (0, o.tweakKey)(k.internalPubkey, k.hash);
        if (C) return C.x;
      }
    }), s.prop(k, "internalPubkey", () => {
      if (m.internalPubkey) return m.internalPubkey;
      const C = x();
      if (C && C.length > 1)
        return C[C.length - 1].slice(1, 33);
    }), s.prop(k, "signature", () => {
      if (m.signature) return m.signature;
      const C = x();
      if (!(!C || C.length !== 1))
        return C[0];
    }), s.prop(k, "witness", () => {
      if (m.witness) return m.witness;
      const C = $();
      if (C && m.redeem && m.redeem.output && m.internalPubkey) {
        const M = (0, o.tapleafHash)({
          output: m.redeem.output,
          version: k.redeemVersion
        }), F = (0, o.findScriptPath)(C, M);
        if (!F) return;
        const W = (0, o.tweakKey)(m.internalPubkey, C.hash);
        if (!W) return;
        const g = e.Buffer.concat(
          [
            e.Buffer.from([k.redeemVersion | W.parity]),
            m.internalPubkey
          ].concat(F)
        );
        return [m.redeem.output, g];
      }
      if (m.signature) return [m.signature];
    }), B.validate) {
      let C = e.Buffer.from([]);
      if (m.address) {
        if (A && A.bech32 !== O().prefix)
          throw new TypeError("Invalid prefix or Network mismatch");
        if (O().version !== f)
          throw new TypeError("Invalid address version");
        if (O().data.length !== 32)
          throw new TypeError("Invalid address data");
        C = O().data;
      }
      if (m.pubkey) {
        if (C.length > 0 && !C.equals(m.pubkey))
          throw new TypeError("Pubkey mismatch");
        C = m.pubkey;
      }
      if (m.output) {
        if (m.output.length !== 34 || m.output[0] !== p.OP_1 || m.output[1] !== 32)
          throw new TypeError("Output is invalid");
        if (C.length > 0 && !C.equals(m.output.slice(2)))
          throw new TypeError("Pubkey mismatch");
        C = m.output.slice(2);
      }
      if (m.internalPubkey) {
        const W = (0, o.tweakKey)(m.internalPubkey, k.hash);
        if (C.length > 0 && !C.equals(W.x))
          throw new TypeError("Pubkey mismatch");
        C = W.x;
      }
      if (C && C.length && !(0, i.getEccLib)().isXOnlyPoint(C))
        throw new TypeError("Invalid pubkey for p2tr");
      const M = $();
      if (m.hash && M && !m.hash.equals(M.hash))
        throw new TypeError("Hash mismatch");
      if (m.redeem && m.redeem.output && M) {
        const W = (0, o.tapleafHash)({
          output: m.redeem.output,
          version: k.redeemVersion
        });
        if (!(0, o.findScriptPath)(M, W))
          throw new TypeError("Redeem script not in tree");
      }
      const F = x();
      if (m.redeem && k.redeem) {
        if (m.redeem.redeemVersion && m.redeem.redeemVersion !== k.redeem.redeemVersion)
          throw new TypeError("Redeem.redeemVersion and witness mismatch");
        if (m.redeem.output) {
          if (r.decompile(m.redeem.output).length === 0)
            throw new TypeError("Redeem.output is invalid");
          if (k.redeem.output && !m.redeem.output.equals(k.redeem.output))
            throw new TypeError("Redeem.output and witness mismatch");
        }
        if (m.redeem.witness && k.redeem.witness && !(0, n.stacksEqual)(m.redeem.witness, k.redeem.witness))
          throw new TypeError("Redeem.witness and witness mismatch");
      }
      if (F && F.length)
        if (F.length === 1) {
          if (m.signature && !m.signature.equals(F[0]))
            throw new TypeError("Signature mismatch");
        } else {
          const W = F[F.length - 1];
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
          const E = W[0] & n.TAPLEAF_VERSION_MASK, N = F[F.length - 2], y = (0, o.tapleafHash)({
            output: N,
            version: E
          }), P = (0, o.rootHashFromPath)(W, y), I = (0, o.tweakKey)(h, P);
          if (!I)
            throw new TypeError("Invalid outputKey for p2tr witness");
          if (C.length && !C.equals(I.x))
            throw new TypeError("Pubkey mismatch for p2tr witness");
          if (I.parity !== (W[0] & 1))
            throw new Error("Incorrect parity");
        }
    }
    return Object.assign(k, m);
  }
  return Wn.p2tr = S, Wn;
}
var $a;
function li() {
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
    const o = co;
    Object.defineProperty(e, "p2sh", {
      enumerable: !0,
      get: function() {
        return o.p2sh;
      }
    });
    const s = uo;
    Object.defineProperty(e, "p2wpkh", {
      enumerable: !0,
      get: function() {
        return s.p2wpkh;
      }
    });
    const a = lo;
    Object.defineProperty(e, "p2wsh", {
      enumerable: !0,
      get: function() {
        return a.p2wsh;
      }
    });
    const l = Op();
    Object.defineProperty(e, "p2tr", {
      enumerable: !0,
      get: function() {
        return l.p2tr;
      }
    });
  }(Lo)), Lo;
}
var ja;
function js() {
  if (ja) return at;
  ja = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.toOutputScript = at.fromOutputScript = at.toBech32 = at.toBase58Check = at.fromBech32 = at.fromBase58Check = void 0;
  const e = Ye, t = li(), r = dt(), n = rt, i = pr, o = Hs, s = 40, a = 2, l = 16, p = 2, f = 80, d = "WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.";
  function S(k, C) {
    const M = k.slice(2);
    if (M.length < a || M.length > s)
      throw new TypeError("Invalid program length for segwit address");
    const F = k[0] - f;
    if (F < p || F > l)
      throw new TypeError("Invalid version for segwit address");
    if (k[1] !== M.length)
      throw new TypeError("Invalid script for segwit address");
    return console.warn(d), x(M, F, C.bech32);
  }
  function m(k) {
    const C = H.from(o.decode(k));
    if (C.length < 21) throw new TypeError(k + " is too short");
    if (C.length > 21) throw new TypeError(k + " is too long");
    const M = C.readUInt8(0), F = C.slice(1);
    return { version: M, hash: F };
  }
  at.fromBase58Check = m;
  function B(k) {
    let C, M;
    try {
      C = i.bech32.decode(k);
    } catch {
    }
    if (C) {
      if (M = C.words[0], M !== 0) throw new TypeError(k + " uses wrong encoding");
    } else if (C = i.bech32m.decode(k), M = C.words[0], M === 0) throw new TypeError(k + " uses wrong encoding");
    const F = i.bech32.fromWords(C.words.slice(1));
    return {
      version: M,
      prefix: C.prefix,
      data: H.from(F)
    };
  }
  at.fromBech32 = B;
  function O(k, C) {
    (0, n.typeforce)(
      (0, n.tuple)(n.Hash160bit, n.UInt8),
      arguments
    );
    const M = H.allocUnsafe(21);
    return M.writeUInt8(C, 0), k.copy(M, 1), o.encode(M);
  }
  at.toBase58Check = O;
  function x(k, C, M) {
    const F = i.bech32.toWords(k);
    return F.unshift(C), C === 0 ? i.bech32.encode(M, F) : i.bech32m.encode(M, F);
  }
  at.toBech32 = x;
  function $(k, C) {
    C = C || e.bitcoin;
    try {
      return t.p2pkh({ output: k, network: C }).address;
    } catch {
    }
    try {
      return t.p2sh({ output: k, network: C }).address;
    } catch {
    }
    try {
      return t.p2wpkh({ output: k, network: C }).address;
    } catch {
    }
    try {
      return t.p2wsh({ output: k, network: C }).address;
    } catch {
    }
    try {
      return t.p2tr({ output: k, network: C }).address;
    } catch {
    }
    try {
      return S(k, C);
    } catch {
    }
    throw new Error(r.toASM(k) + " has no matching Address");
  }
  at.fromOutputScript = $;
  function A(k, C) {
    C = C || e.bitcoin;
    let M, F;
    try {
      M = m(k);
    } catch {
    }
    if (M) {
      if (M.version === C.pubKeyHash)
        return t.p2pkh({ hash: M.hash }).output;
      if (M.version === C.scriptHash)
        return t.p2sh({ hash: M.hash }).output;
    } else {
      try {
        F = B(k);
      } catch {
      }
      if (F) {
        if (F.prefix !== C.bech32)
          throw new Error(k + " has an invalid prefix");
        if (F.version === 0) {
          if (F.data.length === 20)
            return t.p2wpkh({ hash: F.data }).output;
          if (F.data.length === 32)
            return t.p2wsh({ hash: F.data }).output;
        } else if (F.version === 1) {
          if (F.data.length === 32)
            return t.p2tr({ pubkey: F.data }).output;
        } else if (F.version >= p && F.version <= l && F.data.length >= a && F.data.length <= s)
          return console.warn(d), r.compile([
            F.version + f,
            F.data
          ]);
      }
    }
    throw new Error(k + " has no matching Script");
  }
  return at.toOutputScript = A, at;
}
var ho = {}, po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.fastMerkleRoot = void 0;
function kp(e, t) {
  if (!Array.isArray(e)) throw TypeError("Expected values Array");
  if (typeof t != "function")
    throw TypeError("Expected digest Function");
  let r = e.length;
  const n = e.concat();
  for (; r > 1; ) {
    let i = 0;
    for (let o = 0; o < r; o += 2, ++i) {
      const s = n[o], a = o + 1 === r ? s : n[o + 1], l = H.concat([s, a]);
      n[i] = t(l);
    }
    r = i;
  }
  return n[0];
}
po.fastMerkleRoot = kp;
var Lr = {};
Object.defineProperty(Lr, "__esModule", { value: !0 });
Lr.Transaction = void 0;
const He = je, ut = Jt, Ka = dt(), xp = dt(), he = rt, { typeforce: jt } = he;
function Wt(e) {
  const t = e.length;
  return He.varuint.encodingLength(t) + t;
}
function Bp(e) {
  const t = e.length;
  return He.varuint.encodingLength(t) + e.reduce((r, n) => r + Wt(n), 0);
}
const _r = H.allocUnsafe(0), Wa = [], Xo = H.from(
  "0000000000000000000000000000000000000000000000000000000000000000",
  "hex"
), Va = H.from(
  "0000000000000000000000000000000000000000000000000000000000000001",
  "hex"
), Cp = H.from("ffffffffffffffff", "hex"), Np = {
  script: _r,
  valueBuffer: Cp
};
function Rp(e) {
  return e.value !== void 0;
}
class se {
  constructor() {
    this.version = 1, this.locktime = 0, this.ins = [], this.outs = [];
  }
  static fromBuffer(t, r) {
    const n = new He.BufferReader(t), i = new se();
    i.version = n.readInt32();
    const o = n.readUInt8(), s = n.readUInt8();
    let a = !1;
    o === se.ADVANCED_TRANSACTION_MARKER && s === se.ADVANCED_TRANSACTION_FLAG ? a = !0 : n.offset -= 2;
    const l = n.readVarInt();
    for (let f = 0; f < l; ++f)
      i.ins.push({
        hash: n.readSlice(32),
        index: n.readUInt32(),
        script: n.readVarSlice(),
        sequence: n.readUInt32(),
        witness: Wa
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
    return se.fromBuffer(H.from(t, "hex"), !1);
  }
  static isCoinbaseHash(t) {
    jt(he.Hash256bit, t);
    for (let r = 0; r < 32; ++r)
      if (t[r] !== 0) return !1;
    return !0;
  }
  isCoinbase() {
    return this.ins.length === 1 && se.isCoinbaseHash(this.ins[0].hash);
  }
  addInput(t, r, n, i) {
    return jt(
      he.tuple(
        he.Hash256bit,
        he.UInt32,
        he.maybe(he.UInt32),
        he.maybe(he.Buffer)
      ),
      arguments
    ), he.Null(n) && (n = se.DEFAULT_SEQUENCE), this.ins.push({
      hash: t,
      index: r,
      script: i || _r,
      sequence: n,
      witness: Wa
    }) - 1;
  }
  addOutput(t, r) {
    return jt(he.tuple(he.Buffer, he.Satoshi), arguments), this.outs.push({
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
    return (r ? 10 : 8) + He.varuint.encodingLength(this.ins.length) + He.varuint.encodingLength(this.outs.length) + this.ins.reduce((n, i) => n + 40 + Wt(i.script), 0) + this.outs.reduce((n, i) => n + 8 + Wt(i.script), 0) + (r ? this.ins.reduce((n, i) => n + Bp(i.witness), 0) : 0);
  }
  clone() {
    const t = new se();
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
      he.tuple(
        he.UInt32,
        he.Buffer,
        /* types.UInt8 */
        he.Number
      ),
      arguments
    ), t >= this.ins.length) return Va;
    const i = Ka.compile(
      Ka.decompile(r).filter((a) => a !== xp.OPS.OP_CODESEPARATOR)
    ), o = this.clone();
    if ((n & 31) === se.SIGHASH_NONE)
      o.outs = [], o.ins.forEach((a, l) => {
        l !== t && (a.sequence = 0);
      });
    else if ((n & 31) === se.SIGHASH_SINGLE) {
      if (t >= this.outs.length) return Va;
      o.outs.length = t + 1;
      for (let a = 0; a < t; a++)
        o.outs[a] = Np;
      o.ins.forEach((a, l) => {
        l !== t && (a.sequence = 0);
      });
    }
    n & se.SIGHASH_ANYONECANPAY ? (o.ins = [o.ins[t]], o.ins[0].script = i) : (o.ins.forEach((a) => {
      a.script = _r;
    }), o.ins[t].script = i);
    const s = H.allocUnsafe(o.byteLength(!1) + 4);
    return s.writeInt32LE(n, s.length - 4), o.__toBuffer(s, 0, !1), ut.hash256(s);
  }
  hashForWitnessV1(t, r, n, i, o, s) {
    if (jt(
      he.tuple(
        he.UInt32,
        jt.arrayOf(he.Buffer),
        jt.arrayOf(he.Satoshi),
        he.UInt32
      ),
      arguments
    ), n.length !== this.ins.length || r.length !== this.ins.length)
      throw new Error("Must supply prevout script and value for all inputs");
    const a = i === se.SIGHASH_DEFAULT ? se.SIGHASH_ALL : i & se.SIGHASH_OUTPUT_MASK, p = (i & se.SIGHASH_INPUT_MASK) === se.SIGHASH_ANYONECANPAY, f = a === se.SIGHASH_NONE, d = a === se.SIGHASH_SINGLE;
    let S = _r, m = _r, B = _r, O = _r, x = _r;
    if (!p) {
      let C = He.BufferWriter.withCapacity(
        36 * this.ins.length
      );
      this.ins.forEach((M) => {
        C.writeSlice(M.hash), C.writeUInt32(M.index);
      }), S = ut.sha256(C.end()), C = He.BufferWriter.withCapacity(
        8 * this.ins.length
      ), n.forEach((M) => C.writeUInt64(M)), m = ut.sha256(C.end()), C = He.BufferWriter.withCapacity(
        r.map(Wt).reduce((M, F) => M + F)
      ), r.forEach(
        (M) => C.writeVarSlice(M)
      ), B = ut.sha256(C.end()), C = He.BufferWriter.withCapacity(
        4 * this.ins.length
      ), this.ins.forEach((M) => C.writeUInt32(M.sequence)), O = ut.sha256(C.end());
    }
    if (f || d) {
      if (d && t < this.outs.length) {
        const C = this.outs[t], M = He.BufferWriter.withCapacity(
          8 + Wt(C.script)
        );
        M.writeUInt64(C.value), M.writeVarSlice(C.script), x = ut.sha256(M.end());
      }
    } else {
      const C = this.outs.map((F) => 8 + Wt(F.script)).reduce((F, W) => F + W), M = He.BufferWriter.withCapacity(C);
      this.outs.forEach((F) => {
        M.writeUInt64(F.value), M.writeVarSlice(F.script);
      }), x = ut.sha256(M.end());
    }
    const $ = (o ? 2 : 0) + (s ? 1 : 0), A = 174 - (p ? 49 : 0) - (f ? 32 : 0) + (s ? 32 : 0) + (o ? 37 : 0), k = He.BufferWriter.withCapacity(A);
    if (k.writeUInt8(i), k.writeInt32(this.version), k.writeUInt32(this.locktime), k.writeSlice(S), k.writeSlice(m), k.writeSlice(B), k.writeSlice(O), f || d || k.writeSlice(x), k.writeUInt8($), p) {
      const C = this.ins[t];
      k.writeSlice(C.hash), k.writeUInt32(C.index), k.writeUInt64(n[t]), k.writeVarSlice(r[t]), k.writeUInt32(C.sequence);
    } else
      k.writeUInt32(t);
    if (s) {
      const C = He.BufferWriter.withCapacity(
        Wt(s)
      );
      C.writeVarSlice(s), k.writeSlice(ut.sha256(C.end()));
    }
    return d && k.writeSlice(x), o && (k.writeSlice(o), k.writeUInt8(0), k.writeUInt32(4294967295)), ut.taggedHash(
      "TapSighash",
      H.concat([H.from([0]), k.end()])
    );
  }
  hashForWitnessV0(t, r, n, i) {
    jt(
      he.tuple(he.UInt32, he.Buffer, he.Satoshi, he.UInt32),
      arguments
    );
    let o = H.from([]), s, a = Xo, l = Xo, p = Xo;
    if (i & se.SIGHASH_ANYONECANPAY || (o = H.allocUnsafe(36 * this.ins.length), s = new He.BufferWriter(o, 0), this.ins.forEach((d) => {
      s.writeSlice(d.hash), s.writeUInt32(d.index);
    }), l = ut.hash256(o)), !(i & se.SIGHASH_ANYONECANPAY) && (i & 31) !== se.SIGHASH_SINGLE && (i & 31) !== se.SIGHASH_NONE && (o = H.allocUnsafe(4 * this.ins.length), s = new He.BufferWriter(o, 0), this.ins.forEach((d) => {
      s.writeUInt32(d.sequence);
    }), p = ut.hash256(o)), (i & 31) !== se.SIGHASH_SINGLE && (i & 31) !== se.SIGHASH_NONE) {
      const d = this.outs.reduce((S, m) => S + 8 + Wt(m.script), 0);
      o = H.allocUnsafe(d), s = new He.BufferWriter(o, 0), this.outs.forEach((S) => {
        s.writeUInt64(S.value), s.writeVarSlice(S.script);
      }), a = ut.hash256(o);
    } else if ((i & 31) === se.SIGHASH_SINGLE && t < this.outs.length) {
      const d = this.outs[t];
      o = H.allocUnsafe(8 + Wt(d.script)), s = new He.BufferWriter(o, 0), s.writeUInt64(d.value), s.writeVarSlice(d.script), a = ut.hash256(o);
    }
    o = H.allocUnsafe(156 + Wt(r)), s = new He.BufferWriter(o, 0);
    const f = this.ins[t];
    return s.writeInt32(this.version), s.writeSlice(l), s.writeSlice(p), s.writeSlice(f.hash), s.writeUInt32(f.index), s.writeVarSlice(r), s.writeUInt64(n), s.writeUInt32(f.sequence), s.writeSlice(a), s.writeUInt32(this.locktime), s.writeUInt32(i), ut.hash256(o);
  }
  getHash(t) {
    return t && this.isCoinbase() ? H.alloc(32, 0) : ut.hash256(this.__toBuffer(void 0, void 0, t));
  }
  getId() {
    return (0, He.reverseBuffer)(this.getHash(!1)).toString(
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
    jt(he.tuple(he.Number, he.Buffer), arguments), this.ins[t].script = r;
  }
  setWitness(t, r) {
    jt(he.tuple(he.Number, [he.Buffer]), arguments), this.ins[t].witness = r;
  }
  __toBuffer(t, r, n = !1) {
    t || (t = H.allocUnsafe(this.byteLength(n)));
    const i = new He.BufferWriter(
      t,
      r || 0
    );
    i.writeInt32(this.version);
    const o = n && this.hasWitnesses();
    return o && (i.writeUInt8(se.ADVANCED_TRANSACTION_MARKER), i.writeUInt8(se.ADVANCED_TRANSACTION_FLAG)), i.writeVarInt(this.ins.length), this.ins.forEach((s) => {
      i.writeSlice(s.hash), i.writeUInt32(s.index), i.writeVarSlice(s.script), i.writeUInt32(s.sequence);
    }), i.writeVarInt(this.outs.length), this.outs.forEach((s) => {
      Rp(s) ? i.writeUInt64(s.value) : i.writeSlice(s.valueBuffer), i.writeVarSlice(s.script);
    }), o && this.ins.forEach((s) => {
      i.writeVector(s.witness);
    }), i.writeUInt32(this.locktime), r !== void 0 ? t.slice(r, i.offset) : t;
  }
}
Lr.Transaction = se;
se.DEFAULT_SEQUENCE = 4294967295;
se.SIGHASH_DEFAULT = 0;
se.SIGHASH_ALL = 1;
se.SIGHASH_NONE = 2;
se.SIGHASH_SINGLE = 3;
se.SIGHASH_ANYONECANPAY = 128;
se.SIGHASH_OUTPUT_MASK = 3;
se.SIGHASH_INPUT_MASK = 128;
se.ADVANCED_TRANSACTION_MARKER = 0;
se.ADVANCED_TRANSACTION_FLAG = 1;
Object.defineProperty(ho, "__esModule", { value: !0 });
ho.Block = void 0;
const jr = je, qo = Jt, Fp = po, Up = Lr, bu = rt, { typeforce: Lp } = bu, Yo = new TypeError(
  "Cannot compute merkle root for zero transactions"
), Ga = new TypeError(
  "Cannot compute witness commit for non-segwit block"
);
class Kr {
  constructor() {
    this.version = 1, this.prevHash = void 0, this.merkleRoot = void 0, this.timestamp = 0, this.witnessCommit = void 0, this.bits = 0, this.nonce = 0, this.transactions = void 0;
  }
  static fromBuffer(t) {
    if (t.length < 80) throw new Error("Buffer too small (< 80 bytes)");
    const r = new jr.BufferReader(t), n = new Kr();
    if (n.version = r.readInt32(), n.prevHash = r.readSlice(32), n.merkleRoot = r.readSlice(32), n.timestamp = r.readUInt32(), n.bits = r.readUInt32(), n.nonce = r.readUInt32(), t.length === 80) return n;
    const i = () => {
      const a = Up.Transaction.fromBuffer(
        r.buffer.slice(r.offset),
        !0
      );
      return r.offset += a.byteLength(), a;
    }, o = r.readVarInt();
    n.transactions = [];
    for (let a = 0; a < o; ++a) {
      const l = i();
      n.transactions.push(l);
    }
    const s = n.getWitnessCommit();
    return s && (n.witnessCommit = s), n;
  }
  static fromHex(t) {
    return Kr.fromBuffer(H.from(t, "hex"));
  }
  static calculateTarget(t) {
    const r = ((t & 4278190080) >> 24) - 3, n = t & 8388607, i = H.alloc(32, 0);
    return i.writeUIntBE(n, 29 - r, 3), i;
  }
  static calculateMerkleRoot(t, r) {
    if (Lp([{ getHash: bu.Function }], t), t.length === 0) throw Yo;
    if (r && !Xa(t))
      throw Ga;
    const n = t.map(
      (o) => o.getHash(r)
    ), i = (0, Fp.fastMerkleRoot)(n, qo.hash256);
    return r ? qo.hash256(
      H.concat([i, t[0].ins[0].witness[0]])
    ) : i;
  }
  getWitnessCommit() {
    if (!Xa(this.transactions)) return null;
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
    return Hp(this.transactions);
  }
  weight() {
    const t = this.byteLength(!1, !1), r = this.byteLength(!1, !0);
    return t * 3 + r;
  }
  byteLength(t, r = !0) {
    return t || !this.transactions ? 80 : 80 + jr.varuint.encodingLength(this.transactions.length) + this.transactions.reduce((n, i) => n + i.byteLength(r), 0);
  }
  getHash() {
    return qo.hash256(this.toBuffer(!0));
  }
  getId() {
    return (0, jr.reverseBuffer)(this.getHash()).toString("hex");
  }
  getUTCDate() {
    const t = /* @__PURE__ */ new Date(0);
    return t.setUTCSeconds(this.timestamp), t;
  }
  // TODO: buffer, offset compatibility
  toBuffer(t) {
    const r = H.allocUnsafe(this.byteLength(t)), n = new jr.BufferWriter(r);
    return n.writeInt32(this.version), n.writeSlice(this.prevHash), n.writeSlice(this.merkleRoot), n.writeUInt32(this.timestamp), n.writeUInt32(this.bits), n.writeUInt32(this.nonce), t || !this.transactions || (jr.varuint.encode(
      this.transactions.length,
      r,
      n.offset
    ), n.offset += jr.varuint.encode.bytes, this.transactions.forEach((i) => {
      const o = i.byteLength();
      i.toBuffer(r, n.offset), n.offset += o;
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
    const t = (0, jr.reverseBuffer)(this.getHash()), r = Kr.calculateTarget(this.bits);
    return t.compare(r) <= 0;
  }
  __checkMerkleRoot() {
    if (!this.transactions) throw Yo;
    const t = Kr.calculateMerkleRoot(this.transactions);
    return this.merkleRoot.compare(t) === 0;
  }
  __checkWitnessCommit() {
    if (!this.transactions) throw Yo;
    if (!this.hasWitnessCommit()) throw Ga;
    const t = Kr.calculateMerkleRoot(
      this.transactions,
      !0
    );
    return this.witnessCommit.compare(t) === 0;
  }
}
ho.Block = Kr;
function Xa(e) {
  return e instanceof Array && e[0] && e[0].ins && e[0].ins instanceof Array && e[0].ins[0] && e[0].ins[0].witness && e[0].ins[0].witness instanceof Array && e[0].ins[0].witness.length > 0;
}
function Hp(e) {
  return e instanceof Array && e.some(
    (t) => typeof t == "object" && t.ins instanceof Array && t.ins.some(
      (r) => typeof r == "object" && r.witness instanceof Array && r.witness.length > 0
    )
  );
}
var go = {}, Ks = {}, Ws = {}, Vs = {}, fi = {}, Yr = {}, Qe = {};
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
})(Qe);
var Qr = {};
Object.defineProperty(Qr, "__esModule", { value: !0 });
const Su = Qe, Mp = (e) => [...Array(e).keys()];
function Dp(e) {
  if (e.key[0] !== Su.GlobalTypes.GLOBAL_XPUB)
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
  for (const n of Mp(e.value.length / 4 - 1)) {
    const i = e.value.readUInt32LE(n * 4 + 4), o = !!(i & 2147483648), s = i & 2147483647;
    r.path += "/" + s.toString(10) + (o ? "'" : "");
  }
  return r;
}
Qr.decode = Dp;
function $p(e) {
  const t = H.from([Su.GlobalTypes.GLOBAL_XPUB]), r = H.concat([t, e.extendedPubkey]), n = e.path.split("/"), i = H.allocUnsafe(n.length * 4);
  e.masterFingerprint.copy(i, 0);
  let o = 4;
  return n.slice(1).forEach((s) => {
    const a = s.slice(-1) === "'";
    let l = 2147483647 & parseInt(a ? s.slice(0, -1) : s, 10);
    a && (l += 2147483648), i.writeUInt32LE(l, o), o += 4;
  }), {
    key: r,
    value: i
  };
}
Qr.encode = $p;
Qr.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }";
function jp(e) {
  const t = e.extendedPubkey, r = e.masterFingerprint, n = e.path;
  return H.isBuffer(t) && t.length === 78 && [2, 3].indexOf(t[45]) > -1 && H.isBuffer(r) && r.length === 4 && typeof n == "string" && !!n.match(/^m(\/\d+'?)*$/);
}
Qr.check = jp;
function Kp(e, t, r) {
  const n = t.extendedPubkey.toString("hex");
  return r.has(n) ? !1 : (r.add(n), e.filter((i) => i.extendedPubkey.equals(t.extendedPubkey)).length === 0);
}
Qr.canAddToArray = Kp;
var Gs = {};
Object.defineProperty(Gs, "__esModule", { value: !0 });
const Wp = Qe;
function Vp(e) {
  return {
    key: H.from([Wp.GlobalTypes.UNSIGNED_TX]),
    value: e.toBuffer()
  };
}
Gs.encode = Vp;
var zr = {};
Object.defineProperty(zr, "__esModule", { value: !0 });
const vu = Qe;
function Gp(e) {
  if (e.key[0] !== vu.InputTypes.FINAL_SCRIPTSIG)
    throw new Error(
      "Decode Error: could not decode finalScriptSig with key 0x" + e.key.toString("hex")
    );
  return e.value;
}
zr.decode = Gp;
function Xp(e) {
  return {
    key: H.from([vu.InputTypes.FINAL_SCRIPTSIG]),
    value: e
  };
}
zr.encode = Xp;
zr.expected = "Buffer";
function qp(e) {
  return H.isBuffer(e);
}
zr.check = qp;
function Yp(e, t) {
  return !!e && !!t && e.finalScriptSig === void 0;
}
zr.canAdd = Yp;
var Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
const Tu = Qe;
function Qp(e) {
  if (e.key[0] !== Tu.InputTypes.FINAL_SCRIPTWITNESS)
    throw new Error(
      "Decode Error: could not decode finalScriptWitness with key 0x" + e.key.toString("hex")
    );
  return e.value;
}
Jr.decode = Qp;
function zp(e) {
  return {
    key: H.from([Tu.InputTypes.FINAL_SCRIPTWITNESS]),
    value: e
  };
}
Jr.encode = zp;
Jr.expected = "Buffer";
function Jp(e) {
  return H.isBuffer(e);
}
Jr.check = Jp;
function Zp(e, t) {
  return !!e && !!t && e.finalScriptWitness === void 0;
}
Jr.canAdd = Zp;
var Zr = {};
Object.defineProperty(Zr, "__esModule", { value: !0 });
const _u = Qe;
function e1(e) {
  if (e.key[0] !== _u.InputTypes.NON_WITNESS_UTXO)
    throw new Error(
      "Decode Error: could not decode nonWitnessUtxo with key 0x" + e.key.toString("hex")
    );
  return e.value;
}
Zr.decode = e1;
function t1(e) {
  return {
    key: H.from([_u.InputTypes.NON_WITNESS_UTXO]),
    value: e
  };
}
Zr.encode = t1;
Zr.expected = "Buffer";
function r1(e) {
  return H.isBuffer(e);
}
Zr.check = r1;
function n1(e, t) {
  return !!e && !!t && e.nonWitnessUtxo === void 0;
}
Zr.canAdd = n1;
var en = {};
Object.defineProperty(en, "__esModule", { value: !0 });
const Iu = Qe;
function i1(e) {
  if (e.key[0] !== Iu.InputTypes.PARTIAL_SIG)
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
en.decode = i1;
function o1(e) {
  const t = H.from([Iu.InputTypes.PARTIAL_SIG]);
  return {
    key: H.concat([t, e.pubkey]),
    value: e.signature
  };
}
en.encode = o1;
en.expected = "{ pubkey: Buffer; signature: Buffer; }";
function s1(e) {
  return H.isBuffer(e.pubkey) && H.isBuffer(e.signature) && [33, 65].includes(e.pubkey.length) && [2, 3, 4].includes(e.pubkey[0]) && a1(e.signature);
}
en.check = s1;
function a1(e) {
  if (!H.isBuffer(e) || e.length < 9 || e[0] !== 48 || e.length !== e[1] + 3 || e[2] !== 2) return !1;
  const t = e[3];
  if (t > 33 || t < 1 || e[3 + t + 1] !== 2) return !1;
  const r = e[3 + t + 2];
  return !(r > 33 || r < 1 || e.length !== 3 + t + 2 + r + 2);
}
function c1(e, t, r) {
  const n = t.pubkey.toString("hex");
  return r.has(n) ? !1 : (r.add(n), e.filter((i) => i.pubkey.equals(t.pubkey)).length === 0);
}
en.canAddToArray = c1;
var tn = {};
Object.defineProperty(tn, "__esModule", { value: !0 });
const Ou = Qe;
function u1(e) {
  if (e.key[0] !== Ou.InputTypes.POR_COMMITMENT)
    throw new Error(
      "Decode Error: could not decode porCommitment with key 0x" + e.key.toString("hex")
    );
  return e.value.toString("utf8");
}
tn.decode = u1;
function l1(e) {
  return {
    key: H.from([Ou.InputTypes.POR_COMMITMENT]),
    value: H.from(e, "utf8")
  };
}
tn.encode = l1;
tn.expected = "string";
function f1(e) {
  return typeof e == "string";
}
tn.check = f1;
function h1(e, t) {
  return !!e && !!t && e.porCommitment === void 0;
}
tn.canAdd = h1;
var rn = {};
Object.defineProperty(rn, "__esModule", { value: !0 });
const ku = Qe;
function d1(e) {
  if (e.key[0] !== ku.InputTypes.SIGHASH_TYPE)
    throw new Error(
      "Decode Error: could not decode sighashType with key 0x" + e.key.toString("hex")
    );
  return e.value.readUInt32LE(0);
}
rn.decode = d1;
function p1(e) {
  const t = H.from([ku.InputTypes.SIGHASH_TYPE]), r = H.allocUnsafe(4);
  return r.writeUInt32LE(e, 0), {
    key: t,
    value: r
  };
}
rn.encode = p1;
rn.expected = "number";
function g1(e) {
  return typeof e == "number";
}
rn.check = g1;
function w1(e, t) {
  return !!e && !!t && e.sighashType === void 0;
}
rn.canAdd = w1;
var nn = {};
Object.defineProperty(nn, "__esModule", { value: !0 });
const xu = Qe;
function m1(e) {
  if (e.key[0] !== xu.InputTypes.TAP_KEY_SIG || e.key.length !== 1)
    throw new Error(
      "Decode Error: could not decode tapKeySig with key 0x" + e.key.toString("hex")
    );
  if (!Bu(e.value))
    throw new Error(
      "Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature"
    );
  return e.value;
}
nn.decode = m1;
function y1(e) {
  return { key: H.from([xu.InputTypes.TAP_KEY_SIG]), value: e };
}
nn.encode = y1;
nn.expected = "Buffer";
function Bu(e) {
  return H.isBuffer(e) && (e.length === 64 || e.length === 65);
}
nn.check = Bu;
function A1(e, t) {
  return !!e && !!t && e.tapKeySig === void 0;
}
nn.canAdd = A1;
var on = {};
Object.defineProperty(on, "__esModule", { value: !0 });
const Cu = Qe;
function E1(e) {
  if (e.key[0] !== Cu.InputTypes.TAP_LEAF_SCRIPT)
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
on.decode = E1;
function P1(e) {
  const t = H.from([Cu.InputTypes.TAP_LEAF_SCRIPT]), r = H.from([e.leafVersion]);
  return {
    key: H.concat([t, e.controlBlock]),
    value: H.concat([e.script, r])
  };
}
on.encode = P1;
on.expected = "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }";
function b1(e) {
  return H.isBuffer(e.controlBlock) && (e.controlBlock.length - 1) % 32 === 0 && (e.controlBlock[0] & 254) === e.leafVersion && H.isBuffer(e.script);
}
on.check = b1;
function S1(e, t, r) {
  const n = t.controlBlock.toString("hex");
  return r.has(n) ? !1 : (r.add(n), e.filter((i) => i.controlBlock.equals(t.controlBlock)).length === 0);
}
on.canAddToArray = S1;
var sn = {};
Object.defineProperty(sn, "__esModule", { value: !0 });
const Nu = Qe;
function v1(e) {
  if (e.key[0] !== Nu.InputTypes.TAP_MERKLE_ROOT || e.key.length !== 1)
    throw new Error(
      "Decode Error: could not decode tapMerkleRoot with key 0x" + e.key.toString("hex")
    );
  if (!Ru(e.value))
    throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
  return e.value;
}
sn.decode = v1;
function T1(e) {
  return { key: H.from([Nu.InputTypes.TAP_MERKLE_ROOT]), value: e };
}
sn.encode = T1;
sn.expected = "Buffer";
function Ru(e) {
  return H.isBuffer(e) && e.length === 32;
}
sn.check = Ru;
function _1(e, t) {
  return !!e && !!t && e.tapMerkleRoot === void 0;
}
sn.canAdd = _1;
var an = {};
Object.defineProperty(an, "__esModule", { value: !0 });
const Fu = Qe;
function I1(e) {
  if (e.key[0] !== Fu.InputTypes.TAP_SCRIPT_SIG)
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
an.decode = I1;
function O1(e) {
  const t = H.from([Fu.InputTypes.TAP_SCRIPT_SIG]);
  return {
    key: H.concat([t, e.pubkey, e.leafHash]),
    value: e.signature
  };
}
an.encode = O1;
an.expected = "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }";
function k1(e) {
  return H.isBuffer(e.pubkey) && H.isBuffer(e.leafHash) && H.isBuffer(e.signature) && e.pubkey.length === 32 && e.leafHash.length === 32 && (e.signature.length === 64 || e.signature.length === 65);
}
an.check = k1;
function x1(e, t, r) {
  const n = t.pubkey.toString("hex") + t.leafHash.toString("hex");
  return r.has(n) ? !1 : (r.add(n), e.filter(
    (i) => i.pubkey.equals(t.pubkey) && i.leafHash.equals(t.leafHash)
  ).length === 0);
}
an.canAddToArray = x1;
var cn = {}, Zt = {}, Ht = {};
Object.defineProperty(Ht, "__esModule", { value: !0 });
const B1 = 9007199254740991;
function Xs(e) {
  if (e < 0 || e > B1 || e % 1 !== 0)
    throw new RangeError("value out of range");
}
function zn(e, t, r) {
  if (Xs(e), t || (t = H.allocUnsafe(Uu(e))), !H.isBuffer(t))
    throw new TypeError("buffer must be a Buffer instance");
  return r || (r = 0), e < 253 ? (t.writeUInt8(e, r), Object.assign(zn, { bytes: 1 })) : e <= 65535 ? (t.writeUInt8(253, r), t.writeUInt16LE(e, r + 1), Object.assign(zn, { bytes: 3 })) : e <= 4294967295 ? (t.writeUInt8(254, r), t.writeUInt32LE(e, r + 1), Object.assign(zn, { bytes: 5 })) : (t.writeUInt8(255, r), t.writeUInt32LE(e >>> 0, r + 1), t.writeUInt32LE(e / 4294967296 | 0, r + 5), Object.assign(zn, { bytes: 9 })), t;
}
Ht.encode = zn;
function Jn(e, t) {
  if (!H.isBuffer(e))
    throw new TypeError("buffer must be a Buffer instance");
  t || (t = 0);
  const r = e.readUInt8(t);
  if (r < 253)
    return Object.assign(Jn, { bytes: 1 }), r;
  if (r === 253)
    return Object.assign(Jn, { bytes: 3 }), e.readUInt16LE(t + 1);
  if (r === 254)
    return Object.assign(Jn, { bytes: 5 }), e.readUInt32LE(t + 1);
  {
    Object.assign(Jn, { bytes: 9 });
    const n = e.readUInt32LE(t + 1), o = e.readUInt32LE(t + 5) * 4294967296 + n;
    return Xs(o), o;
  }
}
Ht.decode = Jn;
function Uu(e) {
  return Xs(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9;
}
Ht.encodingLength = Uu;
Object.defineProperty(Zt, "__esModule", { value: !0 });
const Ti = Ht;
Zt.range = (e) => [...Array(e).keys()];
function C1(e) {
  if (e.length < 1) return e;
  let t = e.length - 1, r = 0;
  for (let n = 0; n < e.length / 2; n++)
    r = e[n], e[n] = e[t], e[t] = r, t--;
  return e;
}
Zt.reverseBuffer = C1;
function N1(e) {
  const t = e.map(Lu);
  return t.push(H.from([0])), H.concat(t);
}
Zt.keyValsToBuffer = N1;
function Lu(e) {
  const t = e.key.length, r = e.value.length, n = Ti.encodingLength(t), i = Ti.encodingLength(r), o = H.allocUnsafe(
    n + t + i + r
  );
  return Ti.encode(t, o, 0), e.key.copy(o, n), Ti.encode(r, o, n + t), e.value.copy(o, n + t + i), o;
}
Zt.keyValToBuffer = Lu;
function Hu(e, t) {
  if (typeof e != "number")
    throw new Error("cannot write a non-number as a number");
  if (e < 0)
    throw new Error("specified a negative value for writing an unsigned value");
  if (e > t) throw new Error("RangeError: value out of range");
  if (Math.floor(e) !== e)
    throw new Error("value has a fractional component");
}
function R1(e, t) {
  const r = e.readUInt32LE(t);
  let n = e.readUInt32LE(t + 4);
  return n *= 4294967296, Hu(n + r, 9007199254740991), n + r;
}
Zt.readUInt64LE = R1;
function F1(e, t, r) {
  return Hu(t, 9007199254740991), e.writeInt32LE(t & -1, r), e.writeUInt32LE(Math.floor(t / 4294967296), r + 4), r + 8;
}
Zt.writeUInt64LE = F1;
Object.defineProperty(cn, "__esModule", { value: !0 });
const Mu = Qe, Du = Zt, ji = Ht;
function U1(e) {
  if (e.key[0] !== Mu.InputTypes.WITNESS_UTXO)
    throw new Error(
      "Decode Error: could not decode witnessUtxo with key 0x" + e.key.toString("hex")
    );
  const t = Du.readUInt64LE(e.value, 0);
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
cn.decode = U1;
function L1(e) {
  const { script: t, value: r } = e, n = ji.encodingLength(t.length), i = H.allocUnsafe(8 + n + t.length);
  return Du.writeUInt64LE(i, r, 0), ji.encode(t.length, i, 8), t.copy(i, 8 + n), {
    key: H.from([Mu.InputTypes.WITNESS_UTXO]),
    value: i
  };
}
cn.encode = L1;
cn.expected = "{ script: Buffer; value: number; }";
function H1(e) {
  return H.isBuffer(e.script) && typeof e.value == "number";
}
cn.check = H1;
function M1(e, t) {
  return !!e && !!t && e.witnessUtxo === void 0;
}
cn.canAdd = M1;
var un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
const $u = Qe, ys = Ht;
function D1(e) {
  if (e.key[0] !== $u.OutputTypes.TAP_TREE || e.key.length !== 1)
    throw new Error(
      "Decode Error: could not decode tapTree with key 0x" + e.key.toString("hex")
    );
  let t = 0;
  const r = [];
  for (; t < e.value.length; ) {
    const n = e.value[t++], i = e.value[t++], o = ys.decode(e.value, t);
    t += ys.encodingLength(o), r.push({
      depth: n,
      leafVersion: i,
      script: e.value.slice(t, t + o)
    }), t += o;
  }
  return { leaves: r };
}
un.decode = D1;
function $1(e) {
  const t = H.from([$u.OutputTypes.TAP_TREE]), r = [].concat(
    ...e.leaves.map((n) => [
      H.of(n.depth, n.leafVersion),
      ys.encode(n.script.length),
      n.script
    ])
  );
  return {
    key: t,
    value: H.concat(r)
  };
}
un.encode = $1;
un.expected = "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }";
function j1(e) {
  return Array.isArray(e.leaves) && e.leaves.every(
    (t) => t.depth >= 0 && t.depth <= 128 && (t.leafVersion & 254) === t.leafVersion && H.isBuffer(t.script)
  );
}
un.check = j1;
function K1(e, t) {
  return !!e && !!t && e.tapTree === void 0;
}
un.canAdd = K1;
var wo = {};
Object.defineProperty(wo, "__esModule", { value: !0 });
const W1 = (e) => [...Array(e).keys()], V1 = (e) => e.length === 33 && [2, 3].includes(e[0]) || e.length === 65 && e[0] === 4;
function G1(e, t = V1) {
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
    for (const f of W1(a.value.length / 4 - 1)) {
      const d = a.value.readUInt32LE(f * 4 + 4), S = !!(d & 2147483648), m = d & 2147483647;
      p.path += "/" + m.toString(10) + (S ? "'" : "");
    }
    return p;
  }
  function n(a) {
    const l = H.from([e]), p = H.concat([l, a.pubkey]), f = a.path.split("/"), d = H.allocUnsafe(f.length * 4);
    a.masterFingerprint.copy(d, 0);
    let S = 4;
    return f.slice(1).forEach((m) => {
      const B = m.slice(-1) === "'";
      let O = 2147483647 & parseInt(B ? m.slice(0, -1) : m, 10);
      B && (O += 2147483648), d.writeUInt32LE(O, S), S += 4;
    }), {
      key: p,
      value: d
    };
  }
  const i = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
  function o(a) {
    return H.isBuffer(a.pubkey) && H.isBuffer(a.masterFingerprint) && typeof a.path == "string" && t(a.pubkey) && a.masterFingerprint.length === 4;
  }
  function s(a, l, p) {
    const f = l.pubkey.toString("hex");
    return p.has(f) ? !1 : (p.add(f), a.filter((d) => d.pubkey.equals(l.pubkey)).length === 0);
  }
  return {
    decode: r,
    encode: n,
    check: o,
    expected: i,
    canAddToArray: s
  };
}
wo.makeConverter = G1;
var qs = {};
Object.defineProperty(qs, "__esModule", { value: !0 });
function X1(e) {
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
qs.makeChecker = X1;
var Ys = {};
Object.defineProperty(Ys, "__esModule", { value: !0 });
function q1(e) {
  function t(s) {
    if (s.key[0] !== e)
      throw new Error(
        "Decode Error: could not decode redeemScript with key 0x" + s.key.toString("hex")
      );
    return s.value;
  }
  function r(s) {
    return {
      key: H.from([e]),
      value: s
    };
  }
  const n = "Buffer";
  function i(s) {
    return H.isBuffer(s);
  }
  function o(s, a) {
    return !!s && !!a && s.redeemScript === void 0;
  }
  return {
    decode: t,
    encode: r,
    check: i,
    expected: n,
    canAdd: o
  };
}
Ys.makeConverter = q1;
var Qs = {};
Object.defineProperty(Qs, "__esModule", { value: !0 });
const _i = Ht, Y1 = wo, Q1 = (e) => e.length === 32;
function z1(e) {
  const t = Y1.makeConverter(e, Q1);
  function r(s) {
    const a = _i.decode(s.value), l = _i.encodingLength(a), p = t.decode({
      key: s.key,
      value: s.value.slice(l + a * 32)
    }), f = new Array(a);
    for (let d = 0, S = l; d < a; d++, S += 32)
      f[d] = s.value.slice(S, S + 32);
    return Object.assign({}, p, { leafHashes: f });
  }
  function n(s) {
    const a = t.encode(s), l = _i.encodingLength(s.leafHashes.length), p = H.allocUnsafe(l);
    _i.encode(s.leafHashes.length, p);
    const f = H.concat([p, ...s.leafHashes, a.value]);
    return Object.assign({}, a, { value: f });
  }
  const i = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
  function o(s) {
    return Array.isArray(s.leafHashes) && s.leafHashes.every(
      (a) => H.isBuffer(a) && a.length === 32
    ) && t.check(s);
  }
  return {
    decode: r,
    encode: n,
    check: o,
    expected: i,
    canAddToArray: t.canAddToArray
  };
}
Qs.makeConverter = z1;
var zs = {};
Object.defineProperty(zs, "__esModule", { value: !0 });
function J1(e) {
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
  function r(s) {
    return { key: H.from([e]), value: s };
  }
  const n = "Buffer";
  function i(s) {
    return H.isBuffer(s) && s.length === 32;
  }
  function o(s, a) {
    return !!s && !!a && s.tapInternalKey === void 0;
  }
  return {
    decode: t,
    encode: r,
    check: i,
    expected: n,
    canAdd: o
  };
}
zs.makeConverter = J1;
var Js = {};
Object.defineProperty(Js, "__esModule", { value: !0 });
function Z1(e) {
  function t(s) {
    if (s.key[0] !== e)
      throw new Error(
        "Decode Error: could not decode witnessScript with key 0x" + s.key.toString("hex")
      );
    return s.value;
  }
  function r(s) {
    return {
      key: H.from([e]),
      value: s
    };
  }
  const n = "Buffer";
  function i(s) {
    return H.isBuffer(s);
  }
  function o(s, a) {
    return !!s && !!a && s.witnessScript === void 0;
  }
  return {
    decode: t,
    encode: r,
    check: i,
    expected: n,
    canAdd: o
  };
}
Js.makeConverter = Z1;
Object.defineProperty(Yr, "__esModule", { value: !0 });
const bt = Qe, e2 = Qr, t2 = Gs, r2 = zr, n2 = Jr, i2 = Zr, o2 = en, s2 = tn, a2 = rn, c2 = nn, u2 = on, l2 = sn, f2 = an, h2 = cn, d2 = un, ju = wo, Zs = qs, Ku = Ys, Wu = Qs, Vu = zs, Gu = Js, p2 = {
  unsignedTx: t2,
  globalXpub: e2,
  // pass an Array of key bytes that require pubkey beside the key
  checkPubkey: Zs.makeChecker([])
};
Yr.globals = p2;
const g2 = {
  nonWitnessUtxo: i2,
  partialSig: o2,
  sighashType: a2,
  finalScriptSig: r2,
  finalScriptWitness: n2,
  porCommitment: s2,
  witnessUtxo: h2,
  bip32Derivation: ju.makeConverter(
    bt.InputTypes.BIP32_DERIVATION
  ),
  redeemScript: Ku.makeConverter(
    bt.InputTypes.REDEEM_SCRIPT
  ),
  witnessScript: Gu.makeConverter(
    bt.InputTypes.WITNESS_SCRIPT
  ),
  checkPubkey: Zs.makeChecker([
    bt.InputTypes.PARTIAL_SIG,
    bt.InputTypes.BIP32_DERIVATION
  ]),
  tapKeySig: c2,
  tapScriptSig: f2,
  tapLeafScript: u2,
  tapBip32Derivation: Wu.makeConverter(
    bt.InputTypes.TAP_BIP32_DERIVATION
  ),
  tapInternalKey: Vu.makeConverter(
    bt.InputTypes.TAP_INTERNAL_KEY
  ),
  tapMerkleRoot: l2
};
Yr.inputs = g2;
const w2 = {
  bip32Derivation: ju.makeConverter(
    bt.OutputTypes.BIP32_DERIVATION
  ),
  redeemScript: Ku.makeConverter(
    bt.OutputTypes.REDEEM_SCRIPT
  ),
  witnessScript: Gu.makeConverter(
    bt.OutputTypes.WITNESS_SCRIPT
  ),
  checkPubkey: Zs.makeChecker([
    bt.OutputTypes.BIP32_DERIVATION
  ]),
  tapBip32Derivation: Wu.makeConverter(
    bt.OutputTypes.TAP_BIP32_DERIVATION
  ),
  tapTree: d2,
  tapInternalKey: Vu.makeConverter(
    bt.OutputTypes.TAP_INTERNAL_KEY
  )
};
Yr.outputs = w2;
Object.defineProperty(fi, "__esModule", { value: !0 });
const Ie = Yr, Ki = Zt, qa = Ht, ne = Qe;
function m2(e, t) {
  let r = 0;
  function n() {
    const x = qa.decode(e, r);
    r += qa.encodingLength(x);
    const $ = e.slice(r, r + x);
    return r += x, $;
  }
  function i() {
    const x = e.readUInt32BE(r);
    return r += 4, x;
  }
  function o() {
    const x = e.readUInt8(r);
    return r += 1, x;
  }
  function s() {
    const x = n(), $ = n();
    return {
      key: x,
      value: $
    };
  }
  function a() {
    if (r >= e.length)
      throw new Error("Format Error: Unexpected End of PSBT");
    const x = e.readUInt8(r) === 0;
    return x && r++, x;
  }
  if (i() !== 1886610036)
    throw new Error("Format Error: Invalid Magic Number");
  if (o() !== 255)
    throw new Error(
      "Format Error: Magic Number must be followed by 0xff separator"
    );
  const l = [], p = {};
  for (; !a(); ) {
    const x = s(), $ = x.key.toString("hex");
    if (p[$])
      throw new Error(
        "Format Error: Keys must be unique for global keymap: key " + $
      );
    p[$] = 1, l.push(x);
  }
  const f = l.filter(
    (x) => x.key[0] === ne.GlobalTypes.UNSIGNED_TX
  );
  if (f.length !== 1)
    throw new Error("Format Error: Only one UNSIGNED_TX allowed");
  const d = t(f[0].value), { inputCount: S, outputCount: m } = d.getInputOutputCounts(), B = [], O = [];
  for (const x of Ki.range(S)) {
    const $ = {}, A = [];
    for (; !a(); ) {
      const k = s(), C = k.key.toString("hex");
      if ($[C])
        throw new Error(
          "Format Error: Keys must be unique for each input: input index " + x + " key " + C
        );
      $[C] = 1, A.push(k);
    }
    B.push(A);
  }
  for (const x of Ki.range(m)) {
    const $ = {}, A = [];
    for (; !a(); ) {
      const k = s(), C = k.key.toString("hex");
      if ($[C])
        throw new Error(
          "Format Error: Keys must be unique for each output: output index " + x + " key " + C
        );
      $[C] = 1, A.push(k);
    }
    O.push(A);
  }
  return Xu(d, {
    globalMapKeyVals: l,
    inputKeyVals: B,
    outputKeyVals: O
  });
}
fi.psbtFromBuffer = m2;
function Je(e, t, r) {
  if (!t.equals(H.from([r])))
    throw new Error(
      `Format Error: Invalid ${e} key: ${t.toString("hex")}`
    );
}
fi.checkKeyBuffer = Je;
function Xu(e, { globalMapKeyVals: t, inputKeyVals: r, outputKeyVals: n }) {
  const i = {
    unsignedTx: e
  };
  let o = 0;
  for (const f of t)
    switch (f.key[0]) {
      case ne.GlobalTypes.UNSIGNED_TX:
        if (Je(
          "global",
          f.key,
          ne.GlobalTypes.UNSIGNED_TX
        ), o > 0)
          throw new Error("Format Error: GlobalMap has multiple UNSIGNED_TX");
        o++;
        break;
      case ne.GlobalTypes.GLOBAL_XPUB:
        i.globalXpub === void 0 && (i.globalXpub = []), i.globalXpub.push(Ie.globals.globalXpub.decode(f));
        break;
      default:
        i.unknownKeyVals || (i.unknownKeyVals = []), i.unknownKeyVals.push(f);
    }
  const s = r.length, a = n.length, l = [], p = [];
  for (const f of Ki.range(s)) {
    const d = {};
    for (const S of r[f])
      switch (Ie.inputs.checkPubkey(S), S.key[0]) {
        case ne.InputTypes.NON_WITNESS_UTXO:
          if (Je(
            "input",
            S.key,
            ne.InputTypes.NON_WITNESS_UTXO
          ), d.nonWitnessUtxo !== void 0)
            throw new Error(
              "Format Error: Input has multiple NON_WITNESS_UTXO"
            );
          d.nonWitnessUtxo = Ie.inputs.nonWitnessUtxo.decode(S);
          break;
        case ne.InputTypes.WITNESS_UTXO:
          if (Je(
            "input",
            S.key,
            ne.InputTypes.WITNESS_UTXO
          ), d.witnessUtxo !== void 0)
            throw new Error("Format Error: Input has multiple WITNESS_UTXO");
          d.witnessUtxo = Ie.inputs.witnessUtxo.decode(S);
          break;
        case ne.InputTypes.PARTIAL_SIG:
          d.partialSig === void 0 && (d.partialSig = []), d.partialSig.push(Ie.inputs.partialSig.decode(S));
          break;
        case ne.InputTypes.SIGHASH_TYPE:
          if (Je(
            "input",
            S.key,
            ne.InputTypes.SIGHASH_TYPE
          ), d.sighashType !== void 0)
            throw new Error("Format Error: Input has multiple SIGHASH_TYPE");
          d.sighashType = Ie.inputs.sighashType.decode(S);
          break;
        case ne.InputTypes.REDEEM_SCRIPT:
          if (Je(
            "input",
            S.key,
            ne.InputTypes.REDEEM_SCRIPT
          ), d.redeemScript !== void 0)
            throw new Error("Format Error: Input has multiple REDEEM_SCRIPT");
          d.redeemScript = Ie.inputs.redeemScript.decode(S);
          break;
        case ne.InputTypes.WITNESS_SCRIPT:
          if (Je(
            "input",
            S.key,
            ne.InputTypes.WITNESS_SCRIPT
          ), d.witnessScript !== void 0)
            throw new Error("Format Error: Input has multiple WITNESS_SCRIPT");
          d.witnessScript = Ie.inputs.witnessScript.decode(S);
          break;
        case ne.InputTypes.BIP32_DERIVATION:
          d.bip32Derivation === void 0 && (d.bip32Derivation = []), d.bip32Derivation.push(
            Ie.inputs.bip32Derivation.decode(S)
          );
          break;
        case ne.InputTypes.FINAL_SCRIPTSIG:
          Je(
            "input",
            S.key,
            ne.InputTypes.FINAL_SCRIPTSIG
          ), d.finalScriptSig = Ie.inputs.finalScriptSig.decode(S);
          break;
        case ne.InputTypes.FINAL_SCRIPTWITNESS:
          Je(
            "input",
            S.key,
            ne.InputTypes.FINAL_SCRIPTWITNESS
          ), d.finalScriptWitness = Ie.inputs.finalScriptWitness.decode(
            S
          );
          break;
        case ne.InputTypes.POR_COMMITMENT:
          Je(
            "input",
            S.key,
            ne.InputTypes.POR_COMMITMENT
          ), d.porCommitment = Ie.inputs.porCommitment.decode(S);
          break;
        case ne.InputTypes.TAP_KEY_SIG:
          Je(
            "input",
            S.key,
            ne.InputTypes.TAP_KEY_SIG
          ), d.tapKeySig = Ie.inputs.tapKeySig.decode(S);
          break;
        case ne.InputTypes.TAP_SCRIPT_SIG:
          d.tapScriptSig === void 0 && (d.tapScriptSig = []), d.tapScriptSig.push(Ie.inputs.tapScriptSig.decode(S));
          break;
        case ne.InputTypes.TAP_LEAF_SCRIPT:
          d.tapLeafScript === void 0 && (d.tapLeafScript = []), d.tapLeafScript.push(Ie.inputs.tapLeafScript.decode(S));
          break;
        case ne.InputTypes.TAP_BIP32_DERIVATION:
          d.tapBip32Derivation === void 0 && (d.tapBip32Derivation = []), d.tapBip32Derivation.push(
            Ie.inputs.tapBip32Derivation.decode(S)
          );
          break;
        case ne.InputTypes.TAP_INTERNAL_KEY:
          Je(
            "input",
            S.key,
            ne.InputTypes.TAP_INTERNAL_KEY
          ), d.tapInternalKey = Ie.inputs.tapInternalKey.decode(S);
          break;
        case ne.InputTypes.TAP_MERKLE_ROOT:
          Je(
            "input",
            S.key,
            ne.InputTypes.TAP_MERKLE_ROOT
          ), d.tapMerkleRoot = Ie.inputs.tapMerkleRoot.decode(S);
          break;
        default:
          d.unknownKeyVals || (d.unknownKeyVals = []), d.unknownKeyVals.push(S);
      }
    l.push(d);
  }
  for (const f of Ki.range(a)) {
    const d = {};
    for (const S of n[f])
      switch (Ie.outputs.checkPubkey(S), S.key[0]) {
        case ne.OutputTypes.REDEEM_SCRIPT:
          if (Je(
            "output",
            S.key,
            ne.OutputTypes.REDEEM_SCRIPT
          ), d.redeemScript !== void 0)
            throw new Error("Format Error: Output has multiple REDEEM_SCRIPT");
          d.redeemScript = Ie.outputs.redeemScript.decode(S);
          break;
        case ne.OutputTypes.WITNESS_SCRIPT:
          if (Je(
            "output",
            S.key,
            ne.OutputTypes.WITNESS_SCRIPT
          ), d.witnessScript !== void 0)
            throw new Error("Format Error: Output has multiple WITNESS_SCRIPT");
          d.witnessScript = Ie.outputs.witnessScript.decode(S);
          break;
        case ne.OutputTypes.BIP32_DERIVATION:
          d.bip32Derivation === void 0 && (d.bip32Derivation = []), d.bip32Derivation.push(
            Ie.outputs.bip32Derivation.decode(S)
          );
          break;
        case ne.OutputTypes.TAP_INTERNAL_KEY:
          Je(
            "output",
            S.key,
            ne.OutputTypes.TAP_INTERNAL_KEY
          ), d.tapInternalKey = Ie.outputs.tapInternalKey.decode(S);
          break;
        case ne.OutputTypes.TAP_TREE:
          Je(
            "output",
            S.key,
            ne.OutputTypes.TAP_TREE
          ), d.tapTree = Ie.outputs.tapTree.decode(S);
          break;
        case ne.OutputTypes.TAP_BIP32_DERIVATION:
          d.tapBip32Derivation === void 0 && (d.tapBip32Derivation = []), d.tapBip32Derivation.push(
            Ie.outputs.tapBip32Derivation.decode(S)
          );
          break;
        default:
          d.unknownKeyVals || (d.unknownKeyVals = []), d.unknownKeyVals.push(S);
      }
    p.push(d);
  }
  return { globalMap: i, inputs: l, outputs: p };
}
fi.psbtFromKeyVals = Xu;
var mo = {};
Object.defineProperty(mo, "__esModule", { value: !0 });
const Qo = Yr, Ya = Zt;
function y2({ globalMap: e, inputs: t, outputs: r }) {
  const { globalKeyVals: n, inputKeyVals: i, outputKeyVals: o } = qu({
    globalMap: e,
    inputs: t,
    outputs: r
  }), s = Ya.keyValsToBuffer(n), a = (d) => d.length === 0 ? [H.from([0])] : d.map(Ya.keyValsToBuffer), l = a(i), p = a(o), f = H.allocUnsafe(5);
  return f.writeUIntBE(482972169471, 0, 5), H.concat(
    [f, s].concat(l, p)
  );
}
mo.psbtToBuffer = y2;
const A2 = (e, t) => e.key.compare(t.key);
function zo(e, t) {
  const r = /* @__PURE__ */ new Set(), n = Object.entries(e).reduce((o, [s, a]) => {
    if (s === "unknownKeyVals") return o;
    const l = t[s];
    if (l === void 0) return o;
    const p = (Array.isArray(a) ? a : [a]).map(
      l.encode
    );
    return p.map((d) => d.key.toString("hex")).forEach((d) => {
      if (r.has(d))
        throw new Error("Serialize Error: Duplicate key: " + d);
      r.add(d);
    }), o.concat(p);
  }, []), i = e.unknownKeyVals ? e.unknownKeyVals.filter((o) => !r.has(o.key.toString("hex"))) : [];
  return n.concat(i).sort(A2);
}
function qu({ globalMap: e, inputs: t, outputs: r }) {
  return {
    globalKeyVals: zo(e, Qo.globals),
    inputKeyVals: t.map((n) => zo(n, Qo.inputs)),
    outputKeyVals: r.map((n) => zo(n, Qo.outputs))
  };
}
mo.psbtToKeyVals = qu;
(function(e) {
  function t(r) {
    for (var n in r) e.hasOwnProperty(n) || (e[n] = r[n]);
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), t(fi), t(mo);
})(Vs);
Object.defineProperty(Ws, "__esModule", { value: !0 });
const Jo = Vs;
function E2(e) {
  const t = e[0], r = Jo.psbtToKeyVals(t), n = e.slice(1);
  if (n.length === 0) throw new Error("Combine: Nothing to combine");
  const i = Qa(t);
  if (i === void 0)
    throw new Error("Combine: Self missing transaction");
  const o = En(r.globalKeyVals), s = r.inputKeyVals.map(En), a = r.outputKeyVals.map(En);
  for (const l of n) {
    const p = Qa(l);
    if (p === void 0 || !p.toBuffer().equals(i.toBuffer()))
      throw new Error(
        "Combine: One of the Psbts does not have the same transaction."
      );
    const f = Jo.psbtToKeyVals(l);
    En(f.globalKeyVals).forEach(
      Zo(
        o,
        r.globalKeyVals,
        f.globalKeyVals
      )
    ), f.inputKeyVals.map(En).forEach(
      (B, O) => B.forEach(
        Zo(
          s[O],
          r.inputKeyVals[O],
          f.inputKeyVals[O]
        )
      )
    ), f.outputKeyVals.map(En).forEach(
      (B, O) => B.forEach(
        Zo(
          a[O],
          r.outputKeyVals[O],
          f.outputKeyVals[O]
        )
      )
    );
  }
  return Jo.psbtFromKeyVals(i, {
    globalMapKeyVals: r.globalKeyVals,
    inputKeyVals: r.inputKeyVals,
    outputKeyVals: r.outputKeyVals
  });
}
Ws.combine = E2;
function Zo(e, t, r) {
  return (n) => {
    if (e.has(n)) return;
    const i = r.filter((o) => o.key.toString("hex") === n)[0];
    t.push(i), e.add(n);
  };
}
function Qa(e) {
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
  const t = Yr;
  function r(m, B) {
    const O = m[B];
    if (O === void 0) throw new Error(`No input #${B}`);
    return O;
  }
  e.checkForInput = r;
  function n(m, B) {
    const O = m[B];
    if (O === void 0) throw new Error(`No output #${B}`);
    return O;
  }
  e.checkForOutput = n;
  function i(m, B, O) {
    if (m.key[0] < O)
      throw new Error(
        "Use the method for your specific key instead of addUnknownKeyVal*"
      );
    if (B && B.filter((x) => x.key.equals(m.key)).length !== 0)
      throw new Error(`Duplicate Key: ${m.key.toString("hex")}`);
  }
  e.checkHasKey = i;
  function o(m) {
    let B = 0;
    return Object.keys(m).forEach((O) => {
      Number(isNaN(Number(O))) && B++;
    }), B;
  }
  e.getEnumLength = o;
  function s(m, B) {
    let O = !1;
    if (B.nonWitnessUtxo || B.witnessUtxo) {
      const x = !!B.redeemScript, $ = !!B.witnessScript, A = !x || !!B.finalScriptSig, k = !$ || !!B.finalScriptWitness, C = !!B.finalScriptSig || !!B.finalScriptWitness;
      O = A && k && C;
    }
    if (O === !1)
      throw new Error(
        `Input #${m} has too much or too little data to clean`
      );
  }
  e.inputCheckUncleanFinalized = s;
  function a(m, B, O, x) {
    throw new Error(
      `Data for ${m} key ${B} is incorrect: Expected ${O} and got ${JSON.stringify(x)}`
    );
  }
  function l(m) {
    return (B, O) => {
      for (const x of Object.keys(B)) {
        const $ = B[x], { canAdd: A, canAddToArray: k, check: C, expected: M } = (
          // @ts-ignore
          t[m + "s"][x] || {}
        ), F = !!k;
        if (C)
          if (F) {
            if (!Array.isArray($) || // @ts-ignore
            O[x] && !Array.isArray(O[x]))
              throw new Error(`Key type ${x} must be an array`);
            $.every(C) || a(m, x, M, $);
            const W = O[x] || [], g = /* @__PURE__ */ new Set();
            if (!$.every((h) => k(W, h, g)))
              throw new Error("Can not add duplicate data to array");
            O[x] = W.concat($);
          } else {
            if (C($) || a(m, x, M, $), !A(O, $))
              throw new Error(`Can not add duplicate data to ${m}`);
            O[x] = $;
          }
      }
    };
  }
  e.updateGlobal = l("global"), e.updateInput = l("input"), e.updateOutput = l("output");
  function p(m, B) {
    const O = m.length - 1, x = r(m, O);
    e.updateInput(B, x);
  }
  e.addInputAttributes = p;
  function f(m, B) {
    const O = m.length - 1, x = n(m, O);
    e.updateOutput(B, x);
  }
  e.addOutputAttributes = f;
  function d(m, B) {
    if (!H.isBuffer(B) || B.length < 4)
      throw new Error("Set Version: Invalid Transaction");
    return B.writeUInt32LE(m, 0), B;
  }
  e.defaultVersionSetter = d;
  function S(m, B) {
    if (!H.isBuffer(B) || B.length < 4)
      throw new Error("Set Locktime: Invalid Transaction");
    return B.writeUInt32LE(m, B.length - 4), B;
  }
  e.defaultLocktimeSetter = S;
})(ea);
Object.defineProperty(Ks, "__esModule", { value: !0 });
const P2 = Ws, za = Vs, es = Qe, ze = ea;
let b2 = class {
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
    const n = za.psbtFromBuffer(t, r), i = new this(n.globalMap.unsignedTx);
    return Object.assign(i, n), i;
  }
  toBase64() {
    return this.toBuffer().toString("base64");
  }
  toHex() {
    return this.toBuffer().toString("hex");
  }
  toBuffer() {
    return za.psbtToBuffer(this);
  }
  updateGlobal(t) {
    return ze.updateGlobal(t, this.globalMap), this;
  }
  updateInput(t, r) {
    const n = ze.checkForInput(this.inputs, t);
    return ze.updateInput(r, n), this;
  }
  updateOutput(t, r) {
    const n = ze.checkForOutput(this.outputs, t);
    return ze.updateOutput(r, n), this;
  }
  addUnknownKeyValToGlobal(t) {
    return ze.checkHasKey(
      t,
      this.globalMap.unknownKeyVals,
      ze.getEnumLength(es.GlobalTypes)
    ), this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []), this.globalMap.unknownKeyVals.push(t), this;
  }
  addUnknownKeyValToInput(t, r) {
    const n = ze.checkForInput(this.inputs, t);
    return ze.checkHasKey(
      r,
      n.unknownKeyVals,
      ze.getEnumLength(es.InputTypes)
    ), n.unknownKeyVals || (n.unknownKeyVals = []), n.unknownKeyVals.push(r), this;
  }
  addUnknownKeyValToOutput(t, r) {
    const n = ze.checkForOutput(this.outputs, t);
    return ze.checkHasKey(
      r,
      n.unknownKeyVals,
      ze.getEnumLength(es.OutputTypes)
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
    ), ze.addInputAttributes(this.inputs, t), this;
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
    ), ze.addOutputAttributes(this.outputs, t), this;
  }
  clearFinalizedInput(t) {
    const r = ze.checkForInput(this.inputs, t);
    ze.inputCheckUncleanFinalized(t, r);
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
    const r = P2.combine([this].concat(t));
    return Object.assign(this, r), this;
  }
  getTransaction() {
    return this.globalMap.unsignedTx.toBuffer();
  }
};
Ks.Psbt = b2;
var xe = {}, Ae = {};
Object.defineProperty(Ae, "__esModule", { value: !0 });
Ae.signatureBlocksAction = Ae.checkInputForSig = Ae.pubkeyInScript = Ae.pubkeyPositionInScript = Ae.witnessStackToScriptWitness = Ae.isP2TR = Ae.isP2SHScript = Ae.isP2WSHScript = Ae.isP2WPKH = Ae.isP2PKH = Ae.isP2PK = Ae.isP2MS = void 0;
const Ja = Ht, ri = dt(), Ii = Lr, S2 = Jt, ln = li();
function fn(e) {
  return (t) => {
    try {
      return e({ output: t }), !0;
    } catch {
      return !1;
    }
  };
}
Ae.isP2MS = fn(ln.p2ms);
Ae.isP2PK = fn(ln.p2pk);
Ae.isP2PKH = fn(ln.p2pkh);
Ae.isP2WPKH = fn(ln.p2wpkh);
Ae.isP2WSHScript = fn(ln.p2wsh);
Ae.isP2SHScript = fn(ln.p2sh);
Ae.isP2TR = fn(ln.p2tr);
function v2(e) {
  let t = H.allocUnsafe(0);
  function r(s) {
    t = H.concat([t, H.from(s)]);
  }
  function n(s) {
    const a = t.length, l = Ja.encodingLength(s);
    t = H.concat([t, H.allocUnsafe(l)]), Ja.encode(s, t, a);
  }
  function i(s) {
    n(s.length), r(s);
  }
  function o(s) {
    n(s.length), s.forEach(i);
  }
  return o(e), t;
}
Ae.witnessStackToScriptWitness = v2;
function Yu(e, t) {
  const r = (0, S2.hash160)(e), n = e.slice(1, 33), i = ri.decompile(t);
  if (i === null) throw new Error("Unknown script error");
  return i.findIndex((o) => typeof o == "number" ? !1 : o.equals(e) || o.equals(r) || o.equals(n));
}
Ae.pubkeyPositionInScript = Yu;
function T2(e, t) {
  return Yu(e, t) !== -1;
}
Ae.pubkeyInScript = T2;
function _2(e, t) {
  return I2(e).some(
    (n) => Qu(n, ri.signature.decode, t)
  );
}
Ae.checkInputForSig = _2;
function Qu(e, t, r) {
  const { hashType: n } = t(e), i = [];
  switch (n & Ii.Transaction.SIGHASH_ANYONECANPAY && i.push("addInput"), n & 31) {
    case Ii.Transaction.SIGHASH_ALL:
      break;
    case Ii.Transaction.SIGHASH_SINGLE:
    case Ii.Transaction.SIGHASH_NONE:
      i.push("addOutput"), i.push("setInputSequence");
      break;
  }
  return i.indexOf(r) === -1;
}
Ae.signatureBlocksAction = Qu;
function I2(e) {
  let t = [];
  if ((e.partialSig || []).length === 0) {
    if (!e.finalScriptSig && !e.finalScriptWitness) return [];
    t = O2(e);
  } else
    t = e.partialSig;
  return t.map((r) => r.signature);
}
function O2(e) {
  const t = e.finalScriptSig ? ri.decompile(e.finalScriptSig) || [] : [], r = e.finalScriptWitness ? ri.decompile(e.finalScriptWitness) || [] : [];
  return t.concat(r).filter((n) => H.isBuffer(n) && ri.isCanonicalScriptSignature(n)).map((n) => ({ signature: n }));
}
Object.defineProperty(xe, "__esModule", { value: !0 });
xe.checkTaprootInputForSigs = xe.tapTreeFromList = xe.tapTreeToList = xe.tweakInternalPubKey = xe.checkTaprootOutputFields = xe.checkTaprootInputFields = xe.isTaprootOutput = xe.isTaprootInput = xe.serializeTaprootSignature = xe.tapScriptFinalizer = xe.toXOnly = void 0;
const ta = rt, k2 = Lr, yo = Ae, Ur = fo, x2 = li(), B2 = Ae, C2 = (e) => e.length === 32 ? e : e.slice(1, 33);
xe.toXOnly = C2;
function N2(e, t, r) {
  const n = z2(
    t,
    e,
    r
  );
  try {
    const o = Y2(t, n).concat(n.script).concat(n.controlBlock);
    return {
      finalScriptWitness: (0, yo.witnessStackToScriptWitness)(o)
    };
  } catch (i) {
    throw new Error(`Can not finalize taproot input #${e}: ${i}`);
  }
}
xe.tapScriptFinalizer = N2;
function R2(e, t) {
  const r = t ? H.from([t]) : H.from([]);
  return H.concat([e, r]);
}
xe.serializeTaprootSignature = R2;
function Ri(e) {
  return e && !!(e.tapInternalKey || e.tapMerkleRoot || e.tapLeafScript && e.tapLeafScript.length || e.tapBip32Derivation && e.tapBip32Derivation.length || e.witnessUtxo && (0, yo.isP2TR)(e.witnessUtxo.script));
}
xe.isTaprootInput = Ri;
function Fi(e, t) {
  return e && !!(e.tapInternalKey || e.tapTree || e.tapBip32Derivation && e.tapBip32Derivation.length || t && (0, yo.isP2TR)(t));
}
xe.isTaprootOutput = Fi;
function F2(e, t, r) {
  G2(e, t, r), q2(e, t, r);
}
xe.checkTaprootInputFields = F2;
function U2(e, t, r) {
  X2(e, t, r), L2(e, t);
}
xe.checkTaprootOutputFields = U2;
function L2(e, t) {
  if (!t.tapTree && !t.tapInternalKey) return;
  const r = t.tapInternalKey || e.tapInternalKey, n = t.tapTree || e.tapTree;
  if (r) {
    const { script: i } = e, o = H2(r, n);
    if (i && !i.equals(o))
      throw new Error("Error adding output. Script or address missmatch.");
  }
}
function H2(e, t) {
  const r = t && zu(t.leaves), { output: n } = (0, x2.p2tr)({
    internalPubkey: e,
    scriptTree: r
  });
  return n;
}
function M2(e, t) {
  const r = t.tapInternalKey, n = r && (0, Ur.tweakKey)(r, t.tapMerkleRoot);
  if (!n)
    throw new Error(
      `Cannot tweak tap internal key for input #${e}. Public key: ${r && r.toString("hex")}`
    );
  return n.x;
}
xe.tweakInternalPubKey = M2;
function D2(e) {
  if (!(0, ta.isTaptree)(e))
    throw new Error(
      "Cannot convert taptree to tapleaf list. Expecting a tapree structure."
    );
  return As(e);
}
xe.tapTreeToList = D2;
function zu(e = []) {
  return e.length === 1 && e[0].depth === 0 ? {
    output: e[0].script,
    version: e[0].leafVersion
  } : V2(e);
}
xe.tapTreeFromList = zu;
function $2(e, t) {
  return K2(e).some(
    (n) => (0, B2.signatureBlocksAction)(n, j2, t)
  );
}
xe.checkTaprootInputForSigs = $2;
function j2(e) {
  return {
    signature: e.slice(0, 64),
    hashType: e.slice(64)[0] || k2.Transaction.SIGHASH_DEFAULT
  };
}
function K2(e) {
  const t = [];
  if (e.tapKeySig && t.push(e.tapKeySig), e.tapScriptSig && t.push(...e.tapScriptSig.map((r) => r.signature)), !t.length) {
    const r = W2(e.finalScriptWitness);
    r && t.push(r);
  }
  return t;
}
function W2(e) {
  if (!e) return;
  const t = e.slice(2);
  if (t.length === 64 || t.length === 65) return t;
}
function As(e, t = [], r = 0) {
  if (r > Ur.MAX_TAPTREE_DEPTH)
    throw new Error("Max taptree depth exceeded.");
  return e ? (0, ta.isTapleaf)(e) ? (t.push({
    depth: r,
    leafVersion: e.version || Ur.LEAF_VERSION_TAPSCRIPT,
    script: e.output
  }), t) : (e[0] && As(e[0], t, r + 1), e[1] && As(e[1], t, r + 1), t) : [];
}
function V2(e) {
  let t;
  for (const r of e)
    if (t = Es(r, t), !t) throw new Error("No room left to insert tapleaf in tree");
  return t;
}
function Es(e, t, r = 0) {
  if (r > Ur.MAX_TAPTREE_DEPTH)
    throw new Error("Max taptree depth exceeded.");
  if (e.depth === r)
    return t ? void 0 : {
      output: e.script,
      version: e.leafVersion
    };
  if ((0, ta.isTapleaf)(t)) return;
  const n = Es(e, t && t[0], r + 1);
  if (n) return [n, t && t[1]];
  const i = Es(e, t && t[1], r + 1);
  if (i) return [t && t[0], i];
}
function G2(e, t, r) {
  const n = Ri(e) && On(t), i = On(e) && Ri(t), o = e === t && Ri(t) && On(t);
  if (n || i || o)
    throw new Error(
      `Invalid arguments for Psbt.${r}. Cannot use both taproot and non-taproot fields.`
    );
}
function X2(e, t, r) {
  const n = Fi(e) && On(t), i = On(e) && Fi(t), o = e === t && Fi(t) && On(t);
  if (n || i || o)
    throw new Error(
      `Invalid arguments for Psbt.${r}. Cannot use both taproot and non-taproot fields.`
    );
}
function q2(e, t, r) {
  if (t.tapMerkleRoot) {
    const n = (t.tapLeafScript || []).every(
      (o) => ts(o, t.tapMerkleRoot)
    ), i = (e.tapLeafScript || []).every(
      (o) => ts(o, t.tapMerkleRoot)
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
  const r = (0, Ur.tapleafHash)({
    output: e.script,
    version: e.leafVersion
  });
  return (0, Ur.rootHashFromPath)(
    e.controlBlock,
    r
  ).equals(t);
}
function Y2(e, t) {
  const r = (0, Ur.tapleafHash)({
    output: t.script,
    version: t.leafVersion
  });
  return (e.tapScriptSig || []).filter((n) => n.leafHash.equals(r)).map((n) => Q2(t.script, n)).sort((n, i) => i.positionInScript - n.positionInScript).map((n) => n.signature);
}
function Q2(e, t) {
  return Object.assign(
    {
      positionInScript: (0, yo.pubkeyPositionInScript)(
        t.pubkey,
        e
      )
    },
    t
  );
}
function z2(e, t, r) {
  if (!e.tapScriptSig || !e.tapScriptSig.length)
    throw new Error(
      `Can not finalize taproot input #${t}. No tapleaf script signature provided.`
    );
  const n = (e.tapLeafScript || []).sort((i, o) => i.controlBlock.length - o.controlBlock.length).find(
    (i) => J2(i, e.tapScriptSig, r)
  );
  if (!n)
    throw new Error(
      `Can not finalize taproot input #${t}. Signature for tapleaf script not found.`
    );
  return n;
}
function J2(e, t, r) {
  const n = (0, Ur.tapleafHash)({
    output: e.script,
    version: e.leafVersion
  });
  return (!r || r.equals(n)) && t.find((o) => o.leafHash.equals(n)) !== void 0;
}
function On(e) {
  return e && !!(e.redeemScript || e.witnessScript || e.bip32Derivation && e.bip32Derivation.length);
}
Object.defineProperty(go, "__esModule", { value: !0 });
go.Psbt = void 0;
const Za = Ks, ec = Ht, lt = ea, tc = js(), Wi = je, Z2 = Ye, Ct = li(), eg = fo, hr = dt(), nt = Lr, Ce = xe, Me = Ae, tg = {
  /**
   * A bitcoinjs Network object. This is only used if you pass an `address`
   * parameter to addOutput. Otherwise it is not needed and can be left default.
   */
  network: Z2.bitcoin,
  /**
   * When extractTransaction is called, the fee rate is checked.
   * THIS IS NOT TO BE RELIED ON.
   * It is only here as a last ditch effort to prevent sending a 500 BTC fee etc.
   */
  maximumFeeRate: 5e3
  // satoshi per byte
};
class Vi {
  static fromBase64(t, r = {}) {
    const n = H.from(t, "base64");
    return this.fromBuffer(n, r);
  }
  static fromHex(t, r = {}) {
    const n = H.from(t, "hex");
    return this.fromBuffer(n, r);
  }
  static fromBuffer(t, r = {}) {
    const n = Za.Psbt.fromBuffer(t, rg), i = new Vi(r, n);
    return ag(i.__CACHE.__TX, i.__CACHE), i;
  }
  constructor(t = {}, r = new Za.Psbt(new Ju())) {
    this.data = r, this.opts = Object.assign({}, tg, t), this.__CACHE = {
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
    const n = (i, o, s, a) => Object.defineProperty(i, o, {
      enumerable: s,
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
        r = (0, tc.fromOutputScript)(
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
    const t = Vi.fromBuffer(this.data.toBuffer());
    return t.opts = JSON.parse(JSON.stringify(this.opts)), t;
  }
  setMaximumFeeRate(t) {
    Oi(t), this.opts.maximumFeeRate = t;
  }
  setVersion(t) {
    Oi(t), Vn(this.data.inputs, "setVersion");
    const r = this.__CACHE;
    return r.__TX.version = t, r.__EXTRACTED_TX = void 0, this;
  }
  setLocktime(t) {
    Oi(t), Vn(this.data.inputs, "setLocktime");
    const r = this.__CACHE;
    return r.__TX.locktime = t, r.__EXTRACTED_TX = void 0, this;
  }
  setInputSequence(t, r) {
    Oi(r), Vn(this.data.inputs, "setInputSequence");
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
    (0, Ce.checkTaprootInputFields)(t, t, "addInput"), Vn(this.data.inputs, "addInput"), t.witnessScript && Gi(t.witnessScript);
    const r = this.__CACHE;
    this.data.addInput(t);
    const n = r.__TX.ins[r.__TX.ins.length - 1];
    tl(r, n);
    const i = this.data.inputs.length - 1, o = this.data.inputs[i];
    return o.nonWitnessUtxo && bs(this.__CACHE, o, i), r.__FEE = void 0, r.__FEE_RATE = void 0, r.__EXTRACTED_TX = void 0, this;
  }
  addOutputs(t) {
    return t.forEach((r) => this.addOutput(r)), this;
  }
  addOutput(t) {
    if (arguments.length > 1 || !t || t.value === void 0 || t.address === void 0 && t.script === void 0)
      throw new Error(
        "Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]"
      );
    Vn(this.data.inputs, "addOutput");
    const { address: r } = t;
    if (typeof r == "string") {
      const { network: i } = this.opts, o = (0, tc.toOutputScript)(r, i);
      t = Object.assign({}, t, { script: o });
    }
    (0, Ce.checkTaprootOutputFields)(t, t, "addOutput");
    const n = this.__CACHE;
    return this.data.addOutput(t), n.__FEE = void 0, n.__FEE_RATE = void 0, n.__EXTRACTED_TX = void 0, this;
  }
  extractTransaction(t) {
    if (!this.data.inputs.every(Zu)) throw new Error("Not finalized");
    const r = this.__CACHE;
    if (t || ig(this, r, this.opts), r.__EXTRACTED_TX) return r.__EXTRACTED_TX;
    const n = r.__TX.clone();
    return al(this.data.inputs, n, r, !0), n;
  }
  getFeeRate() {
    return sc(
      "__FEE_RATE",
      "fee rate",
      this.data.inputs,
      this.__CACHE
    );
  }
  getFee() {
    return sc("__FEE", "fee", this.data.inputs, this.__CACHE);
  }
  finalizeAllInputs() {
    return (0, lt.checkForInput)(this.data.inputs, 0), Gn(this.data.inputs.length).forEach((t) => this.finalizeInput(t)), this;
  }
  finalizeInput(t, r) {
    const n = (0, lt.checkForInput)(this.data.inputs, t);
    return (0, Ce.isTaprootInput)(n) ? this._finalizeTaprootInput(
      t,
      n,
      void 0,
      r
    ) : this._finalizeInput(t, n, r);
  }
  finalizeTaprootInput(t, r, n = Ce.tapScriptFinalizer) {
    const i = (0, lt.checkForInput)(this.data.inputs, t);
    if ((0, Ce.isTaprootInput)(i))
      return this._finalizeTaprootInput(
        t,
        i,
        r,
        n
      );
    throw new Error(`Cannot finalize input #${t}. Not Taproot.`);
  }
  _finalizeInput(t, r, n = cg) {
    const { script: i, isP2SH: o, isP2WSH: s, isSegwit: a } = hg(
      t,
      r,
      this.__CACHE
    );
    if (!i) throw new Error(`No script found for input #${t}`);
    og(r);
    const { finalScriptSig: l, finalScriptWitness: p } = n(
      t,
      r,
      i,
      a,
      o,
      s
    );
    if (l && this.data.updateInput(t, { finalScriptSig: l }), p && this.data.updateInput(t, { finalScriptWitness: p }), !l && !p)
      throw new Error(`Unknown error finalizing input #${t}`);
    return this.data.clearFinalizedInput(t), this;
  }
  _finalizeTaprootInput(t, r, n, i = Ce.tapScriptFinalizer) {
    if (!r.witnessUtxo)
      throw new Error(
        `Cannot finalize input #${t}. Missing withness utxo.`
      );
    if (r.tapKeySig) {
      const o = Ct.p2tr({
        output: r.witnessUtxo.script,
        signature: r.tapKeySig
      }), s = (0, Me.witnessStackToScriptWitness)(
        o.witness
      );
      this.data.updateInput(t, { finalScriptWitness: s });
    } else {
      const { finalScriptWitness: o } = i(
        t,
        r,
        n
      );
      this.data.updateInput(t, { finalScriptWitness: o });
    }
    return this.data.clearFinalizedInput(t), this;
  }
  getInputType(t) {
    const r = (0, lt.checkForInput)(this.data.inputs, t), n = cl(t, r, this.__CACHE), i = Eo(
      n,
      t,
      "input",
      r.redeemScript || mg(r.finalScriptSig),
      r.witnessScript || yg(r.finalScriptWitness)
    ), o = i.type === "raw" ? "" : i.type + "-", s = ll(i.meaningfulScript);
    return o + s;
  }
  inputHasPubkey(t, r) {
    const n = (0, lt.checkForInput)(this.data.inputs, t);
    return gg(r, n, t, this.__CACHE);
  }
  inputHasHDKey(t, r) {
    const n = (0, lt.checkForInput)(this.data.inputs, t), i = nc(r);
    return !!n.bip32Derivation && n.bip32Derivation.some(i);
  }
  outputHasPubkey(t, r) {
    const n = (0, lt.checkForOutput)(this.data.outputs, t);
    return wg(r, n, t, this.__CACHE);
  }
  outputHasHDKey(t, r) {
    const n = (0, lt.checkForOutput)(this.data.outputs, t), i = nc(r);
    return !!n.bip32Derivation && n.bip32Derivation.some(i);
  }
  validateSignaturesOfAllInputs(t) {
    return (0, lt.checkForInput)(this.data.inputs, 0), Gn(this.data.inputs.length).map(
      (n) => this.validateSignaturesOfInput(n, t)
    ).reduce((n, i) => i === !0 && n, !0);
  }
  validateSignaturesOfInput(t, r, n) {
    const i = this.data.inputs[t];
    return (0, Ce.isTaprootInput)(i) ? this.validateSignaturesOfTaprootInput(
      t,
      r,
      n
    ) : this._validateSignaturesOfInput(t, r, n);
  }
  _validateSignaturesOfInput(t, r, n) {
    const i = this.data.inputs[t], o = (i || {}).partialSig;
    if (!i || !o || o.length < 1)
      throw new Error("No signatures to validate");
    if (typeof r != "function")
      throw new Error("Need validator function to validate signatures");
    const s = n ? o.filter((d) => d.pubkey.equals(n)) : o;
    if (s.length < 1) throw new Error("No signatures for this pubkey");
    const a = [];
    let l, p, f;
    for (const d of s) {
      const S = hr.signature.decode(d.signature), { hash: m, script: B } = f !== S.hashType ? nl(
        t,
        Object.assign({}, i, { sighashType: S.hashType }),
        this.__CACHE,
        !0
      ) : { hash: l, script: p };
      f = S.hashType, l = m, p = B, el(d.pubkey, B, "verify"), a.push(r(d.pubkey, m, S.signature));
    }
    return a.every((d) => d === !0);
  }
  validateSignaturesOfTaprootInput(t, r, n) {
    const i = this.data.inputs[t], o = (i || {}).tapKeySig, s = (i || {}).tapScriptSig;
    if (!i && !o && !(s && !s.length))
      throw new Error("No signatures to validate");
    if (typeof r != "function")
      throw new Error("Need validator function to validate signatures");
    n = n && (0, Ce.toXOnly)(n);
    const a = n ? Ps(
      t,
      i,
      this.data.inputs,
      n,
      this.__CACHE
    ) : lg(
      t,
      i,
      this.data.inputs,
      this.__CACHE
    );
    if (!a.length) throw new Error("No signatures for this pubkey");
    const l = a.find((f) => !f.leafHash);
    let p = 0;
    if (o && l) {
      if (!r(
        l.pubkey,
        l.hash,
        cc(o)
      )) return !1;
      p++;
    }
    if (s)
      for (const f of s) {
        const d = a.find((S) => f.pubkey.equals(S.pubkey));
        if (d) {
          if (!r(
            f.pubkey,
            d.hash,
            cc(f.signature)
          )) return !1;
          p++;
        }
      }
    return p > 0;
  }
  signAllInputsHD(t, r = [nt.Transaction.SIGHASH_ALL]) {
    if (!t || !t.publicKey || !t.fingerprint)
      throw new Error("Need HDSigner to sign input");
    const n = [];
    for (const i of Gn(this.data.inputs.length))
      try {
        this.signInputHD(i, t, r), n.push(!0);
      } catch {
        n.push(!1);
      }
    if (n.every((i) => i === !1))
      throw new Error("No inputs were signed");
    return this;
  }
  signAllInputsHDAsync(t, r = [nt.Transaction.SIGHASH_ALL]) {
    return new Promise((n, i) => {
      if (!t || !t.publicKey || !t.fingerprint)
        return i(new Error("Need HDSigner to sign input"));
      const o = [], s = [];
      for (const a of Gn(this.data.inputs.length))
        s.push(
          this.signInputHDAsync(a, t, r).then(
            () => {
              o.push(!0);
            },
            () => {
              o.push(!1);
            }
          )
        );
      return Promise.all(s).then(() => {
        if (o.every((a) => a === !1))
          return i(new Error("No inputs were signed"));
        n();
      });
    });
  }
  signInputHD(t, r, n = [nt.Transaction.SIGHASH_ALL]) {
    if (!r || !r.publicKey || !r.fingerprint)
      throw new Error("Need HDSigner to sign input");
    return uc(t, this.data.inputs, r).forEach((o) => this.signInput(t, o, n)), this;
  }
  signInputHDAsync(t, r, n = [nt.Transaction.SIGHASH_ALL]) {
    return new Promise((i, o) => {
      if (!r || !r.publicKey || !r.fingerprint)
        return o(new Error("Need HDSigner to sign input"));
      const a = uc(t, this.data.inputs, r).map(
        (l) => this.signInputAsync(t, l, n)
      );
      return Promise.all(a).then(() => {
        i();
      }).catch(o);
    });
  }
  signAllInputs(t, r) {
    if (!t || !t.publicKey)
      throw new Error("Need Signer to sign input");
    const n = [];
    for (const i of Gn(this.data.inputs.length))
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
      const o = [], s = [];
      for (const [a] of this.data.inputs.entries())
        s.push(
          this.signInputAsync(a, t, r).then(
            () => {
              o.push(!0);
            },
            () => {
              o.push(!1);
            }
          )
        );
      return Promise.all(s).then(() => {
        if (o.every((a) => a === !1))
          return i(new Error("No inputs were signed"));
        n();
      });
    });
  }
  signInput(t, r, n) {
    if (!r || !r.publicKey)
      throw new Error("Need Signer to sign input");
    const i = (0, lt.checkForInput)(this.data.inputs, t);
    return (0, Ce.isTaprootInput)(i) ? this._signTaprootInput(
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
    const o = (0, lt.checkForInput)(this.data.inputs, t);
    if ((0, Ce.isTaprootInput)(o))
      return this._signTaprootInput(
        t,
        o,
        r,
        n,
        i
      );
    throw new Error(`Input #${t} is not of type Taproot.`);
  }
  _signInput(t, r, n = [nt.Transaction.SIGHASH_ALL]) {
    const { hash: i, sighashType: o } = ac(
      this.data.inputs,
      t,
      r.publicKey,
      this.__CACHE,
      n
    ), s = [
      {
        pubkey: r.publicKey,
        signature: hr.signature.encode(r.sign(i), o)
      }
    ];
    return this.data.updateInput(t, { partialSig: s }), this;
  }
  _signTaprootInput(t, r, n, i, o = [nt.Transaction.SIGHASH_DEFAULT]) {
    const s = this.checkTaprootHashesForSig(
      t,
      r,
      n,
      i,
      o
    ), a = s.filter((p) => !p.leafHash).map(
      (p) => (0, Ce.serializeTaprootSignature)(
        n.signSchnorr(p.hash),
        r.sighashType
      )
    )[0], l = s.filter((p) => !!p.leafHash).map((p) => ({
      pubkey: (0, Ce.toXOnly)(n.publicKey),
      signature: (0, Ce.serializeTaprootSignature)(
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
      const i = (0, lt.checkForInput)(this.data.inputs, t);
      return (0, Ce.isTaprootInput)(i) ? this._signTaprootInputAsync(
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
      const o = (0, lt.checkForInput)(this.data.inputs, t);
      if ((0, Ce.isTaprootInput)(o))
        return this._signTaprootInputAsync(
          t,
          o,
          r,
          n,
          i
        );
      throw new Error(`Input #${t} is not of type Taproot.`);
    });
  }
  _signInputAsync(t, r, n = [nt.Transaction.SIGHASH_ALL]) {
    const { hash: i, sighashType: o } = ac(
      this.data.inputs,
      t,
      r.publicKey,
      this.__CACHE,
      n
    );
    return Promise.resolve(r.sign(i)).then((s) => {
      const a = [
        {
          pubkey: r.publicKey,
          signature: hr.signature.encode(s, o)
        }
      ];
      this.data.updateInput(t, { partialSig: a });
    });
  }
  async _signTaprootInputAsync(t, r, n, i, o = [nt.Transaction.SIGHASH_DEFAULT]) {
    const s = this.checkTaprootHashesForSig(
      t,
      r,
      n,
      i,
      o
    ), a = [], l = s.filter((f) => !f.leafHash)[0];
    if (l) {
      const f = Promise.resolve(
        n.signSchnorr(l.hash)
      ).then((d) => ({
        tapKeySig: (0, Ce.serializeTaprootSignature)(
          d,
          r.sighashType
        )
      }));
      a.push(f);
    }
    const p = s.filter((f) => !!f.leafHash);
    if (p.length) {
      const f = p.map((d) => Promise.resolve(n.signSchnorr(d.hash)).then(
        (S) => ({ tapScriptSig: [
          {
            pubkey: (0, Ce.toXOnly)(n.publicKey),
            signature: (0, Ce.serializeTaprootSignature)(
              S,
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
  checkTaprootHashesForSig(t, r, n, i, o) {
    if (typeof n.signSchnorr != "function")
      throw new Error(
        `Need Schnorr Signer to sign taproot input #${t}.`
      );
    const s = Ps(
      t,
      r,
      this.data.inputs,
      n.publicKey,
      this.__CACHE,
      i,
      o
    );
    if (!s || !s.length)
      throw new Error(
        `Can not sign for input #${t} with the key ${n.publicKey.toString(
          "hex"
        )}`
      );
    return s;
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
    return r.witnessScript && Gi(r.witnessScript), (0, Ce.checkTaprootInputFields)(
      this.data.inputs[t],
      r,
      "updateInput"
    ), this.data.updateInput(t, r), r.nonWitnessUtxo && bs(
      this.__CACHE,
      this.data.inputs[t],
      t
    ), this;
  }
  updateOutput(t, r) {
    const n = this.data.outputs[t];
    return (0, Ce.checkTaprootOutputFields)(
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
go.Psbt = Vi;
const rg = (e) => new Ju(e);
class Ju {
  constructor(t = H.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
    this.tx = nt.Transaction.fromBuffer(t), sg(this.tx), Object.defineProperty(this, "tx", {
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
function ng(e, t, r) {
  switch (r) {
    case "pubkey":
    case "pubkeyhash":
    case "witnesspubkeyhash":
      return rc(1, e.partialSig);
    case "multisig":
      const n = Ct.p2ms({ output: t });
      return rc(n.m, e.partialSig, n.pubkeys);
    default:
      return !1;
  }
}
function rs(e) {
  if (e.__UNSAFE_SIGN_NONSEGWIT !== !1)
    throw new Error("Not BIP174 compliant, can not export");
}
function rc(e, t, r) {
  if (!t) return !1;
  let n;
  if (r ? n = r.map((i) => {
    const o = Ag(i);
    return t.find((s) => s.pubkey.equals(o));
  }).filter((i) => !!i) : n = t, n.length > e) throw new Error("Too many signatures");
  return n.length === e;
}
function Zu(e) {
  return !!e.finalScriptSig || !!e.finalScriptWitness;
}
function nc(e) {
  return (t) => !(!t.masterFingerprint.equals(e.fingerprint) || !e.derivePath(t.path).publicKey.equals(t.pubkey));
}
function Oi(e) {
  if (typeof e != "number" || e !== Math.floor(e) || e > 4294967295 || e < 0)
    throw new Error("Invalid 32 bit integer");
}
function ig(e, t, r) {
  const n = t.__FEE_RATE || e.getFeeRate(), i = t.__EXTRACTED_TX.virtualSize(), o = n * i;
  if (n >= r.maximumFeeRate)
    throw new Error(
      `Warning: You are paying around ${(o / 1e8).toFixed(8)} in fees, which is ${n} satoshi per byte for a transaction with a VSize of ${i} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`
    );
}
function Vn(e, t) {
  e.forEach((r) => {
    if ((0, Ce.isTaprootInput)(r) ? (0, Ce.checkTaprootInputForSigs)(r, t) : (0, Me.checkInputForSig)(r, t))
      throw new Error("Can not modify transaction, signatures exist.");
  });
}
function og(e) {
  if (!e.sighashType || !e.partialSig) return;
  const { partialSig: t, sighashType: r } = e;
  t.forEach((n) => {
    const { hashType: i } = hr.signature.decode(n.signature);
    if (r !== i)
      throw new Error("Signature sighash does not match input sighash type");
  });
}
function el(e, t, r) {
  if (!(0, Me.pubkeyInScript)(e, t))
    throw new Error(
      `Can not ${r} for this input with the key ${e.toString("hex")}`
    );
}
function sg(e) {
  if (!e.ins.every(
    (r) => r.script && r.script.length === 0 && r.witness && r.witness.length === 0
  ))
    throw new Error("Format Error: Transaction ScriptSigs are not empty");
}
function ag(e, t) {
  e.ins.forEach((r) => {
    tl(t, r);
  });
}
function tl(e, t) {
  const r = (0, Wi.reverseBuffer)(H.from(t.hash)).toString("hex") + ":" + t.index;
  if (e.__TX_IN_CACHE[r]) throw new Error("Duplicate input detected.");
  e.__TX_IN_CACHE[r] = 1;
}
function rl(e, t) {
  return (r, n, i, o) => {
    const s = e({
      redeem: { output: i }
    }).output;
    if (!n.equals(s))
      throw new Error(
        `${t} for ${o} #${r} doesn't match the scriptPubKey in the prevout`
      );
  };
}
const ic = rl(Ct.p2sh, "Redeem script"), oc = rl(
  Ct.p2wsh,
  "Witness script"
);
function sc(e, t, r, n) {
  if (!r.every(Zu))
    throw new Error(`PSBT must be finalized to calculate ${t}`);
  if (e === "__FEE_RATE" && n.__FEE_RATE) return n.__FEE_RATE;
  if (e === "__FEE" && n.__FEE) return n.__FEE;
  let i, o = !0;
  if (n.__EXTRACTED_TX ? (i = n.__EXTRACTED_TX, o = !1) : i = n.__TX.clone(), al(r, i, n, o), e === "__FEE_RATE") return n.__FEE_RATE;
  if (e === "__FEE") return n.__FEE;
}
function cg(e, t, r, n, i, o) {
  const s = ll(r);
  if (!ng(t, r, s))
    throw new Error(`Can not finalize input #${e}`);
  return ug(
    r,
    s,
    t.partialSig,
    n,
    i,
    o
  );
}
function ug(e, t, r, n, i, o) {
  let s, a;
  const l = fg(e, t, r), p = o ? Ct.p2wsh({ redeem: l }) : null, f = i ? Ct.p2sh({ redeem: p || l }) : null;
  return n ? (p ? a = (0, Me.witnessStackToScriptWitness)(
    p.witness
  ) : a = (0, Me.witnessStackToScriptWitness)(
    l.witness
  ), f && (s = f.input)) : f ? s = f.input : s = l.input, {
    finalScriptSig: s,
    finalScriptWitness: a
  };
}
function ac(e, t, r, n, i) {
  const o = (0, lt.checkForInput)(e, t), { hash: s, sighashType: a, script: l } = nl(
    t,
    o,
    n,
    !1,
    i
  );
  return el(r, l, "sign"), {
    hash: s,
    sighashType: a
  };
}
function nl(e, t, r, n, i) {
  const o = r.__TX, s = t.sighashType || nt.Transaction.SIGHASH_ALL;
  ol(s, i);
  let a, l;
  if (t.nonWitnessUtxo) {
    const d = Ao(
      r,
      t,
      e
    ), S = o.ins[e].hash, m = d.getHash();
    if (!S.equals(m))
      throw new Error(
        `Non-witness UTXO hash for input #${e} doesn't match the hash specified in the prevout`
      );
    const B = o.ins[e].index;
    l = d.outs[B];
  } else if (t.witnessUtxo)
    l = t.witnessUtxo;
  else
    throw new Error("Need a Utxo input item for signing");
  const { meaningfulScript: p, type: f } = Eo(
    l.script,
    e,
    "input",
    t.redeemScript,
    t.witnessScript
  );
  if (["p2sh-p2wsh", "p2wsh"].indexOf(f) >= 0)
    a = o.hashForWitnessV0(
      e,
      p,
      l.value,
      s
    );
  else if ((0, Me.isP2WPKH)(p)) {
    const d = Ct.p2pkh({
      hash: p.slice(2)
    }).output;
    a = o.hashForWitnessV0(
      e,
      d,
      l.value,
      s
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
    ), a = o.hashForSignature(
      e,
      p,
      s
    );
  }
  return {
    script: p,
    sighashType: s,
    hash: a
  };
}
function lg(e, t, r, n) {
  const i = [];
  if (t.tapInternalKey) {
    const s = il(e, t, n);
    s && i.push(s);
  }
  if (t.tapScriptSig) {
    const s = t.tapScriptSig.map((a) => a.pubkey);
    i.push(...s);
  }
  return i.map(
    (s) => Ps(e, t, r, s, n)
  ).flat();
}
function il(e, t, r) {
  const { script: n } = ra(e, t, r);
  return (0, Me.isP2TR)(n) ? n.subarray(2, 34) : null;
}
function cc(e) {
  return e.length === 64 ? e : e.subarray(0, 64);
}
function Ps(e, t, r, n, i, o, s) {
  const a = i.__TX, l = t.sighashType || nt.Transaction.SIGHASH_DEFAULT;
  ol(l, s);
  const p = r.map(
    (B, O) => ra(O, B, i)
  ), f = p.map((B) => B.script), d = p.map((B) => B.value), S = [];
  if (t.tapInternalKey && !o) {
    const B = il(e, t, i) || H.from([]);
    if ((0, Ce.toXOnly)(n).equals(B)) {
      const O = a.hashForWitnessV1(
        e,
        f,
        d,
        l
      );
      S.push({ pubkey: n, hash: O });
    }
  }
  const m = (t.tapLeafScript || []).filter((B) => (0, Me.pubkeyInScript)(n, B.script)).map((B) => {
    const O = (0, eg.tapleafHash)({
      output: B.script,
      version: B.leafVersion
    });
    return Object.assign({ hash: O }, B);
  }).filter(
    (B) => !o || o.equals(B.hash)
  ).map((B) => {
    const O = a.hashForWitnessV1(
      e,
      f,
      d,
      l,
      B.hash
    );
    return {
      pubkey: n,
      hash: O,
      leafHash: B.hash
    };
  });
  return S.concat(m);
}
function ol(e, t) {
  if (t && t.indexOf(e) < 0) {
    const r = pg(e);
    throw new Error(
      `Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: ${r}`
    );
  }
}
function fg(e, t, r) {
  let n;
  switch (t) {
    case "multisig":
      const i = dg(e, r);
      n = Ct.p2ms({
        output: e,
        signatures: i
      });
      break;
    case "pubkey":
      n = Ct.p2pk({
        output: e,
        signature: r[0].signature
      });
      break;
    case "pubkeyhash":
      n = Ct.p2pkh({
        output: e,
        pubkey: r[0].pubkey,
        signature: r[0].signature
      });
      break;
    case "witnesspubkeyhash":
      n = Ct.p2wpkh({
        output: e,
        pubkey: r[0].pubkey,
        signature: r[0].signature
      });
      break;
  }
  return n;
}
function hg(e, t, r) {
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
    const o = Ao(
      r,
      t,
      e
    ), s = n.ins[e].index;
    i.script = o.outs[s].script;
  } else t.witnessUtxo && (i.script = t.witnessUtxo.script);
  return (t.witnessScript || (0, Me.isP2WPKH)(i.script)) && (i.isSegwit = !0), i;
}
function uc(e, t, r) {
  const n = (0, lt.checkForInput)(t, e);
  if (!n.bip32Derivation || n.bip32Derivation.length === 0)
    throw new Error("Need bip32Derivation to sign with HD");
  const i = n.bip32Derivation.map((s) => {
    if (s.masterFingerprint.equals(r.fingerprint))
      return s;
  }).filter((s) => !!s);
  if (i.length === 0)
    throw new Error(
      "Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint"
    );
  return i.map((s) => {
    const a = r.derivePath(s.path);
    if (!s.pubkey.equals(a.publicKey))
      throw new Error("pubkey did not match bip32Derivation");
    return a;
  });
}
function dg(e, t) {
  return Ct.p2ms({ output: e }).pubkeys.map((n) => (t.filter((i) => i.pubkey.equals(n))[0] || {}).signature).filter((n) => !!n);
}
function sl(e) {
  let t = 0;
  function r(s) {
    return t += s, e.slice(t - s, t);
  }
  function n() {
    const s = ec.decode(e, t);
    return t += ec.decode.bytes, s;
  }
  function i() {
    return r(n());
  }
  function o() {
    const s = n(), a = [];
    for (let l = 0; l < s; l++) a.push(i());
    return a;
  }
  return o();
}
function pg(e) {
  let t = e & nt.Transaction.SIGHASH_ANYONECANPAY ? "SIGHASH_ANYONECANPAY | " : "";
  switch (e & 31) {
    case nt.Transaction.SIGHASH_ALL:
      t += "SIGHASH_ALL";
      break;
    case nt.Transaction.SIGHASH_SINGLE:
      t += "SIGHASH_SINGLE";
      break;
    case nt.Transaction.SIGHASH_NONE:
      t += "SIGHASH_NONE";
      break;
  }
  return t;
}
function bs(e, t, r) {
  e.__NON_WITNESS_UTXO_BUF_CACHE[r] = t.nonWitnessUtxo;
  const n = nt.Transaction.fromBuffer(t.nonWitnessUtxo);
  e.__NON_WITNESS_UTXO_TX_CACHE[r] = n;
  const i = e, o = r;
  delete t.nonWitnessUtxo, Object.defineProperty(t, "nonWitnessUtxo", {
    enumerable: !0,
    get() {
      const s = i.__NON_WITNESS_UTXO_BUF_CACHE[o], a = i.__NON_WITNESS_UTXO_TX_CACHE[o];
      if (s !== void 0)
        return s;
      {
        const l = a.toBuffer();
        return i.__NON_WITNESS_UTXO_BUF_CACHE[o] = l, l;
      }
    },
    set(s) {
      i.__NON_WITNESS_UTXO_BUF_CACHE[o] = s;
    }
  });
}
function al(e, t, r, n) {
  let i = 0;
  e.forEach((l, p) => {
    if (n && l.finalScriptSig && (t.ins[p].script = l.finalScriptSig), n && l.finalScriptWitness && (t.ins[p].witness = sl(
      l.finalScriptWitness
    )), l.witnessUtxo)
      i += l.witnessUtxo.value;
    else if (l.nonWitnessUtxo) {
      const f = Ao(r, l, p), d = t.ins[p].index, S = f.outs[d];
      i += S.value;
    }
  });
  const o = t.outs.reduce((l, p) => l + p.value, 0), s = i - o;
  if (s < 0)
    throw new Error("Outputs are spending more than Inputs");
  const a = t.virtualSize();
  r.__FEE = s, r.__EXTRACTED_TX = t, r.__FEE_RATE = Math.floor(s / a);
}
function Ao(e, t, r) {
  const n = e.__NON_WITNESS_UTXO_TX_CACHE;
  return n[r] || bs(e, t, r), n[r];
}
function cl(e, t, r) {
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
    const i = Ao(
      r,
      t,
      e
    ).outs[r.__TX.ins[e].index];
    return { script: i.script, value: i.value };
  } else
    throw new Error("Can't find pubkey in input without Utxo data");
}
function gg(e, t, r, n) {
  const i = cl(r, t, n), { meaningfulScript: o } = Eo(
    i,
    r,
    "input",
    t.redeemScript,
    t.witnessScript
  );
  return (0, Me.pubkeyInScript)(e, o);
}
function wg(e, t, r, n) {
  const i = n.__TX.outs[r].script, { meaningfulScript: o } = Eo(
    i,
    r,
    "output",
    t.redeemScript,
    t.witnessScript
  );
  return (0, Me.pubkeyInScript)(e, o);
}
function mg(e) {
  if (!e) return;
  const t = hr.decompile(e);
  if (!t) return;
  const r = t[t.length - 1];
  if (!(!H.isBuffer(r) || ul(r) || Eg(r) || !hr.decompile(r)))
    return r;
}
function yg(e) {
  if (!e) return;
  const t = sl(e), r = t[t.length - 1];
  if (!(ul(r) || !hr.decompile(r)))
    return r;
}
function Ag(e) {
  if (e.length === 65) {
    const t = e[64] & 1, r = e.slice(0, 33);
    return r[0] = 2 | t, r;
  }
  return e.slice();
}
function ul(e) {
  return e.length === 33 && hr.isCanonicalPubKey(e);
}
function Eg(e) {
  return hr.isCanonicalScriptSignature(e);
}
function Eo(e, t, r, n, i) {
  const o = (0, Me.isP2SHScript)(e), s = o && n && (0, Me.isP2WSHScript)(n), a = (0, Me.isP2WSHScript)(e);
  if (o && n === void 0)
    throw new Error("scriptPubkey is P2SH but redeemScript missing");
  if ((a || s) && i === void 0)
    throw new Error(
      "scriptPubkey or redeemScript is P2WSH but witnessScript missing"
    );
  let l;
  return s ? (l = i, ic(t, e, n, r), oc(t, n, i, r), Gi(l)) : a ? (l = i, oc(t, e, i, r), Gi(l)) : o ? (l = n, ic(t, e, n, r)) : l = e, {
    meaningfulScript: l,
    type: s ? "p2sh-p2wsh" : o ? "p2sh" : a ? "p2wsh" : "raw"
  };
}
function Gi(e) {
  if ((0, Me.isP2WPKH)(e) || (0, Me.isP2SHScript)(e))
    throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
}
function ll(e) {
  return (0, Me.isP2WPKH)(e) ? "witnesspubkeyhash" : (0, Me.isP2PKH)(e) ? "pubkeyhash" : (0, Me.isP2MS)(e) ? "multisig" : (0, Me.isP2PK)(e) ? "pubkey" : "nonstandard";
}
function Gn(e) {
  return [...Array(e).keys()];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initEccLib = e.Transaction = e.opcodes = e.Psbt = e.Block = e.script = e.payments = e.networks = e.crypto = e.address = void 0;
  const t = js();
  e.address = t;
  const r = Jt;
  e.crypto = r;
  const n = Ye;
  e.networks = n;
  const i = li();
  e.payments = i;
  const o = dt();
  e.script = o;
  var s = ho;
  Object.defineProperty(e, "Block", {
    enumerable: !0,
    get: function() {
      return s.Block;
    }
  });
  var a = go;
  Object.defineProperty(e, "Psbt", {
    enumerable: !0,
    get: function() {
      return a.Psbt;
    }
  });
  var l = Rr;
  Object.defineProperty(e, "opcodes", {
    enumerable: !0,
    get: function() {
      return l.OPS;
    }
  });
  var p = Lr;
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
})(zc);
function Mg() {
  const { network: e, publicKey: t, format: r, wallet: n } = zt(), [i, o] = Pe(null), [s, a] = Pe(!1);
  return { sign: it(
    async (p, f, d) => {
      a(!0);
      try {
        if (o(null), !r || !t || !n)
          throw new Error("No wallet is connected");
        const S = zc.Psbt.fromBase64(f), m = await xs({
          address: p,
          wallet: n,
          network: e,
          psbt: S,
          options: d
        });
        return a(!1), m;
      } catch (S) {
        throw o(S.message), a(!1), S;
      }
    },
    [r, e, t, n]
  ), error: i, loading: s };
}
function Pg(e) {
  if (e === "segwit")
    return ua.P2WPKH;
  if (e === "taproot")
    return ua.P2TR;
  throw new Error("Leather payment address format is not supported");
}
async function bg({
  message: e,
  wallet: t,
  address: r,
  network: n,
  format: i
}) {
  if (t === ee.MAGICEDEN) {
    const { base64: o } = await Rl(e, r, n);
    return o;
  }
  if (t === ee.UNISAT) {
    const { base64: o } = await Dl(e, "bip322-simple");
    return o;
  }
  if (t === ee.XVERSE) {
    const { base64: o } = await Kl(e, r, n);
    return o;
  }
  if (t === ee.LEATHER) {
    const o = Pg(i), { base64: s } = await Bl(e, {
      paymentType: o,
      network: n
    });
    return s;
  }
  if (t === ee.OKX) {
    const { base64: o } = await Ll(e, "bip322-simple", n);
    return o;
  }
  throw new Error("Invalid wallet selected");
}
function Dg() {
  const {
    network: e,
    wallet: t,
    publicKey: r,
    format: n,
    address: i
  } = zt(), [o, s] = Pe(null), [a, l] = Pe(!1);
  return { signMsg: it(
    async (f, d) => {
      l(!0);
      try {
        if (s(null), !n || !r || !t)
          throw new Error("No wallet is connected");
        if (i.ordinals !== f && i.payments !== f)
          throw new Error("Address supplied is not connected address");
        const S = await bg({
          address: f,
          wallet: t,
          message: d,
          network: e,
          format: i.ordinals === f ? n.ordinals : n.payments
        });
        return l(!1), S;
      } catch (S) {
        throw s(S.message), l(!1), S;
      }
    },
    [n, e, r, t, i]
  ), error: o, isLoading: a };
}
export {
  qt as Chain,
  Zn as Network,
  Ng as OrdConnectKit,
  Bg as OrdConnectProvider,
  Mh as SelectWalletModal,
  ee as Wallet,
  Rg as useBalance,
  zt as useOrdConnect,
  Fg as useSend,
  Ug as useSendV2,
  Mg as useSign,
  Dg as useSignMessage
};
