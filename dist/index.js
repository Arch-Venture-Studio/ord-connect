(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";.ord-connect-wallet-button{color:#000;background-color:#fff;font-weight:700;font-size:14px;line-height:20px;border-radius:40px;padding:10px 16px;border:0px;cursor:pointer}.ord-connect-wallet-button:disabled{background-color:#888;cursor:not-allowed}.ord-connect-wallet-button span:before{content:"Connect"}@media screen and (min-width: 768px){.ord-connect-wallet-button{padding:10px 24px}.ord-connect-wallet-button span:before{content:"Connect wallet"}}.ord-connect-wallet-button:enabled:hover{background-color:#f2f2f2}.ord-connect-wallet-button:enabled:active{opacity:.7}.ord-wallet-connected-container{position:relative;display:inline-block}.ord-wallet-connected-button{border-radius:52px;border:1px solid #8c8c8c;background-color:transparent;padding:8px 12px 8px 8px;display:flex;align-items:center;cursor:pointer}.ord-wallet-connected-button .address-container{display:none}@media screen and (min-width: 768px){.ord-wallet-connected-button .address-container{display:block;margin-left:8px}}.ord-wallet-connected-button .address{color:#fff;font-size:14px;font-weight:700;line-height:20px;margin:0}.ord-wallet-connected-button .network-container{display:flex;align-items:center}.ord-wallet-connected-button .status-indicator{width:8px;height:8px;background:#00ad1d;border-radius:999px;margin-right:8px}.ord-wallet-connected-button .network{color:#ffffff80;margin:0;font-size:12px;font-weight:600;line-height:16px}.ord-wallet-connected-button .wallet-profile-icon{width:28px;height:28px;border-radius:999px;background-color:pink;margin-right:8px}.ord-wallet-connected-button .dropdown-button{transition:transform .3s ease;margin-left:16px}.ord-wallet-connected-button .expand-dropdown-button{width:20px;transform:rotate(0)}.ord-wallet-connected-button .close-dropdown-button{transform:rotate(-180deg)}.ord-wallet-connection-dropdown{background:#121212;border-radius:15px;border:.5px solid rgba(255,255,255,.5);width:256px;position:absolute;top:54px;right:0}.ord-wallet-connection-dropdown .dropdown-button{display:flex;align-items:center;background:transparent;border:0px;cursor:pointer;width:100%;justify-content:space-between}.ord-wallet-connection-dropdown .dropdown-button:hover{background:#ffffff1a}.ord-wallet-connection-dropdown .dropdown-button:hover:first-child{border-top-left-radius:15px;border-top-right-radius:15px}.ord-wallet-connection-dropdown .dropdown-button:hover:last-child{border-bottom-left-radius:15px;border-bottom-right-radius:15px}.ord-wallet-connection-dropdown .dropdown-button:active{background:#ffffff1a;opacity:.7}.ord-wallet-connection-dropdown .dropdown-button:first-child{padding:26px 16px 18px}.ord-wallet-connection-dropdown .dropdown-button:not(:first-child):not(:last-child){padding:9px 16px}.ord-wallet-connection-dropdown .dropdown-button:last-child{padding:18px 16px 26px}.ord-wallet-connection-dropdown .label{color:#fff;font-size:14px;font-weight:600;flex:1 1 0%;text-align:left}.ord-wallet-connection-dropdown .value{color:#a6a6a6}.ord-wallet-connection-dropdown .change-wallet-label{color:#ffffffb3;font-size:14px;font-weight:700;flex:1 1 0%;text-align:right}.ord-wallet-connection-dropdown .profile-item-container{width:100%;display:flex;flex-direction:column}.ord-wallet-connection-dropdown .profile-item-inner-container{display:flex;justify-content:space-between}.ord-wallet-connection-dropdown .offers{font-size:10px;font-weight:700;line-height:12px;letter-spacing:.08em;color:#fff;padding:4px 12px;border-radius:16px;background:#ffffff1a}.ord-wallet-connection-dropdown .horizontal-separator{margin:6px 16px;border:0px;border-top:.5px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal{position:relative;z-index:10}.ord-connect-wallet-modal .backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000080;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.ord-connect-wallet-modal .outer-container{position:fixed;top:0;left:0;overflow-y:auto;width:100%;height:100%}.ord-connect-wallet-modal .inner-container{display:flex;align-items:center;justify-content:center;text-align:center;height:100%}.ord-connect-wallet-modal .panel{width:100%;background-color:#121212;overflow:hidden;text-align:left;height:100%}.ord-connect-wallet-modal .panel-title-container{display:flex;justify-content:space-between;padding:32px 24px 0;align-items:center}.ord-connect-wallet-modal .panel-title{color:#fff;font-size:24px;font-style:normal;font-weight:700;line-height:32px;margin:0}.ord-connect-wallet-modal .unsupported-browser-message{color:#fff}.ord-connect-wallet-modal .close-button{display:inline-flex;background:transparent;border:0px;cursor:pointer}.ord-connect-wallet-modal .panel-content-container{margin:32px 24px 0}.ord-connect-wallet-modal .panel-content-inner-container{border-radius:20px;border:1px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal .wallet-option-button{display:flex;align-items:center;background:transparent;border:0px;color:#fff;font-size:16px;font-weight:600;line-height:20px;width:100%;cursor:pointer}.ord-connect-wallet-modal .wallet-option-button:disabled .chevron-btn{opacity:.3}.waiting-cursor{cursor:wait!important}.wallet-identifier-container{position:relative;display:inline-block}.wallet-identifier-container img{position:absolute;bottom:4px;right:0;width:12px;border-radius:50%;background-color:#000;object-fit:cover}.ord-connect-wallet-modal .option-wrapper{display:flex;align-items:center;justify-content:space-between;padding:16px 4px;width:100%}.ord-connect-wallet-modal .wallet-option-button{padding:8px 16px}.ord-connect-wallet-modal .wallet-option-button:hover{background:#ffffff1a}.ord-connect-wallet-modal .wallet-option-button:active{background:#ffffff1a;opacity:.7}.ord-connect-wallet-modal .wallet-option-button:first-child{padding:16px 16px 8px;border:0px;margin-bottom:0;border-radius:20px 20px 0 0}.ord-connect-wallet-modal .wallet-option-button:last-child{padding:8px 16px 16px;border:0px;margin-bottom:0;border-radius:0 0 20px 20px}.ord-connect-wallet-modal .wallet-option-button:only-child{padding:8px 16px;border:0px;margin-bottom:0;border-radius:20px}.ord-connect-wallet-modal .wallet-icon{width:32px;height:32px;border-radius:9999px}.ord-connect-wallet-modal .wallet-option{flex-grow:1;margin-left:12px;text-align:left}.ord-connect-wallet-modal .wallet-option-connected-address{display:flex;padding:4px 8px;align-items:center;margin-left:4px;margin-right:8px;text-align:left;background-color:#00000080;border-radius:20px;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}.ord-connect-wallet-modal .wallet-option-connected-address .label{margin-left:4px;font-size:12px;font-weight:400;color:#ffffffb3}.ord-connect-wallet-modal .wallet-option-label{font-size:16px;font-weight:600;line-height:20px;margin:0}.ord-connect-wallet-modal .wallet-option-subtitle{font-size:12px;font-weight:400;line-height:16px;color:#8c8c8c;margin:0}.ord-connect-wallet-modal .horizontal-separator{margin:2px 16px;border:0px;border-top:.5px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal .error-message{margin:16px 0 0;color:#e54545;font-size:14px;line-height:20px}.ord-connect-wallet-modal .preferred-label{padding:4px 12px;color:#000000b2;background-color:#ffbf18;font-size:12px;line-height:16px;font-weight:400;border-radius:20px;margin-left:4px;margin-right:8px}@media screen and (min-width: 768px){.ord-connect-wallet-modal .outer-container{top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:auto;border-radius:20px}.ord-connect-wallet-modal .panel{border:1px solid rgba(51,51,51,.5);border-radius:20px}.ord-connect-wallet-modal .panel-title-container{padding:24px 32px 0;border-bottom:0px}.ord-connect-wallet-modal .unsupported-browser-message{font-size:16px;padding-left:24px}.ord-connect-wallet-modal .panel-title{font-size:20px;font-style:normal;font-weight:600;line-height:28px;letter-spacing:.2px}.ord-connect-wallet-modal .panel-content-container{margin:48px 32px 32px}.ord-connect-wallet-modal .wallet-option{margin-left:16px}}@media screen and (min-width: 1080px){.ord-connect-wallet-modal .panel-content-container{margin:48px 32px 32px}.ord-connect-wallet-modal .option-wrapper{padding:16px}.ord-connect-wallet-modal .wallet-option-button{font-size:18px;font-weight:600;line-height:24px}.ord-connect-wallet-modal .wallet-option-button:first-child{padding:16px 16px 8px;border:0px;margin-bottom:0;border-radius:20px 20px 0 0}.ord-connect-wallet-modal .wallet-icon{width:40px;height:40px;border-radius:9999px}.ord-connect-wallet-modal .wallet-option-label{font-size:18px;font-weight:600;line-height:24px}.ord-connect-wallet-modal .wallet-option-connected-address{margin-left:16px;margin-right:16px}.ord-connect-wallet-modal .wallet-option-connected-address .label{font-size:16px}}.ord-connect-font *{font-family:Space Grotesk,sans-serif}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.opacity-0{opacity:0}.opacity-100{opacity:1}.duration-300{transition-duration:.3s}.duration-200{transition-duration:.2s}.scale-95{transform:scale(.95)}.scale-100{transform:scale(1)}')),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import * as he from "react";
import de, { useState as ve, useEffect as Me, useCallback as ke, createContext as ut, useMemo as Ce, useContext as Ve, useRef as be, useLayoutEffect as qo, forwardRef as il, Fragment as ot, isValidElement as ol, cloneElement as sl, createElement as ul, useId as Gt, useReducer as Vo, useSyncExternalStore as al, createRef as cl } from "react";
import * as yi from "react-dom";
import { createPortal as ll, flushSync as Ln } from "react-dom";
import { BrowserWalletNotInstalledError as fl, getAddressesFromPublicKey as hl, ADDRESS_FORMAT_TO_TYPE as dl, JsonRpcDatasource as Go, PSBTBuilder as Sa } from "@ordzaar/ordit-sdk";
import { getAddresses as pl, signPsbt as gl, signMessage as ml, LeatherAddressType as As } from "@ordzaar/ordit-sdk/leather";
import { getAddresses as wl, signPsbt as yl, signMessage as El } from "@ordzaar/ordit-sdk/magiceden";
import { getAddresses as Al, signPsbt as bl, signMessage as vl } from "@ordzaar/ordit-sdk/okx";
import { getAddresses as Pl, signPsbt as Sl, signMessage as Tl } from "@ordzaar/ordit-sdk/oyl";
import { getAddresses as Il, signPsbt as xl, signMessage as _l } from "@ordzaar/ordit-sdk/phantom";
import { getAddresses as Ol, signPsbt as Cl, signMessage as kl } from "@ordzaar/ordit-sdk/unisat";
import { getAddresses as Bl, signPsbt as Rl, signMessage as Fl } from "@ordzaar/ordit-sdk/xverse";
function Nl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ul(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ta = { exports: {} }, Qe = Ta.exports = {}, Dt, $t;
function _o() {
  throw new Error("setTimeout has not been defined");
}
function Oo() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Dt = setTimeout : Dt = _o;
  } catch {
    Dt = _o;
  }
  try {
    typeof clearTimeout == "function" ? $t = clearTimeout : $t = Oo;
  } catch {
    $t = Oo;
  }
})();
function Ia(e) {
  if (Dt === setTimeout)
    return setTimeout(e, 0);
  if ((Dt === _o || !Dt) && setTimeout)
    return Dt = setTimeout, setTimeout(e, 0);
  try {
    return Dt(e, 0);
  } catch {
    try {
      return Dt.call(null, e, 0);
    } catch {
      return Dt.call(this, e, 0);
    }
  }
}
function Ll(e) {
  if ($t === clearTimeout)
    return clearTimeout(e);
  if (($t === Oo || !$t) && clearTimeout)
    return $t = clearTimeout, clearTimeout(e);
  try {
    return $t(e);
  } catch {
    try {
      return $t.call(null, e);
    } catch {
      return $t.call(this, e);
    }
  }
}
var or = [], an = !1, jr, gi = -1;
function Hl() {
  !an || !jr || (an = !1, jr.length ? or = jr.concat(or) : gi = -1, or.length && xa());
}
function xa() {
  if (!an) {
    var e = Ia(Hl);
    an = !0;
    for (var t = or.length; t; ) {
      for (jr = or, or = []; ++gi < t; )
        jr && jr[gi].run();
      gi = -1, t = or.length;
    }
    jr = null, an = !1, Ll(e);
  }
}
Qe.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      t[n - 1] = arguments[n];
  or.push(new _a(e, t)), or.length === 1 && !an && Ia(xa);
};
function _a(e, t) {
  this.fun = e, this.array = t;
}
_a.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Qe.title = "browser";
Qe.browser = !0;
Qe.env = {};
Qe.argv = [];
Qe.version = "";
Qe.versions = {};
function ur() {
}
Qe.on = ur;
Qe.addListener = ur;
Qe.once = ur;
Qe.off = ur;
Qe.removeListener = ur;
Qe.removeAllListeners = ur;
Qe.emit = ur;
Qe.prependListener = ur;
Qe.prependOnceListener = ur;
Qe.listeners = function(e) {
  return [];
};
Qe.binding = function(e) {
  throw new Error("process.binding is not supported");
};
Qe.cwd = function() {
  return "/";
};
Qe.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
Qe.umask = function() {
  return 0;
};
var Ml = Ta.exports;
const sr = /* @__PURE__ */ Ul(Ml);
var Zn = { exports: {} }, En = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bs;
function Dl() {
  if (bs) return En;
  bs = 1;
  var e = de, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(o, a, d) {
    var c, w = {}, y = null, f = null;
    d !== void 0 && (y = "" + d), a.key !== void 0 && (y = "" + a.key), a.ref !== void 0 && (f = a.ref);
    for (c in a) r.call(a, c) && !s.hasOwnProperty(c) && (w[c] = a[c]);
    if (o && o.defaultProps) for (c in a = o.defaultProps, a) w[c] === void 0 && (w[c] = a[c]);
    return { $$typeof: t, type: o, key: y, ref: f, props: w, _owner: i.current };
  }
  return En.Fragment = n, En.jsx = u, En.jsxs = u, En;
}
var An = {}, vs;
function $l() {
  return vs || (vs = 1, sr.env.NODE_ENV !== "production" && function() {
    var e = de, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), o = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), E = Symbol.iterator, b = "@@iterator";
    function I(q) {
      if (q === null || typeof q != "object")
        return null;
      var te = E && q[E] || q[b];
      return typeof te == "function" ? te : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(q) {
      {
        for (var te = arguments.length, oe = new Array(te > 1 ? te - 1 : 0), me = 1; me < te; me++)
          oe[me - 1] = arguments[me];
        T("error", q, oe);
      }
    }
    function T(q, te, oe) {
      {
        var me = x.ReactDebugCurrentFrame, Oe = me.getStackAddendum();
        Oe !== "" && (te += "%s", oe = oe.concat([Oe]));
        var Re = oe.map(function(Ie) {
          return String(Ie);
        });
        Re.unshift("Warning: " + te), Function.prototype.apply.call(console[q], console, Re);
      }
    }
    var C = !1, j = !1, U = !1, K = !1, S = !1, A;
    A = Symbol.for("react.module.reference");
    function _(q) {
      return !!(typeof q == "string" || typeof q == "function" || q === r || q === s || S || q === i || q === d || q === c || K || q === f || C || j || U || typeof q == "object" && q !== null && (q.$$typeof === y || q.$$typeof === w || q.$$typeof === u || q.$$typeof === o || q.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      q.$$typeof === A || q.getModuleId !== void 0));
    }
    function N(q, te, oe) {
      var me = q.displayName;
      if (me)
        return me;
      var Oe = te.displayName || te.name || "";
      return Oe !== "" ? oe + "(" + Oe + ")" : oe;
    }
    function P(q) {
      return q.displayName || "Context";
    }
    function F(q) {
      if (q == null)
        return null;
      if (typeof q.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof q == "function")
        return q.displayName || q.name || null;
      if (typeof q == "string")
        return q;
      switch (q) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof q == "object")
        switch (q.$$typeof) {
          case o:
            var te = q;
            return P(te) + ".Consumer";
          case u:
            var oe = q;
            return P(oe._context) + ".Provider";
          case a:
            return N(q, q.render, "ForwardRef");
          case w:
            var me = q.displayName || null;
            return me !== null ? me : F(q.type) || "Memo";
          case y: {
            var Oe = q, Re = Oe._payload, Ie = Oe._init;
            try {
              return F(Ie(Re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, H = 0, $, G, k, M, Y, Z, ne;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function pe() {
      {
        if (H === 0) {
          $ = console.log, G = console.info, k = console.warn, M = console.error, Y = console.group, Z = console.groupCollapsed, ne = console.groupEnd;
          var q = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: q,
            log: q,
            warn: q,
            error: q,
            group: q,
            groupCollapsed: q,
            groupEnd: q
          });
        }
        H++;
      }
    }
    function ae() {
      {
        if (H--, H === 0) {
          var q = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, q, {
              value: $
            }),
            info: W({}, q, {
              value: G
            }),
            warn: W({}, q, {
              value: k
            }),
            error: W({}, q, {
              value: M
            }),
            group: W({}, q, {
              value: Y
            }),
            groupCollapsed: W({}, q, {
              value: Z
            }),
            groupEnd: W({}, q, {
              value: ne
            })
          });
        }
        H < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = x.ReactCurrentDispatcher, xe;
    function $e(q, te, oe) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (Oe) {
            var me = Oe.stack.trim().match(/\n( *(at )?)/);
            xe = me && me[1] || "";
          }
        return `
` + xe + q;
      }
    }
    var Je = !1, ct;
    {
      var je = typeof WeakMap == "function" ? WeakMap : Map;
      ct = new je();
    }
    function rt(q, te) {
      if (!q || Je)
        return "";
      {
        var oe = ct.get(q);
        if (oe !== void 0)
          return oe;
      }
      var me;
      Je = !0;
      var Oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Re;
      Re = ge.current, ge.current = null, pe();
      try {
        if (te) {
          var Ie = function() {
            throw Error();
          };
          if (Object.defineProperty(Ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ie, []);
            } catch (bt) {
              me = bt;
            }
            Reflect.construct(q, [], Ie);
          } else {
            try {
              Ie.call();
            } catch (bt) {
              me = bt;
            }
            q.call(Ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bt) {
            me = bt;
          }
          q();
        }
      } catch (bt) {
        if (bt && me && typeof bt.stack == "string") {
          for (var Te = bt.stack.split(`
`), gt = me.stack.split(`
`), ze = Te.length - 1, Ze = gt.length - 1; ze >= 1 && Ze >= 0 && Te[ze] !== gt[Ze]; )
            Ze--;
          for (; ze >= 1 && Ze >= 0; ze--, Ze--)
            if (Te[ze] !== gt[Ze]) {
              if (ze !== 1 || Ze !== 1)
                do
                  if (ze--, Ze--, Ze < 0 || Te[ze] !== gt[Ze]) {
                    var It = `
` + Te[ze].replace(" at new ", " at ");
                    return q.displayName && It.includes("<anonymous>") && (It = It.replace("<anonymous>", q.displayName)), typeof q == "function" && ct.set(q, It), It;
                  }
                while (ze >= 1 && Ze >= 0);
              break;
            }
        }
      } finally {
        Je = !1, ge.current = Re, ae(), Error.prepareStackTrace = Oe;
      }
      var en = q ? q.displayName || q.name : "", Cr = en ? $e(en) : "";
      return typeof q == "function" && ct.set(q, Cr), Cr;
    }
    function Ke(q, te, oe) {
      return rt(q, !1);
    }
    function Ue(q) {
      var te = q.prototype;
      return !!(te && te.isReactComponent);
    }
    function Se(q, te, oe) {
      if (q == null)
        return "";
      if (typeof q == "function")
        return rt(q, Ue(q));
      if (typeof q == "string")
        return $e(q);
      switch (q) {
        case d:
          return $e("Suspense");
        case c:
          return $e("SuspenseList");
      }
      if (typeof q == "object")
        switch (q.$$typeof) {
          case a:
            return Ke(q.render);
          case w:
            return Se(q.type, te, oe);
          case y: {
            var me = q, Oe = me._payload, Re = me._init;
            try {
              return Se(Re(Oe), te, oe);
            } catch {
            }
          }
        }
      return "";
    }
    var tt = Object.prototype.hasOwnProperty, St = {}, cr = x.ReactDebugCurrentFrame;
    function Mt(q) {
      if (q) {
        var te = q._owner, oe = Se(q.type, q._source, te ? te.type : null);
        cr.setExtraStackFrame(oe);
      } else
        cr.setExtraStackFrame(null);
    }
    function Qt(q, te, oe, me, Oe) {
      {
        var Re = Function.call.bind(tt);
        for (var Ie in q)
          if (Re(q, Ie)) {
            var Te = void 0;
            try {
              if (typeof q[Ie] != "function") {
                var gt = Error((me || "React class") + ": " + oe + " type `" + Ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof q[Ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw gt.name = "Invariant Violation", gt;
              }
              Te = q[Ie](te, Ie, me, oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ze) {
              Te = ze;
            }
            Te && !(Te instanceof Error) && (Mt(Oe), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", oe, Ie, typeof Te), Mt(null)), Te instanceof Error && !(Te.message in St) && (St[Te.message] = !0, Mt(Oe), m("Failed %s type: %s", oe, Te.message), Mt(null));
          }
      }
    }
    var Or = Array.isArray;
    function Be(q) {
      return Or(q);
    }
    function Xe(q) {
      {
        var te = typeof Symbol == "function" && Symbol.toStringTag, oe = te && q[Symbol.toStringTag] || q.constructor.name || "Object";
        return oe;
      }
    }
    function At(q) {
      try {
        return Ye(q), !1;
      } catch {
        return !0;
      }
    }
    function Ye(q) {
      return "" + q;
    }
    function Tt(q) {
      if (At(q))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(q)), Ye(q);
    }
    var lt = x.ReactCurrentOwner, J = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, B, p, l;
    l = {};
    function h(q) {
      if (tt.call(q, "ref")) {
        var te = Object.getOwnPropertyDescriptor(q, "ref").get;
        if (te && te.isReactWarning)
          return !1;
      }
      return q.ref !== void 0;
    }
    function O(q) {
      if (tt.call(q, "key")) {
        var te = Object.getOwnPropertyDescriptor(q, "key").get;
        if (te && te.isReactWarning)
          return !1;
      }
      return q.key !== void 0;
    }
    function L(q, te) {
      if (typeof q.ref == "string" && lt.current && te && lt.current.stateNode !== te) {
        var oe = F(lt.current.type);
        l[oe] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(lt.current.type), q.ref), l[oe] = !0);
      }
    }
    function V(q, te) {
      {
        var oe = function() {
          B || (B = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
        };
        oe.isReactWarning = !0, Object.defineProperty(q, "key", {
          get: oe,
          configurable: !0
        });
      }
    }
    function z(q, te) {
      {
        var oe = function() {
          p || (p = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
        };
        oe.isReactWarning = !0, Object.defineProperty(q, "ref", {
          get: oe,
          configurable: !0
        });
      }
    }
    var ie = function(q, te, oe, me, Oe, Re, Ie) {
      var Te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: q,
        key: te,
        ref: oe,
        props: Ie,
        // Record the component responsible for creating this element.
        _owner: Re
      };
      return Te._store = {}, Object.defineProperty(Te._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Te, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(Te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.freeze && (Object.freeze(Te.props), Object.freeze(Te)), Te;
    };
    function ce(q, te, oe, me, Oe) {
      {
        var Re, Ie = {}, Te = null, gt = null;
        oe !== void 0 && (Tt(oe), Te = "" + oe), O(te) && (Tt(te.key), Te = "" + te.key), h(te) && (gt = te.ref, L(te, Oe));
        for (Re in te)
          tt.call(te, Re) && !J.hasOwnProperty(Re) && (Ie[Re] = te[Re]);
        if (q && q.defaultProps) {
          var ze = q.defaultProps;
          for (Re in ze)
            Ie[Re] === void 0 && (Ie[Re] = ze[Re]);
        }
        if (Te || gt) {
          var Ze = typeof q == "function" ? q.displayName || q.name || "Unknown" : q;
          Te && V(Ie, Ze), gt && z(Ie, Ze);
        }
        return ie(q, Te, gt, Oe, me, lt.current, Ie);
      }
    }
    var fe = x.ReactCurrentOwner, ye = x.ReactDebugCurrentFrame;
    function we(q) {
      if (q) {
        var te = q._owner, oe = Se(q.type, q._source, te ? te.type : null);
        ye.setExtraStackFrame(oe);
      } else
        ye.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function qe(q) {
      return typeof q == "object" && q !== null && q.$$typeof === t;
    }
    function Zr() {
      {
        if (fe.current) {
          var q = F(fe.current.type);
          if (q)
            return `

Check the render method of \`` + q + "`.";
        }
        return "";
      }
    }
    function Wi(q) {
      return "";
    }
    var Rt = {};
    function Ki(q) {
      {
        var te = Zr();
        if (!te) {
          var oe = typeof q == "string" ? q : q.displayName || q.name;
          oe && (te = `

Check the top-level render call using <` + oe + ">.");
        }
        return te;
      }
    }
    function R(q, te) {
      {
        if (!q._store || q._store.validated || q.key != null)
          return;
        q._store.validated = !0;
        var oe = Ki(te);
        if (Rt[oe])
          return;
        Rt[oe] = !0;
        var me = "";
        q && q._owner && q._owner !== fe.current && (me = " It was passed a child from " + F(q._owner.type) + "."), we(q), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, me), we(null);
      }
    }
    function g(q, te) {
      {
        if (typeof q != "object")
          return;
        if (Be(q))
          for (var oe = 0; oe < q.length; oe++) {
            var me = q[oe];
            qe(me) && R(me, te);
          }
        else if (qe(q))
          q._store && (q._store.validated = !0);
        else if (q) {
          var Oe = I(q);
          if (typeof Oe == "function" && Oe !== q.entries)
            for (var Re = Oe.call(q), Ie; !(Ie = Re.next()).done; )
              qe(Ie.value) && R(Ie.value, te);
        }
      }
    }
    function v(q) {
      {
        var te = q.type;
        if (te == null || typeof te == "string")
          return;
        var oe;
        if (typeof te == "function")
          oe = te.propTypes;
        else if (typeof te == "object" && (te.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        te.$$typeof === w))
          oe = te.propTypes;
        else
          return;
        if (oe) {
          var me = F(te);
          Qt(oe, q.props, "prop", me, q);
        } else if (te.PropTypes !== void 0 && !_e) {
          _e = !0;
          var Oe = F(te);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Oe || "Unknown");
        }
        typeof te.getDefaultProps == "function" && !te.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function D(q) {
      {
        for (var te = Object.keys(q.props), oe = 0; oe < te.length; oe++) {
          var me = te[oe];
          if (me !== "children" && me !== "key") {
            we(q), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), we(null);
            break;
          }
        }
        q.ref !== null && (we(q), m("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    var X = {};
    function ee(q, te, oe, me, Oe, Re) {
      {
        var Ie = _(q);
        if (!Ie) {
          var Te = "";
          (q === void 0 || typeof q == "object" && q !== null && Object.keys(q).length === 0) && (Te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var gt = Wi();
          gt ? Te += gt : Te += Zr();
          var ze;
          q === null ? ze = "null" : Be(q) ? ze = "array" : q !== void 0 && q.$$typeof === t ? (ze = "<" + (F(q.type) || "Unknown") + " />", Te = " Did you accidentally export a JSX literal instead of a component?") : ze = typeof q, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ze, Te);
        }
        var Ze = ce(q, te, oe, Oe, Re);
        if (Ze == null)
          return Ze;
        if (Ie) {
          var It = te.children;
          if (It !== void 0)
            if (me)
              if (Be(It)) {
                for (var en = 0; en < It.length; en++)
                  g(It[en], q);
                Object.freeze && Object.freeze(It);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              g(It, q);
        }
        if (tt.call(te, "key")) {
          var Cr = F(q), bt = Object.keys(te).filter(function(nl) {
            return nl !== "key";
          }), qi = bt.length > 0 ? "{key: someKey, " + bt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!X[Cr + qi]) {
            var rl = bt.length > 0 ? "{" + bt.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qi, Cr, rl, Cr), X[Cr + qi] = !0;
          }
        }
        return q === r ? D(Ze) : v(Ze), Ze;
      }
    }
    function re(q, te, oe) {
      return ee(q, te, oe, !0);
    }
    function Pe(q, te, oe) {
      return ee(q, te, oe, !1);
    }
    var De = Pe, Le = re;
    An.Fragment = r, An.jsx = De, An.jsxs = Le;
  }()), An;
}
var Ps;
function jl() {
  return Ps || (Ps = 1, sr.env.NODE_ENV === "production" ? Zn.exports = Dl() : Zn.exports = $l()), Zn.exports;
}
var ue = jl();
function Wl() {
  const [e, t] = ve(!1);
  return Me(() => {
    t(!0);
  }, []), e;
}
const Oa = "ord-connect";
function Kl(e) {
  typeof window > "u" && console.warn(
    `Attempted to read local storage key ${e} even though environment is not a browser.`
  );
  const t = `${Oa}_${e}`;
  try {
    const n = window.localStorage.getItem(t);
    return n != null ? JSON.parse(n) : null;
  } catch (n) {
    return console.error(`Error retrieving ${t} from localStorage`, n), null;
  }
}
function Ss(e, t) {
  typeof window > "u" && console.warn(
    `Attempted to set local storage key ${e} even though environment is not a browser.`
  );
  const n = `${Oa}_${e}`;
  try {
    t ? window.localStorage.setItem(n, JSON.stringify(t)) : window.localStorage.removeItem(n);
  } catch (r) {
    console.error(`Error saving ${n} to localStorage`, r);
  }
}
function ei(e, t, n = {}) {
  const { initializeWithValue: r = !0 } = n, i = ke(() => {
    const a = Kl(e);
    return a || (Ss(e, t), t);
  }, [t, e]), [s, u] = ve(() => r ? i() : t), o = ke(
    (a) => {
      Ss(e, a), u(a);
    },
    [e]
  );
  return Me(() => {
    u(i());
  }, [e]), [s, o];
}
var Hn = /* @__PURE__ */ ((e) => (e.MAINNET = "mainnet", e.TESTNET = "testnet", e.SIGNET = "signet", e))(Hn || {}), le = /* @__PURE__ */ ((e) => (e.UNISAT = "unisat", e.XVERSE = "xverse", e.MAGICEDEN = "magiceden", e.LEATHER = "leather", e.OKX = "okx", e.PHANTOM = "phantom", e.OYL = "oyl", e))(le || {}), kt = /* @__PURE__ */ ((e) => (e.BITCOIN = "bitcoin", e.FRACTAL_BITCOIN = "fractal-bitcoin", e))(kt || {});
const tn = {
  payments: null,
  ordinals: null
}, Ca = ut(
  void 0
), ql = "address", Vl = "wallet", Gl = "publicKey", Xl = "format";
function F2({
  children: e,
  network: t,
  visibleWallets: n,
  chain: r = "bitcoin",
  ssr: i = !1
}) {
  if (!t)
    throw new Error("Network cannot be empty");
  if (!n || n.length === 0)
    throw new Error("Visible wallets cannot be empty");
  const [s, u] = ve(t), [o, a] = ve(n), [d, c] = ve(r), [w, y] = ei(
    ql,
    tn,
    { initializeWithValue: !i }
  ), [f, E] = ei(Vl, null, {
    initializeWithValue: !i
  }), [b, I] = ei(
    Gl,
    tn,
    { initializeWithValue: !i }
  ), [x, m] = ei(
    Xl,
    tn,
    { initializeWithValue: !i }
  ), [T, C] = ve(!1), j = ke(() => C(!0), []), U = ke(() => C(!1), []), K = ke(() => {
    y(tn), I(tn), m(tn), E(null);
  }, [y, m, I, E]), S = Ce(
    () => ({
      address: w,
      updateAddress: y,
      publicKey: b,
      updatePublicKey: I,
      network: s,
      updateNetwork: u,
      wallet: f,
      updateWallet: E,
      isModalOpen: T,
      openModal: j,
      closeModal: U,
      format: x,
      updateFormat: m,
      disconnectWallet: K,
      chain: d,
      updateChain: c,
      visibleWallets: o,
      updateVisibleWallets: a
    }),
    [
      w,
      y,
      b,
      I,
      s,
      u,
      f,
      E,
      T,
      j,
      U,
      x,
      m,
      K,
      d,
      c
    ]
  );
  return Me(() => {
    u(t);
  }, [t]), Me(() => {
    d !== r && (K(), c(r));
  }, [r, d, K]), /* @__PURE__ */ ue.jsx(Ca.Provider, { value: S, children: e });
}
function Xt() {
  const e = Ve(Ca);
  if (!e)
    throw new Error("useOrdConnect must be used within OrdConnectProvider");
  return e;
}
var mi = { exports: {} }, Yl = mi.exports, Ts;
function zl() {
  return Ts || (Ts = 1, function(e, t) {
    (function(n, r) {
      e.exports = r(de);
    })(Yl, function(n) {
      return function(r) {
        var i = {};
        function s(u) {
          if (i[u]) return i[u].exports;
          var o = i[u] = { i: u, l: !1, exports: {} };
          return r[u].call(o.exports, o, o.exports, s), o.l = !0, o.exports;
        }
        return s.m = r, s.c = i, s.d = function(u, o, a) {
          s.o(u, o) || Object.defineProperty(u, o, { enumerable: !0, get: a });
        }, s.r = function(u) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(u, "__esModule", { value: !0 });
        }, s.t = function(u, o) {
          if (1 & o && (u = s(u)), 8 & o || 4 & o && typeof u == "object" && u && u.__esModule) return u;
          var a = /* @__PURE__ */ Object.create(null);
          if (s.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: u }), 2 & o && typeof u != "string") for (var d in u) s.d(a, d, (function(c) {
            return u[c];
          }).bind(null, d));
          return a;
        }, s.n = function(u) {
          var o = u && u.__esModule ? function() {
            return u.default;
          } : function() {
            return u;
          };
          return s.d(o, "a", o), o;
        }, s.o = function(u, o) {
          return Object.prototype.hasOwnProperty.call(u, o);
        }, s.p = "/", s(s.s = 1);
      }([function(r, i) {
        r.exports = n;
      }, function(r, i, s) {
        r.exports = s(2);
      }, function(r, i, s) {
        function u(m, T) {
          if (m == null) return {};
          var C, j, U = function(S, A) {
            if (S == null) return {};
            var _, N, P = {}, F = Object.keys(S);
            for (N = 0; N < F.length; N++) _ = F[N], A.indexOf(_) >= 0 || (P[_] = S[_]);
            return P;
          }(m, T);
          if (Object.getOwnPropertySymbols) {
            var K = Object.getOwnPropertySymbols(m);
            for (j = 0; j < K.length; j++) C = K[j], T.indexOf(C) >= 0 || Object.prototype.propertyIsEnumerable.call(m, C) && (U[C] = m[C]);
          }
          return U;
        }
        s.r(i);
        var o = s(0), a = s.n(o), d = function(m) {
          for (var T = 0, C = 0; C < m.length; C++)
            T = (T << 5) - T + m.charCodeAt(C), T &= T;
          return Math.abs(T);
        }, c = function(m, T) {
          return Math.floor(m / Math.pow(10, T) % 10);
        }, w = function(m, T) {
          return !(c(m, T) % 2);
        }, y = function(m, T, C) {
          var j = m % T;
          return C && c(m, C) % 2 === 0 ? -j : j;
        }, f = function(m, T, C) {
          return T[m % C];
        }, E = function(m) {
          var T = m.name, C = m.colors, j = m.title, U = m.square, K = m.size, S = u(m, ["name", "colors", "title", "square", "size"]), A = function(N, P) {
            var F = d(N), W = P && P.length;
            return Array.from({ length: 3 }, function(H, $) {
              return { color: f(F + $, P, W), translateX: y(F * ($ + 1), 8, 1), translateY: y(F * ($ + 1), 8, 2), scale: 1.2 + y(F * ($ + 1), 4) / 10, rotate: y(F * ($ + 1), 360, 1) };
            });
          }(T, C), _ = o.useId();
          return o.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: K, height: K }, S), j && o.createElement("title", null, T), o.createElement("mask", { id: _, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, o.createElement("rect", { width: 80, height: 80, rx: U ? void 0 : 160, fill: "#FFFFFF" })), o.createElement("g", { mask: "url(#".concat(_, ")") }, o.createElement("rect", { width: 80, height: 80, fill: A[0].color }), o.createElement("path", { filter: "url(#filter_".concat(_, ")"), d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z", fill: A[1].color, transform: "translate(" + A[1].translateX + " " + A[1].translateY + ") rotate(" + A[1].rotate + " 40 40) scale(" + A[2].scale + ")" }), o.createElement("path", { filter: "url(#filter_".concat(_, ")"), style: { mixBlendMode: "overlay" }, d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z", fill: A[2].color, transform: "translate(" + A[2].translateX + " " + A[2].translateY + ") rotate(" + A[2].rotate + " 40 40) scale(" + A[2].scale + ")" })), o.createElement("defs", null, o.createElement("filter", { id: "filter_".concat(_), filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, o.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), o.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), o.createElement("feGaussianBlur", { stdDeviation: 7, result: "effect1_foregroundBlur" }))));
        }, b = { pixel: function(m) {
          var T = m.name, C = m.colors, j = m.title, U = m.square, K = m.size, S = u(m, ["name", "colors", "title", "square", "size"]), A = function(N, P) {
            var F = d(N), W = P && P.length;
            return Array.from({ length: 64 }, function(H, $) {
              return f(F % ($ + 1), P, W);
            });
          }(T, C), _ = o.useId();
          return o.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: K, height: K }, S), j && o.createElement("title", null, T), o.createElement("mask", { id: _, "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, o.createElement("rect", { width: 80, height: 80, rx: U ? void 0 : 160, fill: "#FFFFFF" })), o.createElement("g", { mask: "url(#".concat(_, ")") }, o.createElement("rect", { width: 10, height: 10, fill: A[0] }), o.createElement("rect", { x: 20, width: 10, height: 10, fill: A[1] }), o.createElement("rect", { x: 40, width: 10, height: 10, fill: A[2] }), o.createElement("rect", { x: 60, width: 10, height: 10, fill: A[3] }), o.createElement("rect", { x: 10, width: 10, height: 10, fill: A[4] }), o.createElement("rect", { x: 30, width: 10, height: 10, fill: A[5] }), o.createElement("rect", { x: 50, width: 10, height: 10, fill: A[6] }), o.createElement("rect", { x: 70, width: 10, height: 10, fill: A[7] }), o.createElement("rect", { y: 10, width: 10, height: 10, fill: A[8] }), o.createElement("rect", { y: 20, width: 10, height: 10, fill: A[9] }), o.createElement("rect", { y: 30, width: 10, height: 10, fill: A[10] }), o.createElement("rect", { y: 40, width: 10, height: 10, fill: A[11] }), o.createElement("rect", { y: 50, width: 10, height: 10, fill: A[12] }), o.createElement("rect", { y: 60, width: 10, height: 10, fill: A[13] }), o.createElement("rect", { y: 70, width: 10, height: 10, fill: A[14] }), o.createElement("rect", { x: 20, y: 10, width: 10, height: 10, fill: A[15] }), o.createElement("rect", { x: 20, y: 20, width: 10, height: 10, fill: A[16] }), o.createElement("rect", { x: 20, y: 30, width: 10, height: 10, fill: A[17] }), o.createElement("rect", { x: 20, y: 40, width: 10, height: 10, fill: A[18] }), o.createElement("rect", { x: 20, y: 50, width: 10, height: 10, fill: A[19] }), o.createElement("rect", { x: 20, y: 60, width: 10, height: 10, fill: A[20] }), o.createElement("rect", { x: 20, y: 70, width: 10, height: 10, fill: A[21] }), o.createElement("rect", { x: 40, y: 10, width: 10, height: 10, fill: A[22] }), o.createElement("rect", { x: 40, y: 20, width: 10, height: 10, fill: A[23] }), o.createElement("rect", { x: 40, y: 30, width: 10, height: 10, fill: A[24] }), o.createElement("rect", { x: 40, y: 40, width: 10, height: 10, fill: A[25] }), o.createElement("rect", { x: 40, y: 50, width: 10, height: 10, fill: A[26] }), o.createElement("rect", { x: 40, y: 60, width: 10, height: 10, fill: A[27] }), o.createElement("rect", { x: 40, y: 70, width: 10, height: 10, fill: A[28] }), o.createElement("rect", { x: 60, y: 10, width: 10, height: 10, fill: A[29] }), o.createElement("rect", { x: 60, y: 20, width: 10, height: 10, fill: A[30] }), o.createElement("rect", { x: 60, y: 30, width: 10, height: 10, fill: A[31] }), o.createElement("rect", { x: 60, y: 40, width: 10, height: 10, fill: A[32] }), o.createElement("rect", { x: 60, y: 50, width: 10, height: 10, fill: A[33] }), o.createElement("rect", { x: 60, y: 60, width: 10, height: 10, fill: A[34] }), o.createElement("rect", { x: 60, y: 70, width: 10, height: 10, fill: A[35] }), o.createElement("rect", { x: 10, y: 10, width: 10, height: 10, fill: A[36] }), o.createElement("rect", { x: 10, y: 20, width: 10, height: 10, fill: A[37] }), o.createElement("rect", { x: 10, y: 30, width: 10, height: 10, fill: A[38] }), o.createElement("rect", { x: 10, y: 40, width: 10, height: 10, fill: A[39] }), o.createElement("rect", { x: 10, y: 50, width: 10, height: 10, fill: A[40] }), o.createElement("rect", { x: 10, y: 60, width: 10, height: 10, fill: A[41] }), o.createElement("rect", { x: 10, y: 70, width: 10, height: 10, fill: A[42] }), o.createElement("rect", { x: 30, y: 10, width: 10, height: 10, fill: A[43] }), o.createElement("rect", { x: 30, y: 20, width: 10, height: 10, fill: A[44] }), o.createElement("rect", { x: 30, y: 30, width: 10, height: 10, fill: A[45] }), o.createElement("rect", { x: 30, y: 40, width: 10, height: 10, fill: A[46] }), o.createElement("rect", { x: 30, y: 50, width: 10, height: 10, fill: A[47] }), o.createElement("rect", { x: 30, y: 60, width: 10, height: 10, fill: A[48] }), o.createElement("rect", { x: 30, y: 70, width: 10, height: 10, fill: A[49] }), o.createElement("rect", { x: 50, y: 10, width: 10, height: 10, fill: A[50] }), o.createElement("rect", { x: 50, y: 20, width: 10, height: 10, fill: A[51] }), o.createElement("rect", { x: 50, y: 30, width: 10, height: 10, fill: A[52] }), o.createElement("rect", { x: 50, y: 40, width: 10, height: 10, fill: A[53] }), o.createElement("rect", { x: 50, y: 50, width: 10, height: 10, fill: A[54] }), o.createElement("rect", { x: 50, y: 60, width: 10, height: 10, fill: A[55] }), o.createElement("rect", { x: 50, y: 70, width: 10, height: 10, fill: A[56] }), o.createElement("rect", { x: 70, y: 10, width: 10, height: 10, fill: A[57] }), o.createElement("rect", { x: 70, y: 20, width: 10, height: 10, fill: A[58] }), o.createElement("rect", { x: 70, y: 30, width: 10, height: 10, fill: A[59] }), o.createElement("rect", { x: 70, y: 40, width: 10, height: 10, fill: A[60] }), o.createElement("rect", { x: 70, y: 50, width: 10, height: 10, fill: A[61] }), o.createElement("rect", { x: 70, y: 60, width: 10, height: 10, fill: A[62] }), o.createElement("rect", { x: 70, y: 70, width: 10, height: 10, fill: A[63] })));
        }, bauhaus: function(m) {
          var T = m.name, C = m.colors, j = m.title, U = m.square, K = m.size, S = u(m, ["name", "colors", "title", "square", "size"]), A = function(N, P) {
            var F = d(N), W = P && P.length;
            return Array.from({ length: 4 }, function(H, $) {
              return { color: f(F + $, P, W), translateX: y(F * ($ + 1), 40 - ($ + 17), 1), translateY: y(F * ($ + 1), 40 - ($ + 17), 2), rotate: y(F * ($ + 1), 360), isSquare: w(F, 2) };
            });
          }(T, C), _ = o.useId();
          return o.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: K, height: K }, S), j && o.createElement("title", null, T), o.createElement("mask", { id: _, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, o.createElement("rect", { width: 80, height: 80, rx: U ? void 0 : 160, fill: "#FFFFFF" })), o.createElement("g", { mask: "url(#".concat(_, ")") }, o.createElement("rect", { width: 80, height: 80, fill: A[0].color }), o.createElement("rect", { x: 10, y: 30, width: 80, height: A[1].isSquare ? 80 : 10, fill: A[1].color, transform: "translate(" + A[1].translateX + " " + A[1].translateY + ") rotate(" + A[1].rotate + " 40 40)" }), o.createElement("circle", { cx: 40, cy: 40, fill: A[2].color, r: 16, transform: "translate(" + A[2].translateX + " " + A[2].translateY + ")" }), o.createElement("line", { x1: 0, y1: 40, x2: 80, y2: 40, strokeWidth: 2, stroke: A[3].color, transform: "translate(" + A[3].translateX + " " + A[3].translateY + ") rotate(" + A[3].rotate + " 40 40)" })));
        }, ring: function(m) {
          var T = m.name, C = m.colors, j = m.title, U = m.square, K = m.size, S = u(m, ["name", "colors", "title", "square", "size"]), A = function(N, P) {
            var F = d(P), W = N && N.length, H = Array.from({ length: 5 }, function(G, k) {
              return f(F + k, N, W);
            }), $ = [];
            return $[0] = H[0], $[1] = H[1], $[2] = H[1], $[3] = H[2], $[4] = H[2], $[5] = H[3], $[6] = H[3], $[7] = H[0], $[8] = H[4], $;
          }(C, T), _ = a.a.useId();
          return a.a.createElement("svg", Object.assign({ viewBox: "0 0 90 90", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: K, height: K }, S), j && a.a.createElement("title", null, T), a.a.createElement("mask", { id: _, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 90, height: 90 }, a.a.createElement("rect", { width: 90, height: 90, rx: U ? void 0 : 180, fill: "#FFFFFF" })), a.a.createElement("g", { mask: "url(#".concat(_, ")") }, a.a.createElement("path", { d: "M0 0h90v45H0z", fill: A[0] }), a.a.createElement("path", { d: "M0 45h90v45H0z", fill: A[1] }), a.a.createElement("path", { d: "M83 45a38 38 0 00-76 0h76z", fill: A[2] }), a.a.createElement("path", { d: "M83 45a38 38 0 01-76 0h76z", fill: A[3] }), a.a.createElement("path", { d: "M77 45a32 32 0 10-64 0h64z", fill: A[4] }), a.a.createElement("path", { d: "M77 45a32 32 0 11-64 0h64z", fill: A[5] }), a.a.createElement("path", { d: "M71 45a26 26 0 00-52 0h52z", fill: A[6] }), a.a.createElement("path", { d: "M71 45a26 26 0 01-52 0h52z", fill: A[7] }), a.a.createElement("circle", { cx: 45, cy: 45, r: 23, fill: A[8] })));
        }, beam: function(m) {
          var T = m.name, C = m.colors, j = m.title, U = m.square, K = m.size, S = u(m, ["name", "colors", "title", "square", "size"]), A = function(N, P) {
            var F, W = d(N), H = P && P.length, $ = f(W, P, H), G = y(W, 10, 1), k = G < 5 ? G + 4 : G, M = y(W, 10, 2), Y = M < 5 ? M + 4 : M;
            return { wrapperColor: $, faceColor: (F = $, F.slice(0, 1) === "#" && (F = F.slice(1)), (299 * parseInt(F.substr(0, 2), 16) + 587 * parseInt(F.substr(2, 2), 16) + 114 * parseInt(F.substr(4, 2), 16)) / 1e3 >= 128 ? "#000000" : "#FFFFFF"), backgroundColor: f(W + 13, P, H), wrapperTranslateX: k, wrapperTranslateY: Y, wrapperRotate: y(W, 360), wrapperScale: 1 + y(W, 3) / 10, isMouthOpen: w(W, 2), isCircle: w(W, 1), eyeSpread: y(W, 5), mouthSpread: y(W, 3), faceRotate: y(W, 10, 3), faceTranslateX: k > 6 ? k / 2 : y(W, 8, 1), faceTranslateY: Y > 6 ? Y / 2 : y(W, 7, 2) };
          }(T, C), _ = o.useId();
          return o.createElement("svg", Object.assign({ viewBox: "0 0 36 36", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: K, height: K }, S), j && o.createElement("title", null, T), o.createElement("mask", { id: _, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 36, height: 36 }, o.createElement("rect", { width: 36, height: 36, rx: U ? void 0 : 72, fill: "#FFFFFF" })), o.createElement("g", { mask: "url(#".concat(_, ")") }, o.createElement("rect", { width: 36, height: 36, fill: A.backgroundColor }), o.createElement("rect", { x: "0", y: "0", width: 36, height: 36, transform: "translate(" + A.wrapperTranslateX + " " + A.wrapperTranslateY + ") rotate(" + A.wrapperRotate + " 18 18) scale(" + A.wrapperScale + ")", fill: A.wrapperColor, rx: A.isCircle ? 36 : 6 }), o.createElement("g", { transform: "translate(" + A.faceTranslateX + " " + A.faceTranslateY + ") rotate(" + A.faceRotate + " 18 18)" }, A.isMouthOpen ? o.createElement("path", { d: "M15 " + (19 + A.mouthSpread) + "c2 1 4 1 6 0", stroke: A.faceColor, fill: "none", strokeLinecap: "round" }) : o.createElement("path", { d: "M13," + (19 + A.mouthSpread) + " a1,0.75 0 0,0 10,0", fill: A.faceColor }), o.createElement("rect", { x: 14 - A.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: A.faceColor }), o.createElement("rect", { x: 20 + A.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: A.faceColor }))));
        }, sunset: function(m) {
          var T = m.name, C = m.colors, j = m.title, U = m.square, K = m.size, S = u(m, ["name", "colors", "title", "square", "size"]), A = function(P, F) {
            var W = d(P), H = F && F.length;
            return Array.from({ length: 4 }, function($, G) {
              return f(W + G, F, H);
            });
          }(T, C), _ = T.replace(/\s/g, ""), N = o.useId();
          return o.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: K, height: K }, S), j && o.createElement("title", null, T), o.createElement("mask", { id: N, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, o.createElement("rect", { width: 80, height: 80, rx: U ? void 0 : 160, fill: "#FFFFFF" })), o.createElement("g", { mask: "url(#".concat(N, ")") }, o.createElement("path", { fill: "url(#gradient_paint0_linear_" + _ + ")", d: "M0 0h80v40H0z" }), o.createElement("path", { fill: "url(#gradient_paint1_linear_" + _ + ")", d: "M0 40h80v40H0z" })), o.createElement("defs", null, o.createElement("linearGradient", { id: "gradient_paint0_linear_" + _, x1: 40, y1: 0, x2: 40, y2: 40, gradientUnits: "userSpaceOnUse" }, o.createElement("stop", { stopColor: A[0] }), o.createElement("stop", { offset: 1, stopColor: A[1] })), o.createElement("linearGradient", { id: "gradient_paint1_linear_" + _, x1: 40, y1: 40, x2: 40, y2: 80, gradientUnits: "userSpaceOnUse" }, o.createElement("stop", { stopColor: A[2] }), o.createElement("stop", { offset: 1, stopColor: A[3] }))));
        }, marble: E }, I = { geometric: "beam", abstract: "bauhaus" }, x = function(m) {
          var T = m.variant, C = T === void 0 ? "marble" : T, j = m.colors, U = j === void 0 ? ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"] : j, K = m.name, S = K === void 0 ? "Clara Barton" : K, A = m.title, _ = A !== void 0 && A, N = m.size, P = m.square, F = P !== void 0 && P, W = u(m, ["variant", "colors", "name", "title", "size", "square"]), H = b[I[C] || C] || E;
          return a.a.createElement(H, Object.assign({ colors: U, name: S, title: _, size: N, square: F }, W));
        };
        i.default = x;
      }]);
    });
  }(mi)), mi.exports;
}
var Ql = zl();
const ka = /* @__PURE__ */ Nl(Ql), Ba = typeof document < "u" ? de.useLayoutEffect : () => {
};
function Jl(e) {
  const t = be(null);
  return Ba(() => {
    t.current = e;
  }, [
    e
  ]), ke((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const qn = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, Wr = (e) => e && "window" in e && e.window === e ? e : qn(e).defaultView || window;
function Zl(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function ef(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Ra(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const tf = Ra(function() {
  return ef(/^Mac/i);
}), rf = Ra(function() {
  return Zl(/Android/i);
});
function nf(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : rf() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
class of {
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
function Fa(e) {
  let t = be({
    isFocused: !1,
    observer: null
  });
  Ba(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = Jl((r) => {
    e == null || e(r);
  });
  return ke((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let i = r.target, s = (u) => {
        t.current.isFocused = !1, i.disabled && n(new of("blur", u)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      i.addEventListener("focusout", s, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && i.disabled) {
          var u;
          (u = t.current.observer) === null || u === void 0 || u.disconnect();
          let o = i === document.activeElement ? null : document.activeElement;
          i.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: o
          })), i.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: o
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
function sf(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: i } = e;
  const s = ke((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), i && i(!1), !0;
  }, [
    r,
    i
  ]), u = Fa(s), o = ke((a) => {
    const d = qn(a.target);
    a.target === a.currentTarget && d.activeElement === a.target && (n && n(a), i && i(!0), u(a));
  }, [
    i,
    n,
    u
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || i || r) ? o : void 0,
      onBlur: !t && (r || i) ? s : void 0
    }
  };
}
let Vn = null, Co = /* @__PURE__ */ new Set(), Mn = /* @__PURE__ */ new Map(), Vr = !1, ko = !1;
const uf = {
  Tab: !0,
  Escape: !0
};
function Xo(e, t) {
  for (let n of Co) n(e, t);
}
function af(e) {
  return !(e.metaKey || !tf() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Ei(e) {
  Vr = !0, af(e) && (Vn = "keyboard", Xo("keyboard", e));
}
function Bt(e) {
  Vn = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Vr = !0, Xo("pointer", e));
}
function Na(e) {
  nf(e) && (Vr = !0, Vn = "virtual");
}
function Ua(e) {
  e.target === window || e.target === document || (!Vr && !ko && (Vn = "virtual", Xo("virtual", e)), Vr = !1, ko = !1);
}
function La() {
  Vr = !1, ko = !0;
}
function Bo(e) {
  if (typeof window > "u" || Mn.get(Wr(e))) return;
  const t = Wr(e), n = qn(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Vr = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Ei, !0), n.addEventListener("keyup", Ei, !0), n.addEventListener("click", Na, !0), t.addEventListener("focus", Ua, !0), t.addEventListener("blur", La, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", Bt, !0), n.addEventListener("pointermove", Bt, !0), n.addEventListener("pointerup", Bt, !0)) : (n.addEventListener("mousedown", Bt, !0), n.addEventListener("mousemove", Bt, !0), n.addEventListener("mouseup", Bt, !0)), t.addEventListener("beforeunload", () => {
    Ha(e);
  }, {
    once: !0
  }), Mn.set(t, {
    focus: r
  });
}
const Ha = (e, t) => {
  const n = Wr(e), r = qn(e);
  t && r.removeEventListener("DOMContentLoaded", t), Mn.has(n) && (n.HTMLElement.prototype.focus = Mn.get(n).focus, r.removeEventListener("keydown", Ei, !0), r.removeEventListener("keyup", Ei, !0), r.removeEventListener("click", Na, !0), n.removeEventListener("focus", Ua, !0), n.removeEventListener("blur", La, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", Bt, !0), r.removeEventListener("pointermove", Bt, !0), r.removeEventListener("pointerup", Bt, !0)) : (r.removeEventListener("mousedown", Bt, !0), r.removeEventListener("mousemove", Bt, !0), r.removeEventListener("mouseup", Bt, !0)), Mn.delete(n));
};
function cf(e) {
  const t = qn(e);
  let n;
  return t.readyState !== "loading" ? Bo(e) : (n = () => {
    Bo(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Ha(e, n);
}
typeof document < "u" && cf();
function Ma() {
  return Vn !== "pointer";
}
const lf = /* @__PURE__ */ new Set([
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
function ff(e, t, n) {
  var r;
  const i = typeof window < "u" ? Wr(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, s = typeof window < "u" ? Wr(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, u = typeof window < "u" ? Wr(n == null ? void 0 : n.target).HTMLElement : HTMLElement, o = typeof window < "u" ? Wr(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof i && !lf.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof s || (n == null ? void 0 : n.target) instanceof u && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof o && !uf[n.key]);
}
function hf(e, t, n) {
  Bo(), Me(() => {
    let r = (i, s) => {
      ff(!!(n != null && n.isTextInput), i, s) && e(Ma());
    };
    return Co.add(r), () => {
      Co.delete(r);
    };
  }, t);
}
function df(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: i } = e, s = be({
    isFocusWithin: !1
  }), u = ke((d) => {
    s.current.isFocusWithin && !d.currentTarget.contains(d.relatedTarget) && (s.current.isFocusWithin = !1, n && n(d), i && i(!1));
  }, [
    n,
    i,
    s
  ]), o = Fa(u), a = ke((d) => {
    !s.current.isFocusWithin && document.activeElement === d.target && (r && r(d), i && i(!0), s.current.isFocusWithin = !0, o(d));
  }, [
    r,
    i,
    o
  ]);
  return t ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: a,
      onBlur: u
    }
  };
}
let Ai = !1, Vi = 0;
function Ro() {
  Ai = !0, setTimeout(() => {
    Ai = !1;
  }, 50);
}
function Is(e) {
  e.pointerType === "touch" && Ro();
}
function pf() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Is) : document.addEventListener("touchend", Ro), Vi++, () => {
      Vi--, !(Vi > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Is) : document.removeEventListener("touchend", Ro));
    };
}
function gf(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: i } = e, [s, u] = ve(!1), o = be({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Me(pf, []);
  let { hoverProps: a, triggerHoverEnd: d } = Ce(() => {
    let c = (f, E) => {
      if (o.pointerType = E, i || E === "touch" || o.isHovered || !f.currentTarget.contains(f.target)) return;
      o.isHovered = !0;
      let b = f.currentTarget;
      o.target = b, t && t({
        type: "hoverstart",
        target: b,
        pointerType: E
      }), n && n(!0), u(!0);
    }, w = (f, E) => {
      if (o.pointerType = "", o.target = null, E === "touch" || !o.isHovered) return;
      o.isHovered = !1;
      let b = f.currentTarget;
      r && r({
        type: "hoverend",
        target: b,
        pointerType: E
      }), n && n(!1), u(!1);
    }, y = {};
    return typeof PointerEvent < "u" ? (y.onPointerEnter = (f) => {
      Ai && f.pointerType === "mouse" || c(f, f.pointerType);
    }, y.onPointerLeave = (f) => {
      !i && f.currentTarget.contains(f.target) && w(f, f.pointerType);
    }) : (y.onTouchStart = () => {
      o.ignoreEmulatedMouseEvents = !0;
    }, y.onMouseEnter = (f) => {
      !o.ignoreEmulatedMouseEvents && !Ai && c(f, "mouse"), o.ignoreEmulatedMouseEvents = !1;
    }, y.onMouseLeave = (f) => {
      !i && f.currentTarget.contains(f.target) && w(f, "mouse");
    }), {
      hoverProps: y,
      triggerHoverEnd: w
    };
  }, [
    t,
    n,
    r,
    i,
    o
  ]);
  return Me(() => {
    i && d({
      currentTarget: o.target
    }, o.pointerType);
  }, [
    i
  ]), {
    hoverProps: a,
    isHovered: s
  };
}
function mf(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, i = be({
    isFocused: !1,
    isFocusVisible: t || Ma()
  }), [s, u] = ve(!1), [o, a] = ve(() => i.current.isFocused && i.current.isFocusVisible), d = ke(() => a(i.current.isFocused && i.current.isFocusVisible), []), c = ke((f) => {
    i.current.isFocused = f, u(f), d();
  }, [
    d
  ]);
  hf((f) => {
    i.current.isFocusVisible = f, d();
  }, [], {
    isTextInput: n
  });
  let { focusProps: w } = sf({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: y } = df({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: s,
    isFocusVisible: o,
    focusProps: r ? y : w
  };
}
var wf = Object.defineProperty, yf = (e, t, n) => t in e ? wf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Gi = (e, t, n) => (yf(e, typeof t != "symbol" ? t + "" : t, n), n);
let Ef = class {
  constructor() {
    Gi(this, "current", this.detect()), Gi(this, "handoffState", "pending"), Gi(this, "currentId", 0);
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
}, qr = new Ef();
function zr(e) {
  return qr.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Ii(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Yt() {
  let e = [], t = { addEventListener(n, r, i, s) {
    return n.addEventListener(r, i, s), t.add(() => n.removeEventListener(r, i, s));
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
    return Ii(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, i) {
    let s = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: i }), this.add(() => {
      Object.assign(n.style, { [r]: s });
    });
  }, group(n) {
    let r = Yt();
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
function dn() {
  let [e] = ve(Yt);
  return Me(() => () => e.dispose(), [e]), e;
}
let Ne = (e, t) => {
  qr.isServer ? Me(e, t) : qo(e, t);
};
function Qr(e) {
  let t = be(e);
  return Ne(() => {
    t.current = e;
  }, [e]), t;
}
let Ee = function(e) {
  let t = Qr(e);
  return de.useCallback((...n) => t.current(...n), [t]);
};
function Af(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function bf(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function vf({ disabled: e = !1 } = {}) {
  let t = be(null), [n, r] = ve(!1), i = dn(), s = Ee(() => {
    t.current = null, r(!1), i.dispose();
  }), u = Ee((o) => {
    if (i.dispose(), t.current === null) {
      t.current = o.currentTarget, r(!0);
      {
        let a = zr(o.currentTarget);
        i.addEventListener(a, "pointerup", s, !1), i.addEventListener(a, "pointermove", (d) => {
          if (t.current) {
            let c = Af(d);
            r(bf(c, t.current.getBoundingClientRect()));
          }
        }, !1), i.addEventListener(a, "pointercancel", s, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: u, onPointerUp: s, onClick: s } };
}
let Pf = ut(void 0);
function Da() {
  return Ve(Pf);
}
function Fo(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function qt(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, qt), r;
}
var fn = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(fn || {}), Tr = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Tr || {});
function et() {
  let e = Tf();
  return ke((t) => Sf({ mergeRefs: e, ...t }), [e]);
}
function Sf({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: i, visible: s = !0, name: u, mergeRefs: o }) {
  o = o ?? If;
  let a = $a(t, e);
  if (s) return ti(a, n, r, u, o);
  let d = i ?? 0;
  if (d & 2) {
    let { static: c = !1, ...w } = a;
    if (c) return ti(w, n, r, u, o);
  }
  if (d & 1) {
    let { unmount: c = !0, ...w } = a;
    return qt(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return ti({ ...w, hidden: !0, style: { display: "none" } }, n, r, u, o);
    } });
  }
  return ti(a, n, r, u, o);
}
function ti(e, t = {}, n, r, i) {
  let { as: s = n, children: u, refName: o = "ref", ...a } = Xi(e, ["unmount", "static"]), d = e.ref !== void 0 ? { [o]: e.ref } : {}, c = typeof u == "function" ? u(t) : u;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let w = {};
  if (t) {
    let y = !1, f = [];
    for (let [E, b] of Object.entries(t)) typeof b == "boolean" && (y = !0), b === !0 && f.push(E.replace(/([A-Z])/g, (I) => `-${I.toLowerCase()}`));
    if (y) {
      w["data-headlessui-state"] = f.join(" ");
      for (let E of f) w[`data-${E}`] = "";
    }
  }
  if (s === ot && (Object.keys(Dr(a)).length > 0 || Object.keys(Dr(w)).length > 0)) if (!ol(c) || Array.isArray(c) && c.length > 1) {
    if (Object.keys(Dr(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(Dr(a)).concat(Object.keys(Dr(w))).map((y) => `  - ${y}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((y) => `  - ${y}`).join(`
`)].join(`
`));
  } else {
    let y = c.props, f = y == null ? void 0 : y.className, E = typeof f == "function" ? (...x) => Fo(f(...x), a.className) : Fo(f, a.className), b = E ? { className: E } : {}, I = $a(c.props, Dr(Xi(a, ["ref"])));
    for (let x in w) x in I && delete w[x];
    return sl(c, Object.assign({}, I, w, d, { ref: i(xf(c), d.ref) }, b));
  }
  return ul(s, Object.assign({}, Xi(a, ["ref"]), s !== ot && d, s !== ot && w), c);
}
function Tf() {
  let e = be([]), t = ke((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function If(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function $a(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let i in r) i.startsWith("on") && typeof r[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(r[i])) : t[i] = r[i];
  if (t.disabled || t["aria-disabled"]) for (let r in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(i) => {
    var s;
    return (s = i == null ? void 0 : i.preventDefault) == null ? void 0 : s.call(i);
  }]);
  for (let r in n) Object.assign(t, { [r](i, ...s) {
    let u = n[r];
    for (let o of u) {
      if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented) return;
      o(i, ...s);
    }
  } });
  return t;
}
function ja(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let i in r) i.startsWith("on") && typeof r[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(r[i])) : t[i] = r[i];
  for (let r in n) Object.assign(t, { [r](...i) {
    let s = n[r];
    for (let u of s) u == null || u(...i);
  } });
  return t;
}
function Ge(e) {
  var t;
  return Object.assign(il(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Dr(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Xi(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function xf(e) {
  return de.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
let _f = "span";
var bi = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(bi || {});
function Of(e, t) {
  var n;
  let { features: r = 1, ...i } = e, s = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = i["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return et()({ ourProps: s, theirProps: i, slot: {}, defaultTag: _f, name: "Hidden" });
}
let No = Ge(Of), Cf = ut(void 0);
function kf() {
  return Ve(Cf);
}
function Bf(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Rf(n) ? !1 : r;
}
function Rf(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Wa = Symbol();
function Ff(e, t = !0) {
  return Object.assign(e, { [Wa]: t });
}
function Et(...e) {
  let t = be(e);
  Me(() => {
    t.current = e;
  }, [e]);
  let n = Ee((r) => {
    for (let i of t.current) i != null && (typeof i == "function" ? i(r) : i.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Wa])) ? void 0 : n;
}
let Yo = ut(null);
Yo.displayName = "DescriptionContext";
function Ka() {
  let e = Ve(Yo);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ka), t;
  }
  return e;
}
function qa() {
  let [e, t] = ve([]);
  return [e.length > 0 ? e.join(" ") : void 0, Ce(() => function(n) {
    let r = Ee((s) => (t((u) => [...u, s]), () => t((u) => {
      let o = u.slice(), a = o.indexOf(s);
      return a !== -1 && o.splice(a, 1), o;
    }))), i = Ce(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return de.createElement(Yo.Provider, { value: i }, n.children);
  }, [t])];
}
let Nf = "p";
function Uf(e, t) {
  let n = Gt(), r = Da(), { id: i = `headlessui-description-${n}`, ...s } = e, u = Ka(), o = Et(t);
  Ne(() => u.register(i), [i, u.register]);
  let a = r || !1, d = Ce(() => ({ ...u.slot, disabled: a }), [u.slot, a]), c = { ref: o, ...u.props, id: i };
  return et()({ ourProps: c, theirProps: s, slot: d, defaultTag: Nf, name: u.name || "Description" });
}
let Lf = Ge(Uf), Hf = Object.assign(Lf, {});
var it = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(it || {});
let xi = ut(null);
xi.displayName = "LabelContext";
function zo() {
  let e = Ve(xi);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, zo), t;
  }
  return e;
}
function Mf(e) {
  var t, n, r;
  let i = (n = (t = Ve(xi)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = void 0) != null ? r : 0) > 0 ? [i, ...e].filter(Boolean).join(" ") : i;
}
function Va({ inherit: e = !1 } = {}) {
  let t = Mf(), [n, r] = ve([]), i = e ? [t, ...n].filter(Boolean) : n;
  return [i.length > 0 ? i.join(" ") : void 0, Ce(() => function(s) {
    let u = Ee((a) => (r((d) => [...d, a]), () => r((d) => {
      let c = d.slice(), w = c.indexOf(a);
      return w !== -1 && c.splice(w, 1), c;
    }))), o = Ce(() => ({ register: u, slot: s.slot, name: s.name, props: s.props, value: s.value }), [u, s.slot, s.name, s.props, s.value]);
    return de.createElement(xi.Provider, { value: o }, s.children);
  }, [r])];
}
let Df = "label";
function $f(e, t) {
  var n;
  let r = Gt(), i = zo(), s = kf(), u = Da(), { id: o = `headlessui-label-${r}`, htmlFor: a = s ?? ((n = i.props) == null ? void 0 : n.htmlFor), passive: d = !1, ...c } = e, w = Et(t);
  Ne(() => i.register(o), [o, i.register]);
  let y = Ee((I) => {
    let x = I.currentTarget;
    if (x instanceof HTMLLabelElement && I.preventDefault(), i.props && "onClick" in i.props && typeof i.props.onClick == "function" && i.props.onClick(I), x instanceof HTMLLabelElement) {
      let m = document.getElementById(x.htmlFor);
      if (m) {
        let T = m.getAttribute("disabled");
        if (T === "true" || T === "") return;
        let C = m.getAttribute("aria-disabled");
        if (C === "true" || C === "") return;
        (m instanceof HTMLInputElement && (m.type === "radio" || m.type === "checkbox") || m.role === "radio" || m.role === "checkbox" || m.role === "switch") && m.click(), m.focus({ preventScroll: !0 });
      }
    }
  }), f = u || !1, E = Ce(() => ({ ...i.slot, disabled: f }), [i.slot, f]), b = { ref: w, ...i.props, id: o, htmlFor: a, onClick: y };
  return d && ("onClick" in b && (delete b.htmlFor, delete b.onClick), "onClick" in c && delete c.onClick), et()({ ourProps: b, theirProps: c, slot: E, defaultTag: a ? Df : "div", name: i.name || "Label" });
}
let jf = Ge($f);
Object.assign(jf, {});
let Wf = ut(() => {
});
function Kf({ value: e, children: t }) {
  return de.createElement(Wf.Provider, { value: e }, t);
}
function qf(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Vf(e, t = !1) {
  let [n, r] = Vo(() => ({}), {}), i = Ce(() => qf(e), [e, n]);
  return Ne(() => {
    if (!e) return;
    let s = new ResizeObserver(r);
    return s.observe(e), () => {
      s.disconnect();
    };
  }, [e]), t ? { width: `${i.width}px`, height: `${i.height}px` } : i;
}
let Gf = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function Ga(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(i) {
    return r.add(i), () => r.delete(i);
  }, dispatch(i, ...s) {
    let u = t[i].call(n, ...s);
    u && (n = u, r.forEach((o) => o()));
  } };
}
function Xa(e) {
  return al(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let Xf = new Gf(() => Ga(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function pn(e, t) {
  let n = Xf.get(t), r = Gt(), i = Xa(n);
  if (Ne(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let s = i.indexOf(r), u = i.length;
  return s === -1 && (s = u, u += 1), s === u - 1;
}
let Uo = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map();
function xs(e) {
  var t;
  let n = (t = Dn.get(e)) != null ? t : 0;
  return Dn.set(e, n + 1), n !== 0 ? () => _s(e) : (Uo.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => _s(e));
}
function _s(e) {
  var t;
  let n = (t = Dn.get(e)) != null ? t : 1;
  if (n === 1 ? Dn.delete(e) : Dn.set(e, n - 1), n !== 1) return;
  let r = Uo.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Uo.delete(e));
}
function Ya(e, { allowed: t, disallowed: n } = {}) {
  let r = pn(e, "inert-others");
  Ne(() => {
    var i, s;
    if (!r) return;
    let u = Yt();
    for (let a of (i = n == null ? void 0 : n()) != null ? i : []) a && u.add(xs(a));
    let o = (s = t == null ? void 0 : t()) != null ? s : [];
    for (let a of o) {
      if (!a) continue;
      let d = zr(a);
      if (!d) continue;
      let c = a.parentElement;
      for (; c && c !== d.body; ) {
        for (let w of c.children) o.some((y) => w.contains(y)) || u.add(xs(w));
        c = c.parentElement;
      }
    }
    return u.dispose;
  }, [r, t, n]);
}
function za(e, t, n) {
  let r = Qr((i) => {
    let s = i.getBoundingClientRect();
    s.x === 0 && s.y === 0 && s.width === 0 && s.height === 0 && n();
  });
  Me(() => {
    if (!e) return;
    let i = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!i) return;
    let s = Yt();
    if (typeof ResizeObserver < "u") {
      let u = new ResizeObserver(() => r.current(i));
      u.observe(i), s.add(() => u.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let u = new IntersectionObserver(() => r.current(i));
      u.observe(i), s.add(() => u.disconnect());
    }
    return () => s.dispose();
  }, [t, r, e]);
}
let vi = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Yf = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Ut = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(Ut || {}), Lo = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Lo || {}), zf = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(zf || {});
function Qa(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(vi)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function Qf(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Yf)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Qo = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Qo || {});
function Jo(e, t = 0) {
  var n;
  return e === ((n = zr(e)) == null ? void 0 : n.body) ? !1 : qt(t, { 0() {
    return e.matches(vi);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(vi)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
function Ja(e) {
  let t = zr(e);
  Yt().nextFrame(() => {
    t && !Jo(t.activeElement, 0) && Wt(e);
  });
}
var Jf = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Jf || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Wt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Zf = ["textarea", "input"].join(",");
function e0(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Zf)) != null ? n : !1;
}
function Za(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let i = t(n), s = t(r);
    if (i === null || s === null) return 0;
    let u = i.compareDocumentPosition(s);
    return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function t0(e, t) {
  return cn(Qa(), t, { relativeTo: e });
}
function cn(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}) {
  let s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, u = Array.isArray(e) ? n ? Za(e) : e : t & 64 ? Qf(e) : Qa(e);
  i.length > 0 && u.length > 1 && (u = u.filter((f) => !i.some((E) => E != null && "current" in E ? (E == null ? void 0 : E.current) === f : E === f))), r = r ?? s.activeElement;
  let o = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, u.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, u.indexOf(r)) + 1;
    if (t & 8) return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = t & 32 ? { preventScroll: !0 } : {}, c = 0, w = u.length, y;
  do {
    if (c >= w || c + w <= 0) return 0;
    let f = a + c;
    if (t & 16) f = (f + w) % w;
    else {
      if (f < 0) return 3;
      if (f >= w) return 1;
    }
    y = u[f], y == null || y.focus(d), c += o;
  } while (y !== s.activeElement);
  return t & 6 && e0(y) && y.select(), 2;
}
function ec() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function r0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n0() {
  return ec() || r0();
}
function bn(e, t, n, r) {
  let i = Qr(n);
  Me(() => {
    if (!e) return;
    function s(u) {
      i.current(u);
    }
    return document.addEventListener(t, s, r), () => document.removeEventListener(t, s, r);
  }, [e, t, r]);
}
function tc(e, t, n, r) {
  let i = Qr(n);
  Me(() => {
    if (!e) return;
    function s(u) {
      i.current(u);
    }
    return window.addEventListener(t, s, r), () => window.removeEventListener(t, s, r);
  }, [e, t, r]);
}
const Os = 30;
function rc(e, t, n) {
  let r = pn(e, "outside-click"), i = Qr(n), s = ke(function(a, d) {
    if (a.defaultPrevented) return;
    let c = d(a);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return;
    let w = function y(f) {
      return typeof f == "function" ? y(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(t);
    for (let y of w) if (y !== null && (y.contains(c) || a.composed && a.composedPath().includes(y))) return;
    return !Jo(c, Qo.Loose) && c.tabIndex !== -1 && a.preventDefault(), i.current(a, c);
  }, [i, t]), u = be(null);
  bn(r, "pointerdown", (a) => {
    var d, c;
    u.current = ((c = (d = a.composedPath) == null ? void 0 : d.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), bn(r, "mousedown", (a) => {
    var d, c;
    u.current = ((c = (d = a.composedPath) == null ? void 0 : d.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), bn(r, "click", (a) => {
    n0() || u.current && (s(a, () => u.current), u.current = null);
  }, !0);
  let o = be({ x: 0, y: 0 });
  bn(r, "touchstart", (a) => {
    o.current.x = a.touches[0].clientX, o.current.y = a.touches[0].clientY;
  }, !0), bn(r, "touchend", (a) => {
    let d = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(d.x - o.current.x) >= Os || Math.abs(d.y - o.current.y) >= Os)) return s(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), tc(r, "blur", (a) => s(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function gn(...e) {
  return Ce(() => zr(...e), [...e]);
}
function nc(e, t, n, r) {
  let i = Qr(n);
  Me(() => {
    e = e ?? window;
    function s(u) {
      i.current(u);
    }
    return e.addEventListener(t, s, r), () => e.removeEventListener(t, s, r);
  }, [e, t, r]);
}
function i0(e, t) {
  return Ce(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function o0() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement, i = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, i.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, i = Math.max(0, r.clientWidth - r.offsetWidth), s = Math.max(0, e - i);
    n.style(r, "paddingRight", `${s}px`);
  } };
}
function s0() {
  return ec() ? { before({ doc: e, d: t, meta: n }) {
    function r(i) {
      return n.containers.flatMap((s) => s()).some((s) => s.contains(i));
    }
    t.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let o = Yt();
        o.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => o.dispose()));
      }
      let s = (i = window.scrollY) != null ? i : window.pageYOffset, u = null;
      t.addEventListener(e, "click", (o) => {
        if (o.target instanceof HTMLElement) try {
          let a = o.target.closest("a");
          if (!a) return;
          let { hash: d } = new URL(a.href), c = e.querySelector(d);
          c && !r(c) && (u = c);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (o) => {
        if (o.target instanceof HTMLElement) if (r(o.target)) {
          let a = o.target;
          for (; a.parentElement && r(a.parentElement); ) a = a.parentElement;
          t.style(a, "overscrollBehavior", "contain");
        } else t.style(o.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (o) => {
        if (o.target instanceof HTMLElement) {
          if (o.target.tagName === "INPUT") return;
          if (r(o.target)) {
            let a = o.target;
            for (; a.parentElement && a.dataset.headlessuiPortal !== "" && !(a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth); ) a = a.parentElement;
            a.dataset.headlessuiPortal === "" && o.preventDefault();
          } else o.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var o;
        let a = (o = window.scrollY) != null ? o : window.pageYOffset;
        s !== a && window.scrollTo(0, s), u && u.isConnected && (u.scrollIntoView({ block: "nearest" }), u = null);
      });
    });
  } } : {};
}
function u0() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function a0(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let Kr = Ga(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Yt(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: a0(n) }, i = [s0(), o0(), u0()];
  i.forEach(({ before: s }) => s == null ? void 0 : s(r)), i.forEach(({ after: s }) => s == null ? void 0 : s(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Kr.subscribe(() => {
  let e = Kr.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", i = n.count !== 0;
    (i && !r || !i && r) && Kr.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Kr.dispatch("TEARDOWN", n);
  }
});
function c0(e, t, n = () => ({ containers: [] })) {
  let r = Xa(Kr), i = t ? r.get(t) : void 0, s = i ? i.count > 0 : !1;
  return Ne(() => {
    if (!(!t || !e)) return Kr.dispatch("PUSH", t, n), () => Kr.dispatch("POP", t, n);
  }, [e, t]), s;
}
function ic(e, t, n = () => [document.body]) {
  let r = pn(e, "scroll-lock");
  c0(r, t, (i) => {
    var s;
    return { containers: [...(s = i.containers) != null ? s : [], n] };
  });
}
function Cs(e) {
  return [e.screenX, e.screenY];
}
function l0() {
  let e = be([-1, -1]);
  return { wasMoved(t) {
    let n = Cs(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Cs(t);
  } };
}
function f0(e = 0) {
  let [t, n] = ve(e), r = ke((a) => n(a), [t]), i = ke((a) => n((d) => d | a), [t]), s = ke((a) => (t & a) === a, [t]), u = ke((a) => n((d) => d & ~a), [n]), o = ke((a) => n((d) => d ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: i, hasFlag: s, removeFlag: u, toggleFlag: o };
}
var ks, Bs;
typeof sr < "u" && typeof globalThis < "u" && typeof Element < "u" && ((ks = sr == null ? void 0 : sr.env) == null ? void 0 : ks.NODE_ENV) === "test" && typeof ((Bs = Element == null ? void 0 : Element.prototype) == null ? void 0 : Bs.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var h0 = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(h0 || {});
function oc(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function sc(e, t, n, r) {
  let [i, s] = ve(n), { hasFlag: u, addFlag: o, removeFlag: a } = f0(e && i ? 3 : 0), d = be(!1), c = be(!1), w = dn();
  return Ne(() => {
    var y;
    if (e) {
      if (n && s(!0), !t) {
        n && o(3);
        return;
      }
      return (y = r == null ? void 0 : r.start) == null || y.call(r, n), d0(t, { inFlight: d, prepare() {
        c.current ? c.current = !1 : c.current = d.current, d.current = !0, !c.current && (n ? (o(3), a(4)) : (o(4), a(2)));
      }, run() {
        c.current ? n ? (a(3), o(4)) : (a(4), o(3)) : n ? a(1) : o(1);
      }, done() {
        var f;
        c.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (d.current = !1, a(7), n || s(!1), (f = r == null ? void 0 : r.end) == null || f.call(r, n));
      } });
    }
  }, [e, n, t, w]), e ? [i, { closed: u(1), enter: u(2), leave: u(4), transition: u(2) || u(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function d0(e, { prepare: t, run: n, done: r, inFlight: i }) {
  let s = Yt();
  return g0(e, { prepare: t, inFlight: i }), s.nextFrame(() => {
    n(), s.requestAnimationFrame(() => {
      s.add(p0(e, r));
    });
  }), s.dispose;
}
function p0(e, t) {
  var n, r;
  let i = Yt();
  if (!e) return i.dispose;
  let s = !1;
  i.add(() => {
    s = !0;
  });
  let u = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter((o) => o instanceof CSSTransition)) != null ? r : [];
  return u.length === 0 ? (t(), i.dispose) : (Promise.allSettled(u.map((o) => o.finished)).then(() => {
    s || t();
  }), i.dispose);
}
function g0(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function m0(e, { container: t, accept: n, walk: r }) {
  let i = be(n), s = be(r);
  Me(() => {
    i.current = n, s.current = r;
  }, [n, r]), Ne(() => {
    if (!t || !e) return;
    let u = zr(t);
    if (!u) return;
    let o = i.current, a = s.current, d = Object.assign((w) => o(w), { acceptNode: o }), c = u.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, d, !1);
    for (; c.nextNode(); ) a(c.currentNode);
  }, [t, e, i, s]);
}
function Zo(e, t) {
  let n = be([]), r = Ee(e);
  Me(() => {
    let i = [...n.current];
    for (let [s, u] of t.entries()) if (n.current[s] !== u) {
      let o = r(t, i);
      return n.current = t, o;
    }
  }, [r, ...t]);
}
function _i() {
  return typeof window < "u";
}
function mn(e) {
  return uc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Pt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zt(e) {
  var t;
  return (t = (uc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function uc(e) {
  return _i() ? e instanceof Node || e instanceof Pt(e).Node : !1;
}
function dt(e) {
  return _i() ? e instanceof Element || e instanceof Pt(e).Element : !1;
}
function Vt(e) {
  return _i() ? e instanceof HTMLElement || e instanceof Pt(e).HTMLElement : !1;
}
function Rs(e) {
  return !_i() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Pt(e).ShadowRoot;
}
function Gn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = Lt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function w0(e) {
  return ["table", "td", "th"].includes(mn(e));
}
function Oi(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function es(e) {
  const t = ts(), n = dt(e) ? Lt(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function y0(e) {
  let t = Ir(e);
  for (; Vt(t) && !hn(t); ) {
    if (es(t))
      return t;
    if (Oi(t))
      return null;
    t = Ir(t);
  }
  return null;
}
function ts() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function hn(e) {
  return ["html", "body", "#document"].includes(mn(e));
}
function Lt(e) {
  return Pt(e).getComputedStyle(e);
}
function Ci(e) {
  return dt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ir(e) {
  if (mn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Rs(e) && e.host || // Fallback.
    zt(e)
  );
  return Rs(t) ? t.host : t;
}
function ac(e) {
  const t = Ir(e);
  return hn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Vt(t) && Gn(t) ? t : ac(t);
}
function jn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = ac(e), s = i === ((r = e.ownerDocument) == null ? void 0 : r.body), u = Pt(i);
  if (s) {
    const o = Ho(u);
    return t.concat(u, u.visualViewport || [], Gn(i) ? i : [], o && n ? jn(o) : []);
  }
  return t.concat(i, jn(i, [], n));
}
function Ho(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function E0() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const Gr = Math.min, ft = Math.max, Wn = Math.round, ri = Math.floor, Kt = (e) => ({
  x: e,
  y: e
}), A0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, b0 = {
  start: "end",
  end: "start"
};
function Fs(e, t, n) {
  return ft(e, Gr(t, n));
}
function wn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xr(e) {
  return e.split("-")[0];
}
function Xn(e) {
  return e.split("-")[1];
}
function cc(e) {
  return e === "x" ? "y" : "x";
}
function lc(e) {
  return e === "y" ? "height" : "width";
}
function Xr(e) {
  return ["top", "bottom"].includes(xr(e)) ? "y" : "x";
}
function fc(e) {
  return cc(Xr(e));
}
function v0(e, t, n) {
  n === void 0 && (n = !1);
  const r = Xn(e), i = fc(e), s = lc(i);
  let u = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (u = Pi(u)), [u, Pi(u)];
}
function P0(e) {
  const t = Pi(e);
  return [Mo(e), t, Mo(t)];
}
function Mo(e) {
  return e.replace(/start|end/g, (t) => b0[t]);
}
function S0(e, t, n) {
  const r = ["left", "right"], i = ["right", "left"], s = ["top", "bottom"], u = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : r : t ? r : i;
    case "left":
    case "right":
      return t ? s : u;
    default:
      return [];
  }
}
function T0(e, t, n, r) {
  const i = Xn(e);
  let s = S0(xr(e), n === "start", r);
  return i && (s = s.map((u) => u + "-" + i), t && (s = s.concat(s.map(Mo)))), s;
}
function Pi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => A0[t]);
}
function I0(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function x0(e) {
  return typeof e != "number" ? I0(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Si(e) {
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
function Ns(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const s = Xr(t), u = fc(t), o = lc(u), a = xr(t), d = s === "y", c = r.x + r.width / 2 - i.width / 2, w = r.y + r.height / 2 - i.height / 2, y = r[o] / 2 - i[o] / 2;
  let f;
  switch (a) {
    case "top":
      f = {
        x: c,
        y: r.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: w
      };
      break;
    case "left":
      f = {
        x: r.x - i.width,
        y: w
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (Xn(t)) {
    case "start":
      f[u] -= y * (n && d ? -1 : 1);
      break;
    case "end":
      f[u] += y * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const _0 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: u
  } = n, o = s.filter(Boolean), a = await (u.isRTL == null ? void 0 : u.isRTL(t));
  let d = await u.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: c,
    y: w
  } = Ns(d, r, a), y = r, f = {}, E = 0;
  for (let b = 0; b < o.length; b++) {
    const {
      name: I,
      fn: x
    } = o[b], {
      x: m,
      y: T,
      data: C,
      reset: j
    } = await x({
      x: c,
      y: w,
      initialPlacement: r,
      placement: y,
      strategy: i,
      middlewareData: f,
      rects: d,
      platform: u,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = m ?? c, w = T ?? w, f = {
      ...f,
      [I]: {
        ...f[I],
        ...C
      }
    }, j && E <= 50 && (E++, typeof j == "object" && (j.placement && (y = j.placement), j.rects && (d = j.rects === !0 ? await u.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : j.rects), {
      x: c,
      y: w
    } = Ns(d, y, a)), b = -1);
  }
  return {
    x: c,
    y: w,
    placement: y,
    strategy: i,
    middlewareData: f
  };
};
async function ki(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: i,
    platform: s,
    rects: u,
    elements: o,
    strategy: a
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: w = "floating",
    altBoundary: y = !1,
    padding: f = 0
  } = wn(t, e), E = x0(f), I = o[y ? w === "floating" ? "reference" : "floating" : w], x = Si(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(I))) == null || n ? I : I.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(o.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: a
  })), m = w === "floating" ? {
    x: r,
    y: i,
    width: u.floating.width,
    height: u.floating.height
  } : u.reference, T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(o.floating)), C = await (s.isElement == null ? void 0 : s.isElement(T)) ? await (s.getScale == null ? void 0 : s.getScale(T)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, j = Si(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: m,
    offsetParent: T,
    strategy: a
  }) : m);
  return {
    top: (x.top - j.top + E.top) / C.y,
    bottom: (j.bottom - x.bottom + E.bottom) / C.y,
    left: (x.left - j.left + E.left) / C.x,
    right: (j.right - x.right + E.right) / C.x
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
        middlewareData: s,
        rects: u,
        initialPlacement: o,
        platform: a,
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: w = !0,
        fallbackPlacements: y,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: E = "none",
        flipAlignment: b = !0,
        ...I
      } = wn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const x = xr(i), m = Xr(o), T = xr(o) === o, C = await (a.isRTL == null ? void 0 : a.isRTL(d.floating)), j = y || (T || !b ? [Pi(o)] : P0(o)), U = E !== "none";
      !y && U && j.push(...T0(o, b, E, C));
      const K = [o, ...j], S = await ki(t, I), A = [];
      let _ = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (c && A.push(S[x]), w) {
        const W = v0(i, u, C);
        A.push(S[W[0]], S[W[1]]);
      }
      if (_ = [..._, {
        placement: i,
        overflows: A
      }], !A.every((W) => W <= 0)) {
        var N, P;
        const W = (((N = s.flip) == null ? void 0 : N.index) || 0) + 1, H = K[W];
        if (H)
          return {
            data: {
              index: W,
              overflows: _
            },
            reset: {
              placement: H
            }
          };
        let $ = (P = _.filter((G) => G.overflows[0] <= 0).sort((G, k) => G.overflows[1] - k.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!$)
          switch (f) {
            case "bestFit": {
              var F;
              const G = (F = _.filter((k) => {
                if (U) {
                  const M = Xr(k.placement);
                  return M === m || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((M) => M > 0).reduce((M, Y) => M + Y, 0)]).sort((k, M) => k[1] - M[1])[0]) == null ? void 0 : F[0];
              G && ($ = G);
              break;
            }
            case "initialPlacement":
              $ = o;
              break;
          }
        if (i !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
async function C0(e, t) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), u = xr(n), o = Xn(n), a = Xr(n) === "y", d = ["left", "top"].includes(u) ? -1 : 1, c = s && a ? -1 : 1, w = wn(t, e);
  let {
    mainAxis: y,
    crossAxis: f,
    alignmentAxis: E
  } = typeof w == "number" ? {
    mainAxis: w,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: w.mainAxis || 0,
    crossAxis: w.crossAxis || 0,
    alignmentAxis: w.alignmentAxis
  };
  return o && typeof E == "number" && (f = o === "end" ? E * -1 : E), a ? {
    x: f * c,
    y: y * d
  } : {
    x: y * d,
    y: f * c
  };
}
const k0 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: i,
        y: s,
        placement: u,
        middlewareData: o
      } = t, a = await C0(t, e);
      return u === ((n = o.offset) == null ? void 0 : n.placement) && (r = o.arrow) != null && r.alignmentOffset ? {} : {
        x: i + a.x,
        y: s + a.y,
        data: {
          ...a,
          placement: u
        }
      };
    }
  };
}, B0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: u = !1,
        limiter: o = {
          fn: (I) => {
            let {
              x,
              y: m
            } = I;
            return {
              x,
              y: m
            };
          }
        },
        ...a
      } = wn(e, t), d = {
        x: n,
        y: r
      }, c = await ki(t, a), w = Xr(xr(i)), y = cc(w);
      let f = d[y], E = d[w];
      if (s) {
        const I = y === "y" ? "top" : "left", x = y === "y" ? "bottom" : "right", m = f + c[I], T = f - c[x];
        f = Fs(m, f, T);
      }
      if (u) {
        const I = w === "y" ? "top" : "left", x = w === "y" ? "bottom" : "right", m = E + c[I], T = E - c[x];
        E = Fs(m, E, T);
      }
      const b = o.fn({
        ...t,
        [y]: f,
        [w]: E
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [y]: s,
            [w]: u
          }
        }
      };
    }
  };
}, R0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: i,
        rects: s,
        platform: u,
        elements: o
      } = t, {
        apply: a = () => {
        },
        ...d
      } = wn(e, t), c = await ki(t, d), w = xr(i), y = Xn(i), f = Xr(i) === "y", {
        width: E,
        height: b
      } = s.floating;
      let I, x;
      w === "top" || w === "bottom" ? (I = w, x = y === (await (u.isRTL == null ? void 0 : u.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (x = w, I = y === "end" ? "top" : "bottom");
      const m = b - c.top - c.bottom, T = E - c.left - c.right, C = Gr(b - c[I], m), j = Gr(E - c[x], T), U = !t.middlewareData.shift;
      let K = C, S = j;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = T), (r = t.middlewareData.shift) != null && r.enabled.y && (K = m), U && !y) {
        const _ = ft(c.left, 0), N = ft(c.right, 0), P = ft(c.top, 0), F = ft(c.bottom, 0);
        f ? S = E - 2 * (_ !== 0 || N !== 0 ? _ + N : ft(c.left, c.right)) : K = b - 2 * (P !== 0 || F !== 0 ? P + F : ft(c.top, c.bottom));
      }
      await a({
        ...t,
        availableWidth: S,
        availableHeight: K
      });
      const A = await u.getDimensions(o.floating);
      return E !== A.width || b !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function hc(e) {
  const t = Lt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = Vt(e), s = i ? e.offsetWidth : n, u = i ? e.offsetHeight : r, o = Wn(n) !== s || Wn(r) !== u;
  return o && (n = s, r = u), {
    width: n,
    height: r,
    $: o
  };
}
function rs(e) {
  return dt(e) ? e : e.contextElement;
}
function ln(e) {
  const t = rs(e);
  if (!Vt(t))
    return Kt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: s
  } = hc(t);
  let u = (s ? Wn(n.width) : n.width) / r, o = (s ? Wn(n.height) : n.height) / i;
  return (!u || !Number.isFinite(u)) && (u = 1), (!o || !Number.isFinite(o)) && (o = 1), {
    x: u,
    y: o
  };
}
const F0 = /* @__PURE__ */ Kt(0);
function dc(e) {
  const t = Pt(e);
  return !ts() || !t.visualViewport ? F0 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function N0(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Pt(e) ? !1 : t;
}
function Yr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), s = rs(e);
  let u = Kt(1);
  t && (r ? dt(r) && (u = ln(r)) : u = ln(e));
  const o = N0(s, n, r) ? dc(s) : Kt(0);
  let a = (i.left + o.x) / u.x, d = (i.top + o.y) / u.y, c = i.width / u.x, w = i.height / u.y;
  if (s) {
    const y = Pt(s), f = r && dt(r) ? Pt(r) : r;
    let E = y, b = Ho(E);
    for (; b && r && f !== E; ) {
      const I = ln(b), x = b.getBoundingClientRect(), m = Lt(b), T = x.left + (b.clientLeft + parseFloat(m.paddingLeft)) * I.x, C = x.top + (b.clientTop + parseFloat(m.paddingTop)) * I.y;
      a *= I.x, d *= I.y, c *= I.x, w *= I.y, a += T, d += C, E = Pt(b), b = Ho(E);
    }
  }
  return Si({
    width: c,
    height: w,
    x: a,
    y: d
  });
}
function ns(e, t) {
  const n = Ci(e).scrollLeft;
  return t ? t.left + n : Yr(zt(e)).left + n;
}
function pc(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ns(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: i,
    y: s
  };
}
function U0(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: i
  } = e;
  const s = i === "fixed", u = zt(r), o = t ? Oi(t.floating) : !1;
  if (r === u || o && s)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Kt(1);
  const c = Kt(0), w = Vt(r);
  if ((w || !w && !s) && ((mn(r) !== "body" || Gn(u)) && (a = Ci(r)), Vt(r))) {
    const f = Yr(r);
    d = ln(r), c.x = f.x + r.clientLeft, c.y = f.y + r.clientTop;
  }
  const y = u && !w && !s ? pc(u, a, !0) : Kt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - a.scrollLeft * d.x + c.x + y.x,
    y: n.y * d.y - a.scrollTop * d.y + c.y + y.y
  };
}
function L0(e) {
  return Array.from(e.getClientRects());
}
function H0(e) {
  const t = zt(e), n = Ci(e), r = e.ownerDocument.body, i = ft(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = ft(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let u = -n.scrollLeft + ns(e);
  const o = -n.scrollTop;
  return Lt(r).direction === "rtl" && (u += ft(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: s,
    x: u,
    y: o
  };
}
function M0(e, t) {
  const n = Pt(e), r = zt(e), i = n.visualViewport;
  let s = r.clientWidth, u = r.clientHeight, o = 0, a = 0;
  if (i) {
    s = i.width, u = i.height;
    const d = ts();
    (!d || d && t === "fixed") && (o = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: s,
    height: u,
    x: o,
    y: a
  };
}
function D0(e, t) {
  const n = Yr(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, s = Vt(e) ? ln(e) : Kt(1), u = e.clientWidth * s.x, o = e.clientHeight * s.y, a = i * s.x, d = r * s.y;
  return {
    width: u,
    height: o,
    x: a,
    y: d
  };
}
function Us(e, t, n) {
  let r;
  if (t === "viewport")
    r = M0(e, n);
  else if (t === "document")
    r = H0(zt(e));
  else if (dt(t))
    r = D0(t, n);
  else {
    const i = dc(e);
    r = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Si(r);
}
function gc(e, t) {
  const n = Ir(e);
  return n === t || !dt(n) || hn(n) ? !1 : Lt(n).position === "fixed" || gc(n, t);
}
function $0(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = jn(e, [], !1).filter((o) => dt(o) && mn(o) !== "body"), i = null;
  const s = Lt(e).position === "fixed";
  let u = s ? Ir(e) : e;
  for (; dt(u) && !hn(u); ) {
    const o = Lt(u), a = es(u);
    !a && o.position === "fixed" && (i = null), (s ? !a && !i : !a && o.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Gn(u) && !a && gc(e, u)) ? r = r.filter((c) => c !== u) : i = o, u = Ir(u);
  }
  return t.set(e, r), r;
}
function j0(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const u = [...n === "clippingAncestors" ? Oi(t) ? [] : $0(t, this._c) : [].concat(n), r], o = u[0], a = u.reduce((d, c) => {
    const w = Us(t, c, i);
    return d.top = ft(w.top, d.top), d.right = Gr(w.right, d.right), d.bottom = Gr(w.bottom, d.bottom), d.left = ft(w.left, d.left), d;
  }, Us(t, o, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function W0(e) {
  const {
    width: t,
    height: n
  } = hc(e);
  return {
    width: t,
    height: n
  };
}
function K0(e, t, n) {
  const r = Vt(t), i = zt(t), s = n === "fixed", u = Yr(e, !0, s, t);
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Kt(0);
  if (r || !r && !s)
    if ((mn(t) !== "body" || Gn(i)) && (o = Ci(t)), r) {
      const y = Yr(t, !0, s, t);
      a.x = y.x + t.clientLeft, a.y = y.y + t.clientTop;
    } else i && (a.x = ns(i));
  const d = i && !r && !s ? pc(i, o) : Kt(0), c = u.left + o.scrollLeft - a.x - d.x, w = u.top + o.scrollTop - a.y - d.y;
  return {
    x: c,
    y: w,
    width: u.width,
    height: u.height
  };
}
function Yi(e) {
  return Lt(e).position === "static";
}
function Ls(e, t) {
  if (!Vt(e) || Lt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return zt(e) === n && (n = n.ownerDocument.body), n;
}
function mc(e, t) {
  const n = Pt(e);
  if (Oi(e))
    return n;
  if (!Vt(e)) {
    let i = Ir(e);
    for (; i && !hn(i); ) {
      if (dt(i) && !Yi(i))
        return i;
      i = Ir(i);
    }
    return n;
  }
  let r = Ls(e, t);
  for (; r && w0(r) && Yi(r); )
    r = Ls(r, t);
  return r && hn(r) && Yi(r) && !es(r) ? n : r || y0(e) || n;
}
const q0 = async function(e) {
  const t = this.getOffsetParent || mc, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: K0(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function V0(e) {
  return Lt(e).direction === "rtl";
}
const G0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: U0,
  getDocumentElement: zt,
  getClippingRect: j0,
  getOffsetParent: mc,
  getElementRects: q0,
  getClientRects: L0,
  getDimensions: W0,
  getScale: ln,
  isElement: dt,
  isRTL: V0
};
function X0(e, t) {
  let n = null, r;
  const i = zt(e);
  function s() {
    var o;
    clearTimeout(r), (o = n) == null || o.disconnect(), n = null;
  }
  function u(o, a) {
    o === void 0 && (o = !1), a === void 0 && (a = 1), s();
    const {
      left: d,
      top: c,
      width: w,
      height: y
    } = e.getBoundingClientRect();
    if (o || t(), !w || !y)
      return;
    const f = ri(c), E = ri(i.clientWidth - (d + w)), b = ri(i.clientHeight - (c + y)), I = ri(d), m = {
      rootMargin: -f + "px " + -E + "px " + -b + "px " + -I + "px",
      threshold: ft(0, Gr(1, a)) || 1
    };
    let T = !0;
    function C(j) {
      const U = j[0].intersectionRatio;
      if (U !== a) {
        if (!T)
          return u();
        U ? u(!1, U) : r = setTimeout(() => {
          u(!1, 1e-7);
        }, 1e3);
      }
      T = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...m,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, m);
    }
    n.observe(e);
  }
  return u(!0), s;
}
function Y0(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: u = typeof ResizeObserver == "function",
    layoutShift: o = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, d = rs(e), c = i || s ? [...d ? jn(d) : [], ...jn(t)] : [];
  c.forEach((x) => {
    i && x.addEventListener("scroll", n, {
      passive: !0
    }), s && x.addEventListener("resize", n);
  });
  const w = d && o ? X0(d, n) : null;
  let y = -1, f = null;
  u && (f = new ResizeObserver((x) => {
    let [m] = x;
    m && m.target === d && f && (f.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var T;
      (T = f) == null || T.observe(t);
    })), n();
  }), d && !a && f.observe(d), f.observe(t));
  let E, b = a ? Yr(e) : null;
  a && I();
  function I() {
    const x = Yr(e);
    b && (x.x !== b.x || x.y !== b.y || x.width !== b.width || x.height !== b.height) && n(), b = x, E = requestAnimationFrame(I);
  }
  return n(), () => {
    var x;
    c.forEach((m) => {
      i && m.removeEventListener("scroll", n), s && m.removeEventListener("resize", n);
    }), w == null || w(), (x = f) == null || x.disconnect(), f = null, a && cancelAnimationFrame(E);
  };
}
const zi = ki, z0 = k0, Q0 = B0, J0 = O0, Z0 = R0, eh = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: G0,
    ...n
  }, s = {
    ...i.platform,
    _c: r
  };
  return _0(e, t, {
    ...i,
    platform: s
  });
};
var wi = typeof document < "u" ? qo : Me;
function Ti(e, t) {
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
        if (!Ti(e[r], t[r]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = i[r];
      if (!(s === "_owner" && e.$$typeof) && !Ti(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function wc(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Hs(e, t) {
  const n = wc(e);
  return Math.round(t * n) / n;
}
function Qi(e) {
  const t = he.useRef(e);
  return wi(() => {
    t.current = e;
  }), t;
}
function th(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: i,
    elements: {
      reference: s,
      floating: u
    } = {},
    transform: o = !0,
    whileElementsMounted: a,
    open: d
  } = e, [c, w] = he.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [y, f] = he.useState(r);
  Ti(y, r) || f(r);
  const [E, b] = he.useState(null), [I, x] = he.useState(null), m = he.useCallback((k) => {
    k !== U.current && (U.current = k, b(k));
  }, []), T = he.useCallback((k) => {
    k !== K.current && (K.current = k, x(k));
  }, []), C = s || E, j = u || I, U = he.useRef(null), K = he.useRef(null), S = he.useRef(c), A = a != null, _ = Qi(a), N = Qi(i), P = Qi(d), F = he.useCallback(() => {
    if (!U.current || !K.current)
      return;
    const k = {
      placement: t,
      strategy: n,
      middleware: y
    };
    N.current && (k.platform = N.current), eh(U.current, K.current, k).then((M) => {
      const Y = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: P.current !== !1
      };
      W.current && !Ti(S.current, Y) && (S.current = Y, yi.flushSync(() => {
        w(Y);
      }));
    });
  }, [y, t, n, N, P]);
  wi(() => {
    d === !1 && S.current.isPositioned && (S.current.isPositioned = !1, w((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [d]);
  const W = he.useRef(!1);
  wi(() => (W.current = !0, () => {
    W.current = !1;
  }), []), wi(() => {
    if (C && (U.current = C), j && (K.current = j), C && j) {
      if (_.current)
        return _.current(C, j, F);
      F();
    }
  }, [C, j, F, _, A]);
  const H = he.useMemo(() => ({
    reference: U,
    floating: K,
    setReference: m,
    setFloating: T
  }), [m, T]), $ = he.useMemo(() => ({
    reference: C,
    floating: j
  }), [C, j]), G = he.useMemo(() => {
    const k = {
      position: n,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return k;
    const M = Hs($.floating, c.x), Y = Hs($.floating, c.y);
    return o ? {
      ...k,
      transform: "translate(" + M + "px, " + Y + "px)",
      ...wc($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: M,
      top: Y
    };
  }, [n, o, $.floating, c.x, c.y]);
  return he.useMemo(() => ({
    ...c,
    update: F,
    refs: H,
    elements: $,
    floatingStyles: G
  }), [c, F, H, $, G]);
}
const yc = (e, t) => ({
  ...z0(e),
  options: [e, t]
}), rh = (e, t) => ({
  ...Q0(e),
  options: [e, t]
}), nh = (e, t) => ({
  ...J0(e),
  options: [e, t]
}), ih = (e, t) => ({
  ...Z0(e),
  options: [e, t]
}), Ec = {
  ...he
}, oh = Ec.useInsertionEffect, sh = oh || ((e) => e());
function Ac(e) {
  const t = he.useRef(() => {
    if (sr.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return sh(() => {
    t.current = e;
  }), he.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var Do = typeof document < "u" ? qo : Me;
let Ms = !1, uh = 0;
const Ds = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + uh++
);
function ah() {
  const [e, t] = he.useState(() => Ms ? Ds() : void 0);
  return Do(() => {
    e == null && t(Ds());
  }, []), he.useEffect(() => {
    Ms = !0;
  }, []), e;
}
const ch = Ec.useId, lh = ch || ah;
let Kn;
sr.env.NODE_ENV !== "production" && (Kn = /* @__PURE__ */ new Set());
function fh() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const i = "Floating UI: " + n.join(" ");
  if (!((e = Kn) != null && e.has(i))) {
    var s;
    (s = Kn) == null || s.add(i), console.warn(i);
  }
}
function hh() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const i = "Floating UI: " + n.join(" ");
  if (!((e = Kn) != null && e.has(i))) {
    var s;
    (s = Kn) == null || s.add(i), console.error(i);
  }
}
function dh() {
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
const ph = /* @__PURE__ */ he.createContext(null), gh = /* @__PURE__ */ he.createContext(null), mh = () => {
  var e;
  return ((e = he.useContext(ph)) == null ? void 0 : e.id) || null;
}, wh = () => he.useContext(gh), yh = "data-floating-ui-focusable";
function Eh(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, i = lh(), s = he.useRef({}), [u] = he.useState(() => dh()), o = mh() != null;
  if (sr.env.NODE_ENV !== "production") {
    const f = r.reference;
    f && !dt(f) && hh("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [a, d] = he.useState(r.reference), c = Ac((f, E, b) => {
    s.current.openEvent = f ? E : void 0, u.emit("openchange", {
      open: f,
      event: E,
      reason: b,
      nested: o
    }), n == null || n(f, E, b);
  }), w = he.useMemo(() => ({
    setPositionReference: d
  }), []), y = he.useMemo(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return he.useMemo(() => ({
    dataRef: s,
    open: t,
    onOpenChange: c,
    elements: y,
    events: u,
    floatingId: i,
    refs: w
  }), [t, c, y, u, i, w]);
}
function Ah(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Eh({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, i = r.elements, [s, u] = he.useState(null), [o, a] = he.useState(null), c = (i == null ? void 0 : i.domReference) || s, w = he.useRef(null), y = wh();
  Do(() => {
    c && (w.current = c);
  }, [c]);
  const f = th({
    ...e,
    elements: {
      ...i,
      ...o && {
        reference: o
      }
    }
  }), E = he.useCallback((T) => {
    const C = dt(T) ? {
      getBoundingClientRect: () => T.getBoundingClientRect(),
      contextElement: T
    } : T;
    a(C), f.refs.setReference(C);
  }, [f.refs]), b = he.useCallback((T) => {
    (dt(T) || T === null) && (w.current = T, u(T)), (dt(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    T !== null && !dt(T)) && f.refs.setReference(T);
  }, [f.refs]), I = he.useMemo(() => ({
    ...f.refs,
    setReference: b,
    setPositionReference: E,
    domReference: w
  }), [f.refs, b, E]), x = he.useMemo(() => ({
    ...f.elements,
    domReference: c
  }), [f.elements, c]), m = he.useMemo(() => ({
    ...f,
    ...r,
    refs: I,
    elements: x,
    nodeId: t
  }), [f, I, x, t, r]);
  return Do(() => {
    r.dataRef.current.floatingContext = m;
    const T = y == null ? void 0 : y.nodesRef.current.find((C) => C.id === t);
    T && (T.context = m);
  }), he.useMemo(() => ({
    ...f,
    context: m,
    refs: I,
    elements: x
  }), [f, I, x, m]);
}
const $s = "active", js = "selected";
function Ji(e, t, n) {
  const r = /* @__PURE__ */ new Map(), i = n === "item";
  let s = e;
  if (i && e) {
    const {
      [$s]: u,
      [js]: o,
      ...a
    } = e;
    s = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [yh]: ""
    },
    ...s,
    ...t.map((u) => {
      const o = u ? u[n] : null;
      return typeof o == "function" ? e ? o(e) : null : o;
    }).concat(e).reduce((u, o) => (o && Object.entries(o).forEach((a) => {
      let [d, c] = a;
      if (!(i && [$s, js].includes(d)))
        if (d.indexOf("on") === 0) {
          if (r.has(d) || r.set(d, []), typeof c == "function") {
            var w;
            (w = r.get(d)) == null || w.push(c), u[d] = function() {
              for (var y, f = arguments.length, E = new Array(f), b = 0; b < f; b++)
                E[b] = arguments[b];
              return (y = r.get(d)) == null ? void 0 : y.map((I) => I(...E)).find((I) => I !== void 0);
            };
          }
        } else
          u[d] = c;
    }), u), {})
  };
}
function bh(e) {
  e === void 0 && (e = []);
  const t = e.map((o) => o == null ? void 0 : o.reference), n = e.map((o) => o == null ? void 0 : o.floating), r = e.map((o) => o == null ? void 0 : o.item), i = he.useCallback(
    (o) => Ji(o, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), s = he.useCallback(
    (o) => Ji(o, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), u = he.useCallback(
    (o) => Ji(o, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return he.useMemo(() => ({
    getReferenceProps: i,
    getFloatingProps: s,
    getItemProps: u
  }), [i, s, u]);
}
function Ws(e, t) {
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
const vh = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: i,
      offset: s = 0,
      index: u = 0,
      minItemsVisible: o = 4,
      referenceOverflowThreshold: a = 0,
      scrollRef: d,
      ...c
    } = wn(e, t), {
      rects: w,
      elements: {
        floating: y
      }
    } = t, f = n.current[u], E = (d == null ? void 0 : d.current) || y, b = y.clientTop || E.clientTop, I = y.clientTop !== 0, x = E.clientTop !== 0, m = y === E;
    if (sr.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || fh('`placement` side must be "bottom" when using the `inner`', "middleware.")), !f)
      return {};
    const T = {
      ...t,
      ...await yc(-f.offsetTop - y.clientTop - w.reference.height / 2 - f.offsetHeight / 2 - s).fn(t)
    }, C = await zi(Ws(T, E.scrollHeight + b + y.clientTop), c), j = await zi(T, {
      ...c,
      elementContext: "reference"
    }), U = ft(0, C.top), K = T.y + U, _ = (E.scrollHeight > E.clientHeight ? (N) => N : Wn)(ft(0, E.scrollHeight + (I && m || x ? b * 2 : 0) - U - ft(0, C.bottom)));
    if (E.style.maxHeight = _ + "px", E.scrollTop = U, i) {
      const N = E.offsetHeight < f.offsetHeight * Gr(o, n.current.length) - 1 || j.top >= -a || j.bottom >= -a;
      yi.flushSync(() => i(N));
    }
    return r && (r.current = await zi(Ws({
      ...T,
      y: K
    }, E.offsetHeight + b + y.clientTop), c)), {
      y: K
    };
  }
});
function Ph(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: i = !0,
    overflowRef: s,
    scrollRef: u,
    onChange: o
  } = t, a = Ac(o), d = he.useRef(!1), c = he.useRef(null), w = he.useRef(null);
  he.useEffect(() => {
    if (!i) return;
    function f(b) {
      if (b.ctrlKey || !E || s.current == null)
        return;
      const I = b.deltaY, x = s.current.top >= -0.5, m = s.current.bottom >= -0.5, T = E.scrollHeight - E.clientHeight, C = I < 0 ? -1 : 1, j = I < 0 ? "max" : "min";
      E.scrollHeight <= E.clientHeight || (!x && I > 0 || !m && I < 0 ? (b.preventDefault(), yi.flushSync(() => {
        a((U) => U + Math[j](I, T * C));
      })) : /firefox/i.test(E0()) && (E.scrollTop += I));
    }
    const E = (u == null ? void 0 : u.current) || r.floating;
    if (n && E)
      return E.addEventListener("wheel", f), requestAnimationFrame(() => {
        c.current = E.scrollTop, s.current != null && (w.current = {
          ...s.current
        });
      }), () => {
        c.current = null, w.current = null, E.removeEventListener("wheel", f);
      };
  }, [i, n, r.floating, s, u, a]);
  const y = he.useMemo(() => ({
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
      const f = (u == null ? void 0 : u.current) || r.floating;
      if (!(!s.current || !f || !d.current)) {
        if (c.current !== null) {
          const E = f.scrollTop - c.current;
          (s.current.bottom < -0.5 && E < -1 || s.current.top < -0.5 && E > 1) && yi.flushSync(() => a((b) => b + E));
        }
        requestAnimationFrame(() => {
          c.current = f.scrollTop;
        });
      }
    }
  }), [r.floating, a, s, u]);
  return he.useMemo(() => i ? {
    floating: y
  } : {}, [i, y]);
}
let yn = ut({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
yn.displayName = "FloatingContext";
let is = ut(null);
is.displayName = "PlacementContext";
function Sh(e) {
  return Ce(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function Th() {
  return Ve(yn).setReference;
}
function Ih() {
  return Ve(yn).getReferenceProps;
}
function xh() {
  let { getFloatingProps: e, slot: t } = Ve(yn);
  return ke((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function _h(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = Ve(is), n = Ce(() => e, [JSON.stringify(e, (i, s) => {
    var u;
    return (u = s == null ? void 0 : s.outerHTML) != null ? u : s;
  })]);
  Ne(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = Ve(yn);
  return Ce(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let Ks = 4;
function Oh({ children: e, enabled: t = !0 }) {
  let [n, r] = ve(null), [i, s] = ve(0), u = be(null), [o, a] = ve(null);
  Ch(o);
  let d = t && n !== null && o !== null, { to: c = "bottom", gap: w = 0, offset: y = 0, padding: f = 0, inner: E } = kh(n, o), [b, I = "center"] = c.split(" ");
  Ne(() => {
    d && s(0);
  }, [d]);
  let { refs: x, floatingStyles: m, context: T } = Ah({ open: d, placement: b === "selection" ? I === "center" ? "bottom" : `bottom-${I}` : I === "center" ? `${b}` : `${b}-${I}`, strategy: "absolute", transform: !1, middleware: [yc({ mainAxis: b === "selection" ? 0 : w, crossAxis: y }), rh({ padding: f }), b !== "selection" && nh({ padding: f }), b === "selection" && E ? vh({ ...E, padding: f, overflowRef: u, offset: i, minItemsVisible: Ks, referenceOverflowThreshold: f, onFallbackChange(N) {
    var P, F;
    if (!N) return;
    let W = T.elements.floating;
    if (!W) return;
    let H = parseFloat(getComputedStyle(W).scrollPaddingBottom) || 0, $ = Math.min(Ks, W.childElementCount), G = 0, k = 0;
    for (let M of (F = (P = T.elements.floating) == null ? void 0 : P.childNodes) != null ? F : []) if (M instanceof HTMLElement) {
      let Y = M.offsetTop, Z = Y + M.clientHeight + H, ne = W.scrollTop, se = ne + W.clientHeight;
      if (Y >= ne && Z <= se) $--;
      else {
        k = Math.max(0, Math.min(Z, se) - Math.max(Y, ne)), G = M.clientHeight;
        break;
      }
    }
    $ >= 1 && s((M) => {
      let Y = G * $ - k + H;
      return M >= Y ? M : Y;
    });
  } }) : null, ih({ padding: f, apply({ availableWidth: N, availableHeight: P, elements: F }) {
    Object.assign(F.floating.style, { overflow: "auto", maxWidth: `${N}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${P}px)` });
  } })].filter(Boolean), whileElementsMounted: Y0 }), [C = b, j = I] = T.placement.split("-");
  b === "selection" && (C = "selection");
  let U = Ce(() => ({ anchor: [C, j].filter(Boolean).join(" ") }), [C, j]), K = Ph(T, { overflowRef: u, onChange: s }), { getReferenceProps: S, getFloatingProps: A } = bh([K]), _ = Ee((N) => {
    a(N), x.setFloating(N);
  });
  return he.createElement(is.Provider, { value: r }, he.createElement(yn.Provider, { value: { setFloating: _, setReference: x.setReference, styles: m, getReferenceProps: S, getFloatingProps: A, slot: U } }, e));
}
function Ch(e) {
  Ne(() => {
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
function kh(e, t) {
  var n, r, i;
  let s = Zi((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), u = Zi((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), o = Zi((i = e == null ? void 0 : e.padding) != null ? i : "var(--anchor-padding, 0)", t);
  return { ...e, gap: s, offset: u, padding: o };
}
function Zi(e, t, n = void 0) {
  let r = dn(), i = Ee((a, d) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!d) return [n, null];
      let c = qs(a, d);
      return [c, (w) => {
        let y = bc(a);
        {
          let f = y.map((E) => window.getComputedStyle(d).getPropertyValue(E));
          r.requestAnimationFrame(function E() {
            r.nextFrame(E);
            let b = !1;
            for (let [x, m] of y.entries()) {
              let T = window.getComputedStyle(d).getPropertyValue(m);
              if (f[x] !== T) {
                f[x] = T, b = !0;
                break;
              }
            }
            if (!b) return;
            let I = qs(a, d);
            c !== I && (w(I), c = I);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), s = Ce(() => i(e, t)[0], [e, t]), [u = s, o] = ve();
  return Ne(() => {
    let [a, d] = i(e, t);
    if (o(a), !!d) return d(o);
  }, [e, t]), u;
}
function bc(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), i = t[1].slice(n + 1).trim();
    return i ? [r, ...bc(i)] : [r];
  }
  return [];
}
function qs(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
let Bi = ut(null);
Bi.displayName = "OpenClosedContext";
var wt = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(wt || {});
function Yn() {
  return Ve(Bi);
}
function vc({ value: e, children: t }) {
  return de.createElement(Bi.Provider, { value: e }, t);
}
function Bh({ children: e }) {
  return de.createElement(Bi.Provider, { value: null }, e);
}
function Rh(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Sr = [];
Rh(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || Sr[0] === t.target) return;
    let n = t.target;
    n = n.closest(vi), Sr.unshift(n ?? t.target), Sr = Sr.filter((r) => r != null && r.isConnected), Sr.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Fh(e) {
  throw new Error("Unexpected object: " + e);
}
var ht = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ht || {});
function eo(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), i = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let s = 0; s < n.length; ++s) if (!t.resolveDisabled(n[s], s, n)) return s;
      return r;
    }
    case 1: {
      i === -1 && (i = n.length);
      for (let s = i - 1; s >= 0; --s) if (!t.resolveDisabled(n[s], s, n)) return s;
      return r;
    }
    case 2: {
      for (let s = i + 1; s < n.length; ++s) if (!t.resolveDisabled(n[s], s, n)) return s;
      return r;
    }
    case 3: {
      for (let s = n.length - 1; s >= 0; --s) if (!t.resolveDisabled(n[s], s, n)) return s;
      return r;
    }
    case 4: {
      for (let s = 0; s < n.length; ++s) if (t.resolveId(n[s], s, n) === e.id) return s;
      return r;
    }
    case 5:
      return null;
    default:
      Fh(e);
  }
}
function Pc(e) {
  let t = Ee(e), n = be(!1);
  Me(() => (n.current = !1, () => {
    n.current = !0, Ii(() => {
      n.current && t();
    });
  }), [t]);
}
function Nh() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in he ? ((t) => t.useSyncExternalStore)(he)(() => () => {
  }, () => !1, () => !e) : !1;
}
function zn() {
  let e = Nh(), [t, n] = he.useState(qr.isHandoffComplete);
  return t && qr.isHandoffComplete === !1 && n(!1), he.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), he.useEffect(() => qr.handoff(), []), e ? !1 : t;
}
let Sc = ut(!1);
function Uh() {
  return Ve(Sc);
}
function Vs(e) {
  return de.createElement(Sc.Provider, { value: e.force }, e.children);
}
function Lh(e) {
  let t = Uh(), n = Ve(Ic), r = gn(e), [i, s] = ve(() => {
    var u;
    if (!t && n !== null) return (u = n.current) != null ? u : null;
    if (qr.isServer) return null;
    let o = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (o) return o;
    if (r === null) return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return Me(() => {
    i !== null && (r != null && r.body.contains(i) || r == null || r.body.appendChild(i));
  }, [i, r]), Me(() => {
    t || n !== null && s(n.current);
  }, [n, s, t]), i;
}
let Tc = ot, Hh = Ge(function(e, t) {
  let n = e, r = be(null), i = Et(Ff((w) => {
    r.current = w;
  }), t), s = gn(r), u = Lh(r), [o] = ve(() => {
    var w;
    return qr.isServer ? null : (w = s == null ? void 0 : s.createElement("div")) != null ? w : null;
  }), a = Ve($o), d = zn();
  Ne(() => {
    !u || !o || u.contains(o) || (o.setAttribute("data-headlessui-portal", ""), u.appendChild(o));
  }, [u, o]), Ne(() => {
    if (o && a) return a.register(o);
  }, [a, o]), Pc(() => {
    var w;
    !u || !o || (o instanceof Node && u.contains(o) && u.removeChild(o), u.childNodes.length <= 0 && ((w = u.parentElement) == null || w.removeChild(u)));
  });
  let c = et();
  return d ? !u || !o ? null : ll(c({ ourProps: { ref: i }, theirProps: n, slot: {}, defaultTag: Tc, name: "Portal" }), o) : null;
});
function Mh(e, t) {
  let n = Et(t), { enabled: r = !0, ...i } = e, s = et();
  return r ? de.createElement(Hh, { ...i, ref: n }) : s({ ourProps: { ref: n }, theirProps: i, slot: {}, defaultTag: Tc, name: "Portal" });
}
let Dh = ot, Ic = ut(null);
function $h(e, t) {
  let { target: n, ...r } = e, i = { ref: Et(t) }, s = et();
  return de.createElement(Ic.Provider, { value: n }, s({ ourProps: i, theirProps: r, defaultTag: Dh, name: "Popover.Group" }));
}
let $o = ut(null);
function jh() {
  let e = Ve($o), t = be([]), n = Ee((s) => (t.current.push(s), e && e.register(s), () => r(s))), r = Ee((s) => {
    let u = t.current.indexOf(s);
    u !== -1 && t.current.splice(u, 1), e && e.unregister(s);
  }), i = Ce(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, Ce(() => function({ children: s }) {
    return de.createElement($o.Provider, { value: i }, s);
  }, [i])];
}
let Wh = Ge(Mh), xc = Ge($h), _c = Object.assign(Wh, { Group: xc });
function Kh(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = pn(e, "escape");
  nc(t, "keydown", (i) => {
    r && (i.defaultPrevented || i.key === it.Escape && n(i));
  });
}
function qh() {
  var e;
  let [t] = ve(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = ve((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return Ne(() => {
    if (!t) return;
    function i(s) {
      r(s.matches);
    }
    return t.addEventListener("change", i), () => t.removeEventListener("change", i);
  }, [t]), n;
}
function Vh({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = gn(n), i = Ee(() => {
    var s, u;
    let o = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? o.push(a) : "current" in a && a.current instanceof HTMLElement && o.push(a.current));
    if (t != null && t.current) for (let a of t.current) o.push(a);
    for (let a of (s = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? s : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((u = n == null ? void 0 : n.getRootNode()) == null ? void 0 : u.host)) || o.some((d) => a.contains(d)) || o.push(a));
    return o;
  });
  return { resolveContainers: i, contains: Ee((s) => i().some((u) => u.contains(s))) };
}
let Oc = ut(null);
function Gs({ children: e, node: t }) {
  let [n, r] = ve(null), i = Cc(t ?? n);
  return de.createElement(Oc.Provider, { value: i }, e, i === null && de.createElement(No, { features: bi.Hidden, ref: (s) => {
    var u, o;
    if (s) {
      for (let a of (o = (u = zr(s)) == null ? void 0 : u.querySelectorAll("html > *, body > *")) != null ? o : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(s)) {
        r(a);
        break;
      }
    }
  } }));
}
function Cc(e = null) {
  var t;
  return (t = Ve(Oc)) != null ? t : e;
}
function os() {
  let e = be(!1);
  return Ne(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var Un = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Un || {});
function Gh() {
  let e = be(0);
  return tc(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function kc(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let Xh = "div";
var $r = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))($r || {});
function Yh(e, t) {
  let n = be(null), r = Et(n, t), { initialFocus: i, initialFocusFallback: s, containers: u, features: o = 15, ...a } = e;
  zn() || (o = 0);
  let d = gn(n);
  Zh(o, { ownerDocument: d });
  let c = ed(o, { ownerDocument: d, container: n, initialFocus: i, initialFocusFallback: s });
  td(o, { ownerDocument: d, container: n, containers: u, previousActiveElement: c });
  let w = Gh(), y = Ee((m) => {
    let T = n.current;
    T && ((C) => C())(() => {
      qt(w.current, { [Un.Forwards]: () => {
        cn(T, Ut.First, { skipElements: [m.relatedTarget, s] });
      }, [Un.Backwards]: () => {
        cn(T, Ut.Last, { skipElements: [m.relatedTarget, s] });
      } });
    });
  }), f = pn(!!(o & 2), "focus-trap#tab-lock"), E = dn(), b = be(!1), I = { ref: r, onKeyDown(m) {
    m.key == "Tab" && (b.current = !0, E.requestAnimationFrame(() => {
      b.current = !1;
    }));
  }, onBlur(m) {
    if (!(o & 4)) return;
    let T = kc(u);
    n.current instanceof HTMLElement && T.add(n.current);
    let C = m.relatedTarget;
    C instanceof HTMLElement && C.dataset.headlessuiFocusGuard !== "true" && (Bc(T, C) || (b.current ? cn(n.current, qt(w.current, { [Un.Forwards]: () => Ut.Next, [Un.Backwards]: () => Ut.Previous }) | Ut.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && Wt(m.target)));
  } }, x = et();
  return de.createElement(de.Fragment, null, f && de.createElement(No, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: y, features: bi.Focusable }), x({ ourProps: I, theirProps: a, defaultTag: Xh, name: "FocusTrap" }), f && de.createElement(No, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: y, features: bi.Focusable }));
}
let zh = Ge(Yh), Qh = Object.assign(zh, { features: $r });
function Jh(e = !0) {
  let t = be(Sr.slice());
  return Zo(([n], [r]) => {
    r === !0 && n === !1 && Ii(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = Sr.slice());
  }, [e, Sr, t]), Ee(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function Zh(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = Jh(n);
  Zo(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && Wt(r());
  }, [n]), Pc(() => {
    n && Wt(r());
  });
}
function ed(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: i }) {
  let s = be(null), u = pn(!!(e & 1), "focus-trap#initial-focus"), o = os();
  return Zo(() => {
    if (e === 0) return;
    if (!u) {
      i != null && i.current && Wt(i.current);
      return;
    }
    let a = n.current;
    a && Ii(() => {
      if (!o.current) return;
      let d = t == null ? void 0 : t.activeElement;
      if (r != null && r.current) {
        if ((r == null ? void 0 : r.current) === d) {
          s.current = d;
          return;
        }
      } else if (a.contains(d)) {
        s.current = d;
        return;
      }
      if (r != null && r.current) Wt(r.current);
      else {
        if (e & 16) {
          if (cn(a, Ut.First | Ut.AutoFocus) !== Lo.Error) return;
        } else if (cn(a, Ut.First) !== Lo.Error) return;
        if (i != null && i.current && (Wt(i.current), (t == null ? void 0 : t.activeElement) === i.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      s.current = t == null ? void 0 : t.activeElement;
    });
  }, [i, u, e]), s;
}
function td(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: i }) {
  let s = os(), u = !!(e & 4);
  nc(t == null ? void 0 : t.defaultView, "focus", (o) => {
    if (!u || !s.current) return;
    let a = kc(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let d = i.current;
    if (!d) return;
    let c = o.target;
    c && c instanceof HTMLElement ? Bc(a, c) ? (i.current = c, Wt(c)) : (o.preventDefault(), o.stopPropagation(), Wt(d)) : Wt(i.current);
  }, !0);
}
function Bc(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function Rc(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : Nc) !== ot || de.Children.count(e.children) === 1;
}
let Ri = ut(null);
Ri.displayName = "TransitionContext";
var rd = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(rd || {});
function nd() {
  let e = Ve(Ri);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function id() {
  let e = Ve(Fi);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Fi = ut(null);
Fi.displayName = "NestingContext";
function Ni(e) {
  return "children" in e ? Ni(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Fc(e, t) {
  let n = Qr(e), r = be([]), i = os(), s = dn(), u = Ee((f, E = Tr.Hidden) => {
    let b = r.current.findIndex(({ el: I }) => I === f);
    b !== -1 && (qt(E, { [Tr.Unmount]() {
      r.current.splice(b, 1);
    }, [Tr.Hidden]() {
      r.current[b].state = "hidden";
    } }), s.microTask(() => {
      var I;
      !Ni(r) && i.current && ((I = n.current) == null || I.call(n));
    }));
  }), o = Ee((f) => {
    let E = r.current.find(({ el: b }) => b === f);
    return E ? E.state !== "visible" && (E.state = "visible") : r.current.push({ el: f, state: "visible" }), () => u(f, Tr.Unmount);
  }), a = be([]), d = be(Promise.resolve()), c = be({ enter: [], leave: [] }), w = Ee((f, E, b) => {
    a.current.splice(0), t && (t.chains.current[E] = t.chains.current[E].filter(([I]) => I !== f)), t == null || t.chains.current[E].push([f, new Promise((I) => {
      a.current.push(I);
    })]), t == null || t.chains.current[E].push([f, new Promise((I) => {
      Promise.all(c.current[E].map(([x, m]) => m)).then(() => I());
    })]), E === "enter" ? d.current = d.current.then(() => t == null ? void 0 : t.wait.current).then(() => b(E)) : b(E);
  }), y = Ee((f, E, b) => {
    Promise.all(c.current[E].splice(0).map(([I, x]) => x)).then(() => {
      var I;
      (I = a.current.shift()) == null || I();
    }).then(() => b(E));
  });
  return Ce(() => ({ children: r, register: o, unregister: u, onStart: w, onStop: y, wait: d, chains: c }), [o, u, r, w, y, c, d]);
}
let Nc = ot, Uc = fn.RenderStrategy;
function od(e, t) {
  var n, r;
  let { transition: i = !0, beforeEnter: s, afterEnter: u, beforeLeave: o, afterLeave: a, enter: d, enterFrom: c, enterTo: w, entered: y, leave: f, leaveFrom: E, leaveTo: b, ...I } = e, [x, m] = ve(null), T = be(null), C = Rc(e), j = Et(...C ? [T, t, m] : t === null ? [] : [t]), U = (n = I.unmount) == null || n ? Tr.Unmount : Tr.Hidden, { show: K, appear: S, initial: A } = nd(), [_, N] = ve(K ? "visible" : "hidden"), P = id(), { register: F, unregister: W } = P;
  Ne(() => F(T), [F, T]), Ne(() => {
    if (U === Tr.Hidden && T.current) {
      if (K && _ !== "visible") {
        N("visible");
        return;
      }
      return qt(_, { hidden: () => W(T), visible: () => F(T) });
    }
  }, [_, T, F, W, K, U]);
  let H = zn();
  Ne(() => {
    if (C && H && _ === "visible" && T.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [T, _, H, C]);
  let $ = A && !S, G = S && K && A, k = be(!1), M = Fc(() => {
    k.current || (N("hidden"), W(T));
  }, P), Y = Ee((xe) => {
    k.current = !0;
    let $e = xe ? "enter" : "leave";
    M.onStart(T, $e, (Je) => {
      Je === "enter" ? s == null || s() : Je === "leave" && (o == null || o());
    });
  }), Z = Ee((xe) => {
    let $e = xe ? "enter" : "leave";
    k.current = !1, M.onStop(T, $e, (Je) => {
      Je === "enter" ? u == null || u() : Je === "leave" && (a == null || a());
    }), $e === "leave" && !Ni(M) && (N("hidden"), W(T));
  });
  Me(() => {
    C && i || (Y(K), Z(K));
  }, [K, C, i]);
  let ne = !(!i || !C || !H || $), [, se] = sc(ne, x, K, { start: Y, end: Z }), pe = Dr({ ref: j, className: ((r = Fo(I.className, G && d, G && c, se.enter && d, se.enter && se.closed && c, se.enter && !se.closed && w, se.leave && f, se.leave && !se.closed && E, se.leave && se.closed && b, !se.transition && K && y)) == null ? void 0 : r.trim()) || void 0, ...oc(se) }), ae = 0;
  _ === "visible" && (ae |= wt.Open), _ === "hidden" && (ae |= wt.Closed), se.enter && (ae |= wt.Opening), se.leave && (ae |= wt.Closing);
  let ge = et();
  return de.createElement(Fi.Provider, { value: M }, de.createElement(vc, { value: ae }, ge({ ourProps: pe, theirProps: I, defaultTag: Nc, features: Uc, visible: _ === "visible", name: "Transition.Child" })));
}
function sd(e, t) {
  let { show: n, appear: r = !1, unmount: i = !0, ...s } = e, u = be(null), o = Rc(e), a = Et(...o ? [u, t] : t === null ? [] : [t]);
  zn();
  let d = Yn();
  if (n === void 0 && d !== null && (n = (d & wt.Open) === wt.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, w] = ve(n ? "visible" : "hidden"), y = Fc(() => {
    n || w("hidden");
  }), [f, E] = ve(!0), b = be([n]);
  Ne(() => {
    f !== !1 && b.current[b.current.length - 1] !== n && (b.current.push(n), E(!1));
  }, [b, n]);
  let I = Ce(() => ({ show: n, appear: r, initial: f }), [n, r, f]);
  Ne(() => {
    n ? w("visible") : !Ni(y) && u.current !== null && w("hidden");
  }, [n, y]);
  let x = { unmount: i }, m = Ee(() => {
    var j;
    f && E(!1), (j = e.beforeEnter) == null || j.call(e);
  }), T = Ee(() => {
    var j;
    f && E(!1), (j = e.beforeLeave) == null || j.call(e);
  }), C = et();
  return de.createElement(Fi.Provider, { value: y }, de.createElement(Ri.Provider, { value: I }, C({ ourProps: { ...x, as: ot, children: de.createElement(Lc, { ref: a, ...x, ...s, beforeEnter: m, beforeLeave: T }) }, theirProps: {}, defaultTag: ot, features: Uc, visible: c === "visible", name: "Transition" })));
}
function ud(e, t) {
  let n = Ve(Ri) !== null, r = Yn() !== null;
  return de.createElement(de.Fragment, null, !n && r ? de.createElement(jo, { ref: t, ...e }) : de.createElement(Lc, { ref: t, ...e }));
}
let jo = Ge(sd), Lc = Ge(od), ss = Ge(ud), $n = Object.assign(jo, { Child: ss, Root: jo });
var ad = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ad || {}), cd = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(cd || {});
let ld = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, us = ut(null);
us.displayName = "DialogContext";
function Ui(e) {
  let t = Ve(us);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ui), n;
  }
  return t;
}
function fd(e, t) {
  return qt(t.type, ld, e, t);
}
let Xs = Ge(function(e, t) {
  let n = Gt(), { id: r = `headlessui-dialog-${n}`, open: i, onClose: s, initialFocus: u, role: o = "dialog", autoFocus: a = !0, __demoMode: d = !1, unmount: c = !1, ...w } = e, y = be(!1);
  o = function() {
    return o === "dialog" || o === "alertdialog" ? o : (y.current || (y.current = !0, console.warn(`Invalid role [${o}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let f = Yn();
  i === void 0 && f !== null && (i = (f & wt.Open) === wt.Open);
  let E = be(null), b = Et(E, t), I = gn(E), x = i ? 0 : 1, [m, T] = Vo(fd, { titleId: null, descriptionId: null, panelRef: cl() }), C = Ee(() => s(!1)), j = Ee((Z) => T({ type: 0, id: Z })), U = zn() ? x === 0 : !1, [K, S] = jh(), A = { get current() {
    var Z;
    return (Z = m.panelRef.current) != null ? Z : E.current;
  } }, _ = Cc(), { resolveContainers: N } = Vh({ mainTreeNode: _, portals: K, defaultContainers: [A] }), P = f !== null ? (f & wt.Closing) === wt.Closing : !1;
  Ya(d || P ? !1 : U, { allowed: Ee(() => {
    var Z, ne;
    return [(ne = (Z = E.current) == null ? void 0 : Z.closest("[data-headlessui-portal]")) != null ? ne : null];
  }), disallowed: Ee(() => {
    var Z;
    return [(Z = _ == null ? void 0 : _.closest("body > *:not(#headlessui-portal-root)")) != null ? Z : null];
  }) }), rc(U, N, (Z) => {
    Z.preventDefault(), C();
  }), Kh(U, I == null ? void 0 : I.defaultView, (Z) => {
    Z.preventDefault(), Z.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), C();
  }), ic(d || P ? !1 : U, I, N), za(U, E, C);
  let [F, W] = qa(), H = Ce(() => [{ dialogState: x, close: C, setTitleId: j, unmount: c }, m], [x, m, C, j, c]), $ = Ce(() => ({ open: x === 0 }), [x]), G = { ref: b, id: r, role: o, tabIndex: -1, "aria-modal": d ? void 0 : x === 0 ? !0 : void 0, "aria-labelledby": m.titleId, "aria-describedby": F, unmount: c }, k = !qh(), M = $r.None;
  U && !d && (M |= $r.RestoreFocus, M |= $r.TabLock, a && (M |= $r.AutoFocus), k && (M |= $r.InitialFocus));
  let Y = et();
  return de.createElement(Bh, null, de.createElement(Vs, { force: !0 }, de.createElement(_c, null, de.createElement(us.Provider, { value: H }, de.createElement(xc, { target: E }, de.createElement(Vs, { force: !1 }, de.createElement(W, { slot: $ }, de.createElement(S, null, de.createElement(Qh, { initialFocus: u, initialFocusFallback: E, containers: N, features: M }, de.createElement(Kf, { value: C }, Y({ ourProps: G, theirProps: w, slot: $, defaultTag: hd, features: dd, visible: x === 0, name: "Dialog" })))))))))));
}), hd = "div", dd = fn.RenderStrategy | fn.Static;
function pd(e, t) {
  let { transition: n = !1, open: r, ...i } = e, s = Yn(), u = e.hasOwnProperty("open") || s !== null, o = e.hasOwnProperty("onClose");
  if (!u && !o) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!u) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!o) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!s && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !i.static ? de.createElement(Gs, null, de.createElement($n, { show: r, transition: n, unmount: i.unmount }, de.createElement(Xs, { ref: t, ...i }))) : de.createElement(Gs, null, de.createElement(Xs, { ref: t, open: r, ...i }));
}
let gd = "div";
function md(e, t) {
  let n = Gt(), { id: r = `headlessui-dialog-panel-${n}`, transition: i = !1, ...s } = e, [{ dialogState: u, unmount: o }, a] = Ui("Dialog.Panel"), d = Et(t, a.panelRef), c = Ce(() => ({ open: u === 0 }), [u]), w = Ee((I) => {
    I.stopPropagation();
  }), y = { ref: d, id: r, onClick: w }, f = i ? ss : ot, E = i ? { unmount: o } : {}, b = et();
  return de.createElement(f, { ...E }, b({ ourProps: y, theirProps: s, slot: c, defaultTag: gd, name: "Dialog.Panel" }));
}
let wd = "div";
function yd(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: i, unmount: s }] = Ui("Dialog.Backdrop"), u = Ce(() => ({ open: i === 0 }), [i]), o = { ref: t, "aria-hidden": !0 }, a = n ? ss : ot, d = n ? { unmount: s } : {}, c = et();
  return de.createElement(a, { ...d }, c({ ourProps: o, theirProps: r, slot: u, defaultTag: wd, name: "Dialog.Backdrop" }));
}
let Ed = "h2";
function Ad(e, t) {
  let n = Gt(), { id: r = `headlessui-dialog-title-${n}`, ...i } = e, [{ dialogState: s, setTitleId: u }] = Ui("Dialog.Title"), o = Et(t);
  Me(() => (u(r), () => u(null)), [r, u]);
  let a = Ce(() => ({ open: s === 0 }), [s]), d = { ref: o, id: r };
  return et()({ ourProps: d, theirProps: i, slot: a, defaultTag: Ed, name: "Dialog.Title" });
}
let bd = Ge(pd), vd = Ge(md);
Ge(yd);
let Pd = Ge(Ad), to = Object.assign(bd, { Panel: vd, Title: Pd, Description: Hf });
function Sd(e, t) {
  let n = be({ left: 0, top: 0 });
  if (Ne(() => {
    if (!t) return;
    let i = t.getBoundingClientRect();
    i && (n.current = i);
  }, [e, t]), t == null || !e || t === document.activeElement) return !1;
  let r = t.getBoundingClientRect();
  return r.top !== n.current.top || r.left !== n.current.left;
}
let Ys = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function zs(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return r;
  let s = !1;
  for (let o of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) o.remove(), s = !0;
  let u = s ? (n = i.innerText) != null ? n : "" : r;
  return Ys.test(u) && (u = u.replace(Ys, "")), u;
}
function Td(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((i) => {
      let s = document.getElementById(i);
      if (s) {
        let u = s.getAttribute("aria-label");
        return typeof u == "string" ? u.trim() : zs(s).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return zs(e).trim();
}
function Id(e) {
  let t = be(""), n = be("");
  return Ee(() => {
    let r = e.current;
    if (!r) return "";
    let i = r.innerText;
    if (t.current === i) return n.current;
    let s = Td(r).trim().toLowerCase();
    return t.current = i, n.current = s, s;
  });
}
var xd = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(xd || {}), _d = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(_d || {}), Od = ((e) => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e[e.SetButtonElement = 7] = "SetButtonElement", e[e.SetItemsElement = 8] = "SetItemsElement", e))(Od || {});
function ro(e, t = (n) => n) {
  let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, r = Za(t(e.items.slice()), (s) => s.dataRef.current.domRef.current), i = n ? r.indexOf(n) : null;
  return i === -1 && (i = null), { items: r, activeItemIndex: i };
}
let Cd = { 1(e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, 0(e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
}, 2: (e, t) => {
  var n, r, i, s, u;
  if (e.menuState === 1) return e;
  let o = { ...e, searchQuery: "", activationTrigger: (n = t.trigger) != null ? n : 1, __demoMode: !1 };
  if (t.focus === ht.Nothing) return { ...o, activeItemIndex: null };
  if (t.focus === ht.Specific) return { ...o, activeItemIndex: e.items.findIndex((c) => c.id === t.id) };
  if (t.focus === ht.Previous) {
    let c = e.activeItemIndex;
    if (c !== null) {
      let w = e.items[c].dataRef.current.domRef, y = eo(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.current.disabled });
      if (y !== null) {
        let f = e.items[y].dataRef.current.domRef;
        if (((r = w.current) == null ? void 0 : r.previousElementSibling) === f.current || ((i = f.current) == null ? void 0 : i.previousElementSibling) === null) return { ...o, activeItemIndex: y };
      }
    }
  } else if (t.focus === ht.Next) {
    let c = e.activeItemIndex;
    if (c !== null) {
      let w = e.items[c].dataRef.current.domRef, y = eo(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.current.disabled });
      if (y !== null) {
        let f = e.items[y].dataRef.current.domRef;
        if (((s = w.current) == null ? void 0 : s.nextElementSibling) === f.current || ((u = f.current) == null ? void 0 : u.nextElementSibling) === null) return { ...o, activeItemIndex: y };
      }
    }
  }
  let a = ro(e), d = eo(t, { resolveItems: () => a.items, resolveActiveIndex: () => a.activeItemIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled });
  return { ...o, ...a, activeItemIndex: d };
}, 3: (e, t) => {
  let n = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + t.value.toLowerCase(), i = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((u) => {
    var o;
    return ((o = u.dataRef.current.textValue) == null ? void 0 : o.startsWith(r)) && !u.dataRef.current.disabled;
  }), s = i ? e.items.indexOf(i) : -1;
  return s === -1 || s === e.activeItemIndex ? { ...e, searchQuery: r } : { ...e, searchQuery: r, activeItemIndex: s, activationTrigger: 1 };
}, 4(e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, 5: (e, t) => {
  let n = ro(e, (r) => [...r, { id: t.id, dataRef: t.dataRef }]);
  return { ...e, ...n };
}, 6: (e, t) => {
  let n = ro(e, (r) => {
    let i = r.findIndex((s) => s.id === t.id);
    return i !== -1 && r.splice(i, 1), r;
  });
  return { ...e, ...n, activationTrigger: 1 };
}, 7: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 8: (e, t) => e.itemsElement === t.element ? e : { ...e, itemsElement: t.element } }, as = ut(null);
as.displayName = "MenuContext";
function Li(e) {
  let t = Ve(as);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Li), n;
  }
  return t;
}
function kd(e, t) {
  return qt(t.type, Cd, e, t);
}
let Bd = ot;
function Rd(e, t) {
  let { __demoMode: n = !1, ...r } = e, i = Vo(kd, { __demoMode: n, menuState: n ? 0 : 1, buttonElement: null, itemsElement: null, items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: s, itemsElement: u, buttonElement: o }, a] = i, d = Et(t);
  rc(s === 0, [o, u], (E, b) => {
    a({ type: 1 }), Jo(b, Qo.Loose) || (E.preventDefault(), o == null || o.focus());
  });
  let c = Ee(() => {
    a({ type: 1 });
  }), w = Ce(() => ({ open: s === 0, close: c }), [s, c]), y = { ref: d }, f = et();
  return de.createElement(Oh, null, de.createElement(as.Provider, { value: i }, de.createElement(vc, { value: qt(s, { 0: wt.Open, 1: wt.Closed }) }, f({ ourProps: y, theirProps: r, slot: w, defaultTag: Bd, name: "Menu" }))));
}
let Fd = "button";
function Nd(e, t) {
  var n;
  let r = Gt(), { id: i = `headlessui-menu-button-${r}`, disabled: s = !1, autoFocus: u = !1, ...o } = e, [a, d] = Li("Menu.Button"), c = Ih(), w = Et(t, Th(), Ee((K) => d({ type: 7, element: K }))), y = Ee((K) => {
    switch (K.key) {
      case it.Space:
      case it.Enter:
      case it.ArrowDown:
        K.preventDefault(), K.stopPropagation(), Ln(() => d({ type: 0 })), d({ type: 2, focus: ht.First });
        break;
      case it.ArrowUp:
        K.preventDefault(), K.stopPropagation(), Ln(() => d({ type: 0 })), d({ type: 2, focus: ht.Last });
        break;
    }
  }), f = Ee((K) => {
    switch (K.key) {
      case it.Space:
        K.preventDefault();
        break;
    }
  }), E = Ee((K) => {
    var S;
    if (Bf(K.currentTarget)) return K.preventDefault();
    s || (a.menuState === 0 ? (Ln(() => d({ type: 1 })), (S = a.buttonElement) == null || S.focus({ preventScroll: !0 })) : (K.preventDefault(), d({ type: 0 })));
  }), { isFocusVisible: b, focusProps: I } = mf({ autoFocus: u }), { isHovered: x, hoverProps: m } = gf({ isDisabled: s }), { pressed: T, pressProps: C } = vf({ disabled: s }), j = Ce(() => ({ open: a.menuState === 0, active: T || a.menuState === 0, disabled: s, hover: x, focus: b, autofocus: u }), [a, x, b, T, s, u]), U = ja(c(), { ref: w, id: i, type: i0(e, a.buttonElement), "aria-haspopup": "menu", "aria-controls": (n = a.itemsElement) == null ? void 0 : n.id, "aria-expanded": a.menuState === 0, disabled: s || void 0, autoFocus: u, onKeyDown: y, onKeyUp: f, onClick: E }, I, m, C);
  return et()({ ourProps: U, theirProps: o, slot: j, defaultTag: Fd, name: "Menu.Button" });
}
let Ud = "div", Ld = fn.RenderStrategy | fn.Static;
function Hd(e, t) {
  var n, r;
  let i = Gt(), { id: s = `headlessui-menu-items-${i}`, anchor: u, portal: o = !1, modal: a = !0, transition: d = !1, ...c } = e, w = Sh(u), [y, f] = Li("Menu.Items"), [E, b] = _h(w), I = xh(), [x, m] = ve(null), T = Et(t, w ? E : null, Ee((k) => f({ type: 8, element: k })), m), C = gn(y.itemsElement);
  w && (o = !0);
  let j = Yn(), [U, K] = sc(d, x, j !== null ? (j & wt.Open) === wt.Open : y.menuState === 0);
  za(U, y.buttonElement, () => {
    f({ type: 1 });
  });
  let S = y.__demoMode ? !1 : a && y.menuState === 0;
  ic(S, C);
  let A = y.__demoMode ? !1 : a && y.menuState === 0;
  Ya(A, { allowed: ke(() => [y.buttonElement, y.itemsElement], [y.buttonElement, y.itemsElement]) });
  let _ = y.menuState !== 0, N = Sd(_, y.buttonElement) ? !1 : U;
  Me(() => {
    let k = y.itemsElement;
    k && y.menuState === 0 && k !== (C == null ? void 0 : C.activeElement) && k.focus({ preventScroll: !0 });
  }, [y.menuState, y.itemsElement, C]), m0(y.menuState === 0, { container: y.itemsElement, accept(k) {
    return k.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : k.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(k) {
    k.setAttribute("role", "none");
  } });
  let P = dn(), F = Ee((k) => {
    var M, Y, Z;
    switch (P.dispose(), k.key) {
      case it.Space:
        if (y.searchQuery !== "") return k.preventDefault(), k.stopPropagation(), f({ type: 3, value: k.key });
      case it.Enter:
        if (k.preventDefault(), k.stopPropagation(), f({ type: 1 }), y.activeItemIndex !== null) {
          let { dataRef: ne } = y.items[y.activeItemIndex];
          (Y = (M = ne.current) == null ? void 0 : M.domRef.current) == null || Y.click();
        }
        Ja(y.buttonElement);
        break;
      case it.ArrowDown:
        return k.preventDefault(), k.stopPropagation(), f({ type: 2, focus: ht.Next });
      case it.ArrowUp:
        return k.preventDefault(), k.stopPropagation(), f({ type: 2, focus: ht.Previous });
      case it.Home:
      case it.PageUp:
        return k.preventDefault(), k.stopPropagation(), f({ type: 2, focus: ht.First });
      case it.End:
      case it.PageDown:
        return k.preventDefault(), k.stopPropagation(), f({ type: 2, focus: ht.Last });
      case it.Escape:
        k.preventDefault(), k.stopPropagation(), Ln(() => f({ type: 1 })), (Z = y.buttonElement) == null || Z.focus({ preventScroll: !0 });
        break;
      case it.Tab:
        k.preventDefault(), k.stopPropagation(), Ln(() => f({ type: 1 })), t0(y.buttonElement, k.shiftKey ? Ut.Previous : Ut.Next);
        break;
      default:
        k.key.length === 1 && (f({ type: 3, value: k.key }), P.setTimeout(() => f({ type: 4 }), 350));
        break;
    }
  }), W = Ee((k) => {
    switch (k.key) {
      case it.Space:
        k.preventDefault();
        break;
    }
  }), H = Ce(() => ({ open: y.menuState === 0 }), [y.menuState]), $ = ja(w ? I() : {}, { "aria-activedescendant": y.activeItemIndex === null || (n = y.items[y.activeItemIndex]) == null ? void 0 : n.id, "aria-labelledby": (r = y.buttonElement) == null ? void 0 : r.id, id: s, onKeyDown: F, onKeyUp: W, role: "menu", tabIndex: y.menuState === 0 ? 0 : void 0, ref: T, style: { ...c.style, ...b, "--button-width": Vf(y.buttonElement, !0).width }, ...oc(K) }), G = et();
  return de.createElement(_c, { enabled: o ? e.static || U : !1 }, G({ ourProps: $, theirProps: c, slot: H, defaultTag: Ud, features: Ld, visible: N, name: "Menu.Items" }));
}
let Md = ot;
function Dd(e, t) {
  let n = Gt(), { id: r = `headlessui-menu-item-${n}`, disabled: i = !1, ...s } = e, [u, o] = Li("Menu.Item"), a = u.activeItemIndex !== null ? u.items[u.activeItemIndex].id === r : !1, d = be(null), c = Et(t, d);
  Ne(() => {
    if (!u.__demoMode && u.menuState === 0 && a && u.activationTrigger !== 0) return Yt().requestAnimationFrame(() => {
      var N, P;
      (P = (N = d.current) == null ? void 0 : N.scrollIntoView) == null || P.call(N, { block: "nearest" });
    });
  }, [u.__demoMode, d, a, u.menuState, u.activationTrigger, u.activeItemIndex]);
  let w = Id(d), y = be({ disabled: i, domRef: d, get textValue() {
    return w();
  } });
  Ne(() => {
    y.current.disabled = i;
  }, [y, i]), Ne(() => (o({ type: 5, id: r, dataRef: y }), () => o({ type: 6, id: r })), [y, r]);
  let f = Ee(() => {
    o({ type: 1 });
  }), E = Ee((N) => {
    if (i) return N.preventDefault();
    o({ type: 1 }), Ja(u.buttonElement);
  }), b = Ee(() => {
    if (i) return o({ type: 2, focus: ht.Nothing });
    o({ type: 2, focus: ht.Specific, id: r });
  }), I = l0(), x = Ee((N) => {
    I.update(N), !i && (a || o({ type: 2, focus: ht.Specific, id: r, trigger: 0 }));
  }), m = Ee((N) => {
    I.wasMoved(N) && (i || a || o({ type: 2, focus: ht.Specific, id: r, trigger: 0 }));
  }), T = Ee((N) => {
    I.wasMoved(N) && (i || a && o({ type: 2, focus: ht.Nothing }));
  }), [C, j] = Va(), [U, K] = qa(), S = Ce(() => ({ active: a, focus: a, disabled: i, close: f }), [a, i, f]), A = { id: r, ref: c, role: "menuitem", tabIndex: i === !0 ? void 0 : -1, "aria-disabled": i === !0 ? !0 : void 0, "aria-labelledby": C, "aria-describedby": U, disabled: void 0, onClick: E, onFocus: b, onPointerEnter: x, onMouseEnter: x, onPointerMove: m, onMouseMove: m, onPointerLeave: T, onMouseLeave: T }, _ = et();
  return de.createElement(j, null, de.createElement(K, null, _({ ourProps: A, theirProps: s, slot: S, defaultTag: Md, name: "Menu.Item" })));
}
let $d = "div";
function jd(e, t) {
  let [n, r] = Va(), i = e, s = { ref: t, "aria-labelledby": n, role: "group" }, u = et();
  return de.createElement(r, null, u({ ourProps: s, theirProps: i, slot: {}, defaultTag: $d, name: "Menu.Section" }));
}
let Wd = "header";
function Kd(e, t) {
  let n = Gt(), { id: r = `headlessui-menu-heading-${n}`, ...i } = e, s = zo();
  Ne(() => s.register(r), [r, s.register]);
  let u = { id: r, ref: t, role: "presentation", ...s.props };
  return et()({ ourProps: u, theirProps: i, slot: {}, defaultTag: Wd, name: "Menu.Heading" });
}
let qd = "div";
function Vd(e, t) {
  let n = e, r = { ref: t, role: "separator" };
  return et()({ ourProps: r, theirProps: n, slot: {}, defaultTag: qd, name: "Menu.Separator" });
}
let Gd = Ge(Rd), Xd = Ge(Nd), Yd = Ge(Hd), zd = Ge(Dd), Qd = Ge(jd), Jd = Ge(Kd), Zd = Ge(Vd), rn = Object.assign(Gd, { Button: Xd, Items: Yd, Item: zd, Section: Qd, Heading: Jd, Separator: Zd });
const ep = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Hc = "data:image/svg+xml,%3csvg%20width='41'%20height='40'%20viewBox='0%200%2041%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20x='0.5'%20width='40'%20height='40'%20rx='20'%20fill='url(%23pattern0)'/%3e%3cdefs%3e%3cpattern%20id='pattern0'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_21497_326778'%20transform='translate(-0.00625)%20scale(0.0125)'/%3e%3c/pattern%3e%3cimage%20id='image0_21497_326778'%20width='81'%20height='80'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABQCAYAAABh05mTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAi3SURBVHgB7Z1dbBRVFMfPLJVuE1lGFNOENi5v2sbY8kIbEymJtJiYSIVq9AEKrQm+0A+Q+KBpqz5ppIU3Ywvti4kWktaYQFsTi4nZ8sTyQH3TIa0JD0Km2wQWkB3Pf3Zms/Oxu7Mfszvb7i9Zdjt7Zzfz33PuOffcOxeBSowoisEtRG0KUZAo9pJAQjD+mkTtkYzED1lQH0I4RnTHRxR+lh+SLMtUIgQqMkFWbZ3okEKxffz1h8gqVK6EfSQs8vPsv7K8SEWkKCJqwrURKX2K+uw6kkDKokC+qWII6qqIEC9CsT7+mn4qnMVlCwsqjNyT5UlyCVdE9Ih4ZlwTs+Ai7hADEG+YvCOeGYg5wGLOUIEomIg7RbHpKSmX+GUTlQHcZ04+Q76Ru7IsUZ4URETN+sao/JA4oh/PN/hsoTxA37fFX32VBTxJ5YnI2UJ3jb+aHkYfXaccydkSazlJfkzKbxRPjMseFmJmG1tlLkl7TiJq/R8E9GrwyJXwVhI6s+0nsxZxAwuoI7GQ+7MRMisRN4GAOlKAhGanru0jh6AP3CQCgmCErxWB00ljR9E5KYjU0uahlq+5lqP2bKaGjkTc6q+GgC/TpkNoqvHXrD2MRpfStcrozpxID1GZjELcQRl9QRTb0rVIG1i0QHKTKqQNNGnd2e+vDtHmCCSZEJ+Q4n8QfTRn92ZKd9bcOEgVVGJc1kvl1rburEXjv6mCARZr8Z68tt983NYSnxANUQULmNqws0aLJVasMD121mixxIoVpsfOGg2WWI5W2NrSQu3tb9LBjnaqq6tTj4WWlmj68hWanr5CbmC2RoOIz4titxIv8XueQCBA5779mjra21O2mb58mQZPnyU34Gi9W9YqPYY8kSu8ENDz42NY3M8zV2hPc3Pado0NDRSJROjmzTAVGp7swnBwMf5ao5SuPDT0OR1sP2A41vHW26oAZiDg9I8/JFw3E/iMxlddGbVK9+W13XiRCCyPiQ5RCYBb9p44roqiP0JLN2wFBHBhOwHRD45PXKLV1VXL59fXOxM8S1ApU3+dKv0ITyG+o1DxaW3Zazk2N79g27an54QaSJKB2L0fnVRFBMvLyyz0N1QMfPElMWHVEllRsUhrZCw0cL9lZnVl1XIM1td7otty/L33P0wICAKB7ZY2a2v2Vp0vMDw8qyJWlbDUZeeakXXrRQ/2n7K0HRn5km6z5SV/Vm9Pt6EN3DtV15AviqabKmLMY/XCul1WYVtbjW4MccYvGrOx4aHPLEKPT0ySi8CJg6qIHKL3UYlYXv7Tcqyr613j30cOW8Q5N3Yh8RrvXbv6iyVnhNDIFd2Ec8QmLTorJasZLie5o07XkSPUwxE78XfXYcP7qjjTcXEQbOZYwEabvhUBxy1X1sGqXjXZrvH7h6lExVcI0tq6l+pNltbWto9Tk13xFIiFSmaFz9n54k6a+P47tr4DVF1dbflcjFQWr+e8MiQLlLtqsr1D3F6K7CYB0pafOIEuBOaUx20UEma3oGdkJT+lEgJrXI+ss/W9QfkA4Y4ePW6I2G7jI+GuEI8u3qjcIDDYRdhMQLzR0QtFsz4TkqdE1EFgGRw4lVZMWO+1uQWa59FNicTT8aaIOoP9fTQw0Gc8duYTmmPx3I66WSBVkYdpaHzF8DeEc6vQmgey4wVNpcBcbAiFbpDX4LqiXIXqLKc4VEyQE7Zw9Ubv89C/ra7+Y+jbICByxGTmFhbIi+juLFERJuohzAAHDLOF6UDMc2Pn1T6v3VSkBUuhkgaQVNzSk22st3G1CIEAgUDhBL2wmhydkfsd5Gq39xBGtD5RuEUuggKCUwGBXuFOJuTACmHhK3f+MjxSWX2hYCsM6+6MmZxj5BKDA1YBEWkxDQDq6nbZFhCSmZ//lbzIUz3FwT3DMXIHWILZqlCBGf7iK0OuhzawVnPFRsdJXmhXJXc5n+S4LMenB/6LW6IrtNjMoUxcnLRcHPpBNZFOMb+CAkWHTbBJxlzVBm6Oo3HjOp5VESEnZvXJBSJcWDBjJyzSGUydphIK749z6QuzffU2w0EELks/6vJwkEtf6nruxLzzDlEc5sMFX4eTqsyFC0TyHAhso8bGhqwDAM6/fTtuZanOHzxzNlG8dYMYCc1w54SIbo6hQ3/8nnVlRj2Phco1uqrF3tfzK61lwDp5j5GLWy6dy3qY0dHz6nQohDBPyGcC7XGum3B/mLg1w7QWpwbKtlGBwUVhQmrPnibLUM4MrO80i45VXQABaOLiJXVY2MgFiUznI5CgMLuSpfDZwq78QTQaVRfCG1aFocqtubQr8y1waSyBw1I45IUQBCLhgtE/OqkNotaI2UD9fIAfCTknKjzFqC2yFS7ek2X7pXWAA8wYdg2hCilhETuTtz+wiOjlIq1HSAQUHUs9Mb5wUZiiCrZgRxPrMRs0a0Rlp3IjkBGLFQLbO6oQdThS11CJVop5FSTXekROxpf6BMLuIhJVUGE3Pi+nuBs/pYgYT2O7E6oAJC55Dad6M+0Nkg+iUYnd+jl+6W5l0+OwG++X0+wJkXG2774s97s1HCwPhBEUGdK1cDRl+jTu1hJtMtAPshENZ27nkE2Y9oQ1N864I4njyXv0CfhQvKSND66104mAIOvNhXDvhm+Dby6UKZCYyXoZCTpZzSIl2niEsxUQ5LQWZyMKyUFkKhcBQc5b/2H4U+2vmfXFV04EqawRRpDK8TVFKQfy2j8RQj6MPprihBx9axuVH9iEsjPffWZz2vrPDi0FKpv9FJEDYijnNAKn/6wCw5Xxfq0yHiRvgk3NBwq5/3Ze7mwH9tVCX8m/NMbcXrrdTd3VmOuBH6MmQAWk4JaYjHbfGywTd2MGqQQI8a30p8pus3I7sL8Ei3msSLcEy5ji4B9wpuy3zbdD/18vYmydQkHTI3Vx0fViCWf4ZioxmqhNivpQXvOp2zYLQe2mTdPQUpDwL7cLC6SwtfluYVkgVrUVIsrmyv91DJTKn0hYjQAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e", tp = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2017.5H4.16667C3.72464%2017.5%203.30072%2017.3244%202.98816%2017.0118C2.67559%2016.6993%202.5%2016.2754%202.5%2015.8333V4.16667C2.5%203.72464%202.67559%203.30072%202.98816%202.98816C3.30072%202.67559%203.72464%202.5%204.16667%202.5H7.5'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.333%2014.1667L17.4997%2010L13.333%205.83337'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.5%2010H7.5'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Mc = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.423462'%20width='24'%20height='24'%20rx='12'%20fill='%231C1326'/%3e%3cpath%20d='M15.6787%209.69931L16.5929%2010.7735C16.6976%2010.8942%2016.7904%2010.9934%2016.8279%2011.0499C17.1013%2011.3216%2017.2546%2011.6889%2017.2544%2012.0716C17.2288%2012.523%2016.9345%2012.8305%2016.662%2013.1594L16.0222%2013.9106L15.6885%2014.2998C15.6765%2014.3132%2015.6688%2014.3298%2015.6663%2014.3475C15.6638%2014.3652%2015.6666%2014.3832%2015.6743%2014.3993C15.6821%2014.4155%2015.6945%2014.429%2015.71%2014.4383C15.7255%2014.4476%2015.7434%2014.4522%2015.7616%2014.4515H19.0968C19.6062%2014.4515%2020.248%2014.8797%2020.2105%2015.5297C20.2095%2015.8251%2020.0899%2016.1081%2019.8779%2016.317C19.6659%2016.5259%2019.3788%2016.6437%2019.079%2016.6447H13.856C13.5124%2016.6447%2012.5883%2016.6817%2012.3296%2015.8936C12.2746%2015.7289%2012.2671%2015.5524%2012.3079%2015.3837C12.3831%2015.1343%2012.502%2014.8998%2012.6594%2014.6909C12.922%2014.3017%2013.2064%2013.9125%2013.4868%2013.535C13.8481%2013.0407%2014.2194%2012.5619%2014.5847%2012.0579C14.5977%2012.0415%2014.6047%2012.0213%2014.6047%2012.0005C14.6047%2011.9797%2014.5977%2011.9595%2014.5847%2011.9431L13.2577%2010.3863C13.2491%2010.375%2013.2379%2010.3658%2013.225%2010.3595C13.2122%2010.3532%2013.198%2010.3499%2013.1836%2010.3499C13.1693%2010.3499%2013.1551%2010.3532%2013.1423%2010.3595C13.1295%2010.3658%2013.1182%2010.375%2013.1096%2010.3863C12.7542%2010.8591%2011.1982%2012.9531%2010.8664%2013.3773C10.5346%2013.8016%209.71714%2013.8249%209.26493%2013.3773L7.18959%2011.3243C7.17633%2011.3112%207.1594%2011.3022%207.14103%2011.2986C7.12261%2011.295%207.10348%2011.2968%207.08614%2011.3039C7.06879%2011.311%207.05398%2011.323%207.04358%2011.3384C7.03317%2011.3538%207.02764%2011.3719%207.02768%2011.3904V15.3389C7.03256%2015.6192%206.94837%2015.8938%206.78689%2016.1245C6.6254%2016.3552%206.39473%2016.5303%206.12722%2016.6253C5.95626%2016.6839%205.77359%2016.7014%205.59439%2016.6763C5.41518%2016.6513%205.24465%2016.5843%205.09704%2016.4811C4.94943%2016.3779%204.82898%2016.2414%204.74575%2016.083C4.66252%2015.9246%204.61892%2015.7489%204.61859%2015.5705V8.47138C4.63049%208.21553%204.7239%207.96991%204.88554%207.76938C5.04719%207.56885%205.26884%207.42363%205.51901%207.35435C5.73365%207.298%205.95954%207.29856%206.17386%207.35599C6.38817%207.41341%206.58326%207.52563%206.73936%207.6813L9.93042%2010.83C9.93998%2010.8395%209.95151%2010.8469%209.96431%2010.8516C9.97706%2010.8562%209.9907%2010.8581%2010.0043%2010.857C10.0178%2010.8559%2010.031%2010.8518%2010.0428%2010.8451C10.0546%2010.8385%2010.0648%2010.8293%2010.0726%2010.8183L12.3395%207.72606C12.4442%207.60053%2012.5756%207.49905%2012.7243%207.42883C12.873%207.35856%2013.0355%207.32121%2013.2005%207.31933H19.0968C19.2581%207.31956%2019.4176%207.35378%2019.5644%207.41969C19.7113%207.48555%2019.8422%207.5816%2019.9484%207.70131C20.0546%207.82108%2020.1336%207.9618%2020.1802%208.11405C20.2267%208.2663%2020.2397%208.42661%2020.2184%208.58425C20.1768%208.85767%2020.0361%209.107%2019.8222%209.28592C19.6083%209.46485%2019.3358%209.56127%2019.0553%209.55728H15.7537C15.7371%209.55766%2015.7209%209.56244%2015.7068%209.57111C15.6928%209.57974%2015.6813%209.59197%2015.6736%209.60645C15.666%209.62099%2015.6624%209.63725%2015.6632%209.65356C15.6641%209.66992%2015.6695%209.68572%2015.6787%209.69931Z'%20fill='url(%23paint0_radial_6204_5907)'/%3e%3cdefs%3e%3cradialGradient%20id='paint0_radial_6204_5907'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(4.66396%207.31249)%20rotate(31.8526)%20scale(18.4306%2015.0426)'%3e%3cstop%20stop-color='%237500EB'/%3e%3cstop%20offset='0.48642'%20stop-color='%23E42575'/%3e%3cstop%20offset='0.791667'%20stop-color='%23E42575'/%3e%3cstop%20offset='1'%20stop-color='%23FF6914'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e", Dc = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20clip-path='url(%23clip0_6327_5988)'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='black'/%3e%3crect%20x='5.37042'%20y='5.10571'%20width='14.1245'%20height='14.3972'%20fill='url(%23pattern0)'/%3e%3c/g%3e%3cdefs%3e%3cpattern%20id='pattern0'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_6327_5988'%20transform='matrix(0.00331001%200%200%200.00324732%20-0.161%20-0.168981)'/%3e%3c/pattern%3e%3cclipPath%20id='clip0_6327_5988'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3cimage%20id='image0_6327_5988'%20width='399'%20height='399'%20xlink:href='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gKgSUNDX1BST0ZJTEUAAQEAAAKQbGNtcwQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAADhjcHJ0AAABQAAAAE53dHB0AAABkAAAABRjaGFkAAABpAAAACxyWFlaAAAB0AAAABRiWFlaAAAB5AAAABRnWFlaAAAB+AAAABRyVFJDAAACDAAAACBnVFJDAAACLAAAACBiVFJDAAACTAAAACBjaHJtAAACbAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABwAAAAcAHMAUgBHAEIAIABiAHUAaQBsAHQALQBpAG4AAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAMgAAABwATgBvACAAYwBvAHAAeQByAGkAZwBoAHQALAAgAHUAcwBlACAAZgByAGUAZQBsAHkAAAAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEoAAAXj///zKgAAB5sAAP2H///7ov///aMAAAPYAADAlFhZWiAAAAAAAABvlAAAOO4AAAOQWFlaIAAAAAAAACSdAAAPgwAAtr5YWVogAAAAAAAAYqUAALeQAAAY3nBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR7AABMzQAAmZoAACZmAAAPXP/bAEMABQMEBAQDBQQEBAUFBQYHDAgHBwcHDwsLCQwRDxISEQ8RERMWHBcTFBoVEREYIRgaHR0fHx8TFyIkIh4kHB4fHv/bAEMBBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/CABEIAY8BjwMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAACAYHBQECBP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf2K5JLV2JEV2JEV2JE+V4IzbnDAAAA2Jnf1XYkRXYkRXYkRXYkD+KxpMPMAAAAAAAAAB6NdyJXYAAABO/O+ic7AAAG6wu6KSAAAAk2spNPFAAAAAAAAAB6NdyJXYAAABO/O+ic7AAAG6wu6KSAAAAk2spNPFAAAAAAAAAB6NdyJXYAAABO/O+ic7AAAG6wu6KSAAAAk2spNPFAAAAAAAAAB6NdyHXgAAABO/O+hc9AAAG6wu5KTAAAAk2spMPGAAAAAAAAAA3OGHRHOx0RzsdEc7HRPnPB1TauhnPHQxzx0Mc8dDHPMd3TDHLf3zsdEc7HRHOx0RzsbvDfkAAAAAAAAAAAAAAAUT0PnnQwAABhtzhibAAAAAAAAAAAAAAAAAAAAUT0PnnQwAABhtzhibAAAAAAAAAAAAAAAAAAAAUT0PnnQwAABhtzhibAAAAAAAAAAAAAAADYGPboYVuhhW6GFbr4dQ6Hwvdm5YYblhhuWGG5wzEnIm4/RhW6GFboYVuhhWyxoAAAAAAAAAB/fXsiV2AAAATpz7onOwAABuMPuikgAAAJLrSTTxQAAAAAAAAAejXciV2AAAATvzvonOwAABusLuikgAAAJNrKTTxQAAAAAAAAAejXciV2AAAATvzvonOwAABusLuikgAAAJNrKTTxQAAAAAAAAAejXciV2AAAATvzvonOwAABusLuikgAAAJNrKTTxQAAAAAAAAAf21zHPqFcJNFZJNFZJNFZJN+Gjwf34AAANljRZiS/0Vkk0Vkk0Vkk0VdJjygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8QAJRAAAAMIAwEBAQEAAAAAAAAAAAUwAQIDBAYWNTYHFEAVUIAR/9oACAEBAAEFAv7/AIUtMRXelOjpTo6U6OlOjpTo6U6OlOh6Tm3WJOyk0870p0dKdHSnR0p0dKdHSnR0p0RZaZhO+WUhsizcGE5BhIVtLwpc+QpCBCmD9CI45EcNITsAy8hbkUeQNgQoXZET3N+QtyKPIGwIULsiJ7m/IW5FHkDYEKF2RE9zfkLcijyBsCFC7Iie5vyFuRR5A2BChdkRPc35C3Io8gbAhQuyInub8hbkUeQNgQoXZET3N+Qvax2fRr5rG1AhQ7WMqNE7ax458spVBvLwLwOBeBwLwOBeBwLwOBeBwLwOA2rzj/KaJGHbLPJxZ5OLPJxZ5OLPJxZ5OLPJxZ5OKlIHCiC5Vxwx28DgXgcC8DgXgcC8DgXgcC8DgTFVG8aF7+P9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/yOP9fQrrW/fK04bzMG1DsWodi1DsWodi1DsWodi1DsNpU6YylTuEUOXWSC6yQXWSC6yQXWSC6yQXWSC6yQVSfwDKVdpY7ay1DsWodi1DsWodi1DsWodi1DsTFNHMCF5ZB1j88jXzrGVAhRDrHqjROXWOHHkLcijyBsCFC7Iie5vyFuRR5A2BChdkRPc35C3Io8gbAhQuyInub8hbkUeQNgQoXZET3N+QtyKPIGwIULsiJ7m/IW5FHkDYEKF2RE9zfkLcijyBsCFC7Iie5vySb7IU5DfciOIVxGhxj9Cjo0OBUKDWsdYaxHYxp5YM/PQHPrGg+saD6xoPrGg+saD6xoPrGgeNDJ5iThmZOu/WNB9Y0H1jQfWNB9Y0H1jQfWNBGMJ+ND/v8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAwEBPwEcf//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8BHH//xAA5EAABAQUDCQcCBQUAAAAAAAACAQADBDCTETSyNUBEcnN0g5KxBRITITFQUUFhFDJxkaFCY4CBkP/aAAgBAQAGPwL/AD/tduHpp8iKq10iKatdIimrXSIpq10iKatdIimrXSIpq10iKat3ihX6Js1loQwr5UX0VAVrpEU1a6RFNWukRTVrpEU1a6RFNWukRTVrpEU1bvPHD0B+SBUzZy6L0M0FWF06FAAUsRE+kl4jkEBDFDVE+ZMOD4UIUtKxfsklQMUISSxUX6tFOHf5Hb4hT/S5rDbUesrhDJcapYZUfvLzEuaw21HrK4QyXGqWGVH7y8xLmsNtR6yuEMlxqlhlR+8vMS5rDbUesrhDJcapYZUfvLzEuaw21HrK4QyXGqWGVH7y8xLmsNtR6yuEMlxqlhlR+8vMS5rDbUesrhDJcapYZUfvLzEuaw6qtiI9HrKWxfR0NsmHtX1QsMqNJPRYg8S5sLlHoPEHyRTG1W0fkbR+RtH5G0fkbR+RtH5G0fkb1cJw2e9odovnhIp2eS+ZL8tpHO2kc7aRztpHO2kc7aRztpHO2kc7B2j2c+eD4Zpair5p90ZEUnJfdXbaPyNo/I2j8jaPyNo/I2j8jaPyMTvxQd976gNi+wcUpL/WHF7TxSkv9YcXtPFKS/1hxe08UpL/AFhxe08UpL/WHF7TxSkv9YcXtPFKS/1hxe08UpL/AFhxewI9CEsEvTvEiNdwqC13CoLXcKgtdwqC13CoLXcKgtdwqC1v4YV4gs97O7RA3dhqqLZ6L8KjXg6ZNeDpk14OmTXg6ZNeDpk14OmTXg6ZNeDpkw9n9ngb3xCS1e7/AAjW/hRT9XgtdwqC13CoLXcKgtdwqC13CoLXcKgtdwqCxPChbRHzXukirmzgS80V4KL+8olRLLXYqsmHtS2xCX+JUaApYiRBonNmsNtR6yuEMlxqlhlR+8vMS5rDbUesrhDJcapYZUfvLzEuaw21HrK4QyXGqWGVH7y8xLmsNtR6yuEMlxqlhlR+8vMS5rDbUesrhDJcapYZUfvLzEuaw21HrK4QyXGqWGVH7y8xLmsNtR6yuEMlxqlhlR+8vMS5q5eF6AaEv7shgSEJJaip9ZLzwyQu4CAtnzJhyekgito2r90kqqrYiNFvna2gb4yH9FXNu45jYh0PwD1URspRlcmylGVybKUZXJspRlcmylGVybKUZXJspRlcmsLtGLVF/vFLQQ7QixFPREfE2UoyuTZSjK5NlKMrk2UoyuTZSjK5NlKMrk2UoyuTeG+jol4K/wBJPVVP+AH/xAAoEAABAgUDBAIDAQAAAAAAAAABAPARMFFxwSFAYTFBUKGBsYCR0ZD/2gAIAQEAAT8h/P8A4J2T0nVhOrCdWE6sJ1YTqwnVhEoL6kgA9S9fFxED6TqwnVhOrCdWE6sJ1YTqwuEdA9jbRoBAyhMFC+2bQJIclZQALr9Rk6bVK0JIRH5kwD3GiAPYoPBFlygbVzolOryWGrfwHOiU6vJYat/Ac6JTq8lhq38BzolOryWGrfwHOiU6vJYat/Ac6JTq8lhq38BzolOryWGrfwBHCEmmiUMQEiBQ6mSNoEGLxSimxIg7YGgrRYL9/lczbrmbdczbrmbdczbrmbdczbowgDT0I6P2UWbMNLqCRprCC4m2XE2y4m2XE2y4m2XE2y4m2XE2y6tWBFjoS8NOUVDDlH9LmbdczbrmbdczbrmbdczbrmbdQuIIHQvB7I6mJ37q0lxo8S6tJcaPEurSXGjxLq0lxo8S6tJcaPEurSXGjxLq0lxo8S6tJcaPAFnDRj0isCYp1ZTqynVlOrKdWU6sp1ZR5onYf2QiPHWTpA9R2TqwnVhOrCdWE6sJ1YTqwnVhFzcVkIwOgOpMUNaj2ivtOrKdWU6sp1ZTqynVlOrKhN5o6FgYn42wJoOKghKBzI5Hc6j6AkwooGiOhjlDhBpQAtq50SnV5LDVv4DnRKdXksNW/gOdEp1eSw1b+A50SnV5LDVv4DnRKdXksNW/gOdEp1eSw1b+A50SnV5LDVv4EeP4sAFRD3GiAPcSYbaa6hB1HuTTmpESAe5IywESSYABR8BqpJG2FRr/ACYFNzKbmU3MpuZTcym5lNzKJes4Ew+5egkAAA9puZTcym5lNzKbmU3MpuZRl1HFb4J/wA//2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPNPPPPNPPPOPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPHPPPOPPPPPPPPPPPPPPPLDDDDHPPPOLDDDLPPPPPPPPPPPPPPPPPPPKPPPPPPPPPPPPPPPPPPPPPPPPKPPPPPPPPPPPPPPPPPPPPPPPPKPPPPPPPPPPPPPPPPMMMNOMMMJMMMMPPPPPPPPPPPPPPPPNPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPPPPPPFPPPPPPPPPPPPPPPPPPPGPPPPNPPPPPPPPJPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP/xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/EBx//8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPxAcf//EACYQAQABAwQBBQEBAQEAAAAAAAERACExMFDw8UFAUWFxgZGhgJD/2gAIAQEAAT8Q/wC/7iwi5HtITQrVq1atWrCYGTo91YGmFR4LPuJBNCtWrVq1ashDEGcXFwPTMgkmUNR+NBDFHgkAGjGQMElGBYlk+V0Z5/JGGs5ADHmL2oAINBHwCRqEGyJkowgOspMT9B689m533LVRHs3O+5aqI9m533LVRHs3O+5aqI9m533LVRHs3O+5aqI9m532jVRKGE+AMr9aRbEZ5iB/Ef3REhc/ylj/ADSBSf8AhFB/npgQrBGWBKMPeT812GvYa9hr2GvYa9hr2Gpvwi7fIkP6NGdVgHBWMCAAY8AD0GvQa9Br0GvQa9Br0GvQaoA4tpWaDaBQ+Uxag7pCD7WQfwrsNew17DXsNew17DXsNVC+nwRDKqvkhPCUlElbq+vxc7blW4udtyrcXO25VuLnbcq3FztuVbi523Ktxc7blW4udtprQPDZ/YhgPiQnJbQq1atWrVqnZQW6PwSalFaSYDLLyEHLNodGrVq1atWrVYBaqOR+8hLB7EzZWRExA+wcaFWrVq1atUQqIDAlRkHwX0xHUpwCT9KACDROYeHikfmB+aPkbIkEb9njSCi7bBED6D157NzvuWqiPZud9y1UR7NzvuWqiPZud9y1UR7NzvuWqiPZud9y1UR7NzvtGqigkRZmQf4UD4BI1IhZEw6MktLQEshaSx9kTJowshWgFKuJQfbotXweCJVWwBlr5etjM/RPTY2XGH0I86AMGDBgwYMKoQ8D2Ri0qsukbFYO/sAQNAGDBgwYMH/q6K5SP8/8AP/Z'/%3e%3c/defs%3e%3c/svg%3e", $c = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%200%20C0.74851227%20-0.0049649%201.49702454%20-0.00992981%202.26821899%20-0.01504517%20C4.74034553%20-0.02962896%207.21240786%20-0.03646308%209.68457031%20-0.04199219%20C11.40846762%20-0.04774751%2013.13236492%20-0.0535052%2014.85626221%20-0.05926514%20C18.4709096%20-0.0697649%2022.08553482%20-0.07561402%2025.70019531%20-0.07910156%20C30.31795358%20-0.08457885%2034.93541589%20-0.10859476%2039.55308151%20-0.13707352%20C43.11514118%20-0.15575625%2046.67713042%20-0.16090853%2050.23923492%20-0.16243744%20C51.94078435%20-0.16545266%2053.64233287%20-0.17344277%2055.34383392%20-0.18662262%20C57.73205144%20-0.20379874%2060.11955721%20-0.2017749%2062.5078125%20-0.1953125%20C63.20212372%20-0.20452728%2063.89643494%20-0.21374207%2064.61178589%20-0.22323608%20C72.76181288%20-0.15462335%2078.85557515%202.78035121%2084.75097656%208.25878906%20C90.45188475%2014.41475866%2091.66085988%2020.4998253%2091.67382812%2028.6484375%20C91.68127548%2029.7712059%2091.68127548%2029.7712059%2091.68887329%2030.91665649%20C91.70345708%2033.38878303%2091.7102912%2035.86084536%2091.71582031%2038.33300781%20C91.72157564%2040.05690512%2091.72733332%2041.78080242%2091.73309326%2043.50469971%20C91.74359302%2047.1193471%2091.74944214%2050.73397232%2091.75292969%2054.34863281%20C91.75840697%2058.96639108%2091.78242288%2063.58385339%2091.81090164%2068.20151901%20C91.82958437%2071.76357868%2091.83473665%2075.32556792%2091.83626556%2078.88767242%20C91.83928079%2080.58922185%2091.8472709%2082.29077037%2091.86045074%2083.99227142%20C91.87762686%2086.38048894%2091.87560303%2088.76799471%2091.86914062%2091.15625%20C91.87835541%2091.85056122%2091.88757019%2092.54487244%2091.89706421%2093.26022339%20C91.82845147%20101.41025038%2088.89347692%20107.50401265%2083.41503906%20113.39941406%20C77.25906946%20119.10032225%2071.17400282%20120.30929738%2063.02539062%20120.32226562%20C62.27687836%20120.32723053%2061.52836609%20120.33219543%2060.75717163%20120.33731079%20C58.2850451%20120.35189458%2055.81298277%20120.3587287%2053.34082031%20120.36425781%20C51.61692301%20120.37001314%2049.89302571%20120.37577082%2048.16912842%20120.38153076%20C44.55448103%20120.39203052%2040.9398558%20120.39787964%2037.32519531%20120.40136719%20C32.70743705%20120.40684447%2028.08997474%20120.43086038%2023.47230911%20120.45933914%20C19.91024945%20120.47802187%2016.34826021%20120.48317415%2012.7861557%20120.48470306%20C11.08460627%20120.48771829%209.38305775%20120.4957084%207.6815567%20120.50888824%20C5.29333918%20120.52606436%202.90583342%20120.52404053%200.51757812%20120.51757812%20C-0.17673309%20120.52679291%20-0.87104431%20120.53600769%20-1.58639526%20120.54550171%20C-9.73642225%20120.47688897%20-15.83018452%20117.54191442%20-21.72558594%20112.06347656%20C-27.42649413%20105.90750696%20-28.63546926%2099.82244032%20-28.6484375%2091.67382812%20C-28.6534024%2090.92531586%20-28.65836731%2090.17680359%20-28.66348267%2089.40560913%20C-28.67806646%2086.9334826%20-28.68490058%2084.46142027%20-28.69042969%2081.98925781%20C-28.69618501%2080.26536051%20-28.7019427%2078.54146321%20-28.70770264%2076.81756592%20C-28.7182024%2073.20291853%20-28.72405152%2069.5882933%20-28.72753906%2065.97363281%20C-28.73301635%2061.35587455%20-28.75703226%2056.73841224%20-28.78551102%2052.12074661%20C-28.80419375%2048.55868695%20-28.80934603%2044.99669771%20-28.81087494%2041.4345932%20C-28.81389016%2039.73304377%20-28.82188027%2038.03149525%20-28.83506012%2036.3299942%20C-28.85223624%2033.94177668%20-28.8502124%2031.55427092%20-28.84375%2029.16601562%20C-28.85296478%2028.47170441%20-28.86217957%2027.77739319%20-28.87167358%2027.06204224%20C-28.80306085%2018.91201525%20-25.86808629%2012.81825298%20-20.38964844%206.92285156%20C-14.23367884%201.22194337%20-8.1486122%200.01296824%200%200%20Z%20'%20fill='%23000000'%20transform='translate(28.4873046875,-0.1611328125)'/%3e%3cpath%20d='M0%200%20C1.0209375%200.29003906%202.041875%200.58007812%203.09375%200.87890625%20C9.11640448%202.77287259%2012.79927311%204.4520734%2016%2010%20C16.91876962%2012.75080724%2017.29503585%2015.10749166%2017%2018%20C14.58196242%2022.83607515%2011.20580589%2026.69774432%206.09960938%2028.77197266%20C3.93360055%2029.4719387%201.75993403%2030.09375371%20-0.4375%2030.6875%20C-1.54448242%2031.00557617%20-1.54448242%2031.00557617%20-2.67382812%2031.33007812%20C-19.28314315%2036.010214%20-39.48965405%2036.21968875%20-56%2031%20C-57.02222656%2030.70996094%20-58.04445313%2030.41992188%20-59.09765625%2030.12109375%20C-65.11646664%2028.22584252%20-68.84329416%2026.57684698%20-72%2021%20C-73.43075745%2016.22795268%20-73.56409881%2013.12819762%20-71.3125%208.625%20C-66.93538163%203.65637915%20-62.86037425%202.11061964%20-56.625%200.375%20C-55.8825%200.1584375%20-55.14%20-0.058125%20-54.375%20-0.28125%20C-37.56376383%20-5.09294657%20-16.72027626%20-5.3514071%200%200%20Z%20'%20fill='%23F2F2F2'%20transform='translate(88,45)'/%3e%3cpath%20d='M0%200%20C1.875%202.75%201.875%202.75%202.5625%206.25%20C1.875%209.75%201.875%209.75%20-0.8125%2012.5625%20C-9.72474689%2018.44794606%20-19.69890789%2018.51288479%20-30.125%2017.75%20C-35.47196914%2016.57875914%20-39.69268958%2015.0157627%20-43.8125%2011.375%20C-45.44861188%208.10277624%20-45.80183068%206.35976362%20-45.125%202.75%20C-42.01964239%20-1.70101257%20-38.3600905%20-3.41146581%20-33.265625%20-4.74609375%20C-22.1485738%20-6.52979973%20-9.43733619%20-6.79488206%200%200%20Z%20'%20fill='%23070707'%20transform='translate(81.125,54.25)'/%3e%3c/svg%3e", jc = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%201200%201200'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2596_138580)'%3e%3crect%20y='-0.000976562'%20width='1200'%20height='1200'%20fill='%23AB9FF2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M522.218%20764.813C475.101%20837.011%20396.147%20928.377%20291.089%20928.377C241.425%20928.377%20193.671%20907.932%20193.671%20819.121C193.671%20592.942%20502.479%20242.812%20789.003%20242.812C952.003%20242.812%201016.95%20355.901%201016.95%20484.325C1016.95%20649.167%20909.979%20837.65%20803.647%20837.65C769.901%20837.65%20753.346%20819.121%20753.346%20789.731C753.346%20782.064%20754.62%20773.758%20757.167%20764.813C720.874%20826.788%20650.835%20884.292%20585.253%20884.292C537.499%20884.292%20513.304%20854.262%20513.304%20812.093C513.304%20796.759%20516.487%20780.786%20522.218%20764.813ZM769.035%20479.871C769.035%20517.293%20746.956%20536.003%20722.258%20536.003C697.185%20536.003%20675.481%20517.293%20675.481%20479.871C675.481%20442.449%20697.185%20423.738%20722.258%20423.738C746.956%20423.738%20769.035%20442.449%20769.035%20479.871ZM909.367%20479.872C909.367%20517.294%20887.288%20536.005%20862.59%20536.005C837.517%20536.005%20815.813%20517.294%20815.813%20479.872C815.813%20442.45%20837.517%20423.74%20862.59%20423.74C887.288%20423.74%20909.367%20442.45%20909.367%20479.872Z'%20fill='%23FFFDF8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2596_138580'%3e%3crect%20y='-0.000976562'%20width='1200'%20height='1200'%20rx='600'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Wc = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.8742%204.5804L18.5392%208.15088C18.8511%208.45416%2019.0047%208.76103%2018.9999%209.07026C18.995%209.3795%2018.8608%209.66136%2018.5984%209.91707C18.3239%2010.1847%2018.0277%2010.3203%2017.7109%2010.3262C17.3941%2010.331%2017.0797%2010.1811%2016.7677%209.87785L13.0193%206.22648C12.5937%205.8114%2012.1825%205.51762%2011.7872%205.34516C11.3917%205.1727%2010.9758%205.14535%2010.5405%205.26428C10.104%205.38203%209.63603%205.68532%209.13422%206.17295C8.44258%206.84733%208.11246%207.48007%208.14634%208.0712C8.18018%208.6623%208.52358%209.27602%209.17534%209.90996L12.954%2013.5922C13.2696%2013.8991%2013.4244%2014.2059%2013.4195%2014.5104C13.4147%2014.8161%2013.2793%2015.098%2013.012%2015.3584C12.746%2015.6177%2012.4522%2015.7533%2012.133%2015.764C11.8137%2015.7747%2011.4957%2015.6261%2011.1813%2015.3192L7.51634%2011.7487C6.92022%2011.1683%206.48975%2010.6188%206.22495%2010.1002C5.96014%209.58168%205.86099%208.99533%205.92991%208.34118C5.99158%207.78099%206.17416%207.23864%206.47887%206.71294C6.78237%206.18723%207.21768%205.64964%207.78237%205.09896C8.45466%204.44362%209.09673%203.94171%209.70858%203.59203C10.3192%203.24236%2010.9105%203.04849%2011.4812%203.00806C12.0532%202.96762%2012.6166%203.07942%2013.1741%203.34346C13.7315%203.6075%2014.2974%204.01902%2014.873%204.5804H14.8742Z'%20fill='url(%23paint0_linear_4212_6487)'/%3e%3cpath%20d='M9.12459%2018.9872L5.46081%2015.4167C5.14884%2015.1122%204.99527%2014.8066%205.00011%2014.4973C5.00495%2014.1881%205.13917%2013.9062%205.40156%2013.6505C5.67604%2013.3829%205.97229%2013.2473%206.28909%2013.2414C6.60589%2013.2366%206.92028%2013.3853%207.23225%2013.6897L10.9795%2017.3411C11.4063%2017.7562%2011.8162%2018.05%2012.2116%2018.2224C12.607%2018.3949%2013.023%2018.421%2013.4595%2018.3033C13.896%2018.1856%2014.3639%2017.8823%2014.8657%2017.3934C15.5574%2016.7191%2015.8875%2016.0863%2015.8537%2015.4952C15.8198%2014.9041%2015.4764%2014.2904%2014.8247%2013.6553L12.8114%2011.7106C12.4958%2011.4038%2012.341%2011.0969%2012.3458%2010.7925C12.3507%2010.4868%2012.4861%2010.2049%2012.7533%209.94445C13.0194%209.68514%2013.3132%209.54957%2013.6324%209.53887C13.9516%209.52816%2014.2696%209.67682%2014.584%209.9837L16.4824%2011.8165C17.0785%2012.3969%2017.509%2012.9464%2017.7738%2013.465C18.0386%2013.9835%2018.1378%2014.5699%2018.0688%2015.224C18.0072%2015.7842%2017.8246%2016.3266%2017.5199%2016.8523C17.2164%2017.378%2016.7811%2017.9156%2016.2164%2018.4663C15.5441%2019.1216%2014.902%2019.6235%2014.2902%2019.9732C13.6783%2020.3229%2013.0871%2020.5179%2012.5151%2020.5583C11.9432%2020.5988%2011.3797%2020.487%2010.8223%2020.2229C10.2648%2019.9589%209.69894%2019.5474%209.12338%2018.986L9.12459%2018.9872Z'%20fill='url(%23paint1_linear_4212_6487)'/%3e%3cpath%20d='M11.4098%209.77448C12.153%209.77448%2012.7556%209.18182%2012.7556%208.4507C12.7556%207.71962%2012.153%207.12695%2011.4098%207.12695C10.6665%207.12695%2010.064%207.71962%2010.064%208.4507C10.064%209.18182%2010.6665%209.77448%2011.4098%209.77448Z'%20fill='url(%23paint2_radial_4212_6487)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_4212_6487'%20x1='17.9364'%20y1='6.66057'%20x2='6.64095'%20y2='11.7639'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23201C1B'/%3e%3cstop%20offset='0.36'%20stop-color='%2377390D'/%3e%3cstop%20offset='0.67'%20stop-color='%23EA8101'/%3e%3cstop%20offset='1'%20stop-color='%23F4B852'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_4212_6487'%20x1='6.3763'%20y1='17.0541'%20x2='19.5023'%20y2='13.0825'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%231F1D1C'/%3e%3cstop%20offset='0.37'%20stop-color='%2377390D'/%3e%3cstop%20offset='0.67'%20stop-color='%23EA8101'/%3e%3cstop%20offset='1'%20stop-color='%23F4FB52'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint2_radial_4212_6487'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(11.4098%208.45191)%20scale(1.34581%201.32377)'%3e%3cstop%20stop-color='%23F4B852'/%3e%3cstop%20offset='0.33'%20stop-color='%23EA8101'/%3e%3cstop%20offset='0.64'%20stop-color='%2377390D'/%3e%3cstop%20offset='1'%20stop-color='%23211C1D'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e", Kc = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.4283%2019.185V16.4677C19.4283%2016.36%2019.3855%2016.2572%2019.3092%2016.1809L7.74741%204.61916C7.67106%204.54281%207.56829%204.5%207.46055%204.5H4.74332C4.60917%204.5%204.5%204.60917%204.5%204.74332V7.26787C4.5%207.37562%204.54281%207.47837%204.61916%207.55472L8.76923%2011.7047C8.86412%2011.7997%208.86412%2011.9538%208.76923%2012.0487L4.57136%2016.2465C4.52569%2016.2922%204.5%2016.3543%204.5%2016.4185V19.185C4.5%2019.319%204.60917%2019.4283%204.74332%2019.4283H9.28369C9.41784%2019.4283%209.527%2019.319%209.527%2019.185V17.5552C9.527%2017.491%209.55271%2017.4289%209.59838%2017.3832L11.8504%2015.1312C11.9453%2015.0363%2012.0994%2015.0363%2012.1943%2015.1312L16.3729%2019.3099C16.4492%2019.3862%2016.552%2019.429%2016.6597%2019.429H19.1843C19.3185%2019.429%2019.4276%2019.3198%2019.4276%2019.1857L19.4283%2019.185Z'%20fill='white'/%3e%3cpath%20d='M13.372%208.09816H15.6461C15.781%208.09816%2015.8909%208.20805%2015.8909%208.34292V10.617C15.8909%2010.8353%2016.1549%2010.9445%2016.309%2010.7897L19.4287%207.66505C19.4743%207.61937%2019.5001%207.5573%2019.5001%207.49236V4.75588C19.5001%204.62102%2019.3908%204.51114%2019.2553%204.51114L16.4781%204.50757C16.4132%204.50757%2016.3511%204.53326%2016.3047%204.57892L13.1986%207.68003C13.0445%207.83415%2013.1537%208.09816%2013.3713%208.09816H13.372Z'%20fill='%23EE7A30'/%3e%3c/svg%3e";
function Wo(e, t = 4, n = 5) {
  if (e.length <= t + n)
    return e;
  const r = e.slice(0, t), i = e.slice(e.length - n);
  return `${r}...${i}`;
}
const rp = {
  [le.MAGICEDEN]: Mc,
  [le.UNISAT]: Wc,
  [le.XVERSE]: Kc,
  [le.LEATHER]: Hc,
  [le.OKX]: Dc,
  [le.PHANTOM]: jc,
  [le.OYL]: $c
}, np = {
  [Hn.MAINNET]: "Mainnet",
  [Hn.TESTNET]: "Testnet",
  [Hn.SIGNET]: "Signet"
};
function ip({
  address: e,
  network: t,
  onViewProfile: n,
  onChangeWallet: r,
  onDisconnectWallet: i,
  renderAvatar: s
}) {
  const { wallet: u } = Xt();
  return /* @__PURE__ */ ue.jsx(
    rn,
    {
      as: "section",
      className: "ord-connect-font ord-wallet-connected-container relative inline-block text-left",
      children: ({ open: o }) => /* @__PURE__ */ ue.jsxs(ue.Fragment, { children: [
        /* @__PURE__ */ ue.jsxs(rn.Button, { className: "ord-wallet-connected-button", children: [
          /* @__PURE__ */ ue.jsxs("div", { className: "wallet-identifier-container", children: [
            s ? s(e, "large") : /* @__PURE__ */ ue.jsx(
              ka,
              {
                size: 28,
                variant: "beam",
                name: e,
                colors: ["#1C2DCB", "#F226B8"]
              }
            ),
            /* @__PURE__ */ ue.jsx(
              "img",
              {
                src: rp[u],
                alt: `${u} is connected`
              }
            )
          ] }),
          /* @__PURE__ */ ue.jsxs("section", { className: "address-container", children: [
            /* @__PURE__ */ ue.jsx("p", { className: "address", children: Wo(e) }),
            /* @__PURE__ */ ue.jsxs("section", { className: "network-container", children: [
              /* @__PURE__ */ ue.jsx("div", { className: "status-indicator" }),
              /* @__PURE__ */ ue.jsx("p", { className: "network", children: np[t] ?? t })
            ] })
          ] }),
          /* @__PURE__ */ ue.jsx(
            "img",
            {
              src: ep,
              className: `dropdown-button ${o ? "close-dropdown-button" : "expand-dropdown-button"}`,
              alt: ""
            }
          )
        ] }),
        /* @__PURE__ */ ue.jsx(
          $n,
          {
            as: ot,
            enter: "transition ease-out duration-100",
            enterFrom: "transform opacity-0 scale-95",
            enterTo: "transform opacity-100 scale-100",
            leave: "transition ease-in duration-75",
            leaveFrom: "transform opacity-100 scale-100",
            leaveTo: "transform opacity-0 scale-95",
            children: /* @__PURE__ */ ue.jsxs(rn.Items, { className: "ord-wallet-connection-dropdown", children: [
              /* @__PURE__ */ ue.jsxs(
                rn.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => n == null ? void 0 : n(),
                  children: [
                    /* @__PURE__ */ ue.jsx("span", { className: "label", children: "View profile" }),
                    /* @__PURE__ */ ue.jsx("span", { className: "value", children: Wo(e) })
                  ]
                }
              ),
              /* @__PURE__ */ ue.jsx(
                rn.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => r == null ? void 0 : r(),
                  children: /* @__PURE__ */ ue.jsx("span", { className: "change-wallet-label", children: "Change wallet" })
                }
              ),
              /* @__PURE__ */ ue.jsx("hr", { className: "horizontal-separator" }),
              /* @__PURE__ */ ue.jsxs(
                rn.Item,
                {
                  as: "button",
                  className: "dropdown-button",
                  onClick: () => i == null ? void 0 : i(),
                  children: [
                    /* @__PURE__ */ ue.jsx("span", { className: "label", children: "Disconnect wallet" }),
                    /* @__PURE__ */ ue.jsx("img", { src: tp, className: "logout-icon", alt: "" })
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
function op({
  openModal: e,
  disabled: t
}) {
  return /* @__PURE__ */ ue.jsx(
    "button",
    {
      type: "button",
      onClick: e,
      disabled: t,
      "data-testid": "connect-wallet-button",
      className: "ord-connect-font ord-connect-wallet-button",
      children: /* @__PURE__ */ ue.jsx("span", {})
    }
  );
}
const sp = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2022C17.5228%2022%2022%2017.5228%2022%2012C22%206.47715%2017.5228%202%2012%202C6.47715%202%202%206.47715%202%2012C2%2017.5228%206.47715%2022%2012%2022Z'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%209L9%2015'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%209L15%2015'%20stroke='%23F2F2F2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
function qc() {
  return typeof window > "u" ? !1 : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );
}
async function up() {
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
const ap = {
  [le.OKX]: "https://www.okx.com/web3",
  [le.MAGICEDEN]: "https://wallet.magiceden.io/",
  [le.UNISAT]: "https://unisat.io/download",
  // their www subdomain doesn't work
  [le.XVERSE]: "https://www.xverse.app/download",
  [le.LEATHER]: "https://leather.io/install-extension",
  [le.PHANTOM]: "https://phantom.com/download",
  [le.OYL]: "https://www.oyl.io/#get-wallet"
}, cp = async ({
  network: e,
  wallet: t,
  chain: n = kt.BITCOIN
}, { readOnly: r = !1 } = {}) => {
  switch (t) {
    case le.UNISAT: {
      const i = await Ol(e, n, { readOnly: r });
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
    case le.XVERSE: {
      const i = await Bl(e);
      if (!i || i.length < 1)
        throw new Error("Xverse via Ordit returned no addresses");
      const s = i.find(
        (o) => o.format === "p2sh-p2wpkh" || o.format === "segwit"
      );
      if (!s)
        throw new Error(
          "Xverse via Ordit did not return a P2SH or Segwit address"
        );
      const u = i.find(
        (o) => o.format === "taproot"
      );
      if (!u)
        throw new Error("Xverse via Ordit did not return a Taproot address");
      return {
        address: {
          ordinals: u.address,
          payments: s.address
        },
        publicKey: {
          ordinals: u.publicKey,
          payments: s.publicKey
        },
        format: {
          ordinals: u.format,
          payments: s.format
        }
      };
    }
    case le.MAGICEDEN: {
      const i = await wl(e);
      if (!i || i.length < 1)
        throw new Error("Magic Eden via Ordit returned no addresses");
      const s = i.find(
        (o) => o.format === "segwit" || o.format === "p2sh-p2wpkh"
      );
      if (!s)
        throw new Error(
          "Magic Eden via Ordit did not return a P2SH or Segwit address"
        );
      const u = i.find(
        (o) => o.format === "taproot"
      );
      if (!u)
        throw new Error(
          "Magic Eden via Ordit did not return a Taproot address"
        );
      return {
        address: {
          ordinals: u.address,
          payments: s.address
        },
        publicKey: {
          ordinals: u.publicKey,
          payments: s.publicKey
        },
        format: {
          ordinals: u.format,
          payments: s.format
        }
      };
    }
    case le.LEATHER: {
      const i = await pl(e);
      if (!i || i.length < 1)
        throw new Error("Leather via Ordit returned no addresses");
      const s = i.find(
        (o) => o.format === "segwit"
      );
      if (!s)
        throw new Error("Leather via Ordit did not return a Segwit address");
      const u = i.find(
        (o) => o.format === "taproot"
      );
      if (!u)
        throw new Error("Leather via Ordit did not return a Taproot address");
      return {
        address: {
          ordinals: u.address,
          payments: s.address
        },
        publicKey: {
          ordinals: u.publicKey,
          payments: s.publicKey
        },
        format: {
          ordinals: u.format,
          payments: s.format
        }
      };
    }
    case le.OKX: {
      const i = await Al(e);
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
    case le.PHANTOM: {
      const i = await Il(e);
      if (!i || i.length < 1)
        throw new Error("Phantom via Ordit returned no addresses");
      const s = i.find(
        (o) => o.format === "segwit"
      );
      if (!s)
        throw new Error("Phantom via Ordit did not return a Segwit address");
      const u = i.find(
        (o) => o.format === "taproot"
      );
      if (!u)
        throw new Error("Phantom via Ordit did not return a Taproot address");
      return {
        address: {
          ordinals: u.address,
          payments: s.address
        },
        publicKey: {
          ordinals: u.publicKey,
          payments: s.publicKey
        },
        format: {
          ordinals: u.format,
          payments: s.format
        }
      };
    }
    case le.OYL: {
      const i = await Pl(e);
      if (!i || i.length < 1)
        throw new Error("Oyl via Ordit returned no addresses");
      const s = i.find(
        (o) => o.format === "p2sh-p2wpkh" || o.format === "segwit"
      );
      if (!s)
        throw new Error(
          "Oyl via Ordit did not return a P2SH or Segwit address"
        );
      const u = i.find(
        (o) => o.format === "taproot"
      );
      if (!u)
        throw new Error("Oyl via Ordit did not return a Taproot address");
      return {
        address: {
          ordinals: u.address,
          payments: s.address
        },
        publicKey: {
          ordinals: u.publicKey,
          payments: s.publicKey
        },
        format: {
          ordinals: u.format,
          payments: s.format
        }
      };
    }
    default:
      throw new Error("Invalid wallet");
  }
};
function lp({
  onClose: e,
  onError: t
}) {
  const {
    updateAddress: n,
    network: r,
    updateWallet: i,
    updatePublicKey: s,
    updateFormat: u,
    disconnectWallet: o,
    address: a,
    publicKey: d,
    format: c,
    wallet: w,
    chain: y
  } = Xt(), f = (b, I) => {
    t(I.message ?? I.toString()), console.error(`Error while connecting to ${b} wallet`, I), o(), I instanceof fl && window.open(
      ap[b],
      "_blank",
      "noopener,noreferrer"
    );
  }, E = async (b, { readOnly: I = !1 } = {}) => {
    try {
      const { address: x, publicKey: m, format: T } = await cp(
        { network: r, wallet: b, chain: y },
        { readOnly: I }
      );
      return n({
        ordinals: x.ordinals,
        payments: x.payments
      }), s({
        ordinals: m.ordinals,
        payments: m.payments
      }), i(b), u({
        ordinals: T.ordinals,
        payments: T.payments
      }), e(), !0;
    } catch (x) {
      return f(b, x), !1;
    }
  };
  return Me(() => {
    if (w !== le.UNISAT)
      return;
    let b = !0, I = !1;
    const x = () => E(le.UNISAT);
    return a && d && c && (async () => {
      const T = await up();
      if (b) {
        if (!T) {
          o();
          return;
        }
        I = await E(le.UNISAT, {
          readOnly: !0
        }), b && I && window.unisat.addListener("accountsChanged", x);
      }
    })(), () => {
      b = !1, I && window.unisat.removeListener("accountsChanged", x);
    };
  }, [w]), { connectWallet: E };
}
const fp = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%2018L15%2012L9%206'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", hp = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20stroke='%23fff'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20stroke-width='2'%3e%3ccircle%20cx='22'%20cy='22'%20r='1'%3e%3canimate%20attributeName='r'%20begin='0s'%20dur='1.8s'%20values='1;%2020'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.165,%200.84,%200.44,%201'%20repeatCount='indefinite'/%3e%3canimate%20attributeName='stroke-opacity'%20begin='0s'%20dur='1.8s'%20values='1;%200'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.3,%200.61,%200.355,%201'%20repeatCount='indefinite'/%3e%3c/circle%3e%3ccircle%20cx='22'%20cy='22'%20r='1'%3e%3canimate%20attributeName='r'%20begin='-0.9s'%20dur='1.8s'%20values='1;%2020'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.165,%200.84,%200.44,%201'%20repeatCount='indefinite'/%3e%3canimate%20attributeName='stroke-opacity'%20begin='-0.9s'%20dur='1.8s'%20values='1;%200'%20calcMode='spline'%20keyTimes='0;%201'%20keySplines='0.3,%200.61,%200.355,%201'%20repeatCount='indefinite'/%3e%3c/circle%3e%3c/g%3e%3c/svg%3e", dp = {
  [le.MAGICEDEN]: "Magic Eden",
  [le.UNISAT]: "UniSat",
  [le.XVERSE]: "Xverse",
  [le.LEATHER]: "Leather",
  [le.OKX]: "OKX",
  [le.PHANTOM]: "Phantom",
  [le.OYL]: "Oyl"
};
function pp({
  wallet: e,
  onConnect: t,
  icon: n,
  renderAvatar: r,
  isPreferred: i
}) {
  const s = qc(), { wallet: u, address: o } = Xt(), [a, d] = ve(!1), c = dp[e], w = async () => {
    d(!0);
    try {
      await t();
    } catch {
    }
    d(!1);
  }, y = u === e && o.ordinals;
  return /* @__PURE__ */ ue.jsx(
    "button",
    {
      type: "button",
      className: "wallet-option-button",
      onClick: w,
      children: /* @__PURE__ */ ue.jsxs("div", { className: "option-wrapper", children: [
        /* @__PURE__ */ ue.jsx("img", { className: "wallet-icon", src: n, alt: "" }),
        /* @__PURE__ */ ue.jsxs("div", { className: "wallet-option", children: [
          /* @__PURE__ */ ue.jsx("p", { className: "wallet-option-label", children: c }),
          /* @__PURE__ */ ue.jsx("p", { className: "wallet-option-subtitle", children: s ? "Available on app" : "" })
        ] }),
        u === e && o.ordinals ? /* @__PURE__ */ ue.jsxs("div", { className: "wallet-option-connected-address", children: [
          r ? r(o.ordinals, "small") : /* @__PURE__ */ ue.jsx(
            ka,
            {
              size: s ? 12 : 16,
              variant: "beam",
              name: o.ordinals,
              colors: ["#1C2DCB", "#F226B8"]
            }
          ),
          /* @__PURE__ */ ue.jsx("span", { className: "label", children: Wo(o.ordinals) })
        ] }) : null,
        !y && i ? /* @__PURE__ */ ue.jsx("span", { className: "preferred-label", children: "Preferred" }) : null,
        a ? /* @__PURE__ */ ue.jsx(
          "img",
          {
            src: hp,
            width: s ? 20 : 24,
            height: s ? 20 : 24,
            alt: `${c} extension is loading`
          }
        ) : /* @__PURE__ */ ue.jsx(
          "img",
          {
            src: fp,
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
const gp = {
  [kt.BITCOIN]: "Bitcoin",
  [kt.FRACTAL_BITCOIN]: "Fractal Bitcoin"
};
function mp({
  isOpen: e,
  closeModal: t,
  renderAvatar: n,
  preferredWallet: r,
  walletsOrder: i,
  visibleWallets: s
}) {
  const [u, o] = ve(""), { connectWallet: a } = lp({
    onClose: t,
    onError: (f) => o(f)
  }), { network: d, chain: c } = Xt(), w = qc(), y = Ce(() => {
    const E = [
      {
        wallet: le.OKX,
        onConnect: () => a(le.OKX),
        icon: Dc,
        hidden: w && d !== Hn.MAINNET,
        order: 20,
        chains: [kt.BITCOIN]
      },
      {
        wallet: le.UNISAT,
        onConnect: () => a(le.UNISAT),
        icon: Wc,
        hidden: w,
        order: 21,
        chains: [kt.BITCOIN, kt.FRACTAL_BITCOIN]
      },
      {
        wallet: le.XVERSE,
        onConnect: () => a(le.XVERSE),
        icon: Kc,
        order: 22,
        chains: [kt.BITCOIN]
      },
      {
        wallet: le.MAGICEDEN,
        onConnect: () => a(le.MAGICEDEN),
        icon: Mc,
        order: 23,
        chains: [kt.BITCOIN]
      },
      {
        wallet: le.LEATHER,
        onConnect: () => a(le.LEATHER),
        icon: Hc,
        hidden: w,
        order: 24,
        chains: [kt.BITCOIN]
      },
      {
        wallet: le.PHANTOM,
        onConnect: () => a(le.PHANTOM),
        icon: jc,
        hidden: w,
        order: 25,
        chains: [kt.BITCOIN]
      },
      {
        wallet: le.OYL,
        onConnect: () => a(le.OYL),
        icon: $c,
        hidden: w,
        order: 26,
        chains: [kt.BITCOIN]
      }
    ].filter((I) => (s || []).includes(I.wallet)).filter(
      (I) => I.chains.includes(c) && !I.hidden
    );
    return i ? E.map((I) => {
      const x = i.findIndex(
        (m) => m === I.wallet
      );
      return x >= 0 ? { ...I, order: x } : I;
    }).sort((I, x) => I.order - x.order) : E;
  }, [w, d, i, a, c]);
  return /* @__PURE__ */ ue.jsx($n, { appear: !0, show: e, as: ot, children: /* @__PURE__ */ ue.jsxs(
    to,
    {
      as: "div",
      className: "ord-connect-font ord-connect-wallet-modal",
      onClose: t,
      children: [
        /* @__PURE__ */ ue.jsx(
          $n.Child,
          {
            as: ot,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ ue.jsx("section", { className: "backdrop" })
          }
        ),
        /* @__PURE__ */ ue.jsx("section", { className: "outer-container", children: /* @__PURE__ */ ue.jsx("div", { className: "inner-container", children: /* @__PURE__ */ ue.jsx(
          $n.Child,
          {
            as: ot,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ ue.jsxs(to.Panel, { className: "panel", children: [
              /* @__PURE__ */ ue.jsxs("section", { className: "panel-title-container", children: [
                /* @__PURE__ */ ue.jsxs(to.Title, { as: "h3", className: "panel-title", children: [
                  "Choose ",
                  gp[c],
                  " wallet to connect"
                ] }),
                /* @__PURE__ */ ue.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: t,
                    className: "close-button",
                    children: /* @__PURE__ */ ue.jsx("img", { src: sp, alt: "Close" })
                  }
                )
              ] }),
              /* @__PURE__ */ ue.jsxs("section", { className: "panel-content-container", children: [
                /* @__PURE__ */ ue.jsx("section", { className: "panel-content-inner-container", children: y.map((f, E) => {
                  const b = E === y.length - 1;
                  return /* @__PURE__ */ ue.jsxs(ot, { children: [
                    /* @__PURE__ */ ue.jsx(
                      pp,
                      {
                        wallet: f.wallet,
                        onConnect: async () => {
                          o("");
                          const I = f.onConnect().then((m) => (m && o(""), m)), x = await Promise.race([
                            I,
                            new Promise((m) => {
                              setTimeout(() => m("timeout"), 5e3);
                            })
                          ]);
                          return typeof x == "string" ? (o(
                            "No wallet pop-up? The extension is not responding. Try reloading your browser."
                          ), I) : x;
                        },
                        icon: f.icon,
                        renderAvatar: n,
                        isPreferred: r === f.wallet
                      }
                    ),
                    !b && /* @__PURE__ */ ue.jsx("hr", { className: "horizontal-separator" })
                  ] }, f.wallet);
                }) }),
                /* @__PURE__ */ ue.jsx("p", { className: "error-message", children: u })
              ] })
            ] })
          }
        ) }) })
      ]
    }
  ) });
}
function L2({
  hideConnectButton: e,
  onViewProfile: t,
  onChangeWalletClick: n,
  onDisconnectWalletClick: r,
  renderAvatar: i,
  preferredWallet: s,
  walletsOrder: u
}) {
  const {
    address: o,
    disconnectWallet: a,
    network: d,
    isModalOpen: c,
    openModal: w,
    closeModal: y,
    visibleWallets: f
  } = Xt(), E = Wl(), b = () => e ? null : o != null && o.ordinals ? /* @__PURE__ */ ue.jsx(
    ip,
    {
      address: o.ordinals,
      network: d,
      onViewProfile: t,
      onChangeWallet: () => {
        w(), n == null || n();
      },
      onDisconnectWallet: () => {
        a(), r == null || r();
      },
      renderAvatar: i
    }
  ) : /* @__PURE__ */ ue.jsx(op, { disabled: !E, openModal: w });
  return /* @__PURE__ */ ue.jsxs(ue.Fragment, { children: [
    b(),
    E ? /* @__PURE__ */ ue.jsx(
      mp,
      {
        isOpen: c,
        closeModal: y,
        renderAvatar: i,
        preferredWallet: s,
        walletsOrder: u,
        visibleWallets: f
      }
    ) : null
  ] });
}
var wp = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, no = Math.ceil, _t = Math.floor, vt = "[BigNumber Error] ", Qs = vt + "Number primitive has more than 15 significant digits: ", Ft = 1e14, Ae = 14, io = 9007199254740991, oo = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], lr = 1e7, nt = 1e9;
function Vc(e) {
  var t, n, r, i = m.prototype = { constructor: m, toString: null, valueOf: null }, s = new m(1), u = 20, o = 4, a = -7, d = 21, c = -1e7, w = 1e7, y = !1, f = 1, E = 0, b = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, I = "0123456789abcdefghijklmnopqrstuvwxyz", x = !0;
  function m(S, A) {
    var _, N, P, F, W, H, $, G, k = this;
    if (!(k instanceof m)) return new m(S, A);
    if (A == null) {
      if (S && S._isBigNumber === !0) {
        k.s = S.s, !S.c || S.e > w ? k.c = k.e = null : S.e < c ? k.c = [k.e = 0] : (k.e = S.e, k.c = S.c.slice());
        return;
      }
      if ((H = typeof S == "number") && S * 0 == 0) {
        if (k.s = 1 / S < 0 ? (S = -S, -1) : 1, S === ~~S) {
          for (F = 0, W = S; W >= 10; W /= 10, F++) ;
          F > w ? k.c = k.e = null : (k.e = F, k.c = [S]);
          return;
        }
        G = String(S);
      } else {
        if (!wp.test(G = String(S))) return r(k, G, H);
        k.s = G.charCodeAt(0) == 45 ? (G = G.slice(1), -1) : 1;
      }
      (F = G.indexOf(".")) > -1 && (G = G.replace(".", "")), (W = G.search(/e/i)) > 0 ? (F < 0 && (F = W), F += +G.slice(W + 1), G = G.substring(0, W)) : F < 0 && (F = G.length);
    } else {
      if (We(A, 2, I.length, "Base"), A == 10 && x)
        return k = new m(S), U(k, u + k.e + 1, o);
      if (G = String(S), H = typeof S == "number") {
        if (S * 0 != 0) return r(k, G, H, A);
        if (k.s = 1 / S < 0 ? (G = G.slice(1), -1) : 1, m.DEBUG && G.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Qs + S);
      } else
        k.s = G.charCodeAt(0) === 45 ? (G = G.slice(1), -1) : 1;
      for (_ = I.slice(0, A), F = W = 0, $ = G.length; W < $; W++)
        if (_.indexOf(N = G.charAt(W)) < 0) {
          if (N == ".") {
            if (W > F) {
              F = $;
              continue;
            }
          } else if (!P && (G == G.toUpperCase() && (G = G.toLowerCase()) || G == G.toLowerCase() && (G = G.toUpperCase()))) {
            P = !0, W = -1, F = 0;
            continue;
          }
          return r(k, String(S), H, A);
        }
      H = !1, G = n(G, A, 10, k.s), (F = G.indexOf(".")) > -1 ? G = G.replace(".", "") : F = G.length;
    }
    for (W = 0; G.charCodeAt(W) === 48; W++) ;
    for ($ = G.length; G.charCodeAt(--$) === 48; ) ;
    if (G = G.slice(W, ++$)) {
      if ($ -= W, H && m.DEBUG && $ > 15 && (S > io || S !== _t(S)))
        throw Error(Qs + k.s * S);
      if ((F = F - W - 1) > w)
        k.c = k.e = null;
      else if (F < c)
        k.c = [k.e = 0];
      else {
        if (k.e = F, k.c = [], W = (F + 1) % Ae, F < 0 && (W += Ae), W < $) {
          for (W && k.c.push(+G.slice(0, W)), $ -= Ae; W < $; )
            k.c.push(+G.slice(W, W += Ae));
          W = Ae - (G = G.slice(W)).length;
        } else
          W -= $;
        for (; W--; G += "0") ;
        k.c.push(+G);
      }
    } else
      k.c = [k.e = 0];
  }
  m.clone = Vc, m.ROUND_UP = 0, m.ROUND_DOWN = 1, m.ROUND_CEIL = 2, m.ROUND_FLOOR = 3, m.ROUND_HALF_UP = 4, m.ROUND_HALF_DOWN = 5, m.ROUND_HALF_EVEN = 6, m.ROUND_HALF_CEIL = 7, m.ROUND_HALF_FLOOR = 8, m.EUCLID = 9, m.config = m.set = function(S) {
    var A, _;
    if (S != null)
      if (typeof S == "object") {
        if (S.hasOwnProperty(A = "DECIMAL_PLACES") && (_ = S[A], We(_, 0, nt, A), u = _), S.hasOwnProperty(A = "ROUNDING_MODE") && (_ = S[A], We(_, 0, 8, A), o = _), S.hasOwnProperty(A = "EXPONENTIAL_AT") && (_ = S[A], _ && _.pop ? (We(_[0], -nt, 0, A), We(_[1], 0, nt, A), a = _[0], d = _[1]) : (We(_, -nt, nt, A), a = -(d = _ < 0 ? -_ : _))), S.hasOwnProperty(A = "RANGE"))
          if (_ = S[A], _ && _.pop)
            We(_[0], -nt, -1, A), We(_[1], 1, nt, A), c = _[0], w = _[1];
          else if (We(_, -nt, nt, A), _)
            c = -(w = _ < 0 ? -_ : _);
          else
            throw Error(vt + A + " cannot be zero: " + _);
        if (S.hasOwnProperty(A = "CRYPTO"))
          if (_ = S[A], _ === !!_)
            if (_)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                y = _;
              else
                throw y = !_, Error(vt + "crypto unavailable");
            else
              y = _;
          else
            throw Error(vt + A + " not true or false: " + _);
        if (S.hasOwnProperty(A = "MODULO_MODE") && (_ = S[A], We(_, 0, 9, A), f = _), S.hasOwnProperty(A = "POW_PRECISION") && (_ = S[A], We(_, 0, nt, A), E = _), S.hasOwnProperty(A = "FORMAT"))
          if (_ = S[A], typeof _ == "object") b = _;
          else throw Error(vt + A + " not an object: " + _);
        if (S.hasOwnProperty(A = "ALPHABET"))
          if (_ = S[A], typeof _ == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(_))
            x = _.slice(0, 10) == "0123456789", I = _;
          else
            throw Error(vt + A + " invalid: " + _);
      } else
        throw Error(vt + "Object expected: " + S);
    return {
      DECIMAL_PLACES: u,
      ROUNDING_MODE: o,
      EXPONENTIAL_AT: [a, d],
      RANGE: [c, w],
      CRYPTO: y,
      MODULO_MODE: f,
      POW_PRECISION: E,
      FORMAT: b,
      ALPHABET: I
    };
  }, m.isBigNumber = function(S) {
    if (!S || S._isBigNumber !== !0) return !1;
    if (!m.DEBUG) return !0;
    var A, _, N = S.c, P = S.e, F = S.s;
    e: if ({}.toString.call(N) == "[object Array]") {
      if ((F === 1 || F === -1) && P >= -nt && P <= nt && P === _t(P)) {
        if (N[0] === 0) {
          if (P === 0 && N.length === 1) return !0;
          break e;
        }
        if (A = (P + 1) % Ae, A < 1 && (A += Ae), String(N[0]).length == A) {
          for (A = 0; A < N.length; A++)
            if (_ = N[A], _ < 0 || _ >= Ft || _ !== _t(_)) break e;
          if (_ !== 0) return !0;
        }
      }
    } else if (N === null && P === null && (F === null || F === 1 || F === -1))
      return !0;
    throw Error(vt + "Invalid BigNumber: " + S);
  }, m.maximum = m.max = function() {
    return C(arguments, -1);
  }, m.minimum = m.min = function() {
    return C(arguments, 1);
  }, m.random = function() {
    var S = 9007199254740992, A = Math.random() * S & 2097151 ? function() {
      return _t(Math.random() * S);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(_) {
      var N, P, F, W, H, $ = 0, G = [], k = new m(s);
      if (_ == null ? _ = u : We(_, 0, nt), W = no(_ / Ae), y)
        if (crypto.getRandomValues) {
          for (N = crypto.getRandomValues(new Uint32Array(W *= 2)); $ < W; )
            H = N[$] * 131072 + (N[$ + 1] >>> 11), H >= 9e15 ? (P = crypto.getRandomValues(new Uint32Array(2)), N[$] = P[0], N[$ + 1] = P[1]) : (G.push(H % 1e14), $ += 2);
          $ = W / 2;
        } else if (crypto.randomBytes) {
          for (N = crypto.randomBytes(W *= 7); $ < W; )
            H = (N[$] & 31) * 281474976710656 + N[$ + 1] * 1099511627776 + N[$ + 2] * 4294967296 + N[$ + 3] * 16777216 + (N[$ + 4] << 16) + (N[$ + 5] << 8) + N[$ + 6], H >= 9e15 ? crypto.randomBytes(7).copy(N, $) : (G.push(H % 1e14), $ += 7);
          $ = W / 7;
        } else
          throw y = !1, Error(vt + "crypto unavailable");
      if (!y)
        for (; $ < W; )
          H = A(), H < 9e15 && (G[$++] = H % 1e14);
      for (W = G[--$], _ %= Ae, W && _ && (H = oo[Ae - _], G[$] = _t(W / H) * H); G[$] === 0; G.pop(), $--) ;
      if ($ < 0)
        G = [F = 0];
      else {
        for (F = -1; G[0] === 0; G.splice(0, 1), F -= Ae) ;
        for ($ = 1, H = G[0]; H >= 10; H /= 10, $++) ;
        $ < Ae && (F -= Ae - $);
      }
      return k.e = F, k.c = G, k;
    };
  }(), m.sum = function() {
    for (var S = 1, A = arguments, _ = new m(A[0]); S < A.length; ) _ = _.plus(A[S++]);
    return _;
  }, n = /* @__PURE__ */ function() {
    var S = "0123456789";
    function A(_, N, P, F) {
      for (var W, H = [0], $, G = 0, k = _.length; G < k; ) {
        for ($ = H.length; $--; H[$] *= N) ;
        for (H[0] += F.indexOf(_.charAt(G++)), W = 0; W < H.length; W++)
          H[W] > P - 1 && (H[W + 1] == null && (H[W + 1] = 0), H[W + 1] += H[W] / P | 0, H[W] %= P);
      }
      return H.reverse();
    }
    return function(_, N, P, F, W) {
      var H, $, G, k, M, Y, Z, ne, se = _.indexOf("."), pe = u, ae = o;
      for (se >= 0 && (k = E, E = 0, _ = _.replace(".", ""), ne = new m(N), Y = ne.pow(_.length - se), E = k, ne.c = A(
        Jt(xt(Y.c), Y.e, "0"),
        10,
        P,
        S
      ), ne.e = ne.c.length), Z = A(_, N, P, W ? (H = I, S) : (H = S, I)), G = k = Z.length; Z[--k] == 0; Z.pop()) ;
      if (!Z[0]) return H.charAt(0);
      if (se < 0 ? --G : (Y.c = Z, Y.e = G, Y.s = F, Y = t(Y, ne, pe, ae, P), Z = Y.c, M = Y.r, G = Y.e), $ = G + pe + 1, se = Z[$], k = P / 2, M = M || $ < 0 || Z[$ + 1] != null, M = ae < 4 ? (se != null || M) && (ae == 0 || ae == (Y.s < 0 ? 3 : 2)) : se > k || se == k && (ae == 4 || M || ae == 6 && Z[$ - 1] & 1 || ae == (Y.s < 0 ? 8 : 7)), $ < 1 || !Z[0])
        _ = M ? Jt(H.charAt(1), -pe, H.charAt(0)) : H.charAt(0);
      else {
        if (Z.length = $, M)
          for (--P; ++Z[--$] > P; )
            Z[$] = 0, $ || (++G, Z = [1].concat(Z));
        for (k = Z.length; !Z[--k]; ) ;
        for (se = 0, _ = ""; se <= k; _ += H.charAt(Z[se++])) ;
        _ = Jt(_, G, H.charAt(0));
      }
      return _;
    };
  }(), t = /* @__PURE__ */ function() {
    function S(N, P, F) {
      var W, H, $, G, k = 0, M = N.length, Y = P % lr, Z = P / lr | 0;
      for (N = N.slice(); M--; )
        $ = N[M] % lr, G = N[M] / lr | 0, W = Z * $ + G * Y, H = Y * $ + W % lr * lr + k, k = (H / F | 0) + (W / lr | 0) + Z * G, N[M] = H % F;
      return k && (N = [k].concat(N)), N;
    }
    function A(N, P, F, W) {
      var H, $;
      if (F != W)
        $ = F > W ? 1 : -1;
      else
        for (H = $ = 0; H < F; H++)
          if (N[H] != P[H]) {
            $ = N[H] > P[H] ? 1 : -1;
            break;
          }
      return $;
    }
    function _(N, P, F, W) {
      for (var H = 0; F--; )
        N[F] -= H, H = N[F] < P[F] ? 1 : 0, N[F] = H * W + N[F] - P[F];
      for (; !N[0] && N.length > 1; N.splice(0, 1)) ;
    }
    return function(N, P, F, W, H) {
      var $, G, k, M, Y, Z, ne, se, pe, ae, ge, xe, $e, Je, ct, je, rt, Ke = N.s == P.s ? 1 : -1, Ue = N.c, Se = P.c;
      if (!Ue || !Ue[0] || !Se || !Se[0])
        return new m(
          // Return NaN if either NaN, or both Infinity or 0.
          !N.s || !P.s || (Ue ? Se && Ue[0] == Se[0] : !Se) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            Ue && Ue[0] == 0 || !Se ? Ke * 0 : Ke / 0
          )
        );
      for (se = new m(Ke), pe = se.c = [], G = N.e - P.e, Ke = F + G + 1, H || (H = Ft, G = Ot(N.e / Ae) - Ot(P.e / Ae), Ke = Ke / Ae | 0), k = 0; Se[k] == (Ue[k] || 0); k++) ;
      if (Se[k] > (Ue[k] || 0) && G--, Ke < 0)
        pe.push(1), M = !0;
      else {
        for (Je = Ue.length, je = Se.length, k = 0, Ke += 2, Y = _t(H / (Se[0] + 1)), Y > 1 && (Se = S(Se, Y, H), Ue = S(Ue, Y, H), je = Se.length, Je = Ue.length), $e = je, ae = Ue.slice(0, je), ge = ae.length; ge < je; ae[ge++] = 0) ;
        rt = Se.slice(), rt = [0].concat(rt), ct = Se[0], Se[1] >= H / 2 && ct++;
        do {
          if (Y = 0, $ = A(Se, ae, je, ge), $ < 0) {
            if (xe = ae[0], je != ge && (xe = xe * H + (ae[1] || 0)), Y = _t(xe / ct), Y > 1)
              for (Y >= H && (Y = H - 1), Z = S(Se, Y, H), ne = Z.length, ge = ae.length; A(Z, ae, ne, ge) == 1; )
                Y--, _(Z, je < ne ? rt : Se, ne, H), ne = Z.length, $ = 1;
            else
              Y == 0 && ($ = Y = 1), Z = Se.slice(), ne = Z.length;
            if (ne < ge && (Z = [0].concat(Z)), _(ae, Z, ge, H), ge = ae.length, $ == -1)
              for (; A(Se, ae, je, ge) < 1; )
                Y++, _(ae, je < ge ? rt : Se, ge, H), ge = ae.length;
          } else $ === 0 && (Y++, ae = [0]);
          pe[k++] = Y, ae[0] ? ae[ge++] = Ue[$e] || 0 : (ae = [Ue[$e]], ge = 1);
        } while (($e++ < Je || ae[0] != null) && Ke--);
        M = ae[0] != null, pe[0] || pe.splice(0, 1);
      }
      if (H == Ft) {
        for (k = 1, Ke = pe[0]; Ke >= 10; Ke /= 10, k++) ;
        U(se, F + (se.e = k + G * Ae - 1) + 1, W, M);
      } else
        se.e = G, se.r = +M;
      return se;
    };
  }();
  function T(S, A, _, N) {
    var P, F, W, H, $;
    if (_ == null ? _ = o : We(_, 0, 8), !S.c) return S.toString();
    if (P = S.c[0], W = S.e, A == null)
      $ = xt(S.c), $ = N == 1 || N == 2 && (W <= a || W >= d) ? ii($, W) : Jt($, W, "0");
    else if (S = U(new m(S), A, _), F = S.e, $ = xt(S.c), H = $.length, N == 1 || N == 2 && (A <= F || F <= a)) {
      for (; H < A; $ += "0", H++) ;
      $ = ii($, F);
    } else if (A -= W, $ = Jt($, F, "0"), F + 1 > H) {
      if (--A > 0) for ($ += "."; A--; $ += "0") ;
    } else if (A += F - H, A > 0)
      for (F + 1 == H && ($ += "."); A--; $ += "0") ;
    return S.s < 0 && P ? "-" + $ : $;
  }
  function C(S, A) {
    for (var _, N, P = 1, F = new m(S[0]); P < S.length; P++)
      N = new m(S[P]), (!N.s || (_ = kr(F, N)) === A || _ === 0 && F.s === A) && (F = N);
    return F;
  }
  function j(S, A, _) {
    for (var N = 1, P = A.length; !A[--P]; A.pop()) ;
    for (P = A[0]; P >= 10; P /= 10, N++) ;
    return (_ = N + _ * Ae - 1) > w ? S.c = S.e = null : _ < c ? S.c = [S.e = 0] : (S.e = _, S.c = A), S;
  }
  r = /* @__PURE__ */ function() {
    var S = /^(-?)0([xbo])(?=\w[\w.]*$)/i, A = /^([^.]+)\.$/, _ = /^\.([^.]+)$/, N = /^-?(Infinity|NaN)$/, P = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(F, W, H, $) {
      var G, k = H ? W : W.replace(P, "");
      if (N.test(k))
        F.s = isNaN(k) ? null : k < 0 ? -1 : 1;
      else {
        if (!H && (k = k.replace(S, function(M, Y, Z) {
          return G = (Z = Z.toLowerCase()) == "x" ? 16 : Z == "b" ? 2 : 8, !$ || $ == G ? Y : M;
        }), $ && (G = $, k = k.replace(A, "$1").replace(_, "0.$1")), W != k))
          return new m(k, G);
        if (m.DEBUG)
          throw Error(vt + "Not a" + ($ ? " base " + $ : "") + " number: " + W);
        F.s = null;
      }
      F.c = F.e = null;
    };
  }();
  function U(S, A, _, N) {
    var P, F, W, H, $, G, k, M = S.c, Y = oo;
    if (M) {
      e: {
        for (P = 1, H = M[0]; H >= 10; H /= 10, P++) ;
        if (F = A - P, F < 0)
          F += Ae, W = A, $ = M[G = 0], k = _t($ / Y[P - W - 1] % 10);
        else if (G = no((F + 1) / Ae), G >= M.length)
          if (N) {
            for (; M.length <= G; M.push(0)) ;
            $ = k = 0, P = 1, F %= Ae, W = F - Ae + 1;
          } else
            break e;
        else {
          for ($ = H = M[G], P = 1; H >= 10; H /= 10, P++) ;
          F %= Ae, W = F - Ae + P, k = W < 0 ? 0 : _t($ / Y[P - W - 1] % 10);
        }
        if (N = N || A < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        M[G + 1] != null || (W < 0 ? $ : $ % Y[P - W - 1]), N = _ < 4 ? (k || N) && (_ == 0 || _ == (S.s < 0 ? 3 : 2)) : k > 5 || k == 5 && (_ == 4 || N || _ == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (F > 0 ? W > 0 ? $ / Y[P - W] : 0 : M[G - 1]) % 10 & 1 || _ == (S.s < 0 ? 8 : 7)), A < 1 || !M[0])
          return M.length = 0, N ? (A -= S.e + 1, M[0] = Y[(Ae - A % Ae) % Ae], S.e = -A || 0) : M[0] = S.e = 0, S;
        if (F == 0 ? (M.length = G, H = 1, G--) : (M.length = G + 1, H = Y[Ae - F], M[G] = W > 0 ? _t($ / Y[P - W] % Y[W]) * H : 0), N)
          for (; ; )
            if (G == 0) {
              for (F = 1, W = M[0]; W >= 10; W /= 10, F++) ;
              for (W = M[0] += H, H = 1; W >= 10; W /= 10, H++) ;
              F != H && (S.e++, M[0] == Ft && (M[0] = 1));
              break;
            } else {
              if (M[G] += H, M[G] != Ft) break;
              M[G--] = 0, H = 1;
            }
        for (F = M.length; M[--F] === 0; M.pop()) ;
      }
      S.e > w ? S.c = S.e = null : S.e < c && (S.c = [S.e = 0]);
    }
    return S;
  }
  function K(S) {
    var A, _ = S.e;
    return _ === null ? S.toString() : (A = xt(S.c), A = _ <= a || _ >= d ? ii(A, _) : Jt(A, _, "0"), S.s < 0 ? "-" + A : A);
  }
  return i.absoluteValue = i.abs = function() {
    var S = new m(this);
    return S.s < 0 && (S.s = 1), S;
  }, i.comparedTo = function(S, A) {
    return kr(this, new m(S, A));
  }, i.decimalPlaces = i.dp = function(S, A) {
    var _, N, P, F = this;
    if (S != null)
      return We(S, 0, nt), A == null ? A = o : We(A, 0, 8), U(new m(F), S + F.e + 1, A);
    if (!(_ = F.c)) return null;
    if (N = ((P = _.length - 1) - Ot(this.e / Ae)) * Ae, P = _[P]) for (; P % 10 == 0; P /= 10, N--) ;
    return N < 0 && (N = 0), N;
  }, i.dividedBy = i.div = function(S, A) {
    return t(this, new m(S, A), u, o);
  }, i.dividedToIntegerBy = i.idiv = function(S, A) {
    return t(this, new m(S, A), 0, 1);
  }, i.exponentiatedBy = i.pow = function(S, A) {
    var _, N, P, F, W, H, $, G, k, M = this;
    if (S = new m(S), S.c && !S.isInteger())
      throw Error(vt + "Exponent not an integer: " + K(S));
    if (A != null && (A = new m(A)), H = S.e > 14, !M.c || !M.c[0] || M.c[0] == 1 && !M.e && M.c.length == 1 || !S.c || !S.c[0])
      return k = new m(Math.pow(+K(M), H ? S.s * (2 - ni(S)) : +K(S))), A ? k.mod(A) : k;
    if ($ = S.s < 0, A) {
      if (A.c ? !A.c[0] : !A.s) return new m(NaN);
      N = !$ && M.isInteger() && A.isInteger(), N && (M = M.mod(A));
    } else {
      if (S.e > 9 && (M.e > 0 || M.e < -1 || (M.e == 0 ? M.c[0] > 1 || H && M.c[1] >= 24e7 : M.c[0] < 8e13 || H && M.c[0] <= 9999975e7)))
        return F = M.s < 0 && ni(S) ? -0 : 0, M.e > -1 && (F = 1 / F), new m($ ? 1 / F : F);
      E && (F = no(E / Ae + 2));
    }
    for (H ? (_ = new m(0.5), $ && (S.s = 1), G = ni(S)) : (P = Math.abs(+K(S)), G = P % 2), k = new m(s); ; ) {
      if (G) {
        if (k = k.times(M), !k.c) break;
        F ? k.c.length > F && (k.c.length = F) : N && (k = k.mod(A));
      }
      if (P) {
        if (P = _t(P / 2), P === 0) break;
        G = P % 2;
      } else if (S = S.times(_), U(S, S.e + 1, 1), S.e > 14)
        G = ni(S);
      else {
        if (P = +K(S), P === 0) break;
        G = P % 2;
      }
      M = M.times(M), F ? M.c && M.c.length > F && (M.c.length = F) : N && (M = M.mod(A));
    }
    return N ? k : ($ && (k = s.div(k)), A ? k.mod(A) : F ? U(k, E, o, W) : k);
  }, i.integerValue = function(S) {
    var A = new m(this);
    return S == null ? S = o : We(S, 0, 8), U(A, A.e + 1, S);
  }, i.isEqualTo = i.eq = function(S, A) {
    return kr(this, new m(S, A)) === 0;
  }, i.isFinite = function() {
    return !!this.c;
  }, i.isGreaterThan = i.gt = function(S, A) {
    return kr(this, new m(S, A)) > 0;
  }, i.isGreaterThanOrEqualTo = i.gte = function(S, A) {
    return (A = kr(this, new m(S, A))) === 1 || A === 0;
  }, i.isInteger = function() {
    return !!this.c && Ot(this.e / Ae) > this.c.length - 2;
  }, i.isLessThan = i.lt = function(S, A) {
    return kr(this, new m(S, A)) < 0;
  }, i.isLessThanOrEqualTo = i.lte = function(S, A) {
    return (A = kr(this, new m(S, A))) === -1 || A === 0;
  }, i.isNaN = function() {
    return !this.s;
  }, i.isNegative = function() {
    return this.s < 0;
  }, i.isPositive = function() {
    return this.s > 0;
  }, i.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, i.minus = function(S, A) {
    var _, N, P, F, W = this, H = W.s;
    if (S = new m(S, A), A = S.s, !H || !A) return new m(NaN);
    if (H != A)
      return S.s = -A, W.plus(S);
    var $ = W.e / Ae, G = S.e / Ae, k = W.c, M = S.c;
    if (!$ || !G) {
      if (!k || !M) return k ? (S.s = -A, S) : new m(M ? W : NaN);
      if (!k[0] || !M[0])
        return M[0] ? (S.s = -A, S) : new m(k[0] ? W : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          o == 3 ? -0 : 0
        ));
    }
    if ($ = Ot($), G = Ot(G), k = k.slice(), H = $ - G) {
      for ((F = H < 0) ? (H = -H, P = k) : (G = $, P = M), P.reverse(), A = H; A--; P.push(0)) ;
      P.reverse();
    } else
      for (N = (F = (H = k.length) < (A = M.length)) ? H : A, H = A = 0; A < N; A++)
        if (k[A] != M[A]) {
          F = k[A] < M[A];
          break;
        }
    if (F && (P = k, k = M, M = P, S.s = -S.s), A = (N = M.length) - (_ = k.length), A > 0) for (; A--; k[_++] = 0) ;
    for (A = Ft - 1; N > H; ) {
      if (k[--N] < M[N]) {
        for (_ = N; _ && !k[--_]; k[_] = A) ;
        --k[_], k[N] += Ft;
      }
      k[N] -= M[N];
    }
    for (; k[0] == 0; k.splice(0, 1), --G) ;
    return k[0] ? j(S, k, G) : (S.s = o == 3 ? -1 : 1, S.c = [S.e = 0], S);
  }, i.modulo = i.mod = function(S, A) {
    var _, N, P = this;
    return S = new m(S, A), !P.c || !S.s || S.c && !S.c[0] ? new m(NaN) : !S.c || P.c && !P.c[0] ? new m(P) : (f == 9 ? (N = S.s, S.s = 1, _ = t(P, S, 0, 3), S.s = N, _.s *= N) : _ = t(P, S, 0, f), S = P.minus(_.times(S)), !S.c[0] && f == 1 && (S.s = P.s), S);
  }, i.multipliedBy = i.times = function(S, A) {
    var _, N, P, F, W, H, $, G, k, M, Y, Z, ne, se, pe, ae = this, ge = ae.c, xe = (S = new m(S, A)).c;
    if (!ge || !xe || !ge[0] || !xe[0])
      return !ae.s || !S.s || ge && !ge[0] && !xe || xe && !xe[0] && !ge ? S.c = S.e = S.s = null : (S.s *= ae.s, !ge || !xe ? S.c = S.e = null : (S.c = [0], S.e = 0)), S;
    for (N = Ot(ae.e / Ae) + Ot(S.e / Ae), S.s *= ae.s, $ = ge.length, M = xe.length, $ < M && (ne = ge, ge = xe, xe = ne, P = $, $ = M, M = P), P = $ + M, ne = []; P--; ne.push(0)) ;
    for (se = Ft, pe = lr, P = M; --P >= 0; ) {
      for (_ = 0, Y = xe[P] % pe, Z = xe[P] / pe | 0, W = $, F = P + W; F > P; )
        G = ge[--W] % pe, k = ge[W] / pe | 0, H = Z * G + k * Y, G = Y * G + H % pe * pe + ne[F] + _, _ = (G / se | 0) + (H / pe | 0) + Z * k, ne[F--] = G % se;
      ne[F] = _;
    }
    return _ ? ++N : ne.splice(0, 1), j(S, ne, N);
  }, i.negated = function() {
    var S = new m(this);
    return S.s = -S.s || null, S;
  }, i.plus = function(S, A) {
    var _, N = this, P = N.s;
    if (S = new m(S, A), A = S.s, !P || !A) return new m(NaN);
    if (P != A)
      return S.s = -A, N.minus(S);
    var F = N.e / Ae, W = S.e / Ae, H = N.c, $ = S.c;
    if (!F || !W) {
      if (!H || !$) return new m(P / 0);
      if (!H[0] || !$[0]) return $[0] ? S : new m(H[0] ? N : P * 0);
    }
    if (F = Ot(F), W = Ot(W), H = H.slice(), P = F - W) {
      for (P > 0 ? (W = F, _ = $) : (P = -P, _ = H), _.reverse(); P--; _.push(0)) ;
      _.reverse();
    }
    for (P = H.length, A = $.length, P - A < 0 && (_ = $, $ = H, H = _, A = P), P = 0; A; )
      P = (H[--A] = H[A] + $[A] + P) / Ft | 0, H[A] = Ft === H[A] ? 0 : H[A] % Ft;
    return P && (H = [P].concat(H), ++W), j(S, H, W);
  }, i.precision = i.sd = function(S, A) {
    var _, N, P, F = this;
    if (S != null && S !== !!S)
      return We(S, 1, nt), A == null ? A = o : We(A, 0, 8), U(new m(F), S, A);
    if (!(_ = F.c)) return null;
    if (P = _.length - 1, N = P * Ae + 1, P = _[P]) {
      for (; P % 10 == 0; P /= 10, N--) ;
      for (P = _[0]; P >= 10; P /= 10, N++) ;
    }
    return S && F.e + 1 > N && (N = F.e + 1), N;
  }, i.shiftedBy = function(S) {
    return We(S, -io, io), this.times("1e" + S);
  }, i.squareRoot = i.sqrt = function() {
    var S, A, _, N, P, F = this, W = F.c, H = F.s, $ = F.e, G = u + 4, k = new m("0.5");
    if (H !== 1 || !W || !W[0])
      return new m(!H || H < 0 && (!W || W[0]) ? NaN : W ? F : 1 / 0);
    if (H = Math.sqrt(+K(F)), H == 0 || H == 1 / 0 ? (A = xt(W), (A.length + $) % 2 == 0 && (A += "0"), H = Math.sqrt(+A), $ = Ot(($ + 1) / 2) - ($ < 0 || $ % 2), H == 1 / 0 ? A = "5e" + $ : (A = H.toExponential(), A = A.slice(0, A.indexOf("e") + 1) + $), _ = new m(A)) : _ = new m(H + ""), _.c[0]) {
      for ($ = _.e, H = $ + G, H < 3 && (H = 0); ; )
        if (P = _, _ = k.times(P.plus(t(F, P, G, 1))), xt(P.c).slice(0, H) === (A = xt(_.c)).slice(0, H))
          if (_.e < $ && --H, A = A.slice(H - 3, H + 1), A == "9999" || !N && A == "4999") {
            if (!N && (U(P, P.e + u + 2, 0), P.times(P).eq(F))) {
              _ = P;
              break;
            }
            G += 4, H += 4, N = 1;
          } else {
            (!+A || !+A.slice(1) && A.charAt(0) == "5") && (U(_, _.e + u + 2, 1), S = !_.times(_).eq(F));
            break;
          }
    }
    return U(_, _.e + u + 1, o, S);
  }, i.toExponential = function(S, A) {
    return S != null && (We(S, 0, nt), S++), T(this, S, A, 1);
  }, i.toFixed = function(S, A) {
    return S != null && (We(S, 0, nt), S = S + this.e + 1), T(this, S, A);
  }, i.toFormat = function(S, A, _) {
    var N, P = this;
    if (_ == null)
      S != null && A && typeof A == "object" ? (_ = A, A = null) : S && typeof S == "object" ? (_ = S, S = A = null) : _ = b;
    else if (typeof _ != "object")
      throw Error(vt + "Argument not an object: " + _);
    if (N = P.toFixed(S, A), P.c) {
      var F, W = N.split("."), H = +_.groupSize, $ = +_.secondaryGroupSize, G = _.groupSeparator || "", k = W[0], M = W[1], Y = P.s < 0, Z = Y ? k.slice(1) : k, ne = Z.length;
      if ($ && (F = H, H = $, $ = F, ne -= F), H > 0 && ne > 0) {
        for (F = ne % H || H, k = Z.substr(0, F); F < ne; F += H) k += G + Z.substr(F, H);
        $ > 0 && (k += G + Z.slice(F)), Y && (k = "-" + k);
      }
      N = M ? k + (_.decimalSeparator || "") + (($ = +_.fractionGroupSize) ? M.replace(
        new RegExp("\\d{" + $ + "}\\B", "g"),
        "$&" + (_.fractionGroupSeparator || "")
      ) : M) : k;
    }
    return (_.prefix || "") + N + (_.suffix || "");
  }, i.toFraction = function(S) {
    var A, _, N, P, F, W, H, $, G, k, M, Y, Z = this, ne = Z.c;
    if (S != null && (H = new m(S), !H.isInteger() && (H.c || H.s !== 1) || H.lt(s)))
      throw Error(vt + "Argument " + (H.isInteger() ? "out of range: " : "not an integer: ") + K(H));
    if (!ne) return new m(Z);
    for (A = new m(s), G = _ = new m(s), N = $ = new m(s), Y = xt(ne), F = A.e = Y.length - Z.e - 1, A.c[0] = oo[(W = F % Ae) < 0 ? Ae + W : W], S = !S || H.comparedTo(A) > 0 ? F > 0 ? A : G : H, W = w, w = 1 / 0, H = new m(Y), $.c[0] = 0; k = t(H, A, 0, 1), P = _.plus(k.times(N)), P.comparedTo(S) != 1; )
      _ = N, N = P, G = $.plus(k.times(P = G)), $ = P, A = H.minus(k.times(P = A)), H = P;
    return P = t(S.minus(_), N, 0, 1), $ = $.plus(P.times(G)), _ = _.plus(P.times(N)), $.s = G.s = Z.s, F = F * 2, M = t(G, N, F, o).minus(Z).abs().comparedTo(
      t($, _, F, o).minus(Z).abs()
    ) < 1 ? [G, N] : [$, _], w = W, M;
  }, i.toNumber = function() {
    return +K(this);
  }, i.toPrecision = function(S, A) {
    return S != null && We(S, 1, nt), T(this, S, A, 2);
  }, i.toString = function(S) {
    var A, _ = this, N = _.s, P = _.e;
    return P === null ? N ? (A = "Infinity", N < 0 && (A = "-" + A)) : A = "NaN" : (S == null ? A = P <= a || P >= d ? ii(xt(_.c), P) : Jt(xt(_.c), P, "0") : S === 10 && x ? (_ = U(new m(_), u + P + 1, o), A = Jt(xt(_.c), _.e, "0")) : (We(S, 2, I.length, "Base"), A = n(Jt(xt(_.c), P, "0"), 10, S, N, !0)), N < 0 && _.c[0] && (A = "-" + A)), A;
  }, i.valueOf = i.toJSON = function() {
    return K(this);
  }, i._isBigNumber = !0, i[Symbol.toStringTag] = "BigNumber", i[Symbol.for("nodejs.util.inspect.custom")] = i.valueOf, e != null && m.set(e), m;
}
function Ot(e) {
  var t = e | 0;
  return e > 0 || e === t ? t : t - 1;
}
function xt(e) {
  for (var t, n, r = 1, i = e.length, s = e[0] + ""; r < i; ) {
    for (t = e[r++] + "", n = Ae - t.length; n--; t = "0" + t) ;
    s += t;
  }
  for (i = s.length; s.charCodeAt(--i) === 48; ) ;
  return s.slice(0, i + 1 || 1);
}
function kr(e, t) {
  var n, r, i = e.c, s = t.c, u = e.s, o = t.s, a = e.e, d = t.e;
  if (!u || !o) return null;
  if (n = i && !i[0], r = s && !s[0], n || r) return n ? r ? 0 : -o : u;
  if (u != o) return u;
  if (n = u < 0, r = a == d, !i || !s) return r ? 0 : !i ^ n ? 1 : -1;
  if (!r) return a > d ^ n ? 1 : -1;
  for (o = (a = i.length) < (d = s.length) ? a : d, u = 0; u < o; u++) if (i[u] != s[u]) return i[u] > s[u] ^ n ? 1 : -1;
  return a == d ? 0 : a > d ^ n ? 1 : -1;
}
function We(e, t, n, r) {
  if (e < t || e > n || e !== _t(e))
    throw Error(vt + (r || "Argument") + (typeof e == "number" ? e < t || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e));
}
function ni(e) {
  var t = e.c.length - 1;
  return Ot(e.e / Ae) == t && e.c[t] % 2 != 0;
}
function ii(e, t) {
  return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t;
}
function Jt(e, t, n) {
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
var Js = Vc();
function H2() {
  const { network: e, publicKey: t, format: n, chain: r } = Xt(), [i, s] = ve(null), [u, o] = ve(!1);
  return { getBalance: ke(async () => {
    o(!0);
    try {
      if (s(null), !n || !n.payments || !t || !t.payments)
        throw new Error("No wallet is connected");
      const { address: d } = hl(
        t.payments,
        e,
        dl[n.payments],
        r
      )[0], w = await new Go({
        chain: r,
        network: e
      }).getBalance({ address: d }), y = Number(
        new Js(w).multipliedBy(1e8).toFixed(0, Js.ROUND_HALF_DOWN)
      );
      return o(!1), y;
    } catch (d) {
      throw s(d.message), o(!1), d;
    }
  }, [n, e, t]), error: i, loading: u };
}
async function cs({
  address: e,
  wallet: t,
  network: n,
  psbt: r,
  options: i
}) {
  var a, d;
  if ((a = i == null ? void 0 : i.signingIndexes) != null && a.length && ((d = i == null ? void 0 : i.inputsToSign) != null && d.length))
    throw new Error("Cannot have both indexes and inputs to sign together");
  const s = (i == null ? void 0 : i.finalize) ?? !0, u = (i == null ? void 0 : i.extractTx) ?? !0, o = () => r.data.inputs.map((c, w) => w);
  if (t === le.MAGICEDEN)
    return await yl(r, {
      network: n,
      inputsToSign: (i == null ? void 0 : i.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (i == null ? void 0 : i.signingIndexes) ?? o(),
          sigHash: i == null ? void 0 : i.sigHash
        }
      ],
      finalize: s,
      extractTx: u
    });
  if (t === le.UNISAT)
    return await Cl(r, {
      finalize: s,
      extractTx: u
    });
  if (t === le.XVERSE)
    return await Rl(r, {
      network: n,
      inputsToSign: (i == null ? void 0 : i.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (i == null ? void 0 : i.signingIndexes) ?? o(),
          // If signingIndexes is not provided, just sign everything
          sigHash: i == null ? void 0 : i.sigHash
        }
      ],
      finalize: s,
      extractTx: u
    });
  if (t === le.LEATHER)
    return await gl(r, {
      network: n,
      finalize: s,
      extractTx: u,
      allowedSighash: i != null && i.sigHash ? [i == null ? void 0 : i.sigHash] : [],
      signAtIndexes: (i == null ? void 0 : i.signingIndexes) ?? o()
      // If signingIndexes is not provided, just sign everything
    });
  if (t === le.OKX)
    return await bl(r, {
      finalize: s,
      extractTx: u,
      network: n,
      inputsToSign: (i == null ? void 0 : i.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (i == null ? void 0 : i.signingIndexes) ?? o(),
          // If signingIndexes is not provided, just sign everything
          sigHash: i == null ? void 0 : i.sigHash
        }
      ]
    });
  if (t === le.PHANTOM)
    return await xl(r, {
      finalize: s,
      extractTx: u,
      network: n,
      inputsToSign: (i == null ? void 0 : i.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (i == null ? void 0 : i.signingIndexes) ?? o(),
          // If signingIndexes is not provided, just sign everything
          sigHash: i == null ? void 0 : i.sigHash
        }
      ]
    });
  if (t === le.OYL)
    return await Sl(r, {
      finalize: s,
      extractTx: u,
      network: n,
      inputsToSign: (i == null ? void 0 : i.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (i == null ? void 0 : i.signingIndexes) ?? o(),
          // If signingIndexes is not provided, just sign everything
          sigHash: i == null ? void 0 : i.sigHash
        }
      ]
    });
  throw new Error("Invalid wallet selected");
}
function M2() {
  const { wallet: e, network: t, address: n, publicKey: r, chain: i } = Xt(), [s, u] = ve(null), [o, a] = ve(!1);
  return { send: ke(
    async (c, w, y, f = !0) => {
      a(!0);
      try {
        if (u(null), !n || !n.payments || !r || !r.payments || !e)
          throw new Error("No wallet is connected");
        const E = new Sa({
          address: n.payments,
          feeRate: y,
          network: t,
          chain: i,
          publicKey: r.payments,
          outputs: [
            {
              address: c,
              value: w
            }
          ]
        });
        await E.prepare();
        const b = await cs({
          address: n.payments,
          wallet: e,
          network: t,
          psbt: E.toPSBT()
        });
        if (f) {
          const x = await new Go({ network: t, chain: i }).relay({ hex: b.hex });
          return a(!1), x;
        }
        return a(!1), b.hex;
      } catch (E) {
        return u(E.message), a(!1), null;
      }
    },
    [n, t, r, e]
  ), error: s, loading: o };
}
function D2() {
  const { wallet: e, network: t, address: n, publicKey: r, chain: i } = Xt(), [s, u] = ve(!1);
  return { send: ke(
    async ({
      toAddress: a,
      satoshis: d,
      feeRate: c,
      relay: w = !0,
      rbf: y = !1
    }) => {
      u(!0);
      try {
        if (!n || !n.payments || !r || !r.payments || !e)
          throw new Error("No wallet is connected");
        const f = new Sa({
          address: n.payments,
          feeRate: c,
          network: t,
          chain: i,
          publicKey: r.payments,
          outputs: [
            {
              address: a,
              value: d
            }
          ]
        });
        f.setRBF(y), await f.prepare();
        const E = await cs({
          address: n.payments,
          wallet: e,
          network: t,
          psbt: f.toPSBT()
        });
        if (w) {
          const I = await new Go({ network: t, chain: i }).relay({ hex: E.hex });
          return u(!1), {
            txId: I
          };
        }
        return u(!1), {
          signedPsbtHex: E.hex
        };
      } catch (f) {
        return u(!1), {
          error: f.message
        };
      }
    },
    [n, t, r, e]
  ), isLoading: s };
}
var so = {}, Gc = {}, Hi = {};
Hi.byteLength = Ap;
Hi.toByteArray = vp;
Hi.fromByteArray = Tp;
var jt = [], Ct = [], yp = typeof Uint8Array < "u" ? Uint8Array : Array, uo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var nn = 0, Ep = uo.length; nn < Ep; ++nn)
  jt[nn] = uo[nn], Ct[uo.charCodeAt(nn)] = nn;
Ct[45] = 62;
Ct[95] = 63;
function Xc(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var r = n === t ? 0 : 4 - n % 4;
  return [n, r];
}
function Ap(e) {
  var t = Xc(e), n = t[0], r = t[1];
  return (n + r) * 3 / 4 - r;
}
function bp(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function vp(e) {
  var t, n = Xc(e), r = n[0], i = n[1], s = new yp(bp(e, r, i)), u = 0, o = i > 0 ? r - 4 : r, a;
  for (a = 0; a < o; a += 4)
    t = Ct[e.charCodeAt(a)] << 18 | Ct[e.charCodeAt(a + 1)] << 12 | Ct[e.charCodeAt(a + 2)] << 6 | Ct[e.charCodeAt(a + 3)], s[u++] = t >> 16 & 255, s[u++] = t >> 8 & 255, s[u++] = t & 255;
  return i === 2 && (t = Ct[e.charCodeAt(a)] << 2 | Ct[e.charCodeAt(a + 1)] >> 4, s[u++] = t & 255), i === 1 && (t = Ct[e.charCodeAt(a)] << 10 | Ct[e.charCodeAt(a + 1)] << 4 | Ct[e.charCodeAt(a + 2)] >> 2, s[u++] = t >> 8 & 255, s[u++] = t & 255), s;
}
function Pp(e) {
  return jt[e >> 18 & 63] + jt[e >> 12 & 63] + jt[e >> 6 & 63] + jt[e & 63];
}
function Sp(e, t, n) {
  for (var r, i = [], s = t; s < n; s += 3)
    r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (e[s + 2] & 255), i.push(Pp(r));
  return i.join("");
}
function Tp(e) {
  for (var t, n = e.length, r = n % 3, i = [], s = 16383, u = 0, o = n - r; u < o; u += s)
    i.push(Sp(e, u, u + s > o ? o : u + s));
  return r === 1 ? (t = e[n - 1], i.push(
    jt[t >> 2] + jt[t << 4 & 63] + "=="
  )) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], i.push(
    jt[t >> 10] + jt[t >> 4 & 63] + jt[t << 2 & 63] + "="
  )), i.join("");
}
var ls = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
ls.read = function(e, t, n, r, i) {
  var s, u, o = i * 8 - r - 1, a = (1 << o) - 1, d = a >> 1, c = -7, w = n ? i - 1 : 0, y = n ? -1 : 1, f = e[t + w];
  for (w += y, s = f & (1 << -c) - 1, f >>= -c, c += o; c > 0; s = s * 256 + e[t + w], w += y, c -= 8)
    ;
  for (u = s & (1 << -c) - 1, s >>= -c, c += r; c > 0; u = u * 256 + e[t + w], w += y, c -= 8)
    ;
  if (s === 0)
    s = 1 - d;
  else {
    if (s === a)
      return u ? NaN : (f ? -1 : 1) * (1 / 0);
    u = u + Math.pow(2, r), s = s - d;
  }
  return (f ? -1 : 1) * u * Math.pow(2, s - r);
};
ls.write = function(e, t, n, r, i, s) {
  var u, o, a, d = s * 8 - i - 1, c = (1 << d) - 1, w = c >> 1, y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : s - 1, E = r ? 1 : -1, b = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0, u = c) : (u = Math.floor(Math.log(t) / Math.LN2), t * (a = Math.pow(2, -u)) < 1 && (u--, a *= 2), u + w >= 1 ? t += y / a : t += y * Math.pow(2, 1 - w), t * a >= 2 && (u++, a /= 2), u + w >= c ? (o = 0, u = c) : u + w >= 1 ? (o = (t * a - 1) * Math.pow(2, i), u = u + w) : (o = t * Math.pow(2, w - 1) * Math.pow(2, i), u = 0)); i >= 8; e[n + f] = o & 255, f += E, o /= 256, i -= 8)
    ;
  for (u = u << i | o, d += i; d > 0; e[n + f] = u & 255, f += E, u /= 256, d -= 8)
    ;
  e[n + f - E] |= b * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = Hi, n = ls, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = c, e.SlowBuffer = j, e.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  e.kMaxLength = i;
  const { Uint8Array: s, ArrayBuffer: u, SharedArrayBuffer: o } = globalThis;
  c.TYPED_ARRAY_SUPPORT = a(), !c.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function a() {
    try {
      const p = new s(1), l = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(l, s.prototype), Object.setPrototypeOf(p, l), p.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(c.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (c.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(c.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (c.isBuffer(this))
        return this.byteOffset;
    }
  });
  function d(p) {
    if (p > i)
      throw new RangeError('The value "' + p + '" is invalid for option "size"');
    const l = new s(p);
    return Object.setPrototypeOf(l, c.prototype), l;
  }
  function c(p, l, h) {
    if (typeof p == "number") {
      if (typeof l == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return E(p);
    }
    return w(p, l, h);
  }
  c.poolSize = 8192;
  function w(p, l, h) {
    if (typeof p == "string")
      return b(p, l);
    if (u.isView(p))
      return x(p);
    if (p == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p
      );
    if (Ye(p, u) || p && Ye(p.buffer, u) || typeof o < "u" && (Ye(p, o) || p && Ye(p.buffer, o)))
      return m(p, l, h);
    if (typeof p == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const O = p.valueOf && p.valueOf();
    if (O != null && O !== p)
      return c.from(O, l, h);
    const L = T(p);
    if (L) return L;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof p[Symbol.toPrimitive] == "function")
      return c.from(p[Symbol.toPrimitive]("string"), l, h);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p
    );
  }
  c.from = function(p, l, h) {
    return w(p, l, h);
  }, Object.setPrototypeOf(c.prototype, s.prototype), Object.setPrototypeOf(c, s);
  function y(p) {
    if (typeof p != "number")
      throw new TypeError('"size" argument must be of type number');
    if (p < 0)
      throw new RangeError('The value "' + p + '" is invalid for option "size"');
  }
  function f(p, l, h) {
    return y(p), p <= 0 ? d(p) : l !== void 0 ? typeof h == "string" ? d(p).fill(l, h) : d(p).fill(l) : d(p);
  }
  c.alloc = function(p, l, h) {
    return f(p, l, h);
  };
  function E(p) {
    return y(p), d(p < 0 ? 0 : C(p) | 0);
  }
  c.allocUnsafe = function(p) {
    return E(p);
  }, c.allocUnsafeSlow = function(p) {
    return E(p);
  };
  function b(p, l) {
    if ((typeof l != "string" || l === "") && (l = "utf8"), !c.isEncoding(l))
      throw new TypeError("Unknown encoding: " + l);
    const h = U(p, l) | 0;
    let O = d(h);
    const L = O.write(p, l);
    return L !== h && (O = O.slice(0, L)), O;
  }
  function I(p) {
    const l = p.length < 0 ? 0 : C(p.length) | 0, h = d(l);
    for (let O = 0; O < l; O += 1)
      h[O] = p[O] & 255;
    return h;
  }
  function x(p) {
    if (Ye(p, s)) {
      const l = new s(p);
      return m(l.buffer, l.byteOffset, l.byteLength);
    }
    return I(p);
  }
  function m(p, l, h) {
    if (l < 0 || p.byteLength < l)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (p.byteLength < l + (h || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let O;
    return l === void 0 && h === void 0 ? O = new s(p) : h === void 0 ? O = new s(p, l) : O = new s(p, l, h), Object.setPrototypeOf(O, c.prototype), O;
  }
  function T(p) {
    if (c.isBuffer(p)) {
      const l = C(p.length) | 0, h = d(l);
      return h.length === 0 || p.copy(h, 0, 0, l), h;
    }
    if (p.length !== void 0)
      return typeof p.length != "number" || Tt(p.length) ? d(0) : I(p);
    if (p.type === "Buffer" && Array.isArray(p.data))
      return I(p.data);
  }
  function C(p) {
    if (p >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return p | 0;
  }
  function j(p) {
    return +p != p && (p = 0), c.alloc(+p);
  }
  c.isBuffer = function(l) {
    return l != null && l._isBuffer === !0 && l !== c.prototype;
  }, c.compare = function(l, h) {
    if (Ye(l, s) && (l = c.from(l, l.offset, l.byteLength)), Ye(h, s) && (h = c.from(h, h.offset, h.byteLength)), !c.isBuffer(l) || !c.isBuffer(h))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (l === h) return 0;
    let O = l.length, L = h.length;
    for (let V = 0, z = Math.min(O, L); V < z; ++V)
      if (l[V] !== h[V]) {
        O = l[V], L = h[V];
        break;
      }
    return O < L ? -1 : L < O ? 1 : 0;
  }, c.isEncoding = function(l) {
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
  }, c.concat = function(l, h) {
    if (!Array.isArray(l))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (l.length === 0)
      return c.alloc(0);
    let O;
    if (h === void 0)
      for (h = 0, O = 0; O < l.length; ++O)
        h += l[O].length;
    const L = c.allocUnsafe(h);
    let V = 0;
    for (O = 0; O < l.length; ++O) {
      let z = l[O];
      if (Ye(z, s))
        V + z.length > L.length ? (c.isBuffer(z) || (z = c.from(z)), z.copy(L, V)) : s.prototype.set.call(
          L,
          z,
          V
        );
      else if (c.isBuffer(z))
        z.copy(L, V);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      V += z.length;
    }
    return L;
  };
  function U(p, l) {
    if (c.isBuffer(p))
      return p.length;
    if (u.isView(p) || Ye(p, u))
      return p.byteLength;
    if (typeof p != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof p
      );
    const h = p.length, O = arguments.length > 2 && arguments[2] === !0;
    if (!O && h === 0) return 0;
    let L = !1;
    for (; ; )
      switch (l) {
        case "ascii":
        case "latin1":
        case "binary":
          return h;
        case "utf8":
        case "utf-8":
          return Qt(p).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return h * 2;
        case "hex":
          return h >>> 1;
        case "base64":
          return Xe(p).length;
        default:
          if (L)
            return O ? -1 : Qt(p).length;
          l = ("" + l).toLowerCase(), L = !0;
      }
  }
  c.byteLength = U;
  function K(p, l, h) {
    let O = !1;
    if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((h === void 0 || h > this.length) && (h = this.length), h <= 0) || (h >>>= 0, l >>>= 0, h <= l))
      return "";
    for (p || (p = "utf8"); ; )
      switch (p) {
        case "hex":
          return ne(this, l, h);
        case "utf8":
        case "utf-8":
          return G(this, l, h);
        case "ascii":
          return Y(this, l, h);
        case "latin1":
        case "binary":
          return Z(this, l, h);
        case "base64":
          return $(this, l, h);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return se(this, l, h);
        default:
          if (O) throw new TypeError("Unknown encoding: " + p);
          p = (p + "").toLowerCase(), O = !0;
      }
  }
  c.prototype._isBuffer = !0;
  function S(p, l, h) {
    const O = p[l];
    p[l] = p[h], p[h] = O;
  }
  c.prototype.swap16 = function() {
    const l = this.length;
    if (l % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let h = 0; h < l; h += 2)
      S(this, h, h + 1);
    return this;
  }, c.prototype.swap32 = function() {
    const l = this.length;
    if (l % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let h = 0; h < l; h += 4)
      S(this, h, h + 3), S(this, h + 1, h + 2);
    return this;
  }, c.prototype.swap64 = function() {
    const l = this.length;
    if (l % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let h = 0; h < l; h += 8)
      S(this, h, h + 7), S(this, h + 1, h + 6), S(this, h + 2, h + 5), S(this, h + 3, h + 4);
    return this;
  }, c.prototype.toString = function() {
    const l = this.length;
    return l === 0 ? "" : arguments.length === 0 ? G(this, 0, l) : K.apply(this, arguments);
  }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(l) {
    if (!c.isBuffer(l)) throw new TypeError("Argument must be a Buffer");
    return this === l ? !0 : c.compare(this, l) === 0;
  }, c.prototype.inspect = function() {
    let l = "";
    const h = e.INSPECT_MAX_BYTES;
    return l = this.toString("hex", 0, h).replace(/(.{2})/g, "$1 ").trim(), this.length > h && (l += " ... "), "<Buffer " + l + ">";
  }, r && (c.prototype[r] = c.prototype.inspect), c.prototype.compare = function(l, h, O, L, V) {
    if (Ye(l, s) && (l = c.from(l, l.offset, l.byteLength)), !c.isBuffer(l))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof l
      );
    if (h === void 0 && (h = 0), O === void 0 && (O = l ? l.length : 0), L === void 0 && (L = 0), V === void 0 && (V = this.length), h < 0 || O > l.length || L < 0 || V > this.length)
      throw new RangeError("out of range index");
    if (L >= V && h >= O)
      return 0;
    if (L >= V)
      return -1;
    if (h >= O)
      return 1;
    if (h >>>= 0, O >>>= 0, L >>>= 0, V >>>= 0, this === l) return 0;
    let z = V - L, ie = O - h;
    const ce = Math.min(z, ie), fe = this.slice(L, V), ye = l.slice(h, O);
    for (let we = 0; we < ce; ++we)
      if (fe[we] !== ye[we]) {
        z = fe[we], ie = ye[we];
        break;
      }
    return z < ie ? -1 : ie < z ? 1 : 0;
  };
  function A(p, l, h, O, L) {
    if (p.length === 0) return -1;
    if (typeof h == "string" ? (O = h, h = 0) : h > 2147483647 ? h = 2147483647 : h < -2147483648 && (h = -2147483648), h = +h, Tt(h) && (h = L ? 0 : p.length - 1), h < 0 && (h = p.length + h), h >= p.length) {
      if (L) return -1;
      h = p.length - 1;
    } else if (h < 0)
      if (L) h = 0;
      else return -1;
    if (typeof l == "string" && (l = c.from(l, O)), c.isBuffer(l))
      return l.length === 0 ? -1 : _(p, l, h, O, L);
    if (typeof l == "number")
      return l = l & 255, typeof s.prototype.indexOf == "function" ? L ? s.prototype.indexOf.call(p, l, h) : s.prototype.lastIndexOf.call(p, l, h) : _(p, [l], h, O, L);
    throw new TypeError("val must be string, number or Buffer");
  }
  function _(p, l, h, O, L) {
    let V = 1, z = p.length, ie = l.length;
    if (O !== void 0 && (O = String(O).toLowerCase(), O === "ucs2" || O === "ucs-2" || O === "utf16le" || O === "utf-16le")) {
      if (p.length < 2 || l.length < 2)
        return -1;
      V = 2, z /= 2, ie /= 2, h /= 2;
    }
    function ce(ye, we) {
      return V === 1 ? ye[we] : ye.readUInt16BE(we * V);
    }
    let fe;
    if (L) {
      let ye = -1;
      for (fe = h; fe < z; fe++)
        if (ce(p, fe) === ce(l, ye === -1 ? 0 : fe - ye)) {
          if (ye === -1 && (ye = fe), fe - ye + 1 === ie) return ye * V;
        } else
          ye !== -1 && (fe -= fe - ye), ye = -1;
    } else
      for (h + ie > z && (h = z - ie), fe = h; fe >= 0; fe--) {
        let ye = !0;
        for (let we = 0; we < ie; we++)
          if (ce(p, fe + we) !== ce(l, we)) {
            ye = !1;
            break;
          }
        if (ye) return fe;
      }
    return -1;
  }
  c.prototype.includes = function(l, h, O) {
    return this.indexOf(l, h, O) !== -1;
  }, c.prototype.indexOf = function(l, h, O) {
    return A(this, l, h, O, !0);
  }, c.prototype.lastIndexOf = function(l, h, O) {
    return A(this, l, h, O, !1);
  };
  function N(p, l, h, O) {
    h = Number(h) || 0;
    const L = p.length - h;
    O ? (O = Number(O), O > L && (O = L)) : O = L;
    const V = l.length;
    O > V / 2 && (O = V / 2);
    let z;
    for (z = 0; z < O; ++z) {
      const ie = parseInt(l.substr(z * 2, 2), 16);
      if (Tt(ie)) return z;
      p[h + z] = ie;
    }
    return z;
  }
  function P(p, l, h, O) {
    return At(Qt(l, p.length - h), p, h, O);
  }
  function F(p, l, h, O) {
    return At(Or(l), p, h, O);
  }
  function W(p, l, h, O) {
    return At(Xe(l), p, h, O);
  }
  function H(p, l, h, O) {
    return At(Be(l, p.length - h), p, h, O);
  }
  c.prototype.write = function(l, h, O, L) {
    if (h === void 0)
      L = "utf8", O = this.length, h = 0;
    else if (O === void 0 && typeof h == "string")
      L = h, O = this.length, h = 0;
    else if (isFinite(h))
      h = h >>> 0, isFinite(O) ? (O = O >>> 0, L === void 0 && (L = "utf8")) : (L = O, O = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const V = this.length - h;
    if ((O === void 0 || O > V) && (O = V), l.length > 0 && (O < 0 || h < 0) || h > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    L || (L = "utf8");
    let z = !1;
    for (; ; )
      switch (L) {
        case "hex":
          return N(this, l, h, O);
        case "utf8":
        case "utf-8":
          return P(this, l, h, O);
        case "ascii":
        case "latin1":
        case "binary":
          return F(this, l, h, O);
        case "base64":
          return W(this, l, h, O);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return H(this, l, h, O);
        default:
          if (z) throw new TypeError("Unknown encoding: " + L);
          L = ("" + L).toLowerCase(), z = !0;
      }
  }, c.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function $(p, l, h) {
    return l === 0 && h === p.length ? t.fromByteArray(p) : t.fromByteArray(p.slice(l, h));
  }
  function G(p, l, h) {
    h = Math.min(p.length, h);
    const O = [];
    let L = l;
    for (; L < h; ) {
      const V = p[L];
      let z = null, ie = V > 239 ? 4 : V > 223 ? 3 : V > 191 ? 2 : 1;
      if (L + ie <= h) {
        let ce, fe, ye, we;
        switch (ie) {
          case 1:
            V < 128 && (z = V);
            break;
          case 2:
            ce = p[L + 1], (ce & 192) === 128 && (we = (V & 31) << 6 | ce & 63, we > 127 && (z = we));
            break;
          case 3:
            ce = p[L + 1], fe = p[L + 2], (ce & 192) === 128 && (fe & 192) === 128 && (we = (V & 15) << 12 | (ce & 63) << 6 | fe & 63, we > 2047 && (we < 55296 || we > 57343) && (z = we));
            break;
          case 4:
            ce = p[L + 1], fe = p[L + 2], ye = p[L + 3], (ce & 192) === 128 && (fe & 192) === 128 && (ye & 192) === 128 && (we = (V & 15) << 18 | (ce & 63) << 12 | (fe & 63) << 6 | ye & 63, we > 65535 && we < 1114112 && (z = we));
        }
      }
      z === null ? (z = 65533, ie = 1) : z > 65535 && (z -= 65536, O.push(z >>> 10 & 1023 | 55296), z = 56320 | z & 1023), O.push(z), L += ie;
    }
    return M(O);
  }
  const k = 4096;
  function M(p) {
    const l = p.length;
    if (l <= k)
      return String.fromCharCode.apply(String, p);
    let h = "", O = 0;
    for (; O < l; )
      h += String.fromCharCode.apply(
        String,
        p.slice(O, O += k)
      );
    return h;
  }
  function Y(p, l, h) {
    let O = "";
    h = Math.min(p.length, h);
    for (let L = l; L < h; ++L)
      O += String.fromCharCode(p[L] & 127);
    return O;
  }
  function Z(p, l, h) {
    let O = "";
    h = Math.min(p.length, h);
    for (let L = l; L < h; ++L)
      O += String.fromCharCode(p[L]);
    return O;
  }
  function ne(p, l, h) {
    const O = p.length;
    (!l || l < 0) && (l = 0), (!h || h < 0 || h > O) && (h = O);
    let L = "";
    for (let V = l; V < h; ++V)
      L += lt[p[V]];
    return L;
  }
  function se(p, l, h) {
    const O = p.slice(l, h);
    let L = "";
    for (let V = 0; V < O.length - 1; V += 2)
      L += String.fromCharCode(O[V] + O[V + 1] * 256);
    return L;
  }
  c.prototype.slice = function(l, h) {
    const O = this.length;
    l = ~~l, h = h === void 0 ? O : ~~h, l < 0 ? (l += O, l < 0 && (l = 0)) : l > O && (l = O), h < 0 ? (h += O, h < 0 && (h = 0)) : h > O && (h = O), h < l && (h = l);
    const L = this.subarray(l, h);
    return Object.setPrototypeOf(L, c.prototype), L;
  };
  function pe(p, l, h) {
    if (p % 1 !== 0 || p < 0) throw new RangeError("offset is not uint");
    if (p + l > h) throw new RangeError("Trying to access beyond buffer length");
  }
  c.prototype.readUintLE = c.prototype.readUIntLE = function(l, h, O) {
    l = l >>> 0, h = h >>> 0, O || pe(l, h, this.length);
    let L = this[l], V = 1, z = 0;
    for (; ++z < h && (V *= 256); )
      L += this[l + z] * V;
    return L;
  }, c.prototype.readUintBE = c.prototype.readUIntBE = function(l, h, O) {
    l = l >>> 0, h = h >>> 0, O || pe(l, h, this.length);
    let L = this[l + --h], V = 1;
    for (; h > 0 && (V *= 256); )
      L += this[l + --h] * V;
    return L;
  }, c.prototype.readUint8 = c.prototype.readUInt8 = function(l, h) {
    return l = l >>> 0, h || pe(l, 1, this.length), this[l];
  }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(l, h) {
    return l = l >>> 0, h || pe(l, 2, this.length), this[l] | this[l + 1] << 8;
  }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(l, h) {
    return l = l >>> 0, h || pe(l, 2, this.length), this[l] << 8 | this[l + 1];
  }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(l, h) {
    return l = l >>> 0, h || pe(l, 4, this.length), (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216;
  }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(l, h) {
    return l = l >>> 0, h || pe(l, 4, this.length), this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]);
  }, c.prototype.readBigUInt64LE = J(function(l) {
    l = l >>> 0, tt(l, "offset");
    const h = this[l], O = this[l + 7];
    (h === void 0 || O === void 0) && St(l, this.length - 8);
    const L = h + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24, V = this[++l] + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + O * 2 ** 24;
    return BigInt(L) + (BigInt(V) << BigInt(32));
  }), c.prototype.readBigUInt64BE = J(function(l) {
    l = l >>> 0, tt(l, "offset");
    const h = this[l], O = this[l + 7];
    (h === void 0 || O === void 0) && St(l, this.length - 8);
    const L = h * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l], V = this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + O;
    return (BigInt(L) << BigInt(32)) + BigInt(V);
  }), c.prototype.readIntLE = function(l, h, O) {
    l = l >>> 0, h = h >>> 0, O || pe(l, h, this.length);
    let L = this[l], V = 1, z = 0;
    for (; ++z < h && (V *= 256); )
      L += this[l + z] * V;
    return V *= 128, L >= V && (L -= Math.pow(2, 8 * h)), L;
  }, c.prototype.readIntBE = function(l, h, O) {
    l = l >>> 0, h = h >>> 0, O || pe(l, h, this.length);
    let L = h, V = 1, z = this[l + --L];
    for (; L > 0 && (V *= 256); )
      z += this[l + --L] * V;
    return V *= 128, z >= V && (z -= Math.pow(2, 8 * h)), z;
  }, c.prototype.readInt8 = function(l, h) {
    return l = l >>> 0, h || pe(l, 1, this.length), this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l];
  }, c.prototype.readInt16LE = function(l, h) {
    l = l >>> 0, h || pe(l, 2, this.length);
    const O = this[l] | this[l + 1] << 8;
    return O & 32768 ? O | 4294901760 : O;
  }, c.prototype.readInt16BE = function(l, h) {
    l = l >>> 0, h || pe(l, 2, this.length);
    const O = this[l + 1] | this[l] << 8;
    return O & 32768 ? O | 4294901760 : O;
  }, c.prototype.readInt32LE = function(l, h) {
    return l = l >>> 0, h || pe(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24;
  }, c.prototype.readInt32BE = function(l, h) {
    return l = l >>> 0, h || pe(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3];
  }, c.prototype.readBigInt64LE = J(function(l) {
    l = l >>> 0, tt(l, "offset");
    const h = this[l], O = this[l + 7];
    (h === void 0 || O === void 0) && St(l, this.length - 8);
    const L = this[l + 4] + this[l + 5] * 2 ** 8 + this[l + 6] * 2 ** 16 + (O << 24);
    return (BigInt(L) << BigInt(32)) + BigInt(h + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24);
  }), c.prototype.readBigInt64BE = J(function(l) {
    l = l >>> 0, tt(l, "offset");
    const h = this[l], O = this[l + 7];
    (h === void 0 || O === void 0) && St(l, this.length - 8);
    const L = (h << 24) + // Overflow
    this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
    return (BigInt(L) << BigInt(32)) + BigInt(this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + O);
  }), c.prototype.readFloatLE = function(l, h) {
    return l = l >>> 0, h || pe(l, 4, this.length), n.read(this, l, !0, 23, 4);
  }, c.prototype.readFloatBE = function(l, h) {
    return l = l >>> 0, h || pe(l, 4, this.length), n.read(this, l, !1, 23, 4);
  }, c.prototype.readDoubleLE = function(l, h) {
    return l = l >>> 0, h || pe(l, 8, this.length), n.read(this, l, !0, 52, 8);
  }, c.prototype.readDoubleBE = function(l, h) {
    return l = l >>> 0, h || pe(l, 8, this.length), n.read(this, l, !1, 52, 8);
  };
  function ae(p, l, h, O, L, V) {
    if (!c.isBuffer(p)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (l > L || l < V) throw new RangeError('"value" argument is out of bounds');
    if (h + O > p.length) throw new RangeError("Index out of range");
  }
  c.prototype.writeUintLE = c.prototype.writeUIntLE = function(l, h, O, L) {
    if (l = +l, h = h >>> 0, O = O >>> 0, !L) {
      const ie = Math.pow(2, 8 * O) - 1;
      ae(this, l, h, O, ie, 0);
    }
    let V = 1, z = 0;
    for (this[h] = l & 255; ++z < O && (V *= 256); )
      this[h + z] = l / V & 255;
    return h + O;
  }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(l, h, O, L) {
    if (l = +l, h = h >>> 0, O = O >>> 0, !L) {
      const ie = Math.pow(2, 8 * O) - 1;
      ae(this, l, h, O, ie, 0);
    }
    let V = O - 1, z = 1;
    for (this[h + V] = l & 255; --V >= 0 && (z *= 256); )
      this[h + V] = l / z & 255;
    return h + O;
  }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(l, h, O) {
    return l = +l, h = h >>> 0, O || ae(this, l, h, 1, 255, 0), this[h] = l & 255, h + 1;
  }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(l, h, O) {
    return l = +l, h = h >>> 0, O || ae(this, l, h, 2, 65535, 0), this[h] = l & 255, this[h + 1] = l >>> 8, h + 2;
  }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(l, h, O) {
    return l = +l, h = h >>> 0, O || ae(this, l, h, 2, 65535, 0), this[h] = l >>> 8, this[h + 1] = l & 255, h + 2;
  }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(l, h, O) {
    return l = +l, h = h >>> 0, O || ae(this, l, h, 4, 4294967295, 0), this[h + 3] = l >>> 24, this[h + 2] = l >>> 16, this[h + 1] = l >>> 8, this[h] = l & 255, h + 4;
  }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(l, h, O) {
    return l = +l, h = h >>> 0, O || ae(this, l, h, 4, 4294967295, 0), this[h] = l >>> 24, this[h + 1] = l >>> 16, this[h + 2] = l >>> 8, this[h + 3] = l & 255, h + 4;
  };
  function ge(p, l, h, O, L) {
    Se(l, O, L, p, h, 7);
    let V = Number(l & BigInt(4294967295));
    p[h++] = V, V = V >> 8, p[h++] = V, V = V >> 8, p[h++] = V, V = V >> 8, p[h++] = V;
    let z = Number(l >> BigInt(32) & BigInt(4294967295));
    return p[h++] = z, z = z >> 8, p[h++] = z, z = z >> 8, p[h++] = z, z = z >> 8, p[h++] = z, h;
  }
  function xe(p, l, h, O, L) {
    Se(l, O, L, p, h, 7);
    let V = Number(l & BigInt(4294967295));
    p[h + 7] = V, V = V >> 8, p[h + 6] = V, V = V >> 8, p[h + 5] = V, V = V >> 8, p[h + 4] = V;
    let z = Number(l >> BigInt(32) & BigInt(4294967295));
    return p[h + 3] = z, z = z >> 8, p[h + 2] = z, z = z >> 8, p[h + 1] = z, z = z >> 8, p[h] = z, h + 8;
  }
  c.prototype.writeBigUInt64LE = J(function(l, h = 0) {
    return ge(this, l, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeBigUInt64BE = J(function(l, h = 0) {
    return xe(this, l, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeIntLE = function(l, h, O, L) {
    if (l = +l, h = h >>> 0, !L) {
      const ce = Math.pow(2, 8 * O - 1);
      ae(this, l, h, O, ce - 1, -ce);
    }
    let V = 0, z = 1, ie = 0;
    for (this[h] = l & 255; ++V < O && (z *= 256); )
      l < 0 && ie === 0 && this[h + V - 1] !== 0 && (ie = 1), this[h + V] = (l / z >> 0) - ie & 255;
    return h + O;
  }, c.prototype.writeIntBE = function(l, h, O, L) {
    if (l = +l, h = h >>> 0, !L) {
      const ce = Math.pow(2, 8 * O - 1);
      ae(this, l, h, O, ce - 1, -ce);
    }
    let V = O - 1, z = 1, ie = 0;
    for (this[h + V] = l & 255; --V >= 0 && (z *= 256); )
      l < 0 && ie === 0 && this[h + V + 1] !== 0 && (ie = 1), this[h + V] = (l / z >> 0) - ie & 255;
    return h + O;
  }, c.prototype.writeInt8 = function(l, h, O) {
    return l = +l, h = h >>> 0, O || ae(this, l, h, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[h] = l & 255, h + 1;
  }, c.prototype.writeInt16LE = function(l, h, O) {
    return l = +l, h = h >>> 0, O || ae(this, l, h, 2, 32767, -32768), this[h] = l & 255, this[h + 1] = l >>> 8, h + 2;
  }, c.prototype.writeInt16BE = function(l, h, O) {
    return l = +l, h = h >>> 0, O || ae(this, l, h, 2, 32767, -32768), this[h] = l >>> 8, this[h + 1] = l & 255, h + 2;
  }, c.prototype.writeInt32LE = function(l, h, O) {
    return l = +l, h = h >>> 0, O || ae(this, l, h, 4, 2147483647, -2147483648), this[h] = l & 255, this[h + 1] = l >>> 8, this[h + 2] = l >>> 16, this[h + 3] = l >>> 24, h + 4;
  }, c.prototype.writeInt32BE = function(l, h, O) {
    return l = +l, h = h >>> 0, O || ae(this, l, h, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[h] = l >>> 24, this[h + 1] = l >>> 16, this[h + 2] = l >>> 8, this[h + 3] = l & 255, h + 4;
  }, c.prototype.writeBigInt64LE = J(function(l, h = 0) {
    return ge(this, l, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), c.prototype.writeBigInt64BE = J(function(l, h = 0) {
    return xe(this, l, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function $e(p, l, h, O, L, V) {
    if (h + O > p.length) throw new RangeError("Index out of range");
    if (h < 0) throw new RangeError("Index out of range");
  }
  function Je(p, l, h, O, L) {
    return l = +l, h = h >>> 0, L || $e(p, l, h, 4), n.write(p, l, h, O, 23, 4), h + 4;
  }
  c.prototype.writeFloatLE = function(l, h, O) {
    return Je(this, l, h, !0, O);
  }, c.prototype.writeFloatBE = function(l, h, O) {
    return Je(this, l, h, !1, O);
  };
  function ct(p, l, h, O, L) {
    return l = +l, h = h >>> 0, L || $e(p, l, h, 8), n.write(p, l, h, O, 52, 8), h + 8;
  }
  c.prototype.writeDoubleLE = function(l, h, O) {
    return ct(this, l, h, !0, O);
  }, c.prototype.writeDoubleBE = function(l, h, O) {
    return ct(this, l, h, !1, O);
  }, c.prototype.copy = function(l, h, O, L) {
    if (!c.isBuffer(l)) throw new TypeError("argument should be a Buffer");
    if (O || (O = 0), !L && L !== 0 && (L = this.length), h >= l.length && (h = l.length), h || (h = 0), L > 0 && L < O && (L = O), L === O || l.length === 0 || this.length === 0) return 0;
    if (h < 0)
      throw new RangeError("targetStart out of bounds");
    if (O < 0 || O >= this.length) throw new RangeError("Index out of range");
    if (L < 0) throw new RangeError("sourceEnd out of bounds");
    L > this.length && (L = this.length), l.length - h < L - O && (L = l.length - h + O);
    const V = L - O;
    return this === l && typeof s.prototype.copyWithin == "function" ? this.copyWithin(h, O, L) : s.prototype.set.call(
      l,
      this.subarray(O, L),
      h
    ), V;
  }, c.prototype.fill = function(l, h, O, L) {
    if (typeof l == "string") {
      if (typeof h == "string" ? (L = h, h = 0, O = this.length) : typeof O == "string" && (L = O, O = this.length), L !== void 0 && typeof L != "string")
        throw new TypeError("encoding must be a string");
      if (typeof L == "string" && !c.isEncoding(L))
        throw new TypeError("Unknown encoding: " + L);
      if (l.length === 1) {
        const z = l.charCodeAt(0);
        (L === "utf8" && z < 128 || L === "latin1") && (l = z);
      }
    } else typeof l == "number" ? l = l & 255 : typeof l == "boolean" && (l = Number(l));
    if (h < 0 || this.length < h || this.length < O)
      throw new RangeError("Out of range index");
    if (O <= h)
      return this;
    h = h >>> 0, O = O === void 0 ? this.length : O >>> 0, l || (l = 0);
    let V;
    if (typeof l == "number")
      for (V = h; V < O; ++V)
        this[V] = l;
    else {
      const z = c.isBuffer(l) ? l : c.from(l, L), ie = z.length;
      if (ie === 0)
        throw new TypeError('The value "' + l + '" is invalid for argument "value"');
      for (V = 0; V < O - h; ++V)
        this[V + h] = z[V % ie];
    }
    return this;
  };
  const je = {};
  function rt(p, l, h) {
    je[p] = class extends h {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: l.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${p}]`, this.stack, delete this.name;
      }
      get code() {
        return p;
      }
      set code(L) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: L,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${p}]: ${this.message}`;
      }
    };
  }
  rt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(p) {
      return p ? `${p} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), rt(
    "ERR_INVALID_ARG_TYPE",
    function(p, l) {
      return `The "${p}" argument must be of type number. Received type ${typeof l}`;
    },
    TypeError
  ), rt(
    "ERR_OUT_OF_RANGE",
    function(p, l, h) {
      let O = `The value of "${p}" is out of range.`, L = h;
      return Number.isInteger(h) && Math.abs(h) > 2 ** 32 ? L = Ke(String(h)) : typeof h == "bigint" && (L = String(h), (h > BigInt(2) ** BigInt(32) || h < -(BigInt(2) ** BigInt(32))) && (L = Ke(L)), L += "n"), O += ` It must be ${l}. Received ${L}`, O;
    },
    RangeError
  );
  function Ke(p) {
    let l = "", h = p.length;
    const O = p[0] === "-" ? 1 : 0;
    for (; h >= O + 4; h -= 3)
      l = `_${p.slice(h - 3, h)}${l}`;
    return `${p.slice(0, h)}${l}`;
  }
  function Ue(p, l, h) {
    tt(l, "offset"), (p[l] === void 0 || p[l + h] === void 0) && St(l, p.length - (h + 1));
  }
  function Se(p, l, h, O, L, V) {
    if (p > h || p < l) {
      const z = typeof l == "bigint" ? "n" : "";
      let ie;
      throw l === 0 || l === BigInt(0) ? ie = `>= 0${z} and < 2${z} ** ${(V + 1) * 8}${z}` : ie = `>= -(2${z} ** ${(V + 1) * 8 - 1}${z}) and < 2 ** ${(V + 1) * 8 - 1}${z}`, new je.ERR_OUT_OF_RANGE("value", ie, p);
    }
    Ue(O, L, V);
  }
  function tt(p, l) {
    if (typeof p != "number")
      throw new je.ERR_INVALID_ARG_TYPE(l, "number", p);
  }
  function St(p, l, h) {
    throw Math.floor(p) !== p ? (tt(p, h), new je.ERR_OUT_OF_RANGE("offset", "an integer", p)) : l < 0 ? new je.ERR_BUFFER_OUT_OF_BOUNDS() : new je.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${l}`,
      p
    );
  }
  const cr = /[^+/0-9A-Za-z-_]/g;
  function Mt(p) {
    if (p = p.split("=")[0], p = p.trim().replace(cr, ""), p.length < 2) return "";
    for (; p.length % 4 !== 0; )
      p = p + "=";
    return p;
  }
  function Qt(p, l) {
    l = l || 1 / 0;
    let h;
    const O = p.length;
    let L = null;
    const V = [];
    for (let z = 0; z < O; ++z) {
      if (h = p.charCodeAt(z), h > 55295 && h < 57344) {
        if (!L) {
          if (h > 56319) {
            (l -= 3) > -1 && V.push(239, 191, 189);
            continue;
          } else if (z + 1 === O) {
            (l -= 3) > -1 && V.push(239, 191, 189);
            continue;
          }
          L = h;
          continue;
        }
        if (h < 56320) {
          (l -= 3) > -1 && V.push(239, 191, 189), L = h;
          continue;
        }
        h = (L - 55296 << 10 | h - 56320) + 65536;
      } else L && (l -= 3) > -1 && V.push(239, 191, 189);
      if (L = null, h < 128) {
        if ((l -= 1) < 0) break;
        V.push(h);
      } else if (h < 2048) {
        if ((l -= 2) < 0) break;
        V.push(
          h >> 6 | 192,
          h & 63 | 128
        );
      } else if (h < 65536) {
        if ((l -= 3) < 0) break;
        V.push(
          h >> 12 | 224,
          h >> 6 & 63 | 128,
          h & 63 | 128
        );
      } else if (h < 1114112) {
        if ((l -= 4) < 0) break;
        V.push(
          h >> 18 | 240,
          h >> 12 & 63 | 128,
          h >> 6 & 63 | 128,
          h & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return V;
  }
  function Or(p) {
    const l = [];
    for (let h = 0; h < p.length; ++h)
      l.push(p.charCodeAt(h) & 255);
    return l;
  }
  function Be(p, l) {
    let h, O, L;
    const V = [];
    for (let z = 0; z < p.length && !((l -= 2) < 0); ++z)
      h = p.charCodeAt(z), O = h >> 8, L = h % 256, V.push(L), V.push(O);
    return V;
  }
  function Xe(p) {
    return t.toByteArray(Mt(p));
  }
  function At(p, l, h, O) {
    let L;
    for (L = 0; L < O && !(L + h >= l.length || L >= p.length); ++L)
      l[L + h] = p[L];
    return L;
  }
  function Ye(p, l) {
    return p instanceof l || p != null && p.constructor != null && p.constructor.name != null && p.constructor.name === l.name;
  }
  function Tt(p) {
    return p !== p;
  }
  const lt = function() {
    const p = "0123456789abcdef", l = new Array(256);
    for (let h = 0; h < 16; ++h) {
      const O = h * 16;
      for (let L = 0; L < 16; ++L)
        l[O + L] = p[h] + p[L];
    }
    return l;
  }();
  function J(p) {
    return typeof BigInt > "u" ? B : p;
  }
  function B() {
    throw new Error("BigInt not supported");
  }
})(Gc);
const Q = Gc.Buffer;
var mt = {}, Zt = {}, Zs;
function Ht() {
  return Zs || (Zs = 1, Object.defineProperty(Zt, "__esModule", { value: !0 }), Zt.testnet = Zt.regtest = Zt.bitcoin = void 0, Zt.bitcoin = {
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
  }, Zt.regtest = {
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
  }, Zt.testnet = {
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
  }), Zt;
}
var ao = {}, vn = {}, co = {}, er = {}, eu;
function Yc() {
  if (eu) return er;
  eu = 1, Object.defineProperty(er, "__esModule", { value: !0 }), er.encode = er.decode = er.check = void 0;
  function e(r) {
    if (r.length < 8 || r.length > 72 || r[0] !== 48 || r[1] !== r.length - 2 || r[2] !== 2) return !1;
    const i = r[3];
    if (i === 0 || 5 + i >= r.length || r[4 + i] !== 2) return !1;
    const s = r[5 + i];
    return !(s === 0 || 6 + i + s !== r.length || r[4] & 128 || i > 1 && r[4] === 0 && !(r[5] & 128) || r[i + 6] & 128 || s > 1 && r[i + 6] === 0 && !(r[i + 7] & 128));
  }
  er.check = e;
  function t(r) {
    if (r.length < 8) throw new Error("DER sequence length is too short");
    if (r.length > 72) throw new Error("DER sequence length is too long");
    if (r[0] !== 48) throw new Error("Expected DER sequence");
    if (r[1] !== r.length - 2)
      throw new Error("DER sequence length is invalid");
    if (r[2] !== 2) throw new Error("Expected DER integer");
    const i = r[3];
    if (i === 0) throw new Error("R length is zero");
    if (5 + i >= r.length) throw new Error("R length is too long");
    if (r[4 + i] !== 2) throw new Error("Expected DER integer (2)");
    const s = r[5 + i];
    if (s === 0) throw new Error("S length is zero");
    if (6 + i + s !== r.length) throw new Error("S length is invalid");
    if (r[4] & 128) throw new Error("R value is negative");
    if (i > 1 && r[4] === 0 && !(r[5] & 128))
      throw new Error("R value excessively padded");
    if (r[i + 6] & 128) throw new Error("S value is negative");
    if (s > 1 && r[i + 6] === 0 && !(r[i + 7] & 128))
      throw new Error("S value excessively padded");
    return {
      r: r.slice(4, 4 + i),
      s: r.slice(6 + i)
    };
  }
  er.decode = t;
  function n(r, i) {
    const s = r.length, u = i.length;
    if (s === 0) throw new Error("R length is zero");
    if (u === 0) throw new Error("S length is zero");
    if (s > 33) throw new Error("R length is too long");
    if (u > 33) throw new Error("S length is too long");
    if (r[0] & 128) throw new Error("R value is negative");
    if (i[0] & 128) throw new Error("S value is negative");
    if (s > 1 && r[0] === 0 && !(r[1] & 128))
      throw new Error("R value excessively padded");
    if (u > 1 && i[0] === 0 && !(i[1] & 128))
      throw new Error("S value excessively padded");
    const o = Q.allocUnsafe(6 + s + u);
    return o[0] = 48, o[1] = o.length - 2, o[2] = 2, o[3] = r.length, r.copy(o, 4), o[4 + s] = 2, o[5 + s] = i.length, i.copy(o, 6 + s), o;
  }
  return er.encode = n, er;
}
var Br = {}, tu;
function fs() {
  if (tu) return Br;
  tu = 1, Object.defineProperty(Br, "__esModule", { value: !0 }), Br.REVERSE_OPS = Br.OPS = void 0;
  const e = {
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
  Br.OPS = e;
  const t = {};
  Br.REVERSE_OPS = t;
  for (const n of Object.keys(e)) {
    const r = e[n];
    t[r] = n;
  }
  return Br;
}
var tr = {}, ru;
function Ip() {
  if (ru) return tr;
  ru = 1, Object.defineProperty(tr, "__esModule", { value: !0 }), tr.decode = tr.encode = tr.encodingLength = void 0;
  const e = fs();
  function t(i) {
    return i < e.OPS.OP_PUSHDATA1 ? 1 : i <= 255 ? 2 : i <= 65535 ? 3 : 5;
  }
  tr.encodingLength = t;
  function n(i, s, u) {
    const o = t(s);
    return o === 1 ? i.writeUInt8(s, u) : o === 2 ? (i.writeUInt8(e.OPS.OP_PUSHDATA1, u), i.writeUInt8(s, u + 1)) : o === 3 ? (i.writeUInt8(e.OPS.OP_PUSHDATA2, u), i.writeUInt16LE(s, u + 1)) : (i.writeUInt8(e.OPS.OP_PUSHDATA4, u), i.writeUInt32LE(s, u + 1)), o;
  }
  tr.encode = n;
  function r(i, s) {
    const u = i.readUInt8(s);
    let o, a;
    if (u < e.OPS.OP_PUSHDATA1)
      o = u, a = 1;
    else if (u === e.OPS.OP_PUSHDATA1) {
      if (s + 2 > i.length) return null;
      o = i.readUInt8(s + 1), a = 2;
    } else if (u === e.OPS.OP_PUSHDATA2) {
      if (s + 3 > i.length) return null;
      o = i.readUInt16LE(s + 1), a = 3;
    } else {
      if (s + 5 > i.length) return null;
      if (u !== e.OPS.OP_PUSHDATA4) throw new Error("Unexpected opcode");
      o = i.readUInt32LE(s + 1), a = 5;
    }
    return {
      opcode: u,
      number: o,
      size: a
    };
  }
  return tr.decode = r, tr;
}
var Rr = {}, nu;
function xp() {
  if (nu) return Rr;
  nu = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.encode = Rr.decode = void 0;
  function e(r, i, s) {
    i = i || 4, s = s === void 0 ? !0 : s;
    const u = r.length;
    if (u === 0) return 0;
    if (u > i) throw new TypeError("Script number overflow");
    if (s && !(r[u - 1] & 127) && (u <= 1 || !(r[u - 2] & 128)))
      throw new Error("Non-minimally encoded script number");
    if (u === 5) {
      const a = r.readUInt32LE(0), d = r.readUInt8(4);
      return d & 128 ? -((d & -129) * 4294967296 + a) : d * 4294967296 + a;
    }
    let o = 0;
    for (let a = 0; a < u; ++a)
      o |= r[a] << 8 * a;
    return r[u - 1] & 128 ? -(o & ~(128 << 8 * (u - 1))) : o;
  }
  Rr.decode = e;
  function t(r) {
    return r > 2147483647 ? 5 : r > 8388607 ? 4 : r > 32767 ? 3 : r > 127 ? 2 : r > 0 ? 1 : 0;
  }
  function n(r) {
    let i = Math.abs(r);
    const s = t(i), u = Q.allocUnsafe(s), o = r < 0;
    for (let a = 0; a < s; ++a)
      u.writeUInt8(i & 255, a), i >>= 8;
    return u[s - 1] & 128 ? u.writeUInt8(o ? 128 : 0, s - 1) : o && (u[s - 1] |= 128), u;
  }
  return Rr.encode = n, Rr;
}
var Fr = {}, lo = {}, fo = {}, iu;
function Mi() {
  return iu || (iu = 1, function(e) {
    Object.defineProperties(e, { __esModule: { value: !0 }, [Symbol.toStringTag]: { value: "Module" } });
    var t = {}, n = {};
    n.byteLength = c, n.toByteArray = y, n.fromByteArray = b;
    for (var r = [], i = [], s = typeof Uint8Array < "u" ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = u.length; o < a; ++o)
      r[o] = u[o], i[u.charCodeAt(o)] = o;
    i[45] = 62, i[95] = 63;
    function d(m) {
      var T = m.length;
      if (T % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var C = m.indexOf("=");
      C === -1 && (C = T);
      var j = C === T ? 0 : 4 - C % 4;
      return [C, j];
    }
    function c(m) {
      var T = d(m), C = T[0], j = T[1];
      return (C + j) * 3 / 4 - j;
    }
    function w(m, T, C) {
      return (T + C) * 3 / 4 - C;
    }
    function y(m) {
      var T, C = d(m), j = C[0], U = C[1], K = new s(w(m, j, U)), S = 0, A = U > 0 ? j - 4 : j, _;
      for (_ = 0; _ < A; _ += 4)
        T = i[m.charCodeAt(_)] << 18 | i[m.charCodeAt(_ + 1)] << 12 | i[m.charCodeAt(_ + 2)] << 6 | i[m.charCodeAt(_ + 3)], K[S++] = T >> 16 & 255, K[S++] = T >> 8 & 255, K[S++] = T & 255;
      return U === 2 && (T = i[m.charCodeAt(_)] << 2 | i[m.charCodeAt(_ + 1)] >> 4, K[S++] = T & 255), U === 1 && (T = i[m.charCodeAt(_)] << 10 | i[m.charCodeAt(_ + 1)] << 4 | i[m.charCodeAt(_ + 2)] >> 2, K[S++] = T >> 8 & 255, K[S++] = T & 255), K;
    }
    function f(m) {
      return r[m >> 18 & 63] + r[m >> 12 & 63] + r[m >> 6 & 63] + r[m & 63];
    }
    function E(m, T, C) {
      for (var j, U = [], K = T; K < C; K += 3)
        j = (m[K] << 16 & 16711680) + (m[K + 1] << 8 & 65280) + (m[K + 2] & 255), U.push(f(j));
      return U.join("");
    }
    function b(m) {
      for (var T, C = m.length, j = C % 3, U = [], K = 16383, S = 0, A = C - j; S < A; S += K)
        U.push(E(m, S, S + K > A ? A : S + K));
      return j === 1 ? (T = m[C - 1], U.push(
        r[T >> 2] + r[T << 4 & 63] + "=="
      )) : j === 2 && (T = (m[C - 2] << 8) + m[C - 1], U.push(
        r[T >> 10] + r[T >> 4 & 63] + r[T << 2 & 63] + "="
      )), U.join("");
    }
    var I = {};
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    I.read = function(m, T, C, j, U) {
      var K, S, A = U * 8 - j - 1, _ = (1 << A) - 1, N = _ >> 1, P = -7, F = C ? U - 1 : 0, W = C ? -1 : 1, H = m[T + F];
      for (F += W, K = H & (1 << -P) - 1, H >>= -P, P += A; P > 0; K = K * 256 + m[T + F], F += W, P -= 8)
        ;
      for (S = K & (1 << -P) - 1, K >>= -P, P += j; P > 0; S = S * 256 + m[T + F], F += W, P -= 8)
        ;
      if (K === 0)
        K = 1 - N;
      else {
        if (K === _)
          return S ? NaN : (H ? -1 : 1) * (1 / 0);
        S = S + Math.pow(2, j), K = K - N;
      }
      return (H ? -1 : 1) * S * Math.pow(2, K - j);
    }, I.write = function(m, T, C, j, U, K) {
      var S, A, _, N = K * 8 - U - 1, P = (1 << N) - 1, F = P >> 1, W = U === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, H = j ? 0 : K - 1, $ = j ? 1 : -1, G = T < 0 || T === 0 && 1 / T < 0 ? 1 : 0;
      for (T = Math.abs(T), isNaN(T) || T === 1 / 0 ? (A = isNaN(T) ? 1 : 0, S = P) : (S = Math.floor(Math.log(T) / Math.LN2), T * (_ = Math.pow(2, -S)) < 1 && (S--, _ *= 2), S + F >= 1 ? T += W / _ : T += W * Math.pow(2, 1 - F), T * _ >= 2 && (S++, _ /= 2), S + F >= P ? (A = 0, S = P) : S + F >= 1 ? (A = (T * _ - 1) * Math.pow(2, U), S = S + F) : (A = T * Math.pow(2, F - 1) * Math.pow(2, U), S = 0)); U >= 8; m[C + H] = A & 255, H += $, A /= 256, U -= 8)
        ;
      for (S = S << U | A, N += U; N > 0; m[C + H] = S & 255, H += $, S /= 256, N -= 8)
        ;
      m[C + H - $] |= G * 128;
    };
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    (function(m) {
      const T = n, C = I, j = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      m.Buffer = P, m.SlowBuffer = se, m.INSPECT_MAX_BYTES = 50;
      const U = 2147483647;
      m.kMaxLength = U;
      const { Uint8Array: K, ArrayBuffer: S, SharedArrayBuffer: A } = globalThis;
      P.TYPED_ARRAY_SUPPORT = _(), !P.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
      function _() {
        try {
          const R = new K(1), g = { foo: function() {
            return 42;
          } };
          return Object.setPrototypeOf(g, K.prototype), Object.setPrototypeOf(R, g), R.foo() === 42;
        } catch {
          return !1;
        }
      }
      Object.defineProperty(P.prototype, "parent", {
        enumerable: !0,
        get: function() {
          if (P.isBuffer(this))
            return this.buffer;
        }
      }), Object.defineProperty(P.prototype, "offset", {
        enumerable: !0,
        get: function() {
          if (P.isBuffer(this))
            return this.byteOffset;
        }
      });
      function N(R) {
        if (R > U)
          throw new RangeError('The value "' + R + '" is invalid for option "size"');
        const g = new K(R);
        return Object.setPrototypeOf(g, P.prototype), g;
      }
      function P(R, g, v) {
        if (typeof R == "number") {
          if (typeof g == "string")
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return $(R);
        }
        return F(R, g, v);
      }
      P.poolSize = 8192;
      function F(R, g, v) {
        if (typeof R == "string")
          return G(R, g);
        if (S.isView(R))
          return M(R);
        if (R == null)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof R
          );
        if (qe(R, S) || R && qe(R.buffer, S) || typeof A < "u" && (qe(R, A) || R && qe(R.buffer, A)))
          return Y(R, g, v);
        if (typeof R == "number")
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        const D = R.valueOf && R.valueOf();
        if (D != null && D !== R)
          return P.from(D, g, v);
        const X = Z(R);
        if (X) return X;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof R[Symbol.toPrimitive] == "function")
          return P.from(R[Symbol.toPrimitive]("string"), g, v);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof R
        );
      }
      P.from = function(R, g, v) {
        return F(R, g, v);
      }, Object.setPrototypeOf(P.prototype, K.prototype), Object.setPrototypeOf(P, K);
      function W(R) {
        if (typeof R != "number")
          throw new TypeError('"size" argument must be of type number');
        if (R < 0)
          throw new RangeError('The value "' + R + '" is invalid for option "size"');
      }
      function H(R, g, v) {
        return W(R), R <= 0 ? N(R) : g !== void 0 ? typeof v == "string" ? N(R).fill(g, v) : N(R).fill(g) : N(R);
      }
      P.alloc = function(R, g, v) {
        return H(R, g, v);
      };
      function $(R) {
        return W(R), N(R < 0 ? 0 : ne(R) | 0);
      }
      P.allocUnsafe = function(R) {
        return $(R);
      }, P.allocUnsafeSlow = function(R) {
        return $(R);
      };
      function G(R, g) {
        if ((typeof g != "string" || g === "") && (g = "utf8"), !P.isEncoding(g))
          throw new TypeError("Unknown encoding: " + g);
        const v = pe(R, g) | 0;
        let D = N(v);
        const X = D.write(R, g);
        return X !== v && (D = D.slice(0, X)), D;
      }
      function k(R) {
        const g = R.length < 0 ? 0 : ne(R.length) | 0, v = N(g);
        for (let D = 0; D < g; D += 1)
          v[D] = R[D] & 255;
        return v;
      }
      function M(R) {
        if (qe(R, K)) {
          const g = new K(R);
          return Y(g.buffer, g.byteOffset, g.byteLength);
        }
        return k(R);
      }
      function Y(R, g, v) {
        if (g < 0 || R.byteLength < g)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (R.byteLength < g + (v || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let D;
        return g === void 0 && v === void 0 ? D = new K(R) : v === void 0 ? D = new K(R, g) : D = new K(R, g, v), Object.setPrototypeOf(D, P.prototype), D;
      }
      function Z(R) {
        if (P.isBuffer(R)) {
          const g = ne(R.length) | 0, v = N(g);
          return v.length === 0 || R.copy(v, 0, 0, g), v;
        }
        if (R.length !== void 0)
          return typeof R.length != "number" || Zr(R.length) ? N(0) : k(R);
        if (R.type === "Buffer" && Array.isArray(R.data))
          return k(R.data);
      }
      function ne(R) {
        if (R >= U)
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + U.toString(16) + " bytes");
        return R | 0;
      }
      function se(R) {
        return +R != R && (R = 0), P.alloc(+R);
      }
      P.isBuffer = function(g) {
        return g != null && g._isBuffer === !0 && g !== P.prototype;
      }, P.compare = function(g, v) {
        if (qe(g, K) && (g = P.from(g, g.offset, g.byteLength)), qe(v, K) && (v = P.from(v, v.offset, v.byteLength)), !P.isBuffer(g) || !P.isBuffer(v))
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        if (g === v) return 0;
        let D = g.length, X = v.length;
        for (let ee = 0, re = Math.min(D, X); ee < re; ++ee)
          if (g[ee] !== v[ee]) {
            D = g[ee], X = v[ee];
            break;
          }
        return D < X ? -1 : X < D ? 1 : 0;
      }, P.isEncoding = function(g) {
        switch (String(g).toLowerCase()) {
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
      }, P.concat = function(g, v) {
        if (!Array.isArray(g))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (g.length === 0)
          return P.alloc(0);
        let D;
        if (v === void 0)
          for (v = 0, D = 0; D < g.length; ++D)
            v += g[D].length;
        const X = P.allocUnsafe(v);
        let ee = 0;
        for (D = 0; D < g.length; ++D) {
          let re = g[D];
          if (qe(re, K))
            ee + re.length > X.length ? (P.isBuffer(re) || (re = P.from(re)), re.copy(X, ee)) : K.prototype.set.call(
              X,
              re,
              ee
            );
          else if (P.isBuffer(re))
            re.copy(X, ee);
          else
            throw new TypeError('"list" argument must be an Array of Buffers');
          ee += re.length;
        }
        return X;
      };
      function pe(R, g) {
        if (P.isBuffer(R))
          return R.length;
        if (S.isView(R) || qe(R, S))
          return R.byteLength;
        if (typeof R != "string")
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof R
          );
        const v = R.length, D = arguments.length > 2 && arguments[2] === !0;
        if (!D && v === 0) return 0;
        let X = !1;
        for (; ; )
          switch (g) {
            case "ascii":
            case "latin1":
            case "binary":
              return v;
            case "utf8":
            case "utf-8":
              return ce(R).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return v * 2;
            case "hex":
              return v >>> 1;
            case "base64":
              return we(R).length;
            default:
              if (X)
                return D ? -1 : ce(R).length;
              g = ("" + g).toLowerCase(), X = !0;
          }
      }
      P.byteLength = pe;
      function ae(R, g, v) {
        let D = !1;
        if ((g === void 0 || g < 0) && (g = 0), g > this.length || ((v === void 0 || v > this.length) && (v = this.length), v <= 0) || (v >>>= 0, g >>>= 0, v <= g))
          return "";
        for (R || (R = "utf8"); ; )
          switch (R) {
            case "hex":
              return Qt(this, g, v);
            case "utf8":
            case "utf-8":
              return Se(this, g, v);
            case "ascii":
              return cr(this, g, v);
            case "latin1":
            case "binary":
              return Mt(this, g, v);
            case "base64":
              return Ue(this, g, v);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Or(this, g, v);
            default:
              if (D) throw new TypeError("Unknown encoding: " + R);
              R = (R + "").toLowerCase(), D = !0;
          }
      }
      P.prototype._isBuffer = !0;
      function ge(R, g, v) {
        const D = R[g];
        R[g] = R[v], R[v] = D;
      }
      P.prototype.swap16 = function() {
        const g = this.length;
        if (g % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let v = 0; v < g; v += 2)
          ge(this, v, v + 1);
        return this;
      }, P.prototype.swap32 = function() {
        const g = this.length;
        if (g % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let v = 0; v < g; v += 4)
          ge(this, v, v + 3), ge(this, v + 1, v + 2);
        return this;
      }, P.prototype.swap64 = function() {
        const g = this.length;
        if (g % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let v = 0; v < g; v += 8)
          ge(this, v, v + 7), ge(this, v + 1, v + 6), ge(this, v + 2, v + 5), ge(this, v + 3, v + 4);
        return this;
      }, P.prototype.toString = function() {
        const g = this.length;
        return g === 0 ? "" : arguments.length === 0 ? Se(this, 0, g) : ae.apply(this, arguments);
      }, P.prototype.toLocaleString = P.prototype.toString, P.prototype.equals = function(g) {
        if (!P.isBuffer(g)) throw new TypeError("Argument must be a Buffer");
        return this === g ? !0 : P.compare(this, g) === 0;
      }, P.prototype.inspect = function() {
        let g = "";
        const v = m.INSPECT_MAX_BYTES;
        return g = this.toString("hex", 0, v).replace(/(.{2})/g, "$1 ").trim(), this.length > v && (g += " ... "), "<Buffer " + g + ">";
      }, j && (P.prototype[j] = P.prototype.inspect), P.prototype.compare = function(g, v, D, X, ee) {
        if (qe(g, K) && (g = P.from(g, g.offset, g.byteLength)), !P.isBuffer(g))
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof g
          );
        if (v === void 0 && (v = 0), D === void 0 && (D = g ? g.length : 0), X === void 0 && (X = 0), ee === void 0 && (ee = this.length), v < 0 || D > g.length || X < 0 || ee > this.length)
          throw new RangeError("out of range index");
        if (X >= ee && v >= D)
          return 0;
        if (X >= ee)
          return -1;
        if (v >= D)
          return 1;
        if (v >>>= 0, D >>>= 0, X >>>= 0, ee >>>= 0, this === g) return 0;
        let re = ee - X, Pe = D - v;
        const De = Math.min(re, Pe), Le = this.slice(X, ee), q = g.slice(v, D);
        for (let te = 0; te < De; ++te)
          if (Le[te] !== q[te]) {
            re = Le[te], Pe = q[te];
            break;
          }
        return re < Pe ? -1 : Pe < re ? 1 : 0;
      };
      function xe(R, g, v, D, X) {
        if (R.length === 0) return -1;
        if (typeof v == "string" ? (D = v, v = 0) : v > 2147483647 ? v = 2147483647 : v < -2147483648 && (v = -2147483648), v = +v, Zr(v) && (v = X ? 0 : R.length - 1), v < 0 && (v = R.length + v), v >= R.length) {
          if (X) return -1;
          v = R.length - 1;
        } else if (v < 0)
          if (X) v = 0;
          else return -1;
        if (typeof g == "string" && (g = P.from(g, D)), P.isBuffer(g))
          return g.length === 0 ? -1 : $e(R, g, v, D, X);
        if (typeof g == "number")
          return g = g & 255, typeof K.prototype.indexOf == "function" ? X ? K.prototype.indexOf.call(R, g, v) : K.prototype.lastIndexOf.call(R, g, v) : $e(R, [g], v, D, X);
        throw new TypeError("val must be string, number or Buffer");
      }
      function $e(R, g, v, D, X) {
        let ee = 1, re = R.length, Pe = g.length;
        if (D !== void 0 && (D = String(D).toLowerCase(), D === "ucs2" || D === "ucs-2" || D === "utf16le" || D === "utf-16le")) {
          if (R.length < 2 || g.length < 2)
            return -1;
          ee = 2, re /= 2, Pe /= 2, v /= 2;
        }
        function De(q, te) {
          return ee === 1 ? q[te] : q.readUInt16BE(te * ee);
        }
        let Le;
        if (X) {
          let q = -1;
          for (Le = v; Le < re; Le++)
            if (De(R, Le) === De(g, q === -1 ? 0 : Le - q)) {
              if (q === -1 && (q = Le), Le - q + 1 === Pe) return q * ee;
            } else
              q !== -1 && (Le -= Le - q), q = -1;
        } else
          for (v + Pe > re && (v = re - Pe), Le = v; Le >= 0; Le--) {
            let q = !0;
            for (let te = 0; te < Pe; te++)
              if (De(R, Le + te) !== De(g, te)) {
                q = !1;
                break;
              }
            if (q) return Le;
          }
        return -1;
      }
      P.prototype.includes = function(g, v, D) {
        return this.indexOf(g, v, D) !== -1;
      }, P.prototype.indexOf = function(g, v, D) {
        return xe(this, g, v, D, !0);
      }, P.prototype.lastIndexOf = function(g, v, D) {
        return xe(this, g, v, D, !1);
      };
      function Je(R, g, v, D) {
        v = Number(v) || 0;
        const X = R.length - v;
        D ? (D = Number(D), D > X && (D = X)) : D = X;
        const ee = g.length;
        D > ee / 2 && (D = ee / 2);
        let re;
        for (re = 0; re < D; ++re) {
          const Pe = parseInt(g.substr(re * 2, 2), 16);
          if (Zr(Pe)) return re;
          R[v + re] = Pe;
        }
        return re;
      }
      function ct(R, g, v, D) {
        return _e(ce(g, R.length - v), R, v, D);
      }
      function je(R, g, v, D) {
        return _e(fe(g), R, v, D);
      }
      function rt(R, g, v, D) {
        return _e(we(g), R, v, D);
      }
      function Ke(R, g, v, D) {
        return _e(ye(g, R.length - v), R, v, D);
      }
      P.prototype.write = function(g, v, D, X) {
        if (v === void 0)
          X = "utf8", D = this.length, v = 0;
        else if (D === void 0 && typeof v == "string")
          X = v, D = this.length, v = 0;
        else if (isFinite(v))
          v = v >>> 0, isFinite(D) ? (D = D >>> 0, X === void 0 && (X = "utf8")) : (X = D, D = void 0);
        else
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        const ee = this.length - v;
        if ((D === void 0 || D > ee) && (D = ee), g.length > 0 && (D < 0 || v < 0) || v > this.length)
          throw new RangeError("Attempt to write outside buffer bounds");
        X || (X = "utf8");
        let re = !1;
        for (; ; )
          switch (X) {
            case "hex":
              return Je(this, g, v, D);
            case "utf8":
            case "utf-8":
              return ct(this, g, v, D);
            case "ascii":
            case "latin1":
            case "binary":
              return je(this, g, v, D);
            case "base64":
              return rt(this, g, v, D);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Ke(this, g, v, D);
            default:
              if (re) throw new TypeError("Unknown encoding: " + X);
              X = ("" + X).toLowerCase(), re = !0;
          }
      }, P.prototype.toJSON = function() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function Ue(R, g, v) {
        return g === 0 && v === R.length ? T.fromByteArray(R) : T.fromByteArray(R.slice(g, v));
      }
      function Se(R, g, v) {
        v = Math.min(R.length, v);
        const D = [];
        let X = g;
        for (; X < v; ) {
          const ee = R[X];
          let re = null, Pe = ee > 239 ? 4 : ee > 223 ? 3 : ee > 191 ? 2 : 1;
          if (X + Pe <= v) {
            let De, Le, q, te;
            switch (Pe) {
              case 1:
                ee < 128 && (re = ee);
                break;
              case 2:
                De = R[X + 1], (De & 192) === 128 && (te = (ee & 31) << 6 | De & 63, te > 127 && (re = te));
                break;
              case 3:
                De = R[X + 1], Le = R[X + 2], (De & 192) === 128 && (Le & 192) === 128 && (te = (ee & 15) << 12 | (De & 63) << 6 | Le & 63, te > 2047 && (te < 55296 || te > 57343) && (re = te));
                break;
              case 4:
                De = R[X + 1], Le = R[X + 2], q = R[X + 3], (De & 192) === 128 && (Le & 192) === 128 && (q & 192) === 128 && (te = (ee & 15) << 18 | (De & 63) << 12 | (Le & 63) << 6 | q & 63, te > 65535 && te < 1114112 && (re = te));
            }
          }
          re === null ? (re = 65533, Pe = 1) : re > 65535 && (re -= 65536, D.push(re >>> 10 & 1023 | 55296), re = 56320 | re & 1023), D.push(re), X += Pe;
        }
        return St(D);
      }
      const tt = 4096;
      function St(R) {
        const g = R.length;
        if (g <= tt)
          return String.fromCharCode.apply(String, R);
        let v = "", D = 0;
        for (; D < g; )
          v += String.fromCharCode.apply(
            String,
            R.slice(D, D += tt)
          );
        return v;
      }
      function cr(R, g, v) {
        let D = "";
        v = Math.min(R.length, v);
        for (let X = g; X < v; ++X)
          D += String.fromCharCode(R[X] & 127);
        return D;
      }
      function Mt(R, g, v) {
        let D = "";
        v = Math.min(R.length, v);
        for (let X = g; X < v; ++X)
          D += String.fromCharCode(R[X]);
        return D;
      }
      function Qt(R, g, v) {
        const D = R.length;
        (!g || g < 0) && (g = 0), (!v || v < 0 || v > D) && (v = D);
        let X = "";
        for (let ee = g; ee < v; ++ee)
          X += Wi[R[ee]];
        return X;
      }
      function Or(R, g, v) {
        const D = R.slice(g, v);
        let X = "";
        for (let ee = 0; ee < D.length - 1; ee += 2)
          X += String.fromCharCode(D[ee] + D[ee + 1] * 256);
        return X;
      }
      P.prototype.slice = function(g, v) {
        const D = this.length;
        g = ~~g, v = v === void 0 ? D : ~~v, g < 0 ? (g += D, g < 0 && (g = 0)) : g > D && (g = D), v < 0 ? (v += D, v < 0 && (v = 0)) : v > D && (v = D), v < g && (v = g);
        const X = this.subarray(g, v);
        return Object.setPrototypeOf(X, P.prototype), X;
      };
      function Be(R, g, v) {
        if (R % 1 !== 0 || R < 0) throw new RangeError("offset is not uint");
        if (R + g > v) throw new RangeError("Trying to access beyond buffer length");
      }
      P.prototype.readUintLE = P.prototype.readUIntLE = function(g, v, D) {
        g = g >>> 0, v = v >>> 0, D || Be(g, v, this.length);
        let X = this[g], ee = 1, re = 0;
        for (; ++re < v && (ee *= 256); )
          X += this[g + re] * ee;
        return X;
      }, P.prototype.readUintBE = P.prototype.readUIntBE = function(g, v, D) {
        g = g >>> 0, v = v >>> 0, D || Be(g, v, this.length);
        let X = this[g + --v], ee = 1;
        for (; v > 0 && (ee *= 256); )
          X += this[g + --v] * ee;
        return X;
      }, P.prototype.readUint8 = P.prototype.readUInt8 = function(g, v) {
        return g = g >>> 0, v || Be(g, 1, this.length), this[g];
      }, P.prototype.readUint16LE = P.prototype.readUInt16LE = function(g, v) {
        return g = g >>> 0, v || Be(g, 2, this.length), this[g] | this[g + 1] << 8;
      }, P.prototype.readUint16BE = P.prototype.readUInt16BE = function(g, v) {
        return g = g >>> 0, v || Be(g, 2, this.length), this[g] << 8 | this[g + 1];
      }, P.prototype.readUint32LE = P.prototype.readUInt32LE = function(g, v) {
        return g = g >>> 0, v || Be(g, 4, this.length), (this[g] | this[g + 1] << 8 | this[g + 2] << 16) + this[g + 3] * 16777216;
      }, P.prototype.readUint32BE = P.prototype.readUInt32BE = function(g, v) {
        return g = g >>> 0, v || Be(g, 4, this.length), this[g] * 16777216 + (this[g + 1] << 16 | this[g + 2] << 8 | this[g + 3]);
      }, P.prototype.readBigUInt64LE = Rt(function(g) {
        g = g >>> 0, L(g, "offset");
        const v = this[g], D = this[g + 7];
        (v === void 0 || D === void 0) && V(g, this.length - 8);
        const X = v + this[++g] * 2 ** 8 + this[++g] * 2 ** 16 + this[++g] * 2 ** 24, ee = this[++g] + this[++g] * 2 ** 8 + this[++g] * 2 ** 16 + D * 2 ** 24;
        return BigInt(X) + (BigInt(ee) << BigInt(32));
      }), P.prototype.readBigUInt64BE = Rt(function(g) {
        g = g >>> 0, L(g, "offset");
        const v = this[g], D = this[g + 7];
        (v === void 0 || D === void 0) && V(g, this.length - 8);
        const X = v * 2 ** 24 + this[++g] * 2 ** 16 + this[++g] * 2 ** 8 + this[++g], ee = this[++g] * 2 ** 24 + this[++g] * 2 ** 16 + this[++g] * 2 ** 8 + D;
        return (BigInt(X) << BigInt(32)) + BigInt(ee);
      }), P.prototype.readIntLE = function(g, v, D) {
        g = g >>> 0, v = v >>> 0, D || Be(g, v, this.length);
        let X = this[g], ee = 1, re = 0;
        for (; ++re < v && (ee *= 256); )
          X += this[g + re] * ee;
        return ee *= 128, X >= ee && (X -= Math.pow(2, 8 * v)), X;
      }, P.prototype.readIntBE = function(g, v, D) {
        g = g >>> 0, v = v >>> 0, D || Be(g, v, this.length);
        let X = v, ee = 1, re = this[g + --X];
        for (; X > 0 && (ee *= 256); )
          re += this[g + --X] * ee;
        return ee *= 128, re >= ee && (re -= Math.pow(2, 8 * v)), re;
      }, P.prototype.readInt8 = function(g, v) {
        return g = g >>> 0, v || Be(g, 1, this.length), this[g] & 128 ? (255 - this[g] + 1) * -1 : this[g];
      }, P.prototype.readInt16LE = function(g, v) {
        g = g >>> 0, v || Be(g, 2, this.length);
        const D = this[g] | this[g + 1] << 8;
        return D & 32768 ? D | 4294901760 : D;
      }, P.prototype.readInt16BE = function(g, v) {
        g = g >>> 0, v || Be(g, 2, this.length);
        const D = this[g + 1] | this[g] << 8;
        return D & 32768 ? D | 4294901760 : D;
      }, P.prototype.readInt32LE = function(g, v) {
        return g = g >>> 0, v || Be(g, 4, this.length), this[g] | this[g + 1] << 8 | this[g + 2] << 16 | this[g + 3] << 24;
      }, P.prototype.readInt32BE = function(g, v) {
        return g = g >>> 0, v || Be(g, 4, this.length), this[g] << 24 | this[g + 1] << 16 | this[g + 2] << 8 | this[g + 3];
      }, P.prototype.readBigInt64LE = Rt(function(g) {
        g = g >>> 0, L(g, "offset");
        const v = this[g], D = this[g + 7];
        (v === void 0 || D === void 0) && V(g, this.length - 8);
        const X = this[g + 4] + this[g + 5] * 2 ** 8 + this[g + 6] * 2 ** 16 + (D << 24);
        return (BigInt(X) << BigInt(32)) + BigInt(v + this[++g] * 2 ** 8 + this[++g] * 2 ** 16 + this[++g] * 2 ** 24);
      }), P.prototype.readBigInt64BE = Rt(function(g) {
        g = g >>> 0, L(g, "offset");
        const v = this[g], D = this[g + 7];
        (v === void 0 || D === void 0) && V(g, this.length - 8);
        const X = (v << 24) + // Overflow
        this[++g] * 2 ** 16 + this[++g] * 2 ** 8 + this[++g];
        return (BigInt(X) << BigInt(32)) + BigInt(this[++g] * 2 ** 24 + this[++g] * 2 ** 16 + this[++g] * 2 ** 8 + D);
      }), P.prototype.readFloatLE = function(g, v) {
        return g = g >>> 0, v || Be(g, 4, this.length), C.read(this, g, !0, 23, 4);
      }, P.prototype.readFloatBE = function(g, v) {
        return g = g >>> 0, v || Be(g, 4, this.length), C.read(this, g, !1, 23, 4);
      }, P.prototype.readDoubleLE = function(g, v) {
        return g = g >>> 0, v || Be(g, 8, this.length), C.read(this, g, !0, 52, 8);
      }, P.prototype.readDoubleBE = function(g, v) {
        return g = g >>> 0, v || Be(g, 8, this.length), C.read(this, g, !1, 52, 8);
      };
      function Xe(R, g, v, D, X, ee) {
        if (!P.isBuffer(R)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (g > X || g < ee) throw new RangeError('"value" argument is out of bounds');
        if (v + D > R.length) throw new RangeError("Index out of range");
      }
      P.prototype.writeUintLE = P.prototype.writeUIntLE = function(g, v, D, X) {
        if (g = +g, v = v >>> 0, D = D >>> 0, !X) {
          const Pe = Math.pow(2, 8 * D) - 1;
          Xe(this, g, v, D, Pe, 0);
        }
        let ee = 1, re = 0;
        for (this[v] = g & 255; ++re < D && (ee *= 256); )
          this[v + re] = g / ee & 255;
        return v + D;
      }, P.prototype.writeUintBE = P.prototype.writeUIntBE = function(g, v, D, X) {
        if (g = +g, v = v >>> 0, D = D >>> 0, !X) {
          const Pe = Math.pow(2, 8 * D) - 1;
          Xe(this, g, v, D, Pe, 0);
        }
        let ee = D - 1, re = 1;
        for (this[v + ee] = g & 255; --ee >= 0 && (re *= 256); )
          this[v + ee] = g / re & 255;
        return v + D;
      }, P.prototype.writeUint8 = P.prototype.writeUInt8 = function(g, v, D) {
        return g = +g, v = v >>> 0, D || Xe(this, g, v, 1, 255, 0), this[v] = g & 255, v + 1;
      }, P.prototype.writeUint16LE = P.prototype.writeUInt16LE = function(g, v, D) {
        return g = +g, v = v >>> 0, D || Xe(this, g, v, 2, 65535, 0), this[v] = g & 255, this[v + 1] = g >>> 8, v + 2;
      }, P.prototype.writeUint16BE = P.prototype.writeUInt16BE = function(g, v, D) {
        return g = +g, v = v >>> 0, D || Xe(this, g, v, 2, 65535, 0), this[v] = g >>> 8, this[v + 1] = g & 255, v + 2;
      }, P.prototype.writeUint32LE = P.prototype.writeUInt32LE = function(g, v, D) {
        return g = +g, v = v >>> 0, D || Xe(this, g, v, 4, 4294967295, 0), this[v + 3] = g >>> 24, this[v + 2] = g >>> 16, this[v + 1] = g >>> 8, this[v] = g & 255, v + 4;
      }, P.prototype.writeUint32BE = P.prototype.writeUInt32BE = function(g, v, D) {
        return g = +g, v = v >>> 0, D || Xe(this, g, v, 4, 4294967295, 0), this[v] = g >>> 24, this[v + 1] = g >>> 16, this[v + 2] = g >>> 8, this[v + 3] = g & 255, v + 4;
      };
      function At(R, g, v, D, X) {
        O(g, D, X, R, v, 7);
        let ee = Number(g & BigInt(4294967295));
        R[v++] = ee, ee = ee >> 8, R[v++] = ee, ee = ee >> 8, R[v++] = ee, ee = ee >> 8, R[v++] = ee;
        let re = Number(g >> BigInt(32) & BigInt(4294967295));
        return R[v++] = re, re = re >> 8, R[v++] = re, re = re >> 8, R[v++] = re, re = re >> 8, R[v++] = re, v;
      }
      function Ye(R, g, v, D, X) {
        O(g, D, X, R, v, 7);
        let ee = Number(g & BigInt(4294967295));
        R[v + 7] = ee, ee = ee >> 8, R[v + 6] = ee, ee = ee >> 8, R[v + 5] = ee, ee = ee >> 8, R[v + 4] = ee;
        let re = Number(g >> BigInt(32) & BigInt(4294967295));
        return R[v + 3] = re, re = re >> 8, R[v + 2] = re, re = re >> 8, R[v + 1] = re, re = re >> 8, R[v] = re, v + 8;
      }
      P.prototype.writeBigUInt64LE = Rt(function(g, v = 0) {
        return At(this, g, v, BigInt(0), BigInt("0xffffffffffffffff"));
      }), P.prototype.writeBigUInt64BE = Rt(function(g, v = 0) {
        return Ye(this, g, v, BigInt(0), BigInt("0xffffffffffffffff"));
      }), P.prototype.writeIntLE = function(g, v, D, X) {
        if (g = +g, v = v >>> 0, !X) {
          const De = Math.pow(2, 8 * D - 1);
          Xe(this, g, v, D, De - 1, -De);
        }
        let ee = 0, re = 1, Pe = 0;
        for (this[v] = g & 255; ++ee < D && (re *= 256); )
          g < 0 && Pe === 0 && this[v + ee - 1] !== 0 && (Pe = 1), this[v + ee] = (g / re >> 0) - Pe & 255;
        return v + D;
      }, P.prototype.writeIntBE = function(g, v, D, X) {
        if (g = +g, v = v >>> 0, !X) {
          const De = Math.pow(2, 8 * D - 1);
          Xe(this, g, v, D, De - 1, -De);
        }
        let ee = D - 1, re = 1, Pe = 0;
        for (this[v + ee] = g & 255; --ee >= 0 && (re *= 256); )
          g < 0 && Pe === 0 && this[v + ee + 1] !== 0 && (Pe = 1), this[v + ee] = (g / re >> 0) - Pe & 255;
        return v + D;
      }, P.prototype.writeInt8 = function(g, v, D) {
        return g = +g, v = v >>> 0, D || Xe(this, g, v, 1, 127, -128), g < 0 && (g = 255 + g + 1), this[v] = g & 255, v + 1;
      }, P.prototype.writeInt16LE = function(g, v, D) {
        return g = +g, v = v >>> 0, D || Xe(this, g, v, 2, 32767, -32768), this[v] = g & 255, this[v + 1] = g >>> 8, v + 2;
      }, P.prototype.writeInt16BE = function(g, v, D) {
        return g = +g, v = v >>> 0, D || Xe(this, g, v, 2, 32767, -32768), this[v] = g >>> 8, this[v + 1] = g & 255, v + 2;
      }, P.prototype.writeInt32LE = function(g, v, D) {
        return g = +g, v = v >>> 0, D || Xe(this, g, v, 4, 2147483647, -2147483648), this[v] = g & 255, this[v + 1] = g >>> 8, this[v + 2] = g >>> 16, this[v + 3] = g >>> 24, v + 4;
      }, P.prototype.writeInt32BE = function(g, v, D) {
        return g = +g, v = v >>> 0, D || Xe(this, g, v, 4, 2147483647, -2147483648), g < 0 && (g = 4294967295 + g + 1), this[v] = g >>> 24, this[v + 1] = g >>> 16, this[v + 2] = g >>> 8, this[v + 3] = g & 255, v + 4;
      }, P.prototype.writeBigInt64LE = Rt(function(g, v = 0) {
        return At(this, g, v, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      }), P.prototype.writeBigInt64BE = Rt(function(g, v = 0) {
        return Ye(this, g, v, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function Tt(R, g, v, D, X, ee) {
        if (v + D > R.length) throw new RangeError("Index out of range");
        if (v < 0) throw new RangeError("Index out of range");
      }
      function lt(R, g, v, D, X) {
        return g = +g, v = v >>> 0, X || Tt(R, g, v, 4), C.write(R, g, v, D, 23, 4), v + 4;
      }
      P.prototype.writeFloatLE = function(g, v, D) {
        return lt(this, g, v, !0, D);
      }, P.prototype.writeFloatBE = function(g, v, D) {
        return lt(this, g, v, !1, D);
      };
      function J(R, g, v, D, X) {
        return g = +g, v = v >>> 0, X || Tt(R, g, v, 8), C.write(R, g, v, D, 52, 8), v + 8;
      }
      P.prototype.writeDoubleLE = function(g, v, D) {
        return J(this, g, v, !0, D);
      }, P.prototype.writeDoubleBE = function(g, v, D) {
        return J(this, g, v, !1, D);
      }, P.prototype.copy = function(g, v, D, X) {
        if (!P.isBuffer(g)) throw new TypeError("argument should be a Buffer");
        if (D || (D = 0), !X && X !== 0 && (X = this.length), v >= g.length && (v = g.length), v || (v = 0), X > 0 && X < D && (X = D), X === D || g.length === 0 || this.length === 0) return 0;
        if (v < 0)
          throw new RangeError("targetStart out of bounds");
        if (D < 0 || D >= this.length) throw new RangeError("Index out of range");
        if (X < 0) throw new RangeError("sourceEnd out of bounds");
        X > this.length && (X = this.length), g.length - v < X - D && (X = g.length - v + D);
        const ee = X - D;
        return this === g && typeof K.prototype.copyWithin == "function" ? this.copyWithin(v, D, X) : K.prototype.set.call(
          g,
          this.subarray(D, X),
          v
        ), ee;
      }, P.prototype.fill = function(g, v, D, X) {
        if (typeof g == "string") {
          if (typeof v == "string" ? (X = v, v = 0, D = this.length) : typeof D == "string" && (X = D, D = this.length), X !== void 0 && typeof X != "string")
            throw new TypeError("encoding must be a string");
          if (typeof X == "string" && !P.isEncoding(X))
            throw new TypeError("Unknown encoding: " + X);
          if (g.length === 1) {
            const re = g.charCodeAt(0);
            (X === "utf8" && re < 128 || X === "latin1") && (g = re);
          }
        } else typeof g == "number" ? g = g & 255 : typeof g == "boolean" && (g = Number(g));
        if (v < 0 || this.length < v || this.length < D)
          throw new RangeError("Out of range index");
        if (D <= v)
          return this;
        v = v >>> 0, D = D === void 0 ? this.length : D >>> 0, g || (g = 0);
        let ee;
        if (typeof g == "number")
          for (ee = v; ee < D; ++ee)
            this[ee] = g;
        else {
          const re = P.isBuffer(g) ? g : P.from(g, X), Pe = re.length;
          if (Pe === 0)
            throw new TypeError('The value "' + g + '" is invalid for argument "value"');
          for (ee = 0; ee < D - v; ++ee)
            this[ee + v] = re[ee % Pe];
        }
        return this;
      };
      const B = {};
      function p(R, g, v) {
        B[R] = class extends v {
          constructor() {
            super(), Object.defineProperty(this, "message", {
              value: g.apply(this, arguments),
              writable: !0,
              configurable: !0
            }), this.name = `${this.name} [${R}]`, this.stack, delete this.name;
          }
          get code() {
            return R;
          }
          set code(X) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: X,
              writable: !0
            });
          }
          toString() {
            return `${this.name} [${R}]: ${this.message}`;
          }
        };
      }
      p(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function(R) {
          return R ? `${R} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ), p(
        "ERR_INVALID_ARG_TYPE",
        function(R, g) {
          return `The "${R}" argument must be of type number. Received type ${typeof g}`;
        },
        TypeError
      ), p(
        "ERR_OUT_OF_RANGE",
        function(R, g, v) {
          let D = `The value of "${R}" is out of range.`, X = v;
          return Number.isInteger(v) && Math.abs(v) > 2 ** 32 ? X = l(String(v)) : typeof v == "bigint" && (X = String(v), (v > BigInt(2) ** BigInt(32) || v < -(BigInt(2) ** BigInt(32))) && (X = l(X)), X += "n"), D += ` It must be ${g}. Received ${X}`, D;
        },
        RangeError
      );
      function l(R) {
        let g = "", v = R.length;
        const D = R[0] === "-" ? 1 : 0;
        for (; v >= D + 4; v -= 3)
          g = `_${R.slice(v - 3, v)}${g}`;
        return `${R.slice(0, v)}${g}`;
      }
      function h(R, g, v) {
        L(g, "offset"), (R[g] === void 0 || R[g + v] === void 0) && V(g, R.length - (v + 1));
      }
      function O(R, g, v, D, X, ee) {
        if (R > v || R < g) {
          const re = typeof g == "bigint" ? "n" : "";
          let Pe;
          throw g === 0 || g === BigInt(0) ? Pe = `>= 0${re} and < 2${re} ** ${(ee + 1) * 8}${re}` : Pe = `>= -(2${re} ** ${(ee + 1) * 8 - 1}${re}) and < 2 ** ${(ee + 1) * 8 - 1}${re}`, new B.ERR_OUT_OF_RANGE("value", Pe, R);
        }
        h(D, X, ee);
      }
      function L(R, g) {
        if (typeof R != "number")
          throw new B.ERR_INVALID_ARG_TYPE(g, "number", R);
      }
      function V(R, g, v) {
        throw Math.floor(R) !== R ? (L(R, v), new B.ERR_OUT_OF_RANGE("offset", "an integer", R)) : g < 0 ? new B.ERR_BUFFER_OUT_OF_BOUNDS() : new B.ERR_OUT_OF_RANGE(
          "offset",
          `>= 0 and <= ${g}`,
          R
        );
      }
      const z = /[^+/0-9A-Za-z-_]/g;
      function ie(R) {
        if (R = R.split("=")[0], R = R.trim().replace(z, ""), R.length < 2) return "";
        for (; R.length % 4 !== 0; )
          R = R + "=";
        return R;
      }
      function ce(R, g) {
        g = g || 1 / 0;
        let v;
        const D = R.length;
        let X = null;
        const ee = [];
        for (let re = 0; re < D; ++re) {
          if (v = R.charCodeAt(re), v > 55295 && v < 57344) {
            if (!X) {
              if (v > 56319) {
                (g -= 3) > -1 && ee.push(239, 191, 189);
                continue;
              } else if (re + 1 === D) {
                (g -= 3) > -1 && ee.push(239, 191, 189);
                continue;
              }
              X = v;
              continue;
            }
            if (v < 56320) {
              (g -= 3) > -1 && ee.push(239, 191, 189), X = v;
              continue;
            }
            v = (X - 55296 << 10 | v - 56320) + 65536;
          } else X && (g -= 3) > -1 && ee.push(239, 191, 189);
          if (X = null, v < 128) {
            if ((g -= 1) < 0) break;
            ee.push(v);
          } else if (v < 2048) {
            if ((g -= 2) < 0) break;
            ee.push(
              v >> 6 | 192,
              v & 63 | 128
            );
          } else if (v < 65536) {
            if ((g -= 3) < 0) break;
            ee.push(
              v >> 12 | 224,
              v >> 6 & 63 | 128,
              v & 63 | 128
            );
          } else if (v < 1114112) {
            if ((g -= 4) < 0) break;
            ee.push(
              v >> 18 | 240,
              v >> 12 & 63 | 128,
              v >> 6 & 63 | 128,
              v & 63 | 128
            );
          } else
            throw new Error("Invalid code point");
        }
        return ee;
      }
      function fe(R) {
        const g = [];
        for (let v = 0; v < R.length; ++v)
          g.push(R.charCodeAt(v) & 255);
        return g;
      }
      function ye(R, g) {
        let v, D, X;
        const ee = [];
        for (let re = 0; re < R.length && !((g -= 2) < 0); ++re)
          v = R.charCodeAt(re), D = v >> 8, X = v % 256, ee.push(X), ee.push(D);
        return ee;
      }
      function we(R) {
        return T.toByteArray(ie(R));
      }
      function _e(R, g, v, D) {
        let X;
        for (X = 0; X < D && !(X + v >= g.length || X >= R.length); ++X)
          g[X + v] = R[X];
        return X;
      }
      function qe(R, g) {
        return R instanceof g || R != null && R.constructor != null && R.constructor.name != null && R.constructor.name === g.name;
      }
      function Zr(R) {
        return R !== R;
      }
      const Wi = function() {
        const R = "0123456789abcdef", g = new Array(256);
        for (let v = 0; v < 16; ++v) {
          const D = v * 16;
          for (let X = 0; X < 16; ++X)
            g[D + X] = R[v] + R[X];
        }
        return g;
      }();
      function Rt(R) {
        return typeof BigInt > "u" ? Ki : R;
      }
      function Ki() {
        throw new Error("BigInt not supported");
      }
    })(t);
    const x = t.Buffer;
    e.Blob = t.Blob, e.BlobOptions = t.BlobOptions, e.Buffer = t.Buffer, e.File = t.File, e.FileOptions = t.FileOptions, e.INSPECT_MAX_BYTES = t.INSPECT_MAX_BYTES, e.SlowBuffer = t.SlowBuffer, e.TranscodeEncoding = t.TranscodeEncoding, e.atob = t.atob, e.btoa = t.btoa, e.constants = t.constants, e.default = x, e.isAscii = t.isAscii, e.isUtf8 = t.isUtf8, e.kMaxLength = t.kMaxLength, e.kStringMaxLength = t.kStringMaxLength, e.resolveObjectURL = t.resolveObjectURL, e.transcode = t.transcode;
  }(fo)), fo;
}
var ho, ou;
function hs() {
  if (ou) return ho;
  ou = 1;
  var e = {
    Array: function(n) {
      return n != null && n.constructor === Array;
    },
    Boolean: function(n) {
      return typeof n == "boolean";
    },
    Function: function(n) {
      return typeof n == "function";
    },
    Nil: function(n) {
      return n == null;
    },
    Number: function(n) {
      return typeof n == "number";
    },
    Object: function(n) {
      return typeof n == "object";
    },
    String: function(n) {
      return typeof n == "string";
    },
    "": function() {
      return !0;
    }
  };
  e.Null = e.Nil;
  for (var t in e)
    e[t].toJSON = (function(n) {
      return n;
    }).bind(null, t);
  return ho = e, ho;
}
var po, su;
function zc() {
  if (su) return po;
  su = 1;
  var e = hs();
  function t(y) {
    return y.name || y.toString().match(/function (.*?)\s*\(/)[1];
  }
  function n(y) {
    return e.Nil(y) ? "" : t(y.constructor);
  }
  function r(y) {
    return e.Function(y) ? "" : e.String(y) ? JSON.stringify(y) : y && e.Object(y) ? "" : y;
  }
  function i(y, f) {
    Error.captureStackTrace && Error.captureStackTrace(y, f);
  }
  function s(y) {
    return e.Function(y) ? y.toJSON ? y.toJSON() : t(y) : e.Array(y) ? "Array" : y && e.Object(y) ? "Object" : y !== void 0 ? y : "";
  }
  function u(y, f, E) {
    var b = r(f);
    return "Expected " + s(y) + ", got" + (E !== "" ? " " + E : "") + (b !== "" ? " " + b : "");
  }
  function o(y, f, E) {
    E = E || n(f), this.message = u(y, f, E), i(this, o), this.__type = y, this.__value = f, this.__valueTypeName = E;
  }
  o.prototype = Object.create(Error.prototype), o.prototype.constructor = o;
  function a(y, f, E, b, I) {
    var x = '" of type ';
    return f === "key" && (x = '" with key type '), u('property "' + s(E) + x + s(y), b, I);
  }
  function d(y, f, E, b, I) {
    y ? (I = I || n(b), this.message = a(y, E, f, b, I)) : this.message = 'Unexpected property "' + f + '"', i(this, o), this.__label = E, this.__property = f, this.__type = y, this.__value = b, this.__valueTypeName = I;
  }
  d.prototype = Object.create(Error.prototype), d.prototype.constructor = o;
  function c(y, f) {
    return new o(y, {}, f);
  }
  function w(y, f, E) {
    return y instanceof d ? (f = f + "." + y.__property, y = new d(
      y.__type,
      f,
      y.__label,
      y.__value,
      y.__valueTypeName
    )) : y instanceof o && (y = new d(
      y.__type,
      f,
      E,
      y.__value,
      y.__valueTypeName
    )), i(y), y;
  }
  return po = {
    TfTypeError: o,
    TfPropertyTypeError: d,
    tfCustomError: c,
    tfSubError: w,
    tfJSON: s,
    getValueTypeName: n
  }, po;
}
var go, uu;
function _p() {
  if (uu) return go;
  uu = 1;
  var e = hs(), t = zc();
  function n(U) {
    return Q.isBuffer(U);
  }
  function r(U) {
    return typeof U == "string" && /^([0-9a-f]{2})+$/i.test(U);
  }
  function i(U, K) {
    var S = U.toJSON();
    function A(_) {
      if (!U(_)) return !1;
      if (_.length === K) return !0;
      throw t.tfCustomError(S + "(Length: " + K + ")", S + "(Length: " + _.length + ")");
    }
    return A.toJSON = function() {
      return S;
    }, A;
  }
  var s = i.bind(null, e.Array), u = i.bind(null, n), o = i.bind(null, r), a = i.bind(null, e.String);
  function d(U, K, S) {
    S = S || e.Number;
    function A(_, N) {
      return S(_, N) && _ > U && _ < K;
    }
    return A.toJSON = function() {
      return `${S.toJSON()} between [${U}, ${K}]`;
    }, A;
  }
  var c = Math.pow(2, 53) - 1;
  function w(U) {
    return typeof U == "number" && isFinite(U);
  }
  function y(U) {
    return U << 24 >> 24 === U;
  }
  function f(U) {
    return U << 16 >> 16 === U;
  }
  function E(U) {
    return (U | 0) === U;
  }
  function b(U) {
    return typeof U == "number" && U >= -c && U <= c && Math.floor(U) === U;
  }
  function I(U) {
    return (U & 255) === U;
  }
  function x(U) {
    return (U & 65535) === U;
  }
  function m(U) {
    return U >>> 0 === U;
  }
  function T(U) {
    return typeof U == "number" && U >= 0 && U <= c && Math.floor(U) === U;
  }
  var C = {
    ArrayN: s,
    Buffer: n,
    BufferN: u,
    Finite: w,
    Hex: r,
    HexN: o,
    Int8: y,
    Int16: f,
    Int32: E,
    Int53: b,
    Range: d,
    StringN: a,
    UInt8: I,
    UInt16: x,
    UInt32: m,
    UInt53: T
  };
  for (var j in C)
    C[j].toJSON = (function(U) {
      return U;
    }).bind(null, j);
  return go = C, go;
}
var mo, au;
function Op() {
  if (au) return mo;
  au = 1;
  var e = zc(), t = hs(), n = e.tfJSON, r = e.TfTypeError, i = e.TfPropertyTypeError, s = e.tfSubError, u = e.getValueTypeName, o = {
    arrayOf: function(f, E) {
      f = a(f), E = E || {};
      function b(I, x) {
        return !t.Array(I) || t.Nil(I) || E.minLength !== void 0 && I.length < E.minLength || E.maxLength !== void 0 && I.length > E.maxLength || E.length !== void 0 && I.length !== E.length ? !1 : I.every(function(m, T) {
          try {
            return d(f, m, x);
          } catch (C) {
            throw s(C, T);
          }
        });
      }
      return b.toJSON = function() {
        var I = "[" + n(f) + "]";
        return E.length !== void 0 ? I += "{" + E.length + "}" : (E.minLength !== void 0 || E.maxLength !== void 0) && (I += "{" + (E.minLength === void 0 ? 0 : E.minLength) + "," + (E.maxLength === void 0 ? 1 / 0 : E.maxLength) + "}"), I;
      }, b;
    },
    maybe: function y(f) {
      f = a(f);
      function E(b, I) {
        return t.Nil(b) || f(b, I, y);
      }
      return E.toJSON = function() {
        return "?" + n(f);
      }, E;
    },
    map: function(f, E) {
      f = a(f), E && (E = a(E));
      function b(I, x) {
        if (!t.Object(I) || t.Nil(I)) return !1;
        for (var m in I) {
          try {
            E && d(E, m, x);
          } catch (C) {
            throw s(C, m, "key");
          }
          try {
            var T = I[m];
            d(f, T, x);
          } catch (C) {
            throw s(C, m);
          }
        }
        return !0;
      }
      return E ? b.toJSON = function() {
        return "{" + n(E) + ": " + n(f) + "}";
      } : b.toJSON = function() {
        return "{" + n(f) + "}";
      }, b;
    },
    object: function(f) {
      var E = {};
      for (var b in f)
        E[b] = a(f[b]);
      function I(x, m) {
        if (!t.Object(x) || t.Nil(x)) return !1;
        var T;
        try {
          for (T in E) {
            var C = E[T], j = x[T];
            d(C, j, m);
          }
        } catch (U) {
          throw s(U, T);
        }
        if (m) {
          for (T in x)
            if (!E[T])
              throw new i(void 0, T);
        }
        return !0;
      }
      return I.toJSON = function() {
        return n(E);
      }, I;
    },
    anyOf: function() {
      var f = [].slice.call(arguments).map(a);
      function E(b, I) {
        return f.some(function(x) {
          try {
            return d(x, b, I);
          } catch {
            return !1;
          }
        });
      }
      return E.toJSON = function() {
        return f.map(n).join("|");
      }, E;
    },
    allOf: function() {
      var f = [].slice.call(arguments).map(a);
      function E(b, I) {
        return f.every(function(x) {
          try {
            return d(x, b, I);
          } catch {
            return !1;
          }
        });
      }
      return E.toJSON = function() {
        return f.map(n).join(" & ");
      }, E;
    },
    quacksLike: function(f) {
      function E(b) {
        return f === u(b);
      }
      return E.toJSON = function() {
        return f;
      }, E;
    },
    tuple: function() {
      var f = [].slice.call(arguments).map(a);
      function E(b, I) {
        return t.Nil(b) || t.Nil(b.length) || I && b.length !== f.length ? !1 : f.every(function(x, m) {
          try {
            return d(x, b[m], I);
          } catch (T) {
            throw s(T, m);
          }
        });
      }
      return E.toJSON = function() {
        return "(" + f.map(n).join(", ") + ")";
      }, E;
    },
    value: function(f) {
      function E(b) {
        return b === f;
      }
      return E.toJSON = function() {
        return f;
      }, E;
    }
  };
  o.oneOf = o.anyOf;
  function a(y) {
    if (t.String(y))
      return y[0] === "?" ? o.maybe(y.slice(1)) : t[y] || o.quacksLike(y);
    if (y && t.Object(y)) {
      if (t.Array(y)) {
        if (y.length !== 1) throw new TypeError("Expected compile() parameter of type Array of length 1");
        return o.arrayOf(y[0]);
      }
      return o.object(y);
    } else if (t.Function(y))
      return y;
    return o.value(y);
  }
  function d(y, f, E, b) {
    if (t.Function(y)) {
      if (y(f, E)) return !0;
      throw new r(b || y, f);
    }
    return d(a(y), f, E);
  }
  for (var c in t)
    d[c] = t[c];
  for (c in o)
    d[c] = o[c];
  var w = _p();
  for (c in w)
    d[c] = w[c];
  return d.compile = a, d.TfTypeError = r, d.TfPropertyTypeError = i, mo = d, mo;
}
var cu;
function pt() {
  return cu || (cu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.oneOf = e.Null = e.BufferN = e.Function = e.UInt32 = e.UInt8 = e.tuple = e.maybe = e.Hex = e.Buffer = e.String = e.Boolean = e.Array = e.Number = e.Hash256bit = e.Hash160bit = e.Buffer256bit = e.isTaptree = e.isTapleaf = e.TAPLEAF_VERSION_MASK = e.Satoshi = e.isPoint = e.stacksEqual = e.typeforce = void 0;
    const t = Mi();
    e.typeforce = Op();
    const n = t.Buffer.alloc(32, 0), r = t.Buffer.from(
      "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
      "hex"
    );
    function i(c, w) {
      return c.length !== w.length ? !1 : c.every((y, f) => y.equals(w[f]));
    }
    e.stacksEqual = i;
    function s(c) {
      if (!t.Buffer.isBuffer(c) || c.length < 33) return !1;
      const w = c[0], y = c.slice(1, 33);
      if (y.compare(n) === 0 || y.compare(r) >= 0) return !1;
      if ((w === 2 || w === 3) && c.length === 33)
        return !0;
      const f = c.slice(33);
      return f.compare(n) === 0 || f.compare(r) >= 0 ? !1 : w === 4 && c.length === 65;
    }
    e.isPoint = s;
    const u = 21 * 1e14;
    function o(c) {
      return e.typeforce.UInt53(c) && c <= u;
    }
    e.Satoshi = o, e.TAPLEAF_VERSION_MASK = 254;
    function a(c) {
      return !c || !("output" in c) || !t.Buffer.isBuffer(c.output) ? !1 : c.version !== void 0 ? (c.version & e.TAPLEAF_VERSION_MASK) === c.version : !0;
    }
    e.isTapleaf = a;
    function d(c) {
      return (0, e.Array)(c) ? c.length !== 2 ? !1 : c.every((w) => d(w)) : a(c);
    }
    e.isTaptree = d, e.Buffer256bit = e.typeforce.BufferN(32), e.Hash160bit = e.typeforce.BufferN(20), e.Hash256bit = e.typeforce.BufferN(32), e.Number = e.typeforce.Number, e.Array = e.typeforce.Array, e.Boolean = e.typeforce.Boolean, e.String = e.typeforce.String, e.Buffer = e.typeforce.Buffer, e.Hex = e.typeforce.Hex, e.maybe = e.typeforce.maybe, e.tuple = e.typeforce.tuple, e.UInt8 = e.typeforce.UInt8, e.UInt32 = e.typeforce.UInt32, e.Function = e.typeforce.Function, e.BufferN = e.typeforce.BufferN, e.Null = e.typeforce.Null, e.oneOf = e.typeforce.oneOf;
  }(lo)), lo;
}
var lu;
function Cp() {
  if (lu) return Fr;
  lu = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.encode = Fr.decode = void 0;
  const e = Yc(), t = yt(), n = pt(), { typeforce: r } = n, i = Q.alloc(1, 0);
  function s(d) {
    let c = 0;
    for (; d[c] === 0; ) ++c;
    return c === d.length ? i : (d = d.slice(c), d[0] & 128 ? Q.concat([i, d], 1 + d.length) : d);
  }
  function u(d) {
    d[0] === 0 && (d = d.slice(1));
    const c = Q.alloc(32, 0), w = Math.max(0, 32 - d.length);
    return d.copy(c, w), c;
  }
  function o(d) {
    const c = d.readUInt8(d.length - 1);
    if (!(0, t.isDefinedHashType)(c))
      throw new Error("Invalid hashType " + c);
    const w = e.decode(d.slice(0, -1)), y = u(w.r), f = u(w.s);
    return { signature: Q.concat([y, f], 64), hashType: c };
  }
  Fr.decode = o;
  function a(d, c) {
    if (r(
      {
        signature: n.BufferN(64),
        hashType: n.UInt8
      },
      { signature: d, hashType: c }
    ), !(0, t.isDefinedHashType)(c))
      throw new Error("Invalid hashType " + c);
    const w = Q.allocUnsafe(1);
    w.writeUInt8(c, 0);
    const y = s(d.slice(0, 32)), f = s(d.slice(32, 64));
    return Q.concat([e.encode(y, f), w]);
  }
  return Fr.encode = a, Fr;
}
var fu;
function yt() {
  return fu || (fu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.signature = e.number = e.isCanonicalScriptSignature = e.isDefinedHashType = e.isCanonicalPubKey = e.toStack = e.fromASM = e.toASM = e.decompile = e.compile = e.countNonPushOnlyOPs = e.isPushOnly = e.OPS = void 0;
    const t = Yc(), n = fs();
    Object.defineProperty(e, "OPS", {
      enumerable: !0,
      get: function() {
        return n.OPS;
      }
    });
    const r = Ip(), i = xp(), s = Cp(), u = pt(), { typeforce: o } = u, a = n.OPS.OP_RESERVED;
    function d(A) {
      return u.Number(A) && (A === n.OPS.OP_0 || A >= n.OPS.OP_1 && A <= n.OPS.OP_16 || A === n.OPS.OP_1NEGATE);
    }
    function c(A) {
      return u.Buffer(A) || d(A);
    }
    function w(A) {
      return u.Array(A) && A.every(c);
    }
    e.isPushOnly = w;
    function y(A) {
      return A.length - A.filter(c).length;
    }
    e.countNonPushOnlyOPs = y;
    function f(A) {
      if (A.length === 0) return n.OPS.OP_0;
      if (A.length === 1) {
        if (A[0] >= 1 && A[0] <= 16) return a + A[0];
        if (A[0] === 129) return n.OPS.OP_1NEGATE;
      }
    }
    function E(A) {
      return Q.isBuffer(A);
    }
    function b(A) {
      return u.Array(A);
    }
    function I(A) {
      return Q.isBuffer(A);
    }
    function x(A) {
      if (E(A)) return A;
      o(u.Array, A);
      const _ = A.reduce((F, W) => I(W) ? W.length === 1 && f(W) !== void 0 ? F + 1 : F + r.encodingLength(W.length) + W.length : F + 1, 0), N = Q.allocUnsafe(_);
      let P = 0;
      if (A.forEach((F) => {
        if (I(F)) {
          const W = f(F);
          if (W !== void 0) {
            N.writeUInt8(W, P), P += 1;
            return;
          }
          P += r.encode(N, F.length, P), F.copy(N, P), P += F.length;
        } else
          N.writeUInt8(F, P), P += 1;
      }), P !== N.length) throw new Error("Could not decode chunks");
      return N;
    }
    e.compile = x;
    function m(A) {
      if (b(A)) return A;
      o(u.Buffer, A);
      const _ = [];
      let N = 0;
      for (; N < A.length; ) {
        const P = A[N];
        if (P > n.OPS.OP_0 && P <= n.OPS.OP_PUSHDATA4) {
          const F = r.decode(A, N);
          if (F === null || (N += F.size, N + F.number > A.length)) return null;
          const W = A.slice(N, N + F.number);
          N += F.number;
          const H = f(W);
          H !== void 0 ? _.push(H) : _.push(W);
        } else
          _.push(P), N += 1;
      }
      return _;
    }
    e.decompile = m;
    function T(A) {
      if (E(A) && (A = m(A)), !A)
        throw new Error("Could not convert invalid chunks to ASM");
      return A.map((_) => {
        if (I(_)) {
          const N = f(_);
          if (N === void 0) return _.toString("hex");
          _ = N;
        }
        return n.REVERSE_OPS[_];
      }).join(" ");
    }
    e.toASM = T;
    function C(A) {
      return o(u.String, A), x(
        A.split(" ").map((_) => n.OPS[_] !== void 0 ? n.OPS[_] : (o(u.Hex, _), Q.from(_, "hex")))
      );
    }
    e.fromASM = C;
    function j(A) {
      return A = m(A), o(w, A), A.map((_) => I(_) ? _ : _ === n.OPS.OP_0 ? Q.allocUnsafe(0) : i.encode(_ - a));
    }
    e.toStack = j;
    function U(A) {
      return u.isPoint(A);
    }
    e.isCanonicalPubKey = U;
    function K(A) {
      const _ = A & -129;
      return _ > 0 && _ < 4;
    }
    e.isDefinedHashType = K;
    function S(A) {
      return !Q.isBuffer(A) || !K(A[A.length - 1]) ? !1 : t.check(A.slice(0, -1));
    }
    e.isCanonicalScriptSignature = S, e.number = i, e.signature = s;
  }(co)), co;
}
var Nr = {}, hu;
function _r() {
  if (hu) return Nr;
  hu = 1, Object.defineProperty(Nr, "__esModule", { value: !0 }), Nr.value = Nr.prop = void 0;
  function e(n, r, i) {
    Object.defineProperty(n, r, {
      configurable: !0,
      enumerable: !0,
      get() {
        const s = i.call(this);
        return this[r] = s, s;
      },
      set(s) {
        Object.defineProperty(this, r, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        });
      }
    });
  }
  Nr.prop = e;
  function t(n) {
    let r;
    return () => (r !== void 0 || (r = n()), r);
  }
  return Nr.value = t, Nr;
}
var du;
function kp() {
  if (du) return vn;
  du = 1, Object.defineProperty(vn, "__esModule", { value: !0 }), vn.p2data = void 0;
  const e = Ht(), t = yt(), n = pt(), r = _r(), i = t.OPS;
  function s(u, o) {
    if (!u.data && !u.output) throw new TypeError("Not enough data");
    o = Object.assign({ validate: !0 }, o || {}), (0, n.typeforce)(
      {
        network: n.typeforce.maybe(n.typeforce.Object),
        output: n.typeforce.maybe(n.typeforce.Buffer),
        data: n.typeforce.maybe(
          n.typeforce.arrayOf(n.typeforce.Buffer)
        )
      },
      u
    );
    const d = { name: "embed", network: u.network || e.bitcoin };
    if (r.prop(d, "output", () => {
      if (u.data)
        return t.compile([i.OP_RETURN].concat(u.data));
    }), r.prop(d, "data", () => {
      if (u.output)
        return t.decompile(u.output).slice(1);
    }), o.validate && u.output) {
      const c = t.decompile(u.output);
      if (c[0] !== i.OP_RETURN) throw new TypeError("Output is invalid");
      if (!c.slice(1).every(n.typeforce.Buffer))
        throw new TypeError("Output is invalid");
      if (u.data && !(0, n.stacksEqual)(u.data, d.data))
        throw new TypeError("Data mismatch");
    }
    return Object.assign(d, u);
  }
  return vn.p2data = s, vn;
}
var Pn = {}, pu;
function Bp() {
  if (pu) return Pn;
  pu = 1, Object.defineProperty(Pn, "__esModule", { value: !0 }), Pn.p2ms = void 0;
  const e = Ht(), t = yt(), n = pt(), r = _r(), i = t.OPS, s = i.OP_RESERVED;
  function u(o, a) {
    if (!o.input && !o.output && !(o.pubkeys && o.m !== void 0) && !o.signatures)
      throw new TypeError("Not enough data");
    a = Object.assign({ validate: !0 }, a || {});
    function d(b) {
      return t.isCanonicalScriptSignature(b) || (a.allowIncomplete && b === i.OP_0) !== void 0;
    }
    (0, n.typeforce)(
      {
        network: n.typeforce.maybe(n.typeforce.Object),
        m: n.typeforce.maybe(n.typeforce.Number),
        n: n.typeforce.maybe(n.typeforce.Number),
        output: n.typeforce.maybe(n.typeforce.Buffer),
        pubkeys: n.typeforce.maybe(
          n.typeforce.arrayOf(n.isPoint)
        ),
        signatures: n.typeforce.maybe(
          n.typeforce.arrayOf(d)
        ),
        input: n.typeforce.maybe(n.typeforce.Buffer)
      },
      o
    );
    const w = { network: o.network || e.bitcoin };
    let y = [], f = !1;
    function E(b) {
      f || (f = !0, y = t.decompile(b), w.m = y[0] - s, w.n = y[y.length - 2] - s, w.pubkeys = y.slice(1, -2));
    }
    if (r.prop(w, "output", () => {
      if (o.m && w.n && o.pubkeys)
        return t.compile(
          [].concat(
            s + o.m,
            o.pubkeys,
            s + w.n,
            i.OP_CHECKMULTISIG
          )
        );
    }), r.prop(w, "m", () => {
      if (w.output)
        return E(w.output), w.m;
    }), r.prop(w, "n", () => {
      if (w.pubkeys)
        return w.pubkeys.length;
    }), r.prop(w, "pubkeys", () => {
      if (o.output)
        return E(o.output), w.pubkeys;
    }), r.prop(w, "signatures", () => {
      if (o.input)
        return t.decompile(o.input).slice(1);
    }), r.prop(w, "input", () => {
      if (o.signatures)
        return t.compile([i.OP_0].concat(o.signatures));
    }), r.prop(w, "witness", () => {
      if (w.input)
        return [];
    }), r.prop(w, "name", () => {
      if (!(!w.m || !w.n))
        return `p2ms(${w.m} of ${w.n})`;
    }), a.validate) {
      if (o.output) {
        if (E(o.output), !n.typeforce.Number(y[0]))
          throw new TypeError("Output is invalid");
        if (!n.typeforce.Number(y[y.length - 2]))
          throw new TypeError("Output is invalid");
        if (y[y.length - 1] !== i.OP_CHECKMULTISIG)
          throw new TypeError("Output is invalid");
        if (w.m <= 0 || w.n > 16 || w.m > w.n || w.n !== y.length - 3)
          throw new TypeError("Output is invalid");
        if (!w.pubkeys.every((b) => (0, n.isPoint)(b)))
          throw new TypeError("Output is invalid");
        if (o.m !== void 0 && o.m !== w.m) throw new TypeError("m mismatch");
        if (o.n !== void 0 && o.n !== w.n) throw new TypeError("n mismatch");
        if (o.pubkeys && !(0, n.stacksEqual)(o.pubkeys, w.pubkeys))
          throw new TypeError("Pubkeys mismatch");
      }
      if (o.pubkeys) {
        if (o.n !== void 0 && o.n !== o.pubkeys.length)
          throw new TypeError("Pubkey count mismatch");
        if (w.n = o.pubkeys.length, w.n < w.m) throw new TypeError("Pubkey count cannot be less than m");
      }
      if (o.signatures) {
        if (o.signatures.length < w.m)
          throw new TypeError("Not enough signatures provided");
        if (o.signatures.length > w.m)
          throw new TypeError("Too many signatures provided");
      }
      if (o.input) {
        if (o.input[0] !== i.OP_0) throw new TypeError("Input is invalid");
        if (w.signatures.length === 0 || !w.signatures.every(d))
          throw new TypeError("Input has invalid signature(s)");
        if (o.signatures && !(0, n.stacksEqual)(o.signatures, w.signatures))
          throw new TypeError("Signature mismatch");
        if (o.m !== void 0 && o.m !== o.signatures.length)
          throw new TypeError("Signature count mismatch");
      }
    }
    return Object.assign(w, o);
  }
  return Pn.p2ms = u, Pn;
}
var Sn = {}, gu;
function Rp() {
  if (gu) return Sn;
  gu = 1, Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.p2pk = void 0;
  const e = Ht(), t = yt(), n = pt(), r = _r(), i = t.OPS;
  function s(u, o) {
    if (!u.input && !u.output && !u.pubkey && !u.input && !u.signature)
      throw new TypeError("Not enough data");
    o = Object.assign({ validate: !0 }, o || {}), (0, n.typeforce)(
      {
        network: n.typeforce.maybe(n.typeforce.Object),
        output: n.typeforce.maybe(n.typeforce.Buffer),
        pubkey: n.typeforce.maybe(n.isPoint),
        signature: n.typeforce.maybe(t.isCanonicalScriptSignature),
        input: n.typeforce.maybe(n.typeforce.Buffer)
      },
      u
    );
    const a = r.value(() => t.decompile(u.input)), c = { name: "p2pk", network: u.network || e.bitcoin };
    if (r.prop(c, "output", () => {
      if (u.pubkey)
        return t.compile([u.pubkey, i.OP_CHECKSIG]);
    }), r.prop(c, "pubkey", () => {
      if (u.output)
        return u.output.slice(1, -1);
    }), r.prop(c, "signature", () => {
      if (u.input)
        return a()[0];
    }), r.prop(c, "input", () => {
      if (u.signature)
        return t.compile([u.signature]);
    }), r.prop(c, "witness", () => {
      if (c.input)
        return [];
    }), o.validate) {
      if (u.output) {
        if (u.output[u.output.length - 1] !== i.OP_CHECKSIG)
          throw new TypeError("Output is invalid");
        if (!(0, n.isPoint)(c.pubkey))
          throw new TypeError("Output pubkey is invalid");
        if (u.pubkey && !u.pubkey.equals(c.pubkey))
          throw new TypeError("Pubkey mismatch");
      }
      if (u.signature && u.input && !u.input.equals(c.input))
        throw new TypeError("Signature mismatch");
      if (u.input) {
        if (a().length !== 1) throw new TypeError("Input is invalid");
        if (!t.isCanonicalScriptSignature(c.signature))
          throw new TypeError("Input has invalid signature");
      }
    }
    return Object.assign(c, u);
  }
  return Sn.p2pk = s, Sn;
}
var Tn = {}, wo = {}, Ur = {}, rr = {}, Nt = {}, mu;
function Qc() {
  if (mu) return Nt;
  mu = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.isBytes = n, Nt.number = e, Nt.bool = t, Nt.bytes = r, Nt.hash = i, Nt.exists = s, Nt.output = u;
  function e(a) {
    if (!Number.isSafeInteger(a) || a < 0)
      throw new Error(`positive integer expected, not ${a}`);
  }
  function t(a) {
    if (typeof a != "boolean")
      throw new Error(`boolean expected, not ${a}`);
  }
  function n(a) {
    return a instanceof Uint8Array || a != null && typeof a == "object" && a.constructor.name === "Uint8Array";
  }
  function r(a, ...d) {
    if (!n(a))
      throw new Error("Uint8Array expected");
    if (d.length > 0 && !d.includes(a.length))
      throw new Error(`Uint8Array expected of length ${d}, not of length=${a.length}`);
  }
  function i(a) {
    if (typeof a != "function" || typeof a.create != "function")
      throw new Error("Hash should be wrapped by utils.wrapConstructor");
    e(a.outputLen), e(a.blockLen);
  }
  function s(a, d = !0) {
    if (a.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (d && a.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function u(a, d) {
    r(a);
    const c = d.outputLen;
    if (a.length < c)
      throw new Error(`digestInto() expects output buffer of length at least ${c}`);
  }
  const o = { number: e, bool: t, bytes: r, hash: i, exists: s, output: u };
  return Nt.default = o, Nt;
}
var yo = {}, In = {}, wu;
function Fp() {
  return wu || (wu = 1, Object.defineProperty(In, "__esModule", { value: !0 }), In.crypto = void 0, In.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0), In;
}
var yu;
function Di() {
  return yu || (yu = 1, function(e) {
    /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Hash = e.nextTick = e.byteSwapIfBE = e.byteSwap = e.isLE = e.rotl = e.rotr = e.createView = e.u32 = e.u8 = void 0, e.isBytes = r, e.byteSwap32 = c, e.bytesToHex = y, e.hexToBytes = b, e.asyncLoop = x, e.utf8ToBytes = m, e.toBytes = T, e.concatBytes = C, e.checkOpts = K, e.wrapConstructor = S, e.wrapConstructorWithOpts = A, e.wrapXOFConstructorWithOpts = _, e.randomBytes = N;
    const t = /* @__PURE__ */ Fp(), n = /* @__PURE__ */ Qc();
    function r(P) {
      return P instanceof Uint8Array || P != null && typeof P == "object" && P.constructor.name === "Uint8Array";
    }
    const i = (P) => new Uint8Array(P.buffer, P.byteOffset, P.byteLength);
    e.u8 = i;
    const s = (P) => new Uint32Array(P.buffer, P.byteOffset, Math.floor(P.byteLength / 4));
    e.u32 = s;
    const u = (P) => new DataView(P.buffer, P.byteOffset, P.byteLength);
    e.createView = u;
    const o = (P, F) => P << 32 - F | P >>> F;
    e.rotr = o;
    const a = (P, F) => P << F | P >>> 32 - F >>> 0;
    e.rotl = a, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    const d = (P) => P << 24 & 4278190080 | P << 8 & 16711680 | P >>> 8 & 65280 | P >>> 24 & 255;
    e.byteSwap = d, e.byteSwapIfBE = e.isLE ? (P) => P : (P) => (0, e.byteSwap)(P);
    function c(P) {
      for (let F = 0; F < P.length; F++)
        P[F] = (0, e.byteSwap)(P[F]);
    }
    const w = /* @__PURE__ */ Array.from({ length: 256 }, (P, F) => F.toString(16).padStart(2, "0"));
    function y(P) {
      (0, n.bytes)(P);
      let F = "";
      for (let W = 0; W < P.length; W++)
        F += w[P[W]];
      return F;
    }
    const f = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
    function E(P) {
      if (P >= f._0 && P <= f._9)
        return P - f._0;
      if (P >= f._A && P <= f._F)
        return P - (f._A - 10);
      if (P >= f._a && P <= f._f)
        return P - (f._a - 10);
    }
    function b(P) {
      if (typeof P != "string")
        throw new Error("hex string expected, got " + typeof P);
      const F = P.length, W = F / 2;
      if (F % 2)
        throw new Error("padded hex string expected, got unpadded hex of length " + F);
      const H = new Uint8Array(W);
      for (let $ = 0, G = 0; $ < W; $++, G += 2) {
        const k = E(P.charCodeAt(G)), M = E(P.charCodeAt(G + 1));
        if (k === void 0 || M === void 0) {
          const Y = P[G] + P[G + 1];
          throw new Error('hex string expected, got non-hex character "' + Y + '" at index ' + G);
        }
        H[$] = k * 16 + M;
      }
      return H;
    }
    const I = async () => {
    };
    e.nextTick = I;
    async function x(P, F, W) {
      let H = Date.now();
      for (let $ = 0; $ < P; $++) {
        W($);
        const G = Date.now() - H;
        G >= 0 && G < F || (await (0, e.nextTick)(), H += G);
      }
    }
    function m(P) {
      if (typeof P != "string")
        throw new Error(`utf8ToBytes expected string, got ${typeof P}`);
      return new Uint8Array(new TextEncoder().encode(P));
    }
    function T(P) {
      return typeof P == "string" && (P = m(P)), (0, n.bytes)(P), P;
    }
    function C(...P) {
      let F = 0;
      for (let H = 0; H < P.length; H++) {
        const $ = P[H];
        (0, n.bytes)($), F += $.length;
      }
      const W = new Uint8Array(F);
      for (let H = 0, $ = 0; H < P.length; H++) {
        const G = P[H];
        W.set(G, $), $ += G.length;
      }
      return W;
    }
    class j {
      // Safe version that clones internal state
      clone() {
        return this._cloneInto();
      }
    }
    e.Hash = j;
    const U = {}.toString;
    function K(P, F) {
      if (F !== void 0 && U.call(F) !== "[object Object]")
        throw new Error("Options should be object or undefined");
      return Object.assign(P, F);
    }
    function S(P) {
      const F = (H) => P().update(T(H)).digest(), W = P();
      return F.outputLen = W.outputLen, F.blockLen = W.blockLen, F.create = () => P(), F;
    }
    function A(P) {
      const F = (H, $) => P($).update(T(H)).digest(), W = P({});
      return F.outputLen = W.outputLen, F.blockLen = W.blockLen, F.create = (H) => P(H), F;
    }
    function _(P) {
      const F = (H, $) => P($).update(T(H)).digest(), W = P({});
      return F.outputLen = W.outputLen, F.blockLen = W.blockLen, F.create = (H) => P(H), F;
    }
    function N(P = 32) {
      if (t.crypto && typeof t.crypto.getRandomValues == "function")
        return t.crypto.getRandomValues(new Uint8Array(P));
      if (t.crypto && typeof t.crypto.randomBytes == "function")
        return t.crypto.randomBytes(P);
      throw new Error("crypto.getRandomValues must be defined");
    }
  }(yo)), yo;
}
var Eu;
function ds() {
  if (Eu) return rr;
  Eu = 1, Object.defineProperty(rr, "__esModule", { value: !0 }), rr.HashMD = rr.Maj = rr.Chi = void 0;
  const e = /* @__PURE__ */ Qc(), t = /* @__PURE__ */ Di();
  function n(u, o, a, d) {
    if (typeof u.setBigUint64 == "function")
      return u.setBigUint64(o, a, d);
    const c = BigInt(32), w = BigInt(4294967295), y = Number(a >> c & w), f = Number(a & w), E = d ? 4 : 0, b = d ? 0 : 4;
    u.setUint32(o + E, y, d), u.setUint32(o + b, f, d);
  }
  const r = (u, o, a) => u & o ^ ~u & a;
  rr.Chi = r;
  const i = (u, o, a) => u & o ^ u & a ^ o & a;
  rr.Maj = i;
  class s extends t.Hash {
    constructor(o, a, d, c) {
      super(), this.blockLen = o, this.outputLen = a, this.padOffset = d, this.isLE = c, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(o), this.view = (0, t.createView)(this.buffer);
    }
    update(o) {
      (0, e.exists)(this);
      const { view: a, buffer: d, blockLen: c } = this;
      o = (0, t.toBytes)(o);
      const w = o.length;
      for (let y = 0; y < w; ) {
        const f = Math.min(c - this.pos, w - y);
        if (f === c) {
          const E = (0, t.createView)(o);
          for (; c <= w - y; y += c)
            this.process(E, y);
          continue;
        }
        d.set(o.subarray(y, y + f), this.pos), this.pos += f, y += f, this.pos === c && (this.process(a, 0), this.pos = 0);
      }
      return this.length += o.length, this.roundClean(), this;
    }
    digestInto(o) {
      (0, e.exists)(this), (0, e.output)(o, this), this.finished = !0;
      const { buffer: a, view: d, blockLen: c, isLE: w } = this;
      let { pos: y } = this;
      a[y++] = 128, this.buffer.subarray(y).fill(0), this.padOffset > c - y && (this.process(d, 0), y = 0);
      for (let x = y; x < c; x++)
        a[x] = 0;
      n(d, c - 8, BigInt(this.length * 8), w), this.process(d, 0);
      const f = (0, t.createView)(o), E = this.outputLen;
      if (E % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit");
      const b = E / 4, I = this.get();
      if (b > I.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let x = 0; x < b; x++)
        f.setUint32(4 * x, I[x], w);
    }
    digest() {
      const { buffer: o, outputLen: a } = this;
      this.digestInto(o);
      const d = o.slice(0, a);
      return this.destroy(), d;
    }
    _cloneInto(o) {
      o || (o = new this.constructor()), o.set(...this.get());
      const { blockLen: a, buffer: d, length: c, finished: w, destroyed: y, pos: f } = this;
      return o.length = c, o.pos = f, o.finished = w, o.destroyed = y, c % a && o.buffer.set(d), o;
    }
  }
  return rr.HashMD = s, rr;
}
var Au;
function Np() {
  if (Au) return Ur;
  Au = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.ripemd160 = Ur.RIPEMD160 = void 0;
  const e = /* @__PURE__ */ ds(), t = /* @__PURE__ */ Di(), n = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]), r = /* @__PURE__ */ new Uint8Array(new Array(16).fill(0).map((b, I) => I)), i = /* @__PURE__ */ r.map((b) => (9 * b + 5) % 16);
  let s = [r], u = [i];
  for (let b = 0; b < 4; b++)
    for (let I of [s, u])
      I.push(I[b].map((x) => n[x]));
  const o = /* @__PURE__ */ [
    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
  ].map((b) => new Uint8Array(b)), a = /* @__PURE__ */ s.map((b, I) => b.map((x) => o[I][x])), d = /* @__PURE__ */ u.map((b, I) => b.map((x) => o[I][x])), c = /* @__PURE__ */ new Uint32Array([
    0,
    1518500249,
    1859775393,
    2400959708,
    2840853838
  ]), w = /* @__PURE__ */ new Uint32Array([
    1352829926,
    1548603684,
    1836072691,
    2053994217,
    0
  ]);
  function y(b, I, x, m) {
    return b === 0 ? I ^ x ^ m : b === 1 ? I & x | ~I & m : b === 2 ? (I | ~x) ^ m : b === 3 ? I & m | x & ~m : I ^ (x | ~m);
  }
  const f = /* @__PURE__ */ new Uint32Array(16);
  class E extends e.HashMD {
    constructor() {
      super(64, 20, 8, !0), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
    }
    get() {
      const { h0: I, h1: x, h2: m, h3: T, h4: C } = this;
      return [I, x, m, T, C];
    }
    set(I, x, m, T, C) {
      this.h0 = I | 0, this.h1 = x | 0, this.h2 = m | 0, this.h3 = T | 0, this.h4 = C | 0;
    }
    process(I, x) {
      for (let P = 0; P < 16; P++, x += 4)
        f[P] = I.getUint32(x, !0);
      let m = this.h0 | 0, T = m, C = this.h1 | 0, j = C, U = this.h2 | 0, K = U, S = this.h3 | 0, A = S, _ = this.h4 | 0, N = _;
      for (let P = 0; P < 5; P++) {
        const F = 4 - P, W = c[P], H = w[P], $ = s[P], G = u[P], k = a[P], M = d[P];
        for (let Y = 0; Y < 16; Y++) {
          const Z = (0, t.rotl)(m + y(P, C, U, S) + f[$[Y]] + W, k[Y]) + _ | 0;
          m = _, _ = S, S = (0, t.rotl)(U, 10) | 0, U = C, C = Z;
        }
        for (let Y = 0; Y < 16; Y++) {
          const Z = (0, t.rotl)(T + y(F, j, K, A) + f[G[Y]] + H, M[Y]) + N | 0;
          T = N, N = A, A = (0, t.rotl)(K, 10) | 0, K = j, j = Z;
        }
      }
      this.set(this.h1 + U + A | 0, this.h2 + S + N | 0, this.h3 + _ + T | 0, this.h4 + m + j | 0, this.h0 + C + K | 0);
    }
    roundClean() {
      f.fill(0);
    }
    destroy() {
      this.destroyed = !0, this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
    }
  }
  return Ur.RIPEMD160 = E, Ur.ripemd160 = (0, t.wrapConstructor)(() => new E()), Ur;
}
var Lr = {}, bu;
function Up() {
  if (bu) return Lr;
  bu = 1, Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.sha1 = Lr.SHA1 = void 0;
  const e = /* @__PURE__ */ ds(), t = /* @__PURE__ */ Di(), n = /* @__PURE__ */ new Uint32Array([
    1732584193,
    4023233417,
    2562383102,
    271733878,
    3285377520
  ]), r = /* @__PURE__ */ new Uint32Array(80);
  class i extends e.HashMD {
    constructor() {
      super(64, 20, 8, !1), this.A = n[0] | 0, this.B = n[1] | 0, this.C = n[2] | 0, this.D = n[3] | 0, this.E = n[4] | 0;
    }
    get() {
      const { A: u, B: o, C: a, D: d, E: c } = this;
      return [u, o, a, d, c];
    }
    set(u, o, a, d, c) {
      this.A = u | 0, this.B = o | 0, this.C = a | 0, this.D = d | 0, this.E = c | 0;
    }
    process(u, o) {
      for (let f = 0; f < 16; f++, o += 4)
        r[f] = u.getUint32(o, !1);
      for (let f = 16; f < 80; f++)
        r[f] = (0, t.rotl)(r[f - 3] ^ r[f - 8] ^ r[f - 14] ^ r[f - 16], 1);
      let { A: a, B: d, C: c, D: w, E: y } = this;
      for (let f = 0; f < 80; f++) {
        let E, b;
        f < 20 ? (E = (0, e.Chi)(d, c, w), b = 1518500249) : f < 40 ? (E = d ^ c ^ w, b = 1859775393) : f < 60 ? (E = (0, e.Maj)(d, c, w), b = 2400959708) : (E = d ^ c ^ w, b = 3395469782);
        const I = (0, t.rotl)(a, 5) + E + y + b + r[f] | 0;
        y = w, w = c, c = (0, t.rotl)(d, 30), d = a, a = I;
      }
      a = a + this.A | 0, d = d + this.B | 0, c = c + this.C | 0, w = w + this.D | 0, y = y + this.E | 0, this.set(a, d, c, w, y);
    }
    roundClean() {
      r.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  }
  return Lr.SHA1 = i, Lr.sha1 = (0, t.wrapConstructor)(() => new i()), Lr;
}
var nr = {}, vu;
function Jc() {
  if (vu) return nr;
  vu = 1, Object.defineProperty(nr, "__esModule", { value: !0 }), nr.sha224 = nr.sha256 = nr.SHA256 = void 0;
  const e = /* @__PURE__ */ ds(), t = /* @__PURE__ */ Di(), n = /* @__PURE__ */ new Uint32Array([
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
  ]), r = /* @__PURE__ */ new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]), i = /* @__PURE__ */ new Uint32Array(64);
  class s extends e.HashMD {
    constructor() {
      super(64, 32, 8, !1), this.A = r[0] | 0, this.B = r[1] | 0, this.C = r[2] | 0, this.D = r[3] | 0, this.E = r[4] | 0, this.F = r[5] | 0, this.G = r[6] | 0, this.H = r[7] | 0;
    }
    get() {
      const { A: a, B: d, C: c, D: w, E: y, F: f, G: E, H: b } = this;
      return [a, d, c, w, y, f, E, b];
    }
    // prettier-ignore
    set(a, d, c, w, y, f, E, b) {
      this.A = a | 0, this.B = d | 0, this.C = c | 0, this.D = w | 0, this.E = y | 0, this.F = f | 0, this.G = E | 0, this.H = b | 0;
    }
    process(a, d) {
      for (let m = 0; m < 16; m++, d += 4)
        i[m] = a.getUint32(d, !1);
      for (let m = 16; m < 64; m++) {
        const T = i[m - 15], C = i[m - 2], j = (0, t.rotr)(T, 7) ^ (0, t.rotr)(T, 18) ^ T >>> 3, U = (0, t.rotr)(C, 17) ^ (0, t.rotr)(C, 19) ^ C >>> 10;
        i[m] = U + i[m - 7] + j + i[m - 16] | 0;
      }
      let { A: c, B: w, C: y, D: f, E, F: b, G: I, H: x } = this;
      for (let m = 0; m < 64; m++) {
        const T = (0, t.rotr)(E, 6) ^ (0, t.rotr)(E, 11) ^ (0, t.rotr)(E, 25), C = x + T + (0, e.Chi)(E, b, I) + n[m] + i[m] | 0, U = ((0, t.rotr)(c, 2) ^ (0, t.rotr)(c, 13) ^ (0, t.rotr)(c, 22)) + (0, e.Maj)(c, w, y) | 0;
        x = I, I = b, b = E, E = f + C | 0, f = y, y = w, w = c, c = C + U | 0;
      }
      c = c + this.A | 0, w = w + this.B | 0, y = y + this.C | 0, f = f + this.D | 0, E = E + this.E | 0, b = b + this.F | 0, I = I + this.G | 0, x = x + this.H | 0, this.set(c, w, y, f, E, b, I, x);
    }
    roundClean() {
      i.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  }
  nr.SHA256 = s;
  class u extends s {
    constructor() {
      super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
    }
  }
  return nr.sha256 = (0, t.wrapConstructor)(() => new s()), nr.sha224 = (0, t.wrapConstructor)(() => new u()), nr;
}
var Pu;
function ar() {
  return Pu || (Pu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.taggedHash = e.TAGGED_HASH_PREFIXES = e.TAGS = e.hash256 = e.hash160 = e.sha256 = e.sha1 = e.ripemd160 = void 0;
    const t = /* @__PURE__ */ Np(), n = /* @__PURE__ */ Up(), r = /* @__PURE__ */ Jc();
    function i(c) {
      return Q.from((0, t.ripemd160)(Uint8Array.from(c)));
    }
    e.ripemd160 = i;
    function s(c) {
      return Q.from((0, n.sha1)(Uint8Array.from(c)));
    }
    e.sha1 = s;
    function u(c) {
      return Q.from((0, r.sha256)(Uint8Array.from(c)));
    }
    e.sha256 = u;
    function o(c) {
      return Q.from(
        (0, t.ripemd160)((0, r.sha256)(Uint8Array.from(c)))
      );
    }
    e.hash160 = o;
    function a(c) {
      return Q.from(
        (0, r.sha256)((0, r.sha256)(Uint8Array.from(c)))
      );
    }
    e.hash256 = a, e.TAGS = [
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
      "BIP0340/challenge": Q.from([
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
      "BIP0340/aux": Q.from([
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
      "BIP0340/nonce": Q.from([
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
      TapLeaf: Q.from([
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
      TapBranch: Q.from([
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
      TapSighash: Q.from([
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
      TapTweak: Q.from([
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
      "KeyAgg list": Q.from([
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
      "KeyAgg coefficient": Q.from([
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
    function d(c, w) {
      return u(Q.concat([e.TAGGED_HASH_PREFIXES[c], w]));
    }
    e.taggedHash = d;
  }(wo)), wo;
}
var Eo, Su;
function Lp() {
  if (Su) return Eo;
  Su = 1;
  function e(t) {
    if (t.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var n = new Uint8Array(256), r = 0; r < n.length; r++)
      n[r] = 255;
    for (var i = 0; i < t.length; i++) {
      var s = t.charAt(i), u = s.charCodeAt(0);
      if (n[u] !== 255)
        throw new TypeError(s + " is ambiguous");
      n[u] = i;
    }
    var o = t.length, a = t.charAt(0), d = Math.log(o) / Math.log(256), c = Math.log(256) / Math.log(o);
    function w(E) {
      if (E instanceof Uint8Array || (ArrayBuffer.isView(E) ? E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength) : Array.isArray(E) && (E = Uint8Array.from(E))), !(E instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (E.length === 0)
        return "";
      for (var b = 0, I = 0, x = 0, m = E.length; x !== m && E[x] === 0; )
        x++, b++;
      for (var T = (m - x) * c + 1 >>> 0, C = new Uint8Array(T); x !== m; ) {
        for (var j = E[x], U = 0, K = T - 1; (j !== 0 || U < I) && K !== -1; K--, U++)
          j += 256 * C[K] >>> 0, C[K] = j % o >>> 0, j = j / o >>> 0;
        if (j !== 0)
          throw new Error("Non-zero carry");
        I = U, x++;
      }
      for (var S = T - I; S !== T && C[S] === 0; )
        S++;
      for (var A = a.repeat(b); S < T; ++S)
        A += t.charAt(C[S]);
      return A;
    }
    function y(E) {
      if (typeof E != "string")
        throw new TypeError("Expected String");
      if (E.length === 0)
        return new Uint8Array();
      for (var b = 0, I = 0, x = 0; E[b] === a; )
        I++, b++;
      for (var m = (E.length - b) * d + 1 >>> 0, T = new Uint8Array(m); E[b]; ) {
        var C = n[E.charCodeAt(b)];
        if (C === 255)
          return;
        for (var j = 0, U = m - 1; (C !== 0 || j < x) && U !== -1; U--, j++)
          C += o * T[U] >>> 0, T[U] = C % 256 >>> 0, C = C / 256 >>> 0;
        if (C !== 0)
          throw new Error("Non-zero carry");
        x = j, b++;
      }
      for (var K = m - x; K !== m && T[K] === 0; )
        K++;
      for (var S = new Uint8Array(I + (m - K)), A = I; K !== m; )
        S[A++] = T[K++];
      return S;
    }
    function f(E) {
      var b = y(E);
      if (b)
        return b;
      throw new Error("Non-base" + o + " character");
    }
    return {
      encode: w,
      decodeUnsafe: y,
      decode: f
    };
  }
  return Eo = e, Eo;
}
var Ao, Tu;
function Hp() {
  return Tu || (Tu = 1, Ao = Lp()("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")), Ao;
}
var bo, Iu;
function Mp() {
  if (Iu) return bo;
  Iu = 1;
  var e = Hp();
  return bo = function(t) {
    function n(u) {
      var o = Uint8Array.from(u), a = t(o), d = o.length + 4, c = new Uint8Array(d);
      return c.set(o, 0), c.set(a.subarray(0, 4), o.length), e.encode(c, d);
    }
    function r(u) {
      var o = u.slice(0, -4), a = u.slice(-4), d = t(o);
      if (!(a[0] ^ d[0] | a[1] ^ d[1] | a[2] ^ d[2] | a[3] ^ d[3]))
        return o;
    }
    function i(u) {
      var o = e.decodeUnsafe(u);
      if (o)
        return r(o);
    }
    function s(u) {
      var o = e.decode(u), a = r(o);
      if (!a) throw new Error("Invalid checksum");
      return a;
    }
    return {
      encode: n,
      decode: s,
      decodeUnsafe: i
    };
  }, bo;
}
var vo, xu;
function ps() {
  if (xu) return vo;
  xu = 1;
  var { sha256: e } = /* @__PURE__ */ Jc(), t = Mp();
  function n(r) {
    return e(e(r));
  }
  return vo = t(n), vo;
}
var _u;
function Dp() {
  if (_u) return Tn;
  _u = 1, Object.defineProperty(Tn, "__esModule", { value: !0 }), Tn.p2pkh = void 0;
  const e = ar(), t = Ht(), n = yt(), r = pt(), i = _r(), s = ps(), u = n.OPS;
  function o(a, d) {
    if (!a.address && !a.hash && !a.output && !a.pubkey && !a.input)
      throw new TypeError("Not enough data");
    d = Object.assign({ validate: !0 }, d || {}), (0, r.typeforce)(
      {
        network: r.typeforce.maybe(r.typeforce.Object),
        address: r.typeforce.maybe(r.typeforce.String),
        hash: r.typeforce.maybe(r.typeforce.BufferN(20)),
        output: r.typeforce.maybe(r.typeforce.BufferN(25)),
        pubkey: r.typeforce.maybe(r.isPoint),
        signature: r.typeforce.maybe(n.isCanonicalScriptSignature),
        input: r.typeforce.maybe(r.typeforce.Buffer)
      },
      a
    );
    const c = i.value(() => {
      const E = Q.from(s.decode(a.address)), b = E.readUInt8(0), I = E.slice(1);
      return { version: b, hash: I };
    }), w = i.value(() => n.decompile(a.input)), y = a.network || t.bitcoin, f = { name: "p2pkh", network: y };
    if (i.prop(f, "address", () => {
      if (!f.hash) return;
      const E = Q.allocUnsafe(21);
      return E.writeUInt8(y.pubKeyHash, 0), f.hash.copy(E, 1), s.encode(E);
    }), i.prop(f, "hash", () => {
      if (a.output) return a.output.slice(3, 23);
      if (a.address) return c().hash;
      if (a.pubkey || f.pubkey) return e.hash160(a.pubkey || f.pubkey);
    }), i.prop(f, "output", () => {
      if (f.hash)
        return n.compile([
          u.OP_DUP,
          u.OP_HASH160,
          f.hash,
          u.OP_EQUALVERIFY,
          u.OP_CHECKSIG
        ]);
    }), i.prop(f, "pubkey", () => {
      if (a.input)
        return w()[1];
    }), i.prop(f, "signature", () => {
      if (a.input)
        return w()[0];
    }), i.prop(f, "input", () => {
      if (a.pubkey && a.signature)
        return n.compile([a.signature, a.pubkey]);
    }), i.prop(f, "witness", () => {
      if (f.input)
        return [];
    }), d.validate) {
      let E = Q.from([]);
      if (a.address) {
        if (c().version !== y.pubKeyHash)
          throw new TypeError("Invalid version or Network mismatch");
        if (c().hash.length !== 20) throw new TypeError("Invalid address");
        E = c().hash;
      }
      if (a.hash) {
        if (E.length > 0 && !E.equals(a.hash))
          throw new TypeError("Hash mismatch");
        E = a.hash;
      }
      if (a.output) {
        if (a.output.length !== 25 || a.output[0] !== u.OP_DUP || a.output[1] !== u.OP_HASH160 || a.output[2] !== 20 || a.output[23] !== u.OP_EQUALVERIFY || a.output[24] !== u.OP_CHECKSIG)
          throw new TypeError("Output is invalid");
        const b = a.output.slice(3, 23);
        if (E.length > 0 && !E.equals(b))
          throw new TypeError("Hash mismatch");
        E = b;
      }
      if (a.pubkey) {
        const b = e.hash160(a.pubkey);
        if (E.length > 0 && !E.equals(b))
          throw new TypeError("Hash mismatch");
        E = b;
      }
      if (a.input) {
        const b = w();
        if (b.length !== 2) throw new TypeError("Input is invalid");
        if (!n.isCanonicalScriptSignature(b[0]))
          throw new TypeError("Input has invalid signature");
        if (!(0, r.isPoint)(b[1]))
          throw new TypeError("Input has invalid pubkey");
        if (a.signature && !a.signature.equals(b[0]))
          throw new TypeError("Signature mismatch");
        if (a.pubkey && !a.pubkey.equals(b[1]))
          throw new TypeError("Pubkey mismatch");
        const I = e.hash160(b[1]);
        if (E.length > 0 && !E.equals(I))
          throw new TypeError("Hash mismatch");
      }
    }
    return Object.assign(f, a);
  }
  return Tn.p2pkh = o, Tn;
}
var xn = {}, Ou;
function $p() {
  if (Ou) return xn;
  Ou = 1, Object.defineProperty(xn, "__esModule", { value: !0 }), xn.p2sh = void 0;
  const e = ar(), t = Ht(), n = yt(), r = pt(), i = _r(), s = ps(), u = n.OPS;
  function o(a, d) {
    if (!a.address && !a.hash && !a.output && !a.redeem && !a.input)
      throw new TypeError("Not enough data");
    d = Object.assign({ validate: !0 }, d || {}), (0, r.typeforce)(
      {
        network: r.typeforce.maybe(r.typeforce.Object),
        address: r.typeforce.maybe(r.typeforce.String),
        hash: r.typeforce.maybe(r.typeforce.BufferN(20)),
        output: r.typeforce.maybe(r.typeforce.BufferN(23)),
        redeem: r.typeforce.maybe({
          network: r.typeforce.maybe(r.typeforce.Object),
          output: r.typeforce.maybe(r.typeforce.Buffer),
          input: r.typeforce.maybe(r.typeforce.Buffer),
          witness: r.typeforce.maybe(
            r.typeforce.arrayOf(r.typeforce.Buffer)
          )
        }),
        input: r.typeforce.maybe(r.typeforce.Buffer),
        witness: r.typeforce.maybe(
          r.typeforce.arrayOf(r.typeforce.Buffer)
        )
      },
      a
    );
    let c = a.network;
    c || (c = a.redeem && a.redeem.network || t.bitcoin);
    const w = { network: c }, y = i.value(() => {
      const b = Q.from(s.decode(a.address)), I = b.readUInt8(0), x = b.slice(1);
      return { version: I, hash: x };
    }), f = i.value(() => n.decompile(a.input)), E = i.value(() => {
      const b = f(), I = b[b.length - 1];
      return {
        network: c,
        output: I === u.OP_FALSE ? Q.from([]) : I,
        input: n.compile(b.slice(0, -1)),
        witness: a.witness || []
      };
    });
    if (i.prop(w, "address", () => {
      if (!w.hash) return;
      const b = Q.allocUnsafe(21);
      return b.writeUInt8(w.network.scriptHash, 0), w.hash.copy(b, 1), s.encode(b);
    }), i.prop(w, "hash", () => {
      if (a.output) return a.output.slice(2, 22);
      if (a.address) return y().hash;
      if (w.redeem && w.redeem.output) return e.hash160(w.redeem.output);
    }), i.prop(w, "output", () => {
      if (w.hash)
        return n.compile([u.OP_HASH160, w.hash, u.OP_EQUAL]);
    }), i.prop(w, "redeem", () => {
      if (a.input)
        return E();
    }), i.prop(w, "input", () => {
      if (!(!a.redeem || !a.redeem.input || !a.redeem.output))
        return n.compile(
          [].concat(n.decompile(a.redeem.input), a.redeem.output)
        );
    }), i.prop(w, "witness", () => {
      if (w.redeem && w.redeem.witness) return w.redeem.witness;
      if (w.input) return [];
    }), i.prop(w, "name", () => {
      const b = ["p2sh"];
      return w.redeem !== void 0 && w.redeem.name !== void 0 && b.push(w.redeem.name), b.join("-");
    }), d.validate) {
      let b = Q.from([]);
      if (a.address) {
        if (y().version !== c.scriptHash)
          throw new TypeError("Invalid version or Network mismatch");
        if (y().hash.length !== 20) throw new TypeError("Invalid address");
        b = y().hash;
      }
      if (a.hash) {
        if (b.length > 0 && !b.equals(a.hash))
          throw new TypeError("Hash mismatch");
        b = a.hash;
      }
      if (a.output) {
        if (a.output.length !== 23 || a.output[0] !== u.OP_HASH160 || a.output[1] !== 20 || a.output[22] !== u.OP_EQUAL)
          throw new TypeError("Output is invalid");
        const x = a.output.slice(2, 22);
        if (b.length > 0 && !b.equals(x))
          throw new TypeError("Hash mismatch");
        b = x;
      }
      const I = (x) => {
        if (x.output) {
          const m = n.decompile(x.output);
          if (!m || m.length < 1)
            throw new TypeError("Redeem.output too short");
          if (x.output.byteLength > 520)
            throw new TypeError(
              "Redeem.output unspendable if larger than 520 bytes"
            );
          if (n.countNonPushOnlyOPs(m) > 201)
            throw new TypeError(
              "Redeem.output unspendable with more than 201 non-push ops"
            );
          const T = e.hash160(x.output);
          if (b.length > 0 && !b.equals(T))
            throw new TypeError("Hash mismatch");
          b = T;
        }
        if (x.input) {
          const m = x.input.length > 0, T = x.witness && x.witness.length > 0;
          if (!m && !T) throw new TypeError("Empty input");
          if (m && T)
            throw new TypeError("Input and witness provided");
          if (m) {
            const C = n.decompile(x.input);
            if (!n.isPushOnly(C))
              throw new TypeError("Non push-only scriptSig");
          }
        }
      };
      if (a.input) {
        const x = f();
        if (!x || x.length < 1) throw new TypeError("Input too short");
        if (!Q.isBuffer(E().output))
          throw new TypeError("Input is invalid");
        I(E());
      }
      if (a.redeem) {
        if (a.redeem.network && a.redeem.network !== c)
          throw new TypeError("Network mismatch");
        if (a.input) {
          const x = E();
          if (a.redeem.output && !a.redeem.output.equals(x.output))
            throw new TypeError("Redeem.output mismatch");
          if (a.redeem.input && !a.redeem.input.equals(x.input))
            throw new TypeError("Redeem.input mismatch");
        }
        I(a.redeem);
      }
      if (a.witness && a.redeem && a.redeem.witness && !(0, r.stacksEqual)(a.redeem.witness, a.witness))
        throw new TypeError("Witness and redeem.witness mismatch");
    }
    return Object.assign(w, a);
  }
  return xn.p2sh = o, xn;
}
var _n = {}, Hr = {}, Cu;
function $i() {
  if (Cu) return Hr;
  Cu = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.bech32m = Hr.bech32 = void 0;
  const e = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", t = {};
  for (let d = 0; d < e.length; d++) {
    const c = e.charAt(d);
    t[c] = d;
  }
  function n(d) {
    const c = d >> 25;
    return (d & 33554431) << 5 ^ -(c >> 0 & 1) & 996825010 ^ -(c >> 1 & 1) & 642813549 ^ -(c >> 2 & 1) & 513874426 ^ -(c >> 3 & 1) & 1027748829 ^ -(c >> 4 & 1) & 705979059;
  }
  function r(d) {
    let c = 1;
    for (let w = 0; w < d.length; ++w) {
      const y = d.charCodeAt(w);
      if (y < 33 || y > 126)
        return "Invalid prefix (" + d + ")";
      c = n(c) ^ y >> 5;
    }
    c = n(c);
    for (let w = 0; w < d.length; ++w) {
      const y = d.charCodeAt(w);
      c = n(c) ^ y & 31;
    }
    return c;
  }
  function i(d, c, w, y) {
    let f = 0, E = 0;
    const b = (1 << w) - 1, I = [];
    for (let x = 0; x < d.length; ++x)
      for (f = f << c | d[x], E += c; E >= w; )
        E -= w, I.push(f >> E & b);
    if (y)
      E > 0 && I.push(f << w - E & b);
    else {
      if (E >= c)
        return "Excess padding";
      if (f << w - E & b)
        return "Non-zero padding";
    }
    return I;
  }
  function s(d) {
    return i(d, 8, 5, !0);
  }
  function u(d) {
    const c = i(d, 5, 8, !1);
    if (Array.isArray(c))
      return c;
  }
  function o(d) {
    const c = i(d, 5, 8, !1);
    if (Array.isArray(c))
      return c;
    throw new Error(c);
  }
  function a(d) {
    let c;
    d === "bech32" ? c = 1 : c = 734539939;
    function w(b, I, x) {
      if (x = x || 90, b.length + 7 + I.length > x)
        throw new TypeError("Exceeds length limit");
      b = b.toLowerCase();
      let m = r(b);
      if (typeof m == "string")
        throw new Error(m);
      let T = b + "1";
      for (let C = 0; C < I.length; ++C) {
        const j = I[C];
        if (j >> 5)
          throw new Error("Non 5-bit word");
        m = n(m) ^ j, T += e.charAt(j);
      }
      for (let C = 0; C < 6; ++C)
        m = n(m);
      m ^= c;
      for (let C = 0; C < 6; ++C) {
        const j = m >> (5 - C) * 5 & 31;
        T += e.charAt(j);
      }
      return T;
    }
    function y(b, I) {
      if (I = I || 90, b.length < 8)
        return b + " too short";
      if (b.length > I)
        return "Exceeds length limit";
      const x = b.toLowerCase(), m = b.toUpperCase();
      if (b !== x && b !== m)
        return "Mixed-case string " + b;
      b = x;
      const T = b.lastIndexOf("1");
      if (T === -1)
        return "No separator character for " + b;
      if (T === 0)
        return "Missing prefix for " + b;
      const C = b.slice(0, T), j = b.slice(T + 1);
      if (j.length < 6)
        return "Data too short";
      let U = r(C);
      if (typeof U == "string")
        return U;
      const K = [];
      for (let S = 0; S < j.length; ++S) {
        const A = j.charAt(S), _ = t[A];
        if (_ === void 0)
          return "Unknown character " + A;
        U = n(U) ^ _, !(S + 6 >= j.length) && K.push(_);
      }
      return U !== c ? "Invalid checksum for " + b : { prefix: C, words: K };
    }
    function f(b, I) {
      const x = y(b, I);
      if (typeof x == "object")
        return x;
    }
    function E(b, I) {
      const x = y(b, I);
      if (typeof x == "object")
        return x;
      throw new Error(x);
    }
    return {
      decodeUnsafe: f,
      decode: E,
      encode: w,
      toWords: s,
      fromWordsUnsafe: u,
      fromWords: o
    };
  }
  return Hr.bech32 = a("bech32"), Hr.bech32m = a("bech32m"), Hr;
}
var ku;
function jp() {
  if (ku) return _n;
  ku = 1, Object.defineProperty(_n, "__esModule", { value: !0 }), _n.p2wpkh = void 0;
  const e = ar(), t = Ht(), n = yt(), r = pt(), i = _r(), s = $i(), u = n.OPS, o = Q.alloc(0);
  function a(d, c) {
    if (!d.address && !d.hash && !d.output && !d.pubkey && !d.witness)
      throw new TypeError("Not enough data");
    c = Object.assign({ validate: !0 }, c || {}), (0, r.typeforce)(
      {
        address: r.typeforce.maybe(r.typeforce.String),
        hash: r.typeforce.maybe(r.typeforce.BufferN(20)),
        input: r.typeforce.maybe(r.typeforce.BufferN(0)),
        network: r.typeforce.maybe(r.typeforce.Object),
        output: r.typeforce.maybe(r.typeforce.BufferN(22)),
        pubkey: r.typeforce.maybe(r.isPoint),
        signature: r.typeforce.maybe(n.isCanonicalScriptSignature),
        witness: r.typeforce.maybe(
          r.typeforce.arrayOf(r.typeforce.Buffer)
        )
      },
      d
    );
    const w = i.value(() => {
      const E = s.bech32.decode(d.address), b = E.words.shift(), I = s.bech32.fromWords(E.words);
      return {
        version: b,
        prefix: E.prefix,
        data: Q.from(I)
      };
    }), y = d.network || t.bitcoin, f = { name: "p2wpkh", network: y };
    if (i.prop(f, "address", () => {
      if (!f.hash) return;
      const E = s.bech32.toWords(f.hash);
      return E.unshift(0), s.bech32.encode(y.bech32, E);
    }), i.prop(f, "hash", () => {
      if (d.output) return d.output.slice(2, 22);
      if (d.address) return w().data;
      if (d.pubkey || f.pubkey) return e.hash160(d.pubkey || f.pubkey);
    }), i.prop(f, "output", () => {
      if (f.hash)
        return n.compile([u.OP_0, f.hash]);
    }), i.prop(f, "pubkey", () => {
      if (d.pubkey) return d.pubkey;
      if (d.witness)
        return d.witness[1];
    }), i.prop(f, "signature", () => {
      if (d.witness)
        return d.witness[0];
    }), i.prop(f, "input", () => {
      if (f.witness)
        return o;
    }), i.prop(f, "witness", () => {
      if (d.pubkey && d.signature)
        return [d.signature, d.pubkey];
    }), c.validate) {
      let E = Q.from([]);
      if (d.address) {
        if (y && y.bech32 !== w().prefix)
          throw new TypeError("Invalid prefix or Network mismatch");
        if (w().version !== 0)
          throw new TypeError("Invalid address version");
        if (w().data.length !== 20)
          throw new TypeError("Invalid address data");
        E = w().data;
      }
      if (d.hash) {
        if (E.length > 0 && !E.equals(d.hash))
          throw new TypeError("Hash mismatch");
        E = d.hash;
      }
      if (d.output) {
        if (d.output.length !== 22 || d.output[0] !== u.OP_0 || d.output[1] !== 20)
          throw new TypeError("Output is invalid");
        if (E.length > 0 && !E.equals(d.output.slice(2)))
          throw new TypeError("Hash mismatch");
        E = d.output.slice(2);
      }
      if (d.pubkey) {
        const b = e.hash160(d.pubkey);
        if (E.length > 0 && !E.equals(b))
          throw new TypeError("Hash mismatch");
        if (E = b, !(0, r.isPoint)(d.pubkey) || d.pubkey.length !== 33)
          throw new TypeError("Invalid pubkey for p2wpkh");
      }
      if (d.witness) {
        if (d.witness.length !== 2) throw new TypeError("Witness is invalid");
        if (!n.isCanonicalScriptSignature(d.witness[0]))
          throw new TypeError("Witness has invalid signature");
        if (!(0, r.isPoint)(d.witness[1]) || d.witness[1].length !== 33)
          throw new TypeError("Witness has invalid pubkey");
        if (d.signature && !d.signature.equals(d.witness[0]))
          throw new TypeError("Signature mismatch");
        if (d.pubkey && !d.pubkey.equals(d.witness[1]))
          throw new TypeError("Pubkey mismatch");
        const b = e.hash160(d.witness[1]);
        if (E.length > 0 && !E.equals(b))
          throw new TypeError("Hash mismatch");
      }
    }
    return Object.assign(f, d);
  }
  return _n.p2wpkh = a, _n;
}
var On = {}, Bu;
function Wp() {
  if (Bu) return On;
  Bu = 1, Object.defineProperty(On, "__esModule", { value: !0 }), On.p2wsh = void 0;
  const e = ar(), t = Ht(), n = yt(), r = pt(), i = _r(), s = $i(), u = n.OPS, o = Q.alloc(0);
  function a(c) {
    return !!(Q.isBuffer(c) && c.length === 65 && c[0] === 4 && (0, r.isPoint)(c));
  }
  function d(c, w) {
    if (!c.address && !c.hash && !c.output && !c.redeem && !c.witness)
      throw new TypeError("Not enough data");
    w = Object.assign({ validate: !0 }, w || {}), (0, r.typeforce)(
      {
        network: r.typeforce.maybe(r.typeforce.Object),
        address: r.typeforce.maybe(r.typeforce.String),
        hash: r.typeforce.maybe(r.typeforce.BufferN(32)),
        output: r.typeforce.maybe(r.typeforce.BufferN(34)),
        redeem: r.typeforce.maybe({
          input: r.typeforce.maybe(r.typeforce.Buffer),
          network: r.typeforce.maybe(r.typeforce.Object),
          output: r.typeforce.maybe(r.typeforce.Buffer),
          witness: r.typeforce.maybe(
            r.typeforce.arrayOf(r.typeforce.Buffer)
          )
        }),
        input: r.typeforce.maybe(r.typeforce.BufferN(0)),
        witness: r.typeforce.maybe(
          r.typeforce.arrayOf(r.typeforce.Buffer)
        )
      },
      c
    );
    const y = i.value(() => {
      const I = s.bech32.decode(c.address), x = I.words.shift(), m = s.bech32.fromWords(I.words);
      return {
        version: x,
        prefix: I.prefix,
        data: Q.from(m)
      };
    }), f = i.value(() => n.decompile(c.redeem.input));
    let E = c.network;
    E || (E = c.redeem && c.redeem.network || t.bitcoin);
    const b = { network: E };
    if (i.prop(b, "address", () => {
      if (!b.hash) return;
      const I = s.bech32.toWords(b.hash);
      return I.unshift(0), s.bech32.encode(E.bech32, I);
    }), i.prop(b, "hash", () => {
      if (c.output) return c.output.slice(2);
      if (c.address) return y().data;
      if (b.redeem && b.redeem.output) return e.sha256(b.redeem.output);
    }), i.prop(b, "output", () => {
      if (b.hash)
        return n.compile([u.OP_0, b.hash]);
    }), i.prop(b, "redeem", () => {
      if (c.witness)
        return {
          output: c.witness[c.witness.length - 1],
          input: o,
          witness: c.witness.slice(0, -1)
        };
    }), i.prop(b, "input", () => {
      if (b.witness)
        return o;
    }), i.prop(b, "witness", () => {
      if (c.redeem && c.redeem.input && c.redeem.input.length > 0 && c.redeem.output && c.redeem.output.length > 0) {
        const I = n.toStack(f());
        return b.redeem = Object.assign({ witness: I }, c.redeem), b.redeem.input = o, [].concat(I, c.redeem.output);
      }
      if (c.redeem && c.redeem.output && c.redeem.witness)
        return [].concat(c.redeem.witness, c.redeem.output);
    }), i.prop(b, "name", () => {
      const I = ["p2wsh"];
      return b.redeem !== void 0 && b.redeem.name !== void 0 && I.push(b.redeem.name), I.join("-");
    }), w.validate) {
      let I = Q.from([]);
      if (c.address) {
        if (y().prefix !== E.bech32)
          throw new TypeError("Invalid prefix or Network mismatch");
        if (y().version !== 0)
          throw new TypeError("Invalid address version");
        if (y().data.length !== 32)
          throw new TypeError("Invalid address data");
        I = y().data;
      }
      if (c.hash) {
        if (I.length > 0 && !I.equals(c.hash))
          throw new TypeError("Hash mismatch");
        I = c.hash;
      }
      if (c.output) {
        if (c.output.length !== 34 || c.output[0] !== u.OP_0 || c.output[1] !== 32)
          throw new TypeError("Output is invalid");
        const x = c.output.slice(2);
        if (I.length > 0 && !I.equals(x))
          throw new TypeError("Hash mismatch");
        I = x;
      }
      if (c.redeem) {
        if (c.redeem.network && c.redeem.network !== E)
          throw new TypeError("Network mismatch");
        if (c.redeem.input && c.redeem.input.length > 0 && c.redeem.witness && c.redeem.witness.length > 0)
          throw new TypeError("Ambiguous witness source");
        if (c.redeem.output) {
          const x = n.decompile(c.redeem.output);
          if (!x || x.length < 1)
            throw new TypeError("Redeem.output is invalid");
          if (c.redeem.output.byteLength > 3600)
            throw new TypeError(
              "Redeem.output unspendable if larger than 3600 bytes"
            );
          if (n.countNonPushOnlyOPs(x) > 201)
            throw new TypeError(
              "Redeem.output unspendable with more than 201 non-push ops"
            );
          const m = e.sha256(c.redeem.output);
          if (I.length > 0 && !I.equals(m))
            throw new TypeError("Hash mismatch");
          I = m;
        }
        if (c.redeem.input && !n.isPushOnly(f()))
          throw new TypeError("Non push-only scriptSig");
        if (c.witness && c.redeem.witness && !(0, r.stacksEqual)(c.witness, c.redeem.witness))
          throw new TypeError("Witness and redeem.witness mismatch");
        if (c.redeem.input && f().some(a) || c.redeem.output && (n.decompile(c.redeem.output) || []).some(
          a
        ))
          throw new TypeError(
            "redeem.input or redeem.output contains uncompressed pubkey"
          );
      }
      if (c.witness && c.witness.length > 0) {
        const x = c.witness[c.witness.length - 1];
        if (c.redeem && c.redeem.output && !c.redeem.output.equals(x))
          throw new TypeError("Witness and redeem.output mismatch");
        if (c.witness.some(a) || (n.decompile(x) || []).some(a))
          throw new TypeError("Witness contains uncompressed pubkey");
      }
    }
    return Object.assign(b, c);
  }
  return On.p2wsh = d, On;
}
var Cn = {}, Mr = {}, Ru;
function gs() {
  if (Ru) return Mr;
  Ru = 1, Object.defineProperty(Mr, "__esModule", { value: !0 }), Mr.getEccLib = Mr.initEccLib = void 0;
  const e = {};
  function t(o) {
    o ? o !== e.eccLib && (i(o), e.eccLib = o) : e.eccLib = o;
  }
  Mr.initEccLib = t;
  function n() {
    if (!e.eccLib)
      throw new Error(
        "No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance"
      );
    return e.eccLib;
  }
  Mr.getEccLib = n;
  const r = (o) => Q.from(o, "hex");
  function i(o) {
    s(typeof o.isXOnlyPoint == "function"), s(
      o.isXOnlyPoint(
        r("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")
      )
    ), s(
      o.isXOnlyPoint(
        r("fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e")
      )
    ), s(
      o.isXOnlyPoint(
        r("f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9")
      )
    ), s(
      o.isXOnlyPoint(
        r("0000000000000000000000000000000000000000000000000000000000000001")
      )
    ), s(
      !o.isXOnlyPoint(
        r("0000000000000000000000000000000000000000000000000000000000000000")
      )
    ), s(
      !o.isXOnlyPoint(
        r("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")
      )
    ), s(typeof o.xOnlyPointAddTweak == "function"), u.forEach((a) => {
      const d = o.xOnlyPointAddTweak(r(a.pubkey), r(a.tweak));
      a.result === null ? s(d === null) : (s(d !== null), s(d.parity === a.parity), s(Q.from(d.xOnlyPubkey).equals(r(a.result))));
    });
  }
  function s(o) {
    if (!o) throw new Error("ecc library invalid");
  }
  const u = [
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
  return Mr;
}
var Po = {}, st = {}, oi = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Fu;
function Kp() {
  return Fu || (Fu = 1, function(e, t) {
    var n = Mi(), r = n.Buffer;
    function i(u, o) {
      for (var a in u)
        o[a] = u[a];
    }
    r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? e.exports = n : (i(n, t), t.Buffer = s);
    function s(u, o, a) {
      return r(u, o, a);
    }
    s.prototype = Object.create(r.prototype), i(r, s), s.from = function(u, o, a) {
      if (typeof u == "number")
        throw new TypeError("Argument must not be a number");
      return r(u, o, a);
    }, s.alloc = function(u, o, a) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      var d = r(u);
      return o !== void 0 ? typeof a == "string" ? d.fill(o, a) : d.fill(o) : d.fill(0), d;
    }, s.allocUnsafe = function(u) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      return r(u);
    }, s.allocUnsafeSlow = function(u) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      return n.SlowBuffer(u);
    };
  }(oi, oi.exports)), oi.exports;
}
var So, Nu;
function qp() {
  if (Nu) return So;
  Nu = 1;
  var e = Kp().Buffer, t = 9007199254740991;
  function n(u) {
    if (u < 0 || u > t || u % 1 !== 0) throw new RangeError("value out of range");
  }
  function r(u, o, a) {
    if (n(u), o || (o = e.allocUnsafe(s(u))), !e.isBuffer(o)) throw new TypeError("buffer must be a Buffer instance");
    return a || (a = 0), u < 253 ? (o.writeUInt8(u, a), r.bytes = 1) : u <= 65535 ? (o.writeUInt8(253, a), o.writeUInt16LE(u, a + 1), r.bytes = 3) : u <= 4294967295 ? (o.writeUInt8(254, a), o.writeUInt32LE(u, a + 1), r.bytes = 5) : (o.writeUInt8(255, a), o.writeUInt32LE(u >>> 0, a + 1), o.writeUInt32LE(u / 4294967296 | 0, a + 5), r.bytes = 9), o;
  }
  function i(u, o) {
    if (!e.isBuffer(u)) throw new TypeError("buffer must be a Buffer instance");
    o || (o = 0);
    var a = u.readUInt8(o);
    if (a < 253)
      return i.bytes = 1, a;
    if (a === 253)
      return i.bytes = 3, u.readUInt16LE(o + 1);
    if (a === 254)
      return i.bytes = 5, u.readUInt32LE(o + 1);
    i.bytes = 9;
    var d = u.readUInt32LE(o + 1), c = u.readUInt32LE(o + 5), w = c * 4294967296 + d;
    return n(w), w;
  }
  function s(u) {
    return n(u), u < 253 ? 1 : u <= 65535 ? 3 : u <= 4294967295 ? 5 : 9;
  }
  return So = { encode: r, decode: i, encodingLength: s }, So;
}
var Uu;
function ji() {
  if (Uu) return st;
  Uu = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.BufferReader = st.BufferWriter = st.cloneBuffer = st.reverseBuffer = st.writeUInt64LE = st.readUInt64LE = st.varuint = void 0;
  const e = pt(), { typeforce: t } = e, n = qp();
  st.varuint = n;
  function r(c, w) {
    if (typeof c != "number")
      throw new Error("cannot write a non-number as a number");
    if (c < 0)
      throw new Error("specified a negative value for writing an unsigned value");
    if (c > w) throw new Error("RangeError: value out of range");
    if (Math.floor(c) !== c)
      throw new Error("value has a fractional component");
  }
  function i(c, w) {
    const y = c.readUInt32LE(w);
    let f = c.readUInt32LE(w + 4);
    return f *= 4294967296, r(f + y, 9007199254740991), f + y;
  }
  st.readUInt64LE = i;
  function s(c, w, y) {
    return r(w, 9007199254740991), c.writeInt32LE(w & -1, y), c.writeUInt32LE(Math.floor(w / 4294967296), y + 4), y + 8;
  }
  st.writeUInt64LE = s;
  function u(c) {
    if (c.length < 1) return c;
    let w = c.length - 1, y = 0;
    for (let f = 0; f < c.length / 2; f++)
      y = c[f], c[f] = c[w], c[w] = y, w--;
    return c;
  }
  st.reverseBuffer = u;
  function o(c) {
    const w = Q.allocUnsafe(c.length);
    return c.copy(w), w;
  }
  st.cloneBuffer = o;
  class a {
    static withCapacity(w) {
      return new a(Q.alloc(w));
    }
    constructor(w, y = 0) {
      this.buffer = w, this.offset = y, t(e.tuple(e.Buffer, e.UInt32), [w, y]);
    }
    writeUInt8(w) {
      this.offset = this.buffer.writeUInt8(w, this.offset);
    }
    writeInt32(w) {
      this.offset = this.buffer.writeInt32LE(w, this.offset);
    }
    writeUInt32(w) {
      this.offset = this.buffer.writeUInt32LE(w, this.offset);
    }
    writeUInt64(w) {
      this.offset = s(this.buffer, w, this.offset);
    }
    writeVarInt(w) {
      n.encode(w, this.buffer, this.offset), this.offset += n.encode.bytes;
    }
    writeSlice(w) {
      if (this.buffer.length < this.offset + w.length)
        throw new Error("Cannot write slice out of bounds");
      this.offset += w.copy(this.buffer, this.offset);
    }
    writeVarSlice(w) {
      this.writeVarInt(w.length), this.writeSlice(w);
    }
    writeVector(w) {
      this.writeVarInt(w.length), w.forEach((y) => this.writeVarSlice(y));
    }
    end() {
      if (this.buffer.length === this.offset)
        return this.buffer;
      throw new Error(`buffer size ${this.buffer.length}, offset ${this.offset}`);
    }
  }
  st.BufferWriter = a;
  class d {
    constructor(w, y = 0) {
      this.buffer = w, this.offset = y, t(e.tuple(e.Buffer, e.UInt32), [w, y]);
    }
    readUInt8() {
      const w = this.buffer.readUInt8(this.offset);
      return this.offset++, w;
    }
    readInt32() {
      const w = this.buffer.readInt32LE(this.offset);
      return this.offset += 4, w;
    }
    readUInt32() {
      const w = this.buffer.readUInt32LE(this.offset);
      return this.offset += 4, w;
    }
    readUInt64() {
      const w = i(this.buffer, this.offset);
      return this.offset += 8, w;
    }
    readVarInt() {
      const w = n.decode(this.buffer, this.offset);
      return this.offset += n.decode.bytes, w;
    }
    readSlice(w) {
      if (this.buffer.length < this.offset + w)
        throw new Error("Cannot read slice out of bounds");
      const y = this.buffer.slice(this.offset, this.offset + w);
      return this.offset += w, y;
    }
    readVarSlice() {
      return this.readSlice(this.readVarInt());
    }
    readVector() {
      const w = this.readVarInt(), y = [];
      for (let f = 0; f < w; f++) y.push(this.readVarSlice());
      return y;
    }
  }
  return st.BufferReader = d, st;
}
var Lu;
function ms() {
  return Lu || (Lu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.tweakKey = e.tapTweakHash = e.tapleafHash = e.findScriptPath = e.toHashTree = e.rootHashFromPath = e.MAX_TAPTREE_DEPTH = e.LEAF_VERSION_TAPSCRIPT = void 0;
    const t = Mi(), n = gs(), r = ar(), i = ji(), s = pt();
    e.LEAF_VERSION_TAPSCRIPT = 192, e.MAX_TAPTREE_DEPTH = 128;
    const u = (b) => "left" in b && "right" in b;
    function o(b, I) {
      if (b.length < 33)
        throw new TypeError(
          `The control-block length is too small. Got ${b.length}, expected min 33.`
        );
      const x = (b.length - 33) / 32;
      let m = I;
      for (let T = 0; T < x; T++) {
        const C = b.slice(33 + 32 * T, 65 + 32 * T);
        m.compare(C) < 0 ? m = f(m, C) : m = f(C, m);
      }
      return m;
    }
    e.rootHashFromPath = o;
    function a(b) {
      if ((0, s.isTapleaf)(b))
        return { hash: c(b) };
      const I = [a(b[0]), a(b[1])];
      I.sort((T, C) => T.hash.compare(C.hash));
      const [x, m] = I;
      return {
        hash: f(x.hash, m.hash),
        left: x,
        right: m
      };
    }
    e.toHashTree = a;
    function d(b, I) {
      if (u(b)) {
        const x = d(b.left, I);
        if (x !== void 0) return [...x, b.right.hash];
        const m = d(b.right, I);
        if (m !== void 0) return [...m, b.left.hash];
      } else if (b.hash.equals(I))
        return [];
    }
    e.findScriptPath = d;
    function c(b) {
      const I = b.version || e.LEAF_VERSION_TAPSCRIPT;
      return r.taggedHash(
        "TapLeaf",
        t.Buffer.concat([
          t.Buffer.from([I]),
          E(b.output)
        ])
      );
    }
    e.tapleafHash = c;
    function w(b, I) {
      return r.taggedHash(
        "TapTweak",
        t.Buffer.concat(I ? [b, I] : [b])
      );
    }
    e.tapTweakHash = w;
    function y(b, I) {
      if (!t.Buffer.isBuffer(b) || b.length !== 32 || I && I.length !== 32) return null;
      const x = w(b, I), m = (0, n.getEccLib)().xOnlyPointAddTweak(b, x);
      return !m || m.xOnlyPubkey === null ? null : {
        parity: m.parity,
        x: t.Buffer.from(m.xOnlyPubkey)
      };
    }
    e.tweakKey = y;
    function f(b, I) {
      return r.taggedHash("TapBranch", t.Buffer.concat([b, I]));
    }
    function E(b) {
      const I = i.varuint.encodingLength(b.length), x = t.Buffer.allocUnsafe(I);
      return i.varuint.encode(b.length, x), t.Buffer.concat([x, b]);
    }
  }(Po)), Po;
}
var Hu;
function Vp() {
  if (Hu) return Cn;
  Hu = 1, Object.defineProperty(Cn, "__esModule", { value: !0 }), Cn.p2tr = void 0;
  const e = Mi(), t = Ht(), n = yt(), r = pt(), i = gs(), s = ms(), u = _r(), o = $i(), a = ws(), d = n.OPS, c = 1, w = 80;
  function y(f, E) {
    if (!f.address && !f.output && !f.pubkey && !f.internalPubkey && !(f.witness && f.witness.length > 1))
      throw new TypeError("Not enough data");
    E = Object.assign({ validate: !0 }, E || {}), (0, r.typeforce)(
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
      f
    );
    const b = u.value(() => (0, a.fromBech32)(f.address)), I = u.value(() => {
      if (!(!f.witness || !f.witness.length))
        return f.witness.length >= 2 && f.witness[f.witness.length - 1][0] === w ? f.witness.slice(0, -1) : f.witness.slice();
    }), x = u.value(() => {
      if (f.scriptTree) return (0, s.toHashTree)(f.scriptTree);
      if (f.hash) return { hash: f.hash };
    }), m = f.network || t.bitcoin, T = { name: "p2tr", network: m };
    if (u.prop(T, "address", () => {
      if (!T.pubkey) return;
      const C = o.bech32m.toWords(T.pubkey);
      return C.unshift(c), o.bech32m.encode(m.bech32, C);
    }), u.prop(T, "hash", () => {
      const C = x();
      if (C) return C.hash;
      const j = I();
      if (j && j.length > 1) {
        const U = j[j.length - 1], K = U[0] & r.TAPLEAF_VERSION_MASK, S = j[j.length - 2], A = (0, s.tapleafHash)({
          output: S,
          version: K
        });
        return (0, s.rootHashFromPath)(U, A);
      }
      return null;
    }), u.prop(T, "output", () => {
      if (T.pubkey)
        return n.compile([d.OP_1, T.pubkey]);
    }), u.prop(T, "redeemVersion", () => f.redeemVersion ? f.redeemVersion : f.redeem && f.redeem.redeemVersion !== void 0 && f.redeem.redeemVersion !== null ? f.redeem.redeemVersion : s.LEAF_VERSION_TAPSCRIPT), u.prop(T, "redeem", () => {
      const C = I();
      if (!(!C || C.length < 2))
        return {
          output: C[C.length - 2],
          witness: C.slice(0, -2),
          redeemVersion: C[C.length - 1][0] & r.TAPLEAF_VERSION_MASK
        };
    }), u.prop(T, "pubkey", () => {
      if (f.pubkey) return f.pubkey;
      if (f.output) return f.output.slice(2);
      if (f.address) return b().data;
      if (T.internalPubkey) {
        const C = (0, s.tweakKey)(T.internalPubkey, T.hash);
        if (C) return C.x;
      }
    }), u.prop(T, "internalPubkey", () => {
      if (f.internalPubkey) return f.internalPubkey;
      const C = I();
      if (C && C.length > 1)
        return C[C.length - 1].slice(1, 33);
    }), u.prop(T, "signature", () => {
      if (f.signature) return f.signature;
      const C = I();
      if (!(!C || C.length !== 1))
        return C[0];
    }), u.prop(T, "witness", () => {
      if (f.witness) return f.witness;
      const C = x();
      if (C && f.redeem && f.redeem.output && f.internalPubkey) {
        const j = (0, s.tapleafHash)({
          output: f.redeem.output,
          version: T.redeemVersion
        }), U = (0, s.findScriptPath)(C, j);
        if (!U) return;
        const K = (0, s.tweakKey)(f.internalPubkey, C.hash);
        if (!K) return;
        const S = e.Buffer.concat(
          [
            e.Buffer.from([T.redeemVersion | K.parity]),
            f.internalPubkey
          ].concat(U)
        );
        return [f.redeem.output, S];
      }
      if (f.signature) return [f.signature];
    }), E.validate) {
      let C = e.Buffer.from([]);
      if (f.address) {
        if (m && m.bech32 !== b().prefix)
          throw new TypeError("Invalid prefix or Network mismatch");
        if (b().version !== c)
          throw new TypeError("Invalid address version");
        if (b().data.length !== 32)
          throw new TypeError("Invalid address data");
        C = b().data;
      }
      if (f.pubkey) {
        if (C.length > 0 && !C.equals(f.pubkey))
          throw new TypeError("Pubkey mismatch");
        C = f.pubkey;
      }
      if (f.output) {
        if (f.output.length !== 34 || f.output[0] !== d.OP_1 || f.output[1] !== 32)
          throw new TypeError("Output is invalid");
        if (C.length > 0 && !C.equals(f.output.slice(2)))
          throw new TypeError("Pubkey mismatch");
        C = f.output.slice(2);
      }
      if (f.internalPubkey) {
        const K = (0, s.tweakKey)(f.internalPubkey, T.hash);
        if (C.length > 0 && !C.equals(K.x))
          throw new TypeError("Pubkey mismatch");
        C = K.x;
      }
      if (C && C.length && !(0, i.getEccLib)().isXOnlyPoint(C))
        throw new TypeError("Invalid pubkey for p2tr");
      const j = x();
      if (f.hash && j && !f.hash.equals(j.hash))
        throw new TypeError("Hash mismatch");
      if (f.redeem && f.redeem.output && j) {
        const K = (0, s.tapleafHash)({
          output: f.redeem.output,
          version: T.redeemVersion
        });
        if (!(0, s.findScriptPath)(j, K))
          throw new TypeError("Redeem script not in tree");
      }
      const U = I();
      if (f.redeem && T.redeem) {
        if (f.redeem.redeemVersion && f.redeem.redeemVersion !== T.redeem.redeemVersion)
          throw new TypeError("Redeem.redeemVersion and witness mismatch");
        if (f.redeem.output) {
          if (n.decompile(f.redeem.output).length === 0)
            throw new TypeError("Redeem.output is invalid");
          if (T.redeem.output && !f.redeem.output.equals(T.redeem.output))
            throw new TypeError("Redeem.output and witness mismatch");
        }
        if (f.redeem.witness && T.redeem.witness && !(0, r.stacksEqual)(f.redeem.witness, T.redeem.witness))
          throw new TypeError("Redeem.witness and witness mismatch");
      }
      if (U && U.length)
        if (U.length === 1) {
          if (f.signature && !f.signature.equals(U[0]))
            throw new TypeError("Signature mismatch");
        } else {
          const K = U[U.length - 1];
          if (K.length < 33)
            throw new TypeError(
              `The control-block length is too small. Got ${K.length}, expected min 33.`
            );
          if ((K.length - 33) % 32 !== 0)
            throw new TypeError(
              `The control-block length of ${K.length} is incorrect!`
            );
          const S = (K.length - 33) / 32;
          if (S > 128)
            throw new TypeError(
              `The script path is too long. Got ${S}, expected max 128.`
            );
          const A = K.slice(1, 33);
          if (f.internalPubkey && !f.internalPubkey.equals(A))
            throw new TypeError("Internal pubkey mismatch");
          if (!(0, i.getEccLib)().isXOnlyPoint(A))
            throw new TypeError("Invalid internalPubkey for p2tr witness");
          const _ = K[0] & r.TAPLEAF_VERSION_MASK, N = U[U.length - 2], P = (0, s.tapleafHash)({
            output: N,
            version: _
          }), F = (0, s.rootHashFromPath)(K, P), W = (0, s.tweakKey)(A, F);
          if (!W)
            throw new TypeError("Invalid outputKey for p2tr witness");
          if (C.length && !C.equals(W.x))
            throw new TypeError("Pubkey mismatch for p2tr witness");
          if (W.parity !== (K[0] & 1))
            throw new Error("Incorrect parity");
        }
    }
    return Object.assign(T, f);
  }
  return Cn.p2tr = y, Cn;
}
var Mu;
function Qn() {
  return Mu || (Mu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.p2tr = e.p2wsh = e.p2wpkh = e.p2sh = e.p2pkh = e.p2pk = e.p2ms = e.embed = void 0;
    const t = kp();
    Object.defineProperty(e, "embed", {
      enumerable: !0,
      get: function() {
        return t.p2data;
      }
    });
    const n = Bp();
    Object.defineProperty(e, "p2ms", {
      enumerable: !0,
      get: function() {
        return n.p2ms;
      }
    });
    const r = Rp();
    Object.defineProperty(e, "p2pk", {
      enumerable: !0,
      get: function() {
        return r.p2pk;
      }
    });
    const i = Dp();
    Object.defineProperty(e, "p2pkh", {
      enumerable: !0,
      get: function() {
        return i.p2pkh;
      }
    });
    const s = $p();
    Object.defineProperty(e, "p2sh", {
      enumerable: !0,
      get: function() {
        return s.p2sh;
      }
    });
    const u = jp();
    Object.defineProperty(e, "p2wpkh", {
      enumerable: !0,
      get: function() {
        return u.p2wpkh;
      }
    });
    const o = Wp();
    Object.defineProperty(e, "p2wsh", {
      enumerable: !0,
      get: function() {
        return o.p2wsh;
      }
    });
    const a = Vp();
    Object.defineProperty(e, "p2tr", {
      enumerable: !0,
      get: function() {
        return a.p2tr;
      }
    });
  }(ao)), ao;
}
var Du;
function ws() {
  if (Du) return mt;
  Du = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.toOutputScript = mt.fromOutputScript = mt.toBech32 = mt.toBase58Check = mt.fromBech32 = mt.fromBase58Check = void 0;
  const e = Ht(), t = Qn(), n = yt(), r = pt(), i = $i(), s = ps(), u = 40, o = 2, a = 16, d = 2, c = 80, w = "WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.";
  function y(T, C) {
    const j = T.slice(2);
    if (j.length < o || j.length > u)
      throw new TypeError("Invalid program length for segwit address");
    const U = T[0] - c;
    if (U < d || U > a)
      throw new TypeError("Invalid version for segwit address");
    if (T[1] !== j.length)
      throw new TypeError("Invalid script for segwit address");
    return console.warn(w), I(j, U, C.bech32);
  }
  function f(T) {
    const C = Q.from(s.decode(T));
    if (C.length < 21) throw new TypeError(T + " is too short");
    if (C.length > 21) throw new TypeError(T + " is too long");
    const j = C.readUInt8(0), U = C.slice(1);
    return { version: j, hash: U };
  }
  mt.fromBase58Check = f;
  function E(T) {
    let C, j;
    try {
      C = i.bech32.decode(T);
    } catch {
    }
    if (C) {
      if (j = C.words[0], j !== 0) throw new TypeError(T + " uses wrong encoding");
    } else if (C = i.bech32m.decode(T), j = C.words[0], j === 0) throw new TypeError(T + " uses wrong encoding");
    const U = i.bech32.fromWords(C.words.slice(1));
    return {
      version: j,
      prefix: C.prefix,
      data: Q.from(U)
    };
  }
  mt.fromBech32 = E;
  function b(T, C) {
    (0, r.typeforce)(
      (0, r.tuple)(r.Hash160bit, r.UInt8),
      arguments
    );
    const j = Q.allocUnsafe(21);
    return j.writeUInt8(C, 0), T.copy(j, 1), s.encode(j);
  }
  mt.toBase58Check = b;
  function I(T, C, j) {
    const U = i.bech32.toWords(T);
    return U.unshift(C), C === 0 ? i.bech32.encode(j, U) : i.bech32m.encode(j, U);
  }
  mt.toBech32 = I;
  function x(T, C) {
    C = C || e.bitcoin;
    try {
      return t.p2pkh({ output: T, network: C }).address;
    } catch {
    }
    try {
      return t.p2sh({ output: T, network: C }).address;
    } catch {
    }
    try {
      return t.p2wpkh({ output: T, network: C }).address;
    } catch {
    }
    try {
      return t.p2wsh({ output: T, network: C }).address;
    } catch {
    }
    try {
      return t.p2tr({ output: T, network: C }).address;
    } catch {
    }
    try {
      return y(T, C);
    } catch {
    }
    throw new Error(n.toASM(T) + " has no matching Address");
  }
  mt.fromOutputScript = x;
  function m(T, C) {
    C = C || e.bitcoin;
    let j, U;
    try {
      j = f(T);
    } catch {
    }
    if (j) {
      if (j.version === C.pubKeyHash)
        return t.p2pkh({ hash: j.hash }).output;
      if (j.version === C.scriptHash)
        return t.p2sh({ hash: j.hash }).output;
    } else {
      try {
        U = E(T);
      } catch {
      }
      if (U) {
        if (U.prefix !== C.bech32)
          throw new Error(T + " has an invalid prefix");
        if (U.version === 0) {
          if (U.data.length === 20)
            return t.p2wpkh({ hash: U.data }).output;
          if (U.data.length === 32)
            return t.p2wsh({ hash: U.data }).output;
        } else if (U.version === 1) {
          if (U.data.length === 32)
            return t.p2tr({ pubkey: U.data }).output;
        } else if (U.version >= d && U.version <= a && U.data.length >= o && U.data.length <= u)
          return console.warn(w), n.compile([
            U.version + c,
            U.data
          ]);
      }
    }
    throw new Error(T + " has no matching Script");
  }
  return mt.toOutputScript = m, mt;
}
var kn = {}, Bn = {}, $u;
function Gp() {
  if ($u) return Bn;
  $u = 1, Object.defineProperty(Bn, "__esModule", { value: !0 }), Bn.fastMerkleRoot = void 0;
  function e(t, n) {
    if (!Array.isArray(t)) throw TypeError("Expected values Array");
    if (typeof n != "function")
      throw TypeError("Expected digest Function");
    let r = t.length;
    const i = t.concat();
    for (; r > 1; ) {
      let s = 0;
      for (let u = 0; u < r; u += 2, ++s) {
        const o = i[u], a = u + 1 === r ? o : i[u + 1], d = Q.concat([o, a]);
        i[s] = n(d);
      }
      r = s;
    }
    return i[0];
  }
  return Bn.fastMerkleRoot = e, Bn;
}
var Rn = {}, ju;
function Jn() {
  if (ju) return Rn;
  ju = 1, Object.defineProperty(Rn, "__esModule", { value: !0 }), Rn.Transaction = void 0;
  const e = ji(), t = ar(), n = yt(), r = yt(), i = pt(), { typeforce: s } = i;
  function u(I) {
    const x = I.length;
    return e.varuint.encodingLength(x) + x;
  }
  function o(I) {
    const x = I.length;
    return e.varuint.encodingLength(x) + I.reduce((m, T) => m + u(T), 0);
  }
  const a = Q.allocUnsafe(0), d = [], c = Q.from(
    "0000000000000000000000000000000000000000000000000000000000000000",
    "hex"
  ), w = Q.from(
    "0000000000000000000000000000000000000000000000000000000000000001",
    "hex"
  ), y = Q.from("ffffffffffffffff", "hex"), f = {
    script: a,
    valueBuffer: y
  };
  function E(I) {
    return I.value !== void 0;
  }
  class b {
    constructor() {
      this.version = 1, this.locktime = 0, this.ins = [], this.outs = [];
    }
    static fromBuffer(x, m) {
      const T = new e.BufferReader(x), C = new b();
      C.version = T.readInt32();
      const j = T.readUInt8(), U = T.readUInt8();
      let K = !1;
      j === b.ADVANCED_TRANSACTION_MARKER && U === b.ADVANCED_TRANSACTION_FLAG ? K = !0 : T.offset -= 2;
      const S = T.readVarInt();
      for (let _ = 0; _ < S; ++_)
        C.ins.push({
          hash: T.readSlice(32),
          index: T.readUInt32(),
          script: T.readVarSlice(),
          sequence: T.readUInt32(),
          witness: d
        });
      const A = T.readVarInt();
      for (let _ = 0; _ < A; ++_)
        C.outs.push({
          value: T.readUInt64(),
          script: T.readVarSlice()
        });
      if (K) {
        for (let _ = 0; _ < S; ++_)
          C.ins[_].witness = T.readVector();
        if (!C.hasWitnesses())
          throw new Error("Transaction has superfluous witness data");
      }
      if (C.locktime = T.readUInt32(), m) return C;
      if (T.offset !== x.length)
        throw new Error("Transaction has unexpected data");
      return C;
    }
    static fromHex(x) {
      return b.fromBuffer(Q.from(x, "hex"), !1);
    }
    static isCoinbaseHash(x) {
      s(i.Hash256bit, x);
      for (let m = 0; m < 32; ++m)
        if (x[m] !== 0) return !1;
      return !0;
    }
    isCoinbase() {
      return this.ins.length === 1 && b.isCoinbaseHash(this.ins[0].hash);
    }
    addInput(x, m, T, C) {
      return s(
        i.tuple(
          i.Hash256bit,
          i.UInt32,
          i.maybe(i.UInt32),
          i.maybe(i.Buffer)
        ),
        arguments
      ), i.Null(T) && (T = b.DEFAULT_SEQUENCE), this.ins.push({
        hash: x,
        index: m,
        script: C || a,
        sequence: T,
        witness: d
      }) - 1;
    }
    addOutput(x, m) {
      return s(i.tuple(i.Buffer, i.Satoshi), arguments), this.outs.push({
        script: x,
        value: m
      }) - 1;
    }
    hasWitnesses() {
      return this.ins.some((x) => x.witness.length !== 0);
    }
    weight() {
      const x = this.byteLength(!1), m = this.byteLength(!0);
      return x * 3 + m;
    }
    virtualSize() {
      return Math.ceil(this.weight() / 4);
    }
    byteLength(x = !0) {
      const m = x && this.hasWitnesses();
      return (m ? 10 : 8) + e.varuint.encodingLength(this.ins.length) + e.varuint.encodingLength(this.outs.length) + this.ins.reduce((T, C) => T + 40 + u(C.script), 0) + this.outs.reduce((T, C) => T + 8 + u(C.script), 0) + (m ? this.ins.reduce((T, C) => T + o(C.witness), 0) : 0);
    }
    clone() {
      const x = new b();
      return x.version = this.version, x.locktime = this.locktime, x.ins = this.ins.map((m) => ({
        hash: m.hash,
        index: m.index,
        script: m.script,
        sequence: m.sequence,
        witness: m.witness
      })), x.outs = this.outs.map((m) => ({
        script: m.script,
        value: m.value
      })), x;
    }
    /**
     * Hash transaction for signing a specific input.
     *
     * Bitcoin uses a different hash for each signed transaction input.
     * This method copies the transaction, makes the necessary changes based on the
     * hashType, and then hashes the result.
     * This hash can then be used to sign the provided transaction input.
     */
    hashForSignature(x, m, T) {
      if (s(
        i.tuple(
          i.UInt32,
          i.Buffer,
          /* types.UInt8 */
          i.Number
        ),
        arguments
      ), x >= this.ins.length) return w;
      const C = n.compile(
        n.decompile(m).filter((K) => K !== r.OPS.OP_CODESEPARATOR)
      ), j = this.clone();
      if ((T & 31) === b.SIGHASH_NONE)
        j.outs = [], j.ins.forEach((K, S) => {
          S !== x && (K.sequence = 0);
        });
      else if ((T & 31) === b.SIGHASH_SINGLE) {
        if (x >= this.outs.length) return w;
        j.outs.length = x + 1;
        for (let K = 0; K < x; K++)
          j.outs[K] = f;
        j.ins.forEach((K, S) => {
          S !== x && (K.sequence = 0);
        });
      }
      T & b.SIGHASH_ANYONECANPAY ? (j.ins = [j.ins[x]], j.ins[0].script = C) : (j.ins.forEach((K) => {
        K.script = a;
      }), j.ins[x].script = C);
      const U = Q.allocUnsafe(j.byteLength(!1) + 4);
      return U.writeInt32LE(T, U.length - 4), j.__toBuffer(U, 0, !1), t.hash256(U);
    }
    hashForWitnessV1(x, m, T, C, j, U) {
      if (s(
        i.tuple(
          i.UInt32,
          s.arrayOf(i.Buffer),
          s.arrayOf(i.Satoshi),
          i.UInt32
        ),
        arguments
      ), T.length !== this.ins.length || m.length !== this.ins.length)
        throw new Error("Must supply prevout script and value for all inputs");
      const K = C === b.SIGHASH_DEFAULT ? b.SIGHASH_ALL : C & b.SIGHASH_OUTPUT_MASK, A = (C & b.SIGHASH_INPUT_MASK) === b.SIGHASH_ANYONECANPAY, _ = K === b.SIGHASH_NONE, N = K === b.SIGHASH_SINGLE;
      let P = a, F = a, W = a, H = a, $ = a;
      if (!A) {
        let Y = e.BufferWriter.withCapacity(
          36 * this.ins.length
        );
        this.ins.forEach((Z) => {
          Y.writeSlice(Z.hash), Y.writeUInt32(Z.index);
        }), P = t.sha256(Y.end()), Y = e.BufferWriter.withCapacity(
          8 * this.ins.length
        ), T.forEach((Z) => Y.writeUInt64(Z)), F = t.sha256(Y.end()), Y = e.BufferWriter.withCapacity(
          m.map(u).reduce((Z, ne) => Z + ne)
        ), m.forEach(
          (Z) => Y.writeVarSlice(Z)
        ), W = t.sha256(Y.end()), Y = e.BufferWriter.withCapacity(
          4 * this.ins.length
        ), this.ins.forEach((Z) => Y.writeUInt32(Z.sequence)), H = t.sha256(Y.end());
      }
      if (_ || N) {
        if (N && x < this.outs.length) {
          const Y = this.outs[x], Z = e.BufferWriter.withCapacity(
            8 + u(Y.script)
          );
          Z.writeUInt64(Y.value), Z.writeVarSlice(Y.script), $ = t.sha256(Z.end());
        }
      } else {
        const Y = this.outs.map((ne) => 8 + u(ne.script)).reduce((ne, se) => ne + se), Z = e.BufferWriter.withCapacity(Y);
        this.outs.forEach((ne) => {
          Z.writeUInt64(ne.value), Z.writeVarSlice(ne.script);
        }), $ = t.sha256(Z.end());
      }
      const G = (j ? 2 : 0) + (U ? 1 : 0), k = 174 - (A ? 49 : 0) - (_ ? 32 : 0) + (U ? 32 : 0) + (j ? 37 : 0), M = e.BufferWriter.withCapacity(k);
      if (M.writeUInt8(C), M.writeInt32(this.version), M.writeUInt32(this.locktime), M.writeSlice(P), M.writeSlice(F), M.writeSlice(W), M.writeSlice(H), _ || N || M.writeSlice($), M.writeUInt8(G), A) {
        const Y = this.ins[x];
        M.writeSlice(Y.hash), M.writeUInt32(Y.index), M.writeUInt64(T[x]), M.writeVarSlice(m[x]), M.writeUInt32(Y.sequence);
      } else
        M.writeUInt32(x);
      if (U) {
        const Y = e.BufferWriter.withCapacity(
          u(U)
        );
        Y.writeVarSlice(U), M.writeSlice(t.sha256(Y.end()));
      }
      return N && M.writeSlice($), j && (M.writeSlice(j), M.writeUInt8(0), M.writeUInt32(4294967295)), t.taggedHash(
        "TapSighash",
        Q.concat([Q.from([0]), M.end()])
      );
    }
    hashForWitnessV0(x, m, T, C) {
      s(
        i.tuple(i.UInt32, i.Buffer, i.Satoshi, i.UInt32),
        arguments
      );
      let j = Q.from([]), U, K = c, S = c, A = c;
      if (C & b.SIGHASH_ANYONECANPAY || (j = Q.allocUnsafe(36 * this.ins.length), U = new e.BufferWriter(j, 0), this.ins.forEach((N) => {
        U.writeSlice(N.hash), U.writeUInt32(N.index);
      }), S = t.hash256(j)), !(C & b.SIGHASH_ANYONECANPAY) && (C & 31) !== b.SIGHASH_SINGLE && (C & 31) !== b.SIGHASH_NONE && (j = Q.allocUnsafe(4 * this.ins.length), U = new e.BufferWriter(j, 0), this.ins.forEach((N) => {
        U.writeUInt32(N.sequence);
      }), A = t.hash256(j)), (C & 31) !== b.SIGHASH_SINGLE && (C & 31) !== b.SIGHASH_NONE) {
        const N = this.outs.reduce((P, F) => P + 8 + u(F.script), 0);
        j = Q.allocUnsafe(N), U = new e.BufferWriter(j, 0), this.outs.forEach((P) => {
          U.writeUInt64(P.value), U.writeVarSlice(P.script);
        }), K = t.hash256(j);
      } else if ((C & 31) === b.SIGHASH_SINGLE && x < this.outs.length) {
        const N = this.outs[x];
        j = Q.allocUnsafe(8 + u(N.script)), U = new e.BufferWriter(j, 0), U.writeUInt64(N.value), U.writeVarSlice(N.script), K = t.hash256(j);
      }
      j = Q.allocUnsafe(156 + u(m)), U = new e.BufferWriter(j, 0);
      const _ = this.ins[x];
      return U.writeInt32(this.version), U.writeSlice(S), U.writeSlice(A), U.writeSlice(_.hash), U.writeUInt32(_.index), U.writeVarSlice(m), U.writeUInt64(T), U.writeUInt32(_.sequence), U.writeSlice(K), U.writeUInt32(this.locktime), U.writeUInt32(C), t.hash256(j);
    }
    getHash(x) {
      return x && this.isCoinbase() ? Q.alloc(32, 0) : t.hash256(this.__toBuffer(void 0, void 0, x));
    }
    getId() {
      return (0, e.reverseBuffer)(this.getHash(!1)).toString(
        "hex"
      );
    }
    toBuffer(x, m) {
      return this.__toBuffer(x, m, !0);
    }
    toHex() {
      return this.toBuffer(void 0, void 0).toString("hex");
    }
    setInputScript(x, m) {
      s(i.tuple(i.Number, i.Buffer), arguments), this.ins[x].script = m;
    }
    setWitness(x, m) {
      s(i.tuple(i.Number, [i.Buffer]), arguments), this.ins[x].witness = m;
    }
    __toBuffer(x, m, T = !1) {
      x || (x = Q.allocUnsafe(this.byteLength(T)));
      const C = new e.BufferWriter(
        x,
        m || 0
      );
      C.writeInt32(this.version);
      const j = T && this.hasWitnesses();
      return j && (C.writeUInt8(b.ADVANCED_TRANSACTION_MARKER), C.writeUInt8(b.ADVANCED_TRANSACTION_FLAG)), C.writeVarInt(this.ins.length), this.ins.forEach((U) => {
        C.writeSlice(U.hash), C.writeUInt32(U.index), C.writeVarSlice(U.script), C.writeUInt32(U.sequence);
      }), C.writeVarInt(this.outs.length), this.outs.forEach((U) => {
        E(U) ? C.writeUInt64(U.value) : C.writeSlice(U.valueBuffer), C.writeVarSlice(U.script);
      }), j && this.ins.forEach((U) => {
        C.writeVector(U.witness);
      }), C.writeUInt32(this.locktime), m !== void 0 ? x.slice(m, C.offset) : x;
    }
  }
  return Rn.Transaction = b, b.DEFAULT_SEQUENCE = 4294967295, b.SIGHASH_DEFAULT = 0, b.SIGHASH_ALL = 1, b.SIGHASH_NONE = 2, b.SIGHASH_SINGLE = 3, b.SIGHASH_ANYONECANPAY = 128, b.SIGHASH_OUTPUT_MASK = 3, b.SIGHASH_INPUT_MASK = 128, b.ADVANCED_TRANSACTION_MARKER = 0, b.ADVANCED_TRANSACTION_FLAG = 1, Rn;
}
var Wu;
function Xp() {
  if (Wu) return kn;
  Wu = 1, Object.defineProperty(kn, "__esModule", { value: !0 }), kn.Block = void 0;
  const e = ji(), t = ar(), n = Gp(), r = Jn(), i = pt(), { typeforce: s } = i, u = new TypeError(
    "Cannot compute merkle root for zero transactions"
  ), o = new TypeError(
    "Cannot compute witness commit for non-segwit block"
  );
  class a {
    constructor() {
      this.version = 1, this.prevHash = void 0, this.merkleRoot = void 0, this.timestamp = 0, this.witnessCommit = void 0, this.bits = 0, this.nonce = 0, this.transactions = void 0;
    }
    static fromBuffer(y) {
      if (y.length < 80) throw new Error("Buffer too small (< 80 bytes)");
      const f = new e.BufferReader(y), E = new a();
      if (E.version = f.readInt32(), E.prevHash = f.readSlice(32), E.merkleRoot = f.readSlice(32), E.timestamp = f.readUInt32(), E.bits = f.readUInt32(), E.nonce = f.readUInt32(), y.length === 80) return E;
      const b = () => {
        const m = r.Transaction.fromBuffer(
          f.buffer.slice(f.offset),
          !0
        );
        return f.offset += m.byteLength(), m;
      }, I = f.readVarInt();
      E.transactions = [];
      for (let m = 0; m < I; ++m) {
        const T = b();
        E.transactions.push(T);
      }
      const x = E.getWitnessCommit();
      return x && (E.witnessCommit = x), E;
    }
    static fromHex(y) {
      return a.fromBuffer(Q.from(y, "hex"));
    }
    static calculateTarget(y) {
      const f = ((y & 4278190080) >> 24) - 3, E = y & 8388607, b = Q.alloc(32, 0);
      return b.writeUIntBE(E, 29 - f, 3), b;
    }
    static calculateMerkleRoot(y, f) {
      if (s([{ getHash: i.Function }], y), y.length === 0) throw u;
      if (f && !d(y))
        throw o;
      const E = y.map(
        (I) => I.getHash(f)
      ), b = (0, n.fastMerkleRoot)(E, t.hash256);
      return f ? t.hash256(
        Q.concat([b, y[0].ins[0].witness[0]])
      ) : b;
    }
    getWitnessCommit() {
      if (!d(this.transactions)) return null;
      const y = this.transactions[0].outs.filter(
        (E) => E.script.slice(0, 6).equals(Q.from("6a24aa21a9ed", "hex"))
      ).map((E) => E.script.slice(6, 38));
      if (y.length === 0) return null;
      const f = y[y.length - 1];
      return f instanceof Q && f.length === 32 ? f : null;
    }
    hasWitnessCommit() {
      return this.witnessCommit instanceof Q && this.witnessCommit.length === 32 || this.getWitnessCommit() !== null;
    }
    hasWitness() {
      return c(this.transactions);
    }
    weight() {
      const y = this.byteLength(!1, !1), f = this.byteLength(!1, !0);
      return y * 3 + f;
    }
    byteLength(y, f = !0) {
      return y || !this.transactions ? 80 : 80 + e.varuint.encodingLength(this.transactions.length) + this.transactions.reduce((E, b) => E + b.byteLength(f), 0);
    }
    getHash() {
      return t.hash256(this.toBuffer(!0));
    }
    getId() {
      return (0, e.reverseBuffer)(this.getHash()).toString("hex");
    }
    getUTCDate() {
      const y = /* @__PURE__ */ new Date(0);
      return y.setUTCSeconds(this.timestamp), y;
    }
    // TODO: buffer, offset compatibility
    toBuffer(y) {
      const f = Q.allocUnsafe(this.byteLength(y)), E = new e.BufferWriter(f);
      return E.writeInt32(this.version), E.writeSlice(this.prevHash), E.writeSlice(this.merkleRoot), E.writeUInt32(this.timestamp), E.writeUInt32(this.bits), E.writeUInt32(this.nonce), y || !this.transactions || (e.varuint.encode(
        this.transactions.length,
        f,
        E.offset
      ), E.offset += e.varuint.encode.bytes, this.transactions.forEach((b) => {
        const I = b.byteLength();
        b.toBuffer(f, E.offset), E.offset += I;
      })), f;
    }
    toHex(y) {
      return this.toBuffer(y).toString("hex");
    }
    checkTxRoots() {
      const y = this.hasWitnessCommit();
      return !y && this.hasWitness() ? !1 : this.__checkMerkleRoot() && (y ? this.__checkWitnessCommit() : !0);
    }
    checkProofOfWork() {
      const y = (0, e.reverseBuffer)(this.getHash()), f = a.calculateTarget(this.bits);
      return y.compare(f) <= 0;
    }
    __checkMerkleRoot() {
      if (!this.transactions) throw u;
      const y = a.calculateMerkleRoot(this.transactions);
      return this.merkleRoot.compare(y) === 0;
    }
    __checkWitnessCommit() {
      if (!this.transactions) throw u;
      if (!this.hasWitnessCommit()) throw o;
      const y = a.calculateMerkleRoot(
        this.transactions,
        !0
      );
      return this.witnessCommit.compare(y) === 0;
    }
  }
  kn.Block = a;
  function d(w) {
    return w instanceof Array && w[0] && w[0].ins && w[0].ins instanceof Array && w[0].ins[0] && w[0].ins[0].witness && w[0].ins[0].witness instanceof Array && w[0].ins[0].witness.length > 0;
  }
  function c(w) {
    return w instanceof Array && w.some(
      (y) => typeof y == "object" && y.ins instanceof Array && y.ins.some(
        (f) => typeof f == "object" && f.witness instanceof Array && f.witness.length > 0
      )
    );
  }
  return kn;
}
var Fn = {}, si = {}, ui = {}, To = {}, on = {}, sn = {}, Io = {}, Ku;
function at() {
  return Ku || (Ku = 1, function(e) {
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
  }(Io)), Io;
}
var fr = {}, qu;
function Yp() {
  if (qu) return fr;
  qu = 1, Object.defineProperty(fr, "__esModule", { value: !0 });
  const e = at(), t = (u) => [...Array(u).keys()];
  function n(u) {
    if (u.key[0] !== e.GlobalTypes.GLOBAL_XPUB)
      throw new Error(
        "Decode Error: could not decode globalXpub with key 0x" + u.key.toString("hex")
      );
    if (u.key.length !== 79 || ![2, 3].includes(u.key[46]))
      throw new Error(
        "Decode Error: globalXpub has invalid extended pubkey in key 0x" + u.key.toString("hex")
      );
    if (u.value.length / 4 % 1 !== 0)
      throw new Error(
        "Decode Error: Global GLOBAL_XPUB value length should be multiple of 4"
      );
    const o = u.key.slice(1), a = {
      masterFingerprint: u.value.slice(0, 4),
      extendedPubkey: o,
      path: "m"
    };
    for (const d of t(u.value.length / 4 - 1)) {
      const c = u.value.readUInt32LE(d * 4 + 4), w = !!(c & 2147483648), y = c & 2147483647;
      a.path += "/" + y.toString(10) + (w ? "'" : "");
    }
    return a;
  }
  fr.decode = n;
  function r(u) {
    const o = Q.from([e.GlobalTypes.GLOBAL_XPUB]), a = Q.concat([o, u.extendedPubkey]), d = u.path.split("/"), c = Q.allocUnsafe(d.length * 4);
    u.masterFingerprint.copy(c, 0);
    let w = 4;
    return d.slice(1).forEach((y) => {
      const f = y.slice(-1) === "'";
      let E = 2147483647 & parseInt(f ? y.slice(0, -1) : y, 10);
      f && (E += 2147483648), c.writeUInt32LE(E, w), w += 4;
    }), {
      key: a,
      value: c
    };
  }
  fr.encode = r, fr.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }";
  function i(u) {
    const o = u.extendedPubkey, a = u.masterFingerprint, d = u.path;
    return Q.isBuffer(o) && o.length === 78 && [2, 3].indexOf(o[45]) > -1 && Q.isBuffer(a) && a.length === 4 && typeof d == "string" && !!d.match(/^m(\/\d+'?)*$/);
  }
  fr.check = i;
  function s(u, o, a) {
    const d = o.extendedPubkey.toString("hex");
    return a.has(d) ? !1 : (a.add(d), u.filter((c) => c.extendedPubkey.equals(o.extendedPubkey)).length === 0);
  }
  return fr.canAddToArray = s, fr;
}
var ai = {}, Vu;
function zp() {
  if (Vu) return ai;
  Vu = 1, Object.defineProperty(ai, "__esModule", { value: !0 });
  const e = at();
  function t(n) {
    return {
      key: Q.from([e.GlobalTypes.UNSIGNED_TX]),
      value: n.toBuffer()
    };
  }
  return ai.encode = t, ai;
}
var hr = {}, Gu;
function Qp() {
  if (Gu) return hr;
  Gu = 1, Object.defineProperty(hr, "__esModule", { value: !0 });
  const e = at();
  function t(s) {
    if (s.key[0] !== e.InputTypes.FINAL_SCRIPTSIG)
      throw new Error(
        "Decode Error: could not decode finalScriptSig with key 0x" + s.key.toString("hex")
      );
    return s.value;
  }
  hr.decode = t;
  function n(s) {
    return {
      key: Q.from([e.InputTypes.FINAL_SCRIPTSIG]),
      value: s
    };
  }
  hr.encode = n, hr.expected = "Buffer";
  function r(s) {
    return Q.isBuffer(s);
  }
  hr.check = r;
  function i(s, u) {
    return !!s && !!u && s.finalScriptSig === void 0;
  }
  return hr.canAdd = i, hr;
}
var dr = {}, Xu;
function Jp() {
  if (Xu) return dr;
  Xu = 1, Object.defineProperty(dr, "__esModule", { value: !0 });
  const e = at();
  function t(s) {
    if (s.key[0] !== e.InputTypes.FINAL_SCRIPTWITNESS)
      throw new Error(
        "Decode Error: could not decode finalScriptWitness with key 0x" + s.key.toString("hex")
      );
    return s.value;
  }
  dr.decode = t;
  function n(s) {
    return {
      key: Q.from([e.InputTypes.FINAL_SCRIPTWITNESS]),
      value: s
    };
  }
  dr.encode = n, dr.expected = "Buffer";
  function r(s) {
    return Q.isBuffer(s);
  }
  dr.check = r;
  function i(s, u) {
    return !!s && !!u && s.finalScriptWitness === void 0;
  }
  return dr.canAdd = i, dr;
}
var pr = {}, Yu;
function Zp() {
  if (Yu) return pr;
  Yu = 1, Object.defineProperty(pr, "__esModule", { value: !0 });
  const e = at();
  function t(s) {
    if (s.key[0] !== e.InputTypes.NON_WITNESS_UTXO)
      throw new Error(
        "Decode Error: could not decode nonWitnessUtxo with key 0x" + s.key.toString("hex")
      );
    return s.value;
  }
  pr.decode = t;
  function n(s) {
    return {
      key: Q.from([e.InputTypes.NON_WITNESS_UTXO]),
      value: s
    };
  }
  pr.encode = n, pr.expected = "Buffer";
  function r(s) {
    return Q.isBuffer(s);
  }
  pr.check = r;
  function i(s, u) {
    return !!s && !!u && s.nonWitnessUtxo === void 0;
  }
  return pr.canAdd = i, pr;
}
var gr = {}, zu;
function e2() {
  if (zu) return gr;
  zu = 1, Object.defineProperty(gr, "__esModule", { value: !0 });
  const e = at();
  function t(u) {
    if (u.key[0] !== e.InputTypes.PARTIAL_SIG)
      throw new Error(
        "Decode Error: could not decode partialSig with key 0x" + u.key.toString("hex")
      );
    if (!(u.key.length === 34 || u.key.length === 66) || ![2, 3, 4].includes(u.key[1]))
      throw new Error(
        "Decode Error: partialSig has invalid pubkey in key 0x" + u.key.toString("hex")
      );
    return {
      pubkey: u.key.slice(1),
      signature: u.value
    };
  }
  gr.decode = t;
  function n(u) {
    const o = Q.from([e.InputTypes.PARTIAL_SIG]);
    return {
      key: Q.concat([o, u.pubkey]),
      value: u.signature
    };
  }
  gr.encode = n, gr.expected = "{ pubkey: Buffer; signature: Buffer; }";
  function r(u) {
    return Q.isBuffer(u.pubkey) && Q.isBuffer(u.signature) && [33, 65].includes(u.pubkey.length) && [2, 3, 4].includes(u.pubkey[0]) && i(u.signature);
  }
  gr.check = r;
  function i(u) {
    if (!Q.isBuffer(u) || u.length < 9 || u[0] !== 48 || u.length !== u[1] + 3 || u[2] !== 2) return !1;
    const o = u[3];
    if (o > 33 || o < 1 || u[3 + o + 1] !== 2) return !1;
    const a = u[3 + o + 2];
    return !(a > 33 || a < 1 || u.length !== 3 + o + 2 + a + 2);
  }
  function s(u, o, a) {
    const d = o.pubkey.toString("hex");
    return a.has(d) ? !1 : (a.add(d), u.filter((c) => c.pubkey.equals(o.pubkey)).length === 0);
  }
  return gr.canAddToArray = s, gr;
}
var mr = {}, Qu;
function t2() {
  if (Qu) return mr;
  Qu = 1, Object.defineProperty(mr, "__esModule", { value: !0 });
  const e = at();
  function t(s) {
    if (s.key[0] !== e.InputTypes.POR_COMMITMENT)
      throw new Error(
        "Decode Error: could not decode porCommitment with key 0x" + s.key.toString("hex")
      );
    return s.value.toString("utf8");
  }
  mr.decode = t;
  function n(s) {
    return {
      key: Q.from([e.InputTypes.POR_COMMITMENT]),
      value: Q.from(s, "utf8")
    };
  }
  mr.encode = n, mr.expected = "string";
  function r(s) {
    return typeof s == "string";
  }
  mr.check = r;
  function i(s, u) {
    return !!s && !!u && s.porCommitment === void 0;
  }
  return mr.canAdd = i, mr;
}
var wr = {}, Ju;
function r2() {
  if (Ju) return wr;
  Ju = 1, Object.defineProperty(wr, "__esModule", { value: !0 });
  const e = at();
  function t(s) {
    if (s.key[0] !== e.InputTypes.SIGHASH_TYPE)
      throw new Error(
        "Decode Error: could not decode sighashType with key 0x" + s.key.toString("hex")
      );
    return s.value.readUInt32LE(0);
  }
  wr.decode = t;
  function n(s) {
    const u = Q.from([e.InputTypes.SIGHASH_TYPE]), o = Q.allocUnsafe(4);
    return o.writeUInt32LE(s, 0), {
      key: u,
      value: o
    };
  }
  wr.encode = n, wr.expected = "number";
  function r(s) {
    return typeof s == "number";
  }
  wr.check = r;
  function i(s, u) {
    return !!s && !!u && s.sighashType === void 0;
  }
  return wr.canAdd = i, wr;
}
var yr = {}, Zu;
function n2() {
  if (Zu) return yr;
  Zu = 1, Object.defineProperty(yr, "__esModule", { value: !0 });
  const e = at();
  function t(s) {
    if (s.key[0] !== e.InputTypes.TAP_KEY_SIG || s.key.length !== 1)
      throw new Error(
        "Decode Error: could not decode tapKeySig with key 0x" + s.key.toString("hex")
      );
    if (!r(s.value))
      throw new Error(
        "Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature"
      );
    return s.value;
  }
  yr.decode = t;
  function n(s) {
    return { key: Q.from([e.InputTypes.TAP_KEY_SIG]), value: s };
  }
  yr.encode = n, yr.expected = "Buffer";
  function r(s) {
    return Q.isBuffer(s) && (s.length === 64 || s.length === 65);
  }
  yr.check = r;
  function i(s, u) {
    return !!s && !!u && s.tapKeySig === void 0;
  }
  return yr.canAdd = i, yr;
}
var Er = {}, ea;
function i2() {
  if (ea) return Er;
  ea = 1, Object.defineProperty(Er, "__esModule", { value: !0 });
  const e = at();
  function t(s) {
    if (s.key[0] !== e.InputTypes.TAP_LEAF_SCRIPT)
      throw new Error(
        "Decode Error: could not decode tapLeafScript with key 0x" + s.key.toString("hex")
      );
    if ((s.key.length - 2) % 32 !== 0)
      throw new Error(
        "Decode Error: tapLeafScript has invalid control block in key 0x" + s.key.toString("hex")
      );
    const u = s.value[s.value.length - 1];
    if ((s.key[1] & 254) !== u)
      throw new Error(
        "Decode Error: tapLeafScript bad leaf version in key 0x" + s.key.toString("hex")
      );
    const o = s.value.slice(0, -1);
    return { controlBlock: s.key.slice(1), script: o, leafVersion: u };
  }
  Er.decode = t;
  function n(s) {
    const u = Q.from([e.InputTypes.TAP_LEAF_SCRIPT]), o = Q.from([s.leafVersion]);
    return {
      key: Q.concat([u, s.controlBlock]),
      value: Q.concat([s.script, o])
    };
  }
  Er.encode = n, Er.expected = "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }";
  function r(s) {
    return Q.isBuffer(s.controlBlock) && (s.controlBlock.length - 1) % 32 === 0 && (s.controlBlock[0] & 254) === s.leafVersion && Q.isBuffer(s.script);
  }
  Er.check = r;
  function i(s, u, o) {
    const a = u.controlBlock.toString("hex");
    return o.has(a) ? !1 : (o.add(a), s.filter((d) => d.controlBlock.equals(u.controlBlock)).length === 0);
  }
  return Er.canAddToArray = i, Er;
}
var Ar = {}, ta;
function o2() {
  if (ta) return Ar;
  ta = 1, Object.defineProperty(Ar, "__esModule", { value: !0 });
  const e = at();
  function t(s) {
    if (s.key[0] !== e.InputTypes.TAP_MERKLE_ROOT || s.key.length !== 1)
      throw new Error(
        "Decode Error: could not decode tapMerkleRoot with key 0x" + s.key.toString("hex")
      );
    if (!r(s.value))
      throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
    return s.value;
  }
  Ar.decode = t;
  function n(s) {
    return { key: Q.from([e.InputTypes.TAP_MERKLE_ROOT]), value: s };
  }
  Ar.encode = n, Ar.expected = "Buffer";
  function r(s) {
    return Q.isBuffer(s) && s.length === 32;
  }
  Ar.check = r;
  function i(s, u) {
    return !!s && !!u && s.tapMerkleRoot === void 0;
  }
  return Ar.canAdd = i, Ar;
}
var br = {}, ra;
function s2() {
  if (ra) return br;
  ra = 1, Object.defineProperty(br, "__esModule", { value: !0 });
  const e = at();
  function t(s) {
    if (s.key[0] !== e.InputTypes.TAP_SCRIPT_SIG)
      throw new Error(
        "Decode Error: could not decode tapScriptSig with key 0x" + s.key.toString("hex")
      );
    if (s.key.length !== 65)
      throw new Error(
        "Decode Error: tapScriptSig has invalid key 0x" + s.key.toString("hex")
      );
    if (s.value.length !== 64 && s.value.length !== 65)
      throw new Error(
        "Decode Error: tapScriptSig has invalid signature in key 0x" + s.key.toString("hex")
      );
    const u = s.key.slice(1, 33), o = s.key.slice(33);
    return {
      pubkey: u,
      leafHash: o,
      signature: s.value
    };
  }
  br.decode = t;
  function n(s) {
    const u = Q.from([e.InputTypes.TAP_SCRIPT_SIG]);
    return {
      key: Q.concat([u, s.pubkey, s.leafHash]),
      value: s.signature
    };
  }
  br.encode = n, br.expected = "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }";
  function r(s) {
    return Q.isBuffer(s.pubkey) && Q.isBuffer(s.leafHash) && Q.isBuffer(s.signature) && s.pubkey.length === 32 && s.leafHash.length === 32 && (s.signature.length === 64 || s.signature.length === 65);
  }
  br.check = r;
  function i(s, u, o) {
    const a = u.pubkey.toString("hex") + u.leafHash.toString("hex");
    return o.has(a) ? !1 : (o.add(a), s.filter(
      (d) => d.pubkey.equals(u.pubkey) && d.leafHash.equals(u.leafHash)
    ).length === 0);
  }
  return br.canAddToArray = i, br;
}
var vr = {}, ir = {}, un = {}, na;
function Jr() {
  if (na) return un;
  na = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = 9007199254740991;
  function t(s) {
    if (s < 0 || s > e || s % 1 !== 0)
      throw new RangeError("value out of range");
  }
  function n(s, u, o) {
    if (t(s), u || (u = Q.allocUnsafe(i(s))), !Q.isBuffer(u))
      throw new TypeError("buffer must be a Buffer instance");
    return o || (o = 0), s < 253 ? (u.writeUInt8(s, o), Object.assign(n, { bytes: 1 })) : s <= 65535 ? (u.writeUInt8(253, o), u.writeUInt16LE(s, o + 1), Object.assign(n, { bytes: 3 })) : s <= 4294967295 ? (u.writeUInt8(254, o), u.writeUInt32LE(s, o + 1), Object.assign(n, { bytes: 5 })) : (u.writeUInt8(255, o), u.writeUInt32LE(s >>> 0, o + 1), u.writeUInt32LE(s / 4294967296 | 0, o + 5), Object.assign(n, { bytes: 9 })), u;
  }
  un.encode = n;
  function r(s, u) {
    if (!Q.isBuffer(s))
      throw new TypeError("buffer must be a Buffer instance");
    u || (u = 0);
    const o = s.readUInt8(u);
    if (o < 253)
      return Object.assign(r, { bytes: 1 }), o;
    if (o === 253)
      return Object.assign(r, { bytes: 3 }), s.readUInt16LE(u + 1);
    if (o === 254)
      return Object.assign(r, { bytes: 5 }), s.readUInt32LE(u + 1);
    {
      Object.assign(r, { bytes: 9 });
      const a = s.readUInt32LE(u + 1), c = s.readUInt32LE(u + 5) * 4294967296 + a;
      return t(c), c;
    }
  }
  un.decode = r;
  function i(s) {
    return t(s), s < 253 ? 1 : s <= 65535 ? 3 : s <= 4294967295 ? 5 : 9;
  }
  return un.encodingLength = i, un;
}
var ia;
function ys() {
  if (ia) return ir;
  ia = 1, Object.defineProperty(ir, "__esModule", { value: !0 });
  const e = Jr();
  ir.range = (o) => [...Array(o).keys()];
  function t(o) {
    if (o.length < 1) return o;
    let a = o.length - 1, d = 0;
    for (let c = 0; c < o.length / 2; c++)
      d = o[c], o[c] = o[a], o[a] = d, a--;
    return o;
  }
  ir.reverseBuffer = t;
  function n(o) {
    const a = o.map(r);
    return a.push(Q.from([0])), Q.concat(a);
  }
  ir.keyValsToBuffer = n;
  function r(o) {
    const a = o.key.length, d = o.value.length, c = e.encodingLength(a), w = e.encodingLength(d), y = Q.allocUnsafe(
      c + a + w + d
    );
    return e.encode(a, y, 0), o.key.copy(y, c), e.encode(d, y, c + a), o.value.copy(y, c + a + w), y;
  }
  ir.keyValToBuffer = r;
  function i(o, a) {
    if (typeof o != "number")
      throw new Error("cannot write a non-number as a number");
    if (o < 0)
      throw new Error("specified a negative value for writing an unsigned value");
    if (o > a) throw new Error("RangeError: value out of range");
    if (Math.floor(o) !== o)
      throw new Error("value has a fractional component");
  }
  function s(o, a) {
    const d = o.readUInt32LE(a);
    let c = o.readUInt32LE(a + 4);
    return c *= 4294967296, i(c + d, 9007199254740991), c + d;
  }
  ir.readUInt64LE = s;
  function u(o, a, d) {
    return i(a, 9007199254740991), o.writeInt32LE(a & -1, d), o.writeUInt32LE(Math.floor(a / 4294967296), d + 4), d + 8;
  }
  return ir.writeUInt64LE = u, ir;
}
var oa;
function u2() {
  if (oa) return vr;
  oa = 1, Object.defineProperty(vr, "__esModule", { value: !0 });
  const e = at(), t = ys(), n = Jr();
  function r(o) {
    if (o.key[0] !== e.InputTypes.WITNESS_UTXO)
      throw new Error(
        "Decode Error: could not decode witnessUtxo with key 0x" + o.key.toString("hex")
      );
    const a = t.readUInt64LE(o.value, 0);
    let d = 8;
    const c = n.decode(o.value, d);
    d += n.encodingLength(c);
    const w = o.value.slice(d);
    if (w.length !== c)
      throw new Error("Decode Error: WITNESS_UTXO script is not proper length");
    return {
      script: w,
      value: a
    };
  }
  vr.decode = r;
  function i(o) {
    const { script: a, value: d } = o, c = n.encodingLength(a.length), w = Q.allocUnsafe(8 + c + a.length);
    return t.writeUInt64LE(w, d, 0), n.encode(a.length, w, 8), a.copy(w, 8 + c), {
      key: Q.from([e.InputTypes.WITNESS_UTXO]),
      value: w
    };
  }
  vr.encode = i, vr.expected = "{ script: Buffer; value: number; }";
  function s(o) {
    return Q.isBuffer(o.script) && typeof o.value == "number";
  }
  vr.check = s;
  function u(o, a) {
    return !!o && !!a && o.witnessUtxo === void 0;
  }
  return vr.canAdd = u, vr;
}
var Pr = {}, sa;
function a2() {
  if (sa) return Pr;
  sa = 1, Object.defineProperty(Pr, "__esModule", { value: !0 });
  const e = at(), t = Jr();
  function n(u) {
    if (u.key[0] !== e.OutputTypes.TAP_TREE || u.key.length !== 1)
      throw new Error(
        "Decode Error: could not decode tapTree with key 0x" + u.key.toString("hex")
      );
    let o = 0;
    const a = [];
    for (; o < u.value.length; ) {
      const d = u.value[o++], c = u.value[o++], w = t.decode(u.value, o);
      o += t.encodingLength(w), a.push({
        depth: d,
        leafVersion: c,
        script: u.value.slice(o, o + w)
      }), o += w;
    }
    return { leaves: a };
  }
  Pr.decode = n;
  function r(u) {
    const o = Q.from([e.OutputTypes.TAP_TREE]), a = [].concat(
      ...u.leaves.map((d) => [
        Q.of(d.depth, d.leafVersion),
        t.encode(d.script.length),
        d.script
      ])
    );
    return {
      key: o,
      value: Q.concat(a)
    };
  }
  Pr.encode = r, Pr.expected = "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }";
  function i(u) {
    return Array.isArray(u.leaves) && u.leaves.every(
      (o) => o.depth >= 0 && o.depth <= 128 && (o.leafVersion & 254) === o.leafVersion && Q.isBuffer(o.script)
    );
  }
  Pr.check = i;
  function s(u, o) {
    return !!u && !!o && u.tapTree === void 0;
  }
  return Pr.canAdd = s, Pr;
}
var ci = {}, ua;
function Zc() {
  if (ua) return ci;
  ua = 1, Object.defineProperty(ci, "__esModule", { value: !0 });
  const e = (r) => [...Array(r).keys()], t = (r) => r.length === 33 && [2, 3].includes(r[0]) || r.length === 65 && r[0] === 4;
  function n(r, i = t) {
    function s(c) {
      if (c.key[0] !== r)
        throw new Error(
          "Decode Error: could not decode bip32Derivation with key 0x" + c.key.toString("hex")
        );
      const w = c.key.slice(1);
      if (!i(w))
        throw new Error(
          "Decode Error: bip32Derivation has invalid pubkey in key 0x" + c.key.toString("hex")
        );
      if (c.value.length / 4 % 1 !== 0)
        throw new Error(
          "Decode Error: Input BIP32_DERIVATION value length should be multiple of 4"
        );
      const y = {
        masterFingerprint: c.value.slice(0, 4),
        pubkey: w,
        path: "m"
      };
      for (const f of e(c.value.length / 4 - 1)) {
        const E = c.value.readUInt32LE(f * 4 + 4), b = !!(E & 2147483648), I = E & 2147483647;
        y.path += "/" + I.toString(10) + (b ? "'" : "");
      }
      return y;
    }
    function u(c) {
      const w = Q.from([r]), y = Q.concat([w, c.pubkey]), f = c.path.split("/"), E = Q.allocUnsafe(f.length * 4);
      c.masterFingerprint.copy(E, 0);
      let b = 4;
      return f.slice(1).forEach((I) => {
        const x = I.slice(-1) === "'";
        let m = 2147483647 & parseInt(x ? I.slice(0, -1) : I, 10);
        x && (m += 2147483648), E.writeUInt32LE(m, b), b += 4;
      }), {
        key: y,
        value: E
      };
    }
    const o = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
    function a(c) {
      return Q.isBuffer(c.pubkey) && Q.isBuffer(c.masterFingerprint) && typeof c.path == "string" && i(c.pubkey) && c.masterFingerprint.length === 4;
    }
    function d(c, w, y) {
      const f = w.pubkey.toString("hex");
      return y.has(f) ? !1 : (y.add(f), c.filter((E) => E.pubkey.equals(w.pubkey)).length === 0);
    }
    return {
      decode: s,
      encode: u,
      check: a,
      expected: o,
      canAddToArray: d
    };
  }
  return ci.makeConverter = n, ci;
}
var li = {}, aa;
function c2() {
  if (aa) return li;
  aa = 1, Object.defineProperty(li, "__esModule", { value: !0 });
  function e(t) {
    return n;
    function n(r) {
      let i;
      if (t.includes(r.key[0]) && (i = r.key.slice(1), !(i.length === 33 || i.length === 65) || ![2, 3, 4].includes(i[0])))
        throw new Error(
          "Format Error: invalid pubkey in key 0x" + r.key.toString("hex")
        );
      return i;
    }
  }
  return li.makeChecker = e, li;
}
var fi = {}, ca;
function l2() {
  if (ca) return fi;
  ca = 1, Object.defineProperty(fi, "__esModule", { value: !0 });
  function e(t) {
    function n(o) {
      if (o.key[0] !== t)
        throw new Error(
          "Decode Error: could not decode redeemScript with key 0x" + o.key.toString("hex")
        );
      return o.value;
    }
    function r(o) {
      return {
        key: Q.from([t]),
        value: o
      };
    }
    const i = "Buffer";
    function s(o) {
      return Q.isBuffer(o);
    }
    function u(o, a) {
      return !!o && !!a && o.redeemScript === void 0;
    }
    return {
      decode: n,
      encode: r,
      check: s,
      expected: i,
      canAdd: u
    };
  }
  return fi.makeConverter = e, fi;
}
var hi = {}, la;
function f2() {
  if (la) return hi;
  la = 1, Object.defineProperty(hi, "__esModule", { value: !0 });
  const e = Jr(), t = Zc(), n = (i) => i.length === 32;
  function r(i) {
    const s = t.makeConverter(i, n);
    function u(c) {
      const w = e.decode(c.value), y = e.encodingLength(w), f = s.decode({
        key: c.key,
        value: c.value.slice(y + w * 32)
      }), E = new Array(w);
      for (let b = 0, I = y; b < w; b++, I += 32)
        E[b] = c.value.slice(I, I + 32);
      return Object.assign({}, f, { leafHashes: E });
    }
    function o(c) {
      const w = s.encode(c), y = e.encodingLength(c.leafHashes.length), f = Q.allocUnsafe(y);
      e.encode(c.leafHashes.length, f);
      const E = Q.concat([f, ...c.leafHashes, w.value]);
      return Object.assign({}, w, { value: E });
    }
    const a = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
    function d(c) {
      return Array.isArray(c.leafHashes) && c.leafHashes.every(
        (w) => Q.isBuffer(w) && w.length === 32
      ) && s.check(c);
    }
    return {
      decode: u,
      encode: o,
      check: d,
      expected: a,
      canAddToArray: s.canAddToArray
    };
  }
  return hi.makeConverter = r, hi;
}
var di = {}, fa;
function h2() {
  if (fa) return di;
  fa = 1, Object.defineProperty(di, "__esModule", { value: !0 });
  function e(t) {
    function n(o) {
      if (o.key[0] !== t || o.key.length !== 1)
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
      return { key: Q.from([t]), value: o };
    }
    const i = "Buffer";
    function s(o) {
      return Q.isBuffer(o) && o.length === 32;
    }
    function u(o, a) {
      return !!o && !!a && o.tapInternalKey === void 0;
    }
    return {
      decode: n,
      encode: r,
      check: s,
      expected: i,
      canAdd: u
    };
  }
  return di.makeConverter = e, di;
}
var pi = {}, ha;
function d2() {
  if (ha) return pi;
  ha = 1, Object.defineProperty(pi, "__esModule", { value: !0 });
  function e(t) {
    function n(o) {
      if (o.key[0] !== t)
        throw new Error(
          "Decode Error: could not decode witnessScript with key 0x" + o.key.toString("hex")
        );
      return o.value;
    }
    function r(o) {
      return {
        key: Q.from([t]),
        value: o
      };
    }
    const i = "Buffer";
    function s(o) {
      return Q.isBuffer(o);
    }
    function u(o, a) {
      return !!o && !!a && o.witnessScript === void 0;
    }
    return {
      decode: n,
      encode: r,
      check: s,
      expected: i,
      canAdd: u
    };
  }
  return pi.makeConverter = e, pi;
}
var da;
function Es() {
  if (da) return sn;
  da = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = at(), t = Yp(), n = zp(), r = Qp(), i = Jp(), s = Zp(), u = e2(), o = t2(), a = r2(), d = n2(), c = i2(), w = o2(), y = s2(), f = u2(), E = a2(), b = Zc(), I = c2(), x = l2(), m = f2(), T = h2(), C = d2(), j = {
    unsignedTx: n,
    globalXpub: t,
    // pass an Array of key bytes that require pubkey beside the key
    checkPubkey: I.makeChecker([])
  };
  sn.globals = j;
  const U = {
    nonWitnessUtxo: s,
    partialSig: u,
    sighashType: a,
    finalScriptSig: r,
    finalScriptWitness: i,
    porCommitment: o,
    witnessUtxo: f,
    bip32Derivation: b.makeConverter(
      e.InputTypes.BIP32_DERIVATION
    ),
    redeemScript: x.makeConverter(
      e.InputTypes.REDEEM_SCRIPT
    ),
    witnessScript: C.makeConverter(
      e.InputTypes.WITNESS_SCRIPT
    ),
    checkPubkey: I.makeChecker([
      e.InputTypes.PARTIAL_SIG,
      e.InputTypes.BIP32_DERIVATION
    ]),
    tapKeySig: d,
    tapScriptSig: y,
    tapLeafScript: c,
    tapBip32Derivation: m.makeConverter(
      e.InputTypes.TAP_BIP32_DERIVATION
    ),
    tapInternalKey: T.makeConverter(
      e.InputTypes.TAP_INTERNAL_KEY
    ),
    tapMerkleRoot: w
  };
  sn.inputs = U;
  const K = {
    bip32Derivation: b.makeConverter(
      e.OutputTypes.BIP32_DERIVATION
    ),
    redeemScript: x.makeConverter(
      e.OutputTypes.REDEEM_SCRIPT
    ),
    witnessScript: C.makeConverter(
      e.OutputTypes.WITNESS_SCRIPT
    ),
    checkPubkey: I.makeChecker([
      e.OutputTypes.BIP32_DERIVATION
    ]),
    tapBip32Derivation: m.makeConverter(
      e.OutputTypes.TAP_BIP32_DERIVATION
    ),
    tapTree: E,
    tapInternalKey: T.makeConverter(
      e.OutputTypes.TAP_INTERNAL_KEY
    )
  };
  return sn.outputs = K, sn;
}
var pa;
function p2() {
  if (pa) return on;
  pa = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = Es(), t = ys(), n = Jr(), r = at();
  function i(o, a) {
    let d = 0;
    function c() {
      const K = n.decode(o, d);
      d += n.encodingLength(K);
      const S = o.slice(d, d + K);
      return d += K, S;
    }
    function w() {
      const K = o.readUInt32BE(d);
      return d += 4, K;
    }
    function y() {
      const K = o.readUInt8(d);
      return d += 1, K;
    }
    function f() {
      const K = c(), S = c();
      return {
        key: K,
        value: S
      };
    }
    function E() {
      if (d >= o.length)
        throw new Error("Format Error: Unexpected End of PSBT");
      const K = o.readUInt8(d) === 0;
      return K && d++, K;
    }
    if (w() !== 1886610036)
      throw new Error("Format Error: Invalid Magic Number");
    if (y() !== 255)
      throw new Error(
        "Format Error: Magic Number must be followed by 0xff separator"
      );
    const b = [], I = {};
    for (; !E(); ) {
      const K = f(), S = K.key.toString("hex");
      if (I[S])
        throw new Error(
          "Format Error: Keys must be unique for global keymap: key " + S
        );
      I[S] = 1, b.push(K);
    }
    const x = b.filter(
      (K) => K.key[0] === r.GlobalTypes.UNSIGNED_TX
    );
    if (x.length !== 1)
      throw new Error("Format Error: Only one UNSIGNED_TX allowed");
    const m = a(x[0].value), { inputCount: T, outputCount: C } = m.getInputOutputCounts(), j = [], U = [];
    for (const K of t.range(T)) {
      const S = {}, A = [];
      for (; !E(); ) {
        const _ = f(), N = _.key.toString("hex");
        if (S[N])
          throw new Error(
            "Format Error: Keys must be unique for each input: input index " + K + " key " + N
          );
        S[N] = 1, A.push(_);
      }
      j.push(A);
    }
    for (const K of t.range(C)) {
      const S = {}, A = [];
      for (; !E(); ) {
        const _ = f(), N = _.key.toString("hex");
        if (S[N])
          throw new Error(
            "Format Error: Keys must be unique for each output: output index " + K + " key " + N
          );
        S[N] = 1, A.push(_);
      }
      U.push(A);
    }
    return u(m, {
      globalMapKeyVals: b,
      inputKeyVals: j,
      outputKeyVals: U
    });
  }
  on.psbtFromBuffer = i;
  function s(o, a, d) {
    if (!a.equals(Q.from([d])))
      throw new Error(
        `Format Error: Invalid ${o} key: ${a.toString("hex")}`
      );
  }
  on.checkKeyBuffer = s;
  function u(o, { globalMapKeyVals: a, inputKeyVals: d, outputKeyVals: c }) {
    const w = {
      unsignedTx: o
    };
    let y = 0;
    for (const x of a)
      switch (x.key[0]) {
        case r.GlobalTypes.UNSIGNED_TX:
          if (s(
            "global",
            x.key,
            r.GlobalTypes.UNSIGNED_TX
          ), y > 0)
            throw new Error("Format Error: GlobalMap has multiple UNSIGNED_TX");
          y++;
          break;
        case r.GlobalTypes.GLOBAL_XPUB:
          w.globalXpub === void 0 && (w.globalXpub = []), w.globalXpub.push(e.globals.globalXpub.decode(x));
          break;
        default:
          w.unknownKeyVals || (w.unknownKeyVals = []), w.unknownKeyVals.push(x);
      }
    const f = d.length, E = c.length, b = [], I = [];
    for (const x of t.range(f)) {
      const m = {};
      for (const T of d[x])
        switch (e.inputs.checkPubkey(T), T.key[0]) {
          case r.InputTypes.NON_WITNESS_UTXO:
            if (s(
              "input",
              T.key,
              r.InputTypes.NON_WITNESS_UTXO
            ), m.nonWitnessUtxo !== void 0)
              throw new Error(
                "Format Error: Input has multiple NON_WITNESS_UTXO"
              );
            m.nonWitnessUtxo = e.inputs.nonWitnessUtxo.decode(T);
            break;
          case r.InputTypes.WITNESS_UTXO:
            if (s(
              "input",
              T.key,
              r.InputTypes.WITNESS_UTXO
            ), m.witnessUtxo !== void 0)
              throw new Error("Format Error: Input has multiple WITNESS_UTXO");
            m.witnessUtxo = e.inputs.witnessUtxo.decode(T);
            break;
          case r.InputTypes.PARTIAL_SIG:
            m.partialSig === void 0 && (m.partialSig = []), m.partialSig.push(e.inputs.partialSig.decode(T));
            break;
          case r.InputTypes.SIGHASH_TYPE:
            if (s(
              "input",
              T.key,
              r.InputTypes.SIGHASH_TYPE
            ), m.sighashType !== void 0)
              throw new Error("Format Error: Input has multiple SIGHASH_TYPE");
            m.sighashType = e.inputs.sighashType.decode(T);
            break;
          case r.InputTypes.REDEEM_SCRIPT:
            if (s(
              "input",
              T.key,
              r.InputTypes.REDEEM_SCRIPT
            ), m.redeemScript !== void 0)
              throw new Error("Format Error: Input has multiple REDEEM_SCRIPT");
            m.redeemScript = e.inputs.redeemScript.decode(T);
            break;
          case r.InputTypes.WITNESS_SCRIPT:
            if (s(
              "input",
              T.key,
              r.InputTypes.WITNESS_SCRIPT
            ), m.witnessScript !== void 0)
              throw new Error("Format Error: Input has multiple WITNESS_SCRIPT");
            m.witnessScript = e.inputs.witnessScript.decode(T);
            break;
          case r.InputTypes.BIP32_DERIVATION:
            m.bip32Derivation === void 0 && (m.bip32Derivation = []), m.bip32Derivation.push(
              e.inputs.bip32Derivation.decode(T)
            );
            break;
          case r.InputTypes.FINAL_SCRIPTSIG:
            s(
              "input",
              T.key,
              r.InputTypes.FINAL_SCRIPTSIG
            ), m.finalScriptSig = e.inputs.finalScriptSig.decode(T);
            break;
          case r.InputTypes.FINAL_SCRIPTWITNESS:
            s(
              "input",
              T.key,
              r.InputTypes.FINAL_SCRIPTWITNESS
            ), m.finalScriptWitness = e.inputs.finalScriptWitness.decode(
              T
            );
            break;
          case r.InputTypes.POR_COMMITMENT:
            s(
              "input",
              T.key,
              r.InputTypes.POR_COMMITMENT
            ), m.porCommitment = e.inputs.porCommitment.decode(T);
            break;
          case r.InputTypes.TAP_KEY_SIG:
            s(
              "input",
              T.key,
              r.InputTypes.TAP_KEY_SIG
            ), m.tapKeySig = e.inputs.tapKeySig.decode(T);
            break;
          case r.InputTypes.TAP_SCRIPT_SIG:
            m.tapScriptSig === void 0 && (m.tapScriptSig = []), m.tapScriptSig.push(e.inputs.tapScriptSig.decode(T));
            break;
          case r.InputTypes.TAP_LEAF_SCRIPT:
            m.tapLeafScript === void 0 && (m.tapLeafScript = []), m.tapLeafScript.push(e.inputs.tapLeafScript.decode(T));
            break;
          case r.InputTypes.TAP_BIP32_DERIVATION:
            m.tapBip32Derivation === void 0 && (m.tapBip32Derivation = []), m.tapBip32Derivation.push(
              e.inputs.tapBip32Derivation.decode(T)
            );
            break;
          case r.InputTypes.TAP_INTERNAL_KEY:
            s(
              "input",
              T.key,
              r.InputTypes.TAP_INTERNAL_KEY
            ), m.tapInternalKey = e.inputs.tapInternalKey.decode(T);
            break;
          case r.InputTypes.TAP_MERKLE_ROOT:
            s(
              "input",
              T.key,
              r.InputTypes.TAP_MERKLE_ROOT
            ), m.tapMerkleRoot = e.inputs.tapMerkleRoot.decode(T);
            break;
          default:
            m.unknownKeyVals || (m.unknownKeyVals = []), m.unknownKeyVals.push(T);
        }
      b.push(m);
    }
    for (const x of t.range(E)) {
      const m = {};
      for (const T of c[x])
        switch (e.outputs.checkPubkey(T), T.key[0]) {
          case r.OutputTypes.REDEEM_SCRIPT:
            if (s(
              "output",
              T.key,
              r.OutputTypes.REDEEM_SCRIPT
            ), m.redeemScript !== void 0)
              throw new Error("Format Error: Output has multiple REDEEM_SCRIPT");
            m.redeemScript = e.outputs.redeemScript.decode(T);
            break;
          case r.OutputTypes.WITNESS_SCRIPT:
            if (s(
              "output",
              T.key,
              r.OutputTypes.WITNESS_SCRIPT
            ), m.witnessScript !== void 0)
              throw new Error("Format Error: Output has multiple WITNESS_SCRIPT");
            m.witnessScript = e.outputs.witnessScript.decode(T);
            break;
          case r.OutputTypes.BIP32_DERIVATION:
            m.bip32Derivation === void 0 && (m.bip32Derivation = []), m.bip32Derivation.push(
              e.outputs.bip32Derivation.decode(T)
            );
            break;
          case r.OutputTypes.TAP_INTERNAL_KEY:
            s(
              "output",
              T.key,
              r.OutputTypes.TAP_INTERNAL_KEY
            ), m.tapInternalKey = e.outputs.tapInternalKey.decode(T);
            break;
          case r.OutputTypes.TAP_TREE:
            s(
              "output",
              T.key,
              r.OutputTypes.TAP_TREE
            ), m.tapTree = e.outputs.tapTree.decode(T);
            break;
          case r.OutputTypes.TAP_BIP32_DERIVATION:
            m.tapBip32Derivation === void 0 && (m.tapBip32Derivation = []), m.tapBip32Derivation.push(
              e.outputs.tapBip32Derivation.decode(T)
            );
            break;
          default:
            m.unknownKeyVals || (m.unknownKeyVals = []), m.unknownKeyVals.push(T);
        }
      I.push(m);
    }
    return { globalMap: w, inputs: b, outputs: I };
  }
  return on.psbtFromKeyVals = u, on;
}
var Nn = {}, ga;
function g2() {
  if (ga) return Nn;
  ga = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = Es(), t = ys();
  function n({ globalMap: u, inputs: o, outputs: a }) {
    const { globalKeyVals: d, inputKeyVals: c, outputKeyVals: w } = s({
      globalMap: u,
      inputs: o,
      outputs: a
    }), y = t.keyValsToBuffer(d), f = (x) => x.length === 0 ? [Q.from([0])] : x.map(t.keyValsToBuffer), E = f(c), b = f(w), I = Q.allocUnsafe(5);
    return I.writeUIntBE(482972169471, 0, 5), Q.concat(
      [I, y].concat(E, b)
    );
  }
  Nn.psbtToBuffer = n;
  const r = (u, o) => u.key.compare(o.key);
  function i(u, o) {
    const a = /* @__PURE__ */ new Set(), d = Object.entries(u).reduce((w, [y, f]) => {
      if (y === "unknownKeyVals") return w;
      const E = o[y];
      if (E === void 0) return w;
      const b = (Array.isArray(f) ? f : [f]).map(
        E.encode
      );
      return b.map((x) => x.key.toString("hex")).forEach((x) => {
        if (a.has(x))
          throw new Error("Serialize Error: Duplicate key: " + x);
        a.add(x);
      }), w.concat(b);
    }, []), c = u.unknownKeyVals ? u.unknownKeyVals.filter((w) => !a.has(w.key.toString("hex"))) : [];
    return d.concat(c).sort(r);
  }
  function s({ globalMap: u, inputs: o, outputs: a }) {
    return {
      globalKeyVals: i(u, e.globals),
      inputKeyVals: o.map((d) => i(d, e.inputs)),
      outputKeyVals: a.map((d) => i(d, e.outputs))
    };
  }
  return Nn.psbtToKeyVals = s, Nn;
}
var ma;
function el() {
  return ma || (ma = 1, function(e) {
    function t(n) {
      for (var r in n) e.hasOwnProperty(r) || (e[r] = n[r]);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), t(p2()), t(g2());
  }(To)), To;
}
var wa;
function m2() {
  if (wa) return ui;
  wa = 1, Object.defineProperty(ui, "__esModule", { value: !0 });
  const e = el();
  function t(s) {
    const u = s[0], o = e.psbtToKeyVals(u), a = s.slice(1);
    if (a.length === 0) throw new Error("Combine: Nothing to combine");
    const d = r(u);
    if (d === void 0)
      throw new Error("Combine: Self missing transaction");
    const c = i(o.globalKeyVals), w = o.inputKeyVals.map(i), y = o.outputKeyVals.map(i);
    for (const f of a) {
      const E = r(f);
      if (E === void 0 || !E.toBuffer().equals(d.toBuffer()))
        throw new Error(
          "Combine: One of the Psbts does not have the same transaction."
        );
      const b = e.psbtToKeyVals(f);
      i(b.globalKeyVals).forEach(
        n(
          c,
          o.globalKeyVals,
          b.globalKeyVals
        )
      ), b.inputKeyVals.map(i).forEach(
        (T, C) => T.forEach(
          n(
            w[C],
            o.inputKeyVals[C],
            b.inputKeyVals[C]
          )
        )
      ), b.outputKeyVals.map(i).forEach(
        (T, C) => T.forEach(
          n(
            y[C],
            o.outputKeyVals[C],
            b.outputKeyVals[C]
          )
        )
      );
    }
    return e.psbtFromKeyVals(d, {
      globalMapKeyVals: o.globalKeyVals,
      inputKeyVals: o.inputKeyVals,
      outputKeyVals: o.outputKeyVals
    });
  }
  ui.combine = t;
  function n(s, u, o) {
    return (a) => {
      if (s.has(a)) return;
      const d = o.filter((c) => c.key.toString("hex") === a)[0];
      u.push(d), s.add(a);
    };
  }
  function r(s) {
    return s.globalMap.unsignedTx;
  }
  function i(s) {
    const u = /* @__PURE__ */ new Set();
    return s.forEach((o) => {
      const a = o.key.toString("hex");
      if (u.has(a))
        throw new Error("Combine: KeyValue Map keys should be unique");
      u.add(a);
    }), u;
  }
  return ui;
}
var xo = {}, ya;
function tl() {
  return ya || (ya = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Es();
    function n(f, E) {
      const b = f[E];
      if (b === void 0) throw new Error(`No input #${E}`);
      return b;
    }
    e.checkForInput = n;
    function r(f, E) {
      const b = f[E];
      if (b === void 0) throw new Error(`No output #${E}`);
      return b;
    }
    e.checkForOutput = r;
    function i(f, E, b) {
      if (f.key[0] < b)
        throw new Error(
          "Use the method for your specific key instead of addUnknownKeyVal*"
        );
      if (E && E.filter((I) => I.key.equals(f.key)).length !== 0)
        throw new Error(`Duplicate Key: ${f.key.toString("hex")}`);
    }
    e.checkHasKey = i;
    function s(f) {
      let E = 0;
      return Object.keys(f).forEach((b) => {
        Number(isNaN(Number(b))) && E++;
      }), E;
    }
    e.getEnumLength = s;
    function u(f, E) {
      let b = !1;
      if (E.nonWitnessUtxo || E.witnessUtxo) {
        const I = !!E.redeemScript, x = !!E.witnessScript, m = !I || !!E.finalScriptSig, T = !x || !!E.finalScriptWitness, C = !!E.finalScriptSig || !!E.finalScriptWitness;
        b = m && T && C;
      }
      if (b === !1)
        throw new Error(
          `Input #${f} has too much or too little data to clean`
        );
    }
    e.inputCheckUncleanFinalized = u;
    function o(f, E, b, I) {
      throw new Error(
        `Data for ${f} key ${E} is incorrect: Expected ${b} and got ${JSON.stringify(I)}`
      );
    }
    function a(f) {
      return (E, b) => {
        for (const I of Object.keys(E)) {
          const x = E[I], { canAdd: m, canAddToArray: T, check: C, expected: j } = (
            // @ts-ignore
            t[f + "s"][I] || {}
          ), U = !!T;
          if (C)
            if (U) {
              if (!Array.isArray(x) || // @ts-ignore
              b[I] && !Array.isArray(b[I]))
                throw new Error(`Key type ${I} must be an array`);
              x.every(C) || o(f, I, j, x);
              const K = b[I] || [], S = /* @__PURE__ */ new Set();
              if (!x.every((A) => T(K, A, S)))
                throw new Error("Can not add duplicate data to array");
              b[I] = K.concat(x);
            } else {
              if (C(x) || o(f, I, j, x), !m(b, x))
                throw new Error(`Can not add duplicate data to ${f}`);
              b[I] = x;
            }
        }
      };
    }
    e.updateGlobal = a("global"), e.updateInput = a("input"), e.updateOutput = a("output");
    function d(f, E) {
      const b = f.length - 1, I = n(f, b);
      e.updateInput(E, I);
    }
    e.addInputAttributes = d;
    function c(f, E) {
      const b = f.length - 1, I = r(f, b);
      e.updateOutput(E, I);
    }
    e.addOutputAttributes = c;
    function w(f, E) {
      if (!Q.isBuffer(E) || E.length < 4)
        throw new Error("Set Version: Invalid Transaction");
      return E.writeUInt32LE(f, 0), E;
    }
    e.defaultVersionSetter = w;
    function y(f, E) {
      if (!Q.isBuffer(E) || E.length < 4)
        throw new Error("Set Locktime: Invalid Transaction");
      return E.writeUInt32LE(f, E.length - 4), E;
    }
    e.defaultLocktimeSetter = y;
  }(xo)), xo;
}
var Ea;
function w2() {
  if (Ea) return si;
  Ea = 1, Object.defineProperty(si, "__esModule", { value: !0 });
  const e = m2(), t = el(), n = at(), r = tl();
  class i {
    constructor(u) {
      this.inputs = [], this.outputs = [], this.globalMap = {
        unsignedTx: u
      };
    }
    static fromBase64(u, o) {
      const a = Q.from(u, "base64");
      return this.fromBuffer(a, o);
    }
    static fromHex(u, o) {
      const a = Q.from(u, "hex");
      return this.fromBuffer(a, o);
    }
    static fromBuffer(u, o) {
      const a = t.psbtFromBuffer(u, o), d = new this(a.globalMap.unsignedTx);
      return Object.assign(d, a), d;
    }
    toBase64() {
      return this.toBuffer().toString("base64");
    }
    toHex() {
      return this.toBuffer().toString("hex");
    }
    toBuffer() {
      return t.psbtToBuffer(this);
    }
    updateGlobal(u) {
      return r.updateGlobal(u, this.globalMap), this;
    }
    updateInput(u, o) {
      const a = r.checkForInput(this.inputs, u);
      return r.updateInput(o, a), this;
    }
    updateOutput(u, o) {
      const a = r.checkForOutput(this.outputs, u);
      return r.updateOutput(o, a), this;
    }
    addUnknownKeyValToGlobal(u) {
      return r.checkHasKey(
        u,
        this.globalMap.unknownKeyVals,
        r.getEnumLength(n.GlobalTypes)
      ), this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []), this.globalMap.unknownKeyVals.push(u), this;
    }
    addUnknownKeyValToInput(u, o) {
      const a = r.checkForInput(this.inputs, u);
      return r.checkHasKey(
        o,
        a.unknownKeyVals,
        r.getEnumLength(n.InputTypes)
      ), a.unknownKeyVals || (a.unknownKeyVals = []), a.unknownKeyVals.push(o), this;
    }
    addUnknownKeyValToOutput(u, o) {
      const a = r.checkForOutput(this.outputs, u);
      return r.checkHasKey(
        o,
        a.unknownKeyVals,
        r.getEnumLength(n.OutputTypes)
      ), a.unknownKeyVals || (a.unknownKeyVals = []), a.unknownKeyVals.push(o), this;
    }
    addInput(u) {
      this.globalMap.unsignedTx.addInput(u), this.inputs.push({
        unknownKeyVals: []
      });
      const o = u.unknownKeyVals || [], a = this.inputs.length - 1;
      if (!Array.isArray(o))
        throw new Error("unknownKeyVals must be an Array");
      return o.forEach(
        (d) => this.addUnknownKeyValToInput(a, d)
      ), r.addInputAttributes(this.inputs, u), this;
    }
    addOutput(u) {
      this.globalMap.unsignedTx.addOutput(u), this.outputs.push({
        unknownKeyVals: []
      });
      const o = u.unknownKeyVals || [], a = this.outputs.length - 1;
      if (!Array.isArray(o))
        throw new Error("unknownKeyVals must be an Array");
      return o.forEach(
        (d) => this.addUnknownKeyValToOutput(a, d)
      ), r.addOutputAttributes(this.outputs, u), this;
    }
    clearFinalizedInput(u) {
      const o = r.checkForInput(this.inputs, u);
      r.inputCheckUncleanFinalized(u, o);
      for (const a of Object.keys(o))
        [
          "witnessUtxo",
          "nonWitnessUtxo",
          "finalScriptSig",
          "finalScriptWitness",
          "unknownKeyVals"
        ].includes(a) || delete o[a];
      return this;
    }
    combine(...u) {
      const o = e.combine([this].concat(u));
      return Object.assign(this, o), this;
    }
    getTransaction() {
      return this.globalMap.unsignedTx.toBuffer();
    }
  }
  return si.Psbt = i, si;
}
var He = {}, Fe = {}, Aa;
function Ko() {
  if (Aa) return Fe;
  Aa = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.signatureBlocksAction = Fe.checkInputForSig = Fe.pubkeyInScript = Fe.pubkeyPositionInScript = Fe.witnessStackToScriptWitness = Fe.isP2TR = Fe.isP2SHScript = Fe.isP2WSHScript = Fe.isP2WPKH = Fe.isP2PKH = Fe.isP2PK = Fe.isP2MS = void 0;
  const e = Jr(), t = yt(), n = Jn(), r = ar(), i = Qn();
  function s(f) {
    return (E) => {
      try {
        return f({ output: E }), !0;
      } catch {
        return !1;
      }
    };
  }
  Fe.isP2MS = s(i.p2ms), Fe.isP2PK = s(i.p2pk), Fe.isP2PKH = s(i.p2pkh), Fe.isP2WPKH = s(i.p2wpkh), Fe.isP2WSHScript = s(i.p2wsh), Fe.isP2SHScript = s(i.p2sh), Fe.isP2TR = s(i.p2tr);
  function u(f) {
    let E = Q.allocUnsafe(0);
    function b(T) {
      E = Q.concat([E, Q.from(T)]);
    }
    function I(T) {
      const C = E.length, j = e.encodingLength(T);
      E = Q.concat([E, Q.allocUnsafe(j)]), e.encode(T, E, C);
    }
    function x(T) {
      I(T.length), b(T);
    }
    function m(T) {
      I(T.length), T.forEach(x);
    }
    return m(f), E;
  }
  Fe.witnessStackToScriptWitness = u;
  function o(f, E) {
    const b = (0, r.hash160)(f), I = f.slice(1, 33), x = t.decompile(E);
    if (x === null) throw new Error("Unknown script error");
    return x.findIndex((m) => typeof m == "number" ? !1 : m.equals(f) || m.equals(b) || m.equals(I));
  }
  Fe.pubkeyPositionInScript = o;
  function a(f, E) {
    return o(f, E) !== -1;
  }
  Fe.pubkeyInScript = a;
  function d(f, E) {
    return w(f).some(
      (I) => c(I, t.signature.decode, E)
    );
  }
  Fe.checkInputForSig = d;
  function c(f, E, b) {
    const { hashType: I } = E(f), x = [];
    switch (I & n.Transaction.SIGHASH_ANYONECANPAY && x.push("addInput"), I & 31) {
      case n.Transaction.SIGHASH_ALL:
        break;
      case n.Transaction.SIGHASH_SINGLE:
      case n.Transaction.SIGHASH_NONE:
        x.push("addOutput"), x.push("setInputSequence");
        break;
    }
    return x.indexOf(b) === -1;
  }
  Fe.signatureBlocksAction = c;
  function w(f) {
    let E = [];
    if ((f.partialSig || []).length === 0) {
      if (!f.finalScriptSig && !f.finalScriptWitness) return [];
      E = y(f);
    } else
      E = f.partialSig;
    return E.map((b) => b.signature);
  }
  function y(f) {
    const E = f.finalScriptSig ? t.decompile(f.finalScriptSig) || [] : [], b = f.finalScriptWitness ? t.decompile(f.finalScriptWitness) || [] : [];
    return E.concat(b).filter((I) => Q.isBuffer(I) && t.isCanonicalScriptSignature(I)).map((I) => ({ signature: I }));
  }
  return Fe;
}
var ba;
function y2() {
  if (ba) return He;
  ba = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.checkTaprootInputForSigs = He.tapTreeFromList = He.tapTreeToList = He.tweakInternalPubKey = He.checkTaprootOutputFields = He.checkTaprootInputFields = He.isTaprootOutput = He.isTaprootInput = He.serializeTaprootSignature = He.tapScriptFinalizer = He.toXOnly = void 0;
  const e = pt(), t = Jn(), n = Ko(), r = ms(), i = Qn(), s = Ko(), u = (k) => k.length === 32 ? k : k.slice(1, 33);
  He.toXOnly = u;
  function o(k, M, Y) {
    const Z = H(
      M,
      k,
      Y
    );
    try {
      const se = F(M, Z).concat(Z.script).concat(Z.controlBlock);
      return {
        finalScriptWitness: (0, n.witnessStackToScriptWitness)(se)
      };
    } catch (ne) {
      throw new Error(`Can not finalize taproot input #${k}: ${ne}`);
    }
  }
  He.tapScriptFinalizer = o;
  function a(k, M) {
    const Y = M ? Q.from([M]) : Q.from([]);
    return Q.concat([k, Y]);
  }
  He.serializeTaprootSignature = a;
  function d(k) {
    return k && !!(k.tapInternalKey || k.tapMerkleRoot || k.tapLeafScript && k.tapLeafScript.length || k.tapBip32Derivation && k.tapBip32Derivation.length || k.witnessUtxo && (0, n.isP2TR)(k.witnessUtxo.script));
  }
  He.isTaprootInput = d;
  function c(k, M) {
    return k && !!(k.tapInternalKey || k.tapTree || k.tapBip32Derivation && k.tapBip32Derivation.length || M && (0, n.isP2TR)(M));
  }
  He.isTaprootOutput = c;
  function w(k, M, Y) {
    A(k, M, Y), N(k, M, Y);
  }
  He.checkTaprootInputFields = w;
  function y(k, M, Y) {
    _(k, M, Y), f(k, M);
  }
  He.checkTaprootOutputFields = y;
  function f(k, M) {
    if (!M.tapTree && !M.tapInternalKey) return;
    const Y = M.tapInternalKey || k.tapInternalKey, Z = M.tapTree || k.tapTree;
    if (Y) {
      const { script: ne } = k, se = E(Y, Z);
      if (ne && !ne.equals(se))
        throw new Error("Error adding output. Script or address missmatch.");
    }
  }
  function E(k, M) {
    const Y = M && x(M.leaves), { output: Z } = (0, i.p2tr)({
      internalPubkey: k,
      scriptTree: Y
    });
    return Z;
  }
  function b(k, M) {
    const Y = M.tapInternalKey, Z = Y && (0, r.tweakKey)(Y, M.tapMerkleRoot);
    if (!Z)
      throw new Error(
        `Cannot tweak tap internal key for input #${k}. Public key: ${Y && Y.toString("hex")}`
      );
    return Z.x;
  }
  He.tweakInternalPubKey = b;
  function I(k) {
    if (!(0, e.isTaptree)(k))
      throw new Error(
        "Cannot convert taptree to tapleaf list. Expecting a tapree structure."
      );
    return U(k);
  }
  He.tapTreeToList = I;
  function x(k = []) {
    return k.length === 1 && k[0].depth === 0 ? {
      output: k[0].script,
      version: k[0].leafVersion
    } : K(k);
  }
  He.tapTreeFromList = x;
  function m(k, M) {
    return C(k).some(
      (Z) => (0, s.signatureBlocksAction)(Z, T, M)
    );
  }
  He.checkTaprootInputForSigs = m;
  function T(k) {
    return {
      signature: k.slice(0, 64),
      hashType: k.slice(64)[0] || t.Transaction.SIGHASH_DEFAULT
    };
  }
  function C(k) {
    const M = [];
    if (k.tapKeySig && M.push(k.tapKeySig), k.tapScriptSig && M.push(...k.tapScriptSig.map((Y) => Y.signature)), !M.length) {
      const Y = j(k.finalScriptWitness);
      Y && M.push(Y);
    }
    return M;
  }
  function j(k) {
    if (!k) return;
    const M = k.slice(2);
    if (M.length === 64 || M.length === 65) return M;
  }
  function U(k, M = [], Y = 0) {
    if (Y > r.MAX_TAPTREE_DEPTH)
      throw new Error("Max taptree depth exceeded.");
    return k ? (0, e.isTapleaf)(k) ? (M.push({
      depth: Y,
      leafVersion: k.version || r.LEAF_VERSION_TAPSCRIPT,
      script: k.output
    }), M) : (k[0] && U(k[0], M, Y + 1), k[1] && U(k[1], M, Y + 1), M) : [];
  }
  function K(k) {
    let M;
    for (const Y of k)
      if (M = S(Y, M), !M) throw new Error("No room left to insert tapleaf in tree");
    return M;
  }
  function S(k, M, Y = 0) {
    if (Y > r.MAX_TAPTREE_DEPTH)
      throw new Error("Max taptree depth exceeded.");
    if (k.depth === Y)
      return M ? void 0 : {
        output: k.script,
        version: k.leafVersion
      };
    if ((0, e.isTapleaf)(M)) return;
    const Z = S(k, M && M[0], Y + 1);
    if (Z) return [Z, M && M[1]];
    const ne = S(k, M && M[1], Y + 1);
    if (ne) return [M && M[0], ne];
  }
  function A(k, M, Y) {
    const Z = d(k) && G(M), ne = G(k) && d(M), se = k === M && d(M) && G(M);
    if (Z || ne || se)
      throw new Error(
        `Invalid arguments for Psbt.${Y}. Cannot use both taproot and non-taproot fields.`
      );
  }
  function _(k, M, Y) {
    const Z = c(k) && G(M), ne = G(k) && c(M), se = k === M && c(M) && G(M);
    if (Z || ne || se)
      throw new Error(
        `Invalid arguments for Psbt.${Y}. Cannot use both taproot and non-taproot fields.`
      );
  }
  function N(k, M, Y) {
    if (M.tapMerkleRoot) {
      const Z = (M.tapLeafScript || []).every(
        (se) => P(se, M.tapMerkleRoot)
      ), ne = (k.tapLeafScript || []).every(
        (se) => P(se, M.tapMerkleRoot)
      );
      if (!Z || !ne)
        throw new Error(
          `Invalid arguments for Psbt.${Y}. Tapleaf not part of taptree.`
        );
    } else if (k.tapMerkleRoot && !(M.tapLeafScript || []).every(
      (ne) => P(ne, k.tapMerkleRoot)
    ))
      throw new Error(
        `Invalid arguments for Psbt.${Y}. Tapleaf not part of taptree.`
      );
  }
  function P(k, M) {
    if (!M) return !0;
    const Y = (0, r.tapleafHash)({
      output: k.script,
      version: k.leafVersion
    });
    return (0, r.rootHashFromPath)(
      k.controlBlock,
      Y
    ).equals(M);
  }
  function F(k, M) {
    const Y = (0, r.tapleafHash)({
      output: M.script,
      version: M.leafVersion
    });
    return (k.tapScriptSig || []).filter((Z) => Z.leafHash.equals(Y)).map((Z) => W(M.script, Z)).sort((Z, ne) => ne.positionInScript - Z.positionInScript).map((Z) => Z.signature);
  }
  function W(k, M) {
    return Object.assign(
      {
        positionInScript: (0, n.pubkeyPositionInScript)(
          M.pubkey,
          k
        )
      },
      M
    );
  }
  function H(k, M, Y) {
    if (!k.tapScriptSig || !k.tapScriptSig.length)
      throw new Error(
        `Can not finalize taproot input #${M}. No tapleaf script signature provided.`
      );
    const Z = (k.tapLeafScript || []).sort((ne, se) => ne.controlBlock.length - se.controlBlock.length).find(
      (ne) => $(ne, k.tapScriptSig, Y)
    );
    if (!Z)
      throw new Error(
        `Can not finalize taproot input #${M}. Signature for tapleaf script not found.`
      );
    return Z;
  }
  function $(k, M, Y) {
    const Z = (0, r.tapleafHash)({
      output: k.script,
      version: k.leafVersion
    });
    return (!Y || Y.equals(Z)) && M.find((se) => se.leafHash.equals(Z)) !== void 0;
  }
  function G(k) {
    return k && !!(k.redeemScript || k.witnessScript || k.bip32Derivation && k.bip32Derivation.length);
  }
  return He;
}
var va;
function E2() {
  if (va) return Fn;
  va = 1, Object.defineProperty(Fn, "__esModule", { value: !0 }), Fn.Psbt = void 0;
  const e = w2(), t = Jr(), n = tl(), r = ws(), i = ji(), s = Ht(), u = Qn(), o = ms(), a = yt(), d = Jn(), c = y2(), w = Ko(), y = {
    /**
     * A bitcoinjs Network object. This is only used if you pass an `address`
     * parameter to addOutput. Otherwise it is not needed and can be left default.
     */
    network: s.bitcoin,
    /**
     * When extractTransaction is called, the fee rate is checked.
     * THIS IS NOT TO BE RELIED ON.
     * It is only here as a last ditch effort to prevent sending a 500 BTC fee etc.
     */
    maximumFeeRate: 5e3
    // satoshi per byte
  };
  class f {
    static fromBase64(B, p = {}) {
      const l = Q.from(B, "base64");
      return this.fromBuffer(l, p);
    }
    static fromHex(B, p = {}) {
      const l = Q.from(B, "hex");
      return this.fromBuffer(l, p);
    }
    static fromBuffer(B, p = {}) {
      const l = e.Psbt.fromBuffer(B, E), h = new f(p, l);
      return N(h.__CACHE.__TX, h.__CACHE), h;
    }
    constructor(B = {}, p = new e.Psbt(new b())) {
      this.data = p, this.opts = Object.assign({}, y, B), this.__CACHE = {
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
      const l = (h, O, L, V) => Object.defineProperty(h, O, {
        enumerable: L,
        writable: V
      });
      l(this, "__CACHE", !1, !0), l(this, "opts", !1, !0);
    }
    get inputCount() {
      return this.data.inputs.length;
    }
    get version() {
      return this.__CACHE.__TX.version;
    }
    set version(B) {
      this.setVersion(B);
    }
    get locktime() {
      return this.__CACHE.__TX.locktime;
    }
    set locktime(B) {
      this.setLocktime(B);
    }
    get txInputs() {
      return this.__CACHE.__TX.ins.map((B) => ({
        hash: (0, i.cloneBuffer)(B.hash),
        index: B.index,
        sequence: B.sequence
      }));
    }
    get txOutputs() {
      return this.__CACHE.__TX.outs.map((B) => {
        let p;
        try {
          p = (0, r.fromOutputScript)(
            B.script,
            this.opts.network
          );
        } catch {
        }
        return {
          script: (0, i.cloneBuffer)(B.script),
          value: B.value,
          address: p
        };
      });
    }
    combine(...B) {
      return this.data.combine(...B.map((p) => p.data)), this;
    }
    clone() {
      const B = f.fromBuffer(this.data.toBuffer());
      return B.opts = JSON.parse(JSON.stringify(this.opts)), B;
    }
    setMaximumFeeRate(B) {
      j(B), this.opts.maximumFeeRate = B;
    }
    setVersion(B) {
      j(B), K(this.data.inputs, "setVersion");
      const p = this.__CACHE;
      return p.__TX.version = B, p.__EXTRACTED_TX = void 0, this;
    }
    setLocktime(B) {
      j(B), K(this.data.inputs, "setLocktime");
      const p = this.__CACHE;
      return p.__TX.locktime = B, p.__EXTRACTED_TX = void 0, this;
    }
    setInputSequence(B, p) {
      j(p), K(this.data.inputs, "setInputSequence");
      const l = this.__CACHE;
      if (l.__TX.ins.length <= B)
        throw new Error("Input index too high");
      return l.__TX.ins[B].sequence = p, l.__EXTRACTED_TX = void 0, this;
    }
    addInputs(B) {
      return B.forEach((p) => this.addInput(p)), this;
    }
    addInput(B) {
      if (arguments.length > 1 || !B || B.hash === void 0 || B.index === void 0)
        throw new Error(
          "Invalid arguments for Psbt.addInput. Requires single object with at least [hash] and [index]"
        );
      (0, c.checkTaprootInputFields)(B, B, "addInput"), K(this.data.inputs, "addInput"), B.witnessScript && Ye(B.witnessScript);
      const p = this.__CACHE;
      this.data.addInput(B);
      const l = p.__TX.ins[p.__TX.ins.length - 1];
      P(p, l);
      const h = this.data.inputs.length - 1, O = this.data.inputs[h];
      return O.nonWitnessUtxo && rt(this.__CACHE, O, h), p.__FEE = void 0, p.__FEE_RATE = void 0, p.__EXTRACTED_TX = void 0, this;
    }
    addOutputs(B) {
      return B.forEach((p) => this.addOutput(p)), this;
    }
    addOutput(B) {
      if (arguments.length > 1 || !B || B.value === void 0 || B.address === void 0 && B.script === void 0)
        throw new Error(
          "Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]"
        );
      K(this.data.inputs, "addOutput");
      const { address: p } = B;
      if (typeof p == "string") {
        const { network: h } = this.opts, O = (0, r.toOutputScript)(p, h);
        B = Object.assign({}, B, { script: O });
      }
      (0, c.checkTaprootOutputFields)(B, B, "addOutput");
      const l = this.__CACHE;
      return this.data.addOutput(B), l.__FEE = void 0, l.__FEE_RATE = void 0, l.__EXTRACTED_TX = void 0, this;
    }
    extractTransaction(B) {
      if (!this.data.inputs.every(T)) throw new Error("Not finalized");
      const p = this.__CACHE;
      if (B || U(this, p, this.opts), p.__EXTRACTED_TX) return p.__EXTRACTED_TX;
      const l = p.__TX.clone();
      return Ke(this.data.inputs, l, p, !0), l;
    }
    getFeeRate() {
      return $(
        "__FEE_RATE",
        "fee rate",
        this.data.inputs,
        this.__CACHE
      );
    }
    getFee() {
      return $("__FEE", "fee", this.data.inputs, this.__CACHE);
    }
    finalizeAllInputs() {
      return (0, n.checkForInput)(this.data.inputs, 0), lt(this.data.inputs.length).forEach((B) => this.finalizeInput(B)), this;
    }
    finalizeInput(B, p) {
      const l = (0, n.checkForInput)(this.data.inputs, B);
      return (0, c.isTaprootInput)(l) ? this._finalizeTaprootInput(
        B,
        l,
        void 0,
        p
      ) : this._finalizeInput(B, l, p);
    }
    finalizeTaprootInput(B, p, l = c.tapScriptFinalizer) {
      const h = (0, n.checkForInput)(this.data.inputs, B);
      if ((0, c.isTaprootInput)(h))
        return this._finalizeTaprootInput(
          B,
          h,
          p,
          l
        );
      throw new Error(`Cannot finalize input #${B}. Not Taproot.`);
    }
    _finalizeInput(B, p, l = G) {
      const { script: h, isP2SH: O, isP2WSH: L, isSegwit: V } = xe(
        B,
        p,
        this.__CACHE
      );
      if (!h) throw new Error(`No script found for input #${B}`);
      S(p);
      const { finalScriptSig: z, finalScriptWitness: ie } = l(
        B,
        p,
        h,
        V,
        O,
        L
      );
      if (z && this.data.updateInput(B, { finalScriptSig: z }), ie && this.data.updateInput(B, { finalScriptWitness: ie }), !z && !ie)
        throw new Error(`Unknown error finalizing input #${B}`);
      return this.data.clearFinalizedInput(B), this;
    }
    _finalizeTaprootInput(B, p, l, h = c.tapScriptFinalizer) {
      if (!p.witnessUtxo)
        throw new Error(
          `Cannot finalize input #${B}. Missing withness utxo.`
        );
      if (p.tapKeySig) {
        const O = u.p2tr({
          output: p.witnessUtxo.script,
          signature: p.tapKeySig
        }), L = (0, w.witnessStackToScriptWitness)(
          O.witness
        );
        this.data.updateInput(B, { finalScriptWitness: L });
      } else {
        const { finalScriptWitness: O } = h(
          B,
          p,
          l
        );
        this.data.updateInput(B, { finalScriptWitness: O });
      }
      return this.data.clearFinalizedInput(B), this;
    }
    getInputType(B) {
      const p = (0, n.checkForInput)(this.data.inputs, B), l = Se(B, p, this.__CACHE), h = At(
        l,
        B,
        "input",
        p.redeemScript || Mt(p.finalScriptSig),
        p.witnessScript || Qt(p.finalScriptWitness)
      ), O = h.type === "raw" ? "" : h.type + "-", L = Tt(h.meaningfulScript);
      return O + L;
    }
    inputHasPubkey(B, p) {
      const l = (0, n.checkForInput)(this.data.inputs, B);
      return St(p, l, B, this.__CACHE);
    }
    inputHasHDKey(B, p) {
      const l = (0, n.checkForInput)(this.data.inputs, B), h = C(p);
      return !!l.bip32Derivation && l.bip32Derivation.some(h);
    }
    outputHasPubkey(B, p) {
      const l = (0, n.checkForOutput)(this.data.outputs, B);
      return cr(p, l, B, this.__CACHE);
    }
    outputHasHDKey(B, p) {
      const l = (0, n.checkForOutput)(this.data.outputs, B), h = C(p);
      return !!l.bip32Derivation && l.bip32Derivation.some(h);
    }
    validateSignaturesOfAllInputs(B) {
      return (0, n.checkForInput)(this.data.inputs, 0), lt(this.data.inputs.length).map(
        (l) => this.validateSignaturesOfInput(l, B)
      ).reduce((l, h) => h === !0 && l, !0);
    }
    validateSignaturesOfInput(B, p, l) {
      const h = this.data.inputs[B];
      return (0, c.isTaprootInput)(h) ? this.validateSignaturesOfTaprootInput(
        B,
        p,
        l
      ) : this._validateSignaturesOfInput(B, p, l);
    }
    _validateSignaturesOfInput(B, p, l) {
      const h = this.data.inputs[B], O = (h || {}).partialSig;
      if (!h || !O || O.length < 1)
        throw new Error("No signatures to validate");
      if (typeof p != "function")
        throw new Error("Need validator function to validate signatures");
      const L = l ? O.filter((fe) => fe.pubkey.equals(l)) : O;
      if (L.length < 1) throw new Error("No signatures for this pubkey");
      const V = [];
      let z, ie, ce;
      for (const fe of L) {
        const ye = a.signature.decode(fe.signature), { hash: we, script: _e } = ce !== ye.hashType ? Y(
          B,
          Object.assign({}, h, { sighashType: ye.hashType }),
          this.__CACHE,
          !0
        ) : { hash: z, script: ie };
        ce = ye.hashType, z = we, ie = _e, A(fe.pubkey, _e, "verify"), V.push(p(fe.pubkey, we, ye.signature));
      }
      return V.every((fe) => fe === !0);
    }
    validateSignaturesOfTaprootInput(B, p, l) {
      const h = this.data.inputs[B], O = (h || {}).tapKeySig, L = (h || {}).tapScriptSig;
      if (!h && !O && !(L && !L.length))
        throw new Error("No signatures to validate");
      if (typeof p != "function")
        throw new Error("Need validator function to validate signatures");
      l = l && (0, c.toXOnly)(l);
      const V = l ? pe(
        B,
        h,
        this.data.inputs,
        l,
        this.__CACHE
      ) : Z(
        B,
        h,
        this.data.inputs,
        this.__CACHE
      );
      if (!V.length) throw new Error("No signatures for this pubkey");
      const z = V.find((ce) => !ce.leafHash);
      let ie = 0;
      if (O && z) {
        if (!p(
          z.pubkey,
          z.hash,
          se(O)
        )) return !1;
        ie++;
      }
      if (L)
        for (const ce of L) {
          const fe = V.find((ye) => ce.pubkey.equals(ye.pubkey));
          if (fe) {
            if (!p(
              ce.pubkey,
              fe.hash,
              se(ce.signature)
            )) return !1;
            ie++;
          }
        }
      return ie > 0;
    }
    signAllInputsHD(B, p = [d.Transaction.SIGHASH_ALL]) {
      if (!B || !B.publicKey || !B.fingerprint)
        throw new Error("Need HDSigner to sign input");
      const l = [];
      for (const h of lt(this.data.inputs.length))
        try {
          this.signInputHD(h, B, p), l.push(!0);
        } catch {
          l.push(!1);
        }
      if (l.every((h) => h === !1))
        throw new Error("No inputs were signed");
      return this;
    }
    signAllInputsHDAsync(B, p = [d.Transaction.SIGHASH_ALL]) {
      return new Promise((l, h) => {
        if (!B || !B.publicKey || !B.fingerprint)
          return h(new Error("Need HDSigner to sign input"));
        const O = [], L = [];
        for (const V of lt(this.data.inputs.length))
          L.push(
            this.signInputHDAsync(V, B, p).then(
              () => {
                O.push(!0);
              },
              () => {
                O.push(!1);
              }
            )
          );
        return Promise.all(L).then(() => {
          if (O.every((V) => V === !1))
            return h(new Error("No inputs were signed"));
          l();
        });
      });
    }
    signInputHD(B, p, l = [d.Transaction.SIGHASH_ALL]) {
      if (!p || !p.publicKey || !p.fingerprint)
        throw new Error("Need HDSigner to sign input");
      return $e(B, this.data.inputs, p).forEach((O) => this.signInput(B, O, l)), this;
    }
    signInputHDAsync(B, p, l = [d.Transaction.SIGHASH_ALL]) {
      return new Promise((h, O) => {
        if (!p || !p.publicKey || !p.fingerprint)
          return O(new Error("Need HDSigner to sign input"));
        const V = $e(B, this.data.inputs, p).map(
          (z) => this.signInputAsync(B, z, l)
        );
        return Promise.all(V).then(() => {
          h();
        }).catch(O);
      });
    }
    signAllInputs(B, p) {
      if (!B || !B.publicKey)
        throw new Error("Need Signer to sign input");
      const l = [];
      for (const h of lt(this.data.inputs.length))
        try {
          this.signInput(h, B, p), l.push(!0);
        } catch {
          l.push(!1);
        }
      if (l.every((h) => h === !1))
        throw new Error("No inputs were signed");
      return this;
    }
    signAllInputsAsync(B, p) {
      return new Promise((l, h) => {
        if (!B || !B.publicKey)
          return h(new Error("Need Signer to sign input"));
        const O = [], L = [];
        for (const [V] of this.data.inputs.entries())
          L.push(
            this.signInputAsync(V, B, p).then(
              () => {
                O.push(!0);
              },
              () => {
                O.push(!1);
              }
            )
          );
        return Promise.all(L).then(() => {
          if (O.every((V) => V === !1))
            return h(new Error("No inputs were signed"));
          l();
        });
      });
    }
    signInput(B, p, l) {
      if (!p || !p.publicKey)
        throw new Error("Need Signer to sign input");
      const h = (0, n.checkForInput)(this.data.inputs, B);
      return (0, c.isTaprootInput)(h) ? this._signTaprootInput(
        B,
        h,
        p,
        void 0,
        l
      ) : this._signInput(B, p, l);
    }
    signTaprootInput(B, p, l, h) {
      if (!p || !p.publicKey)
        throw new Error("Need Signer to sign input");
      const O = (0, n.checkForInput)(this.data.inputs, B);
      if ((0, c.isTaprootInput)(O))
        return this._signTaprootInput(
          B,
          O,
          p,
          l,
          h
        );
      throw new Error(`Input #${B} is not of type Taproot.`);
    }
    _signInput(B, p, l = [d.Transaction.SIGHASH_ALL]) {
      const { hash: h, sighashType: O } = M(
        this.data.inputs,
        B,
        p.publicKey,
        this.__CACHE,
        l
      ), L = [
        {
          pubkey: p.publicKey,
          signature: a.signature.encode(p.sign(h), O)
        }
      ];
      return this.data.updateInput(B, { partialSig: L }), this;
    }
    _signTaprootInput(B, p, l, h, O = [d.Transaction.SIGHASH_DEFAULT]) {
      const L = this.checkTaprootHashesForSig(
        B,
        p,
        l,
        h,
        O
      ), V = L.filter((ie) => !ie.leafHash).map(
        (ie) => (0, c.serializeTaprootSignature)(
          l.signSchnorr(ie.hash),
          p.sighashType
        )
      )[0], z = L.filter((ie) => !!ie.leafHash).map((ie) => ({
        pubkey: (0, c.toXOnly)(l.publicKey),
        signature: (0, c.serializeTaprootSignature)(
          l.signSchnorr(ie.hash),
          p.sighashType
        ),
        leafHash: ie.leafHash
      }));
      return V && this.data.updateInput(B, { tapKeySig: V }), z.length && this.data.updateInput(B, { tapScriptSig: z }), this;
    }
    signInputAsync(B, p, l) {
      return Promise.resolve().then(() => {
        if (!p || !p.publicKey)
          throw new Error("Need Signer to sign input");
        const h = (0, n.checkForInput)(this.data.inputs, B);
        return (0, c.isTaprootInput)(h) ? this._signTaprootInputAsync(
          B,
          h,
          p,
          void 0,
          l
        ) : this._signInputAsync(B, p, l);
      });
    }
    signTaprootInputAsync(B, p, l, h) {
      return Promise.resolve().then(() => {
        if (!p || !p.publicKey)
          throw new Error("Need Signer to sign input");
        const O = (0, n.checkForInput)(this.data.inputs, B);
        if ((0, c.isTaprootInput)(O))
          return this._signTaprootInputAsync(
            B,
            O,
            p,
            l,
            h
          );
        throw new Error(`Input #${B} is not of type Taproot.`);
      });
    }
    _signInputAsync(B, p, l = [d.Transaction.SIGHASH_ALL]) {
      const { hash: h, sighashType: O } = M(
        this.data.inputs,
        B,
        p.publicKey,
        this.__CACHE,
        l
      );
      return Promise.resolve(p.sign(h)).then((L) => {
        const V = [
          {
            pubkey: p.publicKey,
            signature: a.signature.encode(L, O)
          }
        ];
        this.data.updateInput(B, { partialSig: V });
      });
    }
    async _signTaprootInputAsync(B, p, l, h, O = [d.Transaction.SIGHASH_DEFAULT]) {
      const L = this.checkTaprootHashesForSig(
        B,
        p,
        l,
        h,
        O
      ), V = [], z = L.filter((ce) => !ce.leafHash)[0];
      if (z) {
        const ce = Promise.resolve(
          l.signSchnorr(z.hash)
        ).then((fe) => ({
          tapKeySig: (0, c.serializeTaprootSignature)(
            fe,
            p.sighashType
          )
        }));
        V.push(ce);
      }
      const ie = L.filter((ce) => !!ce.leafHash);
      if (ie.length) {
        const ce = ie.map((fe) => Promise.resolve(l.signSchnorr(fe.hash)).then(
          (ye) => ({ tapScriptSig: [
            {
              pubkey: (0, c.toXOnly)(l.publicKey),
              signature: (0, c.serializeTaprootSignature)(
                ye,
                p.sighashType
              ),
              leafHash: fe.leafHash
            }
          ] })
        ));
        V.push(...ce);
      }
      return Promise.all(V).then((ce) => {
        ce.forEach((fe) => this.data.updateInput(B, fe));
      });
    }
    checkTaprootHashesForSig(B, p, l, h, O) {
      if (typeof l.signSchnorr != "function")
        throw new Error(
          `Need Schnorr Signer to sign taproot input #${B}.`
        );
      const L = pe(
        B,
        p,
        this.data.inputs,
        l.publicKey,
        this.__CACHE,
        h,
        O
      );
      if (!L || !L.length)
        throw new Error(
          `Can not sign for input #${B} with the key ${l.publicKey.toString(
            "hex"
          )}`
        );
      return L;
    }
    toBuffer() {
      return x(this.__CACHE), this.data.toBuffer();
    }
    toHex() {
      return x(this.__CACHE), this.data.toHex();
    }
    toBase64() {
      return x(this.__CACHE), this.data.toBase64();
    }
    updateGlobal(B) {
      return this.data.updateGlobal(B), this;
    }
    updateInput(B, p) {
      return p.witnessScript && Ye(p.witnessScript), (0, c.checkTaprootInputFields)(
        this.data.inputs[B],
        p,
        "updateInput"
      ), this.data.updateInput(B, p), p.nonWitnessUtxo && rt(
        this.__CACHE,
        this.data.inputs[B],
        B
      ), this;
    }
    updateOutput(B, p) {
      const l = this.data.outputs[B];
      return (0, c.checkTaprootOutputFields)(
        l,
        p,
        "updateOutput"
      ), this.data.updateOutput(B, p), this;
    }
    addUnknownKeyValToGlobal(B) {
      return this.data.addUnknownKeyValToGlobal(B), this;
    }
    addUnknownKeyValToInput(B, p) {
      return this.data.addUnknownKeyValToInput(B, p), this;
    }
    addUnknownKeyValToOutput(B, p) {
      return this.data.addUnknownKeyValToOutput(B, p), this;
    }
    clearFinalizedInput(B) {
      return this.data.clearFinalizedInput(B), this;
    }
  }
  Fn.Psbt = f;
  const E = (J) => new b(J);
  class b {
    constructor(B = Q.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
      this.tx = d.Transaction.fromBuffer(B), _(this.tx), Object.defineProperty(this, "tx", {
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
    addInput(B) {
      if (B.hash === void 0 || B.index === void 0 || !Q.isBuffer(B.hash) && typeof B.hash != "string" || typeof B.index != "number")
        throw new Error("Error adding input.");
      const p = typeof B.hash == "string" ? (0, i.reverseBuffer)(Q.from(B.hash, "hex")) : B.hash;
      this.tx.addInput(p, B.index, B.sequence);
    }
    addOutput(B) {
      if (B.script === void 0 || B.value === void 0 || !Q.isBuffer(B.script) || typeof B.value != "number")
        throw new Error("Error adding output.");
      this.tx.addOutput(B.script, B.value);
    }
    toBuffer() {
      return this.tx.toBuffer();
    }
  }
  function I(J, B, p) {
    switch (p) {
      case "pubkey":
      case "pubkeyhash":
      case "witnesspubkeyhash":
        return m(1, J.partialSig);
      case "multisig":
        const l = u.p2ms({ output: B });
        return m(l.m, J.partialSig, l.pubkeys);
      default:
        return !1;
    }
  }
  function x(J) {
    if (J.__UNSAFE_SIGN_NONSEGWIT !== !1)
      throw new Error("Not BIP174 compliant, can not export");
  }
  function m(J, B, p) {
    if (!B) return !1;
    let l;
    if (p ? l = p.map((h) => {
      const O = Or(h);
      return B.find((L) => L.pubkey.equals(O));
    }).filter((h) => !!h) : l = B, l.length > J) throw new Error("Too many signatures");
    return l.length === J;
  }
  function T(J) {
    return !!J.finalScriptSig || !!J.finalScriptWitness;
  }
  function C(J) {
    return (B) => !(!B.masterFingerprint.equals(J.fingerprint) || !J.derivePath(B.path).publicKey.equals(B.pubkey));
  }
  function j(J) {
    if (typeof J != "number" || J !== Math.floor(J) || J > 4294967295 || J < 0)
      throw new Error("Invalid 32 bit integer");
  }
  function U(J, B, p) {
    const l = B.__FEE_RATE || J.getFeeRate(), h = B.__EXTRACTED_TX.virtualSize(), O = l * h;
    if (l >= p.maximumFeeRate)
      throw new Error(
        `Warning: You are paying around ${(O / 1e8).toFixed(8)} in fees, which is ${l} satoshi per byte for a transaction with a VSize of ${h} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`
      );
  }
  function K(J, B) {
    J.forEach((p) => {
      if ((0, c.isTaprootInput)(p) ? (0, c.checkTaprootInputForSigs)(p, B) : (0, w.checkInputForSig)(p, B))
        throw new Error("Can not modify transaction, signatures exist.");
    });
  }
  function S(J) {
    if (!J.sighashType || !J.partialSig) return;
    const { partialSig: B, sighashType: p } = J;
    B.forEach((l) => {
      const { hashType: h } = a.signature.decode(l.signature);
      if (p !== h)
        throw new Error("Signature sighash does not match input sighash type");
    });
  }
  function A(J, B, p) {
    if (!(0, w.pubkeyInScript)(J, B))
      throw new Error(
        `Can not ${p} for this input with the key ${J.toString("hex")}`
      );
  }
  function _(J) {
    if (!J.ins.every(
      (p) => p.script && p.script.length === 0 && p.witness && p.witness.length === 0
    ))
      throw new Error("Format Error: Transaction ScriptSigs are not empty");
  }
  function N(J, B) {
    J.ins.forEach((p) => {
      P(B, p);
    });
  }
  function P(J, B) {
    const p = (0, i.reverseBuffer)(Q.from(B.hash)).toString("hex") + ":" + B.index;
    if (J.__TX_IN_CACHE[p]) throw new Error("Duplicate input detected.");
    J.__TX_IN_CACHE[p] = 1;
  }
  function F(J, B) {
    return (p, l, h, O) => {
      const L = J({
        redeem: { output: h }
      }).output;
      if (!l.equals(L))
        throw new Error(
          `${B} for ${O} #${p} doesn't match the scriptPubKey in the prevout`
        );
    };
  }
  const W = F(u.p2sh, "Redeem script"), H = F(
    u.p2wsh,
    "Witness script"
  );
  function $(J, B, p, l) {
    if (!p.every(T))
      throw new Error(`PSBT must be finalized to calculate ${B}`);
    if (J === "__FEE_RATE" && l.__FEE_RATE) return l.__FEE_RATE;
    if (J === "__FEE" && l.__FEE) return l.__FEE;
    let h, O = !0;
    if (l.__EXTRACTED_TX ? (h = l.__EXTRACTED_TX, O = !1) : h = l.__TX.clone(), Ke(p, h, l, O), J === "__FEE_RATE") return l.__FEE_RATE;
    if (J === "__FEE") return l.__FEE;
  }
  function G(J, B, p, l, h, O) {
    const L = Tt(p);
    if (!I(B, p, L))
      throw new Error(`Can not finalize input #${J}`);
    return k(
      p,
      L,
      B.partialSig,
      l,
      h,
      O
    );
  }
  function k(J, B, p, l, h, O) {
    let L, V;
    const z = ge(J, B, p), ie = O ? u.p2wsh({ redeem: z }) : null, ce = h ? u.p2sh({ redeem: ie || z }) : null;
    return l ? (ie ? V = (0, w.witnessStackToScriptWitness)(
      ie.witness
    ) : V = (0, w.witnessStackToScriptWitness)(
      z.witness
    ), ce && (L = ce.input)) : ce ? L = ce.input : L = z.input, {
      finalScriptSig: L,
      finalScriptWitness: V
    };
  }
  function M(J, B, p, l, h) {
    const O = (0, n.checkForInput)(J, B), { hash: L, sighashType: V, script: z } = Y(
      B,
      O,
      l,
      !1,
      h
    );
    return A(p, z, "sign"), {
      hash: L,
      sighashType: V
    };
  }
  function Y(J, B, p, l, h) {
    const O = p.__TX, L = B.sighashType || d.Transaction.SIGHASH_ALL;
    ae(L, h);
    let V, z;
    if (B.nonWitnessUtxo) {
      const fe = Ue(
        p,
        B,
        J
      ), ye = O.ins[J].hash, we = fe.getHash();
      if (!ye.equals(we))
        throw new Error(
          `Non-witness UTXO hash for input #${J} doesn't match the hash specified in the prevout`
        );
      const _e = O.ins[J].index;
      z = fe.outs[_e];
    } else if (B.witnessUtxo)
      z = B.witnessUtxo;
    else
      throw new Error("Need a Utxo input item for signing");
    const { meaningfulScript: ie, type: ce } = At(
      z.script,
      J,
      "input",
      B.redeemScript,
      B.witnessScript
    );
    if (["p2sh-p2wsh", "p2wsh"].indexOf(ce) >= 0)
      V = O.hashForWitnessV0(
        J,
        ie,
        z.value,
        L
      );
    else if ((0, w.isP2WPKH)(ie)) {
      const fe = u.p2pkh({
        hash: ie.slice(2)
      }).output;
      V = O.hashForWitnessV0(
        J,
        fe,
        z.value,
        L
      );
    } else {
      if (B.nonWitnessUtxo === void 0 && p.__UNSAFE_SIGN_NONSEGWIT === !1)
        throw new Error(
          `Input #${J} has witnessUtxo but non-segwit script: ${ie.toString("hex")}`
        );
      !l && p.__UNSAFE_SIGN_NONSEGWIT !== !1 && console.warn(
        `Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as Psbt's predecessor (TransactionBuilder - now removed) when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.
*********************
PROCEED WITH CAUTION!
*********************`
      ), V = O.hashForSignature(
        J,
        ie,
        L
      );
    }
    return {
      script: ie,
      sighashType: L,
      hash: V
    };
  }
  function Z(J, B, p, l) {
    const h = [];
    if (B.tapInternalKey) {
      const L = ne(J, B, l);
      L && h.push(L);
    }
    if (B.tapScriptSig) {
      const L = B.tapScriptSig.map((V) => V.pubkey);
      h.push(...L);
    }
    return h.map(
      (L) => pe(J, B, p, L, l)
    ).flat();
  }
  function ne(J, B, p) {
    const { script: l } = tt(J, B, p);
    return (0, w.isP2TR)(l) ? l.subarray(2, 34) : null;
  }
  function se(J) {
    return J.length === 64 ? J : J.subarray(0, 64);
  }
  function pe(J, B, p, l, h, O, L) {
    const V = h.__TX, z = B.sighashType || d.Transaction.SIGHASH_DEFAULT;
    ae(z, L);
    const ie = p.map(
      (_e, qe) => tt(qe, _e, h)
    ), ce = ie.map((_e) => _e.script), fe = ie.map((_e) => _e.value), ye = [];
    if (B.tapInternalKey && !O) {
      const _e = ne(J, B, h) || Q.from([]);
      if ((0, c.toXOnly)(l).equals(_e)) {
        const qe = V.hashForWitnessV1(
          J,
          ce,
          fe,
          z
        );
        ye.push({ pubkey: l, hash: qe });
      }
    }
    const we = (B.tapLeafScript || []).filter((_e) => (0, w.pubkeyInScript)(l, _e.script)).map((_e) => {
      const qe = (0, o.tapleafHash)({
        output: _e.script,
        version: _e.leafVersion
      });
      return Object.assign({ hash: qe }, _e);
    }).filter(
      (_e) => !O || O.equals(_e.hash)
    ).map((_e) => {
      const qe = V.hashForWitnessV1(
        J,
        ce,
        fe,
        z,
        _e.hash
      );
      return {
        pubkey: l,
        hash: qe,
        leafHash: _e.hash
      };
    });
    return ye.concat(we);
  }
  function ae(J, B) {
    if (B && B.indexOf(J) < 0) {
      const p = je(J);
      throw new Error(
        `Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: ${p}`
      );
    }
  }
  function ge(J, B, p) {
    let l;
    switch (B) {
      case "multisig":
        const h = Je(J, p);
        l = u.p2ms({
          output: J,
          signatures: h
        });
        break;
      case "pubkey":
        l = u.p2pk({
          output: J,
          signature: p[0].signature
        });
        break;
      case "pubkeyhash":
        l = u.p2pkh({
          output: J,
          pubkey: p[0].pubkey,
          signature: p[0].signature
        });
        break;
      case "witnesspubkeyhash":
        l = u.p2wpkh({
          output: J,
          pubkey: p[0].pubkey,
          signature: p[0].signature
        });
        break;
    }
    return l;
  }
  function xe(J, B, p) {
    const l = p.__TX, h = {
      script: null,
      isSegwit: !1,
      isP2SH: !1,
      isP2WSH: !1
    };
    if (h.isP2SH = !!B.redeemScript, h.isP2WSH = !!B.witnessScript, B.witnessScript)
      h.script = B.witnessScript;
    else if (B.redeemScript)
      h.script = B.redeemScript;
    else if (B.nonWitnessUtxo) {
      const O = Ue(
        p,
        B,
        J
      ), L = l.ins[J].index;
      h.script = O.outs[L].script;
    } else B.witnessUtxo && (h.script = B.witnessUtxo.script);
    return (B.witnessScript || (0, w.isP2WPKH)(h.script)) && (h.isSegwit = !0), h;
  }
  function $e(J, B, p) {
    const l = (0, n.checkForInput)(B, J);
    if (!l.bip32Derivation || l.bip32Derivation.length === 0)
      throw new Error("Need bip32Derivation to sign with HD");
    const h = l.bip32Derivation.map((L) => {
      if (L.masterFingerprint.equals(p.fingerprint))
        return L;
    }).filter((L) => !!L);
    if (h.length === 0)
      throw new Error(
        "Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint"
      );
    return h.map((L) => {
      const V = p.derivePath(L.path);
      if (!L.pubkey.equals(V.publicKey))
        throw new Error("pubkey did not match bip32Derivation");
      return V;
    });
  }
  function Je(J, B) {
    return u.p2ms({ output: J }).pubkeys.map((l) => (B.filter((h) => h.pubkey.equals(l))[0] || {}).signature).filter((l) => !!l);
  }
  function ct(J) {
    let B = 0;
    function p(L) {
      return B += L, J.slice(B - L, B);
    }
    function l() {
      const L = t.decode(J, B);
      return B += t.decode.bytes, L;
    }
    function h() {
      return p(l());
    }
    function O() {
      const L = l(), V = [];
      for (let z = 0; z < L; z++) V.push(h());
      return V;
    }
    return O();
  }
  function je(J) {
    let B = J & d.Transaction.SIGHASH_ANYONECANPAY ? "SIGHASH_ANYONECANPAY | " : "";
    switch (J & 31) {
      case d.Transaction.SIGHASH_ALL:
        B += "SIGHASH_ALL";
        break;
      case d.Transaction.SIGHASH_SINGLE:
        B += "SIGHASH_SINGLE";
        break;
      case d.Transaction.SIGHASH_NONE:
        B += "SIGHASH_NONE";
        break;
    }
    return B;
  }
  function rt(J, B, p) {
    J.__NON_WITNESS_UTXO_BUF_CACHE[p] = B.nonWitnessUtxo;
    const l = d.Transaction.fromBuffer(B.nonWitnessUtxo);
    J.__NON_WITNESS_UTXO_TX_CACHE[p] = l;
    const h = J, O = p;
    delete B.nonWitnessUtxo, Object.defineProperty(B, "nonWitnessUtxo", {
      enumerable: !0,
      get() {
        const L = h.__NON_WITNESS_UTXO_BUF_CACHE[O], V = h.__NON_WITNESS_UTXO_TX_CACHE[O];
        if (L !== void 0)
          return L;
        {
          const z = V.toBuffer();
          return h.__NON_WITNESS_UTXO_BUF_CACHE[O] = z, z;
        }
      },
      set(L) {
        h.__NON_WITNESS_UTXO_BUF_CACHE[O] = L;
      }
    });
  }
  function Ke(J, B, p, l) {
    let h = 0;
    J.forEach((z, ie) => {
      if (l && z.finalScriptSig && (B.ins[ie].script = z.finalScriptSig), l && z.finalScriptWitness && (B.ins[ie].witness = ct(
        z.finalScriptWitness
      )), z.witnessUtxo)
        h += z.witnessUtxo.value;
      else if (z.nonWitnessUtxo) {
        const ce = Ue(p, z, ie), fe = B.ins[ie].index, ye = ce.outs[fe];
        h += ye.value;
      }
    });
    const O = B.outs.reduce((z, ie) => z + ie.value, 0), L = h - O;
    if (L < 0)
      throw new Error("Outputs are spending more than Inputs");
    const V = B.virtualSize();
    p.__FEE = L, p.__EXTRACTED_TX = B, p.__FEE_RATE = Math.floor(L / V);
  }
  function Ue(J, B, p) {
    const l = J.__NON_WITNESS_UTXO_TX_CACHE;
    return l[p] || rt(J, B, p), l[p];
  }
  function Se(J, B, p) {
    const { script: l } = tt(J, B, p);
    return l;
  }
  function tt(J, B, p) {
    if (B.witnessUtxo !== void 0)
      return {
        script: B.witnessUtxo.script,
        value: B.witnessUtxo.value
      };
    if (B.nonWitnessUtxo !== void 0) {
      const h = Ue(
        p,
        B,
        J
      ).outs[p.__TX.ins[J].index];
      return { script: h.script, value: h.value };
    } else
      throw new Error("Can't find pubkey in input without Utxo data");
  }
  function St(J, B, p, l) {
    const h = Se(p, B, l), { meaningfulScript: O } = At(
      h,
      p,
      "input",
      B.redeemScript,
      B.witnessScript
    );
    return (0, w.pubkeyInScript)(J, O);
  }
  function cr(J, B, p, l) {
    const h = l.__TX.outs[p].script, { meaningfulScript: O } = At(
      h,
      p,
      "output",
      B.redeemScript,
      B.witnessScript
    );
    return (0, w.pubkeyInScript)(J, O);
  }
  function Mt(J) {
    if (!J) return;
    const B = a.decompile(J);
    if (!B) return;
    const p = B[B.length - 1];
    if (!(!Q.isBuffer(p) || Be(p) || Xe(p) || !a.decompile(p)))
      return p;
  }
  function Qt(J) {
    if (!J) return;
    const B = ct(J), p = B[B.length - 1];
    if (!(Be(p) || !a.decompile(p)))
      return p;
  }
  function Or(J) {
    if (J.length === 65) {
      const B = J[64] & 1, p = J.slice(0, 33);
      return p[0] = 2 | B, p;
    }
    return J.slice();
  }
  function Be(J) {
    return J.length === 33 && a.isCanonicalPubKey(J);
  }
  function Xe(J) {
    return a.isCanonicalScriptSignature(J);
  }
  function At(J, B, p, l, h) {
    const O = (0, w.isP2SHScript)(J), L = O && l && (0, w.isP2WSHScript)(l), V = (0, w.isP2WSHScript)(J);
    if (O && l === void 0)
      throw new Error("scriptPubkey is P2SH but redeemScript missing");
    if ((V || L) && h === void 0)
      throw new Error(
        "scriptPubkey or redeemScript is P2WSH but witnessScript missing"
      );
    let z;
    return L ? (z = h, W(B, J, l, p), H(B, l, h, p), Ye(z)) : V ? (z = h, H(B, J, h, p), Ye(z)) : O ? (z = l, W(B, J, l, p)) : z = J, {
      meaningfulScript: z,
      type: L ? "p2sh-p2wsh" : O ? "p2sh" : V ? "p2wsh" : "raw"
    };
  }
  function Ye(J) {
    if ((0, w.isP2WPKH)(J) || (0, w.isP2SHScript)(J))
      throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
  }
  function Tt(J) {
    return (0, w.isP2WPKH)(J) ? "witnesspubkeyhash" : (0, w.isP2PKH)(J) ? "pubkeyhash" : (0, w.isP2MS)(J) ? "multisig" : (0, w.isP2PK)(J) ? "pubkey" : "nonstandard";
  }
  function lt(J) {
    return [...Array(J).keys()];
  }
  return Fn;
}
var Pa;
function A2() {
  return Pa || (Pa = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.initEccLib = e.Transaction = e.opcodes = e.Psbt = e.Block = e.script = e.payments = e.networks = e.crypto = e.address = void 0;
    const t = ws();
    e.address = t;
    const n = ar();
    e.crypto = n;
    const r = Ht();
    e.networks = r;
    const i = Qn();
    e.payments = i;
    const s = yt();
    e.script = s;
    var u = Xp();
    Object.defineProperty(e, "Block", {
      enumerable: !0,
      get: function() {
        return u.Block;
      }
    });
    var o = E2();
    Object.defineProperty(e, "Psbt", {
      enumerable: !0,
      get: function() {
        return o.Psbt;
      }
    });
    var a = fs();
    Object.defineProperty(e, "opcodes", {
      enumerable: !0,
      get: function() {
        return a.OPS;
      }
    });
    var d = Jn();
    Object.defineProperty(e, "Transaction", {
      enumerable: !0,
      get: function() {
        return d.Transaction;
      }
    });
    var c = gs();
    Object.defineProperty(e, "initEccLib", {
      enumerable: !0,
      get: function() {
        return c.initEccLib;
      }
    });
  }(so)), so;
}
var b2 = A2();
function W2() {
  const { network: e, publicKey: t, format: n, wallet: r } = Xt(), [i, s] = ve(null), [u, o] = ve(!1);
  return { sign: ke(
    async (d, c, w) => {
      o(!0);
      try {
        if (s(null), !n || !t || !r)
          throw new Error("No wallet is connected");
        const y = b2.Psbt.fromBase64(c), f = await cs({
          address: d,
          wallet: r,
          network: e,
          psbt: y,
          options: w
        });
        return o(!1), f;
      } catch (y) {
        throw s(y.message), o(!1), y;
      }
    },
    [n, e, t, r]
  ), error: i, loading: u };
}
function v2(e) {
  if (e === "segwit")
    return As.P2WPKH;
  if (e === "taproot")
    return As.P2TR;
  throw new Error("Leather payment address format is not supported");
}
async function P2({
  message: e,
  wallet: t,
  address: n,
  network: r,
  format: i
}) {
  if (t === le.MAGICEDEN) {
    const { base64: s } = await El(e, n, r);
    return s;
  }
  if (t === le.UNISAT) {
    const { base64: s } = await kl(e, "bip322-simple");
    return s;
  }
  if (t === le.XVERSE) {
    const { base64: s } = await Fl(e, n, r);
    return s;
  }
  if (t === le.LEATHER) {
    const s = v2(i), { base64: u } = await ml(e, {
      paymentType: s,
      network: r
    });
    return u;
  }
  if (t === le.OKX) {
    const { base64: s } = await vl(e, "bip322-simple", r);
    return s;
  }
  if (t === le.PHANTOM) {
    const { base64: s } = await _l(e, n, r);
    return s;
  }
  if (t === le.OYL) {
    const { base64: s } = await Tl(e, n, r);
    return s;
  }
  throw new Error("Invalid wallet selected");
}
function K2() {
  const {
    network: e,
    wallet: t,
    publicKey: n,
    format: r,
    address: i
  } = Xt(), [s, u] = ve(null), [o, a] = ve(!1);
  return { signMsg: ke(
    async (c, w) => {
      a(!0);
      try {
        if (u(null), !r || !n || !t)
          throw new Error("No wallet is connected");
        if (i.ordinals !== c && i.payments !== c)
          throw new Error("Address supplied is not connected address");
        const y = await P2({
          address: c,
          wallet: t,
          message: w,
          network: e,
          format: i.ordinals === c ? r.ordinals : r.payments
        });
        return a(!1), y;
      } catch (y) {
        throw u(y.message), a(!1), y;
      }
    },
    [r, e, n, t, i]
  ), error: s, isLoading: o };
}
export {
  kt as Chain,
  Hn as Network,
  L2 as OrdConnectKit,
  F2 as OrdConnectProvider,
  mp as SelectWalletModal,
  le as Wallet,
  H2 as useBalance,
  Xt as useOrdConnect,
  M2 as useSend,
  D2 as useSendV2,
  W2 as useSign,
  K2 as useSignMessage
};
