"use strict";
var lu = Object.create;
var hr = Object.defineProperty;
var uu = Object.getOwnPropertyDescriptor;
var cu = Object.getOwnPropertyNames;
var pu = Object.getPrototypeOf,
  du = Object.prototype.hasOwnProperty;
var L = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Rt = (e, t) => {
    for (var r in t) hr(e, r, { get: t[r], enumerable: !0 });
  },
  so = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of cu(t))
        !du.call(e, i) &&
          i !== r &&
          hr(e, i, {
            get: () => t[i],
            enumerable: !(n = uu(t, i)) || n.enumerable,
          });
    return e;
  };
var F = (e, t, r) => (
    (r = e != null ? lu(pu(e)) : {}),
    so(
      t || !e || !e.__esModule
        ? hr(r, "default", { value: e, enumerable: !0 })
        : r,
      e,
    )
  ),
  mu = (e) => so(hr({}, "__esModule", { value: !0 }), e);
var xo = L((wf, bo) => {
  var at = 1e3,
    lt = at * 60,
    ut = lt * 60,
    et = ut * 24,
    gu = et * 7,
    yu = et * 365.25;
  bo.exports = function (e, t) {
    t = t || {};
    var r = typeof e;
    if (r === "string" && e.length > 0) return hu(e);
    if (r === "number" && isFinite(e)) return t.long ? xu(e) : bu(e);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(e),
    );
  };
  function hu(e) {
    if (((e = String(e)), !(e.length > 100))) {
      var t =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          e,
        );
      if (!!t) {
        var r = parseFloat(t[1]),
          n = (t[2] || "ms").toLowerCase();
        switch (n) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return r * yu;
          case "weeks":
          case "week":
          case "w":
            return r * gu;
          case "days":
          case "day":
          case "d":
            return r * et;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return r * ut;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return r * lt;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return r * at;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return r;
          default:
            return;
        }
      }
    }
  }
  function bu(e) {
    var t = Math.abs(e);
    return t >= et
      ? Math.round(e / et) + "d"
      : t >= ut
        ? Math.round(e / ut) + "h"
        : t >= lt
          ? Math.round(e / lt) + "m"
          : t >= at
            ? Math.round(e / at) + "s"
            : e + "ms";
  }
  function xu(e) {
    var t = Math.abs(e);
    return t >= et
      ? xr(e, t, et, "day")
      : t >= ut
        ? xr(e, t, ut, "hour")
        : t >= lt
          ? xr(e, t, lt, "minute")
          : t >= at
            ? xr(e, t, at, "second")
            : e + " ms";
  }
  function xr(e, t, r, n) {
    var i = t >= r * 1.5;
    return Math.round(e / r) + " " + n + (i ? "s" : "");
  }
});
var _n = L((Ef, wo) => {
  function wu(e) {
    (r.debug = r),
      (r.default = r),
      (r.coerce = l),
      (r.disable = o),
      (r.enable = i),
      (r.enabled = s),
      (r.humanize = xo()),
      (r.destroy = u),
      Object.keys(e).forEach((c) => {
        r[c] = e[c];
      }),
      (r.names = []),
      (r.skips = []),
      (r.formatters = {});
    function t(c) {
      let p = 0;
      for (let d = 0; d < c.length; d++)
        (p = (p << 5) - p + c.charCodeAt(d)), (p |= 0);
      return r.colors[Math.abs(p) % r.colors.length];
    }
    r.selectColor = t;
    function r(c) {
      let p,
        d = null,
        m,
        f;
      function g(...b) {
        if (!g.enabled) return;
        let y = g,
          w = Number(new Date()),
          x = w - (p || w);
        (y.diff = x),
          (y.prev = p),
          (y.curr = w),
          (p = w),
          (b[0] = r.coerce(b[0])),
          typeof b[0] != "string" && b.unshift("%O");
        let E = 0;
        (b[0] = b[0].replace(/%([a-zA-Z%])/g, (O, B) => {
          if (O === "%%") return "%";
          E++;
          let k = r.formatters[B];
          if (typeof k == "function") {
            let U = b[E];
            (O = k.call(y, U)), b.splice(E, 1), E--;
          }
          return O;
        })),
          r.formatArgs.call(y, b),
          (y.log || r.log).apply(y, b);
      }
      return (
        (g.namespace = c),
        (g.useColors = r.useColors()),
        (g.color = r.selectColor(c)),
        (g.extend = n),
        (g.destroy = r.destroy),
        Object.defineProperty(g, "enabled", {
          enumerable: !0,
          configurable: !1,
          get: () =>
            d !== null
              ? d
              : (m !== r.namespaces && ((m = r.namespaces), (f = r.enabled(c))),
                f),
          set: (b) => {
            d = b;
          },
        }),
        typeof r.init == "function" && r.init(g),
        g
      );
    }
    function n(c, p) {
      let d = r(this.namespace + (typeof p > "u" ? ":" : p) + c);
      return (d.log = this.log), d;
    }
    function i(c) {
      r.save(c), (r.namespaces = c), (r.names = []), (r.skips = []);
      let p,
        d = (typeof c == "string" ? c : "").split(/[\s,]+/),
        m = d.length;
      for (p = 0; p < m; p++)
        !d[p] ||
          ((c = d[p].replace(/\*/g, ".*?")),
          c[0] === "-"
            ? r.skips.push(new RegExp("^" + c.slice(1) + "$"))
            : r.names.push(new RegExp("^" + c + "$")));
    }
    function o() {
      let c = [...r.names.map(a), ...r.skips.map(a).map((p) => "-" + p)].join(
        ",",
      );
      return r.enable(""), c;
    }
    function s(c) {
      if (c[c.length - 1] === "*") return !0;
      let p, d;
      for (p = 0, d = r.skips.length; p < d; p++)
        if (r.skips[p].test(c)) return !1;
      for (p = 0, d = r.names.length; p < d; p++)
        if (r.names[p].test(c)) return !0;
      return !1;
    }
    function a(c) {
      return c
        .toString()
        .substring(2, c.toString().length - 2)
        .replace(/\.\*\?$/, "*");
    }
    function l(c) {
      return c instanceof Error ? c.stack || c.message : c;
    }
    function u() {
      console.warn(
        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
      );
    }
    return r.enable(r.load()), r;
  }
  wo.exports = wu;
});
var Eo = L((he, wr) => {
  he.formatArgs = Tu;
  he.save = Pu;
  he.load = Mu;
  he.useColors = Eu;
  he.storage = vu();
  he.destroy = (() => {
    let e = !1;
    return () => {
      e ||
        ((e = !0),
        console.warn(
          "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
        ));
    };
  })();
  he.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33",
  ];
  function Eu() {
    return typeof window < "u" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        ? !1
        : (typeof document < "u" &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          (typeof window < "u" &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function Tu(e) {
    if (
      ((e[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        e[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        wr.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let t = "color: " + this.color;
    e.splice(1, 0, t, "color: inherit");
    let r = 0,
      n = 0;
    e[0].replace(/%[a-zA-Z%]/g, (i) => {
      i !== "%%" && (r++, i === "%c" && (n = r));
    }),
      e.splice(n, 0, t);
  }
  he.log = console.debug || console.log || (() => {});
  function Pu(e) {
    try {
      e ? he.storage.setItem("debug", e) : he.storage.removeItem("debug");
    } catch {}
  }
  function Mu() {
    let e;
    try {
      e = he.storage.getItem("debug");
    } catch {}
    return (
      !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG),
      e
    );
  }
  function vu() {
    try {
      return localStorage;
    } catch {}
  }
  wr.exports = _n()(he);
  var { formatters: Au } = wr.exports;
  Au.j = function (e) {
    try {
      return JSON.stringify(e);
    } catch (t) {
      return "[UnexpectedJSONParseError]: " + t.message;
    }
  };
});
var Ln = L((Tf, To) => {
  "use strict";
  To.exports = (e, t = process.argv) => {
    let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--",
      n = t.indexOf(r + e),
      i = t.indexOf("--");
    return n !== -1 && (i === -1 || n < i);
  };
});
var Bn = L((Pf, Mo) => {
  "use strict";
  var Cu = require("os"),
    Po = require("tty"),
    xe = Ln(),
    { env: H } = process,
    Ke;
  xe("no-color") || xe("no-colors") || xe("color=false") || xe("color=never")
    ? (Ke = 0)
    : (xe("color") || xe("colors") || xe("color=true") || xe("color=always")) &&
      (Ke = 1);
  "FORCE_COLOR" in H &&
    (H.FORCE_COLOR === "true"
      ? (Ke = 1)
      : H.FORCE_COLOR === "false"
        ? (Ke = 0)
        : (Ke =
            H.FORCE_COLOR.length === 0
              ? 1
              : Math.min(parseInt(H.FORCE_COLOR, 10), 3)));
  function jn(e) {
    return e === 0
      ? !1
      : { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
  }
  function qn(e, t) {
    if (Ke === 0) return 0;
    if (xe("color=16m") || xe("color=full") || xe("color=truecolor")) return 3;
    if (xe("color=256")) return 2;
    if (e && !t && Ke === void 0) return 0;
    let r = Ke || 0;
    if (H.TERM === "dumb") return r;
    if (process.platform === "win32") {
      let n = Cu.release().split(".");
      return Number(n[0]) >= 10 && Number(n[2]) >= 10586
        ? Number(n[2]) >= 14931
          ? 3
          : 2
        : 1;
    }
    if ("CI" in H)
      return [
        "TRAVIS",
        "CIRCLECI",
        "APPVEYOR",
        "GITLAB_CI",
        "GITHUB_ACTIONS",
        "BUILDKITE",
      ].some((n) => n in H) || H.CI_NAME === "codeship"
        ? 1
        : r;
    if ("TEAMCITY_VERSION" in H)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(H.TEAMCITY_VERSION) ? 1 : 0;
    if (H.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in H) {
      let n = parseInt((H.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (H.TERM_PROGRAM) {
        case "iTerm.app":
          return n >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(H.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
            H.TERM,
          ) || "COLORTERM" in H
        ? 1
        : r;
  }
  function Fu(e) {
    let t = qn(e, e && e.isTTY);
    return jn(t);
  }
  Mo.exports = {
    supportsColor: Fu,
    stdout: jn(qn(!0, Po.isatty(1))),
    stderr: jn(qn(!0, Po.isatty(2))),
  };
});
var Ao = L((Z, Tr) => {
  var Su = require("tty"),
    Er = require("util");
  Z.init = Nu;
  Z.log = $u;
  Z.formatArgs = Ru;
  Z.save = ku;
  Z.load = Iu;
  Z.useColors = Ou;
  Z.destroy = Er.deprecate(
    () => {},
    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
  );
  Z.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e = Bn();
    e &&
      (e.stderr || e).level >= 2 &&
      (Z.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63,
        68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128,
        129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168,
        169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200,
        201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
      ]);
  } catch {}
  Z.inspectOpts = Object.keys(process.env)
    .filter((e) => /^debug_/i.test(e))
    .reduce((e, t) => {
      let r = t
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (i, o) => o.toUpperCase()),
        n = process.env[t];
      return (
        /^(yes|on|true|enabled)$/i.test(n)
          ? (n = !0)
          : /^(no|off|false|disabled)$/i.test(n)
            ? (n = !1)
            : n === "null"
              ? (n = null)
              : (n = Number(n)),
        (e[r] = n),
        e
      );
    }, {});
  function Ou() {
    return "colors" in Z.inspectOpts
      ? Boolean(Z.inspectOpts.colors)
      : Su.isatty(process.stderr.fd);
  }
  function Ru(e) {
    let { namespace: t, useColors: r } = this;
    if (r) {
      let n = this.color,
        i = "\x1B[3" + (n < 8 ? n : "8;5;" + n),
        o = `  ${i};1m${t} \x1B[0m`;
      (e[0] =
        o +
        e[0]
          .split(
            `
`,
          )
          .join(
            `
` + o,
          )),
        e.push(i + "m+" + Tr.exports.humanize(this.diff) + "\x1B[0m");
    } else e[0] = Du() + t + " " + e[0];
  }
  function Du() {
    return Z.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
  }
  function $u(...e) {
    return process.stderr.write(
      Er.format(...e) +
        `
`,
    );
  }
  function ku(e) {
    e ? (process.env.DEBUG = e) : delete process.env.DEBUG;
  }
  function Iu() {
    return process.env.DEBUG;
  }
  function Nu(e) {
    e.inspectOpts = {};
    let t = Object.keys(Z.inspectOpts);
    for (let r = 0; r < t.length; r++)
      e.inspectOpts[t[r]] = Z.inspectOpts[t[r]];
  }
  Tr.exports = _n()(Z);
  var { formatters: vo } = Tr.exports;
  vo.o = function (e) {
    return (
      (this.inspectOpts.colors = this.useColors),
      Er.inspect(e, this.inspectOpts)
        .split(
          `
`,
        )
        .map((t) => t.trim())
        .join(" ")
    );
  };
  vo.O = function (e) {
    return (
      (this.inspectOpts.colors = this.useColors),
      Er.inspect(e, this.inspectOpts)
    );
  };
});
var Co = L((Mf, Vn) => {
  typeof process > "u" ||
  process.type === "renderer" ||
  process.browser === !0 ||
  process.__nwjs
    ? (Vn.exports = Eo())
    : (Vn.exports = Ao());
});
var Oo = L((Af, ju) => {
  ju.exports = {
    name: "dotenv",
    version: "16.0.3",
    description: "Loads environment variables from .env file",
    main: "lib/main.js",
    types: "lib/main.d.ts",
    exports: {
      ".": {
        require: "./lib/main.js",
        types: "./lib/main.d.ts",
        default: "./lib/main.js",
      },
      "./config": "./config.js",
      "./config.js": "./config.js",
      "./lib/env-options": "./lib/env-options.js",
      "./lib/env-options.js": "./lib/env-options.js",
      "./lib/cli-options": "./lib/cli-options.js",
      "./lib/cli-options.js": "./lib/cli-options.js",
      "./package.json": "./package.json",
    },
    scripts: {
      "dts-check": "tsc --project tests/types/tsconfig.json",
      lint: "standard",
      "lint-readme": "standard-markdown",
      pretest: "npm run lint && npm run dts-check",
      test: "tap tests/*.js --100 -Rspec",
      prerelease: "npm test",
      release: "standard-version",
    },
    repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" },
    keywords: [
      "dotenv",
      "env",
      ".env",
      "environment",
      "variables",
      "config",
      "settings",
    ],
    readmeFilename: "README.md",
    license: "BSD-2-Clause",
    devDependencies: {
      "@types/node": "^17.0.9",
      decache: "^4.6.1",
      dtslint: "^3.7.0",
      sinon: "^12.0.1",
      standard: "^16.0.4",
      "standard-markdown": "^7.1.0",
      "standard-version": "^9.3.2",
      tap: "^15.1.6",
      tar: "^6.1.11",
      typescript: "^4.5.4",
    },
    engines: { node: ">=12" },
  };
});
var Do = L((Cf, vr) => {
  var qu = require("fs"),
    Ro = require("path"),
    Bu = require("os"),
    Vu = Oo(),
    Ku = Vu.version,
    Qu =
      /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
  function Uu(e) {
    let t = {},
      r = e.toString();
    r = r.replace(
      /\r\n?/gm,
      `
`,
    );
    let n;
    for (; (n = Qu.exec(r)) != null; ) {
      let i = n[1],
        o = n[2] || "";
      o = o.trim();
      let s = o[0];
      (o = o.replace(/^(['"`])([\s\S]*)\1$/gm, "$2")),
        s === '"' &&
          ((o = o.replace(
            /\\n/g,
            `
`,
          )),
          (o = o.replace(/\\r/g, "\r"))),
        (t[i] = o);
    }
    return t;
  }
  function Qn(e) {
    console.log(`[dotenv@${Ku}][DEBUG] ${e}`);
  }
  function Ju(e) {
    return e[0] === "~" ? Ro.join(Bu.homedir(), e.slice(1)) : e;
  }
  function Gu(e) {
    let t = Ro.resolve(process.cwd(), ".env"),
      r = "utf8",
      n = Boolean(e && e.debug),
      i = Boolean(e && e.override);
    e &&
      (e.path != null && (t = Ju(e.path)),
      e.encoding != null && (r = e.encoding));
    try {
      let o = Mr.parse(qu.readFileSync(t, { encoding: r }));
      return (
        Object.keys(o).forEach(function (s) {
          Object.prototype.hasOwnProperty.call(process.env, s)
            ? (i === !0 && (process.env[s] = o[s]),
              n &&
                Qn(
                  i === !0
                    ? `"${s}" is already defined in \`process.env\` and WAS overwritten`
                    : `"${s}" is already defined in \`process.env\` and was NOT overwritten`,
                ))
            : (process.env[s] = o[s]);
        }),
        { parsed: o }
      );
    } catch (o) {
      return n && Qn(`Failed to load ${t} ${o.message}`), { error: o };
    }
  }
  var Mr = { config: Gu, parse: Uu };
  vr.exports.config = Mr.config;
  vr.exports.parse = Mr.parse;
  vr.exports = Mr;
});
var Lo = L((kf, _o) => {
  "use strict";
  _o.exports = (e) => {
    let t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  };
});
var Wn = L((If, jo) => {
  "use strict";
  var Yu = Lo();
  jo.exports = (e) => {
    let t = Yu(e);
    if (t === 0) return e;
    let r = new RegExp(`^[ \\t]{${t}}`, "gm");
    return e.replace(r, "");
  };
});
var Qo = L((Wf, Xn) => {
  "use strict";
  var D = Xn.exports;
  Xn.exports.default = D;
  var I = "\x1B[",
    Nt = "\x1B]",
    dt = "\x07",
    Sr = ";",
    Ko = process.env.TERM_PROGRAM === "Apple_Terminal";
  D.cursorTo = (e, t) => {
    if (typeof e != "number")
      throw new TypeError("The `x` argument is required");
    return typeof t != "number"
      ? I + (e + 1) + "G"
      : I + (t + 1) + ";" + (e + 1) + "H";
  };
  D.cursorMove = (e, t) => {
    if (typeof e != "number")
      throw new TypeError("The `x` argument is required");
    let r = "";
    return (
      e < 0 ? (r += I + -e + "D") : e > 0 && (r += I + e + "C"),
      t < 0 ? (r += I + -t + "A") : t > 0 && (r += I + t + "B"),
      r
    );
  };
  D.cursorUp = (e = 1) => I + e + "A";
  D.cursorDown = (e = 1) => I + e + "B";
  D.cursorForward = (e = 1) => I + e + "C";
  D.cursorBackward = (e = 1) => I + e + "D";
  D.cursorLeft = I + "G";
  D.cursorSavePosition = Ko ? "\x1B7" : I + "s";
  D.cursorRestorePosition = Ko ? "\x1B8" : I + "u";
  D.cursorGetPosition = I + "6n";
  D.cursorNextLine = I + "E";
  D.cursorPrevLine = I + "F";
  D.cursorHide = I + "?25l";
  D.cursorShow = I + "?25h";
  D.eraseLines = (e) => {
    let t = "";
    for (let r = 0; r < e; r++)
      t += D.eraseLine + (r < e - 1 ? D.cursorUp() : "");
    return e && (t += D.cursorLeft), t;
  };
  D.eraseEndLine = I + "K";
  D.eraseStartLine = I + "1K";
  D.eraseLine = I + "2K";
  D.eraseDown = I + "J";
  D.eraseUp = I + "1J";
  D.eraseScreen = I + "2J";
  D.scrollUp = I + "S";
  D.scrollDown = I + "T";
  D.clearScreen = "\x1Bc";
  D.clearTerminal =
    process.platform === "win32"
      ? `${D.eraseScreen}${I}0f`
      : `${D.eraseScreen}${I}3J${I}H`;
  D.beep = dt;
  D.link = (e, t) => [Nt, "8", Sr, Sr, t, dt, e, Nt, "8", Sr, Sr, dt].join("");
  D.image = (e, t = {}) => {
    let r = `${Nt}1337;File=inline=1`;
    return (
      t.width && (r += `;width=${t.width}`),
      t.height && (r += `;height=${t.height}`),
      t.preserveAspectRatio === !1 && (r += ";preserveAspectRatio=0"),
      r + ":" + e.toString("base64") + dt
    );
  };
  D.iTerm = {
    setCwd: (e = process.cwd()) => `${Nt}50;CurrentDir=${e}${dt}`,
    annotation: (e, t = {}) => {
      let r = `${Nt}1337;`,
        n = typeof t.x < "u",
        i = typeof t.y < "u";
      if ((n || i) && !(n && i && typeof t.length < "u"))
        throw new Error(
          "`x`, `y` and `length` must be defined when `x` or `y` is defined",
        );
      return (
        (e = e.replace(/\|/g, "")),
        (r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation="),
        t.length > 0
          ? (r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|"))
          : (r += e),
        r + dt
      );
    },
  };
});
var Go = L((Hf, Jo) => {
  "use strict";
  var tc = Bn(),
    mt = Ln();
  function Uo(e) {
    if (/^\d{3,4}$/.test(e)) {
      let r = /(\d{1,2})(\d{2})/.exec(e);
      return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
    }
    let t = (e || "").split(".").map((r) => parseInt(r, 10));
    return { major: t[0], minor: t[1], patch: t[2] };
  }
  function ei(e) {
    let { env: t } = process;
    if ("FORCE_HYPERLINK" in t)
      return !(
        t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0
      );
    if (
      mt("no-hyperlink") ||
      mt("no-hyperlinks") ||
      mt("hyperlink=false") ||
      mt("hyperlink=never")
    )
      return !1;
    if (mt("hyperlink=true") || mt("hyperlink=always") || "NETLIFY" in t)
      return !0;
    if (
      !tc.supportsColor(e) ||
      (e && !e.isTTY) ||
      process.platform === "win32" ||
      "CI" in t ||
      "TEAMCITY_VERSION" in t
    )
      return !1;
    if ("TERM_PROGRAM" in t) {
      let r = Uo(t.TERM_PROGRAM_VERSION);
      switch (t.TERM_PROGRAM) {
        case "iTerm.app":
          return r.major === 3 ? r.minor >= 1 : r.major > 3;
        case "WezTerm":
          return r.major >= 20200620;
        case "vscode":
          return r.major > 1 || (r.major === 1 && r.minor >= 72);
      }
    }
    if ("VTE_VERSION" in t) {
      if (t.VTE_VERSION === "0.50.0") return !1;
      let r = Uo(t.VTE_VERSION);
      return r.major > 0 || r.minor >= 50;
    }
    return !1;
  }
  Jo.exports = {
    supportsHyperlink: ei,
    stdout: ei(process.stdout),
    stderr: ei(process.stderr),
  };
});
var Ho = L((zf, _t) => {
  "use strict";
  var rc = Qo(),
    ti = Go(),
    Wo = (e, t, { target: r = "stdout", ...n } = {}) =>
      ti[r]
        ? rc.link(e, t)
        : n.fallback === !1
          ? e
          : typeof n.fallback == "function"
            ? n.fallback(e, t)
            : `${e} (\u200B${t}\u200B)`;
  _t.exports = (e, t, r = {}) => Wo(e, t, r);
  _t.exports.stderr = (e, t, r = {}) => Wo(e, t, { target: "stderr", ...r });
  _t.exports.isSupported = ti.stdout;
  _t.exports.stderr.isSupported = ti.stderr;
});
var os = L((fg, hc) => {
  hc.exports = {
    name: "@prisma/engines-version",
    version: "4.16.1-1.4bc8b6e1b66cb932731fb1bdbbc550d1e010de81",
    main: "index.js",
    types: "index.d.ts",
    license: "Apache-2.0",
    author: "Tim Suchanek <suchanek@prisma.io>",
    prisma: { enginesVersion: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81" },
    repository: {
      type: "git",
      url: "https://github.com/prisma/engines-wrapper.git",
      directory: "packages/engines-version",
    },
    devDependencies: { "@types/node": "18.16.18", typescript: "4.9.5" },
    files: ["index.js", "index.d.ts"],
    scripts: { build: "tsc -d" },
  };
});
var oi = L(($r) => {
  "use strict";
  Object.defineProperty($r, "__esModule", { value: !0 });
  $r.enginesVersion = void 0;
  $r.enginesVersion = os().prisma.enginesVersion;
});
var qt = L((Cg, ls) => {
  "use strict";
  ls.exports = (e, t = 1, r) => {
    if (
      ((r = { indent: " ", includeEmptyLines: !1, ...r }), typeof e != "string")
    )
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
      );
    if (typeof t != "number")
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
      );
    if (typeof r.indent != "string")
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``,
      );
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var ds = L((Og, ps) => {
  "use strict";
  ps.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
});
var Kt = L((Rg, ms) => {
  "use strict";
  var Cc = ds();
  ms.exports = (e) => (typeof e == "string" ? e.replace(Cc(), "") : e);
});
var fs = L((Ig, Ir) => {
  "use strict";
  Ir.exports = (e = {}) => {
    let t;
    if (e.repoUrl) t = e.repoUrl;
    else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
    else
      throw new Error(
        "You need to specify either the `repoUrl` option or both the `user` and `repo` options",
      );
    let r = new URL(`${t}/issues/new`),
      n = [
        "body",
        "title",
        "labels",
        "template",
        "milestone",
        "assignee",
        "projects",
      ];
    for (let i of n) {
      let o = e[i];
      if (o !== void 0) {
        if (i === "labels" || i === "projects") {
          if (!Array.isArray(o))
            throw new TypeError(`The \`${i}\` option should be an array`);
          o = o.join(",");
        }
        r.searchParams.set(i, o);
      }
    }
    return r.toString();
  };
  Ir.exports.default = Ir.exports;
});
var Kr = L((Fy, $s) => {
  "use strict";
  $s.exports = (function () {
    function e(t, r, n, i, o) {
      return t < r || n < r ? (t > n ? n + 1 : t + 1) : i === o ? r : r + 1;
    }
    return function (t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        (t = r), (r = n);
      }
      for (
        var i = t.length, o = r.length;
        i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);

      )
        i--, o--;
      for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (((i -= s), (o -= s), i === 0 || o < 3)) return o;
      var a = 0,
        l,
        u,
        c,
        p,
        d,
        m,
        f,
        g,
        b,
        y,
        w,
        x,
        E = [];
      for (l = 0; l < i; l++) E.push(l + 1), E.push(t.charCodeAt(s + l));
      for (var C = E.length - 1; a < o - 3; )
        for (
          b = r.charCodeAt(s + (u = a)),
            y = r.charCodeAt(s + (c = a + 1)),
            w = r.charCodeAt(s + (p = a + 2)),
            x = r.charCodeAt(s + (d = a + 3)),
            m = a += 4,
            l = 0;
          l < C;
          l += 2
        )
          (f = E[l]),
            (g = E[l + 1]),
            (u = e(f, u, c, b, g)),
            (c = e(u, c, p, y, g)),
            (p = e(c, p, d, w, g)),
            (m = e(p, d, m, x, g)),
            (E[l] = m),
            (d = p),
            (p = c),
            (c = u),
            (u = f);
      for (; a < o; )
        for (b = r.charCodeAt(s + (u = a)), m = ++a, l = 0; l < C; l += 2)
          (f = E[l]), (E[l] = m = e(f, u, m, b, E[l + 1])), (u = f);
      return m;
    };
  })();
});
var qs = L((Oi, Ri) => {
  (function (e, t) {
    typeof require == "function" &&
    typeof Oi == "object" &&
    typeof Ri == "object"
      ? (Ri.exports = t())
      : (e.pluralize = t());
  })(Oi, function () {
    var e = [],
      t = [],
      r = {},
      n = {},
      i = {};
    function o(m) {
      return typeof m == "string" ? new RegExp("^" + m + "$", "i") : m;
    }
    function s(m, f) {
      return m === f
        ? f
        : m === m.toLowerCase()
          ? f.toLowerCase()
          : m === m.toUpperCase()
            ? f.toUpperCase()
            : m[0] === m[0].toUpperCase()
              ? f.charAt(0).toUpperCase() + f.substr(1).toLowerCase()
              : f.toLowerCase();
    }
    function a(m, f) {
      return m.replace(/\$(\d{1,2})/g, function (g, b) {
        return f[b] || "";
      });
    }
    function l(m, f) {
      return m.replace(f[0], function (g, b) {
        var y = a(f[1], arguments);
        return s(g === "" ? m[b - 1] : g, y);
      });
    }
    function u(m, f, g) {
      if (!m.length || r.hasOwnProperty(m)) return f;
      for (var b = g.length; b--; ) {
        var y = g[b];
        if (y[0].test(f)) return l(f, y);
      }
      return f;
    }
    function c(m, f, g) {
      return function (b) {
        var y = b.toLowerCase();
        return f.hasOwnProperty(y)
          ? s(b, y)
          : m.hasOwnProperty(y)
            ? s(b, m[y])
            : u(y, b, g);
      };
    }
    function p(m, f, g, b) {
      return function (y) {
        var w = y.toLowerCase();
        return f.hasOwnProperty(w)
          ? !0
          : m.hasOwnProperty(w)
            ? !1
            : u(w, w, g) === w;
      };
    }
    function d(m, f, g) {
      var b = f === 1 ? d.singular(m) : d.plural(m);
      return (g ? f + " " : "") + b;
    }
    return (
      (d.plural = c(i, n, e)),
      (d.isPlural = p(i, n, e)),
      (d.singular = c(n, i, t)),
      (d.isSingular = p(n, i, t)),
      (d.addPluralRule = function (m, f) {
        e.push([o(m), f]);
      }),
      (d.addSingularRule = function (m, f) {
        t.push([o(m), f]);
      }),
      (d.addUncountableRule = function (m) {
        if (typeof m == "string") {
          r[m.toLowerCase()] = !0;
          return;
        }
        d.addPluralRule(m, "$0"), d.addSingularRule(m, "$0");
      }),
      (d.addIrregularRule = function (m, f) {
        (f = f.toLowerCase()), (m = m.toLowerCase()), (i[m] = f), (n[f] = m);
      }),
      [
        ["I", "we"],
        ["me", "us"],
        ["he", "they"],
        ["she", "they"],
        ["them", "them"],
        ["myself", "ourselves"],
        ["yourself", "yourselves"],
        ["itself", "themselves"],
        ["herself", "themselves"],
        ["himself", "themselves"],
        ["themself", "themselves"],
        ["is", "are"],
        ["was", "were"],
        ["has", "have"],
        ["this", "these"],
        ["that", "those"],
        ["echo", "echoes"],
        ["dingo", "dingoes"],
        ["volcano", "volcanoes"],
        ["tornado", "tornadoes"],
        ["torpedo", "torpedoes"],
        ["genus", "genera"],
        ["viscus", "viscera"],
        ["stigma", "stigmata"],
        ["stoma", "stomata"],
        ["dogma", "dogmata"],
        ["lemma", "lemmata"],
        ["schema", "schemata"],
        ["anathema", "anathemata"],
        ["ox", "oxen"],
        ["axe", "axes"],
        ["die", "dice"],
        ["yes", "yeses"],
        ["foot", "feet"],
        ["eave", "eaves"],
        ["goose", "geese"],
        ["tooth", "teeth"],
        ["quiz", "quizzes"],
        ["human", "humans"],
        ["proof", "proofs"],
        ["carve", "carves"],
        ["valve", "valves"],
        ["looey", "looies"],
        ["thief", "thieves"],
        ["groove", "grooves"],
        ["pickaxe", "pickaxes"],
        ["passerby", "passersby"],
      ].forEach(function (m) {
        return d.addIrregularRule(m[0], m[1]);
      }),
      [
        [/s?$/i, "s"],
        [/[^\u0000-\u007F]$/i, "$0"],
        [/([^aeiou]ese)$/i, "$1"],
        [/(ax|test)is$/i, "$1es"],
        [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
        [/(e[mn]u)s?$/i, "$1s"],
        [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
        [
          /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
          "$1i",
        ],
        [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
        [/(seraph|cherub)(?:im)?$/i, "$1im"],
        [/(her|at|gr)o$/i, "$1oes"],
        [
          /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
          "$1a",
        ],
        [
          /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
          "$1a",
        ],
        [/sis$/i, "ses"],
        [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
        [/([^aeiouy]|qu)y$/i, "$1ies"],
        [/([^ch][ieo][ln])ey$/i, "$1ies"],
        [/(x|ch|ss|sh|zz)$/i, "$1es"],
        [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
        [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
        [/(pe)(?:rson|ople)$/i, "$1ople"],
        [/(child)(?:ren)?$/i, "$1ren"],
        [/eaux$/i, "$0"],
        [/m[ae]n$/i, "men"],
        ["thou", "you"],
      ].forEach(function (m) {
        return d.addPluralRule(m[0], m[1]);
      }),
      [
        [/s$/i, ""],
        [/(ss)$/i, "$1"],
        [
          /(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,
          "$1fe",
        ],
        [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
        [/ies$/i, "y"],
        [
          /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
          "$1ie",
        ],
        [/\b(mon|smil)ies$/i, "$1ey"],
        [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
        [/(seraph|cherub)im$/i, "$1"],
        [
          /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
          "$1",
        ],
        [
          /(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,
          "$1sis",
        ],
        [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
        [/(test)(?:is|es)$/i, "$1is"],
        [
          /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
          "$1us",
        ],
        [
          /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
          "$1um",
        ],
        [
          /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
          "$1on",
        ],
        [/(alumn|alg|vertebr)ae$/i, "$1a"],
        [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
        [/(matr|append)ices$/i, "$1ix"],
        [/(pe)(rson|ople)$/i, "$1rson"],
        [/(child)ren$/i, "$1"],
        [/(eau)x?$/i, "$1"],
        [/men$/i, "man"],
      ].forEach(function (m) {
        return d.addSingularRule(m[0], m[1]);
      }),
      [
        "adulthood",
        "advice",
        "agenda",
        "aid",
        "aircraft",
        "alcohol",
        "ammo",
        "analytics",
        "anime",
        "athletics",
        "audio",
        "bison",
        "blood",
        "bream",
        "buffalo",
        "butter",
        "carp",
        "cash",
        "chassis",
        "chess",
        "clothing",
        "cod",
        "commerce",
        "cooperation",
        "corps",
        "debris",
        "diabetes",
        "digestion",
        "elk",
        "energy",
        "equipment",
        "excretion",
        "expertise",
        "firmware",
        "flounder",
        "fun",
        "gallows",
        "garbage",
        "graffiti",
        "hardware",
        "headquarters",
        "health",
        "herpes",
        "highjinks",
        "homework",
        "housework",
        "information",
        "jeans",
        "justice",
        "kudos",
        "labour",
        "literature",
        "machinery",
        "mackerel",
        "mail",
        "media",
        "mews",
        "moose",
        "music",
        "mud",
        "manga",
        "news",
        "only",
        "personnel",
        "pike",
        "plankton",
        "pliers",
        "police",
        "pollution",
        "premises",
        "rain",
        "research",
        "rice",
        "salmon",
        "scissors",
        "series",
        "sewage",
        "shambles",
        "shrimp",
        "software",
        "species",
        "staff",
        "swine",
        "tennis",
        "traffic",
        "transportation",
        "trout",
        "tuna",
        "wealth",
        "welfare",
        "whiting",
        "wildebeest",
        "wildlife",
        "you",
        /pok[eé]mon$/i,
        /[^aeiou]ese$/i,
        /deer$/i,
        /fish$/i,
        /measles$/i,
        /o[iu]s$/i,
        /pox$/i,
        /sheep$/i,
      ].forEach(d.addUncountableRule),
      d
    );
  });
});
var Na = L((Mx, Ia) => {
  "use strict";
  Ia.exports = (e) => Object.prototype.toString.call(e) === "[object RegExp]";
});
var La = L((vx, _a) => {
  "use strict";
  _a.exports = (e) => {
    let t = typeof e;
    return e !== null && (t === "object" || t === "function");
  };
});
var ja = L((ji) => {
  "use strict";
  Object.defineProperty(ji, "__esModule", { value: !0 });
  ji.default = (e) =>
    Object.getOwnPropertySymbols(e).filter((t) =>
      Object.prototype.propertyIsEnumerable.call(e, t),
    );
});
var Ja = L((rw, Vd) => {
  Vd.exports = {
    name: "@prisma/client",
    version: "4.16.2",
    description:
      "Prisma Client is an auto-generated, type-safe and modern JavaScript/TypeScript ORM for Node.js that's tailored to your data. Supports MySQL, PostgreSQL, MariaDB, SQLite databases.",
    keywords: [
      "orm",
      "prisma2",
      "prisma",
      "client",
      "query",
      "database",
      "sql",
      "postgres",
      "postgresql",
      "mysql",
      "sqlite",
      "mariadb",
      "mssql",
      "typescript",
      "query-builder",
    ],
    main: "index.js",
    browser: "index-browser.js",
    types: "index.d.ts",
    license: "Apache-2.0",
    engines: { node: ">=14.17" },
    homepage: "https://www.prisma.io",
    repository: {
      type: "git",
      url: "https://github.com/prisma/prisma.git",
      directory: "packages/client",
    },
    author: "Tim Suchanek <suchanek@prisma.io>",
    bugs: "https://github.com/prisma/prisma/issues",
    scripts: {
      dev: "DEV=true node -r esbuild-register helpers/build.ts",
      build: "node -r esbuild-register helpers/build.ts",
      test: "jest --silent",
      "test:e2e": "node -r esbuild-register tests/e2e/_utils/run.ts",
      "test:functional":
        "node -r esbuild-register helpers/functional-test/run-tests.ts",
      "test:memory": "node -r esbuild-register helpers/memory-tests.ts",
      "test:functional:code":
        "node -r esbuild-register helpers/functional-test/run-tests.ts --no-types",
      "test:functional:types":
        "node -r esbuild-register helpers/functional-test/run-tests.ts --types-only",
      "test-notypes":
        "jest --testPathIgnorePatterns src/__tests__/types/types.test.ts",
      generate: "node scripts/postinstall.js",
      postinstall: "node scripts/postinstall.js",
      prepublishOnly: "pnpm run build",
      "new-test":
        "NODE_OPTIONS='-r ts-node/register' yo ./helpers/generator-test/index.ts",
    },
    files: [
      "README.md",
      "runtime",
      "!runtime/*.map",
      "scripts",
      "generator-build",
      "edge.js",
      "edge.d.ts",
      "index.js",
      "index.d.ts",
      "index-browser.js",
      "extension.js",
      "extension.d.ts",
    ],
    devDependencies: {
      "@codspeed/benchmark.js-plugin": "1.1.0",
      "@faker-js/faker": "8.0.2",
      "@fast-check/jest": "1.6.2",
      "@jest/create-cache-key-function": "29.5.0",
      "@jest/globals": "29.5.0",
      "@jest/test-sequencer": "29.5.0",
      "@opentelemetry/api": "1.4.1",
      "@opentelemetry/context-async-hooks": "1.13.0",
      "@opentelemetry/instrumentation": "0.39.1",
      "@opentelemetry/resources": "1.13.0",
      "@opentelemetry/sdk-trace-base": "1.13.0",
      "@opentelemetry/semantic-conventions": "1.13.0",
      "@prisma/debug": "workspace:*",
      "@prisma/engines": "workspace:*",
      "@prisma/fetch-engine": "workspace:*",
      "@prisma/generator-helper": "workspace:*",
      "@prisma/get-platform": "workspace:*",
      "@prisma/instrumentation": "workspace:*",
      "@prisma/internals": "workspace:*",
      "@prisma/migrate": "workspace:*",
      "@prisma/mini-proxy": "0.7.0",
      "@swc-node/register": "1.6.5",
      "@swc/core": "1.3.64",
      "@swc/jest": "0.2.26",
      "@timsuchanek/copy": "1.4.5",
      "@types/debug": "4.1.8",
      "@types/fs-extra": "9.0.13",
      "@types/jest": "29.5.2",
      "@types/js-levenshtein": "1.1.1",
      "@types/mssql": "8.1.2",
      "@types/node": "18.16.16",
      "@types/pg": "8.10.2",
      "@types/yeoman-generator": "5.2.11",
      arg: "5.0.2",
      benchmark: "2.1.4",
      "ci-info": "3.8.0",
      "decimal.js": "10.4.3",
      "env-paths": "2.2.1",
      esbuild: "0.15.13",
      execa: "5.1.1",
      "expect-type": "0.16.0",
      "flat-map-polyfill": "0.3.8",
      "fs-extra": "11.1.1",
      "get-own-enumerable-property-symbols": "3.0.2",
      "get-stream": "6.0.1",
      globby: "11.1.0",
      "indent-string": "4.0.0",
      "is-obj": "2.0.0",
      "is-regexp": "2.1.0",
      jest: "29.5.0",
      "jest-junit": "16.0.0",
      "jest-serializer-ansi-escapes": "2.0.1",
      "jest-snapshot": "29.5.0",
      "js-levenshtein": "1.1.6",
      kleur: "4.1.5",
      klona: "2.0.6",
      "lz-string": "1.5.0",
      mariadb: "3.1.2",
      memfs: "3.5.3",
      mssql: "9.1.1",
      "new-github-issue-url": "0.2.1",
      "node-fetch": "2.6.11",
      "p-retry": "4.6.2",
      pg: "8.9.0",
      "pkg-up": "3.1.0",
      pluralize: "8.0.0",
      resolve: "1.22.2",
      rimraf: "3.0.2",
      "simple-statistics": "7.8.3",
      "sort-keys": "4.2.0",
      "source-map-support": "0.5.21",
      "sql-template-tag": "5.0.3",
      "stacktrace-parser": "0.1.10",
      "strip-ansi": "6.0.1",
      "strip-indent": "3.0.0",
      "ts-node": "10.9.1",
      "ts-pattern": "4.3.0",
      tsd: "0.28.1",
      typescript: "4.9.5",
      undici: "5.22.1",
      "yeoman-generator": "5.9.0",
      yo: "4.3.1",
      zx: "7.2.2",
    },
    peerDependencies: { prisma: "*" },
    peerDependenciesMeta: { prisma: { optional: !0 } },
    dependencies: {
      "@prisma/engines-version":
        "4.16.1-1.4bc8b6e1b66cb932731fb1bdbbc550d1e010de81",
    },
    sideEffects: !1,
  };
});
var Wm = {};
Rt(Wm, {
  DMMF: () => we,
  DMMFClass: () => We,
  Debug: () => Kn,
  Decimal: () => pe,
  Extensions: () => $n,
  MetricsClient: () => yt,
  NotFoundError: () => Pe,
  PrismaClientInitializationError: () => Q,
  PrismaClientKnownRequestError: () => ie,
  PrismaClientRustPanicError: () => be,
  PrismaClientUnknownRequestError: () => oe,
  PrismaClientValidationError: () => Y,
  Public: () => kn,
  Sql: () => ee,
  Types: () => In,
  decompressFromBase64: () => su,
  defineDmmfProperty: () => hs,
  empty: () => js,
  getPrismaClient: () => iu,
  join: () => Ls,
  makeDocument: () => cn,
  makeStrictEnum: () => ou,
  objectEnumValues: () => wt,
  raw: () => Fi,
  sqltag: () => Si,
  transformDocument: () => Va,
  unpack: () => pn,
  warnEnvConflicts: () => au,
  warnOnce: () => Ut,
});
module.exports = mu(Wm);
var $n = {};
Rt($n, { defineExtension: () => ao, getExtensionContext: () => lo });
function ao(e) {
  return typeof e == "function" ? e : (t) => t.$extends(e);
}
function lo(e) {
  return e;
}
var kn = {};
Rt(kn, { validator: () => uo });
function uo(...e) {
  return (t) => t;
}
var In = {};
Rt(In, { Extensions: () => co, Public: () => po, Utils: () => mo });
var co = {};
var po = {};
var mo = {};
var Nn,
  fo,
  go,
  yo,
  ho = !0;
typeof process < "u" &&
  (({
    FORCE_COLOR: Nn,
    NODE_DISABLE_COLORS: fo,
    NO_COLOR: go,
    TERM: yo,
  } = process.env || {}),
  (ho = process.stdout && process.stdout.isTTY));
var fu = {
  enabled:
    !fo && go == null && yo !== "dumb" && ((Nn != null && Nn !== "0") || ho),
};
function j(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, "g"),
    n = `\x1B[${e}m`,
    i = `\x1B[${t}m`;
  return function (o) {
    return !fu.enabled || o == null
      ? o
      : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
  };
}
var rf = j(0, 0),
  v = j(1, 22),
  $ = j(2, 22),
  nf = j(3, 23),
  ce = j(4, 24),
  of = j(7, 27),
  sf = j(8, 28),
  af = j(9, 29),
  lf = j(30, 39),
  R = j(31, 39),
  S = j(32, 39),
  Re = j(33, 39),
  st = j(34, 39),
  uf = j(35, 39),
  Ve = j(36, 39),
  Dt = j(37, 39),
  br = j(90, 39),
  cf = j(90, 39),
  pf = j(40, 49),
  df = j(41, 49),
  mf = j(42, 49),
  ff = j(43, 49),
  gf = j(44, 49),
  yf = j(45, 49),
  hf = j(46, 49),
  bf = j(47, 49);
var Pr = F(Co()),
  _u = 100,
  $t = [];
typeof process < "u" &&
  typeof process.stderr?.write != "function" &&
  (Pr.default.log = console.debug ?? console.log);
function Lu(e) {
  let t = (0, Pr.default)(e),
    r = Object.assign(
      (...n) => (
        (t.log = r.log),
        n.length !== 0 && $t.push([e, ...n]),
        $t.length > _u && $t.shift(),
        t("", ...n)
      ),
      t,
    );
  return r;
}
var Kn = Object.assign(Lu, Pr.default);
function Fo(e = 7500) {
  let t = $t.map((r) =>
    r.map((n) => (typeof n == "string" ? n : JSON.stringify(n))).join(" "),
  ).join(`
`);
  return t.length < e ? t : t.slice(-e);
}
function So() {
  $t.length = 0;
}
var V = Kn;
var Jn = F(Do()),
  Ar = F(require("fs"));
var ct = F(require("path"));
function $o(e) {
  let t = e.ignoreProcessEnv ? {} : process.env,
    r = (n) =>
      n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function (o, s) {
        let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
        if (!a) return o;
        let l = a[1],
          u,
          c;
        if (l === "\\") (c = a[0]), (u = c.replace("\\$", "$"));
        else {
          let p = a[2];
          (c = a[0].substring(l.length)),
            (u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || ""),
            (u = r(u));
        }
        return o.replace(c, u);
      }, n) ?? n;
  for (let n in e.parsed) {
    let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
    e.parsed[n] = r(i);
  }
  for (let n in e.parsed) t[n] = e.parsed[n];
  return e;
}
var Un = V("prisma:tryLoadEnv");
function kt(
  { rootEnvPath: e, schemaEnvPath: t },
  r = { conflictCheck: "none" },
) {
  let n = ko(e);
  r.conflictCheck !== "none" && Wu(n, t, r.conflictCheck);
  let i = null;
  return (
    Io(n?.path, t) || (i = ko(t)),
    !n && !i && Un("No Environment variables loaded"),
    i?.dotenvResult.error
      ? console.error(R(v("Schema Env Error: ")) + i.dotenvResult.error)
      : {
          message: [n?.message, i?.message].filter(Boolean).join(`
`),
          parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed },
        }
  );
}
function Wu(e, t, r) {
  let n = e?.dotenvResult.parsed,
    i = !Io(e?.path, t);
  if (n && t && i && Ar.default.existsSync(t)) {
    let o = Jn.default.parse(Ar.default.readFileSync(t)),
      s = [];
    for (let a in o) n[a] === o[a] && s.push(a);
    if (s.length > 0) {
      let a = ct.default.relative(process.cwd(), e.path),
        l = ct.default.relative(process.cwd(), t);
      if (r === "error") {
        let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${ce(a)} and ${ce(l)}
Conflicting env vars:
${s.map((c) => `  ${v(c)}`).join(`
`)}

We suggest to move the contents of ${ce(l)} to ${ce(a)} to consolidate your env vars.
`;
        throw new Error(u);
      } else if (r === "warn") {
        let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => v(c)).join(", ")} in ${ce(a)} and ${ce(l)}
Env vars from ${ce(l)} overwrite the ones from ${ce(a)}
      `;
        console.warn(`${Re("warn(prisma)")} ${u}`);
      }
    }
  }
}
function ko(e) {
  return Hu(e)
    ? (Un(`Environment variables loaded from ${e}`),
      {
        dotenvResult: $o(
          Jn.default.config({
            path: e,
            debug: process.env.DOTENV_CONFIG_DEBUG ? !0 : void 0,
          }),
        ),
        message: $(
          `Environment variables loaded from ${ct.default.relative(process.cwd(), e)}`,
        ),
        path: e,
      })
    : (Un(`Environment variables not found at ${e}`), null);
}
function Io(e, t) {
  return e && t && ct.default.resolve(e) === ct.default.resolve(t);
}
function Hu(e) {
  return Boolean(e && Ar.default.existsSync(e));
}
var No = "library";
function Gn(e) {
  let t = zu();
  return (
    t ||
    (e?.config.engineType === "library"
      ? "library"
      : e?.config.engineType === "binary"
        ? "binary"
        : No)
  );
}
function zu() {
  let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
}
var Zu = F(Wn());
function It(e) {
  return e instanceof Error;
}
function Hn(e) {
  let t = process.env.PRISMA_ENGINE_PROTOCOL;
  if (t === "json" || t == "graphql") return t;
  if (t !== void 0)
    throw new Error(
      `Invalid PRISMA_ENGINE_PROTOCOL env variable value. Expected 'graphql' or 'json', got '${t}'`,
    );
  return e?.previewFeatures?.includes("jsonProtocol") ? "json" : "graphql";
}
var Cr = Symbol("@ts-pattern/matcher"),
  qo = "@ts-pattern/anonymous-select-key",
  Bo = function (e) {
    return Boolean(e && typeof e == "object");
  },
  zn = function (e) {
    return e && !!e[Cr];
  },
  Xu = function e(t, r, n) {
    if (Bo(t)) {
      if (zn(t)) {
        var i = t[Cr]().match(r),
          o = i.matched,
          s = i.selections;
        return (
          o &&
            s &&
            Object.keys(s).forEach(function (l) {
              return n(l, s[l]);
            }),
          o
        );
      }
      if (!Bo(r)) return !1;
      if (Array.isArray(t))
        return (
          !!Array.isArray(r) &&
          t.length === r.length &&
          t.every(function (l, u) {
            return e(l, r[u], n);
          })
        );
      if (t instanceof Map)
        return (
          r instanceof Map &&
          Array.from(t.keys()).every(function (l) {
            return e(t.get(l), r.get(l), n);
          })
        );
      if (t instanceof Set) {
        if (!(r instanceof Set)) return !1;
        if (t.size === 0) return r.size === 0;
        if (t.size === 1) {
          var a = Array.from(t.values())[0];
          return zn(a)
            ? Array.from(r.values()).every(function (l) {
                return e(a, l, n);
              })
            : r.has(a);
        }
        return Array.from(t.values()).every(function (l) {
          return r.has(l);
        });
      }
      return Object.keys(t).every(function (l) {
        var u,
          c = t[l];
        return (
          (l in r || (zn((u = c)) && u[Cr]().matcherType === "optional")) &&
          e(c, r[l], n)
        );
      });
    }
    return Object.is(r, t);
  };
function tt(e) {
  var t;
  return (
    ((t = {})[Cr] = function () {
      return {
        match: function (r) {
          return { matched: Boolean(e(r)) };
        },
      };
    }),
    t
  );
}
var Lf = tt(function (e) {
  return !0;
});
var jf = tt(function (e) {
    return typeof e == "string";
  }),
  qf = tt(function (e) {
    return typeof e == "number";
  }),
  Bf = tt(function (e) {
    return typeof e == "boolean";
  }),
  Vf = tt(function (e) {
    return typeof e == "bigint";
  }),
  Kf = tt(function (e) {
    return typeof e == "symbol";
  }),
  Qf = tt(function (e) {
    return e == null;
  });
function pt(e) {
  return new ec(e, []);
}
var ec = (function () {
  function e(r, n) {
    (this.value = void 0),
      (this.cases = void 0),
      (this.value = r),
      (this.cases = n);
  }
  var t = e.prototype;
  return (
    (t.with = function () {
      var r = [].slice.call(arguments),
        n = r[r.length - 1],
        i = [r[0]],
        o = [];
      return (
        r.length === 3 && typeof r[1] == "function"
          ? (i.push(r[0]), o.push(r[1]))
          : r.length > 2 && i.push.apply(i, r.slice(1, r.length - 1)),
        new e(
          this.value,
          this.cases.concat([
            {
              match: function (s) {
                var a = {},
                  l = Boolean(
                    i.some(function (u) {
                      return Xu(u, s, function (c, p) {
                        a[c] = p;
                      });
                    }) &&
                      o.every(function (u) {
                        return u(s);
                      }),
                  );
                return {
                  matched: l,
                  value: l && Object.keys(a).length ? (qo in a ? a[qo] : a) : s,
                };
              },
              handler: n,
            },
          ]),
        )
      );
    }),
    (t.when = function (r, n) {
      return new e(
        this.value,
        this.cases.concat([
          {
            match: function (i) {
              return { matched: Boolean(r(i)), value: i };
            },
            handler: n,
          },
        ]),
      );
    }),
    (t.otherwise = function (r) {
      return new e(
        this.value,
        this.cases.concat([
          {
            match: function (n) {
              return { matched: !0, value: n };
            },
            handler: r,
          },
        ]),
      ).run();
    }),
    (t.exhaustive = function () {
      return this.run();
    }),
    (t.run = function () {
      for (var r = this.value, n = void 0, i = 0; i < this.cases.length; i++) {
        var o = this.cases[i],
          s = o.match(this.value);
        if (s.matched) {
          (r = s.value), (n = o.handler);
          break;
        }
      }
      if (!n) {
        var a;
        try {
          a = JSON.stringify(this.value);
        } catch {
          a = this.value;
        }
        throw new Error(
          "Pattern matching error: no pattern matches value " + a,
        );
      }
      return n(r, this.value);
    }),
    e
  );
})();
var Vo = F(require("fs"));
function Yn() {
  let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
  if (!(e && Vo.default.existsSync(e)) && process.arch === "ia32")
    throw new Error(
      'The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)',
    );
}
var Fr = "libquery_engine";
function Zn(e, t) {
  let r = t === "url";
  return e.includes("windows")
    ? r
      ? "query_engine.dll.node"
      : `query_engine-${e}.dll.node`
    : e.includes("darwin")
      ? r
        ? `${Fr}.dylib.node`
        : `${Fr}-${e}.dylib.node`
      : r
        ? `${Fr}.so.node`
        : `${Fr}-${e}.so.node`;
}
var Xo = F(require("child_process")),
  ri = F(require("fs/promises")),
  Rr = F(require("os"));
var es = require("util");
var zo = F(Ho());
function Lt(e) {
  return (0, zo.default)(e, e, { fallback: ce });
}
var nc = { warn: Re("prisma:warn") },
  ic = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
function jt(e, ...t) {
  ic.warn() && console.warn(`${nc.warn} ${e}`, ...t);
}
var oc = (0, es.promisify)(Xo.default.exec),
  fe = V("prisma:get-platform"),
  sc = ["1.0.x", "1.1.x", "3.0.x"];
async function ts() {
  let e = Rr.default.platform(),
    t = process.arch;
  if (e === "freebsd") {
    let s = await Dr("freebsd-version");
    if (s && s.trim().length > 0) {
      let l = /^(\d+)\.?/.exec(s);
      if (l)
        return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
    }
  }
  if (e !== "linux") return { platform: e, arch: t };
  let r = await lc(),
    n = await yc(),
    i = cc({ arch: t, archFromUname: n, familyDistro: r.familyDistro }),
    { libssl: o } = await pc(i);
  return { platform: "linux", libssl: o, arch: t, archFromUname: n, ...r };
}
function ac(e) {
  let t = /^ID="?([^"\n]*)"?$/im,
    r = /^ID_LIKE="?([^"\n]*)"?$/im,
    n = t.exec(e),
    i = (n && n[1] && n[1].toLowerCase()) || "",
    o = r.exec(e),
    s = (o && o[1] && o[1].toLowerCase()) || "",
    a = pt({ id: i, idLike: s })
      .with({ id: "alpine" }, ({ id: l }) => ({
        targetDistro: "musl",
        familyDistro: l,
        originalDistro: l,
      }))
      .with({ id: "raspbian" }, ({ id: l }) => ({
        targetDistro: "arm",
        familyDistro: "debian",
        originalDistro: l,
      }))
      .with({ id: "nixos" }, ({ id: l }) => ({
        targetDistro: "nixos",
        originalDistro: l,
        familyDistro: "nixos",
      }))
      .with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({
        targetDistro: "debian",
        familyDistro: "debian",
        originalDistro: l,
      }))
      .with(
        { id: "rhel" },
        { id: "centos" },
        { id: "fedora" },
        ({ id: l }) => ({
          targetDistro: "rhel",
          familyDistro: "rhel",
          originalDistro: l,
        }),
      )
      .when(
        ({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"),
        ({ id: l }) => ({
          targetDistro: "debian",
          familyDistro: "debian",
          originalDistro: l,
        }),
      )
      .when(
        ({ idLike: l }) => i === "arch" || l.includes("arch"),
        ({ id: l }) => ({
          targetDistro: "debian",
          familyDistro: "arch",
          originalDistro: l,
        }),
      )
      .when(
        ({ idLike: l }) =>
          l.includes("centos") ||
          l.includes("fedora") ||
          l.includes("rhel") ||
          l.includes("suse"),
        ({ id: l }) => ({
          targetDistro: "rhel",
          familyDistro: "rhel",
          originalDistro: l,
        }),
      )
      .otherwise(({ id: l }) => ({
        targetDistro: void 0,
        familyDistro: void 0,
        originalDistro: l,
      }));
  return (
    fe(`Found distro info:
${JSON.stringify(a, null, 2)}`),
    a
  );
}
async function lc() {
  let e = "/etc/os-release";
  try {
    let t = await ri.default.readFile(e, { encoding: "utf-8" });
    return ac(t);
  } catch {
    return {
      targetDistro: void 0,
      familyDistro: void 0,
      originalDistro: void 0,
    };
  }
}
function uc(e) {
  let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
  if (t) {
    let r = `${t[1]}.x`;
    return rs(r);
  }
}
function Yo(e) {
  let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
  if (t) {
    let r = `${t[1]}${t[2] ?? ".0"}.x`;
    return rs(r);
  }
}
function rs(e) {
  let t = (() => {
    if (is(e)) return e;
    let r = e.split(".");
    return (r[1] = "0"), r.join(".");
  })();
  if (sc.includes(t)) return t;
}
function cc(e) {
  return pt(e)
    .with(
      { familyDistro: "musl" },
      () => (fe('Trying platform-specific paths for "alpine"'), ["/lib"]),
    )
    .with(
      { familyDistro: "debian" },
      ({ archFromUname: t }) => (
        fe('Trying platform-specific paths for "debian" (and "ubuntu")'),
        [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`]
      ),
    )
    .with(
      { familyDistro: "rhel" },
      () => (
        fe('Trying platform-specific paths for "rhel"'),
        ["/lib64", "/usr/lib64"]
      ),
    )
    .otherwise(
      ({ familyDistro: t, arch: r, archFromUname: n }) => (
        fe(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`),
        []
      ),
    );
}
async function pc(e) {
  let t = 'grep -v "libssl.so.0"',
    r = await Zo(e);
  if (r) {
    fe(`Found libssl.so file using platform-specific paths: ${r}`);
    let o = Yo(r);
    if ((fe(`The parsed libssl version is: ${o}`), o))
      return { libssl: o, strategy: "libssl-specific-path" };
  }
  fe('Falling back to "ldconfig" and other generic paths');
  let n = await Dr(
    `ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`,
  );
  if ((n || (n = await Zo(["/lib64", "/usr/lib64", "/lib"])), n)) {
    fe(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
    let o = Yo(n);
    if ((fe(`The parsed libssl version is: ${o}`), o))
      return { libssl: o, strategy: "ldconfig" };
  }
  let i = await Dr("openssl version -v");
  if (i) {
    fe(`Found openssl binary with version: ${i}`);
    let o = uc(i);
    if ((fe(`The parsed openssl version is: ${o}`), o))
      return { libssl: o, strategy: "openssl-binary" };
  }
  return fe("Couldn't find any version of libssl or OpenSSL in the system"), {};
}
async function Zo(e) {
  for (let t of e) {
    let r = await dc(t);
    if (r) return r;
  }
}
async function dc(e) {
  try {
    return (await ri.default.readdir(e)).find(
      (r) => r.startsWith("libssl.so") && !r.startsWith("libssl.so.0"),
    );
  } catch (t) {
    if (t.code === "ENOENT") return;
    throw t;
  }
}
async function ft() {
  let { binaryTarget: e } = await ns();
  return e;
}
function mc(e) {
  return e.binaryTarget !== void 0;
}
async function ni() {
  let { memoized: e, ...t } = await ns();
  return t;
}
var Or = {};
async function ns() {
  if (mc(Or)) return Promise.resolve({ ...Or, memoized: !0 });
  let e = await ts(),
    t = fc(e);
  return (Or = { ...e, binaryTarget: t }), { ...Or, memoized: !1 };
}
function fc(e) {
  let {
    platform: t,
    arch: r,
    archFromUname: n,
    libssl: i,
    targetDistro: o,
    familyDistro: s,
    originalDistro: a,
  } = e;
  t === "linux" &&
    !["x64", "arm64"].includes(r) &&
    jt(
      `Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`,
    );
  let l = "1.1.x";
  if (t === "linux" && i === void 0) {
    let c = pt({ familyDistro: s })
      .with(
        { familyDistro: "debian" },
        () =>
          "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.",
      )
      .otherwise(
        () =>
          "Please manually install OpenSSL and try installing Prisma again.",
      );
    jt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
  }
  let u = "debian";
  if (
    (t === "linux" &&
      o === void 0 &&
      jt(`Prisma doesn't know which engines to download for the Linux distro "${a}". Falling back to Prisma engines built "${u}".
Please report your experience by creating an issue at ${Lt("https://github.com/prisma/prisma/issues")} so we can add your distro to the list of known supported distros.`),
    t === "darwin" && r === "arm64")
  )
    return "darwin-arm64";
  if (t === "darwin") return "darwin";
  if (t === "win32") return "windows";
  if (t === "freebsd") return o;
  if (t === "openbsd") return "openbsd";
  if (t === "netbsd") return "netbsd";
  if (t === "linux" && o === "nixos") return "linux-nixos";
  if (t === "linux" && r === "arm64")
    return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
  if (t === "linux" && r === "arm") return `linux-arm-openssl-${i || l}`;
  if (t === "linux" && o === "musl") {
    let c = "linux-musl";
    return !i || is(i) ? c : `${c}-openssl-${i}`;
  }
  return t === "linux" && o && i
    ? `${o}-openssl-${i}`
    : (t !== "linux" &&
        jt(
          `Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`,
        ),
      i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
}
async function gc(e) {
  try {
    return await e();
  } catch {
    return;
  }
}
function Dr(e) {
  return gc(async () => {
    let t = await oc(e);
    return fe(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
  });
}
async function yc() {
  return typeof Rr.default.machine == "function"
    ? Rr.default.machine()
    : (await Dr("uname -m"))?.trim();
}
function is(e) {
  return e.startsWith("1.");
}
var ii = [
  "darwin",
  "darwin-arm64",
  "debian-openssl-1.0.x",
  "debian-openssl-1.1.x",
  "debian-openssl-3.0.x",
  "rhel-openssl-1.0.x",
  "rhel-openssl-1.1.x",
  "rhel-openssl-3.0.x",
  "linux-arm64-openssl-1.1.x",
  "linux-arm64-openssl-1.0.x",
  "linux-arm64-openssl-3.0.x",
  "linux-arm-openssl-1.1.x",
  "linux-arm-openssl-1.0.x",
  "linux-arm-openssl-3.0.x",
  "linux-musl",
  "linux-musl-openssl-3.0.x",
  "linux-musl-arm64-openssl-1.1.x",
  "linux-musl-arm64-openssl-3.0.x",
  "linux-nixos",
  "linux-static-x64",
  "linux-static-arm64",
  "windows",
  "freebsd11",
  "freebsd12",
  "freebsd13",
  "openbsd",
  "netbsd",
  "arm",
];
var bc = F(oi());
var q = F(require("path")),
  xc = F(oi()),
  hg = V("prisma:engines");
function ss() {
  return q.default.join(__dirname, "../");
}
var bg = "libquery-engine";
q.default.join(__dirname, "../query-engine-darwin");
q.default.join(__dirname, "../query-engine-darwin-arm64");
q.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
q.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
q.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
q.default.join(__dirname, "../query-engine-linux-static-x64");
q.default.join(__dirname, "../query-engine-linux-static-arm64");
q.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
q.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
q.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
q.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
q.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
q.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
q.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
q.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
q.default.join(
  __dirname,
  "../libquery_engine-linux-arm64-openssl-1.0.x.so.node",
);
q.default.join(
  __dirname,
  "../libquery_engine-linux-arm64-openssl-1.1.x.so.node",
);
q.default.join(
  __dirname,
  "../libquery_engine-linux-arm64-openssl-3.0.x.so.node",
);
q.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
q.default.join(
  __dirname,
  "../libquery_engine-linux-musl-openssl-3.0.x.so.node",
);
q.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
q.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
q.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
q.default.join(__dirname, "../query_engine-windows.dll.node");
var si = F(require("fs")),
  as = V("plusX");
function ai(e) {
  let t = si.default.statSync(e),
    r = t.mode | 64 | 8 | 1;
  if (t.mode === r) {
    as(`Execution permissions of ${e} are fine`);
    return;
  }
  let n = r.toString(8).slice(-3);
  as(`Have to call plusX on ${e}`), si.default.chmodSync(e, n);
}
function li(e) {
  let t = e.e,
    r = (a) =>
      `Prisma cannot find the required \`${a}\` system library in your system`,
    n = t.message.includes("cannot open shared object file"),
    i = `Please refer to the documentation about Prisma's system requirements: ${Lt("https://pris.ly/d/system-requirements")}`,
    o = `Unable to require(\`${$(e.id)}\`).`,
    s = pt({ message: t.message, code: t.code })
      .with({ code: "ENOENT" }, () => "File does not exist.")
      .when(
        ({ message: a }) => n && a.includes("libz"),
        () => `${r("libz")}. Please install it and try again.`,
      )
      .when(
        ({ message: a }) => n && a.includes("libgcc_s"),
        () => `${r("libgcc_s")}. Please install it and try again.`,
      )
      .when(
        ({ message: a }) => n && a.includes("libssl"),
        () => {
          let a = e.platformInfo.libssl
            ? `openssl-${e.platformInfo.libssl}`
            : "openssl";
          return `${r("libssl")}. Please install ${a} and try again.`;
        },
      )
      .when(
        ({ message: a }) => a.includes("GLIBC"),
        () =>
          `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`,
      )
      .when(
        ({ message: a }) =>
          e.platformInfo.platform === "linux" && a.includes("symbol not found"),
        () =>
          `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`,
      )
      .otherwise(
        () =>
          `The Prisma engines do not seem to be compatible with your system. ${i}`,
      );
  return `${o}
${s}

Details: ${t.message}`;
}
var we;
((t) => {
  let e;
  ((x) => (
    (x.findUnique = "findUnique"),
    (x.findUniqueOrThrow = "findUniqueOrThrow"),
    (x.findFirst = "findFirst"),
    (x.findFirstOrThrow = "findFirstOrThrow"),
    (x.findMany = "findMany"),
    (x.create = "create"),
    (x.createMany = "createMany"),
    (x.update = "update"),
    (x.updateMany = "updateMany"),
    (x.upsert = "upsert"),
    (x.delete = "delete"),
    (x.deleteMany = "deleteMany"),
    (x.groupBy = "groupBy"),
    (x.count = "count"),
    (x.aggregate = "aggregate"),
    (x.findRaw = "findRaw"),
    (x.aggregateRaw = "aggregateRaw")
  ))((e = t.ModelAction || (t.ModelAction = {})));
})(we || (we = {}));
var us = F(qt());
function ci(e) {
  return String(new ui(e));
}
var ui = class {
  constructor(t) {
    this.config = t;
  }
  toString() {
    let { config: t } = this,
      r = t.provider.fromEnvVar
        ? `env("${t.provider.fromEnvVar}")`
        : t.provider.value,
      n = JSON.parse(
        JSON.stringify({ provider: r, binaryTargets: wc(t.binaryTargets) }),
      );
    return `generator ${t.name} {
${(0, us.default)(Ec(n), 2)}
}`;
  }
};
function wc(e) {
  let t;
  if (e.length > 0) {
    let r = e.find((n) => n.fromEnvVar !== null);
    r
      ? (t = `env("${r.fromEnvVar}")`)
      : (t = e.map((n) => (n.native ? "native" : n.value)));
  } else t = void 0;
  return t;
}
function Ec(e) {
  let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
  return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${Tc(n)}`).join(`
`);
}
function Tc(e) {
  return JSON.parse(
    JSON.stringify(e, (t, r) =>
      Array.isArray(r)
        ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]`
        : JSON.stringify(r),
    ),
  );
}
var Vt = {};
Rt(Vt, {
  error: () => vc,
  info: () => Mc,
  log: () => Pc,
  query: () => Ac,
  should: () => cs,
  tags: () => Bt,
  warn: () => pi,
});
var Bt = {
    error: R("prisma:error"),
    warn: Re("prisma:warn"),
    info: Ve("prisma:info"),
    query: st("prisma:query"),
  },
  cs = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
function Pc(...e) {
  console.log(...e);
}
function pi(e, ...t) {
  cs.warn() && console.warn(`${Bt.warn} ${e}`, ...t);
}
function Mc(e, ...t) {
  console.info(`${Bt.info} ${e}`, ...t);
}
function vc(e, ...t) {
  console.error(`${Bt.error} ${e}`, ...t);
}
function Ac(e, ...t) {
  console.log(`${Bt.query} ${e}`, ...t);
}
function Me(e, t) {
  throw new Error(t);
}
function kr(e) {
  let t;
  return (...r) =>
    t ||
    ((t = e(...r).catch((n) => {
      throw ((t = void 0), n);
    })),
    t);
}
var Qt = F(require("path"));
function di(e) {
  return Qt.default.sep === Qt.default.posix.sep
    ? e
    : e.split(Qt.default.sep).join(Qt.default.posix.sep);
}
function mi(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var fi = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {});
function gt(e, t) {
  let r = {};
  for (let n of Object.keys(e)) r[n] = t(e[n], n);
  return r;
}
function gi(e, t) {
  if (e.length === 0) return;
  let r = e[0];
  for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
  return r;
}
function ge(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
var gs = new Set(),
  Ut = (e, t, ...r) => {
    gs.has(e) || (gs.add(e), pi(t, ...r));
  };
var Q = class extends Error {
  constructor(r, n, i) {
    super(r);
    (this.name = "PrismaClientInitializationError"),
      (this.clientVersion = n),
      (this.errorCode = i),
      Error.captureStackTrace(Q);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
ge(Q, "PrismaClientInitializationError");
var ie = class extends Error {
  constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) {
    super(r);
    (this.name = "PrismaClientKnownRequestError"),
      (this.code = n),
      (this.clientVersion = i),
      (this.meta = o),
      Object.defineProperty(this, "batchRequestIdx", {
        value: s,
        enumerable: !1,
        writable: !0,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
ge(ie, "PrismaClientKnownRequestError");
var be = class extends Error {
  constructor(r, n) {
    super(r);
    (this.name = "PrismaClientRustPanicError"), (this.clientVersion = n);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
ge(be, "PrismaClientRustPanicError");
var oe = class extends Error {
  constructor(r, { clientVersion: n, batchRequestIdx: i }) {
    super(r);
    (this.name = "PrismaClientUnknownRequestError"),
      (this.clientVersion = n),
      Object.defineProperty(this, "batchRequestIdx", {
        value: i,
        writable: !0,
        enumerable: !1,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
ge(oe, "PrismaClientUnknownRequestError");
var yt = class {
  constructor(t) {
    this._engine = t;
  }
  prometheus(t) {
    return this._engine.metrics({ format: "prometheus", ...t });
  }
  json(t) {
    return this._engine.metrics({ format: "json", ...t });
  }
};
function Jt(e) {
  let t;
  return {
    get() {
      return t || (t = { value: e() }), t.value;
    },
  };
}
function ys(e) {
  return { models: yi(e.models), enums: yi(e.enums), types: yi(e.types) };
}
function yi(e) {
  let t = {};
  for (let { name: r, ...n } of e) t[r] = n;
  return t;
}
function hs(e, t) {
  let r = Jt(() => Sc(t));
  Object.defineProperty(e, "dmmf", { get: () => r.get() });
}
function Sc(e) {
  return {
    datamodel: { models: hi(e.models), enums: hi(e.enums), types: hi(e.types) },
  };
}
function hi(e) {
  return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
function bs(e, t) {
  for (let r of t)
    for (let n of Object.getOwnPropertyNames(r.prototype))
      Object.defineProperty(
        e.prototype,
        n,
        Object.getOwnPropertyDescriptor(r.prototype, n) ?? Object.create(null),
      );
}
var ht = 9e15,
  Ge = 1e9,
  bi = "0123456789abcdef",
  _r =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  Lr =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  xi = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -ht,
    maxE: ht,
    crypto: !1,
  },
  Ts,
  je,
  M = !0,
  qr = "[DecimalError] ",
  Je = qr + "Invalid argument: ",
  Ps = qr + "Precision limit exceeded",
  Ms = qr + "crypto unavailable",
  vs = "[object Decimal]",
  se = Math.floor,
  G = Math.pow,
  Oc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  Rc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  Dc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  As = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Ae = 1e7,
  P = 7,
  $c = 9007199254740991,
  kc = _r.length - 1,
  wi = Lr.length - 1,
  h = { toStringTag: vs };
h.absoluteValue = h.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), T(e);
};
h.ceil = function () {
  return T(new this.constructor(this), this.e + 1, 2);
};
h.clampedTo = h.clamp = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
  if (e.gt(t)) throw Error(Je + t);
  return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
h.comparedTo = h.cmp = function (e) {
  var t,
    r,
    n,
    i,
    o = this,
    s = o.d,
    a = (e = new o.constructor(e)).d,
    l = o.s,
    u = e.s;
  if (!s || !a)
    return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ (l < 0) ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
  if (l !== u) return l;
  if (o.e !== e.e) return (o.e > e.e) ^ (l < 0) ? 1 : -1;
  for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (s[t] !== a[t]) return (s[t] > a[t]) ^ (l < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (l < 0) ? 1 : -1;
};
h.cosine = h.cos = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.d
    ? r.d[0]
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + P),
        (n.rounding = 1),
        (r = Ic(n, Rs(n, r))),
        (n.precision = e),
        (n.rounding = t),
        T(je == 2 || je == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
h.cubeRoot = h.cbrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c = this,
    p = c.constructor;
  if (!c.isFinite() || c.isZero()) return new p(c);
  for (
    M = !1,
      o = c.s * G(c.s * c, 1 / 3),
      !o || Math.abs(o) == 1 / 0
        ? ((r = X(c.d)),
          (e = c.e),
          (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"),
          (o = G(r, 1 / 3)),
          (e = se((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          o == 1 / 0
            ? (r = "5e" + e)
            : ((r = o.toExponential()),
              (r = r.slice(0, r.indexOf("e") + 1) + e)),
          (n = new p(r)),
          (n.s = c.s))
        : (n = new p(o.toString())),
      s = (e = p.precision) + 3;
    ;

  )
    if (
      ((a = n),
      (l = a.times(a).times(a)),
      (u = l.plus(c)),
      (n = _(u.plus(c).times(a), u.plus(l), s + 2, 1)),
      X(a.d).slice(0, s) === (r = X(n.d)).slice(0, s))
    )
      if (((r = r.slice(s - 3, s + 1)), r == "9999" || (!i && r == "4999"))) {
        if (!i && (T(a, e + 1, 0), a.times(a).times(a).eq(c))) {
          n = a;
          break;
        }
        (s += 4), (i = 1);
      } else {
        (!+r || (!+r.slice(1) && r.charAt(0) == "5")) &&
          (T(n, e + 1, 1), (t = !n.times(n).times(n).eq(c)));
        break;
      }
  return (M = !0), T(n, e, p.rounding, t);
};
h.decimalPlaces = h.dp = function () {
  var e,
    t = this.d,
    r = NaN;
  if (t) {
    if (((e = t.length - 1), (r = (e - se(this.e / P)) * P), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
h.dividedBy = h.div = function (e) {
  return _(this, new this.constructor(e));
};
h.dividedToIntegerBy = h.divToInt = function (e) {
  var t = this,
    r = t.constructor;
  return T(_(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
h.equals = h.eq = function (e) {
  return this.cmp(e) === 0;
};
h.floor = function () {
  return T(new this.constructor(this), this.e + 1, 3);
};
h.greaterThan = h.gt = function (e) {
  return this.cmp(e) > 0;
};
h.greaterThanOrEqualTo = h.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
h.hyperbolicCosine = h.cosh = function () {
  var e,
    t,
    r,
    n,
    i,
    o = this,
    s = o.constructor,
    a = new s(1);
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  (r = s.precision),
    (n = s.rounding),
    (s.precision = r + Math.max(o.e, o.sd()) + 4),
    (s.rounding = 1),
    (i = o.d.length),
    i < 32
      ? ((e = Math.ceil(i / 3)), (t = (1 / Vr(4, e)).toString()))
      : ((e = 16), (t = "2.3283064365386962890625e-10")),
    (o = bt(s, 1, o.times(t), new s(1), !0));
  for (var l, u = e, c = new s(8); u--; )
    (l = o.times(o)), (o = a.minus(l.times(c.minus(l.times(c)))));
  return T(o, (s.precision = r), (s.rounding = n), !0);
};
h.hyperbolicSine = h.sinh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  if (!i.isFinite() || i.isZero()) return new o(i);
  if (
    ((t = o.precision),
    (r = o.rounding),
    (o.precision = t + Math.max(i.e, i.sd()) + 4),
    (o.rounding = 1),
    (n = i.d.length),
    n < 3)
  )
    i = bt(o, 2, i, i, !0);
  else {
    (e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (i = i.times(1 / Vr(5, e))),
      (i = bt(o, 2, i, i, !0));
    for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
      (s = i.times(i)), (i = i.times(a.plus(s.times(l.times(s).plus(u)))));
  }
  return (o.precision = t), (o.rounding = r), T(i, t, r, !0);
};
h.hyperbolicTangent = h.tanh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 7),
        (n.rounding = 1),
        _(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(r.s);
};
h.inverseCosine = h.acos = function () {
  var e,
    t = this,
    r = t.constructor,
    n = t.abs().cmp(1),
    i = r.precision,
    o = r.rounding;
  return n !== -1
    ? n === 0
      ? t.isNeg()
        ? ve(r, i, o)
        : new r(0)
      : new r(NaN)
    : t.isZero()
      ? ve(r, i + 4, o).times(0.5)
      : ((r.precision = i + 6),
        (r.rounding = 1),
        (t = t.asin()),
        (e = ve(r, i + 4, o).times(0.5)),
        (r.precision = i),
        (r.rounding = o),
        e.minus(t));
};
h.inverseHyperbolicCosine = h.acosh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
        (n.rounding = 1),
        (M = !1),
        (r = r.times(r).minus(1).sqrt().plus(r)),
        (M = !0),
        (n.precision = e),
        (n.rounding = t),
        r.ln())
      : new n(r);
};
h.inverseHyperbolicSine = h.asinh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
      (n.rounding = 1),
      (M = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (M = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln());
};
h.inverseHyperbolicTangent = h.atanh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isFinite()
    ? i.e >= 0
      ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
      : ((e = o.precision),
        (t = o.rounding),
        (n = i.sd()),
        Math.max(n, e) < 2 * -i.e - 1
          ? T(new o(i), e, t, !0)
          : ((o.precision = r = n - i.e),
            (i = _(i.plus(1), new o(1).minus(i), r + e, 1)),
            (o.precision = e + 4),
            (o.rounding = 1),
            (i = i.ln()),
            (o.precision = e),
            (o.rounding = t),
            i.times(0.5)))
    : new o(NaN);
};
h.inverseSine = h.asin = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isZero()
    ? new o(i)
    : ((t = i.abs().cmp(1)),
      (r = o.precision),
      (n = o.rounding),
      t !== -1
        ? t === 0
          ? ((e = ve(o, r + 4, n).times(0.5)), (e.s = i.s), e)
          : new o(NaN)
        : ((o.precision = r + 6),
          (o.rounding = 1),
          (i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan()),
          (o.precision = r),
          (o.rounding = n),
          i.times(2)));
};
h.inverseTangent = h.atan = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = this,
    c = u.constructor,
    p = c.precision,
    d = c.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new c(u);
    if (u.abs().eq(1) && p + 4 <= wi)
      return (s = ve(c, p + 4, d).times(0.25)), (s.s = u.s), s;
  } else {
    if (!u.s) return new c(NaN);
    if (p + 4 <= wi) return (s = ve(c, p + 4, d).times(0.5)), (s.s = u.s), s;
  }
  for (
    c.precision = a = p + 10,
      c.rounding = 1,
      r = Math.min(28, (a / P + 2) | 0),
      e = r;
    e;
    --e
  )
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (
    M = !1, t = Math.ceil(a / P), n = 1, l = u.times(u), s = new c(u), i = u;
    e !== -1;

  )
    if (
      ((i = i.times(l)),
      (o = s.minus(i.div((n += 2)))),
      (i = i.times(l)),
      (s = o.plus(i.div((n += 2)))),
      s.d[t] !== void 0)
    )
      for (e = t; s.d[e] === o.d[e] && e--; );
  return (
    r && (s = s.times(2 << (r - 1))),
    (M = !0),
    T(s, (c.precision = p), (c.rounding = d), !0)
  );
};
h.isFinite = function () {
  return !!this.d;
};
h.isInteger = h.isInt = function () {
  return !!this.d && se(this.e / P) > this.d.length - 2;
};
h.isNaN = function () {
  return !this.s;
};
h.isNegative = h.isNeg = function () {
  return this.s < 0;
};
h.isPositive = h.isPos = function () {
  return this.s > 0;
};
h.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
h.lessThan = h.lt = function (e) {
  return this.cmp(e) < 0;
};
h.lessThanOrEqualTo = h.lte = function (e) {
  return this.cmp(e) < 1;
};
h.logarithm = h.log = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = this,
    c = u.constructor,
    p = c.precision,
    d = c.rounding,
    m = 5;
  if (e == null) (e = new c(10)), (t = !0);
  else {
    if (((e = new c(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
      return new c(NaN);
    t = e.eq(10);
  }
  if (((r = u.d), u.s < 0 || !r || !r[0] || u.eq(1)))
    return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1) o = !0;
    else {
      for (i = r[0]; i % 10 === 0; ) i /= 10;
      o = i !== 1;
    }
  if (
    ((M = !1),
    (a = p + m),
    (s = Ue(u, a)),
    (n = t ? jr(c, a + 10) : Ue(e, a)),
    (l = _(s, n, a, 1)),
    Gt(l.d, (i = p), d))
  )
    do
      if (
        ((a += 10),
        (s = Ue(u, a)),
        (n = t ? jr(c, a + 10) : Ue(e, a)),
        (l = _(s, n, a, 1)),
        !o)
      ) {
        +X(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = T(l, p + 1, 0));
        break;
      }
    while (Gt(l.d, (i += 10), d));
  return (M = !0), T(l, p, d);
};
h.minus = h.sub = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    m = this,
    f = m.constructor;
  if (((e = new f(e)), !m.d || !e.d))
    return (
      !m.s || !e.s
        ? (e = new f(NaN))
        : m.d
          ? (e.s = -e.s)
          : (e = new f(e.d || m.s !== e.s ? m : NaN)),
      e
    );
  if (m.s != e.s) return (e.s = -e.s), m.plus(e);
  if (
    ((u = m.d), (d = e.d), (a = f.precision), (l = f.rounding), !u[0] || !d[0])
  ) {
    if (d[0]) e.s = -e.s;
    else if (u[0]) e = new f(m);
    else return new f(l === 3 ? -0 : 0);
    return M ? T(e, a, l) : e;
  }
  if (((r = se(e.e / P)), (c = se(m.e / P)), (u = u.slice()), (o = c - r), o)) {
    for (
      p = o < 0,
        p
          ? ((t = u), (o = -o), (s = d.length))
          : ((t = d), (r = c), (s = u.length)),
        n = Math.max(Math.ceil(a / P), s) + 2,
        o > n && ((o = n), (t.length = 1)),
        t.reverse(),
        n = o;
      n--;

    )
      t.push(0);
    t.reverse();
  } else {
    for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++)
      if (u[n] != d[n]) {
        p = u[n] < d[n];
        break;
      }
    o = 0;
  }
  for (
    p && ((t = u), (u = d), (d = t), (e.s = -e.s)),
      s = u.length,
      n = d.length - s;
    n > 0;
    --n
  )
    u[s++] = 0;
  for (n = d.length; n > o; ) {
    if (u[--n] < d[n]) {
      for (i = n; i && u[--i] === 0; ) u[i] = Ae - 1;
      --u[i], (u[n] += Ae);
    }
    u[n] -= d[n];
  }
  for (; u[--s] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --r;
  return u[0]
    ? ((e.d = u), (e.e = Br(u, r)), M ? T(e, a, l) : e)
    : new f(l === 3 ? -0 : 0);
};
h.modulo = h.mod = function (e) {
  var t,
    r = this,
    n = r.constructor;
  return (
    (e = new n(e)),
    !r.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (r.d && !r.d[0])
        ? T(new n(r), n.precision, n.rounding)
        : ((M = !1),
          n.modulo == 9
            ? ((t = _(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
            : (t = _(r, e, 0, n.modulo, 1)),
          (t = t.times(e)),
          (M = !0),
          r.minus(t))
  );
};
h.naturalExponential = h.exp = function () {
  return Ei(this);
};
h.naturalLogarithm = h.ln = function () {
  return Ue(this);
};
h.negated = h.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), T(e);
};
h.plus = h.add = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c,
    p = this,
    d = p.constructor;
  if (((e = new d(e)), !p.d || !e.d))
    return (
      !p.s || !e.s
        ? (e = new d(NaN))
        : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)),
      e
    );
  if (p.s != e.s) return (e.s = -e.s), p.minus(e);
  if (
    ((u = p.d), (c = e.d), (a = d.precision), (l = d.rounding), !u[0] || !c[0])
  )
    return c[0] || (e = new d(p)), M ? T(e, a, l) : e;
  if (((o = se(p.e / P)), (n = se(e.e / P)), (u = u.slice()), (i = o - n), i)) {
    for (
      i < 0
        ? ((r = u), (i = -i), (s = c.length))
        : ((r = c), (n = o), (s = u.length)),
        o = Math.ceil(a / P),
        s = o > s ? o + 1 : s + 1,
        i > s && ((i = s), (r.length = 1)),
        r.reverse();
      i--;

    )
      r.push(0);
    r.reverse();
  }
  for (
    s = u.length,
      i = c.length,
      s - i < 0 && ((i = s), (r = c), (c = u), (u = r)),
      t = 0;
    i;

  )
    (t = ((u[--i] = u[i] + c[i] + t) / Ae) | 0), (u[i] %= Ae);
  for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; ) u.pop();
  return (e.d = u), (e.e = Br(u, n)), M ? T(e, a, l) : e;
};
h.precision = h.sd = function (e) {
  var t,
    r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Je + e);
  return (
    r.d ? ((t = Cs(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
  );
};
h.round = function () {
  var e = this,
    t = e.constructor;
  return T(new t(e), e.e + 1, t.rounding);
};
h.sine = h.sin = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + P),
        (n.rounding = 1),
        (r = _c(n, Rs(n, r))),
        (n.precision = e),
        (n.rounding = t),
        T(je > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
h.squareRoot = h.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s = this,
    a = s.d,
    l = s.e,
    u = s.s,
    c = s.constructor;
  if (u !== 1 || !a || !a[0])
    return new c(!u || (u < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0);
  for (
    M = !1,
      u = Math.sqrt(+s),
      u == 0 || u == 1 / 0
        ? ((t = X(a)),
          (t.length + l) % 2 == 0 && (t += "0"),
          (u = Math.sqrt(t)),
          (l = se((l + 1) / 2) - (l < 0 || l % 2)),
          u == 1 / 0
            ? (t = "5e" + l)
            : ((t = u.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + l)),
          (n = new c(t)))
        : (n = new c(u.toString())),
      r = (l = c.precision) + 3;
    ;

  )
    if (
      ((o = n),
      (n = o.plus(_(s, o, r + 2, 1)).times(0.5)),
      X(o.d).slice(0, r) === (t = X(n.d)).slice(0, r))
    )
      if (((t = t.slice(r - 3, r + 1)), t == "9999" || (!i && t == "4999"))) {
        if (!i && (T(o, l + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        (r += 4), (i = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == "5")) &&
          (T(n, l + 1, 1), (e = !n.times(n).eq(s)));
        break;
      }
  return (M = !0), T(n, l, c.rounding, e);
};
h.tangent = h.tan = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 10),
        (n.rounding = 1),
        (r = r.sin()),
        (r.s = 1),
        (r = _(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        T(je == 2 || je == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
h.times = h.mul = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c = this,
    p = c.constructor,
    d = c.d,
    m = (e = new p(e)).d;
  if (((e.s *= c.s), !d || !d[0] || !m || !m[0]))
    return new p(
      !e.s || (d && !d[0] && !m) || (m && !m[0] && !d)
        ? NaN
        : !d || !m
          ? e.s / 0
          : e.s * 0,
    );
  for (
    r = se(c.e / P) + se(e.e / P),
      l = d.length,
      u = m.length,
      l < u && ((o = d), (d = m), (m = o), (s = l), (l = u), (u = s)),
      o = [],
      s = l + u,
      n = s;
    n--;

  )
    o.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      (a = o[i] + m[n] * d[i - n - 1] + t),
        (o[i--] = a % Ae | 0),
        (t = (a / Ae) | 0);
    o[i] = (o[i] + t) % Ae | 0;
  }
  for (; !o[--s]; ) o.pop();
  return (
    t ? ++r : o.shift(),
    (e.d = o),
    (e.e = Br(o, r)),
    M ? T(e, p.precision, p.rounding) : e
  );
};
h.toBinary = function (e, t) {
  return Pi(this, 2, e, t);
};
h.toDecimalPlaces = h.toDP = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (ye(e, 0, Ge),
        t === void 0 ? (t = n.rounding) : ye(t, 0, 8),
        T(r, e + r.e + 1, t))
  );
};
h.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = De(n, !0))
      : (ye(e, 0, Ge),
        t === void 0 ? (t = i.rounding) : ye(t, 0, 8),
        (n = T(new i(n), e + 1, t)),
        (r = De(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
h.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    o = i.constructor;
  return (
    e === void 0
      ? (r = De(i))
      : (ye(e, 0, Ge),
        t === void 0 ? (t = o.rounding) : ye(t, 0, 8),
        (n = T(new o(i), e + i.e + 1, t)),
        (r = De(n, !1, e + n.e + 1))),
    i.isNeg() && !i.isZero() ? "-" + r : r
  );
};
h.toFraction = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    m = this,
    f = m.d,
    g = m.constructor;
  if (!f) return new g(m);
  if (
    ((u = r = new g(1)),
    (n = l = new g(0)),
    (t = new g(n)),
    (o = t.e = Cs(f) - m.e - 1),
    (s = o % P),
    (t.d[0] = G(10, s < 0 ? P + s : s)),
    e == null)
  )
    e = o > 0 ? t : u;
  else {
    if (((a = new g(e)), !a.isInt() || a.lt(u))) throw Error(Je + a);
    e = a.gt(t) ? (o > 0 ? t : u) : a;
  }
  for (
    M = !1,
      a = new g(X(f)),
      c = g.precision,
      g.precision = o = f.length * P * 2;
    (p = _(a, t, 0, 1, 1)), (i = r.plus(p.times(n))), i.cmp(e) != 1;

  )
    (r = n),
      (n = i),
      (i = u),
      (u = l.plus(p.times(i))),
      (l = i),
      (i = t),
      (t = a.minus(p.times(i))),
      (a = i);
  return (
    (i = _(e.minus(r), n, 0, 1, 1)),
    (l = l.plus(i.times(u))),
    (r = r.plus(i.times(n))),
    (l.s = u.s = m.s),
    (d =
      _(u, n, o, 1)
        .minus(m)
        .abs()
        .cmp(_(l, r, o, 1).minus(m).abs()) < 1
        ? [u, n]
        : [l, r]),
    (g.precision = c),
    (M = !0),
    d
  );
};
h.toHexadecimal = h.toHex = function (e, t) {
  return Pi(this, 16, e, t);
};
h.toNearest = function (e, t) {
  var r = this,
    n = r.constructor;
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r;
    (e = new n(1)), (t = n.rounding);
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : ye(t, 0, 8), !r.d))
      return e.s ? r : e;
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return (
    e.d[0]
      ? ((M = !1), (r = _(r, e, 0, t, 1).times(e)), (M = !0), T(r))
      : ((e.s = r.s), (r = e)),
    r
  );
};
h.toNumber = function () {
  return +this;
};
h.toOctal = function (e, t) {
  return Pi(this, 8, e, t);
};
h.toPower = h.pow = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a = this,
    l = a.constructor,
    u = +(e = new l(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(G(+a, u));
  if (((a = new l(a)), a.eq(1))) return a;
  if (((n = l.precision), (o = l.rounding), e.eq(1))) return T(a, n, o);
  if (((t = se(e.e / P)), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= $c))
    return (i = Fs(l, a, r, n)), e.s < 0 ? new l(1).div(i) : T(i, n, o);
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new l(NaN);
    if (
      ((e.d[t] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
    )
      return (a.s = s), a;
  }
  return (
    (r = G(+a, u)),
    (t =
      r == 0 || !isFinite(r)
        ? se(u * (Math.log("0." + X(a.d)) / Math.LN10 + a.e + 1))
        : new l(r + "").e),
    t > l.maxE + 1 || t < l.minE - 1
      ? new l(t > 0 ? s / 0 : 0)
      : ((M = !1),
        (l.rounding = a.s = 1),
        (r = Math.min(12, (t + "").length)),
        (i = Ei(e.times(Ue(a, n + r)), n)),
        i.d &&
          ((i = T(i, n + 5, 1)),
          Gt(i.d, n, o) &&
            ((t = n + 10),
            (i = T(Ei(e.times(Ue(a, t + r)), t), t + 5, 1)),
            +X(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = T(i, n + 1, 0)))),
        (i.s = s),
        (M = !0),
        (l.rounding = o),
        T(i, n, o))
  );
};
h.toPrecision = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = De(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
      : (ye(e, 1, Ge),
        t === void 0 ? (t = i.rounding) : ye(t, 0, 8),
        (n = T(new i(n), e, t)),
        (r = De(n, e <= n.e || n.e <= i.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
h.toSignificantDigits = h.toSD = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (ye(e, 1, Ge), t === void 0 ? (t = n.rounding) : ye(t, 0, 8)),
    T(new n(r), e, t)
  );
};
h.toString = function () {
  var e = this,
    t = e.constructor,
    r = De(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
h.truncated = h.trunc = function () {
  return T(new this.constructor(this), this.e + 1, 1);
};
h.valueOf = h.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = De(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function X(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    o = "",
    s = e[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      (n = e[t] + ""), (r = P - n.length), r && (o += Qe(r)), (o += n);
    (s = e[t]), (n = s + ""), (r = P - n.length), r && (o += Qe(r));
  } else if (s === 0) return "0";
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function ye(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Je + e);
}
function Gt(e, t, r, n) {
  var i, o, s, a;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return (
    --t < 0 ? ((t += P), (i = 0)) : ((i = Math.ceil((t + 1) / P)), (t %= P)),
    (o = G(10, P - t)),
    (a = e[i] % o | 0),
    n == null
      ? t < 3
        ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
          (s =
            (r < 4 && a == 99999) ||
            (r > 3 && a == 49999) ||
            a == 5e4 ||
            a == 0))
        : (s =
            (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
              ((e[i + 1] / o / 100) | 0) == G(10, t - 2) - 1) ||
            ((a == o / 2 || a == 0) && ((e[i + 1] / o / 100) | 0) == 0))
      : t < 4
        ? (t == 0
            ? (a = (a / 1e3) | 0)
            : t == 1
              ? (a = (a / 100) | 0)
              : t == 2 && (a = (a / 10) | 0),
          (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
        : (s =
            (((n || r < 4) && a + 1 == o) || (!n && r > 3 && a + 1 == o / 2)) &&
            ((e[i + 1] / o / 1e3) | 0) == G(10, t - 3) - 1),
    s
  );
}
function Nr(e, t, r) {
  for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t;
    for (i[0] += bi.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
      i[n] > r - 1 &&
        (i[n + 1] === void 0 && (i[n + 1] = 0),
        (i[n + 1] += (i[n] / r) | 0),
        (i[n] %= r));
  }
  return i.reverse();
}
function Ic(e, t) {
  var r, n, i;
  if (t.isZero()) return t;
  (n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (i = (1 / Vr(4, r)).toString()))
      : ((r = 16), (i = "2.3283064365386962890625e-10")),
    (e.precision += r),
    (t = bt(e, 1, t.times(i), new e(1)));
  for (var o = r; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return (e.precision -= r), t;
}
var _ = (function () {
  function e(n, i, o) {
    var s,
      a = 0,
      l = n.length;
    for (n = n.slice(); l--; )
      (s = n[l] * i + a), (n[l] = s % o | 0), (a = (s / o) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, i, o, s) {
    var a, l;
    if (o != s) l = o > s ? 1 : -1;
    else
      for (a = l = 0; a < o; a++)
        if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, o, s) {
    for (var a = 0; o--; )
      (n[o] -= a), (a = n[o] < i[o] ? 1 : 0), (n[o] = a * s + n[o] - i[o]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, o, s, a, l) {
    var u,
      c,
      p,
      d,
      m,
      f,
      g,
      b,
      y,
      w,
      x,
      E,
      C,
      O,
      B,
      k,
      U,
      J,
      re,
      ot,
      yr = n.constructor,
      Dn = n.s == i.s ? 1 : -1,
      ne = n.d,
      N = i.d;
    if (!ne || !ne[0] || !N || !N[0])
      return new yr(
        !n.s || !i.s || (ne ? N && ne[0] == N[0] : !N)
          ? NaN
          : (ne && ne[0] == 0) || !N
            ? Dn * 0
            : Dn / 0,
      );
    for (
      l
        ? ((m = 1), (c = n.e - i.e))
        : ((l = Ae), (m = P), (c = se(n.e / m) - se(i.e / m))),
        re = N.length,
        U = ne.length,
        y = new yr(Dn),
        w = y.d = [],
        p = 0;
      N[p] == (ne[p] || 0);
      p++
    );
    if (
      (N[p] > (ne[p] || 0) && c--,
      o == null
        ? ((O = o = yr.precision), (s = yr.rounding))
        : a
          ? (O = o + (n.e - i.e) + 1)
          : (O = o),
      O < 0)
    )
      w.push(1), (f = !0);
    else {
      if (((O = (O / m + 2) | 0), (p = 0), re == 1)) {
        for (d = 0, N = N[0], O++; (p < U || d) && O--; p++)
          (B = d * l + (ne[p] || 0)), (w[p] = (B / N) | 0), (d = B % N | 0);
        f = d || p < U;
      } else {
        for (
          d = (l / (N[0] + 1)) | 0,
            d > 1 &&
              ((N = e(N, d, l)),
              (ne = e(ne, d, l)),
              (re = N.length),
              (U = ne.length)),
            k = re,
            x = ne.slice(0, re),
            E = x.length;
          E < re;

        )
          x[E++] = 0;
        (ot = N.slice()), ot.unshift(0), (J = N[0]), N[1] >= l / 2 && ++J;
        do
          (d = 0),
            (u = t(N, x, re, E)),
            u < 0
              ? ((C = x[0]),
                re != E && (C = C * l + (x[1] || 0)),
                (d = (C / J) | 0),
                d > 1
                  ? (d >= l && (d = l - 1),
                    (g = e(N, d, l)),
                    (b = g.length),
                    (E = x.length),
                    (u = t(g, x, b, E)),
                    u == 1 && (d--, r(g, re < b ? ot : N, b, l)))
                  : (d == 0 && (u = d = 1), (g = N.slice())),
                (b = g.length),
                b < E && g.unshift(0),
                r(x, g, E, l),
                u == -1 &&
                  ((E = x.length),
                  (u = t(N, x, re, E)),
                  u < 1 && (d++, r(x, re < E ? ot : N, E, l))),
                (E = x.length))
              : u === 0 && (d++, (x = [0])),
            (w[p++] = d),
            u && x[0] ? (x[E++] = ne[k] || 0) : ((x = [ne[k]]), (E = 1));
        while ((k++ < U || x[0] !== void 0) && O--);
        f = x[0] !== void 0;
      }
      w[0] || w.shift();
    }
    if (m == 1) (y.e = c), (Ts = f);
    else {
      for (p = 1, d = w[0]; d >= 10; d /= 10) p++;
      (y.e = p + c * m - 1), T(y, a ? o + y.e + 1 : o, s, f);
    }
    return y;
  };
})();
function T(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    m = e.constructor;
  e: if (t != null) {
    if (((p = e.d), !p)) return e;
    for (i = 1, a = p[0]; a >= 10; a /= 10) i++;
    if (((o = t - i), o < 0))
      (o += P),
        (s = t),
        (c = p[(d = 0)]),
        (l = (c / G(10, i - s - 1)) % 10 | 0);
    else if (((d = Math.ceil((o + 1) / P)), (a = p.length), d >= a))
      if (n) {
        for (; a++ <= d; ) p.push(0);
        (c = l = 0), (i = 1), (o %= P), (s = o - P + 1);
      } else break e;
    else {
      for (c = a = p[d], i = 1; a >= 10; a /= 10) i++;
      (o %= P),
        (s = o - P + i),
        (l = s < 0 ? 0 : (c / G(10, i - s - 1)) % 10 | 0);
    }
    if (
      ((n =
        n ||
        t < 0 ||
        p[d + 1] !== void 0 ||
        (s < 0 ? c : c % G(10, i - s - 1))),
      (u =
        r < 4
          ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  (o > 0 ? (s > 0 ? c / G(10, i - s) : 0) : p[d - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !p[0])
    )
      return (
        (p.length = 0),
        u
          ? ((t -= e.e + 1), (p[0] = G(10, (P - (t % P)) % P)), (e.e = -t || 0))
          : (p[0] = e.e = 0),
        e
      );
    if (
      (o == 0
        ? ((p.length = d), (a = 1), d--)
        : ((p.length = d + 1),
          (a = G(10, P - o)),
          (p[d] = s > 0 ? ((c / G(10, i - s)) % G(10, s) | 0) * a : 0)),
      u)
    )
      for (;;)
        if (d == 0) {
          for (o = 1, s = p[0]; s >= 10; s /= 10) o++;
          for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, p[0] == Ae && (p[0] = 1));
          break;
        } else {
          if (((p[d] += a), p[d] != Ae)) break;
          (p[d--] = 0), (a = 1);
        }
    for (o = p.length; p[--o] === 0; ) p.pop();
  }
  return (
    M &&
      (e.e > m.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < m.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function De(e, t, r) {
  if (!e.isFinite()) return Os(e);
  var n,
    i = e.e,
    o = X(e.d),
    s = o.length;
  return (
    t
      ? (r && (n = r - s) > 0
          ? (o = o.charAt(0) + "." + o.slice(1) + Qe(n))
          : s > 1 && (o = o.charAt(0) + "." + o.slice(1)),
        (o = o + (e.e < 0 ? "e" : "e+") + e.e))
      : i < 0
        ? ((o = "0." + Qe(-i - 1) + o), r && (n = r - s) > 0 && (o += Qe(n)))
        : i >= s
          ? ((o += Qe(i + 1 - s)),
            r && (n = r - i - 1) > 0 && (o = o + "." + Qe(n)))
          : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)),
            r && (n = r - s) > 0 && (i + 1 === s && (o += "."), (o += Qe(n)))),
    o
  );
}
function Br(e, t) {
  var r = e[0];
  for (t *= P; r >= 10; r /= 10) t++;
  return t;
}
function jr(e, t, r) {
  if (t > kc) throw ((M = !0), r && (e.precision = r), Error(Ps));
  return T(new e(_r), t, 1, !0);
}
function ve(e, t, r) {
  if (t > wi) throw Error(Ps);
  return T(new e(Lr), t, r, !0);
}
function Cs(e) {
  var t = e.length - 1,
    r = t * P + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function Qe(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Fs(e, t, r, n) {
  var i,
    o = new e(1),
    s = Math.ceil(n / P + 4);
  for (M = !1; ; ) {
    if (
      (r % 2 && ((o = o.times(t)), ws(o.d, s) && (i = !0)),
      (r = se(r / 2)),
      r === 0)
    ) {
      (r = o.d.length - 1), i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    (t = t.times(t)), ws(t.d, s);
  }
  return (M = !0), o;
}
function xs(e) {
  return e.d[e.d.length - 1] & 1;
}
function Ss(e, t, r) {
  for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
    if (((n = new e(t[o])), n.s)) i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function Ei(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = 0,
    c = 0,
    p = 0,
    d = e.constructor,
    m = d.rounding,
    f = d.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new d(
      e.d
        ? e.d[0]
          ? e.s < 0
            ? 0
            : 1 / 0
          : 1
        : e.s
          ? e.s < 0
            ? 0
            : e
          : 0 / 0,
    );
  for (
    t == null ? ((M = !1), (l = f)) : (l = t), a = new d(0.03125);
    e.e > -2;

  )
    (e = e.times(a)), (p += 5);
  for (
    n = ((Math.log(G(2, p)) / Math.LN10) * 2 + 5) | 0,
      l += n,
      r = o = s = new d(1),
      d.precision = l;
    ;

  ) {
    if (
      ((o = T(o.times(e), l, 1)),
      (r = r.times(++c)),
      (a = s.plus(_(o, r, l, 1))),
      X(a.d).slice(0, l) === X(s.d).slice(0, l))
    ) {
      for (i = p; i--; ) s = T(s.times(s), l, 1);
      if (t == null)
        if (u < 3 && Gt(s.d, l - n, m, u))
          (d.precision = l += 10), (r = o = a = new d(1)), (c = 0), u++;
        else return T(s, (d.precision = f), m, (M = !0));
      else return (d.precision = f), s;
    }
    s = a;
  }
}
function Ue(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    m = 1,
    f = 10,
    g = e,
    b = g.d,
    y = g.constructor,
    w = y.rounding,
    x = y.precision;
  if (g.s < 0 || !b || !b[0] || (!g.e && b[0] == 1 && b.length == 1))
    return new y(b && !b[0] ? -1 / 0 : g.s != 1 ? NaN : b ? 0 : g);
  if (
    (t == null ? ((M = !1), (c = x)) : (c = t),
    (y.precision = c += f),
    (r = X(b)),
    (n = r.charAt(0)),
    Math.abs((o = g.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (g = g.times(e)), (r = X(g.d)), (n = r.charAt(0)), m++;
    (o = g.e),
      n > 1 ? ((g = new y("0." + r)), o++) : (g = new y(n + "." + r.slice(1)));
  } else
    return (
      (u = jr(y, c + 2, x).times(o + "")),
      (g = Ue(new y(n + "." + r.slice(1)), c - f).plus(u)),
      (y.precision = x),
      t == null ? T(g, x, w, (M = !0)) : g
    );
  for (
    p = g,
      l = s = g = _(g.minus(1), g.plus(1), c, 1),
      d = T(g.times(g), c, 1),
      i = 3;
    ;

  ) {
    if (
      ((s = T(s.times(d), c, 1)),
      (u = l.plus(_(s, new y(i), c, 1))),
      X(u.d).slice(0, c) === X(l.d).slice(0, c))
    )
      if (
        ((l = l.times(2)),
        o !== 0 && (l = l.plus(jr(y, c + 2, x).times(o + ""))),
        (l = _(l, new y(m), c, 1)),
        t == null)
      )
        if (Gt(l.d, c - f, w, a))
          (y.precision = c += f),
            (u = s = g = _(p.minus(1), p.plus(1), c, 1)),
            (d = T(g.times(g), c, 1)),
            (i = a = 1);
        else return T(l, (y.precision = x), w, (M = !0));
      else return (y.precision = x), l;
    (l = u), (i += 2);
  }
}
function Os(e) {
  return String((e.s * e.s) / 0);
}
function Ti(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (e.e = r = r - n - 1),
      (e.d = []),
      (n = (r + 1) % P),
      r < 0 && (n += P),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= P; n < i; )
        e.d.push(+t.slice(n, (n += P)));
      (t = t.slice(n)), (n = P - t.length);
    } else n -= i;
    for (; n--; ) t += "0";
    e.d.push(+t),
      M &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function Nc(e, t) {
  var r, n, i, o, s, a, l, u, c;
  if (t.indexOf("_") > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), As.test(t))) return Ti(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (Rc.test(t)) (r = 16), (t = t.toLowerCase());
  else if (Oc.test(t)) r = 2;
  else if (Dc.test(t)) r = 8;
  else throw Error(Je + t);
  for (
    o = t.search(/p/i),
      o > 0
        ? ((l = +t.slice(o + 1)), (t = t.substring(2, o)))
        : (t = t.slice(2)),
      o = t.indexOf("."),
      s = o >= 0,
      n = e.constructor,
      s &&
        ((t = t.replace(".", "")),
        (a = t.length),
        (o = a - o),
        (i = Fs(n, new n(r), o, o * 2))),
      u = Nr(t, r, Ae),
      c = u.length - 1,
      o = c;
    u[o] === 0;
    --o
  )
    u.pop();
  return o < 0
    ? new n(e.s * 0)
    : ((e.e = Br(u, c)),
      (e.d = u),
      (M = !1),
      s && (e = _(e, i, a * 4)),
      l && (e = e.times(Math.abs(l) < 54 ? G(2, l) : rt.pow(2, l))),
      (M = !0),
      e);
}
function _c(e, t) {
  var r,
    n = t.d.length;
  if (n < 3) return t.isZero() ? t : bt(e, 2, t, t);
  (r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / Vr(5, r))),
    (t = bt(e, 2, t, t));
  for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
    (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))));
  return t;
}
function bt(e, t, r, n, i) {
  var o,
    s,
    a,
    l,
    u = 1,
    c = e.precision,
    p = Math.ceil(c / P);
  for (M = !1, l = r.times(r), a = new e(n); ; ) {
    if (
      ((s = _(a.times(l), new e(t++ * t++), c, 1)),
      (a = i ? n.plus(s) : n.minus(s)),
      (n = _(s.times(l), new e(t++ * t++), c, 1)),
      (s = a.plus(n)),
      s.d[p] !== void 0)
    ) {
      for (o = p; s.d[o] === a.d[o] && o--; );
      if (o == -1) break;
    }
    (o = a), (a = n), (n = s), (s = o), u++;
  }
  return (M = !0), (s.d.length = p + 1), s;
}
function Vr(e, t) {
  for (var r = e; --t; ) r *= e;
  return r;
}
function Rs(e, t) {
  var r,
    n = t.s < 0,
    i = ve(e, e.precision, 1),
    o = i.times(0.5);
  if (((t = t.abs()), t.lte(o))) return (je = n ? 4 : 1), t;
  if (((r = t.divToInt(i)), r.isZero())) je = n ? 3 : 2;
  else {
    if (((t = t.minus(r.times(i))), t.lte(o)))
      return (je = xs(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
    je = xs(r) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function Pi(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    m = e.constructor,
    f = r !== void 0;
  if (
    (f
      ? (ye(r, 1, Ge), n === void 0 ? (n = m.rounding) : ye(n, 0, 8))
      : ((r = m.precision), (n = m.rounding)),
    !e.isFinite())
  )
    c = Os(e);
  else {
    for (
      c = De(e),
        s = c.indexOf("."),
        f
          ? ((i = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
          : (i = t),
        s >= 0 &&
          ((c = c.replace(".", "")),
          (d = new m(1)),
          (d.e = c.length - s),
          (d.d = Nr(De(d), 10, i)),
          (d.e = d.d.length)),
        p = Nr(c, 10, i),
        o = l = p.length;
      p[--l] == 0;

    )
      p.pop();
    if (!p[0]) c = f ? "0p+0" : "0";
    else {
      if (
        (s < 0
          ? o--
          : ((e = new m(e)),
            (e.d = p),
            (e.e = o),
            (e = _(e, d, r, n, 0, i)),
            (p = e.d),
            (o = e.e),
            (u = Ts)),
        (s = p[r]),
        (a = i / 2),
        (u = u || p[r + 1] !== void 0),
        (u =
          n < 4
            ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              (s === a &&
                (n === 4 ||
                  u ||
                  (n === 6 && p[r - 1] & 1) ||
                  n === (e.s < 0 ? 8 : 7)))),
        (p.length = r),
        u)
      )
        for (; ++p[--r] > i - 1; ) (p[r] = 0), r || (++o, p.unshift(1));
      for (l = p.length; !p[l - 1]; --l);
      for (s = 0, c = ""; s < l; s++) c += bi.charAt(p[s]);
      if (f) {
        if (l > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --l; l % s; l++) c += "0";
            for (p = Nr(c, i, t), l = p.length; !p[l - 1]; --l);
            for (s = 1, c = "1."; s < l; s++) c += bi.charAt(p[s]);
          } else c = c.charAt(0) + "." + c.slice(1);
        c = c + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; ) c = "0" + c;
        c = "0." + c;
      } else if (++o > l) for (o -= l; o--; ) c += "0";
      else o < l && (c = c.slice(0, o) + "." + c.slice(o));
    }
    c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
  }
  return e.s < 0 ? "-" + c : c;
}
function ws(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function Lc(e) {
  return new this(e).abs();
}
function jc(e) {
  return new this(e).acos();
}
function qc(e) {
  return new this(e).acosh();
}
function Bc(e, t) {
  return new this(e).plus(t);
}
function Vc(e) {
  return new this(e).asin();
}
function Kc(e) {
  return new this(e).asinh();
}
function Qc(e) {
  return new this(e).atan();
}
function Uc(e) {
  return new this(e).atanh();
}
function Jc(e, t) {
  (e = new this(e)), (t = new this(t));
  var r,
    n = this.precision,
    i = this.rounding,
    o = n + 4;
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
        ? ((r = ve(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
        : !t.d || e.isZero()
          ? ((r = t.s < 0 ? ve(this, n, i) : new this(0)), (r.s = e.s))
          : !e.d || t.isZero()
            ? ((r = ve(this, o, 1).times(0.5)), (r.s = e.s))
            : t.s < 0
              ? ((this.precision = o),
                (this.rounding = 1),
                (r = this.atan(_(e, t, o, 1))),
                (t = ve(this, o, 1)),
                (this.precision = n),
                (this.rounding = i),
                (r = e.s < 0 ? r.minus(t) : r.plus(t)))
              : (r = this.atan(_(e, t, o, 1))),
    r
  );
}
function Gc(e) {
  return new this(e).cbrt();
}
function Wc(e) {
  return T((e = new this(e)), e.e + 1, 2);
}
function Hc(e, t, r) {
  return new this(e).clamp(t, r);
}
function zc(e) {
  if (!e || typeof e != "object") throw Error(qr + "Object expected");
  var t,
    r,
    n,
    i = e.defaults === !0,
    o = [
      "precision",
      1,
      Ge,
      "rounding",
      0,
      8,
      "toExpNeg",
      -ht,
      0,
      "toExpPos",
      0,
      ht,
      "maxE",
      0,
      ht,
      "minE",
      -ht,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < o.length; t += 3)
    if (((r = o[t]), i && (this[r] = xi[r]), (n = e[r]) !== void 0))
      if (se(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(Je + r + ": " + n);
  if (((r = "crypto"), i && (this[r] = xi[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto < "u" &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[r] = !0;
        else throw Error(Ms);
      else this[r] = !1;
    else throw Error(Je + r + ": " + n);
  return this;
}
function Yc(e) {
  return new this(e).cos();
}
function Zc(e) {
  return new this(e).cosh();
}
function Ds(e) {
  var t, r, n;
  function i(o) {
    var s,
      a,
      l,
      u = this;
    if (!(u instanceof i)) return new i(o);
    if (((u.constructor = i), Es(o))) {
      (u.s = o.s),
        M
          ? !o.d || o.e > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : o.e < i.minE
              ? ((u.e = 0), (u.d = [0]))
              : ((u.e = o.e), (u.d = o.d.slice()))
          : ((u.e = o.e), (u.d = o.d ? o.d.slice() : o.d));
      return;
    }
    if (((l = typeof o), l === "number")) {
      if (o === 0) {
        (u.s = 1 / o < 0 ? -1 : 1), (u.e = 0), (u.d = [0]);
        return;
      }
      if ((o < 0 ? ((o = -o), (u.s = -1)) : (u.s = 1), o === ~~o && o < 1e7)) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        M
          ? s > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : s < i.minE
              ? ((u.e = 0), (u.d = [0]))
              : ((u.e = s), (u.d = [o]))
          : ((u.e = s), (u.d = [o]));
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), (u.e = NaN), (u.d = null);
        return;
      }
      return Ti(u, o.toString());
    } else if (l !== "string") throw Error(Je + o);
    return (
      (a = o.charCodeAt(0)) === 45
        ? ((o = o.slice(1)), (u.s = -1))
        : (a === 43 && (o = o.slice(1)), (u.s = 1)),
      As.test(o) ? Ti(u, o) : Nc(u, o)
    );
  }
  if (
    ((i.prototype = h),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.EUCLID = 9),
    (i.config = i.set = zc),
    (i.clone = Ds),
    (i.isDecimal = Es),
    (i.abs = Lc),
    (i.acos = jc),
    (i.acosh = qc),
    (i.add = Bc),
    (i.asin = Vc),
    (i.asinh = Kc),
    (i.atan = Qc),
    (i.atanh = Uc),
    (i.atan2 = Jc),
    (i.cbrt = Gc),
    (i.ceil = Wc),
    (i.clamp = Hc),
    (i.cos = Yc),
    (i.cosh = Zc),
    (i.div = Xc),
    (i.exp = ep),
    (i.floor = tp),
    (i.hypot = rp),
    (i.ln = np),
    (i.log = ip),
    (i.log10 = sp),
    (i.log2 = op),
    (i.max = ap),
    (i.min = lp),
    (i.mod = up),
    (i.mul = cp),
    (i.pow = pp),
    (i.random = dp),
    (i.round = mp),
    (i.sign = fp),
    (i.sin = gp),
    (i.sinh = yp),
    (i.sqrt = hp),
    (i.sub = bp),
    (i.sum = xp),
    (i.tan = wp),
    (i.tanh = Ep),
    (i.trunc = Tp),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ],
        t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return i.config(e), i;
}
function Xc(e, t) {
  return new this(e).div(t);
}
function ep(e) {
  return new this(e).exp();
}
function tp(e) {
  return T((e = new this(e)), e.e + 1, 3);
}
function rp() {
  var e,
    t,
    r = new this(0);
  for (M = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return (M = !0), new this(1 / 0);
      r = t;
    }
  return (M = !0), r.sqrt();
}
function Es(e) {
  return e instanceof rt || (e && e.toStringTag === vs) || !1;
}
function np(e) {
  return new this(e).ln();
}
function ip(e, t) {
  return new this(e).log(t);
}
function op(e) {
  return new this(e).log(2);
}
function sp(e) {
  return new this(e).log(10);
}
function ap() {
  return Ss(this, arguments, "lt");
}
function lp() {
  return Ss(this, arguments, "gt");
}
function up(e, t) {
  return new this(e).mod(t);
}
function cp(e, t) {
  return new this(e).mul(t);
}
function pp(e, t) {
  return new this(e).pow(t);
}
function dp(e) {
  var t,
    r,
    n,
    i,
    o = 0,
    s = new this(1),
    a = [];
  if (
    (e === void 0 ? (e = this.precision) : ye(e, 1, Ge),
    (n = Math.ceil(e / P)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        (i = t[o]),
          i >= 429e7
            ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (a[o++] = i % 1e7);
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes((n *= 4)); o < n; )
        (i =
          t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24)),
          i >= 214e7
            ? crypto.randomBytes(4).copy(t, o)
            : (a.push(i % 1e7), (o += 4));
      o = n / 4;
    } else throw Error(Ms);
  else for (; o < n; ) a[o++] = (Math.random() * 1e7) | 0;
  for (
    n = a[--o],
      e %= P,
      n && e && ((i = G(10, P - e)), (a[o] = ((n / i) | 0) * i));
    a[o] === 0;
    o--
  )
    a.pop();
  if (o < 0) (r = 0), (a = [0]);
  else {
    for (r = -1; a[0] === 0; r -= P) a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
    n < P && (r -= P - n);
  }
  return (s.e = r), (s.d = a), s;
}
function mp(e) {
  return T((e = new this(e)), e.e + 1, this.rounding);
}
function fp(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function gp(e) {
  return new this(e).sin();
}
function yp(e) {
  return new this(e).sinh();
}
function hp(e) {
  return new this(e).sqrt();
}
function bp(e, t) {
  return new this(e).sub(t);
}
function xp() {
  var e = 0,
    t = arguments,
    r = new this(t[e]);
  for (M = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
  return (M = !0), T(r, this.precision, this.rounding);
}
function wp(e) {
  return new this(e).tan();
}
function Ep(e) {
  return new this(e).tanh();
}
function Tp(e) {
  return T((e = new this(e)), e.e + 1, 1);
}
h[Symbol.for("nodejs.util.inspect.custom")] = h.toString;
h[Symbol.toStringTag] = "Decimal";
var rt = (h.constructor = Ds(xi));
_r = new rt(_r);
Lr = new rt(Lr);
var pe = rt;
var Ai = F(qt()),
  Is = F(Kr());
var Ee = class {
  constructor(t, r, n, i, o) {
    (this.modelName = t),
      (this.name = r),
      (this.typeName = n),
      (this.isList = i),
      (this.isEnum = o);
  }
  _toGraphQLInputType() {
    let t = this.isList ? "List" : "",
      r = this.isEnum ? "Enum" : "";
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function xt(e) {
  return e instanceof Ee;
}
var ks = [
    "JsonNullValueInput",
    "NullableJsonNullValueInput",
    "JsonNullValueFilter",
  ],
  Qr = Symbol(),
  Mi = new WeakMap(),
  z = class {
    constructor(t) {
      t === Qr
        ? Mi.set(this, `Prisma.${this._getName()}`)
        : Mi.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`,
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Mi.get(this);
    }
  },
  Wt = class extends z {
    _getNamespace() {
      return "NullTypes";
    }
  },
  Ht = class extends Wt {};
vi(Ht, "DbNull");
var zt = class extends Wt {};
vi(zt, "JsonNull");
var Yt = class extends Wt {};
vi(Yt, "AnyNull");
var wt = {
  classes: { DbNull: Ht, JsonNull: zt, AnyNull: Yt },
  instances: { DbNull: new Ht(Qr), JsonNull: new zt(Qr), AnyNull: new Yt(Qr) },
};
function vi(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
function de(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function $e(e) {
  return e.toString() !== "Invalid Date";
}
function ke(e) {
  return rt.isDecimal(e)
    ? !0
    : e !== null &&
        typeof e == "object" &&
        typeof e.s == "number" &&
        typeof e.e == "number" &&
        typeof e.toFixed == "function" &&
        Array.isArray(e.d);
}
var ae = (e, t) => {
    let r = {};
    for (let n of e) {
      let i = n[t];
      r[i] = n;
    }
    return r;
  },
  Et = {
    String: !0,
    Int: !0,
    Float: !0,
    Boolean: !0,
    Long: !0,
    DateTime: !0,
    ID: !0,
    UUID: !0,
    Json: !0,
    Bytes: !0,
    Decimal: !0,
    BigInt: !0,
  };
var Pp = {
  string: "String",
  boolean: "Boolean",
  object: "Json",
  symbol: "Symbol",
};
function Tt(e) {
  return typeof e == "string" ? e : e.name;
}
function Xt(e, t) {
  return t ? `List<${e}>` : e;
}
var Mp =
    /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/,
  vp =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function Pt(e, t) {
  let r = t?.type;
  if (e === null) return "null";
  if (Object.prototype.toString.call(e) === "[object BigInt]") return "BigInt";
  if (pe.isDecimal(e) || (r === "Decimal" && ke(e))) return "Decimal";
  if (Buffer.isBuffer(e)) return "Bytes";
  if (Ap(e, t)) return r.name;
  if (e instanceof z) return e._getName();
  if (e instanceof Ee) return e._toGraphQLInputType();
  if (Array.isArray(e)) {
    let i = e.reduce((o, s) => {
      let a = Pt(s, t);
      return o.includes(a) || o.push(a), o;
    }, []);
    return (
      i.includes("Float") && i.includes("Int") && (i = ["Float"]),
      `List<${i.join(" | ")}>`
    );
  }
  let n = typeof e;
  if (n === "number") return Math.trunc(e) === e ? "Int" : "Float";
  if (de(e)) return "DateTime";
  if (n === "string") {
    if (vp.test(e)) return "UUID";
    if (new Date(e).toString() === "Invalid Date") return "String";
    if (Mp.test(e)) return "DateTime";
  }
  return Pp[n];
}
function Ap(e, t) {
  let r = t?.type;
  if (!Fp(r)) return !1;
  if (t?.namespace === "prisma" && ks.includes(r.name)) {
    let n = e?.constructor?.name;
    return (
      typeof n == "string" && wt.instances[n] === e && r.values.includes(n)
    );
  }
  return typeof e == "string" && r.values.includes(e);
}
function Ur(e, t) {
  return t.reduce(
    (n, i) => {
      let o = (0, Is.default)(e, i);
      return o < n.distance ? { distance: o, str: i } : n;
    },
    {
      distance: Math.min(
        Math.floor(e.length) * 1.1,
        ...t.map((n) => n.length * 3),
      ),
      str: null,
    },
  ).str;
}
function Mt(e, t = !1) {
  if (typeof e == "string") return e;
  if (e.values)
    return `enum ${e.name} {
${(0, Ai.default)(e.values.join(", "), 2)}
}`;
  {
    let r = (0, Ai.default)(
      e.fields.map((n) => {
        let i = `${n.name}`,
          o = `${t ? S(i) : i}${n.isRequired ? "" : "?"}: ${Dt(n.inputTypes.map((s) => Xt(Cp(s.type) ? s.type.name : Tt(s.type), s.isList)).join(" | "))}`;
        return n.isRequired ? o : $(o);
      }).join(`
`),
      2,
    );
    return `${$("type")} ${v($(e.name))} ${$("{")}
${r}
${$("}")}`;
  }
}
function Cp(e) {
  return typeof e != "string";
}
function Zt(e) {
  return typeof e == "string" ? (e === "Null" ? "null" : e) : e.name;
}
function er(e) {
  return typeof e == "string" ? e : e.name;
}
function Ci(e, t, r = !1) {
  if (typeof e == "string") return e === "Null" ? "null" : e;
  if (e.values) return e.values.join(" | ");
  let n = e,
    i =
      t &&
      n.fields.every(
        (o) =>
          o.inputTypes[0].location === "inputObjectTypes" ||
          o.inputTypes[1]?.location === "inputObjectTypes",
      );
  return r
    ? Zt(e)
    : n.fields.reduce((o, s) => {
        let a = "";
        return (
          !i && !s.isRequired
            ? (a = s.inputTypes.map((l) => Zt(l.type)).join(" | "))
            : (a = s.inputTypes
                .map((l) => Ci(l.type, s.isRequired, !0))
                .join(" | ")),
          (o[s.name + (s.isRequired ? "" : "?")] = a),
          o
        );
      }, {});
}
function Ns(e, t, r) {
  let n = {};
  for (let i of e) n[r(i)] = i;
  for (let i of t) {
    let o = r(i);
    n[o] || (n[o] = i);
  }
  return Object.values(n);
}
function vt(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
function _s(e) {
  return e.endsWith("GroupByOutputType");
}
function Fp(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    typeof e.name == "string" &&
    Array.isArray(e.values)
  );
}
var Jr = class {
    constructor({ datamodel: t }) {
      (this.datamodel = t),
        (this.datamodelEnumMap = this.getDatamodelEnumMap()),
        (this.modelMap = this.getModelMap()),
        (this.typeMap = this.getTypeMap()),
        (this.typeAndModelMap = this.getTypeModelMap());
    }
    getDatamodelEnumMap() {
      return ae(this.datamodel.enums, "name");
    }
    getModelMap() {
      return { ...ae(this.datamodel.models, "name") };
    }
    getTypeMap() {
      return { ...ae(this.datamodel.types, "name") };
    }
    getTypeModelMap() {
      return { ...this.getTypeMap(), ...this.getModelMap() };
    }
  },
  Gr = class {
    constructor({ mappings: t }) {
      (this.mappings = t), (this.mappingsMap = this.getMappingsMap());
    }
    getMappingsMap() {
      return ae(this.mappings.modelOperations, "model");
    }
    getOtherOperationNames() {
      return [
        Object.values(this.mappings.otherOperations.write),
        Object.values(this.mappings.otherOperations.read),
      ].flat();
    }
  },
  Wr = class {
    constructor({ schema: t }) {
      this.outputTypeToMergedOutputType = (t) => ({ ...t, fields: t.fields });
      (this.schema = t),
        (this.enumMap = this.getEnumMap()),
        (this.queryType = this.getQueryType()),
        (this.mutationType = this.getMutationType()),
        (this.outputTypes = this.getOutputTypes()),
        (this.outputTypeMap = this.getMergedOutputTypeMap()),
        this.resolveOutputTypes(),
        (this.inputObjectTypes = this.schema.inputObjectTypes),
        (this.inputTypeMap = this.getInputTypeMap()),
        this.resolveInputTypes(),
        this.resolveFieldArgumentTypes(),
        (this.queryType = this.outputTypeMap.Query),
        (this.mutationType = this.outputTypeMap.Mutation),
        (this.rootFieldMap = this.getRootFieldMap());
    }
    get [Symbol.toStringTag]() {
      return "DMMFClass";
    }
    resolveOutputTypes() {
      for (let t of this.outputTypes.model) {
        for (let r of t.fields)
          typeof r.outputType.type == "string" &&
            !Et[r.outputType.type] &&
            (r.outputType.type =
              this.outputTypeMap[r.outputType.type] ||
              this.outputTypeMap[r.outputType.type] ||
              this.enumMap[r.outputType.type] ||
              r.outputType.type);
        t.fieldMap = ae(t.fields, "name");
      }
      for (let t of this.outputTypes.prisma) {
        for (let r of t.fields)
          typeof r.outputType.type == "string" &&
            !Et[r.outputType.type] &&
            (r.outputType.type =
              this.outputTypeMap[r.outputType.type] ||
              this.outputTypeMap[r.outputType.type] ||
              this.enumMap[r.outputType.type] ||
              r.outputType.type);
        t.fieldMap = ae(t.fields, "name");
      }
    }
    resolveInputTypes() {
      let t = this.inputObjectTypes.prisma;
      this.inputObjectTypes.model && t.push(...this.inputObjectTypes.model);
      for (let r of t) {
        for (let n of r.fields)
          for (let i of n.inputTypes) {
            let o = i.type;
            typeof o == "string" &&
              !Et[o] &&
              (this.inputTypeMap[o] || this.enumMap[o]) &&
              (i.type = this.inputTypeMap[o] || this.enumMap[o] || o);
          }
        r.fieldMap = ae(r.fields, "name");
      }
    }
    resolveFieldArgumentTypes() {
      for (let t of this.outputTypes.prisma)
        for (let r of t.fields)
          for (let n of r.args)
            for (let i of n.inputTypes) {
              let o = i.type;
              typeof o == "string" &&
                !Et[o] &&
                (i.type = this.inputTypeMap[o] || this.enumMap[o] || o);
            }
      for (let t of this.outputTypes.model)
        for (let r of t.fields)
          for (let n of r.args)
            for (let i of n.inputTypes) {
              let o = i.type;
              typeof o == "string" &&
                !Et[o] &&
                (i.type = this.inputTypeMap[o] || this.enumMap[o] || i.type);
            }
    }
    getQueryType() {
      return this.schema.outputObjectTypes.prisma.find(
        (t) => t.name === "Query",
      );
    }
    getMutationType() {
      return this.schema.outputObjectTypes.prisma.find(
        (t) => t.name === "Mutation",
      );
    }
    getOutputTypes() {
      return {
        model: this.schema.outputObjectTypes.model.map(
          this.outputTypeToMergedOutputType,
        ),
        prisma: this.schema.outputObjectTypes.prisma.map(
          this.outputTypeToMergedOutputType,
        ),
      };
    }
    getEnumMap() {
      return {
        ...ae(this.schema.enumTypes.prisma, "name"),
        ...(this.schema.enumTypes.model
          ? ae(this.schema.enumTypes.model, "name")
          : void 0),
      };
    }
    hasEnumInNamespace(t, r) {
      return this.schema.enumTypes[r]?.find((n) => n.name === t) !== void 0;
    }
    getMergedOutputTypeMap() {
      return {
        ...ae(this.outputTypes.model, "name"),
        ...ae(this.outputTypes.prisma, "name"),
      };
    }
    getInputTypeMap() {
      return {
        ...(this.schema.inputObjectTypes.model
          ? ae(this.schema.inputObjectTypes.model, "name")
          : void 0),
        ...ae(this.schema.inputObjectTypes.prisma, "name"),
      };
    }
    getRootFieldMap() {
      return {
        ...ae(this.queryType.fields, "name"),
        ...ae(this.mutationType.fields, "name"),
      };
    }
  },
  We = class {
    constructor(t) {
      return Object.assign(this, new Jr(t), new Gr(t), new Wr(t));
    }
  };
bs(We, [Jr, Gr, Wr]);
var tu = require("async_hooks"),
  ru = require("events"),
  nu = F(require("fs")),
  gr = F(require("path"));
var ee = class {
  constructor(t, r) {
    if (t.length - 1 !== r.length)
      throw t.length === 0
        ? new TypeError("Expected at least 1 string")
        : new TypeError(
            `Expected ${t.length} strings to have ${t.length - 1} values`,
          );
    let n = r.reduce((s, a) => s + (a instanceof ee ? a.values.length : 1), 0);
    (this.values = new Array(n)),
      (this.strings = new Array(n + 1)),
      (this.strings[0] = t[0]);
    let i = 0,
      o = 0;
    for (; i < r.length; ) {
      let s = r[i++],
        a = t[i];
      if (s instanceof ee) {
        this.strings[o] += s.strings[0];
        let l = 0;
        for (; l < s.values.length; )
          (this.values[o++] = s.values[l++]), (this.strings[o] = s.strings[l]);
        this.strings[o] += a;
      } else (this.values[o++] = s), (this.strings[o] = a);
    }
  }
  get text() {
    let t = 1,
      r = this.strings[0];
    for (; t < this.strings.length; ) r += `$${t}${this.strings[t++]}`;
    return r;
  }
  get sql() {
    let t = 1,
      r = this.strings[0];
    for (; t < this.strings.length; ) r += `?${this.strings[t++]}`;
    return r;
  }
  inspect() {
    return { text: this.text, sql: this.sql, values: this.values };
  }
};
function Ls(e, t = ",", r = "", n = "") {
  if (e.length === 0)
    throw new TypeError(
      "Expected `join([])` to be called with an array of multiple elements, but got an empty array",
    );
  return new ee([r, ...Array(e.length - 1).fill(t), n], e);
}
function Fi(e) {
  return new ee([e], []);
}
var js = Fi("");
function Si(e, ...t) {
  return new ee(e, t);
}
var Bs = F(qs());
function Vs(e) {
  return { ...e, mappings: Sp(e.mappings, e.datamodel) };
}
function Sp(e, t) {
  return {
    modelOperations: e.modelOperations
      .filter((n) => {
        let i = t.models.find((o) => o.name === n.model);
        if (!i) throw new Error(`Mapping without model ${n.model}`);
        return i.fields.some((o) => o.kind !== "object");
      })
      .map((n) => ({
        model: n.model,
        plural: (0, Bs.default)(vt(n.model)),
        findUnique: n.findUnique || n.findSingle,
        findUniqueOrThrow: n.findUniqueOrThrow,
        findFirst: n.findFirst,
        findFirstOrThrow: n.findFirstOrThrow,
        findMany: n.findMany,
        create: n.createOne || n.createSingle || n.create,
        createMany: n.createMany,
        delete: n.deleteOne || n.deleteSingle || n.delete,
        update: n.updateOne || n.updateSingle || n.update,
        deleteMany: n.deleteMany,
        updateMany: n.updateMany,
        upsert: n.upsertOne || n.upsertSingle || n.upsert,
        aggregate: n.aggregate,
        groupBy: n.groupBy,
        findRaw: n.findRaw,
        aggregateRaw: n.aggregateRaw,
      })),
    otherOperations: e.otherOperations,
  };
}
function Ks(e) {
  return Vs(e);
}
function tr(e) {
  return {
    getKeys() {
      return Object.keys(e);
    },
    getPropertyValue(t) {
      return e[t];
    },
  };
}
function Ce(e, t) {
  return {
    getKeys() {
      return [e];
    },
    getPropertyValue() {
      return t();
    },
  };
}
var Ie = class {
  constructor() {
    this._map = new Map();
  }
  get(t) {
    return this._map.get(t)?.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let i = r();
    return this.set(t, i), i;
  }
};
function nt(e) {
  let t = new Ie();
  return {
    getKeys() {
      return e.getKeys();
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r);
    },
  };
}
var Js = require("util");
var Hr = { enumerable: !0, configurable: !0, writable: !0 };
function zr(e) {
  let t = new Set(e);
  return {
    getOwnPropertyDescriptor: () => Hr,
    has: (r, n) => t.has(n),
    set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
    ownKeys: () => [...t],
  };
}
var Qs = Symbol.for("nodejs.util.inspect.custom");
function Ne(e, t) {
  let r = Op(t),
    n = new Set(),
    i = new Proxy(e, {
      get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      },
      has(o, s) {
        if (n.has(s)) return !0;
        let a = r.get(s);
        return a ? (a.has?.(s) ?? !0) : Reflect.has(o, s);
      },
      ownKeys(o) {
        let s = Us(Reflect.ownKeys(o), r),
          a = Us(Array.from(r.keys()), r);
        return [...new Set([...s, ...a, ...n])];
      },
      set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1
          ? !1
          : (n.add(s), Reflect.set(o, s, a));
      },
      getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = r.get(s);
        return l
          ? l.getPropertyDescriptor
            ? { ...Hr, ...l?.getPropertyDescriptor(s) }
            : Hr
          : a;
      },
      defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      },
    });
  return (
    (i[Qs] = function (o, s, a = Js.inspect) {
      let l = { ...this };
      return delete l[Qs], a(l, s);
    }),
    i
  );
}
function Op(e) {
  let t = new Map();
  for (let r of e) {
    let n = r.getKeys();
    for (let i of n) t.set(i, r);
  }
  return t;
}
function Us(e, t) {
  return e.filter((r) => t.get(r)?.has?.(r) ?? !0);
}
function rr(e) {
  return {
    getKeys() {
      return e;
    },
    has() {
      return !1;
    },
    getPropertyValue() {},
  };
}
function Gs({ error: e, user_facing_error: t }, r) {
  return t.error_code
    ? new ie(t.message, {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new oe(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
var Yr = class {};
var Zs = F(require("fs")),
  nr = F(require("path"));
function Zr(e) {
  let { runtimeBinaryTarget: t } = e;
  return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Rp(e)}`;
}
function Rp(e) {
  let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e,
    i = { fromEnvVar: null, value: n },
    o = [...r, i];
  return ci({ ...t, binaryTargets: o });
}
function He(e) {
  let { runtimeBinaryTarget: t } = e;
  return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
}
function ze(e) {
  let { searchedLocations: t } = e;
  return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
}
function Ws(e) {
  let { runtimeBinaryTarget: t } = e;
  return `${He(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${Zr(e)}

${ze(e)}`;
}
function Xr(e) {
  return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
}
function Hs(e) {
  let { queryEngineName: t } = e;
  return `${He(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${Xr("engine-not-found-bundler-investigation")}

${ze(e)}`;
}
function zs(e) {
  let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e,
    n = r.find((i) => i.native);
  return `${He(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${t}".
${Zr(e)}

${ze(e)}`;
}
function Ys(e) {
  let { queryEngineName: t } = e;
  return `${He(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${Xr("engine-not-found-tooling-investigation")}

${ze(e)}`;
}
var Dp = V("prisma:client:engines:resolveEnginePath"),
  $p = () => "library",
  kp = () => new RegExp(`runtime[\\\\/]${$p()}\\.m?js$`);
async function Xs(e, t) {
  let r =
    {
      binary: process.env.PRISMA_QUERY_ENGINE_BINARY,
      library: process.env.PRISMA_QUERY_ENGINE_LIBRARY,
    }[e] ?? t.prismaPath;
  if (r !== void 0) return r;
  let { enginePath: n, searchedLocations: i } = await Ip(e, t);
  if (
    (Dp("enginePath", n), n !== void 0 && e === "binary" && ai(n), n !== void 0)
  )
    return (t.prismaPath = n);
  let o = await ft(),
    s = t.generator?.binaryTargets ?? [],
    a = s.some((d) => d.native),
    l = !s.some((d) => d.value === o),
    u = __filename.match(kp()) === null,
    c = {
      searchedLocations: i,
      generatorBinaryTargets: s,
      generator: t.generator,
      runtimeBinaryTarget: o,
      queryEngineName: ea(e, o),
      expectedLocation: nr.default.relative(process.cwd(), t.dirname),
    },
    p;
  throw (
    (a && l ? (p = zs(c)) : l ? (p = Ws(c)) : u ? (p = Hs(c)) : (p = Ys(c)),
    new Q(p, t.clientVersion))
  );
}
async function Ip(engineType, config) {
  let binaryTarget = await ft(),
    searchedLocations = [],
    dirname = eval("__dirname"),
    searchLocations = [
      config.dirname,
      nr.default.resolve(dirname, ".."),
      config.generator?.output?.value ?? dirname,
      nr.default.resolve(dirname, "../../../.prisma/client"),
      "/tmp/prisma-engines",
      config.cwd,
    ];
  __filename.includes("resolveEnginePath") && searchLocations.push(ss());
  for (let e of searchLocations) {
    let t = ea(engineType, binaryTarget),
      r = nr.default.join(e, t);
    if ((searchedLocations.push(e), Zs.default.existsSync(r)))
      return { enginePath: r, searchedLocations };
  }
  return { enginePath: void 0, searchedLocations };
}
function ea(e, t) {
  return e === "library"
    ? Zn(t, "fs")
    : `query-engine-${t}${t === "windows" ? ".exe" : ""}`;
}
function ta(e, t) {
  return Np(e)
    ? !t || t.kind === "itx"
      ? { batch: e, transaction: !1 }
      : { batch: e, transaction: !0, isolationLevel: t.options.isolationLevel }
    : {
        batch: e,
        transaction:
          t?.kind === "batch"
            ? { isolationLevel: t.options.isolationLevel }
            : void 0,
      };
}
function Np(e) {
  return typeof e[0].query == "string";
}
var Di = F(Kt());
function ra(e) {
  return e
    ? e
        .replace(/".*"/g, '"X"')
        .replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`)
    : "";
}
function na(e) {
  return e
    .split(
      `
`,
    )
    .map((t) =>
      t
        .replace(
          /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/,
          "",
        )
        .replace(/\+\d+\s*ms$/, ""),
    ).join(`
`);
}
var ia = F(fs());
function oa({
  title: e,
  user: t = "prisma",
  repo: r = "prisma",
  template: n = "bug_report.md",
  body: i,
}) {
  return (0, ia.default)({ user: t, repo: r, template: n, title: e, body: i });
}
function sa({
  version: e,
  platform: t,
  title: r,
  description: n,
  engineVersion: i,
  database: o,
  query: s,
}) {
  let a = Fo(6e3 - (s?.length ?? 0)),
    l = na((0, Di.default)(a)),
    u = n
      ? `# Description
\`\`\`
${n}
\`\`\``
      : "",
    c = (0,
    Di.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? ra(s) : ""}
\`\`\`
`),
    p = oa({ title: r, body: c });
  return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${ce(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
var pa = F(require("fs"));
function aa(e) {
  if (e?.kind === "itx") return e.options.id;
}
var ki = F(require("os")),
  la = F(require("path"));
var $i = Symbol("PrismaLibraryEngineCache");
function _p() {
  let e = globalThis;
  return e[$i] === void 0 && (e[$i] = {}), e[$i];
}
function Lp(e) {
  let t = _p();
  if (t[e] !== void 0) return t[e];
  let r = la.default.toNamespacedPath(e),
    n = { exports: {} },
    i = 0;
  return (
    process.platform !== "win32" &&
      (i =
        ki.default.constants.dlopen.RTLD_LAZY |
        ki.default.constants.dlopen.RTLD_DEEPBIND),
    process.dlopen(n, r, i),
    (t[e] = n.exports),
    n.exports
  );
}
var en = class {
  constructor(t) {
    this.config = t;
  }
  async loadLibrary() {
    let t = await ni(),
      r = await Xs("library", this.config);
    try {
      return this.config.tracingHelper.runInChildSpan(
        { name: "loadLibrary", internal: !0 },
        () => Lp(r),
      );
    } catch (n) {
      let i = li({ e: n, platformInfo: t, id: r });
      throw new Q(i, this.config.clientVersion);
    }
  }
};
var jp = V("prisma:client:libraryEngine:exitHooks"),
  qp = { SIGINT: 2, SIGUSR2: 31, SIGTERM: 15 },
  tn = class {
    constructor() {
      this.nextOwnerId = 1;
      this.ownerToIdMap = new WeakMap();
      this.idToListenerMap = new Map();
      this.areHooksInstalled = !1;
      this.exitLikeHook = async (t) => {
        jp(`exit event received: ${t}`);
        for (let r of this.idToListenerMap.values()) await r();
        this.idToListenerMap.clear();
      };
    }
    install() {
      this.areHooksInstalled ||
        (this.installExitEventHook("beforeExit"),
        this.installExitEventHook("exit"),
        this.installExitSignalHook("SIGINT"),
        this.installExitSignalHook("SIGUSR2"),
        this.installExitSignalHook("SIGTERM"),
        (this.areHooksInstalled = !0));
    }
    setListener(t, r) {
      if (r) {
        let n = this.ownerToIdMap.get(t);
        n || ((n = this.nextOwnerId++), this.ownerToIdMap.set(t, n)),
          this.idToListenerMap.set(n, r);
      } else {
        let n = this.ownerToIdMap.get(t);
        n !== void 0 &&
          (this.ownerToIdMap.delete(t), this.idToListenerMap.delete(n));
      }
    }
    getListener(t) {
      let r = this.ownerToIdMap.get(t);
      if (r !== void 0) return this.idToListenerMap.get(r);
    }
    installExitEventHook(t) {
      process.once(t, this.exitLikeHook);
    }
    installExitSignalHook(t) {
      process.once(t, async (r) => {
        if ((await this.exitLikeHook(r), process.listenerCount(r) > 0)) return;
        let i = qp[r] + 128;
        process.exit(i);
      });
    }
  };
var qe = V("prisma:client:libraryEngine");
function Bp(e) {
  return e.item_type === "query" && "query" in e;
}
function Vp(e) {
  return "level" in e ? e.level === "error" && e.message === "PANIC" : !1;
}
var ua = [...ii, "native"],
  ca = 0,
  Ii = new tn(),
  ir = class extends Yr {
    constructor(r, n = new en(r)) {
      super();
      try {
        this.datamodel = pa.default.readFileSync(r.datamodelPath, "utf-8");
      } catch (i) {
        throw i.stack.match(/\/\.next|\/next@|\/next\//)
          ? new Q(
              `Your schema.prisma could not be found, and we detected that you are using Next.js.
Find out why and learn how to fix this: https://pris.ly/d/schema-not-found-nextjs`,
              r.clientVersion,
            )
          : r.isBundled === !0
            ? new Q(
                "Prisma Client could not find its `schema.prisma`. This is likely caused by a bundling step, which leads to `schema.prisma` not being copied near the resulting bundle. We would appreciate if you could take the time to share some information with us.\nPlease help us by answering a few questions: https://pris.ly/bundler-investigation-error",
                r.clientVersion,
              )
            : i;
      }
      (this.config = r),
        (this.libraryStarted = !1),
        (this.logQueries = r.logQueries ?? !1),
        (this.logLevel = r.logLevel ?? "error"),
        (this.libraryLoader = n),
        (this.logEmitter = r.logEmitter),
        (this.engineProtocol = r.engineProtocol),
        (this.datasourceOverrides = r.datasources
          ? this.convertDatasources(r.datasources)
          : {}),
        r.enableDebugLogs && (this.logLevel = "debug"),
        (this.libraryInstantiationPromise = this.instantiateLibrary()),
        Ii.install(),
        this.checkForTooManyEngines();
    }
    get beforeExitListener() {
      return Ii.getListener(this);
    }
    set beforeExitListener(r) {
      Ii.setListener(this, r);
    }
    checkForTooManyEngines() {
      ca === 10 &&
        console.warn(
          `${Re("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`,
        );
    }
    async transaction(r, n, i) {
      await this.start();
      let o = JSON.stringify(n),
        s;
      if (r === "start") {
        let l = JSON.stringify({
          max_wait: i?.maxWait ?? 2e3,
          timeout: i?.timeout ?? 5e3,
          isolation_level: i?.isolationLevel,
        });
        s = await this.engine?.startTransaction(l, o);
      } else
        r === "commit"
          ? (s = await this.engine?.commitTransaction(i.id, o))
          : r === "rollback" &&
            (s = await this.engine?.rollbackTransaction(i.id, o));
      let a = this.parseEngineResponse(s);
      if (a.error_code)
        throw new ie(a.message, {
          code: a.error_code,
          clientVersion: this.config.clientVersion,
          meta: a.meta,
        });
      return a;
    }
    async instantiateLibrary() {
      if ((qe("internalSetup"), this.libraryInstantiationPromise))
        return this.libraryInstantiationPromise;
      Yn(),
        (this.platform = await this.getPlatform()),
        await this.loadEngine(),
        this.version();
    }
    async getPlatform() {
      if (this.platform) return this.platform;
      let r = await ft();
      if (!ua.includes(r))
        throw new Q(
          `Unknown ${R("PRISMA_QUERY_ENGINE_LIBRARY")} ${R(v(r))}. Possible binaryTargets: ${S(ua.join(", "))} or a path to the query engine library.
You may have to run ${S("prisma generate")} for your changes to take effect.`,
          this.config.clientVersion,
        );
      return r;
    }
    parseEngineResponse(r) {
      if (!r)
        throw new oe("Response from the Engine was empty", {
          clientVersion: this.config.clientVersion,
        });
      try {
        return JSON.parse(r);
      } catch {
        throw new oe("Unable to JSON.parse response from engine", {
          clientVersion: this.config.clientVersion,
        });
      }
    }
    convertDatasources(r) {
      let n = Object.create(null);
      for (let { name: i, url: o } of r) n[i] = o;
      return n;
    }
    async loadEngine() {
      if (!this.engine) {
        this.QueryEngineConstructor ||
          ((this.library = await this.libraryLoader.loadLibrary()),
          (this.QueryEngineConstructor = this.library.QueryEngine));
        try {
          let r = new WeakRef(this);
          (this.engine = new this.QueryEngineConstructor(
            {
              datamodel: this.datamodel,
              env: process.env,
              logQueries: this.config.logQueries ?? !1,
              ignoreEnvVarErrors: !0,
              datasourceOverrides: this.datasourceOverrides,
              logLevel: this.logLevel,
              configDir: this.config.cwd,
              engineProtocol: this.engineProtocol,
            },
            (n) => {
              r.deref()?.logger(n);
            },
          )),
            ca++;
        } catch (r) {
          let n = r,
            i = this.parseInitError(n.message);
          throw typeof i == "string"
            ? n
            : new Q(i.message, this.config.clientVersion, i.error_code);
        }
      }
    }
    logger(r) {
      let n = this.parseEngineResponse(r);
      if (!!n) {
        if ("span" in n) {
          this.config.tracingHelper.createEngineSpan(n);
          return;
        }
        (n.level = n?.level.toLowerCase() ?? "unknown"),
          Bp(n)
            ? this.logEmitter.emit("query", {
                timestamp: new Date(),
                query: n.query,
                params: n.params,
                duration: Number(n.duration_ms),
                target: n.module_path,
              })
            : Vp(n)
              ? (this.loggerRustPanic = new be(
                  this.getErrorMessageWithLink(
                    `${n.message}: ${n.reason} in ${n.file}:${n.line}:${n.column}`,
                  ),
                  this.config.clientVersion,
                ))
              : this.logEmitter.emit(n.level, {
                  timestamp: new Date(),
                  message: n.message,
                  target: n.module_path,
                });
      }
    }
    getErrorMessageWithLink(r) {
      return sa({
        platform: this.platform,
        title: r,
        version: this.config.clientVersion,
        engineVersion: this.versionInfo?.commit,
        database: this.config.activeProvider,
        query: this.lastQuery,
      });
    }
    parseInitError(r) {
      try {
        return JSON.parse(r);
      } catch {}
      return r;
    }
    parseRequestError(r) {
      try {
        return JSON.parse(r);
      } catch {}
      return r;
    }
    on(r, n) {
      r === "beforeExit"
        ? (this.beforeExitListener = n)
        : this.logEmitter.on(r, n);
    }
    async start() {
      if (
        (await this.libraryInstantiationPromise,
        await this.libraryStoppingPromise,
        this.libraryStartingPromise)
      )
        return (
          qe(
            `library already starting, this.libraryStarted: ${this.libraryStarted}`,
          ),
          this.libraryStartingPromise
        );
      if (this.libraryStarted) return;
      let r = async () => {
        qe("library starting");
        try {
          let n = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.connect(JSON.stringify(n)),
            (this.libraryStarted = !0),
            qe("library started");
        } catch (n) {
          let i = this.parseInitError(n.message);
          throw typeof i == "string"
            ? n
            : new Q(i.message, this.config.clientVersion, i.error_code);
        } finally {
          this.libraryStartingPromise = void 0;
        }
      };
      return (
        (this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan(
          "connect",
          r,
        )),
        this.libraryStartingPromise
      );
    }
    async stop() {
      if (
        (await this.libraryStartingPromise,
        await this.executingQueryPromise,
        this.libraryStoppingPromise)
      )
        return qe("library is already stopping"), this.libraryStoppingPromise;
      if (!this.libraryStarted) return;
      let r = async () => {
        await new Promise((i) => setTimeout(i, 5)), qe("library stopping");
        let n = { traceparent: this.config.tracingHelper.getTraceParent() };
        await this.engine?.disconnect(JSON.stringify(n)),
          (this.libraryStarted = !1),
          (this.libraryStoppingPromise = void 0),
          qe("library stopped");
      };
      return (
        (this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan(
          "disconnect",
          r,
        )),
        this.libraryStoppingPromise
      );
    }
    async getDmmf() {
      await this.start();
      let r = this.config.tracingHelper.getTraceParent(),
        n = await this.engine.dmmf(JSON.stringify({ traceparent: r }));
      return this.config.tracingHelper.runInChildSpan(
        { name: "parseDmmf", internal: !0 },
        () => JSON.parse(n),
      );
    }
    version() {
      return (
        (this.versionInfo = this.library?.version()),
        this.versionInfo?.version ?? "unknown"
      );
    }
    debugPanic(r) {
      return this.library?.debugPanic(r);
    }
    async request(r, { traceparent: n, interactiveTransaction: i }) {
      qe(`sending request, this.libraryStarted: ${this.libraryStarted}`);
      let o = JSON.stringify({ traceparent: n }),
        s = JSON.stringify(r);
      try {
        await this.start(),
          (this.executingQueryPromise = this.engine?.query(s, o, i?.id)),
          (this.lastQuery = s);
        let a = this.parseEngineResponse(await this.executingQueryPromise);
        if (a.errors)
          throw a.errors.length === 1
            ? this.buildQueryError(a.errors[0])
            : new oe(JSON.stringify(a.errors), {
                clientVersion: this.config.clientVersion,
              });
        if (this.loggerRustPanic) throw this.loggerRustPanic;
        return { data: a, elapsed: 0 };
      } catch (a) {
        if (a instanceof Q) throw a;
        if (a.code === "GenericFailure" && a.message?.startsWith("PANIC:"))
          throw new be(
            this.getErrorMessageWithLink(a.message),
            this.config.clientVersion,
          );
        let l = this.parseRequestError(a.message);
        throw typeof l == "string"
          ? a
          : new oe(
              `${l.message}
${l.backtrace}`,
              { clientVersion: this.config.clientVersion },
            );
      }
    }
    async requestBatch(r, { transaction: n, traceparent: i }) {
      qe("requestBatch");
      let o = ta(r, n);
      await this.start(),
        (this.lastQuery = JSON.stringify(o)),
        (this.executingQueryPromise = this.engine.query(
          this.lastQuery,
          JSON.stringify({ traceparent: i }),
          aa(n),
        ));
      let s = await this.executingQueryPromise,
        a = this.parseEngineResponse(s);
      if (a.errors)
        throw a.errors.length === 1
          ? this.buildQueryError(a.errors[0])
          : new oe(JSON.stringify(a.errors), {
              clientVersion: this.config.clientVersion,
            });
      let { batchResult: l, errors: u } = a;
      if (Array.isArray(l))
        return l.map((c) =>
          c.errors && c.errors.length > 0
            ? (this.loggerRustPanic ?? this.buildQueryError(c.errors[0]))
            : { data: c, elapsed: 0 },
        );
      throw u && u.length === 1
        ? new Error(u[0].error)
        : new Error(JSON.stringify(a));
    }
    buildQueryError(r) {
      return r.user_facing_error.is_panic
        ? new be(
            this.getErrorMessageWithLink(r.user_facing_error.message),
            this.config.clientVersion,
          )
        : Gs(r, this.config.clientVersion);
    }
    async metrics(r) {
      await this.start();
      let n = await this.engine.metrics(JSON.stringify(r));
      return r.format === "prometheus" ? n : this.parseEngineResponse(n);
    }
  };
var or = "<unknown>";
function da(e) {
  var t = e.split(`
`);
  return t.reduce(function (r, n) {
    var i = Up(n) || Gp(n) || zp(n) || ed(n) || Zp(n);
    return i && r.push(i), r;
  }, []);
}
var Kp =
    /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  Qp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function Up(e) {
  var t = Kp.exec(e);
  if (!t) return null;
  var r = t[2] && t[2].indexOf("native") === 0,
    n = t[2] && t[2].indexOf("eval") === 0,
    i = Qp.exec(t[2]);
  return (
    n && i != null && ((t[2] = i[1]), (t[3] = i[2]), (t[4] = i[3])),
    {
      file: r ? null : t[2],
      methodName: t[1] || or,
      arguments: r ? [t[2]] : [],
      lineNumber: t[3] ? +t[3] : null,
      column: t[4] ? +t[4] : null,
    }
  );
}
var Jp =
  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Gp(e) {
  var t = Jp.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || or,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var Wp =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
  Hp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function zp(e) {
  var t = Wp.exec(e);
  if (!t) return null;
  var r = t[3] && t[3].indexOf(" > eval") > -1,
    n = Hp.exec(t[3]);
  return (
    r && n != null && ((t[3] = n[1]), (t[4] = n[2]), (t[5] = null)),
    {
      file: t[3],
      methodName: t[1] || or,
      arguments: t[2] ? t[2].split(",") : [],
      lineNumber: t[4] ? +t[4] : null,
      column: t[5] ? +t[5] : null,
    }
  );
}
var Yp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function Zp(e) {
  var t = Yp.exec(e);
  return t
    ? {
        file: t[3],
        methodName: t[1] || or,
        arguments: [],
        lineNumber: +t[4],
        column: t[5] ? +t[5] : null,
      }
    : null;
}
var Xp =
  /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function ed(e) {
  var t = Xp.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || or,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var Ni = class {
    getLocation() {
      return null;
    }
  },
  _i = class {
    constructor() {
      this._error = new Error();
    }
    getLocation() {
      let t = this._error.stack;
      if (!t) return null;
      let n = da(t).find((i) => {
        if (!i.file) return !1;
        let o = di(i.file);
        return (
          o !== "<anonymous>" &&
          !o.includes("@prisma") &&
          !o.includes("/packages/client/src/runtime/") &&
          !o.endsWith("/runtime/binary.js") &&
          !o.endsWith("/runtime/library.js") &&
          !o.endsWith("/runtime/data-proxy.js") &&
          !o.endsWith("/runtime/edge.js") &&
          !o.endsWith("/runtime/edge-esm.js") &&
          !o.startsWith("internal/") &&
          !i.methodName.includes("new ") &&
          !i.methodName.includes("getCallSite") &&
          !i.methodName.includes("Proxy.") &&
          i.methodName.split(".").length < 4
        );
      });
      return !n || !n.file
        ? null
        : {
            fileName: n.file,
            lineNumber: n.lineNumber,
            columnNumber: n.column,
          };
    }
  };
function Ye(e) {
  return e === "minimal" ? new Ni() : new _i();
}
var ma = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function At(e = {}) {
  let t = rd(e);
  return Object.entries(t).reduce(
    (n, [i, o]) => (
      ma[i] !== void 0 ? (n.select[i] = { select: o }) : (n[i] = o), n
    ),
    { select: {} },
  );
}
function rd(e = {}) {
  return typeof e._count == "boolean"
    ? { ...e, _count: { _all: e._count } }
    : e;
}
function rn(e = {}) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
function fa(e, t) {
  let r = rn(e);
  return t({ action: "aggregate", unpacker: r, argsMapper: At })(e);
}
function nd(e = {}) {
  let { select: t, ...r } = e;
  return typeof t == "object"
    ? At({ ...r, _count: t })
    : At({ ...r, _count: { _all: !0 } });
}
function id(e = {}) {
  return typeof e.select == "object"
    ? (t) => rn(e)(t)._count
    : (t) => rn(e)(t)._count._all;
}
function ga(e, t) {
  return t({ action: "count", unpacker: id(e), argsMapper: nd })(e);
}
function od(e = {}) {
  let t = At(e);
  if (Array.isArray(t.by))
    for (let r of t.by) typeof r == "string" && (t.select[r] = !0);
  return t;
}
function sd(e = {}) {
  return (t) => (
    typeof e?._count == "boolean" &&
      t.forEach((r) => {
        r._count = r._count._all;
      }),
    t
  );
}
function ya(e, t) {
  return t({ action: "groupBy", unpacker: sd(e), argsMapper: od })(e);
}
function ha(e, t, r) {
  if (t === "aggregate") return (n) => fa(n, r);
  if (t === "count") return (n) => ga(n, r);
  if (t === "groupBy") return (n) => ya(n, r);
}
function ba(e, t) {
  let r = t.fields.filter((i) => !i.relationName),
    n = fi(r, (i) => i.name);
  return new Proxy(
    {},
    {
      get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new Ee(e, o, s.type, s.isList, s.kind === "enum");
      },
      ...zr(Object.keys(n)),
    },
  );
}
var xa = (e) => (Array.isArray(e) ? e : e.split(".")),
  sr = (e, t) => xa(t).reduce((r, n) => r && r[n], e),
  nn = (e, t, r) =>
    xa(t).reduceRight(
      (n, i, o, s) => Object.assign({}, sr(e, s.slice(0, o)), { [i]: n }),
      r,
    );
function ad(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
function ld(e, t, r) {
  return t === void 0 ? (e ?? {}) : nn(t, r, e || !0);
}
function Li(e, t, r, n, i, o) {
  let a = e._runtimeDataModel.models[t].fields.reduce(
    (l, u) => ({ ...l, [u.name]: u }),
    {},
  );
  return (l) => {
    let u = Ye(e._errorFormat),
      c = ad(n, i),
      p = ld(l, o, c),
      d = r({ dataPath: c, callsite: u })(p),
      m = ud(e, t);
    return new Proxy(d, {
      get(f, g) {
        if (!m.includes(g)) return f[g];
        let y = [a[g].type, r, g],
          w = [c, p];
        return Li(e, ...y, ...w);
      },
      ...zr([...m, ...Object.getOwnPropertyNames(d)]),
    });
  };
}
function ud(e, t) {
  return e._runtimeDataModel.models[t].fields
    .filter((r) => r.kind === "object")
    .map((r) => r.name);
}
var it = F(qt());
var Qi = F(Kt());
function Te(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
function Ea(e, t, r) {
  let n = Te(r);
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : cd({
        ...e,
        ...wa(t.name, e, t.result.$allModels),
        ...wa(t.name, e, t.result[n]),
      });
}
function cd(e) {
  let t = new Ie(),
    r = (n, i) =>
      t.getOrCreate(n, () =>
        i.has(n)
          ? [n]
          : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]),
      );
  return gt(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function wa(e, t, r) {
  return r
    ? gt(r, ({ needs: n, compute: i }, o) => ({
        name: o,
        needs: n ? Object.keys(n).filter((s) => n[s]) : [],
        compute: pd(t, o, i),
      }))
    : {};
}
function pd(e, t, r) {
  let n = e?.[t]?.compute;
  return n ? (i) => r({ ...i, [t]: n(i) }) : r;
}
function on(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (!!e[n.name]) for (let i of n.needs) r[i] = !0;
  return r;
}
var Ca = F(qt());
var Aa = F(require("fs"));
var Ta = {
  keyword: Ve,
  entity: Ve,
  value: (e) => v(st(e)),
  punctuation: st,
  directive: Ve,
  function: Ve,
  variable: (e) => v(st(e)),
  string: (e) => v(S(e)),
  boolean: Re,
  number: Ve,
  comment: br,
};
var dd = (e) => e,
  sn = {},
  md = 0,
  A = {
    manual: sn.Prism && sn.Prism.manual,
    disableWorkerMessageHandler:
      sn.Prism && sn.Prism.disableWorkerMessageHandler,
    util: {
      encode: function (e) {
        if (e instanceof Fe) {
          let t = e;
          return new Fe(t.type, A.util.encode(t.content), t.alias);
        } else
          return Array.isArray(e)
            ? e.map(A.util.encode)
            : e
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/\u00a0/g, " ");
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        return (
          e.__id || Object.defineProperty(e, "__id", { value: ++md }), e.__id
        );
      },
      clone: function e(t, r) {
        let n,
          i,
          o = A.util.type(t);
        switch (((r = r || {}), o)) {
          case "Object":
            if (((i = A.util.objId(t)), r[i])) return r[i];
            (n = {}), (r[i] = n);
            for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
            return n;
          case "Array":
            return (
              (i = A.util.objId(t)),
              r[i]
                ? r[i]
                : ((n = []),
                  (r[i] = n),
                  t.forEach(function (s, a) {
                    n[a] = e(s, r);
                  }),
                  n)
            );
          default:
            return t;
        }
      },
    },
    languages: {
      extend: function (e, t) {
        let r = A.util.clone(A.languages[e]);
        for (let n in t) r[n] = t[n];
        return r;
      },
      insertBefore: function (e, t, r, n) {
        n = n || A.languages;
        let i = n[e],
          o = {};
        for (let a in i)
          if (i.hasOwnProperty(a)) {
            if (a == t) for (let l in r) r.hasOwnProperty(l) && (o[l] = r[l]);
            r.hasOwnProperty(a) || (o[a] = i[a]);
          }
        let s = n[e];
        return (
          (n[e] = o),
          A.languages.DFS(A.languages, function (a, l) {
            l === s && a != e && (this[a] = o);
          }),
          o
        );
      },
      DFS: function e(t, r, n, i) {
        i = i || {};
        let o = A.util.objId;
        for (let s in t)
          if (t.hasOwnProperty(s)) {
            r.call(t, s, t[s], n || s);
            let a = t[s],
              l = A.util.type(a);
            l === "Object" && !i[o(a)]
              ? ((i[o(a)] = !0), e(a, r, null, i))
              : l === "Array" && !i[o(a)] && ((i[o(a)] = !0), e(a, r, s, i));
          }
      },
    },
    plugins: {},
    highlight: function (e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return (
        A.hooks.run("before-tokenize", n),
        (n.tokens = A.tokenize(n.code, n.grammar)),
        A.hooks.run("after-tokenize", n),
        Fe.stringify(A.util.encode(n.tokens), n.language)
      );
    },
    matchGrammar: function (e, t, r, n, i, o, s) {
      for (let g in r) {
        if (!r.hasOwnProperty(g) || !r[g]) continue;
        if (g == s) return;
        let b = r[g];
        b = A.util.type(b) === "Array" ? b : [b];
        for (let y = 0; y < b.length; ++y) {
          let w = b[y],
            x = w.inside,
            E = !!w.lookbehind,
            C = !!w.greedy,
            O = 0,
            B = w.alias;
          if (C && !w.pattern.global) {
            let k = w.pattern.toString().match(/[imuy]*$/)[0];
            w.pattern = RegExp(w.pattern.source, k + "g");
          }
          w = w.pattern || w;
          for (let k = n, U = i; k < t.length; U += t[k].length, ++k) {
            let J = t[k];
            if (t.length > e.length) return;
            if (J instanceof Fe) continue;
            if (C && k != t.length - 1) {
              w.lastIndex = U;
              var p = w.exec(e);
              if (!p) break;
              var c = p.index + (E ? p[1].length : 0),
                d = p.index + p[0].length,
                a = k,
                l = U;
              for (
                let N = t.length;
                a < N && (l < d || (!t[a].type && !t[a - 1].greedy));
                ++a
              )
                (l += t[a].length), c >= l && (++k, (U = l));
              if (t[k] instanceof Fe) continue;
              (u = a - k), (J = e.slice(U, l)), (p.index -= U);
            } else {
              w.lastIndex = 0;
              var p = w.exec(J),
                u = 1;
            }
            if (!p) {
              if (o) break;
              continue;
            }
            E && (O = p[1] ? p[1].length : 0);
            var c = p.index + O,
              p = p[0].slice(O),
              d = c + p.length,
              m = J.slice(0, c),
              f = J.slice(d);
            let re = [k, u];
            m && (++k, (U += m.length), re.push(m));
            let ot = new Fe(g, x ? A.tokenize(p, x) : p, B, p, C);
            if (
              (re.push(ot),
              f && re.push(f),
              Array.prototype.splice.apply(t, re),
              u != 1 && A.matchGrammar(e, t, r, k, U, !0, g),
              o)
            )
              break;
          }
        }
      }
    },
    tokenize: function (e, t) {
      let r = [e],
        n = t.rest;
      if (n) {
        for (let i in n) t[i] = n[i];
        delete t.rest;
      }
      return A.matchGrammar(e, r, t, 0, 0, !1), r;
    },
    hooks: {
      all: {},
      add: function (e, t) {
        let r = A.hooks.all;
        (r[e] = r[e] || []), r[e].push(t);
      },
      run: function (e, t) {
        let r = A.hooks.all[e];
        if (!(!r || !r.length)) for (var n = 0, i; (i = r[n++]); ) i(t);
      },
    },
    Token: Fe,
  };
A.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
};
A.languages.javascript = A.languages.extend("clike", {
  "class-name": [
    A.languages.clike["class-name"],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  number:
    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function:
    /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator:
    /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});
A.languages.javascript["class-name"][0].pattern =
  /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
A.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern:
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0,
  },
  "function-variable": {
    pattern:
      /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function",
  },
  parameter: [
    {
      pattern:
        /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: !0,
      inside: A.languages.javascript,
    },
    {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
      inside: A.languages.javascript,
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: A.languages.javascript,
    },
    {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: A.languages.javascript,
    },
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
A.languages.markup && A.languages.markup.tag.addInlined("script", "javascript");
A.languages.js = A.languages.javascript;
A.languages.typescript = A.languages.extend("javascript", {
  keyword:
    /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  builtin:
    /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
A.languages.ts = A.languages.typescript;
function Fe(e, t, r, n, i) {
  (this.type = e),
    (this.content = t),
    (this.alias = r),
    (this.length = (n || "").length | 0),
    (this.greedy = !!i);
}
Fe.stringify = function (e, t) {
  return typeof e == "string"
    ? e
    : Array.isArray(e)
      ? e
          .map(function (r) {
            return Fe.stringify(r, t);
          })
          .join("")
      : fd(e.type)(e.content);
};
function fd(e) {
  return Ta[e] || dd;
}
function Pa(e) {
  return gd(e, A.languages.javascript);
}
function gd(e, t) {
  return A.tokenize(e, t)
    .map((n) => Fe.stringify(n))
    .join("");
}
var Ma = F(Wn());
function va(e) {
  return (0, Ma.default)(e);
}
var Se = class {
  static read(t) {
    let r;
    try {
      r = Aa.default.readFileSync(t, "utf-8");
    } catch {
      return null;
    }
    return Se.fromContent(r);
  }
  static fromContent(t) {
    let r = t.split(/\r?\n/);
    return new Se(1, r);
  }
  constructor(t, r) {
    (this.firstLineNumber = t), (this.lines = r);
  }
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  mapLineAt(t, r) {
    if (
      t < this.firstLineNumber ||
      t > this.lines.length + this.firstLineNumber
    )
      return this;
    let n = t - this.firstLineNumber,
      i = [...this.lines];
    return (i[n] = r(i[n])), new Se(this.firstLineNumber, i);
  }
  mapLines(t) {
    return new Se(
      this.firstLineNumber,
      this.lines.map((r, n) => t(r, this.firstLineNumber + n)),
    );
  }
  lineAt(t) {
    return this.lines[t - this.firstLineNumber];
  }
  prependSymbolAt(t, r) {
    return this.mapLines((n, i) => (i === t ? `${r} ${n}` : `  ${n}`));
  }
  slice(t, r) {
    let n = this.lines.slice(t - 1, r).join(`
`);
    return new Se(
      t,
      va(n).split(`
`),
    );
  }
  highlight() {
    let t = Pa(this.toString());
    return new Se(
      this.firstLineNumber,
      t.split(`
`),
    );
  }
  toString() {
    return this.lines.join(`
`);
  }
};
var yd = {
    red: R,
    gray: br,
    dim: $,
    bold: v,
    underline: ce,
    highlightSource: (e) => e.highlight(),
  },
  hd = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
function bd(
  { callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i },
  o,
) {
  let s = {
    functionName: `prisma.${r}()`,
    message: t,
    isPanic: n ?? !1,
    callArguments: i,
  };
  if (!e || typeof window < "u" || process.env.NODE_ENV === "production")
    return s;
  let a = e.getLocation();
  if (!a || !a.lineNumber || !a.columnNumber) return s;
  let l = Math.max(1, a.lineNumber - 3),
    u = Se.read(a.fileName)?.slice(l, a.lineNumber),
    c = u?.lineAt(a.lineNumber);
  if (u && c) {
    let p = wd(c),
      d = xd(c);
    if (!d) return s;
    (s.functionName = `${d.code})`),
      (s.location = a),
      n ||
        (u = u.mapLineAt(a.lineNumber, (f) => f.slice(0, d.openingBraceIndex))),
      (u = o.highlightSource(u));
    let m = String(u.lastLineNumber).length;
    if (
      ((s.contextLines = u
        .mapLines((f, g) => o.gray(String(g).padStart(m)) + " " + f)
        .mapLines((f) => o.dim(f))
        .prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192")))),
      i)
    ) {
      let f = p + m + 1;
      (f += 2), (s.callArguments = (0, Ca.default)(i, f).slice(f));
    }
  }
  return s;
}
function xd(e) {
  let t = Object.keys(we.ModelAction).join("|"),
    n = new RegExp(String.raw`\.(${t})\(`).exec(e);
  if (n) {
    let i = n.index + n[0].length,
      o = e.lastIndexOf(" ", n.index) + 1;
    return { code: e.slice(o, i), openingBraceIndex: i };
  }
  return null;
}
function wd(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== " ") return t;
    t++;
  }
  return t;
}
function Ed(
  {
    functionName: e,
    location: t,
    message: r,
    isPanic: n,
    contextLines: i,
    callArguments: o,
  },
  s,
) {
  let a = [""],
    l = t ? " in" : ":";
  if (
    (n
      ? (a.push(
          s.red(
            `Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`,
          ),
        ),
        a.push(
          s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`),
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)),
    t && a.push(s.underline(Td(t))),
    i)
  ) {
    a.push("");
    let u = [i.toString()];
    o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
  } else a.push(""), o && a.push(o), a.push("");
  return (
    a.push(r),
    a.join(`
`)
  );
}
function Td(e) {
  let t = [e.fileName];
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(":")
  );
}
function _e(e) {
  let t = e.showColors ? yd : hd,
    r = bd(e, t);
  return Ed(r, t);
}
function Sa(e) {
  return e instanceof Buffer || e instanceof Date || e instanceof RegExp;
}
function Oa(e) {
  if (e instanceof Buffer) {
    let t = Buffer.alloc ? Buffer.alloc(e.length) : new Buffer(e.length);
    return e.copy(t), t;
  } else {
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof RegExp) return new RegExp(e);
    throw new Error("Unexpected situation");
  }
}
function Ra(e) {
  let t = [];
  return (
    e.forEach(function (r, n) {
      typeof r == "object" && r !== null
        ? Array.isArray(r)
          ? (t[n] = Ra(r))
          : Sa(r)
            ? (t[n] = Oa(r))
            : (t[n] = ar({}, r))
        : (t[n] = r);
    }),
    t
  );
}
function Fa(e, t) {
  return t === "__proto__" ? void 0 : e[t];
}
var ar = function (e, ...t) {
  if (!e || typeof e != "object") return !1;
  if (t.length === 0) return e;
  let r, n;
  for (let i of t)
    if (!(typeof i != "object" || i === null || Array.isArray(i))) {
      for (let o of Object.keys(i))
        if (((n = Fa(e, o)), (r = Fa(i, o)), r !== e))
          if (typeof r != "object" || r === null) {
            e[o] = r;
            continue;
          } else if (Array.isArray(r)) {
            e[o] = Ra(r);
            continue;
          } else if (Sa(r)) {
            e[o] = Oa(r);
            continue;
          } else if (typeof n != "object" || n === null || Array.isArray(n)) {
            e[o] = ar({}, r);
            continue;
          } else {
            e[o] = ar(n, r);
            continue;
          }
    }
  return e;
};
function Da(e, t) {
  if (!e || typeof e != "object" || typeof e.hasOwnProperty != "function")
    return e;
  let r = {};
  for (let n in e) {
    let i = e[n];
    Object.hasOwnProperty.call(e, n) && t(n, i) && (r[n] = i);
  }
  return r;
}
var Pd = {
  "[object Date]": !0,
  "[object Uint8Array]": !0,
  "[object Decimal]": !0,
};
function $a(e) {
  return e
    ? typeof e == "object" && !Pd[Object.prototype.toString.call(e)]
    : !1;
}
function ka(e, t) {
  let r = {},
    n = Array.isArray(t) ? t : [t];
  for (let i in e)
    Object.hasOwnProperty.call(e, i) && !n.includes(i) && (r[i] = e[i]);
  return r;
}
var Bi = F(Kt());
var Md = Na(),
  vd = La(),
  Ad = ja().default,
  Cd = (e, t, r) => {
    let n = [];
    return (function i(o, s = {}, a = "", l = []) {
      s.indent = s.indent || "	";
      let u;
      s.inlineCharacterLimit === void 0
        ? (u = {
            newLine: `
`,
            newLineOrSpace: `
`,
            pad: a,
            indent: a + s.indent,
          })
        : (u = {
            newLine: "@@__STRINGIFY_OBJECT_NEW_LINE__@@",
            newLineOrSpace: "@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",
            pad: "@@__STRINGIFY_OBJECT_PAD__@@",
            indent: "@@__STRINGIFY_OBJECT_INDENT__@@",
          });
      let c = (p) => {
        if (s.inlineCharacterLimit === void 0) return p;
        let d = p
          .replace(new RegExp(u.newLine, "g"), "")
          .replace(new RegExp(u.newLineOrSpace, "g"), " ")
          .replace(new RegExp(u.pad + "|" + u.indent, "g"), "");
        return d.length <= s.inlineCharacterLimit
          ? d
          : p
              .replace(
                new RegExp(u.newLine + "|" + u.newLineOrSpace, "g"),
                `
`,
              )
              .replace(new RegExp(u.pad, "g"), a)
              .replace(new RegExp(u.indent, "g"), a + s.indent);
      };
      if (n.indexOf(o) !== -1) return '"[Circular]"';
      if (Buffer.isBuffer(o)) return `Buffer(${Buffer.length})`;
      if (
        o == null ||
        typeof o == "number" ||
        typeof o == "boolean" ||
        typeof o == "function" ||
        typeof o == "symbol" ||
        o instanceof z ||
        Md(o)
      )
        return String(o);
      if (de(o))
        return `new Date('${$e(o) ? o.toISOString() : "Invalid Date"}')`;
      if (o instanceof Ee) return `prisma.${vt(o.modelName)}.fields.${o.name}`;
      if (Array.isArray(o)) {
        if (o.length === 0) return "[]";
        n.push(o);
        let p =
          "[" +
          u.newLine +
          o
            .map((d, m) => {
              let f = o.length - 1 === m ? u.newLine : "," + u.newLineOrSpace,
                g = i(d, s, a + s.indent, [...l, m]);
              s.transformValue && (g = s.transformValue(o, m, g));
              let b = u.indent + g + f;
              return (
                s.transformLine &&
                  (b = s.transformLine({
                    obj: o,
                    indent: u.indent,
                    key: m,
                    stringifiedValue: g,
                    value: o[m],
                    eol: f,
                    originalLine: b,
                    path: l.concat(m),
                  })),
                b
              );
            })
            .join("") +
          u.pad +
          "]";
        return n.pop(), c(p);
      }
      if (vd(o)) {
        let p = Object.keys(o).concat(Ad(o));
        if ((s.filter && (p = p.filter((m) => s.filter(o, m))), p.length === 0))
          return "{}";
        n.push(o);
        let d =
          "{" +
          u.newLine +
          p
            .map((m, f) => {
              let g = p.length - 1 === f ? u.newLine : "," + u.newLineOrSpace,
                b = typeof m == "symbol",
                y = !b && /^[a-z$_][a-z$_0-9]*$/i.test(m),
                w = b || y ? m : i(m, s, void 0, [...l, m]),
                x = i(o[m], s, a + s.indent, [...l, m]);
              s.transformValue && (x = s.transformValue(o, m, x));
              let E = u.indent + String(w) + ": " + x + g;
              return (
                s.transformLine &&
                  (E = s.transformLine({
                    obj: o,
                    indent: u.indent,
                    key: w,
                    stringifiedValue: x,
                    value: o[m],
                    eol: g,
                    originalLine: E,
                    path: l.concat(w),
                  })),
                E
              );
            })
            .join("") +
          u.pad +
          "}";
        return n.pop(), c(d);
      }
      return (
        (o = String(o).replace(/[\r\n]/g, (p) =>
          p ===
          `
`
            ? "\\n"
            : "\\r",
        )),
        s.singleQuotes === !1
          ? ((o = o.replace(/"/g, '\\"')), `"${o}"`)
          : ((o = o.replace(/\\?'/g, "\\'")), `'${o}'`)
      );
    })(e, t, r);
  },
  lr = Cd;
var qi = "@@__DIM_POINTER__@@";
function an({ ast: e, keyPaths: t, valuePaths: r, missingItems: n }) {
  let i = e;
  for (let { path: o, type: s } of n) i = nn(i, o, s);
  return lr(i, {
    indent: "  ",
    transformLine: ({
      indent: o,
      key: s,
      value: a,
      stringifiedValue: l,
      eol: u,
      path: c,
    }) => {
      let p = c.join("."),
        d = t.includes(p),
        m = r.includes(p),
        f = n.find((b) => b.path === p),
        g = l;
      if (f) {
        typeof a == "string" && (g = g.slice(1, g.length - 1));
        let b = f.isRequired ? "" : "?",
          y = f.isRequired ? "+" : "?",
          x = (f.isRequired ? (E) => v(S(E)) : S)(
            Od(s + b + ": " + g + u, o, y),
          );
        return f.isRequired || (x = $(x)), x;
      } else {
        let b = n.some((E) => p.startsWith(E.path)),
          y = s[s.length - 2] === "?";
        y && (s = s.slice(1, s.length - 1)),
          y &&
            typeof a == "object" &&
            a !== null &&
            (g = g
              .split(
                `
`,
              )
              .map((E, C, O) => (C === O.length - 1 ? E + qi : E)).join(`
`)),
          b &&
            typeof a == "string" &&
            ((g = g.slice(1, g.length - 1)), y || (g = v(g))),
          (typeof a != "object" || a === null) && !m && !b && (g = $(g));
        let w = "";
        typeof s == "string" && (w = (d ? R(s) : s) + ": "), (g = m ? R(g) : g);
        let x = o + w + g + (b ? u : $(u));
        if (d || m) {
          let E = x.split(`
`),
            C = String(s).length,
            O = d ? R("~".repeat(C)) : " ".repeat(C),
            B = m ? Fd(o, s, a, l) : 0,
            k = m && qa(a),
            U = m ? "  " + R("~".repeat(B)) : "";
          O && O.length > 0 && !k && E.splice(1, 0, o + O + U),
            O &&
              O.length > 0 &&
              k &&
              E.splice(E.length - 1, 0, o.slice(0, o.length - 2) + U),
            (x = E.join(`
`));
        }
        return x;
      }
    },
  });
}
function Fd(e, t, r, n) {
  return r === null
    ? 4
    : typeof r == "string"
      ? r.length + 2
      : Array.isArray(r) && r.length == 0
        ? 2
        : qa(r)
          ? Math.abs(Sd(`${t}: ${(0, Bi.default)(n)}`) - e.length)
          : de(r)
            ? $e(r)
              ? `new Date('${r.toISOString()}')`.length
              : 24
            : String(r).length;
}
function qa(e) {
  return typeof e == "object" && e !== null && !(e instanceof z) && !de(e);
}
function Sd(e) {
  return e
    .split(
      `
`,
    )
    .reduce((t, r) => (r.length > t ? r.length : t), 0);
}
function Od(e, t, r) {
  return e
    .split(
      `
`,
    )
    .map((n, i, o) =>
      i === 0 ? r + t.slice(1) + n : i < o.length - 1 ? r + n.slice(1) : n,
    )
    .map((n) =>
      (0, Bi.default)(n).includes(qi)
        ? $(n.replace(qi, ""))
        : n.includes("?")
          ? $(n)
          : n,
    ).join(`
`);
}
var ur = 2,
  Ui = class {
    constructor(t, r) {
      this.type = t;
      this.children = r;
      this.printFieldError = ({ error: t }, r, n) => {
        if (t.type === "emptySelect") {
          let i = n ? "" : ` Available options are listed in ${$(S("green"))}.`;
          return `The ${R("`select`")} statement for type ${v(er(t.field.outputType.type))} must not be empty.${i}`;
        }
        if (t.type === "emptyInclude") {
          if (r.length === 0)
            return `${v(er(t.field.outputType.type))} does not have any relation and therefore can't have an ${R("`include`")} statement.`;
          let i = n ? "" : ` Available options are listed in ${$(S("green"))}.`;
          return `The ${R("`include`")} statement for type ${R(er(t.field.outputType.type))} must not be empty.${i}`;
        }
        if (t.type === "noTrueSelect")
          return `The ${R("`select`")} statement for type ${R(er(t.field.outputType.type))} needs ${R("at least one truthy value")}.`;
        if (t.type === "includeAndSelect")
          return `Please ${v("either")} use ${S("`include`")} or ${S("`select`")}, but ${R("not both")} at the same time.`;
        if (t.type === "invalidFieldName") {
          let i = t.isInclude ? "include" : "select",
            o = t.isIncludeScalar ? "Invalid scalar" : "Unknown",
            s = n
              ? ""
              : t.isInclude && r.length === 0
                ? `
This model has no relations, so you can't use ${R("include")} with it.`
                : ` Available options are listed in ${$(S("green"))}.`,
            a = `${o} field ${R(`\`${t.providedName}\``)} for ${R(i)} statement on model ${v(Dt(t.modelName))}.${s}`;
          return (
            t.didYouMean && (a += ` Did you mean ${S(`\`${t.didYouMean}\``)}?`),
            t.isIncludeScalar &&
              (a += `
Note, that ${v("include")} statements only accept relation fields.`),
            a
          );
        }
        if (t.type === "invalidFieldType")
          return `Invalid value ${R(`${lr(t.providedValue)}`)} of type ${R(Pt(t.providedValue, void 0))} for field ${v(`${t.fieldName}`)} on model ${v(Dt(t.modelName))}. Expected either ${S("true")} or ${S("false")}.`;
      };
      this.printArgError = ({ error: t, path: r }, n, i) => {
        if (t.type === "invalidName") {
          let o = `Unknown arg ${R(`\`${t.providedName}\``)} in ${v(r.join("."))} for type ${v(t.outputType ? t.outputType.name : Zt(t.originalType))}.`;
          return (
            t.didYouMeanField
              ? (o += `
\u2192 Did you forget to wrap it with \`${S("select")}\`? ${$("e.g. " + S(`{ select: { ${t.providedName}: ${t.providedValue} } }`))}`)
              : t.didYouMeanArg
                ? ((o += ` Did you mean \`${S(t.didYouMeanArg)}\`?`),
                  !n &&
                    !i &&
                    (o +=
                      ` ${$("Available args:")}
` + Mt(t.originalType, !0)))
                : t.originalType.fields.length === 0
                  ? (o += ` The field ${v(t.originalType.name)} has no arguments.`)
                  : !n &&
                    !i &&
                    (o +=
                      ` Available args:

` + Mt(t.originalType, !0)),
            o
          );
        }
        if (t.type === "invalidType") {
          let o = lr(t.providedValue, { indent: "  " }),
            s =
              o.split(`
`).length > 1;
          if (
            (s &&
              (o = `
${o}
`),
            t.requiredType.bestFittingType.location === "enumTypes")
          )
            return `Argument ${v(t.argName)}: Provided value ${R(o)}${s ? "" : " "}of type ${R(Pt(t.providedValue))} on ${v(`prisma.${this.children[0].name}`)} is not a ${S(Xt(Tt(t.requiredType.bestFittingType.type), t.requiredType.bestFittingType.isList))}.
\u2192 Possible values: ${t.requiredType.bestFittingType.type.values.map((c) => S(`${Tt(t.requiredType.bestFittingType.type)}.${c}`)).join(", ")}`;
          let a = ".";
          Ct(t.requiredType.bestFittingType.type) &&
            (a =
              `:
` + Mt(t.requiredType.bestFittingType.type));
          let l = `${t.requiredType.inputType.map((c) => S(Xt(Tt(c.type), t.requiredType.bestFittingType.isList))).join(" or ")}${a}`,
            u =
              (t.requiredType.inputType.length === 2 &&
                t.requiredType.inputType.find((c) => Ct(c.type))) ||
              null;
          return (
            u &&
              (l +=
                `
` + Mt(u.type, !0)),
            `Argument ${v(t.argName)}: Got invalid value ${R(o)}${s ? "" : " "}on ${v(`prisma.${this.children[0].name}`)}. Provided ${R(Pt(t.providedValue))}, expected ${l}`
          );
        }
        if (t.type === "invalidNullArg") {
          let o =
              r.length === 1 && r[0] === t.name
                ? ""
                : ` for ${v(`${r.join(".")}`)}`,
            s = ` Please use ${v(S("undefined"))} instead.`;
          return `Argument ${S(t.name)}${o} must not be ${v("null")}.${s}`;
        }
        if (t.type === "invalidDateArg") {
          let o =
            r.length === 1 && r[0] === t.argName
              ? ""
              : ` for ${v(`${r.join(".")}`)}`;
          return `Argument ${S(t.argName)}${o} is not a valid Date object.`;
        }
        if (t.type === "missingArg") {
          let o =
            r.length === 1 && r[0] === t.missingName
              ? ""
              : ` for ${v(`${r.join(".")}`)}`;
          return `Argument ${S(t.missingName)}${o} is missing.`;
        }
        if (t.type === "atLeastOne") {
          let o = i ? "" : ` Available args are listed in ${$(S("green"))}.`,
            s = t.atLeastFields
              ? ` and at least one argument for ${t.atLeastFields.map((a) => v(a)).join(", or ")}`
              : "";
          return `Argument ${v(r.join("."))} of type ${v(t.inputType.name)} needs ${S("at least one")} argument${v(s)}.${o}`;
        }
        if (t.type === "atMostOne") {
          let o = i
            ? ""
            : ` Please choose one. ${$("Available args:")} 
${Mt(t.inputType, !0)}`;
          return `Argument ${v(r.join("."))} of type ${v(t.inputType.name)} needs ${S("exactly one")} argument, but you provided ${t.providedKeys.map((s) => R(s)).join(" and ")}.${o}`;
        }
      };
      (this.type = t), (this.children = r);
    }
    get [Symbol.toStringTag]() {
      return "Document";
    }
    toString() {
      return `${this.type} {
${(0, it.default)(
  this.children.map(String).join(`
`),
  ur,
)}
}`;
    }
    validate(t, r = !1, n, i, o) {
      t || (t = {});
      let s = this.children.filter((y) => y.hasInvalidChild || y.hasInvalidArg);
      if (s.length === 0) return;
      let a = [],
        l = [],
        u = t && t.select ? "select" : t.include ? "include" : void 0;
      for (let y of s) {
        let w = y.collectErrors(u);
        a.push(
          ...w.fieldErrors.map((x) => ({
            ...x,
            path: r ? x.path : x.path.slice(1),
          })),
        ),
          l.push(
            ...w.argErrors.map((x) => ({
              ...x,
              path: r ? x.path : x.path.slice(1),
            })),
          );
      }
      let c = this.children[0].name,
        p = r ? this.type : c,
        d = [],
        m = [],
        f = [];
      for (let y of a) {
        let w = this.normalizePath(y.path, t).join(".");
        if (y.error.type === "invalidFieldName") {
          d.push(w);
          let x = y.error.outputType,
            { isInclude: E } = y.error;
          x.fields
            .filter((C) =>
              E ? C.outputType.location === "outputObjectTypes" : !0,
            )
            .forEach((C) => {
              let O = w.split(".");
              f.push({
                path: `${O.slice(0, O.length - 1).join(".")}.${C.name}`,
                type: "true",
                isRequired: !1,
              });
            });
        } else
          y.error.type === "includeAndSelect"
            ? (d.push("select"), d.push("include"))
            : m.push(w);
        if (
          y.error.type === "emptySelect" ||
          y.error.type === "noTrueSelect" ||
          y.error.type === "emptyInclude"
        ) {
          let x = this.normalizePath(y.path, t),
            E = x.slice(0, x.length - 1).join(".");
          y.error.field.outputType.type.fields
            ?.filter((O) =>
              y.error.type === "emptyInclude"
                ? O.outputType.location === "outputObjectTypes"
                : !0,
            )
            .forEach((O) => {
              f.push({ path: `${E}.${O.name}`, type: "true", isRequired: !1 });
            });
        }
      }
      for (let y of l) {
        let w = this.normalizePath(y.path, t).join(".");
        if (y.error.type === "invalidName") d.push(w);
        else if (y.error.type !== "missingArg" && y.error.type !== "atLeastOne")
          m.push(w);
        else if (y.error.type === "missingArg") {
          let x =
            y.error.missingArg.inputTypes.length === 1
              ? y.error.missingArg.inputTypes[0].type
              : y.error.missingArg.inputTypes
                  .map((E) => {
                    let C = Zt(E.type);
                    return C === "Null" ? "null" : E.isList ? C + "[]" : C;
                  })
                  .join(" | ");
          f.push({
            path: w,
            type: Ci(x, !0, w.split("where.").length === 2),
            isRequired: y.error.missingArg.isRequired,
          });
        }
      }
      let g = (y) => {
          let w = l.some(
              (J) =>
                J.error.type === "missingArg" && J.error.missingArg.isRequired,
            ),
            x = Boolean(
              l.find(
                (J) =>
                  J.error.type === "missingArg" &&
                  !J.error.missingArg.isRequired,
              ),
            ),
            E = x || w,
            C = "";
          w &&
            (C += `
${$("Note: Lines with ")}${S("+")} ${$("are required")}`),
            x &&
              (C.length === 0 &&
                (C = `
`),
              w
                ? (C += $(`, lines with ${S("?")} are optional`))
                : (C += $(`Note: Lines with ${S("?")} are optional`)),
              (C += $(".")));
          let B = l
            .filter(
              (J) =>
                J.error.type !== "missingArg" || J.error.missingArg.isRequired,
            )
            .map((J) => this.printArgError(J, E, i === "minimal")).join(`
`);
          if (
            ((B += `
${a.map((J) => this.printFieldError(J, f, i === "minimal")).join(`
`)}`),
            i === "minimal")
          )
            return (0, Qi.default)(B);
          let k = {
            ast: r ? { [c]: t } : t,
            keyPaths: d,
            valuePaths: m,
            missingItems: f,
          };
          n?.endsWith("aggregate") && (k = Bd(k));
          let U = _e({
            callsite: y,
            originalMethod: n || p,
            showColors: i && i === "pretty",
            callArguments: an(k),
            message: `${B}${C}
`,
          });
          return process.env.NO_COLOR || i === "colorless"
            ? (0, Qi.default)(U)
            : U;
        },
        b = new Y(g(o));
      throw (
        (process.env.NODE_ENV !== "production" &&
          Object.defineProperty(b, "render", { get: () => g, enumerable: !1 }),
        b)
      );
    }
    normalizePath(t, r) {
      let n = t.slice(),
        i = [],
        o,
        s = r;
      for (; (o = n.shift()) !== void 0; )
        (!Array.isArray(s) && o === 0) ||
          (o === "select"
            ? s[o]
              ? (s = s[o])
              : (s = s.include)
            : s && s[o] && (s = s[o]),
          i.push(o));
      return i;
    }
  },
  Y = class extends Error {
    get [Symbol.toStringTag]() {
      return "PrismaClientValidationError";
    }
  };
ge(Y, "PrismaClientValidationError");
var W = class extends Error {
  constructor(t) {
    super(
      t +
        `
Read more at https://pris.ly/d/client-constructor`,
    ),
      (this.name = "PrismaClientConstructorValidationError");
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
ge(W, "PrismaClientConstructorValidationError");
var me = class {
    constructor({ name: t, args: r, children: n, error: i, schemaField: o }) {
      (this.name = t),
        (this.args = r),
        (this.children = n),
        (this.error = i),
        (this.schemaField = o),
        (this.hasInvalidChild = n
          ? n.some((s) =>
              Boolean(s.error || s.hasInvalidArg || s.hasInvalidChild),
            )
          : !1),
        (this.hasInvalidArg = r ? r.hasInvalidArg : !1);
    }
    get [Symbol.toStringTag]() {
      return "Field";
    }
    toString() {
      let t = this.name;
      return this.error
        ? t + " # INVALID_FIELD"
        : (this.args &&
            this.args.args &&
            this.args.args.length > 0 &&
            (this.args.args.length === 1
              ? (t += `(${this.args.toString()})`)
              : (t += `(
${(0, it.default)(this.args.toString(), ur)}
)`)),
          this.children &&
            (t += ` {
${(0, it.default)(
  this.children.map(String).join(`
`),
  ur,
)}
}`),
          t);
    }
    collectErrors(t = "select") {
      let r = [],
        n = [];
      if (
        (this.error && r.push({ path: [this.name], error: this.error }),
        this.children)
      )
        for (let i of this.children) {
          let o = i.collectErrors(t);
          r.push(
            ...o.fieldErrors.map((s) => ({
              ...s,
              path: [this.name, t, ...s.path],
            })),
          ),
            n.push(
              ...o.argErrors.map((s) => ({
                ...s,
                path: [this.name, t, ...s.path],
              })),
            );
        }
      return (
        this.args &&
          n.push(
            ...this.args
              .collectErrors()
              .map((i) => ({ ...i, path: [this.name, ...i.path] })),
          ),
        { fieldErrors: r, argErrors: n }
      );
    }
  },
  le = class {
    constructor(t = []) {
      (this.args = t),
        (this.hasInvalidArg = t ? t.some((r) => Boolean(r.hasError)) : !1);
    }
    get [Symbol.toStringTag]() {
      return "Args";
    }
    toString() {
      return this.args.length === 0
        ? ""
        : `${this.args.map((t) => t.toString()).filter((t) => t).join(`
`)}`;
    }
    collectErrors() {
      return this.hasInvalidArg
        ? this.args.flatMap((t) => t.collectErrors())
        : [];
    }
  };
function Vi(e, t) {
  return Buffer.isBuffer(e)
    ? JSON.stringify(e.toString("base64"))
    : e instanceof Ee
      ? `{ _ref: ${JSON.stringify(e.name)}, _container: ${JSON.stringify(e.modelName)}}`
      : Object.prototype.toString.call(e) === "[object BigInt]"
        ? e.toString()
        : typeof t?.type == "string" && t.type === "Json"
          ? e === null
            ? "null"
            : e && e.values && e.__prismaRawParameters__
              ? JSON.stringify(e.values)
              : t?.isList && Array.isArray(e)
                ? JSON.stringify(e.map((r) => JSON.stringify(r)))
                : JSON.stringify(JSON.stringify(e))
          : e === void 0
            ? null
            : e === null
              ? "null"
              : pe.isDecimal(e) || (t?.type === "Decimal" && ke(e))
                ? JSON.stringify(e.toFixed())
                : t?.location === "enumTypes" && typeof e == "string"
                  ? Array.isArray(e)
                    ? `[${e.join(", ")}]`
                    : e
                  : typeof e == "number" && t?.type === "Float"
                    ? e.toExponential()
                    : JSON.stringify(e, null, 2);
}
var ue = class {
  constructor({
    key: t,
    value: r,
    isEnum: n = !1,
    error: i,
    schemaArg: o,
    inputType: s,
  }) {
    (this.inputType = s),
      (this.key = t),
      (this.value = r instanceof z ? r._getName() : r),
      (this.isEnum = n),
      (this.error = i),
      (this.schemaArg = o),
      (this.isNullable =
        o?.inputTypes.reduce((a) => a && o.isNullable, !0) || !1),
      (this.hasError =
        Boolean(i) ||
        (r instanceof le ? r.hasInvalidArg : !1) ||
        (Array.isArray(r) &&
          r.some((a) =>
            a instanceof le
              ? a.hasInvalidArg
              : a instanceof ue
                ? a.hasError
                : !1,
          )));
  }
  get [Symbol.toStringTag]() {
    return "Arg";
  }
  _toString(t, r) {
    let n = this.stringifyValue(t);
    if (!(typeof n > "u")) return `${r}: ${n}`;
  }
  stringifyValue(t) {
    if (!(typeof t > "u")) {
      if (t instanceof le)
        return `{
${(0, it.default)(t.toString(), 2)}
}`;
      if (Array.isArray(t)) {
        if (this.inputType?.type === "Json") return Vi(t, this.inputType);
        let r = !t.some((n) => typeof n == "object");
        return `[${
          r
            ? ""
            : `
`
        }${(0, it.default)(
          t
            .map((n) =>
              n instanceof le
                ? `{
${(0, it.default)(n.toString(), ur)}
}`
                : n instanceof ue
                  ? n.stringifyValue(n.value)
                  : Vi(n, this.inputType),
            )
            .join(
              `,${
                r
                  ? " "
                  : `
`
              }`,
            ),
          r ? 0 : ur,
        )}${
          r
            ? ""
            : `
`
        }]`;
      }
      return Vi(t, this.inputType);
    }
  }
  toString() {
    return this._toString(this.value, this.key);
  }
  collectErrors() {
    if (!this.hasError) return [];
    let t = [];
    if (this.error) {
      let r =
        typeof this.inputType?.type == "object"
          ? `${this.inputType.type.name}${this.inputType.isList ? "[]" : ""}`
          : void 0;
      t.push({ error: this.error, path: [this.key], id: r });
    }
    return Array.isArray(this.value)
      ? t.concat(
          this.value.flatMap((r, n) =>
            r instanceof le
              ? r.collectErrors().map((i) => ({
                  ...i,
                  path: [this.key, String(n), ...i.path],
                }))
              : r instanceof ue
                ? r
                    .collectErrors()
                    .map((i) => ({ ...i, path: [this.key, ...i.path] }))
                : [],
          ),
        )
      : this.value instanceof le
        ? t.concat(
            this.value
              .collectErrors()
              .map((r) => ({ ...r, path: [this.key, ...r.path] })),
          )
        : t;
  }
};
function cn({
  dmmf: e,
  rootTypeName: t,
  rootField: r,
  select: n,
  modelName: i,
  extensions: o,
}) {
  n || (n = {});
  let s = t === "query" ? e.queryType : e.mutationType,
    a = {
      args: [],
      outputType: { isList: !1, type: s, location: "outputObjectTypes" },
      name: t,
    },
    l = { modelName: i },
    u = Ka({
      dmmf: e,
      selection: { [r]: n },
      schemaField: a,
      path: [t],
      context: l,
      extensions: o,
    });
  return new Ui(t, u);
}
function Va(e) {
  return e;
}
function Ka({
  dmmf: e,
  selection: t,
  schemaField: r,
  path: n,
  context: i,
  extensions: o,
}) {
  let s = r.outputType.type,
    a = i.modelName ? o.getAllComputedFields(i.modelName) : {};
  return (
    (t = on(t, a)),
    Object.entries(t).reduce((l, [u, c]) => {
      let p = s.fieldMap ? s.fieldMap[u] : s.fields.find((x) => x.name === u);
      if (!p)
        return (
          a?.[u] ||
            l.push(
              new me({
                name: u,
                children: [],
                error: {
                  type: "invalidFieldName",
                  modelName: s.name,
                  providedName: u,
                  didYouMean: Ur(
                    u,
                    s.fields.map((x) => x.name).concat(Object.keys(a ?? {})),
                  ),
                  outputType: s,
                },
              }),
            ),
          l
        );
      if (
        p.outputType.location === "scalar" &&
        p.args.length === 0 &&
        typeof c != "boolean"
      )
        return (
          l.push(
            new me({
              name: u,
              children: [],
              error: {
                type: "invalidFieldType",
                modelName: s.name,
                fieldName: u,
                providedValue: c,
              },
            }),
          ),
          l
        );
      if (c === !1) return l;
      let d = {
          name: p.name,
          fields: p.args,
          constraints: { minNumFields: null, maxNumFields: null },
        },
        m = typeof c == "object" ? ka(c, ["include", "select"]) : void 0,
        f = m
          ? un(m, d, i, [], typeof p == "string" ? void 0 : p.outputType.type)
          : void 0,
        g = p.outputType.location === "outputObjectTypes";
      if (c) {
        if (c.select && c.include)
          l.push(
            new me({
              name: u,
              children: [
                new me({
                  name: "include",
                  args: new le(),
                  error: { type: "includeAndSelect", field: p },
                }),
              ],
            }),
          );
        else if (c.include) {
          let x = Object.keys(c.include);
          if (x.length === 0)
            return (
              l.push(
                new me({
                  name: u,
                  children: [
                    new me({
                      name: "include",
                      args: new le(),
                      error: { type: "emptyInclude", field: p },
                    }),
                  ],
                }),
              ),
              l
            );
          if (p.outputType.location === "outputObjectTypes") {
            let E = p.outputType.type,
              C = E.fields
                .filter((B) => B.outputType.location === "outputObjectTypes")
                .map((B) => B.name),
              O = x.filter((B) => !C.includes(B));
            if (O.length > 0)
              return (
                l.push(
                  ...O.map(
                    (B) =>
                      new me({
                        name: B,
                        children: [
                          new me({
                            name: B,
                            args: new le(),
                            error: {
                              type: "invalidFieldName",
                              modelName: E.name,
                              outputType: E,
                              providedName: B,
                              didYouMean: Ur(B, C) || void 0,
                              isInclude: !0,
                              isIncludeScalar: E.fields.some(
                                (k) => k.name === B,
                              ),
                            },
                          }),
                        ],
                      }),
                  ),
                ),
                l
              );
          }
        } else if (c.select) {
          let x = Object.values(c.select);
          if (x.length === 0)
            return (
              l.push(
                new me({
                  name: u,
                  children: [
                    new me({
                      name: "select",
                      args: new le(),
                      error: { type: "emptySelect", field: p },
                    }),
                  ],
                }),
              ),
              l
            );
          if (x.filter((C) => C).length === 0)
            return (
              l.push(
                new me({
                  name: u,
                  children: [
                    new me({
                      name: "select",
                      args: new le(),
                      error: { type: "noTrueSelect", field: p },
                    }),
                  ],
                }),
              ),
              l
            );
        }
      }
      let b = g ? Dd(e, p.outputType.type) : null,
        y = b;
      c &&
        (c.select
          ? (y = c.select)
          : c.include
            ? (y = ar(b, c.include))
            : c.by &&
              Array.isArray(c.by) &&
              p.outputType.namespace === "prisma" &&
              p.outputType.location === "outputObjectTypes" &&
              _s(p.outputType.type.name) &&
              (y = Rd(c.by)));
      let w;
      if (y !== !1 && g) {
        let x = i.modelName;
        typeof p.outputType.type == "object" &&
          p.outputType.namespace === "model" &&
          p.outputType.location === "outputObjectTypes" &&
          (x = p.outputType.type.name),
          (w = Ka({
            dmmf: e,
            selection: y,
            schemaField: p,
            path: [...n, u],
            context: { modelName: x },
            extensions: o,
          }));
      }
      return (
        l.push(new me({ name: u, args: f, children: w, schemaField: p })), l
      );
    }, [])
  );
}
function Rd(e) {
  let t = Object.create(null);
  for (let r of e) t[r] = !0;
  return t;
}
function Dd(e, t) {
  let r = Object.create(null);
  for (let n of t.fields)
    e.typeMap[n.outputType.type.name] !== void 0 && (r[n.name] = !0),
      (n.outputType.location === "scalar" ||
        n.outputType.location === "enumTypes") &&
        (r[n.name] = !0);
  return r;
}
function Ji(e, t, r, n) {
  return new ue({
    key: e,
    value: t,
    isEnum: n.location === "enumTypes",
    inputType: n,
    error: {
      type: "invalidType",
      providedValue: t,
      argName: e,
      requiredType: { inputType: r.inputTypes, bestFittingType: n },
    },
  });
}
function Qa(e, t, r) {
  let { isList: n } = t,
    i = $d(t, r),
    o = Pt(e, t);
  return o === i ||
    (n && o === "List<>") ||
    (i === "Json" &&
      o !== "Symbol" &&
      !(e instanceof z) &&
      !(e instanceof Ee)) ||
    (o === "Int" && i === "BigInt") ||
    ((o === "Int" || o === "Float") && i === "Decimal") ||
    (o === "DateTime" && i === "String") ||
    (o === "UUID" && i === "String") ||
    (o === "String" && i === "ID") ||
    (o === "Int" && i === "Float") ||
    (o === "Int" && i === "Long") ||
    (o === "String" && i === "Decimal" && kd(e)) ||
    e === null
    ? !0
    : t.isList && Array.isArray(e)
      ? e.every((s) => Qa(s, { ...t, isList: !1 }, r))
      : !1;
}
function $d(e, t, r = e.isList) {
  let n = Tt(e.type);
  return (
    e.location === "fieldRefTypes" && t.modelName && (n += `<${t.modelName}>`),
    Xt(n, r)
  );
}
var ln = (e) => Da(e, (t, r) => r !== void 0);
function kd(e) {
  return /^\-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i.test(e);
}
function Id(e, t, r, n) {
  let i = null,
    o = [];
  for (let s of r.inputTypes) {
    if (((i = _d(e, t, r, s, n)), i?.collectErrors().length === 0)) return i;
    if (i && i?.collectErrors()) {
      let a = i?.collectErrors();
      a && a.length > 0 && o.push({ arg: i, errors: a });
    }
  }
  if (i?.hasError && o.length > 0) {
    let s = o.map(({ arg: a, errors: l }) => {
      let u = l.map((c) => {
        let p = 1;
        return (
          c.error.type === "invalidType" &&
            (p = 2 * Math.exp(Ua(c.error.providedValue)) + 1),
          (p += Math.log(c.path.length)),
          c.error.type === "missingArg" &&
            a.inputType &&
            Ct(a.inputType.type) &&
            a.inputType.type.name.includes("Unchecked") &&
            (p *= 2),
          c.error.type === "invalidName" &&
            Ct(c.error.originalType) &&
            c.error.originalType.name.includes("Unchecked") &&
            (p *= 2),
          p
        );
      });
      return { score: l.length + Nd(u), arg: a, errors: l };
    });
    return s.sort((a, l) => (a.score < l.score ? -1 : 1)), s[0].arg;
  }
  return i;
}
function Ua(e) {
  let t = 1;
  if (!e || typeof e != "object") return t;
  for (let r in e)
    if (
      !!Object.prototype.hasOwnProperty.call(e, r) &&
      typeof e[r] == "object"
    ) {
      let n = Ua(e[r]) + 1;
      t = Math.max(n, t);
    }
  return t;
}
function Nd(e) {
  return e.reduce((t, r) => t + r, 0);
}
function _d(e, t, r, n, i) {
  if (typeof t > "u")
    return r.isRequired
      ? new ue({
          key: e,
          value: t,
          isEnum: n.location === "enumTypes",
          inputType: n,
          error: {
            type: "missingArg",
            missingName: e,
            missingArg: r,
            atLeastOne: !1,
            atMostOne: !1,
          },
        })
      : null;
  let { isNullable: o, isRequired: s } = r;
  if (
    t === null &&
    !o &&
    !s &&
    !(Ct(n.type)
      ? n.type.constraints.minNumFields !== null &&
        n.type.constraints.minNumFields > 0
      : !1)
  )
    return new ue({
      key: e,
      value: t,
      isEnum: n.location === "enumTypes",
      inputType: n,
      error: {
        type: "invalidNullArg",
        name: e,
        invalidType: r.inputTypes,
        atLeastOne: !1,
        atMostOne: !1,
      },
    });
  if (!n.isList)
    if (Ct(n.type)) {
      if (
        typeof t != "object" ||
        Array.isArray(t) ||
        (n.location === "inputObjectTypes" && !$a(t))
      )
        return Ji(e, t, r, n);
      {
        let c = ln(t),
          p,
          d = Object.keys(c || {}),
          m = d.length;
        return (
          (m === 0 &&
            typeof n.type.constraints.minNumFields == "number" &&
            n.type.constraints.minNumFields > 0) ||
          n.type.constraints.fields?.some((f) => d.includes(f)) === !1
            ? (p = {
                type: "atLeastOne",
                key: e,
                inputType: n.type,
                atLeastFields: n.type.constraints.fields,
              })
            : m > 1 &&
              typeof n.type.constraints.maxNumFields == "number" &&
              n.type.constraints.maxNumFields < 2 &&
              (p = {
                type: "atMostOne",
                key: e,
                inputType: n.type,
                providedKeys: d,
              }),
          new ue({
            key: e,
            value: c === null ? null : un(c, n.type, i, r.inputTypes),
            isEnum: n.location === "enumTypes",
            error: p,
            inputType: n,
            schemaArg: r,
          })
        );
      }
    } else return Ba(e, t, r, n, i);
  if (
    (!Array.isArray(t) && n.isList && e !== "updateMany" && (t = [t]),
    n.location === "enumTypes" || n.location === "scalar")
  )
    return Ba(e, t, r, n, i);
  let a = n.type,
    u = (
      typeof a.constraints?.minNumFields == "number" &&
      a.constraints?.minNumFields > 0
        ? Array.isArray(t) &&
          t.some((c) => !c || Object.keys(ln(c)).length === 0)
        : !1
    )
      ? { inputType: a, key: e, type: "atLeastOne" }
      : void 0;
  if (!u) {
    let c =
      typeof a.constraints?.maxNumFields == "number" &&
      a.constraints?.maxNumFields < 2
        ? Array.isArray(t) &&
          t.find((p) => !p || Object.keys(ln(p)).length !== 1)
        : !1;
    c &&
      (u = {
        inputType: a,
        key: e,
        type: "atMostOne",
        providedKeys: Object.keys(c),
      });
  }
  if (!Array.isArray(t))
    for (let c of r.inputTypes) {
      let p = un(t, c.type, i);
      if (p.collectErrors().length === 0)
        return new ue({
          key: e,
          value: p,
          isEnum: !1,
          schemaArg: r,
          inputType: c,
        });
    }
  return new ue({
    key: e,
    value: t.map((c, p) =>
      n.isList && typeof c != "object"
        ? c
        : typeof c != "object" || !t || Array.isArray(c)
          ? Ji(String(p), c, jd(r), Ld(n))
          : un(c, a, i),
    ),
    isEnum: !1,
    inputType: n,
    schemaArg: r,
    error: u,
  });
}
function Ld(e) {
  return { ...e, isList: !1 };
}
function jd(e) {
  return { ...e, inputTypes: e.inputTypes.filter((t) => !t.isList) };
}
function Ct(e) {
  return !(typeof e == "string" || Object.hasOwnProperty.call(e, "values"));
}
function Ba(e, t, r, n, i) {
  return de(t) && !$e(t)
    ? new ue({
        key: e,
        value: t,
        schemaArg: r,
        inputType: n,
        error: { type: "invalidDateArg", argName: e },
      })
    : Qa(t, n, i)
      ? new ue({
          key: e,
          value: t,
          isEnum: n.location === "enumTypes",
          schemaArg: r,
          inputType: n,
        })
      : Ji(e, t, r, n);
}
function un(e, t, r, n, i) {
  t.meta?.source && (r = { modelName: t.meta.source });
  let o = ln(e),
    { fields: s, fieldMap: a } = t,
    l = s.map((d) => [d.name, void 0]),
    u = Object.entries(o || {}),
    p = Ns(u, l, (d) => d[0]).reduce((d, [m, f]) => {
      let g = a ? a[m] : s.find((y) => y.name === m);
      if (!g) {
        let y =
          typeof f == "boolean" && i && i.fields.some((w) => w.name === m)
            ? m
            : null;
        return (
          d.push(
            new ue({
              key: m,
              value: f,
              error: {
                type: "invalidName",
                providedName: m,
                providedValue: f,
                didYouMeanField: y,
                didYouMeanArg:
                  (!y && Ur(m, [...s.map((w) => w.name), "select"])) || void 0,
                originalType: t,
                possibilities: n,
                outputType: i,
              },
            }),
          ),
          d
        );
      }
      let b = Id(m, f, g, r);
      return b && d.push(b), d;
    }, []);
  if (
    (typeof t.constraints.minNumFields == "number" &&
      u.length < t.constraints.minNumFields) ||
    p.find(
      (d) => d.error?.type === "missingArg" || d.error?.type === "atLeastOne",
    )
  ) {
    let d = t.fields.filter(
      (m) =>
        !m.isRequired && o && (typeof o[m.name] > "u" || o[m.name] === null),
    );
    p.push(
      ...d.map((m) => {
        let f = m.inputTypes[0];
        return new ue({
          key: m.name,
          value: void 0,
          isEnum: f.location === "enumTypes",
          error: {
            type: "missingArg",
            missingName: m.name,
            missingArg: m,
            atLeastOne: Boolean(t.constraints.minNumFields) || !1,
            atMostOne: t.constraints.maxNumFields === 1 || !1,
          },
          inputType: f,
        });
      }),
    );
  }
  return new le(p);
}
function pn({ document: e, path: t, data: r }) {
  let n = sr(r, t);
  if (n === "undefined") return null;
  if (typeof n != "object") return n;
  let i = qd(e, t);
  return Gi({ field: i, data: n });
}
function Gi({ field: e, data: t }) {
  if (!t || typeof t != "object" || !e.children || !e.schemaField) return t;
  let r = {
    DateTime: (n) => new Date(n),
    Json: (n) => JSON.parse(n),
    Bytes: (n) => Buffer.from(n, "base64"),
    Decimal: (n) => new pe(n),
    BigInt: (n) => BigInt(n),
  };
  for (let n of e.children) {
    let i = n.schemaField?.outputType.type;
    if (i && typeof i == "string") {
      let o = r[i];
      if (o)
        if (Array.isArray(t))
          for (let s of t)
            typeof s[n.name] < "u" &&
              s[n.name] !== null &&
              (Array.isArray(s[n.name])
                ? (s[n.name] = s[n.name].map(o))
                : (s[n.name] = o(s[n.name])));
        else
          typeof t[n.name] < "u" &&
            t[n.name] !== null &&
            (Array.isArray(t[n.name])
              ? (t[n.name] = t[n.name].map(o))
              : (t[n.name] = o(t[n.name])));
    }
    if (
      n.schemaField &&
      n.schemaField.outputType.location === "outputObjectTypes"
    )
      if (Array.isArray(t)) for (let o of t) Gi({ field: n, data: o[n.name] });
      else Gi({ field: n, data: t[n.name] });
  }
  return t;
}
function qd(e, t) {
  let r = t.slice(),
    n = r.shift(),
    i = e.children.find((o) => o.name === n);
  if (!i) throw new Error(`Could not find field ${n} in document ${e}`);
  for (; r.length > 0; ) {
    let o = r.shift();
    if (!i.children)
      throw new Error(`Can't get children for field ${i} with child ${o}`);
    let s = i.children.find((a) => a.name === o);
    if (!s) throw new Error(`Can't find child ${o} of field ${i}`);
    i = s;
  }
  return i;
}
function Ki(e) {
  return e
    .split(".")
    .filter((t) => t !== "select")
    .join(".");
}
function Wi(e) {
  if (Object.prototype.toString.call(e) === "[object Object]") {
    let r = {};
    for (let n in e)
      if (n === "select") for (let i in e.select) r[i] = Wi(e.select[i]);
      else r[n] = Wi(e[n]);
    return r;
  }
  return e;
}
function Bd({ ast: e, keyPaths: t, missingItems: r, valuePaths: n }) {
  let i = t.map(Ki),
    o = n.map(Ki),
    s = r.map((l) => ({
      path: Ki(l.path),
      isRequired: l.isRequired,
      type: l.type,
    }));
  return { ast: Wi(e), keyPaths: i, missingItems: s, valuePaths: o };
}
var dn = Ja().version;
var Pe = class extends ie {
  constructor(t) {
    super(t, { code: "P2025", clientVersion: dn }),
      (this.name = "NotFoundError");
  }
};
ge(Pe, "NotFoundError");
function Hi(e, t, r, n) {
  let i;
  if (
    r &&
    typeof r == "object" &&
    "rejectOnNotFound" in r &&
    r.rejectOnNotFound !== void 0
  )
    (i = r.rejectOnNotFound), delete r.rejectOnNotFound;
  else if (typeof n == "boolean") i = n;
  else if (n && typeof n == "object" && e in n) {
    let o = n[e];
    if (o && typeof o == "object") return t in o ? o[t] : void 0;
    i = Hi(e, t, r, o);
  } else typeof n == "function" ? (i = n) : (i = !1);
  return i;
}
var Kd = /(findUnique|findFirst)/;
function Ga(e, t, r, n) {
  if ((r ?? (r = "record"), n && !e && Kd.exec(t)))
    throw typeof n == "boolean" && n
      ? new Pe(`No ${r} found`)
      : typeof n == "function"
        ? n(new Pe(`No ${r} found`))
        : It(n)
          ? n
          : new Pe(`No ${r} found`);
}
function Wa(e, t, r) {
  return e === we.ModelAction.findFirstOrThrow ||
    e === we.ModelAction.findUniqueOrThrow
    ? Qd(t, r)
    : r;
}
function Qd(e, t) {
  return async (r) => {
    if ("rejectOnNotFound" in r.args) {
      let i = _e({
        originalMethod: r.clientMethod,
        callsite: r.callsite,
        message: "'rejectOnNotFound' option is not supported",
      });
      throw new Y(i);
    }
    return await t(r).catch((i) => {
      throw i instanceof ie && i.code === "P2025" ? new Pe(`No ${e} found`) : i;
    });
  };
}
var Ud = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete",
  ],
  Jd = ["aggregate", "count", "groupBy"];
function zi(e, t) {
  let r = [Wd(e, t), Gd(t)];
  e._engineConfig.previewFeatures?.includes("fieldReference") &&
    r.push(zd(e, t));
  let n = e._extensions.getAllModelExtensions(t);
  return n && r.push(tr(n)), Ne({}, r);
}
function Gd(e) {
  return Ce("name", () => e);
}
function Wd(e, t) {
  let r = Te(t),
    n = Object.keys(we.ModelAction).concat("count");
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = i,
        s = (l) => e._request(l);
      s = Wa(o, t, s);
      let a = (l) => (u) => {
        let c = Ye(e._errorFormat);
        return e._createPrismaPromise((p) => {
          let d = {
            args: u,
            dataPath: [],
            action: o,
            model: t,
            clientMethod: `${r}.${i}`,
            jsModelName: r,
            transaction: p,
            callsite: c,
          };
          return s({ ...d, ...l });
        });
      };
      return Ud.includes(o) ? Li(e, t, a) : Hd(i) ? ha(e, i, a) : a({});
    },
  };
}
function Hd(e) {
  return Jd.includes(e);
}
function zd(e, t) {
  return nt(
    Ce("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return ba(t, r);
    }),
  );
}
function Ha(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var Yi = Symbol();
function cr(e) {
  let t = [Yd(e), Ce(Yi, () => e)],
    r = e._extensions.getAllClientExtensions();
  return r && t.push(tr(r)), Ne(e, t);
}
function Yd(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(Te),
    n = [...new Set(t.concat(r))];
  return nt({
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = Ha(i);
      if (e._runtimeDataModel.models[o] !== void 0) return zi(e, o);
      if (e._runtimeDataModel.models[i] !== void 0) return zi(e, i);
    },
    getPropertyDescriptor(i) {
      if (!r.includes(i)) return { enumerable: !1 };
    },
  });
}
function mn(e) {
  return e[Yi] ? e[Yi] : e;
}
function za(e) {
  if (typeof e == "function") return e(this);
  let t = mn(this),
    r = Object.create(t, {
      _extensions: { value: this._extensions.append(e) },
      $use: { value: void 0 },
      $on: { value: void 0 },
    });
  return cr(r);
}
function Ya(e) {
  if (e instanceof ee) return Zd(e);
  if (Array.isArray(e)) {
    let r = [e[0]];
    for (let n = 1; n < e.length; n++) r[n] = pr(e[n]);
    return r;
  }
  let t = {};
  for (let r in e) t[r] = pr(e[r]);
  return t;
}
function Zd(e) {
  return new ee(e.strings, e.values);
}
function pr(e) {
  if (typeof e != "object" || e == null || e instanceof z || xt(e)) return e;
  if (ke(e)) return new pe(e.toFixed());
  if (de(e)) return new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length,
      r;
    for (r = Array(t); t--; ) r[t] = pr(e[t]);
    return r;
  }
  if (typeof e == "object") {
    let t = {};
    for (let r in e)
      r === "__proto__"
        ? Object.defineProperty(t, r, {
            value: pr(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = pr(e[r]));
    return t;
  }
  Me(e, "Unknown value");
}
function Xa(e, t, r, n = 0) {
  return e._createPrismaPromise((i) => {
    let o = t.customDataProxyFetch;
    return (
      "transaction" in t &&
        i !== void 0 &&
        (t.transaction?.kind === "batch" && t.transaction.lock.then(),
        (t.transaction = i)),
      n === r.length
        ? e._executeRequest(t)
        : r[n]({
            model: t.model,
            operation: t.model ? t.action : t.clientMethod,
            args: Ya(t.args ?? {}),
            __internalParams: t,
            query: (s, a = t) => {
              let l = a.customDataProxyFetch;
              return (
                (a.customDataProxyFetch = nl(o, l)),
                (a.args = s),
                Xa(e, a, r, n + 1)
              );
            },
          })
    );
  });
}
function el(e, t) {
  let { jsModelName: r, action: n, clientMethod: i } = t,
    o = r ? n : i;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
  return Xa(e, t, s);
}
function tl(e) {
  return (t) => {
    let r = { requests: t },
      n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? rl(r, n, 0, e) : e(r);
  };
}
function rl(e, t, r, n) {
  if (r === t.length) return n(e);
  let i = e.customDataProxyFetch,
    o = e.requests[0].transaction;
  return t[r]({
    args: {
      queries: e.requests.map((s) => ({
        model: s.modelName,
        operation: s.action,
        args: s.args,
      })),
      transaction: o
        ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 }
        : void 0,
    },
    __internalParams: e,
    query(s, a = e) {
      let l = a.customDataProxyFetch;
      return (a.customDataProxyFetch = nl(i, l)), rl(a, t, r + 1, n);
    },
  });
}
var Za = (e) => e;
function nl(e = Za, t = Za) {
  return (r) => e(t(r));
}
var fn = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new Ie();
      this.modelExtensionsCache = new Ie();
      this.queryCallbacksCache = new Ie();
      this.clientExtensions = Jt(() =>
        this.extension.client
          ? {
              ...this.previous?.getAllClientExtensions(),
              ...this.extension.client,
            }
          : this.previous?.getAllClientExtensions(),
      );
      this.batchCallbacks = Jt(() => {
        let t = this.previous?.getAllBatchQueryCallbacks() ?? [],
          r = this.extension.query?.$__internalBatch;
        return r ? t.concat(r) : t;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () =>
        Ea(this.previous?.getAllComputedFields(t), this.extension, t),
      );
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = Te(t);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? this.previous?.getAllModelExtensions(t)
          : {
              ...this.previous?.getAllModelExtensions(t),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [],
          i = [],
          o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations)
          ? n
          : (o[t] !== void 0 &&
              (o[t][r] !== void 0 && i.push(o[t][r]),
              o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)),
            t !== "$none" &&
              o.$allModels !== void 0 &&
              (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]),
              o.$allModels.$allOperations !== void 0 &&
                i.push(o.$allModels.$allOperations)),
            o[r] !== void 0 && i.push(o[r]),
            o.$allOperations !== void 0 && i.push(o.$allOperations),
            n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  },
  Ze = class {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new Ze();
    }
    static single(t) {
      return new Ze(new fn(t));
    }
    isEmpty() {
      return this.head === void 0;
    }
    append(t) {
      return new Ze(new fn(t, this.head));
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
var il = V("prisma:client"),
  ol = { Vercel: "vercel", "Netlify CI": "netlify" };
function sl({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (il("checkPlatformCaching:postinstall", e),
    il("checkPlatformCaching:ciName", t),
    e === !0 && t && t in ol)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ol[t]}-build`;
    throw (console.error(n), new Q(n, r));
  }
}
var Xd = {
    findUnique: "query",
    findUniqueOrThrow: "query",
    findFirst: "query",
    findFirstOrThrow: "query",
    findMany: "query",
    count: "query",
    create: "mutation",
    createMany: "mutation",
    update: "mutation",
    updateMany: "mutation",
    upsert: "mutation",
    delete: "mutation",
    deleteMany: "mutation",
    executeRaw: "mutation",
    queryRaw: "mutation",
    aggregate: "query",
    groupBy: "query",
    runCommandRaw: "mutation",
    findRaw: "query",
    aggregateRaw: "query",
  },
  gn = class {
    constructor(t, r) {
      this.dmmf = t;
      this.errorFormat = r;
    }
    createMessage({
      action: t,
      modelName: r,
      args: n,
      extensions: i,
      clientMethod: o,
      callsite: s,
    }) {
      let a,
        l = Xd[t];
      (t === "executeRaw" || t === "queryRaw" || t === "runCommandRaw") &&
        (a = t);
      let u;
      if (r !== void 0) {
        if (((u = this.dmmf?.mappingsMap[r]), u === void 0))
          throw new Error(`Could not find mapping for model ${r}`);
        if (((a = u[t === "count" ? "aggregate" : t]), !a)) {
          let d = _e({
            message: `Model \`${r}\` does not support \`${t}\` action.`,
            originalMethod: o,
            callsite: s,
          });
          throw new Y(d);
        }
      }
      if (l !== "query" && l !== "mutation")
        throw new Error(`Invalid operation ${l} for action ${t}`);
      if (this.dmmf?.rootFieldMap[a] === void 0)
        throw new Error(
          `Could not find rootField ${a} for action ${t} for model ${r} on rootType ${l}`,
        );
      let p = cn({
        dmmf: this.dmmf,
        rootField: a,
        rootTypeName: l,
        select: n,
        modelName: r,
        extensions: i,
      });
      return p.validate(n, !1, o, this.errorFormat, s), new Zi(p);
    }
    createBatch(t) {
      return t.map((r) => r.toEngineQuery());
    }
  },
  Zi = class {
    constructor(t) {
      this.document = t;
    }
    isWrite() {
      return this.document.type === "mutation";
    }
    getBatchId() {
      if (!this.getRootField().startsWith("findUnique")) return;
      let t = this.document.children[0].args?.args
          .map((n) =>
            n.value instanceof le
              ? `${n.key}-${n.value.args.map((i) => i.key).join(",")}`
              : n.key,
          )
          .join(","),
        r = this.document.children[0].children.join(",");
      return `${this.document.children[0].name}|${t}|${r}`;
    }
    toDebugString() {
      return String(this.document);
    }
    toEngineQuery() {
      return { query: String(this.document), variables: {} };
    }
    deserializeResponse(t, r) {
      let n = this.getRootField(),
        i = [];
      return (
        n && i.push(n),
        i.push(...r.filter((o) => o !== "select" && o !== "include")),
        pn({ document: this.document, path: i, data: t })
      );
    }
    getRootField() {
      return this.document.children[0].name;
    }
  };
function yn(e) {
  return e === null
    ? e
    : Array.isArray(e)
      ? e.map(yn)
      : typeof e == "object"
        ? em(e)
          ? tm(e)
          : gt(e, yn)
        : e;
}
function em(e) {
  return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function tm({ $type: e, value: t }) {
  switch (e) {
    case "BigInt":
      return BigInt(t);
    case "Bytes":
      return Buffer.from(t, "base64");
    case "DateTime":
      return new Date(t);
    case "Decimal":
      return new pe(t);
    case "Json":
      return JSON.parse(t);
    default:
      Me(t, "Unknown tagged value");
  }
}
var hn = class {
  constructor(t = 0, r) {
    this.context = r;
    this.lines = [];
    this.currentLine = "";
    this.currentIndent = 0;
    this.currentIndent = t;
  }
  write(t) {
    return typeof t == "string" ? (this.currentLine += t) : t.write(this), this;
  }
  writeJoined(t, r) {
    let n = r.length - 1;
    for (let i = 0; i < r.length; i++)
      this.write(r[i]), i !== n && this.write(t);
    return this;
  }
  writeLine(t) {
    return this.write(t).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()),
      (this.currentLine = ""),
      (this.marginSymbol = void 0);
    let t = this.afterNextNewLineCallback;
    return (this.afterNextNewLineCallback = void 0), t?.(), this;
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this;
  }
  afterNextNewline(t) {
    return (this.afterNextNewLineCallback = t), this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(t) {
    return (this.marginSymbol = t), this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(
      this.currentLine.length + 2 * this.currentIndent,
    );
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
  }
};
var ml = F(Kr());
function ul(e, t) {
  let r = cl(e),
    n = rm(r),
    i = nm(n);
  i ? bn(i, t) : t.addErrorMessage(() => "Unknown error");
}
function cl(e) {
  return e.errors.flatMap((t) => (t.kind === "Union" ? cl(t) : [t]));
}
function rm(e) {
  let t = new Map(),
    r = [];
  for (let n of e) {
    if (n.kind !== "InvalidArgumentType") {
      r.push(n);
      continue;
    }
    let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`,
      o = t.get(i);
    o
      ? t.set(i, {
          ...n,
          argument: {
            ...n.argument,
            typeNames: o.argument.typeNames.concat(n.argument.typeNames),
          },
        })
      : t.set(i, n);
  }
  return r.push(...t.values()), r;
}
function nm(e) {
  return gi(e, (t, r) => {
    let n = al(t),
      i = al(r);
    return n !== i ? n - i : ll(t) - ll(r);
  });
}
function al(e) {
  let t = 0;
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  );
}
function ll(e) {
  switch (e.kind) {
    case "InvalidArgumentValue":
    case "ValueTooLarge":
      return 20;
    case "InvalidArgumentType":
      return 10;
    default:
      return 0;
  }
}
var Be = class {
  constructor(t, r) {
    this.name = t;
    this.value = r;
    this.isRequired = !1;
  }
  makeRequired() {
    return (this.isRequired = !0), this;
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.addMarginSymbol(r(this.isRequired ? "+" : "?")),
      t.write(r(this.name)),
      this.isRequired || t.write(r("?")),
      t.write(r(": ")),
      typeof this.value == "string"
        ? t.write(r(this.value))
        : t.write(this.value);
  }
};
var xn = (e) => e,
  pl = { bold: xn, red: xn, green: xn, dim: xn },
  dl = { bold: v, red: R, green: S, dim: $ },
  Ft = {
    write(e) {
      e.writeLine(",");
    },
  };
var Le = class {
  constructor(t) {
    this.contents = t;
    this.isUnderlined = !1;
    this.color = (t) => t;
  }
  underline() {
    return (this.isUnderlined = !0), this;
  }
  setColor(t) {
    return (this.color = t), this;
  }
  write(t) {
    let r = t.getCurrentLineLength();
    t.write(this.color(this.contents)),
      this.isUnderlined &&
        t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(
            this.color("~".repeat(this.contents.length)),
          );
        });
  }
};
var Xe = class {
  constructor() {
    this.hasError = !1;
  }
  markAsError() {
    return (this.hasError = !0), this;
  }
};
var K = class extends Xe {
  constructor() {
    super(...arguments);
    this.fields = {};
    this.suggestions = [];
  }
  addField(r) {
    this.fields[r.name] = r;
  }
  addSuggestion(r) {
    this.suggestions.push(r);
  }
  getField(r) {
    return this.fields[r];
  }
  getDeepField(r) {
    let [n, ...i] = r,
      o = this.getField(n);
    if (!o) return;
    let s = o;
    for (let a of i) {
      if (!(s.value instanceof K)) return;
      let l = s.value.getField(a);
      if (!l) return;
      s = l;
    }
    return s;
  }
  getDeepFieldValue(r) {
    return r.length === 0 ? this : this.getDeepField(r)?.value;
  }
  hasField(r) {
    return Boolean(this.getField(r));
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(r) {
    delete this.fields[r];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(r) {
    return this.getField(r)?.value;
  }
  getDeepSubSelectionValue(r) {
    let n = this;
    for (let i of r) {
      if (!(n instanceof K)) return;
      let o = n.getSubSelectionValue(i);
      if (!o) return;
      n = o;
    }
    return n;
  }
  getDeepSelectionParent(r) {
    let n = this.getSelectionParent();
    if (!n) return;
    let i = n;
    for (let o of r) {
      let s = i.value.getFieldValue(o);
      if (!s || !(s instanceof K)) return;
      let a = s.getSelectionParent();
      if (!a) return;
      i = a;
    }
    return i;
  }
  getSelectionParent() {
    let r = this.getField("select");
    if (r?.value instanceof K) return { kind: "select", value: r.value };
    let n = this.getField("include");
    if (n?.value instanceof K) return { kind: "include", value: n.value };
  }
  getSubSelectionValue(r) {
    return this.getSelectionParent()?.value.fields[r].value;
  }
  getPrintWidth() {
    let r = Object.values(this.fields);
    return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
  }
  write(r) {
    let n = Object.values(this.fields);
    if (n.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithContents(r, n);
  }
  writeEmpty(r) {
    let n = new Le("{}");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithContents(r, n) {
    r.writeLine("{").withIndent(() => {
      r.writeJoined(Ft, [...n, ...this.suggestions]).newLine();
    }),
      r.write("}"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
  }
};
var te = class extends Xe {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new Le(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
};
var wn = class {
  constructor() {
    this.fields = [];
  }
  addField(t, r) {
    return (
      this.fields.push({
        write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        },
      }),
      this
    );
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.writeLine(r("{"))
      .withIndent(() => {
        t.writeJoined(Ft, this.fields).newLine();
      })
      .write(r("}"))
      .addMarginSymbol(r("+"));
  }
};
function bn(e, t) {
  switch (e.kind) {
    case "IncludeAndSelect":
      om(e, t);
      break;
    case "IncludeOnScalar":
      sm(e, t);
      break;
    case "EmptySelection":
      am(e, t);
      break;
    case "UnknownSelectionField":
      lm(e, t);
      break;
    case "UnknownArgument":
      um(e, t);
      break;
    case "UnknownInputField":
      cm(e, t);
      break;
    case "RequiredArgumentMissing":
      pm(e, t);
      break;
    case "InvalidArgumentType":
      dm(e, t);
      break;
    case "InvalidArgumentValue":
      mm(e, t);
      break;
    case "ValueTooLarge":
      fm(e, t);
      break;
    case "SomeFieldsMissing":
      gm(e, t);
      break;
    case "TooManyFieldsGiven":
      ym(e, t);
      break;
    case "Union":
      ul(e, t);
      break;
    default:
      throw new Error("not implemented: " + e.kind);
  }
}
function om(e, t) {
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  r &&
    r instanceof K &&
    (r.getField("include")?.markAsError(), r.getField("select")?.markAsError()),
    t.addErrorMessage(
      (n) =>
        `Please ${n.bold("either")} use ${n.green("`include`")} or ${n.green("`select`")}, but ${n.red("not both")} at the same time.`,
    );
}
function sm(e, t) {
  let [r, n] = En(e.selectionPath),
    i = e.outputType,
    o = t.arguments.getDeepSelectionParent(r)?.value;
  if (o && (o.getField(n)?.markAsError(), i))
    for (let s of i.fields)
      s.isRelation && o.addSuggestion(new Be(s.name, "true"));
  t.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
    return (
      i ? (a += ` on model ${s.bold(i.name)}. ${dr(s)}`) : (a += "."),
      (a += `
Note that ${s.bold("include")} statements only accept relation fields.`),
      a
    );
  });
}
function am(e, t) {
  let r = e.outputType,
    n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value,
    i = n?.isEmpty() ?? !1;
  n && (n.removeAllFields(), yl(n, r)),
    t.addErrorMessage((o) =>
      i
        ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${dr(o)}`
        : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`,
    );
}
function lm(e, t) {
  let [r, n] = En(e.selectionPath),
    i = t.arguments.getDeepSelectionParent(r);
  i && (i.value.getField(n)?.markAsError(), yl(i.value, e.outputType)),
    t.addErrorMessage((o) => {
      let s = [`Unknown field ${o.red(`\`${n}\``)}`];
      return (
        i && s.push(`for ${o.bold(i.kind)} statement`),
        s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`),
        s.push(dr(o)),
        s.join(" ")
      );
    });
}
function um(e, t) {
  let r = e.argumentPath[0],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof K && (n.getField(r)?.markAsError(), hm(n, e.arguments)),
    t.addErrorMessage((i) =>
      fl(
        i,
        r,
        e.arguments.map((o) => o.name),
      ),
    );
}
function cm(e, t) {
  let [r, n] = En(e.argumentPath),
    i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (i instanceof K) {
    i.getDeepField(e.argumentPath)?.markAsError();
    let o = i.getDeepFieldValue(r);
    o instanceof K && hl(o, e.inputType);
  }
  t.addErrorMessage((o) =>
    fl(
      o,
      n,
      e.inputType.fields.map((s) => s.name),
    ),
  );
}
function fl(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    i = xm(t, r);
  return (
    i && n.push(`Did you mean \`${e.green(i)}\`?`),
    r.length > 0 && n.push(dr(e)),
    n.join(" ")
  );
}
function pm(e, t) {
  let r;
  t.addErrorMessage((l) =>
    r?.value instanceof te && r.value.text === "null"
      ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.`
      : `Argument \`${l.green(o)}\` is missing.`,
  );
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (!(n instanceof K)) return;
  let [i, o] = En(e.argumentPath),
    s = new wn(),
    a = n.getDeepFieldValue(i);
  if (a instanceof K)
    if (
      ((r = a.getField(o)),
      r && a.removeField(o),
      e.inputTypes.length === 1 && e.inputTypes[0].kind === "object")
    ) {
      for (let l of e.inputTypes[0].fields)
        s.addField(l.name, l.typeNames.join(" | "));
      a.addSuggestion(new Be(o, s).makeRequired());
    } else {
      let l = e.inputTypes.map(gl).join(" | ");
      a.addSuggestion(new Be(o, l).makeRequired());
    }
}
function gl(e) {
  return e.kind === "list" ? `${gl(e.elementType)}[]` : e.name;
}
function dm(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof K && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = Tn(
        "or",
        e.argument.typeNames.map((s) => i.green(s)),
      );
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
    });
}
function mm(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof K && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = Tn(
          "or",
          e.argument.typeNames.map((a) => i.green(a)),
        ),
        s = [`Invalid value for argument \`${i.bold(r)}\``];
      return (
        e.underlyingError && s.push(`: ${e.underlyingError}`),
        s.push(`. Expected ${o}.`),
        s.join("")
      );
    });
}
function fm(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    i;
  if (n instanceof K) {
    let s = n.getDeepField(e.argumentPath)?.value;
    s?.markAsError(), s instanceof te && (i = s.text);
  }
  t.addErrorMessage((o) => {
    let s = ["Unable to fit value"];
    return (
      i && s.push(o.red(i)),
      s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),
      s.join(" ")
    );
  });
}
function gm(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (n instanceof K) {
    let i = n.getDeepFieldValue(e.argumentPath);
    i instanceof K && hl(i, e.inputType);
  }
  t.addErrorMessage((i) => {
    let o = [
      `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? o.push(
              `${i.green("at least one of")} ${Tn(
                "or",
                e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``),
              )} arguments.`,
            )
          : o.push(`${i.green("at least one")} argument.`)
        : o.push(
            `${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`,
          ),
      o.push(dr(i)),
      o.join(" ")
    );
  });
}
function ym(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    i = [];
  if (n instanceof K) {
    let o = n.getDeepFieldValue(e.argumentPath);
    o instanceof K && (o.markAsError(), (i = Object.keys(o.getFields())));
  }
  t.addErrorMessage((o) => {
    let s = [
      `Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
        ? s.push(`${o.green("exactly one")} argument,`)
        : e.constraints.maxFieldCount == 1
          ? s.push(`${o.green("at most one")} argument,`)
          : s.push(
              `${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`,
            ),
      s.push(
        `but you provided ${Tn(
          "and",
          i.map((a) => o.red(a)),
        )}. Please choose`,
      ),
      e.constraints.maxFieldCount === 1
        ? s.push("one.")
        : s.push(`${e.constraints.maxFieldCount}.`),
      s.join(" ")
    );
  });
}
function yl(e, t) {
  for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new Be(r.name, "true"));
}
function hm(e, t) {
  for (let r of t)
    e.hasField(r.name) ||
      e.addSuggestion(new Be(r.name, r.typeNames.join(" | ")));
}
function hl(e, t) {
  if (t.kind === "object")
    for (let r of t.fields)
      e.hasField(r.name) ||
        e.addSuggestion(new Be(r.name, r.typeNames.join(" | ")));
}
function En(e) {
  let t = [...e],
    r = t.pop();
  if (!r) throw new Error("unexpected empty path");
  return [t, r];
}
function dr({ green: e }) {
  return `Available options are listed in ${e("green")}.`;
}
function Tn(e, t) {
  if (t.length === 1) return t[0];
  let r = [...t],
    n = r.pop();
  return `${r.join(", ")} ${e} ${n}`;
}
var bm = 3;
function xm(e, t) {
  let r = 1 / 0,
    n;
  for (let i of t) {
    let o = (0, ml.default)(e, i);
    o > bm || (o < r && ((r = o), (n = i)));
  }
  return n;
}
var Pn = class extends Xe {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  addItem(r) {
    return this.items.push(r), this;
  }
  getPrintWidth() {
    return this.items.length === 0
      ? 2
      : Math.max(...this.items.map((n) => n.getPrintWidth())) + 2;
  }
  write(r) {
    if (this.items.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithItems(r);
  }
  writeEmpty(r) {
    let n = new Le("[]");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithItems(r) {
    let { colors: n } = r.context;
    r
      .writeLine("[")
      .withIndent(() => r.writeJoined(Ft, this.items).newLine())
      .write("]"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
  }
};
var bl = ": ",
  Mn = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = !1;
    }
    markAsError() {
      this.hasError = !0;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + bl.length;
    }
    write(t) {
      let r = new Le(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(bl).write(this.value);
    }
  };
var Xi = class {
  constructor(t) {
    this.errorMessages = [];
    this.arguments = t;
  }
  write(t) {
    t.write(this.arguments);
  }
  addErrorMessage(t) {
    this.errorMessages.push(t);
  }
  renderAllMessages(t) {
    return this.errorMessages.map((r) => r(t)).join(`
`);
  }
};
function xl(e) {
  return new Xi(wl(e));
}
function wl(e) {
  let t = new K();
  for (let [r, n] of Object.entries(e)) {
    let i = new Mn(r, El(n));
    t.addField(i);
  }
  return t;
}
function El(e) {
  if (typeof e == "string") return new te(JSON.stringify(e));
  if (typeof e == "number" || typeof e == "boolean") return new te(String(e));
  if (typeof e == "bigint") return new te(`${e}n`);
  if (e === null) return new te("null");
  if (e === void 0) return new te("undefined");
  if (ke(e)) return new te(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array)
    return Buffer.isBuffer(e)
      ? new te(`Buffer.alloc(${e.byteLength})`)
      : new te(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = $e(e) ? e.toISOString() : "Invalid Date";
    return new te(`new Date("${t}")`);
  }
  if (e instanceof z) return new te(`Prisma.${e._getName()}`);
  if (xt(e)) return new te(`prisma.${vt(e.modelName)}.$fields.${e.name}`);
  if (Array.isArray(e)) return wm(e);
  if (typeof e == "object") return wl(e);
  Me(e, "Unknown value type");
}
function wm(e) {
  let t = new Pn();
  for (let r of e) t.addItem(El(r));
  return t;
}
function vn({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: i,
}) {
  let o = xl(e);
  for (let c of t) bn(c, o);
  let s = r === "pretty" ? dl : pl,
    a = o.renderAllMessages(s),
    l = new hn(0, { colors: s }).write(o).toString(),
    u = _e({
      message: a,
      callsite: n,
      originalMethod: i,
      showColors: r === "pretty",
      callArguments: l,
    });
  throw new Y(u);
}
var Em = {
  findUnique: "findUnique",
  findUniqueOrThrow: "findUniqueOrThrow",
  findFirst: "findFirst",
  findFirstOrThrow: "findFirstOrThrow",
  findMany: "findMany",
  count: "aggregate",
  create: "createOne",
  createMany: "createMany",
  update: "updateOne",
  updateMany: "updateMany",
  upsert: "upsertOne",
  delete: "deleteOne",
  deleteMany: "deleteMany",
  executeRaw: "executeRaw",
  queryRaw: "queryRaw",
  aggregate: "aggregate",
  groupBy: "groupBy",
  runCommandRaw: "runCommandRaw",
  findRaw: "findRaw",
  aggregateRaw: "aggregateRaw",
};
function Tl({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: i,
  callsite: o,
  clientMethod: s,
  errorFormat: a,
}) {
  let l = new St({
    runtimeDataModel: n,
    modelName: e,
    action: t,
    rootArgs: r,
    callsite: o,
    extensions: i,
    selectionPath: [],
    argumentPath: [],
    originalMethod: s,
    errorFormat: a,
  });
  return { modelName: e, action: Em[t], query: eo(r, l) };
}
function eo({ select: e, include: t, ...r } = {}, n) {
  return { arguments: Ml(r, n), selection: Tm(e, t, n) };
}
function Tm(e, t, r) {
  return (
    e &&
      t &&
      r.throwValidationError({
        kind: "IncludeAndSelect",
        selectionPath: r.getSelectionPath(),
      }),
    e ? vm(e, r) : Pm(r, t)
  );
}
function Pm(e, t) {
  let r = {};
  return (
    e.model && !e.isRawAction() && ((r.$composites = !0), (r.$scalars = !0)),
    t && Mm(r, t, e),
    r
  );
}
function Mm(e, t, r) {
  for (let [n, i] of Object.entries(t)) {
    let o = r.findField(n);
    o &&
      o?.kind !== "object" &&
      r.throwValidationError({
        kind: "IncludeOnScalar",
        selectionPath: r.getSelectionPath().concat(n),
        outputType: r.getOutputTypeDescription(),
      }),
      i === !0
        ? (e[n] = !0)
        : typeof i == "object" && (e[n] = eo(i, r.nestSelection(n)));
  }
}
function vm(e, t) {
  let r = {},
    n = t.getComputedFields(),
    i = on(e, n);
  for (let [o, s] of Object.entries(i)) {
    let a = t.findField(o);
    (n?.[o] && !a) ||
      (s === !0
        ? (r[o] = !0)
        : typeof s == "object" && (r[o] = eo(s, t.nestSelection(o))));
  }
  return r;
}
function Pl(e, t) {
  if (e === null) return null;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
  if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
  if (de(e)) {
    if ($e(e)) return { $type: "DateTime", value: e.toISOString() };
    t.throwValidationError({
      kind: "InvalidArgumentValue",
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ["Date"] },
      underlyingError: "Provided Date object is invalid",
    });
  }
  if (xt(e))
    return {
      $type: "FieldRef",
      value: { _ref: e.name, _container: e.modelName },
    };
  if (Array.isArray(e)) return Am(e, t);
  if (ArrayBuffer.isView(e))
    return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
  if (Cm(e)) return e.values;
  if (ke(e)) return { $type: "Decimal", value: e.toFixed() };
  if (e instanceof z) {
    if (e !== wt.instances[e._getName()])
      throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e._getName() };
  }
  if (typeof e == "object") return Ml(e, t);
  Me(e, "Unknown value type");
}
function Ml(e, t) {
  if (e.$type) return { $type: "Json", value: JSON.stringify(e) };
  let r = {};
  for (let n in e) {
    let i = e[n];
    i !== void 0 && (r[n] = Pl(i, t.nestArgument(n)));
  }
  return r;
}
function Am(e, t) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    i !== void 0 && r.push(Pl(i, t.nestArgument(String(n))));
  }
  return r;
}
function Cm(e) {
  return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
var St = class {
  constructor(t) {
    this.params = t;
    this.params.modelName &&
      (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
  }
  throwValidationError(t) {
    vn({
      errors: [t],
      originalMethod: this.params.originalMethod,
      args: this.params.rootArgs ?? {},
      callsite: this.params.callsite,
      errorFormat: this.params.errorFormat,
    });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.model))
      return {
        name: this.params.modelName,
        fields: this.model.fields.map((t) => ({
          name: t.name,
          typeName: "boolean",
          isRelation: t.kind === "object",
        })),
      };
  }
  isRawAction() {
    return [
      "executeRaw",
      "queryRaw",
      "runCommandRaw",
      "findRaw",
      "aggregateRaw",
    ].includes(this.params.action);
  }
  getComputedFields() {
    if (!!this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    return this.model?.fields.find((r) => r.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t),
      n = r?.kind === "object" ? r.type : void 0;
    return new St({
      ...this.params,
      modelName: n,
      selectionPath: this.params.selectionPath.concat(t),
    });
  }
  nestArgument(t) {
    return new St({
      ...this.params,
      argumentPath: this.params.argumentPath.concat(t),
    });
  }
};
var mr = class {
    constructor(t, r) {
      this.runtimeDataModel = t;
      this.errorFormat = r;
    }
    createMessage(t) {
      let r = Tl({
        ...t,
        runtimeDataModel: this.runtimeDataModel,
        errorFormat: this.errorFormat,
      });
      return new An(r);
    }
    createBatch(t) {
      return t.map((r) => r.toEngineQuery());
    }
  },
  Fm = {
    aggregate: !1,
    aggregateRaw: !1,
    createMany: !0,
    createOne: !0,
    deleteMany: !0,
    deleteOne: !0,
    executeRaw: !0,
    findFirst: !1,
    findFirstOrThrow: !1,
    findMany: !1,
    findRaw: !1,
    findUnique: !1,
    findUniqueOrThrow: !1,
    groupBy: !1,
    queryRaw: !1,
    runCommandRaw: !0,
    updateMany: !0,
    updateOne: !0,
    upsertOne: !0,
  },
  An = class {
    constructor(t) {
      this.query = t;
    }
    isWrite() {
      return Fm[this.query.action];
    }
    getBatchId() {
      if (
        this.query.action !== "findUnique" &&
        this.query.action !== "findUniqueOrThrow"
      )
        return;
      let t = [];
      return (
        this.query.modelName && t.push(this.query.modelName),
        this.query.query.arguments && t.push(to(this.query.query.arguments)),
        t.push(to(this.query.query.selection)),
        t.join("")
      );
    }
    toDebugString() {
      return JSON.stringify(this.query, null, 2);
    }
    toEngineQuery() {
      return this.query;
    }
    deserializeResponse(t, r) {
      if (!t) return t;
      let n = Object.values(t)[0],
        i = r.filter((o) => o !== "select" && o !== "include");
      return yn(sr(n, i));
    }
  };
function to(e) {
  return `(${Object.keys(e)
    .sort()
    .map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${to(n)})` : r;
    })
    .join(" ")})`;
}
var vl = (e) => ({ command: e });
var Al = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
function fr(e) {
  try {
    return Cl(e, "fast");
  } catch {
    return Cl(e, "slow");
  }
}
function Cl(e, t) {
  return JSON.stringify(e.map((r) => Sm(r, t)));
}
function Sm(e, t) {
  return typeof e == "bigint"
    ? { prisma__type: "bigint", prisma__value: e.toString() }
    : de(e)
      ? { prisma__type: "date", prisma__value: e.toJSON() }
      : pe.isDecimal(e)
        ? { prisma__type: "decimal", prisma__value: e.toJSON() }
        : Buffer.isBuffer(e)
          ? { prisma__type: "bytes", prisma__value: e.toString("base64") }
          : Om(e) || ArrayBuffer.isView(e)
            ? {
                prisma__type: "bytes",
                prisma__value: Buffer.from(e).toString("base64"),
              }
            : typeof e == "object" && t === "slow"
              ? Sl(e)
              : e;
}
function Om(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == "object" && e !== null
      ? e[Symbol.toStringTag] === "ArrayBuffer" ||
        e[Symbol.toStringTag] === "SharedArrayBuffer"
      : !1;
}
function Sl(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(Fl);
  let t = {};
  for (let r of Object.keys(e)) t[r] = Fl(e[r]);
  return t;
}
function Fl(e) {
  return typeof e == "bigint" ? e.toString() : Sl(e);
}
var Rm = /^(\s*alter\s)/i,
  Ol = V("prisma:client");
function ro(e, t, r, n) {
  if (
    !(e !== "postgresql" && e !== "cockroachdb") &&
    r.length > 0 &&
    Rm.exec(t)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var no = (e, t) => (r) => {
    let n = "",
      i;
    if (Array.isArray(r)) {
      let [o, ...s] = r;
      (n = o), (i = { values: fr(s || []), __prismaRawParameters__: !0 });
    } else
      switch (e) {
        case "sqlite":
        case "mysql": {
          (n = r.sql),
            (i = { values: fr(r.values), __prismaRawParameters__: !0 });
          break;
        }
        case "cockroachdb":
        case "postgresql": {
          (n = r.text),
            (i = { values: fr(r.values), __prismaRawParameters__: !0 });
          break;
        }
        case "sqlserver": {
          (n = Al(r)),
            (i = { values: fr(r.values), __prismaRawParameters__: !0 });
          break;
        }
        default:
          throw new Error(`The ${e} provider does not support ${t}`);
      }
    return (
      i?.values
        ? Ol(`prisma.${t}(${n}, ${i.values})`)
        : Ol(`prisma.${t}(${n})`),
      { query: n, parameters: i }
    );
  },
  Rl = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new ee(t, r);
    },
  },
  Dl = {
    requestArgsToMiddlewareArgs(e) {
      return [e];
    },
    middlewareArgsToRequestArgs(e) {
      return e[0];
    },
  };
function io(e) {
  return function (r) {
    let n,
      i = (o = e) => {
        try {
          return o === void 0 || o?.kind === "itx"
            ? (n ?? (n = $l(r(o))))
            : $l(r(o));
        } catch (s) {
          return Promise.reject(s);
        }
      };
    return {
      then(o, s) {
        return i().then(o, s);
      },
      catch(o) {
        return i().catch(o);
      },
      finally(o) {
        return i().finally(o);
      },
      requestTransaction(o) {
        let s = i(o);
        return s.requestTransaction ? s.requestTransaction(o) : s;
      },
      [Symbol.toStringTag]: "PrismaPromise",
    };
  };
}
function $l(e) {
  return typeof e.then == "function" ? e : Promise.resolve(e);
}
var kl = {
    isEnabled() {
      return !1;
    },
    getTraceParent() {
      return "00-10-10-00";
    },
    async createEngineSpan() {},
    getActiveContext() {},
    runInChildSpan(e, t) {
      return t();
    },
  },
  oo = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    createEngineSpan(t) {
      return this.getGlobalTracingHelper().createEngineSpan(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      return globalThis.PRISMA_INSTRUMENTATION?.helper ?? kl;
    }
  };
function Il(e) {
  return e.includes("tracing") ? new oo() : kl;
}
function Nl(e, t = () => {}) {
  let r,
    n = new Promise((i) => (r = i));
  return {
    then(i) {
      return --e === 0 && r(t()), i?.(n);
    },
  };
}
function _l(e) {
  return typeof e == "string"
    ? e
    : e.reduce(
        (t, r) => {
          let n = typeof r == "string" ? r : r.level;
          return n === "query"
            ? t
            : t && (r === "info" || t === "info")
              ? "info"
              : n;
        },
        void 0,
      );
}
var Dm = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"],
  Ll = Dm;
function ql(e, t, r) {
  let n = jl(e, r),
    i = jl(t, r),
    o = Object.values(i).map((a) => a[a.length - 1]),
    s = Object.keys(i);
  return (
    Object.entries(n).forEach(([a, l]) => {
      s.includes(a) || o.push(l[l.length - 1]);
    }),
    o
  );
}
var jl = (e, t) =>
  e.reduce((r, n) => {
    let i = t(n);
    return r[i] || (r[i] = []), r[i].push(n), r;
  }, {});
var Cn = class {
  constructor() {
    this._middlewares = [];
  }
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
var Kl = F(Kt());
function Fn(e) {
  return typeof e.batchRequestIdx == "number";
}
function Bl({ result: e, modelName: t, select: r, extensions: n }) {
  let i = n.getAllComputedFields(t);
  if (!i) return e;
  let o = [],
    s = [];
  for (let a of Object.values(i)) {
    if (r) {
      if (!r[a.name]) continue;
      let l = a.needs.filter((u) => !r[u]);
      l.length > 0 && s.push(rr(l));
    }
    $m(e, a.needs) && o.push(km(a, Ne(e, o)));
  }
  return o.length > 0 || s.length > 0 ? Ne(e, [...o, ...s]) : e;
}
function $m(e, t) {
  return t.every((r) => mi(e, r));
}
function km(e, t) {
  return nt(Ce(e.name, () => e.compute(t)));
}
function Sn({
  visitor: e,
  result: t,
  args: r,
  runtimeDataModel: n,
  modelName: i,
}) {
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++)
      t[s] = Sn({
        result: t[s],
        args: r,
        modelName: i,
        runtimeDataModel: n,
        visitor: e,
      });
    return t;
  }
  let o = e(t, i, r) ?? t;
  return (
    r.include &&
      Vl({
        includeOrSelect: r.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      Vl({
        includeOrSelect: r.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    o
  );
}
function Vl({
  includeOrSelect: e,
  result: t,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: i,
}) {
  for (let [o, s] of Object.entries(e)) {
    if (!s || t[o] == null) continue;
    let l = n.models[r].fields.find((c) => c.name === o);
    if (!l || l.kind !== "object" || !l.relationName) continue;
    let u = typeof s == "object" ? s : {};
    t[o] = Sn({
      visitor: i,
      result: t[o],
      args: u,
      modelName: l.type,
      runtimeDataModel: n,
    });
  }
}
var On = class {
  constructor(t) {
    this.options = t;
    this.tickActive = !1;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
          ((this.batches[r] = []),
          this.tickActive ||
            ((this.tickActive = !0),
            process.nextTick(() => {
              this.dispatchBatches(), (this.tickActive = !1);
            }))),
        new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
        r.length === 1
          ? this.options
              .singleLoader(r[0].request)
              .then((n) => {
                n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
              })
              .catch((n) => {
                r[0].reject(n);
              })
          : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)),
            this.options
              .batchLoader(r.map((n) => n.request))
              .then((n) => {
                if (n instanceof Error)
                  for (let i = 0; i < r.length; i++) r[i].reject(n);
                else
                  for (let i = 0; i < r.length; i++) {
                    let o = n[i];
                    o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
                  }
              })
              .catch((n) => {
                for (let i = 0; i < r.length; i++) r[i].reject(n);
              }));
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
var Im = V("prisma:client:request_handler"),
  Rn = class {
    constructor(t, r) {
      (this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new On({
          batchLoader: tl(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, protocolEncoder: s, otelParentCtx: a } = n[0],
              l = s.createBatch(n.map((d) => d.protocolMessage)),
              u = this.client._tracingHelper.getTraceParent(a),
              c = n.some((d) => d.protocolMessage.isWrite());
            return (
              await this.client._engine.requestBatch(l, {
                traceparent: u,
                transaction: Nm(o),
                containsWrite: c,
                customDataProxyFetch: i,
              })
            ).map((d, m) => {
              if (d instanceof Error) return d;
              try {
                return this.mapQueryEngineResult(n[m], d);
              } catch (f) {
                return f;
              }
            });
          }),
          singleLoader: async (n) => {
            let i = n.transaction?.kind === "itx" ? Ql(n.transaction) : void 0,
              o = await this.client._engine.request(
                n.protocolMessage.toEngineQuery(),
                {
                  traceparent: this.client._tracingHelper.getTraceParent(),
                  interactiveTransaction: i,
                  isWrite: n.protocolMessage.isWrite(),
                  customDataProxyFetch: n.customDataProxyFetch,
                },
              );
            return this.mapQueryEngineResult(n, o);
          },
          batchBy: (n) =>
            n.transaction?.id
              ? `transaction-${n.transaction.id}`
              : n.protocolMessage.getBatchId(),
          batchOrder(n, i) {
            return n.transaction?.kind === "batch" &&
              i.transaction?.kind === "batch"
              ? n.transaction.index - i.transaction.index
              : 0;
          },
        }));
    }
    async request(t) {
      try {
        let r = await this.dataloader.request(t);
        return Ga(r, t.clientMethod, t.modelName, t.rejectOnNotFound), r;
      } catch (r) {
        let { clientMethod: n, callsite: i, transaction: o, args: s } = t;
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
        });
      }
    }
    mapQueryEngineResult(
      {
        protocolMessage: t,
        dataPath: r,
        unpacker: n,
        modelName: i,
        args: o,
        extensions: s,
      },
      a,
    ) {
      let l = a?.data,
        u = a?.elapsed,
        c = this.unpack(t, l, r, n);
      return (
        i &&
          (c = this.applyResultExtensions({
            result: c,
            modelName: i,
            args: o,
            extensions: s,
          })),
        process.env.PRISMA_CLIENT_GET_TIME ? { data: c, elapsed: u } : c
      );
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit("error", {
              message: r.message,
              target: t.clientMethod,
              timestamp: new Date(),
            }),
          r)
        );
      }
    }
    handleRequestError({
      error: t,
      clientMethod: r,
      callsite: n,
      transaction: i,
      args: o,
    }) {
      if ((Im(t), _m(t, i) || t instanceof Pe)) throw t;
      if (t instanceof ie && Lm(t)) {
        let a = Ul(t.meta);
        vn({
          args: o,
          errors: [a],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
        });
      }
      let s = t.message;
      throw (
        (n &&
          (s = _e({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === "pretty",
            message: s,
          })),
        (s = this.sanitizeMessage(s)),
        t.code
          ? new ie(s, {
              code: t.code,
              clientVersion: this.client._clientVersion,
              meta: t.meta,
              batchRequestIdx: t.batchRequestIdx,
            })
          : t.isPanic
            ? new be(s, this.client._clientVersion)
            : t instanceof oe
              ? new oe(s, {
                  clientVersion: this.client._clientVersion,
                  batchRequestIdx: t.batchRequestIdx,
                })
              : t instanceof Q
                ? new Q(s, this.client._clientVersion)
                : t instanceof be
                  ? new be(s, this.client._clientVersion)
                  : ((t.clientVersion = this.client._clientVersion), t))
      );
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty"
        ? (0, Kl.default)(t)
        : t;
    }
    unpack(t, r, n, i) {
      if (!r) return r;
      r.data && (r = r.data);
      let o = t.deserializeResponse(r, n);
      return i ? i(o) : o;
    }
    applyResultExtensions({ result: t, modelName: r, args: n, extensions: i }) {
      return i.isEmpty() ||
        t == null ||
        !this.client._runtimeDataModel.models[r]
        ? t
        : Sn({
            result: t,
            args: n ?? {},
            modelName: r,
            runtimeDataModel: this.client._runtimeDataModel,
            visitor(s, a, l) {
              let u = Te(a);
              return Bl({
                result: s,
                modelName: u,
                select: l.select,
                extensions: i,
              });
            },
          });
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
function Nm(e) {
  if (!!e) {
    if (e.kind === "batch")
      return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
    if (e.kind === "itx") return { kind: "itx", options: Ql(e) };
    Me(e, "Unknown transaction kind");
  }
}
function Ql(e) {
  return { id: e.id, payload: e.payload };
}
function _m(e, t) {
  return Fn(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
}
function Lm(e) {
  return e.code === "P2009" || e.code === "P2012";
}
function Ul(e) {
  if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Ul) };
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
  }
  return e;
}
function Jl(e) {
  return e.map((t) => {
    let r = {};
    for (let n of Object.keys(t)) r[n] = Gl(t[n]);
    return r;
  });
}
function Gl({ prisma__type: e, prisma__value: t }) {
  switch (e) {
    case "bigint":
      return BigInt(t);
    case "bytes":
      return Buffer.from(t, "base64");
    case "decimal":
      return new pe(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return new Date(`1970-01-01T${t}Z`);
    case "array":
      return t.map(Gl);
    default:
      return t;
  }
}
var Yl = F(Kr());
var Wl = [
    "datasources",
    "errorFormat",
    "log",
    "__internal",
    "rejectOnNotFound",
  ],
  Hl = ["pretty", "colorless", "minimal"],
  zl = ["info", "query", "warn", "error"],
  jm = {
    datasources: (e, t) => {
      if (!!e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new W(
            `Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`,
          );
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = Ot(r, t) || `Available datasources: ${t.join(", ")}`;
            throw new W(
              `Unknown datasource ${r} provided to PrismaClient constructor.${i}`,
            );
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new W(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new W(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new W(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    errorFormat: (e) => {
      if (!!e) {
        if (typeof e != "string")
          throw new W(
            `Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`,
          );
        if (!Hl.includes(e)) {
          let t = Ot(e, Hl);
          throw new W(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e))
        throw new W(
          `Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`,
        );
      function t(r) {
        if (typeof r == "string" && !zl.includes(r)) {
          let n = Ot(r, zl);
          throw new W(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          );
        }
      }
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (i) => {
            let o = ["stdout", "event"];
            if (!o.includes(i)) {
              let s = Ot(i, o);
              throw new W(
                `Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i]) n[i](o);
            else
              throw new W(
                `Invalid property ${i} for "log" provided to PrismaClient constructor`,
              );
      }
    },
    __internal: (e) => {
      if (!e) return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object")
        throw new W(
          `Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`,
        );
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = Ot(r, t);
          throw new W(
            `Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
    },
    rejectOnNotFound: (e) => {
      if (!!e) {
        if (
          It(e) ||
          typeof e == "boolean" ||
          typeof e == "object" ||
          typeof e == "function"
        )
          return e;
        throw new W(
          `Invalid rejectOnNotFound expected a boolean/Error/{[modelName: Error | boolean]} but received ${JSON.stringify(e)}`,
        );
      }
    },
  };
function Zl(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!Wl.includes(r)) {
      let i = Ot(r, Wl);
      throw new W(
        `Unknown property ${r} provided to PrismaClient constructor.${i}`,
      );
    }
    jm[r](n, t);
  }
}
function Ot(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let r = qm(e, t);
  return r ? ` Did you mean "${r}"?` : "";
}
function qm(e, t) {
  if (t.length === 0) return null;
  let r = t.map((i) => ({ value: i, distance: (0, Yl.default)(e, i) }));
  r.sort((i, o) => (i.distance < o.distance ? -1 : 1));
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
function Xl(e) {
  return e.length === 0
    ? Promise.resolve([])
    : new Promise((t, r) => {
        let n = new Array(e.length),
          i = null,
          o = !1,
          s = 0,
          a = () => {
            o || (s++, s === e.length && ((o = !0), i ? r(i) : t(n)));
          },
          l = (u) => {
            o || ((o = !0), r(u));
          };
        for (let u = 0; u < e.length; u++)
          e[u].then(
            (c) => {
              (n[u] = c), a();
            },
            (c) => {
              if (!Fn(c)) {
                l(c);
                return;
              }
              c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
            },
          );
      });
}
var Oe = V("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var Bm = {
    requestArgsToMiddlewareArgs: (e) => e,
    middlewareArgsToRequestArgs: (e) => e,
  },
  Vm = Symbol.for("prisma.client.transaction.id"),
  Km = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function iu(e) {
  class t {
    constructor(n) {
      this._middlewares = new Cn();
      this._createPrismaPromise = io();
      this._getDmmf = kr(async (n) => {
        try {
          let i = await this._tracingHelper.runInChildSpan(
            { name: "getDmmf", internal: !0 },
            () => this._engine.getDmmf(),
          );
          return this._tracingHelper.runInChildSpan(
            { name: "processDmmf", internal: !0 },
            () => new We(Ks(i)),
          );
        } catch (i) {
          this._fetcher.handleAndLogRequestError({ ...n, args: {}, error: i });
        }
      });
      this._getProtocolEncoder = kr(async (n) =>
        this._engineConfig.engineProtocol === "json"
          ? new mr(this._runtimeDataModel, this._errorFormat)
          : (this._dmmf === void 0 && (this._dmmf = await this._getDmmf(n)),
            new gn(this._dmmf, this._errorFormat)),
      );
      this.$extends = za;
      sl(e), n && Zl(n, e.datasourceNames);
      let i = new ru.EventEmitter().on("error", () => {});
      (this._extensions = Ze.empty()),
        (this._previewFeatures = e.generator?.previewFeatures ?? []),
        (this._rejectOnNotFound = n?.rejectOnNotFound),
        (this._clientVersion = e.clientVersion ?? dn),
        (this._activeProvider = e.activeProvider),
        (this._dataProxy = e.dataProxy),
        (this._tracingHelper = Il(this._previewFeatures)),
        (this._clientEngineType = Gn(e.generator));
      let o = {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            gr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            gr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        s = kt(o, { conflictCheck: "none" });
      try {
        let a = n ?? {},
          l = a.__internal ?? {},
          u = l.debug === !0;
        u && V.enable("prisma:client");
        let c = gr.default.resolve(e.dirname, e.relativePath);
        nu.default.existsSync(c) || (c = e.dirname),
          Oe("dirname", e.dirname),
          Oe("relativePath", e.relativePath),
          Oe("cwd", c);
        let p = a.datasources || {},
          d = Object.entries(p)
            .filter(([b, y]) => y && y.url)
            .map(([b, { url: y }]) => ({ name: b, url: y })),
          m = ql([], d, (b) => b.name),
          f = l.engine || {};
        a.errorFormat
          ? (this._errorFormat = a.errorFormat)
          : process.env.NODE_ENV === "production"
            ? (this._errorFormat = "minimal")
            : process.env.NO_COLOR
              ? (this._errorFormat = "colorless")
              : (this._errorFormat = "colorless"),
          e.runtimeDataModel
            ? (this._runtimeDataModel = e.runtimeDataModel)
            : (this._runtimeDataModel = ys(e.document.datamodel));
        let g = Hn(e.generator);
        if (
          (Oe("protocol", g),
          e.document && (this._dmmf = new We(e.document)),
          (this._engineConfig = {
            cwd: c,
            dirname: e.dirname,
            enableDebugLogs: u,
            allowTriggerPanic: f.allowTriggerPanic,
            datamodelPath: gr.default.join(
              e.dirname,
              e.filename ?? "schema.prisma",
            ),
            prismaPath: f.binaryPath ?? void 0,
            engineEndpoint: f.endpoint,
            datasources: m,
            generator: e.generator,
            showColors: this._errorFormat === "pretty",
            logLevel: a.log && _l(a.log),
            logQueries:
              a.log &&
              Boolean(
                typeof a.log == "string"
                  ? a.log === "query"
                  : a.log.find((b) =>
                      typeof b == "string"
                        ? b === "query"
                        : b.level === "query",
                    ),
              ),
            env: s?.parsed ?? e.injectableEdgeEnv?.parsed ?? {},
            flags: [],
            clientVersion: e.clientVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            logEmitter: i,
            engineProtocol: g,
            isBundled: e.isBundled,
          }),
          Oe("clientVersion", e.clientVersion),
          Oe(
            "clientEngineType",
            this._dataProxy ? "dataproxy" : this._clientEngineType,
          ),
          this._dataProxy && Oe("using Data Proxy with Node.js runtime"),
          (this._engine = this.getEngine()),
          (this._fetcher = new Rn(this, i)),
          a.log)
        )
          for (let b of a.log) {
            let y =
              typeof b == "string" ? b : b.emit === "stdout" ? b.level : null;
            y &&
              this.$on(y, (w) => {
                Vt.log(`${Vt.tags[y] ?? ""}`, w.message || w.query);
              });
          }
        this._metrics = new yt(this._engine);
      } catch (a) {
        throw ((a.clientVersion = this._clientVersion), a);
      }
      return cr(this);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    getEngine() {
      if ((this._dataProxy, this._clientEngineType === "library"))
        return new ir(this._engineConfig);
      throw (
        (this._clientEngineType,
        "binary",
        new Y("Invalid client engine type, please use `library` or `binary`"))
      );
    }
    $use(n) {
      this._middlewares.use(n);
    }
    $on(n, i) {
      n === "beforeExit"
        ? this._engine.on("beforeExit", i)
        : this._engine.on(n, (o) => {
            let s = o.fields;
            return i(
              n === "query"
                ? {
                    timestamp: o.timestamp,
                    query: s?.query ?? o.query,
                    params: s?.params ?? o.params,
                    duration: s?.duration_ms ?? o.duration,
                    target: o.target,
                  }
                : {
                    timestamp: o.timestamp,
                    message: s?.message ?? o.message,
                    target: o.target,
                  },
            );
          });
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      }
    }
    async _runDisconnect() {
      await this._engine.stop(),
        delete this._connectionPromise,
        (this._engine = this.getEngine()),
        delete this._disconnectionPromise;
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      } finally {
        So(), this._dataProxy || (this._dmmf = void 0);
      }
    }
    $executeRawInternal(n, i, o, s) {
      return this._request({
        action: "executeRaw",
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: no(this._activeProvider, i),
        callsite: Ye(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = eu(n, i);
          return (
            ro(
              this._activeProvider,
              s.text,
              s.values,
              Array.isArray(n)
                ? "prisma.$executeRaw`<SQL>`"
                : "prisma.$executeRaw(sql`<SQL>`)",
            ),
            this.$executeRawInternal(o, "$executeRaw", s, a)
          );
        }
        throw new Y(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
        );
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise(
        (o) => (
          ro(
            this._activeProvider,
            n,
            i,
            "prisma.$executeRawUnsafe(<SQL>, [...values])",
          ),
          this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])
        ),
      );
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== "mongodb")
        throw new Y(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
        );
      return this._createPrismaPromise((i) =>
        this._request({
          args: n,
          clientMethod: "$runCommandRaw",
          dataPath: [],
          action: "runCommandRaw",
          argsMapper: vl,
          callsite: Ye(this._errorFormat),
          transaction: i,
        }),
      );
    }
    async $queryRawInternal(n, i, o, s) {
      return this._request({
        action: "queryRaw",
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: no(this._activeProvider, i),
        callsite: Ye(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      }).then(Jl);
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, "$queryRaw", ...eu(n, i));
        throw new Y(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
        );
      });
    }
    $queryRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) =>
        this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]),
      );
    }
    _transactionWithArray({ promises: n, options: i }) {
      let o = Km.nextId(),
        s = Nl(n.length),
        a = n.map((l, u) => {
          if (l?.[Symbol.toStringTag] !== "PrismaPromise")
            throw new Error(
              "All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.",
            );
          let c = i?.isolationLevel,
            p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
          return l.requestTransaction?.(p) ?? l;
        });
      return Xl(a);
    }
    async _transactionWithCallback({ callback: n, options: i }) {
      let o = { traceparent: this._tracingHelper.getTraceParent() },
        s = await this._engine.transaction("start", o, i),
        a;
      try {
        let l = { kind: "itx", ...s };
        (a = await n(this._createItxClient(l))),
          await this._engine.transaction("commit", o, s);
      } catch (l) {
        throw (
          (await this._engine.transaction("rollback", o, s).catch(() => {}), l)
        );
      }
      return a;
    }
    _createItxClient(n) {
      let i = mn(this);
      return cr(
        Ne(i, [
          Ce("_createPrismaPromise", () => io(n)),
          Ce(Vm, () => n.id),
          rr(Ll),
        ]),
      );
    }
    $transaction(n, i) {
      let o;
      typeof n == "function"
        ? (o = () => this._transactionWithCallback({ callback: n, options: i }))
        : (o = () => this._transactionWithArray({ promises: n, options: i }));
      let s = { name: "transaction", attributes: { method: "$transaction" } };
      return this._tracingHelper.runInChildSpan(s, o);
    }
    _request(n) {
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = n.middlewareArgsMapper ?? Bm,
        o = {
          args: i.requestArgsToMiddlewareArgs(n.args),
          dataPath: n.dataPath,
          runInTransaction: Boolean(n.transaction),
          action: n.action,
          model: n.model,
        },
        s = {
          middleware: {
            name: "middleware",
            middleware: !0,
            attributes: { method: "$use" },
            active: !1,
          },
          operation: {
            name: "operation",
            attributes: {
              method: o.action,
              model: o.model,
              name: `${o.model}.${o.action}`,
            },
          },
        },
        a = -1,
        l = (u) => {
          let c = this._middlewares.get(++a);
          if (c)
            return this._tracingHelper.runInChildSpan(s.middleware, (g) =>
              c(u, (b) => (g?.end(), l(b))),
            );
          let { runInTransaction: p, args: d, ...m } = u,
            f = { ...n, ...m };
          return (
            d && (f.args = i.middlewareArgsToRequestArgs(d)),
            n.transaction !== void 0 && p === !1 && delete f.transaction,
            el(this, f)
          );
        };
      return this._tracingHelper.runInChildSpan(s.operation, () =>
        new tu.AsyncResource("prisma-client-request").runInAsyncScope(() =>
          l(o),
        ),
      );
    }
    async _executeRequest({
      args: n,
      clientMethod: i,
      dataPath: o,
      callsite: s,
      action: a,
      model: l,
      argsMapper: u,
      transaction: c,
      unpacker: p,
      otelParentCtx: d,
      customDataProxyFetch: m,
    }) {
      try {
        let f = await this._getProtocolEncoder({
          clientMethod: i,
          callsite: s,
        });
        n = u ? u(n) : n;
        let g = { name: "serialize" },
          b;
        l && ((b = Hi(a, l, n, this._rejectOnNotFound)), Um(b, l, a));
        let y = this._tracingHelper.runInChildSpan(g, () =>
          f.createMessage({
            modelName: l,
            action: a,
            args: n,
            clientMethod: i,
            callsite: s,
            extensions: this._extensions,
          }),
        );
        return (
          V.enabled("prisma:client") &&
            (Oe("Prisma Client call:"),
            Oe(
              `prisma.${i}(${an({ ast: n, keyPaths: [], valuePaths: [], missingItems: [] })})`,
            ),
            Oe("Generated request:"),
            Oe(
              y.toDebugString() +
                `
`,
            )),
          c?.kind === "batch" && (await c.lock),
          this._fetcher.request({
            protocolMessage: y,
            protocolEncoder: f,
            modelName: l,
            action: a,
            clientMethod: i,
            dataPath: o,
            rejectOnNotFound: b,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: c,
            unpacker: p,
            otelParentCtx: d,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            customDataProxyFetch: m,
          })
        );
      } catch (f) {
        throw ((f.clientVersion = this._clientVersion), f);
      }
    }
    get $metrics() {
      if (!this._hasPreviewFlag("metrics"))
        throw new Y(
          "`metrics` preview feature must be enabled in order to access metrics API",
        );
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      return !!this._engineConfig.previewFeatures?.includes(n);
    }
  }
  return t;
}
var Qm = { findUnique: "findUniqueOrThrow", findFirst: "findFirstOrThrow" };
function Um(e, t, r) {
  if (e) {
    let n = Qm[r],
      i = t ? `prisma.${Te(t)}.${n}` : `prisma.${n}`,
      o = `rejectOnNotFound.${t ?? ""}.${r}`;
    Ut(
      o,
      `\`rejectOnNotFound\` option is deprecated and will be removed in Prisma 5. Please use \`${i}\` method instead`,
    );
  }
}
function eu(e, t) {
  return Jm(e) ? [new ee(e, t), Rl] : [e, Dl];
}
function Jm(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
var Gm = new Set([
  "toJSON",
  "$$typeof",
  "asymmetricMatch",
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function ou(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r];
      if (!Gm.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
var su = (e) => e;
function au(e) {
  kt(e, { conflictCheck: "warn" });
}
0 &&
  (module.exports = {
    DMMF,
    DMMFClass,
    Debug,
    Decimal,
    Extensions,
    MetricsClient,
    NotFoundError,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    Public,
    Sql,
    Types,
    decompressFromBase64,
    defineDmmfProperty,
    empty,
    getPrismaClient,
    join,
    makeDocument,
    makeStrictEnum,
    objectEnumValues,
    raw,
    sqltag,
    transformDocument,
    unpack,
    warnEnvConflicts,
    warnOnce,
  });
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
/*!
 * @description Recursive object extending
 * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
 * @license MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2018 Viacheslav Lotsmanov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
//# sourceMappingURL=library.js.map
