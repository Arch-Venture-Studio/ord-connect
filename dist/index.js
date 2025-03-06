(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";.ord-connect-wallet-button{color:#000;background-color:#fff;font-weight:700;font-size:14px;line-height:20px;border-radius:40px;padding:10px 16px;border:0px;cursor:pointer}.ord-connect-wallet-button:disabled{background-color:#888;cursor:not-allowed}.ord-connect-wallet-button span:before{content:"Connect"}@media screen and (min-width: 768px){.ord-connect-wallet-button{padding:10px 24px}.ord-connect-wallet-button span:before{content:"Connect wallet"}}.ord-connect-wallet-button:enabled:hover{background-color:#f2f2f2}.ord-connect-wallet-button:enabled:active{opacity:.7}.ord-wallet-connected-container{position:relative;display:inline-block}.ord-wallet-connected-button{border-radius:52px;border:1px solid #8c8c8c;background-color:transparent;padding:8px 12px 8px 8px;display:flex;align-items:center;cursor:pointer}.ord-wallet-connected-button .address-container{display:none}@media screen and (min-width: 768px){.ord-wallet-connected-button .address-container{display:block;margin-left:8px}}.ord-wallet-connected-button .address{color:#fff;font-size:14px;font-weight:700;line-height:20px;margin:0}.ord-wallet-connected-button .network-container{display:flex;align-items:center}.ord-wallet-connected-button .status-indicator{width:8px;height:8px;background:#00ad1d;border-radius:999px;margin-right:8px}.ord-wallet-connected-button .network{color:#ffffff80;margin:0;font-size:12px;font-weight:600;line-height:16px}.ord-wallet-connected-button .wallet-profile-icon{width:28px;height:28px;border-radius:999px;background-color:pink;margin-right:8px}.ord-wallet-connected-button .dropdown-button{transition:transform .3s ease;margin-left:16px}.ord-wallet-connected-button .expand-dropdown-button{width:20px;transform:rotate(0)}.ord-wallet-connected-button .close-dropdown-button{transform:rotate(-180deg)}.ord-wallet-connection-dropdown{background:#121212;border-radius:15px;border:.5px solid rgba(255,255,255,.5);width:256px;position:absolute;top:54px;right:0}.ord-wallet-connection-dropdown .dropdown-button{display:flex;align-items:center;background:transparent;border:0px;cursor:pointer;width:100%;justify-content:space-between}.ord-wallet-connection-dropdown .dropdown-button:hover{background:#ffffff1a}.ord-wallet-connection-dropdown .dropdown-button:hover:first-child{border-top-left-radius:15px;border-top-right-radius:15px}.ord-wallet-connection-dropdown .dropdown-button:hover:last-child{border-bottom-left-radius:15px;border-bottom-right-radius:15px}.ord-wallet-connection-dropdown .dropdown-button:active{background:#ffffff1a;opacity:.7}.ord-wallet-connection-dropdown .dropdown-button:first-child{padding:26px 16px 18px}.ord-wallet-connection-dropdown .dropdown-button:not(:first-child):not(:last-child){padding:9px 16px}.ord-wallet-connection-dropdown .dropdown-button:last-child{padding:18px 16px 26px}.ord-wallet-connection-dropdown .label{color:#fff;font-size:14px;font-weight:600;flex:1 1 0%;text-align:left}.ord-wallet-connection-dropdown .value{color:#a6a6a6}.ord-wallet-connection-dropdown .change-wallet-label{color:#ffffffb3;font-size:14px;font-weight:700;flex:1 1 0%;text-align:right}.ord-wallet-connection-dropdown .profile-item-container{width:100%;display:flex;flex-direction:column}.ord-wallet-connection-dropdown .profile-item-inner-container{display:flex;justify-content:space-between}.ord-wallet-connection-dropdown .offers{font-size:10px;font-weight:700;line-height:12px;letter-spacing:.08em;color:#fff;padding:4px 12px;border-radius:16px;background:#ffffff1a}.ord-wallet-connection-dropdown .horizontal-separator{margin:6px 16px;border:0px;border-top:.5px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal{position:relative;z-index:10}.ord-connect-wallet-modal .backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000080;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.ord-connect-wallet-modal .outer-container{position:fixed;top:0;left:0;overflow-y:auto;width:100%;height:100%}.ord-connect-wallet-modal .inner-container{display:flex;align-items:center;justify-content:center;text-align:center;height:100%}.ord-connect-wallet-modal .panel{width:100%;background-color:#121212;overflow:hidden;text-align:left;height:100%}.ord-connect-wallet-modal .panel-title-container{display:flex;justify-content:space-between;padding:32px 24px 0;align-items:center}.ord-connect-wallet-modal .panel-title{color:#fff;font-size:24px;font-style:normal;font-weight:700;line-height:32px;margin:0}.ord-connect-wallet-modal .unsupported-browser-message{color:#fff}.ord-connect-wallet-modal .close-button{display:inline-flex;background:transparent;border:0px;cursor:pointer}.ord-connect-wallet-modal .panel-content-container{margin:32px 24px 0}.ord-connect-wallet-modal .panel-content-inner-container{border-radius:20px;border:1px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal .wallet-option-button{display:flex;align-items:center;background:transparent;border:0px;color:#fff;font-size:16px;font-weight:600;line-height:20px;width:100%;cursor:pointer}.ord-connect-wallet-modal .wallet-option-button:disabled .chevron-btn{opacity:.3}.waiting-cursor{cursor:wait!important}.wallet-identifier-container{position:relative;display:inline-block}.wallet-identifier-container img{position:absolute;bottom:4px;right:0;width:12px;border-radius:50%;background-color:#000;object-fit:cover}.ord-connect-wallet-modal .option-wrapper{display:flex;align-items:center;justify-content:space-between;padding:16px 4px;width:100%}.ord-connect-wallet-modal .wallet-option-button{padding:8px 16px}.ord-connect-wallet-modal .wallet-option-button:hover{background:#ffffff1a}.ord-connect-wallet-modal .wallet-option-button:active{background:#ffffff1a;opacity:.7}.ord-connect-wallet-modal .wallet-option-button:first-child{padding:16px 16px 8px;border:0px;margin-bottom:0;border-radius:20px 20px 0 0}.ord-connect-wallet-modal .wallet-option-button:last-child{padding:8px 16px 16px;border:0px;margin-bottom:0;border-radius:0 0 20px 20px}.ord-connect-wallet-modal .wallet-option-button:only-child{padding:8px 16px;border:0px;margin-bottom:0;border-radius:20px}.ord-connect-wallet-modal .wallet-icon{width:32px;height:32px}.ord-connect-wallet-modal .wallet-option{flex-grow:1;margin-left:12px;text-align:left}.ord-connect-wallet-modal .wallet-option-connected-address{display:flex;padding:4px 8px;align-items:center;margin-left:4px;margin-right:8px;text-align:left;background-color:#00000080;border-radius:20px;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}.ord-connect-wallet-modal .wallet-option-connected-address .label{margin-left:4px;font-size:12px;font-weight:400;color:#ffffffb3}.ord-connect-wallet-modal .wallet-option-label{font-size:16px;font-weight:600;line-height:20px;margin:0}.ord-connect-wallet-modal .wallet-option-subtitle{font-size:12px;font-weight:400;line-height:16px;color:#8c8c8c;margin:0}.ord-connect-wallet-modal .horizontal-separator{margin:2px 16px;border:0px;border-top:.5px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal .error-message{margin:16px 0 0;color:#e54545;font-size:14px;line-height:20px}.ord-connect-wallet-modal .preferred-label{padding:4px 12px;color:#000000b2;background-color:#ffbf18;font-size:12px;line-height:16px;font-weight:400;border-radius:20px;margin-left:4px;margin-right:8px}@media screen and (min-width: 768px){.ord-connect-wallet-modal .outer-container{top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:auto;border-radius:20px}.ord-connect-wallet-modal .panel{border:1px solid rgba(51,51,51,.5);border-radius:20px}.ord-connect-wallet-modal .panel-title-container{padding:24px 32px 0;border-bottom:0px}.ord-connect-wallet-modal .unsupported-browser-message{font-size:16px;padding-left:24px}.ord-connect-wallet-modal .panel-title{font-size:20px;font-style:normal;font-weight:600;line-height:28px;letter-spacing:.2px}.ord-connect-wallet-modal .panel-content-container{margin:48px 32px 32px}.ord-connect-wallet-modal .wallet-option{margin-left:16px}}@media screen and (min-width: 1080px){.ord-connect-wallet-modal .panel-content-container{margin:48px 32px 32px}.ord-connect-wallet-modal .option-wrapper{padding:16px}.ord-connect-wallet-modal .wallet-option-button{font-size:18px;font-weight:600;line-height:24px}.ord-connect-wallet-modal .wallet-option-button:first-child{padding:16px 16px 8px;border:0px;margin-bottom:0;border-radius:20px 20px 0 0}.ord-connect-wallet-modal .wallet-icon{width:40px;height:40px}.ord-connect-wallet-modal .wallet-option-label{font-size:18px;font-weight:600;line-height:24px}.ord-connect-wallet-modal .wallet-option-connected-address{margin-left:16px;margin-right:16px}.ord-connect-wallet-modal .wallet-option-connected-address .label{font-size:16px}}.ord-connect-font *{font-family:Space Grotesk,sans-serif}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.opacity-0{opacity:0}.opacity-100{opacity:1}.duration-300{transition-duration:.3s}.duration-200{transition-duration:.2s}.scale-95{transform:scale(.95)}.scale-100{transform:scale(1)}')),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import * as Br from "react";
import re, { useState as Ae, useEffect as be, useCallback as nt, createContext as Ft, useMemo as Me, useContext as yt, useLayoutEffect as pl, useRef as he, forwardRef as gl, Fragment as mt, isValidElement as wl, cloneElement as ml, createElement as yl, useReducer as fc, createRef as fs } from "react";
import { BrowserWalletNotInstalledError as Al, getAddressesFromPublicKey as El, ADDRESS_FORMAT_TO_TYPE as Pl, JsonRpcDatasource as Bs, PSBTBuilder as hc } from "@ordzaar/ordit-sdk";
import { getAddresses as bl, signPsbt as Sl, signMessage as vl, LeatherAddressType as la } from "@ordzaar/ordit-sdk/leather";
import { getAddresses as Tl, signPsbt as _l, signMessage as Il } from "@ordzaar/ordit-sdk/magiceden";
import { getAddresses as Ol, signPsbt as kl, signMessage as xl } from "@ordzaar/ordit-sdk/okx";
import { getAddresses as Bl, signPsbt as Cl, signMessage as Nl } from "@ordzaar/ordit-sdk/unisat";
import { getAddresses as Rl, signPsbt as Fl, signMessage as Ul } from "@ordzaar/ordit-sdk/xverse";
import { createPortal as Ll } from "react-dom";
function Hl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dc = { exports: {} }, Re = dc.exports = {}, Kt, Wt;
function hs() {
  throw new Error("setTimeout has not been defined");
}
function ds() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Kt = setTimeout : Kt = hs;
  } catch {
    Kt = hs;
  }
  try {
    typeof clearTimeout == "function" ? Wt = clearTimeout : Wt = ds;
  } catch {
    Wt = ds;
  }
})();
function pc(e) {
  if (Kt === setTimeout)
    return setTimeout(e, 0);
  if ((Kt === hs || !Kt) && setTimeout)
    return Kt = setTimeout, setTimeout(e, 0);
  try {
    return Kt(e, 0);
  } catch {
    try {
      return Kt.call(null, e, 0);
    } catch {
      return Kt.call(this, e, 0);
    }
  }
}
function Ml(e) {
  if (Wt === clearTimeout)
    return clearTimeout(e);
  if ((Wt === ds || !Wt) && clearTimeout)
    return Wt = clearTimeout, clearTimeout(e);
  try {
    return Wt(e);
  } catch {
    try {
      return Wt.call(null, e);
    } catch {
      return Wt.call(this, e);
    }
  }
}
var sr = [], _n = !1, Vr, Ui = -1;
function Dl() {
  !_n || !Vr || (_n = !1, Vr.length ? sr = Vr.concat(sr) : Ui = -1, sr.length && gc());
}
function gc() {
  if (!_n) {
    var e = pc(Dl);
    _n = !0;
    for (var t = sr.length; t; ) {
      for (Vr = sr, sr = []; ++Ui < t; )
        Vr && Vr[Ui].run();
      Ui = -1, t = sr.length;
    }
    Vr = null, _n = !1, Ml(e);
  }
}
Re.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  sr.push(new wc(e, t)), sr.length === 1 && !_n && pc(gc);
};
function wc(e, t) {
  this.fun = e, this.array = t;
}
wc.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Re.title = "browser";
Re.browser = !0;
Re.env = {};
Re.argv = [];
Re.version = "";
Re.versions = {};
function dr() {
}
Re.on = dr;
Re.addListener = dr;
Re.once = dr;
Re.off = dr;
Re.removeListener = dr;
Re.removeAllListeners = dr;
Re.emit = dr;
Re.prependListener = dr;
Re.prependOnceListener = dr;
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
var $l = dc.exports;
const mc = /* @__PURE__ */ Hl($l);
var jl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ps = { exports: {} }, Dn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fa;
function Kl() {
  if (fa) return Dn;
  fa = 1;
  var e = re, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, f, m) {
    var p, w = {}, T = null, E = null;
    m !== void 0 && (T = "" + m), f.key !== void 0 && (T = "" + f.key), f.ref !== void 0 && (E = f.ref);
    for (p in f) n.call(f, p) && !s.hasOwnProperty(p) && (w[p] = f[p]);
    if (a && a.defaultProps) for (p in f = a.defaultProps, f) w[p] === void 0 && (w[p] = f[p]);
    return { $$typeof: t, type: a, key: T, ref: E, props: w, _owner: i.current };
  }
  return Dn.Fragment = r, Dn.jsx = o, Dn.jsxs = o, Dn;
}
var $n = {}, ha;
function Wl() {
  return ha || (ha = 1, mc.env.NODE_ENV !== "production" && function() {
    var e = re, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), R = Symbol.iterator, B = "@@iterator";
    function C(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var K = R && _[R] || _[B];
      return typeof K == "function" ? K : null;
    }
    var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(_) {
      {
        for (var K = arguments.length, X = new Array(K > 1 ? K - 1 : 0), z = 1; z < K; z++)
          X[z - 1] = arguments[z];
        S("error", _, X);
      }
    }
    function S(_, K, X) {
      {
        var z = j.ReactDebugCurrentFrame, ge = z.getStackAddendum();
        ge !== "" && (K += "%s", X = X.concat([ge]));
        var ye = X.map(function(le) {
          return String(le);
        });
        ye.unshift("Warning: " + K), Function.prototype.apply.call(console[_], console, ye);
      }
    }
    var I = !1, L = !1, N = !1, D = !1, d = !1, l;
    l = Symbol.for("react.module.reference");
    function A(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === n || _ === s || d || _ === i || _ === m || _ === p || D || _ === E || I || L || N || typeof _ == "object" && _ !== null && (_.$$typeof === T || _.$$typeof === w || _.$$typeof === o || _.$$typeof === a || _.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === l || _.getModuleId !== void 0));
    }
    function x(_, K, X) {
      var z = _.displayName;
      if (z)
        return z;
      var ge = K.displayName || K.name || "";
      return ge !== "" ? X + "(" + ge + ")" : X;
    }
    function h(_) {
      return _.displayName || "Context";
    }
    function P(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case m:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case a:
            var K = _;
            return h(K) + ".Consumer";
          case o:
            var X = _;
            return h(X._context) + ".Provider";
          case f:
            return x(_, _.render, "ForwardRef");
          case w:
            var z = _.displayName || null;
            return z !== null ? z : P(_.type) || "Memo";
          case T: {
            var ge = _, ye = ge._payload, le = ge._init;
            try {
              return P(le(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, v = 0, O, U, H, W, G, q, Q;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function ue() {
      {
        if (v === 0) {
          O = console.log, U = console.info, H = console.warn, W = console.error, G = console.group, q = console.groupCollapsed, Q = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
    function ie() {
      {
        if (v--, v === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, _, {
              value: O
            }),
            info: k({}, _, {
              value: U
            }),
            warn: k({}, _, {
              value: H
            }),
            error: k({}, _, {
              value: W
            }),
            group: k({}, _, {
              value: G
            }),
            groupCollapsed: k({}, _, {
              value: q
            }),
            groupEnd: k({}, _, {
              value: Q
            })
          });
        }
        v < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = j.ReactCurrentDispatcher, Se;
    function dt(_, K, X) {
      {
        if (Se === void 0)
          try {
            throw Error();
          } catch (ge) {
            var z = ge.stack.trim().match(/\n( *(at )?)/);
            Se = z && z[1] || "";
          }
        return `
` + Se + _;
      }
    }
    var Pt = !1, bt;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      bt = new se();
    }
    function Fe(_, K) {
      if (!_ || Pt)
        return "";
      {
        var X = bt.get(_);
        if (X !== void 0)
          return X;
      }
      var z;
      Pt = !0;
      var ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = ee.current, ee.current = null, ue();
      try {
        if (K) {
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
            } catch (gt) {
              z = gt;
            }
            Reflect.construct(_, [], le);
          } else {
            try {
              le.call();
            } catch (gt) {
              z = gt;
            }
            _.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gt) {
            z = gt;
          }
          _();
        }
      } catch (gt) {
        if (gt && z && typeof gt.stack == "string") {
          for (var ce = gt.stack.split(`
`), ot = z.stack.split(`
`), Ce = ce.length - 1, Ue = ot.length - 1; Ce >= 1 && Ue >= 0 && ce[Ce] !== ot[Ue]; )
            Ue--;
          for (; Ce >= 1 && Ue >= 0; Ce--, Ue--)
            if (ce[Ce] !== ot[Ue]) {
              if (Ce !== 1 || Ue !== 1)
                do
                  if (Ce--, Ue--, Ue < 0 || ce[Ce] !== ot[Ue]) {
                    var St = `
` + ce[Ce].replace(" at new ", " at ");
                    return _.displayName && St.includes("<anonymous>") && (St = St.replace("<anonymous>", _.displayName)), typeof _ == "function" && bt.set(_, St), St;
                  }
                while (Ce >= 1 && Ue >= 0);
              break;
            }
        }
      } finally {
        Pt = !1, ee.current = ye, ie(), Error.prepareStackTrace = ge;
      }
      var mn = _ ? _.displayName || _.name : "", Dr = mn ? dt(mn) : "";
      return typeof _ == "function" && bt.set(_, Dr), Dr;
    }
    function we(_, K, X) {
      return Fe(_, !1);
    }
    function _e(_) {
      var K = _.prototype;
      return !!(K && K.isReactComponent);
    }
    function pe(_, K, X) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return Fe(_, _e(_));
      if (typeof _ == "string")
        return dt(_);
      switch (_) {
        case m:
          return dt("Suspense");
        case p:
          return dt("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case f:
            return we(_.render);
          case w:
            return pe(_.type, K, X);
          case T: {
            var z = _, ge = z._payload, ye = z._init;
            try {
              return pe(ye(ge), K, X);
            } catch {
            }
          }
        }
      return "";
    }
    var gr = Object.prototype.hasOwnProperty, wi = {}, mi = j.ReactDebugCurrentFrame;
    function dn(_) {
      if (_) {
        var K = _._owner, X = pe(_.type, _._source, K ? K.type : null);
        mi.setExtraStackFrame(X);
      } else
        mi.setExtraStackFrame(null);
    }
    function _o(_, K, X, z, ge) {
      {
        var ye = Function.call.bind(gr);
        for (var le in _)
          if (ye(_, le)) {
            var ce = void 0;
            try {
              if (typeof _[le] != "function") {
                var ot = Error((z || "React class") + ": " + X + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ot.name = "Invariant Violation", ot;
              }
              ce = _[le](K, le, z, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ce) {
              ce = Ce;
            }
            ce && !(ce instanceof Error) && (dn(ge), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", X, le, typeof ce), dn(null)), ce instanceof Error && !(ce.message in wi) && (wi[ce.message] = !0, dn(ge), y("Failed %s type: %s", X, ce.message), dn(null));
          }
      }
    }
    var Io = Array.isArray;
    function Be(_) {
      return Io(_);
    }
    function tt(_) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, X = K && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return X;
      }
    }
    function yi(_) {
      try {
        return Un(_), !1;
      } catch {
        return !0;
      }
    }
    function Un(_) {
      return "" + _;
    }
    function Ln(_) {
      if (yi(_))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(_)), Un(_);
    }
    var wr = j.ReactCurrentOwner, Ai = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qt, pn, gn;
    gn = {};
    function Oo(_) {
      if (gr.call(_, "ref")) {
        var K = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function Ei(_) {
      if (gr.call(_, "key")) {
        var K = Object.getOwnPropertyDescriptor(_, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function mr(_, K) {
      if (typeof _.ref == "string" && wr.current && K && wr.current.stateNode !== K) {
        var X = P(wr.current.type);
        gn[X] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(wr.current.type), _.ref), gn[X] = !0);
      }
    }
    function Mr(_, K) {
      {
        var X = function() {
          Qt || (Qt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        X.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: X,
          configurable: !0
        });
      }
    }
    function ko(_, K) {
      {
        var X = function() {
          pn || (pn = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        X.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: X,
          configurable: !0
        });
      }
    }
    var xo = function(_, K, X, z, ge, ye, le) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: _,
        key: K,
        ref: X,
        props: le,
        // Record the component responsible for creating this element.
        _owner: ye
      };
      return ce._store = {}, Object.defineProperty(ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ge
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function Hn(_, K, X, z, ge) {
      {
        var ye, le = {}, ce = null, ot = null;
        X !== void 0 && (Ln(X), ce = "" + X), Ei(K) && (Ln(K.key), ce = "" + K.key), Oo(K) && (ot = K.ref, mr(K, ge));
        for (ye in K)
          gr.call(K, ye) && !Ai.hasOwnProperty(ye) && (le[ye] = K[ye]);
        if (_ && _.defaultProps) {
          var Ce = _.defaultProps;
          for (ye in Ce)
            le[ye] === void 0 && (le[ye] = Ce[ye]);
        }
        if (ce || ot) {
          var Ue = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          ce && Mr(le, Ue), ot && ko(le, Ue);
        }
        return xo(_, ce, ot, ge, z, wr.current, le);
      }
    }
    var Mn = j.ReactCurrentOwner, Pi = j.ReactDebugCurrentFrame;
    function zt(_) {
      if (_) {
        var K = _._owner, X = pe(_.type, _._source, K ? K.type : null);
        Pi.setExtraStackFrame(X);
      } else
        Pi.setExtraStackFrame(null);
    }
    var yr;
    yr = !1;
    function pt(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function wn() {
      {
        if (Mn.current) {
          var _ = P(Mn.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function Bo(_) {
      return "";
    }
    var xt = {};
    function Co(_) {
      {
        var K = wn();
        if (!K) {
          var X = typeof _ == "string" ? _ : _.displayName || _.name;
          X && (K = `

Check the top-level render call using <` + X + ">.");
        }
        return K;
      }
    }
    function g(_, K) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var X = Co(K);
        if (xt[X])
          return;
        xt[X] = !0;
        var z = "";
        _ && _._owner && _._owner !== Mn.current && (z = " It was passed a child from " + P(_._owner.type) + "."), zt(_), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, z), zt(null);
      }
    }
    function c(_, K) {
      {
        if (typeof _ != "object")
          return;
        if (Be(_))
          for (var X = 0; X < _.length; X++) {
            var z = _[X];
            pt(z) && g(z, K);
          }
        else if (pt(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var ge = C(_);
          if (typeof ge == "function" && ge !== _.entries)
            for (var ye = ge.call(_), le; !(le = ye.next()).done; )
              pt(le.value) && g(le.value, K);
        }
      }
    }
    function u(_) {
      {
        var K = _.type;
        if (K == null || typeof K == "string")
          return;
        var X;
        if (typeof K == "function")
          X = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === w))
          X = K.propTypes;
        else
          return;
        if (X) {
          var z = P(K);
          _o(X, _.props, "prop", z, _);
        } else if (K.PropTypes !== void 0 && !yr) {
          yr = !0;
          var ge = P(K);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ge || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function b(_) {
      {
        for (var K = Object.keys(_.props), X = 0; X < K.length; X++) {
          var z = K[X];
          if (z !== "children" && z !== "key") {
            zt(_), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), zt(null);
            break;
          }
        }
        _.ref !== null && (zt(_), y("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    var F = {};
    function $(_, K, X, z, ge, ye) {
      {
        var le = A(_);
        if (!le) {
          var ce = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = Bo();
          ot ? ce += ot : ce += wn();
          var Ce;
          _ === null ? Ce = "null" : Be(_) ? Ce = "array" : _ !== void 0 && _.$$typeof === t ? (Ce = "<" + (P(_.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof _, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, ce);
        }
        var Ue = Hn(_, K, X, ge, ye);
        if (Ue == null)
          return Ue;
        if (le) {
          var St = K.children;
          if (St !== void 0)
            if (z)
              if (Be(St)) {
                for (var mn = 0; mn < St.length; mn++)
                  c(St[mn], _);
                Object.freeze && Object.freeze(St);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              c(St, _);
        }
        if (gr.call(K, "key")) {
          var Dr = P(_), gt = Object.keys(K).filter(function(dl) {
            return dl !== "key";
          }), No = gt.length > 0 ? "{key: someKey, " + gt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!F[Dr + No]) {
            var hl = gt.length > 0 ? "{" + gt.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, No, Dr, hl, Dr), F[Dr + No] = !0;
          }
        }
        return _ === n ? b(Ue) : u(Ue), Ue;
      }
    }
    function V(_, K, X) {
      return $(_, K, X, !0);
    }
    function ne(_, K, X) {
      return $(_, K, X, !1);
    }
    var Ie = ne, Ee = V;
    $n.Fragment = n, $n.jsx = Ie, $n.jsxs = Ee;
  }()), $n;
}
mc.env.NODE_ENV === "production" ? ps.exports = Kl() : ps.exports = Wl();
var Y = ps.exports;
function Vl() {
  const [e, t] = Ae(!1);
  return be(() => {
    t(!0);
  }, []), e;
}
const Ac = "ord-connect";
function Gl(e) {
  typeof window > "u" && console.warn(
    `Attempted to read local storage key ${e} even though environment is not a browser.`
  );
  const t = `${Ac}_${e}`;
  try {
    const r = window.localStorage.getItem(t);
    return r != null ? JSON.parse(r) : null;
  } catch (r) {
    return console.error(`Error retrieving ${t} from localStorage`, r), null;
  }
}
function da(e, t) {
  typeof window > "u" && console.warn(
    `Attempted to set local storage key ${e} even though environment is not a browser.`
  );
  const r = `${Ac}_${e}`;
  try {
    t ? window.localStorage.setItem(r, JSON.stringify(t)) : window.localStorage.removeItem(r);
  } catch (n) {
    console.error(`Error saving ${r} to localStorage`, n);
  }
}
function bi(e, t, r = {}) {
  const { initializeWithValue: n = !0 } = r, i = nt(() => {
    const f = Gl(e);
    return f || (da(e, t), t);
  }, [t, e]), [s, o] = Ae(() => n ? i() : t), a = nt(
    (f) => {
      da(e, f), o(f);
    },
    [e]
  );
  return be(() => {
    o(i());
  }, [e]), [s, a];
}
var ni = /* @__PURE__ */ ((e) => (e.MAINNET = "mainnet", e.TESTNET = "testnet", e.SIGNET = "signet", e))(ni || {}), J = /* @__PURE__ */ ((e) => (e.UNISAT = "unisat", e.XVERSE = "xverse", e.MAGICEDEN = "magiceden", e.LEATHER = "leather", e.OKX = "okx", e))(J || {}), Vt = /* @__PURE__ */ ((e) => (e.BITCOIN = "bitcoin", e.FRACTAL_BITCOIN = "fractal-bitcoin", e))(Vt || {});
const yn = {
  payments: null,
  ordinals: null
}, Ec = Ft(
  void 0
), Xl = "address", ql = "wallet", Yl = "publicKey", Ql = "format";
function Q2({
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
  const [s, o] = Ae(t), [a, f] = Ae(r), [m, p] = Ae(n), [w, T] = bi(
    Xl,
    yn,
    { initializeWithValue: !i }
  ), [E, R] = bi(ql, null, {
    initializeWithValue: !i
  }), [B, C] = bi(
    Yl,
    yn,
    { initializeWithValue: !i }
  ), [j, y] = bi(
    Ql,
    yn,
    { initializeWithValue: !i }
  ), [S, I] = Ae(!1), L = nt(() => I(!0), []), N = nt(() => I(!1), []), D = nt(() => {
    T(yn), C(yn), y(yn), R(null);
  }, [T, y, C, R]), d = Me(
    () => ({
      address: w,
      updateAddress: T,
      publicKey: B,
      updatePublicKey: C,
      network: s,
      updateNetwork: (l) => {
        o(E === "xverse" && l === "testnet" ? "testnet4" : l);
      },
      wallet: E,
      updateWallet: (l) => {
        (s === "testnet" || s === "testnet4") && o(l === "xverse" ? "testnet4" : "testnet"), R(l);
      },
      isModalOpen: S,
      openModal: L,
      closeModal: N,
      format: j,
      updateFormat: y,
      disconnectWallet: D,
      chain: m,
      updateChain: p,
      visibleWallets: a,
      updateVisibleWallets: f
    }),
    [
      w,
      T,
      B,
      C,
      s,
      o,
      E,
      R,
      S,
      L,
      N,
      j,
      y,
      D,
      m,
      p
    ]
  );
  return be(() => {
    o(t);
  }, [t]), be(() => {
    m !== n && (D(), p(n));
  }, [n, m, D]), /* @__PURE__ */ Y.jsx(Ec.Provider, { value: d, children: e });
}
function Xt() {
  const e = yt(Ec);
  if (!e)
    throw new Error("useOrdConnect must be used within OrdConnectProvider");
  return e;
}
var Pc = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n(re);
  })(jl, function(r) {
    return function(n) {
      var i = {};
      function s(o) {
        if (i[o]) return i[o].exports;
        var a = i[o] = { i: o, l: !1, exports: {} };
        return n[o].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
      }
      return s.m = n, s.c = i, s.d = function(o, a, f) {
        s.o(o, a) || Object.defineProperty(o, a, { enumerable: !0, get: f });
      }, s.r = function(o) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
      }, s.t = function(o, a) {
        if (1 & a && (o = s(o)), 8 & a || 4 & a && typeof o == "object" && o && o.__esModule) return o;
        var f = /* @__PURE__ */ Object.create(null);
        if (s.r(f), Object.defineProperty(f, "default", { enumerable: !0, value: o }), 2 & a && typeof o != "string") for (var m in o) s.d(f, m, (function(p) {
          return o[p];
        }).bind(null, m));
        return f;
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
      function o(y, S) {
        if (y == null) return {};
        var I, L, N = function(d, l) {
          if (d == null) return {};
          var A, x, h = {}, P = Object.keys(d);
          for (x = 0; x < P.length; x++) A = P[x], l.indexOf(A) >= 0 || (h[A] = d[A]);
          return h;
        }(y, S);
        if (Object.getOwnPropertySymbols) {
          var D = Object.getOwnPropertySymbols(y);
          for (L = 0; L < D.length; L++) I = D[L], S.indexOf(I) >= 0 || Object.prototype.propertyIsEnumerable.call(y, I) && (N[I] = y[I]);
        }
        return N;
      }
      s.r(i);
      var a = s(0), f = s.n(a), m = function(y) {
        for (var S = 0, I = 0; I < y.length; I++)
          S = (S << 5) - S + y.charCodeAt(I), S &= S;
        return Math.abs(S);
      }, p = function(y, S) {
        return Math.floor(y / Math.pow(10, S) % 10);
      }, w = function(y, S) {
        return !(p(y, S) % 2);
      }, T = function(y, S, I) {
        var L = y % S;
        return I && p(y, I) % 2 === 0 ? -L : L;
      }, E = function(y, S, I) {
        return S[y % I];
      }, R = function(y) {
        var S = y.name, I = y.colors, L = y.title, N = y.square, D = y.size, d = o(y, ["name", "colors", "title", "square", "size"]), l = function(x, h) {
          var P = m(x), k = h && h.length;
          return Array.from({ length: 3 }, function(v, O) {
            return { color: E(P + O, h, k), translateX: T(P * (O + 1), 8, 1), translateY: T(P * (O + 1), 8, 2), scale: 1.2 + T(P * (O + 1), 4) / 10, rotate: T(P * (O + 1), 360, 1) };
          });
        }(S, I), A = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: D, height: D }, d), L && a.createElement("title", null, S), a.createElement("mask", { id: A, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, a.createElement("rect", { width: 80, height: 80, rx: N ? void 0 : 160, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(A, ")") }, a.createElement("rect", { width: 80, height: 80, fill: l[0].color }), a.createElement("path", { filter: "url(#filter_".concat(A, ")"), d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z", fill: l[1].color, transform: "translate(" + l[1].translateX + " " + l[1].translateY + ") rotate(" + l[1].rotate + " 40 40) scale(" + l[2].scale + ")" }), a.createElement("path", { filter: "url(#filter_".concat(A, ")"), style: { mixBlendMode: "overlay" }, d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z", fill: l[2].color, transform: "translate(" + l[2].translateX + " " + l[2].translateY + ") rotate(" + l[2].rotate + " 40 40) scale(" + l[2].scale + ")" })), a.createElement("defs", null, a.createElement("filter", { id: "filter_".concat(A), filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, a.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), a.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), a.createElement("feGaussianBlur", { stdDeviation: 7, result: "effect1_foregroundBlur" }))));
      }, B = { pixel: function(y) {
        var S = y.name, I = y.colors, L = y.title, N = y.square, D = y.size, d = o(y, ["name", "colors", "title", "square", "size"]), l = function(x, h) {
          var P = m(x), k = h && h.length;
          return Array.from({ length: 64 }, function(v, O) {
            return E(P % (O + 1), h, k);
          });
        }(S, I), A = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: D, height: D }, d), L && a.createElement("title", null, S), a.createElement("mask", { id: A, "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, a.createElement("rect", { width: 80, height: 80, rx: N ? void 0 : 160, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(A, ")") }, a.createElement("rect", { width: 10, height: 10, fill: l[0] }), a.createElement("rect", { x: 20, width: 10, height: 10, fill: l[1] }), a.createElement("rect", { x: 40, width: 10, height: 10, fill: l[2] }), a.createElement("rect", { x: 60, width: 10, height: 10, fill: l[3] }), a.createElement("rect", { x: 10, width: 10, height: 10, fill: l[4] }), a.createElement("rect", { x: 30, width: 10, height: 10, fill: l[5] }), a.createElement("rect", { x: 50, width: 10, height: 10, fill: l[6] }), a.createElement("rect", { x: 70, width: 10, height: 10, fill: l[7] }), a.createElement("rect", { y: 10, width: 10, height: 10, fill: l[8] }), a.createElement("rect", { y: 20, width: 10, height: 10, fill: l[9] }), a.createElement("rect", { y: 30, width: 10, height: 10, fill: l[10] }), a.createElement("rect", { y: 40, width: 10, height: 10, fill: l[11] }), a.createElement("rect", { y: 50, width: 10, height: 10, fill: l[12] }), a.createElement("rect", { y: 60, width: 10, height: 10, fill: l[13] }), a.createElement("rect", { y: 70, width: 10, height: 10, fill: l[14] }), a.createElement("rect", { x: 20, y: 10, width: 10, height: 10, fill: l[15] }), a.createElement("rect", { x: 20, y: 20, width: 10, height: 10, fill: l[16] }), a.createElement("rect", { x: 20, y: 30, width: 10, height: 10, fill: l[17] }), a.createElement("rect", { x: 20, y: 40, width: 10, height: 10, fill: l[18] }), a.createElement("rect", { x: 20, y: 50, width: 10, height: 10, fill: l[19] }), a.createElement("rect", { x: 20, y: 60, width: 10, height: 10, fill: l[20] }), a.createElement("rect", { x: 20, y: 70, width: 10, height: 10, fill: l[21] }), a.createElement("rect", { x: 40, y: 10, width: 10, height: 10, fill: l[22] }), a.createElement("rect", { x: 40, y: 20, width: 10, height: 10, fill: l[23] }), a.createElement("rect", { x: 40, y: 30, width: 10, height: 10, fill: l[24] }), a.createElement("rect", { x: 40, y: 40, width: 10, height: 10, fill: l[25] }), a.createElement("rect", { x: 40, y: 50, width: 10, height: 10, fill: l[26] }), a.createElement("rect", { x: 40, y: 60, width: 10, height: 10, fill: l[27] }), a.createElement("rect", { x: 40, y: 70, width: 10, height: 10, fill: l[28] }), a.createElement("rect", { x: 60, y: 10, width: 10, height: 10, fill: l[29] }), a.createElement("rect", { x: 60, y: 20, width: 10, height: 10, fill: l[30] }), a.createElement("rect", { x: 60, y: 30, width: 10, height: 10, fill: l[31] }), a.createElement("rect", { x: 60, y: 40, width: 10, height: 10, fill: l[32] }), a.createElement("rect", { x: 60, y: 50, width: 10, height: 10, fill: l[33] }), a.createElement("rect", { x: 60, y: 60, width: 10, height: 10, fill: l[34] }), a.createElement("rect", { x: 60, y: 70, width: 10, height: 10, fill: l[35] }), a.createElement("rect", { x: 10, y: 10, width: 10, height: 10, fill: l[36] }), a.createElement("rect", { x: 10, y: 20, width: 10, height: 10, fill: l[37] }), a.createElement("rect", { x: 10, y: 30, width: 10, height: 10, fill: l[38] }), a.createElement("rect", { x: 10, y: 40, width: 10, height: 10, fill: l[39] }), a.createElement("rect", { x: 10, y: 50, width: 10, height: 10, fill: l[40] }), a.createElement("rect", { x: 10, y: 60, width: 10, height: 10, fill: l[41] }), a.createElement("rect", { x: 10, y: 70, width: 10, height: 10, fill: l[42] }), a.createElement("rect", { x: 30, y: 10, width: 10, height: 10, fill: l[43] }), a.createElement("rect", { x: 30, y: 20, width: 10, height: 10, fill: l[44] }), a.createElement("rect", { x: 30, y: 30, width: 10, height: 10, fill: l[45] }), a.createElement("rect", { x: 30, y: 40, width: 10, height: 10, fill: l[46] }), a.createElement("rect", { x: 30, y: 50, width: 10, height: 10, fill: l[47] }), a.createElement("rect", { x: 30, y: 60, width: 10, height: 10, fill: l[48] }), a.createElement("rect", { x: 30, y: 70, width: 10, height: 10, fill: l[49] }), a.createElement("rect", { x: 50, y: 10, width: 10, height: 10, fill: l[50] }), a.createElement("rect", { x: 50, y: 20, width: 10, height: 10, fill: l[51] }), a.createElement("rect", { x: 50, y: 30, width: 10, height: 10, fill: l[52] }), a.createElement("rect", { x: 50, y: 40, width: 10, height: 10, fill: l[53] }), a.createElement("rect", { x: 50, y: 50, width: 10, height: 10, fill: l[54] }), a.createElement("rect", { x: 50, y: 60, width: 10, height: 10, fill: l[55] }), a.createElement("rect", { x: 50, y: 70, width: 10, height: 10, fill: l[56] }), a.createElement("rect", { x: 70, y: 10, width: 10, height: 10, fill: l[57] }), a.createElement("rect", { x: 70, y: 20, width: 10, height: 10, fill: l[58] }), a.createElement("rect", { x: 70, y: 30, width: 10, height: 10, fill: l[59] }), a.createElement("rect", { x: 70, y: 40, width: 10, height: 10, fill: l[60] }), a.createElement("rect", { x: 70, y: 50, width: 10, height: 10, fill: l[61] }), a.createElement("rect", { x: 70, y: 60, width: 10, height: 10, fill: l[62] }), a.createElement("rect", { x: 70, y: 70, width: 10, height: 10, fill: l[63] })));
      }, bauhaus: function(y) {
        var S = y.name, I = y.colors, L = y.title, N = y.square, D = y.size, d = o(y, ["name", "colors", "title", "square", "size"]), l = function(x, h) {
          var P = m(x), k = h && h.length;
          return Array.from({ length: 4 }, function(v, O) {
            return { color: E(P + O, h, k), translateX: T(P * (O + 1), 40 - (O + 17), 1), translateY: T(P * (O + 1), 40 - (O + 17), 2), rotate: T(P * (O + 1), 360), isSquare: w(P, 2) };
          });
        }(S, I), A = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: D, height: D }, d), L && a.createElement("title", null, S), a.createElement("mask", { id: A, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, a.createElement("rect", { width: 80, height: 80, rx: N ? void 0 : 160, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(A, ")") }, a.createElement("rect", { width: 80, height: 80, fill: l[0].color }), a.createElement("rect", { x: 10, y: 30, width: 80, height: l[1].isSquare ? 80 : 10, fill: l[1].color, transform: "translate(" + l[1].translateX + " " + l[1].translateY + ") rotate(" + l[1].rotate + " 40 40)" }), a.createElement("circle", { cx: 40, cy: 40, fill: l[2].color, r: 16, transform: "translate(" + l[2].translateX + " " + l[2].translateY + ")" }), a.createElement("line", { x1: 0, y1: 40, x2: 80, y2: 40, strokeWidth: 2, stroke: l[3].color, transform: "translate(" + l[3].translateX + " " + l[3].translateY + ") rotate(" + l[3].rotate + " 40 40)" })));
      }, ring: function(y) {
        var S = y.name, I = y.colors, L = y.title, N = y.square, D = y.size, d = o(y, ["name", "colors", "title", "square", "size"]), l = function(x, h) {
          var P = m(h), k = x && x.length, v = Array.from({ length: 5 }, function(U, H) {
            return E(P + H, x, k);
          }), O = [];
          return O[0] = v[0], O[1] = v[1], O[2] = v[1], O[3] = v[2], O[4] = v[2], O[5] = v[3], O[6] = v[3], O[7] = v[0], O[8] = v[4], O;
        }(I, S), A = f.a.useId();
        return f.a.createElement("svg", Object.assign({ viewBox: "0 0 90 90", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: D, height: D }, d), L && f.a.createElement("title", null, S), f.a.createElement("mask", { id: A, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 90, height: 90 }, f.a.createElement("rect", { width: 90, height: 90, rx: N ? void 0 : 180, fill: "#FFFFFF" })), f.a.createElement("g", { mask: "url(#".concat(A, ")") }, f.a.createElement("path", { d: "M0 0h90v45H0z", fill: l[0] }), f.a.createElement("path", { d: "M0 45h90v45H0z", fill: l[1] }), f.a.createElement("path", { d: "M83 45a38 38 0 00-76 0h76z", fill: l[2] }), f.a.createElement("path", { d: "M83 45a38 38 0 01-76 0h76z", fill: l[3] }), f.a.createElement("path", { d: "M77 45a32 32 0 10-64 0h64z", fill: l[4] }), f.a.createElement("path", { d: "M77 45a32 32 0 11-64 0h64z", fill: l[5] }), f.a.createElement("path", { d: "M71 45a26 26 0 00-52 0h52z", fill: l[6] }), f.a.createElement("path", { d: "M71 45a26 26 0 01-52 0h52z", fill: l[7] }), f.a.createElement("circle", { cx: 45, cy: 45, r: 23, fill: l[8] })));
      }, beam: function(y) {
        var S = y.name, I = y.colors, L = y.title, N = y.square, D = y.size, d = o(y, ["name", "colors", "title", "square", "size"]), l = function(x, h) {
          var P, k = m(x), v = h && h.length, O = E(k, h, v), U = T(k, 10, 1), H = U < 5 ? U + 4 : U, W = T(k, 10, 2), G = W < 5 ? W + 4 : W;
          return { wrapperColor: O, faceColor: (P = O, P.slice(0, 1) === "#" && (P = P.slice(1)), (299 * parseInt(P.substr(0, 2), 16) + 587 * parseInt(P.substr(2, 2), 16) + 114 * parseInt(P.substr(4, 2), 16)) / 1e3 >= 128 ? "#000000" : "#FFFFFF"), backgroundColor: E(k + 13, h, v), wrapperTranslateX: H, wrapperTranslateY: G, wrapperRotate: T(k, 360), wrapperScale: 1 + T(k, 3) / 10, isMouthOpen: w(k, 2), isCircle: w(k, 1), eyeSpread: T(k, 5), mouthSpread: T(k, 3), faceRotate: T(k, 10, 3), faceTranslateX: H > 6 ? H / 2 : T(k, 8, 1), faceTranslateY: G > 6 ? G / 2 : T(k, 7, 2) };
        }(S, I), A = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 36 36", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: D, height: D }, d), L && a.createElement("title", null, S), a.createElement("mask", { id: A, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 36, height: 36 }, a.createElement("rect", { width: 36, height: 36, rx: N ? void 0 : 72, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(A, ")") }, a.createElement("rect", { width: 36, height: 36, fill: l.backgroundColor }), a.createElement("rect", { x: "0", y: "0", width: 36, height: 36, transform: "translate(" + l.wrapperTranslateX + " " + l.wrapperTranslateY + ") rotate(" + l.wrapperRotate + " 18 18) scale(" + l.wrapperScale + ")", fill: l.wrapperColor, rx: l.isCircle ? 36 : 6 }), a.createElement("g", { transform: "translate(" + l.faceTranslateX + " " + l.faceTranslateY + ") rotate(" + l.faceRotate + " 18 18)" }, l.isMouthOpen ? a.createElement("path", { d: "M15 " + (19 + l.mouthSpread) + "c2 1 4 1 6 0", stroke: l.faceColor, fill: "none", strokeLinecap: "round" }) : a.createElement("path", { d: "M13," + (19 + l.mouthSpread) + " a1,0.75 0 0,0 10,0", fill: l.faceColor }), a.createElement("rect", { x: 14 - l.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: l.faceColor }), a.createElement("rect", { x: 20 + l.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: l.faceColor }))));
      }, sunset: function(y) {
        var S = y.name, I = y.colors, L = y.title, N = y.square, D = y.size, d = o(y, ["name", "colors", "title", "square", "size"]), l = function(h, P) {
          var k = m(h), v = P && P.length;
          return Array.from({ length: 4 }, function(O, U) {
            return E(k + U, P, v);
          });
        }(S, I), A = S.replace(/\s/g, ""), x = a.useId();
        return a.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: D, height: D }, d), L && a.createElement("title", null, S), a.createElement("mask", { id: x, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, a.createElement("rect", { width: 80, height: 80, rx: N ? void 0 : 160, fill: "#FFFFFF" })), a.createElement("g", { mask: "url(#".concat(x, ")") }, a.createElement("path", { fill: "url(#gradient_paint0_linear_" + A + ")", d: "M0 0h80v40H0z" }), a.createElement("path", { fill: "url(#gradient_paint1_linear_" + A + ")", d: "M0 40h80v40H0z" })), a.createElement("defs", null, a.createElement("linearGradient", { id: "gradient_paint0_linear_" + A, x1: 40, y1: 0, x2: 40, y2: 40, gradientUnits: "userSpaceOnUse" }, a.createElement("stop", { stopColor: l[0] }), a.createElement("stop", { offset: 1, stopColor: l[1] })), a.createElement("linearGradient", { id: "gradient_paint1_linear_" + A, x1: 40, y1: 40, x2: 40, y2: 80, gradientUnits: "userSpaceOnUse" }, a.createElement("stop", { stopColor: l[2] }), a.createElement("stop", { offset: 1, stopColor: l[3] }))));
      }, marble: R }, C = { geometric: "beam", abstract: "bauhaus" }, j = function(y) {
        var S = y.variant, I = S === void 0 ? "marble" : S, L = y.colors, N = L === void 0 ? ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"] : L, D = y.name, d = D === void 0 ? "Clara Barton" : D, l = y.title, A = l !== void 0 && l, x = y.size, h = y.square, P = h !== void 0 && h, k = o(y, ["variant", "colors", "name", "title", "size", "square"]), v = B[C[I] || I] || R;
        return f.a.createElement(v, Object.assign({ colors: N, name: d, title: A, size: x, square: P }, k));
      };
      i.default = j;
    }]);
  });
})(Pc);
var zl = Pc.exports;
const bc = /* @__PURE__ */ yc(zl);
var Jl = Object.defineProperty, Zl = (e, t, r) => t in e ? Jl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ro = (e, t, r) => (Zl(e, typeof t != "symbol" ? t + "" : t, r), r);
let ef = class {
  constructor() {
    Ro(this, "current", this.detect()), Ro(this, "handoffState", "pending"), Ro(this, "currentId", 0);
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
}, ar = new ef(), Ge = (e, t) => {
  ar.isServer ? be(e, t) : pl(e, t);
};
function cr(e) {
  let t = he(e);
  return Ge(() => {
    t.current = e;
  }, [e]), t;
}
let ae = function(e) {
  let t = cr(e);
  return re.useCallback((...r) => t.current(...r), [t]);
};
function eo(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Rt() {
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
    return eo(() => {
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
    let n = Rt();
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
function ui() {
  let [e] = Ae(Rt);
  return be(() => () => e.dispose(), [e]), e;
}
function tf() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Br ? ((t) => t.useSyncExternalStore)(Br)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Nn() {
  let e = tf(), [t, r] = Br.useState(ar.isHandoffComplete);
  return t && ar.isHandoffComplete === !1 && r(!1), Br.useEffect(() => {
    t !== !0 && r(!0);
  }, [t]), Br.useEffect(() => ar.handoff(), []), e ? !1 : t;
}
var pa;
let pr = (pa = re.useId) != null ? pa : function() {
  let e = Nn(), [t, r] = re.useState(e ? () => ar.nextId() : null);
  return Ge(() => {
    t === null && r(ar.nextId());
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
function to(e) {
  return ar.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
let gs = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ir = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ir || {}), Sc = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Sc || {}), rf = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(rf || {});
function vc(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(gs)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Cs = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Cs || {});
function Ns(e, t = 0) {
  var r;
  return e === ((r = to(e)) == null ? void 0 : r.body) ? !1 : Ve(t, { 0() {
    return e.matches(gs);
  }, 1() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(gs)) return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function Tc(e) {
  let t = to(e);
  Rt().nextFrame(() => {
    t && !Ns(t.activeElement, 0) && Cr(e);
  });
}
var nf = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(nf || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Cr(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let of = ["textarea", "input"].join(",");
function sf(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, of)) != null ? r : !1;
}
function _c(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), s = t(n);
    if (i === null || s === null) return 0;
    let o = i.compareDocumentPosition(s);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function af(e, t) {
  return ii(vc(), t, { relativeTo: e });
}
function ii(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  let s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, o = Array.isArray(e) ? r ? _c(e) : e : vc(e);
  i.length > 0 && o.length > 1 && (o = o.filter((E) => !i.includes(E))), n = n ?? s.activeElement;
  let a = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, o.indexOf(n)) - 1;
    if (t & 4) return Math.max(0, o.indexOf(n)) + 1;
    if (t & 8) return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), m = t & 32 ? { preventScroll: !0 } : {}, p = 0, w = o.length, T;
  do {
    if (p >= w || p + w <= 0) return 0;
    let E = f + p;
    if (t & 16) E = (E + w) % w;
    else {
      if (E < 0) return 3;
      if (E >= w) return 1;
    }
    T = o[E], T == null || T.focus(m), p += a;
  } while (T !== s.activeElement);
  return t & 6 && sf(T) && T.select(), 2;
}
function Ic() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function cf() {
  return /Android/gi.test(window.navigator.userAgent);
}
function uf() {
  return Ic() || cf();
}
function Si(e, t, r) {
  let n = cr(t);
  be(() => {
    function i(s) {
      n.current(s);
    }
    return document.addEventListener(e, i, r), () => document.removeEventListener(e, i, r);
  }, [e, r]);
}
function Oc(e, t, r) {
  let n = cr(t);
  be(() => {
    function i(s) {
      n.current(s);
    }
    return window.addEventListener(e, i, r), () => window.removeEventListener(e, i, r);
  }, [e, r]);
}
function kc(e, t, r = !0) {
  let n = he(!1);
  be(() => {
    requestAnimationFrame(() => {
      n.current = r;
    });
  }, [r]);
  function i(o, a) {
    if (!n.current || o.defaultPrevented) return;
    let f = a(o);
    if (f === null || !f.getRootNode().contains(f) || !f.isConnected) return;
    let m = function p(w) {
      return typeof w == "function" ? p(w()) : Array.isArray(w) || w instanceof Set ? w : [w];
    }(e);
    for (let p of m) {
      if (p === null) continue;
      let w = p instanceof HTMLElement ? p : p.current;
      if (w != null && w.contains(f) || o.composed && o.composedPath().includes(w)) return;
    }
    return !Ns(f, Cs.Loose) && f.tabIndex !== -1 && o.preventDefault(), t(o, f);
  }
  let s = he(null);
  Si("pointerdown", (o) => {
    var a, f;
    n.current && (s.current = ((f = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : f[0]) || o.target);
  }, !0), Si("mousedown", (o) => {
    var a, f;
    n.current && (s.current = ((f = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : f[0]) || o.target);
  }, !0), Si("click", (o) => {
    uf() || s.current && (i(o, () => s.current), s.current = null);
  }, !0), Si("touchend", (o) => i(o, () => o.target instanceof HTMLElement ? o.target : null), !0), Oc("blur", (o) => i(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Rn(...e) {
  return Me(() => to(...e), [...e]);
}
function ga(e) {
  var t;
  if (e.type) return e.type;
  let r = (t = e.as) != null ? t : "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function lf(e, t) {
  let [r, n] = Ae(() => ga(e));
  return Ge(() => {
    n(ga(e));
  }, [e.type, e.as]), Ge(() => {
    r || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && n("button");
  }, [r, t]), r;
}
let xc = Symbol();
function ff(e, t = !0) {
  return Object.assign(e, { [xc]: t });
}
function ft(...e) {
  let t = he(e);
  be(() => {
    t.current = e;
  }, [e]);
  let r = ae((n) => {
    for (let i of t.current) i != null && (typeof i == "function" ? i(n) : i.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[xc])) ? void 0 : r;
}
function wa(e) {
  return [e.screenX, e.screenY];
}
function hf() {
  let e = he([-1, -1]);
  return { wasMoved(t) {
    let r = wa(t);
    return e.current[0] === r[0] && e.current[1] === r[1] ? !1 : (e.current = r, !0);
  }, update(t) {
    e.current = wa(t);
  } };
}
function df({ container: e, accept: t, walk: r, enabled: n = !0 }) {
  let i = he(t), s = he(r);
  be(() => {
    i.current = t, s.current = r;
  }, [t, r]), Ge(() => {
    if (!e || !n) return;
    let o = to(e);
    if (!o) return;
    let a = i.current, f = s.current, m = Object.assign((w) => a(w), { acceptNode: a }), p = o.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, m, !1);
    for (; p.nextNode(); ) f(p.currentNode);
  }, [e, n, i, s]);
}
function Rs(e, t) {
  let r = he([]), n = ae(e);
  be(() => {
    let i = [...r.current];
    for (let [s, o] of t.entries()) if (r.current[s] !== o) {
      let a = n(t, i);
      return r.current = t, a;
    }
  }, [n, ...t]);
}
function Ki(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var xn = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(xn || {}), kr = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(kr || {});
function it({ ourProps: e, theirProps: t, slot: r, defaultTag: n, features: i, visible: s = !0, name: o, mergeRefs: a }) {
  a = a ?? pf;
  let f = Bc(t, e);
  if (s) return vi(f, r, n, o, a);
  let m = i ?? 0;
  if (m & 2) {
    let { static: p = !1, ...w } = f;
    if (p) return vi(w, r, n, o, a);
  }
  if (m & 1) {
    let { unmount: p = !0, ...w } = f;
    return Ve(p ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return vi({ ...w, hidden: !0, style: { display: "none" } }, r, n, o, a);
    } });
  }
  return vi(f, r, n, o, a);
}
function vi(e, t = {}, r, n, i) {
  let { as: s = r, children: o, refName: a = "ref", ...f } = Fo(e, ["unmount", "static"]), m = e.ref !== void 0 ? { [a]: e.ref } : {}, p = typeof o == "function" ? o(t) : o;
  "className" in f && f.className && typeof f.className == "function" && (f.className = f.className(t));
  let w = {};
  if (t) {
    let T = !1, E = [];
    for (let [R, B] of Object.entries(t)) typeof B == "boolean" && (T = !0), B === !0 && E.push(R);
    T && (w["data-headlessui-state"] = E.join(" "));
  }
  if (s === mt && Object.keys(ma(f)).length > 0) {
    if (!wl(p) || Array.isArray(p) && p.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(f).map((B) => `  - ${B}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((B) => `  - ${B}`).join(`
`)].join(`
`));
    let T = p.props, E = typeof (T == null ? void 0 : T.className) == "function" ? (...B) => Ki(T == null ? void 0 : T.className(...B), f.className) : Ki(T == null ? void 0 : T.className, f.className), R = E ? { className: E } : {};
    return ml(p, Object.assign({}, Bc(p.props, ma(Fo(f, ["ref"]))), w, m, { ref: i(p.ref, m.ref) }, R));
  }
  return yl(s, Object.assign({}, Fo(f, ["ref"]), s !== mt && m, s !== mt && w), p);
}
function pf(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e) r != null && (typeof r == "function" ? r(t) : r.current = t);
  };
}
function Bc(...e) {
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
function Ze(e) {
  var t;
  return Object.assign(gl(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function ma(e) {
  let t = Object.assign({}, e);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function Fo(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t) n in r && delete r[n];
  return r;
}
let gf = "div";
var Wi = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Wi || {});
function wf(e, t) {
  var r;
  let { features: n = 1, ...i } = e, s = { ref: t, "aria-hidden": (n & 2) === 2 ? !0 : (r = i["aria-hidden"]) != null ? r : void 0, hidden: (n & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return it({ ourProps: s, theirProps: i, slot: {}, defaultTag: gf, name: "Hidden" });
}
let ws = Ze(wf), Fs = Ft(null);
Fs.displayName = "OpenClosedContext";
var Je = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Je || {});
function ro() {
  return yt(Fs);
}
function Cc({ value: e, children: t }) {
  return re.createElement(Fs.Provider, { value: e }, t);
}
function mf(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Or = [];
mf(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Or[0] !== t.target && (Or.unshift(t.target), Or = Or.filter((r) => r != null && r.isConnected), Or.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Nc(e) {
  let t = e.parentElement, r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
  let n = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return n && yf(r) ? !1 : n;
}
function yf(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
function Af(e) {
  throw new Error("Unexpected object: " + e);
}
var Nt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Nt || {});
function Ef(e, t) {
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
      Af(e);
  }
}
var Ke = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ke || {});
function Rc(e, t, r, n) {
  let i = cr(r);
  be(() => {
    e = e ?? window;
    function s(o) {
      i.current(o);
    }
    return e.addEventListener(t, s, n), () => e.removeEventListener(t, s, n);
  }, [e, t, n]);
}
function li() {
  let e = he(!1);
  return Ge(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Fc(e) {
  let t = ae(e), r = he(!1);
  be(() => (r.current = !1, () => {
    r.current = !0, eo(() => {
      r.current && t();
    });
  }), [t]);
}
var zn = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(zn || {});
function Pf() {
  let e = he(0);
  return Oc("keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Uc(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let r of e.current) r.current instanceof HTMLElement && t.add(r.current);
  return t;
}
let bf = "div";
var Lc = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Lc || {});
function Sf(e, t) {
  let r = he(null), n = ft(r, t), { initialFocus: i, containers: s, features: o = 30, ...a } = e;
  Nn() || (o = 1);
  let f = Rn(r);
  _f({ ownerDocument: f }, !!(o & 16));
  let m = If({ ownerDocument: f, container: r, initialFocus: i }, !!(o & 2));
  Of({ ownerDocument: f, container: r, containers: s, previousActiveElement: m }, !!(o & 8));
  let p = Pf(), w = ae((B) => {
    let C = r.current;
    C && ((j) => j())(() => {
      Ve(p.current, { [zn.Forwards]: () => {
        ii(C, ir.First, { skipElements: [B.relatedTarget] });
      }, [zn.Backwards]: () => {
        ii(C, ir.Last, { skipElements: [B.relatedTarget] });
      } });
    });
  }), T = ui(), E = he(!1), R = { ref: n, onKeyDown(B) {
    B.key == "Tab" && (E.current = !0, T.requestAnimationFrame(() => {
      E.current = !1;
    }));
  }, onBlur(B) {
    let C = Uc(s);
    r.current instanceof HTMLElement && C.add(r.current);
    let j = B.relatedTarget;
    j instanceof HTMLElement && j.dataset.headlessuiFocusGuard !== "true" && (Hc(C, j) || (E.current ? ii(r.current, Ve(p.current, { [zn.Forwards]: () => ir.Next, [zn.Backwards]: () => ir.Previous }) | ir.WrapAround, { relativeTo: B.target }) : B.target instanceof HTMLElement && Cr(B.target)));
  } };
  return re.createElement(re.Fragment, null, !!(o & 4) && re.createElement(ws, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: w, features: Wi.Focusable }), it({ ourProps: R, theirProps: a, defaultTag: bf, name: "FocusTrap" }), !!(o & 4) && re.createElement(ws, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: w, features: Wi.Focusable }));
}
let vf = Ze(Sf), jn = Object.assign(vf, { features: Lc });
function Tf(e = !0) {
  let t = he(Or.slice());
  return Rs(([r], [n]) => {
    n === !0 && r === !1 && eo(() => {
      t.current.splice(0);
    }), n === !1 && r === !0 && (t.current = Or.slice());
  }, [e, Or, t]), ae(() => {
    var r;
    return (r = t.current.find((n) => n != null && n.isConnected)) != null ? r : null;
  });
}
function _f({ ownerDocument: e }, t) {
  let r = Tf(t);
  Rs(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && Cr(r());
  }, [t]), Fc(() => {
    t && Cr(r());
  });
}
function If({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = he(null), s = li();
  return Rs(() => {
    if (!n) return;
    let o = t.current;
    o && eo(() => {
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
      r != null && r.current ? Cr(r.current) : ii(o, ir.First) === Sc.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = e == null ? void 0 : e.activeElement;
    });
  }, [n]), i;
}
function Of({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  let s = li();
  Rc(e == null ? void 0 : e.defaultView, "focus", (o) => {
    if (!i || !s.current) return;
    let a = Uc(r);
    t.current instanceof HTMLElement && a.add(t.current);
    let f = n.current;
    if (!f) return;
    let m = o.target;
    m && m instanceof HTMLElement ? Hc(a, m) ? (n.current = m, Cr(m)) : (o.preventDefault(), o.stopPropagation(), Cr(f)) : Cr(n.current);
  }, !0);
}
function Hc(e, t) {
  for (let r of e) if (r.contains(t)) return !0;
  return !1;
}
let Mc = Ft(!1);
function kf() {
  return yt(Mc);
}
function ms(e) {
  return re.createElement(Mc.Provider, { value: e.force }, e.children);
}
function xf(e) {
  let t = kf(), r = yt(Dc), n = Rn(e), [i, s] = Ae(() => {
    if (!t && r !== null || ar.isServer) return null;
    let o = n == null ? void 0 : n.getElementById("headlessui-portal-root");
    if (o) return o;
    if (n === null) return null;
    let a = n.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(a);
  });
  return be(() => {
    i !== null && (n != null && n.body.contains(i) || n == null || n.body.appendChild(i));
  }, [i, n]), be(() => {
    t || r !== null && s(r.current);
  }, [r, s, t]), i;
}
let Bf = mt;
function Cf(e, t) {
  let r = e, n = he(null), i = ft(ff((p) => {
    n.current = p;
  }), t), s = Rn(n), o = xf(n), [a] = Ae(() => {
    var p;
    return ar.isServer ? null : (p = s == null ? void 0 : s.createElement("div")) != null ? p : null;
  }), f = yt(ys), m = Nn();
  return Ge(() => {
    !o || !a || o.contains(a) || (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a));
  }, [o, a]), Ge(() => {
    if (a && f) return f.register(a);
  }, [f, a]), Fc(() => {
    var p;
    !o || !a || (a instanceof Node && o.contains(a) && o.removeChild(a), o.childNodes.length <= 0 && ((p = o.parentElement) == null || p.removeChild(o)));
  }), m ? !o || !a ? null : Ll(it({ ourProps: { ref: i }, theirProps: r, defaultTag: Bf, name: "Portal" }), a) : null;
}
let Nf = mt, Dc = Ft(null);
function Rf(e, t) {
  let { target: r, ...n } = e, i = { ref: ft(t) };
  return re.createElement(Dc.Provider, { value: r }, it({ ourProps: i, theirProps: n, defaultTag: Nf, name: "Popover.Group" }));
}
let ys = Ft(null);
function Ff() {
  let e = yt(ys), t = he([]), r = ae((s) => (t.current.push(s), e && e.register(s), () => n(s))), n = ae((s) => {
    let o = t.current.indexOf(s);
    o !== -1 && t.current.splice(o, 1), e && e.unregister(s);
  }), i = Me(() => ({ register: r, unregister: n, portals: t }), [r, n, t]);
  return [t, Me(() => function({ children: s }) {
    return re.createElement(ys.Provider, { value: i }, s);
  }, [i])];
}
let Uf = Ze(Cf), Lf = Ze(Rf), As = Object.assign(Uf, { Group: Lf });
function Hf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const Mf = typeof Object.is == "function" ? Object.is : Hf, { useState: Df, useEffect: $f, useLayoutEffect: jf, useDebugValue: Kf } = Br;
function Wf(e, t, r) {
  const n = t(), [{ inst: i }, s] = Df({ inst: { value: n, getSnapshot: t } });
  return jf(() => {
    i.value = n, i.getSnapshot = t, Uo(i) && s({ inst: i });
  }, [e, n, t]), $f(() => (Uo(i) && s({ inst: i }), e(() => {
    Uo(i) && s({ inst: i });
  })), [e]), Kf(n), n;
}
function Uo(e) {
  const t = e.getSnapshot, r = e.value;
  try {
    const n = t();
    return !Mf(r, n);
  } catch {
    return !0;
  }
}
function Vf(e, t, r) {
  return t();
}
const Gf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xf = !Gf, qf = Xf ? Vf : Wf, Yf = "useSyncExternalStore" in Br ? ((e) => e.useSyncExternalStore)(Br) : qf;
function Qf(e) {
  return Yf(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function zf(e, t) {
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
function Jf() {
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
function Zf() {
  return Ic() ? { before({ doc: e, d: t, meta: r }) {
    function n(i) {
      return r.containers.flatMap((s) => s()).some((s) => s.contains(i));
    }
    t.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let a = Rt();
        a.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => a.dispose()));
      }
      let s = (i = window.scrollY) != null ? i : window.pageYOffset, o = null;
      t.addEventListener(e, "click", (a) => {
        if (a.target instanceof HTMLElement) try {
          let f = a.target.closest("a");
          if (!f) return;
          let { hash: m } = new URL(f.href), p = e.querySelector(m);
          p && !n(p) && (o = p);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (a) => {
        if (a.target instanceof HTMLElement) if (n(a.target)) {
          let f = a.target;
          for (; f.parentElement && n(f.parentElement); ) f = f.parentElement;
          t.style(f, "overscrollBehavior", "contain");
        } else t.style(a.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (a) => {
        if (a.target instanceof HTMLElement) if (n(a.target)) {
          let f = a.target;
          for (; f.parentElement && f.dataset.headlessuiPortal !== "" && !(f.scrollHeight > f.clientHeight || f.scrollWidth > f.clientWidth); ) f = f.parentElement;
          f.dataset.headlessuiPortal === "" && a.preventDefault();
        } else a.preventDefault();
      }, { passive: !1 }), t.add(() => {
        var a;
        let f = (a = window.scrollY) != null ? a : window.pageYOffset;
        s !== f && window.scrollTo(0, s), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
      });
    });
  } } : {};
}
function e0() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function t0(e) {
  let t = {};
  for (let r of e) Object.assign(t, r(t));
  return t;
}
let Gr = zf(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: Rt(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: t0(r) }, i = [Zf(), Jf(), e0()];
  i.forEach(({ before: s }) => s == null ? void 0 : s(n)), i.forEach(({ after: s }) => s == null ? void 0 : s(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Gr.subscribe(() => {
  let e = Gr.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e) t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && Gr.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && Gr.dispatch("TEARDOWN", r);
  }
});
function r0(e, t, r) {
  let n = Qf(Gr), i = e ? n.get(e) : void 0, s = i ? i.count > 0 : !1;
  return Ge(() => {
    if (!(!e || !t)) return Gr.dispatch("PUSH", e, r), () => Gr.dispatch("POP", e, r);
  }, [t, e]), s;
}
let Lo = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map();
function ya(e, t = !0) {
  Ge(() => {
    var r;
    if (!t) return;
    let n = typeof e == "function" ? e() : e.current;
    if (!n) return;
    function i() {
      var o;
      if (!n) return;
      let a = (o = Kn.get(n)) != null ? o : 1;
      if (a === 1 ? Kn.delete(n) : Kn.set(n, a - 1), a !== 1) return;
      let f = Lo.get(n);
      f && (f["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", f["aria-hidden"]), n.inert = f.inert, Lo.delete(n));
    }
    let s = (r = Kn.get(n)) != null ? r : 0;
    return Kn.set(n, s + 1), s !== 0 || (Lo.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0), i;
  }, [e, t]);
}
function n0({ defaultContainers: e = [], portals: t, mainTreeNodeRef: r } = {}) {
  var n;
  let i = he((n = r == null ? void 0 : r.current) != null ? n : null), s = Rn(i), o = ae(() => {
    var a, f, m;
    let p = [];
    for (let w of e) w !== null && (w instanceof HTMLElement ? p.push(w) : "current" in w && w.current instanceof HTMLElement && p.push(w.current));
    if (t != null && t.current) for (let w of t.current) p.push(w);
    for (let w of (a = s == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null ? a : []) w !== document.body && w !== document.head && w instanceof HTMLElement && w.id !== "headlessui-portal-root" && (w.contains(i.current) || w.contains((m = (f = i.current) == null ? void 0 : f.getRootNode()) == null ? void 0 : m.host) || p.some((T) => w.contains(T)) || p.push(w));
    return p;
  });
  return { resolveContainers: o, contains: ae((a) => o().some((f) => f.contains(a))), mainTreeNodeRef: i, MainTreeNode: Me(() => function() {
    return r != null ? null : re.createElement(ws, { features: Wi.Hidden, ref: i });
  }, [i, r]) };
}
let Us = Ft(() => {
});
Us.displayName = "StackContext";
var Es = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Es || {});
function i0() {
  return yt(Us);
}
function o0({ children: e, onUpdate: t, type: r, element: n, enabled: i }) {
  let s = i0(), o = ae((...a) => {
    t == null || t(...a), s(...a);
  });
  return Ge(() => {
    let a = i === void 0 || i === !0;
    return a && o(0, r, n), () => {
      a && o(1, r, n);
    };
  }, [o, r, n, i]), re.createElement(Us.Provider, { value: o }, e);
}
let $c = Ft(null);
function jc() {
  let e = yt($c);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, jc), t;
  }
  return e;
}
function s0() {
  let [e, t] = Ae([]);
  return [e.length > 0 ? e.join(" ") : void 0, Me(() => function(r) {
    let n = ae((s) => (t((o) => [...o, s]), () => t((o) => {
      let a = o.slice(), f = a.indexOf(s);
      return f !== -1 && a.splice(f, 1), a;
    }))), i = Me(() => ({ register: n, slot: r.slot, name: r.name, props: r.props }), [n, r.slot, r.name, r.props]);
    return re.createElement($c.Provider, { value: i }, r.children);
  }, [t])];
}
let a0 = "p";
function c0(e, t) {
  let r = pr(), { id: n = `headlessui-description-${r}`, ...i } = e, s = jc(), o = ft(t);
  Ge(() => s.register(n), [n, s.register]);
  let a = { ref: o, ...s.props, id: n };
  return it({ ourProps: a, theirProps: i, slot: s.slot || {}, defaultTag: a0, name: s.name || "Description" });
}
let u0 = Ze(c0), l0 = Object.assign(u0, {});
var f0 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(f0 || {}), h0 = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(h0 || {});
let d0 = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Vi = Ft(null);
Vi.displayName = "DialogContext";
function fi(e) {
  let t = yt(Vi);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, fi), r;
  }
  return t;
}
function p0(e, t, r = () => [document.body]) {
  r0(e, t, (n) => {
    var i;
    return { containers: [...(i = n.containers) != null ? i : [], r] };
  });
}
function g0(e, t) {
  return Ve(t.type, d0, e, t);
}
let w0 = "div", m0 = xn.RenderStrategy | xn.Static;
function y0(e, t) {
  let r = pr(), { id: n = `headlessui-dialog-${r}`, open: i, onClose: s, initialFocus: o, role: a = "dialog", __demoMode: f = !1, ...m } = e, [p, w] = Ae(0), T = he(!1);
  a = function() {
    return a === "dialog" || a === "alertdialog" ? a : (T.current || (T.current = !0, console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let E = ro();
  i === void 0 && E !== null && (i = (E & Je.Open) === Je.Open);
  let R = he(null), B = ft(R, t), C = Rn(R), j = e.hasOwnProperty("open") || E !== null, y = e.hasOwnProperty("onClose");
  if (!j && !y) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!j) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!y) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof i != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
  if (typeof s != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${s}`);
  let S = i ? 0 : 1, [I, L] = fc(g0, { titleId: null, descriptionId: null, panelRef: fs() }), N = ae(() => s(!1)), D = ae((se) => L({ type: 0, id: se })), d = Nn() ? f ? !1 : S === 0 : !1, l = p > 1, A = yt(Vi) !== null, [x, h] = Ff(), P = { get current() {
    var se;
    return (se = I.panelRef.current) != null ? se : R.current;
  } }, { resolveContainers: k, mainTreeNodeRef: v, MainTreeNode: O } = n0({ portals: x, defaultContainers: [P] }), U = l ? "parent" : "leaf", H = E !== null ? (E & Je.Closing) === Je.Closing : !1, W = A || H ? !1 : d, G = nt(() => {
    var se, Fe;
    return (Fe = Array.from((se = C == null ? void 0 : C.querySelectorAll("body > *")) != null ? se : []).find((we) => we.id === "headlessui-portal-root" ? !1 : we.contains(v.current) && we instanceof HTMLElement)) != null ? Fe : null;
  }, [v]);
  ya(G, W);
  let q = l ? !0 : d, Q = nt(() => {
    var se, Fe;
    return (Fe = Array.from((se = C == null ? void 0 : C.querySelectorAll("[data-headlessui-portal]")) != null ? se : []).find((we) => we.contains(v.current) && we instanceof HTMLElement)) != null ? Fe : null;
  }, [v]);
  ya(Q, q), kc(k, (se) => {
    se.preventDefault(), N();
  }, !(!d || l));
  let ue = !(l || S !== 0);
  Rc(C == null ? void 0 : C.defaultView, "keydown", (se) => {
    ue && (se.defaultPrevented || se.key === Ke.Escape && (se.preventDefault(), se.stopPropagation(), N()));
  }), p0(C, !(H || S !== 0 || A), k), be(() => {
    if (S !== 0 || !R.current) return;
    let se = new ResizeObserver((Fe) => {
      for (let we of Fe) {
        let _e = we.target.getBoundingClientRect();
        _e.x === 0 && _e.y === 0 && _e.width === 0 && _e.height === 0 && N();
      }
    });
    return se.observe(R.current), () => se.disconnect();
  }, [S, R, N]);
  let [ee, Se] = s0(), dt = Me(() => [{ dialogState: S, close: N, setTitleId: D }, I], [S, I, N, D]), Pt = Me(() => ({ open: S === 0 }), [S]), bt = { ref: B, id: n, role: a, "aria-modal": S === 0 ? !0 : void 0, "aria-labelledby": I.titleId, "aria-describedby": ee };
  return re.createElement(o0, { type: "Dialog", enabled: S === 0, element: R, onUpdate: ae((se, Fe) => {
    Fe === "Dialog" && Ve(se, { [Es.Add]: () => w((we) => we + 1), [Es.Remove]: () => w((we) => we - 1) });
  }) }, re.createElement(ms, { force: !0 }, re.createElement(As, null, re.createElement(Vi.Provider, { value: dt }, re.createElement(As.Group, { target: R }, re.createElement(ms, { force: !1 }, re.createElement(Se, { slot: Pt, name: "Dialog.Description" }, re.createElement(jn, { initialFocus: o, containers: k, features: d ? Ve(U, { parent: jn.features.RestoreFocus, leaf: jn.features.All & ~jn.features.FocusLock }) : jn.features.None }, re.createElement(h, null, it({ ourProps: bt, theirProps: m, slot: Pt, defaultTag: w0, features: m0, visible: S === 0, name: "Dialog" }))))))))), re.createElement(O, null));
}
let A0 = "div";
function E0(e, t) {
  let r = pr(), { id: n = `headlessui-dialog-overlay-${r}`, ...i } = e, [{ dialogState: s, close: o }] = fi("Dialog.Overlay"), a = ft(t), f = ae((p) => {
    if (p.target === p.currentTarget) {
      if (Nc(p.currentTarget)) return p.preventDefault();
      p.preventDefault(), p.stopPropagation(), o();
    }
  }), m = Me(() => ({ open: s === 0 }), [s]);
  return it({ ourProps: { ref: a, id: n, "aria-hidden": !0, onClick: f }, theirProps: i, slot: m, defaultTag: A0, name: "Dialog.Overlay" });
}
let P0 = "div";
function b0(e, t) {
  let r = pr(), { id: n = `headlessui-dialog-backdrop-${r}`, ...i } = e, [{ dialogState: s }, o] = fi("Dialog.Backdrop"), a = ft(t);
  be(() => {
    if (o.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [o.panelRef]);
  let f = Me(() => ({ open: s === 0 }), [s]);
  return re.createElement(ms, { force: !0 }, re.createElement(As, null, it({ ourProps: { ref: a, id: n, "aria-hidden": !0 }, theirProps: i, slot: f, defaultTag: P0, name: "Dialog.Backdrop" })));
}
let S0 = "div";
function v0(e, t) {
  let r = pr(), { id: n = `headlessui-dialog-panel-${r}`, ...i } = e, [{ dialogState: s }, o] = fi("Dialog.Panel"), a = ft(t, o.panelRef), f = Me(() => ({ open: s === 0 }), [s]), m = ae((p) => {
    p.stopPropagation();
  });
  return it({ ourProps: { ref: a, id: n, onClick: m }, theirProps: i, slot: f, defaultTag: S0, name: "Dialog.Panel" });
}
let T0 = "h2";
function _0(e, t) {
  let r = pr(), { id: n = `headlessui-dialog-title-${r}`, ...i } = e, [{ dialogState: s, setTitleId: o }] = fi("Dialog.Title"), a = ft(t);
  be(() => (o(n), () => o(null)), [n, o]);
  let f = Me(() => ({ open: s === 0 }), [s]);
  return it({ ourProps: { ref: a, id: n }, theirProps: i, slot: f, defaultTag: T0, name: "Dialog.Title" });
}
let I0 = Ze(y0), O0 = Ze(b0), k0 = Ze(v0), x0 = Ze(E0), B0 = Ze(_0), Ho = Object.assign(I0, { Backdrop: O0, Panel: k0, Overlay: x0, Title: B0, Description: l0 }), Aa = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Ea(e) {
  var t, r;
  let n = (t = e.innerText) != null ? t : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return n;
  let s = !1;
  for (let a of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) a.remove(), s = !0;
  let o = s ? (r = i.innerText) != null ? r : "" : n;
  return Aa.test(o) && (o = o.replace(Aa, "")), o;
}
function C0(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let n = r.split(" ").map((i) => {
      let s = document.getElementById(i);
      if (s) {
        let o = s.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : Ea(s).trim();
      }
      return null;
    }).filter(Boolean);
    if (n.length > 0) return n.join(", ");
  }
  return Ea(e).trim();
}
function N0(e) {
  let t = he(""), r = he("");
  return ae(() => {
    let n = e.current;
    if (!n) return "";
    let i = n.innerText;
    if (t.current === i) return r.current;
    let s = C0(n).trim().toLowerCase();
    return t.current = i, r.current = s, s;
  });
}
var R0 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(R0 || {}), F0 = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(F0 || {}), U0 = ((e) => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(U0 || {});
function Mo(e, t = (r) => r) {
  let r = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, n = _c(t(e.items.slice()), (s) => s.dataRef.current.domRef.current), i = r ? n.indexOf(r) : null;
  return i === -1 && (i = null), { items: n, activeItemIndex: i };
}
let L0 = { 1(e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, 0(e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
}, 2: (e, t) => {
  var r;
  let n = Mo(e), i = Ef(t, { resolveItems: () => n.items, resolveActiveIndex: () => n.activeItemIndex, resolveId: (s) => s.id, resolveDisabled: (s) => s.dataRef.current.disabled });
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
  let r = Mo(e, (n) => [...n, { id: t.id, dataRef: t.dataRef }]);
  return { ...e, ...r };
}, 6: (e, t) => {
  let r = Mo(e, (n) => {
    let i = n.findIndex((s) => s.id === t.id);
    return i !== -1 && n.splice(i, 1), n;
  });
  return { ...e, ...r, activationTrigger: 1 };
} }, Ls = Ft(null);
Ls.displayName = "MenuContext";
function no(e) {
  let t = yt(Ls);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, no), r;
  }
  return t;
}
function H0(e, t) {
  return Ve(t.type, L0, e, t);
}
let M0 = mt;
function D0(e, t) {
  let { __demoMode: r = !1, ...n } = e, i = fc(H0, { __demoMode: r, menuState: r ? 0 : 1, buttonRef: fs(), itemsRef: fs(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: s, itemsRef: o, buttonRef: a }, f] = i, m = ft(t);
  kc([a, o], (E, R) => {
    var B;
    f({ type: 1 }), Ns(R, Cs.Loose) || (E.preventDefault(), (B = a.current) == null || B.focus());
  }, s === 0);
  let p = ae(() => {
    f({ type: 1 });
  }), w = Me(() => ({ open: s === 0, close: p }), [s, p]), T = { ref: m };
  return re.createElement(Ls.Provider, { value: i }, re.createElement(Cc, { value: Ve(s, { 0: Je.Open, 1: Je.Closed }) }, it({ ourProps: T, theirProps: n, slot: w, defaultTag: M0, name: "Menu" })));
}
let $0 = "button";
function j0(e, t) {
  var r;
  let n = pr(), { id: i = `headlessui-menu-button-${n}`, ...s } = e, [o, a] = no("Menu.Button"), f = ft(o.buttonRef, t), m = ui(), p = ae((B) => {
    switch (B.key) {
      case Ke.Space:
      case Ke.Enter:
      case Ke.ArrowDown:
        B.preventDefault(), B.stopPropagation(), a({ type: 0 }), m.nextFrame(() => a({ type: 2, focus: Nt.First }));
        break;
      case Ke.ArrowUp:
        B.preventDefault(), B.stopPropagation(), a({ type: 0 }), m.nextFrame(() => a({ type: 2, focus: Nt.Last }));
        break;
    }
  }), w = ae((B) => {
    switch (B.key) {
      case Ke.Space:
        B.preventDefault();
        break;
    }
  }), T = ae((B) => {
    if (Nc(B.currentTarget)) return B.preventDefault();
    e.disabled || (o.menuState === 0 ? (a({ type: 1 }), m.nextFrame(() => {
      var C;
      return (C = o.buttonRef.current) == null ? void 0 : C.focus({ preventScroll: !0 });
    })) : (B.preventDefault(), a({ type: 0 })));
  }), E = Me(() => ({ open: o.menuState === 0 }), [o]), R = { ref: f, id: i, type: lf(e, o.buttonRef), "aria-haspopup": "menu", "aria-controls": (r = o.itemsRef.current) == null ? void 0 : r.id, "aria-expanded": o.menuState === 0, onKeyDown: p, onKeyUp: w, onClick: T };
  return it({ ourProps: R, theirProps: s, slot: E, defaultTag: $0, name: "Menu.Button" });
}
let K0 = "div", W0 = xn.RenderStrategy | xn.Static;
function V0(e, t) {
  var r, n;
  let i = pr(), { id: s = `headlessui-menu-items-${i}`, ...o } = e, [a, f] = no("Menu.Items"), m = ft(a.itemsRef, t), p = Rn(a.itemsRef), w = ui(), T = ro(), E = T !== null ? (T & Je.Open) === Je.Open : a.menuState === 0;
  be(() => {
    let y = a.itemsRef.current;
    y && a.menuState === 0 && y !== (p == null ? void 0 : p.activeElement) && y.focus({ preventScroll: !0 });
  }, [a.menuState, a.itemsRef, p]), df({ container: a.itemsRef.current, enabled: a.menuState === 0, accept(y) {
    return y.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : y.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(y) {
    y.setAttribute("role", "none");
  } });
  let R = ae((y) => {
    var S, I;
    switch (w.dispose(), y.key) {
      case Ke.Space:
        if (a.searchQuery !== "") return y.preventDefault(), y.stopPropagation(), f({ type: 3, value: y.key });
      case Ke.Enter:
        if (y.preventDefault(), y.stopPropagation(), f({ type: 1 }), a.activeItemIndex !== null) {
          let { dataRef: L } = a.items[a.activeItemIndex];
          (I = (S = L.current) == null ? void 0 : S.domRef.current) == null || I.click();
        }
        Tc(a.buttonRef.current);
        break;
      case Ke.ArrowDown:
        return y.preventDefault(), y.stopPropagation(), f({ type: 2, focus: Nt.Next });
      case Ke.ArrowUp:
        return y.preventDefault(), y.stopPropagation(), f({ type: 2, focus: Nt.Previous });
      case Ke.Home:
      case Ke.PageUp:
        return y.preventDefault(), y.stopPropagation(), f({ type: 2, focus: Nt.First });
      case Ke.End:
      case Ke.PageDown:
        return y.preventDefault(), y.stopPropagation(), f({ type: 2, focus: Nt.Last });
      case Ke.Escape:
        y.preventDefault(), y.stopPropagation(), f({ type: 1 }), Rt().nextFrame(() => {
          var L;
          return (L = a.buttonRef.current) == null ? void 0 : L.focus({ preventScroll: !0 });
        });
        break;
      case Ke.Tab:
        y.preventDefault(), y.stopPropagation(), f({ type: 1 }), Rt().nextFrame(() => {
          af(a.buttonRef.current, y.shiftKey ? ir.Previous : ir.Next);
        });
        break;
      default:
        y.key.length === 1 && (f({ type: 3, value: y.key }), w.setTimeout(() => f({ type: 4 }), 350));
        break;
    }
  }), B = ae((y) => {
    switch (y.key) {
      case Ke.Space:
        y.preventDefault();
        break;
    }
  }), C = Me(() => ({ open: a.menuState === 0 }), [a]), j = { "aria-activedescendant": a.activeItemIndex === null || (r = a.items[a.activeItemIndex]) == null ? void 0 : r.id, "aria-labelledby": (n = a.buttonRef.current) == null ? void 0 : n.id, id: s, onKeyDown: R, onKeyUp: B, role: "menu", tabIndex: 0, ref: m };
  return it({ ourProps: j, theirProps: o, slot: C, defaultTag: K0, features: W0, visible: E, name: "Menu.Items" });
}
let G0 = mt;
function X0(e, t) {
  let r = pr(), { id: n = `headlessui-menu-item-${r}`, disabled: i = !1, ...s } = e, [o, a] = no("Menu.Item"), f = o.activeItemIndex !== null ? o.items[o.activeItemIndex].id === n : !1, m = he(null), p = ft(t, m);
  Ge(() => {
    if (o.__demoMode || o.menuState !== 0 || !f || o.activationTrigger === 0) return;
    let L = Rt();
    return L.requestAnimationFrame(() => {
      var N, D;
      (D = (N = m.current) == null ? void 0 : N.scrollIntoView) == null || D.call(N, { block: "nearest" });
    }), L.dispose;
  }, [o.__demoMode, m, f, o.menuState, o.activationTrigger, o.activeItemIndex]);
  let w = N0(m), T = he({ disabled: i, domRef: m, get textValue() {
    return w();
  } });
  Ge(() => {
    T.current.disabled = i;
  }, [T, i]), Ge(() => (a({ type: 5, id: n, dataRef: T }), () => a({ type: 6, id: n })), [T, n]);
  let E = ae(() => {
    a({ type: 1 });
  }), R = ae((L) => {
    if (i) return L.preventDefault();
    a({ type: 1 }), Tc(o.buttonRef.current);
  }), B = ae(() => {
    if (i) return a({ type: 2, focus: Nt.Nothing });
    a({ type: 2, focus: Nt.Specific, id: n });
  }), C = hf(), j = ae((L) => C.update(L)), y = ae((L) => {
    C.wasMoved(L) && (i || f || a({ type: 2, focus: Nt.Specific, id: n, trigger: 0 }));
  }), S = ae((L) => {
    C.wasMoved(L) && (i || f && a({ type: 2, focus: Nt.Nothing }));
  }), I = Me(() => ({ active: f, disabled: i, close: E }), [f, i, E]);
  return it({ ourProps: { id: n, ref: p, role: "menuitem", tabIndex: i === !0 ? void 0 : -1, "aria-disabled": i === !0 ? !0 : void 0, disabled: void 0, onClick: R, onFocus: B, onPointerEnter: j, onMouseEnter: j, onPointerMove: y, onMouseMove: y, onPointerLeave: S, onMouseLeave: S }, theirProps: s, slot: I, defaultTag: G0, name: "Menu.Item" });
}
let q0 = Ze(D0), Y0 = Ze(j0), Q0 = Ze(V0), z0 = Ze(X0), An = Object.assign(q0, { Button: Y0, Items: Q0, Item: z0 });
function J0(e = 0) {
  let [t, r] = Ae(e), n = li(), i = nt((f) => {
    n.current && r((m) => m | f);
  }, [t, n]), s = nt((f) => !!(t & f), [t]), o = nt((f) => {
    n.current && r((m) => m & ~f);
  }, [r, n]), a = nt((f) => {
    n.current && r((m) => m ^ f);
  }, [r]);
  return { flags: t, addFlag: i, hasFlag: s, removeFlag: o, toggleFlag: a };
}
function Z0(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called) return t.called = !0, e(...r);
  };
}
function Do(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function $o(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function eh(e, t) {
  let r = Rt();
  if (!e) return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, o] = [n, i].map((f) => {
    let [m = 0] = f.split(",").filter(Boolean).map((p) => p.includes("ms") ? parseFloat(p) : parseFloat(p) * 1e3).sort((p, w) => w - p);
    return m;
  }), a = s + o;
  if (a !== 0) {
    r.group((m) => {
      m.setTimeout(() => {
        t(), m.dispose();
      }, a), m.addEventListener(e, "transitionrun", (p) => {
        p.target === p.currentTarget && m.dispose();
      });
    });
    let f = r.addEventListener(e, "transitionend", (m) => {
      m.target === m.currentTarget && (t(), f());
    });
  } else t();
  return r.add(() => t()), r.dispose;
}
function th(e, t, r, n) {
  let i = r ? "enter" : "leave", s = Rt(), o = n !== void 0 ? Z0(n) : () => {
  };
  i === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
  let a = Ve(i, { enter: () => t.enter, leave: () => t.leave }), f = Ve(i, { enter: () => t.enterTo, leave: () => t.leaveTo }), m = Ve(i, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return $o(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), Do(e, ...t.base, ...a, ...m), s.nextFrame(() => {
    $o(e, ...t.base, ...a, ...m), Do(e, ...t.base, ...a, ...f), eh(e, () => ($o(e, ...t.base, ...a), Do(e, ...t.base, ...t.entered), o()));
  }), s.dispose;
}
function rh({ immediate: e, container: t, direction: r, classes: n, onStart: i, onStop: s }) {
  let o = li(), a = ui(), f = cr(r);
  Ge(() => {
    e && (f.current = "enter");
  }, [e]), Ge(() => {
    let m = Rt();
    a.add(m.dispose);
    let p = t.current;
    if (p && f.current !== "idle" && o.current) return m.dispose(), i.current(f.current), m.add(th(p, n.current, f.current === "enter", () => {
      m.dispose(), s.current(f.current);
    })), m.dispose;
  }, [r]);
}
function Ar(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let io = Ft(null);
io.displayName = "TransitionContext";
var nh = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(nh || {});
function ih() {
  let e = yt(io);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function oh() {
  let e = yt(oo);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let oo = Ft(null);
oo.displayName = "NestingContext";
function so(e) {
  return "children" in e ? so(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Kc(e, t) {
  let r = cr(e), n = he([]), i = li(), s = ui(), o = ae((E, R = kr.Hidden) => {
    let B = n.current.findIndex(({ el: C }) => C === E);
    B !== -1 && (Ve(R, { [kr.Unmount]() {
      n.current.splice(B, 1);
    }, [kr.Hidden]() {
      n.current[B].state = "hidden";
    } }), s.microTask(() => {
      var C;
      !so(n) && i.current && ((C = r.current) == null || C.call(r));
    }));
  }), a = ae((E) => {
    let R = n.current.find(({ el: B }) => B === E);
    return R ? R.state !== "visible" && (R.state = "visible") : n.current.push({ el: E, state: "visible" }), () => o(E, kr.Unmount);
  }), f = he([]), m = he(Promise.resolve()), p = he({ enter: [], leave: [], idle: [] }), w = ae((E, R, B) => {
    f.current.splice(0), t && (t.chains.current[R] = t.chains.current[R].filter(([C]) => C !== E)), t == null || t.chains.current[R].push([E, new Promise((C) => {
      f.current.push(C);
    })]), t == null || t.chains.current[R].push([E, new Promise((C) => {
      Promise.all(p.current[R].map(([j, y]) => y)).then(() => C());
    })]), R === "enter" ? m.current = m.current.then(() => t == null ? void 0 : t.wait.current).then(() => B(R)) : B(R);
  }), T = ae((E, R, B) => {
    Promise.all(p.current[R].splice(0).map(([C, j]) => j)).then(() => {
      var C;
      (C = f.current.shift()) == null || C();
    }).then(() => B(R));
  });
  return Me(() => ({ children: n, register: a, unregister: o, onStart: w, onStop: T, wait: m, chains: p }), [a, o, n, w, T, p, m]);
}
function sh() {
}
let ah = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Pa(e) {
  var t;
  let r = {};
  for (let n of ah) r[n] = (t = e[n]) != null ? t : sh;
  return r;
}
function ch(e) {
  let t = he(Pa(e));
  return be(() => {
    t.current = Pa(e);
  }, [e]), t;
}
let uh = "div", Wc = xn.RenderStrategy;
function lh(e, t) {
  var r, n;
  let { beforeEnter: i, afterEnter: s, beforeLeave: o, afterLeave: a, enter: f, enterFrom: m, enterTo: p, entered: w, leave: T, leaveFrom: E, leaveTo: R, ...B } = e, C = he(null), j = ft(C, t), y = (r = B.unmount) == null || r ? kr.Unmount : kr.Hidden, { show: S, appear: I, initial: L } = ih(), [N, D] = Ae(S ? "visible" : "hidden"), d = oh(), { register: l, unregister: A } = d;
  be(() => l(C), [l, C]), be(() => {
    if (y === kr.Hidden && C.current) {
      if (S && N !== "visible") {
        D("visible");
        return;
      }
      return Ve(N, { hidden: () => A(C), visible: () => l(C) });
    }
  }, [N, C, l, A, S, y]);
  let x = cr({ base: Ar(B.className), enter: Ar(f), enterFrom: Ar(m), enterTo: Ar(p), entered: Ar(w), leave: Ar(T), leaveFrom: Ar(E), leaveTo: Ar(R) }), h = ch({ beforeEnter: i, afterEnter: s, beforeLeave: o, afterLeave: a }), P = Nn();
  be(() => {
    if (P && N === "visible" && C.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [C, N, P]);
  let k = L && !I, v = I && S && L, O = !P || k ? "idle" : S ? "enter" : "leave", U = J0(0), H = ae((ue) => Ve(ue, { enter: () => {
    U.addFlag(Je.Opening), h.current.beforeEnter();
  }, leave: () => {
    U.addFlag(Je.Closing), h.current.beforeLeave();
  }, idle: () => {
  } })), W = ae((ue) => Ve(ue, { enter: () => {
    U.removeFlag(Je.Opening), h.current.afterEnter();
  }, leave: () => {
    U.removeFlag(Je.Closing), h.current.afterLeave();
  }, idle: () => {
  } })), G = Kc(() => {
    D("hidden"), A(C);
  }, d), q = he(!1);
  rh({ immediate: v, container: C, classes: x, direction: O, onStart: cr((ue) => {
    q.current = !0, G.onStart(C, ue, H);
  }), onStop: cr((ue) => {
    q.current = !1, G.onStop(C, ue, W), ue === "leave" && !so(G) && (D("hidden"), A(C));
  }) });
  let Q = B, de = { ref: j };
  return v ? Q = { ...Q, className: Ki(B.className, ...x.current.enter, ...x.current.enterFrom) } : q.current && (Q.className = Ki(B.className, (n = C.current) == null ? void 0 : n.className), Q.className === "" && delete Q.className), re.createElement(oo.Provider, { value: G }, re.createElement(Cc, { value: Ve(N, { visible: Je.Open, hidden: Je.Closed }) | U.flags }, it({ ourProps: de, theirProps: Q, defaultTag: uh, features: Wc, visible: N === "visible", name: "Transition.Child" })));
}
function fh(e, t) {
  let { show: r, appear: n = !1, unmount: i = !0, ...s } = e, o = he(null), a = ft(o, t);
  Nn();
  let f = ro();
  if (r === void 0 && f !== null && (r = (f & Je.Open) === Je.Open), ![!0, !1].includes(r)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [m, p] = Ae(r ? "visible" : "hidden"), w = Kc(() => {
    p("hidden");
  }), [T, E] = Ae(!0), R = he([r]);
  Ge(() => {
    T !== !1 && R.current[R.current.length - 1] !== r && (R.current.push(r), E(!1));
  }, [R, r]);
  let B = Me(() => ({ show: r, appear: n, initial: T }), [r, n, T]);
  be(() => {
    if (r) p("visible");
    else if (!so(w)) p("hidden");
    else {
      let S = o.current;
      if (!S) return;
      let I = S.getBoundingClientRect();
      I.x === 0 && I.y === 0 && I.width === 0 && I.height === 0 && p("hidden");
    }
  }, [r, w]);
  let C = { unmount: i }, j = ae(() => {
    var S;
    T && E(!1), (S = e.beforeEnter) == null || S.call(e);
  }), y = ae(() => {
    var S;
    T && E(!1), (S = e.beforeLeave) == null || S.call(e);
  });
  return re.createElement(oo.Provider, { value: w }, re.createElement(io.Provider, { value: B }, it({ ourProps: { ...C, as: mt, children: re.createElement(Vc, { ref: a, ...C, ...s, beforeEnter: j, beforeLeave: y }) }, theirProps: {}, defaultTag: mt, features: Wc, visible: m === "visible", name: "Transition" })));
}
function hh(e, t) {
  let r = yt(io) !== null, n = ro() !== null;
  return re.createElement(re.Fragment, null, !r && n ? re.createElement(Ps, { ref: t, ...e }) : re.createElement(Vc, { ref: t, ...e }));
}
let Ps = Ze(fh), Vc = Ze(lh), dh = Ze(hh), Li = Object.assign(Ps, { Child: dh, Root: Ps });
const ph = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Gc = "data:image/svg+xml,%3csvg%20width='41'%20height='40'%20viewBox='0%200%2041%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20x='0.5'%20width='40'%20height='40'%20rx='20'%20fill='url(%23pattern0)'/%3e%3cdefs%3e%3cpattern%20id='pattern0'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_21497_326778'%20transform='translate(-0.00625)%20scale(0.0125)'/%3e%3c/pattern%3e%3cimage%20id='image0_21497_326778'%20width='81'%20height='80'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABQCAYAAABh05mTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAi3SURBVHgB7Z1dbBRVFMfPLJVuE1lGFNOENi5v2sbY8kIbEymJtJiYSIVq9AEKrQm+0A+Q+KBpqz5ppIU3Ywvti4kWktaYQFsTi4nZ8sTyQH3TIa0JD0Km2wQWkB3Pf3Zms/Oxu7Mfszvb7i9Zdjt7Zzfz33PuOffcOxeBSowoisEtRG0KUZAo9pJAQjD+mkTtkYzED1lQH0I4RnTHRxR+lh+SLMtUIgQqMkFWbZ3okEKxffz1h8gqVK6EfSQs8vPsv7K8SEWkKCJqwrURKX2K+uw6kkDKokC+qWII6qqIEC9CsT7+mn4qnMVlCwsqjNyT5UlyCVdE9Ih4ZlwTs+Ai7hADEG+YvCOeGYg5wGLOUIEomIg7RbHpKSmX+GUTlQHcZ04+Q76Ru7IsUZ4URETN+sao/JA4oh/PN/hsoTxA37fFX32VBTxJ5YnI2UJ3jb+aHkYfXaccydkSazlJfkzKbxRPjMseFmJmG1tlLkl7TiJq/R8E9GrwyJXwVhI6s+0nsxZxAwuoI7GQ+7MRMisRN4GAOlKAhGanru0jh6AP3CQCgmCErxWB00ljR9E5KYjU0uahlq+5lqP2bKaGjkTc6q+GgC/TpkNoqvHXrD2MRpfStcrozpxID1GZjELcQRl9QRTb0rVIG1i0QHKTKqQNNGnd2e+vDtHmCCSZEJ+Q4n8QfTRn92ZKd9bcOEgVVGJc1kvl1rburEXjv6mCARZr8Z68tt983NYSnxANUQULmNqws0aLJVasMD121mixxIoVpsfOGg2WWI5W2NrSQu3tb9LBjnaqq6tTj4WWlmj68hWanr5CbmC2RoOIz4titxIv8XueQCBA5779mjra21O2mb58mQZPnyU34Gi9W9YqPYY8kSu8ENDz42NY3M8zV2hPc3Pado0NDRSJROjmzTAVGp7swnBwMf5ao5SuPDT0OR1sP2A41vHW26oAZiDg9I8/JFw3E/iMxlddGbVK9+W13XiRCCyPiQ5RCYBb9p44roqiP0JLN2wFBHBhOwHRD45PXKLV1VXL59fXOxM8S1ApU3+dKv0ITyG+o1DxaW3Zazk2N79g27an54QaSJKB2L0fnVRFBMvLyyz0N1QMfPElMWHVEllRsUhrZCw0cL9lZnVl1XIM1td7otty/L33P0wICAKB7ZY2a2v2Vp0vMDw8qyJWlbDUZeeakXXrRQ/2n7K0HRn5km6z5SV/Vm9Pt6EN3DtV15AviqabKmLMY/XCul1WYVtbjW4MccYvGrOx4aHPLEKPT0ySi8CJg6qIHKL3UYlYXv7Tcqyr613j30cOW8Q5N3Yh8RrvXbv6iyVnhNDIFd2Ec8QmLTorJasZLie5o07XkSPUwxE78XfXYcP7qjjTcXEQbOZYwEabvhUBxy1X1sGqXjXZrvH7h6lExVcI0tq6l+pNltbWto9Tk13xFIiFSmaFz9n54k6a+P47tr4DVF1dbflcjFQWr+e8MiQLlLtqsr1D3F6K7CYB0pafOIEuBOaUx20UEma3oGdkJT+lEgJrXI+ss/W9QfkA4Y4ePW6I2G7jI+GuEI8u3qjcIDDYRdhMQLzR0QtFsz4TkqdE1EFgGRw4lVZMWO+1uQWa59FNicTT8aaIOoP9fTQw0Gc8duYTmmPx3I66WSBVkYdpaHzF8DeEc6vQmgey4wVNpcBcbAiFbpDX4LqiXIXqLKc4VEyQE7Zw9Ubv89C/ra7+Y+jbICByxGTmFhbIi+juLFERJuohzAAHDLOF6UDMc2Pn1T6v3VSkBUuhkgaQVNzSk22st3G1CIEAgUDhBL2wmhydkfsd5Gq39xBGtD5RuEUuggKCUwGBXuFOJuTACmHhK3f+MjxSWX2hYCsM6+6MmZxj5BKDA1YBEWkxDQDq6nbZFhCSmZ//lbzIUz3FwT3DMXIHWILZqlCBGf7iK0OuhzawVnPFRsdJXmhXJXc5n+S4LMenB/6LW6IrtNjMoUxcnLRcHPpBNZFOMb+CAkWHTbBJxlzVBm6Oo3HjOp5VESEnZvXJBSJcWDBjJyzSGUydphIK749z6QuzffU2w0EELks/6vJwkEtf6nruxLzzDlEc5sMFX4eTqsyFC0TyHAhso8bGhqwDAM6/fTtuZanOHzxzNlG8dYMYCc1w54SIbo6hQ3/8nnVlRj2Phco1uqrF3tfzK61lwDp5j5GLWy6dy3qY0dHz6nQohDBPyGcC7XGum3B/mLg1w7QWpwbKtlGBwUVhQmrPnibLUM4MrO80i45VXQABaOLiJXVY2MgFiUznI5CgMLuSpfDZwq78QTQaVRfCG1aFocqtubQr8y1waSyBw1I45IUQBCLhgtE/OqkNotaI2UD9fIAfCTknKjzFqC2yFS7ek2X7pXWAA8wYdg2hCilhETuTtz+wiOjlIq1HSAQUHUs9Mb5wUZiiCrZgRxPrMRs0a0Rlp3IjkBGLFQLbO6oQdThS11CJVop5FSTXekROxpf6BMLuIhJVUGE3Pi+nuBs/pYgYT2O7E6oAJC55Dad6M+0Nkg+iUYnd+jl+6W5l0+OwG++X0+wJkXG2774s97s1HCwPhBEUGdK1cDRl+jTu1hJtMtAPshENZ27nkE2Y9oQ1N864I4njyXv0CfhQvKSND66104mAIOvNhXDvhm+Dby6UKZCYyXoZCTpZzSIl2niEsxUQ5LQWZyMKyUFkKhcBQc5b/2H4U+2vmfXFV04EqawRRpDK8TVFKQfy2j8RQj6MPprihBx9axuVH9iEsjPffWZz2vrPDi0FKpv9FJEDYijnNAKn/6wCw5Xxfq0yHiRvgk3NBwq5/3Ze7mwH9tVCX8m/NMbcXrrdTd3VmOuBH6MmQAWk4JaYjHbfGywTd2MGqQQI8a30p8pus3I7sL8Ei3msSLcEy5ji4B9wpuy3zbdD/18vYmydQkHTI3Vx0fViCWf4ZioxmqhNivpQXvOp2zYLQe2mTdPQUpDwL7cLC6SwtfluYVkgVrUVIsrmyv91DJTKn0hYjQAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e", gh = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2017.5H4.16667C3.72464%2017.5%203.30072%2017.3244%202.98816%2017.0118C2.67559%2016.6993%202.5%2016.2754%202.5%2015.8333V4.16667C2.5%203.72464%202.67559%203.30072%202.98816%202.98816C3.30072%202.67559%203.72464%202.5%204.16667%202.5H7.5'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.333%2014.1667L17.4997%2010L13.333%205.83337'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.5%2010H7.5'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Xc = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.423462'%20width='24'%20height='24'%20rx='12'%20fill='%231C1326'/%3e%3cpath%20d='M15.6787%209.69931L16.5929%2010.7735C16.6976%2010.8942%2016.7904%2010.9934%2016.8279%2011.0499C17.1013%2011.3216%2017.2546%2011.6889%2017.2544%2012.0716C17.2288%2012.523%2016.9345%2012.8305%2016.662%2013.1594L16.0222%2013.9106L15.6885%2014.2998C15.6765%2014.3132%2015.6688%2014.3298%2015.6663%2014.3475C15.6638%2014.3652%2015.6666%2014.3832%2015.6743%2014.3993C15.6821%2014.4155%2015.6945%2014.429%2015.71%2014.4383C15.7255%2014.4476%2015.7434%2014.4522%2015.7616%2014.4515H19.0968C19.6062%2014.4515%2020.248%2014.8797%2020.2105%2015.5297C20.2095%2015.8251%2020.0899%2016.1081%2019.8779%2016.317C19.6659%2016.5259%2019.3788%2016.6437%2019.079%2016.6447H13.856C13.5124%2016.6447%2012.5883%2016.6817%2012.3296%2015.8936C12.2746%2015.7289%2012.2671%2015.5524%2012.3079%2015.3837C12.3831%2015.1343%2012.502%2014.8998%2012.6594%2014.6909C12.922%2014.3017%2013.2064%2013.9125%2013.4868%2013.535C13.8481%2013.0407%2014.2194%2012.5619%2014.5847%2012.0579C14.5977%2012.0415%2014.6047%2012.0213%2014.6047%2012.0005C14.6047%2011.9797%2014.5977%2011.9595%2014.5847%2011.9431L13.2577%2010.3863C13.2491%2010.375%2013.2379%2010.3658%2013.225%2010.3595C13.2122%2010.3532%2013.198%2010.3499%2013.1836%2010.3499C13.1693%2010.3499%2013.1551%2010.3532%2013.1423%2010.3595C13.1295%2010.3658%2013.1182%2010.375%2013.1096%2010.3863C12.7542%2010.8591%2011.1982%2012.9531%2010.8664%2013.3773C10.5346%2013.8016%209.71714%2013.8249%209.26493%2013.3773L7.18959%2011.3243C7.17633%2011.3112%207.1594%2011.3022%207.14103%2011.2986C7.12261%2011.295%207.10348%2011.2968%207.08614%2011.3039C7.06879%2011.311%207.05398%2011.323%207.04358%2011.3384C7.03317%2011.3538%207.02764%2011.3719%207.02768%2011.3904V15.3389C7.03256%2015.6192%206.94837%2015.8938%206.78689%2016.1245C6.6254%2016.3552%206.39473%2016.5303%206.12722%2016.6253C5.95626%2016.6839%205.77359%2016.7014%205.59439%2016.6763C5.41518%2016.6513%205.24465%2016.5843%205.09704%2016.4811C4.94943%2016.3779%204.82898%2016.2414%204.74575%2016.083C4.66252%2015.9246%204.61892%2015.7489%204.61859%2015.5705V8.47138C4.63049%208.21553%204.7239%207.96991%204.88554%207.76938C5.04719%207.56885%205.26884%207.42363%205.51901%207.35435C5.73365%207.298%205.95954%207.29856%206.17386%207.35599C6.38817%207.41341%206.58326%207.52563%206.73936%207.6813L9.93042%2010.83C9.93998%2010.8395%209.95151%2010.8469%209.96431%2010.8516C9.97706%2010.8562%209.9907%2010.8581%2010.0043%2010.857C10.0178%2010.8559%2010.031%2010.8518%2010.0428%2010.8451C10.0546%2010.8385%2010.0648%2010.8293%2010.0726%2010.8183L12.3395%207.72606C12.4442%207.60053%2012.5756%207.49905%2012.7243%207.42883C12.873%207.35856%2013.0355%207.32121%2013.2005%207.31933H19.0968C19.2581%207.31956%2019.4176%207.35378%2019.5644%207.41969C19.7113%207.48555%2019.8422%207.5816%2019.9484%207.70131C20.0546%207.82108%2020.1336%207.9618%2020.1802%208.11405C20.2267%208.2663%2020.2397%208.42661%2020.2184%208.58425C20.1768%208.85767%2020.0361%209.107%2019.8222%209.28592C19.6083%209.46485%2019.3358%209.56127%2019.0553%209.55728H15.7537C15.7371%209.55766%2015.7209%209.56244%2015.7068%209.57111C15.6928%209.57974%2015.6813%209.59197%2015.6736%209.60645C15.666%209.62099%2015.6624%209.63725%2015.6632%209.65356C15.6641%209.66992%2015.6695%209.68572%2015.6787%209.69931Z'%20fill='url(%23paint0_radial_6204_5907)'/%3e%3cdefs%3e%3cradialGradient%20id='paint0_radial_6204_5907'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(4.66396%207.31249)%20rotate(31.8526)%20scale(18.4306%2015.0426)'%3e%3cstop%20stop-color='%237500EB'/%3e%3cstop%20offset='0.48642'%20stop-color='%23E42575'/%3e%3cstop%20offset='0.791667'%20stop-color='%23E42575'/%3e%3cstop%20offset='1'%20stop-color='%23FF6914'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e", qc = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20clip-path='url(%23clip0_6327_5988)'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='black'/%3e%3crect%20x='5.37042'%20y='5.10571'%20width='14.1245'%20height='14.3972'%20fill='url(%23pattern0)'/%3e%3c/g%3e%3cdefs%3e%3cpattern%20id='pattern0'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_6327_5988'%20transform='matrix(0.00331001%200%200%200.00324732%20-0.161%20-0.168981)'/%3e%3c/pattern%3e%3cclipPath%20id='clip0_6327_5988'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3cimage%20id='image0_6327_5988'%20width='399'%20height='399'%20xlink:href='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gKgSUNDX1BST0ZJTEUAAQEAAAKQbGNtcwQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAADhjcHJ0AAABQAAAAE53dHB0AAABkAAAABRjaGFkAAABpAAAACxyWFlaAAAB0AAAABRiWFlaAAAB5AAAABRnWFlaAAAB+AAAABRyVFJDAAACDAAAACBnVFJDAAACLAAAACBiVFJDAAACTAAAACBjaHJtAAACbAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABwAAAAcAHMAUgBHAEIAIABiAHUAaQBsAHQALQBpAG4AAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAMgAAABwATgBvACAAYwBvAHAAeQByAGkAZwBoAHQALAAgAHUAcwBlACAAZgByAGUAZQBsAHkAAAAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEoAAAXj///zKgAAB5sAAP2H///7ov///aMAAAPYAADAlFhZWiAAAAAAAABvlAAAOO4AAAOQWFlaIAAAAAAAACSdAAAPgwAAtr5YWVogAAAAAAAAYqUAALeQAAAY3nBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR7AABMzQAAmZoAACZmAAAPXP/bAEMABQMEBAQDBQQEBAUFBQYHDAgHBwcHDwsLCQwRDxISEQ8RERMWHBcTFBoVEREYIRgaHR0fHx8TFyIkIh4kHB4fHv/bAEMBBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/CABEIAY8BjwMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAACAYHBQECBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf2K5JLV2JEV2JEV2JE+V4IzbnDAAAA2Jnf1XYkRXYkRXYkRXYkD+KxpMPMAAAAAAAAAB6NdyJXYAAABO/O+ic7AAAG6wu6KSAAAAk2spNPFAAAAAAAAAB6NdyJXYAAABO/O+ic7AAAG6wu6KSAAAAk2spNPFAAAAAAAAAB6NdyJXYAAABO/O+ic7AAAG6wu6KSAAAAk2spNPFAAAAAAAAAB6NdyHXgAAABO/O+hc9AAAG6wu5KTAAAAk2spMPGAAAAAAAAAA3OGHRHOx0RzsdEc7HRPnPB1TauhnPHQxzx0Mc8dDHPMd3TDHLf3zsdEc7HRHOx0RzsbvDfkAAAAAAAAAAAAAAAUT0PnnQwAABhtzhibAAAAAAAAAAAAAAAAAAAAUT0PnnQwAABhtzhibAAAAAAAAAAAAAAAAAAAAUT0PnnQwAABhtzhibAAAAAAAAAAAAAAADYGPboYVuhhW6GFbr4dQ6Hwvdm5YYblhhuWGG5wzEnIm4/RhW6GFboYVuhhWyxoAAAAAAAAAB/fXsiV2AAAATpz7onOwAABuMPuikgAAAJLrSTTxQAAAAAAAAAejXciV2AAAATvzvonOwAABusLuikgAAAJNrKTTxQAAAAAAAAAejXciV2AAAATvzvonOwAABusLuikgAAAJNrKTTxQAAAAAAAAAejXciV2AAAATvzvonOwAABusLuikgAAAJNrKTTxQAAAAAAAAAf21zHPqFcJNFZJNFZJNFZJN+Gjwf34AAANljRZiS/0Vkk0Vkk0Vkk0VdJjygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8QAJRAAAAMIAwEBAQEAAAAAAAAAAAUwAQIDBAYWNTYHFEAVUIAR/9oACAEBAAEFAv7/AIUtMRXelOjpTo6U6OlOjpTo6U6OlOh6Tm3WJOyk0870p0dKdHSnR0p0dKdHSnR0p0RZaZhO+WUhsizcGE5BhIVtLwpc+QpCBCmD9CI45EcNITsAy8hbkUeQNgQoXZET3N+QtyKPIGwIULsiJ7m/IW5FHkDYEKF2RE9zfkLcijyBsCFC7Iie5vyFuRR5A2BChdkRPc35C3Io8gbAhQuyInub8hbkUeQNgQoXZET3N+Qvax2fRr5rG1AhQ7WMqNE7ax458spVBvLwLwOBeBwLwOBeBwLwOBeBwLwOA2rzj/KaJGHbLPJxZ5OLPJxZ5OLPJxZ5OLPJxZ5OKlIHCiC5Vxwx28DgXgcC8DgXgcC8DgXgcC8DgTFVG8aF7+P9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/fK04bzMG1DsWodi1DsWodi1DsWodi1DsNpU6YylTuEUOXWSC6yQXWSC6yQXWSC6yQXWSC6yQVSfwDKVdpY7ay1DsWodi1DsWodi1DsWodi1DsTFNHMCF5ZB1j88jXzrGVAhRDrHqjROXWOHHkLcijyBsCFC7Iie5vyFuRR5A2BChdkRPc35C3Io8gbAhQuyInub8hbkUeQNgQoXZET3N+QtyKPIGwIULsiJ7m/IW5FHkDYEKF2RE9zfkLcijyBsCFC7Iie5vySb7IU5DfciOIVxGhxj9Cjo0OBUKDWsdYaxHYxp5YM/PQHPrGg+saD6xoPrGg+saD6xoPrGgeNDJ5iThmZOu/WNB9Y0H1jQfWNB9Y0H1jQfWNBGMJ+ND/v8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAwEBPwEcf//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8BHH//xAA5EAABAQUDCQcCBQUAAAAAAAACAQADBDCTETSyNUBEcnN0g5KxBRITITFQUUFhFDJxkaFCY4CBkP/aAAgBAQAGPwL/AD/tduHpp8iKq10iKatdIimrXSIpq10iKatdIimrXSIpq10iKat3ihX6Js1loQwr5UX0VAVrpEU1a6RFNWukRTVrpEU1a6RFNWukRTVrpEU1bvPHD0B+SBUzZy6L0M0FWF06FAAUsRE+kl4jkEBDFDVE+ZMOD4UIUtKxfsklQMUISSxUX6tFOHf5Hb4hT/S5rDbUesrhDJcapYZUfvLzEuaw21HrK4QyXGqWGVH7y8xLmsNtR6yuEMlxqlhlR+8vMS5rDbUesrhDJcapYZUfvLzEuaw21HrK4QyXGqWGVH7y8xLmsNtR6yuEMlxqlhlR+8vMS5rDbUesrhDJcapYZUfvLzEuaw6qtiI9HrKWxfR0NsmHtX1QsMqNJPRYg8S5sLlHoPEHyRTG1W0fkbR+RtH5G0fkbR+RtH5G0fkb1cJw2e9odovnhIp2eS+ZL8tpHO2kc7aRztpHO2kc7aRztpHO2kc7B2j2c+eD4Zpair5p90ZEUnJfdXbaPyNo/I2j8jaPyNo/I2j8jaPyMTvxQd976gNi+wcUpL/WHF7TxSkv9YcXtPFKS/1hxe08UpL/AFhxe08UpL/WHF7TxSkv9YcXtPFKS/1hxe08UpL/AFhxewI9CEsEvTvEiNdwqC13CoLXcKgtdwqC13CoLXcKgtdwqC1v4YV4gs97O7RA3dhqqLZ6L8KjXg6ZNeDpk14OmTXg6ZNeDpk14OmTXg6ZNeDpkw9n9ngb3xCS1e7/AAjW/hRT9XgtdwqC13CoLXcKgtdwqC13CoLXcKgtdwqCxPChbRHzXukirmzgS80V4KL+8olRLLXYqsmHtS2xCX+JUaApYiRBonNmsNtR6yuEMlxqlhlR+8vMS5rDbUesrhDJcapYZUfvLzEuaw21HrK4QyXGqWGVH7y8xLmsNtR6yuEMlxqlhlR+8vMS5rDbUesrhDJcapYZUfvLzEuaw21HrK4QyXGqWGVH7y8xLmsNtR6yuEMlxqlhlR+8vMS5q5eF6AaEv7shgSEJJaip9ZLzwyQu4CAtnzJhyekgito2r90kqqrYiNFvna2gb4yH9FXNu45jYh0PwD1URspRlcmylGVybKUZXJspRlcmylGVybKUZXJspRlcmsLtGLVF/vFLQQ7QixFPREfE2UoyuTZSjK5NlKMrk2UoyuTZSjK5NlKMrk2UoyuTeG+jol4K/wBJPVVP+AH/xAAoEAABAgUDBAIDAQAAAAAAAAABAPARMFFxwSFAYTFBUKGBsYCR0ZD/2gAIAQEAAT8h/P8A4J2T0nVhOrCdWE6sJ1YTqwnVhEoL6kgA9S9fFxED6TqwnVhOrCdWE6sJ1YTqwuEdA9jbRoBAyhMFC+2bQJIclZQALr9Rk6bVK0JIRH5kwD3GiAPYoPBFlygbVzolOryWGrfwHOiU6vJYat/Ac6JTq8lhq38BzolOryWGrfwHOiU6vJYat/Ac6JTq8lhq38BzolOryWGrfwBHCEmmiUMQEiBQ6mSNoEGLxSimxIg7YGgrRYL9/lczbrmbdczbrmbdczbrmbdczbowgDT0I6P2UWbMNLqCRprCC4m2XE2y4m2XE2y4m2XE2y4m2XE2y6tWBFjoS8NOUVDDlH9LmbdczbrmbdczbrmbdczbrmbdQuIIHQvB7I6mJ37q0lxo8S6tJcaPEurSXGjxLq0lxo8S6tJcaPEurSXGjxLq0lxo8S6tJcaPAFnDRj0isCYp1ZTqynVlOrKdWU6sp1ZR5onYf2QiPHWTpA9R2TqwnVhOrCdWE6sJ1YTqwnVhFzcVkIwOgOpMUNaj2ivtOrKdWU6sp1ZTqynVlOrKhN5o6FgYn42wJoOKghKBzI5Hc6j6AkwooGiOhjlDhBpQAtq50SnV5LDVv4DnRKdXksNW/gOdEp1eSw1b+A50SnV5LDVv4DnRKdXksNW/gOdEp1eSw1b+A50SnV5LDVv4EeP4sAFRD3GiAPcSYbaa6hB1HuTTmpESAe5IywESSYABR8BqpJG2FRr/ACYFNzKbmU3MpuZTcym5lNzKJes4Ew+5egkAAA9puZTcym5lNzKbmU3MpuZRl1HFb4J/wA//2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNPPPPNPPPOPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPHPPPOPPPPPPPPPPPPPPPLDDDDHPPPOLDDDLPPPPPPPPPPPPPPPPPPPKPPPPPPPPPPPPPPPPPPPPPPPPKPPPPPPPPPPPPPPPPPPPPPPPPKPPPPPPPPPPPPPPPPMMMNOMMMJMMMMPPPPPPPPPPPPPPPPNPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPGPPPPNPPPPPPPPJPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP/xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/EBx//8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPxAcf//EACYQAQABAwQBBQEBAQEAAAAAAAERACExMFDw8UFAUWFxgZGhgJD/2gAIAQEAAT8Q/wC/7iwi5HtITQrVq1atWrCYGTo91YGmFR4LPuJBNCtWrVq1ashDEGcXFwPTMgkmUNR+NBDFHgkAGjGQMElGBYlk+V0Z5/JGGs5ADHmL2oAINBHwCRqEGyJkowgOspMT9B689m533LVRHs3O+5aqI9m533LVRHs3O+5aqI9m533LVRHs3O+5aqI9m532jVRKGE+AMr9aRbEZ5iB/Ef3REhc/ylj/ADSBSf8AhFB/npgQrBGWBKMPeT812GvYa9hr2GvYa9hr2Gpvwi7fIkP6NGdVgHBWMCAAY8AD0GvQa9Br0GvQa9Br0GvQaoA4tpWaDaBQ+Uxag7pCD7WQfwrsNew17DXsNew17DXsNVC+nwRDKqvkhPCUlElbq+vxc7blW4udtyrcXO25VuLnbcq3FztuVbi523Ktxc7blW4udtprQPDZ/YhgPiQnJbQq1atWrVqnZQW6PwSalFaSYDLLyEHLNodGrVq1atWrVYBaqOR+8hLB7EzZWRExA+wcaFWrVq1atUQqIDAlRkHwX0xHUpwCT9KACDROYeHikfmB+aPkbIkEb9njSCi7bBED6D157NzvuWqiPZud9y1UR7NzvuWqiPZud9y1UR7NzvuWqiPZud9y1UR7NzvtGqigkRZmQf4UD4BI1IhZEw6MktLQEshaSx9kTJowshWgFKuJQfbotXweCJVWwBlr5etjM/RPTY2XGH0I86AMGDBgwYMKoQ8D2Ri0qsukbFYO/sAQNAGDBgwYMH/q6K5SP8/8AP/Z'/%3e%3c/defs%3e%3c/svg%3e", Yc = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.8742%204.5804L18.5392%208.15088C18.8511%208.45416%2019.0047%208.76103%2018.9999%209.07026C18.995%209.3795%2018.8608%209.66136%2018.5984%209.91707C18.3239%2010.1847%2018.0277%2010.3203%2017.7109%2010.3262C17.3941%2010.331%2017.0797%2010.1811%2016.7677%209.87785L13.0193%206.22648C12.5937%205.8114%2012.1825%205.51762%2011.7872%205.34516C11.3917%205.1727%2010.9758%205.14535%2010.5405%205.26428C10.104%205.38203%209.63603%205.68532%209.13422%206.17295C8.44258%206.84733%208.11246%207.48007%208.14634%208.0712C8.18018%208.6623%208.52358%209.27602%209.17534%209.90996L12.954%2013.5922C13.2696%2013.8991%2013.4244%2014.2059%2013.4195%2014.5104C13.4147%2014.8161%2013.2793%2015.098%2013.012%2015.3584C12.746%2015.6177%2012.4522%2015.7533%2012.133%2015.764C11.8137%2015.7747%2011.4957%2015.6261%2011.1813%2015.3192L7.51634%2011.7487C6.92022%2011.1683%206.48975%2010.6188%206.22495%2010.1002C5.96014%209.58168%205.86099%208.99533%205.92991%208.34118C5.99158%207.78099%206.17416%207.23864%206.47887%206.71294C6.78237%206.18723%207.21768%205.64964%207.78237%205.09896C8.45466%204.44362%209.09673%203.94171%209.70858%203.59203C10.3192%203.24236%2010.9105%203.04849%2011.4812%203.00806C12.0532%202.96762%2012.6166%203.07942%2013.1741%203.34346C13.7315%203.6075%2014.2974%204.01902%2014.873%204.5804H14.8742Z'%20fill='url(%23paint0_linear_4212_6487)'/%3e%3cpath%20d='M9.12459%2018.9872L5.46081%2015.4167C5.14884%2015.1122%204.99527%2014.8066%205.00011%2014.4973C5.00495%2014.1881%205.13917%2013.9062%205.40156%2013.6505C5.67604%2013.3829%205.97229%2013.2473%206.28909%2013.2414C6.60589%2013.2366%206.92028%2013.3853%207.23225%2013.6897L10.9795%2017.3411C11.4063%2017.7562%2011.8162%2018.05%2012.2116%2018.2224C12.607%2018.3949%2013.023%2018.421%2013.4595%2018.3033C13.896%2018.1856%2014.3639%2017.8823%2014.8657%2017.3934C15.5574%2016.7191%2015.8875%2016.0863%2015.8537%2015.4952C15.8198%2014.9041%2015.4764%2014.2904%2014.8247%2013.6553L12.8114%2011.7106C12.4958%2011.4038%2012.341%2011.0969%2012.3458%2010.7925C12.3507%2010.4868%2012.4861%2010.2049%2012.7533%209.94445C13.0194%209.68514%2013.3132%209.54957%2013.6324%209.53887C13.9516%209.52816%2014.2696%209.67682%2014.584%209.9837L16.4824%2011.8165C17.0785%2012.3969%2017.509%2012.9464%2017.7738%2013.465C18.0386%2013.9835%2018.1378%2014.5699%2018.0688%2015.224C18.0072%2015.7842%2017.8246%2016.3266%2017.5199%2016.8523C17.2164%2017.378%2016.7811%2017.9156%2016.2164%2018.4663C15.5441%2019.1216%2014.902%2019.6235%2014.2902%2019.9732C13.6783%2020.3229%2013.0871%2020.5179%2012.5151%2020.5583C11.9432%2020.5988%2011.3797%2020.487%2010.8223%2020.2229C10.2648%2019.9589%209.69894%2019.5474%209.12338%2018.986L9.12459%2018.9872Z'%20fill='url(%23paint1_linear_4212_6487)'/%3e%3cpath%20d='M11.4098%209.77448C12.153%209.77448%2012.7556%209.18182%2012.7556%208.4507C12.7556%207.71962%2012.153%207.12695%2011.4098%207.12695C10.6665%207.12695%2010.064%207.71962%2010.064%208.4507C10.064%209.18182%2010.6665%209.77448%2011.4098%209.77448Z'%20fill='url(%23paint2_radial_4212_6487)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_4212_6487'%20x1='17.9364'%20y1='6.66057'%20x2='6.64095'%20y2='11.7639'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23201C1B'/%3e%3cstop%20offset='0.36'%20stop-color='%2377390D'/%3e%3cstop%20offset='0.67'%20stop-color='%23EA8101'/%3e%3cstop%20offset='1'%20stop-color='%23F4B852'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_4212_6487'%20x1='6.3763'%20y1='17.0541'%20x2='19.5023'%20y2='13.0825'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%231F1D1C'/%3e%3cstop%20offset='0.37'%20stop-color='%2377390D'/%3e%3cstop%20offset='0.67'%20stop-color='%23EA8101'/%3e%3cstop%20offset='1'%20stop-color='%23F4FB52'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint2_radial_4212_6487'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(11.4098%208.45191)%20scale(1.34581%201.32377)'%3e%3cstop%20stop-color='%23F4B852'/%3e%3cstop%20offset='0.33'%20stop-color='%23EA8101'/%3e%3cstop%20offset='0.64'%20stop-color='%2377390D'/%3e%3cstop%20offset='1'%20stop-color='%23211C1D'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e", Qc = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.4283%2019.185V16.4677C19.4283%2016.36%2019.3855%2016.2572%2019.3092%2016.1809L7.74741%204.61916C7.67106%204.54281%207.56829%204.5%207.46055%204.5H4.74332C4.60917%204.5%204.5%204.60917%204.5%204.74332V7.26787C4.5%207.37562%204.54281%207.47837%204.61916%207.55472L8.76923%2011.7047C8.86412%2011.7997%208.86412%2011.9538%208.76923%2012.0487L4.57136%2016.2465C4.52569%2016.2922%204.5%2016.3543%204.5%2016.4185V19.185C4.5%2019.319%204.60917%2019.4283%204.74332%2019.4283H9.28369C9.41784%2019.4283%209.527%2019.319%209.527%2019.185V17.5552C9.527%2017.491%209.55271%2017.4289%209.59838%2017.3832L11.8504%2015.1312C11.9453%2015.0363%2012.0994%2015.0363%2012.1943%2015.1312L16.3729%2019.3099C16.4492%2019.3862%2016.552%2019.429%2016.6597%2019.429H19.1843C19.3185%2019.429%2019.4276%2019.3198%2019.4276%2019.1857L19.4283%2019.185Z'%20fill='white'/%3e%3cpath%20d='M13.372%208.09816H15.6461C15.781%208.09816%2015.8909%208.20805%2015.8909%208.34292V10.617C15.8909%2010.8353%2016.1549%2010.9445%2016.309%2010.7897L19.4287%207.66505C19.4743%207.61937%2019.5001%207.5573%2019.5001%207.49236V4.75588C19.5001%204.62102%2019.3908%204.51114%2019.2553%204.51114L16.4781%204.50757C16.4132%204.50757%2016.3511%204.53326%2016.3047%204.57892L13.1986%207.68003C13.0445%207.83415%2013.1537%208.09816%2013.3713%208.09816H13.372Z'%20fill='%23EE7A30'/%3e%3c/svg%3e";
function bs(e, t = 4, r = 5) {
  if (e.length <= t + r)
    return e;
  const n = e.slice(0, t), i = e.slice(e.length - r);
  return `${n}...${i}`;
}
const wh = {
  [J.MAGICEDEN]: Xc,
  [J.UNISAT]: Yc,
  [J.XVERSE]: Qc,
  [J.LEATHER]: Gc,
  [J.OKX]: qc
}, mh = {
  [ni.MAINNET]: "Mainnet",
  [ni.TESTNET]: "Testnet",
  [ni.SIGNET]: "Signet"
};
function yh({
  address: e,
  network: t,
  onViewProfile: r,
  onChangeWallet: n,
  onDisconnectWallet: i,
  renderAvatar: s
}) {
  const { wallet: o } = Xt();
  return /* @__PURE__ */ Y.jsx(
    An,
    {
      as: "section",
      className: "ord-connect-font ord-wallet-connected-container relative inline-block text-left",
      children: ({ open: a }) => /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
        /* @__PURE__ */ Y.jsxs(An.Button, { className: "ord-wallet-connected-button", children: [
          /* @__PURE__ */ Y.jsxs("div", { className: "wallet-identifier-container", children: [
            s ? s(e, "large") : /* @__PURE__ */ Y.jsx(
              bc,
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
                src: wh[o],
                alt: `${o} is connected`
              }
            )
          ] }),
          /* @__PURE__ */ Y.jsxs("section", { className: "address-container", children: [
            /* @__PURE__ */ Y.jsx("p", { className: "address", children: bs(e) }),
            /* @__PURE__ */ Y.jsxs("section", { className: "network-container", children: [
              /* @__PURE__ */ Y.jsx("div", { className: "status-indicator" }),
              /* @__PURE__ */ Y.jsx("p", { className: "network", children: mh[t] ?? t })
            ] })
          ] }),
          /* @__PURE__ */ Y.jsx(
            "img",
            {
              src: ph,
              className: `dropdown-button ${a ? "close-dropdown-button" : "expand-dropdown-button"}`,
              alt: ""
            }
          )
        ] }),
        /* @__PURE__ */ Y.jsx(
          Li,
          {
            as: mt,
            enter: "transition ease-out duration-100",
            enterFrom: "transform opacity-0 scale-95",
            enterTo: "transform opacity-100 scale-100",
            leave: "transition ease-in duration-75",
            leaveFrom: "transform opacity-100 scale-100",
            leaveTo: "transform opacity-0 scale-95",
            children: /* @__PURE__ */ Y.jsxs(An.Items, { className: "ord-wallet-connection-dropdown", children: [
              /* @__PURE__ */ Y.jsxs(
                An.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => r == null ? void 0 : r(),
                  children: [
                    /* @__PURE__ */ Y.jsx("span", { className: "label", children: "View profile" }),
                    /* @__PURE__ */ Y.jsx("span", { className: "value", children: bs(e) })
                  ]
                }
              ),
              /* @__PURE__ */ Y.jsx(
                An.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => n == null ? void 0 : n(),
                  children: /* @__PURE__ */ Y.jsx("span", { className: "change-wallet-label", children: "Change wallet" })
                }
              ),
              /* @__PURE__ */ Y.jsx("hr", { className: "horizontal-separator" }),
              /* @__PURE__ */ Y.jsxs(
                An.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => i == null ? void 0 : i(),
                  children: [
                    /* @__PURE__ */ Y.jsx("span", { className: "label", children: "Disconnect wallet" }),
                    /* @__PURE__ */ Y.jsx("img", { src: gh, className: "logout-icon", alt: "" })
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
function Ah({
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
const Eh = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2022C17.5228%2022%2022%2017.5228%2022%2012C22%206.47715%2017.5228%202%2012%202C6.47715%202%202%206.47715%202%2012C2%2017.5228%206.47715%2022%2012%2022Z'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%209L9%2015'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%209L15%2015'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
function zc() {
  return typeof window > "u" ? !1 : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );
}
async function Ph() {
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
const bh = {
  [J.OKX]: "https://www.okx.com/web3",
  [J.MAGICEDEN]: "https://wallet.magiceden.io/",
  [J.UNISAT]: "https://unisat.io/download",
  // their www subdomain doesn't work
  [J.XVERSE]: "https://www.xverse.app/download",
  [J.LEATHER]: "https://leather.io/install-extension"
}, Sh = async ({
  network: e,
  wallet: t,
  chain: r = Vt.BITCOIN
}, { readOnly: n = !1 } = {}) => {
  switch (t) {
    case J.UNISAT: {
      const i = await Bl(e, r, { readOnly: n });
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
    case J.XVERSE: {
      const i = await Rl(
        // @ts-ignore
        e === "testnet4" ? "testnet" : e
      );
      if (!i || i.length < 1)
        throw new Error("Xverse via Ordit returned no addresses");
      const s = i.find(
        (a) => a.format === "p2sh-p2wpkh" || a.format === "segwit"
      );
      if (!s)
        throw new Error(
          "Xverse via Ordit did not return a P2SH or Segwit address"
        );
      const o = i.find(
        (a) => a.format === "taproot"
      );
      if (!o)
        throw new Error("Xverse via Ordit did not return a Taproot address");
      return {
        address: {
          ordinals: o.address,
          payments: s.address
        },
        publicKey: {
          ordinals: o.publicKey,
          payments: s.publicKey
        },
        format: {
          ordinals: o.format,
          payments: s.format
        }
      };
    }
    case J.MAGICEDEN: {
      const i = await Tl(e);
      if (!i || i.length < 1)
        throw new Error("Magic Eden via Ordit returned no addresses");
      const s = i.find(
        (a) => a.format === "segwit" || a.format === "p2sh-p2wpkh"
      );
      if (!s)
        throw new Error(
          "Magic Eden via Ordit did not return a P2SH or Segwit address"
        );
      const o = i.find(
        (a) => a.format === "taproot"
      );
      if (!o)
        throw new Error(
          "Magic Eden via Ordit did not return a Taproot address"
        );
      return {
        address: {
          ordinals: o.address,
          payments: s.address
        },
        publicKey: {
          ordinals: o.publicKey,
          payments: s.publicKey
        },
        format: {
          ordinals: o.format,
          payments: s.format
        }
      };
    }
    case J.LEATHER: {
      const i = await bl(e);
      if (!i || i.length < 1)
        throw new Error("Leather via Ordit returned no addresses");
      const s = i.find(
        (a) => a.format === "segwit"
      );
      if (!s)
        throw new Error("Leather via Ordit did not return a Segwit address");
      const o = i.find(
        (a) => a.format === "taproot"
      );
      if (!o)
        throw new Error("Leather via Ordit did not return a Taproot address");
      return {
        address: {
          ordinals: o.address,
          payments: s.address
        },
        publicKey: {
          ordinals: o.publicKey,
          payments: s.publicKey
        },
        format: {
          ordinals: o.format,
          payments: s.format
        }
      };
    }
    case J.OKX: {
      const i = await Ol(e);
      if (!i || i.length < 1)
        throw new Error("OKX via Ordit returned no addresses");
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
function vh({
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
    address: f,
    publicKey: m,
    format: p,
    wallet: w,
    chain: T
  } = Xt(), E = (B, C) => {
    t(C.message ?? C.toString()), console.error(`Error while connecting to ${B} wallet`, C), a(), C instanceof Al && window.open(
      bh[B],
      "_blank",
      "noopener,noreferrer"
    );
  }, R = async (B, { readOnly: C = !1 } = {}) => {
    try {
      const { address: j, publicKey: y, format: S } = await Sh(
        { network: n, wallet: B, chain: T },
        { readOnly: C }
      );
      return r({
        ordinals: j.ordinals,
        payments: j.payments
      }), s({
        ordinals: y.ordinals,
        payments: y.payments
      }), i(B), o({
        ordinals: S.ordinals,
        payments: S.payments
      }), e(), !0;
    } catch (j) {
      return E(B, j), !1;
    }
  };
  return be(() => {
    if (w !== J.UNISAT)
      return;
    let B = !0, C = !1;
    const j = () => R(J.UNISAT);
    return f && m && p && (async () => {
      const S = await Ph();
      if (B) {
        if (!S) {
          a();
          return;
        }
        C = await R(J.UNISAT, {
          readOnly: !0
        }), B && C && window.unisat.addListener("accountsChanged", j);
      }
    })(), () => {
      B = !1, C && window.unisat.removeListener("accountsChanged", j);
    };
  }, [w]), { connectWallet: R };
}
const Th = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%2018L15%2012L9%206'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", _h = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20stroke='%23fff'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20stroke-width='2'%3e%3ccircle%20cx='22'%20cy='22'%20r='1'%3e%3canimate%20attributeName='r'%20begin='0s'%20dur='1.8s'%20values='1;%2020'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.165,%200.84,%200.44,%201'%20repeatCount='indefinite'/%3e%3canimate%20attributeName='stroke-opacity'%20begin='0s'%20dur='1.8s'%20values='1;%200'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.3,%200.61,%200.355,%201'%20repeatCount='indefinite'/%3e%3c/circle%3e%3ccircle%20cx='22'%20cy='22'%20r='1'%3e%3canimate%20attributeName='r'%20begin='-0.9s'%20dur='1.8s'%20values='1;%2020'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.165,%200.84,%200.44,%201'%20repeatCount='indefinite'/%3e%3canimate%20attributeName='stroke-opacity'%20begin='-0.9s'%20dur='1.8s'%20values='1;%200'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.3,%200.61,%200.355,%201'%20repeatCount='indefinite'/%3e%3c/circle%3e%3c/g%3e%3c/svg%3e", Ih = {
  [J.MAGICEDEN]: "Magic Eden",
  [J.UNISAT]: "UniSat",
  [J.XVERSE]: "Xverse",
  [J.LEATHER]: "Leather",
  [J.OKX]: "OKX"
};
function Oh({
  wallet: e,
  onConnect: t,
  icon: r,
  renderAvatar: n,
  isPreferred: i
}) {
  const s = zc(), { wallet: o, address: a } = Xt(), [f, m] = Ae(!1), p = Ih[e], w = async () => {
    m(!0);
    try {
      await t();
    } catch {
    }
    m(!1);
  }, T = o === e && a.ordinals;
  return /* @__PURE__ */ Y.jsx(
    "button",
    {
      type: "button",
      className: "wallet-option-button",
      onClick: w,
      children: /* @__PURE__ */ Y.jsxs("div", { className: "option-wrapper", children: [
        /* @__PURE__ */ Y.jsx("img", { className: "wallet-icon", src: r, alt: "" }),
        /* @__PURE__ */ Y.jsxs("div", { className: "wallet-option", children: [
          /* @__PURE__ */ Y.jsx("p", { className: "wallet-option-label", children: p }),
          /* @__PURE__ */ Y.jsx("p", { className: "wallet-option-subtitle", children: s ? "Available on app" : "" })
        ] }),
        o === e && a.ordinals ? /* @__PURE__ */ Y.jsxs("div", { className: "wallet-option-connected-address", children: [
          n ? n(a.ordinals, "small") : /* @__PURE__ */ Y.jsx(
            bc,
            {
              size: s ? 12 : 16,
              variant: "beam",
              name: a.ordinals,
              colors: ["#1C2DCB", "#F226B8"]
            }
          ),
          /* @__PURE__ */ Y.jsx("span", { className: "label", children: bs(a.ordinals) })
        ] }) : null,
        !T && i ? /* @__PURE__ */ Y.jsx("span", { className: "preferred-label", children: "Preferred" }) : null,
        f ? /* @__PURE__ */ Y.jsx(
          "img",
          {
            src: _h,
            width: s ? 20 : 24,
            height: s ? 20 : 24,
            alt: `${p} extension is loading`
          }
        ) : /* @__PURE__ */ Y.jsx(
          "img",
          {
            src: Th,
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
const kh = {
  [Vt.BITCOIN]: "Bitcoin",
  [Vt.FRACTAL_BITCOIN]: "Fractal Bitcoin"
};
function xh({
  isOpen: e,
  closeModal: t,
  renderAvatar: r,
  preferredWallet: n,
  walletsOrder: i,
  visibleWallets: s
}) {
  const [o, a] = Ae(""), { connectWallet: f } = vh({
    onClose: t,
    onError: (E) => a(E)
  }), { network: m, chain: p } = Xt(), w = zc(), T = Me(() => {
    const R = [
      {
        wallet: J.OKX,
        onConnect: () => f(J.OKX),
        icon: qc,
        hidden: w && m !== ni.MAINNET,
        order: 20,
        chains: [Vt.BITCOIN]
      },
      {
        wallet: J.UNISAT,
        onConnect: () => f(J.UNISAT),
        icon: Yc,
        hidden: w,
        order: 21,
        chains: [Vt.BITCOIN, Vt.FRACTAL_BITCOIN]
      },
      {
        wallet: J.XVERSE,
        onConnect: () => f(J.XVERSE),
        icon: Qc,
        order: 22,
        chains: [Vt.BITCOIN]
      },
      {
        wallet: J.MAGICEDEN,
        onConnect: () => f(J.MAGICEDEN),
        icon: Xc,
        order: 23,
        chains: [Vt.BITCOIN]
      },
      {
        wallet: J.LEATHER,
        onConnect: () => f(J.LEATHER),
        icon: Gc,
        hidden: w,
        order: 24,
        chains: [Vt.BITCOIN]
      }
    ].filter((C) => (s || []).includes(C.wallet)).filter(
      (C) => C.chains.includes(p) && !C.hidden
    );
    return i ? R.map((C) => {
      const j = i.findIndex(
        (y) => y === C.wallet
      );
      return j >= 0 ? { ...C, order: j } : C;
    }).sort((C, j) => C.order - j.order) : R;
  }, [w, m, i, f, p]);
  return /* @__PURE__ */ Y.jsx(Li, { appear: !0, show: e, as: mt, children: /* @__PURE__ */ Y.jsxs(
    Ho,
    {
      as: "div",
      className: "ord-connect-font ord-connect-wallet-modal",
      onClose: t,
      children: [
        /* @__PURE__ */ Y.jsx(
          Li.Child,
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
          Li.Child,
          {
            as: mt,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ Y.jsxs(Ho.Panel, { className: "panel", children: [
              /* @__PURE__ */ Y.jsxs("section", { className: "panel-title-container", children: [
                /* @__PURE__ */ Y.jsxs(Ho.Title, { as: "h3", className: "panel-title", children: [
                  "Choose ",
                  kh[p],
                  " wallet to connect"
                ] }),
                /* @__PURE__ */ Y.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: t,
                    className: "close-button",
                    children: /* @__PURE__ */ Y.jsx("img", { src: Eh, alt: "Close" })
                  }
                )
              ] }),
              /* @__PURE__ */ Y.jsxs("section", { className: "panel-content-container", children: [
                /* @__PURE__ */ Y.jsx("section", { className: "panel-content-inner-container", children: T.map((E, R) => {
                  const B = R === T.length - 1;
                  return /* @__PURE__ */ Y.jsxs(mt, { children: [
                    /* @__PURE__ */ Y.jsx(
                      Oh,
                      {
                        wallet: E.wallet,
                        onConnect: async () => {
                          a("");
                          const C = E.onConnect().then((y) => (y && a(""), y)), j = await Promise.race([
                            C,
                            new Promise((y) => {
                              setTimeout(() => y("timeout"), 5e3);
                            })
                          ]);
                          return typeof j == "string" ? (a(
                            "No wallet pop-up? The extension is not responding. Try reloading your browser."
                          ), C) : j;
                        },
                        icon: E.icon,
                        renderAvatar: r,
                        isPreferred: n === E.wallet
                      }
                    ),
                    !B && /* @__PURE__ */ Y.jsx("hr", { className: "horizontal-separator" })
                  ] }, E.wallet);
                }) }),
                /* @__PURE__ */ Y.jsx("p", { className: "error-message", children: o })
              ] })
            ] })
          }
        ) }) })
      ]
    }
  ) });
}
function J2({
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
    disconnectWallet: f,
    network: m,
    isModalOpen: p,
    openModal: w,
    closeModal: T,
    visibleWallets: E
  } = Xt(), R = Vl(), B = () => e ? null : a != null && a.ordinals ? /* @__PURE__ */ Y.jsx(
    yh,
    {
      address: a.ordinals,
      network: m,
      onViewProfile: t,
      onChangeWallet: () => {
        w(), r == null || r();
      },
      onDisconnectWallet: () => {
        f(), n == null || n();
      },
      renderAvatar: i
    }
  ) : /* @__PURE__ */ Y.jsx(Ah, { disabled: !R, openModal: w });
  return /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
    B(),
    R ? /* @__PURE__ */ Y.jsx(
      xh,
      {
        isOpen: p,
        closeModal: T,
        renderAvatar: i,
        preferredWallet: s,
        walletsOrder: o,
        visibleWallets: E
      }
    ) : null
  ] });
}
var Bh = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, jo = Math.ceil, _t = Math.floor, wt = "[BigNumber Error] ", ba = wt + "Number primitive has more than 15 significant digits: ", Bt = 1e14, Z = 14, Ko = 9007199254740991, Wo = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Er = 1e7, je = 1e9;
function Jc(e) {
  var t, r, n, i = y.prototype = { constructor: y, toString: null, valueOf: null }, s = new y(1), o = 20, a = 4, f = -7, m = 21, p = -1e7, w = 1e7, T = !1, E = 1, R = 0, B = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, C = "0123456789abcdefghijklmnopqrstuvwxyz", j = !0;
  function y(d, l) {
    var A, x, h, P, k, v, O, U, H = this;
    if (!(H instanceof y)) return new y(d, l);
    if (l == null) {
      if (d && d._isBigNumber === !0) {
        H.s = d.s, !d.c || d.e > w ? H.c = H.e = null : d.e < p ? H.c = [H.e = 0] : (H.e = d.e, H.c = d.c.slice());
        return;
      }
      if ((v = typeof d == "number") && d * 0 == 0) {
        if (H.s = 1 / d < 0 ? (d = -d, -1) : 1, d === ~~d) {
          for (P = 0, k = d; k >= 10; k /= 10, P++) ;
          P > w ? H.c = H.e = null : (H.e = P, H.c = [d]);
          return;
        }
        U = String(d);
      } else {
        if (!Bh.test(U = String(d))) return n(H, U, v);
        H.s = U.charCodeAt(0) == 45 ? (U = U.slice(1), -1) : 1;
      }
      (P = U.indexOf(".")) > -1 && (U = U.replace(".", "")), (k = U.search(/e/i)) > 0 ? (P < 0 && (P = k), P += +U.slice(k + 1), U = U.substring(0, k)) : P < 0 && (P = U.length);
    } else {
      if (ke(l, 2, C.length, "Base"), l == 10 && j)
        return H = new y(d), N(H, o + H.e + 1, a);
      if (U = String(d), v = typeof d == "number") {
        if (d * 0 != 0) return n(H, U, v, l);
        if (H.s = 1 / d < 0 ? (U = U.slice(1), -1) : 1, y.DEBUG && U.replace(/^0\.0*|\./, "").length > 15)
          throw Error(ba + d);
      } else
        H.s = U.charCodeAt(0) === 45 ? (U = U.slice(1), -1) : 1;
      for (A = C.slice(0, l), P = k = 0, O = U.length; k < O; k++)
        if (A.indexOf(x = U.charAt(k)) < 0) {
          if (x == ".") {
            if (k > P) {
              P = O;
              continue;
            }
          } else if (!h && (U == U.toUpperCase() && (U = U.toLowerCase()) || U == U.toLowerCase() && (U = U.toUpperCase()))) {
            h = !0, k = -1, P = 0;
            continue;
          }
          return n(H, String(d), v, l);
        }
      v = !1, U = r(U, l, 10, H.s), (P = U.indexOf(".")) > -1 ? U = U.replace(".", "") : P = U.length;
    }
    for (k = 0; U.charCodeAt(k) === 48; k++) ;
    for (O = U.length; U.charCodeAt(--O) === 48; ) ;
    if (U = U.slice(k, ++O)) {
      if (O -= k, v && y.DEBUG && O > 15 && (d > Ko || d !== _t(d)))
        throw Error(ba + H.s * d);
      if ((P = P - k - 1) > w)
        H.c = H.e = null;
      else if (P < p)
        H.c = [H.e = 0];
      else {
        if (H.e = P, H.c = [], k = (P + 1) % Z, P < 0 && (k += Z), k < O) {
          for (k && H.c.push(+U.slice(0, k)), O -= Z; k < O; )
            H.c.push(+U.slice(k, k += Z));
          k = Z - (U = U.slice(k)).length;
        } else
          k -= O;
        for (; k--; U += "0") ;
        H.c.push(+U);
      }
    } else
      H.c = [H.e = 0];
  }
  y.clone = Jc, y.ROUND_UP = 0, y.ROUND_DOWN = 1, y.ROUND_CEIL = 2, y.ROUND_FLOOR = 3, y.ROUND_HALF_UP = 4, y.ROUND_HALF_DOWN = 5, y.ROUND_HALF_EVEN = 6, y.ROUND_HALF_CEIL = 7, y.ROUND_HALF_FLOOR = 8, y.EUCLID = 9, y.config = y.set = function(d) {
    var l, A;
    if (d != null)
      if (typeof d == "object") {
        if (d.hasOwnProperty(l = "DECIMAL_PLACES") && (A = d[l], ke(A, 0, je, l), o = A), d.hasOwnProperty(l = "ROUNDING_MODE") && (A = d[l], ke(A, 0, 8, l), a = A), d.hasOwnProperty(l = "EXPONENTIAL_AT") && (A = d[l], A && A.pop ? (ke(A[0], -je, 0, l), ke(A[1], 0, je, l), f = A[0], m = A[1]) : (ke(A, -je, je, l), f = -(m = A < 0 ? -A : A))), d.hasOwnProperty(l = "RANGE"))
          if (A = d[l], A && A.pop)
            ke(A[0], -je, -1, l), ke(A[1], 1, je, l), p = A[0], w = A[1];
          else if (ke(A, -je, je, l), A)
            p = -(w = A < 0 ? -A : A);
          else
            throw Error(wt + l + " cannot be zero: " + A);
        if (d.hasOwnProperty(l = "CRYPTO"))
          if (A = d[l], A === !!A)
            if (A)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                T = A;
              else
                throw T = !A, Error(wt + "crypto unavailable");
            else
              T = A;
          else
            throw Error(wt + l + " not true or false: " + A);
        if (d.hasOwnProperty(l = "MODULO_MODE") && (A = d[l], ke(A, 0, 9, l), E = A), d.hasOwnProperty(l = "POW_PRECISION") && (A = d[l], ke(A, 0, je, l), R = A), d.hasOwnProperty(l = "FORMAT"))
          if (A = d[l], typeof A == "object") B = A;
          else throw Error(wt + l + " not an object: " + A);
        if (d.hasOwnProperty(l = "ALPHABET"))
          if (A = d[l], typeof A == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(A))
            j = A.slice(0, 10) == "0123456789", C = A;
          else
            throw Error(wt + l + " invalid: " + A);
      } else
        throw Error(wt + "Object expected: " + d);
    return {
      DECIMAL_PLACES: o,
      ROUNDING_MODE: a,
      EXPONENTIAL_AT: [f, m],
      RANGE: [p, w],
      CRYPTO: T,
      MODULO_MODE: E,
      POW_PRECISION: R,
      FORMAT: B,
      ALPHABET: C
    };
  }, y.isBigNumber = function(d) {
    if (!d || d._isBigNumber !== !0) return !1;
    if (!y.DEBUG) return !0;
    var l, A, x = d.c, h = d.e, P = d.s;
    e: if ({}.toString.call(x) == "[object Array]") {
      if ((P === 1 || P === -1) && h >= -je && h <= je && h === _t(h)) {
        if (x[0] === 0) {
          if (h === 0 && x.length === 1) return !0;
          break e;
        }
        if (l = (h + 1) % Z, l < 1 && (l += Z), String(x[0]).length == l) {
          for (l = 0; l < x.length; l++)
            if (A = x[l], A < 0 || A >= Bt || A !== _t(A)) break e;
          if (A !== 0) return !0;
        }
      }
    } else if (x === null && h === null && (P === null || P === 1 || P === -1))
      return !0;
    throw Error(wt + "Invalid BigNumber: " + d);
  }, y.maximum = y.max = function() {
    return I(arguments, -1);
  }, y.minimum = y.min = function() {
    return I(arguments, 1);
  }, y.random = function() {
    var d = 9007199254740992, l = Math.random() * d & 2097151 ? function() {
      return _t(Math.random() * d);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(A) {
      var x, h, P, k, v, O = 0, U = [], H = new y(s);
      if (A == null ? A = o : ke(A, 0, je), k = jo(A / Z), T)
        if (crypto.getRandomValues) {
          for (x = crypto.getRandomValues(new Uint32Array(k *= 2)); O < k; )
            v = x[O] * 131072 + (x[O + 1] >>> 11), v >= 9e15 ? (h = crypto.getRandomValues(new Uint32Array(2)), x[O] = h[0], x[O + 1] = h[1]) : (U.push(v % 1e14), O += 2);
          O = k / 2;
        } else if (crypto.randomBytes) {
          for (x = crypto.randomBytes(k *= 7); O < k; )
            v = (x[O] & 31) * 281474976710656 + x[O + 1] * 1099511627776 + x[O + 2] * 4294967296 + x[O + 3] * 16777216 + (x[O + 4] << 16) + (x[O + 5] << 8) + x[O + 6], v >= 9e15 ? crypto.randomBytes(7).copy(x, O) : (U.push(v % 1e14), O += 7);
          O = k / 7;
        } else
          throw T = !1, Error(wt + "crypto unavailable");
      if (!T)
        for (; O < k; )
          v = l(), v < 9e15 && (U[O++] = v % 1e14);
      for (k = U[--O], A %= Z, k && A && (v = Wo[Z - A], U[O] = _t(k / v) * v); U[O] === 0; U.pop(), O--) ;
      if (O < 0)
        U = [P = 0];
      else {
        for (P = -1; U[0] === 0; U.splice(0, 1), P -= Z) ;
        for (O = 1, v = U[0]; v >= 10; v /= 10, O++) ;
        O < Z && (P -= Z - O);
      }
      return H.e = P, H.c = U, H;
    };
  }(), y.sum = function() {
    for (var d = 1, l = arguments, A = new y(l[0]); d < l.length; ) A = A.plus(l[d++]);
    return A;
  }, r = /* @__PURE__ */ function() {
    var d = "0123456789";
    function l(A, x, h, P) {
      for (var k, v = [0], O, U = 0, H = A.length; U < H; ) {
        for (O = v.length; O--; v[O] *= x) ;
        for (v[0] += P.indexOf(A.charAt(U++)), k = 0; k < v.length; k++)
          v[k] > h - 1 && (v[k + 1] == null && (v[k + 1] = 0), v[k + 1] += v[k] / h | 0, v[k] %= h);
      }
      return v.reverse();
    }
    return function(A, x, h, P, k) {
      var v, O, U, H, W, G, q, Q, de = A.indexOf("."), ue = o, ie = a;
      for (de >= 0 && (H = R, R = 0, A = A.replace(".", ""), Q = new y(x), G = Q.pow(A.length - de), R = H, Q.c = l(
        Jt(vt(G.c), G.e, "0"),
        10,
        h,
        d
      ), Q.e = Q.c.length), q = l(A, x, h, k ? (v = C, d) : (v = d, C)), U = H = q.length; q[--H] == 0; q.pop()) ;
      if (!q[0]) return v.charAt(0);
      if (de < 0 ? --U : (G.c = q, G.e = U, G.s = P, G = t(G, Q, ue, ie, h), q = G.c, W = G.r, U = G.e), O = U + ue + 1, de = q[O], H = h / 2, W = W || O < 0 || q[O + 1] != null, W = ie < 4 ? (de != null || W) && (ie == 0 || ie == (G.s < 0 ? 3 : 2)) : de > H || de == H && (ie == 4 || W || ie == 6 && q[O - 1] & 1 || ie == (G.s < 0 ? 8 : 7)), O < 1 || !q[0])
        A = W ? Jt(v.charAt(1), -ue, v.charAt(0)) : v.charAt(0);
      else {
        if (q.length = O, W)
          for (--h; ++q[--O] > h; )
            q[O] = 0, O || (++U, q = [1].concat(q));
        for (H = q.length; !q[--H]; ) ;
        for (de = 0, A = ""; de <= H; A += v.charAt(q[de++])) ;
        A = Jt(A, U, v.charAt(0));
      }
      return A;
    };
  }(), t = /* @__PURE__ */ function() {
    function d(x, h, P) {
      var k, v, O, U, H = 0, W = x.length, G = h % Er, q = h / Er | 0;
      for (x = x.slice(); W--; )
        O = x[W] % Er, U = x[W] / Er | 0, k = q * O + U * G, v = G * O + k % Er * Er + H, H = (v / P | 0) + (k / Er | 0) + q * U, x[W] = v % P;
      return H && (x = [H].concat(x)), x;
    }
    function l(x, h, P, k) {
      var v, O;
      if (P != k)
        O = P > k ? 1 : -1;
      else
        for (v = O = 0; v < P; v++)
          if (x[v] != h[v]) {
            O = x[v] > h[v] ? 1 : -1;
            break;
          }
      return O;
    }
    function A(x, h, P, k) {
      for (var v = 0; P--; )
        x[P] -= v, v = x[P] < h[P] ? 1 : 0, x[P] = v * k + x[P] - h[P];
      for (; !x[0] && x.length > 1; x.splice(0, 1)) ;
    }
    return function(x, h, P, k, v) {
      var O, U, H, W, G, q, Q, de, ue, ie, ee, Se, dt, Pt, bt, se, Fe, we = x.s == h.s ? 1 : -1, _e = x.c, pe = h.c;
      if (!_e || !_e[0] || !pe || !pe[0])
        return new y(
          // Return NaN if either NaN, or both Infinity or 0.
          !x.s || !h.s || (_e ? pe && _e[0] == pe[0] : !pe) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            _e && _e[0] == 0 || !pe ? we * 0 : we / 0
          )
        );
      for (de = new y(we), ue = de.c = [], U = x.e - h.e, we = P + U + 1, v || (v = Bt, U = It(x.e / Z) - It(h.e / Z), we = we / Z | 0), H = 0; pe[H] == (_e[H] || 0); H++) ;
      if (pe[H] > (_e[H] || 0) && U--, we < 0)
        ue.push(1), W = !0;
      else {
        for (Pt = _e.length, se = pe.length, H = 0, we += 2, G = _t(v / (pe[0] + 1)), G > 1 && (pe = d(pe, G, v), _e = d(_e, G, v), se = pe.length, Pt = _e.length), dt = se, ie = _e.slice(0, se), ee = ie.length; ee < se; ie[ee++] = 0) ;
        Fe = pe.slice(), Fe = [0].concat(Fe), bt = pe[0], pe[1] >= v / 2 && bt++;
        do {
          if (G = 0, O = l(pe, ie, se, ee), O < 0) {
            if (Se = ie[0], se != ee && (Se = Se * v + (ie[1] || 0)), G = _t(Se / bt), G > 1)
              for (G >= v && (G = v - 1), q = d(pe, G, v), Q = q.length, ee = ie.length; l(q, ie, Q, ee) == 1; )
                G--, A(q, se < Q ? Fe : pe, Q, v), Q = q.length, O = 1;
            else
              G == 0 && (O = G = 1), q = pe.slice(), Q = q.length;
            if (Q < ee && (q = [0].concat(q)), A(ie, q, ee, v), ee = ie.length, O == -1)
              for (; l(pe, ie, se, ee) < 1; )
                G++, A(ie, se < ee ? Fe : pe, ee, v), ee = ie.length;
          } else O === 0 && (G++, ie = [0]);
          ue[H++] = G, ie[0] ? ie[ee++] = _e[dt] || 0 : (ie = [_e[dt]], ee = 1);
        } while ((dt++ < Pt || ie[0] != null) && we--);
        W = ie[0] != null, ue[0] || ue.splice(0, 1);
      }
      if (v == Bt) {
        for (H = 1, we = ue[0]; we >= 10; we /= 10, H++) ;
        N(de, P + (de.e = H + U * Z - 1) + 1, k, W);
      } else
        de.e = U, de.r = +W;
      return de;
    };
  }();
  function S(d, l, A, x) {
    var h, P, k, v, O;
    if (A == null ? A = a : ke(A, 0, 8), !d.c) return d.toString();
    if (h = d.c[0], k = d.e, l == null)
      O = vt(d.c), O = x == 1 || x == 2 && (k <= f || k >= m) ? _i(O, k) : Jt(O, k, "0");
    else if (d = N(new y(d), l, A), P = d.e, O = vt(d.c), v = O.length, x == 1 || x == 2 && (l <= P || P <= f)) {
      for (; v < l; O += "0", v++) ;
      O = _i(O, P);
    } else if (l -= k, O = Jt(O, P, "0"), P + 1 > v) {
      if (--l > 0) for (O += "."; l--; O += "0") ;
    } else if (l += P - v, l > 0)
      for (P + 1 == v && (O += "."); l--; O += "0") ;
    return d.s < 0 && h ? "-" + O : O;
  }
  function I(d, l) {
    for (var A, x, h = 1, P = new y(d[0]); h < d.length; h++)
      x = new y(d[h]), (!x.s || (A = $r(P, x)) === l || A === 0 && P.s === l) && (P = x);
    return P;
  }
  function L(d, l, A) {
    for (var x = 1, h = l.length; !l[--h]; l.pop()) ;
    for (h = l[0]; h >= 10; h /= 10, x++) ;
    return (A = x + A * Z - 1) > w ? d.c = d.e = null : A < p ? d.c = [d.e = 0] : (d.e = A, d.c = l), d;
  }
  n = /* @__PURE__ */ function() {
    var d = /^(-?)0([xbo])(?=\w[\w.]*$)/i, l = /^([^.]+)\.$/, A = /^\.([^.]+)$/, x = /^-?(Infinity|NaN)$/, h = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(P, k, v, O) {
      var U, H = v ? k : k.replace(h, "");
      if (x.test(H))
        P.s = isNaN(H) ? null : H < 0 ? -1 : 1;
      else {
        if (!v && (H = H.replace(d, function(W, G, q) {
          return U = (q = q.toLowerCase()) == "x" ? 16 : q == "b" ? 2 : 8, !O || O == U ? G : W;
        }), O && (U = O, H = H.replace(l, "$1").replace(A, "0.$1")), k != H))
          return new y(H, U);
        if (y.DEBUG)
          throw Error(wt + "Not a" + (O ? " base " + O : "") + " number: " + k);
        P.s = null;
      }
      P.c = P.e = null;
    };
  }();
  function N(d, l, A, x) {
    var h, P, k, v, O, U, H, W = d.c, G = Wo;
    if (W) {
      e: {
        for (h = 1, v = W[0]; v >= 10; v /= 10, h++) ;
        if (P = l - h, P < 0)
          P += Z, k = l, O = W[U = 0], H = _t(O / G[h - k - 1] % 10);
        else if (U = jo((P + 1) / Z), U >= W.length)
          if (x) {
            for (; W.length <= U; W.push(0)) ;
            O = H = 0, h = 1, P %= Z, k = P - Z + 1;
          } else
            break e;
        else {
          for (O = v = W[U], h = 1; v >= 10; v /= 10, h++) ;
          P %= Z, k = P - Z + h, H = k < 0 ? 0 : _t(O / G[h - k - 1] % 10);
        }
        if (x = x || l < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        W[U + 1] != null || (k < 0 ? O : O % G[h - k - 1]), x = A < 4 ? (H || x) && (A == 0 || A == (d.s < 0 ? 3 : 2)) : H > 5 || H == 5 && (A == 4 || x || A == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (P > 0 ? k > 0 ? O / G[h - k] : 0 : W[U - 1]) % 10 & 1 || A == (d.s < 0 ? 8 : 7)), l < 1 || !W[0])
          return W.length = 0, x ? (l -= d.e + 1, W[0] = G[(Z - l % Z) % Z], d.e = -l || 0) : W[0] = d.e = 0, d;
        if (P == 0 ? (W.length = U, v = 1, U--) : (W.length = U + 1, v = G[Z - P], W[U] = k > 0 ? _t(O / G[h - k] % G[k]) * v : 0), x)
          for (; ; )
            if (U == 0) {
              for (P = 1, k = W[0]; k >= 10; k /= 10, P++) ;
              for (k = W[0] += v, v = 1; k >= 10; k /= 10, v++) ;
              P != v && (d.e++, W[0] == Bt && (W[0] = 1));
              break;
            } else {
              if (W[U] += v, W[U] != Bt) break;
              W[U--] = 0, v = 1;
            }
        for (P = W.length; W[--P] === 0; W.pop()) ;
      }
      d.e > w ? d.c = d.e = null : d.e < p && (d.c = [d.e = 0]);
    }
    return d;
  }
  function D(d) {
    var l, A = d.e;
    return A === null ? d.toString() : (l = vt(d.c), l = A <= f || A >= m ? _i(l, A) : Jt(l, A, "0"), d.s < 0 ? "-" + l : l);
  }
  return i.absoluteValue = i.abs = function() {
    var d = new y(this);
    return d.s < 0 && (d.s = 1), d;
  }, i.comparedTo = function(d, l) {
    return $r(this, new y(d, l));
  }, i.decimalPlaces = i.dp = function(d, l) {
    var A, x, h, P = this;
    if (d != null)
      return ke(d, 0, je), l == null ? l = a : ke(l, 0, 8), N(new y(P), d + P.e + 1, l);
    if (!(A = P.c)) return null;
    if (x = ((h = A.length - 1) - It(this.e / Z)) * Z, h = A[h]) for (; h % 10 == 0; h /= 10, x--) ;
    return x < 0 && (x = 0), x;
  }, i.dividedBy = i.div = function(d, l) {
    return t(this, new y(d, l), o, a);
  }, i.dividedToIntegerBy = i.idiv = function(d, l) {
    return t(this, new y(d, l), 0, 1);
  }, i.exponentiatedBy = i.pow = function(d, l) {
    var A, x, h, P, k, v, O, U, H, W = this;
    if (d = new y(d), d.c && !d.isInteger())
      throw Error(wt + "Exponent not an integer: " + D(d));
    if (l != null && (l = new y(l)), v = d.e > 14, !W.c || !W.c[0] || W.c[0] == 1 && !W.e && W.c.length == 1 || !d.c || !d.c[0])
      return H = new y(Math.pow(+D(W), v ? d.s * (2 - Ti(d)) : +D(d))), l ? H.mod(l) : H;
    if (O = d.s < 0, l) {
      if (l.c ? !l.c[0] : !l.s) return new y(NaN);
      x = !O && W.isInteger() && l.isInteger(), x && (W = W.mod(l));
    } else {
      if (d.e > 9 && (W.e > 0 || W.e < -1 || (W.e == 0 ? W.c[0] > 1 || v && W.c[1] >= 24e7 : W.c[0] < 8e13 || v && W.c[0] <= 9999975e7)))
        return P = W.s < 0 && Ti(d) ? -0 : 0, W.e > -1 && (P = 1 / P), new y(O ? 1 / P : P);
      R && (P = jo(R / Z + 2));
    }
    for (v ? (A = new y(0.5), O && (d.s = 1), U = Ti(d)) : (h = Math.abs(+D(d)), U = h % 2), H = new y(s); ; ) {
      if (U) {
        if (H = H.times(W), !H.c) break;
        P ? H.c.length > P && (H.c.length = P) : x && (H = H.mod(l));
      }
      if (h) {
        if (h = _t(h / 2), h === 0) break;
        U = h % 2;
      } else if (d = d.times(A), N(d, d.e + 1, 1), d.e > 14)
        U = Ti(d);
      else {
        if (h = +D(d), h === 0) break;
        U = h % 2;
      }
      W = W.times(W), P ? W.c && W.c.length > P && (W.c.length = P) : x && (W = W.mod(l));
    }
    return x ? H : (O && (H = s.div(H)), l ? H.mod(l) : P ? N(H, R, a, k) : H);
  }, i.integerValue = function(d) {
    var l = new y(this);
    return d == null ? d = a : ke(d, 0, 8), N(l, l.e + 1, d);
  }, i.isEqualTo = i.eq = function(d, l) {
    return $r(this, new y(d, l)) === 0;
  }, i.isFinite = function() {
    return !!this.c;
  }, i.isGreaterThan = i.gt = function(d, l) {
    return $r(this, new y(d, l)) > 0;
  }, i.isGreaterThanOrEqualTo = i.gte = function(d, l) {
    return (l = $r(this, new y(d, l))) === 1 || l === 0;
  }, i.isInteger = function() {
    return !!this.c && It(this.e / Z) > this.c.length - 2;
  }, i.isLessThan = i.lt = function(d, l) {
    return $r(this, new y(d, l)) < 0;
  }, i.isLessThanOrEqualTo = i.lte = function(d, l) {
    return (l = $r(this, new y(d, l))) === -1 || l === 0;
  }, i.isNaN = function() {
    return !this.s;
  }, i.isNegative = function() {
    return this.s < 0;
  }, i.isPositive = function() {
    return this.s > 0;
  }, i.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, i.minus = function(d, l) {
    var A, x, h, P, k = this, v = k.s;
    if (d = new y(d, l), l = d.s, !v || !l) return new y(NaN);
    if (v != l)
      return d.s = -l, k.plus(d);
    var O = k.e / Z, U = d.e / Z, H = k.c, W = d.c;
    if (!O || !U) {
      if (!H || !W) return H ? (d.s = -l, d) : new y(W ? k : NaN);
      if (!H[0] || !W[0])
        return W[0] ? (d.s = -l, d) : new y(H[0] ? k : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          a == 3 ? -0 : 0
        ));
    }
    if (O = It(O), U = It(U), H = H.slice(), v = O - U) {
      for ((P = v < 0) ? (v = -v, h = H) : (U = O, h = W), h.reverse(), l = v; l--; h.push(0)) ;
      h.reverse();
    } else
      for (x = (P = (v = H.length) < (l = W.length)) ? v : l, v = l = 0; l < x; l++)
        if (H[l] != W[l]) {
          P = H[l] < W[l];
          break;
        }
    if (P && (h = H, H = W, W = h, d.s = -d.s), l = (x = W.length) - (A = H.length), l > 0) for (; l--; H[A++] = 0) ;
    for (l = Bt - 1; x > v; ) {
      if (H[--x] < W[x]) {
        for (A = x; A && !H[--A]; H[A] = l) ;
        --H[A], H[x] += Bt;
      }
      H[x] -= W[x];
    }
    for (; H[0] == 0; H.splice(0, 1), --U) ;
    return H[0] ? L(d, H, U) : (d.s = a == 3 ? -1 : 1, d.c = [d.e = 0], d);
  }, i.modulo = i.mod = function(d, l) {
    var A, x, h = this;
    return d = new y(d, l), !h.c || !d.s || d.c && !d.c[0] ? new y(NaN) : !d.c || h.c && !h.c[0] ? new y(h) : (E == 9 ? (x = d.s, d.s = 1, A = t(h, d, 0, 3), d.s = x, A.s *= x) : A = t(h, d, 0, E), d = h.minus(A.times(d)), !d.c[0] && E == 1 && (d.s = h.s), d);
  }, i.multipliedBy = i.times = function(d, l) {
    var A, x, h, P, k, v, O, U, H, W, G, q, Q, de, ue, ie = this, ee = ie.c, Se = (d = new y(d, l)).c;
    if (!ee || !Se || !ee[0] || !Se[0])
      return !ie.s || !d.s || ee && !ee[0] && !Se || Se && !Se[0] && !ee ? d.c = d.e = d.s = null : (d.s *= ie.s, !ee || !Se ? d.c = d.e = null : (d.c = [0], d.e = 0)), d;
    for (x = It(ie.e / Z) + It(d.e / Z), d.s *= ie.s, O = ee.length, W = Se.length, O < W && (Q = ee, ee = Se, Se = Q, h = O, O = W, W = h), h = O + W, Q = []; h--; Q.push(0)) ;
    for (de = Bt, ue = Er, h = W; --h >= 0; ) {
      for (A = 0, G = Se[h] % ue, q = Se[h] / ue | 0, k = O, P = h + k; P > h; )
        U = ee[--k] % ue, H = ee[k] / ue | 0, v = q * U + H * G, U = G * U + v % ue * ue + Q[P] + A, A = (U / de | 0) + (v / ue | 0) + q * H, Q[P--] = U % de;
      Q[P] = A;
    }
    return A ? ++x : Q.splice(0, 1), L(d, Q, x);
  }, i.negated = function() {
    var d = new y(this);
    return d.s = -d.s || null, d;
  }, i.plus = function(d, l) {
    var A, x = this, h = x.s;
    if (d = new y(d, l), l = d.s, !h || !l) return new y(NaN);
    if (h != l)
      return d.s = -l, x.minus(d);
    var P = x.e / Z, k = d.e / Z, v = x.c, O = d.c;
    if (!P || !k) {
      if (!v || !O) return new y(h / 0);
      if (!v[0] || !O[0]) return O[0] ? d : new y(v[0] ? x : h * 0);
    }
    if (P = It(P), k = It(k), v = v.slice(), h = P - k) {
      for (h > 0 ? (k = P, A = O) : (h = -h, A = v), A.reverse(); h--; A.push(0)) ;
      A.reverse();
    }
    for (h = v.length, l = O.length, h - l < 0 && (A = O, O = v, v = A, l = h), h = 0; l; )
      h = (v[--l] = v[l] + O[l] + h) / Bt | 0, v[l] = Bt === v[l] ? 0 : v[l] % Bt;
    return h && (v = [h].concat(v), ++k), L(d, v, k);
  }, i.precision = i.sd = function(d, l) {
    var A, x, h, P = this;
    if (d != null && d !== !!d)
      return ke(d, 1, je), l == null ? l = a : ke(l, 0, 8), N(new y(P), d, l);
    if (!(A = P.c)) return null;
    if (h = A.length - 1, x = h * Z + 1, h = A[h]) {
      for (; h % 10 == 0; h /= 10, x--) ;
      for (h = A[0]; h >= 10; h /= 10, x++) ;
    }
    return d && P.e + 1 > x && (x = P.e + 1), x;
  }, i.shiftedBy = function(d) {
    return ke(d, -Ko, Ko), this.times("1e" + d);
  }, i.squareRoot = i.sqrt = function() {
    var d, l, A, x, h, P = this, k = P.c, v = P.s, O = P.e, U = o + 4, H = new y("0.5");
    if (v !== 1 || !k || !k[0])
      return new y(!v || v < 0 && (!k || k[0]) ? NaN : k ? P : 1 / 0);
    if (v = Math.sqrt(+D(P)), v == 0 || v == 1 / 0 ? (l = vt(k), (l.length + O) % 2 == 0 && (l += "0"), v = Math.sqrt(+l), O = It((O + 1) / 2) - (O < 0 || O % 2), v == 1 / 0 ? l = "5e" + O : (l = v.toExponential(), l = l.slice(0, l.indexOf("e") + 1) + O), A = new y(l)) : A = new y(v + ""), A.c[0]) {
      for (O = A.e, v = O + U, v < 3 && (v = 0); ; )
        if (h = A, A = H.times(h.plus(t(P, h, U, 1))), vt(h.c).slice(0, v) === (l = vt(A.c)).slice(0, v))
          if (A.e < O && --v, l = l.slice(v - 3, v + 1), l == "9999" || !x && l == "4999") {
            if (!x && (N(h, h.e + o + 2, 0), h.times(h).eq(P))) {
              A = h;
              break;
            }
            U += 4, v += 4, x = 1;
          } else {
            (!+l || !+l.slice(1) && l.charAt(0) == "5") && (N(A, A.e + o + 2, 1), d = !A.times(A).eq(P));
            break;
          }
    }
    return N(A, A.e + o + 1, a, d);
  }, i.toExponential = function(d, l) {
    return d != null && (ke(d, 0, je), d++), S(this, d, l, 1);
  }, i.toFixed = function(d, l) {
    return d != null && (ke(d, 0, je), d = d + this.e + 1), S(this, d, l);
  }, i.toFormat = function(d, l, A) {
    var x, h = this;
    if (A == null)
      d != null && l && typeof l == "object" ? (A = l, l = null) : d && typeof d == "object" ? (A = d, d = l = null) : A = B;
    else if (typeof A != "object")
      throw Error(wt + "Argument not an object: " + A);
    if (x = h.toFixed(d, l), h.c) {
      var P, k = x.split("."), v = +A.groupSize, O = +A.secondaryGroupSize, U = A.groupSeparator || "", H = k[0], W = k[1], G = h.s < 0, q = G ? H.slice(1) : H, Q = q.length;
      if (O && (P = v, v = O, O = P, Q -= P), v > 0 && Q > 0) {
        for (P = Q % v || v, H = q.substr(0, P); P < Q; P += v) H += U + q.substr(P, v);
        O > 0 && (H += U + q.slice(P)), G && (H = "-" + H);
      }
      x = W ? H + (A.decimalSeparator || "") + ((O = +A.fractionGroupSize) ? W.replace(
        new RegExp("\\d{" + O + "}\\B", "g"),
        "$&" + (A.fractionGroupSeparator || "")
      ) : W) : H;
    }
    return (A.prefix || "") + x + (A.suffix || "");
  }, i.toFraction = function(d) {
    var l, A, x, h, P, k, v, O, U, H, W, G, q = this, Q = q.c;
    if (d != null && (v = new y(d), !v.isInteger() && (v.c || v.s !== 1) || v.lt(s)))
      throw Error(wt + "Argument " + (v.isInteger() ? "out of range: " : "not an integer: ") + D(v));
    if (!Q) return new y(q);
    for (l = new y(s), U = A = new y(s), x = O = new y(s), G = vt(Q), P = l.e = G.length - q.e - 1, l.c[0] = Wo[(k = P % Z) < 0 ? Z + k : k], d = !d || v.comparedTo(l) > 0 ? P > 0 ? l : U : v, k = w, w = 1 / 0, v = new y(G), O.c[0] = 0; H = t(v, l, 0, 1), h = A.plus(H.times(x)), h.comparedTo(d) != 1; )
      A = x, x = h, U = O.plus(H.times(h = U)), O = h, l = v.minus(H.times(h = l)), v = h;
    return h = t(d.minus(A), x, 0, 1), O = O.plus(h.times(U)), A = A.plus(h.times(x)), O.s = U.s = q.s, P = P * 2, W = t(U, x, P, a).minus(q).abs().comparedTo(
      t(O, A, P, a).minus(q).abs()
    ) < 1 ? [U, x] : [O, A], w = k, W;
  }, i.toNumber = function() {
    return +D(this);
  }, i.toPrecision = function(d, l) {
    return d != null && ke(d, 1, je), S(this, d, l, 2);
  }, i.toString = function(d) {
    var l, A = this, x = A.s, h = A.e;
    return h === null ? x ? (l = "Infinity", x < 0 && (l = "-" + l)) : l = "NaN" : (d == null ? l = h <= f || h >= m ? _i(vt(A.c), h) : Jt(vt(A.c), h, "0") : d === 10 && j ? (A = N(new y(A), o + h + 1, a), l = Jt(vt(A.c), A.e, "0")) : (ke(d, 2, C.length, "Base"), l = r(Jt(vt(A.c), h, "0"), 10, d, x, !0)), x < 0 && A.c[0] && (l = "-" + l)), l;
  }, i.valueOf = i.toJSON = function() {
    return D(this);
  }, i._isBigNumber = !0, i[Symbol.toStringTag] = "BigNumber", i[Symbol.for("nodejs.util.inspect.custom")] = i.valueOf, e != null && y.set(e), y;
}
function It(e) {
  var t = e | 0;
  return e > 0 || e === t ? t : t - 1;
}
function vt(e) {
  for (var t, r, n = 1, i = e.length, s = e[0] + ""; n < i; ) {
    for (t = e[n++] + "", r = Z - t.length; r--; t = "0" + t) ;
    s += t;
  }
  for (i = s.length; s.charCodeAt(--i) === 48; ) ;
  return s.slice(0, i + 1 || 1);
}
function $r(e, t) {
  var r, n, i = e.c, s = t.c, o = e.s, a = t.s, f = e.e, m = t.e;
  if (!o || !a) return null;
  if (r = i && !i[0], n = s && !s[0], r || n) return r ? n ? 0 : -a : o;
  if (o != a) return o;
  if (r = o < 0, n = f == m, !i || !s) return n ? 0 : !i ^ r ? 1 : -1;
  if (!n) return f > m ^ r ? 1 : -1;
  for (a = (f = i.length) < (m = s.length) ? f : m, o = 0; o < a; o++) if (i[o] != s[o]) return i[o] > s[o] ^ r ? 1 : -1;
  return f == m ? 0 : f > m ^ r ? 1 : -1;
}
function ke(e, t, r, n) {
  if (e < t || e > r || e !== _t(e))
    throw Error(wt + (n || "Argument") + (typeof e == "number" ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e));
}
function Ti(e) {
  var t = e.c.length - 1;
  return It(e.e / Z) == t && e.c[t] % 2 != 0;
}
function _i(e, t) {
  return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t;
}
function Jt(e, t, r) {
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
var Sa = Jc();
function Z2() {
  const { network: e, publicKey: t, format: r } = Xt(), [n, i] = Ae(null), [s, o] = Ae(!1);
  return { getBalance: nt(async () => {
    o(!0);
    try {
      if (i(null), !r || !r.payments || !t || !t.payments)
        throw new Error("No wallet is connected");
      const { address: f } = El(
        t.payments,
        // @ts-ignore
        e === "testnet4" ? "testnet" : e,
        Pl[r.payments]
      )[0], p = await new Bs({ network: e }).getBalance({ address: f }), w = Number(
        new Sa(p).multipliedBy(1e8).toFixed(0, Sa.ROUND_HALF_DOWN)
      );
      return o(!1), w;
    } catch (f) {
      throw i(f.message), o(!1), f;
    }
  }, [r, e, t]), error: n, loading: s };
}
async function Hs({
  address: e,
  wallet: t,
  network: r,
  psbt: n,
  options: i
}) {
  var f, m;
  if ((f = i == null ? void 0 : i.signingIndexes) != null && f.length && ((m = i == null ? void 0 : i.inputsToSign) != null && m.length))
    throw new Error("Cannot have both indexes and inputs to sign together");
  const s = (i == null ? void 0 : i.finalize) ?? !0, o = (i == null ? void 0 : i.extractTx) ?? !0, a = () => n.data.inputs.map((p, w) => w);
  if (t === J.MAGICEDEN)
    return await _l(n, {
      network: r,
      inputsToSign: (i == null ? void 0 : i.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (i == null ? void 0 : i.signingIndexes) ?? a(),
          sigHash: i == null ? void 0 : i.sigHash
        }
      ],
      finalize: s,
      extractTx: o
    });
  if (t === J.UNISAT)
    return await Cl(n, {
      finalize: s,
      extractTx: o
    });
  if (t === J.XVERSE)
    return await Fl(n, {
      network: r,
      inputsToSign: (i == null ? void 0 : i.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (i == null ? void 0 : i.signingIndexes) ?? a(),
          // If signingIndexes is not provided, just sign everything
          sigHash: i == null ? void 0 : i.sigHash
        }
      ],
      finalize: s,
      extractTx: o
    });
  if (t === J.LEATHER)
    return await Sl(n, {
      network: r,
      finalize: s,
      extractTx: o,
      allowedSighash: i != null && i.sigHash ? [i == null ? void 0 : i.sigHash] : [],
      signAtIndexes: (i == null ? void 0 : i.signingIndexes) ?? a()
      // If signingIndexes is not provided, just sign everything
    });
  if (t === J.OKX)
    return await kl(n, {
      finalize: s,
      extractTx: o,
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
function eg() {
  const { wallet: e, network: t, address: r, publicKey: n } = Xt(), [i, s] = Ae(null), [o, a] = Ae(!1);
  return { send: nt(
    async (m, p, w, T = !0) => {
      a(!0);
      try {
        if (s(null), !r || !r.payments || !n || !n.payments || !e)
          throw new Error("No wallet is connected");
        const E = new hc({
          address: r.payments,
          feeRate: w,
          network: t,
          publicKey: n.payments,
          outputs: [
            {
              address: m,
              value: p
            }
          ]
        });
        await E.prepare();
        const R = await Hs({
          address: r.payments,
          wallet: e,
          network: t,
          psbt: E.toPSBT()
        });
        if (T) {
          const C = await new Bs({ network: t }).relay({ hex: R.hex });
          return a(!1), C;
        }
        return a(!1), R.hex;
      } catch (E) {
        return s(E.message), a(!1), null;
      }
    },
    [r, t, n, e]
  ), error: i, loading: o };
}
function tg() {
  const { wallet: e, network: t, address: r, publicKey: n } = Xt(), [i, s] = Ae(!1);
  return { send: nt(
    async ({
      toAddress: a,
      satoshis: f,
      feeRate: m,
      relay: p = !0,
      rbf: w = !1
    }) => {
      s(!0);
      try {
        if (!r || !r.payments || !n || !n.payments || !e)
          throw new Error("No wallet is connected");
        const T = new hc({
          address: r.payments,
          feeRate: m,
          network: t,
          publicKey: n.payments,
          outputs: [
            {
              address: a,
              value: f
            }
          ]
        });
        T.setRBF(w), await T.prepare();
        const E = await Hs({
          address: r.payments,
          wallet: e,
          network: t,
          psbt: T.toPSBT()
        });
        if (p) {
          const B = await new Bs({ network: t }).relay({ hex: E.hex });
          return s(!1), {
            txId: B
          };
        }
        return s(!1), {
          signedPsbtHex: E.hex
        };
      } catch (T) {
        return s(!1), {
          error: T.message
        };
      }
    },
    [r, t, n, e]
  ), isLoading: i };
}
var Zc = {}, Fn = {};
(function(e) {
  Object.defineProperties(e, { __esModule: { value: !0 }, [Symbol.toStringTag]: { value: "Module" } });
  var t = {}, r = {};
  r.byteLength = p, r.toByteArray = T, r.fromByteArray = B;
  for (var n = [], i = [], s = typeof Uint8Array < "u" ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, f = o.length; a < f; ++a)
    n[a] = o[a], i[o.charCodeAt(a)] = a;
  i[45] = 62, i[95] = 63;
  function m(y) {
    var S = y.length;
    if (S % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var I = y.indexOf("=");
    I === -1 && (I = S);
    var L = I === S ? 0 : 4 - I % 4;
    return [I, L];
  }
  function p(y) {
    var S = m(y), I = S[0], L = S[1];
    return (I + L) * 3 / 4 - L;
  }
  function w(y, S, I) {
    return (S + I) * 3 / 4 - I;
  }
  function T(y) {
    var S, I = m(y), L = I[0], N = I[1], D = new s(w(y, L, N)), d = 0, l = N > 0 ? L - 4 : L, A;
    for (A = 0; A < l; A += 4)
      S = i[y.charCodeAt(A)] << 18 | i[y.charCodeAt(A + 1)] << 12 | i[y.charCodeAt(A + 2)] << 6 | i[y.charCodeAt(A + 3)], D[d++] = S >> 16 & 255, D[d++] = S >> 8 & 255, D[d++] = S & 255;
    return N === 2 && (S = i[y.charCodeAt(A)] << 2 | i[y.charCodeAt(A + 1)] >> 4, D[d++] = S & 255), N === 1 && (S = i[y.charCodeAt(A)] << 10 | i[y.charCodeAt(A + 1)] << 4 | i[y.charCodeAt(A + 2)] >> 2, D[d++] = S >> 8 & 255, D[d++] = S & 255), D;
  }
  function E(y) {
    return n[y >> 18 & 63] + n[y >> 12 & 63] + n[y >> 6 & 63] + n[y & 63];
  }
  function R(y, S, I) {
    for (var L, N = [], D = S; D < I; D += 3)
      L = (y[D] << 16 & 16711680) + (y[D + 1] << 8 & 65280) + (y[D + 2] & 255), N.push(E(L));
    return N.join("");
  }
  function B(y) {
    for (var S, I = y.length, L = I % 3, N = [], D = 16383, d = 0, l = I - L; d < l; d += D)
      N.push(R(y, d, d + D > l ? l : d + D));
    return L === 1 ? (S = y[I - 1], N.push(
      n[S >> 2] + n[S << 4 & 63] + "=="
    )) : L === 2 && (S = (y[I - 2] << 8) + y[I - 1], N.push(
      n[S >> 10] + n[S >> 4 & 63] + n[S << 2 & 63] + "="
    )), N.join("");
  }
  var C = {};
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  C.read = function(y, S, I, L, N) {
    var D, d, l = N * 8 - L - 1, A = (1 << l) - 1, x = A >> 1, h = -7, P = I ? N - 1 : 0, k = I ? -1 : 1, v = y[S + P];
    for (P += k, D = v & (1 << -h) - 1, v >>= -h, h += l; h > 0; D = D * 256 + y[S + P], P += k, h -= 8)
      ;
    for (d = D & (1 << -h) - 1, D >>= -h, h += L; h > 0; d = d * 256 + y[S + P], P += k, h -= 8)
      ;
    if (D === 0)
      D = 1 - x;
    else {
      if (D === A)
        return d ? NaN : (v ? -1 : 1) * (1 / 0);
      d = d + Math.pow(2, L), D = D - x;
    }
    return (v ? -1 : 1) * d * Math.pow(2, D - L);
  }, C.write = function(y, S, I, L, N, D) {
    var d, l, A, x = D * 8 - N - 1, h = (1 << x) - 1, P = h >> 1, k = N === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, v = L ? 0 : D - 1, O = L ? 1 : -1, U = S < 0 || S === 0 && 1 / S < 0 ? 1 : 0;
    for (S = Math.abs(S), isNaN(S) || S === 1 / 0 ? (l = isNaN(S) ? 1 : 0, d = h) : (d = Math.floor(Math.log(S) / Math.LN2), S * (A = Math.pow(2, -d)) < 1 && (d--, A *= 2), d + P >= 1 ? S += k / A : S += k * Math.pow(2, 1 - P), S * A >= 2 && (d++, A /= 2), d + P >= h ? (l = 0, d = h) : d + P >= 1 ? (l = (S * A - 1) * Math.pow(2, N), d = d + P) : (l = S * Math.pow(2, P - 1) * Math.pow(2, N), d = 0)); N >= 8; y[I + v] = l & 255, v += O, l /= 256, N -= 8)
      ;
    for (d = d << N | l, x += N; x > 0; y[I + v] = d & 255, v += O, d /= 256, x -= 8)
      ;
    y[I + v - O] |= U * 128;
  };
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  (function(y) {
    const S = r, I = C, L = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    y.Buffer = h, y.SlowBuffer = de, y.INSPECT_MAX_BYTES = 50;
    const N = 2147483647;
    y.kMaxLength = N;
    const { Uint8Array: D, ArrayBuffer: d, SharedArrayBuffer: l } = globalThis;
    h.TYPED_ARRAY_SUPPORT = A(), !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function A() {
      try {
        const g = new D(1), c = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(c, D.prototype), Object.setPrototypeOf(g, c), g.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(h.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (h.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(h.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (h.isBuffer(this))
          return this.byteOffset;
      }
    });
    function x(g) {
      if (g > N)
        throw new RangeError('The value "' + g + '" is invalid for option "size"');
      const c = new D(g);
      return Object.setPrototypeOf(c, h.prototype), c;
    }
    function h(g, c, u) {
      if (typeof g == "number") {
        if (typeof c == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return O(g);
      }
      return P(g, c, u);
    }
    h.poolSize = 8192;
    function P(g, c, u) {
      if (typeof g == "string")
        return U(g, c);
      if (d.isView(g))
        return W(g);
      if (g == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
        );
      if (pt(g, d) || g && pt(g.buffer, d) || typeof l < "u" && (pt(g, l) || g && pt(g.buffer, l)))
        return G(g, c, u);
      if (typeof g == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const b = g.valueOf && g.valueOf();
      if (b != null && b !== g)
        return h.from(b, c, u);
      const F = q(g);
      if (F) return F;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof g[Symbol.toPrimitive] == "function")
        return h.from(g[Symbol.toPrimitive]("string"), c, u);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
      );
    }
    h.from = function(g, c, u) {
      return P(g, c, u);
    }, Object.setPrototypeOf(h.prototype, D.prototype), Object.setPrototypeOf(h, D);
    function k(g) {
      if (typeof g != "number")
        throw new TypeError('"size" argument must be of type number');
      if (g < 0)
        throw new RangeError('The value "' + g + '" is invalid for option "size"');
    }
    function v(g, c, u) {
      return k(g), g <= 0 ? x(g) : c !== void 0 ? typeof u == "string" ? x(g).fill(c, u) : x(g).fill(c) : x(g);
    }
    h.alloc = function(g, c, u) {
      return v(g, c, u);
    };
    function O(g) {
      return k(g), x(g < 0 ? 0 : Q(g) | 0);
    }
    h.allocUnsafe = function(g) {
      return O(g);
    }, h.allocUnsafeSlow = function(g) {
      return O(g);
    };
    function U(g, c) {
      if ((typeof c != "string" || c === "") && (c = "utf8"), !h.isEncoding(c))
        throw new TypeError("Unknown encoding: " + c);
      const u = ue(g, c) | 0;
      let b = x(u);
      const F = b.write(g, c);
      return F !== u && (b = b.slice(0, F)), b;
    }
    function H(g) {
      const c = g.length < 0 ? 0 : Q(g.length) | 0, u = x(c);
      for (let b = 0; b < c; b += 1)
        u[b] = g[b] & 255;
      return u;
    }
    function W(g) {
      if (pt(g, D)) {
        const c = new D(g);
        return G(c.buffer, c.byteOffset, c.byteLength);
      }
      return H(g);
    }
    function G(g, c, u) {
      if (c < 0 || g.byteLength < c)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (g.byteLength < c + (u || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let b;
      return c === void 0 && u === void 0 ? b = new D(g) : u === void 0 ? b = new D(g, c) : b = new D(g, c, u), Object.setPrototypeOf(b, h.prototype), b;
    }
    function q(g) {
      if (h.isBuffer(g)) {
        const c = Q(g.length) | 0, u = x(c);
        return u.length === 0 || g.copy(u, 0, 0, c), u;
      }
      if (g.length !== void 0)
        return typeof g.length != "number" || wn(g.length) ? x(0) : H(g);
      if (g.type === "Buffer" && Array.isArray(g.data))
        return H(g.data);
    }
    function Q(g) {
      if (g >= N)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + N.toString(16) + " bytes");
      return g | 0;
    }
    function de(g) {
      return +g != g && (g = 0), h.alloc(+g);
    }
    h.isBuffer = function(c) {
      return c != null && c._isBuffer === !0 && c !== h.prototype;
    }, h.compare = function(c, u) {
      if (pt(c, D) && (c = h.from(c, c.offset, c.byteLength)), pt(u, D) && (u = h.from(u, u.offset, u.byteLength)), !h.isBuffer(c) || !h.isBuffer(u))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (c === u) return 0;
      let b = c.length, F = u.length;
      for (let $ = 0, V = Math.min(b, F); $ < V; ++$)
        if (c[$] !== u[$]) {
          b = c[$], F = u[$];
          break;
        }
      return b < F ? -1 : F < b ? 1 : 0;
    }, h.isEncoding = function(c) {
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
    }, h.concat = function(c, u) {
      if (!Array.isArray(c))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (c.length === 0)
        return h.alloc(0);
      let b;
      if (u === void 0)
        for (u = 0, b = 0; b < c.length; ++b)
          u += c[b].length;
      const F = h.allocUnsafe(u);
      let $ = 0;
      for (b = 0; b < c.length; ++b) {
        let V = c[b];
        if (pt(V, D))
          $ + V.length > F.length ? (h.isBuffer(V) || (V = h.from(V)), V.copy(F, $)) : D.prototype.set.call(
            F,
            V,
            $
          );
        else if (h.isBuffer(V))
          V.copy(F, $);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        $ += V.length;
      }
      return F;
    };
    function ue(g, c) {
      if (h.isBuffer(g))
        return g.length;
      if (d.isView(g) || pt(g, d))
        return g.byteLength;
      if (typeof g != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof g
        );
      const u = g.length, b = arguments.length > 2 && arguments[2] === !0;
      if (!b && u === 0) return 0;
      let F = !1;
      for (; ; )
        switch (c) {
          case "ascii":
          case "latin1":
          case "binary":
            return u;
          case "utf8":
          case "utf-8":
            return Hn(g).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return u * 2;
          case "hex":
            return u >>> 1;
          case "base64":
            return zt(g).length;
          default:
            if (F)
              return b ? -1 : Hn(g).length;
            c = ("" + c).toLowerCase(), F = !0;
        }
    }
    h.byteLength = ue;
    function ie(g, c, u) {
      let b = !1;
      if ((c === void 0 || c < 0) && (c = 0), c > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, c >>>= 0, u <= c))
        return "";
      for (g || (g = "utf8"); ; )
        switch (g) {
          case "hex":
            return _o(this, c, u);
          case "utf8":
          case "utf-8":
            return pe(this, c, u);
          case "ascii":
            return mi(this, c, u);
          case "latin1":
          case "binary":
            return dn(this, c, u);
          case "base64":
            return _e(this, c, u);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Io(this, c, u);
          default:
            if (b) throw new TypeError("Unknown encoding: " + g);
            g = (g + "").toLowerCase(), b = !0;
        }
    }
    h.prototype._isBuffer = !0;
    function ee(g, c, u) {
      const b = g[c];
      g[c] = g[u], g[u] = b;
    }
    h.prototype.swap16 = function() {
      const c = this.length;
      if (c % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let u = 0; u < c; u += 2)
        ee(this, u, u + 1);
      return this;
    }, h.prototype.swap32 = function() {
      const c = this.length;
      if (c % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let u = 0; u < c; u += 4)
        ee(this, u, u + 3), ee(this, u + 1, u + 2);
      return this;
    }, h.prototype.swap64 = function() {
      const c = this.length;
      if (c % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let u = 0; u < c; u += 8)
        ee(this, u, u + 7), ee(this, u + 1, u + 6), ee(this, u + 2, u + 5), ee(this, u + 3, u + 4);
      return this;
    }, h.prototype.toString = function() {
      const c = this.length;
      return c === 0 ? "" : arguments.length === 0 ? pe(this, 0, c) : ie.apply(this, arguments);
    }, h.prototype.toLocaleString = h.prototype.toString, h.prototype.equals = function(c) {
      if (!h.isBuffer(c)) throw new TypeError("Argument must be a Buffer");
      return this === c ? !0 : h.compare(this, c) === 0;
    }, h.prototype.inspect = function() {
      let c = "";
      const u = y.INSPECT_MAX_BYTES;
      return c = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (c += " ... "), "<Buffer " + c + ">";
    }, L && (h.prototype[L] = h.prototype.inspect), h.prototype.compare = function(c, u, b, F, $) {
      if (pt(c, D) && (c = h.from(c, c.offset, c.byteLength)), !h.isBuffer(c))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof c
        );
      if (u === void 0 && (u = 0), b === void 0 && (b = c ? c.length : 0), F === void 0 && (F = 0), $ === void 0 && ($ = this.length), u < 0 || b > c.length || F < 0 || $ > this.length)
        throw new RangeError("out of range index");
      if (F >= $ && u >= b)
        return 0;
      if (F >= $)
        return -1;
      if (u >= b)
        return 1;
      if (u >>>= 0, b >>>= 0, F >>>= 0, $ >>>= 0, this === c) return 0;
      let V = $ - F, ne = b - u;
      const Ie = Math.min(V, ne), Ee = this.slice(F, $), _ = c.slice(u, b);
      for (let K = 0; K < Ie; ++K)
        if (Ee[K] !== _[K]) {
          V = Ee[K], ne = _[K];
          break;
        }
      return V < ne ? -1 : ne < V ? 1 : 0;
    };
    function Se(g, c, u, b, F) {
      if (g.length === 0) return -1;
      if (typeof u == "string" ? (b = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, wn(u) && (u = F ? 0 : g.length - 1), u < 0 && (u = g.length + u), u >= g.length) {
        if (F) return -1;
        u = g.length - 1;
      } else if (u < 0)
        if (F) u = 0;
        else return -1;
      if (typeof c == "string" && (c = h.from(c, b)), h.isBuffer(c))
        return c.length === 0 ? -1 : dt(g, c, u, b, F);
      if (typeof c == "number")
        return c = c & 255, typeof D.prototype.indexOf == "function" ? F ? D.prototype.indexOf.call(g, c, u) : D.prototype.lastIndexOf.call(g, c, u) : dt(g, [c], u, b, F);
      throw new TypeError("val must be string, number or Buffer");
    }
    function dt(g, c, u, b, F) {
      let $ = 1, V = g.length, ne = c.length;
      if (b !== void 0 && (b = String(b).toLowerCase(), b === "ucs2" || b === "ucs-2" || b === "utf16le" || b === "utf-16le")) {
        if (g.length < 2 || c.length < 2)
          return -1;
        $ = 2, V /= 2, ne /= 2, u /= 2;
      }
      function Ie(_, K) {
        return $ === 1 ? _[K] : _.readUInt16BE(K * $);
      }
      let Ee;
      if (F) {
        let _ = -1;
        for (Ee = u; Ee < V; Ee++)
          if (Ie(g, Ee) === Ie(c, _ === -1 ? 0 : Ee - _)) {
            if (_ === -1 && (_ = Ee), Ee - _ + 1 === ne) return _ * $;
          } else
            _ !== -1 && (Ee -= Ee - _), _ = -1;
      } else
        for (u + ne > V && (u = V - ne), Ee = u; Ee >= 0; Ee--) {
          let _ = !0;
          for (let K = 0; K < ne; K++)
            if (Ie(g, Ee + K) !== Ie(c, K)) {
              _ = !1;
              break;
            }
          if (_) return Ee;
        }
      return -1;
    }
    h.prototype.includes = function(c, u, b) {
      return this.indexOf(c, u, b) !== -1;
    }, h.prototype.indexOf = function(c, u, b) {
      return Se(this, c, u, b, !0);
    }, h.prototype.lastIndexOf = function(c, u, b) {
      return Se(this, c, u, b, !1);
    };
    function Pt(g, c, u, b) {
      u = Number(u) || 0;
      const F = g.length - u;
      b ? (b = Number(b), b > F && (b = F)) : b = F;
      const $ = c.length;
      b > $ / 2 && (b = $ / 2);
      let V;
      for (V = 0; V < b; ++V) {
        const ne = parseInt(c.substr(V * 2, 2), 16);
        if (wn(ne)) return V;
        g[u + V] = ne;
      }
      return V;
    }
    function bt(g, c, u, b) {
      return yr(Hn(c, g.length - u), g, u, b);
    }
    function se(g, c, u, b) {
      return yr(Mn(c), g, u, b);
    }
    function Fe(g, c, u, b) {
      return yr(zt(c), g, u, b);
    }
    function we(g, c, u, b) {
      return yr(Pi(c, g.length - u), g, u, b);
    }
    h.prototype.write = function(c, u, b, F) {
      if (u === void 0)
        F = "utf8", b = this.length, u = 0;
      else if (b === void 0 && typeof u == "string")
        F = u, b = this.length, u = 0;
      else if (isFinite(u))
        u = u >>> 0, isFinite(b) ? (b = b >>> 0, F === void 0 && (F = "utf8")) : (F = b, b = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const $ = this.length - u;
      if ((b === void 0 || b > $) && (b = $), c.length > 0 && (b < 0 || u < 0) || u > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      F || (F = "utf8");
      let V = !1;
      for (; ; )
        switch (F) {
          case "hex":
            return Pt(this, c, u, b);
          case "utf8":
          case "utf-8":
            return bt(this, c, u, b);
          case "ascii":
          case "latin1":
          case "binary":
            return se(this, c, u, b);
          case "base64":
            return Fe(this, c, u, b);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return we(this, c, u, b);
          default:
            if (V) throw new TypeError("Unknown encoding: " + F);
            F = ("" + F).toLowerCase(), V = !0;
        }
    }, h.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function _e(g, c, u) {
      return c === 0 && u === g.length ? S.fromByteArray(g) : S.fromByteArray(g.slice(c, u));
    }
    function pe(g, c, u) {
      u = Math.min(g.length, u);
      const b = [];
      let F = c;
      for (; F < u; ) {
        const $ = g[F];
        let V = null, ne = $ > 239 ? 4 : $ > 223 ? 3 : $ > 191 ? 2 : 1;
        if (F + ne <= u) {
          let Ie, Ee, _, K;
          switch (ne) {
            case 1:
              $ < 128 && (V = $);
              break;
            case 2:
              Ie = g[F + 1], (Ie & 192) === 128 && (K = ($ & 31) << 6 | Ie & 63, K > 127 && (V = K));
              break;
            case 3:
              Ie = g[F + 1], Ee = g[F + 2], (Ie & 192) === 128 && (Ee & 192) === 128 && (K = ($ & 15) << 12 | (Ie & 63) << 6 | Ee & 63, K > 2047 && (K < 55296 || K > 57343) && (V = K));
              break;
            case 4:
              Ie = g[F + 1], Ee = g[F + 2], _ = g[F + 3], (Ie & 192) === 128 && (Ee & 192) === 128 && (_ & 192) === 128 && (K = ($ & 15) << 18 | (Ie & 63) << 12 | (Ee & 63) << 6 | _ & 63, K > 65535 && K < 1114112 && (V = K));
          }
        }
        V === null ? (V = 65533, ne = 1) : V > 65535 && (V -= 65536, b.push(V >>> 10 & 1023 | 55296), V = 56320 | V & 1023), b.push(V), F += ne;
      }
      return wi(b);
    }
    const gr = 4096;
    function wi(g) {
      const c = g.length;
      if (c <= gr)
        return String.fromCharCode.apply(String, g);
      let u = "", b = 0;
      for (; b < c; )
        u += String.fromCharCode.apply(
          String,
          g.slice(b, b += gr)
        );
      return u;
    }
    function mi(g, c, u) {
      let b = "";
      u = Math.min(g.length, u);
      for (let F = c; F < u; ++F)
        b += String.fromCharCode(g[F] & 127);
      return b;
    }
    function dn(g, c, u) {
      let b = "";
      u = Math.min(g.length, u);
      for (let F = c; F < u; ++F)
        b += String.fromCharCode(g[F]);
      return b;
    }
    function _o(g, c, u) {
      const b = g.length;
      (!c || c < 0) && (c = 0), (!u || u < 0 || u > b) && (u = b);
      let F = "";
      for (let $ = c; $ < u; ++$)
        F += Bo[g[$]];
      return F;
    }
    function Io(g, c, u) {
      const b = g.slice(c, u);
      let F = "";
      for (let $ = 0; $ < b.length - 1; $ += 2)
        F += String.fromCharCode(b[$] + b[$ + 1] * 256);
      return F;
    }
    h.prototype.slice = function(c, u) {
      const b = this.length;
      c = ~~c, u = u === void 0 ? b : ~~u, c < 0 ? (c += b, c < 0 && (c = 0)) : c > b && (c = b), u < 0 ? (u += b, u < 0 && (u = 0)) : u > b && (u = b), u < c && (u = c);
      const F = this.subarray(c, u);
      return Object.setPrototypeOf(F, h.prototype), F;
    };
    function Be(g, c, u) {
      if (g % 1 !== 0 || g < 0) throw new RangeError("offset is not uint");
      if (g + c > u) throw new RangeError("Trying to access beyond buffer length");
    }
    h.prototype.readUintLE = h.prototype.readUIntLE = function(c, u, b) {
      c = c >>> 0, u = u >>> 0, b || Be(c, u, this.length);
      let F = this[c], $ = 1, V = 0;
      for (; ++V < u && ($ *= 256); )
        F += this[c + V] * $;
      return F;
    }, h.prototype.readUintBE = h.prototype.readUIntBE = function(c, u, b) {
      c = c >>> 0, u = u >>> 0, b || Be(c, u, this.length);
      let F = this[c + --u], $ = 1;
      for (; u > 0 && ($ *= 256); )
        F += this[c + --u] * $;
      return F;
    }, h.prototype.readUint8 = h.prototype.readUInt8 = function(c, u) {
      return c = c >>> 0, u || Be(c, 1, this.length), this[c];
    }, h.prototype.readUint16LE = h.prototype.readUInt16LE = function(c, u) {
      return c = c >>> 0, u || Be(c, 2, this.length), this[c] | this[c + 1] << 8;
    }, h.prototype.readUint16BE = h.prototype.readUInt16BE = function(c, u) {
      return c = c >>> 0, u || Be(c, 2, this.length), this[c] << 8 | this[c + 1];
    }, h.prototype.readUint32LE = h.prototype.readUInt32LE = function(c, u) {
      return c = c >>> 0, u || Be(c, 4, this.length), (this[c] | this[c + 1] << 8 | this[c + 2] << 16) + this[c + 3] * 16777216;
    }, h.prototype.readUint32BE = h.prototype.readUInt32BE = function(c, u) {
      return c = c >>> 0, u || Be(c, 4, this.length), this[c] * 16777216 + (this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3]);
    }, h.prototype.readBigUInt64LE = xt(function(c) {
      c = c >>> 0, mr(c, "offset");
      const u = this[c], b = this[c + 7];
      (u === void 0 || b === void 0) && Mr(c, this.length - 8);
      const F = u + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24, $ = this[++c] + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + b * 2 ** 24;
      return BigInt(F) + (BigInt($) << BigInt(32));
    }), h.prototype.readBigUInt64BE = xt(function(c) {
      c = c >>> 0, mr(c, "offset");
      const u = this[c], b = this[c + 7];
      (u === void 0 || b === void 0) && Mr(c, this.length - 8);
      const F = u * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c], $ = this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + b;
      return (BigInt(F) << BigInt(32)) + BigInt($);
    }), h.prototype.readIntLE = function(c, u, b) {
      c = c >>> 0, u = u >>> 0, b || Be(c, u, this.length);
      let F = this[c], $ = 1, V = 0;
      for (; ++V < u && ($ *= 256); )
        F += this[c + V] * $;
      return $ *= 128, F >= $ && (F -= Math.pow(2, 8 * u)), F;
    }, h.prototype.readIntBE = function(c, u, b) {
      c = c >>> 0, u = u >>> 0, b || Be(c, u, this.length);
      let F = u, $ = 1, V = this[c + --F];
      for (; F > 0 && ($ *= 256); )
        V += this[c + --F] * $;
      return $ *= 128, V >= $ && (V -= Math.pow(2, 8 * u)), V;
    }, h.prototype.readInt8 = function(c, u) {
      return c = c >>> 0, u || Be(c, 1, this.length), this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c];
    }, h.prototype.readInt16LE = function(c, u) {
      c = c >>> 0, u || Be(c, 2, this.length);
      const b = this[c] | this[c + 1] << 8;
      return b & 32768 ? b | 4294901760 : b;
    }, h.prototype.readInt16BE = function(c, u) {
      c = c >>> 0, u || Be(c, 2, this.length);
      const b = this[c + 1] | this[c] << 8;
      return b & 32768 ? b | 4294901760 : b;
    }, h.prototype.readInt32LE = function(c, u) {
      return c = c >>> 0, u || Be(c, 4, this.length), this[c] | this[c + 1] << 8 | this[c + 2] << 16 | this[c + 3] << 24;
    }, h.prototype.readInt32BE = function(c, u) {
      return c = c >>> 0, u || Be(c, 4, this.length), this[c] << 24 | this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3];
    }, h.prototype.readBigInt64LE = xt(function(c) {
      c = c >>> 0, mr(c, "offset");
      const u = this[c], b = this[c + 7];
      (u === void 0 || b === void 0) && Mr(c, this.length - 8);
      const F = this[c + 4] + this[c + 5] * 2 ** 8 + this[c + 6] * 2 ** 16 + (b << 24);
      return (BigInt(F) << BigInt(32)) + BigInt(u + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24);
    }), h.prototype.readBigInt64BE = xt(function(c) {
      c = c >>> 0, mr(c, "offset");
      const u = this[c], b = this[c + 7];
      (u === void 0 || b === void 0) && Mr(c, this.length - 8);
      const F = (u << 24) + // Overflow
      this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c];
      return (BigInt(F) << BigInt(32)) + BigInt(this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + b);
    }), h.prototype.readFloatLE = function(c, u) {
      return c = c >>> 0, u || Be(c, 4, this.length), I.read(this, c, !0, 23, 4);
    }, h.prototype.readFloatBE = function(c, u) {
      return c = c >>> 0, u || Be(c, 4, this.length), I.read(this, c, !1, 23, 4);
    }, h.prototype.readDoubleLE = function(c, u) {
      return c = c >>> 0, u || Be(c, 8, this.length), I.read(this, c, !0, 52, 8);
    }, h.prototype.readDoubleBE = function(c, u) {
      return c = c >>> 0, u || Be(c, 8, this.length), I.read(this, c, !1, 52, 8);
    };
    function tt(g, c, u, b, F, $) {
      if (!h.isBuffer(g)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (c > F || c < $) throw new RangeError('"value" argument is out of bounds');
      if (u + b > g.length) throw new RangeError("Index out of range");
    }
    h.prototype.writeUintLE = h.prototype.writeUIntLE = function(c, u, b, F) {
      if (c = +c, u = u >>> 0, b = b >>> 0, !F) {
        const ne = Math.pow(2, 8 * b) - 1;
        tt(this, c, u, b, ne, 0);
      }
      let $ = 1, V = 0;
      for (this[u] = c & 255; ++V < b && ($ *= 256); )
        this[u + V] = c / $ & 255;
      return u + b;
    }, h.prototype.writeUintBE = h.prototype.writeUIntBE = function(c, u, b, F) {
      if (c = +c, u = u >>> 0, b = b >>> 0, !F) {
        const ne = Math.pow(2, 8 * b) - 1;
        tt(this, c, u, b, ne, 0);
      }
      let $ = b - 1, V = 1;
      for (this[u + $] = c & 255; --$ >= 0 && (V *= 256); )
        this[u + $] = c / V & 255;
      return u + b;
    }, h.prototype.writeUint8 = h.prototype.writeUInt8 = function(c, u, b) {
      return c = +c, u = u >>> 0, b || tt(this, c, u, 1, 255, 0), this[u] = c & 255, u + 1;
    }, h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(c, u, b) {
      return c = +c, u = u >>> 0, b || tt(this, c, u, 2, 65535, 0), this[u] = c & 255, this[u + 1] = c >>> 8, u + 2;
    }, h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(c, u, b) {
      return c = +c, u = u >>> 0, b || tt(this, c, u, 2, 65535, 0), this[u] = c >>> 8, this[u + 1] = c & 255, u + 2;
    }, h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(c, u, b) {
      return c = +c, u = u >>> 0, b || tt(this, c, u, 4, 4294967295, 0), this[u + 3] = c >>> 24, this[u + 2] = c >>> 16, this[u + 1] = c >>> 8, this[u] = c & 255, u + 4;
    }, h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(c, u, b) {
      return c = +c, u = u >>> 0, b || tt(this, c, u, 4, 4294967295, 0), this[u] = c >>> 24, this[u + 1] = c >>> 16, this[u + 2] = c >>> 8, this[u + 3] = c & 255, u + 4;
    };
    function yi(g, c, u, b, F) {
      Ei(c, b, F, g, u, 7);
      let $ = Number(c & BigInt(4294967295));
      g[u++] = $, $ = $ >> 8, g[u++] = $, $ = $ >> 8, g[u++] = $, $ = $ >> 8, g[u++] = $;
      let V = Number(c >> BigInt(32) & BigInt(4294967295));
      return g[u++] = V, V = V >> 8, g[u++] = V, V = V >> 8, g[u++] = V, V = V >> 8, g[u++] = V, u;
    }
    function Un(g, c, u, b, F) {
      Ei(c, b, F, g, u, 7);
      let $ = Number(c & BigInt(4294967295));
      g[u + 7] = $, $ = $ >> 8, g[u + 6] = $, $ = $ >> 8, g[u + 5] = $, $ = $ >> 8, g[u + 4] = $;
      let V = Number(c >> BigInt(32) & BigInt(4294967295));
      return g[u + 3] = V, V = V >> 8, g[u + 2] = V, V = V >> 8, g[u + 1] = V, V = V >> 8, g[u] = V, u + 8;
    }
    h.prototype.writeBigUInt64LE = xt(function(c, u = 0) {
      return yi(this, c, u, BigInt(0), BigInt("0xffffffffffffffff"));
    }), h.prototype.writeBigUInt64BE = xt(function(c, u = 0) {
      return Un(this, c, u, BigInt(0), BigInt("0xffffffffffffffff"));
    }), h.prototype.writeIntLE = function(c, u, b, F) {
      if (c = +c, u = u >>> 0, !F) {
        const Ie = Math.pow(2, 8 * b - 1);
        tt(this, c, u, b, Ie - 1, -Ie);
      }
      let $ = 0, V = 1, ne = 0;
      for (this[u] = c & 255; ++$ < b && (V *= 256); )
        c < 0 && ne === 0 && this[u + $ - 1] !== 0 && (ne = 1), this[u + $] = (c / V >> 0) - ne & 255;
      return u + b;
    }, h.prototype.writeIntBE = function(c, u, b, F) {
      if (c = +c, u = u >>> 0, !F) {
        const Ie = Math.pow(2, 8 * b - 1);
        tt(this, c, u, b, Ie - 1, -Ie);
      }
      let $ = b - 1, V = 1, ne = 0;
      for (this[u + $] = c & 255; --$ >= 0 && (V *= 256); )
        c < 0 && ne === 0 && this[u + $ + 1] !== 0 && (ne = 1), this[u + $] = (c / V >> 0) - ne & 255;
      return u + b;
    }, h.prototype.writeInt8 = function(c, u, b) {
      return c = +c, u = u >>> 0, b || tt(this, c, u, 1, 127, -128), c < 0 && (c = 255 + c + 1), this[u] = c & 255, u + 1;
    }, h.prototype.writeInt16LE = function(c, u, b) {
      return c = +c, u = u >>> 0, b || tt(this, c, u, 2, 32767, -32768), this[u] = c & 255, this[u + 1] = c >>> 8, u + 2;
    }, h.prototype.writeInt16BE = function(c, u, b) {
      return c = +c, u = u >>> 0, b || tt(this, c, u, 2, 32767, -32768), this[u] = c >>> 8, this[u + 1] = c & 255, u + 2;
    }, h.prototype.writeInt32LE = function(c, u, b) {
      return c = +c, u = u >>> 0, b || tt(this, c, u, 4, 2147483647, -2147483648), this[u] = c & 255, this[u + 1] = c >>> 8, this[u + 2] = c >>> 16, this[u + 3] = c >>> 24, u + 4;
    }, h.prototype.writeInt32BE = function(c, u, b) {
      return c = +c, u = u >>> 0, b || tt(this, c, u, 4, 2147483647, -2147483648), c < 0 && (c = 4294967295 + c + 1), this[u] = c >>> 24, this[u + 1] = c >>> 16, this[u + 2] = c >>> 8, this[u + 3] = c & 255, u + 4;
    }, h.prototype.writeBigInt64LE = xt(function(c, u = 0) {
      return yi(this, c, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), h.prototype.writeBigInt64BE = xt(function(c, u = 0) {
      return Un(this, c, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function Ln(g, c, u, b, F, $) {
      if (u + b > g.length) throw new RangeError("Index out of range");
      if (u < 0) throw new RangeError("Index out of range");
    }
    function wr(g, c, u, b, F) {
      return c = +c, u = u >>> 0, F || Ln(g, c, u, 4), I.write(g, c, u, b, 23, 4), u + 4;
    }
    h.prototype.writeFloatLE = function(c, u, b) {
      return wr(this, c, u, !0, b);
    }, h.prototype.writeFloatBE = function(c, u, b) {
      return wr(this, c, u, !1, b);
    };
    function Ai(g, c, u, b, F) {
      return c = +c, u = u >>> 0, F || Ln(g, c, u, 8), I.write(g, c, u, b, 52, 8), u + 8;
    }
    h.prototype.writeDoubleLE = function(c, u, b) {
      return Ai(this, c, u, !0, b);
    }, h.prototype.writeDoubleBE = function(c, u, b) {
      return Ai(this, c, u, !1, b);
    }, h.prototype.copy = function(c, u, b, F) {
      if (!h.isBuffer(c)) throw new TypeError("argument should be a Buffer");
      if (b || (b = 0), !F && F !== 0 && (F = this.length), u >= c.length && (u = c.length), u || (u = 0), F > 0 && F < b && (F = b), F === b || c.length === 0 || this.length === 0) return 0;
      if (u < 0)
        throw new RangeError("targetStart out of bounds");
      if (b < 0 || b >= this.length) throw new RangeError("Index out of range");
      if (F < 0) throw new RangeError("sourceEnd out of bounds");
      F > this.length && (F = this.length), c.length - u < F - b && (F = c.length - u + b);
      const $ = F - b;
      return this === c && typeof D.prototype.copyWithin == "function" ? this.copyWithin(u, b, F) : D.prototype.set.call(
        c,
        this.subarray(b, F),
        u
      ), $;
    }, h.prototype.fill = function(c, u, b, F) {
      if (typeof c == "string") {
        if (typeof u == "string" ? (F = u, u = 0, b = this.length) : typeof b == "string" && (F = b, b = this.length), F !== void 0 && typeof F != "string")
          throw new TypeError("encoding must be a string");
        if (typeof F == "string" && !h.isEncoding(F))
          throw new TypeError("Unknown encoding: " + F);
        if (c.length === 1) {
          const V = c.charCodeAt(0);
          (F === "utf8" && V < 128 || F === "latin1") && (c = V);
        }
      } else typeof c == "number" ? c = c & 255 : typeof c == "boolean" && (c = Number(c));
      if (u < 0 || this.length < u || this.length < b)
        throw new RangeError("Out of range index");
      if (b <= u)
        return this;
      u = u >>> 0, b = b === void 0 ? this.length : b >>> 0, c || (c = 0);
      let $;
      if (typeof c == "number")
        for ($ = u; $ < b; ++$)
          this[$] = c;
      else {
        const V = h.isBuffer(c) ? c : h.from(c, F), ne = V.length;
        if (ne === 0)
          throw new TypeError('The value "' + c + '" is invalid for argument "value"');
        for ($ = 0; $ < b - u; ++$)
          this[$ + u] = V[$ % ne];
      }
      return this;
    };
    const Qt = {};
    function pn(g, c, u) {
      Qt[g] = class extends u {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: c.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${g}]`, this.stack, delete this.name;
        }
        get code() {
          return g;
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
          return `${this.name} [${g}]: ${this.message}`;
        }
      };
    }
    pn(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(g) {
        return g ? `${g} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), pn(
      "ERR_INVALID_ARG_TYPE",
      function(g, c) {
        return `The "${g}" argument must be of type number. Received type ${typeof c}`;
      },
      TypeError
    ), pn(
      "ERR_OUT_OF_RANGE",
      function(g, c, u) {
        let b = `The value of "${g}" is out of range.`, F = u;
        return Number.isInteger(u) && Math.abs(u) > 2 ** 32 ? F = gn(String(u)) : typeof u == "bigint" && (F = String(u), (u > BigInt(2) ** BigInt(32) || u < -(BigInt(2) ** BigInt(32))) && (F = gn(F)), F += "n"), b += ` It must be ${c}. Received ${F}`, b;
      },
      RangeError
    );
    function gn(g) {
      let c = "", u = g.length;
      const b = g[0] === "-" ? 1 : 0;
      for (; u >= b + 4; u -= 3)
        c = `_${g.slice(u - 3, u)}${c}`;
      return `${g.slice(0, u)}${c}`;
    }
    function Oo(g, c, u) {
      mr(c, "offset"), (g[c] === void 0 || g[c + u] === void 0) && Mr(c, g.length - (u + 1));
    }
    function Ei(g, c, u, b, F, $) {
      if (g > u || g < c) {
        const V = typeof c == "bigint" ? "n" : "";
        let ne;
        throw c === 0 || c === BigInt(0) ? ne = `>= 0${V} and < 2${V} ** ${($ + 1) * 8}${V}` : ne = `>= -(2${V} ** ${($ + 1) * 8 - 1}${V}) and < 2 ** ${($ + 1) * 8 - 1}${V}`, new Qt.ERR_OUT_OF_RANGE("value", ne, g);
      }
      Oo(b, F, $);
    }
    function mr(g, c) {
      if (typeof g != "number")
        throw new Qt.ERR_INVALID_ARG_TYPE(c, "number", g);
    }
    function Mr(g, c, u) {
      throw Math.floor(g) !== g ? (mr(g, u), new Qt.ERR_OUT_OF_RANGE("offset", "an integer", g)) : c < 0 ? new Qt.ERR_BUFFER_OUT_OF_BOUNDS() : new Qt.ERR_OUT_OF_RANGE(
        "offset",
        `>= 0 and <= ${c}`,
        g
      );
    }
    const ko = /[^+/0-9A-Za-z-_]/g;
    function xo(g) {
      if (g = g.split("=")[0], g = g.trim().replace(ko, ""), g.length < 2) return "";
      for (; g.length % 4 !== 0; )
        g = g + "=";
      return g;
    }
    function Hn(g, c) {
      c = c || 1 / 0;
      let u;
      const b = g.length;
      let F = null;
      const $ = [];
      for (let V = 0; V < b; ++V) {
        if (u = g.charCodeAt(V), u > 55295 && u < 57344) {
          if (!F) {
            if (u > 56319) {
              (c -= 3) > -1 && $.push(239, 191, 189);
              continue;
            } else if (V + 1 === b) {
              (c -= 3) > -1 && $.push(239, 191, 189);
              continue;
            }
            F = u;
            continue;
          }
          if (u < 56320) {
            (c -= 3) > -1 && $.push(239, 191, 189), F = u;
            continue;
          }
          u = (F - 55296 << 10 | u - 56320) + 65536;
        } else F && (c -= 3) > -1 && $.push(239, 191, 189);
        if (F = null, u < 128) {
          if ((c -= 1) < 0) break;
          $.push(u);
        } else if (u < 2048) {
          if ((c -= 2) < 0) break;
          $.push(
            u >> 6 | 192,
            u & 63 | 128
          );
        } else if (u < 65536) {
          if ((c -= 3) < 0) break;
          $.push(
            u >> 12 | 224,
            u >> 6 & 63 | 128,
            u & 63 | 128
          );
        } else if (u < 1114112) {
          if ((c -= 4) < 0) break;
          $.push(
            u >> 18 | 240,
            u >> 12 & 63 | 128,
            u >> 6 & 63 | 128,
            u & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return $;
    }
    function Mn(g) {
      const c = [];
      for (let u = 0; u < g.length; ++u)
        c.push(g.charCodeAt(u) & 255);
      return c;
    }
    function Pi(g, c) {
      let u, b, F;
      const $ = [];
      for (let V = 0; V < g.length && !((c -= 2) < 0); ++V)
        u = g.charCodeAt(V), b = u >> 8, F = u % 256, $.push(F), $.push(b);
      return $;
    }
    function zt(g) {
      return S.toByteArray(xo(g));
    }
    function yr(g, c, u, b) {
      let F;
      for (F = 0; F < b && !(F + u >= c.length || F >= g.length); ++F)
        c[F + u] = g[F];
      return F;
    }
    function pt(g, c) {
      return g instanceof c || g != null && g.constructor != null && g.constructor.name != null && g.constructor.name === c.name;
    }
    function wn(g) {
      return g !== g;
    }
    const Bo = function() {
      const g = "0123456789abcdef", c = new Array(256);
      for (let u = 0; u < 16; ++u) {
        const b = u * 16;
        for (let F = 0; F < 16; ++F)
          c[b + F] = g[u] + g[F];
      }
      return c;
    }();
    function xt(g) {
      return typeof BigInt > "u" ? Co : g;
    }
    function Co() {
      throw new Error("BigInt not supported");
    }
  })(t);
  const j = t.Buffer;
  e.Blob = t.Blob, e.BlobOptions = t.BlobOptions, e.Buffer = t.Buffer, e.File = t.File, e.FileOptions = t.FileOptions, e.INSPECT_MAX_BYTES = t.INSPECT_MAX_BYTES, e.SlowBuffer = t.SlowBuffer, e.TranscodeEncoding = t.TranscodeEncoding, e.atob = t.atob, e.btoa = t.btoa, e.constants = t.constants, e.default = j, e.isAscii = t.isAscii, e.isUtf8 = t.isUtf8, e.kMaxLength = t.kMaxLength, e.kStringMaxLength = t.kStringMaxLength, e.resolveObjectURL = t.resolveObjectURL, e.transcode = t.transcode;
})(Fn);
const M = /* @__PURE__ */ yc(Fn);
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
var Vo = {}, ao = {}, Go = {}, ur = {};
Object.defineProperty(ur, "__esModule", { value: !0 });
ur.encode = ur.decode = ur.check = void 0;
function Ch(e) {
  if (e.length < 8 || e.length > 72 || e[0] !== 48 || e[1] !== e.length - 2 || e[2] !== 2) return !1;
  const t = e[3];
  if (t === 0 || 5 + t >= e.length || e[4 + t] !== 2) return !1;
  const r = e[5 + t];
  return !(r === 0 || 6 + t + r !== e.length || e[4] & 128 || t > 1 && e[4] === 0 && !(e[5] & 128) || e[t + 6] & 128 || r > 1 && e[t + 6] === 0 && !(e[t + 7] & 128));
}
ur.check = Ch;
function Nh(e) {
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
ur.decode = Nh;
function Rh(e, t) {
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
  const i = M.allocUnsafe(6 + r + n);
  return i[0] = 48, i[1] = i.length - 2, i[2] = 2, i[3] = e.length, e.copy(i, 4), i[4 + r] = 2, i[5 + r] = t.length, t.copy(i, 6 + r), i;
}
ur.encode = Rh;
var Fr = {};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.REVERSE_OPS = Fr.OPS = void 0;
const Ss = {
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
Fr.OPS = Ss;
const eu = {};
Fr.REVERSE_OPS = eu;
for (const e of Object.keys(Ss)) {
  const t = Ss[e];
  eu[t] = e;
}
var Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
Nr.decode = Nr.encode = Nr.encodingLength = void 0;
const xr = Fr;
function tu(e) {
  return e < xr.OPS.OP_PUSHDATA1 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5;
}
Nr.encodingLength = tu;
function Fh(e, t, r) {
  const n = tu(t);
  return n === 1 ? e.writeUInt8(t, r) : n === 2 ? (e.writeUInt8(xr.OPS.OP_PUSHDATA1, r), e.writeUInt8(t, r + 1)) : n === 3 ? (e.writeUInt8(xr.OPS.OP_PUSHDATA2, r), e.writeUInt16LE(t, r + 1)) : (e.writeUInt8(xr.OPS.OP_PUSHDATA4, r), e.writeUInt32LE(t, r + 1)), n;
}
Nr.encode = Fh;
function Uh(e, t) {
  const r = e.readUInt8(t);
  let n, i;
  if (r < xr.OPS.OP_PUSHDATA1)
    n = r, i = 1;
  else if (r === xr.OPS.OP_PUSHDATA1) {
    if (t + 2 > e.length) return null;
    n = e.readUInt8(t + 1), i = 2;
  } else if (r === xr.OPS.OP_PUSHDATA2) {
    if (t + 3 > e.length) return null;
    n = e.readUInt16LE(t + 1), i = 3;
  } else {
    if (t + 5 > e.length) return null;
    if (r !== xr.OPS.OP_PUSHDATA4) throw new Error("Unexpected opcode");
    n = e.readUInt32LE(t + 1), i = 5;
  }
  return {
    opcode: r,
    number: n,
    size: i
  };
}
Nr.decode = Uh;
var Bn = {};
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.encode = Bn.decode = void 0;
function Lh(e, t, r) {
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
Bn.decode = Lh;
function Hh(e) {
  return e > 2147483647 ? 5 : e > 8388607 ? 4 : e > 32767 ? 3 : e > 127 ? 2 : e > 0 ? 1 : 0;
}
function Mh(e) {
  let t = Math.abs(e);
  const r = Hh(t), n = M.allocUnsafe(r), i = e < 0;
  for (let s = 0; s < r; ++s)
    n.writeUInt8(t & 255, s), t >>= 8;
  return n[r - 1] & 128 ? n.writeUInt8(i ? 128 : 0, r - 1) : i && (n[r - 1] |= 128), n;
}
Bn.encode = Mh;
var jr = {}, et = {}, ai = {
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
ai.Null = ai.Nil;
for (var va in ai)
  ai[va].toJSON = (function(e) {
    return e;
  }).bind(null, va);
var Ms = ai, Xr = Ms;
function ru(e) {
  return e.name || e.toString().match(/function (.*?)\s*\(/)[1];
}
function Ds(e) {
  return Xr.Nil(e) ? "" : ru(e.constructor);
}
function Dh(e) {
  return Xr.Function(e) ? "" : Xr.String(e) ? JSON.stringify(e) : e && Xr.Object(e) ? "" : e;
}
function $s(e, t) {
  Error.captureStackTrace && Error.captureStackTrace(e, t);
}
function Gi(e) {
  return Xr.Function(e) ? e.toJSON ? e.toJSON() : ru(e) : Xr.Array(e) ? "Array" : e && Xr.Object(e) ? "Object" : e !== void 0 ? e : "";
}
function nu(e, t, r) {
  var n = Dh(t);
  return "Expected " + Gi(e) + ", got" + (r !== "" ? " " + r : "") + (n !== "" ? " " + n : "");
}
function fr(e, t, r) {
  r = r || Ds(t), this.message = nu(e, t, r), $s(this, fr), this.__type = e, this.__value = t, this.__valueTypeName = r;
}
fr.prototype = Object.create(Error.prototype);
fr.prototype.constructor = fr;
function $h(e, t, r, n, i) {
  var s = '" of type ';
  return t === "key" && (s = '" with key type '), nu('property "' + Gi(r) + s + Gi(e), n, i);
}
function In(e, t, r, n, i) {
  e ? (i = i || Ds(n), this.message = $h(e, r, t, n, i)) : this.message = 'Unexpected property "' + t + '"', $s(this, fr), this.__label = r, this.__property = t, this.__type = e, this.__value = n, this.__valueTypeName = i;
}
In.prototype = Object.create(Error.prototype);
In.prototype.constructor = fr;
function jh(e, t) {
  return new fr(e, {}, t);
}
function Kh(e, t, r) {
  return e instanceof In ? (t = t + "." + e.__property, e = new In(
    e.__type,
    t,
    e.__label,
    e.__value,
    e.__valueTypeName
  )) : e instanceof fr && (e = new In(
    e.__type,
    t,
    r,
    e.__value,
    e.__valueTypeName
  )), $s(e), e;
}
var iu = {
  TfTypeError: fr,
  TfPropertyTypeError: In,
  tfCustomError: jh,
  tfSubError: Kh,
  tfJSON: Gi,
  getValueTypeName: Ds
}, Xo, Ta;
function Wh() {
  if (Ta) return Xo;
  Ta = 1;
  var e = Ms, t = iu;
  function r(N) {
    return M.isBuffer(N);
  }
  function n(N) {
    return typeof N == "string" && /^([0-9a-f]{2})+$/i.test(N);
  }
  function i(N, D) {
    var d = N.toJSON();
    function l(A) {
      if (!N(A)) return !1;
      if (A.length === D) return !0;
      throw t.tfCustomError(d + "(Length: " + D + ")", d + "(Length: " + A.length + ")");
    }
    return l.toJSON = function() {
      return d;
    }, l;
  }
  var s = i.bind(null, e.Array), o = i.bind(null, r), a = i.bind(null, n), f = i.bind(null, e.String);
  function m(N, D, d) {
    d = d || e.Number;
    function l(A, x) {
      return d(A, x) && A > N && A < D;
    }
    return l.toJSON = function() {
      return `${d.toJSON()} between [${N}, ${D}]`;
    }, l;
  }
  var p = Math.pow(2, 53) - 1;
  function w(N) {
    return typeof N == "number" && isFinite(N);
  }
  function T(N) {
    return N << 24 >> 24 === N;
  }
  function E(N) {
    return N << 16 >> 16 === N;
  }
  function R(N) {
    return (N | 0) === N;
  }
  function B(N) {
    return typeof N == "number" && N >= -p && N <= p && Math.floor(N) === N;
  }
  function C(N) {
    return (N & 255) === N;
  }
  function j(N) {
    return (N & 65535) === N;
  }
  function y(N) {
    return N >>> 0 === N;
  }
  function S(N) {
    return typeof N == "number" && N >= 0 && N <= p && Math.floor(N) === N;
  }
  var I = {
    ArrayN: s,
    Buffer: r,
    BufferN: o,
    Finite: w,
    Hex: n,
    HexN: a,
    Int8: T,
    Int16: E,
    Int32: R,
    Int53: B,
    Range: m,
    StringN: f,
    UInt8: C,
    UInt16: j,
    UInt32: y,
    UInt53: S
  };
  for (var L in I)
    I[L].toJSON = (function(N) {
      return N;
    }).bind(null, L);
  return Xo = I, Xo;
}
var hi = iu, ze = Ms, Zt = hi.tfJSON, ou = hi.TfTypeError, su = hi.TfPropertyTypeError, Wn = hi.tfSubError, Vh = hi.getValueTypeName, or = {
  arrayOf: function(t, r) {
    t = jt(t), r = r || {};
    function n(i, s) {
      return !ze.Array(i) || ze.Nil(i) || r.minLength !== void 0 && i.length < r.minLength || r.maxLength !== void 0 && i.length > r.maxLength || r.length !== void 0 && i.length !== r.length ? !1 : i.every(function(o, a) {
        try {
          return lt(t, o, s);
        } catch (f) {
          throw Wn(f, a);
        }
      });
    }
    return n.toJSON = function() {
      var i = "[" + Zt(t) + "]";
      return r.length !== void 0 ? i += "{" + r.length + "}" : (r.minLength !== void 0 || r.maxLength !== void 0) && (i += "{" + (r.minLength === void 0 ? 0 : r.minLength) + "," + (r.maxLength === void 0 ? 1 / 0 : r.maxLength) + "}"), i;
    }, n;
  },
  maybe: function e(t) {
    t = jt(t);
    function r(n, i) {
      return ze.Nil(n) || t(n, i, e);
    }
    return r.toJSON = function() {
      return "?" + Zt(t);
    }, r;
  },
  map: function(t, r) {
    t = jt(t), r && (r = jt(r));
    function n(i, s) {
      if (!ze.Object(i) || ze.Nil(i)) return !1;
      for (var o in i) {
        try {
          r && lt(r, o, s);
        } catch (f) {
          throw Wn(f, o, "key");
        }
        try {
          var a = i[o];
          lt(t, a, s);
        } catch (f) {
          throw Wn(f, o);
        }
      }
      return !0;
    }
    return r ? n.toJSON = function() {
      return "{" + Zt(r) + ": " + Zt(t) + "}";
    } : n.toJSON = function() {
      return "{" + Zt(t) + "}";
    }, n;
  },
  object: function(t) {
    var r = {};
    for (var n in t)
      r[n] = jt(t[n]);
    function i(s, o) {
      if (!ze.Object(s) || ze.Nil(s)) return !1;
      var a;
      try {
        for (a in r) {
          var f = r[a], m = s[a];
          lt(f, m, o);
        }
      } catch (p) {
        throw Wn(p, a);
      }
      if (o) {
        for (a in s)
          if (!r[a])
            throw new su(void 0, a);
      }
      return !0;
    }
    return i.toJSON = function() {
      return Zt(r);
    }, i;
  },
  anyOf: function() {
    var t = [].slice.call(arguments).map(jt);
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
      return t.map(Zt).join("|");
    }, r;
  },
  allOf: function() {
    var t = [].slice.call(arguments).map(jt);
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
      return t.map(Zt).join(" & ");
    }, r;
  },
  quacksLike: function(t) {
    function r(n) {
      return t === Vh(n);
    }
    return r.toJSON = function() {
      return t;
    }, r;
  },
  tuple: function() {
    var t = [].slice.call(arguments).map(jt);
    function r(n, i) {
      return ze.Nil(n) || ze.Nil(n.length) || i && n.length !== t.length ? !1 : t.every(function(s, o) {
        try {
          return lt(s, n[o], i);
        } catch (a) {
          throw Wn(a, o);
        }
      });
    }
    return r.toJSON = function() {
      return "(" + t.map(Zt).join(", ") + ")";
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
or.oneOf = or.anyOf;
function jt(e) {
  if (ze.String(e))
    return e[0] === "?" ? or.maybe(e.slice(1)) : ze[e] || or.quacksLike(e);
  if (e && ze.Object(e)) {
    if (ze.Array(e)) {
      if (e.length !== 1) throw new TypeError("Expected compile() parameter of type Array of length 1");
      return or.arrayOf(e[0]);
    }
    return or.object(e);
  } else if (ze.Function(e))
    return e;
  return or.value(e);
}
function lt(e, t, r, n) {
  if (ze.Function(e)) {
    if (e(t, r)) return !0;
    throw new ou(n || e, t);
  }
  return lt(jt(e), t, r);
}
for (var Rr in ze)
  lt[Rr] = ze[Rr];
for (Rr in or)
  lt[Rr] = or[Rr];
var _a = Wh();
for (Rr in _a)
  lt[Rr] = _a[Rr];
lt.compile = jt;
lt.TfTypeError = ou;
lt.TfPropertyTypeError = su;
var Gh = lt;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.oneOf = e.Null = e.BufferN = e.Function = e.UInt32 = e.UInt8 = e.tuple = e.maybe = e.Hex = e.Buffer = e.String = e.Boolean = e.Array = e.Number = e.Hash256bit = e.Hash160bit = e.Buffer256bit = e.isTaptree = e.isTapleaf = e.TAPLEAF_VERSION_MASK = e.Satoshi = e.isPoint = e.stacksEqual = e.typeforce = void 0;
  const t = Fn;
  e.typeforce = Gh;
  const r = t.Buffer.alloc(32, 0), n = t.Buffer.from(
    "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
    "hex"
  );
  function i(p, w) {
    return p.length !== w.length ? !1 : p.every((T, E) => T.equals(w[E]));
  }
  e.stacksEqual = i;
  function s(p) {
    if (!t.Buffer.isBuffer(p) || p.length < 33) return !1;
    const w = p[0], T = p.slice(1, 33);
    if (T.compare(r) === 0 || T.compare(n) >= 0) return !1;
    if ((w === 2 || w === 3) && p.length === 33)
      return !0;
    const E = p.slice(33);
    return E.compare(r) === 0 || E.compare(n) >= 0 ? !1 : w === 4 && p.length === 65;
  }
  e.isPoint = s;
  const o = 21 * 1e14;
  function a(p) {
    return e.typeforce.UInt53(p) && p <= o;
  }
  e.Satoshi = a, e.TAPLEAF_VERSION_MASK = 254;
  function f(p) {
    return !p || !("output" in p) || !t.Buffer.isBuffer(p.output) ? !1 : p.version !== void 0 ? (p.version & e.TAPLEAF_VERSION_MASK) === p.version : !0;
  }
  e.isTapleaf = f;
  function m(p) {
    return (0, e.Array)(p) ? p.length !== 2 ? !1 : p.every((w) => m(w)) : f(p);
  }
  e.isTaptree = m, e.Buffer256bit = e.typeforce.BufferN(32), e.Hash160bit = e.typeforce.BufferN(20), e.Hash256bit = e.typeforce.BufferN(32), e.Number = e.typeforce.Number, e.Array = e.typeforce.Array, e.Boolean = e.typeforce.Boolean, e.String = e.typeforce.String, e.Buffer = e.typeforce.Buffer, e.Hex = e.typeforce.Hex, e.maybe = e.typeforce.maybe, e.tuple = e.typeforce.tuple, e.UInt8 = e.typeforce.UInt8, e.UInt32 = e.typeforce.UInt32, e.Function = e.typeforce.Function, e.BufferN = e.typeforce.BufferN, e.Null = e.typeforce.Null, e.oneOf = e.typeforce.oneOf;
})(et);
var Ia;
function Xh() {
  if (Ia) return jr;
  Ia = 1, Object.defineProperty(jr, "__esModule", { value: !0 }), jr.encode = jr.decode = void 0;
  const e = ur, t = ht(), r = et, { typeforce: n } = r, i = M.alloc(1, 0);
  function s(m) {
    let p = 0;
    for (; m[p] === 0; ) ++p;
    return p === m.length ? i : (m = m.slice(p), m[0] & 128 ? M.concat([i, m], 1 + m.length) : m);
  }
  function o(m) {
    m[0] === 0 && (m = m.slice(1));
    const p = M.alloc(32, 0), w = Math.max(0, 32 - m.length);
    return m.copy(p, w), p;
  }
  function a(m) {
    const p = m.readUInt8(m.length - 1);
    if (!(0, t.isDefinedHashType)(p))
      throw new Error("Invalid hashType " + p);
    const w = e.decode(m.slice(0, -1)), T = o(w.r), E = o(w.s);
    return { signature: M.concat([T, E], 64), hashType: p };
  }
  jr.decode = a;
  function f(m, p) {
    if (n(
      {
        signature: r.BufferN(64),
        hashType: r.UInt8
      },
      { signature: m, hashType: p }
    ), !(0, t.isDefinedHashType)(p))
      throw new Error("Invalid hashType " + p);
    const w = M.allocUnsafe(1);
    w.writeUInt8(p, 0);
    const T = s(m.slice(0, 32)), E = s(m.slice(32, 64));
    return M.concat([e.encode(T, E), w]);
  }
  return jr.encode = f, jr;
}
var Oa;
function ht() {
  return Oa || (Oa = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.signature = e.number = e.isCanonicalScriptSignature = e.isDefinedHashType = e.isCanonicalPubKey = e.toStack = e.fromASM = e.toASM = e.decompile = e.compile = e.countNonPushOnlyOPs = e.isPushOnly = e.OPS = void 0;
    const t = ur, r = Fr;
    Object.defineProperty(e, "OPS", {
      enumerable: !0,
      get: function() {
        return r.OPS;
      }
    });
    const n = Nr, i = Bn, s = Xh(), o = et, { typeforce: a } = o, f = r.OPS.OP_RESERVED;
    function m(l) {
      return o.Number(l) && (l === r.OPS.OP_0 || l >= r.OPS.OP_1 && l <= r.OPS.OP_16 || l === r.OPS.OP_1NEGATE);
    }
    function p(l) {
      return o.Buffer(l) || m(l);
    }
    function w(l) {
      return o.Array(l) && l.every(p);
    }
    e.isPushOnly = w;
    function T(l) {
      return l.length - l.filter(p).length;
    }
    e.countNonPushOnlyOPs = T;
    function E(l) {
      if (l.length === 0) return r.OPS.OP_0;
      if (l.length === 1) {
        if (l[0] >= 1 && l[0] <= 16) return f + l[0];
        if (l[0] === 129) return r.OPS.OP_1NEGATE;
      }
    }
    function R(l) {
      return M.isBuffer(l);
    }
    function B(l) {
      return o.Array(l);
    }
    function C(l) {
      return M.isBuffer(l);
    }
    function j(l) {
      if (R(l)) return l;
      a(o.Array, l);
      const A = l.reduce((P, k) => C(k) ? k.length === 1 && E(k) !== void 0 ? P + 1 : P + n.encodingLength(k.length) + k.length : P + 1, 0), x = M.allocUnsafe(A);
      let h = 0;
      if (l.forEach((P) => {
        if (C(P)) {
          const k = E(P);
          if (k !== void 0) {
            x.writeUInt8(k, h), h += 1;
            return;
          }
          h += n.encode(x, P.length, h), P.copy(x, h), h += P.length;
        } else
          x.writeUInt8(P, h), h += 1;
      }), h !== x.length) throw new Error("Could not decode chunks");
      return x;
    }
    e.compile = j;
    function y(l) {
      if (B(l)) return l;
      a(o.Buffer, l);
      const A = [];
      let x = 0;
      for (; x < l.length; ) {
        const h = l[x];
        if (h > r.OPS.OP_0 && h <= r.OPS.OP_PUSHDATA4) {
          const P = n.decode(l, x);
          if (P === null || (x += P.size, x + P.number > l.length)) return null;
          const k = l.slice(x, x + P.number);
          x += P.number;
          const v = E(k);
          v !== void 0 ? A.push(v) : A.push(k);
        } else
          A.push(h), x += 1;
      }
      return A;
    }
    e.decompile = y;
    function S(l) {
      if (R(l) && (l = y(l)), !l)
        throw new Error("Could not convert invalid chunks to ASM");
      return l.map((A) => {
        if (C(A)) {
          const x = E(A);
          if (x === void 0) return A.toString("hex");
          A = x;
        }
        return r.REVERSE_OPS[A];
      }).join(" ");
    }
    e.toASM = S;
    function I(l) {
      return a(o.String, l), j(
        l.split(" ").map((A) => r.OPS[A] !== void 0 ? r.OPS[A] : (a(o.Hex, A), M.from(A, "hex")))
      );
    }
    e.fromASM = I;
    function L(l) {
      return l = y(l), a(w, l), l.map((A) => C(A) ? A : A === r.OPS.OP_0 ? M.allocUnsafe(0) : i.encode(A - f));
    }
    e.toStack = L;
    function N(l) {
      return o.isPoint(l);
    }
    e.isCanonicalPubKey = N;
    function D(l) {
      const A = l & -129;
      return A > 0 && A < 4;
    }
    e.isDefinedHashType = D;
    function d(l) {
      return !M.isBuffer(l) || !D(l[l.length - 1]) ? !1 : t.check(l.slice(0, -1));
    }
    e.isCanonicalScriptSignature = d, e.number = i, e.signature = s;
  }(Go)), Go;
}
var Et = {};
Object.defineProperty(Et, "__esModule", { value: !0 });
Et.value = Et.prop = void 0;
function qh(e, t, r) {
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
Et.prop = qh;
function Yh(e) {
  let t;
  return () => (t !== void 0 || (t = e()), t);
}
Et.value = Yh;
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.p2data = void 0;
const Qh = Xe, Hi = ht(), Lt = et, ka = Et, xa = Hi.OPS;
function zh(e, t) {
  if (!e.data && !e.output) throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, Lt.typeforce)(
    {
      network: Lt.typeforce.maybe(Lt.typeforce.Object),
      output: Lt.typeforce.maybe(Lt.typeforce.Buffer),
      data: Lt.typeforce.maybe(
        Lt.typeforce.arrayOf(Lt.typeforce.Buffer)
      )
    },
    e
  );
  const n = { name: "embed", network: e.network || Qh.bitcoin };
  if (ka.prop(n, "output", () => {
    if (e.data)
      return Hi.compile([xa.OP_RETURN].concat(e.data));
  }), ka.prop(n, "data", () => {
    if (e.output)
      return Hi.decompile(e.output).slice(1);
  }), t.validate && e.output) {
    const i = Hi.decompile(e.output);
    if (i[0] !== xa.OP_RETURN) throw new TypeError("Output is invalid");
    if (!i.slice(1).every(Lt.typeforce.Buffer))
      throw new TypeError("Output is invalid");
    if (e.data && !(0, Lt.stacksEqual)(e.data, n.data))
      throw new TypeError("Data mismatch");
  }
  return Object.assign(n, e);
}
ao.p2data = zh;
var co = {};
Object.defineProperty(co, "__esModule", { value: !0 });
co.p2ms = void 0;
const Jh = Xe, bn = ht(), Ne = et, Pr = Et, Sn = bn.OPS, Ii = Sn.OP_RESERVED;
function Zh(e, t) {
  if (!e.input && !e.output && !(e.pubkeys && e.m !== void 0) && !e.signatures)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {});
  function r(f) {
    return bn.isCanonicalScriptSignature(f) || (t.allowIncomplete && f === Sn.OP_0) !== void 0;
  }
  (0, Ne.typeforce)(
    {
      network: Ne.typeforce.maybe(Ne.typeforce.Object),
      m: Ne.typeforce.maybe(Ne.typeforce.Number),
      n: Ne.typeforce.maybe(Ne.typeforce.Number),
      output: Ne.typeforce.maybe(Ne.typeforce.Buffer),
      pubkeys: Ne.typeforce.maybe(
        Ne.typeforce.arrayOf(Ne.isPoint)
      ),
      signatures: Ne.typeforce.maybe(
        Ne.typeforce.arrayOf(r)
      ),
      input: Ne.typeforce.maybe(Ne.typeforce.Buffer)
    },
    e
  );
  const i = { network: e.network || Jh.bitcoin };
  let s = [], o = !1;
  function a(f) {
    o || (o = !0, s = bn.decompile(f), i.m = s[0] - Ii, i.n = s[s.length - 2] - Ii, i.pubkeys = s.slice(1, -2));
  }
  if (Pr.prop(i, "output", () => {
    if (e.m && i.n && e.pubkeys)
      return bn.compile(
        [].concat(
          Ii + e.m,
          e.pubkeys,
          Ii + i.n,
          Sn.OP_CHECKMULTISIG
        )
      );
  }), Pr.prop(i, "m", () => {
    if (i.output)
      return a(i.output), i.m;
  }), Pr.prop(i, "n", () => {
    if (i.pubkeys)
      return i.pubkeys.length;
  }), Pr.prop(i, "pubkeys", () => {
    if (e.output)
      return a(e.output), i.pubkeys;
  }), Pr.prop(i, "signatures", () => {
    if (e.input)
      return bn.decompile(e.input).slice(1);
  }), Pr.prop(i, "input", () => {
    if (e.signatures)
      return bn.compile([Sn.OP_0].concat(e.signatures));
  }), Pr.prop(i, "witness", () => {
    if (i.input)
      return [];
  }), Pr.prop(i, "name", () => {
    if (!(!i.m || !i.n))
      return `p2ms(${i.m} of ${i.n})`;
  }), t.validate) {
    if (e.output) {
      if (a(e.output), !Ne.typeforce.Number(s[0]))
        throw new TypeError("Output is invalid");
      if (!Ne.typeforce.Number(s[s.length - 2]))
        throw new TypeError("Output is invalid");
      if (s[s.length - 1] !== Sn.OP_CHECKMULTISIG)
        throw new TypeError("Output is invalid");
      if (i.m <= 0 || i.n > 16 || i.m > i.n || i.n !== s.length - 3)
        throw new TypeError("Output is invalid");
      if (!i.pubkeys.every((f) => (0, Ne.isPoint)(f)))
        throw new TypeError("Output is invalid");
      if (e.m !== void 0 && e.m !== i.m) throw new TypeError("m mismatch");
      if (e.n !== void 0 && e.n !== i.n) throw new TypeError("n mismatch");
      if (e.pubkeys && !(0, Ne.stacksEqual)(e.pubkeys, i.pubkeys))
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
      if (e.signatures && !(0, Ne.stacksEqual)(e.signatures, i.signatures))
        throw new TypeError("Signature mismatch");
      if (e.m !== void 0 && e.m !== e.signatures.length)
        throw new TypeError("Signature count mismatch");
    }
  }
  return Object.assign(i, e);
}
co.p2ms = Zh;
var uo = {};
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.p2pk = void 0;
const ed = Xe, vn = ht(), Ct = et, En = Et, Ba = vn.OPS;
function td(e, t) {
  if (!e.input && !e.output && !e.pubkey && !e.input && !e.signature)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, Ct.typeforce)(
    {
      network: Ct.typeforce.maybe(Ct.typeforce.Object),
      output: Ct.typeforce.maybe(Ct.typeforce.Buffer),
      pubkey: Ct.typeforce.maybe(Ct.isPoint),
      signature: Ct.typeforce.maybe(vn.isCanonicalScriptSignature),
      input: Ct.typeforce.maybe(Ct.typeforce.Buffer)
    },
    e
  );
  const r = En.value(() => vn.decompile(e.input)), i = { name: "p2pk", network: e.network || ed.bitcoin };
  if (En.prop(i, "output", () => {
    if (e.pubkey)
      return vn.compile([e.pubkey, Ba.OP_CHECKSIG]);
  }), En.prop(i, "pubkey", () => {
    if (e.output)
      return e.output.slice(1, -1);
  }), En.prop(i, "signature", () => {
    if (e.input)
      return r()[0];
  }), En.prop(i, "input", () => {
    if (e.signature)
      return vn.compile([e.signature]);
  }), En.prop(i, "witness", () => {
    if (i.input)
      return [];
  }), t.validate) {
    if (e.output) {
      if (e.output[e.output.length - 1] !== Ba.OP_CHECKSIG)
        throw new TypeError("Output is invalid");
      if (!(0, Ct.isPoint)(i.pubkey))
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
uo.p2pk = td;
var lo = {}, qt = {}, Cn = {}, Gt = {}, We = {};
Object.defineProperty(We, "__esModule", { value: !0 });
We.output = We.exists = We.hash = We.bytes = We.bool = We.number = We.isBytes = void 0;
function Xi(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`positive integer expected, not ${e}`);
}
We.number = Xi;
function au(e) {
  if (typeof e != "boolean")
    throw new Error(`boolean expected, not ${e}`);
}
We.bool = au;
function cu(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
We.isBytes = cu;
function js(e, ...t) {
  if (!cu(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
We.bytes = js;
function uu(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Xi(e.outputLen), Xi(e.blockLen);
}
We.hash = uu;
function lu(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
We.exists = lu;
function fu(e, t) {
  js(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
We.output = fu;
const rd = { number: Xi, bool: au, bytes: js, hash: uu, exists: lu, output: fu };
We.default = rd;
var di = {}, fo = {};
Object.defineProperty(fo, "__esModule", { value: !0 });
fo.crypto = void 0;
fo.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomBytes = e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.byteSwap32 = e.byteSwapIfBE = e.byteSwap = e.isLE = e.rotl = e.rotr = e.createView = e.u32 = e.u8 = e.isBytes = void 0;
  const t = fo, r = We;
  function n(h) {
    return h instanceof Uint8Array || h != null && typeof h == "object" && h.constructor.name === "Uint8Array";
  }
  e.isBytes = n;
  const i = (h) => new Uint8Array(h.buffer, h.byteOffset, h.byteLength);
  e.u8 = i;
  const s = (h) => new Uint32Array(h.buffer, h.byteOffset, Math.floor(h.byteLength / 4));
  e.u32 = s;
  const o = (h) => new DataView(h.buffer, h.byteOffset, h.byteLength);
  e.createView = o;
  const a = (h, P) => h << 32 - P | h >>> P;
  e.rotr = a;
  const f = (h, P) => h << P | h >>> 32 - P >>> 0;
  e.rotl = f, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  const m = (h) => h << 24 & 4278190080 | h << 8 & 16711680 | h >>> 8 & 65280 | h >>> 24 & 255;
  e.byteSwap = m, e.byteSwapIfBE = e.isLE ? (h) => h : (h) => (0, e.byteSwap)(h);
  function p(h) {
    for (let P = 0; P < h.length; P++)
      h[P] = (0, e.byteSwap)(h[P]);
  }
  e.byteSwap32 = p;
  const w = /* @__PURE__ */ Array.from({ length: 256 }, (h, P) => P.toString(16).padStart(2, "0"));
  function T(h) {
    (0, r.bytes)(h);
    let P = "";
    for (let k = 0; k < h.length; k++)
      P += w[h[k]];
    return P;
  }
  e.bytesToHex = T;
  const E = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function R(h) {
    if (h >= E._0 && h <= E._9)
      return h - E._0;
    if (h >= E._A && h <= E._F)
      return h - (E._A - 10);
    if (h >= E._a && h <= E._f)
      return h - (E._a - 10);
  }
  function B(h) {
    if (typeof h != "string")
      throw new Error("hex string expected, got " + typeof h);
    const P = h.length, k = P / 2;
    if (P % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + P);
    const v = new Uint8Array(k);
    for (let O = 0, U = 0; O < k; O++, U += 2) {
      const H = R(h.charCodeAt(U)), W = R(h.charCodeAt(U + 1));
      if (H === void 0 || W === void 0) {
        const G = h[U] + h[U + 1];
        throw new Error('hex string expected, got non-hex character "' + G + '" at index ' + U);
      }
      v[O] = H * 16 + W;
    }
    return v;
  }
  e.hexToBytes = B;
  const C = async () => {
  };
  e.nextTick = C;
  async function j(h, P, k) {
    let v = Date.now();
    for (let O = 0; O < h; O++) {
      k(O);
      const U = Date.now() - v;
      U >= 0 && U < P || (await (0, e.nextTick)(), v += U);
    }
  }
  e.asyncLoop = j;
  function y(h) {
    if (typeof h != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof h}`);
    return new Uint8Array(new TextEncoder().encode(h));
  }
  e.utf8ToBytes = y;
  function S(h) {
    return typeof h == "string" && (h = y(h)), (0, r.bytes)(h), h;
  }
  e.toBytes = S;
  function I(...h) {
    let P = 0;
    for (let v = 0; v < h.length; v++) {
      const O = h[v];
      (0, r.bytes)(O), P += O.length;
    }
    const k = new Uint8Array(P);
    for (let v = 0, O = 0; v < h.length; v++) {
      const U = h[v];
      k.set(U, O), O += U.length;
    }
    return k;
  }
  e.concatBytes = I;
  class L {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = L;
  const N = {}.toString;
  function D(h, P) {
    if (P !== void 0 && N.call(P) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(h, P);
  }
  e.checkOpts = D;
  function d(h) {
    const P = (v) => h().update(S(v)).digest(), k = h();
    return P.outputLen = k.outputLen, P.blockLen = k.blockLen, P.create = () => h(), P;
  }
  e.wrapConstructor = d;
  function l(h) {
    const P = (v, O) => h(O).update(S(v)).digest(), k = h({});
    return P.outputLen = k.outputLen, P.blockLen = k.blockLen, P.create = (v) => h(v), P;
  }
  e.wrapConstructorWithOpts = l;
  function A(h) {
    const P = (v, O) => h(O).update(S(v)).digest(), k = h({});
    return P.outputLen = k.outputLen, P.blockLen = k.blockLen, P.create = (v) => h(v), P;
  }
  e.wrapXOFConstructorWithOpts = A;
  function x(h = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(h));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = x;
})(di);
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.HashMD = Gt.Maj = Gt.Chi = void 0;
const qo = We, Vn = di;
function nd(e, t, r, n) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, r, n);
  const i = BigInt(32), s = BigInt(4294967295), o = Number(r >> i & s), a = Number(r & s), f = n ? 4 : 0, m = n ? 0 : 4;
  e.setUint32(t + f, o, n), e.setUint32(t + m, a, n);
}
const id = (e, t, r) => e & t ^ ~e & r;
Gt.Chi = id;
const od = (e, t, r) => e & t ^ e & r ^ t & r;
Gt.Maj = od;
class sd extends Vn.Hash {
  constructor(t, r, n, i) {
    super(), this.blockLen = t, this.outputLen = r, this.padOffset = n, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = (0, Vn.createView)(this.buffer);
  }
  update(t) {
    (0, qo.exists)(this);
    const { view: r, buffer: n, blockLen: i } = this;
    t = (0, Vn.toBytes)(t);
    const s = t.length;
    for (let o = 0; o < s; ) {
      const a = Math.min(i - this.pos, s - o);
      if (a === i) {
        const f = (0, Vn.createView)(t);
        for (; i <= s - o; o += i)
          this.process(f, o);
        continue;
      }
      n.set(t.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === i && (this.process(r, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    (0, qo.exists)(this), (0, qo.output)(t, this), this.finished = !0;
    const { buffer: r, view: n, blockLen: i, isLE: s } = this;
    let { pos: o } = this;
    r[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > i - o && (this.process(n, 0), o = 0);
    for (let w = o; w < i; w++)
      r[w] = 0;
    nd(n, i - 8, BigInt(this.length * 8), s), this.process(n, 0);
    const a = (0, Vn.createView)(t), f = this.outputLen;
    if (f % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const m = f / 4, p = this.get();
    if (m > p.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let w = 0; w < m; w++)
      a.setUint32(4 * w, p[w], s);
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
Gt.HashMD = sd;
Object.defineProperty(Cn, "__esModule", { value: !0 });
Cn.ripemd160 = Cn.RIPEMD160 = void 0;
const ad = Gt, Jn = di, cd = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]), hu = /* @__PURE__ */ new Uint8Array(new Array(16).fill(0).map((e, t) => t)), ud = /* @__PURE__ */ hu.map((e) => (9 * e + 5) % 16);
let Ks = [hu], Ws = [ud];
for (let e = 0; e < 4; e++)
  for (let t of [Ks, Ws])
    t.push(t[e].map((r) => cd[r]));
const du = /* @__PURE__ */ [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((e) => new Uint8Array(e)), ld = /* @__PURE__ */ Ks.map((e, t) => e.map((r) => du[t][r])), fd = /* @__PURE__ */ Ws.map((e, t) => e.map((r) => du[t][r])), hd = /* @__PURE__ */ new Uint32Array([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]), dd = /* @__PURE__ */ new Uint32Array([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]);
function Ca(e, t, r, n) {
  return e === 0 ? t ^ r ^ n : e === 1 ? t & r | ~t & n : e === 2 ? (t | ~r) ^ n : e === 3 ? t & n | r & ~n : t ^ (r | ~n);
}
const Oi = /* @__PURE__ */ new Uint32Array(16);
class pu extends ad.HashMD {
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
    for (let E = 0; E < 16; E++, r += 4)
      Oi[E] = t.getUint32(r, !0);
    let n = this.h0 | 0, i = n, s = this.h1 | 0, o = s, a = this.h2 | 0, f = a, m = this.h3 | 0, p = m, w = this.h4 | 0, T = w;
    for (let E = 0; E < 5; E++) {
      const R = 4 - E, B = hd[E], C = dd[E], j = Ks[E], y = Ws[E], S = ld[E], I = fd[E];
      for (let L = 0; L < 16; L++) {
        const N = (0, Jn.rotl)(n + Ca(E, s, a, m) + Oi[j[L]] + B, S[L]) + w | 0;
        n = w, w = m, m = (0, Jn.rotl)(a, 10) | 0, a = s, s = N;
      }
      for (let L = 0; L < 16; L++) {
        const N = (0, Jn.rotl)(i + Ca(R, o, f, p) + Oi[y[L]] + C, I[L]) + T | 0;
        i = T, T = p, p = (0, Jn.rotl)(f, 10) | 0, f = o, o = N;
      }
    }
    this.set(this.h1 + a + p | 0, this.h2 + m + T | 0, this.h3 + w + i | 0, this.h4 + n + o | 0, this.h0 + s + f | 0);
  }
  roundClean() {
    Oi.fill(0);
  }
  destroy() {
    this.destroyed = !0, this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
  }
}
Cn.RIPEMD160 = pu;
Cn.ripemd160 = (0, Jn.wrapConstructor)(() => new pu());
var ho = {};
Object.defineProperty(ho, "__esModule", { value: !0 });
ho.sha1 = void 0;
const Yo = Gt, Mi = di, Gn = /* @__PURE__ */ new Uint32Array([
  1732584193,
  4023233417,
  2562383102,
  271733878,
  3285377520
]), br = /* @__PURE__ */ new Uint32Array(80);
class pd extends Yo.HashMD {
  constructor() {
    super(64, 20, 8, !1), this.A = Gn[0] | 0, this.B = Gn[1] | 0, this.C = Gn[2] | 0, this.D = Gn[3] | 0, this.E = Gn[4] | 0;
  }
  get() {
    const { A: t, B: r, C: n, D: i, E: s } = this;
    return [t, r, n, i, s];
  }
  set(t, r, n, i, s) {
    this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = i | 0, this.E = s | 0;
  }
  process(t, r) {
    for (let f = 0; f < 16; f++, r += 4)
      br[f] = t.getUint32(r, !1);
    for (let f = 16; f < 80; f++)
      br[f] = (0, Mi.rotl)(br[f - 3] ^ br[f - 8] ^ br[f - 14] ^ br[f - 16], 1);
    let { A: n, B: i, C: s, D: o, E: a } = this;
    for (let f = 0; f < 80; f++) {
      let m, p;
      f < 20 ? (m = (0, Yo.Chi)(i, s, o), p = 1518500249) : f < 40 ? (m = i ^ s ^ o, p = 1859775393) : f < 60 ? (m = (0, Yo.Maj)(i, s, o), p = 2400959708) : (m = i ^ s ^ o, p = 3395469782);
      const w = (0, Mi.rotl)(n, 5) + m + a + p + br[f] | 0;
      a = o, o = s, s = (0, Mi.rotl)(i, 30), i = n, n = w;
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
ho.sha1 = (0, Mi.wrapConstructor)(() => new pd());
var Yr = {};
Object.defineProperty(Yr, "__esModule", { value: !0 });
Yr.sha224 = Yr.sha256 = void 0;
const Qo = Gt, Ot = di, gd = /* @__PURE__ */ new Uint32Array([
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
class gu extends Qo.HashMD {
  constructor() {
    super(64, 32, 8, !1), this.A = Sr[0] | 0, this.B = Sr[1] | 0, this.C = Sr[2] | 0, this.D = Sr[3] | 0, this.E = Sr[4] | 0, this.F = Sr[5] | 0, this.G = Sr[6] | 0, this.H = Sr[7] | 0;
  }
  get() {
    const { A: t, B: r, C: n, D: i, E: s, F: o, G: a, H: f } = this;
    return [t, r, n, i, s, o, a, f];
  }
  // prettier-ignore
  set(t, r, n, i, s, o, a, f) {
    this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = i | 0, this.E = s | 0, this.F = o | 0, this.G = a | 0, this.H = f | 0;
  }
  process(t, r) {
    for (let w = 0; w < 16; w++, r += 4)
      vr[w] = t.getUint32(r, !1);
    for (let w = 16; w < 64; w++) {
      const T = vr[w - 15], E = vr[w - 2], R = (0, Ot.rotr)(T, 7) ^ (0, Ot.rotr)(T, 18) ^ T >>> 3, B = (0, Ot.rotr)(E, 17) ^ (0, Ot.rotr)(E, 19) ^ E >>> 10;
      vr[w] = B + vr[w - 7] + R + vr[w - 16] | 0;
    }
    let { A: n, B: i, C: s, D: o, E: a, F: f, G: m, H: p } = this;
    for (let w = 0; w < 64; w++) {
      const T = (0, Ot.rotr)(a, 6) ^ (0, Ot.rotr)(a, 11) ^ (0, Ot.rotr)(a, 25), E = p + T + (0, Qo.Chi)(a, f, m) + gd[w] + vr[w] | 0, B = ((0, Ot.rotr)(n, 2) ^ (0, Ot.rotr)(n, 13) ^ (0, Ot.rotr)(n, 22)) + (0, Qo.Maj)(n, i, s) | 0;
      p = m, m = f, f = a, a = o + E | 0, o = s, s = i, i = n, n = E + B | 0;
    }
    n = n + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, f = f + this.F | 0, m = m + this.G | 0, p = p + this.H | 0, this.set(n, i, s, o, a, f, m, p);
  }
  roundClean() {
    vr.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class wd extends gu {
  constructor() {
    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
  }
}
Yr.sha256 = (0, Ot.wrapConstructor)(() => new gu());
Yr.sha224 = (0, Ot.wrapConstructor)(() => new wd());
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.taggedHash = e.TAGGED_HASH_PREFIXES = e.TAGS = e.hash256 = e.hash160 = e.sha256 = e.sha1 = e.ripemd160 = void 0;
  const t = Cn, r = ho, n = Yr;
  function i(p) {
    return M.from((0, t.ripemd160)(Uint8Array.from(p)));
  }
  e.ripemd160 = i;
  function s(p) {
    return M.from((0, r.sha1)(Uint8Array.from(p)));
  }
  e.sha1 = s;
  function o(p) {
    return M.from((0, n.sha256)(Uint8Array.from(p)));
  }
  e.sha256 = o;
  function a(p) {
    return M.from(
      (0, t.ripemd160)((0, n.sha256)(Uint8Array.from(p)))
    );
  }
  e.hash160 = a;
  function f(p) {
    return M.from(
      (0, n.sha256)((0, n.sha256)(Uint8Array.from(p)))
    );
  }
  e.hash256 = f, e.TAGS = [
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
  function m(p, w) {
    return o(M.concat([e.TAGGED_HASH_PREFIXES[p], w]));
  }
  e.taggedHash = m;
})(qt);
function md(e) {
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
  var o = e.length, a = e.charAt(0), f = Math.log(o) / Math.log(256), m = Math.log(256) / Math.log(o);
  function p(E) {
    if (E instanceof Uint8Array || (ArrayBuffer.isView(E) ? E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength) : Array.isArray(E) && (E = Uint8Array.from(E))), !(E instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (E.length === 0)
      return "";
    for (var R = 0, B = 0, C = 0, j = E.length; C !== j && E[C] === 0; )
      C++, R++;
    for (var y = (j - C) * m + 1 >>> 0, S = new Uint8Array(y); C !== j; ) {
      for (var I = E[C], L = 0, N = y - 1; (I !== 0 || L < B) && N !== -1; N--, L++)
        I += 256 * S[N] >>> 0, S[N] = I % o >>> 0, I = I / o >>> 0;
      if (I !== 0)
        throw new Error("Non-zero carry");
      B = L, C++;
    }
    for (var D = y - B; D !== y && S[D] === 0; )
      D++;
    for (var d = a.repeat(R); D < y; ++D)
      d += e.charAt(S[D]);
    return d;
  }
  function w(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return new Uint8Array();
    for (var R = 0, B = 0, C = 0; E[R] === a; )
      B++, R++;
    for (var j = (E.length - R) * f + 1 >>> 0, y = new Uint8Array(j); E[R]; ) {
      var S = t[E.charCodeAt(R)];
      if (S === 255)
        return;
      for (var I = 0, L = j - 1; (S !== 0 || I < C) && L !== -1; L--, I++)
        S += o * y[L] >>> 0, y[L] = S % 256 >>> 0, S = S / 256 >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      C = I, R++;
    }
    for (var N = j - C; N !== j && y[N] === 0; )
      N++;
    for (var D = new Uint8Array(B + (j - N)), d = B; N !== j; )
      D[d++] = y[N++];
    return D;
  }
  function T(E) {
    var R = w(E);
    if (R)
      return R;
    throw new Error("Non-base" + o + " character");
  }
  return {
    encode: p,
    decodeUnsafe: w,
    decode: T
  };
}
var yd = md;
const Ad = yd, Ed = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var Pd = Ad(Ed), zo = Pd, bd = function(e) {
  function t(s) {
    var o = Uint8Array.from(s), a = e(o), f = o.length + 4, m = new Uint8Array(f);
    return m.set(o, 0), m.set(a.subarray(0, 4), o.length), zo.encode(m, f);
  }
  function r(s) {
    var o = s.slice(0, -4), a = s.slice(-4), f = e(o);
    if (!(a[0] ^ f[0] | a[1] ^ f[1] | a[2] ^ f[2] | a[3] ^ f[3]))
      return o;
  }
  function n(s) {
    var o = zo.decodeUnsafe(s);
    if (o)
      return r(o);
  }
  function i(s) {
    var o = zo.decode(s), a = r(o);
    if (!a) throw new Error("Invalid checksum");
    return a;
  }
  return {
    encode: t,
    decode: i,
    decodeUnsafe: n
  };
}, { sha256: Na } = Yr, Sd = bd;
function vd(e) {
  return Na(Na(e));
}
var Vs = Sd(vd);
Object.defineProperty(lo, "__esModule", { value: !0 });
lo.p2pkh = void 0;
const Jo = qt, Td = Xe, Tn = ht(), at = et, er = Et, Ra = Vs, Tr = Tn.OPS;
function _d(e, t) {
  if (!e.address && !e.hash && !e.output && !e.pubkey && !e.input)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, at.typeforce)(
    {
      network: at.typeforce.maybe(at.typeforce.Object),
      address: at.typeforce.maybe(at.typeforce.String),
      hash: at.typeforce.maybe(at.typeforce.BufferN(20)),
      output: at.typeforce.maybe(at.typeforce.BufferN(25)),
      pubkey: at.typeforce.maybe(at.isPoint),
      signature: at.typeforce.maybe(Tn.isCanonicalScriptSignature),
      input: at.typeforce.maybe(at.typeforce.Buffer)
    },
    e
  );
  const r = er.value(() => {
    const o = M.from(Ra.decode(e.address)), a = o.readUInt8(0), f = o.slice(1);
    return { version: a, hash: f };
  }), n = er.value(() => Tn.decompile(e.input)), i = e.network || Td.bitcoin, s = { name: "p2pkh", network: i };
  if (er.prop(s, "address", () => {
    if (!s.hash) return;
    const o = M.allocUnsafe(21);
    return o.writeUInt8(i.pubKeyHash, 0), s.hash.copy(o, 1), Ra.encode(o);
  }), er.prop(s, "hash", () => {
    if (e.output) return e.output.slice(3, 23);
    if (e.address) return r().hash;
    if (e.pubkey || s.pubkey) return Jo.hash160(e.pubkey || s.pubkey);
  }), er.prop(s, "output", () => {
    if (s.hash)
      return Tn.compile([
        Tr.OP_DUP,
        Tr.OP_HASH160,
        s.hash,
        Tr.OP_EQUALVERIFY,
        Tr.OP_CHECKSIG
      ]);
  }), er.prop(s, "pubkey", () => {
    if (e.input)
      return n()[1];
  }), er.prop(s, "signature", () => {
    if (e.input)
      return n()[0];
  }), er.prop(s, "input", () => {
    if (e.pubkey && e.signature)
      return Tn.compile([e.signature, e.pubkey]);
  }), er.prop(s, "witness", () => {
    if (s.input)
      return [];
  }), t.validate) {
    let o = M.from([]);
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
      if (e.output.length !== 25 || e.output[0] !== Tr.OP_DUP || e.output[1] !== Tr.OP_HASH160 || e.output[2] !== 20 || e.output[23] !== Tr.OP_EQUALVERIFY || e.output[24] !== Tr.OP_CHECKSIG)
        throw new TypeError("Output is invalid");
      const a = e.output.slice(3, 23);
      if (o.length > 0 && !o.equals(a))
        throw new TypeError("Hash mismatch");
      o = a;
    }
    if (e.pubkey) {
      const a = Jo.hash160(e.pubkey);
      if (o.length > 0 && !o.equals(a))
        throw new TypeError("Hash mismatch");
      o = a;
    }
    if (e.input) {
      const a = n();
      if (a.length !== 2) throw new TypeError("Input is invalid");
      if (!Tn.isCanonicalScriptSignature(a[0]))
        throw new TypeError("Input has invalid signature");
      if (!(0, at.isPoint)(a[1]))
        throw new TypeError("Input has invalid pubkey");
      if (e.signature && !e.signature.equals(a[0]))
        throw new TypeError("Signature mismatch");
      if (e.pubkey && !e.pubkey.equals(a[1]))
        throw new TypeError("Pubkey mismatch");
      const f = Jo.hash160(a[1]);
      if (o.length > 0 && !o.equals(f))
        throw new TypeError("Hash mismatch");
    }
  }
  return Object.assign(s, e);
}
lo.p2pkh = _d;
var po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.p2sh = void 0;
const Fa = qt, Id = Xe, Dt = ht(), ve = et, Ht = Et, Ua = Vs, Xn = Dt.OPS;
function Od(e, t) {
  if (!e.address && !e.hash && !e.output && !e.redeem && !e.input)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, ve.typeforce)(
    {
      network: ve.typeforce.maybe(ve.typeforce.Object),
      address: ve.typeforce.maybe(ve.typeforce.String),
      hash: ve.typeforce.maybe(ve.typeforce.BufferN(20)),
      output: ve.typeforce.maybe(ve.typeforce.BufferN(23)),
      redeem: ve.typeforce.maybe({
        network: ve.typeforce.maybe(ve.typeforce.Object),
        output: ve.typeforce.maybe(ve.typeforce.Buffer),
        input: ve.typeforce.maybe(ve.typeforce.Buffer),
        witness: ve.typeforce.maybe(
          ve.typeforce.arrayOf(ve.typeforce.Buffer)
        )
      }),
      input: ve.typeforce.maybe(ve.typeforce.Buffer),
      witness: ve.typeforce.maybe(
        ve.typeforce.arrayOf(ve.typeforce.Buffer)
      )
    },
    e
  );
  let r = e.network;
  r || (r = e.redeem && e.redeem.network || Id.bitcoin);
  const n = { network: r }, i = Ht.value(() => {
    const a = M.from(Ua.decode(e.address)), f = a.readUInt8(0), m = a.slice(1);
    return { version: f, hash: m };
  }), s = Ht.value(() => Dt.decompile(e.input)), o = Ht.value(() => {
    const a = s(), f = a[a.length - 1];
    return {
      network: r,
      output: f === Xn.OP_FALSE ? M.from([]) : f,
      input: Dt.compile(a.slice(0, -1)),
      witness: e.witness || []
    };
  });
  if (Ht.prop(n, "address", () => {
    if (!n.hash) return;
    const a = M.allocUnsafe(21);
    return a.writeUInt8(n.network.scriptHash, 0), n.hash.copy(a, 1), Ua.encode(a);
  }), Ht.prop(n, "hash", () => {
    if (e.output) return e.output.slice(2, 22);
    if (e.address) return i().hash;
    if (n.redeem && n.redeem.output) return Fa.hash160(n.redeem.output);
  }), Ht.prop(n, "output", () => {
    if (n.hash)
      return Dt.compile([Xn.OP_HASH160, n.hash, Xn.OP_EQUAL]);
  }), Ht.prop(n, "redeem", () => {
    if (e.input)
      return o();
  }), Ht.prop(n, "input", () => {
    if (!(!e.redeem || !e.redeem.input || !e.redeem.output))
      return Dt.compile(
        [].concat(Dt.decompile(e.redeem.input), e.redeem.output)
      );
  }), Ht.prop(n, "witness", () => {
    if (n.redeem && n.redeem.witness) return n.redeem.witness;
    if (n.input) return [];
  }), Ht.prop(n, "name", () => {
    const a = ["p2sh"];
    return n.redeem !== void 0 && n.redeem.name !== void 0 && a.push(n.redeem.name), a.join("-");
  }), t.validate) {
    let a = M.from([]);
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
      if (e.output.length !== 23 || e.output[0] !== Xn.OP_HASH160 || e.output[1] !== 20 || e.output[22] !== Xn.OP_EQUAL)
        throw new TypeError("Output is invalid");
      const m = e.output.slice(2, 22);
      if (a.length > 0 && !a.equals(m))
        throw new TypeError("Hash mismatch");
      a = m;
    }
    const f = (m) => {
      if (m.output) {
        const p = Dt.decompile(m.output);
        if (!p || p.length < 1)
          throw new TypeError("Redeem.output too short");
        if (m.output.byteLength > 520)
          throw new TypeError(
            "Redeem.output unspendable if larger than 520 bytes"
          );
        if (Dt.countNonPushOnlyOPs(p) > 201)
          throw new TypeError(
            "Redeem.output unspendable with more than 201 non-push ops"
          );
        const w = Fa.hash160(m.output);
        if (a.length > 0 && !a.equals(w))
          throw new TypeError("Hash mismatch");
        a = w;
      }
      if (m.input) {
        const p = m.input.length > 0, w = m.witness && m.witness.length > 0;
        if (!p && !w) throw new TypeError("Empty input");
        if (p && w)
          throw new TypeError("Input and witness provided");
        if (p) {
          const T = Dt.decompile(m.input);
          if (!Dt.isPushOnly(T))
            throw new TypeError("Non push-only scriptSig");
        }
      }
    };
    if (e.input) {
      const m = s();
      if (!m || m.length < 1) throw new TypeError("Input too short");
      if (!M.isBuffer(o().output))
        throw new TypeError("Input is invalid");
      f(o());
    }
    if (e.redeem) {
      if (e.redeem.network && e.redeem.network !== r)
        throw new TypeError("Network mismatch");
      if (e.input) {
        const m = o();
        if (e.redeem.output && !e.redeem.output.equals(m.output))
          throw new TypeError("Redeem.output mismatch");
        if (e.redeem.input && !e.redeem.input.equals(m.input))
          throw new TypeError("Redeem.input mismatch");
      }
      f(e.redeem);
    }
    if (e.witness && e.redeem && e.redeem.witness && !(0, ve.stacksEqual)(e.redeem.witness, e.witness))
      throw new TypeError("Witness and redeem.witness mismatch");
  }
  return Object.assign(n, e);
}
po.p2sh = Od;
var go = {}, hr = {};
Object.defineProperty(hr, "__esModule", { value: !0 });
hr.bech32m = hr.bech32 = void 0;
const qi = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", wu = {};
for (let e = 0; e < qi.length; e++) {
  const t = qi.charAt(e);
  wu[t] = e;
}
function On(e) {
  const t = e >> 25;
  return (e & 33554431) << 5 ^ -(t >> 0 & 1) & 996825010 ^ -(t >> 1 & 1) & 642813549 ^ -(t >> 2 & 1) & 513874426 ^ -(t >> 3 & 1) & 1027748829 ^ -(t >> 4 & 1) & 705979059;
}
function La(e) {
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
function Gs(e, t, r, n) {
  let i = 0, s = 0;
  const o = (1 << r) - 1, a = [];
  for (let f = 0; f < e.length; ++f)
    for (i = i << t | e[f], s += t; s >= r; )
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
function kd(e) {
  return Gs(e, 8, 5, !0);
}
function xd(e) {
  const t = Gs(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
}
function Bd(e) {
  const t = Gs(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
  throw new Error(t);
}
function mu(e) {
  let t;
  e === "bech32" ? t = 1 : t = 734539939;
  function r(o, a, f) {
    if (f = f || 90, o.length + 7 + a.length > f)
      throw new TypeError("Exceeds length limit");
    o = o.toLowerCase();
    let m = La(o);
    if (typeof m == "string")
      throw new Error(m);
    let p = o + "1";
    for (let w = 0; w < a.length; ++w) {
      const T = a[w];
      if (T >> 5)
        throw new Error("Non 5-bit word");
      m = On(m) ^ T, p += qi.charAt(T);
    }
    for (let w = 0; w < 6; ++w)
      m = On(m);
    m ^= t;
    for (let w = 0; w < 6; ++w) {
      const T = m >> (5 - w) * 5 & 31;
      p += qi.charAt(T);
    }
    return p;
  }
  function n(o, a) {
    if (a = a || 90, o.length < 8)
      return o + " too short";
    if (o.length > a)
      return "Exceeds length limit";
    const f = o.toLowerCase(), m = o.toUpperCase();
    if (o !== f && o !== m)
      return "Mixed-case string " + o;
    o = f;
    const p = o.lastIndexOf("1");
    if (p === -1)
      return "No separator character for " + o;
    if (p === 0)
      return "Missing prefix for " + o;
    const w = o.slice(0, p), T = o.slice(p + 1);
    if (T.length < 6)
      return "Data too short";
    let E = La(w);
    if (typeof E == "string")
      return E;
    const R = [];
    for (let B = 0; B < T.length; ++B) {
      const C = T.charAt(B), j = wu[C];
      if (j === void 0)
        return "Unknown character " + C;
      E = On(E) ^ j, !(B + 6 >= T.length) && R.push(j);
    }
    return E !== t ? "Invalid checksum for " + o : { prefix: w, words: R };
  }
  function i(o, a) {
    const f = n(o, a);
    if (typeof f == "object")
      return f;
  }
  function s(o, a) {
    const f = n(o, a);
    if (typeof f == "object")
      return f;
    throw new Error(f);
  }
  return {
    decodeUnsafe: i,
    decode: s,
    encode: r,
    toWords: kd,
    fromWordsUnsafe: xd,
    fromWords: Bd
  };
}
hr.bech32 = mu("bech32");
hr.bech32m = mu("bech32m");
Object.defineProperty(go, "__esModule", { value: !0 });
go.p2wpkh = void 0;
const Zo = qt, Cd = Xe, Di = ht(), De = et, _r = Et, ki = hr, Ha = Di.OPS, Nd = M.alloc(0);
function Rd(e, t) {
  if (!e.address && !e.hash && !e.output && !e.pubkey && !e.witness)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, De.typeforce)(
    {
      address: De.typeforce.maybe(De.typeforce.String),
      hash: De.typeforce.maybe(De.typeforce.BufferN(20)),
      input: De.typeforce.maybe(De.typeforce.BufferN(0)),
      network: De.typeforce.maybe(De.typeforce.Object),
      output: De.typeforce.maybe(De.typeforce.BufferN(22)),
      pubkey: De.typeforce.maybe(De.isPoint),
      signature: De.typeforce.maybe(Di.isCanonicalScriptSignature),
      witness: De.typeforce.maybe(
        De.typeforce.arrayOf(De.typeforce.Buffer)
      )
    },
    e
  );
  const r = _r.value(() => {
    const s = ki.bech32.decode(e.address), o = s.words.shift(), a = ki.bech32.fromWords(s.words);
    return {
      version: o,
      prefix: s.prefix,
      data: M.from(a)
    };
  }), n = e.network || Cd.bitcoin, i = { name: "p2wpkh", network: n };
  if (_r.prop(i, "address", () => {
    if (!i.hash) return;
    const s = ki.bech32.toWords(i.hash);
    return s.unshift(0), ki.bech32.encode(n.bech32, s);
  }), _r.prop(i, "hash", () => {
    if (e.output) return e.output.slice(2, 22);
    if (e.address) return r().data;
    if (e.pubkey || i.pubkey) return Zo.hash160(e.pubkey || i.pubkey);
  }), _r.prop(i, "output", () => {
    if (i.hash)
      return Di.compile([Ha.OP_0, i.hash]);
  }), _r.prop(i, "pubkey", () => {
    if (e.pubkey) return e.pubkey;
    if (e.witness)
      return e.witness[1];
  }), _r.prop(i, "signature", () => {
    if (e.witness)
      return e.witness[0];
  }), _r.prop(i, "input", () => {
    if (i.witness)
      return Nd;
  }), _r.prop(i, "witness", () => {
    if (e.pubkey && e.signature)
      return [e.signature, e.pubkey];
  }), t.validate) {
    let s = M.from([]);
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
      if (e.output.length !== 22 || e.output[0] !== Ha.OP_0 || e.output[1] !== 20)
        throw new TypeError("Output is invalid");
      if (s.length > 0 && !s.equals(e.output.slice(2)))
        throw new TypeError("Hash mismatch");
      s = e.output.slice(2);
    }
    if (e.pubkey) {
      const o = Zo.hash160(e.pubkey);
      if (s.length > 0 && !s.equals(o))
        throw new TypeError("Hash mismatch");
      if (s = o, !(0, De.isPoint)(e.pubkey) || e.pubkey.length !== 33)
        throw new TypeError("Invalid pubkey for p2wpkh");
    }
    if (e.witness) {
      if (e.witness.length !== 2) throw new TypeError("Witness is invalid");
      if (!Di.isCanonicalScriptSignature(e.witness[0]))
        throw new TypeError("Witness has invalid signature");
      if (!(0, De.isPoint)(e.witness[1]) || e.witness[1].length !== 33)
        throw new TypeError("Witness has invalid pubkey");
      if (e.signature && !e.signature.equals(e.witness[0]))
        throw new TypeError("Signature mismatch");
      if (e.pubkey && !e.pubkey.equals(e.witness[1]))
        throw new TypeError("Pubkey mismatch");
      const o = Zo.hash160(e.witness[1]);
      if (s.length > 0 && !s.equals(o))
        throw new TypeError("Hash mismatch");
    }
  }
  return Object.assign(i, e);
}
go.p2wpkh = Rd;
var wo = {};
Object.defineProperty(wo, "__esModule", { value: !0 });
wo.p2wsh = void 0;
const Ma = qt, Fd = Xe, nr = ht(), Pe = et, tr = Et, xi = hr, Da = nr.OPS, es = M.alloc(0);
function Bi(e) {
  return !!(M.isBuffer(e) && e.length === 65 && e[0] === 4 && (0, Pe.isPoint)(e));
}
function Ud(e, t) {
  if (!e.address && !e.hash && !e.output && !e.redeem && !e.witness)
    throw new TypeError("Not enough data");
  t = Object.assign({ validate: !0 }, t || {}), (0, Pe.typeforce)(
    {
      network: Pe.typeforce.maybe(Pe.typeforce.Object),
      address: Pe.typeforce.maybe(Pe.typeforce.String),
      hash: Pe.typeforce.maybe(Pe.typeforce.BufferN(32)),
      output: Pe.typeforce.maybe(Pe.typeforce.BufferN(34)),
      redeem: Pe.typeforce.maybe({
        input: Pe.typeforce.maybe(Pe.typeforce.Buffer),
        network: Pe.typeforce.maybe(Pe.typeforce.Object),
        output: Pe.typeforce.maybe(Pe.typeforce.Buffer),
        witness: Pe.typeforce.maybe(
          Pe.typeforce.arrayOf(Pe.typeforce.Buffer)
        )
      }),
      input: Pe.typeforce.maybe(Pe.typeforce.BufferN(0)),
      witness: Pe.typeforce.maybe(
        Pe.typeforce.arrayOf(Pe.typeforce.Buffer)
      )
    },
    e
  );
  const r = tr.value(() => {
    const o = xi.bech32.decode(e.address), a = o.words.shift(), f = xi.bech32.fromWords(o.words);
    return {
      version: a,
      prefix: o.prefix,
      data: M.from(f)
    };
  }), n = tr.value(() => nr.decompile(e.redeem.input));
  let i = e.network;
  i || (i = e.redeem && e.redeem.network || Fd.bitcoin);
  const s = { network: i };
  if (tr.prop(s, "address", () => {
    if (!s.hash) return;
    const o = xi.bech32.toWords(s.hash);
    return o.unshift(0), xi.bech32.encode(i.bech32, o);
  }), tr.prop(s, "hash", () => {
    if (e.output) return e.output.slice(2);
    if (e.address) return r().data;
    if (s.redeem && s.redeem.output) return Ma.sha256(s.redeem.output);
  }), tr.prop(s, "output", () => {
    if (s.hash)
      return nr.compile([Da.OP_0, s.hash]);
  }), tr.prop(s, "redeem", () => {
    if (e.witness)
      return {
        output: e.witness[e.witness.length - 1],
        input: es,
        witness: e.witness.slice(0, -1)
      };
  }), tr.prop(s, "input", () => {
    if (s.witness)
      return es;
  }), tr.prop(s, "witness", () => {
    if (e.redeem && e.redeem.input && e.redeem.input.length > 0 && e.redeem.output && e.redeem.output.length > 0) {
      const o = nr.toStack(n());
      return s.redeem = Object.assign({ witness: o }, e.redeem), s.redeem.input = es, [].concat(o, e.redeem.output);
    }
    if (e.redeem && e.redeem.output && e.redeem.witness)
      return [].concat(e.redeem.witness, e.redeem.output);
  }), tr.prop(s, "name", () => {
    const o = ["p2wsh"];
    return s.redeem !== void 0 && s.redeem.name !== void 0 && o.push(s.redeem.name), o.join("-");
  }), t.validate) {
    let o = M.from([]);
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
      if (e.output.length !== 34 || e.output[0] !== Da.OP_0 || e.output[1] !== 32)
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
        const a = nr.decompile(e.redeem.output);
        if (!a || a.length < 1)
          throw new TypeError("Redeem.output is invalid");
        if (e.redeem.output.byteLength > 3600)
          throw new TypeError(
            "Redeem.output unspendable if larger than 3600 bytes"
          );
        if (nr.countNonPushOnlyOPs(a) > 201)
          throw new TypeError(
            "Redeem.output unspendable with more than 201 non-push ops"
          );
        const f = Ma.sha256(e.redeem.output);
        if (o.length > 0 && !o.equals(f))
          throw new TypeError("Hash mismatch");
        o = f;
      }
      if (e.redeem.input && !nr.isPushOnly(n()))
        throw new TypeError("Non push-only scriptSig");
      if (e.witness && e.redeem.witness && !(0, Pe.stacksEqual)(e.witness, e.redeem.witness))
        throw new TypeError("Witness and redeem.witness mismatch");
      if (e.redeem.input && n().some(Bi) || e.redeem.output && (nr.decompile(e.redeem.output) || []).some(
        Bi
      ))
        throw new TypeError(
          "redeem.input or redeem.output contains uncompressed pubkey"
        );
    }
    if (e.witness && e.witness.length > 0) {
      const a = e.witness[e.witness.length - 1];
      if (e.redeem && e.redeem.output && !e.redeem.output.equals(a))
        throw new TypeError("Witness and redeem.output mismatch");
      if (e.witness.some(Bi) || (nr.decompile(a) || []).some(Bi))
        throw new TypeError("Witness contains uncompressed pubkey");
    }
  }
  return Object.assign(s, e);
}
wo.p2wsh = Ud;
var qn = {}, Ur = {};
Object.defineProperty(Ur, "__esModule", { value: !0 });
Ur.getEccLib = Ur.initEccLib = void 0;
const oi = {};
function Ld(e) {
  e ? e !== oi.eccLib && (Md(e), oi.eccLib = e) : oi.eccLib = e;
}
Ur.initEccLib = Ld;
function Hd() {
  if (!oi.eccLib)
    throw new Error(
      "No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance"
    );
  return oi.eccLib;
}
Ur.getEccLib = Hd;
const rr = (e) => M.from(e, "hex");
function Md(e) {
  Tt(typeof e.isXOnlyPoint == "function"), Tt(
    e.isXOnlyPoint(
      rr("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")
    )
  ), Tt(
    e.isXOnlyPoint(
      rr("fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e")
    )
  ), Tt(
    e.isXOnlyPoint(
      rr("f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9")
    )
  ), Tt(
    e.isXOnlyPoint(
      rr("0000000000000000000000000000000000000000000000000000000000000001")
    )
  ), Tt(
    !e.isXOnlyPoint(
      rr("0000000000000000000000000000000000000000000000000000000000000000")
    )
  ), Tt(
    !e.isXOnlyPoint(
      rr("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")
    )
  ), Tt(typeof e.xOnlyPointAddTweak == "function"), Dd.forEach((t) => {
    const r = e.xOnlyPointAddTweak(rr(t.pubkey), rr(t.tweak));
    t.result === null ? Tt(r === null) : (Tt(r !== null), Tt(r.parity === t.parity), Tt(M.from(r.xOnlyPubkey).equals(rr(t.result))));
  });
}
function Tt(e) {
  if (!e) throw new Error("ecc library invalid");
}
const Dd = [
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
var mo = {}, $e = {}, vs = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, t) {
  var r = Fn, n = r.Buffer;
  function i(o, a) {
    for (var f in o)
      a[f] = o[f];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = s);
  function s(o, a, f) {
    return n(o, a, f);
  }
  s.prototype = Object.create(n.prototype), i(n, s), s.from = function(o, a, f) {
    if (typeof o == "number")
      throw new TypeError("Argument must not be a number");
    return n(o, a, f);
  }, s.alloc = function(o, a, f) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    var m = n(o);
    return a !== void 0 ? typeof f == "string" ? m.fill(a, f) : m.fill(a) : m.fill(0), m;
  }, s.allocUnsafe = function(o) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    return n(o);
  }, s.allocUnsafeSlow = function(o) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    return r.SlowBuffer(o);
  };
})(vs, vs.exports);
var $d = vs.exports, Ts = $d.Buffer, jd = 9007199254740991;
function Xs(e) {
  if (e < 0 || e > jd || e % 1 !== 0) throw new RangeError("value out of range");
}
function Zn(e, t, r) {
  if (Xs(e), t || (t = Ts.allocUnsafe(yu(e))), !Ts.isBuffer(t)) throw new TypeError("buffer must be a Buffer instance");
  return r || (r = 0), e < 253 ? (t.writeUInt8(e, r), Zn.bytes = 1) : e <= 65535 ? (t.writeUInt8(253, r), t.writeUInt16LE(e, r + 1), Zn.bytes = 3) : e <= 4294967295 ? (t.writeUInt8(254, r), t.writeUInt32LE(e, r + 1), Zn.bytes = 5) : (t.writeUInt8(255, r), t.writeUInt32LE(e >>> 0, r + 1), t.writeUInt32LE(e / 4294967296 | 0, r + 5), Zn.bytes = 9), t;
}
function ei(e, t) {
  if (!Ts.isBuffer(e)) throw new TypeError("buffer must be a Buffer instance");
  t || (t = 0);
  var r = e.readUInt8(t);
  if (r < 253)
    return ei.bytes = 1, r;
  if (r === 253)
    return ei.bytes = 3, e.readUInt16LE(t + 1);
  if (r === 254)
    return ei.bytes = 5, e.readUInt32LE(t + 1);
  ei.bytes = 9;
  var n = e.readUInt32LE(t + 1), i = e.readUInt32LE(t + 5), s = i * 4294967296 + n;
  return Xs(s), s;
}
function yu(e) {
  return Xs(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9;
}
var Kd = { encode: Zn, decode: ei, encodingLength: yu };
Object.defineProperty($e, "__esModule", { value: !0 });
$e.BufferReader = $e.BufferWriter = $e.cloneBuffer = $e.reverseBuffer = $e.writeUInt64LE = $e.readUInt64LE = $e.varuint = void 0;
const qr = et, { typeforce: Au } = qr, ci = Kd;
$e.varuint = ci;
function Eu(e, t) {
  if (typeof e != "number")
    throw new Error("cannot write a non-number as a number");
  if (e < 0)
    throw new Error("specified a negative value for writing an unsigned value");
  if (e > t) throw new Error("RangeError: value out of range");
  if (Math.floor(e) !== e)
    throw new Error("value has a fractional component");
}
function Pu(e, t) {
  const r = e.readUInt32LE(t);
  let n = e.readUInt32LE(t + 4);
  return n *= 4294967296, Eu(n + r, 9007199254740991), n + r;
}
$e.readUInt64LE = Pu;
function bu(e, t, r) {
  return Eu(t, 9007199254740991), e.writeInt32LE(t & -1, r), e.writeUInt32LE(Math.floor(t / 4294967296), r + 4), r + 8;
}
$e.writeUInt64LE = bu;
function Wd(e) {
  if (e.length < 1) return e;
  let t = e.length - 1, r = 0;
  for (let n = 0; n < e.length / 2; n++)
    r = e[n], e[n] = e[t], e[t] = r, t--;
  return e;
}
$e.reverseBuffer = Wd;
function Vd(e) {
  const t = M.allocUnsafe(e.length);
  return e.copy(t), t;
}
$e.cloneBuffer = Vd;
class qs {
  static withCapacity(t) {
    return new qs(M.alloc(t));
  }
  constructor(t, r = 0) {
    this.buffer = t, this.offset = r, Au(qr.tuple(qr.Buffer, qr.UInt32), [t, r]);
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
    this.offset = bu(this.buffer, t, this.offset);
  }
  writeVarInt(t) {
    ci.encode(t, this.buffer, this.offset), this.offset += ci.encode.bytes;
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
$e.BufferWriter = qs;
class Gd {
  constructor(t, r = 0) {
    this.buffer = t, this.offset = r, Au(qr.tuple(qr.Buffer, qr.UInt32), [t, r]);
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
    const t = Pu(this.buffer, this.offset);
    return this.offset += 8, t;
  }
  readVarInt() {
    const t = ci.decode(this.buffer, this.offset);
    return this.offset += ci.decode.bytes, t;
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
$e.BufferReader = Gd;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.tweakKey = e.tapTweakHash = e.tapleafHash = e.findScriptPath = e.toHashTree = e.rootHashFromPath = e.MAX_TAPTREE_DEPTH = e.LEAF_VERSION_TAPSCRIPT = void 0;
  const t = Fn, r = Ur, n = qt, i = $e, s = et;
  e.LEAF_VERSION_TAPSCRIPT = 192, e.MAX_TAPTREE_DEPTH = 128;
  const o = (B) => "left" in B && "right" in B;
  function a(B, C) {
    if (B.length < 33)
      throw new TypeError(
        `The control-block length is too small. Got ${B.length}, expected min 33.`
      );
    const j = (B.length - 33) / 32;
    let y = C;
    for (let S = 0; S < j; S++) {
      const I = B.slice(33 + 32 * S, 65 + 32 * S);
      y.compare(I) < 0 ? y = E(y, I) : y = E(I, y);
    }
    return y;
  }
  e.rootHashFromPath = a;
  function f(B) {
    if ((0, s.isTapleaf)(B))
      return { hash: p(B) };
    const C = [f(B[0]), f(B[1])];
    C.sort((S, I) => S.hash.compare(I.hash));
    const [j, y] = C;
    return {
      hash: E(j.hash, y.hash),
      left: j,
      right: y
    };
  }
  e.toHashTree = f;
  function m(B, C) {
    if (o(B)) {
      const j = m(B.left, C);
      if (j !== void 0) return [...j, B.right.hash];
      const y = m(B.right, C);
      if (y !== void 0) return [...y, B.left.hash];
    } else if (B.hash.equals(C))
      return [];
  }
  e.findScriptPath = m;
  function p(B) {
    const C = B.version || e.LEAF_VERSION_TAPSCRIPT;
    return n.taggedHash(
      "TapLeaf",
      t.Buffer.concat([
        t.Buffer.from([C]),
        R(B.output)
      ])
    );
  }
  e.tapleafHash = p;
  function w(B, C) {
    return n.taggedHash(
      "TapTweak",
      t.Buffer.concat(C ? [B, C] : [B])
    );
  }
  e.tapTweakHash = w;
  function T(B, C) {
    if (!t.Buffer.isBuffer(B) || B.length !== 32 || C && C.length !== 32) return null;
    const j = w(B, C), y = (0, r.getEccLib)().xOnlyPointAddTweak(B, j);
    return !y || y.xOnlyPubkey === null ? null : {
      parity: y.parity,
      x: t.Buffer.from(y.xOnlyPubkey)
    };
  }
  e.tweakKey = T;
  function E(B, C) {
    return n.taggedHash("TapBranch", t.Buffer.concat([B, C]));
  }
  function R(B) {
    const C = i.varuint.encodingLength(B.length), j = t.Buffer.allocUnsafe(C);
    return i.varuint.encode(B.length, j), t.Buffer.concat([j, B]);
  }
})(mo);
var $a;
function Xd() {
  if ($a) return qn;
  $a = 1, Object.defineProperty(qn, "__esModule", { value: !0 }), qn.p2tr = void 0;
  const e = Fn, t = Xe, r = ht(), n = et, i = Ur, s = mo, o = Et, a = hr, f = Ys(), m = r.OPS, p = 1, w = 80;
  function T(E, R) {
    if (!E.address && !E.output && !E.pubkey && !E.internalPubkey && !(E.witness && E.witness.length > 1))
      throw new TypeError("Not enough data");
    R = Object.assign({ validate: !0 }, R || {}), (0, n.typeforce)(
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
      E
    );
    const B = o.value(() => (0, f.fromBech32)(E.address)), C = o.value(() => {
      if (!(!E.witness || !E.witness.length))
        return E.witness.length >= 2 && E.witness[E.witness.length - 1][0] === w ? E.witness.slice(0, -1) : E.witness.slice();
    }), j = o.value(() => {
      if (E.scriptTree) return (0, s.toHashTree)(E.scriptTree);
      if (E.hash) return { hash: E.hash };
    }), y = E.network || t.bitcoin, S = { name: "p2tr", network: y };
    if (o.prop(S, "address", () => {
      if (!S.pubkey) return;
      const I = a.bech32m.toWords(S.pubkey);
      return I.unshift(p), a.bech32m.encode(y.bech32, I);
    }), o.prop(S, "hash", () => {
      const I = j();
      if (I) return I.hash;
      const L = C();
      if (L && L.length > 1) {
        const N = L[L.length - 1], D = N[0] & n.TAPLEAF_VERSION_MASK, d = L[L.length - 2], l = (0, s.tapleafHash)({
          output: d,
          version: D
        });
        return (0, s.rootHashFromPath)(N, l);
      }
      return null;
    }), o.prop(S, "output", () => {
      if (S.pubkey)
        return r.compile([m.OP_1, S.pubkey]);
    }), o.prop(S, "redeemVersion", () => E.redeemVersion ? E.redeemVersion : E.redeem && E.redeem.redeemVersion !== void 0 && E.redeem.redeemVersion !== null ? E.redeem.redeemVersion : s.LEAF_VERSION_TAPSCRIPT), o.prop(S, "redeem", () => {
      const I = C();
      if (!(!I || I.length < 2))
        return {
          output: I[I.length - 2],
          witness: I.slice(0, -2),
          redeemVersion: I[I.length - 1][0] & n.TAPLEAF_VERSION_MASK
        };
    }), o.prop(S, "pubkey", () => {
      if (E.pubkey) return E.pubkey;
      if (E.output) return E.output.slice(2);
      if (E.address) return B().data;
      if (S.internalPubkey) {
        const I = (0, s.tweakKey)(S.internalPubkey, S.hash);
        if (I) return I.x;
      }
    }), o.prop(S, "internalPubkey", () => {
      if (E.internalPubkey) return E.internalPubkey;
      const I = C();
      if (I && I.length > 1)
        return I[I.length - 1].slice(1, 33);
    }), o.prop(S, "signature", () => {
      if (E.signature) return E.signature;
      const I = C();
      if (!(!I || I.length !== 1))
        return I[0];
    }), o.prop(S, "witness", () => {
      if (E.witness) return E.witness;
      const I = j();
      if (I && E.redeem && E.redeem.output && E.internalPubkey) {
        const L = (0, s.tapleafHash)({
          output: E.redeem.output,
          version: S.redeemVersion
        }), N = (0, s.findScriptPath)(I, L);
        if (!N) return;
        const D = (0, s.tweakKey)(E.internalPubkey, I.hash);
        if (!D) return;
        const d = e.Buffer.concat(
          [
            e.Buffer.from([S.redeemVersion | D.parity]),
            E.internalPubkey
          ].concat(N)
        );
        return [E.redeem.output, d];
      }
      if (E.signature) return [E.signature];
    }), R.validate) {
      let I = e.Buffer.from([]);
      if (E.address) {
        if (y && y.bech32 !== B().prefix)
          throw new TypeError("Invalid prefix or Network mismatch");
        if (B().version !== p)
          throw new TypeError("Invalid address version");
        if (B().data.length !== 32)
          throw new TypeError("Invalid address data");
        I = B().data;
      }
      if (E.pubkey) {
        if (I.length > 0 && !I.equals(E.pubkey))
          throw new TypeError("Pubkey mismatch");
        I = E.pubkey;
      }
      if (E.output) {
        if (E.output.length !== 34 || E.output[0] !== m.OP_1 || E.output[1] !== 32)
          throw new TypeError("Output is invalid");
        if (I.length > 0 && !I.equals(E.output.slice(2)))
          throw new TypeError("Pubkey mismatch");
        I = E.output.slice(2);
      }
      if (E.internalPubkey) {
        const D = (0, s.tweakKey)(E.internalPubkey, S.hash);
        if (I.length > 0 && !I.equals(D.x))
          throw new TypeError("Pubkey mismatch");
        I = D.x;
      }
      if (I && I.length && !(0, i.getEccLib)().isXOnlyPoint(I))
        throw new TypeError("Invalid pubkey for p2tr");
      const L = j();
      if (E.hash && L && !E.hash.equals(L.hash))
        throw new TypeError("Hash mismatch");
      if (E.redeem && E.redeem.output && L) {
        const D = (0, s.tapleafHash)({
          output: E.redeem.output,
          version: S.redeemVersion
        });
        if (!(0, s.findScriptPath)(L, D))
          throw new TypeError("Redeem script not in tree");
      }
      const N = C();
      if (E.redeem && S.redeem) {
        if (E.redeem.redeemVersion && E.redeem.redeemVersion !== S.redeem.redeemVersion)
          throw new TypeError("Redeem.redeemVersion and witness mismatch");
        if (E.redeem.output) {
          if (r.decompile(E.redeem.output).length === 0)
            throw new TypeError("Redeem.output is invalid");
          if (S.redeem.output && !E.redeem.output.equals(S.redeem.output))
            throw new TypeError("Redeem.output and witness mismatch");
        }
        if (E.redeem.witness && S.redeem.witness && !(0, n.stacksEqual)(E.redeem.witness, S.redeem.witness))
          throw new TypeError("Redeem.witness and witness mismatch");
      }
      if (N && N.length)
        if (N.length === 1) {
          if (E.signature && !E.signature.equals(N[0]))
            throw new TypeError("Signature mismatch");
        } else {
          const D = N[N.length - 1];
          if (D.length < 33)
            throw new TypeError(
              `The control-block length is too small. Got ${D.length}, expected min 33.`
            );
          if ((D.length - 33) % 32 !== 0)
            throw new TypeError(
              `The control-block length of ${D.length} is incorrect!`
            );
          const d = (D.length - 33) / 32;
          if (d > 128)
            throw new TypeError(
              `The script path is too long. Got ${d}, expected max 128.`
            );
          const l = D.slice(1, 33);
          if (E.internalPubkey && !E.internalPubkey.equals(l))
            throw new TypeError("Internal pubkey mismatch");
          if (!(0, i.getEccLib)().isXOnlyPoint(l))
            throw new TypeError("Invalid internalPubkey for p2tr witness");
          const A = D[0] & n.TAPLEAF_VERSION_MASK, x = N[N.length - 2], h = (0, s.tapleafHash)({
            output: x,
            version: A
          }), P = (0, s.rootHashFromPath)(D, h), k = (0, s.tweakKey)(l, P);
          if (!k)
            throw new TypeError("Invalid outputKey for p2tr witness");
          if (I.length && !I.equals(k.x))
            throw new TypeError("Pubkey mismatch for p2tr witness");
          if (k.parity !== (D[0] & 1))
            throw new Error("Incorrect parity");
        }
    }
    return Object.assign(S, E);
  }
  return qn.p2tr = T, qn;
}
var ja;
function pi() {
  return ja || (ja = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.p2tr = e.p2wsh = e.p2wpkh = e.p2sh = e.p2pkh = e.p2pk = e.p2ms = e.embed = void 0;
    const t = ao;
    Object.defineProperty(e, "embed", {
      enumerable: !0,
      get: function() {
        return t.p2data;
      }
    });
    const r = co;
    Object.defineProperty(e, "p2ms", {
      enumerable: !0,
      get: function() {
        return r.p2ms;
      }
    });
    const n = uo;
    Object.defineProperty(e, "p2pk", {
      enumerable: !0,
      get: function() {
        return n.p2pk;
      }
    });
    const i = lo;
    Object.defineProperty(e, "p2pkh", {
      enumerable: !0,
      get: function() {
        return i.p2pkh;
      }
    });
    const s = po;
    Object.defineProperty(e, "p2sh", {
      enumerable: !0,
      get: function() {
        return s.p2sh;
      }
    });
    const o = go;
    Object.defineProperty(e, "p2wpkh", {
      enumerable: !0,
      get: function() {
        return o.p2wpkh;
      }
    });
    const a = wo;
    Object.defineProperty(e, "p2wsh", {
      enumerable: !0,
      get: function() {
        return a.p2wsh;
      }
    });
    const f = Xd();
    Object.defineProperty(e, "p2tr", {
      enumerable: !0,
      get: function() {
        return f.p2tr;
      }
    });
  }(Vo)), Vo;
}
var Ka;
function Ys() {
  if (Ka) return st;
  Ka = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.toOutputScript = st.fromOutputScript = st.toBech32 = st.toBase58Check = st.fromBech32 = st.fromBase58Check = void 0;
  const e = Xe, t = pi(), r = ht(), n = et, i = hr, s = Vs, o = 40, a = 2, f = 16, m = 2, p = 80, w = "WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.";
  function T(S, I) {
    const L = S.slice(2);
    if (L.length < a || L.length > o)
      throw new TypeError("Invalid program length for segwit address");
    const N = S[0] - p;
    if (N < m || N > f)
      throw new TypeError("Invalid version for segwit address");
    if (S[1] !== L.length)
      throw new TypeError("Invalid script for segwit address");
    return console.warn(w), C(L, N, I.bech32);
  }
  function E(S) {
    const I = M.from(s.decode(S));
    if (I.length < 21) throw new TypeError(S + " is too short");
    if (I.length > 21) throw new TypeError(S + " is too long");
    const L = I.readUInt8(0), N = I.slice(1);
    return { version: L, hash: N };
  }
  st.fromBase58Check = E;
  function R(S) {
    let I, L;
    try {
      I = i.bech32.decode(S);
    } catch {
    }
    if (I) {
      if (L = I.words[0], L !== 0) throw new TypeError(S + " uses wrong encoding");
    } else if (I = i.bech32m.decode(S), L = I.words[0], L === 0) throw new TypeError(S + " uses wrong encoding");
    const N = i.bech32.fromWords(I.words.slice(1));
    return {
      version: L,
      prefix: I.prefix,
      data: M.from(N)
    };
  }
  st.fromBech32 = R;
  function B(S, I) {
    (0, n.typeforce)(
      (0, n.tuple)(n.Hash160bit, n.UInt8),
      arguments
    );
    const L = M.allocUnsafe(21);
    return L.writeUInt8(I, 0), S.copy(L, 1), s.encode(L);
  }
  st.toBase58Check = B;
  function C(S, I, L) {
    const N = i.bech32.toWords(S);
    return N.unshift(I), I === 0 ? i.bech32.encode(L, N) : i.bech32m.encode(L, N);
  }
  st.toBech32 = C;
  function j(S, I) {
    I = I || e.bitcoin;
    try {
      return t.p2pkh({ output: S, network: I }).address;
    } catch {
    }
    try {
      return t.p2sh({ output: S, network: I }).address;
    } catch {
    }
    try {
      return t.p2wpkh({ output: S, network: I }).address;
    } catch {
    }
    try {
      return t.p2wsh({ output: S, network: I }).address;
    } catch {
    }
    try {
      return t.p2tr({ output: S, network: I }).address;
    } catch {
    }
    try {
      return T(S, I);
    } catch {
    }
    throw new Error(r.toASM(S) + " has no matching Address");
  }
  st.fromOutputScript = j;
  function y(S, I) {
    I = I || e.bitcoin;
    let L, N;
    try {
      L = E(S);
    } catch {
    }
    if (L) {
      if (L.version === I.pubKeyHash)
        return t.p2pkh({ hash: L.hash }).output;
      if (L.version === I.scriptHash)
        return t.p2sh({ hash: L.hash }).output;
    } else {
      try {
        N = R(S);
      } catch {
      }
      if (N) {
        if (N.prefix !== I.bech32)
          throw new Error(S + " has an invalid prefix");
        if (N.version === 0) {
          if (N.data.length === 20)
            return t.p2wpkh({ hash: N.data }).output;
          if (N.data.length === 32)
            return t.p2wsh({ hash: N.data }).output;
        } else if (N.version === 1) {
          if (N.data.length === 32)
            return t.p2tr({ pubkey: N.data }).output;
        } else if (N.version >= m && N.version <= f && N.data.length >= a && N.data.length <= o)
          return console.warn(w), r.compile([
            N.version + p,
            N.data
          ]);
      }
    }
    throw new Error(S + " has no matching Script");
  }
  return st.toOutputScript = y, st;
}
var yo = {}, Ao = {};
Object.defineProperty(Ao, "__esModule", { value: !0 });
Ao.fastMerkleRoot = void 0;
function qd(e, t) {
  if (!Array.isArray(e)) throw TypeError("Expected values Array");
  if (typeof t != "function")
    throw TypeError("Expected digest Function");
  let r = e.length;
  const n = e.concat();
  for (; r > 1; ) {
    let i = 0;
    for (let s = 0; s < r; s += 2, ++i) {
      const o = n[s], a = s + 1 === r ? o : n[s + 1], f = M.concat([o, a]);
      n[i] = t(f);
    }
    r = i;
  }
  return n[0];
}
Ao.fastMerkleRoot = qd;
var Hr = {};
Object.defineProperty(Hr, "__esModule", { value: !0 });
Hr.Transaction = void 0;
const Le = $e, ct = qt, Wa = ht(), Yd = ht(), fe = et, { typeforce: Mt } = fe;
function $t(e) {
  const t = e.length;
  return Le.varuint.encodingLength(t) + t;
}
function Qd(e) {
  const t = e.length;
  return Le.varuint.encodingLength(t) + e.reduce((r, n) => r + $t(n), 0);
}
const Ir = M.allocUnsafe(0), Va = [], ts = M.from(
  "0000000000000000000000000000000000000000000000000000000000000000",
  "hex"
), Ga = M.from(
  "0000000000000000000000000000000000000000000000000000000000000001",
  "hex"
), zd = M.from("ffffffffffffffff", "hex"), Jd = {
  script: Ir,
  valueBuffer: zd
};
function Zd(e) {
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
    const f = n.readVarInt();
    for (let p = 0; p < f; ++p)
      i.ins.push({
        hash: n.readSlice(32),
        index: n.readUInt32(),
        script: n.readVarSlice(),
        sequence: n.readUInt32(),
        witness: Va
      });
    const m = n.readVarInt();
    for (let p = 0; p < m; ++p)
      i.outs.push({
        value: n.readUInt64(),
        script: n.readVarSlice()
      });
    if (a) {
      for (let p = 0; p < f; ++p)
        i.ins[p].witness = n.readVector();
      if (!i.hasWitnesses())
        throw new Error("Transaction has superfluous witness data");
    }
    if (i.locktime = n.readUInt32(), r) return i;
    if (n.offset !== t.length)
      throw new Error("Transaction has unexpected data");
    return i;
  }
  static fromHex(t) {
    return oe.fromBuffer(M.from(t, "hex"), !1);
  }
  static isCoinbaseHash(t) {
    Mt(fe.Hash256bit, t);
    for (let r = 0; r < 32; ++r)
      if (t[r] !== 0) return !1;
    return !0;
  }
  isCoinbase() {
    return this.ins.length === 1 && oe.isCoinbaseHash(this.ins[0].hash);
  }
  addInput(t, r, n, i) {
    return Mt(
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
      witness: Va
    }) - 1;
  }
  addOutput(t, r) {
    return Mt(fe.tuple(fe.Buffer, fe.Satoshi), arguments), this.outs.push({
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
    return (r ? 10 : 8) + Le.varuint.encodingLength(this.ins.length) + Le.varuint.encodingLength(this.outs.length) + this.ins.reduce((n, i) => n + 40 + $t(i.script), 0) + this.outs.reduce((n, i) => n + 8 + $t(i.script), 0) + (r ? this.ins.reduce((n, i) => n + Qd(i.witness), 0) : 0);
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
    if (Mt(
      fe.tuple(
        fe.UInt32,
        fe.Buffer,
        /* types.UInt8 */
        fe.Number
      ),
      arguments
    ), t >= this.ins.length) return Ga;
    const i = Wa.compile(
      Wa.decompile(r).filter((a) => a !== Yd.OPS.OP_CODESEPARATOR)
    ), s = this.clone();
    if ((n & 31) === oe.SIGHASH_NONE)
      s.outs = [], s.ins.forEach((a, f) => {
        f !== t && (a.sequence = 0);
      });
    else if ((n & 31) === oe.SIGHASH_SINGLE) {
      if (t >= this.outs.length) return Ga;
      s.outs.length = t + 1;
      for (let a = 0; a < t; a++)
        s.outs[a] = Jd;
      s.ins.forEach((a, f) => {
        f !== t && (a.sequence = 0);
      });
    }
    n & oe.SIGHASH_ANYONECANPAY ? (s.ins = [s.ins[t]], s.ins[0].script = i) : (s.ins.forEach((a) => {
      a.script = Ir;
    }), s.ins[t].script = i);
    const o = M.allocUnsafe(s.byteLength(!1) + 4);
    return o.writeInt32LE(n, o.length - 4), s.__toBuffer(o, 0, !1), ct.hash256(o);
  }
  hashForWitnessV1(t, r, n, i, s, o) {
    if (Mt(
      fe.tuple(
        fe.UInt32,
        Mt.arrayOf(fe.Buffer),
        Mt.arrayOf(fe.Satoshi),
        fe.UInt32
      ),
      arguments
    ), n.length !== this.ins.length || r.length !== this.ins.length)
      throw new Error("Must supply prevout script and value for all inputs");
    const a = i === oe.SIGHASH_DEFAULT ? oe.SIGHASH_ALL : i & oe.SIGHASH_OUTPUT_MASK, m = (i & oe.SIGHASH_INPUT_MASK) === oe.SIGHASH_ANYONECANPAY, p = a === oe.SIGHASH_NONE, w = a === oe.SIGHASH_SINGLE;
    let T = Ir, E = Ir, R = Ir, B = Ir, C = Ir;
    if (!m) {
      let I = Le.BufferWriter.withCapacity(
        36 * this.ins.length
      );
      this.ins.forEach((L) => {
        I.writeSlice(L.hash), I.writeUInt32(L.index);
      }), T = ct.sha256(I.end()), I = Le.BufferWriter.withCapacity(
        8 * this.ins.length
      ), n.forEach((L) => I.writeUInt64(L)), E = ct.sha256(I.end()), I = Le.BufferWriter.withCapacity(
        r.map($t).reduce((L, N) => L + N)
      ), r.forEach(
        (L) => I.writeVarSlice(L)
      ), R = ct.sha256(I.end()), I = Le.BufferWriter.withCapacity(
        4 * this.ins.length
      ), this.ins.forEach((L) => I.writeUInt32(L.sequence)), B = ct.sha256(I.end());
    }
    if (p || w) {
      if (w && t < this.outs.length) {
        const I = this.outs[t], L = Le.BufferWriter.withCapacity(
          8 + $t(I.script)
        );
        L.writeUInt64(I.value), L.writeVarSlice(I.script), C = ct.sha256(L.end());
      }
    } else {
      const I = this.outs.map((N) => 8 + $t(N.script)).reduce((N, D) => N + D), L = Le.BufferWriter.withCapacity(I);
      this.outs.forEach((N) => {
        L.writeUInt64(N.value), L.writeVarSlice(N.script);
      }), C = ct.sha256(L.end());
    }
    const j = (s ? 2 : 0) + (o ? 1 : 0), y = 174 - (m ? 49 : 0) - (p ? 32 : 0) + (o ? 32 : 0) + (s ? 37 : 0), S = Le.BufferWriter.withCapacity(y);
    if (S.writeUInt8(i), S.writeInt32(this.version), S.writeUInt32(this.locktime), S.writeSlice(T), S.writeSlice(E), S.writeSlice(R), S.writeSlice(B), p || w || S.writeSlice(C), S.writeUInt8(j), m) {
      const I = this.ins[t];
      S.writeSlice(I.hash), S.writeUInt32(I.index), S.writeUInt64(n[t]), S.writeVarSlice(r[t]), S.writeUInt32(I.sequence);
    } else
      S.writeUInt32(t);
    if (o) {
      const I = Le.BufferWriter.withCapacity(
        $t(o)
      );
      I.writeVarSlice(o), S.writeSlice(ct.sha256(I.end()));
    }
    return w && S.writeSlice(C), s && (S.writeSlice(s), S.writeUInt8(0), S.writeUInt32(4294967295)), ct.taggedHash(
      "TapSighash",
      M.concat([M.from([0]), S.end()])
    );
  }
  hashForWitnessV0(t, r, n, i) {
    Mt(
      fe.tuple(fe.UInt32, fe.Buffer, fe.Satoshi, fe.UInt32),
      arguments
    );
    let s = M.from([]), o, a = ts, f = ts, m = ts;
    if (i & oe.SIGHASH_ANYONECANPAY || (s = M.allocUnsafe(36 * this.ins.length), o = new Le.BufferWriter(s, 0), this.ins.forEach((w) => {
      o.writeSlice(w.hash), o.writeUInt32(w.index);
    }), f = ct.hash256(s)), !(i & oe.SIGHASH_ANYONECANPAY) && (i & 31) !== oe.SIGHASH_SINGLE && (i & 31) !== oe.SIGHASH_NONE && (s = M.allocUnsafe(4 * this.ins.length), o = new Le.BufferWriter(s, 0), this.ins.forEach((w) => {
      o.writeUInt32(w.sequence);
    }), m = ct.hash256(s)), (i & 31) !== oe.SIGHASH_SINGLE && (i & 31) !== oe.SIGHASH_NONE) {
      const w = this.outs.reduce((T, E) => T + 8 + $t(E.script), 0);
      s = M.allocUnsafe(w), o = new Le.BufferWriter(s, 0), this.outs.forEach((T) => {
        o.writeUInt64(T.value), o.writeVarSlice(T.script);
      }), a = ct.hash256(s);
    } else if ((i & 31) === oe.SIGHASH_SINGLE && t < this.outs.length) {
      const w = this.outs[t];
      s = M.allocUnsafe(8 + $t(w.script)), o = new Le.BufferWriter(s, 0), o.writeUInt64(w.value), o.writeVarSlice(w.script), a = ct.hash256(s);
    }
    s = M.allocUnsafe(156 + $t(r)), o = new Le.BufferWriter(s, 0);
    const p = this.ins[t];
    return o.writeInt32(this.version), o.writeSlice(f), o.writeSlice(m), o.writeSlice(p.hash), o.writeUInt32(p.index), o.writeVarSlice(r), o.writeUInt64(n), o.writeUInt32(p.sequence), o.writeSlice(a), o.writeUInt32(this.locktime), o.writeUInt32(i), ct.hash256(s);
  }
  getHash(t) {
    return t && this.isCoinbase() ? M.alloc(32, 0) : ct.hash256(this.__toBuffer(void 0, void 0, t));
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
    Mt(fe.tuple(fe.Number, fe.Buffer), arguments), this.ins[t].script = r;
  }
  setWitness(t, r) {
    Mt(fe.tuple(fe.Number, [fe.Buffer]), arguments), this.ins[t].witness = r;
  }
  __toBuffer(t, r, n = !1) {
    t || (t = M.allocUnsafe(this.byteLength(n)));
    const i = new Le.BufferWriter(
      t,
      r || 0
    );
    i.writeInt32(this.version);
    const s = n && this.hasWitnesses();
    return s && (i.writeUInt8(oe.ADVANCED_TRANSACTION_MARKER), i.writeUInt8(oe.ADVANCED_TRANSACTION_FLAG)), i.writeVarInt(this.ins.length), this.ins.forEach((o) => {
      i.writeSlice(o.hash), i.writeUInt32(o.index), i.writeVarSlice(o.script), i.writeUInt32(o.sequence);
    }), i.writeVarInt(this.outs.length), this.outs.forEach((o) => {
      Zd(o) ? i.writeUInt64(o.value) : i.writeSlice(o.valueBuffer), i.writeVarSlice(o.script);
    }), s && this.ins.forEach((o) => {
      i.writeVector(o.witness);
    }), i.writeUInt32(this.locktime), r !== void 0 ? t.slice(r, i.offset) : t;
  }
}
Hr.Transaction = oe;
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
Object.defineProperty(yo, "__esModule", { value: !0 });
yo.Block = void 0;
const Kr = $e, rs = qt, ep = Ao, tp = Hr, Su = et, { typeforce: rp } = Su, ns = new TypeError(
  "Cannot compute merkle root for zero transactions"
), Xa = new TypeError(
  "Cannot compute witness commit for non-segwit block"
);
class Wr {
  constructor() {
    this.version = 1, this.prevHash = void 0, this.merkleRoot = void 0, this.timestamp = 0, this.witnessCommit = void 0, this.bits = 0, this.nonce = 0, this.transactions = void 0;
  }
  static fromBuffer(t) {
    if (t.length < 80) throw new Error("Buffer too small (< 80 bytes)");
    const r = new Kr.BufferReader(t), n = new Wr();
    if (n.version = r.readInt32(), n.prevHash = r.readSlice(32), n.merkleRoot = r.readSlice(32), n.timestamp = r.readUInt32(), n.bits = r.readUInt32(), n.nonce = r.readUInt32(), t.length === 80) return n;
    const i = () => {
      const a = tp.Transaction.fromBuffer(
        r.buffer.slice(r.offset),
        !0
      );
      return r.offset += a.byteLength(), a;
    }, s = r.readVarInt();
    n.transactions = [];
    for (let a = 0; a < s; ++a) {
      const f = i();
      n.transactions.push(f);
    }
    const o = n.getWitnessCommit();
    return o && (n.witnessCommit = o), n;
  }
  static fromHex(t) {
    return Wr.fromBuffer(M.from(t, "hex"));
  }
  static calculateTarget(t) {
    const r = ((t & 4278190080) >> 24) - 3, n = t & 8388607, i = M.alloc(32, 0);
    return i.writeUIntBE(n, 29 - r, 3), i;
  }
  static calculateMerkleRoot(t, r) {
    if (rp([{ getHash: Su.Function }], t), t.length === 0) throw ns;
    if (r && !qa(t))
      throw Xa;
    const n = t.map(
      (s) => s.getHash(r)
    ), i = (0, ep.fastMerkleRoot)(n, rs.hash256);
    return r ? rs.hash256(
      M.concat([i, t[0].ins[0].witness[0]])
    ) : i;
  }
  getWitnessCommit() {
    if (!qa(this.transactions)) return null;
    const t = this.transactions[0].outs.filter(
      (n) => n.script.slice(0, 6).equals(M.from("6a24aa21a9ed", "hex"))
    ).map((n) => n.script.slice(6, 38));
    if (t.length === 0) return null;
    const r = t[t.length - 1];
    return r instanceof M && r.length === 32 ? r : null;
  }
  hasWitnessCommit() {
    return this.witnessCommit instanceof M && this.witnessCommit.length === 32 || this.getWitnessCommit() !== null;
  }
  hasWitness() {
    return np(this.transactions);
  }
  weight() {
    const t = this.byteLength(!1, !1), r = this.byteLength(!1, !0);
    return t * 3 + r;
  }
  byteLength(t, r = !0) {
    return t || !this.transactions ? 80 : 80 + Kr.varuint.encodingLength(this.transactions.length) + this.transactions.reduce((n, i) => n + i.byteLength(r), 0);
  }
  getHash() {
    return rs.hash256(this.toBuffer(!0));
  }
  getId() {
    return (0, Kr.reverseBuffer)(this.getHash()).toString("hex");
  }
  getUTCDate() {
    const t = /* @__PURE__ */ new Date(0);
    return t.setUTCSeconds(this.timestamp), t;
  }
  // TODO: buffer, offset compatibility
  toBuffer(t) {
    const r = M.allocUnsafe(this.byteLength(t)), n = new Kr.BufferWriter(r);
    return n.writeInt32(this.version), n.writeSlice(this.prevHash), n.writeSlice(this.merkleRoot), n.writeUInt32(this.timestamp), n.writeUInt32(this.bits), n.writeUInt32(this.nonce), t || !this.transactions || (Kr.varuint.encode(
      this.transactions.length,
      r,
      n.offset
    ), n.offset += Kr.varuint.encode.bytes, this.transactions.forEach((i) => {
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
    const t = (0, Kr.reverseBuffer)(this.getHash()), r = Wr.calculateTarget(this.bits);
    return t.compare(r) <= 0;
  }
  __checkMerkleRoot() {
    if (!this.transactions) throw ns;
    const t = Wr.calculateMerkleRoot(this.transactions);
    return this.merkleRoot.compare(t) === 0;
  }
  __checkWitnessCommit() {
    if (!this.transactions) throw ns;
    if (!this.hasWitnessCommit()) throw Xa;
    const t = Wr.calculateMerkleRoot(
      this.transactions,
      !0
    );
    return this.witnessCommit.compare(t) === 0;
  }
}
yo.Block = Wr;
function qa(e) {
  return e instanceof Array && e[0] && e[0].ins && e[0].ins instanceof Array && e[0].ins[0] && e[0].ins[0].witness && e[0].ins[0].witness instanceof Array && e[0].ins[0].witness.length > 0;
}
function np(e) {
  return e instanceof Array && e.some(
    (t) => typeof t == "object" && t.ins instanceof Array && t.ins.some(
      (r) => typeof r == "object" && r.witness instanceof Array && r.witness.length > 0
    )
  );
}
var Eo = {}, Qs = {}, zs = {}, Js = {}, gi = {}, Qr = {}, qe = {};
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
})(qe);
var zr = {};
Object.defineProperty(zr, "__esModule", { value: !0 });
const vu = qe, ip = (e) => [...Array(e).keys()];
function op(e) {
  if (e.key[0] !== vu.GlobalTypes.GLOBAL_XPUB)
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
  for (const n of ip(e.value.length / 4 - 1)) {
    const i = e.value.readUInt32LE(n * 4 + 4), s = !!(i & 2147483648), o = i & 2147483647;
    r.path += "/" + o.toString(10) + (s ? "'" : "");
  }
  return r;
}
zr.decode = op;
function sp(e) {
  const t = M.from([vu.GlobalTypes.GLOBAL_XPUB]), r = M.concat([t, e.extendedPubkey]), n = e.path.split("/"), i = M.allocUnsafe(n.length * 4);
  e.masterFingerprint.copy(i, 0);
  let s = 4;
  return n.slice(1).forEach((o) => {
    const a = o.slice(-1) === "'";
    let f = 2147483647 & parseInt(a ? o.slice(0, -1) : o, 10);
    a && (f += 2147483648), i.writeUInt32LE(f, s), s += 4;
  }), {
    key: r,
    value: i
  };
}
zr.encode = sp;
zr.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }";
function ap(e) {
  const t = e.extendedPubkey, r = e.masterFingerprint, n = e.path;
  return M.isBuffer(t) && t.length === 78 && [2, 3].indexOf(t[45]) > -1 && M.isBuffer(r) && r.length === 4 && typeof n == "string" && !!n.match(/^m(\/\d+'?)*$/);
}
zr.check = ap;
function cp(e, t, r) {
  const n = t.extendedPubkey.toString("hex");
  return r.has(n) ? !1 : (r.add(n), e.filter((i) => i.extendedPubkey.equals(t.extendedPubkey)).length === 0);
}
zr.canAddToArray = cp;
var Zs = {};
Object.defineProperty(Zs, "__esModule", { value: !0 });
const up = qe;
function lp(e) {
  return {
    key: M.from([up.GlobalTypes.UNSIGNED_TX]),
    value: e.toBuffer()
  };
}
Zs.encode = lp;
var Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
const Tu = qe;
function fp(e) {
  if (e.key[0] !== Tu.InputTypes.FINAL_SCRIPTSIG)
    throw new Error(
      "Decode Error: could not decode finalScriptSig with key 0x" + e.key.toString("hex")
    );
  return e.value;
}
Jr.decode = fp;
function hp(e) {
  return {
    key: M.from([Tu.InputTypes.FINAL_SCRIPTSIG]),
    value: e
  };
}
Jr.encode = hp;
Jr.expected = "Buffer";
function dp(e) {
  return M.isBuffer(e);
}
Jr.check = dp;
function pp(e, t) {
  return !!e && !!t && e.finalScriptSig === void 0;
}
Jr.canAdd = pp;
var Zr = {};
Object.defineProperty(Zr, "__esModule", { value: !0 });
const _u = qe;
function gp(e) {
  if (e.key[0] !== _u.InputTypes.FINAL_SCRIPTWITNESS)
    throw new Error(
      "Decode Error: could not decode finalScriptWitness with key 0x" + e.key.toString("hex")
    );
  return e.value;
}
Zr.decode = gp;
function wp(e) {
  return {
    key: M.from([_u.InputTypes.FINAL_SCRIPTWITNESS]),
    value: e
  };
}
Zr.encode = wp;
Zr.expected = "Buffer";
function mp(e) {
  return M.isBuffer(e);
}
Zr.check = mp;
function yp(e, t) {
  return !!e && !!t && e.finalScriptWitness === void 0;
}
Zr.canAdd = yp;
var en = {};
Object.defineProperty(en, "__esModule", { value: !0 });
const Iu = qe;
function Ap(e) {
  if (e.key[0] !== Iu.InputTypes.NON_WITNESS_UTXO)
    throw new Error(
      "Decode Error: could not decode nonWitnessUtxo with key 0x" + e.key.toString("hex")
    );
  return e.value;
}
en.decode = Ap;
function Ep(e) {
  return {
    key: M.from([Iu.InputTypes.NON_WITNESS_UTXO]),
    value: e
  };
}
en.encode = Ep;
en.expected = "Buffer";
function Pp(e) {
  return M.isBuffer(e);
}
en.check = Pp;
function bp(e, t) {
  return !!e && !!t && e.nonWitnessUtxo === void 0;
}
en.canAdd = bp;
var tn = {};
Object.defineProperty(tn, "__esModule", { value: !0 });
const Ou = qe;
function Sp(e) {
  if (e.key[0] !== Ou.InputTypes.PARTIAL_SIG)
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
tn.decode = Sp;
function vp(e) {
  const t = M.from([Ou.InputTypes.PARTIAL_SIG]);
  return {
    key: M.concat([t, e.pubkey]),
    value: e.signature
  };
}
tn.encode = vp;
tn.expected = "{ pubkey: Buffer; signature: Buffer; }";
function Tp(e) {
  return M.isBuffer(e.pubkey) && M.isBuffer(e.signature) && [33, 65].includes(e.pubkey.length) && [2, 3, 4].includes(e.pubkey[0]) && _p(e.signature);
}
tn.check = Tp;
function _p(e) {
  if (!M.isBuffer(e) || e.length < 9 || e[0] !== 48 || e.length !== e[1] + 3 || e[2] !== 2) return !1;
  const t = e[3];
  if (t > 33 || t < 1 || e[3 + t + 1] !== 2) return !1;
  const r = e[3 + t + 2];
  return !(r > 33 || r < 1 || e.length !== 3 + t + 2 + r + 2);
}
function Ip(e, t, r) {
  const n = t.pubkey.toString("hex");
  return r.has(n) ? !1 : (r.add(n), e.filter((i) => i.pubkey.equals(t.pubkey)).length === 0);
}
tn.canAddToArray = Ip;
var rn = {};
Object.defineProperty(rn, "__esModule", { value: !0 });
const ku = qe;
function Op(e) {
  if (e.key[0] !== ku.InputTypes.POR_COMMITMENT)
    throw new Error(
      "Decode Error: could not decode porCommitment with key 0x" + e.key.toString("hex")
    );
  return e.value.toString("utf8");
}
rn.decode = Op;
function kp(e) {
  return {
    key: M.from([ku.InputTypes.POR_COMMITMENT]),
    value: M.from(e, "utf8")
  };
}
rn.encode = kp;
rn.expected = "string";
function xp(e) {
  return typeof e == "string";
}
rn.check = xp;
function Bp(e, t) {
  return !!e && !!t && e.porCommitment === void 0;
}
rn.canAdd = Bp;
var nn = {};
Object.defineProperty(nn, "__esModule", { value: !0 });
const xu = qe;
function Cp(e) {
  if (e.key[0] !== xu.InputTypes.SIGHASH_TYPE)
    throw new Error(
      "Decode Error: could not decode sighashType with key 0x" + e.key.toString("hex")
    );
  return e.value.readUInt32LE(0);
}
nn.decode = Cp;
function Np(e) {
  const t = M.from([xu.InputTypes.SIGHASH_TYPE]), r = M.allocUnsafe(4);
  return r.writeUInt32LE(e, 0), {
    key: t,
    value: r
  };
}
nn.encode = Np;
nn.expected = "number";
function Rp(e) {
  return typeof e == "number";
}
nn.check = Rp;
function Fp(e, t) {
  return !!e && !!t && e.sighashType === void 0;
}
nn.canAdd = Fp;
var on = {};
Object.defineProperty(on, "__esModule", { value: !0 });
const Bu = qe;
function Up(e) {
  if (e.key[0] !== Bu.InputTypes.TAP_KEY_SIG || e.key.length !== 1)
    throw new Error(
      "Decode Error: could not decode tapKeySig with key 0x" + e.key.toString("hex")
    );
  if (!Cu(e.value))
    throw new Error(
      "Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature"
    );
  return e.value;
}
on.decode = Up;
function Lp(e) {
  return { key: M.from([Bu.InputTypes.TAP_KEY_SIG]), value: e };
}
on.encode = Lp;
on.expected = "Buffer";
function Cu(e) {
  return M.isBuffer(e) && (e.length === 64 || e.length === 65);
}
on.check = Cu;
function Hp(e, t) {
  return !!e && !!t && e.tapKeySig === void 0;
}
on.canAdd = Hp;
var sn = {};
Object.defineProperty(sn, "__esModule", { value: !0 });
const Nu = qe;
function Mp(e) {
  if (e.key[0] !== Nu.InputTypes.TAP_LEAF_SCRIPT)
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
sn.decode = Mp;
function Dp(e) {
  const t = M.from([Nu.InputTypes.TAP_LEAF_SCRIPT]), r = M.from([e.leafVersion]);
  return {
    key: M.concat([t, e.controlBlock]),
    value: M.concat([e.script, r])
  };
}
sn.encode = Dp;
sn.expected = "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }";
function $p(e) {
  return M.isBuffer(e.controlBlock) && (e.controlBlock.length - 1) % 32 === 0 && (e.controlBlock[0] & 254) === e.leafVersion && M.isBuffer(e.script);
}
sn.check = $p;
function jp(e, t, r) {
  const n = t.controlBlock.toString("hex");
  return r.has(n) ? !1 : (r.add(n), e.filter((i) => i.controlBlock.equals(t.controlBlock)).length === 0);
}
sn.canAddToArray = jp;
var an = {};
Object.defineProperty(an, "__esModule", { value: !0 });
const Ru = qe;
function Kp(e) {
  if (e.key[0] !== Ru.InputTypes.TAP_MERKLE_ROOT || e.key.length !== 1)
    throw new Error(
      "Decode Error: could not decode tapMerkleRoot with key 0x" + e.key.toString("hex")
    );
  if (!Fu(e.value))
    throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
  return e.value;
}
an.decode = Kp;
function Wp(e) {
  return { key: M.from([Ru.InputTypes.TAP_MERKLE_ROOT]), value: e };
}
an.encode = Wp;
an.expected = "Buffer";
function Fu(e) {
  return M.isBuffer(e) && e.length === 32;
}
an.check = Fu;
function Vp(e, t) {
  return !!e && !!t && e.tapMerkleRoot === void 0;
}
an.canAdd = Vp;
var cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
const Uu = qe;
function Gp(e) {
  if (e.key[0] !== Uu.InputTypes.TAP_SCRIPT_SIG)
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
cn.decode = Gp;
function Xp(e) {
  const t = M.from([Uu.InputTypes.TAP_SCRIPT_SIG]);
  return {
    key: M.concat([t, e.pubkey, e.leafHash]),
    value: e.signature
  };
}
cn.encode = Xp;
cn.expected = "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }";
function qp(e) {
  return M.isBuffer(e.pubkey) && M.isBuffer(e.leafHash) && M.isBuffer(e.signature) && e.pubkey.length === 32 && e.leafHash.length === 32 && (e.signature.length === 64 || e.signature.length === 65);
}
cn.check = qp;
function Yp(e, t, r) {
  const n = t.pubkey.toString("hex") + t.leafHash.toString("hex");
  return r.has(n) ? !1 : (r.add(n), e.filter(
    (i) => i.pubkey.equals(t.pubkey) && i.leafHash.equals(t.leafHash)
  ).length === 0);
}
cn.canAddToArray = Yp;
var un = {}, Yt = {}, Ut = {};
Object.defineProperty(Ut, "__esModule", { value: !0 });
const Qp = 9007199254740991;
function ea(e) {
  if (e < 0 || e > Qp || e % 1 !== 0)
    throw new RangeError("value out of range");
}
function ti(e, t, r) {
  if (ea(e), t || (t = M.allocUnsafe(Lu(e))), !M.isBuffer(t))
    throw new TypeError("buffer must be a Buffer instance");
  return r || (r = 0), e < 253 ? (t.writeUInt8(e, r), Object.assign(ti, { bytes: 1 })) : e <= 65535 ? (t.writeUInt8(253, r), t.writeUInt16LE(e, r + 1), Object.assign(ti, { bytes: 3 })) : e <= 4294967295 ? (t.writeUInt8(254, r), t.writeUInt32LE(e, r + 1), Object.assign(ti, { bytes: 5 })) : (t.writeUInt8(255, r), t.writeUInt32LE(e >>> 0, r + 1), t.writeUInt32LE(e / 4294967296 | 0, r + 5), Object.assign(ti, { bytes: 9 })), t;
}
Ut.encode = ti;
function ri(e, t) {
  if (!M.isBuffer(e))
    throw new TypeError("buffer must be a Buffer instance");
  t || (t = 0);
  const r = e.readUInt8(t);
  if (r < 253)
    return Object.assign(ri, { bytes: 1 }), r;
  if (r === 253)
    return Object.assign(ri, { bytes: 3 }), e.readUInt16LE(t + 1);
  if (r === 254)
    return Object.assign(ri, { bytes: 5 }), e.readUInt32LE(t + 1);
  {
    Object.assign(ri, { bytes: 9 });
    const n = e.readUInt32LE(t + 1), s = e.readUInt32LE(t + 5) * 4294967296 + n;
    return ea(s), s;
  }
}
Ut.decode = ri;
function Lu(e) {
  return ea(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9;
}
Ut.encodingLength = Lu;
Object.defineProperty(Yt, "__esModule", { value: !0 });
const Ci = Ut;
Yt.range = (e) => [...Array(e).keys()];
function zp(e) {
  if (e.length < 1) return e;
  let t = e.length - 1, r = 0;
  for (let n = 0; n < e.length / 2; n++)
    r = e[n], e[n] = e[t], e[t] = r, t--;
  return e;
}
Yt.reverseBuffer = zp;
function Jp(e) {
  const t = e.map(Hu);
  return t.push(M.from([0])), M.concat(t);
}
Yt.keyValsToBuffer = Jp;
function Hu(e) {
  const t = e.key.length, r = e.value.length, n = Ci.encodingLength(t), i = Ci.encodingLength(r), s = M.allocUnsafe(
    n + t + i + r
  );
  return Ci.encode(t, s, 0), e.key.copy(s, n), Ci.encode(r, s, n + t), e.value.copy(s, n + t + i), s;
}
Yt.keyValToBuffer = Hu;
function Mu(e, t) {
  if (typeof e != "number")
    throw new Error("cannot write a non-number as a number");
  if (e < 0)
    throw new Error("specified a negative value for writing an unsigned value");
  if (e > t) throw new Error("RangeError: value out of range");
  if (Math.floor(e) !== e)
    throw new Error("value has a fractional component");
}
function Zp(e, t) {
  const r = e.readUInt32LE(t);
  let n = e.readUInt32LE(t + 4);
  return n *= 4294967296, Mu(n + r, 9007199254740991), n + r;
}
Yt.readUInt64LE = Zp;
function e1(e, t, r) {
  return Mu(t, 9007199254740991), e.writeInt32LE(t & -1, r), e.writeUInt32LE(Math.floor(t / 4294967296), r + 4), r + 8;
}
Yt.writeUInt64LE = e1;
Object.defineProperty(un, "__esModule", { value: !0 });
const Du = qe, $u = Yt, Yi = Ut;
function t1(e) {
  if (e.key[0] !== Du.InputTypes.WITNESS_UTXO)
    throw new Error(
      "Decode Error: could not decode witnessUtxo with key 0x" + e.key.toString("hex")
    );
  const t = $u.readUInt64LE(e.value, 0);
  let r = 8;
  const n = Yi.decode(e.value, r);
  r += Yi.encodingLength(n);
  const i = e.value.slice(r);
  if (i.length !== n)
    throw new Error("Decode Error: WITNESS_UTXO script is not proper length");
  return {
    script: i,
    value: t
  };
}
un.decode = t1;
function r1(e) {
  const { script: t, value: r } = e, n = Yi.encodingLength(t.length), i = M.allocUnsafe(8 + n + t.length);
  return $u.writeUInt64LE(i, r, 0), Yi.encode(t.length, i, 8), t.copy(i, 8 + n), {
    key: M.from([Du.InputTypes.WITNESS_UTXO]),
    value: i
  };
}
un.encode = r1;
un.expected = "{ script: Buffer; value: number; }";
function n1(e) {
  return M.isBuffer(e.script) && typeof e.value == "number";
}
un.check = n1;
function i1(e, t) {
  return !!e && !!t && e.witnessUtxo === void 0;
}
un.canAdd = i1;
var ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
const ju = qe, _s = Ut;
function o1(e) {
  if (e.key[0] !== ju.OutputTypes.TAP_TREE || e.key.length !== 1)
    throw new Error(
      "Decode Error: could not decode tapTree with key 0x" + e.key.toString("hex")
    );
  let t = 0;
  const r = [];
  for (; t < e.value.length; ) {
    const n = e.value[t++], i = e.value[t++], s = _s.decode(e.value, t);
    t += _s.encodingLength(s), r.push({
      depth: n,
      leafVersion: i,
      script: e.value.slice(t, t + s)
    }), t += s;
  }
  return { leaves: r };
}
ln.decode = o1;
function s1(e) {
  const t = M.from([ju.OutputTypes.TAP_TREE]), r = [].concat(
    ...e.leaves.map((n) => [
      M.of(n.depth, n.leafVersion),
      _s.encode(n.script.length),
      n.script
    ])
  );
  return {
    key: t,
    value: M.concat(r)
  };
}
ln.encode = s1;
ln.expected = "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }";
function a1(e) {
  return Array.isArray(e.leaves) && e.leaves.every(
    (t) => t.depth >= 0 && t.depth <= 128 && (t.leafVersion & 254) === t.leafVersion && M.isBuffer(t.script)
  );
}
ln.check = a1;
function c1(e, t) {
  return !!e && !!t && e.tapTree === void 0;
}
ln.canAdd = c1;
var Po = {};
Object.defineProperty(Po, "__esModule", { value: !0 });
const u1 = (e) => [...Array(e).keys()], l1 = (e) => e.length === 33 && [2, 3].includes(e[0]) || e.length === 65 && e[0] === 4;
function f1(e, t = l1) {
  function r(a) {
    if (a.key[0] !== e)
      throw new Error(
        "Decode Error: could not decode bip32Derivation with key 0x" + a.key.toString("hex")
      );
    const f = a.key.slice(1);
    if (!t(f))
      throw new Error(
        "Decode Error: bip32Derivation has invalid pubkey in key 0x" + a.key.toString("hex")
      );
    if (a.value.length / 4 % 1 !== 0)
      throw new Error(
        "Decode Error: Input BIP32_DERIVATION value length should be multiple of 4"
      );
    const m = {
      masterFingerprint: a.value.slice(0, 4),
      pubkey: f,
      path: "m"
    };
    for (const p of u1(a.value.length / 4 - 1)) {
      const w = a.value.readUInt32LE(p * 4 + 4), T = !!(w & 2147483648), E = w & 2147483647;
      m.path += "/" + E.toString(10) + (T ? "'" : "");
    }
    return m;
  }
  function n(a) {
    const f = M.from([e]), m = M.concat([f, a.pubkey]), p = a.path.split("/"), w = M.allocUnsafe(p.length * 4);
    a.masterFingerprint.copy(w, 0);
    let T = 4;
    return p.slice(1).forEach((E) => {
      const R = E.slice(-1) === "'";
      let B = 2147483647 & parseInt(R ? E.slice(0, -1) : E, 10);
      R && (B += 2147483648), w.writeUInt32LE(B, T), T += 4;
    }), {
      key: m,
      value: w
    };
  }
  const i = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
  function s(a) {
    return M.isBuffer(a.pubkey) && M.isBuffer(a.masterFingerprint) && typeof a.path == "string" && t(a.pubkey) && a.masterFingerprint.length === 4;
  }
  function o(a, f, m) {
    const p = f.pubkey.toString("hex");
    return m.has(p) ? !1 : (m.add(p), a.filter((w) => w.pubkey.equals(f.pubkey)).length === 0);
  }
  return {
    decode: r,
    encode: n,
    check: s,
    expected: i,
    canAddToArray: o
  };
}
Po.makeConverter = f1;
var ta = {};
Object.defineProperty(ta, "__esModule", { value: !0 });
function h1(e) {
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
ta.makeChecker = h1;
var ra = {};
Object.defineProperty(ra, "__esModule", { value: !0 });
function d1(e) {
  function t(o) {
    if (o.key[0] !== e)
      throw new Error(
        "Decode Error: could not decode redeemScript with key 0x" + o.key.toString("hex")
      );
    return o.value;
  }
  function r(o) {
    return {
      key: M.from([e]),
      value: o
    };
  }
  const n = "Buffer";
  function i(o) {
    return M.isBuffer(o);
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
ra.makeConverter = d1;
var na = {};
Object.defineProperty(na, "__esModule", { value: !0 });
const Ni = Ut, p1 = Po, g1 = (e) => e.length === 32;
function w1(e) {
  const t = p1.makeConverter(e, g1);
  function r(o) {
    const a = Ni.decode(o.value), f = Ni.encodingLength(a), m = t.decode({
      key: o.key,
      value: o.value.slice(f + a * 32)
    }), p = new Array(a);
    for (let w = 0, T = f; w < a; w++, T += 32)
      p[w] = o.value.slice(T, T + 32);
    return Object.assign({}, m, { leafHashes: p });
  }
  function n(o) {
    const a = t.encode(o), f = Ni.encodingLength(o.leafHashes.length), m = M.allocUnsafe(f);
    Ni.encode(o.leafHashes.length, m);
    const p = M.concat([m, ...o.leafHashes, a.value]);
    return Object.assign({}, a, { value: p });
  }
  const i = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
  function s(o) {
    return Array.isArray(o.leafHashes) && o.leafHashes.every(
      (a) => M.isBuffer(a) && a.length === 32
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
na.makeConverter = w1;
var ia = {};
Object.defineProperty(ia, "__esModule", { value: !0 });
function m1(e) {
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
    return { key: M.from([e]), value: o };
  }
  const n = "Buffer";
  function i(o) {
    return M.isBuffer(o) && o.length === 32;
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
ia.makeConverter = m1;
var oa = {};
Object.defineProperty(oa, "__esModule", { value: !0 });
function y1(e) {
  function t(o) {
    if (o.key[0] !== e)
      throw new Error(
        "Decode Error: could not decode witnessScript with key 0x" + o.key.toString("hex")
      );
    return o.value;
  }
  function r(o) {
    return {
      key: M.from([e]),
      value: o
    };
  }
  const n = "Buffer";
  function i(o) {
    return M.isBuffer(o);
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
oa.makeConverter = y1;
Object.defineProperty(Qr, "__esModule", { value: !0 });
const At = qe, A1 = zr, E1 = Zs, P1 = Jr, b1 = Zr, S1 = en, v1 = tn, T1 = rn, _1 = nn, I1 = on, O1 = sn, k1 = an, x1 = cn, B1 = un, C1 = ln, Ku = Po, sa = ta, Wu = ra, Vu = na, Gu = ia, Xu = oa, N1 = {
  unsignedTx: E1,
  globalXpub: A1,
  // pass an Array of key bytes that require pubkey beside the key
  checkPubkey: sa.makeChecker([])
};
Qr.globals = N1;
const R1 = {
  nonWitnessUtxo: S1,
  partialSig: v1,
  sighashType: _1,
  finalScriptSig: P1,
  finalScriptWitness: b1,
  porCommitment: T1,
  witnessUtxo: B1,
  bip32Derivation: Ku.makeConverter(
    At.InputTypes.BIP32_DERIVATION
  ),
  redeemScript: Wu.makeConverter(
    At.InputTypes.REDEEM_SCRIPT
  ),
  witnessScript: Xu.makeConverter(
    At.InputTypes.WITNESS_SCRIPT
  ),
  checkPubkey: sa.makeChecker([
    At.InputTypes.PARTIAL_SIG,
    At.InputTypes.BIP32_DERIVATION
  ]),
  tapKeySig: I1,
  tapScriptSig: x1,
  tapLeafScript: O1,
  tapBip32Derivation: Vu.makeConverter(
    At.InputTypes.TAP_BIP32_DERIVATION
  ),
  tapInternalKey: Gu.makeConverter(
    At.InputTypes.TAP_INTERNAL_KEY
  ),
  tapMerkleRoot: k1
};
Qr.inputs = R1;
const F1 = {
  bip32Derivation: Ku.makeConverter(
    At.OutputTypes.BIP32_DERIVATION
  ),
  redeemScript: Wu.makeConverter(
    At.OutputTypes.REDEEM_SCRIPT
  ),
  witnessScript: Xu.makeConverter(
    At.OutputTypes.WITNESS_SCRIPT
  ),
  checkPubkey: sa.makeChecker([
    At.OutputTypes.BIP32_DERIVATION
  ]),
  tapBip32Derivation: Vu.makeConverter(
    At.OutputTypes.TAP_BIP32_DERIVATION
  ),
  tapTree: C1,
  tapInternalKey: Gu.makeConverter(
    At.OutputTypes.TAP_INTERNAL_KEY
  )
};
Qr.outputs = F1;
Object.defineProperty(gi, "__esModule", { value: !0 });
const Te = Qr, Qi = Yt, Ya = Ut, te = qe;
function U1(e, t) {
  let r = 0;
  function n() {
    const C = Ya.decode(e, r);
    r += Ya.encodingLength(C);
    const j = e.slice(r, r + C);
    return r += C, j;
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
    const C = n(), j = n();
    return {
      key: C,
      value: j
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
  const f = [], m = {};
  for (; !a(); ) {
    const C = o(), j = C.key.toString("hex");
    if (m[j])
      throw new Error(
        "Format Error: Keys must be unique for global keymap: key " + j
      );
    m[j] = 1, f.push(C);
  }
  const p = f.filter(
    (C) => C.key[0] === te.GlobalTypes.UNSIGNED_TX
  );
  if (p.length !== 1)
    throw new Error("Format Error: Only one UNSIGNED_TX allowed");
  const w = t(p[0].value), { inputCount: T, outputCount: E } = w.getInputOutputCounts(), R = [], B = [];
  for (const C of Qi.range(T)) {
    const j = {}, y = [];
    for (; !a(); ) {
      const S = o(), I = S.key.toString("hex");
      if (j[I])
        throw new Error(
          "Format Error: Keys must be unique for each input: input index " + C + " key " + I
        );
      j[I] = 1, y.push(S);
    }
    R.push(y);
  }
  for (const C of Qi.range(E)) {
    const j = {}, y = [];
    for (; !a(); ) {
      const S = o(), I = S.key.toString("hex");
      if (j[I])
        throw new Error(
          "Format Error: Keys must be unique for each output: output index " + C + " key " + I
        );
      j[I] = 1, y.push(S);
    }
    B.push(y);
  }
  return qu(w, {
    globalMapKeyVals: f,
    inputKeyVals: R,
    outputKeyVals: B
  });
}
gi.psbtFromBuffer = U1;
function Qe(e, t, r) {
  if (!t.equals(M.from([r])))
    throw new Error(
      `Format Error: Invalid ${e} key: ${t.toString("hex")}`
    );
}
gi.checkKeyBuffer = Qe;
function qu(e, { globalMapKeyVals: t, inputKeyVals: r, outputKeyVals: n }) {
  const i = {
    unsignedTx: e
  };
  let s = 0;
  for (const p of t)
    switch (p.key[0]) {
      case te.GlobalTypes.UNSIGNED_TX:
        if (Qe(
          "global",
          p.key,
          te.GlobalTypes.UNSIGNED_TX
        ), s > 0)
          throw new Error("Format Error: GlobalMap has multiple UNSIGNED_TX");
        s++;
        break;
      case te.GlobalTypes.GLOBAL_XPUB:
        i.globalXpub === void 0 && (i.globalXpub = []), i.globalXpub.push(Te.globals.globalXpub.decode(p));
        break;
      default:
        i.unknownKeyVals || (i.unknownKeyVals = []), i.unknownKeyVals.push(p);
    }
  const o = r.length, a = n.length, f = [], m = [];
  for (const p of Qi.range(o)) {
    const w = {};
    for (const T of r[p])
      switch (Te.inputs.checkPubkey(T), T.key[0]) {
        case te.InputTypes.NON_WITNESS_UTXO:
          if (Qe(
            "input",
            T.key,
            te.InputTypes.NON_WITNESS_UTXO
          ), w.nonWitnessUtxo !== void 0)
            throw new Error(
              "Format Error: Input has multiple NON_WITNESS_UTXO"
            );
          w.nonWitnessUtxo = Te.inputs.nonWitnessUtxo.decode(T);
          break;
        case te.InputTypes.WITNESS_UTXO:
          if (Qe(
            "input",
            T.key,
            te.InputTypes.WITNESS_UTXO
          ), w.witnessUtxo !== void 0)
            throw new Error("Format Error: Input has multiple WITNESS_UTXO");
          w.witnessUtxo = Te.inputs.witnessUtxo.decode(T);
          break;
        case te.InputTypes.PARTIAL_SIG:
          w.partialSig === void 0 && (w.partialSig = []), w.partialSig.push(Te.inputs.partialSig.decode(T));
          break;
        case te.InputTypes.SIGHASH_TYPE:
          if (Qe(
            "input",
            T.key,
            te.InputTypes.SIGHASH_TYPE
          ), w.sighashType !== void 0)
            throw new Error("Format Error: Input has multiple SIGHASH_TYPE");
          w.sighashType = Te.inputs.sighashType.decode(T);
          break;
        case te.InputTypes.REDEEM_SCRIPT:
          if (Qe(
            "input",
            T.key,
            te.InputTypes.REDEEM_SCRIPT
          ), w.redeemScript !== void 0)
            throw new Error("Format Error: Input has multiple REDEEM_SCRIPT");
          w.redeemScript = Te.inputs.redeemScript.decode(T);
          break;
        case te.InputTypes.WITNESS_SCRIPT:
          if (Qe(
            "input",
            T.key,
            te.InputTypes.WITNESS_SCRIPT
          ), w.witnessScript !== void 0)
            throw new Error("Format Error: Input has multiple WITNESS_SCRIPT");
          w.witnessScript = Te.inputs.witnessScript.decode(T);
          break;
        case te.InputTypes.BIP32_DERIVATION:
          w.bip32Derivation === void 0 && (w.bip32Derivation = []), w.bip32Derivation.push(
            Te.inputs.bip32Derivation.decode(T)
          );
          break;
        case te.InputTypes.FINAL_SCRIPTSIG:
          Qe(
            "input",
            T.key,
            te.InputTypes.FINAL_SCRIPTSIG
          ), w.finalScriptSig = Te.inputs.finalScriptSig.decode(T);
          break;
        case te.InputTypes.FINAL_SCRIPTWITNESS:
          Qe(
            "input",
            T.key,
            te.InputTypes.FINAL_SCRIPTWITNESS
          ), w.finalScriptWitness = Te.inputs.finalScriptWitness.decode(
            T
          );
          break;
        case te.InputTypes.POR_COMMITMENT:
          Qe(
            "input",
            T.key,
            te.InputTypes.POR_COMMITMENT
          ), w.porCommitment = Te.inputs.porCommitment.decode(T);
          break;
        case te.InputTypes.TAP_KEY_SIG:
          Qe(
            "input",
            T.key,
            te.InputTypes.TAP_KEY_SIG
          ), w.tapKeySig = Te.inputs.tapKeySig.decode(T);
          break;
        case te.InputTypes.TAP_SCRIPT_SIG:
          w.tapScriptSig === void 0 && (w.tapScriptSig = []), w.tapScriptSig.push(Te.inputs.tapScriptSig.decode(T));
          break;
        case te.InputTypes.TAP_LEAF_SCRIPT:
          w.tapLeafScript === void 0 && (w.tapLeafScript = []), w.tapLeafScript.push(Te.inputs.tapLeafScript.decode(T));
          break;
        case te.InputTypes.TAP_BIP32_DERIVATION:
          w.tapBip32Derivation === void 0 && (w.tapBip32Derivation = []), w.tapBip32Derivation.push(
            Te.inputs.tapBip32Derivation.decode(T)
          );
          break;
        case te.InputTypes.TAP_INTERNAL_KEY:
          Qe(
            "input",
            T.key,
            te.InputTypes.TAP_INTERNAL_KEY
          ), w.tapInternalKey = Te.inputs.tapInternalKey.decode(T);
          break;
        case te.InputTypes.TAP_MERKLE_ROOT:
          Qe(
            "input",
            T.key,
            te.InputTypes.TAP_MERKLE_ROOT
          ), w.tapMerkleRoot = Te.inputs.tapMerkleRoot.decode(T);
          break;
        default:
          w.unknownKeyVals || (w.unknownKeyVals = []), w.unknownKeyVals.push(T);
      }
    f.push(w);
  }
  for (const p of Qi.range(a)) {
    const w = {};
    for (const T of n[p])
      switch (Te.outputs.checkPubkey(T), T.key[0]) {
        case te.OutputTypes.REDEEM_SCRIPT:
          if (Qe(
            "output",
            T.key,
            te.OutputTypes.REDEEM_SCRIPT
          ), w.redeemScript !== void 0)
            throw new Error("Format Error: Output has multiple REDEEM_SCRIPT");
          w.redeemScript = Te.outputs.redeemScript.decode(T);
          break;
        case te.OutputTypes.WITNESS_SCRIPT:
          if (Qe(
            "output",
            T.key,
            te.OutputTypes.WITNESS_SCRIPT
          ), w.witnessScript !== void 0)
            throw new Error("Format Error: Output has multiple WITNESS_SCRIPT");
          w.witnessScript = Te.outputs.witnessScript.decode(T);
          break;
        case te.OutputTypes.BIP32_DERIVATION:
          w.bip32Derivation === void 0 && (w.bip32Derivation = []), w.bip32Derivation.push(
            Te.outputs.bip32Derivation.decode(T)
          );
          break;
        case te.OutputTypes.TAP_INTERNAL_KEY:
          Qe(
            "output",
            T.key,
            te.OutputTypes.TAP_INTERNAL_KEY
          ), w.tapInternalKey = Te.outputs.tapInternalKey.decode(T);
          break;
        case te.OutputTypes.TAP_TREE:
          Qe(
            "output",
            T.key,
            te.OutputTypes.TAP_TREE
          ), w.tapTree = Te.outputs.tapTree.decode(T);
          break;
        case te.OutputTypes.TAP_BIP32_DERIVATION:
          w.tapBip32Derivation === void 0 && (w.tapBip32Derivation = []), w.tapBip32Derivation.push(
            Te.outputs.tapBip32Derivation.decode(T)
          );
          break;
        default:
          w.unknownKeyVals || (w.unknownKeyVals = []), w.unknownKeyVals.push(T);
      }
    m.push(w);
  }
  return { globalMap: i, inputs: f, outputs: m };
}
gi.psbtFromKeyVals = qu;
var bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
const is = Qr, Qa = Yt;
function L1({ globalMap: e, inputs: t, outputs: r }) {
  const { globalKeyVals: n, inputKeyVals: i, outputKeyVals: s } = Yu({
    globalMap: e,
    inputs: t,
    outputs: r
  }), o = Qa.keyValsToBuffer(n), a = (w) => w.length === 0 ? [M.from([0])] : w.map(Qa.keyValsToBuffer), f = a(i), m = a(s), p = M.allocUnsafe(5);
  return p.writeUIntBE(482972169471, 0, 5), M.concat(
    [p, o].concat(f, m)
  );
}
bo.psbtToBuffer = L1;
const H1 = (e, t) => e.key.compare(t.key);
function os(e, t) {
  const r = /* @__PURE__ */ new Set(), n = Object.entries(e).reduce((s, [o, a]) => {
    if (o === "unknownKeyVals") return s;
    const f = t[o];
    if (f === void 0) return s;
    const m = (Array.isArray(a) ? a : [a]).map(
      f.encode
    );
    return m.map((w) => w.key.toString("hex")).forEach((w) => {
      if (r.has(w))
        throw new Error("Serialize Error: Duplicate key: " + w);
      r.add(w);
    }), s.concat(m);
  }, []), i = e.unknownKeyVals ? e.unknownKeyVals.filter((s) => !r.has(s.key.toString("hex"))) : [];
  return n.concat(i).sort(H1);
}
function Yu({ globalMap: e, inputs: t, outputs: r }) {
  return {
    globalKeyVals: os(e, is.globals),
    inputKeyVals: t.map((n) => os(n, is.inputs)),
    outputKeyVals: r.map((n) => os(n, is.outputs))
  };
}
bo.psbtToKeyVals = Yu;
(function(e) {
  function t(r) {
    for (var n in r) e.hasOwnProperty(n) || (e[n] = r[n]);
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), t(gi), t(bo);
})(Js);
Object.defineProperty(zs, "__esModule", { value: !0 });
const ss = Js;
function M1(e) {
  const t = e[0], r = ss.psbtToKeyVals(t), n = e.slice(1);
  if (n.length === 0) throw new Error("Combine: Nothing to combine");
  const i = za(t);
  if (i === void 0)
    throw new Error("Combine: Self missing transaction");
  const s = Pn(r.globalKeyVals), o = r.inputKeyVals.map(Pn), a = r.outputKeyVals.map(Pn);
  for (const f of n) {
    const m = za(f);
    if (m === void 0 || !m.toBuffer().equals(i.toBuffer()))
      throw new Error(
        "Combine: One of the Psbts does not have the same transaction."
      );
    const p = ss.psbtToKeyVals(f);
    Pn(p.globalKeyVals).forEach(
      as(
        s,
        r.globalKeyVals,
        p.globalKeyVals
      )
    ), p.inputKeyVals.map(Pn).forEach(
      (R, B) => R.forEach(
        as(
          o[B],
          r.inputKeyVals[B],
          p.inputKeyVals[B]
        )
      )
    ), p.outputKeyVals.map(Pn).forEach(
      (R, B) => R.forEach(
        as(
          a[B],
          r.outputKeyVals[B],
          p.outputKeyVals[B]
        )
      )
    );
  }
  return ss.psbtFromKeyVals(i, {
    globalMapKeyVals: r.globalKeyVals,
    inputKeyVals: r.inputKeyVals,
    outputKeyVals: r.outputKeyVals
  });
}
zs.combine = M1;
function as(e, t, r) {
  return (n) => {
    if (e.has(n)) return;
    const i = r.filter((s) => s.key.toString("hex") === n)[0];
    t.push(i), e.add(n);
  };
}
function za(e) {
  return e.globalMap.unsignedTx;
}
function Pn(e) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const n = r.key.toString("hex");
    if (t.has(n))
      throw new Error("Combine: KeyValue Map keys should be unique");
    t.add(n);
  }), t;
}
var aa = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Qr;
  function r(E, R) {
    const B = E[R];
    if (B === void 0) throw new Error(`No input #${R}`);
    return B;
  }
  e.checkForInput = r;
  function n(E, R) {
    const B = E[R];
    if (B === void 0) throw new Error(`No output #${R}`);
    return B;
  }
  e.checkForOutput = n;
  function i(E, R, B) {
    if (E.key[0] < B)
      throw new Error(
        "Use the method for your specific key instead of addUnknownKeyVal*"
      );
    if (R && R.filter((C) => C.key.equals(E.key)).length !== 0)
      throw new Error(`Duplicate Key: ${E.key.toString("hex")}`);
  }
  e.checkHasKey = i;
  function s(E) {
    let R = 0;
    return Object.keys(E).forEach((B) => {
      Number(isNaN(Number(B))) && R++;
    }), R;
  }
  e.getEnumLength = s;
  function o(E, R) {
    let B = !1;
    if (R.nonWitnessUtxo || R.witnessUtxo) {
      const C = !!R.redeemScript, j = !!R.witnessScript, y = !C || !!R.finalScriptSig, S = !j || !!R.finalScriptWitness, I = !!R.finalScriptSig || !!R.finalScriptWitness;
      B = y && S && I;
    }
    if (B === !1)
      throw new Error(
        `Input #${E} has too much or too little data to clean`
      );
  }
  e.inputCheckUncleanFinalized = o;
  function a(E, R, B, C) {
    throw new Error(
      `Data for ${E} key ${R} is incorrect: Expected ${B} and got ${JSON.stringify(C)}`
    );
  }
  function f(E) {
    return (R, B) => {
      for (const C of Object.keys(R)) {
        const j = R[C], { canAdd: y, canAddToArray: S, check: I, expected: L } = (
          // @ts-ignore
          t[E + "s"][C] || {}
        ), N = !!S;
        if (I)
          if (N) {
            if (!Array.isArray(j) || // @ts-ignore
            B[C] && !Array.isArray(B[C]))
              throw new Error(`Key type ${C} must be an array`);
            j.every(I) || a(E, C, L, j);
            const D = B[C] || [], d = /* @__PURE__ */ new Set();
            if (!j.every((l) => S(D, l, d)))
              throw new Error("Can not add duplicate data to array");
            B[C] = D.concat(j);
          } else {
            if (I(j) || a(E, C, L, j), !y(B, j))
              throw new Error(`Can not add duplicate data to ${E}`);
            B[C] = j;
          }
      }
    };
  }
  e.updateGlobal = f("global"), e.updateInput = f("input"), e.updateOutput = f("output");
  function m(E, R) {
    const B = E.length - 1, C = r(E, B);
    e.updateInput(R, C);
  }
  e.addInputAttributes = m;
  function p(E, R) {
    const B = E.length - 1, C = n(E, B);
    e.updateOutput(R, C);
  }
  e.addOutputAttributes = p;
  function w(E, R) {
    if (!M.isBuffer(R) || R.length < 4)
      throw new Error("Set Version: Invalid Transaction");
    return R.writeUInt32LE(E, 0), R;
  }
  e.defaultVersionSetter = w;
  function T(E, R) {
    if (!M.isBuffer(R) || R.length < 4)
      throw new Error("Set Locktime: Invalid Transaction");
    return R.writeUInt32LE(E, R.length - 4), R;
  }
  e.defaultLocktimeSetter = T;
})(aa);
Object.defineProperty(Qs, "__esModule", { value: !0 });
const D1 = zs, Ja = Js, cs = qe, Ye = aa;
let $1 = class {
  constructor(t) {
    this.inputs = [], this.outputs = [], this.globalMap = {
      unsignedTx: t
    };
  }
  static fromBase64(t, r) {
    const n = M.from(t, "base64");
    return this.fromBuffer(n, r);
  }
  static fromHex(t, r) {
    const n = M.from(t, "hex");
    return this.fromBuffer(n, r);
  }
  static fromBuffer(t, r) {
    const n = Ja.psbtFromBuffer(t, r), i = new this(n.globalMap.unsignedTx);
    return Object.assign(i, n), i;
  }
  toBase64() {
    return this.toBuffer().toString("base64");
  }
  toHex() {
    return this.toBuffer().toString("hex");
  }
  toBuffer() {
    return Ja.psbtToBuffer(this);
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
      Ye.getEnumLength(cs.GlobalTypes)
    ), this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []), this.globalMap.unknownKeyVals.push(t), this;
  }
  addUnknownKeyValToInput(t, r) {
    const n = Ye.checkForInput(this.inputs, t);
    return Ye.checkHasKey(
      r,
      n.unknownKeyVals,
      Ye.getEnumLength(cs.InputTypes)
    ), n.unknownKeyVals || (n.unknownKeyVals = []), n.unknownKeyVals.push(r), this;
  }
  addUnknownKeyValToOutput(t, r) {
    const n = Ye.checkForOutput(this.outputs, t);
    return Ye.checkHasKey(
      r,
      n.unknownKeyVals,
      Ye.getEnumLength(cs.OutputTypes)
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
    const r = D1.combine([this].concat(t));
    return Object.assign(this, r), this;
  }
  getTransaction() {
    return this.globalMap.unsignedTx.toBuffer();
  }
};
Qs.Psbt = $1;
var Oe = {}, me = {};
Object.defineProperty(me, "__esModule", { value: !0 });
me.signatureBlocksAction = me.checkInputForSig = me.pubkeyInScript = me.pubkeyPositionInScript = me.witnessStackToScriptWitness = me.isP2TR = me.isP2SHScript = me.isP2WSHScript = me.isP2WPKH = me.isP2PKH = me.isP2PK = me.isP2MS = void 0;
const Za = Ut, si = ht(), Ri = Hr, j1 = qt, fn = pi();
function hn(e) {
  return (t) => {
    try {
      return e({ output: t }), !0;
    } catch {
      return !1;
    }
  };
}
me.isP2MS = hn(fn.p2ms);
me.isP2PK = hn(fn.p2pk);
me.isP2PKH = hn(fn.p2pkh);
me.isP2WPKH = hn(fn.p2wpkh);
me.isP2WSHScript = hn(fn.p2wsh);
me.isP2SHScript = hn(fn.p2sh);
me.isP2TR = hn(fn.p2tr);
function K1(e) {
  let t = M.allocUnsafe(0);
  function r(o) {
    t = M.concat([t, M.from(o)]);
  }
  function n(o) {
    const a = t.length, f = Za.encodingLength(o);
    t = M.concat([t, M.allocUnsafe(f)]), Za.encode(o, t, a);
  }
  function i(o) {
    n(o.length), r(o);
  }
  function s(o) {
    n(o.length), o.forEach(i);
  }
  return s(e), t;
}
me.witnessStackToScriptWitness = K1;
function Qu(e, t) {
  const r = (0, j1.hash160)(e), n = e.slice(1, 33), i = si.decompile(t);
  if (i === null) throw new Error("Unknown script error");
  return i.findIndex((s) => typeof s == "number" ? !1 : s.equals(e) || s.equals(r) || s.equals(n));
}
me.pubkeyPositionInScript = Qu;
function W1(e, t) {
  return Qu(e, t) !== -1;
}
me.pubkeyInScript = W1;
function V1(e, t) {
  return G1(e).some(
    (n) => zu(n, si.signature.decode, t)
  );
}
me.checkInputForSig = V1;
function zu(e, t, r) {
  const { hashType: n } = t(e), i = [];
  switch (n & Ri.Transaction.SIGHASH_ANYONECANPAY && i.push("addInput"), n & 31) {
    case Ri.Transaction.SIGHASH_ALL:
      break;
    case Ri.Transaction.SIGHASH_SINGLE:
    case Ri.Transaction.SIGHASH_NONE:
      i.push("addOutput"), i.push("setInputSequence");
      break;
  }
  return i.indexOf(r) === -1;
}
me.signatureBlocksAction = zu;
function G1(e) {
  let t = [];
  if ((e.partialSig || []).length === 0) {
    if (!e.finalScriptSig && !e.finalScriptWitness) return [];
    t = X1(e);
  } else
    t = e.partialSig;
  return t.map((r) => r.signature);
}
function X1(e) {
  const t = e.finalScriptSig ? si.decompile(e.finalScriptSig) || [] : [], r = e.finalScriptWitness ? si.decompile(e.finalScriptWitness) || [] : [];
  return t.concat(r).filter((n) => M.isBuffer(n) && si.isCanonicalScriptSignature(n)).map((n) => ({ signature: n }));
}
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.checkTaprootInputForSigs = Oe.tapTreeFromList = Oe.tapTreeToList = Oe.tweakInternalPubKey = Oe.checkTaprootOutputFields = Oe.checkTaprootInputFields = Oe.isTaprootOutput = Oe.isTaprootInput = Oe.serializeTaprootSignature = Oe.tapScriptFinalizer = Oe.toXOnly = void 0;
const ca = et, q1 = Hr, So = me, Lr = mo, Y1 = pi(), Q1 = me, z1 = (e) => e.length === 32 ? e : e.slice(1, 33);
Oe.toXOnly = z1;
function J1(e, t, r) {
  const n = w2(
    t,
    e,
    r
  );
  try {
    const s = p2(t, n).concat(n.script).concat(n.controlBlock);
    return {
      finalScriptWitness: (0, So.witnessStackToScriptWitness)(s)
    };
  } catch (i) {
    throw new Error(`Can not finalize taproot input #${e}: ${i}`);
  }
}
Oe.tapScriptFinalizer = J1;
function Z1(e, t) {
  const r = t ? M.from([t]) : M.from([]);
  return M.concat([e, r]);
}
Oe.serializeTaprootSignature = Z1;
function $i(e) {
  return e && !!(e.tapInternalKey || e.tapMerkleRoot || e.tapLeafScript && e.tapLeafScript.length || e.tapBip32Derivation && e.tapBip32Derivation.length || e.witnessUtxo && (0, So.isP2TR)(e.witnessUtxo.script));
}
Oe.isTaprootInput = $i;
function ji(e, t) {
  return e && !!(e.tapInternalKey || e.tapTree || e.tapBip32Derivation && e.tapBip32Derivation.length || t && (0, So.isP2TR)(t));
}
Oe.isTaprootOutput = ji;
function e2(e, t, r) {
  f2(e, t, r), d2(e, t, r);
}
Oe.checkTaprootInputFields = e2;
function t2(e, t, r) {
  h2(e, t, r), r2(e, t);
}
Oe.checkTaprootOutputFields = t2;
function r2(e, t) {
  if (!t.tapTree && !t.tapInternalKey) return;
  const r = t.tapInternalKey || e.tapInternalKey, n = t.tapTree || e.tapTree;
  if (r) {
    const { script: i } = e, s = n2(r, n);
    if (i && !i.equals(s))
      throw new Error("Error adding output. Script or address missmatch.");
  }
}
function n2(e, t) {
  const r = t && Ju(t.leaves), { output: n } = (0, Y1.p2tr)({
    internalPubkey: e,
    scriptTree: r
  });
  return n;
}
function i2(e, t) {
  const r = t.tapInternalKey, n = r && (0, Lr.tweakKey)(r, t.tapMerkleRoot);
  if (!n)
    throw new Error(
      `Cannot tweak tap internal key for input #${e}. Public key: ${r && r.toString("hex")}`
    );
  return n.x;
}
Oe.tweakInternalPubKey = i2;
function o2(e) {
  if (!(0, ca.isTaptree)(e))
    throw new Error(
      "Cannot convert taptree to tapleaf list. Expecting a tapree structure."
    );
  return Is(e);
}
Oe.tapTreeToList = o2;
function Ju(e = []) {
  return e.length === 1 && e[0].depth === 0 ? {
    output: e[0].script,
    version: e[0].leafVersion
  } : l2(e);
}
Oe.tapTreeFromList = Ju;
function s2(e, t) {
  return c2(e).some(
    (n) => (0, Q1.signatureBlocksAction)(n, a2, t)
  );
}
Oe.checkTaprootInputForSigs = s2;
function a2(e) {
  return {
    signature: e.slice(0, 64),
    hashType: e.slice(64)[0] || q1.Transaction.SIGHASH_DEFAULT
  };
}
function c2(e) {
  const t = [];
  if (e.tapKeySig && t.push(e.tapKeySig), e.tapScriptSig && t.push(...e.tapScriptSig.map((r) => r.signature)), !t.length) {
    const r = u2(e.finalScriptWitness);
    r && t.push(r);
  }
  return t;
}
function u2(e) {
  if (!e) return;
  const t = e.slice(2);
  if (t.length === 64 || t.length === 65) return t;
}
function Is(e, t = [], r = 0) {
  if (r > Lr.MAX_TAPTREE_DEPTH)
    throw new Error("Max taptree depth exceeded.");
  return e ? (0, ca.isTapleaf)(e) ? (t.push({
    depth: r,
    leafVersion: e.version || Lr.LEAF_VERSION_TAPSCRIPT,
    script: e.output
  }), t) : (e[0] && Is(e[0], t, r + 1), e[1] && Is(e[1], t, r + 1), t) : [];
}
function l2(e) {
  let t;
  for (const r of e)
    if (t = Os(r, t), !t) throw new Error("No room left to insert tapleaf in tree");
  return t;
}
function Os(e, t, r = 0) {
  if (r > Lr.MAX_TAPTREE_DEPTH)
    throw new Error("Max taptree depth exceeded.");
  if (e.depth === r)
    return t ? void 0 : {
      output: e.script,
      version: e.leafVersion
    };
  if ((0, ca.isTapleaf)(t)) return;
  const n = Os(e, t && t[0], r + 1);
  if (n) return [n, t && t[1]];
  const i = Os(e, t && t[1], r + 1);
  if (i) return [t && t[0], i];
}
function f2(e, t, r) {
  const n = $i(e) && kn(t), i = kn(e) && $i(t), s = e === t && $i(t) && kn(t);
  if (n || i || s)
    throw new Error(
      `Invalid arguments for Psbt.${r}. Cannot use both taproot and non-taproot fields.`
    );
}
function h2(e, t, r) {
  const n = ji(e) && kn(t), i = kn(e) && ji(t), s = e === t && ji(t) && kn(t);
  if (n || i || s)
    throw new Error(
      `Invalid arguments for Psbt.${r}. Cannot use both taproot and non-taproot fields.`
    );
}
function d2(e, t, r) {
  if (t.tapMerkleRoot) {
    const n = (t.tapLeafScript || []).every(
      (s) => us(s, t.tapMerkleRoot)
    ), i = (e.tapLeafScript || []).every(
      (s) => us(s, t.tapMerkleRoot)
    );
    if (!n || !i)
      throw new Error(
        `Invalid arguments for Psbt.${r}. Tapleaf not part of taptree.`
      );
  } else if (e.tapMerkleRoot && !(t.tapLeafScript || []).every(
    (i) => us(i, e.tapMerkleRoot)
  ))
    throw new Error(
      `Invalid arguments for Psbt.${r}. Tapleaf not part of taptree.`
    );
}
function us(e, t) {
  if (!t) return !0;
  const r = (0, Lr.tapleafHash)({
    output: e.script,
    version: e.leafVersion
  });
  return (0, Lr.rootHashFromPath)(
    e.controlBlock,
    r
  ).equals(t);
}
function p2(e, t) {
  const r = (0, Lr.tapleafHash)({
    output: t.script,
    version: t.leafVersion
  });
  return (e.tapScriptSig || []).filter((n) => n.leafHash.equals(r)).map((n) => g2(t.script, n)).sort((n, i) => i.positionInScript - n.positionInScript).map((n) => n.signature);
}
function g2(e, t) {
  return Object.assign(
    {
      positionInScript: (0, So.pubkeyPositionInScript)(
        t.pubkey,
        e
      )
    },
    t
  );
}
function w2(e, t, r) {
  if (!e.tapScriptSig || !e.tapScriptSig.length)
    throw new Error(
      `Can not finalize taproot input #${t}. No tapleaf script signature provided.`
    );
  const n = (e.tapLeafScript || []).sort((i, s) => i.controlBlock.length - s.controlBlock.length).find(
    (i) => m2(i, e.tapScriptSig, r)
  );
  if (!n)
    throw new Error(
      `Can not finalize taproot input #${t}. Signature for tapleaf script not found.`
    );
  return n;
}
function m2(e, t, r) {
  const n = (0, Lr.tapleafHash)({
    output: e.script,
    version: e.leafVersion
  });
  return (!r || r.equals(n)) && t.find((s) => s.leafHash.equals(n)) !== void 0;
}
function kn(e) {
  return e && !!(e.redeemScript || e.witnessScript || e.bip32Derivation && e.bip32Derivation.length);
}
Object.defineProperty(Eo, "__esModule", { value: !0 });
Eo.Psbt = void 0;
const ec = Qs, tc = Ut, ut = aa, rc = Ys(), zi = $e, y2 = Xe, kt = pi(), A2 = mo, lr = ht(), rt = Hr, xe = Oe, He = me, E2 = {
  /**
   * A bitcoinjs Network object. This is only used if you pass an `address`
   * parameter to addOutput. Otherwise it is not needed and can be left default.
   */
  network: y2.bitcoin,
  /**
   * When extractTransaction is called, the fee rate is checked.
   * THIS IS NOT TO BE RELIED ON.
   * It is only here as a last ditch effort to prevent sending a 500 BTC fee etc.
   */
  maximumFeeRate: 5e3
  // satoshi per byte
};
class Ji {
  static fromBase64(t, r = {}) {
    const n = M.from(t, "base64");
    return this.fromBuffer(n, r);
  }
  static fromHex(t, r = {}) {
    const n = M.from(t, "hex");
    return this.fromBuffer(n, r);
  }
  static fromBuffer(t, r = {}) {
    const n = ec.Psbt.fromBuffer(t, P2), i = new Ji(r, n);
    return _2(i.__CACHE.__TX, i.__CACHE), i;
  }
  constructor(t = {}, r = new ec.Psbt(new Zu())) {
    this.data = r, this.opts = Object.assign({}, E2, t), this.__CACHE = {
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
      hash: (0, zi.cloneBuffer)(t.hash),
      index: t.index,
      sequence: t.sequence
    }));
  }
  get txOutputs() {
    return this.__CACHE.__TX.outs.map((t) => {
      let r;
      try {
        r = (0, rc.fromOutputScript)(
          t.script,
          this.opts.network
        );
      } catch {
      }
      return {
        script: (0, zi.cloneBuffer)(t.script),
        value: t.value,
        address: r
      };
    });
  }
  combine(...t) {
    return this.data.combine(...t.map((r) => r.data)), this;
  }
  clone() {
    const t = Ji.fromBuffer(this.data.toBuffer());
    return t.opts = JSON.parse(JSON.stringify(this.opts)), t;
  }
  setMaximumFeeRate(t) {
    Fi(t), this.opts.maximumFeeRate = t;
  }
  setVersion(t) {
    Fi(t), Yn(this.data.inputs, "setVersion");
    const r = this.__CACHE;
    return r.__TX.version = t, r.__EXTRACTED_TX = void 0, this;
  }
  setLocktime(t) {
    Fi(t), Yn(this.data.inputs, "setLocktime");
    const r = this.__CACHE;
    return r.__TX.locktime = t, r.__EXTRACTED_TX = void 0, this;
  }
  setInputSequence(t, r) {
    Fi(r), Yn(this.data.inputs, "setInputSequence");
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
    (0, xe.checkTaprootInputFields)(t, t, "addInput"), Yn(this.data.inputs, "addInput"), t.witnessScript && Zi(t.witnessScript);
    const r = this.__CACHE;
    this.data.addInput(t);
    const n = r.__TX.ins[r.__TX.ins.length - 1];
    rl(r, n);
    const i = this.data.inputs.length - 1, s = this.data.inputs[i];
    return s.nonWitnessUtxo && xs(this.__CACHE, s, i), r.__FEE = void 0, r.__FEE_RATE = void 0, r.__EXTRACTED_TX = void 0, this;
  }
  addOutputs(t) {
    return t.forEach((r) => this.addOutput(r)), this;
  }
  addOutput(t) {
    if (arguments.length > 1 || !t || t.value === void 0 || t.address === void 0 && t.script === void 0)
      throw new Error(
        "Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]"
      );
    Yn(this.data.inputs, "addOutput");
    const { address: r } = t;
    if (typeof r == "string") {
      const { network: i } = this.opts, s = (0, rc.toOutputScript)(r, i);
      t = Object.assign({}, t, { script: s });
    }
    (0, xe.checkTaprootOutputFields)(t, t, "addOutput");
    const n = this.__CACHE;
    return this.data.addOutput(t), n.__FEE = void 0, n.__FEE_RATE = void 0, n.__EXTRACTED_TX = void 0, this;
  }
  extractTransaction(t) {
    if (!this.data.inputs.every(el)) throw new Error("Not finalized");
    const r = this.__CACHE;
    if (t || S2(this, r, this.opts), r.__EXTRACTED_TX) return r.__EXTRACTED_TX;
    const n = r.__TX.clone();
    return cl(this.data.inputs, n, r, !0), n;
  }
  getFeeRate() {
    return ac(
      "__FEE_RATE",
      "fee rate",
      this.data.inputs,
      this.__CACHE
    );
  }
  getFee() {
    return ac("__FEE", "fee", this.data.inputs, this.__CACHE);
  }
  finalizeAllInputs() {
    return (0, ut.checkForInput)(this.data.inputs, 0), Qn(this.data.inputs.length).forEach((t) => this.finalizeInput(t)), this;
  }
  finalizeInput(t, r) {
    const n = (0, ut.checkForInput)(this.data.inputs, t);
    return (0, xe.isTaprootInput)(n) ? this._finalizeTaprootInput(
      t,
      n,
      void 0,
      r
    ) : this._finalizeInput(t, n, r);
  }
  finalizeTaprootInput(t, r, n = xe.tapScriptFinalizer) {
    const i = (0, ut.checkForInput)(this.data.inputs, t);
    if ((0, xe.isTaprootInput)(i))
      return this._finalizeTaprootInput(
        t,
        i,
        r,
        n
      );
    throw new Error(`Cannot finalize input #${t}. Not Taproot.`);
  }
  _finalizeInput(t, r, n = I2) {
    const { script: i, isP2SH: s, isP2WSH: o, isSegwit: a } = B2(
      t,
      r,
      this.__CACHE
    );
    if (!i) throw new Error(`No script found for input #${t}`);
    v2(r);
    const { finalScriptSig: f, finalScriptWitness: m } = n(
      t,
      r,
      i,
      a,
      s,
      o
    );
    if (f && this.data.updateInput(t, { finalScriptSig: f }), m && this.data.updateInput(t, { finalScriptWitness: m }), !f && !m)
      throw new Error(`Unknown error finalizing input #${t}`);
    return this.data.clearFinalizedInput(t), this;
  }
  _finalizeTaprootInput(t, r, n, i = xe.tapScriptFinalizer) {
    if (!r.witnessUtxo)
      throw new Error(
        `Cannot finalize input #${t}. Missing withness utxo.`
      );
    if (r.tapKeySig) {
      const s = kt.p2tr({
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
    const r = (0, ut.checkForInput)(this.data.inputs, t), n = ul(t, r, this.__CACHE), i = To(
      n,
      t,
      "input",
      r.redeemScript || U2(r.finalScriptSig),
      r.witnessScript || L2(r.finalScriptWitness)
    ), s = i.type === "raw" ? "" : i.type + "-", o = fl(i.meaningfulScript);
    return s + o;
  }
  inputHasPubkey(t, r) {
    const n = (0, ut.checkForInput)(this.data.inputs, t);
    return R2(r, n, t, this.__CACHE);
  }
  inputHasHDKey(t, r) {
    const n = (0, ut.checkForInput)(this.data.inputs, t), i = ic(r);
    return !!n.bip32Derivation && n.bip32Derivation.some(i);
  }
  outputHasPubkey(t, r) {
    const n = (0, ut.checkForOutput)(this.data.outputs, t);
    return F2(r, n, t, this.__CACHE);
  }
  outputHasHDKey(t, r) {
    const n = (0, ut.checkForOutput)(this.data.outputs, t), i = ic(r);
    return !!n.bip32Derivation && n.bip32Derivation.some(i);
  }
  validateSignaturesOfAllInputs(t) {
    return (0, ut.checkForInput)(this.data.inputs, 0), Qn(this.data.inputs.length).map(
      (n) => this.validateSignaturesOfInput(n, t)
    ).reduce((n, i) => i === !0 && n, !0);
  }
  validateSignaturesOfInput(t, r, n) {
    const i = this.data.inputs[t];
    return (0, xe.isTaprootInput)(i) ? this.validateSignaturesOfTaprootInput(
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
    const o = n ? s.filter((w) => w.pubkey.equals(n)) : s;
    if (o.length < 1) throw new Error("No signatures for this pubkey");
    const a = [];
    let f, m, p;
    for (const w of o) {
      const T = lr.signature.decode(w.signature), { hash: E, script: R } = p !== T.hashType ? il(
        t,
        Object.assign({}, i, { sighashType: T.hashType }),
        this.__CACHE,
        !0
      ) : { hash: f, script: m };
      p = T.hashType, f = E, m = R, tl(w.pubkey, R, "verify"), a.push(r(w.pubkey, E, T.signature));
    }
    return a.every((w) => w === !0);
  }
  validateSignaturesOfTaprootInput(t, r, n) {
    const i = this.data.inputs[t], s = (i || {}).tapKeySig, o = (i || {}).tapScriptSig;
    if (!i && !s && !(o && !o.length))
      throw new Error("No signatures to validate");
    if (typeof r != "function")
      throw new Error("Need validator function to validate signatures");
    n = n && (0, xe.toXOnly)(n);
    const a = n ? ks(
      t,
      i,
      this.data.inputs,
      n,
      this.__CACHE
    ) : k2(
      t,
      i,
      this.data.inputs,
      this.__CACHE
    );
    if (!a.length) throw new Error("No signatures for this pubkey");
    const f = a.find((p) => !p.leafHash);
    let m = 0;
    if (s && f) {
      if (!r(
        f.pubkey,
        f.hash,
        uc(s)
      )) return !1;
      m++;
    }
    if (o)
      for (const p of o) {
        const w = a.find((T) => p.pubkey.equals(T.pubkey));
        if (w) {
          if (!r(
            p.pubkey,
            w.hash,
            uc(p.signature)
          )) return !1;
          m++;
        }
      }
    return m > 0;
  }
  signAllInputsHD(t, r = [rt.Transaction.SIGHASH_ALL]) {
    if (!t || !t.publicKey || !t.fingerprint)
      throw new Error("Need HDSigner to sign input");
    const n = [];
    for (const i of Qn(this.data.inputs.length))
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
      for (const a of Qn(this.data.inputs.length))
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
    return lc(t, this.data.inputs, r).forEach((s) => this.signInput(t, s, n)), this;
  }
  signInputHDAsync(t, r, n = [rt.Transaction.SIGHASH_ALL]) {
    return new Promise((i, s) => {
      if (!r || !r.publicKey || !r.fingerprint)
        return s(new Error("Need HDSigner to sign input"));
      const a = lc(t, this.data.inputs, r).map(
        (f) => this.signInputAsync(t, f, n)
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
    for (const i of Qn(this.data.inputs.length))
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
    const i = (0, ut.checkForInput)(this.data.inputs, t);
    return (0, xe.isTaprootInput)(i) ? this._signTaprootInput(
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
    const s = (0, ut.checkForInput)(this.data.inputs, t);
    if ((0, xe.isTaprootInput)(s))
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
    const { hash: i, sighashType: s } = cc(
      this.data.inputs,
      t,
      r.publicKey,
      this.__CACHE,
      n
    ), o = [
      {
        pubkey: r.publicKey,
        signature: lr.signature.encode(r.sign(i), s)
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
    ), a = o.filter((m) => !m.leafHash).map(
      (m) => (0, xe.serializeTaprootSignature)(
        n.signSchnorr(m.hash),
        r.sighashType
      )
    )[0], f = o.filter((m) => !!m.leafHash).map((m) => ({
      pubkey: (0, xe.toXOnly)(n.publicKey),
      signature: (0, xe.serializeTaprootSignature)(
        n.signSchnorr(m.hash),
        r.sighashType
      ),
      leafHash: m.leafHash
    }));
    return a && this.data.updateInput(t, { tapKeySig: a }), f.length && this.data.updateInput(t, { tapScriptSig: f }), this;
  }
  signInputAsync(t, r, n) {
    return Promise.resolve().then(() => {
      if (!r || !r.publicKey)
        throw new Error("Need Signer to sign input");
      const i = (0, ut.checkForInput)(this.data.inputs, t);
      return (0, xe.isTaprootInput)(i) ? this._signTaprootInputAsync(
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
      const s = (0, ut.checkForInput)(this.data.inputs, t);
      if ((0, xe.isTaprootInput)(s))
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
    const { hash: i, sighashType: s } = cc(
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
          signature: lr.signature.encode(o, s)
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
    ), a = [], f = o.filter((p) => !p.leafHash)[0];
    if (f) {
      const p = Promise.resolve(
        n.signSchnorr(f.hash)
      ).then((w) => ({
        tapKeySig: (0, xe.serializeTaprootSignature)(
          w,
          r.sighashType
        )
      }));
      a.push(p);
    }
    const m = o.filter((p) => !!p.leafHash);
    if (m.length) {
      const p = m.map((w) => Promise.resolve(n.signSchnorr(w.hash)).then(
        (T) => ({ tapScriptSig: [
          {
            pubkey: (0, xe.toXOnly)(n.publicKey),
            signature: (0, xe.serializeTaprootSignature)(
              T,
              r.sighashType
            ),
            leafHash: w.leafHash
          }
        ] })
      ));
      a.push(...p);
    }
    return Promise.all(a).then((p) => {
      p.forEach((w) => this.data.updateInput(t, w));
    });
  }
  checkTaprootHashesForSig(t, r, n, i, s) {
    if (typeof n.signSchnorr != "function")
      throw new Error(
        `Need Schnorr Signer to sign taproot input #${t}.`
      );
    const o = ks(
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
    return ls(this.__CACHE), this.data.toBuffer();
  }
  toHex() {
    return ls(this.__CACHE), this.data.toHex();
  }
  toBase64() {
    return ls(this.__CACHE), this.data.toBase64();
  }
  updateGlobal(t) {
    return this.data.updateGlobal(t), this;
  }
  updateInput(t, r) {
    return r.witnessScript && Zi(r.witnessScript), (0, xe.checkTaprootInputFields)(
      this.data.inputs[t],
      r,
      "updateInput"
    ), this.data.updateInput(t, r), r.nonWitnessUtxo && xs(
      this.__CACHE,
      this.data.inputs[t],
      t
    ), this;
  }
  updateOutput(t, r) {
    const n = this.data.outputs[t];
    return (0, xe.checkTaprootOutputFields)(
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
Eo.Psbt = Ji;
const P2 = (e) => new Zu(e);
class Zu {
  constructor(t = M.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
    this.tx = rt.Transaction.fromBuffer(t), T2(this.tx), Object.defineProperty(this, "tx", {
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
    const r = typeof t.hash == "string" ? (0, zi.reverseBuffer)(M.from(t.hash, "hex")) : t.hash;
    this.tx.addInput(r, t.index, t.sequence);
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
function b2(e, t, r) {
  switch (r) {
    case "pubkey":
    case "pubkeyhash":
    case "witnesspubkeyhash":
      return nc(1, e.partialSig);
    case "multisig":
      const n = kt.p2ms({ output: t });
      return nc(n.m, e.partialSig, n.pubkeys);
    default:
      return !1;
  }
}
function ls(e) {
  if (e.__UNSAFE_SIGN_NONSEGWIT !== !1)
    throw new Error("Not BIP174 compliant, can not export");
}
function nc(e, t, r) {
  if (!t) return !1;
  let n;
  if (r ? n = r.map((i) => {
    const s = H2(i);
    return t.find((o) => o.pubkey.equals(s));
  }).filter((i) => !!i) : n = t, n.length > e) throw new Error("Too many signatures");
  return n.length === e;
}
function el(e) {
  return !!e.finalScriptSig || !!e.finalScriptWitness;
}
function ic(e) {
  return (t) => !(!t.masterFingerprint.equals(e.fingerprint) || !e.derivePath(t.path).publicKey.equals(t.pubkey));
}
function Fi(e) {
  if (typeof e != "number" || e !== Math.floor(e) || e > 4294967295 || e < 0)
    throw new Error("Invalid 32 bit integer");
}
function S2(e, t, r) {
  const n = t.__FEE_RATE || e.getFeeRate(), i = t.__EXTRACTED_TX.virtualSize(), s = n * i;
  if (n >= r.maximumFeeRate)
    throw new Error(
      `Warning: You are paying around ${(s / 1e8).toFixed(8)} in fees, which is ${n} satoshi per byte for a transaction with a VSize of ${i} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`
    );
}
function Yn(e, t) {
  e.forEach((r) => {
    if ((0, xe.isTaprootInput)(r) ? (0, xe.checkTaprootInputForSigs)(r, t) : (0, He.checkInputForSig)(r, t))
      throw new Error("Can not modify transaction, signatures exist.");
  });
}
function v2(e) {
  if (!e.sighashType || !e.partialSig) return;
  const { partialSig: t, sighashType: r } = e;
  t.forEach((n) => {
    const { hashType: i } = lr.signature.decode(n.signature);
    if (r !== i)
      throw new Error("Signature sighash does not match input sighash type");
  });
}
function tl(e, t, r) {
  if (!(0, He.pubkeyInScript)(e, t))
    throw new Error(
      `Can not ${r} for this input with the key ${e.toString("hex")}`
    );
}
function T2(e) {
  if (!e.ins.every(
    (r) => r.script && r.script.length === 0 && r.witness && r.witness.length === 0
  ))
    throw new Error("Format Error: Transaction ScriptSigs are not empty");
}
function _2(e, t) {
  e.ins.forEach((r) => {
    rl(t, r);
  });
}
function rl(e, t) {
  const r = (0, zi.reverseBuffer)(M.from(t.hash)).toString("hex") + ":" + t.index;
  if (e.__TX_IN_CACHE[r]) throw new Error("Duplicate input detected.");
  e.__TX_IN_CACHE[r] = 1;
}
function nl(e, t) {
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
const oc = nl(kt.p2sh, "Redeem script"), sc = nl(
  kt.p2wsh,
  "Witness script"
);
function ac(e, t, r, n) {
  if (!r.every(el))
    throw new Error(`PSBT must be finalized to calculate ${t}`);
  if (e === "__FEE_RATE" && n.__FEE_RATE) return n.__FEE_RATE;
  if (e === "__FEE" && n.__FEE) return n.__FEE;
  let i, s = !0;
  if (n.__EXTRACTED_TX ? (i = n.__EXTRACTED_TX, s = !1) : i = n.__TX.clone(), cl(r, i, n, s), e === "__FEE_RATE") return n.__FEE_RATE;
  if (e === "__FEE") return n.__FEE;
}
function I2(e, t, r, n, i, s) {
  const o = fl(r);
  if (!b2(t, r, o))
    throw new Error(`Can not finalize input #${e}`);
  return O2(
    r,
    o,
    t.partialSig,
    n,
    i,
    s
  );
}
function O2(e, t, r, n, i, s) {
  let o, a;
  const f = x2(e, t, r), m = s ? kt.p2wsh({ redeem: f }) : null, p = i ? kt.p2sh({ redeem: m || f }) : null;
  return n ? (m ? a = (0, He.witnessStackToScriptWitness)(
    m.witness
  ) : a = (0, He.witnessStackToScriptWitness)(
    f.witness
  ), p && (o = p.input)) : p ? o = p.input : o = f.input, {
    finalScriptSig: o,
    finalScriptWitness: a
  };
}
function cc(e, t, r, n, i) {
  const s = (0, ut.checkForInput)(e, t), { hash: o, sighashType: a, script: f } = il(
    t,
    s,
    n,
    !1,
    i
  );
  return tl(r, f, "sign"), {
    hash: o,
    sighashType: a
  };
}
function il(e, t, r, n, i) {
  const s = r.__TX, o = t.sighashType || rt.Transaction.SIGHASH_ALL;
  sl(o, i);
  let a, f;
  if (t.nonWitnessUtxo) {
    const w = vo(
      r,
      t,
      e
    ), T = s.ins[e].hash, E = w.getHash();
    if (!T.equals(E))
      throw new Error(
        `Non-witness UTXO hash for input #${e} doesn't match the hash specified in the prevout`
      );
    const R = s.ins[e].index;
    f = w.outs[R];
  } else if (t.witnessUtxo)
    f = t.witnessUtxo;
  else
    throw new Error("Need a Utxo input item for signing");
  const { meaningfulScript: m, type: p } = To(
    f.script,
    e,
    "input",
    t.redeemScript,
    t.witnessScript
  );
  if (["p2sh-p2wsh", "p2wsh"].indexOf(p) >= 0)
    a = s.hashForWitnessV0(
      e,
      m,
      f.value,
      o
    );
  else if ((0, He.isP2WPKH)(m)) {
    const w = kt.p2pkh({
      hash: m.slice(2)
    }).output;
    a = s.hashForWitnessV0(
      e,
      w,
      f.value,
      o
    );
  } else {
    if (t.nonWitnessUtxo === void 0 && r.__UNSAFE_SIGN_NONSEGWIT === !1)
      throw new Error(
        `Input #${e} has witnessUtxo but non-segwit script: ${m.toString("hex")}`
      );
    !n && r.__UNSAFE_SIGN_NONSEGWIT !== !1 && console.warn(
      `Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as Psbt's predecessor (TransactionBuilder - now removed) when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.
*********************
PROCEED WITH CAUTION!
*********************`
    ), a = s.hashForSignature(
      e,
      m,
      o
    );
  }
  return {
    script: m,
    sighashType: o,
    hash: a
  };
}
function k2(e, t, r, n) {
  const i = [];
  if (t.tapInternalKey) {
    const o = ol(e, t, n);
    o && i.push(o);
  }
  if (t.tapScriptSig) {
    const o = t.tapScriptSig.map((a) => a.pubkey);
    i.push(...o);
  }
  return i.map(
    (o) => ks(e, t, r, o, n)
  ).flat();
}
function ol(e, t, r) {
  const { script: n } = ua(e, t, r);
  return (0, He.isP2TR)(n) ? n.subarray(2, 34) : null;
}
function uc(e) {
  return e.length === 64 ? e : e.subarray(0, 64);
}
function ks(e, t, r, n, i, s, o) {
  const a = i.__TX, f = t.sighashType || rt.Transaction.SIGHASH_DEFAULT;
  sl(f, o);
  const m = r.map(
    (R, B) => ua(B, R, i)
  ), p = m.map((R) => R.script), w = m.map((R) => R.value), T = [];
  if (t.tapInternalKey && !s) {
    const R = ol(e, t, i) || M.from([]);
    if ((0, xe.toXOnly)(n).equals(R)) {
      const B = a.hashForWitnessV1(
        e,
        p,
        w,
        f
      );
      T.push({ pubkey: n, hash: B });
    }
  }
  const E = (t.tapLeafScript || []).filter((R) => (0, He.pubkeyInScript)(n, R.script)).map((R) => {
    const B = (0, A2.tapleafHash)({
      output: R.script,
      version: R.leafVersion
    });
    return Object.assign({ hash: B }, R);
  }).filter(
    (R) => !s || s.equals(R.hash)
  ).map((R) => {
    const B = a.hashForWitnessV1(
      e,
      p,
      w,
      f,
      R.hash
    );
    return {
      pubkey: n,
      hash: B,
      leafHash: R.hash
    };
  });
  return T.concat(E);
}
function sl(e, t) {
  if (t && t.indexOf(e) < 0) {
    const r = N2(e);
    throw new Error(
      `Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: ${r}`
    );
  }
}
function x2(e, t, r) {
  let n;
  switch (t) {
    case "multisig":
      const i = C2(e, r);
      n = kt.p2ms({
        output: e,
        signatures: i
      });
      break;
    case "pubkey":
      n = kt.p2pk({
        output: e,
        signature: r[0].signature
      });
      break;
    case "pubkeyhash":
      n = kt.p2pkh({
        output: e,
        pubkey: r[0].pubkey,
        signature: r[0].signature
      });
      break;
    case "witnesspubkeyhash":
      n = kt.p2wpkh({
        output: e,
        pubkey: r[0].pubkey,
        signature: r[0].signature
      });
      break;
  }
  return n;
}
function B2(e, t, r) {
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
    const s = vo(
      r,
      t,
      e
    ), o = n.ins[e].index;
    i.script = s.outs[o].script;
  } else t.witnessUtxo && (i.script = t.witnessUtxo.script);
  return (t.witnessScript || (0, He.isP2WPKH)(i.script)) && (i.isSegwit = !0), i;
}
function lc(e, t, r) {
  const n = (0, ut.checkForInput)(t, e);
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
function C2(e, t) {
  return kt.p2ms({ output: e }).pubkeys.map((n) => (t.filter((i) => i.pubkey.equals(n))[0] || {}).signature).filter((n) => !!n);
}
function al(e) {
  let t = 0;
  function r(o) {
    return t += o, e.slice(t - o, t);
  }
  function n() {
    const o = tc.decode(e, t);
    return t += tc.decode.bytes, o;
  }
  function i() {
    return r(n());
  }
  function s() {
    const o = n(), a = [];
    for (let f = 0; f < o; f++) a.push(i());
    return a;
  }
  return s();
}
function N2(e) {
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
function xs(e, t, r) {
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
        const f = a.toBuffer();
        return i.__NON_WITNESS_UTXO_BUF_CACHE[s] = f, f;
      }
    },
    set(o) {
      i.__NON_WITNESS_UTXO_BUF_CACHE[s] = o;
    }
  });
}
function cl(e, t, r, n) {
  let i = 0;
  e.forEach((f, m) => {
    if (n && f.finalScriptSig && (t.ins[m].script = f.finalScriptSig), n && f.finalScriptWitness && (t.ins[m].witness = al(
      f.finalScriptWitness
    )), f.witnessUtxo)
      i += f.witnessUtxo.value;
    else if (f.nonWitnessUtxo) {
      const p = vo(r, f, m), w = t.ins[m].index, T = p.outs[w];
      i += T.value;
    }
  });
  const s = t.outs.reduce((f, m) => f + m.value, 0), o = i - s;
  if (o < 0)
    throw new Error("Outputs are spending more than Inputs");
  const a = t.virtualSize();
  r.__FEE = o, r.__EXTRACTED_TX = t, r.__FEE_RATE = Math.floor(o / a);
}
function vo(e, t, r) {
  const n = e.__NON_WITNESS_UTXO_TX_CACHE;
  return n[r] || xs(e, t, r), n[r];
}
function ul(e, t, r) {
  const { script: n } = ua(e, t, r);
  return n;
}
function ua(e, t, r) {
  if (t.witnessUtxo !== void 0)
    return {
      script: t.witnessUtxo.script,
      value: t.witnessUtxo.value
    };
  if (t.nonWitnessUtxo !== void 0) {
    const i = vo(
      r,
      t,
      e
    ).outs[r.__TX.ins[e].index];
    return { script: i.script, value: i.value };
  } else
    throw new Error("Can't find pubkey in input without Utxo data");
}
function R2(e, t, r, n) {
  const i = ul(r, t, n), { meaningfulScript: s } = To(
    i,
    r,
    "input",
    t.redeemScript,
    t.witnessScript
  );
  return (0, He.pubkeyInScript)(e, s);
}
function F2(e, t, r, n) {
  const i = n.__TX.outs[r].script, { meaningfulScript: s } = To(
    i,
    r,
    "output",
    t.redeemScript,
    t.witnessScript
  );
  return (0, He.pubkeyInScript)(e, s);
}
function U2(e) {
  if (!e) return;
  const t = lr.decompile(e);
  if (!t) return;
  const r = t[t.length - 1];
  if (!(!M.isBuffer(r) || ll(r) || M2(r) || !lr.decompile(r)))
    return r;
}
function L2(e) {
  if (!e) return;
  const t = al(e), r = t[t.length - 1];
  if (!(ll(r) || !lr.decompile(r)))
    return r;
}
function H2(e) {
  if (e.length === 65) {
    const t = e[64] & 1, r = e.slice(0, 33);
    return r[0] = 2 | t, r;
  }
  return e.slice();
}
function ll(e) {
  return e.length === 33 && lr.isCanonicalPubKey(e);
}
function M2(e) {
  return lr.isCanonicalScriptSignature(e);
}
function To(e, t, r, n, i) {
  const s = (0, He.isP2SHScript)(e), o = s && n && (0, He.isP2WSHScript)(n), a = (0, He.isP2WSHScript)(e);
  if (s && n === void 0)
    throw new Error("scriptPubkey is P2SH but redeemScript missing");
  if ((a || o) && i === void 0)
    throw new Error(
      "scriptPubkey or redeemScript is P2WSH but witnessScript missing"
    );
  let f;
  return o ? (f = i, oc(t, e, n, r), sc(t, n, i, r), Zi(f)) : a ? (f = i, sc(t, e, i, r), Zi(f)) : s ? (f = n, oc(t, e, n, r)) : f = e, {
    meaningfulScript: f,
    type: o ? "p2sh-p2wsh" : s ? "p2sh" : a ? "p2wsh" : "raw"
  };
}
function Zi(e) {
  if ((0, He.isP2WPKH)(e) || (0, He.isP2SHScript)(e))
    throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
}
function fl(e) {
  return (0, He.isP2WPKH)(e) ? "witnesspubkeyhash" : (0, He.isP2PKH)(e) ? "pubkeyhash" : (0, He.isP2MS)(e) ? "multisig" : (0, He.isP2PK)(e) ? "pubkey" : "nonstandard";
}
function Qn(e) {
  return [...Array(e).keys()];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.initEccLib = e.Transaction = e.opcodes = e.Psbt = e.Block = e.script = e.payments = e.networks = e.crypto = e.address = void 0;
  const t = Ys();
  e.address = t;
  const r = qt;
  e.crypto = r;
  const n = Xe;
  e.networks = n;
  const i = pi();
  e.payments = i;
  const s = ht();
  e.script = s;
  var o = yo;
  Object.defineProperty(e, "Block", {
    enumerable: !0,
    get: function() {
      return o.Block;
    }
  });
  var a = Eo;
  Object.defineProperty(e, "Psbt", {
    enumerable: !0,
    get: function() {
      return a.Psbt;
    }
  });
  var f = Fr;
  Object.defineProperty(e, "opcodes", {
    enumerable: !0,
    get: function() {
      return f.OPS;
    }
  });
  var m = Hr;
  Object.defineProperty(e, "Transaction", {
    enumerable: !0,
    get: function() {
      return m.Transaction;
    }
  });
  var p = Ur;
  Object.defineProperty(e, "initEccLib", {
    enumerable: !0,
    get: function() {
      return p.initEccLib;
    }
  });
})(Zc);
function ig() {
  const { network: e, publicKey: t, format: r, wallet: n } = Xt(), [i, s] = Ae(null), [o, a] = Ae(!1);
  return { sign: nt(
    async (m, p, w) => {
      a(!0);
      try {
        if (s(null), !r || !t || !n)
          throw new Error("No wallet is connected");
        const T = Zc.Psbt.fromBase64(p), E = await Hs({
          address: m,
          wallet: n,
          network: e,
          psbt: T,
          options: w
        });
        return a(!1), E;
      } catch (T) {
        throw s(T.message), a(!1), T;
      }
    },
    [r, e, t, n]
  ), error: i, loading: o };
}
function D2(e) {
  if (e === "segwit")
    return la.P2WPKH;
  if (e === "taproot")
    return la.P2TR;
  throw new Error("Leather payment address format is not supported");
}
async function $2({
  message: e,
  wallet: t,
  address: r,
  network: n,
  format: i
}) {
  if (t === J.MAGICEDEN) {
    const { base64: s } = await Il(e, r, n);
    return s;
  }
  if (t === J.UNISAT) {
    const { base64: s } = await Nl(e, "bip322-simple");
    return s;
  }
  if (t === J.XVERSE) {
    const { base64: s } = await Ul(e, r, n);
    return s;
  }
  if (t === J.LEATHER) {
    const s = D2(i), { base64: o } = await vl(e, {
      paymentType: s,
      network: n
    });
    return o;
  }
  if (t === J.OKX) {
    const { base64: s } = await xl(e, "bip322-simple", n);
    return s;
  }
  throw new Error("Invalid wallet selected");
}
function og() {
  const {
    network: e,
    wallet: t,
    publicKey: r,
    format: n,
    address: i
  } = Xt(), [s, o] = Ae(null), [a, f] = Ae(!1);
  return { signMsg: nt(
    async (p, w) => {
      f(!0);
      try {
        if (o(null), !n || !r || !t)
          throw new Error("No wallet is connected");
        if (i.ordinals !== p && i.payments !== p)
          throw new Error("Address supplied is not connected address");
        const T = await $2({
          address: p,
          wallet: t,
          message: w,
          network: e,
          format: i.ordinals === p ? n.ordinals : n.payments
        });
        return f(!1), T;
      } catch (T) {
        throw o(T.message), f(!1), T;
      }
    },
    [n, e, r, t, i]
  ), error: s, isLoading: a };
}
export {
  Vt as Chain,
  ni as Network,
  J2 as OrdConnectKit,
  Q2 as OrdConnectProvider,
  xh as SelectWalletModal,
  J as Wallet,
  Z2 as useBalance,
  Xt as useOrdConnect,
  eg as useSend,
  tg as useSendV2,
  ig as useSign,
  og as useSignMessage
};
