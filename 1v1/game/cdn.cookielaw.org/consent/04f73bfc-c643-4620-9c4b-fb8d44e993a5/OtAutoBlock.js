!(function () {
  function q(a) {
    var c = [],
      b = [],
      e = (function (f) {
        for (var g = {}, h = 0; h < u.length; h++) {
          var d = u[h];
          if (d.Tag === f) {
            g = d;
            break;
          }
          var l = void 0,
            k = d.Tag;
          var C =
            ((k =
              -1 !== k.indexOf("http:")
                ? k.replace("http:", "")
                : k.replace("https:", "")),
            -1 !== (l = k.indexOf("?")) ? k.replace(k.substring(l), "") : k);
          if (f && (-1 !== f.indexOf(C) || -1 !== d.Tag.indexOf(f))) {
            g = d;
            break;
          }
        }
        return g;
      })(a);
    return (
      e.CategoryId && (c = e.CategoryId),
      e.Vendor && (b = e.Vendor.split(":")),
      !e.Tag &&
        D &&
        (b = c =
          (function (f) {
            var g = [],
              h = (function (d) {
                var l = document.createElement("a");
                return (
                  (l.href = d),
                  -1 !== (d = l.hostname.split(".")).indexOf("www") ||
                  2 < d.length
                    ? d.slice(1).join(".")
                    : l.hostname
                );
              })(f);
            v.some(function (d) {
              return d === h;
            }) && (g = ["C0004"]);
            return g;
          })(a)),
      { categoryIds: c, vsCatIds: b }
    );
  }
  function w(a) {
    return (
      !a ||
      !a.length ||
      (a && window.OptanonActiveGroups
        ? a.every(function (c) {
            return -1 !== window.OptanonActiveGroups.indexOf("," + c + ",");
          })
        : void 0)
    );
  }
  function m(a, c) {
    void 0 === c && (c = null);
    var b = window,
      e = b.OneTrust && b.OneTrust.IsVendorServiceEnabled;
    b = e && b.OneTrust.IsVendorServiceEnabled();
    return "Categories" === r || ("All" === r && e && !b)
      ? w(a)
      : ("Vendors" === r || ("All" === r && e && b)) && w(c);
  }
  function n(a) {
    a = a.getAttribute("class") || "";
    return -1 !== a.indexOf("optanon-category") || -1 !== a.indexOf("ot-vscat");
  }
  function p(a) {
    return a.hasAttribute("data-ot-ignore");
  }
  function x(a, c, b) {
    void 0 === b && (b = null);
    var e = a.join("-"),
      f = b && b.join("-"),
      g = c.getAttribute("class") || "",
      h = "",
      d = !1;
    a &&
      a.length &&
      -1 === g.indexOf("optanon-category-" + e) &&
      ((h = ("optanon-category-" + e).trim()), (d = !0));
    b &&
      b.length &&
      -1 === g.indexOf("ot-vscat-" + f) &&
      ((h += " " + ("ot-vscat-" + f).trim()), (d = !0));
    d && c.setAttribute("class", h + " " + g);
  }
  function y(a, c, b) {
    void 0 === b && (b = null);
    var e;
    a = a.join("-");
    b = b && b.join("-");
    return (
      -1 === c.indexOf("optanon-category-" + a) &&
        (e = ("optanon-category-" + a).trim()),
      -1 === c.indexOf("ot-vscat-" + b) &&
        (e += " " + ("ot-vscat-" + b).trim()),
      e + " " + c
    );
  }
  function z(a) {
    var c,
      b = q(a.src || "");
    (b.categoryIds.length || b.vsCatIds.length) &&
      (x(b.categoryIds, a, b.vsCatIds),
      m(b.categoryIds, b.vsCatIds) || (a.type = "text/plain"),
      a.addEventListener(
        "beforescriptexecute",
        (c = function (e) {
          "text/plain" === a.getAttribute("type") && e.preventDefault();
          a.removeEventListener("beforescriptexecute", c);
        })
      ));
  }
  function A(a) {
    var c = a.src || "",
      b = q(c);
    (b.categoryIds.length || b.vsCatIds.length) &&
      (x(b.categoryIds, a, b.vsCatIds),
      m(b.categoryIds, b.vsCatIds) ||
        (a.removeAttribute("src"), a.setAttribute("data-src", c)));
  }
  var u = JSON.parse(
      '[{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://p.rfihub.com/cm","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://eb2.3lift.com/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://server.cpmstar.com/country.aspx","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://sync.go.sonobi.com/usa","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ssum-sec.casalemedia.com/usermatchredir","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://public.servenobid.com/sync.html","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://securepubads.g.doubleclick.net/pcs/view","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ups.analytics.yahoo.com/ups/56621/occ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/setuid","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://server.cpmstar.com/pixel.aspx","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ap.lijit.com/pixel","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js-sec.indexww.com/um/ixmatch.html","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ce.lijit.com/merge","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pixel.advertising.com/ups/57304/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pr-bh.ybp.yahoo.com/sync/triplelift/1141699968021655260305","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://securepubads.g.doubleclick.net/gpt/pubads_impl_2022050501.js","CategoryId":["C0004"],"Vendor":null}]'
    ),
    D = JSON.parse("true"),
    r = JSON.parse('"Categories"'),
    v = (v = [""]).filter(function (a) {
      if ("null" !== a && a.trim().length) return a;
    }),
    t = ["embed", "iframe", "img", "script"],
    B =
      (new MutationObserver(function (a) {
        Array.prototype.forEach.call(a, function (c) {
          Array.prototype.forEach.call(c.addedNodes, function (e) {
            1 !== e.nodeType ||
              -1 === t.indexOf(e.tagName.toLowerCase()) ||
              n(e) ||
              p(e) ||
              ("script" === e.tagName.toLowerCase() ? z : A)(e);
          });
          var b = c.target;
          !c.attributeName ||
            (n(b) && p(b)) ||
            ("script" === b.nodeName.toLowerCase()
              ? z(b)
              : -1 !== t.indexOf(c.target.nodeName.toLowerCase()) && A(b));
        });
      }).observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["src"],
      }),
      document.createElement);
  document.createElement = function () {
    for (var a, c, b = [], e = 0; e < arguments.length; e++)
      b[e] = arguments[e];
    return "script" === b[0].toLowerCase() ||
      -1 !== t.indexOf(b[0].toLowerCase())
      ? ((a = B.bind(document).apply(void 0, b)),
        (c = a.setAttribute.bind(a)),
        Object.defineProperties(a, {
          src: {
            get: function () {
              try {
                return a.cloneNode().src;
              } catch (f) {
                return a.getAttribute("src") || "";
              }
            },
            set: function (f) {
              var g = b[0],
                h,
                d,
                l,
                k = "";
              k = q(
                (k =
                  "string" == typeof f || f instanceof Object
                    ? f.toString()
                    : k)
              );
              return (
                (d = g),
                (l = a),
                (!(h = k).categoryIds.length && !h.vsCatIds.length) ||
                "script" !== d.toLowerCase() ||
                n(l) ||
                m(h.categoryIds, h.vsCatIds) ||
                p(l)
                  ? ((d = g),
                    (h = a),
                    !(l = k).categoryIds.length ||
                    -1 === t.indexOf(d.toLowerCase()) ||
                    n(h) ||
                    m(l.categoryIds, l.vsCatIds) ||
                    p(h)
                      ? c("src", f)
                      : (a.removeAttribute("src"),
                        c("data-src", f),
                        (g = a.getAttribute("class")) ||
                          c("class", y(k.categoryIds, g || "", k.vsCatIds))))
                  : (c("type", "text/plain"), c("src", f)),
                !0
              );
            },
          },
          type: {
            get: function () {
              return a.getAttribute("type") || "";
            },
            set: function (f) {
              return (
                (h = c),
                (d = q((g = a).src || "")),
                h(
                  "type",
                  (!d.categoryIds.length && !d.vsCatIds.length) ||
                    n(g) ||
                    m(d.categoryIds, d.vsCatIds) ||
                    p(g)
                    ? f
                    : "text/plain"
                ),
                !0
              );
              var g, h, d;
            },
          },
          class: {
            set: function (f) {
              return (
                (h = c),
                (!(d = q((g = a).src)).categoryIds.length &&
                  !d.vsCatIds.length) ||
                n(g) ||
                m(d.categoryIds, d.vsCatIds) ||
                p(g)
                  ? h("class", f)
                  : h("class", y(d.categoryIds, f, d.vsCatIds)),
                !0
              );
              var g, h, d;
            },
          },
        }),
        (a.setAttribute = function (f, g, h) {
          ("type" !== f && "src" !== f) || h ? c(f, g) : (a[f] = g);
        }),
        a)
      : B.bind(document).apply(void 0, b);
  };
})();
