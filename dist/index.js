(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";.ord-connect-wallet-button{color:#000;background-color:#fff;font-weight:700;font-size:14px;line-height:20px;border-radius:40px;padding:10px 16px;border:0px;cursor:pointer}.ord-connect-wallet-button:disabled{background-color:#888;cursor:not-allowed}.ord-connect-wallet-button span:before{content:"Connect"}@media screen and (min-width: 768px){.ord-connect-wallet-button{padding:10px 24px}.ord-connect-wallet-button span:before{content:"Connect wallet"}}.ord-connect-wallet-button:enabled:hover{background-color:#f2f2f2}.ord-connect-wallet-button:enabled:active{opacity:.7}.ord-wallet-connected-container{position:relative;display:inline-block}.ord-wallet-connected-button{border-radius:52px;border:1px solid #8c8c8c;background-color:transparent;padding:8px 12px 8px 8px;display:flex;align-items:center;cursor:pointer}.ord-wallet-connected-button .address-container{display:none}@media screen and (min-width: 768px){.ord-wallet-connected-button .address-container{display:block;margin-left:8px}}.ord-wallet-connected-button .address{color:#fff;font-size:14px;font-weight:700;line-height:20px;margin:0}.ord-wallet-connected-button .network-container{display:flex;align-items:center}.ord-wallet-connected-button .status-indicator{width:8px;height:8px;background:#00ad1d;border-radius:999px;margin-right:8px}.ord-wallet-connected-button .network{color:#ffffff80;margin:0;font-size:12px;font-weight:600;line-height:16px}.ord-wallet-connected-button .wallet-profile-icon{width:28px;height:28px;border-radius:999px;background-color:pink;margin-right:8px}.ord-wallet-connected-button .dropdown-button{transition:transform .3s ease;margin-left:16px}.ord-wallet-connected-button .expand-dropdown-button{width:20px;transform:rotate(0)}.ord-wallet-connected-button .close-dropdown-button{transform:rotate(-180deg)}.ord-wallet-connection-dropdown{background:#121212;border-radius:15px;border:.5px solid rgba(255,255,255,.5);width:256px;position:absolute;top:54px;right:0}.ord-wallet-connection-dropdown .dropdown-button{display:flex;align-items:center;background:transparent;border:0px;cursor:pointer;width:100%;justify-content:space-between}.ord-wallet-connection-dropdown .dropdown-button:hover{background:#ffffff1a}.ord-wallet-connection-dropdown .dropdown-button:hover:first-child{border-top-left-radius:15px;border-top-right-radius:15px}.ord-wallet-connection-dropdown .dropdown-button:hover:last-child{border-bottom-left-radius:15px;border-bottom-right-radius:15px}.ord-wallet-connection-dropdown .dropdown-button:active{background:#ffffff1a;opacity:.7}.ord-wallet-connection-dropdown .dropdown-button:first-child{padding:26px 16px 18px}.ord-wallet-connection-dropdown .dropdown-button:not(:first-child):not(:last-child){padding:9px 16px}.ord-wallet-connection-dropdown .dropdown-button:last-child{padding:18px 16px 26px}.ord-wallet-connection-dropdown .label{color:#fff;font-size:14px;font-weight:600;flex:1 1 0%;text-align:left}.ord-wallet-connection-dropdown .value{color:#a6a6a6}.ord-wallet-connection-dropdown .change-wallet-label{color:#ffffffb3;font-size:14px;font-weight:700;flex:1 1 0%;text-align:right}.ord-wallet-connection-dropdown .profile-item-container{width:100%;display:flex;flex-direction:column}.ord-wallet-connection-dropdown .profile-item-inner-container{display:flex;justify-content:space-between}.ord-wallet-connection-dropdown .offers{font-size:10px;font-weight:700;line-height:12px;letter-spacing:.08em;color:#fff;padding:4px 12px;border-radius:16px;background:#ffffff1a}.ord-wallet-connection-dropdown .horizontal-separator{margin:6px 16px;border:0px;border-top:.5px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal{position:relative;z-index:10}.ord-connect-wallet-modal .backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000080;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.ord-connect-wallet-modal .outer-container{position:fixed;top:0;left:0;overflow-y:auto;width:100%;height:100%}.ord-connect-wallet-modal .inner-container{display:flex;align-items:center;justify-content:center;text-align:center;height:100%}.ord-connect-wallet-modal .panel{width:100%;background-color:#121212;overflow:hidden;text-align:left;height:100%}.ord-connect-wallet-modal .panel-title-container{display:flex;justify-content:space-between;padding:32px 24px 0;align-items:center}.ord-connect-wallet-modal .panel-title{color:#fff;font-size:24px;font-style:normal;font-weight:700;line-height:32px;margin:0}.ord-connect-wallet-modal .unsupported-browser-message{color:#fff}.ord-connect-wallet-modal .close-button{display:inline-flex;background:transparent;border:0px;cursor:pointer}.ord-connect-wallet-modal .panel-content-container{margin:32px 24px 0}.ord-connect-wallet-modal .panel-content-inner-container{border-radius:20px;border:1px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal .wallet-option-button{display:flex;align-items:center;background:transparent;border:0px;color:#fff;font-size:16px;font-weight:600;line-height:20px;width:100%;cursor:pointer}.ord-connect-wallet-modal .wallet-option-button:disabled .chevron-btn{opacity:.3}.waiting-cursor{cursor:wait!important}.wallet-identifier-container{position:relative;display:inline-block}.wallet-identifier-container img{position:absolute;bottom:4px;right:0;width:12px;border-radius:50%;background-color:#000;object-fit:cover}.ord-connect-wallet-modal .option-wrapper{display:flex;align-items:center;justify-content:space-between;padding:16px 4px;width:100%}.ord-connect-wallet-modal .wallet-option-button{padding:8px 16px}.ord-connect-wallet-modal .wallet-option-button:hover{background:#ffffff1a}.ord-connect-wallet-modal .wallet-option-button:active{background:#ffffff1a;opacity:.7}.ord-connect-wallet-modal .wallet-option-button:first-child{padding:16px 16px 8px;border:0px;margin-bottom:0;border-radius:20px 20px 0 0}.ord-connect-wallet-modal .wallet-option-button:last-child{padding:8px 16px 16px;border:0px;margin-bottom:0;border-radius:0 0 20px 20px}.ord-connect-wallet-modal .wallet-option-button:only-child{padding:8px 16px;border:0px;margin-bottom:0;border-radius:20px}.ord-connect-wallet-modal .wallet-icon{width:32px;height:32px;border-radius:9999px}.ord-connect-wallet-modal .wallet-option{flex-grow:1;margin-left:12px;text-align:left}.ord-connect-wallet-modal .wallet-option-connected-address{display:flex;padding:4px 8px;align-items:center;margin-left:4px;margin-right:8px;text-align:left;background-color:#00000080;border-radius:20px;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}.ord-connect-wallet-modal .wallet-option-connected-address .label{margin-left:4px;font-size:12px;font-weight:400;color:#ffffffb3}.ord-connect-wallet-modal .wallet-option-label{font-size:16px;font-weight:600;line-height:20px;margin:0}.ord-connect-wallet-modal .wallet-option-subtitle{font-size:12px;font-weight:400;line-height:16px;color:#8c8c8c;margin:0}.ord-connect-wallet-modal .horizontal-separator{margin:2px 16px;border:0px;border-top:.5px solid rgba(255,255,255,.1)}.ord-connect-wallet-modal .error-message{margin:16px 0 0;color:#e54545;font-size:14px;line-height:20px}.ord-connect-wallet-modal .preferred-label{padding:4px 12px;color:#000000b2;background-color:#ffbf18;font-size:12px;line-height:16px;font-weight:400;border-radius:20px;margin-left:4px;margin-right:8px}@media screen and (min-width: 768px){.ord-connect-wallet-modal .outer-container{top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:auto;border-radius:20px}.ord-connect-wallet-modal .panel{border:1px solid rgba(51,51,51,.5);border-radius:20px}.ord-connect-wallet-modal .panel-title-container{padding:24px 32px 0;border-bottom:0px}.ord-connect-wallet-modal .unsupported-browser-message{font-size:16px;padding-left:24px}.ord-connect-wallet-modal .panel-title{font-size:20px;font-style:normal;font-weight:600;line-height:28px;letter-spacing:.2px}.ord-connect-wallet-modal .panel-content-container{margin:48px 32px 32px}.ord-connect-wallet-modal .wallet-option{margin-left:16px}}@media screen and (min-width: 1080px){.ord-connect-wallet-modal .panel-content-container{margin:48px 32px 32px}.ord-connect-wallet-modal .option-wrapper{padding:16px}.ord-connect-wallet-modal .wallet-option-button{font-size:18px;font-weight:600;line-height:24px}.ord-connect-wallet-modal .wallet-option-button:first-child{padding:16px 16px 8px;border:0px;margin-bottom:0;border-radius:20px 20px 0 0}.ord-connect-wallet-modal .wallet-icon{width:40px;height:40px;border-radius:9999px}.ord-connect-wallet-modal .wallet-option-label{font-size:18px;font-weight:600;line-height:24px}.ord-connect-wallet-modal .wallet-option-connected-address{margin-left:16px;margin-right:16px}.ord-connect-wallet-modal .wallet-option-connected-address .label{font-size:16px}}.ord-connect-font *{font-family:Space Grotesk,sans-serif}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.opacity-0{opacity:0}.opacity-100{opacity:1}.duration-300{transition-duration:.3s}.duration-200{transition-duration:.2s}.scale-95{transform:scale(.95)}.scale-100{transform:scale(1)}')),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import * as he from "react";
import de, { useState as Pe, useEffect as Me, useCallback as ke, createContext as ut, useMemo as Ce, useContext as Ve, useRef as be, useLayoutEffect as qo, forwardRef as il, Fragment as ot, isValidElement as ol, cloneElement as sl, createElement as ul, useId as Gt, useReducer as Vo, useSyncExternalStore as al, createRef as cl } from "react";
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
  var e = de, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(i, a, d) {
    var c, m = {}, y = null, f = null;
    d !== void 0 && (y = "" + d), a.key !== void 0 && (y = "" + a.key), a.ref !== void 0 && (f = a.ref);
    for (c in a) r.call(a, c) && !s.hasOwnProperty(c) && (m[c] = a[c]);
    if (i && i.defaultProps) for (c in a = i.defaultProps, a) m[c] === void 0 && (m[c] = a[c]);
    return { $$typeof: t, type: i, key: y, ref: f, props: m, _owner: o.current };
  }
  return En.Fragment = n, En.jsx = u, En.jsxs = u, En;
}
var An = {}, vs;
function $l() {
  return vs || (vs = 1, sr.env.NODE_ENV !== "production" && function() {
    var e = de, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), b = Symbol.iterator, E = "@@iterator";
    function I(q) {
      if (q === null || typeof q != "object")
        return null;
      var te = b && q[b] || q[E];
      return typeof te == "function" ? te : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(q) {
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
    var O = !1, W = !1, U = !1, K = !1, S = !1, A;
    A = Symbol.for("react.module.reference");
    function _(q) {
      return !!(typeof q == "string" || typeof q == "function" || q === r || q === s || S || q === o || q === d || q === c || K || q === f || O || W || U || typeof q == "object" && q !== null && (q.$$typeof === y || q.$$typeof === m || q.$$typeof === u || q.$$typeof === i || q.$$typeof === a || // This needs to include all possible module reference object
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
      if (typeof q.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof q == "function")
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
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof q == "object")
        switch (q.$$typeof) {
          case i:
            var te = q;
            return P(te) + ".Consumer";
          case u:
            var oe = q;
            return P(oe._context) + ".Provider";
          case a:
            return N(q, q.render, "ForwardRef");
          case m:
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
    var j = Object.assign, H = 0, $, G, k, M, Y, Z, ne;
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
            log: j({}, q, {
              value: $
            }),
            info: j({}, q, {
              value: G
            }),
            warn: j({}, q, {
              value: k
            }),
            error: j({}, q, {
              value: M
            }),
            group: j({}, q, {
              value: Y
            }),
            groupCollapsed: j({}, q, {
              value: Z
            }),
            groupEnd: j({}, q, {
              value: ne
            })
          });
        }
        H < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
          case m:
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
            Te && !(Te instanceof Error) && (Mt(Oe), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", oe, Ie, typeof Te), Mt(null)), Te instanceof Error && !(Te.message in St) && (St[Te.message] = !0, Mt(Oe), w("Failed %s type: %s", oe, Te.message), Mt(null));
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
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(q)), Ye(q);
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
    function C(q) {
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
        l[oe] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(lt.current.type), q.ref), l[oe] = !0);
      }
    }
    function V(q, te) {
      {
        var oe = function() {
          B || (B = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
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
          p || (p = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
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
        oe !== void 0 && (Tt(oe), Te = "" + oe), C(te) && (Tt(te.key), Te = "" + te.key), h(te) && (gt = te.ref, L(te, Oe));
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
        q && q._owner && q._owner !== fe.current && (me = " It was passed a child from " + F(q._owner.type) + "."), we(q), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, me), we(null);
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
        te.$$typeof === m))
          oe = te.propTypes;
        else
          return;
        if (oe) {
          var me = F(te);
          Qt(oe, q.props, "prop", me, q);
        } else if (te.PropTypes !== void 0 && !_e) {
          _e = !0;
          var Oe = F(te);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Oe || "Unknown");
        }
        typeof te.getDefaultProps == "function" && !te.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function D(q) {
      {
        for (var te = Object.keys(q.props), oe = 0; oe < te.length; oe++) {
          var me = te[oe];
          if (me !== "children" && me !== "key") {
            we(q), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), we(null);
            break;
          }
        }
        q.ref !== null && (we(q), w("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
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
          q === null ? ze = "null" : Be(q) ? ze = "array" : q !== void 0 && q.$$typeof === t ? (ze = "<" + (F(q.type) || "Unknown") + " />", Te = " Did you accidentally export a JSX literal instead of a component?") : ze = typeof q, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ze, Te);
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
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              g(It, q);
        }
        if (tt.call(te, "key")) {
          var Cr = F(q), bt = Object.keys(te).filter(function(nl) {
            return nl !== "key";
          }), qi = bt.length > 0 ? "{key: someKey, " + bt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!X[Cr + qi]) {
            var rl = bt.length > 0 ? "{" + bt.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
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
    function ve(q, te, oe) {
      return ee(q, te, oe, !1);
    }
    var De = ve, Le = re;
    An.Fragment = r, An.jsx = De, An.jsxs = Le;
  }()), An;
}
var Ps;
function jl() {
  return Ps || (Ps = 1, sr.env.NODE_ENV === "production" ? Zn.exports = Dl() : Zn.exports = $l()), Zn.exports;
}
var ue = jl();
function Wl() {
  const [e, t] = Pe(!1);
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
  const { initializeWithValue: r = !0 } = n, o = ke(() => {
    const a = Kl(e);
    return a || (Ss(e, t), t);
  }, [t, e]), [s, u] = Pe(() => r ? o() : t), i = ke(
    (a) => {
      Ss(e, a), u(a);
    },
    [e]
  );
  return Me(() => {
    u(o());
  }, [e]), [s, i];
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
  chain: n = "bitcoin",
  ssr: r = !1
}) {
  if (!t)
    throw new Error("Network cannot be empty");
  const [o, s] = Pe(t), [u, i] = Pe(n), [a, d] = ei(
    ql,
    tn,
    { initializeWithValue: !r }
  ), [c, m] = ei(Vl, null, {
    initializeWithValue: !r
  }), [y, f] = ei(
    Gl,
    tn,
    { initializeWithValue: !r }
  ), [b, E] = ei(
    Xl,
    tn,
    { initializeWithValue: !r }
  ), [I, x] = Pe(!1), w = ke(() => x(!0), []), T = ke(() => x(!1), []), O = ke(() => {
    d(tn), f(tn), E(tn), m(null);
  }, [d, E, f, m]), W = Ce(
    () => ({
      address: a,
      updateAddress: d,
      publicKey: y,
      updatePublicKey: f,
      network: o,
      updateNetwork: s,
      wallet: c,
      updateWallet: m,
      isModalOpen: I,
      openModal: w,
      closeModal: T,
      format: b,
      updateFormat: E,
      disconnectWallet: O,
      chain: u,
      updateChain: i
    }),
    [
      a,
      d,
      y,
      f,
      o,
      s,
      c,
      m,
      I,
      w,
      T,
      b,
      E,
      O,
      u,
      i
    ]
  );
  return Me(() => {
    s(t);
  }, [t]), Me(() => {
    u !== n && (O(), i(n));
  }, [n, u, O]), /* @__PURE__ */ ue.jsx(Ca.Provider, { value: W, children: e });
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
        var o = {};
        function s(u) {
          if (o[u]) return o[u].exports;
          var i = o[u] = { i: u, l: !1, exports: {} };
          return r[u].call(i.exports, i, i.exports, s), i.l = !0, i.exports;
        }
        return s.m = r, s.c = o, s.d = function(u, i, a) {
          s.o(u, i) || Object.defineProperty(u, i, { enumerable: !0, get: a });
        }, s.r = function(u) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(u, "__esModule", { value: !0 });
        }, s.t = function(u, i) {
          if (1 & i && (u = s(u)), 8 & i || 4 & i && typeof u == "object" && u && u.__esModule) return u;
          var a = /* @__PURE__ */ Object.create(null);
          if (s.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: u }), 2 & i && typeof u != "string") for (var d in u) s.d(a, d, (function(c) {
            return u[c];
          }).bind(null, d));
          return a;
        }, s.n = function(u) {
          var i = u && u.__esModule ? function() {
            return u.default;
          } : function() {
            return u;
          };
          return s.d(i, "a", i), i;
        }, s.o = function(u, i) {
          return Object.prototype.hasOwnProperty.call(u, i);
        }, s.p = "/", s(s.s = 1);
      }([function(r, o) {
        r.exports = n;
      }, function(r, o, s) {
        r.exports = s(2);
      }, function(r, o, s) {
        function u(w, T) {
          if (w == null) return {};
          var O, W, U = function(S, A) {
            if (S == null) return {};
            var _, N, P = {}, F = Object.keys(S);
            for (N = 0; N < F.length; N++) _ = F[N], A.indexOf(_) >= 0 || (P[_] = S[_]);
            return P;
          }(w, T);
          if (Object.getOwnPropertySymbols) {
            var K = Object.getOwnPropertySymbols(w);
            for (W = 0; W < K.length; W++) O = K[W], T.indexOf(O) >= 0 || Object.prototype.propertyIsEnumerable.call(w, O) && (U[O] = w[O]);
          }
          return U;
        }
        s.r(o);
        var i = s(0), a = s.n(i), d = function(w) {
          for (var T = 0, O = 0; O < w.length; O++)
            T = (T << 5) - T + w.charCodeAt(O), T &= T;
          return Math.abs(T);
        }, c = function(w, T) {
          return Math.floor(w / Math.pow(10, T) % 10);
        }, m = function(w, T) {
          return !(c(w, T) % 2);
        }, y = function(w, T, O) {
          var W = w % T;
          return O && c(w, O) % 2 === 0 ? -W : W;
        }, f = function(w, T, O) {
          return T[w % O];
        }, b = function(w) {
          var T = w.name, O = w.colors, W = w.title, U = w.square, K = w.size, S = u(w, ["name", "colors", "title", "square", "size"]), A = function(N, P) {
            var F = d(N), j = P && P.length;
            return Array.from({ length: 3 }, function(H, $) {
              return { color: f(F + $, P, j), translateX: y(F * ($ + 1), 8, 1), translateY: y(F * ($ + 1), 8, 2), scale: 1.2 + y(F * ($ + 1), 4) / 10, rotate: y(F * ($ + 1), 360, 1) };
            });
          }(T, O), _ = i.useId();
          return i.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: K, height: K }, S), W && i.createElement("title", null, T), i.createElement("mask", { id: _, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, i.createElement("rect", { width: 80, height: 80, rx: U ? void 0 : 160, fill: "#FFFFFF" })), i.createElement("g", { mask: "url(#".concat(_, ")") }, i.createElement("rect", { width: 80, height: 80, fill: A[0].color }), i.createElement("path", { filter: "url(#filter_".concat(_, ")"), d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z", fill: A[1].color, transform: "translate(" + A[1].translateX + " " + A[1].translateY + ") rotate(" + A[1].rotate + " 40 40) scale(" + A[2].scale + ")" }), i.createElement("path", { filter: "url(#filter_".concat(_, ")"), style: { mixBlendMode: "overlay" }, d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z", fill: A[2].color, transform: "translate(" + A[2].translateX + " " + A[2].translateY + ") rotate(" + A[2].rotate + " 40 40) scale(" + A[2].scale + ")" })), i.createElement("defs", null, i.createElement("filter", { id: "filter_".concat(_), filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, i.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), i.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), i.createElement("feGaussianBlur", { stdDeviation: 7, result: "effect1_foregroundBlur" }))));
        }, E = { pixel: function(w) {
          var T = w.name, O = w.colors, W = w.title, U = w.square, K = w.size, S = u(w, ["name", "colors", "title", "square", "size"]), A = function(N, P) {
            var F = d(N), j = P && P.length;
            return Array.from({ length: 64 }, function(H, $) {
              return f(F % ($ + 1), P, j);
            });
          }(T, O), _ = i.useId();
          return i.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: K, height: K }, S), W && i.createElement("title", null, T), i.createElement("mask", { id: _, "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, i.createElement("rect", { width: 80, height: 80, rx: U ? void 0 : 160, fill: "#FFFFFF" })), i.createElement("g", { mask: "url(#".concat(_, ")") }, i.createElement("rect", { width: 10, height: 10, fill: A[0] }), i.createElement("rect", { x: 20, width: 10, height: 10, fill: A[1] }), i.createElement("rect", { x: 40, width: 10, height: 10, fill: A[2] }), i.createElement("rect", { x: 60, width: 10, height: 10, fill: A[3] }), i.createElement("rect", { x: 10, width: 10, height: 10, fill: A[4] }), i.createElement("rect", { x: 30, width: 10, height: 10, fill: A[5] }), i.createElement("rect", { x: 50, width: 10, height: 10, fill: A[6] }), i.createElement("rect", { x: 70, width: 10, height: 10, fill: A[7] }), i.createElement("rect", { y: 10, width: 10, height: 10, fill: A[8] }), i.createElement("rect", { y: 20, width: 10, height: 10, fill: A[9] }), i.createElement("rect", { y: 30, width: 10, height: 10, fill: A[10] }), i.createElement("rect", { y: 40, width: 10, height: 10, fill: A[11] }), i.createElement("rect", { y: 50, width: 10, height: 10, fill: A[12] }), i.createElement("rect", { y: 60, width: 10, height: 10, fill: A[13] }), i.createElement("rect", { y: 70, width: 10, height: 10, fill: A[14] }), i.createElement("rect", { x: 20, y: 10, width: 10, height: 10, fill: A[15] }), i.createElement("rect", { x: 20, y: 20, width: 10, height: 10, fill: A[16] }), i.createElement("rect", { x: 20, y: 30, width: 10, height: 10, fill: A[17] }), i.createElement("rect", { x: 20, y: 40, width: 10, height: 10, fill: A[18] }), i.createElement("rect", { x: 20, y: 50, width: 10, height: 10, fill: A[19] }), i.createElement("rect", { x: 20, y: 60, width: 10, height: 10, fill: A[20] }), i.createElement("rect", { x: 20, y: 70, width: 10, height: 10, fill: A[21] }), i.createElement("rect", { x: 40, y: 10, width: 10, height: 10, fill: A[22] }), i.createElement("rect", { x: 40, y: 20, width: 10, height: 10, fill: A[23] }), i.createElement("rect", { x: 40, y: 30, width: 10, height: 10, fill: A[24] }), i.createElement("rect", { x: 40, y: 40, width: 10, height: 10, fill: A[25] }), i.createElement("rect", { x: 40, y: 50, width: 10, height: 10, fill: A[26] }), i.createElement("rect", { x: 40, y: 60, width: 10, height: 10, fill: A[27] }), i.createElement("rect", { x: 40, y: 70, width: 10, height: 10, fill: A[28] }), i.createElement("rect", { x: 60, y: 10, width: 10, height: 10, fill: A[29] }), i.createElement("rect", { x: 60, y: 20, width: 10, height: 10, fill: A[30] }), i.createElement("rect", { x: 60, y: 30, width: 10, height: 10, fill: A[31] }), i.createElement("rect", { x: 60, y: 40, width: 10, height: 10, fill: A[32] }), i.createElement("rect", { x: 60, y: 50, width: 10, height: 10, fill: A[33] }), i.createElement("rect", { x: 60, y: 60, width: 10, height: 10, fill: A[34] }), i.createElement("rect", { x: 60, y: 70, width: 10, height: 10, fill: A[35] }), i.createElement("rect", { x: 10, y: 10, width: 10, height: 10, fill: A[36] }), i.createElement("rect", { x: 10, y: 20, width: 10, height: 10, fill: A[37] }), i.createElement("rect", { x: 10, y: 30, width: 10, height: 10, fill: A[38] }), i.createElement("rect", { x: 10, y: 40, width: 10, height: 10, fill: A[39] }), i.createElement("rect", { x: 10, y: 50, width: 10, height: 10, fill: A[40] }), i.createElement("rect", { x: 10, y: 60, width: 10, height: 10, fill: A[41] }), i.createElement("rect", { x: 10, y: 70, width: 10, height: 10, fill: A[42] }), i.createElement("rect", { x: 30, y: 10, width: 10, height: 10, fill: A[43] }), i.createElement("rect", { x: 30, y: 20, width: 10, height: 10, fill: A[44] }), i.createElement("rect", { x: 30, y: 30, width: 10, height: 10, fill: A[45] }), i.createElement("rect", { x: 30, y: 40, width: 10, height: 10, fill: A[46] }), i.createElement("rect", { x: 30, y: 50, width: 10, height: 10, fill: A[47] }), i.createElement("rect", { x: 30, y: 60, width: 10, height: 10, fill: A[48] }), i.createElement("rect", { x: 30, y: 70, width: 10, height: 10, fill: A[49] }), i.createElement("rect", { x: 50, y: 10, width: 10, height: 10, fill: A[50] }), i.createElement("rect", { x: 50, y: 20, width: 10, height: 10, fill: A[51] }), i.createElement("rect", { x: 50, y: 30, width: 10, height: 10, fill: A[52] }), i.createElement("rect", { x: 50, y: 40, width: 10, height: 10, fill: A[53] }), i.createElement("rect", { x: 50, y: 50, width: 10, height: 10, fill: A[54] }), i.createElement("rect", { x: 50, y: 60, width: 10, height: 10, fill: A[55] }), i.createElement("rect", { x: 50, y: 70, width: 10, height: 10, fill: A[56] }), i.createElement("rect", { x: 70, y: 10, width: 10, height: 10, fill: A[57] }), i.createElement("rect", { x: 70, y: 20, width: 10, height: 10, fill: A[58] }), i.createElement("rect", { x: 70, y: 30, width: 10, height: 10, fill: A[59] }), i.createElement("rect", { x: 70, y: 40, width: 10, height: 10, fill: A[60] }), i.createElement("rect", { x: 70, y: 50, width: 10, height: 10, fill: A[61] }), i.createElement("rect", { x: 70, y: 60, width: 10, height: 10, fill: A[62] }), i.createElement("rect", { x: 70, y: 70, width: 10, height: 10, fill: A[63] })));
        }, bauhaus: function(w) {
          var T = w.name, O = w.colors, W = w.title, U = w.square, K = w.size, S = u(w, ["name", "colors", "title", "square", "size"]), A = function(N, P) {
            var F = d(N), j = P && P.length;
            return Array.from({ length: 4 }, function(H, $) {
              return { color: f(F + $, P, j), translateX: y(F * ($ + 1), 40 - ($ + 17), 1), translateY: y(F * ($ + 1), 40 - ($ + 17), 2), rotate: y(F * ($ + 1), 360), isSquare: m(F, 2) };
            });
          }(T, O), _ = i.useId();
          return i.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: K, height: K }, S), W && i.createElement("title", null, T), i.createElement("mask", { id: _, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, i.createElement("rect", { width: 80, height: 80, rx: U ? void 0 : 160, fill: "#FFFFFF" })), i.createElement("g", { mask: "url(#".concat(_, ")") }, i.createElement("rect", { width: 80, height: 80, fill: A[0].color }), i.createElement("rect", { x: 10, y: 30, width: 80, height: A[1].isSquare ? 80 : 10, fill: A[1].color, transform: "translate(" + A[1].translateX + " " + A[1].translateY + ") rotate(" + A[1].rotate + " 40 40)" }), i.createElement("circle", { cx: 40, cy: 40, fill: A[2].color, r: 16, transform: "translate(" + A[2].translateX + " " + A[2].translateY + ")" }), i.createElement("line", { x1: 0, y1: 40, x2: 80, y2: 40, strokeWidth: 2, stroke: A[3].color, transform: "translate(" + A[3].translateX + " " + A[3].translateY + ") rotate(" + A[3].rotate + " 40 40)" })));
        }, ring: function(w) {
          var T = w.name, O = w.colors, W = w.title, U = w.square, K = w.size, S = u(w, ["name", "colors", "title", "square", "size"]), A = function(N, P) {
            var F = d(P), j = N && N.length, H = Array.from({ length: 5 }, function(G, k) {
              return f(F + k, N, j);
            }), $ = [];
            return $[0] = H[0], $[1] = H[1], $[2] = H[1], $[3] = H[2], $[4] = H[2], $[5] = H[3], $[6] = H[3], $[7] = H[0], $[8] = H[4], $;
          }(O, T), _ = a.a.useId();
          return a.a.createElement("svg", Object.assign({ viewBox: "0 0 90 90", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: K, height: K }, S), W && a.a.createElement("title", null, T), a.a.createElement("mask", { id: _, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 90, height: 90 }, a.a.createElement("rect", { width: 90, height: 90, rx: U ? void 0 : 180, fill: "#FFFFFF" })), a.a.createElement("g", { mask: "url(#".concat(_, ")") }, a.a.createElement("path", { d: "M0 0h90v45H0z", fill: A[0] }), a.a.createElement("path", { d: "M0 45h90v45H0z", fill: A[1] }), a.a.createElement("path", { d: "M83 45a38 38 0 00-76 0h76z", fill: A[2] }), a.a.createElement("path", { d: "M83 45a38 38 0 01-76 0h76z", fill: A[3] }), a.a.createElement("path", { d: "M77 45a32 32 0 10-64 0h64z", fill: A[4] }), a.a.createElement("path", { d: "M77 45a32 32 0 11-64 0h64z", fill: A[5] }), a.a.createElement("path", { d: "M71 45a26 26 0 00-52 0h52z", fill: A[6] }), a.a.createElement("path", { d: "M71 45a26 26 0 01-52 0h52z", fill: A[7] }), a.a.createElement("circle", { cx: 45, cy: 45, r: 23, fill: A[8] })));
        }, beam: function(w) {
          var T = w.name, O = w.colors, W = w.title, U = w.square, K = w.size, S = u(w, ["name", "colors", "title", "square", "size"]), A = function(N, P) {
            var F, j = d(N), H = P && P.length, $ = f(j, P, H), G = y(j, 10, 1), k = G < 5 ? G + 4 : G, M = y(j, 10, 2), Y = M < 5 ? M + 4 : M;
            return { wrapperColor: $, faceColor: (F = $, F.slice(0, 1) === "#" && (F = F.slice(1)), (299 * parseInt(F.substr(0, 2), 16) + 587 * parseInt(F.substr(2, 2), 16) + 114 * parseInt(F.substr(4, 2), 16)) / 1e3 >= 128 ? "#000000" : "#FFFFFF"), backgroundColor: f(j + 13, P, H), wrapperTranslateX: k, wrapperTranslateY: Y, wrapperRotate: y(j, 360), wrapperScale: 1 + y(j, 3) / 10, isMouthOpen: m(j, 2), isCircle: m(j, 1), eyeSpread: y(j, 5), mouthSpread: y(j, 3), faceRotate: y(j, 10, 3), faceTranslateX: k > 6 ? k / 2 : y(j, 8, 1), faceTranslateY: Y > 6 ? Y / 2 : y(j, 7, 2) };
          }(T, O), _ = i.useId();
          return i.createElement("svg", Object.assign({ viewBox: "0 0 36 36", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: K, height: K }, S), W && i.createElement("title", null, T), i.createElement("mask", { id: _, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 36, height: 36 }, i.createElement("rect", { width: 36, height: 36, rx: U ? void 0 : 72, fill: "#FFFFFF" })), i.createElement("g", { mask: "url(#".concat(_, ")") }, i.createElement("rect", { width: 36, height: 36, fill: A.backgroundColor }), i.createElement("rect", { x: "0", y: "0", width: 36, height: 36, transform: "translate(" + A.wrapperTranslateX + " " + A.wrapperTranslateY + ") rotate(" + A.wrapperRotate + " 18 18) scale(" + A.wrapperScale + ")", fill: A.wrapperColor, rx: A.isCircle ? 36 : 6 }), i.createElement("g", { transform: "translate(" + A.faceTranslateX + " " + A.faceTranslateY + ") rotate(" + A.faceRotate + " 18 18)" }, A.isMouthOpen ? i.createElement("path", { d: "M15 " + (19 + A.mouthSpread) + "c2 1 4 1 6 0", stroke: A.faceColor, fill: "none", strokeLinecap: "round" }) : i.createElement("path", { d: "M13," + (19 + A.mouthSpread) + " a1,0.75 0 0,0 10,0", fill: A.faceColor }), i.createElement("rect", { x: 14 - A.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: A.faceColor }), i.createElement("rect", { x: 20 + A.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: A.faceColor }))));
        }, sunset: function(w) {
          var T = w.name, O = w.colors, W = w.title, U = w.square, K = w.size, S = u(w, ["name", "colors", "title", "square", "size"]), A = function(P, F) {
            var j = d(P), H = F && F.length;
            return Array.from({ length: 4 }, function($, G) {
              return f(j + G, F, H);
            });
          }(T, O), _ = T.replace(/\s/g, ""), N = i.useId();
          return i.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: K, height: K }, S), W && i.createElement("title", null, T), i.createElement("mask", { id: N, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, i.createElement("rect", { width: 80, height: 80, rx: U ? void 0 : 160, fill: "#FFFFFF" })), i.createElement("g", { mask: "url(#".concat(N, ")") }, i.createElement("path", { fill: "url(#gradient_paint0_linear_" + _ + ")", d: "M0 0h80v40H0z" }), i.createElement("path", { fill: "url(#gradient_paint1_linear_" + _ + ")", d: "M0 40h80v40H0z" })), i.createElement("defs", null, i.createElement("linearGradient", { id: "gradient_paint0_linear_" + _, x1: 40, y1: 0, x2: 40, y2: 40, gradientUnits: "userSpaceOnUse" }, i.createElement("stop", { stopColor: A[0] }), i.createElement("stop", { offset: 1, stopColor: A[1] })), i.createElement("linearGradient", { id: "gradient_paint1_linear_" + _, x1: 40, y1: 40, x2: 40, y2: 80, gradientUnits: "userSpaceOnUse" }, i.createElement("stop", { stopColor: A[2] }), i.createElement("stop", { offset: 1, stopColor: A[3] }))));
        }, marble: b }, I = { geometric: "beam", abstract: "bauhaus" }, x = function(w) {
          var T = w.variant, O = T === void 0 ? "marble" : T, W = w.colors, U = W === void 0 ? ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"] : W, K = w.name, S = K === void 0 ? "Clara Barton" : K, A = w.title, _ = A !== void 0 && A, N = w.size, P = w.square, F = P !== void 0 && P, j = u(w, ["variant", "colors", "name", "title", "size", "square"]), H = E[I[O] || O] || b;
          return a.a.createElement(H, Object.assign({ colors: U, name: S, title: _, size: N, square: F }, j));
        };
        o.default = x;
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
      let o = r.target, s = (u) => {
        t.current.isFocused = !1, o.disabled && n(new of("blur", u)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", s, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var u;
          (u = t.current.observer) === null || u === void 0 || u.disconnect();
          let i = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: i
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: i
          }));
        }
      }), t.current.observer.observe(o, {
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
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const s = ke((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), u = Fa(s), i = ke((a) => {
    const d = qn(a.target);
    a.target === a.currentTarget && d.activeElement === a.target && (n && n(a), o && o(!0), u(a));
  }, [
    o,
    n,
    u
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? i : void 0,
      onBlur: !t && (r || o) ? s : void 0
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
  const o = typeof window < "u" ? Wr(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, s = typeof window < "u" ? Wr(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, u = typeof window < "u" ? Wr(n == null ? void 0 : n.target).HTMLElement : HTMLElement, i = typeof window < "u" ? Wr(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof o && !lf.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof s || (n == null ? void 0 : n.target) instanceof u && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof i && !uf[n.key]);
}
function hf(e, t, n) {
  Bo(), Me(() => {
    let r = (o, s) => {
      ff(!!(n != null && n.isTextInput), o, s) && e(Ma());
    };
    return Co.add(r), () => {
      Co.delete(r);
    };
  }, t);
}
function df(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, s = be({
    isFocusWithin: !1
  }), u = ke((d) => {
    s.current.isFocusWithin && !d.currentTarget.contains(d.relatedTarget) && (s.current.isFocusWithin = !1, n && n(d), o && o(!1));
  }, [
    n,
    o,
    s
  ]), i = Fa(u), a = ke((d) => {
    !s.current.isFocusWithin && document.activeElement === d.target && (r && r(d), o && o(!0), s.current.isFocusWithin = !0, i(d));
  }, [
    r,
    o,
    i
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
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [s, u] = Pe(!1), i = be({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Me(pf, []);
  let { hoverProps: a, triggerHoverEnd: d } = Ce(() => {
    let c = (f, b) => {
      if (i.pointerType = b, o || b === "touch" || i.isHovered || !f.currentTarget.contains(f.target)) return;
      i.isHovered = !0;
      let E = f.currentTarget;
      i.target = E, t && t({
        type: "hoverstart",
        target: E,
        pointerType: b
      }), n && n(!0), u(!0);
    }, m = (f, b) => {
      if (i.pointerType = "", i.target = null, b === "touch" || !i.isHovered) return;
      i.isHovered = !1;
      let E = f.currentTarget;
      r && r({
        type: "hoverend",
        target: E,
        pointerType: b
      }), n && n(!1), u(!1);
    }, y = {};
    return typeof PointerEvent < "u" ? (y.onPointerEnter = (f) => {
      Ai && f.pointerType === "mouse" || c(f, f.pointerType);
    }, y.onPointerLeave = (f) => {
      !o && f.currentTarget.contains(f.target) && m(f, f.pointerType);
    }) : (y.onTouchStart = () => {
      i.ignoreEmulatedMouseEvents = !0;
    }, y.onMouseEnter = (f) => {
      !i.ignoreEmulatedMouseEvents && !Ai && c(f, "mouse"), i.ignoreEmulatedMouseEvents = !1;
    }, y.onMouseLeave = (f) => {
      !o && f.currentTarget.contains(f.target) && m(f, "mouse");
    }), {
      hoverProps: y,
      triggerHoverEnd: m
    };
  }, [
    t,
    n,
    r,
    o,
    i
  ]);
  return Me(() => {
    o && d({
      currentTarget: i.target
    }, i.pointerType);
  }, [
    o
  ]), {
    hoverProps: a,
    isHovered: s
  };
}
function mf(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = be({
    isFocused: !1,
    isFocusVisible: t || Ma()
  }), [s, u] = Pe(!1), [i, a] = Pe(() => o.current.isFocused && o.current.isFocusVisible), d = ke(() => a(o.current.isFocused && o.current.isFocusVisible), []), c = ke((f) => {
    o.current.isFocused = f, u(f), d();
  }, [
    d
  ]);
  hf((f) => {
    o.current.isFocusVisible = f, d();
  }, [], {
    isTextInput: n
  });
  let { focusProps: m } = sf({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: y } = df({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: s,
    isFocusVisible: i,
    focusProps: r ? y : m
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
  let e = [], t = { addEventListener(n, r, o, s) {
    return n.addEventListener(r, o, s), t.add(() => n.removeEventListener(r, o, s));
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
  }, style(n, r, o) {
    let s = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: s });
    });
  }, group(n) {
    let r = Yt();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.includes(n) || e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0) for (let o of e.splice(r, 1)) o();
    };
  }, dispose() {
    for (let n of e.splice(0)) n();
  } };
  return t;
}
function dn() {
  let [e] = Pe(Yt);
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
  let t = be(null), [n, r] = Pe(!1), o = dn(), s = Ee(() => {
    t.current = null, r(!1), o.dispose();
  }), u = Ee((i) => {
    if (o.dispose(), t.current === null) {
      t.current = i.currentTarget, r(!0);
      {
        let a = zr(i.currentTarget);
        o.addEventListener(a, "pointerup", s, !1), o.addEventListener(a, "pointermove", (d) => {
          if (t.current) {
            let c = Af(d);
            r(bf(c, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", s, !1);
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
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, qt), r;
}
var fn = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(fn || {}), Tr = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Tr || {});
function et() {
  let e = Tf();
  return ke((t) => Sf({ mergeRefs: e, ...t }), [e]);
}
function Sf({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: s = !0, name: u, mergeRefs: i }) {
  i = i ?? If;
  let a = $a(t, e);
  if (s) return ti(a, n, r, u, i);
  let d = o ?? 0;
  if (d & 2) {
    let { static: c = !1, ...m } = a;
    if (c) return ti(m, n, r, u, i);
  }
  if (d & 1) {
    let { unmount: c = !0, ...m } = a;
    return qt(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return ti({ ...m, hidden: !0, style: { display: "none" } }, n, r, u, i);
    } });
  }
  return ti(a, n, r, u, i);
}
function ti(e, t = {}, n, r, o) {
  let { as: s = n, children: u, refName: i = "ref", ...a } = Xi(e, ["unmount", "static"]), d = e.ref !== void 0 ? { [i]: e.ref } : {}, c = typeof u == "function" ? u(t) : u;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let m = {};
  if (t) {
    let y = !1, f = [];
    for (let [b, E] of Object.entries(t)) typeof E == "boolean" && (y = !0), E === !0 && f.push(b.replace(/([A-Z])/g, (I) => `-${I.toLowerCase()}`));
    if (y) {
      m["data-headlessui-state"] = f.join(" ");
      for (let b of f) m[`data-${b}`] = "";
    }
  }
  if (s === ot && (Object.keys(Dr(a)).length > 0 || Object.keys(Dr(m)).length > 0)) if (!ol(c) || Array.isArray(c) && c.length > 1) {
    if (Object.keys(Dr(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(Dr(a)).concat(Object.keys(Dr(m))).map((y) => `  - ${y}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((y) => `  - ${y}`).join(`
`)].join(`
`));
  } else {
    let y = c.props, f = y == null ? void 0 : y.className, b = typeof f == "function" ? (...x) => Fo(f(...x), a.className) : Fo(f, a.className), E = b ? { className: b } : {}, I = $a(c.props, Dr(Xi(a, ["ref"])));
    for (let x in m) x in I && delete m[x];
    return sl(c, Object.assign({}, I, m, d, { ref: o(xf(c), d.ref) }, E));
  }
  return ul(s, Object.assign({}, Xi(a, ["ref"]), s !== ot && d, s !== ot && m), c);
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
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"]) for (let r in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(o) => {
    var s;
    return (s = o == null ? void 0 : o.preventDefault) == null ? void 0 : s.call(o);
  }]);
  for (let r in n) Object.assign(t, { [r](o, ...s) {
    let u = n[r];
    for (let i of u) {
      if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
      i(o, ...s);
    }
  } });
  return t;
}
function ja(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  for (let r in n) Object.assign(t, { [r](...o) {
    let s = n[r];
    for (let u of s) u == null || u(...o);
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
  let { features: r = 1, ...o } = e, s = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return et()({ ourProps: s, theirProps: o, slot: {}, defaultTag: _f, name: "Hidden" });
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
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
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
  let [e, t] = Pe([]);
  return [e.length > 0 ? e.join(" ") : void 0, Ce(() => function(n) {
    let r = Ee((s) => (t((u) => [...u, s]), () => t((u) => {
      let i = u.slice(), a = i.indexOf(s);
      return a !== -1 && i.splice(a, 1), i;
    }))), o = Ce(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return de.createElement(Yo.Provider, { value: o }, n.children);
  }, [t])];
}
let Nf = "p";
function Uf(e, t) {
  let n = Gt(), r = Da(), { id: o = `headlessui-description-${n}`, ...s } = e, u = Ka(), i = Et(t);
  Ne(() => u.register(o), [o, u.register]);
  let a = r || !1, d = Ce(() => ({ ...u.slot, disabled: a }), [u.slot, a]), c = { ref: i, ...u.props, id: o };
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
  let o = (n = (t = Ve(xi)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = void 0) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function Va({ inherit: e = !1 } = {}) {
  let t = Mf(), [n, r] = Pe([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, Ce(() => function(s) {
    let u = Ee((a) => (r((d) => [...d, a]), () => r((d) => {
      let c = d.slice(), m = c.indexOf(a);
      return m !== -1 && c.splice(m, 1), c;
    }))), i = Ce(() => ({ register: u, slot: s.slot, name: s.name, props: s.props, value: s.value }), [u, s.slot, s.name, s.props, s.value]);
    return de.createElement(xi.Provider, { value: i }, s.children);
  }, [r])];
}
let Df = "label";
function $f(e, t) {
  var n;
  let r = Gt(), o = zo(), s = kf(), u = Da(), { id: i = `headlessui-label-${r}`, htmlFor: a = s ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: d = !1, ...c } = e, m = Et(t);
  Ne(() => o.register(i), [i, o.register]);
  let y = Ee((I) => {
    let x = I.currentTarget;
    if (x instanceof HTMLLabelElement && I.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(I), x instanceof HTMLLabelElement) {
      let w = document.getElementById(x.htmlFor);
      if (w) {
        let T = w.getAttribute("disabled");
        if (T === "true" || T === "") return;
        let O = w.getAttribute("aria-disabled");
        if (O === "true" || O === "") return;
        (w instanceof HTMLInputElement && (w.type === "radio" || w.type === "checkbox") || w.role === "radio" || w.role === "checkbox" || w.role === "switch") && w.click(), w.focus({ preventScroll: !0 });
      }
    }
  }), f = u || !1, b = Ce(() => ({ ...o.slot, disabled: f }), [o.slot, f]), E = { ref: m, ...o.props, id: i, htmlFor: a, onClick: y };
  return d && ("onClick" in E && (delete E.htmlFor, delete E.onClick), "onClick" in c && delete c.onClick), et()({ ourProps: E, theirProps: c, slot: b, defaultTag: a ? Df : "div", name: o.name || "Label" });
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
  let [n, r] = Vo(() => ({}), {}), o = Ce(() => qf(e), [e, n]);
  return Ne(() => {
    if (!e) return;
    let s = new ResizeObserver(r);
    return s.observe(e), () => {
      s.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
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
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...s) {
    let u = t[o].call(n, ...s);
    u && (n = u, r.forEach((i) => i()));
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
  let n = Xf.get(t), r = Gt(), o = Xa(n);
  if (Ne(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let s = o.indexOf(r), u = o.length;
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
    var o, s;
    if (!r) return;
    let u = Yt();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && u.add(xs(a));
    let i = (s = t == null ? void 0 : t()) != null ? s : [];
    for (let a of i) {
      if (!a) continue;
      let d = zr(a);
      if (!d) continue;
      let c = a.parentElement;
      for (; c && c !== d.body; ) {
        for (let m of c.children) i.some((y) => m.contains(y)) || u.add(xs(m));
        c = c.parentElement;
      }
    }
    return u.dispose;
  }, [r, t, n]);
}
function za(e, t, n) {
  let r = Qr((o) => {
    let s = o.getBoundingClientRect();
    s.x === 0 && s.y === 0 && s.width === 0 && s.height === 0 && n();
  });
  Me(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let s = Yt();
    if (typeof ResizeObserver < "u") {
      let u = new ResizeObserver(() => r.current(o));
      u.observe(o), s.add(() => u.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let u = new IntersectionObserver(() => r.current(o));
      u.observe(o), s.add(() => u.disconnect());
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
    let o = t(n), s = t(r);
    if (o === null || s === null) return 0;
    let u = o.compareDocumentPosition(s);
    return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function t0(e, t) {
  return cn(Qa(), t, { relativeTo: e });
}
function cn(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, u = Array.isArray(e) ? n ? Za(e) : e : t & 64 ? Qf(e) : Qa(e);
  o.length > 0 && u.length > 1 && (u = u.filter((f) => !o.some((b) => b != null && "current" in b ? (b == null ? void 0 : b.current) === f : b === f))), r = r ?? s.activeElement;
  let i = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, u.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, u.indexOf(r)) + 1;
    if (t & 8) return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = t & 32 ? { preventScroll: !0 } : {}, c = 0, m = u.length, y;
  do {
    if (c >= m || c + m <= 0) return 0;
    let f = a + c;
    if (t & 16) f = (f + m) % m;
    else {
      if (f < 0) return 3;
      if (f >= m) return 1;
    }
    y = u[f], y == null || y.focus(d), c += i;
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
  let o = Qr(n);
  Me(() => {
    if (!e) return;
    function s(u) {
      o.current(u);
    }
    return document.addEventListener(t, s, r), () => document.removeEventListener(t, s, r);
  }, [e, t, r]);
}
function tc(e, t, n, r) {
  let o = Qr(n);
  Me(() => {
    if (!e) return;
    function s(u) {
      o.current(u);
    }
    return window.addEventListener(t, s, r), () => window.removeEventListener(t, s, r);
  }, [e, t, r]);
}
const Os = 30;
function rc(e, t, n) {
  let r = pn(e, "outside-click"), o = Qr(n), s = ke(function(a, d) {
    if (a.defaultPrevented) return;
    let c = d(a);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return;
    let m = function y(f) {
      return typeof f == "function" ? y(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(t);
    for (let y of m) if (y !== null && (y.contains(c) || a.composed && a.composedPath().includes(y))) return;
    return !Jo(c, Qo.Loose) && c.tabIndex !== -1 && a.preventDefault(), o.current(a, c);
  }, [o, t]), u = be(null);
  bn(r, "pointerdown", (a) => {
    var d, c;
    u.current = ((c = (d = a.composedPath) == null ? void 0 : d.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), bn(r, "mousedown", (a) => {
    var d, c;
    u.current = ((c = (d = a.composedPath) == null ? void 0 : d.call(a)) == null ? void 0 : c[0]) || a.target;
  }, !0), bn(r, "click", (a) => {
    n0() || u.current && (s(a, () => u.current), u.current = null);
  }, !0);
  let i = be({ x: 0, y: 0 });
  bn(r, "touchstart", (a) => {
    i.current.x = a.touches[0].clientX, i.current.y = a.touches[0].clientY;
  }, !0), bn(r, "touchend", (a) => {
    let d = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(d.x - i.current.x) >= Os || Math.abs(d.y - i.current.y) >= Os)) return s(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), tc(r, "blur", (a) => s(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function gn(...e) {
  return Ce(() => zr(...e), [...e]);
}
function nc(e, t, n, r) {
  let o = Qr(n);
  Me(() => {
    e = e ?? window;
    function s(u) {
      o.current(u);
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
    let r = t.documentElement, o = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, o.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = Math.max(0, r.clientWidth - r.offsetWidth), s = Math.max(0, e - o);
    n.style(r, "paddingRight", `${s}px`);
  } };
}
function s0() {
  return ec() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((s) => s()).some((s) => s.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let i = Yt();
        i.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => i.dispose()));
      }
      let s = (o = window.scrollY) != null ? o : window.pageYOffset, u = null;
      t.addEventListener(e, "click", (i) => {
        if (i.target instanceof HTMLElement) try {
          let a = i.target.closest("a");
          if (!a) return;
          let { hash: d } = new URL(a.href), c = e.querySelector(d);
          c && !r(c) && (u = c);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (i) => {
        if (i.target instanceof HTMLElement) if (r(i.target)) {
          let a = i.target;
          for (; a.parentElement && r(a.parentElement); ) a = a.parentElement;
          t.style(a, "overscrollBehavior", "contain");
        } else t.style(i.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (i) => {
        if (i.target instanceof HTMLElement) {
          if (i.target.tagName === "INPUT") return;
          if (r(i.target)) {
            let a = i.target;
            for (; a.parentElement && a.dataset.headlessuiPortal !== "" && !(a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth); ) a = a.parentElement;
            a.dataset.headlessuiPortal === "" && i.preventDefault();
          } else i.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var i;
        let a = (i = window.scrollY) != null ? i : window.pageYOffset;
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
  let r = { doc: e, d: t, meta: a0(n) }, o = [s0(), o0(), u0()];
  o.forEach(({ before: s }) => s == null ? void 0 : s(r)), o.forEach(({ after: s }) => s == null ? void 0 : s(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Kr.subscribe(() => {
  let e = Kr.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && Kr.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Kr.dispatch("TEARDOWN", n);
  }
});
function c0(e, t, n = () => ({ containers: [] })) {
  let r = Xa(Kr), o = t ? r.get(t) : void 0, s = o ? o.count > 0 : !1;
  return Ne(() => {
    if (!(!t || !e)) return Kr.dispatch("PUSH", t, n), () => Kr.dispatch("POP", t, n);
  }, [e, t]), s;
}
function ic(e, t, n = () => [document.body]) {
  let r = pn(e, "scroll-lock");
  c0(r, t, (o) => {
    var s;
    return { containers: [...(s = o.containers) != null ? s : [], n] };
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
  let [t, n] = Pe(e), r = ke((a) => n(a), [t]), o = ke((a) => n((d) => d | a), [t]), s = ke((a) => (t & a) === a, [t]), u = ke((a) => n((d) => d & ~a), [n]), i = ke((a) => n((d) => d ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: s, removeFlag: u, toggleFlag: i };
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
  let [o, s] = Pe(n), { hasFlag: u, addFlag: i, removeFlag: a } = f0(e && o ? 3 : 0), d = be(!1), c = be(!1), m = dn();
  return Ne(() => {
    var y;
    if (e) {
      if (n && s(!0), !t) {
        n && i(3);
        return;
      }
      return (y = r == null ? void 0 : r.start) == null || y.call(r, n), d0(t, { inFlight: d, prepare() {
        c.current ? c.current = !1 : c.current = d.current, d.current = !0, !c.current && (n ? (i(3), a(4)) : (i(4), a(2)));
      }, run() {
        c.current ? n ? (a(3), i(4)) : (a(4), i(3)) : n ? a(1) : i(1);
      }, done() {
        var f;
        c.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (d.current = !1, a(7), n || s(!1), (f = r == null ? void 0 : r.end) == null || f.call(r, n));
      } });
    }
  }, [e, n, t, m]), e ? [o, { closed: u(1), enter: u(2), leave: u(4), transition: u(2) || u(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function d0(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let s = Yt();
  return g0(e, { prepare: t, inFlight: o }), s.nextFrame(() => {
    n(), s.requestAnimationFrame(() => {
      s.add(p0(e, r));
    });
  }), s.dispose;
}
function p0(e, t) {
  var n, r;
  let o = Yt();
  if (!e) return o.dispose;
  let s = !1;
  o.add(() => {
    s = !0;
  });
  let u = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter((i) => i instanceof CSSTransition)) != null ? r : [];
  return u.length === 0 ? (t(), o.dispose) : (Promise.allSettled(u.map((i) => i.finished)).then(() => {
    s || t();
  }), o.dispose);
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
  let o = be(n), s = be(r);
  Me(() => {
    o.current = n, s.current = r;
  }, [n, r]), Ne(() => {
    if (!t || !e) return;
    let u = zr(t);
    if (!u) return;
    let i = o.current, a = s.current, d = Object.assign((m) => i(m), { acceptNode: i }), c = u.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, d, !1);
    for (; c.nextNode(); ) a(c.currentNode);
  }, [t, e, o, s]);
}
function Zo(e, t) {
  let n = be([]), r = Ee(e);
  Me(() => {
    let o = [...n.current];
    for (let [s, u] of t.entries()) if (n.current[s] !== u) {
      let i = r(t, o);
      return n.current = t, i;
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
    display: o
  } = Lt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
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
  const o = ac(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), u = Pt(o);
  if (s) {
    const i = Ho(u);
    return t.concat(u, u.visualViewport || [], Gn(o) ? o : [], i && n ? jn(i) : []);
  }
  return t.concat(o, jn(o, [], n));
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
  const r = Xn(e), o = fc(e), s = lc(o);
  let u = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
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
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], u = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? s : u;
    default:
      return [];
  }
}
function T0(e, t, n, r) {
  const o = Xn(e);
  let s = S0(xr(e), n === "start", r);
  return o && (s = s.map((u) => u + "-" + o), t && (s = s.concat(s.map(Mo)))), s;
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
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Ns(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Xr(t), u = fc(t), i = lc(u), a = xr(t), d = s === "y", c = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, y = r[i] / 2 - o[i] / 2;
  let f;
  switch (a) {
    case "top":
      f = {
        x: c,
        y: r.y - o.height
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
        y: m
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: m
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
    strategy: o = "absolute",
    middleware: s = [],
    platform: u
  } = n, i = s.filter(Boolean), a = await (u.isRTL == null ? void 0 : u.isRTL(t));
  let d = await u.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: m
  } = Ns(d, r, a), y = r, f = {}, b = 0;
  for (let E = 0; E < i.length; E++) {
    const {
      name: I,
      fn: x
    } = i[E], {
      x: w,
      y: T,
      data: O,
      reset: W
    } = await x({
      x: c,
      y: m,
      initialPlacement: r,
      placement: y,
      strategy: o,
      middlewareData: f,
      rects: d,
      platform: u,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = w ?? c, m = T ?? m, f = {
      ...f,
      [I]: {
        ...f[I],
        ...O
      }
    }, W && b <= 50 && (b++, typeof W == "object" && (W.placement && (y = W.placement), W.rects && (d = W.rects === !0 ? await u.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : W.rects), {
      x: c,
      y: m
    } = Ns(d, y, a)), E = -1);
  }
  return {
    x: c,
    y: m,
    placement: y,
    strategy: o,
    middlewareData: f
  };
};
async function ki(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: u,
    elements: i,
    strategy: a
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: m = "floating",
    altBoundary: y = !1,
    padding: f = 0
  } = wn(t, e), b = x0(f), I = i[y ? m === "floating" ? "reference" : "floating" : m], x = Si(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(I))) == null || n ? I : I.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: a
  })), w = m === "floating" ? {
    x: r,
    y: o,
    width: u.floating.width,
    height: u.floating.height
  } : u.reference, T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), O = await (s.isElement == null ? void 0 : s.isElement(T)) ? await (s.getScale == null ? void 0 : s.getScale(T)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, W = Si(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: w,
    offsetParent: T,
    strategy: a
  }) : w);
  return {
    top: (x.top - W.top + b.top) / O.y,
    bottom: (W.bottom - x.bottom + b.bottom) / O.y,
    left: (x.left - W.left + b.left) / O.x,
    right: (W.right - x.right + b.right) / O.x
  };
}
const O0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: u,
        initialPlacement: i,
        platform: a,
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: m = !0,
        fallbackPlacements: y,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: E = !0,
        ...I
      } = wn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const x = xr(o), w = Xr(i), T = xr(i) === i, O = await (a.isRTL == null ? void 0 : a.isRTL(d.floating)), W = y || (T || !E ? [Pi(i)] : P0(i)), U = b !== "none";
      !y && U && W.push(...T0(i, E, b, O));
      const K = [i, ...W], S = await ki(t, I), A = [];
      let _ = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (c && A.push(S[x]), m) {
        const j = v0(o, u, O);
        A.push(S[j[0]], S[j[1]]);
      }
      if (_ = [..._, {
        placement: o,
        overflows: A
      }], !A.every((j) => j <= 0)) {
        var N, P;
        const j = (((N = s.flip) == null ? void 0 : N.index) || 0) + 1, H = K[j];
        if (H)
          return {
            data: {
              index: j,
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
                  return M === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((M) => M > 0).reduce((M, Y) => M + Y, 0)]).sort((k, M) => k[1] - M[1])[0]) == null ? void 0 : F[0];
              G && ($ = G);
              break;
            }
            case "initialPlacement":
              $ = i;
              break;
          }
        if (o !== $)
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
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), u = xr(n), i = Xn(n), a = Xr(n) === "y", d = ["left", "top"].includes(u) ? -1 : 1, c = s && a ? -1 : 1, m = wn(t, e);
  let {
    mainAxis: y,
    crossAxis: f,
    alignmentAxis: b
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return i && typeof b == "number" && (f = i === "end" ? b * -1 : b), a ? {
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
        x: o,
        y: s,
        placement: u,
        middlewareData: i
      } = t, a = await C0(t, e);
      return u === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
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
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: u = !1,
        limiter: i = {
          fn: (I) => {
            let {
              x,
              y: w
            } = I;
            return {
              x,
              y: w
            };
          }
        },
        ...a
      } = wn(e, t), d = {
        x: n,
        y: r
      }, c = await ki(t, a), m = Xr(xr(o)), y = cc(m);
      let f = d[y], b = d[m];
      if (s) {
        const I = y === "y" ? "top" : "left", x = y === "y" ? "bottom" : "right", w = f + c[I], T = f - c[x];
        f = Fs(w, f, T);
      }
      if (u) {
        const I = m === "y" ? "top" : "left", x = m === "y" ? "bottom" : "right", w = b + c[I], T = b - c[x];
        b = Fs(w, b, T);
      }
      const E = i.fn({
        ...t,
        [y]: f,
        [m]: b
      });
      return {
        ...E,
        data: {
          x: E.x - n,
          y: E.y - r,
          enabled: {
            [y]: s,
            [m]: u
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
        placement: o,
        rects: s,
        platform: u,
        elements: i
      } = t, {
        apply: a = () => {
        },
        ...d
      } = wn(e, t), c = await ki(t, d), m = xr(o), y = Xn(o), f = Xr(o) === "y", {
        width: b,
        height: E
      } = s.floating;
      let I, x;
      m === "top" || m === "bottom" ? (I = m, x = y === (await (u.isRTL == null ? void 0 : u.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (x = m, I = y === "end" ? "top" : "bottom");
      const w = E - c.top - c.bottom, T = b - c.left - c.right, O = Gr(E - c[I], w), W = Gr(b - c[x], T), U = !t.middlewareData.shift;
      let K = O, S = W;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = T), (r = t.middlewareData.shift) != null && r.enabled.y && (K = w), U && !y) {
        const _ = ft(c.left, 0), N = ft(c.right, 0), P = ft(c.top, 0), F = ft(c.bottom, 0);
        f ? S = b - 2 * (_ !== 0 || N !== 0 ? _ + N : ft(c.left, c.right)) : K = E - 2 * (P !== 0 || F !== 0 ? P + F : ft(c.top, c.bottom));
      }
      await a({
        ...t,
        availableWidth: S,
        availableHeight: K
      });
      const A = await u.getDimensions(i.floating);
      return b !== A.width || E !== A.height ? {
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
  const o = Vt(e), s = o ? e.offsetWidth : n, u = o ? e.offsetHeight : r, i = Wn(n) !== s || Wn(r) !== u;
  return i && (n = s, r = u), {
    width: n,
    height: r,
    $: i
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
    height: o,
    $: s
  } = hc(t);
  let u = (s ? Wn(n.width) : n.width) / r, i = (s ? Wn(n.height) : n.height) / o;
  return (!u || !Number.isFinite(u)) && (u = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: u,
    y: i
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
  const o = e.getBoundingClientRect(), s = rs(e);
  let u = Kt(1);
  t && (r ? dt(r) && (u = ln(r)) : u = ln(e));
  const i = N0(s, n, r) ? dc(s) : Kt(0);
  let a = (o.left + i.x) / u.x, d = (o.top + i.y) / u.y, c = o.width / u.x, m = o.height / u.y;
  if (s) {
    const y = Pt(s), f = r && dt(r) ? Pt(r) : r;
    let b = y, E = Ho(b);
    for (; E && r && f !== b; ) {
      const I = ln(E), x = E.getBoundingClientRect(), w = Lt(E), T = x.left + (E.clientLeft + parseFloat(w.paddingLeft)) * I.x, O = x.top + (E.clientTop + parseFloat(w.paddingTop)) * I.y;
      a *= I.x, d *= I.y, c *= I.x, m *= I.y, a += T, d += O, b = Pt(E), E = Ho(b);
    }
  }
  return Si({
    width: c,
    height: m,
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
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ns(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function U0(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", u = zt(r), i = t ? Oi(t.floating) : !1;
  if (r === u || i && s)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Kt(1);
  const c = Kt(0), m = Vt(r);
  if ((m || !m && !s) && ((mn(r) !== "body" || Gn(u)) && (a = Ci(r)), Vt(r))) {
    const f = Yr(r);
    d = ln(r), c.x = f.x + r.clientLeft, c.y = f.y + r.clientTop;
  }
  const y = u && !m && !s ? pc(u, a, !0) : Kt(0);
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
  const t = zt(e), n = Ci(e), r = e.ownerDocument.body, o = ft(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = ft(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let u = -n.scrollLeft + ns(e);
  const i = -n.scrollTop;
  return Lt(r).direction === "rtl" && (u += ft(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: u,
    y: i
  };
}
function M0(e, t) {
  const n = Pt(e), r = zt(e), o = n.visualViewport;
  let s = r.clientWidth, u = r.clientHeight, i = 0, a = 0;
  if (o) {
    s = o.width, u = o.height;
    const d = ts();
    (!d || d && t === "fixed") && (i = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: s,
    height: u,
    x: i,
    y: a
  };
}
function D0(e, t) {
  const n = Yr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Vt(e) ? ln(e) : Kt(1), u = e.clientWidth * s.x, i = e.clientHeight * s.y, a = o * s.x, d = r * s.y;
  return {
    width: u,
    height: i,
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
    const o = dc(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
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
  let r = jn(e, [], !1).filter((i) => dt(i) && mn(i) !== "body"), o = null;
  const s = Lt(e).position === "fixed";
  let u = s ? Ir(e) : e;
  for (; dt(u) && !hn(u); ) {
    const i = Lt(u), a = es(u);
    !a && i.position === "fixed" && (o = null), (s ? !a && !o : !a && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Gn(u) && !a && gc(e, u)) ? r = r.filter((c) => c !== u) : o = i, u = Ir(u);
  }
  return t.set(e, r), r;
}
function j0(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const u = [...n === "clippingAncestors" ? Oi(t) ? [] : $0(t, this._c) : [].concat(n), r], i = u[0], a = u.reduce((d, c) => {
    const m = Us(t, c, o);
    return d.top = ft(m.top, d.top), d.right = Gr(m.right, d.right), d.bottom = Gr(m.bottom, d.bottom), d.left = ft(m.left, d.left), d;
  }, Us(t, i, o));
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
  const r = Vt(t), o = zt(t), s = n === "fixed", u = Yr(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Kt(0);
  if (r || !r && !s)
    if ((mn(t) !== "body" || Gn(o)) && (i = Ci(t)), r) {
      const y = Yr(t, !0, s, t);
      a.x = y.x + t.clientLeft, a.y = y.y + t.clientTop;
    } else o && (a.x = ns(o));
  const d = o && !r && !s ? pc(o, i) : Kt(0), c = u.left + i.scrollLeft - a.x - d.x, m = u.top + i.scrollTop - a.y - d.y;
  return {
    x: c,
    y: m,
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
    let o = Ir(e);
    for (; o && !hn(o); ) {
      if (dt(o) && !Yi(o))
        return o;
      o = Ir(o);
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
  const o = zt(e);
  function s() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function u(i, a) {
    i === void 0 && (i = !1), a === void 0 && (a = 1), s();
    const {
      left: d,
      top: c,
      width: m,
      height: y
    } = e.getBoundingClientRect();
    if (i || t(), !m || !y)
      return;
    const f = ri(c), b = ri(o.clientWidth - (d + m)), E = ri(o.clientHeight - (c + y)), I = ri(d), w = {
      rootMargin: -f + "px " + -b + "px " + -E + "px " + -I + "px",
      threshold: ft(0, Gr(1, a)) || 1
    };
    let T = !0;
    function O(W) {
      const U = W[0].intersectionRatio;
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
      n = new IntersectionObserver(O, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(O, w);
    }
    n.observe(e);
  }
  return u(!0), s;
}
function Y0(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: u = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, d = rs(e), c = o || s ? [...d ? jn(d) : [], ...jn(t)] : [];
  c.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), s && x.addEventListener("resize", n);
  });
  const m = d && i ? X0(d, n) : null;
  let y = -1, f = null;
  u && (f = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === d && f && (f.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var T;
      (T = f) == null || T.observe(t);
    })), n();
  }), d && !a && f.observe(d), f.observe(t));
  let b, E = a ? Yr(e) : null;
  a && I();
  function I() {
    const x = Yr(e);
    E && (x.x !== E.x || x.y !== E.y || x.width !== E.width || x.height !== E.height) && n(), E = x, b = requestAnimationFrame(I);
  }
  return n(), () => {
    var x;
    c.forEach((w) => {
      o && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), m == null || m(), (x = f) == null || x.disconnect(), f = null, a && cancelAnimationFrame(b);
  };
}
const zi = ki, z0 = k0, Q0 = B0, J0 = O0, Z0 = R0, eh = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: G0,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return _0(e, t, {
    ...o,
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
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ti(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
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
    platform: o,
    elements: {
      reference: s,
      floating: u
    } = {},
    transform: i = !0,
    whileElementsMounted: a,
    open: d
  } = e, [c, m] = he.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [y, f] = he.useState(r);
  Ti(y, r) || f(r);
  const [b, E] = he.useState(null), [I, x] = he.useState(null), w = he.useCallback((k) => {
    k !== U.current && (U.current = k, E(k));
  }, []), T = he.useCallback((k) => {
    k !== K.current && (K.current = k, x(k));
  }, []), O = s || b, W = u || I, U = he.useRef(null), K = he.useRef(null), S = he.useRef(c), A = a != null, _ = Qi(a), N = Qi(o), P = Qi(d), F = he.useCallback(() => {
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
      j.current && !Ti(S.current, Y) && (S.current = Y, yi.flushSync(() => {
        m(Y);
      }));
    });
  }, [y, t, n, N, P]);
  wi(() => {
    d === !1 && S.current.isPositioned && (S.current.isPositioned = !1, m((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [d]);
  const j = he.useRef(!1);
  wi(() => (j.current = !0, () => {
    j.current = !1;
  }), []), wi(() => {
    if (O && (U.current = O), W && (K.current = W), O && W) {
      if (_.current)
        return _.current(O, W, F);
      F();
    }
  }, [O, W, F, _, A]);
  const H = he.useMemo(() => ({
    reference: U,
    floating: K,
    setReference: w,
    setFloating: T
  }), [w, T]), $ = he.useMemo(() => ({
    reference: O,
    floating: W
  }), [O, W]), G = he.useMemo(() => {
    const k = {
      position: n,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return k;
    const M = Hs($.floating, c.x), Y = Hs($.floating, c.y);
    return i ? {
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
  }, [n, i, $.floating, c.x, c.y]);
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
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
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
  const o = "Floating UI: " + n.join(" ");
  if (!((e = Kn) != null && e.has(o))) {
    var s;
    (s = Kn) == null || s.add(o), console.warn(o);
  }
}
function hh() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = Kn) != null && e.has(o))) {
    var s;
    (s = Kn) == null || s.add(o), console.error(o);
  }
}
function dh() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
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
  } = e, o = lh(), s = he.useRef({}), [u] = he.useState(() => dh()), i = mh() != null;
  if (sr.env.NODE_ENV !== "production") {
    const f = r.reference;
    f && !dt(f) && hh("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [a, d] = he.useState(r.reference), c = Ac((f, b, E) => {
    s.current.openEvent = f ? b : void 0, u.emit("openchange", {
      open: f,
      event: b,
      reason: E,
      nested: i
    }), n == null || n(f, b, E);
  }), m = he.useMemo(() => ({
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
    floatingId: o,
    refs: m
  }), [t, c, y, u, o, m]);
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
  }), r = e.rootContext || n, o = r.elements, [s, u] = he.useState(null), [i, a] = he.useState(null), c = (o == null ? void 0 : o.domReference) || s, m = he.useRef(null), y = wh();
  Do(() => {
    c && (m.current = c);
  }, [c]);
  const f = th({
    ...e,
    elements: {
      ...o,
      ...i && {
        reference: i
      }
    }
  }), b = he.useCallback((T) => {
    const O = dt(T) ? {
      getBoundingClientRect: () => T.getBoundingClientRect(),
      contextElement: T
    } : T;
    a(O), f.refs.setReference(O);
  }, [f.refs]), E = he.useCallback((T) => {
    (dt(T) || T === null) && (m.current = T, u(T)), (dt(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    T !== null && !dt(T)) && f.refs.setReference(T);
  }, [f.refs]), I = he.useMemo(() => ({
    ...f.refs,
    setReference: E,
    setPositionReference: b,
    domReference: m
  }), [f.refs, E, b]), x = he.useMemo(() => ({
    ...f.elements,
    domReference: c
  }), [f.elements, c]), w = he.useMemo(() => ({
    ...f,
    ...r,
    refs: I,
    elements: x,
    nodeId: t
  }), [f, I, x, t, r]);
  return Do(() => {
    r.dataRef.current.floatingContext = w;
    const T = y == null ? void 0 : y.nodesRef.current.find((O) => O.id === t);
    T && (T.context = w);
  }), he.useMemo(() => ({
    ...f,
    context: w,
    refs: I,
    elements: x
  }), [f, I, x, w]);
}
const $s = "active", js = "selected";
function Ji(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let s = e;
  if (o && e) {
    const {
      [$s]: u,
      [js]: i,
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
      const i = u ? u[n] : null;
      return typeof i == "function" ? e ? i(e) : null : i;
    }).concat(e).reduce((u, i) => (i && Object.entries(i).forEach((a) => {
      let [d, c] = a;
      if (!(o && [$s, js].includes(d)))
        if (d.indexOf("on") === 0) {
          if (r.has(d) || r.set(d, []), typeof c == "function") {
            var m;
            (m = r.get(d)) == null || m.push(c), u[d] = function() {
              for (var y, f = arguments.length, b = new Array(f), E = 0; E < f; E++)
                b[E] = arguments[E];
              return (y = r.get(d)) == null ? void 0 : y.map((I) => I(...b)).find((I) => I !== void 0);
            };
          }
        } else
          u[d] = c;
    }), u), {})
  };
}
function bh(e) {
  e === void 0 && (e = []);
  const t = e.map((i) => i == null ? void 0 : i.reference), n = e.map((i) => i == null ? void 0 : i.floating), r = e.map((i) => i == null ? void 0 : i.item), o = he.useCallback(
    (i) => Ji(i, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), s = he.useCallback(
    (i) => Ji(i, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), u = he.useCallback(
    (i) => Ji(i, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return he.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: s,
    getItemProps: u
  }), [o, s, u]);
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
      onFallbackChange: o,
      offset: s = 0,
      index: u = 0,
      minItemsVisible: i = 4,
      referenceOverflowThreshold: a = 0,
      scrollRef: d,
      ...c
    } = wn(e, t), {
      rects: m,
      elements: {
        floating: y
      }
    } = t, f = n.current[u], b = (d == null ? void 0 : d.current) || y, E = y.clientTop || b.clientTop, I = y.clientTop !== 0, x = b.clientTop !== 0, w = y === b;
    if (sr.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || fh('`placement` side must be "bottom" when using the `inner`', "middleware.")), !f)
      return {};
    const T = {
      ...t,
      ...await yc(-f.offsetTop - y.clientTop - m.reference.height / 2 - f.offsetHeight / 2 - s).fn(t)
    }, O = await zi(Ws(T, b.scrollHeight + E + y.clientTop), c), W = await zi(T, {
      ...c,
      elementContext: "reference"
    }), U = ft(0, O.top), K = T.y + U, _ = (b.scrollHeight > b.clientHeight ? (N) => N : Wn)(ft(0, b.scrollHeight + (I && w || x ? E * 2 : 0) - U - ft(0, O.bottom)));
    if (b.style.maxHeight = _ + "px", b.scrollTop = U, o) {
      const N = b.offsetHeight < f.offsetHeight * Gr(i, n.current.length) - 1 || W.top >= -a || W.bottom >= -a;
      yi.flushSync(() => o(N));
    }
    return r && (r.current = await zi(Ws({
      ...T,
      y: K
    }, b.offsetHeight + E + y.clientTop), c)), {
      y: K
    };
  }
});
function Ph(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: s,
    scrollRef: u,
    onChange: i
  } = t, a = Ac(i), d = he.useRef(!1), c = he.useRef(null), m = he.useRef(null);
  he.useEffect(() => {
    if (!o) return;
    function f(E) {
      if (E.ctrlKey || !b || s.current == null)
        return;
      const I = E.deltaY, x = s.current.top >= -0.5, w = s.current.bottom >= -0.5, T = b.scrollHeight - b.clientHeight, O = I < 0 ? -1 : 1, W = I < 0 ? "max" : "min";
      b.scrollHeight <= b.clientHeight || (!x && I > 0 || !w && I < 0 ? (E.preventDefault(), yi.flushSync(() => {
        a((U) => U + Math[W](I, T * O));
      })) : /firefox/i.test(E0()) && (b.scrollTop += I));
    }
    const b = (u == null ? void 0 : u.current) || r.floating;
    if (n && b)
      return b.addEventListener("wheel", f), requestAnimationFrame(() => {
        c.current = b.scrollTop, s.current != null && (m.current = {
          ...s.current
        });
      }), () => {
        c.current = null, m.current = null, b.removeEventListener("wheel", f);
      };
  }, [o, n, r.floating, s, u, a]);
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
          const b = f.scrollTop - c.current;
          (s.current.bottom < -0.5 && b < -1 || s.current.top < -0.5 && b > 1) && yi.flushSync(() => a((E) => E + b));
        }
        requestAnimationFrame(() => {
          c.current = f.scrollTop;
        });
      }
    }
  }), [r.floating, a, s, u]);
  return he.useMemo(() => o ? {
    floating: y
  } : {}, [o, y]);
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
  let t = Ve(is), n = Ce(() => e, [JSON.stringify(e, (o, s) => {
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
  let [n, r] = Pe(null), [o, s] = Pe(0), u = be(null), [i, a] = Pe(null);
  Ch(i);
  let d = t && n !== null && i !== null, { to: c = "bottom", gap: m = 0, offset: y = 0, padding: f = 0, inner: b } = kh(n, i), [E, I = "center"] = c.split(" ");
  Ne(() => {
    d && s(0);
  }, [d]);
  let { refs: x, floatingStyles: w, context: T } = Ah({ open: d, placement: E === "selection" ? I === "center" ? "bottom" : `bottom-${I}` : I === "center" ? `${E}` : `${E}-${I}`, strategy: "absolute", transform: !1, middleware: [yc({ mainAxis: E === "selection" ? 0 : m, crossAxis: y }), rh({ padding: f }), E !== "selection" && nh({ padding: f }), E === "selection" && b ? vh({ ...b, padding: f, overflowRef: u, offset: o, minItemsVisible: Ks, referenceOverflowThreshold: f, onFallbackChange(N) {
    var P, F;
    if (!N) return;
    let j = T.elements.floating;
    if (!j) return;
    let H = parseFloat(getComputedStyle(j).scrollPaddingBottom) || 0, $ = Math.min(Ks, j.childElementCount), G = 0, k = 0;
    for (let M of (F = (P = T.elements.floating) == null ? void 0 : P.childNodes) != null ? F : []) if (M instanceof HTMLElement) {
      let Y = M.offsetTop, Z = Y + M.clientHeight + H, ne = j.scrollTop, se = ne + j.clientHeight;
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
  } })].filter(Boolean), whileElementsMounted: Y0 }), [O = E, W = I] = T.placement.split("-");
  E === "selection" && (O = "selection");
  let U = Ce(() => ({ anchor: [O, W].filter(Boolean).join(" ") }), [O, W]), K = Ph(T, { overflowRef: u, onChange: s }), { getReferenceProps: S, getFloatingProps: A } = bh([K]), _ = Ee((N) => {
    a(N), x.setFloating(N);
  });
  return he.createElement(is.Provider, { value: r }, he.createElement(yn.Provider, { value: { setFloating: _, setReference: x.setReference, styles: w, getReferenceProps: S, getFloatingProps: A, slot: U } }, e));
}
function Ch(e) {
  Ne(() => {
    if (!e) return;
    let t = new MutationObserver(() => {
      let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
      if (isNaN(r)) return;
      let o = parseInt(n);
      isNaN(o) || r !== o && (e.style.maxHeight = `${Math.ceil(r)}px`);
    });
    return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), () => {
      t.disconnect();
    };
  }, [e]);
}
function kh(e, t) {
  var n, r, o;
  let s = Zi((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), u = Zi((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), i = Zi((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: s, offset: u, padding: i };
}
function Zi(e, t, n = void 0) {
  let r = dn(), o = Ee((a, d) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!d) return [n, null];
      let c = qs(a, d);
      return [c, (m) => {
        let y = bc(a);
        {
          let f = y.map((b) => window.getComputedStyle(d).getPropertyValue(b));
          r.requestAnimationFrame(function b() {
            r.nextFrame(b);
            let E = !1;
            for (let [x, w] of y.entries()) {
              let T = window.getComputedStyle(d).getPropertyValue(w);
              if (f[x] !== T) {
                f[x] = T, E = !0;
                break;
              }
            }
            if (!E) return;
            let I = qs(a, d);
            c !== I && (m(I), c = I);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), s = Ce(() => o(e, t)[0], [e, t]), [u = s, i] = Pe();
  return Ne(() => {
    let [a, d] = o(e, t);
    if (i(a), !!d) return d(i);
  }, [e, t]), u;
}
function bc(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...bc(o)] : [r];
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
  let r = t.resolveActiveIndex(), o = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let s = 0; s < n.length; ++s) if (!t.resolveDisabled(n[s], s, n)) return s;
      return r;
    }
    case 1: {
      o === -1 && (o = n.length);
      for (let s = o - 1; s >= 0; --s) if (!t.resolveDisabled(n[s], s, n)) return s;
      return r;
    }
    case 2: {
      for (let s = o + 1; s < n.length; ++s) if (!t.resolveDisabled(n[s], s, n)) return s;
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
  let t = Uh(), n = Ve(Ic), r = gn(e), [o, s] = Pe(() => {
    var u;
    if (!t && n !== null) return (u = n.current) != null ? u : null;
    if (qr.isServer) return null;
    let i = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (i) return i;
    if (r === null) return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return Me(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), Me(() => {
    t || n !== null && s(n.current);
  }, [n, s, t]), o;
}
let Tc = ot, Hh = Ge(function(e, t) {
  let n = e, r = be(null), o = Et(Ff((m) => {
    r.current = m;
  }), t), s = gn(r), u = Lh(r), [i] = Pe(() => {
    var m;
    return qr.isServer ? null : (m = s == null ? void 0 : s.createElement("div")) != null ? m : null;
  }), a = Ve($o), d = zn();
  Ne(() => {
    !u || !i || u.contains(i) || (i.setAttribute("data-headlessui-portal", ""), u.appendChild(i));
  }, [u, i]), Ne(() => {
    if (i && a) return a.register(i);
  }, [a, i]), Pc(() => {
    var m;
    !u || !i || (i instanceof Node && u.contains(i) && u.removeChild(i), u.childNodes.length <= 0 && ((m = u.parentElement) == null || m.removeChild(u)));
  });
  let c = et();
  return d ? !u || !i ? null : ll(c({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: Tc, name: "Portal" }), i) : null;
});
function Mh(e, t) {
  let n = Et(t), { enabled: r = !0, ...o } = e, s = et();
  return r ? de.createElement(Hh, { ...o, ref: n }) : s({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: Tc, name: "Portal" });
}
let Dh = ot, Ic = ut(null);
function $h(e, t) {
  let { target: n, ...r } = e, o = { ref: Et(t) }, s = et();
  return de.createElement(Ic.Provider, { value: n }, s({ ourProps: o, theirProps: r, defaultTag: Dh, name: "Popover.Group" }));
}
let $o = ut(null);
function jh() {
  let e = Ve($o), t = be([]), n = Ee((s) => (t.current.push(s), e && e.register(s), () => r(s))), r = Ee((s) => {
    let u = t.current.indexOf(s);
    u !== -1 && t.current.splice(u, 1), e && e.unregister(s);
  }), o = Ce(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, Ce(() => function({ children: s }) {
    return de.createElement($o.Provider, { value: o }, s);
  }, [o])];
}
let Wh = Ge(Mh), xc = Ge($h), _c = Object.assign(Wh, { Group: xc });
function Kh(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = pn(e, "escape");
  nc(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === it.Escape && n(o));
  });
}
function qh() {
  var e;
  let [t] = Pe(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = Pe((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return Ne(() => {
    if (!t) return;
    function o(s) {
      r(s.matches);
    }
    return t.addEventListener("change", o), () => t.removeEventListener("change", o);
  }, [t]), n;
}
function Vh({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = gn(n), o = Ee(() => {
    var s, u;
    let i = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? i.push(a) : "current" in a && a.current instanceof HTMLElement && i.push(a.current));
    if (t != null && t.current) for (let a of t.current) i.push(a);
    for (let a of (s = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? s : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((u = n == null ? void 0 : n.getRootNode()) == null ? void 0 : u.host)) || i.some((d) => a.contains(d)) || i.push(a));
    return i;
  });
  return { resolveContainers: o, contains: Ee((s) => o().some((u) => u.contains(s))) };
}
let Oc = ut(null);
function Gs({ children: e, node: t }) {
  let [n, r] = Pe(null), o = Cc(t ?? n);
  return de.createElement(Oc.Provider, { value: o }, e, o === null && de.createElement(No, { features: bi.Hidden, ref: (s) => {
    var u, i;
    if (s) {
      for (let a of (i = (u = zr(s)) == null ? void 0 : u.querySelectorAll("html > *, body > *")) != null ? i : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(s)) {
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
  let n = be(null), r = Et(n, t), { initialFocus: o, initialFocusFallback: s, containers: u, features: i = 15, ...a } = e;
  zn() || (i = 0);
  let d = gn(n);
  Zh(i, { ownerDocument: d });
  let c = ed(i, { ownerDocument: d, container: n, initialFocus: o, initialFocusFallback: s });
  td(i, { ownerDocument: d, container: n, containers: u, previousActiveElement: c });
  let m = Gh(), y = Ee((w) => {
    let T = n.current;
    T && ((O) => O())(() => {
      qt(m.current, { [Un.Forwards]: () => {
        cn(T, Ut.First, { skipElements: [w.relatedTarget, s] });
      }, [Un.Backwards]: () => {
        cn(T, Ut.Last, { skipElements: [w.relatedTarget, s] });
      } });
    });
  }), f = pn(!!(i & 2), "focus-trap#tab-lock"), b = dn(), E = be(!1), I = { ref: r, onKeyDown(w) {
    w.key == "Tab" && (E.current = !0, b.requestAnimationFrame(() => {
      E.current = !1;
    }));
  }, onBlur(w) {
    if (!(i & 4)) return;
    let T = kc(u);
    n.current instanceof HTMLElement && T.add(n.current);
    let O = w.relatedTarget;
    O instanceof HTMLElement && O.dataset.headlessuiFocusGuard !== "true" && (Bc(T, O) || (E.current ? cn(n.current, qt(m.current, { [Un.Forwards]: () => Ut.Next, [Un.Backwards]: () => Ut.Previous }) | Ut.WrapAround, { relativeTo: w.target }) : w.target instanceof HTMLElement && Wt(w.target)));
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
function ed(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let s = be(null), u = pn(!!(e & 1), "focus-trap#initial-focus"), i = os();
  return Zo(() => {
    if (e === 0) return;
    if (!u) {
      o != null && o.current && Wt(o.current);
      return;
    }
    let a = n.current;
    a && Ii(() => {
      if (!i.current) return;
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
        if (o != null && o.current && (Wt(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      s.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, u, e]), s;
}
function td(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let s = os(), u = !!(e & 4);
  nc(t == null ? void 0 : t.defaultView, "focus", (i) => {
    if (!u || !s.current) return;
    let a = kc(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let d = o.current;
    if (!d) return;
    let c = i.target;
    c && c instanceof HTMLElement ? Bc(a, c) ? (o.current = c, Wt(c)) : (i.preventDefault(), i.stopPropagation(), Wt(d)) : Wt(o.current);
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
  let n = Qr(e), r = be([]), o = os(), s = dn(), u = Ee((f, b = Tr.Hidden) => {
    let E = r.current.findIndex(({ el: I }) => I === f);
    E !== -1 && (qt(b, { [Tr.Unmount]() {
      r.current.splice(E, 1);
    }, [Tr.Hidden]() {
      r.current[E].state = "hidden";
    } }), s.microTask(() => {
      var I;
      !Ni(r) && o.current && ((I = n.current) == null || I.call(n));
    }));
  }), i = Ee((f) => {
    let b = r.current.find(({ el: E }) => E === f);
    return b ? b.state !== "visible" && (b.state = "visible") : r.current.push({ el: f, state: "visible" }), () => u(f, Tr.Unmount);
  }), a = be([]), d = be(Promise.resolve()), c = be({ enter: [], leave: [] }), m = Ee((f, b, E) => {
    a.current.splice(0), t && (t.chains.current[b] = t.chains.current[b].filter(([I]) => I !== f)), t == null || t.chains.current[b].push([f, new Promise((I) => {
      a.current.push(I);
    })]), t == null || t.chains.current[b].push([f, new Promise((I) => {
      Promise.all(c.current[b].map(([x, w]) => w)).then(() => I());
    })]), b === "enter" ? d.current = d.current.then(() => t == null ? void 0 : t.wait.current).then(() => E(b)) : E(b);
  }), y = Ee((f, b, E) => {
    Promise.all(c.current[b].splice(0).map(([I, x]) => x)).then(() => {
      var I;
      (I = a.current.shift()) == null || I();
    }).then(() => E(b));
  });
  return Ce(() => ({ children: r, register: i, unregister: u, onStart: m, onStop: y, wait: d, chains: c }), [i, u, r, m, y, c, d]);
}
let Nc = ot, Uc = fn.RenderStrategy;
function od(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: s, afterEnter: u, beforeLeave: i, afterLeave: a, enter: d, enterFrom: c, enterTo: m, entered: y, leave: f, leaveFrom: b, leaveTo: E, ...I } = e, [x, w] = Pe(null), T = be(null), O = Rc(e), W = Et(...O ? [T, t, w] : t === null ? [] : [t]), U = (n = I.unmount) == null || n ? Tr.Unmount : Tr.Hidden, { show: K, appear: S, initial: A } = nd(), [_, N] = Pe(K ? "visible" : "hidden"), P = id(), { register: F, unregister: j } = P;
  Ne(() => F(T), [F, T]), Ne(() => {
    if (U === Tr.Hidden && T.current) {
      if (K && _ !== "visible") {
        N("visible");
        return;
      }
      return qt(_, { hidden: () => j(T), visible: () => F(T) });
    }
  }, [_, T, F, j, K, U]);
  let H = zn();
  Ne(() => {
    if (O && H && _ === "visible" && T.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [T, _, H, O]);
  let $ = A && !S, G = S && K && A, k = be(!1), M = Fc(() => {
    k.current || (N("hidden"), j(T));
  }, P), Y = Ee((xe) => {
    k.current = !0;
    let $e = xe ? "enter" : "leave";
    M.onStart(T, $e, (Je) => {
      Je === "enter" ? s == null || s() : Je === "leave" && (i == null || i());
    });
  }), Z = Ee((xe) => {
    let $e = xe ? "enter" : "leave";
    k.current = !1, M.onStop(T, $e, (Je) => {
      Je === "enter" ? u == null || u() : Je === "leave" && (a == null || a());
    }), $e === "leave" && !Ni(M) && (N("hidden"), j(T));
  });
  Me(() => {
    O && o || (Y(K), Z(K));
  }, [K, O, o]);
  let ne = !(!o || !O || !H || $), [, se] = sc(ne, x, K, { start: Y, end: Z }), pe = Dr({ ref: W, className: ((r = Fo(I.className, G && d, G && c, se.enter && d, se.enter && se.closed && c, se.enter && !se.closed && m, se.leave && f, se.leave && !se.closed && b, se.leave && se.closed && E, !se.transition && K && y)) == null ? void 0 : r.trim()) || void 0, ...oc(se) }), ae = 0;
  _ === "visible" && (ae |= wt.Open), _ === "hidden" && (ae |= wt.Closed), se.enter && (ae |= wt.Opening), se.leave && (ae |= wt.Closing);
  let ge = et();
  return de.createElement(Fi.Provider, { value: M }, de.createElement(vc, { value: ae }, ge({ ourProps: pe, theirProps: I, defaultTag: Nc, features: Uc, visible: _ === "visible", name: "Transition.Child" })));
}
function sd(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...s } = e, u = be(null), i = Rc(e), a = Et(...i ? [u, t] : t === null ? [] : [t]);
  zn();
  let d = Yn();
  if (n === void 0 && d !== null && (n = (d & wt.Open) === wt.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, m] = Pe(n ? "visible" : "hidden"), y = Fc(() => {
    n || m("hidden");
  }), [f, b] = Pe(!0), E = be([n]);
  Ne(() => {
    f !== !1 && E.current[E.current.length - 1] !== n && (E.current.push(n), b(!1));
  }, [E, n]);
  let I = Ce(() => ({ show: n, appear: r, initial: f }), [n, r, f]);
  Ne(() => {
    n ? m("visible") : !Ni(y) && u.current !== null && m("hidden");
  }, [n, y]);
  let x = { unmount: o }, w = Ee(() => {
    var W;
    f && b(!1), (W = e.beforeEnter) == null || W.call(e);
  }), T = Ee(() => {
    var W;
    f && b(!1), (W = e.beforeLeave) == null || W.call(e);
  }), O = et();
  return de.createElement(Fi.Provider, { value: y }, de.createElement(Ri.Provider, { value: I }, O({ ourProps: { ...x, as: ot, children: de.createElement(Lc, { ref: a, ...x, ...s, beforeEnter: w, beforeLeave: T }) }, theirProps: {}, defaultTag: ot, features: Uc, visible: c === "visible", name: "Transition" })));
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
  let n = Gt(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: s, initialFocus: u, role: i = "dialog", autoFocus: a = !0, __demoMode: d = !1, unmount: c = !1, ...m } = e, y = be(!1);
  i = function() {
    return i === "dialog" || i === "alertdialog" ? i : (y.current || (y.current = !0, console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let f = Yn();
  o === void 0 && f !== null && (o = (f & wt.Open) === wt.Open);
  let b = be(null), E = Et(b, t), I = gn(b), x = o ? 0 : 1, [w, T] = Vo(fd, { titleId: null, descriptionId: null, panelRef: cl() }), O = Ee(() => s(!1)), W = Ee((Z) => T({ type: 0, id: Z })), U = zn() ? x === 0 : !1, [K, S] = jh(), A = { get current() {
    var Z;
    return (Z = w.panelRef.current) != null ? Z : b.current;
  } }, _ = Cc(), { resolveContainers: N } = Vh({ mainTreeNode: _, portals: K, defaultContainers: [A] }), P = f !== null ? (f & wt.Closing) === wt.Closing : !1;
  Ya(d || P ? !1 : U, { allowed: Ee(() => {
    var Z, ne;
    return [(ne = (Z = b.current) == null ? void 0 : Z.closest("[data-headlessui-portal]")) != null ? ne : null];
  }), disallowed: Ee(() => {
    var Z;
    return [(Z = _ == null ? void 0 : _.closest("body > *:not(#headlessui-portal-root)")) != null ? Z : null];
  }) }), rc(U, N, (Z) => {
    Z.preventDefault(), O();
  }), Kh(U, I == null ? void 0 : I.defaultView, (Z) => {
    Z.preventDefault(), Z.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), O();
  }), ic(d || P ? !1 : U, I, N), za(U, b, O);
  let [F, j] = qa(), H = Ce(() => [{ dialogState: x, close: O, setTitleId: W, unmount: c }, w], [x, w, O, W, c]), $ = Ce(() => ({ open: x === 0 }), [x]), G = { ref: E, id: r, role: i, tabIndex: -1, "aria-modal": d ? void 0 : x === 0 ? !0 : void 0, "aria-labelledby": w.titleId, "aria-describedby": F, unmount: c }, k = !qh(), M = $r.None;
  U && !d && (M |= $r.RestoreFocus, M |= $r.TabLock, a && (M |= $r.AutoFocus), k && (M |= $r.InitialFocus));
  let Y = et();
  return de.createElement(Bh, null, de.createElement(Vs, { force: !0 }, de.createElement(_c, null, de.createElement(us.Provider, { value: H }, de.createElement(xc, { target: b }, de.createElement(Vs, { force: !1 }, de.createElement(j, { slot: $ }, de.createElement(S, null, de.createElement(Qh, { initialFocus: u, initialFocusFallback: b, containers: N, features: M }, de.createElement(Kf, { value: O }, Y({ ourProps: G, theirProps: m, slot: $, defaultTag: hd, features: dd, visible: x === 0, name: "Dialog" })))))))))));
}), hd = "div", dd = fn.RenderStrategy | fn.Static;
function pd(e, t) {
  let { transition: n = !1, open: r, ...o } = e, s = Yn(), u = e.hasOwnProperty("open") || s !== null, i = e.hasOwnProperty("onClose");
  if (!u && !i) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!u) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!i) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!s && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? de.createElement(Gs, null, de.createElement($n, { show: r, transition: n, unmount: o.unmount }, de.createElement(Xs, { ref: t, ...o }))) : de.createElement(Gs, null, de.createElement(Xs, { ref: t, open: r, ...o }));
}
let gd = "div";
function md(e, t) {
  let n = Gt(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...s } = e, [{ dialogState: u, unmount: i }, a] = Ui("Dialog.Panel"), d = Et(t, a.panelRef), c = Ce(() => ({ open: u === 0 }), [u]), m = Ee((I) => {
    I.stopPropagation();
  }), y = { ref: d, id: r, onClick: m }, f = o ? ss : ot, b = o ? { unmount: i } : {}, E = et();
  return de.createElement(f, { ...b }, E({ ourProps: y, theirProps: s, slot: c, defaultTag: gd, name: "Dialog.Panel" }));
}
let wd = "div";
function yd(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: s }] = Ui("Dialog.Backdrop"), u = Ce(() => ({ open: o === 0 }), [o]), i = { ref: t, "aria-hidden": !0 }, a = n ? ss : ot, d = n ? { unmount: s } : {}, c = et();
  return de.createElement(a, { ...d }, c({ ourProps: i, theirProps: r, slot: u, defaultTag: wd, name: "Dialog.Backdrop" }));
}
let Ed = "h2";
function Ad(e, t) {
  let n = Gt(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: s, setTitleId: u }] = Ui("Dialog.Title"), i = Et(t);
  Me(() => (u(r), () => u(null)), [r, u]);
  let a = Ce(() => ({ open: s === 0 }), [s]), d = { ref: i, id: r };
  return et()({ ourProps: d, theirProps: o, slot: a, defaultTag: Ed, name: "Dialog.Title" });
}
let bd = Ge(pd), vd = Ge(md);
Ge(yd);
let Pd = Ge(Ad), to = Object.assign(bd, { Panel: vd, Title: Pd, Description: Hf });
function Sd(e, t) {
  let n = be({ left: 0, top: 0 });
  if (Ne(() => {
    if (!t) return;
    let o = t.getBoundingClientRect();
    o && (n.current = o);
  }, [e, t]), t == null || !e || t === document.activeElement) return !1;
  let r = t.getBoundingClientRect();
  return r.top !== n.current.top || r.left !== n.current.left;
}
let Ys = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function zs(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", o = e.cloneNode(!0);
  if (!(o instanceof HTMLElement)) return r;
  let s = !1;
  for (let i of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) i.remove(), s = !0;
  let u = s ? (n = o.innerText) != null ? n : "" : r;
  return Ys.test(u) && (u = u.replace(Ys, "")), u;
}
function Td(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((o) => {
      let s = document.getElementById(o);
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
    let o = r.innerText;
    if (t.current === o) return n.current;
    let s = Td(r).trim().toLowerCase();
    return t.current = o, n.current = s, s;
  });
}
var xd = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(xd || {}), _d = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(_d || {}), Od = ((e) => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e[e.SetButtonElement = 7] = "SetButtonElement", e[e.SetItemsElement = 8] = "SetItemsElement", e))(Od || {});
function ro(e, t = (n) => n) {
  let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, r = Za(t(e.items.slice()), (s) => s.dataRef.current.domRef.current), o = n ? r.indexOf(n) : null;
  return o === -1 && (o = null), { items: r, activeItemIndex: o };
}
let Cd = { 1(e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, 0(e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
}, 2: (e, t) => {
  var n, r, o, s, u;
  if (e.menuState === 1) return e;
  let i = { ...e, searchQuery: "", activationTrigger: (n = t.trigger) != null ? n : 1, __demoMode: !1 };
  if (t.focus === ht.Nothing) return { ...i, activeItemIndex: null };
  if (t.focus === ht.Specific) return { ...i, activeItemIndex: e.items.findIndex((c) => c.id === t.id) };
  if (t.focus === ht.Previous) {
    let c = e.activeItemIndex;
    if (c !== null) {
      let m = e.items[c].dataRef.current.domRef, y = eo(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.current.disabled });
      if (y !== null) {
        let f = e.items[y].dataRef.current.domRef;
        if (((r = m.current) == null ? void 0 : r.previousElementSibling) === f.current || ((o = f.current) == null ? void 0 : o.previousElementSibling) === null) return { ...i, activeItemIndex: y };
      }
    }
  } else if (t.focus === ht.Next) {
    let c = e.activeItemIndex;
    if (c !== null) {
      let m = e.items[c].dataRef.current.domRef, y = eo(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.current.disabled });
      if (y !== null) {
        let f = e.items[y].dataRef.current.domRef;
        if (((s = m.current) == null ? void 0 : s.nextElementSibling) === f.current || ((u = f.current) == null ? void 0 : u.nextElementSibling) === null) return { ...i, activeItemIndex: y };
      }
    }
  }
  let a = ro(e), d = eo(t, { resolveItems: () => a.items, resolveActiveIndex: () => a.activeItemIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled });
  return { ...i, ...a, activeItemIndex: d };
}, 3: (e, t) => {
  let n = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + t.value.toLowerCase(), o = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((u) => {
    var i;
    return ((i = u.dataRef.current.textValue) == null ? void 0 : i.startsWith(r)) && !u.dataRef.current.disabled;
  }), s = o ? e.items.indexOf(o) : -1;
  return s === -1 || s === e.activeItemIndex ? { ...e, searchQuery: r } : { ...e, searchQuery: r, activeItemIndex: s, activationTrigger: 1 };
}, 4(e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, 5: (e, t) => {
  let n = ro(e, (r) => [...r, { id: t.id, dataRef: t.dataRef }]);
  return { ...e, ...n };
}, 6: (e, t) => {
  let n = ro(e, (r) => {
    let o = r.findIndex((s) => s.id === t.id);
    return o !== -1 && r.splice(o, 1), r;
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
  let { __demoMode: n = !1, ...r } = e, o = Vo(kd, { __demoMode: n, menuState: n ? 0 : 1, buttonElement: null, itemsElement: null, items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: s, itemsElement: u, buttonElement: i }, a] = o, d = Et(t);
  rc(s === 0, [i, u], (b, E) => {
    a({ type: 1 }), Jo(E, Qo.Loose) || (b.preventDefault(), i == null || i.focus());
  });
  let c = Ee(() => {
    a({ type: 1 });
  }), m = Ce(() => ({ open: s === 0, close: c }), [s, c]), y = { ref: d }, f = et();
  return de.createElement(Oh, null, de.createElement(as.Provider, { value: o }, de.createElement(vc, { value: qt(s, { 0: wt.Open, 1: wt.Closed }) }, f({ ourProps: y, theirProps: r, slot: m, defaultTag: Bd, name: "Menu" }))));
}
let Fd = "button";
function Nd(e, t) {
  var n;
  let r = Gt(), { id: o = `headlessui-menu-button-${r}`, disabled: s = !1, autoFocus: u = !1, ...i } = e, [a, d] = Li("Menu.Button"), c = Ih(), m = Et(t, Th(), Ee((K) => d({ type: 7, element: K }))), y = Ee((K) => {
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
  }), b = Ee((K) => {
    var S;
    if (Bf(K.currentTarget)) return K.preventDefault();
    s || (a.menuState === 0 ? (Ln(() => d({ type: 1 })), (S = a.buttonElement) == null || S.focus({ preventScroll: !0 })) : (K.preventDefault(), d({ type: 0 })));
  }), { isFocusVisible: E, focusProps: I } = mf({ autoFocus: u }), { isHovered: x, hoverProps: w } = gf({ isDisabled: s }), { pressed: T, pressProps: O } = vf({ disabled: s }), W = Ce(() => ({ open: a.menuState === 0, active: T || a.menuState === 0, disabled: s, hover: x, focus: E, autofocus: u }), [a, x, E, T, s, u]), U = ja(c(), { ref: m, id: o, type: i0(e, a.buttonElement), "aria-haspopup": "menu", "aria-controls": (n = a.itemsElement) == null ? void 0 : n.id, "aria-expanded": a.menuState === 0, disabled: s || void 0, autoFocus: u, onKeyDown: y, onKeyUp: f, onClick: b }, I, w, O);
  return et()({ ourProps: U, theirProps: i, slot: W, defaultTag: Fd, name: "Menu.Button" });
}
let Ud = "div", Ld = fn.RenderStrategy | fn.Static;
function Hd(e, t) {
  var n, r;
  let o = Gt(), { id: s = `headlessui-menu-items-${o}`, anchor: u, portal: i = !1, modal: a = !0, transition: d = !1, ...c } = e, m = Sh(u), [y, f] = Li("Menu.Items"), [b, E] = _h(m), I = xh(), [x, w] = Pe(null), T = Et(t, m ? b : null, Ee((k) => f({ type: 8, element: k })), w), O = gn(y.itemsElement);
  m && (i = !0);
  let W = Yn(), [U, K] = sc(d, x, W !== null ? (W & wt.Open) === wt.Open : y.menuState === 0);
  za(U, y.buttonElement, () => {
    f({ type: 1 });
  });
  let S = y.__demoMode ? !1 : a && y.menuState === 0;
  ic(S, O);
  let A = y.__demoMode ? !1 : a && y.menuState === 0;
  Ya(A, { allowed: ke(() => [y.buttonElement, y.itemsElement], [y.buttonElement, y.itemsElement]) });
  let _ = y.menuState !== 0, N = Sd(_, y.buttonElement) ? !1 : U;
  Me(() => {
    let k = y.itemsElement;
    k && y.menuState === 0 && k !== (O == null ? void 0 : O.activeElement) && k.focus({ preventScroll: !0 });
  }, [y.menuState, y.itemsElement, O]), m0(y.menuState === 0, { container: y.itemsElement, accept(k) {
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
  }), j = Ee((k) => {
    switch (k.key) {
      case it.Space:
        k.preventDefault();
        break;
    }
  }), H = Ce(() => ({ open: y.menuState === 0 }), [y.menuState]), $ = ja(m ? I() : {}, { "aria-activedescendant": y.activeItemIndex === null || (n = y.items[y.activeItemIndex]) == null ? void 0 : n.id, "aria-labelledby": (r = y.buttonElement) == null ? void 0 : r.id, id: s, onKeyDown: F, onKeyUp: j, role: "menu", tabIndex: y.menuState === 0 ? 0 : void 0, ref: T, style: { ...c.style, ...E, "--button-width": Vf(y.buttonElement, !0).width }, ...oc(K) }), G = et();
  return de.createElement(_c, { enabled: i ? e.static || U : !1 }, G({ ourProps: $, theirProps: c, slot: H, defaultTag: Ud, features: Ld, visible: N, name: "Menu.Items" }));
}
let Md = ot;
function Dd(e, t) {
  let n = Gt(), { id: r = `headlessui-menu-item-${n}`, disabled: o = !1, ...s } = e, [u, i] = Li("Menu.Item"), a = u.activeItemIndex !== null ? u.items[u.activeItemIndex].id === r : !1, d = be(null), c = Et(t, d);
  Ne(() => {
    if (!u.__demoMode && u.menuState === 0 && a && u.activationTrigger !== 0) return Yt().requestAnimationFrame(() => {
      var N, P;
      (P = (N = d.current) == null ? void 0 : N.scrollIntoView) == null || P.call(N, { block: "nearest" });
    });
  }, [u.__demoMode, d, a, u.menuState, u.activationTrigger, u.activeItemIndex]);
  let m = Id(d), y = be({ disabled: o, domRef: d, get textValue() {
    return m();
  } });
  Ne(() => {
    y.current.disabled = o;
  }, [y, o]), Ne(() => (i({ type: 5, id: r, dataRef: y }), () => i({ type: 6, id: r })), [y, r]);
  let f = Ee(() => {
    i({ type: 1 });
  }), b = Ee((N) => {
    if (o) return N.preventDefault();
    i({ type: 1 }), Ja(u.buttonElement);
  }), E = Ee(() => {
    if (o) return i({ type: 2, focus: ht.Nothing });
    i({ type: 2, focus: ht.Specific, id: r });
  }), I = l0(), x = Ee((N) => {
    I.update(N), !o && (a || i({ type: 2, focus: ht.Specific, id: r, trigger: 0 }));
  }), w = Ee((N) => {
    I.wasMoved(N) && (o || a || i({ type: 2, focus: ht.Specific, id: r, trigger: 0 }));
  }), T = Ee((N) => {
    I.wasMoved(N) && (o || a && i({ type: 2, focus: ht.Nothing }));
  }), [O, W] = Va(), [U, K] = qa(), S = Ce(() => ({ active: a, focus: a, disabled: o, close: f }), [a, o, f]), A = { id: r, ref: c, role: "menuitem", tabIndex: o === !0 ? void 0 : -1, "aria-disabled": o === !0 ? !0 : void 0, "aria-labelledby": O, "aria-describedby": U, disabled: void 0, onClick: b, onFocus: E, onPointerEnter: x, onMouseEnter: x, onPointerMove: w, onMouseMove: w, onPointerLeave: T, onMouseLeave: T }, _ = et();
  return de.createElement(W, null, de.createElement(K, null, _({ ourProps: A, theirProps: s, slot: S, defaultTag: Md, name: "Menu.Item" })));
}
let $d = "div";
function jd(e, t) {
  let [n, r] = Va(), o = e, s = { ref: t, "aria-labelledby": n, role: "group" }, u = et();
  return de.createElement(r, null, u({ ourProps: s, theirProps: o, slot: {}, defaultTag: $d, name: "Menu.Section" }));
}
let Wd = "header";
function Kd(e, t) {
  let n = Gt(), { id: r = `headlessui-menu-heading-${n}`, ...o } = e, s = zo();
  Ne(() => s.register(r), [r, s.register]);
  let u = { id: r, ref: t, role: "presentation", ...s.props };
  return et()({ ourProps: u, theirProps: o, slot: {}, defaultTag: Wd, name: "Menu.Heading" });
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
  const r = e.slice(0, t), o = e.slice(e.length - n);
  return `${r}...${o}`;
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
  onDisconnectWallet: o,
  renderAvatar: s
}) {
  const { wallet: u } = Xt();
  return /* @__PURE__ */ ue.jsx(
    rn,
    {
      as: "section",
      className: "ord-connect-font ord-wallet-connected-container relative inline-block text-left",
      children: ({ open: i }) => /* @__PURE__ */ ue.jsxs(ue.Fragment, { children: [
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
              className: `dropdown-button ${i ? "close-dropdown-button" : "expand-dropdown-button"}`,
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
                  onClick: () => o == null ? void 0 : o(),
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
      const o = await Ol(e, n, { readOnly: r });
      if (!o || o.length < 1)
        throw new Error("Unisat via Ordit returned no addresses");
      const s = o[0];
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
      const o = await Bl(e);
      if (!o || o.length < 1)
        throw new Error("Xverse via Ordit returned no addresses");
      const s = o.find(
        (i) => i.format === "p2sh-p2wpkh" || i.format === "segwit"
      );
      if (!s)
        throw new Error(
          "Xverse via Ordit did not return a P2SH or Segwit address"
        );
      const u = o.find(
        (i) => i.format === "taproot"
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
      const o = await wl(e);
      if (!o || o.length < 1)
        throw new Error("Magic Eden via Ordit returned no addresses");
      const s = o.find(
        (i) => i.format === "segwit" || i.format === "p2sh-p2wpkh"
      );
      if (!s)
        throw new Error(
          "Magic Eden via Ordit did not return a P2SH or Segwit address"
        );
      const u = o.find(
        (i) => i.format === "taproot"
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
      const o = await pl(e);
      if (!o || o.length < 1)
        throw new Error("Leather via Ordit returned no addresses");
      const s = o.find(
        (i) => i.format === "segwit"
      );
      if (!s)
        throw new Error("Leather via Ordit did not return a Segwit address");
      const u = o.find(
        (i) => i.format === "taproot"
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
      const o = await Al(e);
      if (!o || o.length < 1)
        throw new Error("OKX via Ordit returned no addresses");
      const s = o[0];
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
      const o = await Il(e);
      if (!o || o.length < 1)
        throw new Error("Phantom via Ordit returned no addresses");
      const s = o.find(
        (i) => i.format === "segwit"
      );
      if (!s)
        throw new Error("Phantom via Ordit did not return a Segwit address");
      const u = o.find(
        (i) => i.format === "taproot"
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
      const o = await Pl(e);
      if (!o || o.length < 1)
        throw new Error("Oyl via Ordit returned no addresses");
      const s = o.find(
        (i) => i.format === "p2sh-p2wpkh" || i.format === "segwit"
      );
      if (!s)
        throw new Error(
          "Oyl via Ordit did not return a P2SH or Segwit address"
        );
      const u = o.find(
        (i) => i.format === "taproot"
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
    updateWallet: o,
    updatePublicKey: s,
    updateFormat: u,
    disconnectWallet: i,
    address: a,
    publicKey: d,
    format: c,
    wallet: m,
    chain: y
  } = Xt(), f = (E, I) => {
    t(I.message ?? I.toString()), console.error(`Error while connecting to ${E} wallet`, I), i(), I instanceof fl && window.open(
      ap[E],
      "_blank",
      "noopener,noreferrer"
    );
  }, b = async (E, { readOnly: I = !1 } = {}) => {
    try {
      const { address: x, publicKey: w, format: T } = await cp(
        { network: r, wallet: E, chain: y },
        { readOnly: I }
      );
      return n({
        ordinals: x.ordinals,
        payments: x.payments
      }), s({
        ordinals: w.ordinals,
        payments: w.payments
      }), o(E), u({
        ordinals: T.ordinals,
        payments: T.payments
      }), e(), !0;
    } catch (x) {
      return f(E, x), !1;
    }
  };
  return Me(() => {
    if (m !== le.UNISAT)
      return;
    let E = !0, I = !1;
    const x = () => b(le.UNISAT);
    return a && d && c && (async () => {
      const T = await up();
      if (E) {
        if (!T) {
          i();
          return;
        }
        I = await b(le.UNISAT, {
          readOnly: !0
        }), E && I && window.unisat.addListener("accountsChanged", x);
      }
    })(), () => {
      E = !1, I && window.unisat.removeListener("accountsChanged", x);
    };
  }, [m]), { connectWallet: b };
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
  isPreferred: o
}) {
  const s = qc(), { wallet: u, address: i } = Xt(), [a, d] = Pe(!1), c = dp[e], m = async () => {
    d(!0);
    try {
      await t();
    } catch {
    }
    d(!1);
  }, y = u === e && i.ordinals;
  return /* @__PURE__ */ ue.jsx(
    "button",
    {
      type: "button",
      className: "wallet-option-button",
      onClick: m,
      children: /* @__PURE__ */ ue.jsxs("div", { className: "option-wrapper", children: [
        /* @__PURE__ */ ue.jsx("img", { className: "wallet-icon", src: n, alt: "" }),
        /* @__PURE__ */ ue.jsxs("div", { className: "wallet-option", children: [
          /* @__PURE__ */ ue.jsx("p", { className: "wallet-option-label", children: c }),
          /* @__PURE__ */ ue.jsx("p", { className: "wallet-option-subtitle", children: s ? "Available on app" : "" })
        ] }),
        u === e && i.ordinals ? /* @__PURE__ */ ue.jsxs("div", { className: "wallet-option-connected-address", children: [
          r ? r(i.ordinals, "small") : /* @__PURE__ */ ue.jsx(
            ka,
            {
              size: s ? 12 : 16,
              variant: "beam",
              name: i.ordinals,
              colors: ["#1C2DCB", "#F226B8"]
            }
          ),
          /* @__PURE__ */ ue.jsx("span", { className: "label", children: Wo(i.ordinals) })
        ] }) : null,
        !y && o ? /* @__PURE__ */ ue.jsx("span", { className: "preferred-label", children: "Preferred" }) : null,
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
  walletsOrder: o
}) {
  const [s, u] = Pe(""), { connectWallet: i } = lp({
    onClose: t,
    onError: (y) => u(y)
  }), { network: a, chain: d } = Xt(), c = qc(), m = Ce(() => {
    const f = [
      {
        wallet: le.OKX,
        onConnect: () => i(le.OKX),
        icon: Dc,
        hidden: c && a !== Hn.MAINNET,
        order: 20,
        chains: [kt.BITCOIN]
      },
      {
        wallet: le.UNISAT,
        onConnect: () => i(le.UNISAT),
        icon: Wc,
        hidden: c,
        order: 21,
        chains: [kt.BITCOIN, kt.FRACTAL_BITCOIN]
      },
      {
        wallet: le.XVERSE,
        onConnect: () => i(le.XVERSE),
        icon: Kc,
        order: 22,
        chains: [kt.BITCOIN]
      },
      {
        wallet: le.MAGICEDEN,
        onConnect: () => i(le.MAGICEDEN),
        icon: Mc,
        order: 23,
        chains: [kt.BITCOIN]
      },
      {
        wallet: le.LEATHER,
        onConnect: () => i(le.LEATHER),
        icon: Hc,
        hidden: c,
        order: 24,
        chains: [kt.BITCOIN]
      },
      {
        wallet: le.PHANTOM,
        onConnect: () => i(le.PHANTOM),
        icon: jc,
        hidden: c,
        order: 25,
        chains: [kt.BITCOIN]
      },
      {
        wallet: le.OYL,
        onConnect: () => i(le.OYL),
        icon: $c,
        hidden: c,
        order: 26,
        chains: [kt.BITCOIN]
      }
    ].filter(
      (E) => E.chains.includes(d) && !E.hidden
    );
    return o ? f.map((E) => {
      const I = o.findIndex(
        (x) => x === E.wallet
      );
      return I >= 0 ? { ...E, order: I } : E;
    }).sort((E, I) => E.order - I.order) : f;
  }, [c, a, o, i, d]);
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
                  gp[d],
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
                /* @__PURE__ */ ue.jsx("section", { className: "panel-content-inner-container", children: m.map((y, f) => {
                  const b = f === m.length - 1;
                  return /* @__PURE__ */ ue.jsxs(ot, { children: [
                    /* @__PURE__ */ ue.jsx(
                      pp,
                      {
                        wallet: y.wallet,
                        onConnect: async () => {
                          u("");
                          const E = y.onConnect().then((x) => (x && u(""), x)), I = await Promise.race([
                            E,
                            new Promise((x) => {
                              setTimeout(() => x("timeout"), 5e3);
                            })
                          ]);
                          return typeof I == "string" ? (u(
                            "No wallet pop-up? The extension is not responding. Try reloading your browser."
                          ), E) : I;
                        },
                        icon: y.icon,
                        renderAvatar: n,
                        isPreferred: r === y.wallet
                      }
                    ),
                    !b && /* @__PURE__ */ ue.jsx("hr", { className: "horizontal-separator" })
                  ] }, y.wallet);
                }) }),
                /* @__PURE__ */ ue.jsx("p", { className: "error-message", children: s })
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
  renderAvatar: o,
  preferredWallet: s,
  walletsOrder: u
}) {
  const {
    address: i,
    disconnectWallet: a,
    network: d,
    isModalOpen: c,
    openModal: m,
    closeModal: y
  } = Xt(), f = Wl(), b = () => e ? null : i != null && i.ordinals ? /* @__PURE__ */ ue.jsx(
    ip,
    {
      address: i.ordinals,
      network: d,
      onViewProfile: t,
      onChangeWallet: () => {
        m(), n == null || n();
      },
      onDisconnectWallet: () => {
        a(), r == null || r();
      },
      renderAvatar: o
    }
  ) : /* @__PURE__ */ ue.jsx(op, { disabled: !f, openModal: m });
  return /* @__PURE__ */ ue.jsxs(ue.Fragment, { children: [
    b(),
    f ? /* @__PURE__ */ ue.jsx(
      mp,
      {
        isOpen: c,
        closeModal: y,
        renderAvatar: o,
        preferredWallet: s,
        walletsOrder: u
      }
    ) : null
  ] });
}
var wp = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, no = Math.ceil, _t = Math.floor, vt = "[BigNumber Error] ", Qs = vt + "Number primitive has more than 15 significant digits: ", Ft = 1e14, Ae = 14, io = 9007199254740991, oo = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], lr = 1e7, nt = 1e9;
function Vc(e) {
  var t, n, r, o = w.prototype = { constructor: w, toString: null, valueOf: null }, s = new w(1), u = 20, i = 4, a = -7, d = 21, c = -1e7, m = 1e7, y = !1, f = 1, b = 0, E = {
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
  function w(S, A) {
    var _, N, P, F, j, H, $, G, k = this;
    if (!(k instanceof w)) return new w(S, A);
    if (A == null) {
      if (S && S._isBigNumber === !0) {
        k.s = S.s, !S.c || S.e > m ? k.c = k.e = null : S.e < c ? k.c = [k.e = 0] : (k.e = S.e, k.c = S.c.slice());
        return;
      }
      if ((H = typeof S == "number") && S * 0 == 0) {
        if (k.s = 1 / S < 0 ? (S = -S, -1) : 1, S === ~~S) {
          for (F = 0, j = S; j >= 10; j /= 10, F++) ;
          F > m ? k.c = k.e = null : (k.e = F, k.c = [S]);
          return;
        }
        G = String(S);
      } else {
        if (!wp.test(G = String(S))) return r(k, G, H);
        k.s = G.charCodeAt(0) == 45 ? (G = G.slice(1), -1) : 1;
      }
      (F = G.indexOf(".")) > -1 && (G = G.replace(".", "")), (j = G.search(/e/i)) > 0 ? (F < 0 && (F = j), F += +G.slice(j + 1), G = G.substring(0, j)) : F < 0 && (F = G.length);
    } else {
      if (We(A, 2, I.length, "Base"), A == 10 && x)
        return k = new w(S), U(k, u + k.e + 1, i);
      if (G = String(S), H = typeof S == "number") {
        if (S * 0 != 0) return r(k, G, H, A);
        if (k.s = 1 / S < 0 ? (G = G.slice(1), -1) : 1, w.DEBUG && G.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Qs + S);
      } else
        k.s = G.charCodeAt(0) === 45 ? (G = G.slice(1), -1) : 1;
      for (_ = I.slice(0, A), F = j = 0, $ = G.length; j < $; j++)
        if (_.indexOf(N = G.charAt(j)) < 0) {
          if (N == ".") {
            if (j > F) {
              F = $;
              continue;
            }
          } else if (!P && (G == G.toUpperCase() && (G = G.toLowerCase()) || G == G.toLowerCase() && (G = G.toUpperCase()))) {
            P = !0, j = -1, F = 0;
            continue;
          }
          return r(k, String(S), H, A);
        }
      H = !1, G = n(G, A, 10, k.s), (F = G.indexOf(".")) > -1 ? G = G.replace(".", "") : F = G.length;
    }
    for (j = 0; G.charCodeAt(j) === 48; j++) ;
    for ($ = G.length; G.charCodeAt(--$) === 48; ) ;
    if (G = G.slice(j, ++$)) {
      if ($ -= j, H && w.DEBUG && $ > 15 && (S > io || S !== _t(S)))
        throw Error(Qs + k.s * S);
      if ((F = F - j - 1) > m)
        k.c = k.e = null;
      else if (F < c)
        k.c = [k.e = 0];
      else {
        if (k.e = F, k.c = [], j = (F + 1) % Ae, F < 0 && (j += Ae), j < $) {
          for (j && k.c.push(+G.slice(0, j)), $ -= Ae; j < $; )
            k.c.push(+G.slice(j, j += Ae));
          j = Ae - (G = G.slice(j)).length;
        } else
          j -= $;
        for (; j--; G += "0") ;
        k.c.push(+G);
      }
    } else
      k.c = [k.e = 0];
  }
  w.clone = Vc, w.ROUND_UP = 0, w.ROUND_DOWN = 1, w.ROUND_CEIL = 2, w.ROUND_FLOOR = 3, w.ROUND_HALF_UP = 4, w.ROUND_HALF_DOWN = 5, w.ROUND_HALF_EVEN = 6, w.ROUND_HALF_CEIL = 7, w.ROUND_HALF_FLOOR = 8, w.EUCLID = 9, w.config = w.set = function(S) {
    var A, _;
    if (S != null)
      if (typeof S == "object") {
        if (S.hasOwnProperty(A = "DECIMAL_PLACES") && (_ = S[A], We(_, 0, nt, A), u = _), S.hasOwnProperty(A = "ROUNDING_MODE") && (_ = S[A], We(_, 0, 8, A), i = _), S.hasOwnProperty(A = "EXPONENTIAL_AT") && (_ = S[A], _ && _.pop ? (We(_[0], -nt, 0, A), We(_[1], 0, nt, A), a = _[0], d = _[1]) : (We(_, -nt, nt, A), a = -(d = _ < 0 ? -_ : _))), S.hasOwnProperty(A = "RANGE"))
          if (_ = S[A], _ && _.pop)
            We(_[0], -nt, -1, A), We(_[1], 1, nt, A), c = _[0], m = _[1];
          else if (We(_, -nt, nt, A), _)
            c = -(m = _ < 0 ? -_ : _);
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
        if (S.hasOwnProperty(A = "MODULO_MODE") && (_ = S[A], We(_, 0, 9, A), f = _), S.hasOwnProperty(A = "POW_PRECISION") && (_ = S[A], We(_, 0, nt, A), b = _), S.hasOwnProperty(A = "FORMAT"))
          if (_ = S[A], typeof _ == "object") E = _;
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
      ROUNDING_MODE: i,
      EXPONENTIAL_AT: [a, d],
      RANGE: [c, m],
      CRYPTO: y,
      MODULO_MODE: f,
      POW_PRECISION: b,
      FORMAT: E,
      ALPHABET: I
    };
  }, w.isBigNumber = function(S) {
    if (!S || S._isBigNumber !== !0) return !1;
    if (!w.DEBUG) return !0;
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
  }, w.maximum = w.max = function() {
    return O(arguments, -1);
  }, w.minimum = w.min = function() {
    return O(arguments, 1);
  }, w.random = function() {
    var S = 9007199254740992, A = Math.random() * S & 2097151 ? function() {
      return _t(Math.random() * S);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(_) {
      var N, P, F, j, H, $ = 0, G = [], k = new w(s);
      if (_ == null ? _ = u : We(_, 0, nt), j = no(_ / Ae), y)
        if (crypto.getRandomValues) {
          for (N = crypto.getRandomValues(new Uint32Array(j *= 2)); $ < j; )
            H = N[$] * 131072 + (N[$ + 1] >>> 11), H >= 9e15 ? (P = crypto.getRandomValues(new Uint32Array(2)), N[$] = P[0], N[$ + 1] = P[1]) : (G.push(H % 1e14), $ += 2);
          $ = j / 2;
        } else if (crypto.randomBytes) {
          for (N = crypto.randomBytes(j *= 7); $ < j; )
            H = (N[$] & 31) * 281474976710656 + N[$ + 1] * 1099511627776 + N[$ + 2] * 4294967296 + N[$ + 3] * 16777216 + (N[$ + 4] << 16) + (N[$ + 5] << 8) + N[$ + 6], H >= 9e15 ? crypto.randomBytes(7).copy(N, $) : (G.push(H % 1e14), $ += 7);
          $ = j / 7;
        } else
          throw y = !1, Error(vt + "crypto unavailable");
      if (!y)
        for (; $ < j; )
          H = A(), H < 9e15 && (G[$++] = H % 1e14);
      for (j = G[--$], _ %= Ae, j && _ && (H = oo[Ae - _], G[$] = _t(j / H) * H); G[$] === 0; G.pop(), $--) ;
      if ($ < 0)
        G = [F = 0];
      else {
        for (F = -1; G[0] === 0; G.splice(0, 1), F -= Ae) ;
        for ($ = 1, H = G[0]; H >= 10; H /= 10, $++) ;
        $ < Ae && (F -= Ae - $);
      }
      return k.e = F, k.c = G, k;
    };
  }(), w.sum = function() {
    for (var S = 1, A = arguments, _ = new w(A[0]); S < A.length; ) _ = _.plus(A[S++]);
    return _;
  }, n = /* @__PURE__ */ function() {
    var S = "0123456789";
    function A(_, N, P, F) {
      for (var j, H = [0], $, G = 0, k = _.length; G < k; ) {
        for ($ = H.length; $--; H[$] *= N) ;
        for (H[0] += F.indexOf(_.charAt(G++)), j = 0; j < H.length; j++)
          H[j] > P - 1 && (H[j + 1] == null && (H[j + 1] = 0), H[j + 1] += H[j] / P | 0, H[j] %= P);
      }
      return H.reverse();
    }
    return function(_, N, P, F, j) {
      var H, $, G, k, M, Y, Z, ne, se = _.indexOf("."), pe = u, ae = i;
      for (se >= 0 && (k = b, b = 0, _ = _.replace(".", ""), ne = new w(N), Y = ne.pow(_.length - se), b = k, ne.c = A(
        Jt(xt(Y.c), Y.e, "0"),
        10,
        P,
        S
      ), ne.e = ne.c.length), Z = A(_, N, P, j ? (H = I, S) : (H = S, I)), G = k = Z.length; Z[--k] == 0; Z.pop()) ;
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
      var j, H, $, G, k = 0, M = N.length, Y = P % lr, Z = P / lr | 0;
      for (N = N.slice(); M--; )
        $ = N[M] % lr, G = N[M] / lr | 0, j = Z * $ + G * Y, H = Y * $ + j % lr * lr + k, k = (H / F | 0) + (j / lr | 0) + Z * G, N[M] = H % F;
      return k && (N = [k].concat(N)), N;
    }
    function A(N, P, F, j) {
      var H, $;
      if (F != j)
        $ = F > j ? 1 : -1;
      else
        for (H = $ = 0; H < F; H++)
          if (N[H] != P[H]) {
            $ = N[H] > P[H] ? 1 : -1;
            break;
          }
      return $;
    }
    function _(N, P, F, j) {
      for (var H = 0; F--; )
        N[F] -= H, H = N[F] < P[F] ? 1 : 0, N[F] = H * j + N[F] - P[F];
      for (; !N[0] && N.length > 1; N.splice(0, 1)) ;
    }
    return function(N, P, F, j, H) {
      var $, G, k, M, Y, Z, ne, se, pe, ae, ge, xe, $e, Je, ct, je, rt, Ke = N.s == P.s ? 1 : -1, Ue = N.c, Se = P.c;
      if (!Ue || !Ue[0] || !Se || !Se[0])
        return new w(
          // Return NaN if either NaN, or both Infinity or 0.
          !N.s || !P.s || (Ue ? Se && Ue[0] == Se[0] : !Se) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            Ue && Ue[0] == 0 || !Se ? Ke * 0 : Ke / 0
          )
        );
      for (se = new w(Ke), pe = se.c = [], G = N.e - P.e, Ke = F + G + 1, H || (H = Ft, G = Ot(N.e / Ae) - Ot(P.e / Ae), Ke = Ke / Ae | 0), k = 0; Se[k] == (Ue[k] || 0); k++) ;
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
        U(se, F + (se.e = k + G * Ae - 1) + 1, j, M);
      } else
        se.e = G, se.r = +M;
      return se;
    };
  }();
  function T(S, A, _, N) {
    var P, F, j, H, $;
    if (_ == null ? _ = i : We(_, 0, 8), !S.c) return S.toString();
    if (P = S.c[0], j = S.e, A == null)
      $ = xt(S.c), $ = N == 1 || N == 2 && (j <= a || j >= d) ? ii($, j) : Jt($, j, "0");
    else if (S = U(new w(S), A, _), F = S.e, $ = xt(S.c), H = $.length, N == 1 || N == 2 && (A <= F || F <= a)) {
      for (; H < A; $ += "0", H++) ;
      $ = ii($, F);
    } else if (A -= j, $ = Jt($, F, "0"), F + 1 > H) {
      if (--A > 0) for ($ += "."; A--; $ += "0") ;
    } else if (A += F - H, A > 0)
      for (F + 1 == H && ($ += "."); A--; $ += "0") ;
    return S.s < 0 && P ? "-" + $ : $;
  }
  function O(S, A) {
    for (var _, N, P = 1, F = new w(S[0]); P < S.length; P++)
      N = new w(S[P]), (!N.s || (_ = kr(F, N)) === A || _ === 0 && F.s === A) && (F = N);
    return F;
  }
  function W(S, A, _) {
    for (var N = 1, P = A.length; !A[--P]; A.pop()) ;
    for (P = A[0]; P >= 10; P /= 10, N++) ;
    return (_ = N + _ * Ae - 1) > m ? S.c = S.e = null : _ < c ? S.c = [S.e = 0] : (S.e = _, S.c = A), S;
  }
  r = /* @__PURE__ */ function() {
    var S = /^(-?)0([xbo])(?=\w[\w.]*$)/i, A = /^([^.]+)\.$/, _ = /^\.([^.]+)$/, N = /^-?(Infinity|NaN)$/, P = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(F, j, H, $) {
      var G, k = H ? j : j.replace(P, "");
      if (N.test(k))
        F.s = isNaN(k) ? null : k < 0 ? -1 : 1;
      else {
        if (!H && (k = k.replace(S, function(M, Y, Z) {
          return G = (Z = Z.toLowerCase()) == "x" ? 16 : Z == "b" ? 2 : 8, !$ || $ == G ? Y : M;
        }), $ && (G = $, k = k.replace(A, "$1").replace(_, "0.$1")), j != k))
          return new w(k, G);
        if (w.DEBUG)
          throw Error(vt + "Not a" + ($ ? " base " + $ : "") + " number: " + j);
        F.s = null;
      }
      F.c = F.e = null;
    };
  }();
  function U(S, A, _, N) {
    var P, F, j, H, $, G, k, M = S.c, Y = oo;
    if (M) {
      e: {
        for (P = 1, H = M[0]; H >= 10; H /= 10, P++) ;
        if (F = A - P, F < 0)
          F += Ae, j = A, $ = M[G = 0], k = _t($ / Y[P - j - 1] % 10);
        else if (G = no((F + 1) / Ae), G >= M.length)
          if (N) {
            for (; M.length <= G; M.push(0)) ;
            $ = k = 0, P = 1, F %= Ae, j = F - Ae + 1;
          } else
            break e;
        else {
          for ($ = H = M[G], P = 1; H >= 10; H /= 10, P++) ;
          F %= Ae, j = F - Ae + P, k = j < 0 ? 0 : _t($ / Y[P - j - 1] % 10);
        }
        if (N = N || A < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        M[G + 1] != null || (j < 0 ? $ : $ % Y[P - j - 1]), N = _ < 4 ? (k || N) && (_ == 0 || _ == (S.s < 0 ? 3 : 2)) : k > 5 || k == 5 && (_ == 4 || N || _ == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (F > 0 ? j > 0 ? $ / Y[P - j] : 0 : M[G - 1]) % 10 & 1 || _ == (S.s < 0 ? 8 : 7)), A < 1 || !M[0])
          return M.length = 0, N ? (A -= S.e + 1, M[0] = Y[(Ae - A % Ae) % Ae], S.e = -A || 0) : M[0] = S.e = 0, S;
        if (F == 0 ? (M.length = G, H = 1, G--) : (M.length = G + 1, H = Y[Ae - F], M[G] = j > 0 ? _t($ / Y[P - j] % Y[j]) * H : 0), N)
          for (; ; )
            if (G == 0) {
              for (F = 1, j = M[0]; j >= 10; j /= 10, F++) ;
              for (j = M[0] += H, H = 1; j >= 10; j /= 10, H++) ;
              F != H && (S.e++, M[0] == Ft && (M[0] = 1));
              break;
            } else {
              if (M[G] += H, M[G] != Ft) break;
              M[G--] = 0, H = 1;
            }
        for (F = M.length; M[--F] === 0; M.pop()) ;
      }
      S.e > m ? S.c = S.e = null : S.e < c && (S.c = [S.e = 0]);
    }
    return S;
  }
  function K(S) {
    var A, _ = S.e;
    return _ === null ? S.toString() : (A = xt(S.c), A = _ <= a || _ >= d ? ii(A, _) : Jt(A, _, "0"), S.s < 0 ? "-" + A : A);
  }
  return o.absoluteValue = o.abs = function() {
    var S = new w(this);
    return S.s < 0 && (S.s = 1), S;
  }, o.comparedTo = function(S, A) {
    return kr(this, new w(S, A));
  }, o.decimalPlaces = o.dp = function(S, A) {
    var _, N, P, F = this;
    if (S != null)
      return We(S, 0, nt), A == null ? A = i : We(A, 0, 8), U(new w(F), S + F.e + 1, A);
    if (!(_ = F.c)) return null;
    if (N = ((P = _.length - 1) - Ot(this.e / Ae)) * Ae, P = _[P]) for (; P % 10 == 0; P /= 10, N--) ;
    return N < 0 && (N = 0), N;
  }, o.dividedBy = o.div = function(S, A) {
    return t(this, new w(S, A), u, i);
  }, o.dividedToIntegerBy = o.idiv = function(S, A) {
    return t(this, new w(S, A), 0, 1);
  }, o.exponentiatedBy = o.pow = function(S, A) {
    var _, N, P, F, j, H, $, G, k, M = this;
    if (S = new w(S), S.c && !S.isInteger())
      throw Error(vt + "Exponent not an integer: " + K(S));
    if (A != null && (A = new w(A)), H = S.e > 14, !M.c || !M.c[0] || M.c[0] == 1 && !M.e && M.c.length == 1 || !S.c || !S.c[0])
      return k = new w(Math.pow(+K(M), H ? S.s * (2 - ni(S)) : +K(S))), A ? k.mod(A) : k;
    if ($ = S.s < 0, A) {
      if (A.c ? !A.c[0] : !A.s) return new w(NaN);
      N = !$ && M.isInteger() && A.isInteger(), N && (M = M.mod(A));
    } else {
      if (S.e > 9 && (M.e > 0 || M.e < -1 || (M.e == 0 ? M.c[0] > 1 || H && M.c[1] >= 24e7 : M.c[0] < 8e13 || H && M.c[0] <= 9999975e7)))
        return F = M.s < 0 && ni(S) ? -0 : 0, M.e > -1 && (F = 1 / F), new w($ ? 1 / F : F);
      b && (F = no(b / Ae + 2));
    }
    for (H ? (_ = new w(0.5), $ && (S.s = 1), G = ni(S)) : (P = Math.abs(+K(S)), G = P % 2), k = new w(s); ; ) {
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
    return N ? k : ($ && (k = s.div(k)), A ? k.mod(A) : F ? U(k, b, i, j) : k);
  }, o.integerValue = function(S) {
    var A = new w(this);
    return S == null ? S = i : We(S, 0, 8), U(A, A.e + 1, S);
  }, o.isEqualTo = o.eq = function(S, A) {
    return kr(this, new w(S, A)) === 0;
  }, o.isFinite = function() {
    return !!this.c;
  }, o.isGreaterThan = o.gt = function(S, A) {
    return kr(this, new w(S, A)) > 0;
  }, o.isGreaterThanOrEqualTo = o.gte = function(S, A) {
    return (A = kr(this, new w(S, A))) === 1 || A === 0;
  }, o.isInteger = function() {
    return !!this.c && Ot(this.e / Ae) > this.c.length - 2;
  }, o.isLessThan = o.lt = function(S, A) {
    return kr(this, new w(S, A)) < 0;
  }, o.isLessThanOrEqualTo = o.lte = function(S, A) {
    return (A = kr(this, new w(S, A))) === -1 || A === 0;
  }, o.isNaN = function() {
    return !this.s;
  }, o.isNegative = function() {
    return this.s < 0;
  }, o.isPositive = function() {
    return this.s > 0;
  }, o.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, o.minus = function(S, A) {
    var _, N, P, F, j = this, H = j.s;
    if (S = new w(S, A), A = S.s, !H || !A) return new w(NaN);
    if (H != A)
      return S.s = -A, j.plus(S);
    var $ = j.e / Ae, G = S.e / Ae, k = j.c, M = S.c;
    if (!$ || !G) {
      if (!k || !M) return k ? (S.s = -A, S) : new w(M ? j : NaN);
      if (!k[0] || !M[0])
        return M[0] ? (S.s = -A, S) : new w(k[0] ? j : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          i == 3 ? -0 : 0
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
    return k[0] ? W(S, k, G) : (S.s = i == 3 ? -1 : 1, S.c = [S.e = 0], S);
  }, o.modulo = o.mod = function(S, A) {
    var _, N, P = this;
    return S = new w(S, A), !P.c || !S.s || S.c && !S.c[0] ? new w(NaN) : !S.c || P.c && !P.c[0] ? new w(P) : (f == 9 ? (N = S.s, S.s = 1, _ = t(P, S, 0, 3), S.s = N, _.s *= N) : _ = t(P, S, 0, f), S = P.minus(_.times(S)), !S.c[0] && f == 1 && (S.s = P.s), S);
  }, o.multipliedBy = o.times = function(S, A) {
    var _, N, P, F, j, H, $, G, k, M, Y, Z, ne, se, pe, ae = this, ge = ae.c, xe = (S = new w(S, A)).c;
    if (!ge || !xe || !ge[0] || !xe[0])
      return !ae.s || !S.s || ge && !ge[0] && !xe || xe && !xe[0] && !ge ? S.c = S.e = S.s = null : (S.s *= ae.s, !ge || !xe ? S.c = S.e = null : (S.c = [0], S.e = 0)), S;
    for (N = Ot(ae.e / Ae) + Ot(S.e / Ae), S.s *= ae.s, $ = ge.length, M = xe.length, $ < M && (ne = ge, ge = xe, xe = ne, P = $, $ = M, M = P), P = $ + M, ne = []; P--; ne.push(0)) ;
    for (se = Ft, pe = lr, P = M; --P >= 0; ) {
      for (_ = 0, Y = xe[P] % pe, Z = xe[P] / pe | 0, j = $, F = P + j; F > P; )
        G = ge[--j] % pe, k = ge[j] / pe | 0, H = Z * G + k * Y, G = Y * G + H % pe * pe + ne[F] + _, _ = (G / se | 0) + (H / pe | 0) + Z * k, ne[F--] = G % se;
      ne[F] = _;
    }
    return _ ? ++N : ne.splice(0, 1), W(S, ne, N);
  }, o.negated = function() {
    var S = new w(this);
    return S.s = -S.s || null, S;
  }, o.plus = function(S, A) {
    var _, N = this, P = N.s;
    if (S = new w(S, A), A = S.s, !P || !A) return new w(NaN);
    if (P != A)
      return S.s = -A, N.minus(S);
    var F = N.e / Ae, j = S.e / Ae, H = N.c, $ = S.c;
    if (!F || !j) {
      if (!H || !$) return new w(P / 0);
      if (!H[0] || !$[0]) return $[0] ? S : new w(H[0] ? N : P * 0);
    }
    if (F = Ot(F), j = Ot(j), H = H.slice(), P = F - j) {
      for (P > 0 ? (j = F, _ = $) : (P = -P, _ = H), _.reverse(); P--; _.push(0)) ;
      _.reverse();
    }
    for (P = H.length, A = $.length, P - A < 0 && (_ = $, $ = H, H = _, A = P), P = 0; A; )
      P = (H[--A] = H[A] + $[A] + P) / Ft | 0, H[A] = Ft === H[A] ? 0 : H[A] % Ft;
    return P && (H = [P].concat(H), ++j), W(S, H, j);
  }, o.precision = o.sd = function(S, A) {
    var _, N, P, F = this;
    if (S != null && S !== !!S)
      return We(S, 1, nt), A == null ? A = i : We(A, 0, 8), U(new w(F), S, A);
    if (!(_ = F.c)) return null;
    if (P = _.length - 1, N = P * Ae + 1, P = _[P]) {
      for (; P % 10 == 0; P /= 10, N--) ;
      for (P = _[0]; P >= 10; P /= 10, N++) ;
    }
    return S && F.e + 1 > N && (N = F.e + 1), N;
  }, o.shiftedBy = function(S) {
    return We(S, -io, io), this.times("1e" + S);
  }, o.squareRoot = o.sqrt = function() {
    var S, A, _, N, P, F = this, j = F.c, H = F.s, $ = F.e, G = u + 4, k = new w("0.5");
    if (H !== 1 || !j || !j[0])
      return new w(!H || H < 0 && (!j || j[0]) ? NaN : j ? F : 1 / 0);
    if (H = Math.sqrt(+K(F)), H == 0 || H == 1 / 0 ? (A = xt(j), (A.length + $) % 2 == 0 && (A += "0"), H = Math.sqrt(+A), $ = Ot(($ + 1) / 2) - ($ < 0 || $ % 2), H == 1 / 0 ? A = "5e" + $ : (A = H.toExponential(), A = A.slice(0, A.indexOf("e") + 1) + $), _ = new w(A)) : _ = new w(H + ""), _.c[0]) {
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
    return U(_, _.e + u + 1, i, S);
  }, o.toExponential = function(S, A) {
    return S != null && (We(S, 0, nt), S++), T(this, S, A, 1);
  }, o.toFixed = function(S, A) {
    return S != null && (We(S, 0, nt), S = S + this.e + 1), T(this, S, A);
  }, o.toFormat = function(S, A, _) {
    var N, P = this;
    if (_ == null)
      S != null && A && typeof A == "object" ? (_ = A, A = null) : S && typeof S == "object" ? (_ = S, S = A = null) : _ = E;
    else if (typeof _ != "object")
      throw Error(vt + "Argument not an object: " + _);
    if (N = P.toFixed(S, A), P.c) {
      var F, j = N.split("."), H = +_.groupSize, $ = +_.secondaryGroupSize, G = _.groupSeparator || "", k = j[0], M = j[1], Y = P.s < 0, Z = Y ? k.slice(1) : k, ne = Z.length;
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
  }, o.toFraction = function(S) {
    var A, _, N, P, F, j, H, $, G, k, M, Y, Z = this, ne = Z.c;
    if (S != null && (H = new w(S), !H.isInteger() && (H.c || H.s !== 1) || H.lt(s)))
      throw Error(vt + "Argument " + (H.isInteger() ? "out of range: " : "not an integer: ") + K(H));
    if (!ne) return new w(Z);
    for (A = new w(s), G = _ = new w(s), N = $ = new w(s), Y = xt(ne), F = A.e = Y.length - Z.e - 1, A.c[0] = oo[(j = F % Ae) < 0 ? Ae + j : j], S = !S || H.comparedTo(A) > 0 ? F > 0 ? A : G : H, j = m, m = 1 / 0, H = new w(Y), $.c[0] = 0; k = t(H, A, 0, 1), P = _.plus(k.times(N)), P.comparedTo(S) != 1; )
      _ = N, N = P, G = $.plus(k.times(P = G)), $ = P, A = H.minus(k.times(P = A)), H = P;
    return P = t(S.minus(_), N, 0, 1), $ = $.plus(P.times(G)), _ = _.plus(P.times(N)), $.s = G.s = Z.s, F = F * 2, M = t(G, N, F, i).minus(Z).abs().comparedTo(
      t($, _, F, i).minus(Z).abs()
    ) < 1 ? [G, N] : [$, _], m = j, M;
  }, o.toNumber = function() {
    return +K(this);
  }, o.toPrecision = function(S, A) {
    return S != null && We(S, 1, nt), T(this, S, A, 2);
  }, o.toString = function(S) {
    var A, _ = this, N = _.s, P = _.e;
    return P === null ? N ? (A = "Infinity", N < 0 && (A = "-" + A)) : A = "NaN" : (S == null ? A = P <= a || P >= d ? ii(xt(_.c), P) : Jt(xt(_.c), P, "0") : S === 10 && x ? (_ = U(new w(_), u + P + 1, i), A = Jt(xt(_.c), _.e, "0")) : (We(S, 2, I.length, "Base"), A = n(Jt(xt(_.c), P, "0"), 10, S, N, !0)), N < 0 && _.c[0] && (A = "-" + A)), A;
  }, o.valueOf = o.toJSON = function() {
    return K(this);
  }, o._isBigNumber = !0, o[Symbol.toStringTag] = "BigNumber", o[Symbol.for("nodejs.util.inspect.custom")] = o.valueOf, e != null && w.set(e), w;
}
function Ot(e) {
  var t = e | 0;
  return e > 0 || e === t ? t : t - 1;
}
function xt(e) {
  for (var t, n, r = 1, o = e.length, s = e[0] + ""; r < o; ) {
    for (t = e[r++] + "", n = Ae - t.length; n--; t = "0" + t) ;
    s += t;
  }
  for (o = s.length; s.charCodeAt(--o) === 48; ) ;
  return s.slice(0, o + 1 || 1);
}
function kr(e, t) {
  var n, r, o = e.c, s = t.c, u = e.s, i = t.s, a = e.e, d = t.e;
  if (!u || !i) return null;
  if (n = o && !o[0], r = s && !s[0], n || r) return n ? r ? 0 : -i : u;
  if (u != i) return u;
  if (n = u < 0, r = a == d, !o || !s) return r ? 0 : !o ^ n ? 1 : -1;
  if (!r) return a > d ^ n ? 1 : -1;
  for (i = (a = o.length) < (d = s.length) ? a : d, u = 0; u < i; u++) if (o[u] != s[u]) return o[u] > s[u] ^ n ? 1 : -1;
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
  var r, o;
  if (t < 0) {
    for (o = n + "."; ++t; o += n) ;
    e = o + e;
  } else if (r = e.length, ++t > r) {
    for (o = n, t -= r; --t; o += n) ;
    e += o;
  } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
  return e;
}
var Js = Vc();
function H2() {
  const { network: e, publicKey: t, format: n, chain: r } = Xt(), [o, s] = Pe(null), [u, i] = Pe(!1);
  return { getBalance: ke(async () => {
    i(!0);
    try {
      if (s(null), !n || !n.payments || !t || !t.payments)
        throw new Error("No wallet is connected");
      const { address: d } = hl(
        t.payments,
        e,
        dl[n.payments],
        r
      )[0], m = await new Go({
        chain: r,
        network: e
      }).getBalance({ address: d }), y = Number(
        new Js(m).multipliedBy(1e8).toFixed(0, Js.ROUND_HALF_DOWN)
      );
      return i(!1), y;
    } catch (d) {
      throw s(d.message), i(!1), d;
    }
  }, [n, e, t]), error: o, loading: u };
}
async function cs({
  address: e,
  wallet: t,
  network: n,
  psbt: r,
  options: o
}) {
  var a, d;
  if ((a = o == null ? void 0 : o.signingIndexes) != null && a.length && ((d = o == null ? void 0 : o.inputsToSign) != null && d.length))
    throw new Error("Cannot have both indexes and inputs to sign together");
  const s = (o == null ? void 0 : o.finalize) ?? !0, u = (o == null ? void 0 : o.extractTx) ?? !0, i = () => r.data.inputs.map((c, m) => m);
  if (t === le.MAGICEDEN)
    return await yl(r, {
      network: n,
      inputsToSign: (o == null ? void 0 : o.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (o == null ? void 0 : o.signingIndexes) ?? i(),
          sigHash: o == null ? void 0 : o.sigHash
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
      inputsToSign: (o == null ? void 0 : o.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (o == null ? void 0 : o.signingIndexes) ?? i(),
          // If signingIndexes is not provided, just sign everything
          sigHash: o == null ? void 0 : o.sigHash
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
      allowedSighash: o != null && o.sigHash ? [o == null ? void 0 : o.sigHash] : [],
      signAtIndexes: (o == null ? void 0 : o.signingIndexes) ?? i()
      // If signingIndexes is not provided, just sign everything
    });
  if (t === le.OKX)
    return await bl(r, {
      finalize: s,
      extractTx: u,
      network: n,
      inputsToSign: (o == null ? void 0 : o.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (o == null ? void 0 : o.signingIndexes) ?? i(),
          // If signingIndexes is not provided, just sign everything
          sigHash: o == null ? void 0 : o.sigHash
        }
      ]
    });
  if (t === le.PHANTOM)
    return await xl(r, {
      finalize: s,
      extractTx: u,
      network: n,
      inputsToSign: (o == null ? void 0 : o.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (o == null ? void 0 : o.signingIndexes) ?? i(),
          // If signingIndexes is not provided, just sign everything
          sigHash: o == null ? void 0 : o.sigHash
        }
      ]
    });
  if (t === le.OYL)
    return await Sl(r, {
      finalize: s,
      extractTx: u,
      network: n,
      inputsToSign: (o == null ? void 0 : o.inputsToSign) ?? [
        {
          address: e,
          signingIndexes: (o == null ? void 0 : o.signingIndexes) ?? i(),
          // If signingIndexes is not provided, just sign everything
          sigHash: o == null ? void 0 : o.sigHash
        }
      ]
    });
  throw new Error("Invalid wallet selected");
}
function M2() {
  const { wallet: e, network: t, address: n, publicKey: r, chain: o } = Xt(), [s, u] = Pe(null), [i, a] = Pe(!1);
  return { send: ke(
    async (c, m, y, f = !0) => {
      a(!0);
      try {
        if (u(null), !n || !n.payments || !r || !r.payments || !e)
          throw new Error("No wallet is connected");
        const b = new Sa({
          address: n.payments,
          feeRate: y,
          network: t,
          chain: o,
          publicKey: r.payments,
          outputs: [
            {
              address: c,
              value: m
            }
          ]
        });
        await b.prepare();
        const E = await cs({
          address: n.payments,
          wallet: e,
          network: t,
          psbt: b.toPSBT()
        });
        if (f) {
          const x = await new Go({ network: t, chain: o }).relay({ hex: E.hex });
          return a(!1), x;
        }
        return a(!1), E.hex;
      } catch (b) {
        return u(b.message), a(!1), null;
      }
    },
    [n, t, r, e]
  ), error: s, loading: i };
}
function D2() {
  const { wallet: e, network: t, address: n, publicKey: r, chain: o } = Xt(), [s, u] = Pe(!1);
  return { send: ke(
    async ({
      toAddress: a,
      satoshis: d,
      feeRate: c,
      relay: m = !0,
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
          chain: o,
          publicKey: r.payments,
          outputs: [
            {
              address: a,
              value: d
            }
          ]
        });
        f.setRBF(y), await f.prepare();
        const b = await cs({
          address: n.payments,
          wallet: e,
          network: t,
          psbt: f.toPSBT()
        });
        if (m) {
          const I = await new Go({ network: t, chain: o }).relay({ hex: b.hex });
          return u(!1), {
            txId: I
          };
        }
        return u(!1), {
          signedPsbtHex: b.hex
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
  var t, n = Xc(e), r = n[0], o = n[1], s = new yp(bp(e, r, o)), u = 0, i = o > 0 ? r - 4 : r, a;
  for (a = 0; a < i; a += 4)
    t = Ct[e.charCodeAt(a)] << 18 | Ct[e.charCodeAt(a + 1)] << 12 | Ct[e.charCodeAt(a + 2)] << 6 | Ct[e.charCodeAt(a + 3)], s[u++] = t >> 16 & 255, s[u++] = t >> 8 & 255, s[u++] = t & 255;
  return o === 2 && (t = Ct[e.charCodeAt(a)] << 2 | Ct[e.charCodeAt(a + 1)] >> 4, s[u++] = t & 255), o === 1 && (t = Ct[e.charCodeAt(a)] << 10 | Ct[e.charCodeAt(a + 1)] << 4 | Ct[e.charCodeAt(a + 2)] >> 2, s[u++] = t >> 8 & 255, s[u++] = t & 255), s;
}
function Pp(e) {
  return jt[e >> 18 & 63] + jt[e >> 12 & 63] + jt[e >> 6 & 63] + jt[e & 63];
}
function Sp(e, t, n) {
  for (var r, o = [], s = t; s < n; s += 3)
    r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (e[s + 2] & 255), o.push(Pp(r));
  return o.join("");
}
function Tp(e) {
  for (var t, n = e.length, r = n % 3, o = [], s = 16383, u = 0, i = n - r; u < i; u += s)
    o.push(Sp(e, u, u + s > i ? i : u + s));
  return r === 1 ? (t = e[n - 1], o.push(
    jt[t >> 2] + jt[t << 4 & 63] + "=="
  )) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], o.push(
    jt[t >> 10] + jt[t >> 4 & 63] + jt[t << 2 & 63] + "="
  )), o.join("");
}
var ls = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
ls.read = function(e, t, n, r, o) {
  var s, u, i = o * 8 - r - 1, a = (1 << i) - 1, d = a >> 1, c = -7, m = n ? o - 1 : 0, y = n ? -1 : 1, f = e[t + m];
  for (m += y, s = f & (1 << -c) - 1, f >>= -c, c += i; c > 0; s = s * 256 + e[t + m], m += y, c -= 8)
    ;
  for (u = s & (1 << -c) - 1, s >>= -c, c += r; c > 0; u = u * 256 + e[t + m], m += y, c -= 8)
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
ls.write = function(e, t, n, r, o, s) {
  var u, i, a, d = s * 8 - o - 1, c = (1 << d) - 1, m = c >> 1, y = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : s - 1, b = r ? 1 : -1, E = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (i = isNaN(t) ? 1 : 0, u = c) : (u = Math.floor(Math.log(t) / Math.LN2), t * (a = Math.pow(2, -u)) < 1 && (u--, a *= 2), u + m >= 1 ? t += y / a : t += y * Math.pow(2, 1 - m), t * a >= 2 && (u++, a /= 2), u + m >= c ? (i = 0, u = c) : u + m >= 1 ? (i = (t * a - 1) * Math.pow(2, o), u = u + m) : (i = t * Math.pow(2, m - 1) * Math.pow(2, o), u = 0)); o >= 8; e[n + f] = i & 255, f += b, i /= 256, o -= 8)
    ;
  for (u = u << o | i, d += o; d > 0; e[n + f] = u & 255, f += b, u /= 256, d -= 8)
    ;
  e[n + f - b] |= E * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = Hi, n = ls, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = c, e.SlowBuffer = W, e.INSPECT_MAX_BYTES = 50;
  const o = 2147483647;
  e.kMaxLength = o;
  const { Uint8Array: s, ArrayBuffer: u, SharedArrayBuffer: i } = globalThis;
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
    if (p > o)
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
      return b(p);
    }
    return m(p, l, h);
  }
  c.poolSize = 8192;
  function m(p, l, h) {
    if (typeof p == "string")
      return E(p, l);
    if (u.isView(p))
      return x(p);
    if (p == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p
      );
    if (Ye(p, u) || p && Ye(p.buffer, u) || typeof i < "u" && (Ye(p, i) || p && Ye(p.buffer, i)))
      return w(p, l, h);
    if (typeof p == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const C = p.valueOf && p.valueOf();
    if (C != null && C !== p)
      return c.from(C, l, h);
    const L = T(p);
    if (L) return L;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof p[Symbol.toPrimitive] == "function")
      return c.from(p[Symbol.toPrimitive]("string"), l, h);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p
    );
  }
  c.from = function(p, l, h) {
    return m(p, l, h);
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
  function b(p) {
    return y(p), d(p < 0 ? 0 : O(p) | 0);
  }
  c.allocUnsafe = function(p) {
    return b(p);
  }, c.allocUnsafeSlow = function(p) {
    return b(p);
  };
  function E(p, l) {
    if ((typeof l != "string" || l === "") && (l = "utf8"), !c.isEncoding(l))
      throw new TypeError("Unknown encoding: " + l);
    const h = U(p, l) | 0;
    let C = d(h);
    const L = C.write(p, l);
    return L !== h && (C = C.slice(0, L)), C;
  }
  function I(p) {
    const l = p.length < 0 ? 0 : O(p.length) | 0, h = d(l);
    for (let C = 0; C < l; C += 1)
      h[C] = p[C] & 255;
    return h;
  }
  function x(p) {
    if (Ye(p, s)) {
      const l = new s(p);
      return w(l.buffer, l.byteOffset, l.byteLength);
    }
    return I(p);
  }
  function w(p, l, h) {
    if (l < 0 || p.byteLength < l)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (p.byteLength < l + (h || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let C;
    return l === void 0 && h === void 0 ? C = new s(p) : h === void 0 ? C = new s(p, l) : C = new s(p, l, h), Object.setPrototypeOf(C, c.prototype), C;
  }
  function T(p) {
    if (c.isBuffer(p)) {
      const l = O(p.length) | 0, h = d(l);
      return h.length === 0 || p.copy(h, 0, 0, l), h;
    }
    if (p.length !== void 0)
      return typeof p.length != "number" || Tt(p.length) ? d(0) : I(p);
    if (p.type === "Buffer" && Array.isArray(p.data))
      return I(p.data);
  }
  function O(p) {
    if (p >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return p | 0;
  }
  function W(p) {
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
    let C = l.length, L = h.length;
    for (let V = 0, z = Math.min(C, L); V < z; ++V)
      if (l[V] !== h[V]) {
        C = l[V], L = h[V];
        break;
      }
    return C < L ? -1 : L < C ? 1 : 0;
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
    let C;
    if (h === void 0)
      for (h = 0, C = 0; C < l.length; ++C)
        h += l[C].length;
    const L = c.allocUnsafe(h);
    let V = 0;
    for (C = 0; C < l.length; ++C) {
      let z = l[C];
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
    const h = p.length, C = arguments.length > 2 && arguments[2] === !0;
    if (!C && h === 0) return 0;
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
            return C ? -1 : Qt(p).length;
          l = ("" + l).toLowerCase(), L = !0;
      }
  }
  c.byteLength = U;
  function K(p, l, h) {
    let C = !1;
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
          if (C) throw new TypeError("Unknown encoding: " + p);
          p = (p + "").toLowerCase(), C = !0;
      }
  }
  c.prototype._isBuffer = !0;
  function S(p, l, h) {
    const C = p[l];
    p[l] = p[h], p[h] = C;
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
  }, r && (c.prototype[r] = c.prototype.inspect), c.prototype.compare = function(l, h, C, L, V) {
    if (Ye(l, s) && (l = c.from(l, l.offset, l.byteLength)), !c.isBuffer(l))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof l
      );
    if (h === void 0 && (h = 0), C === void 0 && (C = l ? l.length : 0), L === void 0 && (L = 0), V === void 0 && (V = this.length), h < 0 || C > l.length || L < 0 || V > this.length)
      throw new RangeError("out of range index");
    if (L >= V && h >= C)
      return 0;
    if (L >= V)
      return -1;
    if (h >= C)
      return 1;
    if (h >>>= 0, C >>>= 0, L >>>= 0, V >>>= 0, this === l) return 0;
    let z = V - L, ie = C - h;
    const ce = Math.min(z, ie), fe = this.slice(L, V), ye = l.slice(h, C);
    for (let we = 0; we < ce; ++we)
      if (fe[we] !== ye[we]) {
        z = fe[we], ie = ye[we];
        break;
      }
    return z < ie ? -1 : ie < z ? 1 : 0;
  };
  function A(p, l, h, C, L) {
    if (p.length === 0) return -1;
    if (typeof h == "string" ? (C = h, h = 0) : h > 2147483647 ? h = 2147483647 : h < -2147483648 && (h = -2147483648), h = +h, Tt(h) && (h = L ? 0 : p.length - 1), h < 0 && (h = p.length + h), h >= p.length) {
      if (L) return -1;
      h = p.length - 1;
    } else if (h < 0)
      if (L) h = 0;
      else return -1;
    if (typeof l == "string" && (l = c.from(l, C)), c.isBuffer(l))
      return l.length === 0 ? -1 : _(p, l, h, C, L);
    if (typeof l == "number")
      return l = l & 255, typeof s.prototype.indexOf == "function" ? L ? s.prototype.indexOf.call(p, l, h) : s.prototype.lastIndexOf.call(p, l, h) : _(p, [l], h, C, L);
    throw new TypeError("val must be string, number or Buffer");
  }
  function _(p, l, h, C, L) {
    let V = 1, z = p.length, ie = l.length;
    if (C !== void 0 && (C = String(C).toLowerCase(), C === "ucs2" || C === "ucs-2" || C === "utf16le" || C === "utf-16le")) {
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
  c.prototype.includes = function(l, h, C) {
    return this.indexOf(l, h, C) !== -1;
  }, c.prototype.indexOf = function(l, h, C) {
    return A(this, l, h, C, !0);
  }, c.prototype.lastIndexOf = function(l, h, C) {
    return A(this, l, h, C, !1);
  };
  function N(p, l, h, C) {
    h = Number(h) || 0;
    const L = p.length - h;
    C ? (C = Number(C), C > L && (C = L)) : C = L;
    const V = l.length;
    C > V / 2 && (C = V / 2);
    let z;
    for (z = 0; z < C; ++z) {
      const ie = parseInt(l.substr(z * 2, 2), 16);
      if (Tt(ie)) return z;
      p[h + z] = ie;
    }
    return z;
  }
  function P(p, l, h, C) {
    return At(Qt(l, p.length - h), p, h, C);
  }
  function F(p, l, h, C) {
    return At(Or(l), p, h, C);
  }
  function j(p, l, h, C) {
    return At(Xe(l), p, h, C);
  }
  function H(p, l, h, C) {
    return At(Be(l, p.length - h), p, h, C);
  }
  c.prototype.write = function(l, h, C, L) {
    if (h === void 0)
      L = "utf8", C = this.length, h = 0;
    else if (C === void 0 && typeof h == "string")
      L = h, C = this.length, h = 0;
    else if (isFinite(h))
      h = h >>> 0, isFinite(C) ? (C = C >>> 0, L === void 0 && (L = "utf8")) : (L = C, C = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const V = this.length - h;
    if ((C === void 0 || C > V) && (C = V), l.length > 0 && (C < 0 || h < 0) || h > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    L || (L = "utf8");
    let z = !1;
    for (; ; )
      switch (L) {
        case "hex":
          return N(this, l, h, C);
        case "utf8":
        case "utf-8":
          return P(this, l, h, C);
        case "ascii":
        case "latin1":
        case "binary":
          return F(this, l, h, C);
        case "base64":
          return j(this, l, h, C);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return H(this, l, h, C);
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
    const C = [];
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
      z === null ? (z = 65533, ie = 1) : z > 65535 && (z -= 65536, C.push(z >>> 10 & 1023 | 55296), z = 56320 | z & 1023), C.push(z), L += ie;
    }
    return M(C);
  }
  const k = 4096;
  function M(p) {
    const l = p.length;
    if (l <= k)
      return String.fromCharCode.apply(String, p);
    let h = "", C = 0;
    for (; C < l; )
      h += String.fromCharCode.apply(
        String,
        p.slice(C, C += k)
      );
    return h;
  }
  function Y(p, l, h) {
    let C = "";
    h = Math.min(p.length, h);
    for (let L = l; L < h; ++L)
      C += String.fromCharCode(p[L] & 127);
    return C;
  }
  function Z(p, l, h) {
    let C = "";
    h = Math.min(p.length, h);
    for (let L = l; L < h; ++L)
      C += String.fromCharCode(p[L]);
    return C;
  }
  function ne(p, l, h) {
    const C = p.length;
    (!l || l < 0) && (l = 0), (!h || h < 0 || h > C) && (h = C);
    let L = "";
    for (let V = l; V < h; ++V)
      L += lt[p[V]];
    return L;
  }
  function se(p, l, h) {
    const C = p.slice(l, h);
    let L = "";
    for (let V = 0; V < C.length - 1; V += 2)
      L += String.fromCharCode(C[V] + C[V + 1] * 256);
    return L;
  }
  c.prototype.slice = function(l, h) {
    const C = this.length;
    l = ~~l, h = h === void 0 ? C : ~~h, l < 0 ? (l += C, l < 0 && (l = 0)) : l > C && (l = C), h < 0 ? (h += C, h < 0 && (h = 0)) : h > C && (h = C), h < l && (h = l);
    const L = this.subarray(l, h);
    return Object.setPrototypeOf(L, c.prototype), L;
  };
  function pe(p, l, h) {
    if (p % 1 !== 0 || p < 0) throw new RangeError("offset is not uint");
    if (p + l > h) throw new RangeError("Trying to access beyond buffer length");
  }
  c.prototype.readUintLE = c.prototype.readUIntLE = function(l, h, C) {
    l = l >>> 0, h = h >>> 0, C || pe(l, h, this.length);
    let L = this[l], V = 1, z = 0;
    for (; ++z < h && (V *= 256); )
      L += this[l + z] * V;
    return L;
  }, c.prototype.readUintBE = c.prototype.readUIntBE = function(l, h, C) {
    l = l >>> 0, h = h >>> 0, C || pe(l, h, this.length);
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
    const h = this[l], C = this[l + 7];
    (h === void 0 || C === void 0) && St(l, this.length - 8);
    const L = h + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24, V = this[++l] + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + C * 2 ** 24;
    return BigInt(L) + (BigInt(V) << BigInt(32));
  }), c.prototype.readBigUInt64BE = J(function(l) {
    l = l >>> 0, tt(l, "offset");
    const h = this[l], C = this[l + 7];
    (h === void 0 || C === void 0) && St(l, this.length - 8);
    const L = h * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l], V = this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + C;
    return (BigInt(L) << BigInt(32)) + BigInt(V);
  }), c.prototype.readIntLE = function(l, h, C) {
    l = l >>> 0, h = h >>> 0, C || pe(l, h, this.length);
    let L = this[l], V = 1, z = 0;
    for (; ++z < h && (V *= 256); )
      L += this[l + z] * V;
    return V *= 128, L >= V && (L -= Math.pow(2, 8 * h)), L;
  }, c.prototype.readIntBE = function(l, h, C) {
    l = l >>> 0, h = h >>> 0, C || pe(l, h, this.length);
    let L = h, V = 1, z = this[l + --L];
    for (; L > 0 && (V *= 256); )
      z += this[l + --L] * V;
    return V *= 128, z >= V && (z -= Math.pow(2, 8 * h)), z;
  }, c.prototype.readInt8 = function(l, h) {
    return l = l >>> 0, h || pe(l, 1, this.length), this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l];
  }, c.prototype.readInt16LE = function(l, h) {
    l = l >>> 0, h || pe(l, 2, this.length);
    const C = this[l] | this[l + 1] << 8;
    return C & 32768 ? C | 4294901760 : C;
  }, c.prototype.readInt16BE = function(l, h) {
    l = l >>> 0, h || pe(l, 2, this.length);
    const C = this[l + 1] | this[l] << 8;
    return C & 32768 ? C | 4294901760 : C;
  }, c.prototype.readInt32LE = function(l, h) {
    return l = l >>> 0, h || pe(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24;
  }, c.prototype.readInt32BE = function(l, h) {
    return l = l >>> 0, h || pe(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3];
  }, c.prototype.readBigInt64LE = J(function(l) {
    l = l >>> 0, tt(l, "offset");
    const h = this[l], C = this[l + 7];
    (h === void 0 || C === void 0) && St(l, this.length - 8);
    const L = this[l + 4] + this[l + 5] * 2 ** 8 + this[l + 6] * 2 ** 16 + (C << 24);
    return (BigInt(L) << BigInt(32)) + BigInt(h + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24);
  }), c.prototype.readBigInt64BE = J(function(l) {
    l = l >>> 0, tt(l, "offset");
    const h = this[l], C = this[l + 7];
    (h === void 0 || C === void 0) && St(l, this.length - 8);
    const L = (h << 24) + // Overflow
    this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
    return (BigInt(L) << BigInt(32)) + BigInt(this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + C);
  }), c.prototype.readFloatLE = function(l, h) {
    return l = l >>> 0, h || pe(l, 4, this.length), n.read(this, l, !0, 23, 4);
  }, c.prototype.readFloatBE = function(l, h) {
    return l = l >>> 0, h || pe(l, 4, this.length), n.read(this, l, !1, 23, 4);
  }, c.prototype.readDoubleLE = function(l, h) {
    return l = l >>> 0, h || pe(l, 8, this.length), n.read(this, l, !0, 52, 8);
  }, c.prototype.readDoubleBE = function(l, h) {
    return l = l >>> 0, h || pe(l, 8, this.length), n.read(this, l, !1, 52, 8);
  };
  function ae(p, l, h, C, L, V) {
    if (!c.isBuffer(p)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (l > L || l < V) throw new RangeError('"value" argument is out of bounds');
    if (h + C > p.length) throw new RangeError("Index out of range");
  }
  c.prototype.writeUintLE = c.prototype.writeUIntLE = function(l, h, C, L) {
    if (l = +l, h = h >>> 0, C = C >>> 0, !L) {
      const ie = Math.pow(2, 8 * C) - 1;
      ae(this, l, h, C, ie, 0);
    }
    let V = 1, z = 0;
    for (this[h] = l & 255; ++z < C && (V *= 256); )
      this[h + z] = l / V & 255;
    return h + C;
  }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(l, h, C, L) {
    if (l = +l, h = h >>> 0, C = C >>> 0, !L) {
      const ie = Math.pow(2, 8 * C) - 1;
      ae(this, l, h, C, ie, 0);
    }
    let V = C - 1, z = 1;
    for (this[h + V] = l & 255; --V >= 0 && (z *= 256); )
      this[h + V] = l / z & 255;
    return h + C;
  }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(l, h, C) {
    return l = +l, h = h >>> 0, C || ae(this, l, h, 1, 255, 0), this[h] = l & 255, h + 1;
  }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(l, h, C) {
    return l = +l, h = h >>> 0, C || ae(this, l, h, 2, 65535, 0), this[h] = l & 255, this[h + 1] = l >>> 8, h + 2;
  }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(l, h, C) {
    return l = +l, h = h >>> 0, C || ae(this, l, h, 2, 65535, 0), this[h] = l >>> 8, this[h + 1] = l & 255, h + 2;
  }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(l, h, C) {
    return l = +l, h = h >>> 0, C || ae(this, l, h, 4, 4294967295, 0), this[h + 3] = l >>> 24, this[h + 2] = l >>> 16, this[h + 1] = l >>> 8, this[h] = l & 255, h + 4;
  }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(l, h, C) {
    return l = +l, h = h >>> 0, C || ae(this, l, h, 4, 4294967295, 0), this[h] = l >>> 24, this[h + 1] = l >>> 16, this[h + 2] = l >>> 8, this[h + 3] = l & 255, h + 4;
  };
  function ge(p, l, h, C, L) {
    Se(l, C, L, p, h, 7);
    let V = Number(l & BigInt(4294967295));
    p[h++] = V, V = V >> 8, p[h++] = V, V = V >> 8, p[h++] = V, V = V >> 8, p[h++] = V;
    let z = Number(l >> BigInt(32) & BigInt(4294967295));
    return p[h++] = z, z = z >> 8, p[h++] = z, z = z >> 8, p[h++] = z, z = z >> 8, p[h++] = z, h;
  }
  function xe(p, l, h, C, L) {
    Se(l, C, L, p, h, 7);
    let V = Number(l & BigInt(4294967295));
    p[h + 7] = V, V = V >> 8, p[h + 6] = V, V = V >> 8, p[h + 5] = V, V = V >> 8, p[h + 4] = V;
    let z = Number(l >> BigInt(32) & BigInt(4294967295));
    return p[h + 3] = z, z = z >> 8, p[h + 2] = z, z = z >> 8, p[h + 1] = z, z = z >> 8, p[h] = z, h + 8;
  }
  c.prototype.writeBigUInt64LE = J(function(l, h = 0) {
    return ge(this, l, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeBigUInt64BE = J(function(l, h = 0) {
    return xe(this, l, h, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeIntLE = function(l, h, C, L) {
    if (l = +l, h = h >>> 0, !L) {
      const ce = Math.pow(2, 8 * C - 1);
      ae(this, l, h, C, ce - 1, -ce);
    }
    let V = 0, z = 1, ie = 0;
    for (this[h] = l & 255; ++V < C && (z *= 256); )
      l < 0 && ie === 0 && this[h + V - 1] !== 0 && (ie = 1), this[h + V] = (l / z >> 0) - ie & 255;
    return h + C;
  }, c.prototype.writeIntBE = function(l, h, C, L) {
    if (l = +l, h = h >>> 0, !L) {
      const ce = Math.pow(2, 8 * C - 1);
      ae(this, l, h, C, ce - 1, -ce);
    }
    let V = C - 1, z = 1, ie = 0;
    for (this[h + V] = l & 255; --V >= 0 && (z *= 256); )
      l < 0 && ie === 0 && this[h + V + 1] !== 0 && (ie = 1), this[h + V] = (l / z >> 0) - ie & 255;
    return h + C;
  }, c.prototype.writeInt8 = function(l, h, C) {
    return l = +l, h = h >>> 0, C || ae(this, l, h, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[h] = l & 255, h + 1;
  }, c.prototype.writeInt16LE = function(l, h, C) {
    return l = +l, h = h >>> 0, C || ae(this, l, h, 2, 32767, -32768), this[h] = l & 255, this[h + 1] = l >>> 8, h + 2;
  }, c.prototype.writeInt16BE = function(l, h, C) {
    return l = +l, h = h >>> 0, C || ae(this, l, h, 2, 32767, -32768), this[h] = l >>> 8, this[h + 1] = l & 255, h + 2;
  }, c.prototype.writeInt32LE = function(l, h, C) {
    return l = +l, h = h >>> 0, C || ae(this, l, h, 4, 2147483647, -2147483648), this[h] = l & 255, this[h + 1] = l >>> 8, this[h + 2] = l >>> 16, this[h + 3] = l >>> 24, h + 4;
  }, c.prototype.writeInt32BE = function(l, h, C) {
    return l = +l, h = h >>> 0, C || ae(this, l, h, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[h] = l >>> 24, this[h + 1] = l >>> 16, this[h + 2] = l >>> 8, this[h + 3] = l & 255, h + 4;
  }, c.prototype.writeBigInt64LE = J(function(l, h = 0) {
    return ge(this, l, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), c.prototype.writeBigInt64BE = J(function(l, h = 0) {
    return xe(this, l, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function $e(p, l, h, C, L, V) {
    if (h + C > p.length) throw new RangeError("Index out of range");
    if (h < 0) throw new RangeError("Index out of range");
  }
  function Je(p, l, h, C, L) {
    return l = +l, h = h >>> 0, L || $e(p, l, h, 4), n.write(p, l, h, C, 23, 4), h + 4;
  }
  c.prototype.writeFloatLE = function(l, h, C) {
    return Je(this, l, h, !0, C);
  }, c.prototype.writeFloatBE = function(l, h, C) {
    return Je(this, l, h, !1, C);
  };
  function ct(p, l, h, C, L) {
    return l = +l, h = h >>> 0, L || $e(p, l, h, 8), n.write(p, l, h, C, 52, 8), h + 8;
  }
  c.prototype.writeDoubleLE = function(l, h, C) {
    return ct(this, l, h, !0, C);
  }, c.prototype.writeDoubleBE = function(l, h, C) {
    return ct(this, l, h, !1, C);
  }, c.prototype.copy = function(l, h, C, L) {
    if (!c.isBuffer(l)) throw new TypeError("argument should be a Buffer");
    if (C || (C = 0), !L && L !== 0 && (L = this.length), h >= l.length && (h = l.length), h || (h = 0), L > 0 && L < C && (L = C), L === C || l.length === 0 || this.length === 0) return 0;
    if (h < 0)
      throw new RangeError("targetStart out of bounds");
    if (C < 0 || C >= this.length) throw new RangeError("Index out of range");
    if (L < 0) throw new RangeError("sourceEnd out of bounds");
    L > this.length && (L = this.length), l.length - h < L - C && (L = l.length - h + C);
    const V = L - C;
    return this === l && typeof s.prototype.copyWithin == "function" ? this.copyWithin(h, C, L) : s.prototype.set.call(
      l,
      this.subarray(C, L),
      h
    ), V;
  }, c.prototype.fill = function(l, h, C, L) {
    if (typeof l == "string") {
      if (typeof h == "string" ? (L = h, h = 0, C = this.length) : typeof C == "string" && (L = C, C = this.length), L !== void 0 && typeof L != "string")
        throw new TypeError("encoding must be a string");
      if (typeof L == "string" && !c.isEncoding(L))
        throw new TypeError("Unknown encoding: " + L);
      if (l.length === 1) {
        const z = l.charCodeAt(0);
        (L === "utf8" && z < 128 || L === "latin1") && (l = z);
      }
    } else typeof l == "number" ? l = l & 255 : typeof l == "boolean" && (l = Number(l));
    if (h < 0 || this.length < h || this.length < C)
      throw new RangeError("Out of range index");
    if (C <= h)
      return this;
    h = h >>> 0, C = C === void 0 ? this.length : C >>> 0, l || (l = 0);
    let V;
    if (typeof l == "number")
      for (V = h; V < C; ++V)
        this[V] = l;
    else {
      const z = c.isBuffer(l) ? l : c.from(l, L), ie = z.length;
      if (ie === 0)
        throw new TypeError('The value "' + l + '" is invalid for argument "value"');
      for (V = 0; V < C - h; ++V)
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
      let C = `The value of "${p}" is out of range.`, L = h;
      return Number.isInteger(h) && Math.abs(h) > 2 ** 32 ? L = Ke(String(h)) : typeof h == "bigint" && (L = String(h), (h > BigInt(2) ** BigInt(32) || h < -(BigInt(2) ** BigInt(32))) && (L = Ke(L)), L += "n"), C += ` It must be ${l}. Received ${L}`, C;
    },
    RangeError
  );
  function Ke(p) {
    let l = "", h = p.length;
    const C = p[0] === "-" ? 1 : 0;
    for (; h >= C + 4; h -= 3)
      l = `_${p.slice(h - 3, h)}${l}`;
    return `${p.slice(0, h)}${l}`;
  }
  function Ue(p, l, h) {
    tt(l, "offset"), (p[l] === void 0 || p[l + h] === void 0) && St(l, p.length - (h + 1));
  }
  function Se(p, l, h, C, L, V) {
    if (p > h || p < l) {
      const z = typeof l == "bigint" ? "n" : "";
      let ie;
      throw l === 0 || l === BigInt(0) ? ie = `>= 0${z} and < 2${z} ** ${(V + 1) * 8}${z}` : ie = `>= -(2${z} ** ${(V + 1) * 8 - 1}${z}) and < 2 ** ${(V + 1) * 8 - 1}${z}`, new je.ERR_OUT_OF_RANGE("value", ie, p);
    }
    Ue(C, L, V);
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
    const C = p.length;
    let L = null;
    const V = [];
    for (let z = 0; z < C; ++z) {
      if (h = p.charCodeAt(z), h > 55295 && h < 57344) {
        if (!L) {
          if (h > 56319) {
            (l -= 3) > -1 && V.push(239, 191, 189);
            continue;
          } else if (z + 1 === C) {
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
    let h, C, L;
    const V = [];
    for (let z = 0; z < p.length && !((l -= 2) < 0); ++z)
      h = p.charCodeAt(z), C = h >> 8, L = h % 256, V.push(L), V.push(C);
    return V;
  }
  function Xe(p) {
    return t.toByteArray(Mt(p));
  }
  function At(p, l, h, C) {
    let L;
    for (L = 0; L < C && !(L + h >= l.length || L >= p.length); ++L)
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
      const C = h * 16;
      for (let L = 0; L < 16; ++L)
        l[C + L] = p[h] + p[L];
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
    const o = r[3];
    if (o === 0 || 5 + o >= r.length || r[4 + o] !== 2) return !1;
    const s = r[5 + o];
    return !(s === 0 || 6 + o + s !== r.length || r[4] & 128 || o > 1 && r[4] === 0 && !(r[5] & 128) || r[o + 6] & 128 || s > 1 && r[o + 6] === 0 && !(r[o + 7] & 128));
  }
  er.check = e;
  function t(r) {
    if (r.length < 8) throw new Error("DER sequence length is too short");
    if (r.length > 72) throw new Error("DER sequence length is too long");
    if (r[0] !== 48) throw new Error("Expected DER sequence");
    if (r[1] !== r.length - 2)
      throw new Error("DER sequence length is invalid");
    if (r[2] !== 2) throw new Error("Expected DER integer");
    const o = r[3];
    if (o === 0) throw new Error("R length is zero");
    if (5 + o >= r.length) throw new Error("R length is too long");
    if (r[4 + o] !== 2) throw new Error("Expected DER integer (2)");
    const s = r[5 + o];
    if (s === 0) throw new Error("S length is zero");
    if (6 + o + s !== r.length) throw new Error("S length is invalid");
    if (r[4] & 128) throw new Error("R value is negative");
    if (o > 1 && r[4] === 0 && !(r[5] & 128))
      throw new Error("R value excessively padded");
    if (r[o + 6] & 128) throw new Error("S value is negative");
    if (s > 1 && r[o + 6] === 0 && !(r[o + 7] & 128))
      throw new Error("S value excessively padded");
    return {
      r: r.slice(4, 4 + o),
      s: r.slice(6 + o)
    };
  }
  er.decode = t;
  function n(r, o) {
    const s = r.length, u = o.length;
    if (s === 0) throw new Error("R length is zero");
    if (u === 0) throw new Error("S length is zero");
    if (s > 33) throw new Error("R length is too long");
    if (u > 33) throw new Error("S length is too long");
    if (r[0] & 128) throw new Error("R value is negative");
    if (o[0] & 128) throw new Error("S value is negative");
    if (s > 1 && r[0] === 0 && !(r[1] & 128))
      throw new Error("R value excessively padded");
    if (u > 1 && o[0] === 0 && !(o[1] & 128))
      throw new Error("S value excessively padded");
    const i = Q.allocUnsafe(6 + s + u);
    return i[0] = 48, i[1] = i.length - 2, i[2] = 2, i[3] = r.length, r.copy(i, 4), i[4 + s] = 2, i[5 + s] = o.length, o.copy(i, 6 + s), i;
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
  function t(o) {
    return o < e.OPS.OP_PUSHDATA1 ? 1 : o <= 255 ? 2 : o <= 65535 ? 3 : 5;
  }
  tr.encodingLength = t;
  function n(o, s, u) {
    const i = t(s);
    return i === 1 ? o.writeUInt8(s, u) : i === 2 ? (o.writeUInt8(e.OPS.OP_PUSHDATA1, u), o.writeUInt8(s, u + 1)) : i === 3 ? (o.writeUInt8(e.OPS.OP_PUSHDATA2, u), o.writeUInt16LE(s, u + 1)) : (o.writeUInt8(e.OPS.OP_PUSHDATA4, u), o.writeUInt32LE(s, u + 1)), i;
  }
  tr.encode = n;
  function r(o, s) {
    const u = o.readUInt8(s);
    let i, a;
    if (u < e.OPS.OP_PUSHDATA1)
      i = u, a = 1;
    else if (u === e.OPS.OP_PUSHDATA1) {
      if (s + 2 > o.length) return null;
      i = o.readUInt8(s + 1), a = 2;
    } else if (u === e.OPS.OP_PUSHDATA2) {
      if (s + 3 > o.length) return null;
      i = o.readUInt16LE(s + 1), a = 3;
    } else {
      if (s + 5 > o.length) return null;
      if (u !== e.OPS.OP_PUSHDATA4) throw new Error("Unexpected opcode");
      i = o.readUInt32LE(s + 1), a = 5;
    }
    return {
      opcode: u,
      number: i,
      size: a
    };
  }
  return tr.decode = r, tr;
}
var Rr = {}, nu;
function xp() {
  if (nu) return Rr;
  nu = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.encode = Rr.decode = void 0;
  function e(r, o, s) {
    o = o || 4, s = s === void 0 ? !0 : s;
    const u = r.length;
    if (u === 0) return 0;
    if (u > o) throw new TypeError("Script number overflow");
    if (s && !(r[u - 1] & 127) && (u <= 1 || !(r[u - 2] & 128)))
      throw new Error("Non-minimally encoded script number");
    if (u === 5) {
      const a = r.readUInt32LE(0), d = r.readUInt8(4);
      return d & 128 ? -((d & -129) * 4294967296 + a) : d * 4294967296 + a;
    }
    let i = 0;
    for (let a = 0; a < u; ++a)
      i |= r[a] << 8 * a;
    return r[u - 1] & 128 ? -(i & ~(128 << 8 * (u - 1))) : i;
  }
  Rr.decode = e;
  function t(r) {
    return r > 2147483647 ? 5 : r > 8388607 ? 4 : r > 32767 ? 3 : r > 127 ? 2 : r > 0 ? 1 : 0;
  }
  function n(r) {
    let o = Math.abs(r);
    const s = t(o), u = Q.allocUnsafe(s), i = r < 0;
    for (let a = 0; a < s; ++a)
      u.writeUInt8(o & 255, a), o >>= 8;
    return u[s - 1] & 128 ? u.writeUInt8(i ? 128 : 0, s - 1) : i && (u[s - 1] |= 128), u;
  }
  return Rr.encode = n, Rr;
}
var Fr = {}, lo = {}, fo = {}, iu;
function Mi() {
  return iu || (iu = 1, function(e) {
    Object.defineProperties(e, { __esModule: { value: !0 }, [Symbol.toStringTag]: { value: "Module" } });
    var t = {}, n = {};
    n.byteLength = c, n.toByteArray = y, n.fromByteArray = E;
    for (var r = [], o = [], s = typeof Uint8Array < "u" ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, a = u.length; i < a; ++i)
      r[i] = u[i], o[u.charCodeAt(i)] = i;
    o[45] = 62, o[95] = 63;
    function d(w) {
      var T = w.length;
      if (T % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var O = w.indexOf("=");
      O === -1 && (O = T);
      var W = O === T ? 0 : 4 - O % 4;
      return [O, W];
    }
    function c(w) {
      var T = d(w), O = T[0], W = T[1];
      return (O + W) * 3 / 4 - W;
    }
    function m(w, T, O) {
      return (T + O) * 3 / 4 - O;
    }
    function y(w) {
      var T, O = d(w), W = O[0], U = O[1], K = new s(m(w, W, U)), S = 0, A = U > 0 ? W - 4 : W, _;
      for (_ = 0; _ < A; _ += 4)
        T = o[w.charCodeAt(_)] << 18 | o[w.charCodeAt(_ + 1)] << 12 | o[w.charCodeAt(_ + 2)] << 6 | o[w.charCodeAt(_ + 3)], K[S++] = T >> 16 & 255, K[S++] = T >> 8 & 255, K[S++] = T & 255;
      return U === 2 && (T = o[w.charCodeAt(_)] << 2 | o[w.charCodeAt(_ + 1)] >> 4, K[S++] = T & 255), U === 1 && (T = o[w.charCodeAt(_)] << 10 | o[w.charCodeAt(_ + 1)] << 4 | o[w.charCodeAt(_ + 2)] >> 2, K[S++] = T >> 8 & 255, K[S++] = T & 255), K;
    }
    function f(w) {
      return r[w >> 18 & 63] + r[w >> 12 & 63] + r[w >> 6 & 63] + r[w & 63];
    }
    function b(w, T, O) {
      for (var W, U = [], K = T; K < O; K += 3)
        W = (w[K] << 16 & 16711680) + (w[K + 1] << 8 & 65280) + (w[K + 2] & 255), U.push(f(W));
      return U.join("");
    }
    function E(w) {
      for (var T, O = w.length, W = O % 3, U = [], K = 16383, S = 0, A = O - W; S < A; S += K)
        U.push(b(w, S, S + K > A ? A : S + K));
      return W === 1 ? (T = w[O - 1], U.push(
        r[T >> 2] + r[T << 4 & 63] + "=="
      )) : W === 2 && (T = (w[O - 2] << 8) + w[O - 1], U.push(
        r[T >> 10] + r[T >> 4 & 63] + r[T << 2 & 63] + "="
      )), U.join("");
    }
    var I = {};
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    I.read = function(w, T, O, W, U) {
      var K, S, A = U * 8 - W - 1, _ = (1 << A) - 1, N = _ >> 1, P = -7, F = O ? U - 1 : 0, j = O ? -1 : 1, H = w[T + F];
      for (F += j, K = H & (1 << -P) - 1, H >>= -P, P += A; P > 0; K = K * 256 + w[T + F], F += j, P -= 8)
        ;
      for (S = K & (1 << -P) - 1, K >>= -P, P += W; P > 0; S = S * 256 + w[T + F], F += j, P -= 8)
        ;
      if (K === 0)
        K = 1 - N;
      else {
        if (K === _)
          return S ? NaN : (H ? -1 : 1) * (1 / 0);
        S = S + Math.pow(2, W), K = K - N;
      }
      return (H ? -1 : 1) * S * Math.pow(2, K - W);
    }, I.write = function(w, T, O, W, U, K) {
      var S, A, _, N = K * 8 - U - 1, P = (1 << N) - 1, F = P >> 1, j = U === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, H = W ? 0 : K - 1, $ = W ? 1 : -1, G = T < 0 || T === 0 && 1 / T < 0 ? 1 : 0;
      for (T = Math.abs(T), isNaN(T) || T === 1 / 0 ? (A = isNaN(T) ? 1 : 0, S = P) : (S = Math.floor(Math.log(T) / Math.LN2), T * (_ = Math.pow(2, -S)) < 1 && (S--, _ *= 2), S + F >= 1 ? T += j / _ : T += j * Math.pow(2, 1 - F), T * _ >= 2 && (S++, _ /= 2), S + F >= P ? (A = 0, S = P) : S + F >= 1 ? (A = (T * _ - 1) * Math.pow(2, U), S = S + F) : (A = T * Math.pow(2, F - 1) * Math.pow(2, U), S = 0)); U >= 8; w[O + H] = A & 255, H += $, A /= 256, U -= 8)
        ;
      for (S = S << U | A, N += U; N > 0; w[O + H] = S & 255, H += $, S /= 256, N -= 8)
        ;
      w[O + H - $] |= G * 128;
    };
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    (function(w) {
      const T = n, O = I, W = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      w.Buffer = P, w.SlowBuffer = se, w.INSPECT_MAX_BYTES = 50;
      const U = 2147483647;
      w.kMaxLength = U;
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
      function j(R) {
        if (typeof R != "number")
          throw new TypeError('"size" argument must be of type number');
        if (R < 0)
          throw new RangeError('The value "' + R + '" is invalid for option "size"');
      }
      function H(R, g, v) {
        return j(R), R <= 0 ? N(R) : g !== void 0 ? typeof v == "string" ? N(R).fill(g, v) : N(R).fill(g) : N(R);
      }
      P.alloc = function(R, g, v) {
        return H(R, g, v);
      };
      function $(R) {
        return j(R), N(R < 0 ? 0 : ne(R) | 0);
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
        const v = w.INSPECT_MAX_BYTES;
        return g = this.toString("hex", 0, v).replace(/(.{2})/g, "$1 ").trim(), this.length > v && (g += " ... "), "<Buffer " + g + ">";
      }, W && (P.prototype[W] = P.prototype.inspect), P.prototype.compare = function(g, v, D, X, ee) {
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
        let re = ee - X, ve = D - v;
        const De = Math.min(re, ve), Le = this.slice(X, ee), q = g.slice(v, D);
        for (let te = 0; te < De; ++te)
          if (Le[te] !== q[te]) {
            re = Le[te], ve = q[te];
            break;
          }
        return re < ve ? -1 : ve < re ? 1 : 0;
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
        let ee = 1, re = R.length, ve = g.length;
        if (D !== void 0 && (D = String(D).toLowerCase(), D === "ucs2" || D === "ucs-2" || D === "utf16le" || D === "utf-16le")) {
          if (R.length < 2 || g.length < 2)
            return -1;
          ee = 2, re /= 2, ve /= 2, v /= 2;
        }
        function De(q, te) {
          return ee === 1 ? q[te] : q.readUInt16BE(te * ee);
        }
        let Le;
        if (X) {
          let q = -1;
          for (Le = v; Le < re; Le++)
            if (De(R, Le) === De(g, q === -1 ? 0 : Le - q)) {
              if (q === -1 && (q = Le), Le - q + 1 === ve) return q * ee;
            } else
              q !== -1 && (Le -= Le - q), q = -1;
        } else
          for (v + ve > re && (v = re - ve), Le = v; Le >= 0; Le--) {
            let q = !0;
            for (let te = 0; te < ve; te++)
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
          const ve = parseInt(g.substr(re * 2, 2), 16);
          if (Zr(ve)) return re;
          R[v + re] = ve;
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
          let re = null, ve = ee > 239 ? 4 : ee > 223 ? 3 : ee > 191 ? 2 : 1;
          if (X + ve <= v) {
            let De, Le, q, te;
            switch (ve) {
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
          re === null ? (re = 65533, ve = 1) : re > 65535 && (re -= 65536, D.push(re >>> 10 & 1023 | 55296), re = 56320 | re & 1023), D.push(re), X += ve;
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
        return g = g >>> 0, v || Be(g, 4, this.length), O.read(this, g, !0, 23, 4);
      }, P.prototype.readFloatBE = function(g, v) {
        return g = g >>> 0, v || Be(g, 4, this.length), O.read(this, g, !1, 23, 4);
      }, P.prototype.readDoubleLE = function(g, v) {
        return g = g >>> 0, v || Be(g, 8, this.length), O.read(this, g, !0, 52, 8);
      }, P.prototype.readDoubleBE = function(g, v) {
        return g = g >>> 0, v || Be(g, 8, this.length), O.read(this, g, !1, 52, 8);
      };
      function Xe(R, g, v, D, X, ee) {
        if (!P.isBuffer(R)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (g > X || g < ee) throw new RangeError('"value" argument is out of bounds');
        if (v + D > R.length) throw new RangeError("Index out of range");
      }
      P.prototype.writeUintLE = P.prototype.writeUIntLE = function(g, v, D, X) {
        if (g = +g, v = v >>> 0, D = D >>> 0, !X) {
          const ve = Math.pow(2, 8 * D) - 1;
          Xe(this, g, v, D, ve, 0);
        }
        let ee = 1, re = 0;
        for (this[v] = g & 255; ++re < D && (ee *= 256); )
          this[v + re] = g / ee & 255;
        return v + D;
      }, P.prototype.writeUintBE = P.prototype.writeUIntBE = function(g, v, D, X) {
        if (g = +g, v = v >>> 0, D = D >>> 0, !X) {
          const ve = Math.pow(2, 8 * D) - 1;
          Xe(this, g, v, D, ve, 0);
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
        C(g, D, X, R, v, 7);
        let ee = Number(g & BigInt(4294967295));
        R[v++] = ee, ee = ee >> 8, R[v++] = ee, ee = ee >> 8, R[v++] = ee, ee = ee >> 8, R[v++] = ee;
        let re = Number(g >> BigInt(32) & BigInt(4294967295));
        return R[v++] = re, re = re >> 8, R[v++] = re, re = re >> 8, R[v++] = re, re = re >> 8, R[v++] = re, v;
      }
      function Ye(R, g, v, D, X) {
        C(g, D, X, R, v, 7);
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
        let ee = 0, re = 1, ve = 0;
        for (this[v] = g & 255; ++ee < D && (re *= 256); )
          g < 0 && ve === 0 && this[v + ee - 1] !== 0 && (ve = 1), this[v + ee] = (g / re >> 0) - ve & 255;
        return v + D;
      }, P.prototype.writeIntBE = function(g, v, D, X) {
        if (g = +g, v = v >>> 0, !X) {
          const De = Math.pow(2, 8 * D - 1);
          Xe(this, g, v, D, De - 1, -De);
        }
        let ee = D - 1, re = 1, ve = 0;
        for (this[v + ee] = g & 255; --ee >= 0 && (re *= 256); )
          g < 0 && ve === 0 && this[v + ee + 1] !== 0 && (ve = 1), this[v + ee] = (g / re >> 0) - ve & 255;
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
        return g = +g, v = v >>> 0, X || Tt(R, g, v, 4), O.write(R, g, v, D, 23, 4), v + 4;
      }
      P.prototype.writeFloatLE = function(g, v, D) {
        return lt(this, g, v, !0, D);
      }, P.prototype.writeFloatBE = function(g, v, D) {
        return lt(this, g, v, !1, D);
      };
      function J(R, g, v, D, X) {
        return g = +g, v = v >>> 0, X || Tt(R, g, v, 8), O.write(R, g, v, D, 52, 8), v + 8;
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
          const re = P.isBuffer(g) ? g : P.from(g, X), ve = re.length;
          if (ve === 0)
            throw new TypeError('The value "' + g + '" is invalid for argument "value"');
          for (ee = 0; ee < D - v; ++ee)
            this[ee + v] = re[ee % ve];
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
      function C(R, g, v, D, X, ee) {
        if (R > v || R < g) {
          const re = typeof g == "bigint" ? "n" : "";
          let ve;
          throw g === 0 || g === BigInt(0) ? ve = `>= 0${re} and < 2${re} ** ${(ee + 1) * 8}${re}` : ve = `>= -(2${re} ** ${(ee + 1) * 8 - 1}${re}) and < 2 ** ${(ee + 1) * 8 - 1}${re}`, new B.ERR_OUT_OF_RANGE("value", ve, R);
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
  function o(y, f) {
    Error.captureStackTrace && Error.captureStackTrace(y, f);
  }
  function s(y) {
    return e.Function(y) ? y.toJSON ? y.toJSON() : t(y) : e.Array(y) ? "Array" : y && e.Object(y) ? "Object" : y !== void 0 ? y : "";
  }
  function u(y, f, b) {
    var E = r(f);
    return "Expected " + s(y) + ", got" + (b !== "" ? " " + b : "") + (E !== "" ? " " + E : "");
  }
  function i(y, f, b) {
    b = b || n(f), this.message = u(y, f, b), o(this, i), this.__type = y, this.__value = f, this.__valueTypeName = b;
  }
  i.prototype = Object.create(Error.prototype), i.prototype.constructor = i;
  function a(y, f, b, E, I) {
    var x = '" of type ';
    return f === "key" && (x = '" with key type '), u('property "' + s(b) + x + s(y), E, I);
  }
  function d(y, f, b, E, I) {
    y ? (I = I || n(E), this.message = a(y, b, f, E, I)) : this.message = 'Unexpected property "' + f + '"', o(this, i), this.__label = b, this.__property = f, this.__type = y, this.__value = E, this.__valueTypeName = I;
  }
  d.prototype = Object.create(Error.prototype), d.prototype.constructor = i;
  function c(y, f) {
    return new i(y, {}, f);
  }
  function m(y, f, b) {
    return y instanceof d ? (f = f + "." + y.__property, y = new d(
      y.__type,
      f,
      y.__label,
      y.__value,
      y.__valueTypeName
    )) : y instanceof i && (y = new d(
      y.__type,
      f,
      b,
      y.__value,
      y.__valueTypeName
    )), o(y), y;
  }
  return po = {
    TfTypeError: i,
    TfPropertyTypeError: d,
    tfCustomError: c,
    tfSubError: m,
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
  function o(U, K) {
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
  var s = o.bind(null, e.Array), u = o.bind(null, n), i = o.bind(null, r), a = o.bind(null, e.String);
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
  function m(U) {
    return typeof U == "number" && isFinite(U);
  }
  function y(U) {
    return U << 24 >> 24 === U;
  }
  function f(U) {
    return U << 16 >> 16 === U;
  }
  function b(U) {
    return (U | 0) === U;
  }
  function E(U) {
    return typeof U == "number" && U >= -c && U <= c && Math.floor(U) === U;
  }
  function I(U) {
    return (U & 255) === U;
  }
  function x(U) {
    return (U & 65535) === U;
  }
  function w(U) {
    return U >>> 0 === U;
  }
  function T(U) {
    return typeof U == "number" && U >= 0 && U <= c && Math.floor(U) === U;
  }
  var O = {
    ArrayN: s,
    Buffer: n,
    BufferN: u,
    Finite: m,
    Hex: r,
    HexN: i,
    Int8: y,
    Int16: f,
    Int32: b,
    Int53: E,
    Range: d,
    StringN: a,
    UInt8: I,
    UInt16: x,
    UInt32: w,
    UInt53: T
  };
  for (var W in O)
    O[W].toJSON = (function(U) {
      return U;
    }).bind(null, W);
  return go = O, go;
}
var mo, au;
function Op() {
  if (au) return mo;
  au = 1;
  var e = zc(), t = hs(), n = e.tfJSON, r = e.TfTypeError, o = e.TfPropertyTypeError, s = e.tfSubError, u = e.getValueTypeName, i = {
    arrayOf: function(f, b) {
      f = a(f), b = b || {};
      function E(I, x) {
        return !t.Array(I) || t.Nil(I) || b.minLength !== void 0 && I.length < b.minLength || b.maxLength !== void 0 && I.length > b.maxLength || b.length !== void 0 && I.length !== b.length ? !1 : I.every(function(w, T) {
          try {
            return d(f, w, x);
          } catch (O) {
            throw s(O, T);
          }
        });
      }
      return E.toJSON = function() {
        var I = "[" + n(f) + "]";
        return b.length !== void 0 ? I += "{" + b.length + "}" : (b.minLength !== void 0 || b.maxLength !== void 0) && (I += "{" + (b.minLength === void 0 ? 0 : b.minLength) + "," + (b.maxLength === void 0 ? 1 / 0 : b.maxLength) + "}"), I;
      }, E;
    },
    maybe: function y(f) {
      f = a(f);
      function b(E, I) {
        return t.Nil(E) || f(E, I, y);
      }
      return b.toJSON = function() {
        return "?" + n(f);
      }, b;
    },
    map: function(f, b) {
      f = a(f), b && (b = a(b));
      function E(I, x) {
        if (!t.Object(I) || t.Nil(I)) return !1;
        for (var w in I) {
          try {
            b && d(b, w, x);
          } catch (O) {
            throw s(O, w, "key");
          }
          try {
            var T = I[w];
            d(f, T, x);
          } catch (O) {
            throw s(O, w);
          }
        }
        return !0;
      }
      return b ? E.toJSON = function() {
        return "{" + n(b) + ": " + n(f) + "}";
      } : E.toJSON = function() {
        return "{" + n(f) + "}";
      }, E;
    },
    object: function(f) {
      var b = {};
      for (var E in f)
        b[E] = a(f[E]);
      function I(x, w) {
        if (!t.Object(x) || t.Nil(x)) return !1;
        var T;
        try {
          for (T in b) {
            var O = b[T], W = x[T];
            d(O, W, w);
          }
        } catch (U) {
          throw s(U, T);
        }
        if (w) {
          for (T in x)
            if (!b[T])
              throw new o(void 0, T);
        }
        return !0;
      }
      return I.toJSON = function() {
        return n(b);
      }, I;
    },
    anyOf: function() {
      var f = [].slice.call(arguments).map(a);
      function b(E, I) {
        return f.some(function(x) {
          try {
            return d(x, E, I);
          } catch {
            return !1;
          }
        });
      }
      return b.toJSON = function() {
        return f.map(n).join("|");
      }, b;
    },
    allOf: function() {
      var f = [].slice.call(arguments).map(a);
      function b(E, I) {
        return f.every(function(x) {
          try {
            return d(x, E, I);
          } catch {
            return !1;
          }
        });
      }
      return b.toJSON = function() {
        return f.map(n).join(" & ");
      }, b;
    },
    quacksLike: function(f) {
      function b(E) {
        return f === u(E);
      }
      return b.toJSON = function() {
        return f;
      }, b;
    },
    tuple: function() {
      var f = [].slice.call(arguments).map(a);
      function b(E, I) {
        return t.Nil(E) || t.Nil(E.length) || I && E.length !== f.length ? !1 : f.every(function(x, w) {
          try {
            return d(x, E[w], I);
          } catch (T) {
            throw s(T, w);
          }
        });
      }
      return b.toJSON = function() {
        return "(" + f.map(n).join(", ") + ")";
      }, b;
    },
    value: function(f) {
      function b(E) {
        return E === f;
      }
      return b.toJSON = function() {
        return f;
      }, b;
    }
  };
  i.oneOf = i.anyOf;
  function a(y) {
    if (t.String(y))
      return y[0] === "?" ? i.maybe(y.slice(1)) : t[y] || i.quacksLike(y);
    if (y && t.Object(y)) {
      if (t.Array(y)) {
        if (y.length !== 1) throw new TypeError("Expected compile() parameter of type Array of length 1");
        return i.arrayOf(y[0]);
      }
      return i.object(y);
    } else if (t.Function(y))
      return y;
    return i.value(y);
  }
  function d(y, f, b, E) {
    if (t.Function(y)) {
      if (y(f, b)) return !0;
      throw new r(E || y, f);
    }
    return d(a(y), f, b);
  }
  for (var c in t)
    d[c] = t[c];
  for (c in i)
    d[c] = i[c];
  var m = _p();
  for (c in m)
    d[c] = m[c];
  return d.compile = a, d.TfTypeError = r, d.TfPropertyTypeError = o, mo = d, mo;
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
    function o(c, m) {
      return c.length !== m.length ? !1 : c.every((y, f) => y.equals(m[f]));
    }
    e.stacksEqual = o;
    function s(c) {
      if (!t.Buffer.isBuffer(c) || c.length < 33) return !1;
      const m = c[0], y = c.slice(1, 33);
      if (y.compare(n) === 0 || y.compare(r) >= 0) return !1;
      if ((m === 2 || m === 3) && c.length === 33)
        return !0;
      const f = c.slice(33);
      return f.compare(n) === 0 || f.compare(r) >= 0 ? !1 : m === 4 && c.length === 65;
    }
    e.isPoint = s;
    const u = 21 * 1e14;
    function i(c) {
      return e.typeforce.UInt53(c) && c <= u;
    }
    e.Satoshi = i, e.TAPLEAF_VERSION_MASK = 254;
    function a(c) {
      return !c || !("output" in c) || !t.Buffer.isBuffer(c.output) ? !1 : c.version !== void 0 ? (c.version & e.TAPLEAF_VERSION_MASK) === c.version : !0;
    }
    e.isTapleaf = a;
    function d(c) {
      return (0, e.Array)(c) ? c.length !== 2 ? !1 : c.every((m) => d(m)) : a(c);
    }
    e.isTaptree = d, e.Buffer256bit = e.typeforce.BufferN(32), e.Hash160bit = e.typeforce.BufferN(20), e.Hash256bit = e.typeforce.BufferN(32), e.Number = e.typeforce.Number, e.Array = e.typeforce.Array, e.Boolean = e.typeforce.Boolean, e.String = e.typeforce.String, e.Buffer = e.typeforce.Buffer, e.Hex = e.typeforce.Hex, e.maybe = e.typeforce.maybe, e.tuple = e.typeforce.tuple, e.UInt8 = e.typeforce.UInt8, e.UInt32 = e.typeforce.UInt32, e.Function = e.typeforce.Function, e.BufferN = e.typeforce.BufferN, e.Null = e.typeforce.Null, e.oneOf = e.typeforce.oneOf;
  }(lo)), lo;
}
var lu;
function Cp() {
  if (lu) return Fr;
  lu = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.encode = Fr.decode = void 0;
  const e = Yc(), t = yt(), n = pt(), { typeforce: r } = n, o = Q.alloc(1, 0);
  function s(d) {
    let c = 0;
    for (; d[c] === 0; ) ++c;
    return c === d.length ? o : (d = d.slice(c), d[0] & 128 ? Q.concat([o, d], 1 + d.length) : d);
  }
  function u(d) {
    d[0] === 0 && (d = d.slice(1));
    const c = Q.alloc(32, 0), m = Math.max(0, 32 - d.length);
    return d.copy(c, m), c;
  }
  function i(d) {
    const c = d.readUInt8(d.length - 1);
    if (!(0, t.isDefinedHashType)(c))
      throw new Error("Invalid hashType " + c);
    const m = e.decode(d.slice(0, -1)), y = u(m.r), f = u(m.s);
    return { signature: Q.concat([y, f], 64), hashType: c };
  }
  Fr.decode = i;
  function a(d, c) {
    if (r(
      {
        signature: n.BufferN(64),
        hashType: n.UInt8
      },
      { signature: d, hashType: c }
    ), !(0, t.isDefinedHashType)(c))
      throw new Error("Invalid hashType " + c);
    const m = Q.allocUnsafe(1);
    m.writeUInt8(c, 0);
    const y = s(d.slice(0, 32)), f = s(d.slice(32, 64));
    return Q.concat([e.encode(y, f), m]);
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
    const r = Ip(), o = xp(), s = Cp(), u = pt(), { typeforce: i } = u, a = n.OPS.OP_RESERVED;
    function d(A) {
      return u.Number(A) && (A === n.OPS.OP_0 || A >= n.OPS.OP_1 && A <= n.OPS.OP_16 || A === n.OPS.OP_1NEGATE);
    }
    function c(A) {
      return u.Buffer(A) || d(A);
    }
    function m(A) {
      return u.Array(A) && A.every(c);
    }
    e.isPushOnly = m;
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
    function b(A) {
      return Q.isBuffer(A);
    }
    function E(A) {
      return u.Array(A);
    }
    function I(A) {
      return Q.isBuffer(A);
    }
    function x(A) {
      if (b(A)) return A;
      i(u.Array, A);
      const _ = A.reduce((F, j) => I(j) ? j.length === 1 && f(j) !== void 0 ? F + 1 : F + r.encodingLength(j.length) + j.length : F + 1, 0), N = Q.allocUnsafe(_);
      let P = 0;
      if (A.forEach((F) => {
        if (I(F)) {
          const j = f(F);
          if (j !== void 0) {
            N.writeUInt8(j, P), P += 1;
            return;
          }
          P += r.encode(N, F.length, P), F.copy(N, P), P += F.length;
        } else
          N.writeUInt8(F, P), P += 1;
      }), P !== N.length) throw new Error("Could not decode chunks");
      return N;
    }
    e.compile = x;
    function w(A) {
      if (E(A)) return A;
      i(u.Buffer, A);
      const _ = [];
      let N = 0;
      for (; N < A.length; ) {
        const P = A[N];
        if (P > n.OPS.OP_0 && P <= n.OPS.OP_PUSHDATA4) {
          const F = r.decode(A, N);
          if (F === null || (N += F.size, N + F.number > A.length)) return null;
          const j = A.slice(N, N + F.number);
          N += F.number;
          const H = f(j);
          H !== void 0 ? _.push(H) : _.push(j);
        } else
          _.push(P), N += 1;
      }
      return _;
    }
    e.decompile = w;
    function T(A) {
      if (b(A) && (A = w(A)), !A)
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
    function O(A) {
      return i(u.String, A), x(
        A.split(" ").map((_) => n.OPS[_] !== void 0 ? n.OPS[_] : (i(u.Hex, _), Q.from(_, "hex")))
      );
    }
    e.fromASM = O;
    function W(A) {
      return A = w(A), i(m, A), A.map((_) => I(_) ? _ : _ === n.OPS.OP_0 ? Q.allocUnsafe(0) : o.encode(_ - a));
    }
    e.toStack = W;
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
    e.isCanonicalScriptSignature = S, e.number = o, e.signature = s;
  }(co)), co;
}
var Nr = {}, hu;
function _r() {
  if (hu) return Nr;
  hu = 1, Object.defineProperty(Nr, "__esModule", { value: !0 }), Nr.value = Nr.prop = void 0;
  function e(n, r, o) {
    Object.defineProperty(n, r, {
      configurable: !0,
      enumerable: !0,
      get() {
        const s = o.call(this);
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
  const e = Ht(), t = yt(), n = pt(), r = _r(), o = t.OPS;
  function s(u, i) {
    if (!u.data && !u.output) throw new TypeError("Not enough data");
    i = Object.assign({ validate: !0 }, i || {}), (0, n.typeforce)(
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
        return t.compile([o.OP_RETURN].concat(u.data));
    }), r.prop(d, "data", () => {
      if (u.output)
        return t.decompile(u.output).slice(1);
    }), i.validate && u.output) {
      const c = t.decompile(u.output);
      if (c[0] !== o.OP_RETURN) throw new TypeError("Output is invalid");
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
  const e = Ht(), t = yt(), n = pt(), r = _r(), o = t.OPS, s = o.OP_RESERVED;
  function u(i, a) {
    if (!i.input && !i.output && !(i.pubkeys && i.m !== void 0) && !i.signatures)
      throw new TypeError("Not enough data");
    a = Object.assign({ validate: !0 }, a || {});
    function d(E) {
      return t.isCanonicalScriptSignature(E) || (a.allowIncomplete && E === o.OP_0) !== void 0;
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
      i
    );
    const m = { network: i.network || e.bitcoin };
    let y = [], f = !1;
    function b(E) {
      f || (f = !0, y = t.decompile(E), m.m = y[0] - s, m.n = y[y.length - 2] - s, m.pubkeys = y.slice(1, -2));
    }
    if (r.prop(m, "output", () => {
      if (i.m && m.n && i.pubkeys)
        return t.compile(
          [].concat(
            s + i.m,
            i.pubkeys,
            s + m.n,
            o.OP_CHECKMULTISIG
          )
        );
    }), r.prop(m, "m", () => {
      if (m.output)
        return b(m.output), m.m;
    }), r.prop(m, "n", () => {
      if (m.pubkeys)
        return m.pubkeys.length;
    }), r.prop(m, "pubkeys", () => {
      if (i.output)
        return b(i.output), m.pubkeys;
    }), r.prop(m, "signatures", () => {
      if (i.input)
        return t.decompile(i.input).slice(1);
    }), r.prop(m, "input", () => {
      if (i.signatures)
        return t.compile([o.OP_0].concat(i.signatures));
    }), r.prop(m, "witness", () => {
      if (m.input)
        return [];
    }), r.prop(m, "name", () => {
      if (!(!m.m || !m.n))
        return `p2ms(${m.m} of ${m.n})`;
    }), a.validate) {
      if (i.output) {
        if (b(i.output), !n.typeforce.Number(y[0]))
          throw new TypeError("Output is invalid");
        if (!n.typeforce.Number(y[y.length - 2]))
          throw new TypeError("Output is invalid");
        if (y[y.length - 1] !== o.OP_CHECKMULTISIG)
          throw new TypeError("Output is invalid");
        if (m.m <= 0 || m.n > 16 || m.m > m.n || m.n !== y.length - 3)
          throw new TypeError("Output is invalid");
        if (!m.pubkeys.every((E) => (0, n.isPoint)(E)))
          throw new TypeError("Output is invalid");
        if (i.m !== void 0 && i.m !== m.m) throw new TypeError("m mismatch");
        if (i.n !== void 0 && i.n !== m.n) throw new TypeError("n mismatch");
        if (i.pubkeys && !(0, n.stacksEqual)(i.pubkeys, m.pubkeys))
          throw new TypeError("Pubkeys mismatch");
      }
      if (i.pubkeys) {
        if (i.n !== void 0 && i.n !== i.pubkeys.length)
          throw new TypeError("Pubkey count mismatch");
        if (m.n = i.pubkeys.length, m.n < m.m) throw new TypeError("Pubkey count cannot be less than m");
      }
      if (i.signatures) {
        if (i.signatures.length < m.m)
          throw new TypeError("Not enough signatures provided");
        if (i.signatures.length > m.m)
          throw new TypeError("Too many signatures provided");
      }
      if (i.input) {
        if (i.input[0] !== o.OP_0) throw new TypeError("Input is invalid");
        if (m.signatures.length === 0 || !m.signatures.every(d))
          throw new TypeError("Input has invalid signature(s)");
        if (i.signatures && !(0, n.stacksEqual)(i.signatures, m.signatures))
          throw new TypeError("Signature mismatch");
        if (i.m !== void 0 && i.m !== i.signatures.length)
          throw new TypeError("Signature count mismatch");
      }
    }
    return Object.assign(m, i);
  }
  return Pn.p2ms = u, Pn;
}
var Sn = {}, gu;
function Rp() {
  if (gu) return Sn;
  gu = 1, Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.p2pk = void 0;
  const e = Ht(), t = yt(), n = pt(), r = _r(), o = t.OPS;
  function s(u, i) {
    if (!u.input && !u.output && !u.pubkey && !u.input && !u.signature)
      throw new TypeError("Not enough data");
    i = Object.assign({ validate: !0 }, i || {}), (0, n.typeforce)(
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
        return t.compile([u.pubkey, o.OP_CHECKSIG]);
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
    }), i.validate) {
      if (u.output) {
        if (u.output[u.output.length - 1] !== o.OP_CHECKSIG)
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
  mu = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.isBytes = n, Nt.number = e, Nt.bool = t, Nt.bytes = r, Nt.hash = o, Nt.exists = s, Nt.output = u;
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
  function o(a) {
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
  const i = { number: e, bool: t, bytes: r, hash: o, exists: s, output: u };
  return Nt.default = i, Nt;
}
var yo = {}, In = {}, wu;
function Fp() {
  return wu || (wu = 1, Object.defineProperty(In, "__esModule", { value: !0 }), In.crypto = void 0, In.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0), In;
}
var yu;
function Di() {
  return yu || (yu = 1, function(e) {
    /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Hash = e.nextTick = e.byteSwapIfBE = e.byteSwap = e.isLE = e.rotl = e.rotr = e.createView = e.u32 = e.u8 = void 0, e.isBytes = r, e.byteSwap32 = c, e.bytesToHex = y, e.hexToBytes = E, e.asyncLoop = x, e.utf8ToBytes = w, e.toBytes = T, e.concatBytes = O, e.checkOpts = K, e.wrapConstructor = S, e.wrapConstructorWithOpts = A, e.wrapXOFConstructorWithOpts = _, e.randomBytes = N;
    const t = /* @__PURE__ */ Fp(), n = /* @__PURE__ */ Qc();
    function r(P) {
      return P instanceof Uint8Array || P != null && typeof P == "object" && P.constructor.name === "Uint8Array";
    }
    const o = (P) => new Uint8Array(P.buffer, P.byteOffset, P.byteLength);
    e.u8 = o;
    const s = (P) => new Uint32Array(P.buffer, P.byteOffset, Math.floor(P.byteLength / 4));
    e.u32 = s;
    const u = (P) => new DataView(P.buffer, P.byteOffset, P.byteLength);
    e.createView = u;
    const i = (P, F) => P << 32 - F | P >>> F;
    e.rotr = i;
    const a = (P, F) => P << F | P >>> 32 - F >>> 0;
    e.rotl = a, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    const d = (P) => P << 24 & 4278190080 | P << 8 & 16711680 | P >>> 8 & 65280 | P >>> 24 & 255;
    e.byteSwap = d, e.byteSwapIfBE = e.isLE ? (P) => P : (P) => (0, e.byteSwap)(P);
    function c(P) {
      for (let F = 0; F < P.length; F++)
        P[F] = (0, e.byteSwap)(P[F]);
    }
    const m = /* @__PURE__ */ Array.from({ length: 256 }, (P, F) => F.toString(16).padStart(2, "0"));
    function y(P) {
      (0, n.bytes)(P);
      let F = "";
      for (let j = 0; j < P.length; j++)
        F += m[P[j]];
      return F;
    }
    const f = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
    function b(P) {
      if (P >= f._0 && P <= f._9)
        return P - f._0;
      if (P >= f._A && P <= f._F)
        return P - (f._A - 10);
      if (P >= f._a && P <= f._f)
        return P - (f._a - 10);
    }
    function E(P) {
      if (typeof P != "string")
        throw new Error("hex string expected, got " + typeof P);
      const F = P.length, j = F / 2;
      if (F % 2)
        throw new Error("padded hex string expected, got unpadded hex of length " + F);
      const H = new Uint8Array(j);
      for (let $ = 0, G = 0; $ < j; $++, G += 2) {
        const k = b(P.charCodeAt(G)), M = b(P.charCodeAt(G + 1));
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
    async function x(P, F, j) {
      let H = Date.now();
      for (let $ = 0; $ < P; $++) {
        j($);
        const G = Date.now() - H;
        G >= 0 && G < F || (await (0, e.nextTick)(), H += G);
      }
    }
    function w(P) {
      if (typeof P != "string")
        throw new Error(`utf8ToBytes expected string, got ${typeof P}`);
      return new Uint8Array(new TextEncoder().encode(P));
    }
    function T(P) {
      return typeof P == "string" && (P = w(P)), (0, n.bytes)(P), P;
    }
    function O(...P) {
      let F = 0;
      for (let H = 0; H < P.length; H++) {
        const $ = P[H];
        (0, n.bytes)($), F += $.length;
      }
      const j = new Uint8Array(F);
      for (let H = 0, $ = 0; H < P.length; H++) {
        const G = P[H];
        j.set(G, $), $ += G.length;
      }
      return j;
    }
    class W {
      // Safe version that clones internal state
      clone() {
        return this._cloneInto();
      }
    }
    e.Hash = W;
    const U = {}.toString;
    function K(P, F) {
      if (F !== void 0 && U.call(F) !== "[object Object]")
        throw new Error("Options should be object or undefined");
      return Object.assign(P, F);
    }
    function S(P) {
      const F = (H) => P().update(T(H)).digest(), j = P();
      return F.outputLen = j.outputLen, F.blockLen = j.blockLen, F.create = () => P(), F;
    }
    function A(P) {
      const F = (H, $) => P($).update(T(H)).digest(), j = P({});
      return F.outputLen = j.outputLen, F.blockLen = j.blockLen, F.create = (H) => P(H), F;
    }
    function _(P) {
      const F = (H, $) => P($).update(T(H)).digest(), j = P({});
      return F.outputLen = j.outputLen, F.blockLen = j.blockLen, F.create = (H) => P(H), F;
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
  function n(u, i, a, d) {
    if (typeof u.setBigUint64 == "function")
      return u.setBigUint64(i, a, d);
    const c = BigInt(32), m = BigInt(4294967295), y = Number(a >> c & m), f = Number(a & m), b = d ? 4 : 0, E = d ? 0 : 4;
    u.setUint32(i + b, y, d), u.setUint32(i + E, f, d);
  }
  const r = (u, i, a) => u & i ^ ~u & a;
  rr.Chi = r;
  const o = (u, i, a) => u & i ^ u & a ^ i & a;
  rr.Maj = o;
  class s extends t.Hash {
    constructor(i, a, d, c) {
      super(), this.blockLen = i, this.outputLen = a, this.padOffset = d, this.isLE = c, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(i), this.view = (0, t.createView)(this.buffer);
    }
    update(i) {
      (0, e.exists)(this);
      const { view: a, buffer: d, blockLen: c } = this;
      i = (0, t.toBytes)(i);
      const m = i.length;
      for (let y = 0; y < m; ) {
        const f = Math.min(c - this.pos, m - y);
        if (f === c) {
          const b = (0, t.createView)(i);
          for (; c <= m - y; y += c)
            this.process(b, y);
          continue;
        }
        d.set(i.subarray(y, y + f), this.pos), this.pos += f, y += f, this.pos === c && (this.process(a, 0), this.pos = 0);
      }
      return this.length += i.length, this.roundClean(), this;
    }
    digestInto(i) {
      (0, e.exists)(this), (0, e.output)(i, this), this.finished = !0;
      const { buffer: a, view: d, blockLen: c, isLE: m } = this;
      let { pos: y } = this;
      a[y++] = 128, this.buffer.subarray(y).fill(0), this.padOffset > c - y && (this.process(d, 0), y = 0);
      for (let x = y; x < c; x++)
        a[x] = 0;
      n(d, c - 8, BigInt(this.length * 8), m), this.process(d, 0);
      const f = (0, t.createView)(i), b = this.outputLen;
      if (b % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit");
      const E = b / 4, I = this.get();
      if (E > I.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let x = 0; x < E; x++)
        f.setUint32(4 * x, I[x], m);
    }
    digest() {
      const { buffer: i, outputLen: a } = this;
      this.digestInto(i);
      const d = i.slice(0, a);
      return this.destroy(), d;
    }
    _cloneInto(i) {
      i || (i = new this.constructor()), i.set(...this.get());
      const { blockLen: a, buffer: d, length: c, finished: m, destroyed: y, pos: f } = this;
      return i.length = c, i.pos = f, i.finished = m, i.destroyed = y, c % a && i.buffer.set(d), i;
    }
  }
  return rr.HashMD = s, rr;
}
var Au;
function Np() {
  if (Au) return Ur;
  Au = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.ripemd160 = Ur.RIPEMD160 = void 0;
  const e = /* @__PURE__ */ ds(), t = /* @__PURE__ */ Di(), n = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]), r = /* @__PURE__ */ new Uint8Array(new Array(16).fill(0).map((E, I) => I)), o = /* @__PURE__ */ r.map((E) => (9 * E + 5) % 16);
  let s = [r], u = [o];
  for (let E = 0; E < 4; E++)
    for (let I of [s, u])
      I.push(I[E].map((x) => n[x]));
  const i = /* @__PURE__ */ [
    [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
    [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
    [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
    [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
  ].map((E) => new Uint8Array(E)), a = /* @__PURE__ */ s.map((E, I) => E.map((x) => i[I][x])), d = /* @__PURE__ */ u.map((E, I) => E.map((x) => i[I][x])), c = /* @__PURE__ */ new Uint32Array([
    0,
    1518500249,
    1859775393,
    2400959708,
    2840853838
  ]), m = /* @__PURE__ */ new Uint32Array([
    1352829926,
    1548603684,
    1836072691,
    2053994217,
    0
  ]);
  function y(E, I, x, w) {
    return E === 0 ? I ^ x ^ w : E === 1 ? I & x | ~I & w : E === 2 ? (I | ~x) ^ w : E === 3 ? I & w | x & ~w : I ^ (x | ~w);
  }
  const f = /* @__PURE__ */ new Uint32Array(16);
  class b extends e.HashMD {
    constructor() {
      super(64, 20, 8, !0), this.h0 = 1732584193, this.h1 = -271733879, this.h2 = -1732584194, this.h3 = 271733878, this.h4 = -1009589776;
    }
    get() {
      const { h0: I, h1: x, h2: w, h3: T, h4: O } = this;
      return [I, x, w, T, O];
    }
    set(I, x, w, T, O) {
      this.h0 = I | 0, this.h1 = x | 0, this.h2 = w | 0, this.h3 = T | 0, this.h4 = O | 0;
    }
    process(I, x) {
      for (let P = 0; P < 16; P++, x += 4)
        f[P] = I.getUint32(x, !0);
      let w = this.h0 | 0, T = w, O = this.h1 | 0, W = O, U = this.h2 | 0, K = U, S = this.h3 | 0, A = S, _ = this.h4 | 0, N = _;
      for (let P = 0; P < 5; P++) {
        const F = 4 - P, j = c[P], H = m[P], $ = s[P], G = u[P], k = a[P], M = d[P];
        for (let Y = 0; Y < 16; Y++) {
          const Z = (0, t.rotl)(w + y(P, O, U, S) + f[$[Y]] + j, k[Y]) + _ | 0;
          w = _, _ = S, S = (0, t.rotl)(U, 10) | 0, U = O, O = Z;
        }
        for (let Y = 0; Y < 16; Y++) {
          const Z = (0, t.rotl)(T + y(F, W, K, A) + f[G[Y]] + H, M[Y]) + N | 0;
          T = N, N = A, A = (0, t.rotl)(K, 10) | 0, K = W, W = Z;
        }
      }
      this.set(this.h1 + U + A | 0, this.h2 + S + N | 0, this.h3 + _ + T | 0, this.h4 + w + W | 0, this.h0 + O + K | 0);
    }
    roundClean() {
      f.fill(0);
    }
    destroy() {
      this.destroyed = !0, this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
    }
  }
  return Ur.RIPEMD160 = b, Ur.ripemd160 = (0, t.wrapConstructor)(() => new b()), Ur;
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
  class o extends e.HashMD {
    constructor() {
      super(64, 20, 8, !1), this.A = n[0] | 0, this.B = n[1] | 0, this.C = n[2] | 0, this.D = n[3] | 0, this.E = n[4] | 0;
    }
    get() {
      const { A: u, B: i, C: a, D: d, E: c } = this;
      return [u, i, a, d, c];
    }
    set(u, i, a, d, c) {
      this.A = u | 0, this.B = i | 0, this.C = a | 0, this.D = d | 0, this.E = c | 0;
    }
    process(u, i) {
      for (let f = 0; f < 16; f++, i += 4)
        r[f] = u.getUint32(i, !1);
      for (let f = 16; f < 80; f++)
        r[f] = (0, t.rotl)(r[f - 3] ^ r[f - 8] ^ r[f - 14] ^ r[f - 16], 1);
      let { A: a, B: d, C: c, D: m, E: y } = this;
      for (let f = 0; f < 80; f++) {
        let b, E;
        f < 20 ? (b = (0, e.Chi)(d, c, m), E = 1518500249) : f < 40 ? (b = d ^ c ^ m, E = 1859775393) : f < 60 ? (b = (0, e.Maj)(d, c, m), E = 2400959708) : (b = d ^ c ^ m, E = 3395469782);
        const I = (0, t.rotl)(a, 5) + b + y + E + r[f] | 0;
        y = m, m = c, c = (0, t.rotl)(d, 30), d = a, a = I;
      }
      a = a + this.A | 0, d = d + this.B | 0, c = c + this.C | 0, m = m + this.D | 0, y = y + this.E | 0, this.set(a, d, c, m, y);
    }
    roundClean() {
      r.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0), this.buffer.fill(0);
    }
  }
  return Lr.SHA1 = o, Lr.sha1 = (0, t.wrapConstructor)(() => new o()), Lr;
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
  ]), o = /* @__PURE__ */ new Uint32Array(64);
  class s extends e.HashMD {
    constructor() {
      super(64, 32, 8, !1), this.A = r[0] | 0, this.B = r[1] | 0, this.C = r[2] | 0, this.D = r[3] | 0, this.E = r[4] | 0, this.F = r[5] | 0, this.G = r[6] | 0, this.H = r[7] | 0;
    }
    get() {
      const { A: a, B: d, C: c, D: m, E: y, F: f, G: b, H: E } = this;
      return [a, d, c, m, y, f, b, E];
    }
    // prettier-ignore
    set(a, d, c, m, y, f, b, E) {
      this.A = a | 0, this.B = d | 0, this.C = c | 0, this.D = m | 0, this.E = y | 0, this.F = f | 0, this.G = b | 0, this.H = E | 0;
    }
    process(a, d) {
      for (let w = 0; w < 16; w++, d += 4)
        o[w] = a.getUint32(d, !1);
      for (let w = 16; w < 64; w++) {
        const T = o[w - 15], O = o[w - 2], W = (0, t.rotr)(T, 7) ^ (0, t.rotr)(T, 18) ^ T >>> 3, U = (0, t.rotr)(O, 17) ^ (0, t.rotr)(O, 19) ^ O >>> 10;
        o[w] = U + o[w - 7] + W + o[w - 16] | 0;
      }
      let { A: c, B: m, C: y, D: f, E: b, F: E, G: I, H: x } = this;
      for (let w = 0; w < 64; w++) {
        const T = (0, t.rotr)(b, 6) ^ (0, t.rotr)(b, 11) ^ (0, t.rotr)(b, 25), O = x + T + (0, e.Chi)(b, E, I) + n[w] + o[w] | 0, U = ((0, t.rotr)(c, 2) ^ (0, t.rotr)(c, 13) ^ (0, t.rotr)(c, 22)) + (0, e.Maj)(c, m, y) | 0;
        x = I, I = E, E = b, b = f + O | 0, f = y, y = m, m = c, c = O + U | 0;
      }
      c = c + this.A | 0, m = m + this.B | 0, y = y + this.C | 0, f = f + this.D | 0, b = b + this.E | 0, E = E + this.F | 0, I = I + this.G | 0, x = x + this.H | 0, this.set(c, m, y, f, b, E, I, x);
    }
    roundClean() {
      o.fill(0);
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
    function o(c) {
      return Q.from((0, t.ripemd160)(Uint8Array.from(c)));
    }
    e.ripemd160 = o;
    function s(c) {
      return Q.from((0, n.sha1)(Uint8Array.from(c)));
    }
    e.sha1 = s;
    function u(c) {
      return Q.from((0, r.sha256)(Uint8Array.from(c)));
    }
    e.sha256 = u;
    function i(c) {
      return Q.from(
        (0, t.ripemd160)((0, r.sha256)(Uint8Array.from(c)))
      );
    }
    e.hash160 = i;
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
    function d(c, m) {
      return u(Q.concat([e.TAGGED_HASH_PREFIXES[c], m]));
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
    for (var o = 0; o < t.length; o++) {
      var s = t.charAt(o), u = s.charCodeAt(0);
      if (n[u] !== 255)
        throw new TypeError(s + " is ambiguous");
      n[u] = o;
    }
    var i = t.length, a = t.charAt(0), d = Math.log(i) / Math.log(256), c = Math.log(256) / Math.log(i);
    function m(b) {
      if (b instanceof Uint8Array || (ArrayBuffer.isView(b) ? b = new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : Array.isArray(b) && (b = Uint8Array.from(b))), !(b instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (b.length === 0)
        return "";
      for (var E = 0, I = 0, x = 0, w = b.length; x !== w && b[x] === 0; )
        x++, E++;
      for (var T = (w - x) * c + 1 >>> 0, O = new Uint8Array(T); x !== w; ) {
        for (var W = b[x], U = 0, K = T - 1; (W !== 0 || U < I) && K !== -1; K--, U++)
          W += 256 * O[K] >>> 0, O[K] = W % i >>> 0, W = W / i >>> 0;
        if (W !== 0)
          throw new Error("Non-zero carry");
        I = U, x++;
      }
      for (var S = T - I; S !== T && O[S] === 0; )
        S++;
      for (var A = a.repeat(E); S < T; ++S)
        A += t.charAt(O[S]);
      return A;
    }
    function y(b) {
      if (typeof b != "string")
        throw new TypeError("Expected String");
      if (b.length === 0)
        return new Uint8Array();
      for (var E = 0, I = 0, x = 0; b[E] === a; )
        I++, E++;
      for (var w = (b.length - E) * d + 1 >>> 0, T = new Uint8Array(w); b[E]; ) {
        var O = n[b.charCodeAt(E)];
        if (O === 255)
          return;
        for (var W = 0, U = w - 1; (O !== 0 || W < x) && U !== -1; U--, W++)
          O += i * T[U] >>> 0, T[U] = O % 256 >>> 0, O = O / 256 >>> 0;
        if (O !== 0)
          throw new Error("Non-zero carry");
        x = W, E++;
      }
      for (var K = w - x; K !== w && T[K] === 0; )
        K++;
      for (var S = new Uint8Array(I + (w - K)), A = I; K !== w; )
        S[A++] = T[K++];
      return S;
    }
    function f(b) {
      var E = y(b);
      if (E)
        return E;
      throw new Error("Non-base" + i + " character");
    }
    return {
      encode: m,
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
      var i = Uint8Array.from(u), a = t(i), d = i.length + 4, c = new Uint8Array(d);
      return c.set(i, 0), c.set(a.subarray(0, 4), i.length), e.encode(c, d);
    }
    function r(u) {
      var i = u.slice(0, -4), a = u.slice(-4), d = t(i);
      if (!(a[0] ^ d[0] | a[1] ^ d[1] | a[2] ^ d[2] | a[3] ^ d[3]))
        return i;
    }
    function o(u) {
      var i = e.decodeUnsafe(u);
      if (i)
        return r(i);
    }
    function s(u) {
      var i = e.decode(u), a = r(i);
      if (!a) throw new Error("Invalid checksum");
      return a;
    }
    return {
      encode: n,
      decode: s,
      decodeUnsafe: o
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
  const e = ar(), t = Ht(), n = yt(), r = pt(), o = _r(), s = ps(), u = n.OPS;
  function i(a, d) {
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
    const c = o.value(() => {
      const b = Q.from(s.decode(a.address)), E = b.readUInt8(0), I = b.slice(1);
      return { version: E, hash: I };
    }), m = o.value(() => n.decompile(a.input)), y = a.network || t.bitcoin, f = { name: "p2pkh", network: y };
    if (o.prop(f, "address", () => {
      if (!f.hash) return;
      const b = Q.allocUnsafe(21);
      return b.writeUInt8(y.pubKeyHash, 0), f.hash.copy(b, 1), s.encode(b);
    }), o.prop(f, "hash", () => {
      if (a.output) return a.output.slice(3, 23);
      if (a.address) return c().hash;
      if (a.pubkey || f.pubkey) return e.hash160(a.pubkey || f.pubkey);
    }), o.prop(f, "output", () => {
      if (f.hash)
        return n.compile([
          u.OP_DUP,
          u.OP_HASH160,
          f.hash,
          u.OP_EQUALVERIFY,
          u.OP_CHECKSIG
        ]);
    }), o.prop(f, "pubkey", () => {
      if (a.input)
        return m()[1];
    }), o.prop(f, "signature", () => {
      if (a.input)
        return m()[0];
    }), o.prop(f, "input", () => {
      if (a.pubkey && a.signature)
        return n.compile([a.signature, a.pubkey]);
    }), o.prop(f, "witness", () => {
      if (f.input)
        return [];
    }), d.validate) {
      let b = Q.from([]);
      if (a.address) {
        if (c().version !== y.pubKeyHash)
          throw new TypeError("Invalid version or Network mismatch");
        if (c().hash.length !== 20) throw new TypeError("Invalid address");
        b = c().hash;
      }
      if (a.hash) {
        if (b.length > 0 && !b.equals(a.hash))
          throw new TypeError("Hash mismatch");
        b = a.hash;
      }
      if (a.output) {
        if (a.output.length !== 25 || a.output[0] !== u.OP_DUP || a.output[1] !== u.OP_HASH160 || a.output[2] !== 20 || a.output[23] !== u.OP_EQUALVERIFY || a.output[24] !== u.OP_CHECKSIG)
          throw new TypeError("Output is invalid");
        const E = a.output.slice(3, 23);
        if (b.length > 0 && !b.equals(E))
          throw new TypeError("Hash mismatch");
        b = E;
      }
      if (a.pubkey) {
        const E = e.hash160(a.pubkey);
        if (b.length > 0 && !b.equals(E))
          throw new TypeError("Hash mismatch");
        b = E;
      }
      if (a.input) {
        const E = m();
        if (E.length !== 2) throw new TypeError("Input is invalid");
        if (!n.isCanonicalScriptSignature(E[0]))
          throw new TypeError("Input has invalid signature");
        if (!(0, r.isPoint)(E[1]))
          throw new TypeError("Input has invalid pubkey");
        if (a.signature && !a.signature.equals(E[0]))
          throw new TypeError("Signature mismatch");
        if (a.pubkey && !a.pubkey.equals(E[1]))
          throw new TypeError("Pubkey mismatch");
        const I = e.hash160(E[1]);
        if (b.length > 0 && !b.equals(I))
          throw new TypeError("Hash mismatch");
      }
    }
    return Object.assign(f, a);
  }
  return Tn.p2pkh = i, Tn;
}
var xn = {}, Ou;
function $p() {
  if (Ou) return xn;
  Ou = 1, Object.defineProperty(xn, "__esModule", { value: !0 }), xn.p2sh = void 0;
  const e = ar(), t = Ht(), n = yt(), r = pt(), o = _r(), s = ps(), u = n.OPS;
  function i(a, d) {
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
    const m = { network: c }, y = o.value(() => {
      const E = Q.from(s.decode(a.address)), I = E.readUInt8(0), x = E.slice(1);
      return { version: I, hash: x };
    }), f = o.value(() => n.decompile(a.input)), b = o.value(() => {
      const E = f(), I = E[E.length - 1];
      return {
        network: c,
        output: I === u.OP_FALSE ? Q.from([]) : I,
        input: n.compile(E.slice(0, -1)),
        witness: a.witness || []
      };
    });
    if (o.prop(m, "address", () => {
      if (!m.hash) return;
      const E = Q.allocUnsafe(21);
      return E.writeUInt8(m.network.scriptHash, 0), m.hash.copy(E, 1), s.encode(E);
    }), o.prop(m, "hash", () => {
      if (a.output) return a.output.slice(2, 22);
      if (a.address) return y().hash;
      if (m.redeem && m.redeem.output) return e.hash160(m.redeem.output);
    }), o.prop(m, "output", () => {
      if (m.hash)
        return n.compile([u.OP_HASH160, m.hash, u.OP_EQUAL]);
    }), o.prop(m, "redeem", () => {
      if (a.input)
        return b();
    }), o.prop(m, "input", () => {
      if (!(!a.redeem || !a.redeem.input || !a.redeem.output))
        return n.compile(
          [].concat(n.decompile(a.redeem.input), a.redeem.output)
        );
    }), o.prop(m, "witness", () => {
      if (m.redeem && m.redeem.witness) return m.redeem.witness;
      if (m.input) return [];
    }), o.prop(m, "name", () => {
      const E = ["p2sh"];
      return m.redeem !== void 0 && m.redeem.name !== void 0 && E.push(m.redeem.name), E.join("-");
    }), d.validate) {
      let E = Q.from([]);
      if (a.address) {
        if (y().version !== c.scriptHash)
          throw new TypeError("Invalid version or Network mismatch");
        if (y().hash.length !== 20) throw new TypeError("Invalid address");
        E = y().hash;
      }
      if (a.hash) {
        if (E.length > 0 && !E.equals(a.hash))
          throw new TypeError("Hash mismatch");
        E = a.hash;
      }
      if (a.output) {
        if (a.output.length !== 23 || a.output[0] !== u.OP_HASH160 || a.output[1] !== 20 || a.output[22] !== u.OP_EQUAL)
          throw new TypeError("Output is invalid");
        const x = a.output.slice(2, 22);
        if (E.length > 0 && !E.equals(x))
          throw new TypeError("Hash mismatch");
        E = x;
      }
      const I = (x) => {
        if (x.output) {
          const w = n.decompile(x.output);
          if (!w || w.length < 1)
            throw new TypeError("Redeem.output too short");
          if (x.output.byteLength > 520)
            throw new TypeError(
              "Redeem.output unspendable if larger than 520 bytes"
            );
          if (n.countNonPushOnlyOPs(w) > 201)
            throw new TypeError(
              "Redeem.output unspendable with more than 201 non-push ops"
            );
          const T = e.hash160(x.output);
          if (E.length > 0 && !E.equals(T))
            throw new TypeError("Hash mismatch");
          E = T;
        }
        if (x.input) {
          const w = x.input.length > 0, T = x.witness && x.witness.length > 0;
          if (!w && !T) throw new TypeError("Empty input");
          if (w && T)
            throw new TypeError("Input and witness provided");
          if (w) {
            const O = n.decompile(x.input);
            if (!n.isPushOnly(O))
              throw new TypeError("Non push-only scriptSig");
          }
        }
      };
      if (a.input) {
        const x = f();
        if (!x || x.length < 1) throw new TypeError("Input too short");
        if (!Q.isBuffer(b().output))
          throw new TypeError("Input is invalid");
        I(b());
      }
      if (a.redeem) {
        if (a.redeem.network && a.redeem.network !== c)
          throw new TypeError("Network mismatch");
        if (a.input) {
          const x = b();
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
    return Object.assign(m, a);
  }
  return xn.p2sh = i, xn;
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
    for (let m = 0; m < d.length; ++m) {
      const y = d.charCodeAt(m);
      if (y < 33 || y > 126)
        return "Invalid prefix (" + d + ")";
      c = n(c) ^ y >> 5;
    }
    c = n(c);
    for (let m = 0; m < d.length; ++m) {
      const y = d.charCodeAt(m);
      c = n(c) ^ y & 31;
    }
    return c;
  }
  function o(d, c, m, y) {
    let f = 0, b = 0;
    const E = (1 << m) - 1, I = [];
    for (let x = 0; x < d.length; ++x)
      for (f = f << c | d[x], b += c; b >= m; )
        b -= m, I.push(f >> b & E);
    if (y)
      b > 0 && I.push(f << m - b & E);
    else {
      if (b >= c)
        return "Excess padding";
      if (f << m - b & E)
        return "Non-zero padding";
    }
    return I;
  }
  function s(d) {
    return o(d, 8, 5, !0);
  }
  function u(d) {
    const c = o(d, 5, 8, !1);
    if (Array.isArray(c))
      return c;
  }
  function i(d) {
    const c = o(d, 5, 8, !1);
    if (Array.isArray(c))
      return c;
    throw new Error(c);
  }
  function a(d) {
    let c;
    d === "bech32" ? c = 1 : c = 734539939;
    function m(E, I, x) {
      if (x = x || 90, E.length + 7 + I.length > x)
        throw new TypeError("Exceeds length limit");
      E = E.toLowerCase();
      let w = r(E);
      if (typeof w == "string")
        throw new Error(w);
      let T = E + "1";
      for (let O = 0; O < I.length; ++O) {
        const W = I[O];
        if (W >> 5)
          throw new Error("Non 5-bit word");
        w = n(w) ^ W, T += e.charAt(W);
      }
      for (let O = 0; O < 6; ++O)
        w = n(w);
      w ^= c;
      for (let O = 0; O < 6; ++O) {
        const W = w >> (5 - O) * 5 & 31;
        T += e.charAt(W);
      }
      return T;
    }
    function y(E, I) {
      if (I = I || 90, E.length < 8)
        return E + " too short";
      if (E.length > I)
        return "Exceeds length limit";
      const x = E.toLowerCase(), w = E.toUpperCase();
      if (E !== x && E !== w)
        return "Mixed-case string " + E;
      E = x;
      const T = E.lastIndexOf("1");
      if (T === -1)
        return "No separator character for " + E;
      if (T === 0)
        return "Missing prefix for " + E;
      const O = E.slice(0, T), W = E.slice(T + 1);
      if (W.length < 6)
        return "Data too short";
      let U = r(O);
      if (typeof U == "string")
        return U;
      const K = [];
      for (let S = 0; S < W.length; ++S) {
        const A = W.charAt(S), _ = t[A];
        if (_ === void 0)
          return "Unknown character " + A;
        U = n(U) ^ _, !(S + 6 >= W.length) && K.push(_);
      }
      return U !== c ? "Invalid checksum for " + E : { prefix: O, words: K };
    }
    function f(E, I) {
      const x = y(E, I);
      if (typeof x == "object")
        return x;
    }
    function b(E, I) {
      const x = y(E, I);
      if (typeof x == "object")
        return x;
      throw new Error(x);
    }
    return {
      decodeUnsafe: f,
      decode: b,
      encode: m,
      toWords: s,
      fromWordsUnsafe: u,
      fromWords: i
    };
  }
  return Hr.bech32 = a("bech32"), Hr.bech32m = a("bech32m"), Hr;
}
var ku;
function jp() {
  if (ku) return _n;
  ku = 1, Object.defineProperty(_n, "__esModule", { value: !0 }), _n.p2wpkh = void 0;
  const e = ar(), t = Ht(), n = yt(), r = pt(), o = _r(), s = $i(), u = n.OPS, i = Q.alloc(0);
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
    const m = o.value(() => {
      const b = s.bech32.decode(d.address), E = b.words.shift(), I = s.bech32.fromWords(b.words);
      return {
        version: E,
        prefix: b.prefix,
        data: Q.from(I)
      };
    }), y = d.network || t.bitcoin, f = { name: "p2wpkh", network: y };
    if (o.prop(f, "address", () => {
      if (!f.hash) return;
      const b = s.bech32.toWords(f.hash);
      return b.unshift(0), s.bech32.encode(y.bech32, b);
    }), o.prop(f, "hash", () => {
      if (d.output) return d.output.slice(2, 22);
      if (d.address) return m().data;
      if (d.pubkey || f.pubkey) return e.hash160(d.pubkey || f.pubkey);
    }), o.prop(f, "output", () => {
      if (f.hash)
        return n.compile([u.OP_0, f.hash]);
    }), o.prop(f, "pubkey", () => {
      if (d.pubkey) return d.pubkey;
      if (d.witness)
        return d.witness[1];
    }), o.prop(f, "signature", () => {
      if (d.witness)
        return d.witness[0];
    }), o.prop(f, "input", () => {
      if (f.witness)
        return i;
    }), o.prop(f, "witness", () => {
      if (d.pubkey && d.signature)
        return [d.signature, d.pubkey];
    }), c.validate) {
      let b = Q.from([]);
      if (d.address) {
        if (y && y.bech32 !== m().prefix)
          throw new TypeError("Invalid prefix or Network mismatch");
        if (m().version !== 0)
          throw new TypeError("Invalid address version");
        if (m().data.length !== 20)
          throw new TypeError("Invalid address data");
        b = m().data;
      }
      if (d.hash) {
        if (b.length > 0 && !b.equals(d.hash))
          throw new TypeError("Hash mismatch");
        b = d.hash;
      }
      if (d.output) {
        if (d.output.length !== 22 || d.output[0] !== u.OP_0 || d.output[1] !== 20)
          throw new TypeError("Output is invalid");
        if (b.length > 0 && !b.equals(d.output.slice(2)))
          throw new TypeError("Hash mismatch");
        b = d.output.slice(2);
      }
      if (d.pubkey) {
        const E = e.hash160(d.pubkey);
        if (b.length > 0 && !b.equals(E))
          throw new TypeError("Hash mismatch");
        if (b = E, !(0, r.isPoint)(d.pubkey) || d.pubkey.length !== 33)
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
        const E = e.hash160(d.witness[1]);
        if (b.length > 0 && !b.equals(E))
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
  const e = ar(), t = Ht(), n = yt(), r = pt(), o = _r(), s = $i(), u = n.OPS, i = Q.alloc(0);
  function a(c) {
    return !!(Q.isBuffer(c) && c.length === 65 && c[0] === 4 && (0, r.isPoint)(c));
  }
  function d(c, m) {
    if (!c.address && !c.hash && !c.output && !c.redeem && !c.witness)
      throw new TypeError("Not enough data");
    m = Object.assign({ validate: !0 }, m || {}), (0, r.typeforce)(
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
    const y = o.value(() => {
      const I = s.bech32.decode(c.address), x = I.words.shift(), w = s.bech32.fromWords(I.words);
      return {
        version: x,
        prefix: I.prefix,
        data: Q.from(w)
      };
    }), f = o.value(() => n.decompile(c.redeem.input));
    let b = c.network;
    b || (b = c.redeem && c.redeem.network || t.bitcoin);
    const E = { network: b };
    if (o.prop(E, "address", () => {
      if (!E.hash) return;
      const I = s.bech32.toWords(E.hash);
      return I.unshift(0), s.bech32.encode(b.bech32, I);
    }), o.prop(E, "hash", () => {
      if (c.output) return c.output.slice(2);
      if (c.address) return y().data;
      if (E.redeem && E.redeem.output) return e.sha256(E.redeem.output);
    }), o.prop(E, "output", () => {
      if (E.hash)
        return n.compile([u.OP_0, E.hash]);
    }), o.prop(E, "redeem", () => {
      if (c.witness)
        return {
          output: c.witness[c.witness.length - 1],
          input: i,
          witness: c.witness.slice(0, -1)
        };
    }), o.prop(E, "input", () => {
      if (E.witness)
        return i;
    }), o.prop(E, "witness", () => {
      if (c.redeem && c.redeem.input && c.redeem.input.length > 0 && c.redeem.output && c.redeem.output.length > 0) {
        const I = n.toStack(f());
        return E.redeem = Object.assign({ witness: I }, c.redeem), E.redeem.input = i, [].concat(I, c.redeem.output);
      }
      if (c.redeem && c.redeem.output && c.redeem.witness)
        return [].concat(c.redeem.witness, c.redeem.output);
    }), o.prop(E, "name", () => {
      const I = ["p2wsh"];
      return E.redeem !== void 0 && E.redeem.name !== void 0 && I.push(E.redeem.name), I.join("-");
    }), m.validate) {
      let I = Q.from([]);
      if (c.address) {
        if (y().prefix !== b.bech32)
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
        if (c.redeem.network && c.redeem.network !== b)
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
          const w = e.sha256(c.redeem.output);
          if (I.length > 0 && !I.equals(w))
            throw new TypeError("Hash mismatch");
          I = w;
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
    return Object.assign(E, c);
  }
  return On.p2wsh = d, On;
}
var Cn = {}, Mr = {}, Ru;
function gs() {
  if (Ru) return Mr;
  Ru = 1, Object.defineProperty(Mr, "__esModule", { value: !0 }), Mr.getEccLib = Mr.initEccLib = void 0;
  const e = {};
  function t(i) {
    i ? i !== e.eccLib && (o(i), e.eccLib = i) : e.eccLib = i;
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
  const r = (i) => Q.from(i, "hex");
  function o(i) {
    s(typeof i.isXOnlyPoint == "function"), s(
      i.isXOnlyPoint(
        r("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")
      )
    ), s(
      i.isXOnlyPoint(
        r("fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e")
      )
    ), s(
      i.isXOnlyPoint(
        r("f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9")
      )
    ), s(
      i.isXOnlyPoint(
        r("0000000000000000000000000000000000000000000000000000000000000001")
      )
    ), s(
      !i.isXOnlyPoint(
        r("0000000000000000000000000000000000000000000000000000000000000000")
      )
    ), s(
      !i.isXOnlyPoint(
        r("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")
      )
    ), s(typeof i.xOnlyPointAddTweak == "function"), u.forEach((a) => {
      const d = i.xOnlyPointAddTweak(r(a.pubkey), r(a.tweak));
      a.result === null ? s(d === null) : (s(d !== null), s(d.parity === a.parity), s(Q.from(d.xOnlyPubkey).equals(r(a.result))));
    });
  }
  function s(i) {
    if (!i) throw new Error("ecc library invalid");
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
    function o(u, i) {
      for (var a in u)
        i[a] = u[a];
    }
    r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = s);
    function s(u, i, a) {
      return r(u, i, a);
    }
    s.prototype = Object.create(r.prototype), o(r, s), s.from = function(u, i, a) {
      if (typeof u == "number")
        throw new TypeError("Argument must not be a number");
      return r(u, i, a);
    }, s.alloc = function(u, i, a) {
      if (typeof u != "number")
        throw new TypeError("Argument must be a number");
      var d = r(u);
      return i !== void 0 ? typeof a == "string" ? d.fill(i, a) : d.fill(i) : d.fill(0), d;
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
  function r(u, i, a) {
    if (n(u), i || (i = e.allocUnsafe(s(u))), !e.isBuffer(i)) throw new TypeError("buffer must be a Buffer instance");
    return a || (a = 0), u < 253 ? (i.writeUInt8(u, a), r.bytes = 1) : u <= 65535 ? (i.writeUInt8(253, a), i.writeUInt16LE(u, a + 1), r.bytes = 3) : u <= 4294967295 ? (i.writeUInt8(254, a), i.writeUInt32LE(u, a + 1), r.bytes = 5) : (i.writeUInt8(255, a), i.writeUInt32LE(u >>> 0, a + 1), i.writeUInt32LE(u / 4294967296 | 0, a + 5), r.bytes = 9), i;
  }
  function o(u, i) {
    if (!e.isBuffer(u)) throw new TypeError("buffer must be a Buffer instance");
    i || (i = 0);
    var a = u.readUInt8(i);
    if (a < 253)
      return o.bytes = 1, a;
    if (a === 253)
      return o.bytes = 3, u.readUInt16LE(i + 1);
    if (a === 254)
      return o.bytes = 5, u.readUInt32LE(i + 1);
    o.bytes = 9;
    var d = u.readUInt32LE(i + 1), c = u.readUInt32LE(i + 5), m = c * 4294967296 + d;
    return n(m), m;
  }
  function s(u) {
    return n(u), u < 253 ? 1 : u <= 65535 ? 3 : u <= 4294967295 ? 5 : 9;
  }
  return So = { encode: r, decode: o, encodingLength: s }, So;
}
var Uu;
function ji() {
  if (Uu) return st;
  Uu = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.BufferReader = st.BufferWriter = st.cloneBuffer = st.reverseBuffer = st.writeUInt64LE = st.readUInt64LE = st.varuint = void 0;
  const e = pt(), { typeforce: t } = e, n = qp();
  st.varuint = n;
  function r(c, m) {
    if (typeof c != "number")
      throw new Error("cannot write a non-number as a number");
    if (c < 0)
      throw new Error("specified a negative value for writing an unsigned value");
    if (c > m) throw new Error("RangeError: value out of range");
    if (Math.floor(c) !== c)
      throw new Error("value has a fractional component");
  }
  function o(c, m) {
    const y = c.readUInt32LE(m);
    let f = c.readUInt32LE(m + 4);
    return f *= 4294967296, r(f + y, 9007199254740991), f + y;
  }
  st.readUInt64LE = o;
  function s(c, m, y) {
    return r(m, 9007199254740991), c.writeInt32LE(m & -1, y), c.writeUInt32LE(Math.floor(m / 4294967296), y + 4), y + 8;
  }
  st.writeUInt64LE = s;
  function u(c) {
    if (c.length < 1) return c;
    let m = c.length - 1, y = 0;
    for (let f = 0; f < c.length / 2; f++)
      y = c[f], c[f] = c[m], c[m] = y, m--;
    return c;
  }
  st.reverseBuffer = u;
  function i(c) {
    const m = Q.allocUnsafe(c.length);
    return c.copy(m), m;
  }
  st.cloneBuffer = i;
  class a {
    static withCapacity(m) {
      return new a(Q.alloc(m));
    }
    constructor(m, y = 0) {
      this.buffer = m, this.offset = y, t(e.tuple(e.Buffer, e.UInt32), [m, y]);
    }
    writeUInt8(m) {
      this.offset = this.buffer.writeUInt8(m, this.offset);
    }
    writeInt32(m) {
      this.offset = this.buffer.writeInt32LE(m, this.offset);
    }
    writeUInt32(m) {
      this.offset = this.buffer.writeUInt32LE(m, this.offset);
    }
    writeUInt64(m) {
      this.offset = s(this.buffer, m, this.offset);
    }
    writeVarInt(m) {
      n.encode(m, this.buffer, this.offset), this.offset += n.encode.bytes;
    }
    writeSlice(m) {
      if (this.buffer.length < this.offset + m.length)
        throw new Error("Cannot write slice out of bounds");
      this.offset += m.copy(this.buffer, this.offset);
    }
    writeVarSlice(m) {
      this.writeVarInt(m.length), this.writeSlice(m);
    }
    writeVector(m) {
      this.writeVarInt(m.length), m.forEach((y) => this.writeVarSlice(y));
    }
    end() {
      if (this.buffer.length === this.offset)
        return this.buffer;
      throw new Error(`buffer size ${this.buffer.length}, offset ${this.offset}`);
    }
  }
  st.BufferWriter = a;
  class d {
    constructor(m, y = 0) {
      this.buffer = m, this.offset = y, t(e.tuple(e.Buffer, e.UInt32), [m, y]);
    }
    readUInt8() {
      const m = this.buffer.readUInt8(this.offset);
      return this.offset++, m;
    }
    readInt32() {
      const m = this.buffer.readInt32LE(this.offset);
      return this.offset += 4, m;
    }
    readUInt32() {
      const m = this.buffer.readUInt32LE(this.offset);
      return this.offset += 4, m;
    }
    readUInt64() {
      const m = o(this.buffer, this.offset);
      return this.offset += 8, m;
    }
    readVarInt() {
      const m = n.decode(this.buffer, this.offset);
      return this.offset += n.decode.bytes, m;
    }
    readSlice(m) {
      if (this.buffer.length < this.offset + m)
        throw new Error("Cannot read slice out of bounds");
      const y = this.buffer.slice(this.offset, this.offset + m);
      return this.offset += m, y;
    }
    readVarSlice() {
      return this.readSlice(this.readVarInt());
    }
    readVector() {
      const m = this.readVarInt(), y = [];
      for (let f = 0; f < m; f++) y.push(this.readVarSlice());
      return y;
    }
  }
  return st.BufferReader = d, st;
}
var Lu;
function ms() {
  return Lu || (Lu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.tweakKey = e.tapTweakHash = e.tapleafHash = e.findScriptPath = e.toHashTree = e.rootHashFromPath = e.MAX_TAPTREE_DEPTH = e.LEAF_VERSION_TAPSCRIPT = void 0;
    const t = Mi(), n = gs(), r = ar(), o = ji(), s = pt();
    e.LEAF_VERSION_TAPSCRIPT = 192, e.MAX_TAPTREE_DEPTH = 128;
    const u = (E) => "left" in E && "right" in E;
    function i(E, I) {
      if (E.length < 33)
        throw new TypeError(
          `The control-block length is too small. Got ${E.length}, expected min 33.`
        );
      const x = (E.length - 33) / 32;
      let w = I;
      for (let T = 0; T < x; T++) {
        const O = E.slice(33 + 32 * T, 65 + 32 * T);
        w.compare(O) < 0 ? w = f(w, O) : w = f(O, w);
      }
      return w;
    }
    e.rootHashFromPath = i;
    function a(E) {
      if ((0, s.isTapleaf)(E))
        return { hash: c(E) };
      const I = [a(E[0]), a(E[1])];
      I.sort((T, O) => T.hash.compare(O.hash));
      const [x, w] = I;
      return {
        hash: f(x.hash, w.hash),
        left: x,
        right: w
      };
    }
    e.toHashTree = a;
    function d(E, I) {
      if (u(E)) {
        const x = d(E.left, I);
        if (x !== void 0) return [...x, E.right.hash];
        const w = d(E.right, I);
        if (w !== void 0) return [...w, E.left.hash];
      } else if (E.hash.equals(I))
        return [];
    }
    e.findScriptPath = d;
    function c(E) {
      const I = E.version || e.LEAF_VERSION_TAPSCRIPT;
      return r.taggedHash(
        "TapLeaf",
        t.Buffer.concat([
          t.Buffer.from([I]),
          b(E.output)
        ])
      );
    }
    e.tapleafHash = c;
    function m(E, I) {
      return r.taggedHash(
        "TapTweak",
        t.Buffer.concat(I ? [E, I] : [E])
      );
    }
    e.tapTweakHash = m;
    function y(E, I) {
      if (!t.Buffer.isBuffer(E) || E.length !== 32 || I && I.length !== 32) return null;
      const x = m(E, I), w = (0, n.getEccLib)().xOnlyPointAddTweak(E, x);
      return !w || w.xOnlyPubkey === null ? null : {
        parity: w.parity,
        x: t.Buffer.from(w.xOnlyPubkey)
      };
    }
    e.tweakKey = y;
    function f(E, I) {
      return r.taggedHash("TapBranch", t.Buffer.concat([E, I]));
    }
    function b(E) {
      const I = o.varuint.encodingLength(E.length), x = t.Buffer.allocUnsafe(I);
      return o.varuint.encode(E.length, x), t.Buffer.concat([x, E]);
    }
  }(Po)), Po;
}
var Hu;
function Vp() {
  if (Hu) return Cn;
  Hu = 1, Object.defineProperty(Cn, "__esModule", { value: !0 }), Cn.p2tr = void 0;
  const e = Mi(), t = Ht(), n = yt(), r = pt(), o = gs(), s = ms(), u = _r(), i = $i(), a = ws(), d = n.OPS, c = 1, m = 80;
  function y(f, b) {
    if (!f.address && !f.output && !f.pubkey && !f.internalPubkey && !(f.witness && f.witness.length > 1))
      throw new TypeError("Not enough data");
    b = Object.assign({ validate: !0 }, b || {}), (0, r.typeforce)(
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
    const E = u.value(() => (0, a.fromBech32)(f.address)), I = u.value(() => {
      if (!(!f.witness || !f.witness.length))
        return f.witness.length >= 2 && f.witness[f.witness.length - 1][0] === m ? f.witness.slice(0, -1) : f.witness.slice();
    }), x = u.value(() => {
      if (f.scriptTree) return (0, s.toHashTree)(f.scriptTree);
      if (f.hash) return { hash: f.hash };
    }), w = f.network || t.bitcoin, T = { name: "p2tr", network: w };
    if (u.prop(T, "address", () => {
      if (!T.pubkey) return;
      const O = i.bech32m.toWords(T.pubkey);
      return O.unshift(c), i.bech32m.encode(w.bech32, O);
    }), u.prop(T, "hash", () => {
      const O = x();
      if (O) return O.hash;
      const W = I();
      if (W && W.length > 1) {
        const U = W[W.length - 1], K = U[0] & r.TAPLEAF_VERSION_MASK, S = W[W.length - 2], A = (0, s.tapleafHash)({
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
      const O = I();
      if (!(!O || O.length < 2))
        return {
          output: O[O.length - 2],
          witness: O.slice(0, -2),
          redeemVersion: O[O.length - 1][0] & r.TAPLEAF_VERSION_MASK
        };
    }), u.prop(T, "pubkey", () => {
      if (f.pubkey) return f.pubkey;
      if (f.output) return f.output.slice(2);
      if (f.address) return E().data;
      if (T.internalPubkey) {
        const O = (0, s.tweakKey)(T.internalPubkey, T.hash);
        if (O) return O.x;
      }
    }), u.prop(T, "internalPubkey", () => {
      if (f.internalPubkey) return f.internalPubkey;
      const O = I();
      if (O && O.length > 1)
        return O[O.length - 1].slice(1, 33);
    }), u.prop(T, "signature", () => {
      if (f.signature) return f.signature;
      const O = I();
      if (!(!O || O.length !== 1))
        return O[0];
    }), u.prop(T, "witness", () => {
      if (f.witness) return f.witness;
      const O = x();
      if (O && f.redeem && f.redeem.output && f.internalPubkey) {
        const W = (0, s.tapleafHash)({
          output: f.redeem.output,
          version: T.redeemVersion
        }), U = (0, s.findScriptPath)(O, W);
        if (!U) return;
        const K = (0, s.tweakKey)(f.internalPubkey, O.hash);
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
    }), b.validate) {
      let O = e.Buffer.from([]);
      if (f.address) {
        if (w && w.bech32 !== E().prefix)
          throw new TypeError("Invalid prefix or Network mismatch");
        if (E().version !== c)
          throw new TypeError("Invalid address version");
        if (E().data.length !== 32)
          throw new TypeError("Invalid address data");
        O = E().data;
      }
      if (f.pubkey) {
        if (O.length > 0 && !O.equals(f.pubkey))
          throw new TypeError("Pubkey mismatch");
        O = f.pubkey;
      }
      if (f.output) {
        if (f.output.length !== 34 || f.output[0] !== d.OP_1 || f.output[1] !== 32)
          throw new TypeError("Output is invalid");
        if (O.length > 0 && !O.equals(f.output.slice(2)))
          throw new TypeError("Pubkey mismatch");
        O = f.output.slice(2);
      }
      if (f.internalPubkey) {
        const K = (0, s.tweakKey)(f.internalPubkey, T.hash);
        if (O.length > 0 && !O.equals(K.x))
          throw new TypeError("Pubkey mismatch");
        O = K.x;
      }
      if (O && O.length && !(0, o.getEccLib)().isXOnlyPoint(O))
        throw new TypeError("Invalid pubkey for p2tr");
      const W = x();
      if (f.hash && W && !f.hash.equals(W.hash))
        throw new TypeError("Hash mismatch");
      if (f.redeem && f.redeem.output && W) {
        const K = (0, s.tapleafHash)({
          output: f.redeem.output,
          version: T.redeemVersion
        });
        if (!(0, s.findScriptPath)(W, K))
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
          if (!(0, o.getEccLib)().isXOnlyPoint(A))
            throw new TypeError("Invalid internalPubkey for p2tr witness");
          const _ = K[0] & r.TAPLEAF_VERSION_MASK, N = U[U.length - 2], P = (0, s.tapleafHash)({
            output: N,
            version: _
          }), F = (0, s.rootHashFromPath)(K, P), j = (0, s.tweakKey)(A, F);
          if (!j)
            throw new TypeError("Invalid outputKey for p2tr witness");
          if (O.length && !O.equals(j.x))
            throw new TypeError("Pubkey mismatch for p2tr witness");
          if (j.parity !== (K[0] & 1))
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
    const o = Dp();
    Object.defineProperty(e, "p2pkh", {
      enumerable: !0,
      get: function() {
        return o.p2pkh;
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
    const i = Wp();
    Object.defineProperty(e, "p2wsh", {
      enumerable: !0,
      get: function() {
        return i.p2wsh;
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
  const e = Ht(), t = Qn(), n = yt(), r = pt(), o = $i(), s = ps(), u = 40, i = 2, a = 16, d = 2, c = 80, m = "WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.";
  function y(T, O) {
    const W = T.slice(2);
    if (W.length < i || W.length > u)
      throw new TypeError("Invalid program length for segwit address");
    const U = T[0] - c;
    if (U < d || U > a)
      throw new TypeError("Invalid version for segwit address");
    if (T[1] !== W.length)
      throw new TypeError("Invalid script for segwit address");
    return console.warn(m), I(W, U, O.bech32);
  }
  function f(T) {
    const O = Q.from(s.decode(T));
    if (O.length < 21) throw new TypeError(T + " is too short");
    if (O.length > 21) throw new TypeError(T + " is too long");
    const W = O.readUInt8(0), U = O.slice(1);
    return { version: W, hash: U };
  }
  mt.fromBase58Check = f;
  function b(T) {
    let O, W;
    try {
      O = o.bech32.decode(T);
    } catch {
    }
    if (O) {
      if (W = O.words[0], W !== 0) throw new TypeError(T + " uses wrong encoding");
    } else if (O = o.bech32m.decode(T), W = O.words[0], W === 0) throw new TypeError(T + " uses wrong encoding");
    const U = o.bech32.fromWords(O.words.slice(1));
    return {
      version: W,
      prefix: O.prefix,
      data: Q.from(U)
    };
  }
  mt.fromBech32 = b;
  function E(T, O) {
    (0, r.typeforce)(
      (0, r.tuple)(r.Hash160bit, r.UInt8),
      arguments
    );
    const W = Q.allocUnsafe(21);
    return W.writeUInt8(O, 0), T.copy(W, 1), s.encode(W);
  }
  mt.toBase58Check = E;
  function I(T, O, W) {
    const U = o.bech32.toWords(T);
    return U.unshift(O), O === 0 ? o.bech32.encode(W, U) : o.bech32m.encode(W, U);
  }
  mt.toBech32 = I;
  function x(T, O) {
    O = O || e.bitcoin;
    try {
      return t.p2pkh({ output: T, network: O }).address;
    } catch {
    }
    try {
      return t.p2sh({ output: T, network: O }).address;
    } catch {
    }
    try {
      return t.p2wpkh({ output: T, network: O }).address;
    } catch {
    }
    try {
      return t.p2wsh({ output: T, network: O }).address;
    } catch {
    }
    try {
      return t.p2tr({ output: T, network: O }).address;
    } catch {
    }
    try {
      return y(T, O);
    } catch {
    }
    throw new Error(n.toASM(T) + " has no matching Address");
  }
  mt.fromOutputScript = x;
  function w(T, O) {
    O = O || e.bitcoin;
    let W, U;
    try {
      W = f(T);
    } catch {
    }
    if (W) {
      if (W.version === O.pubKeyHash)
        return t.p2pkh({ hash: W.hash }).output;
      if (W.version === O.scriptHash)
        return t.p2sh({ hash: W.hash }).output;
    } else {
      try {
        U = b(T);
      } catch {
      }
      if (U) {
        if (U.prefix !== O.bech32)
          throw new Error(T + " has an invalid prefix");
        if (U.version === 0) {
          if (U.data.length === 20)
            return t.p2wpkh({ hash: U.data }).output;
          if (U.data.length === 32)
            return t.p2wsh({ hash: U.data }).output;
        } else if (U.version === 1) {
          if (U.data.length === 32)
            return t.p2tr({ pubkey: U.data }).output;
        } else if (U.version >= d && U.version <= a && U.data.length >= i && U.data.length <= u)
          return console.warn(m), n.compile([
            U.version + c,
            U.data
          ]);
      }
    }
    throw new Error(T + " has no matching Script");
  }
  return mt.toOutputScript = w, mt;
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
    const o = t.concat();
    for (; r > 1; ) {
      let s = 0;
      for (let u = 0; u < r; u += 2, ++s) {
        const i = o[u], a = u + 1 === r ? i : o[u + 1], d = Q.concat([i, a]);
        o[s] = n(d);
      }
      r = s;
    }
    return o[0];
  }
  return Bn.fastMerkleRoot = e, Bn;
}
var Rn = {}, ju;
function Jn() {
  if (ju) return Rn;
  ju = 1, Object.defineProperty(Rn, "__esModule", { value: !0 }), Rn.Transaction = void 0;
  const e = ji(), t = ar(), n = yt(), r = yt(), o = pt(), { typeforce: s } = o;
  function u(I) {
    const x = I.length;
    return e.varuint.encodingLength(x) + x;
  }
  function i(I) {
    const x = I.length;
    return e.varuint.encodingLength(x) + I.reduce((w, T) => w + u(T), 0);
  }
  const a = Q.allocUnsafe(0), d = [], c = Q.from(
    "0000000000000000000000000000000000000000000000000000000000000000",
    "hex"
  ), m = Q.from(
    "0000000000000000000000000000000000000000000000000000000000000001",
    "hex"
  ), y = Q.from("ffffffffffffffff", "hex"), f = {
    script: a,
    valueBuffer: y
  };
  function b(I) {
    return I.value !== void 0;
  }
  class E {
    constructor() {
      this.version = 1, this.locktime = 0, this.ins = [], this.outs = [];
    }
    static fromBuffer(x, w) {
      const T = new e.BufferReader(x), O = new E();
      O.version = T.readInt32();
      const W = T.readUInt8(), U = T.readUInt8();
      let K = !1;
      W === E.ADVANCED_TRANSACTION_MARKER && U === E.ADVANCED_TRANSACTION_FLAG ? K = !0 : T.offset -= 2;
      const S = T.readVarInt();
      for (let _ = 0; _ < S; ++_)
        O.ins.push({
          hash: T.readSlice(32),
          index: T.readUInt32(),
          script: T.readVarSlice(),
          sequence: T.readUInt32(),
          witness: d
        });
      const A = T.readVarInt();
      for (let _ = 0; _ < A; ++_)
        O.outs.push({
          value: T.readUInt64(),
          script: T.readVarSlice()
        });
      if (K) {
        for (let _ = 0; _ < S; ++_)
          O.ins[_].witness = T.readVector();
        if (!O.hasWitnesses())
          throw new Error("Transaction has superfluous witness data");
      }
      if (O.locktime = T.readUInt32(), w) return O;
      if (T.offset !== x.length)
        throw new Error("Transaction has unexpected data");
      return O;
    }
    static fromHex(x) {
      return E.fromBuffer(Q.from(x, "hex"), !1);
    }
    static isCoinbaseHash(x) {
      s(o.Hash256bit, x);
      for (let w = 0; w < 32; ++w)
        if (x[w] !== 0) return !1;
      return !0;
    }
    isCoinbase() {
      return this.ins.length === 1 && E.isCoinbaseHash(this.ins[0].hash);
    }
    addInput(x, w, T, O) {
      return s(
        o.tuple(
          o.Hash256bit,
          o.UInt32,
          o.maybe(o.UInt32),
          o.maybe(o.Buffer)
        ),
        arguments
      ), o.Null(T) && (T = E.DEFAULT_SEQUENCE), this.ins.push({
        hash: x,
        index: w,
        script: O || a,
        sequence: T,
        witness: d
      }) - 1;
    }
    addOutput(x, w) {
      return s(o.tuple(o.Buffer, o.Satoshi), arguments), this.outs.push({
        script: x,
        value: w
      }) - 1;
    }
    hasWitnesses() {
      return this.ins.some((x) => x.witness.length !== 0);
    }
    weight() {
      const x = this.byteLength(!1), w = this.byteLength(!0);
      return x * 3 + w;
    }
    virtualSize() {
      return Math.ceil(this.weight() / 4);
    }
    byteLength(x = !0) {
      const w = x && this.hasWitnesses();
      return (w ? 10 : 8) + e.varuint.encodingLength(this.ins.length) + e.varuint.encodingLength(this.outs.length) + this.ins.reduce((T, O) => T + 40 + u(O.script), 0) + this.outs.reduce((T, O) => T + 8 + u(O.script), 0) + (w ? this.ins.reduce((T, O) => T + i(O.witness), 0) : 0);
    }
    clone() {
      const x = new E();
      return x.version = this.version, x.locktime = this.locktime, x.ins = this.ins.map((w) => ({
        hash: w.hash,
        index: w.index,
        script: w.script,
        sequence: w.sequence,
        witness: w.witness
      })), x.outs = this.outs.map((w) => ({
        script: w.script,
        value: w.value
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
    hashForSignature(x, w, T) {
      if (s(
        o.tuple(
          o.UInt32,
          o.Buffer,
          /* types.UInt8 */
          o.Number
        ),
        arguments
      ), x >= this.ins.length) return m;
      const O = n.compile(
        n.decompile(w).filter((K) => K !== r.OPS.OP_CODESEPARATOR)
      ), W = this.clone();
      if ((T & 31) === E.SIGHASH_NONE)
        W.outs = [], W.ins.forEach((K, S) => {
          S !== x && (K.sequence = 0);
        });
      else if ((T & 31) === E.SIGHASH_SINGLE) {
        if (x >= this.outs.length) return m;
        W.outs.length = x + 1;
        for (let K = 0; K < x; K++)
          W.outs[K] = f;
        W.ins.forEach((K, S) => {
          S !== x && (K.sequence = 0);
        });
      }
      T & E.SIGHASH_ANYONECANPAY ? (W.ins = [W.ins[x]], W.ins[0].script = O) : (W.ins.forEach((K) => {
        K.script = a;
      }), W.ins[x].script = O);
      const U = Q.allocUnsafe(W.byteLength(!1) + 4);
      return U.writeInt32LE(T, U.length - 4), W.__toBuffer(U, 0, !1), t.hash256(U);
    }
    hashForWitnessV1(x, w, T, O, W, U) {
      if (s(
        o.tuple(
          o.UInt32,
          s.arrayOf(o.Buffer),
          s.arrayOf(o.Satoshi),
          o.UInt32
        ),
        arguments
      ), T.length !== this.ins.length || w.length !== this.ins.length)
        throw new Error("Must supply prevout script and value for all inputs");
      const K = O === E.SIGHASH_DEFAULT ? E.SIGHASH_ALL : O & E.SIGHASH_OUTPUT_MASK, A = (O & E.SIGHASH_INPUT_MASK) === E.SIGHASH_ANYONECANPAY, _ = K === E.SIGHASH_NONE, N = K === E.SIGHASH_SINGLE;
      let P = a, F = a, j = a, H = a, $ = a;
      if (!A) {
        let Y = e.BufferWriter.withCapacity(
          36 * this.ins.length
        );
        this.ins.forEach((Z) => {
          Y.writeSlice(Z.hash), Y.writeUInt32(Z.index);
        }), P = t.sha256(Y.end()), Y = e.BufferWriter.withCapacity(
          8 * this.ins.length
        ), T.forEach((Z) => Y.writeUInt64(Z)), F = t.sha256(Y.end()), Y = e.BufferWriter.withCapacity(
          w.map(u).reduce((Z, ne) => Z + ne)
        ), w.forEach(
          (Z) => Y.writeVarSlice(Z)
        ), j = t.sha256(Y.end()), Y = e.BufferWriter.withCapacity(
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
      const G = (W ? 2 : 0) + (U ? 1 : 0), k = 174 - (A ? 49 : 0) - (_ ? 32 : 0) + (U ? 32 : 0) + (W ? 37 : 0), M = e.BufferWriter.withCapacity(k);
      if (M.writeUInt8(O), M.writeInt32(this.version), M.writeUInt32(this.locktime), M.writeSlice(P), M.writeSlice(F), M.writeSlice(j), M.writeSlice(H), _ || N || M.writeSlice($), M.writeUInt8(G), A) {
        const Y = this.ins[x];
        M.writeSlice(Y.hash), M.writeUInt32(Y.index), M.writeUInt64(T[x]), M.writeVarSlice(w[x]), M.writeUInt32(Y.sequence);
      } else
        M.writeUInt32(x);
      if (U) {
        const Y = e.BufferWriter.withCapacity(
          u(U)
        );
        Y.writeVarSlice(U), M.writeSlice(t.sha256(Y.end()));
      }
      return N && M.writeSlice($), W && (M.writeSlice(W), M.writeUInt8(0), M.writeUInt32(4294967295)), t.taggedHash(
        "TapSighash",
        Q.concat([Q.from([0]), M.end()])
      );
    }
    hashForWitnessV0(x, w, T, O) {
      s(
        o.tuple(o.UInt32, o.Buffer, o.Satoshi, o.UInt32),
        arguments
      );
      let W = Q.from([]), U, K = c, S = c, A = c;
      if (O & E.SIGHASH_ANYONECANPAY || (W = Q.allocUnsafe(36 * this.ins.length), U = new e.BufferWriter(W, 0), this.ins.forEach((N) => {
        U.writeSlice(N.hash), U.writeUInt32(N.index);
      }), S = t.hash256(W)), !(O & E.SIGHASH_ANYONECANPAY) && (O & 31) !== E.SIGHASH_SINGLE && (O & 31) !== E.SIGHASH_NONE && (W = Q.allocUnsafe(4 * this.ins.length), U = new e.BufferWriter(W, 0), this.ins.forEach((N) => {
        U.writeUInt32(N.sequence);
      }), A = t.hash256(W)), (O & 31) !== E.SIGHASH_SINGLE && (O & 31) !== E.SIGHASH_NONE) {
        const N = this.outs.reduce((P, F) => P + 8 + u(F.script), 0);
        W = Q.allocUnsafe(N), U = new e.BufferWriter(W, 0), this.outs.forEach((P) => {
          U.writeUInt64(P.value), U.writeVarSlice(P.script);
        }), K = t.hash256(W);
      } else if ((O & 31) === E.SIGHASH_SINGLE && x < this.outs.length) {
        const N = this.outs[x];
        W = Q.allocUnsafe(8 + u(N.script)), U = new e.BufferWriter(W, 0), U.writeUInt64(N.value), U.writeVarSlice(N.script), K = t.hash256(W);
      }
      W = Q.allocUnsafe(156 + u(w)), U = new e.BufferWriter(W, 0);
      const _ = this.ins[x];
      return U.writeInt32(this.version), U.writeSlice(S), U.writeSlice(A), U.writeSlice(_.hash), U.writeUInt32(_.index), U.writeVarSlice(w), U.writeUInt64(T), U.writeUInt32(_.sequence), U.writeSlice(K), U.writeUInt32(this.locktime), U.writeUInt32(O), t.hash256(W);
    }
    getHash(x) {
      return x && this.isCoinbase() ? Q.alloc(32, 0) : t.hash256(this.__toBuffer(void 0, void 0, x));
    }
    getId() {
      return (0, e.reverseBuffer)(this.getHash(!1)).toString(
        "hex"
      );
    }
    toBuffer(x, w) {
      return this.__toBuffer(x, w, !0);
    }
    toHex() {
      return this.toBuffer(void 0, void 0).toString("hex");
    }
    setInputScript(x, w) {
      s(o.tuple(o.Number, o.Buffer), arguments), this.ins[x].script = w;
    }
    setWitness(x, w) {
      s(o.tuple(o.Number, [o.Buffer]), arguments), this.ins[x].witness = w;
    }
    __toBuffer(x, w, T = !1) {
      x || (x = Q.allocUnsafe(this.byteLength(T)));
      const O = new e.BufferWriter(
        x,
        w || 0
      );
      O.writeInt32(this.version);
      const W = T && this.hasWitnesses();
      return W && (O.writeUInt8(E.ADVANCED_TRANSACTION_MARKER), O.writeUInt8(E.ADVANCED_TRANSACTION_FLAG)), O.writeVarInt(this.ins.length), this.ins.forEach((U) => {
        O.writeSlice(U.hash), O.writeUInt32(U.index), O.writeVarSlice(U.script), O.writeUInt32(U.sequence);
      }), O.writeVarInt(this.outs.length), this.outs.forEach((U) => {
        b(U) ? O.writeUInt64(U.value) : O.writeSlice(U.valueBuffer), O.writeVarSlice(U.script);
      }), W && this.ins.forEach((U) => {
        O.writeVector(U.witness);
      }), O.writeUInt32(this.locktime), w !== void 0 ? x.slice(w, O.offset) : x;
    }
  }
  return Rn.Transaction = E, E.DEFAULT_SEQUENCE = 4294967295, E.SIGHASH_DEFAULT = 0, E.SIGHASH_ALL = 1, E.SIGHASH_NONE = 2, E.SIGHASH_SINGLE = 3, E.SIGHASH_ANYONECANPAY = 128, E.SIGHASH_OUTPUT_MASK = 3, E.SIGHASH_INPUT_MASK = 128, E.ADVANCED_TRANSACTION_MARKER = 0, E.ADVANCED_TRANSACTION_FLAG = 1, Rn;
}
var Wu;
function Xp() {
  if (Wu) return kn;
  Wu = 1, Object.defineProperty(kn, "__esModule", { value: !0 }), kn.Block = void 0;
  const e = ji(), t = ar(), n = Gp(), r = Jn(), o = pt(), { typeforce: s } = o, u = new TypeError(
    "Cannot compute merkle root for zero transactions"
  ), i = new TypeError(
    "Cannot compute witness commit for non-segwit block"
  );
  class a {
    constructor() {
      this.version = 1, this.prevHash = void 0, this.merkleRoot = void 0, this.timestamp = 0, this.witnessCommit = void 0, this.bits = 0, this.nonce = 0, this.transactions = void 0;
    }
    static fromBuffer(y) {
      if (y.length < 80) throw new Error("Buffer too small (< 80 bytes)");
      const f = new e.BufferReader(y), b = new a();
      if (b.version = f.readInt32(), b.prevHash = f.readSlice(32), b.merkleRoot = f.readSlice(32), b.timestamp = f.readUInt32(), b.bits = f.readUInt32(), b.nonce = f.readUInt32(), y.length === 80) return b;
      const E = () => {
        const w = r.Transaction.fromBuffer(
          f.buffer.slice(f.offset),
          !0
        );
        return f.offset += w.byteLength(), w;
      }, I = f.readVarInt();
      b.transactions = [];
      for (let w = 0; w < I; ++w) {
        const T = E();
        b.transactions.push(T);
      }
      const x = b.getWitnessCommit();
      return x && (b.witnessCommit = x), b;
    }
    static fromHex(y) {
      return a.fromBuffer(Q.from(y, "hex"));
    }
    static calculateTarget(y) {
      const f = ((y & 4278190080) >> 24) - 3, b = y & 8388607, E = Q.alloc(32, 0);
      return E.writeUIntBE(b, 29 - f, 3), E;
    }
    static calculateMerkleRoot(y, f) {
      if (s([{ getHash: o.Function }], y), y.length === 0) throw u;
      if (f && !d(y))
        throw i;
      const b = y.map(
        (I) => I.getHash(f)
      ), E = (0, n.fastMerkleRoot)(b, t.hash256);
      return f ? t.hash256(
        Q.concat([E, y[0].ins[0].witness[0]])
      ) : E;
    }
    getWitnessCommit() {
      if (!d(this.transactions)) return null;
      const y = this.transactions[0].outs.filter(
        (b) => b.script.slice(0, 6).equals(Q.from("6a24aa21a9ed", "hex"))
      ).map((b) => b.script.slice(6, 38));
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
      return y || !this.transactions ? 80 : 80 + e.varuint.encodingLength(this.transactions.length) + this.transactions.reduce((b, E) => b + E.byteLength(f), 0);
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
      const f = Q.allocUnsafe(this.byteLength(y)), b = new e.BufferWriter(f);
      return b.writeInt32(this.version), b.writeSlice(this.prevHash), b.writeSlice(this.merkleRoot), b.writeUInt32(this.timestamp), b.writeUInt32(this.bits), b.writeUInt32(this.nonce), y || !this.transactions || (e.varuint.encode(
        this.transactions.length,
        f,
        b.offset
      ), b.offset += e.varuint.encode.bytes, this.transactions.forEach((E) => {
        const I = E.byteLength();
        E.toBuffer(f, b.offset), b.offset += I;
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
      if (!this.hasWitnessCommit()) throw i;
      const y = a.calculateMerkleRoot(
        this.transactions,
        !0
      );
      return this.witnessCommit.compare(y) === 0;
    }
  }
  kn.Block = a;
  function d(m) {
    return m instanceof Array && m[0] && m[0].ins && m[0].ins instanceof Array && m[0].ins[0] && m[0].ins[0].witness && m[0].ins[0].witness instanceof Array && m[0].ins[0].witness.length > 0;
  }
  function c(m) {
    return m instanceof Array && m.some(
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
    const i = u.key.slice(1), a = {
      masterFingerprint: u.value.slice(0, 4),
      extendedPubkey: i,
      path: "m"
    };
    for (const d of t(u.value.length / 4 - 1)) {
      const c = u.value.readUInt32LE(d * 4 + 4), m = !!(c & 2147483648), y = c & 2147483647;
      a.path += "/" + y.toString(10) + (m ? "'" : "");
    }
    return a;
  }
  fr.decode = n;
  function r(u) {
    const i = Q.from([e.GlobalTypes.GLOBAL_XPUB]), a = Q.concat([i, u.extendedPubkey]), d = u.path.split("/"), c = Q.allocUnsafe(d.length * 4);
    u.masterFingerprint.copy(c, 0);
    let m = 4;
    return d.slice(1).forEach((y) => {
      const f = y.slice(-1) === "'";
      let b = 2147483647 & parseInt(f ? y.slice(0, -1) : y, 10);
      f && (b += 2147483648), c.writeUInt32LE(b, m), m += 4;
    }), {
      key: a,
      value: c
    };
  }
  fr.encode = r, fr.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }";
  function o(u) {
    const i = u.extendedPubkey, a = u.masterFingerprint, d = u.path;
    return Q.isBuffer(i) && i.length === 78 && [2, 3].indexOf(i[45]) > -1 && Q.isBuffer(a) && a.length === 4 && typeof d == "string" && !!d.match(/^m(\/\d+'?)*$/);
  }
  fr.check = o;
  function s(u, i, a) {
    const d = i.extendedPubkey.toString("hex");
    return a.has(d) ? !1 : (a.add(d), u.filter((c) => c.extendedPubkey.equals(i.extendedPubkey)).length === 0);
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
  function o(s, u) {
    return !!s && !!u && s.finalScriptSig === void 0;
  }
  return hr.canAdd = o, hr;
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
  function o(s, u) {
    return !!s && !!u && s.finalScriptWitness === void 0;
  }
  return dr.canAdd = o, dr;
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
  function o(s, u) {
    return !!s && !!u && s.nonWitnessUtxo === void 0;
  }
  return pr.canAdd = o, pr;
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
    const i = Q.from([e.InputTypes.PARTIAL_SIG]);
    return {
      key: Q.concat([i, u.pubkey]),
      value: u.signature
    };
  }
  gr.encode = n, gr.expected = "{ pubkey: Buffer; signature: Buffer; }";
  function r(u) {
    return Q.isBuffer(u.pubkey) && Q.isBuffer(u.signature) && [33, 65].includes(u.pubkey.length) && [2, 3, 4].includes(u.pubkey[0]) && o(u.signature);
  }
  gr.check = r;
  function o(u) {
    if (!Q.isBuffer(u) || u.length < 9 || u[0] !== 48 || u.length !== u[1] + 3 || u[2] !== 2) return !1;
    const i = u[3];
    if (i > 33 || i < 1 || u[3 + i + 1] !== 2) return !1;
    const a = u[3 + i + 2];
    return !(a > 33 || a < 1 || u.length !== 3 + i + 2 + a + 2);
  }
  function s(u, i, a) {
    const d = i.pubkey.toString("hex");
    return a.has(d) ? !1 : (a.add(d), u.filter((c) => c.pubkey.equals(i.pubkey)).length === 0);
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
  function o(s, u) {
    return !!s && !!u && s.porCommitment === void 0;
  }
  return mr.canAdd = o, mr;
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
    const u = Q.from([e.InputTypes.SIGHASH_TYPE]), i = Q.allocUnsafe(4);
    return i.writeUInt32LE(s, 0), {
      key: u,
      value: i
    };
  }
  wr.encode = n, wr.expected = "number";
  function r(s) {
    return typeof s == "number";
  }
  wr.check = r;
  function o(s, u) {
    return !!s && !!u && s.sighashType === void 0;
  }
  return wr.canAdd = o, wr;
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
  function o(s, u) {
    return !!s && !!u && s.tapKeySig === void 0;
  }
  return yr.canAdd = o, yr;
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
    const i = s.value.slice(0, -1);
    return { controlBlock: s.key.slice(1), script: i, leafVersion: u };
  }
  Er.decode = t;
  function n(s) {
    const u = Q.from([e.InputTypes.TAP_LEAF_SCRIPT]), i = Q.from([s.leafVersion]);
    return {
      key: Q.concat([u, s.controlBlock]),
      value: Q.concat([s.script, i])
    };
  }
  Er.encode = n, Er.expected = "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }";
  function r(s) {
    return Q.isBuffer(s.controlBlock) && (s.controlBlock.length - 1) % 32 === 0 && (s.controlBlock[0] & 254) === s.leafVersion && Q.isBuffer(s.script);
  }
  Er.check = r;
  function o(s, u, i) {
    const a = u.controlBlock.toString("hex");
    return i.has(a) ? !1 : (i.add(a), s.filter((d) => d.controlBlock.equals(u.controlBlock)).length === 0);
  }
  return Er.canAddToArray = o, Er;
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
  function o(s, u) {
    return !!s && !!u && s.tapMerkleRoot === void 0;
  }
  return Ar.canAdd = o, Ar;
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
    const u = s.key.slice(1, 33), i = s.key.slice(33);
    return {
      pubkey: u,
      leafHash: i,
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
  function o(s, u, i) {
    const a = u.pubkey.toString("hex") + u.leafHash.toString("hex");
    return i.has(a) ? !1 : (i.add(a), s.filter(
      (d) => d.pubkey.equals(u.pubkey) && d.leafHash.equals(u.leafHash)
    ).length === 0);
  }
  return br.canAddToArray = o, br;
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
  function n(s, u, i) {
    if (t(s), u || (u = Q.allocUnsafe(o(s))), !Q.isBuffer(u))
      throw new TypeError("buffer must be a Buffer instance");
    return i || (i = 0), s < 253 ? (u.writeUInt8(s, i), Object.assign(n, { bytes: 1 })) : s <= 65535 ? (u.writeUInt8(253, i), u.writeUInt16LE(s, i + 1), Object.assign(n, { bytes: 3 })) : s <= 4294967295 ? (u.writeUInt8(254, i), u.writeUInt32LE(s, i + 1), Object.assign(n, { bytes: 5 })) : (u.writeUInt8(255, i), u.writeUInt32LE(s >>> 0, i + 1), u.writeUInt32LE(s / 4294967296 | 0, i + 5), Object.assign(n, { bytes: 9 })), u;
  }
  un.encode = n;
  function r(s, u) {
    if (!Q.isBuffer(s))
      throw new TypeError("buffer must be a Buffer instance");
    u || (u = 0);
    const i = s.readUInt8(u);
    if (i < 253)
      return Object.assign(r, { bytes: 1 }), i;
    if (i === 253)
      return Object.assign(r, { bytes: 3 }), s.readUInt16LE(u + 1);
    if (i === 254)
      return Object.assign(r, { bytes: 5 }), s.readUInt32LE(u + 1);
    {
      Object.assign(r, { bytes: 9 });
      const a = s.readUInt32LE(u + 1), c = s.readUInt32LE(u + 5) * 4294967296 + a;
      return t(c), c;
    }
  }
  un.decode = r;
  function o(s) {
    return t(s), s < 253 ? 1 : s <= 65535 ? 3 : s <= 4294967295 ? 5 : 9;
  }
  return un.encodingLength = o, un;
}
var ia;
function ys() {
  if (ia) return ir;
  ia = 1, Object.defineProperty(ir, "__esModule", { value: !0 });
  const e = Jr();
  ir.range = (i) => [...Array(i).keys()];
  function t(i) {
    if (i.length < 1) return i;
    let a = i.length - 1, d = 0;
    for (let c = 0; c < i.length / 2; c++)
      d = i[c], i[c] = i[a], i[a] = d, a--;
    return i;
  }
  ir.reverseBuffer = t;
  function n(i) {
    const a = i.map(r);
    return a.push(Q.from([0])), Q.concat(a);
  }
  ir.keyValsToBuffer = n;
  function r(i) {
    const a = i.key.length, d = i.value.length, c = e.encodingLength(a), m = e.encodingLength(d), y = Q.allocUnsafe(
      c + a + m + d
    );
    return e.encode(a, y, 0), i.key.copy(y, c), e.encode(d, y, c + a), i.value.copy(y, c + a + m), y;
  }
  ir.keyValToBuffer = r;
  function o(i, a) {
    if (typeof i != "number")
      throw new Error("cannot write a non-number as a number");
    if (i < 0)
      throw new Error("specified a negative value for writing an unsigned value");
    if (i > a) throw new Error("RangeError: value out of range");
    if (Math.floor(i) !== i)
      throw new Error("value has a fractional component");
  }
  function s(i, a) {
    const d = i.readUInt32LE(a);
    let c = i.readUInt32LE(a + 4);
    return c *= 4294967296, o(c + d, 9007199254740991), c + d;
  }
  ir.readUInt64LE = s;
  function u(i, a, d) {
    return o(a, 9007199254740991), i.writeInt32LE(a & -1, d), i.writeUInt32LE(Math.floor(a / 4294967296), d + 4), d + 8;
  }
  return ir.writeUInt64LE = u, ir;
}
var oa;
function u2() {
  if (oa) return vr;
  oa = 1, Object.defineProperty(vr, "__esModule", { value: !0 });
  const e = at(), t = ys(), n = Jr();
  function r(i) {
    if (i.key[0] !== e.InputTypes.WITNESS_UTXO)
      throw new Error(
        "Decode Error: could not decode witnessUtxo with key 0x" + i.key.toString("hex")
      );
    const a = t.readUInt64LE(i.value, 0);
    let d = 8;
    const c = n.decode(i.value, d);
    d += n.encodingLength(c);
    const m = i.value.slice(d);
    if (m.length !== c)
      throw new Error("Decode Error: WITNESS_UTXO script is not proper length");
    return {
      script: m,
      value: a
    };
  }
  vr.decode = r;
  function o(i) {
    const { script: a, value: d } = i, c = n.encodingLength(a.length), m = Q.allocUnsafe(8 + c + a.length);
    return t.writeUInt64LE(m, d, 0), n.encode(a.length, m, 8), a.copy(m, 8 + c), {
      key: Q.from([e.InputTypes.WITNESS_UTXO]),
      value: m
    };
  }
  vr.encode = o, vr.expected = "{ script: Buffer; value: number; }";
  function s(i) {
    return Q.isBuffer(i.script) && typeof i.value == "number";
  }
  vr.check = s;
  function u(i, a) {
    return !!i && !!a && i.witnessUtxo === void 0;
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
    let i = 0;
    const a = [];
    for (; i < u.value.length; ) {
      const d = u.value[i++], c = u.value[i++], m = t.decode(u.value, i);
      i += t.encodingLength(m), a.push({
        depth: d,
        leafVersion: c,
        script: u.value.slice(i, i + m)
      }), i += m;
    }
    return { leaves: a };
  }
  Pr.decode = n;
  function r(u) {
    const i = Q.from([e.OutputTypes.TAP_TREE]), a = [].concat(
      ...u.leaves.map((d) => [
        Q.of(d.depth, d.leafVersion),
        t.encode(d.script.length),
        d.script
      ])
    );
    return {
      key: i,
      value: Q.concat(a)
    };
  }
  Pr.encode = r, Pr.expected = "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }";
  function o(u) {
    return Array.isArray(u.leaves) && u.leaves.every(
      (i) => i.depth >= 0 && i.depth <= 128 && (i.leafVersion & 254) === i.leafVersion && Q.isBuffer(i.script)
    );
  }
  Pr.check = o;
  function s(u, i) {
    return !!u && !!i && u.tapTree === void 0;
  }
  return Pr.canAdd = s, Pr;
}
var ci = {}, ua;
function Zc() {
  if (ua) return ci;
  ua = 1, Object.defineProperty(ci, "__esModule", { value: !0 });
  const e = (r) => [...Array(r).keys()], t = (r) => r.length === 33 && [2, 3].includes(r[0]) || r.length === 65 && r[0] === 4;
  function n(r, o = t) {
    function s(c) {
      if (c.key[0] !== r)
        throw new Error(
          "Decode Error: could not decode bip32Derivation with key 0x" + c.key.toString("hex")
        );
      const m = c.key.slice(1);
      if (!o(m))
        throw new Error(
          "Decode Error: bip32Derivation has invalid pubkey in key 0x" + c.key.toString("hex")
        );
      if (c.value.length / 4 % 1 !== 0)
        throw new Error(
          "Decode Error: Input BIP32_DERIVATION value length should be multiple of 4"
        );
      const y = {
        masterFingerprint: c.value.slice(0, 4),
        pubkey: m,
        path: "m"
      };
      for (const f of e(c.value.length / 4 - 1)) {
        const b = c.value.readUInt32LE(f * 4 + 4), E = !!(b & 2147483648), I = b & 2147483647;
        y.path += "/" + I.toString(10) + (E ? "'" : "");
      }
      return y;
    }
    function u(c) {
      const m = Q.from([r]), y = Q.concat([m, c.pubkey]), f = c.path.split("/"), b = Q.allocUnsafe(f.length * 4);
      c.masterFingerprint.copy(b, 0);
      let E = 4;
      return f.slice(1).forEach((I) => {
        const x = I.slice(-1) === "'";
        let w = 2147483647 & parseInt(x ? I.slice(0, -1) : I, 10);
        x && (w += 2147483648), b.writeUInt32LE(w, E), E += 4;
      }), {
        key: y,
        value: b
      };
    }
    const i = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
    function a(c) {
      return Q.isBuffer(c.pubkey) && Q.isBuffer(c.masterFingerprint) && typeof c.path == "string" && o(c.pubkey) && c.masterFingerprint.length === 4;
    }
    function d(c, m, y) {
      const f = m.pubkey.toString("hex");
      return y.has(f) ? !1 : (y.add(f), c.filter((b) => b.pubkey.equals(m.pubkey)).length === 0);
    }
    return {
      decode: s,
      encode: u,
      check: a,
      expected: i,
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
      let o;
      if (t.includes(r.key[0]) && (o = r.key.slice(1), !(o.length === 33 || o.length === 65) || ![2, 3, 4].includes(o[0])))
        throw new Error(
          "Format Error: invalid pubkey in key 0x" + r.key.toString("hex")
        );
      return o;
    }
  }
  return li.makeChecker = e, li;
}
var fi = {}, ca;
function l2() {
  if (ca) return fi;
  ca = 1, Object.defineProperty(fi, "__esModule", { value: !0 });
  function e(t) {
    function n(i) {
      if (i.key[0] !== t)
        throw new Error(
          "Decode Error: could not decode redeemScript with key 0x" + i.key.toString("hex")
        );
      return i.value;
    }
    function r(i) {
      return {
        key: Q.from([t]),
        value: i
      };
    }
    const o = "Buffer";
    function s(i) {
      return Q.isBuffer(i);
    }
    function u(i, a) {
      return !!i && !!a && i.redeemScript === void 0;
    }
    return {
      decode: n,
      encode: r,
      check: s,
      expected: o,
      canAdd: u
    };
  }
  return fi.makeConverter = e, fi;
}
var hi = {}, la;
function f2() {
  if (la) return hi;
  la = 1, Object.defineProperty(hi, "__esModule", { value: !0 });
  const e = Jr(), t = Zc(), n = (o) => o.length === 32;
  function r(o) {
    const s = t.makeConverter(o, n);
    function u(c) {
      const m = e.decode(c.value), y = e.encodingLength(m), f = s.decode({
        key: c.key,
        value: c.value.slice(y + m * 32)
      }), b = new Array(m);
      for (let E = 0, I = y; E < m; E++, I += 32)
        b[E] = c.value.slice(I, I + 32);
      return Object.assign({}, f, { leafHashes: b });
    }
    function i(c) {
      const m = s.encode(c), y = e.encodingLength(c.leafHashes.length), f = Q.allocUnsafe(y);
      e.encode(c.leafHashes.length, f);
      const b = Q.concat([f, ...c.leafHashes, m.value]);
      return Object.assign({}, m, { value: b });
    }
    const a = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
    function d(c) {
      return Array.isArray(c.leafHashes) && c.leafHashes.every(
        (m) => Q.isBuffer(m) && m.length === 32
      ) && s.check(c);
    }
    return {
      decode: u,
      encode: i,
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
    function n(i) {
      if (i.key[0] !== t || i.key.length !== 1)
        throw new Error(
          "Decode Error: could not decode tapInternalKey with key 0x" + i.key.toString("hex")
        );
      if (i.value.length !== 32)
        throw new Error(
          "Decode Error: tapInternalKey not a 32-byte x-only pubkey"
        );
      return i.value;
    }
    function r(i) {
      return { key: Q.from([t]), value: i };
    }
    const o = "Buffer";
    function s(i) {
      return Q.isBuffer(i) && i.length === 32;
    }
    function u(i, a) {
      return !!i && !!a && i.tapInternalKey === void 0;
    }
    return {
      decode: n,
      encode: r,
      check: s,
      expected: o,
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
    function n(i) {
      if (i.key[0] !== t)
        throw new Error(
          "Decode Error: could not decode witnessScript with key 0x" + i.key.toString("hex")
        );
      return i.value;
    }
    function r(i) {
      return {
        key: Q.from([t]),
        value: i
      };
    }
    const o = "Buffer";
    function s(i) {
      return Q.isBuffer(i);
    }
    function u(i, a) {
      return !!i && !!a && i.witnessScript === void 0;
    }
    return {
      decode: n,
      encode: r,
      check: s,
      expected: o,
      canAdd: u
    };
  }
  return pi.makeConverter = e, pi;
}
var da;
function Es() {
  if (da) return sn;
  da = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = at(), t = Yp(), n = zp(), r = Qp(), o = Jp(), s = Zp(), u = e2(), i = t2(), a = r2(), d = n2(), c = i2(), m = o2(), y = s2(), f = u2(), b = a2(), E = Zc(), I = c2(), x = l2(), w = f2(), T = h2(), O = d2(), W = {
    unsignedTx: n,
    globalXpub: t,
    // pass an Array of key bytes that require pubkey beside the key
    checkPubkey: I.makeChecker([])
  };
  sn.globals = W;
  const U = {
    nonWitnessUtxo: s,
    partialSig: u,
    sighashType: a,
    finalScriptSig: r,
    finalScriptWitness: o,
    porCommitment: i,
    witnessUtxo: f,
    bip32Derivation: E.makeConverter(
      e.InputTypes.BIP32_DERIVATION
    ),
    redeemScript: x.makeConverter(
      e.InputTypes.REDEEM_SCRIPT
    ),
    witnessScript: O.makeConverter(
      e.InputTypes.WITNESS_SCRIPT
    ),
    checkPubkey: I.makeChecker([
      e.InputTypes.PARTIAL_SIG,
      e.InputTypes.BIP32_DERIVATION
    ]),
    tapKeySig: d,
    tapScriptSig: y,
    tapLeafScript: c,
    tapBip32Derivation: w.makeConverter(
      e.InputTypes.TAP_BIP32_DERIVATION
    ),
    tapInternalKey: T.makeConverter(
      e.InputTypes.TAP_INTERNAL_KEY
    ),
    tapMerkleRoot: m
  };
  sn.inputs = U;
  const K = {
    bip32Derivation: E.makeConverter(
      e.OutputTypes.BIP32_DERIVATION
    ),
    redeemScript: x.makeConverter(
      e.OutputTypes.REDEEM_SCRIPT
    ),
    witnessScript: O.makeConverter(
      e.OutputTypes.WITNESS_SCRIPT
    ),
    checkPubkey: I.makeChecker([
      e.OutputTypes.BIP32_DERIVATION
    ]),
    tapBip32Derivation: w.makeConverter(
      e.OutputTypes.TAP_BIP32_DERIVATION
    ),
    tapTree: b,
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
  function o(i, a) {
    let d = 0;
    function c() {
      const K = n.decode(i, d);
      d += n.encodingLength(K);
      const S = i.slice(d, d + K);
      return d += K, S;
    }
    function m() {
      const K = i.readUInt32BE(d);
      return d += 4, K;
    }
    function y() {
      const K = i.readUInt8(d);
      return d += 1, K;
    }
    function f() {
      const K = c(), S = c();
      return {
        key: K,
        value: S
      };
    }
    function b() {
      if (d >= i.length)
        throw new Error("Format Error: Unexpected End of PSBT");
      const K = i.readUInt8(d) === 0;
      return K && d++, K;
    }
    if (m() !== 1886610036)
      throw new Error("Format Error: Invalid Magic Number");
    if (y() !== 255)
      throw new Error(
        "Format Error: Magic Number must be followed by 0xff separator"
      );
    const E = [], I = {};
    for (; !b(); ) {
      const K = f(), S = K.key.toString("hex");
      if (I[S])
        throw new Error(
          "Format Error: Keys must be unique for global keymap: key " + S
        );
      I[S] = 1, E.push(K);
    }
    const x = E.filter(
      (K) => K.key[0] === r.GlobalTypes.UNSIGNED_TX
    );
    if (x.length !== 1)
      throw new Error("Format Error: Only one UNSIGNED_TX allowed");
    const w = a(x[0].value), { inputCount: T, outputCount: O } = w.getInputOutputCounts(), W = [], U = [];
    for (const K of t.range(T)) {
      const S = {}, A = [];
      for (; !b(); ) {
        const _ = f(), N = _.key.toString("hex");
        if (S[N])
          throw new Error(
            "Format Error: Keys must be unique for each input: input index " + K + " key " + N
          );
        S[N] = 1, A.push(_);
      }
      W.push(A);
    }
    for (const K of t.range(O)) {
      const S = {}, A = [];
      for (; !b(); ) {
        const _ = f(), N = _.key.toString("hex");
        if (S[N])
          throw new Error(
            "Format Error: Keys must be unique for each output: output index " + K + " key " + N
          );
        S[N] = 1, A.push(_);
      }
      U.push(A);
    }
    return u(w, {
      globalMapKeyVals: E,
      inputKeyVals: W,
      outputKeyVals: U
    });
  }
  on.psbtFromBuffer = o;
  function s(i, a, d) {
    if (!a.equals(Q.from([d])))
      throw new Error(
        `Format Error: Invalid ${i} key: ${a.toString("hex")}`
      );
  }
  on.checkKeyBuffer = s;
  function u(i, { globalMapKeyVals: a, inputKeyVals: d, outputKeyVals: c }) {
    const m = {
      unsignedTx: i
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
          m.globalXpub === void 0 && (m.globalXpub = []), m.globalXpub.push(e.globals.globalXpub.decode(x));
          break;
        default:
          m.unknownKeyVals || (m.unknownKeyVals = []), m.unknownKeyVals.push(x);
      }
    const f = d.length, b = c.length, E = [], I = [];
    for (const x of t.range(f)) {
      const w = {};
      for (const T of d[x])
        switch (e.inputs.checkPubkey(T), T.key[0]) {
          case r.InputTypes.NON_WITNESS_UTXO:
            if (s(
              "input",
              T.key,
              r.InputTypes.NON_WITNESS_UTXO
            ), w.nonWitnessUtxo !== void 0)
              throw new Error(
                "Format Error: Input has multiple NON_WITNESS_UTXO"
              );
            w.nonWitnessUtxo = e.inputs.nonWitnessUtxo.decode(T);
            break;
          case r.InputTypes.WITNESS_UTXO:
            if (s(
              "input",
              T.key,
              r.InputTypes.WITNESS_UTXO
            ), w.witnessUtxo !== void 0)
              throw new Error("Format Error: Input has multiple WITNESS_UTXO");
            w.witnessUtxo = e.inputs.witnessUtxo.decode(T);
            break;
          case r.InputTypes.PARTIAL_SIG:
            w.partialSig === void 0 && (w.partialSig = []), w.partialSig.push(e.inputs.partialSig.decode(T));
            break;
          case r.InputTypes.SIGHASH_TYPE:
            if (s(
              "input",
              T.key,
              r.InputTypes.SIGHASH_TYPE
            ), w.sighashType !== void 0)
              throw new Error("Format Error: Input has multiple SIGHASH_TYPE");
            w.sighashType = e.inputs.sighashType.decode(T);
            break;
          case r.InputTypes.REDEEM_SCRIPT:
            if (s(
              "input",
              T.key,
              r.InputTypes.REDEEM_SCRIPT
            ), w.redeemScript !== void 0)
              throw new Error("Format Error: Input has multiple REDEEM_SCRIPT");
            w.redeemScript = e.inputs.redeemScript.decode(T);
            break;
          case r.InputTypes.WITNESS_SCRIPT:
            if (s(
              "input",
              T.key,
              r.InputTypes.WITNESS_SCRIPT
            ), w.witnessScript !== void 0)
              throw new Error("Format Error: Input has multiple WITNESS_SCRIPT");
            w.witnessScript = e.inputs.witnessScript.decode(T);
            break;
          case r.InputTypes.BIP32_DERIVATION:
            w.bip32Derivation === void 0 && (w.bip32Derivation = []), w.bip32Derivation.push(
              e.inputs.bip32Derivation.decode(T)
            );
            break;
          case r.InputTypes.FINAL_SCRIPTSIG:
            s(
              "input",
              T.key,
              r.InputTypes.FINAL_SCRIPTSIG
            ), w.finalScriptSig = e.inputs.finalScriptSig.decode(T);
            break;
          case r.InputTypes.FINAL_SCRIPTWITNESS:
            s(
              "input",
              T.key,
              r.InputTypes.FINAL_SCRIPTWITNESS
            ), w.finalScriptWitness = e.inputs.finalScriptWitness.decode(
              T
            );
            break;
          case r.InputTypes.POR_COMMITMENT:
            s(
              "input",
              T.key,
              r.InputTypes.POR_COMMITMENT
            ), w.porCommitment = e.inputs.porCommitment.decode(T);
            break;
          case r.InputTypes.TAP_KEY_SIG:
            s(
              "input",
              T.key,
              r.InputTypes.TAP_KEY_SIG
            ), w.tapKeySig = e.inputs.tapKeySig.decode(T);
            break;
          case r.InputTypes.TAP_SCRIPT_SIG:
            w.tapScriptSig === void 0 && (w.tapScriptSig = []), w.tapScriptSig.push(e.inputs.tapScriptSig.decode(T));
            break;
          case r.InputTypes.TAP_LEAF_SCRIPT:
            w.tapLeafScript === void 0 && (w.tapLeafScript = []), w.tapLeafScript.push(e.inputs.tapLeafScript.decode(T));
            break;
          case r.InputTypes.TAP_BIP32_DERIVATION:
            w.tapBip32Derivation === void 0 && (w.tapBip32Derivation = []), w.tapBip32Derivation.push(
              e.inputs.tapBip32Derivation.decode(T)
            );
            break;
          case r.InputTypes.TAP_INTERNAL_KEY:
            s(
              "input",
              T.key,
              r.InputTypes.TAP_INTERNAL_KEY
            ), w.tapInternalKey = e.inputs.tapInternalKey.decode(T);
            break;
          case r.InputTypes.TAP_MERKLE_ROOT:
            s(
              "input",
              T.key,
              r.InputTypes.TAP_MERKLE_ROOT
            ), w.tapMerkleRoot = e.inputs.tapMerkleRoot.decode(T);
            break;
          default:
            w.unknownKeyVals || (w.unknownKeyVals = []), w.unknownKeyVals.push(T);
        }
      E.push(w);
    }
    for (const x of t.range(b)) {
      const w = {};
      for (const T of c[x])
        switch (e.outputs.checkPubkey(T), T.key[0]) {
          case r.OutputTypes.REDEEM_SCRIPT:
            if (s(
              "output",
              T.key,
              r.OutputTypes.REDEEM_SCRIPT
            ), w.redeemScript !== void 0)
              throw new Error("Format Error: Output has multiple REDEEM_SCRIPT");
            w.redeemScript = e.outputs.redeemScript.decode(T);
            break;
          case r.OutputTypes.WITNESS_SCRIPT:
            if (s(
              "output",
              T.key,
              r.OutputTypes.WITNESS_SCRIPT
            ), w.witnessScript !== void 0)
              throw new Error("Format Error: Output has multiple WITNESS_SCRIPT");
            w.witnessScript = e.outputs.witnessScript.decode(T);
            break;
          case r.OutputTypes.BIP32_DERIVATION:
            w.bip32Derivation === void 0 && (w.bip32Derivation = []), w.bip32Derivation.push(
              e.outputs.bip32Derivation.decode(T)
            );
            break;
          case r.OutputTypes.TAP_INTERNAL_KEY:
            s(
              "output",
              T.key,
              r.OutputTypes.TAP_INTERNAL_KEY
            ), w.tapInternalKey = e.outputs.tapInternalKey.decode(T);
            break;
          case r.OutputTypes.TAP_TREE:
            s(
              "output",
              T.key,
              r.OutputTypes.TAP_TREE
            ), w.tapTree = e.outputs.tapTree.decode(T);
            break;
          case r.OutputTypes.TAP_BIP32_DERIVATION:
            w.tapBip32Derivation === void 0 && (w.tapBip32Derivation = []), w.tapBip32Derivation.push(
              e.outputs.tapBip32Derivation.decode(T)
            );
            break;
          default:
            w.unknownKeyVals || (w.unknownKeyVals = []), w.unknownKeyVals.push(T);
        }
      I.push(w);
    }
    return { globalMap: m, inputs: E, outputs: I };
  }
  return on.psbtFromKeyVals = u, on;
}
var Nn = {}, ga;
function g2() {
  if (ga) return Nn;
  ga = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = Es(), t = ys();
  function n({ globalMap: u, inputs: i, outputs: a }) {
    const { globalKeyVals: d, inputKeyVals: c, outputKeyVals: m } = s({
      globalMap: u,
      inputs: i,
      outputs: a
    }), y = t.keyValsToBuffer(d), f = (x) => x.length === 0 ? [Q.from([0])] : x.map(t.keyValsToBuffer), b = f(c), E = f(m), I = Q.allocUnsafe(5);
    return I.writeUIntBE(482972169471, 0, 5), Q.concat(
      [I, y].concat(b, E)
    );
  }
  Nn.psbtToBuffer = n;
  const r = (u, i) => u.key.compare(i.key);
  function o(u, i) {
    const a = /* @__PURE__ */ new Set(), d = Object.entries(u).reduce((m, [y, f]) => {
      if (y === "unknownKeyVals") return m;
      const b = i[y];
      if (b === void 0) return m;
      const E = (Array.isArray(f) ? f : [f]).map(
        b.encode
      );
      return E.map((x) => x.key.toString("hex")).forEach((x) => {
        if (a.has(x))
          throw new Error("Serialize Error: Duplicate key: " + x);
        a.add(x);
      }), m.concat(E);
    }, []), c = u.unknownKeyVals ? u.unknownKeyVals.filter((m) => !a.has(m.key.toString("hex"))) : [];
    return d.concat(c).sort(r);
  }
  function s({ globalMap: u, inputs: i, outputs: a }) {
    return {
      globalKeyVals: o(u, e.globals),
      inputKeyVals: i.map((d) => o(d, e.inputs)),
      outputKeyVals: a.map((d) => o(d, e.outputs))
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
    const u = s[0], i = e.psbtToKeyVals(u), a = s.slice(1);
    if (a.length === 0) throw new Error("Combine: Nothing to combine");
    const d = r(u);
    if (d === void 0)
      throw new Error("Combine: Self missing transaction");
    const c = o(i.globalKeyVals), m = i.inputKeyVals.map(o), y = i.outputKeyVals.map(o);
    for (const f of a) {
      const b = r(f);
      if (b === void 0 || !b.toBuffer().equals(d.toBuffer()))
        throw new Error(
          "Combine: One of the Psbts does not have the same transaction."
        );
      const E = e.psbtToKeyVals(f);
      o(E.globalKeyVals).forEach(
        n(
          c,
          i.globalKeyVals,
          E.globalKeyVals
        )
      ), E.inputKeyVals.map(o).forEach(
        (T, O) => T.forEach(
          n(
            m[O],
            i.inputKeyVals[O],
            E.inputKeyVals[O]
          )
        )
      ), E.outputKeyVals.map(o).forEach(
        (T, O) => T.forEach(
          n(
            y[O],
            i.outputKeyVals[O],
            E.outputKeyVals[O]
          )
        )
      );
    }
    return e.psbtFromKeyVals(d, {
      globalMapKeyVals: i.globalKeyVals,
      inputKeyVals: i.inputKeyVals,
      outputKeyVals: i.outputKeyVals
    });
  }
  ui.combine = t;
  function n(s, u, i) {
    return (a) => {
      if (s.has(a)) return;
      const d = i.filter((c) => c.key.toString("hex") === a)[0];
      u.push(d), s.add(a);
    };
  }
  function r(s) {
    return s.globalMap.unsignedTx;
  }
  function o(s) {
    const u = /* @__PURE__ */ new Set();
    return s.forEach((i) => {
      const a = i.key.toString("hex");
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
    function n(f, b) {
      const E = f[b];
      if (E === void 0) throw new Error(`No input #${b}`);
      return E;
    }
    e.checkForInput = n;
    function r(f, b) {
      const E = f[b];
      if (E === void 0) throw new Error(`No output #${b}`);
      return E;
    }
    e.checkForOutput = r;
    function o(f, b, E) {
      if (f.key[0] < E)
        throw new Error(
          "Use the method for your specific key instead of addUnknownKeyVal*"
        );
      if (b && b.filter((I) => I.key.equals(f.key)).length !== 0)
        throw new Error(`Duplicate Key: ${f.key.toString("hex")}`);
    }
    e.checkHasKey = o;
    function s(f) {
      let b = 0;
      return Object.keys(f).forEach((E) => {
        Number(isNaN(Number(E))) && b++;
      }), b;
    }
    e.getEnumLength = s;
    function u(f, b) {
      let E = !1;
      if (b.nonWitnessUtxo || b.witnessUtxo) {
        const I = !!b.redeemScript, x = !!b.witnessScript, w = !I || !!b.finalScriptSig, T = !x || !!b.finalScriptWitness, O = !!b.finalScriptSig || !!b.finalScriptWitness;
        E = w && T && O;
      }
      if (E === !1)
        throw new Error(
          `Input #${f} has too much or too little data to clean`
        );
    }
    e.inputCheckUncleanFinalized = u;
    function i(f, b, E, I) {
      throw new Error(
        `Data for ${f} key ${b} is incorrect: Expected ${E} and got ${JSON.stringify(I)}`
      );
    }
    function a(f) {
      return (b, E) => {
        for (const I of Object.keys(b)) {
          const x = b[I], { canAdd: w, canAddToArray: T, check: O, expected: W } = (
            // @ts-ignore
            t[f + "s"][I] || {}
          ), U = !!T;
          if (O)
            if (U) {
              if (!Array.isArray(x) || // @ts-ignore
              E[I] && !Array.isArray(E[I]))
                throw new Error(`Key type ${I} must be an array`);
              x.every(O) || i(f, I, W, x);
              const K = E[I] || [], S = /* @__PURE__ */ new Set();
              if (!x.every((A) => T(K, A, S)))
                throw new Error("Can not add duplicate data to array");
              E[I] = K.concat(x);
            } else {
              if (O(x) || i(f, I, W, x), !w(E, x))
                throw new Error(`Can not add duplicate data to ${f}`);
              E[I] = x;
            }
        }
      };
    }
    e.updateGlobal = a("global"), e.updateInput = a("input"), e.updateOutput = a("output");
    function d(f, b) {
      const E = f.length - 1, I = n(f, E);
      e.updateInput(b, I);
    }
    e.addInputAttributes = d;
    function c(f, b) {
      const E = f.length - 1, I = r(f, E);
      e.updateOutput(b, I);
    }
    e.addOutputAttributes = c;
    function m(f, b) {
      if (!Q.isBuffer(b) || b.length < 4)
        throw new Error("Set Version: Invalid Transaction");
      return b.writeUInt32LE(f, 0), b;
    }
    e.defaultVersionSetter = m;
    function y(f, b) {
      if (!Q.isBuffer(b) || b.length < 4)
        throw new Error("Set Locktime: Invalid Transaction");
      return b.writeUInt32LE(f, b.length - 4), b;
    }
    e.defaultLocktimeSetter = y;
  }(xo)), xo;
}
var Ea;
function w2() {
  if (Ea) return si;
  Ea = 1, Object.defineProperty(si, "__esModule", { value: !0 });
  const e = m2(), t = el(), n = at(), r = tl();
  class o {
    constructor(u) {
      this.inputs = [], this.outputs = [], this.globalMap = {
        unsignedTx: u
      };
    }
    static fromBase64(u, i) {
      const a = Q.from(u, "base64");
      return this.fromBuffer(a, i);
    }
    static fromHex(u, i) {
      const a = Q.from(u, "hex");
      return this.fromBuffer(a, i);
    }
    static fromBuffer(u, i) {
      const a = t.psbtFromBuffer(u, i), d = new this(a.globalMap.unsignedTx);
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
    updateInput(u, i) {
      const a = r.checkForInput(this.inputs, u);
      return r.updateInput(i, a), this;
    }
    updateOutput(u, i) {
      const a = r.checkForOutput(this.outputs, u);
      return r.updateOutput(i, a), this;
    }
    addUnknownKeyValToGlobal(u) {
      return r.checkHasKey(
        u,
        this.globalMap.unknownKeyVals,
        r.getEnumLength(n.GlobalTypes)
      ), this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []), this.globalMap.unknownKeyVals.push(u), this;
    }
    addUnknownKeyValToInput(u, i) {
      const a = r.checkForInput(this.inputs, u);
      return r.checkHasKey(
        i,
        a.unknownKeyVals,
        r.getEnumLength(n.InputTypes)
      ), a.unknownKeyVals || (a.unknownKeyVals = []), a.unknownKeyVals.push(i), this;
    }
    addUnknownKeyValToOutput(u, i) {
      const a = r.checkForOutput(this.outputs, u);
      return r.checkHasKey(
        i,
        a.unknownKeyVals,
        r.getEnumLength(n.OutputTypes)
      ), a.unknownKeyVals || (a.unknownKeyVals = []), a.unknownKeyVals.push(i), this;
    }
    addInput(u) {
      this.globalMap.unsignedTx.addInput(u), this.inputs.push({
        unknownKeyVals: []
      });
      const i = u.unknownKeyVals || [], a = this.inputs.length - 1;
      if (!Array.isArray(i))
        throw new Error("unknownKeyVals must be an Array");
      return i.forEach(
        (d) => this.addUnknownKeyValToInput(a, d)
      ), r.addInputAttributes(this.inputs, u), this;
    }
    addOutput(u) {
      this.globalMap.unsignedTx.addOutput(u), this.outputs.push({
        unknownKeyVals: []
      });
      const i = u.unknownKeyVals || [], a = this.outputs.length - 1;
      if (!Array.isArray(i))
        throw new Error("unknownKeyVals must be an Array");
      return i.forEach(
        (d) => this.addUnknownKeyValToOutput(a, d)
      ), r.addOutputAttributes(this.outputs, u), this;
    }
    clearFinalizedInput(u) {
      const i = r.checkForInput(this.inputs, u);
      r.inputCheckUncleanFinalized(u, i);
      for (const a of Object.keys(i))
        [
          "witnessUtxo",
          "nonWitnessUtxo",
          "finalScriptSig",
          "finalScriptWitness",
          "unknownKeyVals"
        ].includes(a) || delete i[a];
      return this;
    }
    combine(...u) {
      const i = e.combine([this].concat(u));
      return Object.assign(this, i), this;
    }
    getTransaction() {
      return this.globalMap.unsignedTx.toBuffer();
    }
  }
  return si.Psbt = o, si;
}
var He = {}, Fe = {}, Aa;
function Ko() {
  if (Aa) return Fe;
  Aa = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.signatureBlocksAction = Fe.checkInputForSig = Fe.pubkeyInScript = Fe.pubkeyPositionInScript = Fe.witnessStackToScriptWitness = Fe.isP2TR = Fe.isP2SHScript = Fe.isP2WSHScript = Fe.isP2WPKH = Fe.isP2PKH = Fe.isP2PK = Fe.isP2MS = void 0;
  const e = Jr(), t = yt(), n = Jn(), r = ar(), o = Qn();
  function s(f) {
    return (b) => {
      try {
        return f({ output: b }), !0;
      } catch {
        return !1;
      }
    };
  }
  Fe.isP2MS = s(o.p2ms), Fe.isP2PK = s(o.p2pk), Fe.isP2PKH = s(o.p2pkh), Fe.isP2WPKH = s(o.p2wpkh), Fe.isP2WSHScript = s(o.p2wsh), Fe.isP2SHScript = s(o.p2sh), Fe.isP2TR = s(o.p2tr);
  function u(f) {
    let b = Q.allocUnsafe(0);
    function E(T) {
      b = Q.concat([b, Q.from(T)]);
    }
    function I(T) {
      const O = b.length, W = e.encodingLength(T);
      b = Q.concat([b, Q.allocUnsafe(W)]), e.encode(T, b, O);
    }
    function x(T) {
      I(T.length), E(T);
    }
    function w(T) {
      I(T.length), T.forEach(x);
    }
    return w(f), b;
  }
  Fe.witnessStackToScriptWitness = u;
  function i(f, b) {
    const E = (0, r.hash160)(f), I = f.slice(1, 33), x = t.decompile(b);
    if (x === null) throw new Error("Unknown script error");
    return x.findIndex((w) => typeof w == "number" ? !1 : w.equals(f) || w.equals(E) || w.equals(I));
  }
  Fe.pubkeyPositionInScript = i;
  function a(f, b) {
    return i(f, b) !== -1;
  }
  Fe.pubkeyInScript = a;
  function d(f, b) {
    return m(f).some(
      (I) => c(I, t.signature.decode, b)
    );
  }
  Fe.checkInputForSig = d;
  function c(f, b, E) {
    const { hashType: I } = b(f), x = [];
    switch (I & n.Transaction.SIGHASH_ANYONECANPAY && x.push("addInput"), I & 31) {
      case n.Transaction.SIGHASH_ALL:
        break;
      case n.Transaction.SIGHASH_SINGLE:
      case n.Transaction.SIGHASH_NONE:
        x.push("addOutput"), x.push("setInputSequence");
        break;
    }
    return x.indexOf(E) === -1;
  }
  Fe.signatureBlocksAction = c;
  function m(f) {
    let b = [];
    if ((f.partialSig || []).length === 0) {
      if (!f.finalScriptSig && !f.finalScriptWitness) return [];
      b = y(f);
    } else
      b = f.partialSig;
    return b.map((E) => E.signature);
  }
  function y(f) {
    const b = f.finalScriptSig ? t.decompile(f.finalScriptSig) || [] : [], E = f.finalScriptWitness ? t.decompile(f.finalScriptWitness) || [] : [];
    return b.concat(E).filter((I) => Q.isBuffer(I) && t.isCanonicalScriptSignature(I)).map((I) => ({ signature: I }));
  }
  return Fe;
}
var ba;
function y2() {
  if (ba) return He;
  ba = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.checkTaprootInputForSigs = He.tapTreeFromList = He.tapTreeToList = He.tweakInternalPubKey = He.checkTaprootOutputFields = He.checkTaprootInputFields = He.isTaprootOutput = He.isTaprootInput = He.serializeTaprootSignature = He.tapScriptFinalizer = He.toXOnly = void 0;
  const e = pt(), t = Jn(), n = Ko(), r = ms(), o = Qn(), s = Ko(), u = (k) => k.length === 32 ? k : k.slice(1, 33);
  He.toXOnly = u;
  function i(k, M, Y) {
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
  He.tapScriptFinalizer = i;
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
  function m(k, M, Y) {
    A(k, M, Y), N(k, M, Y);
  }
  He.checkTaprootInputFields = m;
  function y(k, M, Y) {
    _(k, M, Y), f(k, M);
  }
  He.checkTaprootOutputFields = y;
  function f(k, M) {
    if (!M.tapTree && !M.tapInternalKey) return;
    const Y = M.tapInternalKey || k.tapInternalKey, Z = M.tapTree || k.tapTree;
    if (Y) {
      const { script: ne } = k, se = b(Y, Z);
      if (ne && !ne.equals(se))
        throw new Error("Error adding output. Script or address missmatch.");
    }
  }
  function b(k, M) {
    const Y = M && x(M.leaves), { output: Z } = (0, o.p2tr)({
      internalPubkey: k,
      scriptTree: Y
    });
    return Z;
  }
  function E(k, M) {
    const Y = M.tapInternalKey, Z = Y && (0, r.tweakKey)(Y, M.tapMerkleRoot);
    if (!Z)
      throw new Error(
        `Cannot tweak tap internal key for input #${k}. Public key: ${Y && Y.toString("hex")}`
      );
    return Z.x;
  }
  He.tweakInternalPubKey = E;
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
  function w(k, M) {
    return O(k).some(
      (Z) => (0, s.signatureBlocksAction)(Z, T, M)
    );
  }
  He.checkTaprootInputForSigs = w;
  function T(k) {
    return {
      signature: k.slice(0, 64),
      hashType: k.slice(64)[0] || t.Transaction.SIGHASH_DEFAULT
    };
  }
  function O(k) {
    const M = [];
    if (k.tapKeySig && M.push(k.tapKeySig), k.tapScriptSig && M.push(...k.tapScriptSig.map((Y) => Y.signature)), !M.length) {
      const Y = W(k.finalScriptWitness);
      Y && M.push(Y);
    }
    return M;
  }
  function W(k) {
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
    return (k.tapScriptSig || []).filter((Z) => Z.leafHash.equals(Y)).map((Z) => j(M.script, Z)).sort((Z, ne) => ne.positionInScript - Z.positionInScript).map((Z) => Z.signature);
  }
  function j(k, M) {
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
  const e = w2(), t = Jr(), n = tl(), r = ws(), o = ji(), s = Ht(), u = Qn(), i = ms(), a = yt(), d = Jn(), c = y2(), m = Ko(), y = {
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
      const l = e.Psbt.fromBuffer(B, b), h = new f(p, l);
      return N(h.__CACHE.__TX, h.__CACHE), h;
    }
    constructor(B = {}, p = new e.Psbt(new E())) {
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
      const l = (h, C, L, V) => Object.defineProperty(h, C, {
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
        hash: (0, o.cloneBuffer)(B.hash),
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
          script: (0, o.cloneBuffer)(B.script),
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
      W(B), this.opts.maximumFeeRate = B;
    }
    setVersion(B) {
      W(B), K(this.data.inputs, "setVersion");
      const p = this.__CACHE;
      return p.__TX.version = B, p.__EXTRACTED_TX = void 0, this;
    }
    setLocktime(B) {
      W(B), K(this.data.inputs, "setLocktime");
      const p = this.__CACHE;
      return p.__TX.locktime = B, p.__EXTRACTED_TX = void 0, this;
    }
    setInputSequence(B, p) {
      W(p), K(this.data.inputs, "setInputSequence");
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
      const h = this.data.inputs.length - 1, C = this.data.inputs[h];
      return C.nonWitnessUtxo && rt(this.__CACHE, C, h), p.__FEE = void 0, p.__FEE_RATE = void 0, p.__EXTRACTED_TX = void 0, this;
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
        const { network: h } = this.opts, C = (0, r.toOutputScript)(p, h);
        B = Object.assign({}, B, { script: C });
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
      const { script: h, isP2SH: C, isP2WSH: L, isSegwit: V } = xe(
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
        C,
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
        const C = u.p2tr({
          output: p.witnessUtxo.script,
          signature: p.tapKeySig
        }), L = (0, m.witnessStackToScriptWitness)(
          C.witness
        );
        this.data.updateInput(B, { finalScriptWitness: L });
      } else {
        const { finalScriptWitness: C } = h(
          B,
          p,
          l
        );
        this.data.updateInput(B, { finalScriptWitness: C });
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
      ), C = h.type === "raw" ? "" : h.type + "-", L = Tt(h.meaningfulScript);
      return C + L;
    }
    inputHasPubkey(B, p) {
      const l = (0, n.checkForInput)(this.data.inputs, B);
      return St(p, l, B, this.__CACHE);
    }
    inputHasHDKey(B, p) {
      const l = (0, n.checkForInput)(this.data.inputs, B), h = O(p);
      return !!l.bip32Derivation && l.bip32Derivation.some(h);
    }
    outputHasPubkey(B, p) {
      const l = (0, n.checkForOutput)(this.data.outputs, B);
      return cr(p, l, B, this.__CACHE);
    }
    outputHasHDKey(B, p) {
      const l = (0, n.checkForOutput)(this.data.outputs, B), h = O(p);
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
      const h = this.data.inputs[B], C = (h || {}).partialSig;
      if (!h || !C || C.length < 1)
        throw new Error("No signatures to validate");
      if (typeof p != "function")
        throw new Error("Need validator function to validate signatures");
      const L = l ? C.filter((fe) => fe.pubkey.equals(l)) : C;
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
      const h = this.data.inputs[B], C = (h || {}).tapKeySig, L = (h || {}).tapScriptSig;
      if (!h && !C && !(L && !L.length))
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
      if (C && z) {
        if (!p(
          z.pubkey,
          z.hash,
          se(C)
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
        const C = [], L = [];
        for (const V of lt(this.data.inputs.length))
          L.push(
            this.signInputHDAsync(V, B, p).then(
              () => {
                C.push(!0);
              },
              () => {
                C.push(!1);
              }
            )
          );
        return Promise.all(L).then(() => {
          if (C.every((V) => V === !1))
            return h(new Error("No inputs were signed"));
          l();
        });
      });
    }
    signInputHD(B, p, l = [d.Transaction.SIGHASH_ALL]) {
      if (!p || !p.publicKey || !p.fingerprint)
        throw new Error("Need HDSigner to sign input");
      return $e(B, this.data.inputs, p).forEach((C) => this.signInput(B, C, l)), this;
    }
    signInputHDAsync(B, p, l = [d.Transaction.SIGHASH_ALL]) {
      return new Promise((h, C) => {
        if (!p || !p.publicKey || !p.fingerprint)
          return C(new Error("Need HDSigner to sign input"));
        const V = $e(B, this.data.inputs, p).map(
          (z) => this.signInputAsync(B, z, l)
        );
        return Promise.all(V).then(() => {
          h();
        }).catch(C);
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
        const C = [], L = [];
        for (const [V] of this.data.inputs.entries())
          L.push(
            this.signInputAsync(V, B, p).then(
              () => {
                C.push(!0);
              },
              () => {
                C.push(!1);
              }
            )
          );
        return Promise.all(L).then(() => {
          if (C.every((V) => V === !1))
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
      const C = (0, n.checkForInput)(this.data.inputs, B);
      if ((0, c.isTaprootInput)(C))
        return this._signTaprootInput(
          B,
          C,
          p,
          l,
          h
        );
      throw new Error(`Input #${B} is not of type Taproot.`);
    }
    _signInput(B, p, l = [d.Transaction.SIGHASH_ALL]) {
      const { hash: h, sighashType: C } = M(
        this.data.inputs,
        B,
        p.publicKey,
        this.__CACHE,
        l
      ), L = [
        {
          pubkey: p.publicKey,
          signature: a.signature.encode(p.sign(h), C)
        }
      ];
      return this.data.updateInput(B, { partialSig: L }), this;
    }
    _signTaprootInput(B, p, l, h, C = [d.Transaction.SIGHASH_DEFAULT]) {
      const L = this.checkTaprootHashesForSig(
        B,
        p,
        l,
        h,
        C
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
        const C = (0, n.checkForInput)(this.data.inputs, B);
        if ((0, c.isTaprootInput)(C))
          return this._signTaprootInputAsync(
            B,
            C,
            p,
            l,
            h
          );
        throw new Error(`Input #${B} is not of type Taproot.`);
      });
    }
    _signInputAsync(B, p, l = [d.Transaction.SIGHASH_ALL]) {
      const { hash: h, sighashType: C } = M(
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
            signature: a.signature.encode(L, C)
          }
        ];
        this.data.updateInput(B, { partialSig: V });
      });
    }
    async _signTaprootInputAsync(B, p, l, h, C = [d.Transaction.SIGHASH_DEFAULT]) {
      const L = this.checkTaprootHashesForSig(
        B,
        p,
        l,
        h,
        C
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
    checkTaprootHashesForSig(B, p, l, h, C) {
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
        C
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
  const b = (J) => new E(J);
  class E {
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
      const p = typeof B.hash == "string" ? (0, o.reverseBuffer)(Q.from(B.hash, "hex")) : B.hash;
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
        return w(1, J.partialSig);
      case "multisig":
        const l = u.p2ms({ output: B });
        return w(l.m, J.partialSig, l.pubkeys);
      default:
        return !1;
    }
  }
  function x(J) {
    if (J.__UNSAFE_SIGN_NONSEGWIT !== !1)
      throw new Error("Not BIP174 compliant, can not export");
  }
  function w(J, B, p) {
    if (!B) return !1;
    let l;
    if (p ? l = p.map((h) => {
      const C = Or(h);
      return B.find((L) => L.pubkey.equals(C));
    }).filter((h) => !!h) : l = B, l.length > J) throw new Error("Too many signatures");
    return l.length === J;
  }
  function T(J) {
    return !!J.finalScriptSig || !!J.finalScriptWitness;
  }
  function O(J) {
    return (B) => !(!B.masterFingerprint.equals(J.fingerprint) || !J.derivePath(B.path).publicKey.equals(B.pubkey));
  }
  function W(J) {
    if (typeof J != "number" || J !== Math.floor(J) || J > 4294967295 || J < 0)
      throw new Error("Invalid 32 bit integer");
  }
  function U(J, B, p) {
    const l = B.__FEE_RATE || J.getFeeRate(), h = B.__EXTRACTED_TX.virtualSize(), C = l * h;
    if (l >= p.maximumFeeRate)
      throw new Error(
        `Warning: You are paying around ${(C / 1e8).toFixed(8)} in fees, which is ${l} satoshi per byte for a transaction with a VSize of ${h} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`
      );
  }
  function K(J, B) {
    J.forEach((p) => {
      if ((0, c.isTaprootInput)(p) ? (0, c.checkTaprootInputForSigs)(p, B) : (0, m.checkInputForSig)(p, B))
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
    if (!(0, m.pubkeyInScript)(J, B))
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
    const p = (0, o.reverseBuffer)(Q.from(B.hash)).toString("hex") + ":" + B.index;
    if (J.__TX_IN_CACHE[p]) throw new Error("Duplicate input detected.");
    J.__TX_IN_CACHE[p] = 1;
  }
  function F(J, B) {
    return (p, l, h, C) => {
      const L = J({
        redeem: { output: h }
      }).output;
      if (!l.equals(L))
        throw new Error(
          `${B} for ${C} #${p} doesn't match the scriptPubKey in the prevout`
        );
    };
  }
  const j = F(u.p2sh, "Redeem script"), H = F(
    u.p2wsh,
    "Witness script"
  );
  function $(J, B, p, l) {
    if (!p.every(T))
      throw new Error(`PSBT must be finalized to calculate ${B}`);
    if (J === "__FEE_RATE" && l.__FEE_RATE) return l.__FEE_RATE;
    if (J === "__FEE" && l.__FEE) return l.__FEE;
    let h, C = !0;
    if (l.__EXTRACTED_TX ? (h = l.__EXTRACTED_TX, C = !1) : h = l.__TX.clone(), Ke(p, h, l, C), J === "__FEE_RATE") return l.__FEE_RATE;
    if (J === "__FEE") return l.__FEE;
  }
  function G(J, B, p, l, h, C) {
    const L = Tt(p);
    if (!I(B, p, L))
      throw new Error(`Can not finalize input #${J}`);
    return k(
      p,
      L,
      B.partialSig,
      l,
      h,
      C
    );
  }
  function k(J, B, p, l, h, C) {
    let L, V;
    const z = ge(J, B, p), ie = C ? u.p2wsh({ redeem: z }) : null, ce = h ? u.p2sh({ redeem: ie || z }) : null;
    return l ? (ie ? V = (0, m.witnessStackToScriptWitness)(
      ie.witness
    ) : V = (0, m.witnessStackToScriptWitness)(
      z.witness
    ), ce && (L = ce.input)) : ce ? L = ce.input : L = z.input, {
      finalScriptSig: L,
      finalScriptWitness: V
    };
  }
  function M(J, B, p, l, h) {
    const C = (0, n.checkForInput)(J, B), { hash: L, sighashType: V, script: z } = Y(
      B,
      C,
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
    const C = p.__TX, L = B.sighashType || d.Transaction.SIGHASH_ALL;
    ae(L, h);
    let V, z;
    if (B.nonWitnessUtxo) {
      const fe = Ue(
        p,
        B,
        J
      ), ye = C.ins[J].hash, we = fe.getHash();
      if (!ye.equals(we))
        throw new Error(
          `Non-witness UTXO hash for input #${J} doesn't match the hash specified in the prevout`
        );
      const _e = C.ins[J].index;
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
      V = C.hashForWitnessV0(
        J,
        ie,
        z.value,
        L
      );
    else if ((0, m.isP2WPKH)(ie)) {
      const fe = u.p2pkh({
        hash: ie.slice(2)
      }).output;
      V = C.hashForWitnessV0(
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
      ), V = C.hashForSignature(
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
    return (0, m.isP2TR)(l) ? l.subarray(2, 34) : null;
  }
  function se(J) {
    return J.length === 64 ? J : J.subarray(0, 64);
  }
  function pe(J, B, p, l, h, C, L) {
    const V = h.__TX, z = B.sighashType || d.Transaction.SIGHASH_DEFAULT;
    ae(z, L);
    const ie = p.map(
      (_e, qe) => tt(qe, _e, h)
    ), ce = ie.map((_e) => _e.script), fe = ie.map((_e) => _e.value), ye = [];
    if (B.tapInternalKey && !C) {
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
    const we = (B.tapLeafScript || []).filter((_e) => (0, m.pubkeyInScript)(l, _e.script)).map((_e) => {
      const qe = (0, i.tapleafHash)({
        output: _e.script,
        version: _e.leafVersion
      });
      return Object.assign({ hash: qe }, _e);
    }).filter(
      (_e) => !C || C.equals(_e.hash)
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
      const C = Ue(
        p,
        B,
        J
      ), L = l.ins[J].index;
      h.script = C.outs[L].script;
    } else B.witnessUtxo && (h.script = B.witnessUtxo.script);
    return (B.witnessScript || (0, m.isP2WPKH)(h.script)) && (h.isSegwit = !0), h;
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
    function C() {
      const L = l(), V = [];
      for (let z = 0; z < L; z++) V.push(h());
      return V;
    }
    return C();
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
    const h = J, C = p;
    delete B.nonWitnessUtxo, Object.defineProperty(B, "nonWitnessUtxo", {
      enumerable: !0,
      get() {
        const L = h.__NON_WITNESS_UTXO_BUF_CACHE[C], V = h.__NON_WITNESS_UTXO_TX_CACHE[C];
        if (L !== void 0)
          return L;
        {
          const z = V.toBuffer();
          return h.__NON_WITNESS_UTXO_BUF_CACHE[C] = z, z;
        }
      },
      set(L) {
        h.__NON_WITNESS_UTXO_BUF_CACHE[C] = L;
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
    const C = B.outs.reduce((z, ie) => z + ie.value, 0), L = h - C;
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
    const h = Se(p, B, l), { meaningfulScript: C } = At(
      h,
      p,
      "input",
      B.redeemScript,
      B.witnessScript
    );
    return (0, m.pubkeyInScript)(J, C);
  }
  function cr(J, B, p, l) {
    const h = l.__TX.outs[p].script, { meaningfulScript: C } = At(
      h,
      p,
      "output",
      B.redeemScript,
      B.witnessScript
    );
    return (0, m.pubkeyInScript)(J, C);
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
    const C = (0, m.isP2SHScript)(J), L = C && l && (0, m.isP2WSHScript)(l), V = (0, m.isP2WSHScript)(J);
    if (C && l === void 0)
      throw new Error("scriptPubkey is P2SH but redeemScript missing");
    if ((V || L) && h === void 0)
      throw new Error(
        "scriptPubkey or redeemScript is P2WSH but witnessScript missing"
      );
    let z;
    return L ? (z = h, j(B, J, l, p), H(B, l, h, p), Ye(z)) : V ? (z = h, H(B, J, h, p), Ye(z)) : C ? (z = l, j(B, J, l, p)) : z = J, {
      meaningfulScript: z,
      type: L ? "p2sh-p2wsh" : C ? "p2sh" : V ? "p2wsh" : "raw"
    };
  }
  function Ye(J) {
    if ((0, m.isP2WPKH)(J) || (0, m.isP2SHScript)(J))
      throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
  }
  function Tt(J) {
    return (0, m.isP2WPKH)(J) ? "witnesspubkeyhash" : (0, m.isP2PKH)(J) ? "pubkeyhash" : (0, m.isP2MS)(J) ? "multisig" : (0, m.isP2PK)(J) ? "pubkey" : "nonstandard";
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
    const o = Qn();
    e.payments = o;
    const s = yt();
    e.script = s;
    var u = Xp();
    Object.defineProperty(e, "Block", {
      enumerable: !0,
      get: function() {
        return u.Block;
      }
    });
    var i = E2();
    Object.defineProperty(e, "Psbt", {
      enumerable: !0,
      get: function() {
        return i.Psbt;
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
  const { network: e, publicKey: t, format: n, wallet: r } = Xt(), [o, s] = Pe(null), [u, i] = Pe(!1);
  return { sign: ke(
    async (d, c, m) => {
      i(!0);
      try {
        if (s(null), !n || !t || !r)
          throw new Error("No wallet is connected");
        const y = b2.Psbt.fromBase64(c), f = await cs({
          address: d,
          wallet: r,
          network: e,
          psbt: y,
          options: m
        });
        return i(!1), f;
      } catch (y) {
        throw s(y.message), i(!1), y;
      }
    },
    [n, e, t, r]
  ), error: o, loading: u };
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
  format: o
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
    const s = v2(o), { base64: u } = await ml(e, {
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
    address: o
  } = Xt(), [s, u] = Pe(null), [i, a] = Pe(!1);
  return { signMsg: ke(
    async (c, m) => {
      a(!0);
      try {
        if (u(null), !r || !n || !t)
          throw new Error("No wallet is connected");
        if (o.ordinals !== c && o.payments !== c)
          throw new Error("Address supplied is not connected address");
        const y = await P2({
          address: c,
          wallet: t,
          message: m,
          network: e,
          format: o.ordinals === c ? r.ordinals : r.payments
        });
        return a(!1), y;
      } catch (y) {
        throw u(y.message), a(!1), y;
      }
    },
    [r, e, n, t, o]
  ), error: s, isLoading: i };
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
