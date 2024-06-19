(() => {
    "use strict";
    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, t(e)
    }
    function e(t, e) {
        for (var o = 0; o < e.length; o++) { var n = e[o]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, r(n.key), n) }
    }
    function r(e) {
        var r = function (e, r) {
            if ("object" != t(e) || !e) return e; var o = e[Symbol.toPrimitive];
            if (void 0 !== o) { var n = o.call(e, "string"); if ("object" != t(n)) return n; throw new TypeError("@@toPrimitive must return a primitive value.") }
            return String(e)
        }(e); return "symbol" == t(r) ? r : r + ""
    } new (function () { return t = function t(e) { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.name = e }, (r = [{ key: "greet", value: function () { console.log("Hello, ".concat(this.name, "!")) } }]) && e(t.prototype, r), Object.defineProperty(t, "prototype", { writable: !1 }), t; var t, r }())("daro").greet()
})();